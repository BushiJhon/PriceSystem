package com.spike.userauthentication.controller;

import com.spike.userauthentication.mapper.LoginMapper;
import com.spike.userauthentication.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {
    @Autowired
    private LoginMapper loginMapper;

    //根据昵称登录
    @RequestMapping(value = "/user/loginByNickname", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public ReturnInfo loginByNickname(@RequestBody User user){
        User findUser = loginMapper.selectByNickName(user.getNickname(), user.getPassword());

        if(findUser != null)
            return new ReturnInfo(Message.LOGINSUCCESS, findUser.getId().toString());

        return new ReturnInfo(Message.LOGINFAILED, "0");
    }

    //根据电话登录
    @RequestMapping(value = "/user/loginByMobile", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public ReturnInfo loginByMobile(@RequestBody User user){
        User findUser = loginMapper.selectByMobile(user.getMobile(), user.getPassword());

        if(findUser != null)
            return new ReturnInfo( Message.LOGINSUCCESS, findUser.getId().toString());

        return new ReturnInfo(Message.LOGINFAILED, "0");
    }
}
