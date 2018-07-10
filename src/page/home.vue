<template>
    <main>
        <p class="x-btn" @click="push('view-1')">1、Vuex 的开始以及安装</p>

        <p class="x-btn" @click="push('view-2')">2、Vuex 简明介绍,理解Vuex</p>

        <p class="x-btn" @click="push('view-3')">3、项目初始实例化Vuex--使用vuex</p>

        <p class="x-btn" @click="push('view-4')">4、使用进阶--state</p>

        <p class="x-btn" @click="push('view-5')">5、使用进阶--getter</p>

        <p class="x-btn" @click="push('view-6')">6、使用进阶--mutation</p>

        <p class="x-btn" @click="push('view-7')">7、使用进阶--action</p>

        <p class="x-btn" @click="push('view-8')">8、使用进阶--module</p>

        <p class="x-btn" @click="push('view-9')">9、Vuex--Store 项目结构</p>
    </main>
</template>
<script>
export default {
    data() {
        return{
        }
    },
    created() {
    },
    methods:{
        push(path) {
            this.$router.push(path);
        }
    }
}
</script>

