import React, {Component} from 'react';
import './MobileCard.css';

class MobileCard extends Component{
    constructor(props){
        super(props);

        this.setMobile = this.setMobile.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setMobile(e){
        this.props.setMobile(e.target.value);
    }

    setPassword(e){
        this.props.setPassword(e.target.value);
    }

    render(){
        return (
            <div id="card">
            <input id="login-mobile" placeholder="电话号码" type="text" defaultValue="" onChange={this.setMobile}></input>
            <div className="text-clear"></div>
            <input id="password" placeholder="密码" type="password" defaultValue="" onChange={this.setPassword}></input>
            <div className="text-clear"></div>
        </div>
        )
    }
}

export default MobileCard;