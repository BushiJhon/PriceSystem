package com.spike.userinformationmanagement.controller;

import com.spike.userinformationmanagement.mapper.InformationMapper;
import com.spike.userinformationmanagement.pojo.Token;
import com.spike.userinformationmanagement.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class InformationController {
    @Autowired
    private InformationMapper informationMapper;

    //查询用户信息
    @RequestMapping(value = "/user/show", produces = "application/json", method = RequestMethod.GET)
    public User showInformation(@RequestHeader(value = "ps-token") String token){

        Integer id = Token.getId(token);
        User user = informationMapper.selectUser(id);
        return user;
    }

    //完善用户信息
    @RequestMapping(value = "/user/complete", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean completeInformation(@RequestHeader(value = "ps-token") String token, @RequestBody User user){
        Integer id = Token.getId(token);
        Boolean result = informationMapper.insertUser(id, user.getProvince(), user.getCity(), user.getCompany(), user.getIntroduction(), user.getIndustry());
        return result;
    }

    //修改用户信息
    @RequestMapping(value = "/user/modify", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean modifyInformation(@RequestHeader(value = "ps-token") String token, @RequestBody User user){
        Integer id = Token.getId(token);
        Boolean result = informationMapper.updateUser(user.getProvince(), user.getCity(), user.getCompany(), user.getIntroduction(), user.getIndustry(), id);
        return result;
    }

}
