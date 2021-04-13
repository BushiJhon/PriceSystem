import React, {Component} from 'react';
import './Tab.css';

class Tab extends Component{
    constructor(props){
        super(props);

        this.state = {
            time: this.props.time,
            industry: this.props.industry,
            address: this.props.address,
            author: "作者"
        }
    }

    render() {
        return(
            <div id={"tab"}>
                <div id={"information"}>
                    <span className={"tab-span"} id={"time"}>{this.state.time}</span>
                    <span className={"tab-span"} id={"industry"}>{this.state.industry}</span>
                    <span className={"tab-span"} id={"address"}>{this.state.address}</span>
                    <span className={"tab-span"} id={"author"}>{this.state.author}</span>
                </div>
            </div>
        );
    }
}

export default Tab;
