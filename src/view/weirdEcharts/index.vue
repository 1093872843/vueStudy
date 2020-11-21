<template>
  <div class="flex-container">
    <template v-for="item in sourceData">
      <div
        class="flex-item shadow-f01"
        :style="getRandomColor(item.name, item.width)"
        :key="item.path"
        @click="todetail(item.path)"
      >
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.description }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceData: [
        {
          name: "BigScreen",
          icon: "",
          description: "酷炫大屏，不想进来看看嘛？",
          width: "100%",
          path: "/echarts/BS_HR1"
        },
        {
          name: "BigScreen",
          icon: "",
          description: "酷炫大屏，不想进来看看嘛？",
          width: "100%",
          path: "/echarts/BS_HR2"
        }
      ]
    };
  },
  methods: {
    todetail(path) {
      this.$router.push(path);
    },
    getRandomColor(name, width) {
      let returnstr = "";
      let colorCode = 5387;
      for (let i = name.length - 1; i > -1; i--) {
        colorCode += (colorCode << 5) + name.charCodeAt(i);
      }
      colorCode = (colorCode + "000000").slice(0, 6);
      returnstr += "background: #" + colorCode + ";";
      if (width) {
        returnstr += "width: " + width + ";";
      }
      return returnstr;
    }
  }
};
</script>

<style lang="less" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  height: 100%;
  width: 100vw;
  padding: 50px 100px;
  background-image: url("../../assets/bgImg/blueStar.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .flex-item {
    height: 120px;
    width: 120px;
    border-radius: 10px;
    margin: 20px 0px;
    color: #ffffff;
    text-align: center;
    transition: 0.35s;
    .item-name {
      font-size: 18px;
      line-height: 3em;
      transition: 0.3s;
    }
  }
}

.shadow-f01:hover {
  transform: scale(1.05);
  -ms-transform: scale(1.05); /* IE 9 */
  -moz-transform: scale(1.05); /* Firefox */
  -webkit-transform: scale(1.05); /* Safari 和 Chrome */
  -o-transform: scale(1.05); /* Opera */
  box-shadow: 0px 4px 15px 7px rgba(170, 165, 165, 0.3);
  transition: 0.5s;
}

.shadow-f01 {
  transition: 0.35s;
  box-shadow: 0px 2px 2px 2px rgba(177, 174, 174, 0.1);
}
</style>
