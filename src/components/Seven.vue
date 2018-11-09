<template>
  <div class="page">
    <!-- <div class='projuct-title'>
      <img  class="img" src='../assets/seven_title.png'/>
    </div> -->
    <div class='block'>
      <div class='line line_bottom' @click="daan(6)">
        <div class="img_fu"><div class="img_1"/></div>
        <div class="text">大步地快走</div>
      </div>
      <div class='line line_bottom' @click="daan(4)">
        <div class="img_fu"><div class="img_2"/></div>
        <div class="text">小步地快走</div>
      </div>
      <div class='line line_bottom' @click="daan(7)">
        <div class="img_fu"><div class="img_3"/></div>
        <div class="text">不快，仰着头面对着世界</div>
      </div>
      <div class='line line_bottom' @click="daan(2)">
        <div class="img_fu"><div class="img_4"/></div>
        <div class="text">不快，低着头</div>
      </div>
      <div class='line line_bottom' @click="daan(1)">
        <div class="img_fu"><div class="img_5"/></div>
        <div class="text">很慢</div>
      </div>

    </div>
    <router-link to="/Six">
      <div class="fanhui"></div>
    </router-link>
  </div>
</template>

<script>
import Config from '../config'
import '../css/wu.css'
import Public from '../utils/public'
export default {
  name: 'Seven',
  data () {
    return {
      msg: ''
    }
  },
  created:function(){
    Public.WxFenXiang('');
  },
  methods:{
    page_img()
    {
      this.$router.push({name:'Eight'})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 5)
      {
        this.error();
      }
      data[5] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/seven_bg.png) no-repeat;
  background-size: cover;
}
.projuct-title{
  width: 5.8rem;
  height: 1.2rem;
  position: absolute;
  top: 1.4rem;
  left: 1.47rem;
}
.projuct-title .img{
  width: 100%;
}



</style>
