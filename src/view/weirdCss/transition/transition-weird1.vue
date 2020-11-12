<template>
  <div class="css-demo-container">
    <div>
      <div class="css-demo-name">
        这是一段过渡动画，鼠标移上去，div将左滑入淡入淡出。
      </div>
      <div class="css-demo-div">
        <div class="father">
            <button>摸摸我</button>
          <div class="x-drop"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="css-demo-css">
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
      <div class="css-demo-html">
        <pre></pre>
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
.x-drop {
  width: 0px;
  height: 300px;
  opacity: 0.1;
  transition: 2s;
  background: white;
  -webkit-transition: 2s; /* Safari */
}
.father:hover {
  .x-drop {
    width: 300px;
    height: 300px;
    transition: 2s;
    opacity: 0.9;
    background: white;
    -webkit-transition: 2s; /* Safari */
  }
}
</style>
