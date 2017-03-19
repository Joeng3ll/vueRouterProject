# vuerooter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

my Record
-------------
1、安装vue-router依赖

  $ cnpm install vue-router --save

2、在main.js中引入vue-router并使用

  import VueRouter from 'vue-router'
  
  Vue.use(VueRouter)

3、创建一个路由实例，并进行参数配置
 
关于mode:默认使用hash模式 使用url 的hash来显示url，这种模式不美观，并切url改变时不会重载页面.而history模式则是使用history.pushState API来完成页面的跳转 而无需重新加载.但是这种模式需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404。所以，要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

关于routes:每个链接路径都有映射一个组件
    
    
    const router=new VueRouter({
    
    
        mode:"history",  
        
        
        base:__dirname,
        
        
        routes:[
        
          {path:"/first",component:first}    //first路径映射到名为first的组件上
    
          {path:"second",component:second}   
         
        ]
        
    })
    
 4、依然是在main.js中，创建一个vue实例
 
     new Vue({
     
        router:router
        
        render:h=>h(App)//App为import进来App.vue组件 使用render重绘 将路由绑定到App组件上
        
        
     }).$mount("#app")   //给#app绑定vue实例
    
    
 4、因为这里main.js入口文件中用的是App.vue模版
 
 所以在App.vue中配置
 
    <router-link to="/first">first</router-link>
    
    <router-link to="/second">second</router-link>  //这里的router-link会被渲染成a标签
  
    <router-view>  //链接到这里
  
 
  
 
 
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
