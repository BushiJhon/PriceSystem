package com.spike.postwrite.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Component
@Mapper
public interface PostMapper {

    @Insert("insert into post(issueDate, province, city, title, content, uid) value(#{issueDate}, #{province}, #{city}, #{title}, #{content}, #{uid})")
    Boolean insertPost(Timestamp issueDate, String province, String city, String title, String content, Integer uid);
}
