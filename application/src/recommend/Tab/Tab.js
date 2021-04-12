import React, {Component} from 'react';
import './Tab.css';

class Tab extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            time: new Date(),
            industry: "",
            address: "",
            author: "",
            content: ""
        }
    }

    render() {
        return(
            <div id={"tab"}>
                <div id={"title"}>title</div>
                <div id={"information"}>
                    <span className={"tab-span"} id={"time"}>{"this.state.time"}</span>
                    <span className={"tab-span"} id={"industry"}>{"this.state.industry"}</span>
                    <span className={"tab-span"} id={"address"}>{"this.state.address"}</span>
                    <span className={"tab-span"} id={"author"}>{"this.state.author"}</span>
                </div>
                <div id={"content"}>{this.state.content}</div>
            </div>
        );
    }
}

export default Tab;
