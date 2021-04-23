import React, {Component} from 'react';
import Nav from '../nav/NavLogin';
import Footer from '../footer/NewFooter';
import './Set.css';
import {Layout} from 'antd';
import Information from './Information';
import Avatar from './Avatar';

class Set extends Component{
    constructor(props){
        super(props);

        this.state = {
            isInformation: true
        }

        this.changeInformation = this.changeInformation.bind(this);
        this.changeAvatar = this.changeAvatar.bind(this);
    }

    changeInformation(){
        this.setState({isInformation : true});
    }

    changeAvatar(){
        this.setState({isInformation : false});
    }

    render(){
        const card = this.state.isInformation ? <Information/> : <Avatar/>;
        const changeInformation = this.changeInformation;
        const changeAvatar = this.changeAvatar;
        return(
            <Layout>
                <Nav></Nav>
                <div className={"content"}>
                    <div className={"set-panel"}>
                        <div style={{fontSize: '18px', borderBottom: '3px solid #edf0f5', marginBottom: '10px'}}>
                            <span style={{marginRight: '30px', cursor: 'pointer'}} onClick={changeInformation}>个人信息</span>
                            <span style={{marginRight: '30px', cursor: 'pointer'}} onClick={changeAvatar}>个人头像</span>
                        </div>
                        <div>
                            {card}
                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
        );
    }
}

export default Set;