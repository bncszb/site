import{t as m,b as i,c as O}from"../chunks/DLkiQsTr.js";import"../chunks/DxI0W36x.js";import{G as $,J as x,$ as B,S as J,Q as n,m as k,O as M,R as r}from"../chunks/DtEh0g1T.js";import{h as P}from"../chunks/DKH0es5L.js";import{w as T,r as W,e as A,v as C,g as D,a as S,i as b}from"../chunks/DyG4mmfs.js";import{c as G}from"../chunks/BIYPI0ir.js";import{i as H}from"../chunks/APetCzL7.js";const Q=!0,st=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"})),V=[...T,...W,...A,...C];class E{constructor(t){this.roles=t}getProjects(){let t=[];for(const e of this.roles)e.projects&&(t=t.concat(e.projects));return t}getSkillsWithSitutation(){let t=new Map;for(const e of this.roles){for(const s of e.skills||[])t.set(s,[...t.get(s)??[],e]);for(const s of e.projects||[])for(const l of s.skills||[])t.set(l,[...t.get(l)??[],s])}return t}getSkills(){return Array.from(this.getSkillsWithSitutation().keys())}}const F=new E(V);var I=m(`<meta name="description" content="John Doe's CV">`),K=m('<tr class="svelte-1qp9r3"><td class="svelte-1qp9r3"></td></tr>'),L=m('<main class="svelte-1qp9r3"><header><h1 class="svelte-1qp9r3">Skills</h1> <table class="svelte-1qp9r3"><tbody></tbody></table></header></main>');function ot(f,t){$(t,!1);const e=[2,3,4],s=[100,80,60],l=F.getSkills().filter(o=>o.icon),y=e.map((o,a)=>D(l,a,e));H();var c=L();P(o=>{var a=I();B.title="Bence Szabó",i(o,a)});var d=n(c),h=J(n(d),2),v=n(h);S(v,5,()=>y,b,(o,a,_)=>{var p=K(),g=n(p);S(g,5,()=>k(a),b,(j,q)=>{var u=O(),R=M(u);G(R,()=>k(q).icon,(w,z)=>{z(w,{get size(){return s[_%s.length]}})}),i(j,u)}),r(g),r(p),i(o,p)}),r(v),r(h),r(d),r(c),i(f,c),x()}export{ot as component,st as universal};
