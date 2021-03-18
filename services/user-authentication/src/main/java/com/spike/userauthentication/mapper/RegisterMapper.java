package com.spike.userauthentication.mapper;

import com.spike.userauthentication.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface RegisterMapper {

    @Select("select * from loginInformation where nickname = #{nickname} or mobile = #{mobile}")
    List<User> findUser(String nickname, String mobile);

    @Insert("insert into loginInformation(nickname, password, mobile) value(#{nickname}, #{password}, #{mobile})")
    Boolean InsertUser(String nickname, String password, String mobile);

    @Select("select id from loginInformation where mobile = #{mobile}")
    Integer findId(String mobile);

}
