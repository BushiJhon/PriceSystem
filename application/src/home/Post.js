import React, { Component } from "react";
import './Home.css';

class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            content: this.props.content,
            time: this.props.time
        }
    }

    render(){

        const title = this.state.title;
        const content = this.state.content;
        const time = this.state.time;
        return(
            <div className={"post"}>
                <a className={"post-link"}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <div>
                        <span>{time}</span>
                    </div>
                </a>    
            </div>
        );
    }
}

export default Post;