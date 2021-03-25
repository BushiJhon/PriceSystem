import React, {Component} from 'react';
import './MobileCard.css';

class MobileCard extends Component{
    render(){
        return (
            <div id="card">
            <input id="login-mobile" placeholder="电话号码" type="text"></input>
            <div className="text-clear"></div>
            <input id="password" placeholder="密码" type="password"></input>
            <div className="text-clear"></div>
        </div>
        )
    }
}

export default MobileCard;