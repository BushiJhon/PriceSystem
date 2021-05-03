import React, {Component} from 'react';
import {Input, Button} from 'antd';
import {browserHistory} from 'react-router';
import './Nav.css';

const {Search} = Input;

class Nav extends Component{
    constructor(props){
        super(props);
        
        this.loginAndRegister = this.loginAndRegister.bind(this);
        this.home = this.home.bind(this);
        this.search = this.search.bind(this);
    }

    loginAndRegister(){
        window.location.href = "login";
    }

    home(){
        window.location.href = "/";
    }

    search(value, event){
        const history = browserHistory;
        history.push({pathname:"search",query: {value : value}});
    }

    render(){ 
        const loginAndRegister = this.loginAndRegister;
        const home = this.home;
        const search = this.search;
        return(
            <div className={"nav"}>
                <div className={"nav-content"}>
                    {/* <div className={"title"}>基于微服务架构的价格系统</div> */}
                    <div className={"home"} onClick={home}><img className={"image"} src="./首页.png"/>首页</div>
                    <div className={"search"}><Search style={{marginTop: '16px'}} placeholder={'请输入搜索用户、帖子标题'} onSearch={search}></Search></div>
                    <div className={"login-register"} onClick={loginAndRegister}><img className={"image"} src="./展开.png"></img>登录/注册</div>
                </div>
            </div>
        );
    }
}

export default Nav;