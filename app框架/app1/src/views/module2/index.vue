<template>
  <div class="bg2">
    <BaseNavBar :title="title" :isBack="false"> </BaseNavBar>
    模块2
    <div class="button" @click="onClick">按钮</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "模块2",
    };
  },
  methods: {
    onClick() {
      console.log("点击按钮");
      this.$router.push({ name: "DemoList", params: { setid: 111222 } });
    },
    created() {
      console.log("模块2");
    },
  },
};
</script>

<style>
.bg2 {
  width: auto;
  height: 100vh;
  /* background: red; */
}
.button {
  width: 200px;
  height: 200px;
  background: palevioletred;
}
</style>
