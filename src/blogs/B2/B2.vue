<script setup lang="ts">
import { NH1, NDivider } from 'naive-ui'
import BlogParagraph from '../BlogParagraph.vue';
import BlogLink from '../BlogLink.vue';
// import BlogFigure from '../BlogFigure.vue';
// import BlogCodeBlock from '../BlogCodeBlock.vue';

import { blogs } from '../meta'
const blog = blogs["B2"]

document.title = blog.title;
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
      写软工的人肯定在立项最开始的时候就想过写的软件应该在电脑上用还是在手机上用。
      软工的 PM 通常都懒得思考并直接回答：电脑手机都做吧都做吧。
      （所以做多端体验同步的这个需求纯纯是项目经理的脑溢血，想给一分钱做两份网站。）
    </BlogParagraph>
    <BlogParagraph>
      最开始电脑端和移动端是分离的。比如电脑端域名 www.example.com ，手机端域名就是 m.example.com 。
      在两个域名下运行两个服务，访问服务的时候判断一下屏幕尺寸符不符合自己的服务标准，把本来该去另外一个站的人赶到自己该去的地方。
      这种做法可以很好地考虑手机和电脑的性能差异和使用习惯各自展示合适的信息，也催生了手机端浏览器体验阉割的现象。
      这种体验阉割包括动画缩减，视图调整，甚至包括需要下载 APP 才能继续阅读这种遭天谴的东西。
    </BlogParagraph>
    <BlogParagraph>
      这样做不仅对用户不好也对程序员不友好，因为确确实实是两个界面不一样但是功能一样的网站，重复造轮子了。
      这个时候手机处理器的性能也快上来了，所以很自然的想法就是手机和电脑公用一个网站。
      那手机屏幕和电脑屏幕区别可太大了。网站的内容字太小了或者太宽了不行，手机用户得骂人；太窄了也不行，电脑得骂。
      所以得希望浏览器能自动调整内容的宽度和展现顺序。
      此外，前边提到，手机和电脑处理器之间的性能差距已经远小于屏幕带来的差距了，此外还有好事者拖动浏览器窗口改变大小来 cosplay 手机，所以现在更合适的叫法是宽屏设备和窄屏设备。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      响应式这个概念，比多端适配还要上一个层次。不仅对不同宽度的屏幕有适应性的适配，而且能随着屏幕尺寸的改变自动响应性地调整，比如字体大小，展示列数等等。
      本站采用了响应式技术，有好事者不妨改变一下窗口宽度看看。
    </BlogParagraph>
    <BlogLink 
      link="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design" 
      title="MDN上关于响应式的介绍"
      intro="文中介绍了响应式的历史和一些简单的实现方式"/>
    
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