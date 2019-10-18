import React from 'react'
import '../assets/css/details.css'
import axios from 'axios'
import Store from '../Store/index'


class Details extends React.Component{
    state = {
        data: [],
        body: '',
        css: '',
        imgU: '',
        title: '',
        width: '',
        height: '',
        show: 'none',
        num: 0,
        collected: Store.state.collect,
        collect :[],
        flag : false
    };
    render(props) {
        // console.log(this.props);
        let coll = this.state.flag ? <span className="iconfont icon-shoucang" style={{color:'yellow'}} onClick={this.coll.bind(this)}/> : <span className="iconfont icon-shoucang" onClick={this.coll.bind(this)}/>
        return (
            <div className='details'>
                <div className='heads'>
                    <div className='left_i' onClick={this.back.bind(this)}>
                        <span className="iconfont icon-fanhui"/>
                    </div>
                    <div className='right_i'>
                        <span className="iconfont icon-fenxiang" onClick={this.show.bind(this)}/>
                        {/*<span className="iconfont icon-shoucang" onClick={this.coll.bind(this)}/>*/}
                        {coll}
                        <span className="iconfont icon-xiaoxi" onClick={this.goCom.bind(this,this.state.id)}><i>{this.state.num}</i></span>
                        <span className="iconfont icon-dianzan"><i>25</i></span>
                    </div>
                </div>
                <div className='cont'>
                    <link  rel="stylesheet" href={this.state.css}/>
                    <div dangerouslySetInnerHTML={{ __html: this.state.body }} />
                </div>
                {/*<div className='share_box' onClick={this.None.bind(this)} style={{display:this.state.show,position: 'fixed',left:'0',top:'0',width:(this.state.width)/10 + 'rem',height:(this.state.height)/10 + 'rem',zIndex:'999999',background:'rgba(0,0,0,.5)'}}>*/}
                <div className='share_box' onClick={this.None.bind(this)} style={{display:this.state.show,position: 'fixed',top:'0',width:'7.5rem',height:this.state.height,zIndex:'999999',background:'rgba(0,0,0,.5)'}}>
                    <div className='s_box'>
                        <h2>分享</h2>
                        <ul className='icon_list clearfix'>
                            <li>
                                <span className="iconfont icon-weibo" style={{color:'#F13F19'}}>
                                    <i>新浪微博</i>
                                </span>
                            </li>
                            <li>
                                <span className="iconfont icon-weixin" style={{color:'#60C84F'}}>
                                    <i>微信</i>
                                </span>
                            </li>
                            <li>
                                <span className="iconfont icon-fenxiangweixinpengyouquan" style={{color:'#71CF2A'}}>
                                    <i>微信朋友圈</i>
                                </span>
                            </li>
                            <li>
                                <em className='xiang'><span className="iconfont icon-yinxiangbiji" style={{fontSize:'.8rem',color:'#fff'}} /></em>
                                <i style={{display:'block'}}>印象笔记</i>
                            </li>
                            <li>
                                <em className='youdao'><span className="iconfont icon-youdaoyunbiji1" style={{fontSize:'.6rem',color:'#fff',lineHeight:'1.1rem'}}/></em>
                                <i style={{display:'block'}}>有道云笔记</i>
                            </li>
                            <li>
                                <span className="iconfont icon-QQ" style={{color:'#2369C8'}}>
                                    <i>QQ</i>
                                </span>
                            </li>
                            <li>
                                <span className="iconfont icon-gengduo1" style={{color:'#7F7F7F'}}>
                                    <i>更多平台</i>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
    back(){
        this.props.history.go(-1);
    }
    show(){
        this.setState({
            show: 'block'
        });
        document.body.style.overflow = 'hidden';
    }
    None(e){
        console.log(e.target);
        if(e.target.className === 'share_box'){
            this.setState({
                show: 'none'
            })
        }
        document.body.style.overflow = '';
    }
    goCom(x){
        this.props.history.push({
            pathname: '/comment',
            state:{
                id: x
            }
        })
    }
    coll(){
        let coll = this.state.flag;
        let obj = {
            id: this.state.data.id,
            title: this.state.data.title,
            src: this.state.imgU,
        };
        // console.log(obj);
        if(!coll){       // 未收藏              点击收藏
            this.setState({
                flag: true
            });
            Store.dispatcher.dispatch({
                actionType : 'addColl',
                actionParams : obj
            });
        } else {   // 已收藏           取消收藏
            this.setState({
                flag: false
            });
            Store.dispatcher.dispatch({
                actionType : 'delColl',
                actionParams : obj
            });
        }


        /*this.state.collect.push(obj);
        if(coll){  // 已收藏           取消收藏
            this.setState({
                flag: false
            });
            console.log(Store.state.collected,'取消收藏 之前');
            // this.state.collect.push(obj);
            Store.state.collected.map(val => {
                if(val.id === obj.id){
                    Store.state.collected.splice(obj)
                }
                // this.state.collect.push(obj);
                this.setState({
                    collect : this.state.collect
                });
                Store.dispatcher.dispatch({
                    actionType : 'coll',
                    actionParams : this.state.collect
                });
            });
            console.log(Store.state.collected,'取消收藏 之后');

        } else { // 未收藏              点击收藏
            this.setState({
                flag: true
            });
            console.log(Store.state.collected,'已收藏 之前');

            // this.state.collect.push(obj);
            this.setState({
                collect : this.state.collect
            });
            Store.dispatcher.dispatch({
                actionType : 'coll',
                actionParams : this.state.collect
            });

            console.log(Store.state.collected,'已收藏 之后');
        }
*/

        // localStorage

        // if(localStorage.getItem('data') === null){
        //     localStorage.setItem('data',JSON.stringify([obj]))
        // } else {
        //     // var flag = this.state.flag;
        //     var item = JSON.parse(localStorage.getItem('data'));
        //     // item.map((val,ind)=>{
        //     //     console.log(val);
        //     //     if(val.id === obj.id){
        //     //         flag = true;
        //     //         if(flag){
        //     //             console.log('重复');
        //     //             // val.id = obj.id;
        //     //             // val.title = obj.title;
        //     //             // val.src = obj.src;
        //     //             // localStorage.setItem('data',JSON.stringify(item))
        //     //         }
        //     //         return true
        //     //     } else {
        //     //         flag = false;
        //     //         if(flag === false){
        //     //             // item.push(obj);
        //     //             // localStorage.setItem('data',JSON.stringify(item));
        //     //             // console.log('不重复');
        //     //         }
        //     //         item.push(obj);
        //     //         localStorage.setItem('data',JSON.stringify(item));
        //     //         console.log('不重复');
        //     //     }
        //     //
        //     // })
        //     console.log(item);
        //     item.some(val => {
        //         if(this.state.flag === false){
        //             if(val.id !== obj.id){
        //                 item.push(obj);
        //                 localStorage.setItem('data',JSON.stringify(item));
        //                 console.log('1');
        //                 return true
        //             } else {
        //                 this.setState({
        //                     flag: true
        //                 });
        //                 console.log('2');
        //                 console.log('重复');
        //             }
        //         }
        //     })
        // }

        // flux

        // console.log(Store.state.collected,'已收藏 之前');
        // if(Store.state.collected.length === 0){
        //     this.state.collect.push(obj);
        //     this.setState({
        //         collect : this.state.collect
        //     });
        //     Store.dispatcher.dispatch({
        //         actionType : 'coll',
        //         actionParams : this.state.collect
        //     });
        // }
        // else {
        //     // 判断是否重复
        //     this.state.collect.map(val => {
        //         if(val.id === obj.id){
        //             console.log('重复id')
        //         }
        //         // return true
        //     });
        // }
        // console.log(Store.state.collected,'已收藏 之后');

    }
    componentDidMount() {
        this.setState({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        });
        axios.get(
            `/api/4/news/${this.props.location.state.id}`
        ).then((res)=>{
            // console.log(res.data);
            // console.log(res.data.body);
            this.setState({
                id: this.props.location.state.id,
                data: res.data,
                body: res.data.body,
                css: res.data.css,
                imgU: res.data.image,
                title: res.data.title
            });
            let item = document.getElementsByClassName('img-place-holder');
            let img = document.createElement('img');

            img.setAttribute('src',this.state.imgU);
            // console.log(item[0],'before');
            if(item[0] !== undefined){
                item[0].appendChild(img);
            }

            let p = document.createElement('p');
            p.innerHTML = this.state.title;
            if(item[0] !== undefined){
                item[0].appendChild(p)
            }
            // 短评
            axios.get(
                `/api/4/story/${this.state.id}/short-comments`
            ).then((res)=>{
                // console.log(res.data.comments.length);
                this.setState({
                    num: this.state.num += res.data.comments.length
                })
            });
            // 长评
            axios.get(
                `/api/4/story/${this.state.id}/long-comments`
            ).then((res)=>{
                // console.log(res.data.comments.length);
                this.setState({
                    num: this.state.num += res.data.comments.length
                })
            })
        });
        Store.state.on('coll',()=>{
            this.setState({
                collect:Store.state.collected
            })
        });

        // 获取当前 是否被收藏
        let arr = [];
        // console.log(this.props.location.state.id,'传过来的id');
        // console.log(Store.state.collected,'数组');
        Store.state.collected.map(val => {
            console.log(val.id,'数据中id');
            arr.push(Number(val.id))
        });
        // console.log(arr.indexOf(this.props.location.state.id),'是否存在');
        if(arr.indexOf(this.props.location.state.id) === -1){
            this.setState({
                flag : false
            })
        } else {
            this.setState({
                flag : true
            })
        }
    }
}

export default Details
