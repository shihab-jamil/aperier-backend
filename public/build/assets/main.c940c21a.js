function $b(s,l){const h=Object.create(null),g=s.split(",");for(let m=0;m<g.length;m++)h[g[m]]=!0;return l?m=>!!h[m.toLowerCase()]:m=>!!h[m]}const MS="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",PS=$b(MS);function yp(s){if(ct(s)){const l={};for(let h=0;h<s.length;h++){const g=s[h],m=Jn(g)?LS(g):yp(g);if(m)for(const y in m)l[y]=m[y]}return l}else{if(Jn(s))return s;if(Pn(s))return s}}const NS=/;(?![^(]*\))/g,BS=/:([^]+)/,OS=/\/\*.*?\*\//gs;function LS(s){const l={};return s.replace(OS,"").split(NS).forEach(h=>{if(h){const g=h.split(BS);g.length>1&&(l[g[0].trim()]=g[1].trim())}}),l}function Oi(s){let l="";if(Jn(s))l=s;else if(ct(s))for(let h=0;h<s.length;h++){const g=Oi(s[h]);g&&(l+=g+" ")}else if(Pn(s))for(const h in s)s[h]&&(l+=h+" ");return l.trim()}function RS(s){if(!s)return null;let{class:l,style:h}=s;return l&&!Jn(l)&&(s.class=Oi(l)),h&&(s.style=yp(h)),s}const zS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jS=$b(zS);function B1(s){return!!s||s===""}function FS(s,l){if(s.length!==l.length)return!1;let h=!0;for(let g=0;h&&g<s.length;g++)h=bl(s[g],l[g]);return h}function bl(s,l){if(s===l)return!0;let h=CC(s),g=CC(l);if(h||g)return h&&g?s.getTime()===l.getTime():!1;if(h=up(s),g=up(l),h||g)return s===l;if(h=ct(s),g=ct(l),h||g)return h&&g?FS(s,l):!1;if(h=Pn(s),g=Pn(l),h||g){if(!h||!g)return!1;const m=Object.keys(s).length,y=Object.keys(l).length;if(m!==y)return!1;for(const w in s){const v=s.hasOwnProperty(w),A=l.hasOwnProperty(w);if(v&&!A||!v&&A||!bl(s[w],l[w]))return!1}}return String(s)===String(l)}function Vb(s,l){return s.findIndex(h=>bl(h,l))}const pe=s=>Jn(s)?s:s==null?"":ct(s)||Pn(s)&&(s.toString===L1||!Nt(s.toString))?JSON.stringify(s,O1,2):String(s),O1=(s,l)=>l&&l.__v_isRef?O1(s,l.value):ku(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((h,[g,m])=>(h[`${g} =>`]=m,h),{})}:Lc(l)?{[`Set(${l.size})`]:[...l.values()]}:Pn(l)&&!ct(l)&&!R1(l)?String(l):l,Mn={},wu=[],Ls=()=>{},$S=()=>!1,VS=/^on[^a-z]/,Ap=s=>VS.test(s),Yv=s=>s.startsWith("onUpdate:"),no=Object.assign,Qv=(s,l)=>{const h=s.indexOf(l);h>-1&&s.splice(h,1)},US=Object.prototype.hasOwnProperty,on=(s,l)=>US.call(s,l),ct=Array.isArray,ku=s=>Cp(s)==="[object Map]",Lc=s=>Cp(s)==="[object Set]",CC=s=>Cp(s)==="[object Date]",Nt=s=>typeof s=="function",Jn=s=>typeof s=="string",up=s=>typeof s=="symbol",Pn=s=>s!==null&&typeof s=="object",Zv=s=>Pn(s)&&Nt(s.then)&&Nt(s.catch),L1=Object.prototype.toString,Cp=s=>L1.call(s),HS=s=>Cp(s).slice(8,-1),R1=s=>Cp(s)==="[object Object]",Jv=s=>Jn(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,tp=$b(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ub=s=>{const l=Object.create(null);return h=>l[h]||(l[h]=s(h))},qS=/-(\w)/g,wi=Ub(s=>s.replace(qS,(l,h)=>h?h.toUpperCase():"")),WS=/\B([A-Z])/g,as=Ub(s=>s.replace(WS,"-$1").toLowerCase()),xp=Ub(s=>s.charAt(0).toUpperCase()+s.slice(1)),np=Ub(s=>s?`on${xp(s)}`:""),xu=(s,l)=>!Object.is(s,l),vu=(s,l)=>{for(let h=0;h<s.length;h++)s[h](l)},Bb=(s,l,h)=>{Object.defineProperty(s,l,{configurable:!0,enumerable:!1,value:h})},da=s=>{const l=parseFloat(s);return isNaN(l)?s:l};let xC;const GS=()=>xC||(xC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Si;class Xv{constructor(l=!1){this.detached=l,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Si,!l&&Si&&(this.index=(Si.scopes||(Si.scopes=[])).push(this)-1)}run(l){if(this.active){const h=Si;try{return Si=this,l()}finally{Si=h}}}on(){Si=this}off(){Si=this.parent}stop(l){if(this.active){let h,g;for(h=0,g=this.effects.length;h<g;h++)this.effects[h].stop();for(h=0,g=this.cleanups.length;h<g;h++)this.cleanups[h]();if(this.scopes)for(h=0,g=this.scopes.length;h<g;h++)this.scopes[h].stop(!0);if(!this.detached&&this.parent&&!l){const m=this.parent.scopes.pop();m&&m!==this&&(this.parent.scopes[this.index]=m,m.index=this.index)}this.parent=void 0,this.active=!1}}}function KS(s){return new Xv(s)}function z1(s,l=Si){l&&l.active&&l.effects.push(s)}function YS(){return Si}function QS(s){Si&&Si.cleanups.push(s)}const ey=s=>{const l=new Set(s);return l.w=0,l.n=0,l},j1=s=>(s.w&_l)>0,F1=s=>(s.n&_l)>0,ZS=({deps:s})=>{if(s.length)for(let l=0;l<s.length;l++)s[l].w|=_l},JS=s=>{const{deps:l}=s;if(l.length){let h=0;for(let g=0;g<l.length;g++){const m=l[g];j1(m)&&!F1(m)?m.delete(s):l[h++]=m,m.w&=~_l,m.n&=~_l}l.length=h}},yv=new WeakMap;let Xf=0,_l=1;const Av=30;let Os;const Ec=Symbol(""),Cv=Symbol("");class Ep{constructor(l,h=null,g){this.fn=l,this.scheduler=h,this.active=!0,this.deps=[],this.parent=void 0,z1(this,g)}run(){if(!this.active)return this.fn();let l=Os,h=ml;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=Os,Os=this,ml=!0,_l=1<<++Xf,Xf<=Av?ZS(this):EC(this),this.fn()}finally{Xf<=Av&&JS(this),_l=1<<--Xf,Os=this.parent,ml=h,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Os===this?this.deferStop=!0:this.active&&(EC(this),this.onStop&&this.onStop(),this.active=!1)}}function EC(s){const{deps:l}=s;if(l.length){for(let h=0;h<l.length;h++)l[h].delete(s);l.length=0}}function XS(s,l){s.effect&&(s=s.effect.fn);const h=new Ep(s);l&&(no(h,l),l.scope&&z1(h,l.scope)),(!l||!l.lazy)&&h.run();const g=h.run.bind(h);return g.effect=h,g}function eI(s){s.effect.stop()}let ml=!0;const $1=[];function Mu(){$1.push(ml),ml=!1}function Pu(){const s=$1.pop();ml=s===void 0?!0:s}function Li(s,l,h){if(ml&&Os){let g=yv.get(s);g||yv.set(s,g=new Map);let m=g.get(h);m||g.set(h,m=ey()),V1(m)}}function V1(s,l){let h=!1;Xf<=Av?F1(s)||(s.n|=_l,h=!j1(s)):h=!s.has(Os),h&&(s.add(Os),Os.deps.push(s))}function ua(s,l,h,g,m,y){const w=yv.get(s);if(!w)return;let v=[];if(l==="clear")v=[...w.values()];else if(h==="length"&&ct(s)){const A=da(g);w.forEach((T,P)=>{(P==="length"||P>=A)&&v.push(T)})}else switch(h!==void 0&&v.push(w.get(h)),l){case"add":ct(s)?Jv(h)&&v.push(w.get("length")):(v.push(w.get(Ec)),ku(s)&&v.push(w.get(Cv)));break;case"delete":ct(s)||(v.push(w.get(Ec)),ku(s)&&v.push(w.get(Cv)));break;case"set":ku(s)&&v.push(w.get(Ec));break}if(v.length===1)v[0]&&xv(v[0]);else{const A=[];for(const T of v)T&&A.push(...T);xv(ey(A))}}function xv(s,l){const h=ct(s)?s:[...s];for(const g of h)g.computed&&DC(g);for(const g of h)g.computed||DC(g)}function DC(s,l){(s!==Os||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const tI=$b("__proto__,__v_isRef,__isVue"),U1=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(up)),nI=Hb(),oI=Hb(!1,!0),iI=Hb(!0),sI=Hb(!0,!0),TC=rI();function rI(){const s={};return["includes","indexOf","lastIndexOf"].forEach(l=>{s[l]=function(...h){const g=rn(this);for(let y=0,w=this.length;y<w;y++)Li(g,"get",y+"");const m=g[l](...h);return m===-1||m===!1?g[l](...h.map(rn)):m}}),["push","pop","shift","unshift","splice"].forEach(l=>{s[l]=function(...h){Mu();const g=rn(this)[l].apply(this,h);return Pu(),g}}),s}function Hb(s=!1,l=!1){return function(g,m,y){if(m==="__v_isReactive")return!s;if(m==="__v_isReadonly")return s;if(m==="__v_isShallow")return l;if(m==="__v_raw"&&y===(s?l?Q1:Y1:l?K1:G1).get(g))return g;const w=ct(g);if(!s&&w&&on(TC,m))return Reflect.get(TC,m,y);const v=Reflect.get(g,m,y);return(up(m)?U1.has(m):tI(m))||(s||Li(g,"get",m),l)?v:Po(v)?w&&Jv(m)?v:v.value:Pn(v)?s?ny(v):Nu(v):v}}const aI=H1(),lI=H1(!0);function H1(s=!1){return function(h,g,m,y){let w=h[g];if(Mc(w)&&Po(w)&&!Po(m))return!1;if(!s&&(!hp(m)&&!Mc(m)&&(w=rn(w),m=rn(m)),!ct(h)&&Po(w)&&!Po(m)))return w.value=m,!0;const v=ct(h)&&Jv(g)?Number(g)<h.length:on(h,g),A=Reflect.set(h,g,m,y);return h===rn(y)&&(v?xu(m,w)&&ua(h,"set",g,m):ua(h,"add",g,m)),A}}function cI(s,l){const h=on(s,l);s[l];const g=Reflect.deleteProperty(s,l);return g&&h&&ua(s,"delete",l,void 0),g}function dI(s,l){const h=Reflect.has(s,l);return(!up(l)||!U1.has(l))&&Li(s,"has",l),h}function uI(s){return Li(s,"iterate",ct(s)?"length":Ec),Reflect.ownKeys(s)}const q1={get:nI,set:aI,deleteProperty:cI,has:dI,ownKeys:uI},W1={get:iI,set(s,l){return!0},deleteProperty(s,l){return!0}},hI=no({},q1,{get:oI,set:lI}),fI=no({},W1,{get:sI}),ty=s=>s,qb=s=>Reflect.getPrototypeOf(s);function gb(s,l,h=!1,g=!1){s=s.__v_raw;const m=rn(s),y=rn(l);h||(l!==y&&Li(m,"get",l),Li(m,"get",y));const{has:w}=qb(m),v=g?ty:h?sy:fp;if(w.call(m,l))return v(s.get(l));if(w.call(m,y))return v(s.get(y));s!==m&&s.get(l)}function bb(s,l=!1){const h=this.__v_raw,g=rn(h),m=rn(s);return l||(s!==m&&Li(g,"has",s),Li(g,"has",m)),s===m?h.has(s):h.has(s)||h.has(m)}function _b(s,l=!1){return s=s.__v_raw,!l&&Li(rn(s),"iterate",Ec),Reflect.get(s,"size",s)}function SC(s){s=rn(s);const l=rn(this);return qb(l).has.call(l,s)||(l.add(s),ua(l,"add",s,s)),this}function IC(s,l){l=rn(l);const h=rn(this),{has:g,get:m}=qb(h);let y=g.call(h,s);y||(s=rn(s),y=g.call(h,s));const w=m.call(h,s);return h.set(s,l),y?xu(l,w)&&ua(h,"set",s,l):ua(h,"add",s,l),this}function MC(s){const l=rn(this),{has:h,get:g}=qb(l);let m=h.call(l,s);m||(s=rn(s),m=h.call(l,s)),g&&g.call(l,s);const y=l.delete(s);return m&&ua(l,"delete",s,void 0),y}function PC(){const s=rn(this),l=s.size!==0,h=s.clear();return l&&ua(s,"clear",void 0,void 0),h}function wb(s,l){return function(g,m){const y=this,w=y.__v_raw,v=rn(w),A=l?ty:s?sy:fp;return!s&&Li(v,"iterate",Ec),w.forEach((T,P)=>g.call(m,A(T),A(P),y))}}function kb(s,l,h){return function(...g){const m=this.__v_raw,y=rn(m),w=ku(y),v=s==="entries"||s===Symbol.iterator&&w,A=s==="keys"&&w,T=m[s](...g),P=h?ty:l?sy:fp;return!l&&Li(y,"iterate",A?Cv:Ec),{next(){const{value:N,done:M}=T.next();return M?{value:N,done:M}:{value:v?[P(N[0]),P(N[1])]:P(N),done:M}},[Symbol.iterator](){return this}}}}function rl(s){return function(...l){return s==="delete"?!1:this}}function pI(){const s={get(y){return gb(this,y)},get size(){return _b(this)},has:bb,add:SC,set:IC,delete:MC,clear:PC,forEach:wb(!1,!1)},l={get(y){return gb(this,y,!1,!0)},get size(){return _b(this)},has:bb,add:SC,set:IC,delete:MC,clear:PC,forEach:wb(!1,!0)},h={get(y){return gb(this,y,!0)},get size(){return _b(this,!0)},has(y){return bb.call(this,y,!0)},add:rl("add"),set:rl("set"),delete:rl("delete"),clear:rl("clear"),forEach:wb(!0,!1)},g={get(y){return gb(this,y,!0,!0)},get size(){return _b(this,!0)},has(y){return bb.call(this,y,!0)},add:rl("add"),set:rl("set"),delete:rl("delete"),clear:rl("clear"),forEach:wb(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(y=>{s[y]=kb(y,!1,!1),h[y]=kb(y,!0,!1),l[y]=kb(y,!1,!0),g[y]=kb(y,!0,!0)}),[s,h,l,g]}const[mI,gI,bI,_I]=pI();function Wb(s,l){const h=l?s?_I:bI:s?gI:mI;return(g,m,y)=>m==="__v_isReactive"?!s:m==="__v_isReadonly"?s:m==="__v_raw"?g:Reflect.get(on(h,m)&&m in g?h:g,m,y)}const wI={get:Wb(!1,!1)},kI={get:Wb(!1,!0)},vI={get:Wb(!0,!1)},yI={get:Wb(!0,!0)},G1=new WeakMap,K1=new WeakMap,Y1=new WeakMap,Q1=new WeakMap;function AI(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function CI(s){return s.__v_skip||!Object.isExtensible(s)?0:AI(HS(s))}function Nu(s){return Mc(s)?s:Gb(s,!1,q1,wI,G1)}function Z1(s){return Gb(s,!1,hI,kI,K1)}function ny(s){return Gb(s,!0,W1,vI,Y1)}function xI(s){return Gb(s,!0,fI,yI,Q1)}function Gb(s,l,h,g,m){if(!Pn(s)||s.__v_raw&&!(l&&s.__v_isReactive))return s;const y=m.get(s);if(y)return y;const w=CI(s);if(w===0)return s;const v=new Proxy(s,w===2?g:h);return m.set(s,v),v}function Dc(s){return Mc(s)?Dc(s.__v_raw):!!(s&&s.__v_isReactive)}function Mc(s){return!!(s&&s.__v_isReadonly)}function hp(s){return!!(s&&s.__v_isShallow)}function oy(s){return Dc(s)||Mc(s)}function rn(s){const l=s&&s.__v_raw;return l?rn(l):s}function iy(s){return Bb(s,"__v_skip",!0),s}const fp=s=>Pn(s)?Nu(s):s,sy=s=>Pn(s)?ny(s):s;function ry(s){ml&&Os&&(s=rn(s),V1(s.dep||(s.dep=ey())))}function Kb(s,l){s=rn(s),s.dep&&xv(s.dep)}function Po(s){return!!(s&&s.__v_isRef===!0)}function op(s){return X1(s,!1)}function J1(s){return X1(s,!0)}function X1(s,l){return Po(s)?s:new EI(s,l)}class EI{constructor(l,h){this.__v_isShallow=h,this.dep=void 0,this.__v_isRef=!0,this._rawValue=h?l:rn(l),this._value=h?l:fp(l)}get value(){return ry(this),this._value}set value(l){const h=this.__v_isShallow||hp(l)||Mc(l);l=h?l:rn(l),xu(l,this._rawValue)&&(this._rawValue=l,this._value=h?l:fp(l),Kb(this))}}function DI(s){Kb(s)}function Tc(s){return Po(s)?s.value:s}const TI={get:(s,l,h)=>Tc(Reflect.get(s,l,h)),set:(s,l,h,g)=>{const m=s[l];return Po(m)&&!Po(h)?(m.value=h,!0):Reflect.set(s,l,h,g)}};function ay(s){return Dc(s)?s:new Proxy(s,TI)}class SI{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:h,set:g}=l(()=>ry(this),()=>Kb(this));this._get=h,this._set=g}get value(){return this._get()}set value(l){this._set(l)}}function II(s){return new SI(s)}function MI(s){const l=ct(s)?new Array(s.length):{};for(const h in s)l[h]=ex(s,h);return l}class PI{constructor(l,h,g){this._object=l,this._key=h,this._defaultValue=g,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function ex(s,l,h){const g=s[l];return Po(g)?g:new PI(s,l,h)}var tx;class NI{constructor(l,h,g,m){this._setter=h,this.dep=void 0,this.__v_isRef=!0,this[tx]=!1,this._dirty=!0,this.effect=new Ep(l,()=>{this._dirty||(this._dirty=!0,Kb(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!m,this.__v_isReadonly=g}get value(){const l=rn(this);return ry(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}tx="__v_isReadonly";function BI(s,l,h=!1){let g,m;const y=Nt(s);return y?(g=s,m=Ls):(g=s.get,m=s.set),new NI(g,m,y||!m,h)}function OI(s,...l){}function aa(s,l,h,g){let m;try{m=g?s(...g):s()}catch(y){Rc(y,l,h)}return m}function Ni(s,l,h,g){if(Nt(s)){const y=aa(s,l,h,g);return y&&Zv(y)&&y.catch(w=>{Rc(w,l,h)}),y}const m=[];for(let y=0;y<s.length;y++)m.push(Ni(s[y],l,h,g));return m}function Rc(s,l,h,g=!0){const m=l?l.vnode:null;if(l){let y=l.parent;const w=l.proxy,v=h;for(;y;){const T=y.ec;if(T){for(let P=0;P<T.length;P++)if(T[P](s,w,v)===!1)return}y=y.parent}const A=l.appContext.config.errorHandler;if(A){aa(A,null,10,[s,w,v]);return}}LI(s,h,m,g)}function LI(s,l,h,g=!0){console.error(s)}let pp=!1,Ev=!1;const ei=[];let gr=0;const yu=[];let sa=null,Ac=0;const nx=Promise.resolve();let ly=null;function Yb(s){const l=ly||nx;return s?l.then(this?s.bind(this):s):l}function RI(s){let l=gr+1,h=ei.length;for(;l<h;){const g=l+h>>>1;mp(ei[g])<s?l=g+1:h=g}return l}function Qb(s){(!ei.length||!ei.includes(s,pp&&s.allowRecurse?gr+1:gr))&&(s.id==null?ei.push(s):ei.splice(RI(s.id),0,s),ox())}function ox(){!pp&&!Ev&&(Ev=!0,ly=nx.then(ix))}function zI(s){const l=ei.indexOf(s);l>gr&&ei.splice(l,1)}function cy(s){ct(s)?yu.push(...s):(!sa||!sa.includes(s,s.allowRecurse?Ac+1:Ac))&&yu.push(s),ox()}function NC(s,l=pp?gr+1:0){for(;l<ei.length;l++){const h=ei[l];h&&h.pre&&(ei.splice(l,1),l--,h())}}function Ob(s){if(yu.length){const l=[...new Set(yu)];if(yu.length=0,sa){sa.push(...l);return}for(sa=l,sa.sort((h,g)=>mp(h)-mp(g)),Ac=0;Ac<sa.length;Ac++)sa[Ac]();sa=null,Ac=0}}const mp=s=>s.id==null?1/0:s.id,jI=(s,l)=>{const h=mp(s)-mp(l);if(h===0){if(s.pre&&!l.pre)return-1;if(l.pre&&!s.pre)return 1}return h};function ix(s){Ev=!1,pp=!0,ei.sort(jI);const l=Ls;try{for(gr=0;gr<ei.length;gr++){const h=ei[gr];h&&h.active!==!1&&aa(h,null,14)}}finally{gr=0,ei.length=0,Ob(),pp=!1,ly=null,(ei.length||yu.length)&&ix()}}let bu,vb=[];function sx(s,l){var h,g;bu=s,bu?(bu.enabled=!0,vb.forEach(({event:m,args:y})=>bu.emit(m,...y)),vb=[]):typeof window<"u"&&window.HTMLElement&&!(!((g=(h=window.navigator)===null||h===void 0?void 0:h.userAgent)===null||g===void 0)&&g.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(y=>{sx(y,l)}),setTimeout(()=>{bu||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,vb=[])},3e3)):vb=[]}function FI(s,l,...h){if(s.isUnmounted)return;const g=s.vnode.props||Mn;let m=h;const y=l.startsWith("update:"),w=y&&l.slice(7);if(w&&w in g){const P=`${w==="modelValue"?"model":w}Modifiers`,{number:N,trim:M}=g[P]||Mn;M&&(m=h.map(j=>Jn(j)?j.trim():j)),N&&(m=h.map(da))}let v,A=g[v=np(l)]||g[v=np(wi(l))];!A&&y&&(A=g[v=np(as(l))]),A&&Ni(A,s,6,m);const T=g[v+"Once"];if(T){if(!s.emitted)s.emitted={};else if(s.emitted[v])return;s.emitted[v]=!0,Ni(T,s,6,m)}}function rx(s,l,h=!1){const g=l.emitsCache,m=g.get(s);if(m!==void 0)return m;const y=s.emits;let w={},v=!1;if(!Nt(s)){const A=T=>{const P=rx(T,l,!0);P&&(v=!0,no(w,P))};!h&&l.mixins.length&&l.mixins.forEach(A),s.extends&&A(s.extends),s.mixins&&s.mixins.forEach(A)}return!y&&!v?(Pn(s)&&g.set(s,null),null):(ct(y)?y.forEach(A=>w[A]=null):no(w,y),Pn(s)&&g.set(s,w),w)}function Zb(s,l){return!s||!Ap(l)?!1:(l=l.slice(2).replace(/Once$/,""),on(s,l[0].toLowerCase()+l.slice(1))||on(s,as(l))||on(s,l))}let Uo=null,Jb=null;function gp(s){const l=Uo;return Uo=s,Jb=s&&s.type.__scopeId||null,l}function Rt(s){Jb=s}function zt(){Jb=null}const $I=s=>je;function je(s,l=Uo,h){if(!l||s._n)return s;const g=(...m)=>{g._d&&Nv(-1);const y=gp(l);let w;try{w=s(...m)}finally{gp(y),g._d&&Nv(1)}return w};return g._n=!0,g._c=!0,g._d=!0,g}function Tb(s){const{type:l,vnode:h,proxy:g,withProxy:m,props:y,propsOptions:[w],slots:v,attrs:A,emit:T,render:P,renderCache:N,data:M,setupState:j,ctx:ee,inheritAttrs:le}=s;let _e,te;const Y=gp(s);try{if(h.shapeFlag&4){const ke=m||g;_e=Ii(P.call(ke,ke,N,y,j,M,ee)),te=A}else{const ke=l;_e=Ii(ke.length>1?ke(y,{attrs:A,slots:v,emit:T}):ke(y,null)),te=l.props?A:UI(A)}}catch(ke){ap.length=0,Rc(ke,s,1),_e=ce(ti)}let ie=_e;if(te&&le!==!1){const ke=Object.keys(te),{shapeFlag:V}=ie;ke.length&&V&7&&(w&&ke.some(Yv)&&(te=HI(te,w)),ie=wr(ie,te))}return h.dirs&&(ie=wr(ie),ie.dirs=ie.dirs?ie.dirs.concat(h.dirs):h.dirs),h.transition&&(ie.transition=h.transition),_e=ie,gp(Y),_e}function VI(s){let l;for(let h=0;h<s.length;h++){const g=s[h];if(wl(g)){if(g.type!==ti||g.children==="v-if"){if(l)return;l=g}}else return}return l}const UI=s=>{let l;for(const h in s)(h==="class"||h==="style"||Ap(h))&&((l||(l={}))[h]=s[h]);return l},HI=(s,l)=>{const h={};for(const g in s)(!Yv(g)||!(g.slice(9)in l))&&(h[g]=s[g]);return h};function qI(s,l,h){const{props:g,children:m,component:y}=s,{props:w,children:v,patchFlag:A}=l,T=y.emitsOptions;if(l.dirs||l.transition)return!0;if(h&&A>=0){if(A&1024)return!0;if(A&16)return g?BC(g,w,T):!!w;if(A&8){const P=l.dynamicProps;for(let N=0;N<P.length;N++){const M=P[N];if(w[M]!==g[M]&&!Zb(T,M))return!0}}}else return(m||v)&&(!v||!v.$stable)?!0:g===w?!1:g?w?BC(g,w,T):!0:!!w;return!1}function BC(s,l,h){const g=Object.keys(l);if(g.length!==Object.keys(s).length)return!0;for(let m=0;m<g.length;m++){const y=g[m];if(l[y]!==s[y]&&!Zb(h,y))return!0}return!1}function dy({vnode:s,parent:l},h){for(;l&&l.subTree===s;)(s=l.vnode).el=h,l=l.parent}const ax=s=>s.__isSuspense,WI={name:"Suspense",__isSuspense:!0,process(s,l,h,g,m,y,w,v,A,T){s==null?KI(l,h,g,m,y,w,v,A,T):YI(s,l,h,g,m,w,v,A,T)},hydrate:QI,create:uy,normalize:ZI},GI=WI;function bp(s,l){const h=s.props&&s.props[l];Nt(h)&&h()}function KI(s,l,h,g,m,y,w,v,A){const{p:T,o:{createElement:P}}=A,N=P("div"),M=s.suspense=uy(s,m,g,l,N,h,y,w,v,A);T(null,M.pendingBranch=s.ssContent,N,null,g,M,y,w),M.deps>0?(bp(s,"onPending"),bp(s,"onFallback"),T(null,s.ssFallback,l,h,g,null,y,w),Au(M,s.ssFallback)):M.resolve()}function YI(s,l,h,g,m,y,w,v,{p:A,um:T,o:{createElement:P}}){const N=l.suspense=s.suspense;N.vnode=l,l.el=s.el;const M=l.ssContent,j=l.ssFallback,{activeBranch:ee,pendingBranch:le,isInFallback:_e,isHydrating:te}=N;if(le)N.pendingBranch=M,br(M,le)?(A(le,M,N.hiddenContainer,null,m,N,y,w,v),N.deps<=0?N.resolve():_e&&(A(ee,j,h,g,m,null,y,w,v),Au(N,j))):(N.pendingId++,te?(N.isHydrating=!1,N.activeBranch=le):T(le,m,N),N.deps=0,N.effects.length=0,N.hiddenContainer=P("div"),_e?(A(null,M,N.hiddenContainer,null,m,N,y,w,v),N.deps<=0?N.resolve():(A(ee,j,h,g,m,null,y,w,v),Au(N,j))):ee&&br(M,ee)?(A(ee,M,h,g,m,N,y,w,v),N.resolve(!0)):(A(null,M,N.hiddenContainer,null,m,N,y,w,v),N.deps<=0&&N.resolve()));else if(ee&&br(M,ee))A(ee,M,h,g,m,N,y,w,v),Au(N,M);else if(bp(l,"onPending"),N.pendingBranch=M,N.pendingId++,A(null,M,N.hiddenContainer,null,m,N,y,w,v),N.deps<=0)N.resolve();else{const{timeout:Y,pendingId:ie}=N;Y>0?setTimeout(()=>{N.pendingId===ie&&N.fallback(j)},Y):Y===0&&N.fallback(j)}}function uy(s,l,h,g,m,y,w,v,A,T,P=!1){const{p:N,m:M,um:j,n:ee,o:{parentNode:le,remove:_e}}=T,te=da(s.props&&s.props.timeout),Y={vnode:s,parent:l,parentComponent:h,isSVG:w,container:g,hiddenContainer:m,anchor:y,deps:0,pendingId:0,timeout:typeof te=="number"?te:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:P,isUnmounted:!1,effects:[],resolve(ie=!1){const{vnode:ke,activeBranch:V,pendingBranch:Ne,pendingId:we,effects:he,parentComponent:Me,container:Fe}=Y;if(Y.isHydrating)Y.isHydrating=!1;else if(!ie){const nt=V&&Ne.transition&&Ne.transition.mode==="out-in";nt&&(V.transition.afterLeave=()=>{we===Y.pendingId&&M(Ne,Fe,Le,0)});let{anchor:Le}=Y;V&&(Le=ee(V),j(V,Me,Y,!0)),nt||M(Ne,Fe,Le,0)}Au(Y,Ne),Y.pendingBranch=null,Y.isInFallback=!1;let Ke=Y.parent,Q=!1;for(;Ke;){if(Ke.pendingBranch){Ke.effects.push(...he),Q=!0;break}Ke=Ke.parent}Q||cy(he),Y.effects=[],bp(ke,"onResolve")},fallback(ie){if(!Y.pendingBranch)return;const{vnode:ke,activeBranch:V,parentComponent:Ne,container:we,isSVG:he}=Y;bp(ke,"onFallback");const Me=ee(V),Fe=()=>{!Y.isInFallback||(N(null,ie,we,Me,Ne,null,he,v,A),Au(Y,ie))},Ke=ie.transition&&ie.transition.mode==="out-in";Ke&&(V.transition.afterLeave=Fe),Y.isInFallback=!0,j(V,Ne,null,!0),Ke||Fe()},move(ie,ke,V){Y.activeBranch&&M(Y.activeBranch,ie,ke,V),Y.container=ie},next(){return Y.activeBranch&&ee(Y.activeBranch)},registerDep(ie,ke){const V=!!Y.pendingBranch;V&&Y.deps++;const Ne=ie.vnode.el;ie.asyncDep.catch(we=>{Rc(we,ie,0)}).then(we=>{if(ie.isUnmounted||Y.isUnmounted||Y.pendingId!==ie.suspenseId)return;ie.asyncResolved=!0;const{vnode:he}=ie;Bv(ie,we,!1),Ne&&(he.el=Ne);const Me=!Ne&&ie.subTree.el;ke(ie,he,le(Ne||ie.subTree.el),Ne?null:ee(ie.subTree),Y,w,A),Me&&_e(Me),dy(ie,he.el),V&&--Y.deps===0&&Y.resolve()})},unmount(ie,ke){Y.isUnmounted=!0,Y.activeBranch&&j(Y.activeBranch,h,ie,ke),Y.pendingBranch&&j(Y.pendingBranch,h,ie,ke)}};return Y}function QI(s,l,h,g,m,y,w,v,A){const T=l.suspense=uy(l,g,h,s.parentNode,document.createElement("div"),null,m,y,w,v,!0),P=A(s,T.pendingBranch=l.ssContent,h,T,y,w);return T.deps===0&&T.resolve(),P}function ZI(s){const{shapeFlag:l,children:h}=s,g=l&32;s.ssContent=OC(g?h.default:h),s.ssFallback=g?OC(h.fallback):ce(ti)}function OC(s){let l;if(Nt(s)){const h=Bc&&s._c;h&&(s._d=!1,re()),s=s(),h&&(s._d=!0,l=bi,Ox())}return ct(s)&&(s=VI(s)),s=Ii(s),l&&!s.dynamicChildren&&(s.dynamicChildren=l.filter(h=>h!==s)),s}function lx(s,l){l&&l.pendingBranch?ct(s)?l.effects.push(...s):l.effects.push(s):cy(s)}function Au(s,l){s.activeBranch=l;const{vnode:h,parentComponent:g}=s,m=h.el=l.el;g&&g.subTree===h&&(g.vnode.el=m,dy(g,m))}function ip(s,l){if(vo){let h=vo.provides;const g=vo.parent&&vo.parent.provides;g===h&&(h=vo.provides=Object.create(g)),h[s]=l}}function _r(s,l,h=!1){const g=vo||Uo;if(g){const m=g.parent==null?g.vnode.appContext&&g.vnode.appContext.provides:g.parent.provides;if(m&&s in m)return m[s];if(arguments.length>1)return h&&Nt(l)?l.call(g.proxy):l}}function JI(s,l){return Dp(s,null,l)}function cx(s,l){return Dp(s,null,{flush:"post"})}function XI(s,l){return Dp(s,null,{flush:"sync"})}const yb={};function Cu(s,l,h){return Dp(s,l,h)}function Dp(s,l,{immediate:h,deep:g,flush:m,onTrack:y,onTrigger:w}=Mn){const v=vo;let A,T=!1,P=!1;if(Po(s)?(A=()=>s.value,T=hp(s)):Dc(s)?(A=()=>s,g=!0):ct(s)?(P=!0,T=s.some(ie=>Dc(ie)||hp(ie)),A=()=>s.map(ie=>{if(Po(ie))return ie.value;if(Dc(ie))return xc(ie);if(Nt(ie))return aa(ie,v,2)})):Nt(s)?l?A=()=>aa(s,v,2):A=()=>{if(!(v&&v.isUnmounted))return N&&N(),Ni(s,v,3,[M])}:A=Ls,l&&g){const ie=A;A=()=>xc(ie())}let N,M=ie=>{N=te.onStop=()=>{aa(ie,v,4)}},j;if(Du)if(M=Ls,l?h&&Ni(l,v,3,[A(),P?[]:void 0,M]):A(),m==="sync"){const ie=Gx();j=ie.__watcherHandles||(ie.__watcherHandles=[])}else return Ls;let ee=P?new Array(s.length).fill(yb):yb;const le=()=>{if(!!te.active)if(l){const ie=te.run();(g||T||(P?ie.some((ke,V)=>xu(ke,ee[V])):xu(ie,ee)))&&(N&&N(),Ni(l,v,3,[ie,ee===yb?void 0:P&&ee[0]===yb?[]:ee,M]),ee=ie)}else te.run()};le.allowRecurse=!!l;let _e;m==="sync"?_e=le:m==="post"?_e=()=>Vo(le,v&&v.suspense):(le.pre=!0,v&&(le.id=v.uid),_e=()=>Qb(le));const te=new Ep(A,_e);l?h?le():ee=te.run():m==="post"?Vo(te.run.bind(te),v&&v.suspense):te.run();const Y=()=>{te.stop(),v&&v.scope&&Qv(v.scope.effects,te)};return j&&j.push(Y),Y}function eM(s,l,h){const g=this.proxy,m=Jn(s)?s.includes(".")?dx(g,s):()=>g[s]:s.bind(g,g);let y;Nt(l)?y=l:(y=l.handler,h=l);const w=vo;kl(this);const v=Dp(m,y.bind(g),h);return w?kl(w):gl(),v}function dx(s,l){const h=l.split(".");return()=>{let g=s;for(let m=0;m<h.length&&g;m++)g=g[h[m]];return g}}function xc(s,l){if(!Pn(s)||s.__v_skip||(l=l||new Set,l.has(s)))return s;if(l.add(s),Po(s))xc(s.value,l);else if(ct(s))for(let h=0;h<s.length;h++)xc(s[h],l);else if(Lc(s)||ku(s))s.forEach(h=>{xc(h,l)});else if(R1(s))for(const h in s)xc(s[h],l);return s}function hy(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ip(()=>{s.isMounted=!0}),n_(()=>{s.isUnmounting=!0}),s}const rs=[Function,Array],tM={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rs,onEnter:rs,onAfterEnter:rs,onEnterCancelled:rs,onBeforeLeave:rs,onLeave:rs,onAfterLeave:rs,onLeaveCancelled:rs,onBeforeAppear:rs,onAppear:rs,onAfterAppear:rs,onAppearCancelled:rs},setup(s,{slots:l}){const h=yl(),g=hy();let m;return()=>{const y=l.default&&Xb(l.default(),!0);if(!y||!y.length)return;let w=y[0];if(y.length>1){for(const le of y)if(le.type!==ti){w=le;break}}const v=rn(s),{mode:A}=v;if(g.isLeaving)return cv(w);const T=LC(w);if(!T)return cv(w);const P=Eu(T,v,g,h);Pc(T,P);const N=h.subTree,M=N&&LC(N);let j=!1;const{getTransitionKey:ee}=T.type;if(ee){const le=ee();m===void 0?m=le:le!==m&&(m=le,j=!0)}if(M&&M.type!==ti&&(!br(T,M)||j)){const le=Eu(M,v,g,h);if(Pc(M,le),A==="out-in")return g.isLeaving=!0,le.afterLeave=()=>{g.isLeaving=!1,h.update.active!==!1&&h.update()},cv(w);A==="in-out"&&T.type!==ti&&(le.delayLeave=(_e,te,Y)=>{const ie=ux(g,M);ie[String(M.key)]=M,_e._leaveCb=()=>{te(),_e._leaveCb=void 0,delete P.delayedLeave},P.delayedLeave=Y})}return w}}},fy=tM;function ux(s,l){const{leavingVNodes:h}=s;let g=h.get(l.type);return g||(g=Object.create(null),h.set(l.type,g)),g}function Eu(s,l,h,g){const{appear:m,mode:y,persisted:w=!1,onBeforeEnter:v,onEnter:A,onAfterEnter:T,onEnterCancelled:P,onBeforeLeave:N,onLeave:M,onAfterLeave:j,onLeaveCancelled:ee,onBeforeAppear:le,onAppear:_e,onAfterAppear:te,onAppearCancelled:Y}=l,ie=String(s.key),ke=ux(h,s),V=(he,Me)=>{he&&Ni(he,g,9,Me)},Ne=(he,Me)=>{const Fe=Me[1];V(he,Me),ct(he)?he.every(Ke=>Ke.length<=1)&&Fe():he.length<=1&&Fe()},we={mode:y,persisted:w,beforeEnter(he){let Me=v;if(!h.isMounted)if(m)Me=le||v;else return;he._leaveCb&&he._leaveCb(!0);const Fe=ke[ie];Fe&&br(s,Fe)&&Fe.el._leaveCb&&Fe.el._leaveCb(),V(Me,[he])},enter(he){let Me=A,Fe=T,Ke=P;if(!h.isMounted)if(m)Me=_e||A,Fe=te||T,Ke=Y||P;else return;let Q=!1;const nt=he._enterCb=Le=>{Q||(Q=!0,Le?V(Ke,[he]):V(Fe,[he]),we.delayedLeave&&we.delayedLeave(),he._enterCb=void 0)};Me?Ne(Me,[he,nt]):nt()},leave(he,Me){const Fe=String(s.key);if(he._enterCb&&he._enterCb(!0),h.isUnmounting)return Me();V(N,[he]);let Ke=!1;const Q=he._leaveCb=nt=>{Ke||(Ke=!0,Me(),nt?V(ee,[he]):V(j,[he]),he._leaveCb=void 0,ke[Fe]===s&&delete ke[Fe])};ke[Fe]=s,M?Ne(M,[he,Q]):Q()},clone(he){return Eu(he,l,h,g)}};return we}function cv(s){if(Sp(s))return s=wr(s),s.children=null,s}function LC(s){return Sp(s)?s.children?s.children[0]:void 0:s}function Pc(s,l){s.shapeFlag&6&&s.component?Pc(s.component.subTree,l):s.shapeFlag&128?(s.ssContent.transition=l.clone(s.ssContent),s.ssFallback.transition=l.clone(s.ssFallback)):s.transition=l}function Xb(s,l=!1,h){let g=[],m=0;for(let y=0;y<s.length;y++){let w=s[y];const v=h==null?w.key:String(h)+String(w.key!=null?w.key:y);w.type===rt?(w.patchFlag&128&&m++,g=g.concat(Xb(w.children,l,v))):(l||w.type!==ti)&&g.push(v!=null?wr(w,{key:v}):w)}if(m>1)for(let y=0;y<g.length;y++)g[y].patchFlag=-2;return g}function Tp(s){return Nt(s)?{setup:s,name:s.name}:s}const Sc=s=>!!s.type.__asyncLoader;function nM(s){Nt(s)&&(s={loader:s});const{loader:l,loadingComponent:h,errorComponent:g,delay:m=200,timeout:y,suspensible:w=!0,onError:v}=s;let A=null,T,P=0;const N=()=>(P++,A=null,M()),M=()=>{let j;return A||(j=A=l().catch(ee=>{if(ee=ee instanceof Error?ee:new Error(String(ee)),v)return new Promise((le,_e)=>{v(ee,()=>le(N()),()=>_e(ee),P+1)});throw ee}).then(ee=>j!==A&&A?A:(ee&&(ee.__esModule||ee[Symbol.toStringTag]==="Module")&&(ee=ee.default),T=ee,ee)))};return Tp({name:"AsyncComponentWrapper",__asyncLoader:M,get __asyncResolved(){return T},setup(){const j=vo;if(T)return()=>dv(T,j);const ee=Y=>{A=null,Rc(Y,j,13,!g)};if(w&&j.suspense||Du)return M().then(Y=>()=>dv(Y,j)).catch(Y=>(ee(Y),()=>g?ce(g,{error:Y}):null));const le=op(!1),_e=op(),te=op(!!m);return m&&setTimeout(()=>{te.value=!1},m),y!=null&&setTimeout(()=>{if(!le.value&&!_e.value){const Y=new Error(`Async component timed out after ${y}ms.`);ee(Y),_e.value=Y}},y),M().then(()=>{le.value=!0,j.parent&&Sp(j.parent.vnode)&&Qb(j.parent.update)}).catch(Y=>{ee(Y),_e.value=Y}),()=>{if(le.value&&T)return dv(T,j);if(_e.value&&g)return ce(g,{error:_e.value});if(h&&!te.value)return ce(h)}}})}function dv(s,l){const{ref:h,props:g,children:m,ce:y}=l.vnode,w=ce(s,g,m);return w.ref=h,w.ce=y,delete l.vnode.ce,w}const Sp=s=>s.type.__isKeepAlive,oM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:l}){const h=yl(),g=h.ctx;if(!g.renderer)return()=>{const Y=l.default&&l.default();return Y&&Y.length===1?Y[0]:Y};const m=new Map,y=new Set;let w=null;const v=h.suspense,{renderer:{p:A,m:T,um:P,o:{createElement:N}}}=g,M=N("div");g.activate=(Y,ie,ke,V,Ne)=>{const we=Y.component;T(Y,ie,ke,0,v),A(we.vnode,Y,ie,ke,we,v,V,Y.slotScopeIds,Ne),Vo(()=>{we.isDeactivated=!1,we.a&&vu(we.a);const he=Y.props&&Y.props.onVnodeMounted;he&&mi(he,we.parent,Y)},v)},g.deactivate=Y=>{const ie=Y.component;T(Y,M,null,1,v),Vo(()=>{ie.da&&vu(ie.da);const ke=Y.props&&Y.props.onVnodeUnmounted;ke&&mi(ke,ie.parent,Y),ie.isDeactivated=!0},v)};function j(Y){uv(Y),P(Y,h,v,!0)}function ee(Y){m.forEach((ie,ke)=>{const V=Lv(ie.type);V&&(!Y||!Y(V))&&le(ke)})}function le(Y){const ie=m.get(Y);!w||ie.type!==w.type?j(ie):w&&uv(w),m.delete(Y),y.delete(Y)}Cu(()=>[s.include,s.exclude],([Y,ie])=>{Y&&ee(ke=>ep(Y,ke)),ie&&ee(ke=>!ep(ie,ke))},{flush:"post",deep:!0});let _e=null;const te=()=>{_e!=null&&m.set(_e,hv(h.subTree))};return Ip(te),t_(te),n_(()=>{m.forEach(Y=>{const{subTree:ie,suspense:ke}=h,V=hv(ie);if(Y.type===V.type){uv(V);const Ne=V.component.da;Ne&&Vo(Ne,ke);return}j(Y)})}),()=>{if(_e=null,!l.default)return null;const Y=l.default(),ie=Y[0];if(Y.length>1)return w=null,Y;if(!wl(ie)||!(ie.shapeFlag&4)&&!(ie.shapeFlag&128))return w=null,ie;let ke=hv(ie);const V=ke.type,Ne=Lv(Sc(ke)?ke.type.__asyncResolved||{}:V),{include:we,exclude:he,max:Me}=s;if(we&&(!Ne||!ep(we,Ne))||he&&Ne&&ep(he,Ne))return w=ke,ie;const Fe=ke.key==null?V:ke.key,Ke=m.get(Fe);return ke.el&&(ke=wr(ke),ie.shapeFlag&128&&(ie.ssContent=ke)),_e=Fe,Ke?(ke.el=Ke.el,ke.component=Ke.component,ke.transition&&Pc(ke,ke.transition),ke.shapeFlag|=512,y.delete(Fe),y.add(Fe)):(y.add(Fe),Me&&y.size>parseInt(Me,10)&&le(y.values().next().value)),ke.shapeFlag|=256,w=ke,ax(ie.type)?ie:ke}}},iM=oM;function ep(s,l){return ct(s)?s.some(h=>ep(h,l)):Jn(s)?s.split(",").includes(l):s.test?s.test(l):!1}function hx(s,l){px(s,"a",l)}function fx(s,l){px(s,"da",l)}function px(s,l,h=vo){const g=s.__wdc||(s.__wdc=()=>{let m=h;for(;m;){if(m.isDeactivated)return;m=m.parent}return s()});if(e_(l,g,h),h){let m=h.parent;for(;m&&m.parent;)Sp(m.parent.vnode)&&sM(g,l,h,m),m=m.parent}}function sM(s,l,h,g){const m=e_(l,s,g,!0);o_(()=>{Qv(g[l],m)},h)}function uv(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function hv(s){return s.shapeFlag&128?s.ssContent:s}function e_(s,l,h=vo,g=!1){if(h){const m=h[s]||(h[s]=[]),y=l.__weh||(l.__weh=(...w)=>{if(h.isUnmounted)return;Mu(),kl(h);const v=Ni(l,h,s,w);return gl(),Pu(),v});return g?m.unshift(y):m.push(y),y}}const ha=s=>(l,h=vo)=>(!Du||s==="sp")&&e_(s,(...g)=>l(...g),h),mx=ha("bm"),Ip=ha("m"),gx=ha("bu"),t_=ha("u"),n_=ha("bum"),o_=ha("um"),bx=ha("sp"),_x=ha("rtg"),wx=ha("rtc");function kx(s,l=vo){e_("ec",s,l)}function Pe(s,l){const h=Uo;if(h===null)return s;const g=s_(h)||h.proxy,m=s.dirs||(s.dirs=[]);for(let y=0;y<l.length;y++){let[w,v,A,T=Mn]=l[y];w&&(Nt(w)&&(w={mounted:w,updated:w}),w.deep&&xc(v),m.push({dir:w,instance:g,value:v,oldValue:void 0,arg:A,modifiers:T}))}return s}function mr(s,l,h,g){const m=s.dirs,y=l&&l.dirs;for(let w=0;w<m.length;w++){const v=m[w];y&&(v.oldValue=y[w].value);let A=v.dir[g];A&&(Mu(),Ni(A,h,8,[s.el,v,s,l]),Pu())}}const py="components",rM="directives";function et(s,l){return my(py,s,!0,l)||s}const vx=Symbol();function yx(s){return Jn(s)?my(py,s,!1)||s:s||vx}function aM(s){return my(rM,s)}function my(s,l,h=!0,g=!1){const m=Uo||vo;if(m){const y=m.type;if(s===py){const v=Lv(y,!1);if(v&&(v===l||v===wi(l)||v===xp(wi(l))))return y}const w=RC(m[s]||y[s],l)||RC(m.appContext[s],l);return!w&&g?y:w}}function RC(s,l){return s&&(s[l]||s[wi(l)]||s[xp(wi(l))])}function Pt(s,l,h,g){let m;const y=h&&h[g];if(ct(s)||Jn(s)){m=new Array(s.length);for(let w=0,v=s.length;w<v;w++)m[w]=l(s[w],w,void 0,y&&y[w])}else if(typeof s=="number"){m=new Array(s);for(let w=0;w<s;w++)m[w]=l(w+1,w,void 0,y&&y[w])}else if(Pn(s))if(s[Symbol.iterator])m=Array.from(s,(w,v)=>l(w,v,void 0,y&&y[v]));else{const w=Object.keys(s);m=new Array(w.length);for(let v=0,A=w.length;v<A;v++){const T=w[v];m[v]=l(s[T],T,v,y&&y[v])}}else m=[];return h&&(h[g]=m),m}function lM(s,l){for(let h=0;h<l.length;h++){const g=l[h];if(ct(g))for(let m=0;m<g.length;m++)s[g[m].name]=g[m].fn;else g&&(s[g.name]=g.key?(...m)=>{const y=g.fn(...m);return y&&(y.key=g.key),y}:g.fn)}return s}function gy(s,l,h={},g,m){if(Uo.isCE||Uo.parent&&Sc(Uo.parent)&&Uo.parent.isCE)return l!=="default"&&(h.name=l),ce("slot",h,g&&g());let y=s[l];y&&y._c&&(y._d=!1),re();const w=y&&Ax(y(h)),v=Bi(rt,{key:h.key||w&&w.key||`_${l}`},w||(g?g():[]),w&&s._===1?64:-2);return!m&&v.scopeId&&(v.slotScopeIds=[v.scopeId+"-s"]),y&&y._c&&(y._d=!0),v}function Ax(s){return s.some(l=>wl(l)?!(l.type===ti||l.type===rt&&!Ax(l.children)):!0)?s:null}function cM(s,l){const h={};for(const g in s)h[l&&/[A-Z]/.test(g)?`on:${g}`:np(g)]=s[g];return h}const Dv=s=>s?$x(s)?s_(s)||s.proxy:Dv(s.parent):null,sp=no(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Dv(s.parent),$root:s=>Dv(s.root),$emit:s=>s.emit,$options:s=>by(s),$forceUpdate:s=>s.f||(s.f=()=>Qb(s.update)),$nextTick:s=>s.n||(s.n=Yb.bind(s.proxy)),$watch:s=>eM.bind(s)}),fv=(s,l)=>s!==Mn&&!s.__isScriptSetup&&on(s,l),Tv={get({_:s},l){const{ctx:h,setupState:g,data:m,props:y,accessCache:w,type:v,appContext:A}=s;let T;if(l[0]!=="$"){const j=w[l];if(j!==void 0)switch(j){case 1:return g[l];case 2:return m[l];case 4:return h[l];case 3:return y[l]}else{if(fv(g,l))return w[l]=1,g[l];if(m!==Mn&&on(m,l))return w[l]=2,m[l];if((T=s.propsOptions[0])&&on(T,l))return w[l]=3,y[l];if(h!==Mn&&on(h,l))return w[l]=4,h[l];Sv&&(w[l]=0)}}const P=sp[l];let N,M;if(P)return l==="$attrs"&&Li(s,"get",l),P(s);if((N=v.__cssModules)&&(N=N[l]))return N;if(h!==Mn&&on(h,l))return w[l]=4,h[l];if(M=A.config.globalProperties,on(M,l))return M[l]},set({_:s},l,h){const{data:g,setupState:m,ctx:y}=s;return fv(m,l)?(m[l]=h,!0):g!==Mn&&on(g,l)?(g[l]=h,!0):on(s.props,l)||l[0]==="$"&&l.slice(1)in s?!1:(y[l]=h,!0)},has({_:{data:s,setupState:l,accessCache:h,ctx:g,appContext:m,propsOptions:y}},w){let v;return!!h[w]||s!==Mn&&on(s,w)||fv(l,w)||(v=y[0])&&on(v,w)||on(g,w)||on(sp,w)||on(m.config.globalProperties,w)},defineProperty(s,l,h){return h.get!=null?s._.accessCache[l]=0:on(h,"value")&&this.set(s,l,h.value,null),Reflect.defineProperty(s,l,h)}},dM=no({},Tv,{get(s,l){if(l!==Symbol.unscopables)return Tv.get(s,l,s)},has(s,l){return l[0]!=="_"&&!PS(l)}});let Sv=!0;function uM(s){const l=by(s),h=s.proxy,g=s.ctx;Sv=!1,l.beforeCreate&&zC(l.beforeCreate,s,"bc");const{data:m,computed:y,methods:w,watch:v,provide:A,inject:T,created:P,beforeMount:N,mounted:M,beforeUpdate:j,updated:ee,activated:le,deactivated:_e,beforeDestroy:te,beforeUnmount:Y,destroyed:ie,unmounted:ke,render:V,renderTracked:Ne,renderTriggered:we,errorCaptured:he,serverPrefetch:Me,expose:Fe,inheritAttrs:Ke,components:Q,directives:nt,filters:Le}=l;if(T&&hM(T,g,null,s.appContext.config.unwrapInjectedRef),w)for(const it in w){const yt=w[it];Nt(yt)&&(g[it]=yt.bind(h))}if(m){const it=m.call(h,h);Pn(it)&&(s.data=Nu(it))}if(Sv=!0,y)for(const it in y){const yt=y[it],oo=Nt(yt)?yt.bind(h,h):Nt(yt.get)?yt.get.bind(h,h):Ls,$n=!Nt(yt)&&Nt(yt.set)?yt.set.bind(h):Ls,un=Pi({get:oo,set:$n});Object.defineProperty(g,it,{enumerable:!0,configurable:!0,get:()=>un.value,set:Rn=>un.value=Rn})}if(v)for(const it in v)Cx(v[it],g,h,it);if(A){const it=Nt(A)?A.call(h):A;Reflect.ownKeys(it).forEach(yt=>{ip(yt,it[yt])})}P&&zC(P,s,"c");function Qe(it,yt){ct(yt)?yt.forEach(oo=>it(oo.bind(h))):yt&&it(yt.bind(h))}if(Qe(mx,N),Qe(Ip,M),Qe(gx,j),Qe(t_,ee),Qe(hx,le),Qe(fx,_e),Qe(kx,he),Qe(wx,Ne),Qe(_x,we),Qe(n_,Y),Qe(o_,ke),Qe(bx,Me),ct(Fe))if(Fe.length){const it=s.exposed||(s.exposed={});Fe.forEach(yt=>{Object.defineProperty(it,yt,{get:()=>h[yt],set:oo=>h[yt]=oo})})}else s.exposed||(s.exposed={});V&&s.render===Ls&&(s.render=V),Ke!=null&&(s.inheritAttrs=Ke),Q&&(s.components=Q),nt&&(s.directives=nt)}function hM(s,l,h=Ls,g=!1){ct(s)&&(s=Iv(s));for(const m in s){const y=s[m];let w;Pn(y)?"default"in y?w=_r(y.from||m,y.default,!0):w=_r(y.from||m):w=_r(y),Po(w)&&g?Object.defineProperty(l,m,{enumerable:!0,configurable:!0,get:()=>w.value,set:v=>w.value=v}):l[m]=w}}function zC(s,l,h){Ni(ct(s)?s.map(g=>g.bind(l.proxy)):s.bind(l.proxy),l,h)}function Cx(s,l,h,g){const m=g.includes(".")?dx(h,g):()=>h[g];if(Jn(s)){const y=l[s];Nt(y)&&Cu(m,y)}else if(Nt(s))Cu(m,s.bind(h));else if(Pn(s))if(ct(s))s.forEach(y=>Cx(y,l,h,g));else{const y=Nt(s.handler)?s.handler.bind(h):l[s.handler];Nt(y)&&Cu(m,y,s)}}function by(s){const l=s.type,{mixins:h,extends:g}=l,{mixins:m,optionsCache:y,config:{optionMergeStrategies:w}}=s.appContext,v=y.get(l);let A;return v?A=v:!m.length&&!h&&!g?A=l:(A={},m.length&&m.forEach(T=>Lb(A,T,w,!0)),Lb(A,l,w)),Pn(l)&&y.set(l,A),A}function Lb(s,l,h,g=!1){const{mixins:m,extends:y}=l;y&&Lb(s,y,h,!0),m&&m.forEach(w=>Lb(s,w,h,!0));for(const w in l)if(!(g&&w==="expose")){const v=fM[w]||h&&h[w];s[w]=v?v(s[w],l[w]):l[w]}return s}const fM={data:jC,props:yc,emits:yc,methods:yc,computed:yc,beforeCreate:ci,created:ci,beforeMount:ci,mounted:ci,beforeUpdate:ci,updated:ci,beforeDestroy:ci,beforeUnmount:ci,destroyed:ci,unmounted:ci,activated:ci,deactivated:ci,errorCaptured:ci,serverPrefetch:ci,components:yc,directives:yc,watch:mM,provide:jC,inject:pM};function jC(s,l){return l?s?function(){return no(Nt(s)?s.call(this,this):s,Nt(l)?l.call(this,this):l)}:l:s}function pM(s,l){return yc(Iv(s),Iv(l))}function Iv(s){if(ct(s)){const l={};for(let h=0;h<s.length;h++)l[s[h]]=s[h];return l}return s}function ci(s,l){return s?[...new Set([].concat(s,l))]:l}function yc(s,l){return s?no(no(Object.create(null),s),l):l}function mM(s,l){if(!s)return l;if(!l)return s;const h=no(Object.create(null),s);for(const g in l)h[g]=ci(s[g],l[g]);return h}function gM(s,l,h,g=!1){const m={},y={};Bb(y,i_,1),s.propsDefaults=Object.create(null),xx(s,l,m,y);for(const w in s.propsOptions[0])w in m||(m[w]=void 0);h?s.props=g?m:Z1(m):s.type.props?s.props=m:s.props=y,s.attrs=y}function bM(s,l,h,g){const{props:m,attrs:y,vnode:{patchFlag:w}}=s,v=rn(m),[A]=s.propsOptions;let T=!1;if((g||w>0)&&!(w&16)){if(w&8){const P=s.vnode.dynamicProps;for(let N=0;N<P.length;N++){let M=P[N];if(Zb(s.emitsOptions,M))continue;const j=l[M];if(A)if(on(y,M))j!==y[M]&&(y[M]=j,T=!0);else{const ee=wi(M);m[ee]=Mv(A,v,ee,j,s,!1)}else j!==y[M]&&(y[M]=j,T=!0)}}}else{xx(s,l,m,y)&&(T=!0);let P;for(const N in v)(!l||!on(l,N)&&((P=as(N))===N||!on(l,P)))&&(A?h&&(h[N]!==void 0||h[P]!==void 0)&&(m[N]=Mv(A,v,N,void 0,s,!0)):delete m[N]);if(y!==v)for(const N in y)(!l||!on(l,N)&&!0)&&(delete y[N],T=!0)}T&&ua(s,"set","$attrs")}function xx(s,l,h,g){const[m,y]=s.propsOptions;let w=!1,v;if(l)for(let A in l){if(tp(A))continue;const T=l[A];let P;m&&on(m,P=wi(A))?!y||!y.includes(P)?h[P]=T:(v||(v={}))[P]=T:Zb(s.emitsOptions,A)||(!(A in g)||T!==g[A])&&(g[A]=T,w=!0)}if(y){const A=rn(h),T=v||Mn;for(let P=0;P<y.length;P++){const N=y[P];h[N]=Mv(m,A,N,T[N],s,!on(T,N))}}return w}function Mv(s,l,h,g,m,y){const w=s[h];if(w!=null){const v=on(w,"default");if(v&&g===void 0){const A=w.default;if(w.type!==Function&&Nt(A)){const{propsDefaults:T}=m;h in T?g=T[h]:(kl(m),g=T[h]=A.call(null,l),gl())}else g=A}w[0]&&(y&&!v?g=!1:w[1]&&(g===""||g===as(h))&&(g=!0))}return g}function Ex(s,l,h=!1){const g=l.propsCache,m=g.get(s);if(m)return m;const y=s.props,w={},v=[];let A=!1;if(!Nt(s)){const P=N=>{A=!0;const[M,j]=Ex(N,l,!0);no(w,M),j&&v.push(...j)};!h&&l.mixins.length&&l.mixins.forEach(P),s.extends&&P(s.extends),s.mixins&&s.mixins.forEach(P)}if(!y&&!A)return Pn(s)&&g.set(s,wu),wu;if(ct(y))for(let P=0;P<y.length;P++){const N=wi(y[P]);FC(N)&&(w[N]=Mn)}else if(y)for(const P in y){const N=wi(P);if(FC(N)){const M=y[P],j=w[N]=ct(M)||Nt(M)?{type:M}:Object.assign({},M);if(j){const ee=UC(Boolean,j.type),le=UC(String,j.type);j[0]=ee>-1,j[1]=le<0||ee<le,(ee>-1||on(j,"default"))&&v.push(N)}}}const T=[w,v];return Pn(s)&&g.set(s,T),T}function FC(s){return s[0]!=="$"}function $C(s){const l=s&&s.toString().match(/^\s*function (\w+)/);return l?l[1]:s===null?"null":""}function VC(s,l){return $C(s)===$C(l)}function UC(s,l){return ct(l)?l.findIndex(h=>VC(h,s)):Nt(l)&&VC(l,s)?0:-1}const Dx=s=>s[0]==="_"||s==="$stable",_y=s=>ct(s)?s.map(Ii):[Ii(s)],_M=(s,l,h)=>{if(l._n)return l;const g=je((...m)=>_y(l(...m)),h);return g._c=!1,g},Tx=(s,l,h)=>{const g=s._ctx;for(const m in s){if(Dx(m))continue;const y=s[m];if(Nt(y))l[m]=_M(m,y,g);else if(y!=null){const w=_y(y);l[m]=()=>w}}},Sx=(s,l)=>{const h=_y(l);s.slots.default=()=>h},wM=(s,l)=>{if(s.vnode.shapeFlag&32){const h=l._;h?(s.slots=rn(l),Bb(l,"_",h)):Tx(l,s.slots={})}else s.slots={},l&&Sx(s,l);Bb(s.slots,i_,1)},kM=(s,l,h)=>{const{vnode:g,slots:m}=s;let y=!0,w=Mn;if(g.shapeFlag&32){const v=l._;v?h&&v===1?y=!1:(no(m,l),!h&&v===1&&delete m._):(y=!l.$stable,Tx(l,m)),w=l}else l&&(Sx(s,l),w={default:1});if(y)for(const v in m)!Dx(v)&&!(v in w)&&delete m[v]};function Ix(){return{app:null,config:{isNativeTag:$S,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vM=0;function yM(s,l){return function(g,m=null){Nt(g)||(g=Object.assign({},g)),m!=null&&!Pn(m)&&(m=null);const y=Ix(),w=new Set;let v=!1;const A=y.app={_uid:vM++,_component:g,_props:m,_container:null,_context:y,_instance:null,version:Yx,get config(){return y.config},set config(T){},use(T,...P){return w.has(T)||(T&&Nt(T.install)?(w.add(T),T.install(A,...P)):Nt(T)&&(w.add(T),T(A,...P))),A},mixin(T){return y.mixins.includes(T)||y.mixins.push(T),A},component(T,P){return P?(y.components[T]=P,A):y.components[T]},directive(T,P){return P?(y.directives[T]=P,A):y.directives[T]},mount(T,P,N){if(!v){const M=ce(g,m);return M.appContext=y,P&&l?l(M,T):s(M,T,N),v=!0,A._container=T,T.__vue_app__=A,s_(M.component)||M.component.proxy}},unmount(){v&&(s(null,A._container),delete A._container.__vue_app__)},provide(T,P){return y.provides[T]=P,A}};return A}}function Rb(s,l,h,g,m=!1){if(ct(s)){s.forEach((M,j)=>Rb(M,l&&(ct(l)?l[j]:l),h,g,m));return}if(Sc(g)&&!m)return;const y=g.shapeFlag&4?s_(g.component)||g.component.proxy:g.el,w=m?null:y,{i:v,r:A}=s,T=l&&l.r,P=v.refs===Mn?v.refs={}:v.refs,N=v.setupState;if(T!=null&&T!==A&&(Jn(T)?(P[T]=null,on(N,T)&&(N[T]=null)):Po(T)&&(T.value=null)),Nt(A))aa(A,v,12,[w,P]);else{const M=Jn(A),j=Po(A);if(M||j){const ee=()=>{if(s.f){const le=M?on(N,A)?N[A]:P[A]:A.value;m?ct(le)&&Qv(le,y):ct(le)?le.includes(y)||le.push(y):M?(P[A]=[y],on(N,A)&&(N[A]=P[A])):(A.value=[y],s.k&&(P[s.k]=A.value))}else M?(P[A]=w,on(N,A)&&(N[A]=w)):j&&(A.value=w,s.k&&(P[s.k]=w))};w?(ee.id=-1,Vo(ee,h)):ee()}}}let al=!1;const Ab=s=>/svg/.test(s.namespaceURI)&&s.tagName!=="foreignObject",Cb=s=>s.nodeType===8;function AM(s){const{mt:l,p:h,o:{patchProp:g,createText:m,nextSibling:y,parentNode:w,remove:v,insert:A,createComment:T}}=s,P=(te,Y)=>{if(!Y.hasChildNodes()){h(null,te,Y),Ob(),Y._vnode=te;return}al=!1,N(Y.firstChild,te,null,null,null),Ob(),Y._vnode=te,al&&console.error("Hydration completed but contains mismatches.")},N=(te,Y,ie,ke,V,Ne=!1)=>{const we=Cb(te)&&te.data==="[",he=()=>le(te,Y,ie,ke,V,we),{type:Me,ref:Fe,shapeFlag:Ke,patchFlag:Q}=Y;let nt=te.nodeType;Y.el=te,Q===-2&&(Ne=!1,Y.dynamicChildren=null);let Le=null;switch(Me){case Nc:nt!==3?Y.children===""?(A(Y.el=m(""),w(te),te),Le=te):Le=he():(te.data!==Y.children&&(al=!0,te.data=Y.children),Le=y(te));break;case ti:nt!==8||we?Le=he():Le=y(te);break;case Ic:if(we&&(te=y(te),nt=te.nodeType),nt===1||nt===3){Le=te;const Ut=!Y.children.length;for(let Qe=0;Qe<Y.staticCount;Qe++)Ut&&(Y.children+=Le.nodeType===1?Le.outerHTML:Le.data),Qe===Y.staticCount-1&&(Y.anchor=Le),Le=y(Le);return we?y(Le):Le}else he();break;case rt:we?Le=ee(te,Y,ie,ke,V,Ne):Le=he();break;default:if(Ke&1)nt!==1||Y.type.toLowerCase()!==te.tagName.toLowerCase()?Le=he():Le=M(te,Y,ie,ke,V,Ne);else if(Ke&6){Y.slotScopeIds=V;const Ut=w(te);if(l(Y,Ut,null,ie,ke,Ab(Ut),Ne),Le=we?_e(te):y(te),Le&&Cb(Le)&&Le.data==="teleport end"&&(Le=y(Le)),Sc(Y)){let Qe;we?(Qe=ce(rt),Qe.anchor=Le?Le.previousSibling:Ut.lastChild):Qe=te.nodeType===3?H(""):ce("div"),Qe.el=te,Y.component.subTree=Qe}}else Ke&64?nt!==8?Le=he():Le=Y.type.hydrate(te,Y,ie,ke,V,Ne,s,j):Ke&128&&(Le=Y.type.hydrate(te,Y,ie,ke,Ab(w(te)),V,Ne,s,N))}return Fe!=null&&Rb(Fe,null,ke,Y),Le},M=(te,Y,ie,ke,V,Ne)=>{Ne=Ne||!!Y.dynamicChildren;const{type:we,props:he,patchFlag:Me,shapeFlag:Fe,dirs:Ke}=Y,Q=we==="input"&&Ke||we==="option";if(Q||Me!==-1){if(Ke&&mr(Y,null,ie,"created"),he)if(Q||!Ne||Me&48)for(const Le in he)(Q&&Le.endsWith("value")||Ap(Le)&&!tp(Le))&&g(te,Le,null,he[Le],!1,void 0,ie);else he.onClick&&g(te,"onClick",null,he.onClick,!1,void 0,ie);let nt;if((nt=he&&he.onVnodeBeforeMount)&&mi(nt,ie,Y),Ke&&mr(Y,null,ie,"beforeMount"),((nt=he&&he.onVnodeMounted)||Ke)&&lx(()=>{nt&&mi(nt,ie,Y),Ke&&mr(Y,null,ie,"mounted")},ke),Fe&16&&!(he&&(he.innerHTML||he.textContent))){let Le=j(te.firstChild,Y,te,ie,ke,V,Ne);for(;Le;){al=!0;const Ut=Le;Le=Le.nextSibling,v(Ut)}}else Fe&8&&te.textContent!==Y.children&&(al=!0,te.textContent=Y.children)}return te.nextSibling},j=(te,Y,ie,ke,V,Ne,we)=>{we=we||!!Y.dynamicChildren;const he=Y.children,Me=he.length;for(let Fe=0;Fe<Me;Fe++){const Ke=we?he[Fe]:he[Fe]=Ii(he[Fe]);if(te)te=N(te,Ke,ke,V,Ne,we);else{if(Ke.type===Nc&&!Ke.children)continue;al=!0,h(null,Ke,ie,null,ke,V,Ab(ie),Ne)}}return te},ee=(te,Y,ie,ke,V,Ne)=>{const{slotScopeIds:we}=Y;we&&(V=V?V.concat(we):we);const he=w(te),Me=j(y(te),Y,he,ie,ke,V,Ne);return Me&&Cb(Me)&&Me.data==="]"?y(Y.anchor=Me):(al=!0,A(Y.anchor=T("]"),he,Me),Me)},le=(te,Y,ie,ke,V,Ne)=>{if(al=!0,Y.el=null,Ne){const Me=_e(te);for(;;){const Fe=y(te);if(Fe&&Fe!==Me)v(Fe);else break}}const we=y(te),he=w(te);return v(te),h(null,Y,he,we,ie,ke,Ab(he),V),we},_e=te=>{let Y=0;for(;te;)if(te=y(te),te&&Cb(te)&&(te.data==="["&&Y++,te.data==="]")){if(Y===0)return y(te);Y--}return te};return[P,N]}const Vo=lx;function Mx(s){return Nx(s)}function Px(s){return Nx(s,AM)}function Nx(s,l){const h=GS();h.__VUE__=!0;const{insert:g,remove:m,patchProp:y,createElement:w,createText:v,createComment:A,setText:T,setElementText:P,parentNode:N,nextSibling:M,setScopeId:j=Ls,insertStaticContent:ee}=s,le=(q,Z,de,ge=null,Ce=null,ze=null,Ve=!1,ve=null,Se=!!Z.dynamicChildren)=>{if(q===Z)return;q&&!br(q,Z)&&(ge=Be(q),Rn(q,Ce,ze,!0),q=null),Z.patchFlag===-2&&(Se=!1,Z.dynamicChildren=null);const{type:xe,ref:ot,shapeFlag:Ge}=Z;switch(xe){case Nc:_e(q,Z,de,ge);break;case ti:te(q,Z,de,ge);break;case Ic:q==null&&Y(Z,de,ge,Ve);break;case rt:Q(q,Z,de,ge,Ce,ze,Ve,ve,Se);break;default:Ge&1?V(q,Z,de,ge,Ce,ze,Ve,ve,Se):Ge&6?nt(q,Z,de,ge,Ce,ze,Ve,ve,Se):(Ge&64||Ge&128)&&xe.process(q,Z,de,ge,Ce,ze,Ve,ve,Se,ht)}ot!=null&&Ce&&Rb(ot,q&&q.ref,ze,Z||q,!Z)},_e=(q,Z,de,ge)=>{if(q==null)g(Z.el=v(Z.children),de,ge);else{const Ce=Z.el=q.el;Z.children!==q.children&&T(Ce,Z.children)}},te=(q,Z,de,ge)=>{q==null?g(Z.el=A(Z.children||""),de,ge):Z.el=q.el},Y=(q,Z,de,ge)=>{[q.el,q.anchor]=ee(q.children,Z,de,ge,q.el,q.anchor)},ie=({el:q,anchor:Z},de,ge)=>{let Ce;for(;q&&q!==Z;)Ce=M(q),g(q,de,ge),q=Ce;g(Z,de,ge)},ke=({el:q,anchor:Z})=>{let de;for(;q&&q!==Z;)de=M(q),m(q),q=de;m(Z)},V=(q,Z,de,ge,Ce,ze,Ve,ve,Se)=>{Ve=Ve||Z.type==="svg",q==null?Ne(Z,de,ge,Ce,ze,Ve,ve,Se):Me(q,Z,Ce,ze,Ve,ve,Se)},Ne=(q,Z,de,ge,Ce,ze,Ve,ve)=>{let Se,xe;const{type:ot,props:Ge,shapeFlag:qe,transition:at,dirs:Je}=q;if(Se=q.el=w(q.type,ze,Ge&&Ge.is,Ge),qe&8?P(Se,q.children):qe&16&&he(q.children,Se,null,ge,Ce,ze&&ot!=="foreignObject",Ve,ve),Je&&mr(q,null,ge,"created"),Ge){for(const kt in Ge)kt!=="value"&&!tp(kt)&&y(Se,kt,null,Ge[kt],ze,q.children,ge,Ce,Te);"value"in Ge&&y(Se,"value",null,Ge.value),(xe=Ge.onVnodeBeforeMount)&&mi(xe,ge,q)}we(Se,q,q.scopeId,Ve,ge),Je&&mr(q,null,ge,"beforeMount");const It=(!Ce||Ce&&!Ce.pendingBranch)&&at&&!at.persisted;It&&at.beforeEnter(Se),g(Se,Z,de),((xe=Ge&&Ge.onVnodeMounted)||It||Je)&&Vo(()=>{xe&&mi(xe,ge,q),It&&at.enter(Se),Je&&mr(q,null,ge,"mounted")},Ce)},we=(q,Z,de,ge,Ce)=>{if(de&&j(q,de),ge)for(let ze=0;ze<ge.length;ze++)j(q,ge[ze]);if(Ce){let ze=Ce.subTree;if(Z===ze){const Ve=Ce.vnode;we(q,Ve,Ve.scopeId,Ve.slotScopeIds,Ce.parent)}}},he=(q,Z,de,ge,Ce,ze,Ve,ve,Se=0)=>{for(let xe=Se;xe<q.length;xe++){const ot=q[xe]=ve?fl(q[xe]):Ii(q[xe]);le(null,ot,Z,de,ge,Ce,ze,Ve,ve)}},Me=(q,Z,de,ge,Ce,ze,Ve)=>{const ve=Z.el=q.el;let{patchFlag:Se,dynamicChildren:xe,dirs:ot}=Z;Se|=q.patchFlag&16;const Ge=q.props||Mn,qe=Z.props||Mn;let at;de&&kc(de,!1),(at=qe.onVnodeBeforeUpdate)&&mi(at,de,Z,q),ot&&mr(Z,q,de,"beforeUpdate"),de&&kc(de,!0);const Je=Ce&&Z.type!=="foreignObject";if(xe?Fe(q.dynamicChildren,xe,ve,de,ge,Je,ze):Ve||yt(q,Z,ve,null,de,ge,Je,ze,!1),Se>0){if(Se&16)Ke(ve,Z,Ge,qe,de,ge,Ce);else if(Se&2&&Ge.class!==qe.class&&y(ve,"class",null,qe.class,Ce),Se&4&&y(ve,"style",Ge.style,qe.style,Ce),Se&8){const It=Z.dynamicProps;for(let kt=0;kt<It.length;kt++){const an=It[kt],Gt=Ge[an],kn=qe[an];(kn!==Gt||an==="value")&&y(ve,an,Gt,kn,Ce,q.children,de,ge,Te)}}Se&1&&q.children!==Z.children&&P(ve,Z.children)}else!Ve&&xe==null&&Ke(ve,Z,Ge,qe,de,ge,Ce);((at=qe.onVnodeUpdated)||ot)&&Vo(()=>{at&&mi(at,de,Z,q),ot&&mr(Z,q,de,"updated")},ge)},Fe=(q,Z,de,ge,Ce,ze,Ve)=>{for(let ve=0;ve<Z.length;ve++){const Se=q[ve],xe=Z[ve],ot=Se.el&&(Se.type===rt||!br(Se,xe)||Se.shapeFlag&70)?N(Se.el):de;le(Se,xe,ot,null,ge,Ce,ze,Ve,!0)}},Ke=(q,Z,de,ge,Ce,ze,Ve)=>{if(de!==ge){if(de!==Mn)for(const ve in de)!tp(ve)&&!(ve in ge)&&y(q,ve,de[ve],null,Ve,Z.children,Ce,ze,Te);for(const ve in ge){if(tp(ve))continue;const Se=ge[ve],xe=de[ve];Se!==xe&&ve!=="value"&&y(q,ve,xe,Se,Ve,Z.children,Ce,ze,Te)}"value"in ge&&y(q,"value",de.value,ge.value)}},Q=(q,Z,de,ge,Ce,ze,Ve,ve,Se)=>{const xe=Z.el=q?q.el:v(""),ot=Z.anchor=q?q.anchor:v("");let{patchFlag:Ge,dynamicChildren:qe,slotScopeIds:at}=Z;at&&(ve=ve?ve.concat(at):at),q==null?(g(xe,de,ge),g(ot,de,ge),he(Z.children,de,ot,Ce,ze,Ve,ve,Se)):Ge>0&&Ge&64&&qe&&q.dynamicChildren?(Fe(q.dynamicChildren,qe,de,Ce,ze,Ve,ve),(Z.key!=null||Ce&&Z===Ce.subTree)&&wy(q,Z,!0)):yt(q,Z,de,ot,Ce,ze,Ve,ve,Se)},nt=(q,Z,de,ge,Ce,ze,Ve,ve,Se)=>{Z.slotScopeIds=ve,q==null?Z.shapeFlag&512?Ce.ctx.activate(Z,de,ge,Ve,Se):Le(Z,de,ge,Ce,ze,Ve,Se):Ut(q,Z,Se)},Le=(q,Z,de,ge,Ce,ze,Ve)=>{const ve=q.component=Fx(q,ge,Ce);if(Sp(q)&&(ve.ctx.renderer=ht),Vx(ve),ve.asyncDep){if(Ce&&Ce.registerDep(ve,Qe),!q.el){const Se=ve.subTree=ce(ti);te(null,Se,Z,de)}return}Qe(ve,q,Z,de,Ce,ze,Ve)},Ut=(q,Z,de)=>{const ge=Z.component=q.component;if(qI(q,Z,de))if(ge.asyncDep&&!ge.asyncResolved){it(ge,Z,de);return}else ge.next=Z,zI(ge.update),ge.update();else Z.el=q.el,ge.vnode=Z},Qe=(q,Z,de,ge,Ce,ze,Ve)=>{const ve=()=>{if(q.isMounted){let{next:ot,bu:Ge,u:qe,parent:at,vnode:Je}=q,It=ot,kt;kc(q,!1),ot?(ot.el=Je.el,it(q,ot,Ve)):ot=Je,Ge&&vu(Ge),(kt=ot.props&&ot.props.onVnodeBeforeUpdate)&&mi(kt,at,ot,Je),kc(q,!0);const an=Tb(q),Gt=q.subTree;q.subTree=an,le(Gt,an,N(Gt.el),Be(Gt),q,Ce,ze),ot.el=an.el,It===null&&dy(q,an.el),qe&&Vo(qe,Ce),(kt=ot.props&&ot.props.onVnodeUpdated)&&Vo(()=>mi(kt,at,ot,Je),Ce)}else{let ot;const{el:Ge,props:qe}=Z,{bm:at,m:Je,parent:It}=q,kt=Sc(Z);if(kc(q,!1),at&&vu(at),!kt&&(ot=qe&&qe.onVnodeBeforeMount)&&mi(ot,It,Z),kc(q,!0),Ge&&Ze){const an=()=>{q.subTree=Tb(q),Ze(Ge,q.subTree,q,Ce,null)};kt?Z.type.__asyncLoader().then(()=>!q.isUnmounted&&an()):an()}else{const an=q.subTree=Tb(q);le(null,an,de,ge,q,Ce,ze),Z.el=an.el}if(Je&&Vo(Je,Ce),!kt&&(ot=qe&&qe.onVnodeMounted)){const an=Z;Vo(()=>mi(ot,It,an),Ce)}(Z.shapeFlag&256||It&&Sc(It.vnode)&&It.vnode.shapeFlag&256)&&q.a&&Vo(q.a,Ce),q.isMounted=!0,Z=de=ge=null}},Se=q.effect=new Ep(ve,()=>Qb(xe),q.scope),xe=q.update=()=>Se.run();xe.id=q.uid,kc(q,!0),xe()},it=(q,Z,de)=>{Z.component=q;const ge=q.vnode.props;q.vnode=Z,q.next=null,bM(q,Z.props,ge,de),kM(q,Z.children,de),Mu(),NC(),Pu()},yt=(q,Z,de,ge,Ce,ze,Ve,ve,Se=!1)=>{const xe=q&&q.children,ot=q?q.shapeFlag:0,Ge=Z.children,{patchFlag:qe,shapeFlag:at}=Z;if(qe>0){if(qe&128){$n(xe,Ge,de,ge,Ce,ze,Ve,ve,Se);return}else if(qe&256){oo(xe,Ge,de,ge,Ce,ze,Ve,ve,Se);return}}at&8?(ot&16&&Te(xe,Ce,ze),Ge!==xe&&P(de,Ge)):ot&16?at&16?$n(xe,Ge,de,ge,Ce,ze,Ve,ve,Se):Te(xe,Ce,ze,!0):(ot&8&&P(de,""),at&16&&he(Ge,de,ge,Ce,ze,Ve,ve,Se))},oo=(q,Z,de,ge,Ce,ze,Ve,ve,Se)=>{q=q||wu,Z=Z||wu;const xe=q.length,ot=Z.length,Ge=Math.min(xe,ot);let qe;for(qe=0;qe<Ge;qe++){const at=Z[qe]=Se?fl(Z[qe]):Ii(Z[qe]);le(q[qe],at,de,null,Ce,ze,Ve,ve,Se)}xe>ot?Te(q,Ce,ze,!0,!1,Ge):he(Z,de,ge,Ce,ze,Ve,ve,Se,Ge)},$n=(q,Z,de,ge,Ce,ze,Ve,ve,Se)=>{let xe=0;const ot=Z.length;let Ge=q.length-1,qe=ot-1;for(;xe<=Ge&&xe<=qe;){const at=q[xe],Je=Z[xe]=Se?fl(Z[xe]):Ii(Z[xe]);if(br(at,Je))le(at,Je,de,null,Ce,ze,Ve,ve,Se);else break;xe++}for(;xe<=Ge&&xe<=qe;){const at=q[Ge],Je=Z[qe]=Se?fl(Z[qe]):Ii(Z[qe]);if(br(at,Je))le(at,Je,de,null,Ce,ze,Ve,ve,Se);else break;Ge--,qe--}if(xe>Ge){if(xe<=qe){const at=qe+1,Je=at<ot?Z[at].el:ge;for(;xe<=qe;)le(null,Z[xe]=Se?fl(Z[xe]):Ii(Z[xe]),de,Je,Ce,ze,Ve,ve,Se),xe++}}else if(xe>qe)for(;xe<=Ge;)Rn(q[xe],Ce,ze,!0),xe++;else{const at=xe,Je=xe,It=new Map;for(xe=Je;xe<=qe;xe++){const ln=Z[xe]=Se?fl(Z[xe]):Ii(Z[xe]);ln.key!=null&&It.set(ln.key,xe)}let kt,an=0;const Gt=qe-Je+1;let kn=!1,zi=0;const Vn=new Array(Gt);for(xe=0;xe<Gt;xe++)Vn[xe]=0;for(xe=at;xe<=Ge;xe++){const ln=q[xe];if(an>=Gt){Rn(ln,Ce,ze,!0);continue}let so;if(ln.key!=null)so=It.get(ln.key);else for(kt=Je;kt<=qe;kt++)if(Vn[kt-Je]===0&&br(ln,Z[kt])){so=kt;break}so===void 0?Rn(ln,Ce,ze,!0):(Vn[so-Je]=xe+1,so>=zi?zi=so:kn=!0,le(ln,Z[so],de,null,Ce,ze,Ve,ve,Se),an++)}const Kt=kn?CM(Vn):wu;for(kt=Kt.length-1,xe=Gt-1;xe>=0;xe--){const ln=Je+xe,so=Z[ln],ji=ln+1<ot?Z[ln+1].el:ge;Vn[xe]===0?le(null,so,de,ji,Ce,ze,Ve,ve,Se):kn&&(kt<0||xe!==Kt[kt]?un(so,de,ji,2):kt--)}}},un=(q,Z,de,ge,Ce=null)=>{const{el:ze,type:Ve,transition:ve,children:Se,shapeFlag:xe}=q;if(xe&6){un(q.component.subTree,Z,de,ge);return}if(xe&128){q.suspense.move(Z,de,ge);return}if(xe&64){Ve.move(q,Z,de,ht);return}if(Ve===rt){g(ze,Z,de);for(let Ge=0;Ge<Se.length;Ge++)un(Se[Ge],Z,de,ge);g(q.anchor,Z,de);return}if(Ve===Ic){ie(q,Z,de);return}if(ge!==2&&xe&1&&ve)if(ge===0)ve.beforeEnter(ze),g(ze,Z,de),Vo(()=>ve.enter(ze),Ce);else{const{leave:Ge,delayLeave:qe,afterLeave:at}=ve,Je=()=>g(ze,Z,de),It=()=>{Ge(ze,()=>{Je(),at&&at()})};qe?qe(ze,Je,It):It()}else g(ze,Z,de)},Rn=(q,Z,de,ge=!1,Ce=!1)=>{const{type:ze,props:Ve,ref:ve,children:Se,dynamicChildren:xe,shapeFlag:ot,patchFlag:Ge,dirs:qe}=q;if(ve!=null&&Rb(ve,null,de,q,!0),ot&256){Z.ctx.deactivate(q);return}const at=ot&1&&qe,Je=!Sc(q);let It;if(Je&&(It=Ve&&Ve.onVnodeBeforeUnmount)&&mi(It,Z,q),ot&6)X(q.component,de,ge);else{if(ot&128){q.suspense.unmount(de,ge);return}at&&mr(q,null,Z,"beforeUnmount"),ot&64?q.type.remove(q,Z,de,Ce,ht,ge):xe&&(ze!==rt||Ge>0&&Ge&64)?Te(xe,Z,de,!1,!0):(ze===rt&&Ge&384||!Ce&&ot&16)&&Te(Se,Z,de),ge&&mo(q)}(Je&&(It=Ve&&Ve.onVnodeUnmounted)||at)&&Vo(()=>{It&&mi(It,Z,q),at&&mr(q,null,Z,"unmounted")},de)},mo=q=>{const{type:Z,el:de,anchor:ge,transition:Ce}=q;if(Z===rt){St(de,ge);return}if(Z===Ic){ke(q);return}const ze=()=>{m(de),Ce&&!Ce.persisted&&Ce.afterLeave&&Ce.afterLeave()};if(q.shapeFlag&1&&Ce&&!Ce.persisted){const{leave:Ve,delayLeave:ve}=Ce,Se=()=>Ve(de,ze);ve?ve(q.el,ze,Se):Se()}else ze()},St=(q,Z)=>{let de;for(;q!==Z;)de=M(q),m(q),q=de;m(Z)},X=(q,Z,de)=>{const{bum:ge,scope:Ce,update:ze,subTree:Ve,um:ve}=q;ge&&vu(ge),Ce.stop(),ze&&(ze.active=!1,Rn(Ve,q,Z,de)),ve&&Vo(ve,Z),Vo(()=>{q.isUnmounted=!0},Z),Z&&Z.pendingBranch&&!Z.isUnmounted&&q.asyncDep&&!q.asyncResolved&&q.suspenseId===Z.pendingId&&(Z.deps--,Z.deps===0&&Z.resolve())},Te=(q,Z,de,ge=!1,Ce=!1,ze=0)=>{for(let Ve=ze;Ve<q.length;Ve++)Rn(q[Ve],Z,de,ge,Ce)},Be=q=>q.shapeFlag&6?Be(q.component.subTree):q.shapeFlag&128?q.suspense.next():M(q.anchor||q.el),Ue=(q,Z,de)=>{q==null?Z._vnode&&Rn(Z._vnode,null,null,!0):le(Z._vnode||null,q,Z,null,null,null,de),NC(),Ob(),Z._vnode=q},ht={p:le,um:Rn,m:un,r:mo,mt:Le,mc:he,pc:yt,pbc:Fe,n:Be,o:s};let Ht,Ze;return l&&([Ht,Ze]=l(ht)),{render:Ue,hydrate:Ht,createApp:yM(Ue,Ht)}}function kc({effect:s,update:l},h){s.allowRecurse=l.allowRecurse=h}function wy(s,l,h=!1){const g=s.children,m=l.children;if(ct(g)&&ct(m))for(let y=0;y<g.length;y++){const w=g[y];let v=m[y];v.shapeFlag&1&&!v.dynamicChildren&&((v.patchFlag<=0||v.patchFlag===32)&&(v=m[y]=fl(m[y]),v.el=w.el),h||wy(w,v)),v.type===Nc&&(v.el=w.el)}}function CM(s){const l=s.slice(),h=[0];let g,m,y,w,v;const A=s.length;for(g=0;g<A;g++){const T=s[g];if(T!==0){if(m=h[h.length-1],s[m]<T){l[g]=m,h.push(g);continue}for(y=0,w=h.length-1;y<w;)v=y+w>>1,s[h[v]]<T?y=v+1:w=v;T<s[h[y]]&&(y>0&&(l[g]=h[y-1]),h[y]=g)}}for(y=h.length,w=h[y-1];y-- >0;)h[y]=w,w=l[w];return h}const xM=s=>s.__isTeleport,rp=s=>s&&(s.disabled||s.disabled===""),HC=s=>typeof SVGElement<"u"&&s instanceof SVGElement,Pv=(s,l)=>{const h=s&&s.to;return Jn(h)?l?l(h):null:h},EM={__isTeleport:!0,process(s,l,h,g,m,y,w,v,A,T){const{mc:P,pc:N,pbc:M,o:{insert:j,querySelector:ee,createText:le,createComment:_e}}=T,te=rp(l.props);let{shapeFlag:Y,children:ie,dynamicChildren:ke}=l;if(s==null){const V=l.el=le(""),Ne=l.anchor=le("");j(V,h,g),j(Ne,h,g);const we=l.target=Pv(l.props,ee),he=l.targetAnchor=le("");we&&(j(he,we),w=w||HC(we));const Me=(Fe,Ke)=>{Y&16&&P(ie,Fe,Ke,m,y,w,v,A)};te?Me(h,Ne):we&&Me(we,he)}else{l.el=s.el;const V=l.anchor=s.anchor,Ne=l.target=s.target,we=l.targetAnchor=s.targetAnchor,he=rp(s.props),Me=he?h:Ne,Fe=he?V:we;if(w=w||HC(Ne),ke?(M(s.dynamicChildren,ke,Me,m,y,w,v),wy(s,l,!0)):A||N(s,l,Me,Fe,m,y,w,v,!1),te)he||xb(l,h,V,T,1);else if((l.props&&l.props.to)!==(s.props&&s.props.to)){const Ke=l.target=Pv(l.props,ee);Ke&&xb(l,Ke,null,T,0)}else he&&xb(l,Ne,we,T,1)}Bx(l)},remove(s,l,h,g,{um:m,o:{remove:y}},w){const{shapeFlag:v,children:A,anchor:T,targetAnchor:P,target:N,props:M}=s;if(N&&y(P),(w||!rp(M))&&(y(T),v&16))for(let j=0;j<A.length;j++){const ee=A[j];m(ee,l,h,!0,!!ee.dynamicChildren)}},move:xb,hydrate:DM};function xb(s,l,h,{o:{insert:g},m},y=2){y===0&&g(s.targetAnchor,l,h);const{el:w,anchor:v,shapeFlag:A,children:T,props:P}=s,N=y===2;if(N&&g(w,l,h),(!N||rp(P))&&A&16)for(let M=0;M<T.length;M++)m(T[M],l,h,2);N&&g(v,l,h)}function DM(s,l,h,g,m,y,{o:{nextSibling:w,parentNode:v,querySelector:A}},T){const P=l.target=Pv(l.props,A);if(P){const N=P._lpa||P.firstChild;if(l.shapeFlag&16)if(rp(l.props))l.anchor=T(w(s),l,v(s),h,g,m,y),l.targetAnchor=N;else{l.anchor=w(s);let M=N;for(;M;)if(M=w(M),M&&M.nodeType===8&&M.data==="teleport anchor"){l.targetAnchor=M,P._lpa=l.targetAnchor&&w(l.targetAnchor);break}T(N,l,P,h,g,m,y)}Bx(l)}return l.anchor&&w(l.anchor)}const TM=EM;function Bx(s){const l=s.ctx;if(l&&l.ut){let h=s.children[0].el;for(;h!==s.targetAnchor;)h.nodeType===1&&h.setAttribute("data-v-owner",l.uid),h=h.nextSibling;l.ut()}}const rt=Symbol(void 0),Nc=Symbol(void 0),ti=Symbol(void 0),Ic=Symbol(void 0),ap=[];let bi=null;function re(s=!1){ap.push(bi=s?null:[])}function Ox(){ap.pop(),bi=ap[ap.length-1]||null}let Bc=1;function Nv(s){Bc+=s}function Lx(s){return s.dynamicChildren=Bc>0?bi||wu:null,Ox(),Bc>0&&bi&&bi.push(s),s}function ae(s,l,h,g,m,y){return Lx(d(s,l,h,g,m,y,!0))}function Bi(s,l,h,g,m){return Lx(ce(s,l,h,g,m,!0))}function wl(s){return s?s.__v_isVNode===!0:!1}function br(s,l){return s.type===l.type&&s.key===l.key}function SM(s){}const i_="__vInternal",Rx=({key:s})=>s!=null?s:null,Sb=({ref:s,ref_key:l,ref_for:h})=>s!=null?Jn(s)||Po(s)||Nt(s)?{i:Uo,r:s,k:l,f:!!h}:s:null;function d(s,l=null,h=null,g=0,m=null,y=s===rt?0:1,w=!1,v=!1){const A={__v_isVNode:!0,__v_skip:!0,type:s,props:l,key:l&&Rx(l),ref:l&&Sb(l),scopeId:Jb,slotScopeIds:null,children:h,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:y,patchFlag:g,dynamicProps:m,dynamicChildren:null,appContext:null,ctx:Uo};return v?(ky(A,h),y&128&&s.normalize(A)):h&&(A.shapeFlag|=Jn(h)?8:16),Bc>0&&!w&&bi&&(A.patchFlag>0||y&6)&&A.patchFlag!==32&&bi.push(A),A}const ce=IM;function IM(s,l=null,h=null,g=0,m=null,y=!1){if((!s||s===vx)&&(s=ti),wl(s)){const v=wr(s,l,!0);return h&&ky(v,h),Bc>0&&!y&&bi&&(v.shapeFlag&6?bi[bi.indexOf(s)]=v:bi.push(v)),v.patchFlag|=-2,v}if(RM(s)&&(s=s.__vccOpts),l){l=zx(l);let{class:v,style:A}=l;v&&!Jn(v)&&(l.class=Oi(v)),Pn(A)&&(oy(A)&&!ct(A)&&(A=no({},A)),l.style=yp(A))}const w=Jn(s)?1:ax(s)?128:xM(s)?64:Pn(s)?4:Nt(s)?2:0;return d(s,l,h,g,m,w,y,!0)}function zx(s){return s?oy(s)||i_ in s?no({},s):s:null}function wr(s,l,h=!1){const{props:g,ref:m,patchFlag:y,children:w}=s,v=l?jx(g||{},l):g;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:v,key:v&&Rx(v),ref:l&&l.ref?h&&m?ct(m)?m.concat(Sb(l)):[m,Sb(l)]:Sb(l):m,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:w,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:l&&s.type!==rt?y===-1?16:y|16:y,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&wr(s.ssContent),ssFallback:s.ssFallback&&wr(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx}}function H(s=" ",l=0){return ce(Nc,null,s,l)}function fo(s,l){const h=ce(Ic,null,s);return h.staticCount=l,h}function Mi(s="",l=!1){return l?(re(),Bi(ti,null,s)):ce(ti,null,s)}function Ii(s){return s==null||typeof s=="boolean"?ce(ti):ct(s)?ce(rt,null,s.slice()):typeof s=="object"?fl(s):ce(Nc,null,String(s))}function fl(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:wr(s)}function ky(s,l){let h=0;const{shapeFlag:g}=s;if(l==null)l=null;else if(ct(l))h=16;else if(typeof l=="object")if(g&65){const m=l.default;m&&(m._c&&(m._d=!1),ky(s,m()),m._c&&(m._d=!0));return}else{h=32;const m=l._;!m&&!(i_ in l)?l._ctx=Uo:m===3&&Uo&&(Uo.slots._===1?l._=1:(l._=2,s.patchFlag|=1024))}else Nt(l)?(l={default:l,_ctx:Uo},h=32):(l=String(l),g&64?(h=16,l=[H(l)]):h=8);s.children=l,s.shapeFlag|=h}function jx(...s){const l={};for(let h=0;h<s.length;h++){const g=s[h];for(const m in g)if(m==="class")l.class!==g.class&&(l.class=Oi([l.class,g.class]));else if(m==="style")l.style=yp([l.style,g.style]);else if(Ap(m)){const y=l[m],w=g[m];w&&y!==w&&!(ct(y)&&y.includes(w))&&(l[m]=y?[].concat(y,w):w)}else m!==""&&(l[m]=g[m])}return l}function mi(s,l,h,g=null){Ni(s,l,7,[h,g])}const MM=Ix();let PM=0;function Fx(s,l,h){const g=s.type,m=(l?l.appContext:s.appContext)||MM,y={uid:PM++,vnode:s,type:g,parent:l,appContext:m,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(m.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ex(g,m),emitsOptions:rx(g,m),emit:null,emitted:null,propsDefaults:Mn,inheritAttrs:g.inheritAttrs,ctx:Mn,data:Mn,props:Mn,attrs:Mn,slots:Mn,refs:Mn,setupState:Mn,setupContext:null,suspense:h,suspenseId:h?h.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return y.ctx={_:y},y.root=l?l.root:y,y.emit=FI.bind(null,y),s.ce&&s.ce(y),y}let vo=null;const yl=()=>vo||Uo,kl=s=>{vo=s,s.scope.on()},gl=()=>{vo&&vo.scope.off(),vo=null};function $x(s){return s.vnode.shapeFlag&4}let Du=!1;function Vx(s,l=!1){Du=l;const{props:h,children:g}=s.vnode,m=$x(s);gM(s,h,m,l),wM(s,g);const y=m?NM(s,l):void 0;return Du=!1,y}function NM(s,l){const h=s.type;s.accessCache=Object.create(null),s.proxy=iy(new Proxy(s.ctx,Tv));const{setup:g}=h;if(g){const m=s.setupContext=g.length>1?Hx(s):null;kl(s),Mu();const y=aa(g,s,0,[s.props,m]);if(Pu(),gl(),Zv(y)){if(y.then(gl,gl),l)return y.then(w=>{Bv(s,w,l)}).catch(w=>{Rc(w,s,0)});s.asyncDep=y}else Bv(s,y,l)}else Ux(s,l)}function Bv(s,l,h){Nt(l)?s.type.__ssrInlineRender?s.ssrRender=l:s.render=l:Pn(l)&&(s.setupState=ay(l)),Ux(s,h)}let zb,Ov;function BM(s){zb=s,Ov=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,dM))}}const OM=()=>!zb;function Ux(s,l,h){const g=s.type;if(!s.render){if(!l&&zb&&!g.render){const m=g.template||by(s).template;if(m){const{isCustomElement:y,compilerOptions:w}=s.appContext.config,{delimiters:v,compilerOptions:A}=g,T=no(no({isCustomElement:y,delimiters:v},w),A);g.render=zb(m,T)}}s.render=g.render||Ls,Ov&&Ov(s)}kl(s),Mu(),uM(s),Pu(),gl()}function LM(s){return new Proxy(s.attrs,{get(l,h){return Li(s,"get","$attrs"),l[h]}})}function Hx(s){const l=g=>{s.exposed=g||{}};let h;return{get attrs(){return h||(h=LM(s))},slots:s.slots,emit:s.emit,expose:l}}function s_(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(ay(iy(s.exposed)),{get(l,h){if(h in l)return l[h];if(h in sp)return sp[h](s)},has(l,h){return h in l||h in sp}}))}function Lv(s,l=!0){return Nt(s)?s.displayName||s.name:s.name||l&&s.__name}function RM(s){return Nt(s)&&"__vccOpts"in s}const Pi=(s,l)=>BI(s,l,Du);function zM(){return null}function jM(){return null}function FM(s){}function $M(s,l){return null}function VM(){return qx().slots}function UM(){return qx().attrs}function qx(){const s=yl();return s.setupContext||(s.setupContext=Hx(s))}function HM(s,l){const h=ct(s)?s.reduce((g,m)=>(g[m]={},g),{}):s;for(const g in l){const m=h[g];m?ct(m)||Nt(m)?h[g]={type:m,default:l[g]}:m.default=l[g]:m===null&&(h[g]={default:l[g]})}return h}function qM(s,l){const h={};for(const g in s)l.includes(g)||Object.defineProperty(h,g,{enumerable:!0,get:()=>s[g]});return h}function WM(s){const l=yl();let h=s();return gl(),Zv(h)&&(h=h.catch(g=>{throw kl(l),g})),[h,()=>kl(l)]}function r_(s,l,h){const g=arguments.length;return g===2?Pn(l)&&!ct(l)?wl(l)?ce(s,null,[l]):ce(s,l):ce(s,null,l):(g>3?h=Array.prototype.slice.call(arguments,2):g===3&&wl(h)&&(h=[h]),ce(s,l,h))}const Wx=Symbol(""),Gx=()=>_r(Wx);function GM(){}function KM(s,l,h,g){const m=h[g];if(m&&Kx(m,s))return m;const y=l();return y.memo=s.slice(),h[g]=y}function Kx(s,l){const h=s.memo;if(h.length!=l.length)return!1;for(let g=0;g<h.length;g++)if(xu(h[g],l[g]))return!1;return Bc>0&&bi&&bi.push(s),!0}const Yx="3.2.45",YM={createComponentInstance:Fx,setupComponent:Vx,renderComponentRoot:Tb,setCurrentRenderingInstance:gp,isVNode:wl,normalizeVNode:Ii},QM=YM,ZM=null,JM=null,XM="http://www.w3.org/2000/svg",Cc=typeof document<"u"?document:null,qC=Cc&&Cc.createElement("template"),e5={insert:(s,l,h)=>{l.insertBefore(s,h||null)},remove:s=>{const l=s.parentNode;l&&l.removeChild(s)},createElement:(s,l,h,g)=>{const m=l?Cc.createElementNS(XM,s):Cc.createElement(s,h?{is:h}:void 0);return s==="select"&&g&&g.multiple!=null&&m.setAttribute("multiple",g.multiple),m},createText:s=>Cc.createTextNode(s),createComment:s=>Cc.createComment(s),setText:(s,l)=>{s.nodeValue=l},setElementText:(s,l)=>{s.textContent=l},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Cc.querySelector(s),setScopeId(s,l){s.setAttribute(l,"")},insertStaticContent(s,l,h,g,m,y){const w=h?h.previousSibling:l.lastChild;if(m&&(m===y||m.nextSibling))for(;l.insertBefore(m.cloneNode(!0),h),!(m===y||!(m=m.nextSibling)););else{qC.innerHTML=g?`<svg>${s}</svg>`:s;const v=qC.content;if(g){const A=v.firstChild;for(;A.firstChild;)v.appendChild(A.firstChild);v.removeChild(A)}l.insertBefore(v,h)}return[w?w.nextSibling:l.firstChild,h?h.previousSibling:l.lastChild]}};function t5(s,l,h){const g=s._vtc;g&&(l=(l?[l,...g]:[...g]).join(" ")),l==null?s.removeAttribute("class"):h?s.setAttribute("class",l):s.className=l}function n5(s,l,h){const g=s.style,m=Jn(h);if(h&&!m){for(const y in h)Rv(g,y,h[y]);if(l&&!Jn(l))for(const y in l)h[y]==null&&Rv(g,y,"")}else{const y=g.display;m?l!==h&&(g.cssText=h):l&&s.removeAttribute("style"),"_vod"in s&&(g.display=y)}}const WC=/\s*!important$/;function Rv(s,l,h){if(ct(h))h.forEach(g=>Rv(s,l,g));else if(h==null&&(h=""),l.startsWith("--"))s.setProperty(l,h);else{const g=o5(s,l);WC.test(h)?s.setProperty(as(g),h.replace(WC,""),"important"):s[g]=h}}const GC=["Webkit","Moz","ms"],pv={};function o5(s,l){const h=pv[l];if(h)return h;let g=wi(l);if(g!=="filter"&&g in s)return pv[l]=g;g=xp(g);for(let m=0;m<GC.length;m++){const y=GC[m]+g;if(y in s)return pv[l]=y}return l}const KC="http://www.w3.org/1999/xlink";function i5(s,l,h,g,m){if(g&&l.startsWith("xlink:"))h==null?s.removeAttributeNS(KC,l.slice(6,l.length)):s.setAttributeNS(KC,l,h);else{const y=jS(l);h==null||y&&!B1(h)?s.removeAttribute(l):s.setAttribute(l,y?"":h)}}function s5(s,l,h,g,m,y,w){if(l==="innerHTML"||l==="textContent"){g&&w(g,m,y),s[l]=h==null?"":h;return}if(l==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=h;const A=h==null?"":h;(s.value!==A||s.tagName==="OPTION")&&(s.value=A),h==null&&s.removeAttribute(l);return}let v=!1;if(h===""||h==null){const A=typeof s[l];A==="boolean"?h=B1(h):h==null&&A==="string"?(h="",v=!0):A==="number"&&(h=0,v=!0)}try{s[l]=h}catch{}v&&s.removeAttribute(l)}function ra(s,l,h,g){s.addEventListener(l,h,g)}function r5(s,l,h,g){s.removeEventListener(l,h,g)}function a5(s,l,h,g,m=null){const y=s._vei||(s._vei={}),w=y[l];if(g&&w)w.value=g;else{const[v,A]=l5(l);if(g){const T=y[l]=u5(g,m);ra(s,v,T,A)}else w&&(r5(s,v,w,A),y[l]=void 0)}}const YC=/(?:Once|Passive|Capture)$/;function l5(s){let l;if(YC.test(s)){l={};let g;for(;g=s.match(YC);)s=s.slice(0,s.length-g[0].length),l[g[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):as(s.slice(2)),l]}let mv=0;const c5=Promise.resolve(),d5=()=>mv||(c5.then(()=>mv=0),mv=Date.now());function u5(s,l){const h=g=>{if(!g._vts)g._vts=Date.now();else if(g._vts<=h.attached)return;Ni(h5(g,h.value),l,5,[g])};return h.value=s,h.attached=d5(),h}function h5(s,l){if(ct(l)){const h=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{h.call(s),s._stopped=!0},l.map(g=>m=>!m._stopped&&g&&g(m))}else return l}const QC=/^on[a-z]/,f5=(s,l,h,g,m=!1,y,w,v,A)=>{l==="class"?t5(s,g,m):l==="style"?n5(s,h,g):Ap(l)?Yv(l)||a5(s,l,h,g,w):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):p5(s,l,g,m))?s5(s,l,g,y,w,v,A):(l==="true-value"?s._trueValue=g:l==="false-value"&&(s._falseValue=g),i5(s,l,g,m))};function p5(s,l,h,g){return g?!!(l==="innerHTML"||l==="textContent"||l in s&&QC.test(l)&&Nt(h)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&s.tagName==="INPUT"||l==="type"&&s.tagName==="TEXTAREA"||QC.test(l)&&Jn(h)?!1:l in s}function Qx(s,l){const h=Tp(s);class g extends a_{constructor(y){super(h,y,l)}}return g.def=h,g}const m5=s=>Qx(s,uE),g5=typeof HTMLElement<"u"?HTMLElement:class{};class a_ extends g5{constructor(l,h={},g){super(),this._def=l,this._props=h,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&g?g(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Yb(()=>{this._connected||(Fv(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let g=0;g<this.attributes.length;g++)this._setAttr(this.attributes[g].name);new MutationObserver(g=>{for(const m of g)this._setAttr(m.attributeName)}).observe(this,{attributes:!0});const l=(g,m=!1)=>{const{props:y,styles:w}=g;let v;if(y&&!ct(y))for(const A in y){const T=y[A];(T===Number||T&&T.type===Number)&&(A in this._props&&(this._props[A]=da(this._props[A])),(v||(v=Object.create(null)))[wi(A)]=!0)}this._numberProps=v,m&&this._resolveProps(g),this._applyStyles(w),this._update()},h=this._def.__asyncLoader;h?h().then(g=>l(g,!0)):l(this._def)}_resolveProps(l){const{props:h}=l,g=ct(h)?h:Object.keys(h||{});for(const m of Object.keys(this))m[0]!=="_"&&g.includes(m)&&this._setProp(m,this[m],!0,!1);for(const m of g.map(wi))Object.defineProperty(this,m,{get(){return this._getProp(m)},set(y){this._setProp(m,y)}})}_setAttr(l){let h=this.getAttribute(l);const g=wi(l);this._numberProps&&this._numberProps[g]&&(h=da(h)),this._setProp(g,h,!1)}_getProp(l){return this._props[l]}_setProp(l,h,g=!0,m=!0){h!==this._props[l]&&(this._props[l]=h,m&&this._instance&&this._update(),g&&(h===!0?this.setAttribute(as(l),""):typeof h=="string"||typeof h=="number"?this.setAttribute(as(l),h+""):h||this.removeAttribute(as(l))))}_update(){Fv(this._createVNode(),this.shadowRoot)}_createVNode(){const l=ce(this._def,no({},this._props));return this._instance||(l.ce=h=>{this._instance=h,h.isCE=!0;const g=(y,w)=>{this.dispatchEvent(new CustomEvent(y,{detail:w}))};h.emit=(y,...w)=>{g(y,w),as(y)!==y&&g(as(y),w)};let m=this;for(;m=m&&(m.parentNode||m.host);)if(m instanceof a_){h.parent=m._instance,h.provides=m._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(h=>{const g=document.createElement("style");g.textContent=h,this.shadowRoot.appendChild(g)})}}function b5(s="$style"){{const l=yl();if(!l)return Mn;const h=l.type.__cssModules;if(!h)return Mn;const g=h[s];return g||Mn}}function _5(s){const l=yl();if(!l)return;const h=l.ut=(m=s(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(y=>jv(y,m))},g=()=>{const m=s(l.proxy);zv(l.subTree,m),h(m)};cx(g),Ip(()=>{const m=new MutationObserver(g);m.observe(l.subTree.el.parentNode,{childList:!0}),o_(()=>m.disconnect())})}function zv(s,l){if(s.shapeFlag&128){const h=s.suspense;s=h.activeBranch,h.pendingBranch&&!h.isHydrating&&h.effects.push(()=>{zv(h.activeBranch,l)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)jv(s.el,l);else if(s.type===rt)s.children.forEach(h=>zv(h,l));else if(s.type===Ic){let{el:h,anchor:g}=s;for(;h&&(jv(h,l),h!==g);)h=h.nextSibling}}function jv(s,l){if(s.nodeType===1){const h=s.style;for(const g in l)h.setProperty(`--${g}`,l[g])}}const ll="transition",Yf="animation",vy=(s,{slots:l})=>r_(fy,Jx(s),l);vy.displayName="Transition";const Zx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w5=vy.props=no({},fy.props,Zx),vc=(s,l=[])=>{ct(s)?s.forEach(h=>h(...l)):s&&s(...l)},ZC=s=>s?ct(s)?s.some(l=>l.length>1):s.length>1:!1;function Jx(s){const l={};for(const Q in s)Q in Zx||(l[Q]=s[Q]);if(s.css===!1)return l;const{name:h="v",type:g,duration:m,enterFromClass:y=`${h}-enter-from`,enterActiveClass:w=`${h}-enter-active`,enterToClass:v=`${h}-enter-to`,appearFromClass:A=y,appearActiveClass:T=w,appearToClass:P=v,leaveFromClass:N=`${h}-leave-from`,leaveActiveClass:M=`${h}-leave-active`,leaveToClass:j=`${h}-leave-to`}=s,ee=k5(m),le=ee&&ee[0],_e=ee&&ee[1],{onBeforeEnter:te,onEnter:Y,onEnterCancelled:ie,onLeave:ke,onLeaveCancelled:V,onBeforeAppear:Ne=te,onAppear:we=Y,onAppearCancelled:he=ie}=l,Me=(Q,nt,Le)=>{hl(Q,nt?P:v),hl(Q,nt?T:w),Le&&Le()},Fe=(Q,nt)=>{Q._isLeaving=!1,hl(Q,N),hl(Q,j),hl(Q,M),nt&&nt()},Ke=Q=>(nt,Le)=>{const Ut=Q?we:Y,Qe=()=>Me(nt,Q,Le);vc(Ut,[nt,Qe]),JC(()=>{hl(nt,Q?A:y),ia(nt,Q?P:v),ZC(Ut)||XC(nt,g,le,Qe)})};return no(l,{onBeforeEnter(Q){vc(te,[Q]),ia(Q,y),ia(Q,w)},onBeforeAppear(Q){vc(Ne,[Q]),ia(Q,A),ia(Q,T)},onEnter:Ke(!1),onAppear:Ke(!0),onLeave(Q,nt){Q._isLeaving=!0;const Le=()=>Fe(Q,nt);ia(Q,N),eE(),ia(Q,M),JC(()=>{!Q._isLeaving||(hl(Q,N),ia(Q,j),ZC(ke)||XC(Q,g,_e,Le))}),vc(ke,[Q,Le])},onEnterCancelled(Q){Me(Q,!1),vc(ie,[Q])},onAppearCancelled(Q){Me(Q,!0),vc(he,[Q])},onLeaveCancelled(Q){Fe(Q),vc(V,[Q])}})}function k5(s){if(s==null)return null;if(Pn(s))return[gv(s.enter),gv(s.leave)];{const l=gv(s);return[l,l]}}function gv(s){return da(s)}function ia(s,l){l.split(/\s+/).forEach(h=>h&&s.classList.add(h)),(s._vtc||(s._vtc=new Set)).add(l)}function hl(s,l){l.split(/\s+/).forEach(g=>g&&s.classList.remove(g));const{_vtc:h}=s;h&&(h.delete(l),h.size||(s._vtc=void 0))}function JC(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let v5=0;function XC(s,l,h,g){const m=s._endId=++v5,y=()=>{m===s._endId&&g()};if(h)return setTimeout(y,h);const{type:w,timeout:v,propCount:A}=Xx(s,l);if(!w)return g();const T=w+"end";let P=0;const N=()=>{s.removeEventListener(T,M),y()},M=j=>{j.target===s&&++P>=A&&N()};setTimeout(()=>{P<A&&N()},v+1),s.addEventListener(T,M)}function Xx(s,l){const h=window.getComputedStyle(s),g=ee=>(h[ee]||"").split(", "),m=g(`${ll}Delay`),y=g(`${ll}Duration`),w=e1(m,y),v=g(`${Yf}Delay`),A=g(`${Yf}Duration`),T=e1(v,A);let P=null,N=0,M=0;l===ll?w>0&&(P=ll,N=w,M=y.length):l===Yf?T>0&&(P=Yf,N=T,M=A.length):(N=Math.max(w,T),P=N>0?w>T?ll:Yf:null,M=P?P===ll?y.length:A.length:0);const j=P===ll&&/\b(transform|all)(,|$)/.test(g(`${ll}Property`).toString());return{type:P,timeout:N,propCount:M,hasTransform:j}}function e1(s,l){for(;s.length<l.length;)s=s.concat(s);return Math.max(...l.map((h,g)=>t1(h)+t1(s[g])))}function t1(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function eE(){return document.body.offsetHeight}const tE=new WeakMap,nE=new WeakMap,y5={name:"TransitionGroup",props:no({},w5,{tag:String,moveClass:String}),setup(s,{slots:l}){const h=yl(),g=hy();let m,y;return t_(()=>{if(!m.length)return;const w=s.moveClass||`${s.name||"v"}-move`;if(!D5(m[0].el,h.vnode.el,w))return;m.forEach(C5),m.forEach(x5);const v=m.filter(E5);eE(),v.forEach(A=>{const T=A.el,P=T.style;ia(T,w),P.transform=P.webkitTransform=P.transitionDuration="";const N=T._moveCb=M=>{M&&M.target!==T||(!M||/transform$/.test(M.propertyName))&&(T.removeEventListener("transitionend",N),T._moveCb=null,hl(T,w))};T.addEventListener("transitionend",N)})}),()=>{const w=rn(s),v=Jx(w);let A=w.tag||rt;m=y,y=l.default?Xb(l.default()):[];for(let T=0;T<y.length;T++){const P=y[T];P.key!=null&&Pc(P,Eu(P,v,g,h))}if(m)for(let T=0;T<m.length;T++){const P=m[T];Pc(P,Eu(P,v,g,h)),tE.set(P,P.el.getBoundingClientRect())}return ce(A,null,y)}}},A5=y5;function C5(s){const l=s.el;l._moveCb&&l._moveCb(),l._enterCb&&l._enterCb()}function x5(s){nE.set(s,s.el.getBoundingClientRect())}function E5(s){const l=tE.get(s),h=nE.get(s),g=l.left-h.left,m=l.top-h.top;if(g||m){const y=s.el.style;return y.transform=y.webkitTransform=`translate(${g}px,${m}px)`,y.transitionDuration="0s",s}}function D5(s,l,h){const g=s.cloneNode();s._vtc&&s._vtc.forEach(w=>{w.split(/\s+/).forEach(v=>v&&g.classList.remove(v))}),h.split(/\s+/).forEach(w=>w&&g.classList.add(w)),g.style.display="none";const m=l.nodeType===1?l:l.parentNode;m.appendChild(g);const{hasTransform:y}=Xx(g);return m.removeChild(g),y}const vl=s=>{const l=s.props["onUpdate:modelValue"]||!1;return ct(l)?h=>vu(l,h):l};function T5(s){s.target.composing=!0}function n1(s){const l=s.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Xe={created(s,{modifiers:{lazy:l,trim:h,number:g}},m){s._assign=vl(m);const y=g||m.props&&m.props.type==="number";ra(s,l?"change":"input",w=>{if(w.target.composing)return;let v=s.value;h&&(v=v.trim()),y&&(v=da(v)),s._assign(v)}),h&&ra(s,"change",()=>{s.value=s.value.trim()}),l||(ra(s,"compositionstart",T5),ra(s,"compositionend",n1),ra(s,"change",n1))},mounted(s,{value:l}){s.value=l==null?"":l},beforeUpdate(s,{value:l,modifiers:{lazy:h,trim:g,number:m}},y){if(s._assign=vl(y),s.composing||document.activeElement===s&&s.type!=="range"&&(h||g&&s.value.trim()===l||(m||s.type==="number")&&da(s.value)===l))return;const w=l==null?"":l;s.value!==w&&(s.value=w)}},io={deep:!0,created(s,l,h){s._assign=vl(h),ra(s,"change",()=>{const g=s._modelValue,m=Tu(s),y=s.checked,w=s._assign;if(ct(g)){const v=Vb(g,m),A=v!==-1;if(y&&!A)w(g.concat(m));else if(!y&&A){const T=[...g];T.splice(v,1),w(T)}}else if(Lc(g)){const v=new Set(g);y?v.add(m):v.delete(m),w(v)}else w(oE(s,y))})},mounted:o1,beforeUpdate(s,l,h){s._assign=vl(h),o1(s,l,h)}};function o1(s,{value:l,oldValue:h},g){s._modelValue=l,ct(l)?s.checked=Vb(l,g.props.value)>-1:Lc(l)?s.checked=l.has(g.props.value):l!==h&&(s.checked=bl(l,oE(s,!0)))}const yy={created(s,{value:l},h){s.checked=bl(l,h.props.value),s._assign=vl(h),ra(s,"change",()=>{s._assign(Tu(s))})},beforeUpdate(s,{value:l,oldValue:h},g){s._assign=vl(g),l!==h&&(s.checked=bl(l,g.props.value))}},_i={deep:!0,created(s,{value:l,modifiers:{number:h}},g){const m=Lc(l);ra(s,"change",()=>{const y=Array.prototype.filter.call(s.options,w=>w.selected).map(w=>h?da(Tu(w)):Tu(w));s._assign(s.multiple?m?new Set(y):y:y[0])}),s._assign=vl(g)},mounted(s,{value:l}){i1(s,l)},beforeUpdate(s,l,h){s._assign=vl(h)},updated(s,{value:l}){i1(s,l)}};function i1(s,l){const h=s.multiple;if(!(h&&!ct(l)&&!Lc(l))){for(let g=0,m=s.options.length;g<m;g++){const y=s.options[g],w=Tu(y);if(h)ct(l)?y.selected=Vb(l,w)>-1:y.selected=l.has(w);else if(bl(Tu(y),l)){s.selectedIndex!==g&&(s.selectedIndex=g);return}}!h&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function Tu(s){return"_value"in s?s._value:s.value}function oE(s,l){const h=l?"_trueValue":"_falseValue";return h in s?s[h]:l}const iE={created(s,l,h){Eb(s,l,h,null,"created")},mounted(s,l,h){Eb(s,l,h,null,"mounted")},beforeUpdate(s,l,h,g){Eb(s,l,h,g,"beforeUpdate")},updated(s,l,h,g){Eb(s,l,h,g,"updated")}};function sE(s,l){switch(s){case"SELECT":return _i;case"TEXTAREA":return Xe;default:switch(l){case"checkbox":return io;case"radio":return yy;default:return Xe}}}function Eb(s,l,h,g,m){const w=sE(s.tagName,h.props&&h.props.type)[m];w&&w(s,l,h,g)}function S5(){Xe.getSSRProps=({value:s})=>({value:s}),yy.getSSRProps=({value:s},l)=>{if(l.props&&bl(l.props.value,s))return{checked:!0}},io.getSSRProps=({value:s},l)=>{if(ct(s)){if(l.props&&Vb(s,l.props.value)>-1)return{checked:!0}}else if(Lc(s)){if(l.props&&s.has(l.props.value))return{checked:!0}}else if(s)return{checked:!0}},iE.getSSRProps=(s,l)=>{if(typeof l.type!="string")return;const h=sE(l.type.toUpperCase(),l.props&&l.props.type);if(h.getSSRProps)return h.getSSRProps(s,l)}}const I5=["ctrl","shift","alt","meta"],M5={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,l)=>I5.some(h=>s[`${h}Key`]&&!l.includes(h))},kr=(s,l)=>(h,...g)=>{for(let m=0;m<l.length;m++){const y=M5[l[m]];if(y&&y(h,l))return}return s(h,...g)},P5={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rE=(s,l)=>h=>{if(!("key"in h))return;const g=as(h.key);if(l.some(m=>m===g||P5[m]===g))return s(h)},aE={beforeMount(s,{value:l},{transition:h}){s._vod=s.style.display==="none"?"":s.style.display,h&&l?h.beforeEnter(s):Qf(s,l)},mounted(s,{value:l},{transition:h}){h&&l&&h.enter(s)},updated(s,{value:l,oldValue:h},{transition:g}){!l!=!h&&(g?l?(g.beforeEnter(s),Qf(s,!0),g.enter(s)):g.leave(s,()=>{Qf(s,!1)}):Qf(s,l))},beforeUnmount(s,{value:l}){Qf(s,l)}};function Qf(s,l){s.style.display=l?s._vod:"none"}function N5(){aE.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const lE=no({patchProp:f5},e5);let lp,s1=!1;function cE(){return lp||(lp=Mx(lE))}function dE(){return lp=s1?lp:Px(lE),s1=!0,lp}const Fv=(...s)=>{cE().render(...s)},uE=(...s)=>{dE().hydrate(...s)},hE=(...s)=>{const l=cE().createApp(...s),{mount:h}=l;return l.mount=g=>{const m=fE(g);if(!m)return;const y=l._component;!Nt(y)&&!y.render&&!y.template&&(y.template=m.innerHTML),m.innerHTML="";const w=h(m,!1,m instanceof SVGElement);return m instanceof Element&&(m.removeAttribute("v-cloak"),m.setAttribute("data-v-app","")),w},l},B5=(...s)=>{const l=dE().createApp(...s),{mount:h}=l;return l.mount=g=>{const m=fE(g);if(m)return h(m,!0,m instanceof SVGElement)},l};function fE(s){return Jn(s)?document.querySelector(s):s}let r1=!1;const O5=()=>{r1||(r1=!0,S5(),N5())},L5=()=>{},R5=Object.freeze(Object.defineProperty({__proto__:null,compile:L5,EffectScope:Xv,ReactiveEffect:Ep,customRef:II,effect:XS,effectScope:KS,getCurrentScope:YS,isProxy:oy,isReactive:Dc,isReadonly:Mc,isRef:Po,isShallow:hp,markRaw:iy,onScopeDispose:QS,proxyRefs:ay,reactive:Nu,readonly:ny,ref:op,shallowReactive:Z1,shallowReadonly:xI,shallowRef:J1,stop:eI,toRaw:rn,toRef:ex,toRefs:MI,triggerRef:DI,unref:Tc,camelize:wi,capitalize:xp,normalizeClass:Oi,normalizeProps:RS,normalizeStyle:yp,toDisplayString:pe,toHandlerKey:np,BaseTransition:fy,Comment:ti,Fragment:rt,KeepAlive:iM,Static:Ic,Suspense:GI,Teleport:TM,Text:Nc,callWithAsyncErrorHandling:Ni,callWithErrorHandling:aa,cloneVNode:wr,compatUtils:JM,computed:Pi,createBlock:Bi,createCommentVNode:Mi,createElementBlock:ae,createElementVNode:d,createHydrationRenderer:Px,createPropsRestProxy:qM,createRenderer:Mx,createSlots:lM,createStaticVNode:fo,createTextVNode:H,createVNode:ce,defineAsyncComponent:nM,defineComponent:Tp,defineEmits:jM,defineExpose:FM,defineProps:zM,get devtools(){return bu},getCurrentInstance:yl,getTransitionRawChildren:Xb,guardReactiveProps:zx,h:r_,handleError:Rc,initCustomFormatter:GM,inject:_r,isMemoSame:Kx,isRuntimeOnly:OM,isVNode:wl,mergeDefaults:HM,mergeProps:jx,nextTick:Yb,onActivated:hx,onBeforeMount:mx,onBeforeUnmount:n_,onBeforeUpdate:gx,onDeactivated:fx,onErrorCaptured:kx,onMounted:Ip,onRenderTracked:wx,onRenderTriggered:_x,onServerPrefetch:bx,onUnmounted:o_,onUpdated:t_,openBlock:re,popScopeId:zt,provide:ip,pushScopeId:Rt,queuePostFlushCb:cy,registerRuntimeCompiler:BM,renderList:Pt,renderSlot:gy,resolveComponent:et,resolveDirective:aM,resolveDynamicComponent:yx,resolveFilter:ZM,resolveTransitionHooks:Eu,setBlockTracking:Nv,setDevtoolsHook:sx,setTransitionHooks:Pc,ssrContextKey:Wx,ssrUtils:QM,toHandlers:cM,transformVNodeArgs:SM,useAttrs:UM,useSSRContext:Gx,useSlots:VM,useTransitionState:hy,version:Yx,warn:OI,watch:Cu,watchEffect:JI,watchPostEffect:cx,watchSyncEffect:XI,withAsyncContext:WM,withCtx:je,withDefaults:$M,withDirectives:Pe,withMemo:KM,withScopeId:$I,Transition:vy,TransitionGroup:A5,VueElement:a_,createApp:hE,createSSRApp:B5,defineCustomElement:Qx,defineSSRCustomElement:m5,hydrate:uE,initDirectivesForSSR:O5,render:Fv,useCssModule:b5,useCssVars:_5,vModelCheckbox:io,vModelDynamic:iE,vModelRadio:yy,vModelSelect:_i,vModelText:Xe,vShow:aE,withKeys:rE,withModifiers:kr},Symbol.toStringTag,{value:"Module"})),z5="/build/assets/logo.ca67b92a.svg";const ut=(s,l)=>{const h=s.__vccOpts||s;for(const[g,m]of l)h[g]=m;return h},j5={data(){return{searchText:""}},methods:{search(){!this.searchText||this.$router.push({name:"Search",query:{q:this.searchText}})}}},Mp=s=>(Rt("data-v-3693317f"),s=s(),zt(),s),F5={class:"navbar fixed-top navbar-expand-lg navbar-light bg-light",id:"nav"},$5={class:"container-fluid"},V5=Mp(()=>d("a",{class:"navbar-brand",href:"#"},[d("img",{src:z5,alt:"",width:"80",height:"50",style:{"margin-top":"-15px"}})],-1)),U5=Mp(()=>d("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[d("span",{class:"navbar-toggler-icon"})],-1)),H5={class:"collapse navbar-collapse",id:"navbarSupportedContent"},q5={class:"navbar-nav me-auto mb-2 mb-lg-0"},W5={class:"nav-item"},G5=Mp(()=>d("li",{class:"nav-item"},[d("a",{class:"nav-link",href:"/#about"},"About Us")],-1)),K5={class:"nav-item dropdown"},Y5=Mp(()=>d("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Journals ",-1)),Q5={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},Z5={class:"nav-item"},J5={class:"nav-item"},X5={class:"navbar-nav w-50 mb-2 mb-lg-0"},eP={class:"nav-item w-100"},tP={class:"input-group"},nP=Mp(()=>d("i",{class:"fa-solid fa-magnifying-glass"},null,-1)),oP=[nP],iP={class:"nav-item"},sP={class:"nav-item"};function rP(s,l,h,g,m,y){const w=et("router-link");return re(),ae("nav",F5,[d("div",$5,[V5,U5,d("div",H5,[d("ul",q5,[d("li",W5,[ce(w,{to:{name:"Home"},class:"nav-link active","aria-current":"page"},{default:je(()=>[H("Home ")]),_:1})]),G5,d("li",K5,[Y5,d("ul",Q5,[d("li",null,[ce(w,{to:{name:"Journal Details",params:{id:1}},class:"dropdown-item"},{default:je(()=>[H("Sustainability Studies")]),_:1})]),d("li",null,[ce(w,{to:{name:"Journal Details",params:{id:2}},class:"dropdown-item"},{default:je(()=>[H("Business Studies")]),_:1})]),d("li",null,[ce(w,{to:{name:"Journal Details",params:{id:3}},class:"dropdown-item"},{default:je(()=>[H("Bibliomatric and Systematic Reviews")]),_:1})]),d("li",null,[ce(w,{to:{name:"Journal Details",params:{id:4}},class:"dropdown-item"},{default:je(()=>[H("Marketing Studies")]),_:1})]),d("li",null,[ce(w,{to:{name:"Journal Details",params:{id:5}},class:"dropdown-item"},{default:je(()=>[H("Finance Studies")]),_:1})]),d("li",null,[ce(w,{to:{name:"Journal Details",params:{id:6}},class:"dropdown-item"},{default:je(()=>[H("Tourism Studies")]),_:1})])])]),d("li",Z5,[ce(w,{to:{name:"Publishing Policies"},class:"nav-link"},{default:je(()=>[H("Publishing Policies ")]),_:1})]),d("li",J5,[ce(w,{to:{name:"Editorial Policies"},class:"nav-link"},{default:je(()=>[H("Editorial Policies ")]),_:1})])]),d("ul",X5,[d("li",eP,[d("div",tP,[Pe(d("input",{"onUpdate:modelValue":l[0]||(l[0]=v=>m.searchText=v),onKeyup:l[1]||(l[1]=rE((...v)=>y.search&&y.search(...v),["enter"])),type:"text",class:"form-control",placeholder:"Search study or author","aria-label":"Search study or author","aria-describedby":"basic-addon2"},null,544),[[Xe,m.searchText]]),d("span",{class:"input-group-text",id:"basic-addon2",onClick:l[2]||(l[2]=(...v)=>y.search&&y.search(...v))},oP)])]),d("li",iP,[ce(w,{to:{name:"Login"},class:"nav-link"},{default:je(()=>[H("Login")]),_:1})]),d("li",sP,[ce(w,{to:{name:"Sign Up"},class:"nav-link"},{default:je(()=>[H("Signup")]),_:1})])])])])])}const aP=ut(j5,[["render",rP],["__scopeId","data-v-3693317f"]]);const lP={},cP={class:"container-fluid footer"},dP=fo('<span data-v-3a5d0073>\xA92022 Aperier Publishing. All Rights Reserved.</span><div class="d-flex gap-3" data-v-3a5d0073><a href="https://www.linkedin.com/company/aperier/" target="_blank" data-v-3a5d0073><i class="fa-brands fa-linkedin fa-xl" data-v-3a5d0073></i></a><a href="https://www.facebook.com/profile.php?id=100087286333883" target="_blank" data-v-3a5d0073><i class="fa-brands fa-facebook fa-xl" data-v-3a5d0073></i></a><a href="https://twitter.com/aperierpublish" target="_blank" data-v-3a5d0073><i class="fa-brands fa-twitter fa-xl" data-v-3a5d0073></i></a></div>',2);function uP(s,l,h,g,m,y){const w=et("router-link");return re(),ae("div",cP,[dP,d("span",null,[ce(w,{to:{name:"Policy and Condition"},style:{"text-decoration":"none",color:"white"}},{default:je(()=>[H("Terms & Conditions | Privacy policy ")]),_:1}),H(" | FQA ")])])}const hP=ut(lP,[["render",uP],["__scopeId","data-v-3a5d0073"]]);const fP={components:{HeaderComponent:aP,FooterComponent:hP}};function pP(s,l,h,g,m,y){const w=et("HeaderComponent"),v=et("router-view"),A=et("FooterComponent");return re(),ae(rt,null,[this.$route.name!=="Preview Pdf"?(re(),Bi(w,{key:0})):Mi("",!0),(re(),Bi(v,{key:s.$route.path})),this.$route.name!=="Preview Pdf"?(re(),Bi(A,{key:1})):Mi("",!0)],64)}const mP=ut(fP,[["render",pP]]),Pp="/build/assets/bird.efc9b1b5.png";const gP={methods:{logout(){localStorage.removeItem("userEmail"),localStorage.removeItem("isAdmin"),this.$router.push({name:"Home"})}}},fa=s=>(Rt("data-v-35526d65"),s=s(),zt(),s),bP={class:"main-sidebar sidebar-dark-primary elevation-4"},_P=fa(()=>d("span",{class:"brand-link"},[d("img",{src:Pp,alt:"AdminLTE Logo",class:"brand-image bg-success px-2 py-1 img-circle elevation-3",style:{opacity:"0.8"}}),d("span",{class:"brand-text font-weight-light"},"Aperier")],-1)),wP={class:"sidebar"},kP={class:"mt-2"},vP={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",id:"nav_ul"},yP={class:"nav-item"},AP=fa(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),CP=fa(()=>d("p",null,"Author Dashboard",-1)),xP={class:"nav-item"},EP=fa(()=>d("i",{class:"nav-icon fas fa-users mr-2"},null,-1)),DP=fa(()=>d("p",null,"Update Profile",-1)),TP={class:"nav-item"},SP=fa(()=>d("i",{class:"nav-icon fas fa-plus mr-2"},null,-1)),IP=fa(()=>d("p",null,"Instruction to Authors",-1)),MP=fa(()=>d("i",{class:"nav-icon fa-solid fa-right-from-bracket"},null,-1)),PP=fa(()=>d("p",null,"Logout",-1)),NP=[MP,PP];function BP(s,l,h,g,m,y){const w=et("router-link");return re(),ae("aside",bP,[_P,d("div",wP,[d("nav",kP,[d("ul",vP,[d("li",yP,[ce(w,{to:{name:"Author Dashboard"},class:"nav-link"},{default:je(()=>[AP,CP]),_:1})]),d("li",xP,[ce(w,{to:{name:"Author Update Profile"},class:"nav-link"},{default:je(()=>[EP,DP]),_:1})]),d("li",TP,[ce(w,{to:{name:"Author Instruction"},class:"nav-link"},{default:je(()=>[SP,IP]),_:1})]),d("li",{class:"nav-item",onClick:l[1]||(l[1]=v=>y.logout())},[d("a",{onClick:l[0]||(l[0]=v=>y.logout()),class:"nav-link"},NP)])])])])])}const OP=ut(gP,[["render",BP],["__scopeId","data-v-35526d65"]]),LP={data(){return{fullName:null}},mounted(){this.fullName=localStorage.getItem("userName")}},RP={class:"main-header navbar navbar-expand navbar-white navbar-light"},zP={class:"navbar-nav d-flex align-items-center",style:{gap:"20px"}},jP=d("li",{class:"nav-item"},[d("span",{class:"nav-link","data-widget":"pushmenu",role:"button"},[d("i",{class:"fas fa-bars"})])],-1),FP={class:"nav-item"},$P={class:"text-lg font-weight-bold"};function VP(s,l,h,g,m,y){return re(),ae("nav",RP,[d("ul",zP,[jP,d("li",FP,[d("span",$P,pe(m.fullName),1)])])])}const UP=ut(LP,[["render",VP]]);const HP={},pE=s=>(Rt("data-v-fe4f30d9"),s=s(),zt(),s),qP={class:"main-footer"},WP={class:"footer"},GP=pE(()=>d("span",null,"\xA92022 Aperier Publishing. All Rights Reserved.",-1)),KP=pE(()=>d("div",{class:"d-flex gap-3"},[d("i",{class:"fa-brands fa-linkedin fa-xl"}),d("i",{class:"fa-brands fa-facebook fa-xl"}),d("i",{class:"fa-brands fa-twitter fa-xl"})],-1));function YP(s,l,h,g,m,y){const w=et("router-link");return re(),ae("footer",qP,[d("div",WP,[GP,KP,d("span",null,[ce(w,{to:{name:"Policy and Condition"},style:{"text-decoration":"none",color:"white"}},{default:je(()=>[H("Terms & Conditions | Privacy policy ")]),_:1}),H(" | FQA ")])])])}const QP=ut(HP,[["render",YP],["__scopeId","data-v-fe4f30d9"]]),ZP={components:{Sidebar:OP,Navbar:UP,Footer:QP}};function JP(s,l,h,g,m,y){const w=et("Navbar"),v=et("Sidebar"),A=et("router-view"),T=et("Footer");return re(),ae(rt,null,[ce(w),ce(v),(re(),Bi(A,{key:s.$route.path})),ce(T)],64)}const XP=ut(ZP,[["render",JP]]);const eN={methods:{logout(){localStorage.removeItem("userEmail"),localStorage.removeItem("isAdmin"),localStorage.removeItem("userName"),this.$router.push({name:"Home"})}}},Ri=s=>(Rt("data-v-b5c28ff9"),s=s(),zt(),s),tN={class:"main-sidebar sidebar-dark-primary elevation-4"},nN=Ri(()=>d("span",{class:"brand-link"},[d("img",{src:Pp,alt:"AdminLTE Logo",class:"brand-image bg-success px-2 py-1 img-circle elevation-3",style:{opacity:"0.8"}}),d("span",{class:"brand-text font-weight-light"},"Aperier")],-1)),oN={class:"sidebar"},iN={class:"mt-2"},sN={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",id:"nav_ul"},rN={class:"nav-item"},aN=Ri(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),lN=Ri(()=>d("p",null,"Dashboard",-1)),cN={class:"nav-item"},dN=Ri(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),uN=Ri(()=>d("p",null,"Ongoing Studies",-1)),hN={class:"nav-item"},fN=Ri(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),pN=Ri(()=>d("p",null,"Published Studies",-1)),mN={class:"nav-item"},gN=Ri(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),bN=Ri(()=>d("p",null,"Archived Studies",-1)),_N={class:"nav-item"},wN=Ri(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),kN=Ri(()=>d("p",null,"News",-1)),vN=Ri(()=>d("i",{class:"nav-icon fa-solid fa-right-from-bracket"},null,-1)),yN=Ri(()=>d("p",null,"Logout",-1)),AN=[vN,yN];function CN(s,l,h,g,m,y){const w=et("router-link");return re(),ae("aside",tN,[nN,d("div",oN,[d("nav",iN,[d("ul",sN,[d("li",rN,[ce(w,{to:{name:"Admin Dashboard"},class:"nav-link"},{default:je(()=>[aN,lN]),_:1})]),d("li",cN,[ce(w,{to:{name:"Admin Ongoing Studies"},class:"nav-link"},{default:je(()=>[dN,uN]),_:1})]),d("li",hN,[ce(w,{to:{name:"Admin Published Studies"},class:"nav-link"},{default:je(()=>[fN,pN]),_:1})]),d("li",mN,[ce(w,{to:{name:"Admin Archived Studies"},class:"nav-link"},{default:je(()=>[gN,bN]),_:1})]),d("li",_N,[ce(w,{to:{name:"Admin News"},class:"nav-link"},{default:je(()=>[wN,kN]),_:1})]),d("li",{class:"nav-item",onClick:l[1]||(l[1]=v=>y.logout())},[d("a",{onClick:l[0]||(l[0]=v=>y.logout()),class:"nav-link"},AN)])])])])])}const xN=ut(eN,[["render",CN],["__scopeId","data-v-b5c28ff9"]]),EN={},DN={class:"main-header navbar navbar-expand navbar-white navbar-light"},TN=d("ul",{class:"navbar-nav d-flex align-items-center",style:{gap:"20px"}},[d("li",{class:"nav-item"},[d("span",{class:"nav-link","data-widget":"pushmenu",role:"button"},[d("i",{class:"fas fa-bars"})])]),d("li",{class:"nav-item"},[d("span",{class:"text-lg font-weight-bold"},pe("Shihab Jamil"))])],-1),SN=[TN];function IN(s,l,h,g,m,y){return re(),ae("nav",DN,SN)}const MN=ut(EN,[["render",IN]]);const PN={},mE=s=>(Rt("data-v-fc38e8c7"),s=s(),zt(),s),NN={class:"main-footer"},BN={class:"footer"},ON=mE(()=>d("span",null,"\xA92022 Aperier Publishing. All Rights Reserved.",-1)),LN=mE(()=>d("div",{class:"d-flex gap-3"},[d("i",{class:"fa-brands fa-linkedin fa-xl"}),d("i",{class:"fa-brands fa-facebook fa-xl"}),d("i",{class:"fa-brands fa-twitter fa-xl"})],-1));function RN(s,l,h,g,m,y){const w=et("router-link");return re(),ae("footer",NN,[d("div",BN,[ON,LN,d("span",null,[ce(w,{to:{name:"Policy and Condition"},style:{"text-decoration":"none",color:"white"}},{default:je(()=>[H("Terms & Conditions | Privacy policy ")]),_:1}),H(" | FQA ")])])])}const zN=ut(PN,[["render",RN],["__scopeId","data-v-fc38e8c7"]]),jN={components:{Sidebar:xN,Navbar:MN,Footer:zN}};function FN(s,l,h,g,m,y){const w=et("Navbar"),v=et("Sidebar"),A=et("router-view"),T=et("Footer");return re(),ae(rt,null,[ce(w),ce(v),(re(),Bi(A,{key:s.$route.path})),ce(T)],64)}const $N=ut(jN,[["render",FN]]);const VN={components:{PublisherLayout:mP,AuthorLayout:XP,AdminLayout:$N},data(){return{layout:"PublisherLayout"}},methods:{layoutGenerator(){return localStorage.getItem("userEmail")?((this.$router.currentRoute.value.name==="Home"||this.$router.currentRoute.value.name==="Login"||this.$router.currentRoute.value.name==="Sign Up")&&(localStorage.getItem("isAdmin")==="true"?this.$router.push({name:"Admin Dashboard"}):this.$router.push({name:"Author Dashboard"})),localStorage.getItem("isAdmin")==="true"?this.layout="AdminLayout":this.layout="AuthorLayout"):this.layout="PublisherLayout",this.layout}},mounted(){this.layoutGenerator()},watch:{$route(s,l){this.layoutGenerator()}}};function UN(s,l,h,g,m,y){return re(),Bi(yx(m.layout))}const HN=ut(VN,[["render",UN]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _u=typeof window<"u";function qN(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Dn=Object.assign;function bv(s,l){const h={};for(const g in l){const m=l[g];h[g]=Rs(m)?m.map(s):s(m)}return h}const cp=()=>{},Rs=Array.isArray,WN=/\/$/,GN=s=>s.replace(WN,"");function _v(s,l,h="/"){let g,m={},y="",w="";const v=l.indexOf("#");let A=l.indexOf("?");return v<A&&v>=0&&(A=-1),A>-1&&(g=l.slice(0,A),y=l.slice(A+1,v>-1?v:l.length),m=s(y)),v>-1&&(g=g||l.slice(0,v),w=l.slice(v,l.length)),g=ZN(g!=null?g:l,h),{fullPath:g+(y&&"?")+y+w,path:g,query:m,hash:w}}function KN(s,l){const h=l.query?s(l.query):"";return l.path+(h&&"?")+h+(l.hash||"")}function a1(s,l){return!l||!s.toLowerCase().startsWith(l.toLowerCase())?s:s.slice(l.length)||"/"}function YN(s,l,h){const g=l.matched.length-1,m=h.matched.length-1;return g>-1&&g===m&&Su(l.matched[g],h.matched[m])&&gE(l.params,h.params)&&s(l.query)===s(h.query)&&l.hash===h.hash}function Su(s,l){return(s.aliasOf||s)===(l.aliasOf||l)}function gE(s,l){if(Object.keys(s).length!==Object.keys(l).length)return!1;for(const h in s)if(!QN(s[h],l[h]))return!1;return!0}function QN(s,l){return Rs(s)?l1(s,l):Rs(l)?l1(l,s):s===l}function l1(s,l){return Rs(l)?s.length===l.length&&s.every((h,g)=>h===l[g]):s.length===1&&s[0]===l}function ZN(s,l){if(s.startsWith("/"))return s;if(!s)return l;const h=l.split("/"),g=s.split("/");let m=h.length-1,y,w;for(y=0;y<g.length;y++)if(w=g[y],w!==".")if(w==="..")m>1&&m--;else break;return h.slice(0,m).join("/")+"/"+g.slice(y-(y===g.length?1:0)).join("/")}var _p;(function(s){s.pop="pop",s.push="push"})(_p||(_p={}));var dp;(function(s){s.back="back",s.forward="forward",s.unknown=""})(dp||(dp={}));function JN(s){if(!s)if(_u){const l=document.querySelector("base");s=l&&l.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),GN(s)}const XN=/^[^#]+#/;function e4(s,l){return s.replace(XN,"#")+l}function t4(s,l){const h=document.documentElement.getBoundingClientRect(),g=s.getBoundingClientRect();return{behavior:l.behavior,left:g.left-h.left-(l.left||0),top:g.top-h.top-(l.top||0)}}const l_=()=>({left:window.pageXOffset,top:window.pageYOffset});function n4(s){let l;if("el"in s){const h=s.el,g=typeof h=="string"&&h.startsWith("#"),m=typeof h=="string"?g?document.getElementById(h.slice(1)):document.querySelector(h):h;if(!m)return;l=t4(m,s)}else l=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function c1(s,l){return(history.state?history.state.position-l:-1)+s}const $v=new Map;function o4(s,l){$v.set(s,l)}function i4(s){const l=$v.get(s);return $v.delete(s),l}let s4=()=>location.protocol+"//"+location.host;function bE(s,l){const{pathname:h,search:g,hash:m}=l,y=s.indexOf("#");if(y>-1){let v=m.includes(s.slice(y))?s.slice(y).length:1,A=m.slice(v);return A[0]!=="/"&&(A="/"+A),a1(A,"")}return a1(h,s)+g+m}function r4(s,l,h,g){let m=[],y=[],w=null;const v=({state:M})=>{const j=bE(s,location),ee=h.value,le=l.value;let _e=0;if(M){if(h.value=j,l.value=M,w&&w===ee){w=null;return}_e=le?M.position-le.position:0}else g(j);m.forEach(te=>{te(h.value,ee,{delta:_e,type:_p.pop,direction:_e?_e>0?dp.forward:dp.back:dp.unknown})})};function A(){w=h.value}function T(M){m.push(M);const j=()=>{const ee=m.indexOf(M);ee>-1&&m.splice(ee,1)};return y.push(j),j}function P(){const{history:M}=window;!M.state||M.replaceState(Dn({},M.state,{scroll:l_()}),"")}function N(){for(const M of y)M();y=[],window.removeEventListener("popstate",v),window.removeEventListener("beforeunload",P)}return window.addEventListener("popstate",v),window.addEventListener("beforeunload",P),{pauseListeners:A,listen:T,destroy:N}}function d1(s,l,h,g=!1,m=!1){return{back:s,current:l,forward:h,replaced:g,position:window.history.length,scroll:m?l_():null}}function a4(s){const{history:l,location:h}=window,g={value:bE(s,h)},m={value:l.state};m.value||y(g.value,{back:null,current:g.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function y(A,T,P){const N=s.indexOf("#"),M=N>-1?(h.host&&document.querySelector("base")?s:s.slice(N))+A:s4()+s+A;try{l[P?"replaceState":"pushState"](T,"",M),m.value=T}catch(j){console.error(j),h[P?"replace":"assign"](M)}}function w(A,T){const P=Dn({},l.state,d1(m.value.back,A,m.value.forward,!0),T,{position:m.value.position});y(A,P,!0),g.value=A}function v(A,T){const P=Dn({},m.value,l.state,{forward:A,scroll:l_()});y(P.current,P,!0);const N=Dn({},d1(g.value,A,null),{position:P.position+1},T);y(A,N,!1),g.value=A}return{location:g,state:m,push:v,replace:w}}function l4(s){s=JN(s);const l=a4(s),h=r4(s,l.state,l.location,l.replace);function g(y,w=!0){w||h.pauseListeners(),history.go(y)}const m=Dn({location:"",base:s,go:g,createHref:e4.bind(null,s)},l,h);return Object.defineProperty(m,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(m,"state",{enumerable:!0,get:()=>l.state.value}),m}function c4(s){return typeof s=="string"||s&&typeof s=="object"}function _E(s){return typeof s=="string"||typeof s=="symbol"}const cl={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wE=Symbol("");var u1;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(u1||(u1={}));function Iu(s,l){return Dn(new Error,{type:s,[wE]:!0},l)}function oa(s,l){return s instanceof Error&&wE in s&&(l==null||!!(s.type&l))}const h1="[^/]+?",d4={sensitive:!1,strict:!1,start:!0,end:!0},u4=/[.+*?^${}()[\]/\\]/g;function h4(s,l){const h=Dn({},d4,l),g=[];let m=h.start?"^":"";const y=[];for(const T of s){const P=T.length?[]:[90];h.strict&&!T.length&&(m+="/");for(let N=0;N<T.length;N++){const M=T[N];let j=40+(h.sensitive?.25:0);if(M.type===0)N||(m+="/"),m+=M.value.replace(u4,"\\$&"),j+=40;else if(M.type===1){const{value:ee,repeatable:le,optional:_e,regexp:te}=M;y.push({name:ee,repeatable:le,optional:_e});const Y=te||h1;if(Y!==h1){j+=10;try{new RegExp(`(${Y})`)}catch(ke){throw new Error(`Invalid custom RegExp for param "${ee}" (${Y}): `+ke.message)}}let ie=le?`((?:${Y})(?:/(?:${Y}))*)`:`(${Y})`;N||(ie=_e&&T.length<2?`(?:/${ie})`:"/"+ie),_e&&(ie+="?"),m+=ie,j+=20,_e&&(j+=-8),le&&(j+=-20),Y===".*"&&(j+=-50)}P.push(j)}g.push(P)}if(h.strict&&h.end){const T=g.length-1;g[T][g[T].length-1]+=.7000000000000001}h.strict||(m+="/?"),h.end?m+="$":h.strict&&(m+="(?:/|$)");const w=new RegExp(m,h.sensitive?"":"i");function v(T){const P=T.match(w),N={};if(!P)return null;for(let M=1;M<P.length;M++){const j=P[M]||"",ee=y[M-1];N[ee.name]=j&&ee.repeatable?j.split("/"):j}return N}function A(T){let P="",N=!1;for(const M of s){(!N||!P.endsWith("/"))&&(P+="/"),N=!1;for(const j of M)if(j.type===0)P+=j.value;else if(j.type===1){const{value:ee,repeatable:le,optional:_e}=j,te=ee in T?T[ee]:"";if(Rs(te)&&!le)throw new Error(`Provided param "${ee}" is an array but it is not repeatable (* or + modifiers)`);const Y=Rs(te)?te.join("/"):te;if(!Y)if(_e)M.length<2&&(P.endsWith("/")?P=P.slice(0,-1):N=!0);else throw new Error(`Missing required param "${ee}"`);P+=Y}}return P||"/"}return{re:w,score:g,keys:y,parse:v,stringify:A}}function f4(s,l){let h=0;for(;h<s.length&&h<l.length;){const g=l[h]-s[h];if(g)return g;h++}return s.length<l.length?s.length===1&&s[0]===40+40?-1:1:s.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function p4(s,l){let h=0;const g=s.score,m=l.score;for(;h<g.length&&h<m.length;){const y=f4(g[h],m[h]);if(y)return y;h++}if(Math.abs(m.length-g.length)===1){if(f1(g))return 1;if(f1(m))return-1}return m.length-g.length}function f1(s){const l=s[s.length-1];return s.length>0&&l[l.length-1]<0}const m4={type:0,value:""},g4=/[a-zA-Z0-9_]/;function b4(s){if(!s)return[[]];if(s==="/")return[[m4]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function l(j){throw new Error(`ERR (${h})/"${T}": ${j}`)}let h=0,g=h;const m=[];let y;function w(){y&&m.push(y),y=[]}let v=0,A,T="",P="";function N(){!T||(h===0?y.push({type:0,value:T}):h===1||h===2||h===3?(y.length>1&&(A==="*"||A==="+")&&l(`A repeatable param (${T}) must be alone in its segment. eg: '/:ids+.`),y.push({type:1,value:T,regexp:P,repeatable:A==="*"||A==="+",optional:A==="*"||A==="?"})):l("Invalid state to consume buffer"),T="")}function M(){T+=A}for(;v<s.length;){if(A=s[v++],A==="\\"&&h!==2){g=h,h=4;continue}switch(h){case 0:A==="/"?(T&&N(),w()):A===":"?(N(),h=1):M();break;case 4:M(),h=g;break;case 1:A==="("?h=2:g4.test(A)?M():(N(),h=0,A!=="*"&&A!=="?"&&A!=="+"&&v--);break;case 2:A===")"?P[P.length-1]=="\\"?P=P.slice(0,-1)+A:h=3:P+=A;break;case 3:N(),h=0,A!=="*"&&A!=="?"&&A!=="+"&&v--,P="";break;default:l("Unknown state");break}}return h===2&&l(`Unfinished custom RegExp for param "${T}"`),N(),w(),m}function _4(s,l,h){const g=h4(b4(s.path),h),m=Dn(g,{record:s,parent:l,children:[],alias:[]});return l&&!m.record.aliasOf==!l.record.aliasOf&&l.children.push(m),m}function w4(s,l){const h=[],g=new Map;l=g1({strict:!1,end:!0,sensitive:!1},l);function m(P){return g.get(P)}function y(P,N,M){const j=!M,ee=k4(P);ee.aliasOf=M&&M.record;const le=g1(l,P),_e=[ee];if("alias"in P){const ie=typeof P.alias=="string"?[P.alias]:P.alias;for(const ke of ie)_e.push(Dn({},ee,{components:M?M.record.components:ee.components,path:ke,aliasOf:M?M.record:ee}))}let te,Y;for(const ie of _e){const{path:ke}=ie;if(N&&ke[0]!=="/"){const V=N.record.path,Ne=V[V.length-1]==="/"?"":"/";ie.path=N.record.path+(ke&&Ne+ke)}if(te=_4(ie,N,le),M?M.alias.push(te):(Y=Y||te,Y!==te&&Y.alias.push(te),j&&P.name&&!m1(te)&&w(P.name)),ee.children){const V=ee.children;for(let Ne=0;Ne<V.length;Ne++)y(V[Ne],te,M&&M.children[Ne])}M=M||te,(te.record.components&&Object.keys(te.record.components).length||te.record.name||te.record.redirect)&&A(te)}return Y?()=>{w(Y)}:cp}function w(P){if(_E(P)){const N=g.get(P);N&&(g.delete(P),h.splice(h.indexOf(N),1),N.children.forEach(w),N.alias.forEach(w))}else{const N=h.indexOf(P);N>-1&&(h.splice(N,1),P.record.name&&g.delete(P.record.name),P.children.forEach(w),P.alias.forEach(w))}}function v(){return h}function A(P){let N=0;for(;N<h.length&&p4(P,h[N])>=0&&(P.record.path!==h[N].record.path||!kE(P,h[N]));)N++;h.splice(N,0,P),P.record.name&&!m1(P)&&g.set(P.record.name,P)}function T(P,N){let M,j={},ee,le;if("name"in P&&P.name){if(M=g.get(P.name),!M)throw Iu(1,{location:P});le=M.record.name,j=Dn(p1(N.params,M.keys.filter(Y=>!Y.optional).map(Y=>Y.name)),P.params&&p1(P.params,M.keys.map(Y=>Y.name))),ee=M.stringify(j)}else if("path"in P)ee=P.path,M=h.find(Y=>Y.re.test(ee)),M&&(j=M.parse(ee),le=M.record.name);else{if(M=N.name?g.get(N.name):h.find(Y=>Y.re.test(N.path)),!M)throw Iu(1,{location:P,currentLocation:N});le=M.record.name,j=Dn({},N.params,P.params),ee=M.stringify(j)}const _e=[];let te=M;for(;te;)_e.unshift(te.record),te=te.parent;return{name:le,path:ee,params:j,matched:_e,meta:y4(_e)}}return s.forEach(P=>y(P)),{addRoute:y,resolve:T,removeRoute:w,getRoutes:v,getRecordMatcher:m}}function p1(s,l){const h={};for(const g of l)g in s&&(h[g]=s[g]);return h}function k4(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:v4(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function v4(s){const l={},h=s.props||!1;if("component"in s)l.default=h;else for(const g in s.components)l[g]=typeof h=="boolean"?h:h[g];return l}function m1(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function y4(s){return s.reduce((l,h)=>Dn(l,h.meta),{})}function g1(s,l){const h={};for(const g in s)h[g]=g in l?l[g]:s[g];return h}function kE(s,l){return l.children.some(h=>h===s||kE(s,h))}const vE=/#/g,A4=/&/g,C4=/\//g,x4=/=/g,E4=/\?/g,yE=/\+/g,D4=/%5B/g,T4=/%5D/g,AE=/%5E/g,S4=/%60/g,CE=/%7B/g,I4=/%7C/g,xE=/%7D/g,M4=/%20/g;function Ay(s){return encodeURI(""+s).replace(I4,"|").replace(D4,"[").replace(T4,"]")}function P4(s){return Ay(s).replace(CE,"{").replace(xE,"}").replace(AE,"^")}function Vv(s){return Ay(s).replace(yE,"%2B").replace(M4,"+").replace(vE,"%23").replace(A4,"%26").replace(S4,"`").replace(CE,"{").replace(xE,"}").replace(AE,"^")}function N4(s){return Vv(s).replace(x4,"%3D")}function B4(s){return Ay(s).replace(vE,"%23").replace(E4,"%3F")}function O4(s){return s==null?"":B4(s).replace(C4,"%2F")}function jb(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function L4(s){const l={};if(s===""||s==="?")return l;const g=(s[0]==="?"?s.slice(1):s).split("&");for(let m=0;m<g.length;++m){const y=g[m].replace(yE," "),w=y.indexOf("="),v=jb(w<0?y:y.slice(0,w)),A=w<0?null:jb(y.slice(w+1));if(v in l){let T=l[v];Rs(T)||(T=l[v]=[T]),T.push(A)}else l[v]=A}return l}function b1(s){let l="";for(let h in s){const g=s[h];if(h=N4(h),g==null){g!==void 0&&(l+=(l.length?"&":"")+h);continue}(Rs(g)?g.map(y=>y&&Vv(y)):[g&&Vv(g)]).forEach(y=>{y!==void 0&&(l+=(l.length?"&":"")+h,y!=null&&(l+="="+y))})}return l}function R4(s){const l={};for(const h in s){const g=s[h];g!==void 0&&(l[h]=Rs(g)?g.map(m=>m==null?null:""+m):g==null?g:""+g)}return l}const z4=Symbol(""),_1=Symbol(""),Cy=Symbol(""),EE=Symbol(""),Uv=Symbol("");function Zf(){let s=[];function l(g){return s.push(g),()=>{const m=s.indexOf(g);m>-1&&s.splice(m,1)}}function h(){s=[]}return{add:l,list:()=>s,reset:h}}function pl(s,l,h,g,m){const y=g&&(g.enterCallbacks[m]=g.enterCallbacks[m]||[]);return()=>new Promise((w,v)=>{const A=N=>{N===!1?v(Iu(4,{from:h,to:l})):N instanceof Error?v(N):c4(N)?v(Iu(2,{from:l,to:N})):(y&&g.enterCallbacks[m]===y&&typeof N=="function"&&y.push(N),w())},T=s.call(g&&g.instances[m],l,h,A);let P=Promise.resolve(T);s.length<3&&(P=P.then(A)),P.catch(N=>v(N))})}function wv(s,l,h,g){const m=[];for(const y of s)for(const w in y.components){let v=y.components[w];if(!(l!=="beforeRouteEnter"&&!y.instances[w]))if(j4(v)){const T=(v.__vccOpts||v)[l];T&&m.push(pl(T,h,g,y,w))}else{let A=v();m.push(()=>A.then(T=>{if(!T)return Promise.reject(new Error(`Couldn't resolve component "${w}" at "${y.path}"`));const P=qN(T)?T.default:T;y.components[w]=P;const M=(P.__vccOpts||P)[l];return M&&pl(M,h,g,y,w)()}))}}return m}function j4(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function w1(s){const l=_r(Cy),h=_r(EE),g=Pi(()=>l.resolve(Tc(s.to))),m=Pi(()=>{const{matched:A}=g.value,{length:T}=A,P=A[T-1],N=h.matched;if(!P||!N.length)return-1;const M=N.findIndex(Su.bind(null,P));if(M>-1)return M;const j=k1(A[T-2]);return T>1&&k1(P)===j&&N[N.length-1].path!==j?N.findIndex(Su.bind(null,A[T-2])):M}),y=Pi(()=>m.value>-1&&U4(h.params,g.value.params)),w=Pi(()=>m.value>-1&&m.value===h.matched.length-1&&gE(h.params,g.value.params));function v(A={}){return V4(A)?l[Tc(s.replace)?"replace":"push"](Tc(s.to)).catch(cp):Promise.resolve()}return{route:g,href:Pi(()=>g.value.href),isActive:y,isExactActive:w,navigate:v}}const F4=Tp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:w1,setup(s,{slots:l}){const h=Nu(w1(s)),{options:g}=_r(Cy),m=Pi(()=>({[v1(s.activeClass,g.linkActiveClass,"router-link-active")]:h.isActive,[v1(s.exactActiveClass,g.linkExactActiveClass,"router-link-exact-active")]:h.isExactActive}));return()=>{const y=l.default&&l.default(h);return s.custom?y:r_("a",{"aria-current":h.isExactActive?s.ariaCurrentValue:null,href:h.href,onClick:h.navigate,class:m.value},y)}}}),$4=F4;function V4(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const l=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return s.preventDefault&&s.preventDefault(),!0}}function U4(s,l){for(const h in l){const g=l[h],m=s[h];if(typeof g=="string"){if(g!==m)return!1}else if(!Rs(m)||m.length!==g.length||g.some((y,w)=>y!==m[w]))return!1}return!0}function k1(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const v1=(s,l,h)=>s!=null?s:l!=null?l:h,H4=Tp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:l,slots:h}){const g=_r(Uv),m=Pi(()=>s.route||g.value),y=_r(_1,0),w=Pi(()=>{let T=Tc(y);const{matched:P}=m.value;let N;for(;(N=P[T])&&!N.components;)T++;return T}),v=Pi(()=>m.value.matched[w.value]);ip(_1,Pi(()=>w.value+1)),ip(z4,v),ip(Uv,m);const A=op();return Cu(()=>[A.value,v.value,s.name],([T,P,N],[M,j,ee])=>{P&&(P.instances[N]=T,j&&j!==P&&T&&T===M&&(P.leaveGuards.size||(P.leaveGuards=j.leaveGuards),P.updateGuards.size||(P.updateGuards=j.updateGuards))),T&&P&&(!j||!Su(P,j)||!M)&&(P.enterCallbacks[N]||[]).forEach(le=>le(T))},{flush:"post"}),()=>{const T=m.value,P=s.name,N=v.value,M=N&&N.components[P];if(!M)return y1(h.default,{Component:M,route:T});const j=N.props[P],ee=j?j===!0?T.params:typeof j=="function"?j(T):j:null,_e=r_(M,Dn({},ee,l,{onVnodeUnmounted:te=>{te.component.isUnmounted&&(N.instances[P]=null)},ref:A}));return y1(h.default,{Component:_e,route:T})||_e}}});function y1(s,l){if(!s)return null;const h=s(l);return h.length===1?h[0]:h}const q4=H4;function W4(s){const l=w4(s.routes,s),h=s.parseQuery||L4,g=s.stringifyQuery||b1,m=s.history,y=Zf(),w=Zf(),v=Zf(),A=J1(cl);let T=cl;_u&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const P=bv.bind(null,X=>""+X),N=bv.bind(null,O4),M=bv.bind(null,jb);function j(X,Te){let Be,Ue;return _E(X)?(Be=l.getRecordMatcher(X),Ue=Te):Ue=X,l.addRoute(Ue,Be)}function ee(X){const Te=l.getRecordMatcher(X);Te&&l.removeRoute(Te)}function le(){return l.getRoutes().map(X=>X.record)}function _e(X){return!!l.getRecordMatcher(X)}function te(X,Te){if(Te=Dn({},Te||A.value),typeof X=="string"){const q=_v(h,X,Te.path),Z=l.resolve({path:q.path},Te),de=m.createHref(q.fullPath);return Dn(q,Z,{params:M(Z.params),hash:jb(q.hash),redirectedFrom:void 0,href:de})}let Be;if("path"in X)Be=Dn({},X,{path:_v(h,X.path,Te.path).path});else{const q=Dn({},X.params);for(const Z in q)q[Z]==null&&delete q[Z];Be=Dn({},X,{params:N(X.params)}),Te.params=N(Te.params)}const Ue=l.resolve(Be,Te),ht=X.hash||"";Ue.params=P(M(Ue.params));const Ht=KN(g,Dn({},X,{hash:P4(ht),path:Ue.path})),Ze=m.createHref(Ht);return Dn({fullPath:Ht,hash:ht,query:g===b1?R4(X.query):X.query||{}},Ue,{redirectedFrom:void 0,href:Ze})}function Y(X){return typeof X=="string"?_v(h,X,A.value.path):Dn({},X)}function ie(X,Te){if(T!==X)return Iu(8,{from:Te,to:X})}function ke(X){return we(X)}function V(X){return ke(Dn(Y(X),{replace:!0}))}function Ne(X){const Te=X.matched[X.matched.length-1];if(Te&&Te.redirect){const{redirect:Be}=Te;let Ue=typeof Be=="function"?Be(X):Be;return typeof Ue=="string"&&(Ue=Ue.includes("?")||Ue.includes("#")?Ue=Y(Ue):{path:Ue},Ue.params={}),Dn({query:X.query,hash:X.hash,params:"path"in Ue?{}:X.params},Ue)}}function we(X,Te){const Be=T=te(X),Ue=A.value,ht=X.state,Ht=X.force,Ze=X.replace===!0,q=Ne(Be);if(q)return we(Dn(Y(q),{state:typeof q=="object"?Dn({},ht,q.state):ht,force:Ht,replace:Ze}),Te||Be);const Z=Be;Z.redirectedFrom=Te;let de;return!Ht&&YN(g,Ue,Be)&&(de=Iu(16,{to:Z,from:Ue}),$n(Ue,Ue,!0,!1)),(de?Promise.resolve(de):Me(Z,Ue)).catch(ge=>oa(ge)?oa(ge,2)?ge:oo(ge):it(ge,Z,Ue)).then(ge=>{if(ge){if(oa(ge,2))return we(Dn({replace:Ze},Y(ge.to),{state:typeof ge.to=="object"?Dn({},ht,ge.to.state):ht,force:Ht}),Te||Z)}else ge=Ke(Z,Ue,!0,Ze,ht);return Fe(Z,Ue,ge),ge})}function he(X,Te){const Be=ie(X,Te);return Be?Promise.reject(Be):Promise.resolve()}function Me(X,Te){let Be;const[Ue,ht,Ht]=G4(X,Te);Be=wv(Ue.reverse(),"beforeRouteLeave",X,Te);for(const q of Ue)q.leaveGuards.forEach(Z=>{Be.push(pl(Z,X,Te))});const Ze=he.bind(null,X,Te);return Be.push(Ze),gu(Be).then(()=>{Be=[];for(const q of y.list())Be.push(pl(q,X,Te));return Be.push(Ze),gu(Be)}).then(()=>{Be=wv(ht,"beforeRouteUpdate",X,Te);for(const q of ht)q.updateGuards.forEach(Z=>{Be.push(pl(Z,X,Te))});return Be.push(Ze),gu(Be)}).then(()=>{Be=[];for(const q of X.matched)if(q.beforeEnter&&!Te.matched.includes(q))if(Rs(q.beforeEnter))for(const Z of q.beforeEnter)Be.push(pl(Z,X,Te));else Be.push(pl(q.beforeEnter,X,Te));return Be.push(Ze),gu(Be)}).then(()=>(X.matched.forEach(q=>q.enterCallbacks={}),Be=wv(Ht,"beforeRouteEnter",X,Te),Be.push(Ze),gu(Be))).then(()=>{Be=[];for(const q of w.list())Be.push(pl(q,X,Te));return Be.push(Ze),gu(Be)}).catch(q=>oa(q,8)?q:Promise.reject(q))}function Fe(X,Te,Be){for(const Ue of v.list())Ue(X,Te,Be)}function Ke(X,Te,Be,Ue,ht){const Ht=ie(X,Te);if(Ht)return Ht;const Ze=Te===cl,q=_u?history.state:{};Be&&(Ue||Ze?m.replace(X.fullPath,Dn({scroll:Ze&&q&&q.scroll},ht)):m.push(X.fullPath,ht)),A.value=X,$n(X,Te,Be,Ze),oo()}let Q;function nt(){Q||(Q=m.listen((X,Te,Be)=>{if(!St.listening)return;const Ue=te(X),ht=Ne(Ue);if(ht){we(Dn(ht,{replace:!0}),Ue).catch(cp);return}T=Ue;const Ht=A.value;_u&&o4(c1(Ht.fullPath,Be.delta),l_()),Me(Ue,Ht).catch(Ze=>oa(Ze,12)?Ze:oa(Ze,2)?(we(Ze.to,Ue).then(q=>{oa(q,20)&&!Be.delta&&Be.type===_p.pop&&m.go(-1,!1)}).catch(cp),Promise.reject()):(Be.delta&&m.go(-Be.delta,!1),it(Ze,Ue,Ht))).then(Ze=>{Ze=Ze||Ke(Ue,Ht,!1),Ze&&(Be.delta&&!oa(Ze,8)?m.go(-Be.delta,!1):Be.type===_p.pop&&oa(Ze,20)&&m.go(-1,!1)),Fe(Ue,Ht,Ze)}).catch(cp)}))}let Le=Zf(),Ut=Zf(),Qe;function it(X,Te,Be){oo(X);const Ue=Ut.list();return Ue.length?Ue.forEach(ht=>ht(X,Te,Be)):console.error(X),Promise.reject(X)}function yt(){return Qe&&A.value!==cl?Promise.resolve():new Promise((X,Te)=>{Le.add([X,Te])})}function oo(X){return Qe||(Qe=!X,nt(),Le.list().forEach(([Te,Be])=>X?Be(X):Te()),Le.reset()),X}function $n(X,Te,Be,Ue){const{scrollBehavior:ht}=s;if(!_u||!ht)return Promise.resolve();const Ht=!Be&&i4(c1(X.fullPath,0))||(Ue||!Be)&&history.state&&history.state.scroll||null;return Yb().then(()=>ht(X,Te,Ht)).then(Ze=>Ze&&n4(Ze)).catch(Ze=>it(Ze,X,Te))}const un=X=>m.go(X);let Rn;const mo=new Set,St={currentRoute:A,listening:!0,addRoute:j,removeRoute:ee,hasRoute:_e,getRoutes:le,resolve:te,options:s,push:ke,replace:V,go:un,back:()=>un(-1),forward:()=>un(1),beforeEach:y.add,beforeResolve:w.add,afterEach:v.add,onError:Ut.add,isReady:yt,install(X){const Te=this;X.component("RouterLink",$4),X.component("RouterView",q4),X.config.globalProperties.$router=Te,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>Tc(A)}),_u&&!Rn&&A.value===cl&&(Rn=!0,ke(m.location).catch(ht=>{}));const Be={};for(const ht in cl)Be[ht]=Pi(()=>A.value[ht]);X.provide(Cy,Te),X.provide(EE,Nu(Be)),X.provide(Uv,A);const Ue=X.unmount;mo.add(X),X.unmount=function(){mo.delete(X),mo.size<1&&(T=cl,Q&&Q(),Q=null,A.value=cl,Rn=!1,Qe=!1),Ue()}}};return St}function gu(s){return s.reduce((l,h)=>l.then(()=>h()),Promise.resolve())}function G4(s,l){const h=[],g=[],m=[],y=Math.max(l.matched.length,s.matched.length);for(let w=0;w<y;w++){const v=l.matched[w];v&&(s.matched.find(T=>Su(T,v))?g.push(v):h.push(v));const A=s.matched[w];A&&(l.matched.find(T=>Su(T,A))||m.push(A))}return[h,g,m]}const K4="/build/assets/books.85e6d0ea.png";const Y4={},c_=s=>(Rt("data-v-4e5ce75a"),s=s(),zt(),s),Q4={class:"home"},Z4=c_(()=>d("div",{class:"top-hero-image"},[d("p",{class:"welcome-header"},"Welcome to"),d("p",{class:"gree-heading"},"Aperier Publishing"),d("div",{class:"what-are-we"},[d("p",null,"Open Research"),d("p",null,"Speed"),d("p",null,"Quality"),d("p",null,"Impact"),d("p",null,"Visibility")])],-1)),J4={class:"join-us container-fluid p-lg-5 p-md-2"},X4={class:"row align-items-center"},eB={class:"col-lg-8 col-md-6 col-12 mt-md-0 my-4 d-flex flex-column"},tB=c_(()=>d("p",{class:"underline-title mt-lg-5"},"Interested in Joining Our Global Network?",-1)),nB=c_(()=>d("p",null,"We pride ourselves on providing a supportive and accessible service for our authors throughout the publishing process. We offer fast publication while providing rigorous peer review to maintain the integrity of information. We are committed to the highest standards of peer review. We\u2019re committed to promoting your research as widely as we can and providing as much visibility and exposure for your article as possible. Join US",-1)),oB=c_(()=>d("div",{class:"col-lg-4 col-md-6 col-12"},[d("img",{src:K4,class:"img-fluid",alt:""})],-1));function iB(s,l,h,g,m,y){const w=et("router-link");return re(),ae("section",Q4,[Z4,d("div",J4,[d("div",X4,[d("div",eB,[tB,nB,ce(w,{to:{name:"Sign Up"},class:"align-self-md-end align-self-start green-button"},{default:je(()=>[H("Join us")]),_:1})]),oB])])])}const sB=ut(Y4,[["render",iB],["__scopeId","data-v-4e5ce75a"]]),Ct={domain:"https://aperier.com"};const rB={props:["news"],data(){return{domain:Ct.domain}}},aB=s=>(Rt("data-v-983d30d3"),s=s(),zt(),s),lB={class:"container-fluid mb-5"},cB={class:"container"},dB={class:"col-md-3 col-12"},uB=["src"],hB={class:"col-md-9 col-12 px-md-5 px-3 mb-4 d-flex flex-column"},fB={class:"news-title"},pB={class:"news-date"},mB={class:"news-description"},gB=["innerHTML"],bB=aB(()=>d("hr",{class:"col-md-11 col-11"},null,-1)),_B={class:"row text-end pr-2"};function wB(s,l,h,g,m,y){const w=et("section-title"),v=et("router-link");return re(),ae("section",lB,[ce(w,{title:"News"}),d("div",cB,[(re(!0),ae(rt,null,Pt(h.news,A=>(re(),ae("div",{class:"row",key:A.id},[d("div",dB,[d("img",{src:`/storage/upload/news/${A.image}`,class:"img-fluid",alt:""},null,8,uB)]),d("div",hB,[d("p",fB,pe(A.title),1),d("p",pB,pe(A.date),1),d("p",mB,[d("span",{innerHTML:A.content},null,8,gB),ce(v,{to:{name:"News Details",params:{id:A.id}}},{default:je(()=>[H("Read More")]),_:2},1032,["to"])])]),bB]))),128)),d("div",_B,[d("p",null,[ce(v,{to:{name:"News List"}},{default:je(()=>[H("More News")]),_:1})])])])])}const kB=ut(rB,[["render",wB],["__scopeId","data-v-983d30d3"]]),DE="/build/assets/journal_1.0e107a9d.png",TE="/build/assets/journal_2.f21901c5.png",SE="/build/assets/journal_3.7dcfd42a.png",IE="/build/assets/journal_4.11861d88.png",ME="/build/assets/journal_5.37879ff9.png",PE="/build/assets/journal_6.932bc54d.png";const vB={},ls=s=>(Rt("data-v-2ba95125"),s=s(),zt(),s),yB={class:"container-fluid gray-color p-md-5 p-3"},AB={class:"container"},CB={class:"row g-md-3 g-5 justify-content-center"},xB={class:"col-md-3 col-6 d-flex flex-column align-items-center"},EB=ls(()=>d("img",{src:DE,class:"img-fluid"},null,-1)),DB=ls(()=>d("p",{class:"journal-title"},"Sustainability Studies",-1)),TB={class:"col-md-3 col-6 d-flex flex-column align-items-center"},SB=ls(()=>d("img",{src:TE,class:"img-fluid"},null,-1)),IB=ls(()=>d("p",{class:"journal-title"},"Business Studies",-1)),MB={class:"col-md-3 col-6 d-flex flex-column align-items-center"},PB=ls(()=>d("img",{src:SE,class:"img-fluid"},null,-1)),NB=ls(()=>d("p",{class:"journal-title"},"Bibliometric and Systematic Reviews",-1)),BB={class:"col-md-3 col-6 d-flex flex-column align-items-center"},OB=ls(()=>d("img",{src:IE,class:"img-fluid"},null,-1)),LB=ls(()=>d("p",{class:"journal-title"},"Marketing Studies",-1)),RB={class:"col-md-3 col-6 d-flex flex-column align-items-center"},zB=ls(()=>d("img",{src:ME,class:"img-fluid"},null,-1)),jB=ls(()=>d("p",{class:"journal-title"},"Finance Studies",-1)),FB={class:"col-md-3 col-6 d-flex flex-column align-items-center"},$B=ls(()=>d("img",{src:PE,class:"img-fluid"},null,-1)),VB=ls(()=>d("p",{class:"journal-title"},"Tourism Studies",-1));function UB(s,l,h,g,m,y){const w=et("section-title"),v=et("router-link");return re(),ae("section",yB,[ce(w,{title:"Journals"}),d("div",AB,[d("div",CB,[d("div",xB,[ce(v,{to:{name:"Journal Details",params:{id:1}}},{default:je(()=>[EB,DB]),_:1})]),d("div",TB,[ce(v,{to:{name:"Journal Details",params:{id:2}}},{default:je(()=>[SB,IB]),_:1})]),d("div",MB,[ce(v,{to:{name:"Journal Details",params:{id:3}}},{default:je(()=>[PB,NB]),_:1})]),d("div",BB,[ce(v,{to:{name:"Journal Details",params:{id:4}}},{default:je(()=>[OB,LB]),_:1})]),d("div",RB,[ce(v,{to:{name:"Journal Details",params:{id:5}}},{default:je(()=>[zB,jB]),_:1})]),d("div",FB,[ce(v,{to:{name:"Journal Details",params:{id:6}}},{default:je(()=>[$B,VB]),_:1})])])])])}const HB=ut(vB,[["render",UB],["__scopeId","data-v-2ba95125"]]);const qB={},WB={class:"container-fluid white-color p-md-5 p-3"},GB={class:"container"},KB=fo('<div class="row justify-content-center g-5" data-v-54fec41f><div class="col-lg-4 col-md-6 col-12 px-md-4 px-1" data-v-54fec41f><div class="custom-card" data-v-54fec41f><p class="custom-card-title" data-v-54fec41f>Best Article Award 2023</p><p class="custom-card-text" data-v-54fec41f>We are pleased to announce the \u201CBest Paper Award\u201D for research and review articles published in Aperier in 2023. One review and one research article will receive an award each. The papers will be selected after thorough evaluation by the Award Committee.</p></div></div><div class="col-lg-4 col-md-6 col-12 px-md-4 px-1" data-v-54fec41f><div class="custom-card" data-v-54fec41f><p class="custom-card-title" data-v-54fec41f>Best Reviewer Award 2023</p><p class="custom-card-text" data-v-54fec41f>We wish to acknowledge our reviewers who so generously offer their time to review the papers submitted to Aperier journals by presenting an award to the reviewers who have demonstrated their dedication, professionalism, and timeliness in reviewing manuscripts.</p></div></div><div class="col-lg-4 col-md-6 col-12 px-md-4 px-1" data-v-54fec41f><div class="custom-card" data-v-54fec41f><p class="custom-card-title" data-v-54fec41f>Travel Award 2023</p><p class="custom-card-text" data-v-54fec41f>This award provides financial support for the winners to attend an international conference in the field of cardiovascular development and disease to be held in 2023, in order to hold a presentation, present a poster, or both.</p></div></div></div>',1),YB={class:"row text-end mt-4"};function QB(s,l,h,g,m,y){const w=et("section-title"),v=et("router-link");return re(),ae("section",WB,[ce(w,{title:"Awards"}),d("div",GB,[KB,d("div",YB,[d("p",null,[ce(v,{to:{name:"Award List"}},{default:je(()=>[H("Read more")]),_:1})])])])])}const ZB=ut(qB,[["render",QB],["__scopeId","data-v-54fec41f"]]);const JB={},XB=s=>(Rt("data-v-791edabe"),s=s(),zt(),s),eO={class:"container-fluid gray-color p-lg-5 p-md-4",id:"about"},tO=XB(()=>d("div",{class:"container"},[d("div",{class:"about-card p-md-4 p-3"},[d("p",null,"Aperier Publishing"),d("p",null,[H("A pioneer in scholarly, open access publishing, Aperier has supported academic communities since 2018. Based in Palestine, Aperier has the mission to foster open scientific exchange in all forms, across all disciplines. "),d("br"),d("br"),H(" Our new diverse and open access journals, are supported by many academic experts who share our mission, values, and commitment to providing high-quality service for our authors. We serve scholars from around the world to ensure the latest research is freely available and all content is distributed under a Creative Commons Attribution License (CC BY). "),d("br"),d("br"),H(" Aperier have target to publish journal articles that are ranked as high impact within their fields. ")])])],-1));function nO(s,l,h,g,m,y){const w=et("section-title");return re(),ae("section",eO,[ce(w,{title:"About"}),tO])}const oO=ut(JB,[["render",nO],["__scopeId","data-v-791edabe"]]),wp={_origin:"https://api.emailjs.com"},iO=(s,l="https://api.emailjs.com")=>{wp._userID=s,wp._origin=l},NE=(s,l,h)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!h)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class A1{constructor(l){this.status=l?l.status:0,this.text=l?l.responseText:"Network Error"}}const BE=(s,l,h={})=>new Promise((g,m)=>{const y=new XMLHttpRequest;y.addEventListener("load",({target:w})=>{const v=new A1(w);v.status===200||v.text==="OK"?g(v):m(v)}),y.addEventListener("error",({target:w})=>{m(new A1(w))}),y.open("POST",wp._origin+s,!0),Object.keys(h).forEach(w=>{y.setRequestHeader(w,h[w])}),y.send(l)}),sO=(s,l,h,g)=>{const m=g||wp._userID;NE(m,s,l);const y={lib_version:"3.10.0",user_id:m,service_id:s,template_id:l,template_params:h};return BE("/api/v1.0/email/send",JSON.stringify(y),{"Content-type":"application/json"})},rO=s=>{let l;if(typeof s=="string"?l=document.querySelector(s):l=s,!l||l.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return l},aO=(s,l,h,g)=>{const m=g||wp._userID,y=rO(h);NE(m,s,l);const w=new FormData(y);return w.append("lib_version","3.10.0"),w.append("service_id",s),w.append("template_id",l),w.append("user_id",m),BE("/api/v1.0/email/send-form",w)},lO={init:iO,send:sO,sendForm:aO};const cO={data(){return{form:{from_name:"",email_id:"",message:""}}},methods:{sendEmail(){lO.sendForm("service_3rg0t6u","template_ywfnu0a",this.$refs.form,"2ZgodGTTVZlxB4m5q").then(s=>{this.$refs.form.reset(),this.$swal({text:"Email has been sent successfully",icon:"success"})},s=>{this.$swal({text:"Please try again",icon:"error"})})}}},dO={class:"container-fluid white-color p-md-5 p-1"},uO={class:"container"},hO={class:"row g-5"},fO=fo('<div class="col-md-4 col-12" data-v-7f95c4be><div class="card-1 p-md-3 p-lg-4 p-4" data-v-7f95c4be><p data-v-7f95c4be>Aperier Publishing <br data-v-7f95c4be> P785 Hebron <br data-v-7f95c4be> West Bank, Palestine. <br data-v-7f95c4be><br data-v-7f95c4be> Phone : +970 02 227 1074 <br data-v-7f95c4be> Email : head@aperier.com <br data-v-7f95c4be> Office Hours : Sun \u2013 Thu (8:00 am \u2013 10:00 pm) <br data-v-7f95c4be> Friday (8:00 am \u2013 3:30 pm) <br data-v-7f95c4be><br data-v-7f95c4be> Website : aperier.com</p></div></div>',1),pO={class:"col-md-8 col-12 pl-md-4"},mO={class:"card-2"},gO=fo('<div class="row px-5 py-3" data-v-7f95c4be><div class="col-md-6 col-12" data-v-7f95c4be><div class="form-group" data-v-7f95c4be><label for="name" class="form-label" data-v-7f95c4be>Name</label><input type="text" class="form-control" id="from_name" placeholder="John Doe" data-v-7f95c4be></div></div><div class="col-md-6 col-12" data-v-7f95c4be><div class="form-group" data-v-7f95c4be><label for="email" class="form-label" data-v-7f95c4be>Email</label><input type="email" name="email_id" class="form-control" id="email" aria-describedby="emailHelp" placeholder="someone@gmail.com" data-v-7f95c4be></div></div><div class="col-12 mb-2" data-v-7f95c4be><div class="form-group" data-v-7f95c4be><label for="message" class="form-label" data-v-7f95c4be>Message</label><textarea name="message" id="message" cols="10" rows="3" class="form-control" placeholder="Message" data-v-7f95c4be></textarea></div></div><div class="col-12 text-end mb-2" data-v-7f95c4be><button class="green-button" type="submit" data-v-7f95c4be>Submit</button></div></div>',1),bO=[gO];function _O(s,l,h,g,m,y){const w=et("section-title");return re(),ae("section",dO,[ce(w,{title:"Contact Us"}),d("div",uO,[d("div",hO,[fO,d("div",pO,[d("div",mO,[d("form",{ref:"form",onSubmit:l[0]||(l[0]=kr((...v)=>y.sendEmail&&y.sendEmail(...v),["prevent"]))},bO,544)])])])])])}const wO=ut(cO,[["render",_O],["__scopeId","data-v-7f95c4be"]]);function OE(s,l){return function(){return s.apply(l,arguments)}}const{toString:LE}=Object.prototype,{getPrototypeOf:xy}=Object,Ey=(s=>l=>{const h=LE.call(l);return s[h]||(s[h]=h.slice(8,-1).toLowerCase())})(Object.create(null)),pa=s=>(s=s.toLowerCase(),l=>Ey(l)===s),d_=s=>l=>typeof l===s,{isArray:Bu}=Array,kp=d_("undefined");function kO(s){return s!==null&&!kp(s)&&s.constructor!==null&&!kp(s.constructor)&&Oc(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const RE=pa("ArrayBuffer");function vO(s){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(s):l=s&&s.buffer&&RE(s.buffer),l}const yO=d_("string"),Oc=d_("function"),zE=d_("number"),Dy=s=>s!==null&&typeof s=="object",AO=s=>s===!0||s===!1,Ib=s=>{if(Ey(s)!=="object")return!1;const l=xy(s);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},CO=pa("Date"),xO=pa("File"),EO=pa("Blob"),DO=pa("FileList"),TO=s=>Dy(s)&&Oc(s.pipe),SO=s=>{const l="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||LE.call(s)===l||Oc(s.toString)&&s.toString()===l)},IO=pa("URLSearchParams"),MO=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Np(s,l,{allOwnKeys:h=!1}={}){if(s===null||typeof s>"u")return;let g,m;if(typeof s!="object"&&(s=[s]),Bu(s))for(g=0,m=s.length;g<m;g++)l.call(null,s[g],g,s);else{const y=h?Object.getOwnPropertyNames(s):Object.keys(s),w=y.length;let v;for(g=0;g<w;g++)v=y[g],l.call(null,s[v],v,s)}}function jE(s,l){l=l.toLowerCase();const h=Object.keys(s);let g=h.length,m;for(;g-- >0;)if(m=h[g],l===m.toLowerCase())return m;return null}const FE=typeof self>"u"?typeof global>"u"?globalThis:global:self,$E=s=>!kp(s)&&s!==FE;function Hv(){const{caseless:s}=$E(this)&&this||{},l={},h=(g,m)=>{const y=s&&jE(l,m)||m;Ib(l[y])&&Ib(g)?l[y]=Hv(l[y],g):Ib(g)?l[y]=Hv({},g):Bu(g)?l[y]=g.slice():l[y]=g};for(let g=0,m=arguments.length;g<m;g++)arguments[g]&&Np(arguments[g],h);return l}const PO=(s,l,h,{allOwnKeys:g}={})=>(Np(l,(m,y)=>{h&&Oc(m)?s[y]=OE(m,h):s[y]=m},{allOwnKeys:g}),s),NO=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),BO=(s,l,h,g)=>{s.prototype=Object.create(l.prototype,g),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:l.prototype}),h&&Object.assign(s.prototype,h)},OO=(s,l,h,g)=>{let m,y,w;const v={};if(l=l||{},s==null)return l;do{for(m=Object.getOwnPropertyNames(s),y=m.length;y-- >0;)w=m[y],(!g||g(w,s,l))&&!v[w]&&(l[w]=s[w],v[w]=!0);s=h!==!1&&xy(s)}while(s&&(!h||h(s,l))&&s!==Object.prototype);return l},LO=(s,l,h)=>{s=String(s),(h===void 0||h>s.length)&&(h=s.length),h-=l.length;const g=s.indexOf(l,h);return g!==-1&&g===h},RO=s=>{if(!s)return null;if(Bu(s))return s;let l=s.length;if(!zE(l))return null;const h=new Array(l);for(;l-- >0;)h[l]=s[l];return h},zO=(s=>l=>s&&l instanceof s)(typeof Uint8Array<"u"&&xy(Uint8Array)),jO=(s,l)=>{const g=(s&&s[Symbol.iterator]).call(s);let m;for(;(m=g.next())&&!m.done;){const y=m.value;l.call(s,y[0],y[1])}},FO=(s,l)=>{let h;const g=[];for(;(h=s.exec(l))!==null;)g.push(h);return g},$O=pa("HTMLFormElement"),VO=s=>s.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(h,g,m){return g.toUpperCase()+m}),C1=(({hasOwnProperty:s})=>(l,h)=>s.call(l,h))(Object.prototype),UO=pa("RegExp"),VE=(s,l)=>{const h=Object.getOwnPropertyDescriptors(s),g={};Np(h,(m,y)=>{l(m,y,s)!==!1&&(g[y]=m)}),Object.defineProperties(s,g)},HO=s=>{VE(s,(l,h)=>{if(Oc(s)&&["arguments","caller","callee"].indexOf(h)!==-1)return!1;const g=s[h];if(!!Oc(g)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+h+"'")})}})},qO=(s,l)=>{const h={},g=m=>{m.forEach(y=>{h[y]=!0})};return Bu(s)?g(s):g(String(s).split(l)),h},WO=()=>{},GO=(s,l)=>(s=+s,Number.isFinite(s)?s:l),KO=s=>{const l=new Array(10),h=(g,m)=>{if(Dy(g)){if(l.indexOf(g)>=0)return;if(!("toJSON"in g)){l[m]=g;const y=Bu(g)?[]:{};return Np(g,(w,v)=>{const A=h(w,m+1);!kp(A)&&(y[v]=A)}),l[m]=void 0,y}}return g};return h(s,0)},De={isArray:Bu,isArrayBuffer:RE,isBuffer:kO,isFormData:SO,isArrayBufferView:vO,isString:yO,isNumber:zE,isBoolean:AO,isObject:Dy,isPlainObject:Ib,isUndefined:kp,isDate:CO,isFile:xO,isBlob:EO,isRegExp:UO,isFunction:Oc,isStream:TO,isURLSearchParams:IO,isTypedArray:zO,isFileList:DO,forEach:Np,merge:Hv,extend:PO,trim:MO,stripBOM:NO,inherits:BO,toFlatObject:OO,kindOf:Ey,kindOfTest:pa,endsWith:LO,toArray:RO,forEachEntry:jO,matchAll:FO,isHTMLForm:$O,hasOwnProperty:C1,hasOwnProp:C1,reduceDescriptors:VE,freezeMethods:HO,toObjectSet:qO,toCamelCase:VO,noop:WO,toFiniteNumber:GO,findKey:jE,global:FE,isContextDefined:$E,toJSONObject:KO};function sn(s,l,h,g,m){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",l&&(this.code=l),h&&(this.config=h),g&&(this.request=g),m&&(this.response=m)}De.inherits(sn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:De.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const UE=sn.prototype,HE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{HE[s]={value:s}});Object.defineProperties(sn,HE);Object.defineProperty(UE,"isAxiosError",{value:!0});sn.from=(s,l,h,g,m,y)=>{const w=Object.create(UE);return De.toFlatObject(s,w,function(A){return A!==Error.prototype},v=>v!=="isAxiosError"),sn.call(w,s.message,l,h,g,m),w.cause=s,w.name=s.name,y&&Object.assign(w,y),w};var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qE(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function YO(s){var l=s.default;if(typeof l=="function"){var h=function(){return l.apply(this,arguments)};h.prototype=l.prototype}else h={};return Object.defineProperty(h,"__esModule",{value:!0}),Object.keys(s).forEach(function(g){var m=Object.getOwnPropertyDescriptor(s,g);Object.defineProperty(h,g,m.get?m:{enumerable:!0,get:function(){return s[g]}})}),h}var QO=typeof self=="object"?self.FormData:window.FormData;const ZO=QO;function qv(s){return De.isPlainObject(s)||De.isArray(s)}function WE(s){return De.endsWith(s,"[]")?s.slice(0,-2):s}function x1(s,l,h){return s?s.concat(l).map(function(m,y){return m=WE(m),!h&&y?"["+m+"]":m}).join(h?".":""):l}function JO(s){return De.isArray(s)&&!s.some(qv)}const XO=De.toFlatObject(De,{},null,function(l){return/^is[A-Z]/.test(l)});function eL(s){return s&&De.isFunction(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator]}function u_(s,l,h){if(!De.isObject(s))throw new TypeError("target must be an object");l=l||new(ZO||FormData),h=De.toFlatObject(h,{metaTokens:!0,dots:!1,indexes:!1},!1,function(le,_e){return!De.isUndefined(_e[le])});const g=h.metaTokens,m=h.visitor||P,y=h.dots,w=h.indexes,A=(h.Blob||typeof Blob<"u"&&Blob)&&eL(l);if(!De.isFunction(m))throw new TypeError("visitor must be a function");function T(ee){if(ee===null)return"";if(De.isDate(ee))return ee.toISOString();if(!A&&De.isBlob(ee))throw new sn("Blob is not supported. Use a Buffer instead.");return De.isArrayBuffer(ee)||De.isTypedArray(ee)?A&&typeof Blob=="function"?new Blob([ee]):Buffer.from(ee):ee}function P(ee,le,_e){let te=ee;if(ee&&!_e&&typeof ee=="object"){if(De.endsWith(le,"{}"))le=g?le:le.slice(0,-2),ee=JSON.stringify(ee);else if(De.isArray(ee)&&JO(ee)||De.isFileList(ee)||De.endsWith(le,"[]")&&(te=De.toArray(ee)))return le=WE(le),te.forEach(function(ie,ke){!(De.isUndefined(ie)||ie===null)&&l.append(w===!0?x1([le],ke,y):w===null?le:le+"[]",T(ie))}),!1}return qv(ee)?!0:(l.append(x1(_e,le,y),T(ee)),!1)}const N=[],M=Object.assign(XO,{defaultVisitor:P,convertValue:T,isVisitable:qv});function j(ee,le){if(!De.isUndefined(ee)){if(N.indexOf(ee)!==-1)throw Error("Circular reference detected in "+le.join("."));N.push(ee),De.forEach(ee,function(te,Y){(!(De.isUndefined(te)||te===null)&&m.call(l,te,De.isString(Y)?Y.trim():Y,le,M))===!0&&j(te,le?le.concat(Y):[Y])}),N.pop()}}if(!De.isObject(s))throw new TypeError("data must be an object");return j(s),l}function E1(s){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(g){return l[g]})}function Ty(s,l){this._pairs=[],s&&u_(s,this,l)}const GE=Ty.prototype;GE.append=function(l,h){this._pairs.push([l,h])};GE.toString=function(l){const h=l?function(g){return l.call(this,g,E1)}:E1;return this._pairs.map(function(m){return h(m[0])+"="+h(m[1])},"").join("&")};function tL(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function KE(s,l,h){if(!l)return s;const g=h&&h.encode||tL,m=h&&h.serialize;let y;if(m?y=m(l,h):y=De.isURLSearchParams(l)?l.toString():new Ty(l,h).toString(g),y){const w=s.indexOf("#");w!==-1&&(s=s.slice(0,w)),s+=(s.indexOf("?")===-1?"?":"&")+y}return s}class nL{constructor(){this.handlers=[]}use(l,h,g){return this.handlers.push({fulfilled:l,rejected:h,synchronous:g?g.synchronous:!1,runWhen:g?g.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){De.forEach(this.handlers,function(g){g!==null&&l(g)})}}const D1=nL,YE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oL=typeof URLSearchParams<"u"?URLSearchParams:Ty,iL=FormData,sL=(()=>{let s;return typeof navigator<"u"&&((s=navigator.product)==="ReactNative"||s==="NativeScript"||s==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),la={isBrowser:!0,classes:{URLSearchParams:oL,FormData:iL,Blob},isStandardBrowserEnv:sL,protocols:["http","https","file","blob","url","data"]};function rL(s,l){return u_(s,new la.classes.URLSearchParams,Object.assign({visitor:function(h,g,m,y){return la.isNode&&De.isBuffer(h)?(this.append(g,h.toString("base64")),!1):y.defaultVisitor.apply(this,arguments)}},l))}function aL(s){return De.matchAll(/\w+|\[(\w*)]/g,s).map(l=>l[0]==="[]"?"":l[1]||l[0])}function lL(s){const l={},h=Object.keys(s);let g;const m=h.length;let y;for(g=0;g<m;g++)y=h[g],l[y]=s[y];return l}function QE(s){function l(h,g,m,y){let w=h[y++];const v=Number.isFinite(+w),A=y>=h.length;return w=!w&&De.isArray(m)?m.length:w,A?(De.hasOwnProp(m,w)?m[w]=[m[w],g]:m[w]=g,!v):((!m[w]||!De.isObject(m[w]))&&(m[w]=[]),l(h,g,m[w],y)&&De.isArray(m[w])&&(m[w]=lL(m[w])),!v)}if(De.isFormData(s)&&De.isFunction(s.entries)){const h={};return De.forEachEntry(s,(g,m)=>{l(aL(g),m,h,0)}),h}return null}const cL={"Content-Type":void 0};function dL(s,l,h){if(De.isString(s))try{return(l||JSON.parse)(s),De.trim(s)}catch(g){if(g.name!=="SyntaxError")throw g}return(h||JSON.stringify)(s)}const h_={transitional:YE,adapter:["xhr","http"],transformRequest:[function(l,h){const g=h.getContentType()||"",m=g.indexOf("application/json")>-1,y=De.isObject(l);if(y&&De.isHTMLForm(l)&&(l=new FormData(l)),De.isFormData(l))return m&&m?JSON.stringify(QE(l)):l;if(De.isArrayBuffer(l)||De.isBuffer(l)||De.isStream(l)||De.isFile(l)||De.isBlob(l))return l;if(De.isArrayBufferView(l))return l.buffer;if(De.isURLSearchParams(l))return h.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let v;if(y){if(g.indexOf("application/x-www-form-urlencoded")>-1)return rL(l,this.formSerializer).toString();if((v=De.isFileList(l))||g.indexOf("multipart/form-data")>-1){const A=this.env&&this.env.FormData;return u_(v?{"files[]":l}:l,A&&new A,this.formSerializer)}}return y||m?(h.setContentType("application/json",!1),dL(l)):l}],transformResponse:[function(l){const h=this.transitional||h_.transitional,g=h&&h.forcedJSONParsing,m=this.responseType==="json";if(l&&De.isString(l)&&(g&&!this.responseType||m)){const w=!(h&&h.silentJSONParsing)&&m;try{return JSON.parse(l)}catch(v){if(w)throw v.name==="SyntaxError"?sn.from(v,sn.ERR_BAD_RESPONSE,this,null,this.response):v}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:la.classes.FormData,Blob:la.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};De.forEach(["delete","get","head"],function(l){h_.headers[l]={}});De.forEach(["post","put","patch"],function(l){h_.headers[l]=De.merge(cL)});const Sy=h_,uL=De.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hL=s=>{const l={};let h,g,m;return s&&s.split(`
`).forEach(function(w){m=w.indexOf(":"),h=w.substring(0,m).trim().toLowerCase(),g=w.substring(m+1).trim(),!(!h||l[h]&&uL[h])&&(h==="set-cookie"?l[h]?l[h].push(g):l[h]=[g]:l[h]=l[h]?l[h]+", "+g:g)}),l},T1=Symbol("internals");function Jf(s){return s&&String(s).trim().toLowerCase()}function Mb(s){return s===!1||s==null?s:De.isArray(s)?s.map(Mb):String(s)}function fL(s){const l=Object.create(null),h=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let g;for(;g=h.exec(s);)l[g[1]]=g[2];return l}function pL(s){return/^[-_a-zA-Z]+$/.test(s.trim())}function S1(s,l,h,g){if(De.isFunction(g))return g.call(this,l,h);if(!!De.isString(l)){if(De.isString(g))return l.indexOf(g)!==-1;if(De.isRegExp(g))return g.test(l)}}function mL(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,h,g)=>h.toUpperCase()+g)}function gL(s,l){const h=De.toCamelCase(" "+l);["get","set","has"].forEach(g=>{Object.defineProperty(s,g+h,{value:function(m,y,w){return this[g].call(this,l,m,y,w)},configurable:!0})})}class f_{constructor(l){l&&this.set(l)}set(l,h,g){const m=this;function y(v,A,T){const P=Jf(A);if(!P)throw new Error("header name must be a non-empty string");const N=De.findKey(m,P);(!N||m[N]===void 0||T===!0||T===void 0&&m[N]!==!1)&&(m[N||A]=Mb(v))}const w=(v,A)=>De.forEach(v,(T,P)=>y(T,P,A));return De.isPlainObject(l)||l instanceof this.constructor?w(l,h):De.isString(l)&&(l=l.trim())&&!pL(l)?w(hL(l),h):l!=null&&y(h,l,g),this}get(l,h){if(l=Jf(l),l){const g=De.findKey(this,l);if(g){const m=this[g];if(!h)return m;if(h===!0)return fL(m);if(De.isFunction(h))return h.call(this,m,g);if(De.isRegExp(h))return h.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,h){if(l=Jf(l),l){const g=De.findKey(this,l);return!!(g&&(!h||S1(this,this[g],g,h)))}return!1}delete(l,h){const g=this;let m=!1;function y(w){if(w=Jf(w),w){const v=De.findKey(g,w);v&&(!h||S1(g,g[v],v,h))&&(delete g[v],m=!0)}}return De.isArray(l)?l.forEach(y):y(l),m}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(l){const h=this,g={};return De.forEach(this,(m,y)=>{const w=De.findKey(g,y);if(w){h[w]=Mb(m),delete h[y];return}const v=l?mL(y):String(y).trim();v!==y&&delete h[y],h[v]=Mb(m),g[v]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const h=Object.create(null);return De.forEach(this,(g,m)=>{g!=null&&g!==!1&&(h[m]=l&&De.isArray(g)?g.join(", "):g)}),h}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,h])=>l+": "+h).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...h){const g=new this(l);return h.forEach(m=>g.set(m)),g}static accessor(l){const g=(this[T1]=this[T1]={accessors:{}}).accessors,m=this.prototype;function y(w){const v=Jf(w);g[v]||(gL(m,w),g[v]=!0)}return De.isArray(l)?l.forEach(y):y(l),this}}f_.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);De.freezeMethods(f_.prototype);De.freezeMethods(f_);const ca=f_;function kv(s,l){const h=this||Sy,g=l||h,m=ca.from(g.headers);let y=g.data;return De.forEach(s,function(v){y=v.call(h,y,m.normalize(),l?l.status:void 0)}),m.normalize(),y}function ZE(s){return!!(s&&s.__CANCEL__)}function Bp(s,l,h){sn.call(this,s==null?"canceled":s,sn.ERR_CANCELED,l,h),this.name="CanceledError"}De.inherits(Bp,sn,{__CANCEL__:!0});const bL=null;function _L(s,l,h){const g=h.config.validateStatus;!h.status||!g||g(h.status)?s(h):l(new sn("Request failed with status code "+h.status,[sn.ERR_BAD_REQUEST,sn.ERR_BAD_RESPONSE][Math.floor(h.status/100)-4],h.config,h.request,h))}const wL=la.isStandardBrowserEnv?function(){return{write:function(h,g,m,y,w,v){const A=[];A.push(h+"="+encodeURIComponent(g)),De.isNumber(m)&&A.push("expires="+new Date(m).toGMTString()),De.isString(y)&&A.push("path="+y),De.isString(w)&&A.push("domain="+w),v===!0&&A.push("secure"),document.cookie=A.join("; ")},read:function(h){const g=document.cookie.match(new RegExp("(^|;\\s*)("+h+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(h){this.write(h,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kL(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function vL(s,l){return l?s.replace(/\/+$/,"")+"/"+l.replace(/^\/+/,""):s}function JE(s,l){return s&&!kL(l)?vL(s,l):l}const yL=la.isStandardBrowserEnv?function(){const l=/(msie|trident)/i.test(navigator.userAgent),h=document.createElement("a");let g;function m(y){let w=y;return l&&(h.setAttribute("href",w),w=h.href),h.setAttribute("href",w),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:h.port,pathname:h.pathname.charAt(0)==="/"?h.pathname:"/"+h.pathname}}return g=m(window.location.href),function(w){const v=De.isString(w)?m(w):w;return v.protocol===g.protocol&&v.host===g.host}}():function(){return function(){return!0}}();function AL(s){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return l&&l[1]||""}function CL(s,l){s=s||10;const h=new Array(s),g=new Array(s);let m=0,y=0,w;return l=l!==void 0?l:1e3,function(A){const T=Date.now(),P=g[y];w||(w=T),h[m]=A,g[m]=T;let N=y,M=0;for(;N!==m;)M+=h[N++],N=N%s;if(m=(m+1)%s,m===y&&(y=(y+1)%s),T-w<l)return;const j=P&&T-P;return j?Math.round(M*1e3/j):void 0}}function I1(s,l){let h=0;const g=CL(50,250);return m=>{const y=m.loaded,w=m.lengthComputable?m.total:void 0,v=y-h,A=g(v),T=y<=w;h=y;const P={loaded:y,total:w,progress:w?y/w:void 0,bytes:v,rate:A||void 0,estimated:A&&w&&T?(w-y)/A:void 0,event:m};P[l?"download":"upload"]=!0,s(P)}}const xL=typeof XMLHttpRequest<"u",EL=xL&&function(s){return new Promise(function(h,g){let m=s.data;const y=ca.from(s.headers).normalize(),w=s.responseType;let v;function A(){s.cancelToken&&s.cancelToken.unsubscribe(v),s.signal&&s.signal.removeEventListener("abort",v)}De.isFormData(m)&&la.isStandardBrowserEnv&&y.setContentType(!1);let T=new XMLHttpRequest;if(s.auth){const j=s.auth.username||"",ee=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";y.set("Authorization","Basic "+btoa(j+":"+ee))}const P=JE(s.baseURL,s.url);T.open(s.method.toUpperCase(),KE(P,s.params,s.paramsSerializer),!0),T.timeout=s.timeout;function N(){if(!T)return;const j=ca.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),le={data:!w||w==="text"||w==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:j,config:s,request:T};_L(function(te){h(te),A()},function(te){g(te),A()},le),T=null}if("onloadend"in T?T.onloadend=N:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(N)},T.onabort=function(){!T||(g(new sn("Request aborted",sn.ECONNABORTED,s,T)),T=null)},T.onerror=function(){g(new sn("Network Error",sn.ERR_NETWORK,s,T)),T=null},T.ontimeout=function(){let ee=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const le=s.transitional||YE;s.timeoutErrorMessage&&(ee=s.timeoutErrorMessage),g(new sn(ee,le.clarifyTimeoutError?sn.ETIMEDOUT:sn.ECONNABORTED,s,T)),T=null},la.isStandardBrowserEnv){const j=(s.withCredentials||yL(P))&&s.xsrfCookieName&&wL.read(s.xsrfCookieName);j&&y.set(s.xsrfHeaderName,j)}m===void 0&&y.setContentType(null),"setRequestHeader"in T&&De.forEach(y.toJSON(),function(ee,le){T.setRequestHeader(le,ee)}),De.isUndefined(s.withCredentials)||(T.withCredentials=!!s.withCredentials),w&&w!=="json"&&(T.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&T.addEventListener("progress",I1(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&T.upload&&T.upload.addEventListener("progress",I1(s.onUploadProgress)),(s.cancelToken||s.signal)&&(v=j=>{!T||(g(!j||j.type?new Bp(null,s,T):j),T.abort(),T=null)},s.cancelToken&&s.cancelToken.subscribe(v),s.signal&&(s.signal.aborted?v():s.signal.addEventListener("abort",v)));const M=AL(P);if(M&&la.protocols.indexOf(M)===-1){g(new sn("Unsupported protocol "+M+":",sn.ERR_BAD_REQUEST,s));return}T.send(m||null)})},Pb={http:bL,xhr:EL};De.forEach(Pb,(s,l)=>{if(s){try{Object.defineProperty(s,"name",{value:l})}catch{}Object.defineProperty(s,"adapterName",{value:l})}});const DL={getAdapter:s=>{s=De.isArray(s)?s:[s];const{length:l}=s;let h,g;for(let m=0;m<l&&(h=s[m],!(g=De.isString(h)?Pb[h.toLowerCase()]:h));m++);if(!g)throw g===!1?new sn(`Adapter ${h} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(De.hasOwnProp(Pb,h)?`Adapter '${h}' is not available in the build`:`Unknown adapter '${h}'`);if(!De.isFunction(g))throw new TypeError("adapter is not a function");return g},adapters:Pb};function vv(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Bp}function M1(s){return vv(s),s.headers=ca.from(s.headers),s.data=kv.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),DL.getAdapter(s.adapter||Sy.adapter)(s).then(function(g){return vv(s),g.data=kv.call(s,s.transformResponse,g),g.headers=ca.from(g.headers),g},function(g){return ZE(g)||(vv(s),g&&g.response&&(g.response.data=kv.call(s,s.transformResponse,g.response),g.response.headers=ca.from(g.response.headers))),Promise.reject(g)})}const P1=s=>s instanceof ca?s.toJSON():s;function vp(s,l){l=l||{};const h={};function g(T,P,N){return De.isPlainObject(T)&&De.isPlainObject(P)?De.merge.call({caseless:N},T,P):De.isPlainObject(P)?De.merge({},P):De.isArray(P)?P.slice():P}function m(T,P,N){if(De.isUndefined(P)){if(!De.isUndefined(T))return g(void 0,T,N)}else return g(T,P,N)}function y(T,P){if(!De.isUndefined(P))return g(void 0,P)}function w(T,P){if(De.isUndefined(P)){if(!De.isUndefined(T))return g(void 0,T)}else return g(void 0,P)}function v(T,P,N){if(N in l)return g(T,P);if(N in s)return g(void 0,T)}const A={url:y,method:y,data:y,baseURL:w,transformRequest:w,transformResponse:w,paramsSerializer:w,timeout:w,timeoutMessage:w,withCredentials:w,adapter:w,responseType:w,xsrfCookieName:w,xsrfHeaderName:w,onUploadProgress:w,onDownloadProgress:w,decompress:w,maxContentLength:w,maxBodyLength:w,beforeRedirect:w,transport:w,httpAgent:w,httpsAgent:w,cancelToken:w,socketPath:w,responseEncoding:w,validateStatus:v,headers:(T,P)=>m(P1(T),P1(P),!0)};return De.forEach(Object.keys(s).concat(Object.keys(l)),function(P){const N=A[P]||m,M=N(s[P],l[P],P);De.isUndefined(M)&&N!==v||(h[P]=M)}),h}const XE="1.2.0",Iy={};["object","boolean","number","function","string","symbol"].forEach((s,l)=>{Iy[s]=function(g){return typeof g===s||"a"+(l<1?"n ":" ")+s}});const N1={};Iy.transitional=function(l,h,g){function m(y,w){return"[Axios v"+XE+"] Transitional option '"+y+"'"+w+(g?". "+g:"")}return(y,w,v)=>{if(l===!1)throw new sn(m(w," has been removed"+(h?" in "+h:"")),sn.ERR_DEPRECATED);return h&&!N1[w]&&(N1[w]=!0,console.warn(m(w," has been deprecated since v"+h+" and will be removed in the near future"))),l?l(y,w,v):!0}};function TL(s,l,h){if(typeof s!="object")throw new sn("options must be an object",sn.ERR_BAD_OPTION_VALUE);const g=Object.keys(s);let m=g.length;for(;m-- >0;){const y=g[m],w=l[y];if(w){const v=s[y],A=v===void 0||w(v,y,s);if(A!==!0)throw new sn("option "+y+" must be "+A,sn.ERR_BAD_OPTION_VALUE);continue}if(h!==!0)throw new sn("Unknown option "+y,sn.ERR_BAD_OPTION)}}const Wv={assertOptions:TL,validators:Iy},dl=Wv.validators;class Fb{constructor(l){this.defaults=l,this.interceptors={request:new D1,response:new D1}}request(l,h){typeof l=="string"?(h=h||{},h.url=l):h=l||{},h=vp(this.defaults,h);const{transitional:g,paramsSerializer:m,headers:y}=h;g!==void 0&&Wv.assertOptions(g,{silentJSONParsing:dl.transitional(dl.boolean),forcedJSONParsing:dl.transitional(dl.boolean),clarifyTimeoutError:dl.transitional(dl.boolean)},!1),m!==void 0&&Wv.assertOptions(m,{encode:dl.function,serialize:dl.function},!0),h.method=(h.method||this.defaults.method||"get").toLowerCase();let w;w=y&&De.merge(y.common,y[h.method]),w&&De.forEach(["delete","get","head","post","put","patch","common"],ee=>{delete y[ee]}),h.headers=ca.concat(w,y);const v=[];let A=!0;this.interceptors.request.forEach(function(le){typeof le.runWhen=="function"&&le.runWhen(h)===!1||(A=A&&le.synchronous,v.unshift(le.fulfilled,le.rejected))});const T=[];this.interceptors.response.forEach(function(le){T.push(le.fulfilled,le.rejected)});let P,N=0,M;if(!A){const ee=[M1.bind(this),void 0];for(ee.unshift.apply(ee,v),ee.push.apply(ee,T),M=ee.length,P=Promise.resolve(h);N<M;)P=P.then(ee[N++],ee[N++]);return P}M=v.length;let j=h;for(N=0;N<M;){const ee=v[N++],le=v[N++];try{j=ee(j)}catch(_e){le.call(this,_e);break}}try{P=M1.call(this,j)}catch(ee){return Promise.reject(ee)}for(N=0,M=T.length;N<M;)P=P.then(T[N++],T[N++]);return P}getUri(l){l=vp(this.defaults,l);const h=JE(l.baseURL,l.url);return KE(h,l.params,l.paramsSerializer)}}De.forEach(["delete","get","head","options"],function(l){Fb.prototype[l]=function(h,g){return this.request(vp(g||{},{method:l,url:h,data:(g||{}).data}))}});De.forEach(["post","put","patch"],function(l){function h(g){return function(y,w,v){return this.request(vp(v||{},{method:l,headers:g?{"Content-Type":"multipart/form-data"}:{},url:y,data:w}))}}Fb.prototype[l]=h(),Fb.prototype[l+"Form"]=h(!0)});const Nb=Fb;class My{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let h;this.promise=new Promise(function(y){h=y});const g=this;this.promise.then(m=>{if(!g._listeners)return;let y=g._listeners.length;for(;y-- >0;)g._listeners[y](m);g._listeners=null}),this.promise.then=m=>{let y;const w=new Promise(v=>{g.subscribe(v),y=v}).then(m);return w.cancel=function(){g.unsubscribe(y)},w},l(function(y,w,v){g.reason||(g.reason=new Bp(y,w,v),h(g.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const h=this._listeners.indexOf(l);h!==-1&&this._listeners.splice(h,1)}static source(){let l;return{token:new My(function(m){l=m}),cancel:l}}}const SL=My;function IL(s){return function(h){return s.apply(null,h)}}function ML(s){return De.isObject(s)&&s.isAxiosError===!0}function e2(s){const l=new Nb(s),h=OE(Nb.prototype.request,l);return De.extend(h,Nb.prototype,l,{allOwnKeys:!0}),De.extend(h,l,null,{allOwnKeys:!0}),h.create=function(m){return e2(vp(s,m))},h}const Ho=e2(Sy);Ho.Axios=Nb;Ho.CanceledError=Bp;Ho.CancelToken=SL;Ho.isCancel=ZE;Ho.VERSION=XE;Ho.toFormData=u_;Ho.AxiosError=sn;Ho.Cancel=Ho.CanceledError;Ho.all=function(l){return Promise.all(l)};Ho.spread=IL;Ho.isAxiosError=ML;Ho.AxiosHeaders=ca;Ho.formToJSON=s=>QE(De.isHTMLForm(s)?new FormData(s):s);Ho.default=Ho;const qt=Ho,PL={components:{HomeComponent:sB,NewsComponent:kB,JournalsComponent:HB,AwardComponent:ZB,AboutComponent:oO,ContactComponent:wO},data(){return{news:[]}},async mounted(){this.news=(await qt.get(`${Ct.domain}/api/news`)).data.data,this.news.length>2&&(this.news=this.news.slice(0,3)),this.news.map(s=>(s.content=s.content.replace(/<br>/g,"").substring(0,330)+".....",s))}};function NL(s,l,h,g,m,y){const w=et("HomeComponent"),v=et("NewsComponent"),A=et("JournalsComponent"),T=et("AwardComponent"),P=et("AboutComponent"),N=et("ContactComponent");return re(),ae(rt,null,[ce(w),ce(v,{news:m.news},null,8,["news"]),ce(A),ce(T),ce(P),ce(N)],64)}const BL=ut(PL,[["render",NL]]),OL={},LL={class:"accordion",id:"accordionExample"};function RL(s,l,h,g,m,y){return re(),ae("div",LL,[gy(s.$slots,"default")])}const p_=ut(OL,[["render",RL]]),zL={props:["heading_id","collapse_id","title"]},jL={class:"accordion-item"},FL=["id"],$L=["data-bs-target","aria-controls"],VL=["id","aria-labelledby"],UL={class:"accordion-body"};function HL(s,l,h,g,m,y){return re(),ae("div",jL,[d("h2",{class:"accordion-header",id:h.heading_id},[d("button",{class:Oi(["accordion-button",h.heading_id!="headingOne"?"collapsed":""]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+h.collapse_id,"aria-expanded":"true","aria-controls":h.collapse_id},[d("strong",null,pe(h.title),1)],10,$L)],8,FL),d("div",{id:h.collapse_id,class:Oi(["accordion-collapse collapse",h.heading_id=="headingOne"?"show":""]),"aria-labelledby":h.heading_id,"data-bs-parent":"#accordionExample"},[d("div",UL,[gy(s.$slots,"default")])],10,VL)])}const m_=ut(zL,[["render",HL]]);const qL={components:{AccordionComponent:p_,AccordionItemComponent:m_},methods:{downloadAuthorshipForm(){let s=`${Ct.domain}/storage/files/MANUSCRIPT SUBMISSION FORM.docx`;window.open(s)}}},en=s=>(Rt("data-v-3eced926"),s=s(),zt(),s),WL=en(()=>d("div",{class:"top-hero-image"},[d("p",null,"Our Research Publishing Policies and Ethics"),d("p",null,"Find out more about publication ethics and our policies")],-1)),GL={class:"container mb-3"},KL={class:"row"},YL={class:"col-12 p-md-5 p-3"},QL=en(()=>d("a",{href:"https://publicationethics.org/",target:"_blank"},"\u0421\u041E\u0420E",-1)),ZL=en(()=>d("p",null,"The journals will be required to take into account the Ethics and Oversight Committee's requests for professional and scholarly activities on our researchers' disregard for ethical values. In the event that such appeals are not anonymous and proven, we are also prepared to evaluate them. ",-1)),JL=en(()=>d("p",null,[H("As defined by the "),d("a",{href:"https://publicationethics.org/",target:"_blank"},"Committee on Publication Ethics (COPE)"),H(", we take into account the author (co-author) of a research article to be the individual or individuals who develop and bring to fruition the product that disseminates intellectual or creative works. An example of this would be the author of the theory of relativity. The author's status indicates that they conducted the study and did not violate anybody else's copyright.")],-1)),XL=en(()=>d("p",null,[H("Aperier abides by the "),d("a",{href:"https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html",target:"_blank"},"International Committee of Medical Journal Editors (ICMJE)"),H(" rules, which say that writers must satisfy all four requirements in order to be eligible to be listed as authors on a manuscript:")],-1)),eR=en(()=>d("ul",null,[d("li",null,"Significant contributions to the idea or design of the work, the collection, analysis, or interpretation of data for the work."),d("li",null,"The writing or critical revision of the work for significant intellectual substance."),d("li",null,"Final approval of the published version."),d("li",null,"Consent to take responsibility for all parts of the work in order to guarantee that any concerns about the accuracy or integrity of any portion of the work are duly investigated and addressed.")],-1)),tR=en(()=>d("p",null,"Those who contributed to the work but did not meet the criteria to be an author should be acknowledged. ICMJE provides more thorough authoring instructions. All researchers, including those who have been deleted, should provide their consent before any changes to the author list throughout the editing process or after it has been published. We retain the right to ask for proof of authorship, and Aperier reserves the right to modify authorship after acceptance.",-1)),nR=en(()=>d("br",null,null,-1)),oR=en(()=>d("strong",null,"Changes to Authorship",-1)),iR=en(()=>d("br",null,null,-1)),sR=en(()=>d("strong",null,"Deceased Authors",-1)),rR=en(()=>d("p",null,"The corresponding author, or co-authors, should notify the editorial office if a manuscript is submitted with a deceased author listed among the authorship, or if an author passes away during peer review. The authorship group should propose a co-author for this position in cases where the deceased author served as a corresponding author. The work of the deceased author's co-author, as well as any possible conflicts of interest, should be verified by the corresponding author. A notice will be included under the list of authors once it has been published.",-1)),aR=en(()=>d("br",null,null,-1)),lR=en(()=>d("strong",null,"Author Contributions",-1)),cR=en(()=>d("p",null,[H("The responsibilities outline each author's unique contribution to the academic work for total transparency. Not all roles can be utilised in the article, and not all researchers can use all roles (that is, each author could contribute in several roles). If you need a definition of the terms, please see the "),d("a",{href:"https://credit.niso.org/",target:"_blank"},"CRediT"),H(" taxonomy. When submitting an article, the corresponding author should outline the responsibilities of each author and list the people or organisations that contributed to the piece but are not its writers in the acknowledgements section. An author contributorship statement outlining the contributions of each author should be included with every paper that is submitted. Research publications with many authors must include a brief paragraph outlining each author's unique contributions and corresponding author.")],-1)),dR=en(()=>d("p",null,"After the research conclusion, the following statements should be used (use author initials): Conceptualization, X.X. and Y.Y.; methodology, X.X.; software, X.X.; validation, X.X., Y.Y. and Z.Z.; formal analysis, X.X.; investigation, X.X.; resources, X.X.; data curation, X.X.; writing\u2014original draft preparation, X.X.; writing\u2014review and editing, X.X.; visualization, X.X.; supervision, X.X.; project administration, X.X.; funding acquisition, Y.Y. All authors have read and agreed to the published version of the manuscript.",-1)),uR=en(()=>d("p",null,"Only those people will be taken into consideration who have actually contributed to its creation. We hope that none of the article authors will attempt to use their position of authority over the real authors to claim authorship, finance the results generation or sponsor the APC payment, make a promise to include the real authors in a future article, or have already made such a promise and are now seeking payment. The authors should immediately declare funding sources at the conclusion of the publication if the results they discuss were obtained with someone else's financial assistance.",-1)),hR=en(()=>d("br",null,null,-1)),fR=en(()=>d("strong",null,"Corresponding Author",-1)),pR=en(()=>d("p",null,"The designated Corresponding Author represents all co-authors and ensures that any concerns regarding the correctness or integrity of any aspect of the work are properly handled and responsible of the following;",-1)),mR=en(()=>d("p",null,"Ensuring that the names and order of all stated authors have been authorized in the paper before submission; handling all correspondence between the Journal and all co-authors, both before and after publication; Making sure disclosures, declarations, and transparency on data statements from all authors are included in the manuscript as necessary; providing transparency on the reuse of material; mentioning any unpublished material (for instance, manuscripts in press) included in the manuscript in a cover letter to the editor.",-1)),gR=en(()=>d("p",null,[H(" Aperier publishes all its journals in full open access, meaning unlimited use and reuse of articles, in addition to giving credit to the authors. All of our articles are published under a "),d("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}," Creative Commons (CC BY)"),H(". Article processing charge (APC) is paid only after the manuscript had been reviewed and accepted for publication. APC covers the costs of the publishing process, including peer-review administration, copy editing, hosting the files, etc. APC varies for each journal and detailed information can be found on concrete journal's page. Currently, all APCs are covered by the Aperier publishing, so there are no publication charges for authors whose work is accepted for publication in Aperier Journals. "),d("br"),d("br"),H(" FREE OF CHARGES ")],-1)),bR=en(()=>d("p",null,"Whether an article is published as a subscription-only or open-access publication affects the author's rights to its contents. Every article that Aperier publishes is instantly made publicly accessible using an open access licence. This entails that everyone has free, unrestricted access to the full texts of all articles published in Aperier journals, is allowed to reuse published content with proper attribution to the original publication, and that open access articles will be published under the Creative Commons Attribution (CC BY) 4.0 licence.\xA0",-1)),_R=en(()=>d("p",null,[H("This licence permits people to share, modify, improve, and build upon your work even for commercial purposes as long as they credit you as the author. Visit the Creative Commons website for more information: "),d("a",{"data-fr-linked":"true",href:"https://creativecommons.org/licenses/by/4.0/"},"https://creativecommons.org/licenses/by/4.0/")],-1)),wR=en(()=>d("strong",null,"Permissions",-1)),kR=en(()=>d("p",null,"There is no need for specific authorization to reuse the whole article published by Aperier, including the figures and tables. Any portion of articles published under the open access Creative Common CC BY licence may be used again without asking as long as the source is acknowledged. Reusing an article doesn't mean that Aperier or its authors are endorsing it.",-1)),vR=en(()=>d("p",null,"We adhere to the guidelines set forth in the joint statement of the International Publishers Association (IPA) and the International Federation of Library Associations (IFLA) on the withdrawal of journal articles from the internet. These explicitly state that a publication may only be deleted from a publisher's database if it:\xA0",-1)),yR=en(()=>d("ul",null,[d("li",null,"Violates professional ethical standards, such as by violating the privacy of a study subject.\xA0 "),d("li",null,"A legal controversy exists.\xA0"),d("li",null,"Includes locating erroneous or incorrect information that, if used, poses a significant health risk. ")],-1)),AR=en(()=>d("p",null,"Where feasible, we keep the relevant bibliographical citation for the deleted information (unless subject to legal dispute).\xA0",-1)),CR=en(()=>d("span",null,[d("strong",null,"Correction Notices")],-1)),xR=en(()=>d("p",null,'\xA0Since the version of record cannot be altered to reflect changes, such as new author affiliations or new discoveries, all published research is essentially a "snapshot" of a certain point in time.\xA0',-1)),ER=en(()=>d("p",null,"However, we acknowledge that mistakes might occasionally occur during the stages of research, writing, and publication. We can introduce one of the following corrective messages when these problems occur.\xA0",-1)),DR=en(()=>d("ul",null,[d("li",null,"Erratum: This term often refers to a manufacturing error that was discovered after publication. If an erratum is published, it will be noted in the abstract of the paper's online version as well as in the printed edition of the journal's subsequent volume or issue.\xA0"),d("li",null,"Name of author corrections; Aperier is dedicated to inclusion, diversity, and equality. Aperier is putting into effect an author name change policy as part of this. For whatever reason (including religious conversion, marriage, gender identity change, or divorce), if Aperier gets a request from an author seeking to alter their name on a published piece, we will do it right away. While we won't inquire about further information or the cause for the name change, there are situations when we may need additional details (such the article reference) in order to perform the change successfully. We will try our best to change the name and, if necessary, any pronouns throughout the post.")],-1)),TR=en(()=>d("p",null,`Where using information from another source, even their own previously published writing, authors should be care to properly credit the source and acquire permission when necessary. Authors shouldn't reference their own work too frequently. If authors haven't read the mentioned work, they shouldn't replicate references from other publications. Authors shouldn't favourably credit their own works above those of their friends, classmates, or institutions. Advertorial content and advertising should not be cited by authors. We anticipate that "original terminology obtained directly from publications by other academics should appear in quote marks with the relevant citations," in accordance with COPE recommendations. This stipulation likewise holds true for an author's original work. In a discussion document about citation manipulation, COPE makes suggestions for the best practice. `,-1));function SR(s,l,h,g,m,y){const w=et("P"),v=et("AccordionItemComponent"),A=et("AccordionComponent");return re(),ae(rt,null,[WL,d("div",GL,[d("div",KL,[d("div",YL,[ce(A,null,{default:je(()=>[ce(v,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Ethical Oversight"},{default:je(()=>[ce(w,null,{default:je(()=>[H(`The mutual trust between those involved in the publication process and the desire for strict adherence to all the publication ethics principles outlined in the institute's "Publishing policies" and "Editorial policies" is the foundation of the Aperier journals' policy regarding oversight of how the ethical principles are maintained.`)]),_:1}),ce(w,null,{default:je(()=>[H("We concentrate on the "),QL,H(" definition of ethical supervision, that is, rules on permission to publishing, publication on vulnerable populations, ethical conduct of research involving animals and human subjects, managing sensitive data, and business/marketing practises. Based on this description, the editorial team of the journals is challenged to uphold ethical standards in their work.")]),_:1}),ZL]),_:1}),ce(v,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Authorship"},{default:je(()=>[JL,XL,eR,tR,nR,oR,d("p",null,[H("Before submitting an article, writers are expected to carefully evaluate authorship. Before the article is accepted, throughout the editorial process, any changes to the author list should be made. Authorship modifications, such as the addition, deletion, or rearranging of author names, require the consent of all authors, including those who will have their names removed. A properly filled-out "),d("span",{class:"text-primary",onClick:l[0]||(l[0]=T=>y.downloadAuthorshipForm())},"AUTHORSHIP CHANGE FORM"),H(" with the signatures of all authors and a justification for the change must be submitted to the journal in order to seek any change in authorship. After a paper has been accepted, any requested changes to authorship will cause a delay in publishing. Requests for authorship changes will be assessed if the work has already been published and will call for the publishing of a correction. We retain the right to demand authorship proof.")]),iR,sR,rR,aR,lR,cR,dR,uR,hR,fR,pR,mR]),_:1}),ce(v,{heading_id:"headingThree",collapse_id:"collapseThree",title:"Article Processing Charge"},{default:je(()=>[gR]),_:1}),ce(v,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Copyright and Permissions"},{default:je(()=>[bR,_R,wR,kR]),_:1}),ce(v,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Article Withdrawal & Correction"},{default:je(()=>[vR,yR,AR,CR,xR,ER,DR]),_:1}),ce(v,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Citation Policies"},{default:je(()=>[TR]),_:1})]),_:1})])])])],64)}const IR=ut(qL,[["render",SR],["__scopeId","data-v-3eced926"]]);const MR={components:{AccordionComponent:p_,AccordionItemComponent:m_}},We=s=>(Rt("data-v-22d68208"),s=s(),zt(),s),PR=We(()=>d("div",{class:"top-hero-image"},[d("span",null,"Our Editorial policies "),d("span",{class:"text-center w-100"},"Find out more about editorial and review policies")],-1)),NR={class:"container mb-3"},BR={class:"row"},OR={class:"col-12 p-md-5 p-3"},LR=We(()=>d("p",null,'Aperier publishes articles that were started by universities and other organisations and in which the business itself was a pioneer. At the same time, "Editorial policies" apply uniformly and independently to all journals.\xA0',-1)),RR=We(()=>d("p",null,"Journals\u2019 management works closely with the publisher based on clear assignment of duties and responsibility following the defined \u201CPublishing policies\u201D.\xA0",-1)),zR=We(()=>d("p",null,`We define "editorial independence" as the complete freedom of editors to choose whether or not to publish a paper, edit it, or have it withdrawn based solely on its scientific merit, without interference from the journal's founders, publisher, authors, their sponsors, or any other institutions or individuals. Additionally, these organisations or people are unable to influence the publishing dates of publications. Not any commercial interests can be of priority over the policy of creating high-quality reviewed journals and cannot be considered in the journal.`,-1)),jR=We(()=>d("p",null,"The editors and members of the editorial boards cannot be fired or replaced for upholding autonomous editorial policy. The editors of the journals receive the absolute right to publish the editorial paper with the intention of amplifying their voice about the editorial policy of the journal as a whole and outlining the position in each individual instance to the academic circles. The editor's decision to share their viewpoint on this issue in the media and online cannot be judged by the publisher. The editorial board choices of journals cannot be criticised by the publishing company's founders or employees anywhere or under any circumstances.",-1)),FR=We(()=>d("p",null,"Aperier's founders and staff are not permitted to serve as editors or reviewers for any of the publications that the firm publishes. The Aperier founders are currently unable to submit their works for publication in the journals that the business produces.",-1)),$R=We(()=>d("p",null,"The editorial boards make every choice on their own, free from any outside pressure or influence and without consulting the publisher or any other parties. The journals operate in accordance with the Journal Publishers Code of Conduct.",-1)),VR=We(()=>d("p",null,"The Editorial Board consists of international experts in their fields. All members of the Board occupy the positions in educational and research institutions. The roles of the Editorial Board members are the following:",-1)),UR=We(()=>d("ul",null,[d("li",null,"Provide expertise in definite research field;\xA0"),d("li",null,"Judge the submitted manuscripts and involve in the process independent reviewers;\xA0"),d("li",null,"Advise on journal policy and scope and participate in the journal development;\xA0"),d("li",null,"Propose subject definition and conference choice for special issues. Also, editorial members may be guest Editors of special issue;\xA0"),d("li",null,"Promote the journal at conferences, seminars, workshops, and relevant public events;\xA0"),d("li",null,"Attract new potential authors.")],-1)),HR=We(()=>d("p",null,"Guest editors play a vital role in ensuring the quality of special content publications, such as Special Issues. Guest editors overlook the process, from proposal to publication.The Editorial Board is reviewed every two years, which means exclusion of inactive members and addition of the new ones.\xA0",-1)),qR=We(()=>d("p",null,"We appreciate applications from the editorial candidates. To submit an application, please send an e-mail to a Managing Editor of the selected journal and attach a file with your CV (containing the current place of work, occupation, education, the scope of your scientific interest, types of activity, list of publications, list of the journals in which you occupy the positions of an editor or a reviewer, e-mail for contact and a link to personal page at your university).",-1)),WR=We(()=>d("br",null,null,-1)),GR=We(()=>d("p",null,[d("strong",null,"Duties of Editors")],-1)),KR=We(()=>d("p",null,"We strongly recommend that Editors get acquainted with and follow COPE Core practices.",-1)),YR=We(()=>d("p",null,"The editors of the journal are responsible for deciding which of the articles submitted to the journal will be published. The editor may confer with the members of the Editorial Board in making this decision.",-1)),QR=We(()=>d("ul",null,[d("li",null,"Fair play. The editors evaluate manuscripts without regard to the nature of the authors or the host institution including race, gender, religious belief, ethnic origin, citizenship, or political philosophy of the authors."),d("li",null,"Confidentiality. The editors, members of the Editorial Boards, and any editorial staff must not disclose any information about a submitted manuscript to anyone except the authors of the paper, reviewers, potential reviewers, and the publisher, for appropriate reasons."),d("li",null,"Disclosure. Unpublished materials disclosed in a submitted paper should not be used in the own research of the editors or the members of the Editorial Board without the express written consent of the author.")],-1)),ZR=We(()=>d("br",null,null,-1)),JR=We(()=>d("strong",null,"Guidelines for Reviewers",-1)),XR=We(()=>d("p",null,"When authors decide to submit their articles to one of our journals, Aperier Publisher is aware of the value of a strong peer review procedure. Every journal through a rigorous process to establish and maintain peer review integrity, and a key component of this is making sure that reviewers have the tools they need to do their jobs as effectively and quickly as possible. The reviewing process varies from journal to journal, but this guide serves as an overview of what\u2019s involved when becoming a reviewer with Aperier.",-1)),e3=We(()=>d("p",null,"The COPE Ethical Guidelines for Peer Reviewers should be read and adhered to by all of our reviewers.",-1)),t3=We(()=>d("p",null,"Potential reviewers should give verified and correct contact information as well as accurate personal and professional information that fairly represents their expertise.",-1)),n3=We(()=>d("p",null,"We anticipate the following from our reviewers during the peer review process, when preparing the referee report, and after reviewing:",-1)),o3=We(()=>d("br",null,null,-1)),i3=We(()=>d("strong",null,"1. Confidentiality",-1)),s3=We(()=>d("p",null,"Without express permission from the Editor, reviewers must not discuss the reviewed article with anybody in order to preserve the integrity of the review process.",-1)),r3=We(()=>d("p",null,"The reviewers are welcome to enlist the assistance of one or two co-workers in the process, but this should only be done with the Editor's express consent. Colleague participation should also be included in the Referee Report's Comments to Editors section along with names and affiliations. Information about the paper should not be copied, distributed, or shared by the reviewers for any reason (including advancement of their own research).",-1)),a3=We(()=>d("p",null,"Any clarifications required from the author(s) should be written in the Referee Report's Comments section.",-1)),l3=We(()=>d("br",null,null,-1)),c3=We(()=>d("strong",null,"2. Standards of Objectivity",-1)),d3=We(()=>d("p",null,"Reviewers should be objective while conducting reviews. All the comments and recommendations should be supported with relevant arguments.",-1)),u3=We(()=>d("br",null,null,-1)),h3=We(()=>d("strong",null,"3. Timeliness",-1)),f3=We(()=>d("p",null,"A timely response is required in order to accept a peer review invitation. Reviewers should only accept to review if they believe they will be able to complete the assignment within the requested or mutually agreed-upon time period and are qualified to evaluate the given paper. The reviews must be finished by the date specified in the invitation. Reviewers are required to get in touch with the handling editor right away if anything happens that would prevent them from submitting the referee report on time.",-1)),p3=We(()=>d("br",null,null,-1)),m3=We(()=>d("strong",null,"4. Competing Interests",-1)),g3=We(()=>d("p",null,"It's crucial to maintain objectivity while taking into account factors like a manuscript's origin, country, religion or political convictions, gender, and/or other characteristics of the writers. We respectfully request that reviewers disclose any potential conflicts of interest that could skew their judgement of the submitted paper (including any financial interest in the publication or non-publication of the manuscript; a recent or ongoing collaboration with the authors; a history of dispute with the authors). The request to evaluate the paper should be declined if the reviewer is now working at the same institution as any of the authors or has recently (i.e., within the last three years) been a mentor, mentee, close collaborator, or joint grant holder.",-1)),b3=We(()=>d("p",null,"Reviewers shouldn't agree to read a manuscript for the sole purpose of reading it without actually intending to produce a referee report.",-1)),_3=We(()=>d("p",null,'Because they had already reviewed a draught of the work for another publication, the reviewers are not barred from examining the current version. However, this should be included in the section under "Comments to Editors."',-1)),w3=We(()=>d("p",null,"Peer review plays a significant role in the publication of scholarly journals through assessment of validity, quality and originality of submitted manuscripts. There are three types of peer review: \u201Copen\u201D, \u201Csingle blind\u201D and \u201Cdouble blind\u201D.",-1)),k3=We(()=>d("br",null,null,-1)),v3=We(()=>d("strong",null,"The Process",-1)),y3=We(()=>d("p",null,"A corresponding author submits a manuscript and a Cover letter signed by all authors (the manuscript and the Cover letter are sent via the Manuscript Administration System). Also at this stage, authors can suggest appropriate reviewers for this manuscript and include their names and email addresses in the comments section. At the initial stage a Managing Editor checks the structure, spelling and compliance of manuscript with all submission guidelines, plagiarism, etc. If the manuscript doesn\u2019t comply with the abovementioned, then it should be rejected.",-1)),A3=We(()=>d("p",null,"At the next stage, the manuscript is passed to an Editor, who determines its potential interest for readers, importance and relevance for scientists. Also, an Editor assesses correspondence of the manuscript to journal's scope, as well as its compliance with the requirements of the journal.",-1)),C3=We(()=>d("p",null,"Manuscripts that don\u2019t match these criteria, as well as scientifically poor manuscripts, should be rejected without further peer reviewing. The editors have the right to reject manuscripts at the pre-review stage; manuscripts rejected by the editors at the pre-review stage are not subject to further consideration, and the author cannot re-submit the article for consideration.",-1)),x3=We(()=>d("p",null,"If the manuscript complies with the requirements of the journal, then the Editor assigns a Handling Editor, responsible for peer review, who sends the manuscript for double blind peer review to two (usually) or more (if necessary) reviewers. The choice of peer-reviewers is based on their expertise, reputation, specific recommendations and previous experience (e.g. Ph.D. rank and relevant publications).",-1)),E3=We(()=>d("p",null,"The invited reviewers should accept indispensable terms and conditions in order to exclude conflict of interests, confirm their competence, concerning the scope of the manuscript, and specify definite terms of reviewing. Then they decide to accept or decline the invitation. In case of declining, they can recommend alternative reviewers. In case of accepting they should prepare a Referee Report. All manuscripts are double blind peer-reviewed, which means that reviewers do not possess any information about the authors\u2019 identities and vice versa. Also, at this stage the author should be informed that the manuscript had been sent for double blind peer review.",-1)),D3=We(()=>d("p",null,"After reviewing, the Handling Editor examines Referee Reports and, in some cases, can invite an additional reviewer in order to get an extra opinion.",-1)),T3=We(()=>d("p",null,"The authors are provided with reviewers\u2019 comments (anonymously). After that the revised manuscript passes the second review by Handling Editor (also manuscripts can be re-sent to reviewers after author(s)\u2019 revision).",-1)),S3=We(()=>d("p",null,"At the last stage Handling Editor provides the Editor with the information about the reviewing process and sends recommendations, concerning manuscript's publication. The final decision is taken by the Editor. The authors are informed about the results of reviewing. They can be provided with Referee Reports without identification of the reviewers, if needed. Authors can also appeal against editorial decision, providing their own arguments and explanations.",-1)),I3=We(()=>d("p",null,"In case of manuscript acceptance, the publication process starts. If rejected, the manuscript is sent to the author(s).",-1)),M3=We(()=>d("p",null,"Plagiarism, Data Fabrication and Image Manipulation",-1)),P3=We(()=>d("p",null,"Plagiarism is not acceptable in Aperier journals. Plagiarism includes copying text, ideas, images, or data from another source, even from your own publications, without giving credit to the original source. Reuse of text that is copied from another source must be between quotation marks and the original source must be cited. If a study's design or the manuscript's structure or language has been inspired by previous studies, these studies must be explicitly cited. All Aperier submissions are checked for plagiarism. If plagiarism is detected during the peer review process, the manuscript may be rejected. If plagiarism is detected after publication, an investigation will take place and action taken in accordance with our policies.",-1)),N3=We(()=>d("p",null,"Image files must not be manipulated or adjusted in any way that could lead to misinterpretation of the information provided by the original image. Irregular manipulation includes 1) introduction, enhancement, moving, or removing features from the original image, 2) grouping of images that should obviously be presented separately (e.g., from different parts of the same gel, or from different gels), or 3) modifying the contrast, brightness or color balance to obscure, eliminate or enhance some information.",-1)),B3=We(()=>d("p",null,"If irregular image manipulation is identified and confirmed during the peer review process, we may reject the manuscript. If irregular image manipulation is identified and confirmed after publication, we may correct or retract the paper.",-1)),O3=We(()=>d("p",null,"Data presented must be original and not inappropriately selected, manipulated, enhanced, or fabricated. This includes 1) exclusion of data points to enhance significance of conclusions, 2) fabrication of data, 3) selection of results that support a particular conclusion at the expense of contradictory data, 4) deliberate selection of analysis tools or methods to support a particular conclusion (including p-hacking). We strongly recommend preregistration of methods and analysis.",-1)),L3=We(()=>d("strong",null,"Conflicts of interest",-1)),R3=We(()=>d("p",null,"It is crucial that a scientific journal be meticulous and consistently follow the finest writing and publishing principles and publication ethics (COPE). As a result, every step in the process of reviewing and publishing an article should be as explicit and open as feasible.",-1)),z3=We(()=>d("p",null,"At various stages of writing, processing, peer review, editing, and publication of the article, the editorial board, journal staff, authors, editors, and reviewers interact constantly. Their relationship is not always easy, and various situations may arise (that is, when a person has conflicting interests or loyalty brought on by his obligations to several people or organizations/universities), when a person cannot give due respect to the actual or potentially conflicting obligations of Financial ties (such direct conflicts of interest are typically simple to spot), ideological, religious, and philosophical disagreements, academic gain, competitiveness, and rivalry can all be the basis for an interest conflict.",-1)),j3=We(()=>d("br",null,null,-1)),F3=We(()=>d("strong",null,"Authors",-1)),$3=We(()=>d("p",null,"The authors of the paper must either attest to the exclusion of any potential conflicts of interest or exclude any potential data manipulation when submitting the manuscript to the journal. Disclosure of any affiliations, facts, deeds, and influences of third parties that could have an impact on the authors' study is entirely their responsibility.",-1)),V3=We(()=>d("br",null,null,-1)),U3=We(()=>d("strong",null,"Reviewers",-1)),H3=We(()=>d("p",null,"Reviewers should get familiar with the journal's peer review procedure and the journal itself prior to reading the submission. They should then determine how to assess the article while adhering to the COPE principles. A Concise Guide for New Editors on Ethical Editing.",-1)),q3=We(()=>d("p",null,"The reviewer should decline to evaluate the manuscript if there are any situations, facts, or behaviours that might compromise the transparency of the article evaluation. Reviewers must notify managing editors or handling editors of any possible conflicts of interest and speak with them.",-1)),W3=We(()=>d("p",null,"Without first consulting the journals, reviewers shouldn't utilise the paper for their own gain or draw outside attention to themselves. The paper copy of the manuscript must be destroyed after the article has been reviewed, and the electronic copy must be deleted from any electronic storage devices.",-1)),G3=We(()=>d("br",null,null,-1)),K3=We(()=>d("strong",null,"Editorial Board Members, Editors, Journal Staff",-1)),Y3=We(()=>d("p",null,"Founders are not permitted to publish their work in any Aperier-published journal. The managing editor is not permitted to publish his or her personal work in the publication that he or she oversees. If an editorial board member or editor is also the author of a manuscript that has been submitted to the journal on which they serve, they are not permitted to take part in the peer review process or make decisions involving their own work.",-1)),Q3=We(()=>d("p",null,"Editorial Board members, editors, and the managing editor should only operate in the journal's best interests, base their choices on the quality and relevance of the work for readers, and maintain the privacy of authors and reviewers (keep manuscripts and related materials and information in strict confidentiality). Before the document is published, editorial board members, editors, and the managing editor shouldn't discuss or utilise its contents.",-1)),Z3=We(()=>d("p",null,"If editors who make final judgments on manuscripts have a conflict of interest involving the manuscripts under review, they should not make editing and publication decisions. Editorial personnel should refrain from using information learned from dealing with submissions for their own benefit.",-1)),J3=We(()=>d("br",null,null,-1)),X3=We(()=>d("strong",null,"Aperier Submission System",-1)),ez=We(()=>d("p",null,"Editors, members of the editorial board, and reviewers who are also the authors of the article being considered are expressly prohibited from participating in the peer review process by the Aperier Submission System (manuscript and peer review management system).",-1)),tz=We(()=>d("br",null,null,-1)),nz=We(()=>d("strong",null,"Conflict of Interests Statement",-1)),oz=We(()=>d("p",null,"If there is a conflict of interest prior to the publication of the article, whether it has been attested by an author, a reviewer, Editorial Board members, editors, the Managing Editor or the journal staff, or if there has been a leak of information, a conflict of interests statement should be published in the article. In addition, the editor may request and publish related documents so that the reader has all the necessary information and can decide for himself the possibility of the conflict.",-1)),iz=We(()=>d("p",null,[H("The journal, its staff, editorial board, publisher, rules, processes, or the conduct of the Aperier editorial staff are all subject to complaints under this system. We will respond quickly and constructively to concerns as they present a chance for improvement. The person whom the complaint is intended for should get it. Please email your complaint to "),d("a",{"data-fr-linked":"true",href:"mailto:head@aperier.com"},"head@aperier.com"),H(" with a full description of the complaint's nature and its source if this individual is unavailable for any reason or is unable to fix the issue.")],-1)),sz=We(()=>d("p",null,"We assume that objections should focus on procedural failures (serious misjudgement, protracted delay, or a nasty answer), rather than a straightforward disagreement with editorial judgments.",-1)),rz=We(()=>d("p",null,[d("br")],-1)),az=We(()=>d("p",null,"Aperier addresses following complaints:\xA0",-1)),lz=We(()=>d("ul",null,[d("li",null,"Authorship complaints\xA0"),d("li",null,"Plagiarism complaints\xA0"),d("li",null,"Multiple, duplicate, concurrent publication/Simultaneous submission\xA0"),d("li",null,"Research results misappropriation and data fabrication\xA0"),d("li",null,"Allegations of research errors and fraud\xA0"),d("li",null,"Research standards violations\xA0"),d("li",null,"Undisclosed conflicts of interest\xA0"),d("li",null,"Reviewer bias or competitive harmful acts by reviewers.")],-1)),cz=We(()=>d("br",null,null,-1)),dz=We(()=>d("strong",null,"Complaints handling policy",-1)),uz=We(()=>d("p",null,"We shall look into a complaint if the Publisher receives one alleging that a submission to the Journal violates intellectual property rights, includes substantial errors, libellous material, or other illegal content. A request that the parties concerned substantiate their assertions may be made as part of the investigation. The Publisher will make the decision on the allegedly unlawful material's removal. The content won't be taken down if the complaint doesn't have enough support. There will be documentation of complaint investigations and judgments. Although we strive to provide publications of the greatest calibre, we acknowledge that errors may occasionally occur.",-1)),hz=We(()=>d("p",null,"All complaints will be taken seriously (within three working days if by email). If at all feasible, a final decision will be reached in two weeks. A temporary response will be provided within two weeks if this is not feasible. Until the complaint is eventually handled, interim replies will be given. If the complainant is still unhappy, the editor will be notified, and their judgement will be final.",-1));function fz(s,l,h,g,m,y){const w=et("AccordionItemComponent"),v=et("AccordionComponent");return re(),ae(rt,null,[PR,d("div",NR,[d("div",BR,[d("div",OR,[ce(v,null,{default:je(()=>[ce(w,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Editorial Independence "},{default:je(()=>[LR,RR,zR,jR,FR,$R]),_:1}),ce(w,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Guidelines for Editors and Reviewers"},{default:je(()=>[VR,UR,HR,qR,WR,GR,KR,YR,QR,ZR,JR,XR,e3,t3,n3,o3,i3,s3,r3,a3,l3,c3,d3,u3,h3,f3,p3,m3,g3,b3,_3]),_:1}),ce(w,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Peer Review"},{default:je(()=>[w3,k3,v3,y3,A3,C3,x3,E3,D3,T3,S3,I3]),_:1}),ce(w,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Plagiarism"},{default:je(()=>[M3,P3,N3,B3,O3]),_:1}),ce(w,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Conflicts of Interest"},{default:je(()=>[L3,R3,z3,j3,F3,$3,V3,U3,H3,q3,W3,G3,K3,Y3,Q3,Z3,J3,X3,ez,tz,nz,oz]),_:1}),ce(w,{heading_id:"headingSeven",collapse_id:"collapseSeven",title:"Complaints Policy"},{default:je(()=>[iz,sz,rz,az,lz,cz,dz,uz,hz]),_:1})]),_:1})])])])],64)}const pz=ut(MR,[["render",fz],["__scopeId","data-v-22d68208"]]);const mz={props:["news"],data(){return{domain:Ct.domain}}},gz=s=>(Rt("data-v-c1cf4084"),s=s(),zt(),s),bz={class:"news-card"},_z=["src"],wz={class:"news-card-body"},kz={class:"news-title"},vz={class:"px-4"},yz=gz(()=>d("i",{class:"fa-solid fa-arrow-right bg-secondary p-2 rounded-pill text-white"},null,-1));function Az(s,l,h,g,m,y){const w=et("router-link");return re(),ae("div",bz,[d("img",{src:`/storage/upload/news/${h.news.image}`,class:"img-fluid",alt:""},null,8,_z),d("div",wz,[d("div",kz,[d("span",null,pe(h.news.title),1),d("span",null,pe(h.news.date),1)]),d("div",vz,[ce(w,{to:{name:"News Details",params:{id:h.news.id}}},{default:je(()=>[yz]),_:1},8,["to"])])])])}const Cz=ut(mz,[["render",Az],["__scopeId","data-v-c1cf4084"]]);const xz={props:["title"],data(){return{}}},Ez={class:"container-fluid"},Dz={class:"section-title"},Tz={class:"section-title-h2"};function Sz(s,l,h,g,m,y){return re(),ae("section",Ez,[d("div",Dz,[d("h2",Tz,pe(h.title),1)])])}const Op=ut(xz,[["render",Sz],["__scopeId","data-v-a19abcb2"]]);const Iz={components:{NewsListCardComponent:Cz,SectionTitleComponent:Op},data(){return{data:[],domain:Ct.domain}},async mounted(){this.data=(await qt.get(`${Ct.domain}/api/news`)).data.data}},Mz=s=>(Rt("data-v-efcf99c7"),s=s(),zt(),s),Pz=Mz(()=>d("div",{class:"top-hero-image"},null,-1)),Nz={class:"container p-5"},Bz={class:"row g-4"};function Oz(s,l,h,g,m,y){const w=et("section-title-component"),v=et("NewsListCardComponent");return re(),ae(rt,null,[Pz,ce(w,{title:"All News",class:"mt-3"}),d("div",Nz,[d("div",Bz,[(re(!0),ae(rt,null,Pt(m.data,A=>(re(),ae("div",{class:"col-12",key:A.id},[ce(v,{news:A},null,8,["news"])]))),128))])])],64)}const Lz=ut(Iz,[["render",Oz],["__scopeId","data-v-efcf99c7"]]);const Rz={data(){return{data:[],domain:Ct.domain}},async mounted(){this.data=(await qt.get(`${Ct.domain}/api/news/${this.$route.params.id}`)).data.data}},g_=s=>(Rt("data-v-471ea742"),s=s(),zt(),s),zz=g_(()=>d("div",{class:"top-hero-image"},null,-1)),jz={class:"container"},Fz={class:"row p-5"},$z={class:"col-12"},Vz={class:"news-title"},Uz=g_(()=>d("br",null,null,-1)),Hz=g_(()=>d("br",null,null,-1)),qz=["innerHTML"],Wz=g_(()=>d("br",null,null,-1)),Gz=["src"];function Kz(s,l,h,g,m,y){return re(),ae(rt,null,[zz,d("div",jz,[d("div",Fz,[d("div",$z,[d("div",Vz,[d("span",null,pe(m.data.title),1),d("span",null,pe(m.data.date),1)]),Uz,Hz,d("span",{innerHTML:m.data.content},null,8,qz),Wz,d("img",{src:`/storage/upload/news/${m.data.image}`,class:"img-fluid",alt:""},null,8,Gz)])])])],64)}const Yz=ut(Rz,[["render",Kz],["__scopeId","data-v-471ea742"]]),t2="/build/assets/Trophy.25e9c9ca.png";const Qz={props:["src","title","date","id"]},n2=s=>(Rt("data-v-e5f108dc"),s=s(),zt(),s),Zz={class:"news-card"},Jz=n2(()=>d("img",{src:t2,alt:""},null,-1)),Xz={class:"news-card-body"},ej={class:"news-title"},tj={class:"px-4"},nj=n2(()=>d("i",{class:"fa-solid fa-arrow-right bg-secondary p-2 rounded-pill text-white"},null,-1));function oj(s,l,h,g,m,y){const w=et("router-link");return re(),ae("div",Zz,[Jz,d("div",Xz,[d("div",ej,[d("span",null,pe(h.title),1),d("span",null,pe(h.date),1)]),d("div",tj,[ce(w,{to:{name:"Award Details",params:{id:h.id}}},{default:je(()=>[nj]),_:1},8,["to"])])])])}const ij=ut(Qz,[["render",oj],["__scopeId","data-v-e5f108dc"]]),o2={"award-1":{id:1,title:"Outstanding Article Award \u2013 Sustainability Studies - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for publications that have a clear and important contribution to the field of sustainability. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'Editors of Sustainability studies create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]},"award-2":{id:2,title:"Travel Award \u2013 All Aperier Journals - 2024",date:"Dec 01, 2022",description:"The Travel Awards is introduced by Aperier publishing for authors who published with us, especially researchers in early stage of their academic career that have made a clear and important contribution to their field. The winners are chosen by the independent committee from all journal editorial boards will select the winners; giving the winning authors confidence in knowing that their outstanding progress and chance to broaden their network with the international research communities, as this award provides financial support for the winners to attend an international conference in the relevant field, in order to hold a presentation, present a poster, or both.",judging_process:"independent committee from all journal editorial boards will be created to determine and select the winning authors who published their work at one of Aperier journals, especially Postdoctoral fellows or PhD students. The winner will be selected on this basis.",eligibility:["Open to all career levels; especially Postdoctoral fellows or PhD students.","Plans to attend an international conference."],criteria:["Provided information of the conference that the applicant is planning to attend and the abstract that will be submitted.","Curriculum vitae and list of publications.","Justification letter describing the focus of the research (max. 800 words).","Letter of recommendation from the supervisor, research director, or department head, which also confirms the applicant\u2019s status as a postdoctoral fellow/PhD student.","His/her Social media links (for promotions purpose only)"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["Three winners: Plans to attend an international conference","Up to up to $1,000 each awardee","The winners will also receive a certificate."]},"award-3":{id:3,title:"Travel Award \u2013Outstanding Article Award \u2013 Business Studies - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for publications that have a clear and important contribution to various field of business and management. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'iEditors of Business studies create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]},"award-4":{id:4,title:"Outstanding Reviewer Awards- All Journals - 2024",date:"Dec 01, 2022",description:"Reviewers are essential to the scholarly publishing process; academics rely on peer review to verify their research and add value to it through critical engagement before publication.Reviewers are specialists in a given area of research and are well placed to assess the soundness of an author\u2019s work and share their own knowledge.",judging_process:"The editorial Board the journals select a winner of the \u2018Outstanding Reviewer Award\u2019 from the previous year\u2019s volume.",eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Timeliness of the reviews","Quality of the reviews","The depth of reviews and the amount of detail"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["There will be three winners this year, and each will receive the following: ","Up to $300 ","A certificate."]},"award-5":{id:5,title:"Travel Award \u2013Outstanding Article Award \u2013 Bibliometric and Systematic Reviews  - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for Reviews that have a clear and important contribution to field. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'Editors of Bibliometric and Systematic Reviews create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]},"award-6":{id:6,title:"Travel Award \u2013Outstanding Article Award \u2013 Tourism Studies - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for Reviews that have a clear and important contribution to field. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'Editors of Bibliometric and Systematic Reviews create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]}};const sj={components:{AwardListCardComponent:ij,SectionTitleComponent:Op},data(){return{awardList:{}}},async mounted(){this.awardList=o2}},rj=s=>(Rt("data-v-391823fc"),s=s(),zt(),s),aj=rj(()=>d("div",{class:"top-hero-image"},null,-1)),lj={class:"container p-5"},cj={class:"row g-4"};function dj(s,l,h,g,m,y){const w=et("section-title-component"),v=et("AwardListCardComponent");return re(),ae(rt,null,[aj,ce(w,{title:"All Awards",class:"mt-3"}),d("div",lj,[d("div",cj,[(re(!0),ae(rt,null,Pt(m.awardList,A=>(re(),ae("div",{class:"col-12",key:A.id},[ce(v,{title:A.title,date:A.date,id:A.id},null,8,["title","date","id"])]))),128))])])],64)}const uj=ut(sj,[["render",dj],["__scopeId","data-v-391823fc"]]);const hj={data(){return{award:{}}},async mounted(){this.award=o2[`award-${this.$route.params.id}`]}},di=s=>(Rt("data-v-a9d374d9"),s=s(),zt(),s),fj=di(()=>d("div",{class:"top-hero-image"},null,-1)),pj={class:"container"},mj={class:"row p-5"},gj={class:"col-12"},bj={class:"news-title"},_j=di(()=>d("br",null,null,-1)),wj=di(()=>d("br",null,null,-1)),kj=di(()=>d("br",null,null,-1)),vj=di(()=>d("strong",null,"The Judging Process",-1)),yj=di(()=>d("br",null,null,-1)),Aj=di(()=>d("strong",null,"Eligibility for the Award",-1)),Cj=di(()=>d("br",null,null,-1)),xj=di(()=>d("strong",null,"Award Winning Criteria",-1)),Ej=di(()=>d("br",null,null,-1)),Dj=di(()=>d("br",null,null,-1)),Tj=di(()=>d("strong",null,"The Prize ",-1)),Sj=di(()=>d("br",null,null,-1)),Ij=di(()=>d("br",null,null,-1)),Mj=di(()=>d("img",{src:t2,alt:""},null,-1));function Pj(s,l,h,g,m,y){return re(),ae(rt,null,[fj,d("div",pj,[d("div",mj,[d("div",gj,[d("div",bj,[d("span",null,pe(m.award.title),1),d("span",null,pe(m.award.date),1)]),_j,wj,d("p",null,pe(m.award.description),1),kj,vj,d("p",null,pe(m.award.judging_process),1),yj,Aj,d("ul",null,[(re(!0),ae(rt,null,Pt(m.award.eligibility,w=>(re(),ae("li",{key:w},pe(w),1))),128))]),Cj,xj,d("ul",null,[(re(!0),ae(rt,null,Pt(m.award.criteria,w=>(re(),ae("li",{key:w},pe(w),1))),128))]),Ej,d("p",null,pe(m.award.criteria_text),1),Dj,Tj,d("ul",null,[(re(!0),ae(rt,null,Pt(m.award.prize,w=>(re(),ae("li",{key:w},pe(w),1))),128))]),Sj,Ij,Mj])])])],64)}const Nj=ut(hj,[["render",Pj],["__scopeId","data-v-a9d374d9"]]);const Bj={},i2=s=>(Rt("data-v-82424cf2"),s=s(),zt(),s),Oj=i2(()=>d("div",{class:"top-hero-image"},null,-1)),Lj=i2(()=>d("div",{class:"container p-5"},[d("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"Condition of use")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"Privacy Policy")])]),d("div",{class:"tab-content",id:"myTabContent"},[d("div",{class:"tab-pane fade show active py-5",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},[d("p",null,[H('Please read these Terms of Use carefully (the "Terms"), as they apply to using this website ( https://aperier.com/ ) (the "Website") by you, and to using the services provided by Limited Liability Company "Consulting Publishing Company" Aperier". Having access to or using the site located at https://aperier.com/ by registering or receiving services through this site or by phone, you agree to these Terms and enter into a legally binding agreement with the Aperier ("Agreement").'),d("br"),d("br"),H('This Agreement determines the relationship between "Aperier", and you ("you", "your", "customer"). If you enter into this Agreement on behalf of a company or other legal entity, you also declare that you have the right to represent a third party and accept these terms on its behalf, therefore, the terms "you", "your" or "customer" should refer to such a subject. If you do not have such authority or if you do not agree to these terms, you must not agree to this Agreement and you cannot use https://aperier.com/ or its services. Having access to or using the Services, you agree to observe these Terms and Conditions. If you do not accept these Terms of Use, please do not use the Services.'),d("br"),d("br"),d("strong",null,"COPYRIGHT"),d("br"),H(`All content on the site is the "Aperier" intellectual property or can be used with the permission of the copyright owner, except the content under Creative Commons License. We respect the intellectual property of other people and ask our site https://aperier.com/ users to do the same. We adopted and implemented a policy on copyright law that provides for the removal of any copyright infringing material and the termination the servicing of our site and services' users that are re-infringers of intellectual property rights, including copyrights. If you believe that one of our users, by using our website and services, unlawfully violates the copyright(s) and you want to delete the material allegedly violating the copyright(s), send the following information in written form in favor of`),d("br"),H("You are personally responsible for the accuracy of this data, claiming that the information in the notice is accurate and, under penalty of perjury, that you are either the owner of the copyright that was allegedly infringed, or are authorized to act on behalf of the copyright owner."),d("br"),d("br"),H("Nothing contained in these terms should exclude the impact on any of your legitimate intellectual property rights."),d("br"),d("br"),d("strong",null,"SITE CONTENT"),d("br"),H('All information and content available on this website ("Content" as a whole) are protected by copyright and other intellectual property laws. The content and website belong to "aperier". Content is for personal and non-commercial use only. Any use of Content that is expressly unauthorized by these Terms of Use is a violation of these Terms of Use and may infringe copyrights, trademarks and other laws.'),d("br"),d("br"),H('Using the Site and all Content by you relies on "as is" condition at your own responsibility and we do not assure and do not refuse any obvious or implied warranties, representations or approvals in general with respect to the Website or Content.'),d("br"),d("br"),H('You can use or reproduce content only for personal and non-commercial use. The following actions are prohibited: (i) use of any robot or other automatic device or manual process for monitoring or copying web pages, as well as its contents, or for any other unauthorized purposes without our prior written permission; (ii) use of any device, software or routine to intervene or attempt to hamper the proper operation of the Site; (iii) decompiling, reverse designing, disassembling, or attempting to obtain the source code for the Software; or (iv) taking any measures imposing an unreasonable or disproportionate burden on the hardware and software infrastructure of https://aperier.com/ ("Forbidden Acts" as a whole).'),d("br"),d("br"),d("strong",null,"LINKS TO OTHER SITES"),d("br"),H('This site may contain links to other independent third-party websites/social networks ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for the content of such Linked Sites and do not endorse them, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.'),d("br"),d("br"),d("strong",null,"FEEDBACK"),d("br"),H('Occasionally, you may provide "Aperier" with suggestions, ideas or other feedback on the Services ("Feedback"). Both parties agree that the Publisher has such feedback and is entitled, but not obligated, to use, develop and operate it in any way, without any restrictions or to request permission from you.'),d("br"),d("br"),d("strong",null,"TERMS AND TERMINATION"),d("br"),H('The validity period for the site use is valid until "Aperier" terminates them, or until you inform "Aperier" of your decision to terminate. Your rights will automatically terminate without notice if you do not comply with any of these Terms provisions. Aperier reserves the right to suspend, terminate or modify the Service or its availability for you at any time without prior notice. Upon termination, all rights granted to you in these Service Terms will cease immediately.'),d("br"),H("Any provision of these Service Terms, directly or indirectly intended to continue the entry of these Service Terms into force after their termination or expiration, will remain."),d("br"),d("br"),d("strong",null,"DENIAL OF RESPONSIBILITY"),d("br"),H('Services are provided based on "as is" condition, without warranty of any kind, either obvious or implied, including, but not limited to, implied warranties of reliability, availability, or applicability for a particular purpose. You are responsible for all the risks associated with the results or performance of the services you offer. In no circumstances, Aperier will be liable for any damages, including, but not limited to, lost profits, lost savings or other incidental or consequential damages arising from the use/inability to use these services, even if the Publisher has been informed of the possibility of such damage. The terms of these sections apply to the fullest extent permitted by law in the applicable jurisdiction.'),d("br"),d("br"),d("strong",null,"SERVICE NOTIFICATIONS AND STATEMENTS"),d("br"),H("You agree that we may use our website, mobile applications and e-mail to provide you with important notices. You agree that we may provide you with notices in the following ways: (1) an official notice or (2) an email sent to the address specified by you, or (3) the text on the mobile phone number that you specified, (4) through other means, including phone or mail. You agree to maintain current contact information."),d("br"),d("br"),d("strong",null,[H("AMENDMENTS AND ALTERATIONS"),d("br")]),H('We may make amendments at any time, adjust or terminate any terms of this Agreement, and such changes or termination will apply at the time we publish the revised terms on the site. You can identify when this agreement was last revised, referring to the "last updated" date at the top of this agreement. Your continued use of the site or services after we have published the revised terms means your acceptance of such revised terms. No amendment or alteration of this agreement will be binding unless it is signed by our duly authorized representative in writing and is not posted on the site.'),d("br"),d("br"),d("strong",null,"FOR REGISTERED USERS"),d("br"),H("When registering, you agree to provide accurate and complete registration information. You are responsible for informing about any changes in this information. Each registration is for an individual only, unless specifically indicated otherwise on the registration page. Do not allow anyone other than you to use the registration form, using your name or password."),d("br"),d("br"),H('The Publisher grants you a non-exclusive, non-transferable, revocable, and limited right of access and use of the Website. To obtain full access and to use the Website, you must create a profile and register as a user (hereinafter referred to as the "Registered User").'),d("br"),d("br"),H("You are allowed to register only one profile per person on the Site. The profile is private, and you should not transfer it to others."),d("br"),H("You need a password to become a registered user. You choose your own password, which should be used with your email address when you log onto the Website. If you use a password to access the Service, you must not disclose your password and must take reasonable measures to ensure that your password is confidential and secure. You agree to notify Aperier immediately if you know or reasonably believe that there is an unauthorized use of your password or account or any other security breach. The Publisher is in no way responsible for any claims or losses related to the use or misuse of your password or account due to the activities of any third party beyond our control or because of your non-compliance with privacy and security."),d("br"),H('During the registration process, you must choose a user name. The username will be displayed on the Site whenever you write or comment on reviews or create custom content (see P. 2.1 below) on the Site. Therefore, you must consider whether you want to use a username according to which you can be identified by others. The user name should not (i) be offensive, (ii) contain the terms "Guest", "Admin", "* .co", "* .org", etc., or (iii) contain characteristics that belong to third parties, including the names of known persons or personal names that are not applicable to you. You guarantee that your user name will not infringe any rights (including any intellectual property rights) belonging to any third party and/or relating to the Terms of Use.'),d("br"),H("Only we can change the username. If you want to change your username, please contact us at"),d("br"),H("We may at any time, without prior notice and without prejudice, remove, suspend or change your profile in the event of your violation or alleged violation of these User Terms or applicable law. If you delete your profile, you will no longer have access to the Site services that require your registration and/or registration as a registered user."),d("br"),H("When deleting your profile, we reserve the right to delete the user-generated content that you create on the website."),d("br"),H("In addition, we reserve the right to delete your profile and user generated content at any time and without notice or explanation. In this case, our disclaimer is applied without limitations."),d("br"),H("You are not allowed to access or attempt to access parts of the Site that require the user to register, unless you are a registered user."),d("br"),d("br"),d("strong",null,"MISCELLANEOUS"),d("br"),H("We do not declare that the Services are suitable or available for use in your region, and access to them from places where their content is illegal is prohibited. If you decide to gain access to this site from such places, you do this at your own initiative and are responsible for compliance with local laws. These Terms of Service constitute the entire agreement between us and supersede any offers or preliminary agreements, whether verbal or written and any other communication between us relating to the subject matter of these Service Terms. We reserve the right, at our own discretion, to update or revise these Service Terms. Please check the Terms of Use occasionally. Your continued use of the Services after the publication of any changes to the Terms of Service means these changes' acceptance. Please note that through the Services you agree that you are entering into a legally binding agreement (even if you are using the Services on behalf of the company). You acknowledge that you have read these Service Terms and agree to abide by its terms and conditions.\xA0")])]),d("div",{class:"tab-pane fade py-5",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},[d("p",null,[d("strong",null,"Who are we?"),d("br"),H("We collect and use personal data for the effective work and provide you with the best experience in our services. We use only your personal data, where we have a proper legal basis for this."),d("br"),H("We do not sell, provide or rent your personal data to advertisers, marketers or spammers."),d("br"),H("We save your personal data only as long as we need it to provide you with our services and fulfill the purposes described in this Privacy Policy."),d("br"),H("If you provide us with personal details on your customers, this information is considered confidential and will only be used if necessary to provide the services that you have purchased. We will not share this information with third parties, including advertisers, marketers or spammers."),d("br"),H("We take your personal data security seriously and apply industry-specific warranties to protect any personal data stored in our systems."),d("br"),H("We use cookies to understand how visitors use our site, but we never sell or share this information with third parties."),d("br"),H("We are not responsible for the privacy practices of any sites linked to our site if they are not controlled or do not belong to Business Perspectives under the right of ownership. Be careful when visiting any other websites."),d("br"),H("We would like to send you information and updates by e-mail, but you can refuse to receive this information at any time. We will request your prior consent if necessary in accordance with the legislation of the country in which you are located."),d("br"),H("This Privacy Policy is legally binding and may be updated from time to time."),d("br"),H("If you have any questions about this Privacy Policy, please contact us:"),d("br"),H("Data collection/information disclosure policy"),d("br"),H("To the extent permitted by the existing legislation, we collect information about you and any other party whose data you provide to us when you:"),d("br"),d("br"),H("register to use our websites, applications or services (including free trials); this may include your name (including your company name), address, email address and phone number. We can also ask you to provide additional information about your business and your preferences;"),d("br"),H("place an order using our websites, applications or services; this may include your name (including the business name), address, contact (including phone number and e-mail address) and payment details;"),d("br"),H("fill in online forms (including callback requests), participate in surveys, place announcement on our boards, place any blogs, enter any contests or prize drawings, upload information such as official documents or other publications, or participate in any other interactive areas on our website or within our application or service;"),d("br"),H("interact with us through social networks;"),d("br"),H("provide us with your contact details when registering or using any of the websites, applications or services that we provide, or when you update this information; and"),d("br"),H("contact us off-line, for example, by phone, fax, SMS, email or by mail."),d("br"),H("We also collect your data when you only partially fill out and/or leave any information entered on our website and/or other online forms and you can use this information to remind you to give any available information and/or for marketing purposes."),d("br"),d("br"),H("We also collect information from your devices (including mobile devices) and applications that you or your users use to access and use any of our websites, applications or services (for example, we can collect identification number and device type, location information and data about the connection such as your page views statistics, traffic to/from sites, referral URL, ad data, your IP address, browsing history and your web log data), and we ask you for permission before we do it."),d("br"),d("br"),H("We can do this through cookies or similar technologies. The company will not disclose personal information about any person other than as specified in this Privacy Policy. This applies to information about our customers and the information that our customers provide to us. We disclose information that we, in good faith, consider it advisable to cooperate while investigating fraud or other illegal activities, investigate violations of our Terms of Use and/or protect our right, protect your safety and the safety of other people."),d("br"),d("br"),H("We disclose information in response to a request for summons, warrant, order of the court, recovery, disposal of a court-appointed recipient or other comparable litigation, including agendas from individuals in the civil proceedings."),d("br"),d("br"),H("We disclose information to your agent or legal representative (for example, the holder of the letter of attorney you provide or the guardian appointed by you)."),d("br"),d("br"),H("To implement our Services, we may need to publish your Personal Data to publish reviews, notices on social networking sites, etc. For example, we may need to disclose your name on the website to publish an article review. We will do this with your permission for a specific target."),d("br"),d("br"),H("Unless otherwise provided in the written agreement, we collect, store and process your personal data on servers located in Ukraine. Due to the unpredictable nature of Internet routing, your information can pass through other countries when you transit to our servers."),d("br"),d("br"),d("strong",null,"Information security"),d("br"),H("To the extent permitted by the current legislation, we use your information to:"),d("br"),d("br"),H("provide any information and services you requested or any applications or services you ordered;"),d("br"),H("compare information for the purpose of accuracy and check it with third parties;"),d("br"),H("provide, maintain, protect and improve any applications, products, services and information that you have requested;"),d("br"),H("manage and administer your use of the applications, products and services you requested;"),d("br"),H("manage the relationship between us (for example, customer service and support activities);"),d("br"),H("monitor, measure, improve and protect our content, website, applications and services and provide you with enhanced personal experience of users;"),d("br"),H("conduct internal testing of our website, applications, systems and services to verify and improve their security and performance, in which case we will rename any information used for such purposes and make sure that it is displayed only at aggregated levels, which will not be tied to you or to any individual;"),d("br"),H("provide you with any information we are required to send to you according to our regulatory or legal obligations;"),d("br"),H("identify, prevent, investigate or eliminate committed crimes, illegal or prohibited activities or protect our legal rights in any other way (including communication with regulators and law enforcement agencies);"),d("br"),H("contact us to find out if you want to participate in our customer research (for example, comments on using our applications, products and services);"),d("br"),H("monitor, perform statistical analysis and benchmarking, provided that in such circumstances it is not bounded to you or to any individual on an aggregated basis;"),d("br"),H("provide targeted advertising, marketing (including messaging in products) or information that you may find useful, based on the use of our applications and services;"),d("br"),H("provide joint content and services to third parties you cooperate separately (for example, social network providers); and"),d("br"),H("provide you with location-based services (for example, advertising and other personalized content) where we collect location data."),d("br"),H("To the extent permitted by the current legislation, we retain information about you after you close your Business Perspectives account. This information will be stored and used as long as it is permitted for legal, regulatory, fraud prevention and legitimate business purposes."),d("br"),d("br"),H("Your personal information security is important to us. If you provide confidential information, such as a credit card number, we encrypt this information in our registration form or order using secure socket level technology. Business Perspectives undertakes to process your customer information with high standards of information security."),d("br"),d("br"),H('We store the personal data provided by you and hold it by the "firewall". It is accessible only to those who need to know this information and who have special access rights to our production systems. We support physical, electronic and procedural safeguards that comply with state regulations to protect your non-public personal information.'),d("br"),d("br"),H("We will make every reasonable effort to protect your information, but no system can prevent all malicious attacks on our system or the widely used Internet protocols or software."),d("br"),d("br"),H("Your account security also depends on your password protection. You are responsible for maintaining your password security. You are solely responsible for any actions occurring in your account."),d("br"),d("br"),H("If for any reason you share your password with a third party, the third party will have access to your account and your personal data, and you can be held responsible for the actions taken with your password use."),d("br"),d("br"),H("If you believe that someone else has access to your password, change it immediately by logging into your account on the site and changing your profile settings. If you believe that unauthorized access has already occurred, report this immediately to"),d("br"),H("Data science"),d("br"),H("We can use the information created and stored during the use of our services for our legitimate business interests so that we can provide you with the best service and/or solutions and best practices. These objectives include:"),d("br"),d("br"),H("delivering advertising, marketing (including messaging in products) or information that you might find useful, based on your use of the services;"),d("br"),H("conducting research and development to improve our services, products and applications;"),d("br"),H("developing and providing new functionalities and services (including statistical analysis, benchmarking and forecasting); and"),d("br"),H("providing you with location-based services (for example, a relevant location) where we collect location data to provide relevant experience."),d("br"),H("Information we share"),d("br"),H("We can share the information that you provide to companies that are linked through the Business Perspectives joint ownership. We also can share personal information that we and our publishers receive. We share personal information with third parties who perform services on our behalf. For example, when making a purchase we can share information about you and your transaction with other companies to process your transaction. In addition, we can retain third-party service providers to manage our customers' databases or distribute proposals by email."),d("br"),d("br"),H("Our site can contain blogs, forums and discussion groups. Remember that some or all of the information you provide (including personal information) may be publicly available due to these actions."),d("br"),d("br"),H("We may also disclose information about you (i) if we are required to do that by law, regulation or litigation (for example, a court order or request for summons), (ii) in response to requests from government authorities, for example, law enforcement agencies, or (iii) when we believe that the information disclosure is necessary to prevent physical harm or financial loss or due to the investigation of expected or actual illegal activities. We reserve the right to transfer any information about you in the event of the sale or transfer of all or part of our activities or assets (including reorganization or liquidation)."),d("br"),d("br"),H("Your information and your rights"),d("br"),H("You have the following rights:"),d("br"),d("br"),H("the right to know how we use your data and access your information;"),d("br"),H("the right to delete your information or restrict your data processing;"),d("br"),H("the right to be against your data processing, for example, for the purposes of direct marketing or when processing is based on our legitimate interests;"),d("br"),H('the right to have any information provided on an automated basis returned to you in a structured, commonly used and machine-readable format or sent directly to another company where it is technically feasible ("data portability");'),d("br"),H("when your information processing is based on your consent, the right to withdraw this consent in accordance with legal or contractual restrictions;"),d("br"),H("the right to oppose any decisions based on the automated processing of your personal data, including profiling."),d("br"),H("If we store any information about you that is incorrect or if there are any changes in your data, please let us know so that we can keep our records accurate and up-to-date."),d("br"),d("br"),H("If you withdraw your consent to the use of your personal information for the purposes set out in our Privacy Notice, we will not be able to grant you access to all or parts of our website, applications or services."),d("br"),d("br"),H("We will keep your personal information for our business relationship time, and then until it is necessary and relevant for our legitimate business purposes, in accordance with the policy of storage, labeling and cancellation of the group or in any other way authorized by the existing laws and regulatory acts. When we no longer need your personal information, we will dispose of it in a safe manner (without your notice)."),d("br"),d("br"),H("Changes to our Privacy Notice"),d("br"),H("We may change this Privacy Notice from time to time. However, we will not diminish your rights in accordance with this Privacy Notice. We will always update this Privacy Notice on our website, so please try to read it when you visit the website (the last updated link informs you when we last updated this Privacy Notice).")])])])],-1));function Rj(s,l,h,g,m,y){return re(),ae(rt,null,[Oj,Lj],64)}const zj=ut(Bj,[["render",Rj],["__scopeId","data-v-82424cf2"]]);const jj={props:["title","author","tag","volume","issue","page","downloads","views"]},Fj={class:"issue-card"},$j={class:"issue-card-title"},Vj={class:"issue-stats"},Uj={class:"issue-stat-left"},Hj={class:"issue-stat-right"};function qj(s,l,h,g,m,y){return re(),ae("div",Fj,[d("span",$j,pe(h.title),1),d("span",null,pe(h.author),1),d("div",Vj,[d("div",Uj,[d("span",null,pe(h.tag),1),d("span",null,pe(h.volume),1),d("span",null,pe(h.issue),1),d("span",null,pe(h.page),1)]),d("div",Hj,[d("span",null,pe(h.downloads),1),d("span",null,pe(h.views),1)])])])}const Py=ut(jj,[["render",qj],["__scopeId","data-v-7e75ade8"]]),Wj={"journal-1":{home:{general_information:"This is an open access journal and peer-reviewed.Sustainability Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of sustainabiltiy. Papers must address issues associated with the sustainability aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2019-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"10",publication_acceptance:"4",downloads:"4,409 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of sustainability issues around the globe. In addition to publishing original research and analyses, Sustainability Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with sustainability science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to sustainability. As a problem-driven discipline, sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others. At the same time it tries to investigate root causes of problems by uncovering new knowledge or combining current knowledge from more than one discipline in a holistic way to enhance understanding of sustainability.",key_topic_text:"sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others;",key_topics:["Sustainable Development","Sustainable Development Goals","Corporate Sustainability","Poverty","Corporate Environmental Management","Corporate Social Responsibility","Climate Change, Decent Work","Sustainable Production","Sustainable Consumption","Sustainable Communities "],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Saleh F. A. Khatib"],in_board:["Mohammad Amin Makarem","Sukanya Chakraborty","Youssef Said Bazeen","Annisa Dina Amalia","Claire Xin Hui Su"],in_managing:["Fatin Izzati Jaidil"],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the SS@aperier.com"},contact_us:{in_chief:["Saleh F. A. Khatib- Malaysia","f1991@graduate.utm.my"],in_managing:["ss@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-2":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Sustainability Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of sustainabiltiy. Papers must address issues associated with the sustainability aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2020-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"12",publication_acceptance:"5",downloads:"3,102 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of business issues around the globe. In addition to publishing original research and analyses, Business Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with business science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to business administration and cross-functional, multidisciplinary research that reflects the complex character of business problems. Of particular interest are articles devoted to developing novel perspectives or exploring new domains of research. This journal is not tied to any particular subfield, type of analysis, or national context.It tries to investigate root causes of problems by uncovering new knowledge or combining current knowledge from more than one discipline in a holistic way to enhance understanding of business.",key_topic_text:"Business science is concerned with addressing practical challenges caused by several issues, among others;",key_topics:["Global Political and Economic Environment","Strategic Management","Finance and Accounting","Industrial Marketing","Organizational Behavior","Cross-Cultural Management","Leadership","Human Resources Management","Ethics, Social Responsibility and Sustainability","Innovation, Technology and Entrepreneurship","Business Law","Business History"],readership:"Policy makers in central and local government \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Ali Shariff Kabara"],in_board:["Mohammad Sidik Nugraha","Amira Diyana Mohd Rosly"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the BS@aperier.com"},contact_us:{in_chief:["Ali Shariff Kabara","alishariff080@gmail.com"],in_managing:["bs@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-3":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Bibliometric and Systematic Reviews is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of various topics. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"10",publication_acceptance:"4",downloads:"4,409 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of sustainability issues around the globe. In addition to publishing original research and analyses, Sustainability Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with scientific research.Our aim is to encourage researchers to publish their reviews that encompasses all aspects of the design, conduct and reporting of systematic reviews. The journal publishes high quality review products including systematic review protocols, systematic reviews related to a very broad definition of social and applied sciences, rapid reviews, updates of already completed systematic reviews, and methods research related to the science of systematic reviews, such as decision modelling. The journal also aims to ensure that the results of all well-conducted systematic reviews are published, regardless of their outcome.The journal aimed to facilitate the research in all fields of life until the systematic methods have been applied.",key_topic_text:"This journal has a growing list of editorial topic areas, including: ",key_topics:["Business and Management","Climate Solutions","Crime and Justice","Disability","Education; ","International Development","Knowledge Translation and Implementation","Methods","Nutrition and Food Security","Sexual Orientation and Gender Identity","Social Welfare","Training","Sustainable Development Goals","Sustainability"],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Alhamzah F. Abbas"],in_board:["Adam Adiyatma","Desy Trilistyoati","Muhammad Andhika","Thirumagal Jayaraman","Ejaz Ahmed Chaudhary"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the SBR@aperier.com"},contact_us:{in_chief:["Alhamzah F. Abbas","alhamza.fadil@gmail.com"],in_managing:["bsr@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-4":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Marketing Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of marketing. Papers must address issues associated with the marketing aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"7",publication_acceptance:"6",downloads:"1,421     (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of marketing issues around the globe. In addition to publishing original research and analyses, Marketing Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with Marketing science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to marketing. As a problem-driven discipline, marketing science is concerned with addressing practical challenges caused over time. At the same time it tries to investigate root causes of problems by uncovering new knowledge or combining current knowledge from more than one discipline in a holistic way to enhance understanding of marketing.",key_topic_text:"Marketing Studies is concerned with addressing practical challenges caused in the marketing field including;",key_topics:["Consumption and Consumer Behavior, ","Communication, ","International Marketing","Retailing, ","Trade Marketing, ","Business-to-Business Marketing, ","Market and Marketing Research, ","Pricing, ","New Product Development and more. "],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Kaukab Abid Azhar"],in_board:["Suzana Ruslan","Alhamzah F. Abbas"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the SS@aperier.com"},contact_us:{in_chief:["Kaukab Abid Azhar","kaukababidazhar@gmail.com"],in_managing:["ms@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-5":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Finance Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of finance. Papers must address issues associated with the financial aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"8",publication_acceptance:"4",downloads:"2,000 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of finance issues around the globe. In addition to publishing original research and analyses, Finance Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with finance science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to finance. ",key_topic_text:"sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others;",key_topics:["Finance science is concerned with addressing practical challenges related t","Asset Management","Asset Pricing; Banking (Efficiency, Regulation, Risk Management, Solvency)","Behavioural Finance","Capital Structure; Corporate Finance; Corporate Governance","Derivative Pricing and Hedging","Distribution Forecasting with Financial Applications","Entrepreneurial Finance","Empirical Finance","Financial Economics","Financial Markets (Alternative, Bonds, Currency, Commodity, Derivatives, Equity, Energy, Real Estate)","FinTech","Fund Management","General Equilibrium Models","High-Frequency Trading","Intermediation","International Finance","Hedge Funds","Investments","Liquidity","Market Efficiency","Market Microstructure","Mergers and Acquisitions","Networks","Performance Analysis","Political Risk","Portfolio Optimization","Regulation of Financial Markets and Institutions","Risk Management and Analysis","Systemic Risk","Term Structure Models","Venture Capita"],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Yasean Tahat"],in_board:["Swati Gupta","Prihantini Prihantini"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the fS@aperier.com"},contact_us:{in_chief:["Yasean Tahat","tahat.y@gust.edu.kw"],in_managing:["fs@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-6":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Tourism Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of tourism. Papers must address issues associated with the tourism aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"10",publication_acceptance:"4",downloads:"4,409 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of tourism issues around the globe. In addition to publishing original research and analyses, Tourism Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with tourism science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to tourism.  Its aim is to provide a platform for discussion of theoretical and empirical problems in tourism. Publications from all fields, connected with tourism such as tourism management, tourism marketing, tourism sociology, psychology in tourism, tourism geography, political sciences in tourism, mathematics, tourism statistics, tourism anthropology, culture and tourism, heritage and tourism, national identity and tourism, information technologies in tourism and others are invited.",key_topic_text:"sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others;",key_topics:["Branding and brand management","Participatory, e-commerce, and sharing business models","Operations management","Training and staff development","Networking, partnerships, and collaboration","Gender and identity","Change management","Product and service innovation","Service, delivery, quality, and recovery","Social media marketing and management","Risk, safety, security, and crisis management","Customer motivations, satisfaction, and intentions"],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Ibrahim Suleiman Yahaya"],in_board:["Abdul Muhaimin Misran","Saleh F. A. Khatib"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the TS@aperier.com"},contact_us:{in_chief:["Ibrahim Suleiman Yahaya","iysuleiman@gmail.com"],in_managing:["ts@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}}};const Gj={components:{SectionTitleComponent:Op,JournalListCardComponent:Py,AccordionComponent:p_,AccordionItemComponent:m_},data(){return{studyListPerJournal:[],journalDetails:{},data:!1}},async mounted(){await qt.get(`${Ct.domain}/api/studies-per-journal/`+this.$route.params.id).then(s=>{s=s.data,s.data.length>4?(this.studyListPerJournal.push(s.data[0]),this.studyListPerJournal.push(s.data[1]),this.studyListPerJournal.push(s.data[2]),this.studyListPerJournal.push(s.data[3])):this.studyListPerJournal=s.data}).catch(s=>{console.log(s)}),this.journalDetails=Wj[`journal-${this.$route.params.id}`],this.data=!0},methods:{generateImage(){return"../../Assets/journal_1.png"},gotoSubmitPage(){this.$router.push({name:"Author Submit"})}}},lt=s=>(Rt("data-v-f687b63e"),s=s(),zt(),s),Kj={class:"journal-details"},Yj={class:"container-fluid"},Qj={class:"row py-5 px-3"},Zj={key:0,class:"col-lg-2 d-none d-lg-block"},Jj=lt(()=>d("img",{src:DE,class:"img-fluid",alt:""},null,-1)),Xj=[Jj],eF={key:1,class:"col-lg-2 d-none d-lg-block"},tF=lt(()=>d("img",{src:TE,class:"img-fluid",alt:""},null,-1)),nF=[tF],oF={key:2,class:"col-lg-2 d-none d-lg-block"},iF=lt(()=>d("img",{src:SE,class:"img-fluid",alt:""},null,-1)),sF=[iF],rF={key:3,class:"col-lg-2 d-none d-lg-block"},aF=lt(()=>d("img",{src:IE,class:"img-fluid",alt:""},null,-1)),lF=[aF],cF={key:4,class:"col-lg-2 d-none d-lg-block"},dF=lt(()=>d("img",{src:ME,class:"img-fluid",alt:""},null,-1)),uF=[dF],hF={key:5,class:"col-lg-2 d-none d-lg-block"},fF=lt(()=>d("img",{src:PE,class:"img-fluid",alt:""},null,-1)),pF=[fF],mF={key:6,class:"col-lg-8 col-md-8"},gF={class:"tab-content",id:"myTabContent"},bF={class:"tab-pane fade show active p-3",id:"general-information",role:"tabpanel","aria-labelledby":"general-information-tab"},_F=lt(()=>d("p",{class:"journal-details-title"},"General Information",-1)),wF={class:"journal-details-body"},kF={class:"journal-stats my-5"},vF=lt(()=>d("br",null,null,-1)),yF=lt(()=>d("br",null,null,-1)),AF=lt(()=>d("br",null,null,-1)),CF=lt(()=>d("p",{class:"journal-details-title"},"Aim and Scope",-1)),xF={class:"journal-details-body"},EF=lt(()=>d("br",null,null,-1)),DF=lt(()=>d("br",null,null,-1)),TF=lt(()=>d("strong",null,"Key Topics",-1)),SF=lt(()=>d("br",null,null,-1)),IF=lt(()=>d("br",null,null,-1)),MF=lt(()=>d("strong",null,"Readership",-1)),PF=lt(()=>d("div",{class:"tab-pane fade p-3",id:"indexed",role:"tabpanel","aria-labelledby":"indexed-tab"},[d("p",{class:"journal-details-title"},"Indexing and Abstract"),d("p",{class:"journal-details-body"},[d("ul",null,[d("li",null,"Academic Resource Index"),d("li",null,"Australian Business Deans Council (B)"),d("li",null,"Carleton University journal list (Canada)"),d("li",null,"Excellence in Research for Australia (ERA)"),d("li",null,"Federation of Finnish Learned Societies (JUFO)"),d("li",null,"Journal Guide"),d("li",null,"Microsoft Academic"),d("li",null,"SciLit"),d("li",null,"Scopus"),d("li",null,"World Banking Abstracts"),d("li",null,"British Library"),d("li",null,"Electronic Journals Library (EZB)"),d("li",null,"JournalTOCs"),d("li",null,"Google Scholare "),d("li",null,"Research Gate"),d("li",null,"Scopus (Coming soon)")])])],-1)),NF=lt(()=>d("div",{class:"tab-pane fade p-3",id:"open-access",role:"tabpanel","aria-labelledby":"open-access-tab"},[d("p",{class:"journal-details-title"},"Open Access Statement"),d("p",{class:"journal-details-body"},[H(" Journal is committed to full open access for scholarly publications. All articles published by Sustainability Studies are made immediately available worldwide under an open access license. This means: "),d("br"),H(" everyone has free and unlimited access to the full-text of all articles published in MDPI journals; "),d("br"),H(" All articles are available to all users immediately upon publication (without registration on the site and embargo period). "),d("br"),H(" everyone is free to re-use the published material if proper accreditation/citation of the original publication is given; "),d("br"),H(" open access publication is supported by the authors' institutes or research funding agencies by payment of a comparatively low Article Processing Charge (APC) for accepted articles. "),d("br"),d("br"),H(' By "open access" to this [research] literature, we mean its free availability on the public internet, permitting any users to read, download, copy, distribute, print, search, or link to the full texts of these articles, crawl them for indexing, pass them as data to software, or use them for any other lawful purpose, without financial, legal, or technical barriers other than those inseparable from gaining access to the internet itself. The only constraint on reproduction and distribution and the only role for copyright in this domain should be to give authors control over the integrity of their work and the right to be properly acknowledged and cited. '),d("br"),d("br"),H(" No special permission is required to reuse all or part of article published by Sustainability Studies, including figures and tables. For articles published under an open access Creative Common CC BY license, any part of the article may be reused without permission provided that the original article is clearly cited. Reuse of an article does not imply endorsement by the authors or Aperier. "),d("br"),d("br"),H(" Benefits of the open access are: increased citation and usage; rapid publication; faster impact with permissive licenses; Lower Publishing Costs; copyright retention by the author. "),d("br"),H(" Authors are commited to publish their articles under Creative Commons licenses (CC-BY 4.0). Find detailed information in the Copyright section (Publishing Policy and Ethics). "),d("br"),d("br")])],-1)),BF=lt(()=>d("div",{class:"tab-pane fade p-3",id:"plagiarism",role:"tabpanel","aria-labelledby":"plagiarism-tab"},[d("p",{class:"journal-details-title"},"Plagiarism Statement"),d("div",{class:"journal-details-body"},[d("p",null,"All manuscripts that are being sent for an external peer review, are screened for originality. By submitting their manuscripts to the journal authors are agreeing to any necessary originality checks the manuscript may have to undergo during the publication process. The plagiarism conducted by the editorial office is combined with our knowledgeable reviewers and editors, means it\u2019s increasingly hard for plagiarised work to go unnoticed. There are various forms plagiarism can take."),d("ul",null,[d("li",null,"Re-using parts of a work without attribution - For example, using a figure, table or paragraph without acknowledgement, references or the use of quotation marks. It is your responsibility as the author to obtain the necessary permissions from the copyright holder. "),d("li",null,"Paraphrasing - More than one sentence within a paragraph or section of text has been changed, or sentences have been rearranged, without appropriate attribution. Significant improper paraphrasing without appropriate attribution is treated seriously as verbatim copying. "),d("li",null,"Verbatim copying - An exact copy of, or a significant passage or section of text taken from, another person's work without acknowledgement, references or use of quotation marks."),d("li",null,"Self-plagiarism or text recycling - You are expected to submit original content to Emerald publications. Research should only be repeated if it leads to different or new conclusions, or you want to compare it with new data. If any element of your latest submission has been published previously, you must ensure that the original work is fully referenced and make this clear to the editor or publisher at the point of submission."),d("li",null,"Handling allegations of plagiarism - A plagiarism allegation can have a serious negative effect on a researcher's career. If we are approached by a third party with an allegation of plagiarism, we always seek a response from the original author(s) or copyright holder(s) before we decide on a course of action. We remain unbiased and will not be influenced by other parties. All allegations will be handled in accordance with the COPE (Committee on Publication Ethics) guidelines.")]),d("p",null,[H("We are not obliged to discuss individual cases of alleged plagiarism with third parties, and we reserve the right not to proceed with a case if the complainant presents a false name or affiliation, or acts in an inappropriate or threatening manner towards Emerald editors and staff."),d("br"),d("br"),H("Aperier advocates adherence to the principles of ethics and integrity of science, which is why it has chosen a reliable partner in ensuring the scientific publications quality")])])],-1)),OF={class:"tab-pane fade p-3",id:"editorial",role:"tabpanel","aria-labelledby":"editorial-tab"},LF={class:"row"},RF={class:"col-6"},zF=lt(()=>d("p",{class:"journal-details-title"},"Editorial Board",-1)),jF={class:"journal-details-body"},FF=lt(()=>d("span",null,"Editor-In-Chief",-1)),$F=lt(()=>d("span",null,"Editorial Board",-1)),VF={key:0},UF=lt(()=>d("span",null,"Managing Editor",-1)),HF={class:"col-6"},qF=lt(()=>d("p",{class:"journal-details-title"},"Advisory Board",-1)),WF={class:"journal-details-body"},GF={class:"row my-5"},KF=lt(()=>d("p",{class:"journal-details-title"},"Join Our Board",-1)),YF={class:"journal-details-body"},QF={class:"tab-pane fade p-3",id:"instruction",role:"tabpanel","aria-labelledby":"instruction-tab"},ZF=lt(()=>d("p",{class:"journal-details-title"},"Instructions for Authors",-1)),JF={class:"journal-details-body"},XF=fo("<p data-v-f687b63e>Submission Checklist <br data-v-f687b63e>Please: <br data-v-f687b63e> \u2022 Read the Aims &amp; Scope to gain an overview and assess if your manuscript is suitable for this journal; <br data-v-f687b63e> \u2022 Use the Microsoft Word template to prepare your manuscript; <br data-v-f687b63e> \u2022 Make sure that issues about publication ethics, research ethics, copyright, authorship, figure formats,\xA0data and references format have been appropriately considered; <br data-v-f687b63e> \u2022 Ensure that all authors have approved the content of the submitted manuscript. <br data-v-f687b63e><br data-v-f687b63e><strong data-v-f687b63e>Editorial procedure</strong> <br data-v-f687b63e>This journal follows a double-blind reviewing procedure. This means that the author will remain anonymous to the reviewers throughout peer review. <br data-v-f687b63e><br data-v-f687b63e><strong data-v-f687b63e>Submission</strong> <br data-v-f687b63e>In order to submit your paper, authors are should login and submit the manuscript through Aperier online submission system. Electronic submission substantially reduces the editorial processing and reviewing times and shortens overall publication times. Please follow the hyperlink \u201CSubmit Your Manuscript\u201D on the right and upload all of your manuscript files following the instructions given on the screen </p>",1),e$={class:"row my-5"},t$={class:"col-12"},n$=lt(()=>d("ul",null,[d("li",null," Original Article: This should describe new and/or carefully investigated findings, and research methods should be given in sufficient detail for others to verify the work. The maximum word count is 8000 words, excluding References. "),d("li",null," Review articles consider the implications and lessons to be learned, including the need for future inquiry, from a body of research on any sustainability topic. The maximum word count is 8000 words, excluding References. However, it is acceptable for some articles to exceed this number base on the research nature, such as systematic reviews. "),d("li",null," Short Communication Article: This short communication is suitable for reporting the results of small investigations or giving details of new models, innovative methods or techniques. The style of main sections doesn\u2019t need to conform to that of full-length papers. The maximum word count is 2500 words, excluding References. Articles in this category are reviewed at the discretion of the editor-in-chief.")],-1)),o$=lt(()=>d("p",null,[H("A cover letter can be included with each manuscript submission. It should be concise and explain why the content of the paper is significant, placing the findings in the context of existing work. It should explain why the manuscript fits the scope of the journal. The cover Letter should be inserted in the comment. "),d("br"),H("All cover letters are required to include the statements:")],-1)),i$=lt(()=>d("ul",null,[d("li",null," We confirm that neither the manuscript nor any parts of its content are currently under consideration or published in another journal."),d("li",null,"All authors have approved the manuscript and agree with its submission to (journal name).")],-1)),s$=lt(()=>d("p",null,"Authors wishing to include figures or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) of the material and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors.",-1)),r$=lt(()=>d("ul",null,[d("li",null,[H("Research manuscripts should comprise: "),d("ul",null,[d("li",null,"Front matter: Title, Author list, Affiliations, Abstract, Keywords"),d("li",null,"Research manuscript sections: Introduction, Materials and Methods, Results, Discussion, Conclusions (optional)."),d("li",null,"Back matter: Supplementary Materials, Acknowledgments, Author Contributions, Conflicts of Interest, References.\xA0")])]),d("li",null,"*Follow the Microsoft Word template"),d("li",null,[H("Word Count "),d("ul",null,[d("li",null,"While no maximum length for manuscripts is prescribed, authors are encouraged to write concisely and clearly. As a guide, the maximum word count is 8000 words, excluding References in length.")])]),d("li",null,[H("Language "),d("ul",null,[d("li",null,"Please write your text in good English (American or British usage is accepted, but not a mixture of these). ")])]),d("li",null,[H("Style of Presentation "),d("ul",null,[d("li",null,"All manuscripts must be prepared according to the Aperier submission Template.")])])],-1)),a$=lt(()=>d("p",null,"The manuscript should be arranged as follows:",-1)),l$=lt(()=>d("ul",null,[d("li",null,"Title page (including name(s) of author(s), a concise and informative title, affiliation(s) and address(es) of the author(s), e-mail address, telephone and fax numbers of the corresponding author.)"),d("li",null,"Title: The title of your manuscript should be concise, specific and relevant. It should identify if the study reports (human or animal) trial data, or is a systematic review, meta-analysis or replication study. Please do not include abbreviated or short forms of the title, such as a running title or head. These will be removed by our Editorial Office."),d("li",null,"Author List and Affiliations: Authors' full first and last names must be provided. The initials of any middle names can be added. The Aperier standard format is used for affiliations: complete address information including city, zip code, state/province, and country. At least one author should be designated as corresponding author, and his or her email address and other details should be included at the end of the affiliation section. Please read the Authorship criteria of Aperier publishing policy."),d("li",null,"Abstract - about 200 words for an original article, a review article, and an overview article"),d("li",null,"Up to six keywords")],-1)),c$=lt(()=>d("p",null,[H('Divide your article into clearly defined and numbered sections. Subsections should be numbered 1. (then 1.1., 1.2., ...), 1.1.1., etc. (the abstract is not included in section numbering). Use this numbering also for internal cross-referencing: do not just refer to "the text". Any subsection may be given a brief heading. Each heading should appear on its own separate line.'),d("br"),d("br"),d("strong",null,"1-Introduction"),d("br"),H(" State the objectives of the work and provide an adequate background, avoiding a detailed literature survey or a summary of the results. The introduction should briefly place the study in a broad context and highlight why it is important. It should define the purpose of the work and its significance, including specific hypotheses being tested. The current state of the research field should be reviewed carefully and key publications cited. Please highlight controversial and diverging hypotheses when necessary. Finally, briefly mention the main aim of the work and highlight the main conclusions. Keep the introduction comprehensible to scientists working outside the topic of the paper. * Abbreviations should be defined at first mention and used consistently thereafter."),d("br"),d("br"),d("strong",null,"2-Literature Review"),d("br"),H(" Provide an adequate background with detailed literature survey or a summary of the results of previous studies."),d("br"),d("br"),d("strong",null,"3-Methodology"),d("br"),H(" Provide sufficient detail to allow the work to be reproduced. Methods already published should be indicated by a reference: only relevant modifications should be described."),d("br"),d("br"),d("strong",null,"4-Results"),d("br"),H(" Provide sufficient detail to allow the results to be meaningful and informative. Provide a concise and precise description of the experimental results, their interpretation as well as the experimental conclusions that can be drawn."),d("br"),d("br"),d("strong",null,"5-Discussion"),d("br"),H(" This should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is often appropriate. Avoid extensive citations and discussion of published literature. The findings and their implications should be discussed in the broadest context possible and limitations of the work highlighted. Future research directions may also be mentioned. This section may be combined with Results."),d("br"),d("br"),d("strong",null,"6-Conclusion"),d("br"),H(" The main conclusions of the study may be presented in a short Conclusions section, which may stand alone or form a subsection of a Discussion or Results and Discussion section."),d("br"),d("br"),d("strong",null,"-No Footnotes, but Endnotes Acceptable"),d("br"),H(" Aperier Journals does not accept Footnotes due to technical problems of online publication. Please convert all footnotes to endnotes, otherwise please incorporate all footnotes into text at its best. ")],-1)),d$=lt(()=>d("p",null,[H("Both tables and figures must be placed in the main body of the manuscript, after their citation. Table and figure should be discussed."),d("br"),H(" File for Figures and Schemes should be provided during submission in a single zip archive and at a sufficiently high resolution (minimum 1000 pixels width/height, or a resolution of 300 dpi or higher). Common formats are accepted."),d("br"),H(" All Figures, Schemes and Tables should be inserted into the main text close to their first citation and must be numbered following their number of appearance (Figure 1, Scheme I, Figure 2, Scheme II, Table 1, etc.)."),d("br"),H(" All table columns should have an explanatory heading. To facilitate the copy-editing of larger tables, smaller fonts may be used, but no less than 8 pt. in size. Authors should use the Table option of Microsoft Word to create tables.")],-1)),u$=lt(()=>d("p",null,[H("authors are expected to adhere to the guidelines of APA (American Psychological Association). Text: Citations in the text should follow the referencing style used by the American Psychological Association. You are referred to the Publication Manual of the American Psychological Association, Sixth (6th) or Seventh (7th) Edition. If available, the Digital Object Identifier (DOI) can be added at the end of the reference in question."),d("br"),H(" In the text, references should be cited by author and year (e.g., Khatib, 1994; Modi & B\xF6qrek, 1991; Hammer et al. 1993) and listed in alphabetical order in the reference list. If there is more than one work by the same author or team of authors in the same year, a, b, etc. should be added to the year both in the text and in the list of references.")],-1)),h$=lt(()=>d("ul",null,[d("li",null,"Journal papers: name(s) and initial(s) of all authors; year; full title; journal title; volume number; first and last page numbers. Example: Yahaya, I. S., Amat, A., Maryam, S., Khatib, S. F. A., & Sabo, A. U. (2020). Bibliometric Analysis Trend on Business Model Innovation. Journal of Critical Reviews, 7(09), 2391\u20132407."),d("li",null,"Single contributions in a book: name(s) and initial(s) of all authors; year; title of article; editor(s); title of book; edition; volume number; publisher; place of publication; page numbers Example: Ayama H, & Awass T. (1995). Global sustainability and the role of Asia. In: Sasaki T (ed) Nature and human communities, Emerald, Tokyo, pp 187\u2013216"),d("li",null,"Book: name and initial(s) of all authors; year; title; publisher; place of publication Example: Aisley RG (2020) Ecosystem geography. Wiley, Berlin Heidelberg New York")],-1)),f$=lt(()=>d("ul",null,[d("li",null,"Funding: All sources of funding of the study should be disclosed. Clearly indicate grants that you have received in support of your research work and if you received funds to cover publication costs. Note that some funders will not refund article processing charges (APC) if the funder and grant number are not clearly and correctly identified in the paper. Funding information can be entered separately into the submission system by the authors during submission of their manuscript.")],-1)),p$=lt(()=>d("p",null,"Please add: \u201CThis research received no external funding\u201D or \u201CThis research was funded by [name of funder] grant number [xxx]\u201D and \u201CThe APC was funded by [XXX]\u201D in this section. Check carefully that the details given are accurate and use the standard spelling of funding agency names at https://search.crossref.org/funding, any errors may affect your future funding.",-1)),m$=lt(()=>d("ul",null,[d("li",null,"Acknowledgments: In this section you can acknowledge any support given which is not covered by the author contribution or funding sections. This may include administrative and technical support, or donations in kind (e.g., materials used for experiments). "),d("li",null,"Author Contributions: Each author is expected to have made substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data; or the creation of new software used in the work; or have drafted the work or substantively revised it; AND has approved the submitted version (and version substantially edited by journal staff that involves the author\u2019s contribution to the study); AND agrees to be personally accountable for the author\u2019s own contributions and for ensuring that questions related to the accuracy or integrity of any part of the work, even ones in which the author was not personally involved, are appropriately investigated, resolved, and documented in the literature. For research articles with several authors, a short paragraph specifying their individual contributions must be provided. The following statements should be used;")],-1)),g$=lt(()=>d("p",null,[H('"Conceptualization, X.X. and Y.Y.; Methodology, X.X.; Software, X.X.; Validation, X.X., Y.Y. and Z.Z.; Formal Analysis, X.X.; Investigation, X.X.; Resources, X.X.; Data Curation, X.X.; Writing \u2013 Original Draft Preparation, X.X.; Writing \u2013 Review & Editing, X.X.; Visualization, X.X.; Supervision, X.X.; Project Administration, X.X.; Funding Acquisition, Y.Y.\u201D,'),d("br"),H(' Conflicts of Interest: Authors must identify and declare any personal circumstances or interest that may be perceived as influencing the representation or interpretation of reported research results. If there is no conflict of interest, please state "The authors declare no conflict of interest."')],-1)),b$=lt(()=>d("ul",null,[d("li",null,"The article will be published online after receipt of the corrected proofs. This is the official first publication citable. After release of the printed version, the paper can also be cited by issue and page numbers.")],-1)),_$=lt(()=>d("ul",null,[d("li",null,"During the submission process, please suggest three potential reviewers with the appropriate expertise to review the manuscript. The editors will not necessarily approach these referees. Please provide detailed contact information (address, homepage, phone, e-mail address). The proposed referees should neither be current collaborators of the co-authors nor have published with any of the co-authors of the manuscript within the last five years. Proposed reviewers should be from different institutions to the authors. You may identify appropriate Editorial Board members of the journal as potential reviewers. You may suggest reviewers from among the authors that you frequently cite in your paper.")],-1)),w$=lt(()=>d("ul",null,[d("li",null,"Authors can recommend potential reviewers. Journal editors will check to make sure there are no conflicts of interest before contacting those reviewers, and will not consider those with competing interests. Reviewers are asked to declare any conflicts of interest. Authors can also enter the names of potential peer reviewers they wish to exclude from consideration in the peer review of their manuscript, during the initial submission progress. The editorial team will respect these requests so long as this does not interfere with the objective and thorough assessment of the submission.")],-1)),k$=lt(()=>d("ul",null,[d("li",null,"To facilitate proper peer-reviewing of your manuscript, it is essential that it is submitted in grammatically correct English. If you are not a native English speaker, we recommend that you have your manuscript professionally edited before submission or read by a native English-speaking colleague. This can be carried out by Aperier Language editing service. Professional editing will enable reviewers and future readers to more easily read and assess the content of submitted manuscripts. All accepted manuscripts undergo language editing; however, an additional fee will be charged to authors if very extensive English corrections must be made by the Editorial Office.")],-1)),v$=lt(()=>d("div",{class:"tab-pane fade p-3",id:"accept",role:"tabpanel","aria-labelledby":"accept-tab"},[d("p",{class:"journal-details-title"},"Acceptance rate"),d("div",{class:"journal-details-body"},[d("p",null,[H("Editorial Board members and reviewers constantly work on increasing the efficiency of manuscripts evaluation and selection of the papers that present extreme importance to the scientific field. In this respect, there are factors that result in a rejection of a significant share of papers submitted for publication. The reasons for rejection can be different. Main reasons are listed in Peer Review and Research Misconduct Policy."),d("br"),H(" Aperier emphasizes that in no case place of work or country of residence of the scientist, their racial or religious affiliation can be the reason for rejection. In this respect, we ask the authors to pay attention to necessity of observing publication ethics principles. Submitted manuscripts should be relevant in content and comply with the aim, tasks and specialization of the journal."),d("br"),H(" The language of the manuscript should be professional, and the format should comply with the standards given. Weak English and incompliance with the format standards will not obligatorily lead to rejection, but can delay paper acceptance until the author makes the amendments. The acceptance rate for the journal is calculated as a number of manuscripts accepted for publication compared with total number of manuscripts submitted in one year."),d("br"),d("br"),H(" This rate demonstrates gradual and steady decrease. By now, it is 60%."),d("br"),d("br"),H(" To have a clear vision about period of consideration and process of review of your paper, authors can always contact the Managing Editor. Period of paper consideration is not fixed and can be changed depending on different factors, but our employees will keep you informed about the status of the publishing process. ")]),d("div",{class:"journal-stats my-5"},[d("p",null,[H("First decision (Median) "),d("br"),H(" 10 days ")]),d("p",null,[H("Acceptance to publication "),d("br"),H(" 4 days ")]),d("p",null,[H("Downloads Times "),d("br"),H(" 4,409 (2022) ")])])])],-1)),y$=lt(()=>d("div",{class:"tab-pane fade p-3",id:"article",role:"tabpanel","aria-labelledby":"article-tab"},[d("p",{class:"journal-details-title"},"Article Processing Charge"),d("div",{class:"journal-details-body"},[d("p",null,[H("All articles published in our journals are open access and freely available online, immediately upon publication. This is made possible by an article-processing charge (APCs) that covers the range of publishing services we provide. This includes provision of online tools for editors and authors, article production and hosting, liaison with abstracting and indexing services, and customer services."),d("br"),d("br"),H(" Sustainability studies (SS) is the official journal of Aperier publishing and supported by article processing charges. SS is an open access journal funded by the Aperier and all APCs are covered by the the institution, so there are no publication charges for authors whose work is accepted for publication in Sustainability Studies journal."),d("br"),d("br"),H(" FREE OF CHARGES ")])])],-1)),A$={class:"tab-pane fade p-3",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},C$=lt(()=>d("p",{class:"journal-details-title"},"Contact Us",-1)),x$={class:"journal-details-body"},E$={class:"contact-us-card"},D$=lt(()=>d("br",null,null,-1)),T$=lt(()=>d("br",null,null,-1)),S$=lt(()=>d("br",null,null,-1)),I$=lt(()=>d("hr",null,null,-1)),M$={key:1,class:"current-issue"},P$={class:"row g-3"},N$={class:"d-flex justify-content-end mt-3"},B$={class:"col-lg-2 col-md-4"},O$={class:"nav nav-pills flex-column",id:"myTab",role:"tablist"},L$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link active",id:"general-information-tab","data-bs-toggle":"tab","data-bs-target":"#general-information",type:"button",role:"tab","aria-controls":"general-information","aria-selected":"true"},"General Information")],-1)),R$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"indexed-tab","data-bs-toggle":"tab","data-bs-target":"#indexed",type:"button",role:"tab","aria-controls":"indexed","aria-selected":"false"},"Indexed/Abstracted")],-1)),z$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"open-access-tab","data-bs-toggle":"tab","data-bs-target":"#open-access",type:"button",role:"tab","aria-controls":"open-access","aria-selected":"false"},"Open Access Statement")],-1)),j$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"editorial-tab","data-bs-toggle":"tab","data-bs-target":"#editorial",type:"button",role:"tab","aria-controls":"editorial","aria-selected":"false"},"Editorial Board")],-1)),F$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"plagiarism-tab","data-bs-toggle":"tab","data-bs-target":"#plagiarism",type:"button",role:"tab","aria-controls":"plagiarism","aria-selected":"false"},"Plagiarism Statement")],-1)),$$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"instruction-tab","data-bs-toggle":"tab","data-bs-target":"#instruction",type:"button",role:"tab","aria-controls":"instruction","aria-selected":"false"},"Instruction for Authors")],-1)),V$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"accept-tab","data-bs-toggle":"tab","data-bs-target":"#accept",type:"button",role:"tab","aria-controls":"accept","aria-selected":"false"},"Acceptance Rate")],-1)),U$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"article-tab","data-bs-toggle":"tab","data-bs-target":"#article",type:"button",role:"tab","aria-controls":"article","aria-selected":"false"},"Article Processing Charge")],-1)),H$={class:"nav-item",role:"presentation"},q$={class:"nav-link",id:"archive-tab","data-bs-toggle":"tab","data-bs-target":"#archive",type:"button",role:"tab","aria-controls":"archive","aria-selected":"false"},W$=lt(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"},"Contacts")],-1)),G$={class:"mt-5 submit-script"},K$=lt(()=>d("span",null,"SUBMIT YOUR MANUSCRIPT",-1));function Y$(s,l,h,g,m,y){const w=et("AccordionItemComponent"),v=et("AccordionComponent"),A=et("Strong"),T=et("SectionTitleComponent"),P=et("JournalListCardComponent"),N=et("router-link");return re(),ae("div",Kj,[d("div",Yj,[d("div",Qj,[this.$route.params.id==1?(re(),ae("div",Zj,Xj)):this.$route.params.id==2?(re(),ae("div",eF,nF)):this.$route.params.id==3?(re(),ae("div",oF,sF)):this.$route.params.id==4?(re(),ae("div",rF,lF)):this.$route.params.id==5?(re(),ae("div",cF,uF)):this.$route.params.id==6?(re(),ae("div",hF,pF)):Mi("",!0),m.data?(re(),ae("div",mF,[d("div",gF,[d("div",bF,[_F,d("p",wF,[d("p",null,pe(m.journalDetails.home.general_information),1),d("span",null,"Type: "+pe(m.journalDetails.home.type),1),d("span",null,"ISSN: "+pe(m.journalDetails.home.issn),1),d("span",null,"Copyright Holder: "+pe(m.journalDetails.home.copyright_holder),1),d("span",null,"Language: "+pe(m.journalDetails.home.language),1),d("span",null,"Online date, start \u2013 end: "+pe(m.journalDetails.home.date),1),d("span",null,"Publication Frequency: "+pe(m.journalDetails.home.frequency),1)]),d("div",kF,[d("p",null,[H("First decision (Median) "),vF,H(" "+pe(m.journalDetails.home.first_decision)+" days ",1)]),d("p",null,[H("Acceptance to publication "),yF,H(" "+pe(m.journalDetails.home.publication_acceptance)+" days ",1)]),d("p",null,[H("Downloads Times "),AF,H(" "+pe(m.journalDetails.home.downloads),1)])]),CF,d("p",xF,[d("p",null,pe(m.journalDetails.home.aim_scope),1),EF,DF,TF,d("span",null,pe(m.journalDetails.home.key_topic_text),1),d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.home.key_topics,M=>(re(),ae("li",{key:M},pe(M),1))),128))]),SF,IF,MF,d("p",null,pe(m.journalDetails.home.readership),1)])]),PF,NF,BF,d("div",OF,[d("div",LF,[d("div",RF,[zF,d("div",jF,[FF,d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.editorial_board.in_chief,M=>(re(),ae("li",{key:M},pe(M),1))),128))]),$F,d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.editorial_board.in_board,M=>(re(),ae("li",{key:M},pe(M),1))),128))]),m.journalDetails.editorial_board.in_managing.length>0?(re(),ae("div",VF,[UF,d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.editorial_board.in_managing,M=>(re(),ae("li",{key:M},pe(M),1))),128))])])):Mi("",!0)])]),d("div",HF,[qF,d("div",WF,[d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.editorial_board.advisory,M=>(re(),ae("li",{key:M},pe(M),1))),128))])])])]),d("div",GF,[KF,d("div",YF,[d("p",null,pe(m.journalDetails.editorial_board.join_board),1)])])]),d("div",QF,[ZF,d("div",JF,[XF,d("div",e$,[d("div",t$,[ce(v,null,{default:je(()=>[ce(w,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Type of Articles"},{default:je(()=>[n$]),_:1}),ce(w,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Cover Letter"},{default:je(()=>[o$,i$]),_:1}),ce(w,{heading_id:"headingThree",collapse_id:"collapseThree",title:"Legal requirements"},{default:je(()=>[s$]),_:1}),ce(w,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Manuscript Preparation"},{default:je(()=>[r$]),_:1}),ce(w,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Front Matter"},{default:je(()=>[a$,l$]),_:1}),ce(w,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Research Manuscript Structure"},{default:je(()=>[c$]),_:1}),ce(w,{heading_id:"headingSeven",collapse_id:"collapseSeven",title:"Tables and Figures "},{default:je(()=>[d$]),_:1}),ce(w,{heading_id:"headingEight",collapse_id:"collapseEight",title:"Reference Style Guides "},{default:je(()=>[u$,h$]),_:1}),ce(w,{heading_id:"headingNine",collapse_id:"collapseNine",title:"Back Matter"},{default:je(()=>[f$,p$,m$,g$]),_:1}),ce(w,{heading_id:"headingTen",collapse_id:"collapseTen",title:"Online First"},{default:je(()=>[b$]),_:1}),ce(w,{heading_id:"headingEleven",collapse_id:"collapseEleven",title:"Reviewer Suggestions"},{default:je(()=>[_$]),_:1}),ce(w,{heading_id:"headingTwelve",collapse_id:"collapseTwelve",title:"Reviewers Recommendation"},{default:je(()=>[w$]),_:1}),ce(w,{heading_id:"headingThirteen",collapse_id:"collapseThirteen",title:"English Corrections"},{default:je(()=>[k$]),_:1})]),_:1})])])])]),v$,y$,d("div",A$,[C$,d("div",x$,[d("div",E$,[ce(A,null,{default:je(()=>[H("Editor-In-Chief")]),_:1}),d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.contact_us.in_chief,M=>(re(),ae("li",{key:M},pe(M),1))),128))]),D$,ce(A,null,{default:je(()=>[H("Managing Editor")]),_:1}),d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.contact_us.in_managing,M=>(re(),ae("li",{key:M},pe(M),1))),128))]),T$,ce(A,null,{default:je(()=>[H("Publisher Management ")]),_:1}),d("ul",null,[(re(!0),ae(rt,null,Pt(m.journalDetails.contact_us.in_publisher,M=>(re(),ae("li",{key:M},pe(M),1))),128))]),S$])])])]),I$,m.studyListPerJournal.length>0?(re(),Bi(T,{key:0,title:"Current Issue"})):Mi("",!0),m.studyListPerJournal.length>0?(re(),ae("div",M$,[d("div",P$,[(re(!0),ae(rt,null,Pt(m.studyListPerJournal,M=>(re(),Bi(P,{key:M.id,class:"col-12",title:M.title,author:M.first_name+" "+M.middle_name+" "+M.last_name,tag:M.name,volume:M.volume,issue:M.issue,page:"pp. "+M.page,downloads:"Downloads: "+M.downloads,views:"Views: "+M.views,onClick:j=>this.$router.push({name:"Issue Details",params:{id:M.id}})},null,8,["title","author","tag","volume","issue","page","downloads","views","onClick"]))),128))]),d("div",N$,[d("span",null,[ce(N,{to:{name:"Current Issue Archive",params:{id:this.$route.params.id}},target:"_blank"},{default:je(()=>[H(" More Articles ")]),_:1},8,["to"])])])])):Mi("",!0)])):Mi("",!0),d("div",B$,[d("ul",O$,[L$,R$,z$,j$,F$,$$,V$,U$,d("li",H$,[d("button",q$,[ce(N,{to:{name:"Current Issue Archive",params:{id:this.$route.params.id}},target:"_blank",style:{"text-decoration":"none",color:"inherit"}},{default:je(()=>[H("Archive")]),_:1},8,["to"])])]),W$]),d("div",G$,[K$,d("button",{onClick:l[0]||(l[0]=M=>y.gotoSubmitPage())},"Submit Manuscript")])])])])])}const Q$=ut(Gj,[["render",Y$],["__scopeId","data-v-f687b63e"]]);const Z$={components:{JournalListCardComponent:Py},data(){return{studyList:{}}},async mounted(){await qt.get(`${Ct.domain}/api/studies-per-journal-with-volume/`+this.$route.params.id).then(s=>{this.studyList=s.data.data,this.studyList.volume=this.studyList.volume.reverse()}).catch(s=>{console.log(s)}),console.log(this.studyList[this.studyList.volume[0]])}},s2=s=>(Rt("data-v-d6a5b307"),s=s(),zt(),s),J$={style:{"margin-top":"60px"}},X$={class:"container p-5"},e6={class:"row gy-4"},t6={class:"col-12"},n6=s2(()=>d("p",{class:"issue-title"},"Volumes and Issues",-1)),o6={class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},i6=["id","data-bs-target","aria-controls"],s6={class:"nav-item flex-grow-1 text-end text-secondary align-self-center",role:"presentation"},r6=s2(()=>d("hr",null,null,-1)),a6={class:"tab-content",id:"pills-tabContent"},l6=["id","aria-labelledby"],c6={class:"current-issue"},d6={class:"row g-3"};function u6(s,l,h,g,m,y){const w=et("JournalListCardComponent"),v=et("router-link");return re(),ae("section",J$,[d("div",X$,[d("div",e6,[d("div",t6,[n6,d("ul",o6,[(re(!0),ae(rt,null,Pt(m.studyList.volumeCount,A=>(re(),ae("li",{class:"nav-item",role:"presentation",key:A},[d("button",{class:Oi(["nav-link text-secondary",A===1?"active":""]),id:"pills-tab-"+A,"data-bs-toggle":"pill","data-bs-target":"#pills-"+A,type:"button",role:"tab","aria-controls":"pills-"+A,"aria-selected":"true"},"Volume "+pe(A),11,i6)]))),128)),d("li",s6,pe(m.studyList.numOfArticle)+" Articles ",1)]),r6,d("div",a6,[(re(!0),ae(rt,null,Pt(m.studyList.volumeCount,A=>(re(),ae("div",{key:A,class:Oi([A===1?"active":"","tab-pane fade show p-5"]),id:"pills-"+A,role:"tabpanel","aria-labelledby":"pills-tab-"+A},[d("div",c6,[d("div",d6,[(re(!0),ae(rt,null,Pt(m.studyList[m.studyList.volume[A-1]],T=>(re(),Bi(v,{key:T,to:{name:"Issue Details",params:{id:T.id}},target:"_blank"},{default:je(()=>{var P;return[ce(w,{class:"col-12",title:T.title,author:T.first_name+" "+((P=T.middle_name)!=null?P:"")+" "+T.last_name,tag:T.name,volume:T.volume,issue:T.issue,page:"pp. "+T.page,downloads:"Downloads: "+T.downloads,views:"Views: "+T.views,onClick:N=>this.$router.push({name:"Issue Details",params:{id:T.id}})},null,8,["title","author","tag","volume","issue","page","downloads","views","onClick"])]}),_:2},1032,["to"]))),128))])])],10,l6))),128))])])])])])}const h6=ut(Z$,[["render",u6],["__scopeId","data-v-d6a5b307"]]);const f6={components:{SectionTitleComponent:Op},data(){return{studyDetails:{},study:{},fileUrl:""}},async mounted(){await qt.get(`${Ct.domain}/api/studies-details/`+this.$route.params.id).then(s=>{if(this.studyDetails=s.data.data,this.studyDetails.study_authors=this.studyDetails.study_authors.map(l=>{var y;let h=l.first_name,g=(y=l.middle_name)!=null?y:"",m=l.last_name;return h+" "+g+" "+m}),this.studyDetails.study_authors.length>1){let l=this.studyDetails.study_authors.pop();this.studyDetails.study_authors=this.studyDetails.study_authors.join(", ")+"and "+l}else this.studyDetails.study_authors=this.studyDetails.study_authors.join(", ");this.study=this.studyDetails.study,this.study.volume=this.study.volume.slice(-1),this.fileUrl=Ct.domain+"/storage/public/upload/studies/"+this.study.manuscript_file}).catch(s=>{console.log(s)})},methods:{gotoNewTab(s){window.open(s,"_blank")},downloadURI(){var s=document.createElement("a");s.download=this.study.manuscript_file,s.href=this.fileUrl,s.click()}}},zs=s=>(Rt("data-v-493f0a3c"),s=s(),zt(),s),p6={style:{"margin-top":"60px"}},m6={class:"container"},g6={class:"row p-5 d-flex flex-column gy-4"},b6={class:"issue-title"},_6={class:"stat-box"},w6={class:"stat-box-left"},k6={class:"text-success"},v6={class:"stat-box-left-body"},y6={class:"d-flex flex-column align-items-center"},A6=zs(()=>d("span",{class:"text-secondary"},"Received",-1)),C6={class:"d-flex flex-column align-items-center"},x6=zs(()=>d("span",{class:"text-secondary"},"Revised",-1)),E6={class:"d-flex flex-column align-items-center"},D6=zs(()=>d("span",{class:"text-secondary"},"Accepted",-1)),T6={class:"d-flex flex-column align-items-center"},S6=zs(()=>d("span",{class:"text-secondary"},"First published ",-1)),I6={class:"stat-box-right"},M6={class:"btn-download"},P6=zs(()=>d("i",{class:"fa-solid fa-cloud-arrow-down"},null,-1)),N6={class:"btn-download"},B6=zs(()=>d("i",{class:"fa-solid fa-eye"},null,-1)),O6={key:0},L6={key:1},R6={class:"cite-box mb-5"},z6=zs(()=>d("span",null,"Cite this article",-1)),j6=zs(()=>d("span",{class:"nav-link py-0"},"Abstract",-1)),F6=zs(()=>d("hr",null,null,-1)),$6={class:"abstract"},V6={class:"metadata mt-5"},U6=zs(()=>d("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},[d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link active",id:"pills-keyword-tab","data-bs-toggle":"pill","data-bs-target":"#pills-keyword",type:"button",role:"tab","aria-controls":"pills-keyword","aria-selected":"true"},"Keywords")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-table-tab","data-bs-toggle":"pill","data-bs-target":"#pills-table",type:"button",role:"tab","aria-controls":"pills-table","aria-selected":"false"},"Tables")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-figure-tab","data-bs-toggle":"pill","data-bs-target":"#pills-figure",type:"button",role:"tab","aria-controls":"pills-figure","aria-selected":"false"},"Figure")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-contribution-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contribution",type:"button",role:"tab","aria-controls":"pills-contribution","aria-selected":"false"},"Contribution")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-refs-tab","data-bs-toggle":"pill","data-bs-target":"#pills-refs",type:"button",role:"tab","aria-controls":"pills-refs","aria-selected":"false"},"References")])],-1)),H6=zs(()=>d("hr",null,null,-1)),q6={class:"tab-content",id:"pills-tabContent"},W6={class:"tab-pane fade show active",id:"pills-keyword",role:"tabpanel","aria-labelledby":"pills-keyword-tab"},G6={class:"tab-pane fade",id:"pills-table",role:"tabpanel","aria-labelledby":"pills-table-tab"},K6={class:"tab-pane fade",id:"pills-figure",role:"tabpanel","aria-labelledby":"pills-figure-tab"},Y6={class:"tab-pane fade",id:"pills-contribution",role:"tabpanel","aria-labelledby":"pills-contribution-tab"},Q6={class:"tab-pane fade",id:"pills-refs",role:"tabpanel","aria-labelledby":"pills-refs-tab"},Z6=["onClick"];function J6(s,l,h,g,m,y){const w=et("router-link");return re(),ae("section",p6,[d("div",m6,[d("div",g6,[d("p",b6,pe(m.study.title),1),d("span",null,pe(m.studyDetails.study_authors),1),d("div",_6,[d("div",w6,[d("span",null,[H(pe(new Date(m.study.created_at).getFullYear())+". ",1),d("span",k6,pe(m.study.journal_title)+" "+pe(this.study.volume)+"(1)",1),H(", "+pe(m.study.page),1)]),d("div",v6,[d("p",y6,[A6,d("span",null,pe(m.study.created_at),1)]),d("p",C6,[x6,d("span",null,pe(m.study.updated_at),1)]),d("p",E6,[D6,d("span",null,pe(m.study.accepted_at),1)]),d("p",T6,[S6,d("span",null,pe(m.study.accepted_at),1)])])]),d("div",I6,[d("button",M6,[P6,d("span",{onClick:l[0]||(l[0]=(...v)=>y.downloadURI&&y.downloadURI(...v))},"Download")]),d("button",N6,[B6,m.fileUrl?(re(),ae("span",O6,[ce(w,{target:"_blank",to:{name:"Preview Pdf",params:{url:m.fileUrl}}},{default:je(()=>[H("Preview")]),_:1},8,["to"])])):(re(),ae("span",L6,"Preview"))])])]),d("div",R6,[z6,d("p",null,pe(m.studyDetails.study_authors)+"("+pe(new Date(m.study.created_at).getFullYear())+"). "+pe(m.study.title)+". "+pe(m.study.journal_title)+" "+pe(m.study.volume)+"(1), "+pe(m.study.page)+".",1)]),j6,F6,d("p",$6,pe(m.study.abstract),1),d("section",V6,[U6,H6,d("div",q6,[d("div",W6,[d("ul",null,[(re(!0),ae(rt,null,Pt(m.studyDetails.study_keywords,v=>(re(),ae("li",{key:v},pe(v.keyword_title),1))),128))])]),d("div",G6,[d("ul",null,[(re(!0),ae(rt,null,Pt(m.studyDetails.study_table,(v,A)=>(re(),ae("li",{key:v},"Table "+pe(A+1)+": "+pe(v.table_title),1))),128))])]),d("div",K6,[d("ul",null,[(re(!0),ae(rt,null,Pt(m.studyDetails.study_figure,(v,A)=>(re(),ae("li",{key:v},"Figure "+pe(A+1)+": "+pe(v.figure_title),1))),128))])]),d("div",Y6,[d("ul",null,[(re(!0),ae(rt,null,Pt(m.studyDetails.study_contribution,(v,A)=>(re(),ae("li",{key:v},pe(v.contribution_title),1))),128))])]),d("div",Q6,[d("ul",null,[(re(!0),ae(rt,null,Pt(m.studyDetails.study_reference,v=>(re(),ae("li",{key:v},[H(pe(v.reference_title)+" ",1),d("i",{class:"fa-solid fa-link text-primary",style:{cursor:"pointer"},onClick:A=>y.gotoNewTab(v.reference_url)},null,8,Z6)]))),128))])])])])])])])}const X6=ut(f6,[["render",J6],["__scopeId","data-v-493f0a3c"]]);const e7={data(){return{formData:{email:"",password:""}}},methods:{async handleForm(){await qt.post(`${Ct.domain}/api/login`,this.formData).then(s=>{var l;if(s.data.success){console.log(s),this.$swal({text:"Login successfully",icon:"success"}),this.formData={email:"",password:""},localStorage.setItem("userEmail",s.data.data.email);let h=(l=s.data.data.middle_name)!=null?l:"";localStorage.setItem("userName",s.data.data.first_name+" "+h+" "+s.data.data.last_name),localStorage.setItem("isAdmin",!!s.data.data.is_admin),s.data.data.is_admin?this.$router.push({name:"Admin Dashboard"}):this.$router.push({name:"Author Dashboard"})}else this.$swal({text:s.data.message,icon:"error"})}).catch(s=>{console.log(s)})}}},Ou=s=>(Rt("data-v-f276b2f9"),s=s(),zt(),s),t7={style:{"margin-top":"60px"}},n7={class:"container p-5"},o7={class:"row gy-2"},i7=Ou(()=>d("div",{class:"col-12 form-title"},[d("span",null,"Aperier"),d("span",null,"Login System")],-1)),s7={class:"col-12 p-md-5 p-1"},r7={class:"col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 login-form"},a7=Ou(()=>d("div",{class:"form-header"},[d("p",{class:"pt-3"},"Login to Website"),d("div",{class:"logo-background"}),d("img",{src:Pp,alt:"",class:"bird-img"})],-1)),l7={class:"form-body"},c7={class:"form-left h-100"},d7={action:"",class:"row g-4"},u7={class:"col-12"},h7={class:"input-group"},f7=Ou(()=>d("div",{class:"input-group-text"},[d("i",{class:"fa-solid fa-envelope"})],-1)),p7={class:"col-12"},m7={class:"input-group"},g7=Ou(()=>d("div",{class:"input-group-text"},[d("i",{class:"fa-solid fa-lock"})],-1)),b7={class:"align-self-end mt-2 text-white"},_7=Ou(()=>d("button",{type:"submit",class:"btn-login"},"Login",-1)),w7={class:"align-self-end mt-3 mb-0 text-white"},k7=Ou(()=>d("br",null,null,-1));function v7(s,l,h,g,m,y){const w=et("router-link");return re(),ae("section",t7,[d("div",n7,[d("div",o7,[i7,d("div",s7,[d("div",r7,[a7,d("div",l7,[d("form",{action:"",method:"post",onSubmit:l[2]||(l[2]=kr(v=>y.handleForm(),["prevent"]))},[d("div",c7,[d("form",d7,[d("div",u7,[d("div",h7,[f7,Pe(d("input",{type:"email",class:"form-control",placeholder:"Enter Username","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.email=v)},null,512),[[Xe,m.formData.email]])])]),d("div",p7,[d("div",m7,[g7,Pe(d("input",{type:"password",class:"form-control",placeholder:"Enter Password","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.password=v)},null,512),[[Xe,m.formData.password]])])])])]),d("p",b7,[ce(w,{to:{name:"Forget Password"},style:{"text-decoration":"none",color:"unset"}},{default:je(()=>[H("Forgot Password?")]),_:1})]),_7,d("p",w7,[H("Don\u2019t have an account? "),k7,ce(w,{to:{name:"Sign Up"},style:{"text-decoration":"none",color:"unset"}},{default:je(()=>[H("Create a Free Account")]),_:1})])],32)])])])])])])}const y7=ut(e7,[["render",v7],["__scopeId","data-v-f276b2f9"]]);const A7={data(){return{formData:{prefix:"Dr.",first_name:"",middle_name:"",last_name:"",degree:"",email:"",phone:"",orchid:"",department:"",institution:"",city:"",country:"",areaOfExpertise:[],password:"",receive_reviews_request:!1,join_editorial_team:!1,privacy_acknowledgement:!1}}},methods:{async handleForm(){await qt.post(`${Ct.domain}/api/sign-up`,this.formData).then(s=>{s.data.success?(this.$swal({text:"User added  successfully",icon:"success"}),this.formData={prefix:"Dr.",first_name:"",middle_name:"",last_name:"",degree:"",email:"",phone:"",orchid:"",department:"",institution:"",city:"",country:"",areaOfExpertise:[],password:"",receive_reviews_request:!1,join_editorial_team:!1,privacy_acknowledgement:!1},this.$router.push({name:"Sign Up Success"})):this.$swal({text:s.data.message,icon:"error"})}).catch(s=>{console.log(s)})}}},Tn=s=>(Rt("data-v-f00f827e"),s=s(),zt(),s),C7={style:{"margin-top":"60px"}},x7={class:"container p-lg-5 p-3"},E7={class:"row gy-2"},D7=Tn(()=>d("div",{class:"col-12 form-title"},[d("span",null,"Aperier"),d("span",null,"Submission System")],-1)),T7={class:"col-12 bg-custom-gray"},S7={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},I7={class:"custom-form-group"},M7=Tn(()=>d("span",null,[H("Prefix"),d("span",{class:"text-danger"},"*")],-1)),P7=fo('<option value="Dr." data-v-f00f827e>Dr.</option><option value="Mr." data-v-f00f827e>Mr.</option><option value="Mrs." data-v-f00f827e>Mrs.</option><option value="Prof." data-v-f00f827e>Prof.</option><option value="Assoc Prof." data-v-f00f827e>Assoc Prof.</option>',5),N7=[P7],B7={class:"custom-form-group"},O7=Tn(()=>d("span",null,[H("First (Given) Name:"),d("span",{class:"text-danger"},"*")],-1)),L7={class:"custom-form-group"},R7=Tn(()=>d("span",null,"Middle Name:",-1)),z7={class:"custom-form-group"},j7=Tn(()=>d("span",null,[H("Last (Family) Name:"),d("span",{class:"text-danger"},"*")],-1)),F7={class:"custom-form-group"},$7=Tn(()=>d("span",null,"Degree:",-1)),V7={class:"col-12"},U7={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},H7={class:"custom-form-group"},q7=Tn(()=>d("span",null,[H("Primary E-Mail:"),d("span",{class:"text-danger"},"*")],-1)),W7=Tn(()=>d("div",{class:"custom-form-group"},[d("span",null,[H("Primary E-Mail (again):"),d("span",{class:"text-danger"},"*")]),d("input",{type:"email",class:"custom-input",required:""})],-1)),G7={class:"custom-form-group"},K7=Tn(()=>d("span",null,"Phone:",-1)),Y7={class:"custom-form-group"},Q7=Tn(()=>d("span",null,"ORCID:",-1)),Z7={class:"col-12 bg-custom-gray"},J7={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},X7={class:"custom-form-group"},e9=Tn(()=>d("span",null,"Department:",-1)),t9={class:"custom-form-group"},n9=Tn(()=>d("span",null,[H("Institution:"),d("span",{class:"text-danger"},"*")],-1)),o9={class:"custom-form-group"},i9=Tn(()=>d("span",null,[H("City:"),d("span",{class:"text-danger"},"*")],-1)),s9={class:"custom-form-group"},r9=Tn(()=>d("span",null,[H("Country:"),d("span",{class:"text-danger"},"*")],-1)),a9={class:"col-12"},l9={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},c9={class:"custom-form-group"},d9=Tn(()=>d("span",null,"Areas of Expertise:",-1)),u9={class:"w-50"},h9={class:"d-flex mb-3",style:{gap:"10px"}},f9=Tn(()=>d("span",null,[H("(1)"),d("span",{class:"text-danger"},"*")],-1)),p9={class:"d-flex mb-3",style:{gap:"10px"}},m9=Tn(()=>d("span",null,[H("(2)"),d("span",{class:"text-danger"},"*")],-1)),g9={class:"d-flex mb-3",style:{gap:"10px"}},b9=Tn(()=>d("span",null,"(3) \xA0",-1)),_9={class:"d-flex mb-3",style:{gap:"10px"}},w9=Tn(()=>d("span",null,"(4) \xA0",-1)),k9={class:"d-flex mb-3",style:{gap:"10px"}},v9=Tn(()=>d("span",null,"(5) \xA0",-1)),y9={class:"d-flex mb-3",style:{gap:"10px"}},A9=Tn(()=>d("span",null,"(6) \xA0",-1)),C9={class:"col-12 bg-custom-gray"},x9={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},E9={class:"custom-form-group"},D9=Tn(()=>d("span",null,[H("Password:"),d("span",{class:"text-danger"},"*")],-1)),T9=Tn(()=>d("div",{class:"custom-form-group"},[d("span",null,[H("Confirm Password:"),d("span",{class:"text-danger"},"*")]),d("input",{type:"password",class:"custom-input",required:""})],-1)),S9={class:"col-12"},I9={class:"col-6 offset-3 p-4"},M9={class:"form-check mb-2"},P9=Tn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault"}," Are you willing to receive reviews request from Aperier Journals. ",-1)),N9={class:"form-check"},B9=Tn(()=>d("label",{class:"form-check-label",for:"flexCheckChecked"}," Are you willing to join editorial team of relevant Aperier Journal. ",-1)),O9={class:"col-12"},L9={class:"privacy"},R9=Tn(()=>d("p",null,"Privacy Acknowledgement",-1)),z9=Tn(()=>d("p",null,"To ensure you are properly informed of your privacy rights while using this website, we ask that you review and acknowledge the relevant privacy policies linked below. Aperier\u2019s Privacy Policy ",-1)),j9={class:"form-check"},F9=Tn(()=>d("label",{class:"form-check-label",for:"flexCheckCheckedNot"}," Yes, I have read and now acknowledge the linked privacy policies. ",-1)),$9=Tn(()=>d("div",{class:"col-12 text-end mt-4"},[d("button",{type:"submit",class:"btn-register"},"Register")],-1));function V9(s,l,h,g,m,y){return re(),ae("section",C7,[d("div",x7,[d("div",E7,[D7,d("form",{action:"#",method:"post",onSubmit:l[22]||(l[22]=kr(w=>y.handleForm(),["prevent"]))},[d("div",T7,[d("div",S7,[d("div",I7,[M7,Pe(d("select",{name:"prefix",class:"w-50",id:"","onUpdate:modelValue":l[0]||(l[0]=w=>m.formData.prefix=w),required:""},N7,512),[[_i,m.formData.prefix]])]),d("div",B7,[O7,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[1]||(l[1]=w=>m.formData.first_name=w),required:""},null,512),[[Xe,m.formData.first_name]])]),d("div",L7,[R7,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[2]||(l[2]=w=>m.formData.middle_name=w)},null,512),[[Xe,m.formData.middle_name]])]),d("div",z7,[j7,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[3]||(l[3]=w=>m.formData.last_name=w),required:""},null,512),[[Xe,m.formData.last_name]])]),d("div",F7,[$7,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[4]||(l[4]=w=>m.formData.degree=w)},null,512),[[Xe,m.formData.degree]])])])]),d("div",V7,[d("div",U7,[d("div",H7,[q7,Pe(d("input",{type:"email",class:"custom-input","onUpdate:modelValue":l[5]||(l[5]=w=>m.formData.email=w),required:""},null,512),[[Xe,m.formData.email]])]),W7,d("div",G7,[K7,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[6]||(l[6]=w=>m.formData.phone=w)},null,512),[[Xe,m.formData.phone]])]),d("div",Y7,[Q7,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[7]||(l[7]=w=>m.formData.orchid=w)},null,512),[[Xe,m.formData.orchid]])])])]),d("div",Z7,[d("div",J7,[d("div",X7,[e9,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[8]||(l[8]=w=>m.formData.department=w)},null,512),[[Xe,m.formData.department]])]),d("div",t9,[n9,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[9]||(l[9]=w=>m.formData.institution=w),required:""},null,512),[[Xe,m.formData.institution]])]),d("div",o9,[i9,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[10]||(l[10]=w=>m.formData.city=w),required:""},null,512),[[Xe,m.formData.city]])]),d("div",s9,[r9,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[11]||(l[11]=w=>m.formData.country=w),required:""},null,512),[[Xe,m.formData.country]])])])]),d("div",a9,[d("div",l9,[d("div",c9,[d9,d("div",u9,[d("div",h9,[f9,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[12]||(l[12]=w=>m.formData.areaOfExpertise[0]=w),required:""},null,512),[[Xe,m.formData.areaOfExpertise[0]]])]),d("div",p9,[m9,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[13]||(l[13]=w=>m.formData.areaOfExpertise[1]=w),required:""},null,512),[[Xe,m.formData.areaOfExpertise[1]]])]),d("div",g9,[b9,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[14]||(l[14]=w=>m.formData.areaOfExpertise[2]=w)},null,512),[[Xe,m.formData.areaOfExpertise[2]]])]),d("div",_9,[w9,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[15]||(l[15]=w=>m.formData.areaOfExpertise[3]=w)},null,512),[[Xe,m.formData.areaOfExpertise[3]]])]),d("div",k9,[v9,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[16]||(l[16]=w=>m.formData.areaOfExpertise[4]=w)},null,512),[[Xe,m.formData.areaOfExpertise[4]]])]),d("div",y9,[A9,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[17]||(l[17]=w=>m.formData.areaOfExpertise[5]=w)},null,512),[[Xe,m.formData.areaOfExpertise[5]]])])])])])]),d("div",C9,[d("div",x9,[d("div",E9,[D9,Pe(d("input",{type:"password",class:"custom-input","onUpdate:modelValue":l[18]||(l[18]=w=>m.formData.password=w),required:""},null,512),[[Xe,m.formData.password]])]),T9])]),d("div",S9,[d("div",I9,[d("div",M9,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[19]||(l[19]=w=>m.formData.receive_reviews_request=w)},null,512),[[io,m.formData.receive_reviews_request]]),P9]),d("div",N9,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":l[20]||(l[20]=w=>m.formData.join_editorial_team=w)},null,512),[[io,m.formData.join_editorial_team]]),B9])])]),d("div",O9,[d("div",L9,[R9,z9,d("div",j9,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckCheckedNot","onUpdate:modelValue":l[21]||(l[21]=w=>m.formData.privacy_acknowledgement=w)},null,512),[[io,m.formData.privacy_acknowledgement]]),F9])])]),$9],32)])])])}const U9=ut(A7,[["render",V9],["__scopeId","data-v-f00f827e"]]);const H9={methods:{}},r2=s=>(Rt("data-v-ed23026f"),s=s(),zt(),s),q9={style:{"margin-top":"60px",height:"84vh"}},W9={class:"container p-5"},G9={class:"row gy-2"},K9=r2(()=>d("div",{class:"col-12 form-title"},[d("span",null,"Aperier"),d("span",null,"Submission System")],-1)),Y9={class:"col-12"},Q9={class:"col-12 bg-custom-gray p-5 d-flex flex-column justify-content-center align-items-center"},Z9=r2(()=>d("p",null,"You have successfully created an account.",-1));function J9(s,l,h,g,m,y){const w=et("router-link");return re(),ae("section",q9,[d("div",W9,[d("div",G9,[K9,d("div",Y9,[d("div",Q9,[Z9,d("p",null,[H("You may now "),ce(w,{to:{name:"Login"}},{default:je(()=>[H("log in.")]),_:1})])])])])])])}const X9=ut(H9,[["render",J9],["__scopeId","data-v-ed23026f"]]);const e8={data(){return{studyList:{}}},async mounted(){let s=localStorage.getItem("userEmail");this.studyList=(await qt.get(`${Ct.domain}/api/all-studies?email=${s}`)).data.data},methods:{badgeColor(s){switch(s){case"Published":case"Accepted":return"badge bg-success";case"With Editor":return"badge bg-info";case"Archived":case"In Review":return"badge bg-warning";case"Revision Required":return"badge bg-danger"}}}},t8=s=>(Rt("data-v-f8275589"),s=s(),zt(),s),n8={class:"content-wrapper"},o8={class:"content"},i8={class:"container-fluid"},s8={class:"row mx-4"},r8={class:"card col-12"},a8=fo('<div class="card-header" data-v-f8275589><h3 class="card-title" data-v-f8275589>All Issues</h3><div class="card-tools" data-v-f8275589><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-f8275589><i class="fas fa-minus" data-v-f8275589></i></button></div></div>',1),l8={class:"card-body"},c8={class:"float-right my-2 mb-4"},d8={id:"example2",class:"table table-bordered table-striped table-head-fixed"},u8=t8(()=>d("thead",null,[d("tr",null,[d("th",null,"ID"),d("th",{width:"500px"},"Title"),d("th",null,"Status"),d("th",null,"Date"),d("th",null,"Action")])],-1)),h8={key:0},f8={key:1};function p8(s,l,h,g,m,y){const w=et("ContentHeader"),v=et("router-link");return re(),ae("div",n8,[ce(w,{title:"Author Dashboard"}),d("section",o8,[d("div",i8,[d("div",s8,[d("div",r8,[a8,d("div",l8,[d("div",c8,[ce(v,{to:{name:"Author Submit"},class:"btn-register"},{default:je(()=>[H("New Submission ")]),_:1})]),d("table",d8,[u8,d("tbody",null,[(re(!0),ae(rt,null,Pt(m.studyList,A=>(re(),ae("tr",{key:A},[d("td",null,"CGJ-"+pe(A.id),1),d("td",null,pe(A.title),1),d("td",null,[d("span",{class:Oi(y.badgeColor(A.name))},pe(A.name),3)]),d("td",null,pe(A.created_at),1),A.name==="Revision Required"?(re(),ae("td",h8,[ce(v,{to:{name:"Issue Details Edit",params:{id:A.id}},target:"_blank"},{default:je(()=>[H("View")]),_:2},1032,["to"])])):(re(),ae("td",f8,[ce(v,{to:{name:"Issue Details View",params:{id:A.id}},target:"_blank"},{default:je(()=>[H("View")]),_:2},1032,["to"])]))]))),128))])])])])])])])])}const m8=ut(e8,[["render",p8],["__scopeId","data-v-f8275589"]]);const g8={components:{AccordionComponent:p_,AccordionItemComponent:m_}},yo=s=>(Rt("data-v-66d15a21"),s=s(),zt(),s),b8={class:"content-wrapper"},_8={class:"content"},w8={class:"container-fluid"},k8={class:"row mx-4"},v8={class:"card col-12"},y8=fo('<div class="card-header" data-v-66d15a21><h3 class="card-title" data-v-66d15a21>Instruction to author</h3><div class="card-tools" data-v-66d15a21><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-66d15a21><i class="fas fa-minus" data-v-66d15a21></i></button></div></div>',1),A8={class:"card-body p-5"},C8={class:"journal-details-body"},x8=fo("<p data-v-66d15a21>Submission Checklist <br data-v-66d15a21>Please: <br data-v-66d15a21> \u2022 Read the Aims &amp; Scope to gain an overview and assess if your manuscript is suitable for this journal; <br data-v-66d15a21> \u2022 Use the Microsoft Word template to prepare your manuscript; <br data-v-66d15a21> \u2022 Make sure that issues about publication ethics, research ethics, copyright, authorship, figure formats,\xA0data and references format have been appropriately considered; <br data-v-66d15a21> \u2022 Ensure that all authors have approved the content of the submitted manuscript. <br data-v-66d15a21><br data-v-66d15a21><strong data-v-66d15a21>Editorial procedure</strong> <br data-v-66d15a21>This journal follows a double-blind reviewing procedure. This means that the author will remain anonymous to the reviewers throughout peer review. <br data-v-66d15a21><br data-v-66d15a21><strong data-v-66d15a21>Submission</strong> <br data-v-66d15a21>In order to submit your paper, authors are should login and submit the manuscript through Aperier online submission system. Electronic submission substantially reduces the editorial processing and reviewing times and shortens overall publication times. Please follow the hyperlink \u201CSubmit Your Manuscript\u201D on the right and upload all of your manuscript files following the instructions given on the screen </p>",1),E8={class:"row my-5"},D8={class:"col-12"},T8=yo(()=>d("ul",null,[d("li",null," Original Article: This should describe new and/or carefully investigated findings, and research methods should be given in sufficient detail for others to verify the work. The maximum word count is 8000 words, excluding References. "),d("li",null," Review articles consider the implications and lessons to be learned, including the need for future inquiry, from a body of research on any sustainability topic. The maximum word count is 8000 words, excluding References. However, it is acceptable for some articles to exceed this number base on the research nature, such as systematic reviews. "),d("li",null," Short Communication Article: This short communication is suitable for reporting the results of small investigations or giving details of new models, innovative methods or techniques. The style of main sections doesn\u2019t need to conform to that of full-length papers. The maximum word count is 2500 words, excluding References. Articles in this category are reviewed at the discretion of the editor-in-chief.")],-1)),S8=yo(()=>d("p",null,[H("A cover letter can be included with each manuscript submission. It should be concise and explain why the content of the paper is significant, placing the findings in the context of existing work. It should explain why the manuscript fits the scope of the journal. The cover Letter should be inserted in the comment. "),d("br"),H("All cover letters are required to include the statements:")],-1)),I8=yo(()=>d("ul",null,[d("li",null," We confirm that neither the manuscript nor any parts of its content are currently under consideration or published in another journal."),d("li",null,"All authors have approved the manuscript and agree with its submission to (journal name).")],-1)),M8=yo(()=>d("p",null,"Authors wishing to include figures or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) of the material and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors.",-1)),P8=yo(()=>d("ul",null,[d("li",null,[H("Research manuscripts should comprise: "),d("ul",null,[d("li",null,"Front matter: Title, Author list, Affiliations, Abstract, Keywords"),d("li",null,"Research manuscript sections: Introduction, Materials and Methods, Results, Discussion, Conclusions (optional)."),d("li",null,"Back matter: Supplementary Materials, Acknowledgments, Author Contributions, Conflicts of Interest, References.\xA0")])]),d("li",null,"*Follow the Microsoft Word template"),d("li",null,[H("Word Count "),d("ul",null,[d("li",null,"While no maximum length for manuscripts is prescribed, authors are encouraged to write concisely and clearly. As a guide, the maximum word count is 8000 words, excluding References in length.")])]),d("li",null,[H("Language "),d("ul",null,[d("li",null,"Please write your text in good English (American or British usage is accepted, but not a mixture of these). ")])]),d("li",null,[H("Style of Presentation "),d("ul",null,[d("li",null,"All manuscripts must be prepared according to the Aperier submission Template.")])])],-1)),N8=yo(()=>d("p",null,"The manuscript should be arranged as follows:",-1)),B8=yo(()=>d("ul",null,[d("li",null,"Title page (including name(s) of author(s), a concise and informative title, affiliation(s) and address(es) of the author(s), e-mail address, telephone and fax numbers of the corresponding author.)"),d("li",null,"Title: The title of your manuscript should be concise, specific and relevant. It should identify if the study reports (human or animal) trial data, or is a systematic review, meta-analysis or replication study. Please do not include abbreviated or short forms of the title, such as a running title or head. These will be removed by our Editorial Office."),d("li",null,"Author List and Affiliations: Authors' full first and last names must be provided. The initials of any middle names can be added. The Aperier standard format is used for affiliations: complete address information including city, zip code, state/province, and country. At least one author should be designated as corresponding author, and his or her email address and other details should be included at the end of the affiliation section. Please read the Authorship criteria of Aperier publishing policy."),d("li",null,"Abstract - about 200 words for an original article, a review article, and an overview article"),d("li",null,"Up to six keywords")],-1)),O8=yo(()=>d("p",null,[H('Divide your article into clearly defined and numbered sections. Subsections should be numbered 1. (then 1.1., 1.2., ...), 1.1.1., etc. (the abstract is not included in section numbering). Use this numbering also for internal cross-referencing: do not just refer to "the text". Any subsection may be given a brief heading. Each heading should appear on its own separate line.'),d("br"),d("br"),d("strong",null,"1-Introduction"),d("br"),H(" State the objectives of the work and provide an adequate background, avoiding a detailed literature survey or a summary of the results. The introduction should briefly place the study in a broad context and highlight why it is important. It should define the purpose of the work and its significance, including specific hypotheses being tested. The current state of the research field should be reviewed carefully and key publications cited. Please highlight controversial and diverging hypotheses when necessary. Finally, briefly mention the main aim of the work and highlight the main conclusions. Keep the introduction comprehensible to scientists working outside the topic of the paper. * Abbreviations should be defined at first mention and used consistently thereafter."),d("br"),d("br"),d("strong",null,"2-Literature Review"),d("br"),H(" Provide an adequate background with detailed literature survey or a summary of the results of previous studies."),d("br"),d("br"),d("strong",null,"3-Methodology"),d("br"),H(" Provide sufficient detail to allow the work to be reproduced. Methods already published should be indicated by a reference: only relevant modifications should be described."),d("br"),d("br"),d("strong",null,"4-Results"),d("br"),H(" Provide sufficient detail to allow the results to be meaningful and informative. Provide a concise and precise description of the experimental results, their interpretation as well as the experimental conclusions that can be drawn."),d("br"),d("br"),d("strong",null,"5-Discussion"),d("br"),H(" This should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is often appropriate. Avoid extensive citations and discussion of published literature. The findings and their implications should be discussed in the broadest context possible and limitations of the work highlighted. Future research directions may also be mentioned. This section may be combined with Results."),d("br"),d("br"),d("strong",null,"6-Conclusion"),d("br"),H(" The main conclusions of the study may be presented in a short Conclusions section, which may stand alone or form a subsection of a Discussion or Results and Discussion section."),d("br"),d("br"),d("strong",null,"-No Footnotes, but Endnotes Acceptable"),d("br"),H(" Aperier Journals does not accept Footnotes due to technical problems of online publication. Please convert all footnotes to endnotes, otherwise please incorporate all footnotes into text at its best. ")],-1)),L8=yo(()=>d("p",null,[H("Both tables and figures must be placed in the main body of the manuscript, after their citation. Table and figure should be discussed."),d("br"),H(" File for Figures and Schemes should be provided during submission in a single zip archive and at a sufficiently high resolution (minimum 1000 pixels width/height, or a resolution of 300 dpi or higher). Common formats are accepted."),d("br"),H(" All Figures, Schemes and Tables should be inserted into the main text close to their first citation and must be numbered following their number of appearance (Figure 1, Scheme I, Figure 2, Scheme II, Table 1, etc.)."),d("br"),H(" All table columns should have an explanatory heading. To facilitate the copy-editing of larger tables, smaller fonts may be used, but no less than 8 pt. in size. Authors should use the Table option of Microsoft Word to create tables.")],-1)),R8=yo(()=>d("p",null,[H("authors are expected to adhere to the guidelines of APA (American Psychological Association). Text: Citations in the text should follow the referencing style used by the American Psychological Association. You are referred to the Publication Manual of the American Psychological Association, Sixth (6th) or Seventh (7th) Edition. If available, the Digital Object Identifier (DOI) can be added at the end of the reference in question."),d("br"),H(" In the text, references should be cited by author and year (e.g., Khatib, 1994; Modi & B\xF6qrek, 1991; Hammer et al. 1993) and listed in alphabetical order in the reference list. If there is more than one work by the same author or team of authors in the same year, a, b, etc. should be added to the year both in the text and in the list of references.")],-1)),z8=yo(()=>d("ul",null,[d("li",null,"Journal papers: name(s) and initial(s) of all authors; year; full title; journal title; volume number; first and last page numbers. Example: Yahaya, I. S., Amat, A., Maryam, S., Khatib, S. F. A., & Sabo, A. U. (2020). Bibliometric Analysis Trend on Business Model Innovation. Journal of Critical Reviews, 7(09), 2391\u20132407."),d("li",null,"Single contributions in a book: name(s) and initial(s) of all authors; year; title of article; editor(s); title of book; edition; volume number; publisher; place of publication; page numbers Example: Ayama H, & Awass T. (1995). Global sustainability and the role of Asia. In: Sasaki T (ed) Nature and human communities, Emerald, Tokyo, pp 187\u2013216"),d("li",null,"Book: name and initial(s) of all authors; year; title; publisher; place of publication Example: Aisley RG (2020) Ecosystem geography. Wiley, Berlin Heidelberg New York")],-1)),j8=yo(()=>d("ul",null,[d("li",null,"Funding: All sources of funding of the study should be disclosed. Clearly indicate grants that you have received in support of your research work and if you received funds to cover publication costs. Note that some funders will not refund article processing charges (APC) if the funder and grant number are not clearly and correctly identified in the paper. Funding information can be entered separately into the submission system by the authors during submission of their manuscript.")],-1)),F8=yo(()=>d("p",null,"Please add: \u201CThis research received no external funding\u201D or \u201CThis research was funded by [name of funder] grant number [xxx]\u201D and \u201CThe APC was funded by [XXX]\u201D in this section. Check carefully that the details given are accurate and use the standard spelling of funding agency names at https://search.crossref.org/funding, any errors may affect your future funding.",-1)),$8=yo(()=>d("ul",null,[d("li",null,"Acknowledgments: In this section you can acknowledge any support given which is not covered by the author contribution or funding sections. This may include administrative and technical support, or donations in kind (e.g., materials used for experiments). "),d("li",null,"Author Contributions: Each author is expected to have made substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data; or the creation of new software used in the work; or have drafted the work or substantively revised it; AND has approved the submitted version (and version substantially edited by journal staff that involves the author\u2019s contribution to the study); AND agrees to be personally accountable for the author\u2019s own contributions and for ensuring that questions related to the accuracy or integrity of any part of the work, even ones in which the author was not personally involved, are appropriately investigated, resolved, and documented in the literature. For research articles with several authors, a short paragraph specifying their individual contributions must be provided. The following statements should be used;")],-1)),V8=yo(()=>d("p",null,[H('"Conceptualization, X.X. and Y.Y.; Methodology, X.X.; Software, X.X.; Validation, X.X., Y.Y. and Z.Z.; Formal Analysis, X.X.; Investigation, X.X.; Resources, X.X.; Data Curation, X.X.; Writing \u2013 Original Draft Preparation, X.X.; Writing \u2013 Review & Editing, X.X.; Visualization, X.X.; Supervision, X.X.; Project Administration, X.X.; Funding Acquisition, Y.Y.\u201D,'),d("br"),H(' Conflicts of Interest: Authors must identify and declare any personal circumstances or interest that may be perceived as influencing the representation or interpretation of reported research results. If there is no conflict of interest, please state "The authors declare no conflict of interest."')],-1)),U8=yo(()=>d("ul",null,[d("li",null,"The article will be published online after receipt of the corrected proofs. This is the official first publication citable. After release of the printed version, the paper can also be cited by issue and page numbers.")],-1)),H8=yo(()=>d("ul",null,[d("li",null,"During the submission process, please suggest three potential reviewers with the appropriate expertise to review the manuscript. The editors will not necessarily approach these referees. Please provide detailed contact information (address, homepage, phone, e-mail address). The proposed referees should neither be current collaborators of the co-authors nor have published with any of the co-authors of the manuscript within the last five years. Proposed reviewers should be from different institutions to the authors. You may identify appropriate Editorial Board members of the journal as potential reviewers. You may suggest reviewers from among the authors that you frequently cite in your paper.")],-1)),q8=yo(()=>d("ul",null,[d("li",null,"Authors can recommend potential reviewers. Journal editors will check to make sure there are no conflicts of interest before contacting those reviewers, and will not consider those with competing interests. Reviewers are asked to declare any conflicts of interest. Authors can also enter the names of potential peer reviewers they wish to exclude from consideration in the peer review of their manuscript, during the initial submission progress. The editorial team will respect these requests so long as this does not interfere with the objective and thorough assessment of the submission.")],-1)),W8=yo(()=>d("ul",null,[d("li",null,"To facilitate proper peer-reviewing of your manuscript, it is essential that it is submitted in grammatically correct English. If you are not a native English speaker, we recommend that you have your manuscript professionally edited before submission or read by a native English-speaking colleague. This can be carried out by Aperier Language editing service. Professional editing will enable reviewers and future readers to more easily read and assess the content of submitted manuscripts. All accepted manuscripts undergo language editing; however, an additional fee will be charged to authors if very extensive English corrections must be made by the Editorial Office.")],-1));function G8(s,l,h,g,m,y){const w=et("ContentHeader"),v=et("AccordionItemComponent"),A=et("AccordionComponent");return re(),ae("div",b8,[ce(w,{title:"Instruction to Author"}),d("section",_8,[d("div",w8,[d("div",k8,[d("div",v8,[y8,d("div",A8,[d("div",C8,[x8,d("div",E8,[d("div",D8,[ce(A,null,{default:je(()=>[ce(v,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Type of Articles"},{default:je(()=>[T8]),_:1}),ce(v,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Cover Letter"},{default:je(()=>[S8,I8]),_:1}),ce(v,{heading_id:"headingThree",collapse_id:"collapseThree",title:"Legal requirements"},{default:je(()=>[M8]),_:1}),ce(v,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Manuscript Preparation"},{default:je(()=>[P8]),_:1}),ce(v,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Front Matter"},{default:je(()=>[N8,B8]),_:1}),ce(v,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Research Manuscript Structure"},{default:je(()=>[O8]),_:1}),ce(v,{heading_id:"headingSeven",collapse_id:"collapseSeven",title:"Tables and Figures "},{default:je(()=>[L8]),_:1}),ce(v,{heading_id:"headingEight",collapse_id:"collapseEight",title:"Reference Style Guides "},{default:je(()=>[R8,z8]),_:1}),ce(v,{heading_id:"headingNine",collapse_id:"collapseNine",title:"Back Matter"},{default:je(()=>[j8,F8,$8,V8]),_:1}),ce(v,{heading_id:"headingTen",collapse_id:"collapseTen",title:"Online First"},{default:je(()=>[U8]),_:1}),ce(v,{heading_id:"headingEleven",collapse_id:"collapseEleven",title:"Reviewer Suggestions"},{default:je(()=>[H8]),_:1}),ce(v,{heading_id:"headingTwelve",collapse_id:"collapseTwelve",title:"Reviewers Recommendation"},{default:je(()=>[q8]),_:1}),ce(v,{heading_id:"headingThirteen",collapse_id:"collapseThirteen",title:"English Corrections"},{default:je(()=>[W8]),_:1})]),_:1})])])])])])])])])])}const K8=ut(g8,[["render",G8],["__scopeId","data-v-66d15a21"]]);const Y8={data(){return{authorCount:2,metadata:{journals:[],studyTypes:[]},config:{headers:{"Content-type":"multipart/form-data"}},formData:{journals:"",studyTypes:"",email:localStorage.getItem("userEmail"),title:"",abstract:"",keywords:"",page:"",authors:[],manuscript_file_temp:"",comments:"",authors_agreement:!1,not_published:!1,ethical_guidelines:!1,third_party_acknowledgement:!1},fullData:new FormData}},methods:{downloadAuthorshipForm(){console.log("Clicked");let s=`${Ct.domain}/storage/files/MANUSCRIPT SUBMISSION FORM.docx`;console.log(s),window.open(s)},addAuthor(){this.authorCount++,this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""})},removeAuthor(){this.authorCount>1?(this.authorCount--,this.formData.authors.pop()):alert("There should be at least one author")},handleFileUpload(){this.formData.manuscript_file_temp=this.$refs.file.files[0]},openFile(){document.getElementById("file").click()},async submitForm(){if(!this.formData.manuscript_file_temp){this.$swal({text:"Please attach the manuscript",icon:"error"});return}this.fullData.append("manuscript_file",this.formData.manuscript_file_temp),this.fullData.append("data",JSON.stringify(this.formData));let s=await qt.post(`${Ct.domain}/api/submit-study`,this.fullData);if(s.data.success){this.$swal({text:s.data.message,icon:"success"}),this.formData={journals:"",studyTypes:"",email:"",page:"",title:"",abstract:"",keywords:"",authors:[],manuscript_file_temp:"",comments:"",authors_agreement:!1,not_published:!1,ethical_guidelines:!1,third_party_acknowledgement:!1};for(let l=0;l<this.authorCount;l++)this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""});this.$router.push({name:"Author Dashboard"})}else this.$swal({text:s.data.message,icon:"error"})}},async mounted(){let s=await qt.get(`${Ct.domain}/api/journals`);this.metadata.journals=s.data.data.journals,this.metadata.studyTypes=s.data.data.studyTypes,this.formData.journals=this.metadata.journals[0].id,this.formData.studyTypes=this.metadata.studyTypes[0].id;for(let l=0;l<this.authorCount;l++)this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""})}},Nn=s=>(Rt("data-v-3317a60f"),s=s(),zt(),s),Q8={class:"content-wrapper"},Z8={class:"content"},J8={class:"container-fluid"},X8={class:"row mx-4"},eV={class:"card col-12"},tV={class:"card-body d-flex flex-column p-5",style:{gap:"30px"}},nV={class:"row"},oV=Nn(()=>d("div",{class:"col-2"},[H("SELECT JOURNAL:"),d("span",{class:"text-danger"},"*")],-1)),iV={class:"col-4"},sV=["value"],rV={class:"row"},aV=Nn(()=>d("div",{class:"col-2"},[H("Study type:"),d("span",{class:"text-danger"},"*")],-1)),lV={class:"col-4"},cV=["value"],dV={class:"row"},uV=Nn(()=>d("div",{class:"col-2"},[H("Page:"),d("span",{class:"text-danger"},"*")],-1)),hV={class:"col-10"},fV={class:"row"},pV=Nn(()=>d("div",{class:"col-2"},[H("Title:"),d("span",{class:"text-danger"},"*")],-1)),mV={class:"col-10"},gV={class:"row"},bV=Nn(()=>d("div",{class:"col-2"},[H("Abstract:"),d("span",{class:"text-danger"},"*")],-1)),_V={class:"col-10"},wV={class:"row"},kV=Nn(()=>d("div",{class:"col-2"},[H("Keywords:"),d("span",{class:"text-danger"},"*")],-1)),vV={class:"col-10"},yV=Nn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Authors"),d("hr")],-1)),AV={class:"row"},CV={class:"author-card-title col-2 p-1"},xV={class:"col-10 row"},EV={class:"col-6 d-flex flex-column pl-3",style:{gap:"15px"}},DV={class:"row"},TV=Nn(()=>d("div",{class:"col-4"},[H("Prefix:"),d("span",{class:"text-danger"},"*")],-1)),SV={class:"col-8"},IV=["onUpdate:modelValue"],MV=fo('<option value="Dr." data-v-3317a60f>Dr.</option><option value="Mr." data-v-3317a60f>Mr.</option><option value="Mrs." data-v-3317a60f>Mrs.</option><option value="Prof." data-v-3317a60f>Prof.</option><option value="Assoc Prof." data-v-3317a60f>Assoc Prof.</option>',5),PV=[MV],NV={class:"row"},BV=Nn(()=>d("div",{class:"col-4"},[H("First (Given) Name:"),d("span",{class:"text-danger"},"*")],-1)),OV={class:"col-8"},LV=["onUpdate:modelValue"],RV={class:"row"},zV=Nn(()=>d("div",{class:"col-4"},[H("Last (Family) Name:"),d("span",{class:"text-danger"},"*")],-1)),jV={class:"col-8"},FV=["onUpdate:modelValue"],$V={class:"col-6 d-flex flex-column pl-5",style:{gap:"15px"}},VV={class:"row"},UV=Nn(()=>d("div",{class:"col-4"},[H("Correspondence:"),d("span",{class:"text-danger"},"*")],-1)),HV={class:"col-8"},qV=["onUpdate:modelValue"],WV={class:"row"},GV=Nn(()=>d("div",{class:"col-4"},"Middle Name:",-1)),KV={class:"col-8"},YV=["onUpdate:modelValue"],QV={class:"row"},ZV=Nn(()=>d("div",{class:"col-4"},[H("E-Mail:"),d("span",{class:"text-danger"},"*")],-1)),JV={class:"col-8"},XV=["onUpdate:modelValue"],eU={class:"col-12 row pl-3 mt-3"},tU=Nn(()=>d("div",{class:"col-2"},[H("Affiliation: "),d("span",{class:"text-danger"},"*")],-1)),nU={class:"col-10 pr-0 mr-0"},oU=["onUpdate:modelValue"],iU={class:"col-12 align-items-center justify-content-end d-flex",style:{gap:"20px"}},sU=Nn(()=>d("span",null,"Remove AUTHORS",-1)),rU=Nn(()=>d("i",{class:"fa-solid fa-square-minus text-danger"},null,-1)),aU=[sU,rU],lU=Nn(()=>d("span",null,"ADD MORE AUTHORS",-1)),cU=Nn(()=>d("i",{class:"fa-solid fa-square-plus text-success"},null,-1)),dU=[lU,cU],uU=Nn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Upload File"),d("hr")],-1)),hU={class:"row"},fU={class:"col-12 d-flex flex-column justify-content-center align-items-center",style:{gap:"15px"}},pU=Nn(()=>d("span",{class:"text-danger"},"*",-1)),mU={key:0,class:"text-info"},gU=Nn(()=>d("span",null,"Max size is 5 MB",-1)),bU=Nn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"COVER LETTER"),d("hr")],-1)),_U={class:"row px-4"},wU={class:"row"},kU={class:"col-12 p-4"},vU={class:"form-check mb-2"},yU=Nn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault"},[d("span",{class:"text-danger"},"*"),H(" Confirm that All co-authors are listed and agree the submission. ")],-1)),AU={class:"form-check"},CU=Nn(()=>d("label",{class:"form-check-label",for:"flexCheckChecked"},[d("span",{class:"text-danger"},"*"),H(" Confirm that the manuscript has been submitted solely to this journal and is not published, in press, or submitted elsewhere. ")],-1)),xU={class:"form-check mb-2"},EU=Nn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault1"},[d("span",{class:"text-danger"},"*"),H(" Confirm that all the research meets the ethical guidelines, including adherence to the legal requirements of the study country. ")],-1)),DU={class:"form-check mb-2"},TU=Nn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault2"},[d("span",{class:"text-danger"},"*"),H(" I/We have declared any potential conflict of interest in the research. Any support from a third party has been noted in the Acknowledgements. ")],-1)),SU=Nn(()=>d("div",{class:"row align-self-end"},[d("button",{class:"btn-register",type:"submit"},"Submit Manuscript")],-1));function IU(s,l,h,g,m,y){const w=et("ContentHeader");return re(),ae("div",Q8,[ce(w,{title:"New Submission"}),d("section",Z8,[d("div",J8,[d("form",{action:"",onSubmit:l[16]||(l[16]=kr((...v)=>y.submitForm&&y.submitForm(...v),["prevent"]))},[d("div",X8,[d("div",eV,[d("div",tV,[d("div",nV,[oV,d("div",iV,[Pe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.journals=v),required:""},[(re(!0),ae(rt,null,Pt(m.metadata.journals,v=>(re(),ae("option",{key:v.id,value:v.id},pe(v.title),9,sV))),128))],512),[[_i,m.formData.journals]])])]),d("div",rV,[aV,d("div",lV,[Pe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.studyTypes=v),required:""},[(re(!0),ae(rt,null,Pt(m.metadata.studyTypes,v=>(re(),ae("option",{key:v.id,value:v.id},pe(v.name),9,cV))),128))],512),[[_i,m.formData.studyTypes]])])]),d("div",dV,[uV,d("div",hV,[Pe(d("input",{type:"text",class:"p-1",placeholder:"From-To eg. 1-100","onUpdate:modelValue":l[2]||(l[2]=v=>m.formData.page=v),required:""},null,512),[[Xe,m.formData.page]])])]),d("div",fV,[pV,d("div",mV,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Title","onUpdate:modelValue":l[3]||(l[3]=v=>m.formData.title=v),required:""},null,512),[[Xe,m.formData.title]])])]),d("div",gV,[bV,d("div",_V,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"13",class:"w-100 p-3",placeholder:"Abstract","onUpdate:modelValue":l[4]||(l[4]=v=>m.formData.abstract=v),required:""},null,512),[[Xe,m.formData.abstract]])])]),d("div",wV,[kV,d("div",vV,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Keywords; seperate the keywords with semicolon (;)","onUpdate:modelValue":l[5]||(l[5]=v=>m.formData.keywords=v),required:""},null,512),[[Xe,m.formData.keywords]])])]),yV,d("div",AV,[(re(!0),ae(rt,null,Pt(m.formData.authors,(v,A)=>(re(),ae("div",{class:"author-card row col-12 p-3 mb-4",key:v},[d("div",CV,"Author #"+pe(A+1),1),d("div",xV,[d("div",EV,[d("div",DV,[TV,d("div",SV,[Pe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":T=>v.prefix=T,required:""},PV,8,IV),[[_i,v.prefix]])])]),d("div",NV,[BV,d("div",OV,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.first_name=T,required:""},null,8,LV),[[Xe,v.first_name]])])]),d("div",RV,[zV,d("div",jV,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.last_name=T,required:""},null,8,FV),[[Xe,v.last_name]])])])]),d("div",$V,[d("div",VV,[UV,d("div",HV,[Pe(d("input",{type:"checkbox",class:"","onUpdate:modelValue":T=>v.correspondence=T},null,8,qV),[[io,v.correspondence]])])]),d("div",WV,[GV,d("div",KV,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.middle_name=T},null,8,YV),[[Xe,v.middle_name]])])]),d("div",QV,[ZV,d("div",JV,[Pe(d("input",{type:"email",class:"w-100","onUpdate:modelValue":T=>v.email=T,required:""},null,8,XV),[[Xe,v.email]])])])]),d("div",eU,[tU,d("div",nU,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.affiliation=T,required:""},null,8,oU),[[Xe,v.affiliation]])])])])]))),128)),d("div",iU,[d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[6]||(l[6]=v=>y.removeAuthor())},aU),d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[7]||(l[7]=v=>y.addAuthor())},dU)])]),uU,d("div",hU,[d("div",fU,[d("span",null,[H("ATTACH MANUSCRIPT"),pU,H(),m.formData.manuscript_file_temp?(re(),ae("span",mU,": "+pe(this.$refs.file.files[0].name),1)):Mi("",!0)]),d("input",{class:"form-control",hidden:"",onChange:l[8]||(l[8]=v=>y.handleFileUpload()),type:"file",ref:"file",name:"file",id:"file"},null,544),d("button",{onClick:l[9]||(l[9]=v=>y.openFile()),type:"button",class:"btn-register"},"Select File"),gU,d("span",null,[H("Please download and fill the "),d("span",{class:"text-info",style:{cursor:"pointer"},onClick:l[10]||(l[10]=v=>y.downloadAuthorshipForm())},"Manuscript Template")])])]),bU,d("div",_U,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"10",class:"w-100 p-3",placeholder:"Write the Cover Letter here","onUpdate:modelValue":l[11]||(l[11]=v=>m.formData.comments=v)},null,512),[[Xe,m.formData.comments]])]),d("div",wU,[d("div",kU,[d("div",vU,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[12]||(l[12]=v=>m.formData.authors_agreement=v),required:""},null,512),[[io,m.formData.authors_agreement]]),yU]),d("div",AU,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":l[13]||(l[13]=v=>m.formData.not_published=v),required:""},null,512),[[io,m.formData.not_published]]),CU]),d("div",xU,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault1","onUpdate:modelValue":l[14]||(l[14]=v=>m.formData.ethical_guidelines=v),required:""},null,512),[[io,m.formData.ethical_guidelines]]),EU]),d("div",DU,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2","onUpdate:modelValue":l[15]||(l[15]=v=>m.formData.third_party_acknowledgement=v),required:""},null,512),[[io,m.formData.third_party_acknowledgement]]),TU])])]),SU])])])],32)])])])}const MU=ut(Y8,[["render",IU],["__scopeId","data-v-3317a60f"]]);const PU={data(){return{formData:{prefix:"Dr.",first_name:"",middle_name:"",last_name:"",degree:"",email:"",phone:"",orchid:"",department:"",institution:"",city:"",country:"",areaOfExpertise:[]}}},methods:{async handleForm(){await qt.post(`${Ct.domain}/api/profile-update`,this.formData).then(s=>{s.data.success?(this.$swal({text:"User updated  successfully",icon:"success"}),localStorage.removeItem("userEmail"),localStorage.setItem("userEmail",this.formData.email),this.getUser()):this.$swal({text:s.data.message,icon:"error"})}).catch(s=>{console.log(s)})},async getUser(){let s=await qt.get(`${Ct.domain}/api/profile/`+localStorage.getItem("userEmail"));s=s.data.data,s.areaOfExpertise=s.areaOfExpertise.map(l=>l.area_name),this.formData=s}},mounted(){this.getUser()}},po=s=>(Rt("data-v-2675a6d9"),s=s(),zt(),s),NU={class:"content-wrapper"},BU={class:"content"},OU={class:"container-fluid"},LU={class:"row mx-4"},RU={class:"card col-12"},zU=fo('<div class="card-header" data-v-2675a6d9><h3 class="card-title" data-v-2675a6d9>Update your information</h3><div class="card-tools" data-v-2675a6d9><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-2675a6d9><i class="fas fa-minus" data-v-2675a6d9></i></button></div></div>',1),jU={class:"row card-body"},FU={class:"col-12 bg-custom-gray"},$U={class:"col-6 offset-3 p-4"},VU={class:"custom-form-group"},UU=po(()=>d("span",null,[H("Prefix"),d("span",{class:"text-danger"},"*")],-1)),HU=fo('<option value="Dr." data-v-2675a6d9>Dr.</option><option value="Mr." data-v-2675a6d9>Mr.</option><option value="Mrs." data-v-2675a6d9>Mrs.</option><option value="Prof." data-v-2675a6d9>Prof.</option><option value="Assoc Prof." data-v-2675a6d9>Assoc Prof.</option>',5),qU=[HU],WU={class:"custom-form-group"},GU=po(()=>d("span",null,[H("First (Given) Name:"),d("span",{class:"text-danger"},"*")],-1)),KU={class:"custom-form-group"},YU=po(()=>d("span",null,"Middle Name:",-1)),QU={class:"custom-form-group"},ZU=po(()=>d("span",null,[H("Last (Family) Name:"),d("span",{class:"text-danger"},"*")],-1)),JU={class:"custom-form-group"},XU=po(()=>d("span",null,"Degree:",-1)),eH={class:"col-12"},tH={class:"col-6 offset-3 p-4"},nH={class:"custom-form-group"},oH=po(()=>d("span",null,[H("Primary E-Mail:"),d("span",{class:"text-danger"},"*")],-1)),iH={class:"custom-form-group"},sH=po(()=>d("span",null,"Phone:",-1)),rH={class:"custom-form-group"},aH=po(()=>d("span",null,"ORCID:",-1)),lH={class:"col-12 bg-custom-gray"},cH={class:"col-6 offset-3 p-4"},dH={class:"custom-form-group"},uH=po(()=>d("span",null,"Department:",-1)),hH={class:"custom-form-group"},fH=po(()=>d("span",null,[H("Institution:"),d("span",{class:"text-danger"},"*")],-1)),pH={class:"custom-form-group"},mH=po(()=>d("span",null,[H("City:"),d("span",{class:"text-danger"},"*")],-1)),gH={class:"custom-form-group"},bH=po(()=>d("span",null,[H("Country:"),d("span",{class:"text-danger"},"*")],-1)),_H={class:"col-12"},wH={class:"col-6 offset-3 p-4"},kH={class:"custom-form-group"},vH=po(()=>d("span",null,"Areas of Expertise:",-1)),yH={class:"w-50"},AH={class:"d-flex mb-3",style:{gap:"10px"}},CH=po(()=>d("span",null,[H("(1)"),d("span",{class:"text-danger"},"*")],-1)),xH={class:"d-flex mb-3",style:{gap:"10px"}},EH=po(()=>d("span",null,[H("(2)"),d("span",{class:"text-danger"},"*")],-1)),DH={class:"d-flex mb-3",style:{gap:"10px"}},TH=po(()=>d("span",null,"(3) \xA0",-1)),SH={class:"d-flex mb-3",style:{gap:"10px"}},IH=po(()=>d("span",null,"(4) \xA0",-1)),MH={class:"d-flex mb-3",style:{gap:"10px"}},PH=po(()=>d("span",null,"(5) \xA0",-1)),NH={class:"d-flex mb-3",style:{gap:"10px"}},BH=po(()=>d("span",null,"(6) \xA0",-1)),OH=po(()=>d("div",{class:"col-12 text-end mt-4"},[d("button",{type:"submit",class:"btn-register"},"Register")],-1));function LH(s,l,h,g,m,y){const w=et("ContentHeader");return re(),ae("div",NU,[ce(w,{title:"Update Profile"}),d("section",BU,[d("div",OU,[d("div",LU,[d("div",RU,[zU,d("div",jU,[d("form",{action:"",method:"post",onSubmit:l[18]||(l[18]=kr(v=>y.handleForm(),["prevent"]))},[d("div",FU,[d("div",$U,[d("div",VU,[UU,Pe(d("select",{name:"",class:"w-50",id:"","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.prefix=v),required:""},qU,512),[[_i,m.formData.prefix]])]),d("div",WU,[GU,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.first_name=v),required:""},null,512),[[Xe,m.formData.first_name]])]),d("div",KU,[YU,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[2]||(l[2]=v=>m.formData.middle_name=v)},null,512),[[Xe,m.formData.middle_name]])]),d("div",QU,[ZU,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[3]||(l[3]=v=>m.formData.last_name=v),required:""},null,512),[[Xe,m.formData.last_name]])]),d("div",JU,[XU,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[4]||(l[4]=v=>m.formData.degree=v)},null,512),[[Xe,m.formData.degree]])])])]),d("div",eH,[d("div",tH,[d("div",nH,[oH,Pe(d("input",{type:"email",class:"custom-input","onUpdate:modelValue":l[5]||(l[5]=v=>m.formData.email=v),required:""},null,512),[[Xe,m.formData.email]])]),d("div",iH,[sH,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[6]||(l[6]=v=>m.formData.phone=v)},null,512),[[Xe,m.formData.phone]])]),d("div",rH,[aH,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[7]||(l[7]=v=>m.formData.orchid=v)},null,512),[[Xe,m.formData.orchid]])])])]),d("div",lH,[d("div",cH,[d("div",dH,[uH,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[8]||(l[8]=v=>m.formData.department=v)},null,512),[[Xe,m.formData.department]])]),d("div",hH,[fH,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[9]||(l[9]=v=>m.formData.institution=v),required:""},null,512),[[Xe,m.formData.institution]])]),d("div",pH,[mH,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[10]||(l[10]=v=>m.formData.city=v),required:""},null,512),[[Xe,m.formData.city]])]),d("div",gH,[bH,Pe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[11]||(l[11]=v=>m.formData.country=v),required:""},null,512),[[Xe,m.formData.country]])])])]),d("div",_H,[d("div",wH,[d("div",kH,[vH,d("div",yH,[d("div",AH,[CH,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[12]||(l[12]=v=>m.formData.areaOfExpertise[0]=v),required:""},null,512),[[Xe,m.formData.areaOfExpertise[0]]])]),d("div",xH,[EH,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[13]||(l[13]=v=>m.formData.areaOfExpertise[1]=v),required:""},null,512),[[Xe,m.formData.areaOfExpertise[1]]])]),d("div",DH,[TH,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[14]||(l[14]=v=>m.formData.areaOfExpertise[2]=v)},null,512),[[Xe,m.formData.areaOfExpertise[2]]])]),d("div",SH,[IH,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[15]||(l[15]=v=>m.formData.areaOfExpertise[3]=v)},null,512),[[Xe,m.formData.areaOfExpertise[3]]])]),d("div",MH,[PH,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[16]||(l[16]=v=>m.formData.areaOfExpertise[4]=v)},null,512),[[Xe,m.formData.areaOfExpertise[4]]])]),d("div",NH,[BH,Pe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[17]||(l[17]=v=>m.formData.areaOfExpertise[5]=v)},null,512),[[Xe,m.formData.areaOfExpertise[5]]])])])])])]),OH],32)])])])])])])}const RH=ut(PU,[["render",LH],["__scopeId","data-v-2675a6d9"]]);var b_={exports:{}};(function(s,l){(function(h,g){g()})(gi,function(){function h(T,P){return typeof P>"u"?P={autoBom:!1}:typeof P!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),P={autoBom:!P}),P.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(T.type)?new Blob(["\uFEFF",T],{type:T.type}):T}function g(T,P,N){var M=new XMLHttpRequest;M.open("GET",T),M.responseType="blob",M.onload=function(){A(M.response,P,N)},M.onerror=function(){console.error("could not download file")},M.send()}function m(T){var P=new XMLHttpRequest;P.open("HEAD",T,!1);try{P.send()}catch{}return 200<=P.status&&299>=P.status}function y(T){try{T.dispatchEvent(new MouseEvent("click"))}catch{var P=document.createEvent("MouseEvents");P.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),T.dispatchEvent(P)}}var w=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof gi=="object"&&gi.global===gi?gi:void 0,v=w.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),A=w.saveAs||(typeof window!="object"||window!==w?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(T,P,N){var M=w.URL||w.webkitURL,j=document.createElement("a");P=P||T.name||"download",j.download=P,j.rel="noopener",typeof T=="string"?(j.href=T,j.origin===location.origin?y(j):m(j.href)?g(T,P,N):y(j,j.target="_blank")):(j.href=M.createObjectURL(T),setTimeout(function(){M.revokeObjectURL(j.href)},4e4),setTimeout(function(){y(j)},0))}:"msSaveOrOpenBlob"in navigator?function(T,P,N){if(P=P||T.name||"download",typeof T!="string")navigator.msSaveOrOpenBlob(h(T,N),P);else if(m(T))g(T,P,N);else{var M=document.createElement("a");M.href=T,M.target="_blank",setTimeout(function(){y(M)})}}:function(T,P,N,M){if(M=M||open("","_blank"),M&&(M.document.title=M.document.body.innerText="downloading..."),typeof T=="string")return g(T,P,N);var j=T.type==="application/octet-stream",ee=/constructor/i.test(w.HTMLElement)||w.safari,le=/CriOS\/[\d]+/.test(navigator.userAgent);if((le||j&&ee||v)&&typeof FileReader<"u"){var _e=new FileReader;_e.onloadend=function(){var ie=_e.result;ie=le?ie:ie.replace(/^data:[^;]*;/,"data:attachment/file;"),M?M.location.href=ie:location=ie,M=null},_e.readAsDataURL(T)}else{var te=w.URL||w.webkitURL,Y=te.createObjectURL(T);M?M.location=Y:location.href=Y,M=null,setTimeout(function(){te.revokeObjectURL(Y)},4e4)}});w.saveAs=A.saveAs=A,s.exports=A})})(b_);const zH={data(){return{study:{},keywords:{},authors:{}}},async mounted(){let s=await qt.get(`${Ct.domain}/api/study/`+this.$route.params.id);s=s.data.data,this.study=s.study,this.keywords=s.keywords.map(l=>l=l.keyword_title).join(";"),this.authors=s.authors},methods:{downloadURI(s){var l=document.createElement("a");l.download=s,l.href=`${Ct.domain}/storage/upload/studies/${s}`,l.click()},async downloadWithAxios(s){let l=`${Ct.domain}/storage/upload/studies/${s}`;await qt.get(l,{responseType:"blob"}).then(h=>{b_.exports.saveAs(h.data,s)}).catch(()=>console.log("error occured"))}}},vr=s=>(Rt("data-v-a1947a9c"),s=s(),zt(),s),jH={class:"content-wrapper"},FH={class:"content"},$H={class:"container-fluid"},VH={class:"row mx-4"},UH={class:"card col-12"},HH=fo('<div class="card-header" data-v-a1947a9c><h3 class="card-title" data-v-a1947a9c>Manuscript Details</h3><div class="card-tools" data-v-a1947a9c><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-a1947a9c><i class="fas fa-minus" data-v-a1947a9c></i></button></div></div>',1),qH={class:"card-body p-5 d-flex flex-column",style:{gap:"20px"}},WH={class:"row"},GH=vr(()=>d("div",{class:"col-2"},"Manuscript ID",-1)),KH={class:"col-10"},YH={class:"row"},QH=vr(()=>d("div",{class:"col-2"},"Status",-1)),ZH={class:"col-10"},JH={class:"row"},XH=vr(()=>d("div",{class:"col-2"},"Study type",-1)),eq={class:"col-10"},tq={class:"row"},nq=vr(()=>d("div",{class:"col-2"},"Title",-1)),oq={class:"col-10"},iq={class:"row"},sq=vr(()=>d("div",{class:"col-2"},"Abstract",-1)),rq={class:"col-10"},aq={class:"row"},lq=vr(()=>d("div",{class:"col-2"},"Keywords",-1)),cq={class:"col-10"},dq={class:"row"},uq=vr(()=>d("div",{class:"col-2"},"manuscript file",-1)),hq={class:"row"},fq=vr(()=>d("div",{class:"col-2"},"Submitting Date",-1)),pq={class:"col-10"},mq=vr(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Authors"),d("hr")],-1)),gq={class:"row"},bq={class:"col-2"},_q={class:"col-10"},wq={class:"row"},kq=vr(()=>d("div",{class:"col-2"},"Email",-1)),vq={class:"col-10"};function yq(s,l,h,g,m,y){const w=et("ContentHeader");return re(),ae("div",jH,[ce(w,{title:"Manuscript CGJ-2001"}),d("section",FH,[d("div",$H,[d("div",VH,[d("div",UH,[HH,d("div",qH,[d("div",WH,[GH,d("div",KH,"CGJ-"+pe(m.study.id),1)]),d("div",YH,[QH,d("div",ZH,pe(m.study.name),1)]),d("div",JH,[XH,d("div",eq,pe(m.study.title),1)]),d("div",tq,[nq,d("div",oq,pe(m.study.study_title),1)]),d("div",iq,[sq,d("div",rq,[d("p",null,pe(m.study.abstract),1)])]),d("div",aq,[lq,d("div",cq,pe(m.keywords),1)]),d("div",dq,[uq,d("div",{class:"col-10 text-primary",onClick:l[0]||(l[0]=v=>y.downloadURI(m.study.manuscript_file))},pe(m.study.manuscript_file),1)]),d("div",hq,[fq,d("div",pq,pe(m.study.created_at),1)]),mq,(re(!0),ae(rt,null,Pt(m.authors,(v,A)=>(re(),ae("div",{class:"row",key:v.id},[d("div",gq,[d("div",bq,"Author #"+pe(parseInt(A)+1),1),d("div",_q,pe(v.first_name+" "+v.middle_name+" "+v.last_name),1)]),d("div",wq,[kq,d("div",vq,pe(v.email),1)])]))),128))])])])])])])}const Aq=ut(zH,[["render",yq],["__scopeId","data-v-a1947a9c"]]);const Cq={data(){return{authorCount:6,metadata:{journals:[],studyTypes:[]},config:{headers:{"Content-type":"multipart/form-data"}},formData:{journals:"",studyTypes:"",title:"",abstract:"",keywords:"",authors:[],manuscript_file_temp:"",author_file_temp:"",comments:"",authors_agreement:!1,not_published:!1,ethical_guidelines:!1,third_party_acknowledgement:!1},fullData:new FormData,study:{},keywords:{},authors:{}}},methods:{addAuthor(){this.authorCount++,this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""})},removeAuthor(){this.authorCount>1?(this.authorCount--,this.formData.authors.pop()):alert("There should be at least one author")},handleFileUpload(){this.formData.manuscript_file_temp=this.$refs.file.files[0],this.fullData.append("manuscript_file",this.formData.manuscript_file_temp)},handleFileUploadAuthor(){this.formData.author_file_temp=this.$refs.file2.files[0],this.fullData.append("authors_file",this.formData.author_file_temp)},openFile(){document.getElementById("file").click()},openFile2(){document.getElementById("file2").click()},async submitForm(){this.fullData.append("data",JSON.stringify(this.formData));let s=await qt.post(`${Ct.domain}/api/update-study`,this.fullData);console.log(s),s.data.success?(this.$swal({text:s.data.message,icon:"success"}),this.$router.push({name:"Author Dashboard"})):this.$swal({text:s.data.message,icon:"error"})},downloadURI(s){var l=document.createElement("a");l.download=s,l.href=`${Ct.domain}/storage/upload/${s}`,l.click()},async downloadWithAxios(s){let l=`${Ct.domain}/storage/upload/${s}`;await qt.get(l,{responseType:"blob"}).then(h=>{b_.exports.saveAs(h.data,s)}).catch(()=>console.log("error occured"))}},async mounted(){let s=await qt.get(`${Ct.domain}/api/study/`+this.$route.params.id);s=s.data.data,this.study=s.study,this.keywords=s.keywords.map(h=>h=h.keyword_title).join(";"),this.authors=s.authors.map(h=>(h.correspondence=!!h.correspondence,h)),this.formData=this.study,this.formData.journals=this.study.journal_id,this.formData.studyTypes=this.study.study_type_id,this.formData.authors_agreement=!!this.study.authors_agreement,this.formData.not_published=!!this.study.not_published,this.formData.ethical_guidelines=!!this.study.ethical_guidelines,this.formData.third_party_acknowledgement=!!this.study.third_party_acknowledgement,this.formData.authors=this.authors,this.formData.keywords=this.keywords,this.formData.comments=this.study.comment;let l=await qt.get(`${Ct.domain}/api/journals`);this.metadata.journals=l.data.data.journals,this.metadata.studyTypes=l.data.data.studyTypes}},mn=s=>(Rt("data-v-e2701e9a"),s=s(),zt(),s),xq={class:"content-wrapper"},Eq={class:"content"},Dq={class:"container-fluid"},Tq={class:"row mx-4"},Sq={class:"card col-12"},Iq={class:"card-body d-flex flex-column p-5",style:{gap:"30px"}},Mq={class:"row"},Pq=mn(()=>d("div",{class:"col-2"},[H("SELECT JOURNAL:"),d("span",{class:"text-danger"},"*")],-1)),Nq={class:"col-4"},Bq=["value"],Oq={class:"row"},Lq=mn(()=>d("div",{class:"col-2"},[H("Study type:"),d("span",{class:"text-danger"},"*")],-1)),Rq={class:"col-4"},zq=["value"],jq={class:"row"},Fq=mn(()=>d("div",{class:"col-2"},[H("Title:"),d("span",{class:"text-danger"},"*")],-1)),$q={class:"col-10"},Vq={class:"row"},Uq=mn(()=>d("div",{class:"col-2"},[H("Abstract:"),d("span",{class:"text-danger"},"*")],-1)),Hq={class:"col-10"},qq={class:"row"},Wq=mn(()=>d("div",{class:"col-2"},[H("Keywords:"),d("span",{class:"text-danger"},"*")],-1)),Gq={class:"col-10"},Kq={class:"row"},Yq=mn(()=>d("div",{class:"col-2"},"manuscript file",-1)),Qq=mn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Authors"),d("hr")],-1)),Zq={class:"row"},Jq={class:"author-card-title col-2 p-1"},Xq={class:"col-10 row"},eW={class:"col-6 d-flex flex-column pl-3",style:{gap:"15px"}},tW={class:"row"},nW=mn(()=>d("div",{class:"col-4"},[H("Prefix:"),d("span",{class:"text-danger"},"*")],-1)),oW={class:"col-8"},iW=["onUpdate:modelValue"],sW=fo('<option value="Dr." data-v-e2701e9a>Dr.</option><option value="Mr." data-v-e2701e9a>Mr.</option><option value="Mrs." data-v-e2701e9a>Mrs.</option><option value="Prof." data-v-e2701e9a>Prof.</option><option value="Assoc Prof." data-v-e2701e9a>Assoc Prof.</option>',5),rW=[sW],aW={class:"row"},lW=mn(()=>d("div",{class:"col-4"},[H("First (Given) Name:"),d("span",{class:"text-danger"},"*")],-1)),cW={class:"col-8"},dW=["onUpdate:modelValue"],uW={class:"row"},hW=mn(()=>d("div",{class:"col-4"},[H("Last (Family) Name:"),d("span",{class:"text-danger"},"*")],-1)),fW={class:"col-8"},pW=["onUpdate:modelValue"],mW={class:"col-6 d-flex flex-column pl-5",style:{gap:"15px"}},gW={class:"row"},bW=mn(()=>d("div",{class:"col-4"},[H("Correspondence:"),d("span",{class:"text-danger"},"*")],-1)),_W={class:"col-8"},wW=["onUpdate:modelValue"],kW={class:"row"},vW=mn(()=>d("div",{class:"col-4"},"Middle Name:",-1)),yW={class:"col-8"},AW=["onUpdate:modelValue"],CW={class:"row"},xW=mn(()=>d("div",{class:"col-4"},[H("E-Mail:"),d("span",{class:"text-danger"},"*")],-1)),EW={class:"col-8"},DW=["onUpdate:modelValue"],TW={class:"col-12 row pl-3 mt-3"},SW=mn(()=>d("div",{class:"col-2"},[H("Affiliation: "),d("span",{class:"text-danger"},"*")],-1)),IW={class:"col-10 pr-0 mr-0"},MW=["onUpdate:modelValue"],PW={class:"col-12 align-items-center justify-content-end d-flex",style:{gap:"20px"}},NW=mn(()=>d("span",null,"Remove AUTHORS",-1)),BW=mn(()=>d("i",{class:"fa-solid fa-square-minus text-danger"},null,-1)),OW=[NW,BW],LW=mn(()=>d("span",null,"ADD MORE AUTHORS",-1)),RW=mn(()=>d("i",{class:"fa-solid fa-square-plus text-success"},null,-1)),zW=[LW,RW],jW={class:"row"},FW=mn(()=>d("div",{class:"col-2"},"Authorship form",-1)),$W=mn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Upload File"),d("hr")],-1)),VW={class:"row"},UW={class:"col-6 d-flex flex-column align-items-center",style:{gap:"15px"}},HW=mn(()=>d("span",{class:"text-danger"},"*",-1)),qW={key:0,class:"text-info"},WW=mn(()=>d("span",null,"Max size is 5 MB",-1)),GW=mn(()=>d("span",null,[H("Please download and fill the"),d("span",{class:"text-info",style:{cursor:"pointer"}}," Manuscript Template")],-1)),KW={class:"col-6 d-flex flex-column align-items-center",style:{gap:"15px"}},YW={key:0,class:"text-info"},QW=mn(()=>d("span",null,"Max size is 5 MB",-1)),ZW=mn(()=>d("span",null,[H("Please download and fill the"),d("span",{class:"text-info",style:{cursor:"pointer"}}," Authorship Change FORM")],-1)),JW=mn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"COVER LETTER"),d("hr")],-1)),XW={class:"row px-4"},eG={class:"row"},tG={class:"col-12 p-4"},nG={class:"form-check mb-2"},oG=mn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault"},[d("span",{class:"text-danger"},"*"),H(" Confirm that All co-authors are listed and agree the submission. ")],-1)),iG={class:"form-check"},sG=mn(()=>d("label",{class:"form-check-label",for:"flexCheckChecked"},[d("span",{class:"text-danger"},"*"),H(" Confirm that the manuscript has been submitted solely to this journal and is not published, in press, or submitted elsewhere. ")],-1)),rG={class:"form-check mb-2"},aG=mn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault1"},[d("span",{class:"text-danger"},"*"),H(" Confirm that all the research meets the ethical guidelines, including adherence to the legal requirements of the study country. ")],-1)),lG={class:"form-check mb-2"},cG=mn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault2"},[d("span",{class:"text-danger"},"*"),H(" I/We have declared any potential conflict of interest in the research. Any support from a third party has been noted in the Acknowledgements. ")],-1)),dG=mn(()=>d("div",{class:"row align-self-end"},[d("button",{class:"btn-register",type:"submit"},"Submit Manuscript")],-1));function uG(s,l,h,g,m,y){const w=et("ContentHeader");return re(),ae("div",xq,[ce(w,{title:"Edit Submission"}),d("section",Eq,[d("div",Dq,[d("form",{action:"",onSubmit:l[18]||(l[18]=kr((...v)=>y.submitForm&&y.submitForm(...v),["prevent"]))},[d("div",Tq,[d("div",Sq,[d("div",Iq,[d("div",Mq,[Pq,d("div",Nq,[Pe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.journals=v),required:""},[(re(!0),ae(rt,null,Pt(m.metadata.journals,v=>(re(),ae("option",{key:v.id,value:v.id},pe(v.title),9,Bq))),128))],512),[[_i,m.formData.journals]])])]),d("div",Oq,[Lq,d("div",Rq,[Pe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.studyTypes=v),required:""},[(re(!0),ae(rt,null,Pt(m.metadata.studyTypes,v=>(re(),ae("option",{key:v.id,value:v.id},pe(v.name),9,zq))),128))],512),[[_i,m.formData.studyTypes]])])]),d("div",jq,[Fq,d("div",$q,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Title","onUpdate:modelValue":l[2]||(l[2]=v=>m.formData.title=v),required:""},null,512),[[Xe,m.formData.title]])])]),d("div",Vq,[Uq,d("div",Hq,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"13",class:"w-100 p-3",placeholder:"Abstract","onUpdate:modelValue":l[3]||(l[3]=v=>m.formData.abstract=v),required:""},null,512),[[Xe,m.formData.abstract]])])]),d("div",qq,[Wq,d("div",Gq,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",required:"",placeholder:"Keywords; seperate the keywords with semicolon (;)","onUpdate:modelValue":l[4]||(l[4]=v=>m.formData.keywords=v)},null,512),[[Xe,m.formData.keywords]])])]),d("div",Kq,[Yq,d("div",{class:"col-10 text-primary",onClick:l[5]||(l[5]=v=>y.downloadURI("studies/"+m.study.manuscript_file))},pe(m.study.manuscript_file),1)]),Qq,d("div",Zq,[(re(!0),ae(rt,null,Pt(m.formData.authors,(v,A)=>(re(),ae("div",{class:"author-card row col-12 p-3 mb-4",key:v},[d("div",Jq,"Author #"+pe(A+1),1),d("div",Xq,[d("div",eW,[d("div",tW,[nW,d("div",oW,[Pe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":T=>v.prefix=T,required:""},rW,8,iW),[[_i,v.prefix]])])]),d("div",aW,[lW,d("div",cW,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.first_name=T,required:""},null,8,dW),[[Xe,v.first_name]])])]),d("div",uW,[hW,d("div",fW,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.last_name=T,required:""},null,8,pW),[[Xe,v.last_name]])])])]),d("div",mW,[d("div",gW,[bW,d("div",_W,[Pe(d("input",{type:"checkbox",class:"","onUpdate:modelValue":T=>v.correspondence=T},null,8,wW),[[io,v.correspondence]])])]),d("div",kW,[vW,d("div",yW,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.middle_name=T},null,8,AW),[[Xe,v.middle_name]])])]),d("div",CW,[xW,d("div",EW,[Pe(d("input",{type:"email",class:"w-100","onUpdate:modelValue":T=>v.email=T,required:""},null,8,DW),[[Xe,v.email]])])])]),d("div",TW,[SW,d("div",IW,[Pe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":T=>v.affiliation=T,required:""},null,8,MW),[[Xe,v.affiliation]])])])])]))),128)),d("div",PW,[d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[6]||(l[6]=v=>y.removeAuthor())},OW),d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[7]||(l[7]=v=>y.addAuthor())},zW)]),d("div",jW,[FW,d("div",{class:"col-10 text-primary",onClick:l[8]||(l[8]=v=>y.downloadURI("authors/"+m.study.authorship_change_file))},pe(m.study.authorship_change_file),1)])]),$W,d("div",VW,[d("div",UW,[d("span",null,[H("ATTACH MANUSCRIPT"),HW,m.formData.manuscript_file_temp?(re(),ae("span",qW,": "+pe(this.$refs.file.files[0].name),1)):Mi("",!0)]),d("input",{class:"form-control",hidden:"",onChange:l[9]||(l[9]=v=>y.handleFileUpload()),type:"file",ref:"file",name:"file",id:"file"},null,544),d("button",{onClick:l[10]||(l[10]=v=>y.openFile()),type:"button",class:"btn-register"},"Select File"),WW,GW]),d("div",KW,[d("span",null,[H("ATTACH AUTHORSHIP CHANGE "),m.formData.author_file_temp?(re(),ae("span",YW,": "+pe(this.$refs.file2.files[0].name),1)):Mi("",!0)]),d("input",{class:"form-control",hidden:"",onChange:l[11]||(l[11]=v=>y.handleFileUploadAuthor()),type:"file",ref:"file2",name:"file2",id:"file2"},null,544),d("button",{class:"btn-register",onClick:l[12]||(l[12]=v=>y.openFile2()),type:"button"},"Select File"),QW,ZW])]),JW,d("div",XW,[Pe(d("textarea",{name:"",id:"",cols:"30",rows:"10",class:"w-100 p-3",placeholder:"Write the Cover Letter here","onUpdate:modelValue":l[13]||(l[13]=v=>m.formData.comments=v)},null,512),[[Xe,m.formData.comments]])]),d("div",eG,[d("div",tG,[d("div",nG,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[14]||(l[14]=v=>m.formData.authors_agreement=v),required:""},null,512),[[io,m.formData.authors_agreement]]),oG]),d("div",iG,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":l[15]||(l[15]=v=>m.formData.not_published=v),required:""},null,512),[[io,m.formData.not_published]]),sG]),d("div",rG,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault1","onUpdate:modelValue":l[16]||(l[16]=v=>m.formData.ethical_guidelines=v),required:""},null,512),[[io,m.formData.ethical_guidelines]]),aG]),d("div",lG,[Pe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2","onUpdate:modelValue":l[17]||(l[17]=v=>m.formData.third_party_acknowledgement=v),required:""},null,512),[[io,m.formData.third_party_acknowledgement]]),cG])])]),dG])])])],32)])])])}const hG=ut(Cq,[["render",uG],["__scopeId","data-v-e2701e9a"]]),fG={data(){return{dashboardData:[]}},async mounted(){this.dashboardData=(await axios.get(`${Ct.domain}/api/admin-dashboard`)).data.data}},pG={class:"content-wrapper"},mG={key:0,class:"content"},gG={class:"container-fluid"},bG={class:"card"},_G=fo('<div class="card-header"><h3 class="card-title">Aperier Summery</h3><div class="card-tools"><button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button></div></div>',1),wG={class:"card-body"},kG={class:"content"},vG={class:"container-fluid"},yG={class:"row"},AG={class:"col-lg-3 col-6"},CG={class:"small-box bg-info"},xG={class:"inner"},EG=d("p",null,"Total Studies",-1),DG=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1),TG={class:"col-lg-3 col-6"},SG={class:"small-box bg-success"},IG={class:"inner"},MG=d("p",null,"Total Archived",-1),PG=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1),NG={class:"col-lg-3 col-6"},BG={class:"small-box bg-danger"},OG={class:"inner"},LG=d("p",null,"Total Published",-1),RG=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1),zG={class:"col-lg-3 col-6"},jG={class:"small-box bg-secondary"},FG={class:"inner"},$G=d("p",null,"Total Ongoing",-1),VG=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1);function UG(s,l,h,g,m,y){const w=et("ContentHeader");return re(),ae("div",pG,[ce(w,{title:"Admin Dashboard"}),m.dashboardData?(re(),ae("section",mG,[d("div",gG,[d("div",bG,[_G,d("div",wG,[d("section",kG,[d("div",vG,[d("div",yG,[d("div",AG,[d("div",CG,[d("div",xG,[d("h3",null,pe(m.dashboardData.all),1),EG]),DG])]),d("div",TG,[d("div",SG,[d("div",IG,[d("h3",null,pe(m.dashboardData.archived),1),MG]),PG])]),d("div",NG,[d("div",BG,[d("div",OG,[d("h3",null,pe(m.dashboardData.published),1),LG]),RG])]),d("div",zG,[d("div",jG,[d("div",FG,[d("h3",null,pe(m.dashboardData.ongoing),1),$G]),VG])])])])])])])])])):Mi("",!0)])}const HG=ut(fG,[["render",UG]]);const qG={name:"News",data(){return{data:[],domain:Ct.domain}},async mounted(){this.data=(await qt.get(`${Ct.domain}/api/news`)).data.data},methods:{async deleteNews(s){if(!confirm("Are you sure?"))return;let l=await qt.delete(`${Ct.domain}/api/news/${s}`);l.data.success?(this.$swal({text:l.data.message,icon:"success"}),this.data=(await qt.get(`${Ct.domain}/api/news`)).data.data):this.$swal({text:l.data.message,icon:"error"})}}},WG=s=>(Rt("data-v-3924d631"),s=s(),zt(),s),GG={class:"content-wrapper"},KG={class:"content"},YG={class:"container-fluid"},QG={class:"card-body"},ZG={class:"float-right my-2 mb-4"},JG={id:"example2",class:"table table-bordered table-striped table-head-fixed"},XG=WG(()=>d("thead",null,[d("tr",null,[d("th",{width:"120px"},"Image"),d("th",null,"Title"),d("th",{width:"120px"},"Date"),d("th",{width:"140px"},"Action")])],-1)),eK={class:"p-2"},tK=["src"],nK=["onClick"];function oK(s,l,h,g,m,y){const w=et("ContentHeader"),v=et("router-link");return re(),ae("div",GG,[ce(w,{title:"Manage Your News"}),d("section",KG,[d("div",YG,[d("div",QG,[d("div",ZG,[ce(v,{to:{name:"Admin News Add"},class:"btn-register"},{default:je(()=>[H("Add News")]),_:1})]),d("table",JG,[XG,d("tbody",null,[(re(!0),ae(rt,null,Pt(m.data,A=>(re(),ae("tr",{key:A.id},[d("td",eK,[d("img",{src:`/storage/upload/news/${A.image}`,class:"img-fluid",alt:""},null,8,tK)]),d("td",null,pe(A.title),1),d("td",null,pe(A.date),1),d("td",null,[ce(v,{to:{name:"Admin News Edit",params:{id:A.id}}},{default:je(()=>[H("Edit")]),_:2},1032,["to"]),H(" | "),d("span",{onClick:T=>y.deleteNews(A.id),class:"text-danger",style:{cursor:"pointer"}},"Delete",8,nK)])]))),128))])])])])])])}const iK=ut(qG,[["render",oK],["__scopeId","data-v-3924d631"]]);var Gv={exports:{}};(function(s,l){(function(h){const g=h.en=h.en||{};g.dictionary=Object.assign(g.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(h,g){s.exports=g()}(self,()=>(()=>{var h={3062:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const j=M},903:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const j=M},3143:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},4717:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const j=M},9315:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const j=M},8733:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const j=M},3508:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const j=M},2640:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const j=M},5083:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},4036:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const j=M},3773:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const j=M},3689:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const j=M},1905:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},9773:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const j=M},2347:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},7754:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},4652:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const j=M},7442:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},9292:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},1613:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const j=M},6306:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const j=M},3881:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const j=M},6945:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},4906:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const j=M},5332:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const j=M},6781:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const j=M},5485:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},3949:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},7686:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},7339:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const j=M},9688:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=M},8847:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const j=M},6574:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},4879:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=M},3662:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const j=M},2577:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},1046:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},8793:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=M},4650:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const j=M},7676:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=M},5868:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=M},6764:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const j=M},9695:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const j=M},5542:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const j=M},3332:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const j=M},4793:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const j=M},3488:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const j=M},8506:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const j=M},4921:(w,v,A)=>{A.d(v,{Z:()=>j});var T=A(1799),P=A.n(T),N=A(2609),M=A.n(N)()(P());M.push([w.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const j=M},2609:w=>{w.exports=function(v){var A=[];return A.toString=function(){return this.map(function(T){var P=v(T);return T[2]?"@media ".concat(T[2]," {").concat(P,"}"):P}).join("")},A.i=function(T,P,N){typeof T=="string"&&(T=[[null,T,""]]);var M={};if(N)for(var j=0;j<this.length;j++){var ee=this[j][0];ee!=null&&(M[ee]=!0)}for(var le=0;le<T.length;le++){var _e=[].concat(T[le]);N&&M[_e[0]]||(P&&(_e[2]?_e[2]="".concat(P," and ").concat(_e[2]):_e[2]=P),A.push(_e))}},A}},1799:w=>{function v(T,P){return function(N){if(Array.isArray(N))return N}(T)||function(N,M){var j=N&&(typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"]);if(j!=null){var ee,le,_e=[],te=!0,Y=!1;try{for(j=j.call(N);!(te=(ee=j.next()).done)&&(_e.push(ee.value),!M||_e.length!==M);te=!0);}catch(ie){Y=!0,le=ie}finally{try{te||j.return==null||j.return()}finally{if(Y)throw le}}return _e}}(T,P)||function(N,M){if(!!N){if(typeof N=="string")return A(N,M);var j=Object.prototype.toString.call(N).slice(8,-1);if(j==="Object"&&N.constructor&&(j=N.constructor.name),j==="Map"||j==="Set")return Array.from(N);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return A(N,M)}}(T,P)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(T,P){(P==null||P>T.length)&&(P=T.length);for(var N=0,M=new Array(P);N<P;N++)M[N]=T[N];return M}w.exports=function(T){var P=v(T,4),N=P[1],M=P[3];if(!M)return N;if(typeof btoa=="function"){var j=btoa(unescape(encodeURIComponent(JSON.stringify(M)))),ee="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(j),le="/*# ".concat(ee," */"),_e=M.sources.map(function(te){return"/*# sourceURL=".concat(M.sourceRoot||"").concat(te," */")});return[N].concat(_e).concat([le]).join(`
`)}return[N].join(`
`)}},6062:(w,v,A)=>{var T,P=function(){return T===void 0&&(T=Boolean(window&&document&&document.all&&!window.atob)),T},N=function(){var we={};return function(he){if(we[he]===void 0){var Me=document.querySelector(he);if(window.HTMLIFrameElement&&Me instanceof window.HTMLIFrameElement)try{Me=Me.contentDocument.head}catch{Me=null}we[he]=Me}return we[he]}}(),M=[];function j(we){for(var he=-1,Me=0;Me<M.length;Me++)if(M[Me].identifier===we){he=Me;break}return he}function ee(we,he){for(var Me={},Fe=[],Ke=0;Ke<we.length;Ke++){var Q=we[Ke],nt=he.base?Q[0]+he.base:Q[0],Le=Me[nt]||0,Ut="".concat(nt," ").concat(Le);Me[nt]=Le+1;var Qe=j(Ut),it={css:Q[1],media:Q[2],sourceMap:Q[3]};Qe!==-1?(M[Qe].references++,M[Qe].updater(it)):M.push({identifier:Ut,updater:Ne(it,he),references:1}),Fe.push(Ut)}return Fe}function le(we){var he=document.createElement("style"),Me=we.attributes||{};if(Me.nonce===void 0){var Fe=A.nc;Fe&&(Me.nonce=Fe)}if(Object.keys(Me).forEach(function(Q){he.setAttribute(Q,Me[Q])}),typeof we.insert=="function")we.insert(he);else{var Ke=N(we.insert||"head");if(!Ke)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Ke.appendChild(he)}return he}var _e,te=(_e=[],function(we,he){return _e[we]=he,_e.filter(Boolean).join(`
`)});function Y(we,he,Me,Fe){var Ke=Me?"":Fe.media?"@media ".concat(Fe.media," {").concat(Fe.css,"}"):Fe.css;if(we.styleSheet)we.styleSheet.cssText=te(he,Ke);else{var Q=document.createTextNode(Ke),nt=we.childNodes;nt[he]&&we.removeChild(nt[he]),nt.length?we.insertBefore(Q,nt[he]):we.appendChild(Q)}}function ie(we,he,Me){var Fe=Me.css,Ke=Me.media,Q=Me.sourceMap;if(Ke?we.setAttribute("media",Ke):we.removeAttribute("media"),Q&&typeof btoa<"u"&&(Fe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Q))))," */")),we.styleSheet)we.styleSheet.cssText=Fe;else{for(;we.firstChild;)we.removeChild(we.firstChild);we.appendChild(document.createTextNode(Fe))}}var ke=null,V=0;function Ne(we,he){var Me,Fe,Ke;if(he.singleton){var Q=V++;Me=ke||(ke=le(he)),Fe=Y.bind(null,Me,Q,!1),Ke=Y.bind(null,Me,Q,!0)}else Me=le(he),Fe=ie.bind(null,Me,he),Ke=function(){(function(nt){if(nt.parentNode===null)return!1;nt.parentNode.removeChild(nt)})(Me)};return Fe(we),function(nt){if(nt){if(nt.css===we.css&&nt.media===we.media&&nt.sourceMap===we.sourceMap)return;Fe(we=nt)}else Ke()}}w.exports=function(we,he){(he=he||{}).singleton||typeof he.singleton=="boolean"||(he.singleton=P());var Me=ee(we=we||[],he);return function(Fe){if(Fe=Fe||[],Object.prototype.toString.call(Fe)==="[object Array]"){for(var Ke=0;Ke<Me.length;Ke++){var Q=j(Me[Ke]);M[Q].references--}for(var nt=ee(Fe,he),Le=0;Le<Me.length;Le++){var Ut=j(Me[Le]);M[Ut].references===0&&(M[Ut].updater(),M.splice(Ut,1))}Me=nt}}}}},g={};function m(w){var v=g[w];if(v!==void 0)return v.exports;var A=g[w]={id:w,exports:{}};return h[w](A,A.exports,m),A.exports}m.n=w=>{var v=w&&w.__esModule?()=>w.default:()=>w;return m.d(v,{a:v}),v},m.d=(w,v)=>{for(var A in v)m.o(v,A)&&!m.o(w,A)&&Object.defineProperty(w,A,{enumerable:!0,get:v[A]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),m.o=(w,v)=>Object.prototype.hasOwnProperty.call(w,v),m.nc=void 0;var y={};return(()=>{m.d(y,{default:()=>lv});const w=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),v={isMac:T(w),isWindows:function(i){return i.indexOf("windows")>-1}(w),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(w),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(w),isiOS:function(i){return!!i.match(/iphone|ipad/i)||T(i)&&navigator.maxTouchPoints>0}(w),isAndroid:function(i){return i.indexOf("android")>-1}(w),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(w),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},A=v;function T(i){return i.indexOf("macintosh")>-1}function P(i,e,t,n){t=t||function(p,b){return p===b};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(p,b,_){const C=N(p,b,_);if(C===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const E=M(p,C),I=M(b,C),O=N(E,I,_),R=p.length-O,U=b.length-O;return{firstIndex:C,lastIndexOld:R,lastIndexNew:U}}(o,r,t);return n?function(p,b){const{firstIndex:_,lastIndexOld:C,lastIndexNew:E}=p;if(_===-1)return Array(b).fill("equal");let I=[];return _>0&&(I=I.concat(Array(_).fill("equal"))),E-_>0&&(I=I.concat(Array(E-_).fill("insert"))),C-_>0&&(I=I.concat(Array(C-_).fill("delete"))),E<b&&(I=I.concat(Array(b-E).fill("equal"))),I}(a,r.length):function(p,b){const _=[],{firstIndex:C,lastIndexOld:E,lastIndexNew:I}=b;return I-C>0&&_.push({index:C,type:"insert",values:p.slice(C,I)}),E-C>0&&_.push({index:C+(I-C),type:"delete",howMany:E-C}),_}(r,a)}function N(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function M(i,e){return i.slice(e).reverse()}function j(i,e,t){t=t||function(R,U){return R===U};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return j.fastDiff(i,e,t,!0);let r,a;if(o<n){const R=i;i=e,e=R,r="delete",a="insert"}else r="insert",a="delete";const u=i.length,p=e.length,b=p-u,_={},C={};function E(R){const U=(C[R-1]!==void 0?C[R-1]:-1)+1,K=C[R+1]!==void 0?C[R+1]:-1,oe=U>K?-1:1;_[R+oe]&&(_[R]=_[R+oe].slice(0)),_[R]||(_[R]=[]),_[R].push(U>K?r:a);let me=Math.max(U,K),He=me-R;for(;He<u&&me<p&&t(i[He],e[me]);)He++,me++,_[R].push("equal");return me}let I,O=0;do{for(I=-O;I<b;I++)C[I]=E(I);for(I=b+O;I>b;I--)C[I]=E(I);C[b]=E(b),O++}while(C[b]!==p);return _[b].slice(1)}function ee(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(r=>{if(r in i.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const a=Object.getOwnPropertyDescriptor(t,r);a.enumerable=!1,Object.defineProperty(i.prototype,r,a)})})}j.fastDiff=P;const le=function(){return function i(){i.called=!0}};class _e{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=le(),this.off=le()}}const te=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function Y(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+te[i>>0&255]+te[i>>8&255]+te[i>>16&255]+te[i>>24&255]+te[e>>0&255]+te[e>>8&255]+te[e>>16&255]+te[e>>24&255]+te[t>>0&255]+te[t>>8&255]+te[t>>16&255]+te[t>>24&255]+te[n>>0&255]+te[n>>8&255]+te[n>>16&255]+te[n>>24&255]}const ie={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function ke(i,e){const t=ie.get(e.priority);for(let n=0;n<i.length;n++)if(ie.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}class V extends Error{constructor(e,t,n){super(function(o,r){const a=new WeakSet,u=(_,C)=>{if(typeof C=="object"&&C!==null){if(a.has(C))return`[object ${C.constructor.name}]`;a.add(C)}return C},p=r?` ${JSON.stringify(r,u)}`:"",b=he(o);return o+p+b}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new V(e.message,t);throw n.stack=e.stack,n}}function Ne(i,e){console.warn(...Me(i,e))}function we(i,e){console.error(...Me(i,e))}function he(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function Me(i,e){const t=he(i);return e?[i,e,t]:[i,t]}const Fe="35.4.0",Ke=typeof window=="object"?window:m.g;if(Ke.CKEDITOR_VERSION)throw new V("ckeditor-duplicated-modules",null);Ke.CKEDITOR_VERSION=Fe;const Q=Symbol("listeningTo"),nt=Symbol("emitterId"),Le=Symbol("delegations"),Ut=Qe(Object);function Qe(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(r,...a)=>{o||(o=!0,r.off(),t.call(this,r,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let r,a;this[Q]||(this[Q]={});const u=this[Q];yt(e)||it(e);const p=yt(e);(r=u[p])||(r=u[p]={emitter:e,callbacks:{}}),(a=r.callbacks[t])||(a=r.callbacks[t]=[]),a.push(n),function(b,_,C,E,I){_._addEventListener?_._addEventListener(C,E,I):b._addEventListener.call(_,C,E,I)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[Q];let r=e&&yt(e);const a=o&&r?o[r]:void 0,u=a&&t?a.callbacks[t]:void 0;if(!(!o||e&&!a||t&&!u))if(n)mo(this,e,t,n),u.indexOf(n)!==-1&&(u.length===1?delete a.callbacks[t]:mo(this,e,t,n));else if(u){for(;n=u.pop();)mo(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[Q]}}fire(e,...t){try{const n=e instanceof _e?e:new _e(this,e),o=n.name;let r=un(this,o);if(n.path.push(this),r){const u=[n,...t];r=Array.from(r);for(let p=0;p<r.length&&(r[p].callback.apply(this,u),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[p].callback)),!n.stop.called);p++);}const a=this[Le];if(a){const u=a.get(o),p=a.get("*");u&&Rn(u,n,t),p&&Rn(p,n,t)}return n.return}catch(n){V.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[Le]||(this[Le]=new Map),e.forEach(o=>{const r=this[Le].get(o);r?r.set(t,n):this[Le].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[Le])if(e)if(t){const n=this[Le].get(e);n&&n.delete(t)}else this[Le].delete(e);else this[Le].clear()}_addEventListener(e,t,n){(function(a,u){const p=oo(a);if(p[u])return;let b=u,_=null;const C=[];for(;b!==""&&!p[b];)p[b]={callbacks:[],childEvents:[]},C.push(p[b]),_&&p[b].childEvents.push(_),_=b,b=b.substr(0,b.lastIndexOf(":"));if(b!==""){for(const E of C)E.callbacks=p[b].callbacks.slice();p[b].childEvents.push(_)}})(this,e);const o=$n(this,e),r={callback:t,priority:ie.get(n.priority)};for(const a of o)ke(a,r)}_removeEventListener(e,t){const n=$n(this,e);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==t&&(o.splice(r,1),r--)}}:Ut}function it(i,e){i[nt]||(i[nt]=e||Y())}function yt(i){return i[nt]}function oo(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function $n(i,e){const t=oo(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=$n(i,t.childEvents[o]);n=n.concat(r)}return n}function un(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?un(i,e.substr(0,e.lastIndexOf(":"))):null}function Rn(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new _e(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function mo(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Qe[i]=Ut.prototype[i]});const St=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},X=Symbol("observableProperties"),Te=Symbol("boundObservables"),Be=Symbol("boundProperties"),Ue=Symbol("decoratedMethods"),ht=Symbol("decoratedOriginal"),Ht=Ze(Qe());function Ze(i){return i?class extends i{set(e,t){if(St(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);q(this);const n=this[X];if(e in this&&!n.has(e))throw new V("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const r=n.get(e);let a=this.fire(`set:${e}`,e,o,r);a===void 0&&(a=o),r===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,r))}}),this[e]=t}bind(...e){if(!e.length||!ge(e))throw new V("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new V("observable-bind-duplicate-properties",this);q(this);const t=this[Be];e.forEach(o=>{if(t.has(o))throw new V("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const r={property:o,to:[]};t.set(o,r),n.set(o,r)}),{to:Z,toMany:de,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[X])return;const t=this[Be],n=this[Te];if(e.length){if(!ge(e))throw new V("observable-unbind-wrong-properties",this);e.forEach(o=>{const r=t.get(o);r&&(r.to.forEach(([a,u])=>{const p=n.get(a),b=p[u];b.delete(r),b.size||delete p[u],Object.keys(p).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){q(this);const t=this[e];if(!t)throw new V("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][ht]=t,this[Ue]||(this[Ue]=[]),this[Ue].push(e)}stopListening(e,t,n){if(!e&&this[Ue]){for(const o of this[Ue])this[o]=this[o][ht];delete this[Ue]}super.stopListening(e,t,n)}}:Ht}function q(i){i[X]||(Object.defineProperty(i,X,{value:new Map}),Object.defineProperty(i,Te,{value:new Map}),Object.defineProperty(i,Be,{value:new Map}))}function Z(...i){const e=function(...r){if(!r.length)throw new V("observable-bind-to-parse-error",null);const a={to:[]};let u;return typeof r[r.length-1]=="function"&&(a.callback=r.pop()),r.forEach(p=>{if(typeof p=="string")u.properties.push(p);else{if(typeof p!="object")throw new V("observable-bind-to-parse-error",null);u={observable:p,properties:[]},a.to.push(u)}}),a}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new V("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new V("observable-bind-to-extra-callback",this);var o;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new V("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(r=>{const a=o[Te];let u;a.get(r.observable)||o.listenTo(r.observable,"change",(p,b)=>{u=a.get(r.observable)[b],u&&u.forEach(_=>{Ce(o,_.property)})})}),function(r){let a;r._bindings.forEach((u,p)=>{r._to.forEach(b=>{a=b.properties[u.callback?0:r._bindProperties.indexOf(p)],u.to.push([b.observable,a]),function(_,C,E,I){const O=_[Te],R=O.get(E),U=R||{};U[I]||(U[I]=new Set),U[I].add(C),R||O.set(E,U)}(r._observable,u,b.observable,a)})})}(this),this._bindProperties.forEach(r=>{Ce(this._observable,r)})}function de(i,e,t){if(this._bindings.size>1)throw new V("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(a=>[a,o]);return Array.prototype.concat.apply([],r)}(i,e),t)}function ge(i){return i.every(e=>typeof e=="string")}function Ce(i,e){const t=i[Be].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Ze[i]=Ht.prototype[i]});class ze{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Ve(i){let e=0;for(const t of i)e++;return e}function ve(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function Se(i){return!(!i||!i[Symbol.iterator])}const xe=typeof gi=="object"&&gi&&gi.Object===Object&&gi;var ot=typeof self=="object"&&self&&self.Object===Object&&self;const Ge=xe||ot||Function("return this")(),qe=Ge.Symbol;var at=Object.prototype,Je=at.hasOwnProperty,It=at.toString,kt=qe?qe.toStringTag:void 0;const an=function(i){var e=Je.call(i,kt),t=i[kt];try{i[kt]=void 0;var n=!0}catch{}var o=It.call(i);return n&&(e?i[kt]=t:delete i[kt]),o};var Gt=Object.prototype.toString;const kn=function(i){return Gt.call(i)};var zi=qe?qe.toStringTag:void 0;const Vn=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":zi&&zi in Object(i)?an(i):kn(i)},Kt=Array.isArray,ln=function(i){return i!=null&&typeof i=="object"},so=function(i){return typeof i=="string"||!Kt(i)&&ln(i)&&Vn(i)=="[object String]"};function ji(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const a in t)r.setAttribute(a,t[a]);!so(n)&&Se(n)||(n=[n]);for(let a of n)so(a)&&(a=i.createTextNode(a)),r.appendChild(a);return r}const ma=function(i,e){return function(t){return i(e(t))}},Al=ma(Object.getPrototypeOf,Object);var zc=Function.prototype,jc=Object.prototype,vt=zc.toString,Ru=jc.hasOwnProperty,zu=vt.call(Object);const Ao=function(i){if(!ln(i)||Vn(i)!="[object Object]")return!1;var e=Al(i);if(e===null)return!0;var t=Ru.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&vt.call(t)==zu},ju=function(){this.__data__=[],this.size=0},qo=function(i,e){return i===e||i!=i&&e!=e},ga=function(i,e){for(var t=i.length;t--;)if(qo(i[t][0],e))return t;return-1};var Fu=Array.prototype.splice;const $u=function(i){var e=this.__data__,t=ga(e,i);return!(t<0)&&(t==e.length-1?e.pop():Fu.call(e,t,1),--this.size,!0)},Cl=function(i){var e=this.__data__,t=ga(e,i);return t<0?void 0:e[t][1]},Vu=function(i){return ga(this.__data__,i)>-1},yr=function(i,e){var t=this.__data__,n=ga(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function js(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}js.prototype.clear=ju,js.prototype.delete=$u,js.prototype.get=Cl,js.prototype.has=Vu,js.prototype.set=yr;const ba=js,Ar=function(){this.__data__=new ba,this.size=0},Uu=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},Hu=function(i){return this.__data__.get(i)},qu=function(i){return this.__data__.has(i)},cs=function(i){if(!St(i))return!1;var e=Vn(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Cr=Ge["__core-js_shared__"];var xl=function(){var i=/[^.]+$/.exec(Cr&&Cr.keys&&Cr.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Wu=function(i){return!!xl&&xl in i};var Gu=Function.prototype.toString;const ds=function(i){if(i!=null){try{return Gu.call(i)}catch{}try{return i+""}catch{}}return""};var Bt=/^\[object .+?Constructor\]$/,Ku=Function.prototype,Yu=Object.prototype,_a=Ku.toString,Qu=Yu.hasOwnProperty,wa=RegExp("^"+_a.call(Qu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Zu=function(i){return!(!St(i)||Wu(i))&&(cs(i)?wa:Bt).test(ds(i))},El=function(i,e){return i==null?void 0:i[e]},ni=function(i,e){var t=El(i,e);return Zu(t)?t:void 0},us=ni(Ge,"Map"),Un=ni(Object,"create"),Fc=function(){this.__data__=Un?Un(null):{},this.size=0},Ju=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var Xu=Object.prototype.hasOwnProperty;const eh=function(i){var e=this.__data__;if(Un){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return Xu.call(e,i)?e[i]:void 0};var $c=Object.prototype.hasOwnProperty;const Vc=function(i){var e=this.__data__;return Un?e[i]!==void 0:$c.call(e,i)},Uc=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Un&&e===void 0?"__lodash_hash_undefined__":e,this};function hs(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}hs.prototype.clear=Fc,hs.prototype.delete=Ju,hs.prototype.get=eh,hs.prototype.has=Vc,hs.prototype.set=Uc;const xr=hs,th=function(){this.size=0,this.__data__={hash:new xr,map:new(us||ba),string:new xr}},Dl=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},fs=function(i,e){var t=i.__data__;return Dl(e)?t[typeof e=="string"?"string":"hash"]:t.map},Hc=function(i){var e=fs(this,i).delete(i);return this.size-=e?1:0,e},nh=function(i){return fs(this,i).get(i)},qc=function(i){return fs(this,i).has(i)},Wc=function(i,e){var t=fs(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Fi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Fi.prototype.clear=th,Fi.prototype.delete=Hc,Fi.prototype.get=nh,Fi.prototype.has=qc,Fi.prototype.set=Wc;const ka=Fi,Tl=function(i,e){var t=this.__data__;if(t instanceof ba){var n=t.__data__;if(!us||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new ka(n)}return t.set(i,e),this.size=t.size,this};function No(i){var e=this.__data__=new ba(i);this.size=e.size}No.prototype.clear=Ar,No.prototype.delete=Uu,No.prototype.get=Hu,No.prototype.has=qu,No.prototype.set=Tl;const ps=No,ms=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},Fs=function(){try{var i=ni(Object,"defineProperty");return i({},"",{}),i}catch{}}(),va=function(i,e,t){e=="__proto__"&&Fs?Fs(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var oh=Object.prototype.hasOwnProperty;const ya=function(i,e,t){var n=i[e];oh.call(i,e)&&qo(n,t)&&(t!==void 0||e in i)||va(i,e,t)},gs=function(i,e,t,n){var o=!t;t||(t={});for(var r=-1,a=e.length;++r<a;){var u=e[r],p=n?n(t[u],i[u],u,t,i):void 0;p===void 0&&(p=i[u]),o?va(t,u,p):ya(t,u,p)}return t},Gc=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},Sl=function(i){return ln(i)&&Vn(i)=="[object Arguments]"};var Kc=Object.prototype,ih=Kc.hasOwnProperty,bs=Kc.propertyIsEnumerable;const Er=Sl(function(){return arguments}())?Sl:function(i){return ln(i)&&ih.call(i,"callee")&&!bs.call(i,"callee")},sh=function(){return!1};var Yc=l&&!l.nodeType&&l,Qc=Yc&&!0&&s&&!s.nodeType&&s,Zc=Qc&&Qc.exports===Yc?Ge.Buffer:void 0;const _s=(Zc?Zc.isBuffer:void 0)||sh;var rh=/^(?:0|[1-9]\d*)$/;const Il=function(i,e){var t=typeof i;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&rh.test(i))&&i>-1&&i%1==0&&i<e},Jc=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var vn={};vn["[object Float32Array]"]=vn["[object Float64Array]"]=vn["[object Int8Array]"]=vn["[object Int16Array]"]=vn["[object Int32Array]"]=vn["[object Uint8Array]"]=vn["[object Uint8ClampedArray]"]=vn["[object Uint16Array]"]=vn["[object Uint32Array]"]=!0,vn["[object Arguments]"]=vn["[object Array]"]=vn["[object ArrayBuffer]"]=vn["[object Boolean]"]=vn["[object DataView]"]=vn["[object Date]"]=vn["[object Error]"]=vn["[object Function]"]=vn["[object Map]"]=vn["[object Number]"]=vn["[object Object]"]=vn["[object RegExp]"]=vn["[object Set]"]=vn["[object String]"]=vn["[object WeakMap]"]=!1;const ah=function(i){return ln(i)&&Jc(i.length)&&!!vn[Vn(i)]},hn=function(i){return function(e){return i(e)}};var fn=l&&!l.nodeType&&l,Dr=fn&&!0&&s&&!s.nodeType&&s,Aa=Dr&&Dr.exports===fn&&xe.process;const $s=function(){try{var i=Dr&&Dr.require&&Dr.require("util").types;return i||Aa&&Aa.binding&&Aa.binding("util")}catch{}}();var Ml=$s&&$s.isTypedArray;const Pl=Ml?hn(Ml):ah;var lh=Object.prototype.hasOwnProperty;const Nl=function(i,e){var t=Kt(i),n=!t&&Er(i),o=!t&&!n&&_s(i),r=!t&&!n&&!o&&Pl(i),a=t||n||o||r,u=a?Gc(i.length,String):[],p=u.length;for(var b in i)!e&&!lh.call(i,b)||a&&(b=="length"||o&&(b=="offset"||b=="parent")||r&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Il(b,p))||u.push(b);return u};var Vs=Object.prototype;const Hn=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||Vs)},Bl=ma(Object.keys,Object);var ws=Object.prototype.hasOwnProperty;const Xc=function(i){if(!Hn(i))return Bl(i);var e=[];for(var t in Object(i))ws.call(i,t)&&t!="constructor"&&e.push(t);return e},Us=function(i){return i!=null&&Jc(i.length)&&!cs(i)},Co=function(i){return Us(i)?Nl(i):Xc(i)},ed=function(i,e){return i&&gs(e,Co(e),i)},td=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var nd=Object.prototype.hasOwnProperty;const Ca=function(i){if(!St(i))return td(i);var e=Hn(i),t=[];for(var n in i)(n!="constructor"||!e&&nd.call(i,n))&&t.push(n);return t},$i=function(i){return Us(i)?Nl(i,!0):Ca(i)},od=function(i,e){return i&&gs(e,$i(e),i)};var xo=l&&!l.nodeType&&l,id=xo&&!0&&s&&!s.nodeType&&s,Eo=id&&id.exports===xo?Ge.Buffer:void 0,sd=Eo?Eo.allocUnsafe:void 0;const Tr=function(i,e){if(e)return i.slice();var t=i.length,n=sd?sd(t):new i.constructor(t);return i.copy(n),n},ui=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},Sr=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var a=i[t];e(a,t,i)&&(r[o++]=a)}return r},Hs=function(){return[]};var Sn=Object.prototype.propertyIsEnumerable,ki=Object.getOwnPropertySymbols;const Ir=ki?function(i){return i==null?[]:(i=Object(i),Sr(ki(i),function(e){return Sn.call(i,e)}))}:Hs,xa=function(i,e){return gs(i,Ir(i),e)},Ea=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},rd=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)Ea(e,Ir(i)),i=Al(i);return e}:Hs,ch=function(i,e){return gs(i,rd(i),e)},ad=function(i,e,t){var n=e(i);return Kt(i)?n:Ea(n,t(i))},Mr=function(i){return ad(i,Co,Ir)},Da=function(i){return ad(i,$i,rd)},Vi=ni(Ge,"DataView"),Ol=ni(Ge,"Promise"),qs=ni(Ge,"Set"),Pr=ni(Ge,"WeakMap");var Ta="[object Map]",Sa="[object Promise]",Ll="[object Set]",ld="[object WeakMap]",Ia="[object DataView]",Rl=ds(Vi),dh=ds(us),zl=ds(Ol),Bo=ds(qs),jl=ds(Pr),oi=Vn;(Vi&&oi(new Vi(new ArrayBuffer(1)))!=Ia||us&&oi(new us)!=Ta||Ol&&oi(Ol.resolve())!=Sa||qs&&oi(new qs)!=Ll||Pr&&oi(new Pr)!=ld)&&(oi=function(i){var e=Vn(i),t=e=="[object Object]"?i.constructor:void 0,n=t?ds(t):"";if(n)switch(n){case Rl:return Ia;case dh:return Ta;case zl:return Sa;case Bo:return Ll;case jl:return ld}return e});const Ws=oi;var Fl=Object.prototype.hasOwnProperty;const cd=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Fl.call(i,"index")&&(t.index=i.index,t.input=i.input),t},Ma=Ge.Uint8Array,$l=function(i){var e=new i.constructor(i.byteLength);return new Ma(e).set(new Ma(i)),e},uh=function(i,e){var t=e?$l(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var dd=/\w*$/;const Ui=function(i){var e=new i.constructor(i.source,dd.exec(i));return e.lastIndex=i.lastIndex,e};var ud=qe?qe.prototype:void 0,hd=ud?ud.valueOf:void 0;const Vl=function(i){return hd?Object(hd.call(i)):{}},Pa=function(i,e){var t=e?$l(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},Hi=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return $l(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return uh(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Pa(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return Ui(i);case"[object Symbol]":return Vl(i)}};var Nr=Object.create;const Br=function(){function i(){}return function(e){if(!St(e))return{};if(Nr)return Nr(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),Ul=function(i){return typeof i.constructor!="function"||Hn(i)?{}:Br(Al(i))},hh=function(i){return ln(i)&&Ws(i)=="[object Map]"};var hi=$s&&$s.isMap;const ii=hi?hn(hi):hh,fd=function(i){return ln(i)&&Ws(i)=="[object Set]"};var pd=$s&&$s.isSet;const md=pd?hn(pd):fd;var gd="[object Arguments]",bd="[object Function]",_d="[object Object]",Wt={};Wt[gd]=Wt["[object Array]"]=Wt["[object ArrayBuffer]"]=Wt["[object DataView]"]=Wt["[object Boolean]"]=Wt["[object Date]"]=Wt["[object Float32Array]"]=Wt["[object Float64Array]"]=Wt["[object Int8Array]"]=Wt["[object Int16Array]"]=Wt["[object Int32Array]"]=Wt["[object Map]"]=Wt["[object Number]"]=Wt[_d]=Wt["[object RegExp]"]=Wt["[object Set]"]=Wt["[object String]"]=Wt["[object Symbol]"]=Wt["[object Uint8Array]"]=Wt["[object Uint8ClampedArray]"]=Wt["[object Uint16Array]"]=Wt["[object Uint32Array]"]=!0,Wt["[object Error]"]=Wt[bd]=Wt["[object WeakMap]"]=!1;const ne=function i(e,t,n,o,r,a){var u,p=1&t,b=2&t,_=4&t;if(n&&(u=r?n(e,o,r,a):n(e)),u!==void 0)return u;if(!St(e))return e;var C=Kt(e);if(C){if(u=cd(e),!p)return ui(e,u)}else{var E=Ws(e),I=E==bd||E=="[object GeneratorFunction]";if(_s(e))return Tr(e,p);if(E==_d||E==gd||I&&!r){if(u=b||I?{}:Ul(e),!p)return b?ch(e,od(u,e)):xa(e,ed(u,e))}else{if(!Wt[E])return r?e:{};u=Hi(e,E,p)}}a||(a=new ps);var O=a.get(e);if(O)return O;a.set(e,u),md(e)?e.forEach(function(U){u.add(i(U,t,n,U,e,a))}):ii(e)&&e.forEach(function(U,K){u.set(K,i(U,t,n,K,e,a))});var R=C?void 0:(_?b?Da:Mr:b?$i:Co)(e);return ms(R||e,function(U,K){R&&(U=e[K=U]),ya(u,K,i(U,t,n,K,e,a))}),u},be=function(i,e){return ne(i,5,e=typeof e=="function"?e:void 0)},ue=function(i){return ln(i)&&i.nodeType===1&&!Ao(i)};class st{constructor(e,t){this._config={},t&&this.define(At(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Ao(t))return void this._setObjectToTarget(e,t,o);const r=t.split(".");t=r.pop();for(const a of r)Ao(e[a])||(e[a]={}),e=e[a];if(Ao(n))return Ao(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Ao(e[o])){e=null;break}e=e[o]}return e?At(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function At(i){return be(i,Yt)}function Yt(i){return ue(i)?i:void 0}function gn(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Zt(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const Na=ks(Qe());function ks(i){return i?class extends i{listenTo(e,t,n,o={}){if(gn(e)||Zt(e)){const r={capture:!!o.useCapture,passive:!!o.usePassive},a=this._getProxyEmitter(e,r)||new Wo(e,r);this.listenTo(a,t,n,o)}else super.listenTo(e,t,n,o)}stopListening(e,t,n){if(gn(e)||Zt(e)){const o=this._getAllProxyEmitters(e);for(const r of o)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,o){const r=n[Q];return r&&r[o]?r[o].emitter:null}(this,Or(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Na}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{ks[i]=Na.prototype[i]});class Wo extends Qe(){constructor(e,t){super(),it(this,Or(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Qe().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Qe().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Or(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Y())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Hl;try{Hl={window,document}}catch{Hl={window:{},document:{}}}const Et=Hl;function vs(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function bn(i){return Object.prototype.toString.call(i)=="[object Text]"}function jt(i){return Object.prototype.toString.apply(i)=="[object Range]"}function ys(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const ql=["top","right","bottom","left","width","height"];class yn{constructor(e){const t=jt(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),kd(e)||t)if(t){const n=yn.getDomRangeRects(e);Ba(this,yn.getBoundingRect(n))}else Ba(this,e.getBoundingClientRect());else if(Zt(e)){const{innerWidth:n,innerHeight:o}=e;Ba(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Ba(this,e)}clone(){return new yn(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new yn(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!wd(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!wd(n);){const o=new yn(n),r=t.getIntersection(o);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(const t of ql)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Zt(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=ys(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new yn(o));else{let o=e.startContainer;bn(o)&&(o=o.parentNode);const r=new yn(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new yn(t))}}function Ba(i,e){for(const t of ql)i[t]=e[t]}function wd(i){return!!kd(i)&&i===i.ownerDocument.body}function kd(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}class cn{constructor(e,t){cn._observerInstance||cn._createObserver(),this._element=e,this._callback=t,cn._addElementCallback(e,t),cn._observerInstance.observe(e)}destroy(){cn._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){cn._elementCallbacks||(cn._elementCallbacks=new Map);let n=cn._elementCallbacks.get(e);n||(n=new Set,cn._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=cn._getElementCallbacks(e);n&&(n.delete(t),n.size||(cn._elementCallbacks.delete(e),cn._observerInstance.unobserve(e))),cn._elementCallbacks&&!cn._elementCallbacks.size&&(cn._observerInstance=null,cn._elementCallbacks=null)}static _getElementCallbacks(e){return cn._elementCallbacks?cn._elementCallbacks.get(e):null}static _createObserver(){cn._observerInstance=new Et.window.ResizeObserver(e=>{for(const t of e){const n=cn._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function qi(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function vi(i){return e=>e+i}function x(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function D(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function B(i){return i&&i.nodeType===Node.COMMENT_NODE}function W(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function Ee({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){cs(e)&&(e=e()),cs(n)&&(n=n());const a=function(E){return E&&E.parentNode?E.offsetParent===Et.document.body?null:E.offsetParent:null}(i),u=new yn(i),p=new yn(e);let b;const _=o&&function(E){E=Object.assign({top:0,bottom:0,left:0,right:0},E);const I=new yn(Et.window);return I.top+=E.top,I.height-=E.top,I.bottom-=E.bottom,I.height-=E.bottom,I}(r)||null,C={targetRect:p,elementRect:u,positionedElementAncestor:a,viewportRect:_};if(n||o){const E=n&&new yn(n).getVisible();Object.assign(C,{limiterRect:E,viewportRect:_}),b=function(I,O){const{elementRect:R}=O,U=R.getArea(),K=I.map(He=>new In(He,O)).filter(He=>!!He.name);let oe=0,me=null;for(const He of K){const{limiterIntersectionArea:wt,viewportIntersectionArea:Xt}=He;if(wt===U)return He;const dn=Xt**2+wt**2;dn>oe&&(oe=dn,me=He)}return me}(t,C)||new In(t[0],C)}else b=new In(t[0],C);return b}function dt(i){const{scrollX:e,scrollY:t}=Et.window;return i.clone().moveBy(e,t)}cn._observerInstance=null,cn._elementCallbacks=null;class In{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:a,config:u}=n;this.name=a,this.config=u,this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=dt(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=dt(new yn(t)),o=ys(t);let r=0,a=0;r-=n.left,a-=n.top,r+=t.scrollLeft,a+=t.scrollTop,r-=o.left,a-=o.top,e.moveBy(r,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function zn(i){const e=i.parentNode;e&&e.removeChild(i)}function Xn(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),r=new yn(i).excludeScrollbarsAndBorders();if(![o,n].every(a=>r.contains(a))){let{scrollX:a,scrollY:u}=i;Lp(o,r)?u-=r.top-e.top+t:Oa(n,r)&&(u+=e.bottom-r.bottom+t),Wl(e,r)?a-=r.left-e.left+t:Gl(e,r)&&(a+=e.right-r.right+t),i.scrollTo(a,u)}}function Gs(i,e){const t=Kl(i);let n,o;for(;i!=t.document.body;)o=e(),n=new yn(i).excludeScrollbarsAndBorders(),n.contains(o)||(Lp(o,n)?i.scrollTop-=n.top-o.top:Oa(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Wl(o,n)?i.scrollLeft-=n.left-o.left:Gl(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function Oa(i,e){return i.bottom>e.bottom}function Lp(i,e){return i.top<e.top}function Wl(i,e){return i.left<e.left}function Gl(i,e){return i.right>e.right}function Kl(i){return jt(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function v_(i){if(jt(i)){let e=i.commonAncestorContainer;return bn(e)&&(e=e.parentNode),e}return i.parentNode}function fh(i,e){const t=Kl(i),n=new yn(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,a=new yn(r).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}const y_={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},A_={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ft=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),Do=Object.fromEntries(Object.entries(ft).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function La(i){let e;if(typeof i=="string"){if(e=ft[i.toLowerCase()],!e)throw new V("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?ft.alt:0)+(i.ctrlKey?ft.ctrl:0)+(i.shiftKey?ft.shift:0)+(i.metaKey?ft.cmd:0);return e}function ph(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return La(t.slice(0,-1));const n=La(t);return A.isMac&&n==ft.ctrl?ft.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function mh(i){let e=ph(i);return Object.entries(A.isMac?y_:A_).reduce((t,[n,o])=>((e&ft[n])!=0&&(e&=~ft[n],t+=o),t),"")+(e?Do[e]:"")}function gh(i,e){const t=e==="ltr";switch(i){case ft.arrowleft:return t?"left":"right";case ft.arrowright:return t?"right":"left";case ft.arrowup:return"up";case ft.arrowdown:return"down"}}function eo(i){return Array.isArray(i)?i:[i]}function Yl(i,e,t=1){if(typeof t!="number")throw new V("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Et.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(Et.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(p,b){return!!Et.window.CKEDITOR_TRANSLATIONS[p]&&!!Et.window.CKEDITOR_TRANSLATIONS[p].dictionary[b]}(i,o))return t!==1?e.plural:e.string;const r=Et.window.CKEDITOR_TRANSLATIONS[i].dictionary,a=Et.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(p=>p===1?0:1),u=r[o];return typeof u=="string"?u:u[Number(a(t))]}Et.window.CKEDITOR_TRANSLATIONS||(Et.window.CKEDITOR_TRANSLATIONS={});const bh=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Lr(i){return bh.includes(i)?"rtl":"ltr"}class Ql{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Lr(this.uiLanguage),this.contentLanguageDirection=Lr(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=eo(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(a,u)=>u<r.length?r[u]:a)}(Yl(this.uiLanguage,e,n),t)}}class Oo extends Qe(){constructor(e={},t={}){super();const n=Se(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new V("collection-add-item-invalid-index",this);let n=0;for(const o of e){const r=this._getItemIdBeforeAdding(o),a=t+n;this._items.splice(a,0,o),this._itemMap.set(r,o),this.fire("add",o,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new V("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new V("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,a)=>{const u=t._bindToCollection==this,p=t._bindToInternalToExternalMap.get(r);if(u&&p)this._bindToExternalToInternalMap.set(r,p),this._bindToInternalToExternalMap.set(p,r);else{const b=e(r);if(!b)return void this._skippedIndexesFromExternal.push(a);let _=a;for(const C of this._skippedIndexesFromExternal)a>C&&_--;for(const C of t._skippedIndexesFromExternal)_>=C&&_++;this._bindToExternalToInternalMap.set(r,b),this._bindToInternalToExternalMap.set(b,r),this.add(b,_);for(let C=0;C<t._skippedIndexesFromExternal.length;C++)_<=t._skippedIndexesFromExternal[C]&&t._skippedIndexesFromExternal[C]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,a)=>{const u=this._bindToExternalToInternalMap.get(r);u&&this.remove(u),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((p,b)=>(a<b&&p.push(b-1),a>b&&p.push(b),p),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new V("collection-add-invalid-id",this);if(this.get(n))throw new V("collection-add-item-already-exists",this)}else e[t]=n=Y();return n}_remove(e){let t,n,o,r=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[a])):(o=e,n=o[a],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new V("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const u=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(u),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function jn(i){const e=i.next();return e.done?null:e.value}class go extends ks(Ze()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new V("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Wi{constructor(){this._listener=new(ks())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+La(n),n)})}set(e,t,n={}){const o=ph(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,u)=>{t(u,()=>{u.preventDefault(),u.stopPropagation(),a.stop()}),a.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+La(e),e)}destroy(){this._listener.stopListening()}}function Gi(i){return Se(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}function Rp(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function zp(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const C_=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:\u200D${e})*`,"ug")}();function vd(i,e){const t=String(i).matchAll(C_);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Re extends Ze(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",_h,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",_h),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function _h(i){i.return=!1,i.stop()}class z extends Ze(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Rr,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Rr),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Rr(i){i.return=!1,i.stop()}class Zl extends z{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){ke(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class si extends Qe(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new V("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;(function O(R,U=new Set){R.forEach(K=>{p(K)&&(U.has(K)||(U.add(K),K.pluginName&&!o._availablePlugins.has(K.pluginName)&&o._availablePlugins.set(K.pluginName,K),K.requires&&O(K.requires,U)))})})(e),E(e);const a=[...function O(R,U=new Set){return R.map(K=>p(K)?K:o._availablePlugins.get(K)).reduce((K,oe)=>U.has(oe)?K:(U.add(oe),oe.requires&&(E(oe.requires,oe),O(oe.requires,U).forEach(me=>K.add(me))),K.add(oe)),new Set)}(e.filter(O=>!_(O,t)))];(function(O,R){for(const U of R){if(typeof U!="function")throw new V("plugincollection-replace-plugin-invalid-type",null,{pluginItem:U});const K=U.pluginName;if(!K)throw new V("plugincollection-replace-plugin-missing-name",null,{pluginItem:U});if(U.requires&&U.requires.length)throw new V("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:K});const oe=o._availablePlugins.get(K);if(!oe)throw new V("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:K});const me=O.indexOf(oe);if(me===-1){if(o._contextPlugins.has(oe))return;throw new V("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:K})}if(oe.requires&&oe.requires.length)throw new V("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:K});O.splice(me,1,U),o._availablePlugins.set(K,U)}})(a,n);const u=function(O){return O.map(R=>{let U=o._contextPlugins.get(R);return U=U||new R(r),o._add(R,U),U})}(a);return I(u,"init").then(()=>I(u,"afterInit")).then(()=>u);function p(O){return typeof O=="function"}function b(O){return p(O)&&O.isContextPlugin}function _(O,R){return R.some(U=>U===O||C(O)===U||C(U)===O)}function C(O){return p(O)?O.pluginName||O.name:O}function E(O,R=null){O.map(U=>p(U)?U:o._availablePlugins.get(U)||U).forEach(U=>{(function(K,oe){if(!p(K))throw oe?new V("plugincollection-soft-required",r,{missingPlugin:K,requiredBy:C(oe)}):new V("plugincollection-plugin-not-found",r,{plugin:K})})(U,R),function(K,oe){if(!!b(oe)&&!b(K))throw new V("plugincollection-context-required",r,{plugin:C(K),requiredBy:C(oe)})}(U,R),function(K,oe){if(!!oe&&!!_(K,t))throw new V("plugincollection-required",r,{plugin:C(K),requiredBy:C(oe)})}(U,R)})}function I(O,R){return O.reduce((U,K)=>K[R]?o._contextPlugins.has(K)?U:U.then(K[R].bind(K)):U,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new V("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Ft{constructor(e){this.config=new st(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new si(this,t);const n=this.config.get("language")||{};this.locale=new Ql({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Oo,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new V("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new V("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new V("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class yd extends Ze(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var x_=m(6062),bt=m.n(x_),Ks=m(4717),E_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};bt()(Ks.Z,E_),Ks.Z.locals;const Ad=new WeakMap;function jp(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,a=e.document;Ad.has(a)||(Ad.set(a,new Map),a.registerPostFixer(u=>wh(a,u)),a.on("change:isComposing",()=>{e.change(u=>wh(a,u))},{priority:"high"})),Ad.get(a).set(t,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?t:null}),e.change(u=>wh(a,u))}function D_(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function wh(i,e){const t=Ad.get(i),n=[];let o=!1;for(const[r,a]of t)a.isDirectHost&&(n.push(r),Ki(e,r,a)&&(o=!0));for(const[r,a]of t){if(a.isDirectHost)continue;const u=T_(r);u&&(n.includes(u)||(a.hostElement=u,Ki(e,r,a)&&(o=!0)))}return o}function Ki(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let a=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),a=!0),(o||e.childCount==1)&&function(u,p){if(!u.isAttached()||Array.from(u.getChildren()).some(E=>!E.is("uiElement")))return!1;const _=u.document,C=_.selection.anchor;return!(_.isComposing&&C&&C.parent===u||!p&&_.isFocused&&(!C||C.parent===u))}(r,t.keepOnFocus)?function(u,p){return!p.hasClass("ck-placeholder")&&(u.addClass("ck-placeholder",p),!0)}(i,r)&&(a=!0):D_(i,r)&&(a=!0),a}function T_(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class zr{is(){throw new Error("is() method is abstract")}}const Fp=function(i){return ne(i,4)};class jr extends Qe(zr){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new V("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=ve(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Fp(this);return delete e.parent,e}}jr.prototype.is=function(i){return i==="node"||i==="view:node"};class _n extends jr{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof _n&&(this===e||this.data===e.data)}_clone(){return new _n(this.document,this.data)}}_n.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class ro extends zr{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new V("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new V("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}ro.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class Yi{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=$p(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=$p(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function $p(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return Ao(n)?(n.style!==void 0&&Ne("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&Ne("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),kh(n,r,a=>o.getAttribute(a))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return kh(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return kh(n,o.getStyleNames(!0),r=>o.getStyle(r))}(e.styles,i),!t.styles)?null:t}function kh(i,e,t){const n=function(a){return Array.isArray(a)?a.map(u=>Ao(u)?(u.key!==void 0&&u.value!==void 0||Ne("matcher-pattern-missing-key-or-value",u),[u.key,u.value]):[u,!0]):Ao(a)?Object.entries(a):[[a,!0]]}(i),o=Array.from(e),r=[];if(n.forEach(([a,u])=>{o.forEach(p=>{(function(b,_){return b===!0||b===_||b instanceof RegExp&&_.match(b)})(a,p)&&function(b,_,C){if(b===!0)return!0;const E=C(_);return b===E||b instanceof RegExp&&!!String(E).match(b)}(u,p,t)&&r.push(p)})}),n.length&&!(r.length<n.length))return r}const Cd=function(i){return typeof i=="symbol"||ln(i)&&Vn(i)=="[object Symbol]"};var S_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fr=/^\w*$/;const I_=function(i,e){if(Kt(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Cd(i))||Fr.test(i)||!S_.test(i)||e!=null&&i in Object(e)};function vh(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var a=i.apply(this,n);return t.cache=r.set(o,a)||r,a};return t.cache=new(vh.Cache||ka),t}vh.Cache=ka;const yi=vh;var M_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,P_=/\\(\\)?/g,N_=function(i){var e=yi(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(M_,function(t,n,o,r){e.push(o?r.replace(P_,"$1"):n||t)}),e});const B_=N_,O_=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var yh=qe?qe.prototype:void 0,Ah=yh?yh.toString:void 0;const L_=function i(e){if(typeof e=="string")return e;if(Kt(e))return O_(e,i)+"";if(Cd(e))return Ah?Ah.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Ch=function(i){return i==null?"":L_(i)},Jl=function(i,e){return Kt(i)?i:I_(i,e)?[i]:B_(Ch(i))},Xl=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Ra=function(i){if(typeof i=="string"||Cd(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},Vp=function(i,e){for(var t=0,n=(e=Jl(e,i)).length;i!=null&&t<n;)i=i[Ra(e[t++])];return t&&t==n?i:void 0},xh=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r},R_=function(i,e){return e.length<2?i:Vp(i,xh(e,0,-1))},As=function(i,e){return e=Jl(e,i),(i=R_(i,e))==null||delete i[Ra(Xl(e))]},Eh=function(i,e){return i==null||As(i,e)},Qi=function(i,e,t){var n=i==null?void 0:Vp(i,e);return n===void 0?t:n},Go=function(i,e,t){(t!==void 0&&!qo(i[e],t)||t===void 0&&!(e in i))&&va(i,e,t)},z_=function(i){return function(e,t,n){for(var o=-1,r=Object(e),a=n(e),u=a.length;u--;){var p=a[i?u:++o];if(t(r[p],p,r)===!1)break}return e}}(),Up=function(i){return ln(i)&&Us(i)},xd=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},ec=function(i){return gs(i,$i(i))},Ys=function(i,e,t,n,o,r,a){var u=xd(i,t),p=xd(e,t),b=a.get(p);if(b)Go(i,t,b);else{var _=r?r(u,p,t+"",i,e,a):void 0,C=_===void 0;if(C){var E=Kt(p),I=!E&&_s(p),O=!E&&!I&&Pl(p);_=p,E||I||O?Kt(u)?_=u:Up(u)?_=ui(u):I?(C=!1,_=Tr(p,!0)):O?(C=!1,_=Pa(p,!0)):_=[]:Ao(p)||Er(p)?(_=u,Er(u)?_=ec(u):St(u)&&!cs(u)||(_=Ul(p))):C=!1}C&&(a.set(p,_),o(_,p,n,r,a),a.delete(p)),Go(i,t,_)}},Hp=function i(e,t,n,o,r){e!==t&&z_(t,function(a,u){if(r||(r=new ps),St(a))Ys(e,t,u,n,i,o,r);else{var p=o?o(xd(e,u),a,u+"",e,t,r):void 0;p===void 0&&(p=a),Go(e,u,p)}},$i)},$r=function(i){return i},Ed=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var qp=Math.max;const Wp=function(i,e,t){return e=qp(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=qp(n.length-e,0),a=Array(r);++o<r;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=t(a),Ed(i,this,u)}},bo=function(i){return function(){return i}},Dh=Fs?function(i,e){return Fs(i,"toString",{configurable:!0,enumerable:!1,value:bo(e),writable:!0})}:$r;var Gp=Date.now;const Th=function(i){var e=0,t=0;return function(){var n=Gp(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(Dh),Dd=function(i,e){return Th(Wp(i,e,$r),i+"")},Vr=function(i,e,t){if(!St(t))return!1;var n=typeof e;return!!(n=="number"?Us(t)&&Il(e,t.length):n=="string"&&e in t)&&qo(t[e],i)},Sh=function(i){return Dd(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,a&&Vr(t[0],t[1],a)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var u=t[n];u&&i(e,u,n,r)}return e})},To=Sh(function(i,e,t){Hp(i,e,t)}),Ih=function(i,e,t,n){if(!St(i))return i;for(var o=-1,r=(e=Jl(e,i)).length,a=r-1,u=i;u!=null&&++o<r;){var p=Ra(e[o]),b=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return i;if(o!=a){var _=u[p];(b=n?n(_,p,u):void 0)===void 0&&(b=St(_)?_:Il(e[o+1])?[]:{})}ya(u,p,b),u=u[p]}return i},j_=function(i,e,t){return i==null?i:Ih(i,e,t)};class F_{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,r=0,a=0,u=null;const p=new Map;if(n==="")return p;n.charAt(n.length-1)!=";"&&(n+=";");for(let b=0;b<n.length;b++){const _=n.charAt(b);if(o===null)switch(_){case":":u||(u=n.substr(r,b-r),a=b+1);break;case'"':case"'":o=_;break;case";":{const C=n.substr(a,b-a);u&&p.set(u.trim(),C.trim()),u=null,r=b+1;break}}else _===o&&(o=null)}return p}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(St(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=tc(e);Eh(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!St(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=Qi(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class $_{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(St(t))Mh(n,tc(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:a}=o(t);Mh(n,r,a)}else Mh(n,e,t)}getNormalized(e,t){if(!e)return To({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Qi(t,n);const o=n(e,t);if(o)return o}return Qi(t,tc(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function tc(i){return i.replace("-",".")}function Mh(i,e,t){let n=t;St(t)&&(n=To({},Qi(i,e),t)),j_(i,e,n)}class _o extends jr{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(r){const a=Gi(r);for(const[u,p]of a)p===null?a.delete(u):typeof p!="string"&&a.set(u,String(p));return a}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Ph(this._classes,r),this._attrs.delete("class")}this._styles=new F_(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof _o))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Yi(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,a){return typeof a=="string"?[new _n(r,a)]:(Se(a)||(a=[a]),Array.from(a).map(u=>typeof u=="string"?new _n(r,u):u instanceof ro?new _n(r,u.data):u))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?Ph(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of eo(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of eo(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Ao(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of eo(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Ph(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}_o.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class nc extends _o{constructor(...e){super(...e),this.getFillerOffset=Kp}}function Kp(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}nc.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Qs extends Ze(nc){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Qs.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Yp=Symbol("rootName");class Qp extends Qs{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Yp)}set rootName(e){this._setCustomProperty(Yp,e)}set _name(e){this.name=e}}Qp.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class xs{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new V("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new V("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=$e._createAt(e.startPosition):this.position=$e._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof _n){if(e.isAtEnd)return this.position=$e._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof _o)return this.shallow?e.offset++:e=new $e(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof _n){if(this.singleCharacters)return e=new $e(o,0),this.position=e,this._next();{let r,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,r=new ro(o,0,a),e=$e._createAfter(r)):(r=new ro(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",r,t,e,a)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new ro(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",a,t,e,r)}return e=$e._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof _n){if(e.isAtStart)return this.position=$e._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof _o)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new $e(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof _n){if(this.singleCharacters)return e=new $e(o,o.data.length),this.position=e,this._previous();{let r,a=o.data.length;if(o==this._boundaryStartParent){const u=this.boundaries.start.offset;r=new ro(o,u,o.data.length-u),a=r.data.length,e=$e._createBefore(r)}else r=new ro(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",r,t,e,a)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const u=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-u}e.offset-=r;const a=new ro(n,e.offset,r);return this.position=e,this._formatReturnValue("text",a,t,e,r)}return e=$e._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof ro&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=$e._createAfter(t.textNode):(o=$e._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=$e._createBefore(t.textNode):(o=$e._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class $e extends zr{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Qs);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=$e._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new xs(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=ve(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new xs(e)}clone(){return new $e(this.parent,this.offset)}static _createAt(e,t){if(e instanceof $e)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new V("view-createpositionat-offset-required",n)}return new $e(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new $e(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new V("view-position-after-root",e,{root:e});return new $e(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new $e(e.textNode,e.offsetInText);if(!e.parent)throw new V("view-position-before-root",e,{root:e});return new $e(e.parent,e.index)}}$e.prototype.is=function(i){return i==="position"||i==="view:position"};class _t extends zr{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new xs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Td,{direction:"backward"}),t=this.end.getLastMatchingPosition(Td);return e.parent.is("$text")&&e.isAtStart&&(e=$e._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=$e._createAfter(t.parent)),new _t(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Td);if(e.isAfter(this.end)||e.isEqual(this.end))return new _t(e,e);let t=this.end.getLastMatchingPosition(Td,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new $e(n,0)),o&&o.is("$text")&&(t=new $e(o,o.data.length)),new _t(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new _t(this.start,e.start)),this.containsPosition(e.end)&&t.push(new _t(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new _t(t,n)}return null}getWalker(e={}){return e.boundaries=this,new xs(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new _t(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new xs(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new xs(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new $e(e,t),new $e(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift($e._createBefore(e),t)}}function Td(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}_t.prototype.is=function(i){return i==="range"||i==="view:range"};class Zi extends Qe(zr){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Ve(this.getRanges());if(t!=Ve(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof Zi||t instanceof Sd)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof _t)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof $e)this._setRanges([new _t(t)]),this._setFakeOptions(o);else if(t instanceof jr){const r=!!o&&!!o.backward;let a;if(n===void 0)throw new V("view-selection-setto-required-second-parameter",this);a=n=="in"?_t._createIn(t):n=="on"?_t._createOn(t):new _t($e._createAt(t,n)),this._setRanges([a],r),this._setFakeOptions(o)}else{if(!Se(t))throw new V("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new V("view-selection-setfocus-no-ranges",this);const n=$e._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new _t(n,o),!0):this._addRange(new _t(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof _t))throw new V("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new V("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new _t(e.start,e.end))}}Zi.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Sd extends Qe(zr){constructor(...e){super(),this._selection=new Zi,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Sd.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class Zs extends _e{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Nh=Symbol("bubbling contexts");function oc(i){return class extends i{fire(e,...t){try{const n=e instanceof _e?e:new _e(this,e),o=ja(this);if(!o.size)return;if(za(n,"capturing",this),Ur(o,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),a=r?r.getContainedElement():null,u=!!a&&Boolean(Bh(o,a));let p=a||function(b){if(!b)return null;const _=b.start.parent,C=b.end.parent,E=_.getPath(),I=C.getPath();return E.length>I.length?_:C}(r);if(za(n,"atTarget",p),!u){if(Ur(o,"$text",n,...t))return n.return;za(n,"bubbling",p)}for(;p;){if(p.is("rootElement")){if(Ur(o,"$root",n,...t))return n.return}else if(p.is("element")&&Ur(o,p.name,n,...t))return n.return;if(Ur(o,p,n,...t))return n.return;p=p.parent,za(n,"bubbling",p)}return za(n,"bubbling",this),Ur(o,"$document",n,...t),n.return}catch(n){V.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=eo(n.context||"$document"),r=ja(this);for(const a of o){let u=r.get(a);u||(u=new(Qe()),r.set(a,u)),this.listenTo(u,e,t,n)}}_removeEventListener(e,t){const n=ja(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=oc(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{oc[e]=i.prototype[e]})}function za(i,e,t){i instanceof Zs&&(i._eventPhase=e,i._currentTarget=t)}function Ur(i,e,t,...n){const o=typeof e=="string"?i.get(e):Bh(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Bh(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function ja(i){return i[Nh]||(i[Nh]=new Map),i[Nh]}class Id extends oc(Ze()){constructor(e){super(),this.selection=new Sd,this.roots=new Oo({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Js extends _o{constructor(...e){super(...e),this.getFillerOffset=Zp,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new V("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Zp(){if(Oh(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Oh(i)>1)return null;i=i.parent}return!i||Oh(i)>1?null:this.childCount}function Oh(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}Js.DEFAULT_PRIORITY=10,Js.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Md extends _o{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=V_}_insertChild(e,t){if(t&&(t instanceof jr||Array.from(t).length>0))throw new V("view-emptyelement-cannot-add",[this,t]);return 0}}function V_(){return null}Md.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Fa extends _o{constructor(...e){super(...e),this.getFillerOffset=Lh}_insertChild(e,t){if(t&&(t instanceof jr||Array.from(t).length>0))throw new V("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function Jp(i){i.document.on("arrowKey",(e,t)=>function(n,o,r){if(o.keyCode==ft.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),u=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(u||o.shiftKey){const p=a.focusNode,b=a.focusOffset,_=r.domPositionToView(p,b);if(_===null)return;let C=!1;const E=_.getLastMatchingPosition(I=>(I.item.is("uiElement")&&(C=!0),!(!I.item.is("uiElement")&&!I.item.is("attributeElement"))));if(C){const I=r.viewPositionToDom(E);u?a.collapse(I.parent,I.offset):a.extend(I.parent,I.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function Lh(){return null}Fa.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Rh extends _o{constructor(...e){super(...e),this.getFillerOffset=zh}_insertChild(e,t){if(t&&(t instanceof jr||Array.from(t).length>0))throw new V("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function zh(){return null}Rh.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Dt extends Qe(zr){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,a){return typeof a=="string"?[new _n(r,a)]:(Se(a)||(a=[a]),Array.from(a).map(u=>typeof u=="string"?new _n(r,u):u instanceof ro?new _n(r,u.data):u))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}Dt.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class Xp{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new Dt(this.document,e)}createText(e){return new _n(this.document,e)}createAttributeElement(e,t,n={}){const o=new Js(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;Ao(n)?o=n:r=n;const a=new nc(this.document,e,t,r);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const o=new Qs(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Md(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Fa(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new Rh(this.document,e,t);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ao(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof $e?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new V("view-writer-break-non-container-element",this.document);if(!t.parent)throw new V("view-writer-break-root",this.document);if(e.isAtStart)return $e._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert($e._createAfter(t),n);const o=new _t(e,$e._createAt(t,"end")),r=new $e(n,0);this.move(o,r)}return $e._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,u=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new $e(a,u))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return em(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const a=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new $e(o,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new V("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof _n?$e._createAt(o,"end"):$e._createAt(t,"end");return this.move(_t._createIn(n),$e._createAt(t,"end")),this.remove(_t._createOn(n)),r}insert(e,t){tm(t=Se(t)?[...t]:[t],this.document);const n=t.reduce((a,u)=>{const p=a[a.length-1],b=!u.is("uiElement");return p&&p.breakAttributes==b?p.nodes.push(u):a.push({breakAttributes:b,nodes:[u]}),a},[]);let o=null,r=e;for(const{nodes:a,breakAttributes:u}of n){const p=this._insertNodes(r,a,u);o||(o=p.start),r=p.end}return o?new _t(o,r):new _t(e)}remove(e){const t=e instanceof _t?e:_t._createOn(e);if(Hr(t,this.document),t.isCollapsed)return new Dt(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,a=o.offset-n.offset,u=r._removeChildren(n.offset,a);for(const b of u)this._removeFromClonedElementsGroup(b);const p=this.mergeAttributes(n);return t.start=p,t.end=p.clone(),new Dt(this.document,u)}clear(e,t){Hr(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let a;if(r.is("element")&&t.isSimilar(r))a=_t._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const u=r.getAncestors().find(p=>p.is("element")&&t.isSimilar(p));u&&(a=_t._createIn(u))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Js))throw new V("view-writer-wrap-invalid-attribute",this.document);if(Hr(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new _t(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Js))throw new V("view-writer-unwrap-invalid-attribute",this.document);if(Hr(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,a=this._unwrapChildren(r,n.offset,o.offset,t),u=this.mergeAttributes(a.start);u.isEqual(a.start)||a.end.offset--;const p=this.mergeAttributes(a.end);return new _t(u,p)}rename(e,t){const n=new nc(this.document,e,t.getAttributes());return this.insert($e._createAfter(t),n),this.move(_t._createIn(t),$e._createAt(n,0)),this.remove(_t._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return $e._createAt(e,t)}createPositionAfter(e){return $e._createAfter(e)}createPositionBefore(e){return $e._createBefore(e)}createRange(...e){return new _t(...e)}createRangeOn(e){return _t._createOn(e)}createRangeIn(e){return _t._createIn(e)}createSelection(...e){return new Zi(...e)}createSlot(e){if(!this._slotFactory)throw new V("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,r;if(o=n?jh(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new V("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?$h(e):e;const a=o._insertChild(r.offset,t);for(const _ of t)this._addToClonedElementsGroup(_);const u=r.getShiftedBy(a),p=this.mergeAttributes(r);p.isEqual(r)||u.offset--;const b=this.mergeAttributes(u);return new _t(p,b)}_wrapChildren(e,t,n,o){let r=t;const a=[];for(;r<n;){const p=e.getChild(r),b=p.is("$text"),_=p.is("attributeElement");if(_&&this._wrapAttributeElement(o,p))a.push(new $e(e,r));else if(b||!_||ic(o,p)){const C=o._clone();p._remove(),C._appendChild(p),e._insertChild(r,C),this._addToClonedElementsGroup(C),a.push(new $e(e,r))}else this._wrapChildren(p,0,p.childCount,o);r++}let u=0;for(const p of a)p.offset-=u,p.offset!=t&&(this.mergeAttributes(p).isEqual(p)||(u++,n--));return _t._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const a=[];for(;r<n;){const p=e.getChild(r);if(p.is("attributeElement"))if(p.isSimilar(o)){const b=p.getChildren(),_=p.childCount;p._remove(),e._insertChild(r,b),this._removeFromClonedElementsGroup(p),a.push(new $e(e,r),new $e(e,r+_)),r+=_,n+=_-1}else this._unwrapAttributeElement(o,p)?(a.push(new $e(e,r),new $e(e,r+1)),r++):(this._unwrapChildren(p,0,p.childCount,o),r++);else r++}let u=0;for(const p of a)p.offset-=u,!(p.offset==t||p.offset==n)&&(this.mergeAttributes(p).isEqual(p)||(u++,n--));return _t._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,a=this._wrapChildren(r,n.offset,o.offset,t),u=this.mergeAttributes(a.start);u.isEqual(a.start)||a.end.offset--;const p=this.mergeAttributes(a.end);return new _t(u,p)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Fh(e.clone());e.parent.is("$text")&&(e=$h(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new _t(e,e.getShiftedBy(1));this.wrap(o,t);const r=new $e(n.parent,n.index);n._remove();const a=r.nodeBefore,u=r.nodeAfter;return a instanceof _n&&u instanceof _n?em(a,u):Fh(r)}_wrapAttributeElement(e,t){if(!Vh(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Vh(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(Hr(e,this.document),e.isCollapsed){const p=this._breakAttributes(e.start,t);return new _t(p,p)}const r=this._breakAttributes(o,t),a=r.parent.childCount,u=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-a,new _t(u,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new V("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new V("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new V("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&$a(o.parent)||$a(o))return e.clone();if(o.is("$text"))return this._breakAttributes($h(e),t);if(n==o.childCount){const r=new $e(o.parent,o.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new $e(o.parent,o.index);return this._breakAttributes(r,t)}{const r=o.index+1,a=o._clone();o.parent._insertChild(r,a),this._addToClonedElementsGroup(a);const u=o.childCount-n,p=o._removeChildren(n,u);a._appendChild(p);const b=new $e(o.parent,r);return this._breakAttributes(b,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function jh(i){let e=i.parent;for(;!$a(e);){if(!e)return;e=e.parent}return e}function ic(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function Fh(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new $e(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new $e(t,0):i}function $h(i){if(i.offset==i.parent.data.length)return new $e(i.parent.parent,i.parent.index+1);if(i.offset===0)return new $e(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new _n(i.root.document,e)),new $e(i.parent.parent,i.parent.index+1)}function em(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new $e(i,t)}const fi=[_n,Js,nc,Md,Rh,Fa];function tm(i,e){for(const t of i){if(!fi.some(n=>t instanceof n))throw new V("view-writer-insert-invalid-node-type",e);t.is("$text")||tm(t.getChildren(),e)}}function $a(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Hr(i,e){const t=jh(i.start),n=jh(i.end);if(!t||!n||t!==n)throw new V("view-writer-invalid-range-container",e)}function Vh(i,e){return i.id===null&&e.id===null}const Uh=i=>i.createTextNode("\xA0"),Ko=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},Es=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Va="\u2060".repeat(7);function Yo(i){return bn(i)&&i.data.substr(0,7)===Va}function Xs(i){return i.data.length==7&&Yo(i)}function Hh(i){return Yo(i)?i.data.slice(7):i.data}function qh(i,e){if(e.keyCode==ft.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Yo(n)&&o<=7&&t.collapse(n,0)}}}var Wh=m(9315),Gh={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};bt()(Wh.Z,Gh),Wh.Z.locals;class Kh extends Ze(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),A.isBlink&&!A.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new V("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!A.isAndroid)return;let e=null;const t=!(A.isBlink&&!A.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=$e._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Yo(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Ds(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),r=this._findReplaceActions(o,t,n);if(r.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const u of r)if(u==="replace"){const p=a.equal+a.insert,b=a.equal+a.delete,_=e.getChild(p);!_||_.is("uiElement")||_.is("rawElement")||this._updateElementMappings(_,t[b]),zn(n[p]),a.equal++}else a[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?$e._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&bn(t.parent)&&Yo(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Yo(e))throw new V("view-renderer-filler-was-lost",this);Xs(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const u=a.findAncestor(p=>p.hasAttribute("contenteditable"));return!u||u.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof _n||r instanceof _n)&&(!A.isAndroid||!o&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(o=Va+o),Yh(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(A.isAndroid){let C=null;for(const E of Array.from(n.childNodes)){if(C&&bn(C)&&bn(E)){n.normalize();break}C=E}}const o=t.inlineFillerPosition,r=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&Ds(n.ownerDocument,a,o.offset);const u=this._diffNodeLists(r,a),p=A.isAndroid?this._findReplaceActions(u,r,a,{replaceText:!0}):u;let b=0;const _=new Set;for(const C of p)C==="delete"?(_.add(r[b]),zn(r[b])):C!=="equal"&&C!=="replace"||b++;b=0;for(const C of p)C==="insert"?(D(n,b,a[b]),b++):C==="replace"?(Yh(r[b],a[b].data),b++):C==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[b])),b++);for(const C of _)C.parentNode||this.domConverter.unbindDomElement(C)}_diffNodeLists(e,t){return e=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(e,this._fakeSelectionContainer),j(e,t,om.bind(null,this.domConverter))}_findReplaceActions(e,t,n,o={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],a=[],u=[];const p={equal:0,insert:0,delete:0};for(const b of e)b==="insert"?u.push(n[p.equal+p.insert]):b==="delete"?a.push(t[p.equal+p.delete]):(r=r.concat(j(a,u,o.replaceText?Ts:nm).map(_=>_==="equal"?"replace":_)),r.push("equal"),a=[],u=[]),p[b]++;return r.concat(j(a,u,o.replaceText?Ts:nm).map(b=>b==="equal"?"replace":b))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(A.isBlink&&!A.isAndroid&&this.isSelecting&&!this.markedChildren.size||this._isFocusChanging)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&A.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const u=a.createElement("div");return u.className="ck-fake-selection-container",Object.assign(u.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),u.textContent="\xA0",u}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),A.isGecko&&function(r,a){const u=r.parent;if(u.nodeType!=Node.ELEMENT_NODE||r.offset!=u.childNodes.length-1)return;const p=u.childNodes[r.offset];p&&p.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Ds(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(bn(o))return o.data=Va+o.data,o;{const r=i.createTextNode(Va);return Array.isArray(e)?n.splice(t,0,r):D(e,t,r),r}}function nm(i,e){return gn(i)&&gn(e)&&!bn(i)&&!bn(e)&&!B(i)&&!B(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function Ts(i,e){return gn(i)&&gn(e)&&bn(i)&&bn(e)}function om(i,e,t){return e===t||(bn(e)&&bn(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function Yh(i,e){const t=i.data;if(t==e)return;const n=P(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const Qh=Es(Et.document),U_=Uh(Et.document),H_=Ko(Et.document),Pd="data-ck-unsafe-attribute-",Zh="data-ck-unsafe-element";class sc{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Et.document:Et.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Yi,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Zi(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),u=[];let p;for(;p=a.nextNode();)u.push(p);for(const b of u){for(const C of b.getAttributeNames())this.setDomElementAttribute(b,C,b.getAttribute(C));const _=b.tagName.toLowerCase();this._shouldRenameElement(_)&&(Xh(_),b.replaceWith(this._createReplacementDomElement(_,b)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Xh(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||Ne("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(Pd+t)&&r&&e.removeAttribute(Pd+t),e.setAttribute(r?t:Pd+t,n)}removeDomElementAttribute(e,t){t!=Zh&&(e.removeAttribute(t),e.removeAttribute(Pd+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren()){n===o&&(yield this._getBlockFiller());const a=r.is("element")&&r.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(a&&Ne("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Yo(n)&&(o+=7),{parent:n,offset:o}}{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!o)return null;n=o.parentNode,r=o.nextSibling}return bn(r)&&Yo(r)?{parent:r,offset:7}:{parent:n,offset:o?x(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(B(e)&&t.skipComments)return null;if(bn(e)){if(Xs(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new _n(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Dt(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const r=e.attributes;if(r)for(let a=r.length,u=0;u<a;u++)o._setAttribute(r[u].name,r[u].value);if(this._isViewElementWithRawContent(o,t)||B(e)){const a=B(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))o._appendChild(r);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],r=this.domToView(o,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;bn(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),a=this.domRangeToView(r);a&&n.push(a)}return new Zi(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new _t(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,x(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return $e._createBefore(n);if(bn(e)){if(Xs(e))return this.domPositionToView(e.parentNode,x(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(Yo(e)&&(r-=7,r=r<0?0:r),new $e(o,r)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new $e(o,0)}else{const o=e.childNodes[t-1];if(bn(o)&&Xs(o))return this.domPositionToView(o.parentNode,x(o));const r=bn(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new $e(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Xs(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof _n?r:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof _n?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Et.window,r=[];im(t,a=>{const{scrollLeft:u,scrollTop:p}=a;r.push([u,p])}),t.focus(),im(t,a=>{const[u,p]=r.shift();a.scrollLeft=u,a.scrollTop=p}),Et.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(Qh):!(e.tagName!=="BR"||!Jh(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(H_)||function(t,n){return t.isEqualNode(U_)&&Jh(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=vs(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Uh(this._domDocument);case"markedNbsp":return Ko(this._domDocument);case"br":return Es(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(bn(e)&&Yo(e)&&t<7||this.isElement(e)&&Yo(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(b,_){return vs(b).some(E=>E.tagName&&_.includes(E.tagName.toLowerCase()))}(e,this.preElements))return Hh(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,o);r&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Hh(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const u=o&&this.isElement(o)&&o.tagName!="BR",p=o&&bn(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||u||p)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Yo(e)}_getTouchingInlineViewNode(e,t){const n=new xs({startPosition:t?$e._createAfter(e):$e._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let r=!0,a=e;do if(!r&&a[n]?a=a[n]:a[o]?(a=a[o],r=!1):(a=a.parentNode,r=!0),!a||this._isBlockElement(a))return null;while(!bn(a)&&a.tagName!="BR"&&!this._isInlineObjectElement(a));return a}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(B(e))return new Fa(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new _o(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Zh,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function im(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Jh(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Xh(i){i==="script"&&Ne("domconverter-unsafe-script-element-detected"),i==="style"&&Ne("domconverter-unsafe-style-element-detected")}class On extends ks(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Ai=Sh(function(i,e){gs(e,$i(e),i)});class Ua{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Ai(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class er extends On{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Ua(this.view,t,n))}}class Nd extends er{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return La(this)}};this.fire(e.type,e,t)}}const tr=function(){return Ge.Date.now()};var sm=/\s/;const rm=function(i){for(var e=i.length;e--&&sm.test(i.charAt(e)););return e};var q_=/^\s+/;const am=function(i){return i&&i.slice(0,rm(i)+1).replace(q_,"")};var Ha=/^[-+]0x[0-9a-f]+$/i,rc=/^0b[01]+$/i,W_=/^0o[0-7]+$/i,lm=parseInt;const ef=function(i){if(typeof i=="number")return i;if(Cd(i))return NaN;if(St(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=St(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=am(i);var t=rc.test(i);return t||W_.test(i)?lm(i.slice(2),t?2:8):Ha.test(i)?NaN:+i};var Bd=Math.max,cm=Math.min;const nr=function(i,e,t){var n,o,r,a,u,p,b=0,_=!1,C=!1,E=!0;if(typeof i!="function")throw new TypeError("Expected a function");function I(me){var He=n,wt=o;return n=o=void 0,b=me,a=i.apply(wt,He)}function O(me){return b=me,u=setTimeout(U,e),_?I(me):a}function R(me){var He=me-p;return p===void 0||He>=e||He<0||C&&me-b>=r}function U(){var me=tr();if(R(me))return K(me);u=setTimeout(U,function(He){var wt=e-(He-p);return C?cm(wt,r-(He-b)):wt}(me))}function K(me){return u=void 0,E&&n?I(me):(n=o=void 0,a)}function oe(){var me=tr(),He=R(me);if(n=arguments,o=this,p=me,He){if(u===void 0)return O(p);if(C)return clearTimeout(u),u=setTimeout(U,e),I(p)}return u===void 0&&(u=setTimeout(U,e)),a}return e=ef(e)||0,St(t)&&(_=!!t.leading,r=(C="maxWait"in t)?Bd(ef(t.maxWait)||0,e):r,E="trailing"in t?!!t.trailing:E),oe.cancel=function(){u!==void 0&&clearTimeout(u),b=0,n=p=o=u=void 0},oe.flush=function(){return u===void 0?a:K(tr())},oe};class tf extends On{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=nr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Zi(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ft.arrowleft&&e!=ft.arrowup||n.setTo(n.getFirstPosition()),e!=ft.arrowright&&e!=ft.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const Od=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},G_=function(i){return this.__data__.has(i)};function ac(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new ka;++e<t;)this.add(i[e])}ac.prototype.add=ac.prototype.push=Od,ac.prototype.has=G_;const Ld=ac,dm=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},nf=function(i,e){return i.has(e)},um=function(i,e,t,n,o,r){var a=1&t,u=i.length,p=e.length;if(u!=p&&!(a&&p>u))return!1;var b=r.get(i),_=r.get(e);if(b&&_)return b==e&&_==i;var C=-1,E=!0,I=2&t?new Ld:void 0;for(r.set(i,e),r.set(e,i);++C<u;){var O=i[C],R=e[C];if(n)var U=a?n(R,O,C,e,i,r):n(O,R,C,i,e,r);if(U!==void 0){if(U)continue;E=!1;break}if(I){if(!dm(e,function(K,oe){if(!nf(I,oe)&&(O===K||o(O,K,t,n,r)))return I.push(oe)})){E=!1;break}}else if(O!==R&&!o(O,R,t,n,r)){E=!1;break}}return r.delete(i),r.delete(e),E},hm=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},Ss=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var of=qe?qe.prototype:void 0,Rd=of?of.valueOf:void 0;const K_=function(i,e,t,n,o,r,a){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!r(new Ma(i),new Ma(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qo(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var u=hm;case"[object Set]":var p=1&n;if(u||(u=Ss),i.size!=e.size&&!p)return!1;var b=a.get(i);if(b)return b==e;n|=2,a.set(i,e);var _=um(u(i),u(e),n,o,r,a);return a.delete(i),_;case"[object Symbol]":if(Rd)return Rd.call(i)==Rd.call(e)}return!1};var fm=Object.prototype.hasOwnProperty;const Y_=function(i,e,t,n,o,r){var a=1&t,u=Mr(i),p=u.length;if(p!=Mr(e).length&&!a)return!1;for(var b=p;b--;){var _=u[b];if(!(a?_ in e:fm.call(e,_)))return!1}var C=r.get(i),E=r.get(e);if(C&&E)return C==e&&E==i;var I=!0;r.set(i,e),r.set(e,i);for(var O=a;++b<p;){var R=i[_=u[b]],U=e[_];if(n)var K=a?n(U,R,_,e,i,r):n(R,U,_,i,e,r);if(!(K===void 0?R===U||o(R,U,t,n,r):K)){I=!1;break}O||(O=_=="constructor")}if(I&&!O){var oe=i.constructor,me=e.constructor;oe==me||!("constructor"in i)||!("constructor"in e)||typeof oe=="function"&&oe instanceof oe&&typeof me=="function"&&me instanceof me||(I=!1)}return r.delete(i),r.delete(e),I};var pm="[object Arguments]",Ji="[object Array]",qa="[object Object]",zd=Object.prototype.hasOwnProperty;const sf=function(i,e,t,n,o,r){var a=Kt(i),u=Kt(e),p=a?Ji:Ws(i),b=u?Ji:Ws(e),_=(p=p==pm?qa:p)==qa,C=(b=b==pm?qa:b)==qa,E=p==b;if(E&&_s(i)){if(!_s(e))return!1;a=!0,_=!1}if(E&&!_)return r||(r=new ps),a||Pl(i)?um(i,e,t,n,o,r):K_(i,e,p,t,n,o,r);if(!(1&t)){var I=_&&zd.call(i,"__wrapped__"),O=C&&zd.call(e,"__wrapped__");if(I||O){var R=I?i.value():i,U=O?e.value():e;return r||(r=new ps),o(R,U,t,n,r)}}return!!E&&(r||(r=new ps),Y_(i,e,t,n,o,r))},lc=function i(e,t,n,o,r){return e===t||(e==null||t==null||!ln(e)&&!ln(t)?e!=e&&t!=t:sf(e,t,n,o,i,r))},Wa=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?lc(i,e,void 0,t):!!n};class pt extends On{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const a of e){const u=t.mapDomToView(a.target);u&&(u.is("uiElement")||u.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||o.add(u))}for(const a of e){const u=t.mapDomToView(a.target);if((!u||!u.is("uiElement")&&!u.is("rawElement"))&&a.type==="characterData"){const p=t.findCorrespondingViewText(a.target);p&&!o.has(p.parent)?n.add(p):!p&&Yo(a.target)&&o.add(t.mapDomToView(a.target.parentNode))}}let r=!1;for(const a of n)r=!0,this.renderer.markToSync("text",a);for(const a of o){const u=t.mapViewToDom(a),p=Array.from(a.getChildren()),b=Array.from(t.domChildrenToView(u,{withChildren:!1}));Wa(p,b,jd)||(r=!0,this.renderer.markToSync("children",a))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function jd(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class rf extends On{constructor(e){super(e),this.mutationObserver=e.getObserver(pt),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=nr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=nr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,r)=>{this.document.isComposing&&!A.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document._isFocusChanging=!1,this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class qr extends er{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,t._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{t._isFocusChanging=!1,e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;r!==null&&r!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Q_ extends er{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Fd{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class mm extends er{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let r=null,a=null,u=[];if(e.dataTransfer&&(r=new Fd(e.dataTransfer)),e.data!==null?a=e.data:r&&(a=r.getData("text/plain")),o.selection.isFake)u=Array.from(o.selection.getRanges());else if(t.length)u=t.map(p=>n.domConverter.domRangeToView(p));else if(A.isAndroid){const p=e.target.ownerDocument.defaultView.getSelection();u=Array.from(n.domConverter.domSelectionToView(p).getRanges())}if(A.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(u[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`;else{let t=null;for(const n of i.getChildren()){const o=iu(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(jo.includes(t.name)||jo.includes(n.name)?e+=`
`:e+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(s,l){(function(h,g){s.exports=g()})(ul,function(){const h="SweetAlert2:",g=x=>{const D=[];for(let B=0;B<x.length;B++)D.indexOf(x[B])===-1&&D.push(x[B]);return D},m=x=>x.charAt(0).toUpperCase()+x.slice(1),y=x=>Array.prototype.slice.call(x),w=x=>{console.warn("".concat(h," ").concat(typeof x=="object"?x.join(" "):x))},v=x=>{console.error("".concat(h," ").concat(x))},A=[],T=x=>{A.includes(x)||(A.push(x),w(x))},P=(x,D)=>{T('"'.concat(x,'" is deprecated and will be removed in the next major release. Please use "').concat(D,'" instead.'))},N=x=>typeof x=="function"?x():x,M=x=>x&&typeof x.toPromise=="function",j=x=>M(x)?x.toPromise():Promise.resolve(x),ee=x=>x&&Promise.resolve(x)===x,le={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},_e=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],te={},Y=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ie=x=>Object.prototype.hasOwnProperty.call(le,x),ke=x=>_e.indexOf(x)!==-1,V=x=>te[x],Ne=x=>{ie(x)||w('Unknown parameter "'.concat(x,'"'))},we=x=>{Y.includes(x)&&w('The parameter "'.concat(x,'" is incompatible with toasts'))},he=x=>{V(x)&&P(x,V(x))},Me=x=>{!x.backdrop&&x.allowOutsideClick&&w('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const D in x)Ne(D),x.toast&&we(D),he(D)},Fe="swal2-",Ke=x=>{const D={};for(const B in x)D[x[B]]=Fe+x[B];return D},Q=Ke(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),nt=Ke(["success","warning","info","question","error"]),Le=()=>document.body.querySelector(".".concat(Q.container)),Ut=x=>{const D=Le();return D?D.querySelector(x):null},Qe=x=>Ut(".".concat(x)),it=()=>Qe(Q.popup),yt=()=>Qe(Q.icon),oo=()=>Qe(Q.title),$n=()=>Qe(Q["html-container"]),un=()=>Qe(Q.image),Rn=()=>Qe(Q["progress-steps"]),mo=()=>Qe(Q["validation-message"]),St=()=>Ut(".".concat(Q.actions," .").concat(Q.confirm)),X=()=>Ut(".".concat(Q.actions," .").concat(Q.deny)),Te=()=>Qe(Q["input-label"]),Be=()=>Ut(".".concat(Q.loader)),Ue=()=>Ut(".".concat(Q.actions," .").concat(Q.cancel)),ht=()=>Qe(Q.actions),Ht=()=>Qe(Q.footer),Ze=()=>Qe(Q["timer-progress-bar"]),q=()=>Qe(Q.close),Z=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,de=()=>{const x=y(it().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((B,W)=>{const Ee=parseInt(B.getAttribute("tabindex")),dt=parseInt(W.getAttribute("tabindex"));return Ee>dt?1:Ee<dt?-1:0}),D=y(it().querySelectorAll(Z)).filter(B=>B.getAttribute("tabindex")!=="-1");return g(x.concat(D)).filter(B=>Kt(B))},ge=()=>!Se(document.body,Q["toast-shown"])&&!Se(document.body,Q["no-backdrop"]),Ce=()=>it()&&Se(it(),Q.toast),ze=()=>it().hasAttribute("data-loading"),Ve={previousBodyPadding:null},ve=(x,D)=>{if(x.textContent="",D){const W=new DOMParser().parseFromString(D,"text/html");y(W.querySelector("head").childNodes).forEach(Ee=>{x.appendChild(Ee)}),y(W.querySelector("body").childNodes).forEach(Ee=>{x.appendChild(Ee)})}},Se=(x,D)=>{if(!D)return!1;const B=D.split(/\s+/);for(let W=0;W<B.length;W++)if(!x.classList.contains(B[W]))return!1;return!0},xe=(x,D)=>{y(x.classList).forEach(B=>{!Object.values(Q).includes(B)&&!Object.values(nt).includes(B)&&!Object.values(D.showClass).includes(B)&&x.classList.remove(B)})},ot=(x,D,B)=>{if(xe(x,D),D.customClass&&D.customClass[B]){if(typeof D.customClass[B]!="string"&&!D.customClass[B].forEach)return w("Invalid type of customClass.".concat(B,'! Expected string or iterable object, got "').concat(typeof D.customClass[B],'"'));Je(x,D.customClass[B])}},Ge=(x,D)=>{if(!D)return null;switch(D){case"select":case"textarea":case"file":return x.querySelector(".".concat(Q.popup," > .").concat(Q[D]));case"checkbox":return x.querySelector(".".concat(Q.popup," > .").concat(Q.checkbox," input"));case"radio":return x.querySelector(".".concat(Q.popup," > .").concat(Q.radio," input:checked"))||x.querySelector(".".concat(Q.popup," > .").concat(Q.radio," input:first-child"));case"range":return x.querySelector(".".concat(Q.popup," > .").concat(Q.range," input"));default:return x.querySelector(".".concat(Q.popup," > .").concat(Q.input))}},qe=x=>{if(x.focus(),x.type!=="file"){const D=x.value;x.value="",x.value=D}},at=(x,D,B)=>{!x||!D||(typeof D=="string"&&(D=D.split(/\s+/).filter(Boolean)),D.forEach(W=>{Array.isArray(x)?x.forEach(Ee=>{B?Ee.classList.add(W):Ee.classList.remove(W)}):B?x.classList.add(W):x.classList.remove(W)}))},Je=(x,D)=>{at(x,D,!0)},It=(x,D)=>{at(x,D,!1)},kt=(x,D)=>{const B=y(x.childNodes);for(let W=0;W<B.length;W++)if(Se(B[W],D))return B[W]},an=(x,D,B)=>{B==="".concat(parseInt(B))&&(B=parseInt(B)),B||parseInt(B)===0?x.style[D]=typeof B=="number"?"".concat(B,"px"):B:x.style.removeProperty(D)},Gt=function(x){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";x.style.display=D},kn=x=>{x.style.display="none"},zi=(x,D,B,W)=>{const Ee=x.querySelector(D);Ee&&(Ee.style[B]=W)},Vn=(x,D,B)=>{D?Gt(x,B):kn(x)},Kt=x=>!!(x&&(x.offsetWidth||x.offsetHeight||x.getClientRects().length)),ln=()=>!Kt(St())&&!Kt(X())&&!Kt(Ue()),so=x=>x.scrollHeight>x.clientHeight,ji=x=>{const D=window.getComputedStyle(x),B=parseFloat(D.getPropertyValue("animation-duration")||"0"),W=parseFloat(D.getPropertyValue("transition-duration")||"0");return B>0||W>0},ma=function(x){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const B=Ze();Kt(B)&&(D&&(B.style.transition="none",B.style.width="100%"),setTimeout(()=>{B.style.transition="width ".concat(x/1e3,"s linear"),B.style.width="0%"},10))},Al=()=>{const x=Ze(),D=parseInt(window.getComputedStyle(x).width);x.style.removeProperty("transition"),x.style.width="100%";const B=parseInt(window.getComputedStyle(x).width),W=D/B*100;x.style.removeProperty("transition"),x.style.width="".concat(W,"%")},zc=()=>typeof window>"u"||typeof document>"u",jc=100,vt={},Ru=()=>{vt.previousActiveElement&&vt.previousActiveElement.focus?(vt.previousActiveElement.focus(),vt.previousActiveElement=null):document.body&&document.body.focus()},zu=x=>new Promise(D=>{if(!x)return D();const B=window.scrollX,W=window.scrollY;vt.restoreFocusTimeout=setTimeout(()=>{Ru(),D()},jc),window.scrollTo(B,W)}),Ao=`
 <div aria-labelledby="`.concat(Q.title,'" aria-describedby="').concat(Q["html-container"],'" class="').concat(Q.popup,`" tabindex="-1">
   <button type="button" class="`).concat(Q.close,`"></button>
   <ul class="`).concat(Q["progress-steps"],`"></ul>
   <div class="`).concat(Q.icon,`"></div>
   <img class="`).concat(Q.image,`" />
   <h2 class="`).concat(Q.title,'" id="').concat(Q.title,`"></h2>
   <div class="`).concat(Q["html-container"],'" id="').concat(Q["html-container"],`"></div>
   <input class="`).concat(Q.input,`" />
   <input type="file" class="`).concat(Q.file,`" />
   <div class="`).concat(Q.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(Q.select,`"></select>
   <div class="`).concat(Q.radio,`"></div>
   <label for="`).concat(Q.checkbox,'" class="').concat(Q.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(Q.label,`"></span>
   </label>
   <textarea class="`).concat(Q.textarea,`"></textarea>
   <div class="`).concat(Q["validation-message"],'" id="').concat(Q["validation-message"],`"></div>
   <div class="`).concat(Q.actions,`">
     <div class="`).concat(Q.loader,`"></div>
     <button type="button" class="`).concat(Q.confirm,`"></button>
     <button type="button" class="`).concat(Q.deny,`"></button>
     <button type="button" class="`).concat(Q.cancel,`"></button>
   </div>
   <div class="`).concat(Q.footer,`"></div>
   <div class="`).concat(Q["timer-progress-bar-container"],`">
     <div class="`).concat(Q["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),ju=()=>{const x=Le();return x?(x.remove(),It([document.documentElement,document.body],[Q["no-backdrop"],Q["toast-shown"],Q["has-column"]]),!0):!1},qo=()=>{vt.currentInstance.resetValidationMessage()},ga=()=>{const x=it(),D=kt(x,Q.input),B=kt(x,Q.file),W=x.querySelector(".".concat(Q.range," input")),Ee=x.querySelector(".".concat(Q.range," output")),dt=kt(x,Q.select),In=x.querySelector(".".concat(Q.checkbox," input")),zn=kt(x,Q.textarea);D.oninput=qo,B.onchange=qo,dt.onchange=qo,In.onchange=qo,zn.oninput=qo,W.oninput=()=>{qo(),Ee.value=W.value},W.onchange=()=>{qo(),W.nextSibling.value=W.value}},Fu=x=>typeof x=="string"?document.querySelector(x):x,$u=x=>{const D=it();D.setAttribute("role",x.toast?"alert":"dialog"),D.setAttribute("aria-live",x.toast?"polite":"assertive"),x.toast||D.setAttribute("aria-modal","true")},Cl=x=>{window.getComputedStyle(x).direction==="rtl"&&Je(Le(),Q.rtl)},Vu=x=>{const D=ju();if(zc()){v("SweetAlert2 requires document to initialize");return}const B=document.createElement("div");B.className=Q.container,D&&Je(B,Q["no-transition"]),ve(B,Ao);const W=Fu(x.target);W.appendChild(B),$u(x),Cl(W),ga()},yr=(x,D)=>{x instanceof HTMLElement?D.appendChild(x):typeof x=="object"?js(x,D):x&&ve(D,x)},js=(x,D)=>{x.jquery?ba(D,x):ve(D,x.toString())},ba=(x,D)=>{if(x.textContent="",0 in D)for(let B=0;B in D;B++)x.appendChild(D[B].cloneNode(!0));else x.appendChild(D.cloneNode(!0))},Ar=(()=>{if(zc())return!1;const x=document.createElement("div"),D={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const B in D)if(Object.prototype.hasOwnProperty.call(D,B)&&typeof x.style[B]<"u")return D[B];return!1})(),Uu=()=>{const x=document.createElement("div");x.className=Q["scrollbar-measure"],document.body.appendChild(x);const D=x.getBoundingClientRect().width-x.clientWidth;return document.body.removeChild(x),D},Hu=(x,D)=>{const B=ht(),W=Be();!D.showConfirmButton&&!D.showDenyButton&&!D.showCancelButton?kn(B):Gt(B),ot(B,D,"actions"),qu(B,W,D),ve(W,D.loaderHtml),ot(W,D,"loader")};function qu(x,D,B){const W=St(),Ee=X(),dt=Ue();Cr(W,"confirm",B),Cr(Ee,"deny",B),Cr(dt,"cancel",B),cs(W,Ee,dt,B),B.reverseButtons&&(B.toast?(x.insertBefore(dt,W),x.insertBefore(Ee,W)):(x.insertBefore(dt,D),x.insertBefore(Ee,D),x.insertBefore(W,D)))}function cs(x,D,B,W){if(!W.buttonsStyling)return It([x,D,B],Q.styled);Je([x,D,B],Q.styled),W.confirmButtonColor&&(x.style.backgroundColor=W.confirmButtonColor,Je(x,Q["default-outline"])),W.denyButtonColor&&(D.style.backgroundColor=W.denyButtonColor,Je(D,Q["default-outline"])),W.cancelButtonColor&&(B.style.backgroundColor=W.cancelButtonColor,Je(B,Q["default-outline"]))}function Cr(x,D,B){Vn(x,B["show".concat(m(D),"Button")],"inline-block"),ve(x,B["".concat(D,"ButtonText")]),x.setAttribute("aria-label",B["".concat(D,"ButtonAriaLabel")]),x.className=Q[D],ot(x,B,"".concat(D,"Button")),Je(x,B["".concat(D,"ButtonClass")])}function xl(x,D){typeof D=="string"?x.style.background=D:D||Je([document.documentElement,document.body],Q["no-backdrop"])}function Wu(x,D){D in Q?Je(x,Q[D]):(w('The "position" parameter is not valid, defaulting to "center"'),Je(x,Q.center))}function Gu(x,D){if(D&&typeof D=="string"){const B="grow-".concat(D);B in Q&&Je(x,Q[B])}}const ds=(x,D)=>{const B=Le();!B||(xl(B,D.backdrop),Wu(B,D.position),Gu(B,D.grow),ot(B,D,"container"))};var Bt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Ku=["input","file","range","select","radio","checkbox","textarea"],Yu=(x,D)=>{const B=it(),W=Bt.innerParams.get(x),Ee=!W||D.input!==W.input;Ku.forEach(dt=>{const In=Q[dt],zn=kt(B,In);wa(dt,D.inputAttributes),zn.className=In,Ee&&kn(zn)}),D.input&&(Ee&&_a(D),Zu(D))},_a=x=>{if(!Un[x.input])return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(x.input,'"'));const D=us(x.input),B=Un[x.input](D,x);Gt(B),setTimeout(()=>{qe(B)})},Qu=x=>{for(let D=0;D<x.attributes.length;D++){const B=x.attributes[D].name;["type","value","style"].includes(B)||x.removeAttribute(B)}},wa=(x,D)=>{const B=Ge(it(),x);if(!!B){Qu(B);for(const W in D)B.setAttribute(W,D[W])}},Zu=x=>{const D=us(x.input);x.customClass&&Je(D,x.customClass.input)},El=(x,D)=>{(!x.placeholder||D.inputPlaceholder)&&(x.placeholder=D.inputPlaceholder)},ni=(x,D,B)=>{if(B.inputLabel){x.id=Q.input;const W=document.createElement("label"),Ee=Q["input-label"];W.setAttribute("for",x.id),W.className=Ee,Je(W,B.customClass.inputLabel),W.innerText=B.inputLabel,D.insertAdjacentElement("beforebegin",W)}},us=x=>{const D=Q[x]?Q[x]:Q.input;return kt(it(),D)},Un={};Un.text=Un.email=Un.password=Un.number=Un.tel=Un.url=(x,D)=>(typeof D.inputValue=="string"||typeof D.inputValue=="number"?x.value=D.inputValue:ee(D.inputValue)||w('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof D.inputValue,'"')),ni(x,x,D),El(x,D),x.type=D.input,x),Un.file=(x,D)=>(ni(x,x,D),El(x,D),x),Un.range=(x,D)=>{const B=x.querySelector("input"),W=x.querySelector("output");return B.value=D.inputValue,B.type=D.input,W.value=D.inputValue,ni(B,x,D),x},Un.select=(x,D)=>{if(x.textContent="",D.inputPlaceholder){const B=document.createElement("option");ve(B,D.inputPlaceholder),B.value="",B.disabled=!0,B.selected=!0,x.appendChild(B)}return ni(x,x,D),x},Un.radio=x=>(x.textContent="",x),Un.checkbox=(x,D)=>{const B=Ge(it(),"checkbox");B.value="1",B.id=Q.checkbox,B.checked=Boolean(D.inputValue);const W=x.querySelector("span");return ve(W,D.inputPlaceholder),x},Un.textarea=(x,D)=>{x.value=D.inputValue,El(x,D),ni(x,x,D);const B=W=>parseInt(window.getComputedStyle(W).marginLeft)+parseInt(window.getComputedStyle(W).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const W=parseInt(window.getComputedStyle(it()).width),Ee=()=>{const dt=x.offsetWidth+B(x);dt>W?it().style.width="".concat(dt,"px"):it().style.width=null};new MutationObserver(Ee).observe(x,{attributes:!0,attributeFilter:["style"]})}}),x};const Fc=(x,D)=>{const B=$n();ot(B,D,"htmlContainer"),D.html?(yr(D.html,B),Gt(B,"block")):D.text?(B.textContent=D.text,Gt(B,"block")):kn(B),Yu(x,D)},Ju=(x,D)=>{const B=Ht();Vn(B,D.footer),D.footer&&yr(D.footer,B),ot(B,D,"footer")},Xu=(x,D)=>{const B=q();ve(B,D.closeButtonHtml),ot(B,D,"closeButton"),Vn(B,D.showCloseButton),B.setAttribute("aria-label",D.closeButtonAriaLabel)},eh=(x,D)=>{const B=Bt.innerParams.get(x),W=yt();if(B&&D.icon===B.icon){xr(W,D),$c(W,D);return}if(!D.icon&&!D.iconHtml)return kn(W);if(D.icon&&Object.keys(nt).indexOf(D.icon)===-1)return v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(D.icon,'"')),kn(W);Gt(W),xr(W,D),$c(W,D),Je(W,D.showClass.icon)},$c=(x,D)=>{for(const B in nt)D.icon!==B&&It(x,nt[B]);Je(x,nt[D.icon]),th(x,D),Vc(),ot(x,D,"icon")},Vc=()=>{const x=it(),D=window.getComputedStyle(x).getPropertyValue("background-color"),B=x.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let W=0;W<B.length;W++)B[W].style.backgroundColor=D},Uc=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,hs=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,xr=(x,D)=>{x.textContent="",D.iconHtml?ve(x,Dl(D.iconHtml)):D.icon==="success"?ve(x,Uc):D.icon==="error"?ve(x,hs):ve(x,Dl({question:"?",warning:"!",info:"i"}[D.icon]))},th=(x,D)=>{if(!!D.iconColor){x.style.color=D.iconColor,x.style.borderColor=D.iconColor;for(const B of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])zi(x,B,"backgroundColor",D.iconColor);zi(x,".swal2-success-ring","borderColor",D.iconColor)}},Dl=x=>'<div class="'.concat(Q["icon-content"],'">').concat(x,"</div>"),fs=(x,D)=>{const B=un();if(!D.imageUrl)return kn(B);Gt(B,""),B.setAttribute("src",D.imageUrl),B.setAttribute("alt",D.imageAlt),an(B,"width",D.imageWidth),an(B,"height",D.imageHeight),B.className=Q.image,ot(B,D,"image")},Hc=x=>{const D=document.createElement("li");return Je(D,Q["progress-step"]),ve(D,x),D},nh=x=>{const D=document.createElement("li");return Je(D,Q["progress-step-line"]),x.progressStepsDistance&&(D.style.width=x.progressStepsDistance),D},qc=(x,D)=>{const B=Rn();if(!D.progressSteps||D.progressSteps.length===0)return kn(B);Gt(B),B.textContent="",D.currentProgressStep>=D.progressSteps.length&&w("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),D.progressSteps.forEach((W,Ee)=>{const dt=Hc(W);if(B.appendChild(dt),Ee===D.currentProgressStep&&Je(dt,Q["active-progress-step"]),Ee!==D.progressSteps.length-1){const In=nh(D);B.appendChild(In)}})},Wc=(x,D)=>{const B=oo();Vn(B,D.title||D.titleText,"block"),D.title&&yr(D.title,B),D.titleText&&(B.innerText=D.titleText),ot(B,D,"title")},Fi=(x,D)=>{const B=Le(),W=it();D.toast?(an(B,"width",D.width),W.style.width="100%",W.insertBefore(Be(),yt())):an(W,"width",D.width),an(W,"padding",D.padding),D.color&&(W.style.color=D.color),D.background&&(W.style.background=D.background),kn(mo()),ka(W,D)},ka=(x,D)=>{x.className="".concat(Q.popup," ").concat(Kt(x)?D.showClass.popup:""),D.toast?(Je([document.documentElement,document.body],Q["toast-shown"]),Je(x,Q.toast)):Je(x,Q.modal),ot(x,D,"popup"),typeof D.customClass=="string"&&Je(x,D.customClass),D.icon&&Je(x,Q["icon-".concat(D.icon)])},Tl=(x,D)=>{Fi(x,D),ds(x,D),qc(x,D),eh(x,D),fs(x,D),Wc(x,D),Xu(x,D),Fc(x,D),Hu(x,D),Ju(x,D),typeof D.didRender=="function"&&D.didRender(it())},No=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ps=()=>{y(document.body.children).forEach(D=>{D===Le()||D.contains(Le())||(D.hasAttribute("aria-hidden")&&D.setAttribute("data-previous-aria-hidden",D.getAttribute("aria-hidden")),D.setAttribute("aria-hidden","true"))})},ms=()=>{y(document.body.children).forEach(D=>{D.hasAttribute("data-previous-aria-hidden")?(D.setAttribute("aria-hidden",D.getAttribute("data-previous-aria-hidden")),D.removeAttribute("data-previous-aria-hidden")):D.removeAttribute("aria-hidden")})},Fs=["swal-title","swal-html","swal-footer"],va=x=>{const D=typeof x.template=="string"?document.querySelector(x.template):x.template;if(!D)return{};const B=D.content;return ih(B),Object.assign(oh(B),ya(B),gs(B),Gc(B),Sl(B),Kc(B,Fs))},oh=x=>{const D={};return y(x.querySelectorAll("swal-param")).forEach(B=>{bs(B,["name","value"]);const W=B.getAttribute("name"),Ee=B.getAttribute("value");typeof le[W]=="boolean"&&Ee==="false"&&(D[W]=!1),typeof le[W]=="object"&&(D[W]=JSON.parse(Ee))}),D},ya=x=>{const D={};return y(x.querySelectorAll("swal-button")).forEach(B=>{bs(B,["type","color","aria-label"]);const W=B.getAttribute("type");D["".concat(W,"ButtonText")]=B.innerHTML,D["show".concat(m(W),"Button")]=!0,B.hasAttribute("color")&&(D["".concat(W,"ButtonColor")]=B.getAttribute("color")),B.hasAttribute("aria-label")&&(D["".concat(W,"ButtonAriaLabel")]=B.getAttribute("aria-label"))}),D},gs=x=>{const D={},B=x.querySelector("swal-image");return B&&(bs(B,["src","width","height","alt"]),B.hasAttribute("src")&&(D.imageUrl=B.getAttribute("src")),B.hasAttribute("width")&&(D.imageWidth=B.getAttribute("width")),B.hasAttribute("height")&&(D.imageHeight=B.getAttribute("height")),B.hasAttribute("alt")&&(D.imageAlt=B.getAttribute("alt"))),D},Gc=x=>{const D={},B=x.querySelector("swal-icon");return B&&(bs(B,["type","color"]),B.hasAttribute("type")&&(D.icon=B.getAttribute("type")),B.hasAttribute("color")&&(D.iconColor=B.getAttribute("color")),D.iconHtml=B.innerHTML),D},Sl=x=>{const D={},B=x.querySelector("swal-input");B&&(bs(B,["type","label","placeholder","value"]),D.input=B.getAttribute("type")||"text",B.hasAttribute("label")&&(D.inputLabel=B.getAttribute("label")),B.hasAttribute("placeholder")&&(D.inputPlaceholder=B.getAttribute("placeholder")),B.hasAttribute("value")&&(D.inputValue=B.getAttribute("value")));const W=x.querySelectorAll("swal-input-option");return W.length&&(D.inputOptions={},y(W).forEach(Ee=>{bs(Ee,["value"]);const dt=Ee.getAttribute("value"),In=Ee.innerHTML;D.inputOptions[dt]=In})),D},Kc=(x,D)=>{const B={};for(const W in D){const Ee=D[W],dt=x.querySelector(Ee);dt&&(bs(dt,[]),B[Ee.replace(/^swal-/,"")]=dt.innerHTML.trim())}return B},ih=x=>{const D=Fs.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);y(x.children).forEach(B=>{const W=B.tagName.toLowerCase();D.indexOf(W)===-1&&w("Unrecognized element <".concat(W,">"))})},bs=(x,D)=>{y(x.attributes).forEach(B=>{D.indexOf(B.name)===-1&&w(['Unrecognized attribute "'.concat(B.name,'" on <').concat(x.tagName.toLowerCase(),">."),"".concat(D.length?"Allowed attributes are: ".concat(D.join(", ")):"To set the value, use HTML within the element.")])})};var Er={email:(x,D)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(x)?Promise.resolve():Promise.resolve(D||"Invalid email address"),url:(x,D)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(x)?Promise.resolve():Promise.resolve(D||"Invalid URL")};function sh(x){x.inputValidator||Object.keys(Er).forEach(D=>{x.input===D&&(x.inputValidator=Er[D])})}function Yc(x){(!x.target||typeof x.target=="string"&&!document.querySelector(x.target)||typeof x.target!="string"&&!x.target.appendChild)&&(w('Target parameter is not valid, defaulting to "body"'),x.target="body")}function Qc(x){sh(x),x.showLoaderOnConfirm&&!x.preConfirm&&w(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Yc(x),typeof x.title=="string"&&(x.title=x.title.split(`
`).join("<br />")),Vu(x)}class Zc{constructor(D,B){this.callback=D,this.remaining=B,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(D){const B=this.running;return B&&this.stop(),this.remaining+=D,B&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const _s=()=>{Ve.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Ve.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Ve.previousBodyPadding+Uu(),"px"))},rh=()=>{Ve.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(Ve.previousBodyPadding,"px"),Ve.previousBodyPadding=null)},Il=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Se(document.body,Q.iosfix)){const D=document.body.scrollTop;document.body.style.top="".concat(D*-1,"px"),Je(document.body,Q.iosfix),vn(),Jc()}},Jc=()=>{const x=navigator.userAgent,D=!!x.match(/iPad/i)||!!x.match(/iPhone/i),B=!!x.match(/WebKit/i);D&&B&&!x.match(/CriOS/i)&&it().scrollHeight>window.innerHeight-44&&(Le().style.paddingBottom="".concat(44,"px"))},vn=()=>{const x=Le();let D;x.ontouchstart=B=>{D=ah(B)},x.ontouchmove=B=>{D&&(B.preventDefault(),B.stopPropagation())}},ah=x=>{const D=x.target,B=Le();return hn(x)||fn(x)?!1:D===B||!so(B)&&D.tagName!=="INPUT"&&D.tagName!=="TEXTAREA"&&!(so($n())&&$n().contains(D))},hn=x=>x.touches&&x.touches.length&&x.touches[0].touchType==="stylus",fn=x=>x.touches&&x.touches.length>1,Dr=()=>{if(Se(document.body,Q.iosfix)){const x=parseInt(document.body.style.top,10);It(document.body,Q.iosfix),document.body.style.top="",document.body.scrollTop=x*-1}},Aa=10,$s=x=>{const D=Le(),B=it();typeof x.willOpen=="function"&&x.willOpen(B);const Ee=window.getComputedStyle(document.body).overflowY;Nl(D,B,x),setTimeout(()=>{Pl(D,B)},Aa),ge()&&(lh(D,x.scrollbarPadding,Ee),ps()),!Ce()&&!vt.previousActiveElement&&(vt.previousActiveElement=document.activeElement),typeof x.didOpen=="function"&&setTimeout(()=>x.didOpen(B)),It(D,Q["no-transition"])},Ml=x=>{const D=it();if(x.target!==D)return;const B=Le();D.removeEventListener(Ar,Ml),B.style.overflowY="auto"},Pl=(x,D)=>{Ar&&ji(D)?(x.style.overflowY="hidden",D.addEventListener(Ar,Ml)):x.style.overflowY="auto"},lh=(x,D,B)=>{Il(),D&&B!=="hidden"&&_s(),setTimeout(()=>{x.scrollTop=0})},Nl=(x,D,B)=>{Je(x,B.showClass.backdrop),D.style.setProperty("opacity","0","important"),Gt(D,"grid"),setTimeout(()=>{Je(D,B.showClass.popup),D.style.removeProperty("opacity")},Aa),Je([document.documentElement,document.body],Q.shown),B.heightAuto&&B.backdrop&&!B.toast&&Je([document.documentElement,document.body],Q["height-auto"])},Vs=x=>{let D=it();D||new vi,D=it();const B=Be();Ce()?kn(yt()):Hn(D,x),Gt(B),D.setAttribute("data-loading",!0),D.setAttribute("aria-busy",!0),D.focus()},Hn=(x,D)=>{const B=ht(),W=Be();!D&&Kt(St())&&(D=St()),Gt(B),D&&(kn(D),W.setAttribute("data-button-to-replace",D.className)),W.parentNode.insertBefore(W,D),Je([x,B],Q.loading)},Bl=(x,D)=>{D.input==="select"||D.input==="radio"?ed(x,D):["text","email","number","tel","textarea"].includes(D.input)&&(M(D.inputValue)||ee(D.inputValue))&&(Vs(St()),td(x,D))},ws=(x,D)=>{const B=x.getInput();if(!B)return null;switch(D.input){case"checkbox":return Xc(B);case"radio":return Us(B);case"file":return Co(B);default:return D.inputAutoTrim?B.value.trim():B.value}},Xc=x=>x.checked?1:0,Us=x=>x.checked?x.value:null,Co=x=>x.files.length?x.getAttribute("multiple")!==null?x.files:x.files[0]:null,ed=(x,D)=>{const B=it(),W=Ee=>nd[D.input](B,Ca(Ee),D);M(D.inputOptions)||ee(D.inputOptions)?(Vs(St()),j(D.inputOptions).then(Ee=>{x.hideLoading(),W(Ee)})):typeof D.inputOptions=="object"?W(D.inputOptions):v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof D.inputOptions))},td=(x,D)=>{const B=x.getInput();kn(B),j(D.inputValue).then(W=>{B.value=D.input==="number"?parseFloat(W)||0:"".concat(W),Gt(B),B.focus(),x.hideLoading()}).catch(W=>{v("Error in inputValue promise: ".concat(W)),B.value="",Gt(B),B.focus(),x.hideLoading()})},nd={select:(x,D,B)=>{const W=kt(x,Q.select),Ee=(dt,In,zn)=>{const Xn=document.createElement("option");Xn.value=zn,ve(Xn,In),Xn.selected=$i(zn,B.inputValue),dt.appendChild(Xn)};D.forEach(dt=>{const In=dt[0],zn=dt[1];if(Array.isArray(zn)){const Xn=document.createElement("optgroup");Xn.label=In,Xn.disabled=!1,W.appendChild(Xn),zn.forEach(Gs=>Ee(Xn,Gs[1],Gs[0]))}else Ee(W,zn,In)}),W.focus()},radio:(x,D,B)=>{const W=kt(x,Q.radio);D.forEach(dt=>{const In=dt[0],zn=dt[1],Xn=document.createElement("input"),Gs=document.createElement("label");Xn.type="radio",Xn.name=Q.radio,Xn.value=In,$i(In,B.inputValue)&&(Xn.checked=!0);const Oa=document.createElement("span");ve(Oa,zn),Oa.className=Q.label,Gs.appendChild(Xn),Gs.appendChild(Oa),W.appendChild(Gs)});const Ee=W.querySelectorAll("input");Ee.length&&Ee[0].focus()}},Ca=x=>{const D=[];return typeof Map<"u"&&x instanceof Map?x.forEach((B,W)=>{let Ee=B;typeof Ee=="object"&&(Ee=Ca(Ee)),D.push([W,Ee])}):Object.keys(x).forEach(B=>{let W=x[B];typeof W=="object"&&(W=Ca(W)),D.push([B,W])}),D},$i=(x,D)=>D&&D.toString()===x.toString(),od=x=>{const D=Bt.innerParams.get(x);x.disableButtons(),D.input?Eo(x,"confirm"):Hs(x,!0)},xo=x=>{const D=Bt.innerParams.get(x);x.disableButtons(),D.returnInputValueOnDeny?Eo(x,"deny"):Tr(x,!1)},id=(x,D)=>{x.disableButtons(),D(No.cancel)},Eo=(x,D)=>{const B=Bt.innerParams.get(x);if(!B.input)return v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(m(D)));const W=ws(x,B);B.inputValidator?sd(x,W,D):x.getInput().checkValidity()?D==="deny"?Tr(x,W):Hs(x,W):(x.enableButtons(),x.showValidationMessage(B.validationMessage))},sd=(x,D,B)=>{const W=Bt.innerParams.get(x);x.disableInput(),Promise.resolve().then(()=>j(W.inputValidator(D,W.validationMessage))).then(dt=>{x.enableButtons(),x.enableInput(),dt?x.showValidationMessage(dt):B==="deny"?Tr(x,D):Hs(x,D)})},Tr=(x,D)=>{const B=Bt.innerParams.get(x||void 0);B.showLoaderOnDeny&&Vs(X()),B.preDeny?(Bt.awaitingPromise.set(x||void 0,!0),Promise.resolve().then(()=>j(B.preDeny(D,B.validationMessage))).then(Ee=>{Ee===!1?x.hideLoading():x.closePopup({isDenied:!0,value:typeof Ee>"u"?D:Ee})}).catch(Ee=>Sr(x||void 0,Ee))):x.closePopup({isDenied:!0,value:D})},ui=(x,D)=>{x.closePopup({isConfirmed:!0,value:D})},Sr=(x,D)=>{x.rejectPromise(D)},Hs=(x,D)=>{const B=Bt.innerParams.get(x||void 0);B.showLoaderOnConfirm&&Vs(),B.preConfirm?(x.resetValidationMessage(),Bt.awaitingPromise.set(x||void 0,!0),Promise.resolve().then(()=>j(B.preConfirm(D,B.validationMessage))).then(Ee=>{Kt(mo())||Ee===!1?x.hideLoading():ui(x,typeof Ee>"u"?D:Ee)}).catch(Ee=>Sr(x||void 0,Ee))):ui(x,D)},Sn=(x,D,B)=>{Bt.innerParams.get(x).toast?ki(x,D,B):(Ea(D),rd(D),ch(x,D,B))},ki=(x,D,B)=>{D.popup.onclick=()=>{const W=Bt.innerParams.get(x);W&&(Ir(W)||W.timer||W.input)||B(No.close)}},Ir=x=>x.showConfirmButton||x.showDenyButton||x.showCancelButton||x.showCloseButton;let xa=!1;const Ea=x=>{x.popup.onmousedown=()=>{x.container.onmouseup=function(D){x.container.onmouseup=void 0,D.target===x.container&&(xa=!0)}}},rd=x=>{x.container.onmousedown=()=>{x.popup.onmouseup=function(D){x.popup.onmouseup=void 0,(D.target===x.popup||x.popup.contains(D.target))&&(xa=!0)}}},ch=(x,D,B)=>{D.container.onclick=W=>{const Ee=Bt.innerParams.get(x);if(xa){xa=!1;return}W.target===D.container&&N(Ee.allowOutsideClick)&&B(No.backdrop)}},ad=()=>Kt(it()),Mr=()=>St()&&St().click(),Da=()=>X()&&X().click(),Vi=()=>Ue()&&Ue().click(),Ol=(x,D,B,W)=>{D.keydownTarget&&D.keydownHandlerAdded&&(D.keydownTarget.removeEventListener("keydown",D.keydownHandler,{capture:D.keydownListenerCapture}),D.keydownHandlerAdded=!1),B.toast||(D.keydownHandler=Ee=>Sa(x,Ee,W),D.keydownTarget=B.keydownListenerCapture?window:it(),D.keydownListenerCapture=B.keydownListenerCapture,D.keydownTarget.addEventListener("keydown",D.keydownHandler,{capture:D.keydownListenerCapture}),D.keydownHandlerAdded=!0)},qs=(x,D,B)=>{const W=de();if(W.length)return D=D+B,D===W.length?D=0:D===-1&&(D=W.length-1),W[D].focus();it().focus()},Pr=["ArrowRight","ArrowDown"],Ta=["ArrowLeft","ArrowUp"],Sa=(x,D,B)=>{const W=Bt.innerParams.get(x);!W||(W.stopKeydownPropagation&&D.stopPropagation(),D.key==="Enter"?Ll(x,D,W):D.key==="Tab"?ld(D,W):[...Pr,...Ta].includes(D.key)?Ia(D.key):D.key==="Escape"&&Rl(D,W,B))},Ll=(x,D,B)=>{if(!(!N(B.allowEnterKey)||D.isComposing)&&D.target&&x.getInput()&&D.target.outerHTML===x.getInput().outerHTML){if(["textarea","file"].includes(B.input))return;Mr(),D.preventDefault()}},ld=(x,D)=>{const B=x.target,W=de();let Ee=-1;for(let dt=0;dt<W.length;dt++)if(B===W[dt]){Ee=dt;break}x.shiftKey?qs(D,Ee,-1):qs(D,Ee,1),x.stopPropagation(),x.preventDefault()},Ia=x=>{const D=St(),B=X(),W=Ue();if(![D,B,W].includes(document.activeElement))return;const Ee=Pr.includes(x)?"nextElementSibling":"previousElementSibling",dt=document.activeElement[Ee];dt instanceof HTMLElement&&dt.focus()},Rl=(x,D,B)=>{N(D.allowEscapeKey)&&(x.preventDefault(),B(No.esc))},dh=x=>typeof x=="object"&&x.jquery,zl=x=>x instanceof Element||dh(x),Bo=x=>{const D={};return typeof x[0]=="object"&&!zl(x[0])?Object.assign(D,x[0]):["title","html","icon"].forEach((B,W)=>{const Ee=x[W];typeof Ee=="string"||zl(Ee)?D[B]=Ee:Ee!==void 0&&v("Unexpected type of ".concat(B,'! Expected "string" or "Element", got ').concat(typeof Ee))}),D};function jl(){const x=this;for(var D=arguments.length,B=new Array(D),W=0;W<D;W++)B[W]=arguments[W];return new x(...B)}function oi(x){class D extends this{_main(W,Ee){return super._main(W,Object.assign({},x,Ee))}}return D}const Ws=()=>vt.timeout&&vt.timeout.getTimerLeft(),Fl=()=>{if(vt.timeout)return Al(),vt.timeout.stop()},cd=()=>{if(vt.timeout){const x=vt.timeout.start();return ma(x),x}},Ma=()=>{const x=vt.timeout;return x&&(x.running?Fl():cd())},$l=x=>{if(vt.timeout){const D=vt.timeout.increase(x);return ma(D,!0),D}},uh=()=>vt.timeout&&vt.timeout.isRunning();let dd=!1;const Ui={};function ud(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ui[x]=this,dd||(document.body.addEventListener("click",hd),dd=!0)}const hd=x=>{for(let D=x.target;D&&D!==document;D=D.parentNode)for(const B in Ui){const W=D.getAttribute(B);if(W){Ui[B].fire({template:W});return}}};var Vl=Object.freeze({isValidParameter:ie,isUpdatableParameter:ke,isDeprecatedParameter:V,argsToParams:Bo,isVisible:ad,clickConfirm:Mr,clickDeny:Da,clickCancel:Vi,getContainer:Le,getPopup:it,getTitle:oo,getHtmlContainer:$n,getImage:un,getIcon:yt,getInputLabel:Te,getCloseButton:q,getActions:ht,getConfirmButton:St,getDenyButton:X,getCancelButton:Ue,getLoader:Be,getFooter:Ht,getTimerProgressBar:Ze,getFocusableElements:de,getValidationMessage:mo,isLoading:ze,fire:jl,mixin:oi,showLoading:Vs,enableLoading:Vs,getTimerLeft:Ws,stopTimer:Fl,resumeTimer:cd,toggleTimer:Ma,increaseTimer:$l,isTimerRunning:uh,bindClickHandler:ud});function Pa(){const x=Bt.innerParams.get(this);if(!x)return;const D=Bt.domCache.get(this);kn(D.loader),Ce()?x.icon&&Gt(yt()):Hi(D),It([D.popup,D.actions],Q.loading),D.popup.removeAttribute("aria-busy"),D.popup.removeAttribute("data-loading"),D.confirmButton.disabled=!1,D.denyButton.disabled=!1,D.cancelButton.disabled=!1}const Hi=x=>{const D=x.popup.getElementsByClassName(x.loader.getAttribute("data-button-to-replace"));D.length?Gt(D[0],"inline-block"):ln()&&kn(x.actions)};function Nr(x){const D=Bt.innerParams.get(x||this),B=Bt.domCache.get(x||this);return B?Ge(B.popup,D.input):null}var Br={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function Ul(x,D,B,W){Ce()?Wt(x,W):(zu(B).then(()=>Wt(x,W)),vt.keydownTarget.removeEventListener("keydown",vt.keydownHandler,{capture:vt.keydownListenerCapture}),vt.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(D.setAttribute("style","display:none !important"),D.removeAttribute("class"),D.innerHTML=""):D.remove(),ge()&&(rh(),Dr(),ms()),hh()}function hh(){It([document.documentElement,document.body],[Q.shown,Q["height-auto"],Q["no-backdrop"],Q["toast-shown"]])}function hi(x){x=gd(x);const D=Br.swalPromiseResolve.get(this),B=fd(this);this.isAwaitingPromise()?x.isDismissed||(md(this),D(x)):B&&D(x)}function ii(){return!!Bt.awaitingPromise.get(this)}const fd=x=>{const D=it();if(!D)return!1;const B=Bt.innerParams.get(x);if(!B||Se(D,B.hideClass.popup))return!1;It(D,B.showClass.popup),Je(D,B.hideClass.popup);const W=Le();return It(W,B.showClass.backdrop),Je(W,B.hideClass.backdrop),bd(x,D,B),!0};function pd(x){const D=Br.swalPromiseReject.get(this);md(this),D&&D(x)}const md=x=>{x.isAwaitingPromise()&&(Bt.awaitingPromise.delete(x),Bt.innerParams.get(x)||x._destroy())},gd=x=>typeof x>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},x),bd=(x,D,B)=>{const W=Le(),Ee=Ar&&ji(D);typeof B.willClose=="function"&&B.willClose(D),Ee?_d(x,D,W,B.returnFocus,B.didClose):Ul(x,W,B.returnFocus,B.didClose)},_d=(x,D,B,W,Ee)=>{vt.swalCloseEventFinishedCallback=Ul.bind(null,x,B,W,Ee),D.addEventListener(Ar,function(dt){dt.target===D&&(vt.swalCloseEventFinishedCallback(),delete vt.swalCloseEventFinishedCallback)})},Wt=(x,D)=>{setTimeout(()=>{typeof D=="function"&&D.bind(x.params)(),x._destroy()})};function ne(x,D,B){const W=Bt.domCache.get(x);D.forEach(Ee=>{W[Ee].disabled=B})}function be(x,D){if(!x)return!1;if(x.type==="radio"){const W=x.parentNode.parentNode.querySelectorAll("input");for(let Ee=0;Ee<W.length;Ee++)W[Ee].disabled=D}else x.disabled=D}function ue(){ne(this,["confirmButton","denyButton","cancelButton"],!1)}function st(){ne(this,["confirmButton","denyButton","cancelButton"],!0)}function At(){return be(this.getInput(),!1)}function Yt(){return be(this.getInput(),!0)}function gn(x){const D=Bt.domCache.get(this),B=Bt.innerParams.get(this);ve(D.validationMessage,x),D.validationMessage.className=Q["validation-message"],B.customClass&&B.customClass.validationMessage&&Je(D.validationMessage,B.customClass.validationMessage),Gt(D.validationMessage);const W=this.getInput();W&&(W.setAttribute("aria-invalid",!0),W.setAttribute("aria-describedby",Q["validation-message"]),qe(W),Je(W,Q.inputerror))}function Zt(){const x=Bt.domCache.get(this);x.validationMessage&&kn(x.validationMessage);const D=this.getInput();D&&(D.removeAttribute("aria-invalid"),D.removeAttribute("aria-describedby"),It(D,Q.inputerror))}function Na(){return Bt.domCache.get(this).progressSteps}function ks(x){const D=it(),B=Bt.innerParams.get(this);if(!D||Se(D,B.hideClass.popup))return w("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const W=Wo(x),Ee=Object.assign({},B,W);Tl(this,Ee),Bt.innerParams.set(this,Ee),Object.defineProperties(this,{params:{value:Object.assign({},this.params,x),writable:!1,enumerable:!0}})}const Wo=x=>{const D={};return Object.keys(x).forEach(B=>{ke(B)?D[B]=x[B]:w('Invalid parameter to update: "'.concat(B,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),D};function Or(){const x=Bt.domCache.get(this),D=Bt.innerParams.get(this);if(!D){Et(this);return}x.popup&&vt.swalCloseEventFinishedCallback&&(vt.swalCloseEventFinishedCallback(),delete vt.swalCloseEventFinishedCallback),vt.deferDisposalTimer&&(clearTimeout(vt.deferDisposalTimer),delete vt.deferDisposalTimer),typeof D.didDestroy=="function"&&D.didDestroy(),Hl(this)}const Hl=x=>{Et(x),delete x.params,delete vt.keydownHandler,delete vt.keydownTarget,delete vt.currentInstance},Et=x=>{x.isAwaitingPromise()?(vs(Bt,x),Bt.awaitingPromise.set(x,!0)):(vs(Br,x),vs(Bt,x))},vs=(x,D)=>{for(const B in x)x[B].delete(D)};var bn=Object.freeze({hideLoading:Pa,disableLoading:Pa,getInput:Nr,close:hi,isAwaitingPromise:ii,rejectPromise:pd,closePopup:hi,closeModal:hi,closeToast:hi,enableButtons:ue,disableButtons:st,enableInput:At,disableInput:Yt,showValidationMessage:gn,resetValidationMessage:Zt,getProgressSteps:Na,update:ks,_destroy:Or});let jt;class ys{constructor(){if(typeof window>"u")return;jt=this;for(var D=arguments.length,B=new Array(D),W=0;W<D;W++)B[W]=arguments[W];const Ee=Object.freeze(this.constructor.argsToParams(B));Object.defineProperties(this,{params:{value:Ee,writable:!1,enumerable:!0,configurable:!0}});const dt=this._main(this.params);Bt.promise.set(this,dt)}_main(D){let B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Me(Object.assign({},B,D)),vt.currentInstance&&(vt.currentInstance._destroy(),ge()&&ms()),vt.currentInstance=this;const W=yn(D,B);Qc(W),Object.freeze(W),vt.timeout&&(vt.timeout.stop(),delete vt.timeout),clearTimeout(vt.restoreFocusTimeout);const Ee=Ba(this);return Tl(this,W),Bt.innerParams.set(this,W),ql(this,Ee,W)}then(D){return Bt.promise.get(this).then(D)}finally(D){return Bt.promise.get(this).finally(D)}}const ql=(x,D,B)=>new Promise((W,Ee)=>{const dt=In=>{x.closePopup({isDismissed:!0,dismiss:In})};Br.swalPromiseResolve.set(x,W),Br.swalPromiseReject.set(x,Ee),D.confirmButton.onclick=()=>od(x),D.denyButton.onclick=()=>xo(x),D.cancelButton.onclick=()=>id(x,dt),D.closeButton.onclick=()=>dt(No.close),Sn(x,D,dt),Ol(x,vt,B,dt),Bl(x,B),$s(B),wd(vt,B,dt),kd(D,B),setTimeout(()=>{D.container.scrollTop=0})}),yn=(x,D)=>{const B=va(x),W=Object.assign({},le,D,B,x);return W.showClass=Object.assign({},le.showClass,W.showClass),W.hideClass=Object.assign({},le.hideClass,W.hideClass),W},Ba=x=>{const D={popup:it(),container:Le(),actions:ht(),confirmButton:St(),denyButton:X(),cancelButton:Ue(),loader:Be(),closeButton:q(),validationMessage:mo(),progressSteps:Rn()};return Bt.domCache.set(x,D),D},wd=(x,D,B)=>{const W=Ze();kn(W),D.timer&&(x.timeout=new Zc(()=>{B("timer"),delete x.timeout},D.timer),D.timerProgressBar&&(Gt(W),ot(W,D,"timerProgressBar"),setTimeout(()=>{x.timeout&&x.timeout.running&&ma(D.timer)})))},kd=(x,D)=>{if(!D.toast){if(!N(D.allowEnterKey))return qi();cn(x,D)||qs(D,-1,1)}},cn=(x,D)=>D.focusDeny&&Kt(x.denyButton)?(x.denyButton.focus(),!0):D.focusCancel&&Kt(x.cancelButton)?(x.cancelButton.focus(),!0):D.focusConfirm&&Kt(x.confirmButton)?(x.confirmButton.focus(),!0):!1,qi=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(ys.prototype,bn),Object.assign(ys,Vl),Object.keys(bn).forEach(x=>{ys[x]=function(){if(jt)return jt[x](...arguments)}}),ys.DismissReason=No,ys.version="11.4.0";const vi=ys;return vi.default=vi,vi}),typeof ul<"u"&&ul.Sweetalert2&&(ul.swal=ul.sweetAlert=ul.Swal=ul.SweetAlert=ul.Sweetalert2)})(l2);var Db=l2.exports;class wX{static install(l,h={}){var g;const m=Db.mixin(h),y=function(...w){return m.fire.call(m,...w)};Object.assign(y,Db),Object.keys(Db).filter(w=>typeof Db[w]=="function").forEach(w=>{y[w]=m[w].bind(m)}),((g=l.config)==null?void 0:g.globalProperties)&&!l.config.globalProperties.$swal?(l.config.globalProperties.$swal=y,l.provide("$swal",y)):Object.prototype.hasOwnProperty.call(l,"$swal")||(l.prototype.$swal=y,l.swal=y)}}var Kv={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(s,l){(function(){var h,g="4.17.21",m=200,y="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",w="Expected a function",v="Invalid `variable` option passed into `_.template`",A="__lodash_hash_undefined__",T=500,P="__lodash_placeholder__",N=1,M=2,j=4,ee=1,le=2,_e=1,te=2,Y=4,ie=8,ke=16,V=32,Ne=64,we=128,he=256,Me=512,Fe=30,Ke="...",Q=800,nt=16,Le=1,Ut=2,Qe=3,it=1/0,yt=9007199254740991,oo=17976931348623157e292,$n=0/0,un=4294967295,Rn=un-1,mo=un>>>1,St=[["ary",we],["bind",_e],["bindKey",te],["curry",ie],["curryRight",ke],["flip",Me],["partial",V],["partialRight",Ne],["rearg",he]],X="[object Arguments]",Te="[object Array]",Be="[object AsyncFunction]",Ue="[object Boolean]",ht="[object Date]",Ht="[object DOMException]",Ze="[object Error]",q="[object Function]",Z="[object GeneratorFunction]",de="[object Map]",ge="[object Number]",Ce="[object Null]",ze="[object Object]",Ve="[object Promise]",ve="[object Proxy]",Se="[object RegExp]",xe="[object Set]",ot="[object String]",Ge="[object Symbol]",qe="[object Undefined]",at="[object WeakMap]",Je="[object WeakSet]",It="[object ArrayBuffer]",kt="[object DataView]",an="[object Float32Array]",Gt="[object Float64Array]",kn="[object Int8Array]",zi="[object Int16Array]",Vn="[object Int32Array]",Kt="[object Uint8Array]",ln="[object Uint8ClampedArray]",so="[object Uint16Array]",ji="[object Uint32Array]",ma=/\b__p \+= '';/g,Al=/\b(__p \+=) '' \+/g,zc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jc=/&(?:amp|lt|gt|quot|#39);/g,vt=/[&<>"']/g,Ru=RegExp(jc.source),zu=RegExp(vt.source),Ao=/<%-([\s\S]+?)%>/g,ju=/<%([\s\S]+?)%>/g,qo=/<%=([\s\S]+?)%>/g,ga=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fu=/^\w*$/,$u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Cl=/[\\^$.*+?()[\]{}|]/g,Vu=RegExp(Cl.source),yr=/^\s+/,js=/\s/,ba=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ar=/\{\n\/\* \[wrapped with (.+)\] \*/,Uu=/,? & /,Hu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qu=/[()=,{}\[\]\/\s]/,cs=/\\(\\)?/g,Cr=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,xl=/\w*$/,Wu=/^[-+]0x[0-9a-f]+$/i,Gu=/^0b[01]+$/i,ds=/^\[object .+?Constructor\]$/,Bt=/^0o[0-7]+$/i,Ku=/^(?:0|[1-9]\d*)$/,Yu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_a=/($^)/,Qu=/['\n\r\u2028\u2029\\]/g,wa="\\ud800-\\udfff",Zu="\\u0300-\\u036f",El="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",us=Zu+El+ni,Un="\\u2700-\\u27bf",Fc="a-z\\xdf-\\xf6\\xf8-\\xff",Ju="\\xac\\xb1\\xd7\\xf7",Xu="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",eh="\\u2000-\\u206f",$c=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Vc="A-Z\\xc0-\\xd6\\xd8-\\xde",Uc="\\ufe0e\\ufe0f",hs=Ju+Xu+eh+$c,xr="['\u2019]",th="["+wa+"]",Dl="["+hs+"]",fs="["+us+"]",Hc="\\d+",nh="["+Un+"]",qc="["+Fc+"]",Wc="[^"+wa+hs+Hc+Un+Fc+Vc+"]",Fi="\\ud83c[\\udffb-\\udfff]",ka="(?:"+fs+"|"+Fi+")",Tl="[^"+wa+"]",No="(?:\\ud83c[\\udde6-\\uddff]){2}",ps="[\\ud800-\\udbff][\\udc00-\\udfff]",ms="["+Vc+"]",Fs="\\u200d",va="(?:"+qc+"|"+Wc+")",oh="(?:"+ms+"|"+Wc+")",ya="(?:"+xr+"(?:d|ll|m|re|s|t|ve))?",gs="(?:"+xr+"(?:D|LL|M|RE|S|T|VE))?",Gc=ka+"?",Sl="["+Uc+"]?",Kc="(?:"+Fs+"(?:"+[Tl,No,ps].join("|")+")"+Sl+Gc+")*",ih="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",bs="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Er=Sl+Gc+Kc,sh="(?:"+[nh,No,ps].join("|")+")"+Er,Yc="(?:"+[Tl+fs+"?",fs,No,ps,th].join("|")+")",Qc=RegExp(xr,"g"),Zc=RegExp(fs,"g"),_s=RegExp(Fi+"(?="+Fi+")|"+Yc+Er,"g"),rh=RegExp([ms+"?"+qc+"+"+ya+"(?="+[Dl,ms,"$"].join("|")+")",oh+"+"+gs+"(?="+[Dl,ms+va,"$"].join("|")+")",ms+"?"+va+"+"+ya,ms+"+"+gs,bs,ih,Hc,sh].join("|"),"g"),Il=RegExp("["+Fs+wa+us+Uc+"]"),Jc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ah=-1,hn={};hn[an]=hn[Gt]=hn[kn]=hn[zi]=hn[Vn]=hn[Kt]=hn[ln]=hn[so]=hn[ji]=!0,hn[X]=hn[Te]=hn[It]=hn[Ue]=hn[kt]=hn[ht]=hn[Ze]=hn[q]=hn[de]=hn[ge]=hn[ze]=hn[Se]=hn[xe]=hn[ot]=hn[at]=!1;var fn={};fn[X]=fn[Te]=fn[It]=fn[kt]=fn[Ue]=fn[ht]=fn[an]=fn[Gt]=fn[kn]=fn[zi]=fn[Vn]=fn[de]=fn[ge]=fn[ze]=fn[Se]=fn[xe]=fn[ot]=fn[Ge]=fn[Kt]=fn[ln]=fn[so]=fn[ji]=!0,fn[Ze]=fn[q]=fn[at]=!1;var Dr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Aa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$s={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ml={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pl=parseFloat,lh=parseInt,Nl=typeof gi=="object"&&gi&&gi.Object===Object&&gi,Vs=typeof self=="object"&&self&&self.Object===Object&&self,Hn=Nl||Vs||Function("return this")(),Bl=l&&!l.nodeType&&l,ws=Bl&&!0&&s&&!s.nodeType&&s,Xc=ws&&ws.exports===Bl,Us=Xc&&Nl.process,Co=function(){try{var ne=ws&&ws.require&&ws.require("util").types;return ne||Us&&Us.binding&&Us.binding("util")}catch{}}(),ed=Co&&Co.isArrayBuffer,td=Co&&Co.isDate,nd=Co&&Co.isMap,Ca=Co&&Co.isRegExp,$i=Co&&Co.isSet,od=Co&&Co.isTypedArray;function xo(ne,be,ue){switch(ue.length){case 0:return ne.call(be);case 1:return ne.call(be,ue[0]);case 2:return ne.call(be,ue[0],ue[1]);case 3:return ne.call(be,ue[0],ue[1],ue[2])}return ne.apply(be,ue)}function id(ne,be,ue,st){for(var At=-1,Yt=ne==null?0:ne.length;++At<Yt;){var gn=ne[At];be(st,gn,ue(gn),ne)}return st}function Eo(ne,be){for(var ue=-1,st=ne==null?0:ne.length;++ue<st&&be(ne[ue],ue,ne)!==!1;);return ne}function sd(ne,be){for(var ue=ne==null?0:ne.length;ue--&&be(ne[ue],ue,ne)!==!1;);return ne}function Tr(ne,be){for(var ue=-1,st=ne==null?0:ne.length;++ue<st;)if(!be(ne[ue],ue,ne))return!1;return!0}function ui(ne,be){for(var ue=-1,st=ne==null?0:ne.length,At=0,Yt=[];++ue<st;){var gn=ne[ue];be(gn,ue,ne)&&(Yt[At++]=gn)}return Yt}function Sr(ne,be){var ue=ne==null?0:ne.length;return!!ue&&Vi(ne,be,0)>-1}function Hs(ne,be,ue){for(var st=-1,At=ne==null?0:ne.length;++st<At;)if(ue(be,ne[st]))return!0;return!1}function Sn(ne,be){for(var ue=-1,st=ne==null?0:ne.length,At=Array(st);++ue<st;)At[ue]=be(ne[ue],ue,ne);return At}function ki(ne,be){for(var ue=-1,st=be.length,At=ne.length;++ue<st;)ne[At+ue]=be[ue];return ne}function Ir(ne,be,ue,st){var At=-1,Yt=ne==null?0:ne.length;for(st&&Yt&&(ue=ne[++At]);++At<Yt;)ue=be(ue,ne[At],At,ne);return ue}function xa(ne,be,ue,st){var At=ne==null?0:ne.length;for(st&&At&&(ue=ne[--At]);At--;)ue=be(ue,ne[At],At,ne);return ue}function Ea(ne,be){for(var ue=-1,st=ne==null?0:ne.length;++ue<st;)if(be(ne[ue],ue,ne))return!0;return!1}var rd=Ta("length");function ch(ne){return ne.split("")}function ad(ne){return ne.match(Hu)||[]}function Mr(ne,be,ue){var st;return ue(ne,function(At,Yt,gn){if(be(At,Yt,gn))return st=Yt,!1}),st}function Da(ne,be,ue,st){for(var At=ne.length,Yt=ue+(st?1:-1);st?Yt--:++Yt<At;)if(be(ne[Yt],Yt,ne))return Yt;return-1}function Vi(ne,be,ue){return be===be?Ul(ne,be,ue):Da(ne,qs,ue)}function Ol(ne,be,ue,st){for(var At=ue-1,Yt=ne.length;++At<Yt;)if(st(ne[At],be))return At;return-1}function qs(ne){return ne!==ne}function Pr(ne,be){var ue=ne==null?0:ne.length;return ue?Ia(ne,be)/ue:$n}function Ta(ne){return function(be){return be==null?h:be[ne]}}function Sa(ne){return function(be){return ne==null?h:ne[be]}}function Ll(ne,be,ue,st,At){return At(ne,function(Yt,gn,Zt){ue=st?(st=!1,Yt):be(ue,Yt,gn,Zt)}),ue}function ld(ne,be){var ue=ne.length;for(ne.sort(be);ue--;)ne[ue]=ne[ue].value;return ne}function Ia(ne,be){for(var ue,st=-1,At=ne.length;++st<At;){var Yt=be(ne[st]);Yt!==h&&(ue=ue===h?Yt:ue+Yt)}return ue}function Rl(ne,be){for(var ue=-1,st=Array(ne);++ue<ne;)st[ue]=be(ue);return st}function dh(ne,be){return Sn(be,function(ue){return[ue,ne[ue]]})}function zl(ne){return ne&&ne.slice(0,fd(ne)+1).replace(yr,"")}function Bo(ne){return function(be){return ne(be)}}function jl(ne,be){return Sn(be,function(ue){return ne[ue]})}function oi(ne,be){return ne.has(be)}function Ws(ne,be){for(var ue=-1,st=ne.length;++ue<st&&Vi(be,ne[ue],0)>-1;);return ue}function Fl(ne,be){for(var ue=ne.length;ue--&&Vi(be,ne[ue],0)>-1;);return ue}function cd(ne,be){for(var ue=ne.length,st=0;ue--;)ne[ue]===be&&++st;return st}var Ma=Sa(Dr),$l=Sa(Aa);function uh(ne){return"\\"+Ml[ne]}function dd(ne,be){return ne==null?h:ne[be]}function Ui(ne){return Il.test(ne)}function ud(ne){return Jc.test(ne)}function hd(ne){for(var be,ue=[];!(be=ne.next()).done;)ue.push(be.value);return ue}function Vl(ne){var be=-1,ue=Array(ne.size);return ne.forEach(function(st,At){ue[++be]=[At,st]}),ue}function Pa(ne,be){return function(ue){return ne(be(ue))}}function Hi(ne,be){for(var ue=-1,st=ne.length,At=0,Yt=[];++ue<st;){var gn=ne[ue];(gn===be||gn===P)&&(ne[ue]=P,Yt[At++]=ue)}return Yt}function Nr(ne){var be=-1,ue=Array(ne.size);return ne.forEach(function(st){ue[++be]=st}),ue}function Br(ne){var be=-1,ue=Array(ne.size);return ne.forEach(function(st){ue[++be]=[st,st]}),ue}function Ul(ne,be,ue){for(var st=ue-1,At=ne.length;++st<At;)if(ne[st]===be)return st;return-1}function hh(ne,be,ue){for(var st=ue+1;st--;)if(ne[st]===be)return st;return st}function hi(ne){return Ui(ne)?md(ne):rd(ne)}function ii(ne){return Ui(ne)?gd(ne):ch(ne)}function fd(ne){for(var be=ne.length;be--&&js.test(ne.charAt(be)););return be}var pd=Sa($s);function md(ne){for(var be=_s.lastIndex=0;_s.test(ne);)++be;return be}function gd(ne){return ne.match(_s)||[]}function bd(ne){return ne.match(rh)||[]}var _d=function ne(be){be=be==null?Hn:Wt.defaults(Hn.Object(),be,Wt.pick(Hn,vn));var ue=be.Array,st=be.Date,At=be.Error,Yt=be.Function,gn=be.Math,Zt=be.Object,Na=be.RegExp,ks=be.String,Wo=be.TypeError,Or=ue.prototype,Hl=Yt.prototype,Et=Zt.prototype,vs=be["__core-js_shared__"],bn=Hl.toString,jt=Et.hasOwnProperty,ys=0,ql=function(){var c=/[^.]+$/.exec(vs&&vs.keys&&vs.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}(),yn=Et.toString,Ba=bn.call(Zt),wd=Hn._,kd=Na("^"+bn.call(jt).replace(Cl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),cn=Xc?be.Buffer:h,qi=be.Symbol,vi=be.Uint8Array,x=cn?cn.allocUnsafe:h,D=Pa(Zt.getPrototypeOf,Zt),B=Zt.create,W=Et.propertyIsEnumerable,Ee=Or.splice,dt=qi?qi.isConcatSpreadable:h,In=qi?qi.iterator:h,zn=qi?qi.toStringTag:h,Xn=function(){try{var c=qr(Zt,"defineProperty");return c({},"",{}),c}catch{}}(),Gs=be.clearTimeout!==Hn.clearTimeout&&be.clearTimeout,Oa=st&&st.now!==Hn.Date.now&&st.now,Lp=be.setTimeout!==Hn.setTimeout&&be.setTimeout,Wl=gn.ceil,Gl=gn.floor,Kl=Zt.getOwnPropertySymbols,v_=cn?cn.isBuffer:h,fh=be.isFinite,y_=Or.join,A_=Pa(Zt.keys,Zt),ft=gn.max,Do=gn.min,La=st.now,ph=be.parseInt,mh=gn.random,gh=Or.reverse,eo=qr(be,"DataView"),Yl=qr(be,"Map"),bh=qr(be,"Promise"),Lr=qr(be,"Set"),Ql=qr(be,"WeakMap"),Oo=qr(Zt,"create"),jn=Ql&&new Ql,go={},Wi=es(eo),Gi=es(Yl),Rp=es(bh),zp=es(Lr),C_=es(Ql),vd=qi?qi.prototype:h,Re=vd?vd.valueOf:h,_h=vd?vd.toString:h;function z(c){if(Ln(c)&&!xt(c)&&!(c instanceof Ft)){if(c instanceof si)return c;if(jt.call(c,"__wrapped__"))return sr(c)}return new si(c)}var Rr=function(){function c(){}return function(f){if(!Bn(f))return{};if(B)return B(f);c.prototype=f;var k=new c;return c.prototype=h,k}}();function Zl(){}function si(c,f){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!f,this.__index__=0,this.__values__=h}z.templateSettings={escape:Ao,evaluate:ju,interpolate:qo,variable:"",imports:{_:z}},z.prototype=Zl.prototype,z.prototype.constructor=z,si.prototype=Rr(Zl.prototype),si.prototype.constructor=si;function Ft(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=un,this.__views__=[]}function yd(){var c=new Ft(this.__wrapped__);return c.__actions__=On(this.__actions__),c.__dir__=this.__dir__,c.__filtered__=this.__filtered__,c.__iteratees__=On(this.__iteratees__),c.__takeCount__=this.__takeCount__,c.__views__=On(this.__views__),c}function x_(){if(this.__filtered__){var c=new Ft(this);c.__dir__=-1,c.__filtered__=!0}else c=this.clone(),c.__dir__*=-1;return c}function bt(){var c=this.__wrapped__.value(),f=this.__dir__,k=xt(c),S=f<0,L=k?c.length:0,F=Z_(0,L,this.__views__),G=F.start,J=F.end,se=J-G,Ae=S?J:G-1,ye=this.__iteratees__,Oe=ye.length,tt=0,Ye=Do(se,this.__takeCount__);if(!k||!S&&L==se&&Ye==se)return Hh(c,this.__actions__);var mt=[];e:for(;se--&&tt<Ye;){Ae+=f;for(var Ot=-1,gt=c[Ae];++Ot<Oe;){var Lt=ye[Ot],Vt=Lt.iteratee,Xo=Lt.type,Fo=Vt(gt);if(Xo==Ut)gt=Fo;else if(!Fo){if(Xo==Le)continue e;break e}}mt[tt++]=gt}return mt}Ft.prototype=Rr(Zl.prototype),Ft.prototype.constructor=Ft;function Ks(c){var f=-1,k=c==null?0:c.length;for(this.clear();++f<k;){var S=c[f];this.set(S[0],S[1])}}function E_(){this.__data__=Oo?Oo(null):{},this.size=0}function Ad(c){var f=this.has(c)&&delete this.__data__[c];return this.size-=f?1:0,f}function jp(c){var f=this.__data__;if(Oo){var k=f[c];return k===A?h:k}return jt.call(f,c)?f[c]:h}function D_(c){var f=this.__data__;return Oo?f[c]!==h:jt.call(f,c)}function wh(c,f){var k=this.__data__;return this.size+=this.has(c)?0:1,k[c]=Oo&&f===h?A:f,this}Ks.prototype.clear=E_,Ks.prototype.delete=Ad,Ks.prototype.get=jp,Ks.prototype.has=D_,Ks.prototype.set=wh;function Ki(c){var f=-1,k=c==null?0:c.length;for(this.clear();++f<k;){var S=c[f];this.set(S[0],S[1])}}function T_(){this.__data__=[],this.size=0}function zr(c){var f=this.__data__,k=Ra(f,c);if(k<0)return!1;var S=f.length-1;return k==S?f.pop():Ee.call(f,k,1),--this.size,!0}function Fp(c){var f=this.__data__,k=Ra(f,c);return k<0?h:f[k][1]}function jr(c){return Ra(this.__data__,c)>-1}function _n(c,f){var k=this.__data__,S=Ra(k,c);return S<0?(++this.size,k.push([c,f])):k[S][1]=f,this}Ki.prototype.clear=T_,Ki.prototype.delete=zr,Ki.prototype.get=Fp,Ki.prototype.has=jr,Ki.prototype.set=_n;function ro(c){var f=-1,k=c==null?0:c.length;for(this.clear();++f<k;){var S=c[f];this.set(S[0],S[1])}}function Yi(){this.size=0,this.__data__={hash:new Ks,map:new(Yl||Ki),string:new Ks}}function $p(c){var f=jd(this,c).delete(c);return this.size-=f?1:0,f}function kh(c){return jd(this,c).get(c)}function Cd(c){return jd(this,c).has(c)}function S_(c,f){var k=jd(this,c),S=k.size;return k.set(c,f),this.size+=k.size==S?0:1,this}ro.prototype.clear=Yi,ro.prototype.delete=$p,ro.prototype.get=kh,ro.prototype.has=Cd,ro.prototype.set=S_;function Fr(c){var f=-1,k=c==null?0:c.length;for(this.__data__=new ro;++f<k;)this.add(c[f])}function I_(c){return this.__data__.set(c,A),this}function vh(c){return this.__data__.has(c)}Fr.prototype.add=Fr.prototype.push=I_,Fr.prototype.has=vh;function yi(c){var f=this.__data__=new Ki(c);this.size=f.size}function M_(){this.__data__=new Ki,this.size=0}function P_(c){var f=this.__data__,k=f.delete(c);return this.size=f.size,k}function N_(c){return this.__data__.get(c)}function B_(c){return this.__data__.has(c)}function O_(c,f){var k=this.__data__;if(k instanceof Ki){var S=k.__data__;if(!Yl||S.length<m-1)return S.push([c,f]),this.size=++k.size,this;k=this.__data__=new ro(S)}return k.set(c,f),this.size=k.size,this}yi.prototype.clear=M_,yi.prototype.delete=P_,yi.prototype.get=N_,yi.prototype.has=B_,yi.prototype.set=O_;function yh(c,f){var k=xt(c),S=!k&&ar(c),L=!k&&!S&&Ps(c),F=!k&&!S&&!L&&Xa(c),G=k||S||L||F,J=G?Rl(c.length,ks):[],se=J.length;for(var Ae in c)(f||jt.call(c,Ae))&&!(G&&(Ae=="length"||L&&(Ae=="offset"||Ae=="parent")||F&&(Ae=="buffer"||Ae=="byteLength"||Ae=="byteOffset")||ao(Ae,se)))&&J.push(Ae);return J}function Ah(c){var f=c.length;return f?c[Lh(0,f-1)]:h}function L_(c,f){return ir(On(c),Qi(f,0,c.length))}function Ch(c){return ir(On(c))}function Jl(c,f,k){(k!==h&&!Gn(c[f],k)||k===h&&!(f in c))&&As(c,f,k)}function Xl(c,f,k){var S=c[f];(!(jt.call(c,f)&&Gn(S,k))||k===h&&!(f in c))&&As(c,f,k)}function Ra(c,f){for(var k=c.length;k--;)if(Gn(c[k][0],f))return k;return-1}function Vp(c,f,k,S){return Ys(c,function(L,F,G){f(S,L,k(L),G)}),S}function xh(c,f){return c&&Ai(f,uo(f),c)}function R_(c,f){return c&&Ai(f,zo(f),c)}function As(c,f,k){f=="__proto__"&&Xn?Xn(c,f,{configurable:!0,enumerable:!0,value:k,writable:!0}):c[f]=k}function Eh(c,f){for(var k=-1,S=f.length,L=ue(S),F=c==null;++k<S;)L[k]=F?h:cr(c,f[k]);return L}function Qi(c,f,k){return c===c&&(k!==h&&(c=c<=k?c:k),f!==h&&(c=c>=f?c:f)),c}function Go(c,f,k,S,L,F){var G,J=f&N,se=f&M,Ae=f&j;if(k&&(G=L?k(c,S,L,F):k(c)),G!==h)return G;if(!Bn(c))return c;var ye=xt(c);if(ye){if(G=or(c),!J)return On(c,G)}else{var Oe=So(c),tt=Oe==q||Oe==Z;if(Ps(c))return Yh(c,J);if(Oe==ze||Oe==X||tt&&!L){if(G=se||tt?{}:Ga(c),!J)return se?er(c,R_(G,c)):Ua(c,xh(G,c))}else{if(!fn[Oe])return L?c:{};G=wn(c,Oe,J)}}F||(F=new yi);var Ye=F.get(c);if(Ye)return Ye;F.set(c,G),Tf(c)?c.forEach(function(gt){G.add(Go(gt,f,k,gt,c,F))}):pg(c)&&c.forEach(function(gt,Lt){G.set(Lt,Go(gt,f,k,Lt,c,F))});var mt=Ae?se?zd:qa:se?zo:uo,Ot=ye?h:mt(c);return Eo(Ot||c,function(gt,Lt){Ot&&(Lt=gt,gt=c[Lt]),Xl(G,Lt,Go(gt,f,k,Lt,c,F))}),G}function z_(c){var f=uo(c);return function(k){return Up(k,c,f)}}function Up(c,f,k){var S=k.length;if(c==null)return!S;for(c=Zt(c);S--;){var L=k[S],F=f[L],G=c[L];if(G===h&&!(L in c)||!F(G))return!1}return!0}function xd(c,f,k){if(typeof c!="function")throw new Wo(w);return Gr(function(){c.apply(h,k)},f)}function ec(c,f,k,S){var L=-1,F=Sr,G=!0,J=c.length,se=[],Ae=f.length;if(!J)return se;k&&(f=Sn(f,Bo(k))),S?(F=Hs,G=!1):f.length>=m&&(F=oi,G=!1,f=new Fr(f));e:for(;++L<J;){var ye=c[L],Oe=k==null?ye:k(ye);if(ye=S||ye!==0?ye:0,G&&Oe===Oe){for(var tt=Ae;tt--;)if(f[tt]===Oe)continue e;se.push(ye)}else F(f,Oe,S)||se.push(ye)}return se}var Ys=sm(Cs),Hp=sm(Th,!0);function $r(c,f){var k=!0;return Ys(c,function(S,L,F){return k=!!f(S,L,F),k}),k}function Ed(c,f,k){for(var S=-1,L=c.length;++S<L;){var F=c[S],G=f(F);if(G!=null&&(J===h?G===G&&!Ro(G):k(G,J)))var J=G,se=F}return se}function qp(c,f,k,S){var L=c.length;for(k=Mt(k),k<0&&(k=-k>L?0:L+k),S=S===h||S>L?L:Mt(S),S<0&&(S+=L),S=k>S?0:kg(S);k<S;)c[k++]=f;return c}function Wp(c,f){var k=[];return Ys(c,function(S,L,F){f(S,L,F)&&k.push(S)}),k}function bo(c,f,k,S,L){var F=-1,G=c.length;for(k||(k=pn),L||(L=[]);++F<G;){var J=c[F];f>0&&k(J)?f>1?bo(J,f-1,k,S,L):ki(L,J):S||(L[L.length]=J)}return L}var Dh=rm(),Gp=rm(!0);function Cs(c,f){return c&&Dh(c,f,uo)}function Th(c,f){return c&&Gp(c,f,uo)}function Dd(c,f){return ui(f,function(k){return Di(c[k])})}function Vr(c,f){f=Ds(f,c);for(var k=0,S=f.length;c!=null&&k<S;)c=c[Xi(f[k++])];return k&&k==S?c:h}function Sh(c,f,k){var S=f(c);return xt(c)?S:ki(S,k(c))}function To(c){return c==null?c===h?qe:Ce:zn&&zn in Zt(c)?Q_(c):ew(c)}function Ih(c,f){return c>f}function j_(c,f){return c!=null&&jt.call(c,f)}function F_(c,f){return c!=null&&f in Zt(c)}function $_(c,f,k){return c>=Do(f,k)&&c<ft(f,k)}function tc(c,f,k){for(var S=k?Hs:Sr,L=c[0].length,F=c.length,G=F,J=ue(F),se=1/0,Ae=[];G--;){var ye=c[G];G&&f&&(ye=Sn(ye,Bo(f))),se=Do(ye.length,se),J[G]=!k&&(f||L>=120&&ye.length>=120)?new Fr(G&&ye):h}ye=c[0];var Oe=-1,tt=J[0];e:for(;++Oe<L&&Ae.length<se;){var Ye=ye[Oe],mt=f?f(Ye):Ye;if(Ye=k||Ye!==0?Ye:0,!(tt?oi(tt,mt):S(Ae,mt,k))){for(G=F;--G;){var Ot=J[G];if(!(Ot?oi(Ot,mt):S(c[G],mt,k)))continue e}tt&&tt.push(mt),Ae.push(Ye)}}return Ae}function Mh(c,f,k,S){return Cs(c,function(L,F,G){f(S,k(L),F,G)}),S}function _o(c,f,k){f=Ds(f,c),c=xi(c,f);var S=c==null?c:c[Xi(Io(f))];return S==null?h:xo(S,c,k)}function Ph(c){return Ln(c)&&To(c)==X}function nc(c){return Ln(c)&&To(c)==It}function Kp(c){return Ln(c)&&To(c)==ht}function Qs(c,f,k,S,L){return c===f?!0:c==null||f==null||!Ln(c)&&!Ln(f)?c!==c&&f!==f:Yp(c,f,k,S,Qs,L)}function Yp(c,f,k,S,L,F){var G=xt(c),J=xt(f),se=G?Te:So(c),Ae=J?Te:So(f);se=se==X?ze:se,Ae=Ae==X?ze:Ae;var ye=se==ze,Oe=Ae==ze,tt=se==Ae;if(tt&&Ps(c)){if(!Ps(f))return!1;G=!0,ye=!1}if(tt&&!ye)return F||(F=new yi),G||Xa(c)?fm(c,f,k,S,L,F):Y_(c,f,se,k,S,L,F);if(!(k&ee)){var Ye=ye&&jt.call(c,"__wrapped__"),mt=Oe&&jt.call(f,"__wrapped__");if(Ye||mt){var Ot=Ye?c.value():c,gt=mt?f.value():f;return F||(F=new yi),L(Ot,gt,k,S,F)}}return tt?(F||(F=new yi),pm(c,f,k,S,L,F)):!1}function Qp(c){return Ln(c)&&So(c)==de}function xs(c,f,k,S){var L=k.length,F=L,G=!S;if(c==null)return!F;for(c=Zt(c);L--;){var J=k[L];if(G&&J[2]?J[1]!==c[J[0]]:!(J[0]in c))return!1}for(;++L<F;){J=k[L];var se=J[0],Ae=c[se],ye=J[1];if(G&&J[2]){if(Ae===h&&!(se in c))return!1}else{var Oe=new yi;if(S)var tt=S(Ae,ye,se,c,f,Oe);if(!(tt===h?Qs(ye,Ae,ee|le,S,Oe):tt))return!1}}return!0}function $e(c){if(!Bn(c)||gm(c))return!1;var f=Di(c)?kd:ds;return f.test(es(c))}function _t(c){return Ln(c)&&To(c)==Se}function Td(c){return Ln(c)&&So(c)==xe}function Zi(c){return Ln(c)&&mc(c.length)&&!!hn[To(c)]}function Sd(c){return typeof c=="function"?c:c==null?jo:typeof c=="object"?xt(c)?Bh(c[0],c[1]):Ur(c):nl(c)}function Zs(c){if(!Wr(c))return A_(c);var f=[];for(var k in Zt(c))jt.call(c,k)&&k!="constructor"&&f.push(k);return f}function Nh(c){if(!Bn(c))return _m(c);var f=Wr(c),k=[];for(var S in c)S=="constructor"&&(f||!jt.call(c,S))||k.push(S);return k}function oc(c,f){return c<f}function za(c,f){var k=-1,S=Jo(c)?ue(c.length):[];return Ys(c,function(L,F,G){S[++k]=f(L,F,G)}),S}function Ur(c){var f=rf(c);return f.length==1&&f[0][2]?af(f[0][0],f[0][1]):function(k){return k===c||xs(k,c,f)}}function Bh(c,f){return Ie(c)&&fe(f)?af(Xi(c),f):function(k){var S=cr(k,c);return S===h&&S===f?eu(k,c):Qs(f,S,ee|le)}}function ja(c,f,k,S,L){c!==f&&Dh(f,function(F,G){if(L||(L=new yi),Bn(F))Id(c,f,G,k,ja,S,L);else{var J=S?S(cf(c,G),F,G+"",c,f,L):h;J===h&&(J=F),Jl(c,G,J)}},zo)}function Id(c,f,k,S,L,F,G){var J=cf(c,k),se=cf(f,k),Ae=G.get(se);if(Ae){Jl(c,k,Ae);return}var ye=F?F(J,se,k+"",c,f,G):h,Oe=ye===h;if(Oe){var tt=xt(se),Ye=!tt&&Ps(se),mt=!tt&&!Ye&&Xa(se);ye=se,tt||Ye||mt?xt(J)?ye=J:Kn(J)?ye=On(J):Ye?(Oe=!1,ye=Yh(se,!0)):mt?(Oe=!1,ye=Zh(se,!0)):ye=[]:Ja(se)||ar(se)?(ye=J,ar(J)?ye=vg(J):(!Bn(J)||Di(J))&&(ye=Ga(se))):Oe=!1}Oe&&(G.set(se,ye),L(ye,se,S,F,G),G.delete(se)),Jl(c,k,ye)}function Js(c,f){var k=c.length;if(!!k)return f+=f<0?k:0,ao(f,k)?c[f]:h}function Zp(c,f,k){f.length?f=Sn(f,function(F){return xt(F)?function(G){return Vr(G,F.length===1?F[0]:F)}:F}):f=[jo];var S=-1;f=Sn(f,Bo(pt()));var L=za(c,function(F,G,J){var se=Sn(f,function(Ae){return Ae(F)});return{criteria:se,index:++S,value:F}});return ld(L,function(F,G){return im(F,G,k)})}function Oh(c,f){return Md(c,f,function(k,S){return eu(c,S)})}function Md(c,f,k){for(var S=-1,L=f.length,F={};++S<L;){var G=f[S],J=Vr(c,G);k(J,G)&&ic(F,Ds(G,c),J)}return F}function V_(c){return function(f){return Vr(f,c)}}function Fa(c,f,k,S){var L=S?Ol:Vi,F=-1,G=f.length,J=c;for(c===f&&(f=On(f)),k&&(J=Sn(c,Bo(k)));++F<G;)for(var se=0,Ae=f[F],ye=k?k(Ae):Ae;(se=L(J,ye,se,S))>-1;)J!==c&&Ee.call(J,se,1),Ee.call(c,se,1);return c}function Jp(c,f){for(var k=c?f.length:0,S=k-1;k--;){var L=f[k];if(k==S||L!==F){var F=L;ao(L)?Ee.call(c,L,1):Va(c,L)}}return c}function Lh(c,f){return c+Gl(mh()*(f-c+1))}function Rh(c,f,k,S){for(var L=-1,F=ft(Wl((f-c)/(k||1)),0),G=ue(F);F--;)G[S?F:++L]=c,c+=k;return G}function zh(c,f){var k="";if(!c||f<1||f>yt)return k;do f%2&&(k+=c),f=Gl(f/2),f&&(c+=c);while(f);return k}function Dt(c,f){return ri(lf(c,f,jo),c+"")}function Xp(c){return Ah(ea(c))}function jh(c,f){var k=ea(c);return ir(k,Qi(f,0,k.length))}function ic(c,f,k,S){if(!Bn(c))return c;f=Ds(f,c);for(var L=-1,F=f.length,G=F-1,J=c;J!=null&&++L<F;){var se=Xi(f[L]),Ae=k;if(se==="__proto__"||se==="constructor"||se==="prototype")return c;if(L!=G){var ye=J[se];Ae=S?S(ye,se,J):h,Ae===h&&(Ae=Bn(ye)?ye:ao(f[L+1])?[]:{})}Xl(J,se,Ae),J=J[se]}return c}var Fh=jn?function(c,f){return jn.set(c,f),c}:jo,$h=Xn?function(c,f){return Xn(c,"toString",{configurable:!0,enumerable:!1,value:$f(f),writable:!0})}:jo;function em(c){return ir(ea(c))}function fi(c,f,k){var S=-1,L=c.length;f<0&&(f=-f>L?0:L+f),k=k>L?L:k,k<0&&(k+=L),L=f>k?0:k-f>>>0,f>>>=0;for(var F=ue(L);++S<L;)F[S]=c[S+f];return F}function tm(c,f){var k;return Ys(c,function(S,L,F){return k=f(S,L,F),!k}),!!k}function $a(c,f,k){var S=0,L=c==null?S:c.length;if(typeof f=="number"&&f===f&&L<=mo){for(;S<L;){var F=S+L>>>1,G=c[F];G!==null&&!Ro(G)&&(k?G<=f:G<f)?S=F+1:L=F}return L}return Hr(c,f,jo,k)}function Hr(c,f,k,S){var L=0,F=c==null?0:c.length;if(F===0)return 0;f=k(f);for(var G=f!==f,J=f===null,se=Ro(f),Ae=f===h;L<F;){var ye=Gl((L+F)/2),Oe=k(c[ye]),tt=Oe!==h,Ye=Oe===null,mt=Oe===Oe,Ot=Ro(Oe);if(G)var gt=S||mt;else Ae?gt=mt&&(S||tt):J?gt=mt&&tt&&(S||!Ye):se?gt=mt&&tt&&!Ye&&(S||!Ot):Ye||Ot?gt=!1:gt=S?Oe<=f:Oe<f;gt?L=ye+1:F=ye}return Do(F,Rn)}function Vh(c,f){for(var k=-1,S=c.length,L=0,F=[];++k<S;){var G=c[k],J=f?f(G):G;if(!k||!Gn(J,se)){var se=J;F[L++]=G===0?0:G}}return F}function Uh(c){return typeof c=="number"?c:Ro(c)?$n:+c}function Ko(c){if(typeof c=="string")return c;if(xt(c))return Sn(c,Ko)+"";if(Ro(c))return _h?_h.call(c):"";var f=c+"";return f=="0"&&1/c==-it?"-0":f}function Es(c,f,k){var S=-1,L=Sr,F=c.length,G=!0,J=[],se=J;if(k)G=!1,L=Hs;else if(F>=m){var Ae=f?null:um(c);if(Ae)return Nr(Ae);G=!1,L=oi,se=new Fr}else se=f?[]:J;e:for(;++S<F;){var ye=c[S],Oe=f?f(ye):ye;if(ye=k||ye!==0?ye:0,G&&Oe===Oe){for(var tt=se.length;tt--;)if(se[tt]===Oe)continue e;f&&se.push(Oe),J.push(ye)}else L(se,Oe,k)||(se!==J&&se.push(Oe),J.push(ye))}return J}function Va(c,f){return f=Ds(f,c),c=xi(c,f),c==null||delete c[Xi(Io(f))]}function Yo(c,f,k,S){return ic(c,f,k(Vr(c,f)),S)}function Xs(c,f,k,S){for(var L=c.length,F=S?L:-1;(S?F--:++F<L)&&f(c[F],F,c););return k?fi(c,S?0:F,S?F+1:L):fi(c,S?F+1:0,S?L:F)}function Hh(c,f){var k=c;return k instanceof Ft&&(k=k.value()),Ir(f,function(S,L){return L.func.apply(L.thisArg,ki([S],L.args))},k)}function qh(c,f,k){var S=c.length;if(S<2)return S?Es(c[0]):[];for(var L=-1,F=ue(S);++L<S;)for(var G=c[L],J=-1;++J<S;)J!=L&&(F[L]=ec(F[L]||G,c[J],f,k));return Es(bo(F,1),f,k)}function Wh(c,f,k){for(var S=-1,L=c.length,F=f.length,G={};++S<L;){var J=S<F?f[S]:h;k(G,c[S],J)}return G}function Gh(c){return Kn(c)?c:[]}function Kh(c){return typeof c=="function"?c:jo}function Ds(c,f){return xt(c)?c:Ie(c,f)?[c]:ai(nn(c))}var nm=Dt;function Ts(c,f,k){var S=c.length;return k=k===h?S:k,!f&&k>=S?c:fi(c,f,k)}var om=Gs||function(c){return Hn.clearTimeout(c)};function Yh(c,f){if(f)return c.slice();var k=c.length,S=x?x(k):new c.constructor(k);return c.copy(S),S}function Qh(c){var f=new c.constructor(c.byteLength);return new vi(f).set(new vi(c)),f}function U_(c,f){var k=f?Qh(c.buffer):c.buffer;return new c.constructor(k,c.byteOffset,c.byteLength)}function H_(c){var f=new c.constructor(c.source,xl.exec(c));return f.lastIndex=c.lastIndex,f}function Pd(c){return Re?Zt(Re.call(c)):{}}function Zh(c,f){var k=f?Qh(c.buffer):c.buffer;return new c.constructor(k,c.byteOffset,c.length)}function sc(c,f){if(c!==f){var k=c!==h,S=c===null,L=c===c,F=Ro(c),G=f!==h,J=f===null,se=f===f,Ae=Ro(f);if(!J&&!Ae&&!F&&c>f||F&&G&&se&&!J&&!Ae||S&&G&&se||!k&&se||!L)return 1;if(!S&&!F&&!Ae&&c<f||Ae&&k&&L&&!S&&!F||J&&k&&L||!G&&L||!se)return-1}return 0}function im(c,f,k){for(var S=-1,L=c.criteria,F=f.criteria,G=L.length,J=k.length;++S<G;){var se=sc(L[S],F[S]);if(se){if(S>=J)return se;var Ae=k[S];return se*(Ae=="desc"?-1:1)}}return c.index-f.index}function Jh(c,f,k,S){for(var L=-1,F=c.length,G=k.length,J=-1,se=f.length,Ae=ft(F-G,0),ye=ue(se+Ae),Oe=!S;++J<se;)ye[J]=f[J];for(;++L<G;)(Oe||L<F)&&(ye[k[L]]=c[L]);for(;Ae--;)ye[J++]=c[L++];return ye}function Xh(c,f,k,S){for(var L=-1,F=c.length,G=-1,J=k.length,se=-1,Ae=f.length,ye=ft(F-J,0),Oe=ue(ye+Ae),tt=!S;++L<ye;)Oe[L]=c[L];for(var Ye=L;++se<Ae;)Oe[Ye+se]=f[se];for(;++G<J;)(tt||L<F)&&(Oe[Ye+k[G]]=c[L++]);return Oe}function On(c,f){var k=-1,S=c.length;for(f||(f=ue(S));++k<S;)f[k]=c[k];return f}function Ai(c,f,k,S){var L=!k;k||(k={});for(var F=-1,G=f.length;++F<G;){var J=f[F],se=S?S(k[J],c[J],J,k,c):h;se===h&&(se=c[J]),L?As(k,J,se):Xl(k,J,se)}return k}function Ua(c,f){return Ai(c,Fd(c),f)}function er(c,f){return Ai(c,mm(c),f)}function Nd(c,f){return function(k,S){var L=xt(k)?id:Vp,F=f?f():{};return L(k,c,pt(S,2),F)}}function tr(c){return Dt(function(f,k){var S=-1,L=k.length,F=L>1?k[L-1]:h,G=L>2?k[2]:h;for(F=c.length>3&&typeof F=="function"?(L--,F):h,G&&qn(k[0],k[1],G)&&(F=L<3?h:F,L=1),f=Zt(f);++S<L;){var J=k[S];J&&c(f,J,S,F)}return f})}function sm(c,f){return function(k,S){if(k==null)return k;if(!Jo(k))return c(k,S);for(var L=k.length,F=f?L:-1,G=Zt(k);(f?F--:++F<L)&&S(G[F],F,G)!==!1;);return k}}function rm(c){return function(f,k,S){for(var L=-1,F=Zt(f),G=S(f),J=G.length;J--;){var se=G[c?J:++L];if(k(F[se],se,F)===!1)break}return f}}function q_(c,f,k){var S=f&_e,L=rc(c);function F(){var G=this&&this!==Hn&&this instanceof F?L:c;return G.apply(S?k:this,arguments)}return F}function am(c){return function(f){f=nn(f);var k=Ui(f)?ii(f):h,S=k?k[0]:f.charAt(0),L=k?Ts(k,1).join(""):f.slice(1);return S[c]()+L}}function Ha(c){return function(f){return Ir(Ff(Rg(f).replace(Qc,"")),c,"")}}function rc(c){return function(){var f=arguments;switch(f.length){case 0:return new c;case 1:return new c(f[0]);case 2:return new c(f[0],f[1]);case 3:return new c(f[0],f[1],f[2]);case 4:return new c(f[0],f[1],f[2],f[3]);case 5:return new c(f[0],f[1],f[2],f[3],f[4]);case 6:return new c(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return new c(f[0],f[1],f[2],f[3],f[4],f[5],f[6])}var k=Rr(c.prototype),S=c.apply(k,f);return Bn(S)?S:k}}function W_(c,f,k){var S=rc(c);function L(){for(var F=arguments.length,G=ue(F),J=F,se=Wa(L);J--;)G[J]=arguments[J];var Ae=F<3&&G[0]!==se&&G[F-1]!==se?[]:Hi(G,se);if(F-=Ae.length,F<k)return dm(c,f,Bd,L.placeholder,h,G,Ae,h,h,k-F);var ye=this&&this!==Hn&&this instanceof L?S:c;return xo(ye,this,G)}return L}function lm(c){return function(f,k,S){var L=Zt(f);if(!Jo(f)){var F=pt(k,3);f=uo(f),k=function(J){return F(L[J],J,L)}}var G=c(f,k,S);return G>-1?L[F?f[G]:G]:h}}function ef(c){return Ji(function(f){var k=f.length,S=k,L=si.prototype.thru;for(c&&f.reverse();S--;){var F=f[S];if(typeof F!="function")throw new Wo(w);if(L&&!G&&lc(F)=="wrapper")var G=new si([],!0)}for(S=G?S:k;++S<k;){F=f[S];var J=lc(F),se=J=="wrapper"?sf(F):h;se&&$d(se[0])&&se[1]==(we|ie|V|he)&&!se[4].length&&se[9]==1?G=G[lc(se[0])].apply(G,se[3]):G=F.length==1&&$d(F)?G[J]():G.thru(F)}return function(){var Ae=arguments,ye=Ae[0];if(G&&Ae.length==1&&xt(ye))return G.plant(ye).value();for(var Oe=0,tt=k?f[Oe].apply(this,Ae):ye;++Oe<k;)tt=f[Oe].call(this,tt);return tt}})}function Bd(c,f,k,S,L,F,G,J,se,Ae){var ye=f&we,Oe=f&_e,tt=f&te,Ye=f&(ie|ke),mt=f&Me,Ot=tt?h:rc(c);function gt(){for(var Lt=arguments.length,Vt=ue(Lt),Xo=Lt;Xo--;)Vt[Xo]=arguments[Xo];if(Ye)var Fo=Wa(gt),Zn=cd(Vt,Fo);if(S&&(Vt=Jh(Vt,S,L,Ye)),F&&(Vt=Xh(Vt,F,G,Ye)),Lt-=Zn,Ye&&Lt<Ae){var Cn=Hi(Vt,Fo);return dm(c,f,Bd,gt.placeholder,k,Vt,Cn,J,se,Ae-Lt)}var ho=Oe?k:this,os=tt?ho[c]:c;return Lt=Vt.length,J?Vt=wm(Vt,J):mt&&Lt>1&&Vt.reverse(),ye&&se<Lt&&(Vt.length=se),this&&this!==Hn&&this instanceof gt&&(os=Ot||rc(os)),os.apply(ho,Vt)}return gt}function cm(c,f){return function(k,S){return Mh(k,c,f(S),{})}}function nr(c,f){return function(k,S){var L;if(k===h&&S===h)return f;if(k!==h&&(L=k),S!==h){if(L===h)return S;typeof k=="string"||typeof S=="string"?(k=Ko(k),S=Ko(S)):(k=Uh(k),S=Uh(S)),L=c(k,S)}return L}}function tf(c){return Ji(function(f){return f=Sn(f,Bo(pt())),Dt(function(k){var S=this;return c(f,function(L){return xo(L,S,k)})})})}function Od(c,f){f=f===h?" ":Ko(f);var k=f.length;if(k<2)return k?zh(f,c):f;var S=zh(f,Wl(c/hi(f)));return Ui(f)?Ts(ii(S),0,c).join(""):S.slice(0,c)}function G_(c,f,k,S){var L=f&_e,F=rc(c);function G(){for(var J=-1,se=arguments.length,Ae=-1,ye=S.length,Oe=ue(ye+se),tt=this&&this!==Hn&&this instanceof G?F:c;++Ae<ye;)Oe[Ae]=S[Ae];for(;se--;)Oe[Ae++]=arguments[++J];return xo(tt,L?k:this,Oe)}return G}function ac(c){return function(f,k,S){return S&&typeof S!="number"&&qn(f,k,S)&&(k=S=h),f=Ti(f),k===h?(k=f,f=0):k=Ti(k),S=S===h?f<k?1:-1:Ti(S),Rh(f,k,S,c)}}function Ld(c){return function(f,k){return typeof f=="string"&&typeof k=="string"||(f=li(f),k=li(k)),c(f,k)}}function dm(c,f,k,S,L,F,G,J,se,Ae){var ye=f&ie,Oe=ye?G:h,tt=ye?h:G,Ye=ye?F:h,mt=ye?h:F;f|=ye?V:Ne,f&=~(ye?Ne:V),f&Y||(f&=~(_e|te));var Ot=[c,f,L,Ye,Oe,mt,tt,J,se,Ae],gt=k.apply(h,Ot);return $d(c)&&df(gt,Ot),gt.placeholder=S,km(gt,c,f)}function nf(c){var f=gn[c];return function(k,S){if(k=li(k),S=S==null?0:Do(Mt(S),292),S&&fh(k)){var L=(nn(k)+"e").split("e"),F=f(L[0]+"e"+(+L[1]+S));return L=(nn(F)+"e").split("e"),+(L[0]+"e"+(+L[1]-S))}return f(k)}}var um=Lr&&1/Nr(new Lr([,-0]))[1]==it?function(c){return new Lr(c)}:su;function hm(c){return function(f){var k=So(f);return k==de?Vl(f):k==xe?Br(f):dh(f,c(f))}}function Ss(c,f,k,S,L,F,G,J){var se=f&te;if(!se&&typeof c!="function")throw new Wo(w);var Ae=S?S.length:0;if(Ae||(f&=~(V|Ne),S=L=h),G=G===h?G:ft(Mt(G),0),J=J===h?J:Mt(J),Ae-=L?L.length:0,f&Ne){var ye=S,Oe=L;S=L=h}var tt=se?h:sf(c),Ye=[c,f,k,S,L,ye,Oe,F,G,J];if(tt&&Vd(Ye,tt),c=Ye[0],f=Ye[1],k=Ye[2],S=Ye[3],L=Ye[4],J=Ye[9]=Ye[9]===h?se?0:c.length:ft(Ye[9]-Ae,0),!J&&f&(ie|ke)&&(f&=~(ie|ke)),!f||f==_e)var mt=q_(c,f,k);else f==ie||f==ke?mt=W_(c,f,J):(f==V||f==(_e|V))&&!L.length?mt=G_(c,f,k,S):mt=Bd.apply(h,Ye);var Ot=tt?Fh:df;return km(Ot(mt,Ye),c,f)}function of(c,f,k,S){return c===h||Gn(c,Et[k])&&!jt.call(S,k)?f:c}function Rd(c,f,k,S,L,F){return Bn(c)&&Bn(f)&&(F.set(f,c),ja(c,f,h,Rd,F),F.delete(f)),c}function K_(c){return Ja(c)?h:c}function fm(c,f,k,S,L,F){var G=k&ee,J=c.length,se=f.length;if(J!=se&&!(G&&se>J))return!1;var Ae=F.get(c),ye=F.get(f);if(Ae&&ye)return Ae==f&&ye==c;var Oe=-1,tt=!0,Ye=k&le?new Fr:h;for(F.set(c,f),F.set(f,c);++Oe<J;){var mt=c[Oe],Ot=f[Oe];if(S)var gt=G?S(Ot,mt,Oe,f,c,F):S(mt,Ot,Oe,c,f,F);if(gt!==h){if(gt)continue;tt=!1;break}if(Ye){if(!Ea(f,function(Lt,Vt){if(!oi(Ye,Vt)&&(mt===Lt||L(mt,Lt,k,S,F)))return Ye.push(Vt)})){tt=!1;break}}else if(!(mt===Ot||L(mt,Ot,k,S,F))){tt=!1;break}}return F.delete(c),F.delete(f),tt}function Y_(c,f,k,S,L,F,G){switch(k){case kt:if(c.byteLength!=f.byteLength||c.byteOffset!=f.byteOffset)return!1;c=c.buffer,f=f.buffer;case It:return!(c.byteLength!=f.byteLength||!F(new vi(c),new vi(f)));case Ue:case ht:case ge:return Gn(+c,+f);case Ze:return c.name==f.name&&c.message==f.message;case Se:case ot:return c==f+"";case de:var J=Vl;case xe:var se=S&ee;if(J||(J=Nr),c.size!=f.size&&!se)return!1;var Ae=G.get(c);if(Ae)return Ae==f;S|=le,G.set(c,f);var ye=fm(J(c),J(f),S,L,F,G);return G.delete(c),ye;case Ge:if(Re)return Re.call(c)==Re.call(f)}return!1}function pm(c,f,k,S,L,F){var G=k&ee,J=qa(c),se=J.length,Ae=qa(f),ye=Ae.length;if(se!=ye&&!G)return!1;for(var Oe=se;Oe--;){var tt=J[Oe];if(!(G?tt in f:jt.call(f,tt)))return!1}var Ye=F.get(c),mt=F.get(f);if(Ye&&mt)return Ye==f&&mt==c;var Ot=!0;F.set(c,f),F.set(f,c);for(var gt=G;++Oe<se;){tt=J[Oe];var Lt=c[tt],Vt=f[tt];if(S)var Xo=G?S(Vt,Lt,tt,f,c,F):S(Lt,Vt,tt,c,f,F);if(!(Xo===h?Lt===Vt||L(Lt,Vt,k,S,F):Xo)){Ot=!1;break}gt||(gt=tt=="constructor")}if(Ot&&!gt){var Fo=c.constructor,Zn=f.constructor;Fo!=Zn&&"constructor"in c&&"constructor"in f&&!(typeof Fo=="function"&&Fo instanceof Fo&&typeof Zn=="function"&&Zn instanceof Zn)&&(Ot=!1)}return F.delete(c),F.delete(f),Ot}function Ji(c){return ri(lf(c,h,hf),c+"")}function qa(c){return Sh(c,uo,Fd)}function zd(c){return Sh(c,zo,mm)}var sf=jn?function(c){return jn.get(c)}:su;function lc(c){for(var f=c.name+"",k=go[f],S=jt.call(go,f)?k.length:0;S--;){var L=k[S],F=L.func;if(F==null||F==c)return L.name}return f}function Wa(c){var f=jt.call(z,"placeholder")?z:c;return f.placeholder}function pt(){var c=z.iteratee||iu;return c=c===iu?Sd:c,arguments.length?c(arguments[0],arguments[1]):c}function jd(c,f){var k=c.__data__;return cc(f)?k[typeof f=="string"?"string":"hash"]:k.map}function rf(c){for(var f=uo(c),k=f.length;k--;){var S=f[k],L=c[S];f[k]=[S,L,fe(L)]}return f}function qr(c,f){var k=dd(c,f);return $e(k)?k:h}function Q_(c){var f=jt.call(c,zn),k=c[zn];try{c[zn]=h;var S=!0}catch{}var L=yn.call(c);return S&&(f?c[zn]=k:delete c[zn]),L}var Fd=Kl?function(c){return c==null?[]:(c=Zt(c),ui(Kl(c),function(f){return W.call(c,f)}))}:Hf,mm=Kl?function(c){for(var f=[];c;)ki(f,Fd(c)),c=D(c);return f}:Hf,So=To;(eo&&So(new eo(new ArrayBuffer(1)))!=kt||Yl&&So(new Yl)!=de||bh&&So(bh.resolve())!=Ve||Lr&&So(new Lr)!=xe||Ql&&So(new Ql)!=at)&&(So=function(c){var f=To(c),k=f==ze?c.constructor:h,S=k?es(k):"";if(S)switch(S){case Wi:return kt;case Gi:return de;case Rp:return Ve;case zp:return xe;case C_:return at}return f});function Z_(c,f,k){for(var S=-1,L=k.length;++S<L;){var F=k[S],G=F.size;switch(F.type){case"drop":c+=G;break;case"dropRight":f-=G;break;case"take":f=Do(f,c+G);break;case"takeRight":c=ft(c,f-G);break}}return{start:c,end:f}}function J_(c){var f=c.match(Ar);return f?f[1].split(Uu):[]}function Is(c,f,k){f=Ds(f,c);for(var S=-1,L=f.length,F=!1;++S<L;){var G=Xi(f[S]);if(!(F=c!=null&&k(c,G)))break;c=c[G]}return F||++S!=L?F:(L=c==null?0:c.length,!!L&&mc(L)&&ao(G,L)&&(xt(c)||ar(c)))}function or(c){var f=c.length,k=new c.constructor(f);return f&&typeof c[0]=="string"&&jt.call(c,"index")&&(k.index=c.index,k.input=c.input),k}function Ga(c){return typeof c.constructor=="function"&&!Wr(c)?Rr(D(c)):{}}function wn(c,f,k){var S=c.constructor;switch(f){case It:return Qh(c);case Ue:case ht:return new S(+c);case kt:return U_(c,k);case an:case Gt:case kn:case zi:case Vn:case Kt:case ln:case so:case ji:return Zh(c,k);case de:return new S;case ge:case ot:return new S(c);case Se:return H_(c);case xe:return new S;case Ge:return Pd(c)}}function Ci(c,f){var k=f.length;if(!k)return c;var S=k-1;return f[S]=(k>1?"& ":"")+f[S],f=f.join(k>2?", ":" "),c.replace(ba,`{
/* [wrapped with `+f+`] */
`)}function pn(c){return xt(c)||ar(c)||!!(dt&&c&&c[dt])}function ao(c,f){var k=typeof c;return f=f==null?yt:f,!!f&&(k=="number"||k!="symbol"&&Ku.test(c))&&c>-1&&c%1==0&&c<f}function qn(c,f,k){if(!Bn(k))return!1;var S=typeof f;return(S=="number"?Jo(k)&&ao(f,k.length):S=="string"&&f in k)?Gn(k[f],c):!1}function Ie(c,f){if(xt(c))return!1;var k=typeof c;return k=="number"||k=="symbol"||k=="boolean"||c==null||Ro(c)?!0:Fu.test(c)||!ga.test(c)||f!=null&&c in Zt(f)}function cc(c){var f=typeof c;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?c!=="__proto__":c===null}function $d(c){var f=lc(c),k=z[f];if(typeof k!="function"||!(f in Ft.prototype))return!1;if(c===k)return!0;var S=sf(k);return!!S&&c===S[0]}function gm(c){return!!ql&&ql in c}var bm=vs?Di:ru;function Wr(c){var f=c&&c.constructor,k=typeof f=="function"&&f.prototype||Et;return c===k}function fe(c){return c===c&&!Bn(c)}function af(c,f){return function(k){return k==null?!1:k[c]===f&&(f!==h||c in Zt(k))}}function X_(c){var f=fc(c,function(S){return k.size===T&&k.clear(),S}),k=f.cache;return f}function Vd(c,f){var k=c[1],S=f[1],L=k|S,F=L<(_e|te|we),G=S==we&&k==ie||S==we&&k==he&&c[7].length<=f[8]||S==(we|he)&&f[7].length<=f[8]&&k==ie;if(!(F||G))return c;S&_e&&(c[2]=f[2],L|=k&_e?0:Y);var J=f[3];if(J){var se=c[3];c[3]=se?Jh(se,J,f[4]):J,c[4]=se?Hi(c[3],P):f[4]}return J=f[5],J&&(se=c[5],c[5]=se?Xh(se,J,f[6]):J,c[6]=se?Hi(c[5],P):f[6]),J=f[7],J&&(c[7]=J),S&we&&(c[8]=c[8]==null?f[8]:Do(c[8],f[8])),c[9]==null&&(c[9]=f[9]),c[0]=f[0],c[1]=L,c}function _m(c){var f=[];if(c!=null)for(var k in Zt(c))f.push(k);return f}function ew(c){return yn.call(c)}function lf(c,f,k){return f=ft(f===h?c.length-1:f,0),function(){for(var S=arguments,L=-1,F=ft(S.length-f,0),G=ue(F);++L<F;)G[L]=S[f+L];L=-1;for(var J=ue(f+1);++L<f;)J[L]=S[L];return J[f]=k(G),xo(c,this,J)}}function xi(c,f){return f.length<2?c:Vr(c,fi(f,0,-1))}function wm(c,f){for(var k=c.length,S=Do(f.length,k),L=On(c);S--;){var F=f[S];c[S]=ao(F,k)?L[F]:h}return c}function cf(c,f){if(!(f==="constructor"&&typeof c[f]=="function")&&f!="__proto__")return c[f]}var df=vm(Fh),Gr=Lp||function(c,f){return Hn.setTimeout(c,f)},ri=vm($h);function km(c,f,k){var S=f+"";return ri(c,Ci(S,ym(J_(S),k)))}function vm(c){var f=0,k=0;return function(){var S=La(),L=nt-(S-k);if(k=S,L>0){if(++f>=Q)return arguments[0]}else f=0;return c.apply(h,arguments)}}function ir(c,f){var k=-1,S=c.length,L=S-1;for(f=f===h?S:f;++k<f;){var F=Lh(k,L),G=c[F];c[F]=c[k],c[k]=G}return c.length=f,c}var ai=X_(function(c){var f=[];return c.charCodeAt(0)===46&&f.push(""),c.replace($u,function(k,S,L,F){f.push(L?F.replace(cs,"$1"):S||k)}),f});function Xi(c){if(typeof c=="string"||Ro(c))return c;var f=c+"";return f=="0"&&1/c==-it?"-0":f}function es(c){if(c!=null){try{return bn.call(c)}catch{}try{return c+""}catch{}}return""}function ym(c,f){return Eo(St,function(k){var S="_."+k[0];f&k[1]&&!Sr(c,S)&&c.push(S)}),c.sort()}function sr(c){if(c instanceof Ft)return c.clone();var f=new si(c.__wrapped__,c.__chain__);return f.__actions__=On(c.__actions__),f.__index__=c.__index__,f.__values__=c.__values__,f}function tw(c,f,k){(k?qn(c,f,k):f===h)?f=1:f=ft(Mt(f),0);var S=c==null?0:c.length;if(!S||f<1)return[];for(var L=0,F=0,G=ue(Wl(S/f));L<S;)G[F++]=fi(c,L,L+=f);return G}function Am(c){for(var f=-1,k=c==null?0:c.length,S=0,L=[];++f<k;){var F=c[f];F&&(L[S++]=F)}return L}function Cm(){var c=arguments.length;if(!c)return[];for(var f=ue(c-1),k=arguments[0],S=c;S--;)f[S-1]=arguments[S];return ki(xt(k)?On(k):[k],bo(f,1))}var xm=Dt(function(c,f){return Kn(c)?ec(c,bo(f,1,Kn,!0)):[]}),dc=Dt(function(c,f){var k=Io(f);return Kn(k)&&(k=h),Kn(c)?ec(c,bo(f,1,Kn,!0),pt(k,2)):[]}),Em=Dt(function(c,f){var k=Io(f);return Kn(k)&&(k=h),Kn(c)?ec(c,bo(f,1,Kn,!0),h,k):[]});function Dm(c,f,k){var S=c==null?0:c.length;return S?(f=k||f===h?1:Mt(f),fi(c,f<0?0:f,S)):[]}function uf(c,f,k){var S=c==null?0:c.length;return S?(f=k||f===h?1:Mt(f),f=S-f,fi(c,0,f<0?0:f)):[]}function Tm(c,f){return c&&c.length?Xs(c,pt(f,3),!0,!0):[]}function Sm(c,f){return c&&c.length?Xs(c,pt(f,3),!0):[]}function Im(c,f,k,S){var L=c==null?0:c.length;return L?(k&&typeof k!="number"&&qn(c,f,k)&&(k=0,S=L),qp(c,f,k,S)):[]}function Mm(c,f,k){var S=c==null?0:c.length;if(!S)return-1;var L=k==null?0:Mt(k);return L<0&&(L=ft(S+L,0)),Da(c,pt(f,3),L)}function Pm(c,f,k){var S=c==null?0:c.length;if(!S)return-1;var L=S-1;return k!==h&&(L=Mt(k),L=k<0?ft(S+L,0):Do(L,S-1)),Da(c,pt(f,3),L,!0)}function hf(c){var f=c==null?0:c.length;return f?bo(c,1):[]}function Nm(c){var f=c==null?0:c.length;return f?bo(c,it):[]}function Bm(c,f){var k=c==null?0:c.length;return k?(f=f===h?1:Mt(f),bo(c,f)):[]}function nw(c){for(var f=-1,k=c==null?0:c.length,S={};++f<k;){var L=c[f];S[L[0]]=L[1]}return S}function ff(c){return c&&c.length?c[0]:h}function pf(c,f,k){var S=c==null?0:c.length;if(!S)return-1;var L=k==null?0:Mt(k);return L<0&&(L=ft(S+L,0)),Vi(c,f,L)}function mf(c){var f=c==null?0:c.length;return f?fi(c,0,-1):[]}var Om=Dt(function(c){var f=Sn(c,Gh);return f.length&&f[0]===c[0]?tc(f):[]}),Lm=Dt(function(c){var f=Io(c),k=Sn(c,Gh);return f===Io(k)?f=h:k.pop(),k.length&&k[0]===c[0]?tc(k,pt(f,2)):[]}),Rm=Dt(function(c){var f=Io(c),k=Sn(c,Gh);return f=typeof f=="function"?f:h,f&&k.pop(),k.length&&k[0]===c[0]?tc(k,h,f):[]});function ow(c,f){return c==null?"":y_.call(c,f)}function Io(c){var f=c==null?0:c.length;return f?c[f-1]:h}function Ud(c,f,k){var S=c==null?0:c.length;if(!S)return-1;var L=S;return k!==h&&(L=Mt(k),L=L<0?ft(S+L,0):Do(L,S-1)),f===f?hh(c,f,L):Da(c,qs,L,!0)}function iw(c,f){return c&&c.length?Js(c,Mt(f)):h}var sw=Dt(rr);function rr(c,f){return c&&c.length&&f&&f.length?Fa(c,f):c}function rw(c,f,k){return c&&c.length&&f&&f.length?Fa(c,f,pt(k,2)):c}function aw(c,f,k){return c&&c.length&&f&&f.length?Fa(c,f,h,k):c}var lw=Ji(function(c,f){var k=c==null?0:c.length,S=Eh(c,f);return Jp(c,Sn(f,function(L){return ao(L,k)?+L:L}).sort(sc)),S});function cw(c,f){var k=[];if(!(c&&c.length))return k;var S=-1,L=[],F=c.length;for(f=pt(f,3);++S<F;){var G=c[S];f(G,S,c)&&(k.push(G),L.push(S))}return Jp(c,L),k}function gf(c){return c==null?c:gh.call(c)}function dw(c,f,k){var S=c==null?0:c.length;return S?(k&&typeof k!="number"&&qn(c,f,k)?(f=0,k=S):(f=f==null?0:Mt(f),k=k===h?S:Mt(k)),fi(c,f,k)):[]}function uw(c,f){return $a(c,f)}function hw(c,f,k){return Hr(c,f,pt(k,2))}function fw(c,f){var k=c==null?0:c.length;if(k){var S=$a(c,f);if(S<k&&Gn(c[S],f))return S}return-1}function Kr(c,f){return $a(c,f,!0)}function pw(c,f,k){return Hr(c,f,pt(k,2),!0)}function mw(c,f){var k=c==null?0:c.length;if(k){var S=$a(c,f,!0)-1;if(Gn(c[S],f))return S}return-1}function zm(c){return c&&c.length?Vh(c):[]}function gw(c,f){return c&&c.length?Vh(c,pt(f,2)):[]}function bw(c){var f=c==null?0:c.length;return f?fi(c,1,f):[]}function _w(c,f,k){return c&&c.length?(f=k||f===h?1:Mt(f),fi(c,0,f<0?0:f)):[]}function ww(c,f,k){var S=c==null?0:c.length;return S?(f=k||f===h?1:Mt(f),f=S-f,fi(c,f<0?0:f,S)):[]}function kw(c,f){return c&&c.length?Xs(c,pt(f,3),!1,!0):[]}function bf(c,f){return c&&c.length?Xs(c,pt(f,3)):[]}var jm=Dt(function(c){return Es(bo(c,1,Kn,!0))}),pi=Dt(function(c){var f=Io(c);return Kn(f)&&(f=h),Es(bo(c,1,Kn,!0),pt(f,2))}),_f=Dt(function(c){var f=Io(c);return f=typeof f=="function"?f:h,Es(bo(c,1,Kn,!0),h,f)});function Fm(c){return c&&c.length?Es(c):[]}function uc(c,f){return c&&c.length?Es(c,pt(f,2)):[]}function $m(c,f){return f=typeof f=="function"?f:h,c&&c.length?Es(c,h,f):[]}function Yr(c){if(!(c&&c.length))return[];var f=0;return c=ui(c,function(k){if(Kn(k))return f=ft(k.length,f),!0}),Rl(f,function(k){return Sn(c,Ta(k))})}function Ka(c,f){if(!(c&&c.length))return[];var k=Yr(c);return f==null?k:Sn(k,function(S){return xo(f,h,S)})}var Vm=Dt(function(c,f){return Kn(c)?ec(c,f):[]}),Jt=Dt(function(c){return qh(ui(c,Kn))}),lo=Dt(function(c){var f=Io(c);return Kn(f)&&(f=h),qh(ui(c,Kn),pt(f,2))}),Qo=Dt(function(c){var f=Io(c);return f=typeof f=="function"?f:h,qh(ui(c,Kn),h,f)}),Um=Dt(Yr);function Wn(c,f){return Wh(c||[],f||[],Xl)}function co(c,f){return Wh(c||[],f||[],ic)}var Zo=Dt(function(c){var f=c.length,k=f>1?c[f-1]:h;return k=typeof k=="function"?(c.pop(),k):h,Ka(c,k)});function ts(c){var f=z(c);return f.__chain__=!0,f}function Fn(c,f){return f(c),c}function tn(c,f){return f(c)}var Ei=Ji(function(c){var f=c.length,k=f?c[0]:0,S=this.__wrapped__,L=function(F){return Eh(F,c)};return f>1||this.__actions__.length||!(S instanceof Ft)||!ao(k)?this.thru(L):(S=S.slice(k,+k+(f?1:0)),S.__actions__.push({func:tn,args:[L],thisArg:h}),new si(S,this.__chain__).thru(function(F){return f&&!F.length&&F.push(h),F}))});function vw(){return ts(this)}function wf(){return new si(this.value(),this.__chain__)}function Qt(){this.__values__===h&&(this.__values__=Jd(this.value()));var c=this.__index__>=this.__values__.length,f=c?h:this.__values__[this.__index__++];return{done:c,value:f}}function yw(){return this}function Hm(c){for(var f,k=this;k instanceof Zl;){var S=sr(k);S.__index__=0,S.__values__=h,f?L.__wrapped__=S:f=S;var L=S;k=k.__wrapped__}return L.__wrapped__=c,f}function Aw(){var c=this.__wrapped__;if(c instanceof Ft){var f=c;return this.__actions__.length&&(f=new Ft(this)),f=f.reverse(),f.__actions__.push({func:tn,args:[gf],thisArg:h}),new si(f,this.__chain__)}return this.thru(gf)}function Cw(){return Hh(this.__wrapped__,this.__actions__)}var qm=Nd(function(c,f,k){jt.call(c,k)?++c[k]:As(c,k,1)});function Wm(c,f,k){var S=xt(c)?Tr:$r;return k&&qn(c,f,k)&&(f=h),S(c,pt(f,3))}function Gm(c,f){var k=xt(c)?ui:Wp;return k(c,pt(f,3))}var Km=lm(Mm),Ya=lm(Pm);function wo(c,f){return bo(Zr(c,f),1)}function xw(c,f){return bo(Zr(c,f),it)}function Ew(c,f,k){return k=k===h?1:Mt(k),bo(Zr(c,f),k)}function Qr(c,f){var k=xt(c)?Eo:Ys;return k(c,pt(f,3))}function Ym(c,f){var k=xt(c)?sd:Hp;return k(c,pt(f,3))}var Qm=Nd(function(c,f,k){jt.call(c,k)?c[k].push(f):As(c,k,[f])});function Dw(c,f,k,S){c=Jo(c)?c:ea(c),k=k&&!S?Mt(k):0;var L=c.length;return k<0&&(k=ft(L+k,0)),Yn(c)?k<=L&&c.indexOf(f,k)>-1:!!L&&Vi(c,f,k)>-1}var Tw=Dt(function(c,f,k){var S=-1,L=typeof f=="function",F=Jo(c)?ue(c.length):[];return Ys(c,function(G){F[++S]=L?xo(f,G,k):_o(G,f,k)}),F}),Sw=Nd(function(c,f,k){As(c,k,f)});function Zr(c,f){var k=xt(c)?Sn:za;return k(c,pt(f,3))}function kf(c,f,k,S){return c==null?[]:(xt(f)||(f=f==null?[]:[f]),k=S?h:k,xt(k)||(k=k==null?[]:[k]),Zp(c,f,k))}var Iw=Nd(function(c,f,k){c[k?0:1].push(f)},function(){return[[],[]]});function Zm(c,f,k){var S=xt(c)?Ir:Ll,L=arguments.length<3;return S(c,pt(f,4),k,L,Ys)}function Mw(c,f,k){var S=xt(c)?xa:Ll,L=arguments.length<3;return S(c,pt(f,4),k,L,Hp)}function Qa(c,f){var k=xt(c)?ui:Wp;return k(c,Wd(pt(f,3)))}function Pw(c){var f=xt(c)?Ah:Xp;return f(c)}function Ms(c,f,k){(k?qn(c,f,k):f===h)?f=1:f=Mt(f);var S=xt(c)?L_:jh;return S(c,f)}function Nw(c){var f=xt(c)?Ch:em;return f(c)}function Jm(c){if(c==null)return 0;if(Jo(c))return Yn(c)?hi(c):c.length;var f=So(c);return f==de||f==xe?c.size:Zs(c).length}function Xm(c,f,k){var S=xt(c)?Ea:tm;return k&&qn(c,f,k)&&(f=h),S(c,pt(f,3))}var hc=Dt(function(c,f){if(c==null)return[];var k=f.length;return k>1&&qn(c,f[0],f[1])?f=[]:k>2&&qn(f[0],f[1],f[2])&&(f=[f[0]]),Zp(c,bo(f,1),[])}),Hd=Oa||function(){return Hn.Date.now()};function eg(c,f){if(typeof f!="function")throw new Wo(w);return c=Mt(c),function(){if(--c<1)return f.apply(this,arguments)}}function tg(c,f,k){return f=k?h:f,f=c&&f==null?c.length:f,Ss(c,we,h,h,h,h,f)}function ng(c,f){var k;if(typeof f!="function")throw new Wo(w);return c=Mt(c),function(){return--c>0&&(k=f.apply(this,arguments)),c<=1&&(f=h),k}}var qd=Dt(function(c,f,k){var S=_e;if(k.length){var L=Hi(k,Wa(qd));S|=V}return Ss(c,S,f,k,L)}),vf=Dt(function(c,f,k){var S=_e|te;if(k.length){var L=Hi(k,Wa(vf));S|=V}return Ss(f,S,c,k,L)});function og(c,f,k){f=k?h:f;var S=Ss(c,ie,h,h,h,h,h,f);return S.placeholder=og.placeholder,S}function yf(c,f,k){f=k?h:f;var S=Ss(c,ke,h,h,h,h,h,f);return S.placeholder=yf.placeholder,S}function Af(c,f,k){var S,L,F,G,J,se,Ae=0,ye=!1,Oe=!1,tt=!0;if(typeof c!="function")throw new Wo(w);f=li(f)||0,Bn(k)&&(ye=!!k.leading,Oe="maxWait"in k,F=Oe?ft(li(k.maxWait)||0,f):F,tt="trailing"in k?!!k.trailing:tt);function Ye(Cn){var ho=S,os=L;return S=L=h,Ae=Cn,G=c.apply(os,ho),G}function mt(Cn){return Ae=Cn,J=Gr(Lt,f),ye?Ye(Cn):G}function Ot(Cn){var ho=Cn-se,os=Cn-Ae,ab=f-ho;return Oe?Do(ab,F-os):ab}function gt(Cn){var ho=Cn-se,os=Cn-Ae;return se===h||ho>=f||ho<0||Oe&&os>=F}function Lt(){var Cn=Hd();if(gt(Cn))return Vt(Cn);J=Gr(Lt,Ot(Cn))}function Vt(Cn){return J=h,tt&&S?Ye(Cn):(S=L=h,G)}function Xo(){J!==h&&om(J),Ae=0,S=se=L=J=h}function Fo(){return J===h?G:Vt(Hd())}function Zn(){var Cn=Hd(),ho=gt(Cn);if(S=arguments,L=this,se=Cn,ho){if(J===h)return mt(se);if(Oe)return om(J),J=Gr(Lt,f),Ye(se)}return J===h&&(J=Gr(Lt,f)),G}return Zn.cancel=Xo,Zn.flush=Fo,Zn}var Cf=Dt(function(c,f){return xd(c,1,f)}),ig=Dt(function(c,f,k){return xd(c,li(f)||0,k)});function sg(c){return Ss(c,Me)}function fc(c,f){if(typeof c!="function"||f!=null&&typeof f!="function")throw new Wo(w);var k=function(){var S=arguments,L=f?f.apply(this,S):S[0],F=k.cache;if(F.has(L))return F.get(L);var G=c.apply(this,S);return k.cache=F.set(L,G)||F,G};return k.cache=new(fc.Cache||ro),k}fc.Cache=ro;function Wd(c){if(typeof c!="function")throw new Wo(w);return function(){var f=arguments;switch(f.length){case 0:return!c.call(this);case 1:return!c.call(this,f[0]);case 2:return!c.call(this,f[0],f[1]);case 3:return!c.call(this,f[0],f[1],f[2])}return!c.apply(this,f)}}function rg(c){return ng(2,c)}var Bw=nm(function(c,f){f=f.length==1&&xt(f[0])?Sn(f[0],Bo(pt())):Sn(bo(f,1),Bo(pt()));var k=f.length;return Dt(function(S){for(var L=-1,F=Do(S.length,k);++L<F;)S[L]=f[L].call(this,S[L]);return xo(c,this,S)})}),xf=Dt(function(c,f){var k=Hi(f,Wa(xf));return Ss(c,V,h,f,k)}),ag=Dt(function(c,f){var k=Hi(f,Wa(ag));return Ss(c,Ne,h,f,k)}),Ow=Ji(function(c,f){return Ss(c,he,h,h,h,f)});function Lw(c,f){if(typeof c!="function")throw new Wo(w);return f=f===h?f:Mt(f),Dt(c,f)}function Rw(c,f){if(typeof c!="function")throw new Wo(w);return f=f==null?0:ft(Mt(f),0),Dt(function(k){var S=k[f],L=Ts(k,0,f);return S&&ki(L,S),xo(c,this,L)})}function zw(c,f,k){var S=!0,L=!0;if(typeof c!="function")throw new Wo(w);return Bn(k)&&(S="leading"in k?!!k.leading:S,L="trailing"in k?!!k.trailing:L),Af(c,f,{leading:S,maxWait:f,trailing:L})}function Ef(c){return tg(c,1)}function Za(c,f){return xf(Kh(f),c)}function jw(){if(!arguments.length)return[];var c=arguments[0];return xt(c)?c:[c]}function Fw(c){return Go(c,j)}function $w(c,f){return f=typeof f=="function"?f:h,Go(c,j,f)}function Vw(c){return Go(c,N|j)}function Df(c,f){return f=typeof f=="function"?f:h,Go(c,N|j,f)}function Jr(c,f){return f==null||Up(c,f,uo(f))}function Gn(c,f){return c===f||c!==c&&f!==f}var pc=Ld(Ih),Uw=Ld(function(c,f){return c>=f}),ar=Ph(function(){return arguments}())?Ph:function(c){return Ln(c)&&jt.call(c,"callee")&&!W.call(c,"callee")},xt=ue.isArray,lg=ed?Bo(ed):nc;function Jo(c){return c!=null&&mc(c.length)&&!Di(c)}function Kn(c){return Ln(c)&&Jo(c)}function Hw(c){return c===!0||c===!1||Ln(c)&&To(c)==Ue}var Ps=v_||ru,cg=td?Bo(td):Kp;function dg(c){return Ln(c)&&c.nodeType===1&&!Ja(c)}function ug(c){if(c==null)return!0;if(Jo(c)&&(xt(c)||typeof c=="string"||typeof c.splice=="function"||Ps(c)||Xa(c)||ar(c)))return!c.length;var f=So(c);if(f==de||f==xe)return!c.size;if(Wr(c))return!Zs(c).length;for(var k in c)if(jt.call(c,k))return!1;return!0}function hg(c,f){return Qs(c,f)}function fg(c,f,k){k=typeof k=="function"?k:h;var S=k?k(c,f):h;return S===h?Qs(c,f,h,k):!!S}function lr(c){if(!Ln(c))return!1;var f=To(c);return f==Ze||f==Ht||typeof c.message=="string"&&typeof c.name=="string"&&!Ja(c)}function Gd(c){return typeof c=="number"&&fh(c)}function Di(c){if(!Bn(c))return!1;var f=To(c);return f==q||f==Z||f==Be||f==ve}function Kd(c){return typeof c=="number"&&c==Mt(c)}function mc(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=yt}function Bn(c){var f=typeof c;return c!=null&&(f=="object"||f=="function")}function Ln(c){return c!=null&&typeof c=="object"}var pg=nd?Bo(nd):Qp;function $t(c,f){return c===f||xs(c,f,rf(f))}function mg(c,f,k){return k=typeof k=="function"?k:h,xs(c,f,rf(f),k)}function qw(c){return Yd(c)&&c!=+c}function gg(c){if(bm(c))throw new At(y);return $e(c)}function bg(c){return c===null}function Lo(c){return c==null}function Yd(c){return typeof c=="number"||Ln(c)&&To(c)==ge}function Ja(c){if(!Ln(c)||To(c)!=ze)return!1;var f=D(c);if(f===null)return!0;var k=jt.call(f,"constructor")&&f.constructor;return typeof k=="function"&&k instanceof k&&bn.call(k)==Ba}var Qd=Ca?Bo(Ca):_t;function Ww(c){return Kd(c)&&c>=-yt&&c<=yt}var Tf=$i?Bo($i):Td;function Yn(c){return typeof c=="string"||!xt(c)&&Ln(c)&&To(c)==ot}function Ro(c){return typeof c=="symbol"||Ln(c)&&To(c)==Ge}var Xa=od?Bo(od):Zi;function _g(c){return c===h}function Zd(c){return Ln(c)&&So(c)==at}function Sf(c){return Ln(c)&&To(c)==Je}var wg=Ld(oc),Qn=Ld(function(c,f){return c<=f});function Jd(c){if(!c)return[];if(Jo(c))return Yn(c)?ii(c):On(c);if(In&&c[In])return hd(c[In]());var f=So(c),k=f==de?Vl:f==xe?Nr:ea;return k(c)}function Ti(c){if(!c)return c===0?c:0;if(c=li(c),c===it||c===-it){var f=c<0?-1:1;return f*oo}return c===c?c:0}function Mt(c){var f=Ti(c),k=f%1;return f===f?k?f-k:f:0}function kg(c){return c?Qi(Mt(c),0,un):0}function li(c){if(typeof c=="number")return c;if(Ro(c))return $n;if(Bn(c)){var f=typeof c.valueOf=="function"?c.valueOf():c;c=Bn(f)?f+"":f}if(typeof c!="string")return c===0?c:+c;c=zl(c);var k=Gu.test(c);return k||Bt.test(c)?lh(c.slice(2),k?2:8):Wu.test(c)?$n:+c}function vg(c){return Ai(c,zo(c))}function Xr(c){return c?Qi(Mt(c),-yt,yt):c===0?c:0}function nn(c){return c==null?"":Ko(c)}var Gw=tr(function(c,f){if(Wr(f)||Jo(f)){Ai(f,uo(f),c);return}for(var k in f)jt.call(f,k)&&Xl(c,k,f[k])}),An=tr(function(c,f){Ai(f,zo(f),c)}),gc=tr(function(c,f,k,S){Ai(f,zo(f),c,S)}),Kw=tr(function(c,f,k,S){Ai(f,uo(f),c,S)}),Xd=Ji(Eh);function yg(c,f){var k=Rr(c);return f==null?k:xh(k,f)}var Yw=Dt(function(c,f){c=Zt(c);var k=-1,S=f.length,L=S>2?f[2]:h;for(L&&qn(f[0],f[1],L)&&(S=1);++k<S;)for(var F=f[k],G=zo(F),J=-1,se=G.length;++J<se;){var Ae=G[J],ye=c[Ae];(ye===h||Gn(ye,Et[Ae])&&!jt.call(c,Ae))&&(c[Ae]=F[Ae])}return c}),Ag=Dt(function(c){return c.push(h,Rd),xo(Tg,h,c)});function Qw(c,f){return Mr(c,pt(f,3),Cs)}function Cg(c,f){return Mr(c,pt(f,3),Th)}function Zw(c,f){return c==null?c:Dh(c,pt(f,3),zo)}function If(c,f){return c==null?c:Gp(c,pt(f,3),zo)}function Jw(c,f){return c&&Cs(c,pt(f,3))}function xg(c,f){return c&&Th(c,pt(f,3))}function Xw(c){return c==null?[]:Dd(c,uo(c))}function el(c){return c==null?[]:Dd(c,zo(c))}function cr(c,f,k){var S=c==null?h:Vr(c,f);return S===h?k:S}function Mf(c,f){return c!=null&&Is(c,f,j_)}function eu(c,f){return c!=null&&Is(c,f,F_)}var ek=cm(function(c,f,k){f!=null&&typeof f.toString!="function"&&(f=yn.call(f)),c[f]=k},$f(jo)),Eg=cm(function(c,f,k){f!=null&&typeof f.toString!="function"&&(f=yn.call(f)),jt.call(c,f)?c[f].push(k):c[f]=[k]},pt),Dg=Dt(_o);function uo(c){return Jo(c)?yh(c):Zs(c)}function zo(c){return Jo(c)?yh(c,!0):Nh(c)}function tk(c,f){var k={};return f=pt(f,3),Cs(c,function(S,L,F){As(k,f(S,L,F),S)}),k}function Pf(c,f){var k={};return f=pt(f,3),Cs(c,function(S,L,F){As(k,L,f(S,L,F))}),k}var nk=tr(function(c,f,k){ja(c,f,k)}),Tg=tr(function(c,f,k,S){ja(c,f,k,S)}),ok=Ji(function(c,f){var k={};if(c==null)return k;var S=!1;f=Sn(f,function(F){return F=Ds(F,c),S||(S=F.length>1),F}),Ai(c,zd(c),k),S&&(k=Go(k,N|M|j,K_));for(var L=f.length;L--;)Va(k,f[L]);return k});function Sg(c,f){return Ig(c,Wd(pt(f)))}var ik=Ji(function(c,f){return c==null?{}:Oh(c,f)});function Ig(c,f){if(c==null)return{};var k=Sn(zd(c),function(S){return[S]});return f=pt(f),Md(c,k,function(S,L){return f(S,L[0])})}function Mg(c,f,k){f=Ds(f,c);var S=-1,L=f.length;for(L||(L=1,c=h);++S<L;){var F=c==null?h:c[Xi(f[S])];F===h&&(S=L,F=k),c=Di(F)?F.call(c):F}return c}function sk(c,f,k){return c==null?c:ic(c,f,k)}function Pg(c,f,k,S){return S=typeof S=="function"?S:h,c==null?c:ic(c,f,k,S)}var Ng=hm(uo),Nf=hm(zo);function rk(c,f,k){var S=xt(c),L=S||Ps(c)||Xa(c);if(f=pt(f,4),k==null){var F=c&&c.constructor;L?k=S?new F:[]:Bn(c)?k=Di(F)?Rr(D(c)):{}:k={}}return(L?Eo:Cs)(c,function(G,J,se){return f(k,G,J,se)}),k}function dr(c,f){return c==null?!0:Va(c,f)}function Bf(c,f,k){return c==null?c:Yo(c,f,Kh(k))}function Bg(c,f,k,S){return S=typeof S=="function"?S:h,c==null?c:Yo(c,f,Kh(k),S)}function ea(c){return c==null?[]:jl(c,uo(c))}function Og(c){return c==null?[]:jl(c,zo(c))}function ak(c,f,k){return k===h&&(k=f,f=h),k!==h&&(k=li(k),k=k===k?k:0),f!==h&&(f=li(f),f=f===f?f:0),Qi(li(c),f,k)}function lk(c,f,k){return f=Ti(f),k===h?(k=f,f=0):k=Ti(k),c=li(c),$_(c,f,k)}function Lg(c,f,k){if(k&&typeof k!="boolean"&&qn(c,f,k)&&(f=k=h),k===h&&(typeof f=="boolean"?(k=f,f=h):typeof c=="boolean"&&(k=c,c=h)),c===h&&f===h?(c=0,f=1):(c=Ti(c),f===h?(f=c,c=0):f=Ti(f)),c>f){var S=c;c=f,f=S}if(k||c%1||f%1){var L=mh();return Do(c+L*(f-c+Pl("1e-"+((L+"").length-1))),f)}return Lh(c,f)}var ck=Ha(function(c,f,k){return f=f.toLowerCase(),c+(k?Of(f):f)});function Of(c){return jf(nn(c).toLowerCase())}function Rg(c){return c=nn(c),c&&c.replace(Yu,Ma).replace(Zc,"")}function dk(c,f,k){c=nn(c),f=Ko(f);var S=c.length;k=k===h?S:Qi(Mt(k),0,S);var L=k;return k-=f.length,k>=0&&c.slice(k,L)==f}function uk(c){return c=nn(c),c&&zu.test(c)?c.replace(vt,$l):c}function zg(c){return c=nn(c),c&&Vu.test(c)?c.replace(Cl,"\\$&"):c}var hk=Ha(function(c,f,k){return c+(k?"-":"")+f.toLowerCase()}),jg=Ha(function(c,f,k){return c+(k?" ":"")+f.toLowerCase()}),fk=am("toLowerCase");function pk(c,f,k){c=nn(c),f=Mt(f);var S=f?hi(c):0;if(!f||S>=f)return c;var L=(f-S)/2;return Od(Gl(L),k)+c+Od(Wl(L),k)}function mk(c,f,k){c=nn(c),f=Mt(f);var S=f?hi(c):0;return f&&S<f?c+Od(f-S,k):c}function Fg(c,f,k){c=nn(c),f=Mt(f);var S=f?hi(c):0;return f&&S<f?Od(f-S,k)+c:c}function gk(c,f,k){return k||f==null?f=0:f&&(f=+f),ph(nn(c).replace(yr,""),f||0)}function Lf(c,f,k){return(k?qn(c,f,k):f===h)?f=1:f=Mt(f),zh(nn(c),f)}function Rf(){var c=arguments,f=nn(c[0]);return c.length<3?f:f.replace(c[1],c[2])}var zf=Ha(function(c,f,k){return c+(k?"_":"")+f.toLowerCase()});function $g(c,f,k){return k&&typeof k!="number"&&qn(c,f,k)&&(f=k=h),k=k===h?un:k>>>0,k?(c=nn(c),c&&(typeof f=="string"||f!=null&&!Qd(f))&&(f=Ko(f),!f&&Ui(c))?Ts(ii(c),0,k):c.split(f,k)):[]}var Vg=Ha(function(c,f,k){return c+(k?" ":"")+jf(f)});function bk(c,f,k){return c=nn(c),k=k==null?0:Qi(Mt(k),0,c.length),f=Ko(f),c.slice(k,k+f.length)==f}function Ug(c,f,k){var S=z.templateSettings;k&&qn(c,f,k)&&(f=h),c=nn(c),f=gc({},f,S,of);var L=gc({},f.imports,S.imports,of),F=uo(L),G=jl(L,F),J,se,Ae=0,ye=f.interpolate||_a,Oe="__p += '",tt=Na((f.escape||_a).source+"|"+ye.source+"|"+(ye===qo?Cr:_a).source+"|"+(f.evaluate||_a).source+"|$","g"),Ye="//# sourceURL="+(jt.call(f,"sourceURL")?(f.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ah+"]")+`
`;c.replace(tt,function(gt,Lt,Vt,Xo,Fo,Zn){return Vt||(Vt=Xo),Oe+=c.slice(Ae,Zn).replace(Qu,uh),Lt&&(J=!0,Oe+=`' +
__e(`+Lt+`) +
'`),Fo&&(se=!0,Oe+=`';
`+Fo+`;
__p += '`),Vt&&(Oe+=`' +
((__t = (`+Vt+`)) == null ? '' : __t) +
'`),Ae=Zn+gt.length,gt}),Oe+=`';
`;var mt=jt.call(f,"variable")&&f.variable;if(!mt)Oe=`with (obj) {
`+Oe+`
}
`;else if(qu.test(mt))throw new At(v);Oe=(se?Oe.replace(ma,""):Oe).replace(Al,"$1").replace(zc,"$1;"),Oe="function("+(mt||"obj")+`) {
`+(mt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(J?", __e = _.escape":"")+(se?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Oe+`return __p
}`;var Ot=qg(function(){return Yt(F,Ye+"return "+Oe).apply(h,G)});if(Ot.source=Oe,lr(Ot))throw Ot;return Ot}function _k(c){return nn(c).toLowerCase()}function tu(c){return nn(c).toUpperCase()}function nu(c,f,k){if(c=nn(c),c&&(k||f===h))return zl(c);if(!c||!(f=Ko(f)))return c;var S=ii(c),L=ii(f),F=Ws(S,L),G=Fl(S,L)+1;return Ts(S,F,G).join("")}function wk(c,f,k){if(c=nn(c),c&&(k||f===h))return c.slice(0,fd(c)+1);if(!c||!(f=Ko(f)))return c;var S=ii(c),L=Fl(S,ii(f))+1;return Ts(S,0,L).join("")}function kk(c,f,k){if(c=nn(c),c&&(k||f===h))return c.replace(yr,"");if(!c||!(f=Ko(f)))return c;var S=ii(c),L=Ws(S,ii(f));return Ts(S,L).join("")}function Hg(c,f){var k=Fe,S=Ke;if(Bn(f)){var L="separator"in f?f.separator:L;k="length"in f?Mt(f.length):k,S="omission"in f?Ko(f.omission):S}c=nn(c);var F=c.length;if(Ui(c)){var G=ii(c);F=G.length}if(k>=F)return c;var J=k-hi(S);if(J<1)return S;var se=G?Ts(G,0,J).join(""):c.slice(0,J);if(L===h)return se+S;if(G&&(J+=se.length-J),Qd(L)){if(c.slice(J).search(L)){var Ae,ye=se;for(L.global||(L=Na(L.source,nn(xl.exec(L))+"g")),L.lastIndex=0;Ae=L.exec(ye);)var Oe=Ae.index;se=se.slice(0,Oe===h?J:Oe)}}else if(c.indexOf(Ko(L),J)!=J){var tt=se.lastIndexOf(L);tt>-1&&(se=se.slice(0,tt))}return se+S}function vk(c){return c=nn(c),c&&Ru.test(c)?c.replace(jc,pd):c}var bc=Ha(function(c,f,k){return c+(k?" ":"")+f.toUpperCase()}),jf=am("toUpperCase");function Ff(c,f,k){return c=nn(c),f=k?h:f,f===h?ud(c)?bd(c):ad(c):c.match(f)||[]}var qg=Dt(function(c,f){try{return xo(c,h,f)}catch(k){return lr(k)?k:new At(k)}}),yk=Ji(function(c,f){return Eo(f,function(k){k=Xi(k),As(c,k,qd(c[k],c))}),c});function Wg(c){var f=c==null?0:c.length,k=pt();return c=f?Sn(c,function(S){if(typeof S[1]!="function")throw new Wo(w);return[k(S[0]),S[1]]}):[],Dt(function(S){for(var L=-1;++L<f;){var F=c[L];if(xo(F[0],this,S))return xo(F[1],this,S)}})}function Ak(c){return z_(Go(c,N))}function $f(c){return function(){return c}}function Ck(c,f){return c==null||c!==c?f:c}var ou=ef(),Vf=ef(!0);function jo(c){return c}function iu(c){return Sd(typeof c=="function"?c:Go(c,N))}function ns(c){return Ur(Go(c,N))}function Gg(c,f){return Bh(c,Go(f,N))}var xk=Dt(function(c,f){return function(k){return _o(k,c,f)}}),Kg=Dt(function(c,f){return function(k){return _o(c,k,f)}});function Uf(c,f,k){var S=uo(f),L=Dd(f,S);k==null&&!(Bn(f)&&(L.length||!S.length))&&(k=f,f=c,c=this,L=Dd(f,uo(f)));var F=!(Bn(k)&&"chain"in k)||!!k.chain,G=Di(c);return Eo(L,function(J){var se=f[J];c[J]=se,G&&(c.prototype[J]=function(){var Ae=this.__chain__;if(F||Ae){var ye=c(this.__wrapped__),Oe=ye.__actions__=On(this.__actions__);return Oe.push({func:se,args:arguments,thisArg:c}),ye.__chain__=Ae,ye}return se.apply(c,ki([this.value()],arguments))})}),c}function Yg(){return Hn._===this&&(Hn._=wd),this}function su(){}function Qg(c){return c=Mt(c),Dt(function(f){return Js(f,c)})}var Zg=tf(Sn),ur=tf(Tr),tl=tf(Ea);function nl(c){return Ie(c)?Ta(Xi(c)):V_(c)}function Jg(c){return function(f){return c==null?h:Vr(c,f)}}var Ek=ac(),hr=ac(!0);function Hf(){return[]}function ru(){return!1}function Xg(){return{}}function eb(){return""}function qf(){return!0}function Wf(c,f){if(c=Mt(c),c<1||c>yt)return[];var k=un,S=Do(c,un);f=pt(f),c-=un;for(var L=Rl(S,f);++k<c;)f(k);return L}function au(c){return xt(c)?Sn(c,Xi):Ro(c)?[c]:On(ai(nn(c)))}function lu(c){var f=++ys;return nn(c)+f}var tb=nr(function(c,f){return c+f},0),Dk=nf("ceil"),Tk=nr(function(c,f){return c/f},1),nb=nf("floor");function ob(c){return c&&c.length?Ed(c,jo,Ih):h}function Sk(c,f){return c&&c.length?Ed(c,pt(f,2),Ih):h}function Ik(c){return Pr(c,jo)}function Mk(c,f){return Pr(c,pt(f,2))}function Pk(c){return c&&c.length?Ed(c,jo,oc):h}function ol(c,f){return c&&c.length?Ed(c,pt(f,2),oc):h}var il=nr(function(c,f){return c*f},1),ib=nf("round"),sb=nr(function(c,f){return c-f},0);function Nk(c){return c&&c.length?Ia(c,jo):0}function rb(c,f){return c&&c.length?Ia(c,pt(f,2)):0}return z.after=eg,z.ary=tg,z.assign=Gw,z.assignIn=An,z.assignInWith=gc,z.assignWith=Kw,z.at=Xd,z.before=ng,z.bind=qd,z.bindAll=yk,z.bindKey=vf,z.castArray=jw,z.chain=ts,z.chunk=tw,z.compact=Am,z.concat=Cm,z.cond=Wg,z.conforms=Ak,z.constant=$f,z.countBy=qm,z.create=yg,z.curry=og,z.curryRight=yf,z.debounce=Af,z.defaults=Yw,z.defaultsDeep=Ag,z.defer=Cf,z.delay=ig,z.difference=xm,z.differenceBy=dc,z.differenceWith=Em,z.drop=Dm,z.dropRight=uf,z.dropRightWhile=Tm,z.dropWhile=Sm,z.fill=Im,z.filter=Gm,z.flatMap=wo,z.flatMapDeep=xw,z.flatMapDepth=Ew,z.flatten=hf,z.flattenDeep=Nm,z.flattenDepth=Bm,z.flip=sg,z.flow=ou,z.flowRight=Vf,z.fromPairs=nw,z.functions=Xw,z.functionsIn=el,z.groupBy=Qm,z.initial=mf,z.intersection=Om,z.intersectionBy=Lm,z.intersectionWith=Rm,z.invert=ek,z.invertBy=Eg,z.invokeMap=Tw,z.iteratee=iu,z.keyBy=Sw,z.keys=uo,z.keysIn=zo,z.map=Zr,z.mapKeys=tk,z.mapValues=Pf,z.matches=ns,z.matchesProperty=Gg,z.memoize=fc,z.merge=nk,z.mergeWith=Tg,z.method=xk,z.methodOf=Kg,z.mixin=Uf,z.negate=Wd,z.nthArg=Qg,z.omit=ok,z.omitBy=Sg,z.once=rg,z.orderBy=kf,z.over=Zg,z.overArgs=Bw,z.overEvery=ur,z.overSome=tl,z.partial=xf,z.partialRight=ag,z.partition=Iw,z.pick=ik,z.pickBy=Ig,z.property=nl,z.propertyOf=Jg,z.pull=sw,z.pullAll=rr,z.pullAllBy=rw,z.pullAllWith=aw,z.pullAt=lw,z.range=Ek,z.rangeRight=hr,z.rearg=Ow,z.reject=Qa,z.remove=cw,z.rest=Lw,z.reverse=gf,z.sampleSize=Ms,z.set=sk,z.setWith=Pg,z.shuffle=Nw,z.slice=dw,z.sortBy=hc,z.sortedUniq=zm,z.sortedUniqBy=gw,z.split=$g,z.spread=Rw,z.tail=bw,z.take=_w,z.takeRight=ww,z.takeRightWhile=kw,z.takeWhile=bf,z.tap=Fn,z.throttle=zw,z.thru=tn,z.toArray=Jd,z.toPairs=Ng,z.toPairsIn=Nf,z.toPath=au,z.toPlainObject=vg,z.transform=rk,z.unary=Ef,z.union=jm,z.unionBy=pi,z.unionWith=_f,z.uniq=Fm,z.uniqBy=uc,z.uniqWith=$m,z.unset=dr,z.unzip=Yr,z.unzipWith=Ka,z.update=Bf,z.updateWith=Bg,z.values=ea,z.valuesIn=Og,z.without=Vm,z.words=Ff,z.wrap=Za,z.xor=Jt,z.xorBy=lo,z.xorWith=Qo,z.zip=Um,z.zipObject=Wn,z.zipObjectDeep=co,z.zipWith=Zo,z.entries=Ng,z.entriesIn=Nf,z.extend=An,z.extendWith=gc,Uf(z,z),z.add=tb,z.attempt=qg,z.camelCase=ck,z.capitalize=Of,z.ceil=Dk,z.clamp=ak,z.clone=Fw,z.cloneDeep=Vw,z.cloneDeepWith=Df,z.cloneWith=$w,z.conformsTo=Jr,z.deburr=Rg,z.defaultTo=Ck,z.divide=Tk,z.endsWith=dk,z.eq=Gn,z.escape=uk,z.escapeRegExp=zg,z.every=Wm,z.find=Km,z.findIndex=Mm,z.findKey=Qw,z.findLast=Ya,z.findLastIndex=Pm,z.findLastKey=Cg,z.floor=nb,z.forEach=Qr,z.forEachRight=Ym,z.forIn=Zw,z.forInRight=If,z.forOwn=Jw,z.forOwnRight=xg,z.get=cr,z.gt=pc,z.gte=Uw,z.has=Mf,z.hasIn=eu,z.head=ff,z.identity=jo,z.includes=Dw,z.indexOf=pf,z.inRange=lk,z.invoke=Dg,z.isArguments=ar,z.isArray=xt,z.isArrayBuffer=lg,z.isArrayLike=Jo,z.isArrayLikeObject=Kn,z.isBoolean=Hw,z.isBuffer=Ps,z.isDate=cg,z.isElement=dg,z.isEmpty=ug,z.isEqual=hg,z.isEqualWith=fg,z.isError=lr,z.isFinite=Gd,z.isFunction=Di,z.isInteger=Kd,z.isLength=mc,z.isMap=pg,z.isMatch=$t,z.isMatchWith=mg,z.isNaN=qw,z.isNative=gg,z.isNil=Lo,z.isNull=bg,z.isNumber=Yd,z.isObject=Bn,z.isObjectLike=Ln,z.isPlainObject=Ja,z.isRegExp=Qd,z.isSafeInteger=Ww,z.isSet=Tf,z.isString=Yn,z.isSymbol=Ro,z.isTypedArray=Xa,z.isUndefined=_g,z.isWeakMap=Zd,z.isWeakSet=Sf,z.join=ow,z.kebabCase=hk,z.last=Io,z.lastIndexOf=Ud,z.lowerCase=jg,z.lowerFirst=fk,z.lt=wg,z.lte=Qn,z.max=ob,z.maxBy=Sk,z.mean=Ik,z.meanBy=Mk,z.min=Pk,z.minBy=ol,z.stubArray=Hf,z.stubFalse=ru,z.stubObject=Xg,z.stubString=eb,z.stubTrue=qf,z.multiply=il,z.nth=iw,z.noConflict=Yg,z.noop=su,z.now=Hd,z.pad=pk,z.padEnd=mk,z.padStart=Fg,z.parseInt=gk,z.random=Lg,z.reduce=Zm,z.reduceRight=Mw,z.repeat=Lf,z.replace=Rf,z.result=Mg,z.round=ib,z.runInContext=ne,z.sample=Pw,z.size=Jm,z.snakeCase=zf,z.some=Xm,z.sortedIndex=uw,z.sortedIndexBy=hw,z.sortedIndexOf=fw,z.sortedLastIndex=Kr,z.sortedLastIndexBy=pw,z.sortedLastIndexOf=mw,z.startCase=Vg,z.startsWith=bk,z.subtract=sb,z.sum=Nk,z.sumBy=rb,z.template=Ug,z.times=Wf,z.toFinite=Ti,z.toInteger=Mt,z.toLength=kg,z.toLower=_k,z.toNumber=li,z.toSafeInteger=Xr,z.toString=nn,z.toUpper=tu,z.trim=nu,z.trimEnd=wk,z.trimStart=kk,z.truncate=Hg,z.unescape=vk,z.uniqueId=lu,z.upperCase=bc,z.upperFirst=jf,z.each=Qr,z.eachRight=Ym,z.first=ff,Uf(z,function(){var c={};return Cs(z,function(f,k){jt.call(z.prototype,k)||(c[k]=f)}),c}(),{chain:!1}),z.VERSION=g,Eo(["bind","bindKey","curry","curryRight","partial","partialRight"],function(c){z[c].placeholder=z}),Eo(["drop","take"],function(c,f){Ft.prototype[c]=function(k){k=k===h?1:ft(Mt(k),0);var S=this.__filtered__&&!f?new Ft(this):this.clone();return S.__filtered__?S.__takeCount__=Do(k,S.__takeCount__):S.__views__.push({size:Do(k,un),type:c+(S.__dir__<0?"Right":"")}),S},Ft.prototype[c+"Right"]=function(k){return this.reverse()[c](k).reverse()}}),Eo(["filter","map","takeWhile"],function(c,f){var k=f+1,S=k==Le||k==Qe;Ft.prototype[c]=function(L){var F=this.clone();return F.__iteratees__.push({iteratee:pt(L,3),type:k}),F.__filtered__=F.__filtered__||S,F}}),Eo(["head","last"],function(c,f){var k="take"+(f?"Right":"");Ft.prototype[c]=function(){return this[k](1).value()[0]}}),Eo(["initial","tail"],function(c,f){var k="drop"+(f?"":"Right");Ft.prototype[c]=function(){return this.__filtered__?new Ft(this):this[k](1)}}),Ft.prototype.compact=function(){return this.filter(jo)},Ft.prototype.find=function(c){return this.filter(c).head()},Ft.prototype.findLast=function(c){return this.reverse().find(c)},Ft.prototype.invokeMap=Dt(function(c,f){return typeof c=="function"?new Ft(this):this.map(function(k){return _o(k,c,f)})}),Ft.prototype.reject=function(c){return this.filter(Wd(pt(c)))},Ft.prototype.slice=function(c,f){c=Mt(c);var k=this;return k.__filtered__&&(c>0||f<0)?new Ft(k):(c<0?k=k.takeRight(-c):c&&(k=k.drop(c)),f!==h&&(f=Mt(f),k=f<0?k.dropRight(-f):k.take(f-c)),k)},Ft.prototype.takeRightWhile=function(c){return this.reverse().takeWhile(c).reverse()},Ft.prototype.toArray=function(){return this.take(un)},Cs(Ft.prototype,function(c,f){var k=/^(?:filter|find|map|reject)|While$/.test(f),S=/^(?:head|last)$/.test(f),L=z[S?"take"+(f=="last"?"Right":""):f],F=S||/^find/.test(f);!L||(z.prototype[f]=function(){var G=this.__wrapped__,J=S?[1]:arguments,se=G instanceof Ft,Ae=J[0],ye=se||xt(G),Oe=function(Lt){var Vt=L.apply(z,ki([Lt],J));return S&&tt?Vt[0]:Vt};ye&&k&&typeof Ae=="function"&&Ae.length!=1&&(se=ye=!1);var tt=this.__chain__,Ye=!!this.__actions__.length,mt=F&&!tt,Ot=se&&!Ye;if(!F&&ye){G=Ot?G:new Ft(this);var gt=c.apply(G,J);return gt.__actions__.push({func:tn,args:[Oe],thisArg:h}),new si(gt,tt)}return mt&&Ot?c.apply(this,J):(gt=this.thru(Oe),mt?S?gt.value()[0]:gt.value():gt)})}),Eo(["pop","push","shift","sort","splice","unshift"],function(c){var f=Or[c],k=/^(?:push|sort|unshift)$/.test(c)?"tap":"thru",S=/^(?:pop|shift)$/.test(c);z.prototype[c]=function(){var L=arguments;if(S&&!this.__chain__){var F=this.value();return f.apply(xt(F)?F:[],L)}return this[k](function(G){return f.apply(xt(G)?G:[],L)})}}),Cs(Ft.prototype,function(c,f){var k=z[f];if(k){var S=k.name+"";jt.call(go,S)||(go[S]=[]),go[S].push({name:f,func:k})}}),go[Bd(h,te).name]=[{name:"wrapper",func:h}],Ft.prototype.clone=yd,Ft.prototype.reverse=x_,Ft.prototype.value=bt,z.prototype.at=Ei,z.prototype.chain=vw,z.prototype.commit=wf,z.prototype.next=Qt,z.prototype.plant=Hm,z.prototype.reverse=Aw,z.prototype.toJSON=z.prototype.valueOf=z.prototype.value=Cw,z.prototype.first=z.prototype.head,In&&(z.prototype[In]=yw),z},Wt=_d();ws?((ws.exports=Wt)._=Wt,Bl._=Wt):Hn._=Wt}).call(gi)})(Kv,Kv.exports);const kX=Kv.exports;window._=kX;window.axios=qt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var c2={exports:{}};const vX=YO(R5);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,l){(function(h,g){s.exports=g(vX)})(window,function(h){return function(g){var m={};function y(w){if(m[w])return m[w].exports;var v=m[w]={i:w,l:!1,exports:{}};return g[w].call(v.exports,v,v.exports,y),v.l=!0,v.exports}return y.m=g,y.c=m,y.d=function(w,v,A){y.o(w,v)||Object.defineProperty(w,v,{enumerable:!0,get:A})},y.r=function(w){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(w,"__esModule",{value:!0})},y.t=function(w,v){if(1&v&&(w=y(w)),8&v||4&v&&typeof w=="object"&&w&&w.__esModule)return w;var A=Object.create(null);if(y.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:w}),2&v&&typeof w!="string")for(var T in w)y.d(A,T,function(P){return w[P]}.bind(null,T));return A},y.n=function(w){var v=w&&w.__esModule?function(){return w.default}:function(){return w};return y.d(v,"a",v),v},y.o=function(w,v){return Object.prototype.hasOwnProperty.call(w,v)},y.p="",y(y.s=3)}([function(g,m){g.exports=h},function(g,m,y){(function(w){var v=typeof w=="object"&&w&&w.Object===Object&&w;m.a=v}).call(this,y(2))},function(g,m){var y;y=function(){return this}();try{y=y||new Function("return this")()}catch{typeof window=="object"&&(y=window)}g.exports=y},function(g,m,y){y.r(m);var w=y(0),v=y.n(w),A=function(X){var Te=typeof X;return X!=null&&(Te=="object"||Te=="function")},T=y(1),P=typeof self=="object"&&self&&self.Object===Object&&self,N=T.a||P||Function("return this")(),M=function(){return N.Date.now()},j=/\s/,ee=function(X){for(var Te=X.length;Te--&&j.test(X.charAt(Te)););return Te},le=/^\s+/,_e=function(X){return X&&X.slice(0,ee(X)+1).replace(le,"")},te=N.Symbol,Y=Object.prototype,ie=Y.hasOwnProperty,ke=Y.toString,V=te?te.toStringTag:void 0,Ne=function(X){var Te=ie.call(X,V),Be=X[V];try{X[V]=void 0;var Ue=!0}catch{}var ht=ke.call(X);return Ue&&(Te?X[V]=Be:delete X[V]),ht},we=Object.prototype.toString,he=function(X){return we.call(X)},Me=te?te.toStringTag:void 0,Fe=function(X){return X==null?X===void 0?"[object Undefined]":"[object Null]":Me&&Me in Object(X)?Ne(X):he(X)},Ke=function(X){return X!=null&&typeof X=="object"},Q=function(X){return typeof X=="symbol"||Ke(X)&&Fe(X)=="[object Symbol]"},nt=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,Qe=parseInt,it=function(X){if(typeof X=="number")return X;if(Q(X))return NaN;if(A(X)){var Te=typeof X.valueOf=="function"?X.valueOf():X;X=A(Te)?Te+"":Te}if(typeof X!="string")return X===0?X:+X;X=_e(X);var Be=Le.test(X);return Be||Ut.test(X)?Qe(X.slice(2),Be?2:8):nt.test(X)?NaN:+X},yt=Math.max,oo=Math.min,$n=function(X,Te,Be){var Ue,ht,Ht,Ze,q,Z,de=0,ge=!1,Ce=!1,ze=!0;if(typeof X!="function")throw new TypeError("Expected a function");function Ve(qe){var at=Ue,Je=ht;return Ue=ht=void 0,de=qe,Ze=X.apply(Je,at)}function ve(qe){return de=qe,q=setTimeout(xe,Te),ge?Ve(qe):Ze}function Se(qe){var at=qe-Z;return Z===void 0||at>=Te||at<0||Ce&&qe-de>=Ht}function xe(){var qe=M();if(Se(qe))return ot(qe);q=setTimeout(xe,function(at){var Je=Te-(at-Z);return Ce?oo(Je,Ht-(at-de)):Je}(qe))}function ot(qe){return q=void 0,ze&&Ue?Ve(qe):(Ue=ht=void 0,Ze)}function Ge(){var qe=M(),at=Se(qe);if(Ue=arguments,ht=this,Z=qe,at){if(q===void 0)return ve(Z);if(Ce)return clearTimeout(q),q=setTimeout(xe,Te),Ve(Z)}return q===void 0&&(q=setTimeout(xe,Te)),Ze}return Te=it(Te)||0,A(Be)&&(ge=!!Be.leading,Ht=(Ce="maxWait"in Be)?yt(it(Be.maxWait)||0,Te):Ht,ze="trailing"in Be?!!Be.trailing:ze),Ge.cancel=function(){q!==void 0&&clearTimeout(q),de=0,Ue=Z=ht=q=void 0},Ge.flush=function(){return q===void 0?Ze:ot(M())},Ge},un={name:"ckeditor",created(){const{CKEDITOR_VERSION:X}=window;if(X){const[Te]=X.split(".").map(Number);Te<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(w.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const X=Object.assign({},this.config);this.modelValue&&(X.initialData=this.modelValue),this.editor.create(this.$el,X).then(Te=>{this.instance=Object(w.markRaw)(Te),this.setUpEditorEvents(),this.modelValue!==X.initialData&&Te.setData(this.modelValue),this.disabled&&Te.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Te)}).catch(Te=>{console.error(Te)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(X){this.instance&&X!==this.lastEditorData&&this.instance.setData(X)},disabled(X){X?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const X=this.instance,Te=$n(Be=>{const Ue=this.lastEditorData=X.getData();this.$emit("update:modelValue",Ue,Be,X),this.$emit("input",Ue,Be,X)},300,{leading:!0});X.model.document.on("change:data",Te),X.editing.view.document.on("focus",Be=>{this.$emit("focus",Be,X)}),X.editing.view.document.on("blur",Be=>{this.$emit("blur",Be,X)})}}};const Rn=v.a?v.a.version:w.version,[mo]=Rn.split(".").map(X=>parseInt(X,10));if(mo<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const St={install(X){X.component("ckeditor",un)},component:un};m.default=St}]).default})})(c2);const yX=qE(c2.exports),Lu=hE(HN);Lu.use(dX);Lu.use(wX);Lu.component("section-title",Op);Lu.component("ContentHeader",_X);Lu.use(yX);Lu.mount("#app");