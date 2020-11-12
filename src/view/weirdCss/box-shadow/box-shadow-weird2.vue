<template>
  <div class="shadow-container">
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
      <div>
        内阴影效果。通过设置五层inset光晕大小，颜色不同的阴影，
        三层外阴影。
        <pre>
          .x-drop {
            width: 200px;
            height: 200px;
            border-radius: 200px;
            box-shadow: 
            inset 0 0 50px #fff, 
            inset 20px 0 80px #f0f,
            inset -20px 0 80px #0ff, 
            inset 20px 0 300px #f0f, 
            inset -20px 0 300px #0ff,
            0 0 50px #fff,
            -10px 0 80px #f0f,
            10px 0 80px #0ff;
            background: white;
          }
        </pre>
      </div>
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
.shadow-container {
  height: 400px;
  background: black;
  width: 100%;
  position: relative;
}
.flex-div {
  //当子元素设置了position: absolute，该元素默认以整个窗口做上角作为基准，如果父组件设置position: relative;，则以父组件作为基准
  position: absolute;
  width: 70%;
  padding: 5% 28%;
  .x-drop {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
      0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
    background: white;
  }
}
.flex-code {
  float: right;
  overflow-y: auto;
  word-wrap: break-word;
  z-index: 2;
  color: white;
  font-size: 18px;
  height: 100%;
  width: 30%;
}
</style>
