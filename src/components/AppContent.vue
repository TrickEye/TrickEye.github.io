<script setup lang="ts">
import { NLayoutContent, NP, NA } from 'naive-ui';

import BackgroundPic from '../assets/background.jpg'

function inCss(pic: string) {
  return 'url(' + pic + ')';
}
</script>

<template>
  <n-layout-content>
    <div class="content">
      <router-view/>
    </div>
    <n-p class="pic-annotation">2023年8月 · 四川省 红原草原 · <n-a style="color: aquamarine;" :href="BackgroundPic">原图</n-a></n-p>

  </n-layout-content>
</template>

<style scoped>
.n-layout-content {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: v-bind(inCss(BackgroundPic));
  filter: brightness(120%);
  background-size: cover;
}

.content {
  --content-height: calc(100vh - 260px);
  --content-offset: 150px;
  width: 100%;
  height: var(--content-height);
  overflow-y: scroll;
  
  position: absolute;
  left: 50%;
  top: var(--content-offset);
  transform: translate(-50%);

  align-content: center;
  text-align: center;

  background-image: linear-gradient(to bottom, rgba(32, 32, 32, 0.1), rgba(255, 255, 255, 0.6));
  backdrop-filter: blur(3px);
  box-shadow: 0px 40px 20px 10px rgba(255, 255, 255, 0.6), 0px -40px 20px 10px rgba(32, 32, 32, 0.1);
}

.pic-annotation {
  --annotation-offset: 70px; /* footer is 56px tall */
  position: absolute;
  bottom: var(--annotation-offset);
  left: 50%;
  transform: translate(-50%);

  padding: 5px 10px 5px;
  background-color: rgba(32, 32, 32, 0.5);
  color: white;
  border-radius: 5px;

  white-space: nowrap;
}


@media (max-width: 1200px) {
  .content {
    --content-height: calc(100vh - 130px);
    --content-offset: 80px;
  }

  .pic-annotation {
    --annotation-offset: 10px;
  }
}

.pic-annotation:hover {
  background-color: rgba(32, 32, 32, 0.8);
}
</style>