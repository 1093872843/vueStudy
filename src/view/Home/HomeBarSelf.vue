
<template>
<!-- 首页顶部菜单栏，要求是由全组件创建，只需要填写必要的参数集合，竟可能少的操作页面。
不得使用已有的组件模块 -->
  <div class="X-tabs-container"></div>
</template>
<script>
/*
实现目标
  1.能够进行横向和纵向的转换

*/

export default {
  //设置外部传入的数组，一个对象的集合。
  props: {
    sourceData: {
      type: Object,
      default: ()=>{}
    }, //源数据，一个含有数组
    
  },
  data() {
    return {};
  },
  created() {
    console.log('HomeBaeSelf');
  }
};
</script>
<style lang="less" scoped></style>
