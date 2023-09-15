<script setup lang="ts">
import { NH1, NP } from 'naive-ui'

import { blogs } from '../meta'
const blog = blogs["B0"]
</script>

<template>
  <n-h1>{{ blog.title }}</n-h1>
  <n-p>{{ blog.date }}</n-p>
</template>