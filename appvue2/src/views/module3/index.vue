<template>
  <div class="bg3">
    <BaseNavBar :title="title" :isBack="false">
      <van-icon name="setting-o" size="18" slot="right" @click="onClickNavItem" color="white" />
    </BaseNavBar>
    <div>这是模块3</div>
  </div>
</template>

<script>
const CommonUtils = require('@utils/commonUtils');
// const CommonUtils = require('../../utils/commonUtils.js');
const TimeUtils = require('../../utils/timeUtils.js');

export default {
  components: {},
  data() {
    return {
      title: "模块3",
    };
  },
  methods: {
    onClickNavItem() {
      this.$router.replace({ name: "Set" });
    }
  },
  created() {
    console.log("模块3");
    console.log(CommonUtils.getSafeRandomNum(1, 10));
    console.log(TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}'));
  },
};
</script>

<style>
.bg3 {
  width: auto;
  height: 1000px;
  /* background: orange; */
}
</style>
