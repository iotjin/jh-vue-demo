<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div>
      <div id="cell" class="cell" v-for="item in dataArr" :key="item.id" @click="onClickItem(item)">
        <div class="left-view">
          <img class="img" src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="right-view">
          <div class="name">{{item.name2}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


var API = require('../../../http/APIConfig');
// const API = require('@http/APIConfig.js');

var Http = require('../../../http/HttpUtils');

export default {
  components: {},
  data() {
    return {
      title: "ListView5 - 网络请求",
      dataArr: []
    };
  },
  methods: {
    onClickItem(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
    },
    request1() {
      Http.post('1', {}, '正在加载').then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    },
    request2() {
      let that = this
      let params = {}
      API.getSimpleArrDic(params).then(res => {
        console.log(res);
        if (res.code == 200) {
          that.dataArr = res.data
        } else {
          that.dataArr = []
        }
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created() {
    this.request2()
  },

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