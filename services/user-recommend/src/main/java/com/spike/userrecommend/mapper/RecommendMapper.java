package com.spike.userrecommend.mapper;

import com.spike.userrecommend.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface RecommendMapper {

    @Select("select * from user where industry = #{industry}")
    List<User> selectUser(String industry);
}
