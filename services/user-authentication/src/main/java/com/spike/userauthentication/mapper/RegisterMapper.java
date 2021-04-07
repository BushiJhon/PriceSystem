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

    @Select("select * from certification where nickname = #{nickname} or mobile = #{mobile}")
    List<User> findUser(String nickname, String mobile);

    @Insert("insert into certification(nickname, password, mobile) value(#{nickname}, #{password}, #{mobile})")
    Boolean insertUser(String nickname, String password, String mobile);

    @Select("select uid from certification where mobile = #{mobile}")
    Integer findUid(String mobile);

}
