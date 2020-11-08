<template>
  <div class="test-container">
    三角形
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
      <pre>
  .x-drop {
    width: 0;
    height: 0;
    border-left:
      50px solid transparent;
    border-right: 
      50px solid transparent;
    border-bottom: 
      100px solid yellowgreen;
  }
  根据布局样式盒可知。边框的连接处并非直线，而是斜线，
  所以，内容为0，边框不为0的样式下，就会呈现三角形。
          </pre
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.test-container {
  height: 400px;
  background: blanchedalmond;
  width: 50%;
  position: relative;
}
.flex-div {
  width: 50%;
  position: absolute;
  padding: 10% 20%;
  .x-drop {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid yellowgreen;
  }
}
.flex-code {
  float: right;
  overflow: auto;
  word-wrap: break-word;
  z-index: 2;
  font-size: 18px;
  height: 100%;
  width: 50%;
}
pre {
  height: 100%;
}
</style>
