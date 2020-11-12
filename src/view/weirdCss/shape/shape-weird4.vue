<template>
  <div class="test-container">
    三角形
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
      <pre>
  .x-drop {
    position: relative;
    width: 60px;
    padding: 60px;
  }
  .x-drop::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: perspective(20px) scaleY(1.3) rotateX(5deg);
    transform-origin: bottom;
    background: yellowgreen;
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
  position: absolute;
  padding: 10% 20%;
  .x-drop {
    position: relative;
    width: 60px;
    padding: 60px;
  }
  .x-drop::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: perspective(20px) scaleY(1.3) rotateX(5deg);
    transform-origin: bottom;
    background: yellowgreen;
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
