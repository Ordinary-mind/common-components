import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        moveFlag: false,
        moveCoordinate: "",
    },
    mutations:{
        moveFlag(state,payload){
            state.moveFlag = payload;
        },
        moveCoordinate(state,payload){
            state.moveCoordinate = payload;
        }
    },
    getters:{
        moveFlag(state){
            return state.moveFlag;
        }
    }
})

export default store