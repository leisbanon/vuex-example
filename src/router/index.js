//Import Require Vue-Router File JS
import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/router-install'

//安装vue-router
Vue.use(Router);

//实例化vue-router实例
const vueRouter = new Router({
  // base:'/vuex-example/',
  // mode:'hash',
  routes
});

export default vueRouter;