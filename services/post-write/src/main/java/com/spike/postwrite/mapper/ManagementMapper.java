package com.spike.postwrite.mapper;

import com.spike.postwrite.pojo.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface ManagementMapper {

    @Select("select * from post where uid = #{uid}")
    List<Post> listPost(Integer uid);
}
