---
title: 博客新功能介绍
categories:
  - gallery
date: 2026-04-15 19:44:07
tags: 
  - hexo
  - markdown
featured_image: 260415-new-blog-features/p0.drawio.svg
---

> 介绍一下为这个博客引入的新功能，以及如何实现这些新功能。主要是怕几个星期后的自己忘了（挠头.jpg）

## Feat: 目录

你敢信这个 theme 不原生支持目录吗这太离谱了。

所以在 [这个提交](https://github.com/TrickEye/TrickEye.github.io/commit/5a6da38fa5313d1dc7ddf685a47bd0d5cc807e71) 中引入了 TOC 渲染。

---

主要的思路是 hexo 提供了一个渲染 toc 的工具函数 `<%- toc(page.content) -%>`，会自动在页面中生成一个目录树。当然这个目录树是一点样式都不带的，需要自己准备样式表。先编辑 post 页面的布局文件 `theme/frame/layout/post/post_head.ejs` 在 post head 这里添加一行使用目录帮助函数，看看会生成什么吧：

```html
<ol class="toc">
  <li class="toc-item toc-level-2">
    <a class="toc-link" href="#Feat-%E7%9B%AE%E5%BD%95">
      <span class="toc-text">Feat: 目录</span>
    </a>
  </li>
  <li class="toc-item toc-level-2">
    <a class="toc-link" href="#Feat-Photo-Album">
      <span class="toc-text">Feat: Photo Album</span>
    </a>
  </li>
</ol>
```

我的做法是将整个目录结构用一个 div.post-toc 包裹，在 css 中设置 .post-toc ol, li, a 的样式来调整目录的样式。例如复用 text-style(post-date) 的字体样式，underline-motion(underline-link) 的下划线动画（感觉这个动画是这个主题之魂）

有些时候并不想让目录始终出现，因此用 detail / summary 标签处理目录的现实和隐藏。最后调整了一下目录的 padding, margin 调整了横线的位置。现在整体能看了很多。

过程中遇到一个问题。toc 会附带很多不想要的行号，需要在两个地方解决：
1. 第一个行号是由帮助函数渲染器生成的。在 ejs 文件中使用帮助函数处，传入 {list_number: false} 参数以禁止生成行号；
2. 第二个行号是由 html 的 ol 标签自动生成的，在 css 中设置 ol { list-style: none; } 来禁止生成行号。

## Feat: Sunlit Effect

纯色背景总是感觉单调，所以在 [这个提交](https://github.com/TrickEye/TrickEye.github.io/commit/6267d6cc6a97e24d1629098249d6111b67c1ea2a) 引入了 sunlit effect。其原作者仓库位于 [jackyzha0/sunlit](https://github.com/jackyzha0/sunlit)

原项目主要通过一个纯 html / css 实现了类似于阳光照射下的百叶窗的效果，所以本项目可以直接把关键的部分抄过来，这涉及到下面几个改动：
1. 在 theme/frame/layout/layout.ejs 中引入对应的 html 结构：主要是 .dappled-light .perspective .blinds .shutters .shutter*n
2. 创建 theme/frame/source/css/selfdef/sunlit.css，复制原项目的主要 css 代码，做适度修改。
3. 在 style.styl 中引入 sunlit.css

现在可以看到有光影效果了，但是光影效果和原有的 header, footer 存在重叠和穿帮。所以再引入下面的改动：
1. 在 theme/frame/source/css/partials/header.styl 中为 .header 添加 z-index; 并添加 position: sticky; top: 0; 这可以让其吸附在页面顶部，保持在光影效果上层。
2. 在 theme/frame/source/css/partials/footer.styl 中为 .footer 添加 z-index;

---

**踩到一些小坑：原项目的树叶运动效果虽好，但会占用巨大的 CPU 资源（400%），所以不得不去掉树叶的元素。**

## Feat: Photo Album

为这个博客新增了图片相册的功能，因为哥们儿需要一个比朋友圈更好用的图片展示平台。所以在 [这个提交](https://github.com/TrickEye/TrickEye.github.io/commit/6e9c2c9ea770848ee4d7b426f59160976d903d16) 引入了一个初版的图片相册功能。可以在 [这一页](/260212-yunnan) 看看效果

---

### 创建新 layout

首先决定为 album 创建一个不同于 post 的 layout，因为普通的 markdown 渲染引擎对图片的渲染太差劲了。所以首先是在 scaffolds/ 目录下创建 album.md。

我希望一个 album 文章是作为照片集中展示的媒介，每个照片都可能会配有一句话来介绍内容，且希望以章节的形式来组织照片，而除此以外不需要太多可自定义的内容元素。因此希望在 front matter 中完成内容的传递，而不通过 markdown 正文编写内容。因此在 album.md 中设计了如下的 front matter：

```yaml
title: {{ title }}
layout: album
categories: 
    - [album]
date: {{ date }}
featured_image: {{title}}/p0.jpg
display_featured_image: false
chapters:
  chapt1:
    pic1: caption1
    pic2: caption2
  chapt2:
    pic3: caption3
    pic4: caption4
```

其主要的内容元素是 chapters。这会在渲染时被解析为一个嵌套 Object。对于需要访问这个属性的 ejs 而言，可以通过 `Object.keys(page.chapters)` 来获取章节列表，或者直接用 `Object.entries(page.chapters).forEach(function([chapter, pics]) { ... })` 来遍历。

### album 布局定义

对于新 layout 的渲染需要引入 themes/frame/layout/album.ejs 来负责。此文件可仿照和复用 post.ejs 来编写，其主要任务是利用对应 page 的变量来渲染一个 article#album 元素。

就实际情况而言，复用了 post/post_head.ejs 来渲染文章头部（但后期又因为不想在 album 页面显示目录而重新构造了一个自己的 album/post_head.ejs），然后在 article#album 中通过两层循环来渲染章节和照片。第一层循环通过 `Object.entries(page.chapters).forEach(function([chapter, pics]) { ... })` 来遍历章节，第二层循环通过 `Object.entries(pics).forEach(function([pic, caption]) { ... })` 来遍历照片。

```js
<% Object.entries(page.chapters).map(function([chapter, index]) { %>
    <h1 id="<%= chapter %>"><%= chapter %></h2>
    <div class="album-image-group"><% Object.entries(index).map(function([image, caption]) { %>
        <div class="album-image">
            <img src="<%= url_for(image) %>" alt="<%= caption %>">
            <div class="album-caption"><%= caption %></div>
        </div>
    <% }); %></div>
<% }); %>
```

样式方面，用 copilot vibe 了一个初版。我的想法是：
- 每一个章节的若干图片应该横向排布，可横向滚动，每张图的高度统一，宽度按照比例自适应
- 每个图片对应一句 caption，这句 caption 应该在鼠标 hover 图像时以半透明遮罩的形式显示在图像上（然而在手机上的交互逻辑不知道怎么设计，也许可以用 click / tap 来实现显示和隐藏）

因此在 css 中设置 .album-image-group 的 display: flex; flex-wrap: nowrap; 来实现横向排布，设置 .album-image 的 position: relative; 来为 caption 的绝对定位提供参照，设置 .album-caption 的 position: absolute; top: 50%; left: 50%; 来实现居中效果，并在 .album-image:hover .album-caption 中设置 color: rgba(255, 255, 255, 0.94); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) 来实现 hover 时显示 caption。

未来计划：
1. 需要用 js 来实现 click / tap 来实现移动端的 caption 显示和隐藏。
2. 需要响应式的调整 caption 字体和图像大小：目前的字体用的是 h1，图像用的是 50vw。前者在移动端太大，后者在移动端太小。

### 渐进式加载图像

我能提供的原始图像是一次性加载的，图像体积大概在2.2MB左右，对于挂载在 github pages 上的博客来说，加载开销非常大。而对于 jpg 格式而言，渐进式加载（progressive loading）是一种可以在图像完全加载之前先显示一个模糊版本的技术，可以显著提升用户体验。因此在上传图像之前先用一个脚本转换图像为渐进式 jpg 格式：

```py
from PIL import Image
import os

# ...
img = Image.open(os.path.join(input_dir, file))
img.save(
    os.path.join(output_dir, file),
    "JPEG",
    quality=85,
    optimize=True,
    progressive=True
)
```

这样的话，用户用首 200k 字节的数据即可看到一个模糊但完整的图像，随更多的数据加载，图像会逐渐清晰。用 chrome 开发者模式的 network 面板可以模拟在低速网络环境下的加载效果。

未来可考虑用 CI/CD 将所有上传的图像自动转换为渐进式 jpg 格式。

### 添加路由：config 修改

在 themes/frame/_config.yml 中的 menu 属性添加 album 的配置：Album: /categories/album/。这样会为album 分类专门生成一个类似于 gallery 的一览列表。

## Feat: MathJax Support

这个博客之前是没有数学公式支持的，hexo 的渲染引擎也一般通过插件标签 `{% katex %} ... {% endkatex %}` 来支持数学公式的渲染，超级麻烦。所以修改了 theme/frame/layout/partials/head.ejs （主要负责组装页面head部分），引入了 mathjax 的 cdn，设置 mathjax 识别 `$...$` 和 `\(...\)` 作为行内数学公式的标记。这样就可以直接在 markdown 中使用 `$...$` 来编写数学公式了。

以此为例 $x =1\to n$