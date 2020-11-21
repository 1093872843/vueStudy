<template>
  <div class="topCardHR1">
    <template v-for="item in sourceData">
      <div class="card-item border-show" :key="item.descprition">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-content">
          <div class="item-num">{{ item.total }}</div>
          <div class="item-desc">{{ item.descprition }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import "./localCss.css";
export default {
  data() {
    return {
      sourceData: [
        {
          imgUrl: require("./assets/goldDog-bg.jpg"),
          descprition: "区域总数",
          total: "9"
        },
        {
          imgUrl: require("./assets/goldDog-bg.jpg"),
          descprition: "城市总数",
          total: "16"
        },
        {
          imgUrl: require("./assets/goldDog-bg.jpg"),
          descprition: "项目总数",
          total: "98"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.topCardHR1 {
  display: flex;
    justify-content:space-between;
  .card-item {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    overflow-x: auto;
    width: 32.5%;
    height: 100%;
    text-align: center;
    background-color: #ffffffea;

    .item-img {
      width: 40%;
      display: inline-block;
      margin: 0;
    }
    .item-content {
      display: inline-block;
      width: 40%;
      height: 60%;
      .item-num {
        font-size: 3em;
        font-weight: 500;
        color: black;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      }
      .item-desc {
        font-size: 1em;
        font-weight: 500;
        line-height: 1em;
        color: #a19a9a;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      }
    }
  }
}
</style>
