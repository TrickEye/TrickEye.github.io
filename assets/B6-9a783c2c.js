import{b}from"./meta-ba8d7ebb.js";import{B as o}from"./BlogParagraph-3ed2e130.js";import{B as h}from"./BlogLink-39e83552.js";import{B as i}from"./BlogCodeBlock-fce91557.js";import{B as m}from"./BlogFigure-056c731f.js";import{d as p,c as f,a as t,w as n,u as s,o as g,b as e,t as d,N as _,f as u,p as y,m as B,l as a,_ as w}from"./index-8b2e8770.js";import"./Alert-56dd399f.js";import"./Card-542ae3a8.js";const x="/assets/P1-1dbdaada.png",l=r=>(y("data-v-3f70285f"),r=r(),B(),r),O={class:"blog"},R=l(()=>a("code",null,"when",-1)),j=l(()=>a("code",null,"case",-1)),N=l(()=>a("code",null,"case",-1)),q=l(()=>a("br",null,null,-1)),I=l(()=>a("br",null,null,-1)),E=l(()=>a("br",null,null,-1)),P=l(()=>a("br",null,null,-1)),S=l(()=>a("br",null,null,-1)),v=l(()=>a("br",null,null,-1)),C=l(()=>a("br",null,null,-1)),k=l(()=>a("br",null,null,-1)),D=l(()=>a("br",null,null,-1)),H=l(()=>a("br",null,null,-1)),V=l(()=>a("br",null,null,-1)),A=`case year
    when 1800..1899 then "19th century"
    when 1900..1999 then "19th century"
    when 2000..2099 then "19th century"
    else "wtf"
end`,J=`Ha! I am compared! with 1
ret1: true
ret2: false
ret3: -1
Ha! I am compared! with 1
ret4: 1`,T=p({__name:"B6",setup(r){const c=b.B6;return document.title=c.title,(F,L)=>(g(),f("div",O,[t(s(_),{prefix:"bar",class:"title"},{default:n(()=>[e(d(s(c).title),1)]),_:1}),t(s(_),{prefix:"bar",class:"date"},{default:n(()=>[e(d(s(c).date),1)]),_:1}),t(s(u)),t(o,null,{default:n(()=>[e(" 本文中使用 case quality 操作符这一称呼来指代 ruby 中形如 ”===“ 的操作符。 这一操作符在之前接触过的其他语言的操作符几乎没有直接能划等号的替换。 本文调查语言标准和语言文档来给出一个对 case equality 操作符语义上的解析，也顺便完成 Ruby 课的作业。 ")]),_:1}),t(s(u)),t(o,null,{default:n(()=>[e(" 文法：能用 == 的地方就能用 ===，但是能用 === 的地方不一定能用 ==，需要结合 class 来具体分析，可以详细看看后面的具体语义分析。 ")]),_:1}),t(o,null,{default:n(()=>[e(" 语义：基于 Programming Ruby 的解释，=== 操作符用于检测在 case 语句的 when 子句中的相等性。（ ===: Used to test equality within a "),R,e(" clause of a "),j,e(" statement）。如何理解 case equality 这个名字？ 我认为一个可能的解释是这个操作符会在 case 句中自动调用。 ")]),_:1}),t(h,{title:"Programming Ruby",link:"http://ruby-doc.com/docs/ProgrammingRuby/",intro:"ruby 社区提供的 Programming Ruby 在线文档"}),t(o,null,{default:n(()=>[e(" 在判断 "),N,e(" 语句最终进入什么分支的时候，ruby 使用 === 来比较。所有的内置类型都对 === 方法做了有效定义，可以直接使用。 当然了，自定义的类型，如果使用其他有意义的语句覆写了 === 方法，便也可以在 case 中按编程者希望的方式使用。下面是一个简单的示例： ")]),_:1}),t(i,{code:A,language:"ruby"}),t(s(u)),t(o,null,{default:n(()=>[e(" Ruby 这门语言有非常强的动态性，这意味着 === 也是一个（可以被重载的）方法，不同的类针对其各自的性质采取了不同的实现方式来进行重载。 这意味着单纯讨论 === 会干什么是没有意义的，而应该结合调用 === 操作符的对象所持有的类型来解释。"),q,e(" 1. Array: arr === anOtherArray; 这里的结果与数组的 == 操作等效（包含相等元素数量，且一一相同）"),I,e(" 2. Date: ref === anOther; 要求 anOther 必须是 Numeric，并会被视为一个 Julian day number，在这个 Julian day number 与 ref 相同时返回 true。注意 Date 类是没有 == 方法的。"),E,e(" 3. Range: rng === anObject; 当 anObject 是 rng 的一个元素是返回真。"),P,e(" 4. RegExp: rxp === aString; 这里是 RegExp 实例方法 =~ 的同义词。"),S,e(" 5. String: str === anObject; 这里是 String 实例方法 == 的同义词。"),v,e(" 6. Module: mod === anObject; 当 anObject 是 mod 或其后代的一个实例。"),C,e(" 7. Object: obj === anObject; 是 Object 实例方法 == 的同义词（除非另外重载） ")]),_:1}),t(o,null,{default:n(()=>[e(" 当一个对象的 === 方法被显式调用，或者因为在 case 句的 when 子句中而被调用的时候，会按照重载规则执行相应的方法，或者因为未被重载而退化成 == 方法。 下面我们做一些实验来确认一下这个法则。 ")]),_:1}),t(s(u)),t(m,{src:s(x),title:"实验：什么时候触发 Case Equality?"},{default:n(()=>[e(" 没有什么比一段代码来得直接了：在这一段代码中，NoisyInteger 类重载了 === 方法使每次被调用时都会叫一声。 随后的代码中有四个可能触发 Case Equality 比较的地方。我们主要要关注的问题是："),k,D,e(" 1. ret1, ret2, ret3, ret4 分别是什么结果。"),H,e(" 2. 什么时候调用的是 NoisyInteger 实例的 === 方法。什么时候调用的是 integer 实例的 === 方法。"),V,t(i,{code:J,notation:"以上为执行结果，可以验证一下猜想"})]),_:1},8,["src"])]))}});const Y=w(T,[["__scopeId","data-v-3f70285f"]]);export{Y as default};
