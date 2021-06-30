<template>
  <div>
    <div class="img-bg">
      <img class="logo" src="@/assets/logo.png">
    </div>
    <div class="text">app</div>
    <van-cell-group class="input-bg">
      <van-field v-model="account" label="账号" placeholder="请输入账号" label-width="30px" center clearable>
        <img class="icon" src="@/assets/tab/tab1.png" slot="left-icon">
      </van-field>
      <van-field v-model="pwd" label="密码" placeholder="请输入密码" type="password" label-width="30px" center clearable>
        <img class="icon" src="@/assets/tab/tab2.png" slot="left-icon">
      </van-field>
    </van-cell-group>
    <div class="base-submit-btn" style="margin-top:60px;" @click="toLogin">登 录</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      account: "",
      pwd: "",
    };
  },
  methods: {
    toLogin() {
      console.log('点击登录');
      console.log(this.account);
      console.log(this.pwd);

      var userInfo = { account: this.account, pwd: this.pwd }
      console.log(userInfo);

      this.$toast.loading({
        duration: 0,
        message: '正在登录...',
      });
      setTimeout(() => {
        this.$toast.success('登录成功');
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.$router.replace({ name: "Main" });
        this.$toast.clear();
      }, 2000);

    }
  },
  created() {
  },
};
</script>

<style scoped>
.img-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
}

.logo {
  width: 100px;
  height: 100px;
  /* border-radius: 50px; */
  margin-top: 20px;
}

.text {
  width: 100vw;
  text-align: center;
  margin: 30px 0;
}

.input-bg {
  margin: 15px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  padding-bottom: 2px;
}
</style>
