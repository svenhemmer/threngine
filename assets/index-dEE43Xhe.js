(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wa(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const it={},nr=[],Qt=()=>{},Bh=()=>!1,co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xa=n=>n.startsWith("onUpdate:"),xt=Object.assign,Ya=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},zh=Object.prototype.hasOwnProperty,Ye=(n,e)=>zh.call(n,e),we=Array.isArray,ir=n=>qr(n)==="[object Map]",uo=n=>qr(n)==="[object Set]",Cl=n=>qr(n)==="[object Date]",Oe=n=>typeof n=="function",ft=n=>typeof n=="string",Pn=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",ku=n=>(rt(n)||Oe(n))&&Oe(n.then)&&Oe(n.catch),Wu=Object.prototype.toString,qr=n=>Wu.call(n),Hh=n=>qr(n).slice(8,-1),Xu=n=>qr(n)==="[object Object]",qa=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=Wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vh=/-(\w)/g,vn=fo(n=>n.replace(Vh,(e,t)=>t?t.toUpperCase():"")),Gh=/\B([A-Z])/g,gr=fo(n=>n.replace(Gh,"-$1").toLowerCase()),ho=fo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Oo=fo(n=>n?`on${ho(n)}`:""),ei=(n,e)=>!Object.is(n,e),Us=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Yu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},qs=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Pl;const qu=()=>Pl||(Pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(n){if(we(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?Yh(i):ja(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ft(n)||rt(n))return n}const kh=/;(?![^(]*\))/g,Wh=/:([^]+)/,Xh=/\/\*[^]*?\*\//g;function Yh(n){const e={};return n.replace(Xh,"").split(kh).forEach(t=>{if(t){const i=t.split(Wh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zr(n){let e="";if(ft(n))e=n;else if(we(n))for(let t=0;t<n.length;t++){const i=zr(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jh=Wa(qh);function ju(n){return!!n||n===""}function $h(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=po(n[i],e[i]);return t}function po(n,e){if(n===e)return!0;let t=Cl(n),i=Cl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Pn(n),i=Pn(e),t||i)return n===e;if(t=we(n),i=we(e),t||i)return t&&i?$h(n,e):!1;if(t=rt(n),i=rt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!po(n[o],e[o]))return!1}}return String(n)===String(e)}function Kh(n,e){return n.findIndex(t=>po(t,e))}const Fo=n=>ft(n)?n:n==null?"":we(n)||rt(n)&&(n.toString===Wu||!Oe(n.toString))?JSON.stringify(n,$u,2):String(n),$u=(n,e)=>e&&e.__v_isRef?$u(n,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Bo(i,s)+" =>"]=r,t),{})}:uo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Bo(t))}:Pn(e)?Bo(e):rt(e)&&!we(e)&&!Xu(e)?String(e):e,Bo=(n,e="")=>{var t;return Pn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Ku{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Zu(n){return new Ku(n)}function Zh(n,e=qt){e&&e.active&&e.effects.push(n)}function Ju(){return qt}function Jh(n){qt&&qt.cleanups.push(n)}let Ti;class $a{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Zh(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ri();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Qh(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),si()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Kn,t=Ti;try{return Kn=!0,Ti=this,this._runnings++,Ll(this),this.fn()}finally{Dl(this),this._runnings--,Ti=t,Kn=e}}stop(){this.active&&(Ll(this),Dl(this),this.onStop&&this.onStop(),this.active=!1)}}function Qh(n){return n.value}function Ll(n){n._trackId++,n._depsLength=0}function Dl(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Qu(n.deps[e],n);n.deps.length=n._depsLength}}function Qu(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Kn=!0,ba=0;const ef=[];function ri(){ef.push(Kn),Kn=!1}function si(){const n=ef.pop();Kn=n===void 0?!0:n}function Ka(){ba++}function Za(){for(ba--;!ba&&Aa.length;)Aa.shift()()}function tf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Qu(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Aa=[];function nf(n,e,t){Ka();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Aa.push(i.scheduler)))}Za()}const rf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},js=new WeakMap,bi=Symbol(""),wa=Symbol("");function Gt(n,e,t){if(Kn&&Ti){let i=js.get(n);i||js.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=rf(()=>i.delete(t))),tf(Ti,r)}}function Cn(n,e,t,i,r,s){const o=js.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&we(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Pn(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":we(n)?qa(t)&&a.push(o.get("length")):(a.push(o.get(bi)),ir(n)&&a.push(o.get(wa)));break;case"delete":we(n)||(a.push(o.get(bi)),ir(n)&&a.push(o.get(wa)));break;case"set":ir(n)&&a.push(o.get(bi));break}Ka();for(const l of a)l&&nf(l,4);Za()}function ed(n,e){const t=js.get(n);return t&&t.get(e)}const td=Wa("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pn)),Il=nd();function nd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,o=this.length;s<o;s++)Gt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ri(),Ka();const i=Ke(this)[e].apply(this,t);return Za(),si(),i}}),n}function id(n){Pn(n)||(n=String(n));const e=Ke(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class of{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?gd:uf:s?cf:lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=we(e);if(!r){if(o&&Ye(Il,t))return Reflect.get(Il,t,i);if(t==="hasOwnProperty")return id}const a=Reflect.get(e,t,i);return(Pn(t)?sf.has(t):td(t))||(r||Gt(e,"get",t),s)?a:dt(a)?o&&qa(t)?a:a.value:rt(a)?r?ff(a):go(a):a}}class af extends of{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Hr(s);if(!$s(i)&&!Hr(i)&&(s=Ke(s),i=Ke(i)),!we(e)&&dt(s)&&!dt(i))return l?!1:(s.value=i,!0)}const o=we(e)&&qa(t)?Number(t)<e.length:Ye(e,t),a=Reflect.set(e,t,i,r);return e===Ke(r)&&(o?ei(i,s)&&Cn(e,"set",t,i):Cn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ye(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Cn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Pn(t)||!sf.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",we(e)?"length":bi),Reflect.ownKeys(e)}}class rd extends of{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sd=new af,od=new rd,ad=new af(!0);const Ja=n=>n,mo=n=>Reflect.getPrototypeOf(n);function es(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);t||(ei(e,s)&&Gt(r,"get",e),Gt(r,"get",s));const{has:o}=mo(r),a=i?Ja:t?nl:Vr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function ts(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return e||(ei(n,r)&&Gt(i,"has",n),Gt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ns(n,e=!1){return n=n.__v_raw,!e&&Gt(Ke(n),"iterate",bi),Reflect.get(n,"size",n)}function Ul(n){n=Ke(n);const e=Ke(this);return mo(e).has.call(e,n)||(e.add(n),Cn(e,"add",n,n)),this}function Nl(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=mo(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?ei(e,o)&&Cn(t,"set",n,e):Cn(t,"add",n,e),this}function Ol(n){const e=Ke(this),{has:t,get:i}=mo(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Cn(e,"delete",n,void 0),s}function Fl(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&Cn(n,"clear",void 0,void 0),t}function is(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ke(o),l=e?Ja:n?nl:Vr;return!n&&Gt(a,"iterate",bi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function rs(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),o=ir(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ja:e?nl:Vr;return!e&&Gt(s,"iterate",l?wa:bi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function On(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ld(){const n={get(s){return es(this,s)},get size(){return ns(this)},has:ts,add:Ul,set:Nl,delete:Ol,clear:Fl,forEach:is(!1,!1)},e={get(s){return es(this,s,!1,!0)},get size(){return ns(this)},has:ts,add:Ul,set:Nl,delete:Ol,clear:Fl,forEach:is(!1,!0)},t={get(s){return es(this,s,!0)},get size(){return ns(this,!0)},has(s){return ts.call(this,s,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:is(!0,!1)},i={get(s){return es(this,s,!0,!0)},get size(){return ns(this,!0)},has(s){return ts.call(this,s,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rs(s,!1,!1),t[s]=rs(s,!0,!1),e[s]=rs(s,!1,!0),i[s]=rs(s,!0,!0)}),[n,t,e,i]}const[cd,ud,fd,hd]=ld();function Qa(n,e){const t=e?n?hd:fd:n?ud:cd;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ye(t,r)&&r in i?t:i,r,s)}const dd={get:Qa(!1,!1)},pd={get:Qa(!1,!0)},md={get:Qa(!0,!1)};const lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,gd=new WeakMap;function _d(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vd(n){return n.__v_skip||!Object.isExtensible(n)?0:_d(Hh(n))}function go(n){return Hr(n)?n:el(n,!1,sd,dd,lf)}function xd(n){return el(n,!1,ad,pd,cf)}function ff(n){return el(n,!0,od,md,uf)}function el(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=vd(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Ai(n){return Hr(n)?Ai(n.__v_raw):!!(n&&n.__v_isReactive)}function Hr(n){return!!(n&&n.__v_isReadonly)}function $s(n){return!!(n&&n.__v_isShallow)}function hf(n){return n?!!n.__v_raw:!1}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function tl(n){return Object.isExtensible(n)&&Yu(n,"__v_skip",!0),n}const Vr=n=>rt(n)?go(n):n,nl=n=>rt(n)?ff(n):n;class df{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new $a(()=>e(this._value),()=>Ns(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return(!e._cacheable||e.effect.dirty)&&ei(e._value,e._value=e.effect.run())&&Ns(e,4),pf(e),e.effect._dirtyLevel>=2&&Ns(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Md(n,e,t=!1){let i,r;const s=Oe(n);return s?(i=n,r=Qt):(i=n.get,r=n.set),new df(i,r,s||!r,t)}function pf(n){var e;Kn&&Ti&&(n=Ke(n),tf(Ti,(e=n.dep)!=null?e:n.dep=rf(()=>n.dep=void 0,n instanceof df?n:void 0)))}function Ns(n,e=4,t){n=Ke(n);const i=n.dep;i&&nf(i,e)}function dt(n){return!!(n&&n.__v_isRef===!0)}function Ft(n){return gf(n,!1)}function mf(n){return gf(n,!0)}function gf(n,e){return dt(n)?n:new Sd(n,e)}class Sd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Vr(e)}get value(){return pf(this),this._value}set value(e){const t=this.__v_isShallow||$s(e)||Hr(e);e=t?e:Ke(e),ei(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Vr(e),Ns(this,4))}}function Ed(n){return dt(n)?n.value:n}const yd={get:(n,e,t)=>Ed(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return dt(r)&&!dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _f(n){return Ai(n)?n:new Proxy(n,yd)}function Td(n){const e=we(n)?new Array(n.length):{};for(const t in n)e[t]=Ad(n,t);return e}class bd{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ed(Ke(this._object),this._key)}}function Ad(n,e,t){const i=n[e];return dt(i)?i:new bd(n,e,t)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zn(n,e,t,i){try{return i?n(...i):n()}catch(r){_o(r,e,t)}}function ln(n,e,t,i){if(Oe(n)){const r=Zn(n,e,t,i);return r&&ku(r)&&r.catch(s=>{_o(s,e,t)}),r}if(we(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ln(n[s],e,t,i));return r}}function _o(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ri(),Zn(l,null,10,[n,o,a]),si();return}}wd(n,t,r,i)}function wd(n,e,t,i=!0){console.error(n)}let Gr=!1,Ra=!1;const Ct=[];let dn=0;const rr=[];let Wn=null,_i=0;const vf=Promise.resolve();let il=null;function rl(n){const e=il||vf;return n?e.then(this?n.bind(this):n):e}function Rd(n){let e=dn+1,t=Ct.length;for(;e<t;){const i=e+t>>>1,r=Ct[i],s=kr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function sl(n){(!Ct.length||!Ct.includes(n,Gr&&n.allowRecurse?dn+1:dn))&&(n.id==null?Ct.push(n):Ct.splice(Rd(n.id),0,n),xf())}function xf(){!Gr&&!Ra&&(Ra=!0,il=vf.then(Sf))}function Cd(n){const e=Ct.indexOf(n);e>dn&&Ct.splice(e,1)}function Pd(n){we(n)?rr.push(...n):(!Wn||!Wn.includes(n,n.allowRecurse?_i+1:_i))&&rr.push(n),xf()}function Bl(n,e,t=Gr?dn+1:0){for(;t<Ct.length;t++){const i=Ct[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Ct.splice(t,1),t--,i()}}}function Mf(n){if(rr.length){const e=[...new Set(rr)].sort((t,i)=>kr(t)-kr(i));if(rr.length=0,Wn){Wn.push(...e);return}for(Wn=e,_i=0;_i<Wn.length;_i++)Wn[_i]();Wn=null,_i=0}}const kr=n=>n.id==null?1/0:n.id,Ld=(n,e)=>{const t=kr(n)-kr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Sf(n){Ra=!1,Gr=!0,Ct.sort(Ld);try{for(dn=0;dn<Ct.length;dn++){const e=Ct[dn];e&&e.active!==!1&&Zn(e,null,14)}}finally{dn=0,Ct.length=0,Mf(),Gr=!1,il=null,(Ct.length||rr.length)&&Sf()}}function Dd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(r=t.map(m=>ft(m)?m.trim():m)),f&&(r=t.map(qs))}let a,l=i[a=Oo(e)]||i[a=Oo(vn(e))];!l&&s&&(l=i[a=Oo(gr(e))]),l&&ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ln(c,n,6,r)}}function Ef(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Oe(n)){const l=c=>{const u=Ef(c,e,!0);u&&(a=!0,xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(rt(n)&&i.set(n,null),null):(we(s)?s.forEach(l=>o[l]=null):xt(o,s),rt(n)&&i.set(n,o),o)}function vo(n,e){return!n||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,gr(e))||Ye(n,e))}let Ut=null,xo=null;function Ks(n){const e=Ut;return Ut=n,xo=n&&n.type.__scopeId||null,e}function yf(n){xo=n}function Tf(){xo=null}function Id(n,e=Ut,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&$l(-1);const s=Ks(e);let o;try{o=n(...r)}finally{Ks(s),i._d&&$l(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:v,inheritAttrs:x}=n,p=Ks(n);let d,b;try{if(t.shapeFlag&4){const A=r||i,U=A;d=fn(c.call(U,A,u,f,m,h,v)),b=a}else{const A=e;d=fn(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),b=e.props?a:Ud(a)}}catch(A){Nr.length=0,_o(A,n,1),d=tn(wi)}let S=d;if(b&&x!==!1){const A=Object.keys(b),{shapeFlag:U}=S;A.length&&U&7&&(s&&A.some(Xa)&&(b=Nd(b,s)),S=ur(S,b,!1,!0))}return t.dirs&&(S=ur(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),d=S,Ks(p),d}const Ud=n=>{let e;for(const t in n)(t==="class"||t==="style"||co(t))&&((e||(e={}))[t]=n[t]);return e},Nd=(n,e)=>{const t={};for(const i in n)(!Xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Od(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?zl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!vo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zl(i,o,c):!0:!!o;return!1}function zl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!vo(t,s))return!0}return!1}function Fd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Bd="components",bf=Symbol.for("v-ndc");function zd(n){return ft(n)?Hd(Bd,n,!1)||n:n||bf}function Hd(n,e,t=!0,i=!1){const r=Ut||Mt;if(r){const s=r.type;{const a=Np(s,!1);if(a&&(a===e||a===vn(e)||a===ho(vn(e))))return s}const o=Hl(r[n]||s[n],e)||Hl(r.appContext[n],e);return!o&&i?s:o}}function Hl(n,e){return n&&(n[e]||n[vn(e)]||n[ho(vn(e))])}const Vd=n=>n.__isSuspense;function Gd(n,e){e&&e.pendingBranch?we(n)?e.effects.push(...n):e.effects.push(n):Pd(n)}const kd=Symbol.for("v-scx"),Wd=()=>Ur(kd),ss={};function jt(n,e,t){return Af(n,e,t)}function Af(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=it){if(e&&s){const R=e;e=(...C)=>{R(...C),U()}}const l=Mt,c=R=>i===!0?R:Si(R,i===!1?1:void 0);let u,f=!1,h=!1;if(dt(n)?(u=()=>n.value,f=$s(n)):Ai(n)?(u=()=>c(n),f=!0):we(n)?(h=!0,f=n.some(R=>Ai(R)||$s(R)),u=()=>n.map(R=>{if(dt(R))return R.value;if(Ai(R))return c(R);if(Oe(R))return Zn(R,l,2)})):Oe(n)?e?u=()=>Zn(n,l,2):u=()=>(m&&m(),ln(n,l,3,[v])):u=Qt,e&&i){const R=u;u=()=>Si(R())}let m,v=R=>{m=S.onStop=()=>{Zn(R,l,4),m=S.onStop=void 0}},x;if(Eo)if(v=Qt,e?t&&ln(e,l,3,[u(),h?[]:void 0,v]):u(),r==="sync"){const R=Wd();x=R.__watcherHandles||(R.__watcherHandles=[])}else return Qt;let p=h?new Array(n.length).fill(ss):ss;const d=()=>{if(!(!S.active||!S.dirty))if(e){const R=S.run();(i||f||(h?R.some((C,N)=>ei(C,p[N])):ei(R,p)))&&(m&&m(),ln(e,l,3,[R,p===ss?void 0:h&&p[0]===ss?[]:p,v]),p=R)}else S.run()};d.allowRecurse=!!e;let b;r==="sync"?b=d:r==="post"?b=()=>Ot(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),b=()=>sl(d));const S=new $a(u,Qt,b),A=Ju(),U=()=>{S.stop(),A&&Ya(A.effects,S)};return e?t?d():p=S.run():r==="post"?Ot(S.run.bind(S),l&&l.suspense):S.run(),x&&x.push(U),U}function Xd(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?wf(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=jr(this),a=Af(r,s.bind(i),t);return o(),a}function wf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Si(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,dt(n))Si(n.value,e,t);else if(we(n))for(let i=0;i<n.length;i++)Si(n[i],e,t);else if(uo(n)||ir(n))n.forEach(i=>{Si(i,e,t)});else if(Xu(n))for(const i in n)Si(n[i],e,t);return n}function At(n,e){if(Ut===null)return n;const t=yo(Ut)||Ut.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=it]=e[r];s&&(Oe(s)&&(s={mounted:s,updated:s}),s.deep&&Si(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function li(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ri(),ln(l,t,8,[n.el,a,n,e]),si())}}/*! #__NO_SIDE_EFFECTS__ */function Pi(n,e){return Oe(n)?xt({name:n.name},e,{setup:n}):n}const Os=n=>!!n.type.__asyncLoader,Rf=n=>n.type.__isKeepAlive;function Yd(n,e){Cf(n,"a",e)}function qd(n,e){Cf(n,"da",e)}function Cf(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Mo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Rf(r.parent.vnode)&&jd(i,e,t,r),r=r.parent}}function jd(n,e,t,i){const r=Mo(e,n,i,!0);Df(()=>{Ya(i[e],r)},t)}function Mo(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ri();const a=jr(t),l=ln(e,t,n,o);return a(),si(),l});return i?r.unshift(s):r.push(s),s}}const Dn=n=>(e,t=Mt)=>(!Eo||n==="sp")&&Mo(n,(...i)=>e(...i),t),$d=Dn("bm"),Pf=Dn("m"),Kd=Dn("bu"),Zd=Dn("u"),Lf=Dn("bum"),Df=Dn("um"),Jd=Dn("sp"),Qd=Dn("rtg"),ep=Dn("rtc");function tp(n,e=Mt){Mo("ec",n,e)}function Ho(n,e,t,i){let r;const s=t;if(we(n)||ft(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}const Ca=n=>n?jf(n)?yo(n)||n.proxy:Ca(n.parent):null,Ir=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ca(n.parent),$root:n=>Ca(n.root),$emit:n=>n.emit,$options:n=>ol(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,sl(n.update)}),$nextTick:n=>n.n||(n.n=rl.bind(n.proxy)),$watch:n=>Xd.bind(n)}),Vo=(n,e)=>n!==it&&!n.__isScriptSetup&&Ye(n,e),np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Vo(i,e))return o[e]=1,i[e];if(r!==it&&Ye(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(t!==it&&Ye(t,e))return o[e]=4,t[e];Pa&&(o[e]=0)}}const u=Ir[e];let f,h;if(u)return e==="$attrs"&&Gt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==it&&Ye(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Vo(r,e)?(r[e]=t,!0):i!==it&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==it&&Ye(n,o)||Vo(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(Ir,o)||Ye(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Vl(n){return we(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pa=!0;function ip(n){const e=ol(n),t=n.proxy,i=n.ctx;Pa=!1,e.beforeCreate&&Gl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:x,deactivated:p,beforeDestroy:d,beforeUnmount:b,destroyed:S,unmounted:A,render:U,renderTracked:R,renderTriggered:C,errorCaptured:N,serverPrefetch:E,expose:M,inheritAttrs:O,components:j,directives:I,filters:Q}=e;if(c&&rp(c,i,null),o)for(const ie in o){const k=o[ie];Oe(k)&&(i[ie]=k.bind(t))}if(r){const ie=r.call(t,t);rt(ie)&&(n.data=go(ie))}if(Pa=!0,s)for(const ie in s){const k=s[ie],ce=Oe(k)?k.bind(t,t):Oe(k.get)?k.get.bind(t,t):Qt,ue=!Oe(k)&&Oe(k.set)?k.set.bind(t):Qt,Me=Kf({get:ce,set:ue});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Re=>Me.value=Re})}if(a)for(const ie in a)If(a[ie],i,t,ie);if(l){const ie=Oe(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(k=>{up(k,ie[k])})}u&&Gl(u,n,"c");function ee(ie,k){we(k)?k.forEach(ce=>ie(ce.bind(t))):k&&ie(k.bind(t))}if(ee($d,f),ee(Pf,h),ee(Kd,m),ee(Zd,v),ee(Yd,x),ee(qd,p),ee(tp,N),ee(ep,R),ee(Qd,C),ee(Lf,b),ee(Df,A),ee(Jd,E),we(M))if(M.length){const ie=n.exposed||(n.exposed={});M.forEach(k=>{Object.defineProperty(ie,k,{get:()=>t[k],set:ce=>t[k]=ce})})}else n.exposed||(n.exposed={});U&&n.render===Qt&&(n.render=U),O!=null&&(n.inheritAttrs=O),j&&(n.components=j),I&&(n.directives=I)}function rp(n,e,t=Qt){we(n)&&(n=La(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=Ur(r.from||i,r.default,!0):s=Ur(r.from||i):s=Ur(r),dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Gl(n,e,t){ln(we(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){const r=i.includes(".")?wf(t,i):()=>t[i];if(ft(n)){const s=e[n];Oe(s)&&jt(r,s)}else if(Oe(n))jt(r,n.bind(t));else if(rt(n))if(we(n))n.forEach(s=>If(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&jt(r,s,n)}}function ol(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Zs(l,c,o,!0)),Zs(l,e,o)),rt(e)&&s.set(e,l),l}function Zs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Zs(n,s,t,!0),r&&r.forEach(o=>Zs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sp={data:kl,props:Wl,emits:Wl,methods:Pr,computed:Pr,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Pr,directives:Pr,watch:ap,provide:kl,inject:op};function kl(n,e){return e?n?function(){return xt(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function op(n,e){return Pr(La(n),La(e))}function La(n){if(we(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Pr(n,e){return n?xt(Object.create(null),n,e):e}function Wl(n,e){return n?we(n)&&we(e)?[...new Set([...n,...e])]:xt(Object.create(null),Vl(n),Vl(e??{})):e}function ap(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=Pt(n[i],e[i]);return t}function Uf(){return{app:null,config:{isNativeTag:Bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(n,e){return function(i,r=null){Oe(i)||(i=xt({},i)),r!=null&&!rt(r)&&(r=null);const s=Uf(),o=new WeakSet;let a=!1;const l=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Fp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=tn(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,yo(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=sr;sr=l;try{return c()}finally{sr=u}}};return l}}let sr=null;function up(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function Ur(n,e,t=!1){const i=Mt||Ut;if(i||sr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:sr._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i&&i.proxy):e}}function fp(){return!!(Mt||Ut||sr)}const Nf={},Of=()=>Object.create(Nf),Ff=n=>Object.getPrototypeOf(n)===Nf;function hp(n,e,t,i=!1){const r={},s=Of();n.propsDefaults=Object.create(null),Bf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:xd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function dp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ke(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(vo(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ye(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const v=vn(h);r[v]=Da(l,a,v,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Bf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=gr(f))===f||!Ye(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Da(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&Cn(n.attrs,"set","")}function Bf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Dr(l))continue;const c=e[l];let u;r&&Ye(r,u=vn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:vo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ke(t),c=a||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Da(r,l,f,c[f],n,!Ye(c,f))}}return o}function Da(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=jr(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===gr(t))&&(i=!0))}return i}function zf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[h,m]=zf(f,e,!0);xt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,nr),nr;if(we(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);Xl(f)&&(o[f]=it)}else if(s)for(const u in s){const f=vn(u);if(Xl(f)){const h=s[u],m=o[f]=we(h)||Oe(h)?{type:h}:xt({},h);if(m){const v=jl(Boolean,m.type),x=jl(String,m.type);m[0]=v>-1,m[1]=x<0||v<x,(v>-1||Ye(m,"default"))&&a.push(f)}}}const c=[o,a];return rt(n)&&i.set(n,c),c}function Xl(n){return n[0]!=="$"&&!Dr(n)}function Yl(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function ql(n,e){return Yl(n)===Yl(e)}function jl(n,e){return we(e)?e.findIndex(t=>ql(t,n)):Oe(e)&&ql(e,n)?0:-1}const Hf=n=>n[0]==="_"||n==="$stable",al=n=>we(n)?n.map(fn):[fn(n)],pp=(n,e,t)=>{if(e._n)return e;const i=Id((...r)=>al(e(...r)),t);return i._c=!1,i},Vf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Hf(r))continue;const s=n[r];if(Oe(s))e[r]=pp(r,s,i);else if(s!=null){const o=al(s);e[r]=()=>o}}},Gf=(n,e)=>{const t=al(e);n.slots.default=()=>t},mp=(n,e)=>{const t=n.slots=Of();if(n.vnode.shapeFlag&32){const i=e._;i?(xt(t,e),Yu(t,"_",i,!0)):Vf(e,t)}else e&&Gf(n,e)},gp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(xt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Vf(e,r)),o=e}else e&&(Gf(n,e),o={default:1});if(s)for(const a in r)!Hf(a)&&o[a]==null&&delete r[a]};function Ia(n,e,t,i,r=!1){if(we(n)){n.forEach((h,m)=>Ia(h,e&&(we(e)?e[m]:e),t,i,r));return}if(Os(i)&&!r)return;const s=i.shapeFlag&4?yo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):dt(c)&&(c.value=null)),Oe(l))Zn(l,a,12,[o,u]);else{const h=ft(l),m=dt(l);if(h||m){const v=()=>{if(n.f){const x=h?Ye(f,l)?f[l]:u[l]:l.value;r?we(x)&&Ya(x,s):we(x)?x.includes(s)||x.push(s):h?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ye(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(v.id=-1,Ot(v,t)):v()}}}const Ot=Gd;function _p(n){return vp(n)}function vp(n,e){const t=qu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Qt,insertStaticContent:v}=n,x=(w,P,G,$=null,K=null,se=null,y=void 0,g=null,L=!!P.dynamicChildren)=>{if(w===P)return;w&&!Tr(w,P)&&($=de(w),Re(w,K,se,!0),w=null),P.patchFlag===-2&&(L=!1,P.dynamicChildren=null);const{type:D,ref:V,shapeFlag:X}=P;switch(D){case So:p(w,P,G,$);break;case wi:d(w,P,G,$);break;case ko:w==null&&b(P,G,$,y);break;case Bt:j(w,P,G,$,K,se,y,g,L);break;default:X&1?U(w,P,G,$,K,se,y,g,L):X&6?I(w,P,G,$,K,se,y,g,L):(X&64||X&128)&&D.process(w,P,G,$,K,se,y,g,L,H)}V!=null&&K&&Ia(V,w&&w.ref,se,P||w,!P)},p=(w,P,G,$)=>{if(w==null)i(P.el=a(P.children),G,$);else{const K=P.el=w.el;P.children!==w.children&&c(K,P.children)}},d=(w,P,G,$)=>{w==null?i(P.el=l(P.children||""),G,$):P.el=w.el},b=(w,P,G,$)=>{[w.el,w.anchor]=v(w.children,P,G,$,w.el,w.anchor)},S=({el:w,anchor:P},G,$)=>{let K;for(;w&&w!==P;)K=h(w),i(w,G,$),w=K;i(P,G,$)},A=({el:w,anchor:P})=>{let G;for(;w&&w!==P;)G=h(w),r(w),w=G;r(P)},U=(w,P,G,$,K,se,y,g,L)=>{P.type==="svg"?y="svg":P.type==="math"&&(y="mathml"),w==null?R(P,G,$,K,se,y,g,L):E(w,P,K,se,y,g,L)},R=(w,P,G,$,K,se,y,g)=>{let L,D;const{props:V,shapeFlag:X,transition:oe,dirs:ne}=w;if(L=w.el=o(w.type,se,V&&V.is,V),X&8?u(L,w.children):X&16&&N(w.children,L,null,$,K,Go(w,se),y,g),ne&&li(w,null,$,"created"),C(L,w,w.scopeId,y,$),V){for(const ge in V)ge!=="value"&&!Dr(ge)&&s(L,ge,null,V[ge],se,w.children,$,K,ve);"value"in V&&s(L,"value",null,V.value,se),(D=V.onVnodeBeforeMount)&&cn(D,$,w)}ne&&li(w,null,$,"beforeMount");const re=xp(K,oe);re&&oe.beforeEnter(L),i(L,P,G),((D=V&&V.onVnodeMounted)||re||ne)&&Ot(()=>{D&&cn(D,$,w),re&&oe.enter(L),ne&&li(w,null,$,"mounted")},K)},C=(w,P,G,$,K)=>{if(G&&m(w,G),$)for(let se=0;se<$.length;se++)m(w,$[se]);if(K){let se=K.subTree;if(P===se){const y=K.vnode;C(w,y,y.scopeId,y.slotScopeIds,K.parent)}}},N=(w,P,G,$,K,se,y,g,L=0)=>{for(let D=L;D<w.length;D++){const V=w[D]=g?Xn(w[D]):fn(w[D]);x(null,V,P,G,$,K,se,y,g)}},E=(w,P,G,$,K,se,y)=>{const g=P.el=w.el;let{patchFlag:L,dynamicChildren:D,dirs:V}=P;L|=w.patchFlag&16;const X=w.props||it,oe=P.props||it;let ne;if(G&&ci(G,!1),(ne=oe.onVnodeBeforeUpdate)&&cn(ne,G,P,w),V&&li(P,w,G,"beforeUpdate"),G&&ci(G,!0),D?M(w.dynamicChildren,D,g,G,$,Go(P,K),se):y||k(w,P,g,null,G,$,Go(P,K),se,!1),L>0){if(L&16)O(g,P,X,oe,G,$,K);else if(L&2&&X.class!==oe.class&&s(g,"class",null,oe.class,K),L&4&&s(g,"style",X.style,oe.style,K),L&8){const re=P.dynamicProps;for(let ge=0;ge<re.length;ge++){const ae=re[ge],me=X[ae],Ce=oe[ae];(Ce!==me||ae==="value")&&s(g,ae,me,Ce,K,w.children,G,$,ve)}}L&1&&w.children!==P.children&&u(g,P.children)}else!y&&D==null&&O(g,P,X,oe,G,$,K);((ne=oe.onVnodeUpdated)||V)&&Ot(()=>{ne&&cn(ne,G,P,w),V&&li(P,w,G,"updated")},$)},M=(w,P,G,$,K,se,y)=>{for(let g=0;g<P.length;g++){const L=w[g],D=P[g],V=L.el&&(L.type===Bt||!Tr(L,D)||L.shapeFlag&70)?f(L.el):G;x(L,D,V,null,$,K,se,y,!0)}},O=(w,P,G,$,K,se,y)=>{if(G!==$){if(G!==it)for(const g in G)!Dr(g)&&!(g in $)&&s(w,g,G[g],null,y,P.children,K,se,ve);for(const g in $){if(Dr(g))continue;const L=$[g],D=G[g];L!==D&&g!=="value"&&s(w,g,D,L,y,P.children,K,se,ve)}"value"in $&&s(w,"value",G.value,$.value,y)}},j=(w,P,G,$,K,se,y,g,L)=>{const D=P.el=w?w.el:a(""),V=P.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ne}=P;ne&&(g=g?g.concat(ne):ne),w==null?(i(D,G,$),i(V,G,$),N(P.children||[],G,V,K,se,y,g,L)):X>0&&X&64&&oe&&w.dynamicChildren?(M(w.dynamicChildren,oe,G,K,se,y,g),(P.key!=null||K&&P===K.subTree)&&kf(w,P,!0)):k(w,P,G,V,K,se,y,g,L)},I=(w,P,G,$,K,se,y,g,L)=>{P.slotScopeIds=g,w==null?P.shapeFlag&512?K.ctx.activate(P,G,$,y,L):Q(P,G,$,K,se,y,L):J(w,P,L)},Q=(w,P,G,$,K,se,y)=>{const g=w.component=Pp(w,$,K);if(Rf(w)&&(g.ctx.renderer=H),Lp(g),g.asyncDep){if(K&&K.registerDep(g,ee),!w.el){const L=g.subTree=tn(wi);d(null,L,P,G)}}else ee(g,w,P,G,K,se,y)},J=(w,P,G)=>{const $=P.component=w.component;if(Od(w,P,G))if($.asyncDep&&!$.asyncResolved){ie($,P,G);return}else $.next=P,Cd($.update),$.effect.dirty=!0,$.update();else P.el=w.el,$.vnode=P},ee=(w,P,G,$,K,se,y)=>{const g=()=>{if(w.isMounted){let{next:V,bu:X,u:oe,parent:ne,vnode:re}=w;{const ye=Wf(w);if(ye){V&&(V.el=re.el,ie(w,V,y)),ye.asyncDep.then(()=>{w.isUnmounted||g()});return}}let ge=V,ae;ci(w,!1),V?(V.el=re.el,ie(w,V,y)):V=re,X&&Us(X),(ae=V.props&&V.props.onVnodeBeforeUpdate)&&cn(ae,ne,V,re),ci(w,!0);const me=zo(w),Ce=w.subTree;w.subTree=me,x(Ce,me,f(Ce.el),de(Ce),w,K,se),V.el=me.el,ge===null&&Fd(w,me.el),oe&&Ot(oe,K),(ae=V.props&&V.props.onVnodeUpdated)&&Ot(()=>cn(ae,ne,V,re),K)}else{let V;const{el:X,props:oe}=P,{bm:ne,m:re,parent:ge}=w,ae=Os(P);if(ci(w,!1),ne&&Us(ne),!ae&&(V=oe&&oe.onVnodeBeforeMount)&&cn(V,ge,P),ci(w,!0),X&&be){const me=()=>{w.subTree=zo(w),be(X,w.subTree,w,K,null)};ae?P.type.__asyncLoader().then(()=>!w.isUnmounted&&me()):me()}else{const me=w.subTree=zo(w);x(null,me,G,$,w,K,se),P.el=me.el}if(re&&Ot(re,K),!ae&&(V=oe&&oe.onVnodeMounted)){const me=P;Ot(()=>cn(V,ge,me),K)}(P.shapeFlag&256||ge&&Os(ge.vnode)&&ge.vnode.shapeFlag&256)&&w.a&&Ot(w.a,K),w.isMounted=!0,P=G=$=null}},L=w.effect=new $a(g,Qt,()=>sl(D),w.scope),D=w.update=()=>{L.dirty&&L.run()};D.id=w.uid,ci(w,!0),D()},ie=(w,P,G)=>{P.component=w;const $=w.vnode.props;w.vnode=P,w.next=null,dp(w,P.props,$,G),gp(w,P.children,G),ri(),Bl(w),si()},k=(w,P,G,$,K,se,y,g,L=!1)=>{const D=w&&w.children,V=w?w.shapeFlag:0,X=P.children,{patchFlag:oe,shapeFlag:ne}=P;if(oe>0){if(oe&128){ue(D,X,G,$,K,se,y,g,L);return}else if(oe&256){ce(D,X,G,$,K,se,y,g,L);return}}ne&8?(V&16&&ve(D,K,se),X!==D&&u(G,X)):V&16?ne&16?ue(D,X,G,$,K,se,y,g,L):ve(D,K,se,!0):(V&8&&u(G,""),ne&16&&N(X,G,$,K,se,y,g,L))},ce=(w,P,G,$,K,se,y,g,L)=>{w=w||nr,P=P||nr;const D=w.length,V=P.length,X=Math.min(D,V);let oe;for(oe=0;oe<X;oe++){const ne=P[oe]=L?Xn(P[oe]):fn(P[oe]);x(w[oe],ne,G,null,K,se,y,g,L)}D>V?ve(w,K,se,!0,!1,X):N(P,G,$,K,se,y,g,L,X)},ue=(w,P,G,$,K,se,y,g,L)=>{let D=0;const V=P.length;let X=w.length-1,oe=V-1;for(;D<=X&&D<=oe;){const ne=w[D],re=P[D]=L?Xn(P[D]):fn(P[D]);if(Tr(ne,re))x(ne,re,G,null,K,se,y,g,L);else break;D++}for(;D<=X&&D<=oe;){const ne=w[X],re=P[oe]=L?Xn(P[oe]):fn(P[oe]);if(Tr(ne,re))x(ne,re,G,null,K,se,y,g,L);else break;X--,oe--}if(D>X){if(D<=oe){const ne=oe+1,re=ne<V?P[ne].el:$;for(;D<=oe;)x(null,P[D]=L?Xn(P[D]):fn(P[D]),G,re,K,se,y,g,L),D++}}else if(D>oe)for(;D<=X;)Re(w[D],K,se,!0),D++;else{const ne=D,re=D,ge=new Map;for(D=re;D<=oe;D++){const Ie=P[D]=L?Xn(P[D]):fn(P[D]);Ie.key!=null&&ge.set(Ie.key,D)}let ae,me=0;const Ce=oe-re+1;let ye=!1,xe=0;const Le=new Array(Ce);for(D=0;D<Ce;D++)Le[D]=0;for(D=ne;D<=X;D++){const Ie=w[D];if(me>=Ce){Re(Ie,K,se,!0);continue}let Ae;if(Ie.key!=null)Ae=ge.get(Ie.key);else for(ae=re;ae<=oe;ae++)if(Le[ae-re]===0&&Tr(Ie,P[ae])){Ae=ae;break}Ae===void 0?Re(Ie,K,se,!0):(Le[Ae-re]=D+1,Ae>=xe?xe=Ae:ye=!0,x(Ie,P[Ae],G,null,K,se,y,g,L),me++)}const ze=ye?Mp(Le):nr;for(ae=ze.length-1,D=Ce-1;D>=0;D--){const Ie=re+D,Ae=P[Ie],_=Ie+1<V?P[Ie+1].el:$;Le[D]===0?x(null,Ae,G,_,K,se,y,g,L):ye&&(ae<0||D!==ze[ae]?Me(Ae,G,_,2):ae--)}}},Me=(w,P,G,$,K=null)=>{const{el:se,type:y,transition:g,children:L,shapeFlag:D}=w;if(D&6){Me(w.component.subTree,P,G,$);return}if(D&128){w.suspense.move(P,G,$);return}if(D&64){y.move(w,P,G,H);return}if(y===Bt){i(se,P,G);for(let X=0;X<L.length;X++)Me(L[X],P,G,$);i(w.anchor,P,G);return}if(y===ko){S(w,P,G);return}if($!==2&&D&1&&g)if($===0)g.beforeEnter(se),i(se,P,G),Ot(()=>g.enter(se),K);else{const{leave:X,delayLeave:oe,afterLeave:ne}=g,re=()=>i(se,P,G),ge=()=>{X(se,()=>{re(),ne&&ne()})};oe?oe(se,re,ge):ge()}else i(se,P,G)},Re=(w,P,G,$=!1,K=!1)=>{const{type:se,props:y,ref:g,children:L,dynamicChildren:D,shapeFlag:V,patchFlag:X,dirs:oe}=w;if(g!=null&&Ia(g,null,G,w,!0),V&256){P.ctx.deactivate(w);return}const ne=V&1&&oe,re=!Os(w);let ge;if(re&&(ge=y&&y.onVnodeBeforeUnmount)&&cn(ge,P,w),V&6)fe(w.component,G,$);else{if(V&128){w.suspense.unmount(G,$);return}ne&&li(w,null,P,"beforeUnmount"),V&64?w.type.remove(w,P,G,K,H,$):D&&(se!==Bt||X>0&&X&64)?ve(D,P,G,!1,!0):(se===Bt&&X&384||!K&&V&16)&&ve(L,P,G),$&&qe(w)}(re&&(ge=y&&y.onVnodeUnmounted)||ne)&&Ot(()=>{ge&&cn(ge,P,w),ne&&li(w,null,P,"unmounted")},G)},qe=w=>{const{type:P,el:G,anchor:$,transition:K}=w;if(P===Bt){te(G,$);return}if(P===ko){A(w);return}const se=()=>{r(G),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:y,delayLeave:g}=K,L=()=>y(G,se);g?g(w.el,se,L):L()}else se()},te=(w,P)=>{let G;for(;w!==P;)G=h(w),r(w),w=G;r(P)},fe=(w,P,G)=>{const{bum:$,scope:K,update:se,subTree:y,um:g}=w;$&&Us($),K.stop(),se&&(se.active=!1,Re(y,w,P,G)),g&&Ot(g,P),Ot(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ve=(w,P,G,$=!1,K=!1,se=0)=>{for(let y=se;y<w.length;y++)Re(w[y],P,G,$,K)},de=w=>w.shapeFlag&6?de(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el);let Fe=!1;const Be=(w,P,G)=>{w==null?P._vnode&&Re(P._vnode,null,null,!0):x(P._vnode||null,w,P,null,null,null,G),Fe||(Fe=!0,Bl(),Mf(),Fe=!1),P._vnode=w},H={p:x,um:Re,m:Me,r:qe,mt:Q,mc:N,pc:k,pbc:M,n:de,o:n};let Ze,be;return{render:Be,hydrate:Ze,createApp:cp(Be,Ze)}}function Go({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ci({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function xp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kf(n,e,t=!1){const i=n.children,r=e.children;if(we(i)&&we(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Xn(r[s]),a.el=o.el),t||kf(o,a)),a.type===So&&(a.el=o.el)}}function Mp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}const Sp=n=>n.__isTeleport,Bt=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),wi=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),Nr=[];let an=null;function vt(n=!1){Nr.push(an=n?null:[])}function Ep(){Nr.pop(),an=Nr[Nr.length-1]||null}let Wr=1;function $l(n){Wr+=n}function Xf(n){return n.dynamicChildren=Wr>0?an||nr:null,Ep(),Wr>0&&an&&an.push(n),n}function wt(n,e,t,i,r,s){return Xf(Se(n,e,t,i,r,s,!0))}function Yf(n,e,t,i,r){return Xf(tn(n,e,t,i,r,!0))}function yp(n){return n?n.__v_isVNode===!0:!1}function Tr(n,e){return n.type===e.type&&n.key===e.key}const qf=({key:n})=>n??null,Fs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||dt(n)||Oe(n)?{i:Ut,r:n,k:e,f:!!t}:n:null);function Se(n,e=null,t=null,i=0,r=null,s=n===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qf(e),ref:e&&Fs(e),scopeId:xo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ut};return a?(ll(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),Wr>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const tn=Tp;function Tp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===bf)&&(n=wi),yp(n)){const a=ur(n,e,!0);return t&&ll(a,t),Wr>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag|=-2,a}if(Op(n)&&(n=n.__vccOpts),e){e=bp(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=zr(a)),rt(l)&&(hf(l)&&!we(l)&&(l=xt({},l)),e.style=ja(l))}const o=ft(n)?1:Vd(n)?128:Sp(n)?64:rt(n)?4:Oe(n)?2:0;return Se(n,e,t,i,r,o,s,!0)}function bp(n){return n?hf(n)||Ff(n)?xt({},n):n:null}function ur(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?wp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qf(c),ref:e&&e.ref?t&&s?we(s)?s.concat(Fs(e)):[s,Fs(e)]:Fs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ur(n.ssContent),ssFallback:n.ssFallback&&ur(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function ht(n=" ",e=0){return tn(So,null,n,e)}function Ap(n="",e=!1){return e?(vt(),Yf(wi,null,n)):tn(wi,null,n)}function fn(n){return n==null||typeof n=="boolean"?tn(wi):we(n)?tn(Bt,null,n.slice()):typeof n=="object"?Xn(n):tn(So,null,String(n))}function Xn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ur(n)}function ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(we(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ll(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ff(e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),i&64?(t=16,e=[ht(e)]):t=8);n.children=e,n.shapeFlag|=t}function wp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zr([e.class,i.class]));else if(r==="style")e.style=ja([e.style,i.style]);else if(co(r)){const s=e[r],o=i[r];o&&s!==o&&!(we(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function cn(n,e,t,i=null){ln(n,e,7,[t,i])}const Rp=Uf();let Cp=0;function Pp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rp,s={uid:Cp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(i,r),emitsOptions:Ef(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dd.bind(null,s),n.ce&&n.ce(s),s}let Mt=null,Js,Ua;{const n=qu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Js=e("__VUE_INSTANCE_SETTERS__",t=>Mt=t),Ua=e("__VUE_SSR_SETTERS__",t=>Eo=t)}const jr=n=>{const e=Mt;return Js(n),n.scope.on(),()=>{n.scope.off(),Js(e)}},Kl=()=>{Mt&&Mt.scope.off(),Js(null)};function jf(n){return n.vnode.shapeFlag&4}let Eo=!1;function Lp(n,e=!1){e&&Ua(e);const{props:t,children:i}=n.vnode,r=jf(n);hp(n,t,r,e),mp(n,i);const s=r?Dp(n,e):void 0;return e&&Ua(!1),s}function Dp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,np);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Up(n):null,s=jr(n);ri();const o=Zn(i,n,0,[n.props,r]);if(si(),s(),ku(o)){if(o.then(Kl,Kl),e)return o.then(a=>{Zl(n,a,e)}).catch(a=>{_o(a,n,0)});n.asyncDep=o}else Zl(n,o,e)}else $f(n,e)}function Zl(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=_f(e)),$f(n,t)}let Jl;function $f(n,e,t){const i=n.type;if(!n.render){if(!e&&Jl&&!i.render){const r=i.template||ol(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:a},o),l);i.render=Jl(r,c)}}n.render=i.render||Qt}{const r=jr(n);ri();try{ip(n)}finally{si(),r()}}}const Ip={get(n,e){return Gt(n,"get",""),n[e]}};function Up(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ip),slots:n.slots,emit:n.emit,expose:e}}function yo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(_f(tl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](n)},has(e,t){return t in e||t in Ir}}))}function Np(n,e=!0){return Oe(n)?n.displayName||n.name:n.name||e&&n.__name}function Op(n){return Oe(n)&&"__vccOpts"in n}const Kf=(n,e)=>Md(n,e,Eo),Fp="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Bp="http://www.w3.org/2000/svg",zp="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Ql=Yn&&Yn.createElement("template"),Hp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Yn.createElementNS(Bp,n):e==="mathml"?Yn.createElementNS(zp,n):Yn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ql.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Ql.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vp=Symbol("_vtc");function Gp(n,e,t){const i=n[Vp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ec=Symbol("_vod"),kp=Symbol("_vsh"),Wp=Symbol(""),Xp=/(^|;)\s*display\s*:/;function Yp(n,e,t){const i=n.style,r=ft(t);let s=!1;if(t&&!r){if(e)if(ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Bs(i,a,"")}else for(const o in e)t[o]==null&&Bs(i,o,"");for(const o in t)o==="display"&&(s=!0),Bs(i,o,t[o])}else if(r){if(e!==t){const o=i[Wp];o&&(t+=";"+o),i.cssText=t,s=Xp.test(t)}}else e&&n.removeAttribute("style");ec in n&&(n[ec]=s?i.display:"",n[kp]&&(i.display="none"))}const tc=/\s*!important$/;function Bs(n,e,t){if(we(t))t.forEach(i=>Bs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qp(n,e);tc.test(t)?n.setProperty(gr(i),t.replace(tc,""),"important"):n[i]=t}}const nc=["Webkit","Moz","ms"],Wo={};function qp(n,e){const t=Wo[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return Wo[e]=i;i=ho(i);for(let r=0;r<nc.length;r++){const s=nc[r]+i;if(s in n)return Wo[e]=s}return e}const ic="http://www.w3.org/1999/xlink";function jp(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ic,e.slice(6,e.length)):n.setAttributeNS(ic,e,t);else{const s=jh(e);t==null||s&&!ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function $p(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=ju(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function vi(n,e,t,i){n.addEventListener(e,t,i)}function Kp(n,e,t,i){n.removeEventListener(e,t,i)}const rc=Symbol("_vei");function Zp(n,e,t,i,r=null){const s=n[rc]||(n[rc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Jp(e);if(i){const c=s[e]=tm(i,r);vi(n,a,c,l)}else o&&(Kp(n,a,o,l),s[e]=void 0)}}const sc=/(?:Once|Passive|Capture)$/;function Jp(n){let e;if(sc.test(n)){e={};let i;for(;i=n.match(sc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gr(n.slice(2)),e]}let Xo=0;const Qp=Promise.resolve(),em=()=>Xo||(Qp.then(()=>Xo=0),Xo=Date.now());function tm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ln(nm(i,t.value),e,5,[i])};return t.value=n,t.attached=em(),t}function nm(n,e){if(we(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const oc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,im=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?Gp(n,i,c):e==="style"?Yp(n,t,i):co(e)?Xa(e)||Zp(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rm(n,e,i,c))?$p(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jp(n,e,i,c))};function rm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&oc(e)&&Oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return oc(e)&&ft(t)?!1:e in n}const Qs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return we(e)?t=>Us(e,t):e};function sm(n){n.target.composing=!0}function ac(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const or=Symbol("_assign"),It={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[or]=Qs(r);const s=i||r.props&&r.props.type==="number";vi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=qs(a)),n[or](a)}),t&&vi(n,"change",()=>{n.value=n.value.trim()}),e||(vi(n,"compositionstart",sm),vi(n,"compositionend",ac),vi(n,"change",ac))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n[or]=Qs(s),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?qs(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},om={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=uo(e);vi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?qs(eo(o)):eo(o));n[or](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,rl(()=>{n._assigning=!1})}),n[or]=Qs(i)},mounted(n,{value:e,modifiers:{number:t}}){lc(n,e)},beforeUpdate(n,e,t){n[or]=Qs(t)},updated(n,{value:e,modifiers:{number:t}}){n._assigning||lc(n,e)}};function lc(n,e,t){const i=n.multiple,r=we(e);if(!(i&&!r&&!uo(e))){for(let s=0,o=n.options.length;s<o;s++){const a=n.options[s],l=eo(a);if(i)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=Kh(e,l)>-1}else a.selected=e.has(l);else if(po(eo(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function eo(n){return"_value"in n?n._value:n.value}const am=xt({patchProp:im},Hp);let cc;function lm(){return cc||(cc=_p(am))}const cm=(...n)=>{const e=lm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fm(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,um(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function um(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fm(n){return ft(n)?document.querySelector(n):n}var hm=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Zf;const To=n=>Zf=n,Jf=Symbol();function Na(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Or;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Or||(Or={}));function dm(){const n=Zu(!0),e=n.run(()=>Ft({}));let t=[],i=[];const r=tl({install(s){To(r),r._a=s,s.provide(Jf,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!hm?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Qf=()=>{};function uc(n,e,t,i=Qf){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&Ju()&&Jh(r),r}function Ii(n,...e){n.slice().forEach(t=>{t(...e)})}const pm=n=>n();function Oa(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Na(r)&&Na(i)&&n.hasOwnProperty(t)&&!dt(i)&&!Ai(i)?n[t]=Oa(r,i):n[t]=i}return n}const mm=Symbol();function gm(n){return!Na(n)||!n.hasOwnProperty(mm)}const{assign:kn}=Object;function _m(n){return!!(dt(n)&&n.effect)}function vm(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Td(t.state.value[n]);return kn(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=tl(Kf(()=>{To(t);const m=t._s.get(n);return o[h].call(m,m)})),f),{}))}return l=eh(n,c,e,t,i,!0),l}function eh(n,e,t={},i,r,s){let o;const a=kn({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],m;const v=i.state.value[n];!s&&!v&&(i.state.value[n]={}),Ft({});let x;function p(N){let E;c=u=!1,typeof N=="function"?(N(i.state.value[n]),E={type:Or.patchFunction,storeId:n,events:m}):(Oa(i.state.value[n],N),E={type:Or.patchObject,payload:N,storeId:n,events:m});const M=x=Symbol();rl().then(()=>{x===M&&(c=!0)}),u=!0,Ii(f,E,i.state.value[n])}const d=s?function(){const{state:E}=t,M=E?E():{};this.$patch(O=>{kn(O,M)})}:Qf;function b(){o.stop(),f=[],h=[],i._s.delete(n)}function S(N,E){return function(){To(i);const M=Array.from(arguments),O=[],j=[];function I(ee){O.push(ee)}function Q(ee){j.push(ee)}Ii(h,{args:M,name:N,store:U,after:I,onError:Q});let J;try{J=E.apply(this&&this.$id===n?this:U,M)}catch(ee){throw Ii(j,ee),ee}return J instanceof Promise?J.then(ee=>(Ii(O,ee),ee)).catch(ee=>(Ii(j,ee),Promise.reject(ee))):(Ii(O,J),J)}}const A={_p:i,$id:n,$onAction:uc.bind(null,h),$patch:p,$reset:d,$subscribe(N,E={}){const M=uc(f,N,E.detached,()=>O()),O=o.run(()=>jt(()=>i.state.value[n],j=>{(E.flush==="sync"?u:c)&&N({storeId:n,type:Or.direct,events:m},j)},kn({},l,E)));return M},$dispose:b},U=go(A);i._s.set(n,U);const C=(i._a&&i._a.runWithContext||pm)(()=>i._e.run(()=>(o=Zu()).run(e)));for(const N in C){const E=C[N];if(dt(E)&&!_m(E)||Ai(E))s||(v&&gm(E)&&(dt(E)?E.value=v[N]:Oa(E,v[N])),i.state.value[n][N]=E);else if(typeof E=="function"){const M=S(N,E);C[N]=M,a.actions[N]=E}}return kn(U,C),kn(Ke(U),C),Object.defineProperty(U,"$state",{get:()=>i.state.value[n],set:N=>{p(E=>{kn(E,N)})}}),i._p.forEach(N=>{kn(U,o.run(()=>N({store:U,app:i._a,pinia:i,options:a})))}),v&&s&&t.hydrate&&t.hydrate(U.$state,v),c=!0,u=!0,U}function th(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=fp();return a=a||(c?Ur(Jf,null):null),a&&To(a),a=Zf,a._s.has(i)||(s?eh(i,e,r,a):vm(i,r,a)),a._s.get(i)}return o.$id=i,o}const nh=th("selection",()=>({widget:mf(null)}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="164",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xm=0,fc=1,Mm=2,ih=1,Sm=2,An=3,ti=0,zt=1,wn=2,Jn=0,ar=1,hc=2,dc=3,pc=4,Em=5,xi=100,ym=101,Tm=102,bm=103,Am=104,wm=200,Rm=201,Cm=202,Pm=203,Fa=204,Ba=205,Lm=206,Dm=207,Im=208,Um=209,Nm=210,Om=211,Fm=212,Bm=213,zm=214,Hm=0,Vm=1,Gm=2,to=3,km=4,Wm=5,Xm=6,Ym=7,rh=0,qm=1,jm=2,Qn=0,$m=1,Km=2,Zm=3,Jm=4,Qm=5,eg=6,tg=7,sh=300,fr=301,hr=302,za=303,Ha=304,bo=306,Va=1e3,Ei=1001,Ga=1002,en=1003,ng=1004,os=1005,on=1006,Yo=1007,yi=1008,ni=1009,ig=1010,rg=1011,oh=1012,ah=1013,dr=1014,$n=1015,Ao=1016,lh=1017,ch=1018,$r=1020,sg=35902,og=1021,ag=1022,mn=1023,lg=1024,cg=1025,lr=1026,Xr=1027,ug=1028,uh=1029,fg=1030,fh=1031,hh=1033,qo=33776,jo=33777,$o=33778,Ko=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,Mc=37492,Sc=37496,Ec=37808,yc=37809,Tc=37810,bc=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Ic=37819,Uc=37820,Nc=37821,Zo=36492,Oc=36494,Fc=36495,hg=36283,Bc=36284,zc=36285,Hc=36286,dg=3200,pg=3201,mg=0,gg=1,jn="",un="srgb",oi="srgb-linear",ul="display-p3",wo="display-p3-linear",no="linear",nt="srgb",io="rec709",ro="p3",Oi=7680,Vc=519,_g=512,vg=513,xg=514,dh=515,Mg=516,Sg=517,Eg=518,yg=519,Gc=35044,kc="300 es",Rn=2e3,so=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wc=1234567;const Fr=Math.PI/180,Yr=180/Math.PI;function _r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function fl(n,e){return(n%e+e)%e}function Tg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function bg(n,e,t){return n!==e?(t-n)/(e-n):0}function Br(n,e,t){return(1-t)*n+t*e}function Ag(n,e,t,i){return Br(n,e,1-Math.exp(-t*i))}function wg(n,e=1){return e-Math.abs(fl(n,e*2)-e)}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lg(n,e){return n+Math.random()*(e-n)}function Dg(n){return n*(.5-Math.random())}function Ig(n){n!==void 0&&(Wc=n);let e=Wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ug(n){return n*Fr}function Ng(n){return n*Yr}function Og(n){return(n&n-1)===0&&n!==0}function Fg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zg(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hg={DEG2RAD:Fr,RAD2DEG:Yr,generateUUID:_r,clamp:Rt,euclideanModulo:fl,mapLinear:Tg,inverseLerp:bg,lerp:Br,damp:Ag,pingpong:wg,smoothstep:Rg,smootherstep:Cg,randInt:Pg,randFloat:Lg,randFloatSpread:Dg,seededRandom:Ig,degToRad:Ug,radToDeg:Ng,isPowerOfTwo:Og,ceilPowerOfTwo:Fg,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:zg,normalize:Lt,denormalize:er};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],d=r[6],b=r[1],S=r[4],A=r[7],U=r[2],R=r[5],C=r[8];return s[0]=o*x+a*b+l*U,s[3]=o*p+a*S+l*R,s[6]=o*d+a*A+l*C,s[1]=c*x+u*b+f*U,s[4]=c*p+u*S+f*R,s[7]=c*d+u*A+f*C,s[2]=h*x+m*b+v*U,s[5]=h*p+m*S+v*R,s[8]=h*d+m*A+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new ke;function ph(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vg(){const n=oo("canvas");return n.style.display="block",n}const Xc={};function Gg(n){n in Xc||(Xc[n]=!0,console.warn(n))}const Yc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[oi]:{transfer:no,primaries:io,toReference:n=>n,fromReference:n=>n},[un]:{transfer:nt,primaries:io,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wo]:{transfer:no,primaries:ro,toReference:n=>n.applyMatrix3(qc),fromReference:n=>n.applyMatrix3(Yc)},[ul]:{transfer:nt,primaries:ro,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qc),fromReference:n=>n.applyMatrix3(Yc).convertLinearToSRGB()}},kg=new Set([oi,wo]),Qe={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!kg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=as[e].toReference,r=as[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return as[n].primaries},getTransfer:function(n){return n===jn?no:as[n].transfer}};function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class Wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=oo("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xg=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ea(r[o].image)):s.push(ea(r[o]))}else s=ea(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class Ht extends Li{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Ei,r=Ei,s=on,o=yi,a=mn,l=ni,c=Ht.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=_r(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=sh;Ht.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(m+1)/2,U=(d+1)/2,R=(u+h)/4,C=(f+x)/4,N=(v+p)/4;return S>A&&S>U?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=C/i):A>U?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=R/r,s=N/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=N/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(f-x)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qg extends Li{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends qg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jg extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==m||u!==v){let p=1-a;const d=l*h+c*m+u*v+f*x,b=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const U=Math.sqrt(S),R=Math.atan2(U,d*b);p=Math.sin(p*R)/U,a=Math.sin(a*R)/U}const A=a*b;if(l=l*p+h*A,c=c*p+m*A,u=u*p+v*A,f=f*p+x*A,p===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-a*m,e[t+2]=c*v+u*m+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new B,jc=new Ci;class Kr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ls.copy(i.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),cs.subVectors(this.max,br),Bi.subVectors(e.a,br),zi.subVectors(e.b,br),Hi.subVectors(e.c,br),Fn.subVectors(zi,Bi),Bn.subVectors(Hi,zi),ui.subVectors(Bi,Hi);let t=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ui.z,ui.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ui.z,0,-ui.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ui.y,ui.x,0];return!na(t,Bi,zi,Hi,cs)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Bi,zi,Hi,cs))?!1:(us.crossVectors(Fn,Bn),t=[us.x,us.y,us.z],na(t,Bi,zi,Hi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new B,new B,new B,new B,new B,new B,new B,new B],nn=new B,ls=new Kr,Bi=new B,zi=new B,Hi=new B,Fn=new B,Bn=new B,ui=new B,br=new B,cs=new B,us=new B,fi=new B;function na(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fi.fromArray(n,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $g=new Kr,Ar=new B,ia=new B;class Ro{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$g.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(ia)),this.expandByPoint(Ar.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new B,ra=new B,fs=new B,zn=new B,sa=new B,hs=new B,oa=new B;class hl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ra.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fs),a=zn.dot(this.direction),l=-zn.dot(fs),c=zn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ra).addScaledVector(fs,h),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,r,s){sa.subVectors(t,e),hs.subVectors(i,e),oa.crossVectors(sa,hs);let o=this.direction.dot(oa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);const l=a*this.direction.dot(hs.crossVectors(zn,hs));if(l<0)return null;const c=a*this.direction.dot(sa.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(oa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,v,x,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,v,x,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,v,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vi.setFromMatrixColumn(e,0).length(),s=1/Vi.setFromMatrixColumn(e,1).length(),o=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,x=c*f;t[0]=h+x*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kg,e,Zg)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Hn.crossVectors(i,Wt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Hn.crossVectors(i,Wt)),Hn.normalize(),ds.crossVectors(Wt,Hn),r[0]=Hn.x,r[4]=ds.x,r[8]=Wt.x,r[1]=Hn.y,r[5]=ds.y,r[9]=Wt.y,r[2]=Hn.z,r[6]=ds.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],d=i[14],b=i[3],S=i[7],A=i[11],U=i[15],R=r[0],C=r[4],N=r[8],E=r[12],M=r[1],O=r[5],j=r[9],I=r[13],Q=r[2],J=r[6],ee=r[10],ie=r[14],k=r[3],ce=r[7],ue=r[11],Me=r[15];return s[0]=o*R+a*M+l*Q+c*k,s[4]=o*C+a*O+l*J+c*ce,s[8]=o*N+a*j+l*ee+c*ue,s[12]=o*E+a*I+l*ie+c*Me,s[1]=u*R+f*M+h*Q+m*k,s[5]=u*C+f*O+h*J+m*ce,s[9]=u*N+f*j+h*ee+m*ue,s[13]=u*E+f*I+h*ie+m*Me,s[2]=v*R+x*M+p*Q+d*k,s[6]=v*C+x*O+p*J+d*ce,s[10]=v*N+x*j+p*ee+d*ue,s[14]=v*E+x*I+p*ie+d*Me,s[3]=b*R+S*M+A*Q+U*k,s[7]=b*C+S*O+A*J+U*ce,s[11]=b*N+S*j+A*ee+U*ue,s[15]=b*E+S*I+A*ie+U*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],d=e[15],b=f*p*c-x*h*c+x*l*m-a*p*m-f*l*d+a*h*d,S=v*h*c-u*p*c-v*l*m+o*p*m+u*l*d-o*h*d,A=u*x*c-v*f*c+v*a*m-o*x*m-u*a*d+o*f*d,U=v*f*l-u*x*l-v*a*h+o*x*h+u*a*p-o*f*p,R=t*b+i*S+r*A+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(x*h*s-f*p*s-x*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=S*C,e[5]=(u*p*s-v*h*s+v*r*m-t*p*m-u*r*d+t*h*d)*C,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*C,e[8]=A*C,e[9]=(v*f*s-u*x*s-v*i*m+t*x*m+u*i*d-t*f*d)*C,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=U*C,e[13]=(u*x*r-v*f*r+v*i*h-t*x*h-u*i*p+t*f*p)*C,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,v=s*f,x=o*u,p=o*f,d=a*f,b=l*c,S=l*u,A=l*f,U=i.x,R=i.y,C=i.z;return r[0]=(1-(x+d))*U,r[1]=(m+A)*U,r[2]=(v-S)*U,r[3]=0,r[4]=(m-A)*R,r[5]=(1-(h+d))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(v+S)*C,r[9]=(p-b)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const o=Vi.set(r[4],r[5],r[6]).length(),a=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/o,f=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(a===Rn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===so)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Rn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let v,x;if(a===Rn)v=(o+s)*f,x=-2*f;else if(a===so)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vi=new B,rn=new ut,Kg=new B(0,0,0),Zg=new B(1,1,1),Hn=new B,ds=new B,Wt=new B,$c=new ut,Kc=new Ci;class Ln{constructor(e=0,t=0,i=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jg=0;const Zc=new B,Gi=new Ci,yn=new ut,ps=new B,wr=new B,Qg=new B,e_=new Ci,Jc=new B(1,0,0),Qc=new B(0,1,0),eu=new B(0,0,1),tu={type:"added"},t_={type:"removed"},ki={type:"childadded",child:null},aa={type:"childremoved",child:null};class Vt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new B,t=new Ln,i=new Ci,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ps.copy(e):ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(wr,ps,this.up):yn.lookAt(ps,wr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(yn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t_),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new B(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new B,Tn=new B,la=new B,bn=new B,Wi=new B,Xi=new B,nu=new B,ca=new B,ua=new B,fa=new B;class pn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),Tn.subVectors(i,t),la.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(Tn),l=sn.dot(la),c=Tn.dot(Tn),u=Tn.dot(la),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),Tn.subVectors(e,t),sn.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),sn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Wi.subVectors(r,i),Xi.subVectors(s,i),ca.subVectors(e,i);const l=Wi.dot(ca),c=Xi.dot(ca);if(l<=0&&c<=0)return t.copy(i);ua.subVectors(e,r);const u=Wi.dot(ua),f=Xi.dot(ua);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Wi,o);fa.subVectors(e,s);const m=Wi.dot(fa),v=Xi.dot(fa);if(v>=0&&m<=v)return t.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Xi,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return nu.subVectors(s,r),a=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(nu,a);const d=1/(p+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function ha(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=fl(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ha(o,s,e+1/3),this.g=ha(o,s,e),this.b=ha(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Qe.fromWorkingColorSpace(bt.copy(this),e),Math.round(Rt(bt.r*255,0,255))*65536+Math.round(Rt(bt.g*255,0,255))*256+Math.round(Rt(bt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=un){Qe.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(ms);const i=Br(Vn.h,ms.h,t),r=Br(Vn.s,ms.s,t),s=Br(Vn.l,ms.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new $e;$e.NAMES=vh;let n_=0;class Zr extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=ar,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ba,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ba&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dl extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new B,gs=new De;class _n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class xh extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mh extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let i_=0;const Zt=new ut,da=new Vt,Yi=new B,Xt=new Kr,Rr=new Kr,_t=new B;class Nt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?Mh:xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Xt.min,Rr.min),Xt.expandByPoint(_t),_t.addVectors(Xt.max,Rr.max),Xt.expandByPoint(_t)):(Xt.expandByPoint(Rr.min),Xt.expandByPoint(Rr.max))}Xt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),_t.add(Yi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new B,l[N]=new B;const c=new B,u=new B,f=new B,h=new De,m=new De,v=new De,x=new B,p=new B;function d(N,E,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(O),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(O),a[N].add(x),a[E].add(x),a[M].add(x),l[N].add(p),l[E].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,E=b.length;N<E;++N){const M=b[N],O=M.start,j=M.count;for(let I=O,Q=O+j;I<Q;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new B,A=new B,U=new B,R=new B;function C(N){U.fromBufferAttribute(r,N),R.copy(U);const E=a[N];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),A.crossVectors(R,E);const O=A.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,O)}for(let N=0,E=b.length;N<E;++N){const M=b[N],O=M.start,j=M.count;for(let I=O,Q=O+j;I<Q;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new _n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new ut,hi=new hl,_s=new Ro,ru=new B,qi=new B,ji=new B,$i=new B,pa=new B,vs=new B,xs=new De,Ms=new De,Ss=new De,su=new B,ou=new B,au=new B,Es=new B,ys=new B;class gn extends Vt{constructor(e=new Nt,t=new dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(pa.fromBufferAttribute(f,e),o?vs.addScaledVector(pa,u):vs.addScaledVector(pa.sub(t),u))}t.add(vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(_s.containsPoint(hi.origin)===!1&&(hi.intersectSphere(_s,ru)===null||hi.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(iu.copy(s).invert(),hi.copy(e.ray).applyMatrix4(iu),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],d=o[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,U=S;A<U;A+=3){const R=a.getX(A),C=a.getX(A+1),N=a.getX(A+2);r=Ts(this,d,e,i,c,u,f,R,C,N),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,d=x;p<d;p+=3){const b=a.getX(p),S=a.getX(p+1),A=a.getX(p+2);r=Ts(this,o,e,i,c,u,f,b,S,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],d=o[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,U=S;A<U;A+=3){const R=A,C=A+1,N=A+2;r=Ts(this,d,e,i,c,u,f,R,C,N),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,d=x;p<d;p+=3){const b=p,S=p+1,A=p+2;r=Ts(this,o,e,i,c,u,f,b,S,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function r_(n,e,t,i,r,s,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;ys.copy(a),ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:n}}function Ts(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,qi),n.getVertexPosition(l,ji),n.getVertexPosition(c,$i);const u=r_(n,e,t,i,qi,ji,$i,Es);if(u){r&&(xs.fromBufferAttribute(r,a),Ms.fromBufferAttribute(r,l),Ss.fromBufferAttribute(r,c),u.uv=pn.getInterpolation(Es,qi,ji,$i,xs,Ms,Ss,new De)),s&&(xs.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,l),Ss.fromBufferAttribute(s,c),u.uv1=pn.getInterpolation(Es,qi,ji,$i,xs,Ms,Ss,new De)),o&&(su.fromBufferAttribute(o,a),ou.fromBufferAttribute(o,l),au.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(Es,qi,ji,$i,su,ou,au,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};pn.getNormal(qi,ji,$i,f.normal),u.face=f}return u}class vr extends Nt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function v(x,p,d,b,S,A,U,R,C,N,E){const M=A/C,O=U/N,j=A/2,I=U/2,Q=R/2,J=C+1,ee=N+1;let ie=0,k=0;const ce=new B;for(let ue=0;ue<ee;ue++){const Me=ue*O-I;for(let Re=0;Re<J;Re++){const qe=Re*M-j;ce[x]=qe*b,ce[p]=Me*S,ce[d]=Q,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[p]=0,ce[d]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Re/C),f.push(1-ue/N),ie+=1}}for(let ue=0;ue<N;ue++)for(let Me=0;Me<C;Me++){const Re=h+Me+J*ue,qe=h+Me+J*(ue+1),te=h+(Me+1)+J*(ue+1),fe=h+(Me+1)+J*ue;l.push(Re,qe,fe),l.push(qe,te,fe),k+=6}a.addGroup(m,k,E),m+=k,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const r in i)e[r]=i[r]}return e}function s_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const o_={clone:pr,merge:Dt};var a_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=s_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new B,lu=new De,cu=new De;class Jt extends Eh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class c_ extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class yh extends Ht{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u_ extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Jn});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=on),new c_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ma=new B,f_=new B,h_=new ke;class qn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ma.subVectors(i,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||h_.getNormalMatrix(e),r=this.coplanarPoint(ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ro,bs=new B;class Th{constructor(e=new qn,t=new qn,i=new qn,r=new qn,s=new qn,o=new qn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],d=r[12],b=r[13],S=r[14],A=r[15];if(i[0].setComponents(l-s,h-c,p-m,A-d).normalize(),i[1].setComponents(l+s,h+c,p+m,A+d).normalize(),i[2].setComponents(l+o,h+u,p+v,A+b).normalize(),i[3].setComponents(l-o,h-u,p-v,A-b).normalize(),i[4].setComponents(l-a,h-f,p-x,A-S).normalize(),t===Rn)i[5].setComponents(l+a,h+f,p+x,A+S).normalize();else if(t===so)i[5].setComponents(a,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bs.x=r.normal.x>0?e.max.x:e.min.x,bs.y=r.normal.y>0?e.max.y:e.min.y,bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function d_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let m=0,v=h.length;m<v;m++){const x=h[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Jr extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],v=[],x=[],p=[];for(let d=0;d<u;d++){const b=d*h-o;for(let S=0;S<c;S++){const A=S*f-s;v.push(A,-b,0),x.push(0,0,1),p.push(S/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const S=b+c*d,A=b+c*(d+1),U=b+1+c*(d+1),R=b+1+c*d;m.push(S,A,R),m.push(A,U,R)}this.setIndex(m),this.setAttribute("position",new et(v,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,T_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,S0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:__,alphatest_fragment:v_,alphatest_pars_fragment:x_,aomap_fragment:M_,aomap_pars_fragment:S_,batching_pars_vertex:E_,batching_vertex:y_,begin_vertex:T_,beginnormal_vertex:b_,bsdfs:A_,iridescence_fragment:w_,bumpmap_pars_fragment:R_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:L_,clipping_planes_vertex:D_,color_fragment:I_,color_pars_fragment:U_,color_pars_vertex:N_,color_vertex:O_,common:F_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:H_,displacementmap_vertex:V_,emissivemap_fragment:G_,emissivemap_pars_fragment:k_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:Y_,envmap_common_pars_fragment:q_,envmap_pars_fragment:j_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:ov,envmap_vertex:K_,fog_vertex:Z_,fog_pars_vertex:J_,fog_fragment:Q_,fog_pars_fragment:ev,gradientmap_pars_fragment:tv,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:rv,lights_pars_begin:sv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:hv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,logdepthbuf_fragment:gv,logdepthbuf_pars_fragment:_v,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:xv,map_fragment:Mv,map_pars_fragment:Sv,map_particle_fragment:Ev,map_particle_pars_fragment:yv,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:bv,morphinstance_vertex:Av,morphcolor_vertex:wv,morphnormal_vertex:Rv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Pv,normal_fragment_begin:Lv,normal_fragment_maps:Dv,normal_pars_fragment:Iv,normal_pars_vertex:Uv,normal_vertex:Nv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:Hv,opaque_fragment:Vv,packing:Gv,premultiplied_alpha_fragment:kv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:Yv,roughnessmap_fragment:qv,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Kv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:Qv,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:r0,tonemapping_fragment:s0,tonemapping_pars_fragment:o0,transmission_fragment:a0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:u0,uv_vertex:f0,worldpos_vertex:h0,background_vert:d0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:v0,depth_vert:x0,depth_frag:M0,distanceRGBA_vert:S0,distanceRGBA_frag:E0,equirect_vert:y0,equirect_frag:T0,linedashed_vert:b0,linedashed_frag:A0,meshbasic_vert:w0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:I0,meshnormal_frag:U0,meshphong_vert:N0,meshphong_frag:O0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:V0,points_frag:G0,shadow_vert:k0,shadow_frag:W0,sprite_vert:X0,sprite_frag:Y0},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hn={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hn.physical={uniforms:Dt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const As={r:0,b:0,g:0},pi=new Ln,q0=new ut;function j0(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1;const A=v(b);A===null?d(a,l):A&&A.isColor&&(d(A,1),S=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function p(b,S){const A=v(S);A&&(A.isCubeTexture||A.mapping===bo)?(u===void 0&&(u=new gn(new vr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:pr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(pi)),u.material.toneMapped=Qe.getTransfer(A.colorSpace)!==nt,(f!==A||h!==A.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new gn(new Jr(2,2),new ii({name:"BackgroundMaterial",uniforms:pr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,S){b.getRGB(As,Sh(n)),i.buffers.color.setClear(As.r,As.g,As.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:p}}function $0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,O,j,I,Q){let J=!1;const ee=f(I,j,O);s!==ee&&(s=ee,c(s.object)),J=m(M,I,j,Q),J&&v(M,I,j,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,A(M,O,j,I),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,O,j){const I=j.wireframe===!0;let Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let J=Q[O.id];J===void 0&&(J={},Q[O.id]=J);let ee=J[I];return ee===void 0&&(ee=h(l()),J[I]=ee),ee}function h(M){const O=[],j=[],I=[];for(let Q=0;Q<t;Q++)O[Q]=0,j[Q]=0,I[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,O,j,I){const Q=s.attributes,J=O.attributes;let ee=0;const ie=j.getAttributes();for(const k in ie)if(ie[k].location>=0){const ue=Q[k];let Me=J[k];if(Me===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;ee++}return s.attributesNum!==ee||s.index!==I}function v(M,O,j,I){const Q={},J=O.attributes;let ee=0;const ie=j.getAttributes();for(const k in ie)if(ie[k].location>=0){let ue=J[k];ue===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),Q[k]=Me,ee++}s.attributes=Q,s.attributesNum=ee,s.index=I}function x(){const M=s.newAttributes;for(let O=0,j=M.length;O<j;O++)M[O]=0}function p(M){d(M,0)}function d(M,O){const j=s.newAttributes,I=s.enabledAttributes,Q=s.attributeDivisors;j[M]=1,I[M]===0&&(n.enableVertexAttribArray(M),I[M]=1),Q[M]!==O&&(n.vertexAttribDivisor(M,O),Q[M]=O)}function b(){const M=s.newAttributes,O=s.enabledAttributes;for(let j=0,I=O.length;j<I;j++)O[j]!==M[j]&&(n.disableVertexAttribArray(j),O[j]=0)}function S(M,O,j,I,Q,J,ee){ee===!0?n.vertexAttribIPointer(M,O,j,Q,J):n.vertexAttribPointer(M,O,j,I,Q,J)}function A(M,O,j,I){x();const Q=I.attributes,J=j.getAttributes(),ee=O.defaultAttributeValues;for(const ie in J){const k=J[ie];if(k.location>=0){let ce=Q[ie];if(ce===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const ue=ce.normalized,Me=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const qe=Re.buffer,te=Re.type,fe=Re.bytesPerElement,ve=te===n.INT||te===n.UNSIGNED_INT||ce.gpuType===ah;if(ce.isInterleavedBufferAttribute){const de=ce.data,Fe=de.stride,Be=ce.offset;if(de.isInstancedInterleavedBuffer){for(let H=0;H<k.locationSize;H++)d(k.location+H,de.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let H=0;H<k.locationSize;H++)p(k.location+H);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let H=0;H<k.locationSize;H++)S(k.location+H,Me/k.locationSize,te,ue,Fe*fe,(Be+Me/k.locationSize*H)*fe,ve)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<k.locationSize;de++)d(k.location+de,ce.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<k.locationSize;de++)p(k.location+de);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let de=0;de<k.locationSize;de++)S(k.location+de,Me/k.locationSize,te,ue,Me*fe,Me/k.locationSize*de*fe,ve)}}else if(ee!==void 0){const ue=ee[ie];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(k.location,ue);break;case 3:n.vertexAttrib3fv(k.location,ue);break;case 4:n.vertexAttrib4fv(k.location,ue);break;default:n.vertexAttrib1fv(k.location,ue)}}}}b()}function U(){N();for(const M in i){const O=i[M];for(const j in O){const I=O[j];for(const Q in I)u(I[Q].object),delete I[Q];delete O[j]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const O=i[M.id];for(const j in O){const I=O[j];for(const Q in I)u(I[Q].object),delete I[Q];delete O[j]}delete i[M.id]}function C(M){for(const O in i){const j=i[O];if(j[M.id]===void 0)continue;const I=j[M.id];for(const Q in I)u(I[Q].object),delete I[Q];delete j[M.id]}}function N(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function K0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f;m++)this.render(c[m],u[m]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<h.length;x++)t.update(v,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Z0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ni&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:U}}function J0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new qn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,S=b*4;let A=d.clippingState||null;l.value=A,A=u(v,h,S,m);for(let U=0;U!==S;++U)A[U]=t[U];d.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const d=m+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,A=m;S!==x;++S,A+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Q0(n){let e=new WeakMap;function t(o,a){return a===za?o.mapping=fr:a===Ha&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new u_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ex extends Eh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const tr=4,uu=[.125,.215,.35,.446,.526,.582],Mi=20,ga=new ex,fu=new $e;let _a=null,va=0,xa=0,Ma=!1;const gi=(1+Math.sqrt(5))/2,Ji=1/gi,hu=[new B(-gi,Ji,0),new B(gi,Ji,0),new B(-Ji,0,gi),new B(Ji,0,gi),new B(0,gi,-Ji),new B(0,gi,Ji),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,va,xa),this._renderer.xr.enabled=Ma,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ao,format:mn,colorSpace:oi,depthBuffer:!1},r=pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(s)),this._blurMaterial=nx(s,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(fu),u.toneMapping=Qn,u.autoClear=!1;const m=new dl({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),v=new gn(new vr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(fu),x=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const S=this._cubeSize;ws(r,b*S,d>2?S:0,S,S),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hu[(r-s-1)%hu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):Mi;p>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const d=[];let b=0;for(let C=0;C<Mi;++C){const N=C/x,E=Math.exp(-N*N/2);d.push(E),C===0?b+=E:C<p&&(b+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-i;const A=this._sizeLods[r],U=3*A*(r>S-tr?r-S+tr:0),R=4*(this._cubeSize-A);ws(t,U,R,3*A,2*A),l.setRenderTarget(t),l.render(f,ga)}}function tx(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-tr?l=uu[o-n+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,x=3,p=2,d=1,b=new Float32Array(x*v*m),S=new Float32Array(p*v*m),A=new Float32Array(d*v*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,N=R>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];b.set(E,x*v*R),S.set(h,p*v*R);const M=[R,R,R,R,R,R];A.set(M,d*v*R)}const U=new Nt;U.setAttribute("position",new _n(b,x)),U.setAttribute("uv",new _n(S,p)),U.setAttribute("faceIndex",new _n(A,d)),e.push(U),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pu(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nx(n,e,t){const i=new Float32Array(Mi),r=new B(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function mu(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function gu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ix(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===za||l===Ha,u=l===fr||l===hr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new du(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new du(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let S=0,A=b.length;S<A;S+=3){const U=b[S+0],R=b[S+1],C=b[S+2];h.push(U,R,R,C,C,U)}}else if(v!==void 0){const b=v.array;x=v.version;for(let S=0,A=b.length/3-1;S<A;S+=3){const U=S+0,R=S+1,C=S+2;h.push(U,R,R,C,C,U)}}else return;const p=new(ph(h)?Mh:xh)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ox(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,h*o,v),t.update(m,i,v))}function u(h,m,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<v;p++)this.render(h[p]/o,m[p]);else{x.multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,i,1)}}function f(h,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,v);let d=0;for(let b=0;b<v;b++)d+=m[b];for(let b=0;b<x.length;b++)t.update(d,i,x[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ax(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lx(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let A=0;v===!0&&(A=1),x===!0&&(A=2),p===!0&&(A=3);let U=a.attributes.position.count*A,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*R*4*f),N=new gh(C,U,R,f);N.type=$n,N.needsUpdate=!0;const E=A*4;for(let O=0;O<f;O++){const j=d[O],I=b[O],Q=S[O],J=U*R*4*O;for(let ee=0;ee<j.count;ee++){const ie=ee*E;v===!0&&(r.fromBufferAttribute(j,ee),C[J+ie+0]=r.x,C[J+ie+1]=r.y,C[J+ie+2]=r.z,C[J+ie+3]=0),x===!0&&(r.fromBufferAttribute(I,ee),C[J+ie+4]=r.x,C[J+ie+5]=r.y,C[J+ie+6]=r.z,C[J+ie+7]=0),p===!0&&(r.fromBufferAttribute(Q,ee),C[J+ie+8]=r.x,C[J+ie+9]=r.y,C[J+ie+10]=r.z,C[J+ie+11]=Q.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new De(U,R)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function cx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ah extends Ht{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:lr,u!==lr&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===lr&&(i=dr),i===void 0&&u===Xr&&(i=$r),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wh=new Ht,Rh=new Ah(1,1);Rh.compareFunction=dh;const Ch=new gh,Ph=new jg,Lh=new yh,_u=[],vu=[],xu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Co(n,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Su.set(i),n.uniformMatrix2fv(this.addr,!1,Su),mt(t,i)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Mu.set(i),n.uniformMatrix3fv(this.addr,!1,Mu),mt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),mt(t,i)}}function _x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Rh:wh;t.setTexture2D(e||s,r)}function Ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ph,r)}function wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Lh,r)}function Rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ch,r)}function Cx(n){switch(n){case 5126:return ux;case 35664:return fx;case 35665:return hx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return Ex;case 36295:return yx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(n,e){n.uniform1fv(this.addr,e)}function Lx(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dx(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ix(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ux(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nx(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ox(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fx(n,e){n.uniform1iv(this.addr,e)}function Bx(n,e){n.uniform2iv(this.addr,e)}function zx(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function Vx(n,e){n.uniform1uiv(this.addr,e)}function Gx(n,e){n.uniform2uiv(this.addr,e)}function kx(n,e){n.uniform3uiv(this.addr,e)}function Wx(n,e){n.uniform4uiv(this.addr,e)}function Xx(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wh,s[o])}function Yx(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ph,s[o])}function qx(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Lh,s[o])}function jx(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ch,s[o])}function $x(n){switch(n){case 5126:return Px;case 35664:return Lx;case 35665:return Dx;case 35666:return Ix;case 35674:return Ux;case 35675:return Nx;case 35676:return Ox;case 5124:case 35670:return Fx;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return kx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return jx}}class Kx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}}class Jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Eu(n,e){n.seq.push(e),n.map[e.id]=e}function Qx(n,e,t){const i=n.name,r=i.length;for(Sa.lastIndex=0;;){const s=Sa.exec(i),o=Sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Eu(t,c===void 0?new Kx(a,n,e):new Zx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Jx(a),Eu(t,f)),t=f}}}class zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Qx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function yu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eM=37297;let tM=0;function nM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iM(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===ro&&t===io?i="LinearDisplayP3ToLinearSRGB":e===io&&t===ro&&(i="LinearSRGBToLinearDisplayP3"),n){case oi:case wo:return[i,"LinearTransferOETF"];case un:case ul:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Tu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nM(n.getShaderSource(e),o)}else return r}function rM(n,e){const t=iM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sM(n,e){let t;switch(e){case $m:t="Linear";break;case Km:t="Reinhard";break;case Zm:t="OptimizedCineon";break;case Jm:t="ACESFilmic";break;case eg:t="AgX";break;case tg:t="Neutral";break;case Qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function aM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Lr(n){return n!==""}function bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(n){return n.replace(cM,fM)}const uM=new Map;function fM(n,e){let t=Ge[e];if(t===void 0){const i=uM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ka(t)}const hM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(n){return n.replace(hM,dM)}function dM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ru(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case hr:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function _M(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rh:e="ENVMAP_BLENDING_MULTIPLY";break;case qm:e="ENVMAP_BLENDING_MIX";break;case jm:e="ENVMAP_BLENDING_ADD";break}return e}function vM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pM(t),c=mM(t),u=gM(t),f=_M(t),h=vM(t),m=oM(t),v=aM(s),x=r.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),d.length>0&&(d+=`
`)):(p=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),d=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Qn?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=ka(o),o=bu(o,t),o=Au(o,t),a=ka(a),a=bu(a,t),a=Au(a,t),o=wu(o),a=wu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=b+p+o,A=b+d+a,U=yu(r,r.VERTEX_SHADER,S),R=yu(r,r.FRAGMENT_SHADER,A);r.attachShader(x,U),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(O){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),I=r.getShaderInfoLog(U).trim(),Q=r.getShaderInfoLog(R).trim();let J=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,U,R);else{const ie=Tu(r,U,"vertex"),k=Tu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+j+`
`+ie+`
`+k)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(I===""||Q==="")&&(ee=!1);ee&&(O.diagnostics={runnable:J,programLog:j,vertexShader:{log:I,prefix:p},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(U),r.deleteShader(R),N=new zs(r,x),E=lM(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,eM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=R,this}let MM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new EM(e),t.set(e,i)),i}}class EM{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}}function yM(n,e,t,i,r,s,o){const a=new _h,l=new SM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,O,j,I){const Q=j.fog,J=I.geometry,ee=E.isMeshStandardMaterial?j.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),k=ie&&ie.mapping===bo?ie.image.height:null,ce=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=ue!==void 0?ue.length:0;let Re=0;J.morphAttributes.position!==void 0&&(Re=1),J.morphAttributes.normal!==void 0&&(Re=2),J.morphAttributes.color!==void 0&&(Re=3);let qe,te,fe,ve;if(ce){const je=hn[ce];qe=je.vertexShader,te=je.fragmentShader}else qe=E.vertexShader,te=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const de=n.getRenderTarget(),Fe=I.isInstancedMesh===!0,Be=I.isBatchedMesh===!0,H=!!E.map,Ze=!!E.matcap,be=!!ie,w=!!E.aoMap,P=!!E.lightMap,G=!!E.bumpMap,$=!!E.normalMap,K=!!E.displacementMap,se=!!E.emissiveMap,y=!!E.metalnessMap,g=!!E.roughnessMap,L=E.anisotropy>0,D=E.clearcoat>0,V=E.dispersion>0,X=E.iridescence>0,oe=E.sheen>0,ne=E.transmission>0,re=L&&!!E.anisotropyMap,ge=D&&!!E.clearcoatMap,ae=D&&!!E.clearcoatNormalMap,me=D&&!!E.clearcoatRoughnessMap,Ce=X&&!!E.iridescenceMap,ye=X&&!!E.iridescenceThicknessMap,xe=oe&&!!E.sheenColorMap,Le=oe&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ie=!!E.specularColorMap,Ae=!!E.specularIntensityMap,_=ne&&!!E.transmissionMap,F=ne&&!!E.thicknessMap,W=!!E.gradientMap,le=!!E.alphaMap,he=E.alphaTest>0,He=!!E.alphaHash,We=!!E.extensions;let ot=Qn;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ot=n.toneMapping);const gt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:qe,fragmentShader:te,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Be,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:oi,alphaToCoverage:!!E.alphaToCoverage,map:H,matcap:Ze,envMap:be,envMapMode:be&&ie.mapping,envMapCubeUVHeight:k,aoMap:w,lightMap:P,bumpMap:G,normalMap:$,displacementMap:h&&K,emissiveMap:se,normalMapObjectSpace:$&&E.normalMapType===gg,normalMapTangentSpace:$&&E.normalMapType===mg,metalnessMap:y,roughnessMap:g,anisotropy:L,anisotropyMap:re,clearcoat:D,clearcoatMap:ge,clearcoatNormalMap:ae,clearcoatRoughnessMap:me,dispersion:V,iridescence:X,iridescenceMap:Ce,iridescenceThicknessMap:ye,sheen:oe,sheenColorMap:xe,sheenRoughnessMap:Le,specularMap:ze,specularColorMap:Ie,specularIntensityMap:Ae,transmission:ne,transmissionMap:_,thicknessMap:F,gradientMap:W,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:He,combine:E.combine,mapUv:H&&x(E.map.channel),aoMapUv:w&&x(E.aoMap.channel),lightMapUv:P&&x(E.lightMap.channel),bumpMapUv:G&&x(E.bumpMap.channel),normalMapUv:$&&x(E.normalMap.channel),displacementMapUv:K&&x(E.displacementMap.channel),emissiveMapUv:se&&x(E.emissiveMap.channel),metalnessMapUv:y&&x(E.metalnessMap.channel),roughnessMapUv:g&&x(E.roughnessMap.channel),anisotropyMapUv:re&&x(E.anisotropyMap.channel),clearcoatMapUv:ge&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(E.sheenRoughnessMap.channel),specularMapUv:ze&&x(E.specularMap.channel),specularColorMapUv:Ie&&x(E.specularColorMap.channel),specularIntensityMapUv:Ae&&x(E.specularIntensityMap.channel),transmissionMapUv:_&&x(E.transmissionMap.channel),thicknessMapUv:F&&x(E.thicknessMap.channel),alphaMapUv:le&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&($||L),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!J.attributes.uv&&(H||le),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:H&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===zt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:We&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)M.push(O),M.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(b(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),E.push(a.mask)}function A(E){const M=v[E.type];let O;if(M){const j=hn[M];O=o_.clone(j.uniforms)}else O=E.uniforms;return O}function U(E,M){let O;for(let j=0,I=u.length;j<I;j++){const Q=u[j];if(Q.cacheKey===M){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new xM(n,M,E,s),u.push(O)),O}function R(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:U,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function TM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,v,x,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,m,v,x,p){const d=o(f,h,m,v,x,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,v,x,p){const d=o(f,h,m,v,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||bM),i.length>1&&i.sort(h||Cu),r.length>1&&r.sort(h||Cu)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function AM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Pu,n.set(i,[o])):r>=s.length?(o=new Pu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function RM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CM=0;function PM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LM(n){const e=new wM,t=RM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new ut,o=new ut;function a(c,u){let f=0,h=0,m=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let v=0,x=0,p=0,d=0,b=0,S=0,A=0,U=0,R=0,C=0,N=0;c.sort(PM);const E=u===!0?Math.PI:1;for(let O=0,j=c.length;O<j;O++){const I=c[O],Q=I.color,J=I.intensity,ee=I.distance,ie=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=Q.r*J*E,h+=Q.g*J*E,m+=Q.b*J*E;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],J);N++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const ce=I.shadow,ue=t.get(I);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.directionalShadow[v]=ue,i.directionalShadowMap[v]=ie,i.directionalShadowMatrix[v]=I.shadow.matrix,S++}i.directional[v]=k,v++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(Q).multiplyScalar(J*E),k.distance=ee,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[p]=k;const ce=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,ce.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[p]=ce.matrix,I.castShadow){const ue=t.get(I);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.spotShadow[p]=ue,i.spotShadowMap[p]=ie,U++}p++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(Q).multiplyScalar(J),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[d]=k,d++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*E),k.distance=I.distance,k.decay=I.decay,I.castShadow){const ce=I.shadow,ue=t.get(I);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,i.pointShadow[x]=ue,i.pointShadowMap[x]=ie,i.pointShadowMatrix[x]=I.shadow.matrix,A++}i.point[x]=k,x++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(J*E),k.groundColor.copy(I.groundColor).multiplyScalar(J*E),i.hemi[b]=k,b++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=m;const M=i.hash;(M.directionalLength!==v||M.pointLength!==x||M.spotLength!==p||M.rectAreaLength!==d||M.hemiLength!==b||M.numDirectionalShadows!==S||M.numPointShadows!==A||M.numSpotShadows!==U||M.numSpotMaps!==R||M.numLightProbes!==N)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=d,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=U+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,M.directionalLength=v,M.pointLength=x,M.spotLength=p,M.rectAreaLength=d,M.hemiLength=b,M.numDirectionalShadows=S,M.numPointShadows=A,M.numSpotShadows=U,M.numSpotMaps=R,M.numLightProbes=N,i.version=CM++)}function l(c,u){let f=0,h=0,m=0,v=0,x=0;const p=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const S=c[d];if(S.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(S.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Lu(n){const e=new LM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Lu(n),e.set(r,[a])):s>=o.length?(a=new Lu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class IM extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UM extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FM(n,e,t){let i=new Th;const r=new De,s=new De,o=new St,a=new IM({depthPacking:pg}),l=new UM,c={},u=t.maxTextureSize,f={[ti]:zt,[zt]:ti,[wn]:wn},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:NM,fragmentShader:OM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Nt;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let d=this.type;this.render=function(R,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Jn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const I=d!==An&&this.type===An,Q=d===An&&this.type!==An;for(let J=0,ee=R.length;J<ee;J++){const ie=R[J],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ce=k.getFrameExtents();if(r.multiply(ce),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,k.mapSize.y=s.y)),k.map===null||I===!0||Q===!0){const Me=this.type!==An?{minFilter:en,magFilter:en}:{};k.map!==null&&k.map.dispose(),k.map=new Ri(r.x,r.y,Me),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ue=k.getViewportCount();for(let Me=0;Me<ue;Me++){const Re=k.getViewport(Me);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),j.viewport(o),k.updateMatrices(ie,Me),i=k.getFrustum(),A(C,N,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===An&&b(k,N),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,O)};function b(R,C){const N=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,N,m,x,null)}function S(R,C,N,E){let M=null;const O=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)M=O;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=M.uuid,I=C.uuid;let Q=c[j];Q===void 0&&(Q={},c[j]=Q);let J=Q[I];J===void 0&&(J=M.clone(),Q[I]=J,C.addEventListener("dispose",U)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,E===An?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=n.properties.get(M);j.light=N}return M}function A(R,C,N,E,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===An)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const I=e.update(R),Q=R.material;if(Array.isArray(Q)){const J=I.groups;for(let ee=0,ie=J.length;ee<ie;ee++){const k=J[ee],ce=Q[k.materialIndex];if(ce&&ce.visible){const ue=S(R,ce,E,M);R.onBeforeShadow(n,R,C,N,I,ue,k),n.renderBufferDirect(N,null,I,ue,R,k),R.onAfterShadow(n,R,C,N,I,ue,k)}}}else if(Q.visible){const J=S(R,Q,E,M);R.onBeforeShadow(n,R,C,N,I,J,null),n.renderBufferDirect(N,null,I,J,R,null),R.onAfterShadow(n,R,C,N,I,J,null)}}const j=R.children;for(let I=0,Q=j.length;I<Q;I++)A(j[I],C,N,E,M)}function U(R){R.target.removeEventListener("dispose",U);for(const N in c){const E=c[N],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function BM(n){function e(){let _=!1;const F=new St;let W=null;const le=new St(0,0,0,0);return{setMask:function(he){W!==he&&!_&&(n.colorMask(he,he,he,he),W=he)},setLocked:function(he){_=he},setClear:function(he,He,We,ot,gt){gt===!0&&(he*=ot,He*=ot,We*=ot),F.set(he,He,We,ot),le.equals(F)===!1&&(n.clearColor(he,He,We,ot),le.copy(F))},reset:function(){_=!1,W=null,le.set(-1,0,0,0)}}}function t(){let _=!1,F=null,W=null,le=null;return{setTest:function(he){he?ve(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(he){F!==he&&!_&&(n.depthMask(he),F=he)},setFunc:function(he){if(W!==he){switch(he){case Hm:n.depthFunc(n.NEVER);break;case Vm:n.depthFunc(n.ALWAYS);break;case Gm:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case km:n.depthFunc(n.EQUAL);break;case Wm:n.depthFunc(n.GEQUAL);break;case Xm:n.depthFunc(n.GREATER);break;case Ym:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=he}},setLocked:function(he){_=he},setClear:function(he){le!==he&&(n.clearDepth(he),le=he)},reset:function(){_=!1,F=null,W=null,le=null}}}function i(){let _=!1,F=null,W=null,le=null,he=null,He=null,We=null,ot=null,gt=null;return{setTest:function(je){_||(je?ve(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(je){F!==je&&!_&&(n.stencilMask(je),F=je)},setFunc:function(je,at,tt){(W!==je||le!==at||he!==tt)&&(n.stencilFunc(je,at,tt),W=je,le=at,he=tt)},setOp:function(je,at,tt){(He!==je||We!==at||ot!==tt)&&(n.stencilOp(je,at,tt),He=je,We=at,ot=tt)},setLocked:function(je){_=je},setClear:function(je){gt!==je&&(n.clearStencil(je),gt=je)},reset:function(){_=!1,F=null,W=null,le=null,he=null,He=null,We=null,ot=null,gt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,v=!1,x=null,p=null,d=null,b=null,S=null,A=null,U=null,R=new $e(0,0,0),C=0,N=!1,E=null,M=null,O=null,j=null,I=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=ee>=1):ie.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=ee>=2);let k=null,ce={};const ue=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Re=new St().fromArray(ue),qe=new St().fromArray(Me);function te(_,F,W,le){const he=new Uint8Array(4),He=n.createTexture();n.bindTexture(_,He),n.texParameteri(_,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(_,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<W;We++)_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?n.texImage3D(F,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(F+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return He}const fe={};fe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),s.setFunc(to),G(!1),$(fc),ve(n.CULL_FACE),w(Jn);function ve(_){c[_]!==!0&&(n.enable(_),c[_]=!0)}function de(_){c[_]!==!1&&(n.disable(_),c[_]=!1)}function Fe(_,F){return u[_]!==F?(n.bindFramebuffer(_,F),u[_]=F,_===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=F),_===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=F),!0):!1}function Be(_,F){let W=h,le=!1;if(_){W=f.get(F),W===void 0&&(W=[],f.set(F,W));const he=_.textures;if(W.length!==he.length||W[0]!==n.COLOR_ATTACHMENT0){for(let He=0,We=he.length;He<We;He++)W[He]=n.COLOR_ATTACHMENT0+He;W.length=he.length,le=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,le=!0);le&&n.drawBuffers(W)}function H(_){return m!==_?(n.useProgram(_),m=_,!0):!1}const Ze={[xi]:n.FUNC_ADD,[ym]:n.FUNC_SUBTRACT,[Tm]:n.FUNC_REVERSE_SUBTRACT};Ze[bm]=n.MIN,Ze[Am]=n.MAX;const be={[wm]:n.ZERO,[Rm]:n.ONE,[Cm]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[Nm]:n.SRC_ALPHA_SATURATE,[Im]:n.DST_COLOR,[Lm]:n.DST_ALPHA,[Pm]:n.ONE_MINUS_SRC_COLOR,[Ba]:n.ONE_MINUS_SRC_ALPHA,[Um]:n.ONE_MINUS_DST_COLOR,[Dm]:n.ONE_MINUS_DST_ALPHA,[Om]:n.CONSTANT_COLOR,[Fm]:n.ONE_MINUS_CONSTANT_COLOR,[Bm]:n.CONSTANT_ALPHA,[zm]:n.ONE_MINUS_CONSTANT_ALPHA};function w(_,F,W,le,he,He,We,ot,gt,je){if(_===Jn){v===!0&&(de(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),_!==Em){if(_!==x||je!==N){if((p!==xi||S!==xi)&&(n.blendEquation(n.FUNC_ADD),p=xi,S=xi),je)switch(_){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}d=null,b=null,A=null,U=null,R.set(0,0,0),C=0,x=_,N=je}return}he=he||F,He=He||W,We=We||le,(F!==p||he!==S)&&(n.blendEquationSeparate(Ze[F],Ze[he]),p=F,S=he),(W!==d||le!==b||He!==A||We!==U)&&(n.blendFuncSeparate(be[W],be[le],be[He],be[We]),d=W,b=le,A=He,U=We),(ot.equals(R)===!1||gt!==C)&&(n.blendColor(ot.r,ot.g,ot.b,gt),R.copy(ot),C=gt),x=_,N=!1}function P(_,F){_.side===wn?de(n.CULL_FACE):ve(n.CULL_FACE);let W=_.side===zt;F&&(W=!W),G(W),_.blending===ar&&_.transparent===!1?w(Jn):w(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),s.setFunc(_.depthFunc),s.setTest(_.depthTest),s.setMask(_.depthWrite),r.setMask(_.colorWrite);const le=_.stencilWrite;o.setTest(le),le&&(o.setMask(_.stencilWriteMask),o.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),o.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),se(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(_){E!==_&&(_?n.frontFace(n.CW):n.frontFace(n.CCW),E=_)}function $(_){_!==xm?(ve(n.CULL_FACE),_!==M&&(_===fc?n.cullFace(n.BACK):_===Mm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),M=_}function K(_){_!==O&&(J&&n.lineWidth(_),O=_)}function se(_,F,W){_?(ve(n.POLYGON_OFFSET_FILL),(j!==F||I!==W)&&(n.polygonOffset(F,W),j=F,I=W)):de(n.POLYGON_OFFSET_FILL)}function y(_){_?ve(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function g(_){_===void 0&&(_=n.TEXTURE0+Q-1),k!==_&&(n.activeTexture(_),k=_)}function L(_,F,W){W===void 0&&(k===null?W=n.TEXTURE0+Q-1:W=k);let le=ce[W];le===void 0&&(le={type:void 0,texture:void 0},ce[W]=le),(le.type!==_||le.texture!==F)&&(k!==W&&(n.activeTexture(W),k=W),n.bindTexture(_,F||fe[_]),le.type=_,le.texture=F)}function D(){const _=ce[k];_!==void 0&&_.type!==void 0&&(n.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ae(){try{n.texStorage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function xe(_){Re.equals(_)===!1&&(n.scissor(_.x,_.y,_.z,_.w),Re.copy(_))}function Le(_){qe.equals(_)===!1&&(n.viewport(_.x,_.y,_.z,_.w),qe.copy(_))}function ze(_,F){let W=l.get(F);W===void 0&&(W=new WeakMap,l.set(F,W));let le=W.get(_);le===void 0&&(le=n.getUniformBlockIndex(F,_.name),W.set(_,le))}function Ie(_,F){const le=l.get(F).get(_);a.get(F)!==le&&(n.uniformBlockBinding(F,le,_.__bindingPointIndex),a.set(F,le))}function Ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},k=null,ce={},u={},f=new WeakMap,h=[],m=null,v=!1,x=null,p=null,d=null,b=null,S=null,A=null,U=null,R=new $e(0,0,0),C=0,N=!1,E=null,M=null,O=null,j=null,I=null,Re.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ve,disable:de,bindFramebuffer:Fe,drawBuffers:Be,useProgram:H,setBlending:w,setMaterial:P,setFlipSided:G,setCullFace:$,setLineWidth:K,setPolygonOffset:se,setScissorTest:y,activeTexture:g,bindTexture:L,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:X,texImage2D:Ce,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:ae,texStorage3D:me,texSubImage2D:oe,texSubImage3D:ne,compressedTexSubImage2D:re,compressedTexSubImage3D:ge,scissor:xe,viewport:Le,reset:Ae}}function zM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return m?new OffscreenCanvas(y,g):oo("canvas")}function x(y,g,L){let D=1;const V=se(y);if((V.width>L||V.height>L)&&(D=L/Math.max(V.width,V.height)),D<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(D*V.width),oe=Math.floor(D*V.height);f===void 0&&(f=v(X,oe));const ne=g?v(X,oe):f;return ne.width=X,ne.height=oe,ne.getContext("2d").drawImage(y,0,0,X,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+X+"x"+oe+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==en&&y.minFilter!==on}function d(y){n.generateMipmap(y)}function b(y,g,L,D,V=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=g;if(g===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),g===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RG8UI),L===n.UNSIGNED_SHORT&&(X=n.RG16UI),L===n.UNSIGNED_INT&&(X=n.RG32UI),L===n.BYTE&&(X=n.RG8I),L===n.SHORT&&(X=n.RG16I),L===n.INT&&(X=n.RG32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const oe=V?no:Qe.getTransfer(D);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=oe===nt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==en&&y.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function A(y){const g=y.target;g.removeEventListener("dispose",A),R(g),g.isVideoTexture&&u.delete(g)}function U(y){const g=y.target;g.removeEventListener("dispose",U),N(g)}function R(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,D=h.get(L);if(D){const V=D[g.__cacheKey];V.usedTimes--,V.usedTimes===0&&C(y),Object.keys(D).length===0&&h.delete(L)}i.remove(y)}function C(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const L=y.source,D=h.get(L);delete D[g.__cacheKey],o.memory.textures--}function N(y){const g=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(g.__webglFramebuffer[D]))for(let V=0;V<g.__webglFramebuffer[D].length;V++)n.deleteFramebuffer(g.__webglFramebuffer[D][V]);else n.deleteFramebuffer(g.__webglFramebuffer[D]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[D])}else{if(Array.isArray(g.__webglFramebuffer))for(let D=0;D<g.__webglFramebuffer.length;D++)n.deleteFramebuffer(g.__webglFramebuffer[D]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let D=0;D<g.__webglColorRenderbuffer.length;D++)g.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[D]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let D=0,V=L.length;D<V;D++){const X=i.get(L[D]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(L[D])}i.remove(y)}let E=0;function M(){E=0}function O(){const y=E;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),E+=1,y}function j(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function I(y,g){const L=i.get(y);if(y.isVideoTexture&&$(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const D=y.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(L,y,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function Q(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Re(L,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function J(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Re(L,y,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function ee(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){qe(L,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ie={[Va]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},k={[en]:n.NEAREST,[ng]:n.NEAREST_MIPMAP_NEAREST,[os]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Yo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},ce={[_g]:n.NEVER,[yg]:n.ALWAYS,[vg]:n.LESS,[dh]:n.LEQUAL,[xg]:n.EQUAL,[Eg]:n.GEQUAL,[Mg]:n.GREATER,[Sg]:n.NOTEQUAL};function ue(y,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===Yo||g.magFilter===os||g.magFilter===yi||g.minFilter===on||g.minFilter===Yo||g.minFilter===os||g.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ie[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ie[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ie[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,k[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,k[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===en||g.minFilter!==os&&g.minFilter!==yi||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Me(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",A));const D=g.source;let V=h.get(D);V===void 0&&(V={},h.set(D,V));const X=j(g);if(X!==y.__cacheKey){V[X]===void 0&&(V[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),V[X].usedTimes++;const oe=V[y.__cacheKey];oe!==void 0&&(V[y.__cacheKey].usedTimes--,oe.usedTimes===0&&C(g)),y.__cacheKey=X,y.__webglTexture=V[X].texture}return L}function Re(y,g,L){let D=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(D=n.TEXTURE_3D);const V=Me(y,g),X=g.source;t.bindTexture(D,y.__webglTexture,n.TEXTURE0+L);const oe=i.get(X);if(X.version!==oe.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const ne=Qe.getPrimaries(Qe.workingColorSpace),re=g.colorSpace===jn?null:Qe.getPrimaries(g.colorSpace),ge=g.colorSpace===jn||ne===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let ae=x(g.image,!1,r.maxTextureSize);ae=K(g,ae);const me=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let ye=b(g.internalFormat,me,Ce,g.colorSpace,g.isVideoTexture);ue(D,g);let xe;const Le=g.mipmaps,ze=g.isVideoTexture!==!0,Ie=oe.__version===void 0||V===!0,Ae=X.dataReady,_=S(g,ae);if(g.isDepthTexture)ye=n.DEPTH_COMPONENT16,g.type===$n?ye=n.DEPTH_COMPONENT32F:g.type===dr?ye=n.DEPTH_COMPONENT24:g.type===$r&&(ye=n.DEPTH24_STENCIL8),Ie&&(ze?t.texStorage2D(n.TEXTURE_2D,1,ye,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,ye,ae.width,ae.height,0,me,Ce,null));else if(g.isDataTexture)if(Le.length>0){ze&&Ie&&t.texStorage2D(n.TEXTURE_2D,_,ye,Le[0].width,Le[0].height);for(let F=0,W=Le.length;F<W;F++)xe=Le[F],ze?Ae&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,xe.width,xe.height,me,Ce,xe.data):t.texImage2D(n.TEXTURE_2D,F,ye,xe.width,xe.height,0,me,Ce,xe.data);g.generateMipmaps=!1}else ze?(Ie&&t.texStorage2D(n.TEXTURE_2D,_,ye,ae.width,ae.height),Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,me,Ce,ae.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ae.width,ae.height,0,me,Ce,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_,ye,Le[0].width,Le[0].height,ae.depth);for(let F=0,W=Le.length;F<W;F++)xe=Le[F],g.format!==mn?me!==null?ze?Ae&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,xe.width,xe.height,ae.depth,me,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,ye,xe.width,xe.height,ae.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,xe.width,xe.height,ae.depth,me,Ce,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,F,ye,xe.width,xe.height,ae.depth,0,me,Ce,xe.data)}else{ze&&Ie&&t.texStorage2D(n.TEXTURE_2D,_,ye,Le[0].width,Le[0].height);for(let F=0,W=Le.length;F<W;F++)xe=Le[F],g.format!==mn?me!==null?ze?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,F,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Ae&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,xe.width,xe.height,me,Ce,xe.data):t.texImage2D(n.TEXTURE_2D,F,ye,xe.width,xe.height,0,me,Ce,xe.data)}else if(g.isDataArrayTexture)ze?(Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_,ye,ae.width,ae.height,ae.depth),Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Ce,ae.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ae.width,ae.height,ae.depth,0,me,Ce,ae.data);else if(g.isData3DTexture)ze?(Ie&&t.texStorage3D(n.TEXTURE_3D,_,ye,ae.width,ae.height,ae.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Ce,ae.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ae.width,ae.height,ae.depth,0,me,Ce,ae.data);else if(g.isFramebufferTexture){if(Ie)if(ze)t.texStorage2D(n.TEXTURE_2D,_,ye,ae.width,ae.height);else{let F=ae.width,W=ae.height;for(let le=0;le<_;le++)t.texImage2D(n.TEXTURE_2D,le,ye,F,W,0,me,Ce,null),F>>=1,W>>=1}}else if(Le.length>0){if(ze&&Ie){const F=se(Le[0]);t.texStorage2D(n.TEXTURE_2D,_,ye,F.width,F.height)}for(let F=0,W=Le.length;F<W;F++)xe=Le[F],ze?Ae&&t.texSubImage2D(n.TEXTURE_2D,F,0,0,me,Ce,xe):t.texImage2D(n.TEXTURE_2D,F,ye,me,Ce,xe);g.generateMipmaps=!1}else if(ze){if(Ie){const F=se(ae);t.texStorage2D(n.TEXTURE_2D,_,ye,F.width,F.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ce,ae)}else t.texImage2D(n.TEXTURE_2D,0,ye,me,Ce,ae);p(g)&&d(D),oe.__version=X.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function qe(y,g,L){if(g.image.length!==6)return;const D=Me(y,g),V=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const X=i.get(V);if(V.version!==X.__version||D===!0){t.activeTexture(n.TEXTURE0+L);const oe=Qe.getPrimaries(Qe.workingColorSpace),ne=g.colorSpace===jn?null:Qe.getPrimaries(g.colorSpace),re=g.colorSpace===jn||oe===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,me=[];for(let W=0;W<6;W++)!ge&&!ae?me[W]=x(g.image[W],!0,r.maxCubemapSize):me[W]=ae?g.image[W].image:g.image[W],me[W]=K(g,me[W]);const Ce=me[0],ye=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),Le=b(g.internalFormat,ye,xe,g.colorSpace),ze=g.isVideoTexture!==!0,Ie=X.__version===void 0||D===!0,Ae=V.dataReady;let _=S(g,Ce);ue(n.TEXTURE_CUBE_MAP,g);let F;if(ge){ze&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_,Le,Ce.width,Ce.height);for(let W=0;W<6;W++){F=me[W].mipmaps;for(let le=0;le<F.length;le++){const he=F[le];g.format!==mn?ye!==null?ze?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,0,0,he.width,he.height,ye,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,Le,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,0,0,he.width,he.height,ye,xe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,Le,he.width,he.height,0,ye,xe,he.data)}}}else{if(F=g.mipmaps,ze&&Ie){F.length>0&&_++;const W=se(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_,Le,W.width,W.height)}for(let W=0;W<6;W++)if(ae){ze?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,me[W].width,me[W].height,ye,xe,me[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,me[W].width,me[W].height,0,ye,xe,me[W].data);for(let le=0;le<F.length;le++){const He=F[le].image[W].image;ze?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,0,0,He.width,He.height,ye,xe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,Le,He.width,He.height,0,ye,xe,He.data)}}else{ze?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ye,xe,me[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,ye,xe,me[W]);for(let le=0;le<F.length;le++){const he=F[le];ze?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,0,0,ye,xe,he.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,Le,ye,xe,he.image[W])}}}p(g)&&d(n.TEXTURE_CUBE_MAP),X.__version=V.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function te(y,g,L,D,V,X){const oe=s.convert(L.format,L.colorSpace),ne=s.convert(L.type),re=b(L.internalFormat,oe,ne,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ae=Math.max(1,g.width>>X),me=Math.max(1,g.height>>X);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,X,re,ae,me,g.depth,0,oe,ne,null):t.texImage2D(V,X,re,ae,me,0,oe,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),G(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,V,i.get(L).__webglTexture,0,P(g)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,V,i.get(L).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(y,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let D=n.DEPTH_COMPONENT24;if(L||G(g)){const V=g.depthTexture;V&&V.isDepthTexture&&(V.type===$n?D=n.DEPTH_COMPONENT32F:V.type===dr&&(D=n.DEPTH_COMPONENT24));const X=P(g);G(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,D,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,D,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,D,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const D=P(g);L&&G(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,g.width,g.height):G(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const D=g.textures;for(let V=0;V<D.length;V++){const X=D[V],oe=s.convert(X.format,X.colorSpace),ne=s.convert(X.type),re=b(X.internalFormat,oe,ne,X.colorSpace),ge=P(g);L&&G(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,re,g.width,g.height):G(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),I(g.depthTexture,0);const D=i.get(g.depthTexture).__webglTexture,V=P(g);if(g.depthTexture.format===lr)G(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(g.depthTexture.format===Xr)G(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function de(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");ve(g.__webglFramebuffer,y)}else if(L){g.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[D]),g.__webglDepthbuffer[D]=n.createRenderbuffer(),fe(g.__webglDepthbuffer[D],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),fe(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(y,g,L){const D=i.get(y);g!==void 0&&te(D.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&de(y)}function Be(y){const g=y.texture,L=i.get(y),D=i.get(g);y.addEventListener("dispose",U);const V=y.textures,X=y.isWebGLCubeRenderTarget===!0,oe=V.length>1;if(oe||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=g.version,o.memory.textures++),X){L.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ne]=[];for(let re=0;re<g.mipmaps.length;re++)L.__webglFramebuffer[ne][re]=n.createFramebuffer()}else L.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)L.__webglFramebuffer[ne]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(oe)for(let ne=0,re=V.length;ne<re;ne++){const ge=i.get(V[ne]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&G(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ne=0;ne<V.length;ne++){const re=V[ne];L.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ne]);const ge=s.convert(re.format,re.colorSpace),ae=s.convert(re.type),me=b(re.internalFormat,ge,ae,re.colorSpace,y.isXRRenderTarget===!0),Ce=P(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,me,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,L.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),ue(n.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)te(L.__webglFramebuffer[ne][re],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else te(L.__webglFramebuffer[ne],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ne=0,re=V.length;ne<re;ne++){const ge=V[ne],ae=i.get(ge);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ue(n.TEXTURE_2D,ge),te(L.__webglFramebuffer,y,ge,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),p(ge)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,D.__webglTexture),ue(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)te(L.__webglFramebuffer[re],y,g,n.COLOR_ATTACHMENT0,ne,re);else te(L.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,ne,0);p(g)&&d(ne),t.unbindTexture()}y.depthBuffer&&de(y)}function H(y){const g=y.textures;for(let L=0,D=g.length;L<D;L++){const V=g[L];if(p(V)){const X=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(V).__webglTexture;t.bindTexture(X,oe),d(X),t.unbindTexture()}}}const Ze=[],be=[];function w(y){if(y.samples>0){if(G(y)===!1){const g=y.textures,L=y.width,D=y.height;let V=n.COLOR_BUFFER_BIT;const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(y),ne=g.length>1;if(ne)for(let re=0;re<g.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let re=0;re<g.length;re++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const ge=i.get(g[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,L,D,0,0,L,D,V,n.NEAREST),l===!0&&(Ze.length=0,be.length=0,Ze.push(n.COLOR_ATTACHMENT0+re),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ze.push(X),be.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let re=0;re<g.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const ge=i.get(g[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function P(y){return Math.min(r.maxSamples,y.samples)}function G(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function $(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function K(y,g){const L=y.colorSpace,D=y.format,V=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==oi&&L!==jn&&(Qe.getTransfer(L)===nt?(D!==mn||V!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function se(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=Fe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=te,this.useMultisampledRTT=G}function HM(n,e){function t(i,r=jn){let s;const o=Qe.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ig)return n.BYTE;if(i===rg)return n.SHORT;if(i===oh)return n.UNSIGNED_SHORT;if(i===ah)return n.INT;if(i===dr)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Ao)return n.HALF_FLOAT;if(i===og)return n.ALPHA;if(i===ag)return n.RGB;if(i===mn)return n.RGBA;if(i===lg)return n.LUMINANCE;if(i===cg)return n.LUMINANCE_ALPHA;if(i===lr)return n.DEPTH_COMPONENT;if(i===Xr)return n.DEPTH_STENCIL;if(i===ug)return n.RED;if(i===uh)return n.RED_INTEGER;if(i===fg)return n.RG;if(i===fh)return n.RG_INTEGER;if(i===hh)return n.RGBA_INTEGER;if(i===qo||i===jo||i===$o||i===Ko)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===Mc||i===Sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xc||i===Mc)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ec||i===yc||i===Tc||i===bc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ec)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Oc||i===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zo)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hg||i===Bc||i===zc||i===Hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class VM extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rs extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new ii({vertexShader:kM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gn(new Jr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class YM extends Li{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const x=new XM,p=t.getContextAttributes();let d=null,b=null;const S=[],A=[],U=new De;let R=null;const C=new Jt;C.layers.enable(1),C.viewport=new St;const N=new Jt;N.layers.enable(2),N.viewport=new St;const E=[C,N],M=new VM;M.layers.enable(1),M.layers.enable(2);let O=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=S[te];return fe===void 0&&(fe=new Ea,S[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=S[te];return fe===void 0&&(fe=new Ea,S[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=S[te];return fe===void 0&&(fe=new Ea,S[te]=fe),fe.getHandSpace()};function I(te){const fe=A.indexOf(te.inputSource);if(fe===-1)return;const ve=S[fe];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",J);for(let te=0;te<S.length;te++){const fe=A[te];fe!==null&&(A[te]=null,S[te].disconnect(fe))}O=null,j=null,x.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,b=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Ri(m.framebufferWidth,m.framebufferHeight,{format:mn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,ve=null,de=null;p.depth&&(de=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?Xr:lr,ve=p.stencil?$r:dr);const Fe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Ri(h.textureWidth,h.textureHeight,{format:mn,type:ni,depthTexture:new Ah(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(te){for(let fe=0;fe<te.removed.length;fe++){const ve=te.removed[fe],de=A.indexOf(ve);de>=0&&(A[de]=null,S[de].disconnect(ve))}for(let fe=0;fe<te.added.length;fe++){const ve=te.added[fe];let de=A.indexOf(ve);if(de===-1){for(let Be=0;Be<S.length;Be++)if(Be>=A.length){A.push(ve),de=Be;break}else if(A[Be]===null){A[Be]=ve,de=Be;break}if(de===-1)break}const Fe=S[de];Fe&&Fe.connect(ve)}}const ee=new B,ie=new B;function k(te,fe,ve){ee.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const de=ee.distanceTo(ie),Fe=fe.projectionMatrix.elements,Be=ve.projectionMatrix.elements,H=Fe[14]/(Fe[10]-1),Ze=Fe[14]/(Fe[10]+1),be=(Fe[9]+1)/Fe[5],w=(Fe[9]-1)/Fe[5],P=(Fe[8]-1)/Fe[0],G=(Be[8]+1)/Be[0],$=H*P,K=H*G,se=de/(-P+G),y=se*-P;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(y),te.translateZ(se),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const g=H+se,L=Ze+se,D=$-y,V=K+(de-y),X=be*Ze/L*g,oe=w*Ze/L*g;te.projectionMatrix.makePerspective(D,V,X,oe,g,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ce(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;x.texture!==null&&(te.near=x.depthNear,te.far=x.depthFar),M.near=N.near=C.near=te.near,M.far=N.far=C.far=te.far,(O!==M.near||j!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),O=M.near,j=M.far,C.near=O,C.far=j,N.near=O,N.far=j,C.updateProjectionMatrix(),N.updateProjectionMatrix(),te.updateProjectionMatrix());const fe=te.parent,ve=M.cameras;ce(M,fe);for(let de=0;de<ve.length;de++)ce(ve[de],fe);ve.length===2?k(M,C,N):M.projectionMatrix.copy(C.projectionMatrix),ue(te,M,fe)};function ue(te,fe,ve){ve===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Yr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null};let Me=null;function Re(te,fe){if(u=fe.getViewerPose(c||o),v=fe,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let de=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Be=0;Be<ve.length;Be++){const H=ve[Be];let Ze=null;if(m!==null)Ze=m.getViewport(H);else{const w=f.getViewSubImage(h,H);Ze=w.viewport,Be===0&&(e.setRenderTargetTextures(b,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let be=E[Be];be===void 0&&(be=new Jt,be.layers.enable(Be),be.viewport=new St,E[Be]=be),be.matrix.fromArray(H.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(H.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Be===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(be)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Be=f.getDepthInformation(ve[0]);Be&&Be.isValid&&Be.texture&&x.init(e,Be,r.renderState)}}for(let ve=0;ve<S.length;ve++){const de=A[ve],Fe=S[ve];de!==null&&Fe!==void 0&&Fe.update(de,fe,c||o)}x.render(e,M),Me&&Me(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const qe=new bh;qe.setAnimationLoop(Re),this.setAnimationLoop=function(te){Me=te},this.dispose=function(){}}}const mi=new Ln,qM=new ut;function jM(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Sh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,S,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,A)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===zt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===zt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),S=b.envMap,A=b.envMapRotation;if(S&&(p.envMap.value=S,mi.copy(A),mi.x*=-1,mi.y*=-1,mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(mi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const U=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*U,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $M(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const A=S.program;i.uniformBlockBinding(b,A)}function c(b,S){let A=r[b.id];A===void 0&&(v(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",p));const U=S.program;i.updateUBOMapping(b,U);const R=e.render.frame;s[b.id]!==R&&(h(b),s[b.id]=R)}function u(b){const S=f();b.__bindingPointIndex=S;const A=n.createBuffer(),U=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],A=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,C=A.length;R<C;R++){const N=Array.isArray(A[R])?A[R]:[A[R]];for(let E=0,M=N.length;E<M;E++){const O=N[E];if(m(O,R,E,U)===!0){const j=O.__offset,I=Array.isArray(O.value)?O.value:[O.value];let Q=0;for(let J=0;J<I.length;J++){const ee=I[J],ie=x(ee);typeof ee=="number"||typeof ee=="boolean"?(O.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,j+Q,O.__data)):ee.isMatrix3?(O.__data[0]=ee.elements[0],O.__data[1]=ee.elements[1],O.__data[2]=ee.elements[2],O.__data[3]=0,O.__data[4]=ee.elements[3],O.__data[5]=ee.elements[4],O.__data[6]=ee.elements[5],O.__data[7]=0,O.__data[8]=ee.elements[6],O.__data[9]=ee.elements[7],O.__data[10]=ee.elements[8],O.__data[11]=0):(ee.toArray(O.__data,Q),Q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,A,U){const R=b.value,C=S+"_"+A;if(U[C]===void 0)return typeof R=="number"||typeof R=="boolean"?U[C]=R:U[C]=R.clone(),!0;{const N=U[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return U[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function v(b){const S=b.uniforms;let A=0;const U=16;for(let C=0,N=S.length;C<N;C++){const E=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,O=E.length;M<O;M++){const j=E[M],I=Array.isArray(j.value)?j.value:[j.value];for(let Q=0,J=I.length;Q<J;Q++){const ee=I[Q],ie=x(ee),k=A%U;k!==0&&U-k<ie.boundary&&(A+=U-k),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=ie.storage}}}const R=A%U;return R>0&&(A+=U-R),b.__size=A,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class KM{constructor(e={}){const{canvas:t=Vg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const S=this;let A=!1,U=0,R=0,C=null,N=-1,E=null;const M=new St,O=new St;let j=null;const I=new $e(0);let Q=0,J=t.width,ee=t.height,ie=1,k=null,ce=null;const ue=new St(0,0,J,ee),Me=new St(0,0,J,ee);let Re=!1;const qe=new Th;let te=!1,fe=!1;const ve=new ut,de=new B,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return C===null?ie:1}let H=i;function Ze(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",_,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",W,!1),H===null){const z="webgl2";if(H=Ze(z,T),H===null)throw Ze(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,w,P,G,$,K,se,y,g,L,D,V,X,oe,ne,re,ge,ae,me,Ce,ye,xe,Le,ze;function Ie(){be=new rx(H),be.init(),xe=new HM(H,be),w=new Z0(H,be,e,xe),P=new BM(H),G=new ax(H),$=new TM,K=new zM(H,be,P,$,w,xe,G),se=new Q0(S),y=new ix(S),g=new d_(H),Le=new $0(H,g),L=new sx(H,g,G,Le),D=new cx(H,L,g,G),me=new lx(H,w,K),re=new J0($),V=new yM(S,se,y,be,w,Le,re),X=new jM(S,$),oe=new AM,ne=new DM(be),ae=new j0(S,se,y,P,D,h,l),ge=new FM(S,D,w),ze=new $M(H,G,w,P),Ce=new K0(H,be,G),ye=new ox(H,be,G),G.programs=V.programs,S.capabilities=w,S.extensions=be,S.properties=$,S.renderLists=oe,S.shadowMap=ge,S.state=P,S.info=G}Ie();const Ae=new YM(S,H);this.xr=Ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(J,ee,!1))},this.getSize=function(T){return T.set(J,ee)},this.setSize=function(T,z,Z=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,ee=z,t.width=Math.floor(T*ie),t.height=Math.floor(z*ie),Z===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(J*ie,ee*ie).floor()},this.setDrawingBufferSize=function(T,z,Z){J=T,ee=z,ie=Z,t.width=Math.floor(T*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,z,Z,Y){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,z,Z,Y),P.viewport(M.copy(ue).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,z,Z,Y){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,z,Z,Y),P.scissor(O.copy(Me).multiplyScalar(ie).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){P.setScissorTest(Re=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,z=!0,Z=!0){let Y=0;if(T){let q=!1;if(C!==null){const _e=C.texture.format;q=_e===hh||_e===fh||_e===uh}if(q){const _e=C.texture.type,Ee=_e===ni||_e===dr||_e===oh||_e===$r||_e===lh||_e===ch,Te=ae.getClearColor(),Pe=ae.getClearAlpha(),Ue=Te.r,Ve=Te.g,Xe=Te.b;Ee?(m[0]=Ue,m[1]=Ve,m[2]=Xe,m[3]=Pe,H.clearBufferuiv(H.COLOR,0,m)):(v[0]=Ue,v[1]=Ve,v[2]=Xe,v[3]=Pe,H.clearBufferiv(H.COLOR,0,v))}else Y|=H.COLOR_BUFFER_BIT}z&&(Y|=H.DEPTH_BUFFER_BIT),Z&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",W,!1),oe.dispose(),ne.dispose(),$.dispose(),se.dispose(),y.dispose(),D.dispose(),Le.dispose(),ze.dispose(),V.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",je),Ae.removeEventListener("sessionend",at),tt.stop()};function _(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=G.autoReset,z=ge.enabled,Z=ge.autoUpdate,Y=ge.needsUpdate,q=ge.type;Ie(),G.autoReset=T,ge.enabled=z,ge.autoUpdate=Z,ge.needsUpdate=Y,ge.type=q}function W(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const z=T.target;z.removeEventListener("dispose",le),he(z)}function he(T){He(T),$.remove(T)}function He(T){const z=$.get(T).programs;z!==void 0&&(z.forEach(function(Z){V.releaseProgram(Z)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Z,Y,q,_e){z===null&&(z=Fe);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,Te=Uh(T,z,Z,Y,q);P.setMaterial(Y,Ee);let Pe=Z.index,Ue=1;if(Y.wireframe===!0){if(Pe=L.getWireframeAttribute(Z),Pe===void 0)return;Ue=2}const Ve=Z.drawRange,Xe=Z.attributes.position;let lt=Ve.start*Ue,Et=(Ve.start+Ve.count)*Ue;_e!==null&&(lt=Math.max(lt,_e.start*Ue),Et=Math.min(Et,(_e.start+_e.count)*Ue)),Pe!==null?(lt=Math.max(lt,0),Et=Math.min(Et,Pe.count)):Xe!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,Xe.count));const kt=Et-lt;if(kt<0||kt===1/0)return;Le.setup(q,Y,Te,Z,Pe);let Mn,Je=Ce;if(Pe!==null&&(Mn=g.get(Pe),Je=ye,Je.setIndex(Mn)),q.isMesh)Y.wireframe===!0?(P.setLineWidth(Y.wireframeLinewidth*Be()),Je.setMode(H.LINES)):Je.setMode(H.TRIANGLES);else if(q.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),P.setLineWidth(Ne*Be()),q.isLineSegments?Je.setMode(H.LINES):q.isLineLoop?Je.setMode(H.LINE_LOOP):Je.setMode(H.LINE_STRIP)}else q.isPoints?Je.setMode(H.POINTS):q.isSprite&&Je.setMode(H.TRIANGLES);if(q.isBatchedMesh)q._multiDrawInstances!==null?Je.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances):Je.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Je.renderInstances(lt,kt,q.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Er=Math.min(Z.instanceCount,Ne);Je.renderInstances(lt,kt,Er)}else Je.render(lt,kt)};function We(T,z,Z){T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=zt,T.needsUpdate=!0,Qr(T,z,Z),T.side=ti,T.needsUpdate=!0,Qr(T,z,Z),T.side=wn):Qr(T,z,Z)}this.compile=function(T,z,Z=null){Z===null&&(Z=T),p=ne.get(Z),p.init(z),b.push(p),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(S._useLegacyLights);const Y=new Set;return T.traverse(function(q){const _e=q.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Te=_e[Ee];We(Te,Z,q),Y.add(Te)}else We(_e,Z,q),Y.add(_e)}),b.pop(),p=null,Y},this.compileAsync=function(T,z,Z=null){const Y=this.compile(T,z,Z);return new Promise(q=>{function _e(){if(Y.forEach(function(Ee){$.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){q(T);return}setTimeout(_e,10)}be.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function gt(T){ot&&ot(T)}function je(){tt.stop()}function at(){tt.start()}const tt=new bh;tt.setAnimationLoop(gt),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(T){ot=T,Ae.setAnimationLoop(T),T===null?tt.stop():tt.start()},Ae.addEventListener("sessionstart",je),Ae.addEventListener("sessionend",at),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(z),z=Ae.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,z,C),p=ne.get(T,b.length),p.init(z),b.push(p),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),qe.setFromProjectionMatrix(ve),fe=this.localClippingEnabled,te=re.init(this.clippingPlanes,fe),x=oe.get(T,d.length),x.init(),d.push(x),In(T,z,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(k,ce);const Z=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1;Z&&ae.addToRenderList(x,T),this.info.render.frame++,te===!0&&re.beginShadows();const Y=p.state.shadowsArray;ge.render(Y,T,z),te===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,_e=x.transmissive;if(p.setupLights(S._useLegacyLights),z.isArrayCamera){const Ee=z.cameras;if(_e.length>0)for(let Te=0,Pe=Ee.length;Te<Pe;Te++){const Ue=Ee[Te];Un(q,_e,T,Ue)}Z&&ae.render(T);for(let Te=0,Pe=Ee.length;Te<Pe;Te++){const Ue=Ee[Te];$t(x,T,Ue,Ue.viewport)}}else _e.length>0&&Un(q,_e,T,z),Z&&ae.render(T),$t(x,T,z);C!==null&&(K.updateMultisampleRenderTarget(C),K.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(S,T,z),Le.resetDefaultState(),N=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&re.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function In(T,z,Z,Y){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||qe.intersectsSprite(T)){Y&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Ee=D.update(T),Te=T.material;Te.visible&&x.push(T,Ee,Te,Z,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||qe.intersectsObject(T))){const Ee=D.update(T),Te=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),de.copy(Ee.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){const Pe=Ee.groups;for(let Ue=0,Ve=Pe.length;Ue<Ve;Ue++){const Xe=Pe[Ue],lt=Te[Xe.materialIndex];lt&&lt.visible&&x.push(T,Ee,lt,Z,de.z,Xe)}}else Te.visible&&x.push(T,Ee,Te,Z,de.z,null)}}const _e=T.children;for(let Ee=0,Te=_e.length;Ee<Te;Ee++)In(_e[Ee],z,Z,Y)}function $t(T,z,Z,Y){const q=T.opaque,_e=T.transmissive,Ee=T.transparent;p.setupLightsView(Z),te===!0&&re.setGlobalState(S.clippingPlanes,Z),Y&&P.viewport(M.copy(Y)),q.length>0&&xn(q,z,Z),_e.length>0&&xn(_e,z,Z),Ee.length>0&&xn(Ee,z,Z),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Un(T,z,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ri(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Ao:ni,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _e=p.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||M;_e.setSize(Ee.z,Ee.w);const Te=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(I),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear();const Pe=S.toneMapping;S.toneMapping=Qn;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),te===!0&&re.setGlobalState(S.clippingPlanes,Y),xn(T,Z,Y),K.updateMultisampleRenderTarget(_e),K.updateRenderTargetMipmap(_e),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Xe=0,lt=z.length;Xe<lt;Xe++){const Et=z[Xe],kt=Et.object,Mn=Et.geometry,Je=Et.material,Ne=Et.group;if(Je.side===wn&&kt.layers.test(Y.layers)){const Er=Je.side;Je.side=zt,Je.needsUpdate=!0,Sr(kt,Z,Y,Mn,Je,Ne),Je.side=Er,Je.needsUpdate=!0,Ve=!0}}Ve===!0&&(K.updateMultisampleRenderTarget(_e),K.updateRenderTargetMipmap(_e))}S.setRenderTarget(Te),S.setClearColor(I,Q),Ue!==void 0&&(Y.viewport=Ue),S.toneMapping=Pe}function xn(T,z,Z){const Y=z.isScene===!0?z.overrideMaterial:null;for(let q=0,_e=T.length;q<_e;q++){const Ee=T[q],Te=Ee.object,Pe=Ee.geometry,Ue=Y===null?Ee.material:Y,Ve=Ee.group;Te.layers.test(Z.layers)&&Sr(Te,z,Z,Pe,Ue,Ve)}}function Sr(T,z,Z,Y,q,_e){T.onBeforeRender(S,z,Z,Y,q,_e),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(S,z,Z,Y,T,_e),q.transparent===!0&&q.side===wn&&q.forceSinglePass===!1?(q.side=zt,q.needsUpdate=!0,S.renderBufferDirect(Z,z,Y,q,T,_e),q.side=ti,q.needsUpdate=!0,S.renderBufferDirect(Z,z,Y,q,T,_e),q.side=wn):S.renderBufferDirect(Z,z,Y,q,T,_e),T.onAfterRender(S,z,Z,Y,q,_e)}function Qr(T,z,Z){z.isScene!==!0&&(z=Fe);const Y=$.get(T),q=p.state.lights,_e=p.state.shadowsArray,Ee=q.state.version,Te=V.getParameters(T,q.state,_e,z,Z),Pe=V.getProgramCacheKey(Te);let Ue=Y.programs;Y.environment=T.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(T.isMeshStandardMaterial?y:se).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",le),Ue=new Map,Y.programs=Ue);let Ve=Ue.get(Pe);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===Ee)return Al(T,Te),Ve}else Te.uniforms=V.getUniforms(T),T.onBuild(Z,Te,S),T.onBeforeCompile(Te,S),Ve=V.acquireProgram(Te,Pe),Ue.set(Pe,Ve),Y.uniforms=Te.uniforms;const Xe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=re.uniform),Al(T,Te),Y.needsLights=Oh(T),Y.lightsStateVersion=Ee,Y.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function bl(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=zs.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Al(T,z){const Z=$.get(T);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Uh(T,z,Z,Y,q){z.isScene!==!0&&(z=Fe),K.resetTextureUnits();const _e=z.fog,Ee=Y.isMeshStandardMaterial?z.environment:null,Te=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:oi,Pe=(Y.isMeshStandardMaterial?y:se).get(Y.envMap||Ee),Ue=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xe=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,Et=!!Z.morphAttributes.color;let kt=Qn;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(kt=S.toneMapping);const Mn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Je=Mn!==void 0?Mn.length:0,Ne=$.get(Y),Er=p.state.lights;if(te===!0&&(fe===!0||T!==E)){const Kt=T===E&&Y.id===N;re.setState(Y,T,Kt)}let st=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Er.state.version||Ne.outputColorSpace!==Te||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Pe||Y.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Ue||Ne.vertexTangents!==Ve||Ne.morphTargets!==Xe||Ne.morphNormals!==lt||Ne.morphColors!==Et||Ne.toneMapping!==kt||Ne.morphTargetsCount!==Je)&&(st=!0):(st=!0,Ne.__version=Y.version);let ai=Ne.currentProgram;st===!0&&(ai=Qr(Y,z,q));let wl=!1,yr=!1,Io=!1;const yt=ai.getUniforms(),Nn=Ne.uniforms;if(P.useProgram(ai.program)&&(wl=!0,yr=!0,Io=!0),Y.id!==N&&(N=Y.id,yr=!0),wl||E!==T){yt.setValue(H,"projectionMatrix",T.projectionMatrix),yt.setValue(H,"viewMatrix",T.matrixWorldInverse);const Kt=yt.map.cameraPosition;Kt!==void 0&&Kt.setValue(H,de.setFromMatrixPosition(T.matrixWorld)),w.logarithmicDepthBuffer&&yt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,yr=!0,Io=!0)}if(q.isSkinnedMesh){yt.setOptional(H,q,"bindMatrix"),yt.setOptional(H,q,"bindMatrixInverse");const Kt=q.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),yt.setValue(H,"boneTexture",Kt.boneTexture,K))}q.isBatchedMesh&&(yt.setOptional(H,q,"batchingTexture"),yt.setValue(H,"batchingTexture",q._matricesTexture,K));const Uo=Z.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0)&&me.update(q,Z,ai),(yr||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,yt.setValue(H,"receiveShadow",q.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Nn.envMap.value=Pe,Nn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Nn.envMapIntensity.value=z.environmentIntensity),yr&&(yt.setValue(H,"toneMappingExposure",S.toneMappingExposure),Ne.needsLights&&Nh(Nn,Io),_e&&Y.fog===!0&&X.refreshFogUniforms(Nn,_e),X.refreshMaterialUniforms(Nn,Y,ie,ee,p.state.transmissionRenderTarget[T.id]),zs.upload(H,bl(Ne),Nn,K)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(zs.upload(H,bl(Ne),Nn,K),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(H,"center",q.center),yt.setValue(H,"modelViewMatrix",q.modelViewMatrix),yt.setValue(H,"normalMatrix",q.normalMatrix),yt.setValue(H,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Kt=Y.uniformsGroups;for(let No=0,Fh=Kt.length;No<Fh;No++){const Rl=Kt[No];ze.update(Rl,ai),ze.bind(Rl,ai)}}return ai}function Nh(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Oh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,z,Z){$.get(T.texture).__webglTexture=z,$.get(T.depthTexture).__webglTexture=Z;const Y=$.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=Z===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const Z=$.get(T);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Z=0){C=T,U=z,R=Z;let Y=!0,q=null,_e=!1,Ee=!1;if(T){const Pe=$.get(T);Pe.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):Pe.__webglFramebuffer===void 0?K.setupRenderTarget(T):Pe.__hasExternalTextures&&K.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);const Ve=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?q=Ve[z][Z]:q=Ve[z],_e=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?q=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?q=Ve[Z]:q=Ve,M.copy(T.viewport),O.copy(T.scissor),j=T.scissorTest}else M.copy(ue).multiplyScalar(ie).floor(),O.copy(Me).multiplyScalar(ie).floor(),j=Re;if(P.bindFramebuffer(H.FRAMEBUFFER,q)&&Y&&P.drawBuffers(T,q),P.viewport(M),P.scissor(O),P.setScissorTest(j),_e){const Pe=$.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,Z)}else if(Ee){const Pe=$.get(T.texture),Ue=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pe.__webglTexture,Z||0,Ue)}N=-1},this.readRenderTargetPixels=function(T,z,Z,Y,q,_e,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){P.bindFramebuffer(H.FRAMEBUFFER,Te);try{const Pe=T.texture,Ue=Pe.format,Ve=Pe.type;if(!w.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Y&&Z>=0&&Z<=T.height-q&&H.readPixels(z,Z,Y,q,xe.convert(Ue),xe.convert(Ve),_e)}finally{const Pe=C!==null?$.get(C).__webglFramebuffer:null;P.bindFramebuffer(H.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,z,Z=0){const Y=Math.pow(2,-Z),q=Math.floor(z.image.width*Y),_e=Math.floor(z.image.height*Y);K.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,T.x,T.y,q,_e),P.unbindTexture()},this.copyTextureToTexture=function(T,z,Z,Y=0){const q=z.image.width,_e=z.image.height,Ee=xe.convert(Z.format),Te=xe.convert(Z.type);K.setTexture2D(Z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,q,_e,Ee,Te,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,Ee,Te,z.image),Y===0&&Z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Z,Y,q=0){const _e=T.max.x-T.min.x,Ee=T.max.y-T.min.y,Te=T.max.z-T.min.z,Pe=xe.convert(Y.format),Ue=xe.convert(Y.type);let Ve;if(Y.isData3DTexture)K.setTexture3D(Y,0),Ve=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)K.setTexture2DArray(Y,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Xe=H.getParameter(H.UNPACK_ROW_LENGTH),lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Et=H.getParameter(H.UNPACK_SKIP_PIXELS),kt=H.getParameter(H.UNPACK_SKIP_ROWS),Mn=H.getParameter(H.UNPACK_SKIP_IMAGES),Je=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Je.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Je.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(Ve,q,z.x,z.y,z.z,_e,Ee,Te,Pe,Ue,Je.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Ve,q,z.x,z.y,z.z,_e,Ee,Te,Pe,Je.data):H.texSubImage3D(Ve,q,z.x,z.y,z.z,_e,Ee,Te,Pe,Ue,Je),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Et),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mn),q===0&&Y.generateMipmaps&&H.generateMipmap(Ve),P.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),P.unbindTexture()},this.resetState=function(){U=0,R=0,C=null,P.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ul?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===wo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZM extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Po extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ao=new B,lo=new B,Du=new ut,Cr=new hl,Cs=new Ro,ya=new B,Iu=new B;class JM extends Vt{constructor(e=new Nt,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ao.fromBufferAttribute(t,r-1),lo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ao.distanceTo(lo);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;Du.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(Du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=m,p=v-1;x<p;x+=c){const d=u.getX(x),b=u.getX(x+1),S=Ps(this,e,Cr,l,d,b);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(v-1),p=u.getX(m),d=Ps(this,e,Cr,l,x,p);d&&t.push(d)}}else{const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let x=m,p=v-1;x<p;x+=c){const d=Ps(this,e,Cr,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){const x=Ps(this,e,Cr,l,v-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ps(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ao.fromBufferAttribute(o,r),lo.fromBufferAttribute(o,s),t.distanceSqToSegment(ao,lo,ya,Iu)>i)return;ya.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ya);if(!(l<e.near||l>e.far))return{distance:l,point:Iu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Uu=new B,Nu=new B;class ml extends JM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uu.fromBufferAttribute(t,r),Nu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gl extends Nt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new B,u=new De;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=i+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lo extends Nt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],m=[];let v=0;const x=[],p=i/2;let d=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(m,2));function b(){const A=new B,U=new B;let R=0;const C=(t-e)/i;for(let N=0;N<=s;N++){const E=[],M=N/s,O=M*(t-e)+e;for(let j=0;j<=r;j++){const I=j/r,Q=I*l+a,J=Math.sin(Q),ee=Math.cos(Q);U.x=O*J,U.y=-M*i+p,U.z=O*ee,f.push(U.x,U.y,U.z),A.set(J,C,ee).normalize(),h.push(A.x,A.y,A.z),m.push(I,1-M),E.push(v++)}x.push(E)}for(let N=0;N<r;N++)for(let E=0;E<s;E++){const M=x[E][N],O=x[E+1][N],j=x[E+1][N+1],I=x[E][N+1];u.push(M,O,I),u.push(O,j,I),R+=6}c.addGroup(d,R,0),d+=R}function S(A){const U=v,R=new De,C=new B;let N=0;const E=A===!0?e:t,M=A===!0?1:-1;for(let j=1;j<=r;j++)f.push(0,p*M,0),h.push(0,M,0),m.push(.5,.5),v++;const O=v;for(let j=0;j<=r;j++){const Q=j/r*l+a,J=Math.cos(Q),ee=Math.sin(Q);C.x=E*ee,C.y=p*M,C.z=E*J,f.push(C.x,C.y,C.z),h.push(0,M,0),R.x=J*.5+.5,R.y=ee*.5*M+.5,m.push(R.x,R.y),v++}for(let j=0;j<r;j++){const I=U+j,Q=O+j;A===!0?u.push(Q,Q+1,I):u.push(Q+1,Q,I),N+=3}c.addGroup(d,N,A===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _l extends Lo{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vl extends Nt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,m=new B,v=new De;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const d=s+p/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,u.push(v.x,v.y)}f+=h}for(let x=0;x<r;x++){const p=x*(i+1);for(let d=0;d<i;d++){const b=d+p,S=b,A=b+i+1,U=b+i+2,R=b+1;a.push(S,A,R),a.push(A,U,R)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xl extends Nt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,h=new B,m=[],v=[],x=[],p=[];for(let d=0;d<=i;d++){const b=[],S=d/i;let A=0;d===0&&o===0?A=.5/t:d===i&&l===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){const R=U/t;f.x=-e*Math.cos(r+R*s)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+S*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(R+A,1-S),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){const S=u[d][b+1],A=u[d][b],U=u[d+1][b],R=u[d+1][b+1];(d!==0||o>0)&&m.push(S,A,R),(d!==i-1||l<Math.PI)&&m.push(A,U,R)}this.setIndex(m),this.setAttribute("position",new et(v,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends Nt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new B,f=new B,h=new B;for(let m=0;m<=i;m++)for(let v=0;v<=r;v++){const x=v/r*s,p=m/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){const x=(r+1)*m+v-1,p=(r+1)*(m-1)+v-1,d=(r+1)*(m-1)+v,b=(r+1)*m+v;o.push(x,p,b),o.push(p,d,b)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ou{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class QM extends ml{constructor(e=10,t=10,i=4473924,r=8947848){i=new $e(i),r=new $e(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,v=-a;h<=t;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const x=h===s?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const u=new Nt;u.setAttribute("position",new et(l,3)),u.setAttribute("color",new et(c,3));const f=new Po({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class eS extends ml{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Nt;r.setAttribute("position",new et(t,3)),r.setAttribute("color",new et(i,3));const s=new Po({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new $e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const tS=n=>{let e=10,t=10,i=null,r=null;const s=l=>{l?(i=new QM(e,t),n.add(i),r=new eS(5),n.add(r)):i&&(n.remove(i),n.remove(r),i=null)};return{enable:s,setSize:l=>{s(!1),e=l,s(!0)},setDivision:l=>{s(!1),t=l,s(!0)},getSize:()=>e,getDivisions:()=>t,isActive:()=>!!i}},Fu={type:"change"},Ta={type:"start"},Bu={type:"end"},Ls=new hl,zu=new qn,nS=Math.cos(70*Hg.DEG2RAD);class iS extends Li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",ge),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ge),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Fu),i.update(),s=r.NONE},this.update=function(){const _=new B,F=new Ci().setFromUnitVectors(e.up,new B(0,1,0)),W=F.clone().invert(),le=new B,he=new Ci,He=new B,We=2*Math.PI;return function(gt=null){const je=i.object.position;_.copy(je).sub(i.target),_.applyQuaternion(F),a.setFromVector3(_),i.autoRotate&&s===r.NONE&&j(M(gt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let at=i.minAzimuthAngle,tt=i.maxAzimuthAngle;isFinite(at)&&isFinite(tt)&&(at<-Math.PI?at+=We:at>Math.PI&&(at-=We),tt<-Math.PI?tt+=We:tt>Math.PI&&(tt-=We),at<=tt?a.theta=Math.max(at,Math.min(tt,a.theta)):a.theta=a.theta>(at+tt)/2?Math.max(at,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let In=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=ue(a.radius);else{const $t=a.radius;a.radius=ue(a.radius*c),In=$t!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(W),je.copy(i.target).add(_),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let $t=null;if(i.object.isPerspectiveCamera){const Un=_.length();$t=ue(Un*c);const xn=Un-$t;i.object.position.addScaledVector(A,xn),i.object.updateMatrixWorld(),In=!!xn}else if(i.object.isOrthographicCamera){const Un=new B(U.x,U.y,0);Un.unproject(i.object);const xn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),In=xn!==i.object.zoom;const Sr=new B(U.x,U.y,0);Sr.unproject(i.object),i.object.position.sub(Sr).add(Un),i.object.updateMatrixWorld(),$t=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar($t).add(i.object.position):(Ls.origin.copy(i.object.position),Ls.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ls.direction))<nS?e.lookAt(i.target):(zu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ls.intersectPlane(zu,i.target))))}else if(i.object.isOrthographicCamera){const $t=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),$t!==i.object.zoom&&(i.object.updateProjectionMatrix(),In=!0)}return c=1,R=!1,In||le.distanceToSquared(i.object.position)>o||8*(1-he.dot(i.object.quaternion))>o||He.distanceToSquared(i.target)>o?(i.dispatchEvent(Fu),le.copy(i.object.position),he.copy(i.object.quaternion),He.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ce),i.domElement.removeEventListener("pointerdown",y),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",X),i.domElement.removeEventListener("pointermove",g),i.domElement.removeEventListener("pointerup",L),i.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ge),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Ou,l=new Ou;let c=1;const u=new B,f=new De,h=new De,m=new De,v=new De,x=new De,p=new De,d=new De,b=new De,S=new De,A=new B,U=new De;let R=!1;const C=[],N={};let E=!1;function M(_){return _!==null?2*Math.PI/60*i.autoRotateSpeed*_:2*Math.PI/60/60*i.autoRotateSpeed}function O(_){const F=Math.abs(_*.01);return Math.pow(.95,i.zoomSpeed*F)}function j(_){l.theta-=_}function I(_){l.phi-=_}const Q=function(){const _=new B;return function(W,le){_.setFromMatrixColumn(le,0),_.multiplyScalar(-W),u.add(_)}}(),J=function(){const _=new B;return function(W,le){i.screenSpacePanning===!0?_.setFromMatrixColumn(le,1):(_.setFromMatrixColumn(le,0),_.crossVectors(i.object.up,_)),_.multiplyScalar(W),u.add(_)}}(),ee=function(){const _=new B;return function(W,le){const he=i.domElement;if(i.object.isPerspectiveCamera){const He=i.object.position;_.copy(He).sub(i.target);let We=_.length();We*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*W*We/he.clientHeight,i.object.matrix),J(2*le*We/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(W*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),J(le*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(_,F){if(!i.zoomToCursor)return;R=!0;const W=i.domElement.getBoundingClientRect(),le=_-W.left,he=F-W.top,He=W.width,We=W.height;U.x=le/He*2-1,U.y=-(he/We)*2+1,A.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(_){return Math.max(i.minDistance,Math.min(i.maxDistance,_))}function Me(_){f.set(_.clientX,_.clientY)}function Re(_){ce(_.clientX,_.clientX),d.set(_.clientX,_.clientY)}function qe(_){v.set(_.clientX,_.clientY)}function te(_){h.set(_.clientX,_.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;j(2*Math.PI*m.x/F.clientHeight),I(2*Math.PI*m.y/F.clientHeight),f.copy(h),i.update()}function fe(_){b.set(_.clientX,_.clientY),S.subVectors(b,d),S.y>0?ie(O(S.y)):S.y<0&&k(O(S.y)),d.copy(b),i.update()}function ve(_){x.set(_.clientX,_.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),ee(p.x,p.y),v.copy(x),i.update()}function de(_){ce(_.clientX,_.clientY),_.deltaY<0?k(O(_.deltaY)):_.deltaY>0&&ie(O(_.deltaY)),i.update()}function Fe(_){let F=!1;switch(_.code){case i.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(-i.keyPanSpeed,0),F=!0;break}F&&(_.preventDefault(),i.update())}function Be(_){if(C.length===1)f.set(_.pageX,_.pageY);else{const F=Ie(_),W=.5*(_.pageX+F.x),le=.5*(_.pageY+F.y);f.set(W,le)}}function H(_){if(C.length===1)v.set(_.pageX,_.pageY);else{const F=Ie(_),W=.5*(_.pageX+F.x),le=.5*(_.pageY+F.y);v.set(W,le)}}function Ze(_){const F=Ie(_),W=_.pageX-F.x,le=_.pageY-F.y,he=Math.sqrt(W*W+le*le);d.set(0,he)}function be(_){i.enableZoom&&Ze(_),i.enablePan&&H(_)}function w(_){i.enableZoom&&Ze(_),i.enableRotate&&Be(_)}function P(_){if(C.length==1)h.set(_.pageX,_.pageY);else{const W=Ie(_),le=.5*(_.pageX+W.x),he=.5*(_.pageY+W.y);h.set(le,he)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;j(2*Math.PI*m.x/F.clientHeight),I(2*Math.PI*m.y/F.clientHeight),f.copy(h)}function G(_){if(C.length===1)x.set(_.pageX,_.pageY);else{const F=Ie(_),W=.5*(_.pageX+F.x),le=.5*(_.pageY+F.y);x.set(W,le)}p.subVectors(x,v).multiplyScalar(i.panSpeed),ee(p.x,p.y),v.copy(x)}function $(_){const F=Ie(_),W=_.pageX-F.x,le=_.pageY-F.y,he=Math.sqrt(W*W+le*le);b.set(0,he),S.set(0,Math.pow(b.y/d.y,i.zoomSpeed)),ie(S.y),d.copy(b);const He=(_.pageX+F.x)*.5,We=(_.pageY+F.y)*.5;ce(He,We)}function K(_){i.enableZoom&&$(_),i.enablePan&&G(_)}function se(_){i.enableZoom&&$(_),i.enableRotate&&P(_)}function y(_){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(_.pointerId),i.domElement.addEventListener("pointermove",g),i.domElement.addEventListener("pointerup",L)),!Le(_)&&(ye(_),_.pointerType==="touch"?ae(_):D(_)))}function g(_){i.enabled!==!1&&(_.pointerType==="touch"?me(_):V(_))}function L(_){switch(xe(_),C.length){case 0:i.domElement.releasePointerCapture(_.pointerId),i.domElement.removeEventListener("pointermove",g),i.domElement.removeEventListener("pointerup",L),i.dispatchEvent(Bu),s=r.NONE;break;case 1:const F=C[0],W=N[F];ae({pointerId:F,pageX:W.x,pageY:W.y});break}}function D(_){let F;switch(_.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ui.DOLLY:if(i.enableZoom===!1)return;Re(_),s=r.DOLLY;break;case Ui.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enablePan===!1)return;qe(_),s=r.PAN}else{if(i.enableRotate===!1)return;Me(_),s=r.ROTATE}break;case Ui.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enableRotate===!1)return;Me(_),s=r.ROTATE}else{if(i.enablePan===!1)return;qe(_),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ta)}function V(_){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;te(_);break;case r.DOLLY:if(i.enableZoom===!1)return;fe(_);break;case r.PAN:if(i.enablePan===!1)return;ve(_);break}}function X(_){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(_.preventDefault(),i.dispatchEvent(Ta),de(oe(_)),i.dispatchEvent(Bu))}function oe(_){const F=_.deltaMode,W={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(F){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return _.ctrlKey&&!E&&(W.deltaY*=10),W}function ne(_){_.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(_){_.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function ge(_){i.enabled===!1||i.enablePan===!1||Fe(_)}function ae(_){switch(ze(_),C.length){case 1:switch(i.touches.ONE){case Ni.ROTATE:if(i.enableRotate===!1)return;Be(_),s=r.TOUCH_ROTATE;break;case Ni.PAN:if(i.enablePan===!1)return;H(_),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ni.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(_),s=r.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;w(_),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ta)}function me(_){switch(ze(_),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;P(_),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;G(_),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(_),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(_),i.update();break;default:s=r.NONE}}function Ce(_){i.enabled!==!1&&_.preventDefault()}function ye(_){C.push(_.pointerId)}function xe(_){delete N[_.pointerId];for(let F=0;F<C.length;F++)if(C[F]==_.pointerId){C.splice(F,1);return}}function Le(_){for(let F=0;F<C.length;F++)if(C[F]==_.pointerId)return!0;return!1}function ze(_){let F=N[_.pointerId];F===void 0&&(F=new De,N[_.pointerId]=F),F.set(_.pageX,_.pageY)}function Ie(_){const F=_.pointerId===C[0]?C[1]:C[0];return N[F]}i.domElement.addEventListener("contextmenu",Ce),i.domElement.addEventListener("pointerdown",y),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",X,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}const Sl=new ZM,mr=new Jt(75,window.innerWidth/window.innerHeight,.1,1e3),El=new KM;mr.position.y=2;mr.position.z=5;const rS=new iS(mr,El.domElement),sS=Sl.add,yl=tS(Sl),Dh=()=>{yl.enable(!0)},oS=()=>{yl.enable(!1)},aS=({width:n,height:e})=>{El.setSize(n,e),mr.aspect=n/e,mr.updateProjectionMatrix()};Dh();const lS={scene:Sl,camera:mr,renderer:El,add2Scene:sS,controls:rS,activateAssistanceGrid:Dh,deactivateAssistanceGrid:oS,grid:yl,resizeRatio:aS},Qi=(n,e)=>{let t=e;return{getName:()=>n+"",setValue:o=>{switch(typeof t){case"number":t=parseFloat(o).toFixed(2);break;case"boolean":t=o.toLocaleLowerCase()==="true";break;default:t=o}},getValue:()=>t}},cS=[{name:"Dimensions",sub:[{name:"Width",field:Qi("width",1)},{name:"Height",field:Qi("height",1)},{name:"Depth",field:Qi("depth",1)}]},{name:"Segments for",sub:[{name:"Width",field:Qi("width",1)},{name:"Height",field:Qi("height",1)},{name:"Depth",field:Qi("depth",1)}]}],Yt={name:"Box",fields:cS,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},create:()=>{const n=new vr(Yt.fields[0].sub[0].field.getValue(),Yt.fields[0].sub[1].field.getValue(),Yt.fields[0].sub[2].field.getValue(),Yt.fields[1].sub[0].field.getValue(),Yt.fields[1].sub[1].field.getValue(),Yt.fields[1].sub[2].field.getValue());return n.rotateX(Yt.rotation.x),n.rotateY(Yt.rotation.y),n.rotateZ(Yt.rotation.z),n.translate(Yt.position.x,Yt.position.y,Yt.position.z),n}},Hs={name:"Circle",position:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0},create:()=>new gl(Hs.position.x,Hs.position.y,Hs.position.z)},Vs={name:"Cone",position:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0},create:()=>new _l(Vs.position.x,Vs.position.y,Vs.position.z)},Gs={name:"Cylinder",position:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0},create:()=>new Lo(Gs.position.x,Gs.position.y,Gs.position.z)},ks={name:"Plane",position:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0},create:()=>new Jr(ks.position.x,ks.position.y,ks.position.z)},Ws={name:"Ring",position:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0},create:()=>new vl(Ws.position.x,Ws.position.y,Ws.position.z)},Xs={name:"Sphere",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},create:()=>new xl(Xs.position.x,Xs.position.y,Xs.position.z)},Ys={name:"Torus",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},create:()=>new Ml(Ys.position.x,Ys.position.y,Ys.position.z)},uS=[Yt,Hs,Vs,Gs,ks,Ws,Xs,Ys],Do=th("three",()=>({threeContext:mf(lS)})),Hu=n=>{const e=n.target;return parseFloat(e.value)},fS=Pi({name:"CameraWidget",setup(){const n=Do(),{camera:e}=n.threeContext,t=(r,s)=>{const o=Hu(r);if(o===0||o)switch(s){case"x":e.position.x=o;break;case"y":e.position.y=o;break;case"z":e.position.z=o;break}},i=(r,s)=>{const o=Hu(r);if(o===0||o)switch(s){case"x":e.rotation.x=o;break;case"y":e.rotation.y=o;break;case"z":e.rotation.z=o;break}};return jt(e.rotation,()=>{console.log("Rotation change",e.rotation)}),jt(e.position,()=>{console.log("Position change",e.position)}),{camera:e,changePosition:t,changeRotation:i}}}),Di=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Tl=n=>(yf("data-v-2f11ea96"),n=n(),Tf(),n),hS=Tl(()=>Se("div",null,"Camera Widget",-1)),dS=Tl(()=>Se("legend",null,"Position",-1)),pS=Tl(()=>Se("legend",null,"Rotation",-1));function mS(n,e,t,i,r,s){return vt(),wt(Bt,null,[hS,Se("fieldset",null,[dS,Se("span",null,[ht("x: "),At(Se("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.camera.position.x=o),onInput:e[1]||(e[1]=o=>n.changePosition(o,"x"))},null,544),[[It,n.camera.position.x]])]),Se("span",null,[ht("y: "),At(Se("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>n.camera.position.y=o),onInput:e[3]||(e[3]=o=>n.changePosition(o,"y"))},null,544),[[It,n.camera.position.y]])]),Se("span",null,[ht("z: "),At(Se("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.camera.position.z=o),onInput:e[5]||(e[5]=o=>n.changePosition(o,"z"))},null,544),[[It,n.camera.position.z]])])]),Se("fieldset",null,[pS,Se("span",null,[ht("x: "),At(Se("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.camera.rotation.x=o),onInput:e[7]||(e[7]=o=>n.changeRotation(o,"x"))},null,544),[[It,n.camera.rotation.x]])]),Se("span",null,[ht("y: "),At(Se("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.camera.rotation.y=o),onInput:e[9]||(e[9]=o=>n.changeRotation(o,"y"))},null,544),[[It,n.camera.rotation.y]])]),Se("span",null,[ht("z: "),At(Se("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>n.camera.rotation.z=o),onInput:e[11]||(e[11]=o=>n.changeRotation(o,"z"))},null,544),[[It,n.camera.rotation.z]])])])],64)}const Ds=Di(fS,[["render",mS],["__scopeId","data-v-2f11ea96"]]),Ih=n=>{var e;return{name:n.name,field:n.field,hasSubs:!!n.sub,subs:(e=n.sub)==null?void 0:e.map(Ih)}},gS=Pi({setup(){const n=Do(),e=uS,t=Ft(0),i=Ft(0),r=Ft(0),s=Ft(0),o=Ft(0),a=Ft(0),l=Ft(0),c=Ft("#00ff00");let u=null,f=null;const h=()=>{const b=e[l.value];return b.fields?b.fields.map(Ih):[]},m=()=>!isNaN(t.value)&&!isNaN(i.value)&&!isNaN(r.value)&&!isNaN(s.value)&&!isNaN(o.value)&&!isNaN(a.value),v=()=>/^#[0-9A-F]{6}$/i.test(c.value),x=()=>{const b=e[l.value],{threeContext:S}=n;if(f&&u&&(S.scene.remove(u),S.scene.remove(f)),!m()||!v())return;const A=b.create();A.rotateX(s.value),A.rotateY(o.value),A.rotateZ(a.value);const U=new dl({color:c.value,blendAlpha:.5});U.transparent=!0,U.opacity=.3,f=new gn(A,U),f.position.set(t.value,i.value,r.value);const R=new Po({color:c.value});u=new ml(A,R),u.position.set(t.value,i.value,r.value),S.scene.add(u),S.scene.add(f)},p=()=>{console.log("Add... to be implemented")},d=(b,S)=>{var A=b.target;S.setValue(A.value),x()};return jt(t,x),jt(i,x),jt(r,x),jt(s,x),jt(o,x),jt(a,x),jt(c,x),{x:t,y:i,z:r,rx:s,ry:o,rz:a,color:c,geometries:e,geoType:l,addElement:p,getFields:h,updateValue:d}}}),Mr=n=>(yf("data-v-04a4c4e2"),n=n(),Tf(),n),_S=Mr(()=>Se("div",null,"Element Widget",-1)),vS={class:"form"},xS=Mr(()=>Se("legend",null,"Geometry",-1)),MS=["value"],SS={key:0},ES=Mr(()=>Se("legend",null,"Geometry specific",-1)),yS=["value","onKeyup"],TS=Mr(()=>Se("legend",null,"Position",-1)),bS=Mr(()=>Se("legend",null,"Rotation",-1)),AS=Mr(()=>Se("legend",null,"Material",-1));function wS(n,e,t,i,r,s){return vt(),wt(Bt,null,[_S,Se("div",vS,[Se("fieldset",null,[xS,Se("span",null,[ht("Type: "),At(Se("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.geoType=o)},[(vt(!0),wt(Bt,null,Ho(n.geometries,(o,a)=>(vt(),wt("option",{value:a},Fo(o.name),9,MS))),256))],512),[[om,n.geoType]])]),n.geometries[n.geoType].fields?(vt(),wt("fieldset",SS,[ES,(vt(!0),wt(Bt,null,Ho(n.getFields(),o=>(vt(),wt("fieldset",null,[Se("legend",null,Fo(o.name),1),(vt(!0),wt(Bt,null,Ho(o.subs,a=>(vt(),wt("span",null,[ht(Fo(a.name)+": ",1),Se("input",{value:a.field.getValue(),onKeyup:l=>n.updateValue(l,a.field)},null,40,yS)]))),256))]))),256))])):Ap("",!0),Se("fieldset",null,[TS,Se("span",null,[ht("x: "),At(Se("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>n.x=o)},null,512),[[It,n.x]])]),Se("span",null,[ht("y: "),At(Se("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>n.y=o)},null,512),[[It,n.y]])]),Se("span",null,[ht("z: "),At(Se("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>n.z=o)},null,512),[[It,n.z]])])]),Se("fieldset",null,[bS,Se("span",null,[ht("x: "),At(Se("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.rx=o)},null,512),[[It,n.rx]])]),Se("span",null,[ht("y: "),At(Se("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>n.ry=o)},null,512),[[It,n.ry]])]),Se("span",null,[ht("z: "),At(Se("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.rz=o)},null,512),[[It,n.rz]])])])]),Se("fieldset",null,[AS,Se("span",null,[ht("Color: "),At(Se("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>n.color=o)},null,512),[[It,n.color]])])]),Se("input",{type:"button",value:"Add",onClick:e[8]||(e[8]=o=>n.addElement())})])],64)}const Vu=Di(gS,[["render",wS],["__scopeId","data-v-04a4c4e2"]]),RS={};function CS(n,e){return" LightWidget "}const Gu=Di(RS,[["render",CS]]),PS=Pi({setup(){const n=Do(),{threeContext:e}=n,{grid:t}=e,i=Ft(t.isActive()),r=Ft(t.getSize()),s=Ft(t.getDivisions());return{gridActive:i,activateGrid:c=>{const u=c.target;i.value=u.checked,t.enable(u.checked)},setSize:c=>{const u=c.target,f=parseFloat(u.value);f&&t.setSize(f),r.value=t.getSize()},setDivision:c=>{const u=c.target,f=parseFloat(u.value);f&&t.setDivision(f),s.value=t.getDivisions()},grid:t,size:r,divisions:s}}}),LS=["checked"],DS=["disabled"],IS=["disabled"];function US(n,e,t,i,r,s){return vt(),wt("fieldset",null,[Se("legend",null,[ht("Grid "),Se("input",{type:"checkbox",checked:n.gridActive,onChange:e[0]||(e[0]=(...o)=>n.activateGrid&&n.activateGrid(...o))},null,40,LS)]),Se("span",null,[ht("Size: "),At(Se("input",{onChange:e[1]||(e[1]=(...o)=>n.setSize&&n.setSize(...o)),disabled:!n.gridActive,"onUpdate:modelValue":e[2]||(e[2]=o=>n.size=o)},null,40,DS),[[It,n.size]])]),Se("span",null,[ht("Division: "),At(Se("input",{onChange:e[3]||(e[3]=(...o)=>n.setDivision&&n.setDivision(...o)),disabled:!n.gridActive,"onUpdate:modelValue":e[4]||(e[4]=o=>n.divisions=o)},null,40,IS),[[It,n.divisions]])])])}const Is=Di(PS,[["render",US],["__scopeId","data-v-be98945a"]]),NS=Pi({name:"EntityTreeWidget",components:{CameraWidget:Ds,ElementWidget:Vu,LightWidget:Gu,SceneWidget:Is},setup(){const n=nh();return{activateLightWidget:()=>{n.widget=Gu},activateElementWidget:()=>{n.widget=Vu},toggleCamera:()=>{n.widget=n.widget==Ds?null:Ds},toggleScene:()=>{n.widget=n.widget==Is?null:Is},selectionStore:n,isSelected:o=>{switch(o){case"camera":return n.widget==Ds;case"scene":return n.widget==Is;default:return!1}}}}}),OS={class:"entity-tree-wrapper"};function FS(n,e,t,i,r,s){return vt(),wt("div",OS,[Se("input",{type:"button",onClick:e[0]||(e[0]=(...o)=>n.toggleCamera&&n.toggleCamera(...o)),class:zr(n.isSelected("camera")?"selected":""),value:"Camera"},null,2),Se("input",{type:"button",onClick:e[1]||(e[1]=(...o)=>n.toggleScene&&n.toggleScene(...o)),class:zr(n.isSelected("scene")?"selected":""),value:"Scene"},null,2),Se("input",{type:"button",onClick:e[2]||(e[2]=(...o)=>n.activateLightWidget&&n.activateLightWidget(...o)),value:"Add Light"}),Se("input",{type:"button",onClick:e[3]||(e[3]=(...o)=>n.activateElementWidget&&n.activateElementWidget(...o)),value:"Add Element"})])}const BS=Di(NS,[["render",FS]]),zS=Pi({name:"ThreeDPreview",setup(){const n=Ft(),e=Do(),{threeContext:t}=e,i=()=>{const s=n.value.offsetWidth,o=n.value.offsetHeight;t.resizeRatio({width:s,height:o}),n.value.appendChild(t.renderer.domElement)},r=()=>{const s=n.value.offsetWidth-6,o=n.value.offsetHeight-6;t.resizeRatio({width:s,height:o})};return Pf(()=>{i(),window.addEventListener("resize",r);const s=()=>{requestAnimationFrame(s);const{renderer:o,scene:a,camera:l,controls:c}=t;o.render(a,l),c.update()};s()}),Lf(()=>{window.removeEventListener("resize",r)}),{threeContainer:n}}}),HS={class:"threeWrapperDiv"},VS={ref:"threeContainer",class:"threeDiv"};function GS(n,e,t,i,r,s){return vt(),wt("div",HS,[Se("div",VS,null,512)])}const kS=Di(zS,[["render",GS]]),WS=Pi({setup(){return{store:nh()}}}),XS={class:"detail-widget-wrapper"},YS={key:0},qS={key:1};function jS(n,e,t,i,r,s){return vt(),wt("div",XS,[n.store.widget?(vt(),wt("div",YS,[(vt(),Yf(zd(n.store.widget)))])):(vt(),wt("div",qS," No component selected yet! "))])}const $S=Di(WS,[["render",jS]]),KS={class:"main-grid"},ZS={class:"tree"},JS={class:"details"},QS={class:"main"},eE=Pi({__name:"App",setup(n){return(e,t)=>(vt(),wt("div",KS,[Se("div",ZS,[tn(BS)]),Se("div",JS,[tn($S)]),Se("div",QS,[tn(kS)])]))}}),tE=dm();cm(eE).use(tE).mount("#app");
