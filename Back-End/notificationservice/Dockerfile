# ----- BUILD STAGE -----
FROM maven:3.9.9-eclipse-temurin-17 AS build

# Working directory
WORKDIR /app


COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src

# Build JAR
RUN mvn clean package -DskipTests


# ----- RUNTIME STAGE -----
FROM eclipse-temurin:17-jdk-alpine AS runtime

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8086

# Environment
ENV SPRING_PROFILES_ACTIVE=prod

ENTRYPOINT ["java", "-jar", "app.jar"]