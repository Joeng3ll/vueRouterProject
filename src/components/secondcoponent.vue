<template>
  <div id="secondcomponent">
      <h1>hello,it's second page</h1>
      <a>written by {{author}}</a>
    <!--<ul>-->
      <!--<li v-for="item in movieList">-->
        <!---->
      <!--</li>-->
    <!--</ul>-->
    <p>{{joke}}</p>
  </div>
</template>
<script>
  import Qs from 'axios'
  import Vue from 'vue'
  export default{
      data (){
          return{
              author:"yanglingli",
              joke:""
          }
      },
      mounted:function () {
          this.$nextTick(function () {
            this.getInfo()
          })
      },
      methods:{
          getInfo:function () {
              var _this=this;
              Qs.get("https://bird.ioliu.cn/joke").then(function (res) {
              _this.joke=res.data.data[0].content
              console.log(res.data.data[0].content)
            })
          }
      }
  }
</script>
<style>

</style>
