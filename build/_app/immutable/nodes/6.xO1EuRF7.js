import"../chunks/Bg9kRutz.js";import"../chunks/uSb3XH9H.js";import{d as P,c as T,p as $,t as i,V as O,$ as V,e as o,s as C,a as l,f as D,P as m,r as e}from"../chunks/lNTUv6K_.js";import{e as h,i as x}from"../chunks/9TBRK0G5.js";import{c as G}from"../chunks/BYXfLluO.js";import{a as I}from"../chunks/D_5YcoZE.js";import{i as M}from"../chunks/B6cHYgVA.js";import{o as q}from"../chunks/DYhGcjfY.js";import"../chunks/BPG8naR-.js";import{S as A}from"../chunks/BpQJpF4r.js";import{h as E,g as F}from"../chunks/DPLS2QFe.js";const H=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));var J=i(`<meta name="description" content="Bence Szabó's CV">`),K=(n,c,a)=>c(m(a)),L=i("<button><!></button>"),N=i('<tr class="svelte-1rgtdlu"><td class="svelte-1rgtdlu"></td></tr>'),Q=i('<main class="svelte-1rgtdlu"><h1 class="svelte-1rgtdlu">Skills</h1> <div class="icon-or-text svelte-1rgtdlu"><a href="/site/skills" style="text-decoration: underline;">Icons</a> <a href="/site/skills/text">Text</a> <a href="/site/skills/graph">Graph</a></div> <table class="svelte-1rgtdlu"><tbody></tbody></table></main>');const R={hash:"svelte-1rgtdlu",code:`main.svelte-1rgtdlu {margin:0 auto;padding:20px;}h1.svelte-1rgtdlu {margin-bottom:5px;}table.svelte-1rgtdlu {width:100%;border:none;font-size:medium;}tr.svelte-1rgtdlu,
  td.svelte-1rgtdlu {justify-content:center;text-align:center;flex-wrap:wrap;display:flex;gap:12px;width:300px;margin:10px;}.icon-or-text.svelte-1rgtdlu {display:flex;justify-content:center;gap:20px;margin-bottom:20px;font-size:large;}`};function U(n,c){$(c,!1),I(n,R),console.log("src/routes/skills/%2Bpage.svelte");const a=[2,3,4],g=[100,80,60],_=E.getSkills().filter(t=>t.icon),y=a.map((t,s)=>F(_,s,a));async function k(t){q(A,{skill:t})}M();var p=Q();O(t=>{var s=J();V.title="Bence Szabó",o(t,s)});var u=C(l(p),4),v=l(u);h(v,5,()=>y,x,(t,s,S)=>{var d=N(),f=l(d);h(f,5,()=>m(s),x,(z,b)=>{var r=L();r.__click=[K,k,b];var w=l(r);G(w,()=>m(b).icon,(j,B)=>{B(j,{get size(){return g[S%g.length]}})}),e(r),o(z,r)}),e(f),e(d),o(t,d)}),e(v),e(u),e(p),o(n,p),D()}P(["click"]);T(U,{},[],[],!0);export{U as component,it as universal};
