<template>
  <div class="opacity-container">
    <div class="content">
      <pre>
 
        transparent: 所有具有color的css样式都可以使用，使得元素透明
      </pre>
    </div>
    <shape1 />
    <shape2 />
    <shape3 />
    <shape4 />
  </div>
</template>

<script>
import shape1 from "./shape-weird1";
import shape2 from "./shape-weird2";
import shape3 from "./shape-weird3";
import shape4 from "./shape-weird4";
export default {
  components: {
    shape1: shape1,
    shape2: shape2,
    shape3: shape3,
    shape4: shape4
  }
};
</script>

<style lang="less">
.opacity-container {
  display: flex;
  flex-wrap: wrap;
}
.content {
  width: 100%;
  font-size: 18px;
  line-height: 1.2em;
  padding: 20px 50px;
  color: white;
  background: rgb(105, 96, 82);
}
</style>
