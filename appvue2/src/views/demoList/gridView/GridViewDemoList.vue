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
      title: "GridViewDemoList",
      dataArr: [
        { text: "GridView1 - 动态数据", name: "GridView1" },
        { text: "GridView2 - 固定头尾", name: "GridView2" },
        { text: "GridView3 - 自定义多列", name: "GridView3" },
        { text: "GridView4 - 分组功能列表", name: "GridView4" },
        { text: "GridView5", name: "" },
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
