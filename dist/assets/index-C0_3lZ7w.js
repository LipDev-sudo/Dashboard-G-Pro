(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Gh={exports:{}},ka={},Kh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function fw(){if(Fm)return xe;Fm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,J={};function K(V,W,ke){this.props=V,this.context=W,this.refs=J,this.updater=ke||M}K.prototype.isReactComponent={},K.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},K.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function pe(){}pe.prototype=K.prototype;function ae(V,W,ke){this.props=V,this.context=W,this.refs=J,this.updater=ke||M}var me=ae.prototype=new pe;me.constructor=ae,Q(me,K.prototype),me.isPureReactComponent=!0;var Se=Array.isArray,ve=Object.prototype.hasOwnProperty,ge={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function I(V,W,ke){var Ae,Re={},Pe=null,Ue=null;if(W!=null)for(Ae in W.ref!==void 0&&(Ue=W.ref),W.key!==void 0&&(Pe=""+W.key),W)ve.call(W,Ae)&&!R.hasOwnProperty(Ae)&&(Re[Ae]=W[Ae]);var Le=arguments.length-2;if(Le===1)Re.children=ke;else if(1<Le){for(var $e=Array(Le),zt=0;zt<Le;zt++)$e[zt]=arguments[zt+2];Re.children=$e}if(V&&V.defaultProps)for(Ae in Le=V.defaultProps,Le)Re[Ae]===void 0&&(Re[Ae]=Le[Ae]);return{$$typeof:i,type:V,key:Pe,ref:Ue,props:Re,_owner:ge.current}}function k(V,W){return{$$typeof:i,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function N(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ke){return W[ke]})}var O=/\/+/g;function x(V,W){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):W.toString(36)}function He(V,W,ke,Ae,Re){var Pe=typeof V;(Pe==="undefined"||Pe==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(Pe){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case i:case e:Ue=!0}}if(Ue)return Ue=V,Re=Re(Ue),V=Ae===""?"."+x(Ue,0):Ae,Se(Re)?(ke="",V!=null&&(ke=V.replace(O,"$&/")+"/"),He(Re,W,ke,"",function(zt){return zt})):Re!=null&&(D(Re)&&(Re=k(Re,ke+(!Re.key||Ue&&Ue.key===Re.key?"":(""+Re.key).replace(O,"$&/")+"/")+V)),W.push(Re)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",Se(V))for(var Le=0;Le<V.length;Le++){Pe=V[Le];var $e=Ae+x(Pe,Le);Ue+=He(Pe,W,ke,$e,Re)}else if($e=C(V),typeof $e=="function")for(V=$e.call(V),Le=0;!(Pe=V.next()).done;)Pe=Pe.value,$e=Ae+x(Pe,Le++),Ue+=He(Pe,W,ke,$e,Re);else if(Pe==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Ue}function _t(V,W,ke){if(V==null)return V;var Ae=[],Re=0;return He(V,Ae,"","",function(Pe){return W.call(ke,Pe,Re++)}),Ae}function Nt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(ke){(V._status===0||V._status===-1)&&(V._status=1,V._result=ke)},function(ke){(V._status===0||V._status===-1)&&(V._status=2,V._result=ke)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Je={current:null},ee={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ge};function re(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:_t,forEach:function(V,W,ke){_t(V,function(){W.apply(this,arguments)},ke)},count:function(V){var W=0;return _t(V,function(){W++}),W},toArray:function(V){return _t(V,function(W){return W})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xe.Component=K,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=ae,xe.StrictMode=s,xe.Suspense=g,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,xe.act=re,xe.cloneElement=function(V,W,ke){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=Q({},V.props),Re=V.key,Pe=V.ref,Ue=V._owner;if(W!=null){if(W.ref!==void 0&&(Pe=W.ref,Ue=ge.current),W.key!==void 0&&(Re=""+W.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for($e in W)ve.call(W,$e)&&!R.hasOwnProperty($e)&&(Ae[$e]=W[$e]===void 0&&Le!==void 0?Le[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Ae.children=ke;else if(1<$e){Le=Array($e);for(var zt=0;zt<$e;zt++)Le[zt]=arguments[zt+2];Ae.children=Le}return{$$typeof:i,type:V.type,key:Re,ref:Pe,props:Ae,_owner:Ue}},xe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},xe.createElement=I,xe.createFactory=function(V){var W=I.bind(null,V);return W.type=V,W},xe.createRef=function(){return{current:null}},xe.forwardRef=function(V){return{$$typeof:m,render:V}},xe.isValidElement=D,xe.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:Nt}},xe.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},xe.startTransition=function(V){var W=ee.transition;ee.transition={};try{V()}finally{ee.transition=W}},xe.unstable_act=re,xe.useCallback=function(V,W){return Je.current.useCallback(V,W)},xe.useContext=function(V){return Je.current.useContext(V)},xe.useDebugValue=function(){},xe.useDeferredValue=function(V){return Je.current.useDeferredValue(V)},xe.useEffect=function(V,W){return Je.current.useEffect(V,W)},xe.useId=function(){return Je.current.useId()},xe.useImperativeHandle=function(V,W,ke){return Je.current.useImperativeHandle(V,W,ke)},xe.useInsertionEffect=function(V,W){return Je.current.useInsertionEffect(V,W)},xe.useLayoutEffect=function(V,W){return Je.current.useLayoutEffect(V,W)},xe.useMemo=function(V,W){return Je.current.useMemo(V,W)},xe.useReducer=function(V,W,ke){return Je.current.useReducer(V,W,ke)},xe.useRef=function(V){return Je.current.useRef(V)},xe.useState=function(V){return Je.current.useState(V)},xe.useSyncExternalStore=function(V,W,ke){return Je.current.useSyncExternalStore(V,W,ke)},xe.useTransition=function(){return Je.current.useTransition()},xe.version="18.3.1",xe}var Um;function Ld(){return Um||(Um=1,Kh.exports=fw()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function pw(){if(zm)return ka;zm=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var T,A={},C=null,M=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(M=g.ref);for(T in g)s.call(g,T)&&!u.hasOwnProperty(T)&&(A[T]=g[T]);if(m&&m.defaultProps)for(T in g=m.defaultProps,g)A[T]===void 0&&(A[T]=g[T]);return{$$typeof:e,type:m,key:C,ref:M,props:A,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var Bm;function mw(){return Bm||(Bm=1,Gh.exports=pw()),Gh.exports}var w=mw(),Iu={},Qh={exports:{}},Qt={},Yh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function gw(){return $m||($m=1,(function(i){function e(ee,ce){var re=ee.length;ee.push(ce);e:for(;0<re;){var V=re-1>>>1,W=ee[V];if(0<o(W,ce))ee[V]=ce,ee[re]=W,re=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var ce=ee[0],re=ee.pop();if(re!==ce){ee[0]=re;e:for(var V=0,W=ee.length,ke=W>>>1;V<ke;){var Ae=2*(V+1)-1,Re=ee[Ae],Pe=Ae+1,Ue=ee[Pe];if(0>o(Re,re))Pe<W&&0>o(Ue,Re)?(ee[V]=Ue,ee[Pe]=re,V=Pe):(ee[V]=Re,ee[Ae]=re,V=Ae);else if(Pe<W&&0>o(Ue,re))ee[V]=Ue,ee[Pe]=re,V=Pe;else break e}}return ce}function o(ee,ce){var re=ee.sortIndex-ce.sortIndex;return re!==0?re:ee.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],T=1,A=null,C=3,M=!1,Q=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(ee){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=ee)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function Se(ee){if(J=!1,me(ee),!Q)if(t(g)!==null)Q=!0,Nt(ve);else{var ce=t(_);ce!==null&&Je(Se,ce.startTime-ee)}}function ve(ee,ce){Q=!1,J&&(J=!1,pe(I),I=-1),M=!0;var re=C;try{for(me(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||ee&&!N());){var V=A.callback;if(typeof V=="function"){A.callback=null,C=A.priorityLevel;var W=V(A.expirationTime<=ce);ce=i.unstable_now(),typeof W=="function"?A.callback=W:A===t(g)&&s(g),me(ce)}else s(g);A=t(g)}if(A!==null)var ke=!0;else{var Ae=t(_);Ae!==null&&Je(Se,Ae.startTime-ce),ke=!1}return ke}finally{A=null,C=re,M=!1}}var ge=!1,R=null,I=-1,k=5,D=-1;function N(){return!(i.unstable_now()-D<k)}function O(){if(R!==null){var ee=i.unstable_now();D=ee;var ce=!0;try{ce=R(!0,ee)}finally{ce?x():(ge=!1,R=null)}}else ge=!1}var x;if(typeof ae=="function")x=function(){ae(O)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,_t=He.port2;He.port1.onmessage=O,x=function(){_t.postMessage(null)}}else x=function(){K(O,0)};function Nt(ee){R=ee,ge||(ge=!0,x())}function Je(ee,ce){I=K(function(){ee(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){Q||M||(Q=!0,Nt(ve))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(ee){switch(C){case 1:case 2:case 3:var ce=3;break;default:ce=C}var re=C;C=ce;try{return ee()}finally{C=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,ce){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var re=C;C=ee;try{return ce()}finally{C=re}},i.unstable_scheduleCallback=function(ee,ce,re){var V=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=re+W,ee={id:T++,callback:ce,priorityLevel:ee,startTime:re,expirationTime:W,sortIndex:-1},re>V?(ee.sortIndex=re,e(_,ee),t(g)===null&&ee===t(_)&&(J?(pe(I),I=-1):J=!0,Je(Se,re-V))):(ee.sortIndex=W,e(g,ee),Q||M||(Q=!0,Nt(ve))),ee},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(ee){var ce=C;return function(){var re=C;C=ce;try{return ee.apply(this,arguments)}finally{C=re}}}})(Jh)),Jh}var Wm;function yw(){return Wm||(Wm=1,Yh.exports=gw()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function _w(){if(Hm)return Qt;Hm=1;var i=Ld(),e=yw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},A={};function C(n){return g.call(A,n)?!0:g.call(T,n)?!1:_.test(n)?A[n]=!0:(T[n]=!0,!1)}function M(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||M(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){K[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];K[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){K[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){K[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){K[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){K[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){K[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){K[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){K[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function ae(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(pe,ae);K[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(pe,ae);K[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(pe,ae);K[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,r,a,c){var d=K.hasOwnProperty(r)?K[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Se=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),ge=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ke=!1;function Ae(n,r){if(!n||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case ge:return"Portal";case k:return"Profiler";case I:return"StrictMode";case x:return"Suspense";case He:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:Pe(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Pe(n(r))}catch{}}return null}function Ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function zt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function _s(n){n._valueTracker||(n._valueTracker=zt(n))}function No(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vs(n,r){var a=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ll(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ws(n,r){r=r.checked,r!=null&&me(n,"checked",r,!1)}function Ri(n,r){ws(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&ut(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function bo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,r,a){(r!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function wn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Do(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function ul(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lr,cl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pi(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hl=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){hl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Mr[r]=Mr[n]})});function jr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+r).trim():r+"px"}function Ts(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,r){if(r){if(Lo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Is(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function Ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,rt=null;function Mo(n){if(n=ca(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=jl(r),sr(n.stateNode,n.type,r))}}function Ur(n){or?rt?rt.push(n):rt=[n]:or=n}function zr(){if(or){var n=or,r=rt;if(rt=or=null,Mo(n),r)for(n=0;n<r.length;n++)Mo(r[n])}}function dl(n,r){return n(r)}function fl(){}var Vn=!1;function pl(n,r,a){if(Vn)return n(r,a);Vn=!0;try{return dl(n,r,a)}finally{Vn=!1,(or!==null||rt!==null)&&(fl(),zr())}}function Ni(n,r){var a=n.stateNode;if(a===null)return null;var c=jl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Br=!1;if(m)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Br=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Br=!1}function ml(n,r,a,c,d,f,v,S,P){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(q){this.onError(q)}}var ar=!1,On=null,ks=!1,un=null,gl={onError:function(n){ar=!0,On=n}};function yl(n,r,a,c,d,f,v,S,P){ar=!1,On=null,ml.apply(gl,arguments)}function jo(n,r,a,c,d,f,v,S,P){if(yl.apply(this,arguments),ar){if(ar){var U=On;ar=!1,On=null}else throw Error(t(198));ks||(ks=!0,un=U)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _l(n){if(Tn(n)!==n)throw Error(t(188))}function vl(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return _l(d),n;if(f===c)return _l(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function wl(n){return n=vl(n),n!==null?bi(n):null}function bi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bi(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,As=e.unstable_cancelCallback,Di=e.unstable_shouldYield,lr=e.unstable_requestPaint,Ge=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,xs=e.unstable_ImmediatePriority,zo=e.unstable_UserBlockingPriority,Vi=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,Cs=e.unstable_IdlePriority,Oi=null,Xt=null;function El(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Li,Ln=Math.log,cn=Math.LN2;function Li(n){return n>>>=0,n===0?32:31-(Ln(n)/cn|0)|0}var Mn=64,Wr=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Fe(S):(f&=v,f!==0&&(c=Fe(f)))}else v=a&~d,v!==0?c=Fe(v):f!==0&&(c=Fe(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Zt(r),d=1<<a,c|=n[a],r&=~d;return c}function Mi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ji(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-Zt(f),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Mi(S,r)):P<=r&&(n.expiredLanes|=S),f&=~S}}function $o(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=Mn;return Mn<<=1,(Mn&4194240)===0&&(Mn=64),n}function Ho(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Fi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Zt(r),n[r]=a}function kc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Zt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function qo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Zt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ve=0;function jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Go,Rs,Ko,Qo,Yo,Fn=!1,Ps=[],Un=null,zn=null,St=null,Ui=new Map,cr=new Map,en=[],Tl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Ui.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function In(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ca(r),r!==null&&Rs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Il(n,r,a,c,d){switch(r){case"focusin":return Un=In(Un,n,r,a,c,d),!0;case"dragenter":return zn=In(zn,n,r,a,c,d),!0;case"mouseover":return St=In(St,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return Ui.set(f,In(Ui.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,In(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function Ns(n){var r=Wi(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Fo(a),r!==null){n.blockedOn=r,Yo(n.priority,function(){Ko(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=bs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fr=c,a.target.dispatchEvent(c),Fr=null}else return r=ca(a),r!==null&&Rs(r),n.blockedOn=a,!1;r.shift()}return!0}function Sl(n,r,a){We(n)&&a.delete(r)}function Ac(){Fn=!1,Un!==null&&We(Un)&&(Un=null),zn!==null&&We(zn)&&(zn=null),St!==null&&We(St)&&(St=null),Ui.forEach(Sl),cr.forEach(Sl)}function qr(n,r){n.blockedOn===r&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ac)))}function Gr(n){function r(d){return qr(d,n)}if(0<Ps.length){qr(Ps[0],n);for(var a=1;a<Ps.length;a++){var c=Ps[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Un!==null&&qr(Un,n),zn!==null&&qr(zn,n),St!==null&&qr(St,n),Ui.forEach(r),cr.forEach(r),a=0;a<en.length;a++)c=en[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<en.length&&(a=en[0],a.blockedOn===null);)Ns(a),a.blockedOn===null&&en.shift()}var hr=Se.ReactCurrentBatchConfig,dr=!0;function Bn(n,r,a,c){var d=Ve,f=hr.transition;hr.transition=null;try{Ve=1,Jo(n,r,a,c)}finally{Ve=d,hr.transition=f}}function kl(n,r,a,c){var d=Ve,f=hr.transition;hr.transition=null;try{Ve=4,Jo(n,r,a,c)}finally{Ve=d,hr.transition=f}}function Jo(n,r,a,c){if(dr){var d=bs(n,r,a,c);if(d===null)Mc(n,r,c,$n,a),Hr(n,c);else if(Il(d,n,r,a,c))c.stopPropagation();else if(Hr(n,c),r&4&&-1<Tl.indexOf(n)){for(;d!==null;){var f=ca(d);if(f!==null&&Go(f),f=bs(n,r,a,c),f===null&&Mc(n,r,c,$n,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Mc(n,r,c,null,a)}}var $n=null;function bs(n,r,a,c){if($n=null,n=Ss(c),n=Wi(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return $n=n,null}function Ds(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case xs:return 1;case zo:return 4;case Vi:case Bo:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var tn=null,Vs=null,fr=null;function Al(){if(fr)return fr;var n,r=Vs,a=r.length,c,d="value"in tn?tn.value:tn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function zi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function Xo(){return!1}function bt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:Xo,this.isPropagationStopped=Xo,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),r}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=bt(Hn),Kr=re({},Hn,{view:0,detail:0}),Os=bt(Kr),Ls,Ms,nn,$i=re({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nn&&(nn&&n.type==="mousemove"?(Ls=n.screenX-nn.screenX,Ms=n.screenY-nn.screenY):Ms=Ls=0,nn=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:Ms}}),Zo=bt($i),xl=re({},$i,{dataTransfer:0}),Cl=bt(xl),js=re({},Kr,{relatedTarget:0}),kt=bt(js),Rl=re({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pl=bt(Rl),Qr=re({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=bt(Qr),p=re({},Hn,{data:0}),y=bt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=z[n])?!!r[n]:!1}function Te(){return Z}var ot=re({},Kr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=zi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(n){return n.type==="keypress"?zi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=bt(ot),ct=re({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rn=bt(ct),pr=re({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),qn=bt(pr),Gn=re({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fs=bt(Gn),ea=re({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=bt(ea),l0=[9,13,27,32],xc=m&&"CompositionEvent"in window,ta=null;m&&"documentMode"in document&&(ta=document.documentMode);var u0=m&&"TextEvent"in window&&!ta,Nf=m&&(!xc||ta&&8<ta&&11>=ta),bf=" ",Df=!1;function Vf(n,r){switch(n){case"keyup":return l0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function c0(n,r){switch(n){case"compositionend":return Of(r);case"keypress":return r.which!==32?null:(Df=!0,bf);case"textInput":return n=r.data,n===bf&&Df?null:n;default:return null}}function h0(n,r){if(Us)return n==="compositionend"||!xc&&Vf(n,r)?(n=Al(),fr=Vs=tn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nf&&r.locale!=="ko"?null:r.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!d0[n.type]:r==="textarea"}function Mf(n,r,a,c){Ur(c),r=Ol(r,"onChange"),0<r.length&&(a=new Bi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var na=null,ra=null;function f0(n){tp(n,0)}function Nl(n){var r=Hs(n);if(No(r))return n}function p0(n,r){if(n==="change")return r}var jf=!1;if(m){var Cc;if(m){var Rc="oninput"in document;if(!Rc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),Rc=typeof Ff.oninput=="function"}Cc=Rc}else Cc=!1;jf=Cc&&(!document.documentMode||9<document.documentMode)}function Uf(){na&&(na.detachEvent("onpropertychange",zf),ra=na=null)}function zf(n){if(n.propertyName==="value"&&Nl(ra)){var r=[];Mf(r,ra,n,Ss(n)),pl(f0,r)}}function m0(n,r,a){n==="focusin"?(Uf(),na=r,ra=a,na.attachEvent("onpropertychange",zf)):n==="focusout"&&Uf()}function g0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Nl(ra)}function y0(n,r){if(n==="click")return Nl(r)}function _0(n,r){if(n==="input"||n==="change")return Nl(r)}function v0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Sn=typeof Object.is=="function"?Object.is:v0;function ia(n,r){if(Sn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Sn(n[d],r[d]))return!1}return!0}function Bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $f(n,r){var a=Bf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bf(a)}}function Wf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Wf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Hf(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Vr(n.document)}return r}function Pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function w0(n){var r=Hf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=$f(a,f);var v=$f(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E0=m&&"documentMode"in document&&11>=document.documentMode,zs=null,Nc=null,sa=null,bc=!1;function qf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||zs==null||zs!==Vr(c)||(c=zs,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Ol(Nc,"onSelect"),0<c.length&&(r=new Bi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=zs)))}function bl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Bs={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Dc={},Gf={};m&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function Dl(n){if(Dc[n])return Dc[n];if(!Bs[n])return n;var r=Bs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Gf)return Dc[n]=r[a];return n}var Kf=Dl("animationend"),Qf=Dl("animationiteration"),Yf=Dl("animationstart"),Jf=Dl("transitionend"),Xf=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,r){Xf.set(n,r),u(r,[n])}for(var Vc=0;Vc<Zf.length;Vc++){var Oc=Zf[Vc],T0=Oc.toLowerCase(),I0=Oc[0].toUpperCase()+Oc.slice(1);Yr(T0,"on"+I0)}Yr(Kf,"onAnimationEnd"),Yr(Qf,"onAnimationIteration"),Yr(Yf,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Jf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function ep(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,jo(c,r,void 0,n),n.currentTarget=null}function tp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,U=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;ep(d,S,U),f=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,U=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;ep(d,S,U),f=P}}}if(ks)throw n=un,ks=!1,un=null,n}function Ke(n,r){var a=r[$c];a===void 0&&(a=r[$c]=new Set);var c=n+"__bubble";a.has(c)||(np(r,n,2,!1),a.add(c))}function Lc(n,r,a){var c=0;r&&(c|=4),np(a,n,c,r)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[Vl]){n[Vl]=!0,s.forEach(function(a){a!=="selectionchange"&&(S0.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vl]||(r[Vl]=!0,Lc("selectionchange",!1,r))}}function np(n,r,a,c){switch(Ds(r)){case 1:var d=Bn;break;case 4:d=kl;break;default:d=Jo}a=d.bind(null,r,a,n),d=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Mc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Wi(S),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}S=S.parentNode}}c=c.return}pl(function(){var U=f,q=Ss(a),Y=[];e:{var H=Xf.get(n);if(H!==void 0){var te=Bi,se=n;switch(n){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":te=Be;break;case"focusin":se="focus",te=kt;break;case"focusout":se="blur",te=kt;break;case"beforeblur":case"afterblur":te=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=qn;break;case Kf:case Qf:case Yf:te=Pl;break;case Jf:te=Fs;break;case"scroll":te=Os;break;case"wheel":te=a0;break;case"copy":case"cut":case"paste":te=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=rn}var oe=(r&4)!==0,at=!oe&&n==="scroll",L=oe?H!==null?H+"Capture":null:H;oe=[];for(var b=U,F;b!==null;){F=b;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=Ni(b,L),X!=null&&oe.push(la(b,X,F)))),at)break;b=b.return}0<oe.length&&(H=new te(H,se,null,a,q),Y.push({event:H,listeners:oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",H&&a!==Fr&&(se=a.relatedTarget||a.fromElement)&&(Wi(se)||se[mr]))break e;if((te||H)&&(H=q.window===q?q:(H=q.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=U,se=se?Wi(se):null,se!==null&&(at=Tn(se),se!==at||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=U),te!==se)){if(oe=Zo,X="onMouseLeave",L="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(oe=rn,X="onPointerLeave",L="onPointerEnter",b="pointer"),at=te==null?H:Hs(te),F=se==null?H:Hs(se),H=new oe(X,b+"leave",te,a,q),H.target=at,H.relatedTarget=F,X=null,Wi(q)===U&&(oe=new oe(L,b+"enter",se,a,q),oe.target=F,oe.relatedTarget=at,X=oe),at=X,te&&se)t:{for(oe=te,L=se,b=0,F=oe;F;F=$s(F))b++;for(F=0,X=L;X;X=$s(X))F++;for(;0<b-F;)oe=$s(oe),b--;for(;0<F-b;)L=$s(L),F--;for(;b--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=$s(oe),L=$s(L)}oe=null}else oe=null;te!==null&&rp(Y,H,te,oe,!1),se!==null&&at!==null&&rp(Y,at,se,oe,!0)}}e:{if(H=U?Hs(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var le=p0;else if(Lf(H))if(jf)le=_0;else{le=g0;var he=m0}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(le=y0);if(le&&(le=le(n,U))){Mf(Y,le,a,q);break e}he&&he(n,H,U),n==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&ut(H,"number",H.value)}switch(he=U?Hs(U):window,n){case"focusin":(Lf(he)||he.contentEditable==="true")&&(zs=he,Nc=U,sa=null);break;case"focusout":sa=Nc=zs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,qf(Y,a,q);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":qf(Y,a,q)}var de;if(xc)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Us?Vf(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Nf&&a.locale!=="ko"&&(Us||we!=="onCompositionStart"?we==="onCompositionEnd"&&Us&&(de=Al()):(tn=q,Vs="value"in tn?tn.value:tn.textContent,Us=!0)),he=Ol(U,we),0<he.length&&(we=new y(we,n,null,a,q),Y.push({event:we,listeners:he}),de?we.data=de:(de=Of(a),de!==null&&(we.data=de)))),(de=u0?c0(n,a):h0(n,a))&&(U=Ol(U,"onBeforeInput"),0<U.length&&(q=new y("onBeforeInput","beforeinput",null,a,q),Y.push({event:q,listeners:U}),q.data=de))}tp(Y,r)})}function la(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ol(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ni(n,a),f!=null&&c.unshift(la(n,f,d)),f=Ni(n,r),f!=null&&c.push(la(n,f,d))),n=n.return}return c}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,U=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&U!==null&&(S=U,d?(P=Ni(a,f),P!=null&&v.unshift(la(a,P,S))):d||(P=Ni(a,f),P!=null&&v.push(la(a,P,S)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var k0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace(k0,`
`).replace(A0,"")}function Ll(n,r,a){if(r=ip(r),ip(n)!==r&&a)throw Error(t(425))}function Ml(){}var jc=null,Fc=null;function Uc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(R0)}:zc;function R0(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gr(r)}function Jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Ws,ua="__reactProps$"+Ws,mr="__reactContainer$"+Ws,$c="__reactEvents$"+Ws,P0="__reactListeners$"+Ws,N0="__reactHandles$"+Ws;function Wi(n){var r=n[Kn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Kn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=op(n);n!==null;){if(a=n[Kn])return a;n=op(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[Kn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jl(n){return n[ua]||null}var Wc=[],qs=-1;function Xr(n){return{current:n}}function Qe(n){0>qs||(n.current=Wc[qs],Wc[qs]=null,qs--)}function qe(n,r){qs++,Wc[qs]=n.current,n.current=r}var Zr={},Dt=Xr(Zr),Wt=Xr(!1),Hi=Zr;function Gs(n,r){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function Fl(){Qe(Wt),Qe(Dt)}function ap(n,r,a){if(Dt.current!==Zr)throw Error(t(168));qe(Dt,r),qe(Wt,a)}function lp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Ue(n)||"Unknown",d));return re({},a,c)}function Ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Hi=Dt.current,qe(Dt,n),qe(Wt,Wt.current),!0}function up(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=lp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(Dt),qe(Dt,n)):Qe(Wt),qe(Wt,a)}var gr=null,zl=!1,Hc=!1;function cp(n){gr===null?gr=[n]:gr.push(n)}function b0(n){zl=!0,cp(n)}function ei(){if(!Hc&&gr!==null){Hc=!0;var n=0,r=Ve;try{var a=gr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,zl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Uo(xs,ei),d}finally{Ve=r,Hc=!1}}return null}var Ks=[],Qs=0,Bl=null,$l=0,hn=[],dn=0,qi=null,yr=1,_r="";function Gi(n,r){Ks[Qs++]=$l,Ks[Qs++]=Bl,Bl=n,$l=r}function hp(n,r,a){hn[dn++]=yr,hn[dn++]=_r,hn[dn++]=qi,qi=n;var c=yr;n=_r;var d=32-Zt(c)-1;c&=~(1<<d),a+=1;var f=32-Zt(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-Zt(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function qc(n){n.return!==null&&(Gi(n,1),hp(n,1,0))}function Gc(n){for(;n===Bl;)Bl=Ks[--Qs],Ks[Qs]=null,$l=Ks[--Qs],Ks[Qs]=null;for(;n===qi;)qi=hn[--dn],hn[dn]=null,_r=hn[--dn],hn[dn]=null,yr=hn[--dn],hn[dn]=null}var sn=null,on=null,Xe=!1,kn=null;function dp(n,r){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function fp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=qi!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Xe){var r=on;if(r){var a=r;if(!fp(n,r)){if(Kc(n))throw Error(t(418));r=Jr(a.nextSibling);var c=sn;r&&fp(n,r)?dp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,sn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,sn=n}}}function pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Wl(n){if(n!==sn)return!1;if(!Xe)return pp(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Uc(n.type,n.memoizedProps)),r&&(r=on)){if(Kc(n))throw mp(),Error(t(418));for(;r;)dp(n,r),r=Jr(r.nextSibling)}if(pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Jr(n.stateNode.nextSibling):null;return!0}function mp(){for(var n=on;n;)n=Jr(n.nextSibling)}function Ys(){on=sn=null,Xe=!1}function Yc(n){kn===null?kn=[n]:kn.push(n)}var D0=Se.ReactCurrentBatchConfig;function ha(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Hl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function gp(n){var r=n._init;return r(n._payload)}function yp(n){function r(L,b){if(n){var F=L.deletions;F===null?(L.deletions=[b],L.flags|=16):F.push(b)}}function a(L,b){if(!n)return null;for(;b!==null;)r(L,b),b=b.sibling;return null}function c(L,b){for(L=new Map;b!==null;)b.key!==null?L.set(b.key,b):L.set(b.index,b),b=b.sibling;return L}function d(L,b){return L=li(L,b),L.index=0,L.sibling=null,L}function f(L,b,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<b?(L.flags|=2,b):F):(L.flags|=2,b)):(L.flags|=1048576,b)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,b,F,X){return b===null||b.tag!==6?(b=zh(F,L.mode,X),b.return=L,b):(b=d(b,F),b.return=L,b)}function P(L,b,F,X){var le=F.type;return le===R?q(L,b,F.props.children,X,F.key):b!==null&&(b.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&gp(le)===b.type)?(X=d(b,F.props),X.ref=ha(L,b,F),X.return=L,X):(X=mu(F.type,F.key,F.props,null,L.mode,X),X.ref=ha(L,b,F),X.return=L,X)}function U(L,b,F,X){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=Bh(F,L.mode,X),b.return=L,b):(b=d(b,F.children||[]),b.return=L,b)}function q(L,b,F,X,le){return b===null||b.tag!==7?(b=ts(F,L.mode,X,le),b.return=L,b):(b=d(b,F),b.return=L,b)}function Y(L,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=zh(""+b,L.mode,F),b.return=L,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ve:return F=mu(b.type,b.key,b.props,null,L.mode,F),F.ref=ha(L,null,b),F.return=L,F;case ge:return b=Bh(b,L.mode,F),b.return=L,b;case Nt:var X=b._init;return Y(L,X(b._payload),F)}if(st(b)||ce(b))return b=ts(b,L.mode,F,null),b.return=L,b;Hl(L,b)}return null}function H(L,b,F,X){var le=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:S(L,b,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ve:return F.key===le?P(L,b,F,X):null;case ge:return F.key===le?U(L,b,F,X):null;case Nt:return le=F._init,H(L,b,le(F._payload),X)}if(st(F)||ce(F))return le!==null?null:q(L,b,F,X,null);Hl(L,F)}return null}function te(L,b,F,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(b,L,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ve:return L=L.get(X.key===null?F:X.key)||null,P(b,L,X,le);case ge:return L=L.get(X.key===null?F:X.key)||null,U(b,L,X,le);case Nt:var he=X._init;return te(L,b,F,he(X._payload),le)}if(st(X)||ce(X))return L=L.get(F)||null,q(b,L,X,le,null);Hl(b,X)}return null}function se(L,b,F,X){for(var le=null,he=null,de=b,we=b=0,Et=null;de!==null&&we<F.length;we++){de.index>we?(Et=de,de=null):Et=de.sibling;var je=H(L,de,F[we],X);if(je===null){de===null&&(de=Et);break}n&&de&&je.alternate===null&&r(L,de),b=f(je,b,we),he===null?le=je:he.sibling=je,he=je,de=Et}if(we===F.length)return a(L,de),Xe&&Gi(L,we),le;if(de===null){for(;we<F.length;we++)de=Y(L,F[we],X),de!==null&&(b=f(de,b,we),he===null?le=de:he.sibling=de,he=de);return Xe&&Gi(L,we),le}for(de=c(L,de);we<F.length;we++)Et=te(de,L,we,F[we],X),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?we:Et.key),b=f(Et,b,we),he===null?le=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(ui){return r(L,ui)}),Xe&&Gi(L,we),le}function oe(L,b,F,X){var le=ce(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var he=le=null,de=b,we=b=0,Et=null,je=F.next();de!==null&&!je.done;we++,je=F.next()){de.index>we?(Et=de,de=null):Et=de.sibling;var ui=H(L,de,je.value,X);if(ui===null){de===null&&(de=Et);break}n&&de&&ui.alternate===null&&r(L,de),b=f(ui,b,we),he===null?le=ui:he.sibling=ui,he=ui,de=Et}if(je.done)return a(L,de),Xe&&Gi(L,we),le;if(de===null){for(;!je.done;we++,je=F.next())je=Y(L,je.value,X),je!==null&&(b=f(je,b,we),he===null?le=je:he.sibling=je,he=je);return Xe&&Gi(L,we),le}for(de=c(L,de);!je.done;we++,je=F.next())je=te(de,L,we,je.value,X),je!==null&&(n&&je.alternate!==null&&de.delete(je.key===null?we:je.key),b=f(je,b,we),he===null?le=je:he.sibling=je,he=je);return n&&de.forEach(function(dw){return r(L,dw)}),Xe&&Gi(L,we),le}function at(L,b,F,X){if(typeof F=="object"&&F!==null&&F.type===R&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ve:e:{for(var le=F.key,he=b;he!==null;){if(he.key===le){if(le=F.type,le===R){if(he.tag===7){a(L,he.sibling),b=d(he,F.props.children),b.return=L,L=b;break e}}else if(he.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&gp(le)===he.type){a(L,he.sibling),b=d(he,F.props),b.ref=ha(L,he,F),b.return=L,L=b;break e}a(L,he);break}else r(L,he);he=he.sibling}F.type===R?(b=ts(F.props.children,L.mode,X,F.key),b.return=L,L=b):(X=mu(F.type,F.key,F.props,null,L.mode,X),X.ref=ha(L,b,F),X.return=L,L=X)}return v(L);case ge:e:{for(he=F.key;b!==null;){if(b.key===he)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(L,b.sibling),b=d(b,F.children||[]),b.return=L,L=b;break e}else{a(L,b);break}else r(L,b);b=b.sibling}b=Bh(F,L.mode,X),b.return=L,L=b}return v(L);case Nt:return he=F._init,at(L,b,he(F._payload),X)}if(st(F))return se(L,b,F,X);if(ce(F))return oe(L,b,F,X);Hl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(L,b.sibling),b=d(b,F),b.return=L,L=b):(a(L,b),b=zh(F,L.mode,X),b.return=L,L=b),v(L)):a(L,b)}return at}var Js=yp(!0),_p=yp(!1),ql=Xr(null),Gl=null,Xs=null,Jc=null;function Xc(){Jc=Xs=Gl=null}function Zc(n){var r=ql.current;Qe(ql),n._currentValue=r}function eh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Zs(n,r){Gl=n,Jc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qt=!0),n.firstContext=null)}function fn(n){var r=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if(Gl===null)throw Error(t(308));Xs=n,Gl.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Ki=null;function th(n){Ki===null?Ki=[n]:Ki.push(n)}function vp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,th(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ni(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,th(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function Kl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,qo(n,a)}}function Ep(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Ql(n,r,a,c){var d=n.updateQueue;ti=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,U=P.next;P.next=null,v===null?f=U:v.next=U,v=P;var q=n.alternate;q!==null&&(q=q.updateQueue,S=q.lastBaseUpdate,S!==v&&(S===null?q.firstBaseUpdate=U:S.next=U,q.lastBaseUpdate=P))}if(f!==null){var Y=d.baseState;v=0,q=U=P=null,S=f;do{var H=S.lane,te=S.eventTime;if((c&H)===H){q!==null&&(q=q.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var se=n,oe=S;switch(H=r,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Y=se.call(te,Y,H);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,Y,H):se,H==null)break e;Y=re({},Y,H);break e;case 2:ti=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[S]:H.push(S))}else te={eventTime:te,lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},q===null?(U=q=te,P=Y):q=q.next=te,v|=H;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;H=S,S=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Ji|=v,n.lanes=v,n.memoizedState=Y}}function Tp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},Qn=Xr(da),fa=Xr(da),pa=Xr(da);function Qi(n){if(n===da)throw Error(t(174));return n}function rh(n,r){switch(qe(pa,r),qe(fa,n),qe(Qn,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Es(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Es(r,n)}Qe(Qn),qe(Qn,r)}function eo(){Qe(Qn),Qe(fa),Qe(pa)}function Ip(n){Qi(pa.current);var r=Qi(Qn.current),a=Es(r,n.type);r!==a&&(qe(fa,n),qe(Qn,a))}function ih(n){fa.current===n&&(Qe(Qn),Qe(fa))}var Ze=Xr(0);function Yl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Jl=Se.ReactCurrentDispatcher,ah=Se.ReactCurrentBatchConfig,Yi=0,et=null,pt=null,vt=null,Xl=!1,ma=!1,ga=0,V0=0;function Vt(){throw Error(t(321))}function lh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Sn(n[a],r[a]))return!1;return!0}function uh(n,r,a,c,d,f){if(Yi=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Jl.current=n===null||n.memoizedState===null?j0:F0,n=a(c,d),ma){f=0;do{if(ma=!1,ga=0,25<=f)throw Error(t(301));f+=1,vt=pt=null,r.updateQueue=null,Jl.current=U0,n=a(c,d)}while(ma)}if(Jl.current=tu,r=pt!==null&&pt.next!==null,Yi=0,vt=pt=et=null,Xl=!1,r)throw Error(t(300));return n}function ch(){var n=ga!==0;return ga=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=n:vt=vt.next=n,vt}function pn(){if(pt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=vt===null?et.memoizedState:vt.next;if(r!==null)vt=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?et.memoizedState=vt=n:vt=vt.next=n}return vt}function ya(n,r){return typeof r=="function"?r(n):r}function hh(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,P=null,U=f;do{var q=U.lane;if((Yi&q)===q)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,et.lanes|=q,Ji|=q}U=U.next}while(U!==null&&U!==f);P===null?v=c:P.next=S,Sn(c,r.memoizedState)||(qt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Ji|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dh(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Sn(f,r.memoizedState)||(qt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Sp(){}function kp(n,r){var a=et,c=pn(),d=r(),f=!Sn(c.memoizedState,d);if(f&&(c.memoizedState=d,qt=!0),c=c.queue,fh(Cp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,_a(9,xp.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(Yi&30)!==0||Ap(a,r,d)}return d}function Ap(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function xp(n,r,a,c){r.value=a,r.getSnapshot=c,Rp(r)&&Pp(n)}function Cp(n,r,a){return a(function(){Rp(r)&&Pp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Sn(n,a)}catch{return!0}}function Pp(n){var r=vr(n,1);r!==null&&Rn(r,n,1,-1)}function Np(n){var r=Yn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r.queue=n,n=n.dispatch=M0.bind(null,et,n),[r.memoizedState,n]}function _a(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function bp(){return pn().memoizedState}function Zl(n,r,a,c){var d=Yn();et.flags|=n,d.memoizedState=_a(1|r,a,void 0,c===void 0?null:c)}function eu(n,r,a,c){var d=pn();c=c===void 0?null:c;var f=void 0;if(pt!==null){var v=pt.memoizedState;if(f=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=_a(r,a,f,c);return}}et.flags|=n,d.memoizedState=_a(1|r,a,f,c)}function Dp(n,r){return Zl(8390656,8,n,r)}function fh(n,r){return eu(2048,8,n,r)}function Vp(n,r){return eu(4,2,n,r)}function Op(n,r){return eu(4,4,n,r)}function Lp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Mp(n,r,a){return a=a!=null?a.concat([n]):null,eu(4,4,Lp.bind(null,r,n),a)}function ph(){}function jp(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Fp(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Up(n,r,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a):(Sn(a,r)||(a=Wo(),et.lanes|=a,Ji|=a,n.baseState=!0),r)}function O0(n,r){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),r()}finally{Ve=a,ah.transition=c}}function zp(){return pn().memoizedState}function L0(n,r,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Bp(n))$p(r,a);else if(a=vp(n,r,a,c),a!==null){var d=$t();Rn(a,n,c,d),Wp(a,r,c)}}function M0(n,r,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))$p(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,Sn(S,v)){var P=r.interleaved;P===null?(d.next=d,th(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=vp(n,r,d,c),a!==null&&(d=$t(),Rn(a,n,c,d),Wp(a,r,c))}}function Bp(n){var r=n.alternate;return n===et||r!==null&&r===et}function $p(n,r){ma=Xl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Wp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,qo(n,a)}}var tu={readContext:fn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},j0={readContext:fn,useCallback:function(n,r){return Yn().memoizedState=[n,r===void 0?null:r],n},useContext:fn,useEffect:Dp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Zl(4194308,4,Lp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Zl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Zl(4,2,n,r)},useMemo:function(n,r){var a=Yn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Yn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=L0.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Yn();return n={current:n},r.memoizedState=n},useState:Np,useDebugValue:ph,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Np(!1),r=n[0];return n=O0.bind(null,n[1]),Yn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Yn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(Yi&30)!==0||Ap(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Dp(Cp.bind(null,c,f,n),[n]),c.flags|=2048,_a(9,xp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Yn(),r=wt.identifierPrefix;if(Xe){var a=_r,c=yr;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ga++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=V0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},F0={readContext:fn,useCallback:jp,useContext:fn,useEffect:fh,useImperativeHandle:Mp,useInsertionEffect:Vp,useLayoutEffect:Op,useMemo:Fp,useReducer:hh,useRef:bp,useState:function(){return hh(ya)},useDebugValue:ph,useDeferredValue:function(n){var r=pn();return Up(r,pt.memoizedState,n)},useTransition:function(){var n=hh(ya)[0],r=pn().memoizedState;return[n,r]},useMutableSource:Sp,useSyncExternalStore:kp,useId:zp,unstable_isNewReconciler:!1},U0={readContext:fn,useCallback:jp,useContext:fn,useEffect:fh,useImperativeHandle:Mp,useInsertionEffect:Vp,useLayoutEffect:Op,useMemo:Fp,useReducer:dh,useRef:bp,useState:function(){return dh(ya)},useDebugValue:ph,useDeferredValue:function(n){var r=pn();return pt===null?r.memoizedState=n:Up(r,pt.memoizedState,n)},useTransition:function(){var n=dh(ya)[0],r=pn().memoizedState;return[n,r]},useMutableSource:Sp,useSyncExternalStore:kp,useId:zp,unstable_isNewReconciler:!1};function An(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function mh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:re({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nu={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=oi(n),f=wr(c,d);f.payload=r,a!=null&&(f.callback=a),r=ni(n,f,d),r!==null&&(Rn(r,n,d,c),Kl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=oi(n),f=wr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ni(n,f,d),r!==null&&(Rn(r,n,d,c),Kl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=oi(n),d=wr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ni(n,d,c),r!==null&&(Rn(r,n,c,a),Kl(r,n,c))}};function Hp(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!ia(a,c)||!ia(d,f):!0}function qp(n,r,a){var c=!1,d=Zr,f=r.contextType;return typeof f=="object"&&f!==null?f=fn(f):(d=Ht(r)?Hi:Dt.current,c=r.contextTypes,f=(c=c!=null)?Gs(n,d):Zr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=nu,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Gp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&nu.enqueueReplaceState(r,r.state,null)}function gh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=fn(f):(f=Ht(r)?Hi:Dt.current,d.context=Gs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(mh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&nu.enqueueReplaceState(d,d.state,null),Ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function to(n,r){try{var a="",c=r;do a+=Re(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function yh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function _h(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,r,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){uu||(uu=!0,Dh=c),_h(n,r)},a}function Qp(n,r,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){_h(n,r),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Yp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new z0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=tw.bind(null,n,r,a),r.then(n,n))}function Jp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Xp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=wr(-1,1),r.tag=2,ni(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var B0=Se.ReactCurrentOwner,qt=!1;function Bt(n,r,a,c){r.child=n===null?_p(r,null,a,c):Js(r,n.child,a,c)}function Zp(n,r,a,c,d){a=a.render;var f=r.ref;return Zs(r,d),c=uh(n,r,a,c,f,d),a=ch(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Er(n,r,d)):(Xe&&a&&qc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function em(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Uh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,tm(n,r,f,c,d)):(n=mu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(v,c)&&n.ref===r.ref)return Er(n,r,d)}return r.flags|=1,n=li(f,c),n.ref=r.ref,n.return=r,r.child=n}function tm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ia(f,c)&&n.ref===r.ref)if(qt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return r.lanes=n.lanes,Er(n,r,d)}return vh(n,r,a,c,d)}function nm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ro,an),an|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(ro,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,qe(ro,an),an|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,qe(ro,an),an|=c;return Bt(n,r,d,a),r.child}function rm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vh(n,r,a,c,d){var f=Ht(a)?Hi:Dt.current;return f=Gs(r,f),Zs(r,d),a=uh(n,r,a,c,f,d),c=ch(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Er(n,r,d)):(Xe&&c&&qc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function im(n,r,a,c,d){if(Ht(a)){var f=!0;Ul(r)}else f=!1;if(Zs(r,d),r.stateNode===null)iu(n,r),qp(r,a,c),gh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,S=r.memoizedProps;v.props=S;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Ht(a)?Hi:Dt.current,U=Gs(r,U));var q=a.getDerivedStateFromProps,Y=typeof q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==U)&&Gp(r,v,c,U),ti=!1;var H=r.memoizedState;v.state=H,Ql(r,c,v,d),P=r.memoizedState,S!==c||H!==P||Wt.current||ti?(typeof q=="function"&&(mh(r,a,q,c),P=r.memoizedState),(S=ti||Hp(r,a,S,c,H,P,U))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,wp(n,r),S=r.memoizedProps,U=r.type===r.elementType?S:An(r.type,S),v.props=U,Y=r.pendingProps,H=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=fn(P):(P=Ht(a)?Hi:Dt.current,P=Gs(r,P));var te=a.getDerivedStateFromProps;(q=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||H!==P)&&Gp(r,v,c,P),ti=!1,H=r.memoizedState,v.state=H,Ql(r,c,v,d);var se=r.memoizedState;S!==Y||H!==se||Wt.current||ti?(typeof te=="function"&&(mh(r,a,te,c),se=r.memoizedState),(U=ti||Hp(r,a,U,c,H,se,P)||!1)?(q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),v.props=c,v.state=se,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return wh(n,r,a,c,f,d)}function wh(n,r,a,c,d,f){rm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&up(r,a,!1),Er(n,r,f);c=r.stateNode,B0.current=r;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Js(r,n.child,null,f),r.child=Js(r,null,S,f)):Bt(n,r,S,f),r.memoizedState=c.state,d&&up(r,a,!0),r.child}function sm(n){var r=n.stateNode;r.pendingContext?ap(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ap(n,r.context,!1),rh(n,r.containerInfo)}function om(n,r,a,c,d){return Ys(),Yc(d),r.flags|=256,Bt(n,r,a,c),r.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,v=(r.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ze,d&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=gu(v,c,0,null),n=ts(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Th(a),r.memoizedState=Eh,n):Ih(r,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return $0(n,r,v,c,S,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=li(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=li(S,f):(f=ts(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=Eh,c}return f=n.child,n=f.sibling,c=li(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ih(n,r){return r=gu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ru(n,r,a,c){return c!==null&&Yc(c),Js(r,n.child,null,a),n=Ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function $0(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=yh(Error(t(422))),ru(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=gu({mode:"visible",children:c.children},d,0,null),f=ts(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Js(r,n.child,null,v),r.child.memoizedState=Th(v),r.memoizedState=Eh,f);if((r.mode&1)===0)return ru(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=yh(f,c,void 0),ru(n,r,v,c)}if(S=(v&n.childLanes)!==0,qt||S){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Rn(c,n,d,-1))}return Fh(),c=yh(Error(t(421))),ru(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=nw.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,on=Jr(d.nextSibling),sn=r,Xe=!0,kn=null,n!==null&&(hn[dn++]=yr,hn[dn++]=_r,hn[dn++]=qi,yr=n.id,_r=n.overflow,qi=r),r=Ih(r,c.children),r.flags|=4096,r)}function lm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),eh(n.return,r,a)}function Sh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function um(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(Bt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lm(n,a,r);else if(n.tag===19)lm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Yl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Sh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Yl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(r,!0,a,null,f);break;case"together":Sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function iu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Er(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ji|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=li(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function W0(n,r,a){switch(r.tag){case 3:sm(r),Ys();break;case 5:Ip(r);break;case 1:Ht(r.type)&&Ul(r);break;case 4:rh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(ql,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?am(n,r,a):(qe(Ze,Ze.current&1),n=Er(n,r,a),n!==null?n.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return um(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,nm(n,r,a)}return Er(n,r,a)}var cm,kh,hm,dm;cm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},kh=function(){},hm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(Qn.current);var f=null;switch(a){case"input":d=vs(n,d),c=vs(n,c),f=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),f=[];break;case"textarea":d=Do(n,d),c=Do(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ml)}En(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==S&&(P!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ke("scroll",n),f||S===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},dm=function(n,r,a,c){a!==c&&(r.flags|=4)};function va(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function H0(n,r,a){var c=r.pendingProps;switch(Gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ht(r.type)&&Fl(),Ot(r),null;case 3:return c=r.stateNode,eo(),Qe(Wt),Qe(Dt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,kn!==null&&(Lh(kn),kn=null))),kh(n,r),Ot(r),null;case 5:ih(r);var d=Qi(pa.current);if(a=r.type,n!==null&&r.stateNode!=null)hm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Qi(Qn.current),Wl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Kn]=r,c[ua]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)Ke(oa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":ll(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Vo(c,f),Ke("invalid",c)}En(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Ll(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Ll(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":_s(c),bo(c,f,!0);break;case"textarea":_s(c),Or(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ml)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=r,n[ua]=c,cm(n,r,!1,!1),r.stateNode=n;e:{switch(v=Is(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)Ke(oa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":ll(n,c),d=vs(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Vo(n,c),d=Do(n,c),Ke("invalid",n);break;default:d=c}En(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?Ts(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&cl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Pi(n,P):typeof P=="number"&&Pi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ke("scroll",n):P!=null&&me(n,f,P,v))}switch(a){case"input":_s(n),bo(n,c,!1);break;case"textarea":_s(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?wn(n,!!c.multiple,f,!1):c.defaultValue!=null&&wn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ml)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)dm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(pa.current),Qi(Qn.current),Wl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Kn]=r,(f=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Ll(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Qe(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)mp(),Ys(),r.flags|=98560,f=!1;else if(f=Wl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Kn]=r}else Ys(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else kn!==null&&(Lh(kn),kn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?mt===0&&(mt=3):Fh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return eo(),kh(n,r),n===null&&aa(r.stateNode.containerInfo),Ot(r),null;case 10:return Zc(r.type._context),Ot(r),null;case 17:return Ht(r.type)&&Fl(),Ot(r),null;case 19:if(Qe(Ze),f=r.memoizedState,f===null)return Ot(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)va(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Yl(n),v!==null){for(r.flags|=128,va(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>io&&(r.flags|=128,c=!0,va(f,!1),r.lanes=4194304)}else{if(!c)if(n=Yl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),va(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Ot(r),null}else 2*Ge()-f.renderingStartTime>io&&a!==1073741824&&(r.flags|=128,c=!0,va(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return jh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function q0(n,r){switch(Gc(r),r.tag){case 1:return Ht(r.type)&&Fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return eo(),Qe(Wt),Qe(Dt),oh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ih(r),null;case 13:if(Qe(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ys()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Ze),null;case 4:return eo(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return jh(),null;case 24:return null;default:return null}}var su=!1,Lt=!1,G0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function no(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,r,c)}else a.current=null}function Ah(n,r,a){try{a()}catch(c){it(n,r,c)}}var fm=!1;function K0(n,r){if(jc=dr,n=Hf(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,U=0,q=0,Y=n,H=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==f||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(te=Y.firstChild)!==null;)H=Y,Y=te;for(;;){if(Y===n)break t;if(H===a&&++U===d&&(S=v),H===f&&++q===c&&(P=v),(te=Y.nextSibling)!==null)break;Y=H,H=Y.parentNode}Y=te}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},dr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,at=se.memoizedState,L=r.stateNode,b=L.getSnapshotBeforeUpdate(r.elementType===r.type?oe:An(r.type,oe),at);L.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=fm,fm=!1,se}function wa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Ah(r,a,f)}d=d.next}while(d!==c)}}function ou(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function xh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function pm(n){var r=n.alternate;r!==null&&(n.alternate=null,pm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Kn],delete r[ua],delete r[$c],delete r[P0],delete r[N0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mm(n){return n.tag===5||n.tag===3||n.tag===4}function gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ml));else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}function Rh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rh(n,r,a),n=n.sibling;n!==null;)Rh(n,r,a),n=n.sibling}var At=null,xn=!1;function ri(n,r,a){for(a=a.child;a!==null;)ym(n,r,a),a=a.sibling}function ym(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Lt||no(a,r);case 6:var c=At,d=xn;At=null,ri(n,r,a),At=c,xn=d,At!==null&&(xn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(xn?(n=At,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Gr(n)):Bc(At,a.stateNode));break;case 4:c=At,d=xn,At=a.stateNode.containerInfo,xn=!0,ri(n,r,a),At=c,xn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Ah(a,r,v),d=d.next}while(d!==c)}ri(n,r,a);break;case 1:if(!Lt&&(no(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){it(a,r,S)}ri(n,r,a);break;case 21:ri(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ri(n,r,a),Lt=c):ri(n,r,a);break;default:ri(n,r,a)}}function _m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new G0),r.forEach(function(c){var d=rw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Cn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,S=v;e:for(;S!==null;){switch(S.tag){case 5:At=S.stateNode,xn=!1;break e;case 3:At=S.stateNode.containerInfo,xn=!0;break e;case 4:At=S.stateNode.containerInfo,xn=!0;break e}S=S.return}if(At===null)throw Error(t(160));ym(f,v,d),At=null,xn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){it(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)vm(r,n),r=r.sibling}function vm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(r,n),Jn(n),c&4){try{wa(3,n,n.return),ou(3,n)}catch(oe){it(n,n.return,oe)}try{wa(5,n,n.return)}catch(oe){it(n,n.return,oe)}}break;case 1:Cn(r,n),Jn(n),c&512&&a!==null&&no(a,a.return);break;case 5:if(Cn(r,n),Jn(n),c&512&&a!==null&&no(a,a.return),n.flags&32){var d=n.stateNode;try{Pi(d,"")}catch(oe){it(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&ws(d,f),Is(S,v);var U=Is(S,f);for(v=0;v<P.length;v+=2){var q=P[v],Y=P[v+1];q==="style"?Ts(d,Y):q==="dangerouslySetInnerHTML"?cl(d,Y):q==="children"?Pi(d,Y):me(d,q,Y,U)}switch(S){case"input":Ri(d,f);break;case"textarea":ul(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?wn(d,!!f.multiple,te,!1):H!==!!f.multiple&&(f.defaultValue!=null?wn(d,!!f.multiple,f.defaultValue,!0):wn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ua]=f}catch(oe){it(n,n.return,oe)}}break;case 6:if(Cn(r,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){it(n,n.return,oe)}}break;case 3:if(Cn(r,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(r.containerInfo)}catch(oe){it(n,n.return,oe)}break;case 4:Cn(r,n),Jn(n);break;case 13:Cn(r,n),Jn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(bh=Ge())),c&4&&_m(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||q,Cn(r,n),Lt=U):Cn(r,n),Jn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!q&&(n.mode&1)!==0)for(ie=n,q=n.child;q!==null;){for(Y=ie=q;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:wa(4,H,H.return);break;case 1:no(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){it(c,a,oe)}}break;case 5:no(H,H.return);break;case 22:if(H.memoizedState!==null){Tm(Y);continue}}te!==null?(te.return=H,ie=te):Tm(Y)}q=q.sibling}e:for(q=null,Y=n;;){if(Y.tag===5){if(q===null){q=Y;try{d=Y.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=jr("display",v))}catch(oe){it(n,n.return,oe)}}}else if(Y.tag===6){if(q===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(oe){it(n,n.return,oe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;q===Y&&(q=null),Y=Y.return}q===Y&&(q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Cn(r,n),Jn(n),c&4&&_m(n);break;case 21:break;default:Cn(r,n),Jn(n)}}function Jn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(mm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Pi(d,""),c.flags&=-33);var f=gm(n);Rh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=gm(n);Ch(n,S,v);break;default:throw Error(t(161))}}catch(P){it(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Q0(n,r,a){ie=n,wm(n)}function wm(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||su;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Lt;S=su;var U=Lt;if(su=v,(Lt=P)&&!U)for(ie=d;ie!==null;)v=ie,P=v.child,v.tag===22&&v.memoizedState!==null?Im(d):P!==null?(P.return=v,ie=P):Im(d);for(;f!==null;)ie=f,wm(f),f=f.sibling;ie=d,su=S,Lt=U}Em(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):Em(n)}}function Em(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||ou(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:An(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Tp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Tp(r,v,a)}break;case 5:var S=r.stateNode;if(a===null&&r.flags&4){a=S;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var q=U.memoizedState;if(q!==null){var Y=q.dehydrated;Y!==null&&Gr(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&xh(r)}catch(H){it(r,r.return,H)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Tm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Im(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ou(4,r)}catch(P){it(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){it(r,d,P)}}var f=r.return;try{xh(r)}catch(P){it(r,f,P)}break;case 5:var v=r.return;try{xh(r)}catch(P){it(r,v,P)}}}catch(P){it(r,r.return,P)}if(r===n){ie=null;break}var S=r.sibling;if(S!==null){S.return=r.return,ie=S;break}ie=r.return}}var Y0=Math.ceil,au=Se.ReactCurrentDispatcher,Ph=Se.ReactCurrentOwner,mn=Se.ReactCurrentBatchConfig,Me=0,wt=null,ht=null,xt=0,an=0,ro=Xr(0),mt=0,Ea=null,Ji=0,lu=0,Nh=0,Ta=null,Gt=null,bh=0,io=1/0,Tr=null,uu=!1,Dh=null,ii=null,cu=!1,si=null,hu=0,Ia=0,Vh=null,du=-1,fu=0;function $t(){return(Me&6)!==0?Ge():du!==-1?du:du=Ge()}function oi(n){return(n.mode&1)===0?1:(Me&2)!==0&&xt!==0?xt&-xt:D0.transition!==null?(fu===0&&(fu=Wo()),fu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Ds(n.type)),n)}function Rn(n,r,a,c){if(50<Ia)throw Ia=0,Vh=null,Error(t(185));Fi(n,a,c),((Me&2)===0||n!==wt)&&(n===wt&&((Me&2)===0&&(lu|=a),mt===4&&ai(n,xt)),Kt(n,c),a===1&&Me===0&&(r.mode&1)===0&&(io=Ge()+500,zl&&ei()))}function Kt(n,r){var a=n.callbackNode;ji(n,r);var c=ur(n,n===wt?xt:0);if(c===0)a!==null&&As(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&As(a),r===1)n.tag===0?b0(km.bind(null,n)):cp(km.bind(null,n)),C0(function(){(Me&6)===0&&ei()}),a=null;else{switch(jn(c)){case 1:a=xs;break;case 4:a=zo;break;case 16:a=Vi;break;case 536870912:a=Cs;break;default:a=Vi}a=Dm(a,Sm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Sm(n,r){if(du=-1,fu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(so()&&n.callbackNode!==a)return null;var c=ur(n,n===wt?xt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=pu(n,c);else{r=c;var d=Me;Me|=2;var f=xm();(wt!==n||xt!==r)&&(Tr=null,io=Ge()+500,Zi(n,r));do try{Z0();break}catch(S){Am(n,S)}while(!0);Xc(),au.current=f,Me=d,ht!==null?r=0:(wt=null,xt=0,r=mt)}if(r!==0){if(r===2&&(d=$o(n),d!==0&&(c=d,r=Oh(n,d))),r===1)throw a=Ea,Zi(n,0),ai(n,c),Kt(n,Ge()),a;if(r===6)ai(n,c);else{if(d=n.current.alternate,(c&30)===0&&!J0(d)&&(r=pu(n,c),r===2&&(f=$o(n),f!==0&&(c=f,r=Oh(n,f))),r===1))throw a=Ea,Zi(n,0),ai(n,c),Kt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,Gt,Tr);break;case 3:if(ai(n,c),(c&130023424)===c&&(r=bh+500-Ge(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(es.bind(null,n,Gt,Tr),r);break}es(n,Gt,Tr);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Zt(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Y0(c/1960))-c,10<c){n.timeoutHandle=zc(es.bind(null,n,Gt,Tr),c);break}es(n,Gt,Tr);break;case 5:es(n,Gt,Tr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===a?Sm.bind(null,n):null}function Oh(n,r){var a=Ta;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=pu(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Lh(r)),n}function Lh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function J0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Sn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ai(n,r){for(r&=~Nh,r&=~lu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Zt(r),c=1<<a;n[a]=-1,r&=~c}}function km(n){if((Me&6)!==0)throw Error(t(327));so();var r=ur(n,0);if((r&1)===0)return Kt(n,Ge()),null;var a=pu(n,r);if(n.tag!==0&&a===2){var c=$o(n);c!==0&&(r=c,a=Oh(n,c))}if(a===1)throw a=Ea,Zi(n,0),ai(n,r),Kt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Gt,Tr),Kt(n,Ge()),null}function Mh(n,r){var a=Me;Me|=1;try{return n(r)}finally{Me=a,Me===0&&(io=Ge()+500,zl&&ei())}}function Xi(n){si!==null&&si.tag===0&&(Me&6)===0&&so();var r=Me;Me|=1;var a=mn.transition,c=Ve;try{if(mn.transition=null,Ve=1,n)return n()}finally{Ve=c,mn.transition=a,Me=r,(Me&6)===0&&ei()}}function jh(){an=ro.current,Qe(ro)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,x0(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fl();break;case 3:eo(),Qe(Wt),Qe(Dt),oh();break;case 5:ih(c);break;case 4:eo();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Zc(c.type._context);break;case 22:case 23:jh()}a=a.return}if(wt=n,ht=n=li(n.current,null),xt=an=r,mt=0,Ea=null,Nh=lu=Ji=0,Gt=Ta=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ki=null}return n}function Am(n,r){do{var a=ht;try{if(Xc(),Jl.current=tu,Xl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xl=!1}if(Yi=0,vt=pt=et=null,ma=!1,ga=0,Ph.current=null,a===null||a.return===null){mt=1,Ea=r,ht=null;break}e:{var f=n,v=a.return,S=a,P=r;if(r=xt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,q=S,Y=q.tag;if((q.mode&1)===0&&(Y===0||Y===11||Y===15)){var H=q.alternate;H?(q.updateQueue=H.updateQueue,q.memoizedState=H.memoizedState,q.lanes=H.lanes):(q.updateQueue=null,q.memoizedState=null)}var te=Jp(v);if(te!==null){te.flags&=-257,Xp(te,v,S,f,r),te.mode&1&&Yp(f,U,r),r=te,P=U;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(P),r.updateQueue=oe}else se.add(P);break e}else{if((r&1)===0){Yp(f,U,r),Fh();break e}P=Error(t(426))}}else if(Xe&&S.mode&1){var at=Jp(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Xp(at,v,S,f,r),Yc(to(P,S));break e}}f=P=to(P,S),mt!==4&&(mt=2),Ta===null?Ta=[f]:Ta.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=Kp(f,P,r);Ep(f,L);break e;case 1:S=P;var b=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ii===null||!ii.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=Qp(f,S,r);Ep(f,X);break e}}f=f.return}while(f!==null)}Rm(a)}catch(le){r=le,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function xm(){var n=au.current;return au.current=tu,n===null?tu:n}function Fh(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||(Ji&268435455)===0&&(lu&268435455)===0||ai(wt,xt)}function pu(n,r){var a=Me;Me|=2;var c=xm();(wt!==n||xt!==r)&&(Tr=null,Zi(n,r));do try{X0();break}catch(d){Am(n,d)}while(!0);if(Xc(),Me=a,au.current=c,ht!==null)throw Error(t(261));return wt=null,xt=0,mt}function X0(){for(;ht!==null;)Cm(ht)}function Z0(){for(;ht!==null&&!Di();)Cm(ht)}function Cm(n){var r=bm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?Rm(n):ht=r,Ph.current=null}function Rm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=H0(a,r,an),a!==null){ht=a;return}}else{if(a=q0(a,r),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ht=null;return}}if(r=r.sibling,r!==null){ht=r;return}ht=r=n}while(r!==null);mt===0&&(mt=5)}function es(n,r,a){var c=Ve,d=mn.transition;try{mn.transition=null,Ve=1,ew(n,r,a,c)}finally{mn.transition=d,Ve=c}return null}function ew(n,r,a,c){do so();while(si!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(kc(n,f),n===wt&&(ht=wt=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cu||(cu=!0,Dm(Vi,function(){return so(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=mn.transition,mn.transition=null;var v=Ve;Ve=1;var S=Me;Me|=4,Ph.current=null,K0(n,a),vm(a,n),w0(Fc),dr=!!jc,Fc=jc=null,n.current=a,Q0(a),lr(),Me=S,Ve=v,mn.transition=f}else n.current=a;if(cu&&(cu=!1,si=n,hu=d),f=n.pendingLanes,f===0&&(ii=null),El(a.stateNode),Kt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(uu)throw uu=!1,n=Dh,Dh=null,n;return(hu&1)!==0&&n.tag!==0&&so(),f=n.pendingLanes,(f&1)!==0?n===Vh?Ia++:(Ia=0,Vh=n):Ia=0,ei(),null}function so(){if(si!==null){var n=jn(hu),r=mn.transition,a=Ve;try{if(mn.transition=null,Ve=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,hu=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,ie=n.current;ie!==null;){var f=ie,v=f.child;if((ie.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var U=S[P];for(ie=U;ie!==null;){var q=ie;switch(q.tag){case 0:case 11:case 15:wa(8,q,f)}var Y=q.child;if(Y!==null)Y.return=q,ie=Y;else for(;ie!==null;){q=ie;var H=q.sibling,te=q.return;if(pm(q),q===U){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var at=oe.sibling;oe.sibling=null,oe=at}while(oe!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ie=v;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:wa(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ie=L;break e}ie=f.return}}var b=n.current;for(ie=b;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=b;ie!==null;){if(S=ie,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:ou(9,S)}}catch(le){it(S,S.return,le)}if(S===v){ie=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,ie=X;break e}ie=S.return}}if(Me=d,ei(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Ve=a,mn.transition=r}}return!1}function Pm(n,r,a){r=to(a,r),r=Kp(n,r,1),n=ni(n,r,1),r=$t(),n!==null&&(Fi(n,1,r),Kt(n,r))}function it(n,r,a){if(n.tag===3)Pm(n,n,a);else for(;r!==null;){if(r.tag===3){Pm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=to(a,n),n=Qp(r,n,1),r=ni(r,n,1),n=$t(),r!==null&&(Fi(r,1,n),Kt(r,n));break}}r=r.return}}function tw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(xt&a)===a&&(mt===4||mt===3&&(xt&130023424)===xt&&500>Ge()-bh?Zi(n,0):Nh|=a),Kt(n,r)}function Nm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var a=$t();n=vr(n,r),n!==null&&(Fi(n,r,a),Kt(n,a))}function nw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Nm(n,a)}function rw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Nm(n,a)}var bm;bm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return qt=!1,W0(n,r,a);qt=(n.flags&131072)!==0}else qt=!1,Xe&&(r.flags&1048576)!==0&&hp(r,$l,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;iu(n,r),n=r.pendingProps;var d=Gs(r,Dt.current);Zs(r,a),d=uh(null,r,c,n,d,a);var f=ch();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(f=!0,Ul(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(r),d.updater=nu,r.stateNode=d,d._reactInternals=r,gh(r,c,n,a),r=wh(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&qc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(iu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=sw(c),n=An(c,n),d){case 0:r=vh(null,r,c,n,a);break e;case 1:r=im(null,r,c,n,a);break e;case 11:r=Zp(null,r,c,n,a);break e;case 14:r=em(null,r,c,An(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),vh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),im(n,r,c,d,a);case 3:e:{if(sm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,wp(n,r),Ql(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=to(Error(t(423)),r),r=om(n,r,c,a,d);break e}else if(c!==d){d=to(Error(t(424)),r),r=om(n,r,c,a,d);break e}else for(on=Jr(r.stateNode.containerInfo.firstChild),sn=r,Xe=!0,kn=null,a=_p(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ys(),c===d){r=Er(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return Ip(r),n===null&&Qc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Uc(c,d)?v=null:f!==null&&Uc(c,f)&&(r.flags|=32),rm(n,r),Bt(n,r,v,a),r.child;case 6:return n===null&&Qc(r),null;case 13:return am(n,r,a);case 4:return rh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Js(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),Zp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,qe(ql,c._currentValue),c._currentValue=v,f!==null)if(Sn(f.value,v)){if(f.children===d.children&&!Wt.current){r=Er(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=wr(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var q=U.pending;q===null?P.next=P:(P.next=q.next,q.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),eh(f.return,a,r),S.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),eh(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Zs(r,a),d=fn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=An(c,r.pendingProps),d=An(c.type,d),em(n,r,c,d,a);case 15:return tm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),iu(n,r),r.tag=1,Ht(c)?(n=!0,Ul(r)):n=!1,Zs(r,a),qp(r,c,d),gh(r,c,d,a),wh(null,r,c,!0,n,a);case 19:return um(n,r,a);case 22:return nm(n,r,a)}throw Error(t(156,r.tag))};function Dm(n,r){return Uo(n,r)}function iw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,r,a,c){return new iw(n,r,a,c)}function Uh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sw(n){if(typeof n=="function")return Uh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===_t)return 14}return 2}function li(n,r){var a=n.alternate;return a===null?(a=gn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function mu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Uh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case R:return ts(a.children,d,f,r);case I:v=8,d|=8;break;case k:return n=gn(12,a,r,d|2),n.elementType=k,n.lanes=f,n;case x:return n=gn(13,a,r,d),n.elementType=x,n.lanes=f,n;case He:return n=gn(19,a,r,d),n.elementType=He,n.lanes=f,n;case Je:return gu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case N:v=9;break e;case O:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function ts(n,r,a,c){return n=gn(7,n,c,r),n.lanes=a,n}function gu(n,r,a,c){return n=gn(22,n,c,r),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,r,a){return n=gn(6,n,null,r),n.lanes=a,n}function Bh(n,r,a){return r=gn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ow(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,r,a,c,d,f,v,S,P){return n=new ow(n,r,a,S,P),r===1?(r=1,f===!0&&(r|=8)):r=0,f=gn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(f),n}function aw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Vm(n){if(!n)return Zr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return lp(n,a,r)}return r}function Om(n,r,a,c,d,f,v,S,P){return n=$h(a,c,!0,n,d,f,v,S,P),n.context=Vm(null),a=n.current,c=$t(),d=oi(a),f=wr(c,d),f.callback=r??null,ni(a,f,d),n.current.lanes=d,Fi(n,d,c),Kt(n,c),n}function yu(n,r,a,c){var d=r.current,f=$t(),v=oi(d);return a=Vm(a),r.context===null?r.context=a:r.pendingContext=a,r=wr(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ni(d,r,v),n!==null&&(Rn(n,d,v,f),Kl(n,d,v)),v}function _u(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Wh(n,r){Lm(n,r),(n=n.alternate)&&Lm(n,r)}function lw(){return null}var Mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}vu.prototype.render=Hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));yu(n,r,null,null)},vu.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Xi(function(){yu(null,n,null,null)}),r[mr]=null}};function vu(n){this._internalRoot=n}vu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Qo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<en.length&&r!==0&&r<en[a].priority;a++);en.splice(a,0,n),a===0&&Ns(n)}};function qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jm(){}function uw(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=_u(v);f.call(U)}}var v=Om(r,c,n,0,null,!1,!1,"",jm);return n._reactRootContainer=v,n[mr]=v.current,aa(n.nodeType===8?n.parentNode:n),Xi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=_u(P);S.call(U)}}var P=$h(n,0,!1,null,null,!1,!1,"",jm);return n._reactRootContainer=P,n[mr]=P.current,aa(n.nodeType===8?n.parentNode:n),Xi(function(){yu(r,P,a,c)}),P}function Eu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var P=_u(v);S.call(P)}}yu(r,v,n,d)}else v=uw(a,r,n,d,c);return _u(v)}Go=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fe(r.pendingLanes);a!==0&&(qo(r,a|1),Kt(r,Ge()),(Me&6)===0&&(io=Ge()+500,ei()))}break;case 13:Xi(function(){var c=vr(n,1);if(c!==null){var d=$t();Rn(c,n,1,d)}}),Wh(n,1)}},Rs=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=$t();Rn(r,n,134217728,a)}Wh(n,134217728)}},Ko=function(n){if(n.tag===13){var r=oi(n),a=vr(n,r);if(a!==null){var c=$t();Rn(a,n,r,c)}Wh(n,r)}},Qo=function(){return Ve},Yo=function(n,r){var a=Ve;try{return Ve=n,r()}finally{Ve=a}},sr=function(n,r,a){switch(r){case"input":if(Ri(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=jl(c);if(!d)throw Error(t(90));No(c),Ri(c,d)}}}break;case"textarea":ul(n,a);break;case"select":r=a.value,r!=null&&wn(n,!!a.multiple,r,!1)}},dl=Mh,fl=Xi;var cw={usingClientEntryPoint:!1,Events:[ca,Hs,jl,Ur,zr,Mh]},Sa={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hw={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wl(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{Oi=Tu.inject(hw),Xt=Tu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(r))throw Error(t(200));return aw(n,r,null,a)},Qt.createRoot=function(n,r){if(!qh(n))throw Error(t(299));var a=!1,c="",d=Mm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=$h(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,aa(n.nodeType===8?n.parentNode:n),new Hh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wl(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Xi(n)},Qt.hydrate=function(n,r,a){if(!wu(r))throw Error(t(200));return Eu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!qh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Mm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Om(r,null,n,1,a??null,d,!1,f,v),n[mr]=r.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new vu(r)},Qt.render=function(n,r,a){if(!wu(r))throw Error(t(200));return Eu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!wu(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){Eu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Mh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!wu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Eu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var qm;function vw(){if(qm)return Qh.exports;qm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qh.exports=_w(),Qh.exports}var Gm;function ww(){if(Gm)return Iu;Gm=1;var i=vw();return Iu.createRoot=i.createRoot,Iu.hydrateRoot=i.hydrateRoot,Iu}var Ew=ww(),$=Ld();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iw=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Km=i=>{const e=Iw(i);return e.charAt(0).toUpperCase()+e.slice(1)},Sy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=$.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>$.createElement("svg",{ref:g,...Sw,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Sy("lucide",o),...m},[...h.map(([_,T])=>$.createElement(_,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(i,e)=>{const t=$.forwardRef(({className:s,...o},u)=>$.createElement(kw,{ref:u,iconNode:e,className:Sy(`lucide-${Tw(Km(i))}`,`lucide-${i}`,s),...o}));return t.displayName=Km(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xw=Ce("arrow-right",Aw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Rw=Ce("bookmark",Cw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]],Nw=Ce("calendar-plus",Pw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ky=Ce("calendar",bw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ay=Ce("chart-column",Dw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ow=Ce("check",Vw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],xy=Ce("cloud",Lw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],go=Ce("crown",Mw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Fw=Ce("eye-off",jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zw=Ce("eye",Uw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Cy=Ce("file-text",Bw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Ww=Ce("grip-vertical",$w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ry=Ce("layers",Hw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Gw=Ce("layout-dashboard",qw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Qw=Ce("link",Kw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],cd=Ce("loader-circle",Yw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Md=Ce("lock",Jw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Zw=Ce("log-out",Xw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],tE=Ce("mail",eE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],rE=Ce("map-pin",nE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],sE=Ce("menu",iE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],aE=Ce("message-square",oE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Py=Ce("moon",lE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ny=Ce("music",uE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],hE=Ce("panel-left-close",cE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],fE=Ce("panel-left",dE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],mE=Ce("pause",pE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],by=Ce("play",gE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],wi=Ce("plus",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],vE=Ce("rotate-ccw",_E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],EE=Ce("settings",wE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Dy=Ce("square-check-big",TE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Vy=Ce("sun",IE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Oy=Ce("timer",SE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],AE=Ce("upload",kE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],CE=Ce("user",xE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ac=Ce("x",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],NE=Ce("zap",PE);function bE(i,e){const t=$.useRef(null);return $.useCallback((...s)=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>i(...s),e)},[i,e])}const DE=()=>{};var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},VE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},My={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,T=u>>2,A=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,M=_&63;g||(M=64,h||(C=64)),s.push(t[T],t[A],t[C],t[M])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ly(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):VE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||A==null)throw new OE;const C=u<<2|m>>4;if(s.push(C),_!==64){const M=m<<4&240|_>>2;if(s.push(M),A!==64){const Q=_<<6&192|A;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class OE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LE=function(i){const e=Ly(i);return My.encodeByteArray(e,!0)},zu=function(i){return LE(i).replace(/\./g,"")},jy=function(i){try{return My.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=()=>ME().__FIREBASE_DEFAULTS__,FE=()=>{if(typeof process>"u"||typeof Qm>"u")return;const i=Qm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},UE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&jy(i[1]);return e&&JSON.parse(e)},lc=()=>{try{return DE()||jE()||FE()||UE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Fy=i=>{var e,t;return(t=(e=lc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},zE=i=>{const e=Fy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Uy=()=>{var i;return(i=lc())==null?void 0:i.config},zy=i=>{var e;return(e=lc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[zu(JSON.stringify(t)),zu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function HE(){var e;const i=(e=lc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function KE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function YE(){return!HE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JE(){try{return typeof indexedDB=="object"}catch{return!1}}function XE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ZE,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?eT(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new br(o,m,s)}}function eT(i,e){return i.replace(tT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const tT=/\{\$([^}]+)}/g;function nT(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function os(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Ym(u)&&Ym(h)){if(!os(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ym(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ca(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function rT(i,e){const t=new iT(i,e);return t.subscribe.bind(t)}class iT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Xh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function By(i){return(await fetch(i,{credentials:"include"})).ok}class as{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new BE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lT(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aT(i){return i===ns?void 0:i}function lT(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const cT={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},hT=Ne.INFO,dT={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},fT=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=dT[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=hT,this._logHandler=fT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const pT=(i,e)=>e.some(t=>i instanceof t);let Jm,Xm;function mT(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gT(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $y=new WeakMap,hd=new WeakMap,Wy=new WeakMap,Zh=new WeakMap,Fd=new WeakMap;function yT(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(mi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&$y.set(t,i)}).catch(()=>{}),Fd.set(e,i),e}function _T(i){if(hd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});hd.set(i,e)}let dd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return hd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Wy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function vT(i){dd=i(dd)}function wT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ed(this),e,...t);return Wy.set(s,e.sort?e.sort():[e]),mi(s)}:gT().includes(i)?function(...e){return i.apply(ed(this),e),mi($y.get(this))}:function(...e){return mi(i.apply(ed(this),e))}}function ET(i){return typeof i=="function"?wT(i):(i instanceof IDBTransaction&&_T(i),pT(i,mT())?new Proxy(i,dd):i)}function mi(i){if(i instanceof IDBRequest)return yT(i);if(Zh.has(i))return Zh.get(i);const e=ET(i);return e!==i&&(Zh.set(i,e),Fd.set(e,i)),e}const ed=i=>Fd.get(i);function TT(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const IT=["get","getKey","getAll","getAllKeys","count"],ST=["put","add","delete","clear"],td=new Map;function Zm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=ST.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||IT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return td.set(e,u),u}vT(i=>({...i,get:(e,t,s)=>Zm(e,t)||i.get(e,t,s),has:(e,t)=>!!Zm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function AT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",eg="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new jd("@firebase/app"),xT="@firebase/app-compat",CT="@firebase/analytics-compat",RT="@firebase/analytics",PT="@firebase/app-check-compat",NT="@firebase/app-check",bT="@firebase/auth",DT="@firebase/auth-compat",VT="@firebase/database",OT="@firebase/data-connect",LT="@firebase/database-compat",MT="@firebase/functions",jT="@firebase/functions-compat",FT="@firebase/installations",UT="@firebase/installations-compat",zT="@firebase/messaging",BT="@firebase/messaging-compat",$T="@firebase/performance",WT="@firebase/performance-compat",HT="@firebase/remote-config",qT="@firebase/remote-config-compat",GT="@firebase/storage",KT="@firebase/storage-compat",QT="@firebase/firestore",YT="@firebase/ai",JT="@firebase/firestore-compat",XT="firebase",ZT="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="[DEFAULT]",e1={[fd]:"fire-core",[xT]:"fire-core-compat",[RT]:"fire-analytics",[CT]:"fire-analytics-compat",[NT]:"fire-app-check",[PT]:"fire-app-check-compat",[bT]:"fire-auth",[DT]:"fire-auth-compat",[VT]:"fire-rtdb",[OT]:"fire-data-connect",[LT]:"fire-rtdb-compat",[MT]:"fire-fn",[jT]:"fire-fn-compat",[FT]:"fire-iid",[UT]:"fire-iid-compat",[zT]:"fire-fcm",[BT]:"fire-fcm-compat",[$T]:"fire-perf",[WT]:"fire-perf-compat",[HT]:"fire-rc",[qT]:"fire-rc-compat",[GT]:"fire-gcs",[KT]:"fire-gcs-compat",[QT]:"fire-fst",[JT]:"fire-fst-compat",[YT]:"fire-vertex","fire-js":"fire-js",[XT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map,t1=new Map,md=new Map;function tg(i,e){try{i.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function yo(i){const e=i.name;if(md.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;md.set(e,i);for(const t of Bu.values())tg(t,i);for(const t of t1.values())tg(t,i);return!0}function Ud(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function ln(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Qa("app","Firebase",n1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=ZT;function Hy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:pd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=Uy()),!t)throw gi.create("no-options");const u=Bu.get(o);if(u){if(os(t,u.options)&&os(s,u.config))return u;throw gi.create("duplicate-app",{appName:o})}const h=new uT(o);for(const g of md.values())h.addComponent(g);const m=new r1(t,s,h);return Bu.set(o,m),m}function qy(i=pd){const e=Bu.get(i);if(!e&&i===pd&&Uy())return Hy();if(!e)throw gi.create("no-app",{appName:i});return e}function yi(i,e,t){let s=e1[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(h.join(" "));return}yo(new as(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebase-heartbeat-database",s1=1,Fa="firebase-heartbeat-store";let nd=null;function Gy(){return nd||(nd=TT(i1,s1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(i=>{throw gi.create("idb-open",{originalErrorMessage:i.message})})),nd}async function o1(i){try{const t=(await Gy()).transaction(Fa),s=await t.objectStore(Fa).get(Ky(i));return await t.done,s}catch(e){if(e instanceof br)Cr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function ng(i,e){try{const s=(await Gy()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,Ky(i)),await s.done}catch(t){if(t instanceof br)Cr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function Ky(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=1024,l1=30;class u1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new h1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>l1){const h=d1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rg(),{heartbeatsToSend:s,unsentEntries:o}=c1(this._heartbeatsCache.heartbeats),u=zu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Cr.warn(t),""}}}function rg(){return new Date().toISOString().substring(0,10)}function c1(i,e=a1){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ig(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ig(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class h1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JE()?XE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await o1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ig(i){return zu(JSON.stringify({version:2,heartbeats:i})).length}function d1(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(i){yo(new as("platform-logger",e=>new kT(e),"PRIVATE")),yo(new as("heartbeat",e=>new u1(e),"PRIVATE")),yi(fd,eg,i),yi(fd,eg,"esm2020"),yi("fire-js","")}f1("");var sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,Qy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function k(){}k.prototype=I.prototype,R.F=I.prototype,R.prototype=new k,R.prototype.constructor=R,R.D=function(D,N,O){for(var x=Array(arguments.length-2),He=2;He<arguments.length;He++)x[He-2]=arguments[He];return I.prototype[N].apply(D,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,I,k){k||(k=0);const D=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)D[N]=I.charCodeAt(k++)|I.charCodeAt(k++)<<8|I.charCodeAt(k++)<<16|I.charCodeAt(k++)<<24;else for(N=0;N<16;++N)D[N]=I[k++]|I[k++]<<8|I[k++]<<16|I[k++]<<24;I=R.g[0],k=R.g[1],N=R.g[2];let O=R.g[3],x;x=I+(O^k&(N^O))+D[0]+3614090360&4294967295,I=k+(x<<7&4294967295|x>>>25),x=O+(N^I&(k^N))+D[1]+3905402710&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(k^O&(I^k))+D[2]+606105819&4294967295,N=O+(x<<17&4294967295|x>>>15),x=k+(I^N&(O^I))+D[3]+3250441966&4294967295,k=N+(x<<22&4294967295|x>>>10),x=I+(O^k&(N^O))+D[4]+4118548399&4294967295,I=k+(x<<7&4294967295|x>>>25),x=O+(N^I&(k^N))+D[5]+1200080426&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(k^O&(I^k))+D[6]+2821735955&4294967295,N=O+(x<<17&4294967295|x>>>15),x=k+(I^N&(O^I))+D[7]+4249261313&4294967295,k=N+(x<<22&4294967295|x>>>10),x=I+(O^k&(N^O))+D[8]+1770035416&4294967295,I=k+(x<<7&4294967295|x>>>25),x=O+(N^I&(k^N))+D[9]+2336552879&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(k^O&(I^k))+D[10]+4294925233&4294967295,N=O+(x<<17&4294967295|x>>>15),x=k+(I^N&(O^I))+D[11]+2304563134&4294967295,k=N+(x<<22&4294967295|x>>>10),x=I+(O^k&(N^O))+D[12]+1804603682&4294967295,I=k+(x<<7&4294967295|x>>>25),x=O+(N^I&(k^N))+D[13]+4254626195&4294967295,O=I+(x<<12&4294967295|x>>>20),x=N+(k^O&(I^k))+D[14]+2792965006&4294967295,N=O+(x<<17&4294967295|x>>>15),x=k+(I^N&(O^I))+D[15]+1236535329&4294967295,k=N+(x<<22&4294967295|x>>>10),x=I+(N^O&(k^N))+D[1]+4129170786&4294967295,I=k+(x<<5&4294967295|x>>>27),x=O+(k^N&(I^k))+D[6]+3225465664&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^k&(O^I))+D[11]+643717713&4294967295,N=O+(x<<14&4294967295|x>>>18),x=k+(O^I&(N^O))+D[0]+3921069994&4294967295,k=N+(x<<20&4294967295|x>>>12),x=I+(N^O&(k^N))+D[5]+3593408605&4294967295,I=k+(x<<5&4294967295|x>>>27),x=O+(k^N&(I^k))+D[10]+38016083&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^k&(O^I))+D[15]+3634488961&4294967295,N=O+(x<<14&4294967295|x>>>18),x=k+(O^I&(N^O))+D[4]+3889429448&4294967295,k=N+(x<<20&4294967295|x>>>12),x=I+(N^O&(k^N))+D[9]+568446438&4294967295,I=k+(x<<5&4294967295|x>>>27),x=O+(k^N&(I^k))+D[14]+3275163606&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^k&(O^I))+D[3]+4107603335&4294967295,N=O+(x<<14&4294967295|x>>>18),x=k+(O^I&(N^O))+D[8]+1163531501&4294967295,k=N+(x<<20&4294967295|x>>>12),x=I+(N^O&(k^N))+D[13]+2850285829&4294967295,I=k+(x<<5&4294967295|x>>>27),x=O+(k^N&(I^k))+D[2]+4243563512&4294967295,O=I+(x<<9&4294967295|x>>>23),x=N+(I^k&(O^I))+D[7]+1735328473&4294967295,N=O+(x<<14&4294967295|x>>>18),x=k+(O^I&(N^O))+D[12]+2368359562&4294967295,k=N+(x<<20&4294967295|x>>>12),x=I+(k^N^O)+D[5]+4294588738&4294967295,I=k+(x<<4&4294967295|x>>>28),x=O+(I^k^N)+D[8]+2272392833&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^k)+D[11]+1839030562&4294967295,N=O+(x<<16&4294967295|x>>>16),x=k+(N^O^I)+D[14]+4259657740&4294967295,k=N+(x<<23&4294967295|x>>>9),x=I+(k^N^O)+D[1]+2763975236&4294967295,I=k+(x<<4&4294967295|x>>>28),x=O+(I^k^N)+D[4]+1272893353&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^k)+D[7]+4139469664&4294967295,N=O+(x<<16&4294967295|x>>>16),x=k+(N^O^I)+D[10]+3200236656&4294967295,k=N+(x<<23&4294967295|x>>>9),x=I+(k^N^O)+D[13]+681279174&4294967295,I=k+(x<<4&4294967295|x>>>28),x=O+(I^k^N)+D[0]+3936430074&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^k)+D[3]+3572445317&4294967295,N=O+(x<<16&4294967295|x>>>16),x=k+(N^O^I)+D[6]+76029189&4294967295,k=N+(x<<23&4294967295|x>>>9),x=I+(k^N^O)+D[9]+3654602809&4294967295,I=k+(x<<4&4294967295|x>>>28),x=O+(I^k^N)+D[12]+3873151461&4294967295,O=I+(x<<11&4294967295|x>>>21),x=N+(O^I^k)+D[15]+530742520&4294967295,N=O+(x<<16&4294967295|x>>>16),x=k+(N^O^I)+D[2]+3299628645&4294967295,k=N+(x<<23&4294967295|x>>>9),x=I+(N^(k|~O))+D[0]+4096336452&4294967295,I=k+(x<<6&4294967295|x>>>26),x=O+(k^(I|~N))+D[7]+1126891415&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~k))+D[14]+2878612391&4294967295,N=O+(x<<15&4294967295|x>>>17),x=k+(O^(N|~I))+D[5]+4237533241&4294967295,k=N+(x<<21&4294967295|x>>>11),x=I+(N^(k|~O))+D[12]+1700485571&4294967295,I=k+(x<<6&4294967295|x>>>26),x=O+(k^(I|~N))+D[3]+2399980690&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~k))+D[10]+4293915773&4294967295,N=O+(x<<15&4294967295|x>>>17),x=k+(O^(N|~I))+D[1]+2240044497&4294967295,k=N+(x<<21&4294967295|x>>>11),x=I+(N^(k|~O))+D[8]+1873313359&4294967295,I=k+(x<<6&4294967295|x>>>26),x=O+(k^(I|~N))+D[15]+4264355552&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~k))+D[6]+2734768916&4294967295,N=O+(x<<15&4294967295|x>>>17),x=k+(O^(N|~I))+D[13]+1309151649&4294967295,k=N+(x<<21&4294967295|x>>>11),x=I+(N^(k|~O))+D[4]+4149444226&4294967295,I=k+(x<<6&4294967295|x>>>26),x=O+(k^(I|~N))+D[11]+3174756917&4294967295,O=I+(x<<10&4294967295|x>>>22),x=N+(I^(O|~k))+D[2]+718787259&4294967295,N=O+(x<<15&4294967295|x>>>17),x=k+(O^(N|~I))+D[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(N+(x<<21&4294967295|x>>>11))&4294967295,R.g[2]=R.g[2]+N&4294967295,R.g[3]=R.g[3]+O&4294967295}s.prototype.v=function(R,I){I===void 0&&(I=R.length);const k=I-this.blockSize,D=this.C;let N=this.h,O=0;for(;O<I;){if(N==0)for(;O<=k;)o(this,R,O),O+=this.blockSize;if(typeof R=="string"){for(;O<I;)if(D[N++]=R.charCodeAt(O++),N==this.blockSize){o(this,D),N=0;break}}else for(;O<I;)if(D[N++]=R[O++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=I},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;I=this.o*8;for(var k=R.length-8;k<R.length;++k)R[k]=I&255,I/=256;for(this.v(R),R=Array(16),I=0,k=0;k<4;++k)for(let D=0;D<32;D+=8)R[I++]=this.g[k]>>>D&255;return R};function u(R,I){var k=m;return Object.prototype.hasOwnProperty.call(k,R)?k[R]:k[R]=I(R)}function h(R,I){this.h=I;const k=[];let D=!0;for(let N=R.length-1;N>=0;N--){const O=R[N]|0;D&&O==I||(k[N]=O,D=!1)}this.g=k}var m={};function g(R){return-128<=R&&R<128?u(R,function(I){return new h([I|0],I<0?-1:0)}):new h([R|0],R<0?-1:0)}function _(R){if(isNaN(R)||!isFinite(R))return A;if(R<0)return K(_(-R));const I=[];let k=1;for(let D=0;R>=k;D++)I[D]=R/k|0,k*=4294967296;return new h(I,0)}function T(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return K(T(R.substring(1),I));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=_(Math.pow(I,8));let D=A;for(let O=0;O<R.length;O+=8){var N=Math.min(8,R.length-O);const x=parseInt(R.substring(O,O+N),I);N<8?(N=_(Math.pow(I,N)),D=D.j(N).add(_(x))):(D=D.j(k),D=D.add(_(x)))}return D}var A=g(0),C=g(1),M=g(16777216);i=h.prototype,i.m=function(){if(J(this))return-K(this).m();let R=0,I=1;for(let k=0;k<this.g.length;k++){const D=this.i(k);R+=(D>=0?D:4294967296+D)*I,I*=4294967296}return R},i.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(Q(this))return"0";if(J(this))return"-"+K(this).toString(R);const I=_(Math.pow(R,6));var k=this;let D="";for(;;){const N=Se(k,I).g;k=pe(k,N.j(I));let O=((k.g.length>0?k.g[0]:k.h)>>>0).toString(R);if(k=N,Q(k))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},i.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function Q(R){if(R.h!=0)return!1;for(let I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function J(R){return R.h==-1}i.l=function(R){return R=pe(this,R),J(R)?-1:Q(R)?0:1};function K(R){const I=R.g.length,k=[];for(let D=0;D<I;D++)k[D]=~R.g[D];return new h(k,~R.h).add(C)}i.abs=function(){return J(this)?K(this):this},i.add=function(R){const I=Math.max(this.g.length,R.g.length),k=[];let D=0;for(let N=0;N<=I;N++){let O=D+(this.i(N)&65535)+(R.i(N)&65535),x=(O>>>16)+(this.i(N)>>>16)+(R.i(N)>>>16);D=x>>>16,O&=65535,x&=65535,k[N]=x<<16|O}return new h(k,k[k.length-1]&-2147483648?-1:0)};function pe(R,I){return R.add(K(I))}i.j=function(R){if(Q(this)||Q(R))return A;if(J(this))return J(R)?K(this).j(K(R)):K(K(this).j(R));if(J(R))return K(this.j(K(R)));if(this.l(M)<0&&R.l(M)<0)return _(this.m()*R.m());const I=this.g.length+R.g.length,k=[];for(var D=0;D<2*I;D++)k[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<R.g.length;N++){const O=this.i(D)>>>16,x=this.i(D)&65535,He=R.i(N)>>>16,_t=R.i(N)&65535;k[2*D+2*N]+=x*_t,ae(k,2*D+2*N),k[2*D+2*N+1]+=O*_t,ae(k,2*D+2*N+1),k[2*D+2*N+1]+=x*He,ae(k,2*D+2*N+1),k[2*D+2*N+2]+=O*He,ae(k,2*D+2*N+2)}for(R=0;R<I;R++)k[R]=k[2*R+1]<<16|k[2*R];for(R=I;R<2*I;R++)k[R]=0;return new h(k,0)};function ae(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function me(R,I){this.g=R,this.h=I}function Se(R,I){if(Q(I))throw Error("division by zero");if(Q(R))return new me(A,A);if(J(R))return I=Se(K(R),I),new me(K(I.g),K(I.h));if(J(I))return I=Se(R,K(I)),new me(K(I.g),I.h);if(R.g.length>30){if(J(R)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var k=C,D=I;D.l(R)<=0;)k=ve(k),D=ve(D);var N=ge(k,1),O=ge(D,1);for(D=ge(D,2),k=ge(k,2);!Q(D);){var x=O.add(D);x.l(R)<=0&&(N=N.add(k),O=x),D=ge(D,1),k=ge(k,1)}return I=pe(R,N.j(I)),new me(N,I)}for(N=A;R.l(I)>=0;){for(k=Math.max(1,Math.floor(R.m()/I.m())),D=Math.ceil(Math.log(k)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=_(k),x=O.j(I);J(x)||x.l(R)>0;)k-=D,O=_(k),x=O.j(I);Q(O)&&(O=C),N=N.add(O),R=pe(R,x)}return new me(N,R)}i.B=function(R){return Se(this,R).h},i.and=function(R){const I=Math.max(this.g.length,R.g.length),k=[];for(let D=0;D<I;D++)k[D]=this.i(D)&R.i(D);return new h(k,this.h&R.h)},i.or=function(R){const I=Math.max(this.g.length,R.g.length),k=[];for(let D=0;D<I;D++)k[D]=this.i(D)|R.i(D);return new h(k,this.h|R.h)},i.xor=function(R){const I=Math.max(this.g.length,R.g.length),k=[];for(let D=0;D<I;D++)k[D]=this.i(D)^R.i(D);return new h(k,this.h^R.h)};function ve(R){const I=R.g.length+1,k=[];for(let D=0;D<I;D++)k[D]=R.i(D)<<1|R.i(D-1)>>>31;return new h(k,R.h)}function ge(R,I){const k=I>>5;I%=32;const D=R.g.length-k,N=[];for(let O=0;O<D;O++)N[O]=I>0?R.i(O+k)>>>I|R.i(O+k+1)<<32-I:R.i(O+k);return new h(N,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Qy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,_i=h}).apply(typeof sg<"u"?sg:typeof self<"u"?self:typeof window<"u"?window:{});var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yy,Ra,Jy,Nu,gd,Xy,Zy,e_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Su=="object"&&Su];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var j=l[E];if(!(j in y))break e;y=y[j]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function T(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function A(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,j,z){for(var Z=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)Z[Te-2]=arguments[Te];return p.prototype[j].apply(E,Z)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function M(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function Q(l,p){for(let E=1;E<arguments.length;E++){const j=arguments[E];var y=typeof j;if(y=y!="object"?y:j?Array.isArray(j)?"array":y:"null",y=="array"||y=="object"&&typeof j.length=="number"){y=l.length||0;const z=j.length||0;l.length=y+z;for(let Z=0;Z<z;Z++)l[y+Z]=j[Z]}else l.push(j)}}class J{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function K(l){h.setTimeout(()=>{throw l},0)}function pe(){var l=R;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ae{constructor(){this.h=this.g=null}add(p,y){const E=me.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var me=new J(()=>new Se,l=>l.reset());class Se{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,R=new ae,I=()=>{const l=Promise.resolve(void 0);ve=()=>{l.then(k)}};function k(){for(var l;l=pe();){try{l.h.call(l.g)}catch(y){K(y)}var p=me;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ge=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function x(l){return/^[\s\xa0]*$/.test(l)}function He(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A(He,N),He.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Je(l,p,y,E,j){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=j,this.key=++Nt,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ce(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function re(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(l,p){let y,E;for(let j=1;j<arguments.length;j++){E=arguments[j];for(y in E)l[y]=E[y];for(let z=0;z<W.length;z++)y=W[z],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,p,y,E,j){const z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);const Z=Pe(l,p,E,j);return Z>-1?(p=l[Z],y||(p.fa=!1)):(p=new Je(p,this.src,z,!!E,j),p.fa=y,l.push(p)),p};function Re(l,p){const y=p.type;if(y in l.g){var E=l.g[y],j=Array.prototype.indexOf.call(E,p,void 0),z;(z=j>=0)&&Array.prototype.splice.call(E,j,1),z&&(ee(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Pe(l,p,y,E){for(let j=0;j<l.length;++j){const z=l[j];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==E)return j}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Le={};function $e(l,p,y,E,j){if(Array.isArray(p)){for(let z=0;z<p.length;z++)$e(l,p[z],y,E,j);return null}return y=bo(y),l&&l[_t]?l.J(p,y,m(E)?!!E.capture:!1,j):zt(l,p,y,!1,E,j)}function zt(l,p,y,E,j,z){if(!p)throw Error("Invalid event type");const Z=m(j)?!!j.capture:!!j;let Te=ws(l);if(Te||(l[Ue]=Te=new Ae(l)),y=Te.add(p,y,E,Z,z),y.proxy)return y;if(E=_s(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)O||(j=Z),j===void 0&&(j=!1),l.addEventListener(p.toString(),E,j);else if(l.attachEvent)l.attachEvent(vs(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function _s(){function l(y){return p.call(l.src,l.listener,y)}const p=ll;return l}function No(l,p,y,E,j){if(Array.isArray(p))for(var z=0;z<p.length;z++)No(l,p[z],y,E,j);else E=m(E)?!!E.capture:!!E,y=bo(y),l&&l[_t]?(l=l.i,z=String(p).toString(),z in l.g&&(p=l.g[z],y=Pe(p,y,E,j),y>-1&&(ee(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[z],l.h--)))):l&&(l=ws(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Pe(p,y,E,j)),(y=l>-1?p[l]:null)&&Vr(y))}function Vr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Re(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(vs(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=ws(p))?(Re(y,l),y.h==0&&(y.src=null,p[Ue]=null)):ee(l)}}}function vs(l){return l in Le?Le[l]:Le[l]="on"+l}function ll(l,p){if(l.da)l=!0;else{p=new He(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Vr(l),l=y.call(E,p)}return l}function ws(l){return l=l[Ue],l instanceof Ae?l:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(l){return typeof l=="function"?l:(l[Ri]||(l[Ri]=function(p){return l.handleEvent(p)}),l[Ri])}function ut(){D.call(this),this.i=new Ae(this),this.M=this,this.G=null}A(ut,D),ut.prototype[_t]=!0,ut.prototype.removeEventListener=function(l,p,y,E){No(this,l,p,y,E)};function st(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var j=p;p=new N(E,l),ke(p,j)}j=!0;let z,Z;if(y)for(Z=y.length-1;Z>=0;Z--)z=p.g=y[Z],j=wn(z,E,!0,p)&&j;if(z=p.g=l,j=wn(z,E,!0,p)&&j,j=wn(z,E,!1,p)&&j,y)for(Z=0;Z<y.length;Z++)z=p.g=y[Z],j=wn(z,E,!1,p)&&j}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)ee(y[E]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ut.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function wn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let j=!0;for(let z=0;z<p.length;++z){const Z=p[z];if(Z&&!Z.da&&Z.capture==y){const Te=Z.listener,ot=Z.ha||Z.src;Z.fa&&Re(l.i,Z),j=Te.call(ot,E)!==!1&&j}}return j&&!E.defaultPrevented}function Do(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class ul extends D{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){D.call(this),this.h=l,this.g={}}A(Or,D);var Oo=[];function Es(l){ce(l.g,function(p,y){this.g.hasOwnProperty(y)&&Vr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),Es(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=h.JSON.stringify,cl=h.JSON.parse,Pi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function hl(){}var jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ts(){N.call(this,"d")}A(Ts,N);function Lo(){N.call(this,"c")}A(Lo,N);var En={},Is=null;function Fr(){return Is=Is||new ut}En.Ia="serverreachability";function Ss(l){N.call(this,En.Ia,l)}A(Ss,N);function sr(l){const p=Fr();st(p,new Ss(p))}En.STAT_EVENT="statevent";function or(l,p){N.call(this,En.STAT_EVENT,l),this.stat=p}A(or,N);function rt(l){const p=Fr();st(p,new or(p,l))}En.Ja="timingevent";function Mo(l,p){N.call(this,En.Ja,l),this.size=p}A(Mo,N);function Ur(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function zr(){this.g=!0}zr.prototype.ua=function(){this.g=!1};function dl(l,p,y,E,j,z){l.info(function(){if(l.g)if(z){var Z="",Te=z.split("&");for(let Be=0;Be<Te.length;Be++){var ot=Te[Be].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const rn=ct.split("_");Z=rn.length>=2&&rn[1]=="type"?Z+(ct+"="+ot+"&"):Z+(ct+"=redacted&")}}}else Z=null;else Z=z;return"XMLHTTP REQ ("+E+") [attempt "+j+"]: "+p+`
`+y+`
`+Z})}function fl(l,p,y,E,j,z,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+j+"]: "+p+`
`+y+`
`+z+" "+Z})}function Vn(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ni(l,y)+(E?" "+E:"")})}function pl(l,p){l.info(function(){return"TIMEOUT: "+p})}zr.prototype.info=function(){};function Ni(l,p){if(!l.g)return p;if(!p)return null;try{const z=JSON.parse(p);if(z){for(l=0;l<z.length;l++)if(Array.isArray(z[l])){var y=z[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var j=E[0];if(j!="noop"&&j!="stop"&&j!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return Lr(z)}catch{return p}}var Br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$r={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ml;function ar(){}A(ar,Mr),ar.prototype.g=function(){return new XMLHttpRequest},ml=new ar;function On(l){return encodeURIComponent(String(l))}function ks(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function un(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gl}function gl(){this.i=null,this.g="",this.h=!1}var yl={},jo={};function Tn(l,p,y){l.M=1,l.A=ur(cn(p)),l.u=y,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),bi(l),l.B=cn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Qo(y.i,"t",E),l.C=0,y=l.j.L,l.h=new gl,l.g=xl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new ul(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var j="readystatechange";Array.isArray(j)||(j&&(Oo[0]=j.toString()),j=Oo);for(let z=0;z<j.length;z++){const Z=$e(y,j[z],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),dl(l.i,l.v,l.B,l.l,l.S,l.u)}un.prototype.ba=function(l){l=l.target;const p=this.O;p&&Bn(l)==3?p.j():this.Y(l)},un.prototype.Y=function(l){try{if(l==this.g)e:{const Te=Bn(this.g),ot=this.g.ya(),Be=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||kl(this.g)))){this.K||Te!=4||ot==7||(ot==8||Be<=0?sr(3):sr(2)),As(this);var p=this.g.ca();this.X=p;var y=_l(this);if(this.o=p==200,fl(this.i,this.v,this.B,this.l,this.S,Te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,j=this.g;if((E=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(E)){var z=E;break t}}z=null}if(l=z)Vn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,rt(12),lr(this),Di(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<y.length;)if(ct=wl(this,y),ct==jo){Te==4&&(this.m=4,rt(14),l=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==yl){this.m=4,rt(15),Vn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Vn(this.i,this.l,ct,null),Ge(this,ct);if(vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||y.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)Vn(this.i,this.l,y,"[Invalid Chunked Response]"),lr(this),Di(this);else if(y.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Bi(Z),Z.P=!0,rt(11))}}else Vn(this.i,this.l,y,null),Ge(this,y);Te==4&&lr(this),this.o&&!this.K&&(Te==4?Ls(this.j,this):(this.o=!1,bi(this)))}else Jo(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),lr(this),Di(this)}}}catch{}finally{}};function _l(l){if(!vl(l))return l.g.la();const p=kl(l.g);if(p==="")return"";let y="";const E=p.length,j=Bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Di(l),"";l.h.i=new h.TextDecoder}for(let z=0;z<E;z++)l.h.h=!0,y+=l.h.i.decode(p[z],{stream:!(j&&z==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function vl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function wl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?jo:(y=Number(p.substring(y,E)),isNaN(y)?yl:(E+=1,E+y>p.length?jo:(p=p.slice(E,E+y),l.C=E+y,p)))}un.prototype.cancel=function(){this.K=!0,lr(this)};function bi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ur(_(l.aa,l),p)}function As(l){l.D&&(h.clearTimeout(l.D),l.D=null)}un.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(pl(this.i,this.B),this.M!=2&&(sr(),rt(17)),lr(this),this.m=2,Di(this)):Uo(this,this.T-l)};function Di(l){l.j.I==0||l.K||Ls(l.j,l)}function lr(l){As(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Es(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||Bo(y.h,l))){if(!l.L&&Bo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var j=E;if(j[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Os(y),tn(y);else break e;Hn(y),rt(18)}}else y.xa=j[1],0<y.xa-y.K&&j[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Ur(_(y.Va,y),6e3));Vi(y.h)<=1&&y.ta&&(y.ta=void 0)}else nn(y,11)}else if((l.L||y.g==l)&&Os(y),!x(p))for(j=y.Ba.g.parse(p),p=0;p<j.length;p++){let Be=j[p];const ct=Be[0];if(!(ct<=y.K))if(y.K=ct,Be=Be[1],y.I==2)if(Be[0]=="c"){y.M=Be[1],y.ba=Be[2];const rn=Be[3];rn!=null&&(y.ka=rn,y.j.info("VER="+y.ka));const pr=Be[4];pr!=null&&(y.za=pr,y.j.info("SVER="+y.za));const qn=Be[5];qn!=null&&typeof qn=="number"&&qn>0&&(E=1.5*qn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Gn=l.g;if(Gn){const Fs=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var z=E.h;z.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Cs(z,z.h),z.h=null))}if(E.G){const ea=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;ea&&(E.wa=ea,Fe(E.J,E.G,ea))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var Z=l;if(E.na=Zo(E,E.L?E.ba:null,E.W),Z.L){Oi(E.h,Z);var Te=Z,ot=E.O;ot&&(Te.H=ot),Te.D&&(As(Te),bi(Te)),E.g=Z}else bt(E);y.i.length>0&&fr(y)}else Be[0]!="stop"&&Be[0]!="close"||nn(y,7);else y.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?nn(y,7):Ds(y):Be[0]!="noop"&&y.l&&y.l.qa(Be),y.A=0)}}sr(4)}catch{}}var Sc=class{constructor(l,p){this.g=l,this.map=p}};function xs(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Vi(l){return l.h?1:l.g?l.g.size:0}function Bo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Cs(l,p){l.g?l.g.add(p):l.h=p}function Oi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}xs.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return M(l.i)}var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zt(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let j,z=null;E>=0?(j=l[y].substring(0,E),z=l[y].substring(E+1)):j=l[y],p(j,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ln?(this.l=l.l,Li(this,l.j),this.o=l.o,this.g=l.g,Mn(this,l.u),this.h=l.h,Wr(this,Yo(l.i)),this.m=l.m):l&&(p=String(l).match(El))?(this.l=!1,Li(this,p[1]||"",!0),this.o=Mi(p[2]||""),this.g=Mi(p[3]||"",!0),Mn(this,p[4]),this.h=Mi(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=Mi(p[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}Ln.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(ji(p,Wo,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(ji(p,Wo,!0),"@"),l.push(On(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(ji(y,y.charAt(0)=="/"?Fi:Ho,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",ji(y,qo)),l.join("")},Ln.prototype.resolve=function(l){const p=cn(this);let y=!!l.j;y?Li(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)Mn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var j=p.h.lastIndexOf("/");j!=-1&&(E=p.h.slice(0,j+1)+E)}if(j=E,j==".."||j==".")E="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){E=j.lastIndexOf("/",0)==0,j=j.split("/");const z=[];for(let Z=0;Z<j.length;){const Te=j[Z++];Te=="."?E&&Z==j.length&&z.push(""):Te==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),E&&Z==j.length&&z.push("")):(z.push(Te),E=!0)}E=z.join("/")}else E=j}return y?p.h=E:y=l.i.toString()!=="",y?Wr(p,Yo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function cn(l){return new Ln(l)}function Li(l,p,y){l.j=y?Mi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Mn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Wr(l,p,y){p instanceof Ve?(l.i=p,Ps(l.i,l.l)):(y||(p=ji(p,kc)),l.i=new Ve(p,l.l))}function Fe(l,p,y){l.i.set(p,y)}function ur(l){return Fe(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Mi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ji(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,$o),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $o(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Wo=/[#\/\?@]/g,Ho=/[#\?:]/g,Fi=/[#\?]/g,kc=/[#\?@]/g,qo=/#/g;function Ve(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function jn(l){l.g||(l.g=new Map,l.h=0,l.i&&Zt(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}i=Ve.prototype,i.add=function(l,p){jn(this),this.i=null,l=Fn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Go(l,p){jn(l),p=Fn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Rs(l,p){return jn(l),p=Fn(l,p),l.g.has(p)}i.forEach=function(l,p){jn(this),this.g.forEach(function(y,E){y.forEach(function(j){l.call(p,j,E,this)},this)},this)};function Ko(l,p){jn(l);let y=[];if(typeof p=="string")Rs(l,p)&&(y=y.concat(l.g.get(Fn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}i.set=function(l,p){return jn(this),this.i=null,l=Fn(this,l),Rs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Ko(this,l),l.length>0?String(l[0]):p):p};function Qo(l,p,y){Go(l,p),y.length>0&&(l.i=null,l.g.set(Fn(l,p),M(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const j=On(y);y=Ko(this,y);for(let z=0;z<y.length;z++){let Z=j;y[z]!==""&&(Z+="="+On(y[z])),l.push(Z)}}return this.i=l.join("&")};function Yo(l){const p=new Ve;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Fn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ps(l,p){p&&!l.j&&(jn(l),l.i=null,l.g.forEach(function(y,E){const j=E.toLowerCase();E!=j&&(Go(this,E),Qo(this,j,y))},l)),l.j=p}function Un(l,p){const y=new zr;if(h.Image){const E=new Image;E.onload=T(St,y,"TestLoadImage: loaded",!0,p,E),E.onerror=T(St,y,"TestLoadImage: error",!1,p,E),E.onabort=T(St,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=T(St,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function zn(l,p){const y=new zr,E=new AbortController,j=setTimeout(()=>{E.abort(),St(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(j),z.ok?St(y,"TestPingServer: ok",!0,p):St(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(j),St(y,"TestPingServer: error",!1,p)})}function St(l,p,y,E,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),E(y)}catch{}}function Ui(){this.g=new Pi}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(cr,Mr),cr.prototype.g=function(){return new en(this.i,this.h)};function en(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(en,ut),i=en.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):In(this),this.readyState==3&&Tl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,In(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(en.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Il(l){let p="";return ce(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Ns(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Il(y),typeof l=="string"?y!=null&&On(y):Fe(l,p,y))}function We(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(We,ut);var Sl=/^https?$/i,Ac=["POST","PUT"];i=We.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ml.g(),this.g.onreadystatechange=C(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(z){qr(this,z);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var j in E)y.set(j,E[j]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),j=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Ac,p,void 0)>=0)||E||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(z){qr(this,z)}};function qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Gr(l),dr(l)}function Gr(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),We.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&Bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const z=l.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=z===0){let Z=String(l.D).match(El)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!Sl.test(Z?Z.toLowerCase():"")}y=E}if(y)st(l,"complete"),st(l,"success");else{l.o=6;try{var j=Bn(l)>2?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.ca()+"]",Gr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||st(l,"ready");try{y.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),cl(p)}};function kl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(l){const p={};l=(l.g&&Bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(x(l[E]))continue;var y=ks(l[E]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[j]||[];p[j]=z,z.push(y)}re(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function bs(l){this.za=0,this.i=[],this.j=new zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,l),this.Za=$n("retryDelaySeedMs",1e4,l),this.Ta=$n("forwardChannelMaxRetries",2,l),this.va=$n("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new xs(l&&l.concurrentRequestLimit),this.Ba=new Ui,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=bs.prototype,i.ka=8,i.I=1,i.connect=function(l,p,y,E){rt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=Zo(this,null,this.W),fr(this)};function Ds(l){if(Vs(l),l.I==3){var p=l.V++,y=cn(l.J);if(Fe(y,"SID",l.M),Fe(y,"RID",p),Fe(y,"TYPE","terminate"),Wn(l,y),p=new un(l,l.j,p),p.M=2,p.A=ur(cn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=xl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),bi(p)}$i(l)}function tn(l){l.g&&(Bi(l),l.g.cancel(),l.g=null)}function Vs(l){tn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Os(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!zo(l.h)&&!l.m){l.m=!0;var p=l.Ea;ve||I(),ge||(ve(),ge=!0),R.add(p,l),l.D=0}}function Al(l,p){return Vi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ur(_(l.Ea,l,p),Ms(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const j=new un(this,this.j,l);let z=this.o;if(this.U&&(z?(z=V(z),ke(z,this.U)):z=this.U),this.u!==null||this.R||(j.J=z,z=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Xo(this,j,p),y=cn(this.J),Fe(y,"RID",l),Fe(y,"CVER",22),this.G&&Fe(y,"X-HTTP-Session-Id",this.G),Wn(this,y),z&&(this.R?p="headers="+On(Il(z))+"&"+p:this.u&&Ns(y,this.u,z)),Cs(this.h,j),this.Ra&&Fe(y,"TYPE","init"),this.S?(Fe(y,"$req",p),Fe(y,"SID","null"),j.U=!0,Tn(j,y,null)):Tn(j,y,p),this.I=2}}else this.I==3&&(l?zi(this,l):this.i.length==0||zo(this.h)||zi(this))};function zi(l,p){var y;p?y=p.l:y=l.V++;const E=cn(l.J);Fe(E,"SID",l.M),Fe(E,"RID",y),Fe(E,"AID",l.K),Wn(l,E),l.u&&l.o&&Ns(E,l.u,l.o),y=new un(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Xo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Cs(l.h,y),Tn(y,E,p)}function Wn(l,p){l.H&&ce(l.H,function(y,E){Fe(p,E,y)}),l.l&&ce({},function(y,E){Fe(p,E,y)})}function Xo(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var j=l.i;let Te=-1;for(;;){const ot=["count="+y];Te==-1?y>0?(Te=j[0].g,ot.push("ofs="+Te)):Te=0:ot.push("ofs="+Te);let Be=!0;for(let ct=0;ct<y;ct++){var z=j[ct].g;const rn=j[ct].map;if(z-=Te,z<0)Te=Math.max(0,j[ct].g-100),Be=!1;else try{z="req"+z+"_"||"";try{var Z=rn instanceof Map?rn:Object.entries(rn);for(const[pr,qn]of Z){let Gn=qn;m(qn)&&(Gn=Lr(qn)),ot.push(z+pr+"="+encodeURIComponent(Gn))}}catch(pr){throw ot.push(z+"type="+encodeURIComponent("_badmap")),pr}}catch{E&&E(rn)}}if(Be){Z=ot.join("&");break e}}Z=void 0}return l=l.i.splice(0,y),p.G=l,Z}function bt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;ve||I(),ge||(ve(),ge=!0),R.add(p,l),l.A=0}}function Hn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ur(_(l.Da,l),Ms(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Kr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ur(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),tn(this),Kr(this))};function Bi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Kr(l){l.g=new un(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=cn(l.na);Fe(p,"RID","rpc"),Fe(p,"SID",l.M),Fe(p,"AID",l.K),Fe(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Fe(p,"TO",l.ia),Fe(p,"TYPE","xmlhttp"),Wn(l,p),l.u&&l.o&&Ns(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=ur(cn(p)),y.u=null,y.R=!0,Fo(y,l)}i.Va=function(){this.C!=null&&(this.C=null,tn(this),Hn(this),rt(19))};function Os(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ls(l,p){var y=null;if(l.g==p){Os(l),Bi(l),l.g=null;var E=2}else if(Bo(l.h,p))y=p.G,Oi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var j=l.D;E=Fr(),st(E,new Mo(E,y)),fr(l)}else bt(l);else if(j=p.m,j==3||j==0&&p.X>0||!(E==1&&Al(l,p)||E==2&&Hn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),j){case 1:nn(l,5);break;case 4:nn(l,10);break;case 3:nn(l,6);break;default:nn(l,2)}}}function Ms(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function nn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const j=!E;E=new Ln(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Li(E,"https"),ur(E),j?Un(E.toString(),y):zn(E.toString(),y)}else rt(2);l.I=0,l.l&&l.l.pa(p),$i(l),Vs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function $i(l){if(l.I=0,l.ja=[],l.l){const p=Xt(l.h);(p.length!=0||l.i.length!=0)&&(Q(l.ja,p),Q(l.ja,l.i),l.h.i.length=0,M(l.i),l.i.length=0),l.l.oa()}}function Zo(l,p,y){var E=y instanceof Ln?cn(y):new Ln(y);if(E.g!="")p&&(E.g=p+"."+E.g),Mn(E,E.u);else{var j=h.location;E=j.protocol,p=p?p+"."+j.hostname:j.hostname,j=+j.port;const z=new Ln(null);E&&Li(z,E),p&&(z.g=p),j&&Mn(z,j),y&&(z.h=y),E=z}return y=l.G,p=l.wa,y&&p&&Fe(E,y,p),Fe(E,"VER",l.ka),Wn(l,E),E}function xl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new We(new cr({ab:y})):new We(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cl(){}i=Cl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function js(){}js.prototype.g=function(l,p){return new kt(l,p)};function kt(l,p){ut.call(this),this.g=new bs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!x(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!x(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Qr(this)}A(kt,ut),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ds(this.g)},kt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Lr(l),l=y);p.i.push(new Sc(p.Ya++,l)),p.I==3&&fr(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ds(this.g),delete this.g,kt.Z.N.call(this)};function Rl(l){Ts.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(Rl,Ts);function Pl(){Lo.call(this),this.status=1}A(Pl,Lo);function Qr(l){this.g=l}A(Qr,Cl),Qr.prototype.ra=function(){st(this.g,"a")},Qr.prototype.qa=function(l){st(this.g,new Rl(l))},Qr.prototype.pa=function(l){st(this.g,new Pl)},Qr.prototype.oa=function(){st(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,e_=function(){return new js},Zy=function(){return Fr()},Xy=En,gd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,Nu=Br,$r.COMPLETE="complete",Jy=$r,hl.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Ra=hl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,Yy=We}).apply(typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="12.11.0";function p1(i){ko=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new jd("@firebase/firestore");function oo(){return ls.logLevel}function ne(i,...e){if(ls.logLevel<=Ne.DEBUG){const t=e.map(zd);ls.debug(`Firestore (${ko}): ${i}`,...t)}}function Rr(i,...e){if(ls.logLevel<=Ne.ERROR){const t=e.map(zd);ls.error(`Firestore (${ko}): ${i}`,...t)}}function us(i,...e){if(ls.logLevel<=Ne.WARN){const t=e.map(zd);ls.warn(`Firestore (${ko}): ${i}`,...t)}}function zd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,t_(i,s,t)}function t_(i,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||t_(e,o,s)}function Ie(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class g1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class y1{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new vi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new vi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new n_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class _1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class v1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new _1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new og(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new og(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=E1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function be(i,e){return i<e?-1:i>e?1:0}function yd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return rd(o)===rd(u)?be(o,u):rd(o)?1:-1}return be(i.length,e.length)}const T1=55296,I1=57343;function rd(i){const e=i.charCodeAt(0);return e>=T1&&e<=I1}function _o(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return be(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):yd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class tt extends Xn{construct(e,t,s){return new tt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const S1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Xn{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return S1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ag}static keyField(){return new Rt([ag])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ue(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ue(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(tt.fromString(e))}static fromName(e){return new fe(tt.fromString(e).popFirst(5))}static empty(){return new fe(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new tt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(i,e,t){if(!t)throw new ue(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function A1(i,e,t,s){if(e===!0&&s===!0)throw new ue(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function lg(i){if(!fe.isDocumentKey(i))throw new ue(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function r_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function $d(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Ua(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ue(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$d(i);throw new ue(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(i,e){const t={typeString:i};return e&&(t.value=e),t}function Xa(i,e){if(!r_(i))throw new ue(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ue(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=-62135596800,cg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*cg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ug)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cg}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xa(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ft("string",Ye._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ye(0,0))}static max(){return new Ee(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=-1;function x1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ei(o,fe.empty(),e)}function C1(i){return new Ei(i.readTime,i.key,za)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(Ee.min(),fe.empty(),za)}static max(){return new Ei(Ee.max(),fe.empty(),za)}}function R1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:be(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==P1)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((o=>o?B.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((T=>{h[_]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new B(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function b1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}uc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=-1;function cc(i){return i==null}function $u(i){return i===0&&1/i==-1/0}function D1(i){return typeof i=="number"&&Number.isInteger(i)&&!$u(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="";function V1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=hg(e)),e=O1(i.get(t),e);return hg(e)}function O1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case i_:t+="";break;default:t+=u}}return t}function hg(i){return i+i_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function fs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function s_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ku(this.root,e,this.comparator,!0)}}class ku{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fg(this.data.getIterator())}getIteratorFrom(e){return new fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new yt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new o_("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const L1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=L1.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(i.seconds),nanos:lt(i.nanos)}}function lt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ii(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="server_timestamp",l_="__type__",u_="__previous_value__",c_="__local_write_time__";function Hd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[l_])==null?void 0:s.stringValue)===a_}function hc(i){const e=i.mapValue.fields[u_];return Hd(e)?hc(e):e}function Ba(i){const e=Ti(i.mapValue.fields[c_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,t,s,o,u,h,m,g,_,T,A){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T,this.apiKey=A}}const Wu="(default)";class $a{constructor(e,t){this.projectId=e,this.database=t||Wu}static empty(){return new $a("","")}get isDefaultDatabase(){return this.database===Wu}isEqual(e){return e instanceof $a&&e.projectId===this.projectId&&e.database===this.database}}function j1(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ue(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(i.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="__type__",F1="__max__",Au={mapValue:{}},d_="__vector__",Hu="value";function Si(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Hd(i)?4:z1(i)?9007199254740991:U1(i)?10:11:_e(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=Si(i);if(t!==Si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ba(i).isEqual(Ba(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ti(o.timestampValue),m=Ti(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ii(o.bytesValue).isEqual(Ii(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?$u(h)===$u(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return _o(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(dg(h)!==dg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!rr(h[g],m[g])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Wa(i,e){return(i.values||[]).find((t=>rr(t,e)))!==void 0}function vo(i,e){if(i===e)return 0;const t=Si(i),s=Si(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return pg(i.timestampValue,e.timestampValue);case 4:return pg(Ba(i),Ba(e));case 5:return yd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ii(u),g=Ii(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const T=be(m[_],g[_]);if(T!==0)return T}return be(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=be(lt(u.latitude),lt(h.latitude));return m!==0?m:be(lt(u.longitude),lt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return mg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var C,M,Q,J;const m=u.fields||{},g=h.fields||{},_=(C=m[Hu])==null?void 0:C.arrayValue,T=(M=g[Hu])==null?void 0:M.arrayValue,A=be(((Q=_==null?void 0:_.values)==null?void 0:Q.length)||0,((J=T==null?void 0:T.values)==null?void 0:J.length)||0);return A!==0?A:mg(_,T)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Au.mapValue&&h===Au.mapValue)return 0;if(u===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let A=0;A<g.length&&A<T.length;++A){const C=yd(g[A],T[A]);if(C!==0)return C;const M=vo(m[g[A]],_[T[A]]);if(M!==0)return M}return be(g.length,T.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function pg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return be(i,e);const t=Ti(i),s=Ti(e),o=be(t.seconds,s.seconds);return o!==0?o:be(t.nanos,s.nanos)}function mg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=vo(t[o],s[o]);if(u)return u}return be(t.length,s.length)}function wo(i){return _d(i)}function _d(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ti(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ii(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=_d(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${_d(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function bu(i){switch(Si(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hc(i);return e?16+bu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ii(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+bu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return fs(s.fields,((u,h)=>{o+=u.length+bu(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function vd(i){return!!i&&"integerValue"in i}function qd(i){return!!i&&"arrayValue"in i}function gg(i){return!!i&&"nullValue"in i}function yg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Du(i){return!!i&&"mapValue"in i}function U1(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[h_])==null?void 0:s.stringValue)===d_}function Da(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return fs(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Da(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(i.arrayValue.values[t]);return e}return{...i}}function z1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===F1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Da(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){fs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new yn(Da(this.value))}}function f_(i){const e=[];return fs(i.fields,((t,s)=>{const o=new Rt([t]);if(Du(s)){const u=f_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,Ee.min(),Ee.min(),Ee.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ee.min(),Ee.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ee.min(),Ee.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.position=e,this.inclusive=t}}function _g(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=vo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function vg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t="asc"){this.field=e,this.dir=t}}function B1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{}class gt extends p_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new W1(e,t,s):t==="array-contains"?new G1(e,s):t==="in"?new K1(e,s):t==="not-in"?new Q1(e,s):t==="array-contains-any"?new Y1(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new H1(e,s):new q1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vo(t,this.value)):t!==null&&Si(this.value)===Si(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends p_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ir(e,t)}matches(e){return m_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function m_(i){return i.op==="and"}function g_(i){return $1(i)&&m_(i)}function $1(i){for(const e of i.filters)if(e instanceof ir)return!1;return!0}function wd(i){if(i instanceof gt)return i.field.canonicalString()+i.op.toString()+wo(i.value);if(g_(i))return i.filters.map((e=>wd(e))).join(",");{const e=i.filters.map((t=>wd(t))).join(",");return`${i.op}(${e})`}}function y_(i,e){return i instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)})(i,e):i instanceof ir?(function(s,o){return o instanceof ir&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&y_(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function __(i){return i instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(i):i instanceof ir?(function(t){return t.op.toString()+" {"+t.getFilters().map(__).join(" ,")+"}"})(i):"Filter"}class W1 extends gt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class H1 extends gt{constructor(e,t){super(e,"in",t),this.keys=v_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class q1 extends gt{constructor(e,t){super(e,"not-in",t),this.keys=v_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function v_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class G1 extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&Wa(t.arrayValue,this.value)}}class K1 extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wa(this.value.arrayValue,t)}}class Q1 extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wa(this.value.arrayValue,t)}}class Y1 extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Wa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function wg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new J1(i,e,t,s,o,u,h)}function Gd(i){const e=Ie(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>wd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),cc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function Kd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!B1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!y_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!vg(i.startAt,e.startAt)&&vg(i.endAt,e.endAt)}function Ed(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function X1(i,e,t,s,o,u,h,m){return new dc(i,e,t,s,o,u,h,m)}function Qd(i){return new dc(i)}function Eg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Z1(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function eI(i){return i.collectionGroup!==null}function Va(i){const e=Ie(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Rt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Gu(u,s))})),t.has(Rt.keyField().canonicalString())||e.Ee.push(new Gu(Rt.keyField(),s))}return e.Ee}function Zn(i){const e=Ie(i);return e.Ie||(e.Ie=tI(e,Va(i))),e.Ie}function tI(i,e){if(i.limitType==="F")return wg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Gu(o.field,u)}));const t=i.endAt?new qu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new qu(i.startAt.position,i.startAt.inclusive):null;return wg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Td(i,e,t){return new dc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function fc(i,e){return Kd(Zn(i),Zn(e))&&i.limitType===e.limitType}function w_(i){return`${Gd(Zn(i))}|lt:${i.limitType}`}function ao(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>__(o))).join(", ")}]`),cc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${s})`})(Zn(i))}; limitType=${i.limitType})`}function pc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Va(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=_g(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Va(s),o)||s.endAt&&!(function(h,m,g){const _=_g(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Va(s),o))})(i,e)}function nI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function E_(i){return(e,t)=>{let s=!1;for(const o of Va(i)){const u=rI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function rI(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?vo(g,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return s_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new nt(fe.comparator);function Pr(){return iI}const T_=new nt(fe.comparator);function Pa(...i){let e=T_;for(const t of i)e=e.insert(t.key,t);return e}function I_(i){let e=T_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return Oa()}function S_(){return Oa()}function Oa(){return new ps((i=>i.toString()),((i,e)=>i.isEqual(e)))}const sI=new nt(fe.comparator),oI=new yt(fe.comparator);function De(...i){let e=oI;for(const t of i)e=e.add(t);return e}const aI=new yt(be);function lI(){return aI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$u(e)?"-0":e}}function k_(i){return{integerValue:""+i}}function uI(i,e){return D1(e)?k_(e):Yd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this._=void 0}}function cI(i,e,t){return i instanceof Ku?(function(o,u){const h={fields:{[l_]:{stringValue:a_},[c_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hd(u)&&(u=hc(u)),u&&(h.fields[u_]=u),{mapValue:h}})(t,e):i instanceof Ha?x_(i,e):i instanceof qa?C_(i,e):(function(o,u){const h=A_(o,u),m=Tg(h)+Tg(o.Ae);return vd(h)&&vd(o.Ae)?k_(m):Yd(o.serializer,m)})(i,e)}function hI(i,e,t){return i instanceof Ha?x_(i,e):i instanceof qa?C_(i,e):t}function A_(i,e){return i instanceof Qu?(function(s){return vd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ku extends mc{}class Ha extends mc{constructor(e){super(),this.elements=e}}function x_(i,e){const t=R_(e);for(const s of i.elements)t.some((o=>rr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class qa extends mc{constructor(e){super(),this.elements=e}}function C_(i,e){let t=R_(e);for(const s of i.elements)t=t.filter((o=>!rr(o,s)));return{arrayValue:{values:t}}}class Qu extends mc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Tg(i){return lt(i.integerValue||i.doubleValue)}function R_(i){return qd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function dI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ha&&o instanceof Ha||s instanceof qa&&o instanceof qa?_o(s.elements,o.elements,rr):s instanceof Qu&&o instanceof Qu?rr(s.Ae,o.Ae):s instanceof Ku&&o instanceof Ku})(i.transform,e.transform)}class fI{constructor(e,t){this.version=e,this.transformResults=t}}class Ar{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ar}static exists(e){return new Ar(void 0,e)}static updateTime(e){return new Ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class gc{}function P_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new b_(i.key,Ar.none()):new Za(i.key,i.data,Ar.none());{const t=i.data,s=yn.empty();let o=new yt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ms(i.key,s,new Pn(o.toArray()),Ar.none())}}function pI(i,e,t){i instanceof Za?(function(o,u,h){const m=o.value.clone(),g=Sg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ms?(function(o,u,h){if(!Vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Sg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(N_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function La(i,e,t,s){return i instanceof Za?(function(u,h,m,g){if(!Vu(u.precondition,h))return m;const _=u.value.clone(),T=kg(u.fieldTransforms,g,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ms?(function(u,h,m,g){if(!Vu(u.precondition,h))return m;const _=kg(u.fieldTransforms,g,h),T=h.data;return T.setAll(N_(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function mI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=A_(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function Ig(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&_o(s,o,((u,h)=>dI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Za extends gc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ms extends gc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function N_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Sg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,hI(h,m,t[o]))}return s}function kg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,cI(u,h,e))}return s}class b_ extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gI extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&pI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=S_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=P_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((t,s)=>Ig(t,s)))&&_o(this.baseMutations,e.baseMutations,((t,s)=>Ig(t,s)))}}class Jd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return sI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Jd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Oe;function wI(i){switch(i){case G.OK:return _e(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function D_(i){if(i===void 0)return Rr("GRPC error has no .code"),G.UNKNOWN;switch(i){case dt.OK:return G.OK;case dt.CANCELLED:return G.CANCELLED;case dt.UNKNOWN:return G.UNKNOWN;case dt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case dt.INTERNAL:return G.INTERNAL;case dt.UNAVAILABLE:return G.UNAVAILABLE;case dt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case dt.NOT_FOUND:return G.NOT_FOUND;case dt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case dt.ABORTED:return G.ABORTED;case dt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case dt.DATA_LOSS:return G.DATA_LOSS;default:return _e(39323,{code:i})}}(Oe=dt||(dt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new _i([4294967295,4294967295],0);function Ag(i){const e=EI().encode(i),t=new Qy;return t.update(e),new Uint8Array(t.digest())}function xg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new _i([t,s],0),new _i([o,u],0)]}class Xd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=_i.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(_i.fromNumber(s)));return o.compare(TI)===1&&(o=new _i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ag(e),[s,o]=xg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Xd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Ag(e),[s,o]=xg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yc(Ee.min(),o,new nt(be),Pr(),De())}}class el{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new el(s,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class V_{constructor(e,t){this.targetId=e,this.Ce=t}}class O_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Cg{constructor(){this.ve=0,this.Fe=Rg(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=De(),t=De(),s=De();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new el(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Rg()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class II{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=xu(),this.He=xu(),this.Ze=new nt(be)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Ed(u))if(s===0){const h=new fe(u.path);this.et(t,h,Ft.newNoDocument(h,Ee.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ii(s).toUint8Array()}catch(g){if(g instanceof o_)return us("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Xd(h,o,u)}catch(g){return us(g instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Ed(m.target)){const g=new fe(m.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,Ft.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=De();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new yc(e,t,this.Ze,this.je,s);return this.je=Pr(),this.Je=xu(),this.He=xu(),this.Ze=new nt(be),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Cg,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new yt(be),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new yt(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function xu(){return new nt(fe.comparator)}function Rg(){return new nt(fe.comparator)}const SI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AI={and:"AND",or:"OR"};class xI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Id(i,e){return i.useProto3Json||cc(e)?e:{value:e}}function Yu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function CI(i,e){return Yu(i,e.toTimestamp())}function er(i){return ze(!!i,49232),Ee.fromTimestamp((function(t){const s=Ti(t);return new Ye(s.seconds,s.nanos)})(i))}function Zd(i,e){return Sd(i,e).canonicalString()}function Sd(i,e){const t=(function(o){return new tt(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function M_(i){const e=tt.fromString(i);return ze(B_(e),10190,{key:e.toString()}),e}function kd(i,e){return Zd(i.databaseId,e.path)}function id(i,e){const t=M_(e);if(t.get(1)!==i.databaseId.projectId)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(F_(t))}function j_(i,e){return Zd(i.databaseId,e)}function RI(i){const e=M_(i);return e.length===4?tt.emptyPath():F_(e)}function Ad(i){return new tt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function F_(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Pg(i,e,t){return{name:kd(i,e),fields:t.value.mapValue.fields}}function PI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(ze(T===void 0||typeof T=="string",58123),Pt.fromBase64String(T||"")):(ze(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Pt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const T=_.code===void 0?G.UNKNOWN:D_(_.code);return new ue(T,_.message||"")})(h);t=new O_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=id(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):Ee.min(),m=new yn({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,u,h,m),_=s.targetIds||[],T=s.removedTargetIds||[];t=new Ou(_,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=id(i,s.document),u=s.readTime?er(s.readTime):Ee.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ou([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=id(i,s.document),u=s.removedTargetIds||[];t=new Ou([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new vI(o,u),m=s.targetId;t=new V_(m,h)}}return t}function NI(i,e){let t;if(e instanceof Za)t={update:Pg(i,e.key,e.value)};else if(e instanceof b_)t={delete:kd(i,e.key)};else if(e instanceof ms)t={update:Pg(i,e.key,e.data),updateMask:UI(e.fieldMask)};else{if(!(e instanceof gI))return _e(16599,{dt:e.type});t={verify:kd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ku)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Qu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:CI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function bI(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(Ee.min())&&(h=er(u)),new fI(h,o.transformResults||[])})(t,e)))):[]}function DI(i,e){return{documents:[j_(i,e.path)]}}function VI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=j_(i,o);const u=(function(_){if(_.length!==0)return z_(ir.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(C){return{field:lo(C.field),direction:MI(C.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Id(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function OI(i){let e=RI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(A){const C=U_(A);return C instanceof ir&&g_(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((C=>(function(Q){return new Gu(uo(Q.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let C;return C=typeof A=="object"?A.value:A,cc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(A){const C=!!A.before,M=A.values||[];return new qu(M,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const C=!A.before,M=A.values||[];return new qu(M,C)})(t.endAt)),X1(e,o,h,u,m,"F",g,_)}function LI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function U_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=uo(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=uo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=uo(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=uo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return gt.create(uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return ir.create(t.compositeFilter.filters.map((s=>U_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function MI(i){return SI[i]}function jI(i){return kI[i]}function FI(i){return AI[i]}function lo(i){return{fieldPath:i.canonicalString()}}function uo(i){return Rt.fromServerFormat(i.fieldPath)}function z_(i){return i instanceof gt?(function(t){if(t.op==="=="){if(yg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NAN"}};if(gg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NAN"}};if(gg(t.value))return{unaryFilter:{field:lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(t.field),op:jI(t.op),value:t.value}}})(i):i instanceof ir?(function(t){const s=t.getFilters().map((o=>z_(o)));return s.length===1?s[0]:{compositeFilter:{op:FI(t.op),filters:s}}})(i):_e(54877,{filter:i})}function UI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function B_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function $_(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.yt=e}}function BI(i){const e=OI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Td(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.bn=new WI}addToCollectionParentIndex(e,t){return this.bn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Ei.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class WI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(tt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W_=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(W_,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Eo(0)}static ar(){return new Eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="LruGarbageCollector",HI=1048576;function Dg([i,e],[t,s]){const o=be(i,t);return o===0?be(e,s):o}class qI{constructor(e){this.Pr=e,this.buffer=new yt(Dg),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Dg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class GI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ne(bg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xo(t)?ne(bg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Ar(3e5)}))}}class KI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(uc.ce);const s=new qI(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ng)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ng):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,g,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(_=Date.now(),oo()<=Ne.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function QI(i,e){return new KI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.changes=new ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&La(s.mutation,o,Pn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,De()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=De()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Pa();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,De())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Pr();const h=Oa(),m=(function(){return Oa()})();return t.forEach(((g,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof ms)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),La(T.mutation,_,T.mutation.getFieldMask(),Ye.now())):h.set(_.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>m.set(_,new JI(T,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Oa();let o=new nt(((h,m)=>h-m)),u=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let T=s.get(g)||Pn.empty();T=m.applyToLocalView(_,T),s.set(g,T);const A=(o.get(m.batchId)||De()).add(g);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,T=g.value,A=S_();T.forEach((C=>{if(!u.has(C)){const M=P_(t.get(C),s.get(C));M!==null&&A.set(C,M),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return Z1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(rs());let m=za,g=u;return h.next((_=>B.forEach(_,((T,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(T)?B.resolve():this.remoteDocumentCache.getEntry(e,T).next((C=>{g=g.insert(T,C)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,De()))).next((T=>({batchId:m,changes:I_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Pa();return this.indexManager.getCollectionParents(e,u).next((m=>B.forEach(m,(g=>{const _=(function(A,C){return new dc(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((T=>{T.forEach(((A,C)=>{h=h.insert(A,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,Ft.newInvalidDocument(T)))}));let m=Pa();return h.forEach(((g,_)=>{const T=u.get(g);T!==void 0&&La(T.mutation,_,Pn.empty(),Ye.now()),pc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return B.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:BI(o.bundledQuery),readTime:er(o.readTime)}})(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.overlays=new nt(fe.comparator),this.Lr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return B.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=rs(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=rs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,T)=>m.set(_,T))),!(m.size()>=o)););return B.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new _I(t,s));let u=this.Lr.get(t);u===void 0&&(u=De(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.kr=new yt(Tt.qr),this.Kr=new yt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new fe(new tt([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new fe(new tt([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=De();return this.Kr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return fe.comparator(e.key,t.key)||be(e.Jr,t.Jr)}static Ur(e,t){return be(e.Jr,t.Jr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new yt(Tt.qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new yI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Hr=this.Hr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Wd:this.Yn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Jr);u.push(m)})),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(be);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,h],(m=>{s=s.add(m.Jr)}))})),B.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new fe(u),0);let m=new yt(be);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Jr)),!0)}),h),B.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return B.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Hr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.ti=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Pr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Pr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||R1(C1(T),s)<=0||(o.has(T.key)||pc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ni(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new iS(this)}getSize(e){return B.resolve(this.size)}}class iS extends YI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.persistence=e,this.ri=new ps((t=>Gd(t)),Kd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.ii=0,this.si=new ef,this.targetCount=0,this.oi=Eo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),B.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Eo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.lr(t),B.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),B.waitFor(u).next((()=>o))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this._i={},this.overlays={},this.ai=new uc(0),this.ui=!1,this.ui=!0,this.ci=new tS,this.referenceDelegate=e(this),this.li=new sS(this),this.indexManager=new $I,this.remoteDocumentCache=(function(o){return new rS(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new zI(t),this.Pi=new ZI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new nS(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new oS(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,t){return B.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class oS extends N1{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Ri=new ef,this.Ai=null}static Vi(e){return new tf(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,(s=>{const o=fe.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return B.or([()=>B.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Ju{constructor(e,t){this.persistence=e,this.fi=new ps((s=>V1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=QI(this,t)}static Vi(e,t){return new Ju(e,t)}Ti(){}Ei(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return B.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?B.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bu(e.data.value)),t}wr(e,t,s){return B.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=De(),o=De();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new nf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return YE()?8:b1(Ut())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new aS;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(oo()<=Ne.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(oo()<=Ne.DEBUG&&ne("QueryEngine","Query:",ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(oo()<=Ne.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):B.resolve())}gs(e,t){if(Eg(t))return B.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Td(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=De(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,m);return this.bs(t,_,h,g.readTime)?this.gs(e,Td(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return Eg(t)||o.isEqual(Ee.min())?B.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.Ss(t,u);return this.bs(t,h,s,o)?B.resolve(null):(oo()<=Ne.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ao(t)),this.Ds(e,h,t,x1(o,za)).next((m=>m)))}))}Ss(e,t){let s=new yt(E_(e));return t.forEach(((o,u)=>{pc(e,u)&&(s=s.add(u))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return oo()<=Ne.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ao(t)),this.fs.getDocumentsMatchingQuery(e,t,Ei.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="LocalStore",uS=3e8;class cS{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(be),this.Fs=new ps((u=>Gd(u)),Kd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function hS(i,e,t,s){return new cS(i,e,t,s)}async function q_(i,e){const t=Ie(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=De();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function dS(i,e){const t=Ie(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,T){const A=_.batch,C=A.keys();let M=B.resolve();return C.forEach((Q=>{M=M.next((()=>T.getEntry(g,Q))).next((J=>{const K=_.docVersions.get(Q);ze(K!==null,48541),J.version.compareTo(K)<0&&(A.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),T.addEntry(J)))}))})),M.next((()=>m.mutationQueue.removeMutationBatch(g,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=De();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function G_(i){const e=Ie(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function fS(i,e){const t=Ie(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((T,A)=>{const C=o.get(A);if(!C)return;m.push(t.li.removeMatchingKeys(u,T.removedDocuments,A).next((()=>t.li.addMatchingKeys(u,T.addedDocuments,A))));let M=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?M=M.withResumeToken(Pt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):T.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(T.resumeToken,s)),o=o.insert(A,M),(function(J,K,pe){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=uS?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(C,M,T)&&m.push(t.li.updateTargetData(u,M))}));let g=Pr(),_=De();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(pS(u,h,e.documentUpdates).next((T=>{g=T.Bs,_=T.Ls}))),!s.isEqual(Ee.min())){const T=t.li.getLastRemoteSnapshotVersion(u).next((A=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return B.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function pS(i,e,t){let s=De(),o=De();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Pr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(rf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function mS(i,e){const t=Ie(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Wd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function gS(i,e){const t=Ie(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,B.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function xd(i,e,t){const s=Ie(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!xo(h))throw h;ne(rf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Vg(i,e,t){const s=Ie(i);let o=Ee.min(),u=De();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,T){const A=Ie(g),C=A.Fs.get(T);return C!==void 0?B.resolve(A.vs.get(C)):A.li.getTargetData(_,T)})(s,h,Zn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:De()))).next((m=>(yS(s,nI(e),m),{documents:m,ks:u})))))}function yS(i,e,t){let s=i.Ms.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class Og{constructor(){this.activeTargetIds=lI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _S{constructor(){this.vo=new Og,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Og,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="ConnectivityMonitor";class Mg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ne(Lg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ne(Lg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu=null;function Cd(){return Cu===null?Cu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cu++,"0x"+Cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="RestConnection",wS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ES{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Wu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Cd(),m=this.Qo(e,t.toUriEncodedString());ne(sd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),T=Ja(_);return this.zo(e,m,g,s,T).then((A=>(ne(sd,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw us(sd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=wS[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection",Aa=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class co extends ES{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!co.c_){const e=Zy();Aa(e,Xy.STAT_EVENT,(t=>{t.stat===gd.PROXY?ne(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===gd.NOPROXY&&ne(Mt,"STAT_EVENT: detected no buffering proxy")})),co.c_=!0}}zo(e,t,s,o,u){const h=Cd();return new Promise(((m,g)=>{const _=new Yy;_.setWithCredentials(!0),_.listenOnce(Jy.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Nu.NO_ERROR:const A=_.getResponseJson();ne(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Nu.TIMEOUT:ne(Mt,`RPC '${e}' ${h} timed out`),g(new ue(G.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const C=_.getStatus();if(ne(Mt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let M=_.getResponseJson();Array.isArray(M)&&(M=M[0]);const Q=M==null?void 0:M.error;if(Q&&Q.status&&Q.message){const J=(function(pe){const ae=pe.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(ae)>=0?ae:G.UNKNOWN})(Q.status);g(new ue(J,Q.message))}else g(new ue(G.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ue(G.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ne(Mt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ne(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,s,15)}))}T_(e,t,s){const o=Cd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");ne(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const T=h.createWebChannel(_,m);this.E_(T);let A=!1,C=!1;const M=new TS({Jo:Q=>{C?ne(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,Q):(A||(ne(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),ne(Mt,`RPC '${e}' stream ${o} sending:`,Q),T.send(Q))},Ho:()=>T.close()});return Aa(T,Ra.EventType.OPEN,(()=>{C||(ne(Mt,`RPC '${e}' stream ${o} transport opened.`),M.i_())})),Aa(T,Ra.EventType.CLOSE,(()=>{C||(C=!0,ne(Mt,`RPC '${e}' stream ${o} transport closed`),M.o_(),this.I_(T))})),Aa(T,Ra.EventType.ERROR,(Q=>{C||(C=!0,us(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,Q.name,"Message:",Q.message),M.o_(new ue(G.UNAVAILABLE,"The operation could not be completed")))})),Aa(T,Ra.EventType.MESSAGE,(Q=>{var J;if(!C){const K=Q.data[0];ze(!!K,16349);const pe=K,ae=(pe==null?void 0:pe.error)||((J=pe[0])==null?void 0:J.error);if(ae){ne(Mt,`RPC '${e}' stream ${o} received error:`,ae);const me=ae.status;let Se=(function(R){const I=dt[R];if(I!==void 0)return D_(I)})(me),ve=ae.message;me==="NOT_FOUND"&&ve.includes("database")&&ve.includes("does not exist")&&ve.includes(this.databaseId.database)&&us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Se===void 0&&(Se=G.INTERNAL,ve="Unknown error status: "+me+" with message "+ae.message),C=!0,M.o_(new ue(Se,ve)),T.close()}else ne(Mt,`RPC '${e}' stream ${o} received:`,K),M.__(K)}})),co.u_(),setTimeout((()=>{M.s_()}),0),M}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return e_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(i){return new co(i)}function od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(i){return new xI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.c_=!1;class K_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="PersistentStream";class Q_{constructor(e,t,s,o,u,h,m,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new K_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ue(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ne(jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SS extends Q_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=PI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?er(h.readTime):Ee.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Ad(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Ed(g)?{documents:DI(u,g)}:{query:VI(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=L_(u,h.resumeToken);const _=Id(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Yu(u,h.snapshotVersion.toTimestamp());const _=Id(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=LI(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=Ad(this.serializer),t.removeTarget=e,this.q_(t)}}class kS extends Q_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=bI(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ad(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>NI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{}class xS extends AS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Sd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(G.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Sd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(G.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function CS(i,e,t,s){return new xS(i,e,t,s)}class RS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class PS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{gs(this)&&(ne(cs,"Restarting streams for network reachability change."),await(async function(g){const _=Ie(g);_.Ia.add(4),await tl(_),_.Va.set("Unknown"),_.Ia.delete(4),await vc(_)})(this))}))})),this.Va=new RS(s,o)}}async function vc(i){if(gs(i))for(const e of i.Ra)await e(!0)}async function tl(i){for(const e of i.Ra)await e(!1)}function Y_(i,e){const t=Ie(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),lf(t)?af(t):Co(t).O_()&&of(t,e))}function sf(i,e){const t=Ie(i),s=Co(t);t.Ea.delete(e),s.O_()&&J_(t,e),t.Ea.size===0&&(s.O_()?s.L_():gs(t)&&t.Va.set("Unknown"))}function of(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).Z_(e)}function J_(i,e){i.da.$e(e),Co(i).X_(e)}function af(i){i.da=new II({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ea.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Va.ua()}function lf(i){return gs(i)&&!Co(i).x_()&&i.Ea.size>0}function gs(i){return Ie(i).Ia.size===0}function X_(i){i.da=void 0}async function NS(i){i.Va.set("Online")}async function bS(i){i.Ea.forEach(((e,t)=>{of(i,e)}))}async function DS(i,e){X_(i),lf(i)?(i.Va.ha(e),af(i)):i.Va.set("Unknown")}async function VS(i,e,t){if(i.Va.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){ne(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xu(i,s)}else if(e instanceof Ou?i.da.Xe(e):e instanceof V_?i.da.st(e):i.da.tt(e),!t.isEqual(Ee.min()))try{const s=await G_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ea.get(_);T&&u.Ea.set(_,T.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const T=u.Ea.get(g);if(!T)return;u.Ea.set(g,T.withResumeToken(Pt.EMPTY_BYTE_STRING,T.snapshotVersion)),J_(u,g);const A=new pi(T.target,g,_,T.sequenceNumber);of(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(cs,"Failed to raise snapshot:",s),await Xu(i,s)}}async function Xu(i,e,t){if(!xo(e))throw e;i.Ia.add(1),await tl(i),i.Va.set("Offline"),t||(t=()=>G_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(cs,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await vc(i)}))}function Z_(i,e){return e().catch((t=>Xu(i,t,e)))}async function wc(i){const e=Ie(i),t=ki(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wd;for(;OS(e);)try{const o=await mS(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,LS(e,o)}catch(o){await Xu(e,o)}ev(e)&&tv(e)}function OS(i){return gs(i)&&i.Ta.length<10}function LS(i,e){i.Ta.push(e);const t=ki(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function ev(i){return gs(i)&&!ki(i).x_()&&i.Ta.length>0}function tv(i){ki(i).start()}async function MS(i){ki(i).ra()}async function jS(i){const e=ki(i);for(const t of i.Ta)e.ea(t.mutations)}async function FS(i,e,t){const s=i.Ta.shift(),o=Jd.from(s,e,t);await Z_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await wc(i)}async function US(i,e){e&&ki(i).Y_&&await(async function(s,o){if((function(h){return wI(h)&&h!==G.ABORTED})(o.code)){const u=s.Ta.shift();ki(s).B_(),await Z_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await wc(s)}})(i,e),ev(i)&&tv(i)}async function Fg(i,e){const t=Ie(i);t.asyncQueue.verifyOperationInProgress(),ne(cs,"RemoteStore received new credentials");const s=gs(t);t.Ia.add(3),await tl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await vc(t)}async function zS(i,e){const t=Ie(i);e?(t.Ia.delete(2),await vc(t)):e||(t.Ia.add(2),await tl(t),t.Va.set("Unknown"))}function Co(i){return i.ma||(i.ma=(function(t,s,o){const u=Ie(t);return u.sa(),new SS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:NS.bind(null,i),Yo:bS.bind(null,i),t_:DS.bind(null,i),H_:VS.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),lf(i)?af(i):i.Va.set("Unknown")):(await i.ma.stop(),X_(i))}))),i.ma}function ki(i){return i.fa||(i.fa=(function(t,s,o){const u=Ie(t);return u.sa(),new kS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:MS.bind(null,i),t_:US.bind(null,i),ta:jS.bind(null,i),na:FS.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await wc(i)):(await i.fa.stop(),i.Ta.length>0&&(ne(cs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new uf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),xo(i))return new ue(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static emptySet(e){return new ho(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Pa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ho;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class To{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new To(e,t,ho.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class $S{constructor(){this.queries=zg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),u=o.queries;o.queries=zg(),u.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ue(G.ABORTED,"Firestore shutting down"))}}function zg(){return new ps((i=>w_(i)),fc)}async function WS(i,e){const t=Ie(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new BS,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=cf(h,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&hf(t)}async function HS(i,e){const t=Ie(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function qS(i,e){const t=Ie(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&hf(t)}function GS(i,e,t){const s=Ie(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function hf(i){i.Ca.forEach((e=>{e.next()}))}var Rd,Bg;(Bg=Rd||(Rd={})).Ma="default",Bg.Cache="cache";class KS{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.key=e}}class rv{constructor(e){this.key=e}}class QS{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=De(),this.mutatedKeys=De(),this.eu=E_(e),this.tu=new ho(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Ug,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,A)=>{const C=o.get(T),M=pc(this.query,A)?A:null,Q=!!C&&this.mutatedKeys.has(C.key),J=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let K=!1;C&&M?C.data.isEqual(M.data)?Q!==J&&(s.track({type:3,doc:M}),K=!0):this.su(C,M)||(s.track({type:2,doc:M}),K=!0,(g&&this.eu(M,g)>0||_&&this.eu(M,_)<0)&&(m=!0)):!C&&M?(s.track({type:0,doc:M}),K=!0):C&&!M&&(s.track({type:1,doc:C}),K=!0,(g||_)&&(m=!0)),K&&(M?(h=h.add(M),u=J?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:h,iu:s,bs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,A)=>(function(M,Q){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:K})}};return J(M)-J(Q)})(T.type,A.type)||this.eu(T.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new To(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ug,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=De(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new rv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new nv(s))})),t}cu(e){this.Za=e.ks,this.Ya=De();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return To.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const df="SyncEngine";class YS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class JS{constructor(e){this.key=e,this.hu=!1}}class XS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ps((m=>w_(m)),fc),this.Eu=new Map,this.Iu=new Set,this.Ru=new nt(fe.comparator),this.Au=new Map,this.Vu=new ef,this.du={},this.mu=new Map,this.fu=Eo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ZS(i,e,t=!0){const s=uv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await iv(s,e,t,!0),o}async function ek(i,e){const t=uv(i);await iv(t,e,!0,!1)}async function iv(i,e,t,s){const o=await gS(i.localStore,Zn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await tk(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Y_(i.remoteStore,o),m}async function tk(i,e,t,s,o){i.pu=(A,C,M)=>(async function(J,K,pe,ae){let me=K.view.ru(pe);me.bs&&(me=await Vg(J.localStore,K.query,!1).then((({documents:R})=>K.view.ru(R,me))));const Se=ae&&ae.targetChanges.get(K.targetId),ve=ae&&ae.targetMismatches.get(K.targetId)!=null,ge=K.view.applyChanges(me,J.isPrimaryClient,Se,ve);return Wg(J,K.targetId,ge.au),ge.snapshot})(i,A,C,M);const u=await Vg(i.localStore,e,!0),h=new QS(e,u.ks),m=h.ru(u.documents),g=el.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);Wg(i,t,_.au);const T=new YS(e,t,h);return i.Tu.set(e,T),i.Eu.has(t)?i.Eu.get(t).push(e):i.Eu.set(t,[e]),_.snapshot}async function nk(i,e,t){const s=Ie(i),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((h=>!fc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await xd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&sf(s.remoteStore,o.targetId),Pd(s,o.targetId)})).catch(Ao)):(Pd(s,o.targetId),await xd(s.localStore,o.targetId,!0))}async function rk(i,e){const t=Ie(i),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sf(t.remoteStore,s.targetId))}async function ik(i,e,t){const s=hk(i);try{const o=await(function(h,m){const g=Ie(h),_=Ye.now(),T=m.reduce(((M,Q)=>M.add(Q.key)),De());let A,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(M=>{let Q=Pr(),J=De();return g.xs.getEntries(M,T).next((K=>{Q=K,Q.forEach(((pe,ae)=>{ae.isValidDocument()||(J=J.add(pe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(M,Q))).next((K=>{A=K;const pe=[];for(const ae of m){const me=mI(ae,A.get(ae.key).overlayedDocument);me!=null&&pe.push(new ms(ae.key,me,f_(me.value.mapValue),Ar.exists(!0)))}return g.mutationQueue.addMutationBatch(M,_,pe,m)})).next((K=>{C=K;const pe=K.applyToLocalDocumentSet(A,J);return g.documentOverlayCache.saveOverlays(M,K.batchId,pe)}))})).then((()=>({batchId:C.batchId,changes:I_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new nt(be)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await nl(s,o.changes),await wc(s.remoteStore)}catch(o){const u=cf(o,"Failed to persist write");t.reject(u)}}async function sv(i,e){const t=Ie(i);try{const s=await fS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await nl(t,s,e)}catch(s){await Ao(s)}}function $g(i,e,t){const s=Ie(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ie(h);g.onlineState=m;let _=!1;g.queries.forEach(((T,A)=>{for(const C of A.Sa)C.va(m)&&(_=!0)})),_&&hf(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sk(i,e,t){const s=Ie(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,Ft.newNoDocument(u,Ee.min()));const m=De().add(u),g=new yc(Ee.min(),new Map,new nt(be),h,m);await sv(s,g),s.Ru=s.Ru.remove(u),s.Au.delete(e),ff(s)}else await xd(s.localStore,e,!1).then((()=>Pd(s,e,t))).catch(Ao)}async function ok(i,e){const t=Ie(i),s=e.batch.batchId;try{const o=await dS(t.localStore,e);av(t,s,null),ov(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await nl(t,o)}catch(o){await Ao(o)}}async function ak(i,e,t){const s=Ie(i);try{const o=await(function(h,m){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return g.mutationQueue.lookupMutationBatch(_,m).next((A=>(ze(A!==null,37113),T=A.keys(),g.mutationQueue.removeMutationBatch(_,A)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>g.localDocuments.getDocuments(_,T)))}))})(s.localStore,e);av(s,e,t),ov(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await nl(s,o)}catch(o){await Ao(o)}}function ov(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function av(i,e,t){const s=Ie(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Pd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Eu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Eu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||lv(i,s)}))}function lv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(sf(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),ff(i))}function Wg(i,e,t){for(const s of t)s instanceof nv?(i.Vu.addReference(s.key,e),lk(i,s)):s instanceof rv?(ne(df,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||lv(i,s.key)):_e(19791,{wu:s})}function lk(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Iu.has(s)||(ne(df,"New document in limbo: "+t),i.Iu.add(s),ff(i))}function ff(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new fe(tt.fromString(e)),s=i.fu.next();i.Au.set(s,new JS(t)),i.Ru=i.Ru.insert(t,s),Y_(i.remoteStore,new pi(Zn(Qd(t.path)),s,"TargetPurposeLimboResolution",uc.ce))}}async function nl(i,e,t){const s=Ie(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var T;if((_||t)&&s.isPrimaryClient){const A=_?!_.fromCache:(T=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(_){o.push(_);const A=nf.Is(g.targetId,_);u.push(A)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,_){const T=Ie(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>B.forEach(_,(C=>B.forEach(C.Ts,(M=>T.persistence.referenceDelegate.addReference(A,C.targetId,M))).next((()=>B.forEach(C.Es,(M=>T.persistence.referenceDelegate.removeReference(A,C.targetId,M)))))))))}catch(A){if(!xo(A))throw A;ne(rf,"Failed to update sequence numbers: "+A)}for(const A of _){const C=A.targetId;if(!A.fromCache){const M=T.vs.get(C),Q=M.snapshotVersion,J=M.withLastLimboFreeSnapshotVersion(Q);T.vs=T.vs.insert(C,J)}}})(s.localStore,u))}async function uk(i,e){const t=Ie(i);if(!t.currentUser.isEqual(e)){ne(df,"User change. New user:",e.toKey());const s=await q_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new ue(G.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nl(t,s.Ns)}}function ck(i,e){const t=Ie(i),s=t.Au.get(e);if(s&&s.hu)return De().add(s.key);{let o=De();const u=t.Eu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function uv(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sk.bind(null,e),e.Pu.H_=qS.bind(null,e.eventManager),e.Pu.yu=GS.bind(null,e.eventManager),e}function hk(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ok.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ak.bind(null,e),e}class Zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hS(this.persistence,new lS,e.initialUser,this.serializer)}Cu(e){return new H_(tf.Vi,this.serializer)}Du(e){return new _S}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zu.provider={build:()=>new Zu};class dk extends Zu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new H_((s=>Ju.Vi(s,t)),this.serializer)}}class Nd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$g(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uk.bind(null,this.syncEngine),await zS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $S})()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=IS(e.databaseInfo);return CS(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new PS(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>$g(this.syncEngine,t,0)),(function(){return Mg.v()?new Mg:new vS})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,T){const A=new XS(o,u,h,m,g,_);return T&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ie(o);ne(cs,"RemoteStore shutting down."),u.Ia.add(5),await tl(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Nd.provider={build:()=>new Nd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class pk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Bd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ne(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=cf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ad(i,e){i.asyncQueue.verifyOperationInProgress(),ne(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await q_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Hg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await mk(i);ne(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Fg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Fg(e.remoteStore,o))),i._onlineComponents=e}async function mk(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(Ai,"Using user provided OfflineComponentProvider");try{await ad(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;us("Error using user provided cache. Falling back to memory cache: "+t),await ad(i,new Zu)}}else ne(Ai,"Using default OfflineComponentProvider"),await ad(i,new dk(void 0));return i._offlineComponents}async function cv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(Ai,"Using user provided OnlineComponentProvider"),await Hg(i,i._uninitializedComponentsProvider._online)):(ne(Ai,"Using default OnlineComponentProvider"),await Hg(i,new Nd))),i._onlineComponents}function gk(i){return cv(i).then((e=>e.syncEngine))}async function yk(i){const e=await cv(i),t=e.eventManager;return t.onListen=ZS.bind(null,e.syncEngine),t.onUnlisten=nk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ek.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rk.bind(null,e.syncEngine),t}function _k(i,e,t={}){const s=new vi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const T=new fk({next:C=>{T.Nu(),h.enqueueAndForget((()=>HS(u,A)));const M=C.docs.has(m);!M&&C.fromCache?_.reject(new ue(G.UNAVAILABLE,"Failed to get document because the client is offline.")):M&&C.fromCache&&g&&g.source==="server"?_.reject(new ue(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),A=new KS(Qd(m.path),T,{includeMetadataChanges:!0,qa:!0});return WS(u,A)})(await yk(i),i.asyncQueue,e,t,s))),s.promise}function vk(i,e){const t=new vi;return i.asyncQueue.enqueueAndForget((async()=>ik(await gk(i),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="ComponentProvider",qg=new Map;function Ek(i,e,t,s,o){return new M1(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,hv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firestore.googleapis.com",Gg=!0;class Kg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dv,this.ssl=Gg}else this.host=e.host,this.ssl=e.ssl??Gg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HI)throw new ue(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new m1;switch(s.type){case"firstParty":return new v1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=qg.get(t);s&&(ne(wk,"Removing Datastore"),qg.delete(t),s.terminate())})(this),Promise.resolve()}}function Tk(i,e,t,s={}){var _;i=Ua(i,pf);const o=Ja(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&By(`https://${m}`),u.host!==dv&&u.host!==m&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!os(g,h)&&(i._setSettings(g),s.mockUserToken)){let T,A;if(typeof s.mockUserToken=="string")T=s.mockUserToken,A=jt.MOCK_USER;else{T=$E(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ue(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new jt(C)}i._authCredentials=new g1(new n_(T,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mf(this.firestore,e,this._query)}}class It{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ga(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xa(t,It._jsonSchema))return new It(e,s||null,new fe(tt.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:ft("string",It._jsonSchemaVersion),referencePath:ft("string")};class Ga extends mf{constructor(e,t,s){super(e,t,Qd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new fe(e))}withConverter(e){return new Ga(this.firestore,e,this._path)}}function gf(i,e,...t){if(i=Jt(i),arguments.length===1&&(e=Bd.newId()),k1("doc","path",e),i instanceof pf){const s=tt.fromString(e,...t);return lg(s),new It(i,null,new fe(s))}{if(!(i instanceof It||i instanceof Ga))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(tt.fromString(e,...t));return lg(s),new It(i.firestore,i instanceof Ga?i.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="AsyncQueue";class Yg{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new K_(this,"async_queue_retry"),this._c=()=>{const s=od();s&&ne(Qg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new vi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xo(e))throw e;ne(Qg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",Jg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=uf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:Jg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Jg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class yf extends pf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Yg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yg(e),this._firestoreClient=void 0,await e}}}function Ik(i,e){const t=typeof i=="object"?i:qy(),s=typeof i=="string"?i:Wu,o=Ud(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=zE("firestore");u&&Tk(o,...u)}return o}function fv(i){if(i._terminated)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Sk(i),i._firestoreClient}function Sk(i){var s,o,u,h;const e=i._freezeSettings(),t=Ek(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new pk(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Pt.fromBase64String(e))}catch(t){throw new ue(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xa(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:ft("string",_n._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(Xa(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:ft("string",tr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xa(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new bn(e.vectorValues);throw new ue(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:ft("string",bn._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/^__.*__$/;class Ak{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new Za(e,this.data,t,this.fieldTransforms)}}function gv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:i})}}class _f{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new _f({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ec(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(gv(this.dataSource)&&kk.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class xk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}A(e,t,s,o=!1){return new _f({dataSource:e,methodName:t,targetDoc:s,path:Rt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ck(i){const e=i._freezeSettings(),t=_c(i._databaseId);return new xk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Rk(i,e,t,s,o,u={}){const h=i.A(u.merge||u.mergeFields?2:0,e,t,o);wv("Data must be an object, but it was:",h,s);const m=_v(s,h);let g,_;if(u.merge)g=new Pn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const A of u.mergeFields){const C=vf(e,A,t);if(!h.contains(C))throw new ue(G.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);bk(T,C)||T.push(C)}g=new Pn(T),_=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,_=h.fieldTransforms;return new Ak(new yn(m),g,_)}function yv(i,e){if(vv(i=Jt(i)))return wv("Unsupported field value:",e,i),_v(i,e);if(i instanceof mv)return(function(s,o){if(!gv(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=yv(m,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return uI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:Yu(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yu(o.serializer,u)}}if(s instanceof tr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:L_(o.serializer,s._byteString)};if(s instanceof It){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof bn)return(function(h,m){const g=h instanceof bn?h.toArray():h;return{mapValue:{fields:{[h_]:{stringValue:d_},[Hu]:{arrayValue:{values:g.map((T=>{if(typeof T!="number")throw m.yc("VectorValues must only contain numeric values.");return Yd(m.serializer,T)}))}}}}}})(s,o);if($_(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${$d(s)}`)})(i,e)}function _v(i,e){const t={};return s_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(i,((s,o)=>{const u=yv(o,e.dc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function vv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof tr||i instanceof _n||i instanceof It||i instanceof mv||i instanceof bn||$_(i))}function wv(i,e,t){if(!vv(t)||!r_(t)){const s=$d(t);throw s==="an object"?e.yc(i+" a custom object"):e.yc(i+" "+s)}}function vf(i,e,t){if((e=Jt(e))instanceof pv)return e._internalPath;if(typeof e=="string")return Nk(i,e);throw ec("Field path arguments must be of type string or ",i,!1,void 0,t)}const Pk=new RegExp("[~\\*/\\[\\]]");function Nk(i,e,t){if(e.search(Pk)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new pv(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ec(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ue(G.INVALID_ARGUMENT,m+i+g)}function bk(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{convertValue(e,t="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Hu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>lt(h.doubleValue)));return new bn(t)}convertGeoPoint(e){return new tr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=hc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=tt.fromString(e);ze(B_(s),9688,{name:e});const o=new $a(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk extends Dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}const Xg="@firebase/firestore",Zg="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(vf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ok extends Ev{data(){return super.data()}}function Lk(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends Ev{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(vf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ss._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",ss._jsonSchema={type:ft("string",ss._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Lu extends ss{data(e={}){return super.data(e)}}class Ma{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ba(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Lu(this._firestore,this._userDataWriter,s.key,s,new ba(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ba(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ba(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:Mk(m.type),doc:g,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ma._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ma._jsonSchemaVersion="firestore/querySnapshot/1.0",Ma._jsonSchema={type:ft("string",Ma._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(i){i=Ua(i,It);const e=Ua(i.firestore,yf),t=fv(e);return _k(t,i._key).then((s=>Fk(e,i,s)))}function Iv(i,e,t){i=Ua(i,It);const s=Ua(i.firestore,yf),o=Lk(i.converter,e,t),u=Ck(s);return jk(s,[Rk(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Ar.none())])}function jk(i,e){const t=fv(i);return vk(t,e)}function Fk(i,e,t){const s=t.docs.get(e._key),o=new Vk(i);return new ss(i,o,e._key,s,new ba(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){p1(So),yo(new as("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new yf(new y1(s.getProvider("auth-internal")),new w1(h,s.getProvider("app-check-internal")),j1(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),yi(Xg,Zg,e),yi(Xg,Zg,"esm2020")})();var Uk="firebase",zk="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi(Uk,zk,"app");function Sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bk=Sv,kv=new Qa("auth","Firebase",Sv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new jd("@firebase/auth");function $k(i,...e){tc.logLevel<=Ne.WARN&&tc.warn(`Auth (${So}): ${i}`,...e)}function Mu(i,...e){tc.logLevel<=Ne.ERROR&&tc.error(`Auth (${So}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(i,...e){throw Ef(i,...e)}function Dn(i,...e){return Ef(i,...e)}function wf(i,e,t){const s={...Bk(),[e]:t};return new Qa("auth","Firebase",s).create(e,{appName:i.name})}function xr(i){return wf(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wk(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&vn(i,"argument-error"),wf(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ef(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return kv.create(i,...e)}function ye(i,e,...t){if(!i)throw Ef(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Mu(e),new Error(e)}function Nr(i,e){i||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Hk(){return ey()==="http:"||ey()==="https:"}function ey(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hk()||GE()||"connection"in navigator)?navigator.onLine:!0}function Gk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=WE()||KE()}get(){return qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(i,e){Nr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yk=new rl(3e4,6e4);function xi(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Dr(i,e,t,s,o={}){return xv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ya({key:i.config.apiKey,...h}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:g,...u};return qE()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Ja(i.emulatorConfig.host)&&(_.credentials="include"),Av.fetch()(await Cv(i,i.config.apiHost,t,m),_)})}async function xv(i,e,t){i._canInitEmulator=!1;const s={...Kk,...e};try{const o=new Xk(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(i,"user-disabled",h);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw wf(i,T,_);vn(i,T)}}catch(o){if(o instanceof br)throw o;vn(i,"network-request-failed",{message:String(o)})}}async function il(i,e,t,s,o={}){const u=await Dr(i,e,t,s,o);return"mfaPendingCredential"in u&&vn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Cv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Tf(i.config,o):`${i.config.apiScheme}://${o}`;return Qk.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function Jk(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Dn(this.auth,"network-request-failed")),Yk.get())})}}function Ru(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Dn(i,e,s);return o.customData._tokenResponse=t,o}function ty(i){return i!==void 0&&i.enterprise!==void 0}class Zk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eA(i,e){return Dr(i,"GET","/v2/recaptchaConfig",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(i,e){return Dr(i,"POST","/v1/accounts:delete",e)}async function nc(i,e){return Dr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(i,e=!1){const t=Jt(i),s=await t.getIdToken(e),o=If(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ja(ld(o.auth_time)),issuedAtTime:ja(ld(o.iat)),expirationTime:ja(ld(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ld(i){return Number(i)*1e3}function If(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Mu("JWT malformed, contained fewer than 3 sections"),null;try{const o=jy(t);return o?JSON.parse(o):(Mu("Failed to decode base64 JWT payload"),null)}catch(o){return Mu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ny(i){const e=If(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&rA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function rA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(i){var A;const e=i.auth,t=await i.getIdToken(),s=await Io(i,nc(e,{idToken:t}));ye(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(A=o.providerUserInfo)!=null&&A.length?Rv(o.providerUserInfo):[],h=oA(i.providerData,u),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Dd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,T)}async function sA(i){const e=Jt(i);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Rv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(i,e){const t=await xv(i,{},async()=>{const s=Ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Cv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ja(i.emulatorConfig.host)&&(g.credentials="include"),Av.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lA(i,e){return Dr(i,"POST","/v2/accounts:revokeToken",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await aA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new fo;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Dd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Io(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Io(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:A,emailVerified:C,isAnonymous:M,providerData:Q,stsTokenManager:J}=t;ye(A&&J,e,"internal-error");const K=fo.fromJSON(this.name,J);ye(typeof A=="string",e,"internal-error"),ci(s,e.name),ci(o,e.name),ye(typeof C=="boolean",e,"internal-error"),ye(typeof M=="boolean",e,"internal-error"),ci(u,e.name),ci(h,e.name),ci(m,e.name),ci(g,e.name),ci(_,e.name),ci(T,e.name);const pe=new Nn({uid:A,auth:e,email:o,emailVerified:C,displayName:s,isAnonymous:M,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:K,createdAt:_,lastLoginAt:T});return Q&&Array.isArray(Q)&&(pe.providerData=Q.map(ae=>({...ae}))),g&&(pe._redirectEventId=g),pe}static async _fromIdTokenResponse(e,t,s=!1){const o=new fo;o.updateFromServerResponse(t);const u=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await rc(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Rv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new fo;m.updateFromIdToken(s);const g=new Nn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Dd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Map;function kr(i){Nr(i instanceof Function,"Expected a class definition");let e=ry.get(i);return e?(Nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ry.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pv.type="NONE";const iy=Pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(i,e,t){return`firebase:${i}:${e}:${t}`}class po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=ju(this.userKey,o.apiKey,u),this.fullPersistenceKey=ju("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await nc(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new po(kr(iy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||kr(iy);const h=ju(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const T=await _._get(h);if(T){let A;if(typeof T=="string"){const C=await nc(e,{idToken:T}).catch(()=>{});if(!C)break;A=await Nn._fromGetAccountInfoResponse(e,C,T)}else A=Nn._fromJSON(e,T);_!==u&&(m=A),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new po(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new po(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Mv(e))return"Webos";if(bv(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(Ov(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nv(i=Ut()){return/firefox\//i.test(i)}function bv(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(i=Ut()){return/crios\//i.test(i)}function Vv(i=Ut()){return/iemobile/i.test(i)}function Ov(i=Ut()){return/android/i.test(i)}function Lv(i=Ut()){return/blackberry/i.test(i)}function Mv(i=Ut()){return/webos/i.test(i)}function Sf(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function uA(i=Ut()){var e;return Sf(i)&&!!((e=window.navigator)!=null&&e.standalone)}function cA(){return QE()&&document.documentMode===10}function jv(i=Ut()){return Sf(i)||Ov(i)||Mv(i)||Lv(i)||/windows phone/i.test(i)||Vv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(i,e=[]){let t;switch(i){case"Browser":t=sy(Ut());break;case"Worker":t=`${sy(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(i,e={}){return Dr(i,"GET","/v2/passwordPolicy",xi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=6;class pA{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??fA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nc(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(xr(this));const t=e?Jt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),t=new pA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await lA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$k(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ci(i){return Jt(i)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=rT(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(i){Ec=i}function Uv(i){return Ec.loadJS(i)}function yA(){return Ec.recaptchaEnterpriseScript}function _A(){return Ec.gapiScript}function vA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class wA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const TA="recaptcha-enterprise",zv="NO_RECAPTCHA";class IA{constructor(e){this.type=TA,this.auth=Ci(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{eA(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new Zk(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;ty(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(zv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&ty(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=yA();g.length!==0&&(g+=m),Uv(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function ay(i,e,t,s=!1,o=!1){const u=new IA(i);let h;if(o)h=zv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Vd(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ay(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await ay(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(i,e){const t=Ud(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(os(u,e??{}))return o;vn(o,"already-initialized")}return t.initialize({options:e})}function kA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AA(i,e,t){const s=Ci(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Bv(e),{host:h,port:m}=xA(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(os(_,s.config.emulator)&&os(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Ja(h)?By(`${u}//${h}${g}`):CA()}function Bv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function xA(i){const e=Bv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ly(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ly(h)}}}function ly(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function CA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function RA(i,e){return Dr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(i,e){return il(i,"POST","/v1/accounts:signInWithPassword",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(i,e){return il(i,"POST","/v1/accounts:signInWithEmailLink",xi(i,e))}async function bA(i,e){return il(i,"POST","/v1/accounts:signInWithEmailLink",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends kf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ka(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ka(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,t,"signInWithPassword",PA);case"emailLink":return NA(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,s,"signUpPassword",RA);case"emailLink":return bA(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(i,e){return il(i,"POST","/v1/accounts:signInWithIdp",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class hs extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new hs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ya(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(i){const e=xa(Ca(i)).link,t=e?xa(Ca(e)).deep_link_id:null,s=xa(Ca(i)).deep_link_id;return(s?xa(Ca(s)).link:null)||s||t||e||i}class Af{constructor(e){const t=xa(Ca(e)),s=t.apiKey??null,o=t.oobCode??null,u=VA(t.mode??null);ye(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=OA(e);try{return new Af(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,t){return Ka._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Af.parseLink(t);return ye(s,"argument-error"),Ka._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends xf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends sl{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ir.credential(t,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends sl{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends sl{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(i,e){return il(i,"POST","/v1/accounts:signUp",xi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Nn._fromIdTokenResponse(e,s,o),h=uy(s);return new ds({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=uy(s);return new ds({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function uy(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends br{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ic(e,t,s,o)}}function $v(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(i,u,e,s):u})}async function MA(i,e,t=!1){const s=await Io(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ds._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(i,e,t=!1){const{auth:s}=i;if(ln(s.app))return Promise.reject(xr(s));const o="reauthenticate";try{const u=await Io(i,$v(s,o,e,i),t);ye(u.idToken,s,"internal-error");const h=If(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),ds._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&vn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(i,e,t=!1){if(ln(i.app))return Promise.reject(xr(i));const s="signIn",o=await $v(i,s,e),u=await ds._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function FA(i,e){return Wv(Ci(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(i){const e=Ci(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UA(i,e,t){if(ln(i.app))return Promise.reject(xr(i));const s=Ci(i),h=await Vd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Hv(i),g}),m=await ds._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function zA(i,e,t){return ln(i.app)?Promise.reject(xr(i)):FA(Jt(i),Ro.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Hv(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(i,e){return Dr(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Jt(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Io(s,BA(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function WA(i,e,t,s){return Jt(i).onIdTokenChanged(e,t,s)}function HA(i,e,t){return Jt(i).beforeAuthStateChanged(e,t)}function qA(i,e,t,s){return Jt(i).onAuthStateChanged(e,t,s)}function GA(i){return Jt(i).signOut()}const sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sc,"1"),this.storage.removeItem(sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=1e3,QA=10;class Gv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);cA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,QA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const YA=Gv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kv.type="SESSION";const Qv=Kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Tc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await JA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Cf("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function ZA(i){nr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tx(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function nx(){return Yv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebaseLocalStorageDb",rx=1,oc="firebaseLocalStorage",Xv="fbase_key";class ol{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ic(i,e){return i.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function ix(){const i=indexedDB.deleteDatabase(Jv);return new ol(i).toPromise()}function Od(){const i=indexedDB.open(Jv,rx);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(oc,{keyPath:Xv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(oc)?e(s):(s.close(),await ix(),e(await Od()))})})}async function cy(i,e,t){const s=Ic(i,!0).put({[Xv]:e,value:t});return new ol(s).toPromise()}async function sx(i,e){const t=Ic(i,!1).get(e),s=await new ol(t).toPromise();return s===void 0?null:s.value}function hy(i,e){const t=Ic(i,!0).delete(e);return new ol(t).toPromise()}const ox=800,ax=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ax)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(nx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await ex(),!this.activeServiceWorker)return;this.sender=new XA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await cy(e,sc,"1"),await hy(e,sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>sx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ic(o,!1).getAll();return new ol(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const lx=Zv;new rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(i,e){return e?kr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ux(i){return Wv(i.auth,new Rf(i),i.bypassAuthState)}function cx(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),jA(t,new Rf(i),i.bypassAuthState)}async function hx(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),MA(t,new Rf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ux;case"linkViaPopup":case"linkViaRedirect":return hx;case"reauthViaPopup":case"reauthViaRedirect":return cx;default:vn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=new rl(2e3,1e4);async function fx(i,e,t){if(ln(i.app))return Promise.reject(Dn(i,"operation-not-supported-in-this-environment"));const s=Ci(i);Wk(i,e,xf);const o=e0(s,t);return new is(s,"signInViaPopup",e,o).executeNotNull()}class is extends t0{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dx.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="pendingRedirect",Fu=new Map;class mx extends t0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Fu.get(this.auth._key());if(!e){try{const s=await gx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Fu.set(this.auth._key(),e)}return this.bypassAuthState||Fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gx(i,e){const t=vx(e),s=_x(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function yx(i,e){Fu.set(i._key(),e)}function _x(i){return kr(i._redirectPersistence)}function vx(i){return ju(px,i.config.apiKey,i.name)}async function wx(i,e,t=!1){if(ln(i.app))return Promise.reject(xr(i));const s=Ci(i),o=e0(s,e),h=await new mx(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=600*1e3;class Tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ix(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!n0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Dn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ex&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function n0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ix(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(i,e={}){return Dr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ax=/^https?/;async function xx(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Sx(i);for(const t of e)try{if(Cx(t))return}catch{}vn(i,"unauthorized-domain")}function Cx(i){const e=bd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!Ax.test(t))return!1;if(kx.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=new rl(3e4,6e4);function fy(){const i=nr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Px(i){return new Promise((e,t)=>{var o,u,h;function s(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),t(Dn(i,"network-request-failed"))},timeout:Rx.get()})}if((u=(o=nr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=nr().gapi)!=null&&h.load)s();else{const m=vA("iframefcb");return nr()[m]=()=>{gapi.load?s():t(Dn(i,"network-request-failed"))},Uv(`${_A()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function Nx(i){return Uu=Uu||Px(i),Uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new rl(5e3,15e3),Dx="__/auth/iframe",Vx="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mx(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Tf(e,Vx):`https://${i.config.authDomain}/${Dx}`,s={apiKey:e.apiKey,appName:i.name,v:So},o=Lx.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ya(s).slice(1)}`}async function jx(i){const e=await Nx(i),t=nr().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:Mx(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Dn(i,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},bx.get());function g(){nr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ux=500,zx=600,Bx="_blank",$x="http://localhost";class py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(i,e,t,s=Ux,o=zx){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...Fx,width:s.toString(),height:o.toString(),top:u,left:h},_=Ut().toLowerCase();t&&(m=Dv(_)?Bx:t),Nv(_)&&(e=e||$x,g.scrollbars="yes");const T=Object.entries(g).reduce((C,[M,Q])=>`${C}${M}=${Q},`,"");if(uA(_)&&m!=="_self")return Hx(e||"",m),new py(null);const A=window.open(e||"",m,T);ye(A,i,"popup-blocked");try{A.focus()}catch{}return new py(A)}function Hx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="__/auth/handler",Gx="emulator/auth/handler",Kx=encodeURIComponent("fac");async function my(i,e,t,s,o,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:So,eventId:o};if(e instanceof xf){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",nT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,A]of Object.entries({}))h[T]=A}if(e instanceof sl){const T=e.getScopes().filter(A=>A!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await i._getAppCheckToken(),_=g?`#${Kx}=${encodeURIComponent(g)}`:"";return`${Qx(i)}?${Ya(m).slice(1)}${_}`}function Qx({config:i}){return i.emulator?Tf(i,Gx):`https://${i.authDomain}/${qx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="webStorageSupport";class Yx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qv,this._completeRedirectFn=wx,this._overrideRedirectResult=yx}async _openPopup(e,t,s,o){var h;Nr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await my(e,t,s,bd(),o);return Wx(e,u,Cf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await my(e,t,s,bd(),o);return ZA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jx(e),s=new Tx(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ud,{type:ud},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[ud];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jv()||bv()||Sf()}}const Jx=Yx;var gy="@firebase/auth",yy="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eC(i){yo(new as("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(i)},_=new mA(s,o,u,g);return kA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yo(new as("auth-internal",e=>{const t=Ci(e.getProvider("auth").getImmediate());return(s=>new Xx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(gy,yy,Zx(i)),yi(gy,yy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=300,nC=zy("authIdTokenMaxAge")||tC;let _y=null;const rC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>nC)return;const o=t==null?void 0:t.token;_y!==o&&(_y=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function iC(i=qy()){const e=Ud(i,"auth");if(e.isInitialized())return e.getImmediate();const t=SA(i,{popupRedirectResolver:Jx,persistence:[lx,YA,Qv]}),s=zy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=rC(u.toString());HA(t,h,()=>h(t.currentUser)),WA(t,m=>h(m))}}const o=Fy("auth");return o&&AA(t,`http://${o}`),t}function sC(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}gA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Dn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",sC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eC("Browser");const oC={apiKey:"AIzaSyCfv4vEafuZcKG7I37tK12TNpbfE89u_D0",authDomain:"dashboard-g-pro.firebaseapp.com",projectId:"dashboard-g-pro",storageBucket:"dashboard-g-pro.firebasestorage.app",messagingSenderId:"349860818176",appId:"1:349860818176:web:baaa1c113f6136e3a5d7e5"},r0=Hy(oC),al=iC(r0),Pf=Ik(r0);async function aC(i,e){try{await Iv(gf(Pf,"users",i),{layout:e},{merge:!0})}catch(t){throw console.error("[layoutService] Failed to save layout:",t),t}}async function lC(i){try{const e=gf(Pf,"users",i),t=await Tv(e);return t.exists()?t.data().layout??[]:[]}catch(e){throw console.error("[layoutService] Failed to load layout:",e),e}}const uC=new Ir;async function cC(){try{return(await fx(al,uC)).user}catch(i){throw console.error("[authService] Google sign-in failed:",i),i}}async function hC(i,e){try{return(await zA(al,i,e)).user}catch(t){throw console.error("[authService] Email sign-in failed:",t),t}}async function dC(i,e,t){try{const s=await UA(al,i,e);return await $A(s.user,{displayName:t}),s.user}catch(s){throw console.error("[authService] Email sign-up failed:",s),s}}async function fC(){try{await GA(al)}catch(i){throw console.error("[authService] Logout failed:",i),i}}async function pC(i){try{const e=gf(Pf,"users",i),t=await Tv(e);if(t.exists()){const o=t.data();return{plan:o.plan??"free",createdAt:o.createdAt??Date.now(),layout:o.layout??[]}}const s={plan:"free",createdAt:Date.now(),layout:[]};return await Iv(e,s),s}catch(e){throw console.error("[userService] Failed to ensure user document:",e),e}}const vy={free:3,pro:1/0},i0=$.createContext(null);function Po(){const i=$.useContext(i0);if(!i)throw new Error("useAuthContext must be used within AuthProvider");return i}function mC({children:i}){const[e,t]=$.useState(null),[s,o]=$.useState("loading");$.useEffect(()=>qA(al,async M=>{if(!M){t(null),o("unauthenticated");return}try{const Q=await pC(M.uid);t({uid:M.uid,email:M.email,displayName:M.displayName,photoURL:M.photoURL,plan:Q.plan,createdAt:Q.createdAt}),o("authenticated")}catch(Q){console.error("[AuthProvider] Failed to initialize user:",Q),t({uid:M.uid,email:M.email,displayName:M.displayName,photoURL:M.photoURL,plan:"free",createdAt:Date.now()}),o("authenticated")}}),[]);const u=$.useCallback(async()=>{try{o("loading"),await cC()}catch(C){throw o("unauthenticated"),C}},[]),h=$.useCallback(async(C,M)=>{try{o("loading"),await hC(C,M)}catch(Q){throw o("unauthenticated"),Q}},[]),m=$.useCallback(async(C,M,Q)=>{try{o("loading"),await dC(C,M,Q)}catch(J){throw o("unauthenticated"),J}},[]),g=$.useCallback(async()=>{try{await fC(),t(null),o("unauthenticated")}catch(C){throw console.error("[AuthProvider] Logout failed:",C),C}},[]),_=e?vy[e.plan]:vy.free,T=$.useCallback(C=>C<_,[_]),A=$.useMemo(()=>({user:e,status:s,signInWithGoogle:u,signInWithEmail:h,signUpWithEmail:m,logout:g,widgetLimit:_,canAddWidget:T}),[e,s,u,h,m,g,_,T]);return w.jsx(i0.Provider,{value:A,children:i})}const s0=[{type:"tasks",title:"Tasks",icon:"check-square",description:"Track your to-do list",defaultColSpan:1,defaultRowSpan:1},{type:"notes",title:"Notes",icon:"file-text",description:"Quick notes and thoughts",defaultColSpan:1,defaultRowSpan:1},{type:"calendar",title:"Calendar",icon:"calendar",description:"Weekly schedule view",defaultColSpan:2,defaultRowSpan:1},{type:"timer",title:"Pomodoro",icon:"timer",description:"Focus timer",defaultColSpan:1,defaultRowSpan:1},{type:"weather",title:"Weather",icon:"cloud",description:"Current conditions",defaultColSpan:1,defaultRowSpan:1},{type:"music",title:"Music",icon:"music",description:"Background player",defaultColSpan:1,defaultRowSpan:1},{type:"stats",title:"Progress",icon:"bar-chart",description:"Stats & goals",defaultColSpan:1,defaultRowSpan:1},{type:"quickactions",title:"Quick Actions",icon:"zap",description:"Shortcuts panel",defaultColSpan:1,defaultRowSpan:1}],o0=$.createContext(null);function ys(){const i=$.useContext(o0);if(!i)throw new Error("useDashboard must be used within DashboardProvider");return i}function gC({children:i}){const{canAddWidget:e}=Po(),[t,s]=$.useState("light"),[o,u]=$.useState(!0),[h,m]=$.useState([]),[g,_]=$.useState(!1),[T,A]=$.useState(!1),[C,M]=$.useState(!0),[Q,J]=$.useState(!1);$.useEffect(()=>{document.documentElement.classList.toggle("dark",t==="dark")},[t]);const K=$.useCallback(ve=>{s(ve)},[]),pe=$.useCallback(ve=>{const ge=s0.find(R=>R.type===ve);ge&&m(R=>e(R.length)?[...R,{id:`${ve}-${Date.now()}`,type:ve,title:ge.title,col:0,row:0,colSpan:ge.defaultColSpan,rowSpan:ge.defaultRowSpan}]:(setTimeout(()=>J(!0),0),R))},[e]),ae=$.useCallback(ve=>{m(ge=>ge.filter(R=>R.id!==ve))},[]),me=$.useCallback((ve,ge)=>{m(R=>{if(ve<0||ve>=R.length||ge<0||ge>=R.length||ve===ge)return R;const I=[...R],k=I[ve];return I[ve]=I[ge],I[ge]=k,I})},[]),Se=$.useMemo(()=>({theme:t,setTheme:K,sidebarOpen:o,setSidebarOpen:u,placedWidgets:h,setPlacedWidgets:m,addWidget:pe,removeWidget:ae,reorderWidgets:me,showAddPanel:g,setShowAddPanel:_,showSettings:T,setShowSettings:A,showGrid:C,setShowGrid:M,showUpgradeModal:Q,setShowUpgradeModal:J}),[t,K,o,h,pe,ae,me,g,T,C,Q]);return w.jsx(o0.Provider,{value:Se,children:i})}const wy=$.memo(function({plan:e,collapsed:t=!1}){const s=e==="pro";return t?w.jsx("div",{title:s?"Plano PRO":"Plano gratuito","aria-label":s?"Plano PRO":"Plano gratuito",className:["w-6 h-6 rounded-full flex items-center justify-center text-[0.5rem] font-bold",s?"bg-amber-500/15 text-amber-500":"bg-muted text-muted-foreground"].join(" "),children:s?w.jsx(go,{size:10,"aria-hidden":"true"}):"F"}):w.jsxs("span",{title:s?"Plano PRO":"Plano gratuito","aria-label":s?"Plano PRO":"Plano gratuito",className:["inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.625rem] font-semibold uppercase tracking-wider",s?"bg-amber-500/15 text-amber-500":"bg-muted text-muted-foreground"].join(" "),children:[s&&w.jsx(go,{size:10,"aria-hidden":"true"}),e]})}),yC=$.memo(function({icon:e,label:t,collapsed:s,onClick:o}){return w.jsxs("button",{type:"button",title:t,"aria-label":t,onClick:o,className:["w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg","text-muted-foreground hover:bg-accent hover:text-foreground","transition-colors text-[0.8125rem]","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",s?"justify-center":""].join(" "),children:[w.jsx(e,{size:16,"aria-hidden":!0,className:"shrink-0"}),!s&&w.jsx("span",{children:t})]})}),_C=$.memo(function(){var ae,me;const{theme:e,setTheme:t,sidebarOpen:s,setSidebarOpen:o,setShowAddPanel:u,setShowSettings:h,setShowUpgradeModal:m}=ys(),{user:g,logout:_}=Po(),T=!s,A=$.useCallback(()=>o(!s),[s,o]),C=$.useCallback(()=>t(e==="light"?"dark":"light"),[e,t]),M=$.useCallback(()=>u(!0),[u]),Q=$.useCallback(()=>h(!0),[h]),J=$.useCallback(async()=>{try{await _()}catch{}},[_]),K=[{icon:Gw,label:"Dashboard",action:()=>{}},{icon:wi,label:"Add Widget",action:M},{icon:EE,label:"Settings",action:Q}],pe=g!=null&&g.displayName?g.displayName.split(" ").map(Se=>Se[0]).join("").slice(0,2).toUpperCase():((me=(ae=g==null?void 0:g.email)==null?void 0:ae[0])==null?void 0:me.toUpperCase())??"?";return w.jsxs(w.Fragment,{children:[s&&w.jsx("div",{"aria-hidden":"true",className:"fixed inset-0 bg-black/20 z-30 lg:hidden",onClick:()=>o(!1)}),w.jsxs("aside",{id:"sidebar",role:"navigation","aria-label":"Menu lateral",className:["fixed lg:relative z-40 h-screen flex flex-col bg-card border-r border-border","transition-all duration-300 ease-in-out",s?"w-56":"w-0 lg:w-14","overflow-hidden"].join(" "),children:[w.jsxs("div",{className:"flex items-center justify-between px-3 py-4 min-h-[52px]",children:[s&&w.jsx("span",{className:"text-foreground text-[0.875rem] tracking-tight font-medium",children:"Workspace"}),w.jsx("button",{type:"button","aria-label":s?"Recolher menu":"Expandir menu",title:s?"Recolher menu":"Expandir menu","aria-controls":"sidebar","aria-expanded":s,onClick:A,className:"p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-ring",children:s?w.jsx(hE,{size:16,"aria-hidden":"true"}):w.jsx(fE,{size:16,"aria-hidden":"true"})})]}),w.jsx("div",{className:`px-3 pb-4 ${T?"flex justify-center":""}`,children:w.jsxs("div",{className:`flex items-center gap-2.5 ${T?"justify-center":""}`,children:[g!=null&&g.photoURL?w.jsx("img",{src:g.photoURL,alt:g.displayName??"User avatar",referrerPolicy:"no-referrer",className:"w-8 h-8 rounded-full border border-border shrink-0 object-cover"}):w.jsx("div",{className:"w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0",children:w.jsx("span",{className:"text-muted-foreground text-[0.6875rem] font-medium",children:pe})}),s&&w.jsxs("div",{className:"min-w-0 flex-1",children:[w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("p",{className:"text-foreground text-[0.8125rem] truncate",children:(g==null?void 0:g.displayName)??"User"}),g&&w.jsx(wy,{plan:g.plan})]}),w.jsx("p",{className:"text-muted-foreground/60 text-[0.6875rem] truncate",children:(g==null?void 0:g.email)??"No email"})]}),T&&g&&w.jsx("div",{className:"hidden lg:block",children:w.jsx(wy,{plan:g.plan,collapsed:!0})})]})}),w.jsx("div",{"aria-hidden":"true",className:"h-px bg-border mx-3"}),w.jsx("nav",{"aria-label":"Navegação principal",className:"flex-1 py-3 px-2 space-y-0.5",children:K.map(({icon:Se,label:ve,action:ge})=>w.jsx(yC,{icon:Se,label:ve,collapsed:T,onClick:ge},ve))}),s&&(g==null?void 0:g.plan)==="free"&&w.jsx("div",{className:"px-3 pb-2",children:w.jsxs("button",{type:"button","aria-label":"Fazer upgrade para plano PRO",title:"Upgrade para PRO",onClick:()=>m(!0),className:["w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg","bg-amber-500/10 border border-amber-500/20","text-amber-600 hover:bg-amber-500/15","transition-colors text-[0.8125rem] font-medium","focus-visible:ring-2 focus-visible:ring-ring"].join(" "),children:[w.jsx(go,{size:14,"aria-hidden":"true"}),w.jsx("span",{children:"Upgrade PRO"})]})}),s&&w.jsx("div",{className:"px-3 pb-3",children:w.jsxs("button",{type:"button","aria-label":"Adicionar widget ao dashboard",title:"Adicionar widget",onClick:M,className:"w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring",children:[w.jsx(wi,{size:14,"aria-hidden":"true"}),w.jsx("span",{children:"Add Widget"})]})}),w.jsxs("div",{className:"px-2 pb-3 border-t border-border pt-3 space-y-0.5",children:[w.jsxs("button",{type:"button","aria-label":e==="light"?"Ativar modo escuro":"Ativar modo claro",title:e==="light"?"Dark mode":"Light mode",onClick:C,className:["w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg","text-muted-foreground hover:bg-accent hover:text-foreground","transition-colors text-[0.8125rem]","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",T?"justify-center":""].join(" "),children:[e==="light"?w.jsx(Py,{size:16,"aria-hidden":"true"}):w.jsx(Vy,{size:16,"aria-hidden":"true"}),s&&w.jsx("span",{children:e==="light"?"Dark mode":"Light mode"})]}),w.jsxs("button",{type:"button","aria-label":"Sair da conta",title:"Sair",onClick:J,className:["w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg","text-muted-foreground hover:bg-red-500/10 hover:text-red-500","transition-colors text-[0.8125rem]","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",T?"justify-center":""].join(" "),children:[w.jsx(Zw,{size:16,"aria-hidden":"true"}),s&&w.jsx("span",{children:"Sair"})]})]})]})]})}),Ey="text/x-widget-index",vC=$.memo(function({id:e,title:t,index:s,children:o,className:u=""}){const{removeWidget:h,reorderWidgets:m}=ys(),[g,_]=$.useState(!1),[T,A]=$.useState(!1),C=$.useCallback(ae=>{ae.dataTransfer.setData(Ey,String(s)),ae.dataTransfer.effectAllowed="move",requestAnimationFrame(()=>A(!0))},[s]),M=$.useCallback(()=>{A(!1),_(!1)},[]),Q=$.useCallback(ae=>{ae.preventDefault(),ae.dataTransfer.dropEffect="move",_(!0)},[]),J=$.useCallback(ae=>{ae.currentTarget.contains(ae.relatedTarget)||_(!1)},[]),K=$.useCallback(ae=>{ae.preventDefault(),_(!1);const me=ae.dataTransfer.getData(Ey);if(!me)return;const Se=Number(me);Number.isNaN(Se)||Se===s||m(Se,s)},[s,m]),pe=$.useCallback(()=>h(e),[e,h]);return w.jsxs("div",{role:"region","aria-label":t,"aria-roledescription":"Widget arrastável",draggable:!0,onDragStart:C,onDragEnd:M,onDragOver:Q,onDragLeave:J,onDrop:K,className:["group bg-card border rounded-xl","shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]","transition-all duration-200 flex flex-col",T?"opacity-30 scale-[0.96] border-border/50":"",g&&!T?"border-foreground/30 bg-accent/20 ring-2 ring-foreground/10 scale-[1.01]":T?"":"border-border",u].join(" "),children:[w.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-border/60",children:[w.jsxs("div",{className:"flex items-center gap-2 cursor-grab active:cursor-grabbing select-none",children:[w.jsx(Ww,{size:12,"aria-hidden":"true",className:"text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity"}),w.jsx("span",{className:"text-foreground text-[0.8125rem] font-medium",children:t})]}),w.jsx("button",{type:"button","aria-label":`Remover widget ${t}`,title:`Remover ${t}`,onClick:pe,className:"p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-accent text-muted-foreground transition-all focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring",children:w.jsx(ac,{size:12,"aria-hidden":"true"})})]}),w.jsx("div",{className:"flex-1 p-4 overflow-auto",children:o})]})}),wC=$.memo(function({checked:e,onChange:t,label:s,id:o}){return w.jsxs("div",{className:"flex items-center justify-between px-1",children:[w.jsx("label",{htmlFor:o,className:"text-foreground text-[0.8125rem] cursor-pointer",children:s}),w.jsx("button",{id:o,type:"button",role:"switch","aria-checked":e,"aria-label":s,title:s,onClick:()=>t(!e),className:["w-9 h-5 rounded-full transition-colors relative","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",e?"bg-foreground":"bg-muted"].join(" "),children:w.jsx("div",{"aria-hidden":"true",className:["absolute top-0.5 w-4 h-4 rounded-full transition-transform",e?"translate-x-4 bg-background":"translate-x-0.5 bg-muted-foreground"].join(" ")})})]})}),EC=$.memo(function(){const{showSettings:e,setShowSettings:t,theme:s,setTheme:o,showGrid:u,setShowGrid:h,placedWidgets:m,removeWidget:g}=ys(),_=$.useRef(null);$.useEffect(()=>{var C;e&&((C=_.current)==null||C.focus())},[e]),$.useEffect(()=>{if(!e)return;const C=M=>{M.key==="Escape"&&t(!1)};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[e,t]);const T=$.useCallback(C=>o(C),[o]),A=$.useCallback(C=>h(C),[h]);return e?w.jsxs(w.Fragment,{children:[w.jsx("div",{"aria-hidden":"true",className:"fixed inset-0 bg-black/15 z-50 backdrop-blur-[2px]",onClick:()=>t(!1)}),w.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Configurações do dashboard",className:"fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border z-50 flex flex-col shadow-lg",children:[w.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-border",children:[w.jsx("h2",{className:"text-foreground text-[0.9375rem]",children:"Settings"}),w.jsx("button",{ref:_,type:"button","aria-label":"Fechar configurações",title:"Fechar",onClick:()=>t(!1),className:"p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring",children:w.jsx(ac,{size:16,"aria-hidden":"true"})})]}),w.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[w.jsxs("section",{"aria-labelledby":"settings-appearance",className:"space-y-3",children:[w.jsx("p",{id:"settings-appearance",className:"text-muted-foreground text-[0.6875rem] uppercase tracking-[0.05em]",children:"Appearance"}),w.jsx("div",{className:"flex gap-2",role:"radiogroup","aria-label":"Tema de cores",children:["light","dark"].map(C=>w.jsxs("button",{type:"button",role:"radio","aria-checked":s===C,"aria-label":C==="light"?"Tema claro":"Tema escuro",title:C==="light"?"Light theme":"Dark theme",onClick:()=>T(C),className:["flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border transition-all text-[0.8125rem]","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",s===C?"border-foreground/30 bg-accent":"border-border hover:border-muted-foreground"].join(" "),children:[C==="light"?w.jsx(Vy,{size:14,"aria-hidden":"true"}):w.jsx(Py,{size:14,"aria-hidden":"true"}),w.jsx("span",{className:"text-foreground capitalize",children:C})]},C))})]}),w.jsxs("section",{"aria-labelledby":"settings-canvas",className:"space-y-3",children:[w.jsx("p",{id:"settings-canvas",className:"text-muted-foreground text-[0.6875rem] uppercase tracking-[0.05em]",children:"Canvas"}),w.jsx(wC,{id:"grid-guides-toggle",label:"Show grid guides",checked:u,onChange:A})]}),m.length>0&&w.jsxs("section",{"aria-labelledby":"settings-widgets",className:"space-y-3",children:[w.jsx("p",{id:"settings-widgets",className:"text-muted-foreground text-[0.6875rem] uppercase tracking-[0.05em]",children:"Active Widgets"}),w.jsx("ul",{className:"space-y-1","aria-label":"Widgets ativos",children:m.map(C=>w.jsxs("li",{className:"flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors",children:[w.jsx("span",{className:"text-foreground text-[0.8125rem]",children:C.title}),w.jsx("button",{type:"button","aria-label":`Remover widget ${C.title}`,title:`Remover ${C.title}`,onClick:()=>g(C.id),className:"text-muted-foreground text-[0.6875rem] hover:text-destructive transition-colors focus-visible:ring-2 focus-visible:ring-ring",children:"Remove"})]},C.id))})]})]})]})]}):null}),TC={"check-square":Dy,"file-text":Cy,calendar:ky,timer:Oy,cloud:xy,music:Ny,"bar-chart":Ay,zap:NE},IC=$.memo(function({template:e,isPlaced:t,isLocked:s,onAdd:o}){const u=TC[e.icon],h=t||s,m=$.useCallback(()=>{h||o(e.type)},[h,o,e.type]);return w.jsxs("button",{type:"button",onClick:m,disabled:h,"aria-disabled":h,"aria-label":t?`${e.title} já adicionado`:s?`${e.title} – disponível no plano PRO`:`Adicionar widget ${e.title}`,title:t?`${e.title} já adicionado`:s?`Upgrade para PRO para adicionar ${e.title}`:`Adicionar ${e.title}`,className:["w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all",h?"border-border opacity-40 cursor-not-allowed":"border-border hover:border-muted-foreground hover:bg-accent/40 cursor-pointer","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"].join(" "),children:[w.jsx("div",{className:"p-2 rounded-lg bg-muted shrink-0","aria-hidden":"true",children:u&&w.jsx(u,{size:16,"aria-hidden":!0,className:"text-foreground"})}),w.jsxs("div",{className:"min-w-0 flex-1",children:[w.jsx("p",{className:"text-foreground text-[0.8125rem]",children:e.title}),w.jsx("p",{className:"text-muted-foreground text-[0.6875rem]",children:e.description})]}),t&&w.jsx("span",{className:"ml-auto text-muted-foreground text-[0.6875rem] shrink-0","aria-hidden":"true",children:"Added"}),s&&!t&&w.jsx(Md,{size:14,className:"ml-auto text-amber-500 shrink-0","aria-hidden":"true"})]})}),SC=$.memo(function(){const{showAddPanel:e,setShowAddPanel:t,addWidget:s,placedWidgets:o,setShowUpgradeModal:u}=ys(),{canAddWidget:h,user:m}=Po(),g=$.useRef(null),_=(m==null?void 0:m.plan)==="free",T=!h(o.length);$.useEffect(()=>{var M;e&&((M=g.current)==null||M.focus())},[e]),$.useEffect(()=>{if(!e)return;const M=Q=>{Q.key==="Escape"&&t(!1)};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[e,t]);const A=$.useCallback(M=>{s(M),t(!1)},[s,t]);if(!e)return null;const C=new Set(o.map(M=>M.type));return w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"fixed inset-0 bg-black/15 z-50 backdrop-blur-[2px]","aria-hidden":"true",onClick:()=>t(!1)}),w.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":"add-widget-title",className:"fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border z-50 flex flex-col shadow-lg",children:[w.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-border",children:[w.jsx("h2",{className:"text-foreground text-[0.9375rem]",id:"add-widget-title",children:"Add Widget"}),w.jsx("button",{ref:g,type:"button","aria-label":"Fechar painel de widgets",title:"Fechar",onClick:()=>t(!1),className:"p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring",children:w.jsx(ac,{size:16,"aria-hidden":"true"})})]}),_&&w.jsx("div",{className:"px-4 pt-4",children:w.jsxs("div",{className:["flex items-center gap-2.5 p-3 rounded-xl border text-[0.75rem]",T?"bg-amber-500/5 border-amber-500/20 text-amber-600":"bg-muted/50 border-border text-muted-foreground"].join(" "),children:[T?w.jsx(Md,{size:14,className:"shrink-0","aria-hidden":"true"}):w.jsx(go,{size:14,className:"shrink-0","aria-hidden":"true"}),w.jsx("span",{children:T?"Limite atingido – faça upgrade para adicionar mais":`${o.length}/3 widgets usados`}),T&&w.jsx("button",{type:"button","aria-label":"Fazer upgrade para plano PRO",title:"Upgrade",onClick:()=>{t(!1),u(!0)},className:"ml-auto text-amber-600 font-semibold hover:underline shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded",children:"Upgrade"})]})}),w.jsx("div",{role:"list","aria-labelledby":"add-widget-title",className:"flex-1 overflow-y-auto p-4 space-y-2",children:s0.map(M=>{const Q=C.has(M.type),J=T&&!Q;return w.jsx("div",{role:"listitem",children:w.jsx(IC,{template:M,isPlaced:Q,isLocked:J,onAdd:A})},M.type)})})]})]})}),kC=$.memo(function(){return w.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 pointer-events-none opacity-25",style:{backgroundImage:["linear-gradient(to right, var(--border) 1px, transparent 1px)","linear-gradient(to bottom, var(--border) 1px, transparent 1px)"].join(","),backgroundSize:"60px 60px"}})}),AC=$.memo(function(){return w.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at center, transparent 30%, var(--background) 80%)"}})}),xC=$.memo(function({onAdd:e,index:t}){return w.jsxs("button",{type:"button","aria-label":`Adicionar widget na posição ${t+1}`,title:`Adicionar widget na posição ${t+1}`,onClick:e,className:"aspect-[4/3] rounded-xl border border-dashed border-border/70 hover:border-muted-foreground/40 hover:bg-accent/20 transition-all flex flex-col items-center justify-center gap-1.5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:[w.jsx(wi,{size:14,"aria-hidden":"true",className:"text-muted-foreground/25 group-hover:text-muted-foreground/60 transition-colors"}),w.jsx("span",{className:"text-muted-foreground/25 group-hover:text-muted-foreground/60 transition-colors text-[0.5625rem]",children:"Add widget"})]})}),CC=$.memo(function(){const{setShowAddPanel:e,showGrid:t}=ys(),s=()=>e(!0);return w.jsxs("section",{"aria-label":"Dashboard vazio – adicione seu primeiro widget",className:"flex-1 flex flex-col items-center justify-center px-6 relative",children:[t&&w.jsx(kC,{}),w.jsx(AC,{}),w.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center max-w-lg space-y-8",children:[w.jsx("div",{"aria-hidden":"true",className:"p-5 rounded-2xl bg-muted/40 border border-border/50",children:w.jsx(Ry,{size:24,strokeWidth:1.2,className:"text-muted-foreground/60"})}),w.jsxs("div",{className:"space-y-2.5",children:[w.jsx("h2",{className:"text-foreground/80 text-[1.375rem]",children:"Start building your workspace"}),w.jsx("p",{className:"text-muted-foreground/60 max-w-sm mx-auto text-[0.8125rem] leading-relaxed",children:"Your workspace is empty. Add widgets to personalise your dashboard and build the layout that works for you."})]}),w.jsxs("button",{type:"button","aria-label":"Adicionar primeiro widget ao dashboard",title:"Add your first widget",onClick:s,className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:[w.jsx(wi,{size:15,"aria-hidden":"true"}),w.jsx("span",{children:"Add your first widget"})]}),w.jsx("div",{role:"list","aria-label":"Células de widget disponíveis",className:"grid grid-cols-3 gap-3 w-full max-w-md pt-2",children:Array.from({length:6},(o,u)=>w.jsx("div",{role:"listitem",children:w.jsx(xC,{onAdd:s,index:u})},u))})]})]})});function RC(){return w.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",width:"18",height:"18",children:[w.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z",fill:"#4285F4"}),w.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),w.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),w.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})}function Ty(i){return{"auth/email-already-in-use":"Este email já está em uso.","auth/invalid-email":"Email inválido.","auth/weak-password":"A senha deve ter pelo menos 6 caracteres.","auth/user-not-found":"Nenhuma conta encontrada com este email.","auth/wrong-password":"Senha incorreta.","auth/invalid-credential":"Email ou senha incorretos.","auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde.","auth/popup-closed-by-user":"Login cancelado.","auth/network-request-failed":"Erro de conexão. Verifique sua internet."}[i]??"Ocorreu um erro. Tente novamente."}const PC=$.memo(function(){const{signInWithGoogle:e,signInWithEmail:t,signUpWithEmail:s}=Po(),[o,u]=$.useState("login"),[h,m]=$.useState(""),[g,_]=$.useState(""),[T,A]=$.useState(""),[C,M]=$.useState(!1),[Q,J]=$.useState(!1),[K,pe]=$.useState(!1),[ae,me]=$.useState(null),Se=$.useCallback(()=>{m(""),_(""),A(""),me(null),M(!1)},[]),ve=$.useCallback(k=>{u(k),Se()},[Se]),ge=$.useCallback(async k=>{k.preventDefault(),me(null),J(!0);try{if(o==="login")await t(h,g);else{if(!T.trim()){me("Preencha seu nome."),J(!1);return}await s(h,g,T.trim())}}catch(D){const N=(D==null?void 0:D.code)??"";me(Ty(N)),J(!1)}},[o,h,g,T,t,s]),R=$.useCallback(async()=>{me(null),pe(!0);try{await e()}catch(k){const D=(k==null?void 0:k.code)??"";me(Ty(D)),pe(!1)}},[e]),I=Q||K;return w.jsxs("div",{className:"min-h-screen bg-background flex items-center justify-center px-4 py-8",children:[w.jsx("div",{"aria-hidden":"true",className:"fixed inset-0 pointer-events-none opacity-[0.07]",style:{backgroundImage:["linear-gradient(to right, var(--border) 1px, transparent 1px)","linear-gradient(to bottom, var(--border) 1px, transparent 1px)"].join(","),backgroundSize:"60px 60px"}}),w.jsxs("div",{className:"relative z-10 w-full max-w-[420px] flex flex-col items-center",children:[w.jsx("div",{className:"p-4 rounded-2xl bg-card border border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mb-8",children:w.jsx(Ry,{size:28,strokeWidth:1.2,className:"text-foreground/70","aria-hidden":"true"})}),w.jsxs("div",{className:"w-full bg-card border border-border rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden",children:[w.jsxs("div",{className:"px-6 pt-6 pb-4 text-center",children:[w.jsx("h1",{className:"text-foreground text-[1.125rem] font-medium tracking-tight",children:"Dashboard G-Pro"}),w.jsx("p",{className:"text-muted-foreground text-[0.8125rem] mt-1.5",children:o==="login"?"Acesse seu workspace personalizado":"Crie sua conta gratuitamente"})]}),w.jsx("div",{className:"px-6 pb-4",children:w.jsx("div",{className:"flex bg-muted/60 rounded-xl p-1",children:["login","register"].map(k=>w.jsx("button",{type:"button",role:"tab","aria-selected":o===k,"aria-label":k==="login"?"Aba de login":"Aba de cadastro",title:k==="login"?"Entrar":"Criar conta",onClick:()=>ve(k),disabled:I,className:["flex-1 py-2 rounded-lg text-[0.8125rem] transition-all","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",o===k?"bg-card text-foreground shadow-sm font-medium":"text-muted-foreground hover:text-foreground"].join(" "),children:k==="login"?"Entrar":"Criar conta"},k))})}),w.jsxs("form",{onSubmit:ge,className:"px-6 pb-2 space-y-3",children:[o==="register"&&w.jsxs("div",{className:"relative",children:[w.jsx(CE,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none","aria-hidden":"true"}),w.jsx("input",{type:"text",value:T,onChange:k=>A(k.target.value),placeholder:"Seu nome","aria-label":"Nome",autoComplete:"name",disabled:I,className:["w-full pl-10 pr-4 py-2.5 rounded-xl","bg-muted/40 border border-border","text-foreground text-[0.8125rem]","placeholder:text-muted-foreground/50","focus:border-foreground/30 focus:bg-card","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none","transition-all disabled:opacity-50"].join(" ")})]}),w.jsxs("div",{className:"relative",children:[w.jsx(tE,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none","aria-hidden":"true"}),w.jsx("input",{type:"email",value:h,onChange:k=>m(k.target.value),placeholder:"Email","aria-label":"Email",autoComplete:"email",required:!0,disabled:I,className:["w-full pl-10 pr-4 py-2.5 rounded-xl","bg-muted/40 border border-border","text-foreground text-[0.8125rem]","placeholder:text-muted-foreground/50","focus:border-foreground/30 focus:bg-card","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none","transition-all disabled:opacity-50"].join(" ")})]}),w.jsxs("div",{className:"relative",children:[w.jsx(Md,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none","aria-hidden":"true"}),w.jsx("input",{type:C?"text":"password",value:g,onChange:k=>_(k.target.value),placeholder:o==="register"?"Senha (mín. 6 caracteres)":"Senha","aria-label":"Senha",autoComplete:o==="login"?"current-password":"new-password",required:!0,minLength:6,disabled:I,className:["w-full pl-10 pr-11 py-2.5 rounded-xl","bg-muted/40 border border-border","text-foreground text-[0.8125rem]","placeholder:text-muted-foreground/50","focus:border-foreground/30 focus:bg-card","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none","transition-all disabled:opacity-50"].join(" ")}),w.jsx("button",{type:"button",tabIndex:-1,"aria-label":C?"Ocultar senha":"Mostrar senha",title:C?"Ocultar senha":"Mostrar senha",onClick:()=>M(!C),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-muted-foreground transition-colors",children:C?w.jsx(Fw,{size:15,"aria-hidden":"true"}):w.jsx(zw,{size:15,"aria-hidden":"true"})})]}),ae&&w.jsx("div",{className:"px-3 py-2.5 rounded-xl bg-red-500/5 border border-red-500/15",role:"alert",children:w.jsx("p",{className:"text-red-500 text-[0.75rem]",children:ae})}),w.jsxs("button",{type:"submit",disabled:I,"aria-label":o==="login"?"Entrar com email":"Criar conta",title:o==="login"?"Entrar":"Criar conta",className:["w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl","bg-foreground text-background font-medium text-[0.8125rem]","hover:opacity-90 transition-all","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none","disabled:opacity-50 disabled:cursor-not-allowed"].join(" "),children:[Q?w.jsx(cd,{size:16,className:"animate-spin","aria-hidden":"true"}):w.jsx(xw,{size:16,"aria-hidden":"true"}),w.jsx("span",{children:Q?"Aguarde...":o==="login"?"Entrar":"Criar conta"})]})]}),w.jsx("div",{className:"px-6 py-3",children:w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:w.jsx("div",{className:"w-full border-t border-border"})}),w.jsx("div",{className:"relative flex justify-center",children:w.jsx("span",{className:"bg-card px-3 text-muted-foreground/50 text-[0.6875rem]",children:"ou continue com"})})]})}),w.jsx("div",{className:"px-6 pb-6",children:w.jsxs("button",{type:"button",disabled:I,"aria-label":"Entrar com Google",title:"Entrar com Google",onClick:R,className:["w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl","border border-border bg-card hover:bg-accent/40","text-foreground text-[0.8125rem]","transition-all","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none","disabled:opacity-50 disabled:cursor-not-allowed"].join(" "),children:[K?w.jsx(cd,{size:16,className:"animate-spin","aria-hidden":"true"}):w.jsx(RC,{}),w.jsx("span",{children:"Google"})]})})]}),w.jsx("p",{className:"text-muted-foreground/40 text-[0.6875rem] mt-6 text-center",children:"Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade."})]})]})}),NC=["Widgets ilimitados","Temas personalizados","Suporte prioritário","Exportação de dados","Integrações avançadas"],bC=$.memo(function(){const{showUpgradeModal:e,setShowUpgradeModal:t}=ys(),s=$.useRef(null);return $.useEffect(()=>{var o;e&&((o=s.current)==null||o.focus())},[e]),$.useEffect(()=>{if(!e)return;const o=u=>{u.key==="Escape"&&t(!1)};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[e,t]),e?w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"fixed inset-0 bg-black/30 z-[60] backdrop-blur-[3px]","aria-hidden":"true",onClick:()=>t(!1)}),w.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"upgrade-title",className:"fixed inset-0 z-[60] flex items-center justify-center p-4",children:w.jsxs("div",{className:"w-full max-w-md bg-card border border-border rounded-2xl shadow-xl overflow-hidden",children:[w.jsxs("div",{className:"flex items-center justify-between px-6 pt-6 pb-2",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"p-2 rounded-xl bg-amber-500/10",children:w.jsx(go,{size:18,className:"text-amber-500","aria-hidden":"true"})}),w.jsx("h2",{id:"upgrade-title",className:"text-foreground text-[1rem] font-medium",children:"Upgrade para PRO"})]}),w.jsx("button",{ref:s,type:"button","aria-label":"Fechar modal de upgrade",title:"Fechar",onClick:()=>t(!1),className:"p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring",children:w.jsx(ac,{size:16,"aria-hidden":"true"})})]}),w.jsxs("div",{className:"px-6 py-4 space-y-4",children:[w.jsxs("div",{className:"p-3 rounded-xl bg-amber-500/5 border border-amber-500/20",children:[w.jsx("p",{className:"text-foreground text-[0.8125rem]",children:"Você atingiu o limite do plano gratuito"}),w.jsx("p",{className:"text-muted-foreground text-[0.75rem] mt-1",children:"O plano Free permite até 3 widgets. Faça upgrade para desbloquear widgets ilimitados."})]}),w.jsx("ul",{className:"space-y-2","aria-label":"Benefícios do plano PRO",children:NC.map(o=>w.jsxs("li",{className:"flex items-center gap-2.5",children:[w.jsx("div",{className:"p-0.5 rounded-full bg-emerald-500/10",children:w.jsx(Ow,{size:12,className:"text-emerald-500","aria-hidden":"true"})}),w.jsx("span",{className:"text-foreground text-[0.8125rem]",children:o})]},o))}),w.jsxs("div",{className:"text-center py-2",children:[w.jsxs("div",{className:"flex items-baseline justify-center gap-1",children:[w.jsx("span",{className:"text-foreground text-2xl font-semibold",children:"R$ 19"}),w.jsx("span",{className:"text-muted-foreground text-[0.75rem]",children:"/mês"})]}),w.jsx("p",{className:"text-muted-foreground/60 text-[0.6875rem] mt-1",children:"Cancele quando quiser"})]})]}),w.jsxs("div",{className:"px-6 pb-6 space-y-2",children:[w.jsxs("button",{type:"button","aria-label":"Fazer upgrade para plano PRO",title:"Fazer upgrade para PRO",onClick:()=>{t(!1)},className:["w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl","bg-foreground text-background font-medium text-[0.875rem]","hover:opacity-90 transition-opacity","focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"].join(" "),children:[w.jsx(go,{size:15,"aria-hidden":"true"}),w.jsx("span",{children:"Assinar PRO"})]}),w.jsx("button",{type:"button","aria-label":"Continuar com plano gratuito",title:"Continuar com plano gratuito",onClick:()=>t(!1),className:"w-full px-4 py-2.5 rounded-xl text-muted-foreground text-[0.8125rem] hover:bg-accent/50 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:"Continuar no plano Free"})]})]})})]}):null}),DC=$.memo(function(){const[e,t]=$.useState([]),[s,o]=$.useState(""),u=$.useCallback(g=>{t(_=>_.map(T=>T.id===g?{...T,done:!T.done}:T))},[]),h=$.useCallback(()=>{s.trim()&&(t(g=>[...g,{id:Date.now(),text:s.trim(),done:!1}]),o(""))},[s]),m=$.useCallback(g=>{g.key==="Enter"&&h()},[h]);return w.jsxs("div",{className:"space-y-2.5",children:[w.jsxs("div",{className:"flex gap-2",children:[w.jsx("input",{value:s,onChange:g=>o(g.target.value),onKeyDown:m,placeholder:"Add a task...","aria-label":"New task text",className:"flex-1 px-2.5 py-1.5 rounded-lg bg-muted/60 border border-border text-foreground text-[0.75rem] placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"}),w.jsx("button",{type:"button","aria-label":"Add task",title:"Add task",onClick:h,className:"p-1.5 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:w.jsx(wi,{size:14,"aria-hidden":"true"})})]}),e.length===0?w.jsxs("div",{className:"flex flex-col items-center justify-center py-6 text-muted-foreground/50 gap-2",children:[w.jsx(Dy,{size:20,strokeWidth:1.2,"aria-hidden":"true"}),w.jsx("span",{className:"text-[0.6875rem]",children:"No tasks yet"})]}):w.jsx("ul",{className:"space-y-0.5","aria-label":"Task list",children:e.map(g=>w.jsxs("li",{role:"checkbox","aria-checked":g.done,"aria-label":g.text,tabIndex:0,onClick:()=>u(g.id),onKeyDown:_=>{(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),u(g.id))},className:"flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent/40 cursor-pointer transition-colors",children:[w.jsx("div",{"aria-hidden":"true",className:`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${g.done?"bg-foreground border-foreground":"border-muted-foreground/50"}`,children:g.done&&w.jsx("svg",{width:"8",height:"8",viewBox:"0 0 10 10","aria-hidden":"true",children:w.jsx("path",{d:"M2 5l2.5 2.5L8 3",stroke:"var(--background)",strokeWidth:"1.5",fill:"none"})})}),w.jsx("span",{className:`text-[0.75rem] ${g.done?"line-through text-muted-foreground":"text-foreground"}`,children:g.text})]},g.id))})]})}),Iy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],VC=["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM"],OC=$.memo(function(){const e=new Date().getDay(),t=e===0?6:e-1;return w.jsx("div",{className:"overflow-x-auto",role:"region","aria-label":"Weekly calendar view",children:w.jsxs("div",{className:"min-w-[400px]",children:[w.jsxs("div",{className:"grid grid-cols-8 gap-px mb-1",children:[w.jsx("div",{}),Iy.map((s,o)=>w.jsx("div",{className:`text-center py-1 rounded text-[0.625rem] ${o===t?"bg-foreground text-background":"text-muted-foreground"}`,children:s},s))]}),w.jsx("div",{className:"grid grid-cols-8 gap-px",children:VC.map(s=>w.jsxs("div",{className:"contents",children:[w.jsx("div",{className:"text-muted-foreground/60 py-2 pr-2 text-right text-[0.5625rem]",children:s}),Iy.map((o,u)=>w.jsx("div",{className:"border-t border-border/40 py-2 min-h-[24px]"},u))]},s))}),w.jsxs("div",{className:"flex flex-col items-center py-3 text-muted-foreground/40 gap-1",children:[w.jsx(ky,{size:14,strokeWidth:1.2,"aria-hidden":"true"}),w.jsx("span",{className:"text-[0.5625rem]",children:"No events scheduled"})]})]})})}),LC=$.memo(function(){const[e,t]=$.useState("");return w.jsx("textarea",{value:e,onChange:s=>t(s.target.value),placeholder:"Start typing...","aria-label":"Quick notes",className:"w-full h-full min-h-[120px] bg-transparent text-foreground text-[0.8125rem] leading-[1.7] placeholder:text-muted-foreground/50 outline-none resize-none"})}),Pu=[{label:"Focus",seconds:1500},{label:"Short Break",seconds:300},{label:"Long Break",seconds:900}],MC=$.memo(function(){const[e,t]=$.useState(0),[s,o]=$.useState(Pu[0].seconds),[u,h]=$.useState(!1),m=$.useRef();$.useEffect(()=>(u&&(m.current=setInterval(()=>{o(C=>C<=1?(h(!1),0):C-1)},1e3)),()=>clearInterval(m.current)),[u]);const g=C=>{t(C),o(Pu[C].seconds),h(!1)},_=()=>{o(Pu[e].seconds),h(!1)},T=String(Math.floor(s/60)).padStart(2,"0"),A=String(s%60).padStart(2,"0");return w.jsxs("div",{className:"flex flex-col items-center gap-4",role:"timer","aria-label":"Focus timer",children:[w.jsx("div",{className:"flex gap-1 bg-muted/60 rounded-lg p-0.5",role:"tablist","aria-label":"Timer modes",children:Pu.map((C,M)=>w.jsx("button",{type:"button",role:"tab","aria-selected":M===e,"aria-label":`${C.label} mode`,title:C.label,onClick:()=>g(M),className:`px-3 py-1 rounded-md transition-colors text-[0.75rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${M===e?"bg-card text-foreground shadow-sm":"text-muted-foreground"}`,children:C.label},C.label))}),w.jsxs("div",{className:"relative w-32 h-32",children:[w.jsx("svg",{className:"w-full h-full -rotate-90",viewBox:"0 0 100 100","aria-hidden":"true",children:w.jsx("circle",{cx:"50",cy:"50",r:"44",fill:"none",stroke:"var(--border)",strokeWidth:"3"})}),w.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[w.jsxs("span",{className:"text-foreground tabular-nums text-2xl","aria-live":"polite","aria-atomic":"true",children:[T,":",A]}),w.jsx("span",{className:"text-muted-foreground/50 text-[0.6875rem]",children:u?"Running":"Ready"})]})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("button",{type:"button","aria-label":"Reset timer",title:"Reset",onClick:_,className:"p-2 rounded-full hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:w.jsx(vE,{size:14,"aria-hidden":"true"})}),w.jsx("button",{type:"button","aria-label":u?"Pause timer":"Start timer",title:u?"Pause":"Start",onClick:()=>h(!u),className:"p-2.5 rounded-full border border-border hover:bg-accent text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:u?w.jsx(mE,{size:16,"aria-hidden":"true"}):w.jsx(by,{size:16,"aria-hidden":"true"})})]})]})}),jC=$.memo(function(){return w.jsxs("div",{className:"flex flex-col items-center justify-center py-6 gap-3 text-muted-foreground/50",children:[w.jsx(xy,{size:28,strokeWidth:1.2,"aria-hidden":"true"}),w.jsxs("div",{className:"text-center space-y-1",children:[w.jsx("p",{className:"text-[0.8125rem]",children:"No location set"}),w.jsx("p",{className:"text-[0.6875rem] text-muted-foreground/40",children:"Connect a weather service to see conditions"})]}),w.jsxs("button",{type:"button","aria-label":"Set weather location",title:"Set location",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-border text-muted-foreground/60 hover:text-muted-foreground hover:border-muted-foreground/50 transition-colors text-[0.6875rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:[w.jsx(rE,{size:12,"aria-hidden":"true"}),w.jsx("span",{children:"Set location"})]})]})}),FC=$.memo(function(){return w.jsxs("div",{className:"flex flex-col items-center justify-center py-6 gap-3 text-muted-foreground/50",children:[w.jsx("div",{className:"w-14 h-14 rounded-xl bg-muted/60 border border-border flex items-center justify-center","aria-hidden":"true",children:w.jsx(Ny,{size:20,strokeWidth:1.2})}),w.jsxs("div",{className:"text-center space-y-1",children:[w.jsx("p",{className:"text-[0.8125rem]",children:"No music playing"}),w.jsx("p",{className:"text-[0.6875rem] text-muted-foreground/40",children:"Add tracks or connect a service"})]}),w.jsx("div",{className:"w-full max-w-[200px] h-1 bg-muted rounded-full",role:"progressbar","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Music playback progress"}),w.jsx("button",{type:"button","aria-label":"Play music",title:"Play music",className:"p-2.5 rounded-full border border-dashed border-border text-muted-foreground/40 hover:text-muted-foreground hover:border-muted-foreground/50 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:w.jsx(by,{size:14,"aria-hidden":"true"})})]})}),UC=[{label:"Tasks",pct:0},{label:"Focus Time",pct:0},{label:"Notes",pct:0},{label:"Weekly Goal",pct:0}],zC=$.memo(function(){return w.jsxs("div",{className:"space-y-4",role:"region","aria-label":"Progress statistics",children:[UC.map(e=>w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("span",{className:"text-muted-foreground text-[0.8125rem]",children:e.label}),w.jsx("span",{className:"text-muted-foreground/40 text-[0.75rem]",children:"--"})]}),w.jsx("div",{className:"h-2 bg-muted rounded-full overflow-hidden",role:"progressbar","aria-valuenow":e.pct,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${e.label} progress`})]},e.label)),w.jsxs("div",{className:"flex flex-col items-center pt-2 text-muted-foreground/40 gap-1.5",children:[w.jsx(Ay,{size:16,strokeWidth:1.2,"aria-hidden":"true"}),w.jsx("span",{className:"text-[0.6875rem]",children:"No data yet"})]})]})}),BC=[{icon:wi,label:"New Task"},{icon:Cy,label:"New Note"},{icon:Nw,label:"Add Event"},{icon:Oy,label:"Start Timer"},{icon:Qw,label:"Save Link"},{icon:AE,label:"Upload"},{icon:aE,label:"Message"},{icon:Rw,label:"Bookmark"}],$C=$.memo(function(){return w.jsx("div",{className:"grid grid-cols-4 gap-2",role:"toolbar","aria-label":"Quick actions",children:BC.map(({icon:e,label:t})=>w.jsxs("button",{type:"button","aria-label":t,title:t,className:"flex flex-col items-center gap-1.5 p-3 rounded-xl border border-dashed border-border hover:border-muted-foreground/40 hover:bg-accent/30 transition-all group focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:[w.jsx("div",{className:"p-2 rounded-lg bg-muted/40 group-hover:bg-muted transition-colors","aria-hidden":"true",children:w.jsx(e,{size:14,className:"text-muted-foreground/50 group-hover:text-foreground transition-colors"})}),w.jsx("span",{className:"text-muted-foreground/50 group-hover:text-foreground transition-colors text-[0.6875rem]",children:t})]},t))})}),WC={tasks:DC,calendar:OC,notes:LC,timer:MC,weather:jC,music:FC,stats:zC,quickactions:$C},HC={1:"col-span-1",2:"col-span-1 md:col-span-2",3:"col-span-1 md:col-span-3"},qC=1e3,GC=$.memo(function(){return w.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:["linear-gradient(to right, var(--border) 1px, transparent 1px)","linear-gradient(to bottom, var(--border) 1px, transparent 1px)"].join(","),backgroundSize:"80px 80px"}})}),KC=$.memo(function(){return w.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:w.jsxs("div",{className:"flex flex-col items-center gap-3",children:[w.jsx(cd,{size:24,className:"animate-spin text-muted-foreground","aria-hidden":"true"}),w.jsx("p",{className:"text-muted-foreground text-[0.8125rem]",children:"Carregando..."})]})})});function QC(){const{placedWidgets:i,setPlacedWidgets:e,sidebarOpen:t,setSidebarOpen:s,setShowAddPanel:o,showGrid:u}=ys(),{user:h}=Po(),m=$.useRef(!0);$.useEffect(()=>{if(!h)return;let A=!1;async function C(){try{const M=await lC(h.uid);!A&&M.length>0&&e(M)}catch(M){console.error("[Dashboard] Failed to load layout:",M)}}return C(),()=>{A=!0}},[h,e]);const g=$.useCallback(async(A,C)=>{try{await aC(A,C)}catch(M){console.error("[Dashboard] Failed to save layout:",M)}},[]),_=bE(g,qC);$.useEffect(()=>{if(h){if(m.current){m.current=!1;return}_(h.uid,i)}},[i,h,_]);const T=i.length>0;return w.jsxs("div",{className:"flex h-screen bg-background overflow-hidden",children:[w.jsx(_C,{}),w.jsxs("main",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",role:"main",children:[w.jsxs("header",{className:"flex items-center justify-between px-4 lg:px-6 py-3 border-b border-border/60 shrink-0",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("button",{type:"button","aria-label":t?"Fechar menu lateral":"Abrir menu lateral",title:t?"Fechar menu":"Abrir menu","aria-expanded":t,"aria-controls":"sidebar",onClick:()=>s(!t),className:"lg:hidden p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:w.jsx(sE,{size:16,"aria-hidden":"true"})}),w.jsx("h1",{className:"text-foreground text-sm font-medium",children:"Dashboard"})]}),T&&w.jsxs("button",{type:"button","aria-label":"Adicionar widget ao dashboard",title:"Add Widget",onClick:()=>o(!0),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors text-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:[w.jsx(wi,{size:13,"aria-hidden":"true"}),w.jsx("span",{className:"hidden sm:inline",children:"Add Widget"})]})]}),T?w.jsxs("div",{className:"flex-1 overflow-y-auto p-4 lg:p-6 relative",children:[u&&w.jsx(GC,{}),w.jsxs("div",{className:"relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min",children:[i.map((A,C)=>{const M=WC[A.type];return M?w.jsx(vC,{id:A.id,title:A.title,index:C,className:HC[A.colSpan]??"col-span-1",children:w.jsx(M,{})},A.id):null}),w.jsxs("button",{type:"button","aria-label":"Adicionar novo widget ao dashboard",title:"Add widget",onClick:()=>o(!0),className:"min-h-[140px] rounded-xl border border-dashed border-border hover:border-muted-foreground/50 hover:bg-accent/20 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",children:[w.jsx(wi,{size:16,"aria-hidden":"true",className:"text-border group-hover:text-muted-foreground transition-colors"}),w.jsx("span",{className:"text-border group-hover:text-muted-foreground text-[11px]",children:"Add widget"})]})]})]}):w.jsx(CC,{})]}),w.jsx(SC,{}),w.jsx(EC,{}),w.jsx(bC,{})]})}function YC(){const{status:i}=Po();return i==="loading"?w.jsx(KC,{}):i==="unauthenticated"?w.jsx(PC,{}):w.jsx(gC,{children:w.jsx(QC,{})})}function JC(){return w.jsx(mC,{children:w.jsx(YC,{})})}Ew.createRoot(document.getElementById("root")).render(w.jsx(JC,{}));
