package com.spike.postrecommend.controller;

import com.spike.postrecommend.mapper.RecommendMapper;
import com.spike.postrecommend.mapper.UserMapper;
import com.spike.postrecommend.pojo.Post;
import com.spike.postrecommend.pojo.Token;
import com.spike.postrecommend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecommendController {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RecommendMapper recommendMapper;

    @RequestMapping(value = "/post/recommend", produces = "application/json", method = RequestMethod.GET)
    public List<Post> recommendPost(@RequestHeader(value = "ps-token") String token){
        Integer uid = Token.getUid(token);
        User user = userMapper.retrieveUser(uid);
        List<Post> list = recommendMapper.selectPosts(user.getIndustry());
        return list;
    }

    @RequestMapping(value = "/post/show", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Post showPost(@RequestHeader(value = "ps-token") String token, @RequestBody Post post){
        Post findPost = recommendMapper.selectPost(post.getPid());
        return findPost;
    }
}
