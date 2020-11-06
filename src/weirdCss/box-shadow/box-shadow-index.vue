<template>
  <div class="box-shadow-container">
    <shadow3 />
    <shadow1 />
    <shadow2 />
  </div>
</template>

<script>
import shadow1 from "./box-shadow-weird1";
import shadow2 from "./box-shadow-weird2";
import shadow3 from "./box-shadow-weird3";
export default {
  components: {
    shadow1: shadow1,
    shadow3: shadow3,
    shadow2: shadow2,
  }
};
</script>

<style>
.box-shadow-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
