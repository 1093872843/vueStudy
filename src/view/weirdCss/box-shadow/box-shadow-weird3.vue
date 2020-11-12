<template>
  <div class="shadow-container">
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
      <div>
        测试用例。
        <pre>
          .x-drop {
            width: 50px;
            height: 50px;
            background: rgba(256, 256, 256, 0);
            border-radius: 50px;
            border:solid 1px #FFFFFF;
            box-shadow: 
            0 0 140px 90px #0ff; 
            //shadow 参数：（可选:inset） offset-x, offset-y, blur-size, spread-size, color */
            //shadow 参数：（可选:内阴影） x轴偏移, y轴偏移, 模糊程度，也就是阴影的厚度, 阴影扩展长度, 颜色 */
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
  //box-shadow允许设置多个值
  position: absolute;
  width: 70%;
  padding: 7% 31%;
  .x-drop {
    width: 50px;
    height: 50px;
    background: rgba(256, 256, 256, 0);
    border-radius: 50px;
    border: solid 1px #ffffff;
    box-shadow: 0px 0 150px 100px #0ff;
    // box-shadow:inset 0px 0 150px 100px #0ff;
    //shadow 参数：<可选:inset> offset-x, offset-y, blur-size, spread-size, color */
    //shadow 参数：<可选:内阴影> x轴偏移, y轴偏移, 模糊程度，也就是阴影的厚度, 阴影扩展长度, 颜色 */
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
