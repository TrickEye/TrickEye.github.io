<script setup lang="ts">
import { ref } from 'vue';
import HeaderPic from '../assets/header.jpg';
import { NLayoutHeader, NH1, NSpace, NDivider, NButton, NCollapseTransition, NP, NA } from 'naive-ui';

const buttonColor = '#a2eaef'
const projButtonColor = '#4D8AFA'

function inCss(pic: string) {
  return 'url(' + pic + ')';
}

let projectChecked = ref(false);
</script>

<template>
  <n-layout-header position="absolute" bordered>
    <n-space justify="center" class="header-1">
      <n-h1 class="m0"><strong>Welcome Home! TrickEye</strong></n-h1>
    </n-space>
    <n-divider class="m0"></n-divider>
    <n-space justify="center" class="header-2">
      <n-a href="/"><n-button :color="buttonColor" style="color: black" round>Home</n-button></n-a>
      <n-a href="/#/blogs/"><n-button :color="buttonColor" style="color: black" round>Blogs</n-button></n-a>
      <n-a href="/#/about/"><n-button :color="buttonColor" style="color: black" round>Bio</n-button></n-a>
      <n-button :color="buttonColor" style="color: black" round @click="projectChecked = !projectChecked">Projects</n-button>
      <!-- <n-a href="/#/todo"><n-button :color="buttonColor" style="color: black" round>Tech</n-button></n-a> -->
    </n-space>
      <n-divider class="m0"></n-divider>
      <n-collapse-transition :show="projectChecked">
        <n-space justify="center" style="padding-top: 20px; padding-bottom: 20px;">
          <n-a href="https://trickeye.github.io/dandelion/"><n-button :color="projButtonColor" style="color: black;">Dandelion</n-button></n-a>
          <n-a href="https://trickeye.github.io/paraTeX/"><n-button :color="projButtonColor" style="color: black;">ParaTeX</n-button></n-a>
          <n-a href="https://trickeye.github.io/undefinedBehaviors/"><n-button :color="projButtonColor" style="color: black;">Undefined Behaviors</n-button></n-a>
        </n-space>
      </n-collapse-transition>
      <n-space justify="center">
        <n-p class="m0" style="
          color: aliceblue; 
          background-color: rgba(32, 32, 32, 0.5); 
          padding: 0.2em 0.5em;
          margin: 0.2em 0 0.2em;
          border-radius: 5px;
          ">2023年2月 · 云南省 泸沽湖 · <n-a style="color: aquamarine;" :href="HeaderPic">原图</n-a></n-p>
      </n-space>
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
  background-image: v-bind(inCss(HeaderPic));
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 55%;
}

.header-1 {
  height: 6em;
  align-items: center;
}

.header-2 {
  align-items: center;
  padding: 0.5rem;

  white-space: nowrap;
}
</style>