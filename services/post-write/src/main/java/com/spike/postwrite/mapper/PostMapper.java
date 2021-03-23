package com.spike.postwrite.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Mapper
public interface PostMapper {

    @Insert("insert into post(date, province, city, title, content, uid) value(#{date}, #{province}, #{city}, #{title}, #{content}, #{uid})")
    Boolean insertPost(Date date, String province, String city, String title, String content, Integer uid);
}
