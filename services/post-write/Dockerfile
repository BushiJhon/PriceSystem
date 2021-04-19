FROM java:8

VOLUME /post-write

ADD post-write-0.0.1-SNAPSHOT.jar post-write.jar

RUN bash -c 'touch /post-write.jar'

EXPOSE 8020

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/post-write.jar"]
