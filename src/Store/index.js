// 1. 从flux 引入
import {Dispatcher} from 'flux'
// 事件触发器
import EventEmitter from 'events'

class State extends EventEmitter {
    collected = [];

}

var state = new State();

// 实例化派发器
var dispatcher = new Dispatcher;

// 规范任务类型
dispatcher.register((action)=>{
    switch(action.actionType) {
        case 'addColl' :
            // console.log(222);
            // if()
            // state.collected = action.actionParams;

            let cflag = state.collected.some(val => {
                return val.id===action.actionParams.id
            });
            if(!cflag){
                state.collected.push(action.actionParams);
            }
            state.emit('addColl');
            console.log(state.collected,'加入收藏');
            break;
        case 'delColl' :
            let arr = [];
            state.collected.map(val => {
                arr.push(Number(val.id))
            });
            if(arr.indexOf(action.actionParams.id) !== -1){
                let ind = arr.indexOf(action.actionParams.id);
                state.collected.splice(ind,1)
            }
            state.emit('delColl');
            console.log(state.collected,'取消收藏');
            break;
    }
});


export default {
    state,
    dispatcher
}