<template>
  <div id="app">
    <Main></Main>
  </div>

  <!-- <router-view id="app">
    <Root></Root>
  </router-view> -->
</template>

<script>
// import Root from "./views/root/index.vue";
import Main from "./views/root/main.vue";

export default {
  name: "App",
  components: {
    // Root,
    Main,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
