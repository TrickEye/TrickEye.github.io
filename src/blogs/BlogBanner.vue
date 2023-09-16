<script setup lang="ts">
import { NA, NTag, NAlert } from 'naive-ui'

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
  <n-a :href="'/#/blogs/' + blog.uuid">
    <n-alert :title="'引用：' + blog.title" type="default" style="overflow: hidden">
      <template #icon>
        <span style="font-size: 100px; color: rgba(128, 128, 128, 0.5);">@</span>
      </template>
      <n-tag round :color="tagColor" v-for="tag in blog.tags" :key="tag" >{{ tag }}</n-tag> {{ blog.desc.join('') }}
    </n-alert>
  </n-a>
</template>

<style scoped>
.n-a {
  text-decoration: none;
}
</style>