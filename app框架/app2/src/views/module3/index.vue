<template>
  <div class="bg3">
    <BaseNavBar :title="title" :isBack="false">
      <van-icon name="setting-o" size="18" slot="right" @click="onClickNavItem" color="white" />
    </BaseNavBar>
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
  methods: {
    onClickNavItem() {
      this.$router.replace({ name: "Set" });
    }
  },
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
