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
        { text: "柱状图-异步加载", name: "ECharts1" },
        { text: "柱状图-异步加载2", name: "ECharts2" },
        { text: "多图表", name: "ECharts3" },
        { text: "柱状图折线图混合图表", name: "ECharts4" },
        { text: "渐变折线图", name: "ECharts5" },
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
    },
  },
  created() { },
};
</script>

<style></style>
