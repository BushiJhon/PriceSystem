import React, {Component} from 'react';
import {Layout} from 'antd';
import './Search.css';
import Nav from '../nav/Nav';
import NavLogin from '../nav/NavLogin';
import axios from 'axios';
import Post from '../home/Post';
import Footer from '../footer/NewFooter';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            searchContent: this.props.location.query.value,
            posts: []
        };

        this.getPost = this.getPost.bind(this);
    }

    getPost(){
        const searchContent = this.state.searchContent;
        const that = this;
        axios(
            {
                method: 'GET',
                url: 'api/search/post/search',
                params: {
                    value: searchContent
                }
            }
            ).then((res)=>{
                const posts = that.state.posts;
                posts.push(...res.data);
                that.setState({posts: posts});
            })
    }

    componentDidMount(){
        if(window.localStorage.getItem("token") != undefined){
            this.setState({isLogin: true});
        }

        this.getPost();
    }

    render(){
        const nav = this.state.isLogin? <NavLogin/>:<Nav/>;
        const listItems = this.state.posts.map((post) =>
        <Post title={post.title} content={post.content} time={post.issueDate} pid={post.pid} key={post.pid}/>
        );
        return(
            <Layout>
                {nav}
                <div className={"search-content"}>
                    <div className={"search-posts"}>
                        {listItems}
                    </div>
                </div>
                <Footer/>
            </Layout>
        );
    }
}

export default Search;