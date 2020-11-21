<template>
  <div class="leftPie border-show">
    <div ref="pieEcharts" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieEcharts: null
    };
  },
  methods: {
    initEcharts() {
      this.pieEcharts = this.$echarts.init(this.$refs.pieEcharts);
    },
    getData() {
      return {
        type: [
          "集团 6%",
          "园林 12%",
          "建筑 15%",
          "物业 8%",
          "材料 6%",
          "营销 2%",
          "地产 12%",
          "监事 8%",
          "小贷 15%",
          "监理 12%"
        ],
        seriesData: [
          { value: 6, name: "集团 6%" },
          { value: 12, name: "园林 12%" },
          { value: 15, name: "建筑 15%" },
          { value: 8, name: "物业 8%" },
          { value: 6, name: "材料 6%" },
          { value: 2, name: "营销 2%" },
          { value: 12, name: "地产 12%" },
          { value: 8, name: "监事 8%" },
          { value: 15, name: "小贷 15%" },
          { value: 12, name: "监理 12%" }
        ]
      };
    },
    setPieOption(xData, seriesData) {
      // 绘制图表
      this.pieEcharts.setOption({
        title: {
          text: "人员线条分布占比",
          top: 15,
          left: 20,
          textStyle: {
            fontWeight: 600,
            fontSize: "14"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "占有比例 <br/>{b}"
        },
        legend: {
          data: xData,
          left: 400,
          top: 70,
          height:"65%",
          textStyle: {
            fontSize: 12,
            padding: [0, 100, 0, 0]
          },
          itemGap: 20,
          orient: "vertical",
          icon: "circle"
        },
        series: [
          {
            name: "比例",
            type: "pie",
            data: seriesData,
            label: {
              show: false
            },
            radius: ["30%", "70%"],
            center: ["25%", "50%"],
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#23b899",
                    "#11eabd",
                    "#8683e7",
                    "#2599ff",
                    "#4a4ecd",
                    "#1116a8",
                    "#00d2e9",
                    "#0019f6",
                    "#2d7af5"
                  ];
                  return colorList[params.dataIndex % colorList.length];
                }
              }
            }
          }
        ]
      });
    }
  },
  mounted() {
    this.initEcharts();
    let allAreaData = this.getData();
    this.setPieOption(allAreaData.type, allAreaData.seriesData);
  }
};
</script>

<style>
.leftPie {
  overflow: hidden;
  height: 100%;
  background-color: #ffffffea;
}
</style>
