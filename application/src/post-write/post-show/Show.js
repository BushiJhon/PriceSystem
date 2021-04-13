import React, {Component} from 'react';
import {Layout} from "antd";
import './Show.css';
import axios from "axios";

class Show extends Component{
    constructor(props){
        super(props);

        this.state = {
            issueDate: new Date(),
            province: "",
            city: "",
            industry: "",
            title: "",
            content: ""
        }
    }

    componentDidMount() {
        let localStorage = window.localStorage;
        if(localStorage.length === 0 || localStorage.getItem("ps-token") === undefined){
            alert("请先登录!");
            window.location.href = "/";
        }

        console.log(this.props.location.state.id)
    }


    render(){
        const {Header, Content, Footer} = Layout;
        return (
            <Layout>
                <Header id={"Header"}>
                    <div id={"mini-header"}>
                        <span className={"link"}><a className={"head-link"} href={"recommend"}>首页</a></span>
                    </div>
                </Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>帖子详情</span></div>
                    <div id={"Content-Content"}>
                        <div id={"register-form"}>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"province-input"} type={"text"} defaultValue={this.state.province} disabled={true}>
                                </input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"city-input"} type={"text"} defaultValue={this.state.city} disabled={true}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"industry-input"} type={"text"} defaultValue={this.state.industry} disabled={true}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"company-input"} type={"text"} defaultValue={this.state.title} disabled={true}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"introduction-input"} type={"text"} defaultValue={this.state.content} disabled={true}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <button id={"submit-btn"}>删除</button>
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

export default Show;
