<template>
  <div class="bg">
    模块2
    <div class="button" @click="onClick">按钮</div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      console.log("点击按钮");
      // this.$router.push('/module2/list');

      this.$router.push({ name: "DemoList", params: { setid: 111222 } });
    },
  },
};
</script>

<style>
.bg {
  width: auto;
  height: 1000px;
}
.button {
  width: 200px;
  height: 200px;
  background: palevioletred;
}
</style>
