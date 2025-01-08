import{b as q,t as z,S as C,i as I}from"./index.v-92yLxh.js";import{H as N,s as j,m as B,x as M,e as J,c as R,b as U,f as D,y as H,z as g,i as V,u as G,q as K,r as Q,A as F,B as W}from"./scheduler.x4Pbowds.js";import{c as O,g as X}from"./button.y0uZejvG.js";import{p as Y}from"./parse.RrI1B0B4.js";import{c as Z,a as x}from"./singletons.5rAW6ESP.js";const ct=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ut(t){return t?.length!==void 0?t:Array.from(t)}function ft(t,e){t.d(1),e.delete(t.key)}function dt(t,e){q(t,1,1,()=>{e.delete(t.key)})}function mt(t,e,f,u,l,a,i,c,s,n,p,k){let m=t.length,d=a.length,r=m;const w={};for(;r--;)w[t[r].key]=r;const b=[],v=new Map,A=new Map,L=[];for(r=d;r--;){const o=k(l,a,r),h=f(o);let _=i.get(h);_?u&&L.push(()=>_.p(o,e)):(_=n(h,o),_.c()),v.set(h,b[r]=_),h in w&&A.set(h,Math.abs(r-w[h]))}const T=new Set,S=new Set;function E(o){z(o,1),o.m(c,p),i.set(o.key,o),p=o.first,d--}for(;m&&d;){const o=b[d-1],h=t[m-1],_=o.key,y=h.key;o===h?(p=o.first,m--,d--):v.has(y)?!i.has(_)||T.has(_)?E(o):S.has(y)?m--:A.get(_)>A.get(y)?(S.add(_),E(o)):(T.add(y),m--):(s(h,i),m--)}for(;m--;){const o=t[m];v.has(o.key)||s(o,i)}for(;d;)E(b[d-1]);return N(L),b}function $(t){let e,f,u;const l=t[4].default,a=B(l,t,t[3],null);let i=[{class:f=O("label",t[0])},t[2]],c={};for(let s=0;s<i.length;s+=1)c=M(c,i[s]);return{c(){e=J("div"),a&&a.c(),this.h()},l(s){e=R(s,"DIV",{class:!0});var n=U(e);a&&a.l(n),n.forEach(D),this.h()},h(){H(e,c),g(e,"small",t[1]),g(e,"svelte-1bye8mi",!0)},m(s,n){V(s,e,n),a&&a.m(e,null),u=!0},p(s,[n]){a&&a.p&&(!u||n&8)&&G(a,l,s,s[3],u?Q(l,s[3],n,null):K(s[3]),null),H(e,c=X(i,[(!u||n&1&&f!==(f=O("label",s[0])))&&{class:f},n&4&&s[2]])),g(e,"small",s[1]),g(e,"svelte-1bye8mi",!0)},i(s){u||(z(a,s),u=!0)},o(s){q(a,s),u=!1},d(s){s&&D(e),a&&a.d(s)}}}function tt(t,e,f){const u=["class","small"];let l=F(e,u),{$$slots:a={},$$scope:i}=e,{class:c=null}=e,{small:s=!1}=e;return t.$$set=n=>{e=M(M({},e),W(n)),f(2,l=F(e,u)),"class"in n&&f(0,c=n.class),"small"in n&&f(1,s=n.small),"$$scope"in n&&f(3,i=n.$$scope)},[c,s,l,i,a]}class ht extends C{constructor(e){super(),I(this,e,tt,$,j,{class:0,small:1})}}function _t(t){const e=t-1;return e*e*e+1}function pt(t){return Math.sin(t*Math.PI/2)}const et=Z("invalidate_all");function st(t){return x.apply_action(t)}function at(t){const e=JSON.parse(t);return e.data&&(e.data=Y(e.data)),e}function P(t){return HTMLElement.prototype.cloneNode.call(t)}function bt(t,e=()=>{}){const f=async({action:l,result:a,reset:i=!0,invalidateAll:c=!0})=>{a.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(t),c&&await et()),(location.origin+location.pathname===l.origin+l.pathname||a.type==="redirect"||a.type==="error")&&st(a)};async function u(l){if((l.submitter?.hasAttribute("formmethod")?l.submitter.formMethod:P(t).method)!=="post")return;l.preventDefault();const i=new URL(l.submitter?.hasAttribute("formaction")?l.submitter.formAction:P(t).action),c=new FormData(t),s=l.submitter?.getAttribute("name");s&&c.append(s,l.submitter?.getAttribute("value")??"");const n=new AbortController;let p=!1;const m=await e({action:i,cancel:()=>p=!0,controller:n,formData:c,formElement:t,submitter:l.submitter})??f;if(p)return;let d;try{const r=await fetch(i,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:c,signal:n.signal});d=at(await r.text()),d.type==="error"&&(d.status=r.status)}catch(r){if(r?.name==="AbortError")return;d={type:"error",error:r}}m({action:i,formData:c,formElement:t,update:r=>f({action:i,result:d,reset:r?.reset,invalidateAll:r?.invalidateAll}),result:d})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",u),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",u)}}}export{ht as L,bt as a,_t as c,ft as d,ut as e,ct as g,dt as o,pt as s,mt as u};