<script setup lang="ts">
import { NH1, NDivider, NCard, NP, NTag, NA, NIcon } from 'naive-ui'

import Bio1 from '../assets/bio-1.jpg'
import Bio2 from '../assets/bio-2.jpg'
import Bio3 from '../assets/bio-3.jpg'
import Bio4 from '../assets/bio-4.jpg'
import Bio5 from '../assets/bio-5.jpg'
import Bio6 from '../assets/bio-6.jpg'

</script>

<template>
  <div class="bio">
    <n-h1 class="title" prefix="bar">TrickEye</n-h1>
    <n-divider></n-divider>
    <div class="cardsbox">
        <div class="cards">
            <n-card class="card1" title="Je suis TrickEye, bienvenue!">
                <template #cover>
                    <img class="card-img" :src="Bio1" alt="">
                    <!-- <n-image height="300" :src="Bio1"></n-image> -->
                </template>
                <n-p>“我是TrickEye，欢迎”</n-p>
                <n-p>北航计算机学院大四在读</n-p>
                <n-p>来自四川</n-p>
                <template #footer>
                    <n-tag>2022年2月 · 北京延庆 阪泉综合服务中心 · <n-a :href="Bio1">原图</n-a></n-tag>
                </template>
            </n-card>
            <n-card class="card1" title="Interests in life">
                <template #cover>
                    <img class="card-img" :src="Bio2" alt="">
                </template>
                <n-p>交响音乐：莫扎特，柴可夫斯基，贝多芬；卡拉扬，小泽征尔，柏林爱乐乐团；</n-p>
                <n-p>一级方程式锦标赛；</n-p>
                <n-p>做饭；</n-p>
                <template #footer>
                    <n-tag>2022年1月 · 北京航空航天大学 · <n-a :href="Bio2">原图</n-a></n-tag>
                </template>
            </n-card>
            <n-card class="card1" title="Skills & interests in technology">
                <template #cover>
                    <img class="card-img" :src="Bio3" alt="">
                </template>
                <n-p>JavaScript, TypeScript, Vue</n-p>
                <n-p>Python</n-p>
                <n-p>LaTeX</n-p>
                <n-p>Linux, Git, CI/CD, Azure 和开源软件</n-p>
                <n-p>自然语言处理，大语言模型</n-p>
                <n-p>汉语（母语）英语（CET-6 658）法语（基本听读）</n-p>
                <template #footer>
                    <n-tag>2023年9月 · 北京 国家大剧院 · <n-a :href="Bio3">原图</n-a></n-tag>
                </template>
            </n-card>
            <n-card class="card1" title="Experience">
                <template #cover>
                    <img class="card-img" :src="Bio4" alt="">
                </template>
                <n-p>北京2022年冬奥会赛会志愿者</n-p>
                <n-p>Author of 1 PyPI Package</n-p>
                <n-p>Author of several web applications</n-p>
                <n-p>Curve Contributor & Ambassador</n-p>
                <n-p>Lenovo Scholarship 2023</n-p>
                <template #footer>
                    <n-tag>2023年8月 · 四川 黄龙 · <n-a :href="Bio4">原图</n-a></n-tag>
                </template>
            </n-card>
            <n-card class="card1" title="Contacts">
                <template #cover>
                    <img class="card-img" :src="Bio5" alt="">
                </template>
                <n-p>Email: cuiyikai@buaa.edu.cn</n-p>
                <n-p>微信: TheRealTrickEye</n-p>
                <n-p>GitHub: TrickEye</n-p>
                <template #footer>
                    <n-tag>2023年8月 · 四川成都 凤凰山体育中心 · <n-a :href="Bio5">原图</n-a></n-tag>
                </template>
            </n-card>
            <n-card class="card1" title="Other Projects">
                <template #cover>
                    <img class="card-img" :src="Bio6" alt="">
                </template>
                <n-p>
                    <n-a href="https://trickeye.github.io/dandelion/"><n-icon size="xx-large"><strong>1</strong></n-icon></n-a>
                    <div style="display: inline-block;">Dandelion: 蒲公英实践队展示网站<br>2023年8月-2023年9月</div>
                </n-p>
                <n-p>
                    <n-a href="https://trickeye.github.io/paraTeX/"><n-icon size="xx-large"><strong>2</strong></n-icon></n-a>
                    <div style="display: inline-block;">ParaTeX: Markdown -> LaTeX 转换工具<br>和一个 PyPI Package<br>2023年1月-2023年8月</div>
                </n-p>
                <n-p>
                    <n-a href="https://trickeye.github.io/undefinedBehaviors/"><n-icon size="xx-large"><strong>3</strong></n-icon></n-a>
                    <div style="display: inline-block">Undefined behaviors: C语言未定义行为分析<br>2023年3月-2023年6月</div>
                </n-p>
                <template #footer>
                    <n-tag>2023年7月 · 家里的狗 · <n-a :href="Bio6">原图</n-a></n-tag>
                </template>
            </n-card>
        </div>
    </div>
  </div>
</template>

<style scoped>
.bio {
  width: min(90%, 1800px);
  margin: 0 auto;
  * {
    text-align: start;
  }
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

.cardsbox {
    overflow-x: auto;

    .cards {
        width: 2600px;
        height: 800px;
        
        .card1 {
            float: left;
            max-width: 380px;
            min-height: 800px;
            margin-right: 50px;
        }
    }
}

img.card-img {
    height: 380px;
    object-fit: cover;
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