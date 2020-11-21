<template>
  <div class="leftBar">
    <div class="item border-show" style="height:32%">
      <div class="left-title">
        人员
        <div class="item-btn">
          <a-radio-group
            default-value="day"
            button-style="solid"
            size="small"
            @change="e => refrash(e.target.value, personAreaEchart, null)"
          >
            <a-radio-button value="day">
              日
            </a-radio-button>
            <a-radio-button value="month">
              月
            </a-radio-button>
            <a-radio-button value="year">
              年
            </a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <div ref="personArea" :style="{ width: '100%', height: '100%' }"></div>
    </div>
    <div class="item border-show" style="height:32%">
      <div class="left-title">
        组织
        <div class="item-btn">
          <a-radio-group
            default-value="day"
            button-style="solid"
            size="small"
            @change="e => refrash(e.target.value, orgAreaEchart, null)"
          >
            <a-radio-button value="day">
              日
            </a-radio-button>
            <a-radio-button value="month">
              月
            </a-radio-button>
            <a-radio-button value="year">
              年
            </a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <div ref="orgArea" :style="{ width: '100%', height: '100%' }"></div>
    </div>
    <div class="item border-show" style="height:31%">
      <div class="left-title">
        岗位
        <div class="item-btn">
          <a-radio-group
            default-value="day"
            button-style="solid"
            size="small"
            @change="e => refrash(e.target.value, jobAreaEchart, null)"
          >
            <a-radio-button value="day">
              日
            </a-radio-button>
            <a-radio-button value="month">
              月
            </a-radio-button>
            <a-radio-button value="year">
              年
            </a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <div ref="jobArea" :style="{ width: '100%', height: '100%' }"></div>
    </div>
  </div>
</template>

<script>
import "./localCss.css";
export default {
  data() {
    return {
      personAreaEchart: null,
      orgAreaEchart: null,
      jobAreaEchart: null
    };
  },
  methods: {
    setBarOption(echart, xData, yData, seriesData) {
      if (!echart) {
        console.log("echart实例获取失败");
        return;
      }
      // 绘制图表
      echart.setOption({
        grid: {
          x: 120,
          y: 20
        },
        height: "58%",
        tooltip: {},
        xAxis: [
          {
            data: xData,
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: "13"
              },
              margin: 20
            },

            splitLine: {
              lineStyle: {
                type: "dashed",
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
                fontSize: "13"
              }
            }
          }
        ],
        series: {
          type: "bar",
          data: seriesData,
          barMinWidth: 18,
          barMaxWidth: 18,

          itemStyle: {
            //上方显示数值
            normal: {
              label: {
                show: true, //开启显示
                position: "inside",
                textStyle: {
                  //数值样式
                  fontSize: 13
                }
              },
              color: function(params) {
                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                var colorList = [
                  "#2ec18a",
                  "#fe9427",
                  "#2d7af5",
                ];
                return colorList[params.dataIndex%3];
              }
            }
          }
        }
      });
    },
    initEcharts() {
      this.personAreaEchart = this.$echarts.init(this.$refs.personArea);
      this.orgAreaEchart = this.$echarts.init(this.$refs.orgArea);
      this.jobAreaEchart = this.$echarts.init(this.$refs.jobArea);
    },
    getData1() {
      return {
        y: ["人员总数", "新增人员总数", "变更人员总数"],
        x: null,
        seriesData: [2896, 952, 1385]
      };
    },
    getData2() {
      return {
        y: ["组织总数", "组织新增人员总数", "组织变更人员总数"],
        x: null,
        seriesData: [108, 526, 33]
      };
      19;
    },
    getData3() {
      return {
        y: ["岗位总数", "新增岗位总数", "变更岗位总数"],
        x: null,
        seriesData: [312, 144, 80]
      };
    },
    refrash(target, echarts, data) {
      this.setBarOption(echarts, data.x, data.y, data.seriesData);
    }
  },
  mounted() {
    this.initEcharts();
    let personAreaData = this.getData1();
    this.setBarOption(
      this.personAreaEchart,
      personAreaData.x,
      personAreaData.y,
      personAreaData.seriesData
    );
    let orgAreaData = this.getData2();
    this.setBarOption(
      this.orgAreaEchart,
      orgAreaData.x,
      orgAreaData.y,
      orgAreaData.seriesData
    );
    let jobAreaData = this.getData3();
    this.setBarOption(
      this.jobAreaEchart,
      jobAreaData.x,
      jobAreaData.y,
      jobAreaData.seriesData
    );
  }
};
</script>

<style lang="less">
.leftBar {
  overflow: hidden;
  .item {
    width: 100%;
    background-color: #ffffffea;
    overflow: hidden;
    margin-bottom: 1vw;
  }
  .left-title {
    width: 100%;
    font-size: 0.8em;
    font-weight: 900;
    background-color: #ffffffea;
    border-bottom: 1px solid #d8d6d6;
    padding: 3% 5%;
  }
  .item-btn {
    width: 30%;
    height: 60%;
    float: right;
    text-align: center;
    padding: 0% 2%;
  }
}
</style>
