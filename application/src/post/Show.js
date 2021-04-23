import React, {Component} from 'react';
import Nav from '../nav/NavLogin';
import Footer from '../footer/NewFooter';
import './Write.css';
import {Layout} from 'antd';
import axios from 'axios';

class Show extends Component{
    constructor(props){
        super(props);

        this.state = {
            pid: this.props.location.state.id,
            title: '',
            content: '',
            issueDate: '',
            province: '',
            city: ''
        }

        this.getPost = this.getPost.bind(this);
    }

    componentDidMount(){
        this.getPost();
    }

    getPost(){
        axios({
            method: 'POST',
            url: 'api/post-recommend/post/show',
            data: {
                "pid": this.props.location.state.id,
                },
            headers: {
                "ps-token": window.localStorage.getItem("token")
            }
        }).then((res)=>{
            this.setState({issueDate: res.data.issueDate});
            this.setState({province: res.data.province});
            this.setState({industry: res.data.industry});
            this.setState({city: res.data.city});
            this.setState({title: res.data.title});
            this.setState({content: res.data.content});
	    });
    }

    render(){
        const title = this.state.title;
        const content = this.state.content;
        const issueDate = this.state.issueDate;
        const province = this.state.province;
        const city = this.state.city;
        return(
            <Layout>
                <Nav/>
                <div className={"write-content"}>
                    <div className={"posts"}>
                        <div id={"show-content"}>
                            <div style={{fontSize: '30px', fontWeight: 'bold', margin: '20px 0', minHeight: '100px'}}>{title}</div>
                            <div style={{fontSize: '20px', margin: '20px 0', minHeight: '680px'}}>{content}</div>
                            <div style={{fontSize: '18px', margin: '20px 0', color: '#909499'}}>
                                <span style={{marginRight: '20px'}}>{issueDate}</span>
                                <span style={{marginRight: '20px'}}>{province}</span>
                                <span>{city}</span>    
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
        );
    }

}

export default Show;