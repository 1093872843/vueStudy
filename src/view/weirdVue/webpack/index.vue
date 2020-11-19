<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <span class="iconfont icon-fanhui route-icon" @click="goBack"></span>
    </a-layout-header>
    <a-layout style="height:100vh">
      <a-layout-sider width="200" class="scroll-hide">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title">介绍</span>
            <a-menu-item
              key="/vue/self/introduce"
              @click="toDetail('/webpack/introduce')"
            >
              webpack介绍
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">核心概念</span>
            <a-menu-item key="4" @click="toDetail('/vue/webpack/1')">
              1
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px;height:100%">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
            height: '100%'
          }"
        >
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  methods: {
    goBack() {
     this.$router.push('/vue');
    },
    toDetail(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
.scroll-hide {
  overflow: hidden;
}
.scroll-hide:hover {
  overflow-y: auto;
}

.route-icon {
  color: #868383;
  font-size: 2em;
  transition: 0.2s;
  -webkit-transition: 0.2s; /* Safari */
}
.route-icon:hover {
  cursor: pointer;
  color: aliceblue;
  transition: 0.2s;
  -webkit-transition: 0.2s; /* Safari */
}
</style>
