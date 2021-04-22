FROM java:8

VOLUME /zuul

ADD zuul-0.0.1-SNAPSHOT.jar zuul.jar

RUN bash -c 'touch /zuul.jar'

EXPOSE 8050

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/zuul.jar"]
