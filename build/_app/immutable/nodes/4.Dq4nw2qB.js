import{t as u,a as i,h as G,c as H}from"../chunks/Bg6s9iBa.js";import"../chunks/CLRW1yDS.js";import{t as D,s as x,n as r,o as t,p as I,k as B,g as s,m as J,T as k,$ as K,U as T,V as L}from"../chunks/BuM5_ehx.js";import{e as M}from"../chunks/CkXKC6ux.js";import{p as j,i as N,c as Q}from"../chunks/vuf6Yb3c.js";import{a as R,b as U,h as W,g as X,e as V,i as w,c as Y}from"../chunks/tEgnYaLq.js";import{i as Z}from"../chunks/CI3B88DV.js";import{S as ee}from"../chunks/Bpz1DLZ-.js";const te=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:te},Symbol.toStringTag,{value:"Module"}));var ae=u('<div><button class="close-btn svelte-1uxgzpl">×</button> <div class="content svelte-1uxgzpl"><!></div></div>');function se(y,c){let m=j(c,"isOpen",8),d=j(c,"onClose",8);var o=ae(),f=r(o),a=x(f,2),n=r(a);R(n,c,"default",{}),t(a),t(o),D(()=>U(o,`side-panel ${(m()?"open":"")??""} svelte-1uxgzpl`)),M("click",f,function(...z){var g;(g=d())==null||g.apply(this,z)}),i(y,o)}var oe=u(`<meta name="description" content="Bence Szabó's CV">`),ne=u("<button><!></button>"),le=u('<tr class="svelte-6o9iug"><td class="svelte-6o9iug"></td></tr>'),ie=u('<main><h1 class="svelte-6o9iug">Skills</h1> <table class="svelte-6o9iug"><tbody></tbody></table></main> <!>',1);function be(y,c){I(c,!1);const m=[2,3,4],d=[100,80,60],o=W.getSkills().filter(e=>e.icon),f=m.map((e,l)=>X(o,l,m));let a=T(!1),n=T(null);async function z(e){k(n,e),await L(),k(a,!0)}function g(){k(a,!1),k(n,null)}Z();var O=ie();G(e=>{var l=oe();K.title="Bence Szabó",i(e,l)});var b=B(O),P=x(r(b),2),$=r(P);V($,5,()=>f,w,(e,l,_)=>{var p=le(),h=r(p);V(h,5,()=>s(l),w,(v,C)=>{var S=ne(),A=r(S);Q(A,()=>s(C).icon,(E,F)=>{F(E,{get size(){return d[_%d.length]}})}),t(S),M("click",S,()=>z(s(C))),i(v,S)}),t(h),t(p),i(e,p)}),t($),t(P),t(b);var q=x(b,2);se(q,{get isOpen(){return s(a)},onClose:g,children:(e,l)=>{var _=H(),p=B(_);{var h=v=>{ee(v,{get skill(){return s(n)}})};N(p,v=>{s(n)&&v(h)})}i(e,_)},$$slots:{default:!0}}),D(()=>U(b,Y(s(a)?"panel-open":""),"svelte-6o9iug")),i(y,O),J()}export{be as component,ge as universal};
