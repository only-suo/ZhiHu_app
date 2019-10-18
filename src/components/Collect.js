import React from 'react'
import '../assets/css/collect.css'
// import axios from 'axios'
import Store from '../Store/index'
import { Carousel, WingBlank } from 'antd-mobile';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import Menu from "./Menu";
// import Menu from './Menu'


class Collect extends React.Component{
    state = {
        num: 0,
        data: [],
        open: false,     // 左侧菜单 开启关闭
    };
    render() {
        const sidebar = (
            <List>
                <Menu prop={this.props}/>
                {/*{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {*/}
                {/*    if (index === 0) {*/}
                {/*        return (<List.Item key={index}*/}
                {/*                           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"*/}
                {/*                           multipleLine*/}
                {/*        >Category</List.Item>);*/}
                {/*    }*/}
                {/*    return (<List.Item key={index}*/}
                {/*                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"*/}
                {/*    >Category{index}</List.Item>);*/}
                {/*})}*/}
            </List>
        );
        return (
            <div className='collect'>
                {/*<h2>这是收藏</h2>*/}
                {/*<Menu prop={this.props}/>*/}
                {/*menu*/}
                {/*<NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>*/}
                <Drawer
                    className="my-drawer"
                    style={{ width:0 }}
                    enableDragHandle
                    contentStyle={{  }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                    sidebarStyle={{position:'fixed',zIndex:9999}}
                    overlayStyle={{position:'fixed'}}

                >
                    Click upper-left corner
                </Drawer>
                <div className='heado'>
                    <div className='left_ico'>
                        {/*<span className="iconfont icon-ego-menu" onClick={this.menu.bind(this)}/>*/}
                        <span className="iconfont icon-ego-menu" onClick={this.onOpenChange}/>
                        <p>{this.state.num} 条收藏</p>
                    </div>
                </div>
                <div className='news_box'>
                    <div className='news_cont'>
                        <ul className='news_list'>
                            {
                                this.state.data.map((val,ind) => {
                                    return <li key={ind} onClick={this.go.bind(this,val.id)}>
                                        <a className='news_info'>
                                            <p>{val.title}</p>
                                            <div className='img_box'>
                                                <img src={val.src} alt=""/>
                                            </div>
                                        </a>
                                    </li>
                                })
                            }
                            {/*<li>*/}
                            {/*    <a className='news_info'>*/}
                            {/*        <p>标题</p>*/}
                            {/*        <div className='img_box'>*/}
                            {/*            <img src='' alt=""/>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    // 控制左侧 menu  打开关闭
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    };
    menu(){
        let menu = document.getElementsByClassName('menu_box')[0];
        menu.style.display = 'block'
    }
    go(x){
        this.props.history.push({
            pathname:'/details',
            state: {
                id: x
            }
        });
        // console.log(x);
    }
    componentDidMount() {
        // localStorage

        // if(localStorage.getItem('data') === null){
        //     this.setState({
        //         num: 0
        //     });
        //     console.log(0);
        // } else {
        //     let n = JSON.parse(localStorage.getItem('data')).length;
        //     this.setState({
        //         num: n
        //     });
        //     console.log(n);
        //     this.setState({
        //         data: JSON.parse(localStorage.getItem('data'))
        //     })
        // }

        // flux

        this.setState({
            data : Store.state.collected,
            num : Store.state.collected.length
        });
        console.log(Store.state.collected,'flux 数据');
    }
}

export default Collect