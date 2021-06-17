<template>
  <div>
    root
    <div>root</div>
    <div>root</div>
    <div>root</div>
    <div>root</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.$route); //打印当前路由属性
    if (this.$route.path === "/") {
      this.$router.replace({ name: "Main" });
      console.log(123);
    }
  },
};
</script>

<style></style>
