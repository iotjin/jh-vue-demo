import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseNavBar from "./components/BaseNavBar.vue";
import './config/vant/vant.js'


Vue.component('BaseNavBar', BaseNavBar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

