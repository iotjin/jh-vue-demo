<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="btn" @click="btnClick">往原生端传值</div>
    <div class="text" ref="text">接收的数据:</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "标题",
    };
  },
  methods: {
    btnClick() {
      console.log("点击了按钮");
      /* 往原生端发送数据,iOS注册的消息名字要保持一致 
        SendDataToApp是iOS的方法
        messageHandlers在电脑浏览器上可能会报错，但是在iOS的webkit里面正常，
        所以这里书写的时候要注意这个方法尽量写在最后，不然后面的代码不能执行，或使用try...catch
      */
      window.webkit.messageHandlers.SendDataToApp.postMessage({
        params: "参数",
      });
    },
    //接收原生端传递过来的数据
    receiveAPPData(params) {
      alert(params);
      console.log("接收的数据:" + params);
      this.$refs.text.innerText = "接收的数据:" + params; //更新值
    },
  },
  mounted() {
    //Vue的方法给原生调用前，需要把方法挂在Window下面
    window.receiveAPPData = this.receiveAPPData;
  },
};
</script>

<style>
#btn {
  background: yellow;
  width: 200px;
  height: 50px;
}
</style>
