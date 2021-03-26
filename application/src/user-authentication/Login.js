import React, {Component} from 'react';
import {Layout} from 'antd';
import './Login.css';
import login from './login.svg';
import NicknameCard from './nickname-card/NicknameCard';
import MobileCard from './mobile-card/MobileCard';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNickname: true,
            nickname: "",
            mobile: "",
            password: ""
        }

        this.loginByNickname = this.loginByNickname.bind(this);
        this.loginByMobile = this.loginByMobile.bind(this);
        this.login = this.login.bind(this);

        this.setNickname = this.setNickname.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    loginByNickname(){
        this.setState({isNickname: true});
        var nickname = document.getElementById("nickname");
        nickname.style.color = "#00BFA6";
        var mobile = document.getElementById("mobile");
        mobile.style.color = "#555";
    }

    loginByMobile(){
        this.setState({isNickname: false});
        var mobile = document.getElementById("mobile");
        mobile.style.color = "#00BFA6";
        var nickname = document.getElementById("nickname");
        nickname.style.color = "#555";
    }

    setNickname(value){
        this.setState({nickname: value});
    }

    setPassword(value){
        this.setState({password: value});
    }

    login(){
        let url;
        if(this.state.isNickname){
            url = "/api";

            axios.post(url, {
                "nickname": this.state.nickname,
                "password": this.state.password
            }).then(
                (res)=>{console.log(res)}
            )
        }else{
            url = "http://localhost:8050/authentication/mobile";

            axios.post(url, {
                "mobile": this.state.mobile,
                "password": this.state.password
            }).then(
                (res)=>{console.log(res)}
            )
        }

    }

    render(){
        const {Header, Content, Footer} = Layout;
        const isNickname = this.state.isNickname;
        let form;
        if(isNickname){
            form = <NicknameCard setNickname={this.setNickname} setPassword={this.setPassword}/>;
        }else{
            form = <MobileCard/>;
        }
        return (
            <Layout>
                <Header id="Header">Header</Header>
                <Content id="Content">
                    <div id="Content-Header">基于微服务架构的材料报价系统</div>
                    <div id="Content-Title"><span id="login-title">登录</span></div>
                    <div id="Content-Content">
                        <div id="login-picture"><img src={login} alt="login-logo" id="logo"></img></div>
                        <div id="line"></div>
                        <div id="login-card">
                            <div id="login-style">
                                <span id="nickname" onClick={this.loginByNickname}>昵称登录</span>
                                <span id="mobile" onClick={this.loginByMobile}>号码登录</span>
                            </div>
                            {form}
                            <div id="btn-box">
                                <a id="btn-login" onClick={this.login}>登录</a>
                                <a id="btn-register">注册</a>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer id="Footer">
                    <div id="introduction">
                        <div><a id="link" href="https://github.com/BushiJhon/PriceSystem">项目github地址</a></div>
                        <div id="qq">联系方式：1172905017@qq.com</div>
                    </div>
                </Footer>
            </Layout>
        )
    }
}

export default Login;