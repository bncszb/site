import{T as s,V as f,W as y,I as w,X as S,Y as T,Z as V,M as I}from"./DtEh0g1T.js";function D(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const L=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function j(e){return L.includes(e)}const A={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function q(e){return e=e.toLowerCase(),A[e]??e}const P=["touchstart","touchmove"];function C(e){return P.includes(e)}function M(e){var t=y,a=w;s(null),f(null);try{return e()}finally{s(t),f(a)}}const N=new Set,O=new Set;function W(e,t,a,i={}){function o(r){if(i.capture||x.call(t,r),!r.cancelBubble)return M(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?T(()=>{t.addEventListener(e,o,i)}):t.addEventListener(e,o,i),o}function R(e,t,a,i,o){var r={capture:i,passive:o},u=W(e,t,a,r);(t===document.body||t===window||t===document)&&S(()=>{t.removeEventListener(e,u,r)})}function z(e){for(var t=0;t<e.length;t++)N.add(e[t]);for(var a of O)a(e)}function x(e){var b;var t=this,a=t.ownerDocument,i=e.type,o=((b=e.composedPath)==null?void 0:b.call(e))||[],r=o[0]||e.target,u=0,_=e.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var v=o.indexOf(t);if(v===-1)return;d<=v&&(u=d)}if(r=o[u]||e.target,r!==t){V(e,"currentTarget",{configurable:!0,get(){return r||a}});var g=y,E=w;s(null),f(null);try{for(var n,h=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+i];if(c!==void 0&&!r.disabled)if(I(c)){var[k,...m]=c;k.apply(r,[e,...m])}else c.call(r,e)}catch(l){n?h.push(l):n=l}if(e.cancelBubble||p===t||p===null)break;r=p}if(n){for(let l of h)queueMicrotask(()=>{throw l});throw n}}finally{e.__root=t,delete e.currentTarget,s(g),f(E)}}}export{N as a,D as b,W as c,z as d,j as e,R as f,x as h,C as i,q as n,O as r};
