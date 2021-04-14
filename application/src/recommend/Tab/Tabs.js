import React, {Component} from 'react';
import { List } from 'antd';
import {Link} from 'react-router';
import axios from "axios";
import './Tabs.css';

import Tab from './Tab';


class Tabs extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: []
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        let localStorage = window.localStorage;
        if(localStorage.length === 0 || localStorage.getItem("ps-token") === undefined){
            alert("请先登录!");
            window.location.href = "/";
        }

        this.getData();

    }

    getData(){
        let url = "/api/post-recommend/post/recommend";
        let token = window.localStorage.getItem("ps-token");
        axios({
            method: 'get',
            url: url,
            headers: {
                "ps-token": token
            }
        }).then((res)=>{
            this.setState({data: res.data});
            console.log(res.data);
        });
    }


    render() {

        return (
            <List
                itemLayout="horizontal"
                dataSource={this.state.data}
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
        );
    }
}

export default Tabs;
