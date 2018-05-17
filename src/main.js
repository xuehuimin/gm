// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/rem'
import './css/common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' 
import 'swiper/dist/css/swiper.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
