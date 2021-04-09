import React, {Component} from 'react';
import {Layout} from 'antd';
import "./Register.css";
import axios from "axios";

class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            nickname: "",
            mobile: "",
            password: ""
        }

        this.changeBorder = this.changeBorder.bind(this);
        this.recoverBorder = this.recoverBorder.bind(this);
        this.register = this.register.bind(this);

        this.setNickname = this.setNickname.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    changeBorder(event){
        let input = document.getElementById(event.target.attributes.id.value);
        input.style.borderColor = "#00BFA6";
    }

    recoverBorder(event){
        let input = document.getElementById(event.target.attributes.id.value);
        input.style.borderColor = "#dcdfe6";
    }

    setNickname(event){
        this.setState({nickname: event.target.value});
    }

    setMobile(event){
        this.setState({mobile: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    register(){
        if(this.state.nickname === ""){
            alert("请输入用户昵称");
        }else if(this.state.mobile === ""){
            alert("请输入电话号码");
        }else if(this.state.password === ""){
            alert("请输入密码");
        }else{
            let url = "/api/authentication/user/register";
            axios.post(url, {
                "nickname": this.state.nickname,
                "mobile": this.state.mobile,
                "password": this.state.password
            }).then((res)=>{
                let localStorage = window.localStorage;
                localStorage.setItem("ps-token", res.data.token);
                window.location.href = "complete";
            })
        }
    }

    render(){
        const {Header, Content, Footer} = Layout;
        return (
            <Layout>
                <Header id={"Header"}>
                    <Header id="Header">
                        <div id={"mini-header"}>
                            <span className={"link"}><a className={"head-link"} href={"login"}>登录</a></span>
                            <span className={"link"}><a className={"head-link"} href={"register"}>注册</a></span>
                        </div>
                    </Header>
                </Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>注册</span></div>
                    <div id={"Content-Content"}>
                        <div id={"register-form"}>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"nickname-input"} type={"text"} defaultValue={""} placeholder={"昵称"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setNickname}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"mobile-input"} type={"text"} defaultValue={""} placeholder={"电话号码"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setMobile}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"password-input"} type={"password"} defaultValue={""} placeholder={"密码"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setPassword}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <button id={"submit-btn"} onClick={this.register}>提交</button>
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

export default Register;
