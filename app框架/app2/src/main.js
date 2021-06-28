import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseNavBar from "./components/BaseNavBar.vue";
import BaseTopTabs from "./components/BaseTopTabs.vue";
import './config/vant/vant.js'
import './config/css/global.css'
import JhRefreshView from "./components/JhRefreshView/index.vue";
import BaseRefreshView from "./components/BaseRefreshView.vue";


Vue.component('BaseNavBar', BaseNavBar)
Vue.component('BaseTopTabs', BaseTopTabs)
Vue.component('JhRefreshView', JhRefreshView)
Vue.component('BaseRefreshView', BaseRefreshView)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

