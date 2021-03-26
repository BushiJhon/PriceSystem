package com.spike.zuul.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import com.spike.zuul.pojo.Token;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Set;

//过滤是否存在令牌且有效
public class PreRequestAuthFilter extends ZuulFilter {
    private static Set<String> authenticationURIs = new HashSet<>();
    static {
        authenticationURIs.add("/authentication/login/mobile");
        authenticationURIs.add("/authentication/login/nickname");
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

        System.out.println(httpServletRequest.getRequestURL());
        System.out.println(httpServletRequest.getRequestURI());

        if(authenticationURIs.contains(httpServletRequest.getRequestURI())){
            return null;
        }

        String token = httpServletRequest.getHeader("ps-token");
        if(token == null){
            PrintWriter out = null;
            try {
                requestContext.getResponse().setCharacterEncoding("UTF-8");
                requestContext.getResponse().setContentType("application/json; charset=utf-8");
                out = requestContext.getResponse().getWriter();

                out.write("{\"查询信息失败\", \"未进行用户登录\"}");
            }catch (IOException ex){

            }finally {
                if(out != null)out.close();
            }
            return null;
        }

        if(!Token.verify(token)){
            PrintWriter out = null;
            try {
                requestContext.getResponse().setCharacterEncoding("UTF-8");
                requestContext.getResponse().setContentType("application/json; charset=utf-8");
                out = requestContext.getResponse().getWriter();

                out.write("{\"查询信息失败\", \"用户登录过期\"}");
            }catch (IOException ex){

            }finally {
                if(out != null)out.close();
            }
            return null;
        }

//        requestContext.addZuulRequestHeader("ps-token",token);
        return null;
    }
}
