/*
路由器对象模块
*/
//这里就是关联各种文件
import Vue from 'vue'//关联vue插件
import VueRouter from 'vue-router'//关联VueRouter插件
import Msite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件VueRouter
Vue.use(VueRouter)

//我想这里应该就是vue-router的使用方法
export default new VueRouter({//新建一个VueRouter对象
  //所有路由
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },{
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },{
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },{
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },{
      path:'/login',
      component:Login
    },{//盲猜这里是选择首页
      path:'/',
      redirect:'/msite'
    }
  ]
})
