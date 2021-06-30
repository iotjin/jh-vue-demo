<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div>
      <van-grid :column-num="4" :gutter="15" :border="false">
        <van-grid-item use-slot v-for="index in 33" :key="index">
          <div :class="[index === selectIndex? 'itemSel':'item']" @click="onClickItem(index)"> {{index}} </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "GridView1 - 动态数据",
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
/deep/ .van-grid-item__content {
  padding: 0px;
}

//  ::v-deep .van-grid-item__content {
//   padding: 0px;
// }

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