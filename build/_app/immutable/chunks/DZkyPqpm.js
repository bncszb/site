import{R as O,A as b,T as V,U as C,V as E}from"./DyzCTaeg.js";import{b as I,c as j,d as B,n as M,e as R}from"./Dm7NuUu4.js";function q(s,r){if(r){const i=document.body;s.autofocus=!0,O(()=>{document.activeElement===i&&s.focus()})}}function k(s){var r,i,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var c=s.length;for(r=0;r<c;r++)s[r]&&(i=k(s[r]))&&(t&&(t+=" "),t+=i)}else for(i in s)s[i]&&(t&&(t+=" "),t+=i);return t}function z(){for(var s,r,i=0,t="",c=arguments.length;i<c;i++)(s=arguments[i])&&(r=k(s))&&(t&&(t+=" "),t+=r);return t}function D(s){return typeof s=="object"?z(s):s??""}function G(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function K(s,r,i,t){var c=s.__attributes??(s.__attributes={});b&&(c[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||c[r]!==(c[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[C]=i),i==null?s.removeAttribute(r):typeof i!="string"&&N(s).includes(r)?s[r]=i:s.setAttribute(r,i))}function Y(s,r,i,t,c=!1,n=!1,P=!1){var l=r||{},d=s.tagName==="OPTION";for(var p in r)p in i||(i[p]=null);i.class&&(i.class=D(i.class));var $=N(s),T=s.__attributes??(s.__attributes={});for(const f in i){let o=i[f];if(d&&f==="value"&&o==null){s.value=s.__value="",l[f]=o;continue}var y=l[f];if(o!==y){l[f]=o;var h=f[0]+f[1];if(h!=="$$"){if(h==="on"){const a={},_="$$"+f;let e=f.slice(2);var v=R(e);if(I(e)&&(e=e.slice(0,-7),a.capture=!0),!v&&y){if(o!=null)continue;s.removeEventListener(e,l[_],a),l[_]=null}if(o!=null)if(v)s[`__${e}`]=o,B([e]);else{let w=function(L){l[f].call(this,L)};l[_]=j(e,s,w,a)}else v&&(s[`__${e}`]=void 0)}else if(f==="style"&&o!=null)s.style.cssText=o+"";else if(f==="autofocus")q(s,!!o);else if(f==="__value"||f==="value"&&o!=null)s.value=s[f]=s.__value=o;else if(f==="selected"&&d)G(s,o);else{var u=f;c||(u=M(u));var g=u==="defaultValue"||u==="defaultChecked";if(o==null&&!n&&!g)if(T[f]=null,u==="value"||u==="checked"){let a=s;if(u==="value"){let _=a.defaultValue;a.removeAttribute(u),a.defaultValue=_}else{let _=a.defaultChecked;a.removeAttribute(u),a.defaultChecked=_}}else s.removeAttribute(f);else g||$.includes(u)&&(n||typeof o!="string")?s[u]=o:typeof o!="function"&&(b&&(u==="src"||u==="href"||u==="srcset")||K(s,u,o))}f==="style"&&"__styles"in s&&(s.__styles={})}}}return l}var A=new Map;function N(s){var r=A.get(s.nodeName);if(r)return r;A.set(s.nodeName,r=[]);for(var i,t=s,c=Element.prototype;c!==t;){i=E(t);for(var n in i)i[n].set&&r.push(n);t=V(t)}return r}export{Y as a,D as c,K as s};
