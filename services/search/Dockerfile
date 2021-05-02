FROM java:8

VOLUME /search

ADD search-0.0.1-SNAPSHOT.jar search.jar

RUN bash -c 'touch /search.jar'

EXPOSE 8080

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/search.jar"]
