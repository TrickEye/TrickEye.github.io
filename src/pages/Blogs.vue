<script setup lang="ts">
import { NH1 } from 'naive-ui'
import { blogs } from '../blogs/meta'

import BlogCard from '../blogs/BlogCard.vue'
</script>

<template>
  <n-h1>没什么，这里是博客们</n-h1>
  <div class="card-container">
    <BlogCard v-for="b in blogs" :key="b.uuid" :blog="b" />
  </div>
</template>

<style scoped>
.card-container {
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
