(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/tou.7ad0ad8a.jpeg"},111:function(e,t,a){e.exports=a.p+"static/media/bg.bda3c4d3.png"},114:function(e,t,a){e.exports=a(221)},119:function(e,t,a){},120:function(e,t){var a=document.documentElement.clientWidth;a>750&&(a=750),document.documentElement.style.fontSize=a/7.5+"px"},121:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),s=a.n(c),o=(a(119),a(120),a(11)),i=a(18),m=a(13),r=a(12),d=a(14),u=a(31),h=(a(121),a(21)),p=a.n(h),f=a(24),E=(a(101),a(211),a(108)),g=a.n(E),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e){return l.a.createElement("div",{className:"menu_box",ref:"menu",style:{display:"block",width:"100%",height:document.documentElement.clientHeight}},l.a.createElement("div",{className:"menu",style:{height:document.documentElement.clientHeight}},l.a.createElement("div",{className:"menu_top"},l.a.createElement("div",{className:"menu_tit"},l.a.createElement("a",null,l.a.createElement("img",{src:g.a,alt:""})),l.a.createElement("p",null,"\u5de5\u85e4\u65b0\u4e00")),l.a.createElement("div",{className:"action"},l.a.createElement("div",{className:"left_a",onClick:this.goColl.bind(this)},l.a.createElement("span",{className:"iconfont icon-shoucang"}),l.a.createElement("p",null,"\u6211\u7684\u6536\u85cf")),l.a.createElement("div",{className:"right_a"},l.a.createElement("span",{className:"iconfont icon-xiazai1"}),l.a.createElement("p",null,"\u6211\u7684\u4e0b\u8f7d")))),l.a.createElement("ul",{className:"menu_list"},l.a.createElement("li",{className:"active",onClick:this.goHome.bind(this)},l.a.createElement("span",{className:"iconfont icon-shouye"}),l.a.createElement("p",null,"\u9996\u9875")))),"//  menu")}},{key:"None",value:function(e){"menu_bg"===e.target.className&&(this.refs.menu.style.display="none"),document.body.style.overflow=""}},{key:"goHome",value:function(e){"menu_bg"===e.target.className&&(this.refs.menu.style.display="none"),this.props.prop.history.push({pathname:"/home"})}},{key:"goColl",value:function(e){"menu_bg"===e.target.className&&(this.refs.menu.style.display="none"),this.props.prop.history.push({pathname:"/collect"})}}]),t}(l.a.Component),v=a(44),b=a.n(v),N=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={data:["1","2","3"],info:[],title:"\u9996\u9875",date:"",bfData:[],show:"none",clientHeight:null,open:!1},a.onOpenChange=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t),a.setState({open:!a.state.open})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement(f.c,null,l.a.createElement(y,{prop:this.props}));return l.a.createElement("div",{className:"home"},l.a.createElement(f.b,{className:"my-drawer",style:{width:0},enableDragHandle:!0,contentStyle:{},sidebar:t,open:this.state.open,onOpenChange:this.onOpenChange,sidebarStyle:{position:"fixed",zIndex:9999},overlayStyle:{position:"fixed"}},"Click upper-left corner"),l.a.createElement("div",{className:"head",ref:"head"},l.a.createElement("div",{className:"left_ic"},l.a.createElement("span",{className:"iconfont icon-ego-menu",onClick:this.onOpenChange}),l.a.createElement("p",null,"\u4eca\u65e5\u65b0\u95fb"===this.state.title?"\u9996\u9875":this.state.title)),l.a.createElement("div",{className:"right_icon"},l.a.createElement("span",{className:"iconfont icon-lingdang"}),l.a.createElement("span",{className:"iconfont icon-gengduo"}))),l.a.createElement(f.d,{style:{margin:"0",marginTop:"1.18rem"}},l.a.createElement(f.a,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return l.a.createElement("a",{key:t,style:{display:"inline-block",width:"100%",height:"4rem",margin:"0",position:"relative"},onClick:e.go.bind(e,t.id)},l.a.createElement("img",{src:t.image,alt:"",style:{width:"100%",height:"4rem",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),l.a.createElement("p",{className:"desc"},t.title))})))),l.a.createElement("div",{className:"news_boxs"},l.a.createElement("div",{className:"news_cont",ref:"item"},l.a.createElement("h2",{className:"tit"},"\u4eca\u65e5\u65b0\u95fb"),l.a.createElement("ul",{className:"news_list"},this.state.info.map((function(t,a){return l.a.createElement("li",{key:a,onClick:e.go.bind(e,t.id)},l.a.createElement("a",{className:"news_info"},l.a.createElement("p",null,t.title),l.a.createElement("div",{className:"img_box"},l.a.createElement("img",{src:t.images,alt:""}))))})))),this.state.bfData.map((function(t,a){return l.a.createElement("div",{className:"news_cont",key:a},l.a.createElement("h2",{className:"tit"},b()(t.date).format("MM\u6708DD\u65e5 "+N[b()(t.date).format("d")])),l.a.createElement("ul",{className:"news_list"},t.stories.map((function(t,a){return l.a.createElement("li",{key:a,onClick:e.go.bind(e,t.id)},l.a.createElement("a",{className:"news_info"},l.a.createElement("p",null,t.title),l.a.createElement("div",{className:"img_box"},l.a.createElement("img",{src:t.images,alt:""}))))}))))}))))}},{key:"go",value:function(e){this.props.history.push({pathname:"/details",state:{id:e}})}},{key:"menu",value:function(){document.getElementsByClassName("menu_box")[0].style.display="block",document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){return!0}}},{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/4/news/latest").then((function(t){console.log(t.data),e.setState({info:t.data.stories,date:t.data.date});var a=document.documentElement.clientHeight;document.documentElement.offsetHeight<=a?(p.a.get("/api/4/news/before/".concat(e.state.date)).then((function(t){e.state.bfData.push(t.data),e.setState({date:t.data.date,bfData:e.state.bfData})})),window.addEventListener("scroll",e.downScroll.bind(e))):window.addEventListener("scroll",e.downScroll.bind(e)),setTimeout((function(){e.setState({data:t.data.top_stories})}),100)})),window.addEventListener("scroll",this.newScroll.bind(this)),this.setState({clientHeight:this.refs.head.clientHeight})}},{key:"newScroll",value:function(){var e=this,t=Array.from(document.getElementsByClassName("tit")),a=this.state.clientHeight,n=document.documentElement.scrollTop;t.map((function(t){void 0!==t&&n>=t.offsetTop-a&&e.setState({title:t.innerHTML})}))}},{key:"downScroll",value:function(){var e=this;document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&p.a.get("/api/4/news/before/".concat(this.state.date)).then((function(t){e.state.bfData.push(t.data),e.setState({date:t.data.date,bfData:e.state.bfData})}))}}]),t}(l.a.Component),w=(a(213),a(109)),_=a(110),C=new(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).collected=[],a}return Object(d.a)(t,e),t}(a.n(_).a)),S=new w.Dispatcher;S.register((function(e){switch(e.actionType){case"addColl":C.collected.some((function(t){return t.id===e.actionParams.id}))||C.collected.push(e.actionParams),C.emit("addColl"),console.log(C.collected,"\u52a0\u5165\u6536\u85cf");break;case"delColl":var t=[];if(C.collected.map((function(e){t.push(Number(e.id))})),-1!==t.indexOf(e.actionParams.id)){var a=t.indexOf(e.actionParams.id);C.collected.splice(a,1)}C.emit("delColl"),console.log(C.collected,"\u53d6\u6d88\u6536\u85cf")}}));var x={state:C,dispatcher:S},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],body:"",css:"",imgU:"",title:"",width:"",height:"",show:"none",num:0,collected:x.state.collect,collect:[],flag:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e){var t=this.state.flag?l.a.createElement("span",{className:"iconfont icon-shoucang",style:{color:"yellow"},onClick:this.coll.bind(this)}):l.a.createElement("span",{className:"iconfont icon-shoucang",onClick:this.coll.bind(this)});return l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"heads"},l.a.createElement("div",{className:"left_i",onClick:this.back.bind(this)},l.a.createElement("span",{className:"iconfont icon-fanhui"})),l.a.createElement("div",{className:"right_i"},l.a.createElement("span",{className:"iconfont icon-fenxiang",onClick:this.show.bind(this)}),t,l.a.createElement("span",{className:"iconfont icon-xiaoxi",onClick:this.goCom.bind(this,this.state.id)},l.a.createElement("i",null,this.state.num)),l.a.createElement("span",{className:"iconfont icon-dianzan"},l.a.createElement("i",null,"25")))),l.a.createElement("div",{className:"cont"},l.a.createElement("link",{rel:"stylesheet",href:this.state.css}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.body}})),l.a.createElement("div",{className:"share_box",onClick:this.None.bind(this),style:{display:this.state.show,position:"fixed",top:"0",width:"7.5rem",height:this.state.height,zIndex:"999999",background:"rgba(0,0,0,.5)"}},l.a.createElement("div",{className:"s_box"},l.a.createElement("h2",null,"\u5206\u4eab"),l.a.createElement("ul",{className:"icon_list clearfix"},l.a.createElement("li",null,l.a.createElement("span",{className:"iconfont icon-weibo",style:{color:"#F13F19"}},l.a.createElement("i",null,"\u65b0\u6d6a\u5fae\u535a"))),l.a.createElement("li",null,l.a.createElement("span",{className:"iconfont icon-weixin",style:{color:"#60C84F"}},l.a.createElement("i",null,"\u5fae\u4fe1"))),l.a.createElement("li",null,l.a.createElement("span",{className:"iconfont icon-fenxiangweixinpengyouquan",style:{color:"#71CF2A"}},l.a.createElement("i",null,"\u5fae\u4fe1\u670b\u53cb\u5708"))),l.a.createElement("li",null,l.a.createElement("em",{className:"xiang"},l.a.createElement("span",{className:"iconfont icon-yinxiangbiji",style:{fontSize:".8rem",color:"#fff"}})),l.a.createElement("i",{style:{display:"block"}},"\u5370\u8c61\u7b14\u8bb0")),l.a.createElement("li",null,l.a.createElement("em",{className:"youdao"},l.a.createElement("span",{className:"iconfont icon-youdaoyunbiji1",style:{fontSize:".6rem",color:"#fff",lineHeight:"1.1rem"}})),l.a.createElement("i",{style:{display:"block"}},"\u6709\u9053\u4e91\u7b14\u8bb0")),l.a.createElement("li",null,l.a.createElement("span",{className:"iconfont icon-QQ",style:{color:"#2369C8"}},l.a.createElement("i",null,"QQ"))),l.a.createElement("li",null,l.a.createElement("span",{className:"iconfont icon-gengduo1",style:{color:"#7F7F7F"}},l.a.createElement("i",null,"\u66f4\u591a\u5e73\u53f0")))))))}},{key:"back",value:function(){this.props.history.go(-1)}},{key:"show",value:function(){this.setState({show:"block"}),document.body.style.overflow="hidden"}},{key:"None",value:function(e){console.log(e.target),"share_box"===e.target.className&&this.setState({show:"none"}),document.body.style.overflow=""}},{key:"goCom",value:function(e){this.props.history.push({pathname:"/comment",state:{id:e}})}},{key:"coll",value:function(){var e=this.state.flag,t={id:this.state.data.id,title:this.state.data.title,src:this.state.imgU};e?(this.setState({flag:!1}),x.dispatcher.dispatch({actionType:"delColl",actionParams:t})):(this.setState({flag:!0}),x.dispatcher.dispatch({actionType:"addColl",actionParams:t}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),p.a.get("/api/4/news/".concat(this.props.location.state.id)).then((function(t){e.setState({id:e.props.location.state.id,data:t.data,body:t.data.body,css:t.data.css,imgU:t.data.image,title:t.data.title});var a=document.getElementsByClassName("img-place-holder"),n=document.createElement("img");n.setAttribute("src",e.state.imgU),void 0!==a[0]&&a[0].appendChild(n);var l=document.createElement("p");l.innerHTML=e.state.title,void 0!==a[0]&&a[0].appendChild(l),p.a.get("/api/4/story/".concat(e.state.id,"/short-comments")).then((function(t){e.setState({num:e.state.num+=t.data.comments.length})})),p.a.get("/api/4/story/".concat(e.state.id,"/long-comments")).then((function(t){e.setState({num:e.state.num+=t.data.comments.length})}))})),x.state.on("coll",(function(){e.setState({collect:x.state.collected})}));var t=[];x.state.collected.map((function(e){console.log(e.id,"\u6570\u636e\u4e2did"),t.push(Number(e.id))})),-1===t.indexOf(this.props.location.state.id)?this.setState({flag:!1}):this.setState({flag:!0})}}]),t}(l.a.Component),j=(a(215),a(111)),D=a.n(j),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,sum:0,Snum:0,Lnum:0,shortData:[],longData:[],toggle:"none",flag:!1,tag:"none"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e){var t=this.state.flag?l.a.createElement("span",{className:"iconfont icon-xia-up"}):l.a.createElement("span",{className:"iconfont icon-xia-down"});return l.a.createElement("div",{className:"comment"},l.a.createElement("div",{className:"headc"},l.a.createElement("div",{className:"left_icon"},l.a.createElement("span",{className:"iconfont icon-fanhui",onClick:this.back.bind(this)}),l.a.createElement("p",null,this.state.sum," \u6761\u70b9\u8bc4")),l.a.createElement("div",{className:"r_icon"},l.a.createElement("span",{className:"iconfont icon-xiewrite18"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"top_long"},l.a.createElement("p",null,this.state.Lnum," \u6761\u957f\u8bc4")),l.a.createElement("div",{className:"null",style:{display:this.state.tag,height:"10.2rem"}},l.a.createElement("div",{className:"null_box"},l.a.createElement("img",{src:D.a,alt:""}),l.a.createElement("h2",null,"\u6df1\u5ea6\u957f\u8bc4\u865a\u4f4d\u4ee5\u5f85"))),l.a.createElement("ul",{className:"com_list"},this.state.longData.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("span",{className:"left_tu"},l.a.createElement("img",{src:e.avatar,alt:""})),l.a.createElement("div",{className:"right_box"},l.a.createElement("div",{className:"r_title"},l.a.createElement("h2",null,e.author),l.a.createElement("span",{className:"iconfont icon-dianzan",style:{color:"#B9B9B9",fontSize:".35rem"}},l.a.createElement("i",null,e.likes))),l.a.createElement("p",{className:"com_text"},e.content),l.a.createElement("p",{className:"com_time"},b()(e.time).format("MM-DD HH:mm"))))}))),l.a.createElement("div",{className:"top_short",onClick:this.Stog.bind(this)},l.a.createElement("p",null,this.state.Snum," \u6761\u77ed\u8bc4"),l.a.createElement("em",{className:"em"},t)),l.a.createElement("ul",{className:"com_list",style:{display:this.state.toggle}},this.state.shortData.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("span",{className:"left_tu"},l.a.createElement("img",{src:e.avatar,alt:""})),l.a.createElement("div",{className:"right_box"},l.a.createElement("div",{className:"r_title"},l.a.createElement("h2",null,e.author),l.a.createElement("span",{className:"iconfont icon-dianzan",style:{color:"#B9B9B9",fontSize:".35rem"}},l.a.createElement("i",null,e.likes))),l.a.createElement("p",{className:"com_text"},e.content),l.a.createElement("p",{className:"com_time"},b()(e.time).format("MM-DD HH:mm"))))})))))}},{key:"back",value:function(){this.props.history.go(-1)}},{key:"Stog",value:function(){var e=this.state.flag;if(e&&this.setState({toggle:"none",flag:!1}),!e){this.setState({toggle:"block",flag:!0}),console.log(document.getElementsByClassName("top_short")[0].offsetTop);var t=document.getElementsByClassName("top_short")[0].offsetTop,a=document.getElementsByClassName("headc")[0].clientHeight;setTimeout((function(){document.documentElement.scrollTop=t-a}),0)}}},{key:"componentWillMount",value:function(){this.setState({id:this.props.location.state.id})}},{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/4/story/".concat(this.state.id,"/long-comments")).then((function(t){e.setState({Lnum:t.data.comments.length,longData:t.data.comments,sum:e.state.sum+=t.data.comments.length}),0===t.data.comments.length&&e.setState({tag:"block"})})),p.a.get("/api/4/story/".concat(this.state.id,"/short-comments")).then((function(t){e.setState({Snum:t.data.comments.length,shortData:t.data.comments,sum:e.state.sum+=t.data.comments.length}),0===t.data.comments.length&&e.setState({Stag:"block"})}))}}]),t}(l.a.Component),B=(a(216),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={num:0,data:[],open:!1},a.onOpenChange=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t),a.setState({open:!a.state.open})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement(f.c,null,l.a.createElement(y,{prop:this.props}));return l.a.createElement("div",{className:"collect"},l.a.createElement(f.b,{className:"my-drawer",style:{width:0},enableDragHandle:!0,contentStyle:{},sidebar:t,open:this.state.open,onOpenChange:this.onOpenChange,sidebarStyle:{position:"fixed",zIndex:9999},overlayStyle:{position:"fixed"}},"Click upper-left corner"),l.a.createElement("div",{className:"heado"},l.a.createElement("div",{className:"left_ico"},l.a.createElement("span",{className:"iconfont icon-ego-menu",onClick:this.onOpenChange}),l.a.createElement("p",null,this.state.num," \u6761\u6536\u85cf"))),l.a.createElement("div",{className:"news_box"},l.a.createElement("div",{className:"news_cont"},l.a.createElement("ul",{className:"news_list"},this.state.data.map((function(t,a){return l.a.createElement("li",{key:a,onClick:e.go.bind(e,t.id)},l.a.createElement("a",{className:"news_info"},l.a.createElement("p",null,t.title),l.a.createElement("div",{className:"img_box"},l.a.createElement("img",{src:t.src,alt:""}))))}))))))}},{key:"menu",value:function(){var e=document.getElementsByClassName("menu_box")[0];e.style.display="block"}},{key:"go",value:function(e){this.props.history.push({pathname:"/details",state:{id:e}})}},{key:"componentDidMount",value:function(){this.setState({data:x.state.collected,num:x.state.collected.length}),console.log(x.state.collected,"flux \u6570\u636e")}}]),t}(l.a.Component)),T=function(){return l.a.createElement("div",null,l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/home",component:k}),l.a.createElement(u.b,{path:"/collect",component:B}),l.a.createElement(u.b,{path:"/details",component:O}),l.a.createElement(u.b,{path:"/comment",component:H}),l.a.createElement(u.a,{to:"/home"})))},M=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(219),a(220);var z=a(73);s.a.render(l.a.createElement(z.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[114,1,2]]]);
//# sourceMappingURL=main.f0e9902b.chunk.js.map