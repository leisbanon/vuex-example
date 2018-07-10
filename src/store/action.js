let action = {
    async actionA({commit,state,getters}) {
        //模拟Promise 对象异步接口的请求
        let promises = new Promise((resole,reject) => {
            setTimeout(() => {
                resole();
            }, 1000);
        });

        commit('setStatus',await promises);
    },
    //在ES6 中使用变量的参数解构简化代码
    async actionB({commit,state,getters,dispatch}) {
        console.log('state status--:' + state.status);

        await dispatch('actionA').then(v => {
            console.log('state status--:' + state.status);
        });
    }
}

export default action;