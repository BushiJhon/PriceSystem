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

    @RequestMapping(value = "/post/search", produces = "application/json", method = RequestMethod.GET)
    public List<Post> searchPost(@RequestParam("value") String value){
        List<Post> list = postMapper.findPosts("%" + value + "%");
        return list;
    }

}
