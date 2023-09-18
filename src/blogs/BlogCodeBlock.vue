<script setup lang="ts">
import { NCode, NP } from 'naive-ui'

defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: false
    },
    notation: {
        type: String,
        required: false
    }
})
</script>

<template>
    <n-code show-line-numbers :code="code" :language="language"/>
    <n-p><slot></slot>{{ notation ? notation : '' }}</n-p>
</template>

<style scoped>
.n-code {
  background-color: rgba(240, 240, 240, 0.9);
  padding: 1em;
  border-radius: 5px;
  font-size: 1.5em;
  text-align: start;
  overflow-x: auto;
}

@media (max-width: 1200px) {
  .n-code {
    font-size: 1em;
  }
}
</style>