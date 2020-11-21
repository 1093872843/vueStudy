<template>
  <div class="leftBarHR1">
    <div class="item border-show" style="height:48%">
      <div ref="allArea" :style="{ width: '100%', height: '100%' }"></div>
    </div>
    <div class="item border-show" style="height:44.8%">
      <div ref="localArea" :style="{ width: '100%', height: '100%' }"></div>
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
          text: "整体面积情况",
          top: 20,
          left: 20,
          textStyle: {
            fontWeight: 600,
            fontSize: "16"
          }
        },
        grid: {
          x: 100,
          y: 50
        },
        tooltip: {},
        color: ["#2ec18a"],
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
          barMinWidth: 10,
          barMaxWidth: 10,
          itemStyle: {
            //上方显示数值
            normal: {
              label: {
                show: true, //开启显示
                position: "right", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#2ec18a",
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
          text: "阶段面积情况",
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
          data: ["建筑面积", "可售面积"],
          left: 250,
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
            data: yData,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#cacaca",
                fontSize: "16"
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
            name: "建筑面积",
            type: "bar",
            data: seriesData[0],
            barMinWidth: 30,
            barMaxWidth: 30,
            color: "#2d7af5"
          },
          {
            name: "可售面积",
            type: "bar",
            data: seriesData[1],
            barMinWidth: 30,
            barMaxWidth: 30,
            color: "#fe9427"
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
        x: null,
        y: ["总建筑面积", "总用地面积", "总可售面积", "总未售面积"],
        seriesData: [4706.2, 1850.64, 1930.5, 1390.7]
      };
    },
    getData2() {
      return {
        x: ["未开工", "已竣备未交付", "已交付"],
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
.leftBarHR1 {
  .item {
    background-color: #ffffffea;
    overflow: hidden;
  }
}
</style>
