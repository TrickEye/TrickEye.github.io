<script setup lang="ts">
import { NLayout } from 'naive-ui';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <n-layout position="absolute">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </n-layout>
</template>

<style scoped>
</style>
