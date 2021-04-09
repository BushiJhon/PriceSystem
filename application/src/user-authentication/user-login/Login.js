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
        this.setMobile = this.setMobile.bind(this);
        this.setPassword = this.setPassword.bind(this);

        this.clear = this.clear.bind(this);
    }

    clear(){
        this.setState({nickname: ""});
        this.setState({mobile: ""});
        this.setState({password: ""});
    }

    loginByNickname(){
        this.setState({isNickname: true});
        let nickname = document.getElementById("nickname");
        nickname.style.color = "#00BFA6";
        let mobile = document.getElementById("mobile");
        mobile.style.color = "#555";

        this.clear();
    }

    loginByMobile(){
        this.setState({isNickname: false});
        let mobile = document.getElementById("mobile");
        mobile.style.color = "#00BFA6";
        let nickname = document.getElementById("nickname");
        nickname.style.color = "#555";

        this.clear();
    }

    setNickname(value){
        this.setState({nickname: value});
    }

    setMobile(value){
        this.setState({mobile: value});
    }

    setPassword(value){
        this.setState({password: value});
    }

    login(){
        let url;
        if(this.state.isNickname){
            if(this.state.nickname === ""){
                alert("请填写用户昵称");
            }else if(this.state.password === ""){
                alert("请填写密码");
            }else{
                url = "/api/authentication/login/nickname";

                axios.post(url, {
                    "nickname": this.state.nickname,
                    "password": this.state.password
                }).then(
                    (res)=>{
			            let localStorage = window.localStorage;
                        localStorage.setItem("ps-token", res.data.token);
                        window.location.href = "recommend";
		            })
            }

        }else{
            if(this.state.mobile === ""){
                alert("请输入电话号码");
            }else if(this.state.password === ""){
                alert("请输入密码");
            }else{
                url = "/api/authentication/login/mobile";

                axios.post(url, {
                    "mobile": this.state.mobile,
                    "password": this.state.password
                }).then(
                    (res)=>{
                        let localStorage = window.localStorage;
                        localStorage.setItem("ps-token", res.data.token);
                        window.location.href = "recommend";
                    })
            }
        }

    }

    render(){
        const {Header, Content, Footer} = Layout;
        const isNickname = this.state.isNickname;
        let form;
        if(isNickname){
            form = <NicknameCard setNickname={this.setNickname} setPassword={this.setPassword}/>;
        }else{
            form = <MobileCard setMobile={this.setMobile} setPassword={this.setPassword}/>;
        }
        return (
            <Layout>
                <Header id="Header">
                    <div id={"mini-header"}>
                        <span className={"link"}><a className={"head-link"} href={"login"}>登录</a></span>
                        <span className={"link"}><a className={"head-link"} href={"register"}>注册</a></span>
                    </div>
                </Header>
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
                                <a id="btn-register" href={"register"}>注册</a>
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
