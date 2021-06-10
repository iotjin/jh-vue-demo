<template>
  <div class="bg">
    <BaseNavBar :title="title" :isBack="isBack">
      <!-- <van-icon name="cross" size="18" slot="left"/> -->
      <!-- <van-icon name="circle" size="18" slot="right"/>  -->
    </BaseNavBar>
    <BaseTabBar
      :selected="selected"
      :tabBars="tabBars"
      @onChange="onChange"
    ></BaseTabBar>
  </div>
</template>

<script>
import BaseNavBar from "../../components/BaseNavBar.vue";
import BaseTabBar from "../../components/BaseTabBar.vue";
export default {
  components: {
    BaseNavBar,
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
        {
          name: "/Module3",
          isShowRedDot: true,
          badge: "",
          text: "我的",
          iconPath: require("@assets/tab/tab3.png"),
          selectedIconPath: require("@assets/tab/tab3_select.png"),
        },
        // {
        //   name: "/Module4",
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
};
</script>

<style></style>
