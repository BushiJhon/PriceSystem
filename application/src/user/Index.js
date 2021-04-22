import React, {Component} from 'react';
import Nav from '../nav/NavLogin';
import {Layout, Avatar} from 'antd';
import './Set.css';
import Post from '../home/Post';

class Index extends Component{
    constructor(props){
        super(props);

        this.state = {
            numbers : [{title: "赚翻了——《神秘的股神》第一卷第11章（小说）", content: "第二天，罗桑和刘胖子按照约定早早来到营业所。 想不到龚总、王梅和老张等人也早早就来了。 龚总眼圈是黑的，王梅带着兴奋，老张等人看热闹不嫌事大。 开盘集合竞价，卡卡吉吉涨停，茅台跌停。 龚总眼睛都红了，红彤彤的，脸上都笑出花来了，王梅激动地都有嫁给龚总的心了，老张等众人眼红不已。 ...", time: "04-20 21:25"}, 
            {title: "“固收+”的命门和投资方式", content: "今天参加了一个大咖会，遇到了一个讲真话的，颇有收获。 我对信用债投资一向不以为然，我喜欢高股息投资。听了这个讲座，信用债加杠效果也不错不错的。固收＋基本上是20%的股票，80%债券，债券带杠杆，固收+不是做加法，这个思路我是认可的。 去年的情况，20%的股票做成300ETF的水准，也有８％，...", time: "04-20 21:25"}    
            ]
        }
    }

    render(){
        const listItems = this.state.numbers.map((numbers) =>
        <Post title={numbers.title} content={numbers.content} time={numbers.time}/>
        );

        return(
            <Layout>
                <Nav></Nav>
                <div className={"user-content"}>
                    <div className={"user-background"}>
                        <div className={"user"}>
                            <Avatar size={130} icon={<img src="./image-1.png"></img>}></Avatar>
                            <span style={{fontSize: '40px', color: '#fff', marginLeft: '20px'}}>
                                username
                            </span>
                        </div>
                    </div>
                    <div className={"posts"}>
                        <div>
                            <span className={"select"}>帖子</span>
                            <span className={"select"}>帖子</span>
                        </div>
                        {listItems}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;