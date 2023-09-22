<script setup lang="ts">
import { blogs } from '../meta'
import {NDivider, NH1} from "naive-ui";
import BlogParagraph from "../BlogParagraph.vue";
import BlogLink from "../BlogLink.vue";
import BlogCodeBlock from "../BlogCodeBlock.vue";
import BlogFigure from "../BlogFigure.vue";

import P1 from './P1.png'
import BackButton from "../BackButton.vue";

const blog = blogs["B6"]

document.title = blog.title;

const rubyCaseEquality =
`case year
    when 1800..1899 then "19th century"
    when 1900..1999 then "20th century"
    when 2000..2099 then "21th century"
    else "wtf"
end`

const caseEqualityTestResult =
`Ha! I am compared! with 1
ret1: true
ret2: false
ret3: -1
Ha! I am compared! with 1
ret4: 1`
</script>

<template>
  <div class="blog">
    <n-h1 prefix="bar" class="title">{{ blog.title }}</n-h1>
    <n-h1 prefix="bar" class="date">{{ blog.date }}</n-h1>
    <n-divider></n-divider>
    <BlogParagraph>
      本文中使用 case quality 操作符这一称呼来指代 ruby 中形如 ”===“ 的操作符。
      这一操作符在之前接触过的其他语言的操作符几乎没有直接能划等号的替换。
      本文调查语言标准和语言文档来给出一个对 case equality 操作符语义上的解析，也顺便完成 Ruby 课的作业。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogParagraph>
      文法：能用 == 的地方就能用 ===，但是能用 === 的地方不一定能用 ==，需要结合 class 来具体分析，可以详细看看后面的具体语义分析。
      另一方面，=== 是一个方法，所以 a === b 的时候相当于执行了 a.===(b) 方法。因此 === 可以被视为一个方法名，函数能用的地方也理应能用 ===。
    </BlogParagraph>
    <BlogParagraph>
      语义：基于 Programming Ruby 的解释，=== 操作符用于检测在 case 语句的 when 子句中的相等性。（ ===: Used to test equality within
      a <code>when</code> clause of a <code>case</code> statement）。如何理解 case equality 这个名字？
      我认为一个可能的解释是这个操作符会在 case 句中自动调用。
    </BlogParagraph>
    <BlogLink title="Programming Ruby" link="http://ruby-doc.com/docs/ProgrammingRuby/" intro="ruby 社区提供的 Programming Ruby 在线文档"></BlogLink>
    <BlogParagraph>
      在判断 <code>case</code> 语句最终进入什么分支的时候，ruby 使用 === 来比较。所有的内置类型都对 === 方法做了有效定义，可以直接使用。
      当然了，自定义的类型，如果使用其他有意义的语句覆写了 === 方法，便也可以在 case 中按编程者希望的方式使用。下面是一个简单的示例：
    </BlogParagraph>
    <BlogCodeBlock :code="rubyCaseEquality" language="ruby"></BlogCodeBlock>
    <n-divider></n-divider>
    <BlogParagraph>
      Ruby 这门语言有非常强的动态性，这意味着 === 也是一个（可以被重载的）方法，不同的类针对其各自的性质采取了不同的实现方式来进行重载。
      这意味着单纯讨论 === 会干什么是没有意义的，而应该结合调用 === 操作符的对象所持有的类型来解释。<br>
      1. Array: arr === anOtherArray; 这里的结果与数组的 == 操作等效（包含相等元素数量，且一一相同）<br>
      2. Date: ref === anOther; 要求 anOther 必须是 Numeric，并会被视为一个 Julian day number，在这个 Julian
      day number 与 ref 相同时返回 true。注意 Date 类是没有 == 方法的。<br>
      3. Range: rng === anObject; 当 anObject 是 rng 的一个元素是返回真。<br>
      4. RegExp: rxp === aString; 这里是 RegExp 实例方法 =~ 的同义词。<br>
      5. String: str === anObject; 这里是 String 实例方法 == 的同义词。<br>
      6. Module: mod === anObject; 当 anObject 是 mod 或其后代的一个实例。<br>
      7. Object: obj === anObject; 是 Object 实例方法 == 的同义词（除非另外重载）
    </BlogParagraph>
    <BlogParagraph>
      当一个对象的 === 方法被显式调用，或者因为在 case 句的 when 子句中而被调用的时候，会按照重载规则执行相应的方法，或者因为未被重载而退化成 == 方法。
      下面我们做一些实验来确认一下这个法则。
    </BlogParagraph>
    <n-divider></n-divider>
    <BlogFigure :src="P1" title="实验：什么时候触发 Case Equality?">
      没有什么比一段代码来得直接了：在这一段代码中，NoisyInteger 类重载了 === 方法使每次被调用时都会叫一声。
      随后的代码中有四个可能触发 Case Equality 比较的地方。我们主要要关注的问题是：<br><br>
      1. ret1, ret2, ret3, ret4 分别是什么结果。<br>
      2. 什么时候调用的是 NoisyInteger 实例的 === 方法。什么时候调用的是 integer 实例的 === 方法。<br>
      <BlogCodeBlock :code="caseEqualityTestResult" notation="以上为执行结果，可以验证一下猜想"/>
    </BlogFigure>
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