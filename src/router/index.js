// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import ProFile from '../pages/ProFile/ProFile.vue'
import Search from '../pages/Search/Search.vue'

// 声明使用插件
Vue.use(VueRouter)
export default  new VueRouter({
    //所有路由
    routes: [
        {
            path:'/msite',
            component: MSite
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/proFile',
            component: ProFile
        },
        {
            path: '/search',
            component: Search
        },{
            path:'/',
            redirect:'./msite'
        }
    ]  
})