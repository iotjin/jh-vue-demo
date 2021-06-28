<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div>
      <div id="cell" class="cell" v-for="item in dataArr" :key="item.name" @click="onClickItem(item)">
        <div class="left-view">
          <img class="img" src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="right-view">
          <div class="name">{{item.name}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "ListView1 - 静态数据",
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
    }
  },
  created() { },
};
</script>

<style scoped>
.cell {
  display: flex;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.left-view {
  width: 70px;
  text-align: center;
  line-height: 70px;
}

.img {
  width: 50px;
  height: 50px;

  vertical-align: middle;
}

.right-view {
  flex: 1;
}

.name {
  margin-top: 10px;
  margin-left: 8px;
  font-size: 18px;
}

.content {
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: gray;
  font-size: 15px;
}
</style>