<template>
  <div class="test-container">
    <div class="flex-div">
      <button>过渡</button>
      <div class="x-drop"></div>
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
}
//注意，transition过渡效果与display是冲突的，因为display:none会使元素不存在，transition不能够对不存在的元素过渡
.flex-div {
  .x-drop {
    width: 0px;
    height: 300px;
    opacity: 0.1;
    transition: 2s;
    background: black;
    -webkit-transition: 2s; /* Safari */
  }
}
.flex-div:hover {
  .x-drop {
    width: 300px;
    height: 300px;
    transition: 2s;
    opacity: 0.9;
    background: black;
    -webkit-transition: 2s; /* Safari */
  }
}
</style>
