<template>
  <div id="app">
    <!-- 路由匹配到的组件将会渲染到该标签。 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  html,body{
    margin: 0;
    height: 100%;
    width: 100%;
    /* user-select: none; */
  }


/* 路由切换动画过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
