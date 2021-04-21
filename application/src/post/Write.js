import React, {Component} from 'react';
import Nav from '../nav/NavWrite';
import {Layout, Input} from 'antd';
import './Write.css';

const {TextArea} = Input;

class Write extends Component{
    render(){
        return(
            <Layout>
                <Nav/>
                <div className={"write-content"}>
                    <div className={"posts"}>
                        <div id={"panel"}>
                            <div>
                                <Input bordered={false} placeholder={"请输入标题"} style={{height: '140px', fontSize: '30px'}}></Input>                                
                            </div>
                            <div id={"space"}></div>
                            <div>
                                <TextArea bordered={false} placeholder={"请输入正文"} autoSize={{ minRows: 3, maxRows: 10 }} style={{height: '180px', fontSize: '20px'}}></TextArea>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Write;