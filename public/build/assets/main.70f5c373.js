function jb(r,l){const h=Object.create(null),g=r.split(",");for(let m=0;m<g.length;m++)h[g[m]]=!0;return l?m=>!!h[m.toLowerCase()]:m=>!!h[m]}const wS="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",_S=jb(wS);function vp(r){if(at(r)){const l={};for(let h=0;h<r.length;h++){const g=r[h],m=Zn(g)?AS(g):vp(g);if(m)for(const C in m)l[C]=m[C]}return l}else{if(Zn(r))return r;if(Mn(r))return r}}const kS=/;(?![^(]*\))/g,vS=/:([^]+)/,yS=/\/\*.*?\*\//gs;function AS(r){const l={};return r.replace(yS,"").split(kS).forEach(h=>{if(h){const g=h.split(vS);g.length>1&&(l[g[0].trim()]=g[1].trim())}}),l}function Pi(r){let l="";if(Zn(r))l=r;else if(at(r))for(let h=0;h<r.length;h++){const g=Pi(r[h]);g&&(l+=g+" ")}else if(Mn(r))for(const h in r)r[h]&&(l+=h+" ");return l.trim()}function CS(r){if(!r)return null;let{class:l,style:h}=r;return l&&!Zn(l)&&(r.class=Pi(l)),h&&(r.style=vp(h)),r}const xS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ES=jb(xS);function I1(r){return!!r||r===""}function DS(r,l){if(r.length!==l.length)return!1;let h=!0;for(let g=0;h&&g<r.length;g++)h=ml(r[g],l[g]);return h}function ml(r,l){if(r===l)return!0;let h=vC(r),g=vC(l);if(h||g)return h&&g?r.getTime()===l.getTime():!1;if(h=up(r),g=up(l),h||g)return r===l;if(h=at(r),g=at(l),h||g)return h&&g?DS(r,l):!1;if(h=Mn(r),g=Mn(l),h||g){if(!h||!g)return!1;const m=Object.keys(r).length,C=Object.keys(l).length;if(m!==C)return!1;for(const _ in r){const v=r.hasOwnProperty(_),y=l.hasOwnProperty(_);if(v&&!y||!v&&y||!ml(r[_],l[_]))return!1}}return String(r)===String(l)}function Fb(r,l){return r.findIndex(h=>ml(h,l))}const be=r=>Zn(r)?r:r==null?"":at(r)||Mn(r)&&(r.toString===P1||!It(r.toString))?JSON.stringify(r,M1,2):String(r),M1=(r,l)=>l&&l.__v_isRef?M1(r,l.value):ku(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((h,[g,m])=>(h[`${g} =>`]=m,h),{})}:Bc(l)?{[`Set(${l.size})`]:[...l.values()]}:Mn(l)&&!at(l)&&!N1(l)?String(l):l,Sn={},_u=[],Nr=()=>{},TS=()=>!1,SS=/^on[^a-z]/,yp=r=>SS.test(r),qv=r=>r.startsWith("onUpdate:"),to=Object.assign,Wv=(r,l)=>{const h=r.indexOf(l);h>-1&&r.splice(h,1)},IS=Object.prototype.hasOwnProperty,en=(r,l)=>IS.call(r,l),at=Array.isArray,ku=r=>Ap(r)==="[object Map]",Bc=r=>Ap(r)==="[object Set]",vC=r=>Ap(r)==="[object Date]",It=r=>typeof r=="function",Zn=r=>typeof r=="string",up=r=>typeof r=="symbol",Mn=r=>r!==null&&typeof r=="object",Gv=r=>Mn(r)&&It(r.then)&&It(r.catch),P1=Object.prototype.toString,Ap=r=>P1.call(r),MS=r=>Ap(r).slice(8,-1),N1=r=>Ap(r)==="[object Object]",Kv=r=>Zn(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,tp=jb(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$b=r=>{const l=Object.create(null);return h=>l[h]||(l[h]=r(h))},PS=/-(\w)/g,wi=$b(r=>r.replace(PS,(l,h)=>h?h.toUpperCase():"")),NS=/\B([A-Z])/g,ir=$b(r=>r.replace(NS,"-$1").toLowerCase()),Cp=$b(r=>r.charAt(0).toUpperCase()+r.slice(1)),np=$b(r=>r?`on${Cp(r)}`:""),xu=(r,l)=>!Object.is(r,l),vu=(r,l)=>{for(let h=0;h<r.length;h++)r[h](l)},Pb=(r,l,h)=>{Object.defineProperty(r,l,{configurable:!0,enumerable:!1,value:h})},aa=r=>{const l=parseFloat(r);return isNaN(l)?r:l};let yC;const BS=()=>yC||(yC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ti;class Yv{constructor(l=!1){this.detached=l,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ti,!l&&Ti&&(this.index=(Ti.scopes||(Ti.scopes=[])).push(this)-1)}run(l){if(this.active){const h=Ti;try{return Ti=this,l()}finally{Ti=h}}}on(){Ti=this}off(){Ti=this.parent}stop(l){if(this.active){let h,g;for(h=0,g=this.effects.length;h<g;h++)this.effects[h].stop();for(h=0,g=this.cleanups.length;h<g;h++)this.cleanups[h]();if(this.scopes)for(h=0,g=this.scopes.length;h<g;h++)this.scopes[h].stop(!0);if(!this.detached&&this.parent&&!l){const m=this.parent.scopes.pop();m&&m!==this&&(this.parent.scopes[this.index]=m,m.index=this.index)}this.parent=void 0,this.active=!1}}}function OS(r){return new Yv(r)}function B1(r,l=Ti){l&&l.active&&l.effects.push(r)}function LS(){return Ti}function RS(r){Ti&&Ti.cleanups.push(r)}const Qv=r=>{const l=new Set(r);return l.w=0,l.n=0,l},O1=r=>(r.w&gl)>0,L1=r=>(r.n&gl)>0,zS=({deps:r})=>{if(r.length)for(let l=0;l<r.length;l++)r[l].w|=gl},jS=r=>{const{deps:l}=r;if(l.length){let h=0;for(let g=0;g<l.length;g++){const m=l[g];O1(m)&&!L1(m)?m.delete(r):l[h++]=m,m.w&=~gl,m.n&=~gl}l.length=h}},wv=new WeakMap;let Xf=0,gl=1;const _v=30;let Pr;const Cc=Symbol(""),kv=Symbol("");class xp{constructor(l,h=null,g){this.fn=l,this.scheduler=h,this.active=!0,this.deps=[],this.parent=void 0,B1(this,g)}run(){if(!this.active)return this.fn();let l=Pr,h=fl;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=Pr,Pr=this,fl=!0,gl=1<<++Xf,Xf<=_v?zS(this):AC(this),this.fn()}finally{Xf<=_v&&jS(this),gl=1<<--Xf,Pr=this.parent,fl=h,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pr===this?this.deferStop=!0:this.active&&(AC(this),this.onStop&&this.onStop(),this.active=!1)}}function AC(r){const{deps:l}=r;if(l.length){for(let h=0;h<l.length;h++)l[h].delete(r);l.length=0}}function FS(r,l){r.effect&&(r=r.effect.fn);const h=new xp(r);l&&(to(h,l),l.scope&&B1(h,l.scope)),(!l||!l.lazy)&&h.run();const g=h.run.bind(h);return g.effect=h,g}function $S(r){r.effect.stop()}let fl=!0;const R1=[];function Mu(){R1.push(fl),fl=!1}function Pu(){const r=R1.pop();fl=r===void 0?!0:r}function Ni(r,l,h){if(fl&&Pr){let g=wv.get(r);g||wv.set(r,g=new Map);let m=g.get(h);m||g.set(h,m=Qv()),z1(m)}}function z1(r,l){let h=!1;Xf<=_v?L1(r)||(r.n|=gl,h=!O1(r)):h=!r.has(Pr),h&&(r.add(Pr),Pr.deps.push(r))}function la(r,l,h,g,m,C){const _=wv.get(r);if(!_)return;let v=[];if(l==="clear")v=[..._.values()];else if(h==="length"&&at(r)){const y=aa(g);_.forEach((S,P)=>{(P==="length"||P>=y)&&v.push(S)})}else switch(h!==void 0&&v.push(_.get(h)),l){case"add":at(r)?Kv(h)&&v.push(_.get("length")):(v.push(_.get(Cc)),ku(r)&&v.push(_.get(kv)));break;case"delete":at(r)||(v.push(_.get(Cc)),ku(r)&&v.push(_.get(kv)));break;case"set":ku(r)&&v.push(_.get(Cc));break}if(v.length===1)v[0]&&vv(v[0]);else{const y=[];for(const S of v)S&&y.push(...S);vv(Qv(y))}}function vv(r,l){const h=at(r)?r:[...r];for(const g of h)g.computed&&CC(g);for(const g of h)g.computed||CC(g)}function CC(r,l){(r!==Pr||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const VS=jb("__proto__,__v_isRef,__isVue"),j1=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(up)),US=Vb(),HS=Vb(!1,!0),qS=Vb(!0),WS=Vb(!0,!0),xC=GS();function GS(){const r={};return["includes","indexOf","lastIndexOf"].forEach(l=>{r[l]=function(...h){const g=on(this);for(let C=0,_=this.length;C<_;C++)Ni(g,"get",C+"");const m=g[l](...h);return m===-1||m===!1?g[l](...h.map(on)):m}}),["push","pop","shift","unshift","splice"].forEach(l=>{r[l]=function(...h){Mu();const g=on(this)[l].apply(this,h);return Pu(),g}}),r}function Vb(r=!1,l=!1){return function(g,m,C){if(m==="__v_isReactive")return!r;if(m==="__v_isReadonly")return r;if(m==="__v_isShallow")return l;if(m==="__v_raw"&&C===(r?l?W1:q1:l?H1:U1).get(g))return g;const _=at(g);if(!r&&_&&en(xC,m))return Reflect.get(xC,m,C);const v=Reflect.get(g,m,C);return(up(m)?j1.has(m):VS(m))||(r||Ni(g,"get",m),l)?v:Mo(v)?_&&Kv(m)?v:v.value:Mn(v)?r?Jv(v):Nu(v):v}}const KS=F1(),YS=F1(!0);function F1(r=!1){return function(h,g,m,C){let _=h[g];if(Sc(_)&&Mo(_)&&!Mo(m))return!1;if(!r&&(!hp(m)&&!Sc(m)&&(_=on(_),m=on(m)),!at(h)&&Mo(_)&&!Mo(m)))return _.value=m,!0;const v=at(h)&&Kv(g)?Number(g)<h.length:en(h,g),y=Reflect.set(h,g,m,C);return h===on(C)&&(v?xu(m,_)&&la(h,"set",g,m):la(h,"add",g,m)),y}}function QS(r,l){const h=en(r,l);r[l];const g=Reflect.deleteProperty(r,l);return g&&h&&la(r,"delete",l,void 0),g}function ZS(r,l){const h=Reflect.has(r,l);return(!up(l)||!j1.has(l))&&Ni(r,"has",l),h}function JS(r){return Ni(r,"iterate",at(r)?"length":Cc),Reflect.ownKeys(r)}const $1={get:US,set:KS,deleteProperty:QS,has:ZS,ownKeys:JS},V1={get:qS,set(r,l){return!0},deleteProperty(r,l){return!0}},XS=to({},$1,{get:HS,set:YS}),eI=to({},V1,{get:WS}),Zv=r=>r,Ub=r=>Reflect.getPrototypeOf(r);function pb(r,l,h=!1,g=!1){r=r.__v_raw;const m=on(r),C=on(l);h||(l!==C&&Ni(m,"get",l),Ni(m,"get",C));const{has:_}=Ub(m),v=g?Zv:h?ty:fp;if(_.call(m,l))return v(r.get(l));if(_.call(m,C))return v(r.get(C));r!==m&&r.get(l)}function mb(r,l=!1){const h=this.__v_raw,g=on(h),m=on(r);return l||(r!==m&&Ni(g,"has",r),Ni(g,"has",m)),r===m?h.has(r):h.has(r)||h.has(m)}function gb(r,l=!1){return r=r.__v_raw,!l&&Ni(on(r),"iterate",Cc),Reflect.get(r,"size",r)}function EC(r){r=on(r);const l=on(this);return Ub(l).has.call(l,r)||(l.add(r),la(l,"add",r,r)),this}function DC(r,l){l=on(l);const h=on(this),{has:g,get:m}=Ub(h);let C=g.call(h,r);C||(r=on(r),C=g.call(h,r));const _=m.call(h,r);return h.set(r,l),C?xu(l,_)&&la(h,"set",r,l):la(h,"add",r,l),this}function TC(r){const l=on(this),{has:h,get:g}=Ub(l);let m=h.call(l,r);m||(r=on(r),m=h.call(l,r)),g&&g.call(l,r);const C=l.delete(r);return m&&la(l,"delete",r,void 0),C}function SC(){const r=on(this),l=r.size!==0,h=r.clear();return l&&la(r,"clear",void 0,void 0),h}function bb(r,l){return function(g,m){const C=this,_=C.__v_raw,v=on(_),y=l?Zv:r?ty:fp;return!r&&Ni(v,"iterate",Cc),_.forEach((S,P)=>g.call(m,y(S),y(P),C))}}function wb(r,l,h){return function(...g){const m=this.__v_raw,C=on(m),_=ku(C),v=r==="entries"||r===Symbol.iterator&&_,y=r==="keys"&&_,S=m[r](...g),P=h?Zv:l?ty:fp;return!l&&Ni(C,"iterate",y?kv:Cc),{next(){const{value:N,done:M}=S.next();return M?{value:N,done:M}:{value:v?[P(N[0]),P(N[1])]:P(N),done:M}},[Symbol.iterator](){return this}}}}function il(r){return function(...l){return r==="delete"?!1:this}}function tI(){const r={get(C){return pb(this,C)},get size(){return gb(this)},has:mb,add:EC,set:DC,delete:TC,clear:SC,forEach:bb(!1,!1)},l={get(C){return pb(this,C,!1,!0)},get size(){return gb(this)},has:mb,add:EC,set:DC,delete:TC,clear:SC,forEach:bb(!1,!0)},h={get(C){return pb(this,C,!0)},get size(){return gb(this,!0)},has(C){return mb.call(this,C,!0)},add:il("add"),set:il("set"),delete:il("delete"),clear:il("clear"),forEach:bb(!0,!1)},g={get(C){return pb(this,C,!0,!0)},get size(){return gb(this,!0)},has(C){return mb.call(this,C,!0)},add:il("add"),set:il("set"),delete:il("delete"),clear:il("clear"),forEach:bb(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(C=>{r[C]=wb(C,!1,!1),h[C]=wb(C,!0,!1),l[C]=wb(C,!1,!0),g[C]=wb(C,!0,!0)}),[r,h,l,g]}const[nI,oI,iI,rI]=tI();function Hb(r,l){const h=l?r?rI:iI:r?oI:nI;return(g,m,C)=>m==="__v_isReactive"?!r:m==="__v_isReadonly"?r:m==="__v_raw"?g:Reflect.get(en(h,m)&&m in g?h:g,m,C)}const sI={get:Hb(!1,!1)},aI={get:Hb(!1,!0)},lI={get:Hb(!0,!1)},cI={get:Hb(!0,!0)},U1=new WeakMap,H1=new WeakMap,q1=new WeakMap,W1=new WeakMap;function dI(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uI(r){return r.__v_skip||!Object.isExtensible(r)?0:dI(MS(r))}function Nu(r){return Sc(r)?r:qb(r,!1,$1,sI,U1)}function G1(r){return qb(r,!1,XS,aI,H1)}function Jv(r){return qb(r,!0,V1,lI,q1)}function hI(r){return qb(r,!0,eI,cI,W1)}function qb(r,l,h,g,m){if(!Mn(r)||r.__v_raw&&!(l&&r.__v_isReactive))return r;const C=m.get(r);if(C)return C;const _=uI(r);if(_===0)return r;const v=new Proxy(r,_===2?g:h);return m.set(r,v),v}function xc(r){return Sc(r)?xc(r.__v_raw):!!(r&&r.__v_isReactive)}function Sc(r){return!!(r&&r.__v_isReadonly)}function hp(r){return!!(r&&r.__v_isShallow)}function Xv(r){return xc(r)||Sc(r)}function on(r){const l=r&&r.__v_raw;return l?on(l):r}function ey(r){return Pb(r,"__v_skip",!0),r}const fp=r=>Mn(r)?Nu(r):r,ty=r=>Mn(r)?Jv(r):r;function ny(r){fl&&Pr&&(r=on(r),z1(r.dep||(r.dep=Qv())))}function Wb(r,l){r=on(r),r.dep&&vv(r.dep)}function Mo(r){return!!(r&&r.__v_isRef===!0)}function op(r){return Y1(r,!1)}function K1(r){return Y1(r,!0)}function Y1(r,l){return Mo(r)?r:new fI(r,l)}class fI{constructor(l,h){this.__v_isShallow=h,this.dep=void 0,this.__v_isRef=!0,this._rawValue=h?l:on(l),this._value=h?l:fp(l)}get value(){return ny(this),this._value}set value(l){const h=this.__v_isShallow||hp(l)||Sc(l);l=h?l:on(l),xu(l,this._rawValue)&&(this._rawValue=l,this._value=h?l:fp(l),Wb(this))}}function pI(r){Wb(r)}function Ec(r){return Mo(r)?r.value:r}const mI={get:(r,l,h)=>Ec(Reflect.get(r,l,h)),set:(r,l,h,g)=>{const m=r[l];return Mo(m)&&!Mo(h)?(m.value=h,!0):Reflect.set(r,l,h,g)}};function oy(r){return xc(r)?r:new Proxy(r,mI)}class gI{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:h,set:g}=l(()=>ny(this),()=>Wb(this));this._get=h,this._set=g}get value(){return this._get()}set value(l){this._set(l)}}function bI(r){return new gI(r)}function wI(r){const l=at(r)?new Array(r.length):{};for(const h in r)l[h]=Q1(r,h);return l}class _I{constructor(l,h,g){this._object=l,this._key=h,this._defaultValue=g,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function Q1(r,l,h){const g=r[l];return Mo(g)?g:new _I(r,l,h)}var Z1;class kI{constructor(l,h,g,m){this._setter=h,this.dep=void 0,this.__v_isRef=!0,this[Z1]=!1,this._dirty=!0,this.effect=new xp(l,()=>{this._dirty||(this._dirty=!0,Wb(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!m,this.__v_isReadonly=g}get value(){const l=on(this);return ny(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}Z1="__v_isReadonly";function vI(r,l,h=!1){let g,m;const C=It(r);return C?(g=r,m=Nr):(g=r.get,m=r.set),new kI(g,m,C||!m,h)}function yI(r,...l){}function ia(r,l,h,g){let m;try{m=g?r(...g):r()}catch(C){Oc(C,l,h)}return m}function Mi(r,l,h,g){if(It(r)){const C=ia(r,l,h,g);return C&&Gv(C)&&C.catch(_=>{Oc(_,l,h)}),C}const m=[];for(let C=0;C<r.length;C++)m.push(Mi(r[C],l,h,g));return m}function Oc(r,l,h,g=!0){const m=l?l.vnode:null;if(l){let C=l.parent;const _=l.proxy,v=h;for(;C;){const S=C.ec;if(S){for(let P=0;P<S.length;P++)if(S[P](r,_,v)===!1)return}C=C.parent}const y=l.appContext.config.errorHandler;if(y){ia(y,null,10,[r,_,v]);return}}AI(r,h,m,g)}function AI(r,l,h,g=!0){console.error(r)}let pp=!1,yv=!1;const Xo=[];let fs=0;const yu=[];let na=null,vc=0;const J1=Promise.resolve();let iy=null;function Gb(r){const l=iy||J1;return r?l.then(this?r.bind(this):r):l}function CI(r){let l=fs+1,h=Xo.length;for(;l<h;){const g=l+h>>>1;mp(Xo[g])<r?l=g+1:h=g}return l}function Kb(r){(!Xo.length||!Xo.includes(r,pp&&r.allowRecurse?fs+1:fs))&&(r.id==null?Xo.push(r):Xo.splice(CI(r.id),0,r),X1())}function X1(){!pp&&!yv&&(yv=!0,iy=J1.then(ex))}function xI(r){const l=Xo.indexOf(r);l>fs&&Xo.splice(l,1)}function ry(r){at(r)?yu.push(...r):(!na||!na.includes(r,r.allowRecurse?vc+1:vc))&&yu.push(r),X1()}function IC(r,l=pp?fs+1:0){for(;l<Xo.length;l++){const h=Xo[l];h&&h.pre&&(Xo.splice(l,1),l--,h())}}function Nb(r){if(yu.length){const l=[...new Set(yu)];if(yu.length=0,na){na.push(...l);return}for(na=l,na.sort((h,g)=>mp(h)-mp(g)),vc=0;vc<na.length;vc++)na[vc]();na=null,vc=0}}const mp=r=>r.id==null?1/0:r.id,EI=(r,l)=>{const h=mp(r)-mp(l);if(h===0){if(r.pre&&!l.pre)return-1;if(l.pre&&!r.pre)return 1}return h};function ex(r){yv=!1,pp=!0,Xo.sort(EI);const l=Nr;try{for(fs=0;fs<Xo.length;fs++){const h=Xo[fs];h&&h.active!==!1&&ia(h,null,14)}}finally{fs=0,Xo.length=0,Nb(),pp=!1,iy=null,(Xo.length||yu.length)&&ex()}}let gu,_b=[];function tx(r,l){var h,g;gu=r,gu?(gu.enabled=!0,_b.forEach(({event:m,args:C})=>gu.emit(m,...C)),_b=[]):typeof window<"u"&&window.HTMLElement&&!(!((g=(h=window.navigator)===null||h===void 0?void 0:h.userAgent)===null||g===void 0)&&g.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(C=>{tx(C,l)}),setTimeout(()=>{gu||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,_b=[])},3e3)):_b=[]}function DI(r,l,...h){if(r.isUnmounted)return;const g=r.vnode.props||Sn;let m=h;const C=l.startsWith("update:"),_=C&&l.slice(7);if(_&&_ in g){const P=`${_==="modelValue"?"model":_}Modifiers`,{number:N,trim:M}=g[P]||Sn;M&&(m=h.map(F=>Zn(F)?F.trim():F)),N&&(m=h.map(aa))}let v,y=g[v=np(l)]||g[v=np(wi(l))];!y&&C&&(y=g[v=np(ir(l))]),y&&Mi(y,r,6,m);const S=g[v+"Once"];if(S){if(!r.emitted)r.emitted={};else if(r.emitted[v])return;r.emitted[v]=!0,Mi(S,r,6,m)}}function nx(r,l,h=!1){const g=l.emitsCache,m=g.get(r);if(m!==void 0)return m;const C=r.emits;let _={},v=!1;if(!It(r)){const y=S=>{const P=nx(S,l,!0);P&&(v=!0,to(_,P))};!h&&l.mixins.length&&l.mixins.forEach(y),r.extends&&y(r.extends),r.mixins&&r.mixins.forEach(y)}return!C&&!v?(Mn(r)&&g.set(r,null),null):(at(C)?C.forEach(y=>_[y]=null):to(_,C),Mn(r)&&g.set(r,_),_)}function Yb(r,l){return!r||!yp(l)?!1:(l=l.slice(2).replace(/Once$/,""),en(r,l[0].toLowerCase()+l.slice(1))||en(r,ir(l))||en(r,l))}let Vo=null,Qb=null;function gp(r){const l=Vo;return Vo=r,Qb=r&&r.type.__scopeId||null,l}function Vt(r){Qb=r}function Ut(){Qb=null}const TI=r=>je;function je(r,l=Vo,h){if(!l||r._n)return r;const g=(...m)=>{g._d&&Sv(-1);const C=gp(l);let _;try{_=r(...m)}finally{gp(C),g._d&&Sv(1)}return _};return g._n=!0,g._c=!0,g._d=!0,g}function Eb(r){const{type:l,vnode:h,proxy:g,withProxy:m,props:C,propsOptions:[_],slots:v,attrs:y,emit:S,render:P,renderCache:N,data:M,setupState:F,ctx:ee,inheritAttrs:se}=r;let we,te;const Y=gp(r);try{if(h.shapeFlag&4){const ke=m||g;we=Si(P.call(ke,ke,N,C,F,M,ee)),te=y}else{const ke=l;we=Si(ke.length>1?ke(C,{attrs:y,slots:v,emit:S}):ke(C,null)),te=l.props?y:II(y)}}catch(ke){ap.length=0,Oc(ke,r,1),we=ae(ei)}let ie=we;if(te&&se!==!1){const ke=Object.keys(te),{shapeFlag:U}=ie;ke.length&&U&7&&(_&&ke.some(qv)&&(te=MI(te,_)),ie=bs(ie,te))}return h.dirs&&(ie=bs(ie),ie.dirs=ie.dirs?ie.dirs.concat(h.dirs):h.dirs),h.transition&&(ie.transition=h.transition),we=ie,gp(Y),we}function SI(r){let l;for(let h=0;h<r.length;h++){const g=r[h];if(bl(g)){if(g.type!==ei||g.children==="v-if"){if(l)return;l=g}}else return}return l}const II=r=>{let l;for(const h in r)(h==="class"||h==="style"||yp(h))&&((l||(l={}))[h]=r[h]);return l},MI=(r,l)=>{const h={};for(const g in r)(!qv(g)||!(g.slice(9)in l))&&(h[g]=r[g]);return h};function PI(r,l,h){const{props:g,children:m,component:C}=r,{props:_,children:v,patchFlag:y}=l,S=C.emitsOptions;if(l.dirs||l.transition)return!0;if(h&&y>=0){if(y&1024)return!0;if(y&16)return g?MC(g,_,S):!!_;if(y&8){const P=l.dynamicProps;for(let N=0;N<P.length;N++){const M=P[N];if(_[M]!==g[M]&&!Yb(S,M))return!0}}}else return(m||v)&&(!v||!v.$stable)?!0:g===_?!1:g?_?MC(g,_,S):!0:!!_;return!1}function MC(r,l,h){const g=Object.keys(l);if(g.length!==Object.keys(r).length)return!0;for(let m=0;m<g.length;m++){const C=g[m];if(l[C]!==r[C]&&!Yb(h,C))return!0}return!1}function sy({vnode:r,parent:l},h){for(;l&&l.subTree===r;)(r=l.vnode).el=h,l=l.parent}const ox=r=>r.__isSuspense,NI={name:"Suspense",__isSuspense:!0,process(r,l,h,g,m,C,_,v,y,S){r==null?OI(l,h,g,m,C,_,v,y,S):LI(r,l,h,g,m,_,v,y,S)},hydrate:RI,create:ay,normalize:zI},BI=NI;function bp(r,l){const h=r.props&&r.props[l];It(h)&&h()}function OI(r,l,h,g,m,C,_,v,y){const{p:S,o:{createElement:P}}=y,N=P("div"),M=r.suspense=ay(r,m,g,l,N,h,C,_,v,y);S(null,M.pendingBranch=r.ssContent,N,null,g,M,C,_),M.deps>0?(bp(r,"onPending"),bp(r,"onFallback"),S(null,r.ssFallback,l,h,g,null,C,_),Au(M,r.ssFallback)):M.resolve()}function LI(r,l,h,g,m,C,_,v,{p:y,um:S,o:{createElement:P}}){const N=l.suspense=r.suspense;N.vnode=l,l.el=r.el;const M=l.ssContent,F=l.ssFallback,{activeBranch:ee,pendingBranch:se,isInFallback:we,isHydrating:te}=N;if(se)N.pendingBranch=M,ps(M,se)?(y(se,M,N.hiddenContainer,null,m,N,C,_,v),N.deps<=0?N.resolve():we&&(y(ee,F,h,g,m,null,C,_,v),Au(N,F))):(N.pendingId++,te?(N.isHydrating=!1,N.activeBranch=se):S(se,m,N),N.deps=0,N.effects.length=0,N.hiddenContainer=P("div"),we?(y(null,M,N.hiddenContainer,null,m,N,C,_,v),N.deps<=0?N.resolve():(y(ee,F,h,g,m,null,C,_,v),Au(N,F))):ee&&ps(M,ee)?(y(ee,M,h,g,m,N,C,_,v),N.resolve(!0)):(y(null,M,N.hiddenContainer,null,m,N,C,_,v),N.deps<=0&&N.resolve()));else if(ee&&ps(M,ee))y(ee,M,h,g,m,N,C,_,v),Au(N,M);else if(bp(l,"onPending"),N.pendingBranch=M,N.pendingId++,y(null,M,N.hiddenContainer,null,m,N,C,_,v),N.deps<=0)N.resolve();else{const{timeout:Y,pendingId:ie}=N;Y>0?setTimeout(()=>{N.pendingId===ie&&N.fallback(F)},Y):Y===0&&N.fallback(F)}}function ay(r,l,h,g,m,C,_,v,y,S,P=!1){const{p:N,m:M,um:F,n:ee,o:{parentNode:se,remove:we}}=S,te=aa(r.props&&r.props.timeout),Y={vnode:r,parent:l,parentComponent:h,isSVG:_,container:g,hiddenContainer:m,anchor:C,deps:0,pendingId:0,timeout:typeof te=="number"?te:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:P,isUnmounted:!1,effects:[],resolve(ie=!1){const{vnode:ke,activeBranch:U,pendingBranch:Pe,pendingId:_e,effects:ue,parentComponent:Me,container:Fe}=Y;if(Y.isHydrating)Y.isHydrating=!1;else if(!ie){const Xe=U&&Pe.transition&&Pe.transition.mode==="out-in";Xe&&(U.transition.afterLeave=()=>{_e===Y.pendingId&&M(Pe,Fe,Le,0)});let{anchor:Le}=Y;U&&(Le=ee(U),F(U,Me,Y,!0)),Xe||M(Pe,Fe,Le,0)}Au(Y,Pe),Y.pendingBranch=null,Y.isInFallback=!1;let Ge=Y.parent,Q=!1;for(;Ge;){if(Ge.pendingBranch){Ge.effects.push(...ue),Q=!0;break}Ge=Ge.parent}Q||ry(ue),Y.effects=[],bp(ke,"onResolve")},fallback(ie){if(!Y.pendingBranch)return;const{vnode:ke,activeBranch:U,parentComponent:Pe,container:_e,isSVG:ue}=Y;bp(ke,"onFallback");const Me=ee(U),Fe=()=>{!Y.isInFallback||(N(null,ie,_e,Me,Pe,null,ue,v,y),Au(Y,ie))},Ge=ie.transition&&ie.transition.mode==="out-in";Ge&&(U.transition.afterLeave=Fe),Y.isInFallback=!0,F(U,Pe,null,!0),Ge||Fe()},move(ie,ke,U){Y.activeBranch&&M(Y.activeBranch,ie,ke,U),Y.container=ie},next(){return Y.activeBranch&&ee(Y.activeBranch)},registerDep(ie,ke){const U=!!Y.pendingBranch;U&&Y.deps++;const Pe=ie.vnode.el;ie.asyncDep.catch(_e=>{Oc(_e,ie,0)}).then(_e=>{if(ie.isUnmounted||Y.isUnmounted||Y.pendingId!==ie.suspenseId)return;ie.asyncResolved=!0;const{vnode:ue}=ie;Iv(ie,_e,!1),Pe&&(ue.el=Pe);const Me=!Pe&&ie.subTree.el;ke(ie,ue,se(Pe||ie.subTree.el),Pe?null:ee(ie.subTree),Y,_,y),Me&&we(Me),sy(ie,ue.el),U&&--Y.deps===0&&Y.resolve()})},unmount(ie,ke){Y.isUnmounted=!0,Y.activeBranch&&F(Y.activeBranch,h,ie,ke),Y.pendingBranch&&F(Y.pendingBranch,h,ie,ke)}};return Y}function RI(r,l,h,g,m,C,_,v,y){const S=l.suspense=ay(l,g,h,r.parentNode,document.createElement("div"),null,m,C,_,v,!0),P=y(r,S.pendingBranch=l.ssContent,h,S,C,_);return S.deps===0&&S.resolve(),P}function zI(r){const{shapeFlag:l,children:h}=r,g=l&32;r.ssContent=PC(g?h.default:h),r.ssFallback=g?PC(h.fallback):ae(ei)}function PC(r){let l;if(It(r)){const h=Pc&&r._c;h&&(r._d=!1,le()),r=r(),h&&(r._d=!0,l=gi,Mx())}return at(r)&&(r=SI(r)),r=Si(r),l&&!r.dynamicChildren&&(r.dynamicChildren=l.filter(h=>h!==r)),r}function ix(r,l){l&&l.pendingBranch?at(r)?l.effects.push(...r):l.effects.push(r):ry(r)}function Au(r,l){r.activeBranch=l;const{vnode:h,parentComponent:g}=r,m=h.el=l.el;g&&g.subTree===h&&(g.vnode.el=m,sy(g,m))}function ip(r,l){if(_o){let h=_o.provides;const g=_o.parent&&_o.parent.provides;g===h&&(h=_o.provides=Object.create(g)),h[r]=l}}function ms(r,l,h=!1){const g=_o||Vo;if(g){const m=g.parent==null?g.vnode.appContext&&g.vnode.appContext.provides:g.parent.provides;if(m&&r in m)return m[r];if(arguments.length>1)return h&&It(l)?l.call(g.proxy):l}}function jI(r,l){return Ep(r,null,l)}function rx(r,l){return Ep(r,null,{flush:"post"})}function FI(r,l){return Ep(r,null,{flush:"sync"})}const kb={};function Cu(r,l,h){return Ep(r,l,h)}function Ep(r,l,{immediate:h,deep:g,flush:m,onTrack:C,onTrigger:_}=Sn){const v=_o;let y,S=!1,P=!1;if(Mo(r)?(y=()=>r.value,S=hp(r)):xc(r)?(y=()=>r,g=!0):at(r)?(P=!0,S=r.some(ie=>xc(ie)||hp(ie)),y=()=>r.map(ie=>{if(Mo(ie))return ie.value;if(xc(ie))return Ac(ie);if(It(ie))return ia(ie,v,2)})):It(r)?l?y=()=>ia(r,v,2):y=()=>{if(!(v&&v.isUnmounted))return N&&N(),Mi(r,v,3,[M])}:y=Nr,l&&g){const ie=y;y=()=>Ac(ie())}let N,M=ie=>{N=te.onStop=()=>{ia(ie,v,4)}},F;if(Du)if(M=Nr,l?h&&Mi(l,v,3,[y(),P?[]:void 0,M]):y(),m==="sync"){const ie=Ux();F=ie.__watcherHandles||(ie.__watcherHandles=[])}else return Nr;let ee=P?new Array(r.length).fill(kb):kb;const se=()=>{if(!!te.active)if(l){const ie=te.run();(g||S||(P?ie.some((ke,U)=>xu(ke,ee[U])):xu(ie,ee)))&&(N&&N(),Mi(l,v,3,[ie,ee===kb?void 0:P&&ee[0]===kb?[]:ee,M]),ee=ie)}else te.run()};se.allowRecurse=!!l;let we;m==="sync"?we=se:m==="post"?we=()=>$o(se,v&&v.suspense):(se.pre=!0,v&&(se.id=v.uid),we=()=>Kb(se));const te=new xp(y,we);l?h?se():ee=te.run():m==="post"?$o(te.run.bind(te),v&&v.suspense):te.run();const Y=()=>{te.stop(),v&&v.scope&&Wv(v.scope.effects,te)};return F&&F.push(Y),Y}function $I(r,l,h){const g=this.proxy,m=Zn(r)?r.includes(".")?sx(g,r):()=>g[r]:r.bind(g,g);let C;It(l)?C=l:(C=l.handler,h=l);const _=_o;wl(this);const v=Ep(m,C.bind(g),h);return _?wl(_):pl(),v}function sx(r,l){const h=l.split(".");return()=>{let g=r;for(let m=0;m<h.length&&g;m++)g=g[h[m]];return g}}function Ac(r,l){if(!Mn(r)||r.__v_skip||(l=l||new Set,l.has(r)))return r;if(l.add(r),Mo(r))Ac(r.value,l);else if(at(r))for(let h=0;h<r.length;h++)Ac(r[h],l);else if(Bc(r)||ku(r))r.forEach(h=>{Ac(h,l)});else if(N1(r))for(const h in r)Ac(r[h],l);return r}function ly(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sp(()=>{r.isMounted=!0}),ew(()=>{r.isUnmounting=!0}),r}const or=[Function,Array],VI={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:or,onEnter:or,onAfterEnter:or,onEnterCancelled:or,onBeforeLeave:or,onLeave:or,onAfterLeave:or,onLeaveCancelled:or,onBeforeAppear:or,onAppear:or,onAfterAppear:or,onAppearCancelled:or},setup(r,{slots:l}){const h=kl(),g=ly();let m;return()=>{const C=l.default&&Zb(l.default(),!0);if(!C||!C.length)return;let _=C[0];if(C.length>1){for(const se of C)if(se.type!==ei){_=se;break}}const v=on(r),{mode:y}=v;if(g.isLeaving)return rv(_);const S=NC(_);if(!S)return rv(_);const P=Eu(S,v,g,h);Ic(S,P);const N=h.subTree,M=N&&NC(N);let F=!1;const{getTransitionKey:ee}=S.type;if(ee){const se=ee();m===void 0?m=se:se!==m&&(m=se,F=!0)}if(M&&M.type!==ei&&(!ps(S,M)||F)){const se=Eu(M,v,g,h);if(Ic(M,se),y==="out-in")return g.isLeaving=!0,se.afterLeave=()=>{g.isLeaving=!1,h.update.active!==!1&&h.update()},rv(_);y==="in-out"&&S.type!==ei&&(se.delayLeave=(we,te,Y)=>{const ie=ax(g,M);ie[String(M.key)]=M,we._leaveCb=()=>{te(),we._leaveCb=void 0,delete P.delayedLeave},P.delayedLeave=Y})}return _}}},cy=VI;function ax(r,l){const{leavingVNodes:h}=r;let g=h.get(l.type);return g||(g=Object.create(null),h.set(l.type,g)),g}function Eu(r,l,h,g){const{appear:m,mode:C,persisted:_=!1,onBeforeEnter:v,onEnter:y,onAfterEnter:S,onEnterCancelled:P,onBeforeLeave:N,onLeave:M,onAfterLeave:F,onLeaveCancelled:ee,onBeforeAppear:se,onAppear:we,onAfterAppear:te,onAppearCancelled:Y}=l,ie=String(r.key),ke=ax(h,r),U=(ue,Me)=>{ue&&Mi(ue,g,9,Me)},Pe=(ue,Me)=>{const Fe=Me[1];U(ue,Me),at(ue)?ue.every(Ge=>Ge.length<=1)&&Fe():ue.length<=1&&Fe()},_e={mode:C,persisted:_,beforeEnter(ue){let Me=v;if(!h.isMounted)if(m)Me=se||v;else return;ue._leaveCb&&ue._leaveCb(!0);const Fe=ke[ie];Fe&&ps(r,Fe)&&Fe.el._leaveCb&&Fe.el._leaveCb(),U(Me,[ue])},enter(ue){let Me=y,Fe=S,Ge=P;if(!h.isMounted)if(m)Me=we||y,Fe=te||S,Ge=Y||P;else return;let Q=!1;const Xe=ue._enterCb=Le=>{Q||(Q=!0,Le?U(Ge,[ue]):U(Fe,[ue]),_e.delayedLeave&&_e.delayedLeave(),ue._enterCb=void 0)};Me?Pe(Me,[ue,Xe]):Xe()},leave(ue,Me){const Fe=String(r.key);if(ue._enterCb&&ue._enterCb(!0),h.isUnmounting)return Me();U(N,[ue]);let Ge=!1;const Q=ue._leaveCb=Xe=>{Ge||(Ge=!0,Me(),Xe?U(ee,[ue]):U(F,[ue]),ue._leaveCb=void 0,ke[Fe]===r&&delete ke[Fe])};ke[Fe]=r,M?Pe(M,[ue,Q]):Q()},clone(ue){return Eu(ue,l,h,g)}};return _e}function rv(r){if(Tp(r))return r=bs(r),r.children=null,r}function NC(r){return Tp(r)?r.children?r.children[0]:void 0:r}function Ic(r,l){r.shapeFlag&6&&r.component?Ic(r.component.subTree,l):r.shapeFlag&128?(r.ssContent.transition=l.clone(r.ssContent),r.ssFallback.transition=l.clone(r.ssFallback)):r.transition=l}function Zb(r,l=!1,h){let g=[],m=0;for(let C=0;C<r.length;C++){let _=r[C];const v=h==null?_.key:String(h)+String(_.key!=null?_.key:C);_.type===rt?(_.patchFlag&128&&m++,g=g.concat(Zb(_.children,l,v))):(l||_.type!==ei)&&g.push(v!=null?bs(_,{key:v}):_)}if(m>1)for(let C=0;C<g.length;C++)g[C].patchFlag=-2;return g}function Dp(r){return It(r)?{setup:r,name:r.name}:r}const Dc=r=>!!r.type.__asyncLoader;function UI(r){It(r)&&(r={loader:r});const{loader:l,loadingComponent:h,errorComponent:g,delay:m=200,timeout:C,suspensible:_=!0,onError:v}=r;let y=null,S,P=0;const N=()=>(P++,y=null,M()),M=()=>{let F;return y||(F=y=l().catch(ee=>{if(ee=ee instanceof Error?ee:new Error(String(ee)),v)return new Promise((se,we)=>{v(ee,()=>se(N()),()=>we(ee),P+1)});throw ee}).then(ee=>F!==y&&y?y:(ee&&(ee.__esModule||ee[Symbol.toStringTag]==="Module")&&(ee=ee.default),S=ee,ee)))};return Dp({name:"AsyncComponentWrapper",__asyncLoader:M,get __asyncResolved(){return S},setup(){const F=_o;if(S)return()=>sv(S,F);const ee=Y=>{y=null,Oc(Y,F,13,!g)};if(_&&F.suspense||Du)return M().then(Y=>()=>sv(Y,F)).catch(Y=>(ee(Y),()=>g?ae(g,{error:Y}):null));const se=op(!1),we=op(),te=op(!!m);return m&&setTimeout(()=>{te.value=!1},m),C!=null&&setTimeout(()=>{if(!se.value&&!we.value){const Y=new Error(`Async component timed out after ${C}ms.`);ee(Y),we.value=Y}},C),M().then(()=>{se.value=!0,F.parent&&Tp(F.parent.vnode)&&Kb(F.parent.update)}).catch(Y=>{ee(Y),we.value=Y}),()=>{if(se.value&&S)return sv(S,F);if(we.value&&g)return ae(g,{error:we.value});if(h&&!te.value)return ae(h)}}})}function sv(r,l){const{ref:h,props:g,children:m,ce:C}=l.vnode,_=ae(r,g,m);return _.ref=h,_.ce=C,delete l.vnode.ce,_}const Tp=r=>r.type.__isKeepAlive,HI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:l}){const h=kl(),g=h.ctx;if(!g.renderer)return()=>{const Y=l.default&&l.default();return Y&&Y.length===1?Y[0]:Y};const m=new Map,C=new Set;let _=null;const v=h.suspense,{renderer:{p:y,m:S,um:P,o:{createElement:N}}}=g,M=N("div");g.activate=(Y,ie,ke,U,Pe)=>{const _e=Y.component;S(Y,ie,ke,0,v),y(_e.vnode,Y,ie,ke,_e,v,U,Y.slotScopeIds,Pe),$o(()=>{_e.isDeactivated=!1,_e.a&&vu(_e.a);const ue=Y.props&&Y.props.onVnodeMounted;ue&&pi(ue,_e.parent,Y)},v)},g.deactivate=Y=>{const ie=Y.component;S(Y,M,null,1,v),$o(()=>{ie.da&&vu(ie.da);const ke=Y.props&&Y.props.onVnodeUnmounted;ke&&pi(ke,ie.parent,Y),ie.isDeactivated=!0},v)};function F(Y){av(Y),P(Y,h,v,!0)}function ee(Y){m.forEach((ie,ke)=>{const U=Pv(ie.type);U&&(!Y||!Y(U))&&se(ke)})}function se(Y){const ie=m.get(Y);!_||ie.type!==_.type?F(ie):_&&av(_),m.delete(Y),C.delete(Y)}Cu(()=>[r.include,r.exclude],([Y,ie])=>{Y&&ee(ke=>ep(Y,ke)),ie&&ee(ke=>!ep(ie,ke))},{flush:"post",deep:!0});let we=null;const te=()=>{we!=null&&m.set(we,lv(h.subTree))};return Sp(te),Xb(te),ew(()=>{m.forEach(Y=>{const{subTree:ie,suspense:ke}=h,U=lv(ie);if(Y.type===U.type){av(U);const Pe=U.component.da;Pe&&$o(Pe,ke);return}F(Y)})}),()=>{if(we=null,!l.default)return null;const Y=l.default(),ie=Y[0];if(Y.length>1)return _=null,Y;if(!bl(ie)||!(ie.shapeFlag&4)&&!(ie.shapeFlag&128))return _=null,ie;let ke=lv(ie);const U=ke.type,Pe=Pv(Dc(ke)?ke.type.__asyncResolved||{}:U),{include:_e,exclude:ue,max:Me}=r;if(_e&&(!Pe||!ep(_e,Pe))||ue&&Pe&&ep(ue,Pe))return _=ke,ie;const Fe=ke.key==null?U:ke.key,Ge=m.get(Fe);return ke.el&&(ke=bs(ke),ie.shapeFlag&128&&(ie.ssContent=ke)),we=Fe,Ge?(ke.el=Ge.el,ke.component=Ge.component,ke.transition&&Ic(ke,ke.transition),ke.shapeFlag|=512,C.delete(Fe),C.add(Fe)):(C.add(Fe),Me&&C.size>parseInt(Me,10)&&se(C.values().next().value)),ke.shapeFlag|=256,_=ke,ox(ie.type)?ie:ke}}},qI=HI;function ep(r,l){return at(r)?r.some(h=>ep(h,l)):Zn(r)?r.split(",").includes(l):r.test?r.test(l):!1}function lx(r,l){dx(r,"a",l)}function cx(r,l){dx(r,"da",l)}function dx(r,l,h=_o){const g=r.__wdc||(r.__wdc=()=>{let m=h;for(;m;){if(m.isDeactivated)return;m=m.parent}return r()});if(Jb(l,g,h),h){let m=h.parent;for(;m&&m.parent;)Tp(m.parent.vnode)&&WI(g,l,h,m),m=m.parent}}function WI(r,l,h,g){const m=Jb(l,r,g,!0);tw(()=>{Wv(g[l],m)},h)}function av(r){r.shapeFlag&=-257,r.shapeFlag&=-513}function lv(r){return r.shapeFlag&128?r.ssContent:r}function Jb(r,l,h=_o,g=!1){if(h){const m=h[r]||(h[r]=[]),C=l.__weh||(l.__weh=(..._)=>{if(h.isUnmounted)return;Mu(),wl(h);const v=Mi(l,h,r,_);return pl(),Pu(),v});return g?m.unshift(C):m.push(C),C}}const ca=r=>(l,h=_o)=>(!Du||r==="sp")&&Jb(r,(...g)=>l(...g),h),ux=ca("bm"),Sp=ca("m"),hx=ca("bu"),Xb=ca("u"),ew=ca("bum"),tw=ca("um"),fx=ca("sp"),px=ca("rtg"),mx=ca("rtc");function gx(r,l=_o){Jb("ec",r,l)}function Oe(r,l){const h=Vo;if(h===null)return r;const g=ow(h)||h.proxy,m=r.dirs||(r.dirs=[]);for(let C=0;C<l.length;C++){let[_,v,y,S=Sn]=l[C];_&&(It(_)&&(_={mounted:_,updated:_}),_.deep&&Ac(v),m.push({dir:_,instance:g,value:v,oldValue:void 0,arg:y,modifiers:S}))}return r}function hs(r,l,h,g){const m=r.dirs,C=l&&l.dirs;for(let _=0;_<m.length;_++){const v=m[_];C&&(v.oldValue=C[_].value);let y=v.dir[g];y&&(Mu(),Mi(y,h,8,[r.el,v,r,l]),Pu())}}const dy="components",GI="directives";function nt(r,l){return uy(dy,r,!0,l)||r}const bx=Symbol();function wx(r){return Zn(r)?uy(dy,r,!1)||r:r||bx}function KI(r){return uy(GI,r)}function uy(r,l,h=!0,g=!1){const m=Vo||_o;if(m){const C=m.type;if(r===dy){const v=Pv(C,!1);if(v&&(v===l||v===wi(l)||v===Cp(wi(l))))return C}const _=BC(m[r]||C[r],l)||BC(m.appContext[r],l);return!_&&g?C:_}}function BC(r,l){return r&&(r[l]||r[wi(l)]||r[Cp(wi(l))])}function Mt(r,l,h,g){let m;const C=h&&h[g];if(at(r)||Zn(r)){m=new Array(r.length);for(let _=0,v=r.length;_<v;_++)m[_]=l(r[_],_,void 0,C&&C[_])}else if(typeof r=="number"){m=new Array(r);for(let _=0;_<r;_++)m[_]=l(_+1,_,void 0,C&&C[_])}else if(Mn(r))if(r[Symbol.iterator])m=Array.from(r,(_,v)=>l(_,v,void 0,C&&C[v]));else{const _=Object.keys(r);m=new Array(_.length);for(let v=0,y=_.length;v<y;v++){const S=_[v];m[v]=l(r[S],S,v,C&&C[v])}}else m=[];return h&&(h[g]=m),m}function YI(r,l){for(let h=0;h<l.length;h++){const g=l[h];if(at(g))for(let m=0;m<g.length;m++)r[g[m].name]=g[m].fn;else g&&(r[g.name]=g.key?(...m)=>{const C=g.fn(...m);return C&&(C.key=g.key),C}:g.fn)}return r}function hy(r,l,h={},g,m){if(Vo.isCE||Vo.parent&&Dc(Vo.parent)&&Vo.parent.isCE)return l!=="default"&&(h.name=l),ae("slot",h,g&&g());let C=r[l];C&&C._c&&(C._d=!1),le();const _=C&&_x(C(h)),v=gs(rt,{key:h.key||_&&_.key||`_${l}`},_||(g?g():[]),_&&r._===1?64:-2);return!m&&v.scopeId&&(v.slotScopeIds=[v.scopeId+"-s"]),C&&C._c&&(C._d=!0),v}function _x(r){return r.some(l=>bl(l)?!(l.type===ei||l.type===rt&&!_x(l.children)):!0)?r:null}function QI(r,l){const h={};for(const g in r)h[l&&/[A-Z]/.test(g)?`on:${g}`:np(g)]=r[g];return h}const Av=r=>r?Rx(r)?ow(r)||r.proxy:Av(r.parent):null,rp=to(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Av(r.parent),$root:r=>Av(r.root),$emit:r=>r.emit,$options:r=>fy(r),$forceUpdate:r=>r.f||(r.f=()=>Kb(r.update)),$nextTick:r=>r.n||(r.n=Gb.bind(r.proxy)),$watch:r=>$I.bind(r)}),cv=(r,l)=>r!==Sn&&!r.__isScriptSetup&&en(r,l),Cv={get({_:r},l){const{ctx:h,setupState:g,data:m,props:C,accessCache:_,type:v,appContext:y}=r;let S;if(l[0]!=="$"){const F=_[l];if(F!==void 0)switch(F){case 1:return g[l];case 2:return m[l];case 4:return h[l];case 3:return C[l]}else{if(cv(g,l))return _[l]=1,g[l];if(m!==Sn&&en(m,l))return _[l]=2,m[l];if((S=r.propsOptions[0])&&en(S,l))return _[l]=3,C[l];if(h!==Sn&&en(h,l))return _[l]=4,h[l];xv&&(_[l]=0)}}const P=rp[l];let N,M;if(P)return l==="$attrs"&&Ni(r,"get",l),P(r);if((N=v.__cssModules)&&(N=N[l]))return N;if(h!==Sn&&en(h,l))return _[l]=4,h[l];if(M=y.config.globalProperties,en(M,l))return M[l]},set({_:r},l,h){const{data:g,setupState:m,ctx:C}=r;return cv(m,l)?(m[l]=h,!0):g!==Sn&&en(g,l)?(g[l]=h,!0):en(r.props,l)||l[0]==="$"&&l.slice(1)in r?!1:(C[l]=h,!0)},has({_:{data:r,setupState:l,accessCache:h,ctx:g,appContext:m,propsOptions:C}},_){let v;return!!h[_]||r!==Sn&&en(r,_)||cv(l,_)||(v=C[0])&&en(v,_)||en(g,_)||en(rp,_)||en(m.config.globalProperties,_)},defineProperty(r,l,h){return h.get!=null?r._.accessCache[l]=0:en(h,"value")&&this.set(r,l,h.value,null),Reflect.defineProperty(r,l,h)}},ZI=to({},Cv,{get(r,l){if(l!==Symbol.unscopables)return Cv.get(r,l,r)},has(r,l){return l[0]!=="_"&&!_S(l)}});let xv=!0;function JI(r){const l=fy(r),h=r.proxy,g=r.ctx;xv=!1,l.beforeCreate&&OC(l.beforeCreate,r,"bc");const{data:m,computed:C,methods:_,watch:v,provide:y,inject:S,created:P,beforeMount:N,mounted:M,beforeUpdate:F,updated:ee,activated:se,deactivated:we,beforeDestroy:te,beforeUnmount:Y,destroyed:ie,unmounted:ke,render:U,renderTracked:Pe,renderTriggered:_e,errorCaptured:ue,serverPrefetch:Me,expose:Fe,inheritAttrs:Ge,components:Q,directives:Xe,filters:Le}=l;if(S&&XI(S,g,null,r.appContext.config.unwrapInjectedRef),_)for(const ot in _){const vt=_[ot];It(vt)&&(g[ot]=vt.bind(h))}if(m){const ot=m.call(h,h);Mn(ot)&&(r.data=Nu(ot))}if(xv=!0,C)for(const ot in C){const vt=C[ot],no=It(vt)?vt.bind(h,h):It(vt.get)?vt.get.bind(h,h):Nr,Fn=!It(vt)&&It(vt.set)?vt.set.bind(h):Nr,cn=Ii({get:no,set:Fn});Object.defineProperty(g,ot,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Ln=>cn.value=Ln})}if(v)for(const ot in v)kx(v[ot],g,h,ot);if(y){const ot=It(y)?y.call(h):y;Reflect.ownKeys(ot).forEach(vt=>{ip(vt,ot[vt])})}P&&OC(P,r,"c");function Ye(ot,vt){at(vt)?vt.forEach(no=>ot(no.bind(h))):vt&&ot(vt.bind(h))}if(Ye(ux,N),Ye(Sp,M),Ye(hx,F),Ye(Xb,ee),Ye(lx,se),Ye(cx,we),Ye(gx,ue),Ye(mx,Pe),Ye(px,_e),Ye(ew,Y),Ye(tw,ke),Ye(fx,Me),at(Fe))if(Fe.length){const ot=r.exposed||(r.exposed={});Fe.forEach(vt=>{Object.defineProperty(ot,vt,{get:()=>h[vt],set:no=>h[vt]=no})})}else r.exposed||(r.exposed={});U&&r.render===Nr&&(r.render=U),Ge!=null&&(r.inheritAttrs=Ge),Q&&(r.components=Q),Xe&&(r.directives=Xe)}function XI(r,l,h=Nr,g=!1){at(r)&&(r=Ev(r));for(const m in r){const C=r[m];let _;Mn(C)?"default"in C?_=ms(C.from||m,C.default,!0):_=ms(C.from||m):_=ms(C),Mo(_)&&g?Object.defineProperty(l,m,{enumerable:!0,configurable:!0,get:()=>_.value,set:v=>_.value=v}):l[m]=_}}function OC(r,l,h){Mi(at(r)?r.map(g=>g.bind(l.proxy)):r.bind(l.proxy),l,h)}function kx(r,l,h,g){const m=g.includes(".")?sx(h,g):()=>h[g];if(Zn(r)){const C=l[r];It(C)&&Cu(m,C)}else if(It(r))Cu(m,r.bind(h));else if(Mn(r))if(at(r))r.forEach(C=>kx(C,l,h,g));else{const C=It(r.handler)?r.handler.bind(h):l[r.handler];It(C)&&Cu(m,C,r)}}function fy(r){const l=r.type,{mixins:h,extends:g}=l,{mixins:m,optionsCache:C,config:{optionMergeStrategies:_}}=r.appContext,v=C.get(l);let y;return v?y=v:!m.length&&!h&&!g?y=l:(y={},m.length&&m.forEach(S=>Bb(y,S,_,!0)),Bb(y,l,_)),Mn(l)&&C.set(l,y),y}function Bb(r,l,h,g=!1){const{mixins:m,extends:C}=l;C&&Bb(r,C,h,!0),m&&m.forEach(_=>Bb(r,_,h,!0));for(const _ in l)if(!(g&&_==="expose")){const v=eM[_]||h&&h[_];r[_]=v?v(r[_],l[_]):l[_]}return r}const eM={data:LC,props:kc,emits:kc,methods:kc,computed:kc,beforeCreate:li,created:li,beforeMount:li,mounted:li,beforeUpdate:li,updated:li,beforeDestroy:li,beforeUnmount:li,destroyed:li,unmounted:li,activated:li,deactivated:li,errorCaptured:li,serverPrefetch:li,components:kc,directives:kc,watch:nM,provide:LC,inject:tM};function LC(r,l){return l?r?function(){return to(It(r)?r.call(this,this):r,It(l)?l.call(this,this):l)}:l:r}function tM(r,l){return kc(Ev(r),Ev(l))}function Ev(r){if(at(r)){const l={};for(let h=0;h<r.length;h++)l[r[h]]=r[h];return l}return r}function li(r,l){return r?[...new Set([].concat(r,l))]:l}function kc(r,l){return r?to(to(Object.create(null),r),l):l}function nM(r,l){if(!r)return l;if(!l)return r;const h=to(Object.create(null),r);for(const g in l)h[g]=li(r[g],l[g]);return h}function oM(r,l,h,g=!1){const m={},C={};Pb(C,nw,1),r.propsDefaults=Object.create(null),vx(r,l,m,C);for(const _ in r.propsOptions[0])_ in m||(m[_]=void 0);h?r.props=g?m:G1(m):r.type.props?r.props=m:r.props=C,r.attrs=C}function iM(r,l,h,g){const{props:m,attrs:C,vnode:{patchFlag:_}}=r,v=on(m),[y]=r.propsOptions;let S=!1;if((g||_>0)&&!(_&16)){if(_&8){const P=r.vnode.dynamicProps;for(let N=0;N<P.length;N++){let M=P[N];if(Yb(r.emitsOptions,M))continue;const F=l[M];if(y)if(en(C,M))F!==C[M]&&(C[M]=F,S=!0);else{const ee=wi(M);m[ee]=Dv(y,v,ee,F,r,!1)}else F!==C[M]&&(C[M]=F,S=!0)}}}else{vx(r,l,m,C)&&(S=!0);let P;for(const N in v)(!l||!en(l,N)&&((P=ir(N))===N||!en(l,P)))&&(y?h&&(h[N]!==void 0||h[P]!==void 0)&&(m[N]=Dv(y,v,N,void 0,r,!0)):delete m[N]);if(C!==v)for(const N in C)(!l||!en(l,N)&&!0)&&(delete C[N],S=!0)}S&&la(r,"set","$attrs")}function vx(r,l,h,g){const[m,C]=r.propsOptions;let _=!1,v;if(l)for(let y in l){if(tp(y))continue;const S=l[y];let P;m&&en(m,P=wi(y))?!C||!C.includes(P)?h[P]=S:(v||(v={}))[P]=S:Yb(r.emitsOptions,y)||(!(y in g)||S!==g[y])&&(g[y]=S,_=!0)}if(C){const y=on(h),S=v||Sn;for(let P=0;P<C.length;P++){const N=C[P];h[N]=Dv(m,y,N,S[N],r,!en(S,N))}}return _}function Dv(r,l,h,g,m,C){const _=r[h];if(_!=null){const v=en(_,"default");if(v&&g===void 0){const y=_.default;if(_.type!==Function&&It(y)){const{propsDefaults:S}=m;h in S?g=S[h]:(wl(m),g=S[h]=y.call(null,l),pl())}else g=y}_[0]&&(C&&!v?g=!1:_[1]&&(g===""||g===ir(h))&&(g=!0))}return g}function yx(r,l,h=!1){const g=l.propsCache,m=g.get(r);if(m)return m;const C=r.props,_={},v=[];let y=!1;if(!It(r)){const P=N=>{y=!0;const[M,F]=yx(N,l,!0);to(_,M),F&&v.push(...F)};!h&&l.mixins.length&&l.mixins.forEach(P),r.extends&&P(r.extends),r.mixins&&r.mixins.forEach(P)}if(!C&&!y)return Mn(r)&&g.set(r,_u),_u;if(at(C))for(let P=0;P<C.length;P++){const N=wi(C[P]);RC(N)&&(_[N]=Sn)}else if(C)for(const P in C){const N=wi(P);if(RC(N)){const M=C[P],F=_[N]=at(M)||It(M)?{type:M}:Object.assign({},M);if(F){const ee=FC(Boolean,F.type),se=FC(String,F.type);F[0]=ee>-1,F[1]=se<0||ee<se,(ee>-1||en(F,"default"))&&v.push(N)}}}const S=[_,v];return Mn(r)&&g.set(r,S),S}function RC(r){return r[0]!=="$"}function zC(r){const l=r&&r.toString().match(/^\s*function (\w+)/);return l?l[1]:r===null?"null":""}function jC(r,l){return zC(r)===zC(l)}function FC(r,l){return at(l)?l.findIndex(h=>jC(h,r)):It(l)&&jC(l,r)?0:-1}const Ax=r=>r[0]==="_"||r==="$stable",py=r=>at(r)?r.map(Si):[Si(r)],rM=(r,l,h)=>{if(l._n)return l;const g=je((...m)=>py(l(...m)),h);return g._c=!1,g},Cx=(r,l,h)=>{const g=r._ctx;for(const m in r){if(Ax(m))continue;const C=r[m];if(It(C))l[m]=rM(m,C,g);else if(C!=null){const _=py(C);l[m]=()=>_}}},xx=(r,l)=>{const h=py(l);r.slots.default=()=>h},sM=(r,l)=>{if(r.vnode.shapeFlag&32){const h=l._;h?(r.slots=on(l),Pb(l,"_",h)):Cx(l,r.slots={})}else r.slots={},l&&xx(r,l);Pb(r.slots,nw,1)},aM=(r,l,h)=>{const{vnode:g,slots:m}=r;let C=!0,_=Sn;if(g.shapeFlag&32){const v=l._;v?h&&v===1?C=!1:(to(m,l),!h&&v===1&&delete m._):(C=!l.$stable,Cx(l,m)),_=l}else l&&(xx(r,l),_={default:1});if(C)for(const v in m)!Ax(v)&&!(v in _)&&delete m[v]};function Ex(){return{app:null,config:{isNativeTag:TS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lM=0;function cM(r,l){return function(g,m=null){It(g)||(g=Object.assign({},g)),m!=null&&!Mn(m)&&(m=null);const C=Ex(),_=new Set;let v=!1;const y=C.app={_uid:lM++,_component:g,_props:m,_container:null,_context:C,_instance:null,version:qx,get config(){return C.config},set config(S){},use(S,...P){return _.has(S)||(S&&It(S.install)?(_.add(S),S.install(y,...P)):It(S)&&(_.add(S),S(y,...P))),y},mixin(S){return C.mixins.includes(S)||C.mixins.push(S),y},component(S,P){return P?(C.components[S]=P,y):C.components[S]},directive(S,P){return P?(C.directives[S]=P,y):C.directives[S]},mount(S,P,N){if(!v){const M=ae(g,m);return M.appContext=C,P&&l?l(M,S):r(M,S,N),v=!0,y._container=S,S.__vue_app__=y,ow(M.component)||M.component.proxy}},unmount(){v&&(r(null,y._container),delete y._container.__vue_app__)},provide(S,P){return C.provides[S]=P,y}};return y}}function Ob(r,l,h,g,m=!1){if(at(r)){r.forEach((M,F)=>Ob(M,l&&(at(l)?l[F]:l),h,g,m));return}if(Dc(g)&&!m)return;const C=g.shapeFlag&4?ow(g.component)||g.component.proxy:g.el,_=m?null:C,{i:v,r:y}=r,S=l&&l.r,P=v.refs===Sn?v.refs={}:v.refs,N=v.setupState;if(S!=null&&S!==y&&(Zn(S)?(P[S]=null,en(N,S)&&(N[S]=null)):Mo(S)&&(S.value=null)),It(y))ia(y,v,12,[_,P]);else{const M=Zn(y),F=Mo(y);if(M||F){const ee=()=>{if(r.f){const se=M?en(N,y)?N[y]:P[y]:y.value;m?at(se)&&Wv(se,C):at(se)?se.includes(C)||se.push(C):M?(P[y]=[C],en(N,y)&&(N[y]=P[y])):(y.value=[C],r.k&&(P[r.k]=y.value))}else M?(P[y]=_,en(N,y)&&(N[y]=_)):F&&(y.value=_,r.k&&(P[r.k]=_))};_?(ee.id=-1,$o(ee,h)):ee()}}}let rl=!1;const vb=r=>/svg/.test(r.namespaceURI)&&r.tagName!=="foreignObject",yb=r=>r.nodeType===8;function dM(r){const{mt:l,p:h,o:{patchProp:g,createText:m,nextSibling:C,parentNode:_,remove:v,insert:y,createComment:S}}=r,P=(te,Y)=>{if(!Y.hasChildNodes()){h(null,te,Y),Nb(),Y._vnode=te;return}rl=!1,N(Y.firstChild,te,null,null,null),Nb(),Y._vnode=te,rl&&console.error("Hydration completed but contains mismatches.")},N=(te,Y,ie,ke,U,Pe=!1)=>{const _e=yb(te)&&te.data==="[",ue=()=>se(te,Y,ie,ke,U,_e),{type:Me,ref:Fe,shapeFlag:Ge,patchFlag:Q}=Y;let Xe=te.nodeType;Y.el=te,Q===-2&&(Pe=!1,Y.dynamicChildren=null);let Le=null;switch(Me){case Mc:Xe!==3?Y.children===""?(y(Y.el=m(""),_(te),te),Le=te):Le=ue():(te.data!==Y.children&&(rl=!0,te.data=Y.children),Le=C(te));break;case ei:Xe!==8||_e?Le=ue():Le=C(te);break;case Tc:if(_e&&(te=C(te),Xe=te.nodeType),Xe===1||Xe===3){Le=te;const Ft=!Y.children.length;for(let Ye=0;Ye<Y.staticCount;Ye++)Ft&&(Y.children+=Le.nodeType===1?Le.outerHTML:Le.data),Ye===Y.staticCount-1&&(Y.anchor=Le),Le=C(Le);return _e?C(Le):Le}else ue();break;case rt:_e?Le=ee(te,Y,ie,ke,U,Pe):Le=ue();break;default:if(Ge&1)Xe!==1||Y.type.toLowerCase()!==te.tagName.toLowerCase()?Le=ue():Le=M(te,Y,ie,ke,U,Pe);else if(Ge&6){Y.slotScopeIds=U;const Ft=_(te);if(l(Y,Ft,null,ie,ke,vb(Ft),Pe),Le=_e?we(te):C(te),Le&&yb(Le)&&Le.data==="teleport end"&&(Le=C(Le)),Dc(Y)){let Ye;_e?(Ye=ae(rt),Ye.anchor=Le?Le.previousSibling:Ft.lastChild):Ye=te.nodeType===3?j(""):ae("div"),Ye.el=te,Y.component.subTree=Ye}}else Ge&64?Xe!==8?Le=ue():Le=Y.type.hydrate(te,Y,ie,ke,U,Pe,r,F):Ge&128&&(Le=Y.type.hydrate(te,Y,ie,ke,vb(_(te)),U,Pe,r,N))}return Fe!=null&&Ob(Fe,null,ke,Y),Le},M=(te,Y,ie,ke,U,Pe)=>{Pe=Pe||!!Y.dynamicChildren;const{type:_e,props:ue,patchFlag:Me,shapeFlag:Fe,dirs:Ge}=Y,Q=_e==="input"&&Ge||_e==="option";if(Q||Me!==-1){if(Ge&&hs(Y,null,ie,"created"),ue)if(Q||!Pe||Me&48)for(const Le in ue)(Q&&Le.endsWith("value")||yp(Le)&&!tp(Le))&&g(te,Le,null,ue[Le],!1,void 0,ie);else ue.onClick&&g(te,"onClick",null,ue.onClick,!1,void 0,ie);let Xe;if((Xe=ue&&ue.onVnodeBeforeMount)&&pi(Xe,ie,Y),Ge&&hs(Y,null,ie,"beforeMount"),((Xe=ue&&ue.onVnodeMounted)||Ge)&&ix(()=>{Xe&&pi(Xe,ie,Y),Ge&&hs(Y,null,ie,"mounted")},ke),Fe&16&&!(ue&&(ue.innerHTML||ue.textContent))){let Le=F(te.firstChild,Y,te,ie,ke,U,Pe);for(;Le;){rl=!0;const Ft=Le;Le=Le.nextSibling,v(Ft)}}else Fe&8&&te.textContent!==Y.children&&(rl=!0,te.textContent=Y.children)}return te.nextSibling},F=(te,Y,ie,ke,U,Pe,_e)=>{_e=_e||!!Y.dynamicChildren;const ue=Y.children,Me=ue.length;for(let Fe=0;Fe<Me;Fe++){const Ge=_e?ue[Fe]:ue[Fe]=Si(ue[Fe]);if(te)te=N(te,Ge,ke,U,Pe,_e);else{if(Ge.type===Mc&&!Ge.children)continue;rl=!0,h(null,Ge,ie,null,ke,U,vb(ie),Pe)}}return te},ee=(te,Y,ie,ke,U,Pe)=>{const{slotScopeIds:_e}=Y;_e&&(U=U?U.concat(_e):_e);const ue=_(te),Me=F(C(te),Y,ue,ie,ke,U,Pe);return Me&&yb(Me)&&Me.data==="]"?C(Y.anchor=Me):(rl=!0,y(Y.anchor=S("]"),ue,Me),Me)},se=(te,Y,ie,ke,U,Pe)=>{if(rl=!0,Y.el=null,Pe){const Me=we(te);for(;;){const Fe=C(te);if(Fe&&Fe!==Me)v(Fe);else break}}const _e=C(te),ue=_(te);return v(te),h(null,Y,ue,_e,ie,ke,vb(ue),U),_e},we=te=>{let Y=0;for(;te;)if(te=C(te),te&&yb(te)&&(te.data==="["&&Y++,te.data==="]")){if(Y===0)return C(te);Y--}return te};return[P,N]}const $o=ix;function Dx(r){return Sx(r)}function Tx(r){return Sx(r,dM)}function Sx(r,l){const h=BS();h.__VUE__=!0;const{insert:g,remove:m,patchProp:C,createElement:_,createText:v,createComment:y,setText:S,setElementText:P,parentNode:N,nextSibling:M,setScopeId:F=Nr,insertStaticContent:ee}=r,se=(q,Z,ce,me=null,Ce=null,ze=null,Ve=!1,ve=null,Se=!!Z.dynamicChildren)=>{if(q===Z)return;q&&!ps(q,Z)&&(me=Ne(q),Ln(q,Ce,ze,!0),q=null),Z.patchFlag===-2&&(Se=!1,Z.dynamicChildren=null);const{type:xe,ref:et,shapeFlag:We}=Z;switch(xe){case Mc:we(q,Z,ce,me);break;case ei:te(q,Z,ce,me);break;case Tc:q==null&&Y(Z,ce,me,Ve);break;case rt:Q(q,Z,ce,me,Ce,ze,Ve,ve,Se);break;default:We&1?U(q,Z,ce,me,Ce,ze,Ve,ve,Se):We&6?Xe(q,Z,ce,me,Ce,ze,Ve,ve,Se):(We&64||We&128)&&xe.process(q,Z,ce,me,Ce,ze,Ve,ve,Se,dt)}et!=null&&Ce&&Ob(et,q&&q.ref,ze,Z||q,!Z)},we=(q,Z,ce,me)=>{if(q==null)g(Z.el=v(Z.children),ce,me);else{const Ce=Z.el=q.el;Z.children!==q.children&&S(Ce,Z.children)}},te=(q,Z,ce,me)=>{q==null?g(Z.el=y(Z.children||""),ce,me):Z.el=q.el},Y=(q,Z,ce,me)=>{[q.el,q.anchor]=ee(q.children,Z,ce,me,q.el,q.anchor)},ie=({el:q,anchor:Z},ce,me)=>{let Ce;for(;q&&q!==Z;)Ce=M(q),g(q,ce,me),q=Ce;g(Z,ce,me)},ke=({el:q,anchor:Z})=>{let ce;for(;q&&q!==Z;)ce=M(q),m(q),q=ce;m(Z)},U=(q,Z,ce,me,Ce,ze,Ve,ve,Se)=>{Ve=Ve||Z.type==="svg",q==null?Pe(Z,ce,me,Ce,ze,Ve,ve,Se):Me(q,Z,Ce,ze,Ve,ve,Se)},Pe=(q,Z,ce,me,Ce,ze,Ve,ve)=>{let Se,xe;const{type:et,props:We,shapeFlag:qe,transition:st,dirs:Ze}=q;if(Se=q.el=_(q.type,ze,We&&We.is,We),qe&8?P(Se,q.children):qe&16&&ue(q.children,Se,null,me,Ce,ze&&et!=="foreignObject",Ve,ve),Ze&&hs(q,null,me,"created"),We){for(const _t in We)_t!=="value"&&!tp(_t)&&C(Se,_t,null,We[_t],ze,q.children,me,Ce,Te);"value"in We&&C(Se,"value",null,We.value),(xe=We.onVnodeBeforeMount)&&pi(xe,me,q)}_e(Se,q,q.scopeId,Ve,me),Ze&&hs(q,null,me,"beforeMount");const Tt=(!Ce||Ce&&!Ce.pendingBranch)&&st&&!st.persisted;Tt&&st.beforeEnter(Se),g(Se,Z,ce),((xe=We&&We.onVnodeMounted)||Tt||Ze)&&$o(()=>{xe&&pi(xe,me,q),Tt&&st.enter(Se),Ze&&hs(q,null,me,"mounted")},Ce)},_e=(q,Z,ce,me,Ce)=>{if(ce&&F(q,ce),me)for(let ze=0;ze<me.length;ze++)F(q,me[ze]);if(Ce){let ze=Ce.subTree;if(Z===ze){const Ve=Ce.vnode;_e(q,Ve,Ve.scopeId,Ve.slotScopeIds,Ce.parent)}}},ue=(q,Z,ce,me,Ce,ze,Ve,ve,Se=0)=>{for(let xe=Se;xe<q.length;xe++){const et=q[xe]=ve?ul(q[xe]):Si(q[xe]);se(null,et,Z,ce,me,Ce,ze,Ve,ve)}},Me=(q,Z,ce,me,Ce,ze,Ve)=>{const ve=Z.el=q.el;let{patchFlag:Se,dynamicChildren:xe,dirs:et}=Z;Se|=q.patchFlag&16;const We=q.props||Sn,qe=Z.props||Sn;let st;ce&&wc(ce,!1),(st=qe.onVnodeBeforeUpdate)&&pi(st,ce,Z,q),et&&hs(Z,q,ce,"beforeUpdate"),ce&&wc(ce,!0);const Ze=Ce&&Z.type!=="foreignObject";if(xe?Fe(q.dynamicChildren,xe,ve,ce,me,Ze,ze):Ve||vt(q,Z,ve,null,ce,me,Ze,ze,!1),Se>0){if(Se&16)Ge(ve,Z,We,qe,ce,me,Ce);else if(Se&2&&We.class!==qe.class&&C(ve,"class",null,qe.class,Ce),Se&4&&C(ve,"style",We.style,qe.style,Ce),Se&8){const Tt=Z.dynamicProps;for(let _t=0;_t<Tt.length;_t++){const rn=Tt[_t],qt=We[rn],wn=qe[rn];(wn!==qt||rn==="value")&&C(ve,rn,qt,wn,Ce,q.children,ce,me,Te)}}Se&1&&q.children!==Z.children&&P(ve,Z.children)}else!Ve&&xe==null&&Ge(ve,Z,We,qe,ce,me,Ce);((st=qe.onVnodeUpdated)||et)&&$o(()=>{st&&pi(st,ce,Z,q),et&&hs(Z,q,ce,"updated")},me)},Fe=(q,Z,ce,me,Ce,ze,Ve)=>{for(let ve=0;ve<Z.length;ve++){const Se=q[ve],xe=Z[ve],et=Se.el&&(Se.type===rt||!ps(Se,xe)||Se.shapeFlag&70)?N(Se.el):ce;se(Se,xe,et,null,me,Ce,ze,Ve,!0)}},Ge=(q,Z,ce,me,Ce,ze,Ve)=>{if(ce!==me){if(ce!==Sn)for(const ve in ce)!tp(ve)&&!(ve in me)&&C(q,ve,ce[ve],null,Ve,Z.children,Ce,ze,Te);for(const ve in me){if(tp(ve))continue;const Se=me[ve],xe=ce[ve];Se!==xe&&ve!=="value"&&C(q,ve,xe,Se,Ve,Z.children,Ce,ze,Te)}"value"in me&&C(q,"value",ce.value,me.value)}},Q=(q,Z,ce,me,Ce,ze,Ve,ve,Se)=>{const xe=Z.el=q?q.el:v(""),et=Z.anchor=q?q.anchor:v("");let{patchFlag:We,dynamicChildren:qe,slotScopeIds:st}=Z;st&&(ve=ve?ve.concat(st):st),q==null?(g(xe,ce,me),g(et,ce,me),ue(Z.children,ce,et,Ce,ze,Ve,ve,Se)):We>0&&We&64&&qe&&q.dynamicChildren?(Fe(q.dynamicChildren,qe,ce,Ce,ze,Ve,ve),(Z.key!=null||Ce&&Z===Ce.subTree)&&my(q,Z,!0)):vt(q,Z,ce,et,Ce,ze,Ve,ve,Se)},Xe=(q,Z,ce,me,Ce,ze,Ve,ve,Se)=>{Z.slotScopeIds=ve,q==null?Z.shapeFlag&512?Ce.ctx.activate(Z,ce,me,Ve,Se):Le(Z,ce,me,Ce,ze,Ve,Se):Ft(q,Z,Se)},Le=(q,Z,ce,me,Ce,ze,Ve)=>{const ve=q.component=Lx(q,me,Ce);if(Tp(q)&&(ve.ctx.renderer=dt),zx(ve),ve.asyncDep){if(Ce&&Ce.registerDep(ve,Ye),!q.el){const Se=ve.subTree=ae(ei);te(null,Se,Z,ce)}return}Ye(ve,q,Z,ce,Ce,ze,Ve)},Ft=(q,Z,ce)=>{const me=Z.component=q.component;if(PI(q,Z,ce))if(me.asyncDep&&!me.asyncResolved){ot(me,Z,ce);return}else me.next=Z,xI(me.update),me.update();else Z.el=q.el,me.vnode=Z},Ye=(q,Z,ce,me,Ce,ze,Ve)=>{const ve=()=>{if(q.isMounted){let{next:et,bu:We,u:qe,parent:st,vnode:Ze}=q,Tt=et,_t;wc(q,!1),et?(et.el=Ze.el,ot(q,et,Ve)):et=Ze,We&&vu(We),(_t=et.props&&et.props.onVnodeBeforeUpdate)&&pi(_t,st,et,Ze),wc(q,!0);const rn=Eb(q),qt=q.subTree;q.subTree=rn,se(qt,rn,N(qt.el),Ne(qt),q,Ce,ze),et.el=rn.el,Tt===null&&sy(q,rn.el),qe&&$o(qe,Ce),(_t=et.props&&et.props.onVnodeUpdated)&&$o(()=>pi(_t,st,et,Ze),Ce)}else{let et;const{el:We,props:qe}=Z,{bm:st,m:Ze,parent:Tt}=q,_t=Dc(Z);if(wc(q,!1),st&&vu(st),!_t&&(et=qe&&qe.onVnodeBeforeMount)&&pi(et,Tt,Z),wc(q,!0),We&&Qe){const rn=()=>{q.subTree=Eb(q),Qe(We,q.subTree,q,Ce,null)};_t?Z.type.__asyncLoader().then(()=>!q.isUnmounted&&rn()):rn()}else{const rn=q.subTree=Eb(q);se(null,rn,ce,me,q,Ce,ze),Z.el=rn.el}if(Ze&&$o(Ze,Ce),!_t&&(et=qe&&qe.onVnodeMounted)){const rn=Z;$o(()=>pi(et,Tt,rn),Ce)}(Z.shapeFlag&256||Tt&&Dc(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&q.a&&$o(q.a,Ce),q.isMounted=!0,Z=ce=me=null}},Se=q.effect=new xp(ve,()=>Kb(xe),q.scope),xe=q.update=()=>Se.run();xe.id=q.uid,wc(q,!0),xe()},ot=(q,Z,ce)=>{Z.component=q;const me=q.vnode.props;q.vnode=Z,q.next=null,iM(q,Z.props,me,ce),aM(q,Z.children,ce),Mu(),IC(),Pu()},vt=(q,Z,ce,me,Ce,ze,Ve,ve,Se=!1)=>{const xe=q&&q.children,et=q?q.shapeFlag:0,We=Z.children,{patchFlag:qe,shapeFlag:st}=Z;if(qe>0){if(qe&128){Fn(xe,We,ce,me,Ce,ze,Ve,ve,Se);return}else if(qe&256){no(xe,We,ce,me,Ce,ze,Ve,ve,Se);return}}st&8?(et&16&&Te(xe,Ce,ze),We!==xe&&P(ce,We)):et&16?st&16?Fn(xe,We,ce,me,Ce,ze,Ve,ve,Se):Te(xe,Ce,ze,!0):(et&8&&P(ce,""),st&16&&ue(We,ce,me,Ce,ze,Ve,ve,Se))},no=(q,Z,ce,me,Ce,ze,Ve,ve,Se)=>{q=q||_u,Z=Z||_u;const xe=q.length,et=Z.length,We=Math.min(xe,et);let qe;for(qe=0;qe<We;qe++){const st=Z[qe]=Se?ul(Z[qe]):Si(Z[qe]);se(q[qe],st,ce,null,Ce,ze,Ve,ve,Se)}xe>et?Te(q,Ce,ze,!0,!1,We):ue(Z,ce,me,Ce,ze,Ve,ve,Se,We)},Fn=(q,Z,ce,me,Ce,ze,Ve,ve,Se)=>{let xe=0;const et=Z.length;let We=q.length-1,qe=et-1;for(;xe<=We&&xe<=qe;){const st=q[xe],Ze=Z[xe]=Se?ul(Z[xe]):Si(Z[xe]);if(ps(st,Ze))se(st,Ze,ce,null,Ce,ze,Ve,ve,Se);else break;xe++}for(;xe<=We&&xe<=qe;){const st=q[We],Ze=Z[qe]=Se?ul(Z[qe]):Si(Z[qe]);if(ps(st,Ze))se(st,Ze,ce,null,Ce,ze,Ve,ve,Se);else break;We--,qe--}if(xe>We){if(xe<=qe){const st=qe+1,Ze=st<et?Z[st].el:me;for(;xe<=qe;)se(null,Z[xe]=Se?ul(Z[xe]):Si(Z[xe]),ce,Ze,Ce,ze,Ve,ve,Se),xe++}}else if(xe>qe)for(;xe<=We;)Ln(q[xe],Ce,ze,!0),xe++;else{const st=xe,Ze=xe,Tt=new Map;for(xe=Ze;xe<=qe;xe++){const sn=Z[xe]=Se?ul(Z[xe]):Si(Z[xe]);sn.key!=null&&Tt.set(sn.key,xe)}let _t,rn=0;const qt=qe-Ze+1;let wn=!1,Oi=0;const $n=new Array(qt);for(xe=0;xe<qt;xe++)$n[xe]=0;for(xe=st;xe<=We;xe++){const sn=q[xe];if(rn>=qt){Ln(sn,Ce,ze,!0);continue}let io;if(sn.key!=null)io=Tt.get(sn.key);else for(_t=Ze;_t<=qe;_t++)if($n[_t-Ze]===0&&ps(sn,Z[_t])){io=_t;break}io===void 0?Ln(sn,Ce,ze,!0):($n[io-Ze]=xe+1,io>=Oi?Oi=io:wn=!0,se(sn,Z[io],ce,null,Ce,ze,Ve,ve,Se),rn++)}const Wt=wn?uM($n):_u;for(_t=Wt.length-1,xe=qt-1;xe>=0;xe--){const sn=Ze+xe,io=Z[sn],Li=sn+1<et?Z[sn+1].el:me;$n[xe]===0?se(null,io,ce,Li,Ce,ze,Ve,ve,Se):wn&&(_t<0||xe!==Wt[_t]?cn(io,ce,Li,2):_t--)}}},cn=(q,Z,ce,me,Ce=null)=>{const{el:ze,type:Ve,transition:ve,children:Se,shapeFlag:xe}=q;if(xe&6){cn(q.component.subTree,Z,ce,me);return}if(xe&128){q.suspense.move(Z,ce,me);return}if(xe&64){Ve.move(q,Z,ce,dt);return}if(Ve===rt){g(ze,Z,ce);for(let We=0;We<Se.length;We++)cn(Se[We],Z,ce,me);g(q.anchor,Z,ce);return}if(Ve===Tc){ie(q,Z,ce);return}if(me!==2&&xe&1&&ve)if(me===0)ve.beforeEnter(ze),g(ze,Z,ce),$o(()=>ve.enter(ze),Ce);else{const{leave:We,delayLeave:qe,afterLeave:st}=ve,Ze=()=>g(ze,Z,ce),Tt=()=>{We(ze,()=>{Ze(),st&&st()})};qe?qe(ze,Ze,Tt):Tt()}else g(ze,Z,ce)},Ln=(q,Z,ce,me=!1,Ce=!1)=>{const{type:ze,props:Ve,ref:ve,children:Se,dynamicChildren:xe,shapeFlag:et,patchFlag:We,dirs:qe}=q;if(ve!=null&&Ob(ve,null,ce,q,!0),et&256){Z.ctx.deactivate(q);return}const st=et&1&&qe,Ze=!Dc(q);let Tt;if(Ze&&(Tt=Ve&&Ve.onVnodeBeforeUnmount)&&pi(Tt,Z,q),et&6)X(q.component,ce,me);else{if(et&128){q.suspense.unmount(ce,me);return}st&&hs(q,null,Z,"beforeUnmount"),et&64?q.type.remove(q,Z,ce,Ce,dt,me):xe&&(ze!==rt||We>0&&We&64)?Te(xe,Z,ce,!1,!0):(ze===rt&&We&384||!Ce&&et&16)&&Te(Se,Z,ce),me&&fo(q)}(Ze&&(Tt=Ve&&Ve.onVnodeUnmounted)||st)&&$o(()=>{Tt&&pi(Tt,Z,q),st&&hs(q,null,Z,"unmounted")},ce)},fo=q=>{const{type:Z,el:ce,anchor:me,transition:Ce}=q;if(Z===rt){Dt(ce,me);return}if(Z===Tc){ke(q);return}const ze=()=>{m(ce),Ce&&!Ce.persisted&&Ce.afterLeave&&Ce.afterLeave()};if(q.shapeFlag&1&&Ce&&!Ce.persisted){const{leave:Ve,delayLeave:ve}=Ce,Se=()=>Ve(ce,ze);ve?ve(q.el,ze,Se):Se()}else ze()},Dt=(q,Z)=>{let ce;for(;q!==Z;)ce=M(q),m(q),q=ce;m(Z)},X=(q,Z,ce)=>{const{bum:me,scope:Ce,update:ze,subTree:Ve,um:ve}=q;me&&vu(me),Ce.stop(),ze&&(ze.active=!1,Ln(Ve,q,Z,ce)),ve&&$o(ve,Z),$o(()=>{q.isUnmounted=!0},Z),Z&&Z.pendingBranch&&!Z.isUnmounted&&q.asyncDep&&!q.asyncResolved&&q.suspenseId===Z.pendingId&&(Z.deps--,Z.deps===0&&Z.resolve())},Te=(q,Z,ce,me=!1,Ce=!1,ze=0)=>{for(let Ve=ze;Ve<q.length;Ve++)Ln(q[Ve],Z,ce,me,Ce)},Ne=q=>q.shapeFlag&6?Ne(q.component.subTree):q.shapeFlag&128?q.suspense.next():M(q.anchor||q.el),Ue=(q,Z,ce)=>{q==null?Z._vnode&&Ln(Z._vnode,null,null,!0):se(Z._vnode||null,q,Z,null,null,null,ce),IC(),Nb(),Z._vnode=q},dt={p:se,um:Ln,m:cn,r:fo,mt:Le,mc:ue,pc:vt,pbc:Fe,n:Ne,o:r};let $t,Qe;return l&&([$t,Qe]=l(dt)),{render:Ue,hydrate:$t,createApp:cM(Ue,$t)}}function wc({effect:r,update:l},h){r.allowRecurse=l.allowRecurse=h}function my(r,l,h=!1){const g=r.children,m=l.children;if(at(g)&&at(m))for(let C=0;C<g.length;C++){const _=g[C];let v=m[C];v.shapeFlag&1&&!v.dynamicChildren&&((v.patchFlag<=0||v.patchFlag===32)&&(v=m[C]=ul(m[C]),v.el=_.el),h||my(_,v)),v.type===Mc&&(v.el=_.el)}}function uM(r){const l=r.slice(),h=[0];let g,m,C,_,v;const y=r.length;for(g=0;g<y;g++){const S=r[g];if(S!==0){if(m=h[h.length-1],r[m]<S){l[g]=m,h.push(g);continue}for(C=0,_=h.length-1;C<_;)v=C+_>>1,r[h[v]]<S?C=v+1:_=v;S<r[h[C]]&&(C>0&&(l[g]=h[C-1]),h[C]=g)}}for(C=h.length,_=h[C-1];C-- >0;)h[C]=_,_=l[_];return h}const hM=r=>r.__isTeleport,sp=r=>r&&(r.disabled||r.disabled===""),$C=r=>typeof SVGElement<"u"&&r instanceof SVGElement,Tv=(r,l)=>{const h=r&&r.to;return Zn(h)?l?l(h):null:h},fM={__isTeleport:!0,process(r,l,h,g,m,C,_,v,y,S){const{mc:P,pc:N,pbc:M,o:{insert:F,querySelector:ee,createText:se,createComment:we}}=S,te=sp(l.props);let{shapeFlag:Y,children:ie,dynamicChildren:ke}=l;if(r==null){const U=l.el=se(""),Pe=l.anchor=se("");F(U,h,g),F(Pe,h,g);const _e=l.target=Tv(l.props,ee),ue=l.targetAnchor=se("");_e&&(F(ue,_e),_=_||$C(_e));const Me=(Fe,Ge)=>{Y&16&&P(ie,Fe,Ge,m,C,_,v,y)};te?Me(h,Pe):_e&&Me(_e,ue)}else{l.el=r.el;const U=l.anchor=r.anchor,Pe=l.target=r.target,_e=l.targetAnchor=r.targetAnchor,ue=sp(r.props),Me=ue?h:Pe,Fe=ue?U:_e;if(_=_||$C(Pe),ke?(M(r.dynamicChildren,ke,Me,m,C,_,v),my(r,l,!0)):y||N(r,l,Me,Fe,m,C,_,v,!1),te)ue||Ab(l,h,U,S,1);else if((l.props&&l.props.to)!==(r.props&&r.props.to)){const Ge=l.target=Tv(l.props,ee);Ge&&Ab(l,Ge,null,S,0)}else ue&&Ab(l,Pe,_e,S,1)}Ix(l)},remove(r,l,h,g,{um:m,o:{remove:C}},_){const{shapeFlag:v,children:y,anchor:S,targetAnchor:P,target:N,props:M}=r;if(N&&C(P),(_||!sp(M))&&(C(S),v&16))for(let F=0;F<y.length;F++){const ee=y[F];m(ee,l,h,!0,!!ee.dynamicChildren)}},move:Ab,hydrate:pM};function Ab(r,l,h,{o:{insert:g},m},C=2){C===0&&g(r.targetAnchor,l,h);const{el:_,anchor:v,shapeFlag:y,children:S,props:P}=r,N=C===2;if(N&&g(_,l,h),(!N||sp(P))&&y&16)for(let M=0;M<S.length;M++)m(S[M],l,h,2);N&&g(v,l,h)}function pM(r,l,h,g,m,C,{o:{nextSibling:_,parentNode:v,querySelector:y}},S){const P=l.target=Tv(l.props,y);if(P){const N=P._lpa||P.firstChild;if(l.shapeFlag&16)if(sp(l.props))l.anchor=S(_(r),l,v(r),h,g,m,C),l.targetAnchor=N;else{l.anchor=_(r);let M=N;for(;M;)if(M=_(M),M&&M.nodeType===8&&M.data==="teleport anchor"){l.targetAnchor=M,P._lpa=l.targetAnchor&&_(l.targetAnchor);break}S(N,l,P,h,g,m,C)}Ix(l)}return l.anchor&&_(l.anchor)}const mM=fM;function Ix(r){const l=r.ctx;if(l&&l.ut){let h=r.children[0].el;for(;h!==r.targetAnchor;)h.nodeType===1&&h.setAttribute("data-v-owner",l.uid),h=h.nextSibling;l.ut()}}const rt=Symbol(void 0),Mc=Symbol(void 0),ei=Symbol(void 0),Tc=Symbol(void 0),ap=[];let gi=null;function le(r=!1){ap.push(gi=r?null:[])}function Mx(){ap.pop(),gi=ap[ap.length-1]||null}let Pc=1;function Sv(r){Pc+=r}function Px(r){return r.dynamicChildren=Pc>0?gi||_u:null,Mx(),Pc>0&&gi&&gi.push(r),r}function he(r,l,h,g,m,C){return Px(d(r,l,h,g,m,C,!0))}function gs(r,l,h,g,m){return Px(ae(r,l,h,g,m,!0))}function bl(r){return r?r.__v_isVNode===!0:!1}function ps(r,l){return r.type===l.type&&r.key===l.key}function gM(r){}const nw="__vInternal",Nx=({key:r})=>r!=null?r:null,Db=({ref:r,ref_key:l,ref_for:h})=>r!=null?Zn(r)||Mo(r)||It(r)?{i:Vo,r,k:l,f:!!h}:r:null;function d(r,l=null,h=null,g=0,m=null,C=r===rt?0:1,_=!1,v=!1){const y={__v_isVNode:!0,__v_skip:!0,type:r,props:l,key:l&&Nx(l),ref:l&&Db(l),scopeId:Qb,slotScopeIds:null,children:h,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:C,patchFlag:g,dynamicProps:m,dynamicChildren:null,appContext:null,ctx:Vo};return v?(gy(y,h),C&128&&r.normalize(y)):h&&(y.shapeFlag|=Zn(h)?8:16),Pc>0&&!_&&gi&&(y.patchFlag>0||C&6)&&y.patchFlag!==32&&gi.push(y),y}const ae=bM;function bM(r,l=null,h=null,g=0,m=null,C=!1){if((!r||r===bx)&&(r=ei),bl(r)){const v=bs(r,l,!0);return h&&gy(v,h),Pc>0&&!C&&gi&&(v.shapeFlag&6?gi[gi.indexOf(r)]=v:gi.push(v)),v.patchFlag|=-2,v}if(CM(r)&&(r=r.__vccOpts),l){l=Bx(l);let{class:v,style:y}=l;v&&!Zn(v)&&(l.class=Pi(v)),Mn(y)&&(Xv(y)&&!at(y)&&(y=to({},y)),l.style=vp(y))}const _=Zn(r)?1:ox(r)?128:hM(r)?64:Mn(r)?4:It(r)?2:0;return d(r,l,h,g,m,_,C,!0)}function Bx(r){return r?Xv(r)||nw in r?to({},r):r:null}function bs(r,l,h=!1){const{props:g,ref:m,patchFlag:C,children:_}=r,v=l?Ox(g||{},l):g;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:v,key:v&&Nx(v),ref:l&&l.ref?h&&m?at(m)?m.concat(Db(l)):[m,Db(l)]:Db(l):m,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:_,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:l&&r.type!==rt?C===-1?16:C|16:C,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&bs(r.ssContent),ssFallback:r.ssFallback&&bs(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx}}function j(r=" ",l=0){return ae(Mc,null,r,l)}function ko(r,l){const h=ae(Tc,null,r);return h.staticCount=l,h}function wu(r="",l=!1){return l?(le(),gs(ei,null,r)):ae(ei,null,r)}function Si(r){return r==null||typeof r=="boolean"?ae(ei):at(r)?ae(rt,null,r.slice()):typeof r=="object"?ul(r):ae(Mc,null,String(r))}function ul(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:bs(r)}function gy(r,l){let h=0;const{shapeFlag:g}=r;if(l==null)l=null;else if(at(l))h=16;else if(typeof l=="object")if(g&65){const m=l.default;m&&(m._c&&(m._d=!1),gy(r,m()),m._c&&(m._d=!0));return}else{h=32;const m=l._;!m&&!(nw in l)?l._ctx=Vo:m===3&&Vo&&(Vo.slots._===1?l._=1:(l._=2,r.patchFlag|=1024))}else It(l)?(l={default:l,_ctx:Vo},h=32):(l=String(l),g&64?(h=16,l=[j(l)]):h=8);r.children=l,r.shapeFlag|=h}function Ox(...r){const l={};for(let h=0;h<r.length;h++){const g=r[h];for(const m in g)if(m==="class")l.class!==g.class&&(l.class=Pi([l.class,g.class]));else if(m==="style")l.style=vp([l.style,g.style]);else if(yp(m)){const C=l[m],_=g[m];_&&C!==_&&!(at(C)&&C.includes(_))&&(l[m]=C?[].concat(C,_):_)}else m!==""&&(l[m]=g[m])}return l}function pi(r,l,h,g=null){Mi(r,l,7,[h,g])}const wM=Ex();let _M=0;function Lx(r,l,h){const g=r.type,m=(l?l.appContext:r.appContext)||wM,C={uid:_M++,vnode:r,type:g,parent:l,appContext:m,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(m.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yx(g,m),emitsOptions:nx(g,m),emit:null,emitted:null,propsDefaults:Sn,inheritAttrs:g.inheritAttrs,ctx:Sn,data:Sn,props:Sn,attrs:Sn,slots:Sn,refs:Sn,setupState:Sn,setupContext:null,suspense:h,suspenseId:h?h.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return C.ctx={_:C},C.root=l?l.root:C,C.emit=DI.bind(null,C),r.ce&&r.ce(C),C}let _o=null;const kl=()=>_o||Vo,wl=r=>{_o=r,r.scope.on()},pl=()=>{_o&&_o.scope.off(),_o=null};function Rx(r){return r.vnode.shapeFlag&4}let Du=!1;function zx(r,l=!1){Du=l;const{props:h,children:g}=r.vnode,m=Rx(r);oM(r,h,m,l),sM(r,g);const C=m?kM(r,l):void 0;return Du=!1,C}function kM(r,l){const h=r.type;r.accessCache=Object.create(null),r.proxy=ey(new Proxy(r.ctx,Cv));const{setup:g}=h;if(g){const m=r.setupContext=g.length>1?Fx(r):null;wl(r),Mu();const C=ia(g,r,0,[r.props,m]);if(Pu(),pl(),Gv(C)){if(C.then(pl,pl),l)return C.then(_=>{Iv(r,_,l)}).catch(_=>{Oc(_,r,0)});r.asyncDep=C}else Iv(r,C,l)}else jx(r,l)}function Iv(r,l,h){It(l)?r.type.__ssrInlineRender?r.ssrRender=l:r.render=l:Mn(l)&&(r.setupState=oy(l)),jx(r,h)}let Lb,Mv;function vM(r){Lb=r,Mv=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,ZI))}}const yM=()=>!Lb;function jx(r,l,h){const g=r.type;if(!r.render){if(!l&&Lb&&!g.render){const m=g.template||fy(r).template;if(m){const{isCustomElement:C,compilerOptions:_}=r.appContext.config,{delimiters:v,compilerOptions:y}=g,S=to(to({isCustomElement:C,delimiters:v},_),y);g.render=Lb(m,S)}}r.render=g.render||Nr,Mv&&Mv(r)}wl(r),Mu(),JI(r),Pu(),pl()}function AM(r){return new Proxy(r.attrs,{get(l,h){return Ni(r,"get","$attrs"),l[h]}})}function Fx(r){const l=g=>{r.exposed=g||{}};let h;return{get attrs(){return h||(h=AM(r))},slots:r.slots,emit:r.emit,expose:l}}function ow(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(oy(ey(r.exposed)),{get(l,h){if(h in l)return l[h];if(h in rp)return rp[h](r)},has(l,h){return h in l||h in rp}}))}function Pv(r,l=!0){return It(r)?r.displayName||r.name:r.name||l&&r.__name}function CM(r){return It(r)&&"__vccOpts"in r}const Ii=(r,l)=>vI(r,l,Du);function xM(){return null}function EM(){return null}function DM(r){}function TM(r,l){return null}function SM(){return $x().slots}function IM(){return $x().attrs}function $x(){const r=kl();return r.setupContext||(r.setupContext=Fx(r))}function MM(r,l){const h=at(r)?r.reduce((g,m)=>(g[m]={},g),{}):r;for(const g in l){const m=h[g];m?at(m)||It(m)?h[g]={type:m,default:l[g]}:m.default=l[g]:m===null&&(h[g]={default:l[g]})}return h}function PM(r,l){const h={};for(const g in r)l.includes(g)||Object.defineProperty(h,g,{enumerable:!0,get:()=>r[g]});return h}function NM(r){const l=kl();let h=r();return pl(),Gv(h)&&(h=h.catch(g=>{throw wl(l),g})),[h,()=>wl(l)]}function iw(r,l,h){const g=arguments.length;return g===2?Mn(l)&&!at(l)?bl(l)?ae(r,null,[l]):ae(r,l):ae(r,null,l):(g>3?h=Array.prototype.slice.call(arguments,2):g===3&&bl(h)&&(h=[h]),ae(r,l,h))}const Vx=Symbol(""),Ux=()=>ms(Vx);function BM(){}function OM(r,l,h,g){const m=h[g];if(m&&Hx(m,r))return m;const C=l();return C.memo=r.slice(),h[g]=C}function Hx(r,l){const h=r.memo;if(h.length!=l.length)return!1;for(let g=0;g<h.length;g++)if(xu(h[g],l[g]))return!1;return Pc>0&&gi&&gi.push(r),!0}const qx="3.2.45",LM={createComponentInstance:Lx,setupComponent:zx,renderComponentRoot:Eb,setCurrentRenderingInstance:gp,isVNode:bl,normalizeVNode:Si},RM=LM,zM=null,jM=null,FM="http://www.w3.org/2000/svg",yc=typeof document<"u"?document:null,VC=yc&&yc.createElement("template"),$M={insert:(r,l,h)=>{l.insertBefore(r,h||null)},remove:r=>{const l=r.parentNode;l&&l.removeChild(r)},createElement:(r,l,h,g)=>{const m=l?yc.createElementNS(FM,r):yc.createElement(r,h?{is:h}:void 0);return r==="select"&&g&&g.multiple!=null&&m.setAttribute("multiple",g.multiple),m},createText:r=>yc.createTextNode(r),createComment:r=>yc.createComment(r),setText:(r,l)=>{r.nodeValue=l},setElementText:(r,l)=>{r.textContent=l},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>yc.querySelector(r),setScopeId(r,l){r.setAttribute(l,"")},insertStaticContent(r,l,h,g,m,C){const _=h?h.previousSibling:l.lastChild;if(m&&(m===C||m.nextSibling))for(;l.insertBefore(m.cloneNode(!0),h),!(m===C||!(m=m.nextSibling)););else{VC.innerHTML=g?`<svg>${r}</svg>`:r;const v=VC.content;if(g){const y=v.firstChild;for(;y.firstChild;)v.appendChild(y.firstChild);v.removeChild(y)}l.insertBefore(v,h)}return[_?_.nextSibling:l.firstChild,h?h.previousSibling:l.lastChild]}};function VM(r,l,h){const g=r._vtc;g&&(l=(l?[l,...g]:[...g]).join(" ")),l==null?r.removeAttribute("class"):h?r.setAttribute("class",l):r.className=l}function UM(r,l,h){const g=r.style,m=Zn(h);if(h&&!m){for(const C in h)Nv(g,C,h[C]);if(l&&!Zn(l))for(const C in l)h[C]==null&&Nv(g,C,"")}else{const C=g.display;m?l!==h&&(g.cssText=h):l&&r.removeAttribute("style"),"_vod"in r&&(g.display=C)}}const UC=/\s*!important$/;function Nv(r,l,h){if(at(h))h.forEach(g=>Nv(r,l,g));else if(h==null&&(h=""),l.startsWith("--"))r.setProperty(l,h);else{const g=HM(r,l);UC.test(h)?r.setProperty(ir(g),h.replace(UC,""),"important"):r[g]=h}}const HC=["Webkit","Moz","ms"],dv={};function HM(r,l){const h=dv[l];if(h)return h;let g=wi(l);if(g!=="filter"&&g in r)return dv[l]=g;g=Cp(g);for(let m=0;m<HC.length;m++){const C=HC[m]+g;if(C in r)return dv[l]=C}return l}const qC="http://www.w3.org/1999/xlink";function qM(r,l,h,g,m){if(g&&l.startsWith("xlink:"))h==null?r.removeAttributeNS(qC,l.slice(6,l.length)):r.setAttributeNS(qC,l,h);else{const C=ES(l);h==null||C&&!I1(h)?r.removeAttribute(l):r.setAttribute(l,C?"":h)}}function WM(r,l,h,g,m,C,_){if(l==="innerHTML"||l==="textContent"){g&&_(g,m,C),r[l]=h==null?"":h;return}if(l==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=h;const y=h==null?"":h;(r.value!==y||r.tagName==="OPTION")&&(r.value=y),h==null&&r.removeAttribute(l);return}let v=!1;if(h===""||h==null){const y=typeof r[l];y==="boolean"?h=I1(h):h==null&&y==="string"?(h="",v=!0):y==="number"&&(h=0,v=!0)}try{r[l]=h}catch{}v&&r.removeAttribute(l)}function oa(r,l,h,g){r.addEventListener(l,h,g)}function GM(r,l,h,g){r.removeEventListener(l,h,g)}function KM(r,l,h,g,m=null){const C=r._vei||(r._vei={}),_=C[l];if(g&&_)_.value=g;else{const[v,y]=YM(l);if(g){const S=C[l]=JM(g,m);oa(r,v,S,y)}else _&&(GM(r,v,_,y),C[l]=void 0)}}const WC=/(?:Once|Passive|Capture)$/;function YM(r){let l;if(WC.test(r)){l={};let g;for(;g=r.match(WC);)r=r.slice(0,r.length-g[0].length),l[g[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):ir(r.slice(2)),l]}let uv=0;const QM=Promise.resolve(),ZM=()=>uv||(QM.then(()=>uv=0),uv=Date.now());function JM(r,l){const h=g=>{if(!g._vts)g._vts=Date.now();else if(g._vts<=h.attached)return;Mi(XM(g,h.value),l,5,[g])};return h.value=r,h.attached=ZM(),h}function XM(r,l){if(at(l)){const h=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{h.call(r),r._stopped=!0},l.map(g=>m=>!m._stopped&&g&&g(m))}else return l}const GC=/^on[a-z]/,e5=(r,l,h,g,m=!1,C,_,v,y)=>{l==="class"?VM(r,g,m):l==="style"?UM(r,h,g):yp(l)?qv(l)||KM(r,l,h,g,_):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):t5(r,l,g,m))?WM(r,l,g,C,_,v,y):(l==="true-value"?r._trueValue=g:l==="false-value"&&(r._falseValue=g),qM(r,l,g,m))};function t5(r,l,h,g){return g?!!(l==="innerHTML"||l==="textContent"||l in r&&GC.test(l)&&It(h)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&r.tagName==="INPUT"||l==="type"&&r.tagName==="TEXTAREA"||GC.test(l)&&Zn(h)?!1:l in r}function Wx(r,l){const h=Dp(r);class g extends rw{constructor(C){super(h,C,l)}}return g.def=h,g}const n5=r=>Wx(r,sE),o5=typeof HTMLElement<"u"?HTMLElement:class{};class rw extends o5{constructor(l,h={},g){super(),this._def=l,this._props=h,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&g?g(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Gb(()=>{this._connected||(Lv(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let g=0;g<this.attributes.length;g++)this._setAttr(this.attributes[g].name);new MutationObserver(g=>{for(const m of g)this._setAttr(m.attributeName)}).observe(this,{attributes:!0});const l=(g,m=!1)=>{const{props:C,styles:_}=g;let v;if(C&&!at(C))for(const y in C){const S=C[y];(S===Number||S&&S.type===Number)&&(y in this._props&&(this._props[y]=aa(this._props[y])),(v||(v=Object.create(null)))[wi(y)]=!0)}this._numberProps=v,m&&this._resolveProps(g),this._applyStyles(_),this._update()},h=this._def.__asyncLoader;h?h().then(g=>l(g,!0)):l(this._def)}_resolveProps(l){const{props:h}=l,g=at(h)?h:Object.keys(h||{});for(const m of Object.keys(this))m[0]!=="_"&&g.includes(m)&&this._setProp(m,this[m],!0,!1);for(const m of g.map(wi))Object.defineProperty(this,m,{get(){return this._getProp(m)},set(C){this._setProp(m,C)}})}_setAttr(l){let h=this.getAttribute(l);const g=wi(l);this._numberProps&&this._numberProps[g]&&(h=aa(h)),this._setProp(g,h,!1)}_getProp(l){return this._props[l]}_setProp(l,h,g=!0,m=!0){h!==this._props[l]&&(this._props[l]=h,m&&this._instance&&this._update(),g&&(h===!0?this.setAttribute(ir(l),""):typeof h=="string"||typeof h=="number"?this.setAttribute(ir(l),h+""):h||this.removeAttribute(ir(l))))}_update(){Lv(this._createVNode(),this.shadowRoot)}_createVNode(){const l=ae(this._def,to({},this._props));return this._instance||(l.ce=h=>{this._instance=h,h.isCE=!0;const g=(C,_)=>{this.dispatchEvent(new CustomEvent(C,{detail:_}))};h.emit=(C,..._)=>{g(C,_),ir(C)!==C&&g(ir(C),_)};let m=this;for(;m=m&&(m.parentNode||m.host);)if(m instanceof rw){h.parent=m._instance,h.provides=m._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(h=>{const g=document.createElement("style");g.textContent=h,this.shadowRoot.appendChild(g)})}}function i5(r="$style"){{const l=kl();if(!l)return Sn;const h=l.type.__cssModules;if(!h)return Sn;const g=h[r];return g||Sn}}function r5(r){const l=kl();if(!l)return;const h=l.ut=(m=r(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(C=>Ov(C,m))},g=()=>{const m=r(l.proxy);Bv(l.subTree,m),h(m)};rx(g),Sp(()=>{const m=new MutationObserver(g);m.observe(l.subTree.el.parentNode,{childList:!0}),tw(()=>m.disconnect())})}function Bv(r,l){if(r.shapeFlag&128){const h=r.suspense;r=h.activeBranch,h.pendingBranch&&!h.isHydrating&&h.effects.push(()=>{Bv(h.activeBranch,l)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)Ov(r.el,l);else if(r.type===rt)r.children.forEach(h=>Bv(h,l));else if(r.type===Tc){let{el:h,anchor:g}=r;for(;h&&(Ov(h,l),h!==g);)h=h.nextSibling}}function Ov(r,l){if(r.nodeType===1){const h=r.style;for(const g in l)h.setProperty(`--${g}`,l[g])}}const sl="transition",Yf="animation",by=(r,{slots:l})=>iw(cy,Kx(r),l);by.displayName="Transition";const Gx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},s5=by.props=to({},cy.props,Gx),_c=(r,l=[])=>{at(r)?r.forEach(h=>h(...l)):r&&r(...l)},KC=r=>r?at(r)?r.some(l=>l.length>1):r.length>1:!1;function Kx(r){const l={};for(const Q in r)Q in Gx||(l[Q]=r[Q]);if(r.css===!1)return l;const{name:h="v",type:g,duration:m,enterFromClass:C=`${h}-enter-from`,enterActiveClass:_=`${h}-enter-active`,enterToClass:v=`${h}-enter-to`,appearFromClass:y=C,appearActiveClass:S=_,appearToClass:P=v,leaveFromClass:N=`${h}-leave-from`,leaveActiveClass:M=`${h}-leave-active`,leaveToClass:F=`${h}-leave-to`}=r,ee=a5(m),se=ee&&ee[0],we=ee&&ee[1],{onBeforeEnter:te,onEnter:Y,onEnterCancelled:ie,onLeave:ke,onLeaveCancelled:U,onBeforeAppear:Pe=te,onAppear:_e=Y,onAppearCancelled:ue=ie}=l,Me=(Q,Xe,Le)=>{dl(Q,Xe?P:v),dl(Q,Xe?S:_),Le&&Le()},Fe=(Q,Xe)=>{Q._isLeaving=!1,dl(Q,N),dl(Q,F),dl(Q,M),Xe&&Xe()},Ge=Q=>(Xe,Le)=>{const Ft=Q?_e:Y,Ye=()=>Me(Xe,Q,Le);_c(Ft,[Xe,Ye]),YC(()=>{dl(Xe,Q?y:C),ta(Xe,Q?P:v),KC(Ft)||QC(Xe,g,se,Ye)})};return to(l,{onBeforeEnter(Q){_c(te,[Q]),ta(Q,C),ta(Q,_)},onBeforeAppear(Q){_c(Pe,[Q]),ta(Q,y),ta(Q,S)},onEnter:Ge(!1),onAppear:Ge(!0),onLeave(Q,Xe){Q._isLeaving=!0;const Le=()=>Fe(Q,Xe);ta(Q,N),Qx(),ta(Q,M),YC(()=>{!Q._isLeaving||(dl(Q,N),ta(Q,F),KC(ke)||QC(Q,g,we,Le))}),_c(ke,[Q,Le])},onEnterCancelled(Q){Me(Q,!1),_c(ie,[Q])},onAppearCancelled(Q){Me(Q,!0),_c(ue,[Q])},onLeaveCancelled(Q){Fe(Q),_c(U,[Q])}})}function a5(r){if(r==null)return null;if(Mn(r))return[hv(r.enter),hv(r.leave)];{const l=hv(r);return[l,l]}}function hv(r){return aa(r)}function ta(r,l){l.split(/\s+/).forEach(h=>h&&r.classList.add(h)),(r._vtc||(r._vtc=new Set)).add(l)}function dl(r,l){l.split(/\s+/).forEach(g=>g&&r.classList.remove(g));const{_vtc:h}=r;h&&(h.delete(l),h.size||(r._vtc=void 0))}function YC(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let l5=0;function QC(r,l,h,g){const m=r._endId=++l5,C=()=>{m===r._endId&&g()};if(h)return setTimeout(C,h);const{type:_,timeout:v,propCount:y}=Yx(r,l);if(!_)return g();const S=_+"end";let P=0;const N=()=>{r.removeEventListener(S,M),C()},M=F=>{F.target===r&&++P>=y&&N()};setTimeout(()=>{P<y&&N()},v+1),r.addEventListener(S,M)}function Yx(r,l){const h=window.getComputedStyle(r),g=ee=>(h[ee]||"").split(", "),m=g(`${sl}Delay`),C=g(`${sl}Duration`),_=ZC(m,C),v=g(`${Yf}Delay`),y=g(`${Yf}Duration`),S=ZC(v,y);let P=null,N=0,M=0;l===sl?_>0&&(P=sl,N=_,M=C.length):l===Yf?S>0&&(P=Yf,N=S,M=y.length):(N=Math.max(_,S),P=N>0?_>S?sl:Yf:null,M=P?P===sl?C.length:y.length:0);const F=P===sl&&/\b(transform|all)(,|$)/.test(g(`${sl}Property`).toString());return{type:P,timeout:N,propCount:M,hasTransform:F}}function ZC(r,l){for(;r.length<l.length;)r=r.concat(r);return Math.max(...l.map((h,g)=>JC(h)+JC(r[g])))}function JC(r){return Number(r.slice(0,-1).replace(",","."))*1e3}function Qx(){return document.body.offsetHeight}const Zx=new WeakMap,Jx=new WeakMap,c5={name:"TransitionGroup",props:to({},s5,{tag:String,moveClass:String}),setup(r,{slots:l}){const h=kl(),g=ly();let m,C;return Xb(()=>{if(!m.length)return;const _=r.moveClass||`${r.name||"v"}-move`;if(!p5(m[0].el,h.vnode.el,_))return;m.forEach(u5),m.forEach(h5);const v=m.filter(f5);Qx(),v.forEach(y=>{const S=y.el,P=S.style;ta(S,_),P.transform=P.webkitTransform=P.transitionDuration="";const N=S._moveCb=M=>{M&&M.target!==S||(!M||/transform$/.test(M.propertyName))&&(S.removeEventListener("transitionend",N),S._moveCb=null,dl(S,_))};S.addEventListener("transitionend",N)})}),()=>{const _=on(r),v=Kx(_);let y=_.tag||rt;m=C,C=l.default?Zb(l.default()):[];for(let S=0;S<C.length;S++){const P=C[S];P.key!=null&&Ic(P,Eu(P,v,g,h))}if(m)for(let S=0;S<m.length;S++){const P=m[S];Ic(P,Eu(P,v,g,h)),Zx.set(P,P.el.getBoundingClientRect())}return ae(y,null,C)}}},d5=c5;function u5(r){const l=r.el;l._moveCb&&l._moveCb(),l._enterCb&&l._enterCb()}function h5(r){Jx.set(r,r.el.getBoundingClientRect())}function f5(r){const l=Zx.get(r),h=Jx.get(r),g=l.left-h.left,m=l.top-h.top;if(g||m){const C=r.el.style;return C.transform=C.webkitTransform=`translate(${g}px,${m}px)`,C.transitionDuration="0s",r}}function p5(r,l,h){const g=r.cloneNode();r._vtc&&r._vtc.forEach(_=>{_.split(/\s+/).forEach(v=>v&&g.classList.remove(v))}),h.split(/\s+/).forEach(_=>_&&g.classList.add(_)),g.style.display="none";const m=l.nodeType===1?l:l.parentNode;m.appendChild(g);const{hasTransform:C}=Yx(g);return m.removeChild(g),C}const _l=r=>{const l=r.props["onUpdate:modelValue"]||!1;return at(l)?h=>vu(l,h):l};function m5(r){r.target.composing=!0}function XC(r){const l=r.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const tt={created(r,{modifiers:{lazy:l,trim:h,number:g}},m){r._assign=_l(m);const C=g||m.props&&m.props.type==="number";oa(r,l?"change":"input",_=>{if(_.target.composing)return;let v=r.value;h&&(v=v.trim()),C&&(v=aa(v)),r._assign(v)}),h&&oa(r,"change",()=>{r.value=r.value.trim()}),l||(oa(r,"compositionstart",m5),oa(r,"compositionend",XC),oa(r,"change",XC))},mounted(r,{value:l}){r.value=l==null?"":l},beforeUpdate(r,{value:l,modifiers:{lazy:h,trim:g,number:m}},C){if(r._assign=_l(C),r.composing||document.activeElement===r&&r.type!=="range"&&(h||g&&r.value.trim()===l||(m||r.type==="number")&&aa(r.value)===l))return;const _=l==null?"":l;r.value!==_&&(r.value=_)}},oo={deep:!0,created(r,l,h){r._assign=_l(h),oa(r,"change",()=>{const g=r._modelValue,m=Tu(r),C=r.checked,_=r._assign;if(at(g)){const v=Fb(g,m),y=v!==-1;if(C&&!y)_(g.concat(m));else if(!C&&y){const S=[...g];S.splice(v,1),_(S)}}else if(Bc(g)){const v=new Set(g);C?v.add(m):v.delete(m),_(v)}else _(Xx(r,C))})},mounted:e1,beforeUpdate(r,l,h){r._assign=_l(h),e1(r,l,h)}};function e1(r,{value:l,oldValue:h},g){r._modelValue=l,at(l)?r.checked=Fb(l,g.props.value)>-1:Bc(l)?r.checked=l.has(g.props.value):l!==h&&(r.checked=ml(l,Xx(r,!0)))}const wy={created(r,{value:l},h){r.checked=ml(l,h.props.value),r._assign=_l(h),oa(r,"change",()=>{r._assign(Tu(r))})},beforeUpdate(r,{value:l,oldValue:h},g){r._assign=_l(g),l!==h&&(r.checked=ml(l,g.props.value))}},bi={deep:!0,created(r,{value:l,modifiers:{number:h}},g){const m=Bc(l);oa(r,"change",()=>{const C=Array.prototype.filter.call(r.options,_=>_.selected).map(_=>h?aa(Tu(_)):Tu(_));r._assign(r.multiple?m?new Set(C):C:C[0])}),r._assign=_l(g)},mounted(r,{value:l}){t1(r,l)},beforeUpdate(r,l,h){r._assign=_l(h)},updated(r,{value:l}){t1(r,l)}};function t1(r,l){const h=r.multiple;if(!(h&&!at(l)&&!Bc(l))){for(let g=0,m=r.options.length;g<m;g++){const C=r.options[g],_=Tu(C);if(h)at(l)?C.selected=Fb(l,_)>-1:C.selected=l.has(_);else if(ml(Tu(C),l)){r.selectedIndex!==g&&(r.selectedIndex=g);return}}!h&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function Tu(r){return"_value"in r?r._value:r.value}function Xx(r,l){const h=l?"_trueValue":"_falseValue";return h in r?r[h]:l}const eE={created(r,l,h){Cb(r,l,h,null,"created")},mounted(r,l,h){Cb(r,l,h,null,"mounted")},beforeUpdate(r,l,h,g){Cb(r,l,h,g,"beforeUpdate")},updated(r,l,h,g){Cb(r,l,h,g,"updated")}};function tE(r,l){switch(r){case"SELECT":return bi;case"TEXTAREA":return tt;default:switch(l){case"checkbox":return oo;case"radio":return wy;default:return tt}}}function Cb(r,l,h,g,m){const _=tE(r.tagName,h.props&&h.props.type)[m];_&&_(r,l,h,g)}function g5(){tt.getSSRProps=({value:r})=>({value:r}),wy.getSSRProps=({value:r},l)=>{if(l.props&&ml(l.props.value,r))return{checked:!0}},oo.getSSRProps=({value:r},l)=>{if(at(r)){if(l.props&&Fb(r,l.props.value)>-1)return{checked:!0}}else if(Bc(r)){if(l.props&&r.has(l.props.value))return{checked:!0}}else if(r)return{checked:!0}},eE.getSSRProps=(r,l)=>{if(typeof l.type!="string")return;const h=tE(l.type.toUpperCase(),l.props&&l.props.type);if(h.getSSRProps)return h.getSSRProps(r,l)}}const b5=["ctrl","shift","alt","meta"],w5={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,l)=>b5.some(h=>r[`${h}Key`]&&!l.includes(h))},Bu=(r,l)=>(h,...g)=>{for(let m=0;m<l.length;m++){const C=w5[l[m]];if(C&&C(h,l))return}return r(h,...g)},_5={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},k5=(r,l)=>h=>{if(!("key"in h))return;const g=ir(h.key);if(l.some(m=>m===g||_5[m]===g))return r(h)},nE={beforeMount(r,{value:l},{transition:h}){r._vod=r.style.display==="none"?"":r.style.display,h&&l?h.beforeEnter(r):Qf(r,l)},mounted(r,{value:l},{transition:h}){h&&l&&h.enter(r)},updated(r,{value:l,oldValue:h},{transition:g}){!l!=!h&&(g?l?(g.beforeEnter(r),Qf(r,!0),g.enter(r)):g.leave(r,()=>{Qf(r,!1)}):Qf(r,l))},beforeUnmount(r,{value:l}){Qf(r,l)}};function Qf(r,l){r.style.display=l?r._vod:"none"}function v5(){nE.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const oE=to({patchProp:e5},$M);let lp,n1=!1;function iE(){return lp||(lp=Dx(oE))}function rE(){return lp=n1?lp:Tx(oE),n1=!0,lp}const Lv=(...r)=>{iE().render(...r)},sE=(...r)=>{rE().hydrate(...r)},aE=(...r)=>{const l=iE().createApp(...r),{mount:h}=l;return l.mount=g=>{const m=lE(g);if(!m)return;const C=l._component;!It(C)&&!C.render&&!C.template&&(C.template=m.innerHTML),m.innerHTML="";const _=h(m,!1,m instanceof SVGElement);return m instanceof Element&&(m.removeAttribute("v-cloak"),m.setAttribute("data-v-app","")),_},l},y5=(...r)=>{const l=rE().createApp(...r),{mount:h}=l;return l.mount=g=>{const m=lE(g);if(m)return h(m,!0,m instanceof SVGElement)},l};function lE(r){return Zn(r)?document.querySelector(r):r}let o1=!1;const A5=()=>{o1||(o1=!0,g5(),v5())},C5=()=>{},x5=Object.freeze(Object.defineProperty({__proto__:null,compile:C5,EffectScope:Yv,ReactiveEffect:xp,customRef:bI,effect:FS,effectScope:OS,getCurrentScope:LS,isProxy:Xv,isReactive:xc,isReadonly:Sc,isRef:Mo,isShallow:hp,markRaw:ey,onScopeDispose:RS,proxyRefs:oy,reactive:Nu,readonly:Jv,ref:op,shallowReactive:G1,shallowReadonly:hI,shallowRef:K1,stop:$S,toRaw:on,toRef:Q1,toRefs:wI,triggerRef:pI,unref:Ec,camelize:wi,capitalize:Cp,normalizeClass:Pi,normalizeProps:CS,normalizeStyle:vp,toDisplayString:be,toHandlerKey:np,BaseTransition:cy,Comment:ei,Fragment:rt,KeepAlive:qI,Static:Tc,Suspense:BI,Teleport:mM,Text:Mc,callWithAsyncErrorHandling:Mi,callWithErrorHandling:ia,cloneVNode:bs,compatUtils:jM,computed:Ii,createBlock:gs,createCommentVNode:wu,createElementBlock:he,createElementVNode:d,createHydrationRenderer:Tx,createPropsRestProxy:PM,createRenderer:Dx,createSlots:YI,createStaticVNode:ko,createTextVNode:j,createVNode:ae,defineAsyncComponent:UI,defineComponent:Dp,defineEmits:EM,defineExpose:DM,defineProps:xM,get devtools(){return gu},getCurrentInstance:kl,getTransitionRawChildren:Zb,guardReactiveProps:Bx,h:iw,handleError:Oc,initCustomFormatter:BM,inject:ms,isMemoSame:Hx,isRuntimeOnly:yM,isVNode:bl,mergeDefaults:MM,mergeProps:Ox,nextTick:Gb,onActivated:lx,onBeforeMount:ux,onBeforeUnmount:ew,onBeforeUpdate:hx,onDeactivated:cx,onErrorCaptured:gx,onMounted:Sp,onRenderTracked:mx,onRenderTriggered:px,onServerPrefetch:fx,onUnmounted:tw,onUpdated:Xb,openBlock:le,popScopeId:Ut,provide:ip,pushScopeId:Vt,queuePostFlushCb:ry,registerRuntimeCompiler:vM,renderList:Mt,renderSlot:hy,resolveComponent:nt,resolveDirective:KI,resolveDynamicComponent:wx,resolveFilter:zM,resolveTransitionHooks:Eu,setBlockTracking:Sv,setDevtoolsHook:tx,setTransitionHooks:Ic,ssrContextKey:Vx,ssrUtils:RM,toHandlers:QI,transformVNodeArgs:gM,useAttrs:IM,useSSRContext:Ux,useSlots:SM,useTransitionState:ly,version:qx,warn:yI,watch:Cu,watchEffect:jI,watchPostEffect:rx,watchSyncEffect:FI,withAsyncContext:NM,withCtx:je,withDefaults:TM,withDirectives:Oe,withMemo:OM,withScopeId:TI,Transition:by,TransitionGroup:d5,VueElement:rw,createApp:aE,createSSRApp:y5,defineCustomElement:Wx,defineSSRCustomElement:n5,hydrate:sE,initDirectivesForSSR:A5,render:Lv,useCssModule:i5,useCssVars:r5,vModelCheckbox:oo,vModelDynamic:eE,vModelRadio:wy,vModelSelect:bi,vModelText:tt,vShow:nE,withKeys:k5,withModifiers:Bu},Symbol.toStringTag,{value:"Module"})),E5="/build/assets/logo.ca67b92a.svg";const pt=(r,l)=>{const h=r.__vccOpts||r;for(const[g,m]of l)h[g]=m;return h},D5={},Ip=r=>(Vt("data-v-22ed43c9"),r=r(),Ut(),r),T5={class:"navbar fixed-top navbar-expand-lg navbar-light bg-light",id:"nav"},S5={class:"container-fluid"},I5=Ip(()=>d("a",{class:"navbar-brand",href:"#"},[d("img",{src:E5,alt:"",width:"80",height:"50",style:{"margin-top":"-15px"}})],-1)),M5=Ip(()=>d("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[d("span",{class:"navbar-toggler-icon"})],-1)),P5={class:"collapse navbar-collapse",id:"navbarSupportedContent"},N5={class:"navbar-nav me-auto mb-2 mb-lg-0"},B5={class:"nav-item"},O5=Ip(()=>d("li",{class:"nav-item"},[d("a",{class:"nav-link",href:"#about"},"About Us")],-1)),L5={class:"nav-item dropdown"},R5=Ip(()=>d("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Journals ",-1)),z5={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},j5={class:"nav-item"},F5={class:"nav-item"},$5={class:"navbar-nav w-50 mb-2 mb-lg-0"},V5=Ip(()=>d("li",{class:"nav-item w-100"},[d("input",{class:"form-control",type:"search",placeholder:"Search","aria-label":"Search"})],-1)),U5={class:"nav-item"},H5={class:"nav-item"};function q5(r,l,h,g,m,C){const _=nt("router-link");return le(),he("nav",T5,[d("div",S5,[I5,M5,d("div",P5,[d("ul",N5,[d("li",B5,[ae(_,{to:{name:"Home"},class:"nav-link active","aria-current":"page"},{default:je(()=>[j("Home ")]),_:1})]),O5,d("li",L5,[R5,d("ul",z5,[d("li",null,[ae(_,{to:{name:"Journal Details",params:{id:1}},class:"dropdown-item"},{default:je(()=>[j("Sustainability Studies")]),_:1})]),d("li",null,[ae(_,{to:{name:"Journal Details",params:{id:2}},class:"dropdown-item"},{default:je(()=>[j("Business Studies")]),_:1})]),d("li",null,[ae(_,{to:{name:"Journal Details",params:{id:3}},class:"dropdown-item"},{default:je(()=>[j("Bibliomatric and Systematic Reviews")]),_:1})]),d("li",null,[ae(_,{to:{name:"Journal Details",params:{id:4}},class:"dropdown-item"},{default:je(()=>[j("Marketing Studies")]),_:1})]),d("li",null,[ae(_,{to:{name:"Journal Details",params:{id:5}},class:"dropdown-item"},{default:je(()=>[j("Finance Studies")]),_:1})]),d("li",null,[ae(_,{to:{name:"Journal Details",params:{id:6}},class:"dropdown-item"},{default:je(()=>[j("Tourism Studies")]),_:1})])])]),d("li",j5,[ae(_,{to:{name:"Publishing Policies"},class:"nav-link"},{default:je(()=>[j("Publishing Policies ")]),_:1})]),d("li",F5,[ae(_,{to:{name:"Editorial Policies"},class:"nav-link"},{default:je(()=>[j("Editorial Policies ")]),_:1})])]),d("ul",$5,[V5,d("li",U5,[ae(_,{to:{name:"Login"},class:"nav-link"},{default:je(()=>[j("Login")]),_:1})]),d("li",H5,[ae(_,{to:{name:"Sign Up"},class:"nav-link"},{default:je(()=>[j("Signup")]),_:1})])])])])])}const W5=pt(D5,[["render",q5],["__scopeId","data-v-22ed43c9"]]);const G5={},K5={class:"container-fluid footer"},Y5=ko('<span data-v-3a5d0073>\xA92022 Aperier Publishing. All Rights Reserved.</span><div class="d-flex gap-3" data-v-3a5d0073><a href="https://www.linkedin.com/company/aperier/" target="_blank" data-v-3a5d0073><i class="fa-brands fa-linkedin fa-xl" data-v-3a5d0073></i></a><a href="https://www.facebook.com/profile.php?id=100087286333883" target="_blank" data-v-3a5d0073><i class="fa-brands fa-facebook fa-xl" data-v-3a5d0073></i></a><a href="https://twitter.com/aperierpublish" target="_blank" data-v-3a5d0073><i class="fa-brands fa-twitter fa-xl" data-v-3a5d0073></i></a></div>',2);function Q5(r,l,h,g,m,C){const _=nt("router-link");return le(),he("div",K5,[Y5,d("span",null,[ae(_,{to:{name:"Policy and Condition"},style:{"text-decoration":"none",color:"white"}},{default:je(()=>[j("Terms & Conditions | Privacy policy ")]),_:1}),j(" | FQA ")])])}const Z5=pt(G5,[["render",Q5],["__scopeId","data-v-3a5d0073"]]);const J5={components:{HeaderComponent:W5,FooterComponent:Z5}};function X5(r,l,h,g,m,C){const _=nt("HeaderComponent"),v=nt("router-view"),y=nt("FooterComponent");return le(),he(rt,null,[ae(_),(le(),gs(v,{key:r.$route.path})),ae(y)],64)}const eP=pt(J5,[["render",X5]]),_y="/build/assets/bird.efc9b1b5.png";const tP={methods:{logout(){localStorage.removeItem("userEmail"),localStorage.removeItem("isAdmin"),this.$router.push({name:"Home"})}}},da=r=>(Vt("data-v-35526d65"),r=r(),Ut(),r),nP={class:"main-sidebar sidebar-dark-primary elevation-4"},oP=da(()=>d("span",{class:"brand-link"},[d("img",{src:_y,alt:"AdminLTE Logo",class:"brand-image bg-success px-2 py-1 img-circle elevation-3",style:{opacity:"0.8"}}),d("span",{class:"brand-text font-weight-light"},"Aperier")],-1)),iP={class:"sidebar"},rP={class:"mt-2"},sP={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",id:"nav_ul"},aP={class:"nav-item"},lP=da(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),cP=da(()=>d("p",null,"Author Dashboard",-1)),dP={class:"nav-item"},uP=da(()=>d("i",{class:"nav-icon fas fa-users mr-2"},null,-1)),hP=da(()=>d("p",null,"Update Profile",-1)),fP={class:"nav-item"},pP=da(()=>d("i",{class:"nav-icon fas fa-plus mr-2"},null,-1)),mP=da(()=>d("p",null,"Instruction to Authors",-1)),gP=da(()=>d("i",{class:"nav-icon fa-solid fa-right-from-bracket"},null,-1)),bP=da(()=>d("p",null,"Logout",-1)),wP=[gP,bP];function _P(r,l,h,g,m,C){const _=nt("router-link");return le(),he("aside",nP,[oP,d("div",iP,[d("nav",rP,[d("ul",sP,[d("li",aP,[ae(_,{to:{name:"Author Dashboard"},class:"nav-link"},{default:je(()=>[lP,cP]),_:1})]),d("li",dP,[ae(_,{to:{name:"Author Update Profile"},class:"nav-link"},{default:je(()=>[uP,hP]),_:1})]),d("li",fP,[ae(_,{to:{name:"Author Instruction"},class:"nav-link"},{default:je(()=>[pP,mP]),_:1})]),d("li",{class:"nav-item",onClick:l[1]||(l[1]=v=>C.logout())},[d("a",{onClick:l[0]||(l[0]=v=>C.logout()),class:"nav-link"},wP)])])])])])}const kP=pt(tP,[["render",_P],["__scopeId","data-v-35526d65"]]),vP={},yP={class:"main-header navbar navbar-expand navbar-white navbar-light"},AP=d("ul",{class:"navbar-nav d-flex align-items-center",style:{gap:"20px"}},[d("li",{class:"nav-item"},[d("span",{class:"nav-link","data-widget":"pushmenu",role:"button"},[d("i",{class:"fas fa-bars"})])]),d("li",{class:"nav-item"},[d("span",{class:"text-lg font-weight-bold"},be("Shihab Jamil"))])],-1),CP=[AP];function xP(r,l,h,g,m,C){return le(),he("nav",yP,CP)}const EP=pt(vP,[["render",xP]]);const DP={},cE=r=>(Vt("data-v-fe4f30d9"),r=r(),Ut(),r),TP={class:"main-footer"},SP={class:"footer"},IP=cE(()=>d("span",null,"\xA92022 Aperier Publishing. All Rights Reserved.",-1)),MP=cE(()=>d("div",{class:"d-flex gap-3"},[d("i",{class:"fa-brands fa-linkedin fa-xl"}),d("i",{class:"fa-brands fa-facebook fa-xl"}),d("i",{class:"fa-brands fa-twitter fa-xl"})],-1));function PP(r,l,h,g,m,C){const _=nt("router-link");return le(),he("footer",TP,[d("div",SP,[IP,MP,d("span",null,[ae(_,{to:{name:"Policy and Condition"},style:{"text-decoration":"none",color:"white"}},{default:je(()=>[j("Terms & Conditions | Privacy policy ")]),_:1}),j(" | FQA ")])])])}const NP=pt(DP,[["render",PP],["__scopeId","data-v-fe4f30d9"]]),BP={components:{Sidebar:kP,Navbar:EP,Footer:NP}};function OP(r,l,h,g,m,C){const _=nt("Navbar"),v=nt("Sidebar"),y=nt("router-view"),S=nt("Footer");return le(),he(rt,null,[ae(_),ae(v),(le(),gs(y,{key:r.$route.path})),ae(S)],64)}const LP=pt(BP,[["render",OP]]);const RP={methods:{logout(){localStorage.removeItem("userEmail"),localStorage.removeItem("isAdmin"),this.$router.push({name:"Home"})}}},Bi=r=>(Vt("data-v-6c62c9ad"),r=r(),Ut(),r),zP={class:"main-sidebar sidebar-dark-primary elevation-4"},jP=Bi(()=>d("span",{class:"brand-link"},[d("img",{src:_y,alt:"AdminLTE Logo",class:"brand-image bg-success px-2 py-1 img-circle elevation-3",style:{opacity:"0.8"}}),d("span",{class:"brand-text font-weight-light"},"Aperier")],-1)),FP={class:"sidebar"},$P={class:"mt-2"},VP={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",id:"nav_ul"},UP={class:"nav-item"},HP=Bi(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),qP=Bi(()=>d("p",null,"Dashboard",-1)),WP={class:"nav-item"},GP=Bi(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),KP=Bi(()=>d("p",null,"Ongoing Studies",-1)),YP={class:"nav-item"},QP=Bi(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),ZP=Bi(()=>d("p",null,"Published Studies",-1)),JP={class:"nav-item"},XP=Bi(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),eN=Bi(()=>d("p",null,"Archived Studies",-1)),tN={class:"nav-item"},nN=Bi(()=>d("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),oN=Bi(()=>d("p",null,"News",-1)),iN=Bi(()=>d("i",{class:"nav-icon fa-solid fa-right-from-bracket"},null,-1)),rN=Bi(()=>d("p",null,"Logout",-1)),sN=[iN,rN];function aN(r,l,h,g,m,C){const _=nt("router-link");return le(),he("aside",zP,[jP,d("div",FP,[d("nav",$P,[d("ul",VP,[d("li",UP,[ae(_,{to:{name:"Admin Dashboard"},class:"nav-link"},{default:je(()=>[HP,qP]),_:1})]),d("li",WP,[ae(_,{to:{name:"Admin Ongoing Studies"},class:"nav-link"},{default:je(()=>[GP,KP]),_:1})]),d("li",YP,[ae(_,{to:{name:"Admin Published Studies"},class:"nav-link"},{default:je(()=>[QP,ZP]),_:1})]),d("li",JP,[ae(_,{to:{name:"Admin Archived Studies"},class:"nav-link"},{default:je(()=>[XP,eN]),_:1})]),d("li",tN,[ae(_,{to:{name:"Admin News"},class:"nav-link"},{default:je(()=>[nN,oN]),_:1})]),d("li",{class:"nav-item",onClick:l[1]||(l[1]=v=>C.logout())},[d("a",{onClick:l[0]||(l[0]=v=>C.logout()),class:"nav-link"},sN)])])])])])}const lN=pt(RP,[["render",aN],["__scopeId","data-v-6c62c9ad"]]),cN={},dN={class:"main-header navbar navbar-expand navbar-white navbar-light"},uN=d("ul",{class:"navbar-nav d-flex align-items-center",style:{gap:"20px"}},[d("li",{class:"nav-item"},[d("span",{class:"nav-link","data-widget":"pushmenu",role:"button"},[d("i",{class:"fas fa-bars"})])]),d("li",{class:"nav-item"},[d("span",{class:"text-lg font-weight-bold"},be("Shihab Jamil"))])],-1),hN=[uN];function fN(r,l,h,g,m,C){return le(),he("nav",dN,hN)}const pN=pt(cN,[["render",fN]]);const mN={},dE=r=>(Vt("data-v-fc38e8c7"),r=r(),Ut(),r),gN={class:"main-footer"},bN={class:"footer"},wN=dE(()=>d("span",null,"\xA92022 Aperier Publishing. All Rights Reserved.",-1)),_N=dE(()=>d("div",{class:"d-flex gap-3"},[d("i",{class:"fa-brands fa-linkedin fa-xl"}),d("i",{class:"fa-brands fa-facebook fa-xl"}),d("i",{class:"fa-brands fa-twitter fa-xl"})],-1));function kN(r,l,h,g,m,C){const _=nt("router-link");return le(),he("footer",gN,[d("div",bN,[wN,_N,d("span",null,[ae(_,{to:{name:"Policy and Condition"},style:{"text-decoration":"none",color:"white"}},{default:je(()=>[j("Terms & Conditions | Privacy policy ")]),_:1}),j(" | FQA ")])])])}const vN=pt(mN,[["render",kN],["__scopeId","data-v-fc38e8c7"]]),yN={components:{Sidebar:lN,Navbar:pN,Footer:vN}};function AN(r,l,h,g,m,C){const _=nt("Navbar"),v=nt("Sidebar"),y=nt("router-view"),S=nt("Footer");return le(),he(rt,null,[ae(_),ae(v),(le(),gs(y,{key:r.$route.path})),ae(S)],64)}const CN=pt(yN,[["render",AN]]);const xN={components:{PublisherLayout:eP,AuthorLayout:LP,AdminLayout:CN},data(){return{layout:"PublisherLayout"}},methods:{layoutGenerator(){return localStorage.getItem("userEmail")?((this.$router.currentRoute.value.name==="Home"||this.$router.currentRoute.value.name==="Login"||this.$router.currentRoute.value.name==="Sign Up")&&(localStorage.getItem("isAdmin")==="true"?this.$router.push({name:"Admin Dashboard"}):this.$router.push({name:"Author Dashboard"})),localStorage.getItem("isAdmin")==="true"?this.layout="AdminLayout":this.layout="AuthorLayout"):this.layout="PublisherLayout",this.layout}},mounted(){this.layoutGenerator()},watch:{$route(r,l){this.layoutGenerator()}}};function EN(r,l,h,g,m,C){return le(),gs(wx(m.layout))}const DN=pt(xN,[["render",EN]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bu=typeof window<"u";function TN(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const Cn=Object.assign;function fv(r,l){const h={};for(const g in l){const m=l[g];h[g]=Br(m)?m.map(r):r(m)}return h}const cp=()=>{},Br=Array.isArray,SN=/\/$/,IN=r=>r.replace(SN,"");function pv(r,l,h="/"){let g,m={},C="",_="";const v=l.indexOf("#");let y=l.indexOf("?");return v<y&&v>=0&&(y=-1),y>-1&&(g=l.slice(0,y),C=l.slice(y+1,v>-1?v:l.length),m=r(C)),v>-1&&(g=g||l.slice(0,v),_=l.slice(v,l.length)),g=BN(g!=null?g:l,h),{fullPath:g+(C&&"?")+C+_,path:g,query:m,hash:_}}function MN(r,l){const h=l.query?r(l.query):"";return l.path+(h&&"?")+h+(l.hash||"")}function i1(r,l){return!l||!r.toLowerCase().startsWith(l.toLowerCase())?r:r.slice(l.length)||"/"}function PN(r,l,h){const g=l.matched.length-1,m=h.matched.length-1;return g>-1&&g===m&&Su(l.matched[g],h.matched[m])&&uE(l.params,h.params)&&r(l.query)===r(h.query)&&l.hash===h.hash}function Su(r,l){return(r.aliasOf||r)===(l.aliasOf||l)}function uE(r,l){if(Object.keys(r).length!==Object.keys(l).length)return!1;for(const h in r)if(!NN(r[h],l[h]))return!1;return!0}function NN(r,l){return Br(r)?r1(r,l):Br(l)?r1(l,r):r===l}function r1(r,l){return Br(l)?r.length===l.length&&r.every((h,g)=>h===l[g]):r.length===1&&r[0]===l}function BN(r,l){if(r.startsWith("/"))return r;if(!r)return l;const h=l.split("/"),g=r.split("/");let m=h.length-1,C,_;for(C=0;C<g.length;C++)if(_=g[C],_!==".")if(_==="..")m>1&&m--;else break;return h.slice(0,m).join("/")+"/"+g.slice(C-(C===g.length?1:0)).join("/")}var wp;(function(r){r.pop="pop",r.push="push"})(wp||(wp={}));var dp;(function(r){r.back="back",r.forward="forward",r.unknown=""})(dp||(dp={}));function ON(r){if(!r)if(bu){const l=document.querySelector("base");r=l&&l.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),IN(r)}const LN=/^[^#]+#/;function RN(r,l){return r.replace(LN,"#")+l}function zN(r,l){const h=document.documentElement.getBoundingClientRect(),g=r.getBoundingClientRect();return{behavior:l.behavior,left:g.left-h.left-(l.left||0),top:g.top-h.top-(l.top||0)}}const sw=()=>({left:window.pageXOffset,top:window.pageYOffset});function jN(r){let l;if("el"in r){const h=r.el,g=typeof h=="string"&&h.startsWith("#"),m=typeof h=="string"?g?document.getElementById(h.slice(1)):document.querySelector(h):h;if(!m)return;l=zN(m,r)}else l=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function s1(r,l){return(history.state?history.state.position-l:-1)+r}const Rv=new Map;function FN(r,l){Rv.set(r,l)}function $N(r){const l=Rv.get(r);return Rv.delete(r),l}let VN=()=>location.protocol+"//"+location.host;function hE(r,l){const{pathname:h,search:g,hash:m}=l,C=r.indexOf("#");if(C>-1){let v=m.includes(r.slice(C))?r.slice(C).length:1,y=m.slice(v);return y[0]!=="/"&&(y="/"+y),i1(y,"")}return i1(h,r)+g+m}function UN(r,l,h,g){let m=[],C=[],_=null;const v=({state:M})=>{const F=hE(r,location),ee=h.value,se=l.value;let we=0;if(M){if(h.value=F,l.value=M,_&&_===ee){_=null;return}we=se?M.position-se.position:0}else g(F);m.forEach(te=>{te(h.value,ee,{delta:we,type:wp.pop,direction:we?we>0?dp.forward:dp.back:dp.unknown})})};function y(){_=h.value}function S(M){m.push(M);const F=()=>{const ee=m.indexOf(M);ee>-1&&m.splice(ee,1)};return C.push(F),F}function P(){const{history:M}=window;!M.state||M.replaceState(Cn({},M.state,{scroll:sw()}),"")}function N(){for(const M of C)M();C=[],window.removeEventListener("popstate",v),window.removeEventListener("beforeunload",P)}return window.addEventListener("popstate",v),window.addEventListener("beforeunload",P),{pauseListeners:y,listen:S,destroy:N}}function a1(r,l,h,g=!1,m=!1){return{back:r,current:l,forward:h,replaced:g,position:window.history.length,scroll:m?sw():null}}function HN(r){const{history:l,location:h}=window,g={value:hE(r,h)},m={value:l.state};m.value||C(g.value,{back:null,current:g.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function C(y,S,P){const N=r.indexOf("#"),M=N>-1?(h.host&&document.querySelector("base")?r:r.slice(N))+y:VN()+r+y;try{l[P?"replaceState":"pushState"](S,"",M),m.value=S}catch(F){console.error(F),h[P?"replace":"assign"](M)}}function _(y,S){const P=Cn({},l.state,a1(m.value.back,y,m.value.forward,!0),S,{position:m.value.position});C(y,P,!0),g.value=y}function v(y,S){const P=Cn({},m.value,l.state,{forward:y,scroll:sw()});C(P.current,P,!0);const N=Cn({},a1(g.value,y,null),{position:P.position+1},S);C(y,N,!1),g.value=y}return{location:g,state:m,push:v,replace:_}}function qN(r){r=ON(r);const l=HN(r),h=UN(r,l.state,l.location,l.replace);function g(C,_=!0){_||h.pauseListeners(),history.go(C)}const m=Cn({location:"",base:r,go:g,createHref:RN.bind(null,r)},l,h);return Object.defineProperty(m,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(m,"state",{enumerable:!0,get:()=>l.state.value}),m}function WN(r){return typeof r=="string"||r&&typeof r=="object"}function fE(r){return typeof r=="string"||typeof r=="symbol"}const al={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pE=Symbol("");var l1;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(l1||(l1={}));function Iu(r,l){return Cn(new Error,{type:r,[pE]:!0},l)}function ea(r,l){return r instanceof Error&&pE in r&&(l==null||!!(r.type&l))}const c1="[^/]+?",GN={sensitive:!1,strict:!1,start:!0,end:!0},KN=/[.+*?^${}()[\]/\\]/g;function YN(r,l){const h=Cn({},GN,l),g=[];let m=h.start?"^":"";const C=[];for(const S of r){const P=S.length?[]:[90];h.strict&&!S.length&&(m+="/");for(let N=0;N<S.length;N++){const M=S[N];let F=40+(h.sensitive?.25:0);if(M.type===0)N||(m+="/"),m+=M.value.replace(KN,"\\$&"),F+=40;else if(M.type===1){const{value:ee,repeatable:se,optional:we,regexp:te}=M;C.push({name:ee,repeatable:se,optional:we});const Y=te||c1;if(Y!==c1){F+=10;try{new RegExp(`(${Y})`)}catch(ke){throw new Error(`Invalid custom RegExp for param "${ee}" (${Y}): `+ke.message)}}let ie=se?`((?:${Y})(?:/(?:${Y}))*)`:`(${Y})`;N||(ie=we&&S.length<2?`(?:/${ie})`:"/"+ie),we&&(ie+="?"),m+=ie,F+=20,we&&(F+=-8),se&&(F+=-20),Y===".*"&&(F+=-50)}P.push(F)}g.push(P)}if(h.strict&&h.end){const S=g.length-1;g[S][g[S].length-1]+=.7000000000000001}h.strict||(m+="/?"),h.end?m+="$":h.strict&&(m+="(?:/|$)");const _=new RegExp(m,h.sensitive?"":"i");function v(S){const P=S.match(_),N={};if(!P)return null;for(let M=1;M<P.length;M++){const F=P[M]||"",ee=C[M-1];N[ee.name]=F&&ee.repeatable?F.split("/"):F}return N}function y(S){let P="",N=!1;for(const M of r){(!N||!P.endsWith("/"))&&(P+="/"),N=!1;for(const F of M)if(F.type===0)P+=F.value;else if(F.type===1){const{value:ee,repeatable:se,optional:we}=F,te=ee in S?S[ee]:"";if(Br(te)&&!se)throw new Error(`Provided param "${ee}" is an array but it is not repeatable (* or + modifiers)`);const Y=Br(te)?te.join("/"):te;if(!Y)if(we)M.length<2&&(P.endsWith("/")?P=P.slice(0,-1):N=!0);else throw new Error(`Missing required param "${ee}"`);P+=Y}}return P||"/"}return{re:_,score:g,keys:C,parse:v,stringify:y}}function QN(r,l){let h=0;for(;h<r.length&&h<l.length;){const g=l[h]-r[h];if(g)return g;h++}return r.length<l.length?r.length===1&&r[0]===40+40?-1:1:r.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function ZN(r,l){let h=0;const g=r.score,m=l.score;for(;h<g.length&&h<m.length;){const C=QN(g[h],m[h]);if(C)return C;h++}if(Math.abs(m.length-g.length)===1){if(d1(g))return 1;if(d1(m))return-1}return m.length-g.length}function d1(r){const l=r[r.length-1];return r.length>0&&l[l.length-1]<0}const JN={type:0,value:""},XN=/[a-zA-Z0-9_]/;function eB(r){if(!r)return[[]];if(r==="/")return[[JN]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function l(F){throw new Error(`ERR (${h})/"${S}": ${F}`)}let h=0,g=h;const m=[];let C;function _(){C&&m.push(C),C=[]}let v=0,y,S="",P="";function N(){!S||(h===0?C.push({type:0,value:S}):h===1||h===2||h===3?(C.length>1&&(y==="*"||y==="+")&&l(`A repeatable param (${S}) must be alone in its segment. eg: '/:ids+.`),C.push({type:1,value:S,regexp:P,repeatable:y==="*"||y==="+",optional:y==="*"||y==="?"})):l("Invalid state to consume buffer"),S="")}function M(){S+=y}for(;v<r.length;){if(y=r[v++],y==="\\"&&h!==2){g=h,h=4;continue}switch(h){case 0:y==="/"?(S&&N(),_()):y===":"?(N(),h=1):M();break;case 4:M(),h=g;break;case 1:y==="("?h=2:XN.test(y)?M():(N(),h=0,y!=="*"&&y!=="?"&&y!=="+"&&v--);break;case 2:y===")"?P[P.length-1]=="\\"?P=P.slice(0,-1)+y:h=3:P+=y;break;case 3:N(),h=0,y!=="*"&&y!=="?"&&y!=="+"&&v--,P="";break;default:l("Unknown state");break}}return h===2&&l(`Unfinished custom RegExp for param "${S}"`),N(),_(),m}function tB(r,l,h){const g=YN(eB(r.path),h),m=Cn(g,{record:r,parent:l,children:[],alias:[]});return l&&!m.record.aliasOf==!l.record.aliasOf&&l.children.push(m),m}function nB(r,l){const h=[],g=new Map;l=f1({strict:!1,end:!0,sensitive:!1},l);function m(P){return g.get(P)}function C(P,N,M){const F=!M,ee=oB(P);ee.aliasOf=M&&M.record;const se=f1(l,P),we=[ee];if("alias"in P){const ie=typeof P.alias=="string"?[P.alias]:P.alias;for(const ke of ie)we.push(Cn({},ee,{components:M?M.record.components:ee.components,path:ke,aliasOf:M?M.record:ee}))}let te,Y;for(const ie of we){const{path:ke}=ie;if(N&&ke[0]!=="/"){const U=N.record.path,Pe=U[U.length-1]==="/"?"":"/";ie.path=N.record.path+(ke&&Pe+ke)}if(te=tB(ie,N,se),M?M.alias.push(te):(Y=Y||te,Y!==te&&Y.alias.push(te),F&&P.name&&!h1(te)&&_(P.name)),ee.children){const U=ee.children;for(let Pe=0;Pe<U.length;Pe++)C(U[Pe],te,M&&M.children[Pe])}M=M||te,(te.record.components&&Object.keys(te.record.components).length||te.record.name||te.record.redirect)&&y(te)}return Y?()=>{_(Y)}:cp}function _(P){if(fE(P)){const N=g.get(P);N&&(g.delete(P),h.splice(h.indexOf(N),1),N.children.forEach(_),N.alias.forEach(_))}else{const N=h.indexOf(P);N>-1&&(h.splice(N,1),P.record.name&&g.delete(P.record.name),P.children.forEach(_),P.alias.forEach(_))}}function v(){return h}function y(P){let N=0;for(;N<h.length&&ZN(P,h[N])>=0&&(P.record.path!==h[N].record.path||!mE(P,h[N]));)N++;h.splice(N,0,P),P.record.name&&!h1(P)&&g.set(P.record.name,P)}function S(P,N){let M,F={},ee,se;if("name"in P&&P.name){if(M=g.get(P.name),!M)throw Iu(1,{location:P});se=M.record.name,F=Cn(u1(N.params,M.keys.filter(Y=>!Y.optional).map(Y=>Y.name)),P.params&&u1(P.params,M.keys.map(Y=>Y.name))),ee=M.stringify(F)}else if("path"in P)ee=P.path,M=h.find(Y=>Y.re.test(ee)),M&&(F=M.parse(ee),se=M.record.name);else{if(M=N.name?g.get(N.name):h.find(Y=>Y.re.test(N.path)),!M)throw Iu(1,{location:P,currentLocation:N});se=M.record.name,F=Cn({},N.params,P.params),ee=M.stringify(F)}const we=[];let te=M;for(;te;)we.unshift(te.record),te=te.parent;return{name:se,path:ee,params:F,matched:we,meta:rB(we)}}return r.forEach(P=>C(P)),{addRoute:C,resolve:S,removeRoute:_,getRoutes:v,getRecordMatcher:m}}function u1(r,l){const h={};for(const g of l)g in r&&(h[g]=r[g]);return h}function oB(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:iB(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function iB(r){const l={},h=r.props||!1;if("component"in r)l.default=h;else for(const g in r.components)l[g]=typeof h=="boolean"?h:h[g];return l}function h1(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function rB(r){return r.reduce((l,h)=>Cn(l,h.meta),{})}function f1(r,l){const h={};for(const g in r)h[g]=g in l?l[g]:r[g];return h}function mE(r,l){return l.children.some(h=>h===r||mE(r,h))}const gE=/#/g,sB=/&/g,aB=/\//g,lB=/=/g,cB=/\?/g,bE=/\+/g,dB=/%5B/g,uB=/%5D/g,wE=/%5E/g,hB=/%60/g,_E=/%7B/g,fB=/%7C/g,kE=/%7D/g,pB=/%20/g;function ky(r){return encodeURI(""+r).replace(fB,"|").replace(dB,"[").replace(uB,"]")}function mB(r){return ky(r).replace(_E,"{").replace(kE,"}").replace(wE,"^")}function zv(r){return ky(r).replace(bE,"%2B").replace(pB,"+").replace(gE,"%23").replace(sB,"%26").replace(hB,"`").replace(_E,"{").replace(kE,"}").replace(wE,"^")}function gB(r){return zv(r).replace(lB,"%3D")}function bB(r){return ky(r).replace(gE,"%23").replace(cB,"%3F")}function wB(r){return r==null?"":bB(r).replace(aB,"%2F")}function Rb(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function _B(r){const l={};if(r===""||r==="?")return l;const g=(r[0]==="?"?r.slice(1):r).split("&");for(let m=0;m<g.length;++m){const C=g[m].replace(bE," "),_=C.indexOf("="),v=Rb(_<0?C:C.slice(0,_)),y=_<0?null:Rb(C.slice(_+1));if(v in l){let S=l[v];Br(S)||(S=l[v]=[S]),S.push(y)}else l[v]=y}return l}function p1(r){let l="";for(let h in r){const g=r[h];if(h=gB(h),g==null){g!==void 0&&(l+=(l.length?"&":"")+h);continue}(Br(g)?g.map(C=>C&&zv(C)):[g&&zv(g)]).forEach(C=>{C!==void 0&&(l+=(l.length?"&":"")+h,C!=null&&(l+="="+C))})}return l}function kB(r){const l={};for(const h in r){const g=r[h];g!==void 0&&(l[h]=Br(g)?g.map(m=>m==null?null:""+m):g==null?g:""+g)}return l}const vB=Symbol(""),m1=Symbol(""),vy=Symbol(""),vE=Symbol(""),jv=Symbol("");function Zf(){let r=[];function l(g){return r.push(g),()=>{const m=r.indexOf(g);m>-1&&r.splice(m,1)}}function h(){r=[]}return{add:l,list:()=>r,reset:h}}function hl(r,l,h,g,m){const C=g&&(g.enterCallbacks[m]=g.enterCallbacks[m]||[]);return()=>new Promise((_,v)=>{const y=N=>{N===!1?v(Iu(4,{from:h,to:l})):N instanceof Error?v(N):WN(N)?v(Iu(2,{from:l,to:N})):(C&&g.enterCallbacks[m]===C&&typeof N=="function"&&C.push(N),_())},S=r.call(g&&g.instances[m],l,h,y);let P=Promise.resolve(S);r.length<3&&(P=P.then(y)),P.catch(N=>v(N))})}function mv(r,l,h,g){const m=[];for(const C of r)for(const _ in C.components){let v=C.components[_];if(!(l!=="beforeRouteEnter"&&!C.instances[_]))if(yB(v)){const S=(v.__vccOpts||v)[l];S&&m.push(hl(S,h,g,C,_))}else{let y=v();m.push(()=>y.then(S=>{if(!S)return Promise.reject(new Error(`Couldn't resolve component "${_}" at "${C.path}"`));const P=TN(S)?S.default:S;C.components[_]=P;const M=(P.__vccOpts||P)[l];return M&&hl(M,h,g,C,_)()}))}}return m}function yB(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function g1(r){const l=ms(vy),h=ms(vE),g=Ii(()=>l.resolve(Ec(r.to))),m=Ii(()=>{const{matched:y}=g.value,{length:S}=y,P=y[S-1],N=h.matched;if(!P||!N.length)return-1;const M=N.findIndex(Su.bind(null,P));if(M>-1)return M;const F=b1(y[S-2]);return S>1&&b1(P)===F&&N[N.length-1].path!==F?N.findIndex(Su.bind(null,y[S-2])):M}),C=Ii(()=>m.value>-1&&EB(h.params,g.value.params)),_=Ii(()=>m.value>-1&&m.value===h.matched.length-1&&uE(h.params,g.value.params));function v(y={}){return xB(y)?l[Ec(r.replace)?"replace":"push"](Ec(r.to)).catch(cp):Promise.resolve()}return{route:g,href:Ii(()=>g.value.href),isActive:C,isExactActive:_,navigate:v}}const AB=Dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:g1,setup(r,{slots:l}){const h=Nu(g1(r)),{options:g}=ms(vy),m=Ii(()=>({[w1(r.activeClass,g.linkActiveClass,"router-link-active")]:h.isActive,[w1(r.exactActiveClass,g.linkExactActiveClass,"router-link-exact-active")]:h.isExactActive}));return()=>{const C=l.default&&l.default(h);return r.custom?C:iw("a",{"aria-current":h.isExactActive?r.ariaCurrentValue:null,href:h.href,onClick:h.navigate,class:m.value},C)}}}),CB=AB;function xB(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const l=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return r.preventDefault&&r.preventDefault(),!0}}function EB(r,l){for(const h in l){const g=l[h],m=r[h];if(typeof g=="string"){if(g!==m)return!1}else if(!Br(m)||m.length!==g.length||g.some((C,_)=>C!==m[_]))return!1}return!0}function b1(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const w1=(r,l,h)=>r!=null?r:l!=null?l:h,DB=Dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:l,slots:h}){const g=ms(jv),m=Ii(()=>r.route||g.value),C=ms(m1,0),_=Ii(()=>{let S=Ec(C);const{matched:P}=m.value;let N;for(;(N=P[S])&&!N.components;)S++;return S}),v=Ii(()=>m.value.matched[_.value]);ip(m1,Ii(()=>_.value+1)),ip(vB,v),ip(jv,m);const y=op();return Cu(()=>[y.value,v.value,r.name],([S,P,N],[M,F,ee])=>{P&&(P.instances[N]=S,F&&F!==P&&S&&S===M&&(P.leaveGuards.size||(P.leaveGuards=F.leaveGuards),P.updateGuards.size||(P.updateGuards=F.updateGuards))),S&&P&&(!F||!Su(P,F)||!M)&&(P.enterCallbacks[N]||[]).forEach(se=>se(S))},{flush:"post"}),()=>{const S=m.value,P=r.name,N=v.value,M=N&&N.components[P];if(!M)return _1(h.default,{Component:M,route:S});const F=N.props[P],ee=F?F===!0?S.params:typeof F=="function"?F(S):F:null,we=iw(M,Cn({},ee,l,{onVnodeUnmounted:te=>{te.component.isUnmounted&&(N.instances[P]=null)},ref:y}));return _1(h.default,{Component:we,route:S})||we}}});function _1(r,l){if(!r)return null;const h=r(l);return h.length===1?h[0]:h}const TB=DB;function SB(r){const l=nB(r.routes,r),h=r.parseQuery||_B,g=r.stringifyQuery||p1,m=r.history,C=Zf(),_=Zf(),v=Zf(),y=K1(al);let S=al;bu&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const P=fv.bind(null,X=>""+X),N=fv.bind(null,wB),M=fv.bind(null,Rb);function F(X,Te){let Ne,Ue;return fE(X)?(Ne=l.getRecordMatcher(X),Ue=Te):Ue=X,l.addRoute(Ue,Ne)}function ee(X){const Te=l.getRecordMatcher(X);Te&&l.removeRoute(Te)}function se(){return l.getRoutes().map(X=>X.record)}function we(X){return!!l.getRecordMatcher(X)}function te(X,Te){if(Te=Cn({},Te||y.value),typeof X=="string"){const q=pv(h,X,Te.path),Z=l.resolve({path:q.path},Te),ce=m.createHref(q.fullPath);return Cn(q,Z,{params:M(Z.params),hash:Rb(q.hash),redirectedFrom:void 0,href:ce})}let Ne;if("path"in X)Ne=Cn({},X,{path:pv(h,X.path,Te.path).path});else{const q=Cn({},X.params);for(const Z in q)q[Z]==null&&delete q[Z];Ne=Cn({},X,{params:N(X.params)}),Te.params=N(Te.params)}const Ue=l.resolve(Ne,Te),dt=X.hash||"";Ue.params=P(M(Ue.params));const $t=MN(g,Cn({},X,{hash:mB(dt),path:Ue.path})),Qe=m.createHref($t);return Cn({fullPath:$t,hash:dt,query:g===p1?kB(X.query):X.query||{}},Ue,{redirectedFrom:void 0,href:Qe})}function Y(X){return typeof X=="string"?pv(h,X,y.value.path):Cn({},X)}function ie(X,Te){if(S!==X)return Iu(8,{from:Te,to:X})}function ke(X){return _e(X)}function U(X){return ke(Cn(Y(X),{replace:!0}))}function Pe(X){const Te=X.matched[X.matched.length-1];if(Te&&Te.redirect){const{redirect:Ne}=Te;let Ue=typeof Ne=="function"?Ne(X):Ne;return typeof Ue=="string"&&(Ue=Ue.includes("?")||Ue.includes("#")?Ue=Y(Ue):{path:Ue},Ue.params={}),Cn({query:X.query,hash:X.hash,params:"path"in Ue?{}:X.params},Ue)}}function _e(X,Te){const Ne=S=te(X),Ue=y.value,dt=X.state,$t=X.force,Qe=X.replace===!0,q=Pe(Ne);if(q)return _e(Cn(Y(q),{state:typeof q=="object"?Cn({},dt,q.state):dt,force:$t,replace:Qe}),Te||Ne);const Z=Ne;Z.redirectedFrom=Te;let ce;return!$t&&PN(g,Ue,Ne)&&(ce=Iu(16,{to:Z,from:Ue}),Fn(Ue,Ue,!0,!1)),(ce?Promise.resolve(ce):Me(Z,Ue)).catch(me=>ea(me)?ea(me,2)?me:no(me):ot(me,Z,Ue)).then(me=>{if(me){if(ea(me,2))return _e(Cn({replace:Qe},Y(me.to),{state:typeof me.to=="object"?Cn({},dt,me.to.state):dt,force:$t}),Te||Z)}else me=Ge(Z,Ue,!0,Qe,dt);return Fe(Z,Ue,me),me})}function ue(X,Te){const Ne=ie(X,Te);return Ne?Promise.reject(Ne):Promise.resolve()}function Me(X,Te){let Ne;const[Ue,dt,$t]=IB(X,Te);Ne=mv(Ue.reverse(),"beforeRouteLeave",X,Te);for(const q of Ue)q.leaveGuards.forEach(Z=>{Ne.push(hl(Z,X,Te))});const Qe=ue.bind(null,X,Te);return Ne.push(Qe),mu(Ne).then(()=>{Ne=[];for(const q of C.list())Ne.push(hl(q,X,Te));return Ne.push(Qe),mu(Ne)}).then(()=>{Ne=mv(dt,"beforeRouteUpdate",X,Te);for(const q of dt)q.updateGuards.forEach(Z=>{Ne.push(hl(Z,X,Te))});return Ne.push(Qe),mu(Ne)}).then(()=>{Ne=[];for(const q of X.matched)if(q.beforeEnter&&!Te.matched.includes(q))if(Br(q.beforeEnter))for(const Z of q.beforeEnter)Ne.push(hl(Z,X,Te));else Ne.push(hl(q.beforeEnter,X,Te));return Ne.push(Qe),mu(Ne)}).then(()=>(X.matched.forEach(q=>q.enterCallbacks={}),Ne=mv($t,"beforeRouteEnter",X,Te),Ne.push(Qe),mu(Ne))).then(()=>{Ne=[];for(const q of _.list())Ne.push(hl(q,X,Te));return Ne.push(Qe),mu(Ne)}).catch(q=>ea(q,8)?q:Promise.reject(q))}function Fe(X,Te,Ne){for(const Ue of v.list())Ue(X,Te,Ne)}function Ge(X,Te,Ne,Ue,dt){const $t=ie(X,Te);if($t)return $t;const Qe=Te===al,q=bu?history.state:{};Ne&&(Ue||Qe?m.replace(X.fullPath,Cn({scroll:Qe&&q&&q.scroll},dt)):m.push(X.fullPath,dt)),y.value=X,Fn(X,Te,Ne,Qe),no()}let Q;function Xe(){Q||(Q=m.listen((X,Te,Ne)=>{if(!Dt.listening)return;const Ue=te(X),dt=Pe(Ue);if(dt){_e(Cn(dt,{replace:!0}),Ue).catch(cp);return}S=Ue;const $t=y.value;bu&&FN(s1($t.fullPath,Ne.delta),sw()),Me(Ue,$t).catch(Qe=>ea(Qe,12)?Qe:ea(Qe,2)?(_e(Qe.to,Ue).then(q=>{ea(q,20)&&!Ne.delta&&Ne.type===wp.pop&&m.go(-1,!1)}).catch(cp),Promise.reject()):(Ne.delta&&m.go(-Ne.delta,!1),ot(Qe,Ue,$t))).then(Qe=>{Qe=Qe||Ge(Ue,$t,!1),Qe&&(Ne.delta&&!ea(Qe,8)?m.go(-Ne.delta,!1):Ne.type===wp.pop&&ea(Qe,20)&&m.go(-1,!1)),Fe(Ue,$t,Qe)}).catch(cp)}))}let Le=Zf(),Ft=Zf(),Ye;function ot(X,Te,Ne){no(X);const Ue=Ft.list();return Ue.length?Ue.forEach(dt=>dt(X,Te,Ne)):console.error(X),Promise.reject(X)}function vt(){return Ye&&y.value!==al?Promise.resolve():new Promise((X,Te)=>{Le.add([X,Te])})}function no(X){return Ye||(Ye=!X,Xe(),Le.list().forEach(([Te,Ne])=>X?Ne(X):Te()),Le.reset()),X}function Fn(X,Te,Ne,Ue){const{scrollBehavior:dt}=r;if(!bu||!dt)return Promise.resolve();const $t=!Ne&&$N(s1(X.fullPath,0))||(Ue||!Ne)&&history.state&&history.state.scroll||null;return Gb().then(()=>dt(X,Te,$t)).then(Qe=>Qe&&jN(Qe)).catch(Qe=>ot(Qe,X,Te))}const cn=X=>m.go(X);let Ln;const fo=new Set,Dt={currentRoute:y,listening:!0,addRoute:F,removeRoute:ee,hasRoute:we,getRoutes:se,resolve:te,options:r,push:ke,replace:U,go:cn,back:()=>cn(-1),forward:()=>cn(1),beforeEach:C.add,beforeResolve:_.add,afterEach:v.add,onError:Ft.add,isReady:vt,install(X){const Te=this;X.component("RouterLink",CB),X.component("RouterView",TB),X.config.globalProperties.$router=Te,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>Ec(y)}),bu&&!Ln&&y.value===al&&(Ln=!0,ke(m.location).catch(dt=>{}));const Ne={};for(const dt in al)Ne[dt]=Ii(()=>y.value[dt]);X.provide(vy,Te),X.provide(vE,Nu(Ne)),X.provide(jv,y);const Ue=X.unmount;fo.add(X),X.unmount=function(){fo.delete(X),fo.size<1&&(S=al,Q&&Q(),Q=null,y.value=al,Ln=!1,Ye=!1),Ue()}}};return Dt}function mu(r){return r.reduce((l,h)=>l.then(()=>h()),Promise.resolve())}function IB(r,l){const h=[],g=[],m=[],C=Math.max(l.matched.length,r.matched.length);for(let _=0;_<C;_++){const v=l.matched[_];v&&(r.matched.find(S=>Su(S,v))?g.push(v):h.push(v));const y=r.matched[_];y&&(l.matched.find(S=>Su(S,y))||m.push(y))}return[h,g,m]}const MB="/build/assets/books.85e6d0ea.png";const PB={},aw=r=>(Vt("data-v-4e5ce75a"),r=r(),Ut(),r),NB={class:"home"},BB=aw(()=>d("div",{class:"top-hero-image"},[d("p",{class:"welcome-header"},"Welcome to"),d("p",{class:"gree-heading"},"Aperier Publishing"),d("div",{class:"what-are-we"},[d("p",null,"Open Research"),d("p",null,"Speed"),d("p",null,"Quality"),d("p",null,"Impact"),d("p",null,"Visibility")])],-1)),OB={class:"join-us container-fluid p-lg-5 p-md-2"},LB={class:"row align-items-center"},RB={class:"col-lg-8 col-md-6 col-12 mt-md-0 my-4 d-flex flex-column"},zB=aw(()=>d("p",{class:"underline-title mt-lg-5"},"Interested in Joining Our Global Network?",-1)),jB=aw(()=>d("p",null,"We pride ourselves on providing a supportive and accessible service for our authors throughout the publishing process. We offer fast publication while providing rigorous peer review to maintain the integrity of information. We are committed to the highest standards of peer review. We\u2019re committed to promoting your research as widely as we can and providing as much visibility and exposure for your article as possible. Join US",-1)),FB=aw(()=>d("div",{class:"col-lg-4 col-md-6 col-12"},[d("img",{src:MB,class:"img-fluid",alt:""})],-1));function $B(r,l,h,g,m,C){const _=nt("router-link");return le(),he("section",NB,[BB,d("div",OB,[d("div",LB,[d("div",RB,[zB,jB,ae(_,{to:{name:"Sign Up"},class:"align-self-md-end align-self-start green-button"},{default:je(()=>[j("Join us")]),_:1})]),FB])])])}const VB=pt(PB,[["render",$B],["__scopeId","data-v-4e5ce75a"]]),Pt={domain:"https://aperier.com"};const UB={props:["news"],data(){return{domain:Pt.domain}}},HB=r=>(Vt("data-v-983d30d3"),r=r(),Ut(),r),qB={class:"container-fluid mb-5"},WB={class:"container"},GB={class:"col-md-3 col-12"},KB=["src"],YB={class:"col-md-9 col-12 px-md-5 px-3 mb-4 d-flex flex-column"},QB={class:"news-title"},ZB={class:"news-date"},JB={class:"news-description"},XB=["innerHTML"],e4=HB(()=>d("hr",{class:"col-md-11 col-11"},null,-1)),t4={class:"row text-end pr-2"};function n4(r,l,h,g,m,C){const _=nt("section-title"),v=nt("router-link");return le(),he("section",qB,[ae(_,{title:"News"}),d("div",WB,[(le(!0),he(rt,null,Mt(h.news,y=>(le(),he("div",{class:"row",key:y.id},[d("div",GB,[d("img",{src:`/storage/upload/news/${y.image}`,class:"img-fluid",alt:""},null,8,KB)]),d("div",YB,[d("p",QB,be(y.title),1),d("p",ZB,be(y.date),1),d("p",JB,[d("span",{innerHTML:y.content},null,8,XB),ae(v,{to:{name:"News Details",params:{id:y.id}}},{default:je(()=>[j("Read More")]),_:2},1032,["to"])])]),e4]))),128)),d("div",t4,[d("p",null,[ae(v,{to:{name:"News List"}},{default:je(()=>[j("More News")]),_:1})])])])])}const o4=pt(UB,[["render",n4],["__scopeId","data-v-983d30d3"]]),i4="/build/assets/journal_1.0e107a9d.png",r4="/build/assets/journal_2.f21901c5.png",s4="/build/assets/journal_3.7dcfd42a.png",a4="/build/assets/journal_4.11861d88.png",l4="/build/assets/journal_5.37879ff9.png",c4="/build/assets/journal_6.932bc54d.png";const d4={},rr=r=>(Vt("data-v-2ba95125"),r=r(),Ut(),r),u4={class:"container-fluid gray-color p-md-5 p-3"},h4={class:"container"},f4={class:"row g-md-3 g-5 justify-content-center"},p4={class:"col-md-3 col-6 d-flex flex-column align-items-center"},m4=rr(()=>d("img",{src:i4,class:"img-fluid"},null,-1)),g4=rr(()=>d("p",{class:"journal-title"},"Sustainability Studies",-1)),b4={class:"col-md-3 col-6 d-flex flex-column align-items-center"},w4=rr(()=>d("img",{src:r4,class:"img-fluid"},null,-1)),_4=rr(()=>d("p",{class:"journal-title"},"Business Studies",-1)),k4={class:"col-md-3 col-6 d-flex flex-column align-items-center"},v4=rr(()=>d("img",{src:s4,class:"img-fluid"},null,-1)),y4=rr(()=>d("p",{class:"journal-title"},"Bibliometric and Systematic Reviews",-1)),A4={class:"col-md-3 col-6 d-flex flex-column align-items-center"},C4=rr(()=>d("img",{src:a4,class:"img-fluid"},null,-1)),x4=rr(()=>d("p",{class:"journal-title"},"Marketing Studies",-1)),E4={class:"col-md-3 col-6 d-flex flex-column align-items-center"},D4=rr(()=>d("img",{src:l4,class:"img-fluid"},null,-1)),T4=rr(()=>d("p",{class:"journal-title"},"Finance Studies",-1)),S4={class:"col-md-3 col-6 d-flex flex-column align-items-center"},I4=rr(()=>d("img",{src:c4,class:"img-fluid"},null,-1)),M4=rr(()=>d("p",{class:"journal-title"},"Tourism Studies",-1));function P4(r,l,h,g,m,C){const _=nt("section-title"),v=nt("router-link");return le(),he("section",u4,[ae(_,{title:"Journals"}),d("div",h4,[d("div",f4,[d("div",p4,[ae(v,{to:{name:"Journal Details",params:{id:1}}},{default:je(()=>[m4,g4]),_:1})]),d("div",b4,[ae(v,{to:{name:"Journal Details",params:{id:2}}},{default:je(()=>[w4,_4]),_:1})]),d("div",k4,[ae(v,{to:{name:"Journal Details",params:{id:3}}},{default:je(()=>[v4,y4]),_:1})]),d("div",A4,[ae(v,{to:{name:"Journal Details",params:{id:4}}},{default:je(()=>[C4,x4]),_:1})]),d("div",E4,[ae(v,{to:{name:"Journal Details",params:{id:5}}},{default:je(()=>[D4,T4]),_:1})]),d("div",S4,[ae(v,{to:{name:"Journal Details",params:{id:6}}},{default:je(()=>[I4,M4]),_:1})])])])])}const N4=pt(d4,[["render",P4],["__scopeId","data-v-2ba95125"]]);const B4={},O4={class:"container-fluid white-color p-md-5 p-3"},L4={class:"container"},R4=ko('<div class="row justify-content-center g-5" data-v-54fec41f><div class="col-lg-4 col-md-6 col-12 px-md-4 px-1" data-v-54fec41f><div class="custom-card" data-v-54fec41f><p class="custom-card-title" data-v-54fec41f>Best Article Award 2023</p><p class="custom-card-text" data-v-54fec41f>We are pleased to announce the \u201CBest Paper Award\u201D for research and review articles published in Aperier in 2023. One review and one research article will receive an award each. The papers will be selected after thorough evaluation by the Award Committee.</p></div></div><div class="col-lg-4 col-md-6 col-12 px-md-4 px-1" data-v-54fec41f><div class="custom-card" data-v-54fec41f><p class="custom-card-title" data-v-54fec41f>Best Reviewer Award 2023</p><p class="custom-card-text" data-v-54fec41f>We wish to acknowledge our reviewers who so generously offer their time to review the papers submitted to Aperier journals by presenting an award to the reviewers who have demonstrated their dedication, professionalism, and timeliness in reviewing manuscripts.</p></div></div><div class="col-lg-4 col-md-6 col-12 px-md-4 px-1" data-v-54fec41f><div class="custom-card" data-v-54fec41f><p class="custom-card-title" data-v-54fec41f>Travel Award 2023</p><p class="custom-card-text" data-v-54fec41f>This award provides financial support for the winners to attend an international conference in the field of cardiovascular development and disease to be held in 2023, in order to hold a presentation, present a poster, or both.</p></div></div></div>',1),z4={class:"row text-end mt-4"};function j4(r,l,h,g,m,C){const _=nt("section-title"),v=nt("router-link");return le(),he("section",O4,[ae(_,{title:"Awards"}),d("div",L4,[R4,d("div",z4,[d("p",null,[ae(v,{to:{name:"Award List"}},{default:je(()=>[j("Read more")]),_:1})])])])])}const F4=pt(B4,[["render",j4],["__scopeId","data-v-54fec41f"]]);const $4={},V4=r=>(Vt("data-v-791edabe"),r=r(),Ut(),r),U4={class:"container-fluid gray-color p-lg-5 p-md-4",id:"about"},H4=V4(()=>d("div",{class:"container"},[d("div",{class:"about-card p-md-4 p-3"},[d("p",null,"Aperier Publishing"),d("p",null,[j("A pioneer in scholarly, open access publishing, Aperier has supported academic communities since 2018. Based in Palestine, Aperier has the mission to foster open scientific exchange in all forms, across all disciplines. "),d("br"),d("br"),j(" Our new diverse and open access journals, are supported by many academic experts who share our mission, values, and commitment to providing high-quality service for our authors. We serve scholars from around the world to ensure the latest research is freely available and all content is distributed under a Creative Commons Attribution License (CC BY). "),d("br"),d("br"),j(" Aperier have target to publish journal articles that are ranked as high impact within their fields. ")])])],-1));function q4(r,l,h,g,m,C){const _=nt("section-title");return le(),he("section",U4,[ae(_,{title:"About"}),H4])}const W4=pt($4,[["render",q4],["__scopeId","data-v-791edabe"]]);const G4={},K4={class:"container-fluid white-color p-md-5 p-1"},Y4=ko('<div class="container" data-v-31c1803c><div class="row g-5" data-v-31c1803c><div class="col-md-4 col-12" data-v-31c1803c><div class="card-1 p-md-3 p-lg-4 p-4" data-v-31c1803c><p data-v-31c1803c>Aperier Publishing <br data-v-31c1803c> P785 Hebron <br data-v-31c1803c> West Bank, Palestine. <br data-v-31c1803c><br data-v-31c1803c> Phone : +970 02 227 1074 <br data-v-31c1803c> Email : head@aperier.com <br data-v-31c1803c> Office Hours : Sun \u2013 Thu (8:00 am \u2013 10:00 pm) <br data-v-31c1803c> Friday (8:00 am \u2013 3:30 pm) <br data-v-31c1803c><br data-v-31c1803c> Website : aperier.com</p></div></div><div class="col-md-8 col-12 pl-md-4" data-v-31c1803c><div class="card-2" data-v-31c1803c><div class="row px-5 py-3" data-v-31c1803c><div class="col-md-6 col-12" data-v-31c1803c><div class="form-group" data-v-31c1803c><label for="name" class="form-label" data-v-31c1803c>Name</label><input type="text" class="form-control" id="name" placeholder="John Doe" data-v-31c1803c></div></div><div class="col-md-6 col-12" data-v-31c1803c><div class="form-group" data-v-31c1803c><label for="email" class="form-label" data-v-31c1803c>Email</label><input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="someone@gmail.com" data-v-31c1803c></div></div><div class="col-12 mb-2" data-v-31c1803c><div class="form-group" data-v-31c1803c><label for="message" class="form-label" data-v-31c1803c>Message</label><textarea name="message" id="message" cols="10" rows="3" class="form-control" placeholder="Message" data-v-31c1803c></textarea></div></div><div class="col-12 text-end mb-2" data-v-31c1803c><button class="green-button" data-v-31c1803c>Submit</button></div></div></div></div></div></div>',1);function Q4(r,l,h,g,m,C){const _=nt("section-title");return le(),he("section",K4,[ae(_,{title:"Contact Us"}),Y4])}const Z4=pt(G4,[["render",Q4],["__scopeId","data-v-31c1803c"]]);function yE(r,l){return function(){return r.apply(l,arguments)}}const{toString:AE}=Object.prototype,{getPrototypeOf:yy}=Object,Ay=(r=>l=>{const h=AE.call(l);return r[h]||(r[h]=h.slice(8,-1).toLowerCase())})(Object.create(null)),ua=r=>(r=r.toLowerCase(),l=>Ay(l)===r),lw=r=>l=>typeof l===r,{isArray:Ou}=Array,_p=lw("undefined");function J4(r){return r!==null&&!_p(r)&&r.constructor!==null&&!_p(r.constructor)&&Nc(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const CE=ua("ArrayBuffer");function X4(r){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(r):l=r&&r.buffer&&CE(r.buffer),l}const eO=lw("string"),Nc=lw("function"),xE=lw("number"),Cy=r=>r!==null&&typeof r=="object",tO=r=>r===!0||r===!1,Tb=r=>{if(Ay(r)!=="object")return!1;const l=yy(r);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},nO=ua("Date"),oO=ua("File"),iO=ua("Blob"),rO=ua("FileList"),sO=r=>Cy(r)&&Nc(r.pipe),aO=r=>{const l="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||AE.call(r)===l||Nc(r.toString)&&r.toString()===l)},lO=ua("URLSearchParams"),cO=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mp(r,l,{allOwnKeys:h=!1}={}){if(r===null||typeof r>"u")return;let g,m;if(typeof r!="object"&&(r=[r]),Ou(r))for(g=0,m=r.length;g<m;g++)l.call(null,r[g],g,r);else{const C=h?Object.getOwnPropertyNames(r):Object.keys(r),_=C.length;let v;for(g=0;g<_;g++)v=C[g],l.call(null,r[v],v,r)}}function EE(r,l){l=l.toLowerCase();const h=Object.keys(r);let g=h.length,m;for(;g-- >0;)if(m=h[g],l===m.toLowerCase())return m;return null}const DE=typeof self>"u"?typeof global>"u"?globalThis:global:self,TE=r=>!_p(r)&&r!==DE;function Fv(){const{caseless:r}=TE(this)&&this||{},l={},h=(g,m)=>{const C=r&&EE(l,m)||m;Tb(l[C])&&Tb(g)?l[C]=Fv(l[C],g):Tb(g)?l[C]=Fv({},g):Ou(g)?l[C]=g.slice():l[C]=g};for(let g=0,m=arguments.length;g<m;g++)arguments[g]&&Mp(arguments[g],h);return l}const dO=(r,l,h,{allOwnKeys:g}={})=>(Mp(l,(m,C)=>{h&&Nc(m)?r[C]=yE(m,h):r[C]=m},{allOwnKeys:g}),r),uO=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),hO=(r,l,h,g)=>{r.prototype=Object.create(l.prototype,g),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:l.prototype}),h&&Object.assign(r.prototype,h)},fO=(r,l,h,g)=>{let m,C,_;const v={};if(l=l||{},r==null)return l;do{for(m=Object.getOwnPropertyNames(r),C=m.length;C-- >0;)_=m[C],(!g||g(_,r,l))&&!v[_]&&(l[_]=r[_],v[_]=!0);r=h!==!1&&yy(r)}while(r&&(!h||h(r,l))&&r!==Object.prototype);return l},pO=(r,l,h)=>{r=String(r),(h===void 0||h>r.length)&&(h=r.length),h-=l.length;const g=r.indexOf(l,h);return g!==-1&&g===h},mO=r=>{if(!r)return null;if(Ou(r))return r;let l=r.length;if(!xE(l))return null;const h=new Array(l);for(;l-- >0;)h[l]=r[l];return h},gO=(r=>l=>r&&l instanceof r)(typeof Uint8Array<"u"&&yy(Uint8Array)),bO=(r,l)=>{const g=(r&&r[Symbol.iterator]).call(r);let m;for(;(m=g.next())&&!m.done;){const C=m.value;l.call(r,C[0],C[1])}},wO=(r,l)=>{let h;const g=[];for(;(h=r.exec(l))!==null;)g.push(h);return g},_O=ua("HTMLFormElement"),kO=r=>r.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(h,g,m){return g.toUpperCase()+m}),k1=(({hasOwnProperty:r})=>(l,h)=>r.call(l,h))(Object.prototype),vO=ua("RegExp"),SE=(r,l)=>{const h=Object.getOwnPropertyDescriptors(r),g={};Mp(h,(m,C)=>{l(m,C,r)!==!1&&(g[C]=m)}),Object.defineProperties(r,g)},yO=r=>{SE(r,(l,h)=>{if(Nc(r)&&["arguments","caller","callee"].indexOf(h)!==-1)return!1;const g=r[h];if(!!Nc(g)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+h+"'")})}})},AO=(r,l)=>{const h={},g=m=>{m.forEach(C=>{h[C]=!0})};return Ou(r)?g(r):g(String(r).split(l)),h},CO=()=>{},xO=(r,l)=>(r=+r,Number.isFinite(r)?r:l),EO=r=>{const l=new Array(10),h=(g,m)=>{if(Cy(g)){if(l.indexOf(g)>=0)return;if(!("toJSON"in g)){l[m]=g;const C=Ou(g)?[]:{};return Mp(g,(_,v)=>{const y=h(_,m+1);!_p(y)&&(C[v]=y)}),l[m]=void 0,C}}return g};return h(r,0)},De={isArray:Ou,isArrayBuffer:CE,isBuffer:J4,isFormData:aO,isArrayBufferView:X4,isString:eO,isNumber:xE,isBoolean:tO,isObject:Cy,isPlainObject:Tb,isUndefined:_p,isDate:nO,isFile:oO,isBlob:iO,isRegExp:vO,isFunction:Nc,isStream:sO,isURLSearchParams:lO,isTypedArray:gO,isFileList:rO,forEach:Mp,merge:Fv,extend:dO,trim:cO,stripBOM:uO,inherits:hO,toFlatObject:fO,kindOf:Ay,kindOfTest:ua,endsWith:pO,toArray:mO,forEachEntry:bO,matchAll:wO,isHTMLForm:_O,hasOwnProperty:k1,hasOwnProp:k1,reduceDescriptors:SE,freezeMethods:yO,toObjectSet:AO,toCamelCase:kO,noop:CO,toFiniteNumber:xO,findKey:EE,global:DE,isContextDefined:TE,toJSONObject:EO};function tn(r,l,h,g,m){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",l&&(this.code=l),h&&(this.config=h),g&&(this.request=g),m&&(this.response=m)}De.inherits(tn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:De.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const IE=tn.prototype,ME={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{ME[r]={value:r}});Object.defineProperties(tn,ME);Object.defineProperty(IE,"isAxiosError",{value:!0});tn.from=(r,l,h,g,m,C)=>{const _=Object.create(IE);return De.toFlatObject(r,_,function(y){return y!==Error.prototype},v=>v!=="isAxiosError"),tn.call(_,r.message,l,h,g,m),_.cause=r,_.name=r.name,C&&Object.assign(_,C),_};var mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function PE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function DO(r){var l=r.default;if(typeof l=="function"){var h=function(){return l.apply(this,arguments)};h.prototype=l.prototype}else h={};return Object.defineProperty(h,"__esModule",{value:!0}),Object.keys(r).forEach(function(g){var m=Object.getOwnPropertyDescriptor(r,g);Object.defineProperty(h,g,m.get?m:{enumerable:!0,get:function(){return r[g]}})}),h}var TO=typeof self=="object"?self.FormData:window.FormData;const SO=TO;function $v(r){return De.isPlainObject(r)||De.isArray(r)}function NE(r){return De.endsWith(r,"[]")?r.slice(0,-2):r}function v1(r,l,h){return r?r.concat(l).map(function(m,C){return m=NE(m),!h&&C?"["+m+"]":m}).join(h?".":""):l}function IO(r){return De.isArray(r)&&!r.some($v)}const MO=De.toFlatObject(De,{},null,function(l){return/^is[A-Z]/.test(l)});function PO(r){return r&&De.isFunction(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator]}function cw(r,l,h){if(!De.isObject(r))throw new TypeError("target must be an object");l=l||new(SO||FormData),h=De.toFlatObject(h,{metaTokens:!0,dots:!1,indexes:!1},!1,function(se,we){return!De.isUndefined(we[se])});const g=h.metaTokens,m=h.visitor||P,C=h.dots,_=h.indexes,y=(h.Blob||typeof Blob<"u"&&Blob)&&PO(l);if(!De.isFunction(m))throw new TypeError("visitor must be a function");function S(ee){if(ee===null)return"";if(De.isDate(ee))return ee.toISOString();if(!y&&De.isBlob(ee))throw new tn("Blob is not supported. Use a Buffer instead.");return De.isArrayBuffer(ee)||De.isTypedArray(ee)?y&&typeof Blob=="function"?new Blob([ee]):Buffer.from(ee):ee}function P(ee,se,we){let te=ee;if(ee&&!we&&typeof ee=="object"){if(De.endsWith(se,"{}"))se=g?se:se.slice(0,-2),ee=JSON.stringify(ee);else if(De.isArray(ee)&&IO(ee)||De.isFileList(ee)||De.endsWith(se,"[]")&&(te=De.toArray(ee)))return se=NE(se),te.forEach(function(ie,ke){!(De.isUndefined(ie)||ie===null)&&l.append(_===!0?v1([se],ke,C):_===null?se:se+"[]",S(ie))}),!1}return $v(ee)?!0:(l.append(v1(we,se,C),S(ee)),!1)}const N=[],M=Object.assign(MO,{defaultVisitor:P,convertValue:S,isVisitable:$v});function F(ee,se){if(!De.isUndefined(ee)){if(N.indexOf(ee)!==-1)throw Error("Circular reference detected in "+se.join("."));N.push(ee),De.forEach(ee,function(te,Y){(!(De.isUndefined(te)||te===null)&&m.call(l,te,De.isString(Y)?Y.trim():Y,se,M))===!0&&F(te,se?se.concat(Y):[Y])}),N.pop()}}if(!De.isObject(r))throw new TypeError("data must be an object");return F(r),l}function y1(r){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(g){return l[g]})}function xy(r,l){this._pairs=[],r&&cw(r,this,l)}const BE=xy.prototype;BE.append=function(l,h){this._pairs.push([l,h])};BE.toString=function(l){const h=l?function(g){return l.call(this,g,y1)}:y1;return this._pairs.map(function(m){return h(m[0])+"="+h(m[1])},"").join("&")};function NO(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function OE(r,l,h){if(!l)return r;const g=h&&h.encode||NO,m=h&&h.serialize;let C;if(m?C=m(l,h):C=De.isURLSearchParams(l)?l.toString():new xy(l,h).toString(g),C){const _=r.indexOf("#");_!==-1&&(r=r.slice(0,_)),r+=(r.indexOf("?")===-1?"?":"&")+C}return r}class BO{constructor(){this.handlers=[]}use(l,h,g){return this.handlers.push({fulfilled:l,rejected:h,synchronous:g?g.synchronous:!1,runWhen:g?g.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){De.forEach(this.handlers,function(g){g!==null&&l(g)})}}const A1=BO,LE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},OO=typeof URLSearchParams<"u"?URLSearchParams:xy,LO=FormData,RO=(()=>{let r;return typeof navigator<"u"&&((r=navigator.product)==="ReactNative"||r==="NativeScript"||r==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ra={isBrowser:!0,classes:{URLSearchParams:OO,FormData:LO,Blob},isStandardBrowserEnv:RO,protocols:["http","https","file","blob","url","data"]};function zO(r,l){return cw(r,new ra.classes.URLSearchParams,Object.assign({visitor:function(h,g,m,C){return ra.isNode&&De.isBuffer(h)?(this.append(g,h.toString("base64")),!1):C.defaultVisitor.apply(this,arguments)}},l))}function jO(r){return De.matchAll(/\w+|\[(\w*)]/g,r).map(l=>l[0]==="[]"?"":l[1]||l[0])}function FO(r){const l={},h=Object.keys(r);let g;const m=h.length;let C;for(g=0;g<m;g++)C=h[g],l[C]=r[C];return l}function RE(r){function l(h,g,m,C){let _=h[C++];const v=Number.isFinite(+_),y=C>=h.length;return _=!_&&De.isArray(m)?m.length:_,y?(De.hasOwnProp(m,_)?m[_]=[m[_],g]:m[_]=g,!v):((!m[_]||!De.isObject(m[_]))&&(m[_]=[]),l(h,g,m[_],C)&&De.isArray(m[_])&&(m[_]=FO(m[_])),!v)}if(De.isFormData(r)&&De.isFunction(r.entries)){const h={};return De.forEachEntry(r,(g,m)=>{l(jO(g),m,h,0)}),h}return null}const $O={"Content-Type":void 0};function VO(r,l,h){if(De.isString(r))try{return(l||JSON.parse)(r),De.trim(r)}catch(g){if(g.name!=="SyntaxError")throw g}return(h||JSON.stringify)(r)}const dw={transitional:LE,adapter:["xhr","http"],transformRequest:[function(l,h){const g=h.getContentType()||"",m=g.indexOf("application/json")>-1,C=De.isObject(l);if(C&&De.isHTMLForm(l)&&(l=new FormData(l)),De.isFormData(l))return m&&m?JSON.stringify(RE(l)):l;if(De.isArrayBuffer(l)||De.isBuffer(l)||De.isStream(l)||De.isFile(l)||De.isBlob(l))return l;if(De.isArrayBufferView(l))return l.buffer;if(De.isURLSearchParams(l))return h.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let v;if(C){if(g.indexOf("application/x-www-form-urlencoded")>-1)return zO(l,this.formSerializer).toString();if((v=De.isFileList(l))||g.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return cw(v?{"files[]":l}:l,y&&new y,this.formSerializer)}}return C||m?(h.setContentType("application/json",!1),VO(l)):l}],transformResponse:[function(l){const h=this.transitional||dw.transitional,g=h&&h.forcedJSONParsing,m=this.responseType==="json";if(l&&De.isString(l)&&(g&&!this.responseType||m)){const _=!(h&&h.silentJSONParsing)&&m;try{return JSON.parse(l)}catch(v){if(_)throw v.name==="SyntaxError"?tn.from(v,tn.ERR_BAD_RESPONSE,this,null,this.response):v}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ra.classes.FormData,Blob:ra.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};De.forEach(["delete","get","head"],function(l){dw.headers[l]={}});De.forEach(["post","put","patch"],function(l){dw.headers[l]=De.merge($O)});const Ey=dw,UO=De.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HO=r=>{const l={};let h,g,m;return r&&r.split(`
`).forEach(function(_){m=_.indexOf(":"),h=_.substring(0,m).trim().toLowerCase(),g=_.substring(m+1).trim(),!(!h||l[h]&&UO[h])&&(h==="set-cookie"?l[h]?l[h].push(g):l[h]=[g]:l[h]=l[h]?l[h]+", "+g:g)}),l},C1=Symbol("internals");function Jf(r){return r&&String(r).trim().toLowerCase()}function Sb(r){return r===!1||r==null?r:De.isArray(r)?r.map(Sb):String(r)}function qO(r){const l=Object.create(null),h=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let g;for(;g=h.exec(r);)l[g[1]]=g[2];return l}function WO(r){return/^[-_a-zA-Z]+$/.test(r.trim())}function x1(r,l,h,g){if(De.isFunction(g))return g.call(this,l,h);if(!!De.isString(l)){if(De.isString(g))return l.indexOf(g)!==-1;if(De.isRegExp(g))return g.test(l)}}function GO(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,h,g)=>h.toUpperCase()+g)}function KO(r,l){const h=De.toCamelCase(" "+l);["get","set","has"].forEach(g=>{Object.defineProperty(r,g+h,{value:function(m,C,_){return this[g].call(this,l,m,C,_)},configurable:!0})})}class uw{constructor(l){l&&this.set(l)}set(l,h,g){const m=this;function C(v,y,S){const P=Jf(y);if(!P)throw new Error("header name must be a non-empty string");const N=De.findKey(m,P);(!N||m[N]===void 0||S===!0||S===void 0&&m[N]!==!1)&&(m[N||y]=Sb(v))}const _=(v,y)=>De.forEach(v,(S,P)=>C(S,P,y));return De.isPlainObject(l)||l instanceof this.constructor?_(l,h):De.isString(l)&&(l=l.trim())&&!WO(l)?_(HO(l),h):l!=null&&C(h,l,g),this}get(l,h){if(l=Jf(l),l){const g=De.findKey(this,l);if(g){const m=this[g];if(!h)return m;if(h===!0)return qO(m);if(De.isFunction(h))return h.call(this,m,g);if(De.isRegExp(h))return h.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,h){if(l=Jf(l),l){const g=De.findKey(this,l);return!!(g&&(!h||x1(this,this[g],g,h)))}return!1}delete(l,h){const g=this;let m=!1;function C(_){if(_=Jf(_),_){const v=De.findKey(g,_);v&&(!h||x1(g,g[v],v,h))&&(delete g[v],m=!0)}}return De.isArray(l)?l.forEach(C):C(l),m}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(l){const h=this,g={};return De.forEach(this,(m,C)=>{const _=De.findKey(g,C);if(_){h[_]=Sb(m),delete h[C];return}const v=l?GO(C):String(C).trim();v!==C&&delete h[C],h[v]=Sb(m),g[v]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const h=Object.create(null);return De.forEach(this,(g,m)=>{g!=null&&g!==!1&&(h[m]=l&&De.isArray(g)?g.join(", "):g)}),h}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,h])=>l+": "+h).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...h){const g=new this(l);return h.forEach(m=>g.set(m)),g}static accessor(l){const g=(this[C1]=this[C1]={accessors:{}}).accessors,m=this.prototype;function C(_){const v=Jf(_);g[v]||(KO(m,_),g[v]=!0)}return De.isArray(l)?l.forEach(C):C(l),this}}uw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);De.freezeMethods(uw.prototype);De.freezeMethods(uw);const sa=uw;function gv(r,l){const h=this||Ey,g=l||h,m=sa.from(g.headers);let C=g.data;return De.forEach(r,function(v){C=v.call(h,C,m.normalize(),l?l.status:void 0)}),m.normalize(),C}function zE(r){return!!(r&&r.__CANCEL__)}function Pp(r,l,h){tn.call(this,r==null?"canceled":r,tn.ERR_CANCELED,l,h),this.name="CanceledError"}De.inherits(Pp,tn,{__CANCEL__:!0});const YO=null;function QO(r,l,h){const g=h.config.validateStatus;!h.status||!g||g(h.status)?r(h):l(new tn("Request failed with status code "+h.status,[tn.ERR_BAD_REQUEST,tn.ERR_BAD_RESPONSE][Math.floor(h.status/100)-4],h.config,h.request,h))}const ZO=ra.isStandardBrowserEnv?function(){return{write:function(h,g,m,C,_,v){const y=[];y.push(h+"="+encodeURIComponent(g)),De.isNumber(m)&&y.push("expires="+new Date(m).toGMTString()),De.isString(C)&&y.push("path="+C),De.isString(_)&&y.push("domain="+_),v===!0&&y.push("secure"),document.cookie=y.join("; ")},read:function(h){const g=document.cookie.match(new RegExp("(^|;\\s*)("+h+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(h){this.write(h,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function JO(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function XO(r,l){return l?r.replace(/\/+$/,"")+"/"+l.replace(/^\/+/,""):r}function jE(r,l){return r&&!JO(l)?XO(r,l):l}const eL=ra.isStandardBrowserEnv?function(){const l=/(msie|trident)/i.test(navigator.userAgent),h=document.createElement("a");let g;function m(C){let _=C;return l&&(h.setAttribute("href",_),_=h.href),h.setAttribute("href",_),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:h.port,pathname:h.pathname.charAt(0)==="/"?h.pathname:"/"+h.pathname}}return g=m(window.location.href),function(_){const v=De.isString(_)?m(_):_;return v.protocol===g.protocol&&v.host===g.host}}():function(){return function(){return!0}}();function tL(r){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return l&&l[1]||""}function nL(r,l){r=r||10;const h=new Array(r),g=new Array(r);let m=0,C=0,_;return l=l!==void 0?l:1e3,function(y){const S=Date.now(),P=g[C];_||(_=S),h[m]=y,g[m]=S;let N=C,M=0;for(;N!==m;)M+=h[N++],N=N%r;if(m=(m+1)%r,m===C&&(C=(C+1)%r),S-_<l)return;const F=P&&S-P;return F?Math.round(M*1e3/F):void 0}}function E1(r,l){let h=0;const g=nL(50,250);return m=>{const C=m.loaded,_=m.lengthComputable?m.total:void 0,v=C-h,y=g(v),S=C<=_;h=C;const P={loaded:C,total:_,progress:_?C/_:void 0,bytes:v,rate:y||void 0,estimated:y&&_&&S?(_-C)/y:void 0,event:m};P[l?"download":"upload"]=!0,r(P)}}const oL=typeof XMLHttpRequest<"u",iL=oL&&function(r){return new Promise(function(h,g){let m=r.data;const C=sa.from(r.headers).normalize(),_=r.responseType;let v;function y(){r.cancelToken&&r.cancelToken.unsubscribe(v),r.signal&&r.signal.removeEventListener("abort",v)}De.isFormData(m)&&ra.isStandardBrowserEnv&&C.setContentType(!1);let S=new XMLHttpRequest;if(r.auth){const F=r.auth.username||"",ee=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";C.set("Authorization","Basic "+btoa(F+":"+ee))}const P=jE(r.baseURL,r.url);S.open(r.method.toUpperCase(),OE(P,r.params,r.paramsSerializer),!0),S.timeout=r.timeout;function N(){if(!S)return;const F=sa.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),se={data:!_||_==="text"||_==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:F,config:r,request:S};QO(function(te){h(te),y()},function(te){g(te),y()},se),S=null}if("onloadend"in S?S.onloadend=N:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(N)},S.onabort=function(){!S||(g(new tn("Request aborted",tn.ECONNABORTED,r,S)),S=null)},S.onerror=function(){g(new tn("Network Error",tn.ERR_NETWORK,r,S)),S=null},S.ontimeout=function(){let ee=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const se=r.transitional||LE;r.timeoutErrorMessage&&(ee=r.timeoutErrorMessage),g(new tn(ee,se.clarifyTimeoutError?tn.ETIMEDOUT:tn.ECONNABORTED,r,S)),S=null},ra.isStandardBrowserEnv){const F=(r.withCredentials||eL(P))&&r.xsrfCookieName&&ZO.read(r.xsrfCookieName);F&&C.set(r.xsrfHeaderName,F)}m===void 0&&C.setContentType(null),"setRequestHeader"in S&&De.forEach(C.toJSON(),function(ee,se){S.setRequestHeader(se,ee)}),De.isUndefined(r.withCredentials)||(S.withCredentials=!!r.withCredentials),_&&_!=="json"&&(S.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&S.addEventListener("progress",E1(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&S.upload&&S.upload.addEventListener("progress",E1(r.onUploadProgress)),(r.cancelToken||r.signal)&&(v=F=>{!S||(g(!F||F.type?new Pp(null,r,S):F),S.abort(),S=null)},r.cancelToken&&r.cancelToken.subscribe(v),r.signal&&(r.signal.aborted?v():r.signal.addEventListener("abort",v)));const M=tL(P);if(M&&ra.protocols.indexOf(M)===-1){g(new tn("Unsupported protocol "+M+":",tn.ERR_BAD_REQUEST,r));return}S.send(m||null)})},Ib={http:YO,xhr:iL};De.forEach(Ib,(r,l)=>{if(r){try{Object.defineProperty(r,"name",{value:l})}catch{}Object.defineProperty(r,"adapterName",{value:l})}});const rL={getAdapter:r=>{r=De.isArray(r)?r:[r];const{length:l}=r;let h,g;for(let m=0;m<l&&(h=r[m],!(g=De.isString(h)?Ib[h.toLowerCase()]:h));m++);if(!g)throw g===!1?new tn(`Adapter ${h} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(De.hasOwnProp(Ib,h)?`Adapter '${h}' is not available in the build`:`Unknown adapter '${h}'`);if(!De.isFunction(g))throw new TypeError("adapter is not a function");return g},adapters:Ib};function bv(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Pp}function D1(r){return bv(r),r.headers=sa.from(r.headers),r.data=gv.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),rL.getAdapter(r.adapter||Ey.adapter)(r).then(function(g){return bv(r),g.data=gv.call(r,r.transformResponse,g),g.headers=sa.from(g.headers),g},function(g){return zE(g)||(bv(r),g&&g.response&&(g.response.data=gv.call(r,r.transformResponse,g.response),g.response.headers=sa.from(g.response.headers))),Promise.reject(g)})}const T1=r=>r instanceof sa?r.toJSON():r;function kp(r,l){l=l||{};const h={};function g(S,P,N){return De.isPlainObject(S)&&De.isPlainObject(P)?De.merge.call({caseless:N},S,P):De.isPlainObject(P)?De.merge({},P):De.isArray(P)?P.slice():P}function m(S,P,N){if(De.isUndefined(P)){if(!De.isUndefined(S))return g(void 0,S,N)}else return g(S,P,N)}function C(S,P){if(!De.isUndefined(P))return g(void 0,P)}function _(S,P){if(De.isUndefined(P)){if(!De.isUndefined(S))return g(void 0,S)}else return g(void 0,P)}function v(S,P,N){if(N in l)return g(S,P);if(N in r)return g(void 0,S)}const y={url:C,method:C,data:C,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:v,headers:(S,P)=>m(T1(S),T1(P),!0)};return De.forEach(Object.keys(r).concat(Object.keys(l)),function(P){const N=y[P]||m,M=N(r[P],l[P],P);De.isUndefined(M)&&N!==v||(h[P]=M)}),h}const FE="1.2.0",Dy={};["object","boolean","number","function","string","symbol"].forEach((r,l)=>{Dy[r]=function(g){return typeof g===r||"a"+(l<1?"n ":" ")+r}});const S1={};Dy.transitional=function(l,h,g){function m(C,_){return"[Axios v"+FE+"] Transitional option '"+C+"'"+_+(g?". "+g:"")}return(C,_,v)=>{if(l===!1)throw new tn(m(_," has been removed"+(h?" in "+h:"")),tn.ERR_DEPRECATED);return h&&!S1[_]&&(S1[_]=!0,console.warn(m(_," has been deprecated since v"+h+" and will be removed in the near future"))),l?l(C,_,v):!0}};function sL(r,l,h){if(typeof r!="object")throw new tn("options must be an object",tn.ERR_BAD_OPTION_VALUE);const g=Object.keys(r);let m=g.length;for(;m-- >0;){const C=g[m],_=l[C];if(_){const v=r[C],y=v===void 0||_(v,C,r);if(y!==!0)throw new tn("option "+C+" must be "+y,tn.ERR_BAD_OPTION_VALUE);continue}if(h!==!0)throw new tn("Unknown option "+C,tn.ERR_BAD_OPTION)}}const Vv={assertOptions:sL,validators:Dy},ll=Vv.validators;class zb{constructor(l){this.defaults=l,this.interceptors={request:new A1,response:new A1}}request(l,h){typeof l=="string"?(h=h||{},h.url=l):h=l||{},h=kp(this.defaults,h);const{transitional:g,paramsSerializer:m,headers:C}=h;g!==void 0&&Vv.assertOptions(g,{silentJSONParsing:ll.transitional(ll.boolean),forcedJSONParsing:ll.transitional(ll.boolean),clarifyTimeoutError:ll.transitional(ll.boolean)},!1),m!==void 0&&Vv.assertOptions(m,{encode:ll.function,serialize:ll.function},!0),h.method=(h.method||this.defaults.method||"get").toLowerCase();let _;_=C&&De.merge(C.common,C[h.method]),_&&De.forEach(["delete","get","head","post","put","patch","common"],ee=>{delete C[ee]}),h.headers=sa.concat(_,C);const v=[];let y=!0;this.interceptors.request.forEach(function(se){typeof se.runWhen=="function"&&se.runWhen(h)===!1||(y=y&&se.synchronous,v.unshift(se.fulfilled,se.rejected))});const S=[];this.interceptors.response.forEach(function(se){S.push(se.fulfilled,se.rejected)});let P,N=0,M;if(!y){const ee=[D1.bind(this),void 0];for(ee.unshift.apply(ee,v),ee.push.apply(ee,S),M=ee.length,P=Promise.resolve(h);N<M;)P=P.then(ee[N++],ee[N++]);return P}M=v.length;let F=h;for(N=0;N<M;){const ee=v[N++],se=v[N++];try{F=ee(F)}catch(we){se.call(this,we);break}}try{P=D1.call(this,F)}catch(ee){return Promise.reject(ee)}for(N=0,M=S.length;N<M;)P=P.then(S[N++],S[N++]);return P}getUri(l){l=kp(this.defaults,l);const h=jE(l.baseURL,l.url);return OE(h,l.params,l.paramsSerializer)}}De.forEach(["delete","get","head","options"],function(l){zb.prototype[l]=function(h,g){return this.request(kp(g||{},{method:l,url:h,data:(g||{}).data}))}});De.forEach(["post","put","patch"],function(l){function h(g){return function(C,_,v){return this.request(kp(v||{},{method:l,headers:g?{"Content-Type":"multipart/form-data"}:{},url:C,data:_}))}}zb.prototype[l]=h(),zb.prototype[l+"Form"]=h(!0)});const Mb=zb;class Ty{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let h;this.promise=new Promise(function(C){h=C});const g=this;this.promise.then(m=>{if(!g._listeners)return;let C=g._listeners.length;for(;C-- >0;)g._listeners[C](m);g._listeners=null}),this.promise.then=m=>{let C;const _=new Promise(v=>{g.subscribe(v),C=v}).then(m);return _.cancel=function(){g.unsubscribe(C)},_},l(function(C,_,v){g.reason||(g.reason=new Pp(C,_,v),h(g.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const h=this._listeners.indexOf(l);h!==-1&&this._listeners.splice(h,1)}static source(){let l;return{token:new Ty(function(m){l=m}),cancel:l}}}const aL=Ty;function lL(r){return function(h){return r.apply(null,h)}}function cL(r){return De.isObject(r)&&r.isAxiosError===!0}function $E(r){const l=new Mb(r),h=yE(Mb.prototype.request,l);return De.extend(h,Mb.prototype,l,{allOwnKeys:!0}),De.extend(h,l,null,{allOwnKeys:!0}),h.create=function(m){return $E(kp(r,m))},h}const Uo=$E(Ey);Uo.Axios=Mb;Uo.CanceledError=Pp;Uo.CancelToken=aL;Uo.isCancel=zE;Uo.VERSION=FE;Uo.toFormData=cw;Uo.AxiosError=tn;Uo.Cancel=Uo.CanceledError;Uo.all=function(l){return Promise.all(l)};Uo.spread=lL;Uo.isAxiosError=cL;Uo.AxiosHeaders=sa;Uo.formToJSON=r=>RE(De.isHTMLForm(r)?new FormData(r):r);Uo.default=Uo;const nn=Uo,dL={components:{HomeComponent:VB,NewsComponent:o4,JournalsComponent:N4,AwardComponent:F4,AboutComponent:W4,ContactComponent:Z4},data(){return{news:[]}},async mounted(){this.news=(await nn.get(`${Pt.domain}/api/news`)).data.data,this.news.length>2&&(this.news=this.news.slice(0,3)),this.news.map(r=>(r.content=r.content.replace(/<br>/g,"").substring(0,330)+".....",r))}};function uL(r,l,h,g,m,C){const _=nt("HomeComponent"),v=nt("NewsComponent"),y=nt("JournalsComponent"),S=nt("AwardComponent"),P=nt("AboutComponent"),N=nt("ContactComponent");return le(),he(rt,null,[ae(_),ae(v,{news:m.news},null,8,["news"]),ae(y),ae(S),ae(P),ae(N)],64)}const hL=pt(dL,[["render",uL]]),fL={},pL={class:"accordion",id:"accordionExample"};function mL(r,l,h,g,m,C){return le(),he("div",pL,[hy(r.$slots,"default")])}const hw=pt(fL,[["render",mL]]),gL={props:["heading_id","collapse_id","title"]},bL={class:"accordion-item"},wL=["id"],_L=["data-bs-target","aria-controls"],kL=["id","aria-labelledby"],vL={class:"accordion-body"};function yL(r,l,h,g,m,C){return le(),he("div",bL,[d("h2",{class:"accordion-header",id:h.heading_id},[d("button",{class:Pi(["accordion-button",h.heading_id!="headingOne"?"collapsed":""]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+h.collapse_id,"aria-expanded":"true","aria-controls":h.collapse_id},[d("strong",null,be(h.title),1)],10,_L)],8,wL),d("div",{id:h.collapse_id,class:Pi(["accordion-collapse collapse",h.heading_id=="headingOne"?"show":""]),"aria-labelledby":h.heading_id,"data-bs-parent":"#accordionExample"},[d("div",vL,[hy(r.$slots,"default")])],10,kL)])}const fw=pt(gL,[["render",yL]]);const AL={components:{AccordionComponent:hw,AccordionItemComponent:fw},methods:{downloadAuthorshipForm(){let r=`${Pt.domain}/storage/files/MANUSCRIPT SUBMISSION FORM.docx`;window.open(r)}}},In=r=>(Vt("data-v-d9dc73b0"),r=r(),Ut(),r),CL=In(()=>d("div",{class:"top-hero-image"},[d("p",null,"Our Research Publishing Policies and Ethics"),d("p",null,"Find out more about publication ethics and our policies")],-1)),xL={class:"container mb-3"},EL={class:"row"},DL={class:"col-12 p-md-5 p-3"},TL=In(()=>d("p",null,'The policy of the journals, issued by Aperier, concerning the oversight on how the ethical principles are observed is built on mutual trust of the publication process participants and hope for compulsory observance of all the publication ethics principles, described in the "Publishing policies" and "Editorial policies" of the company.',-1)),SL=In(()=>d("p",null,[j("We focus on the "),d("a",{href:"https://publicationethics.org/",target:"_blank"},"\u0421\u041E\u0420E"),j(" definition, of Ethical oversight, namely \u201CEthical oversight should include, but is not limited to, policies on consent to publication, publication on vulnerable populations, ethical conduct of research using animals, ethical conduct of research using human subjects, handling confidential data and of business/marketing practices\u201D. Based on this definition, the editorial staff of the journals works under the issue of observing the ethical principles.")],-1)),IL=In(()=>d("p",null,"The journals will be bound to consider the appeals from the Ethics and Oversight Committee for professional and scientific activity concerning the non-observance of the ethical principles by our authors. We are also ready to consider other appeals in case they are not anonymous and substantiated.",-1)),ML=In(()=>d("p",null,[j("We consider the author (co-author) of a research article as it is done by "),d("a",{href:"https://publicationethics.org/",target:"_blank"},"Committee on Publication Ethics (COPE)"),j(" , that is the person who is the creator or originator of an idea (e.g., the author of the theory of relativity) or the individual or individuals who develop and bring to fruition the product that disseminates intellectual or creative works. The status of the article writer means that this person performed the research and did not infringe the copyright and other persons' rights.")],-1)),PL=In(()=>d("p",null,[j("Aperier follows the "),d("a",{href:"https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html",target:"_blank"},"International Committee of Medical Journal Editors (ICMJE)"),j(" guidelines which state that in order to qualify for authorship of a manuscript, authors must meet all four criteria:")],-1)),NL=In(()=>d("ul",null,[d("li",null,"Substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data for the work; AND"),d("li",null,"Drafting the work or revising it critically for important intellectual content; AND"),d("li",null,"Final approval of the version to be published; AND"),d("li",null,"Agreement to be accountable for all aspects of the work in ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.")],-1)),BL=In(()=>d("p",null,"Those who contributed to the work but do not qualify for authorship should be listed in the acknowledgments. More detailed guidance on authorship is given by ICMJE.",-1)),OL=In(()=>d("p",null,"Any change to the author list during the editorial process or after publication should be approved by all authors, including any who have been removed. We reserve the right to request evidence of authorship, and changes to authorship after acceptance will be made at the discretion of Aperier.",-1)),LL=In(()=>d("strong",null,"Changes to Authorship",-1)),RL=In(()=>d("strong",null,"Deceased Authors",-1)),zL=In(()=>d("p",null,"If a manuscript is submitted with a deceased author included in the authorship, or if an author passes away during peer review, the corresponding author, or co-authors, should inform the editorial office. If the deceased author was a corresponding author, the authorship group should nominate a co-author for this role. The corresponding author should confirm the contribution of the deceased author and any potential conflicts of interest. Upon publication, a note will be added under the author list.",-1)),jL=In(()=>d("strong",null,"Author Contributions",-1)),FL=In(()=>d("p",null,[j("For complete transparency, the roles describe each author's specific contribution to the scholarly output. Not all roles can be used in the article and not all roles can be applied to all authors (that is, each author could contribute in several roles). Please refer to "),d("a",{href:"https://credit.niso.org/",target:"_blank"},"CRediT"),j(" taxonomy for an explanation of terms.")],-1)),$L=In(()=>d("p",null,"When submitting an article, the corresponding author should define the role of each author and specify the individuals or institutions, in the Acknowledgement, who have also contributed to the article but are not its authors. All submitted manuscripts should include an author contributorship statement that specifies the work of each author. For research articles with several authors, a short paragraph specifying their individual contributions must be provided.",-1)),VL=In(()=>d("p",null,"The corresponding author should act as a point of contact between the editor and the other authors, keep co-authors informed, and involve them in major decisions about the publication.",-1)),UL=In(()=>d("p",null,"The following statements should be used: Conceptualization, X.X. and Y.Y.; methodology, X.X.; software, X.X.; validation, X.X., Y.Y. and Z.Z.; formal analysis, X.X.; investigation, X.X.; resources, X.X.; data curation, X.X.; writing\u2014original draft preparation, X.X.; writing\u2014review and editing, X.X.; visualization, X.X.; supervision, X.X.; project administration, X.X.; funding acquisition, Y.Y. All authors have read and agreed to the published version of the manuscript.",-1)),HL=In(()=>d("p",null,"We kindly hope that when you send an article to the editors of our journals, all those who have really contributed to its preparation will be taken into account and there will be no persons unrelated to its scientific content. We also hope that there will be no persons among the article writers who would like to claim authorship using authority over the true authors, who financed the results generation or sponsored \u0410\u0420\u0421 payment, who promised to include the true authors in their future article or made this earlier and claim now to compensation. If the results presented in the article were received with the someone's financial support, then the authors should disclose funding sources directly by pointing them at the end of the article.",-1)),qL=In(()=>d("p",null,[j("Aperier publishes all its journals in full open access, meaning unlimited use and reuse of articles, in addition to giving credit to the authors. All of our articles are published under a "),d("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}," addition to giving credit to the authors. All of our articles are published under a Creative Commons (CC BY) license addition to giving credit to the authors. All of our articles are published under a "),j(". Article processing charge (APC) is paid only after the manuscript had been reviewed and accepted for publication. APC covers the costs of the publishing process, including peer-review administration, copy editing, hosting the files, etc. APC varies for each journal and detailed information can be found on concrete journal's page."),d("br"),j("Currently, all APCs are covered by the Aperier publishing, so there are no publication charges for authors whose work is accepted for publication in Aperier Journals."),d("br"),d("br"),j("FREE OF CHARGES")],-1)),WL=In(()=>d("p",null,[j("Author's rights to the contents of the article are determined depending on whether article is published in open-access or as subscription article."),d("br"),j("All articles published by MDPI are made immediately available worldwide under an open access license. This means:"),d("br"),j("everyone has free and unlimited access to the full-text of all articles published in MDPI journals;"),d("br"),j("everyone is free to re-use the published material if proper accreditation/citation of the original publication is given;"),d("br"),j("Open access articles are committed to be published under Creative Commons Attribution (CC BY) 4.0. This license allows others to distribute, edit, correct and build upon your work, even commercially, as long as they indicate your authorship. Detailed information at Creative Commons site: https://creativecommons.org/licenses/by/4.0/"),d("br"),d("br"),d("strong",null,"Permissions"),d("br"),j("No special permission is required to reuse all or part of article published by Aperier, including figures and tables. For articles published under an open access Creative Common CC BY license, any part of the article may be reused without permission provided that the original article is clearly cited. Reuse of an article does not imply endorsement by the authors or Aperier.")],-1)),GL=In(()=>d("p",null,"We adhere to the guidelines set forth in the joint statement of the International Publishers Association (IPA) and the International Federation of Library Associations (IFLA) on the withdrawal of journal articles from the internet. These explicitly state that a publication may only be deleted from a publisher's database if it:\xA0",-1)),KL=In(()=>d("ul",null,[d("li",null,"Violates professional ethical standards, such as by violating the privacy of a study subject.\xA0 "),d("li",null,"A legal controversy exists.\xA0"),d("li",null,"Includes locating erroneous or incorrect information that, if used, poses a significant health risk. ")],-1)),YL=In(()=>d("p",null,"Where feasible, we keep the relevant bibliographical citation for the deleted information (unless subject to legal dispute).\xA0",-1)),QL=In(()=>d("span",null,[d("strong",null,"Correction Notices")],-1)),ZL=In(()=>d("p",null,'\xA0Since the version of record cannot be altered to reflect changes, such as new author affiliations or new discoveries, all published research is essentially a "snapshot" of a certain point in time.\xA0',-1)),JL=In(()=>d("p",null,"However, we acknowledge that mistakes might occasionally occur during the stages of research, writing, and publication. We can introduce one of the following corrective messages when these problems occur.\xA0",-1)),XL=In(()=>d("ul",null,[d("li",null,"Erratum: This term often refers to a manufacturing error that was discovered after publication. If an erratum is published, it will be noted in the abstract of the paper's online version as well as in the printed edition of the journal's subsequent volume or issue.\xA0"),d("li",null,"Name of author corrections; Aperier is dedicated to inclusion, diversity, and equality. Aperier is putting into effect an author name change policy as part of this. For whatever reason (including religious conversion, marriage, gender identity change, or divorce), if Aperier gets a request from an author seeking to alter their name on a published piece, we will do it right away. While we won't inquire about further information or the cause for the name change, there are situations when we may need additional details (such the article reference) in order to perform the change successfully. We will try our best to change the name and, if necessary, any pronouns throughout the post.")],-1)),e3=In(()=>d("p",null,[j("Authors should ensure that where material is taken from other sources (including their own published writing), the source is clearly cited and that where appropriate permission is obtained."),d("br"),j("Authors should not engage in excessive self-citation of their own work."),d("br"),j("Authors should not copy references from other publications if they have not read the cited work."),d("br"),j("Authors should not preferentially cite their own or their friends\u2019, peers\u2019, or institution\u2019s publications."),d("br"),j("Authors should not cite advertisements or advertorial material."),d("br"),j("In accordance with COPE guidelines, we expect that \u201Coriginal wording taken directly from publications by other researchers should appear in quotation marks with the appropriate citations\u201D. This condition also applies to an author\u2019s own work. COPE have produced a discussion document on citation manipulation with recommendations for best practice. ")],-1));function t3(r,l,h,g,m,C){const _=nt("AccordionItemComponent"),v=nt("AccordionComponent");return le(),he(rt,null,[CL,d("div",xL,[d("div",EL,[d("div",DL,[ae(v,null,{default:je(()=>[ae(_,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Ethical Oversight"},{default:je(()=>[TL,SL,IL]),_:1}),ae(_,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Authorship"},{default:je(()=>[ML,PL,NL,BL,OL,LL,d("p",null,[j("Authors are expected to carefully consider authorship before manuscript submission. Any change to the author list should be made during the editorial process, before manuscript acceptance. Authorship changes, including any addition, removal, or rearrangement of author names will require the approval of all authors including any to be removed. To request any change in authorship, the journal must receive a completed "),d("span",{class:"text-primary",onClick:l[0]||(l[0]=y=>C.downloadAuthorshipForm())},"AUTHORSHIP CHANGE FORM"),j(" that includes the signatures of all authors, and provides a reason for the change. Any changes to authorship requested after manuscript acceptance will result in a delay in publication. If the manuscript has already been published, requests for a change in authorship will be evaluated and require the publication of a Correction. We reserve the right to request evidence of authorship, and changes to authorship after acceptance will be made at the discretion of Aperier. ")]),RL,zL,jL,FL,$L,VL,UL,HL]),_:1}),ae(_,{heading_id:"headingThree",collapse_id:"collapseThree",title:"Article Processing Charge"},{default:je(()=>[qL]),_:1}),ae(_,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Copyright and Permissions"},{default:je(()=>[WL]),_:1}),ae(_,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Article Withdrawal & Correction"},{default:je(()=>[GL,KL,YL,QL,ZL,JL,XL]),_:1}),ae(_,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Citation Policies"},{default:je(()=>[e3]),_:1})]),_:1})])])])],64)}const n3=pt(AL,[["render",t3],["__scopeId","data-v-d9dc73b0"]]);const o3={components:{AccordionComponent:hw,AccordionItemComponent:fw}},ha=r=>(Vt("data-v-9657287b"),r=r(),Ut(),r),i3=ha(()=>d("div",{class:"top-hero-image"},[d("span",null,"Our Editorial policies "),d("span",{class:"text-center w-100"},"Find out more about editorial and review policies")],-1)),r3={class:"container mb-3"},s3={class:"row"},a3={class:"col-12 p-md-5 p-3"},l3=ha(()=>d("p",null,[j("\u201CBusiness Perspectives\u201D issues the journals, founded by the universities and organizations, and where the company itself is a founder. At the same time the \u201CEditorial policies\u201D are equal and independent for all the journals without exception."),d("br"),d("br"),j("Journal\u2019s management works closely with the publisher based on clear assignment of duties and responsibility following the defined \u201CPublishing policies\u201D."),d("br"),d("br"),j("We understand \u201C\u0435ditorial independence\u201D as full freedom of journals\u2019 editors when making decisions on whether or not to publish, as well as make corrections in the papers or withdraw them, only based on their scientific value and without intervention of the founders and the publisher of this journal, the authors and their sponsors, any other institutions and persons. Also these institutions or persons cannot affect the timelines of papers\u2019 publication."),d("br"),d("br"),j("Not any commercial interests can be of priority over the policy of creating high-quality reviewed journals and cannot be considered in the journal."),d("br"),d("br"),j("Pursuing the independent editorial policies by the editors and members of the Editorial boards cannot be a reason for their dismissal or replacement. The journals\u2019 editors obtain the unconditional right to publish the editorial paper with the aim to promote their voice concerning the journal\u2019s editorial policy as a whole and defining the opinion in every certain case to the academic circles. The publisher has no right to judge the editor\u2019s wish to express their opinion on this matter in mass media and on the Internet. The founders and employees of the publishing company cannot comment the decisions of journals\u2019 Editorial boards anywhere and under any conditions."),d("br"),d("br"),j("Under any conditions, not any founder of the company \u201CBusiness Perspectives\u201D and its employees cannot be the editors or reviewers in the journals it publishes. Now it is established that the \u201CBusiness Perspectives\u201D founders cannot submit their manuscripts for publication in the journals the company publishes."),d("br"),d("br"),j("All the decisions of the Editorial boards are made independently, without any external pressure or influence, and are fully independent from the publisher and any other persons. The journals operate in compliance with the Code of Conduct for Journal Publishers.")],-1)),c3=ha(()=>d("p",null,[j("The Editorial Board consists of international experts in their fields. All members of the Board occupy the positions in educational and research institutions. The roles of the Editorial Board members are the following:"),d("br"),d("br"),j("provide expertise in definite research field;"),d("br"),j("judge the submitted manuscripts and involve in the process independent reviewers;"),d("br"),j("advise on journal policy and scope and participate in the journal development;"),d("br"),j("propose subject definition and conference choice for special issues. Also, editorial members may be guest editors of special issue;"),d("br"),j("promote the journal at conferences, seminars, workshops, and relevant public events;"),d("br"),j("attract new potential authors."),d("br"),j("Guest editors play a vital role in ensuring the quality of special content publications, such as Special Issues. Guest editors overlook the process, from proposal to publication."),d("br"),d("br"),j("The Editorial Board is reviewed every two years, which means exclusion of inactive members and addition of the new ones."),d("br"),d("br"),j("We appreciate applications from the editorial candidates. To submit an application, please send an e-mail to a Managing Editor of the selected journal and attach a file with your CV (containing the current place of work, occupation, education, the scope of your scientific interest, types of activity, list of publications, list of the journals in which you occupy the positions of an editor or a reviewer, e-mail for contact and a link to personal page at you university)."),d("br"),d("br"),j("Duties of editors"),d("br"),j("We strongly recommend that Editors get acquainted with and follow COPE Core practices."),d("br"),d("br"),j("The editors of the journal are responsible for deciding which of the articles submitted to the journal will be published. The editor may confer with the members of the Editorial Board in making this decision."),d("br"),d("br"),j("Fair play. The editors evaluate manuscripts without regard to the nature of the authors or the host institution including race, gender, religious belief, ethnic origin, citizenship, or political philosophy of the authors."),d("br"),d("br"),j("Confidentiality. The editors, members of the Editorial Boards, and any editorial staff must not disclose any information about a submitted manuscript to anyone except the authors of the paper, reviewers, potential reviewers, and the publisher, for appropriate reasons."),d("br"),d("br"),j("Disclosure. Unpublished materials disclosed in a submitted paper should not be used in the own research of the editors or the members of the Editorial Board without the express written consent of the author."),d("br"),d("br"),j("Guidelines for Reviewers"),d("br"),j("LLC \u201CCPC \u201CBusiness Perspectives\u201D clearly understands the importance of an effective peer review process when authors choose to submit their manuscripts to one of our journals. We try hard to establish and sustain peer-review integrity on every journal and a vital part of this means ensuring that reviewers have the appropriate resources to carry out their work as efficiently and effectively as possible. The reviewing process varies from journal to journal, but this guide serves as an overview of what\u2019s involved when becoming a reviewer with LLC \u201CCPC \u201CBusiness Perspectives\u201D."),d("br"),d("br"),j("We strongly recommend that our reviewers are familiar with and follow COPE Ethical Guidelines for Peer Reviewers."),d("br"),d("br"),j("Potential reviewers should provide personal and professional information that is accurate and a fair representation of their expertise, including verifiable and accurate contact information."),d("br"),d("br"),j("During the peer review process, Referee Report preparation, and after reviewing we expect from our reviewers following:"),d("br"),d("br"),d("strong",null,[j("1. Confidentiality"),d("br")]),j("In order to maintain the integrity of the review process, the reviewers shouldn't discuss the reviewed manuscript with anyone without specific permission from the Editor."),d("br"),j("The reviewers are welcome to solicit input from one or two colleagues in performing the review, but this should only be done with explicit permission from the Editor. In addition, colleagues\u2019 (with names and affiliations) involvement should be mentioned in the Comments to Editors section of the Referee Report."),d("br"),j("The reviewers shouldn\u2019t copy, disseminate, or share information, concerning the manuscript for any purpose (including advancement of their own research)."),d("br"),j("If any clarifications from the author/authors are needed, they should be included into the Comments section of the Referee Report.")],-1)),d3=ha(()=>d("p",null,[d("strong",null,"2. Standards of objectivity"),d("br"),j("Reviewers should be objective while conducting reviews. All the comments and recommendations should be supported with relevant arguments."),d("br"),d("br"),d("strong",null,"3. Timeliness"),d("br"),j("It is necessary to respond to an invitation to peer review within a reasonable time-frame."),d("br"),j("If the reviewers feel qualified to assess a particular manuscript, they should agree to review only in case of possibility to return a review within the proposed or mutually agreed time-frame."),d("br"),j("The reviews should be completed by the deadline indicated in invitation. If any difficulties arise that may prevent from submitting the Referee Report in time, the reviewers are obliged to contact the Handling Editor immediately.")],-1)),u3=ha(()=>d("p",null,[d("strong",null,"4. Competing interests"),d("br"),j("It is important to remain unbiased by considerations related to the nationality, religious or political beliefs, gender and/or other characteristics of the authors, origin of a manuscript or by commercial considerations."),d("br"),j("We kindly ask our reviewers to reveal any potential competing interest that may bias the review of the submitted manuscript (including any financial interest in the publication or non-publication of the manuscript; a recent or ongoing collaboration with the authors; a history of dispute with the authors)."),d("br"),j("If the reviewer is currently employed at the same institution as any of the authors or has been recent (e.g., within the past 3 years) mentors, mentees, close collaborators or joint grant holders, the invitation of the manuscript reviewing should be rejected."),d("br"),j("The reviewers should not agree to review a manuscript just to gain sight of it with no real intention of submitting a Referee Report."),d("br"),j("The reviewers are not precluded from reviewing the manuscript because of previously reviewing a version of it for another journal. However, this should be noted in the Comments to Editors section.")],-1)),h3=ha(()=>d("p",null,[j("Peer review plays a significant role in the publication of scholarly journals through assessment of validity, quality and originality of submitted manuscripts. There are three types of peer review: \u201Copen\u201D, \u201Csingle blind\u201D and \u201Cdouble blind\u201D."),d("br"),d("br"),j("The process"),d("br"),j("A corresponding author submits a manuscript and a Cover letter signed by all authors (the manuscript and the Cover letter are sent via the Manuscript Administration System). Also at this stage, authors can suggest appropriate reviewers for this manuscript and include their names and email addresses in the comments section. At the initial stage a Managing Editor checks the structure, spelling and compliance of manuscript with all submission guidelines, plagiarism, etc. If the manuscript doesn\u2019t comply with the abovementioned, then it should be rejected."),d("br"),j("At the next stage, the manuscript is passed to an Editor, who determines its potential interest for readers, importance and relevance for scientists. Also an Editor assesses correspondence of the manuscript to journal's scope, as well as its compliance with the requirements of the journal."),d("br"),j("Manuscripts that don\u2019t match these criteria, as well as scientifically poor manuscripts, should be rejected without further peer reviewing. The editors have the right to reject manuscripts at the pre-review stage; manuscripts rejected by the editors at the pre-review stage are not subject to further consideration, and the author cannot re-submit the article for consideration."),d("br"),j("If the manuscript complies with the requirements of the journal, then the Editor assigns a Handling Editor, responsible for peer review, who sends the manuscript for double blind peer review to two (usually) or more (if necessary) reviewers. The choice of peer-reviewers is based on their expertise, reputation, specific recommendations and previous experience (e.g. Ph.D. rank and relevant publications)."),d("br"),j("The invited reviewers should accept indispensable terms and conditions in order to exclude conflict of interests, confirm their competence, concerning the scope of the manuscript, and specify definite terms of reviewing. Then they decide to accept or decline the invitation. In case of declining they can recommend alternative reviewers. In case of accepting they should prepare a Referee Report. All manuscripts are double blind peer-reviewed, which means that reviewers do not possess any information about the authors\u2019 identities and vice versa. Also at this stage the author should be informed that the manuscript had been sent for double blind peer review."),d("br"),j("\xA0After reviewing, the Handling Editor examines Referee Reports and in some cases can invite an additional reviewer in order to get an extra opinion."),d("br"),j("The authors are provided with reviewers\u2019 comments (anonymously). After that the revised manuscript passes the second review by Handling Editor (also manuscripts can be re-sent to reviewers after author(s)\u2019 revision)."),d("br"),j("\xA0At the last stage Handling Editor provides the Editor with the information about the reviewing process and sends recommendations, concerning manuscript's publication. The final decision is taken by the Editor."),d("br"),j("The authors are informed about the results of reviewing. They can be provided with Referee Reports without identification of the reviewers, if needed. Authors can also appeal against editorial decision, providing their own arguments and explanations."),d("br"),j("In case of manuscript acceptance, the publication process starts. If rejected, the manuscript is sent to the author(s).")],-1)),f3=ha(()=>d("p",null,[j("Plagiarism, Data Fabrication and Image Manipulation"),d("br"),j("Plagiarism is not acceptable in Aperier journals. Plagiarism includes copying text, ideas, images, or data from another source, even from your own publications, without giving credit to the original source. Reuse of text that is copied from another source must be between quotation marks and the original source must be cited. If a study's design or the manuscript's structure or language has been inspired by previous studies, these studies must be explicitly cited. All Aperier submissions are checked for plagiarism. If plagiarism is detected during the peer review process, the manuscript may be rejected. If plagiarism is detected after publication, an investigation will take place and action taken in accordance with our policies."),d("br"),j("Image files must not be manipulated or adjusted in any way that could lead to misinterpretation of the information provided by the original image. Irregular manipulation includes 1) introduction, enhancement, moving, or removing features from the original image, 2) grouping of images that should obviously be presented separately (e.g., from different parts of the same gel, or from different gels), or 3) modifying the contrast, brightness or color balance to obscure, eliminate or enhance some information."),d("br"),j("If irregular image manipulation is identified and confirmed during the peer review process, we may reject the manuscript. If irregular image manipulation is identified and confirmed after publication, we may correct or retract the paper."),d("br"),j("Data presented must be original and not inappropriately selected, manipulated, enhanced, or fabricated. This includes 1) exclusion of data points to enhance significance of conclusions, 2) fabrication of data, 3) selection of results that support a particular conclusion at the expense of contradictory data, 4) deliberate selection of analysis tools or methods to support a particular conclusion (including p-hacking). We strongly recommend preregistration of methods and analysis.")],-1)),p3=ha(()=>d("p",null,[d("span",{style:{"white-space":"pre-wrap"}},[d("strong",null,"Conflicts of interest "),d("br"),j("It is very important for a scientific journal to be scrupulous and always adhere to the best publishing practices and principles of publication ethics (COPE). Therefore, all processes related to the review and publication of articles should be as clear and transparent as possible.\xA0"),d("br"),j("\xA0"),d("br"),j("The editorial board, journal staff, authors, editors and reviewers constantly interact at different stages of writing, processing, peer review, editing and publishing the article, and their relationship is not always easy and during which various situations may arise (that is, when a person has competing interests or loyalty caused by his obligations to several persons or organizations/university), when a person cannot give proper respect to the actual or potentially conflicting interests of both parties. A conflict of interests can be based on financial relations (such direct conflicts of interest are usually easy to identify), ideological, religious, and intellectual differences, academic gain, competition and rivalry.\xA0"),d("br"),j("\xA0"),d("br"),d("strong",null,"Authors"),j("\xA0"),d("br"),j("When submitting the manuscript, authors must exclude a possible conflict of interest or attest it to the journal by filling out the appropriate form when sending the manuscript to the journal, which excludes the possible data manipulation. The authors are fully responsible for disclosing all relationships, facts, actions, and influence of third parties that may affect their research.\xA0"),d("br"),j("\xA0"),d("br"),d("strong",null,"Reviewers"),j("\xA0"),d("br"),j("Before reviewing the manuscript, reviewers should familiarize themselves with the peer review process of the journal and with the journal itself; after that,theyd ecide about the article review, following and applying the COPE principles \xA0A Short Guide to Ethical Editing for New Editors.\xA0"),d("br"),j("\xA0"),d("br"),j("If there are circumstances, facts or actions that may affect the transparency of the article assessment, the reviewer should refuse to review the manuscript. If there is a potential conflict of interest, the reviewer should report this to a Managing Editor or a Handling Editor and consult with them.\xA0"),d("br"),j("\xA0"),d("br"),j("Reviewers should not use the article for their personal purposes and should not attract third parties without prior consultation with journals. After reviewing the article, the paper version of the manuscript must be destroyed, and the electronic version removed from the electronic media.\xA0"),d("br"),j("\xA0"),d("br"),d("strong",null,"Editorial Board Members, Editors, Journal Staff "),d("br"),j("Founders are prohibited from publishing their work in any journal published by Business Perspectives. The Managing Editor cannot publish his/her own manuscripts in the journal he/she manages. If the editor or the editorial board member is the author of the manuscript submitted to the journal, which he/she serves, then he/she cannot participate in peer review process and the decision making procedure regarding his/her own work.\xA0"),d("br"),j("\xA0"),d("br"),j("Editorial Board Members, Editors, and Managing Editor should act only in the interests of the journal, make decisions based on the work reliability and its importance for the reader; they should also protect the confidentiality of the author and reviewers (keep manuscripts and related materials and information in strict confidentiality). Editorial Board Members, Editors, and Managing Editor should not discuss and use the materials and ideas of the manuscript before publication.\xA0"),d("br"),j("\xA0"),d("br"),j("Editors who make final decisions on manuscripts should not make editorial and publication decisions if they have a conflict of interest related to manuscripts under consideration. Editorial staff should not use information obtained when working with manuscripts for private gain.\xA0"),d("br"),j("\xA0"),d("br"),d("strong",null,"Manuscript Administration System "),d("br"),j("The web CRM System \u201CManuscript Administration System\u201D (manuscript and peer review management system) absolutely excludes the possibility of involving editors, editorial board members, and reviewers in the peer review if they are authors of the manuscript under consideration.\xA0"),d("br"),j("\xA0"),d("br"),d("strong",null,"Conflict of Interests Statement "),d("br"),j("If there is a conflict of interest before the article publication, whether it has been attested by an author, a reviewer, Editorial Board members, editors, or the Managing Editor or the staff of the journal, or if there has been an information leak, then a conflict of interests statement should be published in the article; in addition, the editor may request and publish related documents so that the reader has complete information and can judge for himself the possibility and nature of the impact of the conflict of interest on the published results.")]),d("br"),j("It is very important for a scientific journal to be scrupulous and always adhere to the best publishing practices and principles of publication ethics (COPE). Therefore, all processes related to the review and publication of articles should be as clear and transparent as possible."),d("br"),d("br"),j("The editorial board, journal staff, authors, editors and reviewers constantly interact at different stages of writing, processing, peer review, editing and publishing the article, and their relationship is not always easy and during which various situations may arise (that is, when a person has competing interests or loyalty caused by his obligations to several persons or organizations/university), when a person cannot give proper respect to the actual or potentially conflicting interests of both parties. A conflict of interests can be based on financial relations (such direct conflicts of interest are usually easy to identify), ideological, religious, and intellectual differences, academic gain, competition and rivalry."),d("br"),d("br"),d("strong",null,"Authors"),d("br"),j("When submitting the manuscript, authors must exclude a possible conflict of interest or attest it to the journal by filling out the appropriate form when sending the manuscript to the journal, which excludes the possible data manipulation. The authors are fully responsible for disclosing all relationships, facts, actions, and influence of third parties that may affect their research."),d("br"),d("br"),d("strong",null,"Reviewers"),d("br"),j("Before reviewing the manuscript, reviewers should familiarize themselves with the peer review process of the journal and with the journal itself; after that,theyd ecide about the article review, following and applying the COPE principles \xA0A Short Guide to Ethical Editing for New Editors."),d("br"),d("br"),j("If there are circumstances, facts or actions that may affect the transparency of the article assessment, the reviewer should refuse to review the manuscript. If there is a potential conflict of interest, the reviewer should report this to a Managing Editor or a Handling Editor and consult with them."),d("br"),d("br"),j("Reviewers should not use the article for their personal purposes and should not attract third parties without prior consultation with journals. After reviewing the article, the paper version of the manuscript must be destroyed, and the electronic version removed from the electronic media."),d("br"),d("br"),d("strong",null,"Editorial Board Members, Editors, Journal Staff"),d("br"),j("Founders are prohibited from publishing their work in any journal published by Business Perspectives. The Managing Editor cannot publish his/her own manuscripts in the journal he/she manages. If the editor or the editorial board member is the author of the manuscript submitted to the journal, which he/she serves, then he/she cannot participate in peer review process and the decision making procedure regarding his/her own work."),d("br"),d("br"),j("Editorial Board Members, Editors, and Managing Editor should act only in the interests of the journal, make decisions based on the work reliability and its importance for the reader; they should also protect the confidentiality of the author and reviewers (keep manuscripts and related materials and information in strict confidentiality). Editorial Board Members, Editors, and Managing Editor should not discuss and use the materials and ideas of the manuscript before publication."),d("br"),d("br"),j("Editors who make final decisions on manuscripts should not make editorial and publication decisions if they have a conflict of interest related to manuscripts under consideration. Editorial staff should not use information obtained when working with manuscripts for private gain."),d("br"),d("br"),d("strong",null,"Manuscript Administration System"),d("br"),j("The web CRM System \u201CManuscript Administration System\u201D (manuscript and peer review management system) absolutely excludes the possibility of involving editors, editorial board members, and reviewers in the peer review if they are authors of the manuscript under consideration."),d("br"),d("br"),d("strong",null,"Conflict of Interests Statement"),d("br"),j("If there is a conflict of interest before the article publication, whether it has been attested by an author, a reviewer, Editorial Board members, editors, or the Managing Editor or the staff of the journal, or if there has been an information leak, then a conflict of interests statement should be published in the article; in addition, the editor may request and publish related documents so that the reader has complete information and can judge for himself the possibility and nature of the impact of the conflict of interest on the published results.")],-1)),m3=ha(()=>d("p",null,[d("br"),j("This procedure applies to complaints about the journal, its staff, editorial board or publisher, the policies, procedures, or actions of the LLC \u201CCPC \u201CBusiness Perspectives\u201D editorial staff. We welcome complaints as they provide an opportunity for improvement, and we will provide quick and constructive response. Ideally, the complaint should be addressed to the person whom it concerns. If this person is unavailable for any reason or not able to resolve the complaint, please e-mail your complaint at complaints@businessperspectives.org with clear identification of the complaint nature and source of address."),d("br"),d("br"),j("We presume that complaints should be based on failure of process (severe misjudgment, long delay or a rude response), not a simple disagreement with editorial decisions."),d("br"),d("br"),j("LLC \u201CCPC \u201CBusiness Perspectives\u201D addresses following complaints:"),d("br"),d("br"),j("Authorship complaints"),d("br"),j("Plagiarism complaints"),d("br"),j("Multiple, duplicate, concurrent publication/Simultaneous submission"),d("br"),j("Research results misappropriation and data fabrication"),d("br"),j("Allegations of research errors and fraud"),d("br"),j("Research standards violations"),d("br"),j("Undisclosed conflicts of interest"),d("br"),j("Reviewer bias or competitive harmful acts by reviewers"),d("br"),j("Complaints handling policy"),d("br"),j("If the Publisher receives a complaint that any contribution to the Journal infringes intellectual property rights or contains material inaccuracies, libelous materials or otherwise unlawful materials, we will investigate the complaint. Investigation may include a request that the parties involved substantiate their claims. The Publisher will determine whether to remove the allegedly wrongful material. If the complaint lacks sufficient foundation, the material will not be removed. Complaint investigations and decisions will be documented. Our goal is to ensure the highest quality of our journals; however, we accept that occasionally mistakes might happen."),d("br"),d("br"),j("All complaints will be acknowledged (within three working days if by email). If possible a definitive response will be made within two weeks. If this is not possible an interim response will be given within two weeks. Interim responses will be provided until the complaint is finally resolved. If the complainant remains unsatisfied, complaints will be escalated to the editor, whose decision is final.")],-1));function g3(r,l,h,g,m,C){const _=nt("AccordionItemComponent"),v=nt("AccordionComponent");return le(),he(rt,null,[i3,d("div",r3,[d("div",s3,[d("div",a3,[ae(v,null,{default:je(()=>[ae(_,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Editorial Independence "},{default:je(()=>[l3]),_:1}),ae(_,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Guidelines for Editors and Reviewers"},{default:je(()=>[c3,d3,u3]),_:1}),ae(_,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Peer Review"},{default:je(()=>[h3]),_:1}),ae(_,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Plagiarism"},{default:je(()=>[f3]),_:1}),ae(_,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Conflicts of Interest"},{default:je(()=>[p3]),_:1}),ae(_,{heading_id:"headingSeven",collapse_id:"collapseSeven",title:"Complaints Policy"},{default:je(()=>[m3]),_:1})]),_:1})])])])],64)}const b3=pt(o3,[["render",g3],["__scopeId","data-v-9657287b"]]);const w3={props:["news"],data(){return{domain:Pt.domain}}},_3=r=>(Vt("data-v-c1cf4084"),r=r(),Ut(),r),k3={class:"news-card"},v3=["src"],y3={class:"news-card-body"},A3={class:"news-title"},C3={class:"px-4"},x3=_3(()=>d("i",{class:"fa-solid fa-arrow-right bg-secondary p-2 rounded-pill text-white"},null,-1));function E3(r,l,h,g,m,C){const _=nt("router-link");return le(),he("div",k3,[d("img",{src:`/storage/upload/news/${h.news.image}`,class:"img-fluid",alt:""},null,8,v3),d("div",y3,[d("div",A3,[d("span",null,be(h.news.title),1),d("span",null,be(h.news.date),1)]),d("div",C3,[ae(_,{to:{name:"News Details",params:{id:h.news.id}}},{default:je(()=>[x3]),_:1},8,["to"])])])])}const D3=pt(w3,[["render",E3],["__scopeId","data-v-c1cf4084"]]);const T3={props:["title"],data(){return{}}},S3={class:"container-fluid"},I3={class:"section-title"},M3={class:"section-title-h2"};function P3(r,l,h,g,m,C){return le(),he("section",S3,[d("div",I3,[d("h2",M3,be(h.title),1)])])}const Np=pt(T3,[["render",P3],["__scopeId","data-v-a19abcb2"]]);const N3={components:{NewsListCardComponent:D3,SectionTitleComponent:Np},data(){return{data:[],domain:Pt.domain}},async mounted(){this.data=(await nn.get(`${Pt.domain}/api/news`)).data.data}},B3=r=>(Vt("data-v-efcf99c7"),r=r(),Ut(),r),O3=B3(()=>d("div",{class:"top-hero-image"},null,-1)),L3={class:"container p-5"},R3={class:"row g-4"};function z3(r,l,h,g,m,C){const _=nt("section-title-component"),v=nt("NewsListCardComponent");return le(),he(rt,null,[O3,ae(_,{title:"All News",class:"mt-3"}),d("div",L3,[d("div",R3,[(le(!0),he(rt,null,Mt(m.data,y=>(le(),he("div",{class:"col-12",key:y.id},[ae(v,{news:y},null,8,["news"])]))),128))])])],64)}const j3=pt(N3,[["render",z3],["__scopeId","data-v-efcf99c7"]]);const F3={data(){return{data:[],domain:Pt.domain}},async mounted(){this.data=(await nn.get(`${Pt.domain}/api/news/${this.$route.params.id}`)).data.data}},pw=r=>(Vt("data-v-3adc4409"),r=r(),Ut(),r),$3=pw(()=>d("div",{class:"top-hero-image"},null,-1)),V3={class:"container"},U3={class:"row p-5"},H3={class:"col-12"},q3={class:"news-title"},W3=pw(()=>d("br",null,null,-1)),G3=pw(()=>d("br",null,null,-1)),K3=["innerHTML"],Y3=pw(()=>d("br",null,null,-1)),Q3=["src"];function Z3(r,l,h,g,m,C){return le(),he(rt,null,[$3,d("div",V3,[d("div",U3,[d("div",H3,[d("div",q3,[d("span",null,be(m.data.title),1),d("span",null,be(m.data.date),1)]),W3,G3,d("span",{innerHTML:m.data.content},null,8,K3),Y3,d("img",{src:`${m.domain}/storage/upload/news/${m.data.image}`,class:"img-fluid",alt:""},null,8,Q3)])])])],64)}const J3=pt(F3,[["render",Z3],["__scopeId","data-v-3adc4409"]]),VE="/build/assets/Trophy.25e9c9ca.png";const X3={props:["src","title","date","id"]},UE=r=>(Vt("data-v-e5f108dc"),r=r(),Ut(),r),eR={class:"news-card"},tR=UE(()=>d("img",{src:VE,alt:""},null,-1)),nR={class:"news-card-body"},oR={class:"news-title"},iR={class:"px-4"},rR=UE(()=>d("i",{class:"fa-solid fa-arrow-right bg-secondary p-2 rounded-pill text-white"},null,-1));function sR(r,l,h,g,m,C){const _=nt("router-link");return le(),he("div",eR,[tR,d("div",nR,[d("div",oR,[d("span",null,be(h.title),1),d("span",null,be(h.date),1)]),d("div",iR,[ae(_,{to:{name:"Award Details",params:{id:h.id}}},{default:je(()=>[rR]),_:1},8,["to"])])])])}const aR=pt(X3,[["render",sR],["__scopeId","data-v-e5f108dc"]]),HE={"award-1":{id:1,title:"Outstanding Article Award \u2013 Sustainability Studies - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for publications that have a clear and important contribution to the field of sustainability. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'Editors of Sustainability studies create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]},"award-2":{id:2,title:"Travel Award \u2013 All Aperier Journals - 2024",date:"Dec 01, 2022",description:"The Travel Awards is introduced by Aperier publishing for authors who published with us, especially researchers in early stage of their academic career that have made a clear and important contribution to their field. The winners are chosen by the independent committee from all journal editorial boards will select the winners; giving the winning authors confidence in knowing that their outstanding progress and chance to broaden their network with the international research communities, as this award provides financial support for the winners to attend an international conference in the relevant field, in order to hold a presentation, present a poster, or both.",judging_process:"independent committee from all journal editorial boards will be created to determine and select the winning authors who published their work at one of Aperier journals, especially Postdoctoral fellows or PhD students. The winner will be selected on this basis.",eligibility:["Open to all career levels; especially Postdoctoral fellows or PhD students.","Plans to attend an international conference."],criteria:["Provided information of the conference that the applicant is planning to attend and the abstract that will be submitted.","Curriculum vitae and list of publications.","Justification letter describing the focus of the research (max. 800 words).","Letter of recommendation from the supervisor, research director, or department head, which also confirms the applicant\u2019s status as a postdoctoral fellow/PhD student.","His/her Social media links (for promotions purpose only)"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["Three winners: Plans to attend an international conference","Up to up to $1,000 each awardee","The winners will also receive a certificate."]},"award-3":{id:3,title:"Travel Award \u2013Outstanding Article Award \u2013 Business Studies - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for publications that have a clear and important contribution to various field of business and management. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'iEditors of Business studies create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]},"award-4":{id:4,title:"Outstanding Reviewer Awards- All Journals - 2024",date:"Dec 01, 2022",description:"Reviewers are essential to the scholarly publishing process; academics rely on peer review to verify their research and add value to it through critical engagement before publication.Reviewers are specialists in a given area of research and are well placed to assess the soundness of an author\u2019s work and share their own knowledge.",judging_process:"The editorial Board the journals select a winner of the \u2018Outstanding Reviewer Award\u2019 from the previous year\u2019s volume.",eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Timeliness of the reviews","Quality of the reviews","The depth of reviews and the amount of detail"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["There will be three winners this year, and each will receive the following: ","Up to $300 ","A certificate."]},"award-5":{id:5,title:"Travel Award \u2013Outstanding Article Award \u2013 Bibliometric and Systematic Reviews  - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for Reviews that have a clear and important contribution to field. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'Editors of Bibliometric and Systematic Reviews create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]},"award-6":{id:6,title:"Travel Award \u2013Outstanding Article Award \u2013 Tourism Studies - 2024",date:"Dec 01, 2022",description:"The Outstanding Paper Awards is introduced by Aperier publishing for Reviews that have a clear and important contribution to field. The winners are chosen by the journal editorial team giving the winning authors confidence in knowing that their paper was one of the most impressive pieces of work from the previous years.The Outstanding Articles Award seeks to honour and encourage superior contributions to academic writing and research among academics and students who have submitted complete papers and will speak at Aperier publisher. This Award is open to all fully published papers, independent of the initial authors' positions (e.g., academic, professional, educator, policymaker, etc.).",judging_process:'Editors of Bibliometric and Systematic Reviews create a separate advisory committee to determine and select the article(s) from the prior year as the " Outstanding Articles." The winner will be selected on this basis. Some publications feature other awards as well.',eligibility:["Open to all career levels;","All published Articles in Sustainability Studies will be considered."],criteria:["Research creates impact and generates real change beyond academia","Contribution of something new to the body of knowledge either in terms of approach or subject matter","Excellent structure and presentation","Well-written","Rigour in terms of argument or analysis","Relevance \u2013 to practice and further research, in most cases","Up-to-date \u2013 demonstrating that the latest/key works in the field have been cited"],criteria_text:"Ultimately, an outstanding paper will be promoted by the publisher, which would make it stand out from the rest.",prize:["The winning paper: $500 ","The winners will also receive a certificate."]}};const lR={components:{AwardListCardComponent:aR,SectionTitleComponent:Np},data(){return{awardList:{}}},async mounted(){this.awardList=HE}},cR=r=>(Vt("data-v-391823fc"),r=r(),Ut(),r),dR=cR(()=>d("div",{class:"top-hero-image"},null,-1)),uR={class:"container p-5"},hR={class:"row g-4"};function fR(r,l,h,g,m,C){const _=nt("section-title-component"),v=nt("AwardListCardComponent");return le(),he(rt,null,[dR,ae(_,{title:"All Awards",class:"mt-3"}),d("div",uR,[d("div",hR,[(le(!0),he(rt,null,Mt(m.awardList,y=>(le(),he("div",{class:"col-12",key:y.id},[ae(v,{title:y.title,date:y.date,id:y.id},null,8,["title","date","id"])]))),128))])])],64)}const pR=pt(lR,[["render",fR],["__scopeId","data-v-391823fc"]]);const mR={data(){return{award:{}}},async mounted(){this.award=HE[`award-${this.$route.params.id}`]}},ci=r=>(Vt("data-v-a9d374d9"),r=r(),Ut(),r),gR=ci(()=>d("div",{class:"top-hero-image"},null,-1)),bR={class:"container"},wR={class:"row p-5"},_R={class:"col-12"},kR={class:"news-title"},vR=ci(()=>d("br",null,null,-1)),yR=ci(()=>d("br",null,null,-1)),AR=ci(()=>d("br",null,null,-1)),CR=ci(()=>d("strong",null,"The Judging Process",-1)),xR=ci(()=>d("br",null,null,-1)),ER=ci(()=>d("strong",null,"Eligibility for the Award",-1)),DR=ci(()=>d("br",null,null,-1)),TR=ci(()=>d("strong",null,"Award Winning Criteria",-1)),SR=ci(()=>d("br",null,null,-1)),IR=ci(()=>d("br",null,null,-1)),MR=ci(()=>d("strong",null,"The Prize ",-1)),PR=ci(()=>d("br",null,null,-1)),NR=ci(()=>d("br",null,null,-1)),BR=ci(()=>d("img",{src:VE,alt:""},null,-1));function OR(r,l,h,g,m,C){return le(),he(rt,null,[gR,d("div",bR,[d("div",wR,[d("div",_R,[d("div",kR,[d("span",null,be(m.award.title),1),d("span",null,be(m.award.date),1)]),vR,yR,d("p",null,be(m.award.description),1),AR,CR,d("p",null,be(m.award.judging_process),1),xR,ER,d("ul",null,[(le(!0),he(rt,null,Mt(m.award.eligibility,_=>(le(),he("li",{key:_},be(_),1))),128))]),DR,TR,d("ul",null,[(le(!0),he(rt,null,Mt(m.award.criteria,_=>(le(),he("li",{key:_},be(_),1))),128))]),SR,d("p",null,be(m.award.criteria_text),1),IR,MR,d("ul",null,[(le(!0),he(rt,null,Mt(m.award.prize,_=>(le(),he("li",{key:_},be(_),1))),128))]),PR,NR,BR])])])],64)}const LR=pt(mR,[["render",OR],["__scopeId","data-v-a9d374d9"]]);const RR={},qE=r=>(Vt("data-v-82424cf2"),r=r(),Ut(),r),zR=qE(()=>d("div",{class:"top-hero-image"},null,-1)),jR=qE(()=>d("div",{class:"container p-5"},[d("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"Condition of use")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"Privacy Policy")])]),d("div",{class:"tab-content",id:"myTabContent"},[d("div",{class:"tab-pane fade show active py-5",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},[d("p",null,[j('Please read these Terms of Use carefully (the "Terms"), as they apply to using this website ( https://aperier.com/ ) (the "Website") by you, and to using the services provided by Limited Liability Company "Consulting Publishing Company" Aperier". Having access to or using the site located at https://aperier.com/ by registering or receiving services through this site or by phone, you agree to these Terms and enter into a legally binding agreement with the Aperier ("Agreement").'),d("br"),d("br"),j('This Agreement determines the relationship between "Aperier", and you ("you", "your", "customer"). If you enter into this Agreement on behalf of a company or other legal entity, you also declare that you have the right to represent a third party and accept these terms on its behalf, therefore, the terms "you", "your" or "customer" should refer to such a subject. If you do not have such authority or if you do not agree to these terms, you must not agree to this Agreement and you cannot use https://aperier.com/ or its services. Having access to or using the Services, you agree to observe these Terms and Conditions. If you do not accept these Terms of Use, please do not use the Services.'),d("br"),d("br"),d("strong",null,"COPYRIGHT"),d("br"),j(`All content on the site is the "Aperier" intellectual property or can be used with the permission of the copyright owner, except the content under Creative Commons License. We respect the intellectual property of other people and ask our site https://aperier.com/ users to do the same. We adopted and implemented a policy on copyright law that provides for the removal of any copyright infringing material and the termination the servicing of our site and services' users that are re-infringers of intellectual property rights, including copyrights. If you believe that one of our users, by using our website and services, unlawfully violates the copyright(s) and you want to delete the material allegedly violating the copyright(s), send the following information in written form in favor of`),d("br"),j("You are personally responsible for the accuracy of this data, claiming that the information in the notice is accurate and, under penalty of perjury, that you are either the owner of the copyright that was allegedly infringed, or are authorized to act on behalf of the copyright owner."),d("br"),d("br"),j("Nothing contained in these terms should exclude the impact on any of your legitimate intellectual property rights."),d("br"),d("br"),d("strong",null,"SITE CONTENT"),d("br"),j('All information and content available on this website ("Content" as a whole) are protected by copyright and other intellectual property laws. The content and website belong to "aperier". Content is for personal and non-commercial use only. Any use of Content that is expressly unauthorized by these Terms of Use is a violation of these Terms of Use and may infringe copyrights, trademarks and other laws.'),d("br"),d("br"),j('Using the Site and all Content by you relies on "as is" condition at your own responsibility and we do not assure and do not refuse any obvious or implied warranties, representations or approvals in general with respect to the Website or Content.'),d("br"),d("br"),j('You can use or reproduce content only for personal and non-commercial use. The following actions are prohibited: (i) use of any robot or other automatic device or manual process for monitoring or copying web pages, as well as its contents, or for any other unauthorized purposes without our prior written permission; (ii) use of any device, software or routine to intervene or attempt to hamper the proper operation of the Site; (iii) decompiling, reverse designing, disassembling, or attempting to obtain the source code for the Software; or (iv) taking any measures imposing an unreasonable or disproportionate burden on the hardware and software infrastructure of https://aperier.com/ ("Forbidden Acts" as a whole).'),d("br"),d("br"),d("strong",null,"LINKS TO OTHER SITES"),d("br"),j('This site may contain links to other independent third-party websites/social networks ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for the content of such Linked Sites and do not endorse them, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.'),d("br"),d("br"),d("strong",null,"FEEDBACK"),d("br"),j('Occasionally, you may provide "Aperier" with suggestions, ideas or other feedback on the Services ("Feedback"). Both parties agree that the Publisher has such feedback and is entitled, but not obligated, to use, develop and operate it in any way, without any restrictions or to request permission from you.'),d("br"),d("br"),d("strong",null,"TERMS AND TERMINATION"),d("br"),j('The validity period for the site use is valid until "Aperier" terminates them, or until you inform "Aperier" of your decision to terminate. Your rights will automatically terminate without notice if you do not comply with any of these Terms provisions. Aperier reserves the right to suspend, terminate or modify the Service or its availability for you at any time without prior notice. Upon termination, all rights granted to you in these Service Terms will cease immediately.'),d("br"),j("Any provision of these Service Terms, directly or indirectly intended to continue the entry of these Service Terms into force after their termination or expiration, will remain."),d("br"),d("br"),d("strong",null,"DENIAL OF RESPONSIBILITY"),d("br"),j('Services are provided based on "as is" condition, without warranty of any kind, either obvious or implied, including, but not limited to, implied warranties of reliability, availability, or applicability for a particular purpose. You are responsible for all the risks associated with the results or performance of the services you offer. In no circumstances, Aperier will be liable for any damages, including, but not limited to, lost profits, lost savings or other incidental or consequential damages arising from the use/inability to use these services, even if the Publisher has been informed of the possibility of such damage. The terms of these sections apply to the fullest extent permitted by law in the applicable jurisdiction.'),d("br"),d("br"),d("strong",null,"SERVICE NOTIFICATIONS AND STATEMENTS"),d("br"),j("You agree that we may use our website, mobile applications and e-mail to provide you with important notices. You agree that we may provide you with notices in the following ways: (1) an official notice or (2) an email sent to the address specified by you, or (3) the text on the mobile phone number that you specified, (4) through other means, including phone or mail. You agree to maintain current contact information."),d("br"),d("br"),d("strong",null,[j("AMENDMENTS AND ALTERATIONS"),d("br")]),j('We may make amendments at any time, adjust or terminate any terms of this Agreement, and such changes or termination will apply at the time we publish the revised terms on the site. You can identify when this agreement was last revised, referring to the "last updated" date at the top of this agreement. Your continued use of the site or services after we have published the revised terms means your acceptance of such revised terms. No amendment or alteration of this agreement will be binding unless it is signed by our duly authorized representative in writing and is not posted on the site.'),d("br"),d("br"),d("strong",null,"FOR REGISTERED USERS"),d("br"),j("When registering, you agree to provide accurate and complete registration information. You are responsible for informing about any changes in this information. Each registration is for an individual only, unless specifically indicated otherwise on the registration page. Do not allow anyone other than you to use the registration form, using your name or password."),d("br"),d("br"),j('The Publisher grants you a non-exclusive, non-transferable, revocable, and limited right of access and use of the Website. To obtain full access and to use the Website, you must create a profile and register as a user (hereinafter referred to as the "Registered User").'),d("br"),d("br"),j("You are allowed to register only one profile per person on the Site. The profile is private, and you should not transfer it to others."),d("br"),j("You need a password to become a registered user. You choose your own password, which should be used with your email address when you log onto the Website. If you use a password to access the Service, you must not disclose your password and must take reasonable measures to ensure that your password is confidential and secure. You agree to notify Aperier immediately if you know or reasonably believe that there is an unauthorized use of your password or account or any other security breach. The Publisher is in no way responsible for any claims or losses related to the use or misuse of your password or account due to the activities of any third party beyond our control or because of your non-compliance with privacy and security."),d("br"),j('During the registration process, you must choose a user name. The username will be displayed on the Site whenever you write or comment on reviews or create custom content (see P. 2.1 below) on the Site. Therefore, you must consider whether you want to use a username according to which you can be identified by others. The user name should not (i) be offensive, (ii) contain the terms "Guest", "Admin", "* .co", "* .org", etc., or (iii) contain characteristics that belong to third parties, including the names of known persons or personal names that are not applicable to you. You guarantee that your user name will not infringe any rights (including any intellectual property rights) belonging to any third party and/or relating to the Terms of Use.'),d("br"),j("Only we can change the username. If you want to change your username, please contact us at"),d("br"),j("We may at any time, without prior notice and without prejudice, remove, suspend or change your profile in the event of your violation or alleged violation of these User Terms or applicable law. If you delete your profile, you will no longer have access to the Site services that require your registration and/or registration as a registered user."),d("br"),j("When deleting your profile, we reserve the right to delete the user-generated content that you create on the website."),d("br"),j("In addition, we reserve the right to delete your profile and user generated content at any time and without notice or explanation. In this case, our disclaimer is applied without limitations."),d("br"),j("You are not allowed to access or attempt to access parts of the Site that require the user to register, unless you are a registered user."),d("br"),d("br"),d("strong",null,"MISCELLANEOUS"),d("br"),j("We do not declare that the Services are suitable or available for use in your region, and access to them from places where their content is illegal is prohibited. If you decide to gain access to this site from such places, you do this at your own initiative and are responsible for compliance with local laws. These Terms of Service constitute the entire agreement between us and supersede any offers or preliminary agreements, whether verbal or written and any other communication between us relating to the subject matter of these Service Terms. We reserve the right, at our own discretion, to update or revise these Service Terms. Please check the Terms of Use occasionally. Your continued use of the Services after the publication of any changes to the Terms of Service means these changes' acceptance. Please note that through the Services you agree that you are entering into a legally binding agreement (even if you are using the Services on behalf of the company). You acknowledge that you have read these Service Terms and agree to abide by its terms and conditions.\xA0")])]),d("div",{class:"tab-pane fade py-5",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},[d("p",null,[d("strong",null,"Who are we?"),d("br"),j("We collect and use personal data for the effective work and provide you with the best experience in our services. We use only your personal data, where we have a proper legal basis for this."),d("br"),j("We do not sell, provide or rent your personal data to advertisers, marketers or spammers."),d("br"),j("We save your personal data only as long as we need it to provide you with our services and fulfill the purposes described in this Privacy Policy."),d("br"),j("If you provide us with personal details on your customers, this information is considered confidential and will only be used if necessary to provide the services that you have purchased. We will not share this information with third parties, including advertisers, marketers or spammers."),d("br"),j("We take your personal data security seriously and apply industry-specific warranties to protect any personal data stored in our systems."),d("br"),j("We use cookies to understand how visitors use our site, but we never sell or share this information with third parties."),d("br"),j("We are not responsible for the privacy practices of any sites linked to our site if they are not controlled or do not belong to Business Perspectives under the right of ownership. Be careful when visiting any other websites."),d("br"),j("We would like to send you information and updates by e-mail, but you can refuse to receive this information at any time. We will request your prior consent if necessary in accordance with the legislation of the country in which you are located."),d("br"),j("This Privacy Policy is legally binding and may be updated from time to time."),d("br"),j("If you have any questions about this Privacy Policy, please contact us:"),d("br"),j("Data collection/information disclosure policy"),d("br"),j("To the extent permitted by the existing legislation, we collect information about you and any other party whose data you provide to us when you:"),d("br"),d("br"),j("register to use our websites, applications or services (including free trials); this may include your name (including your company name), address, email address and phone number. We can also ask you to provide additional information about your business and your preferences;"),d("br"),j("place an order using our websites, applications or services; this may include your name (including the business name), address, contact (including phone number and e-mail address) and payment details;"),d("br"),j("fill in online forms (including callback requests), participate in surveys, place announcement on our boards, place any blogs, enter any contests or prize drawings, upload information such as official documents or other publications, or participate in any other interactive areas on our website or within our application or service;"),d("br"),j("interact with us through social networks;"),d("br"),j("provide us with your contact details when registering or using any of the websites, applications or services that we provide, or when you update this information; and"),d("br"),j("contact us off-line, for example, by phone, fax, SMS, email or by mail."),d("br"),j("We also collect your data when you only partially fill out and/or leave any information entered on our website and/or other online forms and you can use this information to remind you to give any available information and/or for marketing purposes."),d("br"),d("br"),j("We also collect information from your devices (including mobile devices) and applications that you or your users use to access and use any of our websites, applications or services (for example, we can collect identification number and device type, location information and data about the connection such as your page views statistics, traffic to/from sites, referral URL, ad data, your IP address, browsing history and your web log data), and we ask you for permission before we do it."),d("br"),d("br"),j("We can do this through cookies or similar technologies. The company will not disclose personal information about any person other than as specified in this Privacy Policy. This applies to information about our customers and the information that our customers provide to us. We disclose information that we, in good faith, consider it advisable to cooperate while investigating fraud or other illegal activities, investigate violations of our Terms of Use and/or protect our right, protect your safety and the safety of other people."),d("br"),d("br"),j("We disclose information in response to a request for summons, warrant, order of the court, recovery, disposal of a court-appointed recipient or other comparable litigation, including agendas from individuals in the civil proceedings."),d("br"),d("br"),j("We disclose information to your agent or legal representative (for example, the holder of the letter of attorney you provide or the guardian appointed by you)."),d("br"),d("br"),j("To implement our Services, we may need to publish your Personal Data to publish reviews, notices on social networking sites, etc. For example, we may need to disclose your name on the website to publish an article review. We will do this with your permission for a specific target."),d("br"),d("br"),j("Unless otherwise provided in the written agreement, we collect, store and process your personal data on servers located in Ukraine. Due to the unpredictable nature of Internet routing, your information can pass through other countries when you transit to our servers."),d("br"),d("br"),d("strong",null,"Information security"),d("br"),j("To the extent permitted by the current legislation, we use your information to:"),d("br"),d("br"),j("provide any information and services you requested or any applications or services you ordered;"),d("br"),j("compare information for the purpose of accuracy and check it with third parties;"),d("br"),j("provide, maintain, protect and improve any applications, products, services and information that you have requested;"),d("br"),j("manage and administer your use of the applications, products and services you requested;"),d("br"),j("manage the relationship between us (for example, customer service and support activities);"),d("br"),j("monitor, measure, improve and protect our content, website, applications and services and provide you with enhanced personal experience of users;"),d("br"),j("conduct internal testing of our website, applications, systems and services to verify and improve their security and performance, in which case we will rename any information used for such purposes and make sure that it is displayed only at aggregated levels, which will not be tied to you or to any individual;"),d("br"),j("provide you with any information we are required to send to you according to our regulatory or legal obligations;"),d("br"),j("identify, prevent, investigate or eliminate committed crimes, illegal or prohibited activities or protect our legal rights in any other way (including communication with regulators and law enforcement agencies);"),d("br"),j("contact us to find out if you want to participate in our customer research (for example, comments on using our applications, products and services);"),d("br"),j("monitor, perform statistical analysis and benchmarking, provided that in such circumstances it is not bounded to you or to any individual on an aggregated basis;"),d("br"),j("provide targeted advertising, marketing (including messaging in products) or information that you may find useful, based on the use of our applications and services;"),d("br"),j("provide joint content and services to third parties you cooperate separately (for example, social network providers); and"),d("br"),j("provide you with location-based services (for example, advertising and other personalized content) where we collect location data."),d("br"),j("To the extent permitted by the current legislation, we retain information about you after you close your Business Perspectives account. This information will be stored and used as long as it is permitted for legal, regulatory, fraud prevention and legitimate business purposes."),d("br"),d("br"),j("Your personal information security is important to us. If you provide confidential information, such as a credit card number, we encrypt this information in our registration form or order using secure socket level technology. Business Perspectives undertakes to process your customer information with high standards of information security."),d("br"),d("br"),j('We store the personal data provided by you and hold it by the "firewall". It is accessible only to those who need to know this information and who have special access rights to our production systems. We support physical, electronic and procedural safeguards that comply with state regulations to protect your non-public personal information.'),d("br"),d("br"),j("We will make every reasonable effort to protect your information, but no system can prevent all malicious attacks on our system or the widely used Internet protocols or software."),d("br"),d("br"),j("Your account security also depends on your password protection. You are responsible for maintaining your password security. You are solely responsible for any actions occurring in your account."),d("br"),d("br"),j("If for any reason you share your password with a third party, the third party will have access to your account and your personal data, and you can be held responsible for the actions taken with your password use."),d("br"),d("br"),j("If you believe that someone else has access to your password, change it immediately by logging into your account on the site and changing your profile settings. If you believe that unauthorized access has already occurred, report this immediately to"),d("br"),j("Data science"),d("br"),j("We can use the information created and stored during the use of our services for our legitimate business interests so that we can provide you with the best service and/or solutions and best practices. These objectives include:"),d("br"),d("br"),j("delivering advertising, marketing (including messaging in products) or information that you might find useful, based on your use of the services;"),d("br"),j("conducting research and development to improve our services, products and applications;"),d("br"),j("developing and providing new functionalities and services (including statistical analysis, benchmarking and forecasting); and"),d("br"),j("providing you with location-based services (for example, a relevant location) where we collect location data to provide relevant experience."),d("br"),j("Information we share"),d("br"),j("We can share the information that you provide to companies that are linked through the Business Perspectives joint ownership. We also can share personal information that we and our publishers receive. We share personal information with third parties who perform services on our behalf. For example, when making a purchase we can share information about you and your transaction with other companies to process your transaction. In addition, we can retain third-party service providers to manage our customers' databases or distribute proposals by email."),d("br"),d("br"),j("Our site can contain blogs, forums and discussion groups. Remember that some or all of the information you provide (including personal information) may be publicly available due to these actions."),d("br"),d("br"),j("We may also disclose information about you (i) if we are required to do that by law, regulation or litigation (for example, a court order or request for summons), (ii) in response to requests from government authorities, for example, law enforcement agencies, or (iii) when we believe that the information disclosure is necessary to prevent physical harm or financial loss or due to the investigation of expected or actual illegal activities. We reserve the right to transfer any information about you in the event of the sale or transfer of all or part of our activities or assets (including reorganization or liquidation)."),d("br"),d("br"),j("Your information and your rights"),d("br"),j("You have the following rights:"),d("br"),d("br"),j("the right to know how we use your data and access your information;"),d("br"),j("the right to delete your information or restrict your data processing;"),d("br"),j("the right to be against your data processing, for example, for the purposes of direct marketing or when processing is based on our legitimate interests;"),d("br"),j('the right to have any information provided on an automated basis returned to you in a structured, commonly used and machine-readable format or sent directly to another company where it is technically feasible ("data portability");'),d("br"),j("when your information processing is based on your consent, the right to withdraw this consent in accordance with legal or contractual restrictions;"),d("br"),j("the right to oppose any decisions based on the automated processing of your personal data, including profiling."),d("br"),j("If we store any information about you that is incorrect or if there are any changes in your data, please let us know so that we can keep our records accurate and up-to-date."),d("br"),d("br"),j("If you withdraw your consent to the use of your personal information for the purposes set out in our Privacy Notice, we will not be able to grant you access to all or parts of our website, applications or services."),d("br"),d("br"),j("We will keep your personal information for our business relationship time, and then until it is necessary and relevant for our legitimate business purposes, in accordance with the policy of storage, labeling and cancellation of the group or in any other way authorized by the existing laws and regulatory acts. When we no longer need your personal information, we will dispose of it in a safe manner (without your notice)."),d("br"),d("br"),j("Changes to our Privacy Notice"),d("br"),j("We may change this Privacy Notice from time to time. However, we will not diminish your rights in accordance with this Privacy Notice. We will always update this Privacy Notice on our website, so please try to read it when you visit the website (the last updated link informs you when we last updated this Privacy Notice).")])])])],-1));function FR(r,l,h,g,m,C){return le(),he(rt,null,[zR,jR],64)}const $R=pt(RR,[["render",FR],["__scopeId","data-v-82424cf2"]]);const VR={props:["title","author","tag","volume","issue","page","downloads","views"]},UR={class:"issue-card"},HR={class:"issue-card-title"},qR={class:"issue-stats"},WR={class:"issue-stat-left"},GR={class:"issue-stat-right"};function KR(r,l,h,g,m,C){return le(),he("div",UR,[d("span",HR,be(h.title),1),d("span",null,be(h.author),1),d("div",qR,[d("div",WR,[d("span",null,be(h.tag),1),d("span",null,be(h.volume),1),d("span",null,be(h.issue),1),d("span",null,be(h.page),1)]),d("div",GR,[d("span",null,be(h.downloads),1),d("span",null,be(h.views),1)])])])}const WE=pt(VR,[["render",KR],["__scopeId","data-v-7e75ade8"]]),YR={"journal-1":{home:{general_information:"This is an open access journal and peer-reviewed.Sustainability Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of sustainabiltiy. Papers must address issues associated with the sustainability aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2019-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"10",publication_acceptance:"4",downloads:"4,409 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of sustainability issues around the globe. In addition to publishing original research and analyses, Sustainability Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with sustainability science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to sustainability. As a problem-driven discipline, sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others. At the same time it tries to investigate root causes of problems by uncovering new knowledge or combining current knowledge from more than one discipline in a holistic way to enhance understanding of sustainability.",key_topic_text:"sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others;",key_topics:["Sustainable Development","Sustainable Development Goals","Corporate Sustainability","Poverty","Corporate Environmental Management","Corporate Social Responsibility","Climate Change, Decent Work","Sustainable Production","Sustainable Consumption","Sustainable Communities "],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Saleh F. A. Khatib"],in_board:["Mohammad Amin Makarem","Sukanya Chakraborty","Youssef Said Bazeen","Annisa Dina Amalia","Claire Xin Hui Su"],in_managing:["Fatin Izzati Jaidil"],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the SS@aperier.com"},contact_us:{in_chief:["Saleh F. A. Khatib- Malaysia","f1991@graduate.utm.my"],in_managing:["ss@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-2":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Sustainability Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of sustainabiltiy. Papers must address issues associated with the sustainability aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2020-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"12",publication_acceptance:"5",downloads:"3,102 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of business issues around the globe. In addition to publishing original research and analyses, Business Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with business science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to business administration and cross-functional, multidisciplinary research that reflects the complex character of business problems. Of particular interest are articles devoted to developing novel perspectives or exploring new domains of research. This journal is not tied to any particular subfield, type of analysis, or national context.It tries to investigate root causes of problems by uncovering new knowledge or combining current knowledge from more than one discipline in a holistic way to enhance understanding of business.",key_topic_text:"Business science is concerned with addressing practical challenges caused by several issues, among others;",key_topics:["Global Political and Economic Environment","Strategic Management","Finance and Accounting","Industrial Marketing","Organizational Behavior","Cross-Cultural Management","Leadership","Human Resources Management","Ethics, Social Responsibility and Sustainability","Innovation, Technology and Entrepreneurship","Business Law","Business History"],readership:"Policy makers in central and local government \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Ali Shariff Kabara"],in_board:["Mohammad Sidik Nugraha","Amira Diyana Mohd Rosly"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the BS@aperier.com"},contact_us:{in_chief:["Ali Shariff Kabara","alishariff080@gmail.com"],in_managing:["bs@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-3":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Bibliometric and Systematic Reviews is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of various topics. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"10",publication_acceptance:"4",downloads:"4,409 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of sustainability issues around the globe. In addition to publishing original research and analyses, Sustainability Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with scientific research.Our aim is to encourage researchers to publish their reviews that encompasses all aspects of the design, conduct and reporting of systematic reviews. The journal publishes high quality review products including systematic review protocols, systematic reviews related to a very broad definition of social and applied sciences, rapid reviews, updates of already completed systematic reviews, and methods research related to the science of systematic reviews, such as decision modelling. The journal also aims to ensure that the results of all well-conducted systematic reviews are published, regardless of their outcome.The journal aimed to facilitate the research in all fields of life until the systematic methods have been applied.",key_topic_text:"This journal has a growing list of editorial topic areas, including: ",key_topics:["Business and Management","Climate Solutions","Crime and Justice","Disability","Education; ","International Development","Knowledge Translation and Implementation","Methods","Nutrition and Food Security","Sexual Orientation and Gender Identity","Social Welfare","Training","Sustainable Development Goals","Sustainability"],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Alhamzah F. Abbas"],in_board:["Adam Adiyatma","Desy Trilistyoati","Muhammad Andhika","Thirumagal Jayaraman","Ejaz Ahmed Chaudhary"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the SBR@aperier.com"},contact_us:{in_chief:["Alhamzah F. Abbas","alhamza.fadil@gmail.com"],in_managing:["bsr@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-4":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Marketing Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of marketing. Papers must address issues associated with the marketing aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"7",publication_acceptance:"6",downloads:"1,421     (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of marketing issues around the globe. In addition to publishing original research and analyses, Marketing Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with Marketing science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to marketing. As a problem-driven discipline, marketing science is concerned with addressing practical challenges caused over time. At the same time it tries to investigate root causes of problems by uncovering new knowledge or combining current knowledge from more than one discipline in a holistic way to enhance understanding of marketing.",key_topic_text:"Marketing Studies is concerned with addressing practical challenges caused in the marketing field including;",key_topics:["Consumption and Consumer Behavior, ","Communication, ","International Marketing","Retailing, ","Trade Marketing, ","Business-to-Business Marketing, ","Market and Marketing Research, ","Pricing, ","New Product Development and more. "],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Kaukab Abid Azhar"],in_board:["Suzana Ruslan","Alhamzah F. Abbas"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the SS@aperier.com"},contact_us:{in_chief:["Kaukab Abid Azhar","kaukababidazhar@gmail.com"],in_managing:["ms@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-5":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Finance Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of finance. Papers must address issues associated with the financial aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"8",publication_acceptance:"4",downloads:"2,000 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of finance issues around the globe. In addition to publishing original research and analyses, Finance Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with finance science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to finance. ",key_topic_text:"sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others;",key_topics:["Finance science is concerned with addressing practical challenges related t","Asset Management","Asset Pricing; Banking (Efficiency, Regulation, Risk Management, Solvency)","Behavioural Finance","Capital Structure; Corporate Finance; Corporate Governance","Derivative Pricing and Hedging","Distribution Forecasting with Financial Applications","Entrepreneurial Finance","Empirical Finance","Financial Economics","Financial Markets (Alternative, Bonds, Currency, Commodity, Derivatives, Equity, Energy, Real Estate)","FinTech","Fund Management","General Equilibrium Models","High-Frequency Trading","Intermediation","International Finance","Hedge Funds","Investments","Liquidity","Market Efficiency","Market Microstructure","Mergers and Acquisitions","Networks","Performance Analysis","Political Risk","Portfolio Optimization","Regulation of Financial Markets and Institutions","Risk Management and Analysis","Systemic Risk","Term Structure Models","Venture Capita"],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Yasean Tahat"],in_board:["Swati Gupta","Prihantini Prihantini"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the fS@aperier.com"},contact_us:{in_chief:["Yasean Tahat","tahat.y@gust.edu.kw"],in_managing:["fs@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}},"journal-6":{home:{general_information:"This is an open access journal and double blind peer-reviewed.Tourism Studies is a journal published annually by Aperier publishing. Editorial cooperation with several universities around the globe is arranged through the Department of Management. This journal is an interdisciplinary publication which seeks to address and discuss ways of tourism. Papers must address issues associated with the tourism aspects. All contributions are refereed with the aim of providing the readership with high quality, original material.",type:"Journal",issn:"2018-2022",copyright_holder:"Aperier Publishing",language:"English",date:"January 1, 2022",frequency:"1 Issue per Year",first_decision:"10",publication_acceptance:"4",downloads:"4,409 (2022)",aim_scope:"This is an international journal dedicated to advancing the understanding of tourism issues around the globe. In addition to publishing original research and analyses, Tourism Studies will publish Comment, Reviews, Perspectives, Features and Correspondence from across the full range of disciplines concerned with tourism science. Our aim is to encourage researchers to publish their experimental, computational, and theoretical research relating to natural and applied sciences, engineering, economics, social sciences, and humanities in detail to promote scientific and other understanding and to permit predictions and impact assessments of global change and development related to tourism.  Its aim is to provide a platform for discussion of theoretical and empirical problems in tourism. Publications from all fields, connected with tourism such as tourism management, tourism marketing, tourism sociology, psychology in tourism, tourism geography, political sciences in tourism, mathematics, tourism statistics, tourism anthropology, culture and tourism, heritage and tourism, national identity and tourism, information technologies in tourism and others are invited.",key_topic_text:"sustainability science is concerned with addressing practical challenges caused by climate change, habitat and biodiversity loss, and poverty among others;",key_topics:["Branding and brand management","Participatory, e-commerce, and sharing business models","Operations management","Training and staff development","Networking, partnerships, and collaboration","Gender and identity","Change management","Product and service innovation","Service, delivery, quality, and recovery","Social media marketing and management","Risk, safety, security, and crisis management","Customer motivations, satisfaction, and intentions"],readership:"Policy makers in central and local government and NGOs \xB7 decision makers in business \xB7 academics \xB7 researchers \xB7 scientists and engineers"},editorial_board:{in_chief:["Ibrahim Suleiman Yahaya"],in_board:["Abdul Muhaimin Misran","Saleh F. A. Khatib"],in_managing:[],advisory:["Coming soon..."],join_board:"As a platform for global academic communication, the quality of journal has always an aspect attracting much of our attention. To ensure quality of our publication and to better serve the peers in academic circle, we now call for reviewers among professionals and experts of the world. Professionals and experts who meet the following requirements are encouraged to join in us and together, we will work hard to make a world-class academic journal. To Join us, send you up-to-date CV to the TS@aperier.com"},contact_us:{in_chief:["Ibrahim Suleiman Yahaya","iysuleiman@gmail.com"],in_managing:["ts@aperier.com"],in_publisher:["Management Office","head@aperier.com"]}}},QR="/build/assets/journal-cover.fc738ed7.png";const ZR={components:{SectionTitleComponent:Np,JournalListCardComponent:WE,AccordionComponent:hw,AccordionItemComponent:fw},data(){return{studyListPerJournal:[],journalDetails:{},data:!1}},async mounted(){await nn.get(`${Pt.domain}/api/studies-per-journal/`+this.$route.params.id).then(r=>{r=r.data,r.data.length>4?(this.studyListPerJournal.push(r.data[0]),this.studyListPerJournal.push(r.data[1]),this.studyListPerJournal.push(r.data[2]),this.studyListPerJournal.push(r.data[3])):this.studyListPerJournal=r.data}).catch(r=>{console.log(r)}),this.journalDetails=YR[`journal-${this.$route.params.id}`],this.data=!0}},ct=r=>(Vt("data-v-29d13349"),r=r(),Ut(),r),JR={class:"journal-details"},XR={class:"container-fluid"},ez={class:"row py-5 px-3"},tz=ct(()=>d("div",{class:"col-lg-2 d-none d-lg-block"},[d("img",{src:QR,class:"img-fluid",alt:""})],-1)),nz={key:0,class:"col-lg-8 col-md-8"},oz={class:"tab-content",id:"myTabContent"},iz={class:"tab-pane fade show active p-3",id:"general-information",role:"tabpanel","aria-labelledby":"general-information-tab"},rz=ct(()=>d("p",{class:"journal-details-title"},"General Information",-1)),sz={class:"journal-details-body"},az={class:"journal-stats my-5"},lz=ct(()=>d("br",null,null,-1)),cz=ct(()=>d("br",null,null,-1)),dz=ct(()=>d("br",null,null,-1)),uz=ct(()=>d("p",{class:"journal-details-title"},"Aim and Scope",-1)),hz={class:"journal-details-body"},fz=ct(()=>d("br",null,null,-1)),pz=ct(()=>d("br",null,null,-1)),mz=ct(()=>d("strong",null,"Key Topics",-1)),gz=ct(()=>d("br",null,null,-1)),bz=ct(()=>d("br",null,null,-1)),wz=ct(()=>d("strong",null,"Readership",-1)),_z=ct(()=>d("div",{class:"tab-pane fade p-3",id:"indexed",role:"tabpanel","aria-labelledby":"indexed-tab"},[d("p",{class:"journal-details-title"},"Indexing and Abstract"),d("p",{class:"journal-details-body"},[d("ul",null,[d("li",null,"Academic Resource Index"),d("li",null,"Australian Business Deans Council (B)"),d("li",null,"Carleton University journal list (Canada)"),d("li",null,"Excellence in Research for Australia (ERA)"),d("li",null,"Federation of Finnish Learned Societies (JUFO)"),d("li",null,"Journal Guide"),d("li",null,"Microsoft Academic"),d("li",null,"SciLit"),d("li",null,"Scopus"),d("li",null,"World Banking Abstracts"),d("li",null,"British Library"),d("li",null,"Electronic Journals Library (EZB)"),d("li",null,"JournalTOCs"),d("li",null,"Google Scholare "),d("li",null,"Research Gate"),d("li",null,"Scopus (Coming soon)")])])],-1)),kz=ct(()=>d("div",{class:"tab-pane fade p-3",id:"open-access",role:"tabpanel","aria-labelledby":"open-access-tab"},[d("p",{class:"journal-details-title"},"Open Access Statement"),d("p",{class:"journal-details-body"},[j(" Journal is committed to full open access for scholarly publications. All articles published by Sustainability Studies are made immediately available worldwide under an open access license. This means: "),d("br"),j(" everyone has free and unlimited access to the full-text of all articles published in MDPI journals; "),d("br"),j(" All articles are available to all users immediately upon publication (without registration on the site and embargo period). "),d("br"),j(" everyone is free to re-use the published material if proper accreditation/citation of the original publication is given; "),d("br"),j(" open access publication is supported by the authors' institutes or research funding agencies by payment of a comparatively low Article Processing Charge (APC) for accepted articles. "),d("br"),d("br"),j(' By "open access" to this [research] literature, we mean its free availability on the public internet, permitting any users to read, download, copy, distribute, print, search, or link to the full texts of these articles, crawl them for indexing, pass them as data to software, or use them for any other lawful purpose, without financial, legal, or technical barriers other than those inseparable from gaining access to the internet itself. The only constraint on reproduction and distribution and the only role for copyright in this domain should be to give authors control over the integrity of their work and the right to be properly acknowledged and cited. '),d("br"),d("br"),j(" No special permission is required to reuse all or part of article published by Sustainability Studies, including figures and tables. For articles published under an open access Creative Common CC BY license, any part of the article may be reused without permission provided that the original article is clearly cited. Reuse of an article does not imply endorsement by the authors or Aperier. "),d("br"),d("br"),j(" Benefits of the open access are: increased citation and usage; rapid publication; faster impact with permissive licenses; Lower Publishing Costs; copyright retention by the author. "),d("br"),j(" Authors are commited to publish their articles under Creative Commons licenses (CC-BY 4.0). Find detailed information in the Copyright section (Publishing Policy and Ethics). "),d("br"),d("br")])],-1)),vz=ct(()=>d("div",{class:"tab-pane fade p-3",id:"plagiarism",role:"tabpanel","aria-labelledby":"plagiarism-tab"},[d("p",{class:"journal-details-title"},"Plagiarism Statement"),d("div",{class:"journal-details-body"},[d("p",null,"All manuscripts that are being sent for an external peer review, are screened for originality. By submitting their manuscripts to the journal authors are agreeing to any necessary originality checks the manuscript may have to undergo during the publication process. The plagiarism conducted by the editorial office is combined with our knowledgeable reviewers and editors, means it\u2019s increasingly hard for plagiarised work to go unnoticed. There are various forms plagiarism can take."),d("ul",null,[d("li",null,"Re-using parts of a work without attribution - For example, using a figure, table or paragraph without acknowledgement, references or the use of quotation marks. It is your responsibility as the author to obtain the necessary permissions from the copyright holder. "),d("li",null,"Paraphrasing - More than one sentence within a paragraph or section of text has been changed, or sentences have been rearranged, without appropriate attribution. Significant improper paraphrasing without appropriate attribution is treated seriously as verbatim copying. "),d("li",null,"Verbatim copying - An exact copy of, or a significant passage or section of text taken from, another person's work without acknowledgement, references or use of quotation marks."),d("li",null,"Self-plagiarism or text recycling - You are expected to submit original content to Emerald publications. Research should only be repeated if it leads to different or new conclusions, or you want to compare it with new data. If any element of your latest submission has been published previously, you must ensure that the original work is fully referenced and make this clear to the editor or publisher at the point of submission."),d("li",null,"Handling allegations of plagiarism - A plagiarism allegation can have a serious negative effect on a researcher's career. If we are approached by a third party with an allegation of plagiarism, we always seek a response from the original author(s) or copyright holder(s) before we decide on a course of action. We remain unbiased and will not be influenced by other parties. All allegations will be handled in accordance with the COPE (Committee on Publication Ethics) guidelines.")]),d("p",null,[j("We are not obliged to discuss individual cases of alleged plagiarism with third parties, and we reserve the right not to proceed with a case if the complainant presents a false name or affiliation, or acts in an inappropriate or threatening manner towards Emerald editors and staff."),d("br"),d("br"),j("Aperier advocates adherence to the principles of ethics and integrity of science, which is why it has chosen a reliable partner in ensuring the scientific publications quality")])])],-1)),yz={class:"tab-pane fade p-3",id:"editorial",role:"tabpanel","aria-labelledby":"editorial-tab"},Az={class:"row"},Cz={class:"col-6"},xz=ct(()=>d("p",{class:"journal-details-title"},"Editorial Board",-1)),Ez={class:"journal-details-body"},Dz=ct(()=>d("span",null,"Editor-In-Chief",-1)),Tz=ct(()=>d("span",null,"Editorial Board",-1)),Sz={key:0},Iz=ct(()=>d("span",null,"Managing Editor",-1)),Mz={class:"col-6"},Pz=ct(()=>d("p",{class:"journal-details-title"},"Advisory Board",-1)),Nz={class:"journal-details-body"},Bz={class:"row my-5"},Oz=ct(()=>d("p",{class:"journal-details-title"},"Join Our Board",-1)),Lz={class:"journal-details-body"},Rz={class:"tab-pane fade p-3",id:"instruction",role:"tabpanel","aria-labelledby":"instruction-tab"},zz=ct(()=>d("p",{class:"journal-details-title"},"Instructions for Authors",-1)),jz={class:"journal-details-body"},Fz=ko("<p data-v-29d13349>Submission Checklist <br data-v-29d13349>Please: <br data-v-29d13349> \u2022 Read the Aims &amp; Scope to gain an overview and assess if your manuscript is suitable for this journal; <br data-v-29d13349> \u2022 Use the Microsoft Word template to prepare your manuscript; <br data-v-29d13349> \u2022 Make sure that issues about publication ethics, research ethics, copyright, authorship, figure formats,\xA0data and references format have been appropriately considered; <br data-v-29d13349> \u2022 Ensure that all authors have approved the content of the submitted manuscript. <br data-v-29d13349><br data-v-29d13349><strong data-v-29d13349>Editorial procedure</strong> <br data-v-29d13349>This journal follows a double-blind reviewing procedure. This means that the author will remain anonymous to the reviewers throughout peer review. <br data-v-29d13349><br data-v-29d13349><strong data-v-29d13349>Submission</strong> <br data-v-29d13349>In order to submit your paper, authors are should login and submit the manuscript through Aperier online submission system. Electronic submission substantially reduces the editorial processing and reviewing times and shortens overall publication times. Please follow the hyperlink \u201CSubmit Your Manuscript\u201D on the right and upload all of your manuscript files following the instructions given on the screen </p>",1),$z={class:"row my-5"},Vz={class:"col-12"},Uz=ct(()=>d("ul",null,[d("li",null," Original Article: This should describe new and/or carefully investigated findings, and research methods should be given in sufficient detail for others to verify the work. The maximum word count is 8000 words, excluding References. "),d("li",null," Review articles consider the implications and lessons to be learned, including the need for future inquiry, from a body of research on any sustainability topic. The maximum word count is 8000 words, excluding References. However, it is acceptable for some articles to exceed this number base on the research nature, such as systematic reviews. "),d("li",null," Short Communication Article: This short communication is suitable for reporting the results of small investigations or giving details of new models, innovative methods or techniques. The style of main sections doesn\u2019t need to conform to that of full-length papers. The maximum word count is 2500 words, excluding References. Articles in this category are reviewed at the discretion of the editor-in-chief.")],-1)),Hz=ct(()=>d("p",null,[j("A cover letter can be included with each manuscript submission. It should be concise and explain why the content of the paper is significant, placing the findings in the context of existing work. It should explain why the manuscript fits the scope of the journal. The cover Letter should be inserted in the comment. "),d("br"),j("All cover letters are required to include the statements:")],-1)),qz=ct(()=>d("ul",null,[d("li",null," We confirm that neither the manuscript nor any parts of its content are currently under consideration or published in another journal."),d("li",null,"All authors have approved the manuscript and agree with its submission to (journal name).")],-1)),Wz=ct(()=>d("p",null,"Authors wishing to include figures or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) of the material and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors.",-1)),Gz=ct(()=>d("ul",null,[d("li",null,[j("Research manuscripts should comprise: "),d("ul",null,[d("li",null,"Front matter: Title, Author list, Affiliations, Abstract, Keywords"),d("li",null,"Research manuscript sections: Introduction, Materials and Methods, Results, Discussion, Conclusions (optional)."),d("li",null,"Back matter: Supplementary Materials, Acknowledgments, Author Contributions, Conflicts of Interest, References.\xA0")])]),d("li",null,"*Follow the Microsoft Word template"),d("li",null,[j("Word Count "),d("ul",null,[d("li",null,"While no maximum length for manuscripts is prescribed, authors are encouraged to write concisely and clearly. As a guide, the maximum word count is 8000 words, excluding References in length.")])]),d("li",null,[j("Language "),d("ul",null,[d("li",null,"Please write your text in good English (American or British usage is accepted, but not a mixture of these). ")])]),d("li",null,[j("Style of Presentation "),d("ul",null,[d("li",null,"All manuscripts must be prepared according to the Aperier submission Template.")])])],-1)),Kz=ct(()=>d("p",null,"The manuscript should be arranged as follows:",-1)),Yz=ct(()=>d("ul",null,[d("li",null,"Title page (including name(s) of author(s), a concise and informative title, affiliation(s) and address(es) of the author(s), e-mail address, telephone and fax numbers of the corresponding author.)"),d("li",null,"Title: The title of your manuscript should be concise, specific and relevant. It should identify if the study reports (human or animal) trial data, or is a systematic review, meta-analysis or replication study. Please do not include abbreviated or short forms of the title, such as a running title or head. These will be removed by our Editorial Office."),d("li",null,"Author List and Affiliations: Authors' full first and last names must be provided. The initials of any middle names can be added. The Aperier standard format is used for affiliations: complete address information including city, zip code, state/province, and country. At least one author should be designated as corresponding author, and his or her email address and other details should be included at the end of the affiliation section. Please read the Authorship criteria of Aperier publishing policy."),d("li",null,"Abstract - about 200 words for an original article, a review article, and an overview article"),d("li",null,"Up to six keywords")],-1)),Qz=ct(()=>d("p",null,[j('Divide your article into clearly defined and numbered sections. Subsections should be numbered 1. (then 1.1., 1.2., ...), 1.1.1., etc. (the abstract is not included in section numbering). Use this numbering also for internal cross-referencing: do not just refer to "the text". Any subsection may be given a brief heading. Each heading should appear on its own separate line.'),d("br"),d("br"),d("strong",null,"1-Introduction"),d("br"),j(" State the objectives of the work and provide an adequate background, avoiding a detailed literature survey or a summary of the results. The introduction should briefly place the study in a broad context and highlight why it is important. It should define the purpose of the work and its significance, including specific hypotheses being tested. The current state of the research field should be reviewed carefully and key publications cited. Please highlight controversial and diverging hypotheses when necessary. Finally, briefly mention the main aim of the work and highlight the main conclusions. Keep the introduction comprehensible to scientists working outside the topic of the paper. * Abbreviations should be defined at first mention and used consistently thereafter."),d("br"),d("br"),d("strong",null,"2-Literature Review"),d("br"),j(" Provide an adequate background with detailed literature survey or a summary of the results of previous studies."),d("br"),d("br"),d("strong",null,"3-Methodology"),d("br"),j(" Provide sufficient detail to allow the work to be reproduced. Methods already published should be indicated by a reference: only relevant modifications should be described."),d("br"),d("br"),d("strong",null,"4-Results"),d("br"),j(" Provide sufficient detail to allow the results to be meaningful and informative. Provide a concise and precise description of the experimental results, their interpretation as well as the experimental conclusions that can be drawn."),d("br"),d("br"),d("strong",null,"5-Discussion"),d("br"),j(" This should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is often appropriate. Avoid extensive citations and discussion of published literature. The findings and their implications should be discussed in the broadest context possible and limitations of the work highlighted. Future research directions may also be mentioned. This section may be combined with Results."),d("br"),d("br"),d("strong",null,"6-Conclusion"),d("br"),j(" The main conclusions of the study may be presented in a short Conclusions section, which may stand alone or form a subsection of a Discussion or Results and Discussion section."),d("br"),d("br"),d("strong",null,"-No Footnotes, but Endnotes Acceptable"),d("br"),j(" Aperier Journals does not accept Footnotes due to technical problems of online publication. Please convert all footnotes to endnotes, otherwise please incorporate all footnotes into text at its best. ")],-1)),Zz=ct(()=>d("p",null,[j("Both tables and figures must be placed in the main body of the manuscript, after their citation. Table and figure should be discussed."),d("br"),j(" File for Figures and Schemes should be provided during submission in a single zip archive and at a sufficiently high resolution (minimum 1000 pixels width/height, or a resolution of 300 dpi or higher). Common formats are accepted."),d("br"),j(" All Figures, Schemes and Tables should be inserted into the main text close to their first citation and must be numbered following their number of appearance (Figure 1, Scheme I, Figure 2, Scheme II, Table 1, etc.)."),d("br"),j(" All table columns should have an explanatory heading. To facilitate the copy-editing of larger tables, smaller fonts may be used, but no less than 8 pt. in size. Authors should use the Table option of Microsoft Word to create tables.")],-1)),Jz=ct(()=>d("p",null,[j("authors are expected to adhere to the guidelines of APA (American Psychological Association). Text: Citations in the text should follow the referencing style used by the American Psychological Association. You are referred to the Publication Manual of the American Psychological Association, Sixth (6th) or Seventh (7th) Edition. If available, the Digital Object Identifier (DOI) can be added at the end of the reference in question."),d("br"),j(" In the text, references should be cited by author and year (e.g., Khatib, 1994; Modi & B\xF6qrek, 1991; Hammer et al. 1993) and listed in alphabetical order in the reference list. If there is more than one work by the same author or team of authors in the same year, a, b, etc. should be added to the year both in the text and in the list of references.")],-1)),Xz=ct(()=>d("ul",null,[d("li",null,"Journal papers: name(s) and initial(s) of all authors; year; full title; journal title; volume number; first and last page numbers. Example: Yahaya, I. S., Amat, A., Maryam, S., Khatib, S. F. A., & Sabo, A. U. (2020). Bibliometric Analysis Trend on Business Model Innovation. Journal of Critical Reviews, 7(09), 2391\u20132407."),d("li",null,"Single contributions in a book: name(s) and initial(s) of all authors; year; title of article; editor(s); title of book; edition; volume number; publisher; place of publication; page numbers Example: Ayama H, & Awass T. (1995). Global sustainability and the role of Asia. In: Sasaki T (ed) Nature and human communities, Emerald, Tokyo, pp 187\u2013216"),d("li",null,"Book: name and initial(s) of all authors; year; title; publisher; place of publication Example: Aisley RG (2020) Ecosystem geography. Wiley, Berlin Heidelberg New York")],-1)),ej=ct(()=>d("ul",null,[d("li",null,"Funding: All sources of funding of the study should be disclosed. Clearly indicate grants that you have received in support of your research work and if you received funds to cover publication costs. Note that some funders will not refund article processing charges (APC) if the funder and grant number are not clearly and correctly identified in the paper. Funding information can be entered separately into the submission system by the authors during submission of their manuscript.")],-1)),tj=ct(()=>d("p",null,"Please add: \u201CThis research received no external funding\u201D or \u201CThis research was funded by [name of funder] grant number [xxx]\u201D and \u201CThe APC was funded by [XXX]\u201D in this section. Check carefully that the details given are accurate and use the standard spelling of funding agency names at https://search.crossref.org/funding, any errors may affect your future funding.",-1)),nj=ct(()=>d("ul",null,[d("li",null,"Acknowledgments: In this section you can acknowledge any support given which is not covered by the author contribution or funding sections. This may include administrative and technical support, or donations in kind (e.g., materials used for experiments). "),d("li",null,"Author Contributions: Each author is expected to have made substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data; or the creation of new software used in the work; or have drafted the work or substantively revised it; AND has approved the submitted version (and version substantially edited by journal staff that involves the author\u2019s contribution to the study); AND agrees to be personally accountable for the author\u2019s own contributions and for ensuring that questions related to the accuracy or integrity of any part of the work, even ones in which the author was not personally involved, are appropriately investigated, resolved, and documented in the literature. For research articles with several authors, a short paragraph specifying their individual contributions must be provided. The following statements should be used;")],-1)),oj=ct(()=>d("p",null,[j('"Conceptualization, X.X. and Y.Y.; Methodology, X.X.; Software, X.X.; Validation, X.X., Y.Y. and Z.Z.; Formal Analysis, X.X.; Investigation, X.X.; Resources, X.X.; Data Curation, X.X.; Writing \u2013 Original Draft Preparation, X.X.; Writing \u2013 Review & Editing, X.X.; Visualization, X.X.; Supervision, X.X.; Project Administration, X.X.; Funding Acquisition, Y.Y.\u201D,'),d("br"),j(' Conflicts of Interest: Authors must identify and declare any personal circumstances or interest that may be perceived as influencing the representation or interpretation of reported research results. If there is no conflict of interest, please state "The authors declare no conflict of interest."')],-1)),ij=ct(()=>d("ul",null,[d("li",null,"The article will be published online after receipt of the corrected proofs. This is the official first publication citable. After release of the printed version, the paper can also be cited by issue and page numbers.")],-1)),rj=ct(()=>d("ul",null,[d("li",null,"During the submission process, please suggest three potential reviewers with the appropriate expertise to review the manuscript. The editors will not necessarily approach these referees. Please provide detailed contact information (address, homepage, phone, e-mail address). The proposed referees should neither be current collaborators of the co-authors nor have published with any of the co-authors of the manuscript within the last five years. Proposed reviewers should be from different institutions to the authors. You may identify appropriate Editorial Board members of the journal as potential reviewers. You may suggest reviewers from among the authors that you frequently cite in your paper.")],-1)),sj=ct(()=>d("ul",null,[d("li",null,"Authors can recommend potential reviewers. Journal editors will check to make sure there are no conflicts of interest before contacting those reviewers, and will not consider those with competing interests. Reviewers are asked to declare any conflicts of interest. Authors can also enter the names of potential peer reviewers they wish to exclude from consideration in the peer review of their manuscript, during the initial submission progress. The editorial team will respect these requests so long as this does not interfere with the objective and thorough assessment of the submission.")],-1)),aj=ct(()=>d("ul",null,[d("li",null,"To facilitate proper peer-reviewing of your manuscript, it is essential that it is submitted in grammatically correct English. If you are not a native English speaker, we recommend that you have your manuscript professionally edited before submission or read by a native English-speaking colleague. This can be carried out by Aperier Language editing service. Professional editing will enable reviewers and future readers to more easily read and assess the content of submitted manuscripts. All accepted manuscripts undergo language editing; however, an additional fee will be charged to authors if very extensive English corrections must be made by the Editorial Office.")],-1)),lj=ct(()=>d("div",{class:"tab-pane fade p-3",id:"accept",role:"tabpanel","aria-labelledby":"accept-tab"},[d("p",{class:"journal-details-title"},"Acceptance rate"),d("div",{class:"journal-details-body"},[d("p",null,[j("Editorial Board members and reviewers constantly work on increasing the efficiency of manuscripts evaluation and selection of the papers that present extreme importance to the scientific field. In this respect, there are factors that result in a rejection of a significant share of papers submitted for publication. The reasons for rejection can be different. Main reasons are listed in Peer Review and Research Misconduct Policy."),d("br"),j(" Aperier emphasizes that in no case place of work or country of residence of the scientist, their racial or religious affiliation can be the reason for rejection. In this respect, we ask the authors to pay attention to necessity of observing publication ethics principles. Submitted manuscripts should be relevant in content and comply with the aim, tasks and specialization of the journal."),d("br"),j(" The language of the manuscript should be professional, and the format should comply with the standards given. Weak English and incompliance with the format standards will not obligatorily lead to rejection, but can delay paper acceptance until the author makes the amendments. The acceptance rate for the journal is calculated as a number of manuscripts accepted for publication compared with total number of manuscripts submitted in one year."),d("br"),d("br"),j(" This rate demonstrates gradual and steady decrease. By now, it is 60%."),d("br"),d("br"),j(" To have a clear vision about period of consideration and process of review of your paper, authors can always contact the Managing Editor. Period of paper consideration is not fixed and can be changed depending on different factors, but our employees will keep you informed about the status of the publishing process. ")]),d("div",{class:"journal-stats my-5"},[d("p",null,[j("First decision (Median) "),d("br"),j(" 10 days ")]),d("p",null,[j("Acceptance to publication "),d("br"),j(" 4 days ")]),d("p",null,[j("Downloads Times "),d("br"),j(" 4,409 (2022) ")])])])],-1)),cj=ct(()=>d("div",{class:"tab-pane fade p-3",id:"article",role:"tabpanel","aria-labelledby":"article-tab"},[d("p",{class:"journal-details-title"},"Article Processing Charge"),d("div",{class:"journal-details-body"},[d("p",null,[j("All articles published in our journals are open access and freely available online, immediately upon publication. This is made possible by an article-processing charge (APCs) that covers the range of publishing services we provide. This includes provision of online tools for editors and authors, article production and hosting, liaison with abstracting and indexing services, and customer services."),d("br"),d("br"),j(" Sustainability studies (SS) is the official journal of Aperier publishing and supported by article processing charges. SS is an open access journal funded by the Aperier and all APCs are covered by the the institution, so there are no publication charges for authors whose work is accepted for publication in Sustainability Studies journal."),d("br"),d("br"),j(" FREE OF CHARGES ")])])],-1)),dj={class:"tab-pane fade p-3",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},uj=ct(()=>d("p",{class:"journal-details-title"},"Contact Us",-1)),hj={class:"journal-details-body"},fj={class:"contact-us-card"},pj=ct(()=>d("br",null,null,-1)),mj=ct(()=>d("br",null,null,-1)),gj=ct(()=>d("br",null,null,-1)),bj=ct(()=>d("hr",null,null,-1)),wj={key:1,class:"current-issue"},_j={class:"row g-3"},kj={class:"d-flex justify-content-end mt-3"},vj={class:"col-lg-2 col-md-4"},yj={class:"nav nav-pills flex-column",id:"myTab",role:"tablist"},Aj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link active",id:"general-information-tab","data-bs-toggle":"tab","data-bs-target":"#general-information",type:"button",role:"tab","aria-controls":"general-information","aria-selected":"true"},"General Information")],-1)),Cj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"indexed-tab","data-bs-toggle":"tab","data-bs-target":"#indexed",type:"button",role:"tab","aria-controls":"indexed","aria-selected":"false"},"Indexed/Abstracted")],-1)),xj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"open-access-tab","data-bs-toggle":"tab","data-bs-target":"#open-access",type:"button",role:"tab","aria-controls":"open-access","aria-selected":"false"},"Open Access Statement")],-1)),Ej=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"editorial-tab","data-bs-toggle":"tab","data-bs-target":"#editorial",type:"button",role:"tab","aria-controls":"editorial","aria-selected":"false"},"Editorial Board")],-1)),Dj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"plagiarism-tab","data-bs-toggle":"tab","data-bs-target":"#plagiarism",type:"button",role:"tab","aria-controls":"plagiarism","aria-selected":"false"},"Plagiarism Statement")],-1)),Tj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"instruction-tab","data-bs-toggle":"tab","data-bs-target":"#instruction",type:"button",role:"tab","aria-controls":"instruction","aria-selected":"false"},"Instruction for Authors")],-1)),Sj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"accept-tab","data-bs-toggle":"tab","data-bs-target":"#accept",type:"button",role:"tab","aria-controls":"accept","aria-selected":"false"},"Acceptance Rate")],-1)),Ij=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"article-tab","data-bs-toggle":"tab","data-bs-target":"#article",type:"button",role:"tab","aria-controls":"article","aria-selected":"false"},"Article Processing Charge")],-1)),Mj={class:"nav-item",role:"presentation"},Pj={class:"nav-link",id:"archive-tab","data-bs-toggle":"tab","data-bs-target":"#archive",type:"button",role:"tab","aria-controls":"archive","aria-selected":"false"},Nj=ct(()=>d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"},"Contacts")],-1)),Bj=ct(()=>d("div",{class:"mt-5 submit-script"},[d("span",null,"SUBMIT YOUR MANUSCRIPT"),d("button",null,"Submit Manuscript")],-1));function Oj(r,l,h,g,m,C){const _=nt("AccordionItemComponent"),v=nt("AccordionComponent"),y=nt("Strong"),S=nt("SectionTitleComponent"),P=nt("JournalListCardComponent"),N=nt("router-link");return le(),he("div",JR,[d("div",XR,[d("div",ez,[tz,m.data?(le(),he("div",nz,[d("div",oz,[d("div",iz,[rz,d("p",sz,[d("p",null,be(m.journalDetails.home.general_information),1),d("span",null,"Type: "+be(m.journalDetails.home.type),1),d("span",null,"ISSN: "+be(m.journalDetails.home.issn),1),d("span",null,"Copyright Holder: "+be(m.journalDetails.home.copyright_holder),1),d("span",null,"Language: "+be(m.journalDetails.home.language),1),d("span",null,"Online date, start \u2013 end: "+be(m.journalDetails.home.date),1),d("span",null,"Publication Frequency: "+be(m.journalDetails.home.frequency),1)]),d("div",az,[d("p",null,[j("First decision (Median) "),lz,j(" "+be(m.journalDetails.home.first_decision)+" days ",1)]),d("p",null,[j("Acceptance to publication "),cz,j(" "+be(m.journalDetails.home.publication_acceptance)+" days ",1)]),d("p",null,[j("Downloads Times "),dz,j(" "+be(m.journalDetails.home.downloads),1)])]),uz,d("p",hz,[d("p",null,be(m.journalDetails.home.aim_scope),1),fz,pz,mz,d("span",null,be(m.journalDetails.home.key_topic_text),1),d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.home.key_topics,M=>(le(),he("li",{key:M},be(M),1))),128))]),gz,bz,wz,d("p",null,be(m.journalDetails.home.readership),1)])]),_z,kz,vz,d("div",yz,[d("div",Az,[d("div",Cz,[xz,d("div",Ez,[Dz,d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.editorial_board.in_chief,M=>(le(),he("li",{key:M},be(M),1))),128))]),Tz,d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.editorial_board.in_board,M=>(le(),he("li",{key:M},be(M),1))),128))]),m.journalDetails.editorial_board.in_managing.length>0?(le(),he("div",Sz,[Iz,d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.editorial_board.in_managing,M=>(le(),he("li",{key:M},be(M),1))),128))])])):wu("",!0)])]),d("div",Mz,[Pz,d("div",Nz,[d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.editorial_board.advisory,M=>(le(),he("li",{key:M},be(M),1))),128))])])])]),d("div",Bz,[Oz,d("div",Lz,[d("p",null,be(m.journalDetails.editorial_board.join_board),1)])])]),d("div",Rz,[zz,d("div",jz,[Fz,d("div",$z,[d("div",Vz,[ae(v,null,{default:je(()=>[ae(_,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Type of Articles"},{default:je(()=>[Uz]),_:1}),ae(_,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Cover Letter"},{default:je(()=>[Hz,qz]),_:1}),ae(_,{heading_id:"headingThree",collapse_id:"collapseThree",title:"Legal requirements"},{default:je(()=>[Wz]),_:1}),ae(_,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Manuscript Preparation"},{default:je(()=>[Gz]),_:1}),ae(_,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Front Matter"},{default:je(()=>[Kz,Yz]),_:1}),ae(_,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Research Manuscript Structure"},{default:je(()=>[Qz]),_:1}),ae(_,{heading_id:"headingSeven",collapse_id:"collapseSeven",title:"Tables and Figures "},{default:je(()=>[Zz]),_:1}),ae(_,{heading_id:"headingEight",collapse_id:"collapseEight",title:"Reference Style Guides "},{default:je(()=>[Jz,Xz]),_:1}),ae(_,{heading_id:"headingNine",collapse_id:"collapseNine",title:"Back Matter"},{default:je(()=>[ej,tj,nj,oj]),_:1}),ae(_,{heading_id:"headingTen",collapse_id:"collapseTen",title:"Online First"},{default:je(()=>[ij]),_:1}),ae(_,{heading_id:"headingEleven",collapse_id:"collapseEleven",title:"Reviewer Suggestions"},{default:je(()=>[rj]),_:1}),ae(_,{heading_id:"headingTwelve",collapse_id:"collapseTwelve",title:"Reviewers Recommendation"},{default:je(()=>[sj]),_:1}),ae(_,{heading_id:"headingThirteen",collapse_id:"collapseThirteen",title:"English Corrections"},{default:je(()=>[aj]),_:1})]),_:1})])])])]),lj,cj,d("div",dj,[uj,d("div",hj,[d("div",fj,[ae(y,null,{default:je(()=>[j("Editor-In-Chief")]),_:1}),d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.contact_us.in_chief,M=>(le(),he("li",{key:M},be(M),1))),128))]),pj,ae(y,null,{default:je(()=>[j("Managing Editor")]),_:1}),d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.contact_us.in_managing,M=>(le(),he("li",{key:M},be(M),1))),128))]),mj,ae(y,null,{default:je(()=>[j("Publisher Management ")]),_:1}),d("ul",null,[(le(!0),he(rt,null,Mt(m.journalDetails.contact_us.in_publisher,M=>(le(),he("li",{key:M},be(M),1))),128))]),gj])])])]),bj,m.studyListPerJournal.length>0?(le(),gs(S,{key:0,title:"Current Issue"})):wu("",!0),m.studyListPerJournal.length>0?(le(),he("div",wj,[d("div",_j,[(le(!0),he(rt,null,Mt(m.studyListPerJournal,M=>(le(),gs(P,{key:M.id,class:"col-12",title:M.title,author:M.first_name+" "+M.middle_name+" "+M.last_name,tag:M.name,volume:M.volume,issue:M.issue,page:"pp. "+M.page,downloads:"Downloads: "+M.downloads,views:"Views: "+M.views,onClick:F=>this.$router.push({name:"Issue Details",params:{id:M.id}})},null,8,["title","author","tag","volume","issue","page","downloads","views","onClick"]))),128))]),d("div",kj,[d("span",null,[ae(N,{to:{name:"Current Issue Archive",params:{id:this.$route.params.id}},target:"_blank"},{default:je(()=>[j(" More Articles ")]),_:1},8,["to"])])])])):wu("",!0)])):wu("",!0),d("div",vj,[d("ul",yj,[Aj,Cj,xj,Ej,Dj,Tj,Sj,Ij,d("li",Mj,[d("button",Pj,[ae(N,{to:{name:"Current Issue Archive",params:{id:this.$route.params.id}},target:"_blank",style:{"text-decoration":"none",color:"inherit"}},{default:je(()=>[j("Archive")]),_:1},8,["to"])])]),Nj]),Bj])])])])}const Lj=pt(ZR,[["render",Oj],["__scopeId","data-v-29d13349"]]);const Rj={components:{JournalListCardComponent:WE},data(){return{studyList:{}}},async mounted(){await nn.get(`${Pt.domain}/api/studies-per-journal-with-volume/`+this.$route.params.id).then(r=>{this.studyList=r.data.data,this.studyList.volume=this.studyList.volume.reverse()}).catch(r=>{console.log(r)}),console.log(this.studyList[this.studyList.volume[0]])}},Sy=r=>(Vt("data-v-4388b363"),r=r(),Ut(),r),zj={style:{"margin-top":"60px"}},jj={class:"container"},Fj={class:"row gy-4"},$j=Sy(()=>d("div",{class:"col-12 search-group"},[d("input",{type:"text",placeholder:"Search"}),d("i",{class:"fa-brands fa-searchengin fa-lg"})],-1)),Vj={class:"col-12"},Uj=Sy(()=>d("p",{class:"issue-title"},"Volumes and Issues",-1)),Hj={class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},qj=["id","data-bs-target","aria-controls"],Wj={class:"nav-item flex-grow-1 text-end text-secondary align-self-center",role:"presentation"},Gj=Sy(()=>d("hr",null,null,-1)),Kj={class:"tab-content",id:"pills-tabContent"},Yj=["id","aria-labelledby"],Qj={class:"current-issue"},Zj={class:"row g-3"};function Jj(r,l,h,g,m,C){const _=nt("JournalListCardComponent"),v=nt("router-link");return le(),he("section",zj,[d("div",jj,[d("div",Fj,[$j,d("div",Vj,[Uj,d("ul",Hj,[(le(!0),he(rt,null,Mt(m.studyList.volumeCount,y=>(le(),he("li",{class:"nav-item",role:"presentation",key:y},[d("button",{class:Pi(["nav-link text-secondary",y===1?"active":""]),id:"pills-tab-"+y,"data-bs-toggle":"pill","data-bs-target":"#pills-"+y,type:"button",role:"tab","aria-controls":"pills-"+y,"aria-selected":"true"},"Volume "+be(y),11,qj)]))),128)),d("li",Wj,be(m.studyList.numOfArticle)+" Articles ",1)]),Gj,d("div",Kj,[(le(!0),he(rt,null,Mt(m.studyList.volumeCount,y=>(le(),he("div",{key:y,class:Pi([y===1?"active":"","tab-pane fade show p-5"]),id:"pills-"+y,role:"tabpanel","aria-labelledby":"pills-tab-"+y},[d("div",Qj,[d("div",Zj,[(le(!0),he(rt,null,Mt(m.studyList[m.studyList.volume[y-1]],S=>(le(),gs(v,{key:S,to:{name:"Issue Details",params:{id:S.id}},target:"_blank"},{default:je(()=>[ae(_,{class:"col-12",title:S.title,author:S.first_name+" "+S.middle_name+" "+S.last_name,tag:S.name,volume:S.volume,issue:S.issue,page:"pp. "+S.page,downloads:"Downloads: "+S.downloads,views:"Views: "+S.views,onClick:P=>this.$router.push({name:"Issue Details",params:{id:S.id}})},null,8,["title","author","tag","volume","issue","page","downloads","views","onClick"])]),_:2},1032,["to"]))),128))])])],10,Yj))),128))])])])])])}const Xj=pt(Rj,[["render",Jj],["__scopeId","data-v-4388b363"]]);const eF={components:{SectionTitleComponent:Np},data(){return{studyDetails:{},study:{},fileUrl:""}},async mounted(){await nn.get(`${Pt.domain}/api/studies-details/`+this.$route.params.id).then(r=>{this.studyDetails=r.data.data,this.studyDetails.study_authors=this.studyDetails.study_authors.map(h=>h=h.first_name+" "+h.middle_name+" "+h.last_name);let l=this.studyDetails.study_authors.pop();this.studyDetails.study_authors=this.studyDetails.study_authors.join(", ")+"and "+l,this.study=this.studyDetails.study,this.study.volume=this.study.volume.slice(-1),this.fileUrl=Pt.domain+"/storage/upload/studies/"+this.study.manuscript_file}).catch(r=>{console.log(r)})},methods:{gotoNewTab(r){window.open(r,"_blank")},downloadURI(){var r=document.createElement("a");r.download=this.study.manuscript_file,r.href=this.fileUrl,r.click()}}},Or=r=>(Vt("data-v-12affb34"),r=r(),Ut(),r),tF={style:{"margin-top":"60px"}},nF={class:"container"},oF={class:"row p-5 d-flex flex-column gy-4"},iF={class:"issue-title"},rF={class:"stat-box"},sF={class:"stat-box-left"},aF={class:"text-success"},lF={class:"stat-box-left-body"},cF={class:"d-flex flex-column align-items-center"},dF=Or(()=>d("span",{class:"text-secondary"},"Received",-1)),uF={class:"d-flex flex-column align-items-center"},hF=Or(()=>d("span",{class:"text-secondary"},"Revised",-1)),fF={class:"d-flex flex-column align-items-center"},pF=Or(()=>d("span",{class:"text-secondary"},"Accepted",-1)),mF={class:"d-flex flex-column align-items-center"},gF=Or(()=>d("span",{class:"text-secondary"},"First published ",-1)),bF={class:"stat-box-right"},wF={class:"btn-download"},_F=Or(()=>d("i",{class:"fa-solid fa-cloud-arrow-down"},null,-1)),kF=Or(()=>d("button",{class:"btn-download"},[d("i",{class:"fa-solid fa-eye"}),d("span",null,"Preview")],-1)),vF={class:"cite-box mb-5"},yF=Or(()=>d("span",null,"Cite this article",-1)),AF=Or(()=>d("span",{class:"nav-link py-0"},"Abstract",-1)),CF=Or(()=>d("hr",null,null,-1)),xF={class:"abstract"},EF={class:"metadata mt-5"},DF=Or(()=>d("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},[d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link active",id:"pills-keyword-tab","data-bs-toggle":"pill","data-bs-target":"#pills-keyword",type:"button",role:"tab","aria-controls":"pills-keyword","aria-selected":"true"},"Keywords")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-table-tab","data-bs-toggle":"pill","data-bs-target":"#pills-table",type:"button",role:"tab","aria-controls":"pills-table","aria-selected":"false"},"Tables")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-figure-tab","data-bs-toggle":"pill","data-bs-target":"#pills-figure",type:"button",role:"tab","aria-controls":"pills-figure","aria-selected":"false"},"Figure")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-contribution-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contribution",type:"button",role:"tab","aria-controls":"pills-contribution","aria-selected":"false"},"Contribution")]),d("li",{class:"nav-item",role:"presentation"},[d("button",{class:"nav-link",id:"pills-refs-tab","data-bs-toggle":"pill","data-bs-target":"#pills-refs",type:"button",role:"tab","aria-controls":"pills-refs","aria-selected":"false"},"References")])],-1)),TF=Or(()=>d("hr",null,null,-1)),SF={class:"tab-content",id:"pills-tabContent"},IF={class:"tab-pane fade show active",id:"pills-keyword",role:"tabpanel","aria-labelledby":"pills-keyword-tab"},MF={class:"tab-pane fade",id:"pills-table",role:"tabpanel","aria-labelledby":"pills-table-tab"},PF={class:"tab-pane fade",id:"pills-figure",role:"tabpanel","aria-labelledby":"pills-figure-tab"},NF={class:"tab-pane fade",id:"pills-contribution",role:"tabpanel","aria-labelledby":"pills-contribution-tab"},BF={class:"tab-pane fade",id:"pills-refs",role:"tabpanel","aria-labelledby":"pills-refs-tab"},OF=["onClick"];function LF(r,l,h,g,m,C){return le(),he("section",tF,[d("div",nF,[d("div",oF,[d("p",iF,be(m.study.title),1),d("span",null,be(m.studyDetails.study_authors),1),d("div",rF,[d("div",sF,[d("span",null,[j(be(new Date(m.study.created_at).getFullYear())+". ",1),d("span",aF,be(m.study.journal_title)+" "+be(this.study.volume)+"(1)",1),j(", "+be(m.study.page),1)]),d("div",lF,[d("p",cF,[dF,d("span",null,be(m.study.created_at),1)]),d("p",uF,[hF,d("span",null,be(m.study.updated_at),1)]),d("p",fF,[pF,d("span",null,be(m.study.accepted_at),1)]),d("p",mF,[gF,d("span",null,be(m.study.accepted_at),1)])])]),d("div",bF,[d("button",wF,[_F,d("span",{onClick:l[0]||(l[0]=(..._)=>C.downloadURI&&C.downloadURI(..._))},"Download")]),kF])]),d("div",vF,[yF,d("p",null,be(m.studyDetails.study_authors)+"("+be(new Date(m.study.created_at).getFullYear())+"). "+be(m.study.title)+". "+be(m.study.journal_title)+" "+be(m.study.volume)+"(1), "+be(m.study.page)+".",1)]),AF,CF,d("p",xF,be(m.study.abstract),1),d("section",EF,[DF,TF,d("div",SF,[d("div",IF,[d("ul",null,[(le(!0),he(rt,null,Mt(m.studyDetails.study_keywords,_=>(le(),he("li",{key:_},be(_.keyword_title),1))),128))])]),d("div",MF,[d("ul",null,[(le(!0),he(rt,null,Mt(m.studyDetails.study_table,(_,v)=>(le(),he("li",{key:_},"Table "+be(v+1)+": "+be(_.table_title),1))),128))])]),d("div",PF,[d("ul",null,[(le(!0),he(rt,null,Mt(m.studyDetails.study_figure,(_,v)=>(le(),he("li",{key:_},"Figure "+be(v+1)+": "+be(_.figure_title),1))),128))])]),d("div",NF,[d("ul",null,[(le(!0),he(rt,null,Mt(m.studyDetails.study_contribution,(_,v)=>(le(),he("li",{key:_},be(_.contribution_title),1))),128))])]),d("div",BF,[d("ul",null,[(le(!0),he(rt,null,Mt(m.studyDetails.study_reference,_=>(le(),he("li",{key:_},[j(be(_.reference_title)+" ",1),d("i",{class:"fa-solid fa-link text-primary",style:{cursor:"pointer"},onClick:v=>C.gotoNewTab(_.reference_url)},null,8,OF)]))),128))])])])])])])])}const RF=pt(eF,[["render",LF],["__scopeId","data-v-12affb34"]]);const zF={data(){return{formData:{email:"",password:""}}},methods:{async handleForm(){await nn.post(`${Pt.domain}/api/login`,this.formData).then(r=>{r.data.success?(this.$swal({text:"Login successfully",icon:"success"}),this.formData={email:"",password:""},localStorage.setItem("userEmail",r.data.data.email),localStorage.setItem("isAdmin",!!r.data.data.is_admin),r.data.data.is_admin?this.$router.push({name:"Admin Dashboard"}):this.$router.push({name:"Author Dashboard"})):this.$swal({text:r.data.message,icon:"error"})}).catch(r=>{console.log(r)})}}},Lc=r=>(Vt("data-v-88e229b0"),r=r(),Ut(),r),jF={style:{"margin-top":"60px"}},FF={class:"container p-5"},$F={class:"row gy-2"},VF=Lc(()=>d("div",{class:"col-12 form-title"},[d("span",null,"Aperier"),d("span",null,"Login System")],-1)),UF={class:"col-12 p-md-5 p-1"},HF={class:"col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 login-form"},qF=Lc(()=>d("div",{class:"form-header"},[d("p",{class:"pt-3"},"Login to Website"),d("div",{class:"logo-background"}),d("img",{src:_y,alt:"",class:"bird-img"})],-1)),WF={class:"form-body"},GF={class:"form-left h-100"},KF={action:"",class:"row g-4"},YF={class:"col-12"},QF={class:"input-group"},ZF=Lc(()=>d("div",{class:"input-group-text"},[d("i",{class:"fa-solid fa-envelope"})],-1)),JF={class:"col-12"},XF={class:"input-group"},e6=Lc(()=>d("div",{class:"input-group-text"},[d("i",{class:"fa-solid fa-lock"})],-1)),t6=Lc(()=>d("p",{class:"align-self-end mt-2 text-white"},"Forgot Password?",-1)),n6=Lc(()=>d("button",{type:"submit",class:"btn-login"},"Login",-1)),o6={class:"align-self-end mt-3 mb-0 text-white"},i6=Lc(()=>d("br",null,null,-1));function r6(r,l,h,g,m,C){const _=nt("router-link");return le(),he("section",jF,[d("div",FF,[d("div",$F,[VF,d("div",UF,[d("div",HF,[qF,d("div",WF,[d("form",{action:"",method:"post",onSubmit:l[2]||(l[2]=Bu(v=>C.handleForm(),["prevent"]))},[d("div",GF,[d("form",KF,[d("div",YF,[d("div",QF,[ZF,Oe(d("input",{type:"email",class:"form-control",placeholder:"Enter Username","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.email=v)},null,512),[[tt,m.formData.email]])])]),d("div",JF,[d("div",XF,[e6,Oe(d("input",{type:"password",class:"form-control",placeholder:"Enter Password","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.password=v)},null,512),[[tt,m.formData.password]])])])])]),t6,n6,d("p",o6,[j("Don\u2019t have an account? "),i6,ae(_,{to:{name:"Sign Up"},style:{"text-decoration":"none",color:"unset"}},{default:je(()=>[j("Create a Free Account")]),_:1})])],32)])])])])])])}const s6=pt(zF,[["render",r6],["__scopeId","data-v-88e229b0"]]);const a6={data(){return{formData:{prefix:"Dr.",first_name:"",middle_name:"",last_name:"",degree:"",email:"",phone:"",orchid:"",department:"",institution:"",city:"",country:"",areaOfExpertise:[],password:"",receive_reviews_request:!1,join_editorial_team:!1,privacy_acknowledgement:!1}}},methods:{async handleForm(){await nn.post(`${Pt.domain}/api/sign-up`,this.formData).then(r=>{r.data.success?(this.$swal({text:"User added  successfully",icon:"success"}),this.formData={prefix:"Dr.",first_name:"",middle_name:"",last_name:"",degree:"",email:"",phone:"",orchid:"",department:"",institution:"",city:"",country:"",areaOfExpertise:[],password:"",receive_reviews_request:!1,join_editorial_team:!1,privacy_acknowledgement:!1},this.$router.push({name:"Sign Up Success"})):this.$swal({text:r.data.message,icon:"error"})}).catch(r=>{console.log(r)})}}},xn=r=>(Vt("data-v-f5d46005"),r=r(),Ut(),r),l6={style:{"margin-top":"60px"}},c6={class:"container p-lg-5 p-3"},d6={class:"row gy-2"},u6=xn(()=>d("div",{class:"col-12 form-title"},[d("span",null,"Aperier"),d("span",null,"Submission System")],-1)),h6={class:"col-12 bg-custom-gray"},f6={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},p6={class:"custom-form-group"},m6=xn(()=>d("span",null,[j("Prefix"),d("span",{class:"text-danger"},"*")],-1)),g6=ko('<option value="Dr." data-v-f5d46005>Dr.</option><option value="Mr." data-v-f5d46005>Mr.</option><option value="Mrs." data-v-f5d46005>Mrs.</option><option value="Prof." data-v-f5d46005>Prof.</option><option value="Assoc Prof." data-v-f5d46005>Assoc Prof.</option>',5),b6=[g6],w6={class:"custom-form-group"},_6=xn(()=>d("span",null,[j("First (Given) Name:"),d("span",{class:"text-danger"},"*")],-1)),k6={class:"custom-form-group"},v6=xn(()=>d("span",null,"Middle Name:",-1)),y6={class:"custom-form-group"},A6=xn(()=>d("span",null,[j("Last (Family) Name:"),d("span",{class:"text-danger"},"*")],-1)),C6={class:"custom-form-group"},x6=xn(()=>d("span",null,"Degree:",-1)),E6={class:"col-12"},D6={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},T6={class:"custom-form-group"},S6=xn(()=>d("span",null,[j("Primary E-Mail:"),d("span",{class:"text-danger"},"*")],-1)),I6=xn(()=>d("div",{class:"custom-form-group"},[d("span",null,[j("Primary E-Mail (again):"),d("span",{class:"text-danger"},"*")]),d("input",{type:"email",class:"custom-input"})],-1)),M6={class:"custom-form-group"},P6=xn(()=>d("span",null,"Phone:",-1)),N6={class:"custom-form-group"},B6=xn(()=>d("span",null,"ORCID:",-1)),O6={class:"col-12 bg-custom-gray"},L6={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},R6={class:"custom-form-group"},z6=xn(()=>d("span",null,"Department:",-1)),j6={class:"custom-form-group"},F6=xn(()=>d("span",null,[j("Institution:"),d("span",{class:"text-danger"},"*")],-1)),$6={class:"custom-form-group"},V6=xn(()=>d("span",null,[j("City:"),d("span",{class:"text-danger"},"*")],-1)),U6={class:"custom-form-group"},H6=xn(()=>d("span",null,[j("Country:"),d("span",{class:"text-danger"},"*")],-1)),q6={class:"col-12"},W6={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},G6={class:"custom-form-group"},K6=xn(()=>d("span",null,"Areas of Expertise:",-1)),Y6={class:"w-50"},Q6={class:"d-flex mb-3",style:{gap:"10px"}},Z6=xn(()=>d("span",null,[j("(1)"),d("span",{class:"text-danger"},"*")],-1)),J6={class:"d-flex mb-3",style:{gap:"10px"}},X6=xn(()=>d("span",null,[j("(2)"),d("span",{class:"text-danger"},"*")],-1)),e$={class:"d-flex mb-3",style:{gap:"10px"}},t$=xn(()=>d("span",null,"(3) \xA0",-1)),n$={class:"d-flex mb-3",style:{gap:"10px"}},o$=xn(()=>d("span",null,"(4) \xA0",-1)),i$={class:"d-flex mb-3",style:{gap:"10px"}},r$=xn(()=>d("span",null,"(5) \xA0",-1)),s$={class:"d-flex mb-3",style:{gap:"10px"}},a$=xn(()=>d("span",null,"(6) \xA0",-1)),l$={class:"col-12 bg-custom-gray"},c$={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-4"},d$={class:"custom-form-group"},u$=xn(()=>d("span",null,[j("Password:"),d("span",{class:"text-danger"},"*")],-1)),h$=xn(()=>d("div",{class:"custom-form-group"},[d("span",null,[j("Confirm Password:"),d("span",{class:"text-danger"},"*")]),d("input",{type:"password",class:"custom-input"})],-1)),f$={class:"col-12"},p$={class:"col-6 offset-3 p-4"},m$={class:"form-check mb-2"},g$=xn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault"}," Are you willing to receive reviews request from Aperier Journals. ",-1)),b$={class:"form-check"},w$=xn(()=>d("label",{class:"form-check-label",for:"flexCheckChecked"}," Are you willing to join editorial team of relevant Aperier Journal. ",-1)),_$={class:"col-12"},k$={class:"privacy"},v$=xn(()=>d("p",null,"Privacy Acknowledgement",-1)),y$=xn(()=>d("p",null,"To ensure you are properly informed of your privacy rights while using this website, we ask that you review and acknowledge the relevant privacy policies linked below. Aperier\u2019s Privacy Policy ",-1)),A$={class:"form-check"},C$=xn(()=>d("label",{class:"form-check-label",for:"flexCheckCheckedNot"}," Yes, I have read and now acknowledge the linked privacy policies. ",-1)),x$=xn(()=>d("div",{class:"col-12 text-end mt-4"},[d("button",{type:"submit",class:"btn-register"},"Register")],-1));function E$(r,l,h,g,m,C){return le(),he("section",l6,[d("div",c6,[d("div",d6,[u6,d("form",{action:"",method:"post",onSubmit:l[22]||(l[22]=Bu(_=>C.handleForm(),["prevent"]))},[d("div",h6,[d("div",f6,[d("div",p6,[m6,Oe(d("select",{name:"",class:"w-50",id:"","onUpdate:modelValue":l[0]||(l[0]=_=>m.formData.prefix=_)},b6,512),[[bi,m.formData.prefix]])]),d("div",w6,[_6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[1]||(l[1]=_=>m.formData.first_name=_)},null,512),[[tt,m.formData.first_name]])]),d("div",k6,[v6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[2]||(l[2]=_=>m.formData.middle_name=_)},null,512),[[tt,m.formData.middle_name]])]),d("div",y6,[A6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[3]||(l[3]=_=>m.formData.last_name=_)},null,512),[[tt,m.formData.last_name]])]),d("div",C6,[x6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[4]||(l[4]=_=>m.formData.degree=_)},null,512),[[tt,m.formData.degree]])])])]),d("div",E6,[d("div",D6,[d("div",T6,[S6,Oe(d("input",{type:"email",class:"custom-input","onUpdate:modelValue":l[5]||(l[5]=_=>m.formData.email=_)},null,512),[[tt,m.formData.email]])]),I6,d("div",M6,[P6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[6]||(l[6]=_=>m.formData.phone=_)},null,512),[[tt,m.formData.phone]])]),d("div",N6,[B6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[7]||(l[7]=_=>m.formData.orchid=_)},null,512),[[tt,m.formData.orchid]])])])]),d("div",O6,[d("div",L6,[d("div",R6,[z6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[8]||(l[8]=_=>m.formData.department=_)},null,512),[[tt,m.formData.department]])]),d("div",j6,[F6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[9]||(l[9]=_=>m.formData.institution=_)},null,512),[[tt,m.formData.institution]])]),d("div",$6,[V6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[10]||(l[10]=_=>m.formData.city=_)},null,512),[[tt,m.formData.city]])]),d("div",U6,[H6,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[11]||(l[11]=_=>m.formData.country=_)},null,512),[[tt,m.formData.country]])])])]),d("div",q6,[d("div",W6,[d("div",G6,[K6,d("div",Y6,[d("div",Q6,[Z6,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[12]||(l[12]=_=>m.formData.areaOfExpertise[0]=_)},null,512),[[tt,m.formData.areaOfExpertise[0]]])]),d("div",J6,[X6,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[13]||(l[13]=_=>m.formData.areaOfExpertise[1]=_)},null,512),[[tt,m.formData.areaOfExpertise[1]]])]),d("div",e$,[t$,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[14]||(l[14]=_=>m.formData.areaOfExpertise[2]=_)},null,512),[[tt,m.formData.areaOfExpertise[2]]])]),d("div",n$,[o$,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[15]||(l[15]=_=>m.formData.areaOfExpertise[3]=_)},null,512),[[tt,m.formData.areaOfExpertise[3]]])]),d("div",i$,[r$,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[16]||(l[16]=_=>m.formData.areaOfExpertise[4]=_)},null,512),[[tt,m.formData.areaOfExpertise[4]]])]),d("div",s$,[a$,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[17]||(l[17]=_=>m.formData.areaOfExpertise[5]=_)},null,512),[[tt,m.formData.areaOfExpertise[5]]])])])])])]),d("div",l$,[d("div",c$,[d("div",d$,[u$,Oe(d("input",{type:"password",class:"custom-input","onUpdate:modelValue":l[18]||(l[18]=_=>m.formData.password=_)},null,512),[[tt,m.formData.password]])]),h$])]),d("div",f$,[d("div",p$,[d("div",m$,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[19]||(l[19]=_=>m.formData.receive_reviews_request=_)},null,512),[[oo,m.formData.receive_reviews_request]]),g$]),d("div",b$,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":l[20]||(l[20]=_=>m.formData.join_editorial_team=_)},null,512),[[oo,m.formData.join_editorial_team]]),w$])])]),d("div",_$,[d("div",k$,[v$,y$,d("div",A$,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckCheckedNot","onUpdate:modelValue":l[21]||(l[21]=_=>m.formData.privacy_acknowledgement=_)},null,512),[[oo,m.formData.privacy_acknowledgement]]),C$])])]),x$],32)])])])}const D$=pt(a6,[["render",E$],["__scopeId","data-v-f5d46005"]]);const T$={methods:{}},GE=r=>(Vt("data-v-ed23026f"),r=r(),Ut(),r),S$={style:{"margin-top":"60px",height:"84vh"}},I$={class:"container p-5"},M$={class:"row gy-2"},P$=GE(()=>d("div",{class:"col-12 form-title"},[d("span",null,"Aperier"),d("span",null,"Submission System")],-1)),N$={class:"col-12"},B$={class:"col-12 bg-custom-gray p-5 d-flex flex-column justify-content-center align-items-center"},O$=GE(()=>d("p",null,"You have successfully created an account.",-1));function L$(r,l,h,g,m,C){const _=nt("router-link");return le(),he("section",S$,[d("div",I$,[d("div",M$,[P$,d("div",N$,[d("div",B$,[O$,d("p",null,[j("You may now "),ae(_,{to:{name:"Login"}},{default:je(()=>[j("log in.")]),_:1})])])])])])])}const R$=pt(T$,[["render",L$],["__scopeId","data-v-ed23026f"]]);const z$={data(){return{studyList:{}}},async mounted(){let r=localStorage.getItem("userEmail");this.studyList=(await nn.get(`${Pt.domain}/api/all-studies?email=${r}`)).data.data},methods:{badgeColor(r){switch(r){case"Published":case"Accepted":return"badge bg-success";case"With Editor":return"badge bg-info";case"Archived":case"In Review":return"badge bg-warning";case"Revision Required":return"badge bg-danger"}}}},j$=r=>(Vt("data-v-f8275589"),r=r(),Ut(),r),F$={class:"content-wrapper"},$$={class:"content"},V$={class:"container-fluid"},U$={class:"row mx-4"},H$={class:"card col-12"},q$=ko('<div class="card-header" data-v-f8275589><h3 class="card-title" data-v-f8275589>All Issues</h3><div class="card-tools" data-v-f8275589><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-f8275589><i class="fas fa-minus" data-v-f8275589></i></button></div></div>',1),W$={class:"card-body"},G$={class:"float-right my-2 mb-4"},K$={id:"example2",class:"table table-bordered table-striped table-head-fixed"},Y$=j$(()=>d("thead",null,[d("tr",null,[d("th",null,"ID"),d("th",{width:"500px"},"Title"),d("th",null,"Status"),d("th",null,"Date"),d("th",null,"Action")])],-1)),Q$={key:0},Z$={key:1};function J$(r,l,h,g,m,C){const _=nt("ContentHeader"),v=nt("router-link");return le(),he("div",F$,[ae(_,{title:"Author Dashboard"}),d("section",$$,[d("div",V$,[d("div",U$,[d("div",H$,[q$,d("div",W$,[d("div",G$,[ae(v,{to:{name:"Author Submit"},class:"btn-register"},{default:je(()=>[j("New Submission ")]),_:1})]),d("table",K$,[Y$,d("tbody",null,[(le(!0),he(rt,null,Mt(m.studyList,y=>(le(),he("tr",{key:y},[d("td",null,"CGJ-"+be(y.id),1),d("td",null,be(y.title),1),d("td",null,[d("span",{class:Pi(C.badgeColor(y.name))},be(y.name),3)]),d("td",null,be(y.created_at),1),y.name==="Revision Required"?(le(),he("td",Q$,[ae(v,{to:{name:"Issue Details Edit",params:{id:y.id}},target:"_blank"},{default:je(()=>[j("View")]),_:2},1032,["to"])])):(le(),he("td",Z$,[ae(v,{to:{name:"Issue Details View",params:{id:y.id}},target:"_blank"},{default:je(()=>[j("View")]),_:2},1032,["to"])]))]))),128))])])])])])])])])}const X$=pt(z$,[["render",J$],["__scopeId","data-v-f8275589"]]);const e7={components:{AccordionComponent:hw,AccordionItemComponent:fw}},vo=r=>(Vt("data-v-66d15a21"),r=r(),Ut(),r),t7={class:"content-wrapper"},n7={class:"content"},o7={class:"container-fluid"},i7={class:"row mx-4"},r7={class:"card col-12"},s7=ko('<div class="card-header" data-v-66d15a21><h3 class="card-title" data-v-66d15a21>Instruction to author</h3><div class="card-tools" data-v-66d15a21><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-66d15a21><i class="fas fa-minus" data-v-66d15a21></i></button></div></div>',1),a7={class:"card-body p-5"},l7={class:"journal-details-body"},c7=ko("<p data-v-66d15a21>Submission Checklist <br data-v-66d15a21>Please: <br data-v-66d15a21> \u2022 Read the Aims &amp; Scope to gain an overview and assess if your manuscript is suitable for this journal; <br data-v-66d15a21> \u2022 Use the Microsoft Word template to prepare your manuscript; <br data-v-66d15a21> \u2022 Make sure that issues about publication ethics, research ethics, copyright, authorship, figure formats,\xA0data and references format have been appropriately considered; <br data-v-66d15a21> \u2022 Ensure that all authors have approved the content of the submitted manuscript. <br data-v-66d15a21><br data-v-66d15a21><strong data-v-66d15a21>Editorial procedure</strong> <br data-v-66d15a21>This journal follows a double-blind reviewing procedure. This means that the author will remain anonymous to the reviewers throughout peer review. <br data-v-66d15a21><br data-v-66d15a21><strong data-v-66d15a21>Submission</strong> <br data-v-66d15a21>In order to submit your paper, authors are should login and submit the manuscript through Aperier online submission system. Electronic submission substantially reduces the editorial processing and reviewing times and shortens overall publication times. Please follow the hyperlink \u201CSubmit Your Manuscript\u201D on the right and upload all of your manuscript files following the instructions given on the screen </p>",1),d7={class:"row my-5"},u7={class:"col-12"},h7=vo(()=>d("ul",null,[d("li",null," Original Article: This should describe new and/or carefully investigated findings, and research methods should be given in sufficient detail for others to verify the work. The maximum word count is 8000 words, excluding References. "),d("li",null," Review articles consider the implications and lessons to be learned, including the need for future inquiry, from a body of research on any sustainability topic. The maximum word count is 8000 words, excluding References. However, it is acceptable for some articles to exceed this number base on the research nature, such as systematic reviews. "),d("li",null," Short Communication Article: This short communication is suitable for reporting the results of small investigations or giving details of new models, innovative methods or techniques. The style of main sections doesn\u2019t need to conform to that of full-length papers. The maximum word count is 2500 words, excluding References. Articles in this category are reviewed at the discretion of the editor-in-chief.")],-1)),f7=vo(()=>d("p",null,[j("A cover letter can be included with each manuscript submission. It should be concise and explain why the content of the paper is significant, placing the findings in the context of existing work. It should explain why the manuscript fits the scope of the journal. The cover Letter should be inserted in the comment. "),d("br"),j("All cover letters are required to include the statements:")],-1)),p7=vo(()=>d("ul",null,[d("li",null," We confirm that neither the manuscript nor any parts of its content are currently under consideration or published in another journal."),d("li",null,"All authors have approved the manuscript and agree with its submission to (journal name).")],-1)),m7=vo(()=>d("p",null,"Authors wishing to include figures or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) of the material and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors.",-1)),g7=vo(()=>d("ul",null,[d("li",null,[j("Research manuscripts should comprise: "),d("ul",null,[d("li",null,"Front matter: Title, Author list, Affiliations, Abstract, Keywords"),d("li",null,"Research manuscript sections: Introduction, Materials and Methods, Results, Discussion, Conclusions (optional)."),d("li",null,"Back matter: Supplementary Materials, Acknowledgments, Author Contributions, Conflicts of Interest, References.\xA0")])]),d("li",null,"*Follow the Microsoft Word template"),d("li",null,[j("Word Count "),d("ul",null,[d("li",null,"While no maximum length for manuscripts is prescribed, authors are encouraged to write concisely and clearly. As a guide, the maximum word count is 8000 words, excluding References in length.")])]),d("li",null,[j("Language "),d("ul",null,[d("li",null,"Please write your text in good English (American or British usage is accepted, but not a mixture of these). ")])]),d("li",null,[j("Style of Presentation "),d("ul",null,[d("li",null,"All manuscripts must be prepared according to the Aperier submission Template.")])])],-1)),b7=vo(()=>d("p",null,"The manuscript should be arranged as follows:",-1)),w7=vo(()=>d("ul",null,[d("li",null,"Title page (including name(s) of author(s), a concise and informative title, affiliation(s) and address(es) of the author(s), e-mail address, telephone and fax numbers of the corresponding author.)"),d("li",null,"Title: The title of your manuscript should be concise, specific and relevant. It should identify if the study reports (human or animal) trial data, or is a systematic review, meta-analysis or replication study. Please do not include abbreviated or short forms of the title, such as a running title or head. These will be removed by our Editorial Office."),d("li",null,"Author List and Affiliations: Authors' full first and last names must be provided. The initials of any middle names can be added. The Aperier standard format is used for affiliations: complete address information including city, zip code, state/province, and country. At least one author should be designated as corresponding author, and his or her email address and other details should be included at the end of the affiliation section. Please read the Authorship criteria of Aperier publishing policy."),d("li",null,"Abstract - about 200 words for an original article, a review article, and an overview article"),d("li",null,"Up to six keywords")],-1)),_7=vo(()=>d("p",null,[j('Divide your article into clearly defined and numbered sections. Subsections should be numbered 1. (then 1.1., 1.2., ...), 1.1.1., etc. (the abstract is not included in section numbering). Use this numbering also for internal cross-referencing: do not just refer to "the text". Any subsection may be given a brief heading. Each heading should appear on its own separate line.'),d("br"),d("br"),d("strong",null,"1-Introduction"),d("br"),j(" State the objectives of the work and provide an adequate background, avoiding a detailed literature survey or a summary of the results. The introduction should briefly place the study in a broad context and highlight why it is important. It should define the purpose of the work and its significance, including specific hypotheses being tested. The current state of the research field should be reviewed carefully and key publications cited. Please highlight controversial and diverging hypotheses when necessary. Finally, briefly mention the main aim of the work and highlight the main conclusions. Keep the introduction comprehensible to scientists working outside the topic of the paper. * Abbreviations should be defined at first mention and used consistently thereafter."),d("br"),d("br"),d("strong",null,"2-Literature Review"),d("br"),j(" Provide an adequate background with detailed literature survey or a summary of the results of previous studies."),d("br"),d("br"),d("strong",null,"3-Methodology"),d("br"),j(" Provide sufficient detail to allow the work to be reproduced. Methods already published should be indicated by a reference: only relevant modifications should be described."),d("br"),d("br"),d("strong",null,"4-Results"),d("br"),j(" Provide sufficient detail to allow the results to be meaningful and informative. Provide a concise and precise description of the experimental results, their interpretation as well as the experimental conclusions that can be drawn."),d("br"),d("br"),d("strong",null,"5-Discussion"),d("br"),j(" This should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is often appropriate. Avoid extensive citations and discussion of published literature. The findings and their implications should be discussed in the broadest context possible and limitations of the work highlighted. Future research directions may also be mentioned. This section may be combined with Results."),d("br"),d("br"),d("strong",null,"6-Conclusion"),d("br"),j(" The main conclusions of the study may be presented in a short Conclusions section, which may stand alone or form a subsection of a Discussion or Results and Discussion section."),d("br"),d("br"),d("strong",null,"-No Footnotes, but Endnotes Acceptable"),d("br"),j(" Aperier Journals does not accept Footnotes due to technical problems of online publication. Please convert all footnotes to endnotes, otherwise please incorporate all footnotes into text at its best. ")],-1)),k7=vo(()=>d("p",null,[j("Both tables and figures must be placed in the main body of the manuscript, after their citation. Table and figure should be discussed."),d("br"),j(" File for Figures and Schemes should be provided during submission in a single zip archive and at a sufficiently high resolution (minimum 1000 pixels width/height, or a resolution of 300 dpi or higher). Common formats are accepted."),d("br"),j(" All Figures, Schemes and Tables should be inserted into the main text close to their first citation and must be numbered following their number of appearance (Figure 1, Scheme I, Figure 2, Scheme II, Table 1, etc.)."),d("br"),j(" All table columns should have an explanatory heading. To facilitate the copy-editing of larger tables, smaller fonts may be used, but no less than 8 pt. in size. Authors should use the Table option of Microsoft Word to create tables.")],-1)),v7=vo(()=>d("p",null,[j("authors are expected to adhere to the guidelines of APA (American Psychological Association). Text: Citations in the text should follow the referencing style used by the American Psychological Association. You are referred to the Publication Manual of the American Psychological Association, Sixth (6th) or Seventh (7th) Edition. If available, the Digital Object Identifier (DOI) can be added at the end of the reference in question."),d("br"),j(" In the text, references should be cited by author and year (e.g., Khatib, 1994; Modi & B\xF6qrek, 1991; Hammer et al. 1993) and listed in alphabetical order in the reference list. If there is more than one work by the same author or team of authors in the same year, a, b, etc. should be added to the year both in the text and in the list of references.")],-1)),y7=vo(()=>d("ul",null,[d("li",null,"Journal papers: name(s) and initial(s) of all authors; year; full title; journal title; volume number; first and last page numbers. Example: Yahaya, I. S., Amat, A., Maryam, S., Khatib, S. F. A., & Sabo, A. U. (2020). Bibliometric Analysis Trend on Business Model Innovation. Journal of Critical Reviews, 7(09), 2391\u20132407."),d("li",null,"Single contributions in a book: name(s) and initial(s) of all authors; year; title of article; editor(s); title of book; edition; volume number; publisher; place of publication; page numbers Example: Ayama H, & Awass T. (1995). Global sustainability and the role of Asia. In: Sasaki T (ed) Nature and human communities, Emerald, Tokyo, pp 187\u2013216"),d("li",null,"Book: name and initial(s) of all authors; year; title; publisher; place of publication Example: Aisley RG (2020) Ecosystem geography. Wiley, Berlin Heidelberg New York")],-1)),A7=vo(()=>d("ul",null,[d("li",null,"Funding: All sources of funding of the study should be disclosed. Clearly indicate grants that you have received in support of your research work and if you received funds to cover publication costs. Note that some funders will not refund article processing charges (APC) if the funder and grant number are not clearly and correctly identified in the paper. Funding information can be entered separately into the submission system by the authors during submission of their manuscript.")],-1)),C7=vo(()=>d("p",null,"Please add: \u201CThis research received no external funding\u201D or \u201CThis research was funded by [name of funder] grant number [xxx]\u201D and \u201CThe APC was funded by [XXX]\u201D in this section. Check carefully that the details given are accurate and use the standard spelling of funding agency names at https://search.crossref.org/funding, any errors may affect your future funding.",-1)),x7=vo(()=>d("ul",null,[d("li",null,"Acknowledgments: In this section you can acknowledge any support given which is not covered by the author contribution or funding sections. This may include administrative and technical support, or donations in kind (e.g., materials used for experiments). "),d("li",null,"Author Contributions: Each author is expected to have made substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data; or the creation of new software used in the work; or have drafted the work or substantively revised it; AND has approved the submitted version (and version substantially edited by journal staff that involves the author\u2019s contribution to the study); AND agrees to be personally accountable for the author\u2019s own contributions and for ensuring that questions related to the accuracy or integrity of any part of the work, even ones in which the author was not personally involved, are appropriately investigated, resolved, and documented in the literature. For research articles with several authors, a short paragraph specifying their individual contributions must be provided. The following statements should be used;")],-1)),E7=vo(()=>d("p",null,[j('"Conceptualization, X.X. and Y.Y.; Methodology, X.X.; Software, X.X.; Validation, X.X., Y.Y. and Z.Z.; Formal Analysis, X.X.; Investigation, X.X.; Resources, X.X.; Data Curation, X.X.; Writing \u2013 Original Draft Preparation, X.X.; Writing \u2013 Review & Editing, X.X.; Visualization, X.X.; Supervision, X.X.; Project Administration, X.X.; Funding Acquisition, Y.Y.\u201D,'),d("br"),j(' Conflicts of Interest: Authors must identify and declare any personal circumstances or interest that may be perceived as influencing the representation or interpretation of reported research results. If there is no conflict of interest, please state "The authors declare no conflict of interest."')],-1)),D7=vo(()=>d("ul",null,[d("li",null,"The article will be published online after receipt of the corrected proofs. This is the official first publication citable. After release of the printed version, the paper can also be cited by issue and page numbers.")],-1)),T7=vo(()=>d("ul",null,[d("li",null,"During the submission process, please suggest three potential reviewers with the appropriate expertise to review the manuscript. The editors will not necessarily approach these referees. Please provide detailed contact information (address, homepage, phone, e-mail address). The proposed referees should neither be current collaborators of the co-authors nor have published with any of the co-authors of the manuscript within the last five years. Proposed reviewers should be from different institutions to the authors. You may identify appropriate Editorial Board members of the journal as potential reviewers. You may suggest reviewers from among the authors that you frequently cite in your paper.")],-1)),S7=vo(()=>d("ul",null,[d("li",null,"Authors can recommend potential reviewers. Journal editors will check to make sure there are no conflicts of interest before contacting those reviewers, and will not consider those with competing interests. Reviewers are asked to declare any conflicts of interest. Authors can also enter the names of potential peer reviewers they wish to exclude from consideration in the peer review of their manuscript, during the initial submission progress. The editorial team will respect these requests so long as this does not interfere with the objective and thorough assessment of the submission.")],-1)),I7=vo(()=>d("ul",null,[d("li",null,"To facilitate proper peer-reviewing of your manuscript, it is essential that it is submitted in grammatically correct English. If you are not a native English speaker, we recommend that you have your manuscript professionally edited before submission or read by a native English-speaking colleague. This can be carried out by Aperier Language editing service. Professional editing will enable reviewers and future readers to more easily read and assess the content of submitted manuscripts. All accepted manuscripts undergo language editing; however, an additional fee will be charged to authors if very extensive English corrections must be made by the Editorial Office.")],-1));function M7(r,l,h,g,m,C){const _=nt("ContentHeader"),v=nt("AccordionItemComponent"),y=nt("AccordionComponent");return le(),he("div",t7,[ae(_,{title:"Instruction to Author"}),d("section",n7,[d("div",o7,[d("div",i7,[d("div",r7,[s7,d("div",a7,[d("div",l7,[c7,d("div",d7,[d("div",u7,[ae(y,null,{default:je(()=>[ae(v,{heading_id:"headingOne",collapse_id:"collapseOne",title:"Type of Articles"},{default:je(()=>[h7]),_:1}),ae(v,{heading_id:"headingTwo",collapse_id:"collapseTwo",title:"Cover Letter"},{default:je(()=>[f7,p7]),_:1}),ae(v,{heading_id:"headingThree",collapse_id:"collapseThree",title:"Legal requirements"},{default:je(()=>[m7]),_:1}),ae(v,{heading_id:"headingFour",collapse_id:"collapseFour",title:"Manuscript Preparation"},{default:je(()=>[g7]),_:1}),ae(v,{heading_id:"headingFive",collapse_id:"collapseFive",title:"Front Matter"},{default:je(()=>[b7,w7]),_:1}),ae(v,{heading_id:"headingSix",collapse_id:"collapseSix",title:"Research Manuscript Structure"},{default:je(()=>[_7]),_:1}),ae(v,{heading_id:"headingSeven",collapse_id:"collapseSeven",title:"Tables and Figures "},{default:je(()=>[k7]),_:1}),ae(v,{heading_id:"headingEight",collapse_id:"collapseEight",title:"Reference Style Guides "},{default:je(()=>[v7,y7]),_:1}),ae(v,{heading_id:"headingNine",collapse_id:"collapseNine",title:"Back Matter"},{default:je(()=>[A7,C7,x7,E7]),_:1}),ae(v,{heading_id:"headingTen",collapse_id:"collapseTen",title:"Online First"},{default:je(()=>[D7]),_:1}),ae(v,{heading_id:"headingEleven",collapse_id:"collapseEleven",title:"Reviewer Suggestions"},{default:je(()=>[T7]),_:1}),ae(v,{heading_id:"headingTwelve",collapse_id:"collapseTwelve",title:"Reviewers Recommendation"},{default:je(()=>[S7]),_:1}),ae(v,{heading_id:"headingThirteen",collapse_id:"collapseThirteen",title:"English Corrections"},{default:je(()=>[I7]),_:1})]),_:1})])])])])])])])])])}const P7=pt(e7,[["render",M7],["__scopeId","data-v-66d15a21"]]);const N7={data(){return{authorCount:6,metadata:{journals:[],studyTypes:[]},config:{headers:{"Content-type":"multipart/form-data"}},formData:{journals:"",studyTypes:"",email:localStorage.getItem("userEmail"),title:"",abstract:"",keywords:"",page:"",authors:[],manuscript_file_temp:"",comments:"",authors_agreement:!1,not_published:!1,ethical_guidelines:!1,third_party_acknowledgement:!1},fullData:new FormData}},methods:{addAuthor(){this.authorCount++,this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""})},removeAuthor(){this.authorCount>1?(this.authorCount--,this.formData.authors.pop()):alert("There should be at least one author")},handleFileUpload(){this.formData.manuscript_file_temp=this.$refs.file.files[0]},openFile(){document.getElementById("file").click()},async submitForm(){this.fullData.append("manuscript_file",this.formData.manuscript_file_temp),this.fullData.append("data",JSON.stringify(this.formData));let r=await nn.post(`${Pt.domain}/api/submit-study`,this.fullData);if(r.data.success){this.$swal({text:r.data.message,icon:"success"}),this.formData={journals:"",studyTypes:"",email:"",page:"",title:"",abstract:"",keywords:"",authors:[],manuscript_file_temp:"",comments:"",authors_agreement:!1,not_published:!1,ethical_guidelines:!1,third_party_acknowledgement:!1};for(let l=0;l<this.authorCount;l++)this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""});this.$router.push({name:"Author Dashboard"})}else this.$swal({text:r.data.message,icon:"error"})}},async mounted(){let r=await nn.get(`${Pt.domain}/api/journals`);this.metadata.journals=r.data.data.journals,this.metadata.studyTypes=r.data.data.studyTypes,this.formData.journals=this.metadata.journals[0].id,this.formData.studyTypes=this.metadata.studyTypes[0].id;for(let l=0;l<this.authorCount;l++)this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""})}},Pn=r=>(Vt("data-v-1216acbb"),r=r(),Ut(),r),B7={class:"content-wrapper"},O7={class:"content"},L7={class:"container-fluid"},R7={class:"row mx-4"},z7={class:"card col-12"},j7={class:"card-body d-flex flex-column p-5",style:{gap:"30px"}},F7={class:"row"},$7=Pn(()=>d("div",{class:"col-2"},"SELECT JOURNAL:*",-1)),V7={class:"col-4"},U7=["value"],H7={class:"row"},q7=Pn(()=>d("div",{class:"col-2"},"Study type:*",-1)),W7={class:"col-4"},G7=["value"],K7={class:"row"},Y7=Pn(()=>d("div",{class:"col-2"},"Page:*",-1)),Q7={class:"col-10"},Z7={class:"row"},J7=Pn(()=>d("div",{class:"col-2"},"Title:*",-1)),X7={class:"col-10"},e9={class:"row"},t9=Pn(()=>d("div",{class:"col-2"},"Abstract:*",-1)),n9={class:"col-10"},o9={class:"row"},i9=Pn(()=>d("div",{class:"col-2"},"Keywords:*",-1)),r9={class:"col-10"},s9=Pn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Authors"),d("hr")],-1)),a9={class:"row"},l9={class:"author-card-title col-2 p-1"},c9={class:"col-10 row"},d9={class:"col-6 d-flex flex-column pl-3",style:{gap:"15px"}},u9={class:"row"},h9=Pn(()=>d("div",{class:"col-4"},"Prefix:*",-1)),f9={class:"col-8"},p9=["onUpdate:modelValue"],m9=ko('<option value="Dr." data-v-1216acbb>Dr.</option><option value="Mr." data-v-1216acbb>Mr.</option><option value="Mrs." data-v-1216acbb>Mrs.</option><option value="Prof." data-v-1216acbb>Prof.</option><option value="Assoc Prof." data-v-1216acbb>Assoc Prof.</option>',5),g9=[m9],b9={class:"row"},w9=Pn(()=>d("div",{class:"col-4"},"First (Given) Name:*",-1)),_9={class:"col-8"},k9=["onUpdate:modelValue"],v9={class:"row"},y9=Pn(()=>d("div",{class:"col-4"},"Last (Family) Name:*",-1)),A9={class:"col-8"},C9=["onUpdate:modelValue"],x9={class:"col-6 d-flex flex-column pl-5",style:{gap:"15px"}},E9={class:"row"},D9=Pn(()=>d("div",{class:"col-4"},"Correspondence:*",-1)),T9={class:"col-8"},S9=["onUpdate:modelValue"],I9={class:"row"},M9=Pn(()=>d("div",{class:"col-4"},"Middle Name:",-1)),P9={class:"col-8"},N9=["onUpdate:modelValue"],B9={class:"row"},O9=Pn(()=>d("div",{class:"col-4"},"E-Mail:*",-1)),L9={class:"col-8"},R9=["onUpdate:modelValue"],z9={class:"col-12 row pl-3 mt-3"},j9=Pn(()=>d("div",{class:"col-2"},"Affiliation: *",-1)),F9={class:"col-10 pr-0 mr-0"},$9=["onUpdate:modelValue"],V9={class:"col-12 align-items-center justify-content-end d-flex",style:{gap:"20px"}},U9=Pn(()=>d("span",null,"Remove AUTHORS",-1)),H9=Pn(()=>d("i",{class:"fa-solid fa-square-minus text-danger"},null,-1)),q9=[U9,H9],W9=Pn(()=>d("span",null,"ADD MORE AUTHORS",-1)),G9=Pn(()=>d("i",{class:"fa-solid fa-square-plus text-success"},null,-1)),K9=[W9,G9],Y9=Pn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Upload File"),d("hr")],-1)),Q9={class:"row"},Z9={class:"col-4 offset-4 d-flex flex-column align-items-center",style:{gap:"15px"}},J9=Pn(()=>d("span",null,"ATTACH MANUSCRIPT*",-1)),X9=Pn(()=>d("span",null,"Max size is 5 MB",-1)),e8=Pn(()=>d("span",null,[j("Please download and fill the "),d("span",{class:"text-info"},"Manuscript Template")],-1)),t8=Pn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"COMMENTS TO EDITOR"),d("hr")],-1)),n8={class:"row px-4"},o8={class:"row"},i8={class:"col-12 p-4"},r8={class:"form-check mb-2"},s8=Pn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault"}," * Confirm that All co-authors are listed and agree the submission. ",-1)),a8={class:"form-check"},l8=Pn(()=>d("label",{class:"form-check-label",for:"flexCheckChecked"}," * Confirm that the manuscript has been submitted solely to this journal and is not published, in press, or submitted elsewhere. ",-1)),c8={class:"form-check mb-2"},d8=Pn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault1"}," * Confirm that all the research meets the ethical guidelines, including adherence to the legal requirements of the study country. ",-1)),u8={class:"form-check mb-2"},h8=Pn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault2"}," * I/We have declared any potential conflict of interest in the research. Any support from a third party has been noted in the Acknowledgements. ",-1)),f8={class:"row align-self-end"};function p8(r,l,h,g,m,C){const _=nt("ContentHeader");return le(),he("div",B7,[ae(_,{title:"New Submission"}),d("section",O7,[d("div",L7,[d("div",R7,[d("div",z7,[d("div",j7,[d("div",F7,[$7,d("div",V7,[Oe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.journals=v)},[(le(!0),he(rt,null,Mt(m.metadata.journals,v=>(le(),he("option",{key:v.id,value:v.id},be(v.title),9,U7))),128))],512),[[bi,m.formData.journals]])])]),d("div",H7,[q7,d("div",W7,[Oe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.studyTypes=v)},[(le(!0),he(rt,null,Mt(m.metadata.studyTypes,v=>(le(),he("option",{key:v.id,value:v.id},be(v.name),9,G7))),128))],512),[[bi,m.formData.studyTypes]])])]),d("div",K7,[Y7,d("div",Q7,[Oe(d("input",{type:"text",class:"p-1",placeholder:"From-To eg. 1-100","onUpdate:modelValue":l[2]||(l[2]=v=>m.formData.page=v)},null,512),[[tt,m.formData.page]])])]),d("div",Z7,[J7,d("div",X7,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Title","onUpdate:modelValue":l[3]||(l[3]=v=>m.formData.title=v)},null,512),[[tt,m.formData.title]])])]),d("div",e9,[t9,d("div",n9,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"13",class:"w-100 p-3",placeholder:"Abstract","onUpdate:modelValue":l[4]||(l[4]=v=>m.formData.abstract=v)},null,512),[[tt,m.formData.abstract]])])]),d("div",o9,[i9,d("div",r9,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Keywords; seperate the keywords with semicolon (;)","onUpdate:modelValue":l[5]||(l[5]=v=>m.formData.keywords=v)},null,512),[[tt,m.formData.keywords]])])]),s9,d("div",a9,[(le(!0),he(rt,null,Mt(m.formData.authors,(v,y)=>(le(),he("div",{class:"author-card row col-12 p-3 mb-4",key:v},[d("div",l9,"Author #"+be(y+1),1),d("div",c9,[d("div",d9,[d("div",u9,[h9,d("div",f9,[Oe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":S=>v.prefix=S},g9,8,p9),[[bi,v.prefix]])])]),d("div",b9,[w9,d("div",_9,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.first_name=S},null,8,k9),[[tt,v.first_name]])])]),d("div",v9,[y9,d("div",A9,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.last_name=S},null,8,C9),[[tt,v.last_name]])])])]),d("div",x9,[d("div",E9,[D9,d("div",T9,[Oe(d("input",{type:"checkbox",class:"","onUpdate:modelValue":S=>v.correspondence=S},null,8,S9),[[oo,v.correspondence]])])]),d("div",I9,[M9,d("div",P9,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.middle_name=S},null,8,N9),[[tt,v.middle_name]])])]),d("div",B9,[O9,d("div",L9,[Oe(d("input",{type:"email",class:"w-100","onUpdate:modelValue":S=>v.email=S},null,8,R9),[[tt,v.email]])])])]),d("div",z9,[j9,d("div",F9,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.affiliation=S},null,8,$9),[[tt,v.affiliation]])])])])]))),128)),d("div",V9,[d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[6]||(l[6]=v=>C.removeAuthor())},q9),d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[7]||(l[7]=v=>C.addAuthor())},K9)])]),Y9,d("div",Q9,[d("div",Z9,[J9,d("input",{class:"form-control",hidden:"",onChange:l[8]||(l[8]=v=>C.handleFileUpload()),type:"file",ref:"file",name:"file",id:"file"},null,544),d("button",{onClick:l[9]||(l[9]=v=>C.openFile()),class:"btn-register"},"Select File"),X9,e8])]),t8,d("div",n8,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"10",class:"w-100 p-3",placeholder:"Write the Cover Letter here","onUpdate:modelValue":l[10]||(l[10]=v=>m.formData.comments=v)},null,512),[[tt,m.formData.comments]])]),d("div",o8,[d("div",i8,[d("div",r8,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[11]||(l[11]=v=>m.formData.authors_agreement=v)},null,512),[[oo,m.formData.authors_agreement]]),s8]),d("div",a8,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":l[12]||(l[12]=v=>m.formData.not_published=v)},null,512),[[oo,m.formData.not_published]]),l8]),d("div",c8,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault1","onUpdate:modelValue":l[13]||(l[13]=v=>m.formData.ethical_guidelines=v)},null,512),[[oo,m.formData.ethical_guidelines]]),d8]),d("div",u8,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2","onUpdate:modelValue":l[14]||(l[14]=v=>m.formData.third_party_acknowledgement=v)},null,512),[[oo,m.formData.third_party_acknowledgement]]),h8])])]),d("div",f8,[d("button",{class:"btn-register",onClick:l[15]||(l[15]=v=>C.submitForm())},"Submit Manuscript")])])])])])])])}const m8=pt(N7,[["render",p8],["__scopeId","data-v-1216acbb"]]);const g8={data(){return{formData:{prefix:"Dr.",first_name:"",middle_name:"",last_name:"",degree:"",email:"",phone:"",orchid:"",department:"",institution:"",city:"",country:"",areaOfExpertise:[]}}},methods:{async handleForm(){await nn.post(`${Pt.domain}/api/profile-update`,this.formData).then(r=>{r.data.success?(this.$swal({text:"User updated  successfully",icon:"success"}),localStorage.removeItem("userEmail"),localStorage.setItem("userEmail",this.formData.email),this.getUser()):this.$swal({text:r.data.message,icon:"error"})}).catch(r=>{console.log(r)})},async getUser(){let r=await nn.get(`${Pt.domain}/api/profile/`+localStorage.getItem("userEmail"));r=r.data.data,r.areaOfExpertise=r.areaOfExpertise.map(l=>l.area_name),this.formData=r}},mounted(){this.getUser()}},ho=r=>(Vt("data-v-721766b2"),r=r(),Ut(),r),b8={class:"content-wrapper"},w8={class:"content"},_8={class:"container-fluid"},k8={class:"row mx-4"},v8={class:"card col-12"},y8=ko('<div class="card-header" data-v-721766b2><h3 class="card-title" data-v-721766b2>Update your information</h3><div class="card-tools" data-v-721766b2><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-721766b2><i class="fas fa-minus" data-v-721766b2></i></button></div></div>',1),A8={class:"row card-body"},C8={class:"col-12 bg-custom-gray"},x8={class:"col-6 offset-3 p-4"},E8={class:"custom-form-group"},D8=ho(()=>d("span",null,[j("Prefix"),d("span",{class:"text-danger"},"*")],-1)),T8=ko('<option value="Dr." data-v-721766b2>Dr.</option><option value="Mr." data-v-721766b2>Mr.</option><option value="Mrs." data-v-721766b2>Mrs.</option><option value="Prof." data-v-721766b2>Prof.</option><option value="Assoc Prof." data-v-721766b2>Assoc Prof.</option>',5),S8=[T8],I8={class:"custom-form-group"},M8=ho(()=>d("span",null,[j("First (Given) Name:"),d("span",{class:"text-danger"},"*")],-1)),P8={class:"custom-form-group"},N8=ho(()=>d("span",null,"Middle Name:",-1)),B8={class:"custom-form-group"},O8=ho(()=>d("span",null,[j("Last (Family) Name:"),d("span",{class:"text-danger"},"*")],-1)),L8={class:"custom-form-group"},R8=ho(()=>d("span",null,"Degree:",-1)),z8={class:"col-12"},j8={class:"col-6 offset-3 p-4"},F8={class:"custom-form-group"},$8=ho(()=>d("span",null,[j("Primary E-Mail:"),d("span",{class:"text-danger"},"*")],-1)),V8={class:"custom-form-group"},U8=ho(()=>d("span",null,"Phone:",-1)),H8={class:"custom-form-group"},q8=ho(()=>d("span",null,"ORCID:",-1)),W8={class:"col-12 bg-custom-gray"},G8={class:"col-6 offset-3 p-4"},K8={class:"custom-form-group"},Y8=ho(()=>d("span",null,"Department:",-1)),Q8={class:"custom-form-group"},Z8=ho(()=>d("span",null,[j("Institution:"),d("span",{class:"text-danger"},"*")],-1)),J8={class:"custom-form-group"},X8=ho(()=>d("span",null,[j("City:"),d("span",{class:"text-danger"},"*")],-1)),eV={class:"custom-form-group"},tV=ho(()=>d("span",null,[j("Country:"),d("span",{class:"text-danger"},"*")],-1)),nV={class:"col-12"},oV={class:"col-6 offset-3 p-4"},iV={class:"custom-form-group"},rV=ho(()=>d("span",null,"Areas of Expertise:",-1)),sV={class:"w-50"},aV={class:"d-flex mb-3",style:{gap:"10px"}},lV=ho(()=>d("span",null,[j("(1)"),d("span",{class:"text-danger"},"*")],-1)),cV={class:"d-flex mb-3",style:{gap:"10px"}},dV=ho(()=>d("span",null,[j("(2)"),d("span",{class:"text-danger"},"*")],-1)),uV={class:"d-flex mb-3",style:{gap:"10px"}},hV=ho(()=>d("span",null,"(3) \xA0",-1)),fV={class:"d-flex mb-3",style:{gap:"10px"}},pV=ho(()=>d("span",null,"(4) \xA0",-1)),mV={class:"d-flex mb-3",style:{gap:"10px"}},gV=ho(()=>d("span",null,"(5) \xA0",-1)),bV={class:"d-flex mb-3",style:{gap:"10px"}},wV=ho(()=>d("span",null,"(6) \xA0",-1)),_V=ho(()=>d("div",{class:"col-12 text-end mt-4"},[d("button",{type:"submit",class:"btn-register"},"Register")],-1));function kV(r,l,h,g,m,C){const _=nt("ContentHeader");return le(),he("div",b8,[ae(_,{title:"Update Profile"}),d("section",w8,[d("div",_8,[d("div",k8,[d("div",v8,[y8,d("div",A8,[d("form",{action:"",method:"post",onSubmit:l[18]||(l[18]=Bu(v=>C.handleForm(),["prevent"]))},[d("div",C8,[d("div",x8,[d("div",E8,[D8,Oe(d("select",{name:"",class:"w-50",id:"","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.prefix=v)},S8,512),[[bi,m.formData.prefix]])]),d("div",I8,[M8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.first_name=v)},null,512),[[tt,m.formData.first_name]])]),d("div",P8,[N8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[2]||(l[2]=v=>m.formData.middle_name=v)},null,512),[[tt,m.formData.middle_name]])]),d("div",B8,[O8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[3]||(l[3]=v=>m.formData.last_name=v)},null,512),[[tt,m.formData.last_name]])]),d("div",L8,[R8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[4]||(l[4]=v=>m.formData.degree=v)},null,512),[[tt,m.formData.degree]])])])]),d("div",z8,[d("div",j8,[d("div",F8,[$8,Oe(d("input",{type:"email",class:"custom-input","onUpdate:modelValue":l[5]||(l[5]=v=>m.formData.email=v)},null,512),[[tt,m.formData.email]])]),d("div",V8,[U8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[6]||(l[6]=v=>m.formData.phone=v)},null,512),[[tt,m.formData.phone]])]),d("div",H8,[q8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[7]||(l[7]=v=>m.formData.orchid=v)},null,512),[[tt,m.formData.orchid]])])])]),d("div",W8,[d("div",G8,[d("div",K8,[Y8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[8]||(l[8]=v=>m.formData.department=v)},null,512),[[tt,m.formData.department]])]),d("div",Q8,[Z8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[9]||(l[9]=v=>m.formData.institution=v)},null,512),[[tt,m.formData.institution]])]),d("div",J8,[X8,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[10]||(l[10]=v=>m.formData.city=v)},null,512),[[tt,m.formData.city]])]),d("div",eV,[tV,Oe(d("input",{type:"text",class:"custom-input","onUpdate:modelValue":l[11]||(l[11]=v=>m.formData.country=v)},null,512),[[tt,m.formData.country]])])])]),d("div",nV,[d("div",oV,[d("div",iV,[rV,d("div",sV,[d("div",aV,[lV,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[12]||(l[12]=v=>m.formData.areaOfExpertise[0]=v)},null,512),[[tt,m.formData.areaOfExpertise[0]]])]),d("div",cV,[dV,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[13]||(l[13]=v=>m.formData.areaOfExpertise[1]=v)},null,512),[[tt,m.formData.areaOfExpertise[1]]])]),d("div",uV,[hV,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[14]||(l[14]=v=>m.formData.areaOfExpertise[2]=v)},null,512),[[tt,m.formData.areaOfExpertise[2]]])]),d("div",fV,[pV,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[15]||(l[15]=v=>m.formData.areaOfExpertise[3]=v)},null,512),[[tt,m.formData.areaOfExpertise[3]]])]),d("div",mV,[gV,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[16]||(l[16]=v=>m.formData.areaOfExpertise[4]=v)},null,512),[[tt,m.formData.areaOfExpertise[4]]])]),d("div",bV,[wV,Oe(d("input",{type:"text",class:"custom-input flex-grow-1","onUpdate:modelValue":l[17]||(l[17]=v=>m.formData.areaOfExpertise[5]=v)},null,512),[[tt,m.formData.areaOfExpertise[5]]])])])])])]),_V],32)])])])])])])}const vV=pt(g8,[["render",kV],["__scopeId","data-v-721766b2"]]);var mw={exports:{}};(function(r,l){(function(h,g){g()})(mi,function(){function h(S,P){return typeof P>"u"?P={autoBom:!1}:typeof P!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),P={autoBom:!P}),P.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(S.type)?new Blob(["\uFEFF",S],{type:S.type}):S}function g(S,P,N){var M=new XMLHttpRequest;M.open("GET",S),M.responseType="blob",M.onload=function(){y(M.response,P,N)},M.onerror=function(){console.error("could not download file")},M.send()}function m(S){var P=new XMLHttpRequest;P.open("HEAD",S,!1);try{P.send()}catch{}return 200<=P.status&&299>=P.status}function C(S){try{S.dispatchEvent(new MouseEvent("click"))}catch{var P=document.createEvent("MouseEvents");P.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),S.dispatchEvent(P)}}var _=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof mi=="object"&&mi.global===mi?mi:void 0,v=_.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=_.saveAs||(typeof window!="object"||window!==_?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(S,P,N){var M=_.URL||_.webkitURL,F=document.createElement("a");P=P||S.name||"download",F.download=P,F.rel="noopener",typeof S=="string"?(F.href=S,F.origin===location.origin?C(F):m(F.href)?g(S,P,N):C(F,F.target="_blank")):(F.href=M.createObjectURL(S),setTimeout(function(){M.revokeObjectURL(F.href)},4e4),setTimeout(function(){C(F)},0))}:"msSaveOrOpenBlob"in navigator?function(S,P,N){if(P=P||S.name||"download",typeof S!="string")navigator.msSaveOrOpenBlob(h(S,N),P);else if(m(S))g(S,P,N);else{var M=document.createElement("a");M.href=S,M.target="_blank",setTimeout(function(){C(M)})}}:function(S,P,N,M){if(M=M||open("","_blank"),M&&(M.document.title=M.document.body.innerText="downloading..."),typeof S=="string")return g(S,P,N);var F=S.type==="application/octet-stream",ee=/constructor/i.test(_.HTMLElement)||_.safari,se=/CriOS\/[\d]+/.test(navigator.userAgent);if((se||F&&ee||v)&&typeof FileReader<"u"){var we=new FileReader;we.onloadend=function(){var ie=we.result;ie=se?ie:ie.replace(/^data:[^;]*;/,"data:attachment/file;"),M?M.location.href=ie:location=ie,M=null},we.readAsDataURL(S)}else{var te=_.URL||_.webkitURL,Y=te.createObjectURL(S);M?M.location=Y:location.href=Y,M=null,setTimeout(function(){te.revokeObjectURL(Y)},4e4)}});_.saveAs=y.saveAs=y,r.exports=y})})(mw);const yV={data(){return{study:{},keywords:{},authors:{}}},async mounted(){let r=await nn.get(`${Pt.domain}/api/study/`+this.$route.params.id);r=r.data.data,this.study=r.study,this.keywords=r.keywords.map(l=>l=l.keyword_title).join(";"),this.authors=r.authors},methods:{downloadURI(r){var l=document.createElement("a");l.download=r,l.href=`${Pt.domain}/storage/upload/studies/${r}`,l.click()},async downloadWithAxios(r){let l=`${Pt.domain}/storage/upload/studies/${r}`;await nn.get(l,{responseType:"blob"}).then(h=>{mw.exports.saveAs(h.data,r)}).catch(()=>console.log("error occured"))}}},ws=r=>(Vt("data-v-a4f3e252"),r=r(),Ut(),r),AV={class:"content-wrapper"},CV={class:"content"},xV={class:"container-fluid"},EV={class:"row mx-4"},DV={class:"card col-12"},TV=ko('<div class="card-header" data-v-a4f3e252><h3 class="card-title" data-v-a4f3e252>Manuscript Details</h3><div class="card-tools" data-v-a4f3e252><button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse" data-v-a4f3e252><i class="fas fa-minus" data-v-a4f3e252></i></button></div></div>',1),SV={class:"card-body p-5 d-flex flex-column",style:{gap:"20px"}},IV={class:"row"},MV=ws(()=>d("div",{class:"col-2"},"Manuscript ID",-1)),PV={class:"col-10"},NV={class:"row"},BV=ws(()=>d("div",{class:"col-2"},"Status",-1)),OV={class:"col-10"},LV={class:"row"},RV=ws(()=>d("div",{class:"col-2"},"Study type",-1)),zV={class:"col-10"},jV={class:"row"},FV=ws(()=>d("div",{class:"col-2"},"Title",-1)),$V={class:"col-10"},VV={class:"row"},UV=ws(()=>d("div",{class:"col-2"},"Abstract",-1)),HV={class:"col-10"},qV={class:"row"},WV=ws(()=>d("div",{class:"col-2"},"Keywords",-1)),GV={class:"col-10"},KV={class:"row"},YV=ws(()=>d("div",{class:"col-2"},"manuscript file",-1)),QV={class:"row"},ZV=ws(()=>d("div",{class:"col-2"},"Submitting Date",-1)),JV={class:"col-10"},XV=ws(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Authors"),d("hr")],-1)),eU={class:"row"},tU={class:"col-2"},nU={class:"col-10"},oU={class:"row"},iU=ws(()=>d("div",{class:"col-2"},"Email",-1)),rU={class:"col-10"};function sU(r,l,h,g,m,C){const _=nt("ContentHeader");return le(),he("div",AV,[ae(_,{title:"Manuscript CGJ-2001"}),d("section",CV,[d("div",xV,[d("div",EV,[d("div",DV,[TV,d("div",SV,[d("div",IV,[MV,d("div",PV,"CGJ-"+be(m.study.id),1)]),d("div",NV,[BV,d("div",OV,be(m.study.name),1)]),d("div",LV,[RV,d("div",zV,be(m.study.title),1)]),d("div",jV,[FV,d("div",$V,be(m.study.study_title),1)]),d("div",VV,[UV,d("div",HV,[d("p",null,be(m.study.abstract),1)])]),d("div",qV,[WV,d("div",GV,be(m.keywords),1)]),d("div",KV,[YV,d("div",{class:"col-10 text-primary",onClick:l[0]||(l[0]=v=>C.downloadURI(m.study.manuscript_file))},be(m.study.manuscript_file),1)]),d("div",QV,[ZV,d("div",JV,be(m.study.created_at),1)]),XV,(le(!0),he(rt,null,Mt(m.authors,v=>(le(),he("div",{class:"row",key:v.id},[d("div",eU,[d("div",tU,"Author #"+be(v.id+1),1),d("div",nU,be(v.first_name+" "+v.middle_name+" "+v.last_name),1)]),d("div",oU,[iU,d("div",rU,be(v.email),1)])]))),128))])])])])])])}const aU=pt(yV,[["render",sU],["__scopeId","data-v-a4f3e252"]]);const lU={data(){return{authorCount:6,metadata:{journals:[],studyTypes:[]},config:{headers:{"Content-type":"multipart/form-data"}},formData:{journals:"",studyTypes:"",title:"",abstract:"",keywords:"",authors:[],manuscript_file_temp:"",author_file_temp:"",comments:"",authors_agreement:!1,not_published:!1,ethical_guidelines:!1,third_party_acknowledgement:!1},fullData:new FormData,study:{},keywords:{},authors:{}}},methods:{addAuthor(){this.authorCount++,this.formData.authors.push({prefix:"Dr.",first_name:"",middle_name:"",last_name:"",correspondence:"",affiliation:"",email:""})},removeAuthor(){this.authorCount>1?(this.authorCount--,this.formData.authors.pop()):alert("There should be at least one author")},handleFileUpload(){this.formData.manuscript_file_temp=this.$refs.file.files[0],this.fullData.append("manuscript_file",this.formData.manuscript_file_temp)},handleFileUploadAuthor(){this.formData.author_file_temp=this.$refs.file2.files[0],this.fullData.append("authors_file",this.formData.author_file_temp)},openFile(){document.getElementById("file").click()},openFile2(){document.getElementById("file2").click()},async submitForm(){this.fullData.append("data",JSON.stringify(this.formData));let r=await nn.post(`${Pt.domain}/api/update-study`,this.fullData);console.log(r),r.data.success?(this.$swal({text:r.data.message,icon:"success"}),this.$router.push({name:"Author Dashboard"})):this.$swal({text:r.data.message,icon:"error"})},downloadURI(r){var l=document.createElement("a");l.download=r,l.href=`${Pt.domain}/storage/upload/${r}`,l.click()},async downloadWithAxios(r){let l=`${Pt.domain}/storage/upload/${r}`;await nn.get(l,{responseType:"blob"}).then(h=>{mw.exports.saveAs(h.data,r)}).catch(()=>console.log("error occured"))}},async mounted(){let r=await nn.get(`${Pt.domain}/api/study/`+this.$route.params.id);r=r.data.data,this.study=r.study,this.keywords=r.keywords.map(h=>h=h.keyword_title).join(";"),this.authors=r.authors.map(h=>(h.correspondence=!!h.correspondence,h)),this.formData=this.study,this.formData.journals=this.study.journal_id,this.formData.studyTypes=this.study.study_type_id,this.formData.authors_agreement=!!this.study.authors_agreement,this.formData.not_published=!!this.study.not_published,this.formData.ethical_guidelines=!!this.study.ethical_guidelines,this.formData.third_party_acknowledgement=!!this.study.third_party_acknowledgement,this.formData.authors=this.authors,this.formData.keywords=this.keywords,this.formData.comments=this.study.comment;let l=await nn.get(`${Pt.domain}/api/journals`);this.metadata.journals=l.data.data.journals,this.metadata.studyTypes=l.data.data.studyTypes}},fn=r=>(Vt("data-v-a2340f25"),r=r(),Ut(),r),cU={class:"content-wrapper"},dU={class:"content"},uU={class:"container-fluid"},hU={class:"row mx-4"},fU={class:"card col-12"},pU={class:"card-body d-flex flex-column p-5",style:{gap:"30px"}},mU={class:"row"},gU=fn(()=>d("div",{class:"col-2"},"SELECT JOURNAL:*",-1)),bU={class:"col-4"},wU=["value"],_U={class:"row"},kU=fn(()=>d("div",{class:"col-2"},"Study type:*",-1)),vU={class:"col-4"},yU=["value"],AU={class:"row"},CU=fn(()=>d("div",{class:"col-2"},"Title:*",-1)),xU={class:"col-10"},EU={class:"row"},DU=fn(()=>d("div",{class:"col-2"},"Abstract:*",-1)),TU={class:"col-10"},SU={class:"row"},IU=fn(()=>d("div",{class:"col-2"},"Keywords:*",-1)),MU={class:"col-10"},PU={class:"row"},NU=fn(()=>d("div",{class:"col-2"},"manuscript file",-1)),BU=fn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Authors"),d("hr")],-1)),OU={class:"row"},LU={class:"author-card-title col-2 p-1"},RU={class:"col-10 row"},zU={class:"col-6 d-flex flex-column pl-3",style:{gap:"15px"}},jU={class:"row"},FU=fn(()=>d("div",{class:"col-4"},"Prefix:*",-1)),$U={class:"col-8"},VU=["onUpdate:modelValue"],UU=ko('<option value="Dr." data-v-a2340f25>Dr.</option><option value="Mr." data-v-a2340f25>Mr.</option><option value="Mrs." data-v-a2340f25>Mrs.</option><option value="Prof." data-v-a2340f25>Prof.</option><option value="Assoc Prof." data-v-a2340f25>Assoc Prof.</option>',5),HU=[UU],qU={class:"row"},WU=fn(()=>d("div",{class:"col-4"},"First (Given) Name:*",-1)),GU={class:"col-8"},KU=["onUpdate:modelValue"],YU={class:"row"},QU=fn(()=>d("div",{class:"col-4"},"Last (Family) Name:*",-1)),ZU={class:"col-8"},JU=["onUpdate:modelValue"],XU={class:"col-6 d-flex flex-column pl-5",style:{gap:"15px"}},eH={class:"row"},tH=fn(()=>d("div",{class:"col-4"},"Correspondence:*",-1)),nH={class:"col-8"},oH=["onUpdate:modelValue"],iH={class:"row"},rH=fn(()=>d("div",{class:"col-4"},"Middle Name:",-1)),sH={class:"col-8"},aH=["onUpdate:modelValue"],lH={class:"row"},cH=fn(()=>d("div",{class:"col-4"},"E-Mail:*",-1)),dH={class:"col-8"},uH=["onUpdate:modelValue"],hH={class:"col-12 row pl-3 mt-3"},fH=fn(()=>d("div",{class:"col-2"},"Affiliation: *",-1)),pH={class:"col-10 pr-0 mr-0"},mH=["onUpdate:modelValue"],gH={class:"col-12 align-items-center justify-content-end d-flex",style:{gap:"20px"}},bH=fn(()=>d("span",null,"Remove AUTHORS",-1)),wH=fn(()=>d("i",{class:"fa-solid fa-square-minus text-danger"},null,-1)),_H=[bH,wH],kH=fn(()=>d("span",null,"ADD MORE AUTHORS",-1)),vH=fn(()=>d("i",{class:"fa-solid fa-square-plus text-success"},null,-1)),yH=[kH,vH],AH={class:"row"},CH=fn(()=>d("div",{class:"col-2"},"Authorship form",-1)),xH=fn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"Upload File"),d("hr")],-1)),EH={class:"row"},DH={class:"col-4 offset-1 d-flex flex-column align-items-center",style:{gap:"15px"}},TH=fn(()=>d("span",null,"ATTACH MANUSCRIPT*",-1)),SH=fn(()=>d("span",null,"Max size is 5 MB",-1)),IH=fn(()=>d("span",null,[j("Please download and fill the"),d("span",{class:"text-info"},"Manuscript Template")],-1)),MH={class:"col-4 offset-1 d-flex flex-column align-items-center",style:{gap:"15px"}},PH=fn(()=>d("span",null,"ATTACH AUTHORSHIP CHANGE",-1)),NH=fn(()=>d("span",null,"Max size is 5 MB",-1)),BH=fn(()=>d("span",null,[j("Please download and fill the"),d("span",{class:"text-info"},"Authorship Change FORM")],-1)),OH=fn(()=>d("div",{class:"row"},[d("span",{class:"nav-link py-2"},"COMMENTS TO EDITOR"),d("hr")],-1)),LH={class:"row px-4"},RH={class:"row"},zH={class:"col-12 p-4"},jH={class:"form-check mb-2"},FH=fn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault"}," * Confirm that All co-authors are listed and agree the submission. ",-1)),$H={class:"form-check"},VH=fn(()=>d("label",{class:"form-check-label",for:"flexCheckChecked"}," * Confirm that the manuscript has been submitted solely to this journal and is not published, in press, or submitted elsewhere. ",-1)),UH={class:"form-check mb-2"},HH=fn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault1"}," * Confirm that all the research meets the ethical guidelines, including adherence to the legal requirements of the study country. ",-1)),qH={class:"form-check mb-2"},WH=fn(()=>d("label",{class:"form-check-label",for:"flexCheckDefault2"}," * I/We have declared any potential conflict of interest in the research. Any support from a third party has been noted in the Acknowledgements. ",-1)),GH={class:"row align-self-end"};function KH(r,l,h,g,m,C){const _=nt("ContentHeader");return le(),he("div",cU,[ae(_,{title:"Edit Submission"}),d("section",dU,[d("div",uU,[d("div",hU,[d("div",fU,[d("div",pU,[d("div",mU,[gU,d("div",bU,[Oe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[0]||(l[0]=v=>m.formData.journals=v)},[(le(!0),he(rt,null,Mt(m.metadata.journals,v=>(le(),he("option",{key:v.id,value:v.id},be(v.title),9,wU))),128))],512),[[bi,m.formData.journals]])])]),d("div",_U,[kU,d("div",vU,[Oe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":l[1]||(l[1]=v=>m.formData.studyTypes=v)},[(le(!0),he(rt,null,Mt(m.metadata.studyTypes,v=>(le(),he("option",{key:v.id,value:v.id},be(v.name),9,yU))),128))],512),[[bi,m.formData.studyTypes]])])]),d("div",AU,[CU,d("div",xU,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Title","onUpdate:modelValue":l[2]||(l[2]=v=>m.formData.title=v)},null,512),[[tt,m.formData.title]])])]),d("div",EU,[DU,d("div",TU,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"13",class:"w-100 p-3",placeholder:"Abstract","onUpdate:modelValue":l[3]||(l[3]=v=>m.formData.abstract=v)},null,512),[[tt,m.formData.abstract]])])]),d("div",SU,[IU,d("div",MU,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"2",class:"w-100 p-3",placeholder:"Keywords; seperate the keywords with semicolon (;)","onUpdate:modelValue":l[4]||(l[4]=v=>m.formData.keywords=v)},null,512),[[tt,m.formData.keywords]])])]),d("div",PU,[NU,d("div",{class:"col-10 text-primary",onClick:l[5]||(l[5]=v=>C.downloadURI("studies/"+m.study.manuscript_file))},be(m.study.manuscript_file),1)]),BU,d("div",OU,[(le(!0),he(rt,null,Mt(m.formData.authors,(v,y)=>(le(),he("div",{class:"author-card row col-12 p-3 mb-4",key:v},[d("div",LU,"Author #"+be(y+1),1),d("div",RU,[d("div",zU,[d("div",jU,[FU,d("div",$U,[Oe(d("select",{name:"",class:"w-100",id:"","onUpdate:modelValue":S=>v.prefix=S},HU,8,VU),[[bi,v.prefix]])])]),d("div",qU,[WU,d("div",GU,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.first_name=S},null,8,KU),[[tt,v.first_name]])])]),d("div",YU,[QU,d("div",ZU,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.last_name=S},null,8,JU),[[tt,v.last_name]])])])]),d("div",XU,[d("div",eH,[tH,d("div",nH,[Oe(d("input",{type:"checkbox",class:"","onUpdate:modelValue":S=>v.correspondence=S},null,8,oH),[[oo,v.correspondence]])])]),d("div",iH,[rH,d("div",sH,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.middle_name=S},null,8,aH),[[tt,v.middle_name]])])]),d("div",lH,[cH,d("div",dH,[Oe(d("input",{type:"email",class:"w-100","onUpdate:modelValue":S=>v.email=S},null,8,uH),[[tt,v.email]])])])]),d("div",hH,[fH,d("div",pH,[Oe(d("input",{type:"text",class:"w-100","onUpdate:modelValue":S=>v.affiliation=S},null,8,mH),[[tt,v.affiliation]])])])])]))),128)),d("div",gH,[d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[6]||(l[6]=v=>C.removeAuthor())},_H),d("div",{class:"d-flex align-items-center",style:{gap:"5px",cursor:"pointer"},onClick:l[7]||(l[7]=v=>C.addAuthor())},yH)]),d("div",AH,[CH,d("div",{class:"col-10 text-primary",onClick:l[8]||(l[8]=v=>C.downloadURI("authors/"+m.study.authorship_change_file))},be(m.study.authorship_change_file),1)])]),xH,d("div",EH,[d("div",DH,[TH,d("input",{class:"form-control",hidden:"",onChange:l[9]||(l[9]=v=>C.handleFileUpload()),type:"file",ref:"file",name:"file",id:"file"},null,544),d("button",{onClick:l[10]||(l[10]=v=>C.openFile()),class:"btn-register"},"Select File"),SH,IH]),d("div",MH,[PH,d("input",{class:"form-control",hidden:"",onChange:l[11]||(l[11]=v=>C.handleFileUploadAuthor()),type:"file",ref:"file2",name:"file2",id:"file2"},null,544),d("button",{class:"btn-register",onClick:l[12]||(l[12]=v=>C.openFile2())},"Select File"),NH,BH])]),OH,d("div",LH,[Oe(d("textarea",{name:"",id:"",cols:"30",rows:"10",class:"w-100 p-3",placeholder:"Write the Cover Letter here","onUpdate:modelValue":l[13]||(l[13]=v=>m.formData.comments=v)},null,512),[[tt,m.formData.comments]])]),d("div",RH,[d("div",zH,[d("div",jH,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":l[14]||(l[14]=v=>m.formData.authors_agreement=v)},null,512),[[oo,m.formData.authors_agreement]]),FH]),d("div",$H,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":l[15]||(l[15]=v=>m.formData.not_published=v)},null,512),[[oo,m.formData.not_published]]),VH]),d("div",UH,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault1","onUpdate:modelValue":l[16]||(l[16]=v=>m.formData.ethical_guidelines=v)},null,512),[[oo,m.formData.ethical_guidelines]]),HH]),d("div",qH,[Oe(d("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2","onUpdate:modelValue":l[17]||(l[17]=v=>m.formData.third_party_acknowledgement=v)},null,512),[[oo,m.formData.third_party_acknowledgement]]),WH])])]),d("div",GH,[d("button",{class:"btn-register",onClick:l[18]||(l[18]=v=>C.submitForm())},"Submit Manuscript")])])])])])])])}const YH=pt(lU,[["render",KH],["__scopeId","data-v-a2340f25"]]),QH={data(){return{dashboardData:[]}},async mounted(){this.dashboardData=(await axios.get(`${Pt.domain}/api/admin-dashboard`)).data.data}},ZH={class:"content-wrapper"},JH={key:0,class:"content"},XH={class:"container-fluid"},eq={class:"card"},tq=ko('<div class="card-header"><h3 class="card-title">Aperier Summery</h3><div class="card-tools"><button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button></div></div>',1),nq={class:"card-body"},oq={class:"content"},iq={class:"container-fluid"},rq={class:"row"},sq={class:"col-lg-3 col-6"},aq={class:"small-box bg-info"},lq={class:"inner"},cq=d("p",null,"Total Studies",-1),dq=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1),uq={class:"col-lg-3 col-6"},hq={class:"small-box bg-success"},fq={class:"inner"},pq=d("p",null,"Total Archived",-1),mq=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1),gq={class:"col-lg-3 col-6"},bq={class:"small-box bg-danger"},wq={class:"inner"},_q=d("p",null,"Total Published",-1),kq=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1),vq={class:"col-lg-3 col-6"},yq={class:"small-box bg-secondary"},Aq={class:"inner"},Cq=d("p",null,"Total Ongoing",-1),xq=d("div",{class:"icon"},[d("i",{class:"ion ion-stats-bars"})],-1);function Eq(r,l,h,g,m,C){const _=nt("ContentHeader");return le(),he("div",ZH,[ae(_,{title:"Admin Dashboard"}),m.dashboardData?(le(),he("section",JH,[d("div",XH,[d("div",eq,[tq,d("div",nq,[d("section",oq,[d("div",iq,[d("div",rq,[d("div",sq,[d("div",aq,[d("div",lq,[d("h3",null,be(m.dashboardData.all),1),cq]),dq])]),d("div",uq,[d("div",hq,[d("div",fq,[d("h3",null,be(m.dashboardData.archived),1),pq]),mq])]),d("div",gq,[d("div",bq,[d("div",wq,[d("h3",null,be(m.dashboardData.published),1),_q]),kq])]),d("div",vq,[d("div",yq,[d("div",Aq,[d("h3",null,be(m.dashboardData.ongoing),1),Cq]),xq])])])])])])])])])):wu("",!0)])}const Dq=pt(QH,[["render",Eq]]);const Tq={name:"News",data(){return{data:[],domain:Pt.domain}},async mounted(){this.data=(await nn.get(`${Pt.domain}/api/news`)).data.data},methods:{async deleteNews(r){if(!confirm("Are you sure?"))return;let l=await nn.delete(`${Pt.domain}/api/news/${r}`);l.data.success?(this.$swal({text:l.data.message,icon:"success"}),this.data=(await nn.get(`${Pt.domain}/api/news`)).data.data):this.$swal({text:l.data.message,icon:"error"})}}},Sq=r=>(Vt("data-v-3924d631"),r=r(),Ut(),r),Iq={class:"content-wrapper"},Mq={class:"content"},Pq={class:"container-fluid"},Nq={class:"card-body"},Bq={class:"float-right my-2 mb-4"},Oq={id:"example2",class:"table table-bordered table-striped table-head-fixed"},Lq=Sq(()=>d("thead",null,[d("tr",null,[d("th",{width:"120px"},"Image"),d("th",null,"Title"),d("th",{width:"120px"},"Date"),d("th",{width:"140px"},"Action")])],-1)),Rq={class:"p-2"},zq=["src"],jq=["onClick"];function Fq(r,l,h,g,m,C){const _=nt("ContentHeader"),v=nt("router-link");return le(),he("div",Iq,[ae(_,{title:"Manage Your News"}),d("section",Mq,[d("div",Pq,[d("div",Nq,[d("div",Bq,[ae(v,{to:{name:"Admin News Add"},class:"btn-register"},{default:je(()=>[j("Add News")]),_:1})]),d("table",Oq,[Lq,d("tbody",null,[(le(!0),he(rt,null,Mt(m.data,y=>(le(),he("tr",{key:y.id},[d("td",Rq,[d("img",{src:`/storage/upload/news/${y.image}`,class:"img-fluid",alt:""},null,8,zq)]),d("td",null,be(y.title),1),d("td",null,be(y.date),1),d("td",null,[ae(v,{to:{name:"Admin News Edit",params:{id:y.id}}},{default:je(()=>[j("Edit")]),_:2},1032,["to"]),j(" | "),d("span",{onClick:S=>C.deleteNews(y.id),class:"text-danger",style:{cursor:"pointer"}},"Delete",8,jq)])]))),128))])])])])])])}const $q=pt(Tq,[["render",Fq],["__scopeId","data-v-3924d631"]]);var Uv={exports:{}};(function(r,l){(function(h){const g=h.en=h.en||{};g.dictionary=Object.assign(g.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(h,g){r.exports=g()}(self,()=>(()=>{var h={3062:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},903:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3143:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4717:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},9315:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const F=M},8733:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3508:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},2640:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},5083:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4036:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3773:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3689:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},1905:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},9773:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},2347:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},7754:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4652:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},7442:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},9292:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},1613:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const F=M},6306:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3881:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},6945:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4906:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},5332:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},6781:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},5485:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3949:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},7686:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},7339:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},9688:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},8847:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},6574:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4879:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3662:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},2577:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},1046:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},8793:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4650:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},7676:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},5868:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},6764:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},9695:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},5542:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3332:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4793:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},3488:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},8506:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},4921:(_,v,y)=>{y.d(v,{Z:()=>F});var S=y(1799),P=y.n(S),N=y(2609),M=y.n(N)()(P());M.push([_.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const F=M},2609:_=>{_.exports=function(v){var y=[];return y.toString=function(){return this.map(function(S){var P=v(S);return S[2]?"@media ".concat(S[2]," {").concat(P,"}"):P}).join("")},y.i=function(S,P,N){typeof S=="string"&&(S=[[null,S,""]]);var M={};if(N)for(var F=0;F<this.length;F++){var ee=this[F][0];ee!=null&&(M[ee]=!0)}for(var se=0;se<S.length;se++){var we=[].concat(S[se]);N&&M[we[0]]||(P&&(we[2]?we[2]="".concat(P," and ").concat(we[2]):we[2]=P),y.push(we))}},y}},1799:_=>{function v(S,P){return function(N){if(Array.isArray(N))return N}(S)||function(N,M){var F=N&&(typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"]);if(F!=null){var ee,se,we=[],te=!0,Y=!1;try{for(F=F.call(N);!(te=(ee=F.next()).done)&&(we.push(ee.value),!M||we.length!==M);te=!0);}catch(ie){Y=!0,se=ie}finally{try{te||F.return==null||F.return()}finally{if(Y)throw se}}return we}}(S,P)||function(N,M){if(!!N){if(typeof N=="string")return y(N,M);var F=Object.prototype.toString.call(N).slice(8,-1);if(F==="Object"&&N.constructor&&(F=N.constructor.name),F==="Map"||F==="Set")return Array.from(N);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return y(N,M)}}(S,P)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function y(S,P){(P==null||P>S.length)&&(P=S.length);for(var N=0,M=new Array(P);N<P;N++)M[N]=S[N];return M}_.exports=function(S){var P=v(S,4),N=P[1],M=P[3];if(!M)return N;if(typeof btoa=="function"){var F=btoa(unescape(encodeURIComponent(JSON.stringify(M)))),ee="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(F),se="/*# ".concat(ee," */"),we=M.sources.map(function(te){return"/*# sourceURL=".concat(M.sourceRoot||"").concat(te," */")});return[N].concat(we).concat([se]).join(`
`)}return[N].join(`
`)}},6062:(_,v,y)=>{var S,P=function(){return S===void 0&&(S=Boolean(window&&document&&document.all&&!window.atob)),S},N=function(){var _e={};return function(ue){if(_e[ue]===void 0){var Me=document.querySelector(ue);if(window.HTMLIFrameElement&&Me instanceof window.HTMLIFrameElement)try{Me=Me.contentDocument.head}catch{Me=null}_e[ue]=Me}return _e[ue]}}(),M=[];function F(_e){for(var ue=-1,Me=0;Me<M.length;Me++)if(M[Me].identifier===_e){ue=Me;break}return ue}function ee(_e,ue){for(var Me={},Fe=[],Ge=0;Ge<_e.length;Ge++){var Q=_e[Ge],Xe=ue.base?Q[0]+ue.base:Q[0],Le=Me[Xe]||0,Ft="".concat(Xe," ").concat(Le);Me[Xe]=Le+1;var Ye=F(Ft),ot={css:Q[1],media:Q[2],sourceMap:Q[3]};Ye!==-1?(M[Ye].references++,M[Ye].updater(ot)):M.push({identifier:Ft,updater:Pe(ot,ue),references:1}),Fe.push(Ft)}return Fe}function se(_e){var ue=document.createElement("style"),Me=_e.attributes||{};if(Me.nonce===void 0){var Fe=y.nc;Fe&&(Me.nonce=Fe)}if(Object.keys(Me).forEach(function(Q){ue.setAttribute(Q,Me[Q])}),typeof _e.insert=="function")_e.insert(ue);else{var Ge=N(_e.insert||"head");if(!Ge)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Ge.appendChild(ue)}return ue}var we,te=(we=[],function(_e,ue){return we[_e]=ue,we.filter(Boolean).join(`
`)});function Y(_e,ue,Me,Fe){var Ge=Me?"":Fe.media?"@media ".concat(Fe.media," {").concat(Fe.css,"}"):Fe.css;if(_e.styleSheet)_e.styleSheet.cssText=te(ue,Ge);else{var Q=document.createTextNode(Ge),Xe=_e.childNodes;Xe[ue]&&_e.removeChild(Xe[ue]),Xe.length?_e.insertBefore(Q,Xe[ue]):_e.appendChild(Q)}}function ie(_e,ue,Me){var Fe=Me.css,Ge=Me.media,Q=Me.sourceMap;if(Ge?_e.setAttribute("media",Ge):_e.removeAttribute("media"),Q&&typeof btoa<"u"&&(Fe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Q))))," */")),_e.styleSheet)_e.styleSheet.cssText=Fe;else{for(;_e.firstChild;)_e.removeChild(_e.firstChild);_e.appendChild(document.createTextNode(Fe))}}var ke=null,U=0;function Pe(_e,ue){var Me,Fe,Ge;if(ue.singleton){var Q=U++;Me=ke||(ke=se(ue)),Fe=Y.bind(null,Me,Q,!1),Ge=Y.bind(null,Me,Q,!0)}else Me=se(ue),Fe=ie.bind(null,Me,ue),Ge=function(){(function(Xe){if(Xe.parentNode===null)return!1;Xe.parentNode.removeChild(Xe)})(Me)};return Fe(_e),function(Xe){if(Xe){if(Xe.css===_e.css&&Xe.media===_e.media&&Xe.sourceMap===_e.sourceMap)return;Fe(_e=Xe)}else Ge()}}_.exports=function(_e,ue){(ue=ue||{}).singleton||typeof ue.singleton=="boolean"||(ue.singleton=P());var Me=ee(_e=_e||[],ue);return function(Fe){if(Fe=Fe||[],Object.prototype.toString.call(Fe)==="[object Array]"){for(var Ge=0;Ge<Me.length;Ge++){var Q=F(Me[Ge]);M[Q].references--}for(var Xe=ee(Fe,ue),Le=0;Le<Me.length;Le++){var Ft=F(Me[Le]);M[Ft].references===0&&(M[Ft].updater(),M.splice(Ft,1))}Me=Xe}}}}},g={};function m(_){var v=g[_];if(v!==void 0)return v.exports;var y=g[_]={id:_,exports:{}};return h[_](y,y.exports,m),y.exports}m.n=_=>{var v=_&&_.__esModule?()=>_.default:()=>_;return m.d(v,{a:v}),v},m.d=(_,v)=>{for(var y in v)m.o(v,y)&&!m.o(_,y)&&Object.defineProperty(_,y,{enumerable:!0,get:v[y]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),m.o=(_,v)=>Object.prototype.hasOwnProperty.call(_,v),m.nc=void 0;var C={};return(()=>{m.d(C,{default:()=>iv});const _=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),v={isMac:S(_),isWindows:function(i){return i.indexOf("windows")>-1}(_),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(_),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(_),isiOS:function(i){return!!i.match(/iphone|ipad/i)||S(i)&&navigator.maxTouchPoints>0}(_),isAndroid:function(i){return i.indexOf("android")>-1}(_),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(_),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},y=v;function S(i){return i.indexOf("macintosh")>-1}function P(i,e,t,n){t=t||function(p,b){return p===b};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),s=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(p,b,w){const A=N(p,b,w);if(A===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const E=M(p,A),I=M(b,A),O=N(E,I,w),R=p.length-O,H=b.length-O;return{firstIndex:A,lastIndexOld:R,lastIndexNew:H}}(o,s,t);return n?function(p,b){const{firstIndex:w,lastIndexOld:A,lastIndexNew:E}=p;if(w===-1)return Array(b).fill("equal");let I=[];return w>0&&(I=I.concat(Array(w).fill("equal"))),E-w>0&&(I=I.concat(Array(E-w).fill("insert"))),A-w>0&&(I=I.concat(Array(A-w).fill("delete"))),E<b&&(I=I.concat(Array(b-E).fill("equal"))),I}(a,s.length):function(p,b){const w=[],{firstIndex:A,lastIndexOld:E,lastIndexNew:I}=b;return I-A>0&&w.push({index:A,type:"insert",values:p.slice(A,I)}),E-A>0&&w.push({index:A+(I-A),type:"delete",howMany:E-A}),w}(s,a)}function N(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function M(i,e){return i.slice(e).reverse()}function F(i,e,t){t=t||function(R,H){return R===H};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return F.fastDiff(i,e,t,!0);let s,a;if(o<n){const R=i;i=e,e=R,s="delete",a="insert"}else s="insert",a="delete";const u=i.length,p=e.length,b=p-u,w={},A={};function E(R){const H=(A[R-1]!==void 0?A[R-1]:-1)+1,K=A[R+1]!==void 0?A[R+1]:-1,oe=H>K?-1:1;w[R+oe]&&(w[R]=w[R+oe].slice(0)),w[R]||(w[R]=[]),w[R].push(H>K?s:a);let pe=Math.max(H,K),He=pe-R;for(;He<u&&pe<p&&t(i[He],e[pe]);)He++,pe++,w[R].push("equal");return pe}let I,O=0;do{for(I=-O;I<b;I++)A[I]=E(I);for(I=b+O;I>b;I--)A[I]=E(I);A[b]=E(b),O++}while(A[b]!==p);return w[b].slice(1)}function ee(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(s=>{if(s in i.prototype||typeof t=="function"&&(s=="length"||s=="name"||s=="prototype"))return;const a=Object.getOwnPropertyDescriptor(t,s);a.enumerable=!1,Object.defineProperty(i.prototype,s,a)})})}F.fastDiff=P;const se=function(){return function i(){i.called=!0}};class we{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=se(),this.off=se()}}const te=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function Y(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+te[i>>0&255]+te[i>>8&255]+te[i>>16&255]+te[i>>24&255]+te[e>>0&255]+te[e>>8&255]+te[e>>16&255]+te[e>>24&255]+te[t>>0&255]+te[t>>8&255]+te[t>>16&255]+te[t>>24&255]+te[n>>0&255]+te[n>>8&255]+te[n>>16&255]+te[n>>24&255]}const ie={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function ke(i,e){const t=ie.get(e.priority);for(let n=0;n<i.length;n++)if(ie.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}class U extends Error{constructor(e,t,n){super(function(o,s){const a=new WeakSet,u=(w,A)=>{if(typeof A=="object"&&A!==null){if(a.has(A))return`[object ${A.constructor.name}]`;a.add(A)}return A},p=s?` ${JSON.stringify(s,u)}`:"",b=ue(o);return o+p+b}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new U(e.message,t);throw n.stack=e.stack,n}}function Pe(i,e){console.warn(...Me(i,e))}function _e(i,e){console.error(...Me(i,e))}function ue(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function Me(i,e){const t=ue(i);return e?[i,e,t]:[i,t]}const Fe="35.4.0",Ge=typeof window=="object"?window:m.g;if(Ge.CKEDITOR_VERSION)throw new U("ckeditor-duplicated-modules",null);Ge.CKEDITOR_VERSION=Fe;const Q=Symbol("listeningTo"),Xe=Symbol("emitterId"),Le=Symbol("delegations"),Ft=Ye(Object);function Ye(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(s,...a)=>{o||(o=!0,s.off(),t.call(this,s,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let s,a;this[Q]||(this[Q]={});const u=this[Q];vt(e)||ot(e);const p=vt(e);(s=u[p])||(s=u[p]={emitter:e,callbacks:{}}),(a=s.callbacks[t])||(a=s.callbacks[t]=[]),a.push(n),function(b,w,A,E,I){w._addEventListener?w._addEventListener(A,E,I):b._addEventListener.call(w,A,E,I)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[Q];let s=e&&vt(e);const a=o&&s?o[s]:void 0,u=a&&t?a.callbacks[t]:void 0;if(!(!o||e&&!a||t&&!u))if(n)fo(this,e,t,n),u.indexOf(n)!==-1&&(u.length===1?delete a.callbacks[t]:fo(this,e,t,n));else if(u){for(;n=u.pop();)fo(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete o[s]}else{for(s in o)this.stopListening(o[s].emitter);delete this[Q]}}fire(e,...t){try{const n=e instanceof we?e:new we(this,e),o=n.name;let s=cn(this,o);if(n.path.push(this),s){const u=[n,...t];s=Array.from(s);for(let p=0;p<s.length&&(s[p].callback.apply(this,u),n.off.called&&(delete n.off.called,this._removeEventListener(o,s[p].callback)),!n.stop.called);p++);}const a=this[Le];if(a){const u=a.get(o),p=a.get("*");u&&Ln(u,n,t),p&&Ln(p,n,t)}return n.return}catch(n){U.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[Le]||(this[Le]=new Map),e.forEach(o=>{const s=this[Le].get(o);s?s.set(t,n):this[Le].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[Le])if(e)if(t){const n=this[Le].get(e);n&&n.delete(t)}else this[Le].delete(e);else this[Le].clear()}_addEventListener(e,t,n){(function(a,u){const p=no(a);if(p[u])return;let b=u,w=null;const A=[];for(;b!==""&&!p[b];)p[b]={callbacks:[],childEvents:[]},A.push(p[b]),w&&p[b].childEvents.push(w),w=b,b=b.substr(0,b.lastIndexOf(":"));if(b!==""){for(const E of A)E.callbacks=p[b].callbacks.slice();p[b].childEvents.push(w)}})(this,e);const o=Fn(this,e),s={callback:t,priority:ie.get(n.priority)};for(const a of o)ke(a,s)}_removeEventListener(e,t){const n=Fn(this,e);for(const o of n)for(let s=0;s<o.length;s++)o[s].callback==t&&(o.splice(s,1),s--)}}:Ft}function ot(i,e){i[Xe]||(i[Xe]=e||Y())}function vt(i){return i[Xe]}function no(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Fn(i,e){const t=no(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const s=Fn(i,t.childEvents[o]);n=n.concat(s)}return n}function cn(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?cn(i,e.substr(0,e.lastIndexOf(":"))):null}function Ln(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const s=new we(e.source,o);s.path=[...e.path],n.fire(s,...t)}}function fo(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Ye[i]=Ft.prototype[i]});const Dt=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},X=Symbol("observableProperties"),Te=Symbol("boundObservables"),Ne=Symbol("boundProperties"),Ue=Symbol("decoratedMethods"),dt=Symbol("decoratedOriginal"),$t=Qe(Ye());function Qe(i){return i?class extends i{set(e,t){if(Dt(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);q(this);const n=this[X];if(e in this&&!n.has(e))throw new U("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const s=n.get(e);let a=this.fire(`set:${e}`,e,o,s);a===void 0&&(a=o),s===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,s))}}),this[e]=t}bind(...e){if(!e.length||!me(e))throw new U("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new U("observable-bind-duplicate-properties",this);q(this);const t=this[Ne];e.forEach(o=>{if(t.has(o))throw new U("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const s={property:o,to:[]};t.set(o,s),n.set(o,s)}),{to:Z,toMany:ce,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[X])return;const t=this[Ne],n=this[Te];if(e.length){if(!me(e))throw new U("observable-unbind-wrong-properties",this);e.forEach(o=>{const s=t.get(o);s&&(s.to.forEach(([a,u])=>{const p=n.get(a),b=p[u];b.delete(s),b.size||delete p[u],Object.keys(p).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(o))})}else n.forEach((o,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){q(this);const t=this[e];if(!t)throw new U("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][dt]=t,this[Ue]||(this[Ue]=[]),this[Ue].push(e)}stopListening(e,t,n){if(!e&&this[Ue]){for(const o of this[Ue])this[o]=this[o][dt];delete this[Ue]}super.stopListening(e,t,n)}}:$t}function q(i){i[X]||(Object.defineProperty(i,X,{value:new Map}),Object.defineProperty(i,Te,{value:new Map}),Object.defineProperty(i,Ne,{value:new Map}))}function Z(...i){const e=function(...s){if(!s.length)throw new U("observable-bind-to-parse-error",null);const a={to:[]};let u;return typeof s[s.length-1]=="function"&&(a.callback=s.pop()),s.forEach(p=>{if(typeof p=="string")u.properties.push(p);else{if(typeof p!="object")throw new U("observable-bind-to-parse-error",null);u={observable:p,properties:[]},a.to.push(u)}}),a}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new U("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new U("observable-bind-to-extra-callback",this);var o;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new U("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(s=>{const a=o[Te];let u;a.get(s.observable)||o.listenTo(s.observable,"change",(p,b)=>{u=a.get(s.observable)[b],u&&u.forEach(w=>{Ce(o,w.property)})})}),function(s){let a;s._bindings.forEach((u,p)=>{s._to.forEach(b=>{a=b.properties[u.callback?0:s._bindProperties.indexOf(p)],u.to.push([b.observable,a]),function(w,A,E,I){const O=w[Te],R=O.get(E),H=R||{};H[I]||(H[I]=new Set),H[I].add(A),R||O.set(E,H)}(s._observable,u,b.observable,a)})})}(this),this._bindProperties.forEach(s=>{Ce(this._observable,s)})}function ce(i,e,t){if(this._bindings.size>1)throw new U("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(a=>[a,o]);return Array.prototype.concat.apply([],s)}(i,e),t)}function me(i){return i.every(e=>typeof e=="string")}function Ce(i,e){const t=i[Ne].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Qe[i]=$t.prototype[i]});class ze{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Ve(i){let e=0;for(const t of i)e++;return e}function ve(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function Se(i){return!(!i||!i[Symbol.iterator])}const xe=typeof mi=="object"&&mi&&mi.Object===Object&&mi;var et=typeof self=="object"&&self&&self.Object===Object&&self;const We=xe||et||Function("return this")(),qe=We.Symbol;var st=Object.prototype,Ze=st.hasOwnProperty,Tt=st.toString,_t=qe?qe.toStringTag:void 0;const rn=function(i){var e=Ze.call(i,_t),t=i[_t];try{i[_t]=void 0;var n=!0}catch{}var o=Tt.call(i);return n&&(e?i[_t]=t:delete i[_t]),o};var qt=Object.prototype.toString;const wn=function(i){return qt.call(i)};var Oi=qe?qe.toStringTag:void 0;const $n=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Oi&&Oi in Object(i)?rn(i):wn(i)},Wt=Array.isArray,sn=function(i){return i!=null&&typeof i=="object"},io=function(i){return typeof i=="string"||!Wt(i)&&sn(i)&&$n(i)=="[object String]"};function Li(i,e,t={},n=[]){const o=t&&t.xmlns,s=o?i.createElementNS(o,e):i.createElement(e);for(const a in t)s.setAttribute(a,t[a]);!io(n)&&Se(n)||(n=[n]);for(let a of n)io(a)&&(a=i.createTextNode(a)),s.appendChild(a);return s}const fa=function(i,e){return function(t){return i(e(t))}},vl=fa(Object.getPrototypeOf,Object);var Rc=Function.prototype,zc=Object.prototype,kt=Rc.toString,Ru=zc.hasOwnProperty,zu=kt.call(Object);const yo=function(i){if(!sn(i)||$n(i)!="[object Object]")return!1;var e=vl(i);if(e===null)return!0;var t=Ru.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&kt.call(t)==zu},ju=function(){this.__data__=[],this.size=0},Ho=function(i,e){return i===e||i!=i&&e!=e},pa=function(i,e){for(var t=i.length;t--;)if(Ho(i[t][0],e))return t;return-1};var Fu=Array.prototype.splice;const $u=function(i){var e=this.__data__,t=pa(e,i);return!(t<0)&&(t==e.length-1?e.pop():Fu.call(e,t,1),--this.size,!0)},yl=function(i){var e=this.__data__,t=pa(e,i);return t<0?void 0:e[t][1]},Vu=function(i){return pa(this.__data__,i)>-1},_s=function(i,e){var t=this.__data__,n=pa(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function Lr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Lr.prototype.clear=ju,Lr.prototype.delete=$u,Lr.prototype.get=yl,Lr.prototype.has=Vu,Lr.prototype.set=_s;const ma=Lr,ks=function(){this.__data__=new ma,this.size=0},Uu=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},Hu=function(i){return this.__data__.get(i)},qu=function(i){return this.__data__.has(i)},sr=function(i){if(!Dt(i))return!1;var e=$n(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},vs=We["__core-js_shared__"];var Al=function(){var i=/[^.]+$/.exec(vs&&vs.keys&&vs.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Wu=function(i){return!!Al&&Al in i};var Gu=Function.prototype.toString;const ar=function(i){if(i!=null){try{return Gu.call(i)}catch{}try{return i+""}catch{}}return""};var Nt=/^\[object .+?Constructor\]$/,Ku=Function.prototype,Yu=Object.prototype,ga=Ku.toString,Qu=Yu.hasOwnProperty,ba=RegExp("^"+ga.call(Qu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Zu=function(i){return!(!Dt(i)||Wu(i))&&(sr(i)?ba:Nt).test(ar(i))},Cl=function(i,e){return i==null?void 0:i[e]},ti=function(i,e){var t=Cl(i,e);return Zu(t)?t:void 0},lr=ti(We,"Map"),Vn=ti(Object,"create"),jc=function(){this.__data__=Vn?Vn(null):{},this.size=0},Ju=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var Xu=Object.prototype.hasOwnProperty;const eh=function(i){var e=this.__data__;if(Vn){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return Xu.call(e,i)?e[i]:void 0};var Fc=Object.prototype.hasOwnProperty;const $c=function(i){var e=this.__data__;return Vn?e[i]!==void 0:Fc.call(e,i)},Vc=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Vn&&e===void 0?"__lodash_hash_undefined__":e,this};function cr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}cr.prototype.clear=jc,cr.prototype.delete=Ju,cr.prototype.get=eh,cr.prototype.has=$c,cr.prototype.set=Vc;const ys=cr,th=function(){this.size=0,this.__data__={hash:new ys,map:new(lr||ma),string:new ys}},xl=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},dr=function(i,e){var t=i.__data__;return xl(e)?t[typeof e=="string"?"string":"hash"]:t.map},Uc=function(i){var e=dr(this,i).delete(i);return this.size-=e?1:0,e},nh=function(i){return dr(this,i).get(i)},Hc=function(i){return dr(this,i).has(i)},qc=function(i,e){var t=dr(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Ri(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ri.prototype.clear=th,Ri.prototype.delete=Uc,Ri.prototype.get=nh,Ri.prototype.has=Hc,Ri.prototype.set=qc;const wa=Ri,El=function(i,e){var t=this.__data__;if(t instanceof ma){var n=t.__data__;if(!lr||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new wa(n)}return t.set(i,e),this.size=t.size,this};function Po(i){var e=this.__data__=new ma(i);this.size=e.size}Po.prototype.clear=ks,Po.prototype.delete=Uu,Po.prototype.get=Hu,Po.prototype.has=qu,Po.prototype.set=El;const ur=Po,hr=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},Rr=function(){try{var i=ti(Object,"defineProperty");return i({},"",{}),i}catch{}}(),_a=function(i,e,t){e=="__proto__"&&Rr?Rr(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var oh=Object.prototype.hasOwnProperty;const ka=function(i,e,t){var n=i[e];oh.call(i,e)&&Ho(n,t)&&(t!==void 0||e in i)||_a(i,e,t)},fr=function(i,e,t,n){var o=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var u=e[s],p=n?n(t[u],i[u],u,t,i):void 0;p===void 0&&(p=i[u]),o?_a(t,u,p):ka(t,u,p)}return t},Wc=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},Dl=function(i){return sn(i)&&$n(i)=="[object Arguments]"};var Gc=Object.prototype,ih=Gc.hasOwnProperty,pr=Gc.propertyIsEnumerable;const As=Dl(function(){return arguments}())?Dl:function(i){return sn(i)&&ih.call(i,"callee")&&!pr.call(i,"callee")},rh=function(){return!1};var Kc=l&&!l.nodeType&&l,Yc=Kc&&!0&&r&&!r.nodeType&&r,Qc=Yc&&Yc.exports===Kc?We.Buffer:void 0;const mr=(Qc?Qc.isBuffer:void 0)||rh;var sh=/^(?:0|[1-9]\d*)$/;const Tl=function(i,e){var t=typeof i;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&sh.test(i))&&i>-1&&i%1==0&&i<e},Zc=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var _n={};_n["[object Float32Array]"]=_n["[object Float64Array]"]=_n["[object Int8Array]"]=_n["[object Int16Array]"]=_n["[object Int32Array]"]=_n["[object Uint8Array]"]=_n["[object Uint8ClampedArray]"]=_n["[object Uint16Array]"]=_n["[object Uint32Array]"]=!0,_n["[object Arguments]"]=_n["[object Array]"]=_n["[object ArrayBuffer]"]=_n["[object Boolean]"]=_n["[object DataView]"]=_n["[object Date]"]=_n["[object Error]"]=_n["[object Function]"]=_n["[object Map]"]=_n["[object Number]"]=_n["[object Object]"]=_n["[object RegExp]"]=_n["[object Set]"]=_n["[object String]"]=_n["[object WeakMap]"]=!1;const ah=function(i){return sn(i)&&Zc(i.length)&&!!_n[$n(i)]},dn=function(i){return function(e){return i(e)}};var un=l&&!l.nodeType&&l,Cs=un&&!0&&r&&!r.nodeType&&r,va=Cs&&Cs.exports===un&&xe.process;const zr=function(){try{var i=Cs&&Cs.require&&Cs.require("util").types;return i||va&&va.binding&&va.binding("util")}catch{}}();var Sl=zr&&zr.isTypedArray;const Il=Sl?dn(Sl):ah;var lh=Object.prototype.hasOwnProperty;const Ml=function(i,e){var t=Wt(i),n=!t&&As(i),o=!t&&!n&&mr(i),s=!t&&!n&&!o&&Il(i),a=t||n||o||s,u=a?Wc(i.length,String):[],p=u.length;for(var b in i)!e&&!lh.call(i,b)||a&&(b=="length"||o&&(b=="offset"||b=="parent")||s&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Tl(b,p))||u.push(b);return u};var jr=Object.prototype;const Un=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||jr)},Pl=fa(Object.keys,Object);var gr=Object.prototype.hasOwnProperty;const Jc=function(i){if(!Un(i))return Pl(i);var e=[];for(var t in Object(i))gr.call(i,t)&&t!="constructor"&&e.push(t);return e},Fr=function(i){return i!=null&&Zc(i.length)&&!sr(i)},Ao=function(i){return Fr(i)?Ml(i):Jc(i)},Xc=function(i,e){return i&&fr(e,Ao(e),i)},ed=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var td=Object.prototype.hasOwnProperty;const ya=function(i){if(!Dt(i))return ed(i);var e=Un(i),t=[];for(var n in i)(n!="constructor"||!e&&td.call(i,n))&&t.push(n);return t},zi=function(i){return Fr(i)?Ml(i,!0):ya(i)},nd=function(i,e){return i&&fr(e,zi(e),i)};var Co=l&&!l.nodeType&&l,od=Co&&!0&&r&&!r.nodeType&&r,xo=od&&od.exports===Co?We.Buffer:void 0,id=xo?xo.allocUnsafe:void 0;const xs=function(i,e){if(e)return i.slice();var t=i.length,n=id?id(t):new i.constructor(t);return i.copy(n),n},di=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},Es=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,s=[];++t<n;){var a=i[t];e(a,t,i)&&(s[o++]=a)}return s},$r=function(){return[]};var En=Object.prototype.propertyIsEnumerable,_i=Object.getOwnPropertySymbols;const Ds=_i?function(i){return i==null?[]:(i=Object(i),Es(_i(i),function(e){return En.call(i,e)}))}:$r,Aa=function(i,e){return fr(i,Ds(i),e)},Ca=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},rd=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)Ca(e,Ds(i)),i=vl(i);return e}:$r,ch=function(i,e){return fr(i,rd(i),e)},sd=function(i,e,t){var n=e(i);return Wt(i)?n:Ca(n,t(i))},Ts=function(i){return sd(i,Ao,Ds)},xa=function(i){return sd(i,zi,rd)},ji=ti(We,"DataView"),Nl=ti(We,"Promise"),Vr=ti(We,"Set"),Ss=ti(We,"WeakMap");var Ea="[object Map]",Da="[object Promise]",Bl="[object Set]",ad="[object WeakMap]",Ta="[object DataView]",Ol=ar(ji),dh=ar(lr),Ll=ar(Nl),No=ar(Vr),Rl=ar(Ss),ni=$n;(ji&&ni(new ji(new ArrayBuffer(1)))!=Ta||lr&&ni(new lr)!=Ea||Nl&&ni(Nl.resolve())!=Da||Vr&&ni(new Vr)!=Bl||Ss&&ni(new Ss)!=ad)&&(ni=function(i){var e=$n(i),t=e=="[object Object]"?i.constructor:void 0,n=t?ar(t):"";if(n)switch(n){case Ol:return Ta;case dh:return Ea;case Ll:return Da;case No:return Bl;case Rl:return ad}return e});const Ur=ni;var zl=Object.prototype.hasOwnProperty;const ld=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&zl.call(i,"index")&&(t.index=i.index,t.input=i.input),t},Sa=We.Uint8Array,jl=function(i){var e=new i.constructor(i.byteLength);return new Sa(e).set(new Sa(i)),e},uh=function(i,e){var t=e?jl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var cd=/\w*$/;const Fi=function(i){var e=new i.constructor(i.source,cd.exec(i));return e.lastIndex=i.lastIndex,e};var dd=qe?qe.prototype:void 0,ud=dd?dd.valueOf:void 0;const Fl=function(i){return ud?Object(ud.call(i)):{}},Ia=function(i,e){var t=e?jl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},$i=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return jl(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return uh(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ia(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return Fi(i);case"[object Symbol]":return Fl(i)}};var Is=Object.create;const Ms=function(){function i(){}return function(e){if(!Dt(e))return{};if(Is)return Is(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),$l=function(i){return typeof i.constructor!="function"||Un(i)?{}:Ms(vl(i))},hh=function(i){return sn(i)&&Ur(i)=="[object Map]"};var ui=zr&&zr.isMap;const oi=ui?dn(ui):hh,hd=function(i){return sn(i)&&Ur(i)=="[object Set]"};var fd=zr&&zr.isSet;const pd=fd?dn(fd):hd;var md="[object Arguments]",gd="[object Function]",bd="[object Object]",Ht={};Ht[md]=Ht["[object Array]"]=Ht["[object ArrayBuffer]"]=Ht["[object DataView]"]=Ht["[object Boolean]"]=Ht["[object Date]"]=Ht["[object Float32Array]"]=Ht["[object Float64Array]"]=Ht["[object Int8Array]"]=Ht["[object Int16Array]"]=Ht["[object Int32Array]"]=Ht["[object Map]"]=Ht["[object Number]"]=Ht[bd]=Ht["[object RegExp]"]=Ht["[object Set]"]=Ht["[object String]"]=Ht["[object Symbol]"]=Ht["[object Uint8Array]"]=Ht["[object Uint8ClampedArray]"]=Ht["[object Uint16Array]"]=Ht["[object Uint32Array]"]=!0,Ht["[object Error]"]=Ht[gd]=Ht["[object WeakMap]"]=!1;const ne=function i(e,t,n,o,s,a){var u,p=1&t,b=2&t,w=4&t;if(n&&(u=s?n(e,o,s,a):n(e)),u!==void 0)return u;if(!Dt(e))return e;var A=Wt(e);if(A){if(u=ld(e),!p)return di(e,u)}else{var E=Ur(e),I=E==gd||E=="[object GeneratorFunction]";if(mr(e))return xs(e,p);if(E==bd||E==md||I&&!s){if(u=b||I?{}:$l(e),!p)return b?ch(e,nd(u,e)):Aa(e,Xc(u,e))}else{if(!Ht[E])return s?e:{};u=$i(e,E,p)}}a||(a=new ur);var O=a.get(e);if(O)return O;a.set(e,u),pd(e)?e.forEach(function(H){u.add(i(H,t,n,H,e,a))}):oi(e)&&e.forEach(function(H,K){u.set(K,i(H,t,n,K,e,a))});var R=A?void 0:(w?b?xa:Ts:b?zi:Ao)(e);return hr(R||e,function(H,K){R&&(H=e[K=H]),ka(u,K,i(H,t,n,K,e,a))}),u},ge=function(i,e){return ne(i,5,e=typeof e=="function"?e:void 0)},de=function(i){return sn(i)&&i.nodeType===1&&!yo(i)};class it{constructor(e,t){this._config={},t&&this.define(yt(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(yo(t))return void this._setObjectToTarget(e,t,o);const s=t.split(".");t=s.pop();for(const a of s)yo(e[a])||(e[a]={}),e=e[a];if(yo(n))return yo(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!yo(e[o])){e=null;break}e=e[o]}return e?yt(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function yt(i){return ge(i,Gt)}function Gt(i){return de(i)?i:void 0}function pn(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Yt(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const Ma=br(Ye());function br(i){return i?class extends i{listenTo(e,t,n,o={}){if(pn(e)||Yt(e)){const s={capture:!!o.useCapture,passive:!!o.usePassive},a=this._getProxyEmitter(e,s)||new qo(e,s);this.listenTo(a,t,n,o)}else super.listenTo(e,t,n,o)}stopListening(e,t,n){if(pn(e)||Yt(e)){const o=this._getAllProxyEmitters(e);for(const s of o)this.stopListening(s,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,o){const s=n[Q];return s&&s[o]?s[o].emitter:null}(this,Ps(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Ma}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{br[i]=Ma.prototype[i]});class qo extends Ye(){constructor(e,t){super(),ot(this,Ps(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Ye().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Ye().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Ps(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Y())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Vl;try{Vl={window,document}}catch{Vl={window:{},document:{}}}const Ct=Vl;function wr(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function mn(i){return Object.prototype.toString.call(i)=="[object Text]"}function Lt(i){return Object.prototype.toString.apply(i)=="[object Range]"}function _r(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const Ul=["top","right","bottom","left","width","height"];class kn{constructor(e){const t=Lt(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),_d(e)||t)if(t){const n=kn.getDomRangeRects(e);Pa(this,kn.getBoundingRect(n))}else Pa(this,e.getBoundingClientRect());else if(Yt(e)){const{innerWidth:n,innerHeight:o}=e;Pa(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Pa(this,e)}clone(){return new kn(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new kn(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!wd(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!wd(n);){const o=new kn(n),s=t.getIntersection(o);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of Ul)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Yt(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const s=_r(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new kn(o));else{let o=e.startContainer;mn(o)&&(o=o.parentNode);const s=new kn(o.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new kn(t))}}function Pa(i,e){for(const t of Ul)i[t]=e[t]}function wd(i){return!!_d(i)&&i===i.ownerDocument.body}function _d(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}class an{constructor(e,t){an._observerInstance||an._createObserver(),this._element=e,this._callback=t,an._addElementCallback(e,t),an._observerInstance.observe(e)}destroy(){an._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){an._elementCallbacks||(an._elementCallbacks=new Map);let n=an._elementCallbacks.get(e);n||(n=new Set,an._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=an._getElementCallbacks(e);n&&(n.delete(t),n.size||(an._elementCallbacks.delete(e),an._observerInstance.unobserve(e))),an._elementCallbacks&&!an._elementCallbacks.size&&(an._observerInstance=null,an._elementCallbacks=null)}static _getElementCallbacks(e){return an._elementCallbacks?an._elementCallbacks.get(e):null}static _createObserver(){an._observerInstance=new Ct.window.ResizeObserver(e=>{for(const t of e){const n=an._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function Vi(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function ki(i){return e=>e+i}function x(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function D(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function B(i){return i&&i.nodeType===Node.COMMENT_NODE}function W(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function Ee({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){sr(e)&&(e=e()),sr(n)&&(n=n());const a=function(E){return E&&E.parentNode?E.offsetParent===Ct.document.body?null:E.offsetParent:null}(i),u=new kn(i),p=new kn(e);let b;const w=o&&function(E){E=Object.assign({top:0,bottom:0,left:0,right:0},E);const I=new kn(Ct.window);return I.top+=E.top,I.height-=E.top,I.bottom-=E.bottom,I.height-=E.bottom,I}(s)||null,A={targetRect:p,elementRect:u,positionedElementAncestor:a,viewportRect:w};if(n||o){const E=n&&new kn(n).getVisible();Object.assign(A,{limiterRect:E,viewportRect:w}),b=function(I,O){const{elementRect:R}=O,H=R.getArea(),K=I.map(He=>new Dn(He,O)).filter(He=>!!He.name);let oe=0,pe=null;for(const He of K){const{limiterIntersectionArea:wt,viewportIntersectionArea:Zt}=He;if(wt===H)return He;const ln=Zt**2+wt**2;ln>oe&&(oe=ln,pe=He)}return pe}(t,A)||new Dn(t[0],A)}else b=new Dn(t[0],A);return b}function lt(i){const{scrollX:e,scrollY:t}=Ct.window;return i.clone().moveBy(e,t)}an._observerInstance=null,an._elementCallbacks=null;class Dn{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:s,name:a,config:u}=n;this.name=a,this.config=u,this._positioningFunctionCorrdinates={left:o,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=lt(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=lt(new kn(t)),o=_r(t);let s=0,a=0;s-=n.left,a-=n.top,s+=t.scrollLeft,a+=t.scrollTop,s-=o.left,a-=o.top,e.moveBy(s,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Rn(i){const e=i.parentNode;e&&e.removeChild(i)}function Jn(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),s=new kn(i).excludeScrollbarsAndBorders();if(![o,n].every(a=>s.contains(a))){let{scrollX:a,scrollY:u}=i;Bp(o,s)?u-=s.top-e.top+t:Na(n,s)&&(u+=e.bottom-s.bottom+t),Hl(e,s)?a-=s.left-e.left+t:ql(e,s)&&(a+=e.right-s.right+t),i.scrollTo(a,u)}}function Hr(i,e){const t=Wl(i);let n,o;for(;i!=t.document.body;)o=e(),n=new kn(i).excludeScrollbarsAndBorders(),n.contains(o)||(Bp(o,n)?i.scrollTop-=n.top-o.top:Na(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Hl(o,n)?i.scrollLeft-=n.left-o.left:ql(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function Na(i,e){return i.bottom>e.bottom}function Bp(i,e){return i.top<e.top}function Hl(i,e){return i.left<e.left}function ql(i,e){return i.right>e.right}function Wl(i){return Lt(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function bw(i){if(Lt(i)){let e=i.commonAncestorContainer;return mn(e)&&(e=e.parentNode),e}return i.parentNode}function fh(i,e){const t=Wl(i),n=new kn(i);if(t===e)return n;{let o=t;for(;o!=e;){const s=o.frameElement,a=new kn(s).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}const ww={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},_w={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ut=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),Eo=Object.fromEntries(Object.entries(ut).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function Ba(i){let e;if(typeof i=="string"){if(e=ut[i.toLowerCase()],!e)throw new U("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?ut.alt:0)+(i.ctrlKey?ut.ctrl:0)+(i.shiftKey?ut.shift:0)+(i.metaKey?ut.cmd:0);return e}function ph(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Ba(t.slice(0,-1));const n=Ba(t);return y.isMac&&n==ut.ctrl?ut.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function mh(i){let e=ph(i);return Object.entries(y.isMac?ww:_w).reduce((t,[n,o])=>((e&ut[n])!=0&&(e&=~ut[n],t+=o),t),"")+(e?Eo[e]:"")}function gh(i,e){const t=e==="ltr";switch(i){case ut.arrowleft:return t?"left":"right";case ut.arrowright:return t?"right":"left";case ut.arrowup:return"up";case ut.arrowdown:return"down"}}function Xn(i){return Array.isArray(i)?i:[i]}function Gl(i,e,t=1){if(typeof t!="number")throw new U("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Ct.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(Ct.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(p,b){return!!Ct.window.CKEDITOR_TRANSLATIONS[p]&&!!Ct.window.CKEDITOR_TRANSLATIONS[p].dictionary[b]}(i,o))return t!==1?e.plural:e.string;const s=Ct.window.CKEDITOR_TRANSLATIONS[i].dictionary,a=Ct.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(p=>p===1?0:1),u=s[o];return typeof u=="string"?u:u[Number(a(t))]}Ct.window.CKEDITOR_TRANSLATIONS||(Ct.window.CKEDITOR_TRANSLATIONS={});const bh=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ns(i){return bh.includes(i)?"rtl":"ltr"}class Kl{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Ns(this.uiLanguage),this.contentLanguageDirection=Ns(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Xn(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(a,u)=>u<s.length?s[u]:a)}(Gl(this.uiLanguage,e,n),t)}}class Bo extends Ye(){constructor(e={},t={}){super();const n=Se(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new U("collection-add-item-invalid-index",this);let n=0;for(const o of e){const s=this._getItemIdBeforeAdding(o),a=t+n;this._items.splice(a,0,o),this._itemMap.set(s,o),this.fire("add",o,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new U("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new U("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,s,a)=>{const u=t._bindToCollection==this,p=t._bindToInternalToExternalMap.get(s);if(u&&p)this._bindToExternalToInternalMap.set(s,p),this._bindToInternalToExternalMap.set(p,s);else{const b=e(s);if(!b)return void this._skippedIndexesFromExternal.push(a);let w=a;for(const A of this._skippedIndexesFromExternal)a>A&&w--;for(const A of t._skippedIndexesFromExternal)w>=A&&w++;this._bindToExternalToInternalMap.set(s,b),this._bindToInternalToExternalMap.set(b,s),this.add(b,w);for(let A=0;A<t._skippedIndexesFromExternal.length;A++)w<=t._skippedIndexesFromExternal[A]&&t._skippedIndexesFromExternal[A]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,s,a)=>{const u=this._bindToExternalToInternalMap.get(s);u&&this.remove(u),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((p,b)=>(a<b&&p.push(b-1),a>b&&p.push(b),p),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new U("collection-add-invalid-id",this);if(this.get(n))throw new U("collection-add-item-already-exists",this)}else e[t]=n=Y();return n}_remove(e){let t,n,o,s=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),s=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],s=!o,o&&(n=o[a])):(o=e,n=o[a],t=this._items.indexOf(o),s=t==-1||!this._itemMap.get(n)),s)throw new U("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const u=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(u),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function zn(i){const e=i.next();return e.done?null:e.value}class po extends br(Qe()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new U("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Ui{constructor(){this._listener=new(br())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Ba(n),n)})}set(e,t,n={}){const o=ph(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,u)=>{t(u,()=>{u.preventDefault(),u.stopPropagation(),a.stop()}),a.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+Ba(e),e)}destroy(){this._listener.stopListening()}}function Hi(i){return Se(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}function Op(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function Lp(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const kw=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:\u200D${e})*`,"ug")}();function kd(i,e){const t=String(i).matchAll(kw);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Re extends Qe(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",wh,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",wh),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function wh(i){i.return=!1,i.stop()}class z extends Qe(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Bs,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Bs),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Bs(i){i.return=!1,i.stop()}class Yl extends z{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){ke(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class ii extends Ye(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new U("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,s=this._context;(function O(R,H=new Set){R.forEach(K=>{p(K)&&(H.has(K)||(H.add(K),K.pluginName&&!o._availablePlugins.has(K.pluginName)&&o._availablePlugins.set(K.pluginName,K),K.requires&&O(K.requires,H)))})})(e),E(e);const a=[...function O(R,H=new Set){return R.map(K=>p(K)?K:o._availablePlugins.get(K)).reduce((K,oe)=>H.has(oe)?K:(H.add(oe),oe.requires&&(E(oe.requires,oe),O(oe.requires,H).forEach(pe=>K.add(pe))),K.add(oe)),new Set)}(e.filter(O=>!w(O,t)))];(function(O,R){for(const H of R){if(typeof H!="function")throw new U("plugincollection-replace-plugin-invalid-type",null,{pluginItem:H});const K=H.pluginName;if(!K)throw new U("plugincollection-replace-plugin-missing-name",null,{pluginItem:H});if(H.requires&&H.requires.length)throw new U("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:K});const oe=o._availablePlugins.get(K);if(!oe)throw new U("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:K});const pe=O.indexOf(oe);if(pe===-1){if(o._contextPlugins.has(oe))return;throw new U("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:K})}if(oe.requires&&oe.requires.length)throw new U("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:K});O.splice(pe,1,H),o._availablePlugins.set(K,H)}})(a,n);const u=function(O){return O.map(R=>{let H=o._contextPlugins.get(R);return H=H||new R(s),o._add(R,H),H})}(a);return I(u,"init").then(()=>I(u,"afterInit")).then(()=>u);function p(O){return typeof O=="function"}function b(O){return p(O)&&O.isContextPlugin}function w(O,R){return R.some(H=>H===O||A(O)===H||A(H)===O)}function A(O){return p(O)?O.pluginName||O.name:O}function E(O,R=null){O.map(H=>p(H)?H:o._availablePlugins.get(H)||H).forEach(H=>{(function(K,oe){if(!p(K))throw oe?new U("plugincollection-soft-required",s,{missingPlugin:K,requiredBy:A(oe)}):new U("plugincollection-plugin-not-found",s,{plugin:K})})(H,R),function(K,oe){if(!!b(oe)&&!b(K))throw new U("plugincollection-context-required",s,{plugin:A(K),requiredBy:A(oe)})}(H,R),function(K,oe){if(!!oe&&!!w(K,t))throw new U("plugincollection-required",s,{plugin:A(K),requiredBy:A(oe)})}(H,R)})}function I(O,R){return O.reduce((H,K)=>K[R]?o._contextPlugins.has(K)?H:H.then(K[R].bind(K)):H,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new U("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Rt{constructor(e){this.config=new it(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new ii(this,t);const n=this.config.get("language")||{};this.locale=new Kl({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Bo,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new U("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new U("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new U("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class vd extends Qe(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var vw=m(6062),gt=m.n(vw),qr=m(4717),yw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};gt()(qr.Z,yw),qr.Z.locals;const yd=new WeakMap;function Rp(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:s=!1}=i,a=e.document;yd.has(a)||(yd.set(a,new Map),a.registerPostFixer(u=>_h(a,u)),a.on("change:isComposing",()=>{e.change(u=>_h(a,u))},{priority:"high"})),yd.get(a).set(t,{text:n,isDirectHost:o,keepOnFocus:s,hostElement:o?t:null}),e.change(u=>_h(a,u))}function Aw(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function _h(i,e){const t=yd.get(i),n=[];let o=!1;for(const[s,a]of t)a.isDirectHost&&(n.push(s),qi(e,s,a)&&(o=!0));for(const[s,a]of t){if(a.isDirectHost)continue;const u=Cw(s);u&&(n.includes(u)||(a.hostElement=u,qi(e,s,a)&&(o=!0)))}return o}function qi(i,e,t){const{text:n,isDirectHost:o,hostElement:s}=t;let a=!1;return s.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,s),a=!0),(o||e.childCount==1)&&function(u,p){if(!u.isAttached()||Array.from(u.getChildren()).some(E=>!E.is("uiElement")))return!1;const w=u.document,A=w.selection.anchor;return!(w.isComposing&&A&&A.parent===u||!p&&w.isFocused&&(!A||A.parent===u))}(s,t.keepOnFocus)?function(u,p){return!p.hasClass("ck-placeholder")&&(u.addClass("ck-placeholder",p),!0)}(i,s)&&(a=!0):Aw(i,s)&&(a=!0),a}function Cw(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Os{is(){throw new Error("is() method is abstract")}}const zp=function(i){return ne(i,4)};class Ls extends Ye(Os){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new U("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=ve(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=zp(this);return delete e.parent,e}}Ls.prototype.is=function(i){return i==="node"||i==="view:node"};class gn extends Ls{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof gn&&(this===e||this.data===e.data)}_clone(){return new gn(this.document,this.data)}}gn.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class ro extends Os{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new U("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new U("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}ro.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class Wi{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=jp(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const s=jp(n,o);s&&t.push({element:n,pattern:o,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function jp(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return yo(n)?(n.style!==void 0&&Pe("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&Pe("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),kh(n,s,a=>o.getAttribute(a))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return kh(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return kh(n,o.getStyleNames(!0),s=>o.getStyle(s))}(e.styles,i),!t.styles)?null:t}function kh(i,e,t){const n=function(a){return Array.isArray(a)?a.map(u=>yo(u)?(u.key!==void 0&&u.value!==void 0||Pe("matcher-pattern-missing-key-or-value",u),[u.key,u.value]):[u,!0]):yo(a)?Object.entries(a):[[a,!0]]}(i),o=Array.from(e),s=[];if(n.forEach(([a,u])=>{o.forEach(p=>{(function(b,w){return b===!0||b===w||b instanceof RegExp&&w.match(b)})(a,p)&&function(b,w,A){if(b===!0)return!0;const E=A(w);return b===E||b instanceof RegExp&&!!String(E).match(b)}(u,p,t)&&s.push(p)})}),n.length&&!(s.length<n.length))return s}const Ad=function(i){return typeof i=="symbol"||sn(i)&&$n(i)=="[object Symbol]"};var xw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rs=/^\w*$/;const Ew=function(i,e){if(Wt(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Ad(i))||Rs.test(i)||!xw.test(i)||e!=null&&i in Object(e)};function vh(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var a=i.apply(this,n);return t.cache=s.set(o,a)||s,a};return t.cache=new(vh.Cache||wa),t}vh.Cache=wa;const vi=vh;var Dw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tw=/\\(\\)?/g,Sw=function(i){var e=vi(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(Dw,function(t,n,o,s){e.push(o?s.replace(Tw,"$1"):n||t)}),e});const Iw=Sw,Mw=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var yh=qe?qe.prototype:void 0,Ah=yh?yh.toString:void 0;const Pw=function i(e){if(typeof e=="string")return e;if(Wt(e))return Mw(e,i)+"";if(Ad(e))return Ah?Ah.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Ch=function(i){return i==null?"":Pw(i)},Ql=function(i,e){return Wt(i)?i:Ew(i,e)?[i]:Iw(Ch(i))},Zl=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Oa=function(i){if(typeof i=="string"||Ad(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},Fp=function(i,e){for(var t=0,n=(e=Ql(e,i)).length;i!=null&&t<n;)i=i[Oa(e[t++])];return t&&t==n?i:void 0},xh=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=i[n+e];return s},Nw=function(i,e){return e.length<2?i:Fp(i,xh(e,0,-1))},kr=function(i,e){return e=Ql(e,i),(i=Nw(i,e))==null||delete i[Oa(Zl(e))]},Eh=function(i,e){return i==null||kr(i,e)},Gi=function(i,e,t){var n=i==null?void 0:Fp(i,e);return n===void 0?t:n},Wo=function(i,e,t){(t!==void 0&&!Ho(i[e],t)||t===void 0&&!(e in i))&&_a(i,e,t)},Bw=function(i){return function(e,t,n){for(var o=-1,s=Object(e),a=n(e),u=a.length;u--;){var p=a[i?u:++o];if(t(s[p],p,s)===!1)break}return e}}(),$p=function(i){return sn(i)&&Fr(i)},Cd=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},Jl=function(i){return fr(i,zi(i))},Wr=function(i,e,t,n,o,s,a){var u=Cd(i,t),p=Cd(e,t),b=a.get(p);if(b)Wo(i,t,b);else{var w=s?s(u,p,t+"",i,e,a):void 0,A=w===void 0;if(A){var E=Wt(p),I=!E&&mr(p),O=!E&&!I&&Il(p);w=p,E||I||O?Wt(u)?w=u:$p(u)?w=di(u):I?(A=!1,w=xs(p,!0)):O?(A=!1,w=Ia(p,!0)):w=[]:yo(p)||As(p)?(w=u,As(u)?w=Jl(u):Dt(u)&&!sr(u)||(w=$l(p))):A=!1}A&&(a.set(p,w),o(w,p,n,s,a),a.delete(p)),Wo(i,t,w)}},Vp=function i(e,t,n,o,s){e!==t&&Bw(t,function(a,u){if(s||(s=new ur),Dt(a))Wr(e,t,u,n,i,o,s);else{var p=o?o(Cd(e,u),a,u+"",e,t,s):void 0;p===void 0&&(p=a),Wo(e,u,p)}},zi)},zs=function(i){return i},xd=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var Up=Math.max;const Hp=function(i,e,t){return e=Up(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,s=Up(n.length-e,0),a=Array(s);++o<s;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=t(a),xd(i,this,u)}},mo=function(i){return function(){return i}},Dh=Rr?function(i,e){return Rr(i,"toString",{configurable:!0,enumerable:!1,value:mo(e),writable:!0})}:zs;var qp=Date.now;const Th=function(i){var e=0,t=0;return function(){var n=qp(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(Dh),Ed=function(i,e){return Th(Hp(i,e,zs),i+"")},js=function(i,e,t){if(!Dt(t))return!1;var n=typeof e;return!!(n=="number"?Fr(t)&&Tl(e,t.length):n=="string"&&e in t)&&Ho(t[e],i)},Sh=function(i){return Ed(function(e,t){var n=-1,o=t.length,s=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(s=i.length>3&&typeof s=="function"?(o--,s):void 0,a&&js(t[0],t[1],a)&&(s=o<3?void 0:s,o=1),e=Object(e);++n<o;){var u=t[n];u&&i(e,u,n,s)}return e})},Do=Sh(function(i,e,t){Vp(i,e,t)}),Ih=function(i,e,t,n){if(!Dt(i))return i;for(var o=-1,s=(e=Ql(e,i)).length,a=s-1,u=i;u!=null&&++o<s;){var p=Oa(e[o]),b=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return i;if(o!=a){var w=u[p];(b=n?n(w,p,u):void 0)===void 0&&(b=Dt(w)?w:Tl(e[o+1])?[]:{})}ka(u,p,b),u=u[p]}return i},Ow=function(i,e,t){return i==null?i:Ih(i,e,t)};class Lw{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,s=0,a=0,u=null;const p=new Map;if(n==="")return p;n.charAt(n.length-1)!=";"&&(n+=";");for(let b=0;b<n.length;b++){const w=n.charAt(b);if(o===null)switch(w){case":":u||(u=n.substr(s,b-s),a=b+1);break;case'"':case"'":o=w;break;case";":{const A=n.substr(a,b-a);u&&p.set(u.trim(),A.trim()),u=null,s=b+1;break}}else w===o&&(o=null)}return p}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Dt(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Xl(e);Eh(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Dt(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=Gi(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class Rw{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Dt(t))Mh(n,Xl(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:s,value:a}=o(t);Mh(n,s,a)}else Mh(n,e,t)}getNormalized(e,t){if(!e)return Do({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Gi(t,n);const o=n(e,t);if(o)return o}return Gi(t,Xl(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Xl(i){return i.replace("-",".")}function Mh(i,e,t){let n=t;Dt(t)&&(n=Do({},Gi(i,e),t)),Ow(i,e,n)}class go extends Ls{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(s){const a=Hi(s);for(const[u,p]of a)p===null?a.delete(u):typeof p!="string"&&a.set(u,String(p));return a}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");Ph(this._classes,s),this._attrs.delete("class")}this._styles=new Lw(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof go))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Wi(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new gn(s,a)]:(Se(a)||(a=[a]),Array.from(a).map(u=>typeof u=="string"?new gn(s,u):u instanceof ro?new gn(s,u.data):u))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?Ph(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Xn(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Xn(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),yo(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Xn(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Ph(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}go.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ec extends go{constructor(...e){super(...e),this.getFillerOffset=Wp}}function Wp(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}ec.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Gr extends Qe(ec){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Gr.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Gp=Symbol("rootName");class Kp extends Gr{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Gp)}set rootName(e){this._setCustomProperty(Gp,e)}set _name(e){this.name=e}}Kp.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class yr{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new U("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new U("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=$e._createAt(e.startPosition):this.position=$e._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof gn){if(e.isAtEnd)return this.position=$e._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof go)return this.shallow?e.offset++:e=new $e(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof gn){if(this.singleCharacters)return e=new $e(o,0),this.position=e,this._next();{let s,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,s=new ro(o,0,a),e=$e._createAfter(s)):(s=new ro(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new ro(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=$e._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof gn){if(e.isAtStart)return this.position=$e._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof go)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new $e(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof gn){if(this.singleCharacters)return e=new $e(o,o.data.length),this.position=e,this._previous();{let s,a=o.data.length;if(o==this._boundaryStartParent){const u=this.boundaries.start.offset;s=new ro(o,u,o.data.length-u),a=s.data.length,e=$e._createBefore(s)}else s=new ro(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const u=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-u}e.offset-=s;const a=new ro(n,e.offset,s);return this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=$e._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,s){return t instanceof ro&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=$e._createAfter(t.textNode):(o=$e._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=$e._createBefore(t.textNode):(o=$e._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:s}}}}class $e extends Os{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Gr);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=$e._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new yr(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=ve(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new yr(e)}clone(){return new $e(this.parent,this.offset)}static _createAt(e,t){if(e instanceof $e)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new U("view-createpositionat-offset-required",n)}return new $e(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new $e(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new U("view-position-after-root",e,{root:e});return new $e(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new $e(e.textNode,e.offsetInText);if(!e.parent)throw new U("view-position-before-root",e,{root:e});return new $e(e.parent,e.index)}}$e.prototype.is=function(i){return i==="position"||i==="view:position"};class bt extends Os{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new yr({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Dd,{direction:"backward"}),t=this.end.getLastMatchingPosition(Dd);return e.parent.is("$text")&&e.isAtStart&&(e=$e._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=$e._createAfter(t.parent)),new bt(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Dd);if(e.isAfter(this.end)||e.isEqual(this.end))return new bt(e,e);let t=this.end.getLastMatchingPosition(Dd,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new $e(n,0)),o&&o.is("$text")&&(t=new $e(o,o.data.length)),new bt(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new bt(this.start,e.start)),this.containsPosition(e.end)&&t.push(new bt(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new bt(t,n)}return null}getWalker(e={}){return e.boundaries=this,new yr(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new bt(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new yr(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new yr(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new $e(e,t),new $e(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift($e._createBefore(e),t)}}function Dd(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}bt.prototype.is=function(i){return i==="range"||i==="view:range"};class Ki extends Ye(Os){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Ve(this.getRanges());if(t!=Ve(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof Ki||t instanceof Td)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof bt)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof $e)this._setRanges([new bt(t)]),this._setFakeOptions(o);else if(t instanceof Ls){const s=!!o&&!!o.backward;let a;if(n===void 0)throw new U("view-selection-setto-required-second-parameter",this);a=n=="in"?bt._createIn(t):n=="on"?bt._createOn(t):new bt($e._createAt(t,n)),this._setRanges([a],s),this._setFakeOptions(o)}else{if(!Se(t))throw new U("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new U("view-selection-setfocus-no-ranges",this);const n=$e._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new bt(n,o),!0):this._addRange(new bt(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof bt))throw new U("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new U("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new bt(e.start,e.end))}}Ki.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Td extends Ye(Os){constructor(...e){super(),this._selection=new Ki,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Td.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class Kr extends we{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Nh=Symbol("bubbling contexts");function tc(i){return class extends i{fire(e,...t){try{const n=e instanceof we?e:new we(this,e),o=Ra(this);if(!o.size)return;if(La(n,"capturing",this),Fs(o,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),a=s?s.getContainedElement():null,u=!!a&&Boolean(Bh(o,a));let p=a||function(b){if(!b)return null;const w=b.start.parent,A=b.end.parent,E=w.getPath(),I=A.getPath();return E.length>I.length?w:A}(s);if(La(n,"atTarget",p),!u){if(Fs(o,"$text",n,...t))return n.return;La(n,"bubbling",p)}for(;p;){if(p.is("rootElement")){if(Fs(o,"$root",n,...t))return n.return}else if(p.is("element")&&Fs(o,p.name,n,...t))return n.return;if(Fs(o,p,n,...t))return n.return;p=p.parent,La(n,"bubbling",p)}return La(n,"bubbling",this),Fs(o,"$document",n,...t),n.return}catch(n){U.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=Xn(n.context||"$document"),s=Ra(this);for(const a of o){let u=s.get(a);u||(u=new(Ye()),s.set(a,u)),this.listenTo(u,e,t,n)}}_removeEventListener(e,t){const n=Ra(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=tc(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{tc[e]=i.prototype[e]})}function La(i,e,t){i instanceof Kr&&(i._eventPhase=e,i._currentTarget=t)}function Fs(i,e,t,...n){const o=typeof e=="string"?i.get(e):Bh(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Bh(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function Ra(i){return i[Nh]||(i[Nh]=new Map),i[Nh]}class Sd extends tc(Qe()){constructor(e){super(),this.selection=new Td,this.roots=new Bo({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Yr extends go{constructor(...e){super(...e),this.getFillerOffset=Yp,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new U("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Yp(){if(Oh(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Oh(i)>1)return null;i=i.parent}return!i||Oh(i)>1?null:this.childCount}function Oh(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}Yr.DEFAULT_PRIORITY=10,Yr.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Id extends go{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=zw}_insertChild(e,t){if(t&&(t instanceof Ls||Array.from(t).length>0))throw new U("view-emptyelement-cannot-add",[this,t]);return 0}}function zw(){return null}Id.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class za extends go{constructor(...e){super(...e),this.getFillerOffset=Lh}_insertChild(e,t){if(t&&(t instanceof Ls||Array.from(t).length>0))throw new U("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function Qp(i){i.document.on("arrowKey",(e,t)=>function(n,o,s){if(o.keyCode==ut.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),u=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(u||o.shiftKey){const p=a.focusNode,b=a.focusOffset,w=s.domPositionToView(p,b);if(w===null)return;let A=!1;const E=w.getLastMatchingPosition(I=>(I.item.is("uiElement")&&(A=!0),!(!I.item.is("uiElement")&&!I.item.is("attributeElement"))));if(A){const I=s.viewPositionToDom(E);u?a.collapse(I.parent,I.offset):a.extend(I.parent,I.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function Lh(){return null}za.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Rh extends go{constructor(...e){super(...e),this.getFillerOffset=zh}_insertChild(e,t){if(t&&(t instanceof Ls||Array.from(t).length>0))throw new U("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function zh(){return null}Rh.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class xt extends Ye(Os){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new gn(s,a)]:(Se(a)||(a=[a]),Array.from(a).map(u=>typeof u=="string"?new gn(s,u):u instanceof ro?new gn(s,u.data):u))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}xt.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class Zp{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new xt(this.document,e)}createText(e){return new gn(this.document,e)}createAttributeElement(e,t,n={}){const o=new Yr(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let s=null;yo(n)?o=n:s=n;const a=new ec(this.document,e,t,s);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const o=new Gr(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Id(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new za(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const s=new Rh(this.document,e,t);return n&&(s.render=n),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){yo(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof $e?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new U("view-writer-break-non-container-element",this.document);if(!t.parent)throw new U("view-writer-break-root",this.document);if(e.isAtStart)return $e._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert($e._createAfter(t),n);const o=new bt(e,$e._createAt(t,"end")),s=new $e(n,0);this.move(o,s)}return $e._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,u=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new $e(a,u))}const o=n.getChild(t-1),s=n.getChild(t);if(!o||!s)return e;if(o.is("$text")&&s.is("$text"))return Jp(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const a=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new $e(o,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new U("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),s=o instanceof gn?$e._createAt(o,"end"):$e._createAt(t,"end");return this.move(bt._createIn(n),$e._createAt(t,"end")),this.remove(bt._createOn(n)),s}insert(e,t){Xp(t=Se(t)?[...t]:[t],this.document);const n=t.reduce((a,u)=>{const p=a[a.length-1],b=!u.is("uiElement");return p&&p.breakAttributes==b?p.nodes.push(u):a.push({breakAttributes:b,nodes:[u]}),a},[]);let o=null,s=e;for(const{nodes:a,breakAttributes:u}of n){const p=this._insertNodes(s,a,u);o||(o=p.start),s=p.end}return o?new bt(o,s):new bt(e)}remove(e){const t=e instanceof bt?e:bt._createOn(e);if($s(t,this.document),t.isCollapsed)return new xt(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,a=o.offset-n.offset,u=s._removeChildren(n.offset,a);for(const b of u)this._removeFromClonedElementsGroup(b);const p=this.mergeAttributes(n);return t.start=p,t.end=p.clone(),new xt(this.document,u)}clear(e,t){$s(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let a;if(s.is("element")&&t.isSimilar(s))a=bt._createOn(s);else if(!o.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const u=s.getAncestors().find(p=>p.is("element")&&t.isSimilar(p));u&&(a=bt._createIn(u))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,s=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Yr))throw new U("view-writer-wrap-invalid-attribute",this.document);if($s(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new bt(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Yr))throw new U("view-writer-unwrap-invalid-attribute",this.document);if($s(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=this._unwrapChildren(s,n.offset,o.offset,t),u=this.mergeAttributes(a.start);u.isEqual(a.start)||a.end.offset--;const p=this.mergeAttributes(a.end);return new bt(u,p)}rename(e,t){const n=new ec(this.document,e,t.getAttributes());return this.insert($e._createAfter(t),n),this.move(bt._createIn(t),$e._createAt(n,0)),this.remove(bt._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return $e._createAt(e,t)}createPositionAfter(e){return $e._createAfter(e)}createPositionBefore(e){return $e._createBefore(e)}createRange(...e){return new bt(...e)}createRangeOn(e){return bt._createOn(e)}createRangeIn(e){return bt._createIn(e)}createSelection(...e){return new Ki(...e)}createSlot(e){if(!this._slotFactory)throw new U("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,s;if(o=n?jh(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new U("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?$h(e):e;const a=o._insertChild(s.offset,t);for(const w of t)this._addToClonedElementsGroup(w);const u=s.getShiftedBy(a),p=this.mergeAttributes(s);p.isEqual(s)||u.offset--;const b=this.mergeAttributes(u);return new bt(p,b)}_wrapChildren(e,t,n,o){let s=t;const a=[];for(;s<n;){const p=e.getChild(s),b=p.is("$text"),w=p.is("attributeElement");if(w&&this._wrapAttributeElement(o,p))a.push(new $e(e,s));else if(b||!w||nc(o,p)){const A=o._clone();p._remove(),A._appendChild(p),e._insertChild(s,A),this._addToClonedElementsGroup(A),a.push(new $e(e,s))}else this._wrapChildren(p,0,p.childCount,o);s++}let u=0;for(const p of a)p.offset-=u,p.offset!=t&&(this.mergeAttributes(p).isEqual(p)||(u++,n--));return bt._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let s=t;const a=[];for(;s<n;){const p=e.getChild(s);if(p.is("attributeElement"))if(p.isSimilar(o)){const b=p.getChildren(),w=p.childCount;p._remove(),e._insertChild(s,b),this._removeFromClonedElementsGroup(p),a.push(new $e(e,s),new $e(e,s+w)),s+=w,n+=w-1}else this._unwrapAttributeElement(o,p)?(a.push(new $e(e,s),new $e(e,s+1)),s++):(this._unwrapChildren(p,0,p.childCount,o),s++);else s++}let u=0;for(const p of a)p.offset-=u,!(p.offset==t||p.offset==n)&&(this.mergeAttributes(p).isEqual(p)||(u++,n--));return bt._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=this._wrapChildren(s,n.offset,o.offset,t),u=this.mergeAttributes(a.start);u.isEqual(a.start)||a.end.offset--;const p=this.mergeAttributes(a.end);return new bt(u,p)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Fh(e.clone());e.parent.is("$text")&&(e=$h(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new bt(e,e.getShiftedBy(1));this.wrap(o,t);const s=new $e(n.parent,n.index);n._remove();const a=s.nodeBefore,u=s.nodeAfter;return a instanceof gn&&u instanceof gn?Jp(a,u):Fh(s)}_wrapAttributeElement(e,t){if(!Vh(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Vh(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if($s(e,this.document),e.isCollapsed){const p=this._breakAttributes(e.start,t);return new bt(p,p)}const s=this._breakAttributes(o,t),a=s.parent.childCount,u=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-a,new bt(u,s)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new U("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new U("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new U("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&ja(o.parent)||ja(o))return e.clone();if(o.is("$text"))return this._breakAttributes($h(e),t);if(n==o.childCount){const s=new $e(o.parent,o.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new $e(o.parent,o.index);return this._breakAttributes(s,t)}{const s=o.index+1,a=o._clone();o.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const u=o.childCount-n,p=o._removeChildren(n,u);a._appendChild(p);const b=new $e(o.parent,s);return this._breakAttributes(b,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function jh(i){let e=i.parent;for(;!ja(e);){if(!e)return;e=e.parent}return e}function nc(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function Fh(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new $e(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new $e(t,0):i}function $h(i){if(i.offset==i.parent.data.length)return new $e(i.parent.parent,i.parent.index+1);if(i.offset===0)return new $e(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new gn(i.root.document,e)),new $e(i.parent.parent,i.parent.index+1)}function Jp(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new $e(i,t)}const hi=[gn,Yr,ec,Id,Rh,za];function Xp(i,e){for(const t of i){if(!hi.some(n=>t instanceof n))throw new U("view-writer-insert-invalid-node-type",e);t.is("$text")||Xp(t.getChildren(),e)}}function ja(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function $s(i,e){const t=jh(i.start),n=jh(i.end);if(!t||!n||t!==n)throw new U("view-writer-invalid-range-container",e)}function Vh(i,e){return i.id===null&&e.id===null}const Uh=i=>i.createTextNode("\xA0"),Go=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},Ar=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Fa="\u2060".repeat(7);function Ko(i){return mn(i)&&i.data.substr(0,7)===Fa}function Qr(i){return i.data.length==7&&Ko(i)}function Hh(i){return Ko(i)?i.data.slice(7):i.data}function qh(i,e){if(e.keyCode==ut.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Ko(n)&&o<=7&&t.collapse(n,0)}}}var Wh=m(9315),Gh={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};gt()(Wh.Z,Gh),Wh.Z.locals;class Kh extends Qe(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),y.isBlink&&!y.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new U("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!y.isAndroid)return;let e=null;const t=!(y.isBlink&&!y.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=$e._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Ko(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Cr(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),s=this._findReplaceActions(o,t,n);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const u of s)if(u==="replace"){const p=a.equal+a.insert,b=a.equal+a.delete,w=e.getChild(p);!w||w.is("uiElement")||w.is("rawElement")||this._updateElementMappings(w,t[b]),Rn(n[p]),a.equal++}else a[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?$e._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&mn(t.parent)&&Ko(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Ko(e))throw new U("view-renderer-filler-was-lost",this);Qr(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const u=a.findAncestor(p=>p.hasAttribute("contenteditable"));return!u||u.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,s=e.nodeAfter;return!(o instanceof gn||s instanceof gn)&&(!y.isAndroid||!o&&!s)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(o=Fa+o),Yh(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),o=e.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(y.isAndroid){let A=null;for(const E of Array.from(n.childNodes)){if(A&&mn(A)&&mn(E)){n.normalize();break}A=E}}const o=t.inlineFillerPosition,s=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&Cr(n.ownerDocument,a,o.offset);const u=this._diffNodeLists(s,a),p=y.isAndroid?this._findReplaceActions(u,s,a,{replaceText:!0}):u;let b=0;const w=new Set;for(const A of p)A==="delete"?(w.add(s[b]),Rn(s[b])):A!=="equal"&&A!=="replace"||b++;b=0;for(const A of p)A==="insert"?(D(n,b,a[b]),b++):A==="replace"?(Yh(s[b],a[b].data),b++):A==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[b])),b++);for(const A of w)A.parentNode||this.domConverter.unbindDomElement(A)}_diffNodeLists(e,t){return e=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(e,this._fakeSelectionContainer),F(e,t,tm.bind(null,this.domConverter))}_findReplaceActions(e,t,n,o={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let s=[],a=[],u=[];const p={equal:0,insert:0,delete:0};for(const b of e)b==="insert"?u.push(n[p.equal+p.insert]):b==="delete"?a.push(t[p.equal+p.delete]):(s=s.concat(F(a,u,o.replaceText?xr:em).map(w=>w==="equal"?"replace":w)),s.push("equal"),a=[],u=[]),p[b]++;return s.concat(F(a,u,o.replaceText?xr:em).map(b=>b==="equal"?"replace":b))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(y.isBlink&&!y.isAndroid&&this.isSelecting&&!this.markedChildren.size||this._isFocusChanging)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&y.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const u=a.createElement("div");return u.className="ck-fake-selection-container",Object.assign(u.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),u.textContent="\xA0",u}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),s=t.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),y.isGecko&&function(s,a){const u=s.parent;if(u.nodeType!=Node.ELEMENT_NODE||s.offset!=u.childNodes.length-1)return;const p=u.childNodes[s.offset];p&&p.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Cr(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(mn(o))return o.data=Fa+o.data,o;{const s=i.createTextNode(Fa);return Array.isArray(e)?n.splice(t,0,s):D(e,t,s),s}}function em(i,e){return pn(i)&&pn(e)&&!mn(i)&&!mn(e)&&!B(i)&&!B(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function xr(i,e){return pn(i)&&pn(e)&&mn(i)&&mn(e)}function tm(i,e,t){return e===t||(mn(e)&&mn(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function Yh(i,e){const t=i.data;if(t==e)return;const n=P(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const Qh=Ar(Ct.document),jw=Uh(Ct.document),Fw=Go(Ct.document),Md="data-ck-unsafe-attribute-",Zh="data-ck-unsafe-element";class oc{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ct.document:Ct.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Wi,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Ki(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),u=[];let p;for(;p=a.nextNode();)u.push(p);for(const b of u){for(const A of b.getAttributeNames())this.setDomElementAttribute(b,A,b.getAttribute(A));const w=b.tagName.toLowerCase();this._shouldRenameElement(w)&&(Xh(w),b.replaceWith(this._createReplacementDomElement(w,b)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Xh(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);s||Pe("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Md+t)&&s&&e.removeAttribute(Md+t),e.setAttribute(s?t:Md+t,n)}removeDomElementAttribute(e,t){t!=Zh&&(e.removeAttribute(t),e.removeAttribute(Md+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const s of e.getChildren()){n===o&&(yield this._getBlockFiller());const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(a&&Pe("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Ko(n)&&(o+=7),{parent:n,offset:o}}{let n,o,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const a=e.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!o)return null;n=o.parentNode,s=o.nextSibling}return mn(s)&&Ko(s)?{parent:s,offset:7}:{parent:n,offset:o?x(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(B(e)&&t.skipComments)return null;if(mn(e)){if(Qr(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new gn(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new xt(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const s=e.attributes;if(s)for(let a=s.length,u=0;u<a;u++)o._setAttribute(s[u].name,s[u].value);if(this._isViewElementWithRawContent(o,t)||B(e)){const a=B(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))o._appendChild(s);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],s=this.domToView(o,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;mn(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const s=e.getRangeAt(o),a=this.domRangeToView(s);a&&n.push(a)}return new Ki(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new bt(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,x(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return $e._createBefore(n);if(mn(e)){if(Qr(e))return this.domPositionToView(e.parentNode,x(e));const o=this.findCorrespondingViewText(e);let s=t;return o?(Ko(e)&&(s-=7,s=s<0?0:s),new $e(o,s)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new $e(o,0)}else{const o=e.childNodes[t-1];if(mn(o)&&Qr(o))return this.domPositionToView(o.parentNode,x(o));const s=mn(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new $e(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Qr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const s=o.nextSibling;return s instanceof gn?s:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const s=o.getChild(0);return s instanceof gn?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Ct.window,s=[];nm(t,a=>{const{scrollLeft:u,scrollTop:p}=a;s.push([u,p])}),t.focus(),nm(t,a=>{const[u,p]=s.shift();a.scrollLeft=u,a.scrollTop=p}),Ct.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(Qh):!(e.tagName!=="BR"||!Jh(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(Fw)||function(t,n){return t.isEqualNode(jw)&&Jh(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=wr(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Uh(this._domDocument);case"markedNbsp":return Go(this._domDocument);case"br":return Ar(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(mn(e)&&Ko(e)&&t<7||this.isElement(e)&&Ko(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(b,w){return wr(b).some(E=>E.tagName&&w.includes(E.tagName.toLowerCase()))}(e,this.preElements))return Hh(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,o);s&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Hh(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const u=o&&this.isElement(o)&&o.tagName!="BR",p=o&&mn(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||u||p)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Ko(e)}_getTouchingInlineViewNode(e,t){const n=new yr({startPosition:t?$e._createAfter(e):$e._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let s=!0,a=e;do if(!s&&a[n]?a=a[n]:a[o]?(a=a[o],s=!1):(a=a.parentNode,s=!0),!a||this._isBlockElement(a))return null;while(!mn(a)&&a.tagName!="BR"&&!this._isInlineObjectElement(a));return a}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(B(e))return new za(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new go(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Zh,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function nm(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Jh(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Xh(i){i==="script"&&Pe("domconverter-unsafe-script-element-detected"),i==="style"&&Pe("domconverter-unsafe-style-element-detected")}class Bn extends br(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const yi=Sh(function(i,e){fr(e,zi(e),i)});class $a{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,yi(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Zr extends Bn{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new $a(this.view,t,n))}}class Pd extends Zr{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ba(this)}};this.fire(e.type,e,t)}}const Jr=function(){return We.Date.now()};var om=/\s/;const im=function(i){for(var e=i.length;e--&&om.test(i.charAt(e)););return e};var $w=/^\s+/;const rm=function(i){return i&&i.slice(0,im(i)+1).replace($w,"")};var Va=/^[-+]0x[0-9a-f]+$/i,ic=/^0b[01]+$/i,Vw=/^0o[0-7]+$/i,sm=parseInt;const ef=function(i){if(typeof i=="number")return i;if(Ad(i))return NaN;if(Dt(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Dt(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=rm(i);var t=ic.test(i);return t||Vw.test(i)?sm(i.slice(2),t?2:8):Va.test(i)?NaN:+i};var Nd=Math.max,am=Math.min;const Xr=function(i,e,t){var n,o,s,a,u,p,b=0,w=!1,A=!1,E=!0;if(typeof i!="function")throw new TypeError("Expected a function");function I(pe){var He=n,wt=o;return n=o=void 0,b=pe,a=i.apply(wt,He)}function O(pe){return b=pe,u=setTimeout(H,e),w?I(pe):a}function R(pe){var He=pe-p;return p===void 0||He>=e||He<0||A&&pe-b>=s}function H(){var pe=Jr();if(R(pe))return K(pe);u=setTimeout(H,function(He){var wt=e-(He-p);return A?am(wt,s-(He-b)):wt}(pe))}function K(pe){return u=void 0,E&&n?I(pe):(n=o=void 0,a)}function oe(){var pe=Jr(),He=R(pe);if(n=arguments,o=this,p=pe,He){if(u===void 0)return O(p);if(A)return clearTimeout(u),u=setTimeout(H,e),I(p)}return u===void 0&&(u=setTimeout(H,e)),a}return e=ef(e)||0,Dt(t)&&(w=!!t.leading,s=(A="maxWait"in t)?Nd(ef(t.maxWait)||0,e):s,E="trailing"in t?!!t.trailing:E),oe.cancel=function(){u!==void 0&&clearTimeout(u),b=0,n=p=o=u=void 0},oe.flush=function(){return u===void 0?a:K(Jr())},oe};class tf extends Bn{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Xr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Ki(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ut.arrowleft&&e!=ut.arrowup||n.setTo(n.getFirstPosition()),e!=ut.arrowright&&e!=ut.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const Bd=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},Uw=function(i){return this.__data__.has(i)};function rc(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new wa;++e<t;)this.add(i[e])}rc.prototype.add=rc.prototype.push=Bd,rc.prototype.has=Uw;const Od=rc,lm=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},nf=function(i,e){return i.has(e)},cm=function(i,e,t,n,o,s){var a=1&t,u=i.length,p=e.length;if(u!=p&&!(a&&p>u))return!1;var b=s.get(i),w=s.get(e);if(b&&w)return b==e&&w==i;var A=-1,E=!0,I=2&t?new Od:void 0;for(s.set(i,e),s.set(e,i);++A<u;){var O=i[A],R=e[A];if(n)var H=a?n(R,O,A,e,i,s):n(O,R,A,i,e,s);if(H!==void 0){if(H)continue;E=!1;break}if(I){if(!lm(e,function(K,oe){if(!nf(I,oe)&&(O===K||o(O,K,t,n,s)))return I.push(oe)})){E=!1;break}}else if(O!==R&&!o(O,R,t,n,s)){E=!1;break}}return s.delete(i),s.delete(e),E},dm=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},Er=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var of=qe?qe.prototype:void 0,Ld=of?of.valueOf:void 0;const Hw=function(i,e,t,n,o,s,a){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!s(new Sa(i),new Sa(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ho(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var u=dm;case"[object Set]":var p=1&n;if(u||(u=Er),i.size!=e.size&&!p)return!1;var b=a.get(i);if(b)return b==e;n|=2,a.set(i,e);var w=cm(u(i),u(e),n,o,s,a);return a.delete(i),w;case"[object Symbol]":if(Ld)return Ld.call(i)==Ld.call(e)}return!1};var um=Object.prototype.hasOwnProperty;const qw=function(i,e,t,n,o,s){var a=1&t,u=Ts(i),p=u.length;if(p!=Ts(e).length&&!a)return!1;for(var b=p;b--;){var w=u[b];if(!(a?w in e:um.call(e,w)))return!1}var A=s.get(i),E=s.get(e);if(A&&E)return A==e&&E==i;var I=!0;s.set(i,e),s.set(e,i);for(var O=a;++b<p;){var R=i[w=u[b]],H=e[w];if(n)var K=a?n(H,R,w,e,i,s):n(R,H,w,i,e,s);if(!(K===void 0?R===H||o(R,H,t,n,s):K)){I=!1;break}O||(O=w=="constructor")}if(I&&!O){var oe=i.constructor,pe=e.constructor;oe==pe||!("constructor"in i)||!("constructor"in e)||typeof oe=="function"&&oe instanceof oe&&typeof pe=="function"&&pe instanceof pe||(I=!1)}return s.delete(i),s.delete(e),I};var hm="[object Arguments]",Yi="[object Array]",Ua="[object Object]",Rd=Object.prototype.hasOwnProperty;const rf=function(i,e,t,n,o,s){var a=Wt(i),u=Wt(e),p=a?Yi:Ur(i),b=u?Yi:Ur(e),w=(p=p==hm?Ua:p)==Ua,A=(b=b==hm?Ua:b)==Ua,E=p==b;if(E&&mr(i)){if(!mr(e))return!1;a=!0,w=!1}if(E&&!w)return s||(s=new ur),a||Il(i)?cm(i,e,t,n,o,s):Hw(i,e,p,t,n,o,s);if(!(1&t)){var I=w&&Rd.call(i,"__wrapped__"),O=A&&Rd.call(e,"__wrapped__");if(I||O){var R=I?i.value():i,H=O?e.value():e;return s||(s=new ur),o(R,H,t,n,s)}}return!!E&&(s||(s=new ur),qw(i,e,t,n,o,s))},sc=function i(e,t,n,o,s){return e===t||(e==null||t==null||!sn(e)&&!sn(t)?e!=e&&t!=t:rf(e,t,n,o,i,s))},Ha=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?sc(i,e,void 0,t):!!n};class ht extends Bn{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const a of e){const u=t.mapDomToView(a.target);u&&(u.is("uiElement")||u.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||o.add(u))}for(const a of e){const u=t.mapDomToView(a.target);if((!u||!u.is("uiElement")&&!u.is("rawElement"))&&a.type==="characterData"){const p=t.findCorrespondingViewText(a.target);p&&!o.has(p.parent)?n.add(p):!p&&Ko(a.target)&&o.add(t.mapDomToView(a.target.parentNode))}}let s=!1;for(const a of n)s=!0,this.renderer.markToSync("text",a);for(const a of o){const u=t.mapViewToDom(a),p=Array.from(a.getChildren()),b=Array.from(t.domChildrenToView(u,{withChildren:!1}));Ha(p,b,zd)||(s=!0,this.renderer.markToSync("children",a))}s&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function zd(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class sf extends Bn{constructor(e){super(e),this.mutationObserver=e.getObserver(ht),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Xr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Xr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,s)=>{this.document.isComposing&&!y.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document._isFocusChanging=!1,this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Vs extends Zr{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,t._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{t._isFocusChanging=!1,e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const s=t.selection.editableElement;s!==null&&s!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Ww extends Zr{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class jd{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class fm extends Zr{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let s=null,a=null,u=[];if(e.dataTransfer&&(s=new jd(e.dataTransfer)),e.data!==null?a=e.data:s&&(a=s.getData("text/plain")),o.selection.isFake)u=Array.from(o.selection.getRanges());else if(t.length)u=t.map(p=>n.domConverter.domRangeToView(p));else if(y.isAndroid){const p=e.target.ownerDocument.defaultView.getSelection();u=Array.from(n.domConverter.domSelectionToView(p).getRanges())}if(y.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(u[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`;else{let t=null;for(const n of i.getChildren()){const o=ou(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(zo.includes(t.name)||zo.includes(n.name)?e+=`
`:e+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(r,l){(function(h,g){r.exports=g()})(cl,function(){const h="SweetAlert2:",g=x=>{const D=[];for(let B=0;B<x.length;B++)D.indexOf(x[B])===-1&&D.push(x[B]);return D},m=x=>x.charAt(0).toUpperCase()+x.slice(1),C=x=>Array.prototype.slice.call(x),_=x=>{console.warn("".concat(h," ").concat(typeof x=="object"?x.join(" "):x))},v=x=>{console.error("".concat(h," ").concat(x))},y=[],S=x=>{y.includes(x)||(y.push(x),_(x))},P=(x,D)=>{S('"'.concat(x,'" is deprecated and will be removed in the next major release. Please use "').concat(D,'" instead.'))},N=x=>typeof x=="function"?x():x,M=x=>x&&typeof x.toPromise=="function",F=x=>M(x)?x.toPromise():Promise.resolve(x),ee=x=>x&&Promise.resolve(x)===x,se={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},we=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],te={},Y=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ie=x=>Object.prototype.hasOwnProperty.call(se,x),ke=x=>we.indexOf(x)!==-1,U=x=>te[x],Pe=x=>{ie(x)||_('Unknown parameter "'.concat(x,'"'))},_e=x=>{Y.includes(x)&&_('The parameter "'.concat(x,'" is incompatible with toasts'))},ue=x=>{U(x)&&P(x,U(x))},Me=x=>{!x.backdrop&&x.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const D in x)Pe(D),x.toast&&_e(D),ue(D)},Fe="swal2-",Ge=x=>{const D={};for(const B in x)D[x[B]]=Fe+x[B];return D},Q=Ge(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Xe=Ge(["success","warning","info","question","error"]),Le=()=>document.body.querySelector(".".concat(Q.container)),Ft=x=>{const D=Le();return D?D.querySelector(x):null},Ye=x=>Ft(".".concat(x)),ot=()=>Ye(Q.popup),vt=()=>Ye(Q.icon),no=()=>Ye(Q.title),Fn=()=>Ye(Q["html-container"]),cn=()=>Ye(Q.image),Ln=()=>Ye(Q["progress-steps"]),fo=()=>Ye(Q["validation-message"]),Dt=()=>Ft(".".concat(Q.actions," .").concat(Q.confirm)),X=()=>Ft(".".concat(Q.actions," .").concat(Q.deny)),Te=()=>Ye(Q["input-label"]),Ne=()=>Ft(".".concat(Q.loader)),Ue=()=>Ft(".".concat(Q.actions," .").concat(Q.cancel)),dt=()=>Ye(Q.actions),$t=()=>Ye(Q.footer),Qe=()=>Ye(Q["timer-progress-bar"]),q=()=>Ye(Q.close),Z=`
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
`,ce=()=>{const x=C(ot().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((B,W)=>{const Ee=parseInt(B.getAttribute("tabindex")),lt=parseInt(W.getAttribute("tabindex"));return Ee>lt?1:Ee<lt?-1:0}),D=C(ot().querySelectorAll(Z)).filter(B=>B.getAttribute("tabindex")!=="-1");return g(x.concat(D)).filter(B=>Wt(B))},me=()=>!Se(document.body,Q["toast-shown"])&&!Se(document.body,Q["no-backdrop"]),Ce=()=>ot()&&Se(ot(),Q.toast),ze=()=>ot().hasAttribute("data-loading"),Ve={previousBodyPadding:null},ve=(x,D)=>{if(x.textContent="",D){const W=new DOMParser().parseFromString(D,"text/html");C(W.querySelector("head").childNodes).forEach(Ee=>{x.appendChild(Ee)}),C(W.querySelector("body").childNodes).forEach(Ee=>{x.appendChild(Ee)})}},Se=(x,D)=>{if(!D)return!1;const B=D.split(/\s+/);for(let W=0;W<B.length;W++)if(!x.classList.contains(B[W]))return!1;return!0},xe=(x,D)=>{C(x.classList).forEach(B=>{!Object.values(Q).includes(B)&&!Object.values(Xe).includes(B)&&!Object.values(D.showClass).includes(B)&&x.classList.remove(B)})},et=(x,D,B)=>{if(xe(x,D),D.customClass&&D.customClass[B]){if(typeof D.customClass[B]!="string"&&!D.customClass[B].forEach)return _("Invalid type of customClass.".concat(B,'! Expected string or iterable object, got "').concat(typeof D.customClass[B],'"'));Ze(x,D.customClass[B])}},We=(x,D)=>{if(!D)return null;switch(D){case"select":case"textarea":case"file":return x.querySelector(".".concat(Q.popup," > .").concat(Q[D]));case"checkbox":return x.querySelector(".".concat(Q.popup," > .").concat(Q.checkbox," input"));case"radio":return x.querySelector(".".concat(Q.popup," > .").concat(Q.radio," input:checked"))||x.querySelector(".".concat(Q.popup," > .").concat(Q.radio," input:first-child"));case"range":return x.querySelector(".".concat(Q.popup," > .").concat(Q.range," input"));default:return x.querySelector(".".concat(Q.popup," > .").concat(Q.input))}},qe=x=>{if(x.focus(),x.type!=="file"){const D=x.value;x.value="",x.value=D}},st=(x,D,B)=>{!x||!D||(typeof D=="string"&&(D=D.split(/\s+/).filter(Boolean)),D.forEach(W=>{Array.isArray(x)?x.forEach(Ee=>{B?Ee.classList.add(W):Ee.classList.remove(W)}):B?x.classList.add(W):x.classList.remove(W)}))},Ze=(x,D)=>{st(x,D,!0)},Tt=(x,D)=>{st(x,D,!1)},_t=(x,D)=>{const B=C(x.childNodes);for(let W=0;W<B.length;W++)if(Se(B[W],D))return B[W]},rn=(x,D,B)=>{B==="".concat(parseInt(B))&&(B=parseInt(B)),B||parseInt(B)===0?x.style[D]=typeof B=="number"?"".concat(B,"px"):B:x.style.removeProperty(D)},qt=function(x){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";x.style.display=D},wn=x=>{x.style.display="none"},Oi=(x,D,B,W)=>{const Ee=x.querySelector(D);Ee&&(Ee.style[B]=W)},$n=(x,D,B)=>{D?qt(x,B):wn(x)},Wt=x=>!!(x&&(x.offsetWidth||x.offsetHeight||x.getClientRects().length)),sn=()=>!Wt(Dt())&&!Wt(X())&&!Wt(Ue()),io=x=>x.scrollHeight>x.clientHeight,Li=x=>{const D=window.getComputedStyle(x),B=parseFloat(D.getPropertyValue("animation-duration")||"0"),W=parseFloat(D.getPropertyValue("transition-duration")||"0");return B>0||W>0},fa=function(x){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const B=Qe();Wt(B)&&(D&&(B.style.transition="none",B.style.width="100%"),setTimeout(()=>{B.style.transition="width ".concat(x/1e3,"s linear"),B.style.width="0%"},10))},vl=()=>{const x=Qe(),D=parseInt(window.getComputedStyle(x).width);x.style.removeProperty("transition"),x.style.width="100%";const B=parseInt(window.getComputedStyle(x).width),W=D/B*100;x.style.removeProperty("transition"),x.style.width="".concat(W,"%")},Rc=()=>typeof window>"u"||typeof document>"u",zc=100,kt={},Ru=()=>{kt.previousActiveElement&&kt.previousActiveElement.focus?(kt.previousActiveElement.focus(),kt.previousActiveElement=null):document.body&&document.body.focus()},zu=x=>new Promise(D=>{if(!x)return D();const B=window.scrollX,W=window.scrollY;kt.restoreFocusTimeout=setTimeout(()=>{Ru(),D()},zc),window.scrollTo(B,W)}),yo=`
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
`).replace(/(^|\n)\s*/g,""),ju=()=>{const x=Le();return x?(x.remove(),Tt([document.documentElement,document.body],[Q["no-backdrop"],Q["toast-shown"],Q["has-column"]]),!0):!1},Ho=()=>{kt.currentInstance.resetValidationMessage()},pa=()=>{const x=ot(),D=_t(x,Q.input),B=_t(x,Q.file),W=x.querySelector(".".concat(Q.range," input")),Ee=x.querySelector(".".concat(Q.range," output")),lt=_t(x,Q.select),Dn=x.querySelector(".".concat(Q.checkbox," input")),Rn=_t(x,Q.textarea);D.oninput=Ho,B.onchange=Ho,lt.onchange=Ho,Dn.onchange=Ho,Rn.oninput=Ho,W.oninput=()=>{Ho(),Ee.value=W.value},W.onchange=()=>{Ho(),W.nextSibling.value=W.value}},Fu=x=>typeof x=="string"?document.querySelector(x):x,$u=x=>{const D=ot();D.setAttribute("role",x.toast?"alert":"dialog"),D.setAttribute("aria-live",x.toast?"polite":"assertive"),x.toast||D.setAttribute("aria-modal","true")},yl=x=>{window.getComputedStyle(x).direction==="rtl"&&Ze(Le(),Q.rtl)},Vu=x=>{const D=ju();if(Rc()){v("SweetAlert2 requires document to initialize");return}const B=document.createElement("div");B.className=Q.container,D&&Ze(B,Q["no-transition"]),ve(B,yo);const W=Fu(x.target);W.appendChild(B),$u(x),yl(W),pa()},_s=(x,D)=>{x instanceof HTMLElement?D.appendChild(x):typeof x=="object"?Lr(x,D):x&&ve(D,x)},Lr=(x,D)=>{x.jquery?ma(D,x):ve(D,x.toString())},ma=(x,D)=>{if(x.textContent="",0 in D)for(let B=0;B in D;B++)x.appendChild(D[B].cloneNode(!0));else x.appendChild(D.cloneNode(!0))},ks=(()=>{if(Rc())return!1;const x=document.createElement("div"),D={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const B in D)if(Object.prototype.hasOwnProperty.call(D,B)&&typeof x.style[B]<"u")return D[B];return!1})(),Uu=()=>{const x=document.createElement("div");x.className=Q["scrollbar-measure"],document.body.appendChild(x);const D=x.getBoundingClientRect().width-x.clientWidth;return document.body.removeChild(x),D},Hu=(x,D)=>{const B=dt(),W=Ne();!D.showConfirmButton&&!D.showDenyButton&&!D.showCancelButton?wn(B):qt(B),et(B,D,"actions"),qu(B,W,D),ve(W,D.loaderHtml),et(W,D,"loader")};function qu(x,D,B){const W=Dt(),Ee=X(),lt=Ue();vs(W,"confirm",B),vs(Ee,"deny",B),vs(lt,"cancel",B),sr(W,Ee,lt,B),B.reverseButtons&&(B.toast?(x.insertBefore(lt,W),x.insertBefore(Ee,W)):(x.insertBefore(lt,D),x.insertBefore(Ee,D),x.insertBefore(W,D)))}function sr(x,D,B,W){if(!W.buttonsStyling)return Tt([x,D,B],Q.styled);Ze([x,D,B],Q.styled),W.confirmButtonColor&&(x.style.backgroundColor=W.confirmButtonColor,Ze(x,Q["default-outline"])),W.denyButtonColor&&(D.style.backgroundColor=W.denyButtonColor,Ze(D,Q["default-outline"])),W.cancelButtonColor&&(B.style.backgroundColor=W.cancelButtonColor,Ze(B,Q["default-outline"]))}function vs(x,D,B){$n(x,B["show".concat(m(D),"Button")],"inline-block"),ve(x,B["".concat(D,"ButtonText")]),x.setAttribute("aria-label",B["".concat(D,"ButtonAriaLabel")]),x.className=Q[D],et(x,B,"".concat(D,"Button")),Ze(x,B["".concat(D,"ButtonClass")])}function Al(x,D){typeof D=="string"?x.style.background=D:D||Ze([document.documentElement,document.body],Q["no-backdrop"])}function Wu(x,D){D in Q?Ze(x,Q[D]):(_('The "position" parameter is not valid, defaulting to "center"'),Ze(x,Q.center))}function Gu(x,D){if(D&&typeof D=="string"){const B="grow-".concat(D);B in Q&&Ze(x,Q[B])}}const ar=(x,D)=>{const B=Le();!B||(Al(B,D.backdrop),Wu(B,D.position),Gu(B,D.grow),et(B,D,"container"))};var Nt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Ku=["input","file","range","select","radio","checkbox","textarea"],Yu=(x,D)=>{const B=ot(),W=Nt.innerParams.get(x),Ee=!W||D.input!==W.input;Ku.forEach(lt=>{const Dn=Q[lt],Rn=_t(B,Dn);ba(lt,D.inputAttributes),Rn.className=Dn,Ee&&wn(Rn)}),D.input&&(Ee&&ga(D),Zu(D))},ga=x=>{if(!Vn[x.input])return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(x.input,'"'));const D=lr(x.input),B=Vn[x.input](D,x);qt(B),setTimeout(()=>{qe(B)})},Qu=x=>{for(let D=0;D<x.attributes.length;D++){const B=x.attributes[D].name;["type","value","style"].includes(B)||x.removeAttribute(B)}},ba=(x,D)=>{const B=We(ot(),x);if(!!B){Qu(B);for(const W in D)B.setAttribute(W,D[W])}},Zu=x=>{const D=lr(x.input);x.customClass&&Ze(D,x.customClass.input)},Cl=(x,D)=>{(!x.placeholder||D.inputPlaceholder)&&(x.placeholder=D.inputPlaceholder)},ti=(x,D,B)=>{if(B.inputLabel){x.id=Q.input;const W=document.createElement("label"),Ee=Q["input-label"];W.setAttribute("for",x.id),W.className=Ee,Ze(W,B.customClass.inputLabel),W.innerText=B.inputLabel,D.insertAdjacentElement("beforebegin",W)}},lr=x=>{const D=Q[x]?Q[x]:Q.input;return _t(ot(),D)},Vn={};Vn.text=Vn.email=Vn.password=Vn.number=Vn.tel=Vn.url=(x,D)=>(typeof D.inputValue=="string"||typeof D.inputValue=="number"?x.value=D.inputValue:ee(D.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof D.inputValue,'"')),ti(x,x,D),Cl(x,D),x.type=D.input,x),Vn.file=(x,D)=>(ti(x,x,D),Cl(x,D),x),Vn.range=(x,D)=>{const B=x.querySelector("input"),W=x.querySelector("output");return B.value=D.inputValue,B.type=D.input,W.value=D.inputValue,ti(B,x,D),x},Vn.select=(x,D)=>{if(x.textContent="",D.inputPlaceholder){const B=document.createElement("option");ve(B,D.inputPlaceholder),B.value="",B.disabled=!0,B.selected=!0,x.appendChild(B)}return ti(x,x,D),x},Vn.radio=x=>(x.textContent="",x),Vn.checkbox=(x,D)=>{const B=We(ot(),"checkbox");B.value="1",B.id=Q.checkbox,B.checked=Boolean(D.inputValue);const W=x.querySelector("span");return ve(W,D.inputPlaceholder),x},Vn.textarea=(x,D)=>{x.value=D.inputValue,Cl(x,D),ti(x,x,D);const B=W=>parseInt(window.getComputedStyle(W).marginLeft)+parseInt(window.getComputedStyle(W).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const W=parseInt(window.getComputedStyle(ot()).width),Ee=()=>{const lt=x.offsetWidth+B(x);lt>W?ot().style.width="".concat(lt,"px"):ot().style.width=null};new MutationObserver(Ee).observe(x,{attributes:!0,attributeFilter:["style"]})}}),x};const jc=(x,D)=>{const B=Fn();et(B,D,"htmlContainer"),D.html?(_s(D.html,B),qt(B,"block")):D.text?(B.textContent=D.text,qt(B,"block")):wn(B),Yu(x,D)},Ju=(x,D)=>{const B=$t();$n(B,D.footer),D.footer&&_s(D.footer,B),et(B,D,"footer")},Xu=(x,D)=>{const B=q();ve(B,D.closeButtonHtml),et(B,D,"closeButton"),$n(B,D.showCloseButton),B.setAttribute("aria-label",D.closeButtonAriaLabel)},eh=(x,D)=>{const B=Nt.innerParams.get(x),W=vt();if(B&&D.icon===B.icon){ys(W,D),Fc(W,D);return}if(!D.icon&&!D.iconHtml)return wn(W);if(D.icon&&Object.keys(Xe).indexOf(D.icon)===-1)return v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(D.icon,'"')),wn(W);qt(W),ys(W,D),Fc(W,D),Ze(W,D.showClass.icon)},Fc=(x,D)=>{for(const B in Xe)D.icon!==B&&Tt(x,Xe[B]);Ze(x,Xe[D.icon]),th(x,D),$c(),et(x,D,"icon")},$c=()=>{const x=ot(),D=window.getComputedStyle(x).getPropertyValue("background-color"),B=x.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let W=0;W<B.length;W++)B[W].style.backgroundColor=D},Vc=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,cr=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ys=(x,D)=>{x.textContent="",D.iconHtml?ve(x,xl(D.iconHtml)):D.icon==="success"?ve(x,Vc):D.icon==="error"?ve(x,cr):ve(x,xl({question:"?",warning:"!",info:"i"}[D.icon]))},th=(x,D)=>{if(!!D.iconColor){x.style.color=D.iconColor,x.style.borderColor=D.iconColor;for(const B of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Oi(x,B,"backgroundColor",D.iconColor);Oi(x,".swal2-success-ring","borderColor",D.iconColor)}},xl=x=>'<div class="'.concat(Q["icon-content"],'">').concat(x,"</div>"),dr=(x,D)=>{const B=cn();if(!D.imageUrl)return wn(B);qt(B,""),B.setAttribute("src",D.imageUrl),B.setAttribute("alt",D.imageAlt),rn(B,"width",D.imageWidth),rn(B,"height",D.imageHeight),B.className=Q.image,et(B,D,"image")},Uc=x=>{const D=document.createElement("li");return Ze(D,Q["progress-step"]),ve(D,x),D},nh=x=>{const D=document.createElement("li");return Ze(D,Q["progress-step-line"]),x.progressStepsDistance&&(D.style.width=x.progressStepsDistance),D},Hc=(x,D)=>{const B=Ln();if(!D.progressSteps||D.progressSteps.length===0)return wn(B);qt(B),B.textContent="",D.currentProgressStep>=D.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),D.progressSteps.forEach((W,Ee)=>{const lt=Uc(W);if(B.appendChild(lt),Ee===D.currentProgressStep&&Ze(lt,Q["active-progress-step"]),Ee!==D.progressSteps.length-1){const Dn=nh(D);B.appendChild(Dn)}})},qc=(x,D)=>{const B=no();$n(B,D.title||D.titleText,"block"),D.title&&_s(D.title,B),D.titleText&&(B.innerText=D.titleText),et(B,D,"title")},Ri=(x,D)=>{const B=Le(),W=ot();D.toast?(rn(B,"width",D.width),W.style.width="100%",W.insertBefore(Ne(),vt())):rn(W,"width",D.width),rn(W,"padding",D.padding),D.color&&(W.style.color=D.color),D.background&&(W.style.background=D.background),wn(fo()),wa(W,D)},wa=(x,D)=>{x.className="".concat(Q.popup," ").concat(Wt(x)?D.showClass.popup:""),D.toast?(Ze([document.documentElement,document.body],Q["toast-shown"]),Ze(x,Q.toast)):Ze(x,Q.modal),et(x,D,"popup"),typeof D.customClass=="string"&&Ze(x,D.customClass),D.icon&&Ze(x,Q["icon-".concat(D.icon)])},El=(x,D)=>{Ri(x,D),ar(x,D),Hc(x,D),eh(x,D),dr(x,D),qc(x,D),Xu(x,D),jc(x,D),Hu(x,D),Ju(x,D),typeof D.didRender=="function"&&D.didRender(ot())},Po=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ur=()=>{C(document.body.children).forEach(D=>{D===Le()||D.contains(Le())||(D.hasAttribute("aria-hidden")&&D.setAttribute("data-previous-aria-hidden",D.getAttribute("aria-hidden")),D.setAttribute("aria-hidden","true"))})},hr=()=>{C(document.body.children).forEach(D=>{D.hasAttribute("data-previous-aria-hidden")?(D.setAttribute("aria-hidden",D.getAttribute("data-previous-aria-hidden")),D.removeAttribute("data-previous-aria-hidden")):D.removeAttribute("aria-hidden")})},Rr=["swal-title","swal-html","swal-footer"],_a=x=>{const D=typeof x.template=="string"?document.querySelector(x.template):x.template;if(!D)return{};const B=D.content;return ih(B),Object.assign(oh(B),ka(B),fr(B),Wc(B),Dl(B),Gc(B,Rr))},oh=x=>{const D={};return C(x.querySelectorAll("swal-param")).forEach(B=>{pr(B,["name","value"]);const W=B.getAttribute("name"),Ee=B.getAttribute("value");typeof se[W]=="boolean"&&Ee==="false"&&(D[W]=!1),typeof se[W]=="object"&&(D[W]=JSON.parse(Ee))}),D},ka=x=>{const D={};return C(x.querySelectorAll("swal-button")).forEach(B=>{pr(B,["type","color","aria-label"]);const W=B.getAttribute("type");D["".concat(W,"ButtonText")]=B.innerHTML,D["show".concat(m(W),"Button")]=!0,B.hasAttribute("color")&&(D["".concat(W,"ButtonColor")]=B.getAttribute("color")),B.hasAttribute("aria-label")&&(D["".concat(W,"ButtonAriaLabel")]=B.getAttribute("aria-label"))}),D},fr=x=>{const D={},B=x.querySelector("swal-image");return B&&(pr(B,["src","width","height","alt"]),B.hasAttribute("src")&&(D.imageUrl=B.getAttribute("src")),B.hasAttribute("width")&&(D.imageWidth=B.getAttribute("width")),B.hasAttribute("height")&&(D.imageHeight=B.getAttribute("height")),B.hasAttribute("alt")&&(D.imageAlt=B.getAttribute("alt"))),D},Wc=x=>{const D={},B=x.querySelector("swal-icon");return B&&(pr(B,["type","color"]),B.hasAttribute("type")&&(D.icon=B.getAttribute("type")),B.hasAttribute("color")&&(D.iconColor=B.getAttribute("color")),D.iconHtml=B.innerHTML),D},Dl=x=>{const D={},B=x.querySelector("swal-input");B&&(pr(B,["type","label","placeholder","value"]),D.input=B.getAttribute("type")||"text",B.hasAttribute("label")&&(D.inputLabel=B.getAttribute("label")),B.hasAttribute("placeholder")&&(D.inputPlaceholder=B.getAttribute("placeholder")),B.hasAttribute("value")&&(D.inputValue=B.getAttribute("value")));const W=x.querySelectorAll("swal-input-option");return W.length&&(D.inputOptions={},C(W).forEach(Ee=>{pr(Ee,["value"]);const lt=Ee.getAttribute("value"),Dn=Ee.innerHTML;D.inputOptions[lt]=Dn})),D},Gc=(x,D)=>{const B={};for(const W in D){const Ee=D[W],lt=x.querySelector(Ee);lt&&(pr(lt,[]),B[Ee.replace(/^swal-/,"")]=lt.innerHTML.trim())}return B},ih=x=>{const D=Rr.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);C(x.children).forEach(B=>{const W=B.tagName.toLowerCase();D.indexOf(W)===-1&&_("Unrecognized element <".concat(W,">"))})},pr=(x,D)=>{C(x.attributes).forEach(B=>{D.indexOf(B.name)===-1&&_(['Unrecognized attribute "'.concat(B.name,'" on <').concat(x.tagName.toLowerCase(),">."),"".concat(D.length?"Allowed attributes are: ".concat(D.join(", ")):"To set the value, use HTML within the element.")])})};var As={email:(x,D)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(x)?Promise.resolve():Promise.resolve(D||"Invalid email address"),url:(x,D)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(x)?Promise.resolve():Promise.resolve(D||"Invalid URL")};function rh(x){x.inputValidator||Object.keys(As).forEach(D=>{x.input===D&&(x.inputValidator=As[D])})}function Kc(x){(!x.target||typeof x.target=="string"&&!document.querySelector(x.target)||typeof x.target!="string"&&!x.target.appendChild)&&(_('Target parameter is not valid, defaulting to "body"'),x.target="body")}function Yc(x){rh(x),x.showLoaderOnConfirm&&!x.preConfirm&&_(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Kc(x),typeof x.title=="string"&&(x.title=x.title.split(`
`).join("<br />")),Vu(x)}class Qc{constructor(D,B){this.callback=D,this.remaining=B,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(D){const B=this.running;return B&&this.stop(),this.remaining+=D,B&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const mr=()=>{Ve.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Ve.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Ve.previousBodyPadding+Uu(),"px"))},sh=()=>{Ve.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(Ve.previousBodyPadding,"px"),Ve.previousBodyPadding=null)},Tl=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Se(document.body,Q.iosfix)){const D=document.body.scrollTop;document.body.style.top="".concat(D*-1,"px"),Ze(document.body,Q.iosfix),_n(),Zc()}},Zc=()=>{const x=navigator.userAgent,D=!!x.match(/iPad/i)||!!x.match(/iPhone/i),B=!!x.match(/WebKit/i);D&&B&&!x.match(/CriOS/i)&&ot().scrollHeight>window.innerHeight-44&&(Le().style.paddingBottom="".concat(44,"px"))},_n=()=>{const x=Le();let D;x.ontouchstart=B=>{D=ah(B)},x.ontouchmove=B=>{D&&(B.preventDefault(),B.stopPropagation())}},ah=x=>{const D=x.target,B=Le();return dn(x)||un(x)?!1:D===B||!io(B)&&D.tagName!=="INPUT"&&D.tagName!=="TEXTAREA"&&!(io(Fn())&&Fn().contains(D))},dn=x=>x.touches&&x.touches.length&&x.touches[0].touchType==="stylus",un=x=>x.touches&&x.touches.length>1,Cs=()=>{if(Se(document.body,Q.iosfix)){const x=parseInt(document.body.style.top,10);Tt(document.body,Q.iosfix),document.body.style.top="",document.body.scrollTop=x*-1}},va=10,zr=x=>{const D=Le(),B=ot();typeof x.willOpen=="function"&&x.willOpen(B);const Ee=window.getComputedStyle(document.body).overflowY;Ml(D,B,x),setTimeout(()=>{Il(D,B)},va),me()&&(lh(D,x.scrollbarPadding,Ee),ur()),!Ce()&&!kt.previousActiveElement&&(kt.previousActiveElement=document.activeElement),typeof x.didOpen=="function"&&setTimeout(()=>x.didOpen(B)),Tt(D,Q["no-transition"])},Sl=x=>{const D=ot();if(x.target!==D)return;const B=Le();D.removeEventListener(ks,Sl),B.style.overflowY="auto"},Il=(x,D)=>{ks&&Li(D)?(x.style.overflowY="hidden",D.addEventListener(ks,Sl)):x.style.overflowY="auto"},lh=(x,D,B)=>{Tl(),D&&B!=="hidden"&&mr(),setTimeout(()=>{x.scrollTop=0})},Ml=(x,D,B)=>{Ze(x,B.showClass.backdrop),D.style.setProperty("opacity","0","important"),qt(D,"grid"),setTimeout(()=>{Ze(D,B.showClass.popup),D.style.removeProperty("opacity")},va),Ze([document.documentElement,document.body],Q.shown),B.heightAuto&&B.backdrop&&!B.toast&&Ze([document.documentElement,document.body],Q["height-auto"])},jr=x=>{let D=ot();D||new ki,D=ot();const B=Ne();Ce()?wn(vt()):Un(D,x),qt(B),D.setAttribute("data-loading",!0),D.setAttribute("aria-busy",!0),D.focus()},Un=(x,D)=>{const B=dt(),W=Ne();!D&&Wt(Dt())&&(D=Dt()),qt(B),D&&(wn(D),W.setAttribute("data-button-to-replace",D.className)),W.parentNode.insertBefore(W,D),Ze([x,B],Q.loading)},Pl=(x,D)=>{D.input==="select"||D.input==="radio"?Xc(x,D):["text","email","number","tel","textarea"].includes(D.input)&&(M(D.inputValue)||ee(D.inputValue))&&(jr(Dt()),ed(x,D))},gr=(x,D)=>{const B=x.getInput();if(!B)return null;switch(D.input){case"checkbox":return Jc(B);case"radio":return Fr(B);case"file":return Ao(B);default:return D.inputAutoTrim?B.value.trim():B.value}},Jc=x=>x.checked?1:0,Fr=x=>x.checked?x.value:null,Ao=x=>x.files.length?x.getAttribute("multiple")!==null?x.files:x.files[0]:null,Xc=(x,D)=>{const B=ot(),W=Ee=>td[D.input](B,ya(Ee),D);M(D.inputOptions)||ee(D.inputOptions)?(jr(Dt()),F(D.inputOptions).then(Ee=>{x.hideLoading(),W(Ee)})):typeof D.inputOptions=="object"?W(D.inputOptions):v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof D.inputOptions))},ed=(x,D)=>{const B=x.getInput();wn(B),F(D.inputValue).then(W=>{B.value=D.input==="number"?parseFloat(W)||0:"".concat(W),qt(B),B.focus(),x.hideLoading()}).catch(W=>{v("Error in inputValue promise: ".concat(W)),B.value="",qt(B),B.focus(),x.hideLoading()})},td={select:(x,D,B)=>{const W=_t(x,Q.select),Ee=(lt,Dn,Rn)=>{const Jn=document.createElement("option");Jn.value=Rn,ve(Jn,Dn),Jn.selected=zi(Rn,B.inputValue),lt.appendChild(Jn)};D.forEach(lt=>{const Dn=lt[0],Rn=lt[1];if(Array.isArray(Rn)){const Jn=document.createElement("optgroup");Jn.label=Dn,Jn.disabled=!1,W.appendChild(Jn),Rn.forEach(Hr=>Ee(Jn,Hr[1],Hr[0]))}else Ee(W,Rn,Dn)}),W.focus()},radio:(x,D,B)=>{const W=_t(x,Q.radio);D.forEach(lt=>{const Dn=lt[0],Rn=lt[1],Jn=document.createElement("input"),Hr=document.createElement("label");Jn.type="radio",Jn.name=Q.radio,Jn.value=Dn,zi(Dn,B.inputValue)&&(Jn.checked=!0);const Na=document.createElement("span");ve(Na,Rn),Na.className=Q.label,Hr.appendChild(Jn),Hr.appendChild(Na),W.appendChild(Hr)});const Ee=W.querySelectorAll("input");Ee.length&&Ee[0].focus()}},ya=x=>{const D=[];return typeof Map<"u"&&x instanceof Map?x.forEach((B,W)=>{let Ee=B;typeof Ee=="object"&&(Ee=ya(Ee)),D.push([W,Ee])}):Object.keys(x).forEach(B=>{let W=x[B];typeof W=="object"&&(W=ya(W)),D.push([B,W])}),D},zi=(x,D)=>D&&D.toString()===x.toString(),nd=x=>{const D=Nt.innerParams.get(x);x.disableButtons(),D.input?xo(x,"confirm"):$r(x,!0)},Co=x=>{const D=Nt.innerParams.get(x);x.disableButtons(),D.returnInputValueOnDeny?xo(x,"deny"):xs(x,!1)},od=(x,D)=>{x.disableButtons(),D(Po.cancel)},xo=(x,D)=>{const B=Nt.innerParams.get(x);if(!B.input)return v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(m(D)));const W=gr(x,B);B.inputValidator?id(x,W,D):x.getInput().checkValidity()?D==="deny"?xs(x,W):$r(x,W):(x.enableButtons(),x.showValidationMessage(B.validationMessage))},id=(x,D,B)=>{const W=Nt.innerParams.get(x);x.disableInput(),Promise.resolve().then(()=>F(W.inputValidator(D,W.validationMessage))).then(lt=>{x.enableButtons(),x.enableInput(),lt?x.showValidationMessage(lt):B==="deny"?xs(x,D):$r(x,D)})},xs=(x,D)=>{const B=Nt.innerParams.get(x||void 0);B.showLoaderOnDeny&&jr(X()),B.preDeny?(Nt.awaitingPromise.set(x||void 0,!0),Promise.resolve().then(()=>F(B.preDeny(D,B.validationMessage))).then(Ee=>{Ee===!1?x.hideLoading():x.closePopup({isDenied:!0,value:typeof Ee>"u"?D:Ee})}).catch(Ee=>Es(x||void 0,Ee))):x.closePopup({isDenied:!0,value:D})},di=(x,D)=>{x.closePopup({isConfirmed:!0,value:D})},Es=(x,D)=>{x.rejectPromise(D)},$r=(x,D)=>{const B=Nt.innerParams.get(x||void 0);B.showLoaderOnConfirm&&jr(),B.preConfirm?(x.resetValidationMessage(),Nt.awaitingPromise.set(x||void 0,!0),Promise.resolve().then(()=>F(B.preConfirm(D,B.validationMessage))).then(Ee=>{Wt(fo())||Ee===!1?x.hideLoading():di(x,typeof Ee>"u"?D:Ee)}).catch(Ee=>Es(x||void 0,Ee))):di(x,D)},En=(x,D,B)=>{Nt.innerParams.get(x).toast?_i(x,D,B):(Ca(D),rd(D),ch(x,D,B))},_i=(x,D,B)=>{D.popup.onclick=()=>{const W=Nt.innerParams.get(x);W&&(Ds(W)||W.timer||W.input)||B(Po.close)}},Ds=x=>x.showConfirmButton||x.showDenyButton||x.showCancelButton||x.showCloseButton;let Aa=!1;const Ca=x=>{x.popup.onmousedown=()=>{x.container.onmouseup=function(D){x.container.onmouseup=void 0,D.target===x.container&&(Aa=!0)}}},rd=x=>{x.container.onmousedown=()=>{x.popup.onmouseup=function(D){x.popup.onmouseup=void 0,(D.target===x.popup||x.popup.contains(D.target))&&(Aa=!0)}}},ch=(x,D,B)=>{D.container.onclick=W=>{const Ee=Nt.innerParams.get(x);if(Aa){Aa=!1;return}W.target===D.container&&N(Ee.allowOutsideClick)&&B(Po.backdrop)}},sd=()=>Wt(ot()),Ts=()=>Dt()&&Dt().click(),xa=()=>X()&&X().click(),ji=()=>Ue()&&Ue().click(),Nl=(x,D,B,W)=>{D.keydownTarget&&D.keydownHandlerAdded&&(D.keydownTarget.removeEventListener("keydown",D.keydownHandler,{capture:D.keydownListenerCapture}),D.keydownHandlerAdded=!1),B.toast||(D.keydownHandler=Ee=>Da(x,Ee,W),D.keydownTarget=B.keydownListenerCapture?window:ot(),D.keydownListenerCapture=B.keydownListenerCapture,D.keydownTarget.addEventListener("keydown",D.keydownHandler,{capture:D.keydownListenerCapture}),D.keydownHandlerAdded=!0)},Vr=(x,D,B)=>{const W=ce();if(W.length)return D=D+B,D===W.length?D=0:D===-1&&(D=W.length-1),W[D].focus();ot().focus()},Ss=["ArrowRight","ArrowDown"],Ea=["ArrowLeft","ArrowUp"],Da=(x,D,B)=>{const W=Nt.innerParams.get(x);!W||(W.stopKeydownPropagation&&D.stopPropagation(),D.key==="Enter"?Bl(x,D,W):D.key==="Tab"?ad(D,W):[...Ss,...Ea].includes(D.key)?Ta(D.key):D.key==="Escape"&&Ol(D,W,B))},Bl=(x,D,B)=>{if(!(!N(B.allowEnterKey)||D.isComposing)&&D.target&&x.getInput()&&D.target.outerHTML===x.getInput().outerHTML){if(["textarea","file"].includes(B.input))return;Ts(),D.preventDefault()}},ad=(x,D)=>{const B=x.target,W=ce();let Ee=-1;for(let lt=0;lt<W.length;lt++)if(B===W[lt]){Ee=lt;break}x.shiftKey?Vr(D,Ee,-1):Vr(D,Ee,1),x.stopPropagation(),x.preventDefault()},Ta=x=>{const D=Dt(),B=X(),W=Ue();if(![D,B,W].includes(document.activeElement))return;const Ee=Ss.includes(x)?"nextElementSibling":"previousElementSibling",lt=document.activeElement[Ee];lt instanceof HTMLElement&&lt.focus()},Ol=(x,D,B)=>{N(D.allowEscapeKey)&&(x.preventDefault(),B(Po.esc))},dh=x=>typeof x=="object"&&x.jquery,Ll=x=>x instanceof Element||dh(x),No=x=>{const D={};return typeof x[0]=="object"&&!Ll(x[0])?Object.assign(D,x[0]):["title","html","icon"].forEach((B,W)=>{const Ee=x[W];typeof Ee=="string"||Ll(Ee)?D[B]=Ee:Ee!==void 0&&v("Unexpected type of ".concat(B,'! Expected "string" or "Element", got ').concat(typeof Ee))}),D};function Rl(){const x=this;for(var D=arguments.length,B=new Array(D),W=0;W<D;W++)B[W]=arguments[W];return new x(...B)}function ni(x){class D extends this{_main(W,Ee){return super._main(W,Object.assign({},x,Ee))}}return D}const Ur=()=>kt.timeout&&kt.timeout.getTimerLeft(),zl=()=>{if(kt.timeout)return vl(),kt.timeout.stop()},ld=()=>{if(kt.timeout){const x=kt.timeout.start();return fa(x),x}},Sa=()=>{const x=kt.timeout;return x&&(x.running?zl():ld())},jl=x=>{if(kt.timeout){const D=kt.timeout.increase(x);return fa(D,!0),D}},uh=()=>kt.timeout&&kt.timeout.isRunning();let cd=!1;const Fi={};function dd(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Fi[x]=this,cd||(document.body.addEventListener("click",ud),cd=!0)}const ud=x=>{for(let D=x.target;D&&D!==document;D=D.parentNode)for(const B in Fi){const W=D.getAttribute(B);if(W){Fi[B].fire({template:W});return}}};var Fl=Object.freeze({isValidParameter:ie,isUpdatableParameter:ke,isDeprecatedParameter:U,argsToParams:No,isVisible:sd,clickConfirm:Ts,clickDeny:xa,clickCancel:ji,getContainer:Le,getPopup:ot,getTitle:no,getHtmlContainer:Fn,getImage:cn,getIcon:vt,getInputLabel:Te,getCloseButton:q,getActions:dt,getConfirmButton:Dt,getDenyButton:X,getCancelButton:Ue,getLoader:Ne,getFooter:$t,getTimerProgressBar:Qe,getFocusableElements:ce,getValidationMessage:fo,isLoading:ze,fire:Rl,mixin:ni,showLoading:jr,enableLoading:jr,getTimerLeft:Ur,stopTimer:zl,resumeTimer:ld,toggleTimer:Sa,increaseTimer:jl,isTimerRunning:uh,bindClickHandler:dd});function Ia(){const x=Nt.innerParams.get(this);if(!x)return;const D=Nt.domCache.get(this);wn(D.loader),Ce()?x.icon&&qt(vt()):$i(D),Tt([D.popup,D.actions],Q.loading),D.popup.removeAttribute("aria-busy"),D.popup.removeAttribute("data-loading"),D.confirmButton.disabled=!1,D.denyButton.disabled=!1,D.cancelButton.disabled=!1}const $i=x=>{const D=x.popup.getElementsByClassName(x.loader.getAttribute("data-button-to-replace"));D.length?qt(D[0],"inline-block"):sn()&&wn(x.actions)};function Is(x){const D=Nt.innerParams.get(x||this),B=Nt.domCache.get(x||this);return B?We(B.popup,D.input):null}var Ms={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function $l(x,D,B,W){Ce()?Ht(x,W):(zu(B).then(()=>Ht(x,W)),kt.keydownTarget.removeEventListener("keydown",kt.keydownHandler,{capture:kt.keydownListenerCapture}),kt.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(D.setAttribute("style","display:none !important"),D.removeAttribute("class"),D.innerHTML=""):D.remove(),me()&&(sh(),Cs(),hr()),hh()}function hh(){Tt([document.documentElement,document.body],[Q.shown,Q["height-auto"],Q["no-backdrop"],Q["toast-shown"]])}function ui(x){x=md(x);const D=Ms.swalPromiseResolve.get(this),B=hd(this);this.isAwaitingPromise()?x.isDismissed||(pd(this),D(x)):B&&D(x)}function oi(){return!!Nt.awaitingPromise.get(this)}const hd=x=>{const D=ot();if(!D)return!1;const B=Nt.innerParams.get(x);if(!B||Se(D,B.hideClass.popup))return!1;Tt(D,B.showClass.popup),Ze(D,B.hideClass.popup);const W=Le();return Tt(W,B.showClass.backdrop),Ze(W,B.hideClass.backdrop),gd(x,D,B),!0};function fd(x){const D=Ms.swalPromiseReject.get(this);pd(this),D&&D(x)}const pd=x=>{x.isAwaitingPromise()&&(Nt.awaitingPromise.delete(x),Nt.innerParams.get(x)||x._destroy())},md=x=>typeof x>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},x),gd=(x,D,B)=>{const W=Le(),Ee=ks&&Li(D);typeof B.willClose=="function"&&B.willClose(D),Ee?bd(x,D,W,B.returnFocus,B.didClose):$l(x,W,B.returnFocus,B.didClose)},bd=(x,D,B,W,Ee)=>{kt.swalCloseEventFinishedCallback=$l.bind(null,x,B,W,Ee),D.addEventListener(ks,function(lt){lt.target===D&&(kt.swalCloseEventFinishedCallback(),delete kt.swalCloseEventFinishedCallback)})},Ht=(x,D)=>{setTimeout(()=>{typeof D=="function"&&D.bind(x.params)(),x._destroy()})};function ne(x,D,B){const W=Nt.domCache.get(x);D.forEach(Ee=>{W[Ee].disabled=B})}function ge(x,D){if(!x)return!1;if(x.type==="radio"){const W=x.parentNode.parentNode.querySelectorAll("input");for(let Ee=0;Ee<W.length;Ee++)W[Ee].disabled=D}else x.disabled=D}function de(){ne(this,["confirmButton","denyButton","cancelButton"],!1)}function it(){ne(this,["confirmButton","denyButton","cancelButton"],!0)}function yt(){return ge(this.getInput(),!1)}function Gt(){return ge(this.getInput(),!0)}function pn(x){const D=Nt.domCache.get(this),B=Nt.innerParams.get(this);ve(D.validationMessage,x),D.validationMessage.className=Q["validation-message"],B.customClass&&B.customClass.validationMessage&&Ze(D.validationMessage,B.customClass.validationMessage),qt(D.validationMessage);const W=this.getInput();W&&(W.setAttribute("aria-invalid",!0),W.setAttribute("aria-describedby",Q["validation-message"]),qe(W),Ze(W,Q.inputerror))}function Yt(){const x=Nt.domCache.get(this);x.validationMessage&&wn(x.validationMessage);const D=this.getInput();D&&(D.removeAttribute("aria-invalid"),D.removeAttribute("aria-describedby"),Tt(D,Q.inputerror))}function Ma(){return Nt.domCache.get(this).progressSteps}function br(x){const D=ot(),B=Nt.innerParams.get(this);if(!D||Se(D,B.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const W=qo(x),Ee=Object.assign({},B,W);El(this,Ee),Nt.innerParams.set(this,Ee),Object.defineProperties(this,{params:{value:Object.assign({},this.params,x),writable:!1,enumerable:!0}})}const qo=x=>{const D={};return Object.keys(x).forEach(B=>{ke(B)?D[B]=x[B]:_('Invalid parameter to update: "'.concat(B,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),D};function Ps(){const x=Nt.domCache.get(this),D=Nt.innerParams.get(this);if(!D){Ct(this);return}x.popup&&kt.swalCloseEventFinishedCallback&&(kt.swalCloseEventFinishedCallback(),delete kt.swalCloseEventFinishedCallback),kt.deferDisposalTimer&&(clearTimeout(kt.deferDisposalTimer),delete kt.deferDisposalTimer),typeof D.didDestroy=="function"&&D.didDestroy(),Vl(this)}const Vl=x=>{Ct(x),delete x.params,delete kt.keydownHandler,delete kt.keydownTarget,delete kt.currentInstance},Ct=x=>{x.isAwaitingPromise()?(wr(Nt,x),Nt.awaitingPromise.set(x,!0)):(wr(Ms,x),wr(Nt,x))},wr=(x,D)=>{for(const B in x)x[B].delete(D)};var mn=Object.freeze({hideLoading:Ia,disableLoading:Ia,getInput:Is,close:ui,isAwaitingPromise:oi,rejectPromise:fd,closePopup:ui,closeModal:ui,closeToast:ui,enableButtons:de,disableButtons:it,enableInput:yt,disableInput:Gt,showValidationMessage:pn,resetValidationMessage:Yt,getProgressSteps:Ma,update:br,_destroy:Ps});let Lt;class _r{constructor(){if(typeof window>"u")return;Lt=this;for(var D=arguments.length,B=new Array(D),W=0;W<D;W++)B[W]=arguments[W];const Ee=Object.freeze(this.constructor.argsToParams(B));Object.defineProperties(this,{params:{value:Ee,writable:!1,enumerable:!0,configurable:!0}});const lt=this._main(this.params);Nt.promise.set(this,lt)}_main(D){let B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Me(Object.assign({},B,D)),kt.currentInstance&&(kt.currentInstance._destroy(),me()&&hr()),kt.currentInstance=this;const W=kn(D,B);Yc(W),Object.freeze(W),kt.timeout&&(kt.timeout.stop(),delete kt.timeout),clearTimeout(kt.restoreFocusTimeout);const Ee=Pa(this);return El(this,W),Nt.innerParams.set(this,W),Ul(this,Ee,W)}then(D){return Nt.promise.get(this).then(D)}finally(D){return Nt.promise.get(this).finally(D)}}const Ul=(x,D,B)=>new Promise((W,Ee)=>{const lt=Dn=>{x.closePopup({isDismissed:!0,dismiss:Dn})};Ms.swalPromiseResolve.set(x,W),Ms.swalPromiseReject.set(x,Ee),D.confirmButton.onclick=()=>nd(x),D.denyButton.onclick=()=>Co(x),D.cancelButton.onclick=()=>od(x,lt),D.closeButton.onclick=()=>lt(Po.close),En(x,D,lt),Nl(x,kt,B,lt),Pl(x,B),zr(B),wd(kt,B,lt),_d(D,B),setTimeout(()=>{D.container.scrollTop=0})}),kn=(x,D)=>{const B=_a(x),W=Object.assign({},se,D,B,x);return W.showClass=Object.assign({},se.showClass,W.showClass),W.hideClass=Object.assign({},se.hideClass,W.hideClass),W},Pa=x=>{const D={popup:ot(),container:Le(),actions:dt(),confirmButton:Dt(),denyButton:X(),cancelButton:Ue(),loader:Ne(),closeButton:q(),validationMessage:fo(),progressSteps:Ln()};return Nt.domCache.set(x,D),D},wd=(x,D,B)=>{const W=Qe();wn(W),D.timer&&(x.timeout=new Qc(()=>{B("timer"),delete x.timeout},D.timer),D.timerProgressBar&&(qt(W),et(W,D,"timerProgressBar"),setTimeout(()=>{x.timeout&&x.timeout.running&&fa(D.timer)})))},_d=(x,D)=>{if(!D.toast){if(!N(D.allowEnterKey))return Vi();an(x,D)||Vr(D,-1,1)}},an=(x,D)=>D.focusDeny&&Wt(x.denyButton)?(x.denyButton.focus(),!0):D.focusCancel&&Wt(x.cancelButton)?(x.cancelButton.focus(),!0):D.focusConfirm&&Wt(x.confirmButton)?(x.confirmButton.focus(),!0):!1,Vi=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(_r.prototype,mn),Object.assign(_r,Fl),Object.keys(mn).forEach(x=>{_r[x]=function(){if(Lt)return Lt[x](...arguments)}}),_r.DismissReason=Po,_r.version="11.4.0";const ki=_r;return ki.default=ki,ki}),typeof cl<"u"&&cl.Sweetalert2&&(cl.swal=cl.sweetAlert=cl.Swal=cl.SweetAlert=cl.Sweetalert2)})(YE);var xb=YE.exports;class JY{static install(l,h={}){var g;const m=xb.mixin(h),C=function(..._){return m.fire.call(m,..._)};Object.assign(C,xb),Object.keys(xb).filter(_=>typeof xb[_]=="function").forEach(_=>{C[_]=m[_].bind(m)}),((g=l.config)==null?void 0:g.globalProperties)&&!l.config.globalProperties.$swal?(l.config.globalProperties.$swal=C,l.provide("$swal",C)):Object.prototype.hasOwnProperty.call(l,"$swal")||(l.prototype.$swal=C,l.swal=C)}}var Hv={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(r,l){(function(){var h,g="4.17.21",m=200,C="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",_="Expected a function",v="Invalid `variable` option passed into `_.template`",y="__lodash_hash_undefined__",S=500,P="__lodash_placeholder__",N=1,M=2,F=4,ee=1,se=2,we=1,te=2,Y=4,ie=8,ke=16,U=32,Pe=64,_e=128,ue=256,Me=512,Fe=30,Ge="...",Q=800,Xe=16,Le=1,Ft=2,Ye=3,ot=1/0,vt=9007199254740991,no=17976931348623157e292,Fn=0/0,cn=4294967295,Ln=cn-1,fo=cn>>>1,Dt=[["ary",_e],["bind",we],["bindKey",te],["curry",ie],["curryRight",ke],["flip",Me],["partial",U],["partialRight",Pe],["rearg",ue]],X="[object Arguments]",Te="[object Array]",Ne="[object AsyncFunction]",Ue="[object Boolean]",dt="[object Date]",$t="[object DOMException]",Qe="[object Error]",q="[object Function]",Z="[object GeneratorFunction]",ce="[object Map]",me="[object Number]",Ce="[object Null]",ze="[object Object]",Ve="[object Promise]",ve="[object Proxy]",Se="[object RegExp]",xe="[object Set]",et="[object String]",We="[object Symbol]",qe="[object Undefined]",st="[object WeakMap]",Ze="[object WeakSet]",Tt="[object ArrayBuffer]",_t="[object DataView]",rn="[object Float32Array]",qt="[object Float64Array]",wn="[object Int8Array]",Oi="[object Int16Array]",$n="[object Int32Array]",Wt="[object Uint8Array]",sn="[object Uint8ClampedArray]",io="[object Uint16Array]",Li="[object Uint32Array]",fa=/\b__p \+= '';/g,vl=/\b(__p \+=) '' \+/g,Rc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zc=/&(?:amp|lt|gt|quot|#39);/g,kt=/[&<>"']/g,Ru=RegExp(zc.source),zu=RegExp(kt.source),yo=/<%-([\s\S]+?)%>/g,ju=/<%([\s\S]+?)%>/g,Ho=/<%=([\s\S]+?)%>/g,pa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fu=/^\w*$/,$u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yl=/[\\^$.*+?()[\]{}|]/g,Vu=RegExp(yl.source),_s=/^\s+/,Lr=/\s/,ma=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ks=/\{\n\/\* \[wrapped with (.+)\] \*/,Uu=/,? & /,Hu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qu=/[()=,{}\[\]\/\s]/,sr=/\\(\\)?/g,vs=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Al=/\w*$/,Wu=/^[-+]0x[0-9a-f]+$/i,Gu=/^0b[01]+$/i,ar=/^\[object .+?Constructor\]$/,Nt=/^0o[0-7]+$/i,Ku=/^(?:0|[1-9]\d*)$/,Yu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ga=/($^)/,Qu=/['\n\r\u2028\u2029\\]/g,ba="\\ud800-\\udfff",Zu="\\u0300-\\u036f",Cl="\\ufe20-\\ufe2f",ti="\\u20d0-\\u20ff",lr=Zu+Cl+ti,Vn="\\u2700-\\u27bf",jc="a-z\\xdf-\\xf6\\xf8-\\xff",Ju="\\xac\\xb1\\xd7\\xf7",Xu="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",eh="\\u2000-\\u206f",Fc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$c="A-Z\\xc0-\\xd6\\xd8-\\xde",Vc="\\ufe0e\\ufe0f",cr=Ju+Xu+eh+Fc,ys="['\u2019]",th="["+ba+"]",xl="["+cr+"]",dr="["+lr+"]",Uc="\\d+",nh="["+Vn+"]",Hc="["+jc+"]",qc="[^"+ba+cr+Uc+Vn+jc+$c+"]",Ri="\\ud83c[\\udffb-\\udfff]",wa="(?:"+dr+"|"+Ri+")",El="[^"+ba+"]",Po="(?:\\ud83c[\\udde6-\\uddff]){2}",ur="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="["+$c+"]",Rr="\\u200d",_a="(?:"+Hc+"|"+qc+")",oh="(?:"+hr+"|"+qc+")",ka="(?:"+ys+"(?:d|ll|m|re|s|t|ve))?",fr="(?:"+ys+"(?:D|LL|M|RE|S|T|VE))?",Wc=wa+"?",Dl="["+Vc+"]?",Gc="(?:"+Rr+"(?:"+[El,Po,ur].join("|")+")"+Dl+Wc+")*",ih="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",As=Dl+Wc+Gc,rh="(?:"+[nh,Po,ur].join("|")+")"+As,Kc="(?:"+[El+dr+"?",dr,Po,ur,th].join("|")+")",Yc=RegExp(ys,"g"),Qc=RegExp(dr,"g"),mr=RegExp(Ri+"(?="+Ri+")|"+Kc+As,"g"),sh=RegExp([hr+"?"+Hc+"+"+ka+"(?="+[xl,hr,"$"].join("|")+")",oh+"+"+fr+"(?="+[xl,hr+_a,"$"].join("|")+")",hr+"?"+_a+"+"+ka,hr+"+"+fr,pr,ih,Uc,rh].join("|"),"g"),Tl=RegExp("["+Rr+ba+lr+Vc+"]"),Zc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_n=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ah=-1,dn={};dn[rn]=dn[qt]=dn[wn]=dn[Oi]=dn[$n]=dn[Wt]=dn[sn]=dn[io]=dn[Li]=!0,dn[X]=dn[Te]=dn[Tt]=dn[Ue]=dn[_t]=dn[dt]=dn[Qe]=dn[q]=dn[ce]=dn[me]=dn[ze]=dn[Se]=dn[xe]=dn[et]=dn[st]=!1;var un={};un[X]=un[Te]=un[Tt]=un[_t]=un[Ue]=un[dt]=un[rn]=un[qt]=un[wn]=un[Oi]=un[$n]=un[ce]=un[me]=un[ze]=un[Se]=un[xe]=un[et]=un[We]=un[Wt]=un[sn]=un[io]=un[Li]=!0,un[Qe]=un[q]=un[st]=!1;var Cs={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},va={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Il=parseFloat,lh=parseInt,Ml=typeof mi=="object"&&mi&&mi.Object===Object&&mi,jr=typeof self=="object"&&self&&self.Object===Object&&self,Un=Ml||jr||Function("return this")(),Pl=l&&!l.nodeType&&l,gr=Pl&&!0&&r&&!r.nodeType&&r,Jc=gr&&gr.exports===Pl,Fr=Jc&&Ml.process,Ao=function(){try{var ne=gr&&gr.require&&gr.require("util").types;return ne||Fr&&Fr.binding&&Fr.binding("util")}catch{}}(),Xc=Ao&&Ao.isArrayBuffer,ed=Ao&&Ao.isDate,td=Ao&&Ao.isMap,ya=Ao&&Ao.isRegExp,zi=Ao&&Ao.isSet,nd=Ao&&Ao.isTypedArray;function Co(ne,ge,de){switch(de.length){case 0:return ne.call(ge);case 1:return ne.call(ge,de[0]);case 2:return ne.call(ge,de[0],de[1]);case 3:return ne.call(ge,de[0],de[1],de[2])}return ne.apply(ge,de)}function od(ne,ge,de,it){for(var yt=-1,Gt=ne==null?0:ne.length;++yt<Gt;){var pn=ne[yt];ge(it,pn,de(pn),ne)}return it}function xo(ne,ge){for(var de=-1,it=ne==null?0:ne.length;++de<it&&ge(ne[de],de,ne)!==!1;);return ne}function id(ne,ge){for(var de=ne==null?0:ne.length;de--&&ge(ne[de],de,ne)!==!1;);return ne}function xs(ne,ge){for(var de=-1,it=ne==null?0:ne.length;++de<it;)if(!ge(ne[de],de,ne))return!1;return!0}function di(ne,ge){for(var de=-1,it=ne==null?0:ne.length,yt=0,Gt=[];++de<it;){var pn=ne[de];ge(pn,de,ne)&&(Gt[yt++]=pn)}return Gt}function Es(ne,ge){var de=ne==null?0:ne.length;return!!de&&ji(ne,ge,0)>-1}function $r(ne,ge,de){for(var it=-1,yt=ne==null?0:ne.length;++it<yt;)if(de(ge,ne[it]))return!0;return!1}function En(ne,ge){for(var de=-1,it=ne==null?0:ne.length,yt=Array(it);++de<it;)yt[de]=ge(ne[de],de,ne);return yt}function _i(ne,ge){for(var de=-1,it=ge.length,yt=ne.length;++de<it;)ne[yt+de]=ge[de];return ne}function Ds(ne,ge,de,it){var yt=-1,Gt=ne==null?0:ne.length;for(it&&Gt&&(de=ne[++yt]);++yt<Gt;)de=ge(de,ne[yt],yt,ne);return de}function Aa(ne,ge,de,it){var yt=ne==null?0:ne.length;for(it&&yt&&(de=ne[--yt]);yt--;)de=ge(de,ne[yt],yt,ne);return de}function Ca(ne,ge){for(var de=-1,it=ne==null?0:ne.length;++de<it;)if(ge(ne[de],de,ne))return!0;return!1}var rd=Ea("length");function ch(ne){return ne.split("")}function sd(ne){return ne.match(Hu)||[]}function Ts(ne,ge,de){var it;return de(ne,function(yt,Gt,pn){if(ge(yt,Gt,pn))return it=Gt,!1}),it}function xa(ne,ge,de,it){for(var yt=ne.length,Gt=de+(it?1:-1);it?Gt--:++Gt<yt;)if(ge(ne[Gt],Gt,ne))return Gt;return-1}function ji(ne,ge,de){return ge===ge?$l(ne,ge,de):xa(ne,Vr,de)}function Nl(ne,ge,de,it){for(var yt=de-1,Gt=ne.length;++yt<Gt;)if(it(ne[yt],ge))return yt;return-1}function Vr(ne){return ne!==ne}function Ss(ne,ge){var de=ne==null?0:ne.length;return de?Ta(ne,ge)/de:Fn}function Ea(ne){return function(ge){return ge==null?h:ge[ne]}}function Da(ne){return function(ge){return ne==null?h:ne[ge]}}function Bl(ne,ge,de,it,yt){return yt(ne,function(Gt,pn,Yt){de=it?(it=!1,Gt):ge(de,Gt,pn,Yt)}),de}function ad(ne,ge){var de=ne.length;for(ne.sort(ge);de--;)ne[de]=ne[de].value;return ne}function Ta(ne,ge){for(var de,it=-1,yt=ne.length;++it<yt;){var Gt=ge(ne[it]);Gt!==h&&(de=de===h?Gt:de+Gt)}return de}function Ol(ne,ge){for(var de=-1,it=Array(ne);++de<ne;)it[de]=ge(de);return it}function dh(ne,ge){return En(ge,function(de){return[de,ne[de]]})}function Ll(ne){return ne&&ne.slice(0,hd(ne)+1).replace(_s,"")}function No(ne){return function(ge){return ne(ge)}}function Rl(ne,ge){return En(ge,function(de){return ne[de]})}function ni(ne,ge){return ne.has(ge)}function Ur(ne,ge){for(var de=-1,it=ne.length;++de<it&&ji(ge,ne[de],0)>-1;);return de}function zl(ne,ge){for(var de=ne.length;de--&&ji(ge,ne[de],0)>-1;);return de}function ld(ne,ge){for(var de=ne.length,it=0;de--;)ne[de]===ge&&++it;return it}var Sa=Da(Cs),jl=Da(va);function uh(ne){return"\\"+Sl[ne]}function cd(ne,ge){return ne==null?h:ne[ge]}function Fi(ne){return Tl.test(ne)}function dd(ne){return Zc.test(ne)}function ud(ne){for(var ge,de=[];!(ge=ne.next()).done;)de.push(ge.value);return de}function Fl(ne){var ge=-1,de=Array(ne.size);return ne.forEach(function(it,yt){de[++ge]=[yt,it]}),de}function Ia(ne,ge){return function(de){return ne(ge(de))}}function $i(ne,ge){for(var de=-1,it=ne.length,yt=0,Gt=[];++de<it;){var pn=ne[de];(pn===ge||pn===P)&&(ne[de]=P,Gt[yt++]=de)}return Gt}function Is(ne){var ge=-1,de=Array(ne.size);return ne.forEach(function(it){de[++ge]=it}),de}function Ms(ne){var ge=-1,de=Array(ne.size);return ne.forEach(function(it){de[++ge]=[it,it]}),de}function $l(ne,ge,de){for(var it=de-1,yt=ne.length;++it<yt;)if(ne[it]===ge)return it;return-1}function hh(ne,ge,de){for(var it=de+1;it--;)if(ne[it]===ge)return it;return it}function ui(ne){return Fi(ne)?pd(ne):rd(ne)}function oi(ne){return Fi(ne)?md(ne):ch(ne)}function hd(ne){for(var ge=ne.length;ge--&&Lr.test(ne.charAt(ge)););return ge}var fd=Da(zr);function pd(ne){for(var ge=mr.lastIndex=0;mr.test(ne);)++ge;return ge}function md(ne){return ne.match(mr)||[]}function gd(ne){return ne.match(sh)||[]}var bd=function ne(ge){ge=ge==null?Un:Ht.defaults(Un.Object(),ge,Ht.pick(Un,_n));var de=ge.Array,it=ge.Date,yt=ge.Error,Gt=ge.Function,pn=ge.Math,Yt=ge.Object,Ma=ge.RegExp,br=ge.String,qo=ge.TypeError,Ps=de.prototype,Vl=Gt.prototype,Ct=Yt.prototype,wr=ge["__core-js_shared__"],mn=Vl.toString,Lt=Ct.hasOwnProperty,_r=0,Ul=function(){var c=/[^.]+$/.exec(wr&&wr.keys&&wr.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}(),kn=Ct.toString,Pa=mn.call(Yt),wd=Un._,_d=Ma("^"+mn.call(Lt).replace(yl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),an=Jc?ge.Buffer:h,Vi=ge.Symbol,ki=ge.Uint8Array,x=an?an.allocUnsafe:h,D=Ia(Yt.getPrototypeOf,Yt),B=Yt.create,W=Ct.propertyIsEnumerable,Ee=Ps.splice,lt=Vi?Vi.isConcatSpreadable:h,Dn=Vi?Vi.iterator:h,Rn=Vi?Vi.toStringTag:h,Jn=function(){try{var c=Vs(Yt,"defineProperty");return c({},"",{}),c}catch{}}(),Hr=ge.clearTimeout!==Un.clearTimeout&&ge.clearTimeout,Na=it&&it.now!==Un.Date.now&&it.now,Bp=ge.setTimeout!==Un.setTimeout&&ge.setTimeout,Hl=pn.ceil,ql=pn.floor,Wl=Yt.getOwnPropertySymbols,bw=an?an.isBuffer:h,fh=ge.isFinite,ww=Ps.join,_w=Ia(Yt.keys,Yt),ut=pn.max,Eo=pn.min,Ba=it.now,ph=ge.parseInt,mh=pn.random,gh=Ps.reverse,Xn=Vs(ge,"DataView"),Gl=Vs(ge,"Map"),bh=Vs(ge,"Promise"),Ns=Vs(ge,"Set"),Kl=Vs(ge,"WeakMap"),Bo=Vs(Yt,"create"),zn=Kl&&new Kl,po={},Ui=Zi(Xn),Hi=Zi(Gl),Op=Zi(bh),Lp=Zi(Ns),kw=Zi(Kl),kd=Vi?Vi.prototype:h,Re=kd?kd.valueOf:h,wh=kd?kd.toString:h;function z(c){if(On(c)&&!At(c)&&!(c instanceof Rt)){if(c instanceof ii)return c;if(Lt.call(c,"__wrapped__"))return ns(c)}return new ii(c)}var Bs=function(){function c(){}return function(f){if(!Nn(f))return{};if(B)return B(f);c.prototype=f;var k=new c;return c.prototype=h,k}}();function Yl(){}function ii(c,f){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!f,this.__index__=0,this.__values__=h}z.templateSettings={escape:yo,evaluate:ju,interpolate:Ho,variable:"",imports:{_:z}},z.prototype=Yl.prototype,z.prototype.constructor=z,ii.prototype=Bs(Yl.prototype),ii.prototype.constructor=ii;function Rt(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=cn,this.__views__=[]}function vd(){var c=new Rt(this.__wrapped__);return c.__actions__=Bn(this.__actions__),c.__dir__=this.__dir__,c.__filtered__=this.__filtered__,c.__iteratees__=Bn(this.__iteratees__),c.__takeCount__=this.__takeCount__,c.__views__=Bn(this.__views__),c}function vw(){if(this.__filtered__){var c=new Rt(this);c.__dir__=-1,c.__filtered__=!0}else c=this.clone(),c.__dir__*=-1;return c}function gt(){var c=this.__wrapped__.value(),f=this.__dir__,k=At(c),T=f<0,L=k?c.length:0,V=Gw(0,L,this.__views__),G=V.start,J=V.end,re=J-G,Ae=T?J:G-1,ye=this.__iteratees__,Be=ye.length,Je=0,Ke=Eo(re,this.__takeCount__);if(!k||!T&&L==re&&Ke==re)return Hh(c,this.__actions__);var ft=[];e:for(;re--&&Je<Ke;){Ae+=f;for(var Bt=-1,mt=c[Ae];++Bt<Be;){var Ot=ye[Bt],jt=Ot.iteratee,Jo=Ot.type,jo=jt(mt);if(Jo==Ft)mt=jo;else if(!jo){if(Jo==Le)continue e;break e}}ft[Je++]=mt}return ft}Rt.prototype=Bs(Yl.prototype),Rt.prototype.constructor=Rt;function qr(c){var f=-1,k=c==null?0:c.length;for(this.clear();++f<k;){var T=c[f];this.set(T[0],T[1])}}function yw(){this.__data__=Bo?Bo(null):{},this.size=0}function yd(c){var f=this.has(c)&&delete this.__data__[c];return this.size-=f?1:0,f}function Rp(c){var f=this.__data__;if(Bo){var k=f[c];return k===y?h:k}return Lt.call(f,c)?f[c]:h}function Aw(c){var f=this.__data__;return Bo?f[c]!==h:Lt.call(f,c)}function _h(c,f){var k=this.__data__;return this.size+=this.has(c)?0:1,k[c]=Bo&&f===h?y:f,this}qr.prototype.clear=yw,qr.prototype.delete=yd,qr.prototype.get=Rp,qr.prototype.has=Aw,qr.prototype.set=_h;function qi(c){var f=-1,k=c==null?0:c.length;for(this.clear();++f<k;){var T=c[f];this.set(T[0],T[1])}}function Cw(){this.__data__=[],this.size=0}function Os(c){var f=this.__data__,k=Oa(f,c);if(k<0)return!1;var T=f.length-1;return k==T?f.pop():Ee.call(f,k,1),--this.size,!0}function zp(c){var f=this.__data__,k=Oa(f,c);return k<0?h:f[k][1]}function Ls(c){return Oa(this.__data__,c)>-1}function gn(c,f){var k=this.__data__,T=Oa(k,c);return T<0?(++this.size,k.push([c,f])):k[T][1]=f,this}qi.prototype.clear=Cw,qi.prototype.delete=Os,qi.prototype.get=zp,qi.prototype.has=Ls,qi.prototype.set=gn;function ro(c){var f=-1,k=c==null?0:c.length;for(this.clear();++f<k;){var T=c[f];this.set(T[0],T[1])}}function Wi(){this.size=0,this.__data__={hash:new qr,map:new(Gl||qi),string:new qr}}function jp(c){var f=zd(this,c).delete(c);return this.size-=f?1:0,f}function kh(c){return zd(this,c).get(c)}function Ad(c){return zd(this,c).has(c)}function xw(c,f){var k=zd(this,c),T=k.size;return k.set(c,f),this.size+=k.size==T?0:1,this}ro.prototype.clear=Wi,ro.prototype.delete=jp,ro.prototype.get=kh,ro.prototype.has=Ad,ro.prototype.set=xw;function Rs(c){var f=-1,k=c==null?0:c.length;for(this.__data__=new ro;++f<k;)this.add(c[f])}function Ew(c){return this.__data__.set(c,y),this}function vh(c){return this.__data__.has(c)}Rs.prototype.add=Rs.prototype.push=Ew,Rs.prototype.has=vh;function vi(c){var f=this.__data__=new qi(c);this.size=f.size}function Dw(){this.__data__=new qi,this.size=0}function Tw(c){var f=this.__data__,k=f.delete(c);return this.size=f.size,k}function Sw(c){return this.__data__.get(c)}function Iw(c){return this.__data__.has(c)}function Mw(c,f){var k=this.__data__;if(k instanceof qi){var T=k.__data__;if(!Gl||T.length<m-1)return T.push([c,f]),this.size=++k.size,this;k=this.__data__=new ro(T)}return k.set(c,f),this.size=k.size,this}vi.prototype.clear=Dw,vi.prototype.delete=Tw,vi.prototype.get=Sw,vi.prototype.has=Iw,vi.prototype.set=Mw;function yh(c,f){var k=At(c),T=!k&&is(c),L=!k&&!T&&Sr(c),V=!k&&!T&&!L&&Za(c),G=k||T||L||V,J=G?Ol(c.length,br):[],re=J.length;for(var Ae in c)(f||Lt.call(c,Ae))&&!(G&&(Ae=="length"||L&&(Ae=="offset"||Ae=="parent")||V&&(Ae=="buffer"||Ae=="byteLength"||Ae=="byteOffset")||so(Ae,re)))&&J.push(Ae);return J}function Ah(c){var f=c.length;return f?c[Lh(0,f-1)]:h}function Pw(c,f){return ts(Bn(c),Gi(f,0,c.length))}function Ch(c){return ts(Bn(c))}function Ql(c,f,k){(k!==h&&!Wn(c[f],k)||k===h&&!(f in c))&&kr(c,f,k)}function Zl(c,f,k){var T=c[f];(!(Lt.call(c,f)&&Wn(T,k))||k===h&&!(f in c))&&kr(c,f,k)}function Oa(c,f){for(var k=c.length;k--;)if(Wn(c[k][0],f))return k;return-1}function Fp(c,f,k,T){return Wr(c,function(L,V,G){f(T,L,k(L),G)}),T}function xh(c,f){return c&&yi(f,co(f),c)}function Nw(c,f){return c&&yi(f,Ro(f),c)}function kr(c,f,k){f=="__proto__"&&Jn?Jn(c,f,{configurable:!0,enumerable:!0,value:k,writable:!0}):c[f]=k}function Eh(c,f){for(var k=-1,T=f.length,L=de(T),V=c==null;++k<T;)L[k]=V?h:ss(c,f[k]);return L}function Gi(c,f,k){return c===c&&(k!==h&&(c=c<=k?c:k),f!==h&&(c=c>=f?c:f)),c}function Wo(c,f,k,T,L,V){var G,J=f&N,re=f&M,Ae=f&F;if(k&&(G=L?k(c,T,L,V):k(c)),G!==h)return G;if(!Nn(c))return c;var ye=At(c);if(ye){if(G=es(c),!J)return Bn(c,G)}else{var Be=To(c),Je=Be==q||Be==Z;if(Sr(c))return Yh(c,J);if(Be==ze||Be==X||Je&&!L){if(G=re||Je?{}:qa(c),!J)return re?Zr(c,Nw(G,c)):$a(c,xh(G,c))}else{if(!un[Be])return L?c:{};G=bn(c,Be,J)}}V||(V=new vi);var Ke=V.get(c);if(Ke)return Ke;V.set(c,G),Tf(c)?c.forEach(function(mt){G.add(Wo(mt,f,k,mt,c,V))}):hg(c)&&c.forEach(function(mt,Ot){G.set(Ot,Wo(mt,f,k,Ot,c,V))});var ft=Ae?re?Rd:Ua:re?Ro:co,Bt=ye?h:ft(c);return xo(Bt||c,function(mt,Ot){Bt&&(Ot=mt,mt=c[Ot]),Zl(G,Ot,Wo(mt,f,k,Ot,c,V))}),G}function Bw(c){var f=co(c);return function(k){return $p(k,c,f)}}function $p(c,f,k){var T=k.length;if(c==null)return!T;for(c=Yt(c);T--;){var L=k[T],V=f[L],G=c[L];if(G===h&&!(L in c)||!V(G))return!1}return!0}function Cd(c,f,k){if(typeof c!="function")throw new qo(_);return Hs(function(){c.apply(h,k)},f)}function Jl(c,f,k,T){var L=-1,V=Es,G=!0,J=c.length,re=[],Ae=f.length;if(!J)return re;k&&(f=En(f,No(k))),T?(V=$r,G=!1):f.length>=m&&(V=ni,G=!1,f=new Rs(f));e:for(;++L<J;){var ye=c[L],Be=k==null?ye:k(ye);if(ye=T||ye!==0?ye:0,G&&Be===Be){for(var Je=Ae;Je--;)if(f[Je]===Be)continue e;re.push(ye)}else V(f,Be,T)||re.push(ye)}return re}var Wr=om(vr),Vp=om(Th,!0);function zs(c,f){var k=!0;return Wr(c,function(T,L,V){return k=!!f(T,L,V),k}),k}function xd(c,f,k){for(var T=-1,L=c.length;++T<L;){var V=c[T],G=f(V);if(G!=null&&(J===h?G===G&&!Lo(G):k(G,J)))var J=G,re=V}return re}function Up(c,f,k,T){var L=c.length;for(k=St(k),k<0&&(k=-k>L?0:L+k),T=T===h||T>L?L:St(T),T<0&&(T+=L),T=k>T?0:wg(T);k<T;)c[k++]=f;return c}function Hp(c,f){var k=[];return Wr(c,function(T,L,V){f(T,L,V)&&k.push(T)}),k}function mo(c,f,k,T,L){var V=-1,G=c.length;for(k||(k=hn),L||(L=[]);++V<G;){var J=c[V];f>0&&k(J)?f>1?mo(J,f-1,k,T,L):_i(L,J):T||(L[L.length]=J)}return L}var Dh=im(),qp=im(!0);function vr(c,f){return c&&Dh(c,f,co)}function Th(c,f){return c&&qp(c,f,co)}function Ed(c,f){return di(f,function(k){return Ei(c[k])})}function js(c,f){f=Cr(f,c);for(var k=0,T=f.length;c!=null&&k<T;)c=c[Qi(f[k++])];return k&&k==T?c:h}function Sh(c,f,k){var T=f(c);return At(c)?T:_i(T,k(c))}function Do(c){return c==null?c===h?qe:Ce:Rn&&Rn in Yt(c)?Ww(c):Qw(c)}function Ih(c,f){return c>f}function Ow(c,f){return c!=null&&Lt.call(c,f)}function Lw(c,f){return c!=null&&f in Yt(c)}function Rw(c,f,k){return c>=Eo(f,k)&&c<ut(f,k)}function Xl(c,f,k){for(var T=k?$r:Es,L=c[0].length,V=c.length,G=V,J=de(V),re=1/0,Ae=[];G--;){var ye=c[G];G&&f&&(ye=En(ye,No(f))),re=Eo(ye.length,re),J[G]=!k&&(f||L>=120&&ye.length>=120)?new Rs(G&&ye):h}ye=c[0];var Be=-1,Je=J[0];e:for(;++Be<L&&Ae.length<re;){var Ke=ye[Be],ft=f?f(Ke):Ke;if(Ke=k||Ke!==0?Ke:0,!(Je?ni(Je,ft):T(Ae,ft,k))){for(G=V;--G;){var Bt=J[G];if(!(Bt?ni(Bt,ft):T(c[G],ft,k)))continue e}Je&&Je.push(ft),Ae.push(Ke)}}return Ae}function Mh(c,f,k,T){return vr(c,function(L,V,G){f(T,k(L),V,G)}),T}function go(c,f,k){f=Cr(f,c),c=Ci(c,f);var T=c==null?c:c[Qi(So(f))];return T==null?h:Co(T,c,k)}function Ph(c){return On(c)&&Do(c)==X}function ec(c){return On(c)&&Do(c)==Tt}function Wp(c){return On(c)&&Do(c)==dt}function Gr(c,f,k,T,L){return c===f?!0:c==null||f==null||!On(c)&&!On(f)?c!==c&&f!==f:Gp(c,f,k,T,Gr,L)}function Gp(c,f,k,T,L,V){var G=At(c),J=At(f),re=G?Te:To(c),Ae=J?Te:To(f);re=re==X?ze:re,Ae=Ae==X?ze:Ae;var ye=re==ze,Be=Ae==ze,Je=re==Ae;if(Je&&Sr(c)){if(!Sr(f))return!1;G=!0,ye=!1}if(Je&&!ye)return V||(V=new vi),G||Za(c)?um(c,f,k,T,L,V):qw(c,f,re,k,T,L,V);if(!(k&ee)){var Ke=ye&&Lt.call(c,"__wrapped__"),ft=Be&&Lt.call(f,"__wrapped__");if(Ke||ft){var Bt=Ke?c.value():c,mt=ft?f.value():f;return V||(V=new vi),L(Bt,mt,k,T,V)}}return Je?(V||(V=new vi),hm(c,f,k,T,L,V)):!1}function Kp(c){return On(c)&&To(c)==ce}function yr(c,f,k,T){var L=k.length,V=L,G=!T;if(c==null)return!V;for(c=Yt(c);L--;){var J=k[L];if(G&&J[2]?J[1]!==c[J[0]]:!(J[0]in c))return!1}for(;++L<V;){J=k[L];var re=J[0],Ae=c[re],ye=J[1];if(G&&J[2]){if(Ae===h&&!(re in c))return!1}else{var Be=new vi;if(T)var Je=T(Ae,ye,re,c,f,Be);if(!(Je===h?Gr(ye,Ae,ee|se,T,Be):Je))return!1}}return!0}function $e(c){if(!Nn(c)||pm(c))return!1;var f=Ei(c)?_d:ar;return f.test(Zi(c))}function bt(c){return On(c)&&Do(c)==Se}function Dd(c){return On(c)&&To(c)==xe}function Ki(c){return On(c)&&fc(c.length)&&!!dn[Do(c)]}function Td(c){return typeof c=="function"?c:c==null?zo:typeof c=="object"?At(c)?Bh(c[0],c[1]):Fs(c):el(c)}function Kr(c){if(!Us(c))return _w(c);var f=[];for(var k in Yt(c))Lt.call(c,k)&&k!="constructor"&&f.push(k);return f}function Nh(c){if(!Nn(c))return gm(c);var f=Us(c),k=[];for(var T in c)T=="constructor"&&(f||!Lt.call(c,T))||k.push(T);return k}function tc(c,f){return c<f}function La(c,f){var k=-1,T=Zo(c)?de(c.length):[];return Wr(c,function(L,V,G){T[++k]=f(L,V,G)}),T}function Fs(c){var f=sf(c);return f.length==1&&f[0][2]?af(f[0][0],f[0][1]):function(k){return k===c||yr(k,c,f)}}function Bh(c,f){return Ie(c)&&fe(f)?af(Qi(c),f):function(k){var T=ss(k,c);return T===h&&T===f?Xd(k,c):Gr(f,T,ee|se)}}function Ra(c,f,k,T,L){c!==f&&Dh(f,function(V,G){if(L||(L=new vi),Nn(V))Sd(c,f,G,k,Ra,T,L);else{var J=T?T(cf(c,G),V,G+"",c,f,L):h;J===h&&(J=V),Ql(c,G,J)}},Ro)}function Sd(c,f,k,T,L,V,G){var J=cf(c,k),re=cf(f,k),Ae=G.get(re);if(Ae){Ql(c,k,Ae);return}var ye=V?V(J,re,k+"",c,f,G):h,Be=ye===h;if(Be){var Je=At(re),Ke=!Je&&Sr(re),ft=!Je&&!Ke&&Za(re);ye=re,Je||Ke||ft?At(J)?ye=J:Gn(J)?ye=Bn(J):Ke?(Be=!1,ye=Yh(re,!0)):ft?(Be=!1,ye=Zh(re,!0)):ye=[]:Qa(re)||is(re)?(ye=J,is(J)?ye=_g(J):(!Nn(J)||Ei(J))&&(ye=qa(re))):Be=!1}Be&&(G.set(re,ye),L(ye,re,T,V,G),G.delete(re)),Ql(c,k,ye)}function Yr(c,f){var k=c.length;if(!!k)return f+=f<0?k:0,so(f,k)?c[f]:h}function Yp(c,f,k){f.length?f=En(f,function(V){return At(V)?function(G){return js(G,V.length===1?V[0]:V)}:V}):f=[zo];var T=-1;f=En(f,No(ht()));var L=La(c,function(V,G,J){var re=En(f,function(Ae){return Ae(V)});return{criteria:re,index:++T,value:V}});return ad(L,function(V,G){return nm(V,G,k)})}function Oh(c,f){return Id(c,f,function(k,T){return Xd(c,T)})}function Id(c,f,k){for(var T=-1,L=f.length,V={};++T<L;){var G=f[T],J=js(c,G);k(J,G)&&nc(V,Cr(G,c),J)}return V}function zw(c){return function(f){return js(f,c)}}function za(c,f,k,T){var L=T?Nl:ji,V=-1,G=f.length,J=c;for(c===f&&(f=Bn(f)),k&&(J=En(c,No(k)));++V<G;)for(var re=0,Ae=f[V],ye=k?k(Ae):Ae;(re=L(J,ye,re,T))>-1;)J!==c&&Ee.call(J,re,1),Ee.call(c,re,1);return c}function Qp(c,f){for(var k=c?f.length:0,T=k-1;k--;){var L=f[k];if(k==T||L!==V){var V=L;so(L)?Ee.call(c,L,1):Fa(c,L)}}return c}function Lh(c,f){return c+ql(mh()*(f-c+1))}function Rh(c,f,k,T){for(var L=-1,V=ut(Hl((f-c)/(k||1)),0),G=de(V);V--;)G[T?V:++L]=c,c+=k;return G}function zh(c,f){var k="";if(!c||f<1||f>vt)return k;do f%2&&(k+=c),f=ql(f/2),f&&(c+=c);while(f);return k}function xt(c,f){return ri(lf(c,f,zo),c+"")}function Zp(c){return Ah(Zs(c))}function jh(c,f){var k=Zs(c);return ts(k,Gi(f,0,k.length))}function nc(c,f,k,T){if(!Nn(c))return c;f=Cr(f,c);for(var L=-1,V=f.length,G=V-1,J=c;J!=null&&++L<V;){var re=Qi(f[L]),Ae=k;if(re==="__proto__"||re==="constructor"||re==="prototype")return c;if(L!=G){var ye=J[re];Ae=T?T(ye,re,J):h,Ae===h&&(Ae=Nn(ye)?ye:so(f[L+1])?[]:{})}Zl(J,re,Ae),J=J[re]}return c}var Fh=zn?function(c,f){return zn.set(c,f),c}:zo,$h=Jn?function(c,f){return Jn(c,"toString",{configurable:!0,enumerable:!1,value:$f(f),writable:!0})}:zo;function Jp(c){return ts(Zs(c))}function hi(c,f,k){var T=-1,L=c.length;f<0&&(f=-f>L?0:L+f),k=k>L?L:k,k<0&&(k+=L),L=f>k?0:k-f>>>0,f>>>=0;for(var V=de(L);++T<L;)V[T]=c[T+f];return V}function Xp(c,f){var k;return Wr(c,function(T,L,V){return k=f(T,L,V),!k}),!!k}function ja(c,f,k){var T=0,L=c==null?T:c.length;if(typeof f=="number"&&f===f&&L<=fo){for(;T<L;){var V=T+L>>>1,G=c[V];G!==null&&!Lo(G)&&(k?G<=f:G<f)?T=V+1:L=V}return L}return $s(c,f,zo,k)}function $s(c,f,k,T){var L=0,V=c==null?0:c.length;if(V===0)return 0;f=k(f);for(var G=f!==f,J=f===null,re=Lo(f),Ae=f===h;L<V;){var ye=ql((L+V)/2),Be=k(c[ye]),Je=Be!==h,Ke=Be===null,ft=Be===Be,Bt=Lo(Be);if(G)var mt=T||ft;else Ae?mt=ft&&(T||Je):J?mt=ft&&Je&&(T||!Ke):re?mt=ft&&Je&&!Ke&&(T||!Bt):Ke||Bt?mt=!1:mt=T?Be<=f:Be<f;mt?L=ye+1:V=ye}return Eo(V,Ln)}function Vh(c,f){for(var k=-1,T=c.length,L=0,V=[];++k<T;){var G=c[k],J=f?f(G):G;if(!k||!Wn(J,re)){var re=J;V[L++]=G===0?0:G}}return V}function Uh(c){return typeof c=="number"?c:Lo(c)?Fn:+c}function Go(c){if(typeof c=="string")return c;if(At(c))return En(c,Go)+"";if(Lo(c))return wh?wh.call(c):"";var f=c+"";return f=="0"&&1/c==-ot?"-0":f}function Ar(c,f,k){var T=-1,L=Es,V=c.length,G=!0,J=[],re=J;if(k)G=!1,L=$r;else if(V>=m){var Ae=f?null:cm(c);if(Ae)return Is(Ae);G=!1,L=ni,re=new Rs}else re=f?[]:J;e:for(;++T<V;){var ye=c[T],Be=f?f(ye):ye;if(ye=k||ye!==0?ye:0,G&&Be===Be){for(var Je=re.length;Je--;)if(re[Je]===Be)continue e;f&&re.push(Be),J.push(ye)}else L(re,Be,k)||(re!==J&&re.push(Be),J.push(ye))}return J}function Fa(c,f){return f=Cr(f,c),c=Ci(c,f),c==null||delete c[Qi(So(f))]}function Ko(c,f,k,T){return nc(c,f,k(js(c,f)),T)}function Qr(c,f,k,T){for(var L=c.length,V=T?L:-1;(T?V--:++V<L)&&f(c[V],V,c););return k?hi(c,T?0:V,T?V+1:L):hi(c,T?V+1:0,T?L:V)}function Hh(c,f){var k=c;return k instanceof Rt&&(k=k.value()),Ds(f,function(T,L){return L.func.apply(L.thisArg,_i([T],L.args))},k)}function qh(c,f,k){var T=c.length;if(T<2)return T?Ar(c[0]):[];for(var L=-1,V=de(T);++L<T;)for(var G=c[L],J=-1;++J<T;)J!=L&&(V[L]=Jl(V[L]||G,c[J],f,k));return Ar(mo(V,1),f,k)}function Wh(c,f,k){for(var T=-1,L=c.length,V=f.length,G={};++T<L;){var J=T<V?f[T]:h;k(G,c[T],J)}return G}function Gh(c){return Gn(c)?c:[]}function Kh(c){return typeof c=="function"?c:zo}function Cr(c,f){return At(c)?c:Ie(c,f)?[c]:si(Xt(c))}var em=xt;function xr(c,f,k){var T=c.length;return k=k===h?T:k,!f&&k>=T?c:hi(c,f,k)}var tm=Hr||function(c){return Un.clearTimeout(c)};function Yh(c,f){if(f)return c.slice();var k=c.length,T=x?x(k):new c.constructor(k);return c.copy(T),T}function Qh(c){var f=new c.constructor(c.byteLength);return new ki(f).set(new ki(c)),f}function jw(c,f){var k=f?Qh(c.buffer):c.buffer;return new c.constructor(k,c.byteOffset,c.byteLength)}function Fw(c){var f=new c.constructor(c.source,Al.exec(c));return f.lastIndex=c.lastIndex,f}function Md(c){return Re?Yt(Re.call(c)):{}}function Zh(c,f){var k=f?Qh(c.buffer):c.buffer;return new c.constructor(k,c.byteOffset,c.length)}function oc(c,f){if(c!==f){var k=c!==h,T=c===null,L=c===c,V=Lo(c),G=f!==h,J=f===null,re=f===f,Ae=Lo(f);if(!J&&!Ae&&!V&&c>f||V&&G&&re&&!J&&!Ae||T&&G&&re||!k&&re||!L)return 1;if(!T&&!V&&!Ae&&c<f||Ae&&k&&L&&!T&&!V||J&&k&&L||!G&&L||!re)return-1}return 0}function nm(c,f,k){for(var T=-1,L=c.criteria,V=f.criteria,G=L.length,J=k.length;++T<G;){var re=oc(L[T],V[T]);if(re){if(T>=J)return re;var Ae=k[T];return re*(Ae=="desc"?-1:1)}}return c.index-f.index}function Jh(c,f,k,T){for(var L=-1,V=c.length,G=k.length,J=-1,re=f.length,Ae=ut(V-G,0),ye=de(re+Ae),Be=!T;++J<re;)ye[J]=f[J];for(;++L<G;)(Be||L<V)&&(ye[k[L]]=c[L]);for(;Ae--;)ye[J++]=c[L++];return ye}function Xh(c,f,k,T){for(var L=-1,V=c.length,G=-1,J=k.length,re=-1,Ae=f.length,ye=ut(V-J,0),Be=de(ye+Ae),Je=!T;++L<ye;)Be[L]=c[L];for(var Ke=L;++re<Ae;)Be[Ke+re]=f[re];for(;++G<J;)(Je||L<V)&&(Be[Ke+k[G]]=c[L++]);return Be}function Bn(c,f){var k=-1,T=c.length;for(f||(f=de(T));++k<T;)f[k]=c[k];return f}function yi(c,f,k,T){var L=!k;k||(k={});for(var V=-1,G=f.length;++V<G;){var J=f[V],re=T?T(k[J],c[J],J,k,c):h;re===h&&(re=c[J]),L?kr(k,J,re):Zl(k,J,re)}return k}function $a(c,f){return yi(c,jd(c),f)}function Zr(c,f){return yi(c,fm(c),f)}function Pd(c,f){return function(k,T){var L=At(k)?od:Fp,V=f?f():{};return L(k,c,ht(T,2),V)}}function Jr(c){return xt(function(f,k){var T=-1,L=k.length,V=L>1?k[L-1]:h,G=L>2?k[2]:h;for(V=c.length>3&&typeof V=="function"?(L--,V):h,G&&Hn(k[0],k[1],G)&&(V=L<3?h:V,L=1),f=Yt(f);++T<L;){var J=k[T];J&&c(f,J,T,V)}return f})}function om(c,f){return function(k,T){if(k==null)return k;if(!Zo(k))return c(k,T);for(var L=k.length,V=f?L:-1,G=Yt(k);(f?V--:++V<L)&&T(G[V],V,G)!==!1;);return k}}function im(c){return function(f,k,T){for(var L=-1,V=Yt(f),G=T(f),J=G.length;J--;){var re=G[c?J:++L];if(k(V[re],re,V)===!1)break}return f}}function $w(c,f,k){var T=f&we,L=ic(c);function V(){var G=this&&this!==Un&&this instanceof V?L:c;return G.apply(T?k:this,arguments)}return V}function rm(c){return function(f){f=Xt(f);var k=Fi(f)?oi(f):h,T=k?k[0]:f.charAt(0),L=k?xr(k,1).join(""):f.slice(1);return T[c]()+L}}function Va(c){return function(f){return Ds(Ff(Og(f).replace(Yc,"")),c,"")}}function ic(c){return function(){var f=arguments;switch(f.length){case 0:return new c;case 1:return new c(f[0]);case 2:return new c(f[0],f[1]);case 3:return new c(f[0],f[1],f[2]);case 4:return new c(f[0],f[1],f[2],f[3]);case 5:return new c(f[0],f[1],f[2],f[3],f[4]);case 6:return new c(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return new c(f[0],f[1],f[2],f[3],f[4],f[5],f[6])}var k=Bs(c.prototype),T=c.apply(k,f);return Nn(T)?T:k}}function Vw(c,f,k){var T=ic(c);function L(){for(var V=arguments.length,G=de(V),J=V,re=Ha(L);J--;)G[J]=arguments[J];var Ae=V<3&&G[0]!==re&&G[V-1]!==re?[]:$i(G,re);if(V-=Ae.length,V<k)return lm(c,f,Nd,L.placeholder,h,G,Ae,h,h,k-V);var ye=this&&this!==Un&&this instanceof L?T:c;return Co(ye,this,G)}return L}function sm(c){return function(f,k,T){var L=Yt(f);if(!Zo(f)){var V=ht(k,3);f=co(f),k=function(J){return V(L[J],J,L)}}var G=c(f,k,T);return G>-1?L[V?f[G]:G]:h}}function ef(c){return Yi(function(f){var k=f.length,T=k,L=ii.prototype.thru;for(c&&f.reverse();T--;){var V=f[T];if(typeof V!="function")throw new qo(_);if(L&&!G&&sc(V)=="wrapper")var G=new ii([],!0)}for(T=G?T:k;++T<k;){V=f[T];var J=sc(V),re=J=="wrapper"?rf(V):h;re&&Fd(re[0])&&re[1]==(_e|ie|U|ue)&&!re[4].length&&re[9]==1?G=G[sc(re[0])].apply(G,re[3]):G=V.length==1&&Fd(V)?G[J]():G.thru(V)}return function(){var Ae=arguments,ye=Ae[0];if(G&&Ae.length==1&&At(ye))return G.plant(ye).value();for(var Be=0,Je=k?f[Be].apply(this,Ae):ye;++Be<k;)Je=f[Be].call(this,Je);return Je}})}function Nd(c,f,k,T,L,V,G,J,re,Ae){var ye=f&_e,Be=f&we,Je=f&te,Ke=f&(ie|ke),ft=f&Me,Bt=Je?h:ic(c);function mt(){for(var Ot=arguments.length,jt=de(Ot),Jo=Ot;Jo--;)jt[Jo]=arguments[Jo];if(Ke)var jo=Ha(mt),Qn=ld(jt,jo);if(T&&(jt=Jh(jt,T,L,Ke)),V&&(jt=Xh(jt,V,G,Ke)),Ot-=Qn,Ke&&Ot<Ae){var yn=$i(jt,jo);return lm(c,f,Nd,mt.placeholder,k,jt,yn,J,re,Ae-Ot)}var uo=Be?k:this,er=Je?uo[c]:c;return Ot=jt.length,J?jt=bm(jt,J):ft&&Ot>1&&jt.reverse(),ye&&re<Ot&&(jt.length=re),this&&this!==Un&&this instanceof mt&&(er=Bt||ic(er)),er.apply(uo,jt)}return mt}function am(c,f){return function(k,T){return Mh(k,c,f(T),{})}}function Xr(c,f){return function(k,T){var L;if(k===h&&T===h)return f;if(k!==h&&(L=k),T!==h){if(L===h)return T;typeof k=="string"||typeof T=="string"?(k=Go(k),T=Go(T)):(k=Uh(k),T=Uh(T)),L=c(k,T)}return L}}function tf(c){return Yi(function(f){return f=En(f,No(ht())),xt(function(k){var T=this;return c(f,function(L){return Co(L,T,k)})})})}function Bd(c,f){f=f===h?" ":Go(f);var k=f.length;if(k<2)return k?zh(f,c):f;var T=zh(f,Hl(c/ui(f)));return Fi(f)?xr(oi(T),0,c).join(""):T.slice(0,c)}function Uw(c,f,k,T){var L=f&we,V=ic(c);function G(){for(var J=-1,re=arguments.length,Ae=-1,ye=T.length,Be=de(ye+re),Je=this&&this!==Un&&this instanceof G?V:c;++Ae<ye;)Be[Ae]=T[Ae];for(;re--;)Be[Ae++]=arguments[++J];return Co(Je,L?k:this,Be)}return G}function rc(c){return function(f,k,T){return T&&typeof T!="number"&&Hn(f,k,T)&&(k=T=h),f=Di(f),k===h?(k=f,f=0):k=Di(k),T=T===h?f<k?1:-1:Di(T),Rh(f,k,T,c)}}function Od(c){return function(f,k){return typeof f=="string"&&typeof k=="string"||(f=ai(f),k=ai(k)),c(f,k)}}function lm(c,f,k,T,L,V,G,J,re,Ae){var ye=f&ie,Be=ye?G:h,Je=ye?h:G,Ke=ye?V:h,ft=ye?h:V;f|=ye?U:Pe,f&=~(ye?Pe:U),f&Y||(f&=~(we|te));var Bt=[c,f,L,Ke,Be,ft,Je,J,re,Ae],mt=k.apply(h,Bt);return Fd(c)&&df(mt,Bt),mt.placeholder=T,wm(mt,c,f)}function nf(c){var f=pn[c];return function(k,T){if(k=ai(k),T=T==null?0:Eo(St(T),292),T&&fh(k)){var L=(Xt(k)+"e").split("e"),V=f(L[0]+"e"+(+L[1]+T));return L=(Xt(V)+"e").split("e"),+(L[0]+"e"+(+L[1]-T))}return f(k)}}var cm=Ns&&1/Is(new Ns([,-0]))[1]==ot?function(c){return new Ns(c)}:iu;function dm(c){return function(f){var k=To(f);return k==ce?Fl(f):k==xe?Ms(f):dh(f,c(f))}}function Er(c,f,k,T,L,V,G,J){var re=f&te;if(!re&&typeof c!="function")throw new qo(_);var Ae=T?T.length:0;if(Ae||(f&=~(U|Pe),T=L=h),G=G===h?G:ut(St(G),0),J=J===h?J:St(J),Ae-=L?L.length:0,f&Pe){var ye=T,Be=L;T=L=h}var Je=re?h:rf(c),Ke=[c,f,k,T,L,ye,Be,V,G,J];if(Je&&$d(Ke,Je),c=Ke[0],f=Ke[1],k=Ke[2],T=Ke[3],L=Ke[4],J=Ke[9]=Ke[9]===h?re?0:c.length:ut(Ke[9]-Ae,0),!J&&f&(ie|ke)&&(f&=~(ie|ke)),!f||f==we)var ft=$w(c,f,k);else f==ie||f==ke?ft=Vw(c,f,J):(f==U||f==(we|U))&&!L.length?ft=Uw(c,f,k,T):ft=Nd.apply(h,Ke);var Bt=Je?Fh:df;return wm(Bt(ft,Ke),c,f)}function of(c,f,k,T){return c===h||Wn(c,Ct[k])&&!Lt.call(T,k)?f:c}function Ld(c,f,k,T,L,V){return Nn(c)&&Nn(f)&&(V.set(f,c),Ra(c,f,h,Ld,V),V.delete(f)),c}function Hw(c){return Qa(c)?h:c}function um(c,f,k,T,L,V){var G=k&ee,J=c.length,re=f.length;if(J!=re&&!(G&&re>J))return!1;var Ae=V.get(c),ye=V.get(f);if(Ae&&ye)return Ae==f&&ye==c;var Be=-1,Je=!0,Ke=k&se?new Rs:h;for(V.set(c,f),V.set(f,c);++Be<J;){var ft=c[Be],Bt=f[Be];if(T)var mt=G?T(Bt,ft,Be,f,c,V):T(ft,Bt,Be,c,f,V);if(mt!==h){if(mt)continue;Je=!1;break}if(Ke){if(!Ca(f,function(Ot,jt){if(!ni(Ke,jt)&&(ft===Ot||L(ft,Ot,k,T,V)))return Ke.push(jt)})){Je=!1;break}}else if(!(ft===Bt||L(ft,Bt,k,T,V))){Je=!1;break}}return V.delete(c),V.delete(f),Je}function qw(c,f,k,T,L,V,G){switch(k){case _t:if(c.byteLength!=f.byteLength||c.byteOffset!=f.byteOffset)return!1;c=c.buffer,f=f.buffer;case Tt:return!(c.byteLength!=f.byteLength||!V(new ki(c),new ki(f)));case Ue:case dt:case me:return Wn(+c,+f);case Qe:return c.name==f.name&&c.message==f.message;case Se:case et:return c==f+"";case ce:var J=Fl;case xe:var re=T&ee;if(J||(J=Is),c.size!=f.size&&!re)return!1;var Ae=G.get(c);if(Ae)return Ae==f;T|=se,G.set(c,f);var ye=um(J(c),J(f),T,L,V,G);return G.delete(c),ye;case We:if(Re)return Re.call(c)==Re.call(f)}return!1}function hm(c,f,k,T,L,V){var G=k&ee,J=Ua(c),re=J.length,Ae=Ua(f),ye=Ae.length;if(re!=ye&&!G)return!1;for(var Be=re;Be--;){var Je=J[Be];if(!(G?Je in f:Lt.call(f,Je)))return!1}var Ke=V.get(c),ft=V.get(f);if(Ke&&ft)return Ke==f&&ft==c;var Bt=!0;V.set(c,f),V.set(f,c);for(var mt=G;++Be<re;){Je=J[Be];var Ot=c[Je],jt=f[Je];if(T)var Jo=G?T(jt,Ot,Je,f,c,V):T(Ot,jt,Je,c,f,V);if(!(Jo===h?Ot===jt||L(Ot,jt,k,T,V):Jo)){Bt=!1;break}mt||(mt=Je=="constructor")}if(Bt&&!mt){var jo=c.constructor,Qn=f.constructor;jo!=Qn&&"constructor"in c&&"constructor"in f&&!(typeof jo=="function"&&jo instanceof jo&&typeof Qn=="function"&&Qn instanceof Qn)&&(Bt=!1)}return V.delete(c),V.delete(f),Bt}function Yi(c){return ri(lf(c,h,hf),c+"")}function Ua(c){return Sh(c,co,jd)}function Rd(c){return Sh(c,Ro,fm)}var rf=zn?function(c){return zn.get(c)}:iu;function sc(c){for(var f=c.name+"",k=po[f],T=Lt.call(po,f)?k.length:0;T--;){var L=k[T],V=L.func;if(V==null||V==c)return L.name}return f}function Ha(c){var f=Lt.call(z,"placeholder")?z:c;return f.placeholder}function ht(){var c=z.iteratee||ou;return c=c===ou?Td:c,arguments.length?c(arguments[0],arguments[1]):c}function zd(c,f){var k=c.__data__;return ac(f)?k[typeof f=="string"?"string":"hash"]:k.map}function sf(c){for(var f=co(c),k=f.length;k--;){var T=f[k],L=c[T];f[k]=[T,L,fe(L)]}return f}function Vs(c,f){var k=cd(c,f);return $e(k)?k:h}function Ww(c){var f=Lt.call(c,Rn),k=c[Rn];try{c[Rn]=h;var T=!0}catch{}var L=kn.call(c);return T&&(f?c[Rn]=k:delete c[Rn]),L}var jd=Wl?function(c){return c==null?[]:(c=Yt(c),di(Wl(c),function(f){return W.call(c,f)}))}:Hf,fm=Wl?function(c){for(var f=[];c;)_i(f,jd(c)),c=D(c);return f}:Hf,To=Do;(Xn&&To(new Xn(new ArrayBuffer(1)))!=_t||Gl&&To(new Gl)!=ce||bh&&To(bh.resolve())!=Ve||Ns&&To(new Ns)!=xe||Kl&&To(new Kl)!=st)&&(To=function(c){var f=Do(c),k=f==ze?c.constructor:h,T=k?Zi(k):"";if(T)switch(T){case Ui:return _t;case Hi:return ce;case Op:return Ve;case Lp:return xe;case kw:return st}return f});function Gw(c,f,k){for(var T=-1,L=k.length;++T<L;){var V=k[T],G=V.size;switch(V.type){case"drop":c+=G;break;case"dropRight":f-=G;break;case"take":f=Eo(f,c+G);break;case"takeRight":c=ut(c,f-G);break}}return{start:c,end:f}}function Kw(c){var f=c.match(ks);return f?f[1].split(Uu):[]}function Dr(c,f,k){f=Cr(f,c);for(var T=-1,L=f.length,V=!1;++T<L;){var G=Qi(f[T]);if(!(V=c!=null&&k(c,G)))break;c=c[G]}return V||++T!=L?V:(L=c==null?0:c.length,!!L&&fc(L)&&so(G,L)&&(At(c)||is(c)))}function es(c){var f=c.length,k=new c.constructor(f);return f&&typeof c[0]=="string"&&Lt.call(c,"index")&&(k.index=c.index,k.input=c.input),k}function qa(c){return typeof c.constructor=="function"&&!Us(c)?Bs(D(c)):{}}function bn(c,f,k){var T=c.constructor;switch(f){case Tt:return Qh(c);case Ue:case dt:return new T(+c);case _t:return jw(c,k);case rn:case qt:case wn:case Oi:case $n:case Wt:case sn:case io:case Li:return Zh(c,k);case ce:return new T;case me:case et:return new T(c);case Se:return Fw(c);case xe:return new T;case We:return Md(c)}}function Ai(c,f){var k=f.length;if(!k)return c;var T=k-1;return f[T]=(k>1?"& ":"")+f[T],f=f.join(k>2?", ":" "),c.replace(ma,`{
/* [wrapped with `+f+`] */
`)}function hn(c){return At(c)||is(c)||!!(lt&&c&&c[lt])}function so(c,f){var k=typeof c;return f=f==null?vt:f,!!f&&(k=="number"||k!="symbol"&&Ku.test(c))&&c>-1&&c%1==0&&c<f}function Hn(c,f,k){if(!Nn(k))return!1;var T=typeof f;return(T=="number"?Zo(k)&&so(f,k.length):T=="string"&&f in k)?Wn(k[f],c):!1}function Ie(c,f){if(At(c))return!1;var k=typeof c;return k=="number"||k=="symbol"||k=="boolean"||c==null||Lo(c)?!0:Fu.test(c)||!pa.test(c)||f!=null&&c in Yt(f)}function ac(c){var f=typeof c;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?c!=="__proto__":c===null}function Fd(c){var f=sc(c),k=z[f];if(typeof k!="function"||!(f in Rt.prototype))return!1;if(c===k)return!0;var T=rf(k);return!!T&&c===T[0]}function pm(c){return!!Ul&&Ul in c}var mm=wr?Ei:ru;function Us(c){var f=c&&c.constructor,k=typeof f=="function"&&f.prototype||Ct;return c===k}function fe(c){return c===c&&!Nn(c)}function af(c,f){return function(k){return k==null?!1:k[c]===f&&(f!==h||c in Yt(k))}}function Yw(c){var f=uc(c,function(T){return k.size===S&&k.clear(),T}),k=f.cache;return f}function $d(c,f){var k=c[1],T=f[1],L=k|T,V=L<(we|te|_e),G=T==_e&&k==ie||T==_e&&k==ue&&c[7].length<=f[8]||T==(_e|ue)&&f[7].length<=f[8]&&k==ie;if(!(V||G))return c;T&we&&(c[2]=f[2],L|=k&we?0:Y);var J=f[3];if(J){var re=c[3];c[3]=re?Jh(re,J,f[4]):J,c[4]=re?$i(c[3],P):f[4]}return J=f[5],J&&(re=c[5],c[5]=re?Xh(re,J,f[6]):J,c[6]=re?$i(c[5],P):f[6]),J=f[7],J&&(c[7]=J),T&_e&&(c[8]=c[8]==null?f[8]:Eo(c[8],f[8])),c[9]==null&&(c[9]=f[9]),c[0]=f[0],c[1]=L,c}function gm(c){var f=[];if(c!=null)for(var k in Yt(c))f.push(k);return f}function Qw(c){return kn.call(c)}function lf(c,f,k){return f=ut(f===h?c.length-1:f,0),function(){for(var T=arguments,L=-1,V=ut(T.length-f,0),G=de(V);++L<V;)G[L]=T[f+L];L=-1;for(var J=de(f+1);++L<f;)J[L]=T[L];return J[f]=k(G),Co(c,this,J)}}function Ci(c,f){return f.length<2?c:js(c,hi(f,0,-1))}function bm(c,f){for(var k=c.length,T=Eo(f.length,k),L=Bn(c);T--;){var V=f[T];c[T]=so(V,k)?L[V]:h}return c}function cf(c,f){if(!(f==="constructor"&&typeof c[f]=="function")&&f!="__proto__")return c[f]}var df=_m(Fh),Hs=Bp||function(c,f){return Un.setTimeout(c,f)},ri=_m($h);function wm(c,f,k){var T=f+"";return ri(c,Ai(T,km(Kw(T),k)))}function _m(c){var f=0,k=0;return function(){var T=Ba(),L=Xe-(T-k);if(k=T,L>0){if(++f>=Q)return arguments[0]}else f=0;return c.apply(h,arguments)}}function ts(c,f){var k=-1,T=c.length,L=T-1;for(f=f===h?T:f;++k<f;){var V=Lh(k,L),G=c[V];c[V]=c[k],c[k]=G}return c.length=f,c}var si=Yw(function(c){var f=[];return c.charCodeAt(0)===46&&f.push(""),c.replace($u,function(k,T,L,V){f.push(L?V.replace(sr,"$1"):T||k)}),f});function Qi(c){if(typeof c=="string"||Lo(c))return c;var f=c+"";return f=="0"&&1/c==-ot?"-0":f}function Zi(c){if(c!=null){try{return mn.call(c)}catch{}try{return c+""}catch{}}return""}function km(c,f){return xo(Dt,function(k){var T="_."+k[0];f&k[1]&&!Es(c,T)&&c.push(T)}),c.sort()}function ns(c){if(c instanceof Rt)return c.clone();var f=new ii(c.__wrapped__,c.__chain__);return f.__actions__=Bn(c.__actions__),f.__index__=c.__index__,f.__values__=c.__values__,f}function Zw(c,f,k){(k?Hn(c,f,k):f===h)?f=1:f=ut(St(f),0);var T=c==null?0:c.length;if(!T||f<1)return[];for(var L=0,V=0,G=de(Hl(T/f));L<T;)G[V++]=hi(c,L,L+=f);return G}function vm(c){for(var f=-1,k=c==null?0:c.length,T=0,L=[];++f<k;){var V=c[f];V&&(L[T++]=V)}return L}function ym(){var c=arguments.length;if(!c)return[];for(var f=de(c-1),k=arguments[0],T=c;T--;)f[T-1]=arguments[T];return _i(At(k)?Bn(k):[k],mo(f,1))}var Am=xt(function(c,f){return Gn(c)?Jl(c,mo(f,1,Gn,!0)):[]}),lc=xt(function(c,f){var k=So(f);return Gn(k)&&(k=h),Gn(c)?Jl(c,mo(f,1,Gn,!0),ht(k,2)):[]}),Cm=xt(function(c,f){var k=So(f);return Gn(k)&&(k=h),Gn(c)?Jl(c,mo(f,1,Gn,!0),h,k):[]});function xm(c,f,k){var T=c==null?0:c.length;return T?(f=k||f===h?1:St(f),hi(c,f<0?0:f,T)):[]}function uf(c,f,k){var T=c==null?0:c.length;return T?(f=k||f===h?1:St(f),f=T-f,hi(c,0,f<0?0:f)):[]}function Em(c,f){return c&&c.length?Qr(c,ht(f,3),!0,!0):[]}function Dm(c,f){return c&&c.length?Qr(c,ht(f,3),!0):[]}function Tm(c,f,k,T){var L=c==null?0:c.length;return L?(k&&typeof k!="number"&&Hn(c,f,k)&&(k=0,T=L),Up(c,f,k,T)):[]}function Sm(c,f,k){var T=c==null?0:c.length;if(!T)return-1;var L=k==null?0:St(k);return L<0&&(L=ut(T+L,0)),xa(c,ht(f,3),L)}function Im(c,f,k){var T=c==null?0:c.length;if(!T)return-1;var L=T-1;return k!==h&&(L=St(k),L=k<0?ut(T+L,0):Eo(L,T-1)),xa(c,ht(f,3),L,!0)}function hf(c){var f=c==null?0:c.length;return f?mo(c,1):[]}function Mm(c){var f=c==null?0:c.length;return f?mo(c,ot):[]}function Pm(c,f){var k=c==null?0:c.length;return k?(f=f===h?1:St(f),mo(c,f)):[]}function Jw(c){for(var f=-1,k=c==null?0:c.length,T={};++f<k;){var L=c[f];T[L[0]]=L[1]}return T}function ff(c){return c&&c.length?c[0]:h}function pf(c,f,k){var T=c==null?0:c.length;if(!T)return-1;var L=k==null?0:St(k);return L<0&&(L=ut(T+L,0)),ji(c,f,L)}function mf(c){var f=c==null?0:c.length;return f?hi(c,0,-1):[]}var Nm=xt(function(c){var f=En(c,Gh);return f.length&&f[0]===c[0]?Xl(f):[]}),Bm=xt(function(c){var f=So(c),k=En(c,Gh);return f===So(k)?f=h:k.pop(),k.length&&k[0]===c[0]?Xl(k,ht(f,2)):[]}),Om=xt(function(c){var f=So(c),k=En(c,Gh);return f=typeof f=="function"?f:h,f&&k.pop(),k.length&&k[0]===c[0]?Xl(k,h,f):[]});function Xw(c,f){return c==null?"":ww.call(c,f)}function So(c){var f=c==null?0:c.length;return f?c[f-1]:h}function Vd(c,f,k){var T=c==null?0:c.length;if(!T)return-1;var L=T;return k!==h&&(L=St(k),L=L<0?ut(T+L,0):Eo(L,T-1)),f===f?hh(c,f,L):xa(c,Vr,L,!0)}function e_(c,f){return c&&c.length?Yr(c,St(f)):h}var t_=xt(os);function os(c,f){return c&&c.length&&f&&f.length?za(c,f):c}function n_(c,f,k){return c&&c.length&&f&&f.length?za(c,f,ht(k,2)):c}function o_(c,f,k){return c&&c.length&&f&&f.length?za(c,f,h,k):c}var i_=Yi(function(c,f){var k=c==null?0:c.length,T=Eh(c,f);return Qp(c,En(f,function(L){return so(L,k)?+L:L}).sort(oc)),T});function r_(c,f){var k=[];if(!(c&&c.length))return k;var T=-1,L=[],V=c.length;for(f=ht(f,3);++T<V;){var G=c[T];f(G,T,c)&&(k.push(G),L.push(T))}return Qp(c,L),k}function gf(c){return c==null?c:gh.call(c)}function s_(c,f,k){var T=c==null?0:c.length;return T?(k&&typeof k!="number"&&Hn(c,f,k)?(f=0,k=T):(f=f==null?0:St(f),k=k===h?T:St(k)),hi(c,f,k)):[]}function a_(c,f){return ja(c,f)}function l_(c,f,k){return $s(c,f,ht(k,2))}function c_(c,f){var k=c==null?0:c.length;if(k){var T=ja(c,f);if(T<k&&Wn(c[T],f))return T}return-1}function qs(c,f){return ja(c,f,!0)}function d_(c,f,k){return $s(c,f,ht(k,2),!0)}function u_(c,f){var k=c==null?0:c.length;if(k){var T=ja(c,f,!0)-1;if(Wn(c[T],f))return T}return-1}function Lm(c){return c&&c.length?Vh(c):[]}function h_(c,f){return c&&c.length?Vh(c,ht(f,2)):[]}function f_(c){var f=c==null?0:c.length;return f?hi(c,1,f):[]}function p_(c,f,k){return c&&c.length?(f=k||f===h?1:St(f),hi(c,0,f<0?0:f)):[]}function m_(c,f,k){var T=c==null?0:c.length;return T?(f=k||f===h?1:St(f),f=T-f,hi(c,f<0?0:f,T)):[]}function g_(c,f){return c&&c.length?Qr(c,ht(f,3),!1,!0):[]}function bf(c,f){return c&&c.length?Qr(c,ht(f,3)):[]}var Rm=xt(function(c){return Ar(mo(c,1,Gn,!0))}),fi=xt(function(c){var f=So(c);return Gn(f)&&(f=h),Ar(mo(c,1,Gn,!0),ht(f,2))}),wf=xt(function(c){var f=So(c);return f=typeof f=="function"?f:h,Ar(mo(c,1,Gn,!0),h,f)});function zm(c){return c&&c.length?Ar(c):[]}function cc(c,f){return c&&c.length?Ar(c,ht(f,2)):[]}function jm(c,f){return f=typeof f=="function"?f:h,c&&c.length?Ar(c,h,f):[]}function Ws(c){if(!(c&&c.length))return[];var f=0;return c=di(c,function(k){if(Gn(k))return f=ut(k.length,f),!0}),Ol(f,function(k){return En(c,Ea(k))})}function Wa(c,f){if(!(c&&c.length))return[];var k=Ws(c);return f==null?k:En(k,function(T){return Co(f,h,T)})}var Fm=xt(function(c,f){return Gn(c)?Jl(c,f):[]}),Qt=xt(function(c){return qh(di(c,Gn))}),ao=xt(function(c){var f=So(c);return Gn(f)&&(f=h),qh(di(c,Gn),ht(f,2))}),Yo=xt(function(c){var f=So(c);return f=typeof f=="function"?f:h,qh(di(c,Gn),h,f)}),$m=xt(Ws);function qn(c,f){return Wh(c||[],f||[],Zl)}function lo(c,f){return Wh(c||[],f||[],nc)}var Qo=xt(function(c){var f=c.length,k=f>1?c[f-1]:h;return k=typeof k=="function"?(c.pop(),k):h,Wa(c,k)});function Ji(c){var f=z(c);return f.__chain__=!0,f}function jn(c,f){return f(c),c}function Jt(c,f){return f(c)}var xi=Yi(function(c){var f=c.length,k=f?c[0]:0,T=this.__wrapped__,L=function(V){return Eh(V,c)};return f>1||this.__actions__.length||!(T instanceof Rt)||!so(k)?this.thru(L):(T=T.slice(k,+k+(f?1:0)),T.__actions__.push({func:Jt,args:[L],thisArg:h}),new ii(T,this.__chain__).thru(function(V){return f&&!V.length&&V.push(h),V}))});function b_(){return Ji(this)}function _f(){return new ii(this.value(),this.__chain__)}function Kt(){this.__values__===h&&(this.__values__=Zd(this.value()));var c=this.__index__>=this.__values__.length,f=c?h:this.__values__[this.__index__++];return{done:c,value:f}}function w_(){return this}function Vm(c){for(var f,k=this;k instanceof Yl;){var T=ns(k);T.__index__=0,T.__values__=h,f?L.__wrapped__=T:f=T;var L=T;k=k.__wrapped__}return L.__wrapped__=c,f}function __(){var c=this.__wrapped__;if(c instanceof Rt){var f=c;return this.__actions__.length&&(f=new Rt(this)),f=f.reverse(),f.__actions__.push({func:Jt,args:[gf],thisArg:h}),new ii(f,this.__chain__)}return this.thru(gf)}function k_(){return Hh(this.__wrapped__,this.__actions__)}var Um=Pd(function(c,f,k){Lt.call(c,k)?++c[k]:kr(c,k,1)});function Hm(c,f,k){var T=At(c)?xs:zs;return k&&Hn(c,f,k)&&(f=h),T(c,ht(f,3))}function qm(c,f){var k=At(c)?di:Hp;return k(c,ht(f,3))}var Wm=sm(Sm),Ga=sm(Im);function bo(c,f){return mo(Ks(c,f),1)}function v_(c,f){return mo(Ks(c,f),ot)}function y_(c,f,k){return k=k===h?1:St(k),mo(Ks(c,f),k)}function Gs(c,f){var k=At(c)?xo:Wr;return k(c,ht(f,3))}function Gm(c,f){var k=At(c)?id:Vp;return k(c,ht(f,3))}var Km=Pd(function(c,f,k){Lt.call(c,k)?c[k].push(f):kr(c,k,[f])});function A_(c,f,k,T){c=Zo(c)?c:Zs(c),k=k&&!T?St(k):0;var L=c.length;return k<0&&(k=ut(L+k,0)),Kn(c)?k<=L&&c.indexOf(f,k)>-1:!!L&&ji(c,f,k)>-1}var C_=xt(function(c,f,k){var T=-1,L=typeof f=="function",V=Zo(c)?de(c.length):[];return Wr(c,function(G){V[++T]=L?Co(f,G,k):go(G,f,k)}),V}),x_=Pd(function(c,f,k){kr(c,k,f)});function Ks(c,f){var k=At(c)?En:La;return k(c,ht(f,3))}function kf(c,f,k,T){return c==null?[]:(At(f)||(f=f==null?[]:[f]),k=T?h:k,At(k)||(k=k==null?[]:[k]),Yp(c,f,k))}var E_=Pd(function(c,f,k){c[k?0:1].push(f)},function(){return[[],[]]});function Ym(c,f,k){var T=At(c)?Ds:Bl,L=arguments.length<3;return T(c,ht(f,4),k,L,Wr)}function D_(c,f,k){var T=At(c)?Aa:Bl,L=arguments.length<3;return T(c,ht(f,4),k,L,Vp)}function Ka(c,f){var k=At(c)?di:Hp;return k(c,qd(ht(f,3)))}function T_(c){var f=At(c)?Ah:Zp;return f(c)}function Tr(c,f,k){(k?Hn(c,f,k):f===h)?f=1:f=St(f);var T=At(c)?Pw:jh;return T(c,f)}function S_(c){var f=At(c)?Ch:Jp;return f(c)}function Qm(c){if(c==null)return 0;if(Zo(c))return Kn(c)?ui(c):c.length;var f=To(c);return f==ce||f==xe?c.size:Kr(c).length}function Zm(c,f,k){var T=At(c)?Ca:Xp;return k&&Hn(c,f,k)&&(f=h),T(c,ht(f,3))}var dc=xt(function(c,f){if(c==null)return[];var k=f.length;return k>1&&Hn(c,f[0],f[1])?f=[]:k>2&&Hn(f[0],f[1],f[2])&&(f=[f[0]]),Yp(c,mo(f,1),[])}),Ud=Na||function(){return Un.Date.now()};function Jm(c,f){if(typeof f!="function")throw new qo(_);return c=St(c),function(){if(--c<1)return f.apply(this,arguments)}}function Xm(c,f,k){return f=k?h:f,f=c&&f==null?c.length:f,Er(c,_e,h,h,h,h,f)}function eg(c,f){var k;if(typeof f!="function")throw new qo(_);return c=St(c),function(){return--c>0&&(k=f.apply(this,arguments)),c<=1&&(f=h),k}}var Hd=xt(function(c,f,k){var T=we;if(k.length){var L=$i(k,Ha(Hd));T|=U}return Er(c,T,f,k,L)}),vf=xt(function(c,f,k){var T=we|te;if(k.length){var L=$i(k,Ha(vf));T|=U}return Er(f,T,c,k,L)});function tg(c,f,k){f=k?h:f;var T=Er(c,ie,h,h,h,h,h,f);return T.placeholder=tg.placeholder,T}function yf(c,f,k){f=k?h:f;var T=Er(c,ke,h,h,h,h,h,f);return T.placeholder=yf.placeholder,T}function Af(c,f,k){var T,L,V,G,J,re,Ae=0,ye=!1,Be=!1,Je=!0;if(typeof c!="function")throw new qo(_);f=ai(f)||0,Nn(k)&&(ye=!!k.leading,Be="maxWait"in k,V=Be?ut(ai(k.maxWait)||0,f):V,Je="trailing"in k?!!k.trailing:Je);function Ke(yn){var uo=T,er=L;return T=L=h,Ae=yn,G=c.apply(er,uo),G}function ft(yn){return Ae=yn,J=Hs(Ot,f),ye?Ke(yn):G}function Bt(yn){var uo=yn-re,er=yn-Ae,rb=f-uo;return Be?Eo(rb,V-er):rb}function mt(yn){var uo=yn-re,er=yn-Ae;return re===h||uo>=f||uo<0||Be&&er>=V}function Ot(){var yn=Ud();if(mt(yn))return jt(yn);J=Hs(Ot,Bt(yn))}function jt(yn){return J=h,Je&&T?Ke(yn):(T=L=h,G)}function Jo(){J!==h&&tm(J),Ae=0,T=re=L=J=h}function jo(){return J===h?G:jt(Ud())}function Qn(){var yn=Ud(),uo=mt(yn);if(T=arguments,L=this,re=yn,uo){if(J===h)return ft(re);if(Be)return tm(J),J=Hs(Ot,f),Ke(re)}return J===h&&(J=Hs(Ot,f)),G}return Qn.cancel=Jo,Qn.flush=jo,Qn}var Cf=xt(function(c,f){return Cd(c,1,f)}),ng=xt(function(c,f,k){return Cd(c,ai(f)||0,k)});function og(c){return Er(c,Me)}function uc(c,f){if(typeof c!="function"||f!=null&&typeof f!="function")throw new qo(_);var k=function(){var T=arguments,L=f?f.apply(this,T):T[0],V=k.cache;if(V.has(L))return V.get(L);var G=c.apply(this,T);return k.cache=V.set(L,G)||V,G};return k.cache=new(uc.Cache||ro),k}uc.Cache=ro;function qd(c){if(typeof c!="function")throw new qo(_);return function(){var f=arguments;switch(f.length){case 0:return!c.call(this);case 1:return!c.call(this,f[0]);case 2:return!c.call(this,f[0],f[1]);case 3:return!c.call(this,f[0],f[1],f[2])}return!c.apply(this,f)}}function ig(c){return eg(2,c)}var I_=em(function(c,f){f=f.length==1&&At(f[0])?En(f[0],No(ht())):En(mo(f,1),No(ht()));var k=f.length;return xt(function(T){for(var L=-1,V=Eo(T.length,k);++L<V;)T[L]=f[L].call(this,T[L]);return Co(c,this,T)})}),xf=xt(function(c,f){var k=$i(f,Ha(xf));return Er(c,U,h,f,k)}),rg=xt(function(c,f){var k=$i(f,Ha(rg));return Er(c,Pe,h,f,k)}),M_=Yi(function(c,f){return Er(c,ue,h,h,h,f)});function P_(c,f){if(typeof c!="function")throw new qo(_);return f=f===h?f:St(f),xt(c,f)}function N_(c,f){if(typeof c!="function")throw new qo(_);return f=f==null?0:ut(St(f),0),xt(function(k){var T=k[f],L=xr(k,0,f);return T&&_i(L,T),Co(c,this,L)})}function B_(c,f,k){var T=!0,L=!0;if(typeof c!="function")throw new qo(_);return Nn(k)&&(T="leading"in k?!!k.leading:T,L="trailing"in k?!!k.trailing:L),Af(c,f,{leading:T,maxWait:f,trailing:L})}function Ef(c){return Xm(c,1)}function Ya(c,f){return xf(Kh(f),c)}function O_(){if(!arguments.length)return[];var c=arguments[0];return At(c)?c:[c]}function L_(c){return Wo(c,F)}function R_(c,f){return f=typeof f=="function"?f:h,Wo(c,F,f)}function z_(c){return Wo(c,N|F)}function Df(c,f){return f=typeof f=="function"?f:h,Wo(c,N|F,f)}function Ys(c,f){return f==null||$p(c,f,co(f))}function Wn(c,f){return c===f||c!==c&&f!==f}var hc=Od(Ih),j_=Od(function(c,f){return c>=f}),is=Ph(function(){return arguments}())?Ph:function(c){return On(c)&&Lt.call(c,"callee")&&!W.call(c,"callee")},At=de.isArray,sg=Xc?No(Xc):ec;function Zo(c){return c!=null&&fc(c.length)&&!Ei(c)}function Gn(c){return On(c)&&Zo(c)}function F_(c){return c===!0||c===!1||On(c)&&Do(c)==Ue}var Sr=bw||ru,ag=ed?No(ed):Wp;function lg(c){return On(c)&&c.nodeType===1&&!Qa(c)}function cg(c){if(c==null)return!0;if(Zo(c)&&(At(c)||typeof c=="string"||typeof c.splice=="function"||Sr(c)||Za(c)||is(c)))return!c.length;var f=To(c);if(f==ce||f==xe)return!c.size;if(Us(c))return!Kr(c).length;for(var k in c)if(Lt.call(c,k))return!1;return!0}function dg(c,f){return Gr(c,f)}function ug(c,f,k){k=typeof k=="function"?k:h;var T=k?k(c,f):h;return T===h?Gr(c,f,h,k):!!T}function rs(c){if(!On(c))return!1;var f=Do(c);return f==Qe||f==$t||typeof c.message=="string"&&typeof c.name=="string"&&!Qa(c)}function Wd(c){return typeof c=="number"&&fh(c)}function Ei(c){if(!Nn(c))return!1;var f=Do(c);return f==q||f==Z||f==Ne||f==ve}function Gd(c){return typeof c=="number"&&c==St(c)}function fc(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=vt}function Nn(c){var f=typeof c;return c!=null&&(f=="object"||f=="function")}function On(c){return c!=null&&typeof c=="object"}var hg=td?No(td):Kp;function zt(c,f){return c===f||yr(c,f,sf(f))}function fg(c,f,k){return k=typeof k=="function"?k:h,yr(c,f,sf(f),k)}function $_(c){return Kd(c)&&c!=+c}function pg(c){if(mm(c))throw new yt(C);return $e(c)}function mg(c){return c===null}function Oo(c){return c==null}function Kd(c){return typeof c=="number"||On(c)&&Do(c)==me}function Qa(c){if(!On(c)||Do(c)!=ze)return!1;var f=D(c);if(f===null)return!0;var k=Lt.call(f,"constructor")&&f.constructor;return typeof k=="function"&&k instanceof k&&mn.call(k)==Pa}var Yd=ya?No(ya):bt;function V_(c){return Gd(c)&&c>=-vt&&c<=vt}var Tf=zi?No(zi):Dd;function Kn(c){return typeof c=="string"||!At(c)&&On(c)&&Do(c)==et}function Lo(c){return typeof c=="symbol"||On(c)&&Do(c)==We}var Za=nd?No(nd):Ki;function gg(c){return c===h}function Qd(c){return On(c)&&To(c)==st}function Sf(c){return On(c)&&Do(c)==Ze}var bg=Od(tc),Yn=Od(function(c,f){return c<=f});function Zd(c){if(!c)return[];if(Zo(c))return Kn(c)?oi(c):Bn(c);if(Dn&&c[Dn])return ud(c[Dn]());var f=To(c),k=f==ce?Fl:f==xe?Is:Zs;return k(c)}function Di(c){if(!c)return c===0?c:0;if(c=ai(c),c===ot||c===-ot){var f=c<0?-1:1;return f*no}return c===c?c:0}function St(c){var f=Di(c),k=f%1;return f===f?k?f-k:f:0}function wg(c){return c?Gi(St(c),0,cn):0}function ai(c){if(typeof c=="number")return c;if(Lo(c))return Fn;if(Nn(c)){var f=typeof c.valueOf=="function"?c.valueOf():c;c=Nn(f)?f+"":f}if(typeof c!="string")return c===0?c:+c;c=Ll(c);var k=Gu.test(c);return k||Nt.test(c)?lh(c.slice(2),k?2:8):Wu.test(c)?Fn:+c}function _g(c){return yi(c,Ro(c))}function Qs(c){return c?Gi(St(c),-vt,vt):c===0?c:0}function Xt(c){return c==null?"":Go(c)}var U_=Jr(function(c,f){if(Us(f)||Zo(f)){yi(f,co(f),c);return}for(var k in f)Lt.call(f,k)&&Zl(c,k,f[k])}),vn=Jr(function(c,f){yi(f,Ro(f),c)}),pc=Jr(function(c,f,k,T){yi(f,Ro(f),c,T)}),H_=Jr(function(c,f,k,T){yi(f,co(f),c,T)}),Jd=Yi(Eh);function kg(c,f){var k=Bs(c);return f==null?k:xh(k,f)}var q_=xt(function(c,f){c=Yt(c);var k=-1,T=f.length,L=T>2?f[2]:h;for(L&&Hn(f[0],f[1],L)&&(T=1);++k<T;)for(var V=f[k],G=Ro(V),J=-1,re=G.length;++J<re;){var Ae=G[J],ye=c[Ae];(ye===h||Wn(ye,Ct[Ae])&&!Lt.call(c,Ae))&&(c[Ae]=V[Ae])}return c}),vg=xt(function(c){return c.push(h,Ld),Co(Eg,h,c)});function W_(c,f){return Ts(c,ht(f,3),vr)}function yg(c,f){return Ts(c,ht(f,3),Th)}function G_(c,f){return c==null?c:Dh(c,ht(f,3),Ro)}function If(c,f){return c==null?c:qp(c,ht(f,3),Ro)}function K_(c,f){return c&&vr(c,ht(f,3))}function Ag(c,f){return c&&Th(c,ht(f,3))}function Y_(c){return c==null?[]:Ed(c,co(c))}function Ja(c){return c==null?[]:Ed(c,Ro(c))}function ss(c,f,k){var T=c==null?h:js(c,f);return T===h?k:T}function Mf(c,f){return c!=null&&Dr(c,f,Ow)}function Xd(c,f){return c!=null&&Dr(c,f,Lw)}var Q_=am(function(c,f,k){f!=null&&typeof f.toString!="function"&&(f=kn.call(f)),c[f]=k},$f(zo)),Cg=am(function(c,f,k){f!=null&&typeof f.toString!="function"&&(f=kn.call(f)),Lt.call(c,f)?c[f].push(k):c[f]=[k]},ht),xg=xt(go);function co(c){return Zo(c)?yh(c):Kr(c)}function Ro(c){return Zo(c)?yh(c,!0):Nh(c)}function Z_(c,f){var k={};return f=ht(f,3),vr(c,function(T,L,V){kr(k,f(T,L,V),T)}),k}function Pf(c,f){var k={};return f=ht(f,3),vr(c,function(T,L,V){kr(k,L,f(T,L,V))}),k}var J_=Jr(function(c,f,k){Ra(c,f,k)}),Eg=Jr(function(c,f,k,T){Ra(c,f,k,T)}),X_=Yi(function(c,f){var k={};if(c==null)return k;var T=!1;f=En(f,function(V){return V=Cr(V,c),T||(T=V.length>1),V}),yi(c,Rd(c),k),T&&(k=Wo(k,N|M|F,Hw));for(var L=f.length;L--;)Fa(k,f[L]);return k});function Dg(c,f){return Tg(c,qd(ht(f)))}var ek=Yi(function(c,f){return c==null?{}:Oh(c,f)});function Tg(c,f){if(c==null)return{};var k=En(Rd(c),function(T){return[T]});return f=ht(f),Id(c,k,function(T,L){return f(T,L[0])})}function Sg(c,f,k){f=Cr(f,c);var T=-1,L=f.length;for(L||(L=1,c=h);++T<L;){var V=c==null?h:c[Qi(f[T])];V===h&&(T=L,V=k),c=Ei(V)?V.call(c):V}return c}function tk(c,f,k){return c==null?c:nc(c,f,k)}function Ig(c,f,k,T){return T=typeof T=="function"?T:h,c==null?c:nc(c,f,k,T)}var Mg=dm(co),Nf=dm(Ro);function nk(c,f,k){var T=At(c),L=T||Sr(c)||Za(c);if(f=ht(f,4),k==null){var V=c&&c.constructor;L?k=T?new V:[]:Nn(c)?k=Ei(V)?Bs(D(c)):{}:k={}}return(L?xo:vr)(c,function(G,J,re){return f(k,G,J,re)}),k}function as(c,f){return c==null?!0:Fa(c,f)}function Bf(c,f,k){return c==null?c:Ko(c,f,Kh(k))}function Pg(c,f,k,T){return T=typeof T=="function"?T:h,c==null?c:Ko(c,f,Kh(k),T)}function Zs(c){return c==null?[]:Rl(c,co(c))}function Ng(c){return c==null?[]:Rl(c,Ro(c))}function ok(c,f,k){return k===h&&(k=f,f=h),k!==h&&(k=ai(k),k=k===k?k:0),f!==h&&(f=ai(f),f=f===f?f:0),Gi(ai(c),f,k)}function ik(c,f,k){return f=Di(f),k===h?(k=f,f=0):k=Di(k),c=ai(c),Rw(c,f,k)}function Bg(c,f,k){if(k&&typeof k!="boolean"&&Hn(c,f,k)&&(f=k=h),k===h&&(typeof f=="boolean"?(k=f,f=h):typeof c=="boolean"&&(k=c,c=h)),c===h&&f===h?(c=0,f=1):(c=Di(c),f===h?(f=c,c=0):f=Di(f)),c>f){var T=c;c=f,f=T}if(k||c%1||f%1){var L=mh();return Eo(c+L*(f-c+Il("1e-"+((L+"").length-1))),f)}return Lh(c,f)}var rk=Va(function(c,f,k){return f=f.toLowerCase(),c+(k?Of(f):f)});function Of(c){return jf(Xt(c).toLowerCase())}function Og(c){return c=Xt(c),c&&c.replace(Yu,Sa).replace(Qc,"")}function sk(c,f,k){c=Xt(c),f=Go(f);var T=c.length;k=k===h?T:Gi(St(k),0,T);var L=k;return k-=f.length,k>=0&&c.slice(k,L)==f}function ak(c){return c=Xt(c),c&&zu.test(c)?c.replace(kt,jl):c}function Lg(c){return c=Xt(c),c&&Vu.test(c)?c.replace(yl,"\\$&"):c}var lk=Va(function(c,f,k){return c+(k?"-":"")+f.toLowerCase()}),Rg=Va(function(c,f,k){return c+(k?" ":"")+f.toLowerCase()}),ck=rm("toLowerCase");function dk(c,f,k){c=Xt(c),f=St(f);var T=f?ui(c):0;if(!f||T>=f)return c;var L=(f-T)/2;return Bd(ql(L),k)+c+Bd(Hl(L),k)}function uk(c,f,k){c=Xt(c),f=St(f);var T=f?ui(c):0;return f&&T<f?c+Bd(f-T,k):c}function zg(c,f,k){c=Xt(c),f=St(f);var T=f?ui(c):0;return f&&T<f?Bd(f-T,k)+c:c}function hk(c,f,k){return k||f==null?f=0:f&&(f=+f),ph(Xt(c).replace(_s,""),f||0)}function Lf(c,f,k){return(k?Hn(c,f,k):f===h)?f=1:f=St(f),zh(Xt(c),f)}function Rf(){var c=arguments,f=Xt(c[0]);return c.length<3?f:f.replace(c[1],c[2])}var zf=Va(function(c,f,k){return c+(k?"_":"")+f.toLowerCase()});function jg(c,f,k){return k&&typeof k!="number"&&Hn(c,f,k)&&(f=k=h),k=k===h?cn:k>>>0,k?(c=Xt(c),c&&(typeof f=="string"||f!=null&&!Yd(f))&&(f=Go(f),!f&&Fi(c))?xr(oi(c),0,k):c.split(f,k)):[]}var Fg=Va(function(c,f,k){return c+(k?" ":"")+jf(f)});function fk(c,f,k){return c=Xt(c),k=k==null?0:Gi(St(k),0,c.length),f=Go(f),c.slice(k,k+f.length)==f}function $g(c,f,k){var T=z.templateSettings;k&&Hn(c,f,k)&&(f=h),c=Xt(c),f=pc({},f,T,of);var L=pc({},f.imports,T.imports,of),V=co(L),G=Rl(L,V),J,re,Ae=0,ye=f.interpolate||ga,Be="__p += '",Je=Ma((f.escape||ga).source+"|"+ye.source+"|"+(ye===Ho?vs:ga).source+"|"+(f.evaluate||ga).source+"|$","g"),Ke="//# sourceURL="+(Lt.call(f,"sourceURL")?(f.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ah+"]")+`
`;c.replace(Je,function(mt,Ot,jt,Jo,jo,Qn){return jt||(jt=Jo),Be+=c.slice(Ae,Qn).replace(Qu,uh),Ot&&(J=!0,Be+=`' +
__e(`+Ot+`) +
'`),jo&&(re=!0,Be+=`';
`+jo+`;
__p += '`),jt&&(Be+=`' +
((__t = (`+jt+`)) == null ? '' : __t) +
'`),Ae=Qn+mt.length,mt}),Be+=`';
`;var ft=Lt.call(f,"variable")&&f.variable;if(!ft)Be=`with (obj) {
`+Be+`
}
`;else if(qu.test(ft))throw new yt(v);Be=(re?Be.replace(fa,""):Be).replace(vl,"$1").replace(Rc,"$1;"),Be="function("+(ft||"obj")+`) {
`+(ft?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(J?", __e = _.escape":"")+(re?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Be+`return __p
}`;var Bt=Ug(function(){return Gt(V,Ke+"return "+Be).apply(h,G)});if(Bt.source=Be,rs(Bt))throw Bt;return Bt}function pk(c){return Xt(c).toLowerCase()}function eu(c){return Xt(c).toUpperCase()}function tu(c,f,k){if(c=Xt(c),c&&(k||f===h))return Ll(c);if(!c||!(f=Go(f)))return c;var T=oi(c),L=oi(f),V=Ur(T,L),G=zl(T,L)+1;return xr(T,V,G).join("")}function mk(c,f,k){if(c=Xt(c),c&&(k||f===h))return c.slice(0,hd(c)+1);if(!c||!(f=Go(f)))return c;var T=oi(c),L=zl(T,oi(f))+1;return xr(T,0,L).join("")}function gk(c,f,k){if(c=Xt(c),c&&(k||f===h))return c.replace(_s,"");if(!c||!(f=Go(f)))return c;var T=oi(c),L=Ur(T,oi(f));return xr(T,L).join("")}function Vg(c,f){var k=Fe,T=Ge;if(Nn(f)){var L="separator"in f?f.separator:L;k="length"in f?St(f.length):k,T="omission"in f?Go(f.omission):T}c=Xt(c);var V=c.length;if(Fi(c)){var G=oi(c);V=G.length}if(k>=V)return c;var J=k-ui(T);if(J<1)return T;var re=G?xr(G,0,J).join(""):c.slice(0,J);if(L===h)return re+T;if(G&&(J+=re.length-J),Yd(L)){if(c.slice(J).search(L)){var Ae,ye=re;for(L.global||(L=Ma(L.source,Xt(Al.exec(L))+"g")),L.lastIndex=0;Ae=L.exec(ye);)var Be=Ae.index;re=re.slice(0,Be===h?J:Be)}}else if(c.indexOf(Go(L),J)!=J){var Je=re.lastIndexOf(L);Je>-1&&(re=re.slice(0,Je))}return re+T}function bk(c){return c=Xt(c),c&&Ru.test(c)?c.replace(zc,fd):c}var mc=Va(function(c,f,k){return c+(k?" ":"")+f.toUpperCase()}),jf=rm("toUpperCase");function Ff(c,f,k){return c=Xt(c),f=k?h:f,f===h?dd(c)?gd(c):sd(c):c.match(f)||[]}var Ug=xt(function(c,f){try{return Co(c,h,f)}catch(k){return rs(k)?k:new yt(k)}}),wk=Yi(function(c,f){return xo(f,function(k){k=Qi(k),kr(c,k,Hd(c[k],c))}),c});function Hg(c){var f=c==null?0:c.length,k=ht();return c=f?En(c,function(T){if(typeof T[1]!="function")throw new qo(_);return[k(T[0]),T[1]]}):[],xt(function(T){for(var L=-1;++L<f;){var V=c[L];if(Co(V[0],this,T))return Co(V[1],this,T)}})}function _k(c){return Bw(Wo(c,N))}function $f(c){return function(){return c}}function kk(c,f){return c==null||c!==c?f:c}var nu=ef(),Vf=ef(!0);function zo(c){return c}function ou(c){return Td(typeof c=="function"?c:Wo(c,N))}function Xi(c){return Fs(Wo(c,N))}function qg(c,f){return Bh(c,Wo(f,N))}var vk=xt(function(c,f){return function(k){return go(k,c,f)}}),Wg=xt(function(c,f){return function(k){return go(c,k,f)}});function Uf(c,f,k){var T=co(f),L=Ed(f,T);k==null&&!(Nn(f)&&(L.length||!T.length))&&(k=f,f=c,c=this,L=Ed(f,co(f)));var V=!(Nn(k)&&"chain"in k)||!!k.chain,G=Ei(c);return xo(L,function(J){var re=f[J];c[J]=re,G&&(c.prototype[J]=function(){var Ae=this.__chain__;if(V||Ae){var ye=c(this.__wrapped__),Be=ye.__actions__=Bn(this.__actions__);return Be.push({func:re,args:arguments,thisArg:c}),ye.__chain__=Ae,ye}return re.apply(c,_i([this.value()],arguments))})}),c}function Gg(){return Un._===this&&(Un._=wd),this}function iu(){}function Kg(c){return c=St(c),xt(function(f){return Yr(f,c)})}var Yg=tf(En),ls=tf(xs),Xa=tf(Ca);function el(c){return Ie(c)?Ea(Qi(c)):zw(c)}function Qg(c){return function(f){return c==null?h:js(c,f)}}var yk=rc(),cs=rc(!0);function Hf(){return[]}function ru(){return!1}function Zg(){return{}}function Jg(){return""}function qf(){return!0}function Wf(c,f){if(c=St(c),c<1||c>vt)return[];var k=cn,T=Eo(c,cn);f=ht(f),c-=cn;for(var L=Ol(T,f);++k<c;)f(k);return L}function su(c){return At(c)?En(c,Qi):Lo(c)?[c]:Bn(si(Xt(c)))}function au(c){var f=++_r;return Xt(c)+f}var Xg=Xr(function(c,f){return c+f},0),Ak=nf("ceil"),Ck=Xr(function(c,f){return c/f},1),eb=nf("floor");function tb(c){return c&&c.length?xd(c,zo,Ih):h}function xk(c,f){return c&&c.length?xd(c,ht(f,2),Ih):h}function Ek(c){return Ss(c,zo)}function Dk(c,f){return Ss(c,ht(f,2))}function Tk(c){return c&&c.length?xd(c,zo,tc):h}function tl(c,f){return c&&c.length?xd(c,ht(f,2),tc):h}var nl=Xr(function(c,f){return c*f},1),nb=nf("round"),ob=Xr(function(c,f){return c-f},0);function Sk(c){return c&&c.length?Ta(c,zo):0}function ib(c,f){return c&&c.length?Ta(c,ht(f,2)):0}return z.after=Jm,z.ary=Xm,z.assign=U_,z.assignIn=vn,z.assignInWith=pc,z.assignWith=H_,z.at=Jd,z.before=eg,z.bind=Hd,z.bindAll=wk,z.bindKey=vf,z.castArray=O_,z.chain=Ji,z.chunk=Zw,z.compact=vm,z.concat=ym,z.cond=Hg,z.conforms=_k,z.constant=$f,z.countBy=Um,z.create=kg,z.curry=tg,z.curryRight=yf,z.debounce=Af,z.defaults=q_,z.defaultsDeep=vg,z.defer=Cf,z.delay=ng,z.difference=Am,z.differenceBy=lc,z.differenceWith=Cm,z.drop=xm,z.dropRight=uf,z.dropRightWhile=Em,z.dropWhile=Dm,z.fill=Tm,z.filter=qm,z.flatMap=bo,z.flatMapDeep=v_,z.flatMapDepth=y_,z.flatten=hf,z.flattenDeep=Mm,z.flattenDepth=Pm,z.flip=og,z.flow=nu,z.flowRight=Vf,z.fromPairs=Jw,z.functions=Y_,z.functionsIn=Ja,z.groupBy=Km,z.initial=mf,z.intersection=Nm,z.intersectionBy=Bm,z.intersectionWith=Om,z.invert=Q_,z.invertBy=Cg,z.invokeMap=C_,z.iteratee=ou,z.keyBy=x_,z.keys=co,z.keysIn=Ro,z.map=Ks,z.mapKeys=Z_,z.mapValues=Pf,z.matches=Xi,z.matchesProperty=qg,z.memoize=uc,z.merge=J_,z.mergeWith=Eg,z.method=vk,z.methodOf=Wg,z.mixin=Uf,z.negate=qd,z.nthArg=Kg,z.omit=X_,z.omitBy=Dg,z.once=ig,z.orderBy=kf,z.over=Yg,z.overArgs=I_,z.overEvery=ls,z.overSome=Xa,z.partial=xf,z.partialRight=rg,z.partition=E_,z.pick=ek,z.pickBy=Tg,z.property=el,z.propertyOf=Qg,z.pull=t_,z.pullAll=os,z.pullAllBy=n_,z.pullAllWith=o_,z.pullAt=i_,z.range=yk,z.rangeRight=cs,z.rearg=M_,z.reject=Ka,z.remove=r_,z.rest=P_,z.reverse=gf,z.sampleSize=Tr,z.set=tk,z.setWith=Ig,z.shuffle=S_,z.slice=s_,z.sortBy=dc,z.sortedUniq=Lm,z.sortedUniqBy=h_,z.split=jg,z.spread=N_,z.tail=f_,z.take=p_,z.takeRight=m_,z.takeRightWhile=g_,z.takeWhile=bf,z.tap=jn,z.throttle=B_,z.thru=Jt,z.toArray=Zd,z.toPairs=Mg,z.toPairsIn=Nf,z.toPath=su,z.toPlainObject=_g,z.transform=nk,z.unary=Ef,z.union=Rm,z.unionBy=fi,z.unionWith=wf,z.uniq=zm,z.uniqBy=cc,z.uniqWith=jm,z.unset=as,z.unzip=Ws,z.unzipWith=Wa,z.update=Bf,z.updateWith=Pg,z.values=Zs,z.valuesIn=Ng,z.without=Fm,z.words=Ff,z.wrap=Ya,z.xor=Qt,z.xorBy=ao,z.xorWith=Yo,z.zip=$m,z.zipObject=qn,z.zipObjectDeep=lo,z.zipWith=Qo,z.entries=Mg,z.entriesIn=Nf,z.extend=vn,z.extendWith=pc,Uf(z,z),z.add=Xg,z.attempt=Ug,z.camelCase=rk,z.capitalize=Of,z.ceil=Ak,z.clamp=ok,z.clone=L_,z.cloneDeep=z_,z.cloneDeepWith=Df,z.cloneWith=R_,z.conformsTo=Ys,z.deburr=Og,z.defaultTo=kk,z.divide=Ck,z.endsWith=sk,z.eq=Wn,z.escape=ak,z.escapeRegExp=Lg,z.every=Hm,z.find=Wm,z.findIndex=Sm,z.findKey=W_,z.findLast=Ga,z.findLastIndex=Im,z.findLastKey=yg,z.floor=eb,z.forEach=Gs,z.forEachRight=Gm,z.forIn=G_,z.forInRight=If,z.forOwn=K_,z.forOwnRight=Ag,z.get=ss,z.gt=hc,z.gte=j_,z.has=Mf,z.hasIn=Xd,z.head=ff,z.identity=zo,z.includes=A_,z.indexOf=pf,z.inRange=ik,z.invoke=xg,z.isArguments=is,z.isArray=At,z.isArrayBuffer=sg,z.isArrayLike=Zo,z.isArrayLikeObject=Gn,z.isBoolean=F_,z.isBuffer=Sr,z.isDate=ag,z.isElement=lg,z.isEmpty=cg,z.isEqual=dg,z.isEqualWith=ug,z.isError=rs,z.isFinite=Wd,z.isFunction=Ei,z.isInteger=Gd,z.isLength=fc,z.isMap=hg,z.isMatch=zt,z.isMatchWith=fg,z.isNaN=$_,z.isNative=pg,z.isNil=Oo,z.isNull=mg,z.isNumber=Kd,z.isObject=Nn,z.isObjectLike=On,z.isPlainObject=Qa,z.isRegExp=Yd,z.isSafeInteger=V_,z.isSet=Tf,z.isString=Kn,z.isSymbol=Lo,z.isTypedArray=Za,z.isUndefined=gg,z.isWeakMap=Qd,z.isWeakSet=Sf,z.join=Xw,z.kebabCase=lk,z.last=So,z.lastIndexOf=Vd,z.lowerCase=Rg,z.lowerFirst=ck,z.lt=bg,z.lte=Yn,z.max=tb,z.maxBy=xk,z.mean=Ek,z.meanBy=Dk,z.min=Tk,z.minBy=tl,z.stubArray=Hf,z.stubFalse=ru,z.stubObject=Zg,z.stubString=Jg,z.stubTrue=qf,z.multiply=nl,z.nth=e_,z.noConflict=Gg,z.noop=iu,z.now=Ud,z.pad=dk,z.padEnd=uk,z.padStart=zg,z.parseInt=hk,z.random=Bg,z.reduce=Ym,z.reduceRight=D_,z.repeat=Lf,z.replace=Rf,z.result=Sg,z.round=nb,z.runInContext=ne,z.sample=T_,z.size=Qm,z.snakeCase=zf,z.some=Zm,z.sortedIndex=a_,z.sortedIndexBy=l_,z.sortedIndexOf=c_,z.sortedLastIndex=qs,z.sortedLastIndexBy=d_,z.sortedLastIndexOf=u_,z.startCase=Fg,z.startsWith=fk,z.subtract=ob,z.sum=Sk,z.sumBy=ib,z.template=$g,z.times=Wf,z.toFinite=Di,z.toInteger=St,z.toLength=wg,z.toLower=pk,z.toNumber=ai,z.toSafeInteger=Qs,z.toString=Xt,z.toUpper=eu,z.trim=tu,z.trimEnd=mk,z.trimStart=gk,z.truncate=Vg,z.unescape=bk,z.uniqueId=au,z.upperCase=mc,z.upperFirst=jf,z.each=Gs,z.eachRight=Gm,z.first=ff,Uf(z,function(){var c={};return vr(z,function(f,k){Lt.call(z.prototype,k)||(c[k]=f)}),c}(),{chain:!1}),z.VERSION=g,xo(["bind","bindKey","curry","curryRight","partial","partialRight"],function(c){z[c].placeholder=z}),xo(["drop","take"],function(c,f){Rt.prototype[c]=function(k){k=k===h?1:ut(St(k),0);var T=this.__filtered__&&!f?new Rt(this):this.clone();return T.__filtered__?T.__takeCount__=Eo(k,T.__takeCount__):T.__views__.push({size:Eo(k,cn),type:c+(T.__dir__<0?"Right":"")}),T},Rt.prototype[c+"Right"]=function(k){return this.reverse()[c](k).reverse()}}),xo(["filter","map","takeWhile"],function(c,f){var k=f+1,T=k==Le||k==Ye;Rt.prototype[c]=function(L){var V=this.clone();return V.__iteratees__.push({iteratee:ht(L,3),type:k}),V.__filtered__=V.__filtered__||T,V}}),xo(["head","last"],function(c,f){var k="take"+(f?"Right":"");Rt.prototype[c]=function(){return this[k](1).value()[0]}}),xo(["initial","tail"],function(c,f){var k="drop"+(f?"":"Right");Rt.prototype[c]=function(){return this.__filtered__?new Rt(this):this[k](1)}}),Rt.prototype.compact=function(){return this.filter(zo)},Rt.prototype.find=function(c){return this.filter(c).head()},Rt.prototype.findLast=function(c){return this.reverse().find(c)},Rt.prototype.invokeMap=xt(function(c,f){return typeof c=="function"?new Rt(this):this.map(function(k){return go(k,c,f)})}),Rt.prototype.reject=function(c){return this.filter(qd(ht(c)))},Rt.prototype.slice=function(c,f){c=St(c);var k=this;return k.__filtered__&&(c>0||f<0)?new Rt(k):(c<0?k=k.takeRight(-c):c&&(k=k.drop(c)),f!==h&&(f=St(f),k=f<0?k.dropRight(-f):k.take(f-c)),k)},Rt.prototype.takeRightWhile=function(c){return this.reverse().takeWhile(c).reverse()},Rt.prototype.toArray=function(){return this.take(cn)},vr(Rt.prototype,function(c,f){var k=/^(?:filter|find|map|reject)|While$/.test(f),T=/^(?:head|last)$/.test(f),L=z[T?"take"+(f=="last"?"Right":""):f],V=T||/^find/.test(f);!L||(z.prototype[f]=function(){var G=this.__wrapped__,J=T?[1]:arguments,re=G instanceof Rt,Ae=J[0],ye=re||At(G),Be=function(Ot){var jt=L.apply(z,_i([Ot],J));return T&&Je?jt[0]:jt};ye&&k&&typeof Ae=="function"&&Ae.length!=1&&(re=ye=!1);var Je=this.__chain__,Ke=!!this.__actions__.length,ft=V&&!Je,Bt=re&&!Ke;if(!V&&ye){G=Bt?G:new Rt(this);var mt=c.apply(G,J);return mt.__actions__.push({func:Jt,args:[Be],thisArg:h}),new ii(mt,Je)}return ft&&Bt?c.apply(this,J):(mt=this.thru(Be),ft?T?mt.value()[0]:mt.value():mt)})}),xo(["pop","push","shift","sort","splice","unshift"],function(c){var f=Ps[c],k=/^(?:push|sort|unshift)$/.test(c)?"tap":"thru",T=/^(?:pop|shift)$/.test(c);z.prototype[c]=function(){var L=arguments;if(T&&!this.__chain__){var V=this.value();return f.apply(At(V)?V:[],L)}return this[k](function(G){return f.apply(At(G)?G:[],L)})}}),vr(Rt.prototype,function(c,f){var k=z[f];if(k){var T=k.name+"";Lt.call(po,T)||(po[T]=[]),po[T].push({name:f,func:k})}}),po[Nd(h,te).name]=[{name:"wrapper",func:h}],Rt.prototype.clone=vd,Rt.prototype.reverse=vw,Rt.prototype.value=gt,z.prototype.at=xi,z.prototype.chain=b_,z.prototype.commit=_f,z.prototype.next=Kt,z.prototype.plant=Vm,z.prototype.reverse=__,z.prototype.toJSON=z.prototype.valueOf=z.prototype.value=k_,z.prototype.first=z.prototype.head,Dn&&(z.prototype[Dn]=w_),z},Ht=bd();gr?((gr.exports=Ht)._=Ht,Pl._=Ht):Un._=Ht}).call(mi)})(Hv,Hv.exports);const XY=Hv.exports;window._=XY;window.axios=nn;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var QE={exports:{}};const eQ=DO(x5);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,l){(function(h,g){r.exports=g(eQ)})(window,function(h){return function(g){var m={};function C(_){if(m[_])return m[_].exports;var v=m[_]={i:_,l:!1,exports:{}};return g[_].call(v.exports,v,v.exports,C),v.l=!0,v.exports}return C.m=g,C.c=m,C.d=function(_,v,y){C.o(_,v)||Object.defineProperty(_,v,{enumerable:!0,get:y})},C.r=function(_){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},C.t=function(_,v){if(1&v&&(_=C(_)),8&v||4&v&&typeof _=="object"&&_&&_.__esModule)return _;var y=Object.create(null);if(C.r(y),Object.defineProperty(y,"default",{enumerable:!0,value:_}),2&v&&typeof _!="string")for(var S in _)C.d(y,S,function(P){return _[P]}.bind(null,S));return y},C.n=function(_){var v=_&&_.__esModule?function(){return _.default}:function(){return _};return C.d(v,"a",v),v},C.o=function(_,v){return Object.prototype.hasOwnProperty.call(_,v)},C.p="",C(C.s=3)}([function(g,m){g.exports=h},function(g,m,C){(function(_){var v=typeof _=="object"&&_&&_.Object===Object&&_;m.a=v}).call(this,C(2))},function(g,m){var C;C=function(){return this}();try{C=C||new Function("return this")()}catch{typeof window=="object"&&(C=window)}g.exports=C},function(g,m,C){C.r(m);var _=C(0),v=C.n(_),y=function(X){var Te=typeof X;return X!=null&&(Te=="object"||Te=="function")},S=C(1),P=typeof self=="object"&&self&&self.Object===Object&&self,N=S.a||P||Function("return this")(),M=function(){return N.Date.now()},F=/\s/,ee=function(X){for(var Te=X.length;Te--&&F.test(X.charAt(Te)););return Te},se=/^\s+/,we=function(X){return X&&X.slice(0,ee(X)+1).replace(se,"")},te=N.Symbol,Y=Object.prototype,ie=Y.hasOwnProperty,ke=Y.toString,U=te?te.toStringTag:void 0,Pe=function(X){var Te=ie.call(X,U),Ne=X[U];try{X[U]=void 0;var Ue=!0}catch{}var dt=ke.call(X);return Ue&&(Te?X[U]=Ne:delete X[U]),dt},_e=Object.prototype.toString,ue=function(X){return _e.call(X)},Me=te?te.toStringTag:void 0,Fe=function(X){return X==null?X===void 0?"[object Undefined]":"[object Null]":Me&&Me in Object(X)?Pe(X):ue(X)},Ge=function(X){return X!=null&&typeof X=="object"},Q=function(X){return typeof X=="symbol"||Ge(X)&&Fe(X)=="[object Symbol]"},Xe=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,Ye=parseInt,ot=function(X){if(typeof X=="number")return X;if(Q(X))return NaN;if(y(X)){var Te=typeof X.valueOf=="function"?X.valueOf():X;X=y(Te)?Te+"":Te}if(typeof X!="string")return X===0?X:+X;X=we(X);var Ne=Le.test(X);return Ne||Ft.test(X)?Ye(X.slice(2),Ne?2:8):Xe.test(X)?NaN:+X},vt=Math.max,no=Math.min,Fn=function(X,Te,Ne){var Ue,dt,$t,Qe,q,Z,ce=0,me=!1,Ce=!1,ze=!0;if(typeof X!="function")throw new TypeError("Expected a function");function Ve(qe){var st=Ue,Ze=dt;return Ue=dt=void 0,ce=qe,Qe=X.apply(Ze,st)}function ve(qe){return ce=qe,q=setTimeout(xe,Te),me?Ve(qe):Qe}function Se(qe){var st=qe-Z;return Z===void 0||st>=Te||st<0||Ce&&qe-ce>=$t}function xe(){var qe=M();if(Se(qe))return et(qe);q=setTimeout(xe,function(st){var Ze=Te-(st-Z);return Ce?no(Ze,$t-(st-ce)):Ze}(qe))}function et(qe){return q=void 0,ze&&Ue?Ve(qe):(Ue=dt=void 0,Qe)}function We(){var qe=M(),st=Se(qe);if(Ue=arguments,dt=this,Z=qe,st){if(q===void 0)return ve(Z);if(Ce)return clearTimeout(q),q=setTimeout(xe,Te),Ve(Z)}return q===void 0&&(q=setTimeout(xe,Te)),Qe}return Te=ot(Te)||0,y(Ne)&&(me=!!Ne.leading,$t=(Ce="maxWait"in Ne)?vt(ot(Ne.maxWait)||0,Te):$t,ze="trailing"in Ne?!!Ne.trailing:ze),We.cancel=function(){q!==void 0&&clearTimeout(q),ce=0,Ue=Z=dt=q=void 0},We.flush=function(){return q===void 0?Qe:et(M())},We},cn={name:"ckeditor",created(){const{CKEDITOR_VERSION:X}=window;if(X){const[Te]=X.split(".").map(Number);Te<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(_.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const X=Object.assign({},this.config);this.modelValue&&(X.initialData=this.modelValue),this.editor.create(this.$el,X).then(Te=>{this.instance=Object(_.markRaw)(Te),this.setUpEditorEvents(),this.modelValue!==X.initialData&&Te.setData(this.modelValue),this.disabled&&Te.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Te)}).catch(Te=>{console.error(Te)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(X){this.instance&&X!==this.lastEditorData&&this.instance.setData(X)},disabled(X){X?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const X=this.instance,Te=Fn(Ne=>{const Ue=this.lastEditorData=X.getData();this.$emit("update:modelValue",Ue,Ne,X),this.$emit("input",Ue,Ne,X)},300,{leading:!0});X.model.document.on("change:data",Te),X.editing.view.document.on("focus",Ne=>{this.$emit("focus",Ne,X)}),X.editing.view.document.on("blur",Ne=>{this.$emit("blur",Ne,X)})}}};const Ln=v.a?v.a.version:_.version,[fo]=Ln.split(".").map(X=>parseInt(X,10));if(fo<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Dt={install(X){X.component("ckeditor",cn)},component:cn};m.default=Dt}]).default})})(QE);const tQ=PE(QE.exports),Lu=aE(DN);Lu.use(UY);Lu.use(JY);Lu.component("section-title",Np);Lu.component("ContentHeader",ZY);Lu.use(tQ);Lu.mount("#app");