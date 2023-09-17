<script setup lang="ts">
import { NP } from 'naive-ui'
</script>

<template>
  <n-p><slot></slot></n-p>
</template>

<style scoped>
.n-p {
  font-size: 1.5em;
  text-indent: 2em;
  text-align: start;
}

@media (max-width: 1200px) {
  .n-p {
    font-size: 1em;
  }
}
</style>