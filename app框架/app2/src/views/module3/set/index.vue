<template>
  <div class="bg">
    <BaseNavBar :title="title"></BaseNavBar>
    <van-cell-group>
      <van-cell center :title="item.text" is-link v-for="item in dataArr" :key="item.name" @click="onClick(item)" />
    </van-cell-group>

    <van-action-sheet v-model="isShowActionSheet" :actions="actionsArr" description="请选择操作" @select="onSelect" cancel-text="取消" close-on-click-action />

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "设置",
      isShowActionSheet: false,
      actionsArr: [{ name: '退出登录', color: '#ee0a24' },],
      dataArr: [
        { text: "关于", name: "" },
        { text: "退出", name: "" },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      if (item.text === '退出') {
        this.isShowActionSheet = true;
        return
      }
      //   if (item.name) {
      //     this.$router.push({ name: item.name });
      //   }
    },
    onSelect(item) {
      console.log(item);
      this.isShowActionSheet = false;
      this.$toast.loading({
        duration: 0,
        message: '正在退出...',
      });
      setTimeout(() => {
        this.$toast.success('退出成功');
        window.localStorage.removeItem('userInfo');
        this.$router.replace({ name: "Login" });
        this.$toast.clear();
      }, 2000);
    },
  },
  created() { },
};
</script>

<style></style>
