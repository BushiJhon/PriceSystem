package com.spike.postrecommend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class PostRecommendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PostRecommendApplication.class, args);
    }

}
