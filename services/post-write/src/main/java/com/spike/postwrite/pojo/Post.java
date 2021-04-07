package com.spike.postwrite.pojo;

import java.sql.Timestamp;

public class Post {
    private Integer pid;
    private Timestamp issueDate;
    private String province;
    private String city;
    private String industry;
    private String title;
    private String content;
    private Integer uid;

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public void setIssueDate(Timestamp issueDate) {
        this.issueDate = issueDate;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
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

    public Integer getPid() {
        return pid;
    }

    public Timestamp getIssueDate() {
        return issueDate;
    }

    public String getProvince() {
        return province;
    }

    public String getCity() {
        return city;
    }

    public String getIndustry() {
        return industry;
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
}
