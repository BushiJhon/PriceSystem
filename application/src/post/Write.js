import React, {Component} from 'react';
import Nav from '../nav/NavWrite';
import Footer from '../footer/NewFooter';
import {Layout, Input, Select, Button} from 'antd';
import axios from 'axios';
import './Write.css';

const {TextArea} = Input;
const {Option} = Select;

const provinces = ['云南省', '广东省'];
const cities = {
    '云南省': ['昆明市', '曲靖市', '玉溪市', '昭通市', '保山市', '丽江市', '普洱市', '临沧市', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
    '广东省': ['广州市', '深圳市', '佛山市', '东莞市', '中山市', '珠海市', '江门市', '肇庆市', '惠州市', '汕头市', '潮州市', '揭阳市', '汕尾市', '湛江市', '茂名市', '阳江市', '云浮市', '韶关市', '清远市', '梅州市', '河源市'],
}


class Write extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectProvince: provinces[0],
            selectCity: cities[provinces[0]][0],
            selectCities: cities[provinces[0]],
            title: '',
            content: '',
            industry: ''
        }

        this.handleProvince = this.handleProvince.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setContent = this.setContent.bind(this);
        this.setIndustry = this.setIndustry.bind(this);
        this.write = this.write.bind(this);
    }

    handleProvince(value){
        this.setState({selectProvince: value});
        this.setState({selectCities: cities[value]});
        this.setState({selectCity: cities[value][0]})
    }

    handleCity(value){
        this.setState({selectCity: value});
    }

    setTitle(event){
        this.setState({title: event.target.value});
    }

    setContent(event){
        this.setState({content: event.target.value});
    }

    setIndustry(event){
        this.setState({industry: event.target.value});
    }

    write(){
        axios({
            method: 'POST',
            url: 'api/post-write/post/write',
            data: {
                "issueDate": new Date(),
                "province": this.state.selectProvince,
                "city": this.state.selectCity,
                "industry": this.state.industry,
                "title": this.state.title,
                "content": this.state.content
            },
            headers: {
                "ps-token": window.localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log(res.data);
        })
    }

    render(){
        const selectProvince = this.state.selectProvince;
        const selectCity = this.state.selectCity;
        const selectCities = this.state.selectCities;
        const handleProvince = this.handleProvince;
        const handleCity = this.handleCity;
        const setTitle = this.setTitle;
        const setContent = this.setContent;
        const setIndustry = this.setIndustry;
        const write = this.write;
        return(
            <Layout>
                <Nav/>
                <div className={"write-content"}>
                    <div className={"posts"}>
                        <div id={"panel"}>
                            <div className={"input"}>
                                <span>地区:&emsp;</span>
                                <Select defaultValue={selectProvince} style={{width: '160px'}} onChange={handleProvince}>
                                    {provinces.map(province => (
                                        <Option key={province}>{province}</Option>
                                    ))}
                                </Select>
                                <Select value={selectCity} style={{width: '220px'}} onChange={handleCity}>
                                    {selectCities.map(city => (
                                        <Option key={city}>{city}</Option>
                                    ))}
                                </Select>
                                <div style={{float: 'right'}}>
                                    <Button type="primary" onClick={write}>提交</Button>
                                </div>
                            </div>
                            <div className={"input"}>
                                <span>行业:&emsp;</span>
                                <Input style={{width: '240px'}} type={"text"} onChange={setIndustry}></Input>
                            </div>
                            <div>
                                <TextArea bordered={false} placeholder={"请输入标题"} autoSize={{ minRows: 3, maxRows: 8 }} style={{fontSize: '28px', borderBottom: '3px solid #edf0f5'}} placeholder={"请输入行业"} onChange={setTitle}></TextArea>                                
                            </div>
                            {/* <div id={"space"}>
                            </div> */}
                            <div>
                                <TextArea bordered={false} placeholder={"请输入正文"} autoSize={{ minRows: 15, maxRows: 50 }} style={{ fontSize: '20px'}} onChange={setContent}></TextArea>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
        );
    }
}

export default Write;