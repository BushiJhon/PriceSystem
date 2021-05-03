import React, {Component} from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

class NewFooter extends Component{
    render(){
        return(
            <Footer style={{backgroundColor: '#f9f9f9'}}>
                <div>
                    <div style={{textAlign: 'center', fontSize: '16px'}}><a href="https://github.com/BushiJhon/PriceSystem">项目github地址</a></div>
                    <div style={{textAlign: 'center', color: '#909499'}}>联系方式：1172905017@qq.com</div>
                </div>
            </Footer>
        );
    }
}

export default NewFooter;