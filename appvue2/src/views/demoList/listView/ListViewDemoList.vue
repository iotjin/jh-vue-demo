<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <van-cell-group>
      <van-cell center :title="item.text" is-link v-for="item in dataArr" :key="item.name" @click="onClickItem(item)" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "ListViewDemoList",
      dataArr: [
        { text: "ListView1 - 静态数据", name: "ListView1" },
        { text: "ListView2 - 分页假数据", name: "ListView2" },
        { text: "ListView3 - 分页数据", name: "ListView3" },
        { text: "ListView4 - tab分页数据", name: "TopTab" },
        { text: "ListView5 - 网络请求", name: "ListView5" },
      ],
    };
  },
  methods: {
    onClickItem(item) {
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
