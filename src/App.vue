<script setup lang="ts">
import { NLayout, NConfigProvider } from 'naive-ui';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';

import hljs from 'highlight.js/lib/core'
import c from 'highlight.js/lib/languages/c'
import css from 'highlight.js/lib/languages/css'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import ruby from 'highlight.js/lib/languages/ruby'
hljs.registerLanguage('c', c)
hljs.registerLanguage('css', css)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('ruby', ruby)

</script>

<template>
  <n-config-provider :hljs="hljs">
    <n-layout position="absolute">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
</style>
