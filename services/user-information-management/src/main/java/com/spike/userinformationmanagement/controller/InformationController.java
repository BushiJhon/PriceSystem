package com.spike.userinformationmanagement.controller;

import com.spike.userinformationmanagement.mapper.InformationMapper;
import com.spike.userinformationmanagement.pojo.Token;
import com.spike.userinformationmanagement.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InformationController {
    @Autowired
    private InformationMapper informationMapper;

    //查询用户信息
    @RequestMapping(value = "/user/showInformation", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public User showInformation(@RequestBody Token token){
        User user = informationMapper.selectUser(token.getId());
        return user;
    }
}
