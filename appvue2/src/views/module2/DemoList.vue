<template>
  <div class="bg">
    <BaseNavBar :title="title" :isBack="false"></BaseNavBar>
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
        { text: "ListView", name: "ListViewDemoList" },
        { text: "GridView", name: "GridViewDemoList" },
        { text: "ECharts", name: "EChartsDemoList" },
        { text: "UI", name: "" },
        { text: "Other", name: "OtherDemoList" },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      if (item.name) {
        this.$router.push({ name: item.name });
      }

      // window.localStorage.removeItem('userInfo');
      // this.$router.replace({ name: "Login" });
    },
  },
  created() { },
};
</script>

<style></style>
