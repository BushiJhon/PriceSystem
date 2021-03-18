package com.spike.zuul.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import com.spike.zuul.pojo.Token;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

//过滤是否存在令牌且有效
public class PreRequestAuthFilter extends ZuulFilter {
    private static List<String> authenticationURIs = new ArrayList<>();
    static {
        authenticationURIs.add("/authentication/user/loginByMobile");
        authenticationURIs.add("/authentication/user/loginByNickName");
    }

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() throws ZuulException{
        RequestContext requestContext = RequestContext.getCurrentContext();
        HttpServletRequest httpServletRequest = requestContext.getRequest();
        for(String URI : authenticationURIs){
            if(httpServletRequest.getRequestURI().equals(URI)){
                return null;
            }
        }

        String token = httpServletRequest.getHeader("Authorization");
        System.out.println(httpServletRequest.getHeader("Authorization"));
        if(token == null){
            try {
                requestContext.getResponse().sendRedirect("http://www.baidu.com");
            }catch (IOException ex){

            }
            return null;
        }

        if(!Token.verify(token)){
            try {
                requestContext.getResponse().sendRedirect("http://www.baidu.com");
            }catch (IOException ex){

            }
            return null;
        }


        return null;
    }
}
