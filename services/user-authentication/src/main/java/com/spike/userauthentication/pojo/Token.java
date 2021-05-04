package com.spike.userauthentication.pojo;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Token {
    private static String SECRET = "secret";
    private Long EXPIRE = 24*60*60*1000l;

    private static JWTVerifier jwtVerifier = null;

    public static JWTVerifier getJWTVerifier() {
        if (jwtVerifier == null) {
            try {
                JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(SECRET)).build();
                return jwtVerifier;
            } catch (UnsupportedEncodingException exception) {

            }
        }

        return jwtVerifier;
    }

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

    public static Integer getUid(String token){
        DecodedJWT decodedJWT = getJWTVerifier().verify(token);
        System.out.println(decodedJWT.getClaim("uid").asInt());
        return decodedJWT.getClaim("uid").asInt();
    }
}
