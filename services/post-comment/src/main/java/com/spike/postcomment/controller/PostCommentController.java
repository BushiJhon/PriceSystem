package com.spike.postcomment.controller;

import com.spike.postcomment.mapper.CommentMapper;
import com.spike.postcomment.pojo.Comment;
import com.spike.postcomment.pojo.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostCommentController {
    @Autowired
    private CommentMapper commentMapper;

    @RequestMapping(value = "/post/comment", consumes = "application/json", produces = "application/json", method = RequestMethod.POST)
    public Boolean commentPost(@RequestHeader(value = "ps-token") String token, @RequestBody Comment comment){
        Integer uid = Token.getId(token);
        commentMapper.insertComment(comment.getDate(), comment.getContent(), uid, comment.getPid());
        return true;
    }
}
