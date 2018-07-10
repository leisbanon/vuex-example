//路由配置项
const routerComponents = (path) => () => import (`@/page/${path}`);

let addRouter = [
    {
        //404 处理
        path:'*',
        component:routerComponents('404.vue')
    }
]

//配置所有路由对象
const components = [
    ...addRouter,
    {
        path:'/',  
        component:routerComponents('home.vue')
    },
    {
        //Vuex 的开始以及安装
        path:'/view-1',
        component:routerComponents('view-1/index.vue')
    },
    {
        //Vuex 简明介绍和的初步使用
        path:'/view-2',
        component:routerComponents('view-2/index.vue')
    },
    {
        //项目初始实例化Vuex
        path:'/view-3',
        component:routerComponents('view-3/index.vue')
    },
    {
        //使用进阶State
        path:'/view-4',
        component:routerComponents('view-4/index.vue')
    },
    {
        //进阶使用Getter
        path:'/view-5',
        component:routerComponents('view-5/index.vue')
    },
    {
        //进阶使用Mutation
        path:'/view-6',
        component:routerComponents('view-6/index.vue')
    },
    {
        //进阶使用Action
        path:'/view-7',
        component:routerComponents('view-7/index.vue')
    },
    {
        //进阶使用module
        path:'/view-8',
        component:routerComponents('view-8/index.vue')
    },
    {
        //Vuex--Store 项目结构
        path:'/view-9',
        component:routerComponents('view-9/index.vue')
    }
]

export default components;