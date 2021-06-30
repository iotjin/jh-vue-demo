import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseNavBar from "./components/BaseNavBar.vue";
import BaseTopTabs from "./components/BaseTopTabs.vue";
import './config/vant/vant.js'
import './config/css/global.css'
import JhRefreshView from "./components/JhRefreshView/index.vue";
import BaseRefreshView from "./components/BaseRefreshView.vue";
import BaiduMap from 'vue-baidu-map'
import vuescroll from 'vuescroll';




Vue.component('BaseNavBar', BaseNavBar)
Vue.component('BaseTopTabs', BaseTopTabs)
Vue.component('JhRefreshView', JhRefreshView)
Vue.component('BaseRefreshView', BaseRefreshView)

Vue.use(vuescroll);

Vue.use(BaiduMap, {
  ak: ''  //  在此输入你自己的百度地图ak
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

