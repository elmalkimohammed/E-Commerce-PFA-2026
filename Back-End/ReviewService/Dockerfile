# Étape 1 : Compilation
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app

# Copier les fichiers Maven
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Rendre mvnw exécutable et compiler
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Étape 2 : Exécution
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# Copier le JAR depuis l'étape de build
COPY --from=build /app/target/*.jar app.jar

EXPOSE 5252
ENTRYPOINT ["java", "-jar", "app.jar"]