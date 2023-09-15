<script setup lang="ts">
import { NLayoutFooter, NSpace, NButton, NDivider, NA, NP } from 'naive-ui';
</script>

<template>
  <n-layout-footer position="absolute" bordered>
    <n-space justify="center" class="footer">
      <n-button round>TrickEye.github.io</n-button>
      <n-divider vertical></n-divider>
      <n-button round>TrickEye on GitHub</n-button>
      <n-divider vertical></n-divider>
      <n-button round>TrickEye's Notion</n-button>
      <n-divider vertical></n-divider>
      <n-a href="mailto:cuiyikai@buaa.edu.cn"><n-button round>Email TrickEye</n-button></n-a>
      <n-divider vertical></n-divider>
      <n-p style="color: grey">powered by NodeJS, Vue3, Naive-UI</n-p>
    </n-space>
  </n-layout-footer>
</template>
  
<style scoped>
.footer {
  height: 4em;
  align-items: center;
}
</style>