import React, {Component} from 'react';
import Nav from '../nav/Nav';
import './login.css';
import {Layout} from 'antd';

import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {isLogin: true};

        this.setLogin = this.setLogin.bind(this);
        this.setRegister = this.setRegister.bind(this);
    }

    setLogin(){
        this.setState({isLogin: true});
    }

    setRegister(){
        this.setState({isLogin: false});
    }

    render(){
        const card = this.state.isLogin ? <LoginCard/> : <RegisterCard/>;
        const isLogin = this.setLogin;
        const isRegister = this.setRegister;
        return(
            <Layout>
                <Nav/>
                <div className={"login-content"}>
                    <div id={"card"}>
                        <div id={"select"}>
                            <span id={"login"} onClick={isLogin}>账户密码登录</span>
                            <span id={"register"} onClick={isRegister}>账户注册</span>
                        </div>

                        <div style={{margin: "50px 0"}}>
                            {card}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Login;