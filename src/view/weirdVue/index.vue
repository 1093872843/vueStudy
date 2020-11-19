<template>
  <div class="flex-container">
    <template v-for="item in sourceData">
      <router-link :to="item.path" :key="item.path">
        <div
          class="flex-item shadow-f01"
          :style="getRandomColor(item.name, item.width)"
        >
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
          name: "vuex",
          icon: "",
          description: "vuex",
          path: "/vue/vuex"
        },
        {
          name: "vue",
          icon: "",
          description: "vue",
          path: "/vue/self"
        },
        {
          name: "webpack",
          icon: "",
          description: "webpack",
          path: "/webpack"
        }
      ]
    };
  },
  methods: {
    getRandomColor(name, width) {
      let returnstr = "";
      let colorCode = 5412;
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
