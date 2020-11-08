<template>
  <div class="opacity-container">
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
</style>
