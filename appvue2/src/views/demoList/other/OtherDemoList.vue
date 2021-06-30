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
      title: "OtherDemoList",
      dataArr: [
        { text: "百度地图", name: "Map" },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      // this.$router.push({ name: item.name });
      if (item.name) {
        this.$router.push({ name: item.name });
      }
    },
  },
  created() { },
};
</script>

<style></style>
