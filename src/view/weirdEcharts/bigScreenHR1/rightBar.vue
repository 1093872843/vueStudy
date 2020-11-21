<template>
  <div class="leftBar">
    <div class="item border-show" style="height:49%">
      <div ref="localArea" :style="{ width: '100%', height: '100%' }"></div>
    </div>
    <div class="item border-show" style="height:49%">
      <div ref="allArea" :style="{ width: '100%', height: '100%' }"></div>
    </div>
  </div>
</template>

<script>
import "./localCss.css";
export default {
  data() {
    return {
      allAreaEchart: null,
      localAreaEchart: null
    };
  },
  methods: {
    setBarOption1(xData, yData, seriesData) {
      // 绘制图表
      this.allAreaEchart.setOption({
        title: {
          text: "业态销售额",
          top: 20,
          left: 20,
          textStyle: {
            fontWeight: 600,
            fontSize: "16"
          }
        },
        grid: {
          x: 100,
          y: 80
        },
        tooltip: {},
        color: ["#fe9427"],
        xAxis: [
          {
            data: xData,
            interval: 1000,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#cacaca",
                fontSize: "13"
              },
              margin: 20
            },
            axisLine: {
              lineStyle: {
                color: "#cacaca"
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            }
          }
        ],
        yAxis: [
          {
            name: "亿元",
            data: yData,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#cacaca",
                fontSize: "13",
                fontWeight: 600
              }
            },
            axisLine: {
              lineStyle: {
                color: "#cacaca"
              }
            }
          }
        ],
        series: {
          type: "bar",
          data: seriesData,
          barMinWidth: 15,
          barMaxWidth: 15,
          itemStyle: {
            //上方显示数值
            normal: {
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#fe9427",
                  fontSize: 13,
                  fontWeight: 600
                }
              }
            }
          }
        }
      });
    },
    setBarOption2(xData, yData, seriesData) {
      // 绘制图表
      this.localAreaEchart.setOption({
        title: {
          text: "业态面积",
          top: 20,
          left: 20,
          textStyle: {
            fontWeight: 600,
            fontSize: "16"
          }
        },
        grid: {
          top: 90,
          left: 70
        },
        tooltip: {},
        legend: {
          data: ["已售面积", "未售面积"],
          left: 350,
          top: 50,
          textStyle: {
            color: "#cacaca",
            fontSize: 12
          },
          itemWidth: 12,
          itemHeight: 10,
          color: "#cacaca"
        },
        xAxis: [
          {
            data: xData,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#cacaca",
                fontSize: "12"
              },
              margin: 15
            },
            axisLine: {
              lineStyle: {
                color: "#cacaca"
              }
            }
          }
        ],
        yAxis: [
          {
            name: "万方",
            data: yData,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#cacaca",
                fontSize: "13",
                fontWeight: 600
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#cacaca"
              }
            }
          }
        ],
        series: [
          {
            name: "已售面积",
            type: "bar",
            stack: "总量",
            data: seriesData[0],
            barMinWidth: 15,
            barMaxWidth: 15,
            color: "#2d7af5"
          },
          {
            name: "未售面积",
            type: "bar",
            stack: "总量",
            data: seriesData[1],
            barMinWidth: 15,
            barMaxWidth: 15,
            color: "#e2e2e2"
          }
        ]
      });
    },
    initEcharts() {
      this.allAreaEchart = this.$echarts.init(this.$refs.allArea);
      this.localAreaEchart = this.$echarts.init(this.$refs.localArea);
    },
    getData1() {
      return {
        x: ["别墅", "办公", "高层", "洋房", "公寓", "商业", "其他"],
        y: null,
        seriesData: [4706.2, 1850.64, 1930.5, 1390.7]
      };
    },
    getData2() {
      return {
        x: ["别墅", "多层", "高层", "类住宅", "商业", "酒店", "办公"],
        y: null,
        seriesData: [
          [202, 526, 520, 36, 24, 184],
          [82, 20, 90, 50, 500, 40]
        ]
      };
    }
  },
  mounted() {
    this.initEcharts();
    let allAreaData = this.getData1("allAreaEchart");
    this.setBarOption1(allAreaData.x, allAreaData.y, allAreaData.seriesData);
    let localAreaData = this.getData2("localAreaEchart");
    this.setBarOption2(
      localAreaData.x,
      localAreaData.y,
      localAreaData.seriesData
    );
  }
};
</script>

<style lang="less">
.leftBar {
  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
    background-color: #ffffffea;
    overflow: hidden;
  }
}
</style>
