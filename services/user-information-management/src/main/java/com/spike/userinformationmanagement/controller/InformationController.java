package com.spike.userinformationmanagement.controller;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
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
    @HystrixCommand(fallbackMethod = "showInformationFallback")
    @RequestMapping(value = "/user/show", produces = "application/json", method = RequestMethod.GET)
    public User showInformation(@RequestHeader(value = "ps-token") String token){

        Integer uid = Token.getUid(token);
        User user = informationMapper.selectUser(uid);
        return user;
    }

    public User showInformationFallback(@RequestHeader(value = "ps-token") String token){
    	return new User();
    }

    //完善用户信息
    @HystrixCommand(fallbackMethod = "completeInformationFallback")
    @RequestMapping(value = "/user/complete", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean completeInformation(@RequestHeader(value = "ps-token") String token, @RequestBody User user){
        Integer uid = Token.getUid(token);
        Boolean result = informationMapper.insertUser(uid, user.getProvince(), user.getCity(), user.getCompany(), user.getIntroduction(), user.getIndustry());
        return result;
    }

    public Boolean completeInformationFallback(@RequestHeader(value = "ps-token") String token, @RequestBody User user){
    	return false;
    }

    //修改用户信息
    @HystrixCommand(fallbackMethod = "modifyInformationFallback")
    @RequestMapping(value = "/user/modify", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean modifyInformation(@RequestHeader(value = "ps-token") String token, @RequestBody User user){
        Integer uid = Token.getUid(token);
        Boolean result = informationMapper.updateUser(user.getProvince(), user.getCity(), user.getCompany(), user.getIntroduction(), user.getIndustry(), uid);
        return result;
    }

    public Boolean modifyInformationFallback(@RequestHeader(value = "ps-token") String token, @RequestBody User user){
    	return false;
    }

}
