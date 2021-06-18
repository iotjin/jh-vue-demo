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
      title: "ListViewDemoList",
      dataArr: [
        { text: "ListView1", name: "ListView1" },
        { text: "ListView2", name: "ListView2" },
        { text: "ListView3", name: "ListView3" },
        { text: "ListView4", name: "ListView4" },
        { text: "ListView5", name: "ListView5" },
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
