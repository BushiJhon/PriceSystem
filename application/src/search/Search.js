import React, {Component} from 'react';
import {Layout} from 'antd';
import './Search.css';
import Nav from '../nav/Nav';
import NavLogin from '../nav/NavLogin';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            searchContent: this.props.location.query.value
        };
    }

    componentDidMount(){
        if(window.localStorage.getItem("token") != undefined){
            this.setState({isLogin: true});
        }
    }

    render(){
        const nav = this.state.isLogin? <NavLogin/>:<Nav/>;

        return(
            <Layout>
                {nav}
                <div className={"posts"}>
                    <div>Heelo</div>
                </div>
            </Layout>
        );
    }
}

export default Search;