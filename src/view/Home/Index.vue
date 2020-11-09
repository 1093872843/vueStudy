<template>
  <!-- 首页入口 -->
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <template v-for="barItem in BAR_CONFIG">
          <a-menu-item :key="barItem.path">
            <router-link :to="barItem.path">
              {{ barItem.name }}
            </router-link>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <!-- <a-layout-sider width="200" style="background: #fff" v-if="sideType">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />subnav 1</span>
            <a-menu-item key="1">
              option1
            </a-menu-item>
            <a-menu-item key="2">
              option2
            </a-menu-item>
            <a-menu-item key="3">
              option3
            </a-menu-item>
            <a-menu-item key="4">
              option4
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider> -->
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px'
          }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { BAR_CONFIG } from "./barConfig";
export default {
  data() {
    return {
      collapsed: false,
      sideType: null,
      BAR_CONFIG: BAR_CONFIG
    };
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
