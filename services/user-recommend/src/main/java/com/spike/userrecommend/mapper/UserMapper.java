package com.spike.userrecommend.mapper;

import com.spike.userrecommend.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface UserMapper {

    @Select("select * from user where uid = #{uid}")
    User retrieveUser(Integer uid);
}
