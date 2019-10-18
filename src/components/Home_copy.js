import React from 'react'
import '../assets/css/home.css'
import axios from 'axios'
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
// import tou from '../assets/img/tou.jpeg'
import Menu from './Menu'
import moment from 'moment'
let arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

// console.log(arr[moment('20191016').format('d')]);
// console.log(moment('20191016').format('MM-D/')+arr[moment('20191016').format('d')]);

class Home extends React.Component{
    state = {
        data: ['1', '2', '3'],
        info: [],
        title: '首页',
        date:'',
        bfData:[],
        show: 'none',
        clientHeight: null,
        open: true,     // 左侧菜单 开启关闭
    };

    render() {

        return (
            <div className='home'>
                <Menu prop={this.props}/>

                <div className='head' ref='head'>
                    <div className='left_ic'>
                        <span className="iconfont icon-ego-menu" onClick={this.menu.bind(this)}/>
                        <p>{this.state.title === '今日新闻' ? '首页' : this.state.title}</p>
                    </div>
                    <div className='right_icon'>
                        <span className="iconfont icon-lingdang"/>
                        <span className="iconfont icon-gengduo"/>
                    </div>
                </div>
                <WingBlank style={{margin:'0',marginTop:'1.18rem'}}>
                    <Carousel
                        autoplay={true}   // 是否自动轮播
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: '4rem' ,margin: '0',position: 'relative'}}
                                onClick={this.go.bind(this,val.id)}
                            >
                                <img
                                    // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    src={val.image}
                                    alt=""
                                    style={{ width: '100%', height: '4rem' ,verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <p className='desc'>{val.title}</p>
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className='news_boxs'>
                    <div className='news_cont' ref='item'>
                        <h2 className='tit'>今日新闻</h2>
                        <ul className='news_list'>
                            {
                                this.state.info.map((val,ind) => {
                                    return <li key={ind} onClick={this.go.bind(this,val.id)}>
                                        <a className='news_info'>
                                            <p>{val.title}</p>
                                            <div className='img_box'>
                                                <img src={val.images} alt=""/>
                                            </div>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    {
                        this.state.bfData.map((val,ind)=>{
                            return <div className='news_cont' key={ind}>
                                        {/*<h2>{(val.date).substr(0,4)}-{(val.date).substr(4,2)}-{(val.date).substring(6,)}</h2>*/}
                                        <h2 className='tit'>{moment(val.date).format('MM月DD日 '+arr[moment(val.date).format('d')] )}</h2>
                                        <ul className='news_list'>
                                            {
                                                val.stories.map((val,ind) => {
                                                    return <li key={ind} onClick={this.go.bind(this,val.id)}>
                                                        <a className='news_info'>
                                                            <p>{val.title}</p>
                                                            <div className='img_box'>
                                                                <img src={val.images} alt=""/>
                                                            </div>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                        })
                    }
                </div>

            </div>
        );
    }
    // 控制左侧 menu  打开关闭
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    };
    go(x){
        this.props.history.push({
            pathname:'/details',
            state: {
                id: x
            }
        });
        // console.log(x);
    }
    menu(){
        // this.props
        let mBox = document.getElementsByClassName('menu_box')[0];
        mBox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    // componentWillMount() {
    //     var data = null;
    //     axios.get('/api/4/news/latest').then((res)=>{
    //         console.log(res.data);
    //         console.log(res.data.stories);
    //         this.setState({
    //             info: res.data.stories,
    //             date: res.data.date
    //         });
    //         // data = res.data.top_stories;
    //         setTimeout(() => {
    //             this.setState({
    //                 data: res.data.top_stories,
    //             });
    //         }, 100);
    //     });
    // }

    componentWillUnmount() {
        // 卸载异步操作设置状态
        // clearTimeout(this.timeouter);
        this.setState = (state, callback) => {
            return true
        }
    }

    componentDidMount() {
        axios.get('/api/4/news/latest').then((res)=>{
            console.log(res.data);
            // console.log(res.data.stories);
            this.setState({
                info: res.data.stories,
                date: res.data.date
            });
            // 当内容小于可视区的高
            let seeH = document.documentElement.clientHeight;  // 可视区高
            let contH = document.documentElement.offsetHeight; // 内容高
            // console.log(seeH,'可视区高');
            // console.log(contH,'内容高');
            if(contH<=seeH){
                axios.get(
                    `/api/4/news/before/${this.state.date}`
                ).then((res)=>{
                    // console.log(res.data);
                    // console.log(this.state.bfData,'之前的数据');
                    this.state.bfData.push(res.data);
                    this.setState({
                        date: res.data.date,
                        bfData: this.state.bfData
                        // bfData:res.data
                    });
                    // console.log(this.state.bfData,'更新后的数据');
                    // console.log(this.state.date);
                });
                window.addEventListener('scroll',this.downScroll.bind(this));
            } else {
                // 窗口触发 滚动 更新数据
                window.addEventListener('scroll',this.downScroll.bind(this));
            }
            // data = res.data.top_stories;
            setTimeout(() => {
                this.setState({
                    data: res.data.top_stories,
                });
            }, 100);
        });
        // 当内容小于可视区的高
        /*let seeH = document.documentElement.clientHeight;  // 可视区高
        let contH = document.documentElement.offsetHeight; // 内容高
        console.log(seeH,'可视区高');
        console.log(contH,'内容高');
        if(contH<=seeH){

            axios.get(
                `/api/4/news/before/${this.state.date}`
            ).then((res)=>{
                console.log(res.data);
                // console.log(this.state.bfData,'之前的数据');
                this.state.bfData.push(res.data);
                this.setState({
                    date: res.data.date,
                    bfData: this.state.bfData
                    // bfData:res.data
                });
                // console.log(this.state.bfData,'更新后的数据');
                console.log(this.state.date);
            });
            window.addEventListener('scroll',this.downScroll.bind(this));
        } else {
            // 窗口触发 滚动 更新数据
            window.addEventListener('scroll',this.downScroll.bind(this));
        }*/

        window.addEventListener('scroll',this.newScroll.bind(this));
        // console.log(document.getElementsByTagName('h2'));
        this.setState({
            clientHeight: this.refs.head.clientHeight
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(Array.from(document.getElementsByTagName('h2')),'更新的h2');
        // var item = Array.from(document.getElementsByTagName('h2'));
        // let arr = [];
        // for(let i = 0;i < item.length;i++){
        //     arr.push(item[i].innerHTML);
        // }
        // console.log(arr,'h2数组');
        // for(let i = 0;i<item.length;i++){
        //     if(item[i].scrollTop === this.refs.head.clientHeight){
        //         console.log('1111');
        //     }
        // }
    // }

    newScroll(){
        // var item = Array.from(document.getElementsByClassName('news_cont'));
        var item = Array.from(document.getElementsByClassName('tit'));
        // let arr = [];
        // for(let i = 0;i < item.length;i++){
        //     arr.push(item[i].innerHTML);
        //     // console.log(item[i].innerHTML,'标题');
        // }
        // console.log(item);
        // console.log(item[0].firstChild.innerHTML,'item[0]');
        // console.log(arr);
        let head = this.state.clientHeight;                     // head的高
        let scrollTop = document.documentElement.scrollTop;     // 滚动的高
        // console.log(document.documentElement.scrollTop,'滚动的高');
        // console.log(item[0].offsetTop-head,'今日新闻 距离头的高');

        // if(item[1] !== undefined){
        //     console.log(item[1].offsetTop-head,'10-16 距离上头的高');
        // }
        item.map((val) => {
            if(val !== undefined){
                if(scrollTop >= (val.offsetTop-head)){
                    this.setState({
                        title: val.innerHTML
                    })
                }
            }
        });

    }

    downScroll(){
        // 滚动到底部 加载数据
        // console.log(this.state.date);
        const scrollTop = document.documentElement.scrollTop;       // 滚动条滚动高度
        const clientHeight = document.documentElement.clientHeight; // 可视区域的高度
        const scrollHeight = document.documentElement.scrollHeight; // 滚动内容的高度
        if((scrollTop+clientHeight) >= scrollHeight){
            axios.get(
                `/api/4/news/before/${this.state.date}`
            ).then((res)=>{
                // console.log(res.data);
                // console.log(this.state.bfData,'之前的数据');
                this.state.bfData.push(res.data);
                this.setState({
                    date: res.data.date,
                    bfData: this.state.bfData
                    // bfData:res.data
                });
                // console.log(this.state.bfData,'更新后的数据');
                // console.log(this.state.date);

            })
        }
    }
}

export default Home