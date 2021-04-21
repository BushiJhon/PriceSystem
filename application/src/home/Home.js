import React, {Component} from 'react';
import {Layout, Carousel} from 'antd';
import LoginNav from '../nav/NavLogin';
import Nav from '../nav/Nav';
import Post from './Post';
import './Home.css';

// import './image.png'
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const listItems = numbers.map((numbers) =>
//     <div className={"post"}>
//         <a className={"post-link"}>
//             <p>这两年，A股市场银行股的估值严重偏低。尤其是优秀的银行股，其ROE、成长性和资产质量均处于银行业国际前列的水平，而其PB、PE和PEG都大幅低于国际水平。 最近有种种迹象表明，这种态势正在改变，优秀银行股的进攻号角吹响了！ 1、一季度国民经济全面复苏，优秀的商业银行利润增长达到两位数，资...</p>
//         </a>
//     </div>
// );

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLogin: false,

            numbers : [],
            listItems : []
        }

        this.change = this.change.bind(this);
    }

    change(){
        console.log("change")
        const newNumbers = [{title: "赚翻了——《神秘的股神》第一卷第11章（小说）", content: "第二天，罗桑和刘胖子按照约定早早来到营业所。 想不到龚总、王梅和老张等人也早早就来了。 龚总眼圈是黑的，王梅带着兴奋，老张等人看热闹不嫌事大。 开盘集合竞价，卡卡吉吉涨停，茅台跌停。 龚总眼睛都红了，红彤彤的，脸上都笑出花来了，王梅激动地都有嫁给龚总的心了，老张等众人眼红不已。 ...", time: "04-20 21:25"}, 
                            {title: "“固收+”的命门和投资方式", content: "今天参加了一个大咖会，遇到了一个讲真话的，颇有收获。 我对信用债投资一向不以为然，我喜欢高股息投资。听了这个讲座，信用债加杠效果也不错不错的。固收＋基本上是20%的股票，80%债券，债券带杠杆，固收+不是做加法，这个思路我是认可的。 去年的情况，20%的股票做成300ETF的水准，也有８％，...", time: "04-20 21:25"}    
                            ];
        this.setState({numbers: newNumbers});
        console.log(this.state.numbers);
        const newListItems = this.state.numbers.map((numbers) =>
            <Post title={numbers.title} content={numbers.content} time={numbers.time}/>
        );

        this.setState({listItems: newListItems});
    }


    render(){
        const nav = this.state.isLogin ? <Nav/> : <LoginNav/>;

        return(
            <Layout>
                {nav}
                <div className={"content"}>
                    <div className={"background"}>
                        <Carousel autoplay>
                            <div>
                                <h1 id={"content-1"}>基于微服务架构的价格系统</h1>
                            </div>
                            <div>
                                <h1 id={"content-2"}>开始发布价格帖子！</h1>
                            </div>
                            <div>
                                <h1 id={"content-3"}>Getting Started!</h1>
                            </div>
                        </Carousel>
                    </div>
                    <div className={"posts"}>
                        {this.state.listItems}
                    </div>
                    <div><button onClick={this.change}>gengx</button></div>
                </div>
            </Layout>
        );
    }
}

export default Home;