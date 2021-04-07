package com.spike.userinformationmanagement.controller;

import com.spike.userinformationmanagement.pojo.Avatar;
import com.spike.userinformationmanagement.pojo.Token;
import org.springframework.web.bind.annotation.*;

@RestController
public class AvatarController {
    @RequestMapping(value = "/avatar/upload", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean uploadAvatar(@RequestHeader(value = "ps-token") String token, @RequestBody Avatar avatar){
        Integer uid = Token.getUid(token);
        Boolean result = avatar.saveAvatar(uid);
        return result;
    }

    @RequestMapping(value = "/avatar/download", produces = "application/json", method = RequestMethod.GET)
    public String downloadAvatar(@RequestHeader(value = "ps-token") String token){
        Integer uid = Token.getUid(token);
        Avatar avatar = new Avatar();
        if(avatar.findAvatar(uid)){
            return avatar.getAvatarBase64();
        }
        return "";
    }
}
