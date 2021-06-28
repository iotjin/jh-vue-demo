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
