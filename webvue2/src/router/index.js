import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Mine from "../views/Mine.vue";
import ECharts1 from "../views/ECharts/ECharts1.vue";
import Map1 from "../views/map.vue";

Vue.use(VueRouter);

const routes = [

  // { path: "/", name: "Home", component: Home, },
  // { path: "/about", name: "About", component: About, },
  // { path: "/mine", name: "Mine1", component: Mine, },
  // { path: "/echarts1", name: "ECharts2", component: ECharts1, },

  { path: "/", name: "ECharts2", component: ECharts1, },
  { path: "/Home", name: "Home", component: Home, },
  { path: "/about", name: "About", component: About, },
  { path: "/mine", name: "Mine1", component: Mine, },
  { path: "/Map1", name: "Map1", component: Map1, },



];

const router = new VueRouter({
  routes,
});

export default router;
