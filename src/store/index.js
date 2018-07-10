import vue from 'vue'
import vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import  {module_user,module_admin} from './module'

vue.use(vuex);

//Getter
let getters = {
    userName(state,getter){
        return '小明'
    }
}

//State
let state = {
    status:'0',
}

//实例化Vuex Store 对象。
const store = new vuex.Store({
    modules:{
        module_user,
        module_admin
    },
    state,
    getters,
    mutations,
    actions
});
export default store;

