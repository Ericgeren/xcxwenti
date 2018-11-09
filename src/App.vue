<template>
  <div id="app">
    <transition name="slide-fade">
      <div class="routerview">
        <router-view/>
        <!-- 音乐播放插件 -->
        <Yinyue ref="Yinyue"></Yinyue>
      </div>

    </transition>
  </div>
</template>

<script>
import './css/font.css'

export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
 height: 100%;
 margin: 0;
 padding: 0;
}
.routerview{
  height: 100%;
  margin: 0;
  padding: 0;
}
/* 页面动效 start*/
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(0px);
  opacity: 0;
}


/* 页面动效 end */

.page{
  height: 100%;
  overflow-y:hidden;
}
/* 选择题文字样式 */
.text{
  font-family: JOKERMAN;
  font-size: 17px;
  margin-left: 10px;
  color: #6f6e6e;
  font-weight: lighter;
  align-self:center;
}
.line_bottom{
  border-bottom: 1px dashed #ccc;

}
a{
  text-decoration: none;
}
/* 返回按钮样式 */
.fanhui{
  background: url(./assets/fanhui.png) no-repeat;
  background-size: cover;
  /* top: 13.2rem; */
  /* top:10.8rem; */
  /* left: 5.89rem; */
  right: 0.2rem;
  bottom: 0.1rem;
  position: absolute;
  width: 1.52rem;
  height: 0.53rem;
}

.zi_mu_a{
  width: 0.77rem;
  height: 0.66rem;
  align-self:center;
  background: url(./assets/a.png) no-repeat;
  background-size: cover;
}
.zi_mu_b{
  width: 0.63rem;
  height: 0.63rem;
  align-self:center;
  background: url(./assets/b.png) no-repeat;
  background-size: cover;
}
.zi_mu_c{
  width: 0.71rem;
  height: 0.65rem;
  align-self:center;
  background: url(./assets/c.png) no-repeat;
  background-size: cover;
}
.zi_mu_d{
  width: 0.66rem;
  height: 0.66rem;
  align-self:center;
  background: url(./assets/d.png) no-repeat;
  background-size: cover;
}
/* img, object { max-width: 100%;} */

</style>
