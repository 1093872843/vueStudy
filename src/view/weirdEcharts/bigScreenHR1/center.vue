<template>
  <div class="center">
    <div class="item border-show">
      <div ref="grpDistribute" :style="{ width: '100%', height: '100%' }"></div>
    </div>
  </div>
</template>

<script>
import "./localCss.css";
import "echarts/map/js/china.js";
export default {
  data() {
    return {
      grpDistributeEchart: null,
      mapName: "china", //中国地图
      geoCoordMap: {},
      max: 480,
      min: 9, // todo
      maxSize4Pin: 100,
      minSize4Pin: 20
    };
  },
  methods: {
    setGrsOption(grpDistriData) {
      // 绘制图表
      this.grpDistributeEchart.setOption({
        // tooltip: {
        //   trigger: "item",
        //   formatter: function(params) {
        //     if (typeof params.value[2] == "undefined") {
        //       let toolTiphtml = "";
        //       for (let i = 0; i < toolTipData.length; i++) {
        //         if (params.name == toolTipData[i].name) {
        //           toolTiphtml += toolTipData[i].name + ":<br>";
        //           for (let j = 0; j < toolTipData[i].value.length; j++) {
        //             toolTiphtml +=
        //               toolTipData[i].value[j].name +
        //               ":" +
        //               toolTipData[i].value[j].value +
        //               "<br>";
        //           }
        //         }
        //       }
        //       return toolTiphtml;
        //     } else {
        //       let toolTiphtml = "";
        //       for (let i = 0; i < toolTipData.length; i++) {
        //         if (params.name == toolTipData[i].name) {
        //           toolTiphtml += toolTipData[i].name + ":<br>";
        //           for (let j = 0; j < toolTipData[i].value.length; j++) {
        //             toolTiphtml +=
        //               toolTipData[i].value[j].name +
        //               ":" +
        //               toolTipData[i].value[j].value +
        //               "<br>";
        //           }
        //         }
        //       }
        //       return toolTiphtml;
        //     }
        //   }
        // },
        visualMap: {
          show: false,
          seriesIndex: [1],
          inRange: {
            color: ["#ebebeb", "#ebebeb"] // 蓝绿
          }
        },
        geo: {
          show: true,
          map: this.mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#ebebeb",
              borderColor: "#000000"
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          }
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: this.convertData(grpDistriData),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9"
              }
            }
          },
          {
            type: "map",
            map: this.mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: false,
            data: grpDistriData
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: val => {
              let a =
                (this.maxSize4Pin - this.minSize4Pin) / (this.max - this.min);
              let b = this.minSize4Pin - a * this.min;
              b = this.maxSize4Pin - a * this.max;
              return a * val[2] + b;
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                label: {
                  color: "#F62157",
                  show: true,
                  formatter: function(params, ticket, callback) {
                    var s = params.value[2];
                    return s;
                  }
                }
              }
            },
            zlevel: 6,
            data: this.convertData(grpDistriData)
          }
        ]
      });
    },
    initEcharts() {
      this.grpDistributeEchart = this.$echarts.init(this.$refs.grpDistribute);
      var mapFeatures = this.$echarts.getMap(this.mapName).geoJson.features;
      mapFeatures.forEach(v => {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        this.geoCoordMap[name] = v.properties.cp;
      });
    },
    convertData(data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
    getData() {
      return [
        { name: "吉林", value: 82 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "福建", value: 116 },
        { name: "山东", value: 119 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "陕西", value: 80 },
        { name: "广西", value: 59 }
      ];
    }
  },
  mounted() {
    this.initEcharts();
    let grpDistriData = this.getData();
    this.setGrsOption(grpDistriData);
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
