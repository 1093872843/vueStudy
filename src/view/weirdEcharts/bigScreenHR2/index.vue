<template>
  <div class="HR2-container">
    <div style="height:100%;width:27%">
      <leftCard style="height:67%;" class="child-container" />
      <leftPie style="height:31%;" class="child-container" />
    </div>
    <div style="height:100%;width:50%">
      <centerBar style="height:67%;" class="child-container" />
      <centerPie style="height:31%;" class="child-container" />
    </div>
    <div style="height:100%;width:30%">
      <rightBar style="height:100%;" class="child-container" />
    </div>
  </div>
</template>

<script>
import "./localCss.css";
import centerBar from "./centerBar";
import centerPie from "./centerPie";
import leftCard from "./leftCard";
import leftPie from "./leftPie";
import rightBar from "./rightBar";
export default {
  components: {
    centerBar: centerBar,
    centerPie: centerPie,
    leftCard: leftCard,
    leftPie: leftPie,
    rightBar: rightBar
  }
};
</script>

<style lang="less">
.HR2-container {
  display: flex;
  padding: 1vw 1vw 1vw 2.1vw;
  width: 100vw;
  height: 48vw;
  background-color: #f7fafc;
  overflow: hidden;
}
.child-container {
  margin: 0.5vw;
}

@media only screen and (min-width: 0px) and (max-width: 700px) {
  .HR2-container {
    font-size: 6px;
  }
}
@media only screen and (min-width: 700px) and (max-width: 1000px) {
  .HR2-container {
    font-size: 9px;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1600px) {
  .HR2-container {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1600px) {
  div {
    font-size: 18px;
  }
}
</style>
