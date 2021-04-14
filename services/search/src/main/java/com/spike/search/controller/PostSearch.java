package com.spike.search.controller;

import com.spike.search.mapper.PostMapper;
import com.spike.search.pojo.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostSearch {
    @Autowired
    private PostMapper postMapper;

    @RequestMapping(value = "/post/search", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public List<Post> searchPost(@RequestHeader(value = "ps-token") String token, @RequestBody Post post){
        List<Post> list = postMapper.findPosts(post.getTitle());
        return list;
    }

}
