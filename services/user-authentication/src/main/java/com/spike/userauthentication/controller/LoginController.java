package com.spike.userauthentication.controller;

import com.spike.userauthentication.mapper.LoginMapper;
import com.spike.userauthentication.pojo.Token;
import com.spike.userauthentication.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
public class LoginController {
    @Autowired
    private LoginMapper loginMapper;

    private Token token = Token.getInstance();

    //根据昵称登录
    @RequestMapping(value = "/login/nickname", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public ReturnInfo loginByNickname(@RequestBody User user){
        User findUser = loginMapper.selectByNickName(user.getNickname(), user.getPassword());

        if(findUser != null){
            try{
                return new ReturnInfo(Message.LOGINSUCCESS, token.createToken(findUser.getUId()));
            }catch(UnsupportedEncodingException exception){
                return new ReturnInfo(Message.LOGINFAILED, Message.NONETOKEN);
            }
        }

        return new ReturnInfo(Message.LOGINFAILED, Message.NONETOKEN);
    }

    //根据电话登录
    @RequestMapping(value = "/login/mobile", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public ReturnInfo loginByMobile(@RequestBody User user){
        User findUser = loginMapper.selectByMobile(user.getMobile(), user.getPassword());

        if(findUser != null){
            try{
                return new ReturnInfo(Message.LOGINSUCCESS, token.createToken(findUser.getUId()));
            }catch(UnsupportedEncodingException exception){
                return new ReturnInfo(Message.LOGINFAILED, Message.NONETOKEN);
            }
        }

        return new ReturnInfo(Message.LOGINFAILED, Message.NONETOKEN);
    }
}
