<template>
  <div class="test-container">
    切角
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
        <pre>
  .x-drop {
   width: 40px;
    height: 40px;
    padding: 40px;
    background: 
        linear-gradient(135deg, transparent 15px, yellowgreen 0) top left,
        linear-gradient(-135deg, transparent 15px, yellowgreen 0) top right,
        linear-gradient(-45deg, transparent 15px, yellowgreen 0) bottom right,
        linear-gradient(45deg, transparent 15px, yellowgreen 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
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
    width: 40px;
    height: 40px;
    padding: 40px;
    background: linear-gradient(135deg, transparent 15px, yellowgreen 0) top
        left,
      linear-gradient(-135deg, transparent 15px, yellowgreen 0) top right,
      linear-gradient(-45deg, transparent 15px, yellowgreen 0) bottom right,
      linear-gradient(45deg, transparent 15px, yellowgreen 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
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
pre{
  height: 100%;
}
</style>
