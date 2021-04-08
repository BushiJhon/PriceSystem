package com.spike.userrecommend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class UserRecommendApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserRecommendApplication.class, args);
    }

}
