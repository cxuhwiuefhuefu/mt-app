import Vue from 'vue'
import Router from 'vue-router'

import defaultPage from '@/layout/default.vue'
// 登录和注册页面共同模板
import blankPage from '@/layout/blank.vue'

import goodsList from '@/page/goodsList.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import Register from '@/page/register.vue'
import Login from '@/page/login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index', // 重定向
      children: [{
        path: 's/:name', // ???
        name: 'goods',
        component: goodsList
      }, {
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }]
    }, {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: 'register',
        name: 'register',
        component: Register
      }, {
        path: 'login',
        name: 'login',
        component: Login
      }]
    }
  ]
})
