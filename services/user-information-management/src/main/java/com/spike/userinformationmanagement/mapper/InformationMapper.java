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
    @Select("select * from user where id = #{id}")
    User selectUser(Integer id);

    @Insert("insert into user(id, province, city, company, introduction, industry) value(#{id}, #{province}, #{city}, #{company}, #{introduction}, #{industry})")
    Boolean insertUser(Integer id, String province, String city, String company, String introduction, String industry);

    @Update("update user set province = #{province}, city = #{city}, company = #{company}, introduction = #{introduction}, industry = #{industry} where id = #{id}")
    Boolean updateUser(String province, String city, String company, String introduction, String industry, Integer id);
}
