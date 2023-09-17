<script setup lang="ts">
import { NLayoutFooter, NSpace, NButton, NDivider, NA, NP, NIcon, NText } from 'naive-ui';

import { LogoGithub, GitPullRequestSharp, Mail } from '@vicons/ionicons5'
import { NotebookLightning24Filled } from '@vicons/fluent'
</script>

<template>
  <n-layout-footer position="absolute" bordered>
    <n-space justify="center" class="footer">
      <n-a href="https://github.com/TrickEye/TrickEye.github.io">
        <n-button round>
          <template #icon><n-icon><git-pull-request-sharp/></n-icon></template>
          <n-text>TrickEye.github.io</n-text>
        </n-button>
      </n-a>
      <n-divider vertical></n-divider>
      <n-a href="https://github.com/TrickEye">
        <n-button round>
          <template #icon><n-icon><logo-github/></n-icon></template>
          <n-text>TrickEye on GitHub</n-text>
        </n-button>
      </n-a>
      <n-divider vertical></n-divider>
      <n-button round disabled>
        <template #icon><n-icon><NotebookLightning24Filled/></n-icon></template>
        <n-text>TrickEye's Notion</n-text>
      </n-button>
      <n-divider vertical></n-divider>
      <n-a href="mailto:cuiyikai@buaa.edu.cn">
        <n-button round>
          <template #icon><n-icon><Mail/></n-icon></template>
          <n-text>Email TrickEye</n-text>
        </n-button>
      </n-a>
      <n-divider vertical class="wide-only"></n-divider>
      <n-p><n-text depth="3">powered by NodeJS, Vue3, Naive-UI</n-text></n-p>
    </n-space>
  </n-layout-footer>
</template>
  
<style scoped>
.footer {
  height: 4em;
  align-items: center;
}

@media (max-width: 1200px) {
  .n-text, .wide-only {
    display: none;
  }
}
</style>