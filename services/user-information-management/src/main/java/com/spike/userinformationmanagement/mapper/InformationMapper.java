package com.spike.userinformationmanagement.mapper;

import com.spike.userinformationmanagement.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

@Component
@Mapper
public interface InformationMapper {
    @Select("select * from user where id = #{id}")
    User selectUser(Integer id);

    @Update("update user set province = #{province}, city = #{city}, company = #{company}, introduction = #{introduction}, industry = #{industry}")
    Boolean updateUser(String province, String city, String company, String introduction, String industry, Integer id);
}
