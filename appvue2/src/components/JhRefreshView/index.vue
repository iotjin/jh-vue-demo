<template>
  <div class="refresh-scroll-wrapper" @scroll.passive="handleScroll" ref="scrollWrapper">
    <div class="refresh-scroll-content" ref="scrollContent">
      <div class="refresh-top-placeholder">
      </div>
      <!-- 头部 -->
      <div class="refresh-pulldown">
        <div class="refresh-icon-wrapper" v-show="beforePullDown">
          <i class="refresh-icon-xiajiantou" ref="icon" v-show="!isRefreshEnd"></i>
          <span class="refresh-icon-text">{{pullDownText}}</span>
        </div>
        <div class="refresh-loading" v-show="!beforePullDown"></div>
      </div>

      <slot></slot>
      <!-- 尾部 -->
      <div class="refresh-pullup" v-show="!isHiddenLoading">
        <div class="refresh-loading"></div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { addClass, removeClass } from './dom'
const pulldownHeight = 40 // 下拉刷新临界点
const pulldownTop = 20  // 进入下拉刷新位移top
const moveCount = 200  // 下拉位移系数

export default {
  name: 'scroll',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    triggerHeight: {
      type: [Number, String],
      default: 200
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    //隐藏加载框，默认隐藏，开始加载时设置false，数据请求结束时设置为true，
    isHiddenLoading: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      navHeight: 44,
      beforePullDown: true,
      isRefreshEnd: null, // 是否下拉刷新完成
      joinRefresh: null, // 进入下拉刷新状态
      refreshFlag: 0, // 下拉刷新执行标志位
      translateY: 0, // 下拉位移Y值
      pullDownText: '下拉刷新',
      isHiddenFotterLoading: this.isHiddenLoading
    }
  },
  methods: {
    touchStart(e) {
      if (this.refreshFlag) {
        e.preventDefault()
        return
      }
      let target = e.changedTouches[0]
      this.firstOffsetY = target.clientY
    },
    touchMove(e) {

      if (!this.firstOffsetY) {
        return
      }

      if (this.refreshFlag) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      let { scrollWrapper, scrollContent, icon } = this.$refs
      let target = e.changedTouches[0]
      if (scrollWrapper.scrollTop === 0) {
        // 拖动量的百分比
        let percentage = (target.clientY - this.firstOffsetY) / window.innerHeight
        this.translateY = percentage * moveCount

        if (this.translateY > pulldownHeight) {
          this.pullDownText = '松开刷新'
          removeClass(icon, 'down')
          addClass(icon, 'up')
        } else {
          this.pullDownText = '下拉刷新'
          removeClass(icon, 'up')
          addClass(icon, 'down')
        }

        if (percentage > 0) {
          e.preventDefault()
          this.joinRefresh = true
          scrollContent.style.webkitTransform = `translate3d(0, ${this.translateY}px, 0)`
        } else {
          if (this.joinRefresh === null) this.joinRefresh = false
        }
      } else {
        if (this.joinRefresh === null) this.joinRefresh = false
      }

    },
    //拖动结束
    touchEnd(e) {
      this.isHiddenFotterLoading = false //显示加载框
      if (this.translateY === 0) {
        return
      }

      if (this.refreshFlag) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      let { scrollContent, icon } = this.$refs
      if (this.translateY > pulldownHeight && this.joinRefresh) {
        this.beforePullDown = false
        this.refreshFlag = 1

        scrollContent.style.webkitTransform = `translate3d(0, ${pulldownTop}px, 0)`
        scrollContent.style.transition = 'all 0.3s linear'
        this.$emit('pullingDown')
      } else {
        if (this.joinRefresh) {
          this.refreshFlag = 1
          this.reset()
        }
      }

      // touchend 重置默认值
      this.translateY = 0
      this.joinRefresh = null
      this.firstOffsetY = null
      removeClass(icon, 'up')
    },
    // 下拉刷新完成
    refreshEnd() {
      console.log('下拉刷新完成');
      this.beforePullDown = true
      this.isRefreshEnd = true
      this.pullDownText = ''
      this.reset()
    },
    // 下拉刷新完成重置
    reset() {
      let { scrollContent } = this.$refs
      scrollContent.style.webkitTransform = `translate3d(0, 0, 0)`
      if (!scrollContent.style.transition) {
        scrollContent.style.transition = 'all 0.3s linear'
      }
      setTimeout(() => {
        this.refreshFlag = 0
        this.isRefreshEnd = null
        this.pullDownText = '下拉刷新'
        scrollContent.style.transition = null
        // this.isHiddenFotterLoading = true; //隐藏加载框
      }, 300)
    },
    handleScroll(e) {
      const { scrollTop, offsetHeight } = e.target
      const { scrollContent } = this.$refs
      const scrollOffsetY = scrollTop || window.pageYOffset || document.body.scrollTop
      const contentHeight = scrollContent.offsetHeight

      this.$emit('onScroll', e, scrollOffsetY)

      if (contentHeight <= offsetHeight) return
      if (scrollOffsetY + offsetHeight >= contentHeight - parseInt(this.triggerHeight)) {
        // 截流，防止多次触发pullingUp
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.timer = null
          this.$emit('pullingUp', e, scrollOffsetY) // 滚动到底部加载更多
          console.log('上拉加载更多');
        }, 200)
      }
    },
    // 初始化滚动元素高度
    refresh() {
      let { scrollWrapper } = this.$refs
      scrollWrapper.style.height = window.innerHeight - parseInt(this.top) - parseInt(this.bottom) - parseInt(this.navHeight) + 'px'
      scrollWrapper.style.top = this.top + this.navHeight + 'px'
      scrollWrapper.style.bottom = this.bottom + 'px'
    },
    // 滚动到指定坐标
    scrollTo(x, y) {
      let { scrollWrapper } = this.$refs
      scrollWrapper.scrollTo(x, y)
    }
  },
  mounted() {
    this.refresh()
    let { scrollContent } = this.$refs
    scrollContent.addEventListener('touchstart', this.touchStart)
    scrollContent.addEventListener('touchmove', this.touchMove)
    scrollContent.addEventListener('touchend', this.touchEnd)
  },
  beforeDestroy() {
    let { scrollContent } = this.$refs
    scrollContent.removeEventListener('touchmove', this.touchStart)
    scrollContent.removeEventListener('touchmove', this.touchMove)
    scrollContent.removeEventListener('touchend', this.touchEnd)
  },
  watch: {
    data() {
      // 下拉刷新完成监听data改变触发
      if (this.refreshFlag === 1) {
        this.refreshEnd()
      }
    }
    // data(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    //   // 下拉刷新完成监听data改变触发
    //   if (this.refreshFlag === 1) {
    //     this.refreshEnd()
    //   }
    // }
  }
}
</script>

