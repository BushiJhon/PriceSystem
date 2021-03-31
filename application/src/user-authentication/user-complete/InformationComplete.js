import React, {Component} from 'react';
import {Layout} from "antd";
import './InformationComplete.css';
import axios from "axios";

class InformationComplete extends Component{
    constructor(props){
        super(props);

        this.state = {
            "province": "",
            "city": "",
            "company": "",
            "introduction": "",
            "industry": ""
        }

        this.changeBorder = this.changeBorder.bind(this);
        this.recoverBorder = this.recoverBorder.bind(this);
        this.informationComplete = this.informationComplete.bind(this);

        this.setProvince = this.setProvince.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setIndustry = this.setIndustry.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setIntroduction = this.setIntroduction.bind(this);
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

    setCompany(event){
        this.setState({company: event.target.value});
    }

    setIntroduction(event){
        this.setState({introduction: event.target.value});
    }

    informationComplete(){
        if(this.state.province === ""){
            alert("请选择所在省份");
        }else if(this.state.city === ""){
            alert("请选择所在城市");
        }else if(this.state.industry === ""){
            alert("请输入所在行业");
        }else if(this.state.company === ""){
            alert("请输入所在公司");
        }else if(this.state.introduction === ""){
            alert("请输入简介");
        }else{
            let url = "/api/information/user/complete";
            axios({
                method: 'post',
                url: url,
                data: {
                    "province": this.state.province,
                    "city": this.state.city,
                    "company": this.state.company,
                    "introduction": this.state.introduction,
                    "industry": this.state.industry
                },
                headers: {
                    "ps-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImV4cCI6MTYxNzI2MzkxNSwiaWF0IjoxNjE3MTc3NTE1fQ.4B_6kOlMwKOAmxUXOk9nuxXzCCMGZOa8qwzT9-WqQqM"
                }
            }).then((res)=>{console.log(res)});
        }
    }

    render(){
        const {Header, Content, Footer} = Layout;
        return (
            <Layout>
                <Header id={"Header"}>Header</Header>
                <Content id={"Content"}>
                    <div id={"Content-Header"}>基于微服务架构的材料报价系统</div>
                    <div id={"Content-Title"}><span id={"login-title"}>完善用户信息</span></div>
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
                                <input className={"form-input"} id={"company-input"} type={"text"} defaultValue={""} placeholder={"公司"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setCompany}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <input className={"form-input"} id={"introduction-input"} type={"text"} defaultValue={""} placeholder={"简介"} onFocus={this.changeBorder} onBlur={this.recoverBorder} onChange={this.setIntroduction}></input>
                            </div>
                            <div className={"form-space"}/>
                            <div className={"form-group"}>
                                <button id={"submit-btn"} onClick={this.informationComplete}>提交</button>
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

export default InformationComplete;