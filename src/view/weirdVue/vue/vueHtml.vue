<template>
  <div>
    <h2>&lt;keep-alive &gt;</h2>
    <div>
      有时候我们不希望组件在经过跳转或其他操作的时候被销毁，希望返回时她依旧保留上一次的状态并且
      不会重新触发created钩子，避免重复的
      创建和销毁而降低了性能。这时候可以采用&lt;keep-alive &gt;
      <div class="quote-div">
        官网解释： &lt;keep-alive &gt;
        包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和
        &lt;transition &gt; 相似， &lt;keep-alive &gt;
        是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
        当组件在&lt;keep-alive &gt;内被切换，它的 activated 和 deactivated
        这两个生命周期钩子函数将会被对应执行。 在 2.2.0
        及其更高版本中，activated 和 deactivated 将会在 &lt;keep-alive &gt;
        树内的所有嵌套组件中触发。 主要用于保留组件状态或避免重新渲染
      </div>
    </div>
    <div>
      <div class="div-button" @click="keepAliveCount++">加一</div>
      <label
        >这是定义在该子组件中的变量，证明组件是否被销毁:{{
          keepAliveCount
        }}</label
      >
    </div>

    <div>
      //代码如下
      <div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keepAliveCount: 0
    };
  }
};
</script>

<style></style>
