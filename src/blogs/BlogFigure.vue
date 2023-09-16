<script setup lang="ts">
import { NCard, NH2, NP, NTag, NA } from 'naive-ui'

defineProps({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    }
})
</script>

<template>
  <n-card>
    <img :src="src" alt="alt" class="fl">
    <div class="fl desc">
      <n-h2 prefix="bar">{{ title }}</n-h2>
      <n-p><slot></slot></n-p>
      <n-tag v-if="time && location">{{ time }} · {{ location }} · <n-a :href="src">原图</n-a></n-tag>
    </div>
  </n-card>
</template>

<style scoped>
img {
  width: 40%;
  transition-duration: 200ms;
}

img:hover {
  transform: scale(1.05)
}

.desc {
  width: 60%;
  > * {
    margin-top: 1em;
    margin-left: 2em;
    text-align: start;
  }
}

@media (max-width: 1200px) {
  img {
    width: 50%;
  }
  .desc {
    width: 50%;
  }
}
@media (max-width: 768px) {
  img {
    width: 100%;
  }
  .desc {
    width: 100%;
    * {
      margin-left: 0;
    }
  }
}

.fl {
  float: left;
}
</style>