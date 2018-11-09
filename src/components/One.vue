<template>
  <div class="page">
    <!--pages/one/index.wxml-->
    <!-- <div class='projuct-title'>
      <img class="img" src='../assets/one_title.png'/>
    </div> -->
    <div class='block'>
      <div class='line line_bottom'>
        <div class="img_fu">
          <img class="img" src='../assets/a.png'/>
        </div>
        <div class="text" @click="daan(7)">调研分析，主动想出解决方案</div>
      </div>
      <div class='line line_bottom'>
        <div class="img_fu">
          <img class="img" src='../assets/b.png'/>
        </div>
        <div class="text" @click="daan(4)">虽然有想法，但不会主动提出</div>
      </div>
      <div class='line line_bottom'>
        <div class="img_fu">
          <img class="img" src='../assets/c.png'/>
        </div>
        <div class="text" @click="daan(2)">顺其自然，相信团队总能顺利渡过瓶颈</div>
      </div>
      <!-- <div class='line' data-id='5' catchtap='calc'>
        <div>
          <img src='http://p79zs8rwj.bkt.clouddn.com/d.png'/>
        </div>
        <div>
          <text>前往市企业服务云提提诉求</text>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import '../css/san.css'
import Config from '../config'
import Public from '../utils/public'
export default {
  name: 'One',
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
      this.$router.push({name:'Two'})
    },
    daan(fen)
    {
      // localStorage.getItem(key);
      // localStorage.setItem(key,value);
      var data = [];
      data[0] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
      // var storgedata = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url('../assets/one_bg.png') no-repeat;
  background-size: cover;
}
.block .line{
  height: 1.7rem;
}

.projuct-title{
  width: 5.8rem;
  height: 1.2rem;
  position: absolute;
  top: 1.9rem;
  left: 1.47rem;
}

.projuct-title .img{
  width: 100%;
}

.line .img_div{
  width: 0.66rem;
  height: 0.66rem;
}
</style>
