<script setup lang="ts">
import { NH1, NDivider, NP } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
// import BlogLink from '../BlogLink.vue';
import BlogFigure from '../BlogFigure.vue';
// import BlogCodeBlock from '../BlogCodeBlock.vue';

import P1 from './P1.png';

import { blogs } from '../meta'
import BackButton from "../BackButton.vue";
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
    <BlogFigure :src="P1" title="设置 GitHub Pages 部署">
      <n-p>接下来，在仓库设置里面左边栏找到 Pages 选项，可以看到 Build and deployment 设置。</n-p>
      <n-p>这项设置要求配置 Source ：可以选择从某一个分支部署，或者使用 GitHub Actions 来构建。
      这篇文章更注重于简单的使用，所以我们选择第一个选项： Deploy from a branch.</n-p>
      <n-p>随后下面的 Branch 设置项需要我们指定一个分支作为发布源，这里我们
      选择使用 master 分支作为源，点击保存，稍等片刻，就可以在 https://&lt;username&gt;.github.io/ 看到你的网站了。</n-p>
    </BlogFigure>
    <BlogParagraph>
      默认情况下， GitHub Pages 会使用 Jekyll 来构建网站。Jekyll 是一个静态网站生成器（ Static Site Generator, SSG ），它可以将 markdown 
      文件转换为 html 文件，并辅以特定的主题指定的样式表，从而构建一个完整的多页面静态网站。这种感觉比较像是用 markdown 语法来写 html 文件：
      用户可以享受 markdown 文件格式带来的灵活自由和快捷方便，然而因为 Jekyll 对 markdown 语法的转换遵循一定的规则，用户不得不戴着镣铐跳舞。
      对了，说实话我觉得 Jekyll 的界面挺丑的。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      因此自然有用户希望不使用 GitHub 提供的 Jekyll 来用其他的文件来生成自己的网站，而是从网站的源代码本身开始达到更高的自定义程度。
      一个看起来显而易见的方法是把自己在本地开发并打包好的网站部署源代码文件上传到 GitHub ，并直接让 GitHub Pages 服务部署这些文件。
      读者读到这里可以自己试试，会失望地发现 GitHub Pages 服务并不会部署这些文件，而是会把这些文件当作 Jekyll 转换过程的源代码，再次经历一次 Jekyll 转换过程，
      从而导致实际的结果并不符合自己的预期。这个问题困扰了我一段时间，曾经一度认为这个问题无解，但阅读相关文档后找到的解决方案是：
      在仓库的根目录下创建一个不需要有任何内容的 .nojekyll 文件，这样 GitHub Pages 服务就不会再次转换这些文件了。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      文章先在此告一段落，到现在我们了解了如何使用 GitHub Pages 服务来部署一个静态网站。在接下来的博客中会更进一步，介绍
      一些使用广泛的博客构建工具，以及如何使用 GitHub Actions 来自动构建网站。
    </BlogParagraph>
    <br>
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