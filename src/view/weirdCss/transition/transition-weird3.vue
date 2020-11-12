<template>
  <div class="test-container">
    这是一段过渡动画，鼠标移上去，div将显示点击效果。
    <div class="flex-div">
      <div class="x-drop">
        <div class="x-drop-text">我会变大(✪ω✪)</div>
      </div>
    </div>
    <div class="flex-code">
      <div>
        <pre>
.flex-div {
  .x-drop {
    width: 150px;
    height: 150px;
    background: white;
    transition: 0.3s;
    -webkit-transition: 0.3s; /* Safari */
    .x-drop-text {
      text-align: center;
      font-size: 15px;
      line-height: 2em;
      transition: 0.3s;
      -webkit-transition: 0.3s; /* Safari */
    }
  }
}
.flex-div:hover {
  .x-drop {
    width: 160px;
    height: 160px;
    background: white;
    box-shadow: 0 0 10px 2px #ada8a8;
    transition: 0.4s;
    -webkit-transition: 0.4s; /* Safari */
    .x-drop-text {
      text-align: center;
      font-size: 18px;
      transition: 0.4s;
      -webkit-transition: 0.4s; /* Safari */
    }
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
  position: relative;
}
//注意，transition过渡效果与display是冲突的，因为display:none会使元素不存在，transition不能够对不存在的元素过渡
.flex-div {
  width: 50%;
  top: 120px;
  left: 120px;
  position: absolute;
  //当子元素设置了position: absolute，该元素默认以整个窗口做上角作为基准，如果父组件设置position: relative;，则以父组件作为基准
  .x-drop {
    width: 150px;
    height: 150px;
    background: white;
    transition: 0.3s;
    -webkit-transition: 0.3s; /* Safari */
    box-shadow: 0px 2px 3px 1px #a19f9f;
    .x-drop-text {
      text-align: center;
      font-size: 15px;
      line-height: 2em;
      transition: 0.3s;
      -webkit-transition: 0.3s; /* Safari */
    }
  }
}
.flex-div {
  .x-drop:hover {
    width: 160px;
    height: 160px;
    background: white;
    box-shadow: 0 8px 10px 2px #ada8a8;
    transition: 0.4s;
    -webkit-transition: 0.4s; /* Safari */
    .x-drop-text {
      text-align: center;
      font-size: 18px;
      transition: 0.4s;
      -webkit-transition: 0.4s; /* Safari */
    }
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
