<template>
  <div class="center">
    <div class="item border-show">
      <div ref="grpDistribute" :style="{ width: '100%', height: '100%' }"></div>
    </div>
  </div>
</template>

<script>
import "./localCss.css";
export default {
  data() {
    return {
      grpDistributeEchart: null
    };
  },
  methods: {
    setGrsOption(xData, yData, seriesData) {
      // 绘制图表
      this.grpDistributeEchart.setOption({
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
    initEcharts() {
      this.grpDistributeEchart = this.$echarts.init(this.$refs.grpDistribute);
    },
    getData() {
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
    let localAreaData = this.getData();
    this.setGrsOption(
      localAreaData.x,
      localAreaData.y,
      localAreaData.seriesData
    );
  }
};
</script>

<style lang="less">
.center {
  .item {
    width: 100%;
    height: 93%;
    text-align: center;
    background-color: #ffffffea;
    overflow: hidden;
  }
}
</style>
