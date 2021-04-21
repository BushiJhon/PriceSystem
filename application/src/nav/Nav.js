import React, {Component} from 'react';
import {Input, Button} from 'antd';
import './Nav.css';

const {Search} = Input;

class Nav extends Component{
    constructor(props){
        super(props);
        
        this.loginAndRegister = this.loginAndRegister.bind(this);
        this.home = this.home.bind(this);
    }

    loginAndRegister(){
        window.location.href = "login";
    }

    home(){
        window.location.href = "/";
    }

    render(){ 
        const loginAndRegister = this.loginAndRegister;
        const home = this.home;
        return(
            <div className={"nav"}>
                <div className={"nav-content"}>
                    {/* <div className={"title"}>基于微服务架构的价格系统</div> */}
                    <div className={"home"} onClick={home}><img className={"image"} src="./首页.png"/>首页</div>
                    <div className={"search"}><Search style={{marginTop: '16px'}}></Search></div>
                    <div className={"login-register"} onClick={loginAndRegister}><img className={"image"} src="./展开.png"></img>登录/注册</div>
                </div>
            </div>
        );
    }
}

export default Nav;