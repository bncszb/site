import{s as a,S as n}from"../chunks/91f5cIRx.js";import"../chunks/Bg9kRutz.js";import{c as l,p as i,f as p,g as u}from"../chunks/By9zLh9r.js";import{p as c}from"../chunks/Caj6IEu4.js";const m=({params:t})=>{const e=a.get(t.skill);if(!e)throw new Error("Skill not found");return{skill:e}},f=!0;async function d(){return[...a.keys()].map(t=>({skill:t}))}const b=Object.freeze(Object.defineProperty({__proto__:null,entries:d,load:m,prerender:f},Symbol.toStringTag,{value:"Module"}));function _(t,e){i(e,!0);let r=c(e,"data",7),{skill:o}=r();return n(t,{skill:o}),p({get data(){return r()},set data(s){r(s),u()}})}l(_,{data:{}},[],[],!0);export{_ as component,b as universal};
