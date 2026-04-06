FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 5252  
ENTRYPOINT ["java", "-jar", "app.jar"]