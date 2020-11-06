<template>
  <div class="test-container">
    <div class="flex-div">
      <div class="x-drop"></div>
    </div>
    <div class="flex-code">
      <div>
        这是一段过渡动画，鼠标移上去，div将出现选中效果。
        <pre>
          .flex-div {
            width: 50%;
            position: absolute;
            padding: 14% 20%;
            .x-drop {
              width: 50px;
              height: 50px;
              transition: 0.2s;
              background: white;
              border-radius: 100px;
              -webkit-transition: 0.2s; /* Safari */
            }
          }
          .flex-div:hover {
            .x-drop {
              width: 50px;
              height: 50px;
              box-shadow:
                  0 0 60px 30px #fff,  /* inner white */
                  0 0 100px 60px #f0f, /* middle magenta */
                  0 0 140px 90px #0ff; /* outer cyan */
              background:white;
              -webkit-transition: 0.3s; /* Safari */
            }
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
.test-container {
  height: 400px;
  background: black;
  width: 50%;
  padding: 10px 10px;
  position: relative;
}
//注意，transition过渡效果与display是冲突的，因为display:none会使元素不存在，transition不能够对不存在的元素过渡
.flex-div {
  width: 50%;
  position: absolute;
  padding: 14% 20%;
  .x-drop {
    width: 50px;
    height: 50px;
    transition: 0.2s;
    background: white;
    border-radius: 100px;
    -webkit-transition: 0.2s; /* Safari */
  }
}
.flex-div:hover {
  .x-drop {
    width: 50px;
    height: 50px;
    box-shadow: 0 0 60px 30px #fff, /* inner white */ 0 0 100px 60px #f0f,
      /* middle magenta */ 0 0 140px 90px #0ff; /* outer cyan */
    background: white;
    -webkit-transition: 0.3s; /* Safari */
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
  width: 50%;
}
</style>
