(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},nl={},Yu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),ic=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Oi=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Oi&&e[Oi]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xu=Object.assign,Gu={};function on(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Ku}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=on.prototype;function Vo(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Ku}var Bo=Vo.prototype=new Zu;Bo.constructor=Vo;Xu(Bo,on.prototype);Bo.isPureReactComponent=!0;var Ii=Array.isArray,Ju=Object.prototype.hasOwnProperty,Ho={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ju.call(t,r)&&!qu.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Zn,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function gc(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ai=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Zn:case ic:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,Ii(l)?(n="",e!=null&&(n=e.replace(Ai,"$&/")+"/"),xr(l,t,n,"",function(c){return c})):l!=null&&(Wo(l)&&(l=gc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ai,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ii(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+kl(o,a);i+=xr(o,t,n,u,l)}else if(u=vc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+kl(o,a++),i+=xr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},kr={transition:null},xc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Ho};function ea(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=uc;L.Profiler=sc;L.PureComponent=Vo;L.StrictMode=ac;L.Suspense=pc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;L.act=ea;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ho.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ju.call(t,u)&&!qu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zn,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};L.createElement=bu;L.createFactory=function(e){var t=bu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:dc,render:e}};L.isValidElement=Wo;L.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:wc}};L.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};L.unstable_act=ea;L.useCallback=function(e,t){return ae.current.useCallback(e,t)};L.useContext=function(e){return ae.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};L.useEffect=function(e,t){return ae.current.useEffect(e,t)};L.useId=function(){return ae.current.useId()};L.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ae.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};L.useRef=function(e){return ae.current.useRef(e)};L.useState=function(e){return ae.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ae.current.useTransition()};L.version="18.3.1";Yu.exports=L;var b=Yu.exports;const kc=oc(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=b,Ec=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,_c=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zc={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Nc.call(t,r)&&!zc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ec,type:e,key:o,ref:i,props:l,_owner:_c.current}}nl.Fragment=Cc;nl.jsx=ta;nl.jsxs=ta;Qu.exports=nl;var p=Qu.exports,Kl={},na={exports:{}},we={},ra={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var j=C.length;C.push(P);e:for(;0<j;){var W=j-1>>>1,G=C[W];if(0<l(G,P))C[W]=P,C[j]=G,j=W;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],j=C.pop();if(j!==P){C[0]=j;e:for(var W=0,G=C.length,tr=G>>>1;W<tr;){var gt=2*(W+1)-1,xl=C[gt],yt=gt+1,nr=C[yt];if(0>l(xl,j))yt<G&&0>l(nr,xl)?(C[W]=nr,C[yt]=j,W=yt):(C[W]=xl,C[gt]=j,W=gt);else if(yt<G&&0>l(nr,j))C[W]=nr,C[yt]=j,W=yt;else break e}}return P}function l(C,P){var j=C.sortIndex-P.sortIndex;return j!==0?j:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],v=1,h=null,m=3,w=!1,x=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(c)}}function g(C){if(k=!1,d(C),!x)if(n(u)!==null)x=!0,yl(E);else{var P=n(c);P!==null&&wl(g,P.startTime-C)}}function E(C,P){x=!1,k&&(k=!1,f(z),z=-1),w=!0;var j=m;try{for(d(P),h=n(u);h!==null&&(!(h.expirationTime>P)||C&&!ze());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var G=W(h.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(u)&&r(u),d(P)}else r(u);h=n(u)}if(h!==null)var tr=!0;else{var gt=n(c);gt!==null&&wl(g,gt.startTime-P),tr=!1}return tr}finally{h=null,m=j,w=!1}}var N=!1,_=null,z=-1,H=5,T=-1;function ze(){return!(e.unstable_now()-T<H)}function sn(){if(_!==null){var C=e.unstable_now();T=C;var P=!0;try{P=_(!0,C)}finally{P?cn():(N=!1,_=null)}}else N=!1}var cn;if(typeof s=="function")cn=function(){s(sn)};else if(typeof MessageChannel<"u"){var Fi=new MessageChannel,lc=Fi.port2;Fi.port1.onmessage=sn,cn=function(){lc.postMessage(null)}}else cn=function(){I(sn,0)};function yl(C){_=C,N||(N=!0,cn())}function wl(C,P){z=I(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,yl(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var j=m;m=P;try{return C()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=m;m=C;try{return P()}finally{m=j}},e.unstable_scheduleCallback=function(C,P,j){var W=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?W+j:W):j=W,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,C={id:v++,callback:P,priorityLevel:C,startTime:j,expirationTime:G,sortIndex:-1},j>W?(C.sortIndex=j,t(c,C),n(u)===null&&C===n(c)&&(k?(f(z),z=-1):k=!0,wl(g,j-W))):(C.sortIndex=G,t(u,C),x||w||(x=!0,yl(E))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var P=m;return function(){var j=m;m=P;try{return C.apply(this,arguments)}finally{m=j}}}})(la);ra.exports=la;var Pc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=b,ye=Pc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oa=new Set,Mn={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)oa.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ui={},$i={};function Tc(e){return Xl.call($i,e)?!0:Xl.call(Ui,e)?!1:Lc.test(e)?$i[e]=!0:(Ui[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mc(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qo,Yo);te[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qo,Yo);te[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qo,Yo);te[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mc(t,n,l,r)&&(n=null),r||l===null?Tc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),Vi=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Sl;function xn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Dc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case Dt:return"Portal";case Gl:return"Profiler";case Xo:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ua:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=sa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Oc(e))}function ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fa(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function eo(e,t){fa(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function no(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function da(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ic=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Ic.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function va(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ac=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,t){if(t){if(Ac[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,Kt=null,Xt=null;function Yi(e){if(e=bn(e)){if(typeof uo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ul(t),uo(e.stateNode,e.type,t))}}function ga(e){Kt?Xt?Xt.push(e):Xt=[e]:Kt=e}function ya(){if(Kt){var e=Kt,t=Xt;if(Xt=Kt=null,Yi(e),t)for(e=0;e<t.length;e++)Yi(t[e])}}function wa(e,t){return e(t)}function xa(){}var Nl=!1;function ka(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return wa(e,t,n)}finally{Nl=!1,(Kt!==null||Xt!==null)&&(xa(),ya())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ao=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ao=!1}function Uc(e,t,n,r,l,o,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var Nn=!1,Mr=null,Dr=!1,so=null,$c={onError:function(e){Nn=!0,Mr=e}};function Vc(e,t,n,r,l,o,i,a,u){Nn=!1,Mr=null,Uc.apply($c,arguments)}function Bc(e,t,n,r,l,o,i,a,u){if(Vc.apply(this,arguments),Nn){if(Nn){var c=Mr;Nn=!1,Mr=null}else throw Error(y(198));Dr||(Dr=!0,so=c)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ki(e){if(Rt(e)!==e)throw Error(y(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ki(l),e;if(o===r)return Ki(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ea(e){return e=Hc(e),e!==null?Ca(e):null}function Ca(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ca(e);if(t!==null)return t;e=e.sibling}return null}var Na=ye.unstable_scheduleCallback,Xi=ye.unstable_cancelCallback,Wc=ye.unstable_shouldYield,Qc=ye.unstable_requestPaint,Q=ye.unstable_now,Yc=ye.unstable_getCurrentPriorityLevel,qo=ye.unstable_ImmediatePriority,_a=ye.unstable_UserBlockingPriority,Fr=ye.unstable_NormalPriority,Kc=ye.unstable_LowPriority,za=ye.unstable_IdlePriority,rl=null,Ae=null;function Xc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Jc,Gc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Gc(e)/Zc|0)|0}var ur=64,ar=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Sn(a):(o&=i,o!==0&&(r=Sn(o)))}else i=n&~l,i!==0?r=Sn(i):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Re(o),a=1<<i,u=l[i];u===-1?(!(a&n)||a&r)&&(l[i]=qc(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function bo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function ja(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var La,ei,Ta,Ra,Ma,fo=!1,sr=[],rt=null,lt=null,ot=null,On=new Map,In=new Map,be=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=bn(t),t!==null&&ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nf(e,t,n,r,l){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,l),!0;case"dragenter":return lt=pn(lt,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return On.set(o,pn(On.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,In.set(o,pn(In.get(o)||null,e,t,n,r,l)),!0}return!1}function Da(e){var t=kt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sa(n),t!==null){e.blockedOn=t,Ma(e.priority,function(){Ta(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);io=r,n.target.dispatchEvent(r),io=null}else return t=bn(n),t!==null&&ei(t),e.blockedOn=n,!1;t.shift()}return!0}function Zi(e,t,n){Sr(e)&&n.delete(t)}function rf(){fo=!1,rt!==null&&Sr(rt)&&(rt=null),lt!==null&&Sr(lt)&&(lt=null),ot!==null&&Sr(ot)&&(ot=null),On.forEach(Zi),In.forEach(Zi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,rf)))}function An(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&mn(rt,e),lt!==null&&mn(lt,e),ot!==null&&mn(ot,e),On.forEach(t),In.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Da(n),n.blockedOn===null&&be.shift()}var Gt=Ge.ReactCurrentBatchConfig,Ir=!0;function lf(e,t,n,r){var l=M,o=Gt.transition;Gt.transition=null;try{M=1,ti(e,t,n,r)}finally{M=l,Gt.transition=o}}function of(e,t,n,r){var l=M,o=Gt.transition;Gt.transition=null;try{M=4,ti(e,t,n,r)}finally{M=l,Gt.transition=o}}function ti(e,t,n,r){if(Ir){var l=po(e,t,n,r);if(l===null)Ol(e,t,r,Ar,n),Gi(e,r);else if(nf(l,e,t,n,r))r.stopPropagation();else if(Gi(e,r),t&4&&-1<tf.indexOf(e)){for(;l!==null;){var o=bn(l);if(o!==null&&La(o),o=po(e,t,n,r),o===null&&Ol(e,t,r,Ar,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ar=null;function po(e,t,n,r){if(Ar=null,e=Jo(r),e=kt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case qo:return 1;case _a:return 4;case Fr:case Kc:return 16;case za:return 536870912;default:return 16}default:return 16}}var tt=null,ni=null,Er=null;function Oa(){if(Er)return Er;var e,t=ni,n=t.length,r,l="value"in tt?tt.value:tt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Ji(){return!1}function xe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:Ji,this.isPropagationStopped=Ji,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=xe(un),qn=V({},un,{view:0,detail:0}),uf=xe(qn),zl,Pl,hn,ll=V({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(zl=e.screenX-hn.screenX,Pl=e.screenY-hn.screenY):Pl=zl=0,hn=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),qi=xe(ll),af=V({},ll,{dataTransfer:0}),sf=xe(af),cf=V({},qn,{relatedTarget:0}),jl=xe(cf),ff=V({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),df=xe(ff),pf=V({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=xe(pf),hf=V({},un,{data:0}),bi=xe(hf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yf[e])?!!t[e]:!1}function li(){return wf}var xf=V({},qn,{key:function(e){if(e.key){var t=vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=xe(xf),Sf=V({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=xe(Sf),Ef=V({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Cf=xe(Ef),Nf=V({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=xe(Nf),zf=V({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=xe(zf),jf=[9,13,27,32],oi=Qe&&"CompositionEvent"in window,_n=null;Qe&&"documentMode"in document&&(_n=document.documentMode);var Lf=Qe&&"TextEvent"in window&&!_n,Ia=Qe&&(!oi||_n&&8<_n&&11>=_n),tu=" ",nu=!1;function Aa(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ua(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Tf(e,t){switch(e){case"compositionend":return Ua(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function Rf(e,t){if(Ot)return e==="compositionend"||!oi&&Aa(e,t)?(e=Oa(),Er=ni=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ia&&t.locale!=="ko"?null:t.data;default:return null}}var Mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mf[e.type]:t==="textarea"}function $a(e,t,n,r){ga(r),t=Ur(t,"onChange"),0<t.length&&(n=new ri("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,Un=null;function Df(e){Ja(e,0)}function ol(e){var t=Ut(e);if(ca(t))return e}function Ff(e,t){if(e==="change")return t}var Va=!1;if(Qe){var Ll;if(Qe){var Tl="oninput"in document;if(!Tl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Tl=typeof lu.oninput=="function"}Ll=Tl}else Ll=!1;Va=Ll&&(!document.documentMode||9<document.documentMode)}function ou(){zn&&(zn.detachEvent("onpropertychange",Ba),Un=zn=null)}function Ba(e){if(e.propertyName==="value"&&ol(Un)){var t=[];$a(t,Un,e,Jo(e)),ka(Df,t)}}function Of(e,t,n){e==="focusin"?(ou(),zn=t,Un=n,zn.attachEvent("onpropertychange",Ba)):e==="focusout"&&ou()}function If(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Un)}function Af(e,t){if(e==="click")return ol(t)}function Uf(e,t){if(e==="input"||e==="change")return ol(t)}function $f(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:$f;function $n(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function Ha(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ha(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vf(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ha(n.ownerDocument.documentElement,n)){if(r!==null&&ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=uu(n,o);var i=uu(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bf=Qe&&"documentMode"in document&&11>=document.documentMode,It=null,mo=null,Pn=null,ho=!1;function au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||It==null||It!==Rr(r)||(r=It,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&$n(Pn,r)||(Pn=r,r=Ur(mo,"onSelect"),0<r.length&&(t=new ri("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=It)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Rl={},Qa={};Qe&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function il(e){if(Rl[e])return Rl[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qa)return Rl[e]=t[n];return e}var Ya=il("animationend"),Ka=il("animationiteration"),Xa=il("animationstart"),Ga=il("transitionend"),Za=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Za.set(e,t),Tt(t,[e])}for(var Ml=0;Ml<su.length;Ml++){var Dl=su[Ml],Hf=Dl.toLowerCase(),Wf=Dl[0].toUpperCase()+Dl.slice(1);pt(Hf,"on"+Wf)}pt(Ya,"onAnimationEnd");pt(Ka,"onAnimationIteration");pt(Xa,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ga,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;cu(l,a,c),o=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;cu(l,a,c),o=u}}}if(Dr)throw e=so,Dr=!1,so=null,e}function F(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[dr]){e[dr]=!0,oa.forEach(function(n){n!=="selectionchange"&&(Qf.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Fl("selectionchange",!1,t))}}function qa(e,t,n,r){switch(Fa(t)){case 1:var l=lf;break;case 4:l=of;break;default:l=ti}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=kt(a),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}a=a.parentNode}}r=r.return}ka(function(){var c=o,v=Jo(n),h=[];e:{var m=Za.get(e);if(m!==void 0){var w=ri,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":w=kf;break;case"focusin":x="focus",w=jl;break;case"focusout":x="blur",w=jl;break;case"beforeblur":case"afterblur":w=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Cf;break;case Ya:case Ka:case Xa:w=df;break;case Ga:w=_f;break;case"scroll":w=uf;break;case"wheel":w=Pf;break;case"copy":case"cut":case"paste":w=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=eu}var k=(t&4)!==0,I=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var s=c,d;s!==null;){d=s;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Fn(s,f),g!=null&&k.push(Bn(s,g,d)))),I)break;s=s.return}0<k.length&&(m=new w(m,x,null,n,v),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==io&&(x=n.relatedTarget||n.fromElement)&&(kt(x)||x[Ye]))break e;if((w||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?kt(x):null,x!==null&&(I=Rt(x),x!==I||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(k=qi,g="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=eu,g="onPointerLeave",f="onPointerEnter",s="pointer"),I=w==null?m:Ut(w),d=x==null?m:Ut(x),m=new k(g,s+"leave",w,n,v),m.target=I,m.relatedTarget=d,g=null,kt(v)===c&&(k=new k(f,s+"enter",x,n,v),k.target=d,k.relatedTarget=I,g=k),I=g,w&&x)t:{for(k=w,f=x,s=0,d=k;d;d=Mt(d))s++;for(d=0,g=f;g;g=Mt(g))d++;for(;0<s-d;)k=Mt(k),s--;for(;0<d-s;)f=Mt(f),d--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break t;k=Mt(k),f=Mt(f)}k=null}else k=null;w!==null&&fu(h,m,w,k,!1),x!==null&&I!==null&&fu(h,I,x,k,!0)}}e:{if(m=c?Ut(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=Ff;else if(ru(m))if(Va)E=Uf;else{E=If;var N=Of}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Af);if(E&&(E=E(e,c))){$a(h,E,n,v);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&to(m,"number",m.value)}switch(N=c?Ut(c):window,e){case"focusin":(ru(N)||N.contentEditable==="true")&&(It=N,mo=c,Pn=null);break;case"focusout":Pn=mo=It=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,au(h,n,v);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":au(h,n,v)}var _;if(oi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ot?Aa(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ia&&n.locale!=="ko"&&(Ot||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ot&&(_=Oa()):(tt=v,ni="value"in tt?tt.value:tt.textContent,Ot=!0)),N=Ur(c,z),0<N.length&&(z=new bi(z,e,null,n,v),h.push({event:z,listeners:N}),_?z.data=_:(_=Ua(n),_!==null&&(z.data=_)))),(_=Lf?Tf(e,n):Rf(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(v=new bi("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:c}),v.data=_))}Ja(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Fn(e,n),o!=null&&r.unshift(Bn(e,o,l)),o=Fn(e,t),o!=null&&r.push(Bn(e,o,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Fn(n,o),u!=null&&i.unshift(Bn(n,u,a))):l||(u=Fn(n,o),u!=null&&i.push(Bn(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Yf,`
`).replace(Kf,"")}function pr(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(y(425))}function $r(){}var vo=null,go=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Zf)}:wo;function Zf(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),An(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);An(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Ie="__reactFiber$"+an,Hn="__reactProps$"+an,Ye="__reactContainer$"+an,xo="__reactEvents$"+an,Jf="__reactListeners$"+an,qf="__reactHandles$"+an;function kt(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[Ie])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function bn(e){return e=e[Ie]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ul(e){return e[Hn]||null}var ko=[],$t=-1;function mt(e){return{current:e}}function O(e){0>$t||(e.current=ko[$t],ko[$t]=null,$t--)}function D(e,t){$t++,ko[$t]=e.current,e.current=t}var dt={},oe=mt(dt),de=mt(!1),_t=dt;function bt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Vr(){O(de),O(oe)}function hu(e,t,n){if(oe.current!==dt)throw Error(y(168));D(oe,t),D(de,n)}function ba(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Fc(e)||"Unknown",l));return V({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,_t=oe.current,D(oe,e),D(de,de.current),!0}function vu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ba(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,O(de),O(oe),D(oe,e)):O(de),D(de,n)}var Ve=null,al=!1,Al=!1;function es(e){Ve===null?Ve=[e]:Ve.push(e)}function bf(e){al=!0,es(e)}function ht(){if(!Al&&Ve!==null){Al=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,al=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Na(qo,ht),l}finally{M=t,Al=!1}}return null}var Vt=[],Bt=0,Hr=null,Wr=0,ke=[],Se=0,zt=null,Be=1,He="";function wt(e,t){Vt[Bt++]=Wr,Vt[Bt++]=Hr,Hr=e,Wr=t}function ts(e,t,n){ke[Se++]=Be,ke[Se++]=He,ke[Se++]=zt,zt=e;var r=Be;e=He;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var o=32-Re(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Be=1<<32-Re(t)+l|n<<l|r,He=o+e}else Be=1<<o|n<<l|r,He=e}function ui(e){e.return!==null&&(wt(e,1),ts(e,1,0))}function ai(e){for(;e===Hr;)Hr=Vt[--Bt],Vt[Bt]=null,Wr=Vt[--Bt],Vt[Bt]=null;for(;e===zt;)zt=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null,Be=ke[--Se],ke[Se]=null}var ge=null,ve=null,A=!1,Te=null;function ns(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,ve=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Be,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,ve=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eo(e){if(A){var t=ve;if(t){var n=t;if(!gu(e,t)){if(So(e))throw Error(y(418));t=it(n.nextSibling);var r=ge;t&&gu(e,t)?ns(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(So(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function mr(e){if(e!==ge)return!1;if(!A)return yu(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=ve)){if(So(e))throw rs(),Error(y(418));for(;t;)ns(e,t),t=it(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ge?it(e.stateNode.nextSibling):null;return!0}function rs(){for(var e=ve;e;)e=it(e.nextSibling)}function en(){ve=ge=null,A=!1}function si(e){Te===null?Te=[e]:Te.push(e)}var ed=Ge.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wu(e){var t=e._init;return t(e._payload)}function ls(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=ct(f,s),f.index=0,f.sibling=null,f}function o(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,s,d,g){return s===null||s.tag!==6?(s=Ql(d,f.mode,g),s.return=f,s):(s=l(s,d),s.return=f,s)}function u(f,s,d,g){var E=d.type;return E===Ft?v(f,s,d.props.children,g,d.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&wu(E)===s.type)?(g=l(s,d.props),g.ref=vn(f,s,d),g.return=f,g):(g=Tr(d.type,d.key,d.props,null,f.mode,g),g.ref=vn(f,s,d),g.return=f,g)}function c(f,s,d,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Yl(d,f.mode,g),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function v(f,s,d,g,E){return s===null||s.tag!==7?(s=Nt(d,f.mode,g,E),s.return=f,s):(s=l(s,d),s.return=f,s)}function h(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ql(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case lr:return d=Tr(s.type,s.key,s.props,null,f.mode,d),d.ref=vn(f,null,s),d.return=f,d;case Dt:return s=Yl(s,f.mode,d),s.return=f,s;case Je:var g=s._init;return h(f,g(s._payload),d)}if(kn(s)||fn(s))return s=Nt(s,f.mode,d,null),s.return=f,s;hr(f,s)}return null}function m(f,s,d,g){var E=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,s,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lr:return d.key===E?u(f,s,d,g):null;case Dt:return d.key===E?c(f,s,d,g):null;case Je:return E=d._init,m(f,s,E(d._payload),g)}if(kn(d)||fn(d))return E!==null?null:v(f,s,d,g,null);hr(f,d)}return null}function w(f,s,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(s,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lr:return f=f.get(g.key===null?d:g.key)||null,u(s,f,g,E);case Dt:return f=f.get(g.key===null?d:g.key)||null,c(s,f,g,E);case Je:var N=g._init;return w(f,s,d,N(g._payload),E)}if(kn(g)||fn(g))return f=f.get(d)||null,v(s,f,g,E,null);hr(s,g)}return null}function x(f,s,d,g){for(var E=null,N=null,_=s,z=s=0,H=null;_!==null&&z<d.length;z++){_.index>z?(H=_,_=null):H=_.sibling;var T=m(f,_,d[z],g);if(T===null){_===null&&(_=H);break}e&&_&&T.alternate===null&&t(f,_),s=o(T,s,z),N===null?E=T:N.sibling=T,N=T,_=H}if(z===d.length)return n(f,_),A&&wt(f,z),E;if(_===null){for(;z<d.length;z++)_=h(f,d[z],g),_!==null&&(s=o(_,s,z),N===null?E=_:N.sibling=_,N=_);return A&&wt(f,z),E}for(_=r(f,_);z<d.length;z++)H=w(_,f,z,d[z],g),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?z:H.key),s=o(H,s,z),N===null?E=H:N.sibling=H,N=H);return e&&_.forEach(function(ze){return t(f,ze)}),A&&wt(f,z),E}function k(f,s,d,g){var E=fn(d);if(typeof E!="function")throw Error(y(150));if(d=E.call(d),d==null)throw Error(y(151));for(var N=E=null,_=s,z=s=0,H=null,T=d.next();_!==null&&!T.done;z++,T=d.next()){_.index>z?(H=_,_=null):H=_.sibling;var ze=m(f,_,T.value,g);if(ze===null){_===null&&(_=H);break}e&&_&&ze.alternate===null&&t(f,_),s=o(ze,s,z),N===null?E=ze:N.sibling=ze,N=ze,_=H}if(T.done)return n(f,_),A&&wt(f,z),E;if(_===null){for(;!T.done;z++,T=d.next())T=h(f,T.value,g),T!==null&&(s=o(T,s,z),N===null?E=T:N.sibling=T,N=T);return A&&wt(f,z),E}for(_=r(f,_);!T.done;z++,T=d.next())T=w(_,f,z,T.value,g),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?z:T.key),s=o(T,s,z),N===null?E=T:N.sibling=T,N=T);return e&&_.forEach(function(sn){return t(f,sn)}),A&&wt(f,z),E}function I(f,s,d,g){if(typeof d=="object"&&d!==null&&d.type===Ft&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case lr:e:{for(var E=d.key,N=s;N!==null;){if(N.key===E){if(E=d.type,E===Ft){if(N.tag===7){n(f,N.sibling),s=l(N,d.props.children),s.return=f,f=s;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&wu(E)===N.type){n(f,N.sibling),s=l(N,d.props),s.ref=vn(f,N,d),s.return=f,f=s;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===Ft?(s=Nt(d.props.children,f.mode,g,d.key),s.return=f,f=s):(g=Tr(d.type,d.key,d.props,null,f.mode,g),g.ref=vn(f,s,d),g.return=f,f=g)}return i(f);case Dt:e:{for(N=d.key;s!==null;){if(s.key===N)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Yl(d,f.mode,g),s.return=f,f=s}return i(f);case Je:return N=d._init,I(f,s,N(d._payload),g)}if(kn(d))return x(f,s,d,g);if(fn(d))return k(f,s,d,g);hr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=l(s,d),s.return=f,f=s):(n(f,s),s=Ql(d,f.mode,g),s.return=f,f=s),i(f)):n(f,s)}return I}var tn=ls(!0),os=ls(!1),Qr=mt(null),Yr=null,Ht=null,ci=null;function fi(){ci=Ht=Yr=null}function di(e){var t=Qr.current;O(Qr),e._currentValue=t}function Co(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Yr=e,ci=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Yr===null)throw Error(y(308));Ht=e,Yr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var St=null;function pi(e){St===null?St=[e]:St.push(e)}function is(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,pi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,pi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;qe=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==i&&(a===null?v.firstBaseUpdate=c:a.next=c,v.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,v=c=u=null,a=o;do{var m=a.lane,w=a.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,k=a;switch(m=t,w=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){h=x.call(w,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,m=typeof x=="function"?x.call(w,h,m):x,m==null)break e;h=V({},h,m);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=w,u=h):v=v.next=w,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);jt|=i,e.lanes=i,e.memoizedState=h}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var er={},Ue=mt(er),Wn=mt(er),Qn=mt(er);function Et(e){if(e===er)throw Error(y(174));return e}function hi(e,t){switch(D(Qn,t),D(Wn,e),D(Ue,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ro(t,e)}O(Ue),D(Ue,t)}function nn(){O(Ue),O(Wn),O(Qn)}function as(e){Et(Qn.current);var t=Et(Ue.current),n=ro(t,e.type);t!==n&&(D(Wn,e),D(Ue,n))}function vi(e){Wn.current===e&&(O(Ue),O(Wn))}var U=mt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function gi(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var _r=Ge.ReactCurrentDispatcher,$l=Ge.ReactCurrentBatchConfig,Pt=0,$=null,K=null,Z=null,Gr=!1,jn=!1,Yn=0,td=0;function ne(){throw Error(y(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function wi(e,t,n,r,l,o){if(Pt=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?od:id,e=n(r,l),jn){o=0;do{if(jn=!1,Yn=0,25<=o)throw Error(y(301));o+=1,Z=K=null,t.updateQueue=null,_r.current=ud,e=n(r,l)}while(jn)}if(_r.current=Zr,t=K!==null&&K.next!==null,Pt=0,Z=K=$=null,Gr=!1,t)throw Error(y(300));return e}function xi(){var e=Yn!==0;return Yn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function _e(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Kn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,u=null,c=o;do{var v=c.lane;if((Pt&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,i=r):u=u.next=h,$.lanes|=v,jt|=v}c=c.next}while(c!==null&&c!==o);u===null?i=r:u.next=a,De(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,$.lanes|=o,jt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);De(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ss(){}function cs(e,t){var n=$,r=_e(),l=t(),o=!De(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,ki(ps.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Xn(9,ds.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));Pt&30||fs(n,t,l)}return l}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ds(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function ps(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function hs(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function Su(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=ld.bind(null,$,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return _e().memoizedState}function zr(e,t,n,r){var l=Oe();$.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=_e();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&yi(r,i.deps)){l.memoizedState=Xn(t,n,o,r);return}}$.flags|=e,l.memoizedState=Xn(1|t,n,o,r)}function Eu(e,t){return zr(8390656,8,e,t)}function ki(e,t){return sl(2048,8,e,t)}function gs(e,t){return sl(4,2,e,t)}function ys(e,t){return sl(4,4,e,t)}function ws(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,ws.bind(null,t,e),n)}function Si(){}function ks(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Es(e,t,n){return Pt&21?(De(n,t)||(n=Pa(),$.lanes|=n,jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function nd(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),t()}finally{M=n,$l.transition=r}}function Cs(){return _e().memoizedState}function rd(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e))_s(t,n);else if(n=is(e,t,n,r),n!==null){var l=ue();Me(n,e,r,l),zs(n,t,r)}}function ld(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))_s(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,De(a,i)){var u=t.interleaved;u===null?(l.next=l,pi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=is(e,t,l,r),n!==null&&(l=ue(),Me(n,e,r,l),zs(n,t,r))}}function Ns(e){var t=e.alternate;return e===$||t!==null&&t===$}function _s(e,t){jn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}var Zr={readContext:Ne,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},od={readContext:Ne,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,ws.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Su,useDebugValue:Si,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Su(!1),t=e[0];return e=nd.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Oe();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));Pt&30||fs(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Eu(ps.bind(null,r,o,e),[e]),r.flags|=2048,Xn(9,ds.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Oe(),t=J.identifierPrefix;if(A){var n=He,r=Be;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},id={readContext:Ne,useCallback:ks,useContext:Ne,useEffect:ki,useImperativeHandle:xs,useInsertionEffect:gs,useLayoutEffect:ys,useMemo:Ss,useReducer:Vl,useRef:vs,useState:function(){return Vl(Kn)},useDebugValue:Si,useDeferredValue:function(e){var t=_e();return Es(t,K.memoizedState,e)},useTransition:function(){var e=Vl(Kn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:cs,useId:Cs,unstable_isNewReconciler:!1},ud={readContext:Ne,useCallback:ks,useContext:Ne,useEffect:ki,useImperativeHandle:xs,useInsertionEffect:gs,useLayoutEffect:ys,useMemo:Ss,useReducer:Bl,useRef:vs,useState:function(){return Bl(Kn)},useDebugValue:Si,useDeferredValue:function(e){var t=_e();return K===null?t.memoizedState=e:Es(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Kn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:cs,useId:Cs,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function No(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=st(e),o=We(r,l);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=st(e),o=We(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=st(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Me(t,e,r,n),Nr(t,e,r))}};function Cu(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,o):!0}function Ps(e,t,n){var r=!1,l=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(l=pe(t)?_t:oe.current,r=t.contextTypes,o=(r=r!=null)?bt(e,l):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function _o(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ne(o):(o=pe(t)?_t:oe.current,l.context=bt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(No(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Dc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function js(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Io=r),zo(e,t)},n}function Ls(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zo(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sd.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var sd=Ge.ReactCurrentOwner,fe=!1;function ie(e,t,n,r){t.child=e===null?os(t,null,n,r):tn(t,e.child,n,r)}function ju(e,t,n,r,l){n=n.render;var o=t.ref;return Zt(t,l),r=wi(e,t,n,r,o,l),n=xi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&n&&ui(t),t.flags|=1,ie(e,t,r,l),t.child)}function Lu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ts(e,t,o,r,l)):(e=Tr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ts(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if($n(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Po(e,t,n,r,l)}function Rs(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Qt,he),he|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Qt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Qt,he),he|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Qt,he),he|=r;return ie(e,t,l,n),t.child}function Ms(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Po(e,t,n,r,l){var o=pe(n)?_t:oe.current;return o=bt(t,o),Zt(t,l),n=wi(e,t,n,r,o,l),r=xi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&r&&ui(t),t.flags|=1,ie(e,t,n,l),t.child)}function Tu(e,t,n,r,l){if(pe(n)){var o=!0;Br(t)}else o=!1;if(Zt(t,l),t.stateNode===null)Pr(e,t),Ps(t,n,r),_o(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=pe(n)?_t:oe.current,c=bt(t,c));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Nu(t,i,r,c),qe=!1;var m=t.memoizedState;i.state=m,Kr(t,r,i,l),u=t.memoizedState,a!==r||m!==u||de.current||qe?(typeof v=="function"&&(No(t,n,v,r),u=t.memoizedState),(a=qe||Cu(t,n,a,r,m,u,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,us(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:je(t.type,a),i.props=c,h=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ne(u):(u=pe(n)?_t:oe.current,u=bt(t,u));var w=n.getDerivedStateFromProps;(v=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||m!==u)&&Nu(t,i,r,u),qe=!1,m=t.memoizedState,i.state=m,Kr(t,r,i,l);var x=t.memoizedState;a!==h||m!==x||de.current||qe?(typeof w=="function"&&(No(t,n,w,r),x=t.memoizedState),(c=qe||Cu(t,n,c,r,m,x,u)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return jo(e,t,n,r,o,l)}function jo(e,t,n,r,l,o){Ms(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&vu(t,n,!1),Xe(e,t,o);r=t.stateNode,sd.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,a,o)):ie(e,t,a,o),t.memoizedState=r.state,l&&vu(t,n,!0),t.child}function Ds(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),hi(e,t.containerInfo)}function Ru(e,t,n,r,l){return en(),si(l),t.flags|=256,ie(e,t,n,r),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function To(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fs(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return Eo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=Nt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=To(n),t.memoizedState=Lo,e):Ei(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return cd(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=ct(a,o):(o=Nt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?To(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Lo,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ei(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&si(r),tn(t,e.child,null,n),e=Ei(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(y(422))),vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=Nt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tn(t,e.child,null,i),t.child.memoizedState=To(i),t.memoizedState=Lo,o);if(!(t.mode&1))return vr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=Hl(o,r,void 0),vr(e,t,i,r)}if(a=(i&e.childLanes)!==0,fe||a){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ke(e,l),Me(r,e,l,-1))}return ji(),r=Hl(Error(y(421))),vr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ed.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=it(l.nextSibling),ge=t,A=!0,Te=null,e!==null&&(ke[Se++]=Be,ke[Se++]=He,ke[Se++]=zt,Be=e.id,He=e.overflow,zt=t),t=Ei(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Co(e.return,t,n)}function Wl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Os(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,o);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Ds(t),en();break;case 5:as(t);break;case 1:pe(t.type)&&Br(t);break;case 4:hi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Fs(e,t,n):(D(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Os(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n)}return Xe(e,t,n)}var Is,Ro,As,Us;Is=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ro=function(){};As=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Ue.current);var o=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=no(e,l),r=no(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}lo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&F("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Us=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Vr(),re(t),null;case 3:return r=t.stateNode,nn(),O(de),O(oe),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&($o(Te),Te=null))),Ro(e,t),re(t),null;case 5:vi(t);var l=Et(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)As(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=Et(Ue.current),mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ie]=t,r[Hn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)F(En[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Bi(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Wi(r,o),F("invalid",r)}lo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",""+a]):Mn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&F("scroll",r)}switch(n){case"input":or(r),Hi(r,o,!0);break;case"textarea":or(r),Qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ie]=t,e[Hn]=r,Is(e,t,!1,!1),t.stateNode=e;e:{switch(i=oo(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)F(En[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Bi(e,r),l=bl(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),F("invalid",e);break;case"textarea":Wi(e,r),l=no(e,r),F("invalid",e);break;default:l=r}lo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?va(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ma(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&F("scroll",e):u!=null&&Ko(e,o,u,i))}switch(n){case"input":or(e),Hi(e,r,!1);break;case"textarea":or(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Us(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Et(Qn.current),Et(Ue.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ie]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ie]=t,t.stateNode=r}return re(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))rs(),en(),t.flags|=98560,o=!1;else if(o=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ie]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),o=!1}else Te!==null&&($o(Te),Te=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):ji())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return nn(),Ro(e,t),e===null&&Vn(t.stateNode.containerInfo),re(t),null;case 10:return di(t.type._context),re(t),null;case 17:return pe(t.type)&&Vr(),re(t),null;case 19:if(O(U),o=t.memoizedState,o===null)return re(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)gn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Xr(e),i!==null){for(t.flags|=128,gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return re(t),null}else 2*Q()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Pi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function pd(e,t){switch(ai(t),t.tag){case 1:return pe(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),O(de),O(oe),gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return nn(),null;case 10:return di(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var gr=!1,le=!1,md=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Mo(e,t,n){try{n()}catch(r){B(e,t,r)}}var Du=!1;function hd(e,t){if(vo=Ir,e=Wa(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,v=0,h=e,m=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(a=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++c===l&&(a=i),m===o&&++v===r&&(u=i),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Ir=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,I=x.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:je(t.type,k),I);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){B(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return x=Du,Du=!1,x}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Mo(t,n,o)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $s(e){var t=e.alternate;t!==null&&(e.alternate=null,$s(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Hn],delete t[xo],delete t[Jf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vs(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var q=null,Le=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Bs(e,t,n),n=n.sibling}function Bs(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:le||Wt(n,t);case 6:var r=q,l=Le;q=null,Ze(e,t,n),q=r,Le=l,q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),An(e)):Il(q,n.stateNode));break;case 4:r=q,l=Le,q=n.stateNode.containerInfo,Le=!0,Ze(e,t,n),q=r,Le=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Mo(n,t,i),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!le&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){B(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new md),t.forEach(function(r){var l=Cd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Le=!1;break e;case 3:q=a.stateNode.containerInfo,Le=!0;break e;case 4:q=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(q===null)throw Error(y(160));Bs(o,i,l),q=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){B(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hs(t,e),t=t.sibling}function Hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Fe(e),r&4){try{Ln(3,e,e.return),fl(3,e)}catch(k){B(e,e.return,k)}try{Ln(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:Pe(t,e),Fe(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),Fe(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(k){B(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fa(l,o),oo(a,i);var c=oo(a,o);for(i=0;i<u.length;i+=2){var v=u[i],h=u[i+1];v==="style"?va(l,h):v==="dangerouslySetInnerHTML"?ma(l,h):v==="children"?Dn(l,h):Ko(l,v,h,c)}switch(a){case"input":eo(l,o);break;case"textarea":da(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Yt(l,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Yt(l,!!o.multiple,o.defaultValue,!0):Yt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Hn]=o}catch(k){B(e,e.return,k)}}break;case 6:if(Pe(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){B(e,e.return,k)}}break;case 3:if(Pe(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:Pe(t,e),Fe(e);break;case 13:Pe(t,e),Fe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(_i=Q())),r&4&&Ou(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||v,Pe(t,e),le=c):Pe(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(h=S=v;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:Ln(4,m,m.return);break;case 1:Wt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){B(r,n,k)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Au(h);continue}}w!==null?(w.return=m,S=w):Au(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ha("display",i))}catch(k){B(e,e.return,k)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){B(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Fe(e),r&4&&Ou(e);break;case 21:break;default:Pe(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vs(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=Fu(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Fu(e);Fo(e,a,i);break;default:throw Error(y(161))}}catch(u){B(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e,t,n){S=e,Ws(e)}function Ws(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||le;a=gr;var c=le;if(gr=i,(le=u)&&!c)for(S=l;S!==null;)i=S,u=i.child,i.tag===22&&i.memoizedState!==null?Uu(l):u!==null?(u.return=i,S=u):Uu(l);for(;o!==null;)S=o,Ws(o),o=o.sibling;S=l,gr=a,le=c}Iu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Iu(e)}}function Iu(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ku(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&An(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&Do(t)}catch(m){B(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Au(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Uu(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){B(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){B(t,l,u)}}var o=t.return;try{Do(t)}catch(u){B(t,o,u)}break;case 5:var i=t.return;try{Do(t)}catch(u){B(t,i,u)}}}catch(u){B(t,t.return,u)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var gd=Math.ceil,Jr=Ge.ReactCurrentDispatcher,Ci=Ge.ReactCurrentOwner,Ce=Ge.ReactCurrentBatchConfig,R=0,J=null,Y=null,ee=0,he=0,Qt=mt(0),X=0,Gn=null,jt=0,dl=0,Ni=0,Tn=null,ce=null,_i=0,ln=1/0,$e=null,qr=!1,Io=null,at=null,yr=!1,nt=null,br=0,Rn=0,Ao=null,jr=-1,Lr=0;function ue(){return R&6?Q():jr!==-1?jr:jr=Q()}function st(e){return e.mode&1?R&2&&ee!==0?ee&-ee:ed.transition!==null?(Lr===0&&(Lr=Pa()),Lr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Fa(e.type)),e):1}function Me(e,t,n,r){if(50<Rn)throw Rn=0,Ao=null,Error(y(185));Jn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(dl|=n),X===4&&et(e,ee)),me(e,r),n===1&&R===0&&!(t.mode&1)&&(ln=Q()+500,al&&ht()))}function me(e,t){var n=e.callbackNode;bc(e,t);var r=Or(e,e===J?ee:0);if(r===0)n!==null&&Xi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xi(n),t===1)e.tag===0?bf($u.bind(null,e)):es($u.bind(null,e)),Gf(function(){!(R&6)&&ht()}),n=null;else{switch(ja(r)){case 1:n=qo;break;case 4:n=_a;break;case 16:n=Fr;break;case 536870912:n=za;break;default:n=Fr}n=qs(n,Qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qs(e,t){if(jr=-1,Lr=0,R&6)throw Error(y(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Or(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=R;R|=2;var o=Ks();(J!==e||ee!==t)&&($e=null,ln=Q()+500,Ct(e,t));do try{xd();break}catch(a){Ys(e,a)}while(!0);fi(),Jr.current=o,R=l,Y!==null?t=0:(J=null,ee=0,t=X)}if(t!==0){if(t===2&&(l=co(e),l!==0&&(r=l,t=Uo(e,l))),t===1)throw n=Gn,Ct(e,0),et(e,r),me(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!yd(l)&&(t=el(e,r),t===2&&(o=co(e),o!==0&&(r=o,t=Uo(e,o))),t===1))throw n=Gn,Ct(e,0),et(e,r),me(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,ce,$e);break;case 3:if(et(e,r),(r&130023424)===r&&(t=_i+500-Q(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wo(xt.bind(null,e,ce,$e),t);break}xt(e,ce,$e);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Re(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=wo(xt.bind(null,e,ce,$e),r);break}xt(e,ce,$e);break;case 5:xt(e,ce,$e);break;default:throw Error(y(329))}}}return me(e,Q()),e.callbackNode===n?Qs.bind(null,e):null}function Uo(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=el(e,t),e!==2&&(t=ce,ce=n,t!==null&&$o(t)),e}function $o(e){ce===null?ce=e:ce.push.apply(ce,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!De(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ni,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(R&6)throw Error(y(327));Jt();var t=Or(e,0);if(!(t&1))return me(e,Q()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=co(e);r!==0&&(t=r,n=Uo(e,r))}if(n===1)throw n=Gn,Ct(e,0),et(e,t),me(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ce,$e),me(e,Q()),null}function zi(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(ln=Q()+500,al&&ht())}}function Lt(e){nt!==null&&nt.tag===0&&!(R&6)&&Jt();var t=R;R|=1;var n=Ce.transition,r=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=r,Ce.transition=n,R=t,!(R&6)&&ht()}}function Pi(){he=Qt.current,O(Qt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:nn(),O(de),O(oe),gi();break;case 5:vi(r);break;case 4:nn();break;case 13:O(U);break;case 19:O(U);break;case 10:di(r.type._context);break;case 22:case 23:Pi()}n=n.return}if(J=e,Y=e=ct(e.current,null),ee=he=t,X=0,Gn=null,Ni=dl=jt=0,ce=Tn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}St=null}return e}function Ys(e,t){do{var n=Y;try{if(fi(),_r.current=Zr,Gr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Pt=0,Z=K=$=null,jn=!1,Yn=0,Ci.current=null,n===null||n.return===null){X=1,Gn=t,Y=null;break}e:{var o=e,i=n.return,a=n,u=t;if(t=ee,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=a,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=zu(i);if(w!==null){w.flags&=-257,Pu(w,i,a,o,t),w.mode&1&&_u(o,c,t),t=w,u=c;var x=t.updateQueue;if(x===null){var k=new Set;k.add(u),t.updateQueue=k}else x.add(u);break e}else{if(!(t&1)){_u(o,c,t),ji();break e}u=Error(y(426))}}else if(A&&a.mode&1){var I=zu(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Pu(I,i,a,o,t),si(rn(u,a));break e}}o=u=rn(u,a),X!==4&&(X=2),Tn===null?Tn=[o]:Tn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=js(o,u,t);xu(o,f);break e;case 1:a=u;var s=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(at===null||!at.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Ls(o,a,t);xu(o,g);break e}}o=o.return}while(o!==null)}Gs(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ks(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function ji(){(X===0||X===3||X===2)&&(X=4),J===null||!(jt&268435455)&&!(dl&268435455)||et(J,ee)}function el(e,t){var n=R;R|=2;var r=Ks();(J!==e||ee!==t)&&($e=null,Ct(e,t));do try{wd();break}catch(l){Ys(e,l)}while(!0);if(fi(),R=n,Jr.current=r,Y!==null)throw Error(y(261));return J=null,ee=0,X}function wd(){for(;Y!==null;)Xs(Y)}function xd(){for(;Y!==null&&!Wc();)Xs(Y)}function Xs(e){var t=Js(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Gs(e):Y=t,Ci.current=null}function Gs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=dd(n,t,he),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function xt(e,t,n){var r=M,l=Ce.transition;try{Ce.transition=null,M=1,kd(e,t,n,r)}finally{Ce.transition=l,M=r}return null}function kd(e,t,n,r){do Jt();while(nt!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ef(e,o),e===J&&(Y=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,qs(Fr,function(){return Jt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=M;M=1;var a=R;R|=4,Ci.current=null,hd(e,n),Hs(n,e),Vf(go),Ir=!!vo,go=vo=null,e.current=n,vd(n),Qc(),R=a,M=i,Ce.transition=o}else e.current=n;if(yr&&(yr=!1,nt=e,br=l),o=e.pendingLanes,o===0&&(at=null),Xc(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Io,Io=null,e;return br&1&&e.tag!==0&&Jt(),o=e.pendingLanes,o&1?e===Ao?Rn++:(Rn=0,Ao=e):Rn=0,ht(),null}function Jt(){if(nt!==null){var e=ja(br),t=Ce.transition,n=M;try{if(Ce.transition=null,M=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,br=0,R&6)throw Error(y(331));var l=R;for(R|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(S=c;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:Ln(8,v,o)}var h=v.child;if(h!==null)h.return=v,S=h;else for(;S!==null;){v=S;var m=v.sibling,w=v.return;if($s(v),v===c){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ln(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var s=e.current;for(S=s;S!==null;){i=S;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,S=d;else e:for(i=s;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(E){B(a,a.return,E)}if(a===i){S=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,S=g;break e}S=a.return}}if(R=l,ht(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{M=n,Ce.transition=t}}return!1}function Vu(e,t,n){t=rn(n,t),t=js(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(Jn(e,1,t),me(e,t))}function B(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=rn(n,e),e=Ls(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(Jn(t,1,e),me(t,e));break}}t=t.return}}function Sd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>Q()-_i?Ct(e,0):Ni|=n),me(e,t)}function Zs(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ue();e=Ke(e,t),e!==null&&(Jn(e,t,n),me(e,n))}function Ed(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zs(e,n)}function Cd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Zs(e,n)}var Js;Js=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,fd(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&ts(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=bt(t,oe.current);Zt(t,n),l=wi(null,t,r,e,l,n);var o=xi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Br(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,_o(t,r,e,n),t=jo(null,t,r,!0,o,n)):(t.tag=0,A&&o&&ui(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_d(r),e=je(r,e),l){case 0:t=Po(null,t,r,e,n);break e;case 1:t=Tu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Lu(null,t,r,je(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Po(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Tu(e,t,r,l,n);case 3:e:{if(Ds(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,us(e,t),Kr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=rn(Error(y(423)),t),t=Ru(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Ru(e,t,r,n,l);break e}else for(ve=it(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Te=null,n=os(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Xe(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return as(t),e===null&&Eo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,yo(r,l)?i=null:o!==null&&yo(r,o)&&(t.flags|=32),Ms(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&Eo(t),null;case 13:return Fs(e,t,n);case 4:return hi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),ju(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,D(Qr,r._currentValue),r._currentValue=i,o!==null)if(De(o.value,i)){if(o.children===l.children&&!de.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=We(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Co(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Co(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ne(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=je(r,t.pendingProps),l=je(r.type,l),Lu(e,t,r,l,n);case 15:return Ts(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Pr(e,t),t.tag=1,pe(r)?(e=!0,Br(t)):e=!1,Zt(t,n),Ps(t,r,l),_o(t,r,l,n),jo(null,t,r,!0,e,n);case 19:return Os(e,t,n);case 22:return Rs(e,t,n)}throw Error(y(156,t.tag))};function qs(e,t){return Na(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Nd(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Zo)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ft:return Nt(n.children,l,o,t);case Xo:i=8,l|=8;break;case Gl:return e=Ee(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Zl:return e=Ee(13,n,t,l),e.elementType=Zl,e.lanes=o,e;case Jl:return e=Ee(19,n,t,l),e.elementType=Jl,e.lanes=o,e;case aa:return pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:i=10;break e;case ua:i=9;break e;case Go:i=11;break e;case Zo:i=14;break e;case Je:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Nt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=aa,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ti(e,t,n,r,l,o,i,a,u){return e=new zd(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(o),e}function Pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bs(e){if(!e)return dt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return ba(e,n,t)}return t}function ec(e,t,n,r,l,o,i,a,u){return e=Ti(n,r,!0,e,l,o,i,a,u),e.context=bs(null),n=e.current,r=ue(),l=st(n),o=We(r,l),o.callback=t??null,ut(n,o,l),e.current.lanes=l,Jn(e,l,r),me(e,r),e}function ml(e,t,n,r){var l=t.current,o=ue(),i=st(l);return n=bs(n),t.context===null?t.context=n:t.pendingContext=n,t=We(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,i),e!==null&&(Me(e,l,i,o),Nr(e,l,i)),i}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ri(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function jd(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mi(e){this._internalRoot=e}hl.prototype.render=Mi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ml(e,t,null,null)};hl.prototype.unmount=Mi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ml(null,e,null,null)}),t[Ye]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ra();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Da(e)}};function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function Ld(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=tl(i);o.call(c)}}var i=ec(t,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=i,e[Ye]=i.current,Vn(e.nodeType===8?e.parentNode:e),Lt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=tl(u);a.call(c)}}var u=Ti(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=u,e[Ye]=u.current,Vn(e.nodeType===8?e.parentNode:e),Lt(function(){ml(t,u,n,r)}),u}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var u=tl(i);a.call(u)}}ml(t,i,e,l)}else i=Ld(n,t,e,l,r);return tl(i)}La=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(bo(t,n|1),me(t,Q()),!(R&6)&&(ln=Q()+500,ht()))}break;case 13:Lt(function(){var r=Ke(e,1);if(r!==null){var l=ue();Me(r,e,1,l)}}),Ri(e,1)}};ei=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}Ri(e,134217728)}};Ta=function(e){if(e.tag===13){var t=st(e),n=Ke(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}Ri(e,t)}};Ra=function(){return M};Ma=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};uo=function(e,t,n){switch(t){case"input":if(eo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(y(90));ca(r),eo(r,l)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};wa=zi;xa=Lt;var Td={usingClientEntryPoint:!1,Events:[bn,Ut,ul,ga,ya,zi]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ea(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{rl=wr.inject(Rd),Ae=wr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Di(t))throw Error(y(200));return Pd(e,t,null,n)};we.createRoot=function(e,t){if(!Di(e))throw Error(y(299));var n=!1,r="",l=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ti(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Mi(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ea(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!vl(t))throw Error(y(200));return gl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Di(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ec(t,null,e,1,n??null,l,!1,o,i),e[Ye]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};we.render=function(e,t,n){if(!vl(t))throw Error(y(200));return gl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!vl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};we.unstable_batchedUpdates=zi;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),na.exports=we;var Md=na.exports,Wu=Md;Kl.createRoot=Wu.createRoot,Kl.hydrateRoot=Wu.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...a},u)=>b.createElement("svg",{ref:u,...Fd,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:rc("lucide",l),...a},[...i.map(([c,v])=>b.createElement(c,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=(e,t)=>{const n=b.forwardRef(({className:r,...l},o)=>b.createElement(Od,{ref:o,iconNode:t,className:rc(`lucide-${Dd(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=vt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=vt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=vt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=vt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=vt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=vt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=vt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qd=[{title:"MINDRO",year:"2026 — Present",tag:"ML Research",stack:["PyTorch","HuggingFace","PEFT / LoRA","Latent Diffusion","Reinforcement Learning"],desc:"An RL-driven architecture that builds individualized digital brain twins for PTSD patients. Full solution spans data ingestion, LSDT modeling, an RL training loop, and a clinical output layer.",featured:!0},{title:"House Price Prediction Model",year:"2025",tag:"Machine Learning",stack:["Python","Pandas","Scikit-learn"],desc:"Predicts house prices from structured housing data, covering the full pipeline: cleaning the data and handling missing values, engineering features from raw attributes, and training a regression model — then evaluating performance against a held-out test set to judge how well it generalizes.",featured:!0,visual:"regression"},{title:"Data Mining: Rules, Classification & Clustering",year:"2026",tag:"Data Mining",stack:["Python","Pandas","Scikit-learn","Mlxtend"],desc:"A three-part study applying core data mining techniques across three datasets: Apriori-based market basket analysis on the Groceries dataset, Decision Tree and Naive Bayes classifiers predicting Titanic survival, and K-Means clustering on the Penguins dataset — comparing performance across all three approaches.",featured:!0,visual:"techniques"},{title:"Adult Census Income Analysis",year:"2025",tag:"Data Analysis",stack:["R","Data Visualization"],desc:"Explored census income data to surface patterns across demographic and work-related features."},{title:"Automated Job Application Processing",year:"2025",tag:"Automation",stack:["n8n"],desc:"A workflow that automates job-application handling end to end, cutting down repetitive manual steps."},{title:"Task Management App",year:"2024",tag:"Mobile",stack:["Flutter"],desc:"A mobile app for organizing tasks and tracking productivity, built with a focus on clean everyday use."}],Yd=[{label:"Languages",items:["Python","R","SQL"]},{label:"ML / AI",items:["Machine Learning","AI Fundamentals","Data Analysis","Data Visualization"]},{label:"Development",items:["React","Flask","Flutter","n8n Automation"]}],Kd=[{name:"Computer Vision Workshop",org:"Qafza Tech"},{name:"Machine Learning Workshop",org:"Qafza Tech"},{name:"Machine Learning Engineer",org:"DataCamp"},{name:"Azure AI Fundamentals",org:"Microsoft"}];function Xd({className:e=""}){return p.jsx("div",{className:`pf-royal-divider ${e}`,children:p.jsx("span",{className:"pf-royal-diamond"})})}const Gd=[[15,82],[38,74],[55,80],[72,62],[92,68],[110,52],[130,58],[150,42],[170,47],[188,32],[208,37],[226,22],[246,28],[265,15],[282,20]];function Zd(){return p.jsxs("svg",{className:"pf-regression-svg",viewBox:"0 0 300 95",preserveAspectRatio:"none",children:[p.jsx("line",{x1:"0",y1:"90",x2:"300",y2:"90",className:"pf-reg-axis"}),p.jsx("path",{d:"M8,88 C 80,80 120,55 300,10",className:"pf-reg-line",fill:"none"}),Gd.map(([e,t],n)=>p.jsx("circle",{cx:e,cy:t,r:"3.4",className:"pf-reg-dot",style:{animationDelay:`${.5+n*.05}s`}},n))]})}function wn({children:e,delay:t=0}){const n=b.useRef(null);return b.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&l.target.classList.add("pf-show")},{threshold:.15});return r.observe(n.current),()=>r.disconnect()},[]),p.jsx("div",{ref:n,className:"pf-reveal",style:{transitionDelay:`${t}s`},children:e})}function Jd({children:e,className:t=""}){const n=b.useRef(null),r=o=>{const i=n.current;if(!i)return;const a=i.getBoundingClientRect(),u=o.clientX-a.left,c=o.clientY-a.top,v=a.width/2,h=a.height/2,m=(c-h)/h*-7,w=(u-v)/v*7;i.style.setProperty("--card-x",`${u}px`),i.style.setProperty("--card-y",`${c}px`),i.style.setProperty("--rotate-x",`${m}deg`),i.style.setProperty("--rotate-y",`${w}deg`)},l=()=>{const o=n.current;o&&(o.style.setProperty("--rotate-x","0deg"),o.style.setProperty("--rotate-y","0deg"))};return p.jsxs("div",{ref:n,className:`pf-tilt-card ${t}`,onMouseMove:r,onMouseLeave:l,children:[p.jsx("div",{className:"pf-card-spotlight","aria-hidden":"true"}),p.jsx("div",{className:"pf-card-content",children:e})]})}function qd(){const[e,t]=b.useState(!1),[n,r]=b.useState(0),l=b.useRef(null);b.useEffect(()=>{const u=l.current;if(!u)return;const c=h=>{const m=u.getBoundingClientRect();u.style.setProperty("--mouse-x",`${h.clientX-m.left}px`),u.style.setProperty("--mouse-y",`${h.clientY-m.top}px`)},v=()=>{const h=document.documentElement.scrollHeight-window.innerHeight,m=h>0?window.scrollY/h*100:0;r(m)};return u.addEventListener("pointermove",c),window.addEventListener("scroll",v,{passive:!0}),v(),()=>{u.removeEventListener("pointermove",c),window.removeEventListener("scroll",v)}},[]);const o=b.useRef(null);b.useEffect(()=>{const u=c=>{o.current&&(o.current.style.left=`${c.clientX}px`,o.current.style.top=`${c.clientY}px`)};return window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)},[]);const i=[{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"background",label:"Background"},{id:"contact",label:"Contact"}],a=u=>{var c;t(!1),(c=document.getElementById(u))==null||c.scrollIntoView({behavior:"smooth"})};return p.jsxs("div",{className:"pf-root",ref:l,children:[p.jsx("div",{className:"pf-scroll-progress",style:{width:`${n}%`},"aria-hidden":"true"}),p.jsxs("div",{className:"pf-aurora","aria-hidden":"true",children:[p.jsx("span",{className:"pf-aurora-one"}),p.jsx("span",{className:"pf-aurora-two"}),p.jsx("span",{className:"pf-aurora-three"})]}),p.jsx("div",{className:"pf-global-spotlight","aria-hidden":"true"}),p.jsx("div",{className:"pf-aurora"}),p.jsx("div",{className:"pf-mouse",ref:o}),p.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-root {
        background:
radial-gradient(circle at top left,#143d73 0%,transparent 40%),
radial-gradient(circle at bottom right,#c9a22722 0%,transparent 35%),
#ffffff;

position:relative;
overflow:hidden;
          --bg: #FFFFFF;
          --surface: #F6F8FC;
          --surface-hover: #EEF1FA;
          --line: #DEE4F0;
          --text: #0B2545;
          --muted: #5C6B85;
          --accent: #C9A227;
          --accent-soft: #E4C563;
          --signal: #0B2545;
          --navy-deep: #081B33;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .pf-root * { box-sizing: border-box; }
        .pf-display { font-family: 'Fraunces', serif; }
        .pf-mono { font-family: 'JetBrains Mono', monospace; }

        .pf-root ::selection { background: var(--accent); color: #FFFFFF; }

        .pf-royal-divider {
          position: relative;
          height: 2px;
          width: 100%;
          max-width: 280px;
          overflow: visible;
          background: linear-gradient(90deg, transparent, var(--navy-deep) 15%, var(--accent) 50%, var(--navy-deep) 85%, transparent);
        }
        .pf-royal-divider::after {
          content: '';
          position: absolute; top: -6px; left: -20%; width: 35%; height: 14px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent);
          filter: blur(2px);
          animation: sweep 3.2s ease-in-out infinite;
        }
        @keyframes sweep {
          0% { left: -25%; }
          60% { left: 110%; }
          100% { left: 110%; }
        }
        .pf-royal-diamond {
          position: absolute; top: 50%; left: 50%;
          width: 8px; height: 8px;
          background: var(--accent);
          transform: translate(-50%, -50%) rotate(45deg);
          box-shadow: 0 0 10px rgba(201, 162, 39, 0.55);
        }
          /* ===========================
SCROLL REVEAL
=========================== */

.pf-reveal{

opacity:0;

transform:
translateY(80px)
scale(.96);

transition:

opacity .8s cubic-bezier(.16,1,.3,1),

transform .8s cubic-bezier(.16,1,.3,1);

will-change:
opacity,
transform;

}

.pf-show{

opacity:1;

transform:

translateY(0)

scale(1);

}
        @media (prefers-reduced-motion: reduce) {
          .pf-royal-divider::after { animation: none; opacity: 0; }
        }

        .pf-nav {
          position: sticky; top: 0; z-index: 40;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .pf-navlink {
          color: var(--muted);
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
          background: none; border: none; cursor: pointer;
        }
        .pf-navlink:hover { color: var(--text); }

        .pf-hero { position: relative; padding-top: 5rem; padding-bottom: 4rem; }
        .pf-hero-inner { position: relative; z-index: 1; }

        .pf-fade-in {
          opacity: 0;
          animation: fade-up 0.7s ease-out forwards;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-fade-in { animation: none; opacity: 1; }
        }

        .pf-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          color: var(--signal);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .pf-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 8px var(--signal);
        }

        .pf-name {
          font-size: clamp(2.75rem, 8vw, 5.5rem);
          line-height: 0.98;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .pf-tagline { color: var(--muted); font-size: 1.05rem; max-width: 42ch; }

        .pf-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.7rem 1.3rem;
          border-radius: 3px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--line);
        }
        .pf-btn-primary {
          background: var(--accent);
          color: #17130a;
          border-color: var(--accent);
        }
        .pf-btn-primary:hover { background: var(--accent-soft); border-color: var(--accent-soft); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(201, 162, 39, 0.3); }
        .pf-btn-ghost { color: var(--text); }
        .pf-btn-ghost:hover { border-color: var(--signal); color: var(--signal); transform: translateY(-2px); }
        .pf-btn:active { transform: translateY(0); }

        .pf-section { padding: 4.5rem 0; border-top: 1px solid var(--line); }
        .pf-label {
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .pf-h2 {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .pf-chip {
          display: inline-block;
          padding: 0.35rem 0.8rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          font-size: 0.8rem;
          color: var(--text);
          background: var(--surface);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .pf-chip:hover { border-color: var(--accent); background: var(--surface-hover); transform: translateY(-1px); }

        .pf-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 1.75rem;
          transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .pf-card:hover {
          border-color: var(--signal);
          background: var(--surface-hover);
          box-shadow: 0 10px 28px rgba(11, 37, 69, 0.14);
        }
        .pf-card:active { filter: brightness(0.98); }
        .pf-card.featured {
          position: relative;
          border-color: transparent;
          background: linear-gradient(var(--surface), var(--surface)) padding-box,
                      conic-gradient(from var(--shimmer-angle, 0deg), var(--accent), var(--line) 25%, var(--accent) 50%, var(--line) 75%, var(--accent)) border-box;
          border: 1.5px solid transparent;
          animation: shimmer-rotate 6s linear infinite;
        }
        @property --shimmer-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes shimmer-rotate {
          from { --shimmer-angle: 0deg; }
          to { --shimmer-angle: 360deg; }
        }
        .pf-featured-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--navy-deep);
          background: linear-gradient(100deg, var(--accent-soft), var(--accent));
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-card.featured { animation: none; }
        }

        .pf-technique-bars { display: flex; flex-direction: column; gap: 0.65rem; }
        .pf-technique-row { display: flex; align-items: center; gap: 0.9rem; }
        .pf-technique-label {
          width: 130px; flex-shrink: 0;
          font-size: 0.7rem; color: var(--muted);
        }
        .pf-technique-track {
          flex: 1; height: 6px; border-radius: 999px;
          background: rgba(11, 37, 69, 0.08);
          overflow: hidden;
        }
        .pf-technique-fill {
          height: 100%; width: 0%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--navy-deep), var(--accent));
          animation: fill-bar 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fill-bar {
          from { width: 0%; }
          to { width: var(--target-w); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-technique-fill { animation: none; width: var(--target-w); }
        }

        .pf-regression-svg { width: 100%; height: 95px; overflow: visible; }
        .pf-reg-axis { stroke: var(--line); stroke-width: 1; }
        .pf-reg-line {
          stroke: var(--accent);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 340;
          stroke-dashoffset: 340;
          animation: draw-reg-line 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
        }
        .pf-reg-dot {
          fill: var(--navy-deep);
          stroke: var(--bg);
          stroke-width: 1.5;
          opacity: 0;
          transform-origin: center;
          transform-box: fill-box;
          animation: dot-pop 0.5s ease forwards;
        }
        @keyframes draw-reg-line {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dot-pop {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-reg-line { animation: none; stroke-dashoffset: 0; }
          .pf-reg-dot { animation: none; opacity: 1; transform: scale(1); }
        }

        .pf-stack-tag {
          font-size: 0.72rem;
          color: var(--navy-deep);
          border: 1px solid rgba(11, 37, 69, 0.18);
          background: rgba(11, 37, 69, 0.04);
          border-radius: 3px;
          padding: 0.15rem 0.5rem;
        }

        .pf-tag-pill {
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .pf-footer-line { border-top: 1px solid var(--line); }

        .pf-link-icon {
          color: var(--muted);
          transition: color 0.2s ease;
        }
        .pf-link-icon:hover { color: var(--signal); }
        /* Aurora */

.pf-aurora{
position:fixed;
inset:-30%;
pointer-events:none;
z-index:0;
filter:blur(90px);
opacity:.55;
animation:auroraMove 20s linear infinite;
}

.pf-aurora::before,
.pf-aurora::after{
content:"";
position:absolute;
width:500px;
height:500px;
border-radius:50%;
}

.pf-aurora::before{
background:#0b254455;
top:5%;
left:15%;
}

.pf-aurora::after{
background:#c9a22755;
right:10%;
bottom:5%;
}

@keyframes auroraMove{

0%{
transform:translate(0,0) rotate(0deg);
}

50%{
transform:translate(100px,-50px) rotate(180deg);
}

100%{
transform:translate(0,0) rotate(360deg);
}

}


/* Mouse Glow */

.pf-mouse{
position:fixed;
width:320px;
height:320px;
border-radius:50%;
pointer-events:none;
background:radial-gradient(circle,
rgba(201,162,39,.22),
transparent 70%);
filter:blur(35px);
transform:translate(-50%,-50%);
z-index:0;
transition:left .08s linear,
top .08s linear;
}
.pf-whatsapp-btn {
  background: #25d366;
  color: #ffffff;
  border-color: #25d366;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.22);
}

.pf-whatsapp-btn:hover {
  background: #1ebe5d;
  border-color: #1ebe5d;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
}
  .pf-linkedin-btn {
  background: #0a66c2;
  color: white;
  border-color: #0a66c2;
}

.pf-linkedin-btn:hover {
  background: #004182;
  border-color: #004182;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(10, 102, 194, 0.35);
}
  /* ================================
   PREMIUM ANIMATED BACKGROUND
================================ */

.pf-root {
  isolation: isolate;
}

.pf-root > nav,
.pf-root > header,
.pf-root > section,
.pf-root > footer {
  position: relative;
  z-index: 3;
}

/* Scroll progress line */

.pf-scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 4px;
  width: 0;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    var(--navy-deep),
    var(--accent),
    var(--accent-soft)
  );
  box-shadow:
    0 0 12px rgba(201, 162, 39, 0.75),
    0 0 24px rgba(201, 162, 39, 0.4);
  transition: width 0.08s linear;
}

/* Global mouse spotlight */

.pf-global-spotlight {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  pointer-events: none;

  transform: translate(
    calc(var(--mouse-x, 50vw) - 50%),
    calc(var(--mouse-y, 50vh) - 50%)
  );

  background: radial-gradient(
    circle,
    rgba(201, 162, 39, 0.16) 0%,
    rgba(11, 37, 69, 0.09) 32%,
    transparent 70%
  );

  filter: blur(10px);
  mix-blend-mode: multiply;
  transition: transform 0.08s linear;
}

/* Aurora container */

.pf-aurora {
  position: fixed;
  z-index: 0;
  inset: -20%;
  overflow: hidden;
  pointer-events: none;
  filter: blur(95px);
  opacity: 0.28;
}

/* Aurora blobs */

.pf-aurora span {
  position: absolute;
  display: block;
  border-radius: 45% 55% 65% 35% / 45% 35% 65% 55%;
  will-change: transform, border-radius;
}

.pf-aurora-one {
  width: 650px;
  height: 650px;
  top: -10%;
  left: -5%;

  background: radial-gradient(
    circle,
    rgba(11, 37, 69, 0.4),
    rgba(11, 37, 69, 0)
  );

  animation:
    pf-aurora-one-move 17s ease-in-out infinite alternate,
    pf-blob-morph 9s ease-in-out infinite alternate;
}

.pf-aurora-two {
  width: 620px;
  height: 620px;
  top: 12%;
  right: -8%;

  background: radial-gradient(
    circle,
    rgba(201, 162, 39, 0.34),
    rgba(201, 162, 39, 0)
  );

  animation:
    pf-aurora-two-move 21s ease-in-out infinite alternate,
    pf-blob-morph 11s ease-in-out infinite alternate-reverse;
}

.pf-aurora-three {
  width: 560px;
  height: 560px;
  bottom: -15%;
  left: 30%;

  background: radial-gradient(
    circle,
    rgba(78, 120, 175, 0.3),
    rgba(78, 120, 175, 0)
  );

  animation:
    pf-aurora-three-move 19s ease-in-out infinite alternate,
    pf-blob-morph 13s ease-in-out infinite alternate;
}

/* Aurora movements */

@keyframes pf-aurora-one-move {
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg)
      scale(1);
  }

  50% {
    transform:
      translate3d(170px, 110px, 0)
      rotate(80deg)
      scale(1.12);
  }

  100% {
    transform:
      translate3d(70px, 240px, 0)
      rotate(160deg)
      scale(0.92);
  }
}

@keyframes pf-aurora-two-move {
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg)
      scale(1);
  }

  50% {
    transform:
      translate3d(-160px, 130px, 0)
      rotate(-90deg)
      scale(0.9);
  }

  100% {
    transform:
      translate3d(-80px, 280px, 0)
      rotate(-170deg)
      scale(1.15);
  }
}

@keyframes pf-aurora-three-move {
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg)
      scale(1);
  }

  50% {
    transform:
      translate3d(-150px, -160px, 0)
      rotate(100deg)
      scale(1.18);
  }

  100% {
    transform:
      translate3d(200px, -90px, 0)
      rotate(210deg)
      scale(0.9);
  }
}

@keyframes pf-blob-morph {
  0% {
    border-radius:
      45% 55% 65% 35% /
      45% 35% 65% 55%;
  }

  50% {
    border-radius:
      65% 35% 40% 60% /
      35% 60% 40% 65%;
  }

  100% {
    border-radius:
      35% 65% 55% 45% /
      60% 40% 55% 45%;
  }
}

/* Glass effect on navbar */

.pf-nav {
  background: rgba(255, 255, 255, 0.67);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
}

/* Make sections slightly transparent */

.pf-section {
  background: rgba(255, 255, 255, 0.25);
}

/* Accessibility */

@media (prefers-reduced-motion: reduce) {
  .pf-aurora span {
    animation: none;
  }

  .pf-global-spotlight {
    display: none;
  }

  .pf-scroll-progress {
    transition: none;
  }
}
  /* ================================
   PREMIUM 3D PROJECT CARDS
================================ */

.pf-tilt-card {
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --card-x: 50%;
  --card-y: 50%;

  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  transform:
    perspective(1100px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y))
    translateY(0);

  transition:
    transform 0.18s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  will-change: transform;
}

.pf-tilt-card:hover {
  transform:
    perspective(1100px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y))
    translateY(-8px);

  box-shadow:
    0 28px 60px rgba(11, 37, 69, 0.2),
    0 8px 20px rgba(201, 162, 39, 0.14);
}

/* Moving light inside the card */

.pf-card-spotlight {
  position: absolute;
  z-index: 0;
  inset: 0;
  opacity: 0;
  pointer-events: none;

  background: radial-gradient(
  circle,
  rgba(201, 162, 39, 0.08) 0%,
  rgba(11, 37, 69, 0.035) 32%,
  transparent 70%
);

  transition: opacity 0.25s ease;
}

.pf-tilt-card:hover .pf-card-spotlight {
  opacity: 1;
}

/* Keep card information above spotlight */

.pf-card-content {
  position: relative;
  z-index: 2;
  transform: translateZ(35px);
}

/* Animated reflection passing over the card */

.pf-tilt-card::after {
  content: "";
  position: absolute;
  z-index: 1;

  top: -130%;
  left: -55%;

  width: 42%;
  height: 330%;

  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );

  transform: rotate(24deg);
  transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.pf-tilt-card:hover::after {
  left: 130%;
}

/* Raise some card elements in 3D */

.pf-tilt-card h3,
.pf-tilt-card .pf-featured-badge {
  transform: translateZ(45px);
}

.pf-tilt-card .pf-stack-tag {
  transform: translateZ(24px);
}

/* Stronger featured glow */

.pf-tilt-card.featured:hover {
  box-shadow:
    0 32px 75px rgba(11, 37, 69, 0.2),
    0 0 35px rgba(201, 162, 39, 0.23);
}

/* Mobile */

@media (max-width: 768px) {
  .pf-tilt-card,
  .pf-tilt-card:hover {
    transform: none;
  }

  .pf-card-spotlight,
  .pf-tilt-card::after {
    display: none;
  }

  .pf-card-content {
    transform: none;
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .pf-tilt-card,
  .pf-tilt-card:hover {
    transform: none;
    transition: none;
  }

  .pf-card-spotlight,
  .pf-tilt-card::after {
    display: none;
  }

  .pf-card-content {
    transform: none;
  }
}
  .pf-root {
  background: #ffffff;
}

.pf-root > nav,
.pf-root > header,
.pf-root > section,
.pf-root > footer {
  position: relative;
  z-index: 3;
}

.pf-root h1,
.pf-root h2,
.pf-root h3,
.pf-root p,
.pf-root span,
.pf-root a,
.pf-root button {
  position: relative;
  z-index: 4;
}

.pf-section {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.pf-card {
  background: rgba(246, 248, 252, 0.92);
}

.pf-card:hover {
  background: rgba(238, 241, 250, 0.96);
}
      `}),p.jsxs("nav",{className:"pf-nav",children:[p.jsxs("div",{className:"max-w-5xl mx-auto px-6 flex items-center justify-between h-16",children:[p.jsx("span",{className:"pf-mono text-sm",style:{color:"var(--text)"},children:"TAR"}),p.jsx("div",{className:"hidden md:flex items-center gap-8",children:i.map(u=>p.jsx("button",{className:"pf-navlink",onClick:()=>a(u.id),children:u.label},u.id))}),p.jsx("button",{className:"md:hidden pf-link-icon",onClick:()=>t(u=>!u),children:e?p.jsx(Wd,{size:20}):p.jsx(Hd,{size:20})})]}),e&&p.jsx("div",{className:"md:hidden px-6 pb-4 flex flex-col gap-3",children:i.map(u=>p.jsx("button",{className:"pf-navlink text-left",onClick:()=>a(u.id),children:u.label},u.id))})]}),p.jsx(wn,{children:p.jsx("header",{className:"pf-hero",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-6 pf-hero-inner",children:[p.jsx("div",{className:"pf-eyebrow pf-fade-in",style:{animationDelay:"0s"},children:"Signal → Model → Insight"}),p.jsxs("h1",{className:"pf-name pf-display mt-4 pf-fade-in",style:{animationDelay:"0.1s"},children:["Toleen",p.jsx("br",{}),"Al-Ramahi"]}),p.jsx(Xd,{className:"pf-fade-in mt-6"}),p.jsx("p",{className:"pf-tagline mt-6 pf-fade-in",style:{animationDelay:"0.25s"},children:"Data Science & AI student building machine learning systems, automations, and applications — currently designing an RL-driven digital brain twin for PTSD care."}),p.jsxs("div",{className:"flex flex-wrap gap-3 mt-8 pf-fade-in",style:{animationDelay:"0.35s"},children:[p.jsxs("button",{className:"pf-btn pf-btn-primary",onClick:()=>a("projects"),children:["View Projects ",p.jsx(Id,{size:15})]}),p.jsx("button",{className:"pf-btn pf-btn-ghost",onClick:()=>a("contact"),children:"Get in Touch"})]}),p.jsxs("div",{className:"flex items-center gap-2 mt-8 pf-mono pf-fade-in",style:{color:"var(--muted)",fontSize:"0.8rem",animationDelay:"0.45s"},children:[p.jsx(Bd,{size:14})," Amman, Jordan"]})]})})}),p.jsx(wn,{delay:.1,children:p.jsxs("section",{id:"about",className:"pf-section",children:[p.jsxs("div",{className:"max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-10",children:[p.jsxs("div",{children:[p.jsx("div",{className:"pf-label",children:"About"}),p.jsx("h2",{className:"pf-h2 pf-display",children:"What I work on"})]}),p.jsxs("div",{children:[p.jsx("p",{style:{color:"var(--muted)",lineHeight:1.75},children:"I'm an Applied Science Private University student pursuing a degree in Data Science and Artificial Intelligence, expected to graduate in 2027. I care about turning messy, real data into systems that hold up — from reinforcement-learning architectures to small automations that quietly save people time. Along the way I've picked up React and Flask to make sure the models I build can actually reach a screen."}),p.jsx("div",{className:"flex flex-wrap gap-2 mt-6",children:["Critical Thinking","Fast Learning","Leadership","Teamwork"].map(u=>p.jsx("span",{className:"pf-chip",children:u},u))})]})]}),p.jsx("div",{className:"max-w-5xl mx-auto px-6 mt-14",children:p.jsx("div",{className:"grid sm:grid-cols-3 gap-8",children:Yd.map(u=>p.jsxs("div",{children:[p.jsx("div",{className:"pf-mono pf-tag-pill mb-3",children:u.label}),p.jsx("div",{className:"flex flex-wrap gap-2",children:u.items.map(c=>p.jsx("span",{className:"pf-chip",children:c},c))})]},u.label))})})]})}),p.jsx(wn,{delay:.2,children:p.jsx("section",{id:"projects",className:"pf-section",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[p.jsx("div",{className:"pf-label",children:"Projects"}),p.jsx("h2",{className:"pf-h2 pf-display",children:"Selected work"}),p.jsx("div",{className:"grid gap-5 mt-10",children:Qd.map(u=>p.jsxs(Jd,{className:`pf-card ${u.featured?"featured":""}`,children:[p.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[p.jsx("h3",{className:"pf-display",style:{fontSize:"1.3rem",fontWeight:600},children:u.title}),p.jsx("span",{className:"pf-mono pf-tag-pill",children:u.tag})]}),p.jsx("div",{className:"pf-mono mt-1",style:{color:"var(--muted)",fontSize:"0.78rem"},children:u.year}),u.detail&&p.jsx("div",{className:"mt-1",style:{color:"var(--muted)",fontSize:"0.78rem",fontStyle:"italic"},children:u.detail})]}),u.featured&&p.jsx("span",{className:"pf-featured-badge",children:"Featured"})]}),p.jsx("p",{className:"mt-4",style:{color:"var(--muted)",lineHeight:1.7},children:u.desc}),u.visual==="techniques"&&p.jsx("div",{className:"pf-technique-bars mt-5",children:[{label:"Association Rules",w:"78%"},{label:"Classification",w:"92%"},{label:"Clustering",w:"65%"}].map((c,v)=>p.jsxs("div",{className:"pf-technique-row",children:[p.jsx("span",{className:"pf-mono pf-technique-label",children:c.label}),p.jsx("div",{className:"pf-technique-track",children:p.jsx("div",{className:"pf-technique-fill",style:{"--target-w":c.w,animationDelay:`${v*.25}s`}})})]},c.label))}),u.visual==="regression"&&p.jsx("div",{className:"mt-5",children:p.jsx(Zd,{})}),p.jsx("div",{className:"flex flex-wrap gap-2 mt-5",children:u.stack.map(c=>p.jsx("span",{className:"pf-stack-tag pf-mono",children:c},c))})]},u.title))})]})})}),p.jsx(wn,{delay:.3,children:p.jsx("section",{id:"background",className:"pf-section",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12",children:[p.jsxs("div",{children:[p.jsx("div",{className:"pf-label",children:"Education"}),p.jsx("h2",{className:"pf-h2 pf-display",style:{fontSize:"1.6rem"},children:"Applied Science Private University"}),p.jsxs("div",{className:"flex items-start gap-3 mt-5",children:[p.jsx($d,{size:18,style:{color:"var(--signal)",marginTop:"2px",flexShrink:0}}),p.jsxs("div",{children:[p.jsx("div",{style:{color:"var(--text)"},children:"B.Sc. Data Science & Artificial Intelligence"}),p.jsx("div",{className:"pf-mono mt-1",style:{color:"var(--muted)",fontSize:"0.8rem"},children:"2023 — 2027 (Expected) · Amman, Jordan"}),p.jsx("div",{className:"pf-mono mt-1",style:{color:"var(--accent)",fontSize:"0.8rem"},children:"GPA: Excellent"})]})]})]}),p.jsxs("div",{children:[p.jsx("div",{className:"pf-label",children:"Certificates"}),p.jsx("h2",{className:"pf-h2 pf-display",style:{fontSize:"1.6rem"},children:"Learning, formalized"}),p.jsx("div",{className:"flex flex-col gap-4 mt-5",children:Kd.map(u=>p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx(Ad,{size:16,style:{color:"var(--accent)",marginTop:"3px",flexShrink:0}}),p.jsxs("div",{children:[p.jsx("div",{style:{color:"var(--text)",fontSize:"0.95rem"},children:u.name}),p.jsx("div",{className:"pf-mono",style:{color:"var(--muted)",fontSize:"0.78rem"},children:u.org})]})]},u.name))})]})]})})}),p.jsx(wn,{delay:.4,children:p.jsx("section",{id:"contact",className:"pf-section",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[p.jsx("div",{className:"pf-label",children:"Contact"}),p.jsx("h2",{className:"pf-h2 pf-display",children:"Let's talk"}),p.jsx("p",{className:"mt-4",style:{color:"var(--muted)",maxWidth:"42ch"},children:"Open to internships, research collaborations, and interesting problems in ML and data."}),p.jsxs("div",{className:"flex flex-wrap gap-4 mt-8",children:[p.jsxs("a",{href:"mailto:toleenalramahii04@gmail.com",className:"pf-btn pf-btn-primary",children:[p.jsx(Vd,{size:15}),"Email Me"]}),p.jsxs("a",{href:"https://github.com/toleenramahi",target:"_blank",rel:"noopener noreferrer",className:"pf-btn pf-btn-ghost",children:[p.jsx(Ud,{size:15}),"GitHub"]}),p.jsxs("a",{href:"https://www.linkedin.com/in/toleenalramahi/",target:"_blank",rel:"noopener noreferrer",className:"pf-btn pf-linkedin-btn",children:[p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.04c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.84-2.71 3.72V22H9V8z"})}),"LinkedIn"]}),p.jsxs("a",{href:"https://wa.me/962792695151",target:"_blank",rel:"noopener noreferrer",className:"pf-btn pf-whatsapp-btn",children:[p.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.93 9.93 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.18 8.18 0 1 1 12.04 20.18Zm4.49-6.12c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.16.24-.63.8-.77.96-.14.17-.28.19-.53.07-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z"})}),"WhatsApp"]})]})]})})}),p.jsx("footer",{className:"pf-footer-line",children:p.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-2 pf-mono",style:{color:"var(--muted)",fontSize:"0.78rem"},children:[p.jsx("span",{children:"© 2026 Toleen Al-Ramahi"}),p.jsx("span",{children:"Arabic (Native) · English (Proficient)"})]})})]})}Kl.createRoot(document.getElementById("root")).render(p.jsx(kc.StrictMode,{children:p.jsx(qd,{})}));
