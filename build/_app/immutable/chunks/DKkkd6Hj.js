import{t as g,b as d}from"./CIWxBSrI.js";import"./0Lo_ayGQ.js";import{z as w,L as s,M as l,N as h,K as y,C as B,g as x,J as W}from"./C9D1Bp-g.js";import{s as k}from"./CpKimFcu.js";import{w as A,r as C,a as E,v as H,e as P,i as R}from"./CwkWNENR.js";import{p as z,i as M,c as J}from"./BxckETG0.js";import{i as D}from"./CEneQUul.js";const K=[...A,...C,...E,...H];function L(i){let e=i.skills||[];for(const t of i.projects||[])e=e.concat(t.skills||[]);return e}function N(i){let e=[];for(const t of i.projects||[])e=e.concat(t.skills||[]);return(i.skills||[]).filter(t=>!e.includes(t))}class q{constructor(e){this.roles=e}getProjects(){let e=[];for(const t of this.roles)t.projects&&(e=e.concat(t.projects));return e}getSkillsWithSitutation(){let e=new Map;for(const t of this.roles){for(const r of t.skills||[])e.set(r,[...e.get(r)??[],t]);for(const r of t.projects||[])for(const o of r.skills||[])e.set(o,[...e.get(o)??[],r])}return e}getSkills(){return Array.from(this.getSkillsWithSitutation().keys())}getProjectsBySkill(e){return this.getProjects().filter(t=>{var r;return(r=t.skills)==null?void 0:r.includes(e)})}getRolesBySkill(e){return this.roles.filter(t=>L(t).includes(e))}getRolesByGeneralSkill(e){return this.roles.filter(t=>N(t).includes(e))}}const G=new q(K);var F=g("<li> </li>"),I=g("<ul></ul>"),O=g('<div class="project-details svelte-1mukk7h"><h3> </h3> <p> </p> <!></div>');function Q(i,e){w(e,!1);let t=z(e,"project",8);D();var r=O(),o=s(r),f=s(o,!0);l(o);var a=h(o,2),m=s(a,!0);l(a);var p=h(a,2);{var j=c=>{var n=I();P(n,5,()=>t().bulletPoints,R,(b,S)=>{var v=F(),u=s(v,!0);l(v),y(()=>k(u,x(S))),d(b,v)}),l(n),d(c,n)};M(p,c=>{t().bulletPoints&&t().bulletPoints.length>0&&c(j)})}l(r),y(()=>{k(f,t().name),k(m,t().description||t().shortDescription)}),d(i,r),B()}var T=g("<li> </li>"),U=g("<ul></ul>"),V=g('<div class="role-details svelte-wed4hi"><h3> </h3> <p> </p> <!></div>');function X(i,e){w(e,!1);let t=z(e,"role",8);D();var r=V(),o=s(r),f=s(o,!0);l(o);var a=h(o,2),m=s(a,!0);l(a);var p=h(a,2);{var j=c=>{var n=U();P(n,5,()=>t().bulletPoints,R,(b,S)=>{var v=T(),u=s(v,!0);l(v),y(()=>k(u,x(S))),d(b,v)}),l(n),d(c,n)};M(p,c=>{t().bulletPoints&&t().bulletPoints.length>0&&c(j)})}l(r),y(()=>{k(f,t().name),k(m,t().description)}),d(i,r),B()}var Y=g('<table class="svelte-1lzawka"><tbody><tr><td><h1> </h1></td><td><!></td></tr></tbody></table> <h2>Experience</h2> <!> <!>',1);function ot(i,e){w(e,!1);let t=z(e,"skill",8),r=40;D();var o=Y(),f=W(o),a=s(f),m=s(a),p=s(m),j=s(p),c=s(j,!0);l(j),l(p);var n=h(p),b=s(n);J(b,()=>t().icon,(u,_)=>{_(u,{size:r})}),l(n),l(m),l(a),l(f);var S=h(f,4);P(S,1,()=>G.getProjectsBySkill(t()),R,(u,_)=>{Q(u,{get project(){return x(_)}})});var v=h(S,2);P(v,1,()=>G.getRolesByGeneralSkill(t()),R,(u,_)=>{X(u,{get role(){return x(_)}})}),y(()=>k(c,t().name)),d(i,o),B()}export{ot as S,G as h};
