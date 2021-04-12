import React, {Component} from 'react';
import {Layout} from "antd";
import './Write.css';
import axios from "axios";

class Write extends Component{
    constructor(props){
        super(props);

        this.state = {
            issueDate: new Date(),
	    province: "",
            city: "",
            industry: "",
	    title: "",
	    content: ""
        }

        this.changeBorder = this.changeBorder.bind(this);
        this.recoverBorder = this.recoverBorder.bind(this);
        this.postWrite = this.postWrite.bind(this);

        this.setProvince = this.setProvince.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setIndustry = this.setIndustry.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setContent = this.setContent.bind(this);
    }

    changeBorder(event){
        let input = document.getElementById(event.target.attributes.id.value);
        input.style.borderColor = "#00BFA6";
    }

    recoverBorder(event){
        let input = document.getElementById(event.target.attributes.id.value);
        input.style.borderColor = "#dcdfe6";
    }

    setProvince(event){
        this.setState({province: event.target.value});
    }

    setCity(event){
        this.setState({city: event.target.value});
    }

    setIndustry(event){
        this.setState({industry: event.target.value});
    }

    setTitle(event){
        this.setState({title: event.target.value});
    }

    setContent(event){
        this.setState({content: event.target.value});
    }

    postWrite(){
        if(this.state.province === ""){
            alert("请选择所在省份");
        }else if(this.state.city === ""){
            alert("请选择所在城市");
        }else if(this.state.industry === ""){
            alert("请输入所在行业");
        }else if(this.state.title === ""){
            alert("请输入标题");
        }else if(this.state.content === ""){
            alert("请输入内容");
        }else{
            let url = "/api/publish/post/write";
	    this.setState({issueDate: new Date()});
            axios({
                method: 'post',
                url: url,
                data: {
                    "issueDate": this.state.issueDate,
		    "province": this.state.province,
                    "city": this.state.city,
                    "industry": this.state.industry,
                    "title": this.state.title,
                    "content": this.state.content
                },
                headers: {
                    "ps-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImV4cCI6MTYxNzg1NDAzNiwiaWF0IjoxNjE3NzY3NjM2fQ.n9qUlQqsJeacou4svbBB9seypvOs-09bLpfDa7GBB3k"
                }
            }).then((res)=>{console.log(res)});
        }
    }

    render(){
        const {Header, Content, Footer} = Layout;
        return (
            <Layout>
                <Header id={"Header"}>
                    <div id={"mini-header"}>
                        <span className={"link"}><a className={"head-link"} href={"recommend"}>首页</a></span>
                    </div>
                </Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>发表价格帖子</span></div>
                    <div id={"Content-Content"}>
                        <div id={"register-form"}>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"province-input"} type={"text"} defaultValue={""} placeholder={"省份 例如：广东省"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setProvince}>
                                </input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"city-input"} type={"text"} defaultValue={""} placeholder={"城市 例如：广州市"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setCity}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"industry-input"} type={"text"} defaultValue={""} placeholder={"行业"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setIndustry}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"company-input"} type={"text"} defaultValue={""} placeholder={"标题"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setTitle}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"introduction-input"} type={"text"} defaultValue={""} placeholder={"内容"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setContent}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <button id={"submit-btn"} onClick={this.postWrite}>发表</button>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer id="Footer">
                    <div id="introduction">
                        <div><a id="link" href="https://github.com/BushiJhon/PriceSystem">项目github地址</a></div>
                        <div id="qq">联系方式：1172905017@qq.com</div>
                    </div>
                </Footer>
            </Layout>
        )
    }
}

export default Write;
