<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
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
      title: "EChartsDemoList",
      dataArr: [
        { text: "ECharts1", name: "ECharts1" },
        { text: "ECharts2", name: "ECharts2" },
        { text: "ECharts3", name: "ECharts3" },
        { text: "ECharts4", name: "ECharts4" },
        { text: "ECharts5", name: "ECharts5" },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      // this.$router.push({ name: item.name });
    },
  },
  created() { },
};
</script>

<style></style>
