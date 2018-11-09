<template>
  <div class="page">
    <!-- <div class='projuct-title'>
      <img  class="img" src='../assets/six_title.png'/>
    </div> -->
    <div class='block'>
      <div class='line line_bottom' @click="daan(1)">
        <div class="img_fu">
          <img class="img" src='../assets/a.png'/>
        </div>
        <div class="text ">离deadline还远 理理思路再说</div>
      </div>
      <div class='line line_bottom' @click="daan(3)">
        <div class="img_fu">
          <img class="img" src='../assets/b.png'/>
        </div>
        <div class="text">不管什么工作，先着手做起来</div>
      </div>
      <div class='line line_bottom' @click="daan(7)">
        <div class="img_fu">
          <img class="img" src='../assets/c.png'/>
        </div>
        <div class="text">建立明确的工作计划，按时间表执行</div>
      </div>
    </div>
    <router-link to="/Four">
      <div class="fanhui"></div>
    </router-link>
  </div>
</template>

<script>
import Config from '../config'
import '../css/san.css'
import Public from '../utils/public'
export default {
  name: 'Two',
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
      this.$router.push({name:'Seven'})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 4)
      {
        this.error();
      }
      data[4] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/six_bg.png) no-repeat;
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
.block .line{
  height: 1.7rem;
}
</style>
