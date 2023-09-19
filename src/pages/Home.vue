<script setup lang="ts">
import { NH1, NP, NDivider } from 'naive-ui'
import BlogLink from '../blogs/BlogLink.vue';
</script>

<template>
<div>
  <n-h1 prefix="bar" style="text-align: start;">TrickEye Blog</n-h1>
  <n-p>由衷地欢迎您！我的朋友。</n-p>
  <n-p>我会在这里写一些技术文章，希望您能喜欢。</n-p>
  <n-p>实不相瞒，这个网站是我第三代网站了，所以前代地博客还在陆续搬运中</n-p>
  <BlogLink link="/#/blogs" title="博客列表" intro="我推荐您去我的博客列表里看看"></BlogLink>
  <n-p>如果你对我感兴趣，也欢迎您来我的简介页面看看</n-p>
  <BlogLink link="/#/about" title="关于我" intro="我也推荐您去我的简介页面看看"></BlogLink>

  <n-divider></n-divider>
  <n-p>最近很喜欢听：第六交响曲“悲怆” 柴可夫斯基</n-p>
  <!-- <n-h2>唐 · 李白</n-h2>
  <n-p>噫嘘唏，危乎高哉！蜀道之难，难于上青天。</n-p>
  <n-p>蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连。</n-p>
  <n-p>上有六龙回日之高标，下有冲波逆折之回川。黄鹤之飞尚不得过，猿猱欲度愁攀援。青泥何盘盘，百步九折萦岩峦。扪参历井仰胁息，以手抚膺坐长叹。</n-p>
  <n-p>问君西游何时还？畏途巉岩不可攀。但见悲鸟号古木，雄飞雌从绕林间。又闻子规啼夜月，愁空山。</n-p>
  <n-p>蜀道之难，难于上青天，使人听此凋朱颜！连峰去天不盈尺，枯松倒挂倚绝壁。飞湍瀑流争喧豗，砯崖转石万壑雷。其险也如此，嗟尔远道之人胡为乎来哉！</n-p>
  <n-p>剑阁峥嵘而崔嵬，一夫当关，万夫莫开。所守或匪亲，化为狼与豺。朝避猛虎，夕避长蛇，磨牙吮血，杀人如麻。锦城虽云乐，不如早还家。</n-p>
  <n-p>蜀道之难，难于上青天，侧身西望长咨嗟！</n-p> -->
</div>
</template>

<style scoped>
* {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.n-h1 {
  font-size: 3em;
  font-weight: bold;
}
.n-h2 {
  font-size: 2em;
  font-weight: bold;
}
.n-p {
  font-size: 1.5em;
}
</style>