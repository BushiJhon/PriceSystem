package com.spike.userinformationmanagement.controller;

import com.spike.userinformationmanagement.pojo.Avatar;
import com.spike.userinformationmanagement.pojo.Token;
import org.springframework.web.bind.annotation.*;

@RestController
public class AvatarController {
    @RequestMapping(value = "/avatar/upload", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean uploadAvatar(@RequestHeader(value = "ps-token") String token, @RequestBody Avatar avatar){
        Integer id = Token.getId(token);
        Boolean result = avatar.saveAvatar(id);
        return result;
    }

    @RequestMapping(value = "/avatar/download", produces = "application/json", method = RequestMethod.GET)
    public String downloadAvatar(@RequestHeader(value = "ps-token") String token){
        Integer id = Token.getId(token);
        Avatar avatar = new Avatar();
        if(avatar.findAvatar(id)){
            return avatar.getAvatarBase64();
        }
        return "";
    }
}
