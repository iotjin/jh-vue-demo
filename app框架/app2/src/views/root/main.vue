<template>
  <div class="bg">
    <router-view></router-view>
    <BaseTabBar :selected="selected" :tabBars="tabBars" @onChange="onChange"></BaseTabBar>
  </div>
</template>

<script>
import BaseTabBar from "../../components/BaseTabBar.vue";
export default {
  components: {
    BaseTabBar,
  },
  data() {
    return {
      title: "标题",
      isBack: false,
      selected: 1,
      tabBars: [
        {
          name: "/Module1",
          isShowRedDot: false,
          badge: "",
          text: "首页",
          iconPath: require("@assets/tab/tab1.png"),
          selectedIconPath: require("@assets/tab/tab1_select.png"),
        },
        {
          name: "/Module2",
          isShowRedDot: false,
          badge: "",
          text: "Demo",
          iconPath: require("@assets/tab/tab2.png"),
          selectedIconPath: require("@assets/tab/tab2_select.png"),
        },
        // {
        //   name: "/DemoList",
        //   isShowRedDot: false,
        //   badge: "",
        //   text: "Demo",
        //   iconPath: require("@assets/tab/tab2.png"),
        //   selectedIconPath: require("@assets/tab/tab2_select.png"),
        // },
        {
          name: "/Module3",
          isShowRedDot: true,
          badge: "",
          text: "我的",
          iconPath: require("@assets/tab/tab3.png"),
          selectedIconPath: require("@assets/tab/tab3_select.png"),
        },
        // {
        //   name: "Module4",
        //   isShowRedDot: false,
        //   badge: "哈",
        //   text: "模块四",
        //   iconPath: require("@assets/tab/tab3.png"),
        //   selectedIconPath: require("@assets/tab/tab3_select.png"),
        // },
      ],
    };
  },
  methods: {
    onChange(index) {
      console.log("外部-切换到tabbar：" + index);
      this.tabBars[index].isShowRedDot = this.tabBars[index].isShowRedDot
        ? false
        : false;
    },
  },
  created() { },
};
</script>

<style></style>
