import{v as F,x as m,y as I,z as W,A as $,B as V,C as _,D as O,d as S,E as D,G as K,H as A,I as j,J as x,K as B,L as G,M as w,c as J,a as y,u as N,w as U,F as Q,o as X,q as Y,b as Z,t as ee,e as ne,_ as te}from"./index-c0545b33.js";function oe(n,e){const o=F(I,null);return m(()=>n.hljs||(o==null?void 0:o.mergedHljsRef.value))}const le=n=>{const{textColor2:e,fontSize:o,fontWeightStrong:c,textColor3:a}=n;return{textColor:e,fontSize:o,fontWeightStrong:c,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:a}},se={name:"Code",common:W,self:le},re=se,ie=$([V("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[_("show-line-numbers",`
 display: flex;
 `),O("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),_("word-wrap",[$("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),$("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),$("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:n})=>{const e=`${n.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]),ae=Object.assign(Object.assign({},B.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ce=S({name:"Code",props:ae,setup(n,{slots:e}){const{internalNoHighlight:o}=n,{mergedClsPrefixRef:c,inlineThemeDisabled:a}=D(),u=K(null),b=o?{value:void 0}:oe(n),p=(t,s,l)=>{const{value:r}=b;return!r||!(t&&r.getLanguage(t))?null:r.highlight(l?s.trim():s,{language:t}).value},z=m(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),f=()=>{if(e.default)return;const{value:t}=u;if(!t)return;const{language:s}=n,l=n.uri?window.decodeURIComponent(n.code):n.code;if(s){const i=p(s,l,n.trim);if(i!==null){if(n.inline)t.innerHTML=i;else{const g=t.querySelector(".__code__");g&&t.removeChild(g);const d=document.createElement("pre");d.className="__code__",d.innerHTML=i,t.appendChild(d)}return}}if(n.inline){t.textContent=l;return}const r=t.querySelector(".__code__");if(r)r.textContent=l;else{const i=document.createElement("pre");i.className="__code__",i.textContent=l,t.innerHTML="",t.appendChild(i)}};A(f),j(x(n,"language"),f),j(x(n,"code"),f),o||j(b,f);const L=B("Code","-code",ie,re,n,c),v=m(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:s},self:{textColor:l,fontSize:r,fontWeightStrong:i,lineNumberTextColor:g,"mono-3":d,"hue-1":R,"hue-2":k,"hue-3":H,"hue-4":E,"hue-5":P,"hue-5-2":T,"hue-6":q,"hue-6-2":M}}=L.value,{internalFontSize:C}=n;return{"--n-font-size":C?`${C}px`:r,"--n-font-family":s,"--n-font-weight-strong":i,"--n-bezier":t,"--n-text-color":l,"--n-mono-3":d,"--n-hue-1":R,"--n-hue-2":k,"--n-hue-3":H,"--n-hue-4":E,"--n-hue-5":P,"--n-hue-5-2":T,"--n-hue-6":q,"--n-hue-6-2":M,"--n-line-number-text-color":g}}),h=a?G("code",m(()=>`${n.internalFontSize||"a"}`),v,n):void 0;return{mergedClsPrefix:c,codeRef:u,mergedShowLineNumbers:z,lineNumbers:m(()=>{let t=1;const s=[];let l=!1;for(const r of n.code)r===`
`?(l=!0,s.push(t++)):l=!1;return l||s.push(t++),s.join(`
`)}),cssVars:a?void 0:v,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var n,e;const{mergedClsPrefix:o,wordWrap:c,mergedShowLineNumbers:a,onRender:u}=this;return u==null||u(),w("code",{class:[`${o}-code`,this.themeClass,c&&`${o}-code--word-wrap`,a&&`${o}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?w("pre",{class:`${o}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}}),ue=S({__name:"BlogCodeBlock",props:{code:{type:String,required:!0},language:{type:String,required:!1},notation:{type:String,required:!1}},setup(n){return(e,o)=>(X(),J(Q,null,[y(N(ce),{"show-line-numbers":"",code:n.code,language:n.language},null,8,["code","language"]),y(N(ne),null,{default:U(()=>[Y(e.$slots,"default",{},void 0,!0),Z(ee(n.notation?n.notation:""),1)]),_:3})],64))}});const de=te(ue,[["__scopeId","data-v-27185ed5"]]);export{de as B};
