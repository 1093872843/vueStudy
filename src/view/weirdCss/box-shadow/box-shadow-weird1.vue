<template>
  <div class="shadow-container">
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
      <div>
        外阴影效果。通过设置三层光晕大小，颜色不同的阴影实现。
        <pre>
            .x-drop {
              width: 50px;
              height: 50px;
              border-radius: 50px;
              box-shadow:
              0 0 60px 30px #fff, /* inner white */
              0 0 100px 60px #f0f,/* middle magenta */
              0 0 140px 90px #0ff; /* outer cyan */
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
  padding: 7% 31%;
  .x-drop {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0 0 60px 30px #fff, /* inner white */ 0 0 100px 60px #f0f,
      /* middle magenta */ 0 0 140px 90px #0ff; /* outer cyan */
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
