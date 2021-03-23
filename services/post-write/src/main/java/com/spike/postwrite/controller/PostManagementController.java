package com.spike.postwrite.controller;

import com.spike.postwrite.mapper.ManagementMapper;
import com.spike.postwrite.pojo.Post;
import com.spike.postwrite.pojo.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostManagementController {

    @Autowired
    private ManagementMapper managementMapper;

    @RequestMapping(value = "/post/list", produces = "application/json", method = RequestMethod.GET)
    public List<Post> listPost(@RequestHeader(value = "ps-token") String token){
        Integer id = Token.getId(token);

        List<Post> list = managementMapper.listPost(id);
        return list;
    }
}
