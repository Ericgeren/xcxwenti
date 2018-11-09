<template>
  <div class="page">
    <img class="page_img" @click="page_img" src="../assets/a_i.png" alt="" />

    <div class="button_img_1"/>
    <div class="button_img" @click="page_img" />

    <!-- <div v-if="tishi" class="mcover" @click="tishifun()">
      <div class="mcover_img"/>
    </div> -->
  </div>
</template>

<script>
import Config from '../config'
import Public from '../utils/public'
export default {
  name: 'Ai',
  data () {
    return {
      tishi:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created:function(){
    this.fenXiang();
  },
  methods:{
    page_img()
    {
      this.$router.push({name:'Jie'})
    },
    tiaozhuan()
    {
      this.tishi = true;
    },
    tishifun()
    {
      this.tishi = false;
    },
    fenXiang(){
    	var fxData = {
      	title: '测测你潜在的企业家画像', // 分享标题
      	desc: '企业服务云认为我有马云的潜质', // 分享描述
      	link: Config.URL+"#/ai", // 分享链接
      	imgUrl: Config.URL+'a_i_bg.jpg', // 分享图标
      	type: '', // 分享类型,music、video或link，不填默认为link
      	dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    	};
      Public.WxFenXiang(fxData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  /* background: url(../assets/jie_bg.png) no-repeat; */
  /* background-size: 100% 100%; */
  display: flex;
}
.page_img{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.click_button{
  width: 100%;
  height: 100%;
  position: absolute;
}

.button_img_1
{
  background: url(../assets/a_bao_cun.png) no-repeat;
  background-size: cover;
  z-index: 2;
  position: absolute;
  width: 2.9rem;
  display: inline;
  bottom: 2%;
  left: 0.7rem;
  height: 1.78rem;
}
.button_img{
  background: url(../assets/a_fen_xiang.png) no-repeat;
  background-size: cover;
  z-index: 2;
  position: absolute;
  width: 3.6rem;
  display: inline;
  bottom: 0.6%;
  left: 4rem;
  height: 1.98rem;
}
.mcover {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 4;
}
.mcover_img{
  background: url(../assets/tishi.png) no-repeat;
  background-size: cover;
  position: absolute;
  width: 6rem;
  height: 4rem;
  right: 0rem;
  top: 0rem;
}

</style>
