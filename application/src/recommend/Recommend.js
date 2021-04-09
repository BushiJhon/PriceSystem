import React, {Component} from 'react';

class Recommend extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        let localStorage = window.localStorage;
        if(localStorage.length === 0 || localStorage.getItem("ps-token") === undefined){
            alert("请先登录!");
            window.location.href = "/";
        }
    }

    render() {
        return(
            <div>Recommend</div>
        )
    }
}

export default Recommend;
