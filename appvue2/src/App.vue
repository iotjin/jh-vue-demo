<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "./views/root/main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
  data() {
    return {
      title: "标题",
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
