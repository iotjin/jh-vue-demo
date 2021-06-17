<template>
  <router-view id="app">
    <Root></Root>
  </router-view>
</template>

<script>
import Root from "./views/root/index.vue";

export default {
  name: "App",
  components: {
    Root,
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
