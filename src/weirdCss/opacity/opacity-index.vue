<template>
  <div class="opacity-container">
    <opacity1 />
    <opacity2 />
    <opacity3 />
  </div>
</template>

<script>
import opacity1 from "./opacity-weird1";
import opacity2 from "./opacity-weird2";
import opacity3 from "./opacity-weird3";
export default {
  components: {
    opacity1: opacity1,
    opacity2: opacity2,
    opacity3: opacity3
  }
};
</script>

<style>
.opacity-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
