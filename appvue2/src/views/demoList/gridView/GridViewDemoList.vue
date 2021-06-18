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
        { text: "GridView1", name: "GridView1" },
        { text: "GridView2", name: "GridView2" },
        { text: "GridView3", name: "GridView3" },
        { text: "GridView4", name: "GridView4" },
        { text: "GridView5", name: "GridView5" },
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
