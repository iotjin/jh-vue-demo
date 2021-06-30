<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div class='header'>header</div>
    <div class="main">
      <!-- <vue-scroll :ops="ops"> -->
      <van-grid :column-num="4" :gutter="15" :border="false">
        <van-grid-item use-slot v-for="index in 133" :key="index">
          <div :class="[index === selectIndex? 'itemSel':'item']" @click="onClickItem(index)"> {{index}} </div>
        </van-grid-item>
      </van-grid>
      <!-- </vue-scroll> -->
    </div>
    <div class='footer'>footer</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "GridView2 - 固定头尾",
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {}
      },
      selectIndex: 1,
      dataArr: this.getData()
    };
  },
  methods: {
    onClickItem(index) {
      this.selectIndex = index
    },
    getData() {
      let dataArr = []
      for (let index = 0; index < 8; index++) {
        dataArr.push({ name: "aa" + index, content: "bb" })
      }
      return dataArr
    }
  },
  created() { },
};
</script>

<style lang="less" scoped>
.header {
  background: rgb(8, 117, 94);
  color: #fff;
  height: 100px;
  width: 100vw;
  position: fixed;
  z-index: 1;
}
.main {
  padding-top: 100px;
  padding-bottom: 200px;
}

.footer {
  background: rgb(8, 117, 94);
  color: #fff;
  height: 200px;
  width: 100vw;
  position: fixed;
  bottom: 0;
}

/deep/ .van-grid-item__content {
  padding: 0px;
}

.item {
  width: 100%;
  height: 60rpx;
  border: 1px solid gray;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}

.itemSel {
  width: 100%;
  height: 60rpx;
  border: 1px solid gray;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}
</style>