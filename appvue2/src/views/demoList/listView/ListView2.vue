<template>
  <div class="bg">
    <BaseNavBar :title="title"> </BaseNavBar>
    <div class="header" @click="goTop">header</div>
    <JhRefreshView ref="scroll" :isHiddenLoading="isHiddenLoading" :data="dataArr" :top="100" :bottom="100" @onScroll="onScroll" @pullingDown="onPullDownRefresh" @pullingUp="onReachBottom">
      <div class="cellBg">
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
    </JhRefreshView>
    <div class="footer">footer</div>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      title: "ListView2 - 分页假数据",
      currentPage: 0, //当前页码
      pageSize: 12,
      isLoadAll: false, //已经加载全部数据
      dataArr: [],
      isHiddenLoading: false,
    };
  },
  methods: {
    onScroll() {
      // console.log(e.target.scrollTop)
    },
    onPullDownRefresh() {
      this.getData()
    },
    onReachBottom() {
      this.getData(true)
    },
    goTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    getData(isLoadMore) {
      this.isHiddenLoading = false
      if (isLoadMore) {
        this.currentPage++
      } else {
        this.currentPage = 0;
        this.dataArr = []
      }


      let page = this.currentPage
      let count = this.pageSize
      let mArr = []
      for (let index = page * count; index < (isLoadMore ? (page * count + count) : count); index++) {
        let dict = {}
        dict.id = index
        dict.name = '姓名' + index
        dict.content = "这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"

        dict.title = `00我是title${index}`
        dict.desc = '00这是一段测试文字'
        dict.img = 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'

        mArr.push(dict)
      }
      if (this.dataArr.length > 30) {
        this.isHiddenLoading = true
        return
      }

      setTimeout(() => {
        if (isLoadMore) {
          this.dataArr = this.dataArr.concat(mArr)
        } else {
          this.dataArr = mArr
        }
        this.isHiddenLoading = true
      }, 2000);

    }
  },

  created() {
    this.onPullDownRefresh()
  },
};
</script>

<style scoped>
.bg {
  width: auto;
  height: 100vh;
}

.header {
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 20px;
  background: blue;
  position: fixed;
  display: flex;
  z-index: 1;
}

.footer {
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 20px;
  background: blue;
  position: fixed;
  bottom: 0;
  display: flex;
}

.cellBg {
  padding-top: 0px;
  background-color: red;
}

.cell {
  display: flex;
  width: 100%;
  background: white;
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