import{t as h,b as p}from"./cKm3r4-F.js";import"./BRntHVBt.js";import{z as P,O as w,P as k,C as G,S as m,Q as u,R as o,g as j}from"./DNcXbX2e.js";import{s as f}from"./IWPoUG_H.js";import{w as b,r as W,e as z,v as A,a as _,i as R}from"./Ckg5lU4A.js";import{i as C}from"./B0DZCQVA.js";import{p as D}from"./BzrIGMfW.js";const H=[...b,...W,...z,...A];function M(r){let t=r.skills||[];for(const e of r.projects||[])t=t.concat(e.skills||[]);return t}function O(r){const t=[];for(const e of r.projects||[])t.concat(e.skills||[]);return(r.skills||[]).filter(e=>!t.includes(e))}class Q{constructor(t){this.roles=t}getProjects(){let t=[];for(const e of this.roles)e.projects&&(t=t.concat(e.projects));return t}getSkillsWithSitutation(){let t=new Map;for(const e of this.roles){for(const l of e.skills||[])t.set(l,[...t.get(l)??[],e]);for(const l of e.projects||[])for(const i of l.skills||[])t.set(i,[...t.get(i)??[],l])}return t}getSkills(){return Array.from(this.getSkillsWithSitutation().keys())}getProjectsBySkill(t){return this.getProjects().filter(e=>{var l;return(l=e.skills)==null?void 0:l.includes(t)})}getRolesBySkill(t){return this.roles.filter(e=>M(e).includes(t))}getRolesByGeneralSkill(t){return this.roles.filter(e=>O(e).includes(t))}}const y=new Q(H);var q=h("<li> </li>"),E=h("<li> </li>"),F=h("<li> </li>"),I=h("<h1> </h1> <p> </p> Projects: <ul></ul> Roles: <ul></ul> Roles with General skill: <ul></ul>",1);function X(r,t){P(t,!1);let e=D(t,"skill",8);C();var l=I(),i=w(l),x=u(i,!0);o(i);var v=m(i,2),B=u(v,!0);o(v);var g=m(v,2);_(g,5,()=>y.getProjectsBySkill(e()),R,(a,n)=>{var s=q(),c=u(s,!0);o(s),k(()=>f(c,j(n).name)),p(a,s)}),o(g);var S=m(g,2);_(S,5,()=>y.getRolesBySkill(e()),R,(a,n)=>{var s=E(),c=u(s,!0);o(s),k(()=>f(c,j(n).name)),p(a,s)}),o(S);var d=m(S,2);_(d,5,()=>y.getRolesByGeneralSkill(e()),R,(a,n)=>{var s=F(),c=u(s,!0);o(s),k(()=>f(c,j(n).name)),p(a,s)}),o(d),k(()=>{f(x,e().name),f(B,e().mastery)}),p(r,l),G()}export{X as S,y as h};
