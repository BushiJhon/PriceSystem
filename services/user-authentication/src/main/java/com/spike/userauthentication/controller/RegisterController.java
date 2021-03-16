package com.spike.userauthentication.controller;

import com.spike.userauthentication.mapper.RegisterMapper;
import com.spike.userauthentication.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RegisterController {
    @Autowired
    private RegisterMapper registerMapper;

    private boolean isUserExist(List<User> users){
        if(users != null)return true;
        return false;
    }


    //用户注册
    @RequestMapping(value = "/user/register", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public ReturnInfo registerUser(@RequestBody User user){
        List<User> findUsers = registerMapper.findUser(user.getNickname(), user.getMobile());

        if(isUserExist(findUsers)){
            if(findUsers.size() == 2)
                return new ReturnInfo(Message.REPEATEDNICKNAMEANDMOBILE, "0");

            User findUser = findUsers.get(0);
            if(user.nicknameEquals(findUser))
                return new ReturnInfo(Message.REPEATEDNICKNAME, "0");
            if(user.mobileEquals(findUser))
                return new ReturnInfo(Message.REPEATEDMOBILE, "0");
        }

        Boolean result = this.registerMapper.InsertUser(user.getNickname(), user.getPassword(), user.getMobile());
        if(result)
            return new ReturnInfo(Message.REGISTERSUCCESS, "1");

        return new ReturnInfo(Message.REGISTERFAILED, "0");
    }

}
