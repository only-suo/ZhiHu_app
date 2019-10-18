import React from 'react'
import '../assets/css/menu.css'
import tou from '../assets/img/tou.jpeg'
// import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Menu extends React.Component{
    state = {
        // show: 'none'
    };
    render(props) {
        // console.log(this.props.prop,'菜单');
        // const sidebar = (<List>
        //     {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        //         if (index === 0) {
        //             return (<List.Item key={index}
        //                                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        //                                multipleLine
        //             >Category</List.Item>);
        //         }
        //         return (<List.Item key={index}
        //                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        //         >Category{index}</List.Item>);
        //     })}
        // </List>);
        return (
            <div className='menu_box' ref='menu' style={{display:'block',width:'100%',height:document.documentElement.clientHeight}}>
                {/*<div className='menu_bg' onClick={this.None.bind(this)} style={{height:document.documentElement.clientHeight}}>*/}
                    <div className='menu' style={{height:document.documentElement.clientHeight}}>
                        <div className='menu_top'>
                            <div className='menu_tit'>
                                <a>
                                    <img src={tou} alt=""/>
                                </a>
                                <p>工藤新一</p>
                            </div>
                            <div className='action'>
                                <div className='left_a' onClick={this.goColl.bind(this)}>
                                    <span className="iconfont icon-shoucang"/>
                                    <p>我的收藏</p>
                                </div>
                                <div className='right_a'>
                                    <span className="iconfont icon-xiazai1"/>
                                    <p>我的下载</p>
                                </div>
                            </div>
                        </div>
                        <ul className='menu_list'>
                            <li className='active' onClick={this.goHome.bind(this)}>
                                <span className="iconfont icon-shouye"/>
                                <p>首页</p>
                            </li>
                        </ul>
                    </div>

                {/*</div>*/}
                //  menu
                {/*<NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>*/}
                {/*<Drawer*/}
                {/*    className="my-drawer"*/}
                {/*    style={{ minHeight: document.documentElement.clientHeight }}*/}
                {/*    enableDragHandle*/}
                {/*    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}*/}
                {/*    sidebar={sidebar}*/}
                {/*    open={this.state.open}*/}
                {/*    onOpenChange={this.onOpenChange}*/}
                {/*>*/}
                {/*    Click upper-left corner*/}
                {/*</Drawer>*/}
            </div>
        )
    }
    None(e){
        // console.log(e.target.className);
        // let box = document.getElementsByClassName('menu_box')[0];
        if(e.target.className === 'menu_bg'){
            this.refs.menu.style.display = 'none'
        }
        document.body.style.overflow = '';
    }
    goHome(e){
        // this.setState({
        //     show: 'none'
        // });
        if(e.target.className === 'menu_bg'){
            this.refs.menu.style.display = 'none'
        }
        this.props.prop.history.push({
            pathname: '/home'
        })
    }
    goColl(e){
        // this.setState({
        //     show: 'none'
        // });
        if(e.target.className === 'menu_bg'){
            this.refs.menu.style.display = 'none'
        }
        this.props.prop.history.push({
            pathname: '/collect'
        })
    }



}

export default Menu
