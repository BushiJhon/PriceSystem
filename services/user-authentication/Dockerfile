FROM java:8

VOLUME /user-authentication

ADD user-authentication-0.0.1-SNAPSHOT.jar user-authentication.jar

RUN bash -c 'touch /user-authentication.jar'

EXPOSE 8000

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/user-authentication.jar"]
