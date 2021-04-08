package com.spike.postrecommend.mapper;

import com.spike.postrecommend.pojo.Post;
import com.spike.postrecommend.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface RecommendMapper {

    @Select("select * from post where industry = #{industry}")
    List<Post> selectPost(String industry);

//    @Select("select * from user where industry = #{industry}")
//    List<User> selectUser(String industry);
}
