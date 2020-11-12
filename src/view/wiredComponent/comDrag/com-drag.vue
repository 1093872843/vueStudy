<template>
  <div>
    <div id="dv" class="drag-target"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let dv = this.$el.children.dv;
    let x = 0;
    let y = 0;
    let l = 0;
    let t = 0;
    let isDown = false;
    //鼠标按下事件
    dv.onmousedown = function(e) {
      //获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;

      //获取左部和顶部的偏移量
      l = dv.offsetLeft;
      t = dv.offsetTop;
      //开关打开
      isDown = true;
      //设置样式
      dv.style.cursor = "move";
    };
    //鼠标移动
    document.onmousemove = function(e) {
      if (isDown == false) {
        return;
      }
      //获取x和y
      let nx = e.clientX;
      let ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      let nl = nx - (x - l);
      let nt = ny - (y - t);

      dv.style.left = nl + "px";
      dv.style.top = nt + "px";
    };
    //鼠标抬起事件
    dv.onmouseup = function() {
      //开关关闭
      isDown = false;
      dv.style.cursor = "default";
    };
  }
};
</script>
<style lang="less" scoped>
.drag-target {
  width: 200px;
  height: 200px;
  background: black;
  //注意，这个地方极其重要
  position: absolute;
}
</style>
