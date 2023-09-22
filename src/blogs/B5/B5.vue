<script setup lang="ts">
import { NH1, NDivider } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
import BlogLink from '../BlogLink.vue';
// import BlogFigure from '../BlogFigure.vue';
// import BlogCodeBlock from '../BlogCodeBlock.vue';

// import P1 from './P1.png';

import { blogs } from '../meta'
import BackButton from "../BackButton.vue";
const blog = blogs["B5"]

document.title = blog.title;
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
        这是 Curve Summer Code Camp 的一份 PR 报告。Issuer 希望移除浏览器自动填充功能生效后的背景颜色，
        但这并非一件易事。本文介绍问题分析，解决和测试的过程。
    </BlogParagraph>
    <BlogLink 
        link="https://cuiyikai.notion.site/PR-report-Background-color-removal-of-auto-filled-input-box-using-CSS-ef6a350da2ea403ba478aa4a01245389?pvs=4"
        title="在 Notion 上阅读本文"
        intro="本文原始发布于我的 Notion ，诚邀前往 Notion 查看"></BlogLink>
    <BlogParagraph>
        本文对应的 PR 有效解决了 Issue 中提到的问题，已经被顺利合并到了 Curve 的主分支上。
        现在， Curve 这个开源项目也有我写的代码了。
    </BlogParagraph>
    <BlogParagraph>
        当然了不仅如此，我还在这个 PR 中学到了很多东西。进一步深入了解了 Vue 中单文件组件 scope 相关的概念和底层实现，
        更提高了我的 CSS 能力，甚至去 naive-ui 提了一个 Issue ，这个 Issue 也得到了 naive-ui 的回应。
        或许这就是开源的乐趣。
    </BlogParagraph>
  </div>
  <BackButton></BackButton>
</template>

<style scoped>
.blog {
  width: min(90%, 1800px);
  margin: 0 auto;
}

.title {
  font-size: 5em;
  font-weight: 600;
  text-align: start;
}

.date {
  text-align: left;
  font-size: 1.5em;
}

@media (max-width: 1200px) {
  .title {
    font-size: 4em;
  }

  .date {
    font-size: 1.3em;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 3em;
  }
  .date {
    font-size: 1em;
  }
}
</style>