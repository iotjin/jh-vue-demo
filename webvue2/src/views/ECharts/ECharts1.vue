<template>
  <div>
    <!-- <div>图表</div> -->
    <div id="myChart" class="charts"></div>
    <div class="btn" @click="onClick">获取数据</div>
  </div>
</template>

<style>
.charts {
  width: 100vw;
  height: 400px;
}
.btn {
  width: 100px;
  height: 30px;
  background: yellow;
}
</style>

<script>
import * as echarts from "echarts";

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      myChart: null,
    };
  },
  mounted() {
    console.log("初始化");

    // this.drawLine();
    this.init_echarts1();
  },
  methods: {
    onClick() {
      console.log();
      this.requestData();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    //初始化图表
    init_echarts1() {
      var chartData = {
        title: "某地区蒸发量和降水量",
        legendData: ["蒸发量", "降水量"],
        xData: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        seriesData: [],
      };
      this.myChart = echarts.init(document.getElementById("myChart"));
      this.myChart.setOption(this.getOption1(chartData));
    },
    //图表配置
    getOption1(chartData) {
      var option = {
        color: ["#3398DB", "#EB5E5E"],
        title: {
          left: "center",
          text: chartData ? chartData.title : "默认标题",
        },
        grid: {
          left: "3%",
          right: "2%",
          containLabel: true,
        },
        //坐标轴触发，。   'item'  , 'axis' ,'none'
        tooltip: {
          trigger: "axis",
        },
        legend: {
          bottom: 10,
          data: chartData.legendData,
        },
        xAxis: [
          {
            data: chartData.xData,
            axisLabel: {
              interval: 0,
            },
          },
        ],
        yAxis: {},
        series: chartData.seriesData,
      };
      return option;
    },

    requestData() {
      var dataArr = [
        {
          name: "蒸发量",
          data: [
            2.0,
            4.9,
            7.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            6.4,
            3.3,
          ],
        },
        {
          name: "降水量",
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3,
          ],
        },
      ];
      for (var i = 0; i < dataArr.length; i++) {
        var dic = dataArr[i];
        dic["type"] = "bar";
        dic["label"] = {
          show: true, //开启显示
          position: "top", //在上方显示
          distance: i == 0 ? 5 : 10,
          // rotate: 15,
          // offset: [20, 0],
          formatter: function(val) {
            if (val.value !== 0) {
              return val.value;
            } else {
              return "";
            }
          },
          fontSize: 12,
          color: "black",
        };
      }
      var chartData = {
        title: "某地区蒸发量和降水量",
        legendData: ["蒸发量", "降水量"],
        xData: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        seriesData: dataArr,
      };

      this.myChart.setOption(this.getOption1(chartData), true);
    },
  },
};
</script>
