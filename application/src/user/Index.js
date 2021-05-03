import React, {Component} from 'react';
import Nav from '../nav/NavLogin';
import Footer from '../footer/NewFooter';
import {Layout, Avatar} from 'antd';
import './Set.css';
import Post from '../home/Post';
import axios from 'axios';

class Index extends Component{
    constructor(props){
        super(props);

        this.state = {
            nickname: window.localStorage.getItem('nickname'),
            posts: []
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'api/post-write/post/list',
            headers: {
                "ps-token": window.localStorage.getItem("token")
            }
        }).then((res)=>{
            this.setState({posts: res.data});
        })
    }

    render(){
        const nickname = this.state.nickname;
        const listItems = this.state.posts.map((post) =>
        <Post title={post.title} content={post.content} time={post.issueDate} pid={post.pid} key={post.pid}/>
        );

        return(
            <Layout>
                <Nav></Nav>
                <div className={"user-content"}>
                    <div className={"user-background"}>
                        <div className={"user"}>
                            <Avatar size={130} icon={<img src="./image-1.png"></img>}></Avatar>
                            <span style={{fontSize: '40px', color: '#fff', marginLeft: '20px'}}>
                                {nickname}
                            </span>
                        </div>
                    </div>
                    <div className={"user-posts"}>
                        <div style={{borderBottom: '3px solid #edf0f5'}}>
                            <span className={"select"}>帖子</span>
                        </div>
                        {listItems}
                    </div>
                </div>
                <Footer/>
            </Layout>
        );
    }
}

export default Index;