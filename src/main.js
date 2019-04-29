//路由入口js
/*使用之前先关联*/
import Vue from 'vue'//关联vue模块
import App from './App.vue'//关联./App.vue文件
import router from './router'//关联router 这个router是一个工具啦,用处就是管理路由

//新建一个vue模块
new Vue({
  //这里嘛就是页面上那个id叫app的,管理绑定那个app下面的东西
  el:'#app',
  //render大概使用来生成标签或者组件的,刚刚查了下有个template也可以,不过template很死板,要调用Id很多地方要用到,这里嘛就暂时不用那么麻烦了
  render: h=> h(App),
  router
})

