//这是一个能放在任何元素下的下拉框，出现的位置根据所父级元素确定，只提供显示div位置的功能
<template>
  <div class="drop-div-container" id="drop-div"></div>
</template>
<script>
export default {};

</script>

<style lang="less" scoped>
.drop-div-container {
  width: 100px;
  height: 200px;
  background-color: black;
  position: absolute;
  // position: absolute; 当设置钙元素时。可以设置left，right元素定位位置，定位的比较元素是父组件，而不是窗口位置。
  left: 0px; //这里设置为0，否则会和button中的字体对其
  // display: none;
}
// .drop-div-container:hover {
//   background-color: red;
// }
</style>
