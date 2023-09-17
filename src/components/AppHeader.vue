<script setup lang="ts">
import { ref } from 'vue';
import HeaderPic from '../assets/header.jpg';
import { NLayoutHeader, NH1, NSpace, NButton, NCollapseTransition, NP, NA, NIcon, NDrawer, NDrawerContent, NList, NListItem } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { MdMenu } from '@vicons/ionicons4'

const buttonColor = '#a2eaef'
const projButtonColor = '#4D8AFA'

function inCss(pic: string) {
  return 'url(' + pic + ')';
}

let projectChecked = ref(false);
let showDrawer = ref(false);
</script>

<template>
  <n-layout-header position="absolute" bordered>
    <n-space justify="center" class="header-1 wide-only">
      <n-h1 class="m0" style="color: white;"><strong>Welcome Home! TrickEye</strong></n-h1>
    </n-space>
    <n-space class="header-1 narrow-only">
      <n-button circle quaternary @click="showDrawer=!showDrawer" style="margin-left: 20px;" size="large"><n-icon size="30" color="#fff"><MdMenu/></n-icon></n-button>
      <n-drawer v-model:show="showDrawer" placement="top" style="z-index: 200; padding-top: 20px;" height="50vh">
        <n-drawer-content title="Welcome Home! TrickEye">
          <n-list hoverable show-divider>
            <router-link to="/"><n-list-item>Home</n-list-item></router-link>
            <router-link to="/blogs/"><n-list-item>Blogs</n-list-item></router-link>
            <router-link to="/about/"><n-list-item>Bio</n-list-item></router-link>
            <n-list-item @click="projectChecked=!projectChecked" style="cursor: pointer;">Projects</n-list-item>
            <n-collapse-transition v-show="projectChecked">
              <n-list clickable hoverable style="padding-left: 2em;">
                <n-a href="https://trickeye.github.io/dandelion/"><n-list-item>Dandelion</n-list-item></n-a>
                <n-a href="https://trickeye.github.io/paraTeX/"><n-list-item>ParaTeX</n-list-item></n-a>
                <n-a href="https://trickeye.github.io/undefinedBehaviors/"><n-list-item>Undefined Behaviors</n-list-item></n-a>
              </n-list>
            </n-collapse-transition>
          </n-list>
        </n-drawer-content>
      </n-drawer>
      <n-h1 class="m0" style="color: white; font-size: x-large;"><strong>Welcome Home! TrickEye</strong></n-h1>
    </n-space>
    <n-space justify="center" class="header-2 wide-only">
      <div class="header-2-button-container">
        <router-link to="/"><n-button :color="buttonColor" style="color: black" round>Home</n-button></router-link>
        <router-link to="/blogs/"><n-button :color="buttonColor" style="color: black" round>Blogs</n-button></router-link>
        <router-link to="/about/"><n-button :color="buttonColor" style="color: black" round>Bio</n-button></router-link>
        <n-button :color="buttonColor" style="color: black" round @click="projectChecked=!projectChecked">Projects</n-button>
      </div>
    </n-space>
    <n-collapse-transition :show="projectChecked" class="wide-only">
      <n-space justify="center" style="padding-top: 20px; padding-bottom: 20px;">
        <n-a href="https://trickeye.github.io/dandelion/"><n-button :color="projButtonColor" style="color: black;">Dandelion</n-button></n-a>
        <n-a href="https://trickeye.github.io/paraTeX/"><n-button :color="projButtonColor" style="color: black;">ParaTeX</n-button></n-a>
        <n-a href="https://trickeye.github.io/undefinedBehaviors/"><n-button :color="projButtonColor" style="color: black;">Undefined Behaviors</n-button></n-a>
      </n-space>
    </n-collapse-transition>
    <n-space justify="center" class="wide-only">
      <n-p class="m0" style="
        color: aliceblue; 
        backdrop-filter: blur(5px);
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
  text-shadow: 2px 2px 10px rgba(128, 128, 128, 0.7);
}

.n-layout-header {
  z-index: 100;
  background-image: v-bind(inCss(HeaderPic));
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 55%;
  > * {
    backdrop-filter: blur(2px);
  }
}

.header-1 {
  height: 4em;
  align-items: center;
}

.header-2 {
  align-items: center;
  padding: 0.5rem;

  white-space: nowrap;
}

.header-2-button-container {
  backdrop-filter: blur(5px);
  > * {
    margin-left: 5px;
    margin-right: 5px;
  }
}

.router-link-active {
  > .n-button {
    background-color: white;
  }

  > .n-list-item {
    font-weight: bold;
    text-decoration: none !important;
    background-color: lightgray;
  }
}

@media (max-width: 1200px) {
  .wide-only {
    display: none !important;
  }

  .header-1 {
    height: 5em;
    text-align: start;
  }
}

@media (min-width: 1200.1px) {
  .narrow-only {
    display: none !important;
  }
}
</style>