<template>
  <div>
    <div class='header' :style="{'background': bgColor}">
      <van-tabs v-model="selectIndex" :background="bgColor" :color="color" @change="onChange" @click="onClick">
        <template v-for="item in tabs">
          <van-tab :key="item.title" :title="item.title" :to="item.name" :badge="item.badge" :dot="item.isShowRedDot" replace></van-tab>
        </template>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    // 默认选中颜色，红色
    color: { type: String, default: "#ee0a24" },
    // 背景颜色
    bgColor: { type: String, default: "#f8f8f8" },
    //item数组
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectIndex: 0,
      tabs0: [{
        name: "/DemoList/ListView/TopTab1",
        title: "标签1",
        isShowRedDot: false,
        badge: "1",
      }, {
        name: "/DemoList/ListView/TopTab2",
        title: "标签2",
        isShowRedDot: true,
        badge: "",
      }],
    };
  },
  methods: {
    onChange(name, title) {
      //   console.log("tabs内部-onChange：" + name + title);
      this.$emit("onChange", name, title); //往外传值
    },
    onClick(name, title) {
      //   console.log("tabs内部-onClick" + name + title);
      this.$emit("onClick", name, title); //往外传值
    },
  },
}
</script>

<style scoped>
.header {
  height: 45px;
  width: 100%;
  position: fixed;
}
</style>