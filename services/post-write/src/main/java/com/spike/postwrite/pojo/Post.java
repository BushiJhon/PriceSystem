package com.spike.postwrite.pojo;

import java.util.Date;

public class Post {
    private Integer pid;
    private Date issueDate;
    private String province;
    private String city;
    private String title;
    private String content;
    private Integer uid;
    private String nickname;

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Integer getPid() {
        return pid;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public String getProvince() {
        return province;
    }

    public String getCity() {
        return city;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public Integer getUid() {
        return uid;
    }

    public String getNickname() {
        return nickname;
    }
}
