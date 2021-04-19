FROM java:8

VOLUME /user-information-management

ADD user-information-management-0.0.1-SNAPSHOT.jar user-information-management.jar

RUN bash -c 'touch /user-information-management.jar'

EXPOSE 8010

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/user-information-management.jar"]
