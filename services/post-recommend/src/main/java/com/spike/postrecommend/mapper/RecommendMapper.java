package com.spike.postrecommend.mapper;

import com.spike.postrecommend.pojo.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface RecommendMapper {

    @Select("select * from post order by issueDate desc limit #{page}, 5")
    List<Post> selectRecommendPosts(Integer page);


    @Select("select * from post where industry = #{industry}")
    List<Post> selectPosts(String industry);

    @Select("select * from post where pid = #{pid}")
    Post selectPost(Integer pid);
}
