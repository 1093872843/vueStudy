<template>
  <div class="flex-container">
    <template v-for="item in sourceData">
      <router-link :to="item.path">
        <div class="flex-item" :style="getRandomColor(item.name)">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-desc">{{ item.discription }}</div>
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
          name: "transition",
          icon: "",
          discription: "过渡",
          path: "/css/wired/opacityIndex"
        },
        {
          name: "box-shadow",
          icon: "",
          discription: "阴影",
          path: "/css/wired/boxShadowIndex"
        },
        {
          name: "animo",
          icon: "",
          discription: "关键帧",
          path: "/css/wired/opacity01"
        }
      ]
    };
  },
  methods: {
    getRandomColor(name) {
      let colorCode =
        name.charCodeAt(0) + name.charCodeAt(1) + name.charCodeAt(2);
      colorCode = (colorCode + "000000").slice(0, 6);
      return "background: #" + colorCode;
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
