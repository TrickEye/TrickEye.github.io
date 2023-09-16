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
    <n-code :code="code" :language="language" show-line-numbers></n-code>
    <n-p><slot></slot></n-p>
</template>

<style scoped>
.n-code {
  background-color: rgba(240, 240, 240, 0.9);
  padding: 1em;
  border-radius: 5px;
  font-size: 1.5em;
  text-align: start;
}
</style>