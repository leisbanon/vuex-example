<template>
    <main>
        <p class="title-tip margin-t-0">Vuex 简明介绍,理解Vuex</p>
        <div class="x-font-container">如果你在项目中使用了Vue框架，自然可能会用到vue-router 以及 Vuex。本实例应用主要是Vuex 实例参考教程，当然vue-router 本章实例也应用到了，既然你在学习或者了解Vuex,相信对vue-router 也“轻车熟路” 了，对vue-router 也有实例的应用的教程：
            <a href="https://github.com/LeiLeiES/vue-router-example" target="_black">https://github.com/LeiLeiES/vue-router-example</a>
        </div>

        <div class="x-font-container">
            在使用Vue时，对Vuex 概念是什么都不知道..只知道vuex 是为应用程序提供状态管理的模式........, 参考网上材料的教程一定程度上都是非常杂乱且没有系统性的学习。如果你是在学习Vuex，在参考本实例教程时还是推荐去看Vuex 官方的教程和说明，非常的详细，系统性的学习就在哪里了。
            <br/>&emsp;&emsp;当然如果你只想入门学习Vuex的使用，本实例也“五味俱全”了，提供示例应用的会更快的上手使用~
        </div>

        <p>Vuex 是提供应用程序状态管理，什么是状态管理？ vuex 提供的管理机制，首先要知道也是必须明白 状态管理的三个关键模块：</p>
        <!-- state -->
        <div>
            <p><span class="color-red">1、state</span>：驱动应用的数据源--当我们初始定义vuex时，定义在其vuex内部的实例数据，不同于vue 里声明data 数据，vuex 数据源我们在任何组件都可以进行获取:</p>
            <pre>
                如下代码是一个示例：在vuex 实例化完成，我们可以在任何组件内访问 "address" 数据，通过：this.$store.state.address
                <code>
                    const store = new vuex.Store({
                        state:{
                            address:'上海松江',
                        }
                    });
                </code>
            </pre>
        </div>
        <!-- view -->
        <div>
            <p><span class="color-red">2、view</span>，view 就很好理解了，知道vue 就是以数据驱动视图，data -- view的过程。这点和vue类似，vuex是state -- view。</p>
            <pre>
                <code>
                    &lt;template&gt;
                        &lt;main&gt;
                            &lt;div v-text=&quot;$store.state.address&quot;&gt;&lt;div&gt;
                        &lt;/main&gt;
                    &lt;/template&gt;
                </code>
            </pre>
        </div>
        <!-- actions -->
        <div>
            <p><span class="color-red">3、actions</span></p>
            <pre></pre>
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
        this.$store.commit('addCount');
        let count = this.$store.state.count;
        console.log(count);
    },
    methods:{

    }
}
</script>
<style scoped>
    p{
        text-indent: 2em;
    }
    .color-red{
        color: red;
    }
</style>




