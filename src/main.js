// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Qs from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http=Qs

//定义组件
const first={template:'<div><h1>这是第一个页面</h1></div>'};
import secondComponent from './components/secondcoponent.vue';

//创建一个路由器实例
const router=new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {
      path:"/first",
      component:first
    },
    {
      path:"/second",
      component:secondComponent
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  // template: '<App/>',
  // components: { App },
  router:router,
  render:h=>h(App)
}).$mount("#app")
