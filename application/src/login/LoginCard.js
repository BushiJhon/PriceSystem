import React, {Component} from 'react';
import {Input, Button, Radio} from 'antd';
import axios from 'axios';

class LoginCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isChecked: false,
            nickname: '',
            mobile: '',
            password: ''
        }

        this.changeChecked = this.changeChecked.bind(this);
        this.setNickNameOrMobile = this.setNickNameOrMobile.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    changeChecked(){
        const isChecked = !this.state.isChecked;
        this.setState({isChecked: isChecked})
    }

    setNickNameOrMobile(event){
        this.setState({nickname: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    login(){
        const nickname = this.state.nickname;
        const password = this.state.password;
        axios(
            {
                method: 'post',
                url: 'api/user-authentication/login/nickname',
                data: {
                    'nickname': nickname,
                    'password': password,
                }
            }
        ).then((res)=>{
            const token = res.data.token;
            window.localStorage.setItem("token", token);
            window.location.href = '/';
        })
    }

    render(){
        const isChecked = this.state.isChecked;
        const changeChecked = this.changeChecked;
        const setNickNameOrMobile = this.setNickNameOrMobile;
        const setPassword = this.setPassword;
        const login = this.login;
        return(
            <div>
                <div style={{margin: '20px 0'}}><Input size={"large"} defaultValue="" placeholder={"请输入电话号码或者昵称"} onChange={setNickNameOrMobile}></Input></div>
                <div style={{margin: '20px 0'}}><Input size={"large"} defaultValue="" placeholder={"请输入密码"} onChange={setPassword}></Input></div>
                <div style={{margin: '20px 0'}}><Radio checked={isChecked} onClick={changeChecked}>记住密码</Radio></div>
                <div style={{margin: '20px 0'}}><Button size={"large"} type={"primary"} block onClick={login}>登录</Button></div>
            </div>
        );
    }
}

export default LoginCard;