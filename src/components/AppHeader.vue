<script setup lang="ts">
import HeaderPic from '../assets/header.jpg';
import { NLayoutHeader, NH1, NSpace, NDivider, NButton, NCollapseTransition, NP, NA } from 'naive-ui';
</script>

<template>
  <n-layout-header position="absolute" bordered>
    <n-space justify="center" class="header-1">
      <n-h1 class="m0"><strong>Welcome Home! TrickEye</strong></n-h1>
    </n-space>
    <n-divider class="m0"></n-divider>
    <n-space justify="center" class="header-2">
      <n-a href="/"><n-button color="#a2cacf" round>Home</n-button></n-a>
      <n-a href="/blogs"><n-button color="#a2cacf" round>Blogs</n-button></n-a>
      <n-a href="todo"><n-button color="#a2cacf" round>Bio</n-button></n-a>
      <n-a href="todo"><n-button color="#a2cacf" round>Tech</n-button></n-a>
    </n-space>
    <n-collapse-transition :show="true">
      <n-divider class="m0"></n-divider>
      <!-- <n-space justify="center">
        <n-h1 class="m0"><strong>下面的东西</strong></n-h1>
      </n-space> -->
      <n-space justify="center">
        <n-p class="m0" style="color: aliceblue;">2023年2月 · 云南省 泸沽湖 · <n-a style="color: aquamarine;" :href="HeaderPic">原图</n-a></n-p>
      </n-space>
    </n-collapse-transition>
  </n-layout-header>
</template>

<style scoped>
.m0 {
  margin: 0;
}

.n-h1 {
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.n-layout-header {
  z-index: 9999;
  background-image: v-bind("'url(' + HeaderPic + ')'");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: 55%;
}

.header-1 {
  height: 6em;
  align-items: center;
}

.header-2 {
  align-items: center;
  padding: 0.5rem;
}
</style>