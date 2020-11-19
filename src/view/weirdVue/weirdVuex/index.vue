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
              key="/vue/vuex/introduce"
              @click="toDetail('/vue/vuex/introduce')"
            >
              vuex介绍
            </a-menu-item>
            <a-menu-item key="2" @click="toDetail('/vue/vuex/introduce')">
              安装
            </a-menu-item>
            <a-menu-item key="3" @click="toDetail('/vue/vuex/introduce')">
              开始
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">核心概念</span>
            <a-menu-item key="4" @click="toDetail">
              state
            </a-menu-item>
            <a-menu-item key="5" @click="toDetail('/vue/vuex/introduce')">
              Getter
            </a-menu-item>
            <a-menu-item key="6" @click="toDetail('/vue/vuex/introduce')">
              Mutation
            </a-menu-item>
            <a-menu-item key="7" @click="toDetail('/vue/vuex/introduce')">
              Actions
            </a-menu-item>
            <a-menu-item key="8" @click="toDetail('/vue/vuex/introduce')">
              Modules
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">进阶</span>
            <a-menu-item key="9" @click="toDetail('/vue/vuex/introduce')">
              项目结构
            </a-menu-item>
            <a-menu-item key="10" @click="toDetail('/vue/vuex/introduce')">
              插件
            </a-menu-item>
            <a-menu-item key="11" @click="toDetail('/vue/vuex/introduce')">
              严格模式
            </a-menu-item>
            <a-menu-item key="12" @click="toDetail('/vue/vuex/introduce')">
              测试
            </a-menu-item>
            <a-menu-item key="13" @click="toDetail('/vue/vuex/introduce')">
              热重载
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
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
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
  transition: .2s;
  -webkit-transition: .2s; /* Safari */
}
.route-icon:hover {
  cursor: pointer;
  color: aliceblue;
  transition: .2s;
  -webkit-transition: .2s; /* Safari */
}
</style>
