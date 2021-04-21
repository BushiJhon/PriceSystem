import React, {Component} from 'react';
import {Input, Button} from 'antd';

class RegisterCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div style={{margin: '20px 0'}}><Input size={"large"} placeholder={"请输入电话号码"}></Input></div>
                <div style={{margin: '20px 0'}}><Input size={"large"} placeholder={"请输入昵称"}></Input></div>
                <div style={{margin: '20px 0'}}><Input size={"large"} placeholder={"请输入密码"}></Input></div>
                <div style={{margin: '20px 0'}}><Button size={"large"} type={"primary"} block>注册</Button></div>
            </div>
        );
    }
}

export default RegisterCard;