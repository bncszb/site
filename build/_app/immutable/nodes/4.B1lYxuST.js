import{t as i,b as a,c as y}from"../chunks/CRija7ne.js";import"../chunks/CY5YOD78.js";import{z,C as R,$ as M,L as f,J as h,G as B,K as v,g as l,ap as C,I as d}from"../chunks/Cu8lvS-w.js";import{s as u}from"../chunks/DvwNpsK6.js";import{w as D,r as J,e as O,v as P,a as g,i as _}from"../chunks/CsYUABsH.js";import{h as $}from"../chunks/Cfby2I0i.js";import{i as G}from"../chunks/CSw3ZwLk.js";import"../chunks/CZQ-4nyj.js";const H=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"})),I=[...D,...J,...O,...P];class K{constructor(e){this.roles=e}getProjects(){let e=[];for(const t of this.roles)t.projects&&(e=e.concat(t.projects));return e}getSkills(){let e=new Map;for(const t of this.roles){for(const s of t.skills||[])e.set(s,[...e.get(s)??[],t]);for(const s of t.projects||[])for(const o of s.skills||[])e.set(o,[...e.get(o)??[],s])}return e}}const L=new K(I);var T=i(`<meta name="description" content="John Doe's CV">`),V=i("<p> </p> <!>",1),q=i('<main class="svelte-6phwwe"><header><h1 class="svelte-6phwwe">Bence Szabó MD</h1></header> <!></main>');function Z(c,e){z(e,!1),G();var t=q();$(o=>{var r=T();M.title="Bence Szabó",a(o,r)});var s=f(h(t),2);g(s,1,()=>L.getSkills().entries(),_,(o,r)=>{let k=()=>l(r)[0],j=()=>l(r)[1];var p=V(),n=B(p),w=h(n,!0);v(n);var b=f(n,2);g(b,1,j,_,(x,S)=>{C();var m=y();d(()=>u(m,l(S).name)),a(x,m)}),d(()=>u(w,k().name)),a(o,p)}),v(t),a(c,t),R()}export{Z as component,Y as universal};
