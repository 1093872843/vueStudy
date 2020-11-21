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
        type: ["M1 26%", "M2 24%", "M3 15%", "M4 10%", "M5 22%"],
        seriesData: [
          { value: 26, name: "M1 26%" },
          { value: 24, name: "M2 24%" },
          { value: 18, name: "M3 15%" },
          { value: 10, name: "M4 10%" },
          { value: 26, name: "M5 22%" }
        ]
      };
    },
    setPieOption(xData, seriesData) {
      // 绘制图表
      this.pieEcharts.setOption({
        title: {
          text: "人员职级统计",
          top: 15,
          left: 20,
          textStyle: {
            fontWeight: 600,
            fontSize: "14"
          }
        },
        tooltip: {
            trigger: 'item',
              formatter: '占有比例 <br/>{b}'
        },
        legend: {
          data: xData,
          left: 300,
          top: 80,
          textStyle: {
            fontSize: 12
          },
          icon: "circle"
        },
        series: [
          {
            name: "比例",
            type: "pie",
            data: seriesData,
            label: {
              show: false,
            },
            radius: "65%",
            center: ["30%", "60%"],
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#11eabd",
                    "#00d2e9",
                    "#23b899",
                    "#5cb3ff",
                    "#8683e7"
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
