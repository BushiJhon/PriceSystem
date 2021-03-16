package com.spike.userinformationmanagement.pojo;

public class Token {
    private String token;
    private Integer id;

    public void setToken(String token) {
        this.token = token;
    }


    public Integer getId() {
        return new Integer(token);
    }

}
