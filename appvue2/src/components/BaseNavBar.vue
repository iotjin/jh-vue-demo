<template>
  <div class="navBar">
    <van-nav-bar :title="title" fixed safe-area-inset-top @click-left="onClickLeft" @click-right="onClickRight">
      <template v-if="$slots.left" slot="left">
        <slot name="left"></slot>
      </template>
      <template v-else-if="isBack" slot="left">
        <van-icon name="arrow-left" size="18" :color="backIconColor" />
      </template>
      <template slot="right">
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
    <div class="nav-top-placeholder" v-if="isPlaceholder"></div>
  </div>
</template>

<script>
import { NavBar } from "vant";
import { Icon } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  props: {
    // 是否显示返回按钮，默认为true，优先级低于slot
    isBack: { type: [Boolean, String], default: true },
    // 默认返回按钮颜色
    backIconColor: { type: String, default: "white" },
    // 标题
    title: { type: String, default: "" },
    // 固定在顶部时，是否在标签位置生成一个等高的占位元素
    isPlaceholder: { type: Boolean, default: true },
  },
  methods: {
    onClickLeft() {
      console.log("点击返回按钮");
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("点击右侧按钮");
    },
  },
  created() { },
};
</script>

<style>
.van-nav-bar {
  background: white;
  background: #38bc9d;
}

.van-nav-bar__title {
  color: black;
  color: white;
}

.nav-top-placeholder {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  height: 44px;
}
</style>
