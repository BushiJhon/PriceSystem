import React, { Component } from "react";
import {Link} from 'react-router';
import './Home.css';

class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            key: this.props.pid,
            title: this.props.title,
            content: this.props.content,
            time: this.props.time,
            pid: this.props.pid
        }

    }
    render(){
        const pid = this.state.pid;
        const title = this.state.title;
        const content = this.state.content;
        const time = (new Date(this.state.time)).toLocaleDateString();

        return(
            <Link to={{pathname: "show", state:{id: pid}}}>
                <div className={"post"}>
                    <a className={"post-link"}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <div>
                            <span>{time}</span>
                        </div>
                    </a>    
                </div>
            </Link>
        );
    }
}

export default Post;