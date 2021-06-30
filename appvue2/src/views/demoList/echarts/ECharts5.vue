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
      title: "渐变折线图",
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
        title: "今日温度",
        legendData: ["最高温度", "最低温度", "平均温度"],
        xData: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
          '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
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
          selected: {
            '最高温度': true,
            '最低温度': true,
            '平均温度': false
          }
        },
        xAxis: [{
          type: 'category',
          data: chartData.xData,
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [
          {
            type: 'value',
            name: '摄氏度',
            min: 0,
            max: 120,
            interval: 20,
            axisLabel: {
              formatter: '{value}'
            }
          },
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
          name: '最高温度',
          type: 'line',
          symbol: 'none', //去掉折线图中的节点
          smooth: true, //true 为平滑曲线，false为直线
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                {
                  offset: 0, color: '#6884CD' // 0% 处的颜色 
                },
                {
                  offset: 1, color: '#FFFFFF' // 100% 处的颜色
                }
              ],
            }
          },
          data: [2.8, 6.9, 8.4, 25.4, 26.7, 80.7, 78.6, 65.2, 50.7, 20.8, 10.0, 5.3, 4.6, 6.9, 10.0, 25.4, 26.7, 75.7, 80.6, 70.2, 66.7, 20.8, 8.0, 3.3]
        },
        {
          name: '最低温度',
          type: 'line',
          symbol: 'none', //去掉折线图中的节点
          smooth: true, //true 为平滑曲线，false为直线
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                {
                  offset: 0, color: '#00DEB7' // 0% 处的颜色 
                },
                {
                  offset: 1, color: '#FFFFFF' // 100% 处的颜色
                }
              ],
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 20.2, 30.3, 43.4, 33.0, 26.5, 12.0, 6.2, 2.0, 2.2, 3.3, 4.5, 6.3, 20.2, 30.3, 43.4, 33.0, 26.5, 12.0, 6.2]
        },
        {
          name: '平均温度',
          type: 'line',
          symbol: 'none', //去掉折线图中的节点
          smooth: true, //true 为平滑曲线，false为直线
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                {
                  offset: 0, color: '#fdc43c' // 0% 处的颜色 
                },
                {
                  offset: 1, color: '#FFFFFF' // 100% 处的颜色
                }
              ],
            }
          },
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 78.6, 60.2, 48.7, 18.8, 6.0, 2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 78.6, 60.2, 48.7, 18.8, 6.0, 2.3]
        }
      ];
      var chartData = {
        title: "今日温度",
        legendData: ["最高温度", "最低温度", "平均温度"],
        xData: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
          '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
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
