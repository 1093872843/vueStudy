<template>
  <div class="test-container">
    <div class="flex-div">
      <button id="btnHover">
        下拉div
        <xDropdownExtraDiv class="x-drop"></xDropdownExtraDiv>
      </button>
    </div>
    <!-- <div class="flex-div">
      <span>
        下拉div
        <xDropdownExtraDiv class="x-drop"></xDropdownExtraDiv>
      </span>
    </div> -->
  </div>
</template>
<script>
import xDropdownExtraDiv from "./x-dropdown-extraDiv.vue";

export default {
  components: {
    xDropdownExtraDiv: xDropdownExtraDiv
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.test-container {
  display: flex;
  flex-direction: column;
}
//注意，过渡效果与display是冲突的，因为display:none会使元素不存在，transition不能够对不存在的元素过渡
.flex-div {
  .x-drop {
    width: 0px;
     display: block;
    opacity: 0.1;
    transition:  2s;
    -webkit-transition:  2s; /* Safari */
  }
}
.flex-div:hover {
  .x-drop {
    display: block;
    width: 500px;
    z-index: 2;
    transition:  2s;
    opacity: 0.9;
    -webkit-transition:  2s; /* Safari */
  }
}
</style>
