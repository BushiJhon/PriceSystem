FROM java:8

VOLUME /post-recommend

ADD post-recommend-0.0.1-SNAPSHOT.jar post-recommend.jar

RUN bash -c 'touch /post-recommend.jar'

EXPOSE 8060

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/post-recommend.jar"]
