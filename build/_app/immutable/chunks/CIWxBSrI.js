import{h as f,B as v,x as c,X as p,Y as h,A as u,n as s,m as E,l as g}from"./C9D1Bp-g.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=v;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,a,d=!r.startsWith("<!>");return()=>{if(u)return n(s,null),s;a===void 0&&(a=m(d?r:"<!>"+r),e||(a=f(a)));var o=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var l=f(o),i=o.lastChild;n(l,i)}else n(o,o);return o}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),a=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(u)return n(s,null),s;if(!d){var o=m(a),l=f(o);d=f(l)}var i=d.cloneNode(!0);return n(i,i),i}}function x(r=""){if(!u){var t=c(r+"");return n(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),g(e)),n(e,e),e}function M(){if(u)return n(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),n(t,e),r}function A(r,t){if(u){v.nodes_end=s,E();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{n as a,A as b,M as c,x as d,m as e,N as n,y as t};
