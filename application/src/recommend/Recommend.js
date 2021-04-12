import React, {Component} from 'react';
import {Layout, Input} from "antd";
import './Recommend.css';

import Tab from './Tab/Tab';

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
        return (
            <Layout>
                <Header id={"Header"}>
                    <Header id="Header">
                        <div id={"mini-header"}>
                            <span className={"link"}><a className={"head-link"} href={"login"}>登录</a></span>
                            <span className={"link"}><a className={"head-link"} href={"register"}>注册</a></span>
                            <span className={"link"}><input /><button>搜索</button></span>
                            <span className={"link"}><a className={"head-link"} href={"write"}>创作中心</a></span>
                            <span className={"link"}><a className={"head-link"} href={"management"}>帖子中心</a></span>
                            <span className={"link"}><a className={"head-link"} href={"login"}>个人中心</a></span>
                            <span className={"link"}><a className={"head-link"} style={{float: "right"}} href={"login"}>登出</a></span>
                        </div>

                    </Header>
                </Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Content"}>
                        <Tab/>
                        <Tab/>
                        <Tab/>
                        <Tab/>
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
