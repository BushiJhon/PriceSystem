package com.spike.zuul.pojo;

        import com.auth0.jwt.JWT;
        import com.auth0.jwt.JWTVerifier;
        import com.auth0.jwt.algorithms.Algorithm;

        import java.io.UnsupportedEncodingException;

public class Token {
    private static String SECRET = "secret";

    private static Token instance = null;

    private Token(){}

    public static Token getInstance(){
        if(instance == null)return new Token();
        return instance;
    }

    public static Boolean verify(String token){

        try{
            JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(SECRET)).build();
            jwtVerifier.verify(token);
            return true;
        }catch(UnsupportedEncodingException exception){
            return false;
        }
    }
}
