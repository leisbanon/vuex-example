// Import 命令构建，导入需要加载的模块。
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'

//全局样式
import "./assets/style/public.css"

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
