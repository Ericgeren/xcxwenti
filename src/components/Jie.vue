<template>
  <div class="page">
    <img class="page_img" src="../assets/jie_bg.png" alt="" />
    <!-- <div class="button_img" @click="tiaozhuan" /> -->
    <div class="fanhui" @click="fanhui()"></div>
  </div>
</template>

<script>
import Config from '../config'
import Public from '../utils/public'
export default {
  name: 'Jie',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created:function(){
    Public.WxFenXiang('');
  },
  methods:{
    fanhui()
    {
      var name = localStorage.getItem(Config.SToRAGEKEYNAme);
      if(name == null || name == '')
      {
        this.$router.push({name:'HelloWorld'})
      }
      else
      {
        this.$router.push({name:name})
      }
    },
    tiaozhuan()
    {
      window.location.href = 'https://mp.weixin.qq.com/s/aGwP4T3Gli6yRM4UC-AQJQ'
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
.button_img{
  background: url(../assets/jie_button.png) no-repeat;
  background-size: cover;
  z-index: 2;
  align-self:center;
  width: 4rem;
  display: inline;
  /* position: relative; */
  margin-top: 3.3rem;
  margin-left: 2rem;
  height: 0.55rem;
}



.fanhui{
  background: url(../assets/jie_s.png) no-repeat;
  background-size: cover;
  right: 0.8rem;
  bottom: 2.5rem;
  z-index: 3;
}

</style>
