import React, {Component} from 'react';
import {Layout, Input} from "antd";
import './Recommend.css';

class Recommend extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        let localStorage = window.localStorage;
        if(localStorage.length === 0 || localStorage.getItem("ps-token") === undefined){
            alert("请先登录!");
            window.location.href = "/";
        }
    }

    render(){
        const {Header, Content, Footer} = Layout;
        const {Search} = Input;
        return (
            <Layout>
                <Header id={"Header"}>
                    <Header id="Header">
                        <div id={"mini-header"}>
                            <span className={"link"}><a className={"head-link"} href={"login"}>登录</a></span>
                            <span className={"link"}><a className={"head-link"} href={"register"}>注册</a></span>
                            <span className={"link"}><input /><button>搜索</button></span>
                        </div>

                    </Header>
                </Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>发布的帖子</span></div>
                    <div id={"Content-Content"}>
                        recommend
                        {/*<List*/}
                        {/*    itemLayout={"vertical"}*/}
                        {/*    dataSource={posts}*/}
                        {/*    renderItem={item => (*/}
                        {/*        <List.Item key={item.title}>*/}
                        {/*            <List.Item.Meta*/}
                        {/*                title={item.title}*/}
                        {/*                description={item.content}*/}
                        {/*            />*/}
                        {/*        </List.Item>*/}
                        {/*    )}*/}
                        {/*/>*/}
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

export default Recommend;
