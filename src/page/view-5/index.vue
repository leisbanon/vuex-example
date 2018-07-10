<template>
    <main>
        <p class="title-tip margin-t-0">使用进阶--getter</p>
        <div class="x-font-container">Vuex Store Getter 对象</div>
        <pre>
            我们可以通过在Store 实例中定义getter 对象来返回给我们常用的属性，getter 类似于计算属性。
            Getter 接收接收二两参数:
            1、state：作为访问Store state
            2、getter：作为访问Store getter
            <code>
                const store = new Vuex.Store({
                    state() {
                    },
                    getter:{
                        userName(state,getter) {
                            retrun '小明';
                        }
                    }
                })
            </code>
        </pre>
        <p class="x-btn" @click="btn_1">通过this.$store.getters.userName 获取该属性的值</p>
    </main>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    created() {
        let userName = this.$store.getters.userName;
        console.log(userName);
    },
    methods:{
        btn_1() {
            let name = this.$store.getters.userName;
            alert(name);
        }
    }
}
</script>

