<script setup lang="ts">
import { NCard, NButton, NA, NTag, NSpace } from 'naive-ui'

defineProps({
    blog: {
        type: Object,
        required: true
    }
})

const tagColor = {
  color: "#a2cacf",
  textColor: "black"
}
</script>

<template>
  <n-card bordered :title="blog.title" class="card">
    <template #header-extra>{{ blog.date }}</template>
    <template #footer>
      <n-space justify="center"><n-tag v-for="tag in blog.tags" :key="tag" round :color="tagColor">{{ tag }}</n-tag></n-space>
    </template>
    <template #action>
      <n-a :href="'/#/blogs/' + blog.uuid"><n-button>阅读</n-button></n-a>
    </template>
  </n-card>
</template>

<style scoped>
.m0 {
  margin: 0;
}

.card {
  text-align: left;
}
</style>