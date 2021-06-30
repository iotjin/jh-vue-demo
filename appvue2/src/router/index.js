import Vue from "vue";
import VueRouter from "vue-router";

import Root from "../views/root/index.vue";
import Login from "../views/login/Login.vue";
import Main from "../views/root/main.vue";
import NotFound from "../views/root/NotFound.vue";

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
import TopTab1 from "../views/demoList/listView/TopTab1.vue";
import TopTab2 from "../views/demoList/listView/TopTab2.vue";

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


import OtherDemoList from "../views/demoList/other/OtherDemoList.vue";
import Map from "../views/demoList/other/Map.vue";


import Set from "../views/module3/set/index.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Root", component: Root },
  { path: "/Login", name: "Login", component: Login },
  {
    path: '/Main',
    name: "Main",
    component: Main,
    // redirect: "/Module2",
    children: [
      { path: "/Module1", name: "Module1", component: Module1 },
      { path: "/Module2", name: "Module2", component: Module2, meta: { isShowTabBar: true }, },
      { path: "/DemoList", name: "DemoList", component: DemoList },
      { path: "/Module3", name: "Module3", component: Module3 },
      { path: "/Module4", name: "Module4", component: Module4 },
    ],
  },

  // ListView
  { path: "/DemoList/ListView/ListViewDemoList", name: "ListViewDemoList", component: ListViewDemoList, },
  { path: "/DemoList/ListView/ListView1", name: "ListView1", component: ListView1, },
  { path: "/DemoList/ListView/ListView2", name: "ListView2", component: ListView2 },
  { path: "/DemoList/ListView/ListView3", name: "ListView3", component: ListView3, },
  { path: "/DemoList/ListView/ListView4", name: "ListView4", component: ListView4, },
  { path: "/DemoList/ListView/ListView5", name: "ListView5", component: ListView5, },
  {
    path: '/DemoList/ListView/TopTab',
    name: "TopTab",
    component: ListView4,
    redirect: '/DemoList/ListView/TopTab1',
    children: [
      { path: "/DemoList/ListView/TopTab1", name: "TopTab1", component: TopTab1, },
      { path: "/DemoList/ListView/TopTab2", name: "TopTab2", component: TopTab2, },
    ]
  },

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

  // Other
  { path: "/DemoList/Other/OtherDemoList", name: "OtherDemoList", component: OtherDemoList, },
  { path: "/DemoList/Other/Map", name: "Map", component: Map, },


  { path: "/Module3/Set", name: "Set", component: Set, },


  { path: "/NotFound", name: "NotFound", component: NotFound },
  // 所有未定义路由，全部重定向到404页，必须放在最后
  {
    path: '*',
    redirect: '/404'
  }

];




const router = new VueRouter({
  routes,
  // mode: 'hash',
  // base: process.env.BASE_URL,
  // /**
  //  * 路由跳转后页面滚动到顶部
  //  * 详见：https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
  //  */
  // scrollBehavior: () => ({ y: 0 }),
});




/*

只能永久，需要手动清除
存储：window.localStorage.setItem(name, JSON.stringify(obj))
读取：window.localStorage.getItem(name)
删除：window.localStorage.removeItem(name)
清空：window.localStorage.clear()
*/

function getToken() {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  // console.log(userInfo);
  // window.localStorage.removeItem('userInfo');
  return userInfo;
}

// 路由前置守卫
router.beforeEach((to, from, next) => {
  const { meta, name } = to;
  const { isLogin } = meta;
  let token = getToken();
  console.log('meta = ' + JSON.stringify(meta));
  console.log('name = ' + name);
  console.log('token = ' + token);

  // token不存在时跳转非登录页，重定向到登录页
  if (!token && name !== 'Login' && !isLogin) {
    console.log('11111111111');
    next({ name: 'Login' });
  } else if (token && name === 'Login') {
    console.log('22222222222');
    next({ name: 'Main' });
  }
  // 其他场景
  else next();
});


export default router;
