package com.spike.userauthentication.pojo;

public class User {
    private Integer id;
    private String nickname;
    private String password;
    private String mobile;

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Integer getId() {
        return id;
    }

    public String getNickname() {
        return nickname;
    }

    public String getPassword() {
        return password;
    }

    public String getMobile() {
        return mobile;
    }

    public boolean nicknameEquals(User user){
        if(this.getNickname().equals(user.getNickname()))return true;
        return false;
    }

    public boolean mobileEquals(User user){
        if(this.getMobile().equals(user.getMobile()))return true;
        return false;
    }


}
