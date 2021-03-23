package com.spike.postwrite.controller;

import com.spike.postwrite.mapper.PostMapper;
import com.spike.postwrite.pojo.Token;
import com.spike.postwrite.pojo.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostWriteController {
    @Autowired
    private PostMapper postMapper;

    @RequestMapping(value = "/post/write", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean writePost(@RequestHeader(value = "ps-token") String token, @RequestBody Post post){
        Integer id = Token.getId(token);
        postMapper.insertPost(post.getIssueDate(), post.getProvince(), post.getCity(), post.getTitle(), post.getContent(), id);
        return true;
    }
}
