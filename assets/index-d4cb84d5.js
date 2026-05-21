(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},cc={},Eg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),Yx=Symbol.for("react.fragment"),qx=Symbol.for("react.strict_mode"),Kx=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),Jx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),e_=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),np=Symbol.iterator;function n_(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Tg={};function Js(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||wg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=Js.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||wg}var Dd=Ld.prototype=new Cg;Dd.constructor=Ld;Ag(Dd,Js.prototype);Dd.isPureReactComponent=!0;var ip=Array.isArray,Rg=Object.prototype.hasOwnProperty,Nd={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,s={},r=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(r=""+e.key),e)Rg.call(e,i)&&!Pg.hasOwnProperty(i)&&(s[i]=e[i]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)s[i]===void 0&&(s[i]=o[i]);return{$$typeof:io,type:t,key:r,ref:a,props:s,_owner:Nd.current}}function i_(t,e){return{$$typeof:io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===io}function r_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rp=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r_(""+t.key):e.toString(36)}function cl(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case io:case Xx:a=!0}}if(a)return a=t,s=s(a),t=i===""?"."+Nc(a,0):i,ip(s)?(n="",t!=null&&(n=t.replace(rp,"$&/")+"/"),cl(s,e,n,"",function(u){return u})):s!=null&&(Ud(s)&&(s=i_(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(rp,"$&/")+"/")+t)),e.push(s)),1;if(a=0,i=i===""?".":i+":",ip(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+Nc(r,o);a+=cl(r,e,n,l,s)}else if(l=n_(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+Nc(r,o++),a+=cl(r,e,n,l,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function xo(t,e,n){if(t==null)return t;var i=[],s=0;return cl(t,i,"","",function(r){return e.call(n,r,s++)}),i}function s_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},ul={transition:null},a_={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Nd};function Ig(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:xo,forEach:function(t,e,n){xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xo(t,function(){e++}),e},toArray:function(t){return xo(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Js;Je.Fragment=Yx;Je.Profiler=Kx;Je.PureComponent=Ld;Je.StrictMode=qx;Je.Suspense=Qx;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_;Je.act=Ig;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ag({},t.props),s=t.key,r=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,a=Nd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Rg.call(e,l)&&!Pg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:io,type:t.type,key:s,ref:r,props:i,_owner:a}};Je.createContext=function(t){return t={$$typeof:Jx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$x,_context:t},t.Consumer=t};Je.createElement=bg;Je.createFactory=function(t){var e=bg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Zx,render:t}};Je.isValidElement=Ud;Je.lazy=function(t){return{$$typeof:t_,_payload:{_status:-1,_result:t},_init:s_}};Je.memo=function(t,e){return{$$typeof:e_,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};Je.unstable_act=Ig;Je.useCallback=function(t,e){return un.current.useCallback(t,e)};Je.useContext=function(t){return un.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Je.useEffect=function(t,e){return un.current.useEffect(t,e)};Je.useId=function(){return un.current.useId()};Je.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return un.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Je.useRef=function(t){return un.current.useRef(t)};Je.useState=function(t){return un.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return un.current.useTransition()};Je.version="18.3.1";Eg.exports=Je;var V=Eg.exports;const o_=Sg(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=V,c_=Symbol.for("react.element"),u_=Symbol.for("react.fragment"),f_=Object.prototype.hasOwnProperty,d_=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h_={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var i,s={},r=null,a=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)f_.call(e,i)&&!h_.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:c_,type:t,key:r,ref:a,props:s,_owner:d_.current}}cc.Fragment=u_;cc.jsx=Lg;cc.jsxs=Lg;Mg.exports=cc;var k=Mg.exports,Gu={},Dg={exports:{}},Pn={},Ng={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var K=O.length;O.push(G);e:for(;0<K;){var te=K-1>>>1,se=O[te];if(0<s(se,G))O[te]=G,O[K]=se,K=te;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var G=O[0],K=O.pop();if(K!==G){O[0]=K;e:for(var te=0,se=O.length,Me=se>>>1;te<Me;){var re=2*(te+1)-1,ae=O[re],W=re+1,ee=O[W];if(0>s(ae,K))W<se&&0>s(ee,ae)?(O[te]=ee,O[W]=K,te=W):(O[te]=ae,O[re]=K,te=re);else if(W<se&&0>s(ee,K))O[te]=ee,O[W]=K,te=W;else break e}}return G}function s(O,G){var K=O.sortIndex-G.sortIndex;return K!==0?K:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,h=null,d=3,c=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=O)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(O){if(v=!1,y(O),!m)if(n(l)!==null)m=!0,N(S);else{var G=n(u);G!==null&&F(E,G.startTime-O)}}function S(O,G){m=!1,v&&(v=!1,p(_),_=-1),c=!0;var K=d;try{for(y(G),h=n(l);h!==null&&(!(h.expirationTime>G)||O&&!C());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var se=te(h.expirationTime<=G);G=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),y(G)}else i(l);h=n(l)}if(h!==null)var Me=!0;else{var re=n(u);re!==null&&F(E,re.startTime-G),Me=!1}return Me}finally{h=null,d=K,c=!1}}var M=!1,w=null,_=-1,T=5,A=-1;function C(){return!(t.unstable_now()-A<T)}function P(){if(w!==null){var O=t.unstable_now();A=O;var G=!0;try{G=w(!0,O)}finally{G?D():(M=!1,w=null)}}else M=!1}var D;if(typeof x=="function")D=function(){x(P)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,L=U.port2;U.port1.onmessage=P,D=function(){L.postMessage(null)}}else D=function(){g(P,0)};function N(O){w=O,M||(M=!0,D())}function F(O,G){_=g(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){m||c||(m=!0,N(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return O()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=d;d=O;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(O,G,K){var te=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?te+K:te):K=te,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=K+se,O={id:f++,callback:G,priorityLevel:O,startTime:K,expirationTime:se,sortIndex:-1},K>te?(O.sortIndex=K,e(u,O),n(l)===null&&O===n(u)&&(v?(p(_),_=-1):v=!0,F(E,K-te))):(O.sortIndex=se,e(l,O),m||c||(m=!0,N(S))),O},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(O){var G=d;return function(){var K=d;d=G;try{return O.apply(this,arguments)}finally{d=K}}}})(Ug);Ng.exports=Ug;var p_=Ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=V,Cn=p_;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg=new Set,ka={};function Zr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(ka[t]=e,t=0;t<e.length;t++)Fg.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,g_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},ap={};function v_(t){return Wu.call(ap,t)?!0:Wu.call(sp,t)?!1:g_.test(t)?ap[t]=!0:(sp[t]=!0,!1)}function x_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function __(t,e,n,i){if(e===null||typeof e>"u"||x_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,s,r,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fd=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fd,kd);qt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fd,kd);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fd,kd);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,i){var s=qt.hasOwnProperty(e)?qt[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(__(e,n,s,i)&&(n=null),i||s===null?v_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Og=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),op=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Uc;function Sa(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function kc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),r=i.stack.split(`
`),a=s.length-1,o=r.length-1;1<=a&&0<=o&&s[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==r[o]){var l=`
`+s[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function y_(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case ju:return"Profiler";case Bd:return"StrictMode";case Xu:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Og:return(t.displayName||"Context")+".Consumer";case kg:return(t._context.displayName||"Context")+".Provider";case zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function S_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M_(t){var e=zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yo(t){t._valueTracker||(t._valueTracker=M_(t))}function Vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=zg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hg(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function $u(t,e){Hg(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ju(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ju(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ma=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ma(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Gg(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var So,jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=So.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){E_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=Xg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var w_=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ef(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rf=null,Ds=null,Ns=null;function dp(t){if(t=ao(t)){if(typeof rf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=pc(e),rf(t.stateNode,t.type,e))}}function qg(t){Ds?Ns?Ns.push(t):Ns=[t]:Ds=t}function Kg(){if(Ds){var t=Ds,e=Ns;if(Ns=Ds=null,dp(t),e)for(t=0;t<e.length;t++)dp(e[t])}}function $g(t,e){return t(e)}function Jg(){}var Oc=!1;function Zg(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return $g(t,e,n)}finally{Oc=!1,(Ds!==null||Ns!==null)&&(Jg(),Kg())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var sf=!1;if(Oi)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){sf=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{sf=!1}function A_(t,e,n,i,s,r,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ra=!1,bl=null,Il=!1,af=null,T_={onError:function(t){Ra=!0,bl=t}};function C_(t,e,n,i,s,r,a,o,l){Ra=!1,bl=null,A_.apply(T_,arguments)}function R_(t,e,n,i,s,r,a,o,l){if(C_.apply(this,arguments),Ra){if(Ra){var u=bl;Ra=!1,bl=null}else throw Error(ce(198));Il||(Il=!0,af=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hp(t){if(Qr(t)!==t)throw Error(ce(188))}function P_(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return hp(s),t;if(r===i)return hp(s),e;r=r.sibling}throw Error(ce(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function e0(t){return t=P_(t),t!==null?t0(t):null}function t0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t0(t);if(e!==null)return e;t=t.sibling}return null}var n0=Cn.unstable_scheduleCallback,pp=Cn.unstable_cancelCallback,b_=Cn.unstable_shouldYield,I_=Cn.unstable_requestPaint,Dt=Cn.unstable_now,L_=Cn.unstable_getCurrentPriorityLevel,Gd=Cn.unstable_ImmediatePriority,i0=Cn.unstable_UserBlockingPriority,Ll=Cn.unstable_NormalPriority,D_=Cn.unstable_LowPriority,r0=Cn.unstable_IdlePriority,uc=null,pi=null;function N_(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:k_,U_=Math.log,F_=Math.LN2;function k_(t){return t>>>=0,t===0?32:31-(U_(t)/F_|0)|0}var Mo=64,Eo=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?i=Ea(o):(r&=a,r!==0&&(i=Ea(r)))}else a=n&~s,a!==0?i=Ea(a):r!==0&&(i=Ea(r));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),s=1<<n,i|=t[n],e&=~s;return i}function O_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var a=31-Qn(r),o=1<<a,l=s[a];l===-1?(!(o&n)||o&i)&&(s[a]=O_(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s0(){var t=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Qn(n),r=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~r}}function Wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var ut=0;function a0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var o0,jd,l0,c0,u0,lf=!1,wo=[],dr=null,hr=null,pr=null,za=new Map,Va=new Map,ar=[],V_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function aa(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=ao(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function H_(t,e,n,i,s){switch(e){case"focusin":return dr=aa(dr,t,e,n,i,s),!0;case"dragenter":return hr=aa(hr,t,e,n,i,s),!0;case"mouseover":return pr=aa(pr,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return za.set(r,aa(za.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Va.set(r,aa(Va.get(r)||null,t,e,n,i,s)),!0}return!1}function f0(t){var e=kr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qg(n),e!==null){t.blockedOn=e,u0(t.priority,function(){l0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nf=i,n.target.dispatchEvent(i),nf=null}else return e=ao(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){fl(t)&&n.delete(e)}function G_(){lf=!1,dr!==null&&fl(dr)&&(dr=null),hr!==null&&fl(hr)&&(hr=null),pr!==null&&fl(pr)&&(pr=null),za.forEach(gp),Va.forEach(gp)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,lf||(lf=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,G_)))}function Ha(t){function e(s){return oa(s,t)}if(0<wo.length){oa(wo[0],t);for(var n=1;n<wo.length;n++){var i=wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&oa(dr,t),hr!==null&&oa(hr,t),pr!==null&&oa(pr,t),za.forEach(e),Va.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)f0(n),n.blockedOn===null&&ar.shift()}var Us=Xi.ReactCurrentBatchConfig,Nl=!0;function W_(t,e,n,i){var s=ut,r=Us.transition;Us.transition=null;try{ut=1,Xd(t,e,n,i)}finally{ut=s,Us.transition=r}}function j_(t,e,n,i){var s=ut,r=Us.transition;Us.transition=null;try{ut=4,Xd(t,e,n,i)}finally{ut=s,Us.transition=r}}function Xd(t,e,n,i){if(Nl){var s=cf(t,e,n,i);if(s===null)Kc(t,e,i,Ul,n),mp(t,i);else if(H_(s,t,e,n,i))i.stopPropagation();else if(mp(t,i),e&4&&-1<V_.indexOf(t)){for(;s!==null;){var r=ao(s);if(r!==null&&o0(r),r=cf(t,e,n,i),r===null&&Kc(t,e,i,Ul,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Kc(t,e,i,null,n)}}var Ul=null;function cf(t,e,n,i){if(Ul=null,t=Hd(i),t=kr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function d0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L_()){case Gd:return 1;case i0:return 4;case Ll:case D_:return 16;case r0:return 536870912;default:return 16}default:return 16}}var cr=null,Yd=null,dl=null;function h0(){if(dl)return dl;var t,e=Yd,n=e.length,i,s="value"in cr?cr.value:cr.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[r-i];i++);return dl=s.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function vp(){return!1}function bn(t){function e(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ao:vp,this.isPropagationStopped=vp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=bn(Zs),so=Tt({},Zs,{view:0,detail:0}),X_=bn(so),zc,Vc,la,fc=Tt({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(zc=t.screenX-la.screenX,Vc=t.screenY-la.screenY):Vc=zc=0,la=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),xp=bn(fc),Y_=Tt({},fc,{dataTransfer:0}),q_=bn(Y_),K_=Tt({},so,{relatedTarget:0}),Hc=bn(K_),$_=Tt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=bn($_),Z_=Tt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q_=bn(Z_),ey=Tt({},Zs,{data:0}),_p=bn(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iy[t])?!!e[t]:!1}function Kd(){return ry}var sy=Tt({},so,{key:function(t){if(t.key){var e=ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=bn(sy),oy=Tt({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=bn(oy),ly=Tt({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),cy=bn(ly),uy=Tt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=bn(uy),dy=Tt({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=bn(dy),py=[9,13,27,32],$d=Oi&&"CompositionEvent"in window,Pa=null;Oi&&"documentMode"in document&&(Pa=document.documentMode);var my=Oi&&"TextEvent"in window&&!Pa,p0=Oi&&(!$d||Pa&&8<Pa&&11>=Pa),Sp=String.fromCharCode(32),Mp=!1;function m0(t,e){switch(t){case"keyup":return py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function gy(t,e){switch(t){case"compositionend":return g0(e);case"keypress":return e.which!==32?null:(Mp=!0,Sp);case"textInput":return t=e.data,t===Sp&&Mp?null:t;default:return null}}function vy(t,e){if(Ms)return t==="compositionend"||!$d&&m0(t,e)?(t=h0(),dl=Yd=cr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xy[t.type]:e==="textarea"}function v0(t,e,n,i){qg(i),e=Fl(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,Ga=null;function _y(t){R0(t,0)}function dc(t){var e=As(t);if(Vg(e))return t}function yy(t,e){if(t==="change")return e}var x0=!1;if(Oi){var Gc;if(Oi){var Wc="oninput"in document;if(!Wc){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Wc=typeof wp.oninput=="function"}Gc=Wc}else Gc=!1;x0=Gc&&(!document.documentMode||9<document.documentMode)}function Ap(){ba&&(ba.detachEvent("onpropertychange",_0),Ga=ba=null)}function _0(t){if(t.propertyName==="value"&&dc(Ga)){var e=[];v0(e,Ga,t,Hd(t)),Zg(_y,e)}}function Sy(t,e,n){t==="focusin"?(Ap(),ba=e,Ga=n,ba.attachEvent("onpropertychange",_0)):t==="focusout"&&Ap()}function My(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Ga)}function Ey(t,e){if(t==="click")return dc(e)}function wy(t,e){if(t==="input"||t==="change")return dc(e)}function Ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:Ay;function Wa(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Wu.call(e,s)||!ti(t[s],e[s]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,e){var n=Tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S0(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ty(t){var e=S0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(i!==null&&Jd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,r=Math.min(i.start,s);i=i.end===void 0?r:Math.min(i.end,s),!t.extend&&r>i&&(s=i,i=r,r=s),s=Cp(n,r);var a=Cp(n,i);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cy=Oi&&"documentMode"in document&&11>=document.documentMode,Es=null,uf=null,Ia=null,ff=!1;function Rp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||Es==null||Es!==Pl(i)||(i=Es,"selectionStart"in i&&Jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ia&&Wa(Ia,i)||(Ia=i,i=Fl(uf,"onSelect"),0<i.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},jc={},M0={};Oi&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function hc(t){if(jc[t])return jc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return jc[t]=e[n];return t}var E0=hc("animationend"),w0=hc("animationiteration"),A0=hc("animationstart"),T0=hc("transitionend"),C0=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){C0.set(t,e),Zr(e,[t])}for(var Xc=0;Xc<Pp.length;Xc++){var Yc=Pp[Xc],Ry=Yc.toLowerCase(),Py=Yc[0].toUpperCase()+Yc.slice(1);Er(Ry,"on"+Py)}Er(E0,"onAnimationEnd");Er(w0,"onAnimationIteration");Er(A0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(T0,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,R_(i,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break e;bp(s,o,u),r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break e;bp(s,o,u),r=l}}}if(Il)throw t=af,Il=!1,af=null,t}function _t(t,e){var n=e[gf];n===void 0&&(n=e[gf]=new Set);var i=t+"__bubble";n.has(i)||(P0(e,t,2,!1),n.add(i))}function qc(t,e,n){var i=0;e&&(i|=4),P0(n,t,i,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[Co]){t[Co]=!0,Fg.forEach(function(n){n!=="selectionchange"&&(by.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,qc("selectionchange",!1,e))}}function P0(t,e,n,i){switch(d0(e)){case 1:var s=W_;break;case 4:s=j_;break;default:s=Xd}n=s.bind(null,e,n,t),s=void 0,!sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Kc(t,e,n,i,s){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;a=a.return}for(;o!==null;){if(a=kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=r=a;continue e}o=o.parentNode}}i=i.return}Zg(function(){var u=r,f=Hd(n),h=[];e:{var d=C0.get(t);if(d!==void 0){var c=qd,m=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":c=ay;break;case"focusin":m="focus",c=Hc;break;case"focusout":m="blur",c=Hc;break;case"beforeblur":case"afterblur":c=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=cy;break;case E0:case w0:case A0:c=J_;break;case T0:c=fy;break;case"scroll":c=X_;break;case"wheel":c=hy;break;case"copy":case"cut":case"paste":c=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=yp}var v=(e&4)!==0,g=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var x=u,y;x!==null;){y=x;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=Ba(x,p),E!=null&&v.push(Xa(x,E,y)))),g)break;x=x.return}0<v.length&&(d=new c(d,m,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",c=t==="mouseout"||t==="pointerout",d&&n!==nf&&(m=n.relatedTarget||n.fromElement)&&(kr(m)||m[Bi]))break e;if((c||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,c?(m=n.relatedTarget||n.toElement,c=u,m=m?kr(m):null,m!==null&&(g=Qr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(c=null,m=u),c!==m)){if(v=xp,E="onMouseLeave",p="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=yp,E="onPointerLeave",p="onPointerEnter",x="pointer"),g=c==null?d:As(c),y=m==null?d:As(m),d=new v(E,x+"leave",c,n,f),d.target=g,d.relatedTarget=y,E=null,kr(f)===u&&(v=new v(p,x+"enter",m,n,f),v.target=y,v.relatedTarget=g,E=v),g=E,c&&m)t:{for(v=c,p=m,x=0,y=v;y;y=rs(y))x++;for(y=0,E=p;E;E=rs(E))y++;for(;0<x-y;)v=rs(v),x--;for(;0<y-x;)p=rs(p),y--;for(;x--;){if(v===p||p!==null&&v===p.alternate)break t;v=rs(v),p=rs(p)}v=null}else v=null;c!==null&&Ip(h,d,c,v,!1),m!==null&&g!==null&&Ip(h,g,m,v,!0)}}e:{if(d=u?As(u):window,c=d.nodeName&&d.nodeName.toLowerCase(),c==="select"||c==="input"&&d.type==="file")var S=yy;else if(Ep(d))if(x0)S=wy;else{S=My;var M=Sy}else(c=d.nodeName)&&c.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Ey);if(S&&(S=S(t,u))){v0(h,S,n,f);break e}M&&M(t,d,u),t==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&Ju(d,"number",d.value)}switch(M=u?As(u):window,t){case"focusin":(Ep(M)||M.contentEditable==="true")&&(Es=M,uf=u,Ia=null);break;case"focusout":Ia=uf=Es=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,Rp(h,n,f);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":Rp(h,n,f)}var w;if($d)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ms?m0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(p0&&n.locale!=="ko"&&(Ms||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ms&&(w=h0()):(cr=f,Yd="value"in cr?cr.value:cr.textContent,Ms=!0)),M=Fl(u,_),0<M.length&&(_=new _p(_,t,null,n,f),h.push({event:_,listeners:M}),w?_.data=w:(w=g0(n),w!==null&&(_.data=w)))),(w=my?gy(t,n):vy(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(f=new _p("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=w))}R0(h,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Ba(t,n),r!=null&&i.unshift(Xa(t,r,s)),r=Ba(t,e),r!=null&&i.push(Xa(t,r,s))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,s){for(var r=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,s?(l=Ba(n,r),l!=null&&a.unshift(Xa(n,l,o))):s||(l=Ba(n,r),l!=null&&a.push(Xa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Iy=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Ly,"")}function Ro(t,e,n){if(e=Lp(e),Lp(t)!==e&&n)throw Error(ce(425))}function kl(){}var df=null,hf=null;function pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mf=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(t){return Dp.resolve(null).then(t).catch(Uy)}:mf;function Uy(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Ha(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),fi="__reactFiber$"+Qs,Ya="__reactProps$"+Qs,Bi="__reactContainer$"+Qs,gf="__reactEvents$"+Qs,Fy="__reactListeners$"+Qs,ky="__reactHandles$"+Qs;function kr(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bi]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Np(t);t!==null;){if(n=t[fi])return n;t=Np(t)}return e}t=n,n=t.parentNode}return null}function ao(t){return t=t[fi]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function pc(t){return t[Ya]||null}var vf=[],Ts=-1;function wr(t){return{current:t}}function yt(t){0>Ts||(t.current=vf[Ts],vf[Ts]=null,Ts--)}function vt(t,e){Ts++,vf[Ts]=t.current,t.current=e}var Sr={},nn=wr(Sr),vn=wr(!1),Wr=Sr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function xn(t){return t=t.childContextTypes,t!=null}function Ol(){yt(vn),yt(nn)}function Up(t,e,n){if(nn.current!==Sr)throw Error(ce(168));vt(nn,e),vt(vn,n)}function b0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(ce(108,S_(t)||"Unknown",s));return Tt({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Wr=nn.current,vt(nn,t),vt(vn,vn.current),!0}function Fp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=b0(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,yt(vn),yt(nn),vt(nn,t)):yt(vn),vt(vn,n)}var Pi=null,mc=!1,Jc=!1;function I0(t){Pi===null?Pi=[t]:Pi.push(t)}function Oy(t){mc=!0,I0(t)}function Ar(){if(!Jc&&Pi!==null){Jc=!0;var t=0,e=ut;try{var n=Pi;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,mc=!1}catch(s){throw Pi!==null&&(Pi=Pi.slice(t+1)),n0(Gd,Ar),s}finally{ut=e,Jc=!1}}return null}var Cs=[],Rs=0,zl=null,Vl=0,Nn=[],Un=0,jr=null,Ii=1,Li="";function Lr(t,e){Cs[Rs++]=Vl,Cs[Rs++]=zl,zl=t,Vl=e}function L0(t,e,n){Nn[Un++]=Ii,Nn[Un++]=Li,Nn[Un++]=jr,jr=t;var i=Ii;t=Li;var s=32-Qn(i)-1;i&=~(1<<s),n+=1;var r=32-Qn(e)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Ii=1<<32-Qn(e)+s|n<<s|i,Li=r+t}else Ii=1<<r|n<<s|i,Li=t}function Zd(t){t.return!==null&&(Lr(t,1),L0(t,1,0))}function Qd(t){for(;t===zl;)zl=Cs[--Rs],Cs[Rs]=null,Vl=Cs[--Rs],Cs[Rs]=null;for(;t===jr;)jr=Nn[--Un],Nn[Un]=null,Li=Nn[--Un],Nn[Un]=null,Ii=Nn[--Un],Nn[Un]=null}var Tn=null,An=null,St=!1,$n=null;function D0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,An=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Ii,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,An=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(St){var e=An;if(e){var n=e;if(!kp(t,e)){if(xf(t))throw Error(ce(418));e=mr(n.nextSibling);var i=Tn;e&&kp(t,e)?D0(i,n):(t.flags=t.flags&-4097|2,St=!1,Tn=t)}}else{if(xf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,St=!1,Tn=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Po(t){if(t!==Tn)return!1;if(!St)return Op(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pf(t.type,t.memoizedProps)),e&&(e=An)){if(xf(t))throw N0(),Error(ce(418));for(;e;)D0(t,e),e=mr(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Tn?mr(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=An;t;)t=mr(t.nextSibling)}function Hs(){An=Tn=null,St=!1}function eh(t){$n===null?$n=[t]:$n.push(t)}var By=Xi.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var s=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var o=s.refs;a===null?delete o[r]:o[r]=a},e._stringRef=r,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bp(t){var e=t._init;return e(t._payload)}function U0(t){function e(p,x){if(t){var y=p.deletions;y===null?(p.deletions=[x],p.flags|=16):y.push(x)}}function n(p,x){if(!t)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function i(p,x){for(p=new Map;x!==null;)x.key!==null?p.set(x.key,x):p.set(x.index,x),x=x.sibling;return p}function s(p,x){return p=_r(p,x),p.index=0,p.sibling=null,p}function r(p,x,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<x?(p.flags|=2,x):y):(p.flags|=2,x)):(p.flags|=1048576,x)}function a(p){return t&&p.alternate===null&&(p.flags|=2),p}function o(p,x,y,E){return x===null||x.tag!==6?(x=ru(y,p.mode,E),x.return=p,x):(x=s(x,y),x.return=p,x)}function l(p,x,y,E){var S=y.type;return S===Ss?f(p,x,y.props.children,E,y.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rr&&Bp(S)===x.type)?(E=s(x,y.props),E.ref=ca(p,x,y),E.return=p,E):(E=yl(y.type,y.key,y.props,null,p.mode,E),E.ref=ca(p,x,y),E.return=p,E)}function u(p,x,y,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=su(y,p.mode,E),x.return=p,x):(x=s(x,y.children||[]),x.return=p,x)}function f(p,x,y,E,S){return x===null||x.tag!==7?(x=Gr(y,p.mode,E,S),x.return=p,x):(x=s(x,y),x.return=p,x)}function h(p,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ru(""+x,p.mode,y),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _o:return y=yl(x.type,x.key,x.props,null,p.mode,y),y.ref=ca(p,null,x),y.return=p,y;case ys:return x=su(x,p.mode,y),x.return=p,x;case rr:var E=x._init;return h(p,E(x._payload),y)}if(Ma(x)||ra(x))return x=Gr(x,p.mode,y,null),x.return=p,x;bo(p,x)}return null}function d(p,x,y,E){var S=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:o(p,x,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _o:return y.key===S?l(p,x,y,E):null;case ys:return y.key===S?u(p,x,y,E):null;case rr:return S=y._init,d(p,x,S(y._payload),E)}if(Ma(y)||ra(y))return S!==null?null:f(p,x,y,E,null);bo(p,y)}return null}function c(p,x,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,o(x,p,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _o:return p=p.get(E.key===null?y:E.key)||null,l(x,p,E,S);case ys:return p=p.get(E.key===null?y:E.key)||null,u(x,p,E,S);case rr:var M=E._init;return c(p,x,y,M(E._payload),S)}if(Ma(E)||ra(E))return p=p.get(y)||null,f(x,p,E,S,null);bo(x,E)}return null}function m(p,x,y,E){for(var S=null,M=null,w=x,_=x=0,T=null;w!==null&&_<y.length;_++){w.index>_?(T=w,w=null):T=w.sibling;var A=d(p,w,y[_],E);if(A===null){w===null&&(w=T);break}t&&w&&A.alternate===null&&e(p,w),x=r(A,x,_),M===null?S=A:M.sibling=A,M=A,w=T}if(_===y.length)return n(p,w),St&&Lr(p,_),S;if(w===null){for(;_<y.length;_++)w=h(p,y[_],E),w!==null&&(x=r(w,x,_),M===null?S=w:M.sibling=w,M=w);return St&&Lr(p,_),S}for(w=i(p,w);_<y.length;_++)T=c(w,p,_,y[_],E),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?_:T.key),x=r(T,x,_),M===null?S=T:M.sibling=T,M=T);return t&&w.forEach(function(C){return e(p,C)}),St&&Lr(p,_),S}function v(p,x,y,E){var S=ra(y);if(typeof S!="function")throw Error(ce(150));if(y=S.call(y),y==null)throw Error(ce(151));for(var M=S=null,w=x,_=x=0,T=null,A=y.next();w!==null&&!A.done;_++,A=y.next()){w.index>_?(T=w,w=null):T=w.sibling;var C=d(p,w,A.value,E);if(C===null){w===null&&(w=T);break}t&&w&&C.alternate===null&&e(p,w),x=r(C,x,_),M===null?S=C:M.sibling=C,M=C,w=T}if(A.done)return n(p,w),St&&Lr(p,_),S;if(w===null){for(;!A.done;_++,A=y.next())A=h(p,A.value,E),A!==null&&(x=r(A,x,_),M===null?S=A:M.sibling=A,M=A);return St&&Lr(p,_),S}for(w=i(p,w);!A.done;_++,A=y.next())A=c(w,p,_,A.value,E),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?_:A.key),x=r(A,x,_),M===null?S=A:M.sibling=A,M=A);return t&&w.forEach(function(P){return e(p,P)}),St&&Lr(p,_),S}function g(p,x,y,E){if(typeof y=="object"&&y!==null&&y.type===Ss&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _o:e:{for(var S=y.key,M=x;M!==null;){if(M.key===S){if(S=y.type,S===Ss){if(M.tag===7){n(p,M.sibling),x=s(M,y.props.children),x.return=p,p=x;break e}}else if(M.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rr&&Bp(S)===M.type){n(p,M.sibling),x=s(M,y.props),x.ref=ca(p,M,y),x.return=p,p=x;break e}n(p,M);break}else e(p,M);M=M.sibling}y.type===Ss?(x=Gr(y.props.children,p.mode,E,y.key),x.return=p,p=x):(E=yl(y.type,y.key,y.props,null,p.mode,E),E.ref=ca(p,x,y),E.return=p,p=E)}return a(p);case ys:e:{for(M=y.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(p,x.sibling),x=s(x,y.children||[]),x.return=p,p=x;break e}else{n(p,x);break}else e(p,x);x=x.sibling}x=su(y,p.mode,E),x.return=p,p=x}return a(p);case rr:return M=y._init,g(p,x,M(y._payload),E)}if(Ma(y))return m(p,x,y,E);if(ra(y))return v(p,x,y,E);bo(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(p,x.sibling),x=s(x,y),x.return=p,p=x):(n(p,x),x=ru(y,p.mode,E),x.return=p,p=x),a(p)):n(p,x)}return g}var Gs=U0(!0),F0=U0(!1),Hl=wr(null),Gl=null,Ps=null,th=null;function nh(){th=Ps=Gl=null}function ih(t){var e=Hl.current;yt(Hl),t._currentValue=e}function yf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Gl=t,th=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(th!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Gl===null)throw Error(ce(308));Ps=t,Gl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Or=null;function rh(t){Or===null?Or=[t]:Or.push(t)}function k0(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,rh(e)):(n.next=s.next,s.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,zi(t,n)}return s=i.interleaved,s===null?(e.next=e,rh(i)):(e.next=s.next,s.next=e),i.interleaved=e,zi(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wd(t,n)}}function zp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var s=t.updateQueue;sr=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?r=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(r!==null){var h=s.baseState;a=0,f=u=l=null,o=r;do{var d=o.lane,c=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:c,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,v=o;switch(d=e,c=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(c,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(c,h,d):m,d==null)break e;h=Tt({},h,d);break e;case 2:sr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=s.effects,d===null?s.effects=[o]:d.push(o))}else c={eventTime:c,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=c,l=h):f=f.next=c,a|=d;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(1);if(f===null&&(l=h),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Yr|=a,t.lanes=a,t.memoizedState=h}}function Vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(ce(191,s));s.call(i)}}}var oo={},mi=wr(oo),qa=wr(oo),Ka=wr(oo);function Br(t){if(t===oo)throw Error(ce(174));return t}function ah(t,e){switch(vt(Ka,e),vt(qa,t),vt(mi,oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}yt(mi),vt(mi,e)}function Ws(){yt(mi),yt(qa),yt(Ka)}function B0(t){Br(Ka.current);var e=Br(mi.current),n=Qu(e,t.type);e!==n&&(vt(qa,t),vt(mi,n))}function oh(t){qa.current===t&&(yt(mi),yt(qa))}var Et=wr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function lh(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var ml=Xi.ReactCurrentDispatcher,Qc=Xi.ReactCurrentBatchConfig,Xr=0,wt=null,Ot=null,Gt=null,Xl=!1,La=!1,$a=0,zy=0;function $t(){throw Error(ce(321))}function ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function uh(t,e,n,i,s,r){if(Xr=r,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Wy:jy,t=n(i,s),La){r=0;do{if(La=!1,$a=0,25<=r)throw Error(ce(301));r+=1,Gt=Ot=null,e.updateQueue=null,ml.current=Xy,t=n(i,s)}while(La)}if(ml.current=Yl,e=Ot!==null&&Ot.next!==null,Xr=0,Gt=Ot=wt=null,Xl=!1,e)throw Error(ce(300));return t}function fh(){var t=$a!==0;return $a=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?wt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Vn(){if(Ot===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Gt===null?wt.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=t;else{if(t===null)throw Error(ce(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?wt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Ja(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ot,s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}i.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,i=i.baseState;var o=a=null,l=null,u=r;do{var f=u.lane;if((Xr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,wt.lanes|=f,Yr|=f}u=u.next}while(u!==null&&u!==r);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do r=s.lane,wt.lanes|=r,Yr|=r,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);ti(r,e.memoizedState)||(mn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function z0(){}function V0(t,e){var n=wt,i=Vn(),s=e(),r=!ti(i.memoizedState,s);if(r&&(i.memoizedState=s,mn=!0),i=i.queue,dh(W0.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Za(9,G0.bind(null,n,i,s,e),void 0,null),Wt===null)throw Error(ce(349));Xr&30||H0(n,e,s)}return s}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,i){e.value=n,e.getSnapshot=i,j0(e)&&X0(t)}function W0(t,e,n){return n(function(){j0(e)&&X0(t)})}function j0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function X0(t){var e=zi(t,1);e!==null&&ei(e,t,1,-1)}function Hp(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=Gy.bind(null,wt,t),[e.memoizedState,t]}function Za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Y0(){return Vn().memoizedState}function gl(t,e,n,i){var s=ci();wt.flags|=t,s.memoizedState=Za(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var s=Vn();i=i===void 0?null:i;var r=void 0;if(Ot!==null){var a=Ot.memoizedState;if(r=a.destroy,i!==null&&ch(i,a.deps)){s.memoizedState=Za(e,n,r,i);return}}wt.flags|=t,s.memoizedState=Za(1|e,n,r,i)}function Gp(t,e){return gl(8390656,8,t,e)}function dh(t,e){return gc(2048,8,t,e)}function q0(t,e){return gc(4,2,t,e)}function K0(t,e){return gc(4,4,t,e)}function $0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J0(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,$0.bind(null,e,t),n)}function hh(){}function Z0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ch(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Q0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ch(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return Xr&21?(ti(n,e)||(n=s0(),wt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Vy(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{ut=n,Qc.transition=i}}function tv(){return Vn().memoizedState}function Hy(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))iv(e,n);else if(n=k0(t,e,n,i),n!==null){var s=on();ei(n,t,i,s),rv(n,e,i)}}function Gy(t,e,n){var i=xr(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))iv(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(s.next=s,rh(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=k0(t,e,s,i),n!==null&&(s=on(),ei(n,t,i,s),rv(n,e,i))}}function nv(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function iv(t,e){La=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wd(t,n)}}var Yl={readContext:zn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Wy={readContext:zn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,$0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Hy.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:Hp,useDebugValue:hh,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Hp(!1),e=t[0];return t=Vy.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,s=ci();if(St){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Wt===null)throw Error(ce(349));Xr&30||H0(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,Gp(W0.bind(null,i,r,t),[t]),i.flags|=2048,Za(9,G0.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=ci(),e=Wt.identifierPrefix;if(St){var n=Li,i=Ii;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jy={readContext:zn,useCallback:Z0,useContext:zn,useEffect:dh,useImperativeHandle:J0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:Q0,useReducer:eu,useRef:Y0,useState:function(){return eu(Ja)},useDebugValue:hh,useDeferredValue:function(t){var e=Vn();return ev(e,Ot.memoizedState,t)},useTransition:function(){var t=eu(Ja)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:V0,useId:tv,unstable_isNewReconciler:!1},Xy={readContext:zn,useCallback:Z0,useContext:zn,useEffect:dh,useImperativeHandle:J0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:Q0,useReducer:tu,useRef:Y0,useState:function(){return tu(Ja)},useDebugValue:hh,useDeferredValue:function(t){var e=Vn();return Ot===null?e.memoizedState=t:ev(e,Ot.memoizedState,t)},useTransition:function(){var t=tu(Ja)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:V0,useId:tv,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),s=xr(t),r=Ni(i,s);r.payload=e,n!=null&&(r.callback=n),e=gr(t,r,s),e!==null&&(ei(e,t,s,i),pl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),s=xr(t),r=Ni(i,s);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=gr(t,r,s),e!==null&&(ei(e,t,s,i),pl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=xr(t),s=Ni(n,i);s.tag=2,e!=null&&(s.callback=e),e=gr(t,s,i),e!==null&&(ei(e,t,i,n),pl(e,t,i))}};function Wp(t,e,n,i,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(s,r):!0}function sv(t,e,n){var i=!1,s=Sr,r=e.contextType;return typeof r=="object"&&r!==null?r=zn(r):(s=xn(e)?Wr:nn.current,i=e.contextTypes,r=(i=i!=null)?Vs(t,s):Sr),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},sh(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=zn(r):(r=xn(e)?Wr:nn.current,s.context=Vs(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Sf(t,e,r,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&vc.enqueueReplaceState(s,s.state,null),Wl(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=y_(i),i=i.return;while(i);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function av(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Df=i),Ef(t,e)},n}function ov(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){Ef(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Yy;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function Yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qp(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var qy=Xi.ReactCurrentOwner,mn=!1;function an(t,e,n,i){e.child=t===null?F0(e,null,n,i):Gs(e,t.child,n,i)}function Kp(t,e,n,i,s){n=n.render;var r=e.ref;return Fs(e,s),i=uh(t,e,n,i,r,s),n=fh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Vi(t,e,s)):(St&&n&&Zd(e),e.flags|=1,an(t,e,i,s),e.child)}function $p(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!Sh(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,lv(t,e,r,i,s)):(t=yl(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(a,i)&&t.ref===e.ref)return Vi(t,e,s)}return e.flags|=1,t=_r(r,i),t.ref=e.ref,t.return=e,e.child=t}function lv(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(Wa(r,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=r,(t.lanes&s)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Vi(t,e,s)}return wf(t,e,n,i,s)}function cv(t,e,n){var i=e.pendingProps,s=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Is,wn),wn|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Is,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,vt(Is,wn),wn|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,vt(Is,wn),wn|=i;return an(t,e,s,n),e.child}function uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wf(t,e,n,i,s){var r=xn(n)?Wr:nn.current;return r=Vs(e,r),Fs(e,s),n=uh(t,e,n,i,r,s),i=fh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Vi(t,e,s)):(St&&i&&Zd(e),e.flags|=1,an(t,e,n,s),e.child)}function Jp(t,e,n,i,s){if(xn(n)){var r=!0;Bl(e)}else r=!1;if(Fs(e,s),e.stateNode===null)vl(t,e),sv(e,n,i),Mf(e,n,i,s),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=xn(n)?Wr:nn.current,u=Vs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&jp(e,a,i,u),sr=!1;var d=e.memoizedState;a.state=d,Wl(e,i,a,s),l=e.memoizedState,o!==i||d!==l||vn.current||sr?(typeof f=="function"&&(Sf(e,n,f,i),l=e.memoizedState),(o=sr||Wp(e,n,o,i,d,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,O0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:qn(e.type,o),a.props=u,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=xn(n)?Wr:nn.current,l=Vs(e,l));var c=n.getDerivedStateFromProps;(f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&jp(e,a,i,l),sr=!1,d=e.memoizedState,a.state=d,Wl(e,i,a,s);var m=e.memoizedState;o!==h||d!==m||vn.current||sr?(typeof c=="function"&&(Sf(e,n,c,i),m=e.memoizedState),(u=sr||Wp(e,n,u,i,d,m,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Af(t,e,n,i,r,s)}function Af(t,e,n,i,s,r){uv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return s&&Fp(e,n,!1),Vi(t,e,r);i=e.stateNode,qy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,r),e.child=Gs(e,null,o,r)):an(t,e,o,r),e.memoizedState=i.state,s&&Fp(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?Up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Up(t,e.context,!1),ah(t,e.containerInfo)}function Zp(t,e,n,i,s){return Hs(),eh(s),e.flags|=256,an(t,e,n,i),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function dv(t,e,n){var i=e.pendingProps,s=Et.current,r=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(s&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),vt(Et,s&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,r?(i=e.mode,r=e.child,a={mode:"hidden",children:a},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=yc(a,i,0,null),t=Gr(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Cf(n),e.memoizedState=Tf,t):ph(e,a));if(s=t.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return Ky(t,e,a,i,o,s,n);if(r){r=i.fallback,a=e.mode,s=t.child,o=s.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(s,l),i.subtreeFlags=s.subtreeFlags&14680064),o!==null?r=_r(o,r):(r=Gr(r,a,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,a=t.child.memoizedState,a=a===null?Cf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=t.childLanes&~n,e.memoizedState=Tf,i}return r=t.child,t=r.sibling,i=_r(r,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ph(t,e){return e=yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&eh(i),Gs(e,t.child,null,n),t=ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ky(t,e,n,i,s,r,a){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(ce(422))),Io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,s=e.mode,i=yc({mode:"visible",children:i.children},s,0,null),r=Gr(r,s,a,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=Cf(a),e.memoizedState=Tf,r);if(!(e.mode&1))return Io(t,e,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(ce(419)),i=nu(r,i,void 0),Io(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Wt,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,zi(t,s),ei(i,t,s,-1))}return yh(),i=nu(Error(ce(421))),Io(t,e,a,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,An=mr(s.nextSibling),Tn=e,St=!0,$n=null,t!==null&&(Nn[Un++]=Ii,Nn[Un++]=Li,Nn[Un++]=jr,Ii=t.id,Li=t.overflow,jr=e),e=ph(e,i.children),e.flags|=4096,e)}function Qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yf(t.return,e,n)}function iu(t,e,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function hv(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;if(an(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,n,e);else if(t.tag===19)Qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),iu(e,!1,s,n,r);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&jl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}iu(e,!0,n,null,r);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $y(t,e,n){switch(e.tag){case 3:fv(e),Hs();break;case 5:B0(e);break;case 1:xn(e.type)&&Bl(e);break;case 4:ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;vt(Hl,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?dv(t,e,n):(vt(Et,Et.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);vt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),vt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,n)}return Vi(t,e,n)}var pv,Rf,mv,gv;pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};mv=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,Br(mi.current);var r=null;switch(n){case"input":s=Ku(t,s),i=Ku(t,i),r=[];break;case"select":s=Tt({},s,{value:void 0}),i=Tt({},i,{value:void 0}),r=[];break;case"textarea":s=Zu(t,s),i=Zu(t,i),r=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}ef(n,i);var a;n=null;for(u in s)if(!i.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var o=s[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in i){var l=i[u];if(o=s!=null?s[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(r||(r=[]),r.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_t("scroll",t),r||o===l||(r=[])):(r=r||[]).push(u,l))}n&&(r=r||[]).push("style",n);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ua(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jy(t,e,n){var i=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return xn(e.type)&&Ol(),Jt(e),null;case 3:return i=e.stateNode,Ws(),yt(vn),yt(nn),lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Ff($n),$n=null))),Rf(t,e),Jt(e),null;case 5:oh(e);var s=Br(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)mv(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Jt(e),null}if(t=Br(mi.current),Po(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[fi]=e,i[Ya]=r,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(s=0;s<wa.length;s++)_t(wa[s],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":lp(i,r),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},_t("invalid",i);break;case"textarea":up(i,r),_t("invalid",i)}ef(n,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),s=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),s=["children",""+o]):ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":yo(i),cp(i,r,!0);break;case"textarea":yo(i),fp(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=kl)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[fi]=e,t[Ya]=i,pv(t,e,!1,!1),e.stateNode=t;e:{switch(a=tf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),s=i;break;case"iframe":case"object":case"embed":_t("load",t),s=i;break;case"video":case"audio":for(s=0;s<wa.length;s++)_t(wa[s],t);s=i;break;case"source":_t("error",t),s=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),s=i;break;case"details":_t("toggle",t),s=i;break;case"input":lp(t,i),s=Ku(t,i),_t("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=Tt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":up(t,i),s=Zu(t,i),_t("invalid",t);break;default:s=i}ef(n,s),o=s;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?Yg(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jg(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(t,l):typeof l=="number"&&Oa(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ka.hasOwnProperty(r)?l!=null&&r==="onScroll"&&_t("scroll",t):l!=null&&Od(t,r,l,a))}switch(n){case"input":yo(t),cp(t,i,!1);break;case"textarea":yo(t),fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?Ls(t,!!i.multiple,r,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Br(Ka.current),Br(mi.current),Po(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(r=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return Jt(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&An!==null&&e.mode&1&&!(e.flags&128))N0(),Hs(),e.flags|=98560,r=!1;else if(r=Po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(ce(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(ce(317));r[fi]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),r=!1}else $n!==null&&(Ff($n),$n=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Bt===0&&(Bt=3):yh())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Ws(),Rf(t,e),t===null&&ja(e.stateNode.containerInfo),Jt(e),null;case 10:return ih(e.type._context),Jt(e),null;case 17:return xn(e.type)&&Ol(),Jt(e),null;case 19:if(yt(Et),r=e.memoizedState,r===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=r.rendering,a===null)if(i)ua(r,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=jl(t),a!==null){for(e.flags|=128,ua(r,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,t=a.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Et,Et.current&1|2),e.child}t=t.sibling}r.tail!==null&&Dt()>Xs&&(e.flags|=128,i=!0,ua(r,!1),e.lanes=4194304)}else{if(!i)if(t=jl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!St)return Jt(e),null}else 2*Dt()-r.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,ua(r,!1),e.lanes=4194304);r.isBackwards?(a.sibling=e.child,e.child=a):(n=r.last,n!==null?n.sibling=a:e.child=a,r.last=a)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Dt(),e.sibling=null,n=Et.current,vt(Et,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return _h(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Zy(t,e){switch(Qd(e),e.tag){case 1:return xn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),yt(vn),yt(nn),lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return Ws(),null;case 10:return ih(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var Lo=!1,en=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var em=!1;function eS(t,e){if(df=Nl,t=S0(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var c;h!==n||s!==0&&h.nodeType!==3||(o=a+s),h!==r||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(c=h.firstChild)!==null;)d=h,h=c;for(;;){if(h===t)break t;if(d===n&&++u===s&&(o=a),d===r&&++f===i&&(l=a),(c=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=c}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hf={focusedElem:t,selectionRange:n},Nl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,p=e.stateNode,x=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:qn(e.type,v),g);p.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(E){Rt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return m=em,em=!1,m}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&Pf(e,n,r)}s=s.next}while(s!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[Ya],delete e[gf],delete e[Fy],delete e[ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xv(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var jt=null,Kn=!1;function Ji(t,e,n){for(n=n.child;n!==null;)_v(t,e,n),n=n.sibling}function _v(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:en||bs(n,e);case 6:var i=jt,s=Kn;jt=null,Ji(t,e,n),jt=i,Kn=s,jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Ha(t)):$c(jt,n.stateNode));break;case 4:i=jt,s=Kn,jt=n.stateNode.containerInfo,Kn=!0,Ji(t,e,n),jt=i,Kn=s;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&Pf(n,e,a),s=s.next}while(s!==i)}Ji(t,e,n);break;case 1:if(!en&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Ji(t,e,n),en=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qy),e.forEach(function(i){var s=cS.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var r=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Kn=!1;break e;case 3:jt=o.stateNode.containerInfo,Kn=!0;break e;case 4:jt=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if(jt===null)throw Error(ce(160));_v(r,a,s),jt=null,Kn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Rt(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yv(e,t),e=e.sibling}function yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),si(t),i&4){try{Da(3,t,t.return),xc(3,t)}catch(v){Rt(t,t.return,v)}try{Da(5,t,t.return)}catch(v){Rt(t,t.return,v)}}break;case 1:Hn(e,t),si(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(Hn(e,t),si(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var s=t.stateNode;try{Oa(s,"")}catch(v){Rt(t,t.return,v)}}if(i&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,a=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Hg(s,r),tf(o,a);var u=tf(o,r);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Yg(s,h):f==="dangerouslySetInnerHTML"?jg(s,h):f==="children"?Oa(s,h):Od(s,f,h,u)}switch(o){case"input":$u(s,r);break;case"textarea":Gg(s,r);break;case"select":var d=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var c=r.value;c!=null?Ls(s,!!r.multiple,c,!1):d!==!!r.multiple&&(r.defaultValue!=null?Ls(s,!!r.multiple,r.defaultValue,!0):Ls(s,!!r.multiple,r.multiple?[]:"",!1))}s[Ya]=r}catch(v){Rt(t,t.return,v)}}break;case 6:if(Hn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(ce(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(v){Rt(t,t.return,v)}}break;case 3:if(Hn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(v){Rt(t,t.return,v)}break;case 4:Hn(e,t),si(t);break;case 13:Hn(e,t),si(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(vh=Dt())),i&4&&nm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(en=(u=en)||f,Hn(e,t),en=u):Hn(e,t),si(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(h=Ce=f;Ce!==null;){switch(d=Ce,c=d.child,d.tag){case 0:case 11:case 14:case 15:Da(4,d,d.return);break;case 1:bs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Rt(i,n,v)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){rm(h);continue}}c!==null?(c.return=d,Ce=c):rm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{s=h.stateNode,u?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Xg("display",a))}catch(v){Rt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Rt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),si(t),i&4&&nm(t);break;case 21:break;default:Hn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Oa(s,""),i.flags&=-33);var r=tm(t);Lf(t,r,s);break;case 3:case 4:var a=i.stateNode.containerInfo,o=tm(t);If(t,o,a);break;default:throw Error(ce(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tS(t,e,n){Ce=t,Sv(t)}function Sv(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var s=Ce,r=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||Lo;if(!a){var o=s.alternate,l=o!==null&&o.memoizedState!==null||en;o=Lo;var u=en;if(Lo=a,(en=l)&&!u)for(Ce=s;Ce!==null;)a=Ce,l=a.child,a.tag===22&&a.memoizedState!==null?sm(s):l!==null?(l.return=a,Ce=l):sm(s);for(;r!==null;)Ce=r,Sv(r),r=r.sibling;Ce=s,Lo=o,en=u}im(t)}else s.subtreeFlags&8772&&r!==null?(r.return=s,Ce=r):im(t)}}function im(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Vp(e,r,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ha(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}en||e.flags&512&&bf(e)}catch(d){Rt(e,e.return,d)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function rm(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function sm(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(l){Rt(e,s,l)}}var r=e.return;try{bf(e)}catch(l){Rt(e,r,l)}break;case 5:var a=e.return;try{bf(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var nS=Math.ceil,ql=Xi.ReactCurrentDispatcher,mh=Xi.ReactCurrentOwner,Bn=Xi.ReactCurrentBatchConfig,it=0,Wt=null,kt=null,Yt=0,wn=0,Is=wr(0),Bt=0,Qa=null,Yr=0,_c=0,gh=0,Na=null,pn=null,vh=0,Xs=1/0,Ri=null,Kl=!1,Df=null,vr=null,Do=!1,ur=null,$l=0,Ua=0,Nf=null,xl=-1,_l=0;function on(){return it&6?Dt():xl!==-1?xl:xl=Dt()}function xr(t){return t.mode&1?it&2&&Yt!==0?Yt&-Yt:By.transition!==null?(_l===0&&(_l=s0()),_l):(t=ut,t!==0||(t=window.event,t=t===void 0?16:d0(t.type)),t):1}function ei(t,e,n,i){if(50<Ua)throw Ua=0,Nf=null,Error(ce(185));ro(t,n,i),(!(it&2)||t!==Wt)&&(t===Wt&&(!(it&2)&&(_c|=n),Bt===4&&or(t,Yt)),_n(t,i),n===1&&it===0&&!(e.mode&1)&&(Xs=Dt()+500,mc&&Ar()))}function _n(t,e){var n=t.callbackNode;B_(t,e);var i=Dl(t,t===Wt?Yt:0);if(i===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?Oy(am.bind(null,t)):I0(am.bind(null,t)),Ny(function(){!(it&6)&&Ar()}),n=null;else{switch(a0(i)){case 1:n=Gd;break;case 4:n=i0;break;case 16:n=Ll;break;case 536870912:n=r0;break;default:n=Ll}n=Pv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(xl=-1,_l=0,it&6)throw Error(ce(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Dl(t,t===Wt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var s=it;it|=2;var r=wv();(Wt!==t||Yt!==e)&&(Ri=null,Xs=Dt()+500,Hr(t,e));do try{sS();break}catch(o){Ev(t,o)}while(1);nh(),ql.current=r,it=s,kt!==null?e=0:(Wt=null,Yt=0,e=Bt)}if(e!==0){if(e===2&&(s=of(t),s!==0&&(i=s,e=Uf(t,s))),e===1)throw n=Qa,Hr(t,0),or(t,i),_n(t,Dt()),n;if(e===6)or(t,i);else{if(s=t.current.alternate,!(i&30)&&!iS(s)&&(e=Jl(t,i),e===2&&(r=of(t),r!==0&&(i=r,e=Uf(t,r))),e===1))throw n=Qa,Hr(t,0),or(t,i),_n(t,Dt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Dr(t,pn,Ri);break;case 3:if(or(t,i),(i&130023424)===i&&(e=vh+500-Dt(),10<e)){if(Dl(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=mf(Dr.bind(null,t,pn,Ri),e);break}Dr(t,pn,Ri);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var a=31-Qn(i);r=1<<a,a=e[a],a>s&&(s=a),i&=~r}if(i=s,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){t.timeoutHandle=mf(Dr.bind(null,t,pn,Ri),i);break}Dr(t,pn,Ri);break;case 5:Dr(t,pn,Ri);break;default:throw Error(ce(329))}}}return _n(t,Dt()),t.callbackNode===n?Mv.bind(null,t):null}function Uf(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=pn,pn=n,e!==null&&Ff(e)),t}function Ff(t){pn===null?pn=t:pn.push.apply(pn,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!ti(r(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~gh,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function am(t){if(it&6)throw Error(ce(327));ks();var e=Dl(t,0);if(!(e&1))return _n(t,Dt()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=Uf(t,i))}if(n===1)throw n=Qa,Hr(t,0),or(t,e),_n(t,Dt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,pn,Ri),_n(t,Dt()),null}function xh(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Xs=Dt()+500,mc&&Ar())}}function qr(t){ur!==null&&ur.tag===0&&!(it&6)&&ks();var e=it;it|=1;var n=Bn.transition,i=ut;try{if(Bn.transition=null,ut=1,t)return t()}finally{ut=i,Bn.transition=n,it=e,!(it&6)&&Ar()}}function _h(){wn=Is.current,yt(Is)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dy(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:Ws(),yt(vn),yt(nn),lh();break;case 5:oh(i);break;case 4:Ws();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:ih(i.type._context);break;case 22:case 23:_h()}n=n.return}if(Wt=t,kt=t=_r(t.current,null),Yt=wn=e,Bt=0,Qa=null,gh=_c=Yr=0,pn=Na=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,r=n.pending;if(r!==null){var a=r.next;r.next=s,i.next=a}n.pending=i}Or=null}return t}function Ev(t,e){do{var n=kt;try{if(nh(),ml.current=Yl,Xl){for(var i=wt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Xl=!1}if(Xr=0,Gt=Ot=wt=null,La=!1,$a=0,mh.current=null,n===null||n.return===null){Bt=1,Qa=e,kt=null;break}e:{var r=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var c=Yp(a);if(c!==null){c.flags&=-257,qp(c,a,o,r,e),c.mode&1&&Xp(r,u,e),e=c,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){Xp(r,u,e),yh();break e}l=Error(ce(426))}}else if(St&&o.mode&1){var g=Yp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),qp(g,a,o,r,e),eh(js(l,o));break e}}r=l=js(l,o),Bt!==4&&(Bt=2),Na===null?Na=[r]:Na.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var p=av(r,l,e);zp(r,p);break e;case 1:o=l;var x=r.type,y=r.stateNode;if(!(r.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){r.flags|=65536,e&=-e,r.lanes|=e;var E=ov(r,o,e);zp(r,E);break e}}r=r.return}while(r!==null)}Tv(n)}catch(S){e=S,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(1)}function wv(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function yh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(Yr&268435455)&&!(_c&268435455)||or(Wt,Yt)}function Jl(t,e){var n=it;it|=2;var i=wv();(Wt!==t||Yt!==e)&&(Ri=null,Hr(t,e));do try{rS();break}catch(s){Ev(t,s)}while(1);if(nh(),it=n,ql.current=i,kt!==null)throw Error(ce(261));return Wt=null,Yt=0,Bt}function rS(){for(;kt!==null;)Av(kt)}function sS(){for(;kt!==null&&!b_();)Av(kt)}function Av(t){var e=Rv(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Tv(t):kt=e,mh.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zy(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,kt=null;return}}else if(n=Jy(n,e,wn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Bt===0&&(Bt=5)}function Dr(t,e,n){var i=ut,s=Bn.transition;try{Bn.transition=null,ut=1,aS(t,e,n,i)}finally{Bn.transition=s,ut=i}return null}function aS(t,e,n,i){do ks();while(ur!==null);if(it&6)throw Error(ce(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(z_(t,r),t===Wt&&(kt=Wt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,Pv(Ll,function(){return ks(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Bn.transition,Bn.transition=null;var a=ut;ut=1;var o=it;it|=4,mh.current=null,eS(t,n),yv(n,t),Ty(hf),Nl=!!df,hf=df=null,t.current=n,tS(n),I_(),it=o,ut=a,Bn.transition=r}else t.current=n;if(Do&&(Do=!1,ur=t,$l=s),r=t.pendingLanes,r===0&&(vr=null),N_(n.stateNode),_n(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Kl)throw Kl=!1,t=Df,Df=null,t;return $l&1&&t.tag!==0&&ks(),r=t.pendingLanes,r&1?t===Nf?Ua++:(Ua=0,Nf=t):Ua=0,Ar(),null}function ks(){if(ur!==null){var t=a0($l),e=Bn.transition,n=ut;try{if(Bn.transition=null,ut=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,$l=0,it&6)throw Error(ce(331));var s=it;for(it|=4,Ce=t.current;Ce!==null;){var r=Ce,a=r.child;if(Ce.flags&16){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ce=u;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:Da(8,f,r)}var h=f.child;if(h!==null)h.return=f,Ce=h;else for(;Ce!==null;){f=Ce;var d=f.sibling,c=f.return;if(vv(f),f===u){Ce=null;break}if(d!==null){d.return=c,Ce=d;break}Ce=c}}}var m=r.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Ce=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,Ce=a;else e:for(;Ce!==null;){if(r=Ce,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Da(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,Ce=p;break e}Ce=r.return}}var x=t.current;for(Ce=x;Ce!==null;){a=Ce;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ce=y;else e:for(a=x;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xc(9,o)}}catch(S){Rt(o,o.return,S)}if(o===a){Ce=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Ce=E;break e}Ce=o.return}}if(it=s,Ar(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{ut=n,Bn.transition=e}}return!1}function om(t,e,n){e=js(n,e),e=av(t,e,1),t=gr(t,e,1),e=on(),t!==null&&(ro(t,1,e),_n(t,e))}function Rt(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=js(n,t),t=ov(e,t,1),e=gr(e,t,1),t=on(),e!==null&&(ro(e,1,t),_n(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Yt&n)===n&&(Bt===4||Bt===3&&(Yt&130023424)===Yt&&500>Dt()-vh?Hr(t,0):gh|=n),_n(t,e)}function Cv(t,e){e===0&&(t.mode&1?(e=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):e=1);var n=on();t=zi(t,e),t!==null&&(ro(t,e,n),_n(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cv(t,n)}function cS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Cv(t,n)}var Rv;Rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,$y(t,e,n);mn=!!(t.flags&131072)}else mn=!1,St&&e.flags&1048576&&L0(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var s=Vs(e,nn.current);Fs(e,n),s=uh(null,e,i,t,s,n);var r=fh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(r=!0,Bl(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,sh(e),s.updater=vc,e.stateNode=s,s._reactInternals=e,Mf(e,i,t,n),e=Af(null,e,i,!0,r,n)):(e.tag=0,St&&r&&Zd(e),an(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=fS(i),t=qn(i,t),s){case 0:e=wf(null,e,i,t,n);break e;case 1:e=Jp(null,e,i,t,n);break e;case 11:e=Kp(null,e,i,t,n);break e;case 14:e=$p(null,e,i,qn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:qn(i,s),wf(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:qn(i,s),Jp(t,e,i,s,n);case 3:e:{if(fv(e),t===null)throw Error(ce(387));i=e.pendingProps,r=e.memoizedState,s=r.element,O0(t,e),Wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=js(Error(ce(423)),e),e=Zp(t,e,i,n,s);break e}else if(i!==s){s=js(Error(ce(424)),e),e=Zp(t,e,i,n,s);break e}else for(An=mr(e.stateNode.containerInfo.firstChild),Tn=e,St=!0,$n=null,n=F0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===s){e=Vi(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return B0(e),t===null&&_f(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,pf(i,s)?a=null:r!==null&&pf(i,r)&&(e.flags|=32),uv(t,e),an(t,e,a,n),e.child;case 6:return t===null&&_f(e),null;case 13:return dv(t,e,n);case 4:return ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:qn(i,s),Kp(t,e,i,s,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,r=e.memoizedProps,a=s.value,vt(Hl,i._currentValue),i._currentValue=a,r!==null)if(ti(r.value,a)){if(r.children===s.children&&!vn.current){e=Vi(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=Ni(-1,n&-n),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),yf(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)a=r.type===e.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),yf(a,n,e),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}an(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,Fs(e,n),s=zn(s),i=i(s),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,s=qn(i,e.pendingProps),s=qn(i.type,s),$p(t,e,i,s,n);case 15:return lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:qn(i,s),vl(t,e),e.tag=1,xn(i)?(t=!0,Bl(e)):t=!1,Fs(e,n),sv(e,i,s),Mf(e,i,s,n),Af(null,e,i,!0,t,n);case 19:return hv(t,e,n);case 22:return cv(t,e,n)}throw Error(ce(156,e.tag))};function Pv(t,e){return n0(t,e)}function uS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new uS(t,e,n,i)}function Sh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return Sh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zd)return 11;if(t===Vd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,s,r){var a=2;if(i=t,typeof t=="function")Sh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ss:return Gr(n.children,s,r,e);case Bd:a=8,s|=8;break;case ju:return t=On(12,n,e,s|2),t.elementType=ju,t.lanes=r,t;case Xu:return t=On(13,n,e,s),t.elementType=Xu,t.lanes=r,t;case Yu:return t=On(19,n,e,s),t.elementType=Yu,t.lanes=r,t;case Bg:return yc(n,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kg:a=10;break e;case Og:a=9;break e;case zd:a=11;break e;case Vd:a=14;break e;case rr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=On(a,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Gr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function yc(t,e,n,i){return t=On(22,t,i,e),t.elementType=Bg,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dS(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,i,s,r,a,o,l){return t=new dS(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=On(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(r),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function bv(t){if(!t)return Sr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(xn(n))return b0(t,n,e)}return e}function Iv(t,e,n,i,s,r,a,o,l){return t=Mh(n,i,!0,t,s,r,a,o,l),t.context=bv(null),n=t.current,i=on(),s=xr(n),r=Ni(i,s),r.callback=e??null,gr(n,r,s),t.current.lanes=s,ro(t,s,i),_n(t,i),t}function Sc(t,e,n,i){var s=e.current,r=on(),a=xr(s);return n=bv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(r,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(s,e,a),t!==null&&(ei(t,s,a,r),pl(t,s,a)),a}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eh(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function pS(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function wh(t){this._internalRoot=t}Mc.prototype.render=wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Sc(t,e,null,null)};Mc.prototype.unmount=wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Sc(null,t,null,null)}),e[Bi]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=c0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&f0(t)}};function Ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cm(){}function mS(t,e,n,i,s){if(s){if(typeof i=="function"){var r=i;i=function(){var u=Zl(a);r.call(u)}}var a=Iv(e,i,t,0,null,!1,!1,"",cm);return t._reactRootContainer=a,t[Bi]=a.current,ja(t.nodeType===8?t.parentNode:t),qr(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var o=i;i=function(){var u=Zl(l);o.call(u)}}var l=Mh(t,0,!1,null,null,!1,!1,"",cm);return t._reactRootContainer=l,t[Bi]=l.current,ja(t.nodeType===8?t.parentNode:t),qr(function(){Sc(e,l,n,i)}),l}function wc(t,e,n,i,s){var r=n._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var o=s;s=function(){var l=Zl(a);o.call(l)}}Sc(e,a,t,s)}else a=mS(n,e,t,s,i);return Zl(a)}o0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(Wd(e,n|1),_n(e,Dt()),!(it&6)&&(Xs=Dt()+500,Ar()))}break;case 13:qr(function(){var i=zi(t,1);if(i!==null){var s=on();ei(i,t,1,s)}}),Eh(t,1)}};jd=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=on();ei(e,t,134217728,n)}Eh(t,134217728)}};l0=function(t){if(t.tag===13){var e=xr(t),n=zi(t,e);if(n!==null){var i=on();ei(n,t,e,i)}Eh(t,e)}};c0=function(){return ut};u0=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};rf=function(t,e,n){switch(e){case"input":if($u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=pc(i);if(!s)throw Error(ce(90));Vg(i),$u(i,s)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};$g=xh;Jg=qr;var gS={usingClientEntryPoint:!1,Events:[ao,As,pc,qg,Kg,xh]},fa={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vS={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e0(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{uc=No.inject(vS),pi=No}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ah(e))throw Error(ce(200));return hS(t,e,null,n)};Pn.createRoot=function(t,e){if(!Ah(t))throw Error(ce(299));var n=!1,i="",s=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,i,s),t[Bi]=e.current,ja(t.nodeType===8?t.parentNode:t),new wh(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=e0(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return qr(t)};Pn.hydrate=function(t,e,n){if(!Ec(e))throw Error(ce(200));return wc(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Ah(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,s=!1,r="",a=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Iv(e,null,t,1,n??null,s,!1,r,a),t[Bi]=e.current,ja(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Mc(e)};Pn.render=function(t,e,n){if(!Ec(e))throw Error(ce(200));return wc(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(ce(40));return t._reactRootContainer?(qr(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1};Pn.unstable_batchedUpdates=xh;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return wc(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Dg.exports=Pn;var xS=Dg.exports,um=xS;Gu.createRoot=um.createRoot,Gu.hydrateRoot=um.hydrateRoot;const _S="modulepreload",yS=function(t){return"/JackS-Portfolio/"+t},fm={},SS=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=yS(r),r in fm)return;fm[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===r&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":_S,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};var Th={};Object.defineProperty(Th,"__esModule",{value:!0});Th.parse=RS;Th.serialize=PS;const MS=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,ES=/^[\u0021-\u003A\u003C-\u007E]*$/,wS=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,AS=/^[\u0020-\u003A\u003D-\u007E]*$/,TS=Object.prototype.toString,CS=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function RS(t,e){const n=new CS,i=t.length;if(i<2)return n;const s=(e==null?void 0:e.decode)||bS;let r=0;do{const a=t.indexOf("=",r);if(a===-1)break;const o=t.indexOf(";",r),l=o===-1?i:o;if(a>l){r=t.lastIndexOf(";",a-1)+1;continue}const u=dm(t,r,a),f=hm(t,a,u),h=t.slice(u,f);if(n[h]===void 0){let d=dm(t,a+1,l),c=hm(t,l,d);const m=s(t.slice(d,c));n[h]=m}r=l+1}while(r<i);return n}function dm(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function hm(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function PS(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!MS.test(t))throw new TypeError(`argument name is invalid: ${t}`);const s=i(e);if(!ES.test(s))throw new TypeError(`argument val is invalid: ${e}`);let r=t+"="+s;if(!n)return r;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);r+="; Max-Age="+n.maxAge}if(n.domain){if(!wS.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);r+="; Domain="+n.domain}if(n.path){if(!AS.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);r+="; Path="+n.path}if(n.expires){if(!IS(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.partitioned&&(r+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return r}function bS(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function IS(t){return TS.call(t)==="[object Date]"}var pm="popstate";function LS(t={}){function e(s,r){let{pathname:a="/",search:o="",hash:l=""}=es(s.location.hash.substring(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),kf("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(s,r){let a=s.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=s.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof r=="string"?r:eo(r))}function i(s,r){ni(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(r)})`)}return NS(e,n,i,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ni(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DS(){return Math.random().toString(36).substring(2,10)}function mm(t,e){return{usr:t.state,key:t.key,idx:e}}function kf(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?es(e):e,state:n,key:e&&e.key||i||DS()}}function eo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function NS(t,e,n,i={}){let{window:s=document.defaultView,v5Compat:r=!1}=i,a=s.history,o="POP",l=null,u=f();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function f(){return(a.state||{idx:null}).idx}function h(){o="POP";let g=f(),p=g==null?null:g-u;u=g,l&&l({action:o,location:v.location,delta:p})}function d(g,p){o="PUSH";let x=kf(v.location,g,p);n&&n(x,g),u=f()+1;let y=mm(x,u),E=v.createHref(x);try{a.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(E)}r&&l&&l({action:o,location:v.location,delta:1})}function c(g,p){o="REPLACE";let x=kf(v.location,g,p);n&&n(x,g),u=f();let y=mm(x,u),E=v.createHref(x);a.replaceState(y,"",E),r&&l&&l({action:o,location:v.location,delta:0})}function m(g){let p=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof g=="string"?g:eo(g);return x=x.replace(/ $/,"%20"),At(p,`No window.location.(origin|href) available to create URL for href: ${x}`),new URL(x,p)}let v={get action(){return o},get location(){return t(s,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(pm,h),l=g,()=>{s.removeEventListener(pm,h),l=null}},createHref(g){return e(s,g)},createURL:m,encodeLocation(g){let p=m(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:c,go(g){return a.go(g)}};return v}function Nv(t,e,n="/"){return US(t,e,n,!1)}function US(t,e,n,i){let s=typeof e=="string"?es(e):e,r=Hi(s.pathname||"/",n);if(r==null)return null;let a=Uv(t);FS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=YS(r);o=jS(a[l],u,i)}return o}function Uv(t,e=[],n=[],i=""){let s=(r,a,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};l.relativePath.startsWith("/")&&(At(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let u=Ui([i,l.relativePath]),f=n.concat(l);r.children&&r.children.length>0&&(At(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Uv(r.children,e,f,u)),!(r.path==null&&!r.index)&&e.push({path:u,score:GS(u,r.index),routesMeta:f})};return t.forEach((r,a)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))s(r,a);else for(let l of Fv(r.path))s(r,a,l)}),e}function Fv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return s?[r,""]:[r];let a=Fv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?r:[r,l].join("/"))),s&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function FS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var kS=/^:[\w-]+$/,OS=3,BS=2,zS=1,VS=10,HS=-2,gm=t=>t==="*";function GS(t,e){let n=t.split("/"),i=n.length;return n.some(gm)&&(i+=HS),e&&(i+=BS),n.filter(s=>!gm(s)).reduce((s,r)=>s+(kS.test(r)?OS:r===""?zS:VS),i)}function WS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function jS(t,e,n=!1){let{routesMeta:i}=t,s={},r="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,f=r==="/"?e:e.slice(r.length)||"/",h=Ql({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),d=l.route;if(!h&&u&&n&&!i[i.length-1].route.index&&(h=Ql({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(s,h.params),a.push({params:s,pathname:Ui([r,h.pathname]),pathnameBase:JS(Ui([r,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(r=Ui([r,h.pathnameBase]))}return a}function Ql(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=XS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:i.reduce((u,{paramName:f,isOptional:h},d)=>{if(f==="*"){let m=o[d]||"";a=r.slice(0,r.length-m.length).replace(/(.)\/+$/,"$1")}const c=o[d];return h&&!c?u[f]=void 0:u[f]=(c||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:a,pattern:t}}function XS(t,e=!1,n=!0){ni(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function YS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ni(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Hi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function qS(t,e="/"){let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?es(t):t;return{pathname:n?n.startsWith("/")?n:KS(n,e):e,search:ZS(i),hash:QS(s)}}function KS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function au(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $S(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kv(t){let e=$S(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Ov(t,e,n,i=!1){let s;typeof t=="string"?s=es(t):(s={...t},At(!s.pathname||!s.pathname.includes("?"),au("?","pathname","search",s)),At(!s.pathname||!s.pathname.includes("#"),au("#","pathname","hash",s)),At(!s.search||!s.search.includes("#"),au("#","search","hash",s)));let r=t===""||s.pathname==="",a=r?"/":s.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),h-=1;s.pathname=d.join("/")}o=h>=0?e[h]:"/"}let l=qS(s,o),u=a&&a!=="/"&&a.endsWith("/"),f=(r||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}var Ui=t=>t.join("/").replace(/\/\/+/g,"/"),JS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,QS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var tM=["GET",...Bv];new Set(tM);var ea=V.createContext(null);ea.displayName="DataRouter";var Ac=V.createContext(null);Ac.displayName="DataRouterState";var zv=V.createContext({isTransitioning:!1});zv.displayName="ViewTransition";var nM=V.createContext(new Map);nM.displayName="Fetchers";var iM=V.createContext(null);iM.displayName="Await";var Si=V.createContext(null);Si.displayName="Navigation";var lo=V.createContext(null);lo.displayName="Location";var Yi=V.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var Ch=V.createContext(null);Ch.displayName="RouteError";function rM(t,{relative:e}={}){At(co(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=V.useContext(Si),{hash:s,pathname:r,search:a}=uo(t,{relative:e}),o=r;return n!=="/"&&(o=r==="/"?n:Ui([n,r])),i.createHref({pathname:o,search:a,hash:s})}function co(){return V.useContext(lo)!=null}function Tr(){return At(co(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(lo).location}var Vv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hv(t){V.useContext(Si).static||V.useLayoutEffect(t)}function Gv(){let{isDataRoute:t}=V.useContext(Yi);return t?vM():sM()}function sM(){At(co(),"useNavigate() may be used only in the context of a <Router> component.");let t=V.useContext(ea),{basename:e,navigator:n}=V.useContext(Si),{matches:i}=V.useContext(Yi),{pathname:s}=Tr(),r=JSON.stringify(kv(i)),a=V.useRef(!1);return Hv(()=>{a.current=!0}),V.useCallback((l,u={})=>{if(ni(a.current,Vv),!a.current)return;if(typeof l=="number"){n.go(l);return}let f=Ov(l,JSON.parse(r),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ui([e,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[e,n,r,s,t])}V.createContext(null);function uo(t,{relative:e}={}){let{matches:n}=V.useContext(Yi),{pathname:i}=Tr(),s=JSON.stringify(kv(n));return V.useMemo(()=>Ov(t,JSON.parse(s),i,e==="path"),[t,s,i,e])}function aM(t,e){return Wv(t,e)}function Wv(t,e,n,i){var x;At(co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:r}=V.useContext(Si),{matches:a}=V.useContext(Yi),o=a[a.length-1],l=o?o.params:{},u=o?o.pathname:"/",f=o?o.pathnameBase:"/",h=o&&o.route;{let y=h&&h.path||"";jv(u,!h||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let d=Tr(),c;if(e){let y=typeof e=="string"?es(e):e;At(f==="/"||((x=y.pathname)==null?void 0:x.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${y.pathname}" was given in the \`location\` prop.`),c=y}else c=d;let m=c.pathname||"/",v=m;if(f!=="/"){let y=f.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(y.length).join("/")}let g=!r&&n&&n.matches&&n.matches.length>0?n.matches:Nv(t,{pathname:v});ni(h||g!=null,`No routes matched location "${c.pathname}${c.search}${c.hash}" `),ni(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${c.pathname}${c.search}${c.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let p=fM(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Ui([f,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?f:Ui([f,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,n,i);return e&&p?V.createElement(lo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...c},navigationType:"POP"}},p):p}function oM(){let t=gM(),e=eM(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:r},"ErrorBoundary")," or"," ",V.createElement("code",{style:r},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:s},n):null,a)}var lM=V.createElement(oM,null),cM=class extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?V.createElement(Yi.Provider,{value:this.props.routeContext},V.createElement(Ch.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function uM({routeContext:t,match:e,children:n}){let i=V.useContext(ea);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(Yi.Provider,{value:t},n)}function fM(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,r=n==null?void 0:n.errors;if(r!=null){let l=s.findIndex(u=>u.route.id&&(r==null?void 0:r[u.route.id])!==void 0);At(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),s=s.slice(0,Math.min(s.length,l+1))}let a=!1,o=-1;if(n)for(let l=0;l<s.length;l++){let u=s[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(o=l),u.route.id){let{loaderData:f,errors:h}=n,d=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!h||h[u.route.id]===void 0);if(u.route.lazy||d){a=!0,o>=0?s=s.slice(0,o+1):s=[s[0]];break}}}return s.reduceRight((l,u,f)=>{let h,d=!1,c=null,m=null;n&&(h=r&&u.route.id?r[u.route.id]:void 0,c=u.route.errorElement||lM,a&&(o<0&&f===0?(jv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,m=null):o===f&&(d=!0,m=u.route.hydrateFallbackElement||null)));let v=e.concat(s.slice(0,f+1)),g=()=>{let p;return h?p=c:d?p=m:u.route.Component?p=V.createElement(u.route.Component,null):u.route.element?p=u.route.element:p=l,V.createElement(uM,{match:u,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:p})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?V.createElement(cM,{location:n.location,revalidation:n.revalidation,component:c,error:h,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}function Rh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dM(t){let e=V.useContext(ea);return At(e,Rh(t)),e}function hM(t){let e=V.useContext(Ac);return At(e,Rh(t)),e}function pM(t){let e=V.useContext(Yi);return At(e,Rh(t)),e}function Ph(t){let e=pM(t),n=e.matches[e.matches.length-1];return At(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function mM(){return Ph("useRouteId")}function gM(){var i;let t=V.useContext(Ch),e=hM("useRouteError"),n=Ph("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function vM(){let{router:t}=dM("useNavigate"),e=Ph("useNavigate"),n=V.useRef(!1);return Hv(()=>{n.current=!0}),V.useCallback(async(s,r={})=>{ni(n.current,Vv),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...r}))},[t,e])}var vm={};function jv(t,e,n){!e&&!vm[t]&&(vm[t]=!0,ni(!1,n))}V.memo(xM);function xM({routes:t,future:e,state:n}){return Wv(t,void 0,n,e)}function Of(t){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _M({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:s,static:r=!1}){At(!co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),o=V.useMemo(()=>({basename:a,navigator:s,static:r,future:{}}),[a,s,r]);typeof n=="string"&&(n=es(n));let{pathname:l="/",search:u="",hash:f="",state:h=null,key:d="default"}=n,c=V.useMemo(()=>{let m=Hi(l,a);return m==null?null:{location:{pathname:m,search:u,hash:f,state:h,key:d},navigationType:i}},[a,l,u,f,h,d,i]);return ni(c!=null,`<Router basename="${a}"> is not able to match the URL "${l}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),c==null?null:V.createElement(Si.Provider,{value:o},V.createElement(lo.Provider,{children:e,value:c}))}function yM({children:t,location:e}){return aM(Bf(t),e)}function Bf(t,e=[]){let n=[];return V.Children.forEach(t,(i,s)=>{if(!V.isValidElement(i))return;let r=[...e,s];if(i.type===V.Fragment){n.push.apply(n,Bf(i.props.children,r));return}At(i.type===Of,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Bf(i.props.children,r)),n.push(a)}),n}var Sl="get",Ml="application/x-www-form-urlencoded";function Tc(t){return t!=null&&typeof t.tagName=="string"}function SM(t){return Tc(t)&&t.tagName.toLowerCase()==="button"}function MM(t){return Tc(t)&&t.tagName.toLowerCase()==="form"}function EM(t){return Tc(t)&&t.tagName.toLowerCase()==="input"}function wM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AM(t,e){return t.button===0&&(!e||e==="_self")&&!wM(t)}var Uo=null;function TM(){if(Uo===null)try{new FormData(document.createElement("form"),0),Uo=!1}catch{Uo=!0}return Uo}var CM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ou(t){return t!=null&&!CM.has(t)?(ni(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ml}"`),null):t}function RM(t,e){let n,i,s,r,a;if(MM(t)){let o=t.getAttribute("action");i=o?Hi(o,e):null,n=t.getAttribute("method")||Sl,s=ou(t.getAttribute("enctype"))||Ml,r=new FormData(t)}else if(SM(t)||EM(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?Hi(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Sl,s=ou(t.getAttribute("formenctype"))||ou(o.getAttribute("enctype"))||Ml,r=new FormData(o,t),!TM()){let{name:u,type:f,value:h}=t;if(f==="image"){let d=u?`${u}.`:"";r.append(`${d}x`,"0"),r.append(`${d}y`,"0")}else u&&r.append(u,h)}}else{if(Tc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Sl,i=null,s=Ml,a=t}return r&&s==="text/plain"&&(a=r,r=void 0),{action:i,method:n.toLowerCase(),encType:s,formData:r,body:a}}function bh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function PM(t,e){if(t.id in e)return e[t.id];try{let n=await SS(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bM(t){return t!=null&&typeof t.page=="string"}function IM(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function LM(t,e,n){let i=await Promise.all(t.map(async s=>{let r=e.routes[s.route.id];if(r){let a=await PM(r,n);return a.links?a.links():[]}return[]}));return FM(i.flat(1).filter(IM).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function xm(t,e,n,i,s,r){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var f;return n[u].pathname!==l.pathname||((f=n[u].route.path)==null?void 0:f.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return r==="assets"?e.filter((l,u)=>a(l,u)||o(l,u)):r==="data"?e.filter((l,u)=>{var h;let f=i.routes[l.route.id];if(!f||!f.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function DM(t,e,{includeHydrateFallback:n}={}){return NM(t.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let r=[s.module];return s.clientActionModule&&(r=r.concat(s.clientActionModule)),s.clientLoaderModule&&(r=r.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(r=r.concat(s.hydrateFallbackModule)),s.imports&&(r=r.concat(s.imports)),r}).flat(1))}function NM(t){return[...new Set(t)]}function UM(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function FM(t,e){let n=new Set,i=new Set(e);return t.reduce((s,r)=>{if(e&&!bM(r)&&r.as==="script"&&r.href&&i.has(r.href))return s;let o=JSON.stringify(UM(r));return n.has(o)||(n.add(o),s.push({key:o,link:r})),s},[])}var kM=new Set([100,101,204,205]);function OM(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Hi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Xv(){let t=V.useContext(ea);return bh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function BM(){let t=V.useContext(Ac);return bh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ih=V.createContext(void 0);Ih.displayName="FrameworkContext";function Yv(){let t=V.useContext(Ih);return bh(t,"You must render this element inside a <HydratedRouter> element"),t}function zM(t,e){let n=V.useContext(Ih),[i,s]=V.useState(!1),[r,a]=V.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:f,onTouchStart:h}=e,d=V.useRef(null);V.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let v=p=>{p.forEach(x=>{a(x.isIntersecting)})},g=new IntersectionObserver(v,{threshold:.5});return d.current&&g.observe(d.current),()=>{g.disconnect()}}},[t]),V.useEffect(()=>{if(i){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[i]);let c=()=>{s(!0)},m=()=>{s(!1),a(!1)};return n?t!=="intent"?[r,d,{}]:[r,d,{onFocus:da(o,c),onBlur:da(l,m),onMouseEnter:da(u,c),onMouseLeave:da(f,m),onTouchStart:da(h,c)}]:[!1,d,{}]}function da(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function VM({page:t,...e}){let{router:n}=Xv(),i=V.useMemo(()=>Nv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?V.createElement(GM,{page:t,matches:i,...e}):null}function HM(t){let{manifest:e,routeModules:n}=Yv(),[i,s]=V.useState([]);return V.useEffect(()=>{let r=!1;return LM(t,e,n).then(a=>{r||s(a)}),()=>{r=!0}},[t,e,n]),i}function GM({page:t,matches:e,...n}){let i=Tr(),{manifest:s,routeModules:r}=Yv(),{basename:a}=Xv(),{loaderData:o,matches:l}=BM(),u=V.useMemo(()=>xm(t,e,l,s,i,"data"),[t,e,l,s,i]),f=V.useMemo(()=>xm(t,e,l,s,i,"assets"),[t,e,l,s,i]),h=V.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let m=new Set,v=!1;if(e.forEach(p=>{var y;let x=s.routes[p.route.id];!x||!x.hasLoader||(!u.some(E=>E.route.id===p.route.id)&&p.route.id in o&&((y=r[p.route.id])!=null&&y.shouldRevalidate)||x.hasClientLoader?v=!0:m.add(p.route.id))}),m.size===0)return[];let g=OM(t,a);return v&&m.size>0&&g.searchParams.set("_routes",e.filter(p=>m.has(p.route.id)).map(p=>p.route.id).join(",")),[g.pathname+g.search]},[a,o,i,s,u,e,t,r]),d=V.useMemo(()=>DM(f,s),[f,s]),c=HM(f);return V.createElement(V.Fragment,null,h.map(m=>V.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})),d.map(m=>V.createElement("link",{key:m,rel:"modulepreload",href:m,...n})),c.map(({key:m,link:v})=>V.createElement("link",{key:m,...v})))}function WM(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qv&&(window.__reactRouterVersion="7.5.3")}catch{}function jM({basename:t,children:e,window:n}){let i=V.useRef();i.current==null&&(i.current=LS({window:n,v5Compat:!0}));let s=i.current,[r,a]=V.useState({action:s.action,location:s.location}),o=V.useCallback(l=>{V.startTransition(()=>a(l))},[a]);return V.useLayoutEffect(()=>s.listen(o),[s,o]),V.createElement(_M,{basename:t,children:e,location:r.location,navigationType:r.action,navigator:s})}var Kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fa=V.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:s,reloadDocument:r,replace:a,state:o,target:l,to:u,preventScrollReset:f,viewTransition:h,...d},c){let{basename:m}=V.useContext(Si),v=typeof u=="string"&&Kv.test(u),g,p=!1;if(typeof u=="string"&&v&&(g=u,qv))try{let T=new URL(window.location.href),A=u.startsWith("//")?new URL(T.protocol+u):new URL(u),C=Hi(A.pathname,m);A.origin===T.origin&&C!=null?u=C+A.search+A.hash:p=!0}catch{ni(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=rM(u,{relative:s}),[y,E,S]=zM(i,d),M=KM(u,{replace:a,state:o,target:l,preventScrollReset:f,relative:s,viewTransition:h});function w(T){e&&e(T),T.defaultPrevented||M(T)}let _=V.createElement("a",{...d,...S,href:g||x,onClick:p||r?e:w,ref:WM(c,E),target:l,"data-discover":!v&&n==="render"?"true":void 0});return y&&!v?V.createElement(V.Fragment,null,_,V.createElement(VM,{page:x})):_});Fa.displayName="Link";var XM=V.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:s=!1,style:r,to:a,viewTransition:o,children:l,...u},f){let h=uo(a,{relative:u.relative}),d=Tr(),c=V.useContext(Ac),{navigator:m,basename:v}=V.useContext(Si),g=c!=null&&e1(h)&&o===!0,p=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,x=d.pathname,y=c&&c.navigation&&c.navigation.location?c.navigation.location.pathname:null;n||(x=x.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase()),y&&v&&(y=Hi(y,v)||y);const E=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let S=x===p||!s&&x.startsWith(p)&&x.charAt(E)==="/",M=y!=null&&(y===p||!s&&y.startsWith(p)&&y.charAt(p.length)==="/"),w={isActive:S,isPending:M,isTransitioning:g},_=S?e:void 0,T;typeof i=="function"?T=i(w):T=[i,S?"active":null,M?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let A=typeof r=="function"?r(w):r;return V.createElement(Fa,{...u,"aria-current":_,className:T,ref:f,style:A,to:a,viewTransition:o},typeof l=="function"?l(w):l)});XM.displayName="NavLink";var YM=V.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:s,state:r,method:a=Sl,action:o,onSubmit:l,relative:u,preventScrollReset:f,viewTransition:h,...d},c)=>{let m=ZM(),v=QM(o,{relative:u}),g=a.toLowerCase()==="get"?"get":"post",p=typeof o=="string"&&Kv.test(o),x=y=>{if(l&&l(y),y.defaultPrevented)return;y.preventDefault();let E=y.nativeEvent.submitter,S=(E==null?void 0:E.getAttribute("formmethod"))||a;m(E||y.currentTarget,{fetcherKey:e,method:S,navigate:n,replace:s,state:r,relative:u,preventScrollReset:f,viewTransition:h})};return V.createElement("form",{ref:c,method:g,action:v,onSubmit:i?l:x,...d,"data-discover":!p&&t==="render"?"true":void 0})});YM.displayName="Form";function qM(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $v(t){let e=V.useContext(ea);return At(e,qM(t)),e}function KM(t,{target:e,replace:n,state:i,preventScrollReset:s,relative:r,viewTransition:a}={}){let o=Gv(),l=Tr(),u=uo(t,{relative:r});return V.useCallback(f=>{if(AM(f,e)){f.preventDefault();let h=n!==void 0?n:eo(l)===eo(u);o(t,{replace:h,state:i,preventScrollReset:s,relative:r,viewTransition:a})}},[l,o,u,n,i,e,t,s,r,a])}var $M=0,JM=()=>`__${String(++$M)}__`;function ZM(){let{router:t}=$v("useSubmit"),{basename:e}=V.useContext(Si),n=mM();return V.useCallback(async(i,s={})=>{let{action:r,method:a,encType:o,formData:l,body:u}=RM(i,e);if(s.navigate===!1){let f=s.fetcherKey||JM();await t.fetch(f,n,s.action||r,{preventScrollReset:s.preventScrollReset,formData:l,body:u,formMethod:s.method||a,formEncType:s.encType||o,flushSync:s.flushSync})}else await t.navigate(s.action||r,{preventScrollReset:s.preventScrollReset,formData:l,body:u,formMethod:s.method||a,formEncType:s.encType||o,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function QM(t,{relative:e}={}){let{basename:n}=V.useContext(Si),i=V.useContext(Yi);At(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),r={...uo(t||".",{relative:e})},a=Tr();if(t==null){r.search=a.search;let o=new URLSearchParams(r.search),l=o.getAll("index");if(l.some(f=>f==="")){o.delete("index"),l.filter(h=>h).forEach(h=>o.append("index",h));let f=o.toString();r.search=f?`?${f}`:""}}return(!t||t===".")&&s.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:Ui([n,r.pathname])),eo(r)}function e1(t,e={}){let n=V.useContext(zv);At(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=$v("useViewTransitionState"),s=uo(t,{relative:e.relative});if(!n.isTransitioning)return!1;let r=Hi(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Hi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Ql(s.pathname,a)!=null||Ql(s.pathname,r)!=null}new TextEncoder;[...kM];const t1="_dark-theme_4tlrg_248",n1="_terminal-container_4tlrg_1",i1="_cursor_4tlrg_92",r1="_matrix-char_4tlrg_1",s1="_button_4tlrg_1",a1="_appWrapper_4tlrg_3",o1="_App_4tlrg_9",l1="_App_4tlrg_9",c1="_appHidden_4tlrg_18",u1="_appLoaded_4tlrg_23",f1="_homeContent_4tlrg_27",d1="_fadeIn_4tlrg_1",h1="_codeLines_4tlrg_106",p1="_codeLine_4tlrg_106",m1="_scanline_4tlrg_1",g1="_backgroundEffects_4tlrg_127",v1="_grid_4tlrg_137",x1="_topBlur_4tlrg_150",_1="_pulse_4tlrg_1",y1="_bottomBlur_4tlrg_164",S1="_pageTransition_4tlrg_194",M1="_pageTransitionActive_4tlrg_207",E1="_darkMode_4tlrg_212",w1="_colorTransition_4tlrg_1",A1="_backgroundTransition_4tlrg_1",T1="_borderTransition_4tlrg_1",C1="_shadowTransition_4tlrg_1",R1="_slideUp_4tlrg_1",P1="_glitch_4tlrg_1",b1="_blink_4tlrg_1",dn={"dark-theme":"_dark-theme_4tlrg_248",darkTheme:t1,"terminal-container":"_terminal-container_4tlrg_1",terminalContainer:n1,cursor:i1,"matrix-char":"_matrix-char_4tlrg_1",matrixChar:r1,button:s1,appWrapper:a1,App:o1,app:l1,appHidden:c1,appLoaded:u1,homeContent:f1,fadeIn:d1,codeLines:h1,codeLine:p1,scanline:m1,backgroundEffects:g1,grid:v1,topBlur:x1,pulse:_1,bottomBlur:y1,pageTransition:S1,pageTransitionActive:M1,darkMode:E1,colorTransition:w1,backgroundTransition:A1,borderTransition:T1,shadowTransition:C1,slideUp:R1,glitch:P1,blink:b1},I1="_dark-theme_1a8fj_1",L1="_terminal-container_1a8fj_1",D1="_cursor_1a8fj_1",N1="_matrix-char_1a8fj_1",U1="_button_1a8fj_1",F1="_container_1a8fj_3",k1="_title_1a8fj_16",O1="_content_1a8fj_26",B1="_aboutImage_1a8fj_32",z1="_aboutItems_1a8fj_46",V1="_aboutItem_1a8fj_46",H1="_aboutItemText_1a8fj_88",G1="_colorTransition_1a8fj_1",W1="_backgroundTransition_1a8fj_1",j1="_borderTransition_1a8fj_1",X1="_shadowTransition_1a8fj_1",Gn={"dark-theme":"_dark-theme_1a8fj_1",darkTheme:I1,"terminal-container":"_terminal-container_1a8fj_1",terminalContainer:L1,cursor:D1,"matrix-char":"_matrix-char_1a8fj_1",matrixChar:N1,button:U1,container:F1,title:k1,content:O1,aboutImage:B1,aboutItems:z1,aboutItem:V1,aboutItemText:H1,colorTransition:G1,backgroundTransition:W1,borderTransition:j1,shadowTransition:X1},Y1="/JackS-Portfolio/assets/aboutImage-093cf9f5.png",q1="/JackS-Portfolio/assets/cursorIcon-22d0a330.png",K1="/JackS-Portfolio/assets/serverIcon-5f663350.png",$1="/JackS-Portfolio/assets/uiIcon-747084fb.png",J1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZlPiE1RHMd/18hMzQJJQhaDwpKSZpLFpMhaSP5sSCkrK4tR/uxsJSElyVhjLIRYmrLQiJkaYzOR1IiExryfz+ncq+e9e2733XfvvLM4n/p0X+edc+7v+9695757n0ggEAgEAsWJXG+o6lY2B3A1LpDOUsNpHI6iaDT3KEIMYU39w9Q0lFZzlBJiM5tX4i+K6/hmpuob0w6ZH/hH/GUm9j+agpB0gs0uHBf/eIH91Pg19wgOsR48h7+088zgCYykKAzeiE+1cwzjSikD80ngUfys88cH3CNVwMTL8JZWuzTP4iXszaihO0+xN/ETHs7oM4jjWj6japf/tH0uUnt9+4kPJEeQsbqJn+GGjInPxhO3y3c8jV2OffXj67r+Y60GMZhVy6xe3Y7+6/GJFmcE+xxzL8bLONcwplCQhAkczBh3SO0hmZePuC9jvr047RjbVhCDOclv4wrHWHMiXtPsxaAW91nqmGMN3tds2g6S8AWPq+MCRfsOfJMy7i1ud4zpwlP4Lcf+SwuS8Bw3OeYxi8EZtYeQ0aw4rvNsi9oVKy+lBzH8xovYIy3CmF6114xZbY1KgiRM4k7JCX1343stRlOQMu/81uJjdnJXHYtBHGA53uHlI+yTkqjiFtbcHr9T+2v13/xqf68dE3t7cFBKZqFUwxK8ikco/krcdhIHpCKqCpIwIBUWX0+nn46URgjiGyGIb4QgvpEWZE78p6nGtCBT4j+TjQ1pQa6L/9xobEh79vuQzQWxT719w9R0nhpHGt/I+qNnG5v9uEr8+aPnHiFeSiAQCAQCJfMX+AMr/K5EcJAAAAAASUVORK5CYII=",Z1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7ZlLSFVBGMe/m6/KZySKBmVREm1yVS2lVgUSQUVEC4uWUiRBZES1aJPVLsplURDtKoiQUrKgIiqi7EUPlUwDix6mpuHXfzonuM6dM4/rHG1xf/DjXs6c+Wa+c8/MOTOXKEOGDDoS5BFmnomPVbAGVsMyWAKz4CAcgK9gJ+xIJBLf6H8Bnc+BW+BlOMz2jMEOuBMW0nSBxnPhbviBJ89XeASW0FSCBmvhG/ZPP9xIcYNGsuAxOM7xcpaD8RZLEgWwlaeO+7CUfBImcZennifekuFgVrrJ08c9mGfq5wyLXJrh6oiy0/A6/EnpMwpvwZNwRFG+MmwnfXAl1nL0wH6ZdF4hbIRf2J4hDqbcuUlxOjTnr6d0QMXZsEcT+KKiTjls4+Bh9xhegi2h4vtD+Au+gNWK+uc07fXCAnIFlfaznpaIejnJV1lRLiaOooiyM4Y2m6LizogIOAsfjaRHWRfvT2Pwc1QllA3C7xHFWaRnL/qWT7adAVuhadorJ/+Y2pwD7Z/8yPoGm+kmzyBml0W77bbBijgYrCb2kGcQc5dFu6Ns87bMwZRrQjykvK5lktpvt2i/Tq6nGiPLycxhDFimeDhkcU5KH1WJLCE9vbCV4uM2NI2/pfIBVSJlpEcsUccpJsJf+o7htAr5gCqRYtLTRfHTYyhPeaCqEonr3vdJrnxAlcgw6VlA8VNlKB+SD6gS6SM9Yr1uepVImzB2reG0fvmAKpG3pKeSXF4T3NlMisEs8Z5M4Iqss3ggiVfqSvIMYs4LY5vYZhOsmIPXABNiPT2fPIFYFWFMGxbaBm2zDOhlH0rECGPZ0OkSeDu7IbZu6tlh65OD5XF9WNeFJpdE8uGAFOAK3AEfaRoRt2S9RfwGtrt9ZUbYdWyiwgEpyG94FOZx9HrlGlu8FXOwb/yU3WkhVzj4VbqlQGJHZQUshR8VDdU4xN/AbvzgdGdKVKzj1O2g42GZSOhT0nHz3D4xdl7YOVsmt5BDgFNSwHcwOywTv0xD6DJyBHUe2OXw91a22UzUNibuZ3k6tp859LHbLZIQF87b/m8JT5wmxe0mBn4xTQKLRPrgYvIJB5sS8t8KYjp8Bp/Dq+SIIREx0VRTHCBwNjzB6v1gu20askpEHI9j3yylA2vg6xgSEX+m7uMYlwmqTvz7M7THQyLiYXseVtF0ESa0CR4kR1DnAmyGiyhDhgwZbPgDeZo0Py9W4vMAAAAASUVORK5CYII=",Q1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7Zq/SgNBEMbnguBFTMAHELHwDewEbcRGY6FBsbe00RewSkp9CK1sBLVQRAVBK5/AxkL81yZgEIv1C0kRN3OXm0u4myT7g48Je7Ob+bI3l1wSIofDEQtjTAG6gyomfeo13EIFqYmy0UuJq9njdgLhjHSz6nneeetAhknaI/3s2gPcjlQRxkk3VexIvnWAM2KoD4CRf7VnaEAYWiPv0Bo1eigHFaEvUoC0RxZwat5b+UsIV5Qwdo9IjfiY/2Pl+wg1Sphum32eGZsjBUiNHGMHNqBcU+sYOyIFuPcRbQynES8AYc4ltAVNQaPQBDQL7UOf1CvCbgSizAnJ+YAWKfy589CpiQClaGSGIoC8EehaakR01bJPI25OUI4ELDeJ8Az5FLGWVJq9/qqHHUeNrwgnJCBRIzCwA73h4S/iC7Qdkt7d7bbkvOTmhORsBixbDMifjlMLW1SPjTwGLPsQkO9Lakms2ZHyjZBlDtUwZazTup1qSbJHssJxEe6zljacEW04I9pwRrQxMEbctyja4IxUST8Ve4Az8kT6aauRM3JA+jm0B9qMoIcuEMqkl1Kzxmjg4rViGj/Sa/nDwA20TA6HIxZ/fJauS3Fx+WYAAAAASUVORK5CYII=",eE="/JackS-Portfolio/assets/View recent photos-ff9e1dae.jpeg",tE="/JackS-Portfolio/assets/heroImage-4f9a4abf.png",nE="/JackS-Portfolio/assets/cle-55d696a9.png",iE="/JackS-Portfolio/assets/cle1-a79ba3da.png",rE="/JackS-Portfolio/assets/kerry1-00ed3af3.png",sE="/JackS-Portfolio/assets/kerrygroup-f9980649.png",aE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7ZdtDoMgDIa7XWDLPIBX1RPOnaijERJmWsZHhcT0SfhjYnnziBQADMMwjCwQ8ebGExqhGlQLtHFFFzc2NyaoxL37cuNNtUALb47CBSjkDIXQOz5cYFEx6T/Jhr8UmYzMxXw0lkyYYBJC/jXJmAvhqpdKaqIikwlzxUskN2S2yW7mhImTJrubY0KKJoeZY0JKJseZY0JyJseaY0LOQkgVc3fQATOf9QX5v/W4Jsd8YpT/1qqOox1O3OewouNoh5PMxRt1de9uDZfdIbqbxIoO0c0kNvTW003ifmBt6q0Jk+0HVtyP/GupOabOfAhJNfUuT75gU2+NTK6gDepdOx94xrXTMAzjonwB63HGEH1flEQAAAAASUVORK5CYII=",oE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgB7dWxDcIwFATQMxsg6PEK7AEbwHrZAVGwyqegooA2lXMpHFkpHSXfxT3p5Pyk+UWsA0REVhXKIaW053FjDvDxYZ4hBMsvpgW5XOTxYiJ8GXPmkv9x2BUfLvBfbhSZex7KBRPa0eeHcsGOecOfMY88zC/JiceVOcLHl+n4//0g0gg1SQWDmmQ5NUktNYk0R01SwaAmWU5NUktNIiJbGwBK00gfRw3LTgAAAABJRU5ErkJggg==",lE="/JackS-Portfolio/assets/ecom-33a85778.png",cE="/JackS-Portfolio/assets/project-07498ec0.png",uE="/JackS-Portfolio/assets/quest-6d4ead51.png",fE="/JackS-Portfolio/assets/stonks-20582524.png",dE="/JackS-Portfolio/assets/trading-67df0429.png",hE="/JackS-Portfolio/assets/SpringBoot-f011cb15.png",pE="/JackS-Portfolio/assets/angular-1cf91c2e.png",mE="/JackS-Portfolio/assets/cplus-55ac3e66.png",gE="/JackS-Portfolio/assets/cplus2-18ed9ede.png",vE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiZSURBVHgB7Vzdb1xHFT9n7trrpFl/JJHb4IjGCWlALR+ChGIaVZCKhyK1qHxVPCABT5AgpPIXROK5EkIkPCEeKhXKQwlC4rOEqJSWtCqCBjWtm8Rx47Vrr3e9u1577fXeOT2zayWufe/MmXptX2f7k652d+7ZuzO/e+bM+Zi7CKsweLb8KAD+HtocmuiB0VPdL65sU2uFam/BB4AgWMitbltDFmHqHfgAUKwFk6vb1pD19lRPiV+WoJ1BUC/8aE95dfMasuA0arZZeWhnKMhHN0cinIU2BhFNRrXHkKXa2m4hYCmqPZosjGa2jTAT1RhJFqthDtoYhJCNao/WLIL29rUIh6Oao8lSagLaGKSXRqPaI8kKAKagjYGUktuspbDW1gY+lVKRq2EqqrEr2FFcohAk2MlXuGc3QtIxXCCYr8tkFzshUlkiyZqv7ih0dFVAgv3dCM882glJx1d+V4M38iSSzdwYmY5qj5yGYz/GKiKIvPi5GmwLFKpi0crrp++LHJWK+wYRFkCAOaFqbzUKVZlWEWCsj6ksXyuBALM1Alk3tg5zS5xGEHYSLZ5APFlEoyBAqJudSTLy8inI0NNxZyyaBcMgRCXhdquwIL+ZHOrEjjuWLDbw4yBENeGpwjmP/pGOH3cq7gTPrhmp9/TMmyEM7LolTctH4z3daqSV5yhCdmU7rWpffqNvvr2lLQ8PBnCoN763Mz6aFahYmxVLFutc4WbPHPjVJZkDu1H4dL+ykjValpOlwtDfwNeJtk0wnU7Zz18rycnSgLHeeCxZaQ0iPysJ6O60Gwyfaag0+K+GQQqLsA3QySmS3V12mXmf1XpXJjalHkvWcF/GpCkS758brepO2zWrsAAisP6F178Dsc54vJ/1TWSrjTOQcPSxVnUou0xeOA3R5N4RY4XtP7MNjHzGoVUhyZ1mdlfGbOet6wgCXeHA8hOwxTB0sJMMio9g+bV5IPSl7d8tehh3M17beStZhJgFIX5yPMVTAiGlmtOi8Rosv/LAUkGzPcCmjFo1eFzxPnjPZ2y8f7/pxVzVwyFV9vHayQKYlnby2F0KBnuTlzEtCo27Affeum3BarOIlqZBiIn5ZGYexioeDilpq29pJSuAQJTTMhguCGOjTUbWZ9cG2rct2DULAnFlOjubTM3KV31uYmh1leyuA9bEG0SKi5BITHsk/nhBKdvOW8lS1CV2SqfmIZEwaW8pMOy01kutZKWhIiYrl1ADX/aIC8PcpNXsONf6wbOzJqDuccmZgPbgsutAKxJ7N19pbUIw9vNq+ajPYOJCgHOP2WuWx5+uSW/k1MjJzJ02AUcmqIHLfHzOJVTjSFJaxGwVMo5KuLkJM1VxXHjFJaNcAnyVMUgoehxx4XhFXgLjNLUzf+ckizSVIaHYvcN+PuvhkDJbzs0wzmnIcZl45/J9e/E9hYvVGOeE7aXp1jmv++6wa1Zx0SMu5DXKJeO2WZov4p6sDXz9SADf+lgQe/6P10J44nzryOpzZEhzfu6Mc+V30qCVFrsPrlz3gZ7WBtr7dtm776NZbJudmuUkK6BAXLhwVX7v3Nlasj7qWA1LHlGF0u4d2k6yQiBxyONyAHs536VayNdAxn4xH0eZc1nOkNutWUGnOJguOXJHJpnnKltJ0ZVq7jq0wWcahnqpBa5DUC+zdzcHAkwKDGpPGlqCfsGU9tjjMB9Ch3MGOcnard8wjIuMfJmD1tBxM798SK3bdu1h/+qxw4FVRpN8q5F5SCI7nXGOUdTrwTOzr7Hkx11yuzhM+/vjndCbdochr+U0HwQvjGl4ng9tITnNvAx9SMHx/QqO3oVwuM/k8V3GneALv64JN93SyyMnu+93SUliQ0OpKYk5yTIlJ7MC9TqmmilAfLJf8QHw7XsDqDNT/5kk+FdWw4UbGt4qUCMof+RQ0CDHOLvplJ825lir5sUlYhRFKSKyfAoXJeM+dPsNzGjJZ/eZQ8ETR5uah+tcB0qLXkG9yMyIfHPuuHjfw6TXlsTY31s3fHYjcqFC9JCEjCwCcZWnvLi5aZo45L2Kq7L4V0QWJzo8yIJEIF/1yjiIohSZgSeckJaEf/pq2DDSDwwo+OKHVWPl2iyMlAj+cDWEl8cJXs/7ZBz0DYmc0MDTFemQFzjb9u9xc2h48pVmGuVeXs2+xhkJs6r1tzA+NB76i1mC566HvJKSX+C8AmFHhzNLaiAiKxWmsqFMB9dgYo4ax3OjzdSMCX6Nxn1+IGDXARs+lBRmv/1l1piLEwTnhkN4u0W1ylTnHSLNkt3m31JwIF9ZZEPvMTQ3zAaRh+42xCnWOtXQvJUwLsSVooZXmBzjuL7EGrtQb/kCokemnuyA06ediTbxnBg8U57mNX0PbCD2cxbhQfbSj7D2Dc8YB5U2vNJtoqLrJzN7JbLiyYWIM3zhDSVrjIl5+vImbxMnEKeghAnjxtNSt+W/iLADLE5uislC0rflQ+ZEKN5nIyZLK9gWW729obT44XkPzdo+DxH4gFdccSZYTBagEj8ltp2gAEU+VlNWLEh/YSv/N7hNQGiSunSeQhKPyTv2OPJLyiwtzt3P6vsIon6YV8nDsF2AOIEangoxvIA7ul+6/l2/R27WHagdPls8qCk4xonh77EvNsTkZSA5YDL0RYLUswHhn66e2imeclFobUqA1+FDZ2eHeOX8Kk/ZB/nyx2BzwYlkfYm7cYFU+NTeY73/f/Uotuw52w3Nnwz+fOZuUMGXuPMnEIkLAngQWg2CcVL0V55iFwOCZ6/+ILNh/6Ozacmmj/yM0vWOyhBb1iGF9BDbvBPv//fpz1rDP7lo+/wsLPw3d6pf9vcm68SWPRJxzy/mB2ph/SjbuRPci29w0754aRwlpHMcmrxQq9M/sj/s3pLQKzHPjxw4U/kUr65c28HHWXM+w0H7/3hq/UahPn/t+z2J+POzdwGpdUAgymxDRQAAAABJRU5ErkJggg==",xE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbqSURBVHgB5Zx5jBRFFMa/1zO7KIiuElcjEl1JVBAV1HjFiywg4OIZDeAFxisajJxyMy53WA4BE9EEiJxCIsHlPgwYEUGCEExA/1BERUBFbpGd6efXyGo0Sqaqq3Rm95d09THT19evaqrf1z0Cx+j9Rc2RljYI0AkqjbikCJCE0UaKSoDia2BIGqr7ua/tHM+FYplMmL4TDhE4QjsU3QkJynmQdyAudmL9w0FhNkIMkgnTvoQDAsREmzYt1A4NRnFTa5wI5RJBZ57hNu3V9SU4ILZYaPz9Akr2CnIVQV1exNe0R9fRiEkssbTDuTN4NO2RDwj6aM+n+iIG1mKxjerGI3gMeYUO1x5PlsISK7G0bdGlXHU48g+eb1CuvR6vBwvsIqtAnmdZH/mI4FZo4YOwwFgsvR4F3OMLyGc08wwsMI+shsU3Il+j6k9u0xefaABDzMUK05cj3xERnKFNYIhNm1WCGkFwCQwxF0twFmoCKgUwxCayDqAmEIZHYIiFWMFe1AQSsg+GmIuV0S2oCUi4A4aYi3Ws/laWPyOfEayVihn+I0vW7DzO1vFN5DMavgUL7G53JDGR5S/IS3QH6pfMgQVWYsl7P+7maDDyDVVll6G3pFIhLLBO0Ujl/gr2hGchnwiCYTJu2iJYEi9Tejz5HMsVyAcUI6ViaqzaEEssWbH3KCr3t+WBDEPuUkXTohsjqj9iEjsHL9GNw6L9g2hEXcWZDcgZhNaYLMCJsImMnzYZDnBmhVWj91zQDFL1NLd8PWcbhVJ4viJZ12Qbck7DquCCplXZfj9kY8QWO5PUzD5o8DlE1zPapzGavoFDknDM4rP2RFfgOxU0ZNheedJdMSSswpSyCun2r19YqS0oRhskcB2Vuov7KD71ydlcXsD6UsjpRshVsZZ10qsyinIK1TYSyHnIRizXZhRoKKfacR91KMzf60YDzpdyeWRKDMAqXcr5USiVD+CA+L4hWdxZu/O4NzCl9qBNJGXFSu1FoT7k1P0c6mS5VjsKt5aivQ4HxBZraScdK4pxFMvKMcmKVTqaF2EMp86BHS9wGyvYKY1Vk2KJtaSjjqJIPeCT1Zpi2QfxaY3VmIcYWItV2Vnb82r7te1X6J2sRkPgjgcYYdb9LSuxFt6r9ROKifBNgOlwT29UakNYYCUWe00PcdQYPlmtXVheCvcU8efByve0yzoInoV/usAXAZ7GPC00XMtcrGUP63kc3QKPHK5DB0lps/ujmPFl/LSceWQleA/omc8uws0cGVtVRghawBDzZx0CXAjPMLKsGmBDLoIhxmKF6t9kzYjnqIoQ3kcaYm5YhDgBzwSKDHwjOAxDzCNLsAueqXcC/o3c0Pw8jMUKMjA2J025cRdWcnQMfvkChhiL1X6+/MCsyEfwSGGaqWDBevjjAFphHQyx6pSykX8DvlHMgD8msWethutY9uATWMg9+a2OpZjJ0smbEX9BsZt9xamwwEqs9rPkEFd8Cj4RiX4Rn4drBGPRUnbCAusUTbs5sp6BPAg+aSUreXIpuCKq2qUYD0tiJf/azZVh7EoMhU9K5VWWIxCXEJVs0rvYtFXVxE4rl82Wwdx7lFDL2royppUMwO9R/BNsiEyLNrgPKbF6xqEaJ4bFPXNkZDqNKzj5NqL3/nzQWoYxOm7hED0Bk81JR99Zw+EORmc/KmYdUdU4d6yWd9ErM8dRRt+wlBtvxkUXwxB2TSaXzT2tb3g1IssN9AwDplr0j30c4nRke23iL94qtGR/UOKLVI1zk/XunsOPourXuuxf8CDDTDKTPJwIg8j5yT6Ko9Obe5rPW8s2ltEw5uT8Ji2gY5hAiRyHR9yJtTF1GZKZKaiqokMcJHHKAU0nMicHI0xj4QaJ2kt/beYpnLRZ2Dy4G5MqOyhSK+rjPFpzhfhifZoawXaBTo/6z0H9z8QTa3OqnCL1Qy3BXqwtqTJmAgeiFmEn1ryHE1CddNIUq0XYidW4SUf4MUBzGsvn4IPnUAsxF2tdqph3DrejFmIu1pmB8RugNQWLanjifNRSzMXS4D94mVyd3fy6xFyswL/JikCOIgexeDkz8zV8o7oHOYiFWPW2e68m6eQm5CDmYt3Un6ldMTYoDdiFr7Z9jBzErlOqYvUmaFaILMEj8/0/GGKBnVgH8S4F2wbnyEEkClLIUezEapk6gkTY3XnbJTISVw/I2b9CsE/RXFu+GkgMgDtmovmQ2H8155N4yb8WQ0YyGhycIJ3n5tIVOU78tHLzVF9Wx5dh/zxVBYIjD0BSfvxGh7hL3m0dWIIwSStfH81uBf2ETV5vXDd0LfIE95nOSLR00AZB0DH6F1PaWufx9iVyTg9wb99Cw3cQJN5nRG5EnvEbvQfmdcYxgDQAAAAASUVORK5CYII=",_E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4pSURBVHgB7ZwJdFNVGoD/+7IUSoGWCtKklVY2WXSANoVxmUFwHEUcRykBDgo6CqI4CjLKYdOqgCuDg8om+4wDpC2ooxyP48LMcYE2FQRBVLSFJilQLEvXJO/df/6XJiFNs7ZJX2fOfOfk5N2bu73//e/e//733jDoQOTn5wszP+yfgfZOqVxqrMk4OPUH6EAw6ABYs99NZIL9MQSYTUG99weEKgZscXU93zL0qNEBCqO4sE4O365TqTV7SDK/CJaGGnnE7hTHZx2cUg4KIoCC4GCTVqVSvxtKUK50AEO0GvVbP4/c0w0URFFhVSTi3aQ22REmv7aR190NCqKosFTA/gDR8XtQEMX6rLLRmztpa5PqqAVRPTCVvSGp96FpdaAAimmWtiY1KVpByYidkjqBQigmLB3oLtBXtBpSre8jngeFUExYVih/AJA5IToESxncCwrR7n1W5S9353JRfIUub4DWguwrSXI+eMWBKWZoR9pNWJardqUK3fgGRPQf0UT6qMPlp4bWk72V6BsnANuCIsvXHZhwAtqBuAvrx2xT904MFjFBmEWC6upTsURfO6iP/5gD3xS2IOT3I2M5NP15qFk0YD1J+rk6Dmv6lhovQByJm7DoJpjNUGCky5epmgy/Sv/llHBewmXdj/FzNWZKe5X7p5N0XUEak0JadJ4xpiMBZ7rKQyzurHL8RsTELJGLG4Gx5sYs4kmqdIG+1Ph3iBNxEZZt5O5s5OIqurzWr7IyRLZUb85zaZItxzSTtGWdNwFng/Slecc8wcphuzO5RqIwJshhBP5Uesmk5+RrS27hdMbxGSq0j28dyHGfhqtnXX7grq8hxkQsrLLMzZ00vbp32TDu0DlypfBAaWzD3+qDau2TVOz9nht0U09asrZzouq5lL13uoZ+8jRcwVT2EkTo5WoIYyt1xXmPtygzt2ANpZnlCiBWifbEgX0Ojz8nB6uGv6NzauwP0wNYAM1GduSk2FskSVxCg4AtUFtx9KdqW01lsg4GXGClORGNyiGFZSbXiY41zEEmTGMI/dFlRDLqkLGEi3xFxoFJRU3pzJreQtmjlGYxlZjcvAZmkpzOuf6Nthh2rqTi5jS1HGpRJQxK3z/B4t+GE9e/l6K215dTQd3cDV6lK5n4mG+aylGkgaJzJdXlN3jgaeCwjl7Npz0xVoNpEn3NRmC5VFaTxiIcFgS2My0x9UW290YRohWWNdt0BWPCB8hwULA0VOEaYPx9Rp0rNTTDr+T9wIV5evOEz1uUnWMaSOmP+SR+TF+StypYPRZD4UMMcLUn7EQ2ItOcd6BFuSNN15NGbaKG9fdraTnp2iNMYFMoMBWCguXAG36tL51+MtCvAYWF/fYk2HrUfUOV9oMocXXMApun2z9hM41cGCiN1VDwEX2NdWc4rjPnDQiWVsacvU7TW5VylCHr15QFP0kvMY4Nlt6aW/BHSvQEXWZA1O3H79T2xuxA88+AFrwtpXZ+tIKiPqeGCbBU06C9Sr8/b1Owm7cZTLeAR1BNLAklKJmc0gedTGKzXfci1wVsTEXOznHB0uuLJ77mAMyly9VUdCNEcx/ABooJnR8P/FsArIbC49SuvhA5ZfS6Tk0vNn4ZKpFsTlQaCn6i1zfTVTljf6VOfRpECGnM21TIHa68cp08Yai+9Hf1ofJUGgqHUG//AV2mQ4SQmWJLNxv1/vEtNOvE9W+lRCkoueEYTlAytpzCpz2CIrnVO7k9H6JAYLiQKmtwZQfIQnDMCpcnrSTvCH1FZazK9p0ld1dqi/r9I9ChSYYooYZ3CZem/IaiNHolZvnUvL2PeepPEAVp+41HaXR7zRNmAi45nb07/INleBlEiaBOSGoR5x/RTYJqiBYES7gk6gbxBWr15a4AgxO66sTZ0Ao6Iy6nr7PuYDIXpCXhc7GLECU2u6XKP66FsHrI8yvEbyEq2L5Qv1pGFI0im8rrP+eIK9nxcXZoBXL7JGTzL5XF7zmZWxDSg0F21PsQDWR30aDSoi8M4s8SXoEoinaoVaHTq6XlPl7RsowS41+gDWRk8a30gJqmM2QMqhBfki3yYOkFjeNVGlwi9p2R6bM6YDmBInXjJ2yhmyuACCCrfnHWvjvLg/1+csT2e8k+utGb3ol3QRthBUaJgfSoT8yoitozE4Ol130x9QRpy0sQSdk0yacRem2g3wIKi+UzzlVyZ8x2QnDobYDl6cUTlwdLUDZsd7JK0OT7lLwl/aDxIMQAXcmkf9OdeV07KqZa/s1gU1Kw9GQKLKZJ++IQRdKD59s6d1EHXUEK6lbO+NJYTVOQyRLjt9Bo97FfqRsdnA0lQS2CEGhV0lwaiVxeAdloFVSqZyCGCIIoeyDccznMTE1k80KlTy/OWyYi60uv2d8o6Lsd4BPq2G5OL5403TPRD0REXoemJXa11R0kIU5MDZencth2cq+oybil5cGmihbSBPh5iDFkQD9FgvI8hEZnbeOVmd/eUxkunyXHVE0PMEW+dnJBl1k6IWyeuC1YcI2GTIUmQRFlasDNEAcaOafBgv3oDnZSd0l4E+JEXITVNJTjJE+YtGpJrxLjKYgDLlcy416NJW0Zd8bwzq8gDsRcWPL8j4byDT4Rn6XddmQ7xBF9sXEjPZC97iBzgONluR0QY2IuLKth13Rq7wBPGAXpERbEsxpL7E6cC27vBUkp15ZT1KoZQihiKizLyKJ0ASSvV5LcHevTiyfH3BceiCwySchbUOSNoEn3+avfS4EYElNhMeBPeN0vABclR8Kz0I5I9s4zSZc988C0+oTGeRBDYiYsefZPrluvV4Heu2czvr7dCu2IayEDhYWeMPnYFtlG7BoEMSJmwhIF51rSJq18TSNS2SmetQoUQJug2UaDineFGtVSzGy7mAjLMsI0hkR0kyeMyBfkRLi8FGt6fn5HDQlrpjeCPKvWnJ03QQyIibAEFfOaCozhHn2JcScoiL504odkOnwElxr1Bubnt/le21xAZU7Rk7KL1x2UHFxaDB0AWoeU2+H2SbEBlf8YOgfaSJuERavKl6GA3hGHTIVNmeYpB6ADkLEvbz/IqztuqJ1LZNMG2kCbhCWo7C+SbeNafpddxRqtrztGeRo5LgUfFzSTMB/aQKuFVZFtupojXNpqzfEN6lxt0IHo2+SCzvdGMJxiMZiGQStptbAEBn8Gj6kA7Ce92fgydEAyxk9YQyPiIXcwkdq6AlpJq4RVYdgxlUYY73AsqfkU6KC4vL5q8N1IMuaUofB2aAVhhSXbKOT42+YTlSSg+nVvY5C9TV7VYujAZOybuJcautsTlhBf9zj+ZDRM2moxFIwNV05QN8bP/fZ0a+xRt5JUOOQpCIdKnRVqwaKjUDHC1I/sQXnnjipYGnk7wWlHzaPDD94X0LUcVLPsPepN4QQlkyCJM+G/AKZikyGEoGRoZL/ncm3X1cF8YQEjK3ILHhAQInLPUgGi2skG9zqY16EOUvpyKteURaOi7HqOyCFIg9f0tOKJ21rEB0qsQvYwRAhZ72qHBttsHccTEVFe4o/YcypxfCJQfIsCfrh1T0Li2bqo9jS5qYGOi7wdUhtFetRqtd1dk3IfWix5d65u6Amtoyv878CcKPYAPwVo8Ro67UIt/B9osEstRsTAO/9yC8qpM+oDkfMzZziDo/A9dDBUjHcTUHiTRrghkeahsfA4rbb3948PuPOEMWEdOfCC7mEIQKqAbCtD3KiScHnaAWMVdAAqDDtnMBTmkKAGR5WR45ZA0YE1q+mvA0popIuuEhly6ZJxt0xXkhe3leFwWHJ3DRBQWkftHw1Rw77XdUkdEmg/fEDTQd7U2sDxVibvCw8JmkjaE0g4l9Ix6ENPcr01x3TUmlM4HNqRc8N2J5NXYTND6ZivoKiNu8g5T+2CrWGKOEK99k3BDg6EtD0+Hf2pun9t1XwVMCNncI07i52Wy0tIVVfrzZNcK80I+ULlyKHLkOMMCjbfNIKwwyGKC+L5nwxVA9/p6ugqTQMmLvecxHDzhchxfp9S42eeiFOGokki43Op28imh6qmZVlaiMLvkAnbHF1qXs3ae19QsyliQw2zzRobfN9d1zXtfDDJy6cySFefIYWdDj5TBkRwktCebXQ2rO93aNoZiCHW7IKbmQBrfVzbMjaq/nm9Oe/1YPlkn7x1zzUpzjMX6rLK74vIrozPqbDcwhz6WkFzLf8NGmWIUn66efI2aCOWETtGMUElnxW67VKsvMAqvFrJM5fGY3UproczT+QUTFMLsIy0qrnvG9nnjIszdF9N9m70PZ29o6+DCXMEYCPInZJMearJcX6Ycfai70nVquvolXM6FtPr80izk60I2zni8xmlxsMQJ+J+kvXi2I9Sa2qrZyNni5j/lAPhNSY5VqBGO1l+TSHwlITeYv6C/rZvF1e+N/QBWmVeRnGX+fx4nIQ2I8NMPqs4025npOVjbhIXXyKNaLZRljGopRtOCl+CPOI2nWp1c54ktcSRVLchVKccS9pNWB6shoJryQ9ONhAOhVZAeUUEaUsjZ3+K95nolnUrhCW78CEmoLwPoXvEmciecwIfk1lsLAMFUOxPMPRX8vX0WknR5EHOe56Vrgx79CVeKPePISfUyaQqPaLJQzOFLmlk64FCKCYsdWOX6DtlGhZ1F5IVczIqJqzeh35bRx3mP6PJg4x/2doDUrFAMWHJSMAiOh/kgcOlrU1KoKiwHJyT14J9EUlaBFZysQ7i9m8gkaCY6eDB9Z8MkvN9akpw3xmDg1pJGNczgiMj8URRzZJJo9Xsc5kw3P2vIH4eVrTSVGYhSAnXKS0oGcU1y5+KYYX9eQLvpnGozqbdcbiiPQ4cRMp/AIa1a+6M3yZMAAAAAElFTkSuQmCC",yE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAh4SURBVHgB7Vx9jBxlGf89735eez1aasXrB7RohNqmTaQiscakVRRQDEaCRiH+gUHbP0yMJv57+gd/KR/y4VkTjYQoSqJGxZJgsJGDWjwbKrGhhdbS0m5v78rdcR+7ezs7L8/sJuWyO/M+78zO3u4k90smO3nnmd2Z3z5f7/O8MwQf6IfwAAj7eTeHbmBsFVBcha6AtEZKD9Pwxf3Nh1TzgH4Y9zBR30W3iOo2NBEctU/vG7yj+VALWXCxGcsAHL2jeaiVLIUpLAPIuBPNQ61kEd7GMoAanWgeaiXLwVtYBtjJl5qHWsnK4xyWwZqVHW8eaiWrsmyGdayamm4eSrcIbcAMLqIGzjYgfuFmoH8jPEcXJ9xMDm5fFnFDzU9Cjb9pJzw626I0vnfJudYkf6yGCVvvBW68n6NGP+JGeX4W5dIs4ga5LvLPPYrckacFQV2hXxTyzcPKXxjTMEFlgF0/7AhRnYRWCpXdd0Nn8oIkTfiN+pPlwvy3pthEcmuQROhsH19/xixE2ldZgjTL7OSrc5xilJFEqLkpUHnGLKTJ9/79ydK4BAlzycwwqGLhC0n7aoIKEJenPLMJTcfKFmS55KssQWZYgIRKMqeQVFuQhVJOCAcPnIUEJ/7QvhSg+WlZSNNJv+EgnzUJCQvvIImgypwspFD0H/YflclKqhnOW1y3q0JEQ2AcEhYSSpZj47NQ8hsOIku2sYUZJBGpwusWUjVfx5b2lc3wZFr6A5xkkUW1KnIjTyJ96ogsnHZ8zdCfrCrkkFGW3ZovnljPWmn++jx3d/Ld6u54SK/gPKuVL18zpO9wVYtzdJgwcwaRkB1AT4N0jR58K5TP8tIHs9+av8AyGqGR6aLG2CHQZILJIpidkuuwuUbwW/m16GkQRSALFn6rGiEx7fXSjtaBFReTGcoz5WqEKU9uNXoaBotKG06Si9ULFvOsZmz8LJtwzShSe18atUG5BWAL0i5SZ1+FmirYCAe2Ak1kjUHy36UJhMaWLzU2A6qdqMEzYQO/3Ad1/rhZzsX/gw4Fm2HNJotP0GSauP7+0dst5CjwpoLJSlmQlbQyDWuXCEKguQST5dhoVgSf1UVQyeJ6yQ2sEASTlbaoPFQiTnm6BKpWZKEaBUbDYLJcmwJg0jTLIonOVOeDDgWTpSCXFEuy8vUSqGQRkKhWDDpkcvAWHR65VN9LUJPnZSFXR4iG++uaVYUJCdMsNSO1Q7Wmn02HnxsS1VNSs1NKmM+C1Ikms+sxTaQ9mFN0h31hzSLC9AC8Fdu0UBKEzBmAmSybyfTEUSQBVm17pcdMh9MwQ/aIz30VuOl+YOXViAtqZgHp2eAmgHvFINzVH0AYWEVCl4zdDIksOdcqs6Ueug9xIss1+KyhBl/+9LdQ3n03wsCqEw1tFJJ8Vk82B3VfhDq+TfaulXGpVTLJyq1AWIjOvS7kthENXfRkbqD7rkBYqJJN214bEzGzz0pzidWmgfPhe4Cd3+MrElYYeyWSmdPs4+5tK6HVKcnV+sCmmJjWRkbNv+rgkrjAe+Ba4FPDsMbAFuCTj3IU/QoiIx9+4a8q20TDTFs+S36AYOCDCI0rt6EduLmVCAv1TlEWSpujgFmzslwANPcWuKYlLz9twYpBYO8TwNmDwLmDVsuXdHYFqjtvgbPlBs6x1iMsaOqiLKTTbfisBfZZkhlWIsSAVB649suNzavjF0aYuGeAk0/yBTuXxbyoV922F9Wte+BcvcNi/XowrAp/NG28GTNZGzkaFuAVrg3l53m0BW/twzW3NbZPPAhcHIHz+hFU+nfA2bSd/+x4HqhV8iI2jeNzxrmwkSy6CzX9MDz9Ddb7OCsP3sMIG/bCWXMjqnG3wqRVyik9TYfgmEQkB+/xfcZ43NMs12I1XZchPijg4gQEyGQBchip9HZdq+6vpBU/0kIY2JGV+P4hlaxmbWLRwIYsmYkeX19KJYvl3HBjIIssyjQ93riwaq66Sly4YePgZbKO/7wu2KvI/ev3spCCmAPJM1LNuZb0VO/554HfbQe27+MkYw+wpr3pTBxITV5A+rV/InfsWajiKfkEV4tTO5ksiyhRh7cg9/APGvtrdzaWFW1g4tbtwlIhNfYG0qdHkT3xAlJn/xvqXM6zxChgQ1b4vODSscY2OgS8/2PAplu5jPN1rtNvRNzweoGZ//0dmZMv1hesketE+yKtxEmuTWGovU5q8d+N7T8/amjZNV8APsTlmf7oDQ6v+ZAb/RMyp16GunAc5FTRNgIeQVkMG82ais13j482Nk/j1u5g0r4GbGbyVm0RT/UIyh79M7InX0Lq3KuIHSQ/MiK+kEE/gD6m9CgTdj06hTVb2Uy/weZ6M7D6+suvKlAz48iceBHZV55B6sJr6BhIn0J+5TZ65A1jacLq7RU8mb6BPx7j7ePoNK78CGorPwd65RibWAcJeg+HkXW+T48XX5IEQ73qQ/8UN7GG3cK7d/G2FZ1Cp9/MptzT7NCfRqb6V3p8fMT2tMjvRWHz3MVO8fO8+014la840QmyyC2A6Fd8zc/iqusO09Ch0GEzlpfI6EewmzWO+/i4kz/D9dX9EBtZNAVV+y2T9BQGCyM0BIsVuIZvQ8yomyrhPibt1sjEtUfWFCeYXNjHMAZzL9PQmdje1hE7WYuhH8LN/AuemXIqj3XWJ4YmizUo5f6D/5xhrL/u+SgmZvUrWALox9CPKu7gm7mdJ6wycVZk1U3sBWRwEOvo1zRUaLMZIGNJyFoM1rarmLC97D3u5F//IvwS42CyNEeyv0HRX9Dv/pF+PGbRDIwPS07WYuifYBNHpz18FV57+rbLB5rJUu5hKPUbrgw8RQcKER4YigddJWsxOBXZwMR9hne/jWL/LhQHeNLnHuCa9R/owITF41ydx7uXcd3RUR+hVAAAAABJRU5ErkJggg==",SE="/JackS-Portfolio/assets/java-37368f72.png",ME="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlUSURBVHgB7VttjFxVGX7PuffO7MzsrqWtlIK6EBuMxMQqy+JKk27YdimxFCS0tlsoUX9IrQbrH/nhx4o/SIxpjBojMaRUscZWCBRD7JduGtruui0RNChq0iohaj8oodv9mLnnvDxn9mPuvTOznZnsuXMhfSZ3Zs45996595n3fc/7cS7RFby7sX7P+lZKICQlEF5q/AuUQCSOrC3Pr+3K5ye+u+KnK66ihCFRZD2wvy8ntPO4ECKTack/QglDYshav6c74+QzTwtByyUJjwQ93PPzWz9ACUIiyNr8wp3t2fT7jxLTHaYtpMhDutJeincNDAwk5g9t+oVs/V3/VSmVGgI5n5jpE2Cr+Mni9mPXv/ATSgiaStbnn737g+N69BAzfTQy5JS+iq2rnuzaQQlAU8ka15M7mOhj0X5BItSGDdvet6vrO9RkNI2sjc/0bWfi+3ytyq4BKlkoO4DFACRsOzURTSFrw9Orb2MSRdVirf3oOC7Kr3QcJGxH785b1lCTEDtZ6/es+hBJuXemrUi3MHOYHCF0teOlEL/s+0XXDdQExE6WcORvBNPSYB8Ii5BT/bJgzxazErtv2nNTimJGrGTd89vbNymtPx7tV1qpYFtGLXwEcFw/dd2ltm9QzIiNrJ4/9ris+FHFOh0d0wxVpIAqiqDrUBkg7JE1T3R+hGJEbGQtOEsPgoRlIEUy6+hsJ1SgD4J1WbKArJLycYoRsZC17rnV12L2++ZM29e6TM2UUqU+plrIMi7Gyt4nbtlMMSEeyZrwH8L79TNNqB18UeLgLppKqggSaiLLwHHktrX7bs5SDLBO1tp9a7PwDDYE+8CSB8Imo/vqaUNvVJUiZM6Bbv+8t4FigHWy/LffukMxG0McmvG01mXSU2BV6hPh/eeCJv5qz0CPS5ZhnSzp0H3mU0U8dZ/L7RacU7hgnJ9q1CxZhthPuh2jK8gyrJLVu7t3CT76zXfYpOjNuyAwqooO+ooSBdegdrLI3IjzEFmGVbI8mrhntsFs/KuwKhKXqaJif0qdjJDVA0H3rviV3by9VbKgSZ8LNIWO+Fd6SorCBDI7THqC6oeX8/N3kkVYI6v3ma5FcD5XUiCDoCIhIMhMg5yoIZfww1y4D1XPjZE8xNJHRIAMjy7g5eOVV5O6nyzCGlliVK6EHkmoWoAM9kBQSL3guZddgy4af/bMAaxp1BACWvKGFJXXE35eCVVQLghy2cc5NZtQKoUJYlXPzuULyBLsqaGk1eYjMqk5uP23gx3TBj00U4IsB/RAUpSvC6rVEKINGSAFx7fglF7lHxVpd0L2kSXYkywxlVdHcs/cWEAVOVKa5zSkq+x4njL+HtUJLR1ryUGLBl7caN6nVLFkrNjMgRFVhCSVGXRB9bkOs2DuJkuwQlY3Cqa46tkEn9ahTKgDdboU3B/jJraLppIbIgskL1v2o2VpsgArZLVMqhuDbUhSFncxSwYkLRsZl5gV5+daBLkdmXYreS4rZDnklGVDgy4Cc9FIhQyVYhWSNhi9xtTQnDgvl5MFWCEL93lNtA8OaPDmTaiTD49zNmrLGr8AWkIWYMnAc5mvYxzQoCrC0LuRcQdU5Wk+INlK2GOHLCFylXp1oOTFRoiECAXSqkImorGfFy1kAVbIAg8Vb1qH/SlXKT/0+ybHNS+qqOv3z2qBHZtFNF6pH0S4YTLCxBQdUabJ6XM0DPxXmizAjhoyj1buJxOuXJxpQi1dFhRVxalrYtEwXyhoz4/ti8COGpK8UG0M/nsw3JEIDUM5LaQSpq6pca5ISLpIFmCFLOnR6WpjIEsHVRFmLOy5Q/pguybgfjTMFs55gSzAkhr6L1cfI9gtulRqajNzlWcd6snBRyHoNbIAK2Qd2DTyOsSi6r8LBz4U7igkrIJtFDM84sZtdF5lRsgCrGUdoER/qzYGwx5WxUrFicbDnfMvfvnFd5EakpEeMTzHsBvMRLBSxi/S4eOpVvigegyZ0klsee3zMFmCRcnST865gwj8thBmVgzntLjMwPsgsIDM2DgI8ZXP4wrJZmyE71n0p7GlILL7yRKskXW4f/gVsHCm2vjUegfOl9oc8rrZmLIpUiZASAEbcu7ItyvOcNFfI+TMyJ3eZuGS/3uyBLsVacFPzTHqqkAOqxhIB0wXiElNk2Jmy9rCF+Z/Hv7Ky/8gS7BKVsH3d841zhyyTGbd1myY1MhkCKd/J1mEVbIGt5z4KyTjcPU9ikWJoCoGsgW65oUhMxCO92uyiBjWZ4nHqo0UixlcKuGzqTHytIPKdcfSewe3Dp0mi7BO1sHNx/+A+z5ebZyDEmRCHSqW+DXmwrrSLFrJH5Jl2JcsOJwIbL9FVVbFQLLMEu1SMYMR/jCqP3VIliBx5MjDI8fIMmJZJnlw0/HDuKHnqo2H6oqw8r7SBaoDMOyPUQyIbx28q76O93OVhlC8CM59jvL9HNWOXYPbRqz5VkHERtaBDX86BX18tPKoUcWSs4DsjE+14Y2CT9+mmBDrExaH+o/9GFTsLR8x4Q7PhjttIltbZCj4e0e/dvI/FBNif3Yn0yq/iI9T0X5NpXBngWy7vGQJ+sHgtpfeew8NBLHv7qMXpRZ9uNl/B/unV80U3YgOd6mgudaUMp3sOXvXe/fZnSD2P3D8X4ijN2LqeyvQDQdVj5kvrSKby4qWih48SH1VS/nZgYEBKxWcudC0J1kP3T88JKTYQoEZEqpoMgm0kN43udhdUCEhSK8JJ/WZI9tGXqcmoGlkGRzoH3oe0rV5pjJt4mpI1GhKuLmlqcVhyRIogkhvje2QZi40lSyDg/cPH5CSP42v57G57brNLL71OxctV57wZgz9X/KycGsziTJoOlkG+zcOveRI6kSp8PQ1cqFwHI9bnYy75tqei65wfnbm6vHOY1tfOUNNxrwsxJgv9Oy+efGDzl1HF6YX3ZDLtfm5bPur3bfd20kJQSIkawaD/SfPtbttT3meJ6V0POUXvk8JgvUnqepFNt36d2QpGIRxJpf7LyUIiZIsA5Rw/uy6qclUqiXvOO6blCAkTrJQAXvD89I5qKE/OTn2P0oQEidZ69Z9aQwS9f90OqM7Oj7cyANP1pA4sgxaWrKnXdeT5869majZOnFqaOA67ihsFl+95Dqz+H+UEoJESpabSj+bzeTOjo2NttMVXB4XLpxacOLECSsLaa8gBrwDiLkMFteNTpUAAAAASUVORK5CYII=",EE="/JackS-Portfolio/assets/node-521da021.png",wE="/JackS-Portfolio/assets/react-cccfc4c7.png",Lt=t=>new URL(Object.assign({"/assets/about/aboutImage.png":Y1,"/assets/about/cursorIcon.png":q1,"/assets/about/serverIcon.png":K1,"/assets/about/uiIcon.png":$1,"/assets/contact/emailIcon.png":J1,"/assets/contact/githubIcon.png":Z1,"/assets/contact/linkedinIcon.png":Q1,"/assets/hero/View recent photos.jpeg":eE,"/assets/hero/heroImage.png":tE,"/assets/history/cle.png":nE,"/assets/history/cle1.png":iE,"/assets/history/kerry1.png":rE,"/assets/history/kerrygroup.png":sE,"/assets/nav/closeIcon.png":aE,"/assets/nav/menuIcon.png":oE,"/assets/projects/ecom.png":lE,"/assets/projects/project.png":cE,"/assets/projects/quest.png":uE,"/assets/projects/stonks.png":fE,"/assets/projects/trading.png":dE,"/assets/skills/SpringBoot.png":hE,"/assets/skills/angular.png":pE,"/assets/skills/cplus.png":mE,"/assets/skills/cplus2.png":gE,"/assets/skills/css.png":vE,"/assets/skills/figma.png":xE,"/assets/skills/graphql.png":_E,"/assets/skills/html.png":yE,"/assets/skills/java.png":SE,"/assets/skills/mongodb.png":ME,"/assets/skills/node.png":EE,"/assets/skills/react.png":wE})[`/assets/${t}`],self.location).href,AE=()=>k.jsxs("section",{className:Gn.container,id:"about",children:[k.jsx("h2",{className:Gn.title,children:"About"}),k.jsxs("div",{className:Gn.content,children:[k.jsx("img",{src:Lt("about/aboutImage.png"),alt:"Me sitting with a laptop",className:Gn.aboutImage}),k.jsxs("ul",{className:Gn.aboutItems,children:[k.jsxs("li",{className:Gn.aboutItem,children:[k.jsx("img",{src:Lt("about/cursorIcon.png"),alt:"Cursor icon"}),k.jsxs("div",{className:Gn.aboutItemText,children:[k.jsx("h3",{children:"Student"}),k.jsx("p",{children:"Im a ucd student currently pursuing a degree in Computer Science"})]})]}),k.jsxs("li",{className:Gn.aboutItem,children:[k.jsx("img",{src:Lt("about/serverIcon.png"),alt:"Server icon"}),k.jsxs("div",{className:Gn.aboutItemText,children:[k.jsx("h3",{children:"Backend Developer"}),k.jsx("p",{children:"I have experience developing fast and optimised back-end systems and APIs"})]})]}),k.jsxs("li",{className:Gn.aboutItem,children:[k.jsx("img",{src:Lt("about/cursorIcon.png"),alt:"UI icon"}),k.jsxs("div",{className:Gn.aboutItemText,children:[k.jsx("h3",{children:"FrontEnd Developer"}),k.jsx("p",{children:"I have experience developing front end interfaces that enhance the customer experiance"})]})]})]})]})]}),TE="_dark-theme_1cic3_1",CE="_terminal-container_1cic3_1",RE="_cursor_1cic3_1",PE="_matrix-char_1cic3_1",bE="_button_1cic3_1",IE="_container_1cic3_3",LE="_text_1cic3_37",DE="_links_1cic3_59",NE="_link_1cic3_59",UE="_blink_1cic3_1",FE="_colorTransition_1cic3_1",kE="_backgroundTransition_1cic3_1",OE="_borderTransition_1cic3_1",BE="_shadowTransition_1cic3_1",ss={"dark-theme":"_dark-theme_1cic3_1",darkTheme:TE,"terminal-container":"_terminal-container_1cic3_1",terminalContainer:CE,cursor:RE,"matrix-char":"_matrix-char_1cic3_1",matrixChar:PE,button:bE,container:IE,text:LE,links:DE,link:NE,blink:UE,colorTransition:FE,backgroundTransition:kE,borderTransition:OE,shadowTransition:BE},zE=()=>k.jsxs("footer",{id:"contact",className:ss.container,children:[k.jsxs("div",{className:ss.text,children:[k.jsx("h2",{children:"Contact"}),k.jsx("p",{children:"Feel free to reach out!"})]}),k.jsxs("ul",{className:ss.links,children:[k.jsxs("li",{className:ss.link,children:[k.jsx("img",{src:Lt("contact/emailIcon.png"),alt:"Email icon"}),k.jsx("a",{href:"mailto:jackneilan02@gmail.com",children:"Email"})]}),k.jsxs("li",{className:ss.link,children:[k.jsx("img",{src:Lt("contact/linkedinIcon.png"),alt:"LinkedIn icon"}),k.jsx("a",{href:"https://www.linkedin.com/in/jack-neilan-3203a0242/",children:"Linkedin"})]}),k.jsxs("li",{className:ss.link,children:[k.jsx("img",{src:Lt("contact/githubIcon.png"),alt:"Github icon"}),k.jsx("a",{href:"https://github.com/NuvaGit",children:"GitHub"})]})]})]}),VE="_dark-theme_10ayw_1",HE="_terminal-container_10ayw_1",GE="_cursor_10ayw_1",WE="_matrix-char_10ayw_1",jE="_button_10ayw_1",XE="_container_10ayw_3",YE="_title_10ayw_10",qE="_content_10ayw_20",KE="_skills_10ayw_27",$E="_skill_10ayw_27",JE="_skillImageContainer_10ayw_47",ZE="_originalColorIcon_10ayw_76",QE="_cppIcon_10ayw_87",ew="_pythonIcon_10ayw_87",tw="_javaIcon_10ayw_87",nw="_nodeIcon_10ayw_87",iw="_angularIcon_10ayw_87",rw="_reactIcon_10ayw_87",sw="_springBootIcon_10ayw_87",aw="_history_10ayw_98",ow="_historyItem_10ayw_105",lw="_historyItemDetails_10ayw_132",cw="_colorTransition_10ayw_1",uw="_backgroundTransition_10ayw_1",fw="_borderTransition_10ayw_1",dw="_shadowTransition_10ayw_1",ai={"dark-theme":"_dark-theme_10ayw_1",darkTheme:VE,"terminal-container":"_terminal-container_10ayw_1",terminalContainer:HE,cursor:GE,"matrix-char":"_matrix-char_10ayw_1",matrixChar:WE,button:jE,container:XE,title:YE,content:qE,skills:KE,skill:$E,skillImageContainer:JE,originalColorIcon:ZE,cppIcon:QE,pythonIcon:ew,javaIcon:tw,nodeIcon:nw,angularIcon:iw,reactIcon:rw,springBootIcon:sw,history:aw,historyItem:ow,historyItemDetails:lw,colorTransition:cw,backgroundTransition:uw,borderTransition:fw,shadowTransition:dw},hw=[{role:"Associate AI Engineer",organisation:"FNZ Brno",startDate:"April, 2026",endDate:"Present",experiences:["Developing enterprise financial solutions using .NET framework and C#","Designing and building AI agents in C++ for intelligent financial advisor platform","Building RESTful APIs and microservices for high-volume financial transaction processing","Working with SQL Server databases and Entity Framework"],imageSrc:"history/fnz.png"},{role:"Technology Solutions Graduate",organisation:"FNZ Brno",startDate:"August, 2025",endDate:"April, 2026",experiences:["Completed 5 immersions across Delivery Management, QA Testing, Development, AI Engineering, and Production Support","Gained end-to-end exposure to fintech software lifecycle","Contributed to .NET-based wealth management platforms and live production environments"],imageSrc:"history/fnz.png"},{role:"Software Enginner Intern",organisation:"Canada Life",startDate:"March, 2024",endDate:"August, 2024",experiences:["Worked with spring boot and angular","Helped Create a customer chatbot"],imageSrc:"history/cle1.png"},{role:"ICT Intern",organisation:"Kerry Group",startDate:"May, 2023",endDate:"Aug, 2023",experiences:["Worked with PHP","Designed login portals"],imageSrc:"history/kerrygroup.png"},{role:"Freelance VFX Aritst",organisation:"Self Employed",startDate:"2018",endDate:"2020",experiences:["Created engaging thumbnails","Edited videos with Adobe After Effects"],imageSrc:""}],pw=()=>{const t=[{title:"Java",imageUrl:Lt("skills/java.png"),color:"#f89820"},{title:"C++",imageUrl:Lt("skills/cplus2.png"),color:"#044F88"},{title:"Python",imageUrl:Lt("skills/cplus.png"),color:"#4584b6"},{title:"HTML",imageUrl:Lt("skills/html.png"),color:"#e34c26"},{title:"CSS",imageUrl:Lt("skills/css.png"),color:"#264de4"},{title:"React",imageUrl:Lt("skills/react.png"),color:"#61dafb"},{title:"Node",imageUrl:Lt("skills/node.png"),color:"#3c873a"},{title:"Spring Boot",imageUrl:Lt("skills/SpringBoot.png"),color:"#6db33f"},{title:"Angular",imageUrl:Lt("skills/angular.png"),color:"#dd0031"}],e={java:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",cpp:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",python:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",html:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",css:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",react:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",node:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",spring:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",angular:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},n=i=>{try{return i.imageUrl}catch{const r=i.title.toLowerCase().replace(/\s+/g,"");return e[r==="springboot"?"spring":r]||i.imageUrl}};return k.jsxs("section",{className:ai.container,id:"experience",children:[k.jsx("h2",{className:ai.title,children:"Experience"}),k.jsxs("div",{className:ai.content,children:[k.jsx("div",{className:ai.skills,children:t.map((i,s)=>k.jsxs("div",{className:ai.skill,children:[k.jsx("div",{className:ai.skillImageContainer,children:k.jsx("img",{src:n(i),alt:i.title,loading:"eager",onError:r=>{console.log(`Failed to load ${i.title} icon, trying fallback`);const a=i.title.toLowerCase().replace(/\s+/g,""),o=a==="springboot"?"spring":a;r.target.src=e[o]},className:ai.originalColorIcon})}),k.jsx("p",{children:i.title})]},s))}),k.jsx("ul",{className:ai.history,children:hw.map((i,s)=>k.jsxs("li",{className:ai.historyItem,children:[i.imageSrc&&k.jsx("img",{src:Lt(i.imageSrc),alt:`${i.organisation} Logo`,loading:"eager",onError:r=>{console.log(`Failed to load history icon: ${i.imageSrc}`),r.target.style.display="none"}}),k.jsxs("div",{className:ai.historyItemDetails,children:[k.jsx("h3",{children:`${i.role}, ${i.organisation}`}),k.jsx("p",{children:`${i.startDate} - ${i.endDate}`}),k.jsx("ul",{children:i.experiences.map((r,a)=>k.jsx("li",{children:r},a))})]})]},s))})]})]})},mw="_dark-theme_arzx2_1",gw="_terminal-container_arzx2_1",vw="_cursor_arzx2_123",xw="_matrix-char_arzx2_1",_w="_button_arzx2_141",yw="_container_arzx2_3",Sw="_matrixCanvas_arzx2_14",Mw="_content_arzx2_25",Ew="_fadeIn_arzx2_1",ww="_slideUp_arzx2_1",Aw="_titleContainer_arzx2_35",Tw="_title_arzx2_35",Cw="_glitch_arzx2_1",Rw="_codeTags_arzx2_80",Pw="_codeTag_arzx2_80",bw="_typewriterContainer_arzx2_96",Iw="_description_arzx2_104",Lw="_typed_arzx2_114",Dw="_blink_arzx2_1",Nw="_visible_arzx2_133",Uw="_hidden_arzx2_137",Fw="_buttonGroup_arzx2_141",kw="_contactBtn_arzx2_148",Ow="_projectsBtn_arzx2_148",Bw="_stats_arzx2_208",zw="_statItem_arzx2_214",Vw="_statLabel_arzx2_230",Hw="_statValue_arzx2_237",Gw="_imageContainer_arzx2_243",Ww="_imageFrame_arzx2_250",jw="_heroImg_arzx2_259",Xw="_imageBorder_arzx2_271",Yw="_techTags_arzx2_284",qw="_techTag_arzx2_284",Kw="_scanline_arzx2_309",$w="_topBlur_arzx2_323",Jw="_pulse_arzx2_1",Zw="_bottomBlur_arzx2_337",Qw="_colorTransition_arzx2_1",eA="_backgroundTransition_arzx2_1",tA="_borderTransition_arzx2_1",nA="_shadowTransition_arzx2_1",qe={"dark-theme":"_dark-theme_arzx2_1",darkTheme:mw,"terminal-container":"_terminal-container_arzx2_1",terminalContainer:gw,cursor:vw,"matrix-char":"_matrix-char_arzx2_1",matrixChar:xw,button:_w,container:yw,matrixCanvas:Sw,content:Mw,fadeIn:Ew,slideUp:ww,titleContainer:Aw,title:Tw,glitch:Cw,codeTags:Rw,codeTag:Pw,typewriterContainer:bw,description:Iw,typed:Lw,blink:Dw,visible:Nw,hidden:Uw,buttonGroup:Fw,contactBtn:kw,projectsBtn:Ow,stats:Bw,statItem:zw,statLabel:Vw,statValue:Hw,imageContainer:Gw,imageFrame:Ww,heroImg:jw,imageBorder:Xw,techTags:Yw,techTag:qw,scanline:Kw,topBlur:$w,pulse:Jw,bottomBlur:Zw,colorTransition:Qw,backgroundTransition:eA,borderTransition:tA,shadowTransition:nA},iA=()=>{const[t,e]=V.useState(""),[n,i]=V.useState(!0),[s,r]=V.useState(0),[a,o]=V.useState(!1),[l,u]=V.useState(100),f=["AI Engineer at FNZ","Full Stack Developer","Finance Tech Specialist","C# & .NET Expert","3D Graphics Enthusiast"];return V.useEffect(()=>{const h=f[s];u(a?50:100);let m;return!a&&t!==h?m=setTimeout(()=>{e(h.substring(0,t.length+1))},l):!a&&t===h?m=setTimeout(()=>{o(!0)},2e3):a&&t!==""?m=setTimeout(()=>{e(h.substring(0,t.length-1))},l):a&&t===""&&(o(!1),r((s+1)%f.length)),()=>clearTimeout(m)},[t,a,s,f]),V.useEffect(()=>{const h=setInterval(()=>{i(d=>!d)},500);return()=>clearInterval(h)},[]),V.useEffect(()=>{const h=document.getElementById("matrix-canvas");if(!h)return;h.width=window.innerWidth,h.height=window.innerHeight;const d=h.getContext("2d");class c{constructor(){this.x=Math.random()*h.width,this.y=Math.random()*h.height,this.size=Math.random()*3+1,this.speedX=(Math.random()-.5)*.5,this.speedY=(Math.random()-.5)*.5,this.color=`rgba(0, ${Math.random()*155+100}, 0, ${Math.random()*.2+.1})`}update(){this.x+=this.speedX,this.y+=this.speedY,this.x>h.width?this.x=0:this.x<0&&(this.x=h.width),this.y>h.height?this.y=0:this.y<0&&(this.y=h.height)}draw(){d.fillStyle=this.color,d.beginPath(),d.arc(this.x,this.y,this.size,0,Math.PI*2),d.fill()}}const m=[],v=Math.min(window.innerWidth*.05,100);for(let x=0;x<v;x++)m.push(new c);const g=()=>{d.clearRect(0,0,h.width,h.height);for(let x=0;x<m.length;x++)m[x].update(),m[x].draw();requestAnimationFrame(g)};g();const p=()=>{h.width=window.innerWidth,h.height=window.innerHeight};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),k.jsxs("section",{className:qe.container,children:[k.jsx("canvas",{id:"matrix-canvas",className:qe.matrixCanvas}),k.jsxs("div",{className:qe.content,children:[k.jsxs("div",{className:qe.titleContainer,children:[k.jsx("h1",{className:qe.title,children:"Jack Neilan"}),k.jsxs("div",{className:qe.codeTags,children:[k.jsx("span",{className:qe.codeTag,children:"<code>"}),k.jsx("span",{className:qe.codeTag,children:"/>"})]})]}),k.jsx("div",{className:qe.typewriterContainer,children:k.jsxs("p",{className:qe.description,children:["I'm a"," ",k.jsxs("span",{className:qe.typed,children:[t,k.jsx("span",{className:`${qe.cursor} ${n?qe.visible:qe.hidden}`,children:"|"})]})]})}),k.jsxs("div",{className:qe.buttonGroup,children:[k.jsx("a",{href:"mailto:jackneilan02@gmail.com",className:qe.contactBtn,children:"Contact Me"}),k.jsx("a",{href:"#projects",className:qe.projectsBtn,children:"View Projects"})]}),k.jsxs("div",{className:qe.stats,children:[k.jsxs("div",{className:qe.statItem,children:[k.jsx("span",{className:qe.statLabel,children:"Experience"}),k.jsx("span",{className:qe.statValue,children:"4+ years"})]}),k.jsxs("div",{className:qe.statItem,children:[k.jsx("span",{className:qe.statLabel,children:"Projects"}),k.jsx("span",{className:qe.statValue,children:"15+"})]}),k.jsxs("div",{className:qe.statItem,children:[k.jsx("span",{className:qe.statLabel,children:"Technologies"}),k.jsx("span",{className:qe.statValue,children:"20+"})]})]})]}),k.jsxs("div",{className:qe.imageContainer,children:[k.jsxs("div",{className:qe.imageFrame,children:[k.jsx("img",{src:Lt("hero/View recent photos.jpeg"),alt:"Jack Neilan",className:qe.heroImg}),k.jsx("div",{className:qe.imageBorder})]}),k.jsxs("div",{className:qe.techTags,children:[k.jsx("span",{className:qe.techTag,children:"Java"}),k.jsx("span",{className:qe.techTag,children:"React"}),k.jsx("span",{className:qe.techTag,children:"Python"}),k.jsx("span",{className:qe.techTag,children:"Spring"})]})]}),k.jsx("div",{className:qe.scanline}),k.jsx("div",{className:qe.topBlur}),k.jsx("div",{className:qe.bottomBlur})]})},rA="_dark-theme_iwwka_1",sA="_terminal-container_iwwka_1",aA="_cursor_iwwka_1",oA="_matrix-char_iwwka_1",lA="_button_iwwka_1",cA="_navbar_iwwka_3",uA="_scrolled_iwwka_22",fA="_navbarContent_iwwka_28",dA="_title_iwwka_35",hA="_codeIcon_iwwka_47",pA="_titleText_iwwka_54",mA="_blinkingCursor_iwwka_58",gA="_blink_iwwka_58",vA="_navInfo_iwwka_78",xA="_timeDisplay_iwwka_87",_A="_statusIndicator_iwwka_94",yA="_statusDot_iwwka_100",SA="_pulse_iwwka_1",MA="_menuBtn_iwwka_115",EA="_menu_iwwka_115",wA="_menuItems_iwwka_130",AA="_codeWrapper_iwwka_160",TA="_active_iwwka_168",CA="_gameLink_iwwka_188",RA="_progressContainer_iwwka_210",PA="_progressBar_iwwka_220",bA="_themeSwitcher_iwwka_228",IA="_switchIcon_iwwka_238",LA="_menuOpen_iwwka_293",DA="_fadeIn_iwwka_1",NA="_colorTransition_iwwka_1",UA="_backgroundTransition_iwwka_1",FA="_borderTransition_iwwka_1",kA="_shadowTransition_iwwka_1",et={"dark-theme":"_dark-theme_iwwka_1",darkTheme:rA,"terminal-container":"_terminal-container_iwwka_1",terminalContainer:sA,cursor:aA,"matrix-char":"_matrix-char_iwwka_1",matrixChar:oA,button:lA,navbar:cA,scrolled:uA,navbarContent:fA,title:dA,codeIcon:hA,titleText:pA,blinkingCursor:mA,blink:gA,navInfo:vA,timeDisplay:xA,statusIndicator:_A,statusDot:yA,pulse:SA,menuBtn:MA,menu:EA,menuItems:wA,codeWrapper:AA,active:TA,gameLink:CA,progressContainer:RA,progressBar:PA,themeSwitcher:bA,switchIcon:IA,menuOpen:LA,fadeIn:DA,colorTransition:NA,backgroundTransition:UA,borderTransition:FA,shadowTransition:kA},OA=()=>{const[t,e]=V.useState(!1),[n,i]=V.useState(!1),[s,r]=V.useState("home"),[a,o]=V.useState(""),l=Tr(),{darkMode:u,toggleDarkMode:f}=V.useContext(kx);V.useEffect(()=>{const v=()=>{window.scrollY>50?i(!0):i(!1);const g=document.querySelector(`.${et.progressBar}`);if(g){const E=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;g.style.width=`${Math.min(100,E)}%`}const p=["about","experience","projects","contact"];let x="home",y=1/0;p.forEach(E=>{const S=document.getElementById(E);if(S){const M=S.getBoundingClientRect(),w=Math.abs(M.top);w<y&&(y=w,x=E)}}),r(x)};return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]),V.useEffect(()=>{const v=()=>{const p=new Date,x=p.getHours().toString().padStart(2,"0"),y=p.getMinutes().toString().padStart(2,"0"),E=p.getSeconds().toString().padStart(2,"0");o(`${x}:${y}:${E}`)};v();const g=setInterval(v,1e3);return()=>clearInterval(g)},[]);const h=v=>{var p;const g=document.getElementById(v);if(g){const x=((p=document.querySelector(`.${et.navbar}`))==null?void 0:p.offsetHeight)||0,E=g.getBoundingClientRect().top+window.scrollY-x-20;window.scrollTo({top:E,behavior:"smooth"})}e(!1)},d=v=>s===v?et.active:"",c=l.pathname==="/",m=v=>{v.preventDefault(),f()};return k.jsxs("nav",{className:`${et.navbar} ${n?et.scrolled:""}`,children:[k.jsxs("div",{className:et.navbarContent,children:[k.jsxs(Fa,{className:et.title,to:"/",children:[k.jsx("span",{className:et.codeIcon,children:"</>"}),k.jsx("span",{className:et.titleText,children:"Jack.dev"}),k.jsx("span",{className:et.blinkingCursor,children:"_"})]}),k.jsxs("div",{className:et.navInfo,children:[k.jsx("div",{className:et.timeDisplay,children:a}),k.jsxs("div",{className:et.statusIndicator,children:[k.jsx("span",{className:et.statusDot}),k.jsx("span",{children:"Online"})]})]}),k.jsxs("div",{className:et.menu,children:[k.jsx("img",{className:et.menuBtn,src:Lt(t?"nav/closeIcon.png":"nav/menuIcon.png"),alt:"menu-button",onClick:()=>e(!t)}),k.jsxs("ul",{className:`${et.menuItems} ${t?et.menuOpen:""}`,children:[c?k.jsxs(k.Fragment,{children:[k.jsx("li",{className:d("about"),children:k.jsxs("a",{href:"#about",onClick:v=>{v.preventDefault(),h("about")},children:[k.jsx("span",{className:et.codeWrapper,children:"<"}),"About",k.jsx("span",{className:et.codeWrapper,children:"/>"})]})}),k.jsx("li",{className:d("experience"),children:k.jsxs("a",{href:"#experience",onClick:v=>{v.preventDefault(),h("experience")},children:[k.jsx("span",{className:et.codeWrapper,children:"<"}),"Experience",k.jsx("span",{className:et.codeWrapper,children:"/>"})]})}),k.jsx("li",{className:d("projects"),children:k.jsxs("a",{href:"#projects",onClick:v=>{v.preventDefault(),h("projects")},children:[k.jsx("span",{className:et.codeWrapper,children:"<"}),"Projects",k.jsx("span",{className:et.codeWrapper,children:"/>"})]})}),k.jsx("li",{className:d("contact"),children:k.jsxs("a",{href:"#contact",onClick:v=>{v.preventDefault(),h("contact")},children:[k.jsx("span",{className:et.codeWrapper,children:"<"}),"Contact",k.jsx("span",{className:et.codeWrapper,children:"/>"})]})})]}):k.jsx("li",{children:k.jsxs(Fa,{to:"/",onClick:()=>e(!1),children:[k.jsx("span",{className:et.codeWrapper,children:"<"}),"Home",k.jsx("span",{className:et.codeWrapper,children:"/>"})]})}),k.jsx("li",{className:l.pathname==="/game"?et.active:"",children:k.jsx(Fa,{to:"/game",onClick:()=>e(!1),className:et.gameLink,children:"[Game]"})}),k.jsx("li",{children:k.jsx("button",{onClick:m,className:et.themeSwitcher,"aria-label":u?"Switch to light mode":"Switch to dark mode",children:k.jsx("span",{className:et.switchIcon,children:u?"☀️":"🌙"})})})]})]})]}),k.jsx("div",{className:et.progressContainer,children:k.jsx("div",{className:et.progressBar})})]})},BA="_dark-theme_4h5oj_1",zA="_terminal-container_4h5oj_1",VA="_cursor_4h5oj_1",HA="_matrix-char_4h5oj_1",GA="_button_4h5oj_1",WA="_container_4h5oj_4",jA="_title_4h5oj_11",XA="_projects_4h5oj_21",YA="_colorTransition_4h5oj_1",qA="_backgroundTransition_4h5oj_1",KA="_borderTransition_4h5oj_1",$A="_shadowTransition_4h5oj_1",lu={"dark-theme":"_dark-theme_4h5oj_1",darkTheme:BA,"terminal-container":"_terminal-container_4h5oj_1",terminalContainer:zA,cursor:VA,"matrix-char":"_matrix-char_4h5oj_1",matrixChar:HA,button:GA,container:WA,title:jA,projects:XA,colorTransition:YA,backgroundTransition:qA,borderTransition:KA,shadowTransition:$A},JA=[{title:"Trading Bot",imageSrc:"projects/project.png",description:"Python-based trading bot, Implements machine learning to predict prices",skills:["Python","Machine Learning"],demo:"https://www.example.com",source:"https://github.com/NuvaGit/TradingBot"},{title:"Ecommerce Store",imageSrc:"projects/project.png",description:"This is a project made to learn the latest languages by building an app.",skills:["React","Express","Node","Sass"],demo:"https://www.example.com",source:"https://github.com/NuvaGit/EcommerceSoringBoot"},{title:"MicroMentor",imageSrc:"projects/project.png",description:"iOS app built with Flutter that leverages Firebase, Cloud Run functions, OpenAI API, YouTube API, and RevenueCat for...",skills:["Flutter","Firebase","OpenAI API","YouTube API","RevenueCat"],demo:"https://www.example.com",source:"https://github.com/NuvaGit/MicroMentor"},{title:"Quest Game",imageSrc:"projects/project.png",description:"Quest Game implemented in java",skills:["Java","Java Swing","OOP"],demo:"https://www.example.com",source:"https://github.com/NuvaGit/QuestGame"},{title:"Messaging Service",imageSrc:"projects/project.png",description:"Private Messaging, Group Chat Video call",skills:["Node.js","MongoDB","Deployments"],demo:"https://nuvagit.github.io/securegroupchat-frontend/",source:"https://github.com/NuvaGit/securegroupchat-frontend"}],ZA="_container_153ed_1",QA="_glow_153ed_25",eT="_image_153ed_38",tT="_title_153ed_56",nT="_description_153ed_71",iT="_skills_153ed_87",rT="_skill_153ed_87",sT="_links_153ed_124",aT="_link_153ed_124",oT="_border_153ed_171",Wn={container:ZA,glow:QA,image:eT,title:tT,description:nT,skills:iT,skill:rT,links:sT,link:aT,border:oT},lT=({project:{title:t,imageSrc:e,description:n,skills:i,demo:s,source:r,demoText:a,sourceText:o}})=>{const l=V.useRef(null),[u,f]=V.useState(!1),[h,d]=V.useState({x:0,y:0});V.useEffect(()=>{const v=g=>{if(!l.current||!u)return;const p=l.current.getBoundingClientRect(),x=g.clientX-p.left,y=g.clientY-p.top;d({x,y});const E=(y-p.height/2)/15,S=-(x-p.width/2)/15;l.current.style.transform=`perspective(1000px) rotateX(${E}deg) rotateY(${S}deg) scale(1.02)`};return u&&window.addEventListener("mousemove",v),()=>{window.removeEventListener("mousemove",v)}},[u]);const c=()=>{f(!0)},m=()=>{f(!1),l.current&&(l.current.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)")};return k.jsxs("div",{ref:l,className:Wn.container,onMouseEnter:c,onMouseLeave:m,style:{transitionDuration:u?"0ms":"300ms"},children:[k.jsx("div",{className:Wn.glow,style:{left:`${h.x}px`,top:`${h.y}px`,opacity:u?.4:0}}),k.jsx("img",{src:Lt(e),alt:`Image of ${t}`,className:Wn.image}),k.jsx("h3",{className:Wn.title,children:t}),k.jsx("p",{className:Wn.description,children:n}),k.jsx("ul",{className:Wn.skills,children:i.map((v,g)=>k.jsx("li",{className:Wn.skill,children:v},g))}),k.jsxs("div",{className:Wn.links,children:[k.jsx("a",{href:s,className:Wn.link,children:a||"Demo"}),k.jsx("a",{href:r,className:Wn.link,children:o||"Source"})]}),k.jsx("div",{className:Wn.border})]})},cT=()=>k.jsxs("section",{className:lu.container,id:"projects",children:[k.jsx("h2",{className:lu.title,children:"Projects"}),k.jsx("div",{className:lu.projects,children:JA.map((t,e)=>k.jsx(lT,{project:t},e))})]});var Jv={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(t,e){(function(i,s){t.exports=s()})(Dc,function(){return function(n){var i={};function s(r){if(i[r])return i[r].exports;var a=i[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=n,s.c=i,s.d=function(r,a,o){s.o(r,a)||Object.defineProperty(r,a,{enumerable:!0,get:o})},s.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,a){if(a&1&&(r=s(r)),a&8||a&4&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),a&2&&typeof r!="string")for(var l in r)s.d(o,l,(function(u){return r[u]}).bind(null,l));return o},s.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(a,"a",a),a},s.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},s.p="",s(s.s=20)}([function(n,i){var s={};n.exports=s,function(){s._baseDelta=1e3/60,s._nextId=0,s._seed=0,s._nowStartTime=+new Date,s._warnedOnce={},s._decomp=null,s.extend=function(a,o){var l,u;typeof o=="boolean"?(l=2,u=o):(l=1,u=!0);for(var f=l;f<arguments.length;f++){var h=arguments[f];if(h)for(var d in h)u&&h[d]&&h[d].constructor===Object&&(!a[d]||a[d].constructor===Object)?(a[d]=a[d]||{},s.extend(a[d],u,h[d])):a[d]=h[d]}return a},s.clone=function(a,o){return s.extend({},o,a)},s.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var l in a)o.push(l);return o},s.values=function(a){var o=[];if(Object.keys){for(var l=Object.keys(a),u=0;u<l.length;u++)o.push(a[l[u]]);return o}for(var f in a)o.push(a[f]);return o},s.get=function(a,o,l,u){o=o.split(".").slice(l,u);for(var f=0;f<o.length;f+=1)a=a[o[f]];return a},s.set=function(a,o,l,u,f){var h=o.split(".").slice(u,f);return s.get(a,o,0,-1)[h[h.length-1]]=l,l},s.shuffle=function(a){for(var o=a.length-1;o>0;o--){var l=Math.floor(s.random()*(o+1)),u=a[o];a[o]=a[l],a[l]=u}return a},s.choose=function(a){return a[Math.floor(s.random()*a.length)]},s.isElement=function(a){return typeof HTMLElement<"u"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},s.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},s.isFunction=function(a){return typeof a=="function"},s.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},s.isString=function(a){return toString.call(a)==="[object String]"},s.clamp=function(a,o,l){return a<o?o:a>l?l:a},s.sign=function(a){return a<0?-1:1},s.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-s._nowStartTime},s.random=function(a,o){return a=typeof a<"u"?a:0,o=typeof o<"u"?o:1,a+r()*(o-a)};var r=function(){return s._seed=(s._seed*9301+49297)%233280,s._seed/233280};s.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},s.logLevel=1,s.log=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.info=function(){console&&s.logLevel>0&&s.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warn=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");s._warnedOnce[a]||(s.warn(a),s._warnedOnce[a]=!0)},s.deprecated=function(a,o,l){a[o]=s.chain(function(){s.warnOnce("🔅 deprecated 🔅",l)},a[o])},s.nextId=function(){return s._nextId++},s.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var l=0;l<a.length;l++)if(a[l]===o)return l;return-1},s.map=function(a,o){if(a.map)return a.map(o);for(var l=[],u=0;u<a.length;u+=1)l.push(o(a[u]));return l},s.topologicalSort=function(a){var o=[],l=[],u=[];for(var f in a)!l[f]&&!u[f]&&s._topologicalSort(f,l,u,a,o);return o},s._topologicalSort=function(a,o,l,u,f){var h=u[a]||[];l[a]=!0;for(var d=0;d<h.length;d+=1){var c=h[d];l[c]||o[c]||s._topologicalSort(c,o,l,u,f)}l[a]=!1,o[a]=!0,f.push(a)},s.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var l=arguments[o];l._chained?a.push.apply(a,l._chained):a.push(l)}var u=function(){for(var f,h=new Array(arguments.length),d=0,c=arguments.length;d<c;d++)h[d]=arguments[d];for(d=0;d<a.length;d+=1){var m=a[d].apply(f,h);typeof m<"u"&&(f=m)}return f};return u._chained=a,u},s.chainPathBefore=function(a,o,l){return s.set(a,o,s.chain(l,s.get(a,o)))},s.chainPathAfter=function(a,o,l){return s.set(a,o,s.chain(s.get(a,o),l))},s.setDecomp=function(a){s._decomp=a},s.getDecomp=function(){var a=s._decomp;try{!a&&typeof window<"u"&&(a=window.decomp),!a&&typeof Dc<"u"&&(a=Dc.decomp)}catch{a=null}return a}}()},function(n,i){var s={};n.exports=s,function(){s.create=function(r){var a={min:{x:0,y:0},max:{x:0,y:0}};return r&&s.update(a,r),a},s.update=function(r,a,o){r.min.x=1/0,r.max.x=-1/0,r.min.y=1/0,r.max.y=-1/0;for(var l=0;l<a.length;l++){var u=a[l];u.x>r.max.x&&(r.max.x=u.x),u.x<r.min.x&&(r.min.x=u.x),u.y>r.max.y&&(r.max.y=u.y),u.y<r.min.y&&(r.min.y=u.y)}o&&(o.x>0?r.max.x+=o.x:r.min.x+=o.x,o.y>0?r.max.y+=o.y:r.min.y+=o.y)},s.contains=function(r,a){return a.x>=r.min.x&&a.x<=r.max.x&&a.y>=r.min.y&&a.y<=r.max.y},s.overlaps=function(r,a){return r.min.x<=a.max.x&&r.max.x>=a.min.x&&r.max.y>=a.min.y&&r.min.y<=a.max.y},s.translate=function(r,a){r.min.x+=a.x,r.max.x+=a.x,r.min.y+=a.y,r.max.y+=a.y},s.shift=function(r,a){var o=r.max.x-r.min.x,l=r.max.y-r.min.y;r.min.x=a.x,r.max.x=a.x+o,r.min.y=a.y,r.max.y=a.y+l}}()},function(n,i){var s={};n.exports=s,function(){s.create=function(r,a){return{x:r||0,y:a||0}},s.clone=function(r){return{x:r.x,y:r.y}},s.magnitude=function(r){return Math.sqrt(r.x*r.x+r.y*r.y)},s.magnitudeSquared=function(r){return r.x*r.x+r.y*r.y},s.rotate=function(r,a,o){var l=Math.cos(a),u=Math.sin(a);o||(o={});var f=r.x*l-r.y*u;return o.y=r.x*u+r.y*l,o.x=f,o},s.rotateAbout=function(r,a,o,l){var u=Math.cos(a),f=Math.sin(a);l||(l={});var h=o.x+((r.x-o.x)*u-(r.y-o.y)*f);return l.y=o.y+((r.x-o.x)*f+(r.y-o.y)*u),l.x=h,l},s.normalise=function(r){var a=s.magnitude(r);return a===0?{x:0,y:0}:{x:r.x/a,y:r.y/a}},s.dot=function(r,a){return r.x*a.x+r.y*a.y},s.cross=function(r,a){return r.x*a.y-r.y*a.x},s.cross3=function(r,a,o){return(a.x-r.x)*(o.y-r.y)-(a.y-r.y)*(o.x-r.x)},s.add=function(r,a,o){return o||(o={}),o.x=r.x+a.x,o.y=r.y+a.y,o},s.sub=function(r,a,o){return o||(o={}),o.x=r.x-a.x,o.y=r.y-a.y,o},s.mult=function(r,a){return{x:r.x*a,y:r.y*a}},s.div=function(r,a){return{x:r.x/a,y:r.y/a}},s.perp=function(r,a){return a=a===!0?-1:1,{x:a*-r.y,y:a*r.x}},s.neg=function(r){return{x:-r.x,y:-r.y}},s.angle=function(r,a){return Math.atan2(a.y-r.y,a.x-r.x)},s._temp=[s.create(),s.create(),s.create(),s.create(),s.create(),s.create()]}()},function(n,i,s){var r={};n.exports=r;var a=s(2),o=s(0);(function(){r.create=function(l,u){for(var f=[],h=0;h<l.length;h++){var d=l[h],c={x:d.x,y:d.y,index:h,body:u,isInternal:!1};f.push(c)}return f},r.fromPath=function(l,u){var f=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,h=[];return l.replace(f,function(d,c,m){h.push({x:parseFloat(c),y:parseFloat(m)})}),r.create(h,u)},r.centre=function(l){for(var u=r.area(l,!0),f={x:0,y:0},h,d,c,m=0;m<l.length;m++)c=(m+1)%l.length,h=a.cross(l[m],l[c]),d=a.mult(a.add(l[m],l[c]),h),f=a.add(f,d);return a.div(f,6*u)},r.mean=function(l){for(var u={x:0,y:0},f=0;f<l.length;f++)u.x+=l[f].x,u.y+=l[f].y;return a.div(u,l.length)},r.area=function(l,u){for(var f=0,h=l.length-1,d=0;d<l.length;d++)f+=(l[h].x-l[d].x)*(l[h].y+l[d].y),h=d;return u?f/2:Math.abs(f)/2},r.inertia=function(l,u){for(var f=0,h=0,d=l,c,m,v=0;v<d.length;v++)m=(v+1)%d.length,c=Math.abs(a.cross(d[m],d[v])),f+=c*(a.dot(d[m],d[m])+a.dot(d[m],d[v])+a.dot(d[v],d[v])),h+=c;return u/6*(f/h)},r.translate=function(l,u,f){f=typeof f<"u"?f:1;var h=l.length,d=u.x*f,c=u.y*f,m;for(m=0;m<h;m++)l[m].x+=d,l[m].y+=c;return l},r.rotate=function(l,u,f){if(u!==0){var h=Math.cos(u),d=Math.sin(u),c=f.x,m=f.y,v=l.length,g,p,x,y;for(y=0;y<v;y++)g=l[y],p=g.x-c,x=g.y-m,g.x=c+(p*h-x*d),g.y=m+(p*d+x*h);return l}},r.contains=function(l,u){for(var f=u.x,h=u.y,d=l.length,c=l[d-1],m,v=0;v<d;v++){if(m=l[v],(f-c.x)*(m.y-c.y)+(h-c.y)*(c.x-m.x)>0)return!1;c=m}return!0},r.scale=function(l,u,f,h){if(u===1&&f===1)return l;h=h||r.centre(l);for(var d,c,m=0;m<l.length;m++)d=l[m],c=a.sub(d,h),l[m].x=h.x+c.x*u,l[m].y=h.y+c.y*f;return l},r.chamfer=function(l,u,f,h,d){typeof u=="number"?u=[u]:u=u||[8],f=typeof f<"u"?f:-1,h=h||2,d=d||14;for(var c=[],m=0;m<l.length;m++){var v=l[m-1>=0?m-1:l.length-1],g=l[m],p=l[(m+1)%l.length],x=u[m<u.length?m:u.length-1];if(x===0){c.push(g);continue}var y=a.normalise({x:g.y-v.y,y:v.x-g.x}),E=a.normalise({x:p.y-g.y,y:g.x-p.x}),S=Math.sqrt(2*Math.pow(x,2)),M=a.mult(o.clone(y),x),w=a.normalise(a.mult(a.add(y,E),.5)),_=a.sub(g,a.mult(w,S)),T=f;f===-1&&(T=Math.pow(x,.32)*1.75),T=o.clamp(T,h,d),T%2===1&&(T+=1);for(var A=Math.acos(a.dot(y,E)),C=A/T,P=0;P<T;P++)c.push(a.add(a.rotate(M,C*P),_))}return c},r.clockwiseSort=function(l){var u=r.mean(l);return l.sort(function(f,h){return a.angle(u,f)-a.angle(u,h)}),l},r.isConvex=function(l){var u=0,f=l.length,h,d,c,m;if(f<3)return null;for(h=0;h<f;h++)if(d=(h+1)%f,c=(h+2)%f,m=(l[d].x-l[h].x)*(l[c].y-l[d].y),m-=(l[d].y-l[h].y)*(l[c].x-l[d].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},r.hull=function(l){var u=[],f=[],h,d;for(l=l.slice(0),l.sort(function(c,m){var v=c.x-m.x;return v!==0?v:c.y-m.y}),d=0;d<l.length;d+=1){for(h=l[d];f.length>=2&&a.cross3(f[f.length-2],f[f.length-1],h)<=0;)f.pop();f.push(h)}for(d=l.length-1;d>=0;d-=1){for(h=l[d];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],h)<=0;)u.pop();u.push(h)}return u.pop(),f.pop(),u.concat(f)}})()},function(n,i,s){var r={};n.exports=r;var a=s(3),o=s(2),l=s(7),u=s(0),f=s(1),h=s(11);(function(){r._timeCorrection=!0,r._inertiaScale=4,r._nextCollidingGroupId=1,r._nextNonCollidingGroupId=-1,r._nextCategory=1,r._baseDelta=1e3/60,r.create=function(c){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},v=u.extend(m,c);return d(v,c),v},r.nextGroup=function(c){return c?r._nextNonCollidingGroupId--:r._nextCollidingGroupId++},r.nextCategory=function(){return r._nextCategory=r._nextCategory<<1,r._nextCategory};var d=function(c,m){m=m||{},r.set(c,{bounds:c.bounds||f.create(c.vertices),positionPrev:c.positionPrev||o.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),a.rotate(c.vertices,c.angle,c.position),h.rotate(c.axes,c.angle),f.update(c.bounds,c.vertices,c.velocity),r.set(c,{axes:m.axes||c.axes,area:m.area||c.area,mass:m.mass||c.mass,inertia:m.inertia||c.inertia});var v=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),g=c.isStatic?"#555":"#ccc",p=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||v,c.render.strokeStyle=c.render.strokeStyle||g,c.render.lineWidth=c.render.lineWidth||p,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};r.set=function(c,m,v){var g;typeof m=="string"&&(g=m,m={},m[g]=v);for(g in m)if(Object.prototype.hasOwnProperty.call(m,g))switch(v=m[g],g){case"isStatic":r.setStatic(c,v);break;case"isSleeping":l.set(c,v);break;case"mass":r.setMass(c,v);break;case"density":r.setDensity(c,v);break;case"inertia":r.setInertia(c,v);break;case"vertices":r.setVertices(c,v);break;case"position":r.setPosition(c,v);break;case"angle":r.setAngle(c,v);break;case"velocity":r.setVelocity(c,v);break;case"angularVelocity":r.setAngularVelocity(c,v);break;case"speed":r.setSpeed(c,v);break;case"angularSpeed":r.setAngularSpeed(c,v);break;case"parts":r.setParts(c,v);break;case"centre":r.setCentre(c,v);break;default:c[g]=v}},r.setStatic=function(c,m){for(var v=0;v<c.parts.length;v++){var g=c.parts[v];m?(g.isStatic||(g._original={restitution:g.restitution,friction:g.friction,mass:g.mass,inertia:g.inertia,density:g.density,inverseMass:g.inverseMass,inverseInertia:g.inverseInertia}),g.restitution=0,g.friction=1,g.mass=g.inertia=g.density=1/0,g.inverseMass=g.inverseInertia=0,g.positionPrev.x=g.position.x,g.positionPrev.y=g.position.y,g.anglePrev=g.angle,g.angularVelocity=0,g.speed=0,g.angularSpeed=0,g.motion=0):g._original&&(g.restitution=g._original.restitution,g.friction=g._original.friction,g.mass=g._original.mass,g.inertia=g._original.inertia,g.density=g._original.density,g.inverseMass=g._original.inverseMass,g.inverseInertia=g._original.inverseInertia,g._original=null),g.isStatic=m}},r.setMass=function(c,m){var v=c.inertia/(c.mass/6);c.inertia=v*(m/6),c.inverseInertia=1/c.inertia,c.mass=m,c.inverseMass=1/c.mass,c.density=c.mass/c.area},r.setDensity=function(c,m){r.setMass(c,m*c.area),c.density=m},r.setInertia=function(c,m){c.inertia=m,c.inverseInertia=1/c.inertia},r.setVertices=function(c,m){m[0].body===c?c.vertices=m:c.vertices=a.create(m,c),c.axes=h.fromVertices(c.vertices),c.area=a.area(c.vertices),r.setMass(c,c.density*c.area);var v=a.centre(c.vertices);a.translate(c.vertices,v,-1),r.setInertia(c,r._inertiaScale*a.inertia(c.vertices,c.mass)),a.translate(c.vertices,c.position),f.update(c.bounds,c.vertices,c.velocity)},r.setParts=function(c,m,v){var g;for(m=m.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,g=0;g<m.length;g++){var p=m[g];p!==c&&(p.parent=c,c.parts.push(p))}if(c.parts.length!==1){if(v=typeof v<"u"?v:!0,v){var x=[];for(g=0;g<m.length;g++)x=x.concat(m[g].vertices);a.clockwiseSort(x);var y=a.hull(x),E=a.centre(y);r.setVertices(c,y),a.translate(c.vertices,E)}var S=r._totalProperties(c);c.area=S.area,c.parent=c,c.position.x=S.centre.x,c.position.y=S.centre.y,c.positionPrev.x=S.centre.x,c.positionPrev.y=S.centre.y,r.setMass(c,S.mass),r.setInertia(c,S.inertia),r.setPosition(c,S.centre)}},r.setCentre=function(c,m,v){v?(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y,c.position.x+=m.x,c.position.y+=m.y):(c.positionPrev.x=m.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=m.y-(c.position.y-c.positionPrev.y),c.position.x=m.x,c.position.y=m.y)},r.setPosition=function(c,m,v){var g=o.sub(m,c.position);v?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=g.x,c.velocity.y=g.y,c.speed=o.magnitude(g)):(c.positionPrev.x+=g.x,c.positionPrev.y+=g.y);for(var p=0;p<c.parts.length;p++){var x=c.parts[p];x.position.x+=g.x,x.position.y+=g.y,a.translate(x.vertices,g),f.update(x.bounds,x.vertices,c.velocity)}},r.setAngle=function(c,m,v){var g=m-c.angle;v?(c.anglePrev=c.angle,c.angularVelocity=g,c.angularSpeed=Math.abs(g)):c.anglePrev+=g;for(var p=0;p<c.parts.length;p++){var x=c.parts[p];x.angle+=g,a.rotate(x.vertices,g,c.position),h.rotate(x.axes,g),f.update(x.bounds,x.vertices,c.velocity),p>0&&o.rotateAbout(x.position,g,c.position,x.position)}},r.setVelocity=function(c,m){var v=c.deltaTime/r._baseDelta;c.positionPrev.x=c.position.x-m.x*v,c.positionPrev.y=c.position.y-m.y*v,c.velocity.x=(c.position.x-c.positionPrev.x)/v,c.velocity.y=(c.position.y-c.positionPrev.y)/v,c.speed=o.magnitude(c.velocity)},r.getVelocity=function(c){var m=r._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*m,y:(c.position.y-c.positionPrev.y)*m}},r.getSpeed=function(c){return o.magnitude(r.getVelocity(c))},r.setSpeed=function(c,m){r.setVelocity(c,o.mult(o.normalise(r.getVelocity(c)),m))},r.setAngularVelocity=function(c,m){var v=c.deltaTime/r._baseDelta;c.anglePrev=c.angle-m*v,c.angularVelocity=(c.angle-c.anglePrev)/v,c.angularSpeed=Math.abs(c.angularVelocity)},r.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*r._baseDelta/c.deltaTime},r.getAngularSpeed=function(c){return Math.abs(r.getAngularVelocity(c))},r.setAngularSpeed=function(c,m){r.setAngularVelocity(c,u.sign(r.getAngularVelocity(c))*m)},r.translate=function(c,m,v){r.setPosition(c,o.add(c.position,m),v)},r.rotate=function(c,m,v,g){if(!v)r.setAngle(c,c.angle+m,g);else{var p=Math.cos(m),x=Math.sin(m),y=c.position.x-v.x,E=c.position.y-v.y;r.setPosition(c,{x:v.x+(y*p-E*x),y:v.y+(y*x+E*p)},g),r.setAngle(c,c.angle+m,g)}},r.scale=function(c,m,v,g){var p=0,x=0;g=g||c.position;for(var y=0;y<c.parts.length;y++){var E=c.parts[y];a.scale(E.vertices,m,v,g),E.axes=h.fromVertices(E.vertices),E.area=a.area(E.vertices),r.setMass(E,c.density*E.area),a.translate(E.vertices,{x:-E.position.x,y:-E.position.y}),r.setInertia(E,r._inertiaScale*a.inertia(E.vertices,E.mass)),a.translate(E.vertices,{x:E.position.x,y:E.position.y}),y>0&&(p+=E.area,x+=E.inertia),E.position.x=g.x+(E.position.x-g.x)*m,E.position.y=g.y+(E.position.y-g.y)*v,f.update(E.bounds,E.vertices,c.velocity)}c.parts.length>1&&(c.area=p,c.isStatic||(r.setMass(c,c.density*p),r.setInertia(c,x))),c.circleRadius&&(m===v?c.circleRadius*=m:c.circleRadius=null)},r.update=function(c,m){m=(typeof m<"u"?m:1e3/60)*c.timeScale;var v=m*m,g=r._timeCorrection?m/(c.deltaTime||m):1,p=1-c.frictionAir*(m/u._baseDelta),x=(c.position.x-c.positionPrev.x)*g,y=(c.position.y-c.positionPrev.y)*g;c.velocity.x=x*p+c.force.x/c.mass*v,c.velocity.y=y*p+c.force.y/c.mass*v,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=m,c.angularVelocity=(c.angle-c.anglePrev)*p*g+c.torque/c.inertia*v,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var E=0;E<c.parts.length;E++){var S=c.parts[E];a.translate(S.vertices,c.velocity),E>0&&(S.position.x+=c.velocity.x,S.position.y+=c.velocity.y),c.angularVelocity!==0&&(a.rotate(S.vertices,c.angularVelocity,c.position),h.rotate(S.axes,c.angularVelocity),E>0&&o.rotateAbout(S.position,c.angularVelocity,c.position,S.position)),f.update(S.bounds,S.vertices,c.velocity)}},r.updateVelocities=function(c){var m=r._baseDelta/c.deltaTime,v=c.velocity;v.x=(c.position.x-c.positionPrev.x)*m,v.y=(c.position.y-c.positionPrev.y)*m,c.speed=Math.sqrt(v.x*v.x+v.y*v.y),c.angularVelocity=(c.angle-c.anglePrev)*m,c.angularSpeed=Math.abs(c.angularVelocity)},r.applyForce=function(c,m,v){var g={x:m.x-c.position.x,y:m.y-c.position.y};c.force.x+=v.x,c.force.y+=v.y,c.torque+=g.x*v.y-g.y*v.x},r._totalProperties=function(c){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},v=c.parts.length===1?0:1;v<c.parts.length;v++){var g=c.parts[v],p=g.mass!==1/0?g.mass:1;m.mass+=p,m.area+=g.area,m.inertia+=g.inertia,m.centre=o.add(m.centre,o.mult(g.position,p))}return m.centre=o.div(m.centre,m.mass),m}})()},function(n,i,s){var r={};n.exports=r;var a=s(0);(function(){r.on=function(o,l,u){for(var f=l.split(" "),h,d=0;d<f.length;d++)h=f[d],o.events=o.events||{},o.events[h]=o.events[h]||[],o.events[h].push(u);return u},r.off=function(o,l,u){if(!l){o.events={};return}typeof l=="function"&&(u=l,l=a.keys(o.events).join(" "));for(var f=l.split(" "),h=0;h<f.length;h++){var d=o.events[f[h]],c=[];if(u&&d)for(var m=0;m<d.length;m++)d[m]!==u&&c.push(d[m]);o.events[f[h]]=c}},r.trigger=function(o,l,u){var f,h,d,c,m=o.events;if(m&&a.keys(m).length>0){u||(u={}),f=l.split(" ");for(var v=0;v<f.length;v++)if(h=f[v],d=m[h],d){c=a.clone(u,!1),c.name=h,c.source=o;for(var g=0;g<d.length;g++)d[g].apply(o,[c])}}}})()},function(n,i,s){var r={};n.exports=r;var a=s(5),o=s(0),l=s(1),u=s(4);(function(){r.create=function(f){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},f)},r.setModified=function(f,h,d,c){if(f.isModified=h,h&&f.cache&&(f.cache.allBodies=null,f.cache.allConstraints=null,f.cache.allComposites=null),d&&f.parent&&r.setModified(f.parent,h,d,c),c)for(var m=0;m<f.composites.length;m++){var v=f.composites[m];r.setModified(v,h,d,c)}},r.add=function(f,h){var d=[].concat(h);a.trigger(f,"beforeAdd",{object:h});for(var c=0;c<d.length;c++){var m=d[c];switch(m.type){case"body":if(m.parent!==m){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}r.addBody(f,m);break;case"constraint":r.addConstraint(f,m);break;case"composite":r.addComposite(f,m);break;case"mouseConstraint":r.addConstraint(f,m.constraint);break}}return a.trigger(f,"afterAdd",{object:h}),f},r.remove=function(f,h,d){var c=[].concat(h);a.trigger(f,"beforeRemove",{object:h});for(var m=0;m<c.length;m++){var v=c[m];switch(v.type){case"body":r.removeBody(f,v,d);break;case"constraint":r.removeConstraint(f,v,d);break;case"composite":r.removeComposite(f,v,d);break;case"mouseConstraint":r.removeConstraint(f,v.constraint);break}}return a.trigger(f,"afterRemove",{object:h}),f},r.addComposite=function(f,h){return f.composites.push(h),h.parent=f,r.setModified(f,!0,!0,!1),f},r.removeComposite=function(f,h,d){var c=o.indexOf(f.composites,h);if(c!==-1){var m=r.allBodies(h);r.removeCompositeAt(f,c);for(var v=0;v<m.length;v++)m[v].sleepCounter=0}if(d)for(var v=0;v<f.composites.length;v++)r.removeComposite(f.composites[v],h,!0);return f},r.removeCompositeAt=function(f,h){return f.composites.splice(h,1),r.setModified(f,!0,!0,!1),f},r.addBody=function(f,h){return f.bodies.push(h),r.setModified(f,!0,!0,!1),f},r.removeBody=function(f,h,d){var c=o.indexOf(f.bodies,h);if(c!==-1&&(r.removeBodyAt(f,c),h.sleepCounter=0),d)for(var m=0;m<f.composites.length;m++)r.removeBody(f.composites[m],h,!0);return f},r.removeBodyAt=function(f,h){return f.bodies.splice(h,1),r.setModified(f,!0,!0,!1),f},r.addConstraint=function(f,h){return f.constraints.push(h),r.setModified(f,!0,!0,!1),f},r.removeConstraint=function(f,h,d){var c=o.indexOf(f.constraints,h);if(c!==-1&&r.removeConstraintAt(f,c),d)for(var m=0;m<f.composites.length;m++)r.removeConstraint(f.composites[m],h,!0);return f},r.removeConstraintAt=function(f,h){return f.constraints.splice(h,1),r.setModified(f,!0,!0,!1),f},r.clear=function(f,h,d){if(d)for(var c=0;c<f.composites.length;c++)r.clear(f.composites[c],h,!0);return h?f.bodies=f.bodies.filter(function(m){return m.isStatic}):f.bodies.length=0,f.constraints.length=0,f.composites.length=0,r.setModified(f,!0,!0,!1),f},r.allBodies=function(f){if(f.cache&&f.cache.allBodies)return f.cache.allBodies;for(var h=[].concat(f.bodies),d=0;d<f.composites.length;d++)h=h.concat(r.allBodies(f.composites[d]));return f.cache&&(f.cache.allBodies=h),h},r.allConstraints=function(f){if(f.cache&&f.cache.allConstraints)return f.cache.allConstraints;for(var h=[].concat(f.constraints),d=0;d<f.composites.length;d++)h=h.concat(r.allConstraints(f.composites[d]));return f.cache&&(f.cache.allConstraints=h),h},r.allComposites=function(f){if(f.cache&&f.cache.allComposites)return f.cache.allComposites;for(var h=[].concat(f.composites),d=0;d<f.composites.length;d++)h=h.concat(r.allComposites(f.composites[d]));return f.cache&&(f.cache.allComposites=h),h},r.get=function(f,h,d){var c,m;switch(d){case"body":c=r.allBodies(f);break;case"constraint":c=r.allConstraints(f);break;case"composite":c=r.allComposites(f).concat(f);break}return c?(m=c.filter(function(v){return v.id.toString()===h.toString()}),m.length===0?null:m[0]):null},r.move=function(f,h,d){return r.remove(f,h),r.add(d,h),f},r.rebase=function(f){for(var h=r.allBodies(f).concat(r.allConstraints(f)).concat(r.allComposites(f)),d=0;d<h.length;d++)h[d].id=o.nextId();return f},r.translate=function(f,h,d){for(var c=d?r.allBodies(f):f.bodies,m=0;m<c.length;m++)u.translate(c[m],h);return f},r.rotate=function(f,h,d,c){for(var m=Math.cos(h),v=Math.sin(h),g=c?r.allBodies(f):f.bodies,p=0;p<g.length;p++){var x=g[p],y=x.position.x-d.x,E=x.position.y-d.y;u.setPosition(x,{x:d.x+(y*m-E*v),y:d.y+(y*v+E*m)}),u.rotate(x,h)}return f},r.scale=function(f,h,d,c,m){for(var v=m?r.allBodies(f):f.bodies,g=0;g<v.length;g++){var p=v[g],x=p.position.x-c.x,y=p.position.y-c.y;u.setPosition(p,{x:c.x+x*h,y:c.y+y*d}),u.scale(p,h,d)}return f},r.bounds=function(f){for(var h=r.allBodies(f),d=[],c=0;c<h.length;c+=1){var m=h[c];d.push(m.bounds.min,m.bounds.max)}return l.create(d)}})()},function(n,i,s){var r={};n.exports=r;var a=s(4),o=s(5),l=s(0);(function(){r._motionWakeThreshold=.18,r._motionSleepThreshold=.08,r._minBias=.9,r.update=function(u,f){for(var h=f/l._baseDelta,d=r._motionSleepThreshold,c=0;c<u.length;c++){var m=u[c],v=a.getSpeed(m),g=a.getAngularSpeed(m),p=v*v+g*g;if(m.force.x!==0||m.force.y!==0){r.set(m,!1);continue}var x=Math.min(m.motion,p),y=Math.max(m.motion,p);m.motion=r._minBias*x+(1-r._minBias)*y,m.sleepThreshold>0&&m.motion<d?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/h&&r.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},r.afterCollisions=function(u){for(var f=r._motionSleepThreshold,h=0;h<u.length;h++){var d=u[h];if(d.isActive){var c=d.collision,m=c.bodyA.parent,v=c.bodyB.parent;if(!(m.isSleeping&&v.isSleeping||m.isStatic||v.isStatic)&&(m.isSleeping||v.isSleeping)){var g=m.isSleeping&&!m.isStatic?m:v,p=g===m?v:m;!g.isStatic&&p.motion>f&&r.set(g,!1)}}}},r.set=function(u,f){var h=u.isSleeping;f?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,h||o.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,h&&o.trigger(u,"sleepEnd"))}})()},function(n,i,s){var r={};n.exports=r;var a=s(3),o=s(9);(function(){var l=[],u={overlap:0,axis:null},f={overlap:0,axis:null};r.create=function(h,d){return{pair:null,collided:!1,bodyA:h,bodyB:d,parentA:h.parent,parentB:d.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},r.collides=function(h,d,c){if(r._overlapAxes(u,h.vertices,d.vertices,h.axes),u.overlap<=0||(r._overlapAxes(f,d.vertices,h.vertices,d.axes),f.overlap<=0))return null;var m=c&&c.table[o.id(h,d)],v;m?v=m.collision:(v=r.create(h,d),v.collided=!0,v.bodyA=h.id<d.id?h:d,v.bodyB=h.id<d.id?d:h,v.parentA=v.bodyA.parent,v.parentB=v.bodyB.parent),h=v.bodyA,d=v.bodyB;var g;u.overlap<f.overlap?g=u:g=f;var p=v.normal,x=v.tangent,y=v.penetration,E=v.supports,S=g.overlap,M=g.axis,w=M.x,_=M.y,T=d.position.x-h.position.x,A=d.position.y-h.position.y;w*T+_*A>=0&&(w=-w,_=-_),p.x=w,p.y=_,x.x=-_,x.y=w,y.x=w*S,y.y=_*S,v.depth=S;var C=r._findSupports(h,d,p,1),P=0;if(a.contains(h.vertices,C[0])&&(E[P++]=C[0]),a.contains(h.vertices,C[1])&&(E[P++]=C[1]),P<2){var D=r._findSupports(d,h,p,-1);a.contains(d.vertices,D[0])&&(E[P++]=D[0]),P<2&&a.contains(d.vertices,D[1])&&(E[P++]=D[1])}return P===0&&(E[P++]=C[0]),v.supportCount=P,v},r._overlapAxes=function(h,d,c,m){var v=d.length,g=c.length,p=d[0].x,x=d[0].y,y=c[0].x,E=c[0].y,S=m.length,M=Number.MAX_VALUE,w=0,_,T,A,C,P,D;for(P=0;P<S;P++){var U=m[P],L=U.x,N=U.y,F=p*L+x*N,O=y*L+E*N,G=F,K=O;for(D=1;D<v;D+=1)C=d[D].x*L+d[D].y*N,C>G?G=C:C<F&&(F=C);for(D=1;D<g;D+=1)C=c[D].x*L+c[D].y*N,C>K?K=C:C<O&&(O=C);if(T=G-O,A=K-F,_=T<A?T:A,_<M&&(M=_,w=P,_<=0))break}h.axis=m[w],h.overlap=M},r._findSupports=function(h,d,c,m){var v=d.vertices,g=v.length,p=h.position.x,x=h.position.y,y=c.x*m,E=c.y*m,S=v[0],M=S,w=y*(p-M.x)+E*(x-M.y),_,T,A;for(A=1;A<g;A+=1)M=v[A],T=y*(p-M.x)+E*(x-M.y),T<w&&(w=T,S=M);return _=v[(g+S.index-1)%g],w=y*(p-_.x)+E*(x-_.y),M=v[(S.index+1)%g],y*(p-M.x)+E*(x-M.y)<w?(l[0]=S,l[1]=M,l):(l[0]=S,l[1]=_,l)}})()},function(n,i,s){var r={};n.exports=r;var a=s(16);(function(){r.create=function(o,l){var u=o.bodyA,f=o.bodyB,h={id:r.id(u,f),bodyA:u,bodyB:f,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||f.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return r.update(h,o,l),h},r.update=function(o,l,u){var f=l.supports,h=l.supportCount,d=o.contacts,c=l.parentA,m=l.parentB;o.isActive=!0,o.timeUpdated=u,o.collision=l,o.separation=l.depth,o.inverseMass=c.inverseMass+m.inverseMass,o.friction=c.friction<m.friction?c.friction:m.friction,o.frictionStatic=c.frictionStatic>m.frictionStatic?c.frictionStatic:m.frictionStatic,o.restitution=c.restitution>m.restitution?c.restitution:m.restitution,o.slop=c.slop>m.slop?c.slop:m.slop,o.contactCount=h,l.pair=o;var v=f[0],g=d[0],p=f[1],x=d[1];(x.vertex===v||g.vertex===p)&&(d[1]=g,d[0]=g=x,x=d[1]),g.vertex=v,x.vertex=p},r.setActive=function(o,l,u){l?(o.isActive=!0,o.timeUpdated=u):(o.isActive=!1,o.contactCount=0)},r.id=function(o,l){return o.id<l.id?o.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+o.id.toString(36)}})()},function(n,i,s){var r={};n.exports=r;var a=s(3),o=s(2),l=s(7),u=s(1),f=s(11),h=s(0);(function(){r._warming=.4,r._torqueDampen=1,r._minLength=1e-6,r.create=function(d){var c=d;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var m=c.bodyA?o.add(c.bodyA.position,c.pointA):c.pointA,v=c.bodyB?o.add(c.bodyB.position,c.pointB):c.pointB,g=o.magnitude(o.sub(m,v));c.length=typeof c.length<"u"?c.length:g,c.id=c.id||h.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var p={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(p.type="pin",p.anchors=!1):c.stiffness<.9&&(p.type="spring"),c.render=h.extend(p,c.render),c},r.preSolveAll=function(d){for(var c=0;c<d.length;c+=1){var m=d[c],v=m.constraintImpulse;m.isStatic||v.x===0&&v.y===0&&v.angle===0||(m.position.x+=v.x,m.position.y+=v.y,m.angle+=v.angle)}},r.solveAll=function(d,c){for(var m=h.clamp(c/h._baseDelta,0,1),v=0;v<d.length;v+=1){var g=d[v],p=!g.bodyA||g.bodyA&&g.bodyA.isStatic,x=!g.bodyB||g.bodyB&&g.bodyB.isStatic;(p||x)&&r.solve(d[v],m)}for(v=0;v<d.length;v+=1)g=d[v],p=!g.bodyA||g.bodyA&&g.bodyA.isStatic,x=!g.bodyB||g.bodyB&&g.bodyB.isStatic,!p&&!x&&r.solve(d[v],m)},r.solve=function(d,c){var m=d.bodyA,v=d.bodyB,g=d.pointA,p=d.pointB;if(!(!m&&!v)){m&&!m.isStatic&&(o.rotate(g,m.angle-d.angleA,g),d.angleA=m.angle),v&&!v.isStatic&&(o.rotate(p,v.angle-d.angleB,p),d.angleB=v.angle);var x=g,y=p;if(m&&(x=o.add(m.position,g)),v&&(y=o.add(v.position,p)),!(!x||!y)){var E=o.sub(x,y),S=o.magnitude(E);S<r._minLength&&(S=r._minLength);var M=(S-d.length)/S,w=d.stiffness>=1||d.length===0,_=w?d.stiffness*c:d.stiffness*c*c,T=d.damping*c,A=o.mult(E,M*_),C=(m?m.inverseMass:0)+(v?v.inverseMass:0),P=(m?m.inverseInertia:0)+(v?v.inverseInertia:0),D=C+P,U,L,N,F,O;if(T>0){var G=o.create();N=o.div(E,S),O=o.sub(v&&o.sub(v.position,v.positionPrev)||G,m&&o.sub(m.position,m.positionPrev)||G),F=o.dot(N,O)}m&&!m.isStatic&&(L=m.inverseMass/C,m.constraintImpulse.x-=A.x*L,m.constraintImpulse.y-=A.y*L,m.position.x-=A.x*L,m.position.y-=A.y*L,T>0&&(m.positionPrev.x-=T*N.x*F*L,m.positionPrev.y-=T*N.y*F*L),U=o.cross(g,A)/D*r._torqueDampen*m.inverseInertia*(1-d.angularStiffness),m.constraintImpulse.angle-=U,m.angle-=U),v&&!v.isStatic&&(L=v.inverseMass/C,v.constraintImpulse.x+=A.x*L,v.constraintImpulse.y+=A.y*L,v.position.x+=A.x*L,v.position.y+=A.y*L,T>0&&(v.positionPrev.x+=T*N.x*F*L,v.positionPrev.y+=T*N.y*F*L),U=o.cross(p,A)/D*r._torqueDampen*v.inverseInertia*(1-d.angularStiffness),v.constraintImpulse.angle+=U,v.angle+=U)}}},r.postSolveAll=function(d){for(var c=0;c<d.length;c++){var m=d[c],v=m.constraintImpulse;if(!(m.isStatic||v.x===0&&v.y===0&&v.angle===0)){l.set(m,!1);for(var g=0;g<m.parts.length;g++){var p=m.parts[g];a.translate(p.vertices,v),g>0&&(p.position.x+=v.x,p.position.y+=v.y),v.angle!==0&&(a.rotate(p.vertices,v.angle,m.position),f.rotate(p.axes,v.angle),g>0&&o.rotateAbout(p.position,v.angle,m.position,p.position)),u.update(p.bounds,p.vertices,m.velocity)}v.angle*=r._warming,v.x*=r._warming,v.y*=r._warming}}},r.pointAWorld=function(d){return{x:(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),y:(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0)}},r.pointBWorld=function(d){return{x:(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),y:(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0)}},r.currentLength=function(d){var c=(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),m=(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0),v=(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),g=(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0),p=c-v,x=m-g;return Math.sqrt(p*p+x*x)}})()},function(n,i,s){var r={};n.exports=r;var a=s(2),o=s(0);(function(){r.fromVertices=function(l){for(var u={},f=0;f<l.length;f++){var h=(f+1)%l.length,d=a.normalise({x:l[h].y-l[f].y,y:l[f].x-l[h].x}),c=d.y===0?1/0:d.x/d.y;c=c.toFixed(3).toString(),u[c]=d}return o.values(u)},r.rotate=function(l,u){if(u!==0)for(var f=Math.cos(u),h=Math.sin(u),d=0;d<l.length;d++){var c=l[d],m;m=c.x*f-c.y*h,c.y=c.x*h+c.y*f,c.x=m}}})()},function(n,i,s){var r={};n.exports=r;var a=s(3),o=s(0),l=s(4),u=s(1),f=s(2);(function(){r.rectangle=function(h,d,c,m,v){v=v||{};var g={label:"Rectangle Body",position:{x:h,y:d},vertices:a.fromPath("L 0 0 L "+c+" 0 L "+c+" "+m+" L 0 "+m)};if(v.chamfer){var p=v.chamfer;g.vertices=a.chamfer(g.vertices,p.radius,p.quality,p.qualityMin,p.qualityMax),delete v.chamfer}return l.create(o.extend({},g,v))},r.trapezoid=function(h,d,c,m,v,g){g=g||{},v>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),v*=.5;var p=(1-v*2)*c,x=c*v,y=x+p,E=y+x,S;v<.5?S="L 0 0 L "+x+" "+-m+" L "+y+" "+-m+" L "+E+" 0":S="L 0 0 L "+y+" "+-m+" L "+E+" 0";var M={label:"Trapezoid Body",position:{x:h,y:d},vertices:a.fromPath(S)};if(g.chamfer){var w=g.chamfer;M.vertices=a.chamfer(M.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete g.chamfer}return l.create(o.extend({},M,g))},r.circle=function(h,d,c,m,v){m=m||{};var g={label:"Circle Body",circleRadius:c};v=v||25;var p=Math.ceil(Math.max(10,Math.min(v,c)));return p%2===1&&(p+=1),r.polygon(h,d,p,c,o.extend({},g,m))},r.polygon=function(h,d,c,m,v){if(v=v||{},c<3)return r.circle(h,d,m,v);for(var g=2*Math.PI/c,p="",x=g*.5,y=0;y<c;y+=1){var E=x+y*g,S=Math.cos(E)*m,M=Math.sin(E)*m;p+="L "+S.toFixed(3)+" "+M.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:h,y:d},vertices:a.fromPath(p)};if(v.chamfer){var _=v.chamfer;w.vertices=a.chamfer(w.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete v.chamfer}return l.create(o.extend({},w,v))},r.fromVertices=function(h,d,c,m,v,g,p,x){var y=o.getDecomp(),E,S,M,w,_,T,A,C,P,D,U;for(E=!!(y&&y.quickDecomp),m=m||{},M=[],v=typeof v<"u"?v:!1,g=typeof g<"u"?g:.01,p=typeof p<"u"?p:10,x=typeof x<"u"?x:.01,o.isArray(c[0])||(c=[c]),D=0;D<c.length;D+=1)if(T=c[D],w=a.isConvex(T),_=!w,_&&!E&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!E)w?T=a.clockwiseSort(T):T=a.hull(T),M.push({position:{x:h,y:d},vertices:T});else{var L=T.map(function(W){return[W.x,W.y]});y.makeCCW(L),g!==!1&&y.removeCollinearPoints(L,g),x!==!1&&y.removeDuplicatePoints&&y.removeDuplicatePoints(L,x);var N=y.quickDecomp(L);for(A=0;A<N.length;A++){var F=N[A],O=F.map(function(W){return{x:W[0],y:W[1]}});p>0&&a.area(O)<p||M.push({position:a.centre(O),vertices:O})}}for(A=0;A<M.length;A++)M[A]=l.create(o.extend(M[A],m));if(v){var G=5;for(A=0;A<M.length;A++){var K=M[A];for(C=A+1;C<M.length;C++){var te=M[C];if(u.overlaps(K.bounds,te.bounds)){var se=K.vertices,Me=te.vertices;for(P=0;P<K.vertices.length;P++)for(U=0;U<te.vertices.length;U++){var re=f.magnitudeSquared(f.sub(se[(P+1)%se.length],Me[U])),ae=f.magnitudeSquared(f.sub(se[P],Me[(U+1)%Me.length]));re<G&&ae<G&&(se[P].isInternal=!0,Me[U].isInternal=!0)}}}}}return M.length>1?(S=l.create(o.extend({parts:M.slice(0)},m)),l.setPosition(S,{x:h,y:d}),S):M[0]}})()},function(n,i,s){var r={};n.exports=r;var a=s(0),o=s(8);(function(){r.create=function(l){var u={bodies:[],collisions:[],pairs:null};return a.extend(u,l)},r.setBodies=function(l,u){l.bodies=u.slice(0)},r.clear=function(l){l.bodies=[],l.collisions=[]},r.collisions=function(l){var u=l.pairs,f=l.bodies,h=f.length,d=r.canCollide,c=o.collides,m=l.collisions,v=0,g,p;for(f.sort(r._compareBoundsX),g=0;g<h;g++){var x=f[g],y=x.bounds,E=x.bounds.max.x,S=x.bounds.max.y,M=x.bounds.min.y,w=x.isStatic||x.isSleeping,_=x.parts.length,T=_===1;for(p=g+1;p<h;p++){var A=f[p],C=A.bounds;if(C.min.x>E)break;if(!(S<C.min.y||M>C.max.y)&&!(w&&(A.isStatic||A.isSleeping))&&d(x.collisionFilter,A.collisionFilter)){var P=A.parts.length;if(T&&P===1){var D=c(x,A,u);D&&(m[v++]=D)}else for(var U=_>1?1:0,L=P>1?1:0,N=U;N<_;N++)for(var F=x.parts[N],y=F.bounds,O=L;O<P;O++){var G=A.parts[O],C=G.bounds;if(!(y.min.x>C.max.x||y.max.x<C.min.x||y.max.y<C.min.y||y.min.y>C.max.y)){var D=c(F,G,u);D&&(m[v++]=D)}}}}}return m.length!==v&&(m.length=v),m},r.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},r._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(n,i,s){var r={};n.exports=r;var a=s(0);(function(){r.create=function(o){var l={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=o||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var f=r._getRelativeMousePosition(u,l.element,l.pixelRatio),h=u.changedTouches;h&&(l.button=0,u.preventDefault()),l.absolute.x=f.x,l.absolute.y=f.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var f=r._getRelativeMousePosition(u,l.element,l.pixelRatio),h=u.changedTouches;h?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=f.x,l.absolute.y=f.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var f=r._getRelativeMousePosition(u,l.element,l.pixelRatio),h=u.changedTouches;h&&u.preventDefault(),l.button=-1,l.absolute.x=f.x,l.absolute.y=f.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},r.setElement(l,l.element),l},r.setElement=function(o,l){o.element=l,l.addEventListener("mousemove",o.mousemove,{passive:!0}),l.addEventListener("mousedown",o.mousedown,{passive:!0}),l.addEventListener("mouseup",o.mouseup,{passive:!0}),l.addEventListener("wheel",o.mousewheel,{passive:!1}),l.addEventListener("touchmove",o.mousemove,{passive:!1}),l.addEventListener("touchstart",o.mousedown,{passive:!1}),l.addEventListener("touchend",o.mouseup,{passive:!1})},r.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},r.setOffset=function(o,l){o.offset.x=l.x,o.offset.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},r.setScale=function(o,l){o.scale.x=l.x,o.scale.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},r._getRelativeMousePosition=function(o,l,u){var f=l.getBoundingClientRect(),h=document.documentElement||document.body.parentNode||document.body,d=window.pageXOffset!==void 0?window.pageXOffset:h.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:h.scrollTop,m=o.changedTouches,v,g;return m?(v=m[0].pageX-f.left-d,g=m[0].pageY-f.top-c):(v=o.pageX-f.left-d,g=o.pageY-f.top-c),{x:v/(l.clientWidth/(l.width||l.clientWidth)*u),y:g/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(n,i,s){var r={};n.exports=r;var a=s(0);(function(){r._registry={},r.register=function(o){if(r.isPlugin(o)||a.warn("Plugin.register:",r.toString(o),"does not implement all required fields."),o.name in r._registry){var l=r._registry[o.name],u=r.versionParse(o.version).number,f=r.versionParse(l.version).number;u>f?(a.warn("Plugin.register:",r.toString(l),"was upgraded to",r.toString(o)),r._registry[o.name]=o):u<f?a.warn("Plugin.register:",r.toString(l),"can not be downgraded to",r.toString(o)):o!==l&&a.warn("Plugin.register:",r.toString(o),"is already registered to different plugin object")}else r._registry[o.name]=o;return o},r.resolve=function(o){return r._registry[r.dependencyParse(o).name]},r.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},r.isPlugin=function(o){return o&&o.name&&o.version&&o.install},r.isUsed=function(o,l){return o.used.indexOf(l)>-1},r.isFor=function(o,l){var u=o.for&&r.dependencyParse(o.for);return!o.for||l.name===u.name&&r.versionSatisfies(l.version,u.range)},r.use=function(o,l){if(o.uses=(o.uses||[]).concat(l||[]),o.uses.length===0){a.warn("Plugin.use:",r.toString(o),"does not specify any dependencies to install.");return}for(var u=r.dependencies(o),f=a.topologicalSort(u),h=[],d=0;d<f.length;d+=1)if(f[d]!==o.name){var c=r.resolve(f[d]);if(!c){h.push("❌ "+f[d]);continue}r.isUsed(o,c.name)||(r.isFor(c,o)||(a.warn("Plugin.use:",r.toString(c),"is for",c.for,"but installed on",r.toString(o)+"."),c._warned=!0),c.install?c.install(o):(a.warn("Plugin.use:",r.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(h.push("🔶 "+r.toString(c)),delete c._warned):h.push("✅ "+r.toString(c)),o.used.push(c.name))}h.length>0&&a.info(h.join("  "))},r.dependencies=function(o,l){var u=r.dependencyParse(o),f=u.name;if(l=l||{},!(f in l)){o=r.resolve(o)||o,l[f]=a.map(o.uses||[],function(d){r.isPlugin(d)&&r.register(d);var c=r.dependencyParse(d),m=r.resolve(d);return m&&!r.versionSatisfies(m.version,c.range)?(a.warn("Plugin.dependencies:",r.toString(m),"does not satisfy",r.toString(c),"used by",r.toString(u)+"."),m._warned=!0,o._warned=!0):m||(a.warn("Plugin.dependencies:",r.toString(d),"used by",r.toString(u),"could not be resolved."),o._warned=!0),c.name});for(var h=0;h<l[f].length;h+=1)r.dependencies(l[f][h],l);return l}},r.dependencyParse=function(o){if(a.isString(o)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},r.versionParse=function(o){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var u=l.exec(o),f=Number(u[4]),h=Number(u[5]),d=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:o,operator:u[1]||u[2]||"",major:f,minor:h,patch:d,parts:[f,h,d],prerelease:u[7],number:f*1e8+h*1e4+d}},r.versionSatisfies=function(o,l){l=l||"*";var u=r.versionParse(l),f=r.versionParse(o);if(u.isRange){if(u.operator==="*"||o==="*")return!0;if(u.operator===">")return f.number>u.number;if(u.operator===">=")return f.number>=u.number;if(u.operator==="~")return f.major===u.major&&f.minor===u.minor&&f.patch>=u.patch;if(u.operator==="^")return u.major>0?f.major===u.major&&f.number>=u.number:u.minor>0?f.minor===u.minor&&f.patch>=u.patch:f.patch===u.patch}return o===l||o==="*"}})()},function(n,i){var s={};n.exports=s,function(){s.create=function(r){return{vertex:r,normalImpulse:0,tangentImpulse:0}}}()},function(n,i,s){var r={};n.exports=r;var a=s(7),o=s(18),l=s(13),u=s(19),f=s(5),h=s(6),d=s(10),c=s(0),m=s(4);(function(){r._deltaMax=1e3/60,r.create=function(v){v=v||{};var g={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},p=c.extend(g,v);return p.world=v.world||h.create({label:"World"}),p.pairs=v.pairs||u.create(),p.detector=v.detector||l.create(),p.detector.pairs=p.pairs,p.grid={buckets:[]},p.world.gravity=p.gravity,p.broadphase=p.grid,p.metrics={},p},r.update=function(v,g){var p=c.now(),x=v.world,y=v.detector,E=v.pairs,S=v.timing,M=S.timestamp,w;g>r._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",r._deltaMax.toFixed(3),"ms."),g=typeof g<"u"?g:c._baseDelta,g*=S.timeScale,S.timestamp+=g,S.lastDelta=g;var _={timestamp:S.timestamp,delta:g};f.trigger(v,"beforeUpdate",_);var T=h.allBodies(x),A=h.allConstraints(x);for(x.isModified&&(l.setBodies(y,T),h.setModified(x,!1,!1,!0)),v.enableSleeping&&a.update(T,g),r._bodiesApplyGravity(T,v.gravity),g>0&&r._bodiesUpdate(T,g),f.trigger(v,"beforeSolve",_),d.preSolveAll(T),w=0;w<v.constraintIterations;w++)d.solveAll(A,g);d.postSolveAll(T);var C=l.collisions(y);u.update(E,C,M),v.enableSleeping&&a.afterCollisions(E.list),E.collisionStart.length>0&&f.trigger(v,"collisionStart",{pairs:E.collisionStart,timestamp:S.timestamp,delta:g});var P=c.clamp(20/v.positionIterations,0,1);for(o.preSolvePosition(E.list),w=0;w<v.positionIterations;w++)o.solvePosition(E.list,g,P);for(o.postSolvePosition(T),d.preSolveAll(T),w=0;w<v.constraintIterations;w++)d.solveAll(A,g);for(d.postSolveAll(T),o.preSolveVelocity(E.list),w=0;w<v.velocityIterations;w++)o.solveVelocity(E.list,g);return r._bodiesUpdateVelocities(T),E.collisionActive.length>0&&f.trigger(v,"collisionActive",{pairs:E.collisionActive,timestamp:S.timestamp,delta:g}),E.collisionEnd.length>0&&f.trigger(v,"collisionEnd",{pairs:E.collisionEnd,timestamp:S.timestamp,delta:g}),r._bodiesClearForces(T),f.trigger(v,"afterUpdate",_),v.timing.lastElapsed=c.now()-p,v},r.merge=function(v,g){if(c.extend(v,g),g.world){v.world=g.world,r.clear(v);for(var p=h.allBodies(v.world),x=0;x<p.length;x++){var y=p[x];a.set(y,!1),y.id=c.nextId()}}},r.clear=function(v){u.clear(v.pairs),l.clear(v.detector)},r._bodiesClearForces=function(v){for(var g=v.length,p=0;p<g;p++){var x=v[p];x.force.x=0,x.force.y=0,x.torque=0}},r._bodiesApplyGravity=function(v,g){var p=typeof g.scale<"u"?g.scale:.001,x=v.length;if(!(g.x===0&&g.y===0||p===0))for(var y=0;y<x;y++){var E=v[y];E.isStatic||E.isSleeping||(E.force.y+=E.mass*g.y*p,E.force.x+=E.mass*g.x*p)}},r._bodiesUpdate=function(v,g){for(var p=v.length,x=0;x<p;x++){var y=v[x];y.isStatic||y.isSleeping||m.update(y,g)}},r._bodiesUpdateVelocities=function(v){for(var g=v.length,p=0;p<g;p++)m.updateVelocities(v[p])}})()},function(n,i,s){var r={};n.exports=r;var a=s(3),o=s(0),l=s(1);(function(){r._restingThresh=2,r._restingThreshTangent=Math.sqrt(6),r._positionDampen=.9,r._positionWarming=.8,r._frictionNormalMultiplier=5,r._frictionMaxStatic=Number.MAX_VALUE,r.preSolvePosition=function(u){var f,h,d,c=u.length;for(f=0;f<c;f++)h=u[f],h.isActive&&(d=h.contactCount,h.collision.parentA.totalContacts+=d,h.collision.parentB.totalContacts+=d)},r.solvePosition=function(u,f,h){var d,c,m,v,g,p,x,y,E=r._positionDampen*(h||1),S=o.clamp(f/o._baseDelta,0,1),M=u.length;for(d=0;d<M;d++)c=u[d],!(!c.isActive||c.isSensor)&&(m=c.collision,v=m.parentA,g=m.parentB,p=m.normal,c.separation=m.depth+p.x*(g.positionImpulse.x-v.positionImpulse.x)+p.y*(g.positionImpulse.y-v.positionImpulse.y));for(d=0;d<M;d++)c=u[d],!(!c.isActive||c.isSensor)&&(m=c.collision,v=m.parentA,g=m.parentB,p=m.normal,y=c.separation-c.slop*S,(v.isStatic||g.isStatic)&&(y*=2),v.isStatic||v.isSleeping||(x=E/v.totalContacts,v.positionImpulse.x+=p.x*y*x,v.positionImpulse.y+=p.y*y*x),g.isStatic||g.isSleeping||(x=E/g.totalContacts,g.positionImpulse.x-=p.x*y*x,g.positionImpulse.y-=p.y*y*x))},r.postSolvePosition=function(u){for(var f=r._positionWarming,h=u.length,d=a.translate,c=l.update,m=0;m<h;m++){var v=u[m],g=v.positionImpulse,p=g.x,x=g.y,y=v.velocity;if(v.totalContacts=0,p!==0||x!==0){for(var E=0;E<v.parts.length;E++){var S=v.parts[E];d(S.vertices,g),c(S.bounds,S.vertices,y),S.position.x+=p,S.position.y+=x}v.positionPrev.x+=p,v.positionPrev.y+=x,p*y.x+x*y.y<0?(g.x=0,g.y=0):(g.x*=f,g.y*=f)}}},r.preSolveVelocity=function(u){var f=u.length,h,d;for(h=0;h<f;h++){var c=u[h];if(!(!c.isActive||c.isSensor)){var m=c.contacts,v=c.contactCount,g=c.collision,p=g.parentA,x=g.parentB,y=g.normal,E=g.tangent;for(d=0;d<v;d++){var S=m[d],M=S.vertex,w=S.normalImpulse,_=S.tangentImpulse;if(w!==0||_!==0){var T=y.x*w+E.x*_,A=y.y*w+E.y*_;p.isStatic||p.isSleeping||(p.positionPrev.x+=T*p.inverseMass,p.positionPrev.y+=A*p.inverseMass,p.anglePrev+=p.inverseInertia*((M.x-p.position.x)*A-(M.y-p.position.y)*T)),x.isStatic||x.isSleeping||(x.positionPrev.x-=T*x.inverseMass,x.positionPrev.y-=A*x.inverseMass,x.anglePrev-=x.inverseInertia*((M.x-x.position.x)*A-(M.y-x.position.y)*T))}}}}},r.solveVelocity=function(u,f){var h=f/o._baseDelta,d=h*h,c=d*h,m=-r._restingThresh*h,v=r._restingThreshTangent,g=r._frictionNormalMultiplier*h,p=r._frictionMaxStatic,x=u.length,y,E,S,M;for(S=0;S<x;S++){var w=u[S];if(!(!w.isActive||w.isSensor)){var _=w.collision,T=_.parentA,A=_.parentB,C=_.normal.x,P=_.normal.y,D=_.tangent.x,U=_.tangent.y,L=w.inverseMass,N=w.friction*w.frictionStatic*g,F=w.contacts,O=w.contactCount,G=1/O,K=T.position.x-T.positionPrev.x,te=T.position.y-T.positionPrev.y,se=T.angle-T.anglePrev,Me=A.position.x-A.positionPrev.x,re=A.position.y-A.positionPrev.y,ae=A.angle-A.anglePrev;for(M=0;M<O;M++){var W=F[M],ee=W.vertex,ie=ee.x-T.position.x,xe=ee.y-T.position.y,be=ee.x-A.position.x,Re=ee.y-A.position.y,We=K-xe*se,Ve=te+ie*se,rt=Me-Re*ae,je=re+be*ae,Ne=We-rt,Ke=Ve-je,Oe=C*Ne+P*Ke,$e=D*Ne+U*Ke,B=w.separation+Oe,at=Math.min(B,1);at=B<0?0:at;var He=at*N;$e<-He||$e>He?(E=$e>0?$e:-$e,y=w.friction*($e>0?1:-1)*c,y<-E?y=-E:y>E&&(y=E)):(y=$e,E=p);var lt=ie*P-xe*C,ge=be*P-Re*C,xt=G/(L+T.inverseInertia*lt*lt+A.inverseInertia*ge*ge),I=(1+w.restitution)*Oe*xt;if(y*=xt,Oe<m)W.normalImpulse=0;else{var R=W.normalImpulse;W.normalImpulse+=I,W.normalImpulse>0&&(W.normalImpulse=0),I=W.normalImpulse-R}if($e<-v||$e>v)W.tangentImpulse=0;else{var j=W.tangentImpulse;W.tangentImpulse+=y,W.tangentImpulse<-E&&(W.tangentImpulse=-E),W.tangentImpulse>E&&(W.tangentImpulse=E),y=W.tangentImpulse-j}var Z=C*I+D*y,oe=P*I+U*y;T.isStatic||T.isSleeping||(T.positionPrev.x+=Z*T.inverseMass,T.positionPrev.y+=oe*T.inverseMass,T.anglePrev+=(ie*oe-xe*Z)*T.inverseInertia),A.isStatic||A.isSleeping||(A.positionPrev.x-=Z*A.inverseMass,A.positionPrev.y-=oe*A.inverseMass,A.anglePrev-=(be*oe-Re*Z)*A.inverseInertia)}}}}})()},function(n,i,s){var r={};n.exports=r;var a=s(9),o=s(0);(function(){r.create=function(l){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},r.update=function(l,u,f){var h=a.update,d=a.create,c=a.setActive,m=l.table,v=l.list,g=v.length,p=g,x=l.collisionStart,y=l.collisionEnd,E=l.collisionActive,S=u.length,M=0,w=0,_=0,T,A,C;for(C=0;C<S;C++)T=u[C],A=T.pair,A?(A.isActive&&(E[_++]=A),h(A,T,f)):(A=d(T,f),m[A.id]=A,x[M++]=A,v[p++]=A);for(p=0,g=v.length,C=0;C<g;C++)A=v[C],A.timeUpdated>=f?v[p++]=A:(c(A,!1,f),A.collision.bodyA.sleepCounter>0&&A.collision.bodyB.sleepCounter>0?v[p++]=A:(y[w++]=A,delete m[A.id]));v.length!==p&&(v.length=p),x.length!==M&&(x.length=M),y.length!==w&&(y.length=w),E.length!==_&&(E.length=_)},r.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(n,i,s){var r=n.exports=s(21);r.Axes=s(11),r.Bodies=s(12),r.Body=s(4),r.Bounds=s(1),r.Collision=s(8),r.Common=s(0),r.Composite=s(6),r.Composites=s(22),r.Constraint=s(10),r.Contact=s(16),r.Detector=s(13),r.Engine=s(17),r.Events=s(5),r.Grid=s(23),r.Mouse=s(14),r.MouseConstraint=s(24),r.Pair=s(9),r.Pairs=s(19),r.Plugin=s(15),r.Query=s(25),r.Render=s(26),r.Resolver=s(18),r.Runner=s(27),r.SAT=s(28),r.Sleeping=s(7),r.Svg=s(29),r.Vector=s(2),r.Vertices=s(3),r.World=s(30),r.Engine.run=r.Runner.run,r.Common.deprecated(r.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(n,i,s){var r={};n.exports=r;var a=s(15),o=s(0);(function(){r.name="matter-js",r.version="0.20.0",r.uses=[],r.used=[],r.use=function(){a.use(r,Array.prototype.slice.call(arguments))},r.before=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathBefore(r,l,u)},r.after=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathAfter(r,l,u)}})()},function(n,i,s){var r={};n.exports=r;var a=s(6),o=s(10),l=s(0),u=s(4),f=s(12),h=l.deprecated;(function(){r.stack=function(d,c,m,v,g,p,x){for(var y=a.create({label:"Stack"}),E=d,S=c,M,w=0,_=0;_<v;_++){for(var T=0,A=0;A<m;A++){var C=x(E,S,A,_,M,w);if(C){var P=C.bounds.max.y-C.bounds.min.y,D=C.bounds.max.x-C.bounds.min.x;P>T&&(T=P),u.translate(C,{x:D*.5,y:P*.5}),E=C.bounds.max.x+g,a.addBody(y,C),M=C,w+=1}else E+=g}S+=T+p,E=d}return y},r.chain=function(d,c,m,v,g,p){for(var x=d.bodies,y=1;y<x.length;y++){var E=x[y-1],S=x[y],M=E.bounds.max.y-E.bounds.min.y,w=E.bounds.max.x-E.bounds.min.x,_=S.bounds.max.y-S.bounds.min.y,T=S.bounds.max.x-S.bounds.min.x,A={bodyA:E,pointA:{x:w*c,y:M*m},bodyB:S,pointB:{x:T*v,y:_*g}},C=l.extend(A,p);a.addConstraint(d,o.create(C))}return d.label+=" Chain",d},r.mesh=function(d,c,m,v,g){var p=d.bodies,x,y,E,S,M;for(x=0;x<m;x++){for(y=1;y<c;y++)E=p[y-1+x*c],S=p[y+x*c],a.addConstraint(d,o.create(l.extend({bodyA:E,bodyB:S},g)));if(x>0)for(y=0;y<c;y++)E=p[y+(x-1)*c],S=p[y+x*c],a.addConstraint(d,o.create(l.extend({bodyA:E,bodyB:S},g))),v&&y>0&&(M=p[y-1+(x-1)*c],a.addConstraint(d,o.create(l.extend({bodyA:M,bodyB:S},g)))),v&&y<c-1&&(M=p[y+1+(x-1)*c],a.addConstraint(d,o.create(l.extend({bodyA:M,bodyB:S},g))))}return d.label+=" Mesh",d},r.pyramid=function(d,c,m,v,g,p,x){return r.stack(d,c,m,v,g,p,function(y,E,S,M,w,_){var T=Math.min(v,Math.ceil(m/2)),A=w?w.bounds.max.x-w.bounds.min.x:0;if(!(M>T)){M=T-M;var C=M,P=m-1-M;if(!(S<C||S>P)){_===1&&u.translate(w,{x:(S+(m%2===1?1:-1))*A,y:0});var D=w?S*A:0;return x(d+D+S*g,E,S,M,w,_)}}})},r.newtonsCradle=function(d,c,m,v,g){for(var p=a.create({label:"Newtons Cradle"}),x=0;x<m;x++){var y=1.9,E=f.circle(d+x*(v*y),c+g,v,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),S=o.create({pointA:{x:d+x*(v*y),y:c},bodyB:E});a.addBody(p,E),a.addConstraint(p,S)}return p},h(r,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),r.car=function(d,c,m,v,g){var p=u.nextGroup(!0),x=20,y=-m*.5+x,E=m*.5-x,S=0,M=a.create({label:"Car"}),w=f.rectangle(d,c,m,v,{collisionFilter:{group:p},chamfer:{radius:v*.5},density:2e-4}),_=f.circle(d+y,c+S,g,{collisionFilter:{group:p},friction:.8}),T=f.circle(d+E,c+S,g,{collisionFilter:{group:p},friction:.8}),A=o.create({bodyB:w,pointB:{x:y,y:S},bodyA:_,stiffness:1,length:0}),C=o.create({bodyB:w,pointB:{x:E,y:S},bodyA:T,stiffness:1,length:0});return a.addBody(M,w),a.addBody(M,_),a.addBody(M,T),a.addConstraint(M,A),a.addConstraint(M,C),M},h(r,"car","Composites.car ➤ moved to car example"),r.softBody=function(d,c,m,v,g,p,x,y,E,S){E=l.extend({inertia:1/0},E),S=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},S);var M=r.stack(d,c,m,v,g,p,function(w,_){return f.circle(w,_,y,E)});return r.mesh(M,m,v,x,S),M.label="Soft Body",M},h(r,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(n,i,s){var r={};n.exports=r;var a=s(9),o=s(0),l=o.deprecated;(function(){r.create=function(u){var f={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(f,u)},r.update=function(u,f,h,d){var c,m,v,g=h.world,p=u.buckets,x,y,E=!1;for(c=0;c<f.length;c++){var S=f[c];if(!(S.isSleeping&&!d)&&!(g.bounds&&(S.bounds.max.x<g.bounds.min.x||S.bounds.min.x>g.bounds.max.x||S.bounds.max.y<g.bounds.min.y||S.bounds.min.y>g.bounds.max.y))){var M=r._getRegion(u,S);if(!S.region||M.id!==S.region.id||d){(!S.region||d)&&(S.region=M);var w=r._regionUnion(M,S.region);for(m=w.startCol;m<=w.endCol;m++)for(v=w.startRow;v<=w.endRow;v++){y=r._getBucketId(m,v),x=p[y];var _=m>=M.startCol&&m<=M.endCol&&v>=M.startRow&&v<=M.endRow,T=m>=S.region.startCol&&m<=S.region.endCol&&v>=S.region.startRow&&v<=S.region.endRow;!_&&T&&T&&x&&r._bucketRemoveBody(u,x,S),(S.region===M||_&&!T||d)&&(x||(x=r._createBucket(p,y)),r._bucketAddBody(u,x,S))}S.region=M,E=!0}}}E&&(u.pairsList=r._createActivePairsList(u))},l(r,"update","Grid.update ➤ replaced by Matter.Detector"),r.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(r,"clear","Grid.clear ➤ replaced by Matter.Detector"),r._regionUnion=function(u,f){var h=Math.min(u.startCol,f.startCol),d=Math.max(u.endCol,f.endCol),c=Math.min(u.startRow,f.startRow),m=Math.max(u.endRow,f.endRow);return r._createRegion(h,d,c,m)},r._getRegion=function(u,f){var h=f.bounds,d=Math.floor(h.min.x/u.bucketWidth),c=Math.floor(h.max.x/u.bucketWidth),m=Math.floor(h.min.y/u.bucketHeight),v=Math.floor(h.max.y/u.bucketHeight);return r._createRegion(d,c,m,v)},r._createRegion=function(u,f,h,d){return{id:u+","+f+","+h+","+d,startCol:u,endCol:f,startRow:h,endRow:d}},r._getBucketId=function(u,f){return"C"+u+"R"+f},r._createBucket=function(u,f){var h=u[f]=[];return h},r._bucketAddBody=function(u,f,h){var d=u.pairs,c=a.id,m=f.length,v;for(v=0;v<m;v++){var g=f[v];if(!(h.id===g.id||h.isStatic&&g.isStatic)){var p=c(h,g),x=d[p];x?x[2]+=1:d[p]=[h,g,1]}}f.push(h)},r._bucketRemoveBody=function(u,f,h){var d=u.pairs,c=a.id,m;f.splice(o.indexOf(f,h),1);var v=f.length;for(m=0;m<v;m++){var g=d[c(h,f[m])];g&&(g[2]-=1)}},r._createActivePairsList=function(u){var f,h=u.pairs,d=o.keys(h),c=d.length,m=[],v;for(v=0;v<c;v++)f=h[d[v]],f[2]>0?m.push(f):delete h[d[v]];return m}})()},function(n,i,s){var r={};n.exports=r;var a=s(3),o=s(7),l=s(14),u=s(5),f=s(13),h=s(10),d=s(6),c=s(0),m=s(1);(function(){r.create=function(v,g){var p=(v?v.mouse:null)||(g?g.mouse:null);p||(v&&v.render&&v.render.canvas?p=l.create(v.render.canvas):g&&g.element?p=l.create(g.element):(p=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var x=h.create({label:"Mouse Constraint",pointA:p.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),y={type:"mouseConstraint",mouse:p,element:null,body:null,constraint:x,collisionFilter:{category:1,mask:4294967295,group:0}},E=c.extend(y,g);return u.on(v,"beforeUpdate",function(){var S=d.allBodies(v.world);r.update(E,S),r._triggerEvents(E)}),E},r.update=function(v,g){var p=v.mouse,x=v.constraint,y=v.body;if(p.button===0){if(x.bodyB)o.set(x.bodyB,!1),x.pointA=p.position;else for(var E=0;E<g.length;E++)if(y=g[E],m.contains(y.bounds,p.position)&&f.canCollide(y.collisionFilter,v.collisionFilter))for(var S=y.parts.length>1?1:0;S<y.parts.length;S++){var M=y.parts[S];if(a.contains(M.vertices,p.position)){x.pointA=p.position,x.bodyB=v.body=y,x.pointB={x:p.position.x-y.position.x,y:p.position.y-y.position.y},x.angleB=y.angle,o.set(y,!1),u.trigger(v,"startdrag",{mouse:p,body:y});break}}}else x.bodyB=v.body=null,x.pointB=null,y&&u.trigger(v,"enddrag",{mouse:p,body:y})},r._triggerEvents=function(v){var g=v.mouse,p=g.sourceEvents;p.mousemove&&u.trigger(v,"mousemove",{mouse:g}),p.mousedown&&u.trigger(v,"mousedown",{mouse:g}),p.mouseup&&u.trigger(v,"mouseup",{mouse:g}),l.clearSourceEvents(g)}})()},function(n,i,s){var r={};n.exports=r;var a=s(2),o=s(8),l=s(1),u=s(12),f=s(3);(function(){r.collides=function(h,d){for(var c=[],m=d.length,v=h.bounds,g=o.collides,p=l.overlaps,x=0;x<m;x++){var y=d[x],E=y.parts.length,S=E===1?0:1;if(p(y.bounds,v))for(var M=S;M<E;M++){var w=y.parts[M];if(p(w.bounds,v)){var _=g(w,h);if(_){c.push(_);break}}}}return c},r.ray=function(h,d,c,m){m=m||1e-100;for(var v=a.angle(d,c),g=a.magnitude(a.sub(d,c)),p=(c.x+d.x)*.5,x=(c.y+d.y)*.5,y=u.rectangle(p,x,g,m,{angle:v}),E=r.collides(y,h),S=0;S<E.length;S+=1){var M=E[S];M.body=M.bodyB=M.bodyA}return E},r.region=function(h,d,c){for(var m=[],v=0;v<h.length;v++){var g=h[v],p=l.overlaps(g.bounds,d);(p&&!c||!p&&c)&&m.push(g)}return m},r.point=function(h,d){for(var c=[],m=0;m<h.length;m++){var v=h[m];if(l.contains(v.bounds,d))for(var g=v.parts.length===1?0:1;g<v.parts.length;g++){var p=v.parts[g];if(l.contains(p.bounds,d)&&f.contains(p.vertices,d)){c.push(v);break}}}return c}})()},function(n,i,s){var r={};n.exports=r;var a=s(4),o=s(0),l=s(6),u=s(1),f=s(5),h=s(2),d=s(14);(function(){var c,m;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(S){window.setTimeout(function(){S(o.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),r._goodFps=30,r._goodDelta=1e3/60,r.create=function(S){var M={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!S.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=o.extend(M,S);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=S.mouse,w.engine=S.engine,w.canvas=w.canvas||p(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=r,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&r.setPixelRatio(w,w.options.pixelRatio),o.isElement(w.element)&&w.element.appendChild(w.canvas),w},r.run=function(S){(function M(w){S.frameRequestId=c(M),v(S,w),r.world(S,w),S.context.setTransform(S.options.pixelRatio,0,0,S.options.pixelRatio,0,0),(S.options.showStats||S.options.showDebug)&&r.stats(S,S.context,w),(S.options.showPerformance||S.options.showDebug)&&r.performance(S,S.context,w),S.context.setTransform(1,0,0,1,0,0)})()},r.stop=function(S){m(S.frameRequestId)},r.setPixelRatio=function(S,M){var w=S.options,_=S.canvas;M==="auto"&&(M=x(_)),w.pixelRatio=M,_.setAttribute("data-pixel-ratio",M),_.width=w.width*M,_.height=w.height*M,_.style.width=w.width+"px",_.style.height=w.height+"px"},r.setSize=function(S,M,w){S.options.width=M,S.options.height=w,S.bounds.max.x=S.bounds.min.x+M,S.bounds.max.y=S.bounds.min.y+w,S.options.pixelRatio!==1?r.setPixelRatio(S,S.options.pixelRatio):(S.canvas.width=M,S.canvas.height=w)},r.lookAt=function(S,M,w,_){_=typeof _<"u"?_:!0,M=o.isArray(M)?M:[M],w=w||{x:0,y:0};for(var T={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},A=0;A<M.length;A+=1){var C=M[A],P=C.bounds?C.bounds.min:C.min||C.position||C,D=C.bounds?C.bounds.max:C.max||C.position||C;P&&D&&(P.x<T.min.x&&(T.min.x=P.x),D.x>T.max.x&&(T.max.x=D.x),P.y<T.min.y&&(T.min.y=P.y),D.y>T.max.y&&(T.max.y=D.y))}var U=T.max.x-T.min.x+2*w.x,L=T.max.y-T.min.y+2*w.y,N=S.canvas.height,F=S.canvas.width,O=F/N,G=U/L,K=1,te=1;G>O?te=G/O:K=O/G,S.options.hasBounds=!0,S.bounds.min.x=T.min.x,S.bounds.max.x=T.min.x+U*K,S.bounds.min.y=T.min.y,S.bounds.max.y=T.min.y+L*te,_&&(S.bounds.min.x+=U*.5-U*K*.5,S.bounds.max.x+=U*.5-U*K*.5,S.bounds.min.y+=L*.5-L*te*.5,S.bounds.max.y+=L*.5-L*te*.5),S.bounds.min.x-=w.x,S.bounds.max.x-=w.x,S.bounds.min.y-=w.y,S.bounds.max.y-=w.y,S.mouse&&(d.setScale(S.mouse,{x:(S.bounds.max.x-S.bounds.min.x)/S.canvas.width,y:(S.bounds.max.y-S.bounds.min.y)/S.canvas.height}),d.setOffset(S.mouse,S.bounds.min))},r.startViewTransform=function(S){var M=S.bounds.max.x-S.bounds.min.x,w=S.bounds.max.y-S.bounds.min.y,_=M/S.options.width,T=w/S.options.height;S.context.setTransform(S.options.pixelRatio/_,0,0,S.options.pixelRatio/T,0,0),S.context.translate(-S.bounds.min.x,-S.bounds.min.y)},r.endViewTransform=function(S){S.context.setTransform(S.options.pixelRatio,0,0,S.options.pixelRatio,0,0)},r.world=function(S,M){var w=o.now(),_=S.engine,T=_.world,A=S.canvas,C=S.context,P=S.options,D=S.timing,U=l.allBodies(T),L=l.allConstraints(T),N=P.wireframes?P.wireframeBackground:P.background,F=[],O=[],G,K={timestamp:_.timing.timestamp};if(f.trigger(S,"beforeRender",K),S.currentBackground!==N&&E(S,N),C.globalCompositeOperation="source-in",C.fillStyle="transparent",C.fillRect(0,0,A.width,A.height),C.globalCompositeOperation="source-over",P.hasBounds){for(G=0;G<U.length;G++){var te=U[G];u.overlaps(te.bounds,S.bounds)&&F.push(te)}for(G=0;G<L.length;G++){var se=L[G],Me=se.bodyA,re=se.bodyB,ae=se.pointA,W=se.pointB;Me&&(ae=h.add(Me.position,se.pointA)),re&&(W=h.add(re.position,se.pointB)),!(!ae||!W)&&(u.contains(S.bounds,ae)||u.contains(S.bounds,W))&&O.push(se)}r.startViewTransform(S),S.mouse&&(d.setScale(S.mouse,{x:(S.bounds.max.x-S.bounds.min.x)/S.options.width,y:(S.bounds.max.y-S.bounds.min.y)/S.options.height}),d.setOffset(S.mouse,S.bounds.min))}else O=L,F=U,S.options.pixelRatio!==1&&S.context.setTransform(S.options.pixelRatio,0,0,S.options.pixelRatio,0,0);!P.wireframes||_.enableSleeping&&P.showSleeping?r.bodies(S,F,C):(P.showConvexHulls&&r.bodyConvexHulls(S,F,C),r.bodyWireframes(S,F,C)),P.showBounds&&r.bodyBounds(S,F,C),(P.showAxes||P.showAngleIndicator)&&r.bodyAxes(S,F,C),P.showPositions&&r.bodyPositions(S,F,C),P.showVelocity&&r.bodyVelocity(S,F,C),P.showIds&&r.bodyIds(S,F,C),P.showSeparations&&r.separations(S,_.pairs.list,C),P.showCollisions&&r.collisions(S,_.pairs.list,C),P.showVertexNumbers&&r.vertexNumbers(S,F,C),P.showMousePosition&&r.mousePosition(S,S.mouse,C),r.constraints(O,C),P.hasBounds&&r.endViewTransform(S),f.trigger(S,"afterRender",K),D.lastElapsed=o.now()-w},r.stats=function(S,M,w){for(var _=S.engine,T=_.world,A=l.allBodies(T),C=0,P=55,D=44,U=0,L=0,N=0;N<A.length;N+=1)C+=A[N].parts.length;var F={Part:C,Body:A.length,Cons:l.allConstraints(T).length,Comp:l.allComposites(T).length,Pair:_.pairs.list.length};M.fillStyle="#0e0f19",M.fillRect(U,L,P*5.5,D),M.font="12px Arial",M.textBaseline="top",M.textAlign="right";for(var O in F){var G=F[O];M.fillStyle="#aaa",M.fillText(O,U+P,L+8),M.fillStyle="#eee",M.fillText(G,U+P,L+26),U+=P}},r.performance=function(S,M){var w=S.engine,_=S.timing,T=_.deltaHistory,A=_.elapsedHistory,C=_.timestampElapsedHistory,P=_.engineDeltaHistory,D=_.engineUpdatesHistory,U=_.engineElapsedHistory,L=w.timing.lastUpdatesPerFrame,N=w.timing.lastDelta,F=g(T),O=g(A),G=g(P),K=g(D),te=g(U),se=g(C),Me=se/F||0,re=Math.round(F/N),ae=1e3/F||0,W=4,ee=12,ie=60,xe=34,be=10,Re=69;M.fillStyle="#0e0f19",M.fillRect(0,50,ee*5+ie*6+22,xe),r.status(M,be,Re,ie,W,T.length,Math.round(ae)+" fps",ae/r._goodFps,function(We){return T[We]/F-1}),r.status(M,be+ee+ie,Re,ie,W,P.length,N.toFixed(2)+" dt",r._goodDelta/N,function(We){return P[We]/G-1}),r.status(M,be+(ee+ie)*2,Re,ie,W,D.length,L+" upf",Math.pow(o.clamp(K/re||1,0,1),4),function(We){return D[We]/K-1}),r.status(M,be+(ee+ie)*3,Re,ie,W,U.length,te.toFixed(2)+" ut",1-L*te/r._goodFps,function(We){return U[We]/te-1}),r.status(M,be+(ee+ie)*4,Re,ie,W,A.length,O.toFixed(2)+" rt",1-O/r._goodFps,function(We){return A[We]/O-1}),r.status(M,be+(ee+ie)*5,Re,ie,W,C.length,Me.toFixed(2)+" x",Me*Me*Me,function(We){return(C[We]/T[We]/Me||0)-1})},r.status=function(S,M,w,_,T,A,C,P,D){S.strokeStyle="#888",S.fillStyle="#444",S.lineWidth=1,S.fillRect(M,w+7,_,1),S.beginPath(),S.moveTo(M,w+7-T*o.clamp(.4*D(0),-2,2));for(var U=0;U<_;U+=1)S.lineTo(M+U,w+7-(U<A?T*o.clamp(.4*D(U),-2,2):0));S.stroke(),S.fillStyle="hsl("+o.clamp(25+95*P,0,120)+",100%,60%)",S.fillRect(M,w-7,4,4),S.font="12px Arial",S.textBaseline="middle",S.textAlign="right",S.fillStyle="#eee",S.fillText(C,M+_,w-5)},r.constraints=function(S,M){for(var w=M,_=0;_<S.length;_++){var T=S[_];if(!(!T.render.visible||!T.pointA||!T.pointB)){var A=T.bodyA,C=T.bodyB,P,D;if(A?P=h.add(A.position,T.pointA):P=T.pointA,T.render.type==="pin")w.beginPath(),w.arc(P.x,P.y,3,0,2*Math.PI),w.closePath();else{if(C?D=h.add(C.position,T.pointB):D=T.pointB,w.beginPath(),w.moveTo(P.x,P.y),T.render.type==="spring")for(var U=h.sub(D,P),L=h.perp(h.normalise(U)),N=Math.ceil(o.clamp(T.length/5,12,20)),F,O=1;O<N;O+=1)F=O%2===0?1:-1,w.lineTo(P.x+U.x*(O/N)+L.x*F*4,P.y+U.y*(O/N)+L.y*F*4);w.lineTo(D.x,D.y)}T.render.lineWidth&&(w.lineWidth=T.render.lineWidth,w.strokeStyle=T.render.strokeStyle,w.stroke()),T.render.anchors&&(w.fillStyle=T.render.strokeStyle,w.beginPath(),w.arc(P.x,P.y,3,0,2*Math.PI),w.arc(D.x,D.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},r.bodies=function(S,M,w){var _=w;S.engine;var T=S.options,A=T.showInternalEdges||!T.wireframes,C,P,D,U;for(D=0;D<M.length;D++)if(C=M[D],!!C.render.visible){for(U=C.parts.length>1?1:0;U<C.parts.length;U++)if(P=C.parts[U],!!P.render.visible){if(T.showSleeping&&C.isSleeping?_.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(_.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!T.wireframes){var L=P.render.sprite,N=y(S,L.texture);_.translate(P.position.x,P.position.y),_.rotate(P.angle),_.drawImage(N,N.width*-L.xOffset*L.xScale,N.height*-L.yOffset*L.yScale,N.width*L.xScale,N.height*L.yScale),_.rotate(-P.angle),_.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)_.beginPath(),_.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{_.beginPath(),_.moveTo(P.vertices[0].x,P.vertices[0].y);for(var F=1;F<P.vertices.length;F++)!P.vertices[F-1].isInternal||A?_.lineTo(P.vertices[F].x,P.vertices[F].y):_.moveTo(P.vertices[F].x,P.vertices[F].y),P.vertices[F].isInternal&&!A&&_.moveTo(P.vertices[(F+1)%P.vertices.length].x,P.vertices[(F+1)%P.vertices.length].y);_.lineTo(P.vertices[0].x,P.vertices[0].y),_.closePath()}T.wireframes?(_.lineWidth=1,_.strokeStyle=S.options.wireframeStrokeStyle,_.stroke()):(_.fillStyle=P.render.fillStyle,P.render.lineWidth&&(_.lineWidth=P.render.lineWidth,_.strokeStyle=P.render.strokeStyle,_.stroke()),_.fill())}_.globalAlpha=1}}},r.bodyWireframes=function(S,M,w){var _=w,T=S.options.showInternalEdges,A,C,P,D,U;for(_.beginPath(),P=0;P<M.length;P++)if(A=M[P],!!A.render.visible)for(U=A.parts.length>1?1:0;U<A.parts.length;U++){for(C=A.parts[U],_.moveTo(C.vertices[0].x,C.vertices[0].y),D=1;D<C.vertices.length;D++)!C.vertices[D-1].isInternal||T?_.lineTo(C.vertices[D].x,C.vertices[D].y):_.moveTo(C.vertices[D].x,C.vertices[D].y),C.vertices[D].isInternal&&!T&&_.moveTo(C.vertices[(D+1)%C.vertices.length].x,C.vertices[(D+1)%C.vertices.length].y);_.lineTo(C.vertices[0].x,C.vertices[0].y)}_.lineWidth=1,_.strokeStyle=S.options.wireframeStrokeStyle,_.stroke()},r.bodyConvexHulls=function(S,M,w){var _=w,T,A,C;for(_.beginPath(),A=0;A<M.length;A++)if(T=M[A],!(!T.render.visible||T.parts.length===1)){for(_.moveTo(T.vertices[0].x,T.vertices[0].y),C=1;C<T.vertices.length;C++)_.lineTo(T.vertices[C].x,T.vertices[C].y);_.lineTo(T.vertices[0].x,T.vertices[0].y)}_.lineWidth=1,_.strokeStyle="rgba(255,255,255,0.2)",_.stroke()},r.vertexNumbers=function(S,M,w){var _=w,T,A,C;for(T=0;T<M.length;T++){var P=M[T].parts;for(C=P.length>1?1:0;C<P.length;C++){var D=P[C];for(A=0;A<D.vertices.length;A++)_.fillStyle="rgba(255,255,255,0.2)",_.fillText(T+"_"+A,D.position.x+(D.vertices[A].x-D.position.x)*.8,D.position.y+(D.vertices[A].y-D.position.y)*.8)}}},r.mousePosition=function(S,M,w){var _=w;_.fillStyle="rgba(255,255,255,0.8)",_.fillText(M.position.x+"  "+M.position.y,M.position.x+5,M.position.y-5)},r.bodyBounds=function(S,M,w){var _=w;S.engine;var T=S.options;_.beginPath();for(var A=0;A<M.length;A++){var C=M[A];if(C.render.visible)for(var P=M[A].parts,D=P.length>1?1:0;D<P.length;D++){var U=P[D];_.rect(U.bounds.min.x,U.bounds.min.y,U.bounds.max.x-U.bounds.min.x,U.bounds.max.y-U.bounds.min.y)}}T.wireframes?_.strokeStyle="rgba(255,255,255,0.08)":_.strokeStyle="rgba(0,0,0,0.1)",_.lineWidth=1,_.stroke()},r.bodyAxes=function(S,M,w){var _=w;S.engine;var T=S.options,A,C,P,D;for(_.beginPath(),C=0;C<M.length;C++){var U=M[C],L=U.parts;if(U.render.visible)if(T.showAxes)for(P=L.length>1?1:0;P<L.length;P++)for(A=L[P],D=0;D<A.axes.length;D++){var N=A.axes[D];_.moveTo(A.position.x,A.position.y),_.lineTo(A.position.x+N.x*20,A.position.y+N.y*20)}else for(P=L.length>1?1:0;P<L.length;P++)for(A=L[P],D=0;D<A.axes.length;D++)_.moveTo(A.position.x,A.position.y),_.lineTo((A.vertices[0].x+A.vertices[A.vertices.length-1].x)/2,(A.vertices[0].y+A.vertices[A.vertices.length-1].y)/2)}T.wireframes?(_.strokeStyle="indianred",_.lineWidth=1):(_.strokeStyle="rgba(255, 255, 255, 0.4)",_.globalCompositeOperation="overlay",_.lineWidth=2),_.stroke(),_.globalCompositeOperation="source-over"},r.bodyPositions=function(S,M,w){var _=w;S.engine;var T=S.options,A,C,P,D;for(_.beginPath(),P=0;P<M.length;P++)if(A=M[P],!!A.render.visible)for(D=0;D<A.parts.length;D++)C=A.parts[D],_.arc(C.position.x,C.position.y,3,0,2*Math.PI,!1),_.closePath();for(T.wireframes?_.fillStyle="indianred":_.fillStyle="rgba(0,0,0,0.5)",_.fill(),_.beginPath(),P=0;P<M.length;P++)A=M[P],A.render.visible&&(_.arc(A.positionPrev.x,A.positionPrev.y,2,0,2*Math.PI,!1),_.closePath());_.fillStyle="rgba(255,165,0,0.8)",_.fill()},r.bodyVelocity=function(S,M,w){var _=w;_.beginPath();for(var T=0;T<M.length;T++){var A=M[T];if(A.render.visible){var C=a.getVelocity(A);_.moveTo(A.position.x,A.position.y),_.lineTo(A.position.x+C.x,A.position.y+C.y)}}_.lineWidth=3,_.strokeStyle="cornflowerblue",_.stroke()},r.bodyIds=function(S,M,w){var _=w,T,A;for(T=0;T<M.length;T++)if(M[T].render.visible){var C=M[T].parts;for(A=C.length>1?1:0;A<C.length;A++){var P=C[A];_.font="12px Arial",_.fillStyle="rgba(255,255,255,0.5)",_.fillText(P.id,P.position.x+10,P.position.y-10)}}},r.collisions=function(S,M,w){var _=w,T=S.options,A,C,P,D;for(_.beginPath(),P=0;P<M.length;P++)if(A=M[P],!!A.isActive)for(C=A.collision,D=0;D<A.contactCount;D++){var U=A.contacts[D],L=U.vertex;_.rect(L.x-1.5,L.y-1.5,3.5,3.5)}for(T.wireframes?_.fillStyle="rgba(255,255,255,0.7)":_.fillStyle="orange",_.fill(),_.beginPath(),P=0;P<M.length;P++)if(A=M[P],!!A.isActive&&(C=A.collision,A.contactCount>0)){var N=A.contacts[0].vertex.x,F=A.contacts[0].vertex.y;A.contactCount===2&&(N=(A.contacts[0].vertex.x+A.contacts[1].vertex.x)/2,F=(A.contacts[0].vertex.y+A.contacts[1].vertex.y)/2),C.bodyB===C.supports[0].body||C.bodyA.isStatic===!0?_.moveTo(N-C.normal.x*8,F-C.normal.y*8):_.moveTo(N+C.normal.x*8,F+C.normal.y*8),_.lineTo(N,F)}T.wireframes?_.strokeStyle="rgba(255,165,0,0.7)":_.strokeStyle="orange",_.lineWidth=1,_.stroke()},r.separations=function(S,M,w){var _=w,T=S.options,A,C,P,D,U;for(_.beginPath(),U=0;U<M.length;U++)if(A=M[U],!!A.isActive){C=A.collision,P=C.bodyA,D=C.bodyB;var L=1;!D.isStatic&&!P.isStatic&&(L=.5),D.isStatic&&(L=0),_.moveTo(D.position.x,D.position.y),_.lineTo(D.position.x-C.penetration.x*L,D.position.y-C.penetration.y*L),L=1,!D.isStatic&&!P.isStatic&&(L=.5),P.isStatic&&(L=0),_.moveTo(P.position.x,P.position.y),_.lineTo(P.position.x+C.penetration.x*L,P.position.y+C.penetration.y*L)}T.wireframes?_.strokeStyle="rgba(255,165,0,0.5)":_.strokeStyle="orange",_.stroke()},r.inspector=function(S,M){S.engine;var w=S.selected,_=S.render,T=_.options,A;if(T.hasBounds){var C=_.bounds.max.x-_.bounds.min.x,P=_.bounds.max.y-_.bounds.min.y,D=C/_.options.width,U=P/_.options.height;M.scale(1/D,1/U),M.translate(-_.bounds.min.x,-_.bounds.min.y)}for(var L=0;L<w.length;L++){var N=w[L].data;switch(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.9)",M.setLineDash([1,2]),N.type){case"body":A=N.bounds,M.beginPath(),M.rect(Math.floor(A.min.x-3),Math.floor(A.min.y-3),Math.floor(A.max.x-A.min.x+6),Math.floor(A.max.y-A.min.y+6)),M.closePath(),M.stroke();break;case"constraint":var F=N.pointA;N.bodyA&&(F=N.pointB),M.beginPath(),M.arc(F.x,F.y,10,0,2*Math.PI),M.closePath(),M.stroke();break}M.setLineDash([]),M.translate(-.5,-.5)}S.selectStart!==null&&(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.6)",M.fillStyle="rgba(255,165,0,0.1)",A=S.selectBounds,M.beginPath(),M.rect(Math.floor(A.min.x),Math.floor(A.min.y),Math.floor(A.max.x-A.min.x),Math.floor(A.max.y-A.min.y)),M.closePath(),M.stroke(),M.fill(),M.translate(-.5,-.5)),T.hasBounds&&M.setTransform(1,0,0,1,0,0)};var v=function(S,M){var w=S.engine,_=S.timing,T=_.historySize,A=w.timing.timestamp;_.delta=M-_.lastTime||r._goodDelta,_.lastTime=M,_.timestampElapsed=A-_.lastTimestamp||0,_.lastTimestamp=A,_.deltaHistory.unshift(_.delta),_.deltaHistory.length=Math.min(_.deltaHistory.length,T),_.engineDeltaHistory.unshift(w.timing.lastDelta),_.engineDeltaHistory.length=Math.min(_.engineDeltaHistory.length,T),_.timestampElapsedHistory.unshift(_.timestampElapsed),_.timestampElapsedHistory.length=Math.min(_.timestampElapsedHistory.length,T),_.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),_.engineUpdatesHistory.length=Math.min(_.engineUpdatesHistory.length,T),_.engineElapsedHistory.unshift(w.timing.lastElapsed),_.engineElapsedHistory.length=Math.min(_.engineElapsedHistory.length,T),_.elapsedHistory.unshift(_.lastElapsed),_.elapsedHistory.length=Math.min(_.elapsedHistory.length,T)},g=function(S){for(var M=0,w=0;w<S.length;w+=1)M+=S[w];return M/S.length||0},p=function(S,M){var w=document.createElement("canvas");return w.width=S,w.height=M,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},x=function(S){var M=S.getContext("2d"),w=window.devicePixelRatio||1,_=M.webkitBackingStorePixelRatio||M.mozBackingStorePixelRatio||M.msBackingStorePixelRatio||M.oBackingStorePixelRatio||M.backingStorePixelRatio||1;return w/_},y=function(S,M){var w=S.textures[M];return w||(w=S.textures[M]=new Image,w.src=M,w)},E=function(S,M){var w=M;/(jpg|gif|png)$/.test(M)&&(w="url("+M+")"),S.canvas.style.background=w,S.canvas.style.backgroundSize="contain",S.currentBackground=M}})()},function(n,i,s){var r={};n.exports=r;var a=s(5),o=s(17),l=s(0);(function(){r._maxFrameDelta=1e3/15,r._frameDeltaFallback=1e3/60,r._timeBufferMargin=1.5,r._elapsedNextEstimate=1,r._smoothingLowerBound=.1,r._smoothingUpperBound=.9,r.create=function(f){var h={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},d=l.extend(h,f);return d.fps=0,d},r.run=function(f,h){return f.timeBuffer=r._frameDeltaFallback,function d(c){f.frameRequestId=r._onNextFrame(f,d),c&&f.enabled&&r.tick(f,h,c)}(),f},r.tick=function(f,h,d){var c=l.now(),m=f.delta,v=0,g=d-f.timeLastTick;if((!g||!f.timeLastTick||g>Math.max(r._maxFrameDelta,f.maxFrameTime))&&(g=f.frameDelta||r._frameDeltaFallback),f.frameDeltaSmoothing){f.frameDeltaHistory.push(g),f.frameDeltaHistory=f.frameDeltaHistory.slice(-f.frameDeltaHistorySize);var p=f.frameDeltaHistory.slice(0).sort(),x=f.frameDeltaHistory.slice(p.length*r._smoothingLowerBound,p.length*r._smoothingUpperBound),y=u(x);g=y||g}f.frameDeltaSnapping&&(g=1e3/Math.round(1e3/g)),f.frameDelta=g,f.timeLastTick=d,f.timeBuffer+=f.frameDelta,f.timeBuffer=l.clamp(f.timeBuffer,0,f.frameDelta+m*r._timeBufferMargin),f.lastUpdatesDeferred=0;var E=f.maxUpdates||Math.ceil(f.maxFrameTime/m),S={timestamp:h.timing.timestamp};a.trigger(f,"beforeTick",S),a.trigger(f,"tick",S);for(var M=l.now();m>0&&f.timeBuffer>=m*r._timeBufferMargin;){a.trigger(f,"beforeUpdate",S),o.update(h,m),a.trigger(f,"afterUpdate",S),f.timeBuffer-=m,v+=1;var w=l.now()-c,_=l.now()-M,T=w+r._elapsedNextEstimate*_/v;if(v>=E||T>f.maxFrameTime){f.lastUpdatesDeferred=Math.round(Math.max(0,f.timeBuffer/m-r._timeBufferMargin));break}}h.timing.lastUpdatesPerFrame=v,a.trigger(f,"afterTick",S),f.frameDeltaHistory.length>=100&&(f.lastUpdatesDeferred&&Math.round(f.frameDelta/m)>E?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):f.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof f.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(f.deltaMin||f.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),f.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},r.stop=function(f){r._cancelNextFrame(f)},r._onNextFrame=function(f,h){if(typeof window<"u"&&window.requestAnimationFrame)f.frameRequestId=window.requestAnimationFrame(h);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return f.frameRequestId},r._cancelNextFrame=function(f){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(f.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(f){for(var h=0,d=f.length,c=0;c<d;c+=1)h+=f[c];return h/d||0}})()},function(n,i,s){var r={};n.exports=r;var a=s(8),o=s(0),l=o.deprecated;(function(){r.collides=function(u,f){return a.collides(u,f)},l(r,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(n,i,s){var r={};n.exports=r,s(1);var a=s(0);(function(){r.pathToVertices=function(o,l){typeof window<"u"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,f,h,d,c,m,v,g,p,x,y=[],E,S,M=0,w=0,_=0;l=l||15;var T=function(C,P,D){var U=D%2===1&&D>1;if(!p||C!=p.x||P!=p.y){p&&U?(E=p.x,S=p.y):(E=0,S=0);var L={x:E+C,y:S+P};(U||!p)&&(p=L),y.push(L),w=E+C,_=S+P}},A=function(C){var P=C.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":w=C.x,_=C.y;break;case"H":w=C.x;break;case"V":_=C.y;break}T(w,_,C.pathSegType)}};for(r._svgPathToAbsolute(o),h=o.getTotalLength(),m=[],u=0;u<o.pathSegList.numberOfItems;u+=1)m.push(o.pathSegList.getItem(u));for(v=m.concat();M<h;){if(x=o.getPathSegAtLength(M),c=m[x],c!=g){for(;v.length&&v[0]!=c;)A(v.shift());g=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":d=o.getPointAtLength(M),T(d.x,d.y,0);break}M+=l}for(u=0,f=v.length;u<f;++u)A(v[u]);return y},r._svgPathToAbsolute=function(o){for(var l,u,f,h,d,c,m=o.pathSegList,v=0,g=0,p=m.numberOfItems,x=0;x<p;++x){var y=m.getItem(x),E=y.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(E))"x"in y&&(v=y.x),"y"in y&&(g=y.y);else switch("x1"in y&&(f=v+y.x1),"x2"in y&&(d=v+y.x2),"y1"in y&&(h=g+y.y1),"y2"in y&&(c=g+y.y2),"x"in y&&(v+=y.x),"y"in y&&(g+=y.y),E){case"m":m.replaceItem(o.createSVGPathSegMovetoAbs(v,g),x);break;case"l":m.replaceItem(o.createSVGPathSegLinetoAbs(v,g),x);break;case"h":m.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(v),x);break;case"v":m.replaceItem(o.createSVGPathSegLinetoVerticalAbs(g),x);break;case"c":m.replaceItem(o.createSVGPathSegCurvetoCubicAbs(v,g,f,h,d,c),x);break;case"s":m.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(v,g,d,c),x);break;case"q":m.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(v,g,f,h),x);break;case"t":m.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(v,g),x);break;case"a":m.replaceItem(o.createSVGPathSegArcAbs(v,g,y.r1,y.r2,y.angle,y.largeArcFlag,y.sweepFlag),x);break;case"z":case"Z":v=l,g=u;break}(E=="M"||E=="m")&&(l=v,u=g)}}})()},function(n,i,s){var r={};n.exports=r;var a=s(6);s(0),function(){r.create=a.create,r.add=a.add,r.remove=a.remove,r.clear=a.clear,r.addComposite=a.addComposite,r.addBody=a.addBody,r.addConstraint=a.addConstraint}()}])})})(Jv);var uT=Jv.exports;const rn=Sg(uT),fT="_dark-theme_81ttx_1",dT="_terminal-container_81ttx_1",hT="_cursor_81ttx_1",pT="_matrixChar_81ttx_26",mT="_button_81ttx_1",gT="_gameContainer_81ttx_3",vT="_matrixBackground_81ttx_17",xT="_gameTitle_81ttx_36",_T="_gameInfo_81ttx_46",yT="_scoreBoard_81ttx_56",ST="_instructions_81ttx_72",MT="_gameScene_81ttx_82",ET="_startScreen_81ttx_94",wT="_gameOverScreen_81ttx_94",AT="_errorScreen_81ttx_94",TT="_startContent_81ttx_117",CT="_gameOverContent_81ttx_117",RT="_startButton_81ttx_133",PT="_resetButton_81ttx_133",bT="_scanlines_81ttx_155",IT="_bonusFlash_81ttx_172",LT="_flash_81ttx_1",DT="_mobileControls_81ttx_185",NT="_controlsRow_81ttx_193",UT="_controlButton_81ttx_199",FT="_colorTransition_81ttx_1",kT="_backgroundTransition_81ttx_1",OT="_borderTransition_81ttx_1",BT="_shadowTransition_81ttx_1",Mt={"dark-theme":"_dark-theme_81ttx_1",darkTheme:fT,"terminal-container":"_terminal-container_81ttx_1",terminalContainer:dT,cursor:hT,"matrix-char":"_matrix-char_81ttx_1",matrixChar:pT,button:mT,gameContainer:gT,matrixBackground:vT,gameTitle:xT,gameInfo:_T,scoreBoard:yT,instructions:ST,gameScene:MT,startScreen:ET,gameOverScreen:wT,errorScreen:AT,startContent:TT,gameOverContent:CT,startButton:RT,resetButton:PT,scanlines:bT,bonusFlash:IT,flash:LT,mobileControls:DT,controlsRow:NT,controlButton:UT,colorTransition:FT,backgroundTransition:kT,borderTransition:OT,shadowTransition:BT},zT=()=>{const t=V.useRef(null),e=V.useRef(null),n=V.useRef(null),i=V.useRef(null),[s,r]=V.useState(0),[a,o]=V.useState(60),[l,u]=V.useState(!1),[f,h]=V.useState(!1),[d,c]=V.useState(!1),[m,v]=V.useState([]),[g,p]=V.useState(!1),[x,y]=V.useState({width:800,height:600}),E=V.useRef(null);V.useEffect(()=>{const A=()=>{const C=window.innerWidth<=850;p(C)};return A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}},[]),V.useEffect(()=>{const A=()=>{if(t.current){const C=Math.min(800,t.current.clientWidth),P=C*.75;y({width:C,height:P}),i.current&&(rn.Render.setPixelRatio(i.current,window.devicePixelRatio),rn.Render.setSize(i.current,C,P))}};return A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}},[f]),V.useEffect(()=>{const A=()=>{const P=window.innerWidth,D=[];for(let U=0;U<(g?40:80);U++)D.push({x:Math.random()*P,y:Math.random()*-500,speed:2+Math.random()*5,char:M(),opacity:.5+Math.random()*.5});v(D)},C=()=>{v(P=>P.map(D=>{const U=D.y+D.speed;return U>window.innerHeight?{...D,y:Math.random()*-100,x:Math.random()*window.innerWidth,char:M(),speed:2+Math.random()*5}:{...D,y:U}}))};return A(),E.current=setInterval(C,50),()=>{E.current&&clearInterval(E.current)}},[g]),V.useEffect(()=>{let A;return f&&!l&&(A=setInterval(()=>{o(C=>C<=1?(clearInterval(A),u(!0),0):C-1)},1e3)),()=>{A&&clearInterval(A)}},[f,l]);const S=A=>{if(!n.current||l)return;const C=.005;switch(A){case"up":rn.Body.applyForce(n.current,n.current.position,{x:0,y:-C});break;case"down":rn.Body.applyForce(n.current,n.current.position,{x:0,y:C});break;case"left":rn.Body.applyForce(n.current,n.current.position,{x:-C,y:0});break;case"right":rn.Body.applyForce(n.current,n.current.position,{x:C,y:0});break}};V.useEffect(()=>{if(!(!f||!t.current)){if(!rn){console.error("Matter.js library not available"),c(!0);return}try{let A=function(){const je=x.width*(.1+Math.random()*.8),Ne=x.height*(.1+Math.random()*.8),Ke=40*ae,Oe=20*ae,$e=F.rectangle(je,Ne,Ke,Oe,{label:"target",chamfer:{radius:10*ae},isStatic:!0,isSensor:!0,render:{fillStyle:"#ff0000",strokeStyle:"#ffffff",lineWidth:1*ae,shadowColor:"#ff0000",shadowBlur:10*ae}});N.add(se,$e);let B=1,at=!1;const He=setInterval(()=>{if(!$e.id){clearInterval(He);return}B>1.1&&(at=!1),B<.9&&(at=!0),B+=at?.01:-.01,G.scale($e,B,B)},50)},C=function(){if(l)return;const je=x.width*(.1+Math.random()*.8),Ne=x.height*(.1+Math.random()*.8),Ke=40*ae,Oe=20*ae,$e=F.rectangle(je,Ne,Ke,Oe,{label:"specialTarget",chamfer:{radius:10*ae},isStatic:!0,isSensor:!0,render:{fillStyle:"#0000ff",strokeStyle:"#ffffff",lineWidth:1*ae,shadowColor:"#0000ff",shadowBlur:10*ae}});N.add(se,$e),setTimeout(()=>{$e.id&&!l&&K.remove(se,$e)},5e3)},P=function(je){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(je.key)&&je.preventDefault(),!(!n.current||l))switch(je.key){case"ArrowUp":case"w":G.applyForce(n.current,n.current.position,{x:0,y:-.025});break;case"ArrowDown":case"s":G.applyForce(n.current,n.current.position,{x:0,y:.025});break;case"ArrowLeft":case"a":G.applyForce(n.current,n.current.position,{x:-.025,y:0});break;case"ArrowRight":case"d":G.applyForce(n.current,n.current.position,{x:.025,y:0});break;default:break}};const{Engine:D,Render:U,Runner:L,World:N,Bodies:F,Events:O,Body:G,Composite:K}=rn,te=D.create();e.current=te;const se=te.world;te.world.gravity.y=.2;const Me=U.create({element:t.current,engine:te,options:{width:x.width,height:x.height,wireframes:!1,background:"rgba(0, 0, 0, 0.9)",pixelRatio:window.devicePixelRatio}});i.current=Me,U.run(Me);const re=L.create();L.run(re,te);const ae=x.width/800,W={isStatic:!0,render:{fillStyle:"rgba(0, 40, 0, 0.8)",strokeStyle:"#00ff00",lineWidth:2*ae}},ee=60*ae,ie=F.rectangle(x.width/2,x.height+ee/2,x.width+ee,ee,W),xe=F.rectangle(x.width/2,-ee/2,x.width+ee,ee,W),be=F.rectangle(-ee/2,x.height/2,ee,x.height,W),Re=F.rectangle(x.width+ee/2,x.height/2,ee,x.height,W);N.add(se,[ie,xe,be,Re]);const We=20*ae,Ve=F.circle(x.width/2,x.height/2,We,{label:"player",restitution:.8,friction:.05,density:.002,frictionAir:.02,render:{fillStyle:"#00ff00",strokeStyle:"#ffffff",lineWidth:2*ae,shadowColor:"#00ff00",shadowBlur:15*ae,shadowOffsetX:0,shadowOffsetY:0}});n.current=Ve,N.add(se,Ve);for(let je=0;je<5;je++){const Ne=x.width*(.1+Math.random()*.8),Ke=x.height*(.1+Math.random()*.8),Oe=(30+Math.random()*40)*ae,$e=F.rectangle(Ne,Ke,Oe,Oe/2,{chamfer:{radius:Oe/4},render:{fillStyle:"#003300",strokeStyle:"#00aa00",lineWidth:1*ae},restitution:.7});N.add(se,$e)}A();const rt=setInterval(()=>{l||C()},1e4);return O.on(te,"collisionStart",je=>{je.pairs.forEach(Ne=>{const{bodyA:Ke,bodyB:Oe}=Ne;if(Ke.label==="player"&&Oe.label==="target"||Oe.label==="player"&&Ke.label==="target"){const $e=Ke.label==="target"?Ke:Oe;N.remove(se,$e),r(B=>B+1),setTimeout(()=>{l||A()},500)}if(Ke.label==="player"&&Oe.label==="specialTarget"||Oe.label==="player"&&Ke.label==="specialTarget"){const $e=Ke.label==="specialTarget"?Ke:Oe;N.remove(se,$e),r(at=>at+5),o(at=>Math.min(at+5,60));const B=document.createElement("div");B.className=Mt.bonusFlash,t.current.appendChild(B),setTimeout(()=>{t.current&&t.current.contains(B)&&t.current.removeChild(B)},500)}})}),window.addEventListener("keydown",P),()=>{window.removeEventListener("keydown",P),clearInterval(rt),U.stop(Me),L.stop(re),N.clear(se,!1),D.clear(te),Me.canvas&&Me.canvas.parentNode&&Me.canvas.parentNode.removeChild(Me.canvas),Me.canvas=null,Me.context=null,Me.textures={}}}catch(A){console.error("Error initializing game:",A),c(!0)}}},[f,l,x]);const M=()=>{const A="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";return A.charAt(Math.floor(Math.random()*A.length))},w=A=>{if(!(!e.current||!rn||!f||l))try{const C=t.current.getBoundingClientRect(),P=A.clientX-C.left,D=A.clientY-C.top,U=x.width/800,L=rn.Bodies.circle(P,D,40*U,{isSensor:!0,isStatic:!0,render:{fillStyle:"rgba(0, 255, 0, 0.2)",strokeStyle:"#00ff00",lineWidth:2*U}});rn.World.add(e.current.world,L),rn.Composite.allBodies(e.current.world).forEach(F=>{if(F!==L){const G=F.position.x-P,K=F.position.y-D,te=Math.sqrt(G*G+K*K);if(te<200*U){const se=.005*(1-te/(200*U)),Me=Math.atan2(K,G);rn.Body.applyForce(F,F.position,{x:Math.cos(Me)*se,y:Math.sin(Me)*se})}}}),setTimeout(()=>{e.current&&L.id&&rn.Composite.remove(e.current.world,L)},800)}catch(C){console.error("Error adding force field:",C)}},_=()=>{if(r(0),o(60),u(!1),h(!0),e.current){const A=e.current.world;rn.World.clear(A,!1)}},T=()=>{h(!0)};return k.jsxs("div",{className:Mt.gameContainer,children:[k.jsx("div",{className:Mt.matrixBackground,children:m.map((A,C)=>k.jsx("div",{className:Mt.matrixChar,style:{left:`${A.x}px`,top:`${A.y}px`,opacity:A.opacity},children:A.char},C))}),k.jsx("h1",{className:Mt.gameTitle,children:"The Matrix: Red Pill Collector"}),k.jsxs("div",{className:Mt.gameInfo,children:[k.jsxs("div",{className:Mt.scoreBoard,children:[k.jsxs("span",{children:["SCORE: ",s]}),k.jsxs("span",{children:["TIME: ",a]})]}),k.jsxs("p",{className:Mt.instructions,children:[g?"Use the on-screen controls below or tap to create force fields.":"Use arrow keys or WASD to move. Collect red pills for points and blue pills for bonus.",k.jsx("br",{}),"Click anywhere in the game area to create force fields that repel objects."]})]}),f?d?k.jsxs("div",{className:Mt.errorScreen,style:{width:x.width,height:x.height},children:[k.jsx("h2",{children:"System Failure"}),k.jsx("p",{children:"Could not load the Matrix. Please make sure you have installed Matter.js:"}),k.jsx("code",{children:"npm install matter-js"})]}):l?k.jsxs("div",{className:Mt.gameOverScreen,style:{width:x.width,height:x.height},children:[k.jsx("h2",{children:"Connection Terminated"}),k.jsxs("p",{children:["You collected ",s," pills"]}),k.jsx("button",{className:Mt.resetButton,onClick:_,children:"Reconnect"})]}):k.jsx("div",{ref:t,onClick:w,className:Mt.gameScene}):k.jsx("div",{className:Mt.startScreen,style:{width:x.width,height:x.height},children:k.jsxs("div",{className:Mt.startContent,children:[k.jsx("h2",{children:"Enter The Matrix"}),k.jsx("p",{children:"Choose the red pill to see how deep the rabbit hole goes..."}),k.jsx("button",{className:Mt.startButton,onClick:T,children:"Take the Red Pill"})]})}),g&&f&&!l&&!d&&k.jsxs("div",{className:Mt.mobileControls,children:[k.jsx("div",{className:Mt.controlsRow,children:k.jsx("div",{className:Mt.controlButton,onTouchStart:()=>S("up"),onClick:()=>S("up"),children:"↑"})}),k.jsxs("div",{className:Mt.controlsRow,children:[k.jsx("div",{className:Mt.controlButton,onTouchStart:()=>S("left"),onClick:()=>S("left"),children:"←"}),k.jsx("div",{className:Mt.controlButton,onTouchStart:()=>S("down"),onClick:()=>S("down"),children:"↓"}),k.jsx("div",{className:Mt.controlButton,onTouchStart:()=>S("right"),onClick:()=>S("right"),children:"→"})]})]}),k.jsx("div",{className:Mt.scanlines})]})};const VT=({onComplete:t})=>{const[e,n]=V.useState([]),[i,s]=V.useState(""),[r,a]=V.useState(""),[o,l]=V.useState(!0),[u,f]=V.useState(!1),[h,d]=V.useState([]),[c,m]=V.useState(!1),[v,g]=V.useState([]),[p,x]=V.useState(-1),[y,E]=V.useState(!1),[S,M]=V.useState(!0),[w,_]=V.useState("matrix"),T=V.useRef(null),A=V.useRef(null),C=Gv(),P=["     ____.  _____  _________  ____  **.  **_____  ___________.___.____       _____    _______   ","    |    | /  *  \\ \\*   ___ \\|    |/ *|  \\      \\ \\*   _____/|   |    |     /  _  \\   \\      \\  ","    |    |/  /_\\  \\/    \\  \\/|      <    /   |   \\ |    __)_ |   |    |    /  /_\\  \\  /   |   \\ ","/\\__|    /    |    \\     \\___|    |  \\  /    |    \\|        \\|   |    |___/    |    \\/    |    \\","\\________\\____|__  /\\______  /____|__ \\ \\____|__  /_______  /|___|_______ \\____|__  /\\____|__  /","                 \\/        \\/        \\/         \\/        \\/             \\/       \\/         \\/"],D=["     ____.  _____  _________  ____  __.","     |    | /  _  \\ \\_   ___ \\|    |/ _|","     |    |/  /_\\  \\/    \\  \\/|      <  ","/\\__|    /    |    \\     \\___|    |  \\ ","\\________\\____|__  /\\______  /____|__ \\","                 \\/        \\/        \\/"],U={matrix:{primary:"#00ff00",secondary:"#00aa00",bg:"rgba(0, 10, 0, 0.95)"},blue:{primary:"#00ccff",secondary:"#0077cc",bg:"rgba(0, 10, 30, 0.95)"},amber:{primary:"#ffaa00",secondary:"#cc7700",bg:"rgba(30, 10, 0, 0.95)"}};V.useEffect(()=>{const re=()=>{m(window.innerWidth<=768)};return re(),window.addEventListener("resize",re),()=>{window.removeEventListener("resize",re)}},[]),V.useEffect(()=>{(()=>{const W=window.innerWidth,ee=window.innerHeight,ie=[],xe=c?50:150;for(let be=0;be<xe;be++)ie.push({x:Math.random()*W,y:Math.random()*ee*-1,speed:1+Math.random()*3,char:L(),opacity:.1+Math.random()*.7,size:10+Math.random()*16});d(ie)})();const ae=setInterval(()=>{d(W=>W.map(ee=>{const ie=ee.y+ee.speed;return ie>window.innerHeight?{...ee,y:Math.random()*-100,x:Math.random()*window.innerWidth,char:L(),speed:1+Math.random()*3}:{...ee,y:ie}}))},50);return()=>clearInterval(ae)},[c]),V.useEffect(()=>{T.current&&(T.current.scrollTop=T.current.scrollHeight)},[e,i,r]),V.useEffect(()=>{const re=()=>{A.current&&!S&&A.current.focus()};return y&&document.addEventListener("click",re),()=>document.removeEventListener("click",re)},[y,S]),V.useEffect(()=>{const re=setInterval(()=>{l(ae=>!ae)},500);return()=>clearInterval(re)},[]);const L=()=>{const re="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";return re.charAt(Math.floor(Math.random()*re.length))},N=re=>{n(ae=>[...ae,re])},F=async(re,ae=20)=>(M(!0),new Promise(W=>{let ee=0;s("");const ie=setInterval(()=>{s(xe=>xe+re.charAt(ee)),ee++,ee>=re.length&&(clearInterval(ie),setTimeout(()=>{n(xe=>[...xe,re]),s(""),W()},100))},ae)})),O=async()=>{const re=c?D:P;return n(ae=>[...ae,...re]),new Promise(ae=>setTimeout(ae,500))},G=re=>U[w][re],K=re=>{U[re]?(_(re),document.documentElement.style.setProperty("--terminal-primary",U[re].primary),document.documentElement.style.setProperty("--terminal-secondary",U[re].secondary),document.documentElement.style.setProperty("--terminal-bg",U[re].bg),N(`Terminal theme changed to: ${re}`)):N("Theme not found. Available themes: matrix, blue, amber")},te=async re=>{const ae=re.trim().toLowerCase();if(!ae)return;const W="jack@developer:~$ "+ae;switch(N(W),g(ee=>[ae,...ee]),x(-1),ae){case"help":N("Available commands:"),N("  help         - Display available commands"),N("  about        - View information about Jack Neilan"),N("  skills       - List technical skills"),N("  projects     - Browse portfolio projects"),N('  game         - Play "The Matrix: Red Pill Collector"'),N("  portfolio    - View the full portfolio"),N("  theme [name] - Change terminal theme (matrix/blue/amber)"),N("  matrix       - Toggle matrix animation"),N("  ascii        - Show ASCII art"),N("  date         - Display current date and time"),N("  whoami       - Display user information"),N("  ls           - List virtual directory contents"),N("  clear        - Clear the terminal screen"),N("  exit         - Exit this terminal");break;case"about":N("Jack Neilan"),N("----------"),N("Computer Science Student at UCD"),N("Looking for Work in FinTech"),N("Graduating in 2025"),N(""),N('Type "portfolio" to view the full site');break;case"skills":N("Technical Skills:"),N("- Java, C++, Python"),N("- HTML, CSS, React, Angular"),N("- Node.js, Spring Boot"),N("- Machine Learning, Trading Algorithms");break;case"projects":N("Recent Projects:"),N("1. Trading Bot - Python-based machine learning for price prediction"),N("2. Quest Game - Java-based game with OOP principles"),N("3. Ecommerce Store - Full-stack web application"),N("4. Messaging Service - Real-time chat with video capabilities"),N(""),N('Type "portfolio" to see more details');break;case"game":N("Starting The Matrix: Red Pill Collector..."),await new Promise(xe=>setTimeout(xe,500)),C("/game");break;case"portfolio":N("Loading portfolio..."),await new Promise(xe=>setTimeout(xe,400)),t();break;case"ascii":await O();break;case"date":const ee=new Date;N(`Current date: ${ee.toLocaleDateString()}`),N(`Current time: ${ee.toLocaleTimeString()}`);break;case"whoami":N("jack@developer"),N("Current role: Computer Science Student"),N("Location: UCD"),N("OS: FinTech.js 2025");break;case"ls":N("Directory of /home/jack:"),N(""),N("drwxr-xr-x  about/"),N("drwxr-xr-x  projects/"),N("drwxr-xr-x  skills/"),N("drwxr-xr-x  game/"),N("-rw-r--r--  portfolio.js"),N("-rw-r--r--  README.md");break;case"matrix":const ie=document.querySelector(".matrix-effect");if(ie){const xe=ie.style.opacity!=="0";ie.style.opacity=xe?"0":"0.5",N(`Matrix effect: ${xe?"disabled":"enabled"}`)}break;case"clear":n([]);break;case"exit":N("Exiting terminal..."),await new Promise(xe=>setTimeout(xe,400)),t();break;default:if(ae.startsWith("theme ")){const xe=ae.split(" ")[1];K(xe)}else N(`Command not found: ${ae}`),N('Type "help" to see available commands')}},se=re=>{if(!S){if(re.key==="Enter")te(r),a("");else if(re.key==="ArrowUp"){if(re.preventDefault(),v.length>0&&p<v.length-1){const ae=p+1;x(ae),a(v[ae])}}else if(re.key==="ArrowDown")if(re.preventDefault(),p>0){const ae=p-1;x(ae),a(v[ae])}else p===0&&(x(-1),a(""));else if(re.key==="Tab"){re.preventDefault();const W=["help","about","skills","projects","game","portfolio","theme","matrix","ascii","date","whoami","ls","clear","exit"].filter(ee=>ee.startsWith(r.toLowerCase()));W.length===1?a(W[0]):W.length>1&&(N("jack@developer:~$ "+r),N("Possible completions: "+W.join(" ")))}}};V.useEffect(()=>{document.documentElement.style.setProperty("--terminal-primary",U.matrix.primary),document.documentElement.style.setProperty("--terminal-secondary",U.matrix.secondary),document.documentElement.style.setProperty("--terminal-bg",U.matrix.bg)},[]),V.useEffect(()=>{(async()=>{await new Promise(W=>setTimeout(W,300)),await F("$ node portfolio.js"),await F("Welcome to my portfolio!"),await F('Type "help" to see available commands or "portfolio" to skip'),E(!0),f(!0),M(!1),A.current&&A.current.focus()})();const ae=setTimeout(()=>{u&&t()},3e4);return()=>clearTimeout(ae)},[t]);const Me={container:{"--primary-color":G("primary"),"--secondary-color":G("secondary"),"--bg-color":G("bg")}};return k.jsxs("div",{className:"terminal-container",onClick:()=>{var re;return(re=A.current)==null?void 0:re.focus()},style:Me.container,children:[k.jsxs("div",{className:"terminal-header",children:[k.jsxs("div",{className:"terminal-buttons",children:[k.jsx("div",{className:"button close",onClick:t}),k.jsx("div",{className:"button minimize"}),k.jsx("div",{className:"button maximize"})]}),k.jsx("div",{className:"terminal-title",children:"jack@developer:~"})]}),k.jsxs("div",{className:"terminal-body",ref:T,children:[k.jsx("div",{className:"matrix-effect",children:h.map((re,ae)=>k.jsx("div",{className:"matrix-char",style:{left:`${re.x}px`,top:`${re.y}px`,opacity:re.opacity,fontSize:`${re.size}px`,color:G("primary"),textShadow:`0 0 8px ${G("primary")}`},children:re.char},ae))}),e.map((re,ae)=>k.jsx("div",{className:`terminal-line ${re.includes("jack@developer")?"command-line":""} ${c&&e.indexOf(re)>=e.length-D.length-1&&e.indexOf(re)<e.length-1&&D.includes(re)||!c&&e.indexOf(re)>=e.length-P.length-1&&e.indexOf(re)<e.length-1&&P.includes(re)?"ascii-art":""}`,children:re},ae)),k.jsxs("div",{className:"terminal-line current-line",children:[i,!i&&u&&k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"prompt-text",children:"jack@developer:~$ "}),k.jsx("span",{className:"user-input",children:r}),k.jsx("span",{className:`cursor ${o?"visible":"hidden"}`})]}),i&&k.jsx("span",{className:`cursor ${o?"visible":"hidden"}`})]})]}),k.jsx("input",{ref:A,type:"text",className:"hidden-input",value:r,onChange:re=>a(re.target.value),onKeyDown:se,autoFocus:!0,"aria-label":"Terminal input"}),k.jsxs("div",{className:"terminal-footer",children:[k.jsxs("div",{className:"theme-buttons",children:[k.jsx("button",{className:"theme-btn matrix-theme",onClick:()=>K("matrix"),"aria-label":"Matrix theme"}),k.jsx("button",{className:"theme-btn blue-theme",onClick:()=>K("blue"),"aria-label":"Blue theme"}),k.jsx("button",{className:"theme-btn amber-theme",onClick:()=>K("amber"),"aria-label":"Amber theme"})]}),k.jsx("button",{className:"skip-button",onClick:t,children:"Skip Intro"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="184",HT=0,_m=1,GT=2,El=1,WT=2,Aa=3,Mr=0,yn=1,bi=2,Fi=0,Os=1,ym=2,Sm=3,Mm=4,jT=5,Ur=100,XT=101,YT=102,qT=103,KT=104,$T=200,JT=201,ZT=202,QT=203,zf=204,Vf=205,eC=206,tC=207,nC=208,iC=209,rC=210,sC=211,aC=212,oC=213,lC=214,Hf=0,Gf=1,Wf=2,Ys=3,jf=4,Xf=5,Yf=6,qf=7,Zv=0,cC=1,uC=2,gi=0,Qv=1,ex=2,tx=3,nx=4,ix=5,rx=6,sx=7,ax=300,Kr=301,qs=302,cu=303,uu=304,Cc=306,Kf=1e3,Di=1001,$f=1002,Xt=1003,fC=1004,Fo=1005,tn=1006,fu=1007,zr=1008,kn=1009,ox=1010,lx=1011,to=1012,Dh=1013,_i=1014,di=1015,Gi=1016,Nh=1017,Uh=1018,no=1020,cx=35902,ux=35899,fx=1021,dx=1022,Zn=1023,Wi=1026,Vr=1027,hx=1028,Fh=1029,$r=1030,kh=1031,Oh=1033,wl=33776,Al=33777,Tl=33778,Cl=33779,Jf=35840,Zf=35841,Qf=35842,ed=35843,td=36196,nd=37492,id=37496,rd=37488,sd=37489,ec=37490,ad=37491,od=37808,ld=37809,cd=37810,ud=37811,fd=37812,dd=37813,hd=37814,pd=37815,md=37816,gd=37817,vd=37818,xd=37819,_d=37820,yd=37821,Sd=36492,Md=36494,Ed=36495,wd=36283,Ad=36284,tc=36285,Td=36286,dC=3200,Em=0,hC=1,lr="",Dn="srgb",nc="srgb-linear",ic="linear",ct="srgb",as=7680,wm=519,pC=512,mC=513,gC=514,Bh=515,vC=516,xC=517,zh=518,_C=519,Am=35044,Tm="300 es",hi=2e3,rc=2001;function yC(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function SC(){const t=sc("canvas");return t.style.display="block",t}const Cm={};function Rm(...t){const e="THREE."+t.shift();console.log(e,...t)}function px(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Cd(...t){const e=t.join(" ");e in Cm||(Cm[e]=!0,Ue(...t))}function MC(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const EC={[Hf]:Gf,[Wf]:Yf,[jf]:qf,[Ys]:Xf,[Gf]:Hf,[Yf]:Wf,[qf]:jf,[Xf]:Ys};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=Math.PI/180,Rd=180/Math.PI;function fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function wC(t,e){return(t%e+e)%e}function hu(t,e,n){return(1-n)*t+n*e}function ha(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Gh=class Gh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gh.prototype.isVector2=!0;let ht=Gh;class ta{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],u=i[s+1],f=i[s+2],h=i[s+3],d=r[a+0],c=r[a+1],m=r[a+2],v=r[a+3];if(h!==v||l!==d||u!==c||f!==m){let g=l*d+u*c+f*m+h*v;g<0&&(d=-d,c=-c,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,l=l*p+d*o,u=u*p+c*o,f=f*p+m*o,h=h*p+v*o}else{l=l*p+d*o,u=u*p+c*o,f=f*p+m*o,h=h*p+v*o;const x=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=x,u*=x,f*=x,h*=x}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],u=i[s+2],f=i[s+3],h=r[a],d=r[a+1],c=r[a+2],m=r[a+3];return e[n]=o*m+f*h+l*c-u*d,e[n+1]=l*m+f*d+u*h-o*c,e[n+2]=u*m+f*c+o*d-l*h,e[n+3]=f*m-o*h-l*d-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(s/2),h=o(r/2),d=l(i/2),c=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*f*h+u*c*m,this._y=u*c*h-d*f*m,this._z=u*f*m+d*c*h,this._w=u*f*h-d*c*m;break;case"YXZ":this._x=d*f*h+u*c*m,this._y=u*c*h-d*f*m,this._z=u*f*m-d*c*h,this._w=u*f*h+d*c*m;break;case"ZXY":this._x=d*f*h-u*c*m,this._y=u*c*h+d*f*m,this._z=u*f*m+d*c*h,this._w=u*f*h-d*c*m;break;case"ZYX":this._x=d*f*h-u*c*m,this._y=u*c*h+d*f*m,this._z=u*f*m-d*c*h,this._w=u*f*h+d*c*m;break;case"YZX":this._x=d*f*h+u*c*m,this._y=u*c*h+d*f*m,this._z=u*f*m-d*c*h,this._w=u*f*h-d*c*m;break;case"XZY":this._x=d*f*h-u*c*m,this._y=u*c*h-d*f*m,this._z=u*f*m+d*c*h,this._w=u*f*h+d*c*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(f-l)*c,this._y=(r-u)*c,this._z=(a-s)*c}else if(i>o&&i>h){const c=2*Math.sqrt(1+i-o-h);this._w=(f-l)/c,this._x=.25*c,this._y=(s+a)/c,this._z=(r+u)/c}else if(o>h){const c=2*Math.sqrt(1+o-i-h);this._w=(r-u)/c,this._x=(s+a)/c,this._y=.25*c,this._z=(l+f)/c}else{const c=2*Math.sqrt(1+h-i-o);this._w=(a-s)/c,this._x=(r+u)/c,this._y=(l+f)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+s*u-r*l,this._y=s*f+a*l+r*o-i*u,this._z=r*f+a*u+i*l-s*o,this._w=a*f-i*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,n=Math.sin(n*u)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wh=class Wh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*i),f=2*(o*n-r*s),h=2*(r*i-a*n);return this.x=n+l*u+a*h-o*f,this.y=i+l*f+o*u-r*h,this.z=s+l*h+r*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;let Y=Wh;const pu=new Y,Pm=new ta,jh=class jh{constructor(e,n,i,s,r,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,u)}set(e,n,i,s,r,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],c=i[5],m=i[8],v=s[0],g=s[3],p=s[6],x=s[1],y=s[4],E=s[7],S=s[2],M=s[5],w=s[8];return r[0]=a*v+o*x+l*S,r[3]=a*g+o*y+l*M,r[6]=a*p+o*E+l*w,r[1]=u*v+f*x+h*S,r[4]=u*g+f*y+h*M,r[7]=u*p+f*E+h*w,r[2]=d*v+c*x+m*S,r[5]=d*g+c*y+m*M,r[8]=d*p+c*E+m*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*r*f+i*o*l+s*r*u-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=f*a-o*u,d=o*l-f*r,c=u*r-a*l,m=n*h+i*d+s*c;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(s*u-f*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(f*n-s*l)*v,e[5]=(s*r-o*n)*v,e[6]=c*v,e[7]=(i*l-u*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;let ke=jh;const mu=new ke,bm=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AC(){const t={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===lr?ic:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nc]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:bm,fromXYZ:Im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:bm,fromXYZ:Im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const Ze=AC();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class TC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=sc("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CC=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gu(s[a].image)):r.push(gu(s[a]))}else r=gu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let RC=0;const vu=new Y;class ln extends ts{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Di,s=Di,r=tn,a=zr,o=Zn,l=kn,u=ln.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=fo(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kf:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kf:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ax;ln.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],c=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(u+c+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(c+1)/2,S=(p+1)/2,M=(f+d)/4,w=(h+v)/4,_=(m+g)/4;return y>E&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=M/i,r=w/i):E>S?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=M/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=w/r,s=_/r),this.set(i,s,r,n),this}let x=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-v)/x,this.z=(d-f)/x,this.w=Math.acos((u+c+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let Nt=Xh;class PC extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new ln(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Vh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends PC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mx extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bC extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=class lc{constructor(e,n,i,s,r,a,o,l,u,f,h,d,c,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,u,f,h,d,c,m,v,g)}set(e,n,i,s,r,a,o,l,u,f,h,d,c,m,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=f,p[10]=h,p[14]=d,p[3]=c,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),u=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,c=a*h,m=o*f,v=o*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=c+m*u,n[5]=d-v*u,n[9]=-o*l,n[2]=v-d*u,n[6]=m+c*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,c=l*h,m=u*f,v=u*h;n[0]=d+v*o,n[4]=m*o-c,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=c*o-m,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,c=l*h,m=u*f,v=u*h;n[0]=d-v*o,n[4]=-a*h,n[8]=m+c*o,n[1]=c+m*o,n[5]=a*f,n[9]=v-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,c=a*h,m=o*f,v=o*h;n[0]=l*f,n[4]=m*u-c,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=c*u-m,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,c=a*u,m=o*l,v=o*u;n[0]=l*f,n[4]=v-d*h,n[8]=m*h+c,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=c*h+m,n[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,c=a*u,m=o*l,v=o*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=a*f,n[9]=c*h-m,n[2]=m*h-c,n[6]=o*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IC,e,LC)}lookAt(e,n,i){const s=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Zi.crossVectors(i,Mn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Zi.crossVectors(i,Mn)),Zi.normalize(),ko.crossVectors(Mn,Zi),s[0]=Zi.x,s[4]=ko.x,s[8]=Mn.x,s[1]=Zi.y,s[5]=ko.y,s[9]=Mn.y,s[2]=Zi.z,s[6]=ko.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],c=i[13],m=i[2],v=i[6],g=i[10],p=i[14],x=i[3],y=i[7],E=i[11],S=i[15],M=s[0],w=s[4],_=s[8],T=s[12],A=s[1],C=s[5],P=s[9],D=s[13],U=s[2],L=s[6],N=s[10],F=s[14],O=s[3],G=s[7],K=s[11],te=s[15];return r[0]=a*M+o*A+l*U+u*O,r[4]=a*w+o*C+l*L+u*G,r[8]=a*_+o*P+l*N+u*K,r[12]=a*T+o*D+l*F+u*te,r[1]=f*M+h*A+d*U+c*O,r[5]=f*w+h*C+d*L+c*G,r[9]=f*_+h*P+d*N+c*K,r[13]=f*T+h*D+d*F+c*te,r[2]=m*M+v*A+g*U+p*O,r[6]=m*w+v*C+g*L+p*G,r[10]=m*_+v*P+g*N+p*K,r[14]=m*T+v*D+g*F+p*te,r[3]=x*M+y*A+E*U+S*O,r[7]=x*w+y*C+E*L+S*G,r[11]=x*_+y*P+E*N+S*K,r[15]=x*T+y*D+E*F+S*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],c=e[14],m=e[3],v=e[7],g=e[11],p=e[15],x=l*c-u*d,y=o*c-u*h,E=o*d-l*h,S=a*c-u*f,M=a*d-l*f,w=a*h-o*f;return n*(v*x-g*y+p*E)-i*(m*x-g*S+p*M)+s*(m*y-v*S+p*w)-r*(m*E-v*M+g*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],c=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=n*o-i*a,y=n*l-s*a,E=n*u-r*a,S=i*l-s*o,M=i*u-r*o,w=s*u-r*l,_=f*v-h*m,T=f*g-d*m,A=f*p-c*m,C=h*g-d*v,P=h*p-c*v,D=d*p-c*g,U=x*D-y*P+E*C+S*A-M*T+w*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=(o*D-l*P+u*C)*L,e[1]=(s*P-i*D-r*C)*L,e[2]=(v*w-g*M+p*S)*L,e[3]=(d*M-h*w-c*S)*L,e[4]=(l*A-a*D-u*T)*L,e[5]=(n*D-s*A+r*T)*L,e[6]=(g*E-m*w-p*y)*L,e[7]=(f*w-d*E+c*y)*L,e[8]=(a*P-o*A+u*_)*L,e[9]=(i*A-n*P-r*_)*L,e[10]=(m*M-v*E+p*x)*L,e[11]=(h*E-f*M-c*x)*L,e[12]=(o*T-a*C-l*_)*L,e[13]=(n*C-i*T+s*_)*L,e[14]=(v*y-m*S-g*x)*L,e[15]=(f*S-h*y+d*x)*L,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,u=r*a,f=r*o;return this.set(u*a+i,u*o-s*l,u*l+s*o,0,u*o+s*l,f*o+i,f*l-s*a,0,u*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,u=r+r,f=a+a,h=o+o,d=r*u,c=r*f,m=r*h,v=a*f,g=a*h,p=o*h,x=l*u,y=l*f,E=l*h,S=i.x,M=i.y,w=i.z;return s[0]=(1-(v+p))*S,s[1]=(c+E)*S,s[2]=(m-y)*S,s[3]=0,s[4]=(c-E)*M,s[5]=(1-(d+p))*M,s[6]=(g+x)*M,s[7]=0,s[8]=(m+y)*w,s[9]=(g-x)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let a=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jn.copy(this);const u=1/a,f=1/o,h=1/l;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=f,jn.elements[5]*=f,jn.elements[6]*=f,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,s,r,a,o=hi,l=!1){const u=this.elements,f=2*r/(n-e),h=2*r/(i-s),d=(n+e)/(n-e),c=(i+s)/(i-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===hi)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===rc)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=hi,l=!1){const u=this.elements,f=2/(n-e),h=2/(i-s),d=-(n+e)/(n-e),c=-(i+s)/(i-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===hi)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===rc)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=c,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lc.prototype.isMatrix4=!0;let Ut=lc;const ls=new Y,jn=new Ut,IC=new Y(0,0,0),LC=new Y(1,1,1),Zi=new Y,ko=new Y,Mn=new Y,Lm=new Ut,Dm=new ta;class Jr{constructor(e=0,n=0,i=0,s=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],f=s[9],h=s[2],d=s[6],c=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,c),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,c),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,c),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dm.setFromEuler(this),this.setFromQuaternion(Dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DC=0;const Nm=new Y,cs=new ta,Ei=new Ut,Oo=new Y,pa=new Y,NC=new Y,UC=new ta,Um=new Y(1,0,0),Fm=new Y(0,1,0),km=new Y(0,0,1),Om={type:"added"},FC={type:"removed"},us={type:"childadded",child:null},xu={type:"childremoved",child:null};class cn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Y,n=new Jr,i=new ta,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ke}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,n){return Nm.copy(e).applyQuaternion(this.quaternion),this.position.add(Nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oo.copy(e):Oo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(pa,Oo,this.up):Ei.lookAt(Oo,pa,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Ei),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),us.child=e,this.dispatchEvent(us),us.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FC),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,NC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,UC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),c=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),c.length>0&&(i.animations=c),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bo extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kC={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),c=.02,m=.005;u.inputState.pinching&&d>c+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=c-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kC)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Ze.workingColorSpace){if(e=wC(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=yu(a,r,e+1/3),this.g=yu(a,r,e),this.b=yu(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,n=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Ze.workingToColorSpace(Qt.copy(this),e),Math.round(Qe(Qt.r*255,0,255))*65536+Math.round(Qe(Qt.g*255,0,255))*256+Math.round(Qe(Qt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Dn){Ze.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,s=Qt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(zo);const i=hu(Qi.h,zo.h,n),s=hu(Qi.s,zo.s,n),r=hu(Qi.l,zo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=vx;class OC extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jr,this.environmentIntensity=1,this.environmentRotation=new Jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xn=new Y,wi=new Y,Su=new Y,Ai=new Y,fs=new Y,ds=new Y,Bm=new Y,Mu=new Y,Eu=new Y,wu=new Y,Au=new Nt,Tu=new Nt,Cu=new Nt;class Jn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Xn.subVectors(e,n),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Xn.subVectors(s,n),wi.subVectors(i,n),Su.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(wi),l=Xn.dot(Su),u=wi.dot(wi),f=wi.dot(Su),h=a*u-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,c=(u*l-o*f)*d,m=(a*f-o*l)*d;return r.set(1-c-m,m,c)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return Au.setScalar(0),Tu.setScalar(0),Cu.setScalar(0),Au.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),Cu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Au,r.x),a.addScaledVector(Tu,r.y),a.addScaledVector(Cu,r.z),a}static isFrontFacing(e,n,i,s){return Xn.subVectors(i,n),wi.subVectors(e,n),Xn.cross(wi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Xn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;fs.subVectors(s,i),ds.subVectors(r,i),Mu.subVectors(e,i);const l=fs.dot(Mu),u=ds.dot(Mu);if(l<=0&&u<=0)return n.copy(i);Eu.subVectors(e,s);const f=fs.dot(Eu),h=ds.dot(Eu);if(f>=0&&h<=f)return n.copy(s);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(fs,a);wu.subVectors(e,r);const c=fs.dot(wu),m=ds.dot(wu);if(m>=0&&c<=m)return n.copy(r);const v=c*u-l*m;if(v<=0&&u>=0&&m<=0)return o=u/(u-m),n.copy(i).addScaledVector(ds,o);const g=f*m-c*h;if(g<=0&&h-f>=0&&c-m>=0)return Bm.subVectors(r,s),o=(h-f)/(h-f+(c-m)),n.copy(s).addScaledVector(Bm,o);const p=1/(g+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(fs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ho{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Ho.subVectors(this.max,ma),hs.subVectors(e.a,ma),ps.subVectors(e.b,ma),ms.subVectors(e.c,ma),er.subVectors(ps,hs),tr.subVectors(ms,ps),Rr.subVectors(hs,ms);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Rr.z,Rr.y,er.z,0,-er.x,tr.z,0,-tr.x,Rr.z,0,-Rr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Rr.y,Rr.x,0];return!Ru(n,hs,ps,ms,Ho)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,hs,ps,ms,Ho))?!1:(Go.crossVectors(er,tr),n=[Go.x,Go.y,Go.z],Ru(n,hs,ps,ms,Ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Yn=new Y,Vo=new ho,hs=new Y,ps=new Y,ms=new Y,er=new Y,tr=new Y,Rr=new Y,ma=new Y,Ho=new Y,Go=new Y,Pr=new Y;function Ru(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Pr.fromArray(t,r);const o=s.x*Math.abs(Pr.x)+s.y*Math.abs(Pr.y)+s.z*Math.abs(Pr.z),l=e.dot(Pr),u=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const Ft=new Y,Wo=new ht;let BC=0;class gn extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Am,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wo.fromBufferAttribute(this,n),Wo.applyMatrix3(e),this.setXY(n,Wo.x,Wo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ha(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ha(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ha(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ha(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ha(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class xx extends gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _x extends gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xi extends gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const zC=new ho,ga=new Y,Pu=new Y;class po{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zC.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Pu)),this.expandByPoint(ga.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let VC=0;const Ln=new Ut,bu=new cn,gs=new Y,En=new ho,va=new ho,Ht=new Y;class Rn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yC(e)?_x:xx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xi(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(En.min,va.min),En.expandByPoint(Ht),Ht.addVectors(En.max,va.max),En.expandByPoint(Ht)):(En.expandByPoint(va.min),En.expandByPoint(va.max))}En.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Ht.fromBufferAttribute(o,u),l&&(gs.fromBufferAttribute(e,u),Ht.add(gs)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new Y,l[_]=new Y;const u=new Y,f=new Y,h=new Y,d=new ht,c=new ht,m=new ht,v=new Y,g=new Y;function p(_,T,A){u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,A),d.fromBufferAttribute(r,_),c.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),f.sub(u),h.sub(u),c.sub(d),m.sub(d);const C=1/(c.x*m.y-m.x*c.y);isFinite(C)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(h,-c.y).multiplyScalar(C),g.copy(h).multiplyScalar(c.x).addScaledVector(f,-m.x).multiplyScalar(C),o[_].add(v),o[T].add(v),o[A].add(v),l[_].add(g),l[T].add(g),l[A].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,T=x.length;_<T;++_){const A=x[_],C=A.start,P=A.count;for(let D=C,U=C+P;D<U;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new Y,E=new Y,S=new Y,M=new Y;function w(_){S.fromBufferAttribute(s,_),M.copy(S);const T=o[_];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),E.crossVectors(M,T);const C=E.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,C)}for(let _=0,T=x.length;_<T;++_){const A=x[_],C=A.start,P=A.count;for(let D=C,U=C+P;D<U;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,c=i.count;d<c;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,u=new Y,f=new Y,h=new Y;if(e)for(let d=0,c=e.count;d<c;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),o.add(f),l.add(f),u.add(f),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,c=n.count;d<c;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,h=o.normalized,d=new u.constructor(l.length*f);let c=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?c=l[v]*o.data.stride+o.offset:c=l[v]*f;for(let p=0;p<f;p++)d[m++]=u[c++]}return new gn(d,f,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,i);n.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let f=0,h=u.length;f<h;f++){const d=u[f],c=e(d,i);l.push(c)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const c=u[h];f.push(c.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(n))}const r=e.morphAttributes;for(const u in r){const f=[],h=r[u];for(let d=0,c=h.length;d<c;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let HC=0;class na extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=Os,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Vf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new Y,Iu=new Y,jo=new Y,nr=new Y,Lu=new Y,Xo=new Y,Du=new Y;class Hh{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Iu.copy(e).add(n).multiplyScalar(.5),jo.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Iu);const r=e.distanceTo(n)*.5,a=-this.direction.dot(jo),o=nr.dot(this.direction),l=-nr.dot(jo),u=nr.lengthSq(),f=Math.abs(1-a*a);let h,d,c,m;if(f>0)if(h=a*l-o,d=a*o-l,m=r*f,h>=0)if(d>=-m)if(d<=m){const v=1/f;h*=v,d*=v,c=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=r,h=Math.max(0,-(a*d+o)),c=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(a*d+o)),c=-h*h+d*(d+2*l)+u;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),c=-h*h+d*(d+2*l)+u):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),c=d*(d+2*l)+u):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),c=-h*h+d*(d+2*l)+u);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),c=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Iu).addScaledVector(jo,d),c}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,s,r){Lu.subVectors(n,e),Xo.subVectors(i,e),Du.crossVectors(Lu,Xo);let a=this.direction.dot(Du),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot(Xo.crossVectors(nr,Xo));if(l<0)return null;const u=o*this.direction.dot(Lu.cross(nr));if(u<0||l+u>a)return null;const f=-o*nr.dot(Du);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yx extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zm=new Ut,br=new Hh,Yo=new po,Vm=new Y,qo=new Y,Ko=new Y,$o=new Y,Nu=new Y,Jo=new Y,Hm=new Y,Zo=new Y;class ji extends cn{constructor(e=new Rn,n=new yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Jo.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=o[l],h=r[l];f!==0&&(Nu.fromBufferAttribute(h,e),a?Jo.addScaledVector(Nu,f):Jo.addScaledVector(Nu.sub(n),f))}n.add(Jo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(Yo.containsPoint(br.origin)===!1&&(br.intersectSphere(Yo,Vm)===null||br.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(zm.copy(r).invert(),br.copy(e.ray).applyMatrix4(zm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,c=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],x=Math.max(g.start,c.start),y=Math.min(o.count,Math.min(g.start+g.count,c.start+c.count));for(let E=x,S=y;E<S;E+=3){const M=o.getX(E),w=o.getX(E+1),_=o.getX(E+2);s=Qo(this,p,e,i,u,f,h,M,w,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const m=Math.max(0,c.start),v=Math.min(o.count,c.start+c.count);for(let g=m,p=v;g<p;g+=3){const x=o.getX(g),y=o.getX(g+1),E=o.getX(g+2);s=Qo(this,a,e,i,u,f,h,x,y,E),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],x=Math.max(g.start,c.start),y=Math.min(l.count,Math.min(g.start+g.count,c.start+c.count));for(let E=x,S=y;E<S;E+=3){const M=E,w=E+1,_=E+2;s=Qo(this,p,e,i,u,f,h,M,w,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const m=Math.max(0,c.start),v=Math.min(l.count,c.start+c.count);for(let g=m,p=v;g<p;g+=3){const x=g,y=g+1,E=g+2;s=Qo(this,a,e,i,u,f,h,x,y,E),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}}function GC(t,e,n,i,s,r,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Mr,o),l===null)return null;Zo.copy(o),Zo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Zo);return u<n.near||u>n.far?null:{distance:u,point:Zo.clone(),object:t}}function Qo(t,e,n,i,s,r,a,o,l,u){t.getVertexPosition(o,qo),t.getVertexPosition(l,Ko),t.getVertexPosition(u,$o);const f=GC(t,e,n,i,qo,Ko,$o,Hm);if(f){const h=new Y;Jn.getBarycoord(Hm,qo,Ko,$o,h),s&&(f.uv=Jn.getInterpolatedAttribute(s,o,l,u,h,new ht)),r&&(f.uv1=Jn.getInterpolatedAttribute(r,o,l,u,h,new ht)),a&&(f.normal=Jn.getInterpolatedAttribute(a,o,l,u,h,new Y),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new Y,materialIndex:0};Jn.getNormal(qo,Ko,$o,d.normal),f.face=d,f.barycoord=h}return f}class WC extends ln{constructor(e=null,n=1,i=1,s,r,a,o,l,u=Xt,f=Xt,h,d){super(null,a,o,l,u,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uu=new Y,jC=new Y,XC=new ke;class Nr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Uu.subVectors(i,n).cross(jC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(Uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XC.getNormalMatrix(e),s=this.coplanarPoint(Uu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new po,YC=new ht(.5,.5),el=new Y;class Sx{constructor(e=new Nr,n=new Nr,i=new Nr,s=new Nr,r=new Nr,a=new Nr){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],u=r[3],f=r[4],h=r[5],d=r[6],c=r[7],m=r[8],v=r[9],g=r[10],p=r[11],x=r[12],y=r[13],E=r[14],S=r[15];if(s[0].setComponents(u-a,c-f,p-m,S-x).normalize(),s[1].setComponents(u+a,c+f,p+m,S+x).normalize(),s[2].setComponents(u+o,c+h,p+v,S+y).normalize(),s[3].setComponents(u-o,c-h,p-v,S-y).normalize(),i)s[4].setComponents(l,d,g,E).normalize(),s[5].setComponents(u-l,c-d,p-g,S-E).normalize();else if(s[4].setComponents(u-l,c-d,p-g,S-E).normalize(),n===hi)s[5].setComponents(u+l,c+d,p+g,S+E).normalize();else if(n===rc)s[5].setComponents(l,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=YC.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(el.x=s.normal.x>0?e.max.x:e.min.x,el.y=s.normal.y>0?e.max.y:e.min.y,el.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends na{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new Y,oc=new Y,Gm=new Ut,xa=new Hh,tl=new po,Fu=new Y,Wm=new Y;class qC extends cn{constructor(e=new Rn,n=new Mx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)ac.fromBufferAttribute(n,s-1),oc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new xi(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;Gm.copy(s).invert(),xa.copy(e.ray).applyMatrix4(Gm);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const c=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=c,g=m-1;v<g;v+=u){const p=f.getX(v),x=f.getX(v+1),y=nl(this,e,xa,l,p,x,v);y&&n.push(y)}if(this.isLineLoop){const v=f.getX(m-1),g=f.getX(c),p=nl(this,e,xa,l,v,g,m-1);p&&n.push(p)}}else{const c=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=c,g=m-1;v<g;v+=u){const p=nl(this,e,xa,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){const v=nl(this,e,xa,l,m-1,c,m-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nl(t,e,n,i,s,r,a){const o=t.geometry.attributes.position;if(ac.fromBufferAttribute(o,s),oc.fromBufferAttribute(o,r),n.distanceSqToSegment(ac,oc,Fu,Wm)>i)return;Fu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Fu);if(!(u<e.near||u>e.far))return{distance:u,point:Wm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class Ex extends na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jm=new Ut,Pd=new Hh,il=new po,rl=new Y;class KC extends cn{constructor(e=new Rn,n=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;jm.copy(s).invert(),Pd.copy(e.ray).applyMatrix4(jm);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),c=Math.min(u.count,a.start+a.count);for(let m=d,v=c;m<v;m++){const g=u.getX(m);rl.fromBufferAttribute(h,g),Xm(rl,g,l,s,e,n,this)}}else{const d=Math.max(0,a.start),c=Math.min(h.count,a.start+a.count);for(let m=d,v=c;m<v;m++)rl.fromBufferAttribute(h,m),Xm(rl,m,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xm(t,e,n,i,s,r,a){const o=Pd.distanceSqToPoint(t);if(o<n){const l=new Y;Pd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wx extends ln{constructor(e=[],n=Kr,i,s,r,a,o,l,u,f){super(e,n,i,s,r,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ks extends ln{constructor(e,n,i=_i,s,r,a,o=Xt,l=Xt,u,f=Wi,h=1){if(f!==Wi&&f!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,s,r,a,o,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $C extends Ks{constructor(e,n=_i,i=Kr,s,r,a=Xt,o=Xt,l,u=Wi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,s,r,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ax extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends Rn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],f=[],h=[];let d=0,c=0;m("z","y","x",-1,-1,i,n,e,a,r,0),m("z","y","x",1,-1,i,n,-e,a,r,1),m("x","z","y",1,1,e,i,n,s,a,2),m("x","z","y",1,-1,e,i,-n,s,a,3),m("x","y","z",1,-1,e,n,i,s,r,4),m("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(f,3)),this.setAttribute("uv",new xi(h,2));function m(v,g,p,x,y,E,S,M,w,_,T){const A=E/w,C=S/_,P=E/2,D=S/2,U=M/2,L=w+1,N=_+1;let F=0,O=0;const G=new Y;for(let K=0;K<N;K++){const te=K*C-D;for(let se=0;se<L;se++){const Me=se*A-P;G[v]=Me*x,G[g]=te*y,G[p]=U,u.push(G.x,G.y,G.z),G[v]=0,G[g]=0,G[p]=M>0?1:-1,f.push(G.x,G.y,G.z),h.push(se/w),h.push(1-K/_),F+=1}}for(let K=0;K<_;K++)for(let te=0;te<w;te++){const se=d+te+L*K,Me=d+te+L*(K+1),re=d+(te+1)+L*(K+1),ae=d+(te+1)+L*K;l.push(se,Me,ae),l.push(Me,re,ae),O+=6}o.addGroup(c,O,T),c+=O,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rc extends Rn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),u=o+1,f=l+1,h=e/o,d=n/l,c=[],m=[],v=[],g=[];for(let p=0;p<f;p++){const x=p*d-a;for(let y=0;y<u;y++){const E=y*h-r;m.push(E,-x,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+u*p,E=x+u*(p+1),S=x+1+u*(p+1),M=x+1+u*p;c.push(y,E,M),c.push(E,S,M)}this.setIndex(c),this.setAttribute("position",new xi(m,3)),this.setAttribute("normal",new xi(v,3)),this.setAttribute("uv",new xi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(Ym(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Ym(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const s in i)e[s]=i[s]}return e}function Ym(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function JC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ZC={clone:$s,merge:sn};var QC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QC,this.fragmentShader=eR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=JC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tR extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nR extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iR extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sl=new Y,al=new ta,oi=new Y;class Cx extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,al,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,al,oi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(sl,al,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,al,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new Y,qm=new ht,Km=new ht;class Fn extends Cx{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,qm,Km),n.subVectors(Km,qm)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(du*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/u,s*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Rx extends Cx{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vs=-90,xs=1;class rR extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(vs,xs,e,n);s.layers=this.layers,this.add(s);const r=new Fn(vs,xs,e,n);r.layers=this.layers,this.add(r);const a=new Fn(vs,xs,e,n);a.layers=this.layers,this.add(a);const o=new Fn(vs,xs,e,n);o.layers=this.layers,this.add(o);const l=new Fn(vs,xs,e,n);l.layers=this.layers,this.add(l);const u=new Fn(vs,xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,c),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class sR extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yh=class Yh{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Yh.prototype.isMatrix2=!0;let $m=Yh;function Jm(t,e,n,i){const s=aR(i);switch(n){case fx:return t*e;case hx:return t*e/s.components*s.byteLength;case Fh:return t*e/s.components*s.byteLength;case $r:return t*e*2/s.components*s.byteLength;case kh:return t*e*2/s.components*s.byteLength;case dx:return t*e*3/s.components*s.byteLength;case Zn:return t*e*4/s.components*s.byteLength;case Oh:return t*e*4/s.components*s.byteLength;case wl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:case ed:return Math.max(t,16)*Math.max(e,8)/4;case Jf:case Qf:return Math.max(t,8)*Math.max(e,8)/2;case td:case nd:case rd:case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case id:case ec:case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sd:case Md:case Ed:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wd:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aR(t){switch(t){case kn:case ox:return{byteLength:1,components:1};case to:case lx:case Gi:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case _i:case Dh:case di:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function oR(t){const e=new WeakMap;function n(o,l){const u=o.array,f=o.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),o.onUploadCallback();let c;if(u instanceof Float32Array)c=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)c=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?c=t.HALF_FLOAT:c=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=t.SHORT;else if(u instanceof Uint32Array)c=t.UNSIGNED_INT;else if(u instanceof Int32Array)c=t.INT;else if(u instanceof Int8Array)c=t.BYTE;else if(u instanceof Uint8Array)c=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const f=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,f);else{h.sort((c,m)=>c.start-m.start);let d=0;for(let c=1;c<h.length;c++){const m=h[d],v=h[c];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let c=0,m=h.length;c<m;c++){const v=h[c];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}var lR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cR=`#ifdef USE_ALPHAHASH
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
#endif`,uR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pR=`#ifdef USE_AOMAP
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
#endif`,mR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_R=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SR=`#ifdef USE_IRIDESCENCE
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
#endif`,MR=`#ifdef USE_BUMPMAP
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
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IR=`#define PI 3.141592653589793
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
} // validated`,LR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DR=`vec3 transformedNormal = objectNormal;
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
#endif`,NR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OR="gl_FragColor = linearToOutputTexel( gl_FragColor );",BR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,GR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
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
#endif`,jR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KR=`#ifdef USE_GRADIENTMAP
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
}`,$R=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QR=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,eP=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,tP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,aP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oP=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,cP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xP=`#if defined( USE_POINTS_UV )
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
#endif`,_P=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,AP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IP=`#ifdef USE_NORMALMAP
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
#endif`,LP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,OP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,YP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KP=`#ifdef USE_SKINNING
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
#endif`,$P=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JP=`#ifdef USE_SKINNING
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
#endif`,ZP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
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
}`,vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,wb=`#define LAMBERT
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
}`,Ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Tb=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Pb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bb=`#define PHONG
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
}`,Ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Lb=`#define STANDARD
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
}`,Db=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Nb=`#define TOON
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
}`,Ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Fb=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Bb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,zb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:lR,alphahash_pars_fragment:cR,alphamap_fragment:uR,alphamap_pars_fragment:fR,alphatest_fragment:dR,alphatest_pars_fragment:hR,aomap_fragment:pR,aomap_pars_fragment:mR,batching_pars_vertex:gR,batching_vertex:vR,begin_vertex:xR,beginnormal_vertex:_R,bsdfs:yR,iridescence_fragment:SR,bumpmap_pars_fragment:MR,clipping_planes_fragment:ER,clipping_planes_pars_fragment:wR,clipping_planes_pars_vertex:AR,clipping_planes_vertex:TR,color_fragment:CR,color_pars_fragment:RR,color_pars_vertex:PR,color_vertex:bR,common:IR,cube_uv_reflection_fragment:LR,defaultnormal_vertex:DR,displacementmap_pars_vertex:NR,displacementmap_vertex:UR,emissivemap_fragment:FR,emissivemap_pars_fragment:kR,colorspace_fragment:OR,colorspace_pars_fragment:BR,envmap_fragment:zR,envmap_common_pars_fragment:VR,envmap_pars_fragment:HR,envmap_pars_vertex:GR,envmap_physical_pars_fragment:eP,envmap_vertex:WR,fog_vertex:jR,fog_pars_vertex:XR,fog_fragment:YR,fog_pars_fragment:qR,gradientmap_pars_fragment:KR,lightmap_pars_fragment:$R,lights_lambert_fragment:JR,lights_lambert_pars_fragment:ZR,lights_pars_begin:QR,lights_toon_fragment:tP,lights_toon_pars_fragment:nP,lights_phong_fragment:iP,lights_phong_pars_fragment:rP,lights_physical_fragment:sP,lights_physical_pars_fragment:aP,lights_fragment_begin:oP,lights_fragment_maps:lP,lights_fragment_end:cP,lightprobes_pars_fragment:uP,logdepthbuf_fragment:fP,logdepthbuf_pars_fragment:dP,logdepthbuf_pars_vertex:hP,logdepthbuf_vertex:pP,map_fragment:mP,map_pars_fragment:gP,map_particle_fragment:vP,map_particle_pars_fragment:xP,metalnessmap_fragment:_P,metalnessmap_pars_fragment:yP,morphinstance_vertex:SP,morphcolor_vertex:MP,morphnormal_vertex:EP,morphtarget_pars_vertex:wP,morphtarget_vertex:AP,normal_fragment_begin:TP,normal_fragment_maps:CP,normal_pars_fragment:RP,normal_pars_vertex:PP,normal_vertex:bP,normalmap_pars_fragment:IP,clearcoat_normal_fragment_begin:LP,clearcoat_normal_fragment_maps:DP,clearcoat_pars_fragment:NP,iridescence_pars_fragment:UP,opaque_fragment:FP,packing:kP,premultiplied_alpha_fragment:OP,project_vertex:BP,dithering_fragment:zP,dithering_pars_fragment:VP,roughnessmap_fragment:HP,roughnessmap_pars_fragment:GP,shadowmap_pars_fragment:WP,shadowmap_pars_vertex:jP,shadowmap_vertex:XP,shadowmask_pars_fragment:YP,skinbase_vertex:qP,skinning_pars_vertex:KP,skinning_vertex:$P,skinnormal_vertex:JP,specularmap_fragment:ZP,specularmap_pars_fragment:QP,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ab,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:fb,cube_vert:db,cube_frag:hb,depth_vert:pb,depth_frag:mb,distance_vert:gb,distance_frag:vb,equirect_vert:xb,equirect_frag:_b,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:wb,meshlambert_frag:Ab,meshmatcap_vert:Tb,meshmatcap_frag:Cb,meshnormal_vert:Rb,meshnormal_frag:Pb,meshphong_vert:bb,meshphong_frag:Ib,meshphysical_vert:Lb,meshphysical_frag:Db,meshtoon_vert:Nb,meshtoon_frag:Ub,points_vert:Fb,points_frag:kb,shadow_vert:Ob,shadow_frag:Bb,sprite_vert:zb,sprite_frag:Vb},ve={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ui={basic:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:sn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:sn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:sn([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:sn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:sn([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:sn([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:sn([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:sn([ve.lights,ve.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ui.physical={uniforms:sn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ol={r:0,b:0,g:0},Hb=new Ut,bx=new ke;bx.set(-1,0,0,0,1,0,0,0,1);function Gb(t,e,n,i,s,r){const a=new ot(0);let o=s===!0?0:1,l,u,f=null,h=0,d=null;function c(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const E=x.backgroundBlurriness>0;y=e.get(y,E)}return y}function m(x){let y=!1;const E=c(x);E===null?g(a,o):E&&E.isColor&&(g(E,1),y=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,y){const E=c(y);E&&(E.isCubeTexture||E.mapping===Cc)?(u===void 0&&(u=new ji(new mo(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:$s(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(y.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(bx),u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==ct,(f!==E||h!==E.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ji(new Rc(2,2),new yi({name:"BackgroundMaterial",uniforms:$s(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(ol,Tx(t)),n.buffers.color.setClear(ol.r,ol.g,ol.b,y,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:v,dispose:p}}function Wb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(C,P,D,U,L){let N=!1;const F=h(C,U,D,P);r!==F&&(r=F,u(r.object)),N=c(C,U,D,L),N&&m(C,U,D,L),L!==null&&e.update(L,t.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,E(C,P,D,U),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return t.createVertexArray()}function u(C){return t.bindVertexArray(C)}function f(C){return t.deleteVertexArray(C)}function h(C,P,D,U){const L=U.wireframe===!0;let N=i[P.id];N===void 0&&(N={},i[P.id]=N);const F=C.isInstancedMesh===!0?C.id:0;let O=N[F];O===void 0&&(O={},N[F]=O);let G=O[D.id];G===void 0&&(G={},O[D.id]=G);let K=G[L];return K===void 0&&(K=d(l()),G[L]=K),K}function d(C){const P=[],D=[],U=[];for(let L=0;L<n;L++)P[L]=0,D[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:C,attributes:{},index:null}}function c(C,P,D,U){const L=r.attributes,N=P.attributes;let F=0;const O=D.getAttributes();for(const G in O)if(O[G].location>=0){const te=L[G];let se=N[G];if(se===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function m(C,P,D,U){const L={},N=P.attributes;let F=0;const O=D.getAttributes();for(const G in O)if(O[G].location>=0){let te=N[G];te===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),L[G]=se,F++}r.attributes=L,r.attributesNum=F,r.index=U}function v(){const C=r.newAttributes;for(let P=0,D=C.length;P<D;P++)C[P]=0}function g(C){p(C,0)}function p(C,P){const D=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;D[C]=1,U[C]===0&&(t.enableVertexAttribArray(C),U[C]=1),L[C]!==P&&(t.vertexAttribDivisor(C,P),L[C]=P)}function x(){const C=r.newAttributes,P=r.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==C[D]&&(t.disableVertexAttribArray(D),P[D]=0)}function y(C,P,D,U,L,N,F){F===!0?t.vertexAttribIPointer(C,P,D,L,N):t.vertexAttribPointer(C,P,D,U,L,N)}function E(C,P,D,U){v();const L=U.attributes,N=D.getAttributes(),F=P.defaultAttributeValues;for(const O in N){const G=N[O];if(G.location>=0){let K=L[O];if(K===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const te=K.normalized,se=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const re=Me.buffer,ae=Me.type,W=Me.bytesPerElement,ee=ae===t.INT||ae===t.UNSIGNED_INT||K.gpuType===Dh;if(K.isInterleavedBufferAttribute){const ie=K.data,xe=ie.stride,be=K.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<G.locationSize;Re++)p(G.location+Re,ie.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<G.locationSize;Re++)g(G.location+Re);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Re=0;Re<G.locationSize;Re++)y(G.location+Re,se/G.locationSize,ae,te,xe*W,(be+se/G.locationSize*Re)*W,ee)}else{if(K.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)p(G.location+ie,K.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ie=0;ie<G.locationSize;ie++)g(G.location+ie);t.bindBuffer(t.ARRAY_BUFFER,re);for(let ie=0;ie<G.locationSize;ie++)y(G.location+ie,se/G.locationSize,ae,te,se*W,se/G.locationSize*ie*W,ee)}}else if(F!==void 0){const te=F[O];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(G.location,te);break;case 3:t.vertexAttrib3fv(G.location,te);break;case 4:t.vertexAttrib4fv(G.location,te);break;default:t.vertexAttrib1fv(G.location,te)}}}}x()}function S(){T();for(const C in i){const P=i[C];for(const D in P){const U=P[D];for(const L in U){const N=U[L];for(const F in N)f(N[F].object),delete N[F];delete U[L]}}delete i[C]}}function M(C){if(i[C.id]===void 0)return;const P=i[C.id];for(const D in P){const U=P[D];for(const L in U){const N=U[L];for(const F in N)f(N[F].object),delete N[F];delete U[L]}}delete i[C.id]}function w(C){for(const P in i){const D=i[P];for(const U in D){const L=D[U];if(L[C.id]===void 0)continue;const N=L[C.id];for(const F in N)f(N[F].object),delete N[F];delete L[C.id]}}}function _(C){for(const P in i){const D=i[P],U=C.isInstancedMesh===!0?C.id:0,L=D[U];if(L!==void 0){for(const N in L){const F=L[N];for(const O in F)f(F[O].object),delete F[O];delete L[N]}delete D[U],Object.keys(D).length===0&&delete i[P]}}}function T(){A(),a=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function jb(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let d=0;for(let c=0;c<f;c++)d+=u[c];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xb(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==di&&!_)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(Ue("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:c,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:E,maxSamples:S,samples:M}}function Yb(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Nr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const c=h.length!==0||d||i!==0||s;return s=d,i=h.length,c},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,c){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=t.get(h);if(!s||m===null||m.length===0||r&&!g)r?f(null):u();else{const x=r?0:i,y=x*4;let E=p.clippingState||null;l.value=E,E=f(m,d,y,c);for(let S=0;S!==y;++S)E[S]=n[S];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,c,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=c+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,E=c;y!==v;++y,E+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const fr=4,Zm=[.125,.215,.35,.446,.526,.582],Fr=20,qb=256,_a=new Rx,Qm=new ot;let ku=null,Ou=0,Bu=0,zu=!1;const Kb=new Y;class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=Kb}=r;ku=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,Ou,Bu),this._renderer.xr.enabled=zu,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Gi,format:Zn,colorSpace:nc,depthBuffer:!1},s=tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$b(r)),this._blurMaterial=Zb(r,e,n),this._ggxMaterial=Jb(r,e,n)}return s}_compileMaterial(e){const n=new ji(new Rn,e);this._renderer.compile(n,_a)}_sceneToCubeUV(e,n,i,s,r){const l=new Fn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,c=h.toneMapping;h.getClearColor(Qm),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new mo,new yx({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(Qm),p=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,u[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[y],r.y,r.z)):E===1?(l.up.set(0,0,u[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[y],r.z)):(l.up.set(0,u[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[y]));const S=this._cubeSize;_s(s,E*S,y>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(v,l),h.render(e,l)}h.toneMapping=c,h.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Kr||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,_a)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-f*f),d=0+u*1.25,c=h*d,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-fr?i-m+fr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=c,l.mipInt.value=m-n,_s(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,_a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,_s(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,_a)}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[s];h.material=u;const d=u.uniforms,c=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*Fr-1),v=r/m,g=isFinite(r)?1+Math.floor(f*v):Fr;g>Fr&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const p=[];let x=0;for(let w=0;w<Fr;++w){const _=w/v,T=Math.exp(-_*_/2);p.push(T),w===0?x+=T:w<g&&(x+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const E=this._sizeLods[s],S=3*E*(s>y-fr?s-y+fr:0),M=4*(this._cubeSize-E);_s(n,S,M,3*E,2*E),l.setRenderTarget(n),l.render(h,_a)}}function $b(t){const e=[],n=[],i=[];let s=t;const r=t-fr+1+Zm.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>t-fr?l=Zm[a-t+fr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],c=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*c),y=new Float32Array(g*m*c),E=new Float32Array(p*m*c);for(let M=0;M<c;M++){const w=M%3*2/3-1,_=M>2?0:-1,T=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];x.set(T,v*m*M),y.set(d,g*m*M);const A=[M,M,M,M,M,M];E.set(A,p*m*M)}const S=new Rn;S.setAttribute("position",new gn(x,v)),S.setAttribute("uv",new gn(y,g)),S.setAttribute("faceIndex",new gn(E,p)),i.push(new ji(S,null)),s>fr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function tg(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Jb(t,e,n){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Zb(t,e,n){const i=new Float32Array(Fr),s=new Y(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ng(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ig(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}class Ix extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wx(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mo(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Fi});r.uniforms.tEquirect.value=n;const a=new ji(s,r),o=n.minFilter;return n.minFilter===zr&&(n.minFilter=tn),new rR(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}function Qb(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,c=!1){return d==null?null:c?a(d):r(d)}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===cu||c===uu)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new Ix(m.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",u),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const c=d.mapping,m=c===cu||c===uu,v=c===Kr||c===qs;if(m||v){let g=n.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new eg(t)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new eg(t)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,c){return c===cu?d.mapping=Kr:c===uu&&(d.mapping=qs),d}function l(d){let c=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&c++;return c===m}function u(d){const c=d.target;c.removeEventListener("dispose",u);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function f(d){const c=d.target;c.removeEventListener("dispose",f);const m=n.get(c);m!==void 0&&(n.delete(c),m.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function e2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Cd("WebGLRenderer: "+i+" extension not supported."),s}}}function t2(t,e,n,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const c=r.get(d);c&&(e.remove(c),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const c in d)e.update(d[c],t.ARRAY_BUFFER)}function u(h){const d=[],c=h.index,m=h.attributes.position;let v=0;if(m===void 0)return;if(c!==null){const x=c.array;v=c.version;for(let y=0,E=x.length;y<E;y+=3){const S=x[y+0],M=x[y+1],w=x[y+2];d.push(S,M,M,w,w,S)}}else{const x=m.array;v=m.version;for(let y=0,E=x.length/3-1;y<E;y+=3){const S=y+0,M=y+1,w=y+2;d.push(S,M,M,w,w,S)}}const g=new(m.count>=65535?_x:xx)(d,1);g.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function f(h){const d=r.get(h);if(d){const c=h.index;c!==null&&d.version<c.version&&u(h)}else u(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function n2(t,e,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,r,h*a),n.update(d,i,1)}function u(h,d,c){c!==0&&(t.drawElementsInstanced(i,d,r,h*a,c),n.update(d,i,c))}function f(h,d,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,c);let v=0;for(let g=0;g<c;g++)v+=d[g];n.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function i2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function r2(t,e,n){const i=new WeakMap,s=new Nt;function r(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let A=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var c=A;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),v===!0&&(E=2),g===!0&&(E=3);let S=o.attributes.position.count*E,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*M*4*h),_=new mx(w,S,M,h);_.type=di,_.needsUpdate=!0;const T=E*4;for(let C=0;C<h;C++){const P=p[C],D=x[C],U=y[C],L=S*M*4*C;for(let N=0;N<P.count;N++){const F=N*T;m===!0&&(s.fromBufferAttribute(P,N),w[L+F+0]=s.x,w[L+F+1]=s.y,w[L+F+2]=s.z,w[L+F+3]=0),v===!0&&(s.fromBufferAttribute(D,N),w[L+F+4]=s.x,w[L+F+5]=s.y,w[L+F+6]=s.z,w[L+F+7]=0),g===!0&&(s.fromBufferAttribute(U,N),w[L+F+8]=s.x,w[L+F+9]=s.y,w[L+F+10]=s.z,w[L+F+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new ht(S,M)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function s2(t,e,n,i,s){let r=new WeakMap;function a(u){const f=s.render.frame,h=u.geometry,d=e.get(u,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const c=u.skeleton;r.get(c)!==f&&(c.update(),r.set(c,f))}return d}function o(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const a2={[Qv]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[rx]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function o2(t,e,n,i,s){const r=new vi(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ks(e,n):void 0}),a=new vi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),o=new Rn;o.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xi([0,2,0,0,2,0],2));const l=new tR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ji(o,l),f=new Rx(-1,1,1,-1,0,1);let h=null,d=null,c=!1,m,v=null,g=[],p=!1;this.setSize=function(x,y){r.setSize(x,y),a.setSize(x,y);for(let E=0;E<g.length;E++){const S=g[E];S.setSize&&S.setSize(x,y)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const y=r.width,E=r.height;for(let S=0;S<g.length;S++){const M=g[S];M.setSize&&M.setSize(y,E)}},this.begin=function(x,y){if(c||x.toneMapping===gi&&g.length===0)return!1;if(v=y,y!==null){const E=y.width,S=y.height;(r.width!==E||r.height!==S)&&this.setSize(E,S)}return p===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=gi,!0},this.hasRenderPass=function(){return p},this.end=function(x,y){x.toneMapping=m,c=!0;let E=r,S=a;for(let M=0;M<g.length;M++){const w=g[M];if(w.enabled!==!1&&(w.render(x,S,E,y),w.needsSwap!==!1)){const _=E;E=S,S=_}}if(h!==x.outputColorSpace||d!==x.toneMapping){h=x.outputColorSpace,d=x.toneMapping,l.defines={},Ze.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const M=a2[d];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(v),x.render(u,f),v=null,c=!1},this.isCompositing=function(){return c},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Lx=new ln,bd=new Ks(1,1),Dx=new mx,Nx=new bC,Ux=new wx,rg=[],sg=[],ag=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);function ia(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=rg[s];if(r===void 0&&(r=new Float32Array(s),rg[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=sg[e];n===void 0&&(n=new Int32Array(e),sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function l2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function d2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;lg.set(i),t.uniformMatrix2fv(this.addr,!1,lg),Vt(n,i)}}function h2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;og.set(i),t.uniformMatrix3fv(this.addr,!1,og),Vt(n,i)}}function p2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;ag.set(i),t.uniformMatrix4fv(this.addr,!1,ag),Vt(n,i)}}function m2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function v2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function x2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function _2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function S2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function M2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function E2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(bd.compareFunction=n.isReversedDepthBuffer()?zh:Bh,r=bd):r=Lx,n.setTexture2D(e||r,s)}function w2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Nx,s)}function A2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ux,s)}function T2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Dx,s)}function C2(t){switch(t){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return x2;case 5125:return _2;case 36294:return y2;case 36295:return S2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return T2}}function R2(t,e){t.uniform1fv(this.addr,e)}function P2(t,e){const n=ia(e,this.size,2);t.uniform2fv(this.addr,n)}function b2(t,e){const n=ia(e,this.size,3);t.uniform3fv(this.addr,n)}function I2(t,e){const n=ia(e,this.size,4);t.uniform4fv(this.addr,n)}function L2(t,e){const n=ia(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function D2(t,e){const n=ia(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function N2(t,e){const n=ia(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function U2(t,e){t.uniform1iv(this.addr,e)}function F2(t,e){t.uniform2iv(this.addr,e)}function k2(t,e){t.uniform3iv(this.addr,e)}function O2(t,e){t.uniform4iv(this.addr,e)}function B2(t,e){t.uniform1uiv(this.addr,e)}function z2(t,e){t.uniform2uiv(this.addr,e)}function V2(t,e){t.uniform3uiv(this.addr,e)}function H2(t,e){t.uniform4uiv(this.addr,e)}function G2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=bd:a=Lx;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function W2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Nx,r[a])}function j2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Ux,r[a])}function X2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Dx,r[a])}function Y2(t){switch(t){case 5126:return R2;case 35664:return P2;case 35665:return b2;case 35666:return I2;case 35674:return L2;case 35675:return D2;case 35676:return N2;case 5124:case 35670:return U2;case 35667:case 35671:return F2;case 35668:case 35672:return k2;case 35669:case 35673:return O2;case 5125:return B2;case 36294:return z2;case 36295:return V2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return X2}}class q2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=C2(n.type)}}class K2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Y2(n.type)}}class $2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function J2(t,e,n){const i=t.name,s=i.length;for(Vu.lastIndex=0;;){const r=Vu.exec(i),a=Vu.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){cg(n,u===void 0?new q2(o,t,e):new K2(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new $2(o),cg(n,h)),n=h}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);J2(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function ug(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Z2=37297;let Q2=0;function e3(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const fg=new ke;function t3(t){Ze._getMatrix(fg,Ze.workingColorSpace,t);const e=`mat3( ${fg.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+e3(t.getShaderSource(e),o)}else return r}function n3(t,e){const n=t3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const i3={[Qv]:"Linear",[ex]:"Reinhard",[tx]:"Cineon",[nx]:"ACESFilmic",[rx]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function r3(t,e){const n=i3[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new Y;function s3(){Ze.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function o3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function l3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ta(t){return t!==""}function hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(t){return t.replace(c3,f3)}const u3=new Map;function f3(t,e){let n=Xe[e];if(n===void 0){const i=u3.get(e);if(i!==void 0)n=Xe[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Id(n)}const d3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(t){return t.replace(d3,h3)}function h3(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const p3={[El]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function m3(t){return p3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g3={[Kr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Cc]:"ENVMAP_TYPE_CUBE_UV"};function v3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":g3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const x3={[qs]:"ENVMAP_MODE_REFRACTION"};function _3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":x3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y3={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[cC]:"ENVMAP_BLENDING_MIX",[uC]:"ENVMAP_BLENDING_ADD"};function S3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":y3[t.combine]||"ENVMAP_BLENDING_NONE"}function M3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function E3(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=m3(n),u=v3(n),f=_3(n),h=S3(n),d=M3(n),c=a3(n),m=o3(r),v=s.createProgram();let g,p,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ta).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(g=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==gi?r3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,n3("linearToOutputTexel",n.outputColorSpace),s3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),a=Id(a),a=hg(a,n),a=pg(a,n),o=Id(o),o=hg(o,n),o=pg(o,n),a=mg(a),o=mg(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+a,E=x+p+o,S=ug(s,s.VERTEX_SHADER,y),M=ug(s,s.FRAGMENT_SHADER,E);s.attachShader(v,S),s.attachShader(v,M),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(t.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(M)||"",L=P.trim(),N=D.trim(),F=U.trim();let O=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,S,M);else{const K=dg(s,S,"vertex"),te=dg(s,M,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+K+`
`+te)}else L!==""?Ue("WebGLProgram: Program Info Log:",L):(N===""||F==="")&&(G=!1);G&&(C.diagnostics={runnable:O,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(S),s.deleteShader(M),_=new Rl(s,v),T=l3(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,Z2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Q2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}let w3=0;class A3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new T3(e),n.set(e,i)),i}}class T3{constructor(e){this.id=w3++,this.code=e,this.usedTimes=0}}function C3(t){return t===$r||t===ec||t===tc}function R3(t,e,n,i,s,r){const a=new gx,o=new A3,l=new Set,u=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,A,C,P,D){const U=C.fog,L=P.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||N,F),G=O&&O.mapping===Cc?O.image.height:null,K=c[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=te!==void 0?te.length:0;let Me=0;L.morphAttributes.position!==void 0&&(Me=1),L.morphAttributes.normal!==void 0&&(Me=2),L.morphAttributes.color!==void 0&&(Me=3);let re,ae,W,ee;if(K){const Be=ui[K];re=Be.vertexShader,ae=Be.fragmentShader}else re=_.vertexShader,ae=_.fragmentShader,o.update(_),W=o.getVertexShaderID(_),ee=o.getFragmentShaderID(_);const ie=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),be=P.isInstancedMesh===!0,Re=P.isBatchedMesh===!0,We=!!_.map,Ve=!!_.matcap,rt=!!O,je=!!_.aoMap,Ne=!!_.lightMap,Ke=!!_.bumpMap,Oe=!!_.normalMap,$e=!!_.displacementMap,B=!!_.emissiveMap,at=!!_.metalnessMap,He=!!_.roughnessMap,lt=_.anisotropy>0,ge=_.clearcoat>0,xt=_.dispersion>0,I=_.iridescence>0,R=_.sheen>0,j=_.transmission>0,Z=lt&&!!_.anisotropyMap,oe=ge&&!!_.clearcoatMap,ue=ge&&!!_.clearcoatNormalMap,me=ge&&!!_.clearcoatRoughnessMap,J=I&&!!_.iridescenceMap,ne=I&&!!_.iridescenceThicknessMap,Se=R&&!!_.sheenColorMap,Ae=R&&!!_.sheenRoughnessMap,he=!!_.specularMap,fe=!!_.specularColorMap,Fe=!!_.specularIntensityMap,Ge=j&&!!_.transmissionMap,st=j&&!!_.thicknessMap,z=!!_.gradientMap,de=!!_.alphaMap,Q=_.alphaTest>0,Ee=!!_.alphaHash,pe=!!_.extensions;let le=gi;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(le=t.toneMapping);const Ie={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:ae,defines:_.defines,customVertexShaderID:W,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Re,batchingColor:Re&&P._colorsTexture!==null,instancing:be,instancingColor:be&&P.instanceColor!==null,instancingMorph:be&&P.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:Ve,envMap:rt,envMapMode:rt&&O.mapping,envMapCubeUVHeight:G,aoMap:je,lightMap:Ne,bumpMap:Ke,normalMap:Oe,displacementMap:$e,emissiveMap:B,normalMapObjectSpace:Oe&&_.normalMapType===hC,normalMapTangentSpace:Oe&&_.normalMapType===Em,packedNormalMap:Oe&&_.normalMapType===Em&&C3(_.normalMap.format),metalnessMap:at,roughnessMap:He,anisotropy:lt,anisotropyMap:Z,clearcoat:ge,clearcoatMap:oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,dispersion:xt,iridescence:I,iridescenceMap:J,iridescenceThicknessMap:ne,sheen:R,sheenColorMap:Se,sheenRoughnessMap:Ae,specularMap:he,specularColorMap:fe,specularIntensityMap:Fe,transmission:j,transmissionMap:Ge,thicknessMap:st,gradientMap:z,opaque:_.transparent===!1&&_.blending===Os&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:Ee,combine:_.combine,mapUv:We&&m(_.map.channel),aoMapUv:je&&m(_.aoMap.channel),lightMapUv:Ne&&m(_.lightMap.channel),bumpMapUv:Ke&&m(_.bumpMap.channel),normalMapUv:Oe&&m(_.normalMap.channel),displacementMapUv:$e&&m(_.displacementMap.channel),emissiveMapUv:B&&m(_.emissiveMap.channel),metalnessMapUv:at&&m(_.metalnessMap.channel),roughnessMapUv:He&&m(_.roughnessMap.channel),anisotropyMapUv:Z&&m(_.anisotropyMap.channel),clearcoatMapUv:oe&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:fe&&m(_.specularColorMap.channel),specularIntensityMapUv:Fe&&m(_.specularIntensityMap.channel),transmissionMapUv:Ge&&m(_.transmissionMap.channel),thicknessMapUv:st&&m(_.thicknessMap.channel),alphaMapUv:de&&m(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Oe||lt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(We||de),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:B&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bi,flipSided:_.side===yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(p(T,_),x(T,_),T.push(t.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function y(_){const T=c[_.type];let A;if(T){const C=ui[T];A=ZC.clone(C.uniforms)}else A=_.uniforms;return A}function E(_,T){let A=f.get(T);return A!==void 0?++A.usedTimes:(A=new E3(t,T,_,s),u.push(A),f.set(T,A)),A}function S(_){if(--_.usedTimes===0){const T=u.indexOf(_);u[T]=u[u.length-1],u.pop(),f.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:M,programs:u,dispose:w}}function P3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function b3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function vg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xg(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d){let c=0;return d.isInstancedMesh&&(c+=2),d.isSkinnedMesh&&(c+=1),c}function o(d,c,m,v,g,p){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:c,material:m,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},t[e]=x):(x.id=d.id,x.object=d,x.geometry=c,x.material=m,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=g,x.group=p),e++,x}function l(d,c,m,v,g,p){const x=o(d,c,m,v,g,p);m.transmission>0?i.push(x):m.transparent===!0?s.push(x):n.push(x)}function u(d,c,m,v,g,p){const x=o(d,c,m,v,g,p);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):n.unshift(x)}function f(d,c){n.length>1&&n.sort(d||b3),i.length>1&&i.sort(c||vg),s.length>1&&s.sort(c||vg)}function h(){for(let d=e,c=t.length;d<c;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:u,finish:h,sort:f}}function I3(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new xg,t.set(i,[a])):s>=r.length?(a=new xg,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function L3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ot};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function D3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let N3=0;function U3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function F3(t){const e=new L3,n=D3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const s=new Y,r=new Ut,a=new Ut;function o(u){let f=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let c=0,m=0,v=0,g=0,p=0,x=0,y=0,E=0,S=0,M=0,w=0;u.sort(U3);for(let T=0,A=u.length;T<A;T++){const C=u[T],P=C.color,D=C.intensity,U=C.distance;let L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===$r?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=P.r*D,h+=P.g*D,d+=P.b*D;else if(C.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(C.sh.coefficients[N],D);w++}else if(C.isDirectionalLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,O=n.get(C);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.directionalShadow[c]=O,i.directionalShadowMap[c]=L,i.directionalShadowMatrix[c]=C.shadow.matrix,x++}i.directional[c]=N,c++}else if(C.isSpotLight){const N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(P).multiplyScalar(D),N.distance=U,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,i.spot[v]=N;const F=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,F.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[v]=F.matrix,C.castShadow){const O=n.get(C);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=L,E++}v++}else if(C.isRectAreaLight){const N=e.get(C);N.color.copy(P).multiplyScalar(D),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=N,g++}else if(C.isPointLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){const F=C.shadow,O=n.get(C);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=L,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=N,m++}else if(C.isHemisphereLight){const N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(D),N.groundColor.copy(C.groundColor).multiplyScalar(D),i.hemi[p]=N,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==c||_.pointLength!==m||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==x||_.numPointShadows!==y||_.numSpotShadows!==E||_.numSpotMaps!==S||_.numLightProbes!==w)&&(i.directional.length=c,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+S-M,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,_.directionalLength=c,_.pointLength=m,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=x,_.numPointShadows=y,_.numSpotShadows=E,_.numSpotMaps=S,_.numLightProbes=w,i.version=N3++)}function l(u,f){let h=0,d=0,c=0,m=0,v=0;const g=f.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const y=u[p];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),h++}else if(y.isSpotLight){const E=i.spot[c];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),c++}else if(y.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function _g(t){const e=new F3(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function u(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function k3(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new _g(t),e.set(s,[o])):r>=a.length?(o=new _g(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const O3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z3=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],V3=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],yg=new Ut,ya=new Y,Hu=new Y;function H3(t,e,n){let i=new Sx;const s=new ht,r=new ht,a=new Nt,o=new nR,l=new iR,u={},f=n.maxTextureSize,h={[Mr]:yn,[yn]:Mr,[bi]:bi},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:O3,fragmentShader:B3}),c=d.clone();c.defines.HORIZONTAL_PASS=1;const m=new Rn;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ji(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let p=this.type;this.render=function(M,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===WT&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=El);const T=t.getRenderTarget(),A=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=p!==this.type;D&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(L=>L.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,L=M.length;U<L;U++){const N=M[U],F=N.shadow;if(F===void 0){Ue("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const O=F.getFrameExtents();s.multiply(O),r.copy(F.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/O.x),s.x=r.x*O.x,F.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/O.y),s.y=r.y*O.y,F.mapSize.y=r.y));const G=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Aa){if(N.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new vi(s.x,s.y,{format:$r,type:Gi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Ks(s.x,s.y,di),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Wi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt}else N.isPointLight?(F.map=new Ix(s.x),F.map.depthTexture=new $C(s.x,_i)):(F.map=new vi(s.x,s.y),F.map.depthTexture=new Ks(s.x,s.y,_i)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Wi,this.type===El?(F.map.depthTexture.compareFunction=G?zh:Bh,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt);F.camera.updateProjectionMatrix()}const K=F.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<K;te++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,te),t.clear();else{te===0&&(t.setRenderTarget(F.map),t.clear());const se=F.getViewport(te);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),P.viewport(a)}if(N.isPointLight){const se=F.camera,Me=F.matrix,re=N.distance||se.far;re!==se.far&&(se.far=re,se.updateProjectionMatrix()),ya.setFromMatrixPosition(N.matrixWorld),se.position.copy(ya),Hu.copy(se.position),Hu.add(z3[te]),se.up.copy(V3[te]),se.lookAt(Hu),se.updateMatrixWorld(),Me.makeTranslation(-ya.x,-ya.y,-ya.z),yg.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(yg,se.coordinateSystem,se.reversedDepth)}else F.updateMatrices(N);i=F.getFrustum(),E(w,_,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===Aa&&x(F,_),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(T,A,C)};function x(M,w){const _=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,c.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vi(s.x,s.y,{format:$r,type:Gi})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(w,null,_,d,v,null),c.uniforms.shadow_pass.value=M.mapPass.texture,c.uniforms.resolution.value=M.mapSize,c.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(w,null,_,c,v,null)}function y(M,w,_,T){let A=null;const C=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=A.uuid,D=w.uuid;let U=u[P];U===void 0&&(U={},u[P]=U);let L=U[D];L===void 0&&(L=A.clone(),U[D]=L,w.addEventListener("dispose",S)),A=L}if(A.visible=w.visible,A.wireframe=w.wireframe,T===Aa?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=t.properties.get(A);P.light=_}return A}function E(M,w,_,T,A){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Aa)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const D=e.update(M),U=M.material;if(Array.isArray(U)){const L=D.groups;for(let N=0,F=L.length;N<F;N++){const O=L[N],G=U[O.materialIndex];if(G&&G.visible){const K=y(M,G,T,A);M.onBeforeShadow(t,M,w,_,D,K,O),t.renderBufferDirect(_,null,D,K,M,O),M.onAfterShadow(t,M,w,_,D,K,O)}}}else if(U.visible){const L=y(M,U,T,A);M.onBeforeShadow(t,M,w,_,D,L,null),t.renderBufferDirect(_,null,D,L,M,null),M.onAfterShadow(t,M,w,_,D,L,null)}}const P=M.children;for(let D=0,U=P.length;D<U;D++)E(P[D],w,_,T,A)}function S(M){M.target.removeEventListener("dispose",S);for(const _ in u){const T=u[_],A=M.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function G3(t,e){function n(){let z=!1;const de=new Nt;let Q=null;const Ee=new Nt(0,0,0,0);return{setMask:function(pe){Q!==pe&&!z&&(t.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){z=pe},setClear:function(pe,le,Ie,Be,Pt){Pt===!0&&(pe*=Be,le*=Be,Ie*=Be),de.set(pe,le,Ie,Be),Ee.equals(de)===!1&&(t.clearColor(pe,le,Ie,Be),Ee.copy(de))},reset:function(){z=!1,Q=null,Ee.set(-1,0,0,0)}}}function i(){let z=!1,de=!1,Q=null,Ee=null,pe=null;return{setReversed:function(le){if(de!==le){const Ie=e.get("EXT_clip_control");le?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),de=le;const Be=pe;pe=null,this.setClear(Be)}},getReversed:function(){return de},setTest:function(le){le?ie(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(le){Q!==le&&!z&&(t.depthMask(le),Q=le)},setFunc:function(le){if(de&&(le=EC[le]),Ee!==le){switch(le){case Hf:t.depthFunc(t.NEVER);break;case Gf:t.depthFunc(t.ALWAYS);break;case Wf:t.depthFunc(t.LESS);break;case Ys:t.depthFunc(t.LEQUAL);break;case jf:t.depthFunc(t.EQUAL);break;case Xf:t.depthFunc(t.GEQUAL);break;case Yf:t.depthFunc(t.GREATER);break;case qf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=le}},setLocked:function(le){z=le},setClear:function(le){pe!==le&&(pe=le,de&&(le=1-le),t.clearDepth(le))},reset:function(){z=!1,Q=null,Ee=null,pe=null,de=!1}}}function s(){let z=!1,de=null,Q=null,Ee=null,pe=null,le=null,Ie=null,Be=null,Pt=null;return{setTest:function(ft){z||(ft?ie(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(ft){de!==ft&&!z&&(t.stencilMask(ft),de=ft)},setFunc:function(ft,Mi,ii){(Q!==ft||Ee!==Mi||pe!==ii)&&(t.stencilFunc(ft,Mi,ii),Q=ft,Ee=Mi,pe=ii)},setOp:function(ft,Mi,ii){(le!==ft||Ie!==Mi||Be!==ii)&&(t.stencilOp(ft,Mi,ii),le=ft,Ie=Mi,Be=ii)},setLocked:function(ft){z=ft},setClear:function(ft){Pt!==ft&&(t.clearStencil(ft),Pt=ft)},reset:function(){z=!1,de=null,Q=null,Ee=null,pe=null,le=null,Ie=null,Be=null,Pt=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,u=new WeakMap;let f={},h={},d={},c=new WeakMap,m=[],v=null,g=!1,p=null,x=null,y=null,E=null,S=null,M=null,w=null,_=new ot(0,0,0),T=0,A=!1,C=null,P=null,D=null,U=null,L=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,O=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=O>=2);let K=null,te={};const se=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),re=new Nt().fromArray(se),ae=new Nt().fromArray(Me);function W(z,de,Q,Ee){const pe=new Uint8Array(4),le=t.createTexture();t.bindTexture(z,le),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<Q;Ie++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(de+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return le}const ee={};ee[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Ys),Ke(!1),Oe(_m),ie(t.CULL_FACE),je(Fi);function ie(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function xe(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function be(z,de){return d[z]!==de?(t.bindFramebuffer(z,de),d[z]=de,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=de),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(z,de){let Q=m,Ee=!1;if(z){Q=c.get(de),Q===void 0&&(Q=[],c.set(de,Q));const pe=z.textures;if(Q.length!==pe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Ie=pe.length;le<Ie;le++)Q[le]=t.COLOR_ATTACHMENT0+le;Q.length=pe.length,Ee=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(Q)}function We(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const Ve={[Ur]:t.FUNC_ADD,[XT]:t.FUNC_SUBTRACT,[YT]:t.FUNC_REVERSE_SUBTRACT};Ve[qT]=t.MIN,Ve[KT]=t.MAX;const rt={[$T]:t.ZERO,[JT]:t.ONE,[ZT]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[rC]:t.SRC_ALPHA_SATURATE,[nC]:t.DST_COLOR,[eC]:t.DST_ALPHA,[QT]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[iC]:t.ONE_MINUS_DST_COLOR,[tC]:t.ONE_MINUS_DST_ALPHA,[sC]:t.CONSTANT_COLOR,[aC]:t.ONE_MINUS_CONSTANT_COLOR,[oC]:t.CONSTANT_ALPHA,[lC]:t.ONE_MINUS_CONSTANT_ALPHA};function je(z,de,Q,Ee,pe,le,Ie,Be,Pt,ft){if(z===Fi){g===!0&&(xe(t.BLEND),g=!1);return}if(g===!1&&(ie(t.BLEND),g=!0),z!==jT){if(z!==p||ft!==A){if((x!==Ur||S!==Ur)&&(t.blendEquation(t.FUNC_ADD),x=Ur,S=Ur),ft)switch(z){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ym:t.blendFunc(t.ONE,t.ONE);break;case Sm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",z);break}else switch(z){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ym:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Sm:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mm:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",z);break}y=null,E=null,M=null,w=null,_.set(0,0,0),T=0,p=z,A=ft}return}pe=pe||de,le=le||Q,Ie=Ie||Ee,(de!==x||pe!==S)&&(t.blendEquationSeparate(Ve[de],Ve[pe]),x=de,S=pe),(Q!==y||Ee!==E||le!==M||Ie!==w)&&(t.blendFuncSeparate(rt[Q],rt[Ee],rt[le],rt[Ie]),y=Q,E=Ee,M=le,w=Ie),(Be.equals(_)===!1||Pt!==T)&&(t.blendColor(Be.r,Be.g,Be.b,Pt),_.copy(Be),T=Pt),p=z,A=!1}function Ne(z,de){z.side===bi?xe(t.CULL_FACE):ie(t.CULL_FACE);let Q=z.side===yn;de&&(Q=!Q),Ke(Q),z.blending===Os&&z.transparent===!1?je(Fi):je(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ee=z.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),B(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){C!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),C=z)}function Oe(z){z!==HT?(ie(t.CULL_FACE),z!==P&&(z===_m?t.cullFace(t.BACK):z===GT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),P=z}function $e(z){z!==D&&(F&&t.lineWidth(z),D=z)}function B(z,de,Q){z?(ie(t.POLYGON_OFFSET_FILL),(U!==de||L!==Q)&&(U=de,L=Q,a.getReversed()&&(de=-de),t.polygonOffset(de,Q))):xe(t.POLYGON_OFFSET_FILL)}function at(z){z?ie(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function He(z){z===void 0&&(z=t.TEXTURE0+N-1),K!==z&&(t.activeTexture(z),K=z)}function lt(z,de,Q){Q===void 0&&(K===null?Q=t.TEXTURE0+N-1:Q=K);let Ee=te[Q];Ee===void 0&&(Ee={type:void 0,texture:void 0},te[Q]=Ee),(Ee.type!==z||Ee.texture!==de)&&(K!==Q&&(t.activeTexture(Q),K=Q),t.bindTexture(z,de||ee[z]),Ee.type=z,Ee.texture=de)}function ge(){const z=te[K];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function xt(){try{t.compressedTexImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function R(){try{t.texSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function j(){try{t.texSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function oe(){try{t.compressedTexSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function ue(){try{t.texStorage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function me(){try{t.texStorage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function J(){try{t.texImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function ne(){try{t.texImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Se(z){return h[z]!==void 0?h[z]:t.getParameter(z)}function Ae(z,de){h[z]!==de&&(t.pixelStorei(z,de),h[z]=de)}function he(z){re.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),re.copy(z))}function fe(z){ae.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),ae.copy(z))}function Fe(z,de){let Q=u.get(de);Q===void 0&&(Q=new WeakMap,u.set(de,Q));let Ee=Q.get(z);Ee===void 0&&(Ee=t.getUniformBlockIndex(de,z.name),Q.set(z,Ee))}function Ge(z,de){const Ee=u.get(de).get(z);l.get(de)!==Ee&&(t.uniformBlockBinding(de,Ee,z.__bindingPointIndex),l.set(de,Ee))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},K=null,te={},d={},c=new WeakMap,m=[],v=null,g=!1,p=null,x=null,y=null,E=null,S=null,M=null,w=null,_=new ot(0,0,0),T=0,A=!1,C=null,P=null,D=null,U=null,L=null,re.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:xe,bindFramebuffer:be,drawBuffers:Re,useProgram:We,setBlending:je,setMaterial:Ne,setFlipSided:Ke,setCullFace:Oe,setLineWidth:$e,setPolygonOffset:B,setScissorTest:at,activeTexture:He,bindTexture:lt,unbindTexture:ge,compressedTexImage2D:xt,compressedTexImage3D:I,texImage2D:J,texImage3D:ne,pixelStorei:Ae,getParameter:Se,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:me,texSubImage2D:R,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:oe,scissor:he,viewport:fe,reset:st}}function W3(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,f=new WeakMap,h=new Set;let d;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,R){return m?new OffscreenCanvas(I,R):sc("canvas")}function g(I,R,j){let Z=1;const oe=xt(I);if((oe.width>j||oe.height>j)&&(Z=j/Math.max(oe.width,oe.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(Z*oe.width),me=Math.floor(Z*oe.height);d===void 0&&(d=v(ue,me));const J=R?v(ue,me):d;return J.width=ue,J.height=me,J.getContext("2d").drawImage(I,0,0,ue,me),Ue("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ue+"x"+me+")."),J}else return"data"in I&&Ue("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function p(I){return I.generateMipmaps}function x(I){t.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(I,R,j,Z,oe,ue=!1){if(I!==null){if(t[I]!==void 0)return t[I];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me;Z&&(me=e.get("EXT_texture_norm16"),me||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=R;if(R===t.RED&&(j===t.FLOAT&&(J=t.R32F),j===t.HALF_FLOAT&&(J=t.R16F),j===t.UNSIGNED_BYTE&&(J=t.R8),j===t.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),j===t.SHORT&&me&&(J=me.R16_SNORM_EXT)),R===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.R8UI),j===t.UNSIGNED_SHORT&&(J=t.R16UI),j===t.UNSIGNED_INT&&(J=t.R32UI),j===t.BYTE&&(J=t.R8I),j===t.SHORT&&(J=t.R16I),j===t.INT&&(J=t.R32I)),R===t.RG&&(j===t.FLOAT&&(J=t.RG32F),j===t.HALF_FLOAT&&(J=t.RG16F),j===t.UNSIGNED_BYTE&&(J=t.RG8),j===t.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),j===t.SHORT&&me&&(J=me.RG16_SNORM_EXT)),R===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RG8UI),j===t.UNSIGNED_SHORT&&(J=t.RG16UI),j===t.UNSIGNED_INT&&(J=t.RG32UI),j===t.BYTE&&(J=t.RG8I),j===t.SHORT&&(J=t.RG16I),j===t.INT&&(J=t.RG32I)),R===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RGB8UI),j===t.UNSIGNED_SHORT&&(J=t.RGB16UI),j===t.UNSIGNED_INT&&(J=t.RGB32UI),j===t.BYTE&&(J=t.RGB8I),j===t.SHORT&&(J=t.RGB16I),j===t.INT&&(J=t.RGB32I)),R===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),j===t.UNSIGNED_INT&&(J=t.RGBA32UI),j===t.BYTE&&(J=t.RGBA8I),j===t.SHORT&&(J=t.RGBA16I),j===t.INT&&(J=t.RGBA32I)),R===t.RGB&&(j===t.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),j===t.SHORT&&me&&(J=me.RGB16_SNORM_EXT),j===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),j===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),R===t.RGBA){const ne=ue?ic:Ze.getTransfer(oe);j===t.FLOAT&&(J=t.RGBA32F),j===t.HALF_FLOAT&&(J=t.RGBA16F),j===t.UNSIGNED_BYTE&&(J=ne===ct?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),j===t.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),j===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(I,R){let j;return I?R===null||R===_i||R===no?j=t.DEPTH24_STENCIL8:R===di?j=t.DEPTH32F_STENCIL8:R===to&&(j=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===_i||R===no?j=t.DEPTH_COMPONENT24:R===di?j=t.DEPTH_COMPONENT32F:R===to&&(j=t.DEPTH_COMPONENT16),j}function M(I,R){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xt&&I.minFilter!==tn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function w(I){const R=I.target;R.removeEventListener("dispose",w),T(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&h.delete(R)}function _(I){const R=I.target;R.removeEventListener("dispose",_),C(R)}function T(I){const R=i.get(I);if(R.__webglInit===void 0)return;const j=I.source,Z=c.get(j);if(Z){const oe=Z[R.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&A(I),Object.keys(Z).length===0&&c.delete(j)}i.remove(I)}function A(I){const R=i.get(I);t.deleteTexture(R.__webglTexture);const j=I.source,Z=c.get(j);delete Z[R.__cacheKey],a.memory.textures--}function C(I){const R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let oe=0;oe<R.__webglFramebuffer[Z].length;oe++)t.deleteFramebuffer(R.__webglFramebuffer[Z][oe]);else t.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&t.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)t.deleteFramebuffer(R.__webglFramebuffer[Z]);else t.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&t.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&t.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&t.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const j=I.textures;for(let Z=0,oe=j.length;Z<oe;Z++){const ue=i.get(j[Z]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(j[Z])}i.remove(I)}let P=0;function D(){P=0}function U(){return P}function L(I){P=I}function N(){const I=P;return I>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function F(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function O(I,R){const j=i.get(I);if(I.isVideoTexture&&lt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const Z=I.image;if(Z===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(j,I,R);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+R)}function G(I,R){const j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){xe(j,I,R);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+R)}function K(I,R){const j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){xe(j,I,R);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+R)}function te(I,R){const j=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){be(j,I,R);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+R)}const se={[Kf]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[$f]:t.MIRRORED_REPEAT},Me={[Xt]:t.NEAREST,[fC]:t.NEAREST_MIPMAP_NEAREST,[Fo]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[fu]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},re={[pC]:t.NEVER,[_C]:t.ALWAYS,[mC]:t.LESS,[Bh]:t.LEQUAL,[gC]:t.EQUAL,[zh]:t.GEQUAL,[vC]:t.GREATER,[xC]:t.NOTEQUAL};function ae(I,R){if(R.type===di&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===tn||R.magFilter===fu||R.magFilter===Fo||R.magFilter===zr||R.minFilter===tn||R.minFilter===fu||R.minFilter===Fo||R.minFilter===zr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,se[R.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,se[R.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,se[R.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,Me[R.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,Me[R.minFilter]),R.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,re[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Xt||R.minFilter!==Fo&&R.minFilter!==zr||R.type===di&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function W(I,R){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",w));const Z=R.source;let oe=c.get(Z);oe===void 0&&(oe={},c.set(Z,oe));const ue=F(R);if(ue!==I.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),oe[ue].usedTimes++;const me=oe[I.__cacheKey];me!==void 0&&(oe[I.__cacheKey].usedTimes--,me.usedTimes===0&&A(R)),I.__cacheKey=ue,I.__webglTexture=oe[ue].texture}return j}function ee(I,R,j){return Math.floor(Math.floor(I/j)/R)}function ie(I,R,j,Z){const ue=I.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,R.width,R.height,j,Z,R.data);else{ue.sort((Ae,he)=>Ae.start-he.start);let me=0;for(let Ae=1;Ae<ue.length;Ae++){const he=ue[me],fe=ue[Ae],Fe=he.start+he.count,Ge=ee(fe.start,R.width,4),st=ee(he.start,R.width,4);fe.start<=Fe+1&&Ge===st&&ee(fe.start+fe.count-1,R.width,4)===Ge?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++me,ue[me]=fe)}ue.length=me+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),Se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,R.width);for(let Ae=0,he=ue.length;Ae<he;Ae++){const fe=ue[Ae],Fe=Math.floor(fe.start/4),Ge=Math.ceil(fe.count/4),st=Fe%R.width,z=Math.floor(Fe/R.width),de=Ge,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,st),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,st,z,de,Q,j,Z,R.data)}I.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function xe(I,R,j){let Z=t.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=t.TEXTURE_3D);const oe=W(I,R),ue=R.source;n.bindTexture(Z,I.__webglTexture,t.TEXTURE0+j);const me=i.get(ue);if(ue.version!==me.__version||oe===!0){if(n.activeTexture(t.TEXTURE0+j),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const Q=Ze.getPrimaries(Ze.workingColorSpace),Ee=R.colorSpace===lr?null:Ze.getPrimaries(R.colorSpace),pe=R.colorSpace===lr||Q===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment);let ne=g(R.image,!1,s.maxTextureSize);ne=ge(R,ne);const Se=r.convert(R.format,R.colorSpace),Ae=r.convert(R.type);let he=E(R.internalFormat,Se,Ae,R.normalized,R.colorSpace,R.isVideoTexture);ae(Z,R);let fe;const Fe=R.mipmaps,Ge=R.isVideoTexture!==!0,st=me.__version===void 0||oe===!0,z=ue.dataReady,de=M(R,ne);if(R.isDepthTexture)he=S(R.format===Vr,R.type),st&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,he,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,Se,Ae,null));else if(R.isDataTexture)if(Fe.length>0){Ge&&st&&n.texStorage2D(t.TEXTURE_2D,de,he,Fe[0].width,Fe[0].height);for(let Q=0,Ee=Fe.length;Q<Ee;Q++)fe=Fe[Q],Ge?z&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,Se,Ae,fe.data):n.texImage2D(t.TEXTURE_2D,Q,he,fe.width,fe.height,0,Se,Ae,fe.data);R.generateMipmaps=!1}else Ge?(st&&n.texStorage2D(t.TEXTURE_2D,de,he,ne.width,ne.height),z&&ie(R,ne,Se,Ae)):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,Se,Ae,ne.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ge&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,he,Fe[0].width,Fe[0].height,ne.depth);for(let Q=0,Ee=Fe.length;Q<Ee;Q++)if(fe=Fe[Q],R.format!==Zn)if(Se!==null)if(Ge){if(z)if(R.layerUpdates.size>0){const pe=Jm(fe.width,fe.height,R.format,R.type);for(const le of R.layerUpdates){const Ie=fe.data.subarray(le*pe/fe.data.BYTES_PER_ELEMENT,(le+1)*pe/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,le,fe.width,fe.height,1,Se,Ie)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ne.depth,Se,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,he,fe.width,fe.height,ne.depth,0,fe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ne.depth,Se,Ae,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,he,fe.width,fe.height,ne.depth,0,Se,Ae,fe.data)}else{Ge&&st&&n.texStorage2D(t.TEXTURE_2D,de,he,Fe[0].width,Fe[0].height);for(let Q=0,Ee=Fe.length;Q<Ee;Q++)fe=Fe[Q],R.format!==Zn?Se!==null?Ge?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,Se,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,he,fe.width,fe.height,0,fe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?z&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,Se,Ae,fe.data):n.texImage2D(t.TEXTURE_2D,Q,he,fe.width,fe.height,0,Se,Ae,fe.data)}else if(R.isDataArrayTexture)if(Ge){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,he,ne.width,ne.height,ne.depth),z)if(R.layerUpdates.size>0){const Q=Jm(ne.width,ne.height,R.format,R.type);for(const Ee of R.layerUpdates){const pe=ne.data.subarray(Ee*Q/ne.data.BYTES_PER_ELEMENT,(Ee+1)*Q/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ee,ne.width,ne.height,1,Se,Ae,pe)}R.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ae,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,Se,Ae,ne.data);else if(R.isData3DTexture)Ge?(st&&n.texStorage3D(t.TEXTURE_3D,de,he,ne.width,ne.height,ne.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ae,ne.data)):n.texImage3D(t.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,Se,Ae,ne.data);else if(R.isFramebufferTexture){if(st)if(Ge)n.texStorage2D(t.TEXTURE_2D,de,he,ne.width,ne.height);else{let Q=ne.width,Ee=ne.height;for(let pe=0;pe<de;pe++)n.texImage2D(t.TEXTURE_2D,pe,he,Q,Ee,0,Se,Ae,null),Q>>=1,Ee>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ne.parentNode!==Q){Q.appendChild(ne),h.add(R),Q.onpaint=Be=>{const Pt=Be.changedElements;for(const ft of h)Pt.includes(ft.image)&&(ft.needsUpdate=!0)},Q.requestPaint();return}const Ee=0,pe=t.RGBA,le=t.RGBA,Ie=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Ee,pe,le,Ie,ne),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ge&&st){const Q=xt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,de,he,Q.width,Q.height)}for(let Q=0,Ee=Fe.length;Q<Ee;Q++)fe=Fe[Q],Ge?z&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Se,Ae,fe):n.texImage2D(t.TEXTURE_2D,Q,he,Se,Ae,fe);R.generateMipmaps=!1}else if(Ge){if(st){const Q=xt(ne);n.texStorage2D(t.TEXTURE_2D,de,he,Q.width,Q.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ae,ne)}else n.texImage2D(t.TEXTURE_2D,0,he,Se,Ae,ne);p(R)&&x(Z),me.__version=ue.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function be(I,R,j){if(R.image.length!==6)return;const Z=W(I,R),oe=R.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+j);const ue=i.get(oe);if(oe.version!==ue.__version||Z===!0){n.activeTexture(t.TEXTURE0+j);const me=Ze.getPrimaries(Ze.workingColorSpace),J=R.colorSpace===lr?null:Ze.getPrimaries(R.colorSpace),ne=R.colorSpace===lr||me===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const Se=R.isCompressedTexture||R.image[0].isCompressedTexture,Ae=R.image[0]&&R.image[0].isDataTexture,he=[];for(let le=0;le<6;le++)!Se&&!Ae?he[le]=g(R.image[le],!0,s.maxCubemapSize):he[le]=Ae?R.image[le].image:R.image[le],he[le]=ge(R,he[le]);const fe=he[0],Fe=r.convert(R.format,R.colorSpace),Ge=r.convert(R.type),st=E(R.internalFormat,Fe,Ge,R.normalized,R.colorSpace),z=R.isVideoTexture!==!0,de=ue.__version===void 0||Z===!0,Q=oe.dataReady;let Ee=M(R,fe);ae(t.TEXTURE_CUBE_MAP,R);let pe;if(Se){z&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,st,fe.width,fe.height);for(let le=0;le<6;le++){pe=he[le].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){const Be=pe[Ie];R.format!==Zn?Fe!==null?z?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,0,0,Be.width,Be.height,Fe,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,st,Be.width,Be.height,0,Be.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,0,0,Be.width,Be.height,Fe,Ge,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,st,Be.width,Be.height,0,Fe,Ge,Be.data)}}}else{if(pe=R.mipmaps,z&&de){pe.length>0&&Ee++;const le=xt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,st,le.width,le.height)}for(let le=0;le<6;le++)if(Ae){z?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,he[le].width,he[le].height,Fe,Ge,he[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,he[le].width,he[le].height,0,Fe,Ge,he[le].data);for(let Ie=0;Ie<pe.length;Ie++){const Pt=pe[Ie].image[le].image;z?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,0,0,Pt.width,Pt.height,Fe,Ge,Pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,st,Pt.width,Pt.height,0,Fe,Ge,Pt.data)}}else{z?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,Ge,he[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,Fe,Ge,he[le]);for(let Ie=0;Ie<pe.length;Ie++){const Be=pe[Ie];z?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,0,0,Fe,Ge,Be.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,st,Fe,Ge,Be.image[le])}}}p(R)&&x(t.TEXTURE_CUBE_MAP),ue.__version=oe.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Re(I,R,j,Z,oe,ue){const me=r.convert(j.format,j.colorSpace),J=r.convert(j.type),ne=E(j.internalFormat,me,J,j.normalized,j.colorSpace),Se=i.get(R),Ae=i.get(j);if(Ae.__renderTarget=R,!Se.__hasExternalTextures){const he=Math.max(1,R.width>>ue),fe=Math.max(1,R.height>>ue);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ue,ne,he,fe,R.depth,0,me,J,null):n.texImage2D(oe,ue,ne,he,fe,0,me,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),He(R)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,oe,Ae.__webglTexture,0,at(R)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,oe,Ae.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(I,R,j){if(t.bindRenderbuffer(t.RENDERBUFFER,I),R.depthBuffer){const Z=R.depthTexture,oe=Z&&Z.isDepthTexture?Z.type:null,ue=S(R.stencilBuffer,oe),me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;He(R)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(R),ue,R.width,R.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(R),ue,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,ue,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,I)}else{const Z=R.textures;for(let oe=0;oe<Z.length;oe++){const ue=Z[oe],me=r.convert(ue.format,ue.colorSpace),J=r.convert(ue.type),ne=E(ue.internalFormat,me,J,ue.normalized,ue.colorSpace);He(R)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(R),ne,R.width,R.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(R),ne,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,ne,R.width,R.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(I,R,j){const Z=R.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(R.depthTexture);if(oe.__renderTarget=R,(!oe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Z){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,R.depthTexture.addEventListener("dispose",w)),oe.__webglTexture===void 0){oe.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),ae(t.TEXTURE_CUBE_MAP,R.depthTexture);const Se=r.convert(R.depthTexture.format),Ae=r.convert(R.depthTexture.type);let he;R.depthTexture.format===Wi?he=t.DEPTH_COMPONENT24:R.depthTexture.format===Vr&&(he=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,R.width,R.height,0,Se,Ae,null)}}else O(R.depthTexture,0);const ue=oe.__webglTexture,me=at(R),J=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+j:t.TEXTURE_2D,ne=R.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(R.depthTexture.format===Wi)He(R)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,ue,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,ue,0);else if(R.depthTexture.format===Vr)He(R)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,ue,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,ue,0);else throw new Error("Unknown depthTexture format")}function rt(I){const R=i.get(I),j=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){const oe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",oe)};Z.addEventListener("dispose",oe),R.__depthDisposeCallback=oe}R.__boundDepthTexture=Z}if(I.depthTexture&&!R.__autoAllocateDepthBuffer)if(j)for(let Z=0;Z<6;Z++)Ve(R.__webglFramebuffer[Z],I,Z);else{const Z=I.texture.mipmaps;Z&&Z.length>0?Ve(R.__webglFramebuffer[0],I,0):Ve(R.__webglFramebuffer,I,0)}else if(j){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=t.createRenderbuffer(),We(R.__webglDepthbuffer[Z],I,!1);else{const oe=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,ue)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=t.createRenderbuffer(),We(R.__webglDepthbuffer,I,!1);else{const oe=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(I,R,j){const Z=i.get(I);R!==void 0&&Re(Z.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&rt(I)}function Ne(I){const R=I.texture,j=i.get(I),Z=i.get(R);I.addEventListener("dispose",_);const oe=I.textures,ue=I.isWebGLCubeRenderTarget===!0,me=oe.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=R.version,a.memory.textures++),ue){j.__webglFramebuffer=[];for(let J=0;J<6;J++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[J]=[];for(let ne=0;ne<R.mipmaps.length;ne++)j.__webglFramebuffer[J][ne]=t.createFramebuffer()}else j.__webglFramebuffer[J]=t.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let J=0;J<R.mipmaps.length;J++)j.__webglFramebuffer[J]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(me)for(let J=0,ne=oe.length;J<ne;J++){const Se=i.get(oe[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),a.memory.textures++)}if(I.samples>0&&He(I)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let J=0;J<oe.length;J++){const ne=oe[J];j.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[J]);const Se=r.convert(ne.format,ne.colorSpace),Ae=r.convert(ne.type),he=E(ne.internalFormat,Se,Ae,ne.normalized,ne.colorSpace,I.isXRRenderTarget===!0),fe=at(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,he,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,j.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),We(j.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(t.TEXTURE_CUBE_MAP,R);for(let J=0;J<6;J++)if(R.mipmaps&&R.mipmaps.length>0)for(let ne=0;ne<R.mipmaps.length;ne++)Re(j.__webglFramebuffer[J][ne],I,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else Re(j.__webglFramebuffer[J],I,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(R)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let J=0,ne=oe.length;J<ne;J++){const Se=oe[J],Ae=i.get(Se);let he=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ae.__webglTexture),ae(he,Se),Re(j.__webglFramebuffer,I,Se,t.COLOR_ATTACHMENT0+J,he,0),p(Se)&&x(he)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,Z.__webglTexture),ae(J,R),R.mipmaps&&R.mipmaps.length>0)for(let ne=0;ne<R.mipmaps.length;ne++)Re(j.__webglFramebuffer[ne],I,R,t.COLOR_ATTACHMENT0,J,ne);else Re(j.__webglFramebuffer,I,R,t.COLOR_ATTACHMENT0,J,0);p(R)&&x(J),n.unbindTexture()}I.depthBuffer&&rt(I)}function Ke(I){const R=I.textures;for(let j=0,Z=R.length;j<Z;j++){const oe=R[j];if(p(oe)){const ue=y(I),me=i.get(oe).__webglTexture;n.bindTexture(ue,me),x(ue),n.unbindTexture()}}}const Oe=[],$e=[];function B(I){if(I.samples>0){if(He(I)===!1){const R=I.textures,j=I.width,Z=I.height;let oe=t.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(I),J=R.length>1;if(J)for(let Se=0;Se<R.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ne=I.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Ae=i.get(R[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,j,Z,0,0,j,Z,oe,t.NEAREST),l===!0&&(Oe.length=0,$e.length=0,Oe.push(t.COLOR_ATTACHMENT0+Se),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Oe.push(ue),$e.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,$e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let Se=0;Se<R.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Ae=i.get(R[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const R=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[R])}}}function at(I){return Math.min(s.maxSamples,I.samples)}function He(I){const R=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function lt(I){const R=a.render.frame;f.get(I)!==R&&(f.set(I,R),I.update())}function ge(I,R){const j=I.colorSpace,Z=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==nc&&j!==lr&&(Ze.getTransfer(j)===ct?(Z!==Zn||oe!==kn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",j)),R}function xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.getTextureUnits=U,this.setTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=te,this.rebindTextures=je,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function j3(t,e){function n(i,s=lr){let r;const a=Ze.getTransfer(s);if(i===kn)return t.UNSIGNED_BYTE;if(i===Nh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ux)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ox)return t.BYTE;if(i===lx)return t.SHORT;if(i===to)return t.UNSIGNED_SHORT;if(i===Dh)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===fx)return t.ALPHA;if(i===dx)return t.RGB;if(i===Zn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===hx)return t.RED;if(i===Fh)return t.RED_INTEGER;if(i===$r)return t.RG;if(i===kh)return t.RG_INTEGER;if(i===Oh)return t.RGBA_INTEGER;if(i===wl||i===Al||i===Tl||i===Cl)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jf||i===Zf||i===Qf||i===ed)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ed)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===td||i===nd||i===id||i===rd||i===sd||i===ec||i===ad)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===td||i===nd)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===id)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rd)return r.COMPRESSED_R11_EAC;if(i===sd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return r.COMPRESSED_RG11_EAC;if(i===ad)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===od||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===vd||i===xd||i===_d||i===yd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===od)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ld)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ud)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sd||i===Md||i===Ed)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sd)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Md)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ed)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wd||i===Ad||i===tc||i===Td)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Td)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===no?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const X3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y3=`
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

}`;class q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ax(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:X3,fragmentShader:Y3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ji(new Rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K3 extends ts{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,d=null,c=null,m=null;const v=typeof XRWebGLBinding<"u",g=new q3,p={},x=n.getContextAttributes();let y=null,E=null;const S=[],M=[],w=new ht;let _=null;const T=new Fn;T.viewport=new Nt;const A=new Fn;A.viewport=new Nt;const C=[T,A],P=new sR;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=S[W];return ee===void 0&&(ee=new _u,S[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=S[W];return ee===void 0&&(ee=new _u,S[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=S[W];return ee===void 0&&(ee=new _u,S[W]=ee),ee.getHandSpace()};function L(W){const ee=M.indexOf(W.inputSource);if(ee===-1)return;const ie=S[ee];ie!==void 0&&(ie.update(W.inputSource,W.frame,u||a),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let W=0;W<S.length;W++){const ee=M[W];ee!==null&&(M[W]=null,S[W].disconnect(ee))}D=null,U=null,g.reset();for(const W in p)delete p[W];e.setRenderTarget(y),c=null,d=null,h=null,s=null,E=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,xe=null,be=null;x.depth&&(be=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=x.stencil?Vr:Wi,xe=x.stencil?no:_i);const Re={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new vi(d.textureWidth,d.textureHeight,{format:Zn,type:kn,depthTexture:new Ks(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,n,ie),s.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),E=new vi(c.framebufferWidth,c.framebufferHeight,{format:Zn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(W){for(let ee=0;ee<W.removed.length;ee++){const ie=W.removed[ee],xe=M.indexOf(ie);xe>=0&&(M[xe]=null,S[xe].disconnect(ie))}for(let ee=0;ee<W.added.length;ee++){const ie=W.added[ee];let xe=M.indexOf(ie);if(xe===-1){for(let Re=0;Re<S.length;Re++)if(Re>=M.length){M.push(ie),xe=Re;break}else if(M[Re]===null){M[Re]=ie,xe=Re;break}if(xe===-1)break}const be=S[xe];be&&be.connect(ie)}}const O=new Y,G=new Y;function K(W,ee,ie){O.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(ie.matrixWorld);const xe=O.distanceTo(G),be=ee.projectionMatrix.elements,Re=ie.projectionMatrix.elements,We=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),rt=(be[9]+1)/be[5],je=(be[9]-1)/be[5],Ne=(be[8]-1)/be[0],Ke=(Re[8]+1)/Re[0],Oe=We*Ne,$e=We*Ke,B=xe/(-Ne+Ke),at=B*-Ne;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(at),W.translateZ(B),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const He=We+B,lt=Ve+B,ge=Oe-at,xt=$e+(xe-at),I=rt*Ve/lt*He,R=je*Ve/lt*He;W.projectionMatrix.makePerspective(ge,xt,I,R,He,lt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function te(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ee=W.near,ie=W.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),P.near=A.near=T.near=ee,P.far=A.far=T.far=ie,(D!==P.near||U!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,U=P.far),P.layers.mask=W.layers.mask|6,T.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;const xe=W.parent,be=P.cameras;te(P,xe);for(let Re=0;Re<be.length;Re++)te(be[Re],xe);be.length===2?K(P,T,A):P.projectionMatrix.copy(T.projectionMatrix),se(W,P,xe)};function se(W,ee,ie){ie===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Rd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(W){return p[W]};let Me=null;function re(W,ee){if(f=ee.getViewerPose(u||a),m=ee,f!==null){const ie=f.views;c!==null&&(e.setRenderTargetFramebuffer(E,c.framebuffer),e.setRenderTarget(E));let xe=!1;ie.length!==P.cameras.length&&(P.cameras.length=0,xe=!0);for(let Ve=0;Ve<ie.length;Ve++){const rt=ie[Ve];let je=null;if(c!==null)je=c.getViewport(rt);else{const Ke=h.getViewSubImage(d,rt);je=Ke.viewport,Ve===0&&(e.setRenderTargetTextures(E,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(E))}let Ne=C[Ve];Ne===void 0&&(Ne=new Fn,Ne.layers.enable(Ve),Ne.viewport=new Nt,C[Ve]=Ne),Ne.matrix.fromArray(rt.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(rt.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(je.x,je.y,je.width,je.height),Ve===0&&(P.matrix.copy(Ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),xe===!0&&P.cameras.push(Ne)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Ve=h.getDepthInformation(ie[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Ve=0;Ve<ie.length;Ve++){const rt=ie[Ve].camera;if(rt){let je=p[rt];je||(je=new Ax,p[rt]=je);const Ne=h.getCameraImage(rt);je.sourceTexture=Ne}}}}for(let ie=0;ie<S.length;ie++){const xe=M[ie],be=S[ie];xe!==null&&be!==void 0&&be.update(xe,ee,u||a)}Me&&Me(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const ae=new Px;ae.setAnimationLoop(re),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const $3=new Ut,Fx=new ke;Fx.set(-1,0,0,0,1,0,0,0,1);function J3(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Tx(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&c(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,E=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4($3.makeRotationFromEuler(E)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fx),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function c(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Z3(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const E=y.program;i.uniformBlockBinding(x,E)}function u(x,y){let E=s[x.id];E===void 0&&(m(x),E=f(x),s[x.id]=E,x.addEventListener("dispose",g));const S=y.program;i.updateUBOMapping(x,S);const M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function f(x){const y=h();x.__bindingPointIndex=y;const E=t.createBuffer(),S=x.__size,M=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,S,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],E=x.uniforms,S=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let M=0,w=E.length;M<w;M++){const _=Array.isArray(E[M])?E[M]:[E[M]];for(let T=0,A=_.length;T<A;T++){const C=_[T];if(c(C,M,T,S)===!0){const P=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let L=0;L<D.length;L++){const N=D[L],F=v(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,P+U,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):ArrayBuffer.isView(N)?C.__data.set(new N.constructor(N.buffer,N.byteOffset,C.__data.length)):(N.toArray(C.__data,U),U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,P,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function c(x,y,E,S){const M=x.value,w=y+"_"+E;if(S[w]===void 0)return typeof M=="number"||typeof M=="boolean"?S[w]=M:ArrayBuffer.isView(M)?S[w]=M.slice():S[w]=M.clone(),!0;{const _=S[w];if(typeof M=="number"||typeof M=="boolean"){if(_!==M)return S[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(_.equals(M)===!1)return _.copy(M),!0}}return!1}function m(x){const y=x.uniforms;let E=0;const S=16;for(let w=0,_=y.length;w<_;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let A=0,C=T.length;A<C;A++){const P=T[A],D=Array.isArray(P.value)?P.value:[P.value];for(let U=0,L=D.length;U<L;U++){const N=D[U],F=v(N),O=E%S,G=O%F.boundary,K=O+G;E+=G,K!==0&&S-K<F.storage&&(E+=S-K),P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=F.storage}}}const M=E%S;return M>0&&(E+=S-M),x.__size=E,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)t.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:u,dispose:p}}const Q3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function eI(){return li===null&&(li=new WC(Q3,16,16,$r,Gi),li.name="DFG_LUT",li.minFilter=tn,li.magFilter=tn,li.wrapS=Di,li.wrapT=Di,li.generateMipmaps=!1,li.needsUpdate=!0),li}class tI{constructor(e={}){const{canvas:n=SC(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:c=kn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=c,g=new Set([Oh,kh,Fh]),p=new Set([kn,_i,to,no,Nh,Uh]),x=new Uint32Array(4),y=new Int32Array(4),E=new Y;let S=null,M=null;const w=[],_=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,P=null;this._outputColorSpace=Dn;let D=0,U=0,L=null,N=-1,F=null;const O=new Nt,G=new Nt;let K=null;const te=new ot(0);let se=0,Me=n.width,re=n.height,ae=1,W=null,ee=null;const ie=new Nt(0,0,Me,re),xe=new Nt(0,0,Me,re);let be=!1;const Re=new Sx;let We=!1,Ve=!1;const rt=new Ut,je=new Y,Ne=new Nt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function $e(){return L===null?ae:1}let B=i;function at(b,H){return n.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lh}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Be,!1),B===null){const H="webgl2";if(B=at(H,b),B===null)throw at(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw nt("WebGLRenderer: "+b.message),b}let He,lt,ge,xt,I,R,j,Z,oe,ue,me,J,ne,Se,Ae,he,fe,Fe,Ge,st,z,de,Q;function Ee(){He=new e2(B),He.init(),z=new j3(B,He),lt=new Xb(B,He,e,z),ge=new G3(B,He),lt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),xt=new i2(B),I=new P3,R=new W3(B,He,ge,I,lt,z,xt),j=new Qb(A),Z=new oR(B),de=new Wb(B,Z),oe=new t2(B,Z,xt,de),ue=new s2(B,oe,Z,de,xt),Fe=new r2(B,lt,R),Ae=new Yb(I),me=new R3(A,j,He,lt,de,Ae),J=new J3(A,I),ne=new I3,Se=new k3(He),fe=new Gb(A,j,ge,ue,m,l),he=new H3(A,ue,lt),Q=new Z3(B,xt,lt,ge),Ge=new jb(B,He,xt),st=new n2(B,He,xt),xt.programs=me.programs,A.capabilities=lt,A.extensions=He,A.properties=I,A.renderLists=ne,A.shadowMap=he,A.state=ge,A.info=xt}Ee(),v!==kn&&(T=new o2(v,n.width,n.height,s,r));const pe=new K3(A,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(Me,re,!1))},this.getSize=function(b){return b.set(Me,re)},this.setSize=function(b,H,$=!0){if(pe.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=b,re=H,n.width=Math.floor(b*ae),n.height=Math.floor(H*ae),$===!0&&(n.style.width=b+"px",n.style.height=H+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Me*ae,re*ae).floor()},this.setDrawingBufferSize=function(b,H,$){Me=b,re=H,ae=$,n.width=Math.floor(b*$),n.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(v===kn){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){Ue("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,H,$,X){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,H,$,X),ge.viewport(O.copy(ie).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(xe)},this.setScissor=function(b,H,$,X){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,H,$,X),ge.scissor(G.copy(xe).multiplyScalar(ae).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){ge.setScissorTest(be=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,$=!0){let X=0;if(b){let q=!1;if(L!==null){const ye=L.texture.format;q=g.has(ye)}if(q){const ye=L.texture.type,Te=p.has(ye),_e=fe.getClearColor(),Pe=fe.getClearAlpha(),Le=_e.r,ze=_e.g,Ye=_e.b;Te?(x[0]=Le,x[1]=ze,x[2]=Ye,x[3]=Pe,B.clearBufferuiv(B.COLOR,0,x)):(y[0]=Le,y[1]=ze,y[2]=Ye,y[3]=Pe,B.clearBufferiv(B.COLOR,0,y))}else X|=B.COLOR_BUFFER_BIT}H&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),fe.dispose(),ne.dispose(),Se.dispose(),I.dispose(),j.dispose(),ue.dispose(),de.dispose(),Q.dispose(),me.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",qh),pe.removeEventListener("sessionend",Kh),Cr.stop()};function le(b){b.preventDefault(),Rm("WebGLRenderer: Context Lost."),C=!0}function Ie(){Rm("WebGLRenderer: Context Restored."),C=!1;const b=xt.autoReset,H=he.enabled,$=he.autoUpdate,X=he.needsUpdate,q=he.type;Ee(),xt.autoReset=b,he.enabled=H,he.autoUpdate=$,he.needsUpdate=X,he.type=q}function Be(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pt(b){const H=b.target;H.removeEventListener("dispose",Pt),ft(H)}function ft(b){Mi(b),I.remove(b)}function Mi(b){const H=I.get(b).programs;H!==void 0&&(H.forEach(function($){me.releaseProgram($)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,X,q,ye){H===null&&(H=Ke);const Te=q.isMesh&&q.matrixWorld.determinant()<0,_e=zx(b,H,$,X,q);ge.setMaterial(X,Te);let Pe=$.index,Le=1;if(X.wireframe===!0){if(Pe=oe.getWireframeAttribute($),Pe===void 0)return;Le=2}const ze=$.drawRange,Ye=$.attributes.position;let De=ze.start*Le,dt=(ze.start+ze.count)*Le;ye!==null&&(De=Math.max(De,ye.start*Le),dt=Math.min(dt,(ye.start+ye.count)*Le)),Pe!==null?(De=Math.max(De,0),dt=Math.min(dt,Pe.count)):Ye!=null&&(De=Math.max(De,0),dt=Math.min(dt,Ye.count));const bt=dt-De;if(bt<0||bt===1/0)return;de.setup(q,X,_e,$,Pe);let Ct,pt=Ge;if(Pe!==null&&(Ct=Z.get(Pe),pt=st,pt.setIndex(Ct)),q.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*$e()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(q.isLine){let Kt=X.linewidth;Kt===void 0&&(Kt=1),ge.setLineWidth(Kt*$e()),q.isLineSegments?pt.setMode(B.LINES):q.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else q.isPoints?pt.setMode(B.POINTS):q.isSprite&&pt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(He.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Kt=q._multiDrawStarts,we=q._multiDrawCounts,Sn=q._multiDrawCount,tt=Pe?Z.get(Pe).bytesPerElement:1,In=I.get(X).currentProgram.getUniforms();for(let ri=0;ri<Sn;ri++)In.setValue(B,"_gl_DrawID",ri),pt.render(Kt[ri]/tt,we[ri])}else if(q.isInstancedMesh)pt.renderInstances(De,bt,q.count);else if($.isInstancedBufferGeometry){const Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,we=Math.min($.instanceCount,Kt);pt.renderInstances(De,bt,we)}else pt.render(De,bt)};function ii(b,H,$){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=yn,b.needsUpdate=!0,vo(b,H,$),b.side=Mr,b.needsUpdate=!0,vo(b,H,$),b.side=bi):vo(b,H,$)}this.compile=function(b,H,$=null){$===null&&($=b),M=Se.get($),M.init(H),_.push(M),$.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),b!==$&&b.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights();const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const _e=ye[Te];ii(_e,$,q),X.add(_e)}else ii(ye,$,q),X.add(ye)}),M=_.pop(),X},this.compileAsync=function(b,H,$=null){const X=this.compile(b,H,$);return new Promise(q=>{function ye(){if(X.forEach(function(Te){I.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){q(b);return}setTimeout(ye,10)}He.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ic=null;function Ox(b){Ic&&Ic(b)}function qh(){Cr.stop()}function Kh(){Cr.start()}const Cr=new Px;Cr.setAnimationLoop(Ox),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(b){Ic=b,pe.setAnimationLoop(b),b===null?Cr.stop():Cr.start()},pe.addEventListener("sessionstart",qh),pe.addEventListener("sessionend",Kh),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(b,H);const $=pe.enabled===!0&&pe.isPresenting===!0,X=T!==null&&(L===null||$)&&T.begin(A,L);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(H),H=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,H,L),M=Se.get(b,_.length),M.init(H),M.state.textureUnits=R.getTextureUnits(),_.push(M),rt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Re.setFromProjectionMatrix(rt,hi,H.reversedDepth),Ve=this.localClippingEnabled,We=Ae.init(this.clippingPlanes,Ve),S=ne.get(b,w.length),S.init(),w.push(S),pe.enabled===!0&&pe.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&Lc(Te,H,-1/0,A.sortObjects)}Lc(b,H,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(W,ee),Oe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Oe&&fe.addToRenderList(S,b),this.info.render.frame++,We===!0&&Ae.beginShadows();const q=M.state.shadowsArray;if(he.render(q,b,H),We===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&T.hasRenderPass())===!1){const Te=S.opaque,_e=S.transmissive;if(M.setupLights(),H.isArrayCamera){const Pe=H.cameras;if(_e.length>0)for(let Le=0,ze=Pe.length;Le<ze;Le++){const Ye=Pe[Le];Jh(Te,_e,b,Ye)}Oe&&fe.render(b);for(let Le=0,ze=Pe.length;Le<ze;Le++){const Ye=Pe[Le];$h(S,b,Ye,Ye.viewport)}}else _e.length>0&&Jh(Te,_e,b,H),Oe&&fe.render(b),$h(S,b,H)}L!==null&&U===0&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),X&&T.end(A),b.isScene===!0&&b.onAfterRender(A,b,H),de.resetDefaultState(),N=-1,F=null,_.pop(),_.length>0?(M=_[_.length-1],R.setTextureUnits(M.state.textureUnits),We===!0&&Ae.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,P!==null&&P.renderEnd()};function Lc(b,H,$,X){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Re.intersectsSprite(b)){X&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(rt);const Te=ue.update(b),_e=b.material;_e.visible&&S.push(b,Te,_e,$,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Re.intersectsObject(b))){const Te=ue.update(b),_e=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(rt)),Array.isArray(_e)){const Pe=Te.groups;for(let Le=0,ze=Pe.length;Le<ze;Le++){const Ye=Pe[Le],De=_e[Ye.materialIndex];De&&De.visible&&S.push(b,Te,De,$,Ne.z,Ye)}}else _e.visible&&S.push(b,Te,_e,$,Ne.z,null)}}const ye=b.children;for(let Te=0,_e=ye.length;Te<_e;Te++)Lc(ye[Te],H,$,X)}function $h(b,H,$,X){const{opaque:q,transmissive:ye,transparent:Te}=b;M.setupLightsView($),We===!0&&Ae.setGlobalState(A.clippingPlanes,$),X&&ge.viewport(O.copy(X)),q.length>0&&go(q,H,$),ye.length>0&&go(ye,H,$),Te.length>0&&go(Te,H,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Jh(b,H,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const De=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new vi(1,1,{generateMipmaps:!0,type:De?Gi:kn,minFilter:zr,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ye=M.state.transmissionRenderTarget[X.id],Te=X.viewport||O;ye.setSize(Te.z*A.transmissionResolutionScale,Te.w*A.transmissionResolutionScale);const _e=A.getRenderTarget(),Pe=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(ye),A.getClearColor(te),se=A.getClearAlpha(),se<1&&A.setClearColor(16777215,.5),A.clear(),Oe&&fe.render($);const ze=A.toneMapping;A.toneMapping=gi;const Ye=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),We===!0&&Ae.setGlobalState(A.clippingPlanes,X),go(b,$,X),R.updateMultisampleRenderTarget(ye),R.updateRenderTargetMipmap(ye),He.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,bt=H.length;dt<bt;dt++){const Ct=H[dt],{object:pt,geometry:Kt,material:we,group:Sn}=Ct;if(we.side===bi&&pt.layers.test(X.layers)){const tt=we.side;we.side=yn,we.needsUpdate=!0,Zh(pt,$,X,Kt,we,Sn),we.side=tt,we.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(ye),R.updateRenderTargetMipmap(ye))}A.setRenderTarget(_e,Pe,Le),A.setClearColor(te,se),Ye!==void 0&&(X.viewport=Ye),A.toneMapping=ze}function go(b,H,$){const X=H.isScene===!0?H.overrideMaterial:null;for(let q=0,ye=b.length;q<ye;q++){const Te=b[q],{object:_e,geometry:Pe,group:Le}=Te;let ze=Te.material;ze.allowOverride===!0&&X!==null&&(ze=X),_e.layers.test($.layers)&&Zh(_e,H,$,Pe,ze,Le)}}function Zh(b,H,$,X,q,ye){b.onBeforeRender(A,H,$,X,q,ye),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(A,H,$,X,b,ye),q.transparent===!0&&q.side===bi&&q.forceSinglePass===!1?(q.side=yn,q.needsUpdate=!0,A.renderBufferDirect($,H,X,q,b,ye),q.side=Mr,q.needsUpdate=!0,A.renderBufferDirect($,H,X,q,b,ye),q.side=bi):A.renderBufferDirect($,H,X,q,b,ye),b.onAfterRender(A,H,$,X,q,ye)}function vo(b,H,$){H.isScene!==!0&&(H=Ke);const X=I.get(b),q=M.state.lights,ye=M.state.shadowsArray,Te=q.state.version,_e=me.getParameters(b,q.state,ye,H,$,M.state.lightProbeGridArray),Pe=me.getProgramCacheKey(_e);let Le=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;const ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=j.get(b.envMap||X.environment,ze),X.envMapRotation=X.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Pt),Le=new Map,X.programs=Le);let Ye=Le.get(Pe);if(Ye!==void 0){if(X.currentProgram===Ye&&X.lightsStateVersion===Te)return ep(b,_e),Ye}else _e.uniforms=me.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,$,_e),b.onBeforeCompile(_e,A),Ye=me.acquireProgram(_e,Pe),Le.set(Pe,Ye),X.uniforms=_e.uniforms;const De=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=Ae.uniform),ep(b,_e),X.needsLights=Hx(b),X.lightsStateVersion=Te,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=Ye,X.uniformsList=null,Ye}function Qh(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Rl.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function ep(b,H){const $=I.get(b);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Bx(b,H){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(H.matrixWorld);for(let $=0,X=b.length;$<X;$++){const q=b[$];if(q.texture!==null&&q.boundingBox.containsPoint(E))return q}return null}function zx(b,H,$,X,q){H.isScene!==!0&&(H=Ke),R.resetTextureUnits();const ye=H.fog,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,_e=L===null?A.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ze.workingColorSpace,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Le=j.get(X.envMap||Te,Pe),ze=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,bt=!!$.morphAttributes.color;let Ct=gi;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ct=A.toneMapping);const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=pt!==void 0?pt.length:0,we=I.get(X),Sn=M.state.lights;if(We===!0&&(Ve===!0||b!==F)){const gt=b===F&&X.id===N;Ae.setState(X,b,gt)}let tt=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Sn.state.version||we.outputColorSpace!==_e||q.isBatchedMesh&&we.batching===!1||!q.isBatchedMesh&&we.batching===!0||q.isBatchedMesh&&we.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&we.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&we.instancing===!1||!q.isInstancedMesh&&we.instancing===!0||q.isSkinnedMesh&&we.skinning===!1||!q.isSkinnedMesh&&we.skinning===!0||q.isInstancedMesh&&we.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&we.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&we.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&we.instancingMorph===!1&&q.morphTexture!==null||we.envMap!==Le||X.fog===!0&&we.fog!==ye||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ae.numPlanes||we.numIntersection!==Ae.numIntersection)||we.vertexAlphas!==ze||we.vertexTangents!==Ye||we.morphTargets!==De||we.morphNormals!==dt||we.morphColors!==bt||we.toneMapping!==Ct||we.morphTargetsCount!==Kt||!!we.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,we.__version=X.version);let In=we.currentProgram;tt===!0&&(In=vo(X,H,q),P&&X.isNodeMaterial&&P.onUpdateProgram(X,In,we));let ri=!1,qi=!1,ns=!1;const mt=In.getUniforms(),It=we.uniforms;if(ge.useProgram(In.program)&&(ri=!0,qi=!0,ns=!0),X.id!==N&&(N=X.id,qi=!0),we.needsLights){const gt=Bx(M.state.lightProbeGridArray,q);we.lightProbeGrid!==gt&&(we.lightProbeGrid=gt,qi=!0)}if(ri||F!==b){ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(B,"projectionMatrix",b.projectionMatrix),mt.setValue(B,"viewMatrix",b.matrixWorldInverse);const $i=mt.map.cameraPosition;$i!==void 0&&$i.setValue(B,je.setFromMatrixPosition(b.matrixWorld)),lt.logarithmicDepthBuffer&&mt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,qi=!0,ns=!0)}if(we.needsLights&&(Sn.state.directionalShadowMap.length>0&&mt.setValue(B,"directionalShadowMap",Sn.state.directionalShadowMap,R),Sn.state.spotShadowMap.length>0&&mt.setValue(B,"spotShadowMap",Sn.state.spotShadowMap,R),Sn.state.pointShadowMap.length>0&&mt.setValue(B,"pointShadowMap",Sn.state.pointShadowMap,R)),q.isSkinnedMesh){mt.setOptional(B,q,"bindMatrix"),mt.setOptional(B,q,"bindMatrixInverse");const gt=q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),mt.setValue(B,"boneTexture",gt.boneTexture,R))}q.isBatchedMesh&&(mt.setOptional(B,q,"batchingTexture"),mt.setValue(B,"batchingTexture",q._matricesTexture,R),mt.setOptional(B,q,"batchingIdTexture"),mt.setValue(B,"batchingIdTexture",q._indirectTexture,R),mt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&mt.setValue(B,"batchingColorTexture",q._colorsTexture,R));const Ki=$.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Fe.update(q,$,In),(qi||we.receiveShadow!==q.receiveShadow)&&(we.receiveShadow=q.receiveShadow,mt.setValue(B,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(It.envMapIntensity.value=H.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=eI()),qi){if(mt.setValue(B,"toneMappingExposure",A.toneMappingExposure),we.needsLights&&Vx(It,ns),ye&&X.fog===!0&&J.refreshFogUniforms(It,ye),J.refreshMaterialUniforms(It,X,ae,re,M.state.transmissionRenderTarget[b.id]),we.needsLights&&we.lightProbeGrid){const gt=we.lightProbeGrid;It.probesSH.value=gt.texture,It.probesMin.value.copy(gt.boundingBox.min),It.probesMax.value.copy(gt.boundingBox.max),It.probesResolution.value.copy(gt.resolution)}Rl.upload(B,Qh(we),It,R)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Rl.upload(B,Qh(we),It,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(B,"center",q.center),mt.setValue(B,"modelViewMatrix",q.modelViewMatrix),mt.setValue(B,"normalMatrix",q.normalMatrix),mt.setValue(B,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const gt=X.uniformsGroups;for(let $i=0,is=gt.length;$i<is;$i++){const tp=gt[$i];Q.update(tp,In),Q.bind(tp,In)}}return In}function Vx(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Hx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,H,$){const X=I.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),I.get(b.texture).__webglTexture=H,I.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const $=I.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const Gx=B.createFramebuffer();this.setRenderTarget=function(b,H=0,$=0){L=b,D=H,U=$;let X=null,q=!1,ye=!1;if(b){const _e=I.get(b);if(_e.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,_e.__webglFramebuffer),O.copy(b.viewport),G.copy(b.scissor),K=b.scissorTest,ge.viewport(O),ge.scissor(G),ge.setScissorTest(K),N=-1;return}else if(_e.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(_e.__hasExternalTextures)R.rebindTextures(b,I.get(b.texture).__webglTexture,I.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(_e.__boundDepthTexture!==ze){if(ze!==null&&I.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ye=!0);const Le=I.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[H])?X=Le[H][$]:X=Le[H],q=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?X=I.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?X=Le[$]:X=Le,O.copy(b.viewport),G.copy(b.scissor),K=b.scissorTest}else O.copy(ie).multiplyScalar(ae).floor(),G.copy(xe).multiplyScalar(ae).floor(),K=be;if($!==0&&(X=Gx),ge.bindFramebuffer(B.FRAMEBUFFER,X)&&ge.drawBuffers(b,X),ge.viewport(O),ge.scissor(G),ge.setScissorTest(K),q){const _e=I.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,_e.__webglTexture,$)}else if(ye){const _e=H;for(let Pe=0;Pe<b.textures.length;Pe++){const Le=I.get(b.textures[Pe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,$,_e)}}else if(b!==null&&$!==0){const _e=I.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,$)}N=-1},this.readRenderTargetPixels=function(b,H,$,X,q,ye,Te,_e=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=I.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){ge.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const Le=b.textures[_e],ze=Le.format,Ye=Le.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e),!lt.textureFormatReadable(ze)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ye)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-X&&$>=0&&$<=b.height-q&&B.readPixels(H,$,X,q,z.convert(ze),z.convert(Ye),ye)}finally{const Le=L!==null?I.get(L).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,H,$,X,q,ye,Te,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=I.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(H>=0&&H<=b.width-X&&$>=0&&$<=b.height-q){ge.bindFramebuffer(B.FRAMEBUFFER,Pe);const Le=b.textures[_e],ze=Le.format,Ye=Le.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e),!lt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,De),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(H,$,X,q,z.convert(ze),z.convert(Ye),0);const dt=L!==null?I.get(L).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,dt);const bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await MC(B,bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,De),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(De),B.deleteSync(bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,$=0){const X=Math.pow(2,-$),q=Math.floor(b.image.width*X),ye=Math.floor(b.image.height*X),Te=H!==null?H.x:0,_e=H!==null?H.y:0;R.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Te,_e,q,ye),ge.unbindTexture()};const Wx=B.createFramebuffer(),jx=B.createFramebuffer();this.copyTextureToTexture=function(b,H,$=null,X=null,q=0,ye=0){let Te,_e,Pe,Le,ze,Ye,De,dt,bt;const Ct=b.isCompressedTexture?b.mipmaps[ye]:b.image;if($!==null)Te=$.max.x-$.min.x,_e=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,ze=$.min.y,Ye=$.isBox3?$.min.z:0;else{const It=Math.pow(2,-q);Te=Math.floor(Ct.width*It),_e=Math.floor(Ct.height*It),b.isDataArrayTexture?Pe=Ct.depth:b.isData3DTexture?Pe=Math.floor(Ct.depth*It):Pe=1,Le=0,ze=0,Ye=0}X!==null?(De=X.x,dt=X.y,bt=X.z):(De=0,dt=0,bt=0);const pt=z.convert(H.format),Kt=z.convert(H.type);let we;H.isData3DTexture?(R.setTexture3D(H,0),we=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),we=B.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),we=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const Sn=ge.getParameter(B.UNPACK_ROW_LENGTH),tt=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),In=ge.getParameter(B.UNPACK_SKIP_PIXELS),ri=ge.getParameter(B.UNPACK_SKIP_ROWS),qi=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Ct.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Le),ge.pixelStorei(B.UNPACK_SKIP_ROWS,ze),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const ns=b.isDataArrayTexture||b.isData3DTexture,mt=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const It=I.get(b),Ki=I.get(H),gt=I.get(It.__renderTarget),$i=I.get(Ki.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,gt.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let is=0;is<Pe;is++)ns&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(b).__webglTexture,q,Ye+is),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(H).__webglTexture,ye,bt+is)),B.blitFramebuffer(Le,ze,Te,_e,De,dt,Te,_e,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||I.has(b)){const It=I.get(b),Ki=I.get(H);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Wx),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,jx);for(let gt=0;gt<Pe;gt++)ns?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,q,Ye+gt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,q),mt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ki.__webglTexture,ye,bt+gt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ki.__webglTexture,ye),q!==0?B.blitFramebuffer(Le,ze,Te,_e,De,dt,Te,_e,B.COLOR_BUFFER_BIT,B.NEAREST):mt?B.copyTexSubImage3D(we,ye,De,dt,bt+gt,Le,ze,Te,_e):B.copyTexSubImage2D(we,ye,De,dt,Le,ze,Te,_e);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(we,ye,De,dt,bt,Te,_e,Pe,pt,Kt,Ct.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(we,ye,De,dt,bt,Te,_e,Pe,pt,Ct.data):B.texSubImage3D(we,ye,De,dt,bt,Te,_e,Pe,pt,Kt,Ct):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,De,dt,Te,_e,pt,Kt,Ct.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,De,dt,Ct.width,Ct.height,pt,Ct.data):B.texSubImage2D(B.TEXTURE_2D,ye,De,dt,Te,_e,pt,Kt,Ct);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Sn),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tt),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,In),ge.pixelStorei(B.UNPACK_SKIP_ROWS,ri),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,qi),ye===0&&H.generateMipmaps&&B.generateMipmap(we),ge.unbindTexture()},this.initRenderTarget=function(b){I.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){D=0,U=0,L=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const nI="_container_1qf1x_1",iI={container:nI},rI=()=>{const t=V.useRef(null),e=V.useRef(null),n=V.useRef(null),i=V.useRef(null),s=V.useRef(null);return V.useEffect(()=>{if(!t.current)return;const r=new OC;e.current=r;const a=window.innerWidth,o=window.innerHeight,l=new Fn(75,a/o,.1,1e3);l.position.z=50,n.current=l;const u=new tI({alpha:!0,antialias:!0,powerPreference:"high-performance"});u.setSize(a,o),u.setClearColor(0,.1),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(u.domElement),i.current=u;const f=1500,h=new Rn,d=new Float32Array(f*3),c=new Float32Array(f*3),m=new Float32Array(f);for(let A=0;A<f*3;A+=3)d[A]=(Math.random()-.5)*200,d[A+1]=(Math.random()-.5)*200,d[A+2]=(Math.random()-.5)*200,c[A]=(Math.random()-.5)*.2,c[A+1]=(Math.random()-.5)*.2,c[A+2]=(Math.random()-.5)*.2,m[A/3]=Math.random()*2;h.setAttribute("position",new gn(d,3)),h.setAttribute("size",new gn(m,1)),h.setAttribute("velocity",new gn(c,3));const v=new Ex({color:65280,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.6,fog:!1}),g=new KC(h,v);r.add(g),s.current=g;const p=new Rn,x=new Float32Array(600);for(let A=0;A<600;A++)x[A]=(Math.random()-.5)*200;p.setAttribute("position",new gn(x,3));const y=new Mx({color:65280,transparent:!0,opacity:.2,linewidth:1}),E=new qC(p,y);r.add(E);let S=0,M=0;const w=A=>{S=A.clientX/window.innerWidth*2-1,M=-(A.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",w);const _=()=>{requestAnimationFrame(_);const A=h.getAttribute("position"),C=h.getAttribute("velocity"),P=A.array,D=C.array;for(let U=0;U<f*3;U+=3)P[U]+=D[U],P[U+1]+=D[U+1],P[U+2]+=D[U+2],P[U]>100&&(P[U]=-100),P[U]<-100&&(P[U]=100),P[U+1]>100&&(P[U+1]=-100),P[U+1]<-100&&(P[U+1]=100),P[U+2]>100&&(P[U+2]=-100),P[U+2]<-100&&(P[U+2]=100);A.needsUpdate=!0,g.rotation.x+=M*1e-4,g.rotation.y+=S*1e-4,g.rotation.z+=5e-5,u.render(r,l)};_();const T=()=>{const A=window.innerWidth,C=window.innerHeight;l.aspect=A/C,l.updateProjectionMatrix(),u.setSize(A,C)};return window.addEventListener("resize",T),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("resize",T),h.dispose(),p.dispose(),v.dispose(),y.dispose(),u.dispose(),t.current&&u.domElement.parentNode===t.current&&t.current.removeChild(u.domElement)}},[]),k.jsx("div",{ref:t,className:iI.container})},kx=V.createContext({darkMode:!1,toggleDarkMode:()=>{}});function sI(){const[t,e]=V.useState(!0),[n,i]=V.useState(!1),[s,r]=V.useState(!1),[a,o]=V.useState(!1),l=()=>{r(!s),s?document.documentElement.classList.remove("dark-theme"):document.documentElement.classList.add("dark-theme")};V.useEffect(()=>{const f=()=>{const h=document.querySelector(`.${dn.cursor}`);if(!h)return;const d=c=>{requestAnimationFrame(()=>{h.style.left=`${c.clientX}px`,h.style.top=`${c.clientY}px`})};return window.addEventListener("mousemove",d),()=>{window.removeEventListener("mousemove",d)}};if(n&&!t){const h=f();return()=>{h&&h()}}},[n,t]),V.useEffect(()=>{sessionStorage.getItem("hasVisited")?(e(!1),i(!0)):e(!0);const h=d=>{d.key==="Escape"&&t&&u()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[]);const u=()=>{sessionStorage.setItem("hasVisited","true"),o(!0),i(!0),setTimeout(()=>{e(!1),setTimeout(()=>{o(!1)},500)},1e3)};return k.jsx(kx.Provider,{value:{darkMode:s,toggleDarkMode:l},children:k.jsx(jM,{children:k.jsxs("div",{className:`${dn.appWrapper} ${s?dn.darkMode:""}`,children:[t&&k.jsx(VT,{onComplete:u}),k.jsx(rI,{}),k.jsx("div",{className:`${dn.pageTransition} ${a?dn.pageTransitionActive:""}`}),k.jsxs("div",{className:`${dn.App} ${n?dn.appLoaded:dn.appHidden}`,children:[k.jsxs("div",{className:dn.backgroundEffects,children:[k.jsx("div",{className:dn.grid}),k.jsx("div",{className:dn.topBlur}),k.jsx("div",{className:dn.bottomBlur})]}),k.jsx(OA,{}),k.jsxs(yM,{children:[k.jsx(Of,{path:"/",element:k.jsxs("div",{className:dn.homeContent,children:[k.jsx(iA,{}),k.jsx(AE,{}),k.jsx(pw,{}),k.jsx(cT,{}),k.jsx(zE,{})]})}),k.jsx(Of,{path:"/game",element:k.jsx(zT,{})})]}),k.jsx("div",{className:dn.cursor})]})]})})})}Gu.createRoot(document.getElementById("root")).render(k.jsx(o_.StrictMode,{children:k.jsx(sI,{})}));
