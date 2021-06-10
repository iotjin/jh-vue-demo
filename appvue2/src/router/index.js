import Vue from "vue";
import VueRouter from "vue-router";
import Root from "../views/root/index.vue";
import Module1 from "../views/module1/index.vue";
import Module2 from "../views/module2/index.vue";
import Module3 from "../views/module3/index.vue";
import Module4 from "../views/module4/index.vue";

import DemoList from "../views/module2/DemoList";


Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Root", component: Root, },
  { path: "/Module1", name: "Module1", component: Module1, },
  { path: "/Module2", name: "Module2", component: Module2, },
  { path: "/Module3", name: "Module3", component: Module3, },
  { path: "/Module4", name: "Module4", component: Module4, },

  { path: "/Module2/DemoList", name: "DemoList", component: DemoList, },
];

const router = new VueRouter({
  routes,
});

export default router;
