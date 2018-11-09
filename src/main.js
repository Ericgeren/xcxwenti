// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 网络请求
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 图片缩放
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// 音乐
import Yinyue from './common/yinyue'
Vue.use(Yinyue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
