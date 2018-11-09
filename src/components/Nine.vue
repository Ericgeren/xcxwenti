<template>
  <div class="page">
    <!-- <div class='projuct-title'>
      <img  class="img" src='../assets/nine_title.png'/>
    </div> -->
    <div class='block'>
      <div class='line line_bottom' @click="daan(7)">
        <div class="img_fu">
          <img class="img" src='../assets/a1.png'/>
        </div>
        <div class="text ">踊跃发言，成为全场焦点</div>
      </div>
      <div class='line line_bottom' @click="daan(4)">
        <div class="img_fu">
          <img class="img" src='../assets/b1.png'/>
        </div>
        <div class="text">安静地入场，找认识的人交流</div>
      </div>
      <div class='line line_bottom' @click="daan(2)">
        <div class="img_fu">
          <img class="img" src='../assets/c1.png'/>
        </div>
        <div class="text">安静地入场，尽量不被人注意</div>
      </div>
    </div>
    <router-link to="/Eight">
      <div class="fanhui"></div>
    </router-link>
  </div>
</template>

<script>
import Config from '../config'
import '../css/san.css'
import Public from '../utils/public'
export default {
  name: 'Nine',
  data () {
    return {
      msg: ''
    }
  },
  created:function(){
    Public.WxFenXiang('');
  },
  methods:{
    page_img(name)
    {
      localStorage.setItem(Config.SToRAGEKEYNAme,name);
      this.$router.push({name:name})
    },
    error()
    {
      this.$router.push({name:'One'})
    },
    daan(fen)
    {
      var data = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      // 验证是否有题目没做
      if(data == null || data.length < 7)
      {
        this.error();
      }
      data[7] = fen;
      localStorage.setItem(Config.SToRAGEKEY,JSON.stringify(data));

      var datas = JSON.parse(localStorage.getItem(Config.SToRAGEKEY));
      if(datas == null || data.length < 8)
      {
        this.error();
      }
      // 0 支配Ad 1 谨慎Ac 2 稳健As 3 影响Ai
      var num = [];
      num[0] = datas[0]+datas[1];
      num[1] = datas[2]+datas[3];
      num[2] = datas[4]+datas[5];
      num[3] = datas[6]+datas[7];
      var leix = 0;
      for(var i = 0 ; i < 3 ; i++)
      {
        var c = i+1;
        if(num[i] > num[c])
        {
        }
        else
        {
          leix = c;
        }
      }
      console.log(num);
      console.log(leix);
      var names = [];
      names[0] = 'Ad';
      names[1] = 'Ac';
      names[2] = 'As';
      names[3] = 'Ai';
      this.page_img(names[leix]);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/nine_bg.png) no-repeat;
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
