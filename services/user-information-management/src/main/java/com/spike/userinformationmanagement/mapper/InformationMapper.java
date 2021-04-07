package com.spike.userinformationmanagement.mapper;

import com.spike.userinformationmanagement.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface InformationMapper {
    @Select("select * from user where uid = #{uid}")
    User selectUser(Integer uid);

    @Insert("insert into user(uid, province, city, company, introduction, industry) value(#{uid}, #{province}, #{city}, #{company}, #{introduction}, #{industry})")
    Boolean insertUser(Integer uid, String province, String city, String company, String introduction, String industry);

    @Update("update user set province = #{province}, city = #{city}, company = #{company}, introduction = #{introduction}, industry = #{industry} where uid = #{uid}")
    Boolean updateUser(String province, String city, String company, String introduction, String industry, Integer uid);
}
