<template>
    <main>
        <div>
            <p class="title-tip margin-t-0">使用进阶--Action</p>
            <div class="x-font-container">Action 类似与Mutation。 但是需要注意的是，不同于有以下两点：
                <p class="color-red">1、Mutation 是同步操作,而Action是处理异步的操作</p>
                <p class="color-red">2、Mutation 是变更Store State状态，而Action 是用来显式的提交Mutation--commit()</p>
                <strong>不同于mutations，触发actions，使用this.$store.dispatch() 方法</strong>
            </div>
            <pre>
                <div>action 接收一个具有Store 对象相同的context 对象。因此我们可以通过context.commit() 显式的提交Mutation. 或者获取Store State、Getter：【context.state】对象，【context.getters】对象</div>
                <code>
                    const store = new vuex.Store({
                        state:{
                            status:'0',
                        },
                        getters:{
                            userName(state,getter){
                                return '小明'
                            }
                        },
                        mutations:{
                            setStatus(state,data) {
                                state.status = '1';
                            },
                        },
                        // Action 作用：显式的提交Mutation,异步逻辑的操作
                        actions:{
                            insertUser(context) {
                                let status = context.state.status;
                                let name = context.getters.userName;
                                context.commit('setStatus');
                            }
                        }
                    });
                </code>
            </pre>

        </div>


        <div>
            <p>Store Action 异步操作实例用应用</p>
            <div class="x-font-container">在程序应用中，避免不了异步的接口的调用处理。当组件之间的状态需要改变其形态时，需要做网络请求时来执行对状态更改，此时我们在Action 中执行异步请求，提交Mutation的处理。</div>
            <p>&emsp;&emsp;this.$store.dispatch() 返回的时Promise对象，因此我门就可以明确异步请求什么时候结束了以及是否抛出异常。如何你对Promise 还不熟悉，那么示例对于你来说就”黯然失色“，建议先去熟悉Promise 的概念以及使用。当然在某些情况，异步操作我们可以直接在Vue Methods 中处理，然后store.commit(); 更加好的方式在对于组件状态更改时，必须在Action 中做分发提交对状态的更改。</p>
            
             <strong class="x-btn" @click="actionDispatch">触发Action 使用this.$store.dispatch('actionB')</strong><br/>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    methods:{
        actionDispatch() {
            this.$store.dispatch('actionB');
        }
    }
}
</script>


<style scoped>
    .color-red{
        color: red;
    }
</style>

