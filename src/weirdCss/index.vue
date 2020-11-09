<template>
  <div class="flex-container">
    <template v-for="item in sourceData">
      <router-link :to="item.path">
        <div class="flex-item shadow-f01" :style="getRandomColor(item.name, item.width)">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-desc">{{ item.description }}</div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceData: [
        {
          name: "交互",
          icon: "",
          description: "哦~老铁，你想成为魔法师吗？",
          width: "90vw",
          path: "/css/wired/dynamicStyle"
        },
        {
          name: "丰富的CSS图形",
          icon: "",
          description: "你想要个苹果还是peach？",
          width: "90vw",
          path: "/css/wired/staticStyle"
        },
        {
          name: "transition",
          icon: "",
          description: "过渡",
          path: "/css/wired/transitionIndex"
        },
        {
          name: "box-shadow",
          icon: "",
          description: "阴影",
          path: "/css/wired/boxShadowIndex"
        },
        {
          name: "shape",
          icon: "",
          description: "形状",
          path: "/css/wired/shapeIndex"
        },
        {
          name: "animo",
          icon: "",
          description: "关键帧",
          path: "/css/wired/opacity01"
        }
      ]
    };
  },
  methods: {
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
      console.log(returnstr);
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
  padding: 50px 100px;
  .flex-item {
    height: 120px;
    width: 120px;
    border-radius: 10px;
    margin: 20px 0px;
    color: #ffffff;
    text-align: center;
    transition: 0.35s;
    box-shadow: 2px 0px 2px 2px #666262;
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
  box-shadow: 0px 4px 5px 7px #666262;
  transition: 0.5s;
}

.shadow-f01 {
  transition: 0.35s;
  box-shadow: 0px 2px 2px 2px #666262;
}
</style>
