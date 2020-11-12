<template>
  <div class="opacity-container">
    <div class="content">
      <pre>
 
        :hover : 注意(:hover)之前与元素选择器是否有空格，比如
                 div:hover 选择的是div本身的元素
                 div :hover 选择的是div下的所有子元素，不包括div
      </pre>
    </div>
    <transition1 />
    <transition2 />
    <transition3 />
  </div>
</template>

<script>
import transition1 from "./transition-weird1";
import transition2 from "./transition-weird2";
import transition3 from "./transition-weird3";
export default {
  components: {
    transition1: transition1,
    transition2: transition2,
    transition3: transition3
  }
};
</script>

<style>
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
