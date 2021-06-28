<template>
  <div class="bg">
    <BaseNavBar :title="title" :isBack="true"></BaseNavBar>
    <van-cell-group>
      <van-cell center :title="item.text" is-link v-for="item in dataArr" :key="item.name" @click="onClick(item)" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "DemoList",
      dataArr: [
        { text: "text1", name: "name1" },
        { text: "text2", name: "name2" },
        { text: "text3", name: "name3" },
        { text: "text4", name: "name4" },
        { text: "text5", name: "name5" },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      if (item.name) {
        // this.$router.push({ name: item.name });
      }
      // window.localStorage.removeItem('userInfo');
      // this.$router.replace({ name: "Login" });
    },
  },
  created() { },
};
</script>

<style></style>
