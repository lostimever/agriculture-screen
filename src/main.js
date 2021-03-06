import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/echarts'
import 'amfe-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
