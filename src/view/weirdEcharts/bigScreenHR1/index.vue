<template>
  <div class="HR1-container">
    <div style="height:100%;width:66%">
      <topCard style="height:21%" class="child-container" />
      <div style="height:79%;display:flex">
        <leftBar style="height:100%;width:39%;" class="child-container" />
        <center style="height:100%;width:57.8%;" class="child-container" />
      </div>
    </div>
    <div style="height:100%;width:34%">
      <rightBar style="height:78%;" class="child-container" />
      <bottomCard style="height:17%;" class="child-container" />
    </div>
  </div>
</template>

<script>
import "./localCss.css";
import bottomCard from "./bottomCard.vue";
import center from "./center.vue";
import leftBar from "./leftBar.vue";
import rightBar from "./rightBar.vue";
import topCard from "./topCard.vue";
export default {
  components: {
    bottomCard: bottomCard,
    center: center,
    leftBar: leftBar,
    rightBar: rightBar,
    topCard: topCard
  }
};
</script>

<style lang="less">
.HR1-container {
  display: flex;
  padding: 1vw 1vw 1vw 2.8vw;
  width: 100vw;
  height: 48vw;
  background-color: #f7fafc;
  overflow: hidden;
}
.child-container {
  margin: 0.5vw;
}

@media only screen and (min-width: 0px) and (max-width: 700px) {
  .HR1-container {
    font-size: 6px;
  }
}
@media only screen and (min-width: 700px) and (max-width: 1000px) {
  .HR1-container {
    font-size: 9px;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1600px) {
  .HR1-container {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1600px) {
  div {
    font-size: 18px;
  }
}
</style>
