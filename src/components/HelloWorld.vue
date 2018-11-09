<template>
  <div class="page">
    <div class='btn'>
    <router-link to="/One"><img class="img" src='../assets/static/images/index-title.png'/></router-link>
    </div>
    <div class='click'></div>
  </div>
</template>

<script>
import Apis from '../apis'
import Config from '../config'
import Public from '../utils/public'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.fenXiang();
  },
  beforeCreate:function()
  {
    var domain = document.URL;
    var url = Config.URL+'#/';
    // url = 'http://localhost:8080/#/';
    if(domain != url)
    {
      window.location.href = url
    }
  },
  created: function () {
    localStorage.setItem(Config.SToRAGEKEYNAme,'');
  },
  methods:{
    fenXiang(){

      this.$http.get(Apis.jssdk)
      .then(function(res){
        console.log(res.data);
        // alert(JSON.stringify(res.data));
        localStorage.setItem(Config.SToRAGEKEYNAmeJSSDK, JSON.stringify(res.data));
        // 配置Wx分享
        Public.WxFenXiang('');
      })
      .catch(function(err){
          // alert(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background: url(../assets/index_bg.png) no-repeat;
  background-size: 100% 100%;
}
.btn .img{
  width: 60%;
  height: 12%;
  /* width: 3.9rem; */
  /* height: 1.3rem; */
  position: absolute;
  left: 20%;
  top: 35%;
  /* left: 2rem; */
  /* top: 5rem; */
}
</style>
