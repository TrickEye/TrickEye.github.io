<script setup lang="ts">
import { NA, NAlert } from 'naive-ui'

defineProps({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: false
    }
})
</script>

<template>
  <n-a :href="link">
    <n-alert :title="'链接：' + title" type="default" style="overflow: hidden">
      <template #icon>
        <span style="font-size: 100px; color: rgba(128, 128, 128, 0.5);">#</span>
      </template>
      {{ intro }}
    </n-alert>
  </n-a>
</template>

<style scoped>
.n-a {
  text-decoration: none;
}
</style>