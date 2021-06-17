<template>
  <div class="bg3">
    <BaseNavBar :title="title" :isBack="false"> </BaseNavBar>
    <div>这是模块3</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "模块3",
    };
  },
  methods: {},
  created() {
    console.log("模块3");
  },
};
</script>

<style>
.bg3 {
  width: auto;
  height: 1000px;
  /* background: orange; */
}
</style>
