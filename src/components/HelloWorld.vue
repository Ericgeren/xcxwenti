<template>
  <div class="page">
    <div class='btn'>
    <router-link to="/One"><img class="img" src='../assets/static/images/index-title.png'/></router-link>
    </div>
    <div class='click'></div>
  </div>
</template>

<script>
import Public from '../utils/public'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.fenXiang();
  },
  methods:{
    fenXiang(){
        console.log('首页配置')
        Public.WxFenXiang('');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/index_bg.png) no-repeat;
  background-size: 100% 100%;
}
.btn .img{
  width: 60%;
  height: 12%;
  /* width: 3.9rem; */
  /* height: 1.3rem; */
  position: absolute;
  left: 20%;
  top: 35%;
  /* left: 2rem; */
  /* top: 5rem; */
}
</style>
