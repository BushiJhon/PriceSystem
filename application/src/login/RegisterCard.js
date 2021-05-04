import React, {Component} from 'react';
import {Input, Button} from 'antd';
import axios from 'axios';

class RegisterCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            nickname: '',
            mobile: '',
            password: ''
        }

        this.setMobile = this.setMobile.bind(this);
        this.setNickname = this.setNickname.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.register = this.register.bind(this);
    }

    setMobile(event){
        this.setState({mobile: event.target.value});
    }

    setNickname(event){
        this.setState({nickname: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    register(){
        const mobile = this.state.mobile;
        const nickname = this.state.nickname;
        const password = this.state.password;
        axios(
            {
                method: 'post',
                url: 'api/user-authentication/user/register',
                data: {
                    'mobile': mobile,
                    'nickname': nickname,
                    'password': password,
                }
            }
        ).then((res)=>{
            const token = res.data.token;
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("nickname", this.state.nickname);
            window.location.href = '/';

        })
    }

    render(){
        const setMobile = this.setMobile;
        const setNickname = this.setNickname;
        const setPassword = this.setPassword;
        const regiset = this.register;
        return(
            <div>
                <div style={{margin: '20px 0'}}><Input size={"large"} defaultValue="" placeholder={"请输入电话号码"} onChange={setMobile}></Input></div>
                <div style={{margin: '20px 0'}}><Input size={"large"} defaultValue="" placeholder={"请输入昵称"} onChange={setNickname}></Input></div>
                <div style={{margin: '20px 0'}}><Input size={"large"} defaultValue="" placeholder={"请输入密码"} onChange={setPassword}></Input></div>
                <div style={{margin: '20px 0'}}><Button size={"large"} type={"primary"} block onClick={regiset}>注册</Button></div>
            </div>
        );
    }
}

export default RegisterCard;