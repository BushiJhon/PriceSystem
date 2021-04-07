package com.spike.userinformationmanagement.pojo;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.io.UnsupportedEncodingException;

public class Token {
    private static String SECRET = "secret";
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

    public static Integer getUid(String token){
        DecodedJWT decodedJWT = getJWTVerifier().verify(token);
        System.out.println(decodedJWT.getClaim("uid").asInt());
        return decodedJWT.getClaim("uid").asInt();
    }
}
