<template>
  <div>
    组件插件案例：https://www.jq22.com/
    <div class="flex-container">
      <template v-for="item in sourceData">
        <div class="item shadow-f01" @click="toDetail(item)" :key="item.name">
          <div class="img-container">
            <div class="item-img" :style="getRandomStyle(item.img)"></div>
          </div>
          <div class="item-content">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-desc">{{ item.description }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { SOURCE_DATA } from "./component-config";
export default {
  data() {
    return {
      sourceData: SOURCE_DATA
    };
  },
  methods: {
    toDetail(item) {
      this.$router.push(item.path);
    },
    getRandomStyle(img) {
      let returnstr = "";
      let colorCode = 5387;
      if (img) {
        returnstr += `
          background-color: rgba(0, 0, 0, 0);
          background-image: url(${img});
        `;
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
  padding: 50px 4%;
}

.item {
  margin: 10px;
  border-radius: 5% 5% 5% 5%;
  height: 200px;
  width: 200px;
  position: relative;
  //因为高斯模糊使得元素边框也模糊，所以给父元素添加overflow: hidden会隐藏这个模糊。
  overflow: hidden;
  .item-content {
    //.flex-item 的大小要和.img-container的大小一致，因为这是重合的部分。
    height: 100%;
    width: 100%;
    text-align: center;
    color: white;
    .item-name {
      font-size: 20px;
      line-height: 3em;
    }
  }
  //本质是建立两个div，一个内容，一个图片，图片进行高斯模糊并通过绝对定位与内容重合
  .img-container {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    .item-img {
      height: 100%;
      width: 100%;
      //高斯模糊
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
      filter: blur(1px);
      //no-repeat，不通过重复出现来填充整个元素
      background-repeat: no-repeat;
      background-position: center;
      //写成100%，会导致图片拉伸直到充满元素，但是图片可能会变形，cover是按比例放大到元素合适的大小，但是可能会裁剪超出的部分。
      background-size: cover;
      //通过绝对定位使图片和文字重合
      position: absolute;
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
