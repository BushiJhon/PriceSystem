import React, {Component} from 'react';
import './NicknameCard.css'

class NicknameCard extends Component{
    constructor(props){
        super(props);

        this.setNickname = this.setNickname.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setNickname(e){
        this.props.setNickname(e.target.value);
    }

    setPassword(e){
        this.props.setPassword(e.target.value);
    }

    render(){
        return (
        <div id="card">
            <input id="login-nickname" placeholder="昵称" type="text" defaultValue="" onChange={this.setNickname}></input>
            <div className="text-clear"></div>
            <input id="password" placeholder="密码" type="password" defaultValue="" onChange={this.setPassword}></input>
            <div className="text-clear"></div>
        </div>
        )
    }
}

export default NicknameCard;