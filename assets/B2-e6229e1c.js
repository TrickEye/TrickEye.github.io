import{B as t}from"./BlogParagraph-21eacc22.js";import{B as i}from"./BlogLink-48a4413f.js";import{B as _}from"./BlogFigure-8c7e11f7.js";import{B as s}from"./BlogCodeBlock-88725d31.js";import{b as x}from"./meta-ba8d7ebb.js";import{d as f,c as g,a as e,w as o,u as n,o as S,b as a,t as m,N as u,f as d,p as y,m as h,l as c,_ as w}from"./index-5c7e093d.js";import"./Alert-99df3442.js";import"./Card-b0f5d5fb.js";const v="/assets/P1.drawio-cc4ad1ab.png",p=l=>(y("data-v-38ae5066"),l=l(),h(),l),C={class:"blog"},B=p(()=>c("br",null,null,-1)),b=p(()=>c("br",null,null,-1)),k=p(()=>c("br",null,null,-1)),N=`@media (max-width: 1200px) { /* 当屏幕尺寸小于 1200px 时被匹配且生效 */
  .class {
   --example-style: --example-value;
  }
}

/* basic example */
.responsive {
  font-size: 2em;
}

@media (max-width: 1200px) {
  .responsive {
    font-size: 1em;
  }
}
`,P=`@media (max-width: 1200px) {
  .wide-only {
    display: none !important;
  } 
}

@media not (max-width: 1200px) {
  .narrow-only {
    display: none !important;
  }
}
`,z=`.narrow-only {
  display: none !important;
}

@media (max-width: 1200px) {
  .wide-only {
    display: none !important;
  } 
  .narrow-only {
    display: normal;
  }
}
`,V=`.card-container {
  columns: 4;
  column-gap: normal;
}

.card {
  break-inside: avoid;
}

@media (max-width: 1200px) {
  .card-container {
    columns: 3;
  }
}

@media (max-width: 768px) {
  .card-container {
    columns: 2;
  }
}

@media (max-width: 480px) {
  .card-container {
    columns: 1;
  }
}
`,D=f({__name:"B2",setup(l){const r=x.B2;return document.title=r.title,(I,M)=>(S(),g("div",C,[e(n(u),{prefix:"bar",class:"title"},{default:o(()=>[a(m(n(r).title),1)]),_:1}),e(n(u),{prefix:"bar",class:"date"},{default:o(()=>[a(m(n(r).date),1)]),_:1}),e(n(d)),e(t,null,{default:o(()=>[a(" 写软工的人肯定在立项最开始的时候就想过写的软件应该在电脑上用还是在手机上用。 软工的 PM 通常都懒得思考并直接回答：电脑手机都做吧都做吧。 （所以做多端体验同步的这个需求纯纯是项目经理的脑溢血，想给一分钱做两份网站。） ")]),_:1}),e(t,null,{default:o(()=>[a(" 最开始电脑端和移动端是分离的。比如电脑端域名 www.example.com ，手机端域名就是 m.example.com 。 在两个域名下运行两个服务，访问服务的时候判断一下屏幕尺寸符不符合自己的服务标准，把本来该去另外一个站的人赶到自己该去的地方。 这种做法可以很好地考虑手机和电脑的性能差异和使用习惯各自展示合适的信息，也催生了手机端浏览器体验阉割的现象。 这种体验阉割包括动画缩减，视图调整，甚至包括需要下载 APP 才能继续阅读这种遭天谴的东西。 ")]),_:1}),e(t,null,{default:o(()=>[a(" 这样做不仅对用户不好也对程序员不友好，因为确确实实是两个界面不一样但是功能一样的网站，重复造轮子了。 这个时候手机处理器的性能也快上来了，所以很自然的想法就是手机和电脑公用一个网站。 那手机屏幕和电脑屏幕区别可太大了。网站的内容字太小了或者太宽了不行，手机用户得骂人；太窄了也不行，电脑得骂。 所以得希望浏览器能自动调整内容的宽度和展现顺序。 此外，前边提到，手机和电脑处理器之间的性能差距已经远小于屏幕带来的差距了，此外还有好事者拖动浏览器窗口改变大小来 cosplay 手机，所以现在更合适的叫法是宽屏设备和窄屏设备。 ")]),_:1}),e(n(d)),e(t,null,{default:o(()=>[a(" 响应式这个概念，比多端适配还要上一个层次。不仅对不同宽度的屏幕有适应性的适配，而且能随着屏幕尺寸的改变自动响应性地调整，比如字体大小，展示列数等等。 本站采用了响应式技术，有好事者不妨改变一下窗口宽度看看。 ")]),_:1}),e(i,{link:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design",title:"MDN上关于响应式的介绍",intro:"文中介绍了响应式的历史和一些简单的实现方式"}),e(t,null,{default:o(()=>[a(" 现在我们的需求是要实现响应式布局，而且最好是用纯 CSS 来实现，否则 JS 炸掉的时候有可能拖累整个页面。 下面介绍 CSS 的媒体查询语法：当页面满足一些条件的时候生效。 ")]),_:1}),e(s,{code:N,language:"css",notation:"CSS媒体查询"}),e(t,null,{default:o(()=>[a(" 这是本页面字体大小使用的设置。直观的效果就是宽屏幕字体大，窄屏幕字体小。 当渲染区域大于 1200px 时 @media 内部的样式不生效，字体大小由外面的样式决定。小于 1200px 时，内部样式生效，层叠在外部样式之上覆盖了此前的字体大小设置。 ")]),_:1}),e(s,{code:P,language:"css",notation:"CSS 响应式显隐"}),e(t,null,{default:o(()=>[a(" 这是本网站标题栏的控制逻辑，不同的元素在不同的屏幕大小下分别出现。这里用到了 @media not (condition) {} 用来匹配与互补的条件。然后分别施加 display: none; 样式来隐藏。 ")]),_:1}),e(s,{code:z,language:"css",notation:"CSS 响应式显隐，另一种不是很推荐的实现"}),e(t,null,{default:o(()=>[a(" 为什么不使用外界设置 .narrow-only { display: none; } 并在第一个 @media 框中设置另一个 display 呢？ 因为一些组件库和自定义元素的 display 属性挺奇怪的，比如 block, inline. 没办法在 @media 里面有一个统一的值来设置。 另外，很多组件库施加的 CSS 会莫名其妙的比我们这里的 CSS 优先级高，导致我们的 CSS 在竞争中败北，所以需要用 !important。 ")]),_:1}),e(n(d)),e(t,null,{default:o(()=>[a(" 瀑布流布局是常见的展示内容的布局形式，内容从上到下依次排列。例如本站的 Blog 界面。 我们希望瀑布流布局能随屏幕大小响应式地自动改变列数。以达到更好的效果。 ")]),_:1}),e(s,{code:V,language:"css",notation:"CSS 响应式瀑布流"}),e(t,null,{default:o(()=>[a(" 这里我们用 .card-container 和 .card 分别表示瀑布和瀑布内元素。在外部默认生效的 CSS 中为瀑布设置了 4 列，间距为 normal 的属性。 在三个断点不同的媒体查询中，分别将瀑布的列数更改为 3, 2, 1 列。他们将在屏幕尺寸小到一定范围时生效，将瀑布列数改为合适值。 ")]),_:1}),e(t,null,{default:o(()=>[a(" 单纯修改瀑布的列数会导致瀑布元素被腰斩，所以需要设置 break-inside: avoid; 属性来避免从内部被断开。 ")]),_:1}),e(i,{link:"https://trickeye.github.io/#/blogs",title:"Blogs",intro:"以上便是此网站在 Blog 界面实现响应式瀑布流时使用的代码。欢迎去试试"}),e(n(d)),e(_,{title:"组件库的响应式",src:n(v)},{default:o(()=>[a(" 有组件库提供响应式布局功能。"),B,e(i,{link:"https://vuetifyjs.com/en/components/grids/#offset-breakpoint",title:"Vuetify",intro:"Vuetify / v-container, v-row, v-col 响应式布局"}),e(i,{link:"https://www.naiveui.com/zh-CN/os-theme/components/grid#responsive-item.vue",title:"Naive ui",intro:"Naive ui / n-grid, n-grid-item 响应式布局"}),a(" 上面提到的两个组件库允许为栅格元素设置在不同宽度下占据的屏幕宽度。（将容器宽度划分为 x 等份，并用数字来指派占据的份额）"),b,a(" 响应式体现在屏幕断点上，将不同大小的屏幕分类为 xxs, xs, sm, md, lg, xl, xxl 等类别，各自处理。"),k]),_:1},8,["src"])]))}});const J=w(D,[["__scopeId","data-v-38ae5066"]]);export{J as default};
