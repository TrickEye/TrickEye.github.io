<script setup lang="ts">
import { NCard, NButton, NA, NTag, NSpace, NP } from 'naive-ui'

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
  <component :is="blog.wait ? NP : NA" :href="blog.wait ? undefined : ('/#/blogs/' + blog.uuid)" >
    <n-card bordered :title="blog.title" class="card">
      <template #header-extra>{{ blog.date }}</template>
      <template #footer>
        <n-space justify="center"><n-tag v-for="tag in blog.tags" :key="tag" round :color="tagColor">{{ tag }}</n-tag></n-space>
      </template>
      <n-p style="text-indent: 2em" v-for="line in ( blog.desc === undefined ? ['暂无简介'] : blog.desc )">{{ line }}</n-p>
      <template #action>
        <n-a :href="'/#/blogs/' + blog.uuid"><n-button :disabled="blog.wait">{{ blog.wait ? '再等等吧' : '阅读' }}</n-button></n-a>
      </template>
    </n-card>
  </component>
</template>

<style scoped>
.m0 {
  margin: 0;
}

.card {
  text-align: left;
}

.n-a {
  text-decoration: none;
}
</style>