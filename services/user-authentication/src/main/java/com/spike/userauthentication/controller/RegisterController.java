package com.spike.userauthentication.controller;

import com.spike.userauthentication.mapper.RegisterMapper;
import com.spike.userauthentication.pojo.Token;
import com.spike.userauthentication.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RegisterController {
    @Autowired
    private RegisterMapper registerMapper;

    private Token token = Token.getInstance();

    private boolean isUserExist(List<User> users){
        if(users == null || users.size() == 0)return false;
        return true;
    }


    //用户注册
    @RequestMapping(value = "/user/register", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public ReturnInfo registerUser(@RequestBody User user){
        List<User> findUsers = registerMapper.findUsers(user.getNickname(), user.getMobile());

        if(isUserExist(findUsers)){

            if(findUsers.size() == 2)
                return new ReturnInfo(Message.REPEATEDNICKNAMEANDMOBILE, Message.NONETOKEN);
            User findUser = findUsers.get(0);

            if(user.nicknameEquals(findUser))
                return new ReturnInfo(Message.REPEATEDNICKNAME, Message.NONETOKEN);
            if(user.mobileEquals(findUser))
                return new ReturnInfo(Message.REPEATEDMOBILE, Message.NONETOKEN);
        }

        try{
            this.registerMapper.insertUser(user.getNickname(), user.getPassword(), user.getMobile());
            User findUser = registerMapper.findUser(user.getMobile());
            return new ReturnInfo(Message.REGISTERSUCCESS, token.createToken(findUser), findUser.getNickname());
        }catch (UnsupportedEncodingException exception){
            return new ReturnInfo(Message.REGISTERFAILED, Message.NONETOKEN);
        }
    }

}
