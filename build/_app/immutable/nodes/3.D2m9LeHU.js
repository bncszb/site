import{t as x,a as k,c as G,n as fe,h as ue}from"../chunks/Bg6s9iBa.js";import"../chunks/CLRW1yDS.js";import{x as X,a5 as pe,az as _e,aA as me,av as ge,b as ke,aB as ye,ao as be,z as we,at as V,q as Y,v as ee,w as xe,p as I,t as P,m as D,s as y,n as v,o as n,k as T,g as b,ah as A,aC as te,aD as Se,e as q,U as ae,T as re,aE as se,au as K,$ as ze}from"../chunks/BuM5_ehx.js";import{a as oe,b as $e,e as E,i as F,M as Ce,d as ie,f as ne,j as le,k as je,l as Ee,m as Fe,n as Me,w as Be,r as Pe,o as Oe,v as Re}from"../chunks/tEgnYaLq.js";import{a as Te,e as Ie,s as O}from"../chunks/CkXKC6ux.js";import{p as j,i as R,c as ve}from"../chunks/vuf6Yb3c.js";import{i as H}from"../chunks/CI3B88DV.js";import{c as De}from"../chunks/Dm-qupjk.js";const He=()=>performance.now(),B={tick:s=>requestAnimationFrame(s),now:()=>He(),tasks:new Set};function de(){const s=B.now();B.tasks.forEach(e=>{e.c(s)||(B.tasks.delete(e),e.f())}),B.tasks.size!==0&&B.tick(de)}function Ve(s){let e;return B.tasks.size===0&&B.tick(de),{promise:new Promise(t=>{B.tasks.add(e={c:s,f:t})}),abort(){B.tasks.delete(e)}}}function U(s,e){s.dispatchEvent(new CustomEvent(e))}function Ae(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const e=s.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function ce(s){const e={},t=s.split(";");for(const i of t){const[d,o]=i.split(":");if(!d||o===void 0)break;const l=Ae(d.trim());e[l]=o.trim()}return e}const Le=s=>s;function Ne(s,e,t,i){var d=(s&ye)!==0,o="both",l,h=e.inert,u=e.style.overflow,a,r;function p(){var g=xe,c=X;Y(null),ee(null);try{return l??(l=t()(e,(i==null?void 0:i())??{},{direction:o}))}finally{Y(g),ee(c)}}var m={is_global:d,in(){e.inert=h,U(e,"introstart"),a=J(e,p(),r,1,()=>{U(e,"introend"),a==null||a.abort(),a=l=void 0,e.style.overflow=u})},out(g){e.inert=!0,U(e,"outrostart"),r=J(e,p(),a,0,()=>{U(e,"outroend"),g==null||g()})},stop:()=>{a==null||a.abort(),r==null||r.abort()}},S=X;if((S.transitions??(S.transitions=[])).push(m),Te){var w=d;if(!w){for(var f=S.parent;f&&f.f&pe;)for(;(f=f.parent)&&!(f.f&_e););w=!f||(f.f&me)!==0}w&&ge(()=>{ke(()=>m.in())})}}function J(s,e,t,i,d){var o=i===1;if(be(e)){var l,h=!1;return we(()=>{if(!h){var g=e({direction:o?"in":"out"});l=J(s,g,t,i,d)}}),{abort:()=>{h=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return d(),{abort:V,deactivate:V,reset:V,t:()=>i};const{delay:u=0,css:a,tick:r,easing:p=Le}=e;var m=[];if(o&&t===void 0&&(r&&r(0,1),a)){var S=ce(a(0,1));m.push(S,S)}var w=()=>1-i,f=s.animate(m,{duration:u});return f.onfinish=()=>{var g=(t==null?void 0:t.t())??1-i;t==null||t.abort();var c=i-g,_=e.duration*Math.abs(c),z=[];if(_>0){var $=!1;if(a)for(var C=Math.ceil(_/16.666666666666668),M=0;M<=C;M+=1){var L=g+c*p(M/C),Q=ce(a(L,1-L));z.push(Q),$||($=Q.overflow==="hidden")}$&&(s.style.overflow="hidden"),w=()=>{var N=f.currentTime;return g+c*p(N/_)},r&&Ve(()=>{if(f.playState!=="running")return!1;var N=w();return r(N,1-N),!0})}f=s.animate(z,{duration:_,fill:"forwards"}),f.onfinish=()=>{w=()=>i,r==null||r(i,1-i),d()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=V)},deactivate:()=>{d=V},reset:()=>{i===0&&(r==null||r(1,0))},t:()=>w()}}const qe=!0,Bt=Object.freeze(Object.defineProperty({__proto__:null,prerender:qe},Symbol.toStringTag,{value:"Module"}));function Ue(s){const e=s-1;return e*e*e+1}function We(s,{delay:e=0,duration:t=400,easing:i=Ue,axis:d="y"}={}){const o=getComputedStyle(s),l=+o.opacity,h=d==="y"?"height":"width",u=parseFloat(o[h]),a=d==="y"?["top","bottom"]:["left","right"],r=a.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),p=parseFloat(o[`padding${r[0]}`]),m=parseFloat(o[`padding${r[1]}`]),S=parseFloat(o[`margin${r[0]}`]),w=parseFloat(o[`margin${r[1]}`]),f=parseFloat(o[`border${r[0]}Width`]),g=parseFloat(o[`border${r[1]}Width`]);return{delay:e,duration:t,easing:i,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*l};${h}: ${c*u}px;padding-${a[0]}: ${c*p}px;padding-${a[1]}: ${c*m}px;margin-${a[0]}: ${c*S}px;margin-${a[1]}: ${c*w}px;border-${a[0]}-width: ${c*f}px;border-${a[1]}-width: ${c*g}px;min-${h}: 0`}}var Ze=x('<div class="accordion-body svelte-1a45pk1"><!></div>'),Ke=x('<div class="accordion-item svelte-1a45pk1"><div><!></div> <!></div>');function he(s,e){I(e,!1);let t=j(e,"isOpen",12,!1);const i=De();function d(){t(!t()),i("toggle",{isOpen:t()})}H();var o=Ke(),l=v(o),h=v(l);oe(h,e,"headerSlot",{}),n(l);var u=y(l,2);{var a=r=>{var p=Ze(),m=v(p);oe(m,e,"default",{}),n(p),Ne(3,p,()=>We),k(r,p)};R(u,r=>{t()&&r(a)})}n(o),P(()=>$e(l,`accordion-header ${(t()?"open":"")??""} svelte-1a45pk1`)),Ie("click",o,d),k(s,o),D()}var Ge=x('<table class="history-element svelte-17ak221"><colgroup><col style="width: 60%;" class="svelte-17ak221"><col style="width: 40%;" class="svelte-17ak221"></colgroup><tbody><tr><td rowspan="2" class="svelte-17ak221"><h3 class="centered tight"> </h3></td><td class="svelte-17ak221"><p class="centered tight"> </p></td></tr><tr><td class="svelte-17ak221"><p class="centered tight"> </p></td></tr></tbody></table>');function Je(s,e){let t=j(e,"title",8,""),i=j(e,"location",8,""),d=j(e,"time",8,"");var o=Ge(),l=y(v(o)),h=v(l),u=v(h),a=v(u),r=v(a,!0);n(a),n(u);var p=y(u),m=v(p),S=v(m,!0);n(m),n(p),n(h);var w=y(h),f=v(w),g=v(f),c=v(g,!0);n(g),n(f),n(w),n(l),n(o),P(()=>{O(r,t()),O(S,i()),O(c,d())}),k(s,o)}var Qe=x('<div class="short-description-with-icons svelte-v9sch3"><table class="short-description-with-icons svelte-v9sch3"><colgroup><col style="width: 60%;" class="svelte-v9sch3"><col style="width: 40%;" class="svelte-v9sch3"></colgroup><tbody class="short-description-with-icons svelte-v9sch3"><tr><td style="text-align: left;" class="svelte-v9sch3"> </td><td class="icons svelte-v9sch3"><!></td></tr></tbody></table></div>');function Xe(s,e){I(e,!1);let t=j(e,"project",8);H();var i=Qe(),d=v(i),o=y(v(d)),l=v(o),h=v(l),u=v(h,!0);n(h);var a=y(h),r=v(a);{var p=m=>{var S=G(),w=T(S);E(w,1,()=>t().skills,F,(f,g)=>{var c=G(),_=T(c);ve(_,()=>b(g).icon,(z,$)=>{$(z,{})}),k(f,c)}),k(m,S)};R(r,m=>{t().skills&&t().skills.length>0&&m(p)})}n(a),n(l),n(o),n(d),n(i),P(()=>O(u,t().shortDescription)),k(s,i),D()}var Ye=x("<li> </li>"),et=x("<ul></ul>"),tt=x('<h4>Projects:</h4> <div class="projects-with-icons svelte-hji4zi"></div>',1),at=x("<li> </li>"),rt=x("Skills: <ul></ul>",1),st=x("<!> <!> <!> <!>",1),ot=x('<div class="role-section"><!></div>');function W(s,e){I(e,!1);let t=j(e,"role",8);H();var i=ot(),d=v(i);{var o=l=>{he(l,{children:(h,u)=>{var a=st(),r=T(a);Ce(r,{get source(){return t().description}});var p=y(r,2);{var m=c=>{var _=et();E(_,5,()=>t().bulletPoints,F,(z,$)=>{var C=Ye(),M=v(C,!0);n(C),P(()=>O(M,b($))),k(z,C)}),n(_),k(c,_)};R(p,c=>{t().bulletPoints&&t().bulletPoints.length>0&&c(m)})}var S=y(p,2);{var w=c=>{var _=tt(),z=y(T(_),2);E(z,5,()=>t().projects,F,($,C)=>{Xe($,{get project(){return b(C)}})}),n(z),k(c,_)};R(S,c=>{t().projects&&t().projects.length>0&&c(w)})}var f=y(S,2);{var g=c=>{var _=rt(),z=y(T(_));E(z,5,()=>ie(t()),F,($,C)=>{var M=at(),L=v(M,!0);n(M),P(()=>O(L,b(C).name)),k($,M)}),n(z),k(c,_)};R(f,c=>{ie(t()).length>0&&c(g)})}k(h,a)},$$slots:{default:!0,headerSlot:(h,u)=>{const a=A(()=>t().instutition+", "+t().location),r=A(()=>t().startDate.toLocaleString("en-US",{year:"numeric",month:"short"})+" - "+(t().endDate?t().endDate.toLocaleString("en-US",{year:"numeric",month:"short"}):"Present"));Je(h,{get title(){return t().name},get location(){return b(a)},get time(){return b(r)},slot:"headerSlot"})}}})};R(d,l=>{t()&&l(o)})}n(i),k(s,i),D()}var it=x("<p><a> </a></p>"),nt=x('<a class="hide-on-mobile svelte-3ckhms"><!></a>'),lt=x('<table class="skill-section svelte-3ckhms"><colgroup><col class="col1 svelte-3ckhms"><col class="col2 svelte-3ckhms"><col class="col3 svelte-3ckhms"></colgroup><tbody><tr><th class="svelte-3ckhms"> </th><td class="svelte-3ckhms"></td><td class="hide-on-mobile svelte-3ckhms"></td></tr></tbody></table>'),ct=x('<div class="skill-section svelte-3ckhms"><!></div>');function vt(s,e){I(e,!1);let t=j(e,"category",8,""),i=j(e,"skills",24,()=>[]);const d=50;H();var o=ct(),l=v(o);{var h=u=>{var a=lt(),r=y(v(a)),p=v(r),m=v(p),S=v(m,!0);n(m);var w=y(m);E(w,5,i,F,(g,c)=>{var _=it(),z=v(_),$=v(z,!0);n(z),n(_),P(C=>{le(z,"href",`/site/skills/${C??""}`),O($,b(c).name)},[()=>ne(b(c))],A),k(g,_)}),n(w);var f=y(w);E(f,5,i,F,(g,c)=>{var _=nt(),z=v(_);ve(z,()=>b(c).icon,($,C)=>{C($,{get alt(){return b(c).name},size:d})}),n(_),P($=>le(_,"href",`/site/skills/${$??""}`),[()=>ne(b(c))],A),k(g,_)}),n(f),n(p),n(r),n(a),P(()=>O(S,t())),k(u,a)};R(l,u=>{t()&&i().length>0&&u(h)})}n(o),k(s,o),D()}var dt=x('<p slot="headerSlot" class="accordion-header.level-1">Skills</p>');function ht(s,e){I(e,!1),H(),he(s,{isOpen:!0,children:(t,i)=>{var d=G(),o=T(d);E(o,1,()=>Ee,F,(l,h)=>{const u=A(()=>je[b(h)].sort((a,r)=>r.mastery-a.mastery));vt(l,{get category(){return b(h)},get skills(){return b(u)}})}),k(t,d)},$$slots:{default:!0,headerSlot:(t,i)=>{var d=dt();k(t,d)}}}),D()}var ft=fe("<svg><!></svg>");function Z(s,e){I(e,!1);let t=j(e,"src",8),i=j(e,"size",8,"1em"),d=j(e,"viewBox",24,()=>{}),o=j(e,"color",8,"currentColor"),l=j(e,"title",24,()=>{}),h=j(e,"className",8,""),u=ae(),a=ae({});te(()=>(q(o()),q(t())),()=>{re(a,{}),o()&&(t().a.stroke!=="none"&&se(a,b(a).stroke="currentColor"),t().a.fill!=="none"&&se(a,b(a).fill="currentColor"))}),te(()=>(q(l()),q(t())),()=>{re(u,(l()?`<title>${l()}</title>`:"")+t().c)}),Se(),H();var r=ft();let p;var m=v(r);Fe(m,()=>b(u),!0,!1),n(r),P(()=>p=Me(r,p,{width:i(),height:i(),viewBox:d(),style:o()?"color: "+o()+";":"","stroke-width":"0",class:h(),...t().a,...b(a),xmlns:"http://www.w3.org/2000/svg"},void 0,!0)),k(s,r),D()}const ut={a:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'},pt={a:{viewBox:"0 0 512 512"},c:'<path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>'},_t={a:{viewBox:"0 0 512 512"},c:'<rect x="128" y="16" width="256" height="480" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></rect><path d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path>'},mt={a:{viewBox:"0 0 512 512"},c:'<path d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><circle cx="256" cy="192" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></circle>'};var gt=x('<div class="contact-info svelte-1avnha9"><div class="contact-item svelte-1avnha9"><!> <a href="mailto:bszabo96@gmail.com" class="svelte-1avnha9">bszabo96@gmail.com</a></div> <div class="contact-item svelte-1avnha9"><!> <span>+36 20 566 6348</span></div> <div class="contact-item svelte-1avnha9"><!> <span>Budapest, Hungary</span></div> <div class="contact-item svelte-1avnha9"><a href="https://www.linkedin.com/in/szabob/" target="_blank" class="svelte-1avnha9"><!></a></div></div>');function kt(s){var t=gt(),i=v(t),d=v(i);Z(d,{src:ut,size:24}),K(2),n(i);var o=y(i,2),l=v(o);Z(l,{src:_t,size:24}),K(2),n(o);var h=y(o,2),u=v(h);Z(u,{src:mt,size:24}),K(2),n(h);var a=y(h,2),r=v(a),p=v(r);Z(p,{src:pt,size:24}),n(r),n(a),n(t),k(s,t)}var yt=x('<div class="svelte-m1j2st"><summary class="svelte-m1j2st">Experienced IT professional with a deep understanding of biomedical data</summary></div>');function bt(s){var e=yt();k(s,e)}var wt=x(`<meta name="description" content="John Doe's CV">`),xt=x('<main class="svelte-9q6d1"><header><h1 class="svelte-9q6d1">Bence Szabó MD</h1></header> <!> <!> <!> <h2>Work Experience</h2> <!> <h2>Research</h2> <!> <h2>Education</h2> <!> <h2>Volunteering</h2> <!></main>');function Pt(s){var e=xt();ue(a=>{var r=wt();ze.title="Bence Szabó",k(a,r)});var t=y(v(e),2);kt(t);var i=y(t,2);bt(i);var d=y(i,2);ht(d,{});var o=y(d,4);E(o,1,()=>Be,F,(a,r)=>{W(a,{get role(){return b(r)}})});var l=y(o,4);E(l,1,()=>Pe,F,(a,r)=>{W(a,{get role(){return b(r)}})});var h=y(l,4);E(h,1,()=>Oe,F,(a,r)=>{W(a,{get role(){return b(r)}})});var u=y(h,4);E(u,1,()=>Re,F,(a,r)=>{W(a,{get role(){return b(r)}})}),n(e),k(s,e)}export{Pt as component,Bt as universal};
