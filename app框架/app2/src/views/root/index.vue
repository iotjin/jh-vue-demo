<template>
  <div class="bg">
    root
    root
    root
    root
    root
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    // console.log(this.$route); //打印当前路由属性
    if (this.$route.path === "/") {
      console.log("root");
      // this.$router.replace({ name: "Main" });
      this.$router.replace({ name: "Login" }).catch(() => {
      });
    }
  },
};
</script>

<style>
.bg {
  width: 100%;
  height: 100vh;
}
</style>
