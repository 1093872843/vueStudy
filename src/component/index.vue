<template>
  <div class="flex-container">
    <template v-for="item in sourceData">
      <router-link :to="item.path">
        <div class="flex-item" :style="getRandomColor(item.name, item.width)">
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
          name: "百叶窗",
          icon: "",
          description: "敬请期待",
          width: "90vw",
          path: ""
        },
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
  height: 100%;
  padding: 50px 100px;
  .flex-item {
    height: 120px;
    width: 120px;
    border-radius: 10px;
    background: #000000;
    color: #ffffff;
    text-align: center;
    .item-name {
      font-size: 18px;
      line-height: 3em;
    }
    .item-desc {
    }
  }
}
</style>
