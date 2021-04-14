package com.spike.search.mapper;

import com.spike.search.pojo.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface PostMapper {
    @Select("select * from post where title = %#{title}%")
    List<Post> findPosts(String title);
}
