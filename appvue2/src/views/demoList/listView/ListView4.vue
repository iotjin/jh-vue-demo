<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <BaseTopTabs :tabs="tabs" :bgColor="bgColor" :color="color" @onChange="onChange" @onClick="onClick"></BaseTopTabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "Listdiv4 - tab分页数据",
      color: 'red',
      // bgColor: 'red',
      bgColor: '#f8f8f8',
      tabs: [{
        name: "/DemoList/ListView/TopTab1",
        title: "标签11",
        isShowRedDot: false,
        badge: "",
      }, {
        name: "/DemoList/ListView/TopTab2",
        title: "标签22",
        isShowRedDot: true,
        badge: "",
      }],
      dataArr: this.getData()
    };
  },
  methods: {
    onClickItem(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
    },
    getData() {
      let dataArr = []
      for (let index = 0; index < 20; index++) {
        dataArr.push({ name: "姓名" + index, content: "这是内容这是内容这是内容这是内容这是内容这是内容这是内容" })
      }
      return dataArr
    },
    onClick(index, title) {
      console.log(index, title);
      this.tabs[index].isShowRedDot = this.tabs[index].isShowRedDot ? false : false;
    },
    onChange(index, title) {
      console.log(index, title);
      this.tabs[index].isShowRedDot = this.tabs[index].isShowRedDot ? false : false;
    }
  },
  created() {
  },
  mounted() {
  },
};
</script>

<style scoped>
</style>