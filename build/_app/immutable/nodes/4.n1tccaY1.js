import"../chunks/Bg9kRutz.js";import"../chunks/DI7z195R.js";import{_ as ae,H as be,aq as ye,ar as je,ak as Se,as as ze,ag as $e,x as Ce,ah as A,at as se,a4 as re,au as Be,av as Fe,k as Ee,c as M,p as T,t as j,a as h,s as x,b as R,e as Me,d as w,f as V,g as C,r as l,F as H,B as X,A as q,m as b,S as Z,aw as oe,D as ie,C as ne,ax as le,n as G,ay as Oe,az as Pe,aj as Q,z as Re,$ as He}from"../chunks/D9OK_awI.js";import{s as ce,a as Ie,e as F,i as E,M as Ne,b as de,h as Te,f as Ve}from"../chunks/BciXOAAt.js";import{a as I}from"../chunks/CiFKCqdj.js";import{i as N,c as ue}from"../chunks/w_3_IlW8.js";import{i as D}from"../chunks/HXMffLxR.js";import{p as B}from"../chunks/8wtEHLX0.js";import{a as ve,b as he,c as qe,d as De,w as Ae,r as Le,e as We,v as Ze}from"../chunks/m3QZoMNB.js";import{c as Ue}from"../chunks/0q02SM9N.js";const Ke=()=>performance.now(),P={tick:r=>requestAnimationFrame(r),now:()=>Ke(),tasks:new Set};function fe(){const r=P.now();P.tasks.forEach(t=>{t.c(r)||(P.tasks.delete(t),t.f())}),P.tasks.size!==0&&P.tick(fe)}function Ge(r){let t;return P.tasks.size===0&&P.tick(fe),{promise:new Promise(e=>{P.tasks.add(t={c:r,f:e})}),abort(){P.tasks.delete(t)}}}function J(r,t){r.dispatchEvent(new CustomEvent(t))}function Je(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const t=r.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function pe(r){const t={},e=r.split(";");for(const o of e){const[d,i]=o.split(":");if(!d||i===void 0)break;const n=Je(d.trim());t[n]=i.trim()}return t}const Qe=r=>r;function Xe(r,t,e,o){var d=(r&ze)!==0,i="both",n,v=t.inert,p=t.style.overflow,a,s;function g(){var k=Be,c=ae;se(null),re(null);try{return n??(n=e()(t,(o==null?void 0:o())??{},{direction:i}))}finally{se(k),re(c)}}var _={is_global:d,in(){t.inert=v,J(t,"introstart"),a=Y(t,g(),s,1,()=>{J(t,"introend"),a==null||a.abort(),a=n=void 0,t.style.overflow=p})},out(k){t.inert=!0,J(t,"outrostart"),s=Y(t,g(),a,0,()=>{J(t,"outroend"),k==null||k()})},stop:()=>{a==null||a.abort(),s==null||s.abort()}},u=ae;if((u.transitions??(u.transitions=[])).push(_),Fe){var y=d;if(!y){for(var m=u.parent;m&&m.f&be;)for(;(m=m.parent)&&!(m.f&ye););y=!m||(m.f&je)!==0}y&&Se(()=>{Ee(()=>_.in())})}}function Y(r,t,e,o,d){var i=o===1;if($e(t)){var n,v=!1;return Ce(()=>{if(!v){var k=t({direction:i?"in":"out"});n=Y(r,k,e,o,d)}}),{abort:()=>{v=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return d(),{abort:A,deactivate:A,reset:A,t:()=>o};const{delay:p=0,css:a,tick:s,easing:g=Qe}=t;var _=[];if(i&&e===void 0&&(s&&s(0,1),a)){var u=pe(a(0,1));_.push(u,u)}var y=()=>1-o,m=r.animate(_,{duration:p});return m.onfinish=()=>{var k=(e==null?void 0:e.t())??1-o;e==null||e.abort();var c=o-k,f=t.duration*Math.abs(c),S=[];if(f>0){var z=!1;if(a)for(var $=Math.ceil(f/16.666666666666668),O=0;O<=$;O+=1){var U=k+c*g(O/$),te=pe(a(U,1-U));S.push(te),z||(z=te.overflow==="hidden")}z&&(r.style.overflow="hidden"),y=()=>{var K=m.currentTime;return k+c*g(K/f)},s&&Ge(()=>{if(m.playState!=="running")return!1;var K=y();return s(K,1-K),!0})}m=r.animate(S,{duration:f,fill:"forwards"}),m.onfinish=()=>{y=()=>o,s==null||s(o,1-o),d()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=A)},deactivate:()=>{d=A},reset:()=>{o===0&&(s==null||s(1,0))},t:()=>y()}}const Ye=!0,Zt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ye},Symbol.toStringTag,{value:"Module"}));function et(r){const t=r-1;return t*t*t+1}function tt(r,{delay:t=0,duration:e=400,easing:o=et,axis:d="y"}={}){const i=getComputedStyle(r),n=+i.opacity,v=d==="y"?"height":"width",p=parseFloat(i[v]),a=d==="y"?["top","bottom"]:["left","right"],s=a.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),g=parseFloat(i[`padding${s[0]}`]),_=parseFloat(i[`padding${s[1]}`]),u=parseFloat(i[`margin${s[0]}`]),y=parseFloat(i[`margin${s[1]}`]),m=parseFloat(i[`border${s[0]}Width`]),k=parseFloat(i[`border${s[1]}Width`]);return{delay:t,duration:e,easing:o,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*n};${v}: ${c*p}px;padding-${a[0]}: ${c*g}px;padding-${a[1]}: ${c*_}px;margin-${a[0]}: ${c*u}px;margin-${a[1]}: ${c*y}px;border-${a[0]}-width: ${c*m}px;border-${a[1]}-width: ${c*k}px;min-${v}: 0`}}var at=j('<div class="accordion-body svelte-1a45pk1"><!></div>'),st=j('<div class="accordion-item svelte-1a45pk1"><div><!></div> <!></div>');const rt={hash:"svelte-1a45pk1",code:`.accordion-item.svelte-1a45pk1 {margin-bottom:5px;width:100%;transition:box-shadow 0.3s ease;align-items:center;align-self:center;
    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */backdrop-filter:brightness(0.98);}.accordion-item.svelte-1a45pk1:hover {box-shadow:0 0 10px rgba(0, 0, 0, 0.1);filter:brightness(1.01);}.accordion-header.svelte-1a45pk1 {cursor:pointer;user-select:none;font-size:24px;color:#333;}.accordion-header.open.svelte-1a45pk1 {border:5px;}.accordion-body.svelte-1a45pk1 {padding:10px;}`};function ee(r,t){T(t,!1),I(r,rt);let e=B(t,"isOpen",12,!1);const o=Ue();function d(){e(!e()),o("toggle",{isOpen:e()})}D();var i=st(),n=h(i),v=h(n);ce(v,t,"headerSlot",{}),l(n);var p=x(n,2);{var a=s=>{var g=at(),_=h(g);ce(_,t,"default",{}),l(g),Xe(3,g,()=>tt),w(s,g)};N(p,s=>{e()&&s(a)})}return l(i),R(()=>Ie(n,`accordion-header ${(e()?"open":"")??""} svelte-1a45pk1`)),Me("click",i,d),w(r,i),V({get isOpen(){return e()},set isOpen(s){e(s),C()}})}M(ee,{isOpen:{}},["headerSlot","default"],[],!0);var ot=j('<table class="history-element svelte-17ak221"><colgroup><col style="width: 60%;" class="svelte-17ak221"><col style="width: 40%;" class="svelte-17ak221"></colgroup><tbody><tr><td rowspan="2" class="svelte-17ak221"><h3 class="centered tight"> </h3></td><td class="svelte-17ak221"><p class="centered tight"> </p></td></tr><tr><td class="svelte-17ak221"><p class="centered tight"> </p></td></tr></tbody></table>');const it={hash:"svelte-17ak221",code:`.history-element.svelte-17ak221 {width:100%;height:fit-content;border:3px;font-size:medium;}.history-element.svelte-17ak221 col:where(.svelte-17ak221) {width:auto;}td.svelte-17ak221 {
    /* border: 1px solid black; */text-align:center;padding:8px;}`};function me(r,t){T(t,!1),I(r,it);let e=B(t,"title",12,""),o=B(t,"location",12,""),d=B(t,"time",12,"");var i=ot(),n=x(h(i)),v=h(n),p=h(v),a=h(p),s=h(a,!0);l(a),l(p);var g=x(p),_=h(g),u=h(_,!0);l(_),l(g),l(v);var y=x(v),m=h(y),k=h(m),c=h(k,!0);return l(k),l(m),l(y),l(n),l(i),R(()=>{H(s,e()),H(u,o()),H(c,d())}),w(r,i),V({get title(){return e()},set title(f){e(f),C()},get location(){return o()},set location(f){o(f),C()},get time(){return d()},set time(f){d(f),C()}})}M(me,{title:{},location:{},time:{}},[],[],!0);var nt=j('<div class="short-description-with-icons svelte-v9sch3"><table class="short-description-with-icons svelte-v9sch3"><colgroup><col style="width: 60%;" class="svelte-v9sch3"><col style="width: 40%;" class="svelte-v9sch3"></colgroup><tbody class="short-description-with-icons svelte-v9sch3"><tr><td style="text-align: left;" class="svelte-v9sch3"> </td><td class="icons svelte-v9sch3"><!></td></tr></tbody></table></div>');const lt={hash:"svelte-v9sch3",code:".short-description-with-icons.svelte-v9sch3 {width:100%;height:fit-content;}.short-description-with-icons.svelte-v9sch3 col:where(.svelte-v9sch3) {width:auto;}td.svelte-v9sch3 {vertical-align:middle;padding:0px;}table.svelte-v9sch3 {padding:0px;}.icons.svelte-v9sch3 {text-align:middle;display:flex;flex-wrap:wrap;gap:12px;justify-content:center;align-items:center;vertical-align:middle;}"};function ge(r,t){T(t,!1),I(r,lt);let e=B(t,"project",12);D();var o=nt(),d=h(o),i=x(h(d)),n=h(i),v=h(n),p=h(v,!0);l(v);var a=x(v),s=h(a);{var g=_=>{var u=X(),y=q(u);F(y,1,()=>e().skills,E,(m,k)=>{var c=X(),f=q(c);ue(f,()=>b(k).icon,(S,z)=>{z(S,{})}),w(m,c)}),w(_,u)};N(s,_=>{e().skills&&e().skills.length>0&&_(g)})}return l(a),l(n),l(i),l(d),l(o),R(()=>H(p,e().shortDescription)),w(r,o),V({get project(){return e()},set project(_){e(_),C()}})}M(ge,{project:{}},[],[],!0);var ct=j("<li> </li>"),dt=j("<ul></ul>"),vt=j('<h4>Projects:</h4> <div class="projects-with-icons svelte-hji4zi"></div>',1),ht=j("<li> </li>"),pt=j("Skills: <ul></ul>",1),ut=j("<!> <!> <!> <!>",1),ft=j('<div class="role-section"><!></div>');const mt={hash:"svelte-hji4zi",code:".projects-with-icons.svelte-hji4zi {display:flex;flex-wrap:wrap;padding-left:3em;font-weight:200;padding-bottom:2em;}"};function L(r,t){T(t,!1),I(r,mt);let e=B(t,"role",12);D();var o=ft(),d=h(o);{var i=n=>{ee(n,{children:(v,p)=>{var a=ut(),s=q(a);Ne(s,{get source(){return e().description}});var g=x(s,2);{var _=c=>{var f=dt();F(f,5,()=>e().bulletPoints,E,(S,z)=>{var $=ct(),O=h($,!0);l($),R(()=>H(O,b(z))),w(S,$)}),l(f),w(c,f)};N(g,c=>{e().bulletPoints&&e().bulletPoints.length>0&&c(_)})}var u=x(g,2);{var y=c=>{var f=vt(),S=x(q(f),2);F(S,5,()=>e().projects,E,(z,$)=>{ge(z,{get project(){return b($)}})}),l(S),w(c,f)};N(u,c=>{e().projects&&e().projects.length>0&&c(y)})}var m=x(u,2);{var k=c=>{var f=pt(),S=x(q(f));F(S,5,()=>ve(e()),E,(z,$)=>{var O=ht(),U=h(O,!0);l(O),R(()=>H(U,b($).name)),w(z,O)}),l(S),w(c,f)};N(m,c=>{ve(e()).length>0&&c(k)})}w(v,a)},$$slots:{default:!0,headerSlot:(v,p)=>{const a=Z(()=>e().instutition+", "+e().location),s=Z(()=>e().startDate.toLocaleString("en-US",{year:"numeric",month:"short"})+" - "+(e().endDate?e().endDate.toLocaleString("en-US",{year:"numeric",month:"short"}):"Present"));me(v,{get title(){return e().name},get location(){return b(a)},get time(){return b(s)},slot:"headerSlot"})}}})};N(d,n=>{e()&&n(i)})}return l(o),w(r,o),V({get role(){return e()},set role(n){e(n),C()}})}M(L,{role:{}},[],[],!0);var gt=j("<p><a> </a></p>"),_t=j('<a class="hide-on-mobile svelte-3ckhms"><!></a>'),kt=j('<table class="skill-section svelte-3ckhms"><colgroup><col class="col1 svelte-3ckhms"><col class="col2 svelte-3ckhms"><col class="col3 svelte-3ckhms"></colgroup><tbody><tr><th class="svelte-3ckhms"> </th><td class="svelte-3ckhms"></td><td class="hide-on-mobile svelte-3ckhms"></td></tr></tbody></table>'),xt=j('<div class="skill-section svelte-3ckhms"><!></div>');const wt={hash:"svelte-3ckhms",code:`.skill-section.svelte-3ckhms {width:100%;height:fit-content;border:3px;}

  /* .skill-section col {
    width: auto;
  } */th.svelte-3ckhms {padding:8px;text-align:center;vertical-align:top;}td.svelte-3ckhms {
    /* border: 1px solid black; */padding:8px;}td.svelte-3ckhms:nth-child(3) {display:flex;flex-wrap:wrap;gap:12px;justify-content:center;align-items:center;vertical-align:middle;}.col1.svelte-3ckhms {width:max(20%, 200px);}.col2.svelte-3ckhms {width:30%;}.col3.svelte-3ckhms {width:50%;}

  @media (max-width: 600px) {.hide-on-mobile.svelte-3ckhms {display:none;}.col1.svelte-3ckhms {width:50%;}.col2.svelte-3ckhms {width:50%;}th.svelte-3ckhms {padding:4px;}td.svelte-3ckhms {padding:4px;}
  }`};function _e(r,t){T(t,!1),I(r,wt);let e=B(t,"category",12,""),o=B(t,"skills",28,()=>[]);const d=50;D();var i=xt(),n=h(i);{var v=p=>{var a=kt(),s=x(h(a)),g=h(s),_=h(g),u=h(_,!0);l(_);var y=x(_);F(y,5,o,E,(k,c)=>{var f=gt(),S=h(f),z=h(S,!0);l(S),l(f),R($=>{de(S,"href",`/site/skills/${$??""}`),H(z,b(c).name)},[()=>he(b(c))],Z),w(k,f)}),l(y);var m=x(y);F(m,5,o,E,(k,c)=>{var f=_t(),S=h(f);ue(S,()=>b(c).icon,(z,$)=>{$(z,{get alt(){return b(c).name},size:d})}),l(f),R(z=>de(f,"href",`/site/skills/${z??""}`),[()=>he(b(c))],Z),w(k,f)}),l(m),l(g),l(s),l(a),R(()=>H(u,e())),w(p,a)};N(n,p=>{e()&&o().length>0&&p(v)})}return l(i),w(r,i),V({get category(){return e()},set category(p){e(p),C()},get skills(){return o()},set skills(p){o(p),C()}})}M(_e,{category:{},skills:{}},[],[],!0);var bt=j('<p slot="headerSlot" class="accordion-header.level-1">Skills</p>');function ke(r,t){T(t,!1),D(),ee(r,{isOpen:!0,children:(e,o)=>{var d=X(),i=q(d);F(i,1,()=>qe,E,(n,v)=>{const p=Z(()=>De[b(v)].sort((a,s)=>s.mastery-a.mastery));_e(n,{get category(){return b(v)},get skills(){return b(p)}})}),w(e,d)},$$slots:{default:!0,headerSlot:(e,o)=>{var d=bt();w(e,d)}}}),V()}M(ke,{},[],[],!0);var yt=Pe("<svg><!></svg>");function W(r,t){T(t,!1);let e=B(t,"src",12),o=B(t,"size",12,"1em"),d=B(t,"viewBox",28,()=>{}),i=B(t,"color",12,"currentColor"),n=B(t,"title",28,()=>{}),v=B(t,"className",12,""),p=ne(),a=ne({});oe(()=>(G(i()),G(e())),()=>{ie(a,{}),i()&&(e().a.stroke!=="none"&&le(a,b(a).stroke="currentColor"),e().a.fill!=="none"&&le(a,b(a).fill="currentColor"))}),oe(()=>(G(n()),G(e())),()=>{ie(p,(n()?`<title>${n()}</title>`:"")+e().c)}),Oe(),D();var s=yt();let g;var _=h(s);return Te(_,()=>b(p),!0,!1),l(s),R(()=>g=Ve(s,g,{width:o(),height:o(),viewBox:d(),style:i()?"color: "+i()+";":"","stroke-width":"0",class:v(),...e().a,...b(a),xmlns:"http://www.w3.org/2000/svg"},void 0,!0)),w(r,s),V({get src(){return e()},set src(u){e(u),C()},get size(){return o()},set size(u){o(u),C()},get viewBox(){return d()},set viewBox(u){d(u),C()},get color(){return i()},set color(u){i(u),C()},get title(){return n()},set title(u){n(u),C()},get className(){return v()},set className(u){v(u),C()}})}M(W,{src:{},size:{},viewBox:{},color:{},title:{},className:{}},[],[],!0);const jt={a:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'},St={a:{viewBox:"0 0 512 512"},c:'<path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>'},zt={a:{viewBox:"0 0 512 512"},c:'<rect x="128" y="16" width="256" height="480" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></rect><path d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path>'},$t={a:{viewBox:"0 0 512 512"},c:'<path d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><circle cx="256" cy="192" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></circle>'};var Ct=j('<div class="contact-info svelte-1avnha9"><div class="contact-item svelte-1avnha9"><!> <a href="mailto:bszabo96@gmail.com" class="svelte-1avnha9">bszabo96@gmail.com</a></div> <div class="contact-item svelte-1avnha9"><!> <span>+36 20 566 6348</span></div> <div class="contact-item svelte-1avnha9"><!> <span>Budapest, Hungary</span></div> <div class="contact-item svelte-1avnha9"><a href="https://www.linkedin.com/in/szabob/" target="_blank" class="svelte-1avnha9"><!></a></div></div>');const Bt={hash:"svelte-1avnha9",code:`.contact-info.svelte-1avnha9 {display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:16px;margin-top:2em;font-size:medium;}.contact-item.svelte-1avnha9 {display:flex;align-items:center;gap:8px;}a.svelte-1avnha9 {text-decoration:none;color:inherit;font-weight:bold;}a.svelte-1avnha9:hover {text-decoration:underline;}

  @media (max-width: 600px) {.contact-info.svelte-1avnha9 {flex-direction:column;text-align:center;}
  }`};function xe(r){I(r,Bt);const t=24;var e=Ct(),o=h(e),d=h(o);W(d,{src:jt,size:t}),Q(2),l(o);var i=x(o,2),n=h(i);W(n,{src:zt,size:t}),Q(2),l(i);var v=x(i,2),p=h(v);W(p,{src:$t,size:t}),Q(2),l(v);var a=x(v,2),s=h(a),g=h(s);W(g,{src:St,size:t}),l(s),l(a),l(e),w(r,e)}M(xe,{},[],[],!0);var Ft=j('<div class="svelte-m1j2st"><summary class="svelte-m1j2st">Experienced IT professional with a deep understanding of biomedical data</summary></div>');const Et={hash:"svelte-m1j2st",code:"div.svelte-m1j2st {margin:auto;align-items:center;}summary.svelte-m1j2st {padding-top:5em;padding-bottom:5em;width:80%;text-align:center;font-size:18px;justify-content:center;color:#333;align-content:center;margin:auto;}"};function we(r){I(r,Et);var t=Ft();w(r,t)}M(we,{},[],[],!0);var Mt=j(`<meta name="description" content="John Doe's CV">`),Ot=j('<main class="svelte-9q6d1"><header><h1 class="svelte-9q6d1">Bence Szabó MD</h1></header> <!> <!> <!> <h2>Work Experience</h2> <!> <h2>Research</h2> <!> <h2>Education</h2> <!> <h2>Volunteering</h2> <!></main>');const Pt={hash:"svelte-9q6d1",code:`main.svelte-9q6d1 {
    /* max-width: 800px; */margin:0 auto;
    /* padding: 20px; */width:80%;}h1.svelte-9q6d1 {margin-bottom:5px;}`};function Rt(r){I(r,Pt);var t=Ot();Re(a=>{var s=Mt();He.title="Bence Szabó",w(a,s)});var e=x(h(t),2);xe(e);var o=x(e,2);we(o);var d=x(o,2);ke(d,{});var i=x(d,4);F(i,1,()=>Ae,E,(a,s)=>{L(a,{get role(){return b(s)}})});var n=x(i,4);F(n,1,()=>Le,E,(a,s)=>{L(a,{get role(){return b(s)}})});var v=x(n,4);F(v,1,()=>We,E,(a,s)=>{L(a,{get role(){return b(s)}})});var p=x(v,4);F(p,1,()=>Ze,E,(a,s)=>{L(a,{get role(){return b(s)}})}),l(t),w(r,t)}M(Rt,{},[],[],!0);export{Rt as component,Zt as universal};
