<template>
    <main>
        <p class="title-tip margin-t-0">使用进阶--mutation</p>
            <div class="x-font-container">一个重要的概念，mutation。 Vuex 主要功能是提供应用程序之间的状态管理，如何进行状态呢？
                <br/>&emsp;&emsp;知道vue是以数据驱动视图，而我们Vuex 就是需要定义具有语义化的数据来管理我们应用组件之间的状态，这个具有语义化的数据我们定义在Store state中，既State 称呼抽象可以理解为状态管理。当我们需要为一些组件做一个不同逻辑操作时，就需要用到state了，根据state 里面的数据做一些实际逻辑的处理~
            </div>
            <div class="x-font-container">上面收说到vuex 的状态管理，当我们要对状态进行更改的时候该如何做呢？ 这时就用到了Store mutation了~ 在Vuex中唯一能改变Store state 的就是显式的提交，调用commit()方法。Vuex 给她定了个名字叫做Mutation~</div>

            <p class="color-red">Vuex Store 状态也是响应式了，因此当我们Commit 提交对Store State 状态的值更改，组件之间的住状态也会随之改变，也正是体现了Vue 技术体系中的高效和便捷了~</p>

            <pre>
                定义一个mutation,在Store 中定义mutations对象。
                改变state 中的状态值：this.$store.commit('setAddress');
                Store mutations 中接收X个参数：
                <span class="x-color">1、接收 state 作为第一个参数，可访问stotre state 状态值</span>
                <span class="x-color">2、mutation 接收可以接收第二个附件参数data，commit('mutations funtionName',data).</span>
                <code>
                    const store = new vuex.Store({
                        state:{
                            status:'0',
                        },
                        mutations:{
                            setStatus(state,data) {
                                state.status = '1';
                            }
                        }
                    });
                </code>
            </pre>

            <p class="x-btn" @click="storeCommit()">修改Store State 状态值：this.$store.commmit('setStatus');</p>


            <div>
                <p class="title-tip">使用常量代替Mutation 事件类型</p>
                <div class="x-font-container">对于较大或者应用状态管理应用较多程序应用，使用常用代替事件类型，对于代码结构上会更加清晰，一目了然。相信谁都愿意去写代码结构清晰，代码质量精简的代码~</div>
                <pre>
                    使用：
                <code>
                    mutation.js:
                    const APP = '0';
                    export default {
                        APP,
                    }

                    
                    import mutation from '@/store/mutation'
                    const store = new vuex.Store({
                        state:{
                            status:'0',
                        },
                        mutations:{
                            //使用常量代替Mutation 事件类型
                            [mutation.APP](state,data) {
                                state.status = '1';
                            }
                        }
                    });
                </code>
                </pre>
                <p class="x-btn" @click="commit_()">全局常量触发mutations事件类型：this.$store.commmit(mutation.APP);</p>
            </div>
    </main>
</template>
<script>
import mutation from '@/store/mutation'
export default {
    methods:{
        storeCommit() {
            alert('修改前state status---:' + this.$store.state.status);
            console.log('修改前state status---:' + this.$store.state.status);

            this.$store.commit('setStatus');

            console.log('修改后state status---:' + this.$store.state.status);
            alert('修改后state status---:' + this.$store.state.status);
        },
        commit_() {
            alert('修改前state status---:' + this.$store.state.status);
            console.log('修改前state status---:' + this.$store.state.status);

            this.$store.commit('app');

            console.log('修改后state status---:' + this.$store.state.status);
            alert('修改后state status---:' + this.$store.state.status);
        }
    }
}
</script>

<style scoped>
    .x-color{
        color: #409eff;
    }
    .color-red{
        color: red;
    }
</style>

