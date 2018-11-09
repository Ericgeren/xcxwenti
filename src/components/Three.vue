<template>
  <div class="page">
    <div class="tupan" @click="tupan()">
    </div>

    <div class="xuan_zhe_fu">
      <div class="xuan_zhe line_bottom">
        <div class="ti_mu" @click="daan(4)">
          <div class="zi_mu_a">
          </div>
          <div class="text">
              2处
          </div>
        </div>
        <div class="ti_mu" @click="daan(5)">
          <div class="zi_mu_b">
          </div>
          <div class="text">
            3处
          </div>
        </div>
      </div>
      <div class="xuan_zhe line_bottom">
        <div class="ti_mu" @click="daan(6)">
          <div class="zi_mu zi_mu_c">
          </div>
          <div class="text">
            4处
          </div>
        </div>
        <div class="ti_mu" @click="daan(7)">
          <div class="zi_mu zi_mu_d">
          </div>
          <div class="text">
            5处
          </div>
        </div>
      </div>
    </div>
    <router-link to="/Two">
      <div class="fanhui"></div>
    </router-link>
    <!-- 预览图片 -->
    <div class="mcover">
      <img ref="mcoverimg" src="../assets/three_da.jpeg" preview="0">
    </div>
  </div>
</template>
<script>
import Config from '../config'
import '../css/san.css'
import Public from '../utils/public'
export default {
  name: 'Three',
  data () {
    return {
      yul:false,
      msg: ''
    }
  },
  created:function(){
    Public.WxFenXiang('');
  },
  methods:{
    page_img()
    {
      this.$router.push({name:'Four'})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 2)
      {
        this.error();
      }
      data[2] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
    },
    tupan()
    {
      this.$refs.mcoverimg.click()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/three_bg.png) no-repeat;
  background-size: 100% 100%;
}
.tupan{
position: absolute;
width: 90%;
top: 23%;
left:5%;
height: 42%;
/* border: 1px solid red; */
}
.three_12{
  width: 2rem;
  height: 3.08rem;
  margin-top: 3.21rem;
}


.xuan_zhe_fu{
  position: absolute;
  bottom: 13%;
  margin-left:0.7rem;
  width: 6rem;
  height: 20%;
}
.xuan_zhe{
  margin-left: 0.5rem;
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
}
.ti_mu
{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

/* 预览大图 */
.mcover {
    display: none;
}

</style>
