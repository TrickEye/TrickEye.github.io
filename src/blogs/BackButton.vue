<script setup lang="ts">
import { NH1 } from 'naive-ui'
import BlogLink from "./BlogLink.vue";
</script>

<template>
  <div style="background-color: #fff;">
    <div style="width: min(90%, 1800px);margin: 0 auto; padding-top: 30px; padding-bottom: 30px;">
      <n-h1 prefix="bar">唔，看完了</n-h1>
      <BlogLink link="/#/blogs" title="回到博客列表"></BlogLink>
    </div>
  </div>
</template>

<style scoped>
.n-h1 {
  text-align: start;
}
</style>