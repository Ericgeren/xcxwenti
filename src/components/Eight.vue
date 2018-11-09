<template>
  <div class="page">
    <!-- <div class='projuct-title'>
      <img  class="img" src='../assets/eight_title.png'/>
    </div> -->
    <div class='block'>
      <div class='line line_bottom' @click="daan(4)">
        <div class="img_fu"><div class="img_1"/></div>
        <div class="text textpost">手臂交叠站着</div>
      </div>
      <div class='line line_bottom' @click="daan(2)">
        <div class="img_fu"><div class="img_2"/></div>
        <div class="text textpost">双手紧握着</div>
      </div>
      <div class='line line_bottom' @click="daan(5)">
        <div class="img_fu"><div class="img_3"/></div>
        <div class="text textpost">一只手或两手放在臀部</div>
      </div>
      <div class='line line_bottom' @click="daan(7)">
        <div class="img_fu"><div class="img_4"/></div>
        <div class="text textpost">碰着或推着与你说话的人</div>
      </div>
      <div class='line line_bottom' @click="daan(6)">
        <div class="img_fu"><div class="img_5"/></div>
        <div class="text textpost">玩着你的耳朵、摸着你的下巴或用手整理头发</div>
      </div>

    </div>
    <router-link to="/Seven">
      <div class="fanhui"></div>
    </router-link>
  </div>
</template>

<script>
import Config from '../config'
import '../css/wu.css'
import Public from '../utils/public'
export default {
  name: 'Eight',
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
      this.$router.push({name:'Nine'})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 6)
      {
        this.error();
      }
      data[6] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/eight_bg.png) no-repeat;
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
  height: 1.17rem;
}
.img_1{
  background: url(../assets/a.png) no-repeat;
  background-size: cover;
}
.img_2{
  background: url(../assets/b.png) no-repeat;
  background-size: cover;
}
.img_3{
  background: url(../assets/c.png) no-repeat;
  background-size: cover;
}
.img_4{
  background: url(../assets/d.png) no-repeat;
  background-size: cover;
}
.img_5{
  /* width: 0.5rem; */
  /* height: 0.5rem; */
  background: url(../assets/e.png) no-repeat;
  background-size: cover;
  /* background-size: 100% 100%; */
}
.textpost{
  position: absolute;
  margin-left: 15%;
}
</style>
