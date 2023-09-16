<script setup lang="ts">
import { NH1 } from 'naive-ui'
import { blogs } from '../blogs/meta'

import BlogCard from '../blogs/BlogCard.vue'
</script>

<template>
  <n-h1 class="title" prefix="bar">没什么，这里是一些博客</n-h1>
  <div class="card-container">
    <div class="card" v-for="b in blogs" :key="b.uuid" >
      <BlogCard :blog="b" />
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 90%;
  text-align: start;
  margin: 20px auto;
  font-weight: 600;
}
.card-container {
  width: 90%;
  margin: 20px auto;
  columns: 4;
  column-gap: normal;
}

.card {
  margin: 0 0 10px;
  overflow: hidden;
  break-inside: avoid;
}

@media (max-width: 1200px) {
  .card-container {
    columns: 3;
    width: 95%;
    box-sizing: border-box;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .card-container {
    columns: 2;
  }
}

@media (max-width: 480px) {
  .card-container {
    columns: 1;
  }
}
</style>
