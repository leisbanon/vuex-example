//用户--Store
let module_user = {
    state:{
        user_name:'张三',
    },
    getters:{
        getUserName(state,getter) {
            return state.user_name;
        }
    },
    mutations:{
    },
    actions:{
    },
};

//管理员--admin
let module_admin = {
    state:{
        manage_name:'李四',
    },
    getters:{
        getManageName(state,getter) {
            return state.manage_name;
        }
    },
    mutations:{
    },
    actions:{
    },
};

export {
    module_user,
    module_admin
}
