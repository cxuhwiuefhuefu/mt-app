import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共的样式文件
import '@/assets/css/main.css'
import store from './store'
// import axios from './axios';

// 使用element-ui
Vue.use(ElementUI) 

Vue.config.productionTip = false
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    console.log('insert')
  },
  update () {
    console.log('update')
  }
})
/* eslint-disable no-new */
// Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
