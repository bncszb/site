import{W as T,X as ee,Y as re,Z as y,_ as ne,g as p,a0 as v,q as P,a1 as I,A as C,a2 as ae,a3 as te,i as ie,a4 as z,a5 as J,V as N,a6 as se,a7 as fe,K as ue,J as B,a8 as M,U as F,a9 as K,L as W,M as X,aa as le,ab as ce,ac as Q,h as oe,ad as _e,ae as de,af as ve,y as U,ag as he,b as Z,f as G,ah as be,ai as k,aj as pe,ak as ge,al as ye,am as Pe,an as H,ao as A}from"./DwHFy8MZ.js";function E(e,r=null,u){if(typeof e!="object"||e===null||T in e)return e;const t=te(e);if(t!==ee&&t!==re)return e;var a=new Map,c=ie(e),h=y(0);c&&a.set("length",y(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&ae();var f=a.get(n);return f===void 0?(f=y(i.value),a.set(n,f)):P(f,E(i.value,g)),!0},deleteProperty(l,n){var i=a.get(n);if(i===void 0)n in l&&a.set(n,y(v));else{if(c&&typeof n=="string"){var f=a.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&P(f,s)}P(i,v),V(h)}return!0},get(l,n,i){var d;if(n===T)return e;var f=a.get(n),s=n in l;if(f===void 0&&(!s||(d=I(l,n))!=null&&d.writable)&&(f=y(E(s?l[n]:v,g)),a.set(n,f)),f!==void 0){var o=p(f);return o===v?void 0:o}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=a.get(n);f&&(i.value=p(f))}else if(i===void 0){var s=a.get(n),o=s==null?void 0:s.v;if(s!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return i},has(l,n){var o;if(n===T)return!0;var i=a.get(n),f=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||C!==null&&(!f||(o=I(l,n))!=null&&o.writable)){i===void 0&&(i=y(f?E(l[n],g):v),a.set(n,i));var s=p(i);if(s===v)return!1}return f},set(l,n,i,f){var m;var s=a.get(n),o=n in l;if(c&&n==="length")for(var d=i;d<s.v;d+=1){var w=a.get(d+"");w!==void 0?P(w,v):d in l&&(w=y(v),a.set(d+"",w))}s===void 0?(!o||(m=I(l,n))!=null&&m.writable)&&(s=y(void 0),P(s,E(i,g)),a.set(n,s)):(o=s.v!==v,P(s,E(i,g)));var b=Reflect.getOwnPropertyDescriptor(l,n);if(b!=null&&b.set&&b.set.call(f,i),!o){if(c&&typeof n=="string"){var O=a.get("length"),S=Number(n);Number.isInteger(S)&&S>=O.v&&P(O,S+1)}V(h)}return!0},ownKeys(l){p(h);var n=Reflect.ownKeys(l).filter(s=>{var o=a.get(s);return o===void 0||o.v!==v});for(var[i,f]of a)f.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){ne()}})}function V(e,r=1){P(e,e.v+r)}function Oe(e,r,u=!1){N&&W();var t=e,a=null,c=null,h=v,g=u?J:0,l=!1;const n=(f,s=!0)=>{l=!0,i(s,f)},i=(f,s)=>{if(h===(h=f))return;let o=!1;if(N){const d=t.data===se;!!h===d&&(t=fe(),ue(t),B(!1),o=!0)}h?(a?M(a):s&&(a=F(()=>s(t))),c&&K(c,()=>{c=null})):(c?M(c):s&&(c=F(()=>s(t))),a&&K(a,()=>{a=null})),o&&B(!0)};z(()=>{l=!1,r(n),l||i(null,null)},g),N&&(t=X)}function Se(e,r,u){N&&W();var t=e,a,c;z(()=>{a!==(a=r())&&(c&&(K(c),c=null),a&&(c=F(()=>u(t,a))))},J),N&&(t=X)}let D=!1;function we(e){var r=D;try{return D=!1,[e(),D]}finally{D=r}}const me={get(e,r){if(!e.exclude.includes(r))return p(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=Ee({get[r](){return e.props[r]}},r,k)),e.special[r](u),H(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),H(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function xe(e,r){return new Proxy({props:e,exclude:r,special:{},version:y(0)},me)}const Re={get(e,r){let u=e.props.length;for(;u--;){let t=e.props[u];if(A(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,u){let t=e.props.length;for(;t--;){let a=e.props[t];A(a)&&(a=a());const c=I(a,r);if(c&&c.set)return c.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let t=e.props[u];if(A(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const a=I(t,r);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,r){if(r===T||r===Q)return!1;for(let u of e.props)if(A(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){A(u)&&(u=u());for(const t in u)r.includes(t)||r.push(t)}return r}};function Ae(...e){return new Proxy({props:e},Re)}function $(e){for(var r=C,u=C;r!==null&&!(r.f&(de|ve));)r=r.parent;try{return U(r),e()}finally{U(u)}}function Ee(e,r,u,t){var j;var a=(u&Pe)!==0,c=!oe||(u&_e)!==0,h=(u&he)!==0,g=(u&ye)!==0,l=!1,n;h?[n,l]=we(()=>e[r]):n=e[r];var i=T in e||Q in e,f=h&&(((j=I(e,r))==null?void 0:j.set)??(i&&r in e&&(_=>e[r]=_)))||void 0,s=t,o=!0,d=!1,w=()=>(d=!0,o&&(o=!1,g?s=Z(t):s=t),s);n===void 0&&t!==void 0&&(f&&c&&le(),n=w(),f&&f(n));var b;if(c)b=()=>{var _=e[r];return _===void 0?w():(o=!0,d=!1,_)};else{var O=$(()=>(a?G:be)(()=>e[r]));O.f|=ce,b=()=>{var _=p(O);return _!==void 0&&(s=void 0),_===void 0?s:_}}if(!(u&k))return b;if(f){var S=e.$$legacy;return function(_,R){return arguments.length>0?((!c||!R||S||l)&&f(R?b():_),_):b()}}var m=!1,Y=!1,L=pe(n),x=$(()=>G(()=>{var _=b(),R=p(L);return m?(m=!1,Y=!0,R):(Y=!1,L.v=_)}));return a||(x.equals=ge),function(_,R){if(arguments.length>0){const q=R?p(x):c&&h?E(_):_;return x.equals(q)||(m=!0,P(L,q),d&&s!==void 0&&(s=q),Z(()=>p(x))),_}return p(x)}}export{E as a,Se as c,Oe as i,xe as l,Ee as p,Ae as s};
