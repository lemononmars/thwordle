var lt=Object.defineProperty,nt=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var ve=(r,e,l)=>e in r?lt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[e]=l,ke=(r,e)=>{for(var l in e||(e={}))ot.call(e,l)&&ve(r,l,e[l]);if(Ne)for(var l of Ne(e))st.call(e,l)&&ve(r,l,e[l]);return r},Ue=(r,e)=>nt(r,rt(e));var re=(r,e,l)=>(ve(r,typeof e!="symbol"?e+"":e,l),l);import{S as me,i as he,s as ge,e as d,a as x,b as Ie,c,d as E,f as b,g as Me,h as a,n as V,t as G,j as pe,k as $,l as ue,m as fe,o as Z,p as Q,q as de,r as je,u as Ee,F as it,T as ct,v as ie,w as at,x as ut,y as be,z as Oe,A as Te,B as ft,C as we,D as dt,E as mt}from"./vendor.35443c13.js";const ht=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}};ht();function Ae(r){let e,l,t,n;return{c(){e=d("script"),t=x(),n=d("script"),n.textContent=`window.dataLayer = window.dataLayer || []\r
      function gtag() {\r
        dataLayer.push(arguments)\r
      }\r
      gtag("js", new Date())\r
      gtag("config", "G-D48ZMRTDBR")`,e.async=!0,Ie(e.src,l="https://www.googletagmanager.com/gtag/js?id="+r[4])||c(e,"src",l)},m(s,o){E(s,e,o),E(s,t,o),E(s,n,o)},p(s,o){o&16&&!Ie(e.src,l="https://www.googletagmanager.com/gtag/js?id="+s[4])&&c(e,"src",l)},d(s){s&&b(e),s&&b(t),s&&b(n)}}}function gt(r){let e,l,t,n,s,o,i,f,w,_,k,L,P;document.title=e=r[0];let M=r[4]&&Ae(r);return{c(){l=d("meta"),t=d("meta"),n=d("meta"),s=d("meta"),o=d("meta"),i=d("meta"),f=d("meta"),w=d("meta"),_=d("meta"),k=d("meta"),L=d("meta"),M&&M.c(),P=Me(),c(l,"name","title"),c(l,"content",r[0]),c(t,"name","description"),c(t,"content",r[1]),c(n,"name","viewport"),c(n,"content","width=device-width, initial-scale=1"),c(s,"property","og:url"),c(s,"content",r[2]),c(o,"property","og:type"),c(o,"content","website"),c(i,"property","og:title"),c(i,"content",r[0]),c(f,"property","og:description"),c(f,"content",r[1]),c(w,"property","og:image"),c(w,"content",r[3]),c(_,"name","twitter:title"),c(_,"content",r[0]),c(k,"name","twitter:card"),c(k,"content","summary_large_image"),c(L,"name","twitter:image"),c(L,"content",r[3])},m(I,j){a(document.head,l),a(document.head,t),a(document.head,n),a(document.head,s),a(document.head,o),a(document.head,i),a(document.head,f),a(document.head,w),a(document.head,_),a(document.head,k),a(document.head,L),M&&M.m(document.head,null),a(document.head,P)},p(I,[j]){j&1&&e!==(e=I[0])&&(document.title=e),j&1&&c(l,"content",I[0]),j&2&&c(t,"content",I[1]),j&4&&c(s,"content",I[2]),j&1&&c(i,"content",I[0]),j&2&&c(f,"content",I[1]),j&8&&c(w,"content",I[3]),j&1&&c(_,"content",I[0]),j&8&&c(L,"content",I[3]),I[4]?M?M.p(I,j):(M=Ae(I),M.c(),M.m(P.parentNode,P)):M&&(M.d(1),M=null)},i:V,o:V,d(I){b(l),b(t),b(n),b(s),b(o),b(i),b(f),b(w),b(_),b(k),b(L),M&&M.d(I),b(P)}}}function pt(r,e,l){let{title:t}=e,{description:n}=e,{url:s}=e,{imageUrl:o}=e,{gtagId:i}=e;return r.$$set=f=>{"title"in f&&l(0,t=f.title),"description"in f&&l(1,n=f.description),"url"in f&&l(2,s=f.url),"imageUrl"in f&&l(3,o=f.imageUrl),"gtagId"in f&&l(4,i=f.gtagId)},[t,n,s,o,i]}class bt extends me{constructor(e){super();he(this,e,pt,gt,ge,{title:0,description:1,url:2,imageUrl:3,gtagId:4})}}function Ce(r,e,l){const t=r.slice();return t[1]=e[l].name,t[2]=e[l].url,t}function Le(r){let e,l=r[1]+"",t,n;return{c(){e=d("a"),t=G(l),c(e,"href",n=r[2]),c(e,"class","p-1 bg-white rounded"),c(e,"target","_blank"),c(e,"rel","noreferrer")},m(s,o){E(s,e,o),a(e,t)},p(s,o){o&1&&l!==(l=s[1]+"")&&pe(t,l),o&1&&n!==(n=s[2])&&c(e,"href",n)},d(s){s&&b(e)}}}function _t(r){let e,l=r[0],t=[];for(let n=0;n<l.length;n+=1)t[n]=Le(Ce(r,l,n));return{c(){e=d("div");for(let n=0;n<t.length;n+=1)t[n].c();c(e,"class","text-xs fixed sm:text-base bottom-4 right-4 text-right z-10")},m(n,s){E(n,e,s);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,[s]){if(s&1){l=n[0];let o;for(o=0;o<l.length;o+=1){const i=Ce(n,l,o);t[o]?t[o].p(i,s):(t[o]=Le(i),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},i:V,o:V,d(n){n&&b(e),$(t,n)}}}function vt(r,e,l){let{items:t=[]}=e;return r.$$set=n=>{"items"in n&&l(0,t=n.items)},[t]}class wt extends me{constructor(e){super();he(this,e,vt,_t,ge,{items:0})}}function Pe(r){let e,l,t,n,s;return l=new it({props:{class:"h-10 w-10",url:r[0]}}),n=new ct({props:{class:"h-10 w-10",text:r[1],url:r[0]}}),{c(){e=d("div"),ue(l.$$.fragment),t=x(),ue(n.$$.fragment),c(e,"class","flex gap-2 pr-4 sm:pr-0 justify-end sm:justify-center w-full fixed top-4 sm:top-auto sm:bottom-4 center")},m(o,i){E(o,e,i),fe(l,e,null),a(e,t),fe(n,e,null),s=!0},p(o,i){const f={};i&1&&(f.url=o[0]),l.$set(f);const w={};i&2&&(w.text=o[1]),i&1&&(w.url=o[0]),n.$set(w)},i(o){s||(Z(l.$$.fragment,o),Z(n.$$.fragment,o),s=!0)},o(o){Q(l.$$.fragment,o),Q(n.$$.fragment,o),s=!1},d(o){o&&b(e),de(l),de(n)}}}function yt(r){let e,l,t=r[0]&&Pe(r);return{c(){t&&t.c(),e=Me()},m(n,s){t&&t.m(n,s),E(n,e,s),l=!0},p(n,[s]){n[0]?t?(t.p(n,s),s&1&&Z(t,1)):(t=Pe(n),t.c(),Z(t,1),t.m(e.parentNode,e)):t&&(je(),Q(t,1,1,()=>{t=null}),Ee())},i(n){l||(Z(t),l=!0)},o(n){Q(t),l=!1},d(n){t&&t.d(n),n&&b(e)}}}function xt(r,e,l){let{url:t}=e,{title:n}=e;return r.$$set=s=>{"url"in s&&l(0,t=s.url),"title"in s&&l(1,n=s.title)},[t,n]}class Nt extends me{constructor(e){super();he(this,e,xt,yt,ge,{url:0,title:1})}}var ce;(function(r){r[r.Correct=0]="Correct",r[r.OutOfPlace=1]="OutOfPlace",r[r.Wrong=2]="Wrong",r[r.NotUsed=3]="NotUsed"})(ce||(ce={}));const kt={[0]:"\u{1F7E9}",[1]:"\u{1F7E8}",[2]:"\u2B1C"};function _e(r,e){const l=r.split(""),t=e.split(""),n=l.map(s=>({correct:2,char:s}));return t.forEach((s,o)=>{l[o]===s&&(t[o]=null,l[o]=null,n[o]={correct:0,char:s})}),t.forEach((s,o)=>{const i=l[o];if(i&&t.includes(i)){const f=t.indexOf(i);let w;f!==-1&&(w=t[f],t[f]=null,l[o]=null),n[o]={correct:1,char:w}}}),n}function Ut(r,e=[]){const l=[];return r.forEach(t=>{const n={};t.split("").forEach((s,o)=>{n[s]=3}),e.forEach(({correct:s,char:o})=>{o.split("").forEach(i=>{s<n[i]&&(n[i]=s),n[i]===2&&(n[i]=3)})}),l.push(n)}),l}function It(r){return r.map(e=>e.map(({correct:l})=>kt[l]).join(""))}const O=class{constructor(e=null){re(this,"mt",new Array(O.N));re(this,"mti",O.N+1);e==null&&(e=new Date().getTime()),this.init_genrand(e)}init_genrand(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<O.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((e&4294901760)>>>16)*1812433253<<16)+(e&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}}_nextInt32(){var e,l=new Array(0,O.MATRIX_A);if(this.mti>=O.N){var t;for(this.mti==O.N+1&&this.init_genrand(5489),t=0;t<O.N-O.M;t++)e=this.mt[t]&O.UPPER_MASK|this.mt[t+1]&O.LOWER_MASK,this.mt[t]=this.mt[t+O.M]^e>>>1^l[e&1];for(;t<O.N-1;t++)e=this.mt[t]&O.UPPER_MASK|this.mt[t+1]&O.LOWER_MASK,this.mt[t]=this.mt[t+(O.M-O.N)]^e>>>1^l[e&1];e=this.mt[O.N-1]&O.UPPER_MASK|this.mt[0]&O.LOWER_MASK,this.mt[O.N-1]=this.mt[O.M-1]^e>>>1^l[e&1],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,e^=e>>>18,e>>>0}nextInt32(e=null){var l=this._nextInt32();return e==null?l:l%(e[1]-e[0])+e[0]}nextInt31(){return this._nextInt32()>>>1}nextNumber(){return this._nextInt32()*(1/4294967295)}nextNumber53(){var e=this._nextInt32()>>>5,l=this._nextInt32()>>>6;return(e*67108864+l)*(1/9007199254740992)}};let ae=O;re(ae,"N",624),re(ae,"M",397),re(ae,"MATRIX_A",2567483615),re(ae,"UPPER_MASK",2147483648),re(ae,"LOWER_MASK",2147483647);var N;(function(r){r[r.Correct=0]="Correct",r[r.OutOfPlace=1]="OutOfPlace",r[r.Wrong=2]="Wrong",r[r.NotUsed=3]="NotUsed"})(N||(N={}));function qe(r,e,l){const t=r.slice();return t[5]=e[l].correct,t[6]=e[l].char,t}function Re(r,e,l){const t=r.slice();return t[5]=e[l].correct,t[6]=e[l].char,t}function We(r,e,l){const t=r.slice();return t[5]=e[l].correct,t[6]=e[l].char,t}function De(r){var o;let e,l=((o=r[6])!=null?o:"")+"",t,n,s;return{c(){e=d("div"),t=G(l),n=x(),c(e,"class",s=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,f){E(i,e,f),a(e,t),a(e,n)},p:V,d(i){i&&b(e)}}}function Ke(r){var o;let e,l=((o=r[6])!=null?o:"")+"",t,n,s;return{c(){e=d("div"),t=G(l),n=x(),c(e,"class",s=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,f){E(i,e,f),a(e,t),a(e,n)},p:V,d(i){i&&b(e)}}}function Se(r){var o;let e,l=((o=r[6])!=null?o:"")+"",t,n,s;return{c(){e=d("div"),t=G(l),n=x(),c(e,"class",s=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,f){E(i,e,f),a(e,t),a(e,n)},p:V,d(i){i&&b(e)}}}function Mt(r){let e,l,t,n,s,o,i,f,w,_,k,L,P,M,I,j,W,J,ee,q,T,H,oe,F,se,z,te,X,B,A,g,R,y,D,K,C,v=r[1],u=[];for(let p=0;p<v.length;p+=1)u[p]=De(We(r,v,p));let U=r[2],m=[];for(let p=0;p<U.length;p+=1)m[p]=Ke(Re(r,U,p));let Y=r[3],S=[];for(let p=0;p<Y.length;p+=1)S[p]=Se(qe(r,Y,p));return{c(){e=d("div"),l=d("div"),t=d("div"),n=x(),s=d("span"),s.textContent="\u200B",o=x(),i=d("div"),f=d("div"),w=d("div"),_=d("div"),k=d("h3"),k.textContent="Mathdle",L=x(),P=d("div"),P.innerHTML=`<p class="text-sm text-gray-500">Find the equation<br/>
                (just like
                <a target="_blank" href="https://www.powerlanguage.co.uk/wordle" class="underline">Wordle</a> , but it&#39;s math.)</p>`,M=x(),I=d("hr"),j=x(),W=d("div"),W.innerHTML=`<p class="text-sm text-gray-500"></p><ul class="list-disc text-sm text-gray-500"><li>The solution is in the form <strong>a Y b = c Z d</strong>, where a,b,c,d are integers (possibly negative) and Y and Z are symbols (+,-,*,/) (possibly identical).</li> 
                  <li>For each guess, both sides of the equation must be equal</li></ul>`,J=x(),ee=d("hr"),q=x(),T=d("div"),H=d("h3"),H.textContent="Example",oe=x(),F=d("div");for(let p=0;p<u.length;p+=1)u[p].c();se=x(),z=d("p"),z.innerHTML="The digit <strong>2</strong> is in the equation, and in the correct position.",te=x(),X=d("div");for(let p=0;p<m.length;p+=1)m[p].c();B=x(),A=d("p"),A.innerHTML="The division symbol <strong>/</strong> is in the equation, but in another position.",g=x(),R=d("div");for(let p=0;p<S.length;p+=1)S[p].c();y=x(),D=d("p"),D.innerHTML="The addition symbol <strong>+</strong> is not in the equation.",c(t,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),c(t,"aria-hidden","true"),c(s,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),c(s,"aria-hidden","true"),c(k,"class","text-base leading-6 font-medium text-gray-900"),c(k,"id","modal-title"),c(P,"class","mt-2"),c(I,"class","my-2"),c(W,"class","mt-2"),c(ee,"class","my-2"),c(H,"class","text-base font-medium"),c(F,"class","flex justify-center my-1"),c(z,"class","text-sm text-gray-500 mb-4"),c(X,"class","flex justify-center my-1"),c(A,"class","text-sm text-gray-500 mb-4"),c(R,"class","flex justify-center my-1"),c(D,"class","text-sm text-gray-500 mb-4"),c(T,"class","mt-2"),c(_,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"),c(w,"class","sm:flex sm:items-start"),c(f,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),c(i,"class","inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"),c(l,"class","flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"),c(e,"class","fixed z-10 inset-0 overflow-y-auto"),c(e,"aria-labelledby","modal-title"),c(e,"role","dialog"),c(e,"aria-modal","true")},m(p,le){E(p,e,le),a(e,l),a(l,t),a(l,n),a(l,s),a(l,o),a(l,i),a(i,f),a(f,w),a(w,_),a(_,k),a(_,L),a(_,P),a(_,M),a(_,I),a(_,j),a(_,W),a(_,J),a(_,ee),a(_,q),a(_,T),a(T,H),a(T,oe),a(T,F);for(let h=0;h<u.length;h+=1)u[h].m(F,null);a(T,se),a(T,z),a(T,te),a(T,X);for(let h=0;h<m.length;h+=1)m[h].m(X,null);a(T,B),a(T,A),a(T,g),a(T,R);for(let h=0;h<S.length;h+=1)S[h].m(R,null);a(T,y),a(T,D),K||(C=ie(e,"click",function(){at(r[0])&&r[0].apply(this,arguments)}),K=!0)},p(p,[le]){if(r=p,le&18){v=r[1];let h;for(h=0;h<v.length;h+=1){const ne=We(r,v,h);u[h]?u[h].p(ne,le):(u[h]=De(ne),u[h].c(),u[h].m(F,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=v.length}if(le&20){U=r[2];let h;for(h=0;h<U.length;h+=1){const ne=Re(r,U,h);m[h]?m[h].p(ne,le):(m[h]=Ke(ne),m[h].c(),m[h].m(X,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=U.length}if(le&24){Y=r[3];let h;for(h=0;h<Y.length;h+=1){const ne=qe(r,Y,h);S[h]?S[h].p(ne,le):(S[h]=Se(ne),S[h].c(),S[h].m(R,null))}for(;h<S.length;h+=1)S[h].d(1);S.length=Y.length}},i:V,o:V,d(p){p&&b(e),$(u,p),$(m,p),$(S,p),K=!1,C()}}}function jt(r,e,l){const t=[{correct:N.Correct,char:"2"},{correct:N.NotUsed,char:"*"},{correct:N.NotUsed,char:"3"},{correct:N.NotUsed,char:"="},{correct:N.NotUsed,char:"7"},{correct:N.NotUsed,char:"-"},{correct:N.NotUsed,char:"1"}],n=[{correct:N.NotUsed,char:"1"},{correct:N.NotUsed,char:"8"},{correct:N.OutOfPlace,char:"/"},{correct:N.NotUsed,char:"2"},{correct:N.NotUsed,char:"="},{correct:N.NotUsed,char:"3"},{correct:N.NotUsed,char:"*"},{correct:N.NotUsed,char:"3"}],s=[{correct:N.NotUsed,char:"-"},{correct:N.NotUsed,char:"4"},{correct:N.Wrong,char:"+"},{correct:N.NotUsed,char:"5"},{correct:N.NotUsed,char:"="},{correct:N.NotUsed,char:"9"},{correct:N.NotUsed,char:"-"},{correct:N.NotUsed,char:"8"}],o={[N.Correct]:"bg-green-500 border-green-500",[N.OutOfPlace]:"bg-yellow-500 border-yellow-500",[N.Wrong]:"bg-gray-500 border-gray-500",[N.NotUsed]:"bg-white"};let{onClose:i=()=>{}}=e;return r.$$set=f=>{"onClose"in f&&l(0,i=f.onClose)},[i,t,n,s,o]}class Et extends me{constructor(e){super();he(this,e,jt,Mt,ge,{onClose:0})}}const Fe="thwordle-attempts",ye=ut(JSON.parse(window.localStorage.getItem(Fe)||'{"data": {}}'));ye.subscribe(r=>{window.localStorage[Fe]=JSON.stringify(r)});function He(r,e,l){const t=r.slice();return t[26]=e[l],t}function ze(r,e,l){const t=r.slice();return t[29]=e[l][0],t[30]=e[l][1],t}function Be(r,e,l){const t=r.slice();return t[33]=e[l],t[35]=l,t}function Ye(r,e,l){const t=r.slice();return t[2]=e[l],t}function Ze(r,e,l){const t=r.slice();return t[38]=e[l].correct,t[39]=e[l].char,t}function Ge(r){var s;let e,l=((s=r[39])!=null?s:"")+"",t,n;return{c(){e=d("div"),t=G(l),c(e,"class",n=""+(be(`${r[12][r[38]]||"bg-white"} w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-4l7no6"))},m(o,i){E(o,e,i),a(e,t)},p(o,i){var f;i[0]&1&&l!==(l=((f=o[39])!=null?f:"")+"")&&pe(t,l),i[0]&1&&n!==(n=""+(be(`${o[12][o[38]]||"bg-white"} w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-4l7no6"))&&c(e,"class",n)},d(o){o&&b(e)}}}function Je(r){let e,l=_e(r[2],r[11]),t=[];for(let n=0;n<l.length;n+=1)t[n]=Ge(Ze(r,l,n));return{c(){e=d("div");for(let n=0;n<t.length;n+=1)t[n].c();c(e,"class","flex justify-center my-1")},m(n,s){E(n,e,s);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,s){if(s[0]&6145){l=_e(n[2],n[11]);let o;for(o=0;o<l.length;o+=1){const i=Ze(n,l,o);t[o]?t[o].p(i,s):(t[o]=Ge(i),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},d(n){n&&b(e),$(t,n)}}}function Xe(r){let e,l=new Array(r[6]).fill(0),t=[];for(let n=0;n<l.length;n+=1)t[n]=Ve(Be(r,l,n));return{c(){e=d("div");for(let n=0;n<t.length;n+=1)t[n].c();c(e,"class","flex justify-center my-1")},m(n,s){E(n,e,s);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,s){if(s[0]&192){l=new Array(n[6]).fill(0);let o;for(o=0;o<l.length;o+=1){const i=Be(n,l,o);t[o]?t[o].p(i,s):(t[o]=Ve(i),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},d(n){n&&b(e),$(t,n)}}}function Ve(r){let e,l=(r[7][r[35]]||"")+"",t,n,s;return{c(){e=d("div"),t=G(l),n=x(),c(e,"class",s=""+(be("bg-white w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded")+" svelte-4l7no6"))},m(o,i){E(o,e,i),a(e,t),a(e,n)},p(o,i){i[0]&128&&l!==(l=(o[7][o[35]]||"")+"")&&pe(t,l)},d(o){o&&b(e)}}}function Qe(r){let e,l=r[29]+"",t,n,s,o;function i(){return r[20](r[29])}return{c(){e=d("button"),t=G(l),c(e,"class",n=""+(be(r[12][r[30]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-4l7no6"))},m(f,w){E(f,e,w),a(e,t),s||(o=ie(e,"click",i),s=!0)},p(f,w){r=f,w[0]&256&&l!==(l=r[29]+"")&&pe(t,l),w[0]&256&&n!==(n=""+(be(r[12][r[30]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-4l7no6"))&&c(e,"class",n)},d(f){f&&b(e),s=!1,o()}}}function $e(r){let e,l,t=Object.entries(r[26]),n=[];for(let s=0;s<t.length;s+=1)n[s]=Qe(ze(r,t,s));return{c(){e=d("div");for(let s=0;s<n.length;s+=1)n[s].c();l=x(),c(e,"class","w-full flex flex-row justify-center")},m(s,o){E(s,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null);a(e,l)},p(s,o){if(o[0]&4356){t=Object.entries(s[26]);let i;for(i=0;i<t.length;i+=1){const f=ze(s,t,i);n[i]?n[i].p(f,o):(n[i]=Qe(f),n[i].c(),n[i].m(e,l))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(s){s&&b(e),$(n,s)}}}function Ot(r){let e,l,t,n,s,o;return{c(){e=d("div"),l=d("button"),l.textContent="Enter",t=x(),n=d("button"),n.textContent="Clear",c(l,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),c(n,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),c(e,"class","flex flex-row justify-center")},m(i,f){E(i,e,f),a(e,l),a(e,t),a(e,n),s||(o=[ie(l,"click",r[14]),ie(n,"click",r[21])],s=!0)},p:V,d(i){i&&b(e),s=!1,Te(o)}}}function Tt(r){let e,l=(r[5]?"Copied":"Share")+"",t,n,s;return{c(){e=d("button"),t=G(l),c(e,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400")},m(o,i){E(o,e,i),a(e,t),n||(s=ie(e,"click",r[15]),n=!0)},p(o,i){i[0]&32&&l!==(l=(o[5]?"Copied":"Share")+"")&&pe(t,l)},d(o){o&&b(e),n=!1,s()}}}function et(r){let e,l;return e=new Et({props:{onClose:r[22]}}),{c(){ue(e.$$.fragment)},m(t,n){fe(e,t,n),l=!0},p(t,n){const s={};n[0]&16&&(s.onClose=t[22]),e.$set(s)},i(t){l||(Z(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){de(e,t)}}}function At(r){let e,l,t,n,s,o,i,f,w,_,k,L,P,M=r[10]+1+"",I,j,W,J,ee,q,T,H,oe,F,se,z,te,X;l=new wt({props:{items:r[9]}}),n=new Nt({props:{url:tt,title:xe}}),o=new bt({props:{title:xe,description:Ct,url:tt,imageUrl:Lt,gtagId:Pt}});let B=r[0],A=[];for(let u=0;u<B.length;u+=1)A[u]=Je(Ye(r,B,u));let g=!r[1]&&Xe(r),R=r[8],y=[];for(let u=0;u<R.length;u+=1)y[u]=$e(He(r,R,u));function D(u,U){return u[1]?Tt:Ot}let K=D(r),C=K(r),v=r[4]&&et(r);return{c(){e=d("div"),ue(l.$$.fragment),t=x(),ue(n.$$.fragment),s=x(),ue(o.$$.fragment),i=x(),f=d("main"),w=d("h1"),_=d("span"),k=G(xe),L=d("span"),L.textContent="Beta",P=G(`\r
\r
  Day `),I=G(M),j=x(),W=d("div");for(let u=0;u<A.length;u+=1)A[u].c();J=x(),g&&g.c(),ee=x(),q=d("input"),T=x(),H=d("div");for(let u=0;u<y.length;u+=1)y[u].c();oe=x(),F=d("div"),C.c(),se=x(),v&&v.c(),c(e,"class","footer-wrapper svelte-4l7no6"),c(L,"class","text-sm text-gray-400 ml-2"),c(w,"class","text-6xl text-green-400 flex flex-col mb-4"),c(W,"class","attempts grow overflow-y-auto svelte-4l7no6"),c(q,"type","text"),c(q,"class","border px-4 py-2 text-center w-64"),q.disabled=r[1],c(q,"placeholder","Click here to use keyboard input"),q.autofocus=!0,c(H,"class","layout my-4 w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"),c(F,"class","mb-16 text-center"),c(f,"class","w-full h-screen py-4 flex flex-col items-center")},m(u,U){E(u,e,U),fe(l,e,null),a(e,t),fe(n,e,null),E(u,s,U),fe(o,u,U),E(u,i,U),E(u,f,U),a(f,w),a(w,_),a(_,k),a(_,L),a(f,P),a(f,I),a(f,j),a(f,W);for(let m=0;m<A.length;m+=1)A[m].m(W,null);a(W,J),g&&g.m(W,null),r[18](W),a(f,ee),a(f,q),Oe(q,r[2]),a(f,T),a(f,H);for(let m=0;m<y.length;m+=1)y[m].m(H,null);a(f,oe),a(f,F),C.m(F,null),a(f,se),v&&v.m(f,null),z=!0,q.focus(),te||(X=[ie(q,"keypress",r[13]),ie(q,"input",r[19])],te=!0)},p(u,U){if(U[0]&6145){B=u[0];let m;for(m=0;m<B.length;m+=1){const Y=Ye(u,B,m);A[m]?A[m].p(Y,U):(A[m]=Je(Y),A[m].c(),A[m].m(W,J))}for(;m<A.length;m+=1)A[m].d(1);A.length=B.length}if(u[1]?g&&(g.d(1),g=null):g?g.p(u,U):(g=Xe(u),g.c(),g.m(W,null)),(!z||U[0]&2)&&(q.disabled=u[1]),U[0]&4&&q.value!==u[2]&&Oe(q,u[2]),U[0]&4356){R=u[8];let m;for(m=0;m<R.length;m+=1){const Y=He(u,R,m);y[m]?y[m].p(Y,U):(y[m]=$e(Y),y[m].c(),y[m].m(H,null))}for(;m<y.length;m+=1)y[m].d(1);y.length=R.length}K===(K=D(u))&&C?C.p(u,U):(C.d(1),C=K(u),C&&(C.c(),C.m(F,null))),u[4]?v?(v.p(u,U),U[0]&16&&Z(v,1)):(v=et(u),v.c(),Z(v,1),v.m(f,null)):v&&(je(),Q(v,1,1,()=>{v=null}),Ee())},i(u){z||(Z(l.$$.fragment,u),Z(n.$$.fragment,u),Z(o.$$.fragment,u),Z(v),z=!0)},o(u){Q(l.$$.fragment,u),Q(n.$$.fragment,u),Q(o.$$.fragment,u),Q(v),z=!1},d(u){u&&b(e),de(l),de(n),u&&b(s),de(o,u),u&&b(i),u&&b(f),$(A,u),g&&g.d(),r[18](null),$(y,u),C.d(),v&&v.d(),te=!1,Te(X)}}}const tt="https://lemononmars.github.io/puzzles/mathdle",xe="Mathdle",Ct="Wordle clone, but it's Math.",Lt="",Pt="G-YTV7TZ3EMC",qt=16429572e5,Rt=864e5;function Wt(r,e){for(var l=[],t=0,n=0;t<r.length;t++)t>=e&&t%e==0&&n++,l[n]=l[n]||[],l[n].push(r[t]);return l}function Dt(r,e,l){var B,A;let t,n,s,o;ft(r,ye,g=>l(17,o=g));const i=[{name:"Report a bug?",url:"https://m.me/sakulbuth"},{name:"Original (Thwordle)",url:"https://github.com/narze/thwordle"},{name:"Github",url:"https://github.com/lemononmars/mathdle"}],f=Wt("1234506789+-*/=".split(""),5).map(g=>g.join("")),w=Date.now(),_=Math.floor((w-qt)/Rt);let k="",L=H(_),P=((B=o.data[_])==null?void 0:B.attempts)||[],M=P.map(g=>_e(g,L)),I=!!((A=o.data[_])==null?void 0:A.win),j,W=!0,J=!1;const ee={[ce.Correct]:"bg-green-500 border-green-500",[ce.OutOfPlace]:"bg-yellow-500 border-yellow-500",[ce.Wrong]:"bg-gray-500 border-gray-500",[ce.NotUsed]:"bg-white"};function q(g){if(g.key==="Enter"&&(g.preventDefault(),T()),n.length>=t+1){g.preventDefault();return}}async function T(){if(I)return;if(k.length!=t){alert("Please match the input length");return}let g=k.split("=");if(g.length==1){alert("Equals sign missing (=)");return}if(g.length>2){alert("Too many equals sign!");return}let R,y;try{R=we(g[0]),y=we(g[1])}catch{alert("Invalid expression");return}if(R!=y){alert("Invalid equation: "+R+"\u2260"+y);return}l(0,P=[...P,k]);const D=_e(k,L);l(16,M=[...M,D]);let K=!0;D.forEach(C=>{C.correct!==ce.Correct&&(K=!1)}),K&&(alert("You won!"),l(1,I=!0)),l(2,k=""),await dt(),l(3,j.scrollTop=j.scrollHeight,j)}function H(g){const R="+-/*".split("");let y=new ae(g),D=0,K=0,C=0,v=0,u=R[y.nextInt32([0,3])];switch(K=y.nextInt32([1,10]),u){case"/":D=K*y.nextInt32([2,9]);break;case"-":D=K+y.nextInt32([1,10]);break;case"*":D=y.nextInt32([2,9]);break;case"+":D=y.nextInt32([1,10]);break}const U=we(D+u+K);let m=R[y.nextInt32([0,2])];switch(v=y.nextInt32([1,10]),m){case"+":C=U-v;break;case"-":C=U+v;break;case"/":C=U*v;break}return""+D+u+K+"="+C+m+v}function oe(){const g=It(M);navigator.clipboard.writeText(`#Mathdle Day ${_+1} (${g.length} attempts)

${g.join(`
`)}`),l(5,J=!0),setTimeout(()=>{l(5,J=!1)},2e3)}function F(g){mt[g?"unshift":"push"](()=>{j=g,l(3,j)})}function se(){k=this.value,l(2,k)}const z=g=>l(2,k+=g),te=()=>{l(2,k="")},X=()=>{l(4,W=!1)};return r.$$.update=()=>{r.$$.dirty[0]&4&&l(2,k=k.replace(/[^0-9\+\-\*\/\=]/g,"")),r.$$.dirty[0]&4&&l(7,n=k.split("")),r.$$.dirty[0]&65536&&l(8,s=Ut(f,M.flat())),r.$$.dirty[0]&131075&&ye.set({data:Ue(ke({},o.data),{[`${_}`]:{attempts:P,win:I}})})},l(6,t=L.length),[P,I,k,j,W,J,t,n,s,i,_,L,ee,q,T,oe,M,o,F,se,z,te,X]}class Kt extends me{constructor(e){super();he(this,e,Dt,At,ge,{},null,[-1,-1])}}new Kt({target:document.getElementById("app")});
