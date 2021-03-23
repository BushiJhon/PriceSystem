package com.spike.postcomment.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Component
@Mapper
public interface CommentMapper {

    @Insert("insert into comment(date, content, uid, pid) value(#{date}, #{content}, #{uid}, #{pid})")
    Boolean insertComment(Timestamp date, String content, Integer uid, Integer pid);
}
