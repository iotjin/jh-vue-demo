<template>
  <div class="bg">
    <div>
      <BaseNavBar :title="title" :isBack="isBack"> </BaseNavBar>
      这是模块1
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "模块1",
      isBack: false,
    };
  },
  methods: {},
  created() {
    console.log("模块1");
  },
};
</script>

<style lang="less">
@import "../../less/global.less";
.bg {
  width: 100%;
  height: 100vh;
  background: yellow;
  background: @base-bgColor;
  // background: yellow;
}
</style>
