<template>
  <div class="page">
    <div class='projuct-title'>
      <img  class="img" src='../assets/two_title.png'/>
    </div>
    <div class='block'>
      <div @click="daan(7)" class='line line_bottom'>
        <div class="img_fu">
          <img class="img" src='../assets/a1.png'/>
        </div>
        <div class="text ">告诉该下属在会议结束前先别提出无关问题。</div>
      </div>
      <div @click="daan(4)" class='line line_bottom'>
        <div class="img_fu">
          <img class="img" src='../assets/b1.png'/>
        </div>
        <div class="text">要求所有下属先别提出问题，直到你把整体讲完。</div>
      </div>
      <div @click="daan(1)" class='line line_bottom'>
        <div class="img_fu">
          <img class="img" src='../assets/c1.png'/>
        </div>
        <div class="text">简要回答，以当下议题为主</div>
      </div>
    </div>
    <router-link to="/One">
      <div class="fanhui"></div>
    </router-link>
  </div>
</template>

<script>
import '../css/san.css'
import Config from '../config'
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
      this.$router.push({name:'Three'})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 1)
      {
        this.error();
      }
      data[1] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/two_bg.png) no-repeat;
  background-size: cover;
  /* background-size: 100% 100%; */
}
.block .line{
  height: 1.7rem;
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
