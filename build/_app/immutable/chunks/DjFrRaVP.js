import"./Bg9kRutz.js";import"./DI7z195R.js";import{c,p as x,t as m,s as f,a as r,b as h,e as b,d as z,f as _,g as d,r as u}from"./D9OK_awI.js";import{s as w,a as C}from"./BciXOAAt.js";import{a as O}from"./CiFKCqdj.js";import{p as g}from"./8wtEHLX0.js";var y=m('<div><button class="close-btn svelte-1uxgzpl">×</button> <div class="content svelte-1uxgzpl"><!></div></div>');const k={hash:"svelte-1uxgzpl",code:`.side-panel.svelte-1uxgzpl {position:fixed;right:-60%; /* Adjust for smoother animation */top:0;width:50%;height:100vh;background:var(--color-bg-2);box-shadow:-2px 0 5px rgba(0, 0, 0, 0.2);transition:right 0.3s ease-in-out;overflow-y:auto;padding:20px;z-index:1000;}.side-panel.open.svelte-1uxgzpl {right:0;}.close-btn.svelte-1uxgzpl {position:absolute;top:10px;left:10px;background:transparent;border:none;font-size:20px;cursor:pointer;}.content.svelte-1uxgzpl {padding:20px;padding-bottom:100px;}

  @media (max-width: 768px) {.side-panel.svelte-1uxgzpl {width:90%;right:-110%; /* Adjust for smoother animation */}
  }`};function j(a,t){x(t,!1),O(a,k);let o=g(t,"isOpen",12),n=g(t,"onClose",12);var s=y(),i=r(s),p=f(i,2),v=r(p);return w(v,t,"default",{}),u(p),u(s),h(()=>C(s,`side-panel ${(o()?"open":"")??""} svelte-1uxgzpl`)),b("click",i,function(...e){var l;(l=n())==null||l.apply(this,e)}),z(a,s),_({get isOpen(){return o()},set isOpen(e){o(e),d()},get onClose(){return n()},set onClose(e){n(e),d()}})}c(j,{isOpen:{},onClose:{}},["default"],[],!0);export{j as S};