// <style scoped lang="less">
// <style scoped lang="less" rel="stylesheet/less">
.refresh-scroll-wrapper {
  width: 100%;
  position: absolute;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  .refresh-scroll-content {
    .refresh-top-placeholder {
      // position: fixed;
      width: 100%;
      height: 0px;
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
    }
    .refresh-pulldown {
      position: fixed;
      top: -40px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      background-color: rgba(238, 238, 238, 0.8);
      background-color: transparent;
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
      .refresh-icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .refresh-icon-xiajiantou {
          flex: 0 0 10px;
          width: 10px;
          height: 36px;
          vertical-align: middle;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABQBAMAAAD8TNiNAAAAJ1BMVEUAAACqqqplZWVnZ2doaGhqampoaGhpaWlnZ2dmZmZlZWVmZmZnZ2duD78kAAAADHRSTlMAA6CYqZOlnI+Kg/B86E+1AAAAhklEQVQ4y+2LvQ3CQAxGLSHEBSg8AAX0jECTnhFosgcjZKr8StE3VHz5EkeRMkF0rzk/P58k9rgOW78j+TE99OoeKpEbCvcPVDJ0OvsJ9bQs6Jxs26h5HCrlr9w8vi8zHphfmI0fcvO/ZXJG8wDzcvDFO2Y/AJj9ADE7gXmlxFMIyVpJ7DECzC9J2EC2ECAAAAAASUVORK5CYII=");
          background-size: 100% 100%;
          &.up {
            transform: rotate(180deg);
            transition: transform 0.4s;
            transform-origin: center center;
          }
          &.down {
            transform: rotate(0deg);
            transition: transform 0.4s;
            transform-origin: center center;
          }
        }
        .refresh-icon-text {
          color: #666;
          font-size: 16px;
          padding-left: 10px;
        }
      }
    }
    .refresh-pullup {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(238, 238, 238, 0.8);
      background-color: transparent;
      color: #666;
      font-size: 16px;
    }
    @-webkit-keyframes spinner-12 {
      0% {
        -webkit-transform: rotate(0deg);
      }

      8.333333333333332% {
        -webkit-transform: rotate(30deg);
      }

      16.666666666666664% {
        -webkit-transform: rotate(60deg);
      }

      25% {
        -webkit-transform: rotate(90deg);
      }

      33.33333333333333% {
        -webkit-transform: rotate(120deg);
      }

      41.66666666666667% {
        -webkit-transform: rotate(150deg);
      }

      50% {
        -webkit-transform: rotate(180deg);
      }

      58.333333333333336% {
        -webkit-transform: rotate(210deg);
      }

      66.66666666666666% {
        -webkit-transform: rotate(240deg);
      }

      75% {
        -webkit-transform: rotate(270deg);
      }

      83.33333333333334% {
        -webkit-transform: rotate(300deg);
      }

      91.66666666666666% {
        -webkit-transform: rotate(330deg);
      }
    }

    .refresh-loading:before {
      display: inline-block;
      width: 26px;
      height: 26px;
      content: " ";
      -webkit-animation: spinner-12 1s step-start infinite;
      vertical-align: middle;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABg1BMVEUAAAC9vcGpqayzs7bNzdGYmJuVlZjKys6bm5/Jyc2cnJ+cnJ/Kys3Ly8+cnJ/R0dWfn6PJyczDw8fIyMzR0dXIyMzExMeioqXLy8+oqKzNzdGzs7a2trmdnaCUlJevr7LHx8uXl5q2trmenqGwsLO2trqxsbWhoaSXl5qxsbS1tbmwsLSjo6eUlJe4uLucnJ+VlZjIyMzDw8eysragoKOXl5qVlZjR0dXR0dW2trqioqbCwsbR0dWjo6a2trqZmZyzs7agoKPR0dWjo6bCwsbQ0NSvr7LJyc2cnKDFxcm8vL+ZmZzOztHMzNC+vsKXl5uZmZyjo6a9vcGYmJyurrGtrbHOztK3t7ucnJ+urrGjo6fHx8uxsbTDw8etrbCkpKe4uLzBwcWxsbSbm564uLvExMjR0dWYmJuUlJiioqbNzdHDw8e7u7+oqKvIyMy3t7q1tbmwsLOurrKdnaCcnJ+pqazCwsa9vcHJyc3OztLMzNCXl5qqqq2hoaW+vsK+vsHIyMsWRiyNAAAAZnRSTlMA5uYS5uaBExMQEAwLAQH4+Pf2wYODg4BfSSAMAcHBwKqpg4KBf19fXCL49/f39fX05ubm5ubm5cTEw8G+vru4q6uqhX9+fn19WUpKSUlJSSQhHh739efl5eTkxsS3qKinpoeEWSQqdCoWAAACIElEQVQ4y7XT91faUBTA8RumEBKRLaAisrR171m3VVut3Xs3JVDCtnQI/dN783g5jDzHL35/5HzOveddTkDfA5PpIdwkUyZjgiuy7e3ZQO1XJvO7+cvBgY0B1yRpSWiHgrumuBmwV5KkQDs8rClKHwNuI1x0tKBjGmGEAYPqSE8LetWBQWDkQdgb1GCwr6b88wIrxyLKbYDn5DwRHDjt6AD2wfHhR4AF1JHawdWB5G3fIq53zStZ0un0uIXHeyxJ0hrQ3IryRsA1Plc2m93VILaQEsHq8Vg1aPV6rSAEZpCdn+/S1WnSYA90ZXVniVulf5CYWiDS0g19hM0cCqDFW6aYEJnL1/n0J8NT9/SrV12fHsOtdTr/hzR/CoxOuHq93mg0uBMwf6eZWZD7SeOugz9oHBybqTtmwSOOuiO4rfDgk/qDGzcmPnYenP8yWalURrphPJ/PT0RDoCWmXiIrl3UwWiggffE1DCT7AGHlAf3q5QKhy0ZQu0/YXFKEHr8fMUWxmBHCiVlC402IzDnCA4grF/K6BodKxbe4MhQdQxqnq51b5ONKXsjyXYB+g6Ef4FmpWEwANro5tmHsfPocwg8AhlzVAPC+VCrOhoDVjjrwDCCXq/7FQU9x5GeWO3PKsrwDGoQYjrwzyoBb6F7zLRh6hSM3GVAdmIQWhIQ6kgHXZXlFbIdhvNAQA9r9fjtQWG3efH/fCJdGz3N99OC6/gMPF6RsShfrcQAAAABJRU5ErkJggg==");
      background-size: 26px 26px;
    }
  }
}
</style>
