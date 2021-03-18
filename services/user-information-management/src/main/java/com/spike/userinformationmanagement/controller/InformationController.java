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
    @RequestMapping(value = "/user/showInformation", produces = "application/json", method = RequestMethod.GET)
    public User showInformation(@RequestHeader(value = "Authorization") String str){
        System.out.println(str);
        User user = informationMapper.selectUser(1);
        return user;
    }

    //修改用户信息
    @RequestMapping(value = "/user/modifyInformation", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean modifyInformation(@RequestHeader(value = "Authorization") String authorization, @RequestBody User user){
        System.out.println(authorization);
        Boolean result = informationMapper.updateUser("云南省", "昆明市", "电缆", "行业介绍", "电力", 1);
        return result;
    }
}
