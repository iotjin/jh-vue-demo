<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div class="gridView">
      <div class='gridViewCell' v-for="item in dataArr" :key="item.text" @click="onClickItem(item)">
        <div class="image">{{item.img}}</div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "GridView3 - 自定义多列",
      selectIndex: 0,
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
      for (let index = 0; index < 8; index++) {
        dataArr.push({ text: "text" + index, url: "url" })
      }
      return dataArr
    }
  },
  created() { },
};
</script>

<style lang="less" scoped>
.gridView {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background: white;
  background: yellow;
  margin: 20px;
  border-left: @base-borderWidth solid @test-borderColor;
  border-top: @base-borderWidth solid @test-borderColor;
}

.gridViewCell {
  width: 33.3333%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  border-right: @base-borderWidth solid @test-borderColor;
  border-bottom: @base-borderWidth solid @test-borderColor;
}

/* .gridView {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background: white;
  background: yellow;
  margin: 20px;
  border-left: 1px solid red;
  border-top: 1px solid red;
}

.gridViewCell {
  width: 33.3333%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  border-right: 1px solid red;
  border-bottom: 1px solid red;
} */

.image {
  margin-top: 10px;
  background: orange;
  width: 25px;
  height: 25px;
}

.text {
  margin-top: 10px;
  display: block;
  text-align: center;
  font-weight: bold;
  color: #000;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>