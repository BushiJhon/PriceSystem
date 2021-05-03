package com.spike.userauthentication.controller;

public class ReturnInfo {
    private String message;
    private String token;
    private String nickname;

    public ReturnInfo(String message, String token, String nickname) {
        this.message = message;
        this.token = token;
	this.nickname = nickname;
    }

    public ReturnInfo(String message, String token){
    	this.message = message;
	this.token = token;
    }


    public void setMessage(String message) {
        this.message = message;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setNickname(String nickname){
    	this.nickname = nickname;
    }

    public String getMessage() {
        return message;
    }

    public String getToken() {
        return token;
    }

    public String getNickname(){
    	return nickname;
    }
}

class Message{
    public static final String LOGINSUCCESS = "登录成功";
    public static final String LOGINFAILED = "密码错误或用户不存在";
    public static final String REGISTERSUCCESS = "注册成功";
    public static final String REPEATEDNICKNAME = "昵称已经存在";
    public static final String REPEATEDMOBILE = "电话号码已经存在";
    public static final String REGISTERFAILED = "注册失败，请重试";
    public static final String REPEATEDNICKNAMEANDMOBILE = "昵称与电话号码已经存在";

    public static final String NONETOKEN = "未生成令牌";
}
