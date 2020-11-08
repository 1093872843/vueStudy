<template>
  <div class="test-container">
    <div class="flex-div">
      这是一段过渡动画，鼠标移上去，div将左滑入淡入淡出。
      <div class="x-drop">
        <div class="x-drop">点我</div>
      </div>
    </div>
    <div class="flex-code">
      <div>
        <pre>
.flex-div {
  .x-drop {
    width: 0px;
    height: 300px;
    opacity: 0.1;
    transition: 2s;
    background: white;
    -webkit-transition: 2s; /* Safari */
  }
}
.flex-div:hover {
  .x-drop {
    width: 300px;
    height: 300px;
    transition: 2s;
    opacity: 0.9;
    background: white;
    -webkit-transition: 2s; /* Safari */
  }
}
          </pre
        >
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
.test-container {
  height: 400px;
  background: blanchedalmond;
  width: 50%;
  padding: 10px 10px;
  position: relative;
}
//注意，transition过渡效果与display是冲突的，因为display:none会使元素不存在，transition不能够对不存在的元素过渡
.flex-div {
  width: 50%;
  //当子元素设置了position: absolute，该元素默认以整个窗口做上角作为基准，如果父组件设置position: relative;，则以父组件作为基准
  position: absolute;
  .x-drop {
    width: 0px;
    height: 300px;
    opacity: 0.1;
    transition: 2s;
    background: white;
    -webkit-transition: 2s; /* Safari */
  }
}
.flex-div:hover {
  .x-drop {
    width: 300px;
    height: 300px;
    transition: 2s;
    opacity: 0.9;
    background: white;
    -webkit-transition: 2s; /* Safari */
  }
}
.flex-code {
  float: right;
  overflow-y: auto;
  word-wrap: break-word;
  z-index: 2;
  font-size: 18px;
  height: 100%;
  width: 50%;
}
</style>
