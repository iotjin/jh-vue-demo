import Vue from "vue";
import VueRouter from "vue-router";
import Root from "../views/root/index.vue";
import Main from "../views/root/main.vue";
import Module1 from "../views/module1/index.vue";
import Module2 from "../views/module2/index.vue";
import Module3 from "../views/module3/index.vue";
import Module4 from "../views/module4/index.vue";

import DemoList from "../views/module2/DemoList.vue";

import ListViewDemoList from "../views/demoList/listView/ListViewDemoList.vue";
import ListView1 from "../views/demoList/listView/ListView1.vue";
import ListView2 from "../views/demoList/listView/ListView2.vue";
import ListView3 from "../views/demoList/listView/ListView3.vue";
import ListView4 from "../views/demoList/listView/ListView4.vue";
import ListView5 from "../views/demoList/listView/ListView5.vue";

import GridViewDemoList from "../views/demoList/gridView/GridViewDemoList.vue";
import GridView1 from "../views/demoList/gridView/GridView1.vue";
import GridView2 from "../views/demoList/gridView/GridView2.vue";
import GridView3 from "../views/demoList/gridView/GridView3.vue";
import GridView4 from "../views/demoList/gridView/GridView4.vue";
import GridView5 from "../views/demoList/gridView/GridView5.vue";

import EChartsDemoList from "../views/demoList/echarts/EChartsDemoList.vue";
import ECharts1 from "../views/demoList/echarts/ECharts1.vue";
import ECharts2 from "../views/demoList/echarts/ECharts2.vue";
import ECharts3 from "../views/demoList/echarts/ECharts3.vue";
import ECharts4 from "../views/demoList/echarts/ECharts4.vue";
import ECharts5 from "../views/demoList/echarts/ECharts5.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Root", component: Root },
  { path: "/Main", name: "Main", component: Main },
  { path: "/Module1", name: "Module1", component: Module1, meta: { isShowTabBar: true } },
  { path: "/Module2", name: "Module2", component: Module2, meta: { isShowTabBar: true } },
  { path: "/DemoList", name: "DemoList", component: DemoList, meta: { isShowTabBar: true } },
  { path: "/Module3", name: "Module3", component: Module3, meta: { isShowTabBar: true } },
  { path: "/Module4", name: "Module4", component: Module4, meta: { isShowTabBar: true } },

  // { path: "/", name: "Root", component: Root, },
  // {
  //   path: '/Main',
  //   name: "Main",
  //   component: Main,
  //   redirect: "/Module2",
  //   children: [
  //     { path: "/Module1", name: "Module1", component: Module1, },
  //     { path: "/Module2", name: "Module2", component: Module2, },
  //     { path: "/Module3", name: "Module3", component: Module3, },
  //     { path: "/Module4", name: "Module4", component: Module4, },
  //   ]
  // },
  // { path: "/Module2/DemoList", name: "DemoList", component: DemoList, },

  // ListView
  { path: "/DemoList/ListView/ListViewDemoList", name: "ListViewDemoList", component: ListViewDemoList, },
  { path: "/DemoList/ListView/ListView1", name: "ListView1", component: ListView1, },
  { path: "/DemoList/ListView/ListView2", name: "ListView2", component: ListView2, },
  { path: "/DemoList/ListView/ListView3", name: "ListView3", component: ListView3, },
  { path: "/DemoList/ListView/ListView4", name: "ListView4", component: ListView4, },
  { path: "/DemoList/ListView/ListView5", name: "ListView5", component: ListView5, },

  // GridView
  { path: "/DemoList/GridView/GridViewDemoList", name: "GridViewDemoList", component: GridViewDemoList, },
  { path: "/DemoList/GridView/GridView1", name: "GridView1", component: GridView1, },
  { path: "/DemoList/GridView/GridView2", name: "GridView2", component: GridView2, },
  { path: "/DemoList/GridView/GridView3", name: "GridView3", component: GridView3, },
  { path: "/DemoList/GridView/GridView4", name: "GridView4", component: GridView4, },
  { path: "/DemoList/GridView/GridView5", name: "GridView5", component: GridView5, },

  // Echarts
  { path: "/DemoList/ECharts/EChartsDemoList", name: "EChartsDemoList", component: EChartsDemoList, },
  { path: "/DemoList/ECharts/ECharts1", name: "ECharts1", component: ECharts1, },
  { path: "/DemoList/ECharts/ECharts2", name: "ECharts2", component: ECharts2, },
  { path: "/DemoList/ECharts/ECharts3", name: "ECharts3", component: ECharts3, },
  { path: "/DemoList/ECharts/ECharts4", name: "ECharts4", component: ECharts4, },
  { path: "/DemoList/ECharts/ECharts5", name: "ECharts5", component: ECharts5, },



];

const router = new VueRouter({
  routes,
});

export default router;
