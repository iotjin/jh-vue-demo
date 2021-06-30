<template>
  <div>
    <BaseNavBar :title="title"> </BaseNavBar>
    <div class="btn" @click="onClick">获取数据</div>
    <div id="myChart1" class="charts"></div>
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
  data() {
    return {
      title: "柱状图折线图混合图表",
      myChart1: null,
    };
  },
  mounted() {
    console.log("初始化");
    this.init_echarts1();
    setTimeout(() => {
      this.requestData()
    }, 1000);
  },
  methods: {
    onClick() {
      console.log();
      this.requestData();
    },
    //初始化图表
    init_echarts1() {
      var chartData = {
        title: "某地区蒸发量和降水量",
        legendData: ["蒸发量", "降水量", "平均温度"],
        xData: [
          "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月",],
        seriesData: [],
      };
      this.myChart1 = echarts.init(document.getElementById("myChart1"));
      this.myChart1.setOption(this.getOption1_Bar(chartData));
    },
    //柱状图配置
    getOption1_Bar: function (chartData) {
      var option = {
        title: {
          left: 'center',
          text: chartData.title,
        },
        color: ['#527FFD', '#00DEB7', '#FBEC4B'],
        grid: {
          left: '3%',
          right: '2%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
          // formatter: '{b0} <br/>{a0}：{c0}°C<br/>{a1}：{c1}°C<br/>{a2}：{c2}°C<br/>'
          formatter: function (params) {
            var relVal = params[0].name
            for (var i = 0, l = params.length; i < l; i++) {
              relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '°C'
            }
            return relVal
          }
        },
        legend: {
          bottom: 10,
          data: chartData.legendData,
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
        },
        xAxis: [{
          data: chartData.xData,
          axisLabel: {
            interval: 0
          }
        }],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: chartData.seriesData
      }
      return option
    },
    //网络请求
    requestData() {
      this.requestChartData1()
    },
    requestChartData1() {
      this.myChart1.showLoading()
      var dataArr = [
        {
          name: '蒸发量',
          type: 'bar',
          barGap: '0%',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          smooth: true,  //true 为平滑曲线，false为直线
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ];
      //顶部显示文字
      //   for (var i = 0; i < dataArr.length; i++) {
      //     var dic = dataArr[i];
      //     dic["label"] = {
      //       show: true, //开启显示
      //       position: "top", //在上方显示
      //       distance: i == 0 ? 5 : 10,
      //       // rotate: 15,
      //       // offset: [20, 0],
      //       formatter: function (val) {
      //         if (val.value !== 0) {
      //           return val.value;
      //         } else {
      //           return "";
      //         }
      //       },
      //       fontSize: 12,
      //       color: "black",
      //     };
      //   }
      var chartData = {
        title: "某地区蒸发量和降水量",
        legendData: ["蒸发量", "降水量", "平均温度"],
        xData: [
          "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月",
        ],
        seriesData: dataArr,
      };
      setTimeout(() => {
        this.myChart1.setOption(this.getOption1_Bar(chartData), true);
        this.myChart1.hideLoading()
      }, 2000);
    },

  },
};
</script>
