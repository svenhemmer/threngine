(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ga(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const tt={},zi=[],Ht=()=>{},$f=()=>!1,Os=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),va=n=>n.startsWith("onUpdate:"),ht=Object.assign,xa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kf=Object.prototype.hasOwnProperty,Ge=(n,e)=>Kf.call(n,e),Pe=Array.isArray,pr=n=>Bs(n)==="[object Map]",jf=n=>Bs(n)==="[object Set]",Ue=n=>typeof n=="function",dt=n=>typeof n=="string",Cr=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",nu=n=>(at(n)||Ue(n))&&Ue(n.then)&&Ue(n.catch),Zf=Object.prototype.toString,Bs=n=>Zf.call(n),Jf=n=>Bs(n).slice(8,-1),Qf=n=>Bs(n)==="[object Object]",Ma=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,mr=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},eh=/-(\w)/g,cn=zs(n=>n.replace(eh,(e,t)=>t?t.toUpperCase():"")),th=/\B([A-Z])/g,Zi=zs(n=>n.replace(th,"-$1").toLowerCase()),Hs=zs(n=>n.charAt(0).toUpperCase()+n.slice(1)),ao=zs(n=>n?`on${Hs(n)}`:""),Wn=(n,e)=>!Object.is(n,e),gs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},iu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},jo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ja;const ru=()=>ja||(ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sa(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?sh(i):Sa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||at(n))return n}const nh=/;(?![^(]*\))/g,ih=/:([^]+)/,rh=/\/\*[^]*?\*\//g;function sh(n){const e={};return n.replace(rh,"").split(nh).forEach(t=>{if(t){const i=t.split(ih);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mr(n){let e="";if(dt(n))e=n;else if(Pe(n))for(let t=0;t<n.length;t++){const i=Mr(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ah=ga(oh);function su(n){return!!n||n===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class ou{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Ft;try{return Ft=this,e()}finally{Ft=t}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function au(n){return new ou(n)}function lh(n,e=Ft){e&&e.active&&e.effects.push(n)}function lu(){return Ft}function ch(n){Ft&&Ft.cleanups.push(n)}let pi;class Ea{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,lh(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,$n();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(uh(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Kn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zn,t=pi;try{return zn=!0,pi=this,this._runnings++,Za(this),this.fn()}finally{Ja(this),this._runnings--,pi=t,zn=e}}stop(){this.active&&(Za(this),Ja(this),this.onStop&&this.onStop(),this.active=!1)}}function uh(n){return n.value}function Za(n){n._trackId++,n._depsLength=0}function Ja(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)cu(n.deps[e],n);n.deps.length=n._depsLength}}function cu(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let zn=!0,Zo=0;const uu=[];function $n(){uu.push(zn),zn=!1}function Kn(){const n=uu.pop();zn=n===void 0?!0:n}function ya(){Zo++}function Ta(){for(Zo--;!Zo&&Jo.length;)Jo.shift()()}function fu(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&cu(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Jo=[];function hu(n,e,t){ya();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Jo.push(i.scheduler)))}Ta()}const du=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ts=new WeakMap,mi=Symbol(""),Qo=Symbol("");function Dt(n,e,t){if(zn&&pi){let i=Ts.get(n);i||Ts.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=du(()=>i.delete(t))),fu(pi,r)}}function xn(n,e,t,i,r,s){const o=Ts.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Pe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Cr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Pe(n)?Ma(t)&&a.push(o.get("length")):(a.push(o.get(mi)),pr(n)&&a.push(o.get(Qo)));break;case"delete":Pe(n)||(a.push(o.get(mi)),pr(n)&&a.push(o.get(Qo)));break;case"set":pr(n)&&a.push(o.get(mi));break}ya();for(const l of a)l&&hu(l,4);Ta()}function fh(n,e){const t=Ts.get(n);return t&&t.get(e)}const hh=ga("__proto__,__v_isRef,__isVue"),pu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr)),Qa=dh();function dh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=We(this);for(let s=0,o=this.length;s<o;s++)Dt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){$n(),ya();const i=We(this)[e].apply(this,t);return Ta(),Kn(),i}}),n}function ph(n){Cr(n)||(n=String(n));const e=We(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class mu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?wh:xu:s?vu:gu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!r){if(o&&Ge(Qa,t))return Reflect.get(Qa,t,i);if(t==="hasOwnProperty")return ph}const a=Reflect.get(e,t,i);return(Cr(t)?pu.has(t):hh(t))||(r||Dt(e,"get",t),s)?a:lt(a)?o&&Ma(t)?a:a.value:at(a)?r?Mu(a):Gs(a):a}}class _u extends mu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Sr(s);if(!bs(i)&&!Sr(i)&&(s=We(s),i=We(i)),!Pe(e)&&lt(s)&&!lt(i))return l?!1:(s.value=i,!0)}const o=Pe(e)&&Ma(t)?Number(t)<e.length:Ge(e,t),a=Reflect.set(e,t,i,r);return e===We(r)&&(o?Wn(i,s)&&xn(e,"set",t,i):xn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ge(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&xn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cr(t)||!pu.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",Pe(e)?"length":mi),Reflect.ownKeys(e)}}class mh extends mu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _h=new _u,gh=new mh,vh=new _u(!0);const ba=n=>n,Vs=n=>Reflect.getPrototypeOf(n);function zr(n,e,t=!1,i=!1){n=n.__v_raw;const r=We(n),s=We(e);t||(Wn(e,s)&&Dt(r,"get",e),Dt(r,"get",s));const{has:o}=Vs(r),a=i?ba:t?Ca:Er;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Hr(n,e=!1){const t=this.__v_raw,i=We(t),r=We(n);return e||(Wn(n,r)&&Dt(i,"has",n),Dt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Vr(n,e=!1){return n=n.__v_raw,!e&&Dt(We(n),"iterate",mi),Reflect.get(n,"size",n)}function el(n){n=We(n);const e=We(this);return Vs(e).has.call(e,n)||(e.add(n),xn(e,"add",n,n)),this}function tl(n,e){e=We(e);const t=We(this),{has:i,get:r}=Vs(t);let s=i.call(t,n);s||(n=We(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Wn(e,o)&&xn(t,"set",n,e):xn(t,"add",n,e),this}function nl(n){const e=We(this),{has:t,get:i}=Vs(e);let r=t.call(e,n);r||(n=We(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&xn(e,"delete",n,void 0),s}function il(){const n=We(this),e=n.size!==0,t=n.clear();return e&&xn(n,"clear",void 0,void 0),t}function Gr(n,e){return function(i,r){const s=this,o=s.__v_raw,a=We(o),l=e?ba:n?Ca:Er;return!n&&Dt(a,"iterate",mi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function kr(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),o=pr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?ba:e?Ca:Er;return!e&&Dt(s,"iterate",l?Qo:mi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Tn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xh(){const n={get(s){return zr(this,s)},get size(){return Vr(this)},has:Hr,add:el,set:tl,delete:nl,clear:il,forEach:Gr(!1,!1)},e={get(s){return zr(this,s,!1,!0)},get size(){return Vr(this)},has:Hr,add:el,set:tl,delete:nl,clear:il,forEach:Gr(!1,!0)},t={get(s){return zr(this,s,!0)},get size(){return Vr(this,!0)},has(s){return Hr.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Gr(!0,!1)},i={get(s){return zr(this,s,!0,!0)},get size(){return Vr(this,!0)},has(s){return Hr.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=kr(s,!1,!1),t[s]=kr(s,!0,!1),e[s]=kr(s,!1,!0),i[s]=kr(s,!0,!0)}),[n,t,e,i]}const[Mh,Sh,Eh,yh]=xh();function Aa(n,e){const t=e?n?yh:Eh:n?Sh:Mh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ge(t,r)&&r in i?t:i,r,s)}const Th={get:Aa(!1,!1)},bh={get:Aa(!1,!0)},Ah={get:Aa(!0,!1)};const gu=new WeakMap,vu=new WeakMap,xu=new WeakMap,wh=new WeakMap;function Rh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ch(n){return n.__v_skip||!Object.isExtensible(n)?0:Rh(Jf(n))}function Gs(n){return Sr(n)?n:wa(n,!1,_h,Th,gu)}function Ph(n){return wa(n,!1,vh,bh,vu)}function Mu(n){return wa(n,!0,gh,Ah,xu)}function wa(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Ch(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function _i(n){return Sr(n)?_i(n.__v_raw):!!(n&&n.__v_isReactive)}function Sr(n){return!!(n&&n.__v_isReadonly)}function bs(n){return!!(n&&n.__v_isShallow)}function Su(n){return n?!!n.__v_raw:!1}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function Ra(n){return Object.isExtensible(n)&&iu(n,"__v_skip",!0),n}const Er=n=>at(n)?Gs(n):n,Ca=n=>at(n)?Mu(n):n;class Eu{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ea(()=>e(this._value),()=>vs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=We(this);return(!e._cacheable||e.effect.dirty)&&Wn(e._value,e._value=e.effect.run())&&vs(e,4),yu(e),e.effect._dirtyLevel>=2&&vs(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Lh(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=Ht):(i=n.get,r=n.set),new Eu(i,r,s||!r,t)}function yu(n){var e;zn&&pi&&(n=We(n),fu(pi,(e=n.dep)!=null?e:n.dep=du(()=>n.dep=void 0,n instanceof Eu?n:void 0)))}function vs(n,e=4,t){n=We(n);const i=n.dep;i&&hu(i,e)}function lt(n){return!!(n&&n.__v_isRef===!0)}function Hi(n){return bu(n,!1)}function Tu(n){return bu(n,!0)}function bu(n,e){return lt(n)?n:new Dh(n,e)}class Dh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:Er(e)}get value(){return yu(this),this._value}set value(e){const t=this.__v_isShallow||bs(e)||Sr(e);e=t?e:We(e),Wn(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Er(e),vs(this,4))}}function Uh(n){return lt(n)?n.value:n}const Ih={get:(n,e,t)=>Uh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return lt(r)&&!lt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Au(n){return _i(n)?n:new Proxy(n,Ih)}function Nh(n){const e=Pe(n)?new Array(n.length):{};for(const t in n)e[t]=Oh(n,t);return e}class Fh{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fh(We(this._object),this._key)}}function Oh(n,e,t){const i=n[e];return lt(i)?i:new Fh(n,e,t)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(n,e,t,i){try{return i?n(...i):n()}catch(r){ks(r,e,t)}}function Yt(n,e,t,i){if(Ue(n)){const r=Hn(n,e,t,i);return r&&nu(r)&&r.catch(s=>{ks(s,e,t)}),r}if(Pe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Yt(n[s],e,t,i));return r}}function ks(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){$n(),Hn(l,null,10,[n,o,a]),Kn();return}}Bh(n,t,r,i)}function Bh(n,e,t,i=!0){console.error(n)}let yr=!1,ea=!1;const St=[];let rn=0;const Vi=[];let Dn=null,li=0;const wu=Promise.resolve();let Pa=null;function Ru(n){const e=Pa||wu;return n?e.then(this?n.bind(this):n):e}function zh(n){let e=rn+1,t=St.length;for(;e<t;){const i=e+t>>>1,r=St[i],s=Tr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function La(n){(!St.length||!St.includes(n,yr&&n.allowRecurse?rn+1:rn))&&(n.id==null?St.push(n):St.splice(zh(n.id),0,n),Cu())}function Cu(){!yr&&!ea&&(ea=!0,Pa=wu.then(Lu))}function Hh(n){const e=St.indexOf(n);e>rn&&St.splice(e,1)}function Vh(n){Pe(n)?Vi.push(...n):(!Dn||!Dn.includes(n,n.allowRecurse?li+1:li))&&Vi.push(n),Cu()}function rl(n,e,t=yr?rn+1:0){for(;t<St.length;t++){const i=St[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;St.splice(t,1),t--,i()}}}function Pu(n){if(Vi.length){const e=[...new Set(Vi)].sort((t,i)=>Tr(t)-Tr(i));if(Vi.length=0,Dn){Dn.push(...e);return}for(Dn=e,li=0;li<Dn.length;li++)Dn[li]();Dn=null,li=0}}const Tr=n=>n.id==null?1/0:n.id,Gh=(n,e)=>{const t=Tr(n)-Tr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Lu(n){ea=!1,yr=!0,St.sort(Gh);try{for(rn=0;rn<St.length;rn++){const e=St[rn];e&&e.active!==!1&&Hn(e,null,14)}}finally{rn=0,St.length=0,Pu(),yr=!1,Pa=null,(St.length||Vi.length)&&Lu()}}function kh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||tt;h&&(r=t.map(m=>dt(m)?m.trim():m)),f&&(r=t.map(jo))}let a,l=i[a=ao(e)]||i[a=ao(cn(e))];!l&&s&&(l=i[a=ao(Zi(e))]),l&&Yt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yt(c,n,6,r)}}function Du(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ue(n)){const l=c=>{const u=Du(c,e,!0);u&&(a=!0,ht(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(Pe(s)?s.forEach(l=>o[l]=null):ht(o,s),at(n)&&i.set(n,o),o)}function Ws(n,e){return!n||!Os(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(n,e[0].toLowerCase()+e.slice(1))||Ge(n,Zi(e))||Ge(n,e))}let bt=null,Xs=null;function As(n){const e=bt;return bt=n,Xs=n&&n.type.__scopeId||null,e}function Wh(n){Xs=n}function Xh(){Xs=null}function qh(n,e=bt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ml(-1);const s=As(e);let o;try{o=n(...r)}finally{As(s),i._d&&ml(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function lo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:g,inheritAttrs:v}=n,p=As(n);let d,A;try{if(t.shapeFlag&4){const b=r||i,B=b;d=tn(c.call(B,b,u,f,m,h,g)),A=a}else{const b=e;d=tn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),A=e.props?a:Yh(a)}}catch(b){vr.length=0,ks(b,n,1),d=$t(br)}let y=d;if(A&&v!==!1){const b=Object.keys(A),{shapeFlag:B}=y;b.length&&B&7&&(s&&b.some(va)&&(A=$h(A,s)),y=qi(y,A,!1,!0))}return t.dirs&&(y=qi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),d=y,As(p),d}const Yh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Os(t))&&((e||(e={}))[t]=n[t]);return e},$h=(n,e)=>{const t={};for(const i in n)(!va(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Kh(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?sl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ws(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?sl(i,o,c):!0:!!o;return!1}function sl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ws(t,s))return!0}return!1}function jh({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zh="components",Uu=Symbol.for("v-ndc");function Jh(n){return dt(n)?Qh(Zh,n,!1)||n:n||Uu}function Qh(n,e,t=!0,i=!1){const r=bt||pt;if(r){const s=r.type;{const a=$d(s,!1);if(a&&(a===e||a===cn(e)||a===Hs(cn(e))))return s}const o=ol(r[n]||s[n],e)||ol(r.appContext[n],e);return!o&&i?s:o}}function ol(n,e){return n&&(n[e]||n[cn(e)]||n[Hs(cn(e))])}const ed=n=>n.__isSuspense;function td(n,e){e&&e.pendingBranch?Pe(n)?e.effects.push(...n):e.effects.push(n):Vh(n)}const nd=Symbol.for("v-scx"),id=()=>gr(nd),Wr={};function xs(n,e,t){return Iu(n,e,t)}function Iu(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=tt){if(e&&s){const R=e;e=(...C)=>{R(...C),B()}}const l=pt,c=R=>i===!0?R:fi(R,i===!1?1:void 0);let u,f=!1,h=!1;if(lt(n)?(u=()=>n.value,f=bs(n)):_i(n)?(u=()=>c(n),f=!0):Pe(n)?(h=!0,f=n.some(R=>_i(R)||bs(R)),u=()=>n.map(R=>{if(lt(R))return R.value;if(_i(R))return c(R);if(Ue(R))return Hn(R,l,2)})):Ue(n)?e?u=()=>Hn(n,l,2):u=()=>(m&&m(),Yt(n,l,3,[g])):u=Ht,e&&i){const R=u;u=()=>fi(R())}let m,g=R=>{m=y.onStop=()=>{Hn(R,l,4),m=y.onStop=void 0}},v;if($s)if(g=Ht,e?t&&Yt(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const R=id();v=R.__watcherHandles||(R.__watcherHandles=[])}else return Ht;let p=h?new Array(n.length).fill(Wr):Wr;const d=()=>{if(!(!y.active||!y.dirty))if(e){const R=y.run();(i||f||(h?R.some((C,z)=>Wn(C,p[z])):Wn(R,p)))&&(m&&m(),Yt(e,l,3,[R,p===Wr?void 0:h&&p[0]===Wr?[]:p,g]),p=R)}else y.run()};d.allowRecurse=!!e;let A;r==="sync"?A=d:r==="post"?A=()=>wt(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),A=()=>La(d));const y=new Ea(u,Ht,A),b=lu(),B=()=>{y.stop(),b&&xa(b.effects,y)};return e?t?d():p=y.run():r==="post"?wt(y.run.bind(y),l&&l.suspense):y.run(),v&&v.push(B),B}function rd(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?Nu(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=Pr(this),a=Iu(r,s.bind(i),t);return o(),a}function Nu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function fi(n,e=1/0,t){if(e<=0||!at(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,lt(n))fi(n.value,e,t);else if(Pe(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(jf(n)||pr(n))n.forEach(i=>{fi(i,e,t)});else if(Qf(n))for(const i in n)fi(n[i],e,t);return n}function Un(n,e){if(bt===null)return n;const t=Ks(bt)||bt.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=tt]=e[r];s&&(Ue(s)&&(s={mounted:s,updated:s}),s.deep&&fi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Jn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&($n(),Yt(l,t,8,[n.el,a,n,e]),Kn())}}/*! #__NO_SIDE_EFFECTS__ */function Ji(n,e){return Ue(n)?ht({name:n.name},e,{setup:n}):n}const Ms=n=>!!n.type.__asyncLoader,Fu=n=>n.type.__isKeepAlive;function sd(n,e){Ou(n,"a",e)}function od(n,e){Ou(n,"da",e)}function Ou(n,e,t=pt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(qs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Fu(r.parent.vnode)&&ad(i,e,t,r),r=r.parent}}function ad(n,e,t,i){const r=qs(e,n,i,!0);Hu(()=>{xa(i[e],r)},t)}function qs(n,e,t=pt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;$n();const a=Pr(t),l=Yt(e,t,n,o);return a(),Kn(),l});return i?r.unshift(s):r.push(s),s}}const Sn=n=>(e,t=pt)=>(!$s||n==="sp")&&qs(n,(...i)=>e(...i),t),ld=Sn("bm"),Bu=Sn("m"),cd=Sn("bu"),ud=Sn("u"),zu=Sn("bum"),Hu=Sn("um"),fd=Sn("sp"),hd=Sn("rtg"),dd=Sn("rtc");function pd(n,e=pt){qs("ec",n,e)}const ta=n=>n?tf(n)?Ks(n)||n.proxy:ta(n.parent):null,_r=ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ta(n.parent),$root:n=>ta(n.root),$emit:n=>n.emit,$options:n=>Da(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,La(n.update)}),$nextTick:n=>n.n||(n.n=Ru.bind(n.proxy)),$watch:n=>rd.bind(n)}),co=(n,e)=>n!==tt&&!n.__isScriptSetup&&Ge(n,e),md={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(co(i,e))return o[e]=1,i[e];if(r!==tt&&Ge(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(t!==tt&&Ge(t,e))return o[e]=4,t[e];na&&(o[e]=0)}}const u=_r[e];let f,h;if(u)return e==="$attrs"&&Dt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==tt&&Ge(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ge(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return co(r,e)?(r[e]=t,!0):i!==tt&&Ge(i,e)?(i[e]=t,!0):Ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==tt&&Ge(n,o)||co(e,o)||(a=s[0])&&Ge(a,o)||Ge(i,o)||Ge(_r,o)||Ge(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function al(n){return Pe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let na=!0;function _d(n){const e=Da(n),t=n.proxy,i=n.ctx;na=!1,e.beforeCreate&&ll(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:A,destroyed:y,unmounted:b,render:B,renderTracked:R,renderTriggered:C,errorCaptured:z,serverPrefetch:E,expose:x,inheritAttrs:H,components:j,directives:U,filters:ee}=e;if(c&&gd(c,i,null),o)for(const ne in o){const V=o[ne];Ue(V)&&(i[ne]=V.bind(t))}if(r){const ne=r.call(t,t);at(ne)&&(n.data=Gs(ne))}if(na=!0,s)for(const ne in s){const V=s[ne],le=Ue(V)?V.bind(t,t):Ue(V.get)?V.get.bind(t,t):Ht,ce=!Ue(V)&&Ue(V.set)?V.set.bind(t):Ht,Me=rf({get:le,set:ce});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Me.value,set:we=>Me.value=we})}if(a)for(const ne in a)Vu(a[ne],i,t,ne);if(l){const ne=Ue(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(V=>{yd(V,ne[V])})}u&&ll(u,n,"c");function te(ne,V){Pe(V)?V.forEach(le=>ne(le.bind(t))):V&&ne(V.bind(t))}if(te(ld,f),te(Bu,h),te(cd,m),te(ud,g),te(sd,v),te(od,p),te(pd,z),te(dd,R),te(hd,C),te(zu,A),te(Hu,b),te(fd,E),Pe(x))if(x.length){const ne=n.exposed||(n.exposed={});x.forEach(V=>{Object.defineProperty(ne,V,{get:()=>t[V],set:le=>t[V]=le})})}else n.exposed||(n.exposed={});B&&n.render===Ht&&(n.render=B),H!=null&&(n.inheritAttrs=H),j&&(n.components=j),U&&(n.directives=U)}function gd(n,e,t=Ht){Pe(n)&&(n=ia(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=gr(r.from||i,r.default,!0):s=gr(r.from||i):s=gr(r),lt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ll(n,e,t){Yt(Pe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vu(n,e,t,i){const r=i.includes(".")?Nu(t,i):()=>t[i];if(dt(n)){const s=e[n];Ue(s)&&xs(r,s)}else if(Ue(n))xs(r,n.bind(t));else if(at(n))if(Pe(n))n.forEach(s=>Vu(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&xs(r,s,n)}}function Da(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ws(l,c,o,!0)),ws(l,e,o)),at(e)&&s.set(e,l),l}function ws(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ws(n,s,t,!0),r&&r.forEach(o=>ws(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=vd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const vd={data:cl,props:ul,emits:ul,methods:fr,computed:fr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:fr,directives:fr,watch:Md,provide:cl,inject:xd};function cl(n,e){return e?n?function(){return ht(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function xd(n,e){return fr(ia(n),ia(e))}function ia(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?ht(Object.create(null),n,e):e}function ul(n,e){return n?Pe(n)&&Pe(e)?[...new Set([...n,...e])]:ht(Object.create(null),al(n),al(e??{})):e}function Md(n,e){if(!n)return e;if(!e)return n;const t=ht(Object.create(null),n);for(const i in e)t[i]=yt(n[i],e[i]);return t}function Gu(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sd=0;function Ed(n,e){return function(i,r=null){Ue(i)||(i=ht({},i)),r!=null&&!at(r)&&(r=null);const s=Gu(),o=new WeakSet;let a=!1;const l=s.app={_uid:Sd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jd,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=$t(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ks(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Gi;Gi=l;try{return c()}finally{Gi=u}}};return l}}let Gi=null;function yd(n,e){if(pt){let t=pt.provides;const i=pt.parent&&pt.parent.provides;i===t&&(t=pt.provides=Object.create(i)),t[n]=e}}function gr(n,e,t=!1){const i=pt||bt;if(i||Gi){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Gi._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i&&i.proxy):e}}function Td(){return!!(pt||bt||Gi)}const ku={},Wu=()=>Object.create(ku),Xu=n=>Object.getPrototypeOf(n)===ku;function bd(n,e,t,i=!1){const r={},s=Wu();n.propsDefaults=Object.create(null),qu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ph(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ad(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=We(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ws(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ge(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=cn(h);r[g]=ra(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{qu(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ge(e,f)&&((u=Zi(f))===f||!Ge(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ra(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ge(e,f))&&(delete s[f],c=!0)}c&&xn(n.attrs,"set","")}function qu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(mr(l))continue;const c=e[l];let u;r&&Ge(r,u=cn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ws(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=We(t),c=a||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ra(r,l,f,c[f],n,!Ge(c,f))}}return o}function ra(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Pr(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Zi(t))&&(i=!0))}return i}function Yu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ue(n)){const u=f=>{l=!0;const[h,m]=Yu(f,e,!0);ht(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,zi),zi;if(Pe(s))for(let u=0;u<s.length;u++){const f=cn(s[u]);fl(f)&&(o[f]=tt)}else if(s)for(const u in s){const f=cn(u);if(fl(f)){const h=s[u],m=o[f]=Pe(h)||Ue(h)?{type:h}:ht({},h);if(m){const g=pl(Boolean,m.type),v=pl(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||Ge(m,"default"))&&a.push(f)}}}const c=[o,a];return at(n)&&i.set(n,c),c}function fl(n){return n[0]!=="$"&&!mr(n)}function hl(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function dl(n,e){return hl(n)===hl(e)}function pl(n,e){return Pe(e)?e.findIndex(t=>dl(t,n)):Ue(e)&&dl(e,n)?0:-1}const $u=n=>n[0]==="_"||n==="$stable",Ua=n=>Pe(n)?n.map(tn):[tn(n)],wd=(n,e,t)=>{if(e._n)return e;const i=qh((...r)=>Ua(e(...r)),t);return i._c=!1,i},Ku=(n,e,t)=>{const i=n._ctx;for(const r in n){if($u(r))continue;const s=n[r];if(Ue(s))e[r]=wd(r,s,i);else if(s!=null){const o=Ua(s);e[r]=()=>o}}},ju=(n,e)=>{const t=Ua(e);n.slots.default=()=>t},Rd=(n,e)=>{const t=n.slots=Wu();if(n.vnode.shapeFlag&32){const i=e._;i?(ht(t,e),iu(t,"_",i,!0)):Ku(e,t)}else e&&ju(n,e)},Cd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(ht(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Ku(e,r)),o=e}else e&&(ju(n,e),o={default:1});if(s)for(const a in r)!$u(a)&&o[a]==null&&delete r[a]};function sa(n,e,t,i,r=!1){if(Pe(n)){n.forEach((h,m)=>sa(h,e&&(Pe(e)?e[m]:e),t,i,r));return}if(Ms(i)&&!r)return;const s=i.shapeFlag&4?Ks(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):lt(c)&&(c.value=null)),Ue(l))Hn(l,a,12,[o,u]);else{const h=dt(l),m=lt(l);if(h||m){const g=()=>{if(n.f){const v=h?Ge(f,l)?f[l]:u[l]:l.value;r?Pe(v)&&xa(v,s):Pe(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ge(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,wt(g,t)):g()}}}const wt=td;function Pd(n){return Ld(n)}function Ld(n,e){const t=ru();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Ht,insertStaticContent:g}=n,v=(T,w,O,q=null,$=null,re=null,M=void 0,_=null,P=!!w.dynamicChildren)=>{if(T===w)return;T&&!rr(T,w)&&(q=fe(T),we(T,$,re,!0),T=null),w.patchFlag===-2&&(P=!1,w.dynamicChildren=null);const{type:L,ref:N,shapeFlag:W}=w;switch(L){case Ys:p(T,w,O,q);break;case br:d(T,w,O,q);break;case fo:T==null&&A(w,O,q,M);break;case Qt:j(T,w,O,q,$,re,M,_,P);break;default:W&1?B(T,w,O,q,$,re,M,_,P):W&6?U(T,w,O,q,$,re,M,_,P):(W&64||W&128)&&L.process(T,w,O,q,$,re,M,_,P,F)}N!=null&&$&&sa(N,T&&T.ref,re,w||T,!w)},p=(T,w,O,q)=>{if(T==null)i(w.el=a(w.children),O,q);else{const $=w.el=T.el;w.children!==T.children&&c($,w.children)}},d=(T,w,O,q)=>{T==null?i(w.el=l(w.children||""),O,q):w.el=T.el},A=(T,w,O,q)=>{[T.el,T.anchor]=g(T.children,w,O,q,T.el,T.anchor)},y=({el:T,anchor:w},O,q)=>{let $;for(;T&&T!==w;)$=h(T),i(T,O,q),T=$;i(w,O,q)},b=({el:T,anchor:w})=>{let O;for(;T&&T!==w;)O=h(T),r(T),T=O;r(w)},B=(T,w,O,q,$,re,M,_,P)=>{w.type==="svg"?M="svg":w.type==="math"&&(M="mathml"),T==null?R(w,O,q,$,re,M,_,P):E(T,w,$,re,M,_,P)},R=(T,w,O,q,$,re,M,_)=>{let P,L;const{props:N,shapeFlag:W,transition:se,dirs:J}=T;if(P=T.el=o(T.type,re,N&&N.is,N),W&8?u(P,T.children):W&16&&z(T.children,P,null,q,$,uo(T,re),M,_),J&&Jn(T,null,q,"created"),C(P,T,T.scopeId,M,q),N){for(const ge in N)ge!=="value"&&!mr(ge)&&s(P,ge,null,N[ge],re,T.children,q,$,_e);"value"in N&&s(P,"value",null,N.value,re),(L=N.onVnodeBeforeMount)&&Zt(L,q,T)}J&&Jn(T,null,q,"beforeMount");const ie=Dd($,se);ie&&se.beforeEnter(P),i(P,w,O),((L=N&&N.onVnodeMounted)||ie||J)&&wt(()=>{L&&Zt(L,q,T),ie&&se.enter(P),J&&Jn(T,null,q,"mounted")},$)},C=(T,w,O,q,$)=>{if(O&&m(T,O),q)for(let re=0;re<q.length;re++)m(T,q[re]);if($){let re=$.subTree;if(w===re){const M=$.vnode;C(T,M,M.scopeId,M.slotScopeIds,$.parent)}}},z=(T,w,O,q,$,re,M,_,P=0)=>{for(let L=P;L<T.length;L++){const N=T[L]=_?In(T[L]):tn(T[L]);v(null,N,w,O,q,$,re,M,_)}},E=(T,w,O,q,$,re,M)=>{const _=w.el=T.el;let{patchFlag:P,dynamicChildren:L,dirs:N}=w;P|=T.patchFlag&16;const W=T.props||tt,se=w.props||tt;let J;if(O&&Qn(O,!1),(J=se.onVnodeBeforeUpdate)&&Zt(J,O,w,T),N&&Jn(w,T,O,"beforeUpdate"),O&&Qn(O,!0),L?x(T.dynamicChildren,L,_,O,q,uo(w,$),re):M||V(T,w,_,null,O,q,uo(w,$),re,!1),P>0){if(P&16)H(_,w,W,se,O,q,$);else if(P&2&&W.class!==se.class&&s(_,"class",null,se.class,$),P&4&&s(_,"style",W.style,se.style,$),P&8){const ie=w.dynamicProps;for(let ge=0;ge<ie.length;ge++){const oe=ie[ge],me=W[oe],Re=se[oe];(Re!==me||oe==="value")&&s(_,oe,me,Re,$,T.children,O,q,_e)}}P&1&&T.children!==w.children&&u(_,w.children)}else!M&&L==null&&H(_,w,W,se,O,q,$);((J=se.onVnodeUpdated)||N)&&wt(()=>{J&&Zt(J,O,w,T),N&&Jn(w,T,O,"updated")},q)},x=(T,w,O,q,$,re,M)=>{for(let _=0;_<w.length;_++){const P=T[_],L=w[_],N=P.el&&(P.type===Qt||!rr(P,L)||P.shapeFlag&70)?f(P.el):O;v(P,L,N,null,q,$,re,M,!0)}},H=(T,w,O,q,$,re,M)=>{if(O!==q){if(O!==tt)for(const _ in O)!mr(_)&&!(_ in q)&&s(T,_,O[_],null,M,w.children,$,re,_e);for(const _ in q){if(mr(_))continue;const P=q[_],L=O[_];P!==L&&_!=="value"&&s(T,_,L,P,M,w.children,$,re,_e)}"value"in q&&s(T,"value",O.value,q.value,M)}},j=(T,w,O,q,$,re,M,_,P)=>{const L=w.el=T?T.el:a(""),N=w.anchor=T?T.anchor:a("");let{patchFlag:W,dynamicChildren:se,slotScopeIds:J}=w;J&&(_=_?_.concat(J):J),T==null?(i(L,O,q),i(N,O,q),z(w.children||[],O,N,$,re,M,_,P)):W>0&&W&64&&se&&T.dynamicChildren?(x(T.dynamicChildren,se,O,$,re,M,_),(w.key!=null||$&&w===$.subTree)&&Zu(T,w,!0)):V(T,w,O,N,$,re,M,_,P)},U=(T,w,O,q,$,re,M,_,P)=>{w.slotScopeIds=_,T==null?w.shapeFlag&512?$.ctx.activate(w,O,q,M,P):ee(w,O,q,$,re,M,P):Z(T,w,P)},ee=(T,w,O,q,$,re,M)=>{const _=T.component=kd(T,q,$);if(Fu(T)&&(_.ctx.renderer=F),Wd(_),_.asyncDep){if($&&$.registerDep(_,te),!T.el){const P=_.subTree=$t(br);d(null,P,w,O)}}else te(_,T,w,O,$,re,M)},Z=(T,w,O)=>{const q=w.component=T.component;if(Kh(T,w,O))if(q.asyncDep&&!q.asyncResolved){ne(q,w,O);return}else q.next=w,Hh(q.update),q.effect.dirty=!0,q.update();else w.el=T.el,q.vnode=w},te=(T,w,O,q,$,re,M)=>{const _=()=>{if(T.isMounted){let{next:N,bu:W,u:se,parent:J,vnode:ie}=T;{const ye=Ju(T);if(ye){N&&(N.el=ie.el,ne(T,N,M)),ye.asyncDep.then(()=>{T.isUnmounted||_()});return}}let ge=N,oe;Qn(T,!1),N?(N.el=ie.el,ne(T,N,M)):N=ie,W&&gs(W),(oe=N.props&&N.props.onVnodeBeforeUpdate)&&Zt(oe,J,N,ie),Qn(T,!0);const me=lo(T),Re=T.subTree;T.subTree=me,v(Re,me,f(Re.el),fe(Re),T,$,re),N.el=me.el,ge===null&&jh(T,me.el),se&&wt(se,$),(oe=N.props&&N.props.onVnodeUpdated)&&wt(()=>Zt(oe,J,N,ie),$)}else{let N;const{el:W,props:se}=w,{bm:J,m:ie,parent:ge}=T,oe=Ms(w);if(Qn(T,!1),J&&gs(J),!oe&&(N=se&&se.onVnodeBeforeMount)&&Zt(N,ge,w),Qn(T,!0),W&&Te){const me=()=>{T.subTree=lo(T),Te(W,T.subTree,T,$,null)};oe?w.type.__asyncLoader().then(()=>!T.isUnmounted&&me()):me()}else{const me=T.subTree=lo(T);v(null,me,O,q,T,$,re),w.el=me.el}if(ie&&wt(ie,$),!oe&&(N=se&&se.onVnodeMounted)){const me=w;wt(()=>Zt(N,ge,me),$)}(w.shapeFlag&256||ge&&Ms(ge.vnode)&&ge.vnode.shapeFlag&256)&&T.a&&wt(T.a,$),T.isMounted=!0,w=O=q=null}},P=T.effect=new Ea(_,Ht,()=>La(L),T.scope),L=T.update=()=>{P.dirty&&P.run()};L.id=T.uid,Qn(T,!0),L()},ne=(T,w,O)=>{w.component=T;const q=T.vnode.props;T.vnode=w,T.next=null,Ad(T,w.props,q,O),Cd(T,w.children,O),$n(),rl(T),Kn()},V=(T,w,O,q,$,re,M,_,P=!1)=>{const L=T&&T.children,N=T?T.shapeFlag:0,W=w.children,{patchFlag:se,shapeFlag:J}=w;if(se>0){if(se&128){ce(L,W,O,q,$,re,M,_,P);return}else if(se&256){le(L,W,O,q,$,re,M,_,P);return}}J&8?(N&16&&_e(L,$,re),W!==L&&u(O,W)):N&16?J&16?ce(L,W,O,q,$,re,M,_,P):_e(L,$,re,!0):(N&8&&u(O,""),J&16&&z(W,O,q,$,re,M,_,P))},le=(T,w,O,q,$,re,M,_,P)=>{T=T||zi,w=w||zi;const L=T.length,N=w.length,W=Math.min(L,N);let se;for(se=0;se<W;se++){const J=w[se]=P?In(w[se]):tn(w[se]);v(T[se],J,O,null,$,re,M,_,P)}L>N?_e(T,$,re,!0,!1,W):z(w,O,q,$,re,M,_,P,W)},ce=(T,w,O,q,$,re,M,_,P)=>{let L=0;const N=w.length;let W=T.length-1,se=N-1;for(;L<=W&&L<=se;){const J=T[L],ie=w[L]=P?In(w[L]):tn(w[L]);if(rr(J,ie))v(J,ie,O,null,$,re,M,_,P);else break;L++}for(;L<=W&&L<=se;){const J=T[W],ie=w[se]=P?In(w[se]):tn(w[se]);if(rr(J,ie))v(J,ie,O,null,$,re,M,_,P);else break;W--,se--}if(L>W){if(L<=se){const J=se+1,ie=J<N?w[J].el:q;for(;L<=se;)v(null,w[L]=P?In(w[L]):tn(w[L]),O,ie,$,re,M,_,P),L++}}else if(L>se)for(;L<=W;)we(T[L],$,re,!0),L++;else{const J=L,ie=L,ge=new Map;for(L=ie;L<=se;L++){const Ve=w[L]=P?In(w[L]):tn(w[L]);Ve.key!=null&&ge.set(Ve.key,L)}let oe,me=0;const Re=se-ie+1;let ye=!1,ve=0;const Ce=new Array(Re);for(L=0;L<Re;L++)Ce[L]=0;for(L=J;L<=W;L++){const Ve=T[L];if(me>=Re){we(Ve,$,re,!0);continue}let be;if(Ve.key!=null)be=ge.get(Ve.key);else for(oe=ie;oe<=se;oe++)if(Ce[oe-ie]===0&&rr(Ve,w[oe])){be=oe;break}be===void 0?we(Ve,$,re,!0):(Ce[be-ie]=L+1,be>=ve?ve=be:ye=!0,v(Ve,w[be],O,null,$,re,M,_,P),me++)}const ze=ye?Ud(Ce):zi;for(oe=ze.length-1,L=Re-1;L>=0;L--){const Ve=ie+L,be=w[Ve],D=Ve+1<N?w[Ve+1].el:q;Ce[L]===0?v(null,be,O,D,$,re,M,_,P):ye&&(oe<0||L!==ze[oe]?Me(be,O,D,2):oe--)}}},Me=(T,w,O,q,$=null)=>{const{el:re,type:M,transition:_,children:P,shapeFlag:L}=T;if(L&6){Me(T.component.subTree,w,O,q);return}if(L&128){T.suspense.move(w,O,q);return}if(L&64){M.move(T,w,O,F);return}if(M===Qt){i(re,w,O);for(let W=0;W<P.length;W++)Me(P[W],w,O,q);i(T.anchor,w,O);return}if(M===fo){y(T,w,O);return}if(q!==2&&L&1&&_)if(q===0)_.beforeEnter(re),i(re,w,O),wt(()=>_.enter(re),$);else{const{leave:W,delayLeave:se,afterLeave:J}=_,ie=()=>i(re,w,O),ge=()=>{W(re,()=>{ie(),J&&J()})};se?se(re,ie,ge):ge()}else i(re,w,O)},we=(T,w,O,q=!1,$=!1)=>{const{type:re,props:M,ref:_,children:P,dynamicChildren:L,shapeFlag:N,patchFlag:W,dirs:se}=T;if(_!=null&&sa(_,null,O,T,!0),N&256){w.ctx.deactivate(T);return}const J=N&1&&se,ie=!Ms(T);let ge;if(ie&&(ge=M&&M.onVnodeBeforeUnmount)&&Zt(ge,w,T),N&6)ue(T.component,O,q);else{if(N&128){T.suspense.unmount(O,q);return}J&&Jn(T,null,w,"beforeUnmount"),N&64?T.type.remove(T,w,O,$,F,q):L&&(re!==Qt||W>0&&W&64)?_e(L,w,O,!1,!0):(re===Qt&&W&384||!$&&N&16)&&_e(P,w,O),q&&Ke(T)}(ie&&(ge=M&&M.onVnodeUnmounted)||J)&&wt(()=>{ge&&Zt(ge,w,T),J&&Jn(T,null,w,"unmounted")},O)},Ke=T=>{const{type:w,el:O,anchor:q,transition:$}=T;if(w===Qt){K(O,q);return}if(w===fo){b(T);return}const re=()=>{r(O),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:M,delayLeave:_}=$,P=()=>M(O,re);_?_(T.el,re,P):P()}else re()},K=(T,w)=>{let O;for(;T!==w;)O=h(T),r(T),T=O;r(w)},ue=(T,w,O)=>{const{bum:q,scope:$,update:re,subTree:M,um:_}=T;q&&gs(q),$.stop(),re&&(re.active=!1,we(M,T,w,O)),_&&wt(_,w),wt(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},_e=(T,w,O,q=!1,$=!1,re=0)=>{for(let M=re;M<T.length;M++)we(T[M],w,O,q,$)},fe=T=>T.shapeFlag&6?fe(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let Oe=!1;const Be=(T,w,O)=>{T==null?w._vnode&&we(w._vnode,null,null,!0):v(w._vnode||null,T,w,null,null,null,O),Oe||(Oe=!0,rl(),Pu(),Oe=!1),w._vnode=T},F={p:v,um:we,m:Me,r:Ke,mt:ee,mc:z,pc:V,pbc:x,n:fe,o:n};let Ze,Te;return{render:Be,hydrate:Ze,createApp:Ed(Be,Ze)}}function uo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Dd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zu(n,e,t=!1){const i=n.children,r=e.children;if(Pe(i)&&Pe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=In(r[s]),a.el=o.el),t||Zu(o,a)),a.type===Ys&&(a.el=o.el)}}function Ud(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ju(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ju(e)}const Id=n=>n.__isTeleport,Qt=Symbol.for("v-fgt"),Ys=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),vr=[];let qt=null;function Vn(n=!1){vr.push(qt=n?null:[])}function Nd(){vr.pop(),qt=vr[vr.length-1]||null}let Ar=1;function ml(n){Ar+=n}function Qu(n){return n.dynamicChildren=Ar>0?qt||zi:null,Nd(),Ar>0&&qt&&qt.push(n),n}function gi(n,e,t,i,r,s){return Qu(Xe(n,e,t,i,r,s,!0))}function Fd(n,e,t,i,r){return Qu($t(n,e,t,i,r,!0))}function Od(n){return n?n.__v_isVNode===!0:!1}function rr(n,e){return n.type===e.type&&n.key===e.key}const ef=({key:n})=>n??null,Ss=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||lt(n)||Ue(n)?{i:bt,r:n,k:e,f:!!t}:n:null);function Xe(n,e=null,t=null,i=0,r=null,s=n===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ef(e),ref:e&&Ss(e),scopeId:Xs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:bt};return a?(Ia(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Ar>0&&!o&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const $t=Bd;function Bd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Uu)&&(n=br),Od(n)){const a=qi(n,e,!0);return t&&Ia(a,t),Ar>0&&!s&&qt&&(a.shapeFlag&6?qt[qt.indexOf(n)]=a:qt.push(a)),a.patchFlag|=-2,a}if(Kd(n)&&(n=n.__vccOpts),e){e=zd(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=Mr(a)),at(l)&&(Su(l)&&!Pe(l)&&(l=ht({},l)),e.style=Sa(l))}const o=dt(n)?1:ed(n)?128:Id(n)?64:at(n)?4:Ue(n)?2:0;return Xe(n,e,t,i,r,o,s,!0)}function zd(n){return n?Su(n)||Xu(n)?ht({},n):n:null}function qi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Hd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ef(c),ref:e&&e.ref?t&&s?Pe(s)?s.concat(Ss(e)):[s,Ss(e)]:Ss(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&qi(n.ssContent),ssFallback:n.ssFallback&&qi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function en(n=" ",e=0){return $t(Ys,null,n,e)}function tn(n){return n==null||typeof n=="boolean"?$t(br):Pe(n)?$t(Qt,null,n.slice()):typeof n=="object"?In(n):$t(Ys,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:qi(n)}function Ia(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ia(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Xu(e)?e._ctx=bt:r===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),i&64?(t=16,e=[en(e)]):t=8);n.children=e,n.shapeFlag|=t}function Hd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Mr([e.class,i.class]));else if(r==="style")e.style=Sa([e.style,i.style]);else if(Os(r)){const s=e[r],o=i[r];o&&s!==o&&!(Pe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Zt(n,e,t,i=null){Yt(n,e,7,[t,i])}const Vd=Gu();let Gd=0;function kd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Vd,s={uid:Gd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(i,r),emitsOptions:Du(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kh.bind(null,s),n.ce&&n.ce(s),s}let pt=null,Rs,oa;{const n=ru(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Rs=e("__VUE_INSTANCE_SETTERS__",t=>pt=t),oa=e("__VUE_SSR_SETTERS__",t=>$s=t)}const Pr=n=>{const e=pt;return Rs(n),n.scope.on(),()=>{n.scope.off(),Rs(e)}},_l=()=>{pt&&pt.scope.off(),Rs(null)};function tf(n){return n.vnode.shapeFlag&4}let $s=!1;function Wd(n,e=!1){e&&oa(e);const{props:t,children:i}=n.vnode,r=tf(n);bd(n,t,r,e),Rd(n,i);const s=r?Xd(n,e):void 0;return e&&oa(!1),s}function Xd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,md);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Yd(n):null,s=Pr(n);$n();const o=Hn(i,n,0,[n.props,r]);if(Kn(),s(),nu(o)){if(o.then(_l,_l),e)return o.then(a=>{gl(n,a,e)}).catch(a=>{ks(a,n,0)});n.asyncDep=o}else gl(n,o,e)}else nf(n,e)}function gl(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=Au(e)),nf(n,t)}let vl;function nf(n,e,t){const i=n.type;if(!n.render){if(!e&&vl&&!i.render){const r=i.template||Da(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ht(ht({isCustomElement:s,delimiters:a},o),l);i.render=vl(r,c)}}n.render=i.render||Ht}{const r=Pr(n);$n();try{_d(n)}finally{Kn(),r()}}}const qd={get(n,e){return Dt(n,"get",""),n[e]}};function Yd(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,qd),slots:n.slots,emit:n.emit,expose:e}}function Ks(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Au(Ra(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in _r)return _r[t](n)},has(e,t){return t in e||t in _r}}))}function $d(n,e=!0){return Ue(n)?n.displayName||n.name:n.name||e&&n.__name}function Kd(n){return Ue(n)&&"__vccOpts"in n}const rf=(n,e)=>Lh(n,e,$s),jd="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Zd="http://www.w3.org/2000/svg",Jd="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,xl=Nn&&Nn.createElement("template"),Qd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(Zd,n):e==="mathml"?Nn.createElementNS(Jd,n):Nn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xl.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=xl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ep=Symbol("_vtc");function tp(n,e,t){const i=n[ep];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ml=Symbol("_vod"),np=Symbol("_vsh"),ip=Symbol(""),rp=/(^|;)\s*display\s*:/;function sp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Es(i,a,"")}else for(const o in e)t[o]==null&&Es(i,o,"");for(const o in t)o==="display"&&(s=!0),Es(i,o,t[o])}else if(r){if(e!==t){const o=i[ip];o&&(t+=";"+o),i.cssText=t,s=rp.test(t)}}else e&&n.removeAttribute("style");Ml in n&&(n[Ml]=s?i.display:"",n[np]&&(i.display="none"))}const Sl=/\s*!important$/;function Es(n,e,t){if(Pe(t))t.forEach(i=>Es(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=op(n,e);Sl.test(t)?n.setProperty(Zi(i),t.replace(Sl,""),"important"):n[i]=t}}const El=["Webkit","Moz","ms"],ho={};function op(n,e){const t=ho[e];if(t)return t;let i=cn(e);if(i!=="filter"&&i in n)return ho[e]=i;i=Hs(i);for(let r=0;r<El.length;r++){const s=El[r]+i;if(s in n)return ho[e]=s}return e}const yl="http://www.w3.org/1999/xlink";function ap(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(yl,e.slice(6,e.length)):n.setAttributeNS(yl,e,t);else{const s=ah(e);t==null||s&&!su(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function lp(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=su(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Oi(n,e,t,i){n.addEventListener(e,t,i)}function cp(n,e,t,i){n.removeEventListener(e,t,i)}const Tl=Symbol("_vei");function up(n,e,t,i,r=null){const s=n[Tl]||(n[Tl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=fp(e);if(i){const c=s[e]=pp(i,r);Oi(n,a,c,l)}else o&&(cp(n,a,o,l),s[e]=void 0)}}const bl=/(?:Once|Passive|Capture)$/;function fp(n){let e;if(bl.test(n)){e={};let i;for(;i=n.match(bl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Zi(n.slice(2)),e]}let po=0;const hp=Promise.resolve(),dp=()=>po||(hp.then(()=>po=0),po=Date.now());function pp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Yt(mp(i,t.value),e,5,[i])};return t.value=n,t.attached=dp(),t}function mp(n,e){if(Pe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Al=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_p=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?tp(n,i,c):e==="style"?sp(n,t,i):Os(e)?va(e)||up(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gp(n,e,i,c))?lp(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ap(n,e,i,c))};function gp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Al(e)&&Ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Al(e)&&dt(t)?!1:e in n}const wl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Pe(e)?t=>gs(e,t):e};function vp(n){n.target.composing=!0}function Rl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mo=Symbol("_assign"),Fn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[mo]=wl(r);const s=i||r.props&&r.props.type==="number";Oi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=jo(a)),n[mo](a)}),t&&Oi(n,"change",()=>{n.value=n.value.trim()}),e||(Oi(n,"compositionstart",vp),Oi(n,"compositionend",Rl),Oi(n,"change",Rl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n[mo]=wl(s),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?jo(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},xp=ht({patchProp:_p},Qd);let Cl;function Mp(){return Cl||(Cl=Pd(xp))}const Sp=(...n)=>{const e=Mp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yp(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,Ep(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ep(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function yp(n){return dt(n)?document.querySelector(n):n}var Tp=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let sf;const js=n=>sf=n,of=Symbol();function aa(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var xr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(xr||(xr={}));function bp(){const n=au(!0),e=n.run(()=>Hi({}));let t=[],i=[];const r=Ra({install(s){js(r),r._a=s,s.provide(of,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!Tp?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const af=()=>{};function Pl(n,e,t,i=af){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&lu()&&ch(r),r}function xi(n,...e){n.slice().forEach(t=>{t(...e)})}const Ap=n=>n();function la(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];aa(r)&&aa(i)&&n.hasOwnProperty(t)&&!lt(i)&&!_i(i)?n[t]=la(r,i):n[t]=i}return n}const wp=Symbol();function Rp(n){return!aa(n)||!n.hasOwnProperty(wp)}const{assign:Ln}=Object;function Cp(n){return!!(lt(n)&&n.effect)}function Pp(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Nh(t.state.value[n]);return Ln(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Ra(rf(()=>{js(t);const m=t._s.get(n);return o[h].call(m,m)})),f),{}))}return l=lf(n,c,e,t,i,!0),l}function lf(n,e,t={},i,r,s){let o;const a=Ln({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],m;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={}),Hi({});let v;function p(z){let E;c=u=!1,typeof z=="function"?(z(i.state.value[n]),E={type:xr.patchFunction,storeId:n,events:m}):(la(i.state.value[n],z),E={type:xr.patchObject,payload:z,storeId:n,events:m});const x=v=Symbol();Ru().then(()=>{v===x&&(c=!0)}),u=!0,xi(f,E,i.state.value[n])}const d=s?function(){const{state:E}=t,x=E?E():{};this.$patch(H=>{Ln(H,x)})}:af;function A(){o.stop(),f=[],h=[],i._s.delete(n)}function y(z,E){return function(){js(i);const x=Array.from(arguments),H=[],j=[];function U(te){H.push(te)}function ee(te){j.push(te)}xi(h,{args:x,name:z,store:B,after:U,onError:ee});let Z;try{Z=E.apply(this&&this.$id===n?this:B,x)}catch(te){throw xi(j,te),te}return Z instanceof Promise?Z.then(te=>(xi(H,te),te)).catch(te=>(xi(j,te),Promise.reject(te))):(xi(H,Z),Z)}}const b={_p:i,$id:n,$onAction:Pl.bind(null,h),$patch:p,$reset:d,$subscribe(z,E={}){const x=Pl(f,z,E.detached,()=>H()),H=o.run(()=>xs(()=>i.state.value[n],j=>{(E.flush==="sync"?u:c)&&z({storeId:n,type:xr.direct,events:m},j)},Ln({},l,E)));return x},$dispose:A},B=Gs(b);i._s.set(n,B);const C=(i._a&&i._a.runWithContext||Ap)(()=>i._e.run(()=>(o=au()).run(e)));for(const z in C){const E=C[z];if(lt(E)&&!Cp(E)||_i(E))s||(g&&Rp(E)&&(lt(E)?E.value=g[z]:la(E,g[z])),i.state.value[n][z]=E);else if(typeof E=="function"){const x=y(z,E);C[z]=x,a.actions[z]=E}}return Ln(B,C),Ln(We(B),C),Object.defineProperty(B,"$state",{get:()=>i.state.value[n],set:z=>{p(E=>{Ln(E,z)})}}),i._p.forEach(z=>{Ln(B,o.run(()=>z({store:B,app:i._a,pinia:i,options:a})))}),g&&s&&t.hydrate&&t.hydrate(B.$state,g),c=!0,u=!0,B}function cf(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=Td();return a=a||(c?gr(of,null):null),a&&js(a),a=sf,a._s.has(i)||(s?lf(i,e,r,a):Pp(i,r,a)),a._s.get(i)}return o.$id=i,o}const uf=cf("selection",()=>({widget:Tu(null)}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="164",Lp=0,Ll=1,Dp=2,ff=1,Up=2,_n=3,Xn=0,Ct=1,gn=2,Gn=0,ki=1,Dl=2,Ul=3,Il=4,Ip=5,ci=100,Np=101,Fp=102,Op=103,Bp=104,zp=200,Hp=201,Vp=202,Gp=203,ca=204,ua=205,kp=206,Wp=207,Xp=208,qp=209,Yp=210,$p=211,Kp=212,jp=213,Zp=214,Jp=0,Qp=1,em=2,Cs=3,tm=4,nm=5,im=6,rm=7,hf=0,sm=1,om=2,kn=0,am=1,lm=2,cm=3,um=4,fm=5,hm=6,dm=7,df=300,Yi=301,$i=302,fa=303,ha=304,Zs=306,da=1e3,hi=1001,pa=1002,Vt=1003,pm=1004,Xr=1005,Xt=1006,_o=1007,di=1008,qn=1009,mm=1010,_m=1011,pf=1012,mf=1013,Ki=1014,Bn=1015,Js=1016,_f=1017,gf=1018,Lr=1020,gm=35902,vm=1021,xm=1022,on=1023,Mm=1024,Sm=1025,Wi=1026,wr=1027,Em=1028,vf=1029,ym=1030,xf=1031,Mf=1033,go=33776,vo=33777,xo=33778,Mo=33779,Nl=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,Hl=37492,Vl=37496,Gl=37808,kl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,$l=37814,Kl=37815,jl=37816,Zl=37817,Jl=37818,Ql=37819,ec=37820,tc=37821,So=36492,nc=36494,ic=36495,Tm=36283,rc=36284,sc=36285,oc=36286,bm=3200,Am=3201,wm=0,Rm=1,On="",Jt="srgb",jn="srgb-linear",Fa="display-p3",Qs="display-p3-linear",Ps="linear",et="srgb",Ls="rec709",Ds="p3",Mi=7680,ac=519,Cm=512,Pm=513,Lm=514,Sf=515,Dm=516,Um=517,Im=518,Nm=519,lc=35044,cc="300 es",vn=2e3,Us=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,ma=180/Math.PI;function Dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Fm(n,e){return(n%e+e)%e}function yo(n,e,t){return(1-t)*n+t*e}function sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],d=r[6],A=r[1],y=r[4],b=r[7],B=r[2],R=r[5],C=r[8];return s[0]=o*v+a*A+l*B,s[3]=o*p+a*y+l*R,s[6]=o*d+a*b+l*C,s[1]=c*v+u*A+f*B,s[4]=c*p+u*y+f*R,s[7]=c*d+u*b+f*C,s[2]=h*v+m*A+g*B,s[5]=h*p+m*y+g*R,s[8]=h*d+m*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Fe;function Ef(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Om(){const n=Is("canvas");return n.style.display="block",n}const uc={};function Bm(n){n in uc||(uc[n]=!0,console.warn(n))}const fc=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hc=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[jn]:{transfer:Ps,primaries:Ls,toReference:n=>n,fromReference:n=>n},[Jt]:{transfer:et,primaries:Ls,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qs]:{transfer:Ps,primaries:Ds,toReference:n=>n.applyMatrix3(hc),fromReference:n=>n.applyMatrix3(fc)},[Fa]:{transfer:et,primaries:Ds,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hc),fromReference:n=>n.applyMatrix3(fc).convertLinearToSRGB()}},zm=new Set([jn,Qs]),Je={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qr[e].toReference,r=qr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qr[n].primaries},getTransfer:function(n){return n===On?Ps:qr[n].transfer}};function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class Hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Is("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ao(r[o].image)):s.push(Ao(r[o]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gm=0;class Pt extends Qi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=hi,r=hi,s=Xt,o=di,a=on,l=qn,c=Pt.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Dr(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=df;Pt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,B=(d+1)/2,R=(u+h)/4,C=(f+v)/4,z=(g+p)/4;return y>b&&y>B?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=C/i):b>B?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=z/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=C/s,r=z/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class km extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends km{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tf extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wm extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==g){let p=1-a;const d=l*h+c*m+u*g+f*v,A=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const B=Math.sqrt(y),R=Math.atan2(B,d*A);p=Math.sin(p*R)/B,a=Math.sin(a*R)/B}const b=a*A;if(l=l*p+h*b,c=c*p+m*b,u=u*p+g*b,f=f*p+v*b,p===1-a){const B=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=B,c*=B,u*=B,f*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new X,dc=new Ur;class Ir{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),$r.subVectors(this.max,or),Ei.subVectors(e.a,or),yi.subVectors(e.b,or),Ti.subVectors(e.c,or),bn.subVectors(yi,Ei),An.subVectors(Ti,yi),ei.subVectors(Ei,Ti);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-ei.z,ei.y,bn.z,0,-bn.x,An.z,0,-An.x,ei.z,0,-ei.x,-bn.y,bn.x,0,-An.y,An.x,0,-ei.y,ei.x,0];return!Ro(t,Ei,yi,Ti,$r)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Ei,yi,Ti,$r))?!1:(Kr.crossVectors(bn,An),t=[Kr.x,Kr.y,Kr.z],Ro(t,Ei,yi,Ti,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new X,new X,new X,new X,new X,new X,new X,new X],Gt=new X,Yr=new Ir,Ei=new X,yi=new X,Ti=new X,bn=new X,An=new X,ei=new X,or=new X,$r=new X,Kr=new X,ti=new X;function Ro(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ti.fromArray(n,s);const a=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xm=new Ir,ar=new X,Co=new X;class eo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Co)),this.expandByPoint(ar.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new X,Po=new X,jr=new X,wn=new X,Lo=new X,Zr=new X,Do=new X;class bf{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=wn.dot(this.direction),l=-wn.dot(jr),c=wn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(jr,h),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,s){Lo.subVectors(t,e),Zr.subVectors(i,e),Do.crossVectors(Lo,Zr);let o=this.direction.dot(Do),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(Zr.crossVectors(wn,Zr));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(wn));if(c<0||l+c>o)return null;const u=-a*wn.dot(Do);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,g,v,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,v,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Ym)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Rn.crossVectors(i,It),Rn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Rn.crossVectors(i,It)),Rn.normalize(),Jr.crossVectors(It,Rn),r[0]=Rn.x,r[4]=Jr.x,r[8]=It.x,r[1]=Rn.y,r[5]=Jr.y,r[9]=It.y,r[2]=Rn.z,r[6]=Jr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],A=i[3],y=i[7],b=i[11],B=i[15],R=r[0],C=r[4],z=r[8],E=r[12],x=r[1],H=r[5],j=r[9],U=r[13],ee=r[2],Z=r[6],te=r[10],ne=r[14],V=r[3],le=r[7],ce=r[11],Me=r[15];return s[0]=o*R+a*x+l*ee+c*V,s[4]=o*C+a*H+l*Z+c*le,s[8]=o*z+a*j+l*te+c*ce,s[12]=o*E+a*U+l*ne+c*Me,s[1]=u*R+f*x+h*ee+m*V,s[5]=u*C+f*H+h*Z+m*le,s[9]=u*z+f*j+h*te+m*ce,s[13]=u*E+f*U+h*ne+m*Me,s[2]=g*R+v*x+p*ee+d*V,s[6]=g*C+v*H+p*Z+d*le,s[10]=g*z+v*j+p*te+d*ce,s[14]=g*E+v*U+p*ne+d*Me,s[3]=A*R+y*x+b*ee+B*V,s[7]=A*C+y*H+b*Z+B*le,s[11]=A*z+y*j+b*te+B*ce,s[15]=A*E+y*U+b*ne+B*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+v*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],A=f*p*c-v*h*c+v*l*m-a*p*m-f*l*d+a*h*d,y=g*h*c-u*p*c-g*l*m+o*p*m+u*l*d-o*h*d,b=u*v*c-g*f*c+g*a*m-o*v*m-u*a*d+o*f*d,B=g*f*l-u*v*l-g*a*h+o*v*h+u*a*p-o*f*p,R=t*A+i*y+r*b+s*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=A*C,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=y*C,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*d+t*h*d)*C,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*C,e[8]=b*C,e[9]=(g*f*s-u*v*s-g*i*m+t*v*m+u*i*d-t*f*d)*C,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=B*C,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*p+t*f*p)*C,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,v=o*u,p=o*f,d=a*f,A=l*c,y=l*u,b=l*f,B=i.x,R=i.y,C=i.z;return r[0]=(1-(v+d))*B,r[1]=(m+b)*B,r[2]=(g-y)*B,r[3]=0,r[4]=(m-b)*R,r[5]=(1-(h+d))*R,r[6]=(p+A)*R,r[7]=0,r[8]=(g+y)*C,r[9]=(p-A)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/o,f=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=f,kt.elements[9]*=f,kt.elements[10]*=f,t.setFromRotationMatrix(kt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(a===vn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Us)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let g,v;if(a===vn)g=(o+s)*f,v=-2*f;else if(a===Us)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new X,kt=new ot,qm=new X(0,0,0),Ym=new X(1,1,1),Rn=new X,Jr=new X,It=new X,pc=new ot,mc=new Ur;class Mn{constructor(e=0,t=0,i=0,r=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $m=0;const _c=new X,Ai=new Ur,dn=new ot,Qr=new X,lr=new X,Km=new X,jm=new Ur,gc=new X(1,0,0),vc=new X(0,1,0),xc=new X(0,0,1),Mc={type:"added"},Zm={type:"removed"},wi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Lt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new X,t=new Mn,i=new Ur,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Fe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(lr,Qr,this.up):dn.lookAt(Qr,lr,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(dn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new X(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new X,pn=new X,Io=new X,mn=new X,Ri=new X,Ci=new X,Sc=new X,No=new X,Fo=new X,Oo=new X;class sn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wt.subVectors(r,t),pn.subVectors(i,t),Io.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(pn),l=Wt.dot(Io),c=pn.dot(pn),u=pn.dot(Io),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static isFrontFacing(e,t,i,r){return Wt.subVectors(i,t),pn.subVectors(e,t),Wt.cross(pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Wt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ri.subVectors(r,i),Ci.subVectors(s,i),No.subVectors(e,i);const l=Ri.dot(No),c=Ci.dot(No);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,r);const u=Ri.dot(Fo),f=Ci.dot(Fo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ri,o);Oo.subVectors(e,s);const m=Ri.dot(Oo),g=Ci.dot(Oo);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ci,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Sc.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Sc,a);const d=1/(p+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},es={h:0,s:0,l:0};function Bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Fm(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bo(o,s,e+1/3),this.g=Bo(o,s,e),this.b=Bo(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=wf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Je.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Rt(Mt.r*255,0,255))*65536+Math.round(Rt(Mt.g*255,0,255))*256+Math.round(Rt(Mt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Jt){Je.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,r=Mt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(es);const i=yo(Cn.h,es.h,t),r=yo(Cn.s,es.s,t),s=yo(Cn.l,es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new qe;qe.NAMES=wf;let Jm=0;class Nr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=ki,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==ua&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oa extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new X,ts=new $e;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Rf extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cf extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qm=0;const Bt=new ot,zo=new Lt,Pi=new X,Nt=new Ir,cr=new Ir,ft=new X;class En extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?Cf:Rf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Nt.min,cr.min),Nt.expandByPoint(ft),ft.addVectors(Nt.max,cr.max),Nt.expandByPoint(ft)):(Nt.expandByPoint(cr.min),Nt.expandByPoint(cr.max))}Nt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ft.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(e,c),ft.add(Pi)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new X,l[z]=new X;const c=new X,u=new X,f=new X,h=new $e,m=new $e,g=new $e,v=new X,p=new X;function d(z,E,x){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,z),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const H=1/(m.x*g.y-g.x*m.y);isFinite(H)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(H),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(H),a[z].add(v),a[E].add(v),a[x].add(v),l[z].add(p),l[E].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,E=A.length;z<E;++z){const x=A[z],H=x.start,j=x.count;for(let U=H,ee=H+j;U<ee;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new X,b=new X,B=new X,R=new X;function C(z){B.fromBufferAttribute(r,z),R.copy(B);const E=a[z];y.copy(E),y.sub(B.multiplyScalar(B.dot(E))).normalize(),b.crossVectors(R,E);const H=b.dot(l[z])<0?-1:1;o.setXYZW(z,y.x,y.y,y.z,H)}for(let z=0,E=A.length;z<E;++z){const x=A[z],H=x.start,j=x.count;for(let U=H,ee=H+j;U<ee;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new ln(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new ot,ni=new bf,ns=new eo,yc=new X,Li=new X,Di=new X,Ui=new X,Ho=new X,is=new X,rs=new $e,ss=new $e,os=new $e,Tc=new X,bc=new X,Ac=new X,as=new X,ls=new X;class an extends Lt{constructor(e=new En,t=new Oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ho.fromBufferAttribute(f,e),o?is.addScaledVector(Ho,u):is.addScaledVector(Ho.sub(t),u))}t.add(is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(ns.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ns,yc)===null||ni.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(Ec.copy(s).invert(),ni.copy(e.ray).applyMatrix4(Ec),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],A=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,B=y;b<B;b+=3){const R=a.getX(b),C=a.getX(b+1),z=a.getX(b+2);r=cs(this,d,e,i,c,u,f,R,C,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const A=a.getX(p),y=a.getX(p+1),b=a.getX(p+2);r=cs(this,o,e,i,c,u,f,A,y,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],A=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,B=y;b<B;b+=3){const R=b,C=b+1,z=b+2;r=cs(this,d,e,i,c,u,f,R,C,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const A=p,y=p+1,b=p+2;r=cs(this,o,e,i,c,u,f,A,y,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function e_(n,e,t,i,r,s,o,a){let l;if(e.side===Ct?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xn,a),l===null)return null;ls.copy(a),ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:n}}function cs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Li),n.getVertexPosition(l,Di),n.getVertexPosition(c,Ui);const u=e_(n,e,t,i,Li,Di,Ui,as);if(u){r&&(rs.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,l),os.fromBufferAttribute(r,c),u.uv=sn.getInterpolation(as,Li,Di,Ui,rs,ss,os,new $e)),s&&(rs.fromBufferAttribute(s,a),ss.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),u.uv1=sn.getInterpolation(as,Li,Di,Ui,rs,ss,os,new $e)),o&&(Tc.fromBufferAttribute(o,a),bc.fromBufferAttribute(o,l),Ac.fromBufferAttribute(o,c),u.normal=sn.getInterpolation(as,Li,Di,Ui,Tc,bc,Ac,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};sn.getNormal(Li,Di,Ui,f.normal),u.face=f}return u}class er extends En{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function g(v,p,d,A,y,b,B,R,C,z,E){const x=b/C,H=B/z,j=b/2,U=B/2,ee=R/2,Z=C+1,te=z+1;let ne=0,V=0;const le=new X;for(let ce=0;ce<te;ce++){const Me=ce*H-U;for(let we=0;we<Z;we++){const Ke=we*x-j;le[v]=Ke*A,le[p]=Me*y,le[d]=ee,c.push(le.x,le.y,le.z),le[v]=0,le[p]=0,le[d]=R>0?1:-1,u.push(le.x,le.y,le.z),f.push(we/C),f.push(1-ce/z),ne+=1}}for(let ce=0;ce<z;ce++)for(let Me=0;Me<C;Me++){const we=h+Me+Z*ce,Ke=h+Me+Z*(ce+1),K=h+(Me+1)+Z*(ce+1),ue=h+(Me+1)+Z*ce;l.push(we,Ke,ue),l.push(Ke,K,ue),V+=6}a.addGroup(m,V,E),m+=V,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=ji(n[t]);for(const r in i)e[r]=i[r]}return e}function t_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const n_={clone:ji,merge:Tt};var i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new X,wc=new $e,Rc=new $e;class zt extends Lf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Rc),t.subVectors(Rc,wc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ni=1;class s_ extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(Ii,Ni,e,t);r.layers=this.layers,this.add(r);const s=new zt(Ii,Ni,e,t);s.layers=this.layers,this.add(s);const o=new zt(Ii,Ni,e,t);o.layers=this.layers,this.add(o);const a=new zt(Ii,Ni,e,t);a.layers=this.layers,this.add(a);const l=new zt(Ii,Ni,e,t);l.layers=this.layers,this.add(l);const c=new zt(Ii,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Df extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o_ extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Df(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new er(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:Gn});s.uniforms.tEquirect.value=t;const o=new an(r,s),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Xt),new s_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Vo=new X,a_=new X,l_=new Fe;class oi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vo.subVectors(i,t).cross(a_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l_.getNormalMatrix(e),r=this.coplanarPoint(Vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new eo,us=new X;class Uf{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],d=r[12],A=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,p-m,b-d).normalize(),i[1].setComponents(l+s,h+c,p+m,b+d).normalize(),i[2].setComponents(l+o,h+u,p+g,b+A).normalize(),i[3].setComponents(l-o,h-u,p-g,b-A).normalize(),i[4].setComponents(l-a,h-f,p-v,b-y).normalize(),t===vn)i[5].setComponents(l+a,h+f,p+v,b+y).normalize();else if(t===Us)i[5].setComponents(a,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function If(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function c_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let m=0,g=h.length;m<g;m++){const v=h[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class to extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<u;d++){const A=d*h-o;for(let y=0;y<c;y++){const b=y*f-s;g.push(b,-A,0),v.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const y=A+c*d,b=A+c*(d+1),B=A+1+c*(d+1),R=A+1+c*d;m.push(y,b,R),m.push(b,B,R)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
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
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
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
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v_=`#ifdef USE_BATCHING
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
#endif`,x_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y_=`#ifdef USE_IRIDESCENCE
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
#endif`,T_=`#ifdef USE_BUMPMAP
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`
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
}`,G_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z_=`#ifdef USE_GRADIENTMAP
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
}`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
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
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,cg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
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
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
}`,gv=`#define DISTANCE
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
}`,vv=`#define DISTANCE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Tv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Av=`#define LAMBERT
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
}`,wv=`#define MATCAP
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
}`,Rv=`#define MATCAP
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
}`,Cv=`#define NORMAL
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
}`,Pv=`#define NORMAL
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
}`,Lv=`#define PHONG
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
}`,Dv=`#define PHONG
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
}`,Uv=`#define STANDARD
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
}`,Iv=`#define STANDARD
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
}`,Nv=`#define TOON
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
}`,Fv=`#define TOON
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
}`,Ov=`uniform float size;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Hv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:u_,alphahash_pars_fragment:f_,alphamap_fragment:h_,alphamap_pars_fragment:d_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:__,aomap_pars_fragment:g_,batching_pars_vertex:v_,batching_vertex:x_,begin_vertex:M_,beginnormal_vertex:S_,bsdfs:E_,iridescence_fragment:y_,bumpmap_pars_fragment:T_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:A_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:R_,color_fragment:C_,color_pars_fragment:P_,color_pars_vertex:L_,color_vertex:D_,common:U_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:N_,displacementmap_pars_vertex:F_,displacementmap_vertex:O_,emissivemap_fragment:B_,emissivemap_pars_fragment:z_,colorspace_fragment:H_,colorspace_pars_fragment:V_,envmap_fragment:G_,envmap_common_pars_fragment:k_,envmap_pars_fragment:W_,envmap_pars_vertex:X_,envmap_physical_pars_fragment:ng,envmap_vertex:q_,fog_vertex:Y_,fog_pars_vertex:$_,fog_fragment:K_,fog_pars_fragment:j_,gradientmap_pars_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:eg,lights_pars_begin:tg,lights_toon_fragment:ig,lights_toon_pars_fragment:rg,lights_phong_fragment:sg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:ug,lights_fragment_end:fg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:_g,map_pars_fragment:gg,map_particle_fragment:vg,map_particle_pars_fragment:xg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:Eg,morphcolor_vertex:yg,morphnormal_vertex:Tg,morphtarget_pars_vertex:bg,morphtarget_vertex:Ag,normal_fragment_begin:wg,normal_fragment_maps:Rg,normal_pars_fragment:Cg,normal_pars_vertex:Pg,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Fg,opaque_fragment:Og,packing:Bg,premultiplied_alpha_fragment:zg,project_vertex:Hg,dithering_fragment:Vg,dithering_pars_fragment:Gg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:$g,skinbase_vertex:Kg,skinning_pars_vertex:jg,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:Qg,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:rv,uv_pars_fragment:sv,uv_pars_vertex:ov,uv_vertex:av,worldpos_vertex:lv,background_vert:cv,background_frag:uv,backgroundCube_vert:fv,backgroundCube_frag:hv,cube_vert:dv,cube_frag:pv,depth_vert:mv,depth_frag:_v,distanceRGBA_vert:gv,distanceRGBA_frag:vv,equirect_vert:xv,equirect_frag:Mv,linedashed_vert:Sv,linedashed_frag:Ev,meshbasic_vert:yv,meshbasic_frag:Tv,meshlambert_vert:bv,meshlambert_frag:Av,meshmatcap_vert:wv,meshmatcap_frag:Rv,meshnormal_vert:Cv,meshnormal_frag:Pv,meshphong_vert:Lv,meshphong_frag:Dv,meshphysical_vert:Uv,meshphysical_frag:Iv,meshtoon_vert:Nv,meshtoon_frag:Fv,points_vert:Ov,points_frag:Bv,shadow_vert:zv,shadow_frag:Hv,sprite_vert:Vv,sprite_frag:Gv},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},nn={basic:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Tt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Tt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Tt([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Tt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Tt([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Tt([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Tt([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Tt([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};nn.physical={uniforms:Tt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const fs={r:0,b:0,g:0},ri=new Mn,kv=new ot;function Wv(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function v(A){let y=!1;const b=g(A);b===null?d(a,l):b&&b.isColor&&(d(b,1),y=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function p(A,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Zs)?(u===void 0&&(u=new an(new er(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ji(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ri.copy(y.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(ri)),u.material.toneMapped=Je.getTransfer(b.colorSpace)!==et,(f!==b||h!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new an(new to(2,2),new Yn({name:"BackgroundMaterial",uniforms:ji(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==et,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,y){A.getRGB(fs,Pf(n)),i.buffers.color.setClear(fs.r,fs.g,fs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:p}}function Xv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,H,j,U,ee){let Z=!1;const te=f(U,j,H);s!==te&&(s=te,c(s.object)),Z=m(x,U,j,ee),Z&&g(x,U,j,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(x,H,j,U),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,H,j){const U=j.wireframe===!0;let ee=i[x.id];ee===void 0&&(ee={},i[x.id]=ee);let Z=ee[H.id];Z===void 0&&(Z={},ee[H.id]=Z);let te=Z[U];return te===void 0&&(te=h(l()),Z[U]=te),te}function h(x){const H=[],j=[],U=[];for(let ee=0;ee<t;ee++)H[ee]=0,j[ee]=0,U[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:U,object:x,attributes:{},index:null}}function m(x,H,j,U){const ee=s.attributes,Z=H.attributes;let te=0;const ne=j.getAttributes();for(const V in ne)if(ne[V].location>=0){const ce=ee[V];let Me=Z[V];if(Me===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),ce===void 0||ce.attribute!==Me||Me&&ce.data!==Me.data)return!0;te++}return s.attributesNum!==te||s.index!==U}function g(x,H,j,U){const ee={},Z=H.attributes;let te=0;const ne=j.getAttributes();for(const V in ne)if(ne[V].location>=0){let ce=Z[V];ce===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const Me={};Me.attribute=ce,ce&&ce.data&&(Me.data=ce.data),ee[V]=Me,te++}s.attributes=ee,s.attributesNum=te,s.index=U}function v(){const x=s.newAttributes;for(let H=0,j=x.length;H<j;H++)x[H]=0}function p(x){d(x,0)}function d(x,H){const j=s.newAttributes,U=s.enabledAttributes,ee=s.attributeDivisors;j[x]=1,U[x]===0&&(n.enableVertexAttribArray(x),U[x]=1),ee[x]!==H&&(n.vertexAttribDivisor(x,H),ee[x]=H)}function A(){const x=s.newAttributes,H=s.enabledAttributes;for(let j=0,U=H.length;j<U;j++)H[j]!==x[j]&&(n.disableVertexAttribArray(j),H[j]=0)}function y(x,H,j,U,ee,Z,te){te===!0?n.vertexAttribIPointer(x,H,j,ee,Z):n.vertexAttribPointer(x,H,j,U,ee,Z)}function b(x,H,j,U){v();const ee=U.attributes,Z=j.getAttributes(),te=H.defaultAttributeValues;for(const ne in Z){const V=Z[ne];if(V.location>=0){let le=ee[ne];if(le===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const ce=le.normalized,Me=le.itemSize,we=e.get(le);if(we===void 0)continue;const Ke=we.buffer,K=we.type,ue=we.bytesPerElement,_e=K===n.INT||K===n.UNSIGNED_INT||le.gpuType===mf;if(le.isInterleavedBufferAttribute){const fe=le.data,Oe=fe.stride,Be=le.offset;if(fe.isInstancedInterleavedBuffer){for(let F=0;F<V.locationSize;F++)d(V.location+F,fe.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let F=0;F<V.locationSize;F++)p(V.location+F);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let F=0;F<V.locationSize;F++)y(V.location+F,Me/V.locationSize,K,ce,Oe*ue,(Be+Me/V.locationSize*F)*ue,_e)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)d(V.location+fe,le.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<V.locationSize;fe++)p(V.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let fe=0;fe<V.locationSize;fe++)y(V.location+fe,Me/V.locationSize,K,ce,Me*ue,Me/V.locationSize*fe*ue,_e)}}else if(te!==void 0){const ce=te[ne];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(V.location,ce);break;case 3:n.vertexAttrib3fv(V.location,ce);break;case 4:n.vertexAttrib4fv(V.location,ce);break;default:n.vertexAttrib1fv(V.location,ce)}}}}A()}function B(){z();for(const x in i){const H=i[x];for(const j in H){const U=H[j];for(const ee in U)u(U[ee].object),delete U[ee];delete H[j]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const H=i[x.id];for(const j in H){const U=H[j];for(const ee in U)u(U[ee].object),delete U[ee];delete H[j]}delete i[x.id]}function C(x){for(const H in i){const j=i[H];if(j[x.id]===void 0)continue;const U=j[x.id];for(const ee in U)u(U[ee].object),delete U[ee];delete j[x.id]}}function z(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:A}}function qv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f;m++)this.render(c[m],u[m]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==on&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:b,maxSamples:B}}function $v(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,y=A*4;let b=d.clippingState||null;l.value=b,b=u(g,h,y,m);for(let B=0;B!==y;++B)b[B]=t[B];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,b=m;y!==v;++y,b+=4)o.copy(f[y]).applyMatrix4(A,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Kv(n){let e=new WeakMap;function t(o,a){return a===fa?o.mapping=Yi:a===ha&&(o.mapping=$i),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new o_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jv extends Lf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Cc=[.125,.215,.35,.446,.526,.582],ui=20,Go=new jv,Pc=new qe;let ko=null,Wo=0,Xo=0,qo=!1;const ai=(1+Math.sqrt(5))/2,Fi=1/ai,Lc=[new X(-ai,Fi,0),new X(ai,Fi,0),new X(-Fi,0,ai),new X(Fi,0,ai),new X(0,ai,-Fi),new X(0,ai,Fi),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ko=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Wo,Xo),this._renderer.xr.enabled=qo,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Js,format:on,colorSpace:jn,depthBuffer:!1},r=Uc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zv(s)),this._blurMaterial=Jv(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,i,r){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Pc),u.toneMapping=kn,u.autoClear=!1;const m=new Oa({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new an(new er,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Pc),v=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;hs(r,A*y,d>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Go)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lc[(r-s-1)%Lc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new an(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ui-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):ui;p>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const d=[];let A=0;for(let C=0;C<ui;++C){const z=C/v,E=Math.exp(-z*z/2);d.push(E),C===0?A+=E:C<p&&(A+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const b=this._sizeLods[r],B=3*b*(r>y-Bi?r-y+Bi:0),R=4*(this._cubeSize-b);hs(t,B,R,3*b,2*b),l.setRenderTarget(t),l.render(f,Go)}}function Zv(n){const e=[],t=[],i=[];let r=n;const s=n-Bi+1+Cc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Bi?l=Cc[o-n+Bi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,p=2,d=1,A=new Float32Array(v*g*m),y=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,z=R>2?0:-1,E=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];A.set(E,v*g*R),y.set(h,p*g*R);const x=[R,R,R,R,R,R];b.set(x,d*g*R)}const B=new En;B.setAttribute("position",new ln(A,v)),B.setAttribute("uv",new ln(y,p)),B.setAttribute("faceIndex",new ln(b,d)),e.push(B),r>Bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uc(n,e,t){const i=new vi(n,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jv(n,e,t){const i=new Float32Array(ui),r=new X(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ic(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Nc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Qv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===ha,u=l===Yi||l===$i;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Dc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Dc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ex(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let y=0,b=A.length;y<b;y+=3){const B=A[y+0],R=A[y+1],C=A[y+2];h.push(B,R,R,C,C,B)}}else if(g!==void 0){const A=g.array;v=g.version;for(let y=0,b=A.length/3-1;y<b;y+=3){const B=y+0,R=y+1,C=y+2;h.push(B,R,R,C,C,B)}}else return;const p=new(Ef(h)?Cf:Rf)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*o,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(h[p]/o,m[p]);else{v.multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}}function f(h,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=m[A];for(let A=0;A<v.length;A++)t.update(d,i,v[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ix(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rx(n,e,t){const i=new WeakMap,r=new mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let B=a.attributes.position.count*b,R=1;B>e.maxTextureSize&&(R=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const C=new Float32Array(B*R*4*f),z=new Tf(C,B,R,f);z.type=Bn,z.needsUpdate=!0;const E=b*4;for(let H=0;H<f;H++){const j=d[H],U=A[H],ee=y[H],Z=B*R*4*H;for(let te=0;te<j.count;te++){const ne=te*E;g===!0&&(r.fromBufferAttribute(j,te),C[Z+ne+0]=r.x,C[Z+ne+1]=r.y,C[Z+ne+2]=r.z,C[Z+ne+3]=0),v===!0&&(r.fromBufferAttribute(U,te),C[Z+ne+4]=r.x,C[Z+ne+5]=r.y,C[Z+ne+6]=r.z,C[Z+ne+7]=0),p===!0&&(r.fromBufferAttribute(ee,te),C[Z+ne+8]=r.x,C[Z+ne+9]=r.y,C[Z+ne+10]=r.z,C[Z+ne+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:z,size:new $e(B,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function sx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Nf extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Wi,u!==Wi&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wi&&(i=Ki),i===void 0&&u===wr&&(i=Lr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ff=new Pt,Of=new Nf(1,1);Of.compareFunction=Sf;const Bf=new Tf,zf=new Wm,Hf=new Df,Fc=[],Oc=[],Bc=new Float32Array(16),zc=new Float32Array(9),Hc=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fc[r];if(s===void 0&&(s=new Float32Array(r),Fc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=Oc[e];t===void 0&&(t=new Int32Array(e),Oc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Hc.set(i),n.uniformMatrix2fv(this.addr,!1,Hc),ut(t,i)}}function fx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;zc.set(i),n.uniformMatrix3fv(this.addr,!1,zc),ut(t,i)}}function hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Bc.set(i),n.uniformMatrix4fv(this.addr,!1,Bc),ut(t,i)}}function dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function Sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Of:Ff;t.setTexture2D(e||s,r)}function Ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zf,r)}function yx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hf,r)}function Tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bf,r)}function bx(n){switch(n){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return ux;case 35675:return fx;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return _x;case 5125:return gx;case 36294:return vx;case 36295:return xx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Ax(n,e){n.uniform1fv(this.addr,e)}function wx(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rx(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Cx(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Px(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Lx(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dx(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ux(n,e){n.uniform1iv(this.addr,e)}function Ix(n,e){n.uniform2iv(this.addr,e)}function Nx(n,e){n.uniform3iv(this.addr,e)}function Fx(n,e){n.uniform4iv(this.addr,e)}function Ox(n,e){n.uniform1uiv(this.addr,e)}function Bx(n,e){n.uniform2uiv(this.addr,e)}function zx(n,e){n.uniform3uiv(this.addr,e)}function Hx(n,e){n.uniform4uiv(this.addr,e)}function Vx(n,e,t){const i=this.cache,r=e.length,s=no(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ff,s[o])}function Gx(n,e,t){const i=this.cache,r=e.length,s=no(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zf,s[o])}function kx(n,e,t){const i=this.cache,r=e.length,s=no(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hf,s[o])}function Wx(n,e,t){const i=this.cache,r=e.length,s=no(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bf,s[o])}function Xx(n){switch(n){case 5126:return Ax;case 35664:return wx;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Ix;case 35668:case 35672:return Nx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return zx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Wx}}class qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}}class Yx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xx(t.type)}}class $x{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Vc(n,e){n.seq.push(e),n.map[e.id]=e}function Kx(n,e,t){const i=n.name,r=i.length;for(Yo.lastIndex=0;;){const s=Yo.exec(i),o=Yo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vc(t,c===void 0?new qx(a,n,e):new Yx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new $x(a),Vc(t,f)),t=f}}}class ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Kx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jx=37297;let Zx=0;function Jx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Qx(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===Ds&&t===Ls?i="LinearDisplayP3ToLinearSRGB":e===Ls&&t===Ds&&(i="LinearSRGBToLinearDisplayP3"),n){case jn:case Qs:return[i,"LinearTransferOETF"];case Jt:case Fa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jx(n.getShaderSource(e),o)}else return r}function e0(n,e){const t=Qx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function t0(n,e){let t;switch(e){case am:t="Linear";break;case lm:t="Reinhard";break;case cm:t="OptimizedCineon";break;case um:t="ACESFilmic";break;case hm:t="AgX";break;case dm:t="Neutral";break;case fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function i0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hr(n){return n!==""}function Wc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(n){return n.replace(s0,a0)}const o0=new Map;function a0(n,e){let t=Ne[e];if(t===void 0){const i=o0.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(n){return n.replace(l0,c0)}function c0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function u0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case $i:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function d0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hf:e="ENVMAP_BLENDING_MULTIPLY";break;case sm:e="ENVMAP_BLENDING_MIX";break;case om:e="ENVMAP_BLENDING_ADD";break}return e}function p0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function m0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=u0(t),c=f0(t),u=h0(t),f=d0(t),h=p0(t),m=n0(t),g=i0(s),v=r.createProgram();let p,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),d.length>0&&(d+=`
`)):(p=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),d=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==kn?t0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=_a(o),o=Wc(o,t),o=Xc(o,t),a=_a(a),a=Wc(a,t),a=Xc(a,t),o=qc(o),a=qc(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=A+p+o,b=A+d+a,B=Gc(r,r.VERTEX_SHADER,y),R=Gc(r,r.FRAGMENT_SHADER,b);r.attachShader(v,B),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(H){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(B).trim(),ee=r.getShaderInfoLog(R).trim();let Z=!0,te=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,B,R);else{const ne=kc(r,B,"vertex"),V=kc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+ne+`
`+V)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(U===""||ee==="")&&(te=!1);te&&(H.diagnostics={runnable:Z,programLog:j,vertexShader:{log:U,prefix:p},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(B),r.deleteShader(R),z=new ys(r,v),E=r0(r,v)}let z;this.getUniforms=function(){return z===void 0&&C(this),z};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,jx)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=R,this}let _0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new v0(e),t.set(e,i)),i}}class v0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function x0(n,e,t,i,r,s,o){const a=new Af,l=new g0,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,H,j,U){const ee=j.fog,Z=U.geometry,te=E.isMeshStandardMaterial?j.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),V=ne&&ne.mapping===Zs?ne.image.height:null,le=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=ce!==void 0?ce.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let Ke,K,ue,_e;if(le){const je=nn[le];Ke=je.vertexShader,K=je.fragmentShader}else Ke=E.vertexShader,K=E.fragmentShader,l.update(E),ue=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const fe=n.getRenderTarget(),Oe=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,F=!!E.map,Ze=!!E.matcap,Te=!!ne,T=!!E.aoMap,w=!!E.lightMap,O=!!E.bumpMap,q=!!E.normalMap,$=!!E.displacementMap,re=!!E.emissiveMap,M=!!E.metalnessMap,_=!!E.roughnessMap,P=E.anisotropy>0,L=E.clearcoat>0,N=E.dispersion>0,W=E.iridescence>0,se=E.sheen>0,J=E.transmission>0,ie=P&&!!E.anisotropyMap,ge=L&&!!E.clearcoatMap,oe=L&&!!E.clearcoatNormalMap,me=L&&!!E.clearcoatRoughnessMap,Re=W&&!!E.iridescenceMap,ye=W&&!!E.iridescenceThicknessMap,ve=se&&!!E.sheenColorMap,Ce=se&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ve=!!E.specularColorMap,be=!!E.specularIntensityMap,D=J&&!!E.transmissionMap,ae=J&&!!E.thicknessMap,Q=!!E.gradientMap,de=!!E.alphaMap,xe=E.alphaTest>0,ke=!!E.alphaHash,Qe=!!E.extensions;let it=kn;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=n.toneMapping);const _t={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:K,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Be,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:jn,alphaToCoverage:!!E.alphaToCoverage,map:F,matcap:Ze,envMap:Te,envMapMode:Te&&ne.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:w,bumpMap:O,normalMap:q,displacementMap:h&&$,emissiveMap:re,normalMapObjectSpace:q&&E.normalMapType===Rm,normalMapTangentSpace:q&&E.normalMapType===wm,metalnessMap:M,roughnessMap:_,anisotropy:P,anisotropyMap:ie,clearcoat:L,clearcoatMap:ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:me,dispersion:N,iridescence:W,iridescenceMap:Re,iridescenceThicknessMap:ye,sheen:se,sheenColorMap:ve,sheenRoughnessMap:Ce,specularMap:ze,specularColorMap:Ve,specularIntensityMap:be,transmission:J,transmissionMap:D,thicknessMap:ae,gradientMap:Q,opaque:E.transparent===!1&&E.blending===ki&&E.alphaToCoverage===!1,alphaMap:de,alphaTest:xe,alphaHash:ke,combine:E.combine,mapUv:F&&v(E.map.channel),aoMapUv:T&&v(E.aoMap.channel),lightMapUv:w&&v(E.lightMap.channel),bumpMapUv:O&&v(E.bumpMap.channel),normalMapUv:q&&v(E.normalMap.channel),displacementMapUv:$&&v(E.displacementMap.channel),emissiveMapUv:re&&v(E.emissiveMap.channel),metalnessMapUv:M&&v(E.metalnessMap.channel),roughnessMapUv:_&&v(E.roughnessMap.channel),anisotropyMapUv:ie&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(E.sheenRoughnessMap.channel),specularMapUv:ze&&v(E.specularMap.channel),specularColorMapUv:Ve&&v(E.specularColorMap.channel),specularIntensityMapUv:be&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:ae&&v(E.thicknessMap.channel),alphaMapUv:de&&v(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(q||P),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Z.attributes.uv&&(F||de),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:we,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:F&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===Ct,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function d(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)x.push(H),x.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(A(x,E),y(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function A(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function b(E){const x=g[E.type];let H;if(x){const j=nn[x];H=n_.clone(j.uniforms)}else H=E.uniforms;return H}function B(E,x){let H;for(let j=0,U=u.length;j<U;j++){const ee=u[j];if(ee.cacheKey===x){H=ee,++H.usedTimes;break}}return H===void 0&&(H=new m0(n,x,E,s),u.push(H)),H}function R(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:B,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:z}}function M0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function S0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $c(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function a(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||S0),i.length>1&&i.sort(h||$c),r.length>1&&r.sort(h||$c)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function E0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kc,n.set(i,[o])):r>=s.length?(o=new Kc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function y0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new qe};break;case"SpotLight":t={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function T0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b0=0;function A0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w0(n){const e=new y0,t=T0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new ot,o=new ot;function a(c,u){let f=0,h=0,m=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,v=0,p=0,d=0,A=0,y=0,b=0,B=0,R=0,C=0,z=0;c.sort(A0);const E=u===!0?Math.PI:1;for(let H=0,j=c.length;H<j;H++){const U=c[H],ee=U.color,Z=U.intensity,te=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=ee.r*Z*E,h+=ee.g*Z*E,m+=ee.b*Z*E;else if(U.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],Z);z++}else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const le=U.shadow,ce=t.get(U);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.directionalShadow[g]=ce,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=U.shadow.matrix,y++}i.directional[g]=V,g++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(ee).multiplyScalar(Z*E),V.distance=te,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[p]=V;const le=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,le.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[p]=le.matrix,U.castShadow){const ce=t.get(U);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.spotShadow[p]=ce,i.spotShadowMap[p]=ne,B++}p++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(ee).multiplyScalar(Z),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[d]=V,d++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*E),V.distance=U.distance,V.decay=U.decay,U.castShadow){const le=U.shadow,ce=t.get(U);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,ce.shadowCameraNear=le.camera.near,ce.shadowCameraFar=le.camera.far,i.pointShadow[v]=ce,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=U.shadow.matrix,b++}i.point[v]=V,v++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(Z*E),V.groundColor.copy(U.groundColor).multiplyScalar(Z*E),i.hemi[A]=V,A++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=m;const x=i.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==p||x.rectAreaLength!==d||x.hemiLength!==A||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==B||x.numSpotMaps!==R||x.numLightProbes!==z)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=d,i.point.length=v,i.hemi.length=A,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=B,i.spotShadowMap.length=B,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=B+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=z,x.directionalLength=g,x.pointLength=v,x.spotLength=p,x.rectAreaLength=d,x.hemiLength=A,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=B,x.numSpotMaps=R,x.numLightProbes=z,i.version=b0++)}function l(c,u){let f=0,h=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const y=c[d];if(y.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(y.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function jc(n){const e=new w0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function R0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jc(n),e.set(r,[a])):s>=o.length?(a=new jc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class C0 extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P0 extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function U0(n,e,t){let i=new Uf;const r=new $e,s=new $e,o=new mt,a=new C0({depthPacking:Am}),l=new P0,c={},u=t.maxTextureSize,f={[Xn]:Ct,[Ct]:Xn,[gn]:gn},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new an(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let d=this.type;this.render=function(R,C,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Gn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const U=d!==_n&&this.type===_n,ee=d===_n&&this.type!==_n;for(let Z=0,te=R.length;Z<te;Z++){const ne=R[Z],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const le=V.getFrameExtents();if(r.multiply(le),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,V.mapSize.y=s.y)),V.map===null||U===!0||ee===!0){const Me=this.type!==_n?{minFilter:Vt,magFilter:Vt}:{};V.map!==null&&V.map.dispose(),V.map=new vi(r.x,r.y,Me),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ce=V.getViewportCount();for(let Me=0;Me<ce;Me++){const we=V.getViewport(Me);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),j.viewport(o),V.updateMatrices(ne,Me),i=V.getFrustum(),b(C,z,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&A(V,z),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,x,H)};function A(R,C){const z=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,z,h,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,z,m,v,null)}function y(R,C,z,E){let x=null;const H=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)x=H;else if(x=z.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=x.uuid,U=C.uuid;let ee=c[j];ee===void 0&&(ee={},c[j]=ee);let Z=ee[U];Z===void 0&&(Z=x.clone(),ee[U]=Z,C.addEventListener("dispose",B)),x=Z}if(x.visible=C.visible,x.wireframe=C.wireframe,E===_n?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:f[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=n.properties.get(x);j.light=z}return x}function b(R,C,z,E,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===_n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const U=e.update(R),ee=R.material;if(Array.isArray(ee)){const Z=U.groups;for(let te=0,ne=Z.length;te<ne;te++){const V=Z[te],le=ee[V.materialIndex];if(le&&le.visible){const ce=y(R,le,E,x);R.onBeforeShadow(n,R,C,z,U,ce,V),n.renderBufferDirect(z,null,U,ce,R,V),R.onAfterShadow(n,R,C,z,U,ce,V)}}}else if(ee.visible){const Z=y(R,ee,E,x);R.onBeforeShadow(n,R,C,z,U,Z,null),n.renderBufferDirect(z,null,U,Z,R,null),R.onAfterShadow(n,R,C,z,U,Z,null)}}const j=R.children;for(let U=0,ee=j.length;U<ee;U++)b(j[U],C,z,E,x)}function B(R){R.target.removeEventListener("dispose",B);for(const z in c){const E=c[z],x=R.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function I0(n){function e(){let D=!1;const ae=new mt;let Q=null;const de=new mt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!D&&(n.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){D=xe},setClear:function(xe,ke,Qe,it,_t){_t===!0&&(xe*=it,ke*=it,Qe*=it),ae.set(xe,ke,Qe,it),de.equals(ae)===!1&&(n.clearColor(xe,ke,Qe,it),de.copy(ae))},reset:function(){D=!1,Q=null,de.set(-1,0,0,0)}}}function t(){let D=!1,ae=null,Q=null,de=null;return{setTest:function(xe){xe?_e(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!D&&(n.depthMask(xe),ae=xe)},setFunc:function(xe){if(Q!==xe){switch(xe){case Jp:n.depthFunc(n.NEVER);break;case Qp:n.depthFunc(n.ALWAYS);break;case em:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case tm:n.depthFunc(n.EQUAL);break;case nm:n.depthFunc(n.GEQUAL);break;case im:n.depthFunc(n.GREATER);break;case rm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=xe}},setLocked:function(xe){D=xe},setClear:function(xe){de!==xe&&(n.clearDepth(xe),de=xe)},reset:function(){D=!1,ae=null,Q=null,de=null}}}function i(){let D=!1,ae=null,Q=null,de=null,xe=null,ke=null,Qe=null,it=null,_t=null;return{setTest:function(je){D||(je?_e(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(je){ae!==je&&!D&&(n.stencilMask(je),ae=je)},setFunc:function(je,jt,Et){(Q!==je||de!==jt||xe!==Et)&&(n.stencilFunc(je,jt,Et),Q=je,de=jt,xe=Et)},setOp:function(je,jt,Et){(ke!==je||Qe!==jt||it!==Et)&&(n.stencilOp(je,jt,Et),ke=je,Qe=jt,it=Et)},setLocked:function(je){D=je},setClear:function(je){_t!==je&&(n.clearStencil(je),_t=je)},reset:function(){D=!1,ae=null,Q=null,de=null,xe=null,ke=null,Qe=null,it=null,_t=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,g=!1,v=null,p=null,d=null,A=null,y=null,b=null,B=null,R=new qe(0,0,0),C=0,z=!1,E=null,x=null,H=null,j=null,U=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,te=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=te>=2);let V=null,le={};const ce=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),we=new mt().fromArray(ce),Ke=new mt().fromArray(Me);function K(D,ae,Q,de){const xe=new Uint8Array(4),ke=n.createTexture();n.bindTexture(D,ke),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<Q;Qe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ae+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ke}const ue={};ue[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),s.setFunc(Cs),O(!1),q(Ll),_e(n.CULL_FACE),T(Gn);function _e(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function fe(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Oe(D,ae){return u[D]!==ae?(n.bindFramebuffer(D,ae),u[D]=ae,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Be(D,ae){let Q=h,de=!1;if(D){Q=f.get(ae),Q===void 0&&(Q=[],f.set(ae,Q));const xe=D.textures;if(Q.length!==xe.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,Qe=xe.length;ke<Qe;ke++)Q[ke]=n.COLOR_ATTACHMENT0+ke;Q.length=xe.length,de=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,de=!0);de&&n.drawBuffers(Q)}function F(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Ze={[ci]:n.FUNC_ADD,[Np]:n.FUNC_SUBTRACT,[Fp]:n.FUNC_REVERSE_SUBTRACT};Ze[Op]=n.MIN,Ze[Bp]=n.MAX;const Te={[zp]:n.ZERO,[Hp]:n.ONE,[Vp]:n.SRC_COLOR,[ca]:n.SRC_ALPHA,[Yp]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[kp]:n.DST_ALPHA,[Gp]:n.ONE_MINUS_SRC_COLOR,[ua]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA,[$p]:n.CONSTANT_COLOR,[Kp]:n.ONE_MINUS_CONSTANT_COLOR,[jp]:n.CONSTANT_ALPHA,[Zp]:n.ONE_MINUS_CONSTANT_ALPHA};function T(D,ae,Q,de,xe,ke,Qe,it,_t,je){if(D===Gn){g===!0&&(fe(n.BLEND),g=!1);return}if(g===!1&&(_e(n.BLEND),g=!0),D!==Ip){if(D!==v||je!==z){if((p!==ci||y!==ci)&&(n.blendEquation(n.FUNC_ADD),p=ci,y=ci),je)switch(D){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,A=null,b=null,B=null,R.set(0,0,0),C=0,v=D,z=je}return}xe=xe||ae,ke=ke||Q,Qe=Qe||de,(ae!==p||xe!==y)&&(n.blendEquationSeparate(Ze[ae],Ze[xe]),p=ae,y=xe),(Q!==d||de!==A||ke!==b||Qe!==B)&&(n.blendFuncSeparate(Te[Q],Te[de],Te[ke],Te[Qe]),d=Q,A=de,b=ke,B=Qe),(it.equals(R)===!1||_t!==C)&&(n.blendColor(it.r,it.g,it.b,_t),R.copy(it),C=_t),v=D,z=!1}function w(D,ae){D.side===gn?fe(n.CULL_FACE):_e(n.CULL_FACE);let Q=D.side===Ct;ae&&(Q=!Q),O(Q),D.blending===ki&&D.transparent===!1?T(Gn):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function O(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function q(D){D!==Lp?(_e(n.CULL_FACE),D!==x&&(D===Ll?n.cullFace(n.BACK):D===Dp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),x=D}function $(D){D!==H&&(Z&&n.lineWidth(D),H=D)}function re(D,ae,Q){D?(_e(n.POLYGON_OFFSET_FILL),(j!==ae||U!==Q)&&(n.polygonOffset(ae,Q),j=ae,U=Q)):fe(n.POLYGON_OFFSET_FILL)}function M(D){D?_e(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function _(D){D===void 0&&(D=n.TEXTURE0+ee-1),V!==D&&(n.activeTexture(D),V=D)}function P(D,ae,Q){Q===void 0&&(V===null?Q=n.TEXTURE0+ee-1:Q=V);let de=le[Q];de===void 0&&(de={type:void 0,texture:void 0},le[Q]=de),(de.type!==D||de.texture!==ae)&&(V!==Q&&(n.activeTexture(Q),V=Q),n.bindTexture(D,ae||ue[D]),de.type=D,de.texture=ae)}function L(){const D=le[V];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){we.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function Ce(D){Ke.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function ze(D,ae){let Q=l.get(ae);Q===void 0&&(Q=new WeakMap,l.set(ae,Q));let de=Q.get(D);de===void 0&&(de=n.getUniformBlockIndex(ae,D.name),Q.set(D,de))}function Ve(D,ae){const de=l.get(ae).get(D);a.get(ae)!==de&&(n.uniformBlockBinding(ae,de,D.__bindingPointIndex),a.set(ae,de))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,le={},u={},f=new WeakMap,h=[],m=null,g=!1,v=null,p=null,d=null,A=null,y=null,b=null,B=null,R=new qe(0,0,0),C=0,z=!1,E=null,x=null,H=null,j=null,U=null,we.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:fe,bindFramebuffer:Oe,drawBuffers:Be,useProgram:F,setBlending:T,setMaterial:w,setFlipSided:O,setCullFace:q,setLineWidth:$,setPolygonOffset:re,setScissorTest:M,activeTexture:_,bindTexture:P,unbindTexture:L,compressedTexImage2D:N,compressedTexImage3D:W,texImage2D:Re,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:me,texSubImage2D:se,texSubImage3D:J,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:ve,viewport:Ce,reset:be}}function N0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):Is("canvas")}function v(M,_,P){let L=1;const N=re(M);if((N.width>P||N.height>P)&&(L=P/Math.max(N.width,N.height)),L<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const W=Math.floor(L*N.width),se=Math.floor(L*N.height);f===void 0&&(f=g(W,se));const J=_?g(W,se):f;return J.width=W,J.height=se,J.getContext("2d").drawImage(M,0,0,W,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+W+"x"+se+")."),J}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==Vt&&M.minFilter!==Xt}function d(M){n.generateMipmap(M)}function A(M,_,P,L,N=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=_;if(_===n.RED&&(P===n.FLOAT&&(W=n.R32F),P===n.HALF_FLOAT&&(W=n.R16F),P===n.UNSIGNED_BYTE&&(W=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.R8UI),P===n.UNSIGNED_SHORT&&(W=n.R16UI),P===n.UNSIGNED_INT&&(W=n.R32UI),P===n.BYTE&&(W=n.R8I),P===n.SHORT&&(W=n.R16I),P===n.INT&&(W=n.R32I)),_===n.RG&&(P===n.FLOAT&&(W=n.RG32F),P===n.HALF_FLOAT&&(W=n.RG16F),P===n.UNSIGNED_BYTE&&(W=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RG8UI),P===n.UNSIGNED_SHORT&&(W=n.RG16UI),P===n.UNSIGNED_INT&&(W=n.RG32UI),P===n.BYTE&&(W=n.RG8I),P===n.SHORT&&(W=n.RG16I),P===n.INT&&(W=n.RG32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),_===n.RGBA){const se=N?Ps:Je.getTransfer(L);P===n.FLOAT&&(W=n.RGBA32F),P===n.HALF_FLOAT&&(W=n.RGBA16F),P===n.UNSIGNED_BYTE&&(W=se===et?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Vt&&M.minFilter!==Xt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function b(M){const _=M.target;_.removeEventListener("dispose",b),R(_),_.isVideoTexture&&u.delete(_)}function B(M){const _=M.target;_.removeEventListener("dispose",B),z(_)}function R(M){const _=i.get(M);if(_.__webglInit===void 0)return;const P=M.source,L=h.get(P);if(L){const N=L[_.__cacheKey];N.usedTimes--,N.usedTimes===0&&C(M),Object.keys(L).length===0&&h.delete(P)}i.remove(M)}function C(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const P=M.source,L=h.get(P);delete L[_.__cacheKey],o.memory.textures--}function z(M){const _=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(_.__webglFramebuffer[L]))for(let N=0;N<_.__webglFramebuffer[L].length;N++)n.deleteFramebuffer(_.__webglFramebuffer[L][N]);else n.deleteFramebuffer(_.__webglFramebuffer[L]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[L])}else{if(Array.isArray(_.__webglFramebuffer))for(let L=0;L<_.__webglFramebuffer.length;L++)n.deleteFramebuffer(_.__webglFramebuffer[L]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let L=0;L<_.__webglColorRenderbuffer.length;L++)_.__webglColorRenderbuffer[L]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[L]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=M.textures;for(let L=0,N=P.length;L<N;L++){const W=i.get(P[L]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(P[L])}i.remove(M)}let E=0;function x(){E=0}function H(){const M=E;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),E+=1,M}function j(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function U(M,_){const P=i.get(M);if(M.isVideoTexture&&q(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const L=M.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(P,M,_);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function ee(M,_){const P=i.get(M);if(M.version>0&&P.__version!==M.version){we(P,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function Z(M,_){const P=i.get(M);if(M.version>0&&P.__version!==M.version){we(P,M,_);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function te(M,_){const P=i.get(M);if(M.version>0&&P.__version!==M.version){Ke(P,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const ne={[da]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},V={[Vt]:n.NEAREST,[pm]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},le={[Cm]:n.NEVER,[Nm]:n.ALWAYS,[Pm]:n.LESS,[Sf]:n.LEQUAL,[Lm]:n.EQUAL,[Im]:n.GEQUAL,[Dm]:n.GREATER,[Um]:n.NOTEQUAL};function ce(M,_){if(_.type===Bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Xt||_.magFilter===_o||_.magFilter===Xr||_.magFilter===di||_.minFilter===Xt||_.minFilter===_o||_.minFilter===Xr||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ne[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ne[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ne[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,V[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,V[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==Xr&&_.minFilter!==di||_.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Me(M,_){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",b));const L=_.source;let N=h.get(L);N===void 0&&(N={},h.set(L,N));const W=j(_);if(W!==M.__cacheKey){N[W]===void 0&&(N[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),N[W].usedTimes++;const se=N[M.__cacheKey];se!==void 0&&(N[M.__cacheKey].usedTimes--,se.usedTimes===0&&C(_)),M.__cacheKey=W,M.__webglTexture=N[W].texture}return P}function we(M,_,P){let L=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(L=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(L=n.TEXTURE_3D);const N=Me(M,_),W=_.source;t.bindTexture(L,M.__webglTexture,n.TEXTURE0+P);const se=i.get(W);if(W.version!==se.__version||N===!0){t.activeTexture(n.TEXTURE0+P);const J=Je.getPrimaries(Je.workingColorSpace),ie=_.colorSpace===On?null:Je.getPrimaries(_.colorSpace),ge=_.colorSpace===On||J===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let oe=v(_.image,!1,r.maxTextureSize);oe=$(_,oe);const me=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let ye=A(_.internalFormat,me,Re,_.colorSpace,_.isVideoTexture);ce(L,_);let ve;const Ce=_.mipmaps,ze=_.isVideoTexture!==!0,Ve=se.__version===void 0||N===!0,be=W.dataReady,D=y(_,oe);if(_.isDepthTexture)ye=n.DEPTH_COMPONENT16,_.type===Bn?ye=n.DEPTH_COMPONENT32F:_.type===Ki?ye=n.DEPTH_COMPONENT24:_.type===Lr&&(ye=n.DEPTH24_STENCIL8),Ve&&(ze?t.texStorage2D(n.TEXTURE_2D,1,ye,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ye,oe.width,oe.height,0,me,Re,null));else if(_.isDataTexture)if(Ce.length>0){ze&&Ve&&t.texStorage2D(n.TEXTURE_2D,D,ye,Ce[0].width,Ce[0].height);for(let ae=0,Q=Ce.length;ae<Q;ae++)ve=Ce[ae],ze?be&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,me,Re,ve.data):t.texImage2D(n.TEXTURE_2D,ae,ye,ve.width,ve.height,0,me,Re,ve.data);_.generateMipmaps=!1}else ze?(Ve&&t.texStorage2D(n.TEXTURE_2D,D,ye,oe.width,oe.height),be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,me,Re,oe.data)):t.texImage2D(n.TEXTURE_2D,0,ye,oe.width,oe.height,0,me,Re,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,ye,Ce[0].width,Ce[0].height,oe.depth);for(let ae=0,Q=Ce.length;ae<Q;ae++)ve=Ce[ae],_.format!==on?me!==null?ze?be&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,me,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ye,ve.width,ve.height,oe.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,me,Re,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ye,ve.width,ve.height,oe.depth,0,me,Re,ve.data)}else{ze&&Ve&&t.texStorage2D(n.TEXTURE_2D,D,ye,Ce[0].width,Ce[0].height);for(let ae=0,Q=Ce.length;ae<Q;ae++)ve=Ce[ae],_.format!==on?me!==null?ze?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?be&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ve.width,ve.height,me,Re,ve.data):t.texImage2D(n.TEXTURE_2D,ae,ye,ve.width,ve.height,0,me,Re,ve.data)}else if(_.isDataArrayTexture)ze?(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,ye,oe.width,oe.height,oe.depth),be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Re,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,oe.width,oe.height,oe.depth,0,me,Re,oe.data);else if(_.isData3DTexture)ze?(Ve&&t.texStorage3D(n.TEXTURE_3D,D,ye,oe.width,oe.height,oe.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Re,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ye,oe.width,oe.height,oe.depth,0,me,Re,oe.data);else if(_.isFramebufferTexture){if(Ve)if(ze)t.texStorage2D(n.TEXTURE_2D,D,ye,oe.width,oe.height);else{let ae=oe.width,Q=oe.height;for(let de=0;de<D;de++)t.texImage2D(n.TEXTURE_2D,de,ye,ae,Q,0,me,Re,null),ae>>=1,Q>>=1}}else if(Ce.length>0){if(ze&&Ve){const ae=re(Ce[0]);t.texStorage2D(n.TEXTURE_2D,D,ye,ae.width,ae.height)}for(let ae=0,Q=Ce.length;ae<Q;ae++)ve=Ce[ae],ze?be&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,me,Re,ve):t.texImage2D(n.TEXTURE_2D,ae,ye,me,Re,ve);_.generateMipmaps=!1}else if(ze){if(Ve){const ae=re(oe);t.texStorage2D(n.TEXTURE_2D,D,ye,ae.width,ae.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Re,oe)}else t.texImage2D(n.TEXTURE_2D,0,ye,me,Re,oe);p(_)&&d(L),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ke(M,_,P){if(_.image.length!==6)return;const L=Me(M,_),N=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);const W=i.get(N);if(N.version!==W.__version||L===!0){t.activeTexture(n.TEXTURE0+P);const se=Je.getPrimaries(Je.workingColorSpace),J=_.colorSpace===On?null:Je.getPrimaries(_.colorSpace),ie=_.colorSpace===On||se===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!ge&&!oe?me[Q]=v(_.image[Q],!0,r.maxCubemapSize):me[Q]=oe?_.image[Q].image:_.image[Q],me[Q]=$(_,me[Q]);const Re=me[0],ye=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),Ce=A(_.internalFormat,ye,ve,_.colorSpace),ze=_.isVideoTexture!==!0,Ve=W.__version===void 0||L===!0,be=N.dataReady;let D=y(_,Re);ce(n.TEXTURE_CUBE_MAP,_);let ae;if(ge){ze&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ce,Re.width,Re.height);for(let Q=0;Q<6;Q++){ae=me[Q].mipmaps;for(let de=0;de<ae.length;de++){const xe=ae[de];_.format!==on?ye!==null?ze?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,xe.width,xe.height,ye,ve,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,Ce,xe.width,xe.height,0,ye,ve,xe.data)}}}else{if(ae=_.mipmaps,ze&&Ve){ae.length>0&&D++;const Q=re(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ce,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){ze?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,ye,ve,me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ce,me[Q].width,me[Q].height,0,ye,ve,me[Q].data);for(let de=0;de<ae.length;de++){const ke=ae[de].image[Q].image;ze?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,ke.width,ke.height,ye,ve,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,Ce,ke.width,ke.height,0,ye,ve,ke.data)}}else{ze?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye,ve,me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ce,ye,ve,me[Q]);for(let de=0;de<ae.length;de++){const xe=ae[de];ze?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,ye,ve,xe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,Ce,ye,ve,xe.image[Q])}}}p(_)&&d(n.TEXTURE_CUBE_MAP),W.__version=N.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function K(M,_,P,L,N,W){const se=s.convert(P.format,P.colorSpace),J=s.convert(P.type),ie=A(P.internalFormat,se,J,P.colorSpace);if(!i.get(_).__hasExternalTextures){const oe=Math.max(1,_.width>>W),me=Math.max(1,_.height>>W);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,W,ie,oe,me,_.depth,0,se,J,null):t.texImage2D(N,W,ie,oe,me,0,se,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),O(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,L,N,i.get(P).__webglTexture,0,w(_)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,L,N,i.get(P).__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(M,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let L=n.DEPTH_COMPONENT24;if(P||O(_)){const N=_.depthTexture;N&&N.isDepthTexture&&(N.type===Bn?L=n.DEPTH_COMPONENT32F:N.type===Ki&&(L=n.DEPTH_COMPONENT24));const W=w(_);O(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,L,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,W,L,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,L,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const L=w(_);P&&O(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,n.DEPTH24_STENCIL8,_.width,_.height):O(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const L=_.textures;for(let N=0;N<L.length;N++){const W=L[N],se=s.convert(W.format,W.colorSpace),J=s.convert(W.type),ie=A(W.internalFormat,se,J,W.colorSpace),ge=w(_);P&&O(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ie,_.width,_.height):O(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U(_.depthTexture,0);const L=i.get(_.depthTexture).__webglTexture,N=w(_);if(_.depthTexture.format===Wi)O(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,L,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,L,0);else if(_.depthTexture.format===wr)O(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,L,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function fe(M){const _=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");_e(_.__webglFramebuffer,M)}else if(P){_.__webglDepthbuffer=[];for(let L=0;L<6;L++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[L]),_.__webglDepthbuffer[L]=n.createRenderbuffer(),ue(_.__webglDepthbuffer[L],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),ue(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(M,_,P){const L=i.get(M);_!==void 0&&K(L.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&fe(M)}function Be(M){const _=M.texture,P=i.get(M),L=i.get(_);M.addEventListener("dispose",B);const N=M.textures,W=M.isWebGLCubeRenderTarget===!0,se=N.length>1;if(se||(L.__webglTexture===void 0&&(L.__webglTexture=n.createTexture()),L.__version=_.version,o.memory.textures++),W){P.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[J]=[];for(let ie=0;ie<_.mipmaps.length;ie++)P.__webglFramebuffer[J][ie]=n.createFramebuffer()}else P.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)P.__webglFramebuffer[J]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(se)for(let J=0,ie=N.length;J<ie;J++){const ge=i.get(N[J]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&O(M)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let J=0;J<N.length;J++){const ie=N[J];P.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[J]);const ge=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),me=A(ie.internalFormat,ge,oe,ie.colorSpace,M.isXRRenderTarget===!0),Re=w(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,P.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(P.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture),ce(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)K(P.__webglFramebuffer[J][ie],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else K(P.__webglFramebuffer[J],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let J=0,ie=N.length;J<ie;J++){const ge=N[J],oe=i.get(ge);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ce(n.TEXTURE_2D,ge),K(P.__webglFramebuffer,M,ge,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,0),p(ge)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(J=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,L.__webglTexture),ce(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)K(P.__webglFramebuffer[ie],M,_,n.COLOR_ATTACHMENT0,J,ie);else K(P.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,J,0);p(_)&&d(J),t.unbindTexture()}M.depthBuffer&&fe(M)}function F(M){const _=M.textures;for(let P=0,L=_.length;P<L;P++){const N=_[P];if(p(N)){const W=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(N).__webglTexture;t.bindTexture(W,se),d(W),t.unbindTexture()}}}const Ze=[],Te=[];function T(M){if(M.samples>0){if(O(M)===!1){const _=M.textures,P=M.width,L=M.height;let N=n.COLOR_BUFFER_BIT;const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(M),J=_.length>1;if(J)for(let ie=0;ie<_.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);const ge=i.get(_[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,P,L,0,0,P,L,N,n.NEAREST),l===!0&&(Ze.length=0,Te.length=0,Ze.push(n.COLOR_ATTACHMENT0+ie),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ze.push(W),Te.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ie=0;ie<_.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);const ge=i.get(_[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function w(M){return Math.min(r.maxSamples,M.samples)}function O(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function $(M,_){const P=M.colorSpace,L=M.format,N=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==jn&&P!==On&&(Je.getTransfer(P)===et?(L!==on||N!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function re(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=x,this.setTexture2D=U,this.setTexture2DArray=ee,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=Oe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=O}function F0(n,e){function t(i,r=On){let s;const o=Je.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===_f)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mm)return n.BYTE;if(i===_m)return n.SHORT;if(i===pf)return n.UNSIGNED_SHORT;if(i===mf)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Js)return n.HALF_FLOAT;if(i===vm)return n.ALPHA;if(i===xm)return n.RGB;if(i===on)return n.RGBA;if(i===Mm)return n.LUMINANCE;if(i===Sm)return n.LUMINANCE_ALPHA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===Em)return n.RED;if(i===vf)return n.RED_INTEGER;if(i===ym)return n.RG;if(i===xf)return n.RG_INTEGER;if(i===Mf)return n.RGBA_INTEGER;if(i===go||i===vo||i===xo||i===Mo)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Hl||i===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zl||i===Hl)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gl||i===kl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Kl||i===jl||i===Zl||i===Jl||i===Ql||i===ec||i===tc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===So||i===nc||i===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===So)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tm||i===rc||i===sc||i===oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===So)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class O0 extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
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

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Yn({vertexShader:z0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new an(new to(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class G0 extends Qi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const v=new V0,p=t.getContextAttributes();let d=null,A=null;const y=[],b=[],B=new $e;let R=null;const C=new zt;C.layers.enable(1),C.viewport=new mt;const z=new zt;z.layers.enable(2),z.viewport=new mt;const E=[C,z],x=new O0;x.layers.enable(1),x.layers.enable(2);let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=y[K];return ue===void 0&&(ue=new $o,y[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=y[K];return ue===void 0&&(ue=new $o,y[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=y[K];return ue===void 0&&(ue=new $o,y[K]=ue),ue.getHandSpace()};function U(K){const ue=b.indexOf(K.inputSource);if(ue===-1)return;const _e=y[ue];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function ee(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",Z);for(let K=0;K<y.length;K++){const ue=b[K];ue!==null&&(b[K]=null,y[K].disconnect(ue))}H=null,j=null,v.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,A=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new vi(m.framebufferWidth,m.framebufferHeight,{format:on,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ue=null,_e=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=p.stencil?wr:Wi,_e=p.stencil?Lr:Ki);const Oe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new vi(h.textureWidth,h.textureHeight,{format:on,type:qn,depthTexture:new Nf(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(K){for(let ue=0;ue<K.removed.length;ue++){const _e=K.removed[ue],fe=b.indexOf(_e);fe>=0&&(b[fe]=null,y[fe].disconnect(_e))}for(let ue=0;ue<K.added.length;ue++){const _e=K.added[ue];let fe=b.indexOf(_e);if(fe===-1){for(let Be=0;Be<y.length;Be++)if(Be>=b.length){b.push(_e),fe=Be;break}else if(b[Be]===null){b[Be]=_e,fe=Be;break}if(fe===-1)break}const Oe=y[fe];Oe&&Oe.connect(_e)}}const te=new X,ne=new X;function V(K,ue,_e){te.setFromMatrixPosition(ue.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const fe=te.distanceTo(ne),Oe=ue.projectionMatrix.elements,Be=_e.projectionMatrix.elements,F=Oe[14]/(Oe[10]-1),Ze=Oe[14]/(Oe[10]+1),Te=(Oe[9]+1)/Oe[5],T=(Oe[9]-1)/Oe[5],w=(Oe[8]-1)/Oe[0],O=(Be[8]+1)/Be[0],q=F*w,$=F*O,re=fe/(-w+O),M=re*-w;ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(M),K.translateZ(re),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const _=F+re,P=Ze+re,L=q-M,N=$+(fe-M),W=Te*Ze/P*_,se=T*Ze/P*_;K.projectionMatrix.makePerspective(L,N,W,se,_,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function le(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;v.texture!==null&&(K.near=v.depthNear,K.far=v.depthFar),x.near=z.near=C.near=K.near,x.far=z.far=C.far=K.far,(H!==x.near||j!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),H=x.near,j=x.far,C.near=H,C.far=j,z.near=H,z.far=j,C.updateProjectionMatrix(),z.updateProjectionMatrix(),K.updateProjectionMatrix());const ue=K.parent,_e=x.cameras;le(x,ue);for(let fe=0;fe<_e.length;fe++)le(_e[fe],ue);_e.length===2?V(x,C,z):x.projectionMatrix.copy(C.projectionMatrix),ce(K,x,ue)};function ce(K,ue,_e){_e===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null};let Me=null;function we(K,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let fe=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let Be=0;Be<_e.length;Be++){const F=_e[Be];let Ze=null;if(m!==null)Ze=m.getViewport(F);else{const T=f.getViewSubImage(h,F);Ze=T.viewport,Be===0&&(e.setRenderTargetTextures(A,T.colorTexture,h.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(A))}let Te=E[Be];Te===void 0&&(Te=new zt,Te.layers.enable(Be),Te.viewport=new mt,E[Be]=Te),Te.matrix.fromArray(F.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(F.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Be===0&&(x.matrix.copy(Te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(Te)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Be=f.getDepthInformation(_e[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,r.renderState)}}for(let _e=0;_e<y.length;_e++){const fe=b[_e],Oe=y[_e];fe!==null&&Oe!==void 0&&Oe.update(fe,ue,c||o)}v.render(e,x),Me&&Me(K,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ke=new If;Ke.setAnimationLoop(we),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}}const si=new Mn,k0=new ot;function W0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Pf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,A,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,A,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ct&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ct&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const A=e.get(d),y=A.envMap,b=A.envMapRotation;if(y&&(p.envMap.value=y,si.copy(b),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),p.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(si)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const B=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*B,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ct&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const b=y.program;i.uniformBlockBinding(A,b)}function c(A,y){let b=r[A.id];b===void 0&&(g(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",p));const B=y.program;i.updateUBOMapping(A,B);const R=e.render.frame;s[A.id]!==R&&(h(A),s[A.id]=R)}function u(A){const y=f();A.__bindingPointIndex=y;const b=n.createBuffer(),B=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,B,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=r[A.id],b=A.uniforms,B=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=b.length;R<C;R++){const z=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,x=z.length;E<x;E++){const H=z[E];if(m(H,R,E,B)===!0){const j=H.__offset,U=Array.isArray(H.value)?H.value:[H.value];let ee=0;for(let Z=0;Z<U.length;Z++){const te=U[Z],ne=v(te);typeof te=="number"||typeof te=="boolean"?(H.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,j+ee,H.__data)):te.isMatrix3?(H.__data[0]=te.elements[0],H.__data[1]=te.elements[1],H.__data[2]=te.elements[2],H.__data[3]=0,H.__data[4]=te.elements[3],H.__data[5]=te.elements[4],H.__data[6]=te.elements[5],H.__data[7]=0,H.__data[8]=te.elements[6],H.__data[9]=te.elements[7],H.__data[10]=te.elements[8],H.__data[11]=0):(te.toArray(H.__data,ee),ee+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,y,b,B){const R=A.value,C=y+"_"+b;if(B[C]===void 0)return typeof R=="number"||typeof R=="boolean"?B[C]=R:B[C]=R.clone(),!0;{const z=B[C];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return B[C]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(A){const y=A.uniforms;let b=0;const B=16;for(let C=0,z=y.length;C<z;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,H=E.length;x<H;x++){const j=E[x],U=Array.isArray(j.value)?j.value:[j.value];for(let ee=0,Z=U.length;ee<Z;ee++){const te=U[ee],ne=v(te),V=b%B;V!==0&&B-V<ne.boundary&&(b+=B-V),j.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=ne.storage}}}const R=b%B;return R>0&&(b+=B-R),A.__size=b,A.__cache={},this}function v(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function p(A){const y=A.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class q0{constructor(e={}){const{canvas:t=Om(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const y=this;let b=!1,B=0,R=0,C=null,z=-1,E=null;const x=new mt,H=new mt;let j=null;const U=new qe(0);let ee=0,Z=t.width,te=t.height,ne=1,V=null,le=null;const ce=new mt(0,0,Z,te),Me=new mt(0,0,Z,te);let we=!1;const Ke=new Uf;let K=!1,ue=!1;const _e=new ot,fe=new X,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return C===null?ne:1}let F=i;function Ze(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",Q,!1),F===null){const I="webgl2";if(F=Ze(I,S),F===null)throw Ze(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,T,w,O,q,$,re,M,_,P,L,N,W,se,J,ie,ge,oe,me,Re,ye,ve,Ce,ze;function Ve(){Te=new ex(F),Te.init(),ve=new F0(F,Te),T=new Yv(F,Te,e,ve),w=new I0(F),O=new ix(F),q=new M0,$=new N0(F,Te,w,q,T,ve,O),re=new Kv(y),M=new Qv(y),_=new c_(F),Ce=new Xv(F,_),P=new tx(F,_,O,Ce),L=new sx(F,P,_,O),me=new rx(F,T,$),ie=new $v(q),N=new x0(y,re,M,Te,T,Ce,ie),W=new W0(y,q),se=new E0,J=new R0(Te),oe=new Wv(y,re,M,w,L,h,l),ge=new U0(y,L,T),ze=new X0(F,O,T,w),Re=new qv(F,Te,O),ye=new nx(F,Te,O),O.programs=N.programs,y.capabilities=T,y.extensions=Te,y.properties=q,y.renderLists=se,y.shadowMap=ge,y.state=w,y.info=O}Ve();const be=new G0(y,F);this.xr=be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Z,te,!1))},this.getSize=function(S){return S.set(Z,te)},this.setSize=function(S,I,Y=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,te=I,t.width=Math.floor(S*ne),t.height=Math.floor(I*ne),Y===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Z*ne,te*ne).floor()},this.setDrawingBufferSize=function(S,I,Y){Z=S,te=I,ne=Y,t.width=Math.floor(S*Y),t.height=Math.floor(I*Y),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,I,Y,G){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,I,Y,G),w.viewport(x.copy(ce).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(Me)},this.setScissor=function(S,I,Y,G){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,I,Y,G),w.scissor(H.copy(Me).multiplyScalar(ne).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(S){w.setScissorTest(we=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(S=!0,I=!0,Y=!0){let G=0;if(S){let k=!1;if(C!==null){const pe=C.texture.format;k=pe===Mf||pe===xf||pe===vf}if(k){const pe=C.texture.type,Se=pe===qn||pe===Ki||pe===pf||pe===Lr||pe===_f||pe===gf,Ee=oe.getClearColor(),Ae=oe.getClearAlpha(),Le=Ee.r,Ie=Ee.g,He=Ee.b;Se?(m[0]=Le,m[1]=Ie,m[2]=He,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=Le,g[1]=Ie,g[2]=He,g[3]=Ae,F.clearBufferiv(F.COLOR,0,g))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),se.dispose(),J.dispose(),q.dispose(),re.dispose(),M.dispose(),L.dispose(),Ce.dispose(),ze.dispose(),N.dispose(),be.dispose(),be.removeEventListener("sessionstart",je),be.removeEventListener("sessionend",jt),Et.stop()};function D(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=O.autoReset,I=ge.enabled,Y=ge.autoUpdate,G=ge.needsUpdate,k=ge.type;Ve(),O.autoReset=S,ge.enabled=I,ge.autoUpdate=Y,ge.needsUpdate=G,ge.type=k}function Q(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){const I=S.target;I.removeEventListener("dispose",de),xe(I)}function xe(S){ke(S),q.remove(S)}function ke(S){const I=q.get(S).programs;I!==void 0&&(I.forEach(function(Y){N.releaseProgram(Y)}),S.isShaderMaterial&&N.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,Y,G,k,pe){I===null&&(I=Oe);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Ee=Wf(S,I,Y,G,k);w.setMaterial(G,Se);let Ae=Y.index,Le=1;if(G.wireframe===!0){if(Ae=P.getWireframeAttribute(Y),Ae===void 0)return;Le=2}const Ie=Y.drawRange,He=Y.attributes.position;let rt=Ie.start*Le,gt=(Ie.start+Ie.count)*Le;pe!==null&&(rt=Math.max(rt,pe.start*Le),gt=Math.min(gt,(pe.start+pe.count)*Le)),Ae!==null?(rt=Math.max(rt,0),gt=Math.min(gt,Ae.count)):He!=null&&(rt=Math.max(rt,0),gt=Math.min(gt,He.count));const Ut=gt-rt;if(Ut<0||Ut===1/0)return;Ce.setup(k,G,Ee,Y,Ae);let un,Ye=Re;if(Ae!==null&&(un=_.get(Ae),Ye=ye,Ye.setIndex(un)),k.isMesh)G.wireframe===!0?(w.setLineWidth(G.wireframeLinewidth*Be()),Ye.setMode(F.LINES)):Ye.setMode(F.TRIANGLES);else if(k.isLine){let De=G.linewidth;De===void 0&&(De=1),w.setLineWidth(De*Be()),k.isLineSegments?Ye.setMode(F.LINES):k.isLineLoop?Ye.setMode(F.LINE_LOOP):Ye.setMode(F.LINE_STRIP)}else k.isPoints?Ye.setMode(F.POINTS):k.isSprite&&Ye.setMode(F.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ye.renderInstances(rt,Ut,k.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,nr=Math.min(Y.instanceCount,De);Ye.renderInstances(rt,Ut,nr)}else Ye.render(rt,Ut)};function Qe(S,I,Y){S.transparent===!0&&S.side===gn&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,Br(S,I,Y),S.side=Xn,S.needsUpdate=!0,Br(S,I,Y),S.side=gn):Br(S,I,Y)}this.compile=function(S,I,Y=null){Y===null&&(Y=S),p=J.get(Y),p.init(I),A.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==Y&&S.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(y._useLegacyLights);const G=new Set;return S.traverse(function(k){const pe=k.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Ee=pe[Se];Qe(Ee,Y,k),G.add(Ee)}else Qe(pe,Y,k),G.add(pe)}),A.pop(),p=null,G},this.compileAsync=function(S,I,Y=null){const G=this.compile(S,I,Y);return new Promise(k=>{function pe(){if(G.forEach(function(Se){q.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){k(S);return}setTimeout(pe,10)}Te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let it=null;function _t(S){it&&it(S)}function je(){Et.stop()}function jt(){Et.start()}const Et=new If;Et.setAnimationLoop(_t),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(S){it=S,be.setAnimationLoop(S),S===null?Et.stop():Et.start()},be.addEventListener("sessionstart",je),be.addEventListener("sessionend",jt),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(I),I=be.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,I,C),p=J.get(S,A.length),p.init(I),A.push(p),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ke.setFromProjectionMatrix(_e),ue=this.localClippingEnabled,K=ie.init(this.clippingPlanes,ue),v=se.get(S,d.length),v.init(),d.push(v),Ga(S,I,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(V,le);const Y=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1;Y&&oe.addToRenderList(v,S),this.info.render.frame++,K===!0&&ie.beginShadows();const G=p.state.shadowsArray;ge.render(G,S,I),K===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,pe=v.transmissive;if(p.setupLights(y._useLegacyLights),I.isArrayCamera){const Se=I.cameras;if(pe.length>0)for(let Ee=0,Ae=Se.length;Ee<Ae;Ee++){const Le=Se[Ee];Wa(k,pe,S,Le)}Y&&oe.render(S);for(let Ee=0,Ae=Se.length;Ee<Ae;Ee++){const Le=Se[Ee];ka(v,S,Le,Le.viewport)}}else pe.length>0&&Wa(k,pe,S,I),Y&&oe.render(S),ka(v,S,I);C!==null&&($.updateMultisampleRenderTarget(C),$.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,I),Ce.resetDefaultState(),z=-1,E=null,A.pop(),A.length>0?(p=A[A.length-1],K===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Ga(S,I,Y,G){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ke.intersectsSprite(S)){G&&fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);const Se=L.update(S),Ee=S.material;Ee.visible&&v.push(S,Se,Ee,Y,fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ke.intersectsObject(S))){const Se=L.update(S),Ee=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),fe.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),fe.copy(Se.boundingSphere.center)),fe.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){const Ae=Se.groups;for(let Le=0,Ie=Ae.length;Le<Ie;Le++){const He=Ae[Le],rt=Ee[He.materialIndex];rt&&rt.visible&&v.push(S,Se,rt,Y,fe.z,He)}}else Ee.visible&&v.push(S,Se,Ee,Y,fe.z,null)}}const pe=S.children;for(let Se=0,Ee=pe.length;Se<Ee;Se++)Ga(pe[Se],I,Y,G)}function ka(S,I,Y,G){const k=S.opaque,pe=S.transmissive,Se=S.transparent;p.setupLightsView(Y),K===!0&&ie.setGlobalState(y.clippingPlanes,Y),G&&w.viewport(x.copy(G)),k.length>0&&Or(k,I,Y),pe.length>0&&Or(pe,I,Y),Se.length>0&&Or(Se,I,Y),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Wa(S,I,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new vi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Js:qn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const pe=p.state.transmissionRenderTarget[G.id],Se=G.viewport||x;pe.setSize(Se.z,Se.w);const Ee=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(U),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear();const Ae=y.toneMapping;y.toneMapping=kn;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),K===!0&&ie.setGlobalState(y.clippingPlanes,G),Or(S,Y,G),$.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let He=0,rt=I.length;He<rt;He++){const gt=I[He],Ut=gt.object,un=gt.geometry,Ye=gt.material,De=gt.group;if(Ye.side===gn&&Ut.layers.test(G.layers)){const nr=Ye.side;Ye.side=Ct,Ye.needsUpdate=!0,Xa(Ut,Y,G,un,Ye,De),Ye.side=nr,Ye.needsUpdate=!0,Ie=!0}}Ie===!0&&($.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ee),y.setClearColor(U,ee),Le!==void 0&&(G.viewport=Le),y.toneMapping=Ae}function Or(S,I,Y){const G=I.isScene===!0?I.overrideMaterial:null;for(let k=0,pe=S.length;k<pe;k++){const Se=S[k],Ee=Se.object,Ae=Se.geometry,Le=G===null?Se.material:G,Ie=Se.group;Ee.layers.test(Y.layers)&&Xa(Ee,I,Y,Ae,Le,Ie)}}function Xa(S,I,Y,G,k,pe){S.onBeforeRender(y,I,Y,G,k,pe),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,I,Y,G,S,pe),k.transparent===!0&&k.side===gn&&k.forceSinglePass===!1?(k.side=Ct,k.needsUpdate=!0,y.renderBufferDirect(Y,I,G,k,S,pe),k.side=Xn,k.needsUpdate=!0,y.renderBufferDirect(Y,I,G,k,S,pe),k.side=gn):y.renderBufferDirect(Y,I,G,k,S,pe),S.onAfterRender(y,I,Y,G,k,pe)}function Br(S,I,Y){I.isScene!==!0&&(I=Oe);const G=q.get(S),k=p.state.lights,pe=p.state.shadowsArray,Se=k.state.version,Ee=N.getParameters(S,k.state,pe,I,Y),Ae=N.getProgramCacheKey(Ee);let Le=G.programs;G.environment=S.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(S.isMeshStandardMaterial?M:re).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",de),Le=new Map,G.programs=Le);let Ie=Le.get(Ae);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===Se)return Ya(S,Ee),Ie}else Ee.uniforms=N.getUniforms(S),S.onBuild(Y,Ee,y),S.onBeforeCompile(Ee,y),Ie=N.acquireProgram(Ee,Ae),Le.set(Ae,Ie),G.uniforms=Ee.uniforms;const He=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=ie.uniform),Ya(S,Ee),G.needsLights=qf(S),G.lightsStateVersion=Se,G.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function qa(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=ys.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Ya(S,I){const Y=q.get(S);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function Wf(S,I,Y,G,k){I.isScene!==!0&&(I=Oe),$.resetTextureUnits();const pe=I.fog,Se=G.isMeshStandardMaterial?I.environment:null,Ee=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:jn,Ae=(G.isMeshStandardMaterial?M:re).get(G.envMap||Se),Le=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,gt=!!Y.morphAttributes.color;let Ut=kn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=y.toneMapping);const un=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ye=un!==void 0?un.length:0,De=q.get(G),nr=p.state.lights;if(K===!0&&(ue===!0||S!==E)){const Ot=S===E&&G.id===z;ie.setState(G,S,Ot)}let nt=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==nr.state.version||De.outputColorSpace!==Ee||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Ae||G.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Le||De.vertexTangents!==Ie||De.morphTargets!==He||De.morphNormals!==rt||De.morphColors!==gt||De.toneMapping!==Ut||De.morphTargetsCount!==Ye)&&(nt=!0):(nt=!0,De.__version=G.version);let Zn=De.currentProgram;nt===!0&&(Zn=Br(G,I,k));let $a=!1,ir=!1,ro=!1;const vt=Zn.getUniforms(),yn=De.uniforms;if(w.useProgram(Zn.program)&&($a=!0,ir=!0,ro=!0),G.id!==z&&(z=G.id,ir=!0),$a||E!==S){vt.setValue(F,"projectionMatrix",S.projectionMatrix),vt.setValue(F,"viewMatrix",S.matrixWorldInverse);const Ot=vt.map.cameraPosition;Ot!==void 0&&Ot.setValue(F,fe.setFromMatrixPosition(S.matrixWorld)),T.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,ir=!0,ro=!0)}if(k.isSkinnedMesh){vt.setOptional(F,k,"bindMatrix"),vt.setOptional(F,k,"bindMatrixInverse");const Ot=k.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(F,"boneTexture",Ot.boneTexture,$))}k.isBatchedMesh&&(vt.setOptional(F,k,"batchingTexture"),vt.setValue(F,"batchingTexture",k._matricesTexture,$));const so=Y.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0)&&me.update(k,Y,Zn),(ir||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,vt.setValue(F,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Ae,yn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(yn.envMapIntensity.value=I.environmentIntensity),ir&&(vt.setValue(F,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Xf(yn,ro),pe&&G.fog===!0&&W.refreshFogUniforms(yn,pe),W.refreshMaterialUniforms(yn,G,ne,te,p.state.transmissionRenderTarget[S.id]),ys.upload(F,qa(De),yn,$)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ys.upload(F,qa(De),yn,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(F,"center",k.center),vt.setValue(F,"modelViewMatrix",k.modelViewMatrix),vt.setValue(F,"normalMatrix",k.normalMatrix),vt.setValue(F,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ot=G.uniformsGroups;for(let oo=0,Yf=Ot.length;oo<Yf;oo++){const Ka=Ot[oo];ze.update(Ka,Zn),ze.bind(Ka,Zn)}}return Zn}function Xf(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function qf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,I,Y){q.get(S.texture).__webglTexture=I,q.get(S.depthTexture).__webglTexture=Y;const G=q.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const Y=q.get(S);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,Y=0){C=S,B=I,R=Y;let G=!0,k=null,pe=!1,Se=!1;if(S){const Ae=q.get(S);Ae.__useDefaultFramebuffer!==void 0?(w.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?$.setupRenderTarget(S):Ae.__hasExternalTextures&&$.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Ie=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?k=Ie[I][Y]:k=Ie[I],pe=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?k=q.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[Y]:k=Ie,x.copy(S.viewport),H.copy(S.scissor),j=S.scissorTest}else x.copy(ce).multiplyScalar(ne).floor(),H.copy(Me).multiplyScalar(ne).floor(),j=we;if(w.bindFramebuffer(F.FRAMEBUFFER,k)&&G&&w.drawBuffers(S,k),w.viewport(x),w.scissor(H),w.setScissorTest(j),pe){const Ae=q.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,Y)}else if(Se){const Ae=q.get(S.texture),Le=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,Y||0,Le)}z=-1},this.readRenderTargetPixels=function(S,I,Y,G,k,pe,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){w.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Ae=S.texture,Le=Ae.format,Ie=Ae.type;if(!T.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-G&&Y>=0&&Y<=S.height-k&&F.readPixels(I,Y,G,k,ve.convert(Le),ve.convert(Ie),pe)}finally{const Ae=C!==null?q.get(C).__webglFramebuffer:null;w.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(S,I,Y=0){const G=Math.pow(2,-Y),k=Math.floor(I.image.width*G),pe=Math.floor(I.image.height*G);$.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,S.x,S.y,k,pe),w.unbindTexture()},this.copyTextureToTexture=function(S,I,Y,G=0){const k=I.image.width,pe=I.image.height,Se=ve.convert(Y.format),Ee=ve.convert(Y.type);$.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,S.x,S.y,k,pe,Se,Ee,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,S.x,S.y,Se,Ee,I.image),G===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),w.unbindTexture()},this.copyTextureToTexture3D=function(S,I,Y,G,k=0){const pe=S.max.x-S.min.x,Se=S.max.y-S.min.y,Ee=S.max.z-S.min.z,Ae=ve.convert(G.format),Le=ve.convert(G.type);let Ie;if(G.isData3DTexture)$.setTexture3D(G,0),Ie=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)$.setTexture2DArray(G,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const He=F.getParameter(F.UNPACK_ROW_LENGTH),rt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ut=F.getParameter(F.UNPACK_SKIP_ROWS),un=F.getParameter(F.UNPACK_SKIP_IMAGES),Ye=Y.isCompressedTexture?Y.mipmaps[k]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,S.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(Ie,k,I.x,I.y,I.z,pe,Se,Ee,Ae,Le,Ye.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,k,I.x,I.y,I.z,pe,Se,Ee,Ae,Ye.data):F.texSubImage3D(Ie,k,I.x,I.y,I.z,pe,Se,Ee,Ae,Le,Ye),F.pixelStorei(F.UNPACK_ROW_LENGTH,He),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,un),k===0&&G.generateMipmaps&&F.generateMipmap(Ie),w.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),w.unbindTexture()},this.resetState=function(){B=0,R=0,C=null,w.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Qs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Y0 extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vf extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ns=new X,Fs=new X,Zc=new ot,ur=new bf,ps=new eo,Ko=new X,Jc=new X;class $0 extends Lt{constructor(e=new En,t=new Vf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ns.fromBufferAttribute(t,r-1),Fs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ns.distanceTo(Fs);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;Zc.copy(r).invert(),ur.copy(e.ray).applyMatrix4(Zc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const d=u.getX(v),A=u.getX(v+1),y=ms(this,e,ur,l,d,A);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(m),d=ms(this,e,ur,l,v,p);d&&t.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const d=ms(this,e,ur,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=ms(this,e,ur,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ms(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Ns.fromBufferAttribute(o,r),Fs.fromBufferAttribute(o,s),t.distanceSqToSegment(Ns,Fs,Ko,Jc)>i)return;Ko.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ko);if(!(l<e.near||l>e.far))return{distance:l,point:Jc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Qc=new X,eu=new X;class K0 extends $0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Qc.fromBufferAttribute(t,r),eu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Qc.distanceTo(eu);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends K0{constructor(e=10,t=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=h===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new En;u.setAttribute("position",new Kt(l,3)),u.setAttribute("color",new Kt(c,3));const f=new Vf({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Z0=n=>{let e=10,t=10,i=null;const r=a=>{a?(i=new j0(e,t),n.add(i)):i&&(n.remove(i),i=null)};return{enable:r,setSize:a=>{r(!1),e=a,r(!0)},setDivision:a=>{r(!1),t=a,r(!0)},getSize:()=>e,getDivisions:()=>t,isActive:()=>!!i}},io=new Y0,Rr=new zt(75,window.innerWidth/window.innerHeight,.1,1e3),Gf=new q0,J0=new er(1,1,1),Q0=new Oa({color:65280}),eM=new an(J0,Q0);io.add(eM);Rr.position.y=2;Rr.position.z=5;const tM=io.add,za=Z0(io),kf=()=>{za.enable(!0)},nM=()=>{za.enable(!1)},iM=({width:n,height:e})=>{Gf.setSize(n,e),Rr.aspect=n/e,Rr.updateProjectionMatrix()};kf();const rM={scene:io,camera:Rr,renderer:Gf,add2Scene:tM,activateAssistanceGrid:kf,deactivateAssistanceGrid:nM,grid:za,resizeRatio:iM},Ha=cf("three",()=>({threeContext:Tu(rM)})),tu=n=>{const e=n.target;return parseFloat(e.value)},sM=Ji({name:"CameraWidget",setup(){const n=Ha(),{camera:e}=n.threeContext;return{camera:e,changePosition:(r,s)=>{const o=tu(r);if(o===0||o)switch(s){case"x":e.position.x=o;break;case"y":e.position.y=o;break;case"z":e.position.z=o;break}},changeRotation:(r,s)=>{const o=tu(r);if(o===0||o)switch(s){case"x":e.rotation.x=o;break;case"y":e.rotation.y=o;break;case"z":e.rotation.z=o;break}}}}}),Fr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Va=n=>(Wh("data-v-ad1ebea5"),n=n(),Xh(),n),oM=Va(()=>Xe("div",null,"Camera Widget",-1)),aM=Va(()=>Xe("legend",null,"Position",-1)),lM=Va(()=>Xe("legend",null,"Rotation",-1));function cM(n,e,t,i,r,s){return Vn(),gi(Qt,null,[oM,Xe("fieldset",null,[aM,Xe("span",null,[en("x: "),Un(Xe("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.camera.position.x=o),onInput:e[1]||(e[1]=o=>n.changePosition(o,"x"))},null,544),[[Fn,n.camera.position.x]])]),Xe("span",null,[en("y: "),Un(Xe("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>n.camera.position.y=o),onInput:e[3]||(e[3]=o=>n.changePosition(o,"y"))},null,544),[[Fn,n.camera.position.y]])]),Xe("span",null,[en("z: "),Un(Xe("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.camera.position.z=o),onInput:e[5]||(e[5]=o=>n.changePosition(o,"z"))},null,544),[[Fn,n.camera.position.z]])])]),Xe("fieldset",null,[lM,Xe("span",null,[en("x: "),Un(Xe("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.camera.rotation.x=o),onInput:e[7]||(e[7]=o=>n.changeRotation(o,"x"))},null,544),[[Fn,n.camera.rotation.x]])]),Xe("span",null,[en("y: "),Un(Xe("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.camera.rotation.y=o),onInput:e[9]||(e[9]=o=>n.changeRotation(o,"y"))},null,544),[[Fn,n.camera.rotation.y]])]),Xe("span",null,[en("z: "),Un(Xe("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>n.camera.rotation.z=o),onInput:e[11]||(e[11]=o=>n.changeRotation(o,"z"))},null,544),[[Fn,n.camera.rotation.z]])])])],64)}const dr=Fr(sM,[["render",cM],["__scopeId","data-v-ad1ebea5"]]),uM=Ji({setup(){const n=Ha(),{threeContext:e}=n,{grid:t}=e,i=Hi(!0),r=Hi(t.getSize()),s=Hi(t.getDivisions());return{gridActive:i,activateGrid:c=>{const u=c.target;i.value=u.checked,t.enable(u.checked)},setSize:c=>{const u=c.target,f=parseFloat(u.value);f&&t.setSize(f),r.value=t.getSize()},setDivision:c=>{const u=c.target,f=parseFloat(u.value);f&&t.setDivision(f),s.value=t.getDivisions()},grid:t,size:r,divisions:s}}}),fM=["checked"],hM=["disabled"],dM=["disabled"];function pM(n,e,t,i,r,s){return Vn(),gi("fieldset",null,[Xe("legend",null,[en("Grid "),Xe("input",{type:"checkbox",checked:n.gridActive,onChange:e[0]||(e[0]=(...o)=>n.activateGrid&&n.activateGrid(...o))},null,40,fM)]),Xe("span",null,[en("Size: "),Un(Xe("input",{onChange:e[1]||(e[1]=(...o)=>n.setSize&&n.setSize(...o)),disabled:!n.gridActive,"onUpdate:modelValue":e[2]||(e[2]=o=>n.size=o)},null,40,hM),[[Fn,n.size]])]),Xe("span",null,[en("Division: "),Un(Xe("input",{onChange:e[3]||(e[3]=(...o)=>n.setDivision&&n.setDivision(...o)),disabled:!n.gridActive,"onUpdate:modelValue":e[4]||(e[4]=o=>n.divisions=o)},null,40,dM),[[Fn,n.divisions]])])])}const _s=Fr(uM,[["render",pM],["__scopeId","data-v-631969c5"]]),mM=Ji({name:"EntityTreeWidget",components:{CameraWidget:dr,SceneWidget:_s},setup(){const n=uf();return{toggleCamera:()=>{n.widget=n.widget==dr?null:dr},toggleScene:()=>{n.widget=n.widget==_s?null:_s},selectionStore:n,isSelected:r=>{switch(r){case"camera":return n.widget==dr;case"scene":return n.widget==_s;default:return!1}}}}});function _M(n,e,t,i,r,s){return Vn(),gi("div",null,[Xe("input",{type:"button",onClick:e[0]||(e[0]=(...o)=>n.toggleCamera&&n.toggleCamera(...o)),class:Mr(n.isSelected("camera")?"selected":""),value:"Camera"},null,2),Xe("input",{type:"button",onClick:e[1]||(e[1]=(...o)=>n.toggleScene&&n.toggleScene(...o)),class:Mr(n.isSelected("scene")?"selected":""),value:"Scene"},null,2)])}const gM=Fr(mM,[["render",_M]]),vM=Ji({name:"ThreeDPreview",setup(){const n=Hi(),e=Ha(),{threeContext:t}=e,i=()=>{const s=n.value.offsetWidth,o=n.value.offsetHeight;t.resizeRatio({width:s,height:o}),n.value.appendChild(t.renderer.domElement)},r=()=>{const s=n.value.offsetWidth-6,o=n.value.offsetHeight-6;t.resizeRatio({width:s,height:o})};return Bu(()=>{i(),window.addEventListener("resize",r);const s=()=>{requestAnimationFrame(s);const{renderer:o,scene:a,camera:l}=t;o.render(a,l)};s()}),zu(()=>{window.removeEventListener("resize",r)}),{threeContainer:n}}}),xM={class:"threeWrapperDiv"},MM={ref:"threeContainer",class:"threeDiv"};function SM(n,e,t,i,r,s){return Vn(),gi("div",xM,[Xe("div",MM,null,512)])}const EM=Fr(vM,[["render",SM]]),yM=Ji({components:{CameraWidget:dr},setup(){return{store:uf()}}}),TM={key:0},bM={key:1};function AM(n,e,t,i,r,s){return n.store.widget?(Vn(),gi("div",TM,[(Vn(),Fd(Jh(n.store.widget)))])):(Vn(),gi("div",bM," No component selected yet! "))}const wM=Fr(yM,[["render",AM]]),RM={class:"main-grid"},CM={class:"tree"},PM={class:"details"},LM={class:"main"},DM=Ji({__name:"App",setup(n){return(e,t)=>(Vn(),gi("div",RM,[Xe("div",CM,[$t(gM)]),Xe("div",PM,[$t(wM)]),Xe("div",LM,[$t(EM)])]))}}),UM=bp();Sp(DM).use(UM).mount("#app");
