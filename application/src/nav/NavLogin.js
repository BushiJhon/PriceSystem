import React, {Component} from 'react';
import {Input, Dropdown, Menu} from 'antd';
import './Nav.css';

const {Search} = Input;

class NavLogin extends Component{
    constructor(props){
        super(props);

        this.state = {
            user:{
                username: window.localStorage.getItem("nickname"),
                avatar: ''
            }
        }

        this.postWrite = this.postWrite.bind(this);
        this.home = this.home.bind(this);
        this.menuLink = this.menuLink.bind(this);
    }

    

    home(){
        window.location.href = "/";
    }

    postWrite(){
        window.location.href = "write";
    }

    menuLink(event){
        switch(event.key){
            case "1": window.location.href = "index";break;
            case "2": window.location.href = "set";break;
            case "3": {window.localStorage.removeItem("token"); window.location.href='/'; break;}
        }
    }

    render(){
        const username = this.state.user.username;
        const menuLink = this.menuLink;
        const menu = (
            <Menu onClick={menuLink}>
              <Menu.Item key="1" icon={<img src="./image-1.png"></img>}>{username}</Menu.Item>
              <Menu.Item key="2" icon={<img src="./个人设置.png"></img>}>个人设置</Menu.Item>
              <Menu.Item key="3" icon={<img src="./退出登录.png"></img>}>退出</Menu.Item>
            </Menu>
          );
        const postWrite = this.postWrite;
        const home = this.home;
        return(
            <div className={"nav"}>
                <div className={"nav-content"}>
                    <div className={"home"} onClick={home}><img className={"image"} src="./首页.png"/>首页</div>
                    <div className={"search"}><Search style={{marginTop: '16px'}} placeholder={'请输入搜索用户、帖子标题'}></Search></div>
                    <div className={"login-register"} onClick={postWrite}><img className={"image"} src="./申请.png"/>发帖</div>
                    <div id={"user"} style={{float: 'right'}}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color: '#fff'}}>
                            <img className={"image"} src="./账户.png"/>
                            {username}
                        </a>
                    </Dropdown>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NavLogin;