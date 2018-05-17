import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Reg from '@/components/reg'
import Footer from '@/components/footer'
import Swiper from '@/components/swiper'
import Classfiy from '@/components/classfiy'
import Cart from '@/components/cart'
import User from '@/components/user'
import Ajax from '@/components/ajax'
import Detail from '@/components/detail'
import shoppcar from '@/components/shoppcar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/reg',
      name: 'reg',
      component: Reg
    },{
      path: '/footer',
      name: 'footer',
      component: Footer
    },{
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },{
      path: '/classfiy',
      name: 'classfiy',
      component: Classfiy
    },{
      path: '/cart',
      name: 'cart',
      component: Cart
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },{
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/shoppcar',
      name: 'shoppcar',
      component: shoppcar
    }
  ]
})
