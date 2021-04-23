import React, {Component} from 'react';
import {Input, Select, Button} from 'antd';
import axios from 'axios';
import './Set.css';

const {Option} = Select;

const provinces = ['云南省', '广东省'];
const cities = {
    '云南省': ['昆明市', '曲靖市', '玉溪市', '昭通市', '保山市', '丽江市', '普洱市', '临沧市', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
    '广东省': ['广州市', '深圳市', '佛山市', '东莞市', '中山市', '珠海市', '江门市', '肇庆市', '惠州市', '汕头市', '潮州市', '揭阳市', '汕尾市', '湛江市', '茂名市', '阳江市', '云浮市', '韶关市', '清远市', '梅州市', '河源市'],
}

class Information extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectProvince: provinces[0],
            selectCity: cities[provinces[0]][0],
            selectCities: cities[provinces[0]], 
            mobile: '13888389311',
            nickname: window.localStorage.getItem("nickname"),
            company: '',
            industry: '',
            introduction: ''
        }

        this.handleProvince = this.handleProvince.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.modify = this.modify.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setIndustry = this.setIndustry.bind(this);
        this.setIntroduction = this.setIntroduction.bind(this);
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'api/user-information-management/user/show',
            headers: {
                'ps-token': window.localStorage.getItem("token")
            }
        }).then((res)=>{
            this.setState({company: res.data.company});
            this.setState({industry: res.data.industry});
            this.setState({introduction: res.data.introduction});
            this.setState({selectProvince: res.data.province});
            this.setState({selectCity: res.data.city});
            this.setState({selectCities: cities[res.data.province]});
        })
    }

    handleProvince(value){
        this.setState({selectProvince: value});
        this.setState({selectCity: cities[value][0]});
        this.setState({selectCities: cities[value]});
    }

    handleCity(value){
        this.setState({selectCity: value});
    }

    setCompany(event){
        this.setState({company: event.target.value});
    }

    setIndustry(event){
        this.setState({industry: event.target.value});
    }

    setIntroduction(event){
        this.setState({introduction: event.target.value});
    }

    modify(){
        axios({
            method: 'POST',
            url: '/api/user-information-management/user/modify',
            data: {
                "province": this.state.selectProvince,
                "city": this.state.selectCity,
                "company": this.state.company,
                "introduction": this.state.introduction,
                "industry": this.state.industry
            },
            headers: {
                "ps-token": window.localStorage.getItem("token")
            }
        }).then((res)=>{console.log(res)});
    }

    render(){
        const handleProvince = this.handleProvince;
        const handleCity = this.handleCity;
        const modify = this.modify;
        const setCompany = this.setCompany;
        const setIndustry = this.setIndustry;
        const setIntroduction = this.setIntroduction;

        const selectProvince = this.state.selectProvince;
        const selectCities = this.state.selectCities;
        const selectCity = this.state.selectCity;
        const mobile = this.state.mobile;
        const nickname = this.state.nickname;
        const company = this.state.company;
        const industry = this.state.industry;
        const introduction = this.state.introduction;
        return(
            <div>
                <div className={"input"}>
                    <span>电话号码:&emsp;</span>
                    <span style={{width: '240px'}}>{mobile}</span>
                </div>
                <div className={"input"}>
                    <span>&emsp;&emsp;昵称:&emsp;</span>
                    <span style={{width: '240px'}}>{nickname}</span>
                </div>
                <div className={"input"}>
                    <span>公司名称:&emsp;</span>
                    <Input style={{width: '240px'}} type={"text"} value={company} onChange={setCompany}></Input>
                </div>
                <div className={"input"}>
                    <span>&emsp;&emsp;行业:&emsp;</span>
                    <Input style={{width: '240px'}} type={"text"} value={industry} onChange={setIndustry}></Input>
                </div>
                <div className={"input"}>
                    <span>&emsp;&emsp;地区:&emsp;</span>
                    <Select value={selectProvince} style={{width: '160px'}} onChange={handleProvince}>
                        {provinces.map(province => (
                            <Option key={province}>{province}</Option>
                        ))}
                    </Select>
                    <Select value={selectCity} style={{width: '220px'}} onChange={handleCity}>
                        {selectCities.map(city => (
                            <Option key={city}>{city}</Option>
                        ))}
                    </Select>
                </div>
                <div className={"input"}>
                    <span>&emsp;&emsp;简介:&emsp;</span>
                    <Input.TextArea cols="20" rows="3" style={{width: '600px', height: '80px'}} value={introduction} onChange={setIntroduction}></Input.TextArea>
                </div>
                <div className={"input"}>
                    <Button size="large" onClick={modify}>提交</Button>
                </div>
            </div>
        );  
    }
}

export default Information;