<script setup lang="ts">
import { NH1, NDivider } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
import BlogLink from '../BlogLink.vue';
// import BlogFigure from '../BlogFigure.vue';
import BlogCodeBlock from '../BlogCodeBlock.vue';
import BackButton from "../BackButton.vue";

// import P1 from './P1.png';

import { blogs } from '../meta'
const blog = blogs["B4"]

document.title = blog.title;

const routerDefinitionCode = 
`const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },
  { path: '/blog', component: () => import('./pages/Blog.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
`
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
      首先，简单介绍一下 Vue。它是最近最火的一个前端框架，其诸多特性和指令极大地方便了前端开发人员的开发。
      当然了，本文的重点不在吹捧 Vue，因此 Vue 的诸多好用的特性就不再赘述了。
    </BlogParagraph>
    <BlogParagraph>
      一个超级简化的挂载Vue的原理是：开发阶段，index.html 中包含一个具有 id 为 App 的空 div 标签。而在 main.js 中使用 Vue
      提供的 createApp 来创建一个 Vue App，并使用 mount 方法将其挂载到 index.html 中的 App 标签上。在用户访问 index.html
      时，同时读取相关联的 js 和 css 文件，进行必要的计算并实时修改 div#App 标签内的内容，并实时体现在用户浏览器的窗口中。
    </BlogParagraph>
    <BlogParagraph>
      Vue Router 是一个非常常用的 Vue 路由工具，其提供路由的功能被暴露出来供一个 Vue App 来使用 use() 方法加载。
      此网站使用 Vue Router，他很方便地在共享了统一样式的上下导航栏、和背景的同时，根据路径来决定在内容部分引入不同的组件，从而在多个页面间导航。
      要使用这样的功能，主要需要在 main.js 中定义好路径-组件映射关系、并使用 Vue Router 提供的 Router View 标签来指出组件的挂载位置。
    </BlogParagraph>
    <BlogParagraph>
      在下面的内容中，我们考虑使用 Vue Router 来实现这样一个文件结构： App.vue 中使用 Router View 指出了一块用于依据路由来挂载组件的位置。
      Router 的路由由下面的代码定义：
    </BlogParagraph>
    <BlogCodeBlock :code="routerDefinitionCode" language="javascript"></BlogCodeBlock>
    <BlogParagraph>访问 / 时，加载 Home.vue, 页面路由显示 http://domain.domain/#/ ；</BlogParagraph>
    <BlogParagraph>访问 /about 时，加载 About.vue, 页面路由显示 http://domain.domain/#/about ；</BlogParagraph>
    <BlogParagraph>访问 /blog 时，加载 Blog.vue, 页面路由显示 http://domain.domain/#/blog ；</BlogParagraph>
    <BlogParagraph></BlogParagraph>
    <BlogLink link="https://router.vuejs.org/zh/" title="Vue Router 文档（中文）" intro="其实 Vue Router 的基本用法到这里就可以结束了，欢迎查阅 Vue Router 的官方文档以获取更复杂的用法"></BlogLink>
    <n-divider></n-divider>
    <BlogParagraph>
      接下来要开始抛问题解决问题了。第一个问题从 url 下手：http://domain.domain/#/ 里面的 # 是什么东西，太丑了，怎么去掉他？
    </BlogParagraph>
    <BlogParagraph>
      做一个小实验，在本地预览（yarn dev 或者 npm run dev）情况下：<br>
      (1). 访问 http://localhost:5173/ 没有那个 #，我们观察到的现象是页面加载的是 Home.vue, 加载完成之后，页面的 url 变成了 http://localhost:5173/#/。<br>
      (2). 访问 http://localhost:5173/about/ 没有那个 #，观察到的现象是 <u>加载了 Home.vue</u>, 加载完成之后，页面 url 变成了 http://localhost:5173/about/#/ <br>
      (2). 访问 http://localhost:5173/about 没有那个 #，也没有那个 /，观察到的现象是 <u>加载了 Home.vue</u>, 加载完成之后，页面 url 变成了 http://localhost:5173/about#/ <br>
      画线的地方与我们期望的现象完全不同，并且网页始终会在 url 的后面添加一个 #。
    </BlogParagraph>
    <BlogParagraph>
      这个问题归咎于 Vue Router 创建时使用的 createWebHashHistory() 方法。这个方法的作用是创建一个 hash 模式的 history 对象。
      该方法每次计算 url 中 # 之后的部分的哈希值，并使用哈希值来确定最终被引入并挂载到 Router View 的组件。
      如果访问页面时没有 #，则会自动添加 #/ 后计算哈希。所以这种情况下必定是 #(空串) 被计算哈希，因此挂载 Home.vue。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      做第二个小实验：这个实验要求将打包好的文件通过别的方式进行部署，例如 nginx 或者其他软件。不具备条件的可以直接使用我这个网站的域名进行实验。<br>
      (1). 访问 https://trickeye.github.io/ 我们观察到的现象是页面加载的是 Home.vue, 加载完成之后，页面的 url 变成了 http://trickeye.github.io/#/<br>
      (2). 访问 https://trickeye.github.io/about/ 或者 https://trickeye.github.io/about 观察到的现象是 <u>404 了</u>!
    </BlogParagraph>
    <BlogParagraph>
      恭喜您马上就要触及到 Vue 单页面应用的本质了。如果有兴趣打开开发者模式观察请求发送记录，应该不难看到对 https://trickeye.github.io/about/ 发送的 GET 请求出现异常 404。
      GitHub Pages 严格按照上传的工件进行部署。对于 https://trickeye.github.io/about/ 的访问一般会试图访问部署源文件中的 about 文件夹下的 index.html 文件。
      （这里说“一般”是因为还有一种在子路由下部署别的仓库的情况，不在本文讨论的范围之中）然而我们大可以去部署源上看一看，打包好的文件包里根本没有 about 文件夹。
    </BlogParagraph>
    <BlogParagraph>
      一般情况下 Vue 打包好的文件目录形态大致是：根目录下 index.html, vite.svg, 和 assets/文件夹；后者目录下是诸多 js, css 和其他用到的文件等。
      因为不存在 about/ 文件夹，所以完全没法像访问文件夹下的文件一样访问一个 /about 页面。所以我们即使很抗拒但不得不接受一个事实：url 上的路由是假的。
    </BlogParagraph>
    <BlogParagraph>
      在本地使用 yarn preview 来部署打包好的工件，或者使用 yarn dev 来实时预览的时候不会出现上面提到的 404，这是因为 vite 经过配置，会将触发 404 
      的路由重定向为仍然返回根目录下 index.html。而使用其他部署工具就不会有这样的配置，这也是第二个实验需要使用其他部署工具才能确保问题复现的原因。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      所以我们再捋一遍 Vue 的路由原理：访问 https://trickeye.github.io/#/any/path/ 这个 url，真正被请求的地址是 https://trickeye.github.io/。返回的是路径下的 index.html。
      这个 index.html 会引入必要的 js 和 css 文件。在 js 文件的执行过程中，#/any/path 的哈希值被计算并被匹配以确定一个组件用来挂载到 Router View 。
      在这个过程中，/any/path/index.html 根本就不存在，也根本就不会被请求。看起来像是 /any/path/index.html 的内容其实完全都是 Vue 计算并替换的结果。
    </BlogParagraph>
    <BlogParagraph>
      Vue 的打包结果中，只有一个根目录下的 index.html ，并且这个 html 文件的内容也是极为简短。在 head 中包含了一个 js 文件，一个 css 文件，body 部分只有一个 div#App,
      真是简洁！而所有的内容都是在页面加载完成之后根据 js 的计算结果来修改填充。因此 Vue 的这种性质被称为单页面应用（"Single Page Application, SPA"）
    </BlogParagraph>
    <BlogParagraph>
      这种模式看起来非常的人畜无害（Seem to be harmless enough）因为对于人来说，除了那个可以忍受的 url 里面的 # 之外好像没有什么影响体验的坏处，但是其真正的弊端是对于搜索引擎。
      考虑这样一种情景：这天一个搜索引擎叫 Dubai 喜欢在互联网世界里面自由飘荡并抓获一些暴露出来可以访问的 html，获取其中的内容并提取关键词，做好收录以便其用户将来使用相关关键词来搜索。
      html 里面的 h1, span, p, nav, div 等等标签里面的内容都是 Dubai 关注的焦点。但是这一天，Dubai 发现了一个 html 里面只有一个具有 #App id 的 div 标签，而且这个 div 标签里面的内容是空的。
      Dubai 完全搜索不到任何有用的信息，没法捕获关键词，也就没法做好收录。
    </BlogParagraph>
    <BlogParagraph>
      与此同时在互联网世界的另一隅有一个站长，他对 Vue 技术很感兴趣并使用 Vue 写了一个非常精彩的网页，部署在了 github 上。他希望别人能够在 Dubai 搜索引擎上搜索他的名字的时候一下子就能找到这个网站，
      可惜，Dubai 偏偏没法对这个网站做收录，这个站长气死了，含泪写下了这样上面的这一段故事。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      如何编排自己网站的 html 内容以便在搜索引擎中获得更高的曝光被称为 SEO（Search Engine Optimization, 搜索引擎优化）。根据前面这个故事的论述，Vue 的单页面应用模式对 SEO 极为不利。
      这导致使用纯 Vue 部署的网站被搜索引擎收录的质量极差，严重影响了网站的曝光率。
    </BlogParagraph>
    <BlogParagraph>
      在 Vue 上进行 SEO 不是不可能。从方法论的角度出发，要做的事情其实就是在最开始请求的 index.html 里面就蕴含必要的内容，而不是在 js 计算之后才填充内容。
      这种模式相当于渲染过程是在服务端进行的，因此被称为 SSR（Server Side Rendering, 服务端渲染）。搜索引擎可以在 index.html 里面找到相关内容，也就可以做好收录。
    </BlogParagraph>
    <BlogParagraph>
      对于具有多个路由的 Vue 项目，我们还希望搜索引擎在一开始就能对每一个子路由进行收录，因此也就希望在每一个路由对应的子文件夹下面就生成一个 index.html 文件供搜索引擎收录。
      这种模式相当于破坏 Vue 原本动态计算路由的特性，而是在每一个路由下面都生成一个静态的 html 文件，因此被称为 SSG（Static Site Generation, 静态网站生成）。
      Vue 常用的 SSG 工具有 Nuxt.js。不在这里赘述了。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      我们其实还忘了一件事：怎么去掉那个 #。这个问题的答案是使用 createWebHistory() 方法而非 createWebHashHistory() 方法，不使用哈希值计算路由指派。
      这种方式最大的好处是不会再有那个 # 了，但弊端在于<u>没法直接访问子路由</u>了。
      之前论述过，直接访问子路由 /any/path/ 时会试图访问那个文件夹下的 index.html 文件，而这个文件是不存在的。所以直接访问子路由会导致 404。
      （WebHashHistory 模式不会产生这种情况的原因是前边有一个 #）
      而从主页进去，通过点击相应的按钮（Vue Router 里面这个按钮叫做 Router Link）转换页面的时候，其实也没有去访问新页面，而是在原本的页面上进行了一些计算，然后将新的内容填充到 Router View 里面。
      这种情况下，Vue Router 官方推荐的做法是对部署软件做配置使得路由失配的时候自动重定向到根目录。
    </BlogParagraph>
    <BlogParagraph>
      做个总结：Vue 固然是一个好用的前端工具，但是 Vue 写的是一个单页面应用。使用 Vue Router 创建的路由本质上是 js 计算的结果而不是对应位置文件的访问。
      单文件页面的性质和 Vue 的动态性导致 SEO 极度不便，因此需要使用 SSR 或者 SSG 来解决这个问题。而 url 上的 # 可以通过使用 createWebHistory() 方法来解决，但这需要对部署工具进行额外配置。
    </BlogParagraph>
    <BlogParagraph>
      此即为我对 Vue 单页面文件的一点点狭隘的理解，希望对您有所帮助。
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