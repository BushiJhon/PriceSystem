import React, {Component} from 'react';
import {Layout, List} from "antd";
import './Management.css';
import axios from "axios";

class Management extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
	
	this.getPosts = this.getPosts.bind(this);
    }
    
    componentDidMount() {
        this.getPosts();
    }
    
    getPosts(){
	let url = "/api/publish/post/list";
	axios({
	    method: 'get',
            url: url,
            headers: {
                "ps-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImV4cCI6MTYxNzg1NDAzNiwiaWF0IjoxNjE3NzY3NjM2fQ.n9qUlQqsJeacou4svbBB9seypvOs-09bLpfDa7GBB3k"
            }
        }).then((res)=>{this.setState({posts: res.data});
			console.log(res.data);});    
    }

    render(){
        const {Header, Content, Footer} = Layout;
	const posts = this.state.posts;
	
        return (
            <Layout>
                <Header id={"Header"}>Header</Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>发布的帖子</span></div>
                    <div id={"Content-Content"}>
                        <List
			    itemLayout={"vertical"}
			    dataSource={posts}
			    renderItem={item => (
			      <List.Item key={item.title}>
				<List.Item.Meta
				  title={item.title}
				  description={item.content}
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
