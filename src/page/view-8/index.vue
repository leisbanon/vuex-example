<template>
    <main>
        <div>
            <p class="title-tip margin-t-0">使用进阶--module</p>
            <div class="x-font-container">Module => 从词义上理解就是模块块，在前端开发，模块化的概念已经在熟悉不过。初始化Vuex ，定义一个Store对象，使用单一的状态树，当应用对象涉及到大量的状态管理，应用变得越来越复杂的时候，store 对象会变得越来越臃肿，不易阅读以及维护。</div>
            <div class="x-font-container">实际模块化开发的理念在09 年已经提出，比如require.js,ecmascript-5。相比之前多页面的开发，到目前模块化、组件化、插件化的开发得到了质量上的提升。又随着H5 技术的成熟，前端开发早已经不是后端开发人员完全可以能够把拿的Code。其难度性也越之变大，同时随着技术的成熟，代码变得也更加合理、清晰、规范和易用。
                <strong>如下示例将介绍Store 对象分割成模块的使用:</strong>
                <pre>
                    <code>
                        <span class="x-color">//用户--Store</span>
                        const module_user = {
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
                        <span class="x-color">//管理员--admin</span>
                        const module_admin = {
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

                        const store = new vuex.Store({
                            <span class="x-color">//Store 引入</span>
                            modules:{
                                module_user,
                                module_admin
                            },
                        });

                    
                        <strong> 获取Module Store 对象：</strong>
                        <span class="x-color">-> module_user 对象</span>
                        this.$rotuer.store.state.module_user

                        <span class="x-color">-> module_admin 对象</span>
                        this.$rotuer.store.state.module_admin
                    </code>
                </pre>
                <p class="x-btn" @click="user">获取Store Module State : this.$store.state.module_user.user_name</p>
            </div>
        </div>

        <div>
            <p class="title-tip">Module 全局命名空间</p>
            <div class="x-font-container">需要注意的是，一旦Store 中注册了Modules,其Action、Mutation、Getter 同样是全局的命名空间，这样使得多个模块能够对同一Mutation、Action 响应：
                <hr/>
                <div>this.$store.getters.getUserName;</div>
                <div>this.$store.commit('commit_fun');</div>
                <div>this.$store.dispatch('dispatch_fun');</div>

                <p class="x-btn" @click="getters">this.$store.getters.getUserName</p>
            </div>
        </div>

        <div>
            <p class="title-tip">模块的动态注册</p>
            <div>&emsp;&emsp;在Store 注册之后，我们可以动态的往Store 添加其他状态管理的模块。-- store.registerModule 方法注册模块，实例:</div>
            <pre>
                <code>
                    //管理员--admin
                    const module_admin = {
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
                    <span class="x-color">// 外部注册Module</span>
                    store.registerModule('module_admin',module_admin);

                    <span class="x-color">// 卸载module</span>
                    store.unregisterModule('module_admin');
                </code>
            </pre>
        </div>
    </main>
</template>

<script>
export default {
    data() {
      return{
      }  
    },
    created() {
        let self = this;
        let user = self.$store.state.module_user.user_name;
        console.log(user);
    }, 
    methods:{
        user() {
            let self = this;
            let user = self.$store.state.module_user.user_name;
            alert(user);
        },
        getters() {
            let name = this.$store.getters.getUserName;
            alert(name);
        }
    }
}
</script>


<style scoped>
    .x-color{
        color: #67c23a;
    }
</style>
