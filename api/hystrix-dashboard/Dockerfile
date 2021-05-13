FROM java:8

VOLUME /hystrix-dashboard

ADD hystrix-dashboard-0.0.1-SNAPSHOT.jar hystrix-dashboard.jar

RUN bash -c 'touch /hystrix-dashboard.jar'

EXPOSE 8030

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/hystrix-dashboard.jar"]
