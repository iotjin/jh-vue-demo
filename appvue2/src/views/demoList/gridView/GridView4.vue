<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div v-for="(item,index) in groupDataArr" :key="item.text">
      <div class="group-bg">
        <van-cell-group :title="groupDataArr[index].groupTitle" :border="false">
          <van-grid :column-num="3" :border="false" :gutter="10">
            <van-grid-item use-slot v-for="(item,index) in groupDataArr[index].groupData" :key="index" @click="onClickItem(item,index)">
              <img class="img" :src="item.img">
              <div class="text">{{item.text}}</div>
            </van-grid-item>
          </van-grid>
        </van-cell-group>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "GridView4 - 分组功能列表",
      groupDataArr: [{
        groupTitle: '分组一',
        groupData: [{
          text: '功能1',
          url: './gridView1',
          img: require('@assets/logo.png')
        }, {
          text: '功能2',
          url: './gridView2',
          img: require('../../../assets/logo.png')
        }, {
          text: '功能3',
          url: './gridView3',
          img: require('../../../assets/logo.png')
        }],
      }, {
        groupTitle: '分组二',
        groupData: [{
          text: '功能1',
          url: './gridView1',
          img: require('../../../assets/logo.png')
        }, {
          text: '功能2',
          url: './gridView2',
          img: require('../../../assets/logo.png')
        }, {
          text: '功能3',
          url: './gridView3',
          img: require('../../../assets/logo.png')
        }, {
          text: '功能4',
          url: './gridView4',
          img: require('../../../assets/logo.png')
        }],
      }, {
        groupTitle: '分组三',
        groupData: [{
          text: '功能1',
          url: './gridView1',
          img: require('../../../assets/logo.png')
        }, {
          text: '功能2',
          url: './gridView2',
          img: require('../../../assets/logo.png')
        }],
      }]
    };
  },
  methods: {
    onClickItem(item, index) {
      console.log(item.url);
      console.log(index);
    },
  },
  created() { },
};
</script>

<style scoped>
.bg {
  background: white;
}

.img {
  padding-top: 15px;
  width: 80px;
  height: 80px;
}

.text {
  display: block;
  font-size: 13px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>