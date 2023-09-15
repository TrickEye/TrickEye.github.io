<script setup lang="ts">
import { NLayoutContent } from 'naive-ui';
</script>

<template>
  <n-layout-content>
    <div v-for="i in 100" :key="i">hello</div>
  </n-layout-content>
</template>

<style scoped>
.n-layout-content {
  position: relative;
  top: 150px;
}
</style>