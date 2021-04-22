FROM java:8

VOLUME /eureka

ADD eureka-0.0.1-SNAPSHOT.jar eureka.jar

RUN bash -c 'touch /eureka.jar'

EXPOSE 8040

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/eureka.jar"]
