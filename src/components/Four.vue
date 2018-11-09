<template>
  <div class="page">
    <!-- <div class='projuct-title'>
      <img  class="img" src='../assets/four_title.png'/>
    </div> -->
    <div class='block'>
      <div class='line line_bottom' @click="daan(6)">
        <div class="img_fu"><div class="img_1"/></div>
        <div class="yanse">
            <div class=" color color1"></div>
            <!-- <div class=" color color2 color_m"></div> -->
        </div>
      </div>
      <div class='line line_bottom' @click="daan(7)">
        <div class="img_fu"><div class="img_2"/></div>
        <div class="yanse">
          <div class=" color color3"></div>
        </div>
      </div>
      <div class='line line_bottom' @click="daan(5)">
        <div class="img_fu"><div class="img_3"/></div>
        <div class="yanse">
          <div class=" color color4"></div>
          <!-- <div class=" color color5 color_m"></div> -->
        </div>
      </div>
      <div class='line line_bottom' @click="daan(4)">
        <div class="img_fu"><div class="img_4"/></div>
        <div class="yanse">
          <div class=" color color6"></div>
        </div>
      </div>
      <div class='line line_bottom' @click="daan(3)">
        <div class="img_fu"><div class="img_5"/></div>
        <div class="yanse">
          <div class=" color color7"></div>
          <!-- <div class=" color color8 color_m"></div> -->
        </div>
      </div>
      <div class='line line_bottom' @click="daan(2)">
        <div class="img_fu"><div class="img_6"/></div>
        <div class="yanse">
          <div class=" color color9"></div>
        </div>
      </div>
      <div class='line line_bottom' @click="daan(1)">
        <div class="img_fu"><div class="img_7"/></div>
        <div class="yanse">
          <div class=" color color10"></div>
          <!-- <div class=" color color11 color_m"></div> -->
        </div>
      </div>
    </div>
    <router-link to="/Three">
      <div class="fanhui"></div>
    </router-link>
  </div>
</template>

<script>
import Config from '../config'
import Public from '../utils/public'
export default {
  name: 'Four',
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
      this.$router.push({name:'Six'})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 3)
      {
        this.error();
      }
      data[3] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));
      this.page_img();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/four_bg.png) no-repeat;
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


.block{
  width: 5.1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4.24rem;
  left: 1.5rem;
}
.block .line{
  height: 0.8rem;
  display: flex;
  flex-direction: row;
}

.block .line .yanse{
  align-self:center;
  display: flex;
  flex-direction: row;
}
.img_fu{
  align-self:center;
  width: 0.7rem;
}
.img_1{
  align-self:center;
  background: url(../assets/a1.png) no-repeat;
  background-size: cover;
  width: 0.6rem;
  height: 0.48rem;
}
.img_2{
  align-self:center;
  background: url(../assets/b1.png) no-repeat;
  background-size: cover;
  width: 0.5rem;
  height: 0.5rem;
}
.img_3{
  align-self:center;
  background: url(../assets/c1.png) no-repeat;
  background-size: cover;
  width: 0.5rem;
  height: 0.48rem;
}
.img_4{
  align-self:center;
  background: url(../assets/d1.png) no-repeat;
  background-size: cover;
  width: 0.5rem;
  height: 0.5rem;
}
.img_5{
  align-self:center;
  background: url(../assets/e1.png) no-repeat;
  background-size: cover;
  width: 0.5rem;
  height: 0.54rem;
}
.img_6{
  align-self:center;
  background: url(../assets/f1.png) no-repeat;
  background-size: cover;
  width: 0.5rem;
  height: 0.65rem;
}
.img_7{
  align-self:center;
  background: url(../assets/g1.png) no-repeat;
  background-size: cover;
  width: 0.54rem;
  height: 0.5rem;
}
.color{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.color_m{
  margin-left: 20px;
}
.color1{
  background-color: #e60012;
}
.color2{
  background-color: #e60012;
}
.color3{
  background-color: #000;
}
.color4{
  background-color: #f7ee13;
}
.color5{
  background-color: #7fcef4;
}
.color6{
  background-color: #23ac38;
}
.color7{
  background-color: #122a88;
}
.color8{
  background-color: #601986;
}
.color9{
  border: 1px solid #ccc;
  background-color: #fff;
}
.color10{
  background-color: #6a3906;
}
.color11{
  background-color: #b9baba;
}
</style>
