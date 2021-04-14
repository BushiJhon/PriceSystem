import React, {Component} from 'react';
import {Layout, List} from "antd";
import './Management.css';
import axios from "axios";
import {Link} from "react-router";
import Tab from "../../recommend/Tab/Tab";

class Management extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }

	this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        let localStorage = window.localStorage;
        if(localStorage.length === 0 || localStorage.getItem("ps-token") === undefined){
            alert("请先登录!");
            window.location.href = "/";
        }

        this.getPosts();
    }

    getPosts(){
	let url = "/api/publish/post/list";
	axios({
	    method: 'get',
            url: url,
            headers: {
                "ps-token": window.localStorage.getItem("ps-token")
            }
        }).then((res)=>{this.setState({posts: res.data});
			console.log(res.data);});
    }

    render(){
        const {Header, Content, Footer} = Layout;
	    const posts = this.state.posts;

        return (
            <Layout>
                <Header id={"Header"}>
                    <div id={"mini-header"}>
                        <span className={"link"}><a className={"head-link"} href={"recommend"}>首页</a></span>
                    </div>
                </Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>发布的帖子</span></div>
                    <div id={"Content-Content"}>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.posts}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<Link to={{pathname: "show",
                                            state:{id: item.pid}}}>{item.title}</Link>}
                                        description={<div><Tab time={item.issueDate} industry={item.industry} address={item.province}></Tab>{item.content}</div>}
                                    />
                                </List.Item>
                            )}
                        />

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

export default Management;
