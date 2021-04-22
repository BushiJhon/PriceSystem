package com.spike.userauthentication.pojo;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Token {
    private String SECRET = "secret";
    private Long EXPIRE = 24*60*60*1000l;

    private static Token instance = null;

    private Token(){}

    public static Token getInstance(){
        if(instance == null)return new Token();
        return instance;
    }

    public String createToken(User user) throws UnsupportedEncodingException {
        Date now = new Date();
        Date expireDate = new Date(now.getTime() + EXPIRE);

        Map<String, Object> header = new HashMap<>();
        header.put("alg", "HS256");
        header.put("typ", "JWT");

        return JWT.create()
                .withHeader(header)
                .withClaim("uid", user.getUid())
                .withClaim("username", user.getNickname())
                .withIssuedAt(now)
                .withExpiresAt(expireDate)
                .sign(Algorithm.HMAC256(SECRET));
    }
}
