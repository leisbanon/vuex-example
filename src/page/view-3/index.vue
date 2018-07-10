<template>
    <main>
        <p class="title-tip margin-t-0">项目实例化使用Vuex</p>
        <div class="x-font-container">
            <div class="indexs">官方解释：首先知道,Vuex应用的核心功能是Store,Store是什么？</div>
            <div class="indexs">有时候思考代码，要有一点抽象的思维，在不知道一开始设计师是如何去构建Vuex时。我们可以理解成Store 是一个仓库，它包含着应用中我们大部分需要状态管理--即state. state 可以理解成是vuex的数据驱动器，需要知道的是：</div>
            <div class="indexs"><span class="color-red">1、</span>当组件从state 中读取状态的时候，如果state发生变化，则组件响应的状态也会发生改变。因此Vuex 也是响应式的。</div>
            <div class="indexs"><span class="color-red">2、</span>改变state 中的状态，需要通过commit() 方法触发改变state 的状态。</div>
        </div>
        
        <h4>使用Vuex</h4>
        <div>
            <div>前面说到，使用Vuex 必须显示的安装Vuex:</div>
            <pre>
                import vue from 'vue'
                import vuex from 'vuex'
                //安装vuex
                vue.use(vuex);   
            </pre>
        </div>

        <div>
            <div>定义Vuex Store仓库</div>
            <pre>
                <code>
                    const store = new vuex.Store({
                        state:{
                            count:0,
                        },
                        mutations:{
                            addCount(state) {
                                state.count ++;
                            }
                        }
                    });
                </code>
                获取count 值，通过：
                store.state.count

                改变count 状态值，通过commit显式提交：
                store.commmit('addCount');
            </pre>
        </div>
    </main>
</template>

<style scoped>
    .indexs{
        text-indent: 2em;
    }
    .color-red{
        color: red;
    }
</style>