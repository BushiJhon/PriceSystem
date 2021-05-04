package com.spike.userauthentication.mapper;

import com.spike.userauthentication.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface LoginMapper {

    @Select("select * from certification where nickname = #{nickname} and password = #{password}")
    User selectByNickName(String nickname, String password);

    @Select("select * from certification where mobile = #{mobile} and password = #{password}")
    User selectByMobile(String mobile, String password);

    @Select("select mobile from certification where uid = #{uid}")
    String selectMobile(Integer uid);
}
