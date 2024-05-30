(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ql(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const ut={},Cs=[],cn=()=>{},Cp=()=>!1,ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yl=n=>n.startsWith("onUpdate:"),Pt=Object.assign,Kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pp=Object.prototype.hasOwnProperty,$e=(n,e)=>Pp.call(n,e),Ce=Array.isArray,Ps=n=>zr(n)==="[object Map]",ta=n=>zr(n)==="[object Set]",Vc=n=>zr(n)==="[object Date]",Be=n=>typeof n=="function",St=n=>typeof n=="string",qn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",bf=n=>(ht(n)||Be(n))&&Be(n.then)&&Be(n.catch),Af=Object.prototype.toString,zr=n=>Af.call(n),Lp=n=>zr(n).slice(8,-1),wf=n=>zr(n)==="[object Object]",$l=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ip=/-(\w)/g,Cn=na(n=>n.replace(Ip,(e,t)=>t?t.toUpperCase():"")),Dp=/\B([A-Z])/g,$s=na(n=>n.replace(Dp,"-$1").toLowerCase()),ia=na(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=na(n=>n?`on${ia(n)}`:""),bi=(n,e)=>!Object.is(n,e),Lo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Rf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Bo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let kc;const Cf=()=>kc||(kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=St(i)?Fp(i):Zl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(St(n)||ht(n))return n}const Np=/;(?![^(]*\))/g,Up=/:([^]+)/,Op=/\/\*[^]*?\*\//g;function Fp(n){const e={};return n.replace(Op,"").split(Np).forEach(t=>{if(t){const i=t.split(Up);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pr(n){let e="";if(St(n))e=n;else if(Ce(n))for(let t=0;t<n.length;t++){const i=Pr(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zp=ql(Bp);function Pf(n){return!!n||n===""}function Hp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=sa(n[i],e[i]);return t}function sa(n,e){if(n===e)return!0;let t=Vc(n),i=Vc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=qn(n),i=qn(e),t||i)return n===e;if(t=Ce(n),i=Ce(e),t||i)return t&&i?Hp(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!sa(n[o],e[o]))return!1}}return String(n)===String(e)}function Vp(n,e){return n.findIndex(t=>sa(t,e))}const Ca=n=>St(n)?n:n==null?"":Ce(n)||ht(n)&&(n.toString===Af||!Be(n.toString))?JSON.stringify(n,Lf,2):String(n),Lf=(n,e)=>e&&e.__v_isRef?Lf(n,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Pa(i,r)+" =>"]=s,t),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Pa(t))}:qn(e)?Pa(e):ht(e)&&!Ce(e)&&!wf(e)?String(e):e,Pa=(n,e="")=>{var t;return qn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class If{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Df(n){return new If(n)}function kp(n,e=nn){e&&e.active&&e.effects.push(n)}function Nf(){return nn}function Gp(n){nn&&nn.cleanups.push(n)}let Ji;class Jl{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,kp(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ri();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Wp(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ci()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=yi,t=Ji;try{return yi=!0,Ji=this,this._runnings++,Gc(this),this.fn()}finally{Wc(this),this._runnings--,Ji=t,yi=e}}stop(){this.active&&(Gc(this),Wc(this),this.onStop&&this.onStop(),this.active=!1)}}function Wp(n){return n.value}function Gc(n){n._trackId++,n._depsLength=0}function Wc(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Uf(n.deps[e],n);n.deps.length=n._depsLength}}function Uf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let yi=!0,Tl=0;const Of=[];function Ri(){Of.push(yi),yi=!1}function Ci(){const n=Of.pop();yi=n===void 0?!0:n}function Ql(){Tl++}function ec(){for(Tl--;!Tl&&bl.length;)bl.shift()()}function Ff(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Uf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const bl=[];function Bf(n,e,t){Ql();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&bl.push(i.scheduler)))}ec()}const zf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},zo=new WeakMap,Qi=Symbol(""),Al=Symbol("");function Jt(n,e,t){if(yi&&Ji){let i=zo.get(n);i||zo.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=zf(()=>i.delete(t))),Ff(Ji,s)}}function jn(n,e,t,i,s,r){const o=zo.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ce(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!qn(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ce(n)?$l(t)&&a.push(o.get("length")):(a.push(o.get(Qi)),Ps(n)&&a.push(o.get(Al)));break;case"delete":Ce(n)||(a.push(o.get(Qi)),Ps(n)&&a.push(o.get(Al)));break;case"set":Ps(n)&&a.push(o.get(Qi));break}Ql();for(const l of a)l&&Bf(l,4);ec()}function Xp(n,e){const t=zo.get(n);return t&&t.get(e)}const jp=ql("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn)),Xc=qp();function qp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Qe(this);for(let r=0,o=this.length;r<o;r++)Jt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Qe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ri(),Ql();const i=Qe(this)[e].apply(this,t);return ec(),Ci(),i}}),n}function Yp(n){qn(n)||(n=String(n));const e=Qe(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?am:Xf:r?Wf:Gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ce(e);if(!s){if(o&&$e(Xc,t))return Reflect.get(Xc,t,i);if(t==="hasOwnProperty")return Yp}const a=Reflect.get(e,t,i);return(qn(t)?Hf.has(t):jp(t))||(s||Jt(e,"get",t),r)?a:Tt(a)?o&&$l(t)?a:a.value:ht(a)?s?jf(a):es(a):a}}class kf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Lr(r);if(!Ho(i)&&!Lr(i)&&(r=Qe(r),i=Qe(i)),!Ce(e)&&Tt(r)&&!Tt(i))return l?!1:(r.value=i,!0)}const o=Ce(e)&&$l(t)?Number(t)<e.length:$e(e,t),a=Reflect.set(e,t,i,s);return e===Qe(s)&&(o?bi(i,r)&&jn(e,"set",t,i):jn(e,"add",t,i)),a}deleteProperty(e,t){const i=$e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&jn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!qn(t)||!Hf.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",Ce(e)?"length":Qi),Reflect.ownKeys(e)}}class Kp extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $p=new kf,Zp=new Kp,Jp=new kf(!0);const tc=n=>n,ra=n=>Reflect.getPrototypeOf(n);function qr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Qe(n),r=Qe(e);t||(bi(e,r)&&Jt(s,"get",e),Jt(s,"get",r));const{has:o}=ra(s),a=i?tc:t?rc:Ir;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Yr(n,e=!1){const t=this.__v_raw,i=Qe(t),s=Qe(n);return e||(bi(n,s)&&Jt(i,"has",n),Jt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Kr(n,e=!1){return n=n.__v_raw,!e&&Jt(Qe(n),"iterate",Qi),Reflect.get(n,"size",n)}function jc(n){n=Qe(n);const e=Qe(this);return ra(e).has.call(e,n)||(e.add(n),jn(e,"add",n,n)),this}function qc(n,e){e=Qe(e);const t=Qe(this),{has:i,get:s}=ra(t);let r=i.call(t,n);r||(n=Qe(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?bi(e,o)&&jn(t,"set",n,e):jn(t,"add",n,e),this}function Yc(n){const e=Qe(this),{has:t,get:i}=ra(e);let s=t.call(e,n);s||(n=Qe(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&jn(e,"delete",n,void 0),r}function Kc(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&jn(n,"clear",void 0,void 0),t}function $r(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Qe(o),l=e?tc:n?rc:Ir;return!n&&Jt(a,"iterate",Qi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Zr(n,e,t){return function(...i){const s=this.__v_raw,r=Qe(s),o=Ps(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tc:e?rc:Ir;return!e&&Jt(r,"iterate",l?Al:Qi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ti(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Qp(){const n={get(r){return qr(this,r)},get size(){return Kr(this)},has:Yr,add:jc,set:qc,delete:Yc,clear:Kc,forEach:$r(!1,!1)},e={get(r){return qr(this,r,!1,!0)},get size(){return Kr(this)},has:Yr,add:jc,set:qc,delete:Yc,clear:Kc,forEach:$r(!1,!0)},t={get(r){return qr(this,r,!0)},get size(){return Kr(this,!0)},has(r){return Yr.call(this,r,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:$r(!0,!1)},i={get(r){return qr(this,r,!0,!0)},get size(){return Kr(this,!0)},has(r){return Yr.call(this,r,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:$r(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Zr(r,!1,!1),t[r]=Zr(r,!0,!1),e[r]=Zr(r,!1,!0),i[r]=Zr(r,!0,!0)}),[n,t,e,i]}const[em,tm,nm,im]=Qp();function nc(n,e){const t=e?n?im:nm:n?tm:em;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const sm={get:nc(!1,!1)},rm={get:nc(!1,!0)},om={get:nc(!0,!1)};const Gf=new WeakMap,Wf=new WeakMap,Xf=new WeakMap,am=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(n){return n.__v_skip||!Object.isExtensible(n)?0:lm(Lp(n))}function es(n){return Lr(n)?n:ic(n,!1,$p,sm,Gf)}function um(n){return ic(n,!1,Jp,rm,Wf)}function jf(n){return ic(n,!0,Zp,om,Xf)}function ic(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=cm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function ts(n){return Lr(n)?ts(n.__v_raw):!!(n&&n.__v_isReactive)}function Lr(n){return!!(n&&n.__v_isReadonly)}function Ho(n){return!!(n&&n.__v_isShallow)}function qf(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function sc(n){return Object.isExtensible(n)&&Rf(n,"__v_skip",!0),n}const Ir=n=>ht(n)?es(n):n,rc=n=>ht(n)?jf(n):n;class Yf{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Jl(()=>e(this._value),()=>Io(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Qe(this);return(!e._cacheable||e.effect.dirty)&&bi(e._value,e._value=e.effect.run())&&Io(e,4),Kf(e),e.effect._dirtyLevel>=2&&Io(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function hm(n,e,t=!1){let i,s;const r=Be(n);return r?(i=n,s=cn):(i=n.get,s=n.set),new Yf(i,s,r||!s,t)}function Kf(n){var e;yi&&Ji&&(n=Qe(n),Ff(Ji,(e=n.dep)!=null?e:n.dep=zf(()=>n.dep=void 0,n instanceof Yf?n:void 0)))}function Io(n,e=4,t){n=Qe(n);const i=n.dep;i&&Bf(i,e)}function Tt(n){return!!(n&&n.__v_isRef===!0)}function gt(n){return Zf(n,!1)}function $f(n){return Zf(n,!0)}function Zf(n,e){return Tt(n)?n:new fm(n,e)}class fm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:Ir(e)}get value(){return Kf(this),this._value}set value(e){const t=this.__v_isShallow||Ho(e)||Lr(e);e=t?e:Qe(e),bi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ir(e),Io(this,4))}}function dm(n){return Tt(n)?n.value:n}const pm={get:(n,e,t)=>dm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Tt(s)&&!Tt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Jf(n){return ts(n)?n:new Proxy(n,pm)}function mm(n){const e=Ce(n)?new Array(n.length):{};for(const t in n)e[t]=_m(n,t);return e}class gm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Xp(Qe(this._object),this._key)}}function _m(n,e,t){const i=n[e];return Tt(i)?i:new gm(n,e,t)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Si(n,e,t,i){try{return i?n(...i):n()}catch(s){oa(s,e,t)}}function vn(n,e,t,i){if(Be(n)){const s=Si(n,e,t,i);return s&&bf(s)&&s.catch(r=>{oa(r,e,t)}),s}if(Ce(n)){const s=[];for(let r=0;r<n.length;r++)s.push(vn(n[r],e,t,i));return s}}function oa(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ri(),Si(l,null,10,[n,o,a]),Ci();return}}vm(n,t,s,i)}function vm(n,e,t,i=!0){console.error(n)}let Dr=!1,wl=!1;const Ht=[];let bn=0;const Ls=[];let fi=null,ji=0;const Qf=Promise.resolve();let oc=null;function ac(n){const e=oc||Qf;return n?e.then(this?n.bind(this):n):e}function xm(n){let e=bn+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,s=Ht[i],r=Nr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function lc(n){(!Ht.length||!Ht.includes(n,Dr&&n.allowRecurse?bn+1:bn))&&(n.id==null?Ht.push(n):Ht.splice(xm(n.id),0,n),ed())}function ed(){!Dr&&!wl&&(wl=!0,oc=Qf.then(nd))}function Mm(n){const e=Ht.indexOf(n);e>bn&&Ht.splice(e,1)}function ym(n){Ce(n)?Ls.push(...n):(!fi||!fi.includes(n,n.allowRecurse?ji+1:ji))&&Ls.push(n),ed()}function $c(n,e,t=Dr?bn+1:0){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i()}}}function td(n){if(Ls.length){const e=[...new Set(Ls)].sort((t,i)=>Nr(t)-Nr(i));if(Ls.length=0,fi){fi.push(...e);return}for(fi=e,ji=0;ji<fi.length;ji++)fi[ji]();fi=null,ji=0}}const Nr=n=>n.id==null?1/0:n.id,Sm=(n,e)=>{const t=Nr(n)-Nr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function nd(n){wl=!1,Dr=!0,Ht.sort(Sm);try{for(bn=0;bn<Ht.length;bn++){const e=Ht[bn];e&&e.active!==!1&&Si(e,null,14)}}finally{bn=0,Ht.length=0,td(),Dr=!1,oc=null,(Ht.length||Ls.length)&&nd()}}function Em(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||ut;f&&(s=t.map(d=>St(d)?d.trim():d)),h&&(s=t.map(Bo))}let a,l=i[a=Ra(e)]||i[a=Ra(Cn(e))];!l&&r&&(l=i[a=Ra($s(e))]),l&&vn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(c,n,6,s)}}function id(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Be(n)){const l=c=>{const u=id(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ht(n)&&i.set(n,null),null):(Ce(r)?r.forEach(l=>o[l]=null):Pt(o,r),ht(n)&&i.set(n,o),o)}function aa(n,e){return!n||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,$s(e))||$e(n,e))}let jt=null,la=null;function Vo(n){const e=jt;return jt=n,la=n&&n.type.__scopeId||null,e}function ca(n){la=n}function ua(){la=null}function Tm(n,e=jt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&au(-1);const r=Vo(e);let o;try{o=n(...s)}finally{Vo(r),i._d&&au(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function La(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=Vo(n);let p,T;try{if(t.shapeFlag&4){const A=s||i,I=A;p=En(c.call(I,A,u,h,d,f,g)),T=a}else{const A=e;p=En(A.length>1?A(h,{attrs:a,slots:o,emit:l}):A(h,null)),T=e.props?a:bm(a)}}catch(A){br.length=0,oa(A,n,1),p=un(ns)}let y=p;if(T&&_!==!1){const A=Object.keys(T),{shapeFlag:I}=y;A.length&&I&7&&(r&&A.some(Yl)&&(T=Am(T,r)),y=Bs(y,T,!1,!0))}return t.dirs&&(y=Bs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),p=y,Vo(m),p}const bm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ea(t))&&((e||(e={}))[t]=n[t]);return e},Am=(n,e)=>{const t={};for(const i in n)(!Yl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function wm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Zc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!aa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zc(i,o,c):!0:!!o;return!1}function Zc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!aa(t,r))return!0}return!1}function Rm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Cm="components",sd=Symbol.for("v-ndc");function Pm(n){return St(n)?Lm(Cm,n,!1)||n:n||sd}function Lm(n,e,t=!0,i=!1){const s=jt||It;if(s){const r=s.type;{const a=bg(r,!1);if(a&&(a===e||a===Cn(e)||a===ia(Cn(e))))return r}const o=Jc(s[n]||r[n],e)||Jc(s.appContext[n],e);return!o&&i?r:o}}function Jc(n,e){return n&&(n[e]||n[Cn(e)]||n[ia(Cn(e))])}const Im=n=>n.__isSuspense;function Dm(n,e){e&&e.pendingBranch?Ce(n)?e.effects.push(...n):e.effects.push(n):ym(n)}const Nm=Symbol.for("v-scx"),Um=()=>Tr(Nm),Jr={};function pn(n,e,t){return rd(n,e,t)}function rd(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=ut){if(e&&r){const w=e;e=(...R)=>{w(...R),I()}}const l=It,c=w=>i===!0?w:$i(w,i===!1?1:void 0);let u,h=!1,f=!1;if(Tt(n)?(u=()=>n.value,h=Ho(n)):ts(n)?(u=()=>c(n),h=!0):Ce(n)?(f=!0,h=n.some(w=>ts(w)||Ho(w)),u=()=>n.map(w=>{if(Tt(w))return w.value;if(ts(w))return c(w);if(Be(w))return Si(w,l,2)})):Be(n)?e?u=()=>Si(n,l,2):u=()=>(d&&d(),vn(n,l,3,[g])):u=cn,e&&i){const w=u;u=()=>$i(w())}let d,g=w=>{d=y.onStop=()=>{Si(w,l,4),d=y.onStop=void 0}},_;if(pa)if(g=cn,e?t&&vn(e,l,3,[u(),f?[]:void 0,g]):u(),s==="sync"){const w=Um();_=w.__watcherHandles||(w.__watcherHandles=[])}else return cn;let m=f?new Array(n.length).fill(Jr):Jr;const p=()=>{if(!(!y.active||!y.dirty))if(e){const w=y.run();(i||h||(f?w.some((R,N)=>bi(R,m[N])):bi(w,m)))&&(d&&d(),vn(e,l,3,[w,m===Jr?void 0:f&&m[0]===Jr?[]:m,g]),m=w)}else y.run()};p.allowRecurse=!!e;let T;s==="sync"?T=p:s==="post"?T=()=>$t(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),T=()=>lc(p));const y=new Jl(u,cn,T),A=Nf(),I=()=>{y.stop(),A&&Kl(A.effects,y)};return e?t?p():m=y.run():s==="post"?$t(y.run.bind(y),l&&l.suspense):y.run(),_&&_.push(I),I}function Om(n,e,t){const i=this.proxy,s=St(n)?n.includes(".")?od(i,n):()=>i[n]:n.bind(i,i);let r;Be(e)?r=e:(r=e.handler,t=e);const o=Hr(this),a=rd(s,r.bind(i),t);return o(),a}function od(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function $i(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Tt(n))$i(n.value,e,t);else if(Ce(n))for(let i=0;i<n.length;i++)$i(n[i],e,t);else if(ta(n)||Ps(n))n.forEach(i=>{$i(i,e,t)});else if(wf(n))for(const i in n)$i(n[i],e,t);return n}function pt(n,e){if(jt===null)return n;const t=ma(jt)||jt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ut]=e[s];r&&(Be(r)&&(r={mounted:r,updated:r}),r.deep&&$i(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ni(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ri(),vn(l,t,8,[n.el,a,n,e]),Ci())}}/*! #__NO_SIDE_EFFECTS__ */function Kn(n,e){return Be(n)?Pt({name:n.name},e,{setup:n}):n}const Do=n=>!!n.type.__asyncLoader,ad=n=>n.type.__isKeepAlive;function Fm(n,e){ld(n,"a",e)}function Bm(n,e){ld(n,"da",e)}function ld(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ha(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ad(s.parent.vnode)&&zm(i,e,t,s),s=s.parent}}function zm(n,e,t,i){const s=ha(e,n,i,!0);cd(()=>{Kl(i[e],s)},t)}function ha(n,e,t=It,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ri();const a=Hr(t),l=vn(e,t,n,o);return a(),Ci(),l});return i?s.unshift(r):s.push(r),r}}const $n=n=>(e,t=It)=>(!pa||n==="sp")&&ha(n,(...i)=>e(...i),t),Hm=$n("bm"),fa=$n("m"),Vm=$n("bu"),km=$n("u"),cc=$n("bum"),cd=$n("um"),Gm=$n("sp"),Wm=$n("rtg"),Xm=$n("rtc");function jm(n,e=It){ha("ec",n,e)}function Ia(n,e,t,i){let s;const r=t;if(Ce(n)||St(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(ht(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}const Rl=n=>n?bd(n)?ma(n)||n.proxy:Rl(n.parent):null,Er=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rl(n.parent),$root:n=>Rl(n.root),$emit:n=>n.emit,$options:n=>uc(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,lc(n.update)}),$nextTick:n=>n.n||(n.n=ac.bind(n.proxy)),$watch:n=>Om.bind(n)}),Da=(n,e)=>n!==ut&&!n.__isScriptSetup&&$e(n,e),qm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Da(i,e))return o[e]=1,i[e];if(s!==ut&&$e(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&$e(c,e))return o[e]=3,r[e];if(t!==ut&&$e(t,e))return o[e]=4,t[e];Cl&&(o[e]=0)}}const u=Er[e];let h,f;if(u)return e==="$attrs"&&Jt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ut&&$e(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,$e(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Da(s,e)?(s[e]=t,!0):i!==ut&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ut&&$e(n,o)||Da(e,o)||(a=r[0])&&$e(a,o)||$e(i,o)||$e(Er,o)||$e(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qc(n){return Ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Cl=!0;function Ym(n){const e=uc(n),t=n.proxy,i=n.ctx;Cl=!1,e.beforeCreate&&eu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:y,unmounted:A,render:I,renderTracked:w,renderTriggered:R,errorCaptured:N,serverPrefetch:S,expose:M,inheritAttrs:F,components:Y,directives:O,filters:Q}=e;if(c&&Km(c,i,null),o)for(const ie in o){const G=o[ie];Be(G)&&(i[ie]=G.bind(t))}if(s){const ie=s.call(t,t);ht(ie)&&(n.data=es(ie))}if(Cl=!0,r)for(const ie in r){const G=r[ie],ue=Be(G)?G.bind(t,t):Be(G.get)?G.get.bind(t,t):cn,he=!Be(G)&&Be(G.set)?G.set.bind(t):cn,ye=wd({get:ue,set:he});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Pe=>ye.value=Pe})}if(a)for(const ie in a)ud(a[ie],i,t,ie);if(l){const ie=Be(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(G=>{tg(G,ie[G])})}u&&eu(u,n,"c");function ee(ie,G){Ce(G)?G.forEach(ue=>ie(ue.bind(t))):G&&ie(G.bind(t))}if(ee(Hm,h),ee(fa,f),ee(Vm,d),ee(km,g),ee(Fm,_),ee(Bm,m),ee(jm,N),ee(Xm,w),ee(Wm,R),ee(cc,T),ee(cd,A),ee(Gm,S),Ce(M))if(M.length){const ie=n.exposed||(n.exposed={});M.forEach(G=>{Object.defineProperty(ie,G,{get:()=>t[G],set:ue=>t[G]=ue})})}else n.exposed||(n.exposed={});I&&n.render===cn&&(n.render=I),F!=null&&(n.inheritAttrs=F),Y&&(n.components=Y),O&&(n.directives=O)}function Km(n,e,t=cn){Ce(n)&&(n=Pl(n));for(const i in n){const s=n[i];let r;ht(s)?"default"in s?r=Tr(s.from||i,s.default,!0):r=Tr(s.from||i):r=Tr(s),Tt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function eu(n,e,t){vn(Ce(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ud(n,e,t,i){const s=i.includes(".")?od(t,i):()=>t[i];if(St(n)){const r=e[n];Be(r)&&pn(s,r)}else if(Be(n))pn(s,n.bind(t));else if(ht(n))if(Ce(n))n.forEach(r=>ud(r,e,t,i));else{const r=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(r)&&pn(s,r,n)}}function uc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),ht(e)&&r.set(e,l),l}function ko(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ko(n,r,t,!0),s&&s.forEach(o=>ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=$m[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const $m={data:tu,props:nu,emits:nu,methods:_r,computed:_r,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:_r,directives:_r,watch:Jm,provide:tu,inject:Zm};function tu(n,e){return e?n?function(){return Pt(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function Zm(n,e){return _r(Pl(n),Pl(e))}function Pl(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function _r(n,e){return n?Pt(Object.create(null),n,e):e}function nu(n,e){return n?Ce(n)&&Ce(e)?[...new Set([...n,...e])]:Pt(Object.create(null),Qc(n),Qc(e??{})):e}function Jm(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function hd(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qm=0;function eg(n,e){return function(i,s=null){Be(i)||(i=Pt({},i)),s!=null&&!ht(s)&&(s=null);const r=hd(),o=new WeakSet;let a=!1;const l=r.app={_uid:Qm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=un(i,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ma(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Is;Is=l;try{return c()}finally{Is=u}}};return l}}let Is=null;function tg(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function Tr(n,e,t=!1){const i=It||jt;if(i||Is){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Is._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}function ng(){return!!(It||jt||Is)}const fd={},dd=()=>Object.create(fd),pd=n=>Object.getPrototypeOf(n)===fd;function ig(n,e,t,i=!1){const s={},r=dd();n.propsDefaults=Object.create(null),md(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:um(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function sg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(aa(n.emitsOptions,f))continue;const d=e[f];if(l)if($e(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Cn(f);s[g]=Ll(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{md(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!$e(e,h)&&((u=$s(h))===h||!$e(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ll(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!$e(e,h))&&(delete r[h],c=!0)}c&&jn(n.attrs,"set","")}function md(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let u;s&&$e(s,u=Cn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:aa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qe(t),c=a||ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ll(s,l,h,c[h],n,!$e(c,h))}}return o}function Ll(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Be(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Hr(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===$s(t))&&(i=!0))}return i}function gd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Be(n)){const u=h=>{l=!0;const[f,d]=gd(h,e,!0);Pt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ht(n)&&i.set(n,Cs),Cs;if(Ce(r))for(let u=0;u<r.length;u++){const h=Cn(r[u]);iu(h)&&(o[h]=ut)}else if(r)for(const u in r){const h=Cn(u);if(iu(h)){const f=r[u],d=o[h]=Ce(f)||Be(f)?{type:f}:Pt({},f);if(d){const g=ou(Boolean,d.type),_=ou(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||$e(d,"default"))&&a.push(h)}}}const c=[o,a];return ht(n)&&i.set(n,c),c}function iu(n){return n[0]!=="$"&&!Sr(n)}function su(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function ru(n,e){return su(n)===su(e)}function ou(n,e){return Ce(e)?e.findIndex(t=>ru(t,n)):Be(e)&&ru(e,n)?0:-1}const _d=n=>n[0]==="_"||n==="$stable",hc=n=>Ce(n)?n.map(En):[En(n)],rg=(n,e,t)=>{if(e._n)return e;const i=Tm((...s)=>hc(e(...s)),t);return i._c=!1,i},vd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(_d(s))continue;const r=n[s];if(Be(r))e[s]=rg(s,r,i);else if(r!=null){const o=hc(r);e[s]=()=>o}}},xd=(n,e)=>{const t=hc(e);n.slots.default=()=>t},og=(n,e)=>{const t=n.slots=dd();if(n.vnode.shapeFlag&32){const i=e._;i?(Pt(t,e),Rf(t,"_",i,!0)):vd(e,t)}else e&&xd(n,e)},ag=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Pt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,vd(e,s)),o=e}else e&&(xd(n,e),o={default:1});if(r)for(const a in s)!_d(a)&&o[a]==null&&delete s[a]};function Il(n,e,t,i,s=!1){if(Ce(n)){n.forEach((f,d)=>Il(f,e&&(Ce(e)?e[d]:e),t,i,s));return}if(Do(i)&&!s)return;const r=i.shapeFlag&4?ma(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,$e(h,c)&&(h[c]=null)):Tt(c)&&(c.value=null)),Be(l))Si(l,a,12,[o,u]);else{const f=St(l),d=Tt(l);if(f||d){const g=()=>{if(n.f){const _=f?$e(h,l)?h[l]:u[l]:l.value;s?Ce(_)&&Kl(_,r):Ce(_)?_.includes(r)||_.push(r):f?(u[l]=[r],$e(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,$e(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,$t(g,t)):g()}}}const $t=Dm;function lg(n){return cg(n)}function cg(n,e){const t=Cf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=cn,insertStaticContent:g}=n,_=(C,P,k,K=null,$=null,re=null,E=void 0,v=null,L=!!P.dynamicChildren)=>{if(C===P)return;C&&!ar(C,P)&&(K=pe(C),Pe(C,$,re,!0),C=null),P.patchFlag===-2&&(L=!1,P.dynamicChildren=null);const{type:D,ref:V,shapeFlag:X}=P;switch(D){case da:m(C,P,k,K);break;case ns:p(C,P,k,K);break;case Ua:C==null&&T(P,k,K,E);break;case zt:Y(C,P,k,K,$,re,E,v,L);break;default:X&1?I(C,P,k,K,$,re,E,v,L):X&6?O(C,P,k,K,$,re,E,v,L):(X&64||X&128)&&D.process(C,P,k,K,$,re,E,v,L,H)}V!=null&&$&&Il(V,C&&C.ref,re,P||C,!P)},m=(C,P,k,K)=>{if(C==null)i(P.el=a(P.children),k,K);else{const $=P.el=C.el;P.children!==C.children&&c($,P.children)}},p=(C,P,k,K)=>{C==null?i(P.el=l(P.children||""),k,K):P.el=C.el},T=(C,P,k,K)=>{[C.el,C.anchor]=g(C.children,P,k,K,C.el,C.anchor)},y=({el:C,anchor:P},k,K)=>{let $;for(;C&&C!==P;)$=f(C),i(C,k,K),C=$;i(P,k,K)},A=({el:C,anchor:P})=>{let k;for(;C&&C!==P;)k=f(C),s(C),C=k;s(P)},I=(C,P,k,K,$,re,E,v,L)=>{P.type==="svg"?E="svg":P.type==="math"&&(E="mathml"),C==null?w(P,k,K,$,re,E,v,L):S(C,P,$,re,E,v,L)},w=(C,P,k,K,$,re,E,v)=>{let L,D;const{props:V,shapeFlag:X,transition:oe,dirs:ne}=C;if(L=C.el=o(C.type,re,V&&V.is,V),X&8?u(L,C.children):X&16&&N(C.children,L,null,K,$,Na(C,re),E,v),ne&&Ni(C,null,K,"created"),R(L,C,C.scopeId,E,K),V){for(const _e in V)_e!=="value"&&!Sr(_e)&&r(L,_e,null,V[_e],re,C.children,K,$,xe);"value"in V&&r(L,"value",null,V.value,re),(D=V.onVnodeBeforeMount)&&Sn(D,K,C)}ne&&Ni(C,null,K,"beforeMount");const se=ug($,oe);se&&oe.beforeEnter(L),i(L,P,k),((D=V&&V.onVnodeMounted)||se||ne)&&$t(()=>{D&&Sn(D,K,C),se&&oe.enter(L),ne&&Ni(C,null,K,"mounted")},$)},R=(C,P,k,K,$)=>{if(k&&d(C,k),K)for(let re=0;re<K.length;re++)d(C,K[re]);if($){let re=$.subTree;if(P===re){const E=$.vnode;R(C,E,E.scopeId,E.slotScopeIds,$.parent)}}},N=(C,P,k,K,$,re,E,v,L=0)=>{for(let D=L;D<C.length;D++){const V=C[D]=v?di(C[D]):En(C[D]);_(null,V,P,k,K,$,re,E,v)}},S=(C,P,k,K,$,re,E)=>{const v=P.el=C.el;let{patchFlag:L,dynamicChildren:D,dirs:V}=P;L|=C.patchFlag&16;const X=C.props||ut,oe=P.props||ut;let ne;if(k&&Ui(k,!1),(ne=oe.onVnodeBeforeUpdate)&&Sn(ne,k,P,C),V&&Ni(P,C,k,"beforeUpdate"),k&&Ui(k,!0),D?M(C.dynamicChildren,D,v,k,K,Na(P,$),re):E||G(C,P,v,null,k,K,Na(P,$),re,!1),L>0){if(L&16)F(v,P,X,oe,k,K,$);else if(L&2&&X.class!==oe.class&&r(v,"class",null,oe.class,$),L&4&&r(v,"style",X.style,oe.style,$),L&8){const se=P.dynamicProps;for(let _e=0;_e<se.length;_e++){const ae=se[_e],ge=X[ae],Le=oe[ae];(Le!==ge||ae==="value")&&r(v,ae,ge,Le,$,C.children,k,K,xe)}}L&1&&C.children!==P.children&&u(v,P.children)}else!E&&D==null&&F(v,P,X,oe,k,K,$);((ne=oe.onVnodeUpdated)||V)&&$t(()=>{ne&&Sn(ne,k,P,C),V&&Ni(P,C,k,"updated")},K)},M=(C,P,k,K,$,re,E)=>{for(let v=0;v<P.length;v++){const L=C[v],D=P[v],V=L.el&&(L.type===zt||!ar(L,D)||L.shapeFlag&70)?h(L.el):k;_(L,D,V,null,K,$,re,E,!0)}},F=(C,P,k,K,$,re,E)=>{if(k!==K){if(k!==ut)for(const v in k)!Sr(v)&&!(v in K)&&r(C,v,k[v],null,E,P.children,$,re,xe);for(const v in K){if(Sr(v))continue;const L=K[v],D=k[v];L!==D&&v!=="value"&&r(C,v,D,L,E,P.children,$,re,xe)}"value"in K&&r(C,"value",k.value,K.value,E)}},Y=(C,P,k,K,$,re,E,v,L)=>{const D=P.el=C?C.el:a(""),V=P.anchor=C?C.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ne}=P;ne&&(v=v?v.concat(ne):ne),C==null?(i(D,k,K),i(V,k,K),N(P.children||[],k,V,$,re,E,v,L)):X>0&&X&64&&oe&&C.dynamicChildren?(M(C.dynamicChildren,oe,k,$,re,E,v),(P.key!=null||$&&P===$.subTree)&&Md(C,P,!0)):G(C,P,k,V,$,re,E,v,L)},O=(C,P,k,K,$,re,E,v,L)=>{P.slotScopeIds=v,C==null?P.shapeFlag&512?$.ctx.activate(P,k,K,E,L):Q(P,k,K,$,re,E,L):J(C,P,L)},Q=(C,P,k,K,$,re,E)=>{const v=C.component=Mg(C,K,$);if(ad(C)&&(v.ctx.renderer=H),yg(v),v.asyncDep){if($&&$.registerDep(v,ee),!C.el){const L=v.subTree=un(ns);p(null,L,P,k)}}else ee(v,C,P,k,$,re,E)},J=(C,P,k)=>{const K=P.component=C.component;if(wm(C,P,k))if(K.asyncDep&&!K.asyncResolved){ie(K,P,k);return}else K.next=P,Mm(K.update),K.effect.dirty=!0,K.update();else P.el=C.el,K.vnode=P},ee=(C,P,k,K,$,re,E)=>{const v=()=>{if(C.isMounted){let{next:V,bu:X,u:oe,parent:ne,vnode:se}=C;{const Ee=yd(C);if(Ee){V&&(V.el=se.el,ie(C,V,E)),Ee.asyncDep.then(()=>{C.isUnmounted||v()});return}}let _e=V,ae;Ui(C,!1),V?(V.el=se.el,ie(C,V,E)):V=se,X&&Lo(X),(ae=V.props&&V.props.onVnodeBeforeUpdate)&&Sn(ae,ne,V,se),Ui(C,!0);const ge=La(C),Le=C.subTree;C.subTree=ge,_(Le,ge,h(Le.el),pe(Le),C,$,re),V.el=ge.el,_e===null&&Rm(C,ge.el),oe&&$t(oe,$),(ae=V.props&&V.props.onVnodeUpdated)&&$t(()=>Sn(ae,ne,V,se),$)}else{let V;const{el:X,props:oe}=P,{bm:ne,m:se,parent:_e}=C,ae=Do(P);if(Ui(C,!1),ne&&Lo(ne),!ae&&(V=oe&&oe.onVnodeBeforeMount)&&Sn(V,_e,P),Ui(C,!0),X&&be){const ge=()=>{C.subTree=La(C),be(X,C.subTree,C,$,null)};ae?P.type.__asyncLoader().then(()=>!C.isUnmounted&&ge()):ge()}else{const ge=C.subTree=La(C);_(null,ge,k,K,C,$,re),P.el=ge.el}if(se&&$t(se,$),!ae&&(V=oe&&oe.onVnodeMounted)){const ge=P;$t(()=>Sn(V,_e,ge),$)}(P.shapeFlag&256||_e&&Do(_e.vnode)&&_e.vnode.shapeFlag&256)&&C.a&&$t(C.a,$),C.isMounted=!0,P=k=K=null}},L=C.effect=new Jl(v,cn,()=>lc(D),C.scope),D=C.update=()=>{L.dirty&&L.run()};D.id=C.uid,Ui(C,!0),D()},ie=(C,P,k)=>{P.component=C;const K=C.vnode.props;C.vnode=P,C.next=null,sg(C,P.props,K,k),ag(C,P.children,k),Ri(),$c(C),Ci()},G=(C,P,k,K,$,re,E,v,L=!1)=>{const D=C&&C.children,V=C?C.shapeFlag:0,X=P.children,{patchFlag:oe,shapeFlag:ne}=P;if(oe>0){if(oe&128){he(D,X,k,K,$,re,E,v,L);return}else if(oe&256){ue(D,X,k,K,$,re,E,v,L);return}}ne&8?(V&16&&xe(D,$,re),X!==D&&u(k,X)):V&16?ne&16?he(D,X,k,K,$,re,E,v,L):xe(D,$,re,!0):(V&8&&u(k,""),ne&16&&N(X,k,K,$,re,E,v,L))},ue=(C,P,k,K,$,re,E,v,L)=>{C=C||Cs,P=P||Cs;const D=C.length,V=P.length,X=Math.min(D,V);let oe;for(oe=0;oe<X;oe++){const ne=P[oe]=L?di(P[oe]):En(P[oe]);_(C[oe],ne,k,null,$,re,E,v,L)}D>V?xe(C,$,re,!0,!1,X):N(P,k,K,$,re,E,v,L,X)},he=(C,P,k,K,$,re,E,v,L)=>{let D=0;const V=P.length;let X=C.length-1,oe=V-1;for(;D<=X&&D<=oe;){const ne=C[D],se=P[D]=L?di(P[D]):En(P[D]);if(ar(ne,se))_(ne,se,k,null,$,re,E,v,L);else break;D++}for(;D<=X&&D<=oe;){const ne=C[X],se=P[oe]=L?di(P[oe]):En(P[oe]);if(ar(ne,se))_(ne,se,k,null,$,re,E,v,L);else break;X--,oe--}if(D>X){if(D<=oe){const ne=oe+1,se=ne<V?P[ne].el:K;for(;D<=oe;)_(null,P[D]=L?di(P[D]):En(P[D]),k,se,$,re,E,v,L),D++}}else if(D>oe)for(;D<=X;)Pe(C[D],$,re,!0),D++;else{const ne=D,se=D,_e=new Map;for(D=se;D<=oe;D++){const Ue=P[D]=L?di(P[D]):En(P[D]);Ue.key!=null&&_e.set(Ue.key,D)}let ae,ge=0;const Le=oe-se+1;let Ee=!1,Me=0;const Ne=new Array(Le);for(D=0;D<Le;D++)Ne[D]=0;for(D=ne;D<=X;D++){const Ue=C[D];if(ge>=Le){Pe(Ue,$,re,!0);continue}let we;if(Ue.key!=null)we=_e.get(Ue.key);else for(ae=se;ae<=oe;ae++)if(Ne[ae-se]===0&&ar(Ue,P[ae])){we=ae;break}we===void 0?Pe(Ue,$,re,!0):(Ne[we-se]=D+1,we>=Me?Me=we:Ee=!0,_(Ue,P[we],k,null,$,re,E,v,L),ge++)}const Ve=Ee?hg(Ne):Cs;for(ae=Ve.length-1,D=Le-1;D>=0;D--){const Ue=se+D,we=P[Ue],x=Ue+1<V?P[Ue+1].el:K;Ne[D]===0?_(null,we,k,x,$,re,E,v,L):Ee&&(ae<0||D!==Ve[ae]?ye(we,k,x,2):ae--)}}},ye=(C,P,k,K,$=null)=>{const{el:re,type:E,transition:v,children:L,shapeFlag:D}=C;if(D&6){ye(C.component.subTree,P,k,K);return}if(D&128){C.suspense.move(P,k,K);return}if(D&64){E.move(C,P,k,H);return}if(E===zt){i(re,P,k);for(let X=0;X<L.length;X++)ye(L[X],P,k,K);i(C.anchor,P,k);return}if(E===Ua){y(C,P,k);return}if(K!==2&&D&1&&v)if(K===0)v.beforeEnter(re),i(re,P,k),$t(()=>v.enter(re),$);else{const{leave:X,delayLeave:oe,afterLeave:ne}=v,se=()=>i(re,P,k),_e=()=>{X(re,()=>{se(),ne&&ne()})};oe?oe(re,se,_e):_e()}else i(re,P,k)},Pe=(C,P,k,K=!1,$=!1)=>{const{type:re,props:E,ref:v,children:L,dynamicChildren:D,shapeFlag:V,patchFlag:X,dirs:oe}=C;if(v!=null&&Il(v,null,k,C,!0),V&256){P.ctx.deactivate(C);return}const ne=V&1&&oe,se=!Do(C);let _e;if(se&&(_e=E&&E.onVnodeBeforeUnmount)&&Sn(_e,P,C),V&6)fe(C.component,k,K);else{if(V&128){C.suspense.unmount(k,K);return}ne&&Ni(C,null,P,"beforeUnmount"),V&64?C.type.remove(C,P,k,$,H,K):D&&(re!==zt||X>0&&X&64)?xe(D,P,k,!1,!0):(re===zt&&X&384||!$&&V&16)&&xe(L,P,k),K&&Ze(C)}(se&&(_e=E&&E.onVnodeUnmounted)||ne)&&$t(()=>{_e&&Sn(_e,P,C),ne&&Ni(C,null,P,"unmounted")},k)},Ze=C=>{const{type:P,el:k,anchor:K,transition:$}=C;if(P===zt){te(k,K);return}if(P===Ua){A(C);return}const re=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(C.shapeFlag&1&&$&&!$.persisted){const{leave:E,delayLeave:v}=$,L=()=>E(k,re);v?v(C.el,re,L):L()}else re()},te=(C,P)=>{let k;for(;C!==P;)k=f(C),s(C),C=k;s(P)},fe=(C,P,k)=>{const{bum:K,scope:$,update:re,subTree:E,um:v}=C;K&&Lo(K),$.stop(),re&&(re.active=!1,Pe(E,C,P,k)),v&&$t(v,P),$t(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},xe=(C,P,k,K=!1,$=!1,re=0)=>{for(let E=re;E<C.length;E++)Pe(C[E],P,k,K,$)},pe=C=>C.shapeFlag&6?pe(C.component.subTree):C.shapeFlag&128?C.suspense.next():f(C.anchor||C.el);let ze=!1;const He=(C,P,k)=>{C==null?P._vnode&&Pe(P._vnode,null,null,!0):_(P._vnode||null,C,P,null,null,null,k),ze||(ze=!0,$c(),td(),ze=!1),P._vnode=C},H={p:_,um:Pe,m:ye,r:Ze,mt:Q,mc:N,pc:G,pbc:M,n:pe,o:n};let et,be;return{render:He,hydrate:et,createApp:eg(He,et)}}function Na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ui({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Md(n,e,t=!1){const i=n.children,s=e.children;if(Ce(i)&&Ce(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),t||Md(o,a)),a.type===da&&(a.el=o.el)}}function hg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function yd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yd(e)}const fg=n=>n.__isTeleport,zt=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),br=[];let gn=null;function vt(n=!1){br.push(gn=n?null:[])}function dg(){br.pop(),gn=br[br.length-1]||null}let Ur=1;function au(n){Ur+=n}function Sd(n){return n.dynamicChildren=Ur>0?gn||Cs:null,dg(),Ur>0&&gn&&gn.push(n),n}function Et(n,e,t,i,s,r){return Sd(ce(n,e,t,i,s,r,!0))}function Ed(n,e,t,i,s){return Sd(un(n,e,t,i,s,!0))}function pg(n){return n?n.__v_isVNode===!0:!1}function ar(n,e){return n.type===e.type&&n.key===e.key}const Td=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Tt(n)||Be(n)?{i:jt,r:n,k:e,f:!!t}:n:null);function ce(n,e=null,t=null,i=0,s=null,r=n===zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Td(e),ref:e&&No(e),scopeId:la,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return a?(fc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),Ur>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const un=mg;function mg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===sd)&&(n=ns),pg(n)){const a=Bs(n,e,!0);return t&&fc(a,t),Ur>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag|=-2,a}if(Ag(n)&&(n=n.__vccOpts),e){e=gg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Pr(a)),ht(l)&&(qf(l)&&!Ce(l)&&(l=Pt({},l)),e.style=Zl(l))}const o=St(n)?1:Im(n)?128:fg(n)?64:ht(n)?4:Be(n)?2:0;return ce(n,e,t,i,s,o,r,!0)}function gg(n){return n?qf(n)||pd(n)?Pt({},n):n:null}function Bs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?_g(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Td(c),ref:e&&e.ref?t&&r?Ce(r)?r.concat(No(e)):[r,No(e)]:No(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==zt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bs(n.ssContent),ssFallback:n.ssFallback&&Bs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function ot(n=" ",e=0){return un(da,null,n,e)}function lu(n="",e=!1){return e?(vt(),Ed(ns,null,n)):un(ns,null,n)}function En(n){return n==null||typeof n=="boolean"?un(ns):Ce(n)?un(zt,null,n.slice()):typeof n=="object"?di(n):un(da,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bs(n)}function fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ce(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!pd(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:jt},t=32):(e=String(e),i&64?(t=16,e=[ot(e)]):t=8);n.children=e,n.shapeFlag|=t}function _g(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pr([e.class,i.class]));else if(s==="style")e.style=Zl([e.style,i.style]);else if(ea(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ce(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Sn(n,e,t,i=null){vn(n,e,7,[t,i])}const vg=hd();let xg=0;function Mg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||vg,r={uid:xg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new If(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gd(i,s),emitsOptions:id(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Em.bind(null,r),n.ce&&n.ce(r),r}let It=null,Go,Dl;{const n=Cf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Go=e("__VUE_INSTANCE_SETTERS__",t=>It=t),Dl=e("__VUE_SSR_SETTERS__",t=>pa=t)}const Hr=n=>{const e=It;return Go(n),n.scope.on(),()=>{n.scope.off(),Go(e)}},cu=()=>{It&&It.scope.off(),Go(null)};function bd(n){return n.vnode.shapeFlag&4}let pa=!1;function yg(n,e=!1){e&&Dl(e);const{props:t,children:i}=n.vnode,s=bd(n);ig(n,t,s,e),og(n,i);const r=s?Sg(n,e):void 0;return e&&Dl(!1),r}function Sg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qm);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Tg(n):null,r=Hr(n);Ri();const o=Si(i,n,0,[n.props,s]);if(Ci(),r(),bf(o)){if(o.then(cu,cu),e)return o.then(a=>{uu(n,a,e)}).catch(a=>{oa(a,n,0)});n.asyncDep=o}else uu(n,o,e)}else Ad(n,e)}function uu(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Jf(e)),Ad(n,t)}let hu;function Ad(n,e,t){const i=n.type;if(!n.render){if(!e&&hu&&!i.render){const s=i.template||uc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pt(Pt({isCustomElement:r,delimiters:a},o),l);i.render=hu(s,c)}}n.render=i.render||cn}{const s=Hr(n);Ri();try{Ym(n)}finally{Ci(),s()}}}const Eg={get(n,e){return Jt(n,"get",""),n[e]}};function Tg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Eg),slots:n.slots,emit:n.emit,expose:e}}function ma(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Jf(sc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Er)return Er[t](n)},has(e,t){return t in e||t in Er}}))}function bg(n,e=!0){return Be(n)?n.displayName||n.name:n.name||e&&n.__name}function Ag(n){return Be(n)&&"__vccOpts"in n}const wd=(n,e)=>hm(n,e,pa),wg="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rg="http://www.w3.org/2000/svg",Cg="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,fu=pi&&pi.createElement("template"),Pg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?pi.createElementNS(Rg,n):e==="mathml"?pi.createElementNS(Cg,n):pi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>pi.createTextNode(n),createComment:n=>pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{fu.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=fu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Lg=Symbol("_vtc");function Ig(n,e,t){const i=n[Lg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const du=Symbol("_vod"),Dg=Symbol("_vsh"),Ng=Symbol(""),Ug=/(^|;)\s*display\s*:/;function Og(n,e,t){const i=n.style,s=St(t);let r=!1;if(t&&!s){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Uo(i,a,"")}else for(const o in e)t[o]==null&&Uo(i,o,"");for(const o in t)o==="display"&&(r=!0),Uo(i,o,t[o])}else if(s){if(e!==t){const o=i[Ng];o&&(t+=";"+o),i.cssText=t,r=Ug.test(t)}}else e&&n.removeAttribute("style");du in n&&(n[du]=r?i.display:"",n[Dg]&&(i.display="none"))}const pu=/\s*!important$/;function Uo(n,e,t){if(Ce(t))t.forEach(i=>Uo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fg(n,e);pu.test(t)?n.setProperty($s(i),t.replace(pu,""),"important"):n[i]=t}}const mu=["Webkit","Moz","ms"],Oa={};function Fg(n,e){const t=Oa[e];if(t)return t;let i=Cn(e);if(i!=="filter"&&i in n)return Oa[e]=i;i=ia(i);for(let s=0;s<mu.length;s++){const r=mu[s]+i;if(r in n)return Oa[e]=r}return e}const gu="http://www.w3.org/1999/xlink";function Bg(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(gu,e.slice(6,e.length)):n.setAttributeNS(gu,e,t);else{const r=zp(e);t==null||r&&!Pf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function zg(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Pf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function qi(n,e,t,i){n.addEventListener(e,t,i)}function Hg(n,e,t,i){n.removeEventListener(e,t,i)}const _u=Symbol("_vei");function Vg(n,e,t,i,s=null){const r=n[_u]||(n[_u]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=kg(e);if(i){const c=r[e]=Xg(i,s);qi(n,a,c,l)}else o&&(Hg(n,a,o,l),r[e]=void 0)}}const vu=/(?:Once|Passive|Capture)$/;function kg(n){let e;if(vu.test(n)){e={};let i;for(;i=n.match(vu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$s(n.slice(2)),e]}let Fa=0;const Gg=Promise.resolve(),Wg=()=>Fa||(Gg.then(()=>Fa=0),Fa=Date.now());function Xg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;vn(jg(i,t.value),e,5,[i])};return t.value=n,t.attached=Wg(),t}function jg(n,e){if(Ce(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const xu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qg=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Ig(n,i,c):e==="style"?Og(n,t,i):ea(e)?Yl(e)||Vg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yg(n,e,i,c))?zg(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bg(n,e,i,c))};function Yg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&xu(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xu(e)&&St(t)?!1:e in n}const Wo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ce(e)?t=>Lo(e,t):e};function Kg(n){n.target.composing=!0}function Mu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ds=Symbol("_assign"),_t={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ds]=Wo(s);const r=i||s.props&&s.props.type==="number";qi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Bo(a)),n[Ds](a)}),t&&qi(n,"change",()=>{n.value=n.value.trim()}),e||(qi(n,"compositionstart",Kg),qi(n,"compositionend",Mu),qi(n,"change",Mu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n[Ds]=Wo(r),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Bo(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},$g={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=ta(e);qi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Bo(Xo(o)):Xo(o));n[Ds](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,ac(()=>{n._assigning=!1})}),n[Ds]=Wo(i)},mounted(n,{value:e,modifiers:{number:t}}){yu(n,e)},beforeUpdate(n,e,t){n[Ds]=Wo(t)},updated(n,{value:e,modifiers:{number:t}}){n._assigning||yu(n,e)}};function yu(n,e,t){const i=n.multiple,s=Ce(e);if(!(i&&!s&&!ta(e))){for(let r=0,o=n.options.length;r<o;r++){const a=n.options[r],l=Xo(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=Vp(e,l)>-1}else a.selected=e.has(l);else if(sa(Xo(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Xo(n){return"_value"in n?n._value:n.value}const Zg=Pt({patchProp:qg},Pg);let Su;function Jg(){return Su||(Su=lg(Zg))}const Qg=(...n)=>{const e=Jg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=t_(i);if(!s)return;const r=e._component;!Be(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,e_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function e_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function t_(n){return St(n)?document.querySelector(n):n}var n_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Rd;const ga=n=>Rd=n,Cd=Symbol();function Nl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ar;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ar||(Ar={}));function i_(){const n=Df(!0),e=n.run(()=>gt({}));let t=[],i=[];const s=sc({install(r){ga(s),s._a=r,r.provide(Cd,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!n_?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Pd=()=>{};function Eu(n,e,t,i=Pd){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Nf()&&Gp(s),s}function os(n,...e){n.slice().forEach(t=>{t(...e)})}const s_=n=>n();function Ul(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Nl(s)&&Nl(i)&&n.hasOwnProperty(t)&&!Tt(i)&&!ts(i)?n[t]=Ul(s,i):n[t]=i}return n}const r_=Symbol();function o_(n){return!Nl(n)||!n.hasOwnProperty(r_)}const{assign:ci}=Object;function a_(n){return!!(Tt(n)&&n.effect)}function l_(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=mm(t.state.value[n]);return ci(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=sc(wd(()=>{ga(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=Ld(n,c,e,t,i,!0),l}function Ld(n,e,t={},i,s,r){let o;const a=ci({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),gt({});let _;function m(N){let S;c=u=!1,typeof N=="function"?(N(i.state.value[n]),S={type:Ar.patchFunction,storeId:n,events:d}):(Ul(i.state.value[n],N),S={type:Ar.patchObject,payload:N,storeId:n,events:d});const M=_=Symbol();ac().then(()=>{_===M&&(c=!0)}),u=!0,os(h,S,i.state.value[n])}const p=r?function(){const{state:S}=t,M=S?S():{};this.$patch(F=>{ci(F,M)})}:Pd;function T(){o.stop(),h=[],f=[],i._s.delete(n)}function y(N,S){return function(){ga(i);const M=Array.from(arguments),F=[],Y=[];function O(ee){F.push(ee)}function Q(ee){Y.push(ee)}os(f,{args:M,name:N,store:I,after:O,onError:Q});let J;try{J=S.apply(this&&this.$id===n?this:I,M)}catch(ee){throw os(Y,ee),ee}return J instanceof Promise?J.then(ee=>(os(F,ee),ee)).catch(ee=>(os(Y,ee),Promise.reject(ee))):(os(F,J),J)}}const A={_p:i,$id:n,$onAction:Eu.bind(null,f),$patch:m,$reset:p,$subscribe(N,S={}){const M=Eu(h,N,S.detached,()=>F()),F=o.run(()=>pn(()=>i.state.value[n],Y=>{(S.flush==="sync"?u:c)&&N({storeId:n,type:Ar.direct,events:d},Y)},ci({},l,S)));return M},$dispose:T},I=es(A);i._s.set(n,I);const R=(i._a&&i._a.runWithContext||s_)(()=>i._e.run(()=>(o=Df()).run(e)));for(const N in R){const S=R[N];if(Tt(S)&&!a_(S)||ts(S))r||(g&&o_(S)&&(Tt(S)?S.value=g[N]:Ul(S,g[N])),i.state.value[n][N]=S);else if(typeof S=="function"){const M=y(N,S);R[N]=M,a.actions[N]=S}}return ci(I,R),ci(Qe(I),R),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:N=>{m(S=>{ci(S,N)})}}),i._p.forEach(N=>{ci(I,o.run(()=>N({store:I,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(I.$state,g),c=!0,u=!0,I}function Id(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function o(a,l){const c=ng();return a=a||(c?Tr(Cd,null):null),a&&ga(a),a=Rd,a._s.has(i)||(r?Ld(i,e,s,a):l_(i,s,a)),a._s.get(i)}return o.$id=i,o}const Dd=Id("selection",()=>({widget:$f(null)}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="164",as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},c_=0,Tu=1,u_=2,Nd=1,h_=2,kn=3,Yn=0,Zt=1,An=2,Ei=0,Ns=1,bu=2,Au=3,wu=4,f_=5,Yi=100,d_=101,p_=102,m_=103,g_=104,__=200,v_=201,x_=202,M_=203,Ol=204,Fl=205,y_=206,S_=207,E_=208,T_=209,b_=210,A_=211,w_=212,R_=213,C_=214,P_=0,L_=1,I_=2,jo=3,D_=4,N_=5,U_=6,O_=7,pc=0,F_=1,B_=2,Ti=0,z_=1,H_=2,V_=3,k_=4,G_=5,W_=6,X_=7,Ru="attached",j_="detached",Ud=300,zs=301,Hs=302,Bl=303,zl=304,_a=306,Vs=1e3,vi=1001,qo=1002,qt=1003,Od=1004,vr=1005,sn=1006,Oo=1007,Wn=1008,Ai=1009,q_=1010,Y_=1011,Fd=1012,Bd=1013,ks=1014,Rn=1015,va=1016,zd=1017,Hd=1018,Vr=1020,K_=35902,$_=1021,Z_=1022,_n=1023,J_=1024,Q_=1025,Us=1026,Or=1027,Vd=1028,kd=1029,e0=1030,Gd=1031,Wd=1033,Ba=33776,za=33777,Ha=33778,Va=33779,Cu=35840,Pu=35841,Lu=35842,Iu=35843,Du=36196,Nu=37492,Uu=37496,Ou=37808,Fu=37809,Bu=37810,zu=37811,Hu=37812,Vu=37813,ku=37814,Gu=37815,Wu=37816,Xu=37817,ju=37818,qu=37819,Yu=37820,Ku=37821,ka=36492,$u=36494,Zu=36495,t0=36283,Ju=36284,Qu=36285,eh=36286,Fr=2300,Gs=2301,Ga=2302,th=2400,nh=2401,ih=2402,n0=2500,i0=0,Xd=1,Hl=2,s0=3200,r0=3201,mc=0,o0=1,_i="",Wt="srgb",Dt="srgb-linear",gc="display-p3",xa="display-p3-linear",Yo="linear",ct="srgb",Ko="rec709",$o="p3",cs=7680,sh=519,a0=512,l0=513,c0=514,jd=515,u0=516,h0=517,f0=518,d0=519,Vl=35044,rh="300 es",Xn=2e3,Zo=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oh=1234567;const wr=Math.PI/180,Ws=180/Math.PI;function xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function _c(n,e){return(n%e+e)%e}function p0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function m0(n,e,t){return n!==e?(t-n)/(e-n):0}function Rr(n,e,t){return(1-t)*n+t*e}function g0(n,e,t,i){return Rr(n,e,1-Math.exp(-t*i))}function _0(n,e=1){return e-Math.abs(_c(n,e*2)-e)}function v0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function x0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function M0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function y0(n,e){return n+Math.random()*(e-n)}function S0(n){return n*(.5-Math.random())}function E0(n){n!==void 0&&(oh=n);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T0(n){return n*wr}function b0(n){return n*Ws}function A0(n){return(n&n-1)===0&&n!==0}function w0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function R0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function C0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qd={DEG2RAD:wr,RAD2DEG:Ws,generateUUID:xn,clamp:Lt,euclideanModulo:_c,mapLinear:p0,inverseLerp:m0,lerp:Rr,damp:g0,pingpong:_0,smoothstep:v0,smootherstep:x0,randInt:M0,randFloat:y0,randFloatSpread:S0,seededRandom:E0,degToRad:T0,radToDeg:b0,isPowerOfTwo:A0,ceilPowerOfTwo:w0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:C0,normalize:it,denormalize:mn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],y=s[4],A=s[7],I=s[2],w=s[5],R=s[8];return r[0]=o*_+a*T+l*I,r[3]=o*m+a*y+l*w,r[6]=o*p+a*A+l*R,r[1]=c*_+u*T+h*I,r[4]=c*m+u*y+h*w,r[7]=c*p+u*A+h*R,r[2]=f*_+d*T+g*I,r[5]=f*m+d*y+g*w,r[8]=f*p+d*A+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Xe;function Yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function P0(){const n=Br("canvas");return n.style.display="block",n}const ah={};function Kd(n){n in ah||(ah[n]=!0,console.warn(n))}const lh=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[Dt]:{transfer:Yo,primaries:Ko,toReference:n=>n,fromReference:n=>n},[Wt]:{transfer:ct,primaries:Ko,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xa]:{transfer:Yo,primaries:$o,toReference:n=>n.applyMatrix3(ch),fromReference:n=>n.applyMatrix3(lh)},[gc]:{transfer:ct,primaries:$o,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ch),fromReference:n=>n.applyMatrix3(lh).convertLinearToSRGB()}},L0=new Set([Dt,xa]),nt={enabled:!0,_workingColorSpace:Dt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!L0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Qr[e].toReference,s=Qr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qr[n].primaries},getTransfer:function(n){return n===_i?Yo:Qr[n].transfer}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class I0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Br("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Os(t[i]/255)*255):t[i]=Os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D0=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N0=0;class Ct extends rs{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=vi,s=vi,r=sn,o=Wn,a=_n,l=Ai,c=Ct.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=xn(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ud;Ct.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,A=(d+1)/2,I=(p+1)/2,w=(u+f)/4,R=(h+_)/4,N=(g+m)/4;return y>A&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=R/i):A>I?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=w/s,r=N/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=N/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U0 extends rs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ct(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends U0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zd extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O0 extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),w=Math.atan2(I,p*T);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}const A=a*T;if(l=l*m+f*A,c=c*m+d*A,u=u*m+g*A,h=h*m+_*A,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new U,uh=new Pn;class Zn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),to.subVectors(this.max,lr),hs.subVectors(e.a,lr),fs.subVectors(e.b,lr),ds.subVectors(e.c,lr),ni.subVectors(fs,hs),ii.subVectors(ds,fs),Oi.subVectors(hs,ds);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Oi.z,Oi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Oi.z,0,-Oi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Oi.y,Oi.x,0];return!Ya(t,hs,fs,ds,to)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,hs,fs,ds,to))?!1:(no.crossVectors(ni,ii),t=[no.x,no.y,no.z],Ya(t,hs,fs,ds,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,eo=new Zn,hs=new U,fs=new U,ds=new U,ni=new U,ii=new U,Oi=new U,lr=new U,to=new U,no=new U,Fi=new U;function Ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fi.fromArray(n,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const F0=new Zn,cr=new U,Ka=new U;class Ln{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):F0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ka)),this.expandByPoint(cr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new U,$a=new U,io=new U,si=new U,Za=new U,so=new U,Ja=new U;class kr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$a.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),si.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=si.dot(this.direction),l=-si.dot(io),c=si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($a).addScaledVector(io,f),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,s,r){Za.subVectors(t,e),so.subVectors(i,e),Ja.crossVectors(Za,so);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(si,so));if(l<0)return null;const c=a*this.direction.dot(Za.cross(si));if(c<0||l+c>o)return null;const u=-a*si.dot(Ja);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,z0)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ri.crossVectors(i,en),ri.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ri.crossVectors(i,en)),ri.normalize(),ro.crossVectors(en,ri),s[0]=ri.x,s[4]=ro.x,s[8]=en.x,s[1]=ri.y,s[5]=ro.y,s[9]=en.y,s[2]=ri.z,s[6]=ro.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],y=i[7],A=i[11],I=i[15],w=s[0],R=s[4],N=s[8],S=s[12],M=s[1],F=s[5],Y=s[9],O=s[13],Q=s[2],J=s[6],ee=s[10],ie=s[14],G=s[3],ue=s[7],he=s[11],ye=s[15];return r[0]=o*w+a*M+l*Q+c*G,r[4]=o*R+a*F+l*J+c*ue,r[8]=o*N+a*Y+l*ee+c*he,r[12]=o*S+a*O+l*ie+c*ye,r[1]=u*w+h*M+f*Q+d*G,r[5]=u*R+h*F+f*J+d*ue,r[9]=u*N+h*Y+f*ee+d*he,r[13]=u*S+h*O+f*ie+d*ye,r[2]=g*w+_*M+m*Q+p*G,r[6]=g*R+_*F+m*J+p*ue,r[10]=g*N+_*Y+m*ee+p*he,r[14]=g*S+_*O+m*ie+p*ye,r[3]=T*w+y*M+A*Q+I*G,r[7]=T*R+y*F+A*J+I*ue,r[11]=T*N+y*Y+A*ee+I*he,r[15]=T*S+y*O+A*ie+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,A=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,I=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*T+i*y+s*A+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=T*R,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*R,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*R,e[4]=y*R,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*R,e[8]=A*R,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*R,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*R,e[12]=I*R,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*R,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,T=l*c,y=l*u,A=l*h,I=i.x,w=i.y,R=i.z;return s[0]=(1-(_+p))*I,s[1]=(d+A)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(d-A)*w,s[5]=(1-(f+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+y)*R,s[9]=(m-T)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const c=1/r,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===Xn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===Xn)g=(o+r)*h,_=-2*h;else if(a===Zo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new U,fn=new je,B0=new U(0,0,0),z0=new U(1,1,1),ri=new U,ro=new U,en=new U,hh=new je,fh=new Pn;class yn{constructor(e=0,t=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H0=0;const dh=new U,ms=new Pn,Bn=new je,oo=new U,ur=new U,V0=new U,k0=new Pn,ph=new U(1,0,0),mh=new U(0,1,0),gh=new U(0,0,1),_h={type:"added"},G0={type:"removed"},gs={type:"childadded",child:null},Qa={type:"childremoved",child:null};class mt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new yn,i=new Pn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Xe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(ur,oo,this.up):Bn.lookAt(oo,ur,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(Bn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G0),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new U,zn=new U,el=new U,Hn=new U,_s=new U,vs=new U,vh=new U,tl=new U,nl=new U,il=new U;class wn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),zn.subVectors(i,t),el.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(zn),l=dn.dot(el),c=zn.dot(zn),u=zn.dot(el),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),zn.subVectors(e,t),dn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),dn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,i),vs.subVectors(r,i),tl.subVectors(e,i);const l=_s.dot(tl),c=vs.dot(tl);if(l<=0&&c<=0)return t.copy(i);nl.subVectors(e,s);const u=_s.dot(nl),h=vs.dot(nl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_s,o);il.subVectors(e,r);const d=_s.dot(il),g=vs.dot(il);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(vs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return vh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(vh,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=_c(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=sl(o,r,e+1/3),this.g=sl(o,r,e),this.b=sl(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return nt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Lt(Bt.r*255,0,255))*65536+Math.round(Lt(Bt.g*255,0,255))*256+Math.round(Lt(Bt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Wt){nt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(ao);const i=Rr(oi.h,ao.h,t),s=Rr(oi.s,ao.s,t),r=Rr(oi.l,ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Re;Re.NAMES=Qd;let W0=0;class Mn extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Ns,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Fl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new U,lo=new Ae;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}}class ep extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tp extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let X0=0;const an=new je,rl=new mt,xs=new U,tn=new Zn,hr=new Zn,Rt=new U;class Nt extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?tp:ep)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(tn.min,hr.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,hr.max),tn.expandByPoint(Rt)):(tn.expandByPoint(hr.min),tn.expandByPoint(hr.max))}tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Rt.add(xs)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new U,l[N]=new U;const c=new U,u=new U,h=new U,f=new Ae,d=new Ae,g=new Ae,_=new U,m=new U;function p(N,S,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),a[N].add(_),a[S].add(_),a[M].add(_),l[N].add(m),l[S].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,S=T.length;N<S;++N){const M=T[N],F=M.start,Y=M.count;for(let O=F,Q=F+Y;O<Q;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new U,A=new U,I=new U,w=new U;function R(N){I.fromBufferAttribute(s,N),w.copy(I);const S=a[N];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),A.crossVectors(w,S);const F=A.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,F)}for(let N=0,S=T.length;N<S;++N){const M=T[N],F=M.start,Y=M.count;for(let O=F,Q=F+Y;O<Q;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xh=new je,Bi=new kr,co=new Ln,Mh=new U,Ms=new U,ys=new U,Ss=new U,ol=new U,uo=new U,ho=new Ae,fo=new Ae,po=new Ae,yh=new U,Sh=new U,Eh=new U,mo=new U,go=new U;class Yt extends mt{constructor(e=new Nt,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ol.fromBufferAttribute(h,e),o?uo.addScaledVector(ol,u):uo.addScaledVector(ol.sub(t),u))}t.add(uo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(co.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(co,Mh)===null||Bi.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(xh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(xh),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let A=T,I=y;A<I;A+=3){const w=a.getX(A),R=a.getX(A+1),N=a.getX(A+2);s=_o(this,p,e,i,c,u,h,w,R,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);s=_o(this,o,e,i,c,u,h,T,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let A=T,I=y;A<I;A+=3){const w=A,R=A+1,N=A+2;s=_o(this,p,e,i,c,u,h,w,R,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,y=m+1,A=m+2;s=_o(this,o,e,i,c,u,h,T,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function j0(n,e,t,i,s,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Yn,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ms),n.getVertexPosition(l,ys),n.getVertexPosition(c,Ss);const u=j0(n,e,t,i,Ms,ys,Ss,mo);if(u){s&&(ho.fromBufferAttribute(s,a),fo.fromBufferAttribute(s,l),po.fromBufferAttribute(s,c),u.uv=wn.getInterpolation(mo,Ms,ys,Ss,ho,fo,po,new Ae)),r&&(ho.fromBufferAttribute(r,a),fo.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),u.uv1=wn.getInterpolation(mo,Ms,ys,Ss,ho,fo,po,new Ae)),o&&(yh.fromBufferAttribute(o,a),Sh.fromBufferAttribute(o,l),Eh.fromBufferAttribute(o,c),u.normal=wn.getInterpolation(mo,Ms,ys,Ss,yh,Sh,Eh,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};wn.getNormal(Ms,ys,Ss,h.normal),u.face=h}return u}class Zs extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(_,m,p,T,y,A,I,w,R,N,S){const M=A/R,F=I/N,Y=A/2,O=I/2,Q=w/2,J=R+1,ee=N+1;let ie=0,G=0;const ue=new U;for(let he=0;he<ee;he++){const ye=he*F-O;for(let Pe=0;Pe<J;Pe++){const Ze=Pe*M-Y;ue[_]=Ze*T,ue[m]=ye*y,ue[p]=Q,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Pe/R),h.push(1-he/N),ie+=1}}for(let he=0;he<N;he++)for(let ye=0;ye<R;ye++){const Pe=f+ye+J*he,Ze=f+ye+J*(he+1),te=f+(ye+1)+J*(he+1),fe=f+(ye+1)+J*he;l.push(Pe,Ze,fe),l.push(Ze,te,fe),G+=6}a.addGroup(d,G,S),d+=G,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const s in i)e[s]=i[s]}return e}function q0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Y0={clone:Xs,merge:Gt};var K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ip extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new U,Th=new Ae,bh=new Ae;class Xt extends ip{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Th,bh),t.subVectors(bh,Th)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Z0 extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Es,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Es,Ts,e,t);r.layers=this.layers,this.add(r);const o=new Xt(Es,Ts,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Es,Ts,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sp extends Ct{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J0 extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zs(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Ei});r.uniforms.tEquirect.value=t;const o=new Yt(s,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=sn),new Z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const al=new U,Q0=new U,ev=new Xe;class mi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=al.subVectors(i,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ev.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ln,vo=new U;class vc{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],y=s[14],A=s[15];if(i[0].setComponents(l-r,f-c,m-d,A-p).normalize(),i[1].setComponents(l+r,f+c,m+d,A+p).normalize(),i[2].setComponents(l+o,f+u,m+g,A+T).normalize(),i[3].setComponents(l-o,f-u,m-g,A-T).normalize(),i[4].setComponents(l-a,f-h,m-_,A-y).normalize(),t===Xn)i[5].setComponents(l+a,f+h,m+_,A+y).normalize();else if(t===Zo)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function tv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Gr extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let y=0;y<c;y++){const A=y*h-r;g.push(A,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const y=T+c*p,A=T+c*(p+1),I=T+1+c*(p+1),w=T+1+c*p;d.push(y,A,w),d.push(A,I,w)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.widthSegments,e.heightSegments)}}var nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iv=`#ifdef USE_ALPHAHASH
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
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
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
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bv=`#define PI 3.141592653589793
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
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dv=`
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
}`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gv=`#ifdef USE_GRADIENTMAP
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
}`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
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
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
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
#endif`,ex=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,cM=`#define DISTANCE
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
}`,uM=`#define DISTANCE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,MM=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,TM=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,wM=`#define TOON
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
}`,RM=`#define TOON
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
}`,CM=`uniform float size;
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
}`,PM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,IM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:nv,alphahash_pars_fragment:iv,alphamap_fragment:sv,alphamap_pars_fragment:rv,alphatest_fragment:ov,alphatest_pars_fragment:av,aomap_fragment:lv,aomap_pars_fragment:cv,batching_pars_vertex:uv,batching_vertex:hv,begin_vertex:fv,beginnormal_vertex:dv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:_v,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:Mv,color_fragment:yv,color_pars_fragment:Sv,color_pars_vertex:Ev,color_vertex:Tv,common:bv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:wv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Cv,emissivemap_fragment:Pv,emissivemap_pars_fragment:Lv,colorspace_fragment:Iv,colorspace_pars_fragment:Dv,envmap_fragment:Nv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Ov,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Yv,envmap_vertex:Bv,fog_vertex:zv,fog_pars_vertex:Hv,fog_fragment:Vv,fog_pars_fragment:kv,gradientmap_pars_fragment:Gv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:jv,lights_pars_begin:qv,lights_toon_fragment:Kv,lights_toon_pars_fragment:$v,lights_phong_fragment:Zv,lights_phong_pars_fragment:Jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:ux,map_particle_pars_fragment:hx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:dx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:vx,normal_fragment_begin:xx,normal_fragment_maps:Mx,normal_pars_fragment:yx,normal_pars_vertex:Sx,normal_vertex:Ex,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Lx,project_vertex:Ix,dithering_fragment:Dx,dithering_pars_fragment:Nx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Bx,shadowmap_vertex:zx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:kx,skinning_vertex:Gx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:jx,tonemapping_fragment:qx,tonemapping_pars_fragment:Yx,transmission_fragment:Kx,transmission_pars_fragment:$x,uv_pars_fragment:Zx,uv_pars_vertex:Jx,uv_vertex:Qx,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:sM,cube_vert:rM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distanceRGBA_vert:cM,distanceRGBA_frag:uM,equirect_vert:hM,equirect_frag:fM,linedashed_vert:dM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:vM,meshmatcap_vert:xM,meshmatcap_frag:MM,meshnormal_vert:yM,meshnormal_frag:SM,meshphong_vert:EM,meshphong_frag:TM,meshphysical_vert:bM,meshphysical_frag:AM,meshtoon_vert:wM,meshtoon_frag:RM,points_vert:CM,points_frag:PM,shadow_vert:LM,shadow_frag:IM,sprite_vert:DM,sprite_frag:NM},me={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Tn={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Tn.physical={uniforms:Gt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const xo={r:0,b:0,g:0},Hi=new yn,UM=new je;function OM(n,e,t,i,s,r,o){const a=new Re(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const A=g(T);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(T,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===_a)?(u===void 0&&(u=new Yt(new Zs(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Xs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Hi)),u.material.toneMapped=nt.getTransfer(A.colorSpace)!==ct,(h!==A||f!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Yt(new Gr(2,2),new wi({name:"BackgroundMaterial",uniforms:Xs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,y){T.getRGB(xo,np(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function FM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,F,Y,O,Q){let J=!1;const ee=h(O,Y,F);r!==ee&&(r=ee,c(r.object)),J=d(M,O,Y,Q),J&&g(M,O,Y,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,A(M,F,Y,O),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,F,Y){const O=Y.wireframe===!0;let Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let J=Q[F.id];J===void 0&&(J={},Q[F.id]=J);let ee=J[O];return ee===void 0&&(ee=f(l()),J[O]=ee),ee}function f(M){const F=[],Y=[],O=[];for(let Q=0;Q<t;Q++)F[Q]=0,Y[Q]=0,O[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,F,Y,O){const Q=r.attributes,J=F.attributes;let ee=0;const ie=Y.getAttributes();for(const G in ie)if(ie[G].location>=0){const he=Q[G];let ye=J[G];if(ye===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;ee++}return r.attributesNum!==ee||r.index!==O}function g(M,F,Y,O){const Q={},J=F.attributes;let ee=0;const ie=Y.getAttributes();for(const G in ie)if(ie[G].location>=0){let he=J[G];he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),Q[G]=ye,ee++}r.attributes=Q,r.attributesNum=ee,r.index=O}function _(){const M=r.newAttributes;for(let F=0,Y=M.length;F<Y;F++)M[F]=0}function m(M){p(M,0)}function p(M,F){const Y=r.newAttributes,O=r.enabledAttributes,Q=r.attributeDivisors;Y[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),Q[M]!==F&&(n.vertexAttribDivisor(M,F),Q[M]=F)}function T(){const M=r.newAttributes,F=r.enabledAttributes;for(let Y=0,O=F.length;Y<O;Y++)F[Y]!==M[Y]&&(n.disableVertexAttribArray(Y),F[Y]=0)}function y(M,F,Y,O,Q,J,ee){ee===!0?n.vertexAttribIPointer(M,F,Y,Q,J):n.vertexAttribPointer(M,F,Y,O,Q,J)}function A(M,F,Y,O){_();const Q=O.attributes,J=Y.getAttributes(),ee=F.defaultAttributeValues;for(const ie in J){const G=J[ie];if(G.location>=0){let ue=Q[ie];if(ue===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const he=ue.normalized,ye=ue.itemSize,Pe=e.get(ue);if(Pe===void 0)continue;const Ze=Pe.buffer,te=Pe.type,fe=Pe.bytesPerElement,xe=te===n.INT||te===n.UNSIGNED_INT||ue.gpuType===Bd;if(ue.isInterleavedBufferAttribute){const pe=ue.data,ze=pe.stride,He=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let H=0;H<G.locationSize;H++)p(G.location+H,pe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let H=0;H<G.locationSize;H++)m(G.location+H);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let H=0;H<G.locationSize;H++)y(G.location+H,ye/G.locationSize,te,he,ze*fe,(He+ye/G.locationSize*H)*fe,xe)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)p(G.location+pe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let pe=0;pe<G.locationSize;pe++)y(G.location+pe,ye/G.locationSize,te,he,ye*fe,ye/G.locationSize*pe*fe,xe)}}else if(ee!==void 0){const he=ee[ie];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}T()}function I(){N();for(const M in i){const F=i[M];for(const Y in F){const O=F[Y];for(const Q in O)u(O[Q].object),delete O[Q];delete F[Y]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const F=i[M.id];for(const Y in F){const O=F[Y];for(const Q in O)u(O[Q].object),delete O[Q];delete F[Y]}delete i[M.id]}function R(M){for(const F in i){const Y=i[F];if(Y[M.id]===void 0)continue;const O=Y[M.id];for(const Q in O)u(O[Q].object),delete O[Q];delete Y[M.id]}}function N(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function BM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==_n&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ai&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Rn&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:A,maxSamples:I}}function HM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new mi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,y=T*4;let A=p.clippingState||null;l.value=A,A=u(g,f,y,d);for(let I=0;I!==y;++I)A[I]=t[I];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,A=d;y!==_;++y,A+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function VM(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=zs:a===zl&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===zl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class xc extends ip{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=4,Ah=[.125,.215,.35,.446,.526,.582],Ki=20,ll=new xc,wh=new Re;let cl=null,ul=0,hl=0,fl=!1;const Gi=(1+Math.sqrt(5))/2,bs=1/Gi,Rh=[new U(-Gi,bs,0),new U(Gi,bs,0),new U(-bs,0,Gi),new U(bs,0,Gi),new U(0,Gi,-bs),new U(0,Gi,bs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,ul,hl),this._renderer.xr.enabled=fl,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:va,format:_n,colorSpace:Dt,depthBuffer:!1},s=Ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kM(r)),this._blurMaterial=GM(r,e,t)}return s}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,i,s){const a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wh),u.toneMapping=Ti,u.autoClear=!1;const d=new xi({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Yt(new Zs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(wh),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Mo(s,T*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===zs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rh[(s-r-1)%Rh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let T=0;for(let R=0;R<Ki;++R){const N=R/_,S=Math.exp(-N*N/2);p.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const A=this._sizeLods[s],I=3*A*(s>y-Rs?s-y+Rs:0),w=4*(this._cubeSize-A);Mo(t,I,w,3*A,2*A),l.setRenderTarget(t),l.render(h,ll)}}function kM(n){const e=[],t=[],i=[];let s=n;const r=n-Rs+1+Ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Rs?l=Ah[o-n+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),y=new Float32Array(m*g*d),A=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,N=w>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(S,_*g*w),y.set(f,m*g*w);const M=[w,w,w,w,w,w];A.set(M,p*g*w)}const I=new Nt;I.setAttribute("position",new Kt(T,_)),I.setAttribute("uv",new Kt(y,m)),I.setAttribute("faceIndex",new Kt(A,p)),e.push(I),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ph(n,e,t){const i=new is(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function GM(n,e,t){const i=new Float32Array(Ki),s=new U(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Lh(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ih(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function WM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===zl,u=l===zs||l===Hs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ch(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Ch(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function XM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let y=0,A=T.length;y<A;y+=3){const I=T[y+0],w=T[y+1],R=T[y+2];f.push(I,w,w,R,R,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,A=T.length/3-1;y<A;y+=3){const I=y+0,w=y+1,R=y+2;f.push(I,w,w,R,R,I)}}else return;const m=new(Yd(f)?tp:ep)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(f[m]/o,d[m]);else{_.multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<_.length;T++)t.update(p,i,_[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function YM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function KM(n,e,t){const i=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),m===!0&&(A=3);let I=a.attributes.position.count*A,w=1;I>e.maxTextureSize&&(w=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*w*4*h),N=new Zd(R,I,w,h);N.type=Rn,N.needsUpdate=!0;const S=A*4;for(let F=0;F<h;F++){const Y=p[F],O=T[F],Q=y[F],J=I*w*4*F;for(let ee=0;ee<Y.count;ee++){const ie=ee*S;g===!0&&(s.fromBufferAttribute(Y,ee),R[J+ie+0]=s.x,R[J+ie+1]=s.y,R[J+ie+2]=s.z,R[J+ie+3]=0),_===!0&&(s.fromBufferAttribute(O,ee),R[J+ie+4]=s.x,R[J+ie+5]=s.y,R[J+ie+6]=s.z,R[J+ie+7]=0),m===!0&&(s.fromBufferAttribute(Q,ee),R[J+ie+8]=s.x,R[J+ie+9]=s.y,R[J+ie+10]=s.z,R[J+ie+11]=Q.itemSize===4?s.w:1)}}f={count:h,texture:N,size:new Ae(I,w)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function $M(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class op extends Ct{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Us,u!==Us&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Us&&(i=ks),i===void 0&&u===Or&&(i=Vr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ap=new Ct,lp=new op(1,1);lp.compareFunction=jd;const cp=new Zd,up=new O0,hp=new sp,Dh=[],Nh=[],Uh=new Float32Array(16),Oh=new Float32Array(9),Fh=new Float32Array(4);function Js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,i))return;Fh.set(i),n.uniformMatrix2fv(this.addr,!1,Fh),At(t,i)}}function ny(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),At(t,i)}}function iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),At(t,i)}}function sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function ly(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function fy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?lp:ap;t.setTexture2D(e||r,s)}function dy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||up,s)}function py(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function my(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cp,s)}function gy(n){switch(n){case 5126:return ZM;case 35664:return JM;case 35665:return QM;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return uy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function _y(n,e){n.uniform1fv(this.addr,e)}function vy(n,e){const t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function xy(n,e){const t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function My(n,e){const t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function yy(n,e){const t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sy(n,e){const t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ey(n,e){const t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ty(n,e){n.uniform1iv(this.addr,e)}function by(n,e){n.uniform2iv(this.addr,e)}function Ay(n,e){n.uniform3iv(this.addr,e)}function wy(n,e){n.uniform4iv(this.addr,e)}function Ry(n,e){n.uniform1uiv(this.addr,e)}function Cy(n,e){n.uniform2uiv(this.addr,e)}function Py(n,e){n.uniform3uiv(this.addr,e)}function Ly(n,e){n.uniform4uiv(this.addr,e)}function Iy(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ap,r[o])}function Dy(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||up,r[o])}function Ny(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hp,r[o])}function Uy(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cp,r[o])}function Oy(n){switch(n){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return My;case 35674:return yy;case 35675:return Sy;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return by;case 35668:case 35672:return Ay;case 35669:case 35673:return wy;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}class Fy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gy(t.type)}}class By{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Oy(t.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function Bh(n,e){n.seq.push(e),n.map[e.id]=e}function Hy(n,e,t){const i=n.name,s=i.length;for(dl.lastIndex=0;;){const r=dl.exec(i),o=dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bh(t,c===void 0?new Fy(a,n,e):new By(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new zy(a),Bh(t,h)),t=h}}}class Fo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Hy(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function zh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vy=37297;let ky=0;function Gy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Wy(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===$o&&t===Ko?i="LinearDisplayP3ToLinearSRGB":e===Ko&&t===$o&&(i="LinearSRGBToLinearDisplayP3"),n){case Dt:case xa:return[i,"LinearTransferOETF"];case Wt:case gc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gy(n.getShaderSource(e),o)}else return s}function Xy(n,e){const t=Wy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jy(n,e){let t;switch(e){case z_:t="Linear";break;case H_:t="Reinhard";break;case V_:t="OptimizedCineon";break;case k_:t="ACESFilmic";break;case W_:t="AgX";break;case X_:t="Neutral";break;case G_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Yy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ky(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xr(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $y=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace($y,Jy)}const Zy=new Map;function Jy(n,e){let t=We[e];if(t===void 0){const i=Zy.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(n){return n.replace(Qy,eS)}function eS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function nS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function sS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case F_:e="ENVMAP_BLENDING_MIX";break;case B_:e="ENVMAP_BLENDING_ADD";break}return e}function rS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tS(t),c=nS(t),u=iS(t),h=sS(t),f=rS(t),d=qy(t),g=Yy(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?We.tonemapping_pars_fragment:"",t.toneMapping!==Ti?jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Xy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=kl(o),o=Vh(o,t),o=kh(o,t),a=kl(a),a=Vh(a,t),a=kh(a,t),o=Gh(o),a=Gh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+o,A=T+p+a,I=zh(s,s.VERTEX_SHADER,y),w=zh(s,s.FRAGMENT_SHADER,A);s.attachShader(_,I),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(F){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(I).trim(),Q=s.getShaderInfoLog(w).trim();let J=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,w);else{const ie=Hh(s,I,"vertex"),G=Hh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+ie+`
`+G)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(O===""||Q==="")&&(ee=!1);ee&&(F.diagnostics={runnable:J,programLog:Y,vertexShader:{log:O,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(I),s.deleteShader(w),N=new Fo(s,_),S=Ky(s,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Vy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let aS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cS(e),t.set(e,i)),i}}class cS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function uS(n,e,t,i,s,r,o){const a=new Jd,l=new lS,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,F,Y,O){const Q=Y.fog,J=O.geometry,ee=S.isMeshStandardMaterial?Y.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),G=ie&&ie.mapping===_a?ie.image.height:null,ue=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=he!==void 0?he.length:0;let Pe=0;J.morphAttributes.position!==void 0&&(Pe=1),J.morphAttributes.normal!==void 0&&(Pe=2),J.morphAttributes.color!==void 0&&(Pe=3);let Ze,te,fe,xe;if(ue){const Je=Tn[ue];Ze=Je.vertexShader,te=Je.fragmentShader}else Ze=S.vertexShader,te=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);const pe=n.getRenderTarget(),ze=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,H=!!S.map,et=!!S.matcap,be=!!ie,C=!!S.aoMap,P=!!S.lightMap,k=!!S.bumpMap,K=!!S.normalMap,$=!!S.displacementMap,re=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,L=S.anisotropy>0,D=S.clearcoat>0,V=S.dispersion>0,X=S.iridescence>0,oe=S.sheen>0,ne=S.transmission>0,se=L&&!!S.anisotropyMap,_e=D&&!!S.clearcoatMap,ae=D&&!!S.clearcoatNormalMap,ge=D&&!!S.clearcoatRoughnessMap,Le=X&&!!S.iridescenceMap,Ee=X&&!!S.iridescenceThicknessMap,Me=oe&&!!S.sheenColorMap,Ne=oe&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,Ue=!!S.specularColorMap,we=!!S.specularIntensityMap,x=ne&&!!S.transmissionMap,B=ne&&!!S.thicknessMap,W=!!S.gradientMap,le=!!S.alphaMap,de=S.alphaTest>0,ke=!!S.alphaHash,qe=!!S.extensions;let dt=Ti;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(dt=n.toneMapping);const wt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:te,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:He,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Dt,alphaToCoverage:!!S.alphaToCoverage,map:H,matcap:et,envMap:be,envMapMode:be&&ie.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:P,bumpMap:k,normalMap:K,displacementMap:f&&$,emissiveMap:re,normalMapObjectSpace:K&&S.normalMapType===o0,normalMapTangentSpace:K&&S.normalMapType===mc,metalnessMap:E,roughnessMap:v,anisotropy:L,anisotropyMap:se,clearcoat:D,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:ge,dispersion:V,iridescence:X,iridescenceMap:Le,iridescenceThicknessMap:Ee,sheen:oe,sheenColorMap:Me,sheenRoughnessMap:Ne,specularMap:Ve,specularColorMap:Ue,specularIntensityMap:we,transmission:ne,transmissionMap:x,thicknessMap:B,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ns&&S.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:ke,combine:S.combine,mapUv:H&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:P&&_(S.lightMap.channel),bumpMapUv:k&&_(S.bumpMap.channel),normalMapUv:K&&_(S.normalMap.channel),displacementMapUv:$&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:se&&_(S.anisotropyMap.channel),clearcoatMapUv:_e&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(S.sheenRoughnessMap.channel),specularMapUv:Ve&&_(S.specularMap.channel),specularColorMapUv:Ue&&_(S.specularColorMap.channel),specularIntensityMapUv:we&&_(S.specularIntensityMap.channel),transmissionMapUv:x&&_(S.transmissionMap.channel),thicknessMapUv:B&&_(S.thicknessMap.channel),alphaMapUv:le&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(K||L),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(H||le),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:H&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)M.push(F),M.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(T(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const M=g[S.type];let F;if(M){const Y=Tn[M];F=Y0.clone(Y.uniforms)}else F=S.uniforms;return F}function I(S,M){let F;for(let Y=0,O=u.length;Y<O;Y++){const Q=u[Y];if(Q.cacheKey===M){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new oS(n,M,S,r),u.push(F)),F}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:I,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:N}}function hS(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function fS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||fS),i.length>1&&i.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function dS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new jh,n.set(i,[o])):s>=r.length?(o=new jh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function mS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gS=0;function _S(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vS(n){const e=new pS,t=mS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new je,o=new je;function a(c,u){let h=0,f=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,_=0,m=0,p=0,T=0,y=0,A=0,I=0,w=0,R=0,N=0;c.sort(_S);const S=u===!0?Math.PI:1;for(let F=0,Y=c.length;F<Y;F++){const O=c[F],Q=O.color,J=O.intensity,ee=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=Q.r*J*S,f+=Q.g*J*S,d+=Q.b*J*S;else if(O.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(O.sh.coefficients[G],J);N++}else if(O.isDirectionalLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const ue=O.shadow,he=t.get(O);he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize=ue.mapSize,i.directionalShadow[g]=he,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=O.shadow.matrix,y++}i.directional[g]=G,g++}else if(O.isSpotLight){const G=e.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(Q).multiplyScalar(J*S),G.distance=ee,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,i.spot[m]=G;const ue=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,ue.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[m]=ue.matrix,O.castShadow){const he=t.get(O);he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize=ue.mapSize,i.spotShadow[m]=he,i.spotShadowMap[m]=ie,I++}m++}else if(O.isRectAreaLight){const G=e.get(O);G.color.copy(Q).multiplyScalar(J),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),i.rectArea[p]=G,p++}else if(O.isPointLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*S),G.distance=O.distance,G.decay=O.decay,O.castShadow){const ue=O.shadow,he=t.get(O);he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize=ue.mapSize,he.shadowCameraNear=ue.camera.near,he.shadowCameraFar=ue.camera.far,i.pointShadow[_]=he,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=O.shadow.matrix,A++}i.point[_]=G,_++}else if(O.isHemisphereLight){const G=e.get(O);G.skyColor.copy(O.color).multiplyScalar(J*S),G.groundColor.copy(O.groundColor).multiplyScalar(J*S),i.hemi[T]=G,T++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const M=i.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==T||M.numDirectionalShadows!==y||M.numPointShadows!==A||M.numSpotShadows!==I||M.numSpotMaps!==w||M.numLightProbes!==N)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=T,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=I+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,M.directionalLength=g,M.pointLength=_,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=T,M.numDirectionalShadows=y,M.numPointShadows=A,M.numSpotShadows=I,M.numSpotMaps=w,M.numLightProbes=N,i.version=gS++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const y=c[p];if(y.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(y.isSpotLight){const A=i.spot[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function qh(n){const e=new vS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qh(n),e.set(s,[a])):r>=o.length?(a=new qh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class MS extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yS extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ES=`uniform sampler2D shadow_pass;
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
}`;function TS(n,e,t){let i=new vc;const s=new Ae,r=new Ae,o=new at,a=new MS({depthPacking:r0}),l=new yS,c={},u=t.maxTextureSize,h={[Yn]:Zt,[Zt]:Yn,[An]:An},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:SS,fragmentShader:ES}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(w,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Ei),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const O=p!==kn&&this.type===kn,Q=p===kn&&this.type!==kn;for(let J=0,ee=w.length;J<ee;J++){const ie=w[J],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||O===!0||Q===!0){const ye=this.type!==kn?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new is(s.x,s.y,ye),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const he=G.getViewportCount();for(let ye=0;ye<he;ye++){const Pe=G.getViewport(ye);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),Y.viewport(o),G.updateMatrices(ie,ye),i=G.getFrustum(),A(R,N,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&T(G,N),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,F)};function T(w,R){const N=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,N,d,_,null)}function y(w,R,N,S){let M=null;const F=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)M=F;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=M.uuid,O=R.uuid;let Q=c[Y];Q===void 0&&(Q={},c[Y]=Q);let J=Q[O];J===void 0&&(J=M.clone(),Q[O]=J,R.addEventListener("dispose",I)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,S===kn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=N}return M}function A(w,R,N,S,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===kn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const O=e.update(w),Q=w.material;if(Array.isArray(Q)){const J=O.groups;for(let ee=0,ie=J.length;ee<ie;ee++){const G=J[ee],ue=Q[G.materialIndex];if(ue&&ue.visible){const he=y(w,ue,S,M);w.onBeforeShadow(n,w,R,N,O,he,G),n.renderBufferDirect(N,null,O,he,w,G),w.onAfterShadow(n,w,R,N,O,he,G)}}}else if(Q.visible){const J=y(w,Q,S,M);w.onBeforeShadow(n,w,R,N,O,J,null),n.renderBufferDirect(N,null,O,J,w,null),w.onAfterShadow(n,w,R,N,O,J,null)}}const Y=w.children;for(let O=0,Q=Y.length;O<Q;O++)A(Y[O],R,N,S,M)}function I(w){w.target.removeEventListener("dispose",I);for(const N in c){const S=c[N],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function bS(n){function e(){let x=!1;const B=new at;let W=null;const le=new at(0,0,0,0);return{setMask:function(de){W!==de&&!x&&(n.colorMask(de,de,de,de),W=de)},setLocked:function(de){x=de},setClear:function(de,ke,qe,dt,wt){wt===!0&&(de*=dt,ke*=dt,qe*=dt),B.set(de,ke,qe,dt),le.equals(B)===!1&&(n.clearColor(de,ke,qe,dt),le.copy(B))},reset:function(){x=!1,W=null,le.set(-1,0,0,0)}}}function t(){let x=!1,B=null,W=null,le=null;return{setTest:function(de){de?xe(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(de){B!==de&&!x&&(n.depthMask(de),B=de)},setFunc:function(de){if(W!==de){switch(de){case P_:n.depthFunc(n.NEVER);break;case L_:n.depthFunc(n.ALWAYS);break;case I_:n.depthFunc(n.LESS);break;case jo:n.depthFunc(n.LEQUAL);break;case D_:n.depthFunc(n.EQUAL);break;case N_:n.depthFunc(n.GEQUAL);break;case U_:n.depthFunc(n.GREATER);break;case O_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=de}},setLocked:function(de){x=de},setClear:function(de){le!==de&&(n.clearDepth(de),le=de)},reset:function(){x=!1,B=null,W=null,le=null}}}function i(){let x=!1,B=null,W=null,le=null,de=null,ke=null,qe=null,dt=null,wt=null;return{setTest:function(Je){x||(Je?xe(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Je){B!==Je&&!x&&(n.stencilMask(Je),B=Je)},setFunc:function(Je,xt,lt){(W!==Je||le!==xt||de!==lt)&&(n.stencilFunc(Je,xt,lt),W=Je,le=xt,de=lt)},setOp:function(Je,xt,lt){(ke!==Je||qe!==xt||dt!==lt)&&(n.stencilOp(Je,xt,lt),ke=Je,qe=xt,dt=lt)},setLocked:function(Je){x=Je},setClear:function(Je){wt!==Je&&(n.clearStencil(Je),wt=Je)},reset:function(){x=!1,B=null,W=null,le=null,de=null,ke=null,qe=null,dt=null,wt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,T=null,y=null,A=null,I=null,w=new Re(0,0,0),R=0,N=!1,S=null,M=null,F=null,Y=null,O=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=ee>=1):ie.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=ee>=2);let G=null,ue={};const he=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Pe=new at().fromArray(he),Ze=new at().fromArray(ye);function te(x,B,W,le){const de=new Uint8Array(4),ke=n.createTexture();n.bindTexture(x,ke),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<W;qe++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(B+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ke}const fe={};fe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),r.setFunc(jo),k(!1),K(Tu),xe(n.CULL_FACE),C(Ei);function xe(x){c[x]!==!0&&(n.enable(x),c[x]=!0)}function pe(x){c[x]!==!1&&(n.disable(x),c[x]=!1)}function ze(x,B){return u[x]!==B?(n.bindFramebuffer(x,B),u[x]=B,x===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=B),x===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=B),!0):!1}function He(x,B){let W=f,le=!1;if(x){W=h.get(B),W===void 0&&(W=[],h.set(B,W));const de=x.textures;if(W.length!==de.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,qe=de.length;ke<qe;ke++)W[ke]=n.COLOR_ATTACHMENT0+ke;W.length=de.length,le=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,le=!0);le&&n.drawBuffers(W)}function H(x){return d!==x?(n.useProgram(x),d=x,!0):!1}const et={[Yi]:n.FUNC_ADD,[d_]:n.FUNC_SUBTRACT,[p_]:n.FUNC_REVERSE_SUBTRACT};et[m_]=n.MIN,et[g_]=n.MAX;const be={[__]:n.ZERO,[v_]:n.ONE,[x_]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[b_]:n.SRC_ALPHA_SATURATE,[E_]:n.DST_COLOR,[y_]:n.DST_ALPHA,[M_]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[T_]:n.ONE_MINUS_DST_COLOR,[S_]:n.ONE_MINUS_DST_ALPHA,[A_]:n.CONSTANT_COLOR,[w_]:n.ONE_MINUS_CONSTANT_COLOR,[R_]:n.CONSTANT_ALPHA,[C_]:n.ONE_MINUS_CONSTANT_ALPHA};function C(x,B,W,le,de,ke,qe,dt,wt,Je){if(x===Ei){g===!0&&(pe(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),x!==f_){if(x!==_||Je!==N){if((m!==Yi||y!==Yi)&&(n.blendEquation(n.FUNC_ADD),m=Yi,y=Yi),Je)switch(x){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}p=null,T=null,A=null,I=null,w.set(0,0,0),R=0,_=x,N=Je}return}de=de||B,ke=ke||W,qe=qe||le,(B!==m||de!==y)&&(n.blendEquationSeparate(et[B],et[de]),m=B,y=de),(W!==p||le!==T||ke!==A||qe!==I)&&(n.blendFuncSeparate(be[W],be[le],be[ke],be[qe]),p=W,T=le,A=ke,I=qe),(dt.equals(w)===!1||wt!==R)&&(n.blendColor(dt.r,dt.g,dt.b,wt),w.copy(dt),R=wt),_=x,N=!1}function P(x,B){x.side===An?pe(n.CULL_FACE):xe(n.CULL_FACE);let W=x.side===Zt;B&&(W=!W),k(W),x.blending===Ns&&x.transparent===!1?C(Ei):C(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),r.setFunc(x.depthFunc),r.setTest(x.depthTest),r.setMask(x.depthWrite),s.setMask(x.colorWrite);const le=x.stencilWrite;o.setTest(le),le&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),re(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(x){S!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),S=x)}function K(x){x!==c_?(xe(n.CULL_FACE),x!==M&&(x===Tu?n.cullFace(n.BACK):x===u_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),M=x}function $(x){x!==F&&(J&&n.lineWidth(x),F=x)}function re(x,B,W){x?(xe(n.POLYGON_OFFSET_FILL),(Y!==B||O!==W)&&(n.polygonOffset(B,W),Y=B,O=W)):pe(n.POLYGON_OFFSET_FILL)}function E(x){x?xe(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function v(x){x===void 0&&(x=n.TEXTURE0+Q-1),G!==x&&(n.activeTexture(x),G=x)}function L(x,B,W){W===void 0&&(G===null?W=n.TEXTURE0+Q-1:W=G);let le=ue[W];le===void 0&&(le={type:void 0,texture:void 0},ue[W]=le),(le.type!==x||le.texture!==B)&&(G!==W&&(n.activeTexture(W),G=W),n.bindTexture(x,B||fe[x]),le.type=x,le.texture=B)}function D(){const x=ue[G];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{n.texStorage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Me(x){Pe.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),Pe.copy(x))}function Ne(x){Ze.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Ze.copy(x))}function Ve(x,B){let W=l.get(B);W===void 0&&(W=new WeakMap,l.set(B,W));let le=W.get(x);le===void 0&&(le=n.getUniformBlockIndex(B,x.name),W.set(x,le))}function Ue(x,B){const le=l.get(B).get(x);a.get(B)!==le&&(n.uniformBlockBinding(B,le,x.__bindingPointIndex),a.set(B,le))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ue={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,T=null,y=null,A=null,I=null,w=new Re(0,0,0),R=0,N=!1,S=null,M=null,F=null,Y=null,O=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:xe,disable:pe,bindFramebuffer:ze,drawBuffers:He,useProgram:H,setBlending:C,setMaterial:P,setFlipSided:k,setCullFace:K,setLineWidth:$,setPolygonOffset:re,setScissorTest:E,activeTexture:v,bindTexture:L,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:X,texImage2D:Le,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:ae,texStorage3D:ge,texSubImage2D:oe,texSubImage3D:ne,compressedTexSubImage2D:se,compressedTexSubImage3D:_e,scissor:Me,viewport:Ne,reset:we}}function AS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return d?new OffscreenCanvas(E,v):Br("canvas")}function _(E,v,L){let D=1;const V=re(E);if((V.width>L||V.height>L)&&(D=L/Math.max(V.width,V.height)),D<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(D*V.width),oe=Math.floor(D*V.height);h===void 0&&(h=g(X,oe));const ne=v?g(X,oe):h;return ne.width=X,ne.height=oe,ne.getContext("2d").drawImage(E,0,0,X,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+X+"x"+oe+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==qt&&E.minFilter!==sn}function p(E){n.generateMipmap(E)}function T(E,v,L,D,V=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),v===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RG8UI),L===n.UNSIGNED_SHORT&&(X=n.RG16UI),L===n.UNSIGNED_INT&&(X=n.RG32UI),L===n.BYTE&&(X=n.RG8I),L===n.SHORT&&(X=n.RG16I),L===n.INT&&(X=n.RG32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const oe=V?Yo:nt.getTransfer(D);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=oe===ct?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==qt&&E.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),w(v),v.isVideoTexture&&u.delete(v)}function I(E){const v=E.target;v.removeEventListener("dispose",I),N(v)}function w(E){const v=i.get(E);if(v.__webglInit===void 0)return;const L=E.source,D=f.get(L);if(D){const V=D[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&R(E),Object.keys(D).length===0&&f.delete(L)}i.remove(E)}function R(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const L=E.source,D=f.get(L);delete D[v.__cacheKey],o.memory.textures--}function N(E){const v=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(v.__webglFramebuffer[D]))for(let V=0;V<v.__webglFramebuffer[D].length;V++)n.deleteFramebuffer(v.__webglFramebuffer[D][V]);else n.deleteFramebuffer(v.__webglFramebuffer[D]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[D])}else{if(Array.isArray(v.__webglFramebuffer))for(let D=0;D<v.__webglFramebuffer.length;D++)n.deleteFramebuffer(v.__webglFramebuffer[D]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let D=0;D<v.__webglColorRenderbuffer.length;D++)v.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[D]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=E.textures;for(let D=0,V=L.length;D<V;D++){const X=i.get(L[D]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(L[D])}i.remove(E)}let S=0;function M(){S=0}function F(){const E=S;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),S+=1,E}function Y(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function O(E,v){const L=i.get(E);if(E.isVideoTexture&&K(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const D=E.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(L,E,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function Q(E,v){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Pe(L,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function J(E,v){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Pe(L,E,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function ee(E,v){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ze(L,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const ie={[Vs]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[qo]:n.MIRRORED_REPEAT},G={[qt]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},ue={[a0]:n.NEVER,[d0]:n.ALWAYS,[l0]:n.LESS,[jd]:n.LEQUAL,[c0]:n.EQUAL,[f0]:n.GEQUAL,[u0]:n.GREATER,[h0]:n.NOTEQUAL};function he(E,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Oo||v.magFilter===vr||v.magFilter===Wn||v.minFilter===sn||v.minFilter===Oo||v.minFilter===vr||v.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ie[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,G[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,G[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==vr&&v.minFilter!==Wn||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ye(E,v){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const D=v.source;let V=f.get(D);V===void 0&&(V={},f.set(D,V));const X=Y(v);if(X!==E.__cacheKey){V[X]===void 0&&(V[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),V[X].usedTimes++;const oe=V[E.__cacheKey];oe!==void 0&&(V[E.__cacheKey].usedTimes--,oe.usedTimes===0&&R(v)),E.__cacheKey=X,E.__webglTexture=V[X].texture}return L}function Pe(E,v,L){let D=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(D=n.TEXTURE_3D);const V=ye(E,v),X=v.source;t.bindTexture(D,E.__webglTexture,n.TEXTURE0+L);const oe=i.get(X);if(X.version!==oe.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const ne=nt.getPrimaries(nt.workingColorSpace),se=v.colorSpace===_i?null:nt.getPrimaries(v.colorSpace),_e=v.colorSpace===_i||ne===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ae=_(v.image,!1,s.maxTextureSize);ae=$(v,ae);const ge=r.convert(v.format,v.colorSpace),Le=r.convert(v.type);let Ee=T(v.internalFormat,ge,Le,v.colorSpace,v.isVideoTexture);he(D,v);let Me;const Ne=v.mipmaps,Ve=v.isVideoTexture!==!0,Ue=oe.__version===void 0||V===!0,we=X.dataReady,x=y(v,ae);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT16,v.type===Rn?Ee=n.DEPTH_COMPONENT32F:v.type===ks?Ee=n.DEPTH_COMPONENT24:v.type===Vr&&(Ee=n.DEPTH24_STENCIL8),Ue&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ae.width,ae.height,0,ge,Le,null));else if(v.isDataTexture)if(Ne.length>0){Ve&&Ue&&t.texStorage2D(n.TEXTURE_2D,x,Ee,Ne[0].width,Ne[0].height);for(let B=0,W=Ne.length;B<W;B++)Me=Ne[B],Ve?we&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Me.width,Me.height,ge,Le,Me.data):t.texImage2D(n.TEXTURE_2D,B,Ee,Me.width,Me.height,0,ge,Le,Me.data);v.generateMipmaps=!1}else Ve?(Ue&&t.texStorage2D(n.TEXTURE_2D,x,Ee,ae.width,ae.height),we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,Le,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,ae.width,ae.height,0,ge,Le,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,x,Ee,Ne[0].width,Ne[0].height,ae.depth);for(let B=0,W=Ne.length;B<W;B++)Me=Ne[B],v.format!==_n?ge!==null?Ve?we&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Me.width,Me.height,ae.depth,ge,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Ee,Me.width,Me.height,ae.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Me.width,Me.height,ae.depth,ge,Le,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Ee,Me.width,Me.height,ae.depth,0,ge,Le,Me.data)}else{Ve&&Ue&&t.texStorage2D(n.TEXTURE_2D,x,Ee,Ne[0].width,Ne[0].height);for(let B=0,W=Ne.length;B<W;B++)Me=Ne[B],v.format!==_n?ge!==null?Ve?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Me.width,Me.height,ge,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?we&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Me.width,Me.height,ge,Le,Me.data):t.texImage2D(n.TEXTURE_2D,B,Ee,Me.width,Me.height,0,ge,Le,Me.data)}else if(v.isDataArrayTexture)Ve?(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,x,Ee,ae.width,ae.height,ae.depth),we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,Le,ae.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,ge,Le,ae.data);else if(v.isData3DTexture)Ve?(Ue&&t.texStorage3D(n.TEXTURE_3D,x,Ee,ae.width,ae.height,ae.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,Le,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,ge,Le,ae.data);else if(v.isFramebufferTexture){if(Ue)if(Ve)t.texStorage2D(n.TEXTURE_2D,x,Ee,ae.width,ae.height);else{let B=ae.width,W=ae.height;for(let le=0;le<x;le++)t.texImage2D(n.TEXTURE_2D,le,Ee,B,W,0,ge,Le,null),B>>=1,W>>=1}}else if(Ne.length>0){if(Ve&&Ue){const B=re(Ne[0]);t.texStorage2D(n.TEXTURE_2D,x,Ee,B.width,B.height)}for(let B=0,W=Ne.length;B<W;B++)Me=Ne[B],Ve?we&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,ge,Le,Me):t.texImage2D(n.TEXTURE_2D,B,Ee,ge,Le,Me);v.generateMipmaps=!1}else if(Ve){if(Ue){const B=re(ae);t.texStorage2D(n.TEXTURE_2D,x,Ee,B.width,B.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Le,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ge,Le,ae);m(v)&&p(D),oe.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ze(E,v,L){if(v.image.length!==6)return;const D=ye(E,v),V=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const X=i.get(V);if(V.version!==X.__version||D===!0){t.activeTexture(n.TEXTURE0+L);const oe=nt.getPrimaries(nt.workingColorSpace),ne=v.colorSpace===_i?null:nt.getPrimaries(v.colorSpace),se=v.colorSpace===_i||oe===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let W=0;W<6;W++)!_e&&!ae?ge[W]=_(v.image[W],!0,s.maxCubemapSize):ge[W]=ae?v.image[W].image:v.image[W],ge[W]=$(v,ge[W]);const Le=ge[0],Ee=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),Ne=T(v.internalFormat,Ee,Me,v.colorSpace),Ve=v.isVideoTexture!==!0,Ue=X.__version===void 0||D===!0,we=V.dataReady;let x=y(v,Le);he(n.TEXTURE_CUBE_MAP,v);let B;if(_e){Ve&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,x,Ne,Le.width,Le.height);for(let W=0;W<6;W++){B=ge[W].mipmaps;for(let le=0;le<B.length;le++){const de=B[le];v.format!==_n?Ee!==null?Ve?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,0,0,de.width,de.height,Ee,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,Ne,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,0,0,de.width,de.height,Ee,Me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le,Ne,de.width,de.height,0,Ee,Me,de.data)}}}else{if(B=v.mipmaps,Ve&&Ue){B.length>0&&x++;const W=re(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,x,Ne,W.width,W.height)}for(let W=0;W<6;W++)if(ae){Ve?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ge[W].width,ge[W].height,Ee,Me,ge[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ne,ge[W].width,ge[W].height,0,Ee,Me,ge[W].data);for(let le=0;le<B.length;le++){const ke=B[le].image[W].image;Ve?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,0,0,ke.width,ke.height,Ee,Me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,Ne,ke.width,ke.height,0,Ee,Me,ke.data)}}else{Ve?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ee,Me,ge[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ne,Ee,Me,ge[W]);for(let le=0;le<B.length;le++){const de=B[le];Ve?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,0,0,Ee,Me,de.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,le+1,Ne,Ee,Me,de.image[W])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=V.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function te(E,v,L,D,V,X){const oe=r.convert(L.format,L.colorSpace),ne=r.convert(L.type),se=T(L.internalFormat,oe,ne,L.colorSpace);if(!i.get(v).__hasExternalTextures){const ae=Math.max(1,v.width>>X),ge=Math.max(1,v.height>>X);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,X,se,ae,ge,v.depth,0,oe,ne,null):t.texImage2D(V,X,se,ae,ge,0,oe,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),k(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,V,i.get(L).__webglTexture,0,P(v)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,V,i.get(L).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(E,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let D=n.DEPTH_COMPONENT24;if(L||k(v)){const V=v.depthTexture;V&&V.isDepthTexture&&(V.type===Rn?D=n.DEPTH_COMPONENT32F:V.type===ks&&(D=n.DEPTH_COMPONENT24));const X=P(v);k(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,D,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,D,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,D,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const D=P(v);L&&k(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,v.width,v.height):k(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const D=v.textures;for(let V=0;V<D.length;V++){const X=D[V],oe=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),se=T(X.internalFormat,oe,ne,X.colorSpace),_e=P(v);L&&k(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,se,v.width,v.height):k(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O(v.depthTexture,0);const D=i.get(v.depthTexture).__webglTexture,V=P(v);if(v.depthTexture.format===Us)k(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(v.depthTexture.format===Or)k(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function pe(E){const v=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");xe(v.__webglFramebuffer,E)}else if(L){v.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[D]),v.__webglDepthbuffer[D]=n.createRenderbuffer(),fe(v.__webglDepthbuffer[D],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),fe(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(E,v,L){const D=i.get(E);v!==void 0&&te(D.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&pe(E)}function He(E){const v=E.texture,L=i.get(E),D=i.get(v);E.addEventListener("dispose",I);const V=E.textures,X=E.isWebGLCubeRenderTarget===!0,oe=V.length>1;if(oe||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=v.version,o.memory.textures++),X){L.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ne]=[];for(let se=0;se<v.mipmaps.length;se++)L.__webglFramebuffer[ne][se]=n.createFramebuffer()}else L.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)L.__webglFramebuffer[ne]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(oe)for(let ne=0,se=V.length;ne<se;ne++){const _e=i.get(V[ne]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&k(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ne=0;ne<V.length;ne++){const se=V[ne];L.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ne]);const _e=r.convert(se.format,se.colorSpace),ae=r.convert(se.type),ge=T(se.internalFormat,_e,ae,se.colorSpace,E.isXRRenderTarget===!0),Le=P(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ge,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,L.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),he(n.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)te(L.__webglFramebuffer[ne][se],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else te(L.__webglFramebuffer[ne],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ne=0,se=V.length;ne<se;ne++){const _e=V[ne],ae=i.get(_e);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),he(n.TEXTURE_2D,_e),te(L.__webglFramebuffer,E,_e,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),m(_e)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,D.__webglTexture),he(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)te(L.__webglFramebuffer[se],E,v,n.COLOR_ATTACHMENT0,ne,se);else te(L.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ne,0);m(v)&&p(ne),t.unbindTexture()}E.depthBuffer&&pe(E)}function H(E){const v=E.textures;for(let L=0,D=v.length;L<D;L++){const V=v[L];if(m(V)){const X=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(V).__webglTexture;t.bindTexture(X,oe),p(X),t.unbindTexture()}}}const et=[],be=[];function C(E){if(E.samples>0){if(k(E)===!1){const v=E.textures,L=E.width,D=E.height;let V=n.COLOR_BUFFER_BIT;const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(E),ne=v.length>1;if(ne)for(let se=0;se<v.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let se=0;se<v.length;se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[se]);const _e=i.get(v[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,L,D,0,0,L,D,V,n.NEAREST),l===!0&&(et.length=0,be.length=0,et.push(n.COLOR_ATTACHMENT0+se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(et.push(X),be.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let se=0;se<v.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,oe.__webglColorRenderbuffer[se]);const _e=i.get(v[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function P(E){return Math.min(s.maxSamples,E.samples)}function k(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function K(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function $(E,v){const L=E.colorSpace,D=E.format,V=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Dt&&L!==_i&&(nt.getTransfer(L)===ct?(D!==_n||V!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=ze,this.setupRenderTarget=He,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=k}function wS(n,e){function t(i,s=_i){let r;const o=nt.getTransfer(s);if(i===Ai)return n.UNSIGNED_BYTE;if(i===zd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===K_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===q_)return n.BYTE;if(i===Y_)return n.SHORT;if(i===Fd)return n.UNSIGNED_SHORT;if(i===Bd)return n.INT;if(i===ks)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===va)return n.HALF_FLOAT;if(i===$_)return n.ALPHA;if(i===Z_)return n.RGB;if(i===_n)return n.RGBA;if(i===J_)return n.LUMINANCE;if(i===Q_)return n.LUMINANCE_ALPHA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Vd)return n.RED;if(i===kd)return n.RED_INTEGER;if(i===e0)return n.RG;if(i===Gd)return n.RG_INTEGER;if(i===Wd)return n.RGBA_INTEGER;if(i===Ba||i===za||i===Ha||i===Va)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cu||i===Pu||i===Lu||i===Iu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Du||i===Nu||i===Uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Du||i===Nu)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===Fu||i===Bu||i===zu||i===Hu||i===Vu||i===ku||i===Gu||i===Wu||i===Xu||i===ju||i===qu||i===Yu||i===Ku)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ou)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ku)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ju)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yu)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ku)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===$u||i===Zu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ka)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===t0||i===Ju||i===Qu||i===eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class RS extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CS={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const PS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`;class IS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ct,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new wi({vertexShader:PS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yt(new Gr(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class DS extends rs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new IS,m=t.getContextAttributes();let p=null,T=null;const y=[],A=[],I=new Ae;let w=null;const R=new Xt;R.layers.enable(1),R.viewport=new at;const N=new Xt;N.layers.enable(2),N.viewport=new at;const S=[R,N],M=new RS;M.layers.enable(1),M.layers.enable(2);let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=y[te];return fe===void 0&&(fe=new pl,y[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=y[te];return fe===void 0&&(fe=new pl,y[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=y[te];return fe===void 0&&(fe=new pl,y[te]=fe),fe.getHandSpace()};function O(te){const fe=A.indexOf(te.inputSource);if(fe===-1)return;const xe=y[fe];xe!==void 0&&(xe.update(te.inputSource,te.frame,c||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",J);for(let te=0;te<y.length;te++){const fe=A[te];fe!==null&&(A[te]=null,y[te].disconnect(fe))}F=null,Y=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,T=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new is(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,xe=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Or:Us,xe=m.stencil?Vr:ks);const ze={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new is(f.textureWidth,f.textureHeight,{format:_n,type:Ai,depthTexture:new op(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function J(te){for(let fe=0;fe<te.removed.length;fe++){const xe=te.removed[fe],pe=A.indexOf(xe);pe>=0&&(A[pe]=null,y[pe].disconnect(xe))}for(let fe=0;fe<te.added.length;fe++){const xe=te.added[fe];let pe=A.indexOf(xe);if(pe===-1){for(let He=0;He<y.length;He++)if(He>=A.length){A.push(xe),pe=He;break}else if(A[He]===null){A[He]=xe,pe=He;break}if(pe===-1)break}const ze=y[pe];ze&&ze.connect(xe)}}const ee=new U,ie=new U;function G(te,fe,xe){ee.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(xe.matrixWorld);const pe=ee.distanceTo(ie),ze=fe.projectionMatrix.elements,He=xe.projectionMatrix.elements,H=ze[14]/(ze[10]-1),et=ze[14]/(ze[10]+1),be=(ze[9]+1)/ze[5],C=(ze[9]-1)/ze[5],P=(ze[8]-1)/ze[0],k=(He[8]+1)/He[0],K=H*P,$=H*k,re=pe/(-P+k),E=re*-P;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(E),te.translateZ(re),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const v=H+re,L=et+re,D=K-E,V=$+(pe-E),X=be*et/L*v,oe=C*et/L*v;te.projectionMatrix.makePerspective(D,V,X,oe,v,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ue(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;_.texture!==null&&(te.near=_.depthNear,te.far=_.depthFar),M.near=N.near=R.near=te.near,M.far=N.far=R.far=te.far,(F!==M.near||Y!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,Y=M.far,R.near=F,R.far=Y,N.near=F,N.far=Y,R.updateProjectionMatrix(),N.updateProjectionMatrix(),te.updateProjectionMatrix());const fe=te.parent,xe=M.cameras;ue(M,fe);for(let pe=0;pe<xe.length;pe++)ue(xe[pe],fe);xe.length===2?G(M,R,N):M.projectionMatrix.copy(R.projectionMatrix),he(te,M,fe)};function he(te,fe,xe){xe===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ws*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null};let ye=null;function Pe(te,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let pe=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let He=0;He<xe.length;He++){const H=xe[He];let et=null;if(d!==null)et=d.getViewport(H);else{const C=h.getViewSubImage(f,H);et=C.viewport,He===0&&(e.setRenderTargetTextures(T,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(T))}let be=S[He];be===void 0&&(be=new Xt,be.layers.enable(He),be.viewport=new at,S[He]=be),be.matrix.fromArray(H.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(H.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(et.x,et.y,et.width,et.height),He===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(be)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const He=h.getDepthInformation(xe[0]);He&&He.isValid&&He.texture&&_.init(e,He,s.renderState)}}for(let xe=0;xe<y.length;xe++){const pe=A[xe],ze=y[xe];pe!==null&&ze!==void 0&&ze.update(pe,fe,c||o)}_.render(e,M),ye&&ye(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ze=new rp;Ze.setAnimationLoop(Pe),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Vi=new yn,NS=new je;function US(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,np(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),y=T.envMap,A=T.envMapRotation;if(y&&(m.envMap.value=y,Vi.copy(A),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const I=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*I,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const A=y.program;i.uniformBlockBinding(T,A)}function c(T,y){let A=s[T.id];A===void 0&&(g(T),A=u(T),s[T.id]=A,T.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(T,I);const w=e.render.frame;r[T.id]!==w&&(f(T),r[T.id]=w)}function u(T){const y=h();T.__bindingPointIndex=y;const A=n.createBuffer(),I=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,I,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,A),A}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=s[T.id],A=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,R=A.length;w<R;w++){const N=Array.isArray(A[w])?A[w]:[A[w]];for(let S=0,M=N.length;S<M;S++){const F=N[S];if(d(F,w,S,I)===!0){const Y=F.__offset,O=Array.isArray(F.value)?F.value:[F.value];let Q=0;for(let J=0;J<O.length;J++){const ee=O[J],ie=_(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,Y+Q,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,Q),Q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,y,A,I){const w=T.value,R=y+"_"+A;if(I[R]===void 0)return typeof w=="number"||typeof w=="boolean"?I[R]=w:I[R]=w.clone(),!0;{const N=I[R];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return I[R]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(T){const y=T.uniforms;let A=0;const I=16;for(let R=0,N=y.length;R<N;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,F=S.length;M<F;M++){const Y=S[M],O=Array.isArray(Y.value)?Y.value:[Y.value];for(let Q=0,J=O.length;Q<J;Q++){const ee=O[Q],ie=_(ee),G=A%I;G!==0&&I-G<ie.boundary&&(A+=I-G),Y.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=ie.storage}}}const w=A%I;return w>0&&(A+=I-w),T.__size=A,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class FS{constructor(e={}){const{canvas:t=P0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const y=this;let A=!1,I=0,w=0,R=null,N=-1,S=null;const M=new at,F=new at;let Y=null;const O=new Re(0);let Q=0,J=t.width,ee=t.height,ie=1,G=null,ue=null;const he=new at(0,0,J,ee),ye=new at(0,0,J,ee);let Pe=!1;const Ze=new vc;let te=!1,fe=!1;const xe=new je,pe=new U,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return R===null?ie:1}let H=i;function et(b,z){return t.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",x,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",W,!1),H===null){const z="webgl2";if(H=et(z,b),H===null)throw et(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,C,P,k,K,$,re,E,v,L,D,V,X,oe,ne,se,_e,ae,ge,Le,Ee,Me,Ne,Ve;function Ue(){be=new XM(H),be.init(),Me=new wS(H,be),C=new zM(H,be,e,Me),P=new bS(H),k=new YM(H),K=new hS,$=new AS(H,be,P,K,C,Me,k),re=new VM(y),E=new WM(y),v=new tv(H),Ne=new FM(H,v),L=new jM(H,v,k,Ne),D=new $M(H,L,v,k),ge=new KM(H,C,$),se=new HM(K),V=new uS(y,re,E,be,C,Ne,se),X=new US(y,K),oe=new dS,ne=new xS(be),ae=new OM(y,re,E,P,D,f,l),_e=new TS(y,D,C),Ve=new OS(H,k,C,P),Le=new BM(H,be,k),Ee=new qM(H,be,k),k.programs=V.programs,y.capabilities=C,y.extensions=be,y.properties=K,y.renderLists=oe,y.shadowMap=_e,y.state=P,y.info=k}Ue();const we=new DS(y,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(J,ee,!1))},this.getSize=function(b){return b.set(J,ee)},this.setSize=function(b,z,Z=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ee=z,t.width=Math.floor(b*ie),t.height=Math.floor(z*ie),Z===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(J*ie,ee*ie).floor()},this.setDrawingBufferSize=function(b,z,Z){J=b,ee=z,ie=Z,t.width=Math.floor(b*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,z,Z,j){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,z,Z,j),P.viewport(M.copy(he).multiplyScalar(ie).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,z,Z,j){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,z,Z,j),P.scissor(F.copy(ye).multiplyScalar(ie).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){P.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(b=!0,z=!0,Z=!0){let j=0;if(b){let q=!1;if(R!==null){const ve=R.texture.format;q=ve===Wd||ve===Gd||ve===kd}if(q){const ve=R.texture.type,Se=ve===Ai||ve===ks||ve===Fd||ve===Vr||ve===zd||ve===Hd,Te=ae.getClearColor(),Ie=ae.getClearAlpha(),Oe=Te.r,Ge=Te.g,Ye=Te.b;Se?(d[0]=Oe,d[1]=Ge,d[2]=Ye,d[3]=Ie,H.clearBufferuiv(H.COLOR,0,d)):(g[0]=Oe,g[1]=Ge,g[2]=Ye,g[3]=Ie,H.clearBufferiv(H.COLOR,0,g))}else j|=H.COLOR_BUFFER_BIT}z&&(j|=H.DEPTH_BUFFER_BIT),Z&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",x,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",W,!1),oe.dispose(),ne.dispose(),K.dispose(),re.dispose(),E.dispose(),D.dispose(),Ne.dispose(),Ve.dispose(),V.dispose(),we.dispose(),we.removeEventListener("sessionstart",Je),we.removeEventListener("sessionend",xt),lt.stop()};function x(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=k.autoReset,z=_e.enabled,Z=_e.autoUpdate,j=_e.needsUpdate,q=_e.type;Ue(),k.autoReset=b,_e.enabled=z,_e.autoUpdate=Z,_e.needsUpdate=j,_e.type=q}function W(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){const z=b.target;z.removeEventListener("dispose",le),de(z)}function de(b){ke(b),K.remove(b)}function ke(b){const z=K.get(b).programs;z!==void 0&&(z.forEach(function(Z){V.releaseProgram(Z)}),b.isShaderMaterial&&V.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Z,j,q,ve){z===null&&(z=ze);const Se=q.isMesh&&q.matrixWorld.determinant()<0,Te=bp(b,z,Z,j,q);P.setMaterial(j,Se);let Ie=Z.index,Oe=1;if(j.wireframe===!0){if(Ie=L.getWireframeAttribute(Z),Ie===void 0)return;Oe=2}const Ge=Z.drawRange,Ye=Z.attributes.position;let Mt=Ge.start*Oe,Ut=(Ge.start+Ge.count)*Oe;ve!==null&&(Mt=Math.max(Mt,ve.start*Oe),Ut=Math.min(Ut,(ve.start+ve.count)*Oe)),Ie!==null?(Mt=Math.max(Mt,0),Ut=Math.min(Ut,Ie.count)):Ye!=null&&(Mt=Math.max(Mt,0),Ut=Math.min(Ut,Ye.count));const Qt=Ut-Mt;if(Qt<0||Qt===1/0)return;Ne.setup(q,j,Te,Z,Ie);let Un,tt=Le;if(Ie!==null&&(Un=v.get(Ie),tt=Ee,tt.setIndex(Un)),q.isMesh)j.wireframe===!0?(P.setLineWidth(j.wireframeLinewidth*He()),tt.setMode(H.LINES)):tt.setMode(H.TRIANGLES);else if(q.isLine){let Fe=j.linewidth;Fe===void 0&&(Fe=1),P.setLineWidth(Fe*He()),q.isLineSegments?tt.setMode(H.LINES):q.isLineLoop?tt.setMode(H.LINE_LOOP):tt.setMode(H.LINE_STRIP)}else q.isPoints?tt.setMode(H.POINTS):q.isSprite&&tt.setMode(H.TRIANGLES);if(q.isBatchedMesh)q._multiDrawInstances!==null?tt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances):tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)tt.renderInstances(Mt,Qt,q.count);else if(Z.isInstancedBufferGeometry){const Fe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rr=Math.min(Z.instanceCount,Fe);tt.renderInstances(Mt,Qt,rr)}else tt.render(Mt,Qt)};function qe(b,z,Z){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Zt,b.needsUpdate=!0,jr(b,z,Z),b.side=Yn,b.needsUpdate=!0,jr(b,z,Z),b.side=An):jr(b,z,Z)}this.compile=function(b,z,Z=null){Z===null&&(Z=b),m=ne.get(Z),m.init(z),T.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),b!==Z&&b.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(y._useLegacyLights);const j=new Set;return b.traverse(function(q){const ve=q.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const Te=ve[Se];qe(Te,Z,q),j.add(Te)}else qe(ve,Z,q),j.add(ve)}),T.pop(),m=null,j},this.compileAsync=function(b,z,Z=null){const j=this.compile(b,z,Z);return new Promise(q=>{function ve(){if(j.forEach(function(Se){K.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){q(b);return}setTimeout(ve,10)}be.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let dt=null;function wt(b){dt&&dt(b)}function Je(){lt.stop()}function xt(){lt.start()}const lt=new rp;lt.setAnimationLoop(wt),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(b){dt=b,we.setAnimationLoop(b),b===null?lt.stop():lt.start()},we.addEventListener("sessionstart",Je),we.addEventListener("sessionend",xt),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(z),z=we.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,z,R),m=ne.get(b,T.length),m.init(z),T.push(m),xe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ze.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,te=se.init(this.clippingPlanes,fe),_=oe.get(b,p.length),_.init(),p.push(_),Jn(b,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(G,ue);const Z=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1;Z&&ae.addToRenderList(_,b),this.info.render.frame++,te===!0&&se.beginShadows();const j=m.state.shadowsArray;_e.render(j,b,z),te===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,ve=_.transmissive;if(m.setupLights(y._useLegacyLights),z.isArrayCamera){const Se=z.cameras;if(ve.length>0)for(let Te=0,Ie=Se.length;Te<Ie;Te++){const Oe=Se[Te];Qn(q,ve,b,Oe)}Z&&ae.render(b);for(let Te=0,Ie=Se.length;Te<Ie;Te++){const Oe=Se[Te];rn(_,b,Oe,Oe.viewport)}}else ve.length>0&&Qn(q,ve,b,z),Z&&ae.render(b),rn(_,b,z);R!==null&&($.updateMultisampleRenderTarget(R),$.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,z),Ne.resetDefaultState(),N=-1,S=null,T.pop(),T.length>0?(m=T[T.length-1],te===!0&&se.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Jn(b,z,Z,j){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ze.intersectsSprite(b)){j&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const Se=D.update(b),Te=b.material;Te.visible&&_.push(b,Se,Te,Z,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ze.intersectsObject(b))){const Se=D.update(b),Te=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),pe.copy(Se.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ie=Se.groups;for(let Oe=0,Ge=Ie.length;Oe<Ge;Oe++){const Ye=Ie[Oe],Mt=Te[Ye.materialIndex];Mt&&Mt.visible&&_.push(b,Se,Mt,Z,pe.z,Ye)}}else Te.visible&&_.push(b,Se,Te,Z,pe.z,null)}}const ve=b.children;for(let Se=0,Te=ve.length;Se<Te;Se++)Jn(ve[Se],z,Z,j)}function rn(b,z,Z,j){const q=b.opaque,ve=b.transmissive,Se=b.transparent;m.setupLightsView(Z),te===!0&&se.setGlobalState(y.clippingPlanes,Z),j&&P.viewport(M.copy(j)),q.length>0&&Nn(q,z,Z),ve.length>0&&Nn(ve,z,Z),Se.length>0&&Nn(Se,z,Z),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Qn(b,z,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new is(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?va:Ai,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=m.state.transmissionRenderTarget[j.id],Se=j.viewport||M;ve.setSize(Se.z,Se.w);const Te=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(O),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear();const Ie=y.toneMapping;y.toneMapping=Ti;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),te===!0&&se.setGlobalState(y.clippingPlanes,j),Nn(b,Z,j),$.updateMultisampleRenderTarget(ve),$.updateRenderTargetMipmap(ve),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ye=0,Mt=z.length;Ye<Mt;Ye++){const Ut=z[Ye],Qt=Ut.object,Un=Ut.geometry,tt=Ut.material,Fe=Ut.group;if(tt.side===An&&Qt.layers.test(j.layers)){const rr=tt.side;tt.side=Zt,tt.needsUpdate=!0,sr(Qt,Z,j,Un,tt,Fe),tt.side=rr,tt.needsUpdate=!0,Ge=!0}}Ge===!0&&($.updateMultisampleRenderTarget(ve),$.updateRenderTargetMipmap(ve))}y.setRenderTarget(Te),y.setClearColor(O,Q),Oe!==void 0&&(j.viewport=Oe),y.toneMapping=Ie}function Nn(b,z,Z){const j=z.isScene===!0?z.overrideMaterial:null;for(let q=0,ve=b.length;q<ve;q++){const Se=b[q],Te=Se.object,Ie=Se.geometry,Oe=j===null?Se.material:j,Ge=Se.group;Te.layers.test(Z.layers)&&sr(Te,z,Z,Ie,Oe,Ge)}}function sr(b,z,Z,j,q,ve){b.onBeforeRender(y,z,Z,j,q,ve),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(y,z,Z,j,b,ve),q.transparent===!0&&q.side===An&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,y.renderBufferDirect(Z,z,j,q,b,ve),q.side=Yn,q.needsUpdate=!0,y.renderBufferDirect(Z,z,j,q,b,ve),q.side=An):y.renderBufferDirect(Z,z,j,q,b,ve),b.onAfterRender(y,z,Z,j,q,ve)}function jr(b,z,Z){z.isScene!==!0&&(z=ze);const j=K.get(b),q=m.state.lights,ve=m.state.shadowsArray,Se=q.state.version,Te=V.getParameters(b,q.state,ve,z,Z),Ie=V.getProgramCacheKey(Te);let Oe=j.programs;j.environment=b.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(b.isMeshStandardMaterial?E:re).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",le),Oe=new Map,j.programs=Oe);let Ge=Oe.get(Ie);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===Se)return Bc(b,Te),Ge}else Te.uniforms=V.getUniforms(b),b.onBuild(Z,Te,y),b.onBeforeCompile(Te,y),Ge=V.acquireProgram(Te,Ie),Oe.set(Ie,Ge),j.uniforms=Te.uniforms;const Ye=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ye.clippingPlanes=se.uniform),Bc(b,Te),j.needsLights=wp(b),j.lightsStateVersion=Se,j.needsLights&&(Ye.ambientLightColor.value=q.state.ambient,Ye.lightProbe.value=q.state.probe,Ye.directionalLights.value=q.state.directional,Ye.directionalLightShadows.value=q.state.directionalShadow,Ye.spotLights.value=q.state.spot,Ye.spotLightShadows.value=q.state.spotShadow,Ye.rectAreaLights.value=q.state.rectArea,Ye.ltc_1.value=q.state.rectAreaLTC1,Ye.ltc_2.value=q.state.rectAreaLTC2,Ye.pointLights.value=q.state.point,Ye.pointLightShadows.value=q.state.pointShadow,Ye.hemisphereLights.value=q.state.hemi,Ye.directionalShadowMap.value=q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ye.spotShadowMap.value=q.state.spotShadowMap,Ye.spotLightMatrix.value=q.state.spotLightMatrix,Ye.spotLightMap.value=q.state.spotLightMap,Ye.pointShadowMap.value=q.state.pointShadowMap,Ye.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function Fc(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Fo.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Bc(b,z){const Z=K.get(b);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function bp(b,z,Z,j,q){z.isScene!==!0&&(z=ze),$.resetTextureUnits();const ve=z.fog,Se=j.isMeshStandardMaterial?z.environment:null,Te=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dt,Ie=(j.isMeshStandardMaterial?E:re).get(j.envMap||Se),Oe=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ye=!!Z.morphAttributes.position,Mt=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let Qt=Ti;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Qt=y.toneMapping);const Un=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,tt=Un!==void 0?Un.length:0,Fe=K.get(j),rr=m.state.lights;if(te===!0&&(fe===!0||b!==S)){const on=b===S&&j.id===N;se.setState(j,b,on)}let ft=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rr.state.version||Fe.outputColorSpace!==Te||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==Ie||j.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==se.numPlanes||Fe.numIntersection!==se.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ye||Fe.morphNormals!==Mt||Fe.morphColors!==Ut||Fe.toneMapping!==Qt||Fe.morphTargetsCount!==tt)&&(ft=!0):(ft=!0,Fe.__version=j.version);let Di=Fe.currentProgram;ft===!0&&(Di=jr(j,z,q));let zc=!1,or=!1,ba=!1;const Ot=Di.getUniforms(),ei=Fe.uniforms;if(P.useProgram(Di.program)&&(zc=!0,or=!0,ba=!0),j.id!==N&&(N=j.id,or=!0),zc||S!==b){Ot.setValue(H,"projectionMatrix",b.projectionMatrix),Ot.setValue(H,"viewMatrix",b.matrixWorldInverse);const on=Ot.map.cameraPosition;on!==void 0&&on.setValue(H,pe.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,or=!0,ba=!0)}if(q.isSkinnedMesh){Ot.setOptional(H,q,"bindMatrix"),Ot.setOptional(H,q,"bindMatrixInverse");const on=q.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ot.setValue(H,"boneTexture",on.boneTexture,$))}q.isBatchedMesh&&(Ot.setOptional(H,q,"batchingTexture"),Ot.setValue(H,"batchingTexture",q._matricesTexture,$));const Aa=Z.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&ge.update(q,Z,Di),(or||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,Ot.setValue(H,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ei.envMap.value=Ie,ei.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(ei.envMapIntensity.value=z.environmentIntensity),or&&(Ot.setValue(H,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&Ap(ei,ba),ve&&j.fog===!0&&X.refreshFogUniforms(ei,ve),X.refreshMaterialUniforms(ei,j,ie,ee,m.state.transmissionRenderTarget[b.id]),Fo.upload(H,Fc(Fe),ei,$)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fo.upload(H,Fc(Fe),ei,$),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ot.setValue(H,"center",q.center),Ot.setValue(H,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(H,"normalMatrix",q.normalMatrix),Ot.setValue(H,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const on=j.uniformsGroups;for(let wa=0,Rp=on.length;wa<Rp;wa++){const Hc=on[wa];Ve.update(Hc,Di),Ve.bind(Hc,Di)}}return Di}function Ap(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function wp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,z,Z){K.get(b.texture).__webglTexture=z,K.get(b.depthTexture).__webglTexture=Z;const j=K.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const Z=K.get(b);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Z=0){R=b,I=z,w=Z;let j=!0,q=null,ve=!1,Se=!1;if(b){const Ie=K.get(b);Ie.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):Ie.__webglFramebuffer===void 0?$.setupRenderTarget(b):Ie.__hasExternalTextures&&$.rebindTextures(b,K.get(b.texture).__webglTexture,K.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);const Ge=K.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?q=Ge[z][Z]:q=Ge[z],ve=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?q=K.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?q=Ge[Z]:q=Ge,M.copy(b.viewport),F.copy(b.scissor),Y=b.scissorTest}else M.copy(he).multiplyScalar(ie).floor(),F.copy(ye).multiplyScalar(ie).floor(),Y=Pe;if(P.bindFramebuffer(H.FRAMEBUFFER,q)&&j&&P.drawBuffers(b,q),P.viewport(M),P.scissor(F),P.setScissorTest(Y),ve){const Ie=K.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,Z)}else if(Se){const Ie=K.get(b.texture),Oe=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.__webglTexture,Z||0,Oe)}N=-1},this.readRenderTargetPixels=function(b,z,Z,j,q,ve,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=K.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){P.bindFramebuffer(H.FRAMEBUFFER,Te);try{const Ie=b.texture,Oe=Ie.format,Ge=Ie.type;if(!C.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-j&&Z>=0&&Z<=b.height-q&&H.readPixels(z,Z,j,q,Me.convert(Oe),Me.convert(Ge),ve)}finally{const Ie=R!==null?K.get(R).__webglFramebuffer:null;P.bindFramebuffer(H.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,z,Z=0){const j=Math.pow(2,-Z),q=Math.floor(z.image.width*j),ve=Math.floor(z.image.height*j);$.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,b.x,b.y,q,ve),P.unbindTexture()},this.copyTextureToTexture=function(b,z,Z,j=0){const q=z.image.width,ve=z.image.height,Se=Me.convert(Z.format),Te=Me.convert(Z.type);$.setTexture2D(Z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,b.x,b.y,q,ve,Se,Te,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Se,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,b.x,b.y,Se,Te,z.image),j===0&&Z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Z,j,q=0){const ve=b.max.x-b.min.x,Se=b.max.y-b.min.y,Te=b.max.z-b.min.z,Ie=Me.convert(j.format),Oe=Me.convert(j.type);let Ge;if(j.isData3DTexture)$.setTexture3D(j,0),Ge=H.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)$.setTexture2DArray(j,0),Ge=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Ye=H.getParameter(H.UNPACK_ROW_LENGTH),Mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ut=H.getParameter(H.UNPACK_SKIP_PIXELS),Qt=H.getParameter(H.UNPACK_SKIP_ROWS),Un=H.getParameter(H.UNPACK_SKIP_IMAGES),tt=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,tt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,tt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(Ge,q,z.x,z.y,z.z,ve,Se,Te,Ie,Oe,tt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Ge,q,z.x,z.y,z.z,ve,Se,Te,Ie,tt.data):H.texSubImage3D(Ge,q,z.x,z.y,z.z,ve,Se,Te,Ie,Oe,tt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ye),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ut),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Un),q===0&&j.generateMipmaps&&H.generateMipmap(Ge),P.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),P.unbindTexture()},this.resetState=function(){I=0,w=0,R=null,P.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===xa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BS extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new U;class yc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yh=new U,Kh=new at,$h=new at,HS=new U,Zh=new je,yo=new U,ml=new Ln,Jh=new je,gl=new kr;class VS extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ru,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yo),this.boundingBox.expandByPoint(yo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yo),this.boundingSphere.expandByPoint(yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(s),e.ray.intersectsSphere(ml)!==!1&&(Jh.copy(s).invert(),gl.copy(e.ray).applyMatrix4(Jh),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===j_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Kh.fromBufferAttribute(s.attributes.skinIndex,e),$h.fromBufferAttribute(s.attributes.skinWeight,e),Yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$h.getComponent(r);if(o!==0){const a=Kh.getComponent(r);Zh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(HS.copy(Yh).applyMatrix4(Zh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fp extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dp extends Ct{constructor(e=null,t=1,i=1,s,r,o,a,l,c=qt,u=qt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new je,kS=new je;class Sc{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kS;Qh.multiplyMatrices(a,t[r]),Qh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Sc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new dp(t,e,e,_n,Rn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fp),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Gl extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new je,ef=new je,So=[],tf=new Zn,GS=new je,fr=new Yt,dr=new Ln;class WS extends Yt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,GS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),tf.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(tf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),dr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(i),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),ef.multiplyMatrices(i,As),fr.matrixWorld=ef,fr.raycast(e,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new dp(new Float32Array(s*this.count),s,this.count,Vd,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wr extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jo=new U,Qo=new U,nf=new je,pr=new kr,Eo=new Ln,_l=new U,sf=new U;class Ec extends mt{constructor(e=new Nt,t=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Jo.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Jo.distanceTo(Qo);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;nf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(nf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),y=To(this,e,pr,l,p,T);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=To(this,e,pr,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=To(this,e,pr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=To(this,e,pr,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function To(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Jo.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),t.distanceSqToSegment(Jo,Qo,_l,sf)>i)return;_l.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(_l);if(!(l<e.near||l>e.far))return{distance:l,point:sf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const rf=new U,of=new U;class ya extends Ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)rf.fromBufferAttribute(t,s),of.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+rf.distanceTo(of);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XS extends Ec{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pp extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const af=new je,Wl=new kr,bo=new Ln,Ao=new U;class jS extends mt{constructor(e=new Nt,t=new pp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;af.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ao.fromBufferAttribute(h,m),lf(Ao,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ao.fromBufferAttribute(h,g),lf(Ao,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lf(n,e,t,i,s,r,o){const a=Wl.distanceSqToPoint(n);if(a<t){const l=new U;Wl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Tc extends Nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new U,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sa extends Nt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function T(){const A=new U,I=new U;let w=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const S=[],M=N/r,F=M*(t-e)+e;for(let Y=0;Y<=s;Y++){const O=Y/s,Q=O*l+a,J=Math.sin(Q),ee=Math.cos(Q);I.x=F*J,I.y=-M*i+m,I.z=F*ee,h.push(I.x,I.y,I.z),A.set(J,R,ee).normalize(),f.push(A.x,A.y,A.z),d.push(O,1-M),S.push(g++)}_.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){const M=_[S][N],F=_[S+1][N],Y=_[S+1][N+1],O=_[S][N+1];u.push(M,F,O),u.push(F,Y,O),w+=6}c.addGroup(p,w,0),p+=w}function y(A){const I=g,w=new Ae,R=new U;let N=0;const S=A===!0?e:t,M=A===!0?1:-1;for(let Y=1;Y<=s;Y++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const F=g;for(let Y=0;Y<=s;Y++){const Q=Y/s*l+a,J=Math.cos(Q),ee=Math.sin(Q);R.x=S*ee,R.y=m*M,R.z=S*J,h.push(R.x,R.y,R.z),f.push(0,M,0),w.x=J*.5+.5,w.y=ee*.5*M+.5,d.push(w.x,w.y),g++}for(let Y=0;Y<s;Y++){const O=I+Y,Q=F+Y;A===!0?u.push(Q,Q+1,O):u.push(Q+1,Q,O),N+=3}c.addGroup(p,N,A===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bc extends Sa{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends Nt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,d=new U,g=new Ae;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const T=p+m,y=T,A=T+i+1,I=T+i+2,w=T+1;a.push(y,A,w),a.push(A,I,w)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wc extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const T=[],y=p/i;let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let I=0;I<=t;I++){const w=I/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+A,1-y),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const y=u[p][T+1],A=u[p][T],I=u[p+1][T],w=u[p+1][T+1];(p!==0||o>0)&&d.push(y,A,w),(p!==i-1||l<Math.PI)&&d.push(A,I,w)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends Nt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new U,h=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cc extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Cc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qS extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function wo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function YS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function KS(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function cf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function mp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Xr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $S extends Xr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nh:r=e,a=2*t-i;break;case ih:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nh:o=e,l=2*i-t;break;case ih:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,A=d*m-d*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+T*o[c+I]+y*o[l+I]+A*o[h+I];return r}}class ZS extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class JS extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new JS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ZS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $S(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&YS(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Gs;class Qs extends Dn{}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Fr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class gp extends Dn{}gp.prototype.ValueTypeName="color";class js extends Dn{}js.prototype.ValueTypeName="number";class QS extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ss extends Dn{InterpolantFactoryMethodLinear(e){return new QS(this.times,this.values,this.getValueSize(),e)}}ss.prototype.ValueTypeName="quaternion";ss.prototype.DefaultInterpolation=Gs;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Dn{}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Fr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends Dn{}qs.prototype.ValueTypeName="vector";class eE{constructor(e="",t=-1,i=[],s=n0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(nE(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Dn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=KS(l);l=cf(l,1,u),c=cf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];mp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new js(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(qs,d+".position",f,"pos",s),i(ss,d+".quaternion",f,"rot",s),i(qs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return js;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return gp;case"quaternion":return ss;case"bool":case"boolean":return Qs;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function nE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tE(n.type);if(n.times===void 0){const t=[],i=[];mp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Mi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iE{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const sE=new iE;class tr{constructor(e){this.manager=e!==void 0?e:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class rE extends Error{constructor(e,t){super(e),this.response=t}}class _p extends tr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:i,onError:s});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:y,value:A})=>{if(y)p.close();else{_+=A.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,R=u.length;w<R;w++){const N=u[w];N.onProgress&&N.onProgress(I)}p.enqueue(A),T()}})}}});return new Response(m)}else throw new rE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Mi.add(e,c);const u=Vn[e];delete Vn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Vn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oE extends tr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Br("img");function l(){u(),Mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class aE extends tr{constructor(e){super(e)}load(e,t,i,s){const r=new Ct,o=new oE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ea extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const vl=new je,uf=new U,hf=new U;class Pc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lE extends Pc{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cE extends Ea{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ff=new je,mr=new U,xl=new U;class uE extends Pc{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),i.position.copy(mr),xl.copy(i.position),xl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xl),i.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}}class vp extends Ea{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hE extends Pc{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fE extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new hE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xp extends Ea{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dE extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(e,l),r.manager.itemStart(e)}}const Lc="\\[\\]\\.:\\/",pE=new RegExp("["+Lc+"]","g"),Ic="[^"+Lc+"]",mE="[^"+Lc.replace("\\.","")+"]",gE=/((?:WC+[\/:])*)/.source.replace("WC",Ic),_E=/(WCOD+)?/.source.replace("WCOD",mE),vE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),xE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),ME=new RegExp("^"+gE+_E+vE+xE+"$"),yE=["material","materials","bones","map"];class SE{constructor(e,t,i){const s=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pE,"")}static parseTrackName(e){const t=ME.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);yE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=SE;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class df{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class EE extends ya{constructor(e=10,t=10,i=4473924,s=8947848){i=new Re(i),s=new Re(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Nt;u.setAttribute("position",new rt(l,3)),u.setAttribute("color",new rt(c,3));const h=new Wr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class TE extends ya{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Nt;s.setAttribute("position",new rt(t,3)),s.setAttribute("color",new rt(i,3));const r=new Wr({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Re,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);const bE=n=>{let e=10,t=10,i=null,s=null;const r=l=>{l?(i=new EE(e,t),n.add(i),s=new TE(5),n.add(s)):i&&(n.remove(i),n.remove(s),i=null)};return{enable:r,setSize:l=>{r(!1),e=l,r(!0)},setDivision:l=>{r(!1),t=l,r(!0)},getSize:()=>e,getDivisions:()=>t,isActive:()=>!!i}},pf={type:"change"},Ml={type:"start"},mf={type:"end"},Ro=new kr,gf=new mi,AE=Math.cos(70*qd.DEG2RAD);class wE extends rs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",_e),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pf),i.update(),r=s.NONE},this.update=function(){const x=new U,B=new Pn().setFromUnitVectors(e.up,new U(0,1,0)),W=B.clone().invert(),le=new U,de=new Pn,ke=new U,qe=2*Math.PI;return function(wt=null){const Je=i.object.position;x.copy(Je).sub(i.target),x.applyQuaternion(B),a.setFromVector3(x),i.autoRotate&&r===s.NONE&&Y(M(wt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xt=i.minAzimuthAngle,lt=i.maxAzimuthAngle;isFinite(xt)&&isFinite(lt)&&(xt<-Math.PI?xt+=qe:xt>Math.PI&&(xt-=qe),lt<-Math.PI?lt+=qe:lt>Math.PI&&(lt-=qe),xt<=lt?a.theta=Math.max(xt,Math.min(lt,a.theta)):a.theta=a.theta>(xt+lt)/2?Math.max(xt,a.theta):Math.min(lt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Jn=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)a.radius=he(a.radius);else{const rn=a.radius;a.radius=he(a.radius*c),Jn=rn!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(W),Je.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&w){let rn=null;if(i.object.isPerspectiveCamera){const Qn=x.length();rn=he(Qn*c);const Nn=Qn-rn;i.object.position.addScaledVector(A,Nn),i.object.updateMatrixWorld(),Jn=!!Nn}else if(i.object.isOrthographicCamera){const Qn=new U(I.x,I.y,0);Qn.unproject(i.object);const Nn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Jn=Nn!==i.object.zoom;const sr=new U(I.x,I.y,0);sr.unproject(i.object),i.object.position.sub(sr).add(Qn),i.object.updateMatrixWorld(),rn=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;rn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(rn).add(i.object.position):(Ro.origin.copy(i.object.position),Ro.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ro.direction))<AE?e.lookAt(i.target):(gf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ro.intersectPlane(gf,i.target))))}else if(i.object.isOrthographicCamera){const rn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),rn!==i.object.zoom&&(i.object.updateProjectionMatrix(),Jn=!0)}return c=1,w=!1,Jn||le.distanceToSquared(i.object.position)>o||8*(1-de.dot(i.object.quaternion))>o||ke.distanceToSquared(i.target)>o?(i.dispatchEvent(pf),le.copy(i.object.position),de.copy(i.object.quaternion),ke.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Le),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",X),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",L),i.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_e),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new df,l=new df;let c=1;const u=new U,h=new Ae,f=new Ae,d=new Ae,g=new Ae,_=new Ae,m=new Ae,p=new Ae,T=new Ae,y=new Ae,A=new U,I=new Ae;let w=!1;const R=[],N={};let S=!1;function M(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function F(x){const B=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*B)}function Y(x){l.theta-=x}function O(x){l.phi-=x}const Q=function(){const x=new U;return function(W,le){x.setFromMatrixColumn(le,0),x.multiplyScalar(-W),u.add(x)}}(),J=function(){const x=new U;return function(W,le){i.screenSpacePanning===!0?x.setFromMatrixColumn(le,1):(x.setFromMatrixColumn(le,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(W),u.add(x)}}(),ee=function(){const x=new U;return function(W,le){const de=i.domElement;if(i.object.isPerspectiveCamera){const ke=i.object.position;x.copy(ke).sub(i.target);let qe=x.length();qe*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*W*qe/de.clientHeight,i.object.matrix),J(2*le*qe/de.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(W*(i.object.right-i.object.left)/i.object.zoom/de.clientWidth,i.object.matrix),J(le*(i.object.top-i.object.bottom)/i.object.zoom/de.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(x,B){if(!i.zoomToCursor)return;w=!0;const W=i.domElement.getBoundingClientRect(),le=x-W.left,de=B-W.top,ke=W.width,qe=W.height;I.x=le/ke*2-1,I.y=-(de/qe)*2+1,A.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function he(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function ye(x){h.set(x.clientX,x.clientY)}function Pe(x){ue(x.clientX,x.clientX),p.set(x.clientX,x.clientY)}function Ze(x){g.set(x.clientX,x.clientY)}function te(x){f.set(x.clientX,x.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const B=i.domElement;Y(2*Math.PI*d.x/B.clientHeight),O(2*Math.PI*d.y/B.clientHeight),h.copy(f),i.update()}function fe(x){T.set(x.clientX,x.clientY),y.subVectors(T,p),y.y>0?ie(F(y.y)):y.y<0&&G(F(y.y)),p.copy(T),i.update()}function xe(x){_.set(x.clientX,x.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),ee(m.x,m.y),g.copy(_),i.update()}function pe(x){ue(x.clientX,x.clientY),x.deltaY<0?G(F(x.deltaY)):x.deltaY>0&&ie(F(x.deltaY)),i.update()}function ze(x){let B=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(-i.keyPanSpeed,0),B=!0;break}B&&(x.preventDefault(),i.update())}function He(x){if(R.length===1)h.set(x.pageX,x.pageY);else{const B=Ue(x),W=.5*(x.pageX+B.x),le=.5*(x.pageY+B.y);h.set(W,le)}}function H(x){if(R.length===1)g.set(x.pageX,x.pageY);else{const B=Ue(x),W=.5*(x.pageX+B.x),le=.5*(x.pageY+B.y);g.set(W,le)}}function et(x){const B=Ue(x),W=x.pageX-B.x,le=x.pageY-B.y,de=Math.sqrt(W*W+le*le);p.set(0,de)}function be(x){i.enableZoom&&et(x),i.enablePan&&H(x)}function C(x){i.enableZoom&&et(x),i.enableRotate&&He(x)}function P(x){if(R.length==1)f.set(x.pageX,x.pageY);else{const W=Ue(x),le=.5*(x.pageX+W.x),de=.5*(x.pageY+W.y);f.set(le,de)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const B=i.domElement;Y(2*Math.PI*d.x/B.clientHeight),O(2*Math.PI*d.y/B.clientHeight),h.copy(f)}function k(x){if(R.length===1)_.set(x.pageX,x.pageY);else{const B=Ue(x),W=.5*(x.pageX+B.x),le=.5*(x.pageY+B.y);_.set(W,le)}m.subVectors(_,g).multiplyScalar(i.panSpeed),ee(m.x,m.y),g.copy(_)}function K(x){const B=Ue(x),W=x.pageX-B.x,le=x.pageY-B.y,de=Math.sqrt(W*W+le*le);T.set(0,de),y.set(0,Math.pow(T.y/p.y,i.zoomSpeed)),ie(y.y),p.copy(T);const ke=(x.pageX+B.x)*.5,qe=(x.pageY+B.y)*.5;ue(ke,qe)}function $(x){i.enableZoom&&K(x),i.enablePan&&k(x)}function re(x){i.enableZoom&&K(x),i.enableRotate&&P(x)}function E(x){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",v),i.domElement.addEventListener("pointerup",L)),!Ne(x)&&(Ee(x),x.pointerType==="touch"?ae(x):D(x)))}function v(x){i.enabled!==!1&&(x.pointerType==="touch"?ge(x):V(x))}function L(x){switch(Me(x),R.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",L),i.dispatchEvent(mf),r=s.NONE;break;case 1:const B=R[0],W=N[B];ae({pointerId:B,pageX:W.x,pageY:W.y});break}}function D(x){let B;switch(x.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case as.DOLLY:if(i.enableZoom===!1)return;Pe(x),r=s.DOLLY;break;case as.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;Ze(x),r=s.PAN}else{if(i.enableRotate===!1)return;ye(x),r=s.ROTATE}break;case as.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;ye(x),r=s.ROTATE}else{if(i.enablePan===!1)return;Ze(x),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ml)}function V(x){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;te(x);break;case s.DOLLY:if(i.enableZoom===!1)return;fe(x);break;case s.PAN:if(i.enablePan===!1)return;xe(x);break}}function X(x){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(x.preventDefault(),i.dispatchEvent(Ml),pe(oe(x)),i.dispatchEvent(mf))}function oe(x){const B=x.deltaMode,W={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(B){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return x.ctrlKey&&!S&&(W.deltaY*=10),W}function ne(x){x.key==="Control"&&(S=!0,i.domElement.getRootNode().addEventListener("keyup",se,{passive:!0,capture:!0}))}function se(x){x.key==="Control"&&(S=!1,i.domElement.getRootNode().removeEventListener("keyup",se,{passive:!0,capture:!0}))}function _e(x){i.enabled===!1||i.enablePan===!1||ze(x)}function ae(x){switch(Ve(x),R.length){case 1:switch(i.touches.ONE){case ls.ROTATE:if(i.enableRotate===!1)return;He(x),r=s.TOUCH_ROTATE;break;case ls.PAN:if(i.enablePan===!1)return;H(x),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(x),r=s.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(x),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ml)}function ge(x){switch(Ve(x),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;P(x),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;k(x),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(x),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;re(x),i.update();break;default:r=s.NONE}}function Le(x){i.enabled!==!1&&x.preventDefault()}function Ee(x){R.push(x.pointerId)}function Me(x){delete N[x.pointerId];for(let B=0;B<R.length;B++)if(R[B]==x.pointerId){R.splice(B,1);return}}function Ne(x){for(let B=0;B<R.length;B++)if(R[B]==x.pointerId)return!0;return!1}function Ve(x){let B=N[x.pointerId];B===void 0&&(B=new Ae,N[x.pointerId]=B),B.set(x.pageX,x.pageY)}function Ue(x){const B=x.pointerId===R[0]?R[1]:R[0];return N[B]}i.domElement.addEventListener("contextmenu",Le),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",X,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}function _f(n,e){if(e===i0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Hl||e===Xd){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Hl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class RE extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new qE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Cr.extractUrlBase(e);o=Cr.resolveURL(c,this.path)}else o=Cr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _p(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{o[Ke.KHR_BINARY_GLTF]=new YE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new aT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new LE;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new KE(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new $E;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new ZE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function CE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PE{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fE(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vp(u),c.distance=h;break;case"spot":c=new cE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class LE{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return xi}extendParams(e,t,i){const s=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class IE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class DE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(r)}}class NE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class UE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class BE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Dt),Promise.all(r)}}class zE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class HE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Dt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(r)}}class VE{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class kE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class GE{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class WE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jE{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class qE{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new je,m=new U,p=new Pn,T=new U(1,1,1),y=new WS(g.geometry,g.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&T.fromBufferAttribute(l.SCALE,A),y.setMatrixAt(A,_.compose(m,p,T));for(const A in l)if(A==="_COLOR_0"){const I=l[A];y.instanceColor=new Gl(I.array,I.itemSize,I.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Mp="glTF",gr=12,vf={JSON:1313821514,BIN:5130562};class YE{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===vf.JSON){const c=new Uint8Array(e,gr+o,a);this.content=i.decode(c)}else if(l===vf.BIN){const c=gr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Xl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Xl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Fs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Dt,f)})})}}class $E{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZE{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class yp extends Xr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,T=1-m,y=p-f+h;for(let A=0;A!==a;A++){const I=o[_+A+a],w=o[_+A+l]*u,R=o[g+A+a],N=o[g+A]*u;r[A]=T*I+y*w+m*R+p*N}return r}}const JE=new Pn;class QE extends yp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return JE.fromArray(r).normalize().toArray(r),r}}const ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xf={9728:qt,9729:sn,9984:Od,9985:Oo,9986:vr,9987:Wn},Mf={33071:vi,33648:qo,10497:Vs},yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eT={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Fr},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Cc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),n.DefaultMaterial}function ki(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function gi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function iT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sT(n){let e;const t=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+El(t.attributes):e=n.indices+":"+El(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+El(n.targets[i]);return e}function El(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function jl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const oT=new je;class aT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new aE(this.options.manager):this.textureLoader=new dE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _p(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ki(r,a,s),gi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Cr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=yl[s.type],a=Fs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Kt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=yl[s.type],c=Fs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(T);y||(_=new c(a,p*d,s.count*d/u),y=new zS(_,d/u),t.cache.add(T,y)),m=new yc(y,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Kt(_,l,g);if(s.sparse!==void 0){const p=yl.SCALAR,T=Fs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,I=new T(o[1],y,s.sparse.count*p),w=new c(o[2],A,s.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,N=I.length;R<N;R++){const S=I[R];if(m.setX(S,w[R*l]),l>=2&&m.setY(S,w[R*l+1]),l>=3&&m.setZ(S,w[R*l+2]),l>=4&&m.setW(S,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=xf[f.magFilter]||sn,u.minFilter=xf[f.minFilter]||Wn,u.wrapS=Mf[f.wrapS]||Vs,u.wrapT=Mf[f.wrapT]||Vs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ct(_);m.needsUpdate=!0,f(m)}),t.load(Cr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||rT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new pp,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Wr,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Cc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const h=s[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Wt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=An);const u=r.alphaMode||Sl.OPAQUE;if(u===Sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Sl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==xi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xi){const h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],Dt)}return r.emissiveTexture!==void 0&&o!==xi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),gi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ki(s,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=yf(new Nt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?tT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const T=c[d];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new VS(_,T):new Yt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?p.geometry=_f(p.geometry,Xd):m.mode===ln.TRIANGLE_FAN&&(p.geometry=_f(p.geometry,Hl));else if(m.mode===ln.LINES)p=new ya(_,T);else if(m.mode===ln.LINE_STRIP)p=new Ec(_,T);else if(m.mode===ln.LINE_LOOP)p=new XS(_,T);else if(m.mode===ln.POINTS)p=new jS(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),gi(p,r),m.extensions&&ki(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ki(s,h[0],r),h[0];const f=new Zi;r.extensions&&ki(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xt(qd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new xc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),gi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let T=0,y=f.length;T<y;T++){const A=f[T],I=d[T],w=g[T],R=_[T],N=m[T];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=i._createAnimationTracks(A,I,w,R,N);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new eE(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,oT)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new fp:c.length>1?u=new Zi:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),gi(u,r),r.extensions&&ki(i,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Zi;i.name&&(r.name=s.createUniqueName(i.name)),gi(r,i),i.extensions&&ki(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Mn||f instanceof Ct)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];li[r.path]===li.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(li[r.path]){case li.weights:c=js;break;case li.rotation:c=ss;break;case li.position:case li.scale:c=qs;break;default:switch(i.itemSize){case 1:c=js;break;case 2:case 3:default:c=qs;break}break}const u=s.interpolation!==void 0?eT[s.interpolation]:Gs,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+li[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=jl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ss?QE:yp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lT(n,e,t){const i=e.attributes,s=new Zn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=jl(Fs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=jl(Fs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function yf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Xl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==Dt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),gi(n,e),lT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nT(n,e.targets,t):n})}const Ta=new BS,Ys=new Xt(75,window.innerWidth/window.innerHeight,.1,1e3),Dc=new FS;Ys.position.y=2;Ys.position.z=5;const cT=new wE(Ys,Dc.domElement),uT=Ta.add,Nc=bE(Ta),Sp=()=>{Nc.enable(!0)},hT=()=>{Nc.enable(!1)},fT=({width:n,height:e})=>{Dc.setSize(n,e),Ys.aspect=n/e,Ys.updateProjectionMatrix()};Ta.add(new xp("#ffffff",1));Sp();const dT={scene:Ta,camera:Ys,renderer:Dc,add2Scene:uT,controls:cT,activateAssistanceGrid:Sp,deactivateAssistanceGrid:hT,grid:Nc,resizeRatio:fT},De=(n,e)=>{let t=e;return{getName:()=>n+"",setValue:o=>{switch(typeof t){case"number":t=parseFloat(o).toFixed(2);break;case"boolean":t=o.toLocaleLowerCase()==="true";break;default:t=o}},getValue:()=>t}},Pi={x:0,y:0,z:0},Li={x:0,y:0,z:0},Ks=parseFloat(2*Math.PI+"").toFixed(2),pT=[{name:"Dimensions",sub:[{name:"Width",field:De("width",1)},{name:"Height",field:De("height",1)},{name:"Depth",field:De("depth",1)}]},{name:"Segments for",sub:[{name:"Width",field:De("width",1)},{name:"Height",field:De("height",1)},{name:"Depth",field:De("depth",1)}]}],Wi={name:"Box",fields:pT,position:Pi,rotation:Li,create:()=>new Zs(Wi.fields[0].sub[0].field.getValue(),Wi.fields[0].sub[1].field.getValue(),Wi.fields[0].sub[2].field.getValue(),Wi.fields[1].sub[0].field.getValue(),Wi.fields[1].sub[1].field.getValue(),Wi.fields[1].sub[2].field.getValue())},mT=[{name:"Dimensions",sub:[{name:"Radius",field:De("radius",1)}]},{name:"Segments",sub:[{name:"Amount",field:De("amount",20)}]},{name:"Angle",sub:[{name:"Start",field:De("start",0)},{name:"Length",field:De("length",Ks)}]}],Mr={name:"Circle",fields:mT,position:Pi,rotation:Li,create:()=>new Tc(Mr.fields[0].sub[0].field.getValue(),Mr.fields[1].sub[0].field.getValue(),Mr.fields[2].sub[0].field.getValue(),Mr.fields[2].sub[1].field.getValue())},gT=[{name:"Dimensions",sub:[{name:"Radius",field:De("radius",1)},{name:"Height",field:De("height",1)}]},{name:"Segments",sub:[{name:"Radial",field:De("radial",20)},{name:"Height",field:De("height",5)},{name:"Open ended",field:De("openEnded",!1)}]},{name:"Angle",sub:[{name:"Start",field:De("start",0)},{name:"Length",field:De("length",2*Math.PI)}]}],ui={name:"Cone",fields:gT,position:Pi,rotation:Li,create:()=>new bc(ui.fields[0].sub[0].field.getValue(),ui.fields[0].sub[1].field.getValue(),ui.fields[1].sub[0].field.getValue(),ui.fields[1].sub[1].field.getValue(),ui.fields[1].sub[2].field.getValue(),ui.fields[2].sub[0].field.getValue(),ui.fields[2].sub[1].field.getValue())},_T=[{name:"Dimensions",sub:[{name:"Radius top",field:De("radiusTop",1)},{name:"Radius bottom",field:De("radiusBottom",1)},{name:"Height",field:De("height",1)}]},{name:"Segments",sub:[{name:"Radial",field:De("radial",20)},{name:"Height",field:De("height",5)},{name:"Open ended",field:De("openEnded",!1)}]},{name:"Angle",sub:[{name:"Start",field:De("start",0)},{name:"Length",field:De("length",Ks)}]}],Gn={name:"Cylinder",fields:_T,position:Pi,rotation:Li,create:()=>new Sa(Gn.fields[0].sub[0].field.getValue(),Gn.fields[0].sub[1].field.getValue(),Gn.fields[0].sub[2].field.getValue(),Gn.fields[1].sub[0].field.getValue(),Gn.fields[1].sub[1].field.getValue(),Gn.fields[1].sub[2].field.getValue(),Gn.fields[2].sub[0].field.getValue(),Gn.fields[2].sub[1].field.getValue())},vT=[{name:"Dimensions",sub:[{name:"Width",field:De("width",1)},{name:"Height",field:De("height",1)}]},{name:"Segments",sub:[{name:"Width",field:De("width",5)},{name:"Height",field:De("height",5)}]}],yr={name:"Plane",fields:vT,position:Pi,rotation:Li,create:()=>new Gr(yr.fields[0].sub[0].field.getValue(),yr.fields[0].sub[1].field.getValue(),yr.fields[1].sub[0].field.getValue(),yr.fields[1].sub[1].field.getValue())},xT=[{name:"Dimensions",sub:[{name:"Radius inner",field:De("radiusInner",1)},{name:"Radius outer",field:De("radiusOuter",1)}]},{name:"Segments",sub:[{name:"Theta",field:De("theta",20)},{name:"Phi",field:De("phi",5)},{name:"Open ended",field:De("openEnded",!1)}]},{name:"Angle",sub:[{name:"Start",field:De("start",0)},{name:"Length",field:De("length",Ks)}]}],Xi={name:"Ring",fields:xT,position:Pi,rotation:Li,create:()=>new Ac(Xi.fields[0].sub[0].field.getValue(),Xi.fields[0].sub[1].field.getValue(),Xi.fields[1].sub[0].field.getValue(),Xi.fields[1].sub[1].field.getValue(),Xi.fields[2].sub[0].field.getValue(),Xi.fields[2].sub[1].field.getValue())},MT=[{name:"Dimensions",sub:[{name:"Radius",field:De("radius",1)}]},{name:"Segments",sub:[{name:"Width",field:De("width",15)},{name:"Height",field:De("height",15)}]},{name:"Angle",sub:[{name:"Phi start",field:De("phiStart",0)},{name:"Phi length",field:De("phiLength",Ks)},{name:"Theta start",field:De("thetaStart",0)},{name:"Theta length",field:De("thetaLength",Ks)}]}],hi={name:"Sphere",fields:MT,position:Pi,rotation:Li,create:()=>new wc(hi.fields[0].sub[0].field.getValue(),hi.fields[1].sub[0].field.getValue(),hi.fields[1].sub[1].field.getValue(),hi.fields[2].sub[0].field.getValue(),hi.fields[2].sub[1].field.getValue(),hi.fields[2].sub[2].field.getValue(),hi.fields[2].sub[3].field.getValue())},yT=[{name:"Dimensions",sub:[{name:"Radius",field:De("radius",1)},{name:"Tube",field:De("tube",1)}]},{name:"Segments",sub:[{name:"Radial",field:De("radial",20)},{name:"Tubular",field:De("tubular",20)}]},{name:"Angle",sub:[{name:"Arc",field:De("arc",Ks)}]}],ws={name:"Torus",fields:yT,position:Pi,rotation:Li,create:()=>new Rc(ws.fields[0].sub[0].field.getValue(),ws.fields[0].sub[1].field.getValue(),ws.fields[1].sub[0].field.getValue(),ws.fields[1].sub[1].field.getValue(),ws.fields[2].sub[0].field.getValue())},ST=[Wi,Mr,ui,Gn,yr,Xi,hi,ws],nr=Id("three",()=>{const n=$f(dT),e=es([]),t={intensitivy:1,color:"#ffffff"},i=es([]),s=es([]);return{threeContext:n,elements:e,ambientLight:t,additionalLights:i,glsfModels:s}}),Sf=n=>{const e=n.target;return parseFloat(e.value)},ET=Kn({name:"CameraWidget",setup(){const n=nr(),{camera:e}=n.threeContext;return{camera:e,changePosition:(s,r)=>{const o=Sf(s);if(o===0||o)switch(r){case"x":e.position.x=o;break;case"y":e.position.y=o;break;case"z":e.position.z=o;break}},changeRotation:(s,r)=>{const o=Sf(s);if(o===0||o)switch(r){case"x":e.rotation.x=o;break;case"y":e.rotation.y=o;break;case"z":e.rotation.z=o;break}}}}}),Ii=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Uc=n=>(ca("data-v-ad1ebea5"),n=n(),ua(),n),TT=Uc(()=>ce("div",null,"Camera Widget",-1)),bT=Uc(()=>ce("legend",null,"Position",-1)),AT=Uc(()=>ce("legend",null,"Rotation",-1));function wT(n,e,t,i,s,r){return vt(),Et(zt,null,[TT,ce("fieldset",null,[bT,ce("span",null,[ot("x: "),pt(ce("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.camera.position.x=o),onInput:e[1]||(e[1]=o=>n.changePosition(o,"x"))},null,544),[[_t,n.camera.position.x]])]),ce("span",null,[ot("y: "),pt(ce("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>n.camera.position.y=o),onInput:e[3]||(e[3]=o=>n.changePosition(o,"y"))},null,544),[[_t,n.camera.position.y]])]),ce("span",null,[ot("z: "),pt(ce("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.camera.position.z=o),onInput:e[5]||(e[5]=o=>n.changePosition(o,"z"))},null,544),[[_t,n.camera.position.z]])])]),ce("fieldset",null,[AT,ce("span",null,[ot("x: "),pt(ce("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.camera.rotation.x=o),onInput:e[7]||(e[7]=o=>n.changeRotation(o,"x"))},null,544),[[_t,n.camera.rotation.x]])]),ce("span",null,[ot("y: "),pt(ce("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.camera.rotation.y=o),onInput:e[9]||(e[9]=o=>n.changeRotation(o,"y"))},null,544),[[_t,n.camera.rotation.y]])]),ce("span",null,[ot("z: "),pt(ce("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>n.camera.rotation.z=o),onInput:e[11]||(e[11]=o=>n.changeRotation(o,"z"))},null,544),[[_t,n.camera.rotation.z]])])])],64)}const Co=Ii(ET,[["render",wT],["__scopeId","data-v-ad1ebea5"]]),Ep=n=>{var e;return{name:n.name,field:n.field,hasSubs:!!n.sub,subs:(e=n.sub)==null?void 0:e.map(Ep)}},RT=Kn({setup(){const n=nr(),e=ST,t=gt(0),i=gt(0),s=gt(0),r=gt(0),o=gt(0),a=gt(0),l=gt(0),c=gt("#00ff00");let u=null,h=null;const f=()=>{const w=e[l.value];return w.fields?w.fields.map(Ep):[]},d=()=>!isNaN(t.value)&&!isNaN(i.value)&&!isNaN(s.value)&&!isNaN(r.value)&&!isNaN(o.value)&&!isNaN(a.value),g=()=>/^#[0-9A-F]{6}$/i.test(c.value),_=()=>{if(h&&u){const{threeContext:w}=n;w.scene.remove(u),w.scene.remove(h)}u=null,h=null},m=()=>{if(_(),!d()||!g())return;const w=e[l.value],{threeContext:R}=n,N=w.create();N.rotateX(r.value),N.rotateY(o.value),N.rotateZ(a.value);const S=new xi({color:c.value,blendAlpha:.5});S.transparent=!0,S.opacity=.3,h=new Yt(N,S),h.position.set(t.value,i.value,s.value);const M=new Wr({color:c.value});u=new ya(N,M),u.position.set(t.value,i.value,s.value),R.scene.add(u),R.scene.add(h)},p=()=>{const w=e[l.value],{threeContext:R,elements:N}=n,S=w.create();S.rotateX(r.value),S.rotateY(o.value),S.rotateZ(a.value);const M=new qS({color:c.value}),F=new Yt(S,M);F.position.set(t.value,i.value,s.value),R.scene.add(F),N.push({geometry:S,material:M,element:F}),T(),y()},T=()=>{t.value=0,i.value=0,s.value=0},y=()=>{r.value=0,o.value=0,a.value=0},A=(w,R)=>{var N=w.target;R.setValue(N.value),m()},I=(w,R)=>{var N=w.target;R.setValue(N.checked+""),m()};return fa(m),cc(()=>{_()}),pn(t,m),pn(i,m),pn(s,m),pn(r,m),pn(o,m),pn(a,m),pn(c,m),{x:t,y:i,z:s,rx:r,ry:o,rz:a,color:c,geometries:e,geoType:l,addElement:p,getFields:f,updateValue:A,updateCheckbox:I,cleanup:_,previewElement:m}}}),ir=n=>(ca("data-v-ebefa678"),n=n(),ua(),n),CT=ir(()=>ce("div",null,"Element Widget",-1)),PT={class:"form"},LT=ir(()=>ce("legend",null,"Geometry",-1)),IT=["value"],DT={key:0},NT=ir(()=>ce("legend",null,"Geometry specific",-1)),UT=["checked","value","onChange"],OT=["value","onKeyup"],FT=ir(()=>ce("legend",null,"Position",-1)),BT=ir(()=>ce("legend",null,"Rotation",-1)),zT=ir(()=>ce("legend",null,"Material",-1));function HT(n,e,t,i,s,r){return vt(),Et(zt,null,[CT,ce("div",PT,[ce("fieldset",null,[LT,ce("span",null,[ot("Type: "),pt(ce("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.geoType=o),onChange:e[1]||(e[1]=()=>{n.cleanup(),n.previewElement()})},[(vt(!0),Et(zt,null,Ia(n.geometries,(o,a)=>(vt(),Et("option",{value:a},Ca(o.name),9,IT))),256))],544),[[$g,n.geoType]])]),n.geometries[n.geoType].fields?(vt(),Et("fieldset",DT,[NT,(vt(!0),Et(zt,null,Ia(n.getFields(),o=>(vt(),Et("fieldset",null,[ce("legend",null,Ca(o.name),1),(vt(!0),Et(zt,null,Ia(o.subs,a=>(vt(),Et("span",null,[ot(Ca(a.name)+": ",1),typeof a.field.getValue()=="boolean"?(vt(),Et("input",{key:0,type:"checkbox",checked:!!a.field.getValue(),value:a.field.getValue(),onChange:l=>n.updateCheckbox(l,a.field)},null,40,UT)):lu("",!0),ce("input",{value:a.field.getValue(),onKeyup:l=>n.updateValue(l,a.field)},null,40,OT)]))),256))]))),256))])):lu("",!0),ce("fieldset",null,[FT,ce("span",null,[ot("x: "),pt(ce("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>n.x=o)},null,512),[[_t,n.x]])]),ce("span",null,[ot("y: "),pt(ce("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>n.y=o)},null,512),[[_t,n.y]])]),ce("span",null,[ot("z: "),pt(ce("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.z=o)},null,512),[[_t,n.z]])])]),ce("fieldset",null,[BT,ce("span",null,[ot("x: "),pt(ce("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>n.rx=o)},null,512),[[_t,n.rx]])]),ce("span",null,[ot("y: "),pt(ce("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.ry=o)},null,512),[[_t,n.ry]])]),ce("span",null,[ot("z: "),pt(ce("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>n.rz=o)},null,512),[[_t,n.rz]])])])]),ce("fieldset",null,[zT,ce("span",null,[ot("Color: "),pt(ce("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.color=o)},null,512),[[_t,n.color]])])]),ce("input",{type:"button",value:"Add",onClick:e[9]||(e[9]=o=>n.addElement())})])],64)}const Ef=Ii(RT,[["render",HT],["__scopeId","data-v-ebefa678"]]),VT=Kn({setup(){const n=nr(),{ambientLight:e,threeContext:t,additionalLights:i}=n,s=gt(e.color),r=gt(e.intensitivy),o=gt("#ffffff"),a=gt(10),l=gt(0),c=gt(0),u=gt(0),h=()=>{const g=s.value,_=r.value;n.ambientLight.color=g,n.ambientLight.intensitivy=_,f(),t.scene.add(new xp(g,_))},f=()=>{const{scene:g}=t;var _=g.children.filter(m=>m.type==="AmbientLight");_.forEach(m=>g.remove(m))};return{ambientColor:s,ambientIntensity:r,currentColor:o,currentIntensity:a,x:l,y:c,z:u,saveAmbientLight:h,removeAmbientLight:f,addPointLight:()=>{const g=new vp(o.value,a.value,0,2);g.position.set(l.value,c.value,u.value),i.push({color:o.value,intensity:a.value,position:{x:l.value,y:c.value,z:u.value}}),t.scene.add(g)}}}}),Oc=n=>(ca("data-v-1b7666e2"),n=n(),ua(),n),kT={class:"form"},GT=Oc(()=>ce("legend",null,"Ambient light",-1)),WT={class:"button-wrapper"},XT=Oc(()=>ce("legend",null,"Additional lights",-1)),jT=Oc(()=>ce("legend",null,"Position",-1)),qT={class:"button-wrapper"};function YT(n,e,t,i,s,r){return vt(),Et(zt,null,[ot(" LightWidget "),ce("div",kT,[ce("fieldset",null,[GT,ce("span",null,[ot("Color: "),pt(ce("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.ambientColor=o)},null,512),[[_t,n.ambientColor]])]),ce("span",null,[ot("Intensitivy: "),pt(ce("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>n.ambientIntensity=o)},null,512),[[_t,n.ambientIntensity]])]),ce("div",WT,[ce("button",{onClick:e[2]||(e[2]=(...o)=>n.saveAmbientLight&&n.saveAmbientLight(...o))},"Save"),ce("button",{onClick:e[3]||(e[3]=(...o)=>n.removeAmbientLight&&n.removeAmbientLight(...o))},"Remove")])]),ce("fieldset",null,[XT,ce("span",null,[ot("Color: "),pt(ce("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.currentColor=o)},null,512),[[_t,n.currentColor]])]),ce("span",null,[ot("Intensitivy: "),pt(ce("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>n.currentIntensity=o)},null,512),[[_t,n.currentIntensity]])]),ce("fieldset",null,[jT,ce("span",null,[ot("x: "),pt(ce("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.x=o)},null,512),[[_t,n.x]])]),ce("span",null,[ot("y: "),pt(ce("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>n.y=o)},null,512),[[_t,n.y]])]),ce("span",null,[ot("z: "),pt(ce("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.z=o)},null,512),[[_t,n.z]])])]),ce("div",qT,[ce("button",{onClick:e[9]||(e[9]=(...o)=>n.addPointLight&&n.addPointLight(...o))},"Add")])])])],64)}const Tf=Ii(VT,[["render",YT],["__scopeId","data-v-1b7666e2"]]),KT=Kn({setup(){const n=nr(),{threeContext:e}=n,{grid:t}=e,i=gt(t.isActive()),s=gt(t.getSize()),r=gt(t.getDivisions());return{gridActive:i,activateGrid:c=>{const u=c.target;i.value=u.checked,t.enable(u.checked)},setSize:c=>{const u=c.target,h=parseFloat(u.value);h&&t.setSize(h),s.value=t.getSize()},setDivision:c=>{const u=c.target,h=parseFloat(u.value);h&&t.setDivision(h),r.value=t.getDivisions()},grid:t,size:s,divisions:r}}}),$T=["checked"],ZT=["disabled"],JT=["disabled"];function QT(n,e,t,i,s,r){return vt(),Et("fieldset",null,[ce("legend",null,[ot("Grid "),ce("input",{type:"checkbox",checked:n.gridActive,onChange:e[0]||(e[0]=(...o)=>n.activateGrid&&n.activateGrid(...o))},null,40,$T)]),ce("span",null,[ot("Size: "),pt(ce("input",{onChange:e[1]||(e[1]=(...o)=>n.setSize&&n.setSize(...o)),disabled:!n.gridActive,"onUpdate:modelValue":e[2]||(e[2]=o=>n.size=o)},null,40,ZT),[[_t,n.size]])]),ce("span",null,[ot("Division: "),pt(ce("input",{onChange:e[3]||(e[3]=(...o)=>n.setDivision&&n.setDivision(...o)),disabled:!n.gridActive,"onUpdate:modelValue":e[4]||(e[4]=o=>n.divisions=o)},null,40,JT),[[_t,n.divisions]])])])}const Po=Ii(KT,[["render",QT],["__scopeId","data-v-be98945a"]]),eb=Kn({setup(){const n=gt(null);return fa(()=>{const t=n.value;t&&t.addEventListener("change",()=>{var r;if(!((r=t.files)!=null&&r.length))return;const i=t.files[0],s=new FileReader;s.addEventListener("load",o=>{var c;const a=(c=o.target)==null?void 0:c.result;new RE().parse(a,"",u=>{const{threeContext:h,glsfModels:f}=nr();h.scene.add(u.scene),f.push(u)},()=>{console.log("Error")})}),s.readAsText(i)})}),{triggerModelFileSelect:()=>{n.value.click()},modelFileSelectButton:n}}}),Tp=n=>(ca("data-v-f96a27cf"),n=n(),ua(),n),tb=Tp(()=>ce("div",null,"Element Widget",-1)),nb={class:"form"},ib=Tp(()=>ce("legend",null,"Source",-1)),sb={ref:"modelFileSelectButton",type:"file",accept:".gltf",hidden:""};function rb(n,e,t,i,s,r){return vt(),Et(zt,null,[tb,ce("div",nb,[ce("fieldset",null,[ib,ce("input",sb,null,512),ce("button",{onClick:e[0]||(e[0]=(...o)=>n.triggerModelFileSelect&&n.triggerModelFileSelect(...o))},"Select model")])])],64)}const ob=Ii(eb,[["render",rb],["__scopeId","data-v-f96a27cf"]]),ab=Kn({name:"EntityTreeWidget",components:{CameraWidget:Co,ElementWidget:Ef,LightWidget:Tf,SceneWidget:Po},setup(){const n=Dd();return{activateLightWidget:()=>{n.widget=Tf},activateElementWidget:()=>{n.widget=Ef},activateImporterWidget:()=>{n.widget=ob},toggleCamera:()=>{n.widget=n.widget==Co?null:Co},toggleScene:()=>{n.widget=n.widget==Po?null:Po},selectionStore:n,isSelected:a=>{switch(a){case"camera":return n.widget==Co;case"scene":return n.widget==Po;default:return!1}}}}}),lb={class:"entity-tree-wrapper"};function cb(n,e,t,i,s,r){return vt(),Et("div",lb,[ce("input",{type:"button",onClick:e[0]||(e[0]=(...o)=>n.toggleCamera&&n.toggleCamera(...o)),class:Pr(n.isSelected("camera")?"selected":""),value:"Camera"},null,2),ce("input",{type:"button",onClick:e[1]||(e[1]=(...o)=>n.toggleScene&&n.toggleScene(...o)),class:Pr(n.isSelected("scene")?"selected":""),value:"Scene"},null,2),ce("input",{type:"button",onClick:e[2]||(e[2]=(...o)=>n.activateLightWidget&&n.activateLightWidget(...o)),value:"Add Light"}),ce("input",{type:"button",onClick:e[3]||(e[3]=(...o)=>n.activateElementWidget&&n.activateElementWidget(...o)),value:"Add Element"}),ce("input",{type:"button",onClick:e[4]||(e[4]=(...o)=>n.activateImporterWidget&&n.activateImporterWidget(...o)),value:"Import Element"})])}const ub=Ii(ab,[["render",cb]]),hb=Kn({name:"ThreeDPreview",setup(){const n=gt(),e=nr(),{threeContext:t}=e,i=()=>{const r=n.value.offsetWidth,o=n.value.offsetHeight;t.resizeRatio({width:r,height:o}),n.value.appendChild(t.renderer.domElement)},s=()=>{const r=n.value.offsetWidth-6,o=n.value.offsetHeight-6;t.resizeRatio({width:r,height:o})};return fa(()=>{i(),window.addEventListener("resize",s);const r=()=>{requestAnimationFrame(r);const{renderer:o,scene:a,camera:l,controls:c}=t;o.render(a,l),c.update};r()}),cc(()=>{window.removeEventListener("resize",s)}),{threeContainer:n}}}),fb={class:"threeWrapperDiv"},db={ref:"threeContainer",class:"threeDiv"};function pb(n,e,t,i,s,r){return vt(),Et("div",fb,[ce("div",db,null,512)])}const mb=Ii(hb,[["render",pb]]),gb=Kn({setup(){return{store:Dd()}}}),_b={class:"detail-widget-wrapper"},vb={key:0},xb={key:1};function Mb(n,e,t,i,s,r){return vt(),Et("div",_b,[n.store.widget?(vt(),Et("div",vb,[(vt(),Ed(Pm(n.store.widget)))])):(vt(),Et("div",xb," No component selected yet! "))])}const yb=Ii(gb,[["render",Mb]]),Sb={class:"main-grid"},Eb={class:"tree"},Tb={class:"details"},bb={class:"main"},Ab=Kn({__name:"App",setup(n){return(e,t)=>(vt(),Et("div",Sb,[ce("div",Eb,[un(ub)]),ce("div",Tb,[un(yb)]),ce("div",bb,[un(mb)])]))}}),wb=i_();Qg(Ab).use(wb).mount("#app");
