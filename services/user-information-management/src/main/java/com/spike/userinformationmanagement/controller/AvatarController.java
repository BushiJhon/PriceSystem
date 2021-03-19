package com.spike.userinformationmanagement.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class AvatarController {
    @RequestMapping(value = "/avatar/upload", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean uploadAvatar(@RequestHeader(value = "ps-token") String token, @RequestBody String Avatar){
        return true;
    }

    @RequestMapping(value = "/avatar/download", produces = "application/json", method = RequestMethod.GET)
    public Boolean downloadAvatar(@RequestHeader(value = "ps-token") String token){
        return true;
    }
}
