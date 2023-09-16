<script setup lang="ts">
import { NH1, NDivider, NA } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
import BlogFigure from '../BlogFigure.vue';
import BlogBanner from '../BlogBanner.vue'

import P1 from './P1.jpg';

import { todoBlog, blogs } from '../meta'
const blog = blogs["B0"]

document.title = blog.title;
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
      本文是博客的第一篇文章，因此在传递内容表达情感的同时也兼具测试开发流程的作用。
      通过阅读此文章你有可能：了解到怎样在本站中写一篇博客，了解到前端工具链的使用等信息。
      您不太可能了解到：这个人在创作过程中的心路历程，以及为什么主页有一篇《蜀道难》。
    </BlogParagraph>
    <BlogFigure :src="P1" title="那段时间，北京的天是湛蓝色的" time="2022年2月" location="北京延庆 阪泉综合服务中心">
      雪花纷飞迫不及待入怀
    </BlogFigure>
    
    <BlogParagraph>
      本站的源代码存储库在 <n-a href="https://github.com/TrickEye/TrickEye.github.io">github.com/TrickEye.github.io</n-a>。
      由于历史遗留原因，默认分支是 "nouveau"，法语单词，译为“新的”。
      另外，本站使用了 GitHub 提供的 CI/CD 服务来实现推送时打包和部署。
      打包好的发布版内容在 "gh-pages-nouveau" 分支，该分支也是本站的直接静态源。
    </BlogParagraph>
    <BlogParagraph>
      GitHub Pages 其实是一个非常方便的用于部署纯前端网页的 Serverless 服务，推荐大家都试试，我也会写一篇新的帖子来介绍介绍。
      （我先放个 todo 在下面）
    </BlogParagraph>
    <BlogBanner :blog="todoBlog"/>

    <BlogParagraph>
      这个网站是一个纯前端项目，主要内容还是有空的时候写写帖子，顺便练练前端 coding。
      网站使用了 Vue3 搭建，脚手架采用 vite 来配置，两个都是尤哥的杰作，哦对了 vite 真的很快，不要再用 vue create 了。
    </BlogParagraph>
    <BlogParagraph>
      Node 包管理工具用 yarn ，体验很舒服，比 npm 不知道好到哪里去了。
      组件库用的是 naive-ui ，是一个很具有规模的 vue3 组件库。而且他们家的文档和示例真的看着很好玩。
      此外我还用过 vuetify ，外国佬做的，风格很 material-design ，文档门槛有点高，但值得一试。
      element-ui 是饿了么的人写的，文档门槛肯定是最低的，但是也是最丑的一个（我觉得）
    </BlogParagraph>
    <BlogParagraph>
      写这玩意儿的时候还是挺注重多端体验的，彻头彻尾写响应式布局了。电脑玩家可以拖窗口玩一玩，别玩坏了。
      响应式布局这玩意儿还挺有意思的，值得说道说道。
    </BlogParagraph>
    <BlogParagraph>
      之前其实体验过很多建博客的工具了，上个个人博客甚至还使用 mkdocs 建的。
      但是总感觉没有达到自己的预期，遂自立门户。
    </BlogParagraph>
    <BlogParagraph>
      源代码这方面主要关注几个的文件夹包括 /src/pages, /src/components, /src/blogs. 
      分别装了几个一级页面、几个主页框架组件，以及博客。
      我自认为我还是层级分的比较细的，比如这篇博客的源文件就在 /src/blogs/B0/B0.vue. 
      引用了来自 /src/blogs 里面的好几个小组件。感觉观赏性还行。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      润了，要考研
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