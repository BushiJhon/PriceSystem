package com.spike.postrecommend.controller;

import com.spike.postrecommend.mapper.RecommendMapper;
import com.spike.postrecommend.mapper.UserMapper;
import com.spike.postrecommend.pojo.Post;
import com.spike.postrecommend.pojo.Token;
import com.spike.postrecommend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecommendController {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RecommendMapper recommendMapper;

    @RequestMapping(value = "/post/recommend", produces = "application/json", method = RequestMethod.GET)
    public List<Post> writePost(@RequestHeader(value = "ps-token") String token){
        Integer uid = Token.getUid(token);
        User user = userMapper.retrieveUser(uid);
        List<Post> list = recommendMapper.selectPost(user.getIndustry());
        return list;
    }
}
