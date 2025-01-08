import{M as ne,H as le}from"../chunks/msmGame.CNW5322_.js";import{s as ae,v as K,t as L,a as c,d as j,g,i as u,j as oe,w as Q,f,e as T,c as E}from"../chunks/scheduler.x4Pbowds.js";import{S as me,i as re,e as U,c as C,a as k,m as A,t as v,b as B,d as G}from"../chunks/index.v-92yLxh.js";import{G as ue}from"../chunks/gameBoard.EOtkGGjv.js";import{C as fe}from"../chunks/h2.mxyf_326.js";import{L as ee}from"../chunks/forms.TXfJzFMW.js";import{S as se}from"../chunks/slider.kXEo7O8a.js";import{B as J}from"../chunks/button.y0uZejvG.js";const $e=async()=>{const t=new ne;return t.noConsoleOutput=!0,t.rows=10,t.columns=Math.floor(Math.random()*3)+4,t.setColors(Math.floor(Math.random()*(t.columns+1))+t.columns-1),t.allowDuplicates=Math.random()<.4,await t.setAnswer(),await t.setAllRemainingAnswers(),{game:t,colors:["#CCC","#FFF","#000","#a93226","#2e86c1","#28b463","#f4d03f","#a569bd","#7a5142","#ff4600","#9d9d9d"]}},De=Object.freeze(Object.defineProperty({__proto__:null,load:$e},Symbol.toStringTag,{value:"Module"}));function ie(t){let l;return{c(){l=L("Options")},l(s){l=j(s,"Options")},m(s,a){u(s,l,a)},d(s){s&&f(l)}}}function pe(t){let l;return{c(){l=L("Colors")},l(s){l=j(s,"Colors")},m(s,a){u(s,l,a)},d(s){s&&f(l)}}}function _e(t){let l;return{c(){l=L("Columns")},l(s){l=j(s,"Columns")},m(s,a){u(s,l,a)},d(s){s&&f(l)}}}function ce(t){let l;return{c(){l=L("New Game")},l(s){l=j(s,"New Game")},m(s,a){u(s,l,a)},d(s){s&&f(l)}}}function ge(t){let l;return{c(){l=L("Reset")},l(s){l=j(s,"Reset")},m(s,a){u(s,l,a)},d(s){s&&f(l)}}}function be(t){let l;return{c(){l=L("Console Log Board")},l(s){l=j(s,"Console Log Board")},m(s,a){u(s,l,a)},d(s){s&&f(l)}}}function we(t){let l,s,a,m,_,d,w,p,b,D,$,O,n,r,i,q,F,H,N,R,P,M,z,S,I;l=new le({props:{$$slots:{default:[ie]},$$scope:{ctx:t}}}),a=new ee({props:{small:!0,$$slots:{default:[pe]},$$scope:{ctx:t}}}),_=new se({props:{value:8,min:4,max:12,step:1,tooltips:"active",ticks:{mode:"values",values:[4,5,6,7,8,9,10,11,12]}}}),$=new ee({props:{$$slots:{default:[_e]},$$scope:{ctx:t}}});function te(e){t[4](e)}let V={min:4,max:7,step:1,tooltips:"active",ticks:{mode:"values",values:[4,5,6,7]}};return t[1].columns!==void 0&&(V.value=t[1].columns),n=new se({props:V}),K.push(()=>U(n,"value",te)),R=new J({props:{filled:!0,small:!0,$$slots:{default:[ce]},$$scope:{ctx:t}}}),R.$on("click",t[5]),M=new J({props:{outline:!0,small:!0,$$slots:{default:[ge]},$$scope:{ctx:t}}}),M.$on("click",t[6]),S=new J({props:{outline:!0,small:!0,$$slots:{default:[be]},$$scope:{ctx:t}}}),S.$on("click",t[7]),{c(){C(l.$$.fragment),s=c(),C(a.$$.fragment),m=c(),C(_.$$.fragment),d=c(),w=T("br"),p=c(),b=T("br"),D=c(),C($.$$.fragment),O=c(),C(n.$$.fragment),i=c(),q=T("br"),F=c(),H=T("br"),N=c(),C(R.$$.fragment),P=c(),C(M.$$.fragment),z=c(),C(S.$$.fragment)},l(e){k(l.$$.fragment,e),s=g(e),k(a.$$.fragment,e),m=g(e),k(_.$$.fragment,e),d=g(e),w=E(e,"BR",{}),p=g(e),b=E(e,"BR",{}),D=g(e),k($.$$.fragment,e),O=g(e),k(n.$$.fragment,e),i=g(e),q=E(e,"BR",{}),F=g(e),H=E(e,"BR",{}),N=g(e),k(R.$$.fragment,e),P=g(e),k(M.$$.fragment,e),z=g(e),k(S.$$.fragment,e)},m(e,o){A(l,e,o),u(e,s,o),A(a,e,o),u(e,m,o),A(_,e,o),u(e,d,o),u(e,w,o),u(e,p,o),u(e,b,o),u(e,D,o),A($,e,o),u(e,O,o),A(n,e,o),u(e,i,o),u(e,q,o),u(e,F,o),u(e,H,o),u(e,N,o),A(R,e,o),u(e,P,o),A(M,e,o),u(e,z,o),A(S,e,o),I=!0},p(e,o){const W={};o&256&&(W.$$scope={dirty:o,ctx:e}),l.$set(W);const X={};o&256&&(X.$$scope={dirty:o,ctx:e}),a.$set(X);const Y={};o&256&&(Y.$$scope={dirty:o,ctx:e}),$.$set(Y);const Z={};!r&&o&2&&(r=!0,Z.value=e[1].columns,Q(()=>r=!1)),n.$set(Z);const h={};o&256&&(h.$$scope={dirty:o,ctx:e}),R.$set(h);const y={};o&256&&(y.$$scope={dirty:o,ctx:e}),M.$set(y);const x={};o&256&&(x.$$scope={dirty:o,ctx:e}),S.$set(x)},i(e){I||(v(l.$$.fragment,e),v(a.$$.fragment,e),v(_.$$.fragment,e),v($.$$.fragment,e),v(n.$$.fragment,e),v(R.$$.fragment,e),v(M.$$.fragment,e),v(S.$$.fragment,e),I=!0)},o(e){B(l.$$.fragment,e),B(a.$$.fragment,e),B(_.$$.fragment,e),B($.$$.fragment,e),B(n.$$.fragment,e),B(R.$$.fragment,e),B(M.$$.fragment,e),B(S.$$.fragment,e),I=!1},d(e){e&&(f(s),f(m),f(d),f(w),f(p),f(b),f(D),f(O),f(i),f(q),f(F),f(H),f(N),f(P),f(z)),G(l,e),G(a,e),G(_,e),G($,e),G(n,e),G(R,e),G(M,e),G(S,e)}}}function de(t){let l=t[1].answer+"",s,a,m,_,d,w,p,b;function D(n){t[2](n)}function $(n){t[3](n)}let O={boardGuesses:t[1].board,boardResolutions:t[1].resolution,remainingAnswersCount:t[1].remainingAnswersCount,sessionId:"",colors:t[0].colors,colorsCount:t[0].colors.length,allowDuplicates:t[1].allowDuplicates,status:t[1].status,answer:t[1].answer,error_message:"",maxAnswers:t[1].maxAnswers};return t[1].columns!==void 0&&(O.columns=t[1].columns),t[1]!==void 0&&(O.game=t[1]),m=new ue({props:O}),K.push(()=>U(m,"columns",D)),K.push(()=>U(m,"game",$)),p=new fe({props:{style:"max-width: 280px; display: inline-block",$$slots:{default:[we]},$$scope:{ctx:t}}}),{c(){s=L(l),a=c(),C(m.$$.fragment),w=c(),C(p.$$.fragment)},l(n){s=j(n,l),a=g(n),k(m.$$.fragment,n),w=g(n),k(p.$$.fragment,n)},m(n,r){u(n,s,r),u(n,a,r),A(m,n,r),u(n,w,r),A(p,n,r),b=!0},p(n,[r]){(!b||r&2)&&l!==(l=n[1].answer+"")&&oe(s,l);const i={};r&2&&(i.boardGuesses=n[1].board),r&2&&(i.boardResolutions=n[1].resolution),r&2&&(i.remainingAnswersCount=n[1].remainingAnswersCount),r&1&&(i.colors=n[0].colors),r&1&&(i.colorsCount=n[0].colors.length),r&2&&(i.allowDuplicates=n[1].allowDuplicates),r&2&&(i.status=n[1].status),r&2&&(i.answer=n[1].answer),r&2&&(i.maxAnswers=n[1].maxAnswers),!_&&r&2&&(_=!0,i.columns=n[1].columns,Q(()=>_=!1)),!d&&r&2&&(d=!0,i.game=n[1],Q(()=>d=!1)),m.$set(i);const q={};r&259&&(q.$$scope={dirty:r,ctx:n}),p.$set(q)},i(n){b||(v(m.$$.fragment,n),v(p.$$.fragment,n),b=!0)},o(n){B(m.$$.fragment,n),B(p.$$.fragment,n),b=!1},d(n){n&&(f(s),f(a),f(w)),G(m,n),G(p,n)}}}function Ce(t,l,s){let a,{data:m}=l;function _($){t.$$.not_equal(a.columns,$)&&(a.columns=$,s(1,a),s(0,m))}function d($){a=$,s(1,a),s(0,m)}function w($){t.$$.not_equal(a.columns,$)&&(a.columns=$,s(1,a),s(0,m))}const p=async()=>{await m.game.runGameSequence(),s(1,a=m.game)},b=()=>{m.game.resetGame(),s(1,a=m.game)},D=()=>{s(1,a=m.game),console.log(a.answer)};return t.$$set=$=>{"data"in $&&s(0,m=$.data)},t.$$.update=()=>{t.$$.dirty&1&&s(1,a=m.game)},[m,a,_,d,w,p,b,D]}class Oe extends me{constructor(l){super(),re(this,l,Ce,de,ae,{data:0})}}export{Oe as component,De as universal};