import"./Bg9kRutz.js";import{c as q,p as F,aL as K,e as L,f as R,W}from"./lNTUv6K_.js";import{a as X}from"./D_5YcoZE.js";import{b as Y}from"./kX_kLjy8.js";import{a as $}from"./DzZQswye.js";import{o as C}from"./CKBon_Th.js";import{t as H,f as J,s as E,i as O}from"./DPLS2QFe.js";function U(t,n){var r,o=1;t==null&&(t=0),n==null&&(n=0);function a(){var i,u=r.length,l,x=0,c=0;for(i=0;i<u;++i)l=r[i],x+=l.x,c+=l.y;for(x=(x/u-t)*o,c=(c/u-n)*o,i=0;i<u;++i)l=r[i],l.x-=x,l.y-=c}return a.initialize=function(i){r=i},a.x=function(i){return arguments.length?(t=+i,a):t},a.y=function(i){return arguments.length?(n=+i,a):n},a.strength=function(i){return arguments.length?(o=+i,a):o},a}function V(t){const n=+this._x.call(null,t),r=+this._y.call(null,t);return Q(this.cover(n,r),n,r,t)}function Q(t,n,r,o){if(isNaN(n)||isNaN(r))return t;var a,i=t._root,u={data:o},l=t._x0,x=t._y0,c=t._x1,p=t._y1,d,v,h,_,s,e,f,g;if(!i)return t._root=u,t;for(;i.length;)if((s=n>=(d=(l+c)/2))?l=d:c=d,(e=r>=(v=(x+p)/2))?x=v:p=v,a=i,!(i=i[f=e<<1|s]))return a[f]=u,t;if(h=+t._x.call(null,i.data),_=+t._y.call(null,i.data),n===h&&r===_)return u.next=i,a?a[f]=u:t._root=u,t;do a=a?a[f]=new Array(4):t._root=new Array(4),(s=n>=(d=(l+c)/2))?l=d:c=d,(e=r>=(v=(x+p)/2))?x=v:p=v;while((f=e<<1|s)===(g=(_>=v)<<1|h>=d));return a[g]=i,a[f]=u,t}function Z(t){var n,r,o=t.length,a,i,u=new Array(o),l=new Array(o),x=1/0,c=1/0,p=-1/0,d=-1/0;for(r=0;r<o;++r)isNaN(a=+this._x.call(null,n=t[r]))||isNaN(i=+this._y.call(null,n))||(u[r]=a,l[r]=i,a<x&&(x=a),a>p&&(p=a),i<c&&(c=i),i>d&&(d=i));if(x>p||c>d)return this;for(this.cover(x,c).cover(p,d),r=0;r<o;++r)Q(this,u[r],l[r],t[r]);return this}function tt(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var r=this._x0,o=this._y0,a=this._x1,i=this._y1;if(isNaN(r))a=(r=Math.floor(t))+1,i=(o=Math.floor(n))+1;else{for(var u=a-r||1,l=this._root,x,c;r>t||t>=a||o>n||n>=i;)switch(c=(n<o)<<1|t<r,x=new Array(4),x[c]=l,l=x,u*=2,c){case 0:a=r+u,i=o+u;break;case 1:r=a-u,i=o+u;break;case 2:a=r+u,o=i-u;break;case 3:r=a-u,o=i-u;break}this._root&&this._root.length&&(this._root=l)}return this._x0=r,this._y0=o,this._x1=a,this._y1=i,this}function nt(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t}function et(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function N(t,n,r,o,a){this.node=t,this.x0=n,this.y0=r,this.x1=o,this.y1=a}function rt(t,n,r){var o,a=this._x0,i=this._y0,u,l,x,c,p=this._x1,d=this._y1,v=[],h=this._root,_,s;for(h&&v.push(new N(h,a,i,p,d)),r==null?r=1/0:(a=t-r,i=n-r,p=t+r,d=n+r,r*=r);_=v.pop();)if(!(!(h=_.node)||(u=_.x0)>p||(l=_.y0)>d||(x=_.x1)<a||(c=_.y1)<i))if(h.length){var e=(u+x)/2,f=(l+c)/2;v.push(new N(h[3],e,f,x,c),new N(h[2],u,f,e,c),new N(h[1],e,l,x,f),new N(h[0],u,l,e,f)),(s=(n>=f)<<1|t>=e)&&(_=v[v.length-1],v[v.length-1]=v[v.length-1-s],v[v.length-1-s]=_)}else{var g=t-+this._x.call(null,h.data),w=n-+this._y.call(null,h.data),y=g*g+w*w;if(y<r){var m=Math.sqrt(r=y);a=t-m,i=n-m,p=t+m,d=n+m,o=h.data}}return o}function it(t){if(isNaN(p=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var n,r=this._root,o,a,i,u=this._x0,l=this._y0,x=this._x1,c=this._y1,p,d,v,h,_,s,e,f;if(!r)return this;if(r.length)for(;;){if((_=p>=(v=(u+x)/2))?u=v:x=v,(s=d>=(h=(l+c)/2))?l=h:c=h,n=r,!(r=r[e=s<<1|_]))return this;if(!r.length)break;(n[e+1&3]||n[e+2&3]||n[e+3&3])&&(o=n,f=e)}for(;r.data!==t;)if(a=r,!(r=r.next))return this;return(i=r.next)&&delete r.next,a?(i?a.next=i:delete a.next,this):n?(i?n[e]=i:delete n[e],(r=n[0]||n[1]||n[2]||n[3])&&r===(n[3]||n[2]||n[1]||n[0])&&!r.length&&(o?o[f]=r:this._root=r),this):(this._root=i,this)}function at(t){for(var n=0,r=t.length;n<r;++n)this.remove(t[n]);return this}function ot(){return this._root}function st(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t}function ft(t){var n=[],r,o=this._root,a,i,u,l,x;for(o&&n.push(new N(o,this._x0,this._y0,this._x1,this._y1));r=n.pop();)if(!t(o=r.node,i=r.x0,u=r.y0,l=r.x1,x=r.y1)&&o.length){var c=(i+l)/2,p=(u+x)/2;(a=o[3])&&n.push(new N(a,c,p,l,x)),(a=o[2])&&n.push(new N(a,i,p,c,x)),(a=o[1])&&n.push(new N(a,c,u,l,p)),(a=o[0])&&n.push(new N(a,i,u,c,p))}return this}function ht(t){var n=[],r=[],o;for(this._root&&n.push(new N(this._root,this._x0,this._y0,this._x1,this._y1));o=n.pop();){var a=o.node;if(a.length){var i,u=o.x0,l=o.y0,x=o.x1,c=o.y1,p=(u+x)/2,d=(l+c)/2;(i=a[0])&&n.push(new N(i,u,l,p,d)),(i=a[1])&&n.push(new N(i,p,l,x,d)),(i=a[2])&&n.push(new N(i,u,d,p,c)),(i=a[3])&&n.push(new N(i,p,d,x,c))}r.push(o)}for(;o=r.pop();)t(o.node,o.x0,o.y0,o.x1,o.y1);return this}function ut(t){return t[0]}function lt(t){return arguments.length?(this._x=t,this):this._x}function ct(t){return t[1]}function gt(t){return arguments.length?(this._y=t,this):this._y}function T(t,n,r){var o=new S(n??ut,r??ct,NaN,NaN,NaN,NaN);return t==null?o:o.addAll(t)}function S(t,n,r,o,a,i){this._x=t,this._y=n,this._x0=r,this._y0=o,this._x1=a,this._y1=i,this._root=void 0}function B(t){for(var n={data:t.data},r=n;t=t.next;)r=r.next={data:t.data};return n}var M=T.prototype=S.prototype;M.copy=function(){var t=new S(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,r,o;if(!n)return t;if(!n.length)return t._root=B(n),t;for(r=[{source:n,target:t._root=new Array(4)}];n=r.pop();)for(var a=0;a<4;++a)(o=n.source[a])&&(o.length?r.push({source:o,target:n.target[a]=new Array(4)}):n.target[a]=B(o));return t};M.add=V;M.addAll=Z;M.cover=tt;M.data=nt;M.extent=et;M.find=rt;M.remove=it;M.removeAll=at;M.root=ot;M.size=st;M.visit=ft;M.visitAfter=ht;M.x=lt;M.y=gt;function D(t){return function(){return t}}function I(t){return(t()-.5)*1e-6}function yt(t){return t.index}function G(t,n){var r=t.get(n);if(!r)throw new Error("node not found: "+n);return r}function xt(t){var n=yt,r=d,o,a=D(30),i,u,l,x,c,p=1;t==null&&(t=[]);function d(e){return 1/Math.min(l[e.source.index],l[e.target.index])}function v(e){for(var f=0,g=t.length;f<p;++f)for(var w=0,y,m,A,b,k,z,j;w<g;++w)y=t[w],m=y.source,A=y.target,b=A.x+A.vx-m.x-m.vx||I(c),k=A.y+A.vy-m.y-m.vy||I(c),z=Math.sqrt(b*b+k*k),z=(z-i[w])/z*e*o[w],b*=z,k*=z,A.vx-=b*(j=x[w]),A.vy-=k*j,m.vx+=b*(j=1-j),m.vy+=k*j}function h(){if(u){var e,f=u.length,g=t.length,w=new Map(u.map((m,A)=>[n(m,A,u),m])),y;for(e=0,l=new Array(f);e<g;++e)y=t[e],y.index=e,typeof y.source!="object"&&(y.source=G(w,y.source)),typeof y.target!="object"&&(y.target=G(w,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(e=0,x=new Array(g);e<g;++e)y=t[e],x[e]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);o=new Array(g),_(),i=new Array(g),s()}}function _(){if(u)for(var e=0,f=t.length;e<f;++e)o[e]=+r(t[e],e,t)}function s(){if(u)for(var e=0,f=t.length;e<f;++e)i[e]=+a(t[e],e,t)}return v.initialize=function(e,f){u=e,c=f,h()},v.links=function(e){return arguments.length?(t=e,h(),v):t},v.id=function(e){return arguments.length?(n=e,v):n},v.iterations=function(e){return arguments.length?(p=+e,v):p},v.strength=function(e){return arguments.length?(r=typeof e=="function"?e:D(+e),_(),v):r},v.distance=function(e){return arguments.length?(a=typeof e=="function"?e:D(+e),s(),v):a},v}const vt=1664525,pt=1013904223,P=4294967296;function _t(){let t=1;return()=>(t=(vt*t+pt)%P)/P}function dt(t){return t.x}function wt(t){return t.y}var mt=10,Nt=Math.PI*(3-Math.sqrt(5));function Mt(t){var n,r=1,o=.001,a=1-Math.pow(o,1/300),i=0,u=.6,l=new Map,x=H(d),c=J("tick","end"),p=_t();t==null&&(t=[]);function d(){v(),c.call("tick",n),r<o&&(x.stop(),c.call("end",n))}function v(s){var e,f=t.length,g;s===void 0&&(s=1);for(var w=0;w<s;++w)for(r+=(i-r)*a,l.forEach(function(y){y(r)}),e=0;e<f;++e)g=t[e],g.fx==null?g.x+=g.vx*=u:(g.x=g.fx,g.vx=0),g.fy==null?g.y+=g.vy*=u:(g.y=g.fy,g.vy=0);return n}function h(){for(var s=0,e=t.length,f;s<e;++s){if(f=t[s],f.index=s,f.fx!=null&&(f.x=f.fx),f.fy!=null&&(f.y=f.fy),isNaN(f.x)||isNaN(f.y)){var g=mt*Math.sqrt(.5+s),w=s*Nt;f.x=g*Math.cos(w),f.y=g*Math.sin(w)}(isNaN(f.vx)||isNaN(f.vy))&&(f.vx=f.vy=0)}}function _(s){return s.initialize&&s.initialize(t,p),s}return h(),n={tick:v,restart:function(){return x.restart(d),n},stop:function(){return x.stop(),n},nodes:function(s){return arguments.length?(t=s,h(),l.forEach(_),n):t},alpha:function(s){return arguments.length?(r=+s,n):r},alphaMin:function(s){return arguments.length?(o=+s,n):o},alphaDecay:function(s){return arguments.length?(a=+s,n):+a},alphaTarget:function(s){return arguments.length?(i=+s,n):i},velocityDecay:function(s){return arguments.length?(u=1-s,n):1-u},randomSource:function(s){return arguments.length?(p=s,l.forEach(_),n):p},force:function(s,e){return arguments.length>1?(e==null?l.delete(s):l.set(s,_(e)),n):l.get(s)},find:function(s,e,f){var g=0,w=t.length,y,m,A,b,k;for(f==null?f=1/0:f*=f,g=0;g<w;++g)b=t[g],y=s-b.x,m=e-b.y,A=y*y+m*m,A<f&&(k=b,f=A);return k},on:function(s,e){return arguments.length>1?(c.on(s,e),n):c.on(s)}}}function At(){var t,n,r,o,a=D(-30),i,u=1,l=1/0,x=.81;function c(h){var _,s=t.length,e=T(t,dt,wt).visitAfter(d);for(o=h,_=0;_<s;++_)n=t[_],e.visit(v)}function p(){if(t){var h,_=t.length,s;for(i=new Array(_),h=0;h<_;++h)s=t[h],i[s.index]=+a(s,h,t)}}function d(h){var _=0,s,e,f=0,g,w,y;if(h.length){for(g=w=y=0;y<4;++y)(s=h[y])&&(e=Math.abs(s.value))&&(_+=s.value,f+=e,g+=e*s.x,w+=e*s.y);h.x=g/f,h.y=w/f}else{s=h,s.x=s.data.x,s.y=s.data.y;do _+=i[s.data.index];while(s=s.next)}h.value=_}function v(h,_,s,e){if(!h.value)return!0;var f=h.x-n.x,g=h.y-n.y,w=e-_,y=f*f+g*g;if(w*w/x<y)return y<l&&(f===0&&(f=I(r),y+=f*f),g===0&&(g=I(r),y+=g*g),y<u&&(y=Math.sqrt(u*y)),n.vx+=f*h.value*o/y,n.vy+=g*h.value*o/y),!0;if(h.length||y>=l)return;(h.data!==n||h.next)&&(f===0&&(f=I(r),y+=f*f),g===0&&(g=I(r),y+=g*g),y<u&&(y=Math.sqrt(u*y)));do h.data!==n&&(w=i[h.data.index]*o/y,n.vx+=f*w,n.vy+=g*w);while(h=h.next)}return c.initialize=function(h,_){t=h,r=_,p()},c.strength=function(h){return arguments.length?(a=typeof h=="function"?h:D(+h),p(),c):a},c.distanceMin=function(h){return arguments.length?(u=h*h,c):Math.sqrt(u)},c.distanceMax=function(h){return arguments.length?(l=h*h,c):Math.sqrt(l)},c.theta=function(h){return arguments.length?(x=h*h,c):Math.sqrt(x)},c}var bt=K('<svg class="svelte-klivyd"></svg>');const kt={hash:"svelte-klivyd",code:"svg.svelte-klivyd {display:block;margin:auto;max-width:100%;}"};function zt(t,n){F(n,!0),X(t,kt);let r=$(n,"graph",7);const o="rgba(0, 0, 0, 0.7)",a="rgba(0, 0, 0, 0.4)";let i;C(()=>{const c=r().nodes,p=r().edges;for(const e of c)e.fx&&(e.fx=600*e.fx),e.fy&&(e.fy=500*e.fy);const d=E(i).attr("width",600).attr("height",500),v=Mt(c).force("link",xt(p).id(e=>e.id).distance(50).strength(e=>e.weight)).force("charge",At().strength(-1e3)).force("center",U(600/2,500/2)),h=d.selectAll("line").data(p).enter().append("line").style("stroke","#999").attr("stroke-opacity",.6).attr("stroke-width",e=>e.weight),_=d.selectAll("circle").data(c).enter().append("circle").attr("r",e=>e.r||10).attr("fill",a).attr("stroke","#fff").attr("stroke-width",2).on("mouseover",function(e,f){E(this).transition().duration(200).attr("r",15).attr("fill",o).attr("stroke-width",4)}).on("mouseout",function(e,f){E(this).transition().duration(200).attr("r",g=>g.r||10).attr("fill",a).attr("stroke-width",2)});d.selectAll("circle").on("click",(e,f)=>{window.location.href=`/site/skills/${O(f.id)}`});const s=d.selectAll("text").data(c).enter().append("text").text(e=>e.id).attr("font-size","12px").attr("fill","black").attr("dx",e=>e.r+3).attr("dy",4);v.on("tick",()=>{h.attr("x1",e=>e.source.x).attr("y1",e=>e.source.y).attr("x2",e=>e.target.x).attr("y2",e=>e.target.y),_.attr("cx",e=>e.x).attr("cy",e=>e.y),s.attr("x",e=>e.x).attr("y",e=>e.y)})});var u=bt();return Y(u,l=>i=l,()=>i),L(t,u),R({get graph(){return r()},set graph(l){r(l),W()}})}q(zt,{graph:{}},[],[],!0);export{zt as G};
