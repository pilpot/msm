import{s as te,x as Q,e as F,a as j,c as S,b as y,g as z,f as v,y as oe,z as O,p as D,Y as ae,i as J,h as B,E as ue,H as Re,A as re,D as _t,B as ge,m as _e,u as ve,q as be,r as we,n as ee,_ as me,K as fe,t as X,d as $,j as de,a5 as N,a6 as ft,a7 as Ve,Z as vt,F as Ce,C as Be,G as bt,v as Fe,w as Se,l as ct}from"./scheduler.x4Pbowds.js";import{S as le,i as ne,t as k,g as K,b as p,f as Z,c as P,a as G,m as M,d as H,h as se,e as Je}from"./index.v-92yLxh.js";import{c as wt,e as x,g as kt,a as mt,L as Ct}from"./forms.TXfJzFMW.js";import{c as Y,g as ke,B as dt}from"./button.y0uZejvG.js";import{C as ye,H as At}from"./h2.mxyf_326.js";function Oe(s){let e;const l=s[10].default,t=_e(l,s,s[9],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,n){t&&t.m(i,n),e=!0},p(i,n){t&&t.p&&(!e||n&512)&&ve(t,l,i,i[9],e?we(l,i[9],n,null):be(i[9]),null)},i(i){e||(k(t,i),e=!0)},o(i){p(t,i),e=!1},d(i){t&&t.d(i)}}}function je(s){let e;const l=s[10].default,t=_e(l,s,s[9],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,n){t&&t.m(i,n),e=!0},p(i,n){t&&t.p&&(!e||n&512)&&ve(t,l,i,i[9],e?we(l,i[9],n,null):be(i[9]),null)},i(i){e||(k(t,i),e=!0)},o(i){p(t,i),e=!1},d(i){t&&t.d(i)}}}function Et(s){let e,l,t,i,n,a,o,r,f,c,m,E,h,R,b=s[6]&&Oe(s),g=[{type:"checkbox"},{class:i=Y(s[2])},{disabled:s[5]},s[8]],_={};for(let w=0;w<g.length;w+=1)_=Q(_,g[w]);let A=!s[6]&&je(s);return{c(){e=F("label"),b&&b.c(),l=j(),t=F("input"),n=j(),a=F("div"),o=F("div"),c=j(),A&&A.c(),this.h()},l(w){e=S(w,"LABEL",{class:!0});var u=y(e);b&&b.l(u),l=z(u),t=S(u,"INPUT",{type:!0,class:!0}),n=z(u),a=S(u,"DIV",{class:!0});var d=y(a);o=S(d,"DIV",{class:!0}),y(o).forEach(v),d.forEach(v),c=z(u),A&&A.l(u),u.forEach(v),this.h()},h(){oe(t,_),O(t,"svelte-aapm94",!0),D(o,"class",r=ae(Y("thumb",s[4]))+" svelte-aapm94"),D(a,"class",f=ae(Y("track",s[3]))+" svelte-aapm94"),D(e,"class",m=ae(Y("switch",s[1]))+" svelte-aapm94")},m(w,u){J(w,e,u),b&&b.m(e,null),B(e,l),B(e,t),t.autofocus&&t.focus(),t.checked=s[0],B(e,n),B(e,a),B(a,o),B(e,c),A&&A.m(e,null),E=!0,h||(R=[ue(t,"change",s[11]),ue(t,"change",s[12])],h=!0)},p(w,[u]){w[6]?b?(b.p(w,u),u&64&&k(b,1)):(b=Oe(w),b.c(),k(b,1),b.m(e,l)):b&&(K(),p(b,1,1,()=>{b=null}),Z()),oe(t,_=ke(g,[{type:"checkbox"},(!E||u&4&&i!==(i=Y(w[2])))&&{class:i},(!E||u&32)&&{disabled:w[5]},u&256&&w[8]])),u&1&&(t.checked=w[0]),O(t,"svelte-aapm94",!0),(!E||u&16&&r!==(r=ae(Y("thumb",w[4]))+" svelte-aapm94"))&&D(o,"class",r),(!E||u&8&&f!==(f=ae(Y("track",w[3]))+" svelte-aapm94"))&&D(a,"class",f),w[6]?A&&(K(),p(A,1,1,()=>{A=null}),Z()):A?(A.p(w,u),u&64&&k(A,1)):(A=je(w),A.c(),k(A,1),A.m(e,null)),(!E||u&2&&m!==(m=ae(Y("switch",w[1]))+" svelte-aapm94"))&&D(e,"class",m)},i(w){E||(k(b),k(A),E=!0)},o(w){p(b),p(A),E=!1},d(w){w&&v(e),b&&b.d(),A&&A.d(),h=!1,Re(R)}}}function It(s,e,l){const t=["class","inputClass","trackClass","thumbClass","value","disabled","slotLeft"];let i=re(e,t),{$$slots:n={},$$scope:a}=e,{class:o=null}=e,{inputClass:r=null}=e,{trackClass:f=null}=e,{thumbClass:c=null}=e,{value:m=!1}=e,{disabled:E=!1}=e,{slotLeft:h=!1}=e;const R=_t();function b(){m=this.checked,l(0,m)}const g=_=>R("change",{value:_.target.checked,nativeEvent:_});return s.$$set=_=>{e=Q(Q({},e),ge(_)),l(8,i=re(e,t)),"class"in _&&l(1,o=_.class),"inputClass"in _&&l(2,r=_.inputClass),"trackClass"in _&&l(3,f=_.trackClass),"thumbClass"in _&&l(4,c=_.thumbClass),"value"in _&&l(0,m=_.value),"disabled"in _&&l(5,E=_.disabled),"slotLeft"in _&&l(6,h=_.slotLeft),"$$scope"in _&&l(9,a=_.$$scope)},[m,o,r,f,c,E,h,R,i,a,n,b,g]}class ze extends le{constructor(e){super(),ne(this,e,It,Et,te,{class:1,inputClass:2,trackClass:3,thumbClass:4,value:0,disabled:5,slotLeft:6})}}function pt(s){let e,l,t;const i=s[5].default,n=_e(i,s,s[4],null);return{c(){e=F("div"),n&&n.c(),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=y(e);n&&n.l(o),o.forEach(v),this.h()},h(){D(e,"class",l=ae(Y("chip",s[0]))+" svelte-oww5en"),O(e,"small",s[1]),O(e,"outline",s[2]),O(e,"no-padding",s[3])},m(a,o){J(a,e,o),n&&n.m(e,null),t=!0},p(a,[o]){n&&n.p&&(!t||o&16)&&ve(n,i,a,a[4],t?we(i,a[4],o,null):be(a[4]),null),(!t||o&1&&l!==(l=ae(Y("chip",a[0]))+" svelte-oww5en"))&&D(e,"class",l),(!t||o&3)&&O(e,"small",a[1]),(!t||o&5)&&O(e,"outline",a[2]),(!t||o&9)&&O(e,"no-padding",a[3])},i(a){t||(k(n,a),t=!0)},o(a){p(n,a),t=!1},d(a){a&&v(e),n&&n.d(a)}}}function Dt(s,e,l){let{$$slots:t={},$$scope:i}=e,{class:n=null}=e,{small:a=!1}=e,{outline:o=!1}=e,{noPadding:r=!1}=e;return s.$$set=f=>{"class"in f&&l(0,n=f.class),"small"in f&&l(1,a=f.small),"outline"in f&&l(2,o=f.outline),"noPadding"in f&&l(3,r=f.noPadding),"$$scope"in f&&l(4,i=f.$$scope)},[n,a,o,r,i,t]}class ht extends le{constructor(e){super(),ne(this,e,Dt,pt,te,{class:0,small:1,outline:2,noPadding:3})}}function Rt(s){let e,l,t;const i=s[3].default,n=_e(i,s,s[2],null);let a=[{class:l=Y("headline",s[0])},s[1]],o={};for(let r=0;r<a.length;r+=1)o=Q(o,a[r]);return{c(){e=F("div"),n&&n.c(),this.h()},l(r){e=S(r,"DIV",{class:!0});var f=y(e);n&&n.l(f),f.forEach(v),this.h()},h(){oe(e,o),O(e,"svelte-7dvfxj",!0)},m(r,f){J(r,e,f),n&&n.m(e,null),t=!0},p(r,[f]){n&&n.p&&(!t||f&4)&&ve(n,i,r,r[2],t?we(i,r[2],f,null):be(r[2]),null),oe(e,o=ke(a,[(!t||f&1&&l!==(l=Y("headline",r[0])))&&{class:l},f&2&&r[1]])),O(e,"svelte-7dvfxj",!0)},i(r){t||(k(n,r),t=!0)},o(r){p(n,r),t=!1},d(r){r&&v(e),n&&n.d(r)}}}function Vt(s,e,l){const t=["class"];let i=re(e,t),{$$slots:n={},$$scope:a}=e,{class:o=null}=e;return s.$$set=r=>{e=Q(Q({},e),ge(r)),l(1,i=re(e,t)),"class"in r&&l(0,o=r.class),"$$scope"in r&&l(2,a=r.$$scope)},[o,i,a,n]}class Bt extends le{constructor(e){super(),ne(this,e,Vt,Rt,te,{class:0})}}function Ft(s){let e,l,t=[{class:l=Y("dot",s[0])},s[6]],i={};for(let n=0;n<t.length;n+=1)i=Q(i,t[n]);return{c(){e=F("div"),this.h()},l(n){e=S(n,"DIV",{class:!0}),y(e).forEach(v),this.h()},h(){oe(e,i),O(e,"info",s[1]),O(e,"attention",s[2]),O(e,"success",s[4]),O(e,"danger",s[3]),O(e,"small",s[5]),O(e,"svelte-1rux4jd",!0)},m(n,a){J(n,e,a)},p(n,[a]){oe(e,i=ke(t,[a&1&&l!==(l=Y("dot",n[0]))&&{class:l},a&64&&n[6]])),O(e,"info",n[1]),O(e,"attention",n[2]),O(e,"success",n[4]),O(e,"danger",n[3]),O(e,"small",n[5]),O(e,"svelte-1rux4jd",!0)},i:ee,o:ee,d(n){n&&v(e)}}}function St(s,e,l){const t=["class","info","attention","danger","success","small"];let i=re(e,t),{class:n=null}=e,{info:a=!1}=e,{attention:o=!1}=e,{danger:r=!1}=e,{success:f=!1}=e,{small:c=!1}=e;return a+o+r+f>1&&console.warn("A dot can either be info, attention, danger or success, not several of them"),s.$$set=m=>{e=Q(Q({},e),ge(m)),l(6,i=re(e,t)),"class"in m&&l(0,n=m.class),"info"in m&&l(1,a=m.info),"attention"in m&&l(2,o=m.attention),"danger"in m&&l(3,r=m.danger),"success"in m&&l(4,f=m.success),"small"in m&&l(5,c=m.small)},[n,a,o,r,f,c,i]}class Jt extends le{constructor(e){super(),ne(this,e,St,Ft,te,{class:0,info:1,attention:2,danger:3,success:4,small:5})}}const Ae=Jt;function yt(s){let e,l=[{"data-text":s[0]},s[1]],t={};for(let i=0;i<l.length;i+=1)t=Q(t,l[i]);return{c(){e=F("hr"),this.h()},l(i){e=S(i,"HR",{"data-text":!0}),this.h()},h(){oe(e,t),O(e,"svelte-lhyupy",!0)},m(i,n){J(i,e,n)},p(i,[n]){oe(e,t=ke(l,[n&1&&{"data-text":i[0]},n&2&&i[1]])),O(e,"svelte-lhyupy",!0)},i:ee,o:ee,d(i){i&&v(e)}}}function Ot(s,e,l){const t=["text"];let i=re(e,t),{text:n=null}=e;return s.$$set=a=>{e=Q(Q({},e),ge(a)),l(1,i=re(e,t)),"text"in a&&l(0,n=a.text)},[n,i]}class Le extends le{constructor(e){super(),ne(this,e,Ot,yt,te,{text:0})}}function ie(s,{delay:e=0,duration:l=400,easing:t=wt,axis:i="y"}={}){const n=getComputedStyle(s),a=+n.opacity,o=i==="y"?"height":"width",r=parseFloat(n[o]),f=i==="y"?["top","bottom"]:["left","right"],c=f.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),m=parseFloat(n[`padding${c[0]}`]),E=parseFloat(n[`padding${c[1]}`]),h=parseFloat(n[`margin${c[0]}`]),R=parseFloat(n[`margin${c[1]}`]),b=parseFloat(n[`border${c[0]}Width`]),g=parseFloat(n[`border${c[1]}Width`]);return{delay:e,duration:l,easing:t,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*a};${o}: ${_*r}px;padding-${f[0]}: ${_*m}px;padding-${f[1]}: ${_*E}px;margin-${f[0]}: ${_*h}px;margin-${f[1]}: ${_*R}px;border-${f[0]}-width: ${_*b}px;border-${f[1]}-width: ${_*g}px;`}}function jt(s){let e,l,t,i,n,a,o;return{c(){e=F("div"),l=F("div"),t=j(),i=F("div"),n=j(),a=F("div"),this.h()},l(r){e=S(r,"DIV",{class:!0});var f=y(e);l=S(f,"DIV",{class:!0}),y(l).forEach(v),t=z(f),i=S(f,"DIV",{class:!0}),y(i).forEach(v),n=z(f),a=S(f,"DIV",{class:!0}),y(a).forEach(v),f.forEach(v),this.h()},h(){D(l,"class","bounce1 svelte-5lyar3"),D(i,"class","bounce2 svelte-5lyar3"),D(a,"class","bounce3 svelte-5lyar3"),D(e,"class",o=ae(Y("spinner",s[0]))+" svelte-5lyar3")},m(r,f){J(r,e,f),B(e,l),B(e,t),B(e,i),B(e,n),B(e,a)},p(r,[f]){f&1&&o!==(o=ae(Y("spinner",r[0]))+" svelte-5lyar3")&&D(e,"class",o)},i:ee,o:ee,d(r){r&&v(e)}}}function zt(s,e,l){let{class:t=null}=e;return s.$$set=i=>{"class"in i&&l(0,t=i.class)},[t]}class Lt extends le{constructor(e){super(),ne(this,e,zt,jt,te,{class:0})}}function Pe(s,e,l){const t=s.slice();return t[5]=e[l],t}function Ge(s){let e,l;return e=new Ae({props:{style:"background:"+s[1][s[5]]+";display:inline-block;height:25px;width:25px;filter: drop-shadow(0px 0px 2px #804000);margin:5px;"}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p(t,i){const n={};i&1&&(n.style="background:"+t[1][t[5]]+";display:inline-block;height:25px;width:25px;filter: drop-shadow(0px 0px 2px #804000);margin:5px;"),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Pt(s){let e,l,t,i=x(s[0]),n=[];for(let m=0;m<i.length;m+=1)n[m]=Ge(Pe(s,i,m));const a=m=>p(n[m],1,1,()=>{n[m]=null}),o=s[4].default,r=_e(o,s,s[3],null);let f=[{class:"guessRow"},s[2]],c={};for(let m=0;m<f.length;m+=1)c=Q(c,f[m]);return{c(){e=F("div");for(let m=0;m<n.length;m+=1)n[m].c();l=j(),r&&r.c(),this.h()},l(m){e=S(m,"DIV",{class:!0});var E=y(e);for(let h=0;h<n.length;h+=1)n[h].l(E);l=z(E),r&&r.l(E),E.forEach(v),this.h()},h(){oe(e,c),O(e,"svelte-ichylx",!0)},m(m,E){J(m,e,E);for(let h=0;h<n.length;h+=1)n[h]&&n[h].m(e,null);B(e,l),r&&r.m(e,null),t=!0},p(m,[E]){if(E&3){i=x(m[0]);let h;for(h=0;h<i.length;h+=1){const R=Pe(m,i,h);n[h]?(n[h].p(R,E),k(n[h],1)):(n[h]=Ge(R),n[h].c(),k(n[h],1),n[h].m(e,l))}for(K(),h=i.length;h<n.length;h+=1)a(h);Z()}r&&r.p&&(!t||E&8)&&ve(r,o,m,m[3],t?we(o,m[3],E,null):be(m[3]),null),oe(e,c=ke(f,[{class:"guessRow"},E&4&&m[2]])),O(e,"svelte-ichylx",!0)},i(m){if(!t){for(let E=0;E<i.length;E+=1)k(n[E]);k(r,m),t=!0}},o(m){n=n.filter(Boolean);for(let E=0;E<n.length;E+=1)p(n[E]);p(r,m),t=!1},d(m){m&&v(e),me(n,m),r&&r.d(m)}}}function Gt(s,e,l){const t=["guesses"];let i=re(e,t),{$$slots:n={},$$scope:a}=e,{guesses:o=[]}=e;const r=["conic-gradient(from 180deg,violet,blue,green,yellow,orange,red,violet)","#FFF","#000","#a93226","#2e86c1","#28b463","#f4d03f","#a569bd","#7a5142","#ff4600","#9d9d9d"];return s.$$set=f=>{e=Q(Q({},e),ge(f)),l(2,i=re(e,t)),"guesses"in f&&l(0,o=f.guesses),"$$scope"in f&&l(3,a=f.$$scope)},[o,r,i,a,n]}class Ee extends le{constructor(e){super(),ne(this,e,Gt,Pt,te,{guesses:0})}}function Me(s,e,l){const t=s.slice();return t[6]=e[l],t[8]=l,t}function He(s,e,l){const t=s.slice();return t[6]=e[l],t[8]=l,t}function Ue(s,e,l){const t=s.slice();return t[6]=e[l],t[8]=l,t}function Te(s){let e,l;return e=new Ae({props:{style:"background-color: #FFF;display:inline-block;height:15px;width:15px"}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p:ee,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function qe(s){let e,l;return e=new Ae({props:{style:"background-color: #000;display:inline-block;height:15px;width:15px"}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p:ee,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Ne(s){let e,l;return e=new Ae({props:{style:"background-color: transparent;display:inline-block;height:15px;width:15px"}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p:ee,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function We(s){let e,l=(s[1]>0?s[1]:"")+"",t,i,n;return{c(){e=F("div"),t=X(l),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=y(e);t=$(o,l),o.forEach(v),this.h()},h(){D(e,"class","remainingAnswers svelte-10od9t2")},m(a,o){J(a,e,o),B(e,t),n=!0},p(a,o){(!n||o&2)&&l!==(l=(a[1]>0?a[1]:"")+"")&&de(t,l)},i(a){n||(a&&fe(()=>{n&&(i||(i=se(e,ie,{axis:"x"},!0)),i.run(1))}),n=!0)},o(a){a&&(i||(i=se(e,ie,{axis:"x"},!1)),i.run(0)),n=!1},d(a){a&&v(e),a&&i&&i.end()}}}function Ye(s){let e,l,t,i,n,a,o,r;return{c(){e=F("div"),l=F("meter"),this.h()},l(f){e=S(f,"DIV",{class:!0});var c=y(e);l=S(c,"METER",{min:!0,max:!0,high:!0,low:!0,optimum:!0}),y(l).forEach(v),c.forEach(v),this.h()},h(){D(l,"min",t=-s[2]),D(l,"max","-1"),D(l,"high",i=-Math.round(s[2]/3)),D(l,"low",n=-Math.round(s[2]/2)),D(l,"optimum","-1"),l.value=a=-s[1],D(e,"class","judge svelte-10od9t2")},m(f,c){J(f,e,c),B(e,l),r=!0},p(f,c){(!r||c&4&&t!==(t=-f[2]))&&D(l,"min",t),(!r||c&4&&i!==(i=-Math.round(f[2]/3)))&&D(l,"high",i),(!r||c&4&&n!==(n=-Math.round(f[2]/2)))&&D(l,"low",n),(!r||c&2&&a!==(a=-f[1]))&&(l.value=a)},i(f){r||(f&&fe(()=>{r&&(o||(o=se(e,ie,{axis:"x"},!0)),o.run(1))}),r=!0)},o(f){f&&(o||(o=se(e,ie,{axis:"x"},!1)),o.run(0)),r=!1},d(f){f&&v(e),f&&o&&o.end()}}}function Mt(s){let e,l,t,i,n,a,o,r,f=x(Array(s[0][0])),c=[];for(let u=0;u<f.length;u+=1)c[u]=Te(Ue(s,f,u));const m=u=>p(c[u],1,1,()=>{c[u]=null});let E=x(Array(s[0][1])),h=[];for(let u=0;u<E.length;u+=1)h[u]=qe(He(s,E,u));const R=u=>p(h[u],1,1,()=>{h[u]=null});let b=x(Array(s[3]-s[0][0]-s[0][1])),g=[];for(let u=0;u<b.length;u+=1)g[u]=Ne(Me(s,b,u));const _=u=>p(g[u],1,1,()=>{g[u]=null});let A=s[4]&&We(s),w=s[5]&&Ye(s);return{c(){e=F("div"),l=F("div");for(let u=0;u<c.length;u+=1)c[u].c();t=j();for(let u=0;u<h.length;u+=1)h[u].c();i=j();for(let u=0;u<g.length;u+=1)g[u].c();n=j(),A&&A.c(),a=j(),w&&w.c(),this.h()},l(u){e=S(u,"DIV",{class:!0});var d=y(e);l=S(d,"DIV",{class:!0});var C=y(l);for(let I=0;I<c.length;I+=1)c[I].l(C);t=z(C);for(let I=0;I<h.length;I+=1)h[I].l(C);i=z(C);for(let I=0;I<g.length;I+=1)g[I].l(C);C.forEach(v),n=z(d),A&&A.l(d),a=z(d),w&&w.l(d),d.forEach(v),this.h()},h(){D(l,"class","resolutionRow svelte-10od9t2"),D(e,"class","resolution svelte-10od9t2")},m(u,d){J(u,e,d),B(e,l);for(let C=0;C<c.length;C+=1)c[C]&&c[C].m(l,null);B(l,t);for(let C=0;C<h.length;C+=1)h[C]&&h[C].m(l,null);B(l,i);for(let C=0;C<g.length;C+=1)g[C]&&g[C].m(l,null);B(e,n),A&&A.m(e,null),B(e,a),w&&w.m(e,null),r=!0},p(u,[d]){if(d&1){f=x(Array(u[0][0]));let C;for(C=0;C<f.length;C+=1){const I=Ue(u,f,C);c[C]?(c[C].p(I,d),k(c[C],1)):(c[C]=Te(),c[C].c(),k(c[C],1),c[C].m(l,t))}for(K(),C=f.length;C<c.length;C+=1)m(C);Z()}if(d&1){E=x(Array(u[0][1]));let C;for(C=0;C<E.length;C+=1){const I=He(u,E,C);h[C]?(h[C].p(I,d),k(h[C],1)):(h[C]=qe(),h[C].c(),k(h[C],1),h[C].m(l,i))}for(K(),C=E.length;C<h.length;C+=1)R(C);Z()}if(d&9){b=x(Array(u[3]-u[0][0]-u[0][1]));let C;for(C=0;C<b.length;C+=1){const I=Me(u,b,C);g[C]?(g[C].p(I,d),k(g[C],1)):(g[C]=Ne(),g[C].c(),k(g[C],1),g[C].m(l,null))}for(K(),C=b.length;C<g.length;C+=1)_(C);Z()}u[4]?A?(A.p(u,d),d&16&&k(A,1)):(A=We(u),A.c(),k(A,1),A.m(e,a)):A&&(K(),p(A,1,1,()=>{A=null}),Z()),u[5]?w?(w.p(u,d),d&32&&k(w,1)):(w=Ye(u),w.c(),k(w,1),w.m(e,null)):w&&(K(),p(w,1,1,()=>{w=null}),Z())},i(u){if(!r){for(let d=0;d<f.length;d+=1)k(c[d]);for(let d=0;d<E.length;d+=1)k(h[d]);for(let d=0;d<b.length;d+=1)k(g[d]);k(A),k(w),u&&fe(()=>{r&&(o||(o=se(e,ie,{},!0)),o.run(1))}),r=!0}},o(u){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)p(c[d]);h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)p(h[d]);g=g.filter(Boolean);for(let d=0;d<g.length;d+=1)p(g[d]);p(A),p(w),u&&(o||(o=se(e,ie,{},!1)),o.run(0)),r=!1},d(u){u&&v(e),me(c,u),me(h,u),me(g,u),A&&A.d(),w&&w.d(),u&&o&&o.end()}}}function Ht(s,e,l){let{resolution:t=[0,0]}=e,{remainingAnswersCount:i=0}=e,{maxAnswers:n=0}=e,{columns:a=5}=e,{showRemainingAnswersCount:o=!0}=e,{showJudge:r=!0}=e;return s.$$set=f=>{"resolution"in f&&l(0,t=f.resolution),"remainingAnswersCount"in f&&l(1,i=f.remainingAnswersCount),"maxAnswers"in f&&l(2,n=f.maxAnswers),"columns"in f&&l(3,a=f.columns),"showRemainingAnswersCount"in f&&l(4,o=f.showRemainingAnswersCount),"showJudge"in f&&l(5,r=f.showJudge)},[t,i,n,a,o,r]}class Ut extends le{constructor(e){super(),ne(this,e,Ht,Mt,te,{resolution:0,remainingAnswersCount:1,maxAnswers:2,columns:3,showRemainingAnswersCount:4,showJudge:5})}}function Ke(s){let e,l,t,i;return e=new Ee({props:{guesses:s[0]}}),t=new Ut({props:{resolution:s[1],remainingAnswersCount:s[2],maxAnswers:s[3],showRemainingAnswersCount:s[4],showJudge:s[5],columns:s[0].length}}),{c(){P(e.$$.fragment),l=j(),P(t.$$.fragment)},l(n){G(e.$$.fragment,n),l=z(n),G(t.$$.fragment,n)},m(n,a){M(e,n,a),J(n,l,a),M(t,n,a),i=!0},p(n,a){const o={};a&1&&(o.guesses=n[0]),e.$set(o);const r={};a&2&&(r.resolution=n[1]),a&4&&(r.remainingAnswersCount=n[2]),a&8&&(r.maxAnswers=n[3]),a&16&&(r.showRemainingAnswersCount=n[4]),a&32&&(r.showJudge=n[5]),a&1&&(r.columns=n[0].length),t.$set(r)},i(n){i||(k(e.$$.fragment,n),k(t.$$.fragment,n),i=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),i=!1},d(n){n&&v(l),H(e,n),H(t,n)}}}function Tt(s){let e,l,t=s[0][0]>0&&Ke(s);return{c(){e=F("div"),t&&t.c(),this.h()},l(i){e=S(i,"DIV",{class:!0});var n=y(e);t&&t.l(n),n.forEach(v),this.h()},h(){D(e,"class","gameBoardRow svelte-1kvt3tu")},m(i,n){J(i,e,n),t&&t.m(e,null),l=!0},p(i,[n]){i[0][0]>0?t?(t.p(i,n),n&1&&k(t,1)):(t=Ke(i),t.c(),k(t,1),t.m(e,null)):t&&(K(),p(t,1,1,()=>{t=null}),Z())},i(i){l||(k(t),l=!0)},o(i){p(t),l=!1},d(i){i&&v(e),t&&t.d()}}}function qt(s,e,l){let{guesses:t=[]}=e,{resolution:i=[0,0]}=e,{remainingAnswersCount:n=0}=e,{maxAnswers:a=0}=e,{showRemainingAnswersCount:o=!0}=e,{showJudge:r=!0}=e;return s.$$set=f=>{"guesses"in f&&l(0,t=f.guesses),"resolution"in f&&l(1,i=f.resolution),"remainingAnswersCount"in f&&l(2,n=f.remainingAnswersCount),"maxAnswers"in f&&l(3,a=f.maxAnswers),"showRemainingAnswersCount"in f&&l(4,o=f.showRemainingAnswersCount),"showJudge"in f&&l(5,r=f.showJudge)},[t,i,n,a,o,r]}class Nt extends le{constructor(e){super(),ne(this,e,qt,Tt,te,{guesses:0,resolution:1,remainingAnswersCount:2,maxAnswers:3,showRemainingAnswersCount:4,showJudge:5})}}function Wt(s){let e,l;return e=new Ee({props:{guesses:Array(s[1]).fill(0)}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p(t,i){const n={};i&2&&(n.guesses=Array(t[1]).fill(0)),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Yt(s){let e,l;return e=new Ee({props:{guesses:s[0]}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p(t,i){const n={};i&1&&(n.guesses=t[0]),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function Kt(s){let e,l,t,i;const n=[Yt,Wt],a=[];function o(r,f){return r[0].length>0?0:1}return l=o(s),t=a[l]=n[l](s),{c(){e=F("div"),t.c(),this.h()},l(r){e=S(r,"DIV",{class:!0});var f=y(e);t.l(f),f.forEach(v),this.h()},h(){D(e,"class","answerRow svelte-12y9ewt")},m(r,f){J(r,e,f),a[l].m(e,null),i=!0},p(r,[f]){let c=l;l=o(r),l===c?a[l].p(r,f):(K(),p(a[c],1,1,()=>{a[c]=null}),Z(),t=a[l],t?t.p(r,f):(t=a[l]=n[l](r),t.c()),k(t,1),t.m(e,null))},i(r){i||(k(t),i=!0)},o(r){p(t),i=!1},d(r){r&&v(e),a[l].d()}}}function Zt(s,e,l){let{answer:t=[]}=e,{columns:i=5}=e;return s.$$set=n=>{"answer"in n&&l(0,t=n.answer),"columns"in n&&l(1,i=n.columns)},[t,i]}class Qt extends le{constructor(e){super(),ne(this,e,Zt,Kt,te,{answer:0,columns:1})}}function gt(s,e={enabled:!0}){let{enabled:l,eventType:t,nodeForEvent:i,options:n,capture:a}=Ze(e);function o(r){r.target&&s&&!s.contains(r.target)&&!r.defaultPrevented&&s.dispatchEvent(new CustomEvent("clickoutside",{detail:r}))}return e.enabled!==!1&&i.addEventListener(t,o,n),{update(r){i.removeEventListener(t,o,a),{enabled:l,eventType:t,nodeForEvent:i,options:n,capture:a}=Ze(r),l&&i.addEventListener(t,o,n)},destroy(){i.removeEventListener(t,o,a)}}}function Ze(s={}){return{enabled:s.enabled??!0,nodeForEvent:s.limit?.parent??document,eventType:s.event??"click",options:s.options,capture:typeof s.options=="object"?s.options?.capture:s.options}}const{window:De}=kt;function Qe(s,e,l){const t=s.slice();return t[20]=e[l],t[22]=l,t}function Xe(s){let e,l,t,i,n,a=x(s[2]),o=[];for(let r=0;r<a.length;r+=1)o[r]=xe(Qe(s,a,r));return{c(){e=F("div"),l=F("div");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=S(r,"DIV",{class:!0});var f=y(e);l=S(f,"DIV",{class:!0});var c=y(l);for(let m=0;m<o.length;m+=1)o[m].l(c);c.forEach(v),f.forEach(v),this.h()},h(){D(l,"class","values-dropdown-grid svelte-b4ihmo"),D(e,"class","values-dropdown svelte-b4ihmo"),fe(()=>s[18].call(e)),O(e,"top",s[5])},m(r,f){J(r,e,f),B(e,l);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(l,null);t=ft(e,s[18].bind(e)),i||(n=[Ce(gt.call(null,e)),ue(e,"clickoutside",s[11])],i=!0)},p(r,f){if(f&4111){a=x(r[2]);let c;for(c=0;c<a.length;c+=1){const m=Qe(r,a,c);o[c]?o[c].p(m,f):(o[c]=xe(m),o[c].c(),o[c].m(l,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=a.length}f&32&&O(e,"top",r[5])},d(r){r&&v(e),me(o,r),t(),i=!1,Re(n)}}}function $e(s){let e,l,t,i;function n(){return s[17](s[20])}return{c(){e=F("button"),this.h()},l(a){e=S(a,"BUTTON",{id:!0,style:!0,class:!0});var o=y(e);o.forEach(v),this.h()},h(){D(e,"id",l=s[1]+"-"+s[22]),N(e,"background",s[20]),D(e,"class","color-block svelte-b4ihmo"),O(e,"active",s[2].indexOf(s[20])==s[0])},m(a,o){J(a,e,o),t||(i=ue(e,"click",n),t=!0)},p(a,o){s=a,o&2&&l!==(l=s[1]+"-"+s[22])&&D(e,"id",l),o&4&&N(e,"background",s[20]),o&5&&O(e,"active",s[2].indexOf(s[20])==s[0])},d(a){a&&v(e),t=!1,i()}}}function xe(s){let e,l=s[22]!==0&&s[22]<s[3]+1&&$e(s);return{c(){l&&l.c(),e=Be()},l(t){l&&l.l(t),e=Be()},m(t,i){l&&l.m(t,i),J(t,e,i)},p(t,i){t[22]!==0&&t[22]<t[3]+1?l?l.p(t,i):(l=$e(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&v(e),l&&l.d(t)}}}function Xt(s){let e,l,t,i,n,a,o,r,f,c,m,E,h,R;fe(s[13]);let b=s[6]&&Xe(s);return{c(){e=F("div"),l=F("div"),t=F("button"),i=F("div"),n=F("div"),a=j(),o=F("div"),c=j(),m=F("input"),E=j(),b&&b.c(),this.h()},l(g){e=S(g,"DIV",{class:!0});var _=y(e);l=S(_,"DIV",{class:!0});var A=y(l);t=S(A,"BUTTON",{id:!0,class:!0});var w=y(t);i=S(w,"DIV",{style:!0});var u=y(i);n=S(u,"DIV",{style:!0,class:!0}),y(n).forEach(v),a=z(u),o=S(u,"DIV",{class:!0,style:!0}),y(o).forEach(v),u.forEach(v),w.forEach(v),c=z(A),m=S(A,"INPUT",{type:!0,name:!0,class:!0}),A.forEach(v),E=z(_),b&&b.l(_),_.forEach(v),this.h()},h(){N(n,"background",s[2][s[0]]),D(n,"class","color-block svelte-b4ihmo"),D(o,"class","caret svelte-b4ihmo"),N(o,"margin-right",".2rem"),O(o,"top",s[5]),N(i,"display","flex"),D(t,"id",r=s[1]+"-button"),D(t,"class","select-color svelte-b4ihmo"),fe(()=>s[14].call(t)),O(t,"fake-focus",s[6]),D(m,"type","hidden"),D(m,"name",s[1]),D(m,"class","svelte-b4ihmo"),D(l,"class","color-picker-inner svelte-b4ihmo"),D(e,"class","color-picker-holder svelte-b4ihmo")},m(g,_){J(g,e,_),B(e,l),B(l,t),B(t,i),B(i,n),B(i,a),B(i,o),f=ft(t,s[14].bind(t)),B(l,c),B(l,m),Ve(m,s[0]),B(e,E),b&&b.m(e,null),h||(R=[ue(De,"keydown",s[9]),ue(De,"resize",s[13]),ue(t,"click",vt(s[15])),Ce(gt.call(null,t)),ue(t,"clickoutside",s[11]),ue(m,"input",s[16])],h=!0)},p(g,[_]){_&5&&N(n,"background",g[2][g[0]]),_&32&&O(o,"top",g[5]),_&2&&r!==(r=g[1]+"-button")&&D(t,"id",r),_&64&&O(t,"fake-focus",g[6]),_&2&&D(m,"name",g[1]),_&1&&Ve(m,g[0]),g[6]?b?b.p(g,_):(b=Xe(g),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i:ee,o:ee,d(g){g&&v(e),f(),b&&b.d(),h=!1,Re(R)}}}let $t="Escape";function xt(s,e,l){function t(I,L){window.sessionStorage.setItem(I,L)}let{id:i="guess"}=e,{value:n=1}=e,{colors:a=[]}=e,{colorsCount:o=8}=e;function r(I){I.key==$t&&l(6,m=!1)}let f,c,m=!1,E=158,h;async function R(I){document.querySelectorAll(".values-dropdown").forEach(L=>{L.setAttribute("style","display:none;")}),document.querySelectorAll(".select-color").forEach(L=>{L.classList.remove("fake-focus")}),I.clientY+h<E||f-E-h-I.clientY>0?l(5,c=!1):l(5,c=!0),l(6,m=!m)}function b(){l(6,m=!1)}function g(I){l(0,n=a.indexOf(I)),t(i,n.toString()),document?.querySelector("#error")?.setAttribute("style","display:none;"),l(6,m=!1)}function _(){l(4,f=De.innerHeight)}function A(){h=this.clientHeight,l(8,h)}const w=I=>R(I);function u(){n=this.value,l(0,n)}const d=I=>{g(I)};function C(){E=this.clientHeight,l(7,E)}return s.$$set=I=>{"id"in I&&l(1,i=I.id),"value"in I&&l(0,n=I.value),"colors"in I&&l(2,a=I.colors),"colorsCount"in I&&l(3,o=I.colorsCount)},[n,i,a,o,f,c,m,E,h,r,R,b,g,_,A,w,u,d,C]}class el extends le{constructor(e){super(),ne(this,e,xt,Xt,te,{id:1,value:0,colors:2,colorsCount:3})}}function et(s,e,l){const t=s.slice();return t[7]=e[l],t[9]=l,t}function tt(s){let e,l;return e=new el({props:{colors:s[2],colorsCount:s[3],id:"guess["+s[9]+"]",value:parseInt(s[7])}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p(t,i){const n={};i&4&&(n.colors=t[2]),i&8&&(n.colorsCount=t[3]),i&16&&(n.value=parseInt(t[7])),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function tl(s){let e;return{c(){e=X("Make a guess")},l(l){e=$(l,"Make a guess")},m(l,t){J(l,e,t)},d(l){l&&v(e)}}}function ll(s){let e,l,t,i,n,a,o,r,f,c,m,E,h=x(s[4]),R=[];for(let g=0;g<h.length;g+=1)R[g]=tt(et(s,h,g));const b=g=>p(R[g],1,1,()=>{R[g]=null});return a=new dt({props:{small:!0,filled:!0,type:"submit",$$slots:{default:[tl]},$$scope:{ctx:s}}}),{c(){e=F("form"),l=F("div"),t=F("div");for(let g=0;g<R.length;g+=1)R[g].c();i=j(),n=F("div"),P(a.$$.fragment),o=j(),r=F("input"),this.h()},l(g){e=S(g,"FORM",{action:!0,method:!0,enctype:!0});var _=y(e);l=S(_,"DIV",{class:!0,style:!0});var A=y(l);t=S(A,"DIV",{style:!0});var w=y(t);for(let d=0;d<R.length;d+=1)R[d].l(w);w.forEach(v),i=z(A),n=S(A,"DIV",{style:!0});var u=y(n);G(a.$$.fragment,u),u.forEach(v),o=z(A),r=S(A,"INPUT",{type:!0,name:!0}),A.forEach(v),_.forEach(v),this.h()},h(){N(t,"display","flex"),N(t,"justify-content","space-around"),N(t,"gap","0.5em"),N(n,"display","flex"),D(r,"type","hidden"),D(r,"name","sessionId"),r.value=s[1],D(l,"class","formBoard"),N(l,"display","flex"),N(l,"align-items","center"),N(l,"justify-content","space-between"),N(l,"flex-wrap","wrap"),N(l,"gap","0.5em"),D(e,"action","?/submitGuess"),D(e,"method","post"),D(e,"enctype","multipart/form-data")},m(g,_){J(g,e,_),B(e,l),B(l,t);for(let A=0;A<R.length;A+=1)R[A]&&R[A].m(t,null);B(l,i),B(l,n),M(a,n,null),B(l,o),B(l,r),c=!0,m||(E=Ce(f=mt.call(null,e,s[6])),m=!0)},p(g,[_]){if(_&28){h=x(g[4]);let w;for(w=0;w<h.length;w+=1){const u=et(g,h,w);R[w]?(R[w].p(u,_),k(R[w],1)):(R[w]=tt(u),R[w].c(),k(R[w],1),R[w].m(t,null))}for(K(),w=h.length;w<R.length;w+=1)b(w);Z()}const A={};_&1024&&(A.$$scope={dirty:_,ctx:g}),a.$set(A),(!c||_&2)&&(r.value=g[1]),f&&bt(f.update)&&_&17&&f.update.call(null,g[6])},i(g){if(!c){for(let _=0;_<h.length;_+=1)k(R[_]);k(a.$$.fragment,g),c=!0}},o(g){R=R.filter(Boolean);for(let _=0;_<R.length;_+=1)p(R[_]);p(a.$$.fragment,g),c=!1},d(g){g&&v(e),me(R,g),H(a),m=!1,E()}}}function pe(s){document.getElementById("loadingRow").style.display=s?"block":"none"}function nl(s,e,l){let{sessionId:t}=e,{colors:i}=e,{colorsCount:n}=e,{columns:a}=e,{gameObject:o}=e,r=new Array(a);for(let c=0;c<a;c++)r[c]=window.sessionStorage.getItem(`guess[${c}]`)??(c+1).toString();const f=({cancel:c})=>(pe(!0),o?(o.setBoardRowAvailable(r.map(m=>parseInt(m))),o.answerResolutionBoardAll(),o.eliminateAnswersAll(),pe(!1),l(0,o),console.log(o),c(),()=>{}):async({update:m})=>{await m(),pe(!1)});return s.$$set=c=>{"sessionId"in c&&l(1,t=c.sessionId),"colors"in c&&l(2,i=c.colors),"colorsCount"in c&&l(3,n=c.colorsCount),"columns"in c&&l(5,a=c.columns),"gameObject"in c&&l(0,o=c.gameObject)},[o,t,i,n,r,a,f]}class sl extends le{constructor(e){super(),ne(this,e,nl,ll,te,{sessionId:1,colors:2,colorsCount:3,columns:5,gameObject:0})}}function lt(s,e,l){const t=s.slice();return t[17]=e[l],t[19]=l,t}function il(s){let e;return{c(){e=X("MasterSuperMind")},l(l){e=$(l,"MasterSuperMind")},m(l,t){J(l,e,t)},d(l){l&&v(e)}}}function nt(s){let e,l;return e=new Nt({props:{guesses:s[17],resolution:s[2][s[19]],remainingAnswersCount:s[3][s[19]],maxAnswers:s[4],showRemainingAnswersCount:s[0].showRemainingAnswersCount,showJudge:s[0].showJudge}}),{c(){P(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),l=!0},p(t,i){const n={};i&2&&(n.guesses=t[17]),i&4&&(n.resolution=t[2][t[19]]),i&8&&(n.remainingAnswersCount=t[3][t[19]]),i&16&&(n.maxAnswers=t[4]),i&1&&(n.showRemainingAnswersCount=t[0].showRemainingAnswersCount),i&1&&(n.showJudge=t[0].showJudge),e.$set(n)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function st(s){let e,l,t,i;return l=new sl({props:{sessionId:s[6],colors:s[7],colorsCount:s[8],columns:s[10],gameObject:s[13]}}),{c(){e=F("div"),P(l.$$.fragment)},l(n){e=S(n,"DIV",{});var a=y(e);G(l.$$.fragment,a),a.forEach(v)},m(n,a){J(n,e,a),M(l,e,null),i=!0},p(n,a){const o={};a&64&&(o.sessionId=n[6]),a&128&&(o.colors=n[7]),a&256&&(o.colorsCount=n[8]),a&1024&&(o.columns=n[10]),a&8192&&(o.gameObject=n[13]),l.$set(o)},i(n){i||(k(l.$$.fragment,n),n&&fe(()=>{i&&(t||(t=se(e,ie,{},!0)),t.run(1))}),i=!0)},o(n){p(l.$$.fragment,n),n&&(t||(t=se(e,ie,{},!1)),t.run(0)),i=!1},d(n){n&&v(e),H(l),n&&t&&t.end()}}}function it(s){let e,l,t,i;return l=new ht({props:{small:!0,class:"errorChip",$$slots:{default:[al]},$$scope:{ctx:s}}}),{c(){e=F("div"),P(l.$$.fragment),this.h()},l(n){e=S(n,"DIV",{id:!0});var a=y(e);G(l.$$.fragment,a),a.forEach(v),this.h()},h(){D(e,"id","error")},m(n,a){J(n,e,a),M(l,e,null),i=!0},p(n,a){const o={};a&1052672&&(o.$$scope={dirty:a,ctx:n}),l.$set(o)},i(n){i||(k(l.$$.fragment,n),n&&fe(()=>{i&&(t||(t=se(e,ie,{},!0)),t.run(1))}),i=!0)},o(n){p(l.$$.fragment,n),n&&(t||(t=se(e,ie,{},!1)),t.run(0)),i=!1},d(n){n&&v(e),H(l),n&&t&&t.end()}}}function al(s){let e;return{c(){e=X(s[12])},l(l){e=$(l,s[12])},m(l,t){J(l,e,t)},p(l,t){t&4096&&de(e,l[12])},d(l){l&&v(e)}}}function at(s){let e,l,t,i;return l=new ht({props:{small:!0,class:"successChip",$$slots:{default:[ol]},$$scope:{ctx:s}}}),{c(){e=F("div"),P(l.$$.fragment)},l(n){e=S(n,"DIV",{});var a=y(e);G(l.$$.fragment,a),a.forEach(v)},m(n,a){J(n,e,a),M(l,e,null),i=!0},i(n){i||(k(l.$$.fragment,n),n&&fe(()=>{i&&(t||(t=se(e,ie,{},!0)),t.run(1))}),i=!0)},o(n){p(l.$$.fragment,n),n&&(t||(t=se(e,ie,{},!1)),t.run(0)),i=!1},d(n){n&&v(e),H(l),n&&t&&t.end()}}}function ol(s){let e;return{c(){e=X("Well done!")},l(l){e=$(l,"Well done!")},m(l,t){J(l,e,t)},d(l){l&&v(e)}}}function rl(s){let e,l,t,i,n,a,o,r,f,c,m,E,h,R,b,g,_,A,w;l=new Bt({props:{style:"color:#FFF;filter: drop-shadow(-3px 5px 10px #000000); margin-bottom:0.5em;",$$slots:{default:[il]},$$scope:{ctx:s}}}),n=new Qt({props:{answer:s[5],columns:s[10]}}),o=new Le({props:{style:"margin-bottom: 1em;"}});let u=x(s[1]),d=[];for(let V=0;V<u.length;V+=1)d[V]=nt(lt(s,u,V));const C=V=>p(d[V],1,1,()=>{d[V]=null});h=new Lt({}),b=new Le({props:{style:"margin-bottom: 1em;"}});let I=s[11]!=="won"&&st(s),L=s[12]&&it(s),T=s[11]==="won"&&at(s);return{c(){e=F("center"),P(l.$$.fragment),t=j(),i=F("div"),P(n.$$.fragment),a=j(),P(o.$$.fragment),r=j(),f=F("div");for(let V=0;V<d.length;V+=1)d[V].c();c=j(),m=F("div"),E=F("div"),P(h.$$.fragment),R=j(),P(b.$$.fragment),g=j(),I&&I.c(),_=j(),L&&L.c(),A=j(),T&&T.c(),this.h()},l(V){e=S(V,"CENTER",{});var U=y(e);G(l.$$.fragment,U),U.forEach(v),t=z(V),i=S(V,"DIV",{class:!0});var q=y(i);G(n.$$.fragment,q),a=z(q),G(o.$$.fragment,q),r=z(q),f=S(q,"DIV",{class:!0});var ce=y(f);for(let Ie=0;Ie<d.length;Ie+=1)d[Ie].l(ce);c=z(ce),m=S(ce,"DIV",{id:!0,style:!0});var W=y(m);E=S(W,"DIV",{style:!0});var he=y(E);G(h.$$.fragment,he),he.forEach(v),W.forEach(v),ce.forEach(v),R=z(q),G(b.$$.fragment,q),g=z(q),I&&I.l(q),_=z(q),L&&L.l(q),A=z(q),T&&T.l(q),q.forEach(v),this.h()},h(){N(E,"zoom","3"),N(E,"opacity","0.8"),D(m,"id","loadingRow"),N(m,"display","none"),N(m,"margin-top","1em"),D(f,"class","gameBoardRows svelte-14k9nlz"),D(i,"class","gameBoardContent svelte-14k9nlz")},m(V,U){J(V,e,U),M(l,e,null),J(V,t,U),J(V,i,U),M(n,i,null),B(i,a),M(o,i,null),B(i,r),B(i,f);for(let q=0;q<d.length;q+=1)d[q]&&d[q].m(f,null);B(f,c),B(f,m),B(m,E),M(h,E,null),B(i,R),M(b,i,null),B(i,g),I&&I.m(i,null),B(i,_),L&&L.m(i,null),B(i,A),T&&T.m(i,null),w=!0},p(V,U){const q={};U&1048576&&(q.$$scope={dirty:U,ctx:V}),l.$set(q);const ce={};if(U&32&&(ce.answer=V[5]),U&1024&&(ce.columns=V[10]),n.$set(ce),U&31){u=x(V[1]);let W;for(W=0;W<u.length;W+=1){const he=lt(V,u,W);d[W]?(d[W].p(he,U),k(d[W],1)):(d[W]=nt(he),d[W].c(),k(d[W],1),d[W].m(f,c))}for(K(),W=u.length;W<d.length;W+=1)C(W);Z()}V[11]!=="won"?I?(I.p(V,U),U&2048&&k(I,1)):(I=st(V),I.c(),k(I,1),I.m(i,_)):I&&(K(),p(I,1,1,()=>{I=null}),Z()),V[12]?L?(L.p(V,U),U&4096&&k(L,1)):(L=it(V),L.c(),k(L,1),L.m(i,A)):L&&(K(),p(L,1,1,()=>{L=null}),Z()),V[11]==="won"?T?U&2048&&k(T,1):(T=at(V),T.c(),k(T,1),T.m(i,null)):T&&(K(),p(T,1,1,()=>{T=null}),Z())},i(V){if(!w){k(l.$$.fragment,V),k(n.$$.fragment,V),k(o.$$.fragment,V);for(let U=0;U<u.length;U+=1)k(d[U]);k(h.$$.fragment,V),k(b.$$.fragment,V),k(I),k(L),k(T),w=!0}},o(V){p(l.$$.fragment,V),p(n.$$.fragment,V),p(o.$$.fragment,V),d=d.filter(Boolean);for(let U=0;U<d.length;U+=1)p(d[U]);p(h.$$.fragment,V),p(b.$$.fragment,V),p(I),p(L),p(T),w=!1},d(V){V&&(v(e),v(t),v(i)),H(l),H(n),H(o),me(d,V),H(h),H(b),I&&I.d(),L&&L.d(),T&&T.d()}}}function ul(s){let e;return{c(){e=X("Options")},l(l){e=$(l,"Options")},m(l,t){J(l,e,t)},d(l){l&&v(e)}}}function ot(s){let e,l,t,i,n;return l=new dt({props:{small:!0,outline:!0,type:"submit",$$slots:{default:[fl]},$$scope:{ctx:s}}}),{c(){e=F("form"),P(l.$$.fragment),this.h()},l(a){e=S(a,"FORM",{action:!0,method:!0,enctype:!0});var o=y(e);G(l.$$.fragment,o),o.forEach(v),this.h()},h(){D(e,"action","?/helpMe"),D(e,"method","post"),D(e,"enctype","multipart/form-data")},m(a,o){J(a,e,o),M(l,e,null),t=!0,i||(n=Ce(mt.call(null,e,s[14])),i=!0)},p(a,o){const r={};o&1048576&&(r.$$scope={dirty:o,ctx:a}),l.$set(r)},i(a){t||(k(l.$$.fragment,a),t=!0)},o(a){p(l.$$.fragment,a),t=!1},d(a){a&&v(e),H(l),i=!1,n()}}}function fl(s){let e;return{c(){e=X("Help me out 🪄")},l(l){e=$(l,"Help me out 🪄")},m(l,t){J(l,e,t)},d(l){l&&v(e)}}}function cl(s){let e,l="Show remaining answers count";return{c(){e=F("span"),e.textContent=l,this.h()},l(t){e=S(t,"SPAN",{class:!0,"data-svelte-h":!0}),ct(e)!=="svelte-1qvpn75"&&(e.textContent=l),this.h()},h(){D(e,"class","ml svelte-14k9nlz")},m(t,i){J(t,e,i)},p:ee,d(t){t&&v(e)}}}function ml(s){let e,l="Show judge meter";return{c(){e=F("span"),e.textContent=l,this.h()},l(t){e=S(t,"SPAN",{class:!0,"data-svelte-h":!0}),ct(e)!=="svelte-15jzmf"&&(e.textContent=l),this.h()},h(){D(e,"class","ml svelte-14k9nlz")},m(t,i){J(t,e,i)},p:ee,d(t){t&&v(e)}}}function dl(s){let e,l,t=s[9]?"":"Unique",i,n,a,o,r,f;return{c(){e=X(s[8]),l=j(),i=X(t),n=X(" Colors x "),a=X(s[10]),o=X(" Columns = "),r=X(s[4]),f=X(" Combinations")},l(c){e=$(c,s[8]),l=z(c),i=$(c,t),n=$(c," Colors x "),a=$(c,s[10]),o=$(c," Columns = "),r=$(c,s[4]),f=$(c," Combinations")},m(c,m){J(c,e,m),J(c,l,m),J(c,i,m),J(c,n,m),J(c,a,m),J(c,o,m),J(c,r,m),J(c,f,m)},p(c,m){m&256&&de(e,c[8]),m&512&&t!==(t=c[9]?"":"Unique")&&de(i,t),m&1024&&de(a,c[10]),m&16&&de(r,c[4])},d(c){c&&(v(e),v(l),v(i),v(n),v(a),v(o),v(r),v(f))}}}function hl(s){let e,l,t,i,n,a,o,r,f,c,m,E,h,R;e=new At({props:{$$slots:{default:[ul]},$$scope:{ctx:s}}});let b=s[11]!=="won"&&ot(s);function g(u){s[15](u)}let _={$$slots:{default:[cl]},$$scope:{ctx:s}};s[0].showRemainingAnswersCount!==void 0&&(_.value=s[0].showRemainingAnswersCount),n=new ze({props:_}),Fe.push(()=>Je(n,"value",g));function A(u){s[16](u)}let w={$$slots:{default:[ml]},$$scope:{ctx:s}};return s[0].showJudge!==void 0&&(w.value=s[0].showJudge),r=new ze({props:w}),Fe.push(()=>Je(r,"value",A)),m=new Ct({props:{style:"margin-bottom:-0.8em;",$$slots:{default:[dl]},$$scope:{ctx:s}}}),h=new Ee({props:{guesses:Array.from({length:s[8]},ut),columns:"8"}}),{c(){P(e.$$.fragment),l=j(),t=F("div"),b&&b.c(),i=j(),P(n.$$.fragment),o=j(),P(r.$$.fragment),c=j(),P(m.$$.fragment),E=j(),P(h.$$.fragment),this.h()},l(u){G(e.$$.fragment,u),l=z(u),t=S(u,"DIV",{class:!0});var d=y(t);b&&b.l(d),i=z(d),G(n.$$.fragment,d),o=z(d),G(r.$$.fragment,d),c=z(d),G(m.$$.fragment,d),E=z(d),G(h.$$.fragment,d),d.forEach(v),this.h()},h(){D(t,"class","options svelte-14k9nlz")},m(u,d){M(e,u,d),J(u,l,d),J(u,t,d),b&&b.m(t,null),B(t,i),M(n,t,null),B(t,o),M(r,t,null),B(t,c),M(m,t,null),B(t,E),M(h,t,null),R=!0},p(u,d){const C={};d&1048576&&(C.$$scope={dirty:d,ctx:u}),e.$set(C),u[11]!=="won"?b?(b.p(u,d),d&2048&&k(b,1)):(b=ot(u),b.c(),k(b,1),b.m(t,i)):b&&(K(),p(b,1,1,()=>{b=null}),Z());const I={};d&1048576&&(I.$$scope={dirty:d,ctx:u}),!a&&d&1&&(a=!0,I.value=u[0].showRemainingAnswersCount,Se(()=>a=!1)),n.$set(I);const L={};d&1048576&&(L.$$scope={dirty:d,ctx:u}),!f&&d&1&&(f=!0,L.value=u[0].showJudge,Se(()=>f=!1)),r.$set(L);const T={};d&1050384&&(T.$$scope={dirty:d,ctx:u}),m.$set(T);const V={};d&256&&(V.guesses=Array.from({length:u[8]},ut)),h.$set(V)},i(u){R||(k(e.$$.fragment,u),k(b),k(n.$$.fragment,u),k(r.$$.fragment,u),k(m.$$.fragment,u),k(h.$$.fragment,u),R=!0)},o(u){p(e.$$.fragment,u),p(b),p(n.$$.fragment,u),p(r.$$.fragment,u),p(m.$$.fragment,u),p(h.$$.fragment,u),R=!1},d(u){u&&(v(l),v(t)),H(e,u),b&&b.d(),H(n),H(r),H(m),H(h)}}}function gl(s){let e,l,t,i,n;return l=new ye({props:{class:"gameBoard",$$slots:{default:[rl]},$$scope:{ctx:s}}}),i=new ye({props:{class:"gameBoardOptions",style:"diplay: flex;align-items: center;background-color: #d4cccc; margin-top: 1em;",$$slots:{default:[hl]},$$scope:{ctx:s}}}),{c(){e=F("div"),P(l.$$.fragment),t=j(),P(i.$$.fragment),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=y(e);G(l.$$.fragment,o),t=z(o),G(i.$$.fragment,o),o.forEach(v),this.h()},h(){D(e,"class","gameBoardHolder svelte-14k9nlz")},m(a,o){J(a,e,o),M(l,e,null),B(e,t),M(i,e,null),n=!0},p(a,[o]){const r={};o&1064447&&(r.$$scope={dirty:o,ctx:a}),l.$set(r);const f={};o&1052433&&(f.$$scope={dirty:o,ctx:a}),i.$set(f)},i(a){n||(k(l.$$.fragment,a),k(i.$$.fragment,a),n=!0)},o(a){p(l.$$.fragment,a),p(i.$$.fragment,a),n=!1},d(a){a&&v(e),H(l),H(i)}}}function rt(s){document.getElementById("loadingRow").style.display=s?"block":"none"}const ut=(s,e)=>e+1;function _l(s,e,l){let{boardGuesses:t}=e,{boardResolutions:i}=e,{remainingAnswersCount:n}=e,{maxAnswers:a}=e,{answer:o}=e,{sessionId:r}=e,{colors:f}=e,{colorsCount:c}=e,{allowDuplicates:m}=e,{columns:E}=e,{status:h}=e,{error_message:R}=e,{game:b}=e,{UISettings:g={showRemainingAnswersCount:!0,showJudge:!0}}=e;const _=({})=>(rt(!0),async({update:u})=>{await u(),rt(!1)});function A(u){s.$$.not_equal(g.showRemainingAnswersCount,u)&&(g.showRemainingAnswersCount=u,l(0,g))}function w(u){s.$$.not_equal(g.showJudge,u)&&(g.showJudge=u,l(0,g))}return s.$$set=u=>{"boardGuesses"in u&&l(1,t=u.boardGuesses),"boardResolutions"in u&&l(2,i=u.boardResolutions),"remainingAnswersCount"in u&&l(3,n=u.remainingAnswersCount),"maxAnswers"in u&&l(4,a=u.maxAnswers),"answer"in u&&l(5,o=u.answer),"sessionId"in u&&l(6,r=u.sessionId),"colors"in u&&l(7,f=u.colors),"colorsCount"in u&&l(8,c=u.colorsCount),"allowDuplicates"in u&&l(9,m=u.allowDuplicates),"columns"in u&&l(10,E=u.columns),"status"in u&&l(11,h=u.status),"error_message"in u&&l(12,R=u.error_message),"game"in u&&l(13,b=u.game),"UISettings"in u&&l(0,g=u.UISettings)},[g,t,i,n,a,o,r,f,c,m,E,h,R,b,_,A,w]}class Al extends le{constructor(e){super(),ne(this,e,_l,gl,te,{boardGuesses:1,boardResolutions:2,remainingAnswersCount:3,maxAnswers:4,answer:5,sessionId:6,colors:7,colorsCount:8,allowDuplicates:9,columns:10,status:11,error_message:12,game:13,UISettings:0})}}export{Le as D,Al as G};
