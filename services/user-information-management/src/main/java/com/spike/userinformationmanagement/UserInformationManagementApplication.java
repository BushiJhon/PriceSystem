package com.spike.userinformationmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@EnableDiscoveryClient
@SpringBootApplication
@EnableHystrix
public class UserInformationManagementApplication {

    public static void main(String[] args) {
        File file = new File("avatars");
        if(!file.exists()){
            file.mkdir();
        }

        SpringApplication.run(UserInformationManagementApplication.class, args);
    }

}
