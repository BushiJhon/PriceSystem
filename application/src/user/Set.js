import React, {Component} from 'react';
import Nav from '../nav/NavLogin';
import './Set.css';
import {Layout, Form, Input} from 'antd';

class Set extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <Nav></Nav>
                <div className={"content"}>
                    <div className={"set-panel"}>
                        <Form>
                            <Form.Item>
                                <span>&emsp;昵称: </span>
                                <input size="30"></input>
                            </Form.Item>
                            <Form.Item>
                                <span>工作地: </span>
                                <input></input>
                            </Form.Item>
                            <Form.Item>
                                <span>&emsp;简介: </span>
                                <textarea cols="50" rows="8"></textarea>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Set;