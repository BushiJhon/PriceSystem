package com.spike.userinformationmanagement.pojo;

public class User {
    private Integer uid;
    private String province;    //省份
    private String city;        //城市
    private String industry;    //所在行业
    private String company;     //公司
    private String introduction;//简介

    public void setUid(Integer uid) {
        this.uid = uid;
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

    public void setCompany(String company) {
        this.company = company;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Integer getUid() {
        return uid;
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

    public String getCompany() {
        return company;
    }

    public String getIntroduction() {
        return introduction;
    }

}
