import React, {Component} from 'react';
import {Input, Button, Radio} from 'antd';

class LoginCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div style={{margin: '20px 0'}}><Input size={"large"} placeholder={"请输入电话号码或者昵称"}></Input></div>
                <div style={{margin: '20px 0'}}><Input size={"large"} placeholder={"请输入密码"}></Input></div>
                <div style={{margin: '20px 0'}}><Radio>记住密码</Radio></div>
                <div style={{margin: '20px 0'}}><Button size={"large"} type={"primary"} block>登录</Button></div>
            </div>
        );
    }
}

export default LoginCard;