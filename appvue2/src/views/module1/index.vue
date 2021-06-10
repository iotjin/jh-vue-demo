<template>
  <div class="bg">模块1</div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../less/global.less";
.bg {
  width: auto;
  height: 1000px;
  background: yellow;
  background: @base-bgColor;
  background: yellow;
}
</style>
