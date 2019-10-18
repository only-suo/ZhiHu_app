import React from 'react'
import '../assets/css/comment.css'
import axios from 'axios'
import img from '../assets/img/bg.png'
import moment from 'moment'

class Comment extends React.Component{
    state = {
        id: null,
        sum: 0,
        Snum: 0,
        Lnum: 0,
        shortData: [],
        longData: [],
        // Ltoggle: 'block',
        // Lflag: true,
        toggle: 'none',
        flag: false,
        tag: 'none',
        // Stag: 'none',
    };
    render(props) {
        // console.log(this.props);

        let shortIco = this.state.flag?<span className="iconfont icon-xia-up"/>:<span className="iconfont icon-xia-down"/>
        return (
            <div className='comment'>
                {/*<h2>这是短评</h2>*/}
                <div className='headc'>
                    <div className='left_icon'>
                        <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}/>
                        <p>{this.state.sum} 条点评</p>
                    </div>
                    <div className='r_icon'>
                        <span className="iconfont icon-xiewrite18"/>
                    </div>
                </div>
                <div className='content'>
                    <div className='top_long'>
                        <p>{this.state.Lnum} 条长评</p>
                        {/*<em>{longIco}</em>*/}
                        {/*<span className="iconfont icon-xia-up"/>*/}
                    </div>
                    <div className='null' style={{display:this.state.tag,height:'10.2rem'}}>
                        <div className='null_box'>
                            <img src={img} alt=""/>
                            <h2>深度长评虚位以待</h2>
                        </div>
                    </div>
                    <ul className='com_list'>
                        {
                            this.state.longData.map((val,ind)=>{
                                return <li key={ind}>
                                        <span className='left_tu'>
                                            <img src={val.avatar} alt=""/>
                                        </span>
                                    <div className='right_box'>
                                        <div className='r_title'><h2>{val.author}</h2><span className="iconfont icon-dianzan" style={{color:'#B9B9B9',fontSize:'.35rem'}}><i>{val.likes}</i></span></div>
                                        <p className='com_text'>{val.content}</p>
                                        <p className='com_time'>{moment(val.time).format("MM-DD HH:mm")}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                    <div className='top_short' onClick={this.Stog.bind(this)}>
                        <p>{this.state.Snum} 条短评</p>
                        <em className='em'>{shortIco}</em>
                        {/*<span className="iconfont icon-xia-up"/>*/}
                    </div>
                    {/*<div className='null' style={{display:this.state.Stag,}}>*/}
                    {/*    <div className='null_box'>*/}
                    {/*        <img src={img} alt=""/>*/}
                    {/*        <h2>深度长评虚位以待</h2>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <ul className='com_list' style={{display:this.state.toggle}}>
                        {
                            this.state.shortData.map((val,ind)=>{
                                return <li key={ind}>
                                        <span className='left_tu'>
                                            <img src={val.avatar} alt=""/>
                                        </span>
                                    <div className='right_box'>
                                        <div className='r_title'><h2>{val.author}</h2><span className="iconfont icon-dianzan" style={{color:'#B9B9B9',fontSize:'.35rem'}}><i>{val.likes}</i></span></div>
                                        <p className='com_text'>{val.content}</p>
                                        <p className='com_time'>{moment(val.time).format("MM-DD HH:mm")}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    back(){
        this.props.history.go(-1)
    }
    Stog(){
        var flag = this.state.flag;
        if(flag){
            this.setState({
                toggle: 'none',
                flag: false
            });
        }
        if(!flag){
            this.setState({
                toggle: 'block',
                flag: true
            });
            // console.log(document.documentElement.scrollTop);
            console.log(document.getElementsByClassName('top_short')[0].offsetTop);
            // let scrollTop = document.documentElement.scrollTop;  // 滚动的高
            let offsetTop = document.getElementsByClassName('top_short')[0].offsetTop;  // 距离上面的高
            let top = document.getElementsByClassName('headc')[0].clientHeight;
            setTimeout(()=>{
                document.documentElement.scrollTop = offsetTop - top;
            },0)
        }

    }
    // componentWillUnmount() {
    //     // 卸载异步操作设置状态
    //     this.setState = () => {
    //         return true
    //     }
    // }

    componentWillMount() {
        this.setState({
            id: this.props.location.state.id
        });
    }

    componentDidMount() {
        // this.setState({
        //    id: this.props.location.state.id
        // });
        axios.get(
            `/api/4/story/${this.state.id}/long-comments`
        ).then((res)=>{
            // console.log(res);
            // console.log(res.data);
            // console.log(res.data.comments.length);
            this.setState({
                Lnum: res.data.comments.length,
                longData: res.data.comments,
                sum : this.state.sum += res.data.comments.length
            });
            if(res.data.comments.length === 0){
                this.setState({
                    tag : 'block'
                })
            }
        });
        axios.get(
            `/api/4/story/${this.state.id}/short-comments`
        ).then((res)=>{
            // console.log(res);
            // console.log(res.data);
            // console.log(res.data.comments.length);
            this.setState({
                Snum: res.data.comments.length,
                shortData: res.data.comments,
                sum : this.state.sum += res.data.comments.length
            });
            if(res.data.comments.length === 0){
                this.setState({
                    Stag : 'block'
                })
            }
        })
    }
}




export default Comment