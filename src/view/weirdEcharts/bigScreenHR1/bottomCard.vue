<template>
  <div class="bottomCard">
    <template v-for="item in sourceData">
      <div class="card-item border-show" :key="item.descprition">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-num">
          {{ item.total }}
          <div class="item-unit">个</div>
        </div>
        <div class="item-desc">{{ item.descprition }}</div>
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
          title: "已售车位数",
          descprition: `车位货值:${232.17}亿`,
          total: `${321892}`
        },
        {
          title: "未售车位数",
          descprition: `车位货值:${169.53}亿`,
          total: `${118643}`
        }
      ]
    };
  }
};
</script>

<style lang="less">
.bottomCard {
  display: flex;
  justify-content: space-between;
  .card-item {
    align-items: center;
    float: left;
    overflow-x: auto;
    width: 48%;
    height: 100%;
    text-align: center;
    background-color: #ffffffea;
    overflow: hidden;
    .item-title {
      font-size: 1em;
      font-weight: 500;
      color: black;
      padding: 8% 10% 1%;
      text-align: left;
    }
    .item-num {
      font-size: 1.7em;
      font-weight: 600;
      color: red;
      padding: 4% 0 0%;
      .item-unit {
        display: inline-block;
        line-height: 0.3em;
        font-size: 0.5em;
        color: #a19a9a;
        font-weight: 400;
        margin: 0% 0% 4% 3%;
      }
    }
    .item-desc {
      font-size: 0.8em;
      font-weight: 600;
      color: #a19a9a;
    }
  }
}
</style>
