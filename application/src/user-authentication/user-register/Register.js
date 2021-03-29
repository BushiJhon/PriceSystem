import React, {Component} from 'react';
import {Layout} from 'antd';
import "./Register.css";

class Register extends Component{
    constructor(props){
        super(props);

        this.changeBorder = this.changeBorder.bind(this);
    }

    changeBorder(){
        let input = document.getElementById("nickname");
        input.style.borderColor = "#00BFA6";
    }

    render(){
        const {Header, Content, Footer} = Layout;
        return (
            <Layout>
                <Header id="Header">Header</Header>
                <Content id="Content">
                    <div id="Content-Header">基于微服务架构的材料报价系统</div>
                    <div id="Content-Title"><span id="login-title">注册</span></div>
                    <div id="Content-Content">
                        <form id="register-form" onSubmit={()=>{return false;}}>
                            <div className="form-group">
                                <input className="form-input" id="nickname" type="text" defaultValue="" placeholder="昵称" onSelectCapture={this.changeBorder}></input>
                            </div>
                            <div className="form-space"/>
                            <div className="form-group">
                                <input className="form-input"></input>
                            </div>
                            <div className="form-space"/>
                            <div className="form-group">
                                <input className="form-input"></input>
                            </div>
                            <div className="form-space"/>
                        </form>
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