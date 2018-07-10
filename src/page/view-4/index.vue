<template>
    <main>
        <div>
            <p class="title-tip magin-t-0">多组件中使用Vuex State</p>
            <pre>
                <div>&emsp;&emsp;状态管理是面向整个程序应用，如果多个组件应用到一个状态（State）时,当然最好的做法是多个组价依赖于一个状态，当这个状态值发生改变时，多个组件的状态同时也发生改变。</div>
                <div>&emsp;&emsp;只需要在Vue 实例化注册Store ，从而就可以做到从父组件注入到每一个子组件之中.</div>
                <code>
                    import router from './router'
                    import store from './store'

                    new Vue({
                        el: '#app',
                        router,
                        //同时注入store
                        store,
                        ...
                    })
                </code>
            </pre>

            <strong>&emsp;&emsp;通过vue 实例化注册Store,全局我们就能够通过 this.$store 获取Vuex Store State</strong>
            <pre>
                <code>
                    export default {
                        created() {
                            let mesage = this.$store.state.message;
                            let address = this.$store.state.address;
                        }
                    }
                </code>
            </pre>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    created() {
        let mesage = this.$store.state.message;
        let address = this.$store.state.address;
        console.log("Vuex Store State Data------" + mesage + '\t' + address);
    },
}
</script>
