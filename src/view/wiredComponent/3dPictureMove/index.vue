<template>
  <div
    style="width:100vw;height100vh;overflow:hidden;position: absolute;left:-20px"
  >
    <div class="bg" ref="bg"></div>
    <div class="content" ref="content">
      <div class="person" ref="person"></div>
      <div class="codeInfo" ref="codeInfo"></div>
      <div class="house1" ref="house1"></div>
      <div class="house2" ref="house2"></div>
      <div class="chair" ref="chair"></div>
    </div>
    <pre style="height100vh;position: absolute;z-index:99;top:500px;left:1000px">
  实现原理
    1.通过绝对定位与z-index使得多个图片呈现重叠，远近效果
    2.通过监听windows的鼠标移动事件，动态更改div元素的transForm的属性

    坑点：
      1.css中的样式无法通过el.style.left获得，只能通过el.offsetLeft获得
      2.对于CSS属性的赋值，记得最后要拼接px
      3.包裹图片的div要设置大小，不然不会显示图片，图片不能撑开div。
      4.relative, 脱离文档流，可以使用top和left进行定位；
                  定位标准为父元素;
                  占有原先文档流位置,原位置不会被其他元素替换;
      5.absolute, 脱离文档流，可以使用top和left进行定位；
                  定位标准是父组件第一个使用absolute或者relative的元素，否则使用根组件定位；
                  不占有原文档流的位置，原位置会被其他元素替换;
                  多个absolute放一起，如果不写top等属性，会根据顺序依次排放，不会重叠.
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /*
      el 事件元素
      x 鼠标x
      y 鼠标 y
      变化速率
    */
    moveImg(el, x, y, rate) {
      let centerx = window.screen.width / 2;
      let centery = window.screen.height / 2;
      let targetx = (x - centerx) * rate;
      let targety = (y - centery) * rate * 0.2;
      el.style.cssText = `transform: translate3d(${targetx}px, ${targety}px, 0px)`;
    }
  },
  mounted() {
    window.onmousemove = e => {
      this.moveImg(this.$refs.person, e.clientX, e.clientY, 0.01);
      this.moveImg(this.$refs.codeInfo, e.clientX, e.clientY, 0.01);
      this.moveImg(this.$refs.house1, e.clientX, e.clientY, 0.03);
      this.moveImg(this.$refs.house2, e.clientX, e.clientY, 0.04);
      this.moveImg(this.$refs.chair, e.clientX, e.clientY, 0.015);
      this.moveImg(this.$refs.bg, e.clientX, e.clientY, 0.015);
    };
  }
};
</script>

<style lang="less">
.bg {
  z-index: -1;
  position: absolute;
  background: url("./sky.jpg");
  background-size: cover;
  height: 100vh;
  width: 110vw;
}
.content {
  z-index: 2;
  height: 100vh;
  width: 100vw;
  padding: 100px 0 0 0;
  background-color: rgba(256, 256, 256, 0);
  .person {
    position: absolute;
    background: url("./person.png") no-repeat;
    background-size: cover;
    z-index: 60;
    height: 239px;
    width: 191px;
    top: 253px;
    left: 494px;
    transform: translate3d(0, 0, 0px);
  }
  .codeInfo {
    position: absolute;
    background: url("./404.png") no-repeat;
    background-size: cover;
    height: 249px;
    width: 269px;
    top: 236px;
    left: 208px;
  }
  .house1 {
    position: absolute;
    background: url("./house1.png") no-repeat;
    background-size: cover;
    z-index: 50;
    height: 134px;
    width: 307px;
    top: 230px;
    left: 552px;
  }
  .house2 {
    position: absolute;
    background: url("./house2.png") no-repeat;
    background-size: cover;
    z-index: 50;
    height: 51px;
    width: 112px;
    top: 274px;
    left: 878px;
  }
  .chair {
    position: absolute;
    background: url("./chair.png") no-repeat;
    background-size: cover;
    height: 149px;
    width: 427px;
    top: 314px;
    left: 562px;
    z-index: 55;
  }
}
</style>
