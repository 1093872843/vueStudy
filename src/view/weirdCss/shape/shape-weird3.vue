<template>
  <div class="test-container">
    梯形或者中空
    <div class="flex-div">
      <div class="x-drop">
        <div>我能不能写点东西</div>
      </div>
    </div>
    <div class="flex-code">
      <pre>
  .x-drop {
    padding: 20px 20px;
    width: 100%;
    border-top: 50px solid red;
    border-left: 50px solid yellow;
    border-right: 50px solid black;
    border-bottom: 50px solid yellowgreen;
  }
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
  padding: 10% 0% 0% 10%;
  position: absolute;
  .x-drop {
    padding: 20px 20px;
    width: 100%;
    border-top: 50px solid red;
    border-left: 50px solid yellow;
    border-right: 50px solid black;
    border-bottom: 50px solid yellowgreen;
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
