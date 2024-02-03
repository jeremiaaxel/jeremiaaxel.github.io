import{t as D,a as Q}from"./index.c7a69d6f.js";import{A as $,R as H}from"./scheduler.8a360e50.js";import{d as z,w as I}from"./index.bee5a31a.js";function oe(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ie(e,o){D(e,1,1,()=>{o.delete(e.key)})}function re(e,o,c,s,r,u,i,a,f,_,E,L){let y=e.length,v=u.length,p=y;const T={};for(;p--;)T[e[p].key]=p;const n=[],t=new Map,d=new Map,w=[];for(p=v;p--;){const l=L(r,u,p),h=c(l);let g=i.get(h);g?s&&w.push(()=>g.p(l,o)):(g=_(h,l),g.c()),t.set(h,n[p]=g),h in T&&d.set(h,Math.abs(p-T[h]))}const b=new Set,m=new Set;function k(l){Q(l,1),l.m(a,E),i.set(l.key,l),E=l.first,v--}for(;y&&v;){const l=n[v-1],h=e[y-1],g=l.key,M=h.key;l===h?(E=l.first,y--,v--):t.has(M)?!i.has(g)||b.has(g)?k(l):m.has(M)?y--:d.get(g)>d.get(M)?(m.add(g),k(l)):(b.add(M),y--):(f(h,i),y--)}for(;y--;){const l=e[y];t.has(l.key)||f(l,i)}for(;v;)k(n[v-1]);return $(w),n}function ce(e,o){const c={},s={},r={$$scope:1};let u=e.length;for(;u--;){const i=e[u],a=o[u];if(a){for(const f in i)f in a||(s[f]=1);for(const f in a)r[f]||(c[f]=a[f],r[f]=1);e[u]=a}else for(const f in i)r[f]=1}for(const i in s)i in c||(c[i]=void 0);return c}function ue(e){return typeof e=="object"&&e!==null?e:{}}let q,x;function K(e){if(typeof document>"u")return;clearTimeout(q),clearTimeout(x);const o=document.createElement("style"),c=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);o.appendChild(c);const s=()=>document.head.appendChild(o),r=()=>document.head.removeChild(o);if(typeof window.getComputedStyle<"u"){s(),e(),window.getComputedStyle(o).opacity,r();return}if(typeof window.requestAnimationFrame<"u"){s(),e(),window.requestAnimationFrame(r);return}s(),q=window.setTimeout(()=>{e(),x=window.setTimeout(r,120)},120)}const N={getItem:e=>null,setItem:(e,o)=>{}},A=typeof document<"u",O=["dark","light","system"],V="mode-watcher-mode",j=G(),R=J(),U=I(void 0),W=X();function G(){const e="system",o=A?localStorage:N,c=o.getItem(V);let s=P(c)?c:e;const{subscribe:r,set:u}=I(s,()=>{if(!A)return;const a=f=>{if(f.key!==V)return;const _=f.newValue;P(_)?u(s=_):u(s=e)};return addEventListener("storage",a),()=>removeEventListener("storage",a)});function i(a){u(s=a),o.setItem(V,s)}return{subscribe:r,set:i}}function J(){let o=!0;const{subscribe:c,set:s}=I(void 0,()=>{if(!A)return;const i=f=>{o&&s(f.matches?"light":"dark")},a=window.matchMedia("(prefers-color-scheme: light)");return a.addEventListener("change",i),()=>a.removeEventListener("change",i)});function r(){if(!A)return;const i=window.matchMedia("(prefers-color-scheme: light)");s(i.matches?"light":"dark")}function u(i){o=i}return{subscribe:c,query:r,tracking:u}}function X(){const{subscribe:e}=z([j,R,U],([o,c,s])=>{if(!A)return;const r=o==="system"?c:o;return K(()=>{const u=document.documentElement,i=document.querySelector('meta[name="theme-color"]');r==="light"?(u.classList.remove("dark"),u.style.colorScheme="light",i&&s&&i.setAttribute("content",s.light)):(u.classList.add("dark"),u.style.colorScheme="dark",i&&s&&i.setAttribute("content",s.dark))}),r});return{subscribe:e}}function P(e){return typeof e!="string"?!1:O.includes(e)}function de(){j.set(H(W)==="dark"?"light":"dark")}function fe(e){j.set(e)}function le(e,o){const c=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||e,r=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(c.classList[r?"remove":"add"]("dark"),c.style.colorScheme=r?"light":"dark",o){const u=document.querySelector('meta[name="theme-color"]');u&&u.setAttribute("content",s==="light"?o.light:o.dark)}localStorage.setItem("mode",s)}function ae(...e){return e.filter(Boolean).join(" ")}const B=typeof document<"u";function C(e){const o=I(e);function c(r){B&&o.set(r)}function s(r){B&&o.update(r)}return{subscribe:o.subscribe,set:c,update:s}}let F=0;function Y(){const e=C([]),o=C([]);function c(n){e.update(t=>[n,...t])}function s(n){var h;const{message:t,...d}=n,w=typeof(n==null?void 0:n.id)=="number"||n.id&&((h=n.id)==null?void 0:h.length)>0?n.id:F++,b=n.dismissable===void 0?!0:n.dismissable,m=n.type===void 0?"default":n.type;return H(e).find(g=>g.id===w)?e.update(g=>g.map(M=>M.id===w?{...M,...n,id:w,title:t,dismissable:b,type:m}:M)):c({...d,id:w,title:t,dismissable:b,type:m}),w}function r(n){if(n===void 0){e.set([]);return}return e.update(t=>t.filter(d=>d.id!==n)),n}function u(n,t){return s({...t,type:"default",message:n})}function i(n,t){return s({...t,type:"error",message:n})}function a(n,t){return s({...t,type:"success",message:n})}function f(n,t){return s({...t,type:"info",message:n})}function _(n,t){return s({...t,type:"warning",message:n})}function E(n,t){return s({...t,type:"loading",message:n})}function L(n,t){if(!t)return;let d;t.loading!==void 0&&(d=s({...t,promise:n,type:"loading",message:t.loading}));const w=n instanceof Promise?n:n();let b=d!==void 0;return w.then(m=>{if(m&&typeof m.ok=="boolean"&&!m.ok){b=!1;const k=typeof t.error=="function"?t.error(`HTTP error! status: ${m.status}`):t.error;s({id:d,type:"error",message:k})}else if(t.success!==void 0){b=!1;const k=typeof t.success=="function"?t.success(m):t.success;s({id:d,type:"success",message:k})}}).catch(m=>{if(t.error!==void 0){b=!1;const k=typeof t.error=="function"?t.error(m):t.error;s({id:d,type:"error",message:k})}}).finally(()=>{var m;b&&(r(d),d=void 0),(m=t.finally)==null||m.call(t)}),d}function y(n,t){const d=(t==null?void 0:t.id)||F++;return s({component:n,id:d,...t}),d}function v(n){o.update(t=>t.filter(d=>d.toastId!==n))}function p(n){o.update(t=>[n,...t])}function T(){e.set([]),o.set([])}return{create:s,addToast:c,dismiss:r,message:u,error:i,success:a,info:f,warning:_,loading:E,promise:L,custom:y,removeHeight:v,addHeight:p,reset:T,toasts:e,heights:o}}const S=Y();function Z(e,o){return S.create({message:e,...o})}const ee=Z,me=Object.assign(ee,{success:S.success,info:S.info,warning:S.warning,error:S.error,custom:S.custom,message:S.message,promise:S.promise,dismiss:S.dismiss,loading:S.loading}),ge=e=>({subscribe:e});export{R as a,fe as b,ae as c,W as d,oe as e,S as f,ce as g,ue as h,P as i,re as j,me as k,V as l,de as m,ie as o,le as s,U as t,ge as u};
