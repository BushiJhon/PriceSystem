package com.spike.userrecommend.controller;

import com.spike.userrecommend.mapper.RecommendMapper;
import com.spike.userrecommend.mapper.UserMapper;
import com.spike.userrecommend.pojo.Token;
import com.spike.userrecommend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecommendController {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RecommendMapper recommendMapper;


    @RequestMapping(value = "/user/recommend", produces = "application/json", method = RequestMethod.GET)
    public List<User> recommendUser(@RequestHeader(value = "ps-token") String token){
        Integer uid = Token.getUid(token);
        User user = userMapper.retrieveUser(uid);
        List<User> list = recommendMapper.selectUser(user.getIndustry());
        return list;
    }
}
