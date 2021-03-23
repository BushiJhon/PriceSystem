package com.spike.postcomment.pojo;

import java.sql.Timestamp;

public class Comment {
    private Integer cid;
    private Timestamp date;
    private String content;
    private Integer uid;
    private Integer pid;

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Integer getCid() {
        return cid;
    }

    public Timestamp getDate() {
        return date;
    }

    public String getContent() {
        return content;
    }

    public Integer getUid() {
        return uid;
    }

    public Integer getPid() {
        return pid;
    }
}
