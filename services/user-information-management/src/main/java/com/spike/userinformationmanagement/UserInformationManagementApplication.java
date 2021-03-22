package com.spike.userinformationmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@EnableDiscoveryClient
@SpringBootApplication
public class UserInformationManagementApplication {

    public static void main(String[] args) {
        File file = new File("avatars");
        if(!file.exists()){
            file.mkdir();
        }

        SpringApplication.run(UserInformationManagementApplication.class, args);
    }

}
