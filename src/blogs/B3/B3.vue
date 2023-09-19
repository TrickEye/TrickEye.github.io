<script setup lang="ts">
import { NH1, NDivider } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
// import BlogLink from '../BlogLink.vue';
// import BlogFigure from '../BlogFigure.vue';
// import BlogCodeBlock from '../BlogCodeBlock.vue';

import { blogs } from '../meta'
const blog = blogs["B3"]

document.title = blog.title;
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
      GitHub Pages 是 GitHub 推出的一项服务，用于基于特定的代码存储库，向外部署一个静态网站。
      该服务提供一个免费的 https://&lt;username&gt;.github.io/ 二级域名，以及提供了一个无需与服务器交互的自动构建服务（基于 Jekyll ）。
    </BlogParagraph>
    <BlogParagraph>
      要使用 GitHub Pages 最简单的方式是从 markdown 文件构筑做起（我们预设读者预先了解 markdown 这一文件格式）。
      首先，需要在 GitHub 上创建一个名为 &lt;username&gt;.github.io 
      的代码仓库，然后在该仓库的根目录下创建一个 index.md 或者 README.md 文件，按照 markdown 的语法书写一些内容，也可随意使用一些 markdown 语法。
    </BlogParagraph>
    
  </div>
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