!function(){let e,t;function n(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var r,o,i,a,l,s,u,c,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function f(e){return e&&e.__esModule?e.default:e}var p={},h={},m=d.parcelRequire94c2;null==m&&((m=function(e){if(e in p)return p[e].exports;if(e in h){var t=h[e];delete h[e];var n={id:e,exports:{}};return p[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){h[e]=t},d.parcelRequire94c2=m),m.register("6ObR8",function(e,t){n(e.exports,"Fragment",function(){return r},function(e){return r=e}),n(e.exports,"jsx",function(){return o},function(e){return o=e}),n(e.exports,"jsxs",function(){return i},function(e){return i=e});var r,o,i,a=m("exYeM"),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,o={},i=null,a=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,r)&&!d.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:c.current}}r=s,o=f,i=f}),m.register("exYeM",function(e,t){e.exports=m("bzfnW")}),m.register("bzfnW",function(e,t){n(e.exports,"Children",function(){return r},function(e){return r=e}),n(e.exports,"Component",function(){return o},function(e){return o=e}),n(e.exports,"Fragment",function(){return i},function(e){return i=e}),n(e.exports,"Profiler",function(){return a},function(e){return a=e}),n(e.exports,"PureComponent",function(){return l},function(e){return l=e}),n(e.exports,"StrictMode",function(){return s},function(e){return s=e}),n(e.exports,"Suspense",function(){return u},function(e){return u=e}),n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return c},function(e){return c=e}),n(e.exports,"cloneElement",function(){return d},function(e){return d=e}),n(e.exports,"createContext",function(){return f},function(e){return f=e}),n(e.exports,"createElement",function(){return p},function(e){return p=e}),n(e.exports,"createFactory",function(){return h},function(e){return h=e}),n(e.exports,"createRef",function(){return m},function(e){return m=e}),n(e.exports,"forwardRef",function(){return g},function(e){return g=e}),n(e.exports,"isValidElement",function(){return v},function(e){return v=e}),n(e.exports,"lazy",function(){return y},function(e){return y=e}),n(e.exports,"memo",function(){return b},function(e){return b=e}),n(e.exports,"startTransition",function(){return w},function(e){return w=e}),n(e.exports,"unstable_act",function(){return x},function(e){return x=e}),n(e.exports,"useCallback",function(){return S},function(e){return S=e}),n(e.exports,"useContext",function(){return k},function(e){return k=e}),n(e.exports,"useDebugValue",function(){return E},function(e){return E=e}),n(e.exports,"useDeferredValue",function(){return C},function(e){return C=e}),n(e.exports,"useEffect",function(){return T},function(e){return T=e}),n(e.exports,"useId",function(){return P},function(e){return P=e}),n(e.exports,"useImperativeHandle",function(){return _},function(e){return _=e}),n(e.exports,"useInsertionEffect",function(){return N},function(e){return N=e}),n(e.exports,"useLayoutEffect",function(){return R},function(e){return R=e}),n(e.exports,"useMemo",function(){return O},function(e){return O=e}),n(e.exports,"useReducer",function(){return A},function(e){return A=e}),n(e.exports,"useRef",function(){return M},function(e){return M=e}),n(e.exports,"useState",function(){return j},function(e){return j=e}),n(e.exports,"useSyncExternalStore",function(){return I},function(e){return I=e}),n(e.exports,"useTransition",function(){return D},function(e){return D=e}),n(e.exports,"version",function(){return z},function(e){return z=e});var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,S,k,E,C,T,P,_,N,R,O,A,M,j,I,D,z,L=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),H=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),K=Symbol.iterator,Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Q}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Q}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var en=et.prototype=new ee;en.constructor=et,X(en,Z.prototype),en.isPureReactComponent=!0;var er=Array.isArray,eo=Object.prototype.hasOwnProperty,ei={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)eo.call(t,r)&&!ea.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:L,type:e,key:i,ref:a,props:o,_owner:ei.current}}function es(e){return"object"==typeof e&&null!==e&&e.$$typeof===L}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],o=0;return function e(t,n,r,o,i){var a,l,s,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case L:case F:c=!0}}if(c)return i=i(c=t),t=""===o?"."+ec(c,0):o,er(i)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(i,n,r,"",function(e){return e})):null!=i&&(es(i)&&(a=i,l=r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+t,i={$$typeof:L,type:a.type,key:l,ref:a.ref,props:a.props,_owner:a._owner}),n.push(i)),1;if(c=0,o=""===o?".":o+":",er(t))for(var d=0;d<t.length;d++){var f=o+ec(u=t[d],d);c+=e(u,n,r,f,i)}else if("function"==typeof(f=null===(s=t)||"object"!=typeof s?null:"function"==typeof(s=K&&s[K]||s["@@iterator"])?s:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=o+ec(u=u.value,d++),c+=e(u,n,r,f,i);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,o++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o=Z,i=U,a=W,l=et,s=$,u=Y,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:ei},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=ei.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)eo.call(t,s)&&!ea.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:L,type:e.type,key:o,ref:i,props:r,_owner:a}},f=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:V,_context:e},e.Consumer=e},p=el,h=function(e){var t=el.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:G,render:e}},v=es,y=function(e){return{$$typeof:q,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:B,type:e,compare:void 0===t?null:t}},w=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},S=function(e,t){return ep.current.useCallback(e,t)},k=function(e){return ep.current.useContext(e)},E=function(){},C=function(e){return ep.current.useDeferredValue(e)},T=function(e,t){return ep.current.useEffect(e,t)},P=function(){return ep.current.useId()},_=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},N=function(e,t){return ep.current.useInsertionEffect(e,t)},R=function(e,t){return ep.current.useLayoutEffect(e,t)},O=function(e,t){return ep.current.useMemo(e,t)},A=function(e,t,n){return ep.current.useReducer(e,t,n)},M=function(e){return ep.current.useRef(e)},j=function(e){return ep.current.useState(e)},I=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},D=function(){return ep.current.useTransition()},z="18.2.0"}),m.register("h8vP0",function(e,t){n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return V},function(e){return V=e}),n(e.exports,"createPortal",function(){return H},function(e){return H=e}),n(e.exports,"createRoot",function(){return G},function(e){return G=e}),n(e.exports,"findDOMNode",function(){return Y},function(e){return Y=e}),n(e.exports,"flushSync",function(){return B},function(e){return B=e}),n(e.exports,"hydrate",function(){return q},function(e){return q=e}),n(e.exports,"hydrateRoot",function(){return K},function(e){return K=e}),n(e.exports,"render",function(){return Q},function(e){return Q=e}),n(e.exports,"unmountComponentAtNode",function(){return X},function(e){return X=e}),n(e.exports,"unstable_batchedUpdates",function(){return J},function(e){return J=e}),n(e.exports,"unstable_renderSubtreeIntoContainer",function(){return Z},function(e){return Z=e}),n(e.exports,"version",function(){return ee},function(e){return ee=e});var r,o,i,a,l,s,u=m("exYeM"),c=m("ibqfJ");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function h(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),y=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},x={};function S(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}function T(e,t,n,r){var o,i=k.hasOwnProperty(t)?k[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?(o=t,(!!y.call(x,o)||!y.call(w,o)&&(b.test(o)?x[o]=!0:(w[o]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,C);k[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,C);k[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,C);k[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});var P=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),N=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),j=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var U=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var $=Symbol.iterator;function W(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$&&e[$]||e["@@iterator"])?e:null}var V,H,G,Y,B,q,K,Q,X,J,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var eo=!1;function ei(e,t){if(!e||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l)break}}}finally{eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function el(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function es(e){e._valueTracker||(e._valueTracker=function(e){var t=el(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=el(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ea(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&T(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=ea(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ev=Array.isArray;function ey(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(o=0,n=""+ea(n),t=null;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(d(92));if(ev(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ea(n)}}function ex(e,t){var n=ea(t.value),r=ea(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function eS(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ek(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eE(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ek(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eC,eT,eP=(eC=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eT=eT||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eT.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eC(e,t,n,r)})}:eC);function e_(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eN={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eR=["Webkit","ms","Moz","O"];function eO(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eN.hasOwnProperty(e)&&eN[e]?(""+t).trim():t+"px"}function eA(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=eO(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(eN).forEach(function(e){eR.forEach(function(t){eN[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eN[e]})});var eM=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ej(e,t){if(t){if(eM[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function eI(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eD=null;function ez(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eL=null,eF=null,eU=null;function e$(e){if(e=rK(e)){if("function"!=typeof eL)throw Error(d(280));var t=e.stateNode;t&&(t=rX(t),eL(e.stateNode,e.type,t))}}function eW(e){eF?eU?eU.push(e):eU=[e]:eF=e}function eV(){if(eF){var e=eF,t=eU;if(eU=eF=null,e$(e),t)for(e=0;e<t.length;e++)e$(t[e])}}function eH(e,t){return e(t)}function eG(){}var eY=!1;function eB(e,t,n){if(eY)return e(t,n);eY=!0;try{return eH(e,t,n)}finally{eY=!1,(null!==eF||null!==eU)&&(eG(),eV())}}function eq(e,t){var n=e.stateNode;if(null===n)return null;var r=rX(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(d(231,t,typeof n));return n}var eK=!1;if(v)try{var eQ={};Object.defineProperty(eQ,"passive",{get:function(){eK=!0}}),window.addEventListener("test",eQ,eQ),window.removeEventListener("test",eQ,eQ)}catch(e){eK=!1}function eX(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e3(e,t,n,r,o,i,a,l,s){eJ=!1,eZ=null,eX.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e4(e)!==e)throw Error(d(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return e6(o),e;if(i===r)return e6(o),t;i=i.sibling}throw Error(d(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(3!==n.tag)throw Error(d(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e9=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,to=c.unstable_ImmediatePriority,ti=c.unstable_UserBlockingPriority,ta=c.unstable_NormalPriority,tl=c.unstable_LowPriority,ts=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=tg(l):0!=(i&=a)&&(r=tg(i))}else 0!=(a=n&~o)?r=tg(a):0!==i&&(r=tg(i));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!=(4194240&i)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-td(t)),r|=e[n],t&=~o;return r}function ty(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tx(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=n}function tS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-td(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var tk=0;function tE(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tC,tT,tP,t_,tN,tR=!1,tO=[],tA=null,tM=null,tj=null,tI=new Map,tD=new Map,tz=[],tL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tF(e,t){switch(e){case"focusin":case"focusout":tA=null;break;case"dragenter":case"dragleave":tM=null;break;case"mouseover":case"mouseout":tj=null;break;case"pointerover":case"pointerout":tI.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tD.delete(t.pointerId)}}function tU(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&null!==(t=rK(t))&&tT(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o)),e}function t$(e){var t=rq(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e5(n))){e.blockedOn=t,tN(e.priority,function(){tP(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tW(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rK(n))&&tT(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eD=r,n.target.dispatchEvent(r),eD=null,t.shift()}return!0}function tV(e,t,n){tW(e)&&n.delete(t)}function tH(){tR=!1,null!==tA&&tW(tA)&&(tA=null),null!==tM&&tW(tM)&&(tM=null),null!==tj&&tW(tj)&&(tj=null),tI.forEach(tV),tD.forEach(tV)}function tG(e,t){e.blockedOn===t&&(e.blockedOn=null,tR||(tR=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tH)))}function tY(e){function t(t){return tG(t,e)}if(0<tO.length){tG(tO[0],e);for(var n=1;n<tO.length;n++){var r=tO[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tA&&tG(tA,e),null!==tM&&tG(tM,e),null!==tj&&tG(tj,e),tI.forEach(t),tD.forEach(t),n=0;n<tz.length;n++)(r=tz[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tz.length&&null===(n=tz[0]).blockedOn;)t$(n),null===n.blockedOn&&tz.shift()}var tB=P.ReactCurrentBatchConfig,tq=!0;function tK(e,t,n,r){var o=tk,i=tB.transition;tB.transition=null;try{tk=1,tX(e,t,n,r)}finally{tk=o,tB.transition=i}}function tQ(e,t,n,r){var o=tk,i=tB.transition;tB.transition=null;try{tk=4,tX(e,t,n,r)}finally{tk=o,tB.transition=i}}function tX(e,t,n,r){if(tq){var o=tZ(e,t,n,r);if(null===o)rw(e,t,r,tJ,n),tF(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return tA=tU(tA,e,t,n,r,o),!0;case"dragenter":return tM=tU(tM,e,t,n,r,o),!0;case"mouseover":return tj=tU(tj,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return tI.set(i,tU(tI.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,tD.set(i,tU(tD.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(tF(e,r),4&t&&-1<tL.indexOf(e)){for(;null!==o;){var i=rK(o);if(null!==i&&tC(i),null===(i=tZ(e,t,n,r))&&rw(e,t,r,tJ,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tJ=null;function tZ(e,t,n,r){if(tJ=null,null!==(e=rq(e=ez(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case to:return 1;case ti:return 4;case ta:case tl:return 16;case ts:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,o="value"in t1?t1.value:t1.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return t3=o.slice(e,1<t?1-t:void 0)}function t5(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t9(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t7,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t9(nn),no=en({},nn,{view:0,detail:0}),ni=t9(no),na=en({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t7=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t7=0,nt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),nl=t9(na),ns=t9(en({},na,{dataTransfer:0})),nu=t9(en({},no,{relatedTarget:0})),nc=t9(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=t9(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nf=t9(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function nv(){return ng}var ny=t9(en({},no,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t5(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nv,charCode:function(e){return"keypress"===e.type?t5(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t5(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t9(en({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t9(en({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nv})),nx=t9(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nS=t9(en({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nk=[9,13,27,32],nE=v&&"CompositionEvent"in window,nC=null;v&&"documentMode"in document&&(nC=document.documentMode);var nT=v&&"TextEvent"in window&&!nC,nP=v&&(!nE||nC&&8<nC&&11>=nC),n_=!1;function nN(e,t){switch(e){case"keyup":return -1!==nk.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nR(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nO=!1,nA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nM(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nA[e.type]:"textarea"===t}function nj(e,t,n,r){eW(r),0<(t=rS(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nI=null,nD=null;function nz(e){rh(e,0)}function nL(e){if(eu(rQ(e)))return e}function nF(e,t){if("change"===e)return t}var nU=!1;if(v){if(v){var n$="oninput"in document;if(!n$){var nW=document.createElement("div");nW.setAttribute("oninput","return;"),n$="function"==typeof nW.oninput}r=n$}else r=!1;nU=r&&(!document.documentMode||9<document.documentMode)}function nV(){nI&&(nI.detachEvent("onpropertychange",nH),nD=nI=null)}function nH(e){if("value"===e.propertyName&&nL(nD)){var t=[];nj(t,nD,e,ez(e)),eB(nz,t)}}function nG(e,t,n){"focusin"===e?(nV(),nI=t,nD=n,nI.attachEvent("onpropertychange",nH)):"focusout"===e&&nV()}function nY(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nL(nD)}function nB(e,t){if("click"===e)return nL(t)}function nq(e,t){if("input"===e||"change"===e)return nL(t)}var nK="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nQ(e,t){if(nK(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!y.call(t,o)||!nK(e[o],t[o]))return!1}return!0}function nX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nJ(e,t){var n,r=nX(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nX(r)}}function nZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=v&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n5=!1;function n6(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n5||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nQ(n4,r)||(n4=r,0<(r=rS(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n8(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n9={animationend:n8("Animation","AnimationEnd"),animationiteration:n8("Animation","AnimationIteration"),animationstart:n8("Animation","AnimationStart"),transitionend:n8("Transition","TransitionEnd")},n7={},re={};function rt(e){if(n7[e])return n7[e];if(!n9[e])return e;var t,n=n9[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n7[e]=n[t];return e}v&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n9.animationend.animation,delete n9.animationiteration.animation,delete n9.animationstart.animation),"TransitionEvent"in window||delete n9.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ro=rt("animationstart"),ri=rt("transitionend"),ra=new Map,rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(e,t){ra.set(e,t),h(t,[e])}for(var ru=0;ru<rl.length;ru++){var rc=rl[ru];rs(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rs(rn,"onAnimationEnd"),rs(rr,"onAnimationIteration"),rs(ro,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(ri,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rd));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,a,l,s){if(e3.apply(this,arguments),eJ){if(eJ){var u=eZ;eJ=!1,eZ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;rp(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;rp(o,l,u),i=s}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rG];void 0===n&&(n=t[rG]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var rv="_reactListening"+Math.random().toString(36).slice(2);function ry(e){if(!e[rv]){e[rv]=!0,f.forEach(function(t){"selectionchange"!==t&&(rf.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rv]||(t[rv]=!0,rg("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var o=tK;break;case 4:o=tQ;break;default:o=tX}n=o.bind(null,t,n,e),o=void 0,eK&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,o){var i=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=rq(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}eB(function(){var r=i,o=ez(n),a=[];e:{var l=ra.get(e);if(void 0!==l){var s=nr,u=e;switch(e){case"keypress":if(0===t5(n))break e;case"keydown":case"keyup":s=ny;break;case"focusin":u="focus",s=nu;break;case"focusout":u="blur",s=nu;break;case"beforeblur":case"afterblur":s=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=ns;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=nw;break;case rn:case rr:case ro:s=nc;break;case ri:s=nx;break;case"scroll":s=ni;break;case"wheel":s=nS;break;case"copy":case"cut":case"paste":s=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=nb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eq(h,f))&&c.push(rx(h,m,p))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0==(7&t)){if(l="mouseover"===e||"pointerover"===e,s="mouseout"===e||"pointerout"===e,!(l&&n!==eD&&(u=n.relatedTarget||n.fromElement)&&(rq(u)||u[rH]))&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(u=n.relatedTarget||n.toElement,s=r,null!==(u=u?rq(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=nl,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:rQ(s),p=null==u?l:rQ(u),(l=new c(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,rq(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)t:{for(c=s,f=u,h=0,p=c;p;p=rk(p))h++;for(p=0,m=f;m;m=rk(m))p++;for(;0<h-p;)c=rk(c),h--;for(;0<p-h;)f=rk(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=rk(c),f=rk(f)}c=null}else c=null;null!==s&&rE(a,l,s,c,!1),null!==u&&null!==d&&rE(a,d,u,c,!0)}e:{if("select"===(s=(l=r?rQ(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g,v=nF;else if(nM(l)){if(nU)v=nq;else{v=nY;var y=nG}}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=nB);if(v&&(v=v(e,r))){nj(a,v,n,o);break e}y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&eg(l,"number",l.value)}switch(y=r?rQ(r):window,e){case"focusin":(nM(y)||"true"===y.contentEditable)&&(n2=y,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n5=!0;break;case"contextmenu":case"mouseup":case"dragend":n5=!1,n6(a,n,o);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n6(a,n,o)}if(nE)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nO?nN(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nP&&"ko"!==n.locale&&(nO||"onCompositionStart"!==b?"onCompositionEnd"===b&&nO&&(g=t4()):(t2="value"in(t1=o)?t1.value:t1.textContent,nO=!0)),0<(y=rS(r,b)).length&&(b=new nf(b,e,null,n,o),a.push({event:b,listeners:y}),g?b.data=g:null!==(g=nR(n))&&(b.data=g))),(g=nT?function(e,t){switch(e){case"compositionend":return nR(t);case"keypress":if(32!==t.which)return null;return n_=!0," ";case"textInput":return" "===(e=t.data)&&n_?null:e;default:return null}}(e,n):function(e,t){if(nO)return"compositionend"===e||!nE&&nN(e,t)?(e=t4(),t3=t2=t1=null,nO=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nP&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rS(r,"onBeforeInput")).length&&(o=new nf("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=g)}rh(a,t)})}function rx(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rS(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=eq(e,n))&&r.unshift(rx(e,i,o)),null!=(i=eq(e,t))&&r.push(rx(e,i,o))),e=e.return}return r}function rk(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rE(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=eq(n,i))&&a.unshift(rx(n,s,l)):o||null!=(s=eq(n,i))&&a.push(rx(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var rC=/\r\n?/g,rT=/\u0000|\uFFFD/g;function rP(e){return("string"==typeof e?e:""+e).replace(rC,"\n").replace(rT,"")}function r_(e,t,n){if(t=rP(t),rP(e)!==t&&n)throw Error(d(425))}function rN(){}var rR=null,rO=null;function rA(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rM="function"==typeof setTimeout?setTimeout:void 0,rj="function"==typeof clearTimeout?clearTimeout:void 0,rI="function"==typeof Promise?Promise:void 0,rD="function"==typeof queueMicrotask?queueMicrotask:void 0!==rI?function(e){return rI.resolve(null).then(e).catch(rz)}:rM;function rz(e){setTimeout(function(){throw e})}function rL(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType){if("/$"===(n=o.data)){if(0===r){e.removeChild(o),tY(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=o}while(n)tY(t)}function rF(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rU(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var r$=Math.random().toString(36).slice(2),rW="__reactFiber$"+r$,rV="__reactProps$"+r$,rH="__reactContainer$"+r$,rG="__reactEvents$"+r$,rY="__reactListeners$"+r$,rB="__reactHandles$"+r$;function rq(e){var t=e[rW];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rH]||n[rW]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rU(e);null!==e;){if(n=e[rW])return n;e=rU(e)}return t}n=(e=n).parentNode}return null}function rK(e){return(e=e[rW]||e[rH])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rQ(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function rX(e){return e[rV]||null}var rJ=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rJ[rZ],rJ[rZ]=null,rZ--)}function r2(e,t){rJ[++rZ]=e.current,e.current=t}var r3={},r4=r0(r3),r5=r0(!1),r6=r3;function r8(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function r9(e){return null!=(e=e.childContextTypes)}function r7(){r1(r5),r1(r4)}function oe(e,t,n){if(r4.current!==r3)throw Error(d(168));r2(r4,t),r2(r5,n)}function ot(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case R:return"Fragment";case N:return"Portal";case A:return"Profiler";case O:return"StrictMode";case D:return"Suspense";case z:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case j:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case I:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case L:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case F:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",o));return en({},n,r)}function on(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r6=r4.current,r2(r4,e),r2(r5,r5.current),!0}function or(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=ot(e,t,r6),r.__reactInternalMemoizedMergedChildContext=e,r1(r5),r1(r4),r2(r4,e)):r1(r5),r2(r5,n)}var oo=null,oi=!1,oa=!1;function ol(e){null===oo?oo=[e]:oo.push(e)}function os(){if(!oa&&null!==oo){oa=!0;var e=0,t=tk;try{var n=oo;for(tk=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}oo=null,oi=!1}catch(t){throw null!==oo&&(oo=oo.slice(e+1)),e9(to,os),t}finally{tk=t,oa=!1}}return null}var ou=[],oc=0,od=null,of=0,op=[],oh=0,om=null,og=1,ov="";function oy(e,t){ou[oc++]=of,ou[oc++]=od,od=e,of=t}function ob(e,t,n){op[oh++]=og,op[oh++]=ov,op[oh++]=om,om=e;var r=og;e=ov;var o=32-td(r)-1;r&=~(1<<o),n+=1;var i=32-td(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,og=1<<32-td(t)+o|n<<o|r,ov=i+e}else og=1<<i|n<<o|r,ov=e}function ow(e){null!==e.return&&(oy(e,1),ob(e,1,0))}function ox(e){for(;e===od;)od=ou[--oc],ou[oc]=null,of=ou[--oc],ou[oc]=null;for(;e===om;)om=op[--oh],op[oh]=null,ov=op[--oh],op[oh]=null,og=op[--oh],op[oh]=null}var oS=null,ok=null,oE=!1,oC=null;function oT(e,t){var n=l9(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oP(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,oS=e,ok=rF(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,oS=e,ok=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==om?{id:og,overflow:ov}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=l9(18,null,null,0)).stateNode=t,n.return=e,e.child=n,oS=e,ok=null,!0);default:return!1}}function o_(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function oN(e){if(oE){var t=ok;if(t){var n=t;if(!oP(e,t)){if(o_(e))throw Error(d(418));t=rF(n.nextSibling);var r=oS;t&&oP(e,t)?oT(r,n):(e.flags=-4097&e.flags|2,oE=!1,oS=e)}}else{if(o_(e))throw Error(d(418));e.flags=-4097&e.flags|2,oE=!1,oS=e}}}function oR(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;oS=e}function oO(e){if(e!==oS)return!1;if(!oE)return oR(e),oE=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rA(e.type,e.memoizedProps)),t&&(t=ok)){if(o_(e))throw oA(),Error(d(418));for(;t;)oT(e,t),t=rF(t.nextSibling)}if(oR(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){ok=rF(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ok=null}}else ok=oS?rF(e.stateNode.nextSibling):null;return!0}function oA(){for(var e=ok;e;)e=rF(e.nextSibling)}function oM(){ok=oS=null,oE=!1}function oj(e){null===oC?oC=[e]:oC.push(e)}var oI=P.ReactCurrentBatchConfig;function oD(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var oz=r0(null),oL=null,oF=null,oU=null;function o$(){oU=oF=oL=null}function oW(e){var t=oz.current;r1(oz),e._currentValue=t}function oV(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oH(e,t){oL=e,oU=oF=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ax=!0),e.firstContext=null)}function oG(e){var t=e._currentValue;if(oU!==e){if(e={context:e,memoizedValue:t,next:null},null===oF){if(null===oL)throw Error(d(308));oF=e,oL.dependencies={lanes:0,firstContext:e}}else oF=oF.next=e}return t}var oY=null;function oB(e){null===oY?oY=[e]:oY.push(e)}function oq(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,oB(t)):(n.next=o.next,o.next=n),t.interleaved=n,oK(e,r)}function oK(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var oQ=!1;function oX(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oJ(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oZ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function o0(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&ls)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,oK(e,n)}return null===(o=r.interleaved)?(t.next=t,oB(r)):(t.next=o.next,o.next=t),r.interleaved=t,oK(e,n)}function o1(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tS(e,n)}}function o2(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n)null===i?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function o3(e,t,n,r){var o=e.updateQueue;oQ=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s)}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=en({},d,f);break e;case 2:oQ=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do a|=o.lane,o=o.next;while(o!==t)}else null===i&&(o.shared.lanes=0);lg|=a,e.lanes=a,e.memoizedState=d}}function o4(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(d(191,o));o.call(r)}}}var o5=(new u.Component).refs;function o6(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var o8={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lj(),o=lI(e),i=oZ(r,o);i.payload=t,null!=n&&(i.callback=n),null!==(t=o0(e,i,o))&&(lD(t,e,o,r),o1(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lj(),o=lI(e),i=oZ(r,o);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=o0(e,i,o))&&(lD(t,e,o,r),o1(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lj(),r=lI(e),o=oZ(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=o0(e,o,r))&&(lD(t,e,r,n),o1(t,e,r))}};function o9(e,t,n,r,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||!nQ(n,r)||!nQ(o,i)}function o7(e,t,n){var r=!1,o=r3,i=t.contextType;return"object"==typeof i&&null!==i?i=oG(i):(o=r9(t)?r6:r4.current,i=(r=null!=(r=t.contextTypes))?r8(e,o):r3),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=o8,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ie(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&o8.enqueueReplaceState(t,t.state,null)}function it(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=o5,oX(e);var i=t.contextType;"object"==typeof i&&null!==i?o.context=oG(i):(i=r9(t)?r6:r4.current,o.context=r8(e,i)),o.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(o6(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&o8.enqueueReplaceState(o,o.state,null),o3(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function ir(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=o.refs;t===o5&&(t=o.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function io(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ii(e){return(0,e._init)(e._payload)}function ia(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=se(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?(t=so(n,e.mode,r)).return=e:(t=o(t,n)).return=e,t}function s(e,t,n,r){var i=n.type;return i===R?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===F&&ii(i)===t.type)?(r=o(t,n.props)).ref=ir(e,t,n):(r=st(n.type,n.key,n.props,null,e.mode,r)).ref=ir(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=si(n,e.mode,r)).return=e:(t=o(t,n.children||[])).return=e,t}function c(e,t,n,r,i){return null===t||7!==t.tag?(t=sn(n,e.mode,r,i)).return=e:(t=o(t,n)).return=e,t}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=so(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case _:return(n=st(t.type,t.key,t.props,null,e.mode,n)).ref=ir(e,null,t),n.return=e,n;case N:return(t=si(t,e.mode,n)).return=e,t;case F:return f(e,(0,t._init)(t._payload),n)}if(ev(t)||W(t))return(t=sn(t,e.mode,n,null)).return=e,t;io(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case _:return n.key===o?s(e,t,n,r):null;case N:return n.key===o?u(e,t,n,r):null;case F:return p(e,t,(o=n._init)(n._payload),r)}if(ev(n)||W(n))return null!==o?null:c(e,t,n,r,null);io(e,n)}return null}function h(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case _:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case F:return h(e,t,n,(0,r._init)(r._payload),o)}if(ev(r)||W(r))return c(t,e=e.get(n)||null,r,o,null);io(t,r)}return null}return function l(s,u,c,m){if("object"==typeof c&&null!==c&&c.type===R&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case _:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===R){if(7===v.tag){n(s,v.sibling),(u=o(v,c.props.children)).return=s,s=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===F&&ii(g)===v.type){n(s,v.sibling),(u=o(v,c.props)).ref=ir(s,v,c),u.return=s,s=u;break e}n(s,v);break}t(s,v),v=v.sibling}c.type===R?((u=sn(c.props.children,s.mode,m,c.key)).return=s,s=u):((m=st(c.type,c.key,c.props,null,s.mode,m)).ref=ir(s,u,c),m.return=s,s=m)}return a(s);case N:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(u=o(u,c.children||[])).return=s,s=u;break e}n(s,u);break}t(s,u),u=u.sibling}(u=si(c,s.mode,m)).return=s,s=u}return a(s);case F:return l(s,u,(v=c._init)(c._payload),m)}if(ev(c))return function(o,a,l,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(o,d),oE&&oy(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===c?u=d:c.sibling=d,c=d);return oE&&oy(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(o,e)}),oE&&oy(o,m),u}(s,u,c,m);if(W(c))return function(o,a,l,s){var u=W(l);if("function"!=typeof u)throw Error(d(150));if(null==(l=u.call(l)))throw Error(d(151));for(var c=u=null,m=a,g=a=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,s);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),a=i(b,a,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return n(o,m),oE&&oy(o,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(o,y.value,s))&&(a=i(y,a,g),null===c?u=y:c.sibling=y,c=y);return oE&&oy(o,g),u}for(m=r(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,s))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),a=i(y,a,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(o,e)}),oE&&oy(o,g),u}(s,u,c,m);io(s,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(u=o(u,c)).return=s):(n(s,u),(u=so(c,s.mode,m)).return=s),a(s=u)):n(s,u)}}var il=ia(!0),is=ia(!1),iu={},ic=r0(iu),id=r0(iu),ip=r0(iu);function ih(e){if(e===iu)throw Error(d(174));return e}function im(e,t){switch(r2(ip,t),r2(id,e),r2(ic,iu),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eE(null,"");break;default:t=eE(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(ic),r2(ic,t)}function ig(){r1(ic),r1(id),r1(ip)}function iv(e){ih(ip.current);var t=ih(ic.current),n=eE(t,e.type);t!==n&&(r2(id,e),r2(ic,n))}function iy(e){id.current===e&&(r1(ic),r1(id))}var ib=r0(0);function iw(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ix=[];function iS(){for(var e=0;e<ix.length;e++)ix[e]._workInProgressVersionPrimary=null;ix.length=0}var ik=P.ReactCurrentDispatcher,iE=P.ReactCurrentBatchConfig,iC=0,iT=null,iP=null,i_=null,iN=!1,iR=!1,iO=0,iA=0;function iM(){throw Error(d(321))}function ij(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nK(e[n],t[n]))return!1;return!0}function iI(e,t,n,r,o,i){if(iC=i,iT=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ik.current=null===e||null===e.memoizedState?as:au,e=n(r,o),iR){i=0;do{if(iR=!1,iO=0,25<=i)throw Error(d(301));i+=1,i_=iP=null,t.updateQueue=null,ik.current=ac,e=n(r,o)}while(iR)}if(ik.current=al,t=null!==iP&&null!==iP.next,iC=0,i_=iP=iT=null,iN=!1,t)throw Error(d(300));return e}function iD(){var e=0!==iO;return iO=0,e}function iz(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===i_?iT.memoizedState=i_=e:i_=i_.next=e,i_}function iL(){if(null===iP){var e=iT.alternate;e=null!==e?e.memoizedState:null}else e=iP.next;var t=null===i_?iT.memoizedState:i_.next;if(null!==t)i_=t,iP=e;else{if(null===e)throw Error(d(310));e={memoizedState:(iP=e).memoizedState,baseState:iP.baseState,baseQueue:iP.baseQueue,queue:iP.queue,next:null},null===i_?iT.memoizedState=i_=e:i_=i_.next=e}return i_}function iF(e,t){return"function"==typeof t?t(e):t}function iU(e){var t=iL(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=iP,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((iC&c)===c)null!==s&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===s?(l=s=f,a=r):s=s.next=f,iT.lanes|=c,lg|=c}u=u.next}while(null!==u&&u!==i)null===s?a=r:s.next=l,nK(r,t.memoizedState)||(ax=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do i=o.lane,iT.lanes|=i,lg|=i,o=o.next;while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function i$(e){var t=iL(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o)nK(i,t.memoizedState)||(ax=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function iW(){}function iV(e,t){var n=iT,r=iL(),o=t(),i=!nK(r.memoizedState,o);if(i&&(r.memoizedState=o,ax=!0),r=r.queue,i1(iY.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==i_&&1&i_.memoizedState.tag){if(n.flags|=2048,iQ(9,iG.bind(null,n,r,o,t),void 0,null),null===lu)throw Error(d(349));0!=(30&iC)||iH(n,t,o)}return o}function iH(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=iT.updateQueue)?(t={lastEffect:null,stores:null},iT.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function iG(e,t,n,r){t.value=n,t.getSnapshot=r,iB(t)&&iq(e)}function iY(e,t,n){return n(function(){iB(t)&&iq(e)})}function iB(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nK(e,n)}catch(e){return!0}}function iq(e){var t=oK(e,1);null!==t&&lD(t,e,1,-1)}function iK(e){var t=iz();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iF,lastRenderedState:e},t.queue=e,e=e.dispatch=ar.bind(null,iT,e),[t.memoizedState,e]}function iQ(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=iT.updateQueue)?(t={lastEffect:null,stores:null},iT.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function iX(){return iL().memoizedState}function iJ(e,t,n,r){var o=iz();iT.flags|=e,o.memoizedState=iQ(1|t,n,void 0,void 0===r?null:r)}function iZ(e,t,n,r){var o=iL();r=void 0===r?null:r;var i=void 0;if(null!==iP){var a=iP.memoizedState;if(i=a.destroy,null!==r&&ij(r,a.deps)){o.memoizedState=iQ(t,n,i,r);return}}iT.flags|=e,o.memoizedState=iQ(1|t,n,i,r)}function i0(e,t){return iJ(8390656,8,e,t)}function i1(e,t){return iZ(2048,8,e,t)}function i2(e,t){return iZ(4,2,e,t)}function i3(e,t){return iZ(4,4,e,t)}function i4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function i5(e,t,n){return n=null!=n?n.concat([e]):null,iZ(4,4,i4.bind(null,t,e),n)}function i6(){}function i8(e,t){var n=iL();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ij(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i9(e,t){var n=iL();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ij(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i7(e,t,n){return 0==(21&iC)?(e.baseState&&(e.baseState=!1,ax=!0),e.memoizedState=n):(nK(n,t)||(n=tb(),iT.lanes|=n,lg|=n,e.baseState=!0),t)}function ae(e,t){var n=tk;tk=0!==n&&4>n?n:4,e(!0);var r=iE.transition;iE.transition={};try{e(!1),t()}finally{tk=n,iE.transition=r}}function at(){return iL().memoizedState}function an(e,t,n){var r=lI(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ao(e)?ai(t,n):null!==(n=oq(e,t,n,r))&&(lD(n,e,r,lj()),aa(n,t,r))}function ar(e,t,n){var r=lI(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ao(e))ai(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,nK(l,a)){var s=t.interleaved;null===s?(o.next=o,oB(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch(e){}finally{}null!==(n=oq(e,t,o,r))&&(lD(n,e,r,o=lj()),aa(n,t,r))}}function ao(e){var t=e.alternate;return e===iT||null!==t&&t===iT}function ai(e,t){iR=iN=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aa(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tS(e,n)}}var al={readContext:oG,useCallback:iM,useContext:iM,useEffect:iM,useImperativeHandle:iM,useInsertionEffect:iM,useLayoutEffect:iM,useMemo:iM,useReducer:iM,useRef:iM,useState:iM,useDebugValue:iM,useDeferredValue:iM,useTransition:iM,useMutableSource:iM,useSyncExternalStore:iM,useId:iM,unstable_isNewReconciler:!1},as={readContext:oG,useCallback:function(e,t){return iz().memoizedState=[e,void 0===t?null:t],e},useContext:oG,useEffect:i0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,iJ(4194308,4,i4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return iJ(4194308,4,e,t)},useInsertionEffect:function(e,t){return iJ(4,2,e,t)},useMemo:function(e,t){var n=iz();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=iz();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=an.bind(null,iT,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},iz().memoizedState=e},useState:iK,useDebugValue:i6,useDeferredValue:function(e){return iz().memoizedState=e},useTransition:function(){var e=iK(!1),t=e[0];return e=ae.bind(null,e[1]),iz().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=iT,o=iz();if(oE){if(void 0===n)throw Error(d(407));n=n()}else{if(n=t(),null===lu)throw Error(d(349));0!=(30&iC)||iH(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,i0(iY.bind(null,r,i,e),[e]),r.flags|=2048,iQ(9,iG.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=iz(),t=lu.identifierPrefix;if(oE){var n=ov,r=og;t=":"+t+"R"+(n=(r&~(1<<32-td(r)-1)).toString(32)+n),0<(n=iO++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=iA++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},au={readContext:oG,useCallback:i8,useContext:oG,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i9,useReducer:iU,useRef:iX,useState:function(){return iU(iF)},useDebugValue:i6,useDeferredValue:function(e){return i7(iL(),iP.memoizedState,e)},useTransition:function(){return[iU(iF)[0],iL().memoizedState]},useMutableSource:iW,useSyncExternalStore:iV,useId:at,unstable_isNewReconciler:!1},ac={readContext:oG,useCallback:i8,useContext:oG,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i9,useReducer:i$,useRef:iX,useState:function(){return i$(iF)},useDebugValue:i6,useDeferredValue:function(e){var t=iL();return null===iP?t.memoizedState=e:i7(t,iP.memoizedState,e)},useTransition:function(){return[i$(iF)[0],iL().memoizedState]},useMutableSource:iW,useSyncExternalStore:iV,useId:at,unstable_isNewReconciler:!1};function ad(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1);case 11:return e=ei(e.type.render,!1);case 1:return e=ei(e.type,!0);default:return""}}(r),r=r.return;while(r)var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function af(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ap(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ah="function"==typeof WeakMap?WeakMap:Map;function am(e,t,n){(n=oZ(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lE||(lE=!0,lC=r),ap(e,t)},n}function ag(e,t,n){(n=oZ(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ap(e,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){ap(e,t),"function"!=typeof r&&(null===lT?lT=new Set([this]):lT.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function av(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ah;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=l3.bind(null,e,t,n),t.then(e,e))}function ay(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ab(e,t,n,r,o){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=oZ(-1,1)).tag=2,o0(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=o),e}var aw=P.ReactCurrentOwner,ax=!1;function aS(e,t,n,r){t.child=null===e?is(t,null,n,r):il(t,e.child,n,r)}function ak(e,t,n,r,o){n=n.render;var i=t.ref;return(oH(t,o),r=iI(e,t,n,r,i,o),n=iD(),null===e||ax)?(oE&&n&&ow(t),t.flags|=1,aS(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aW(e,t,o))}function aE(e,t,n,r,o){if(null===e){var i=n.type;return"function"!=typeof i||l7(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=st(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,aC(e,t,i,r,o))}if(i=e.child,0==(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:nQ)(a,r)&&e.ref===t.ref)return aW(e,t,o)}return t.flags|=1,(e=se(i,r)).ref=t.ref,e.return=t,t.child=e}function aC(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(nQ(i,r)&&e.ref===t.ref){if(ax=!1,t.pendingProps=r=i,0==(e.lanes&o))return t.lanes=e.lanes,aW(e,t,o);0!=(131072&e.flags)&&(ax=!0)}}return a_(e,t,n,r,o)}function aT(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(lp,lf),lf|=n;else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(lp,lf),lf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,r2(lp,lf),lf|=r}}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,r2(lp,lf),lf|=r;return aS(e,t,o,n),t.child}function aP(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function a_(e,t,n,r,o){var i=r9(n)?r6:r4.current;return(i=r8(t,i),oH(t,o),n=iI(e,t,n,r,i,o),r=iD(),null===e||ax)?(oE&&r&&ow(t),t.flags|=1,aS(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aW(e,t,o))}function aN(e,t,n,r,o){if(r9(n)){var i=!0;on(t)}else i=!1;if(oH(t,o),null===t.stateNode)a$(e,t),o7(t,n,r),it(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;u="object"==typeof u&&null!==u?oG(u):r8(t,u=r9(n)?r6:r4.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ie(t,a,r,u),oQ=!1;var f=t.memoizedState;a.state=f,o3(t,r,a,o),s=t.memoizedState,l!==r||f!==s||r5.current||oQ?("function"==typeof c&&(o6(t,n,c,r),s=t.memoizedState),(l=oQ||o9(t,n,l,r,f,s,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oJ(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:oD(t.type,l),a.props=u,d=t.pendingProps,f=a.context,s="object"==typeof(s=n.contextType)&&null!==s?oG(s):r8(t,s=r9(n)?r6:r4.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ie(t,a,r,s),oQ=!1,f=t.memoizedState,a.state=f,o3(t,r,a,o);var h=t.memoizedState;l!==d||f!==h||r5.current||oQ?("function"==typeof p&&(o6(t,n,p,r),h=t.memoizedState),(u=oQ||o9(t,n,u,r,f,h,s)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return aR(e,t,n,r,i,o)}function aR(e,t,n,r,o,i){aP(e,t);var a=0!=(128&t.flags);if(!r&&!a)return o&&or(t,n,!1),aW(e,t,i);r=t.stateNode,aw.current=t;var l=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=il(t,e.child,null,i),t.child=il(t,null,l,i)):aS(e,t,l,i),t.memoizedState=r.state,o&&or(t,n,!0),t.child}function aO(e){var t=e.stateNode;t.pendingContext?oe(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oe(e,t.context,!1),im(e,t.containerInfo)}function aA(e,t,n,r,o){return oM(),oj(o),t.flags|=256,aS(e,t,n,r),t.child}var aM={dehydrated:null,treeContext:null,retryLane:0};function aj(e){return{baseLanes:e,cachePool:null,transitions:null}}function aI(e,t,n){var r,o=t.pendingProps,i=ib.current,a=!1,l=0!=(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(i|=1),r2(ib,1&i),null===e)return(oN(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},0==(1&o)&&null!==a?(a.childLanes=0,a.pendingProps=l):a=sr(l,o,0,null),e=sn(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aj(n),t.memoizedState=aM,e):aD(t,l));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,a){if(n)return 256&t.flags?(t.flags&=-257,az(e,t,a,r=af(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=sr({mode:"visible",children:r.children},o,0,null),i=sn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!=(1&t.mode)&&il(t,e.child,null,a),t.child.memoizedState=aj(a),t.memoizedState=aM,i);if(0==(1&t.mode))return az(e,t,a,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,az(e,t,a,r=af(i=Error(d(419)),r,void 0))}if(l=0!=(a&e.childLanes),ax||l){if(null!==(r=lu)){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(r.suspendedLanes|a))?0:o)&&o!==i.retryLane&&(i.retryLane=o,oK(e,o),lD(r,e,o,-1))}return lK(),az(e,t,a,r=af(Error(d(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=l5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ok=rF(o.nextSibling),oS=t,oE=!0,oC=null,null!==e&&(op[oh++]=og,op[oh++]=ov,op[oh++]=om,og=e.id,ov=e.overflow,om=t),t=aD(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,i,n);if(a){a=o.fallback,l=t.mode,r=(i=e.child).sibling;var s={mode:"hidden",children:o.children};return 0==(1&l)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=s,t.deletions=null):(o=se(i,s)).subtreeFlags=14680064&i.subtreeFlags,null!==r?a=se(r,a):(a=sn(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=null===(l=e.child.memoizedState)?aj(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=aM,o}return e=(a=e.child).sibling,o=se(a,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function aD(e,t){return(t=sr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function az(e,t,n,r){return null!==r&&oj(r),il(t,e.child,null,n),e=aD(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aL(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),oV(e.return,t,n)}function aF(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function aU(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(aS(e,t,r.children,n),0!=(2&(r=ib.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aL(e,n,t);else if(19===e.tag)aL(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ib,r),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(o=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===iw(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),aF(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===iw(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}aF(t,!0,n,null,i);break;case"together":aF(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function a$(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function aW(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),lg|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(n=se(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=se(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function aV(e,t){if(!oE)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function aH(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}o=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},i=function(){},a=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ih(ic.current);var i,a=null;switch(n){case"input":o=ed(e,o),r=ed(e,r),a=[];break;case"select":o=en({},o,{value:void 0}),r=en({},r,{value:void 0}),a=[];break;case"textarea":o=eb(e,o),r=eb(e,r),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=rN)}for(u in ej(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u]){if("style"===u){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in r){var s=r[u];if(l=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(null!=s||null!=l)){if("style"===u){if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s}else"dangerouslySetInnerHTML"===u?(s=s?s.__html:void 0,l=l?l.__html:void 0,null!=s&&l!==s&&(a=a||[]).push(u,s)):"children"===u?"string"!=typeof s&&"number"!=typeof s||(a=a||[]).push(u,""+s):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=s&&"onScroll"===u&&rm("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},l=function(e,t,n,r){n!==r&&(t.flags|=4)};var aG=!1,aY=!1,aB="function"==typeof WeakSet?WeakSet:Set,aq=null;function aK(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){l2(e,t,n)}else n.current=null}}function aQ(e,t,n){try{n()}catch(n){l2(e,t,n)}}var aX=!1;function aJ(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&aQ(t,n,i)}o=o.next}while(o!==r)}}function aZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function a0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a3=null,a4=!1;function a5(e,t,n){for(n=n.child;null!==n;)a6(e,t,n),n=n.sibling}function a6(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:aY||aK(n,t);case 6:var r=a3,o=a4;a3=null,a5(e,t,n),a3=r,a4=o,null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):a3.removeChild(n.stateNode));break;case 18:null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?rL(e.parentNode,n):1===e.nodeType&&rL(e,n),tY(e)):rL(a3,n.stateNode));break;case 4:r=a3,o=a4,a3=n.stateNode.containerInfo,a4=!0,a5(e,t,n),a3=r,a4=o;break;case 0:case 11:case 14:case 15:if(!aY&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!=(2&i)?aQ(n,t,a):0!=(4&i)&&aQ(n,t,a)),o=o.next}while(o!==r)}a5(e,t,n);break;case 1:if(!aY&&(aK(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){l2(n,t,e)}a5(e,t,n);break;case 21:default:a5(e,t,n);break;case 22:1&n.mode?(aY=(r=aY)||null!==n.memoizedState,a5(e,t,n),aY=r):a5(e,t,n)}}function a8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new aB),t.forEach(function(t){var r=l6.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function a9(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,a=i;e:for(;null!==a;){switch(a.tag){case 5:a3=a.stateNode,a4=!1;break e;case 3:case 4:a3=a.stateNode.containerInfo,a4=!0;break e}a=a.return}if(null===a3)throw Error(d(160));a6(e,i,o),a3=null,a4=!1;var l=o.alternate;null!==l&&(l.return=null),o.return=null}catch(e){l2(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a7(t,e),t=t.sibling}function a7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a9(t,e),le(e),4&r){try{aJ(3,e,e.return),aZ(3,e)}catch(t){l2(e,e.return,t)}try{aJ(5,e,e.return)}catch(t){l2(e,e.return,t)}}break;case 1:a9(t,e),le(e),512&r&&null!==n&&aK(n,n.return);break;case 5:if(a9(t,e),le(e),512&r&&null!==n&&aK(n,n.return),32&e.flags){var o=e.stateNode;try{e_(o,"")}catch(t){l2(e,e.return,t)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,a=null!==n?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===l&&"radio"===i.type&&null!=i.name&&ep(o,i),eI(l,a);var u=eI(l,i);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];"style"===c?eA(o,f):"dangerouslySetInnerHTML"===c?eP(o,f):"children"===c?e_(o,f):T(o,c,f,u)}switch(l){case"input":eh(o,i);break;case"textarea":ex(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ey(o,!!i.multiple,h,!1):!!i.multiple!==p&&(null!=i.defaultValue?ey(o,!!i.multiple,i.defaultValue,!0):ey(o,!!i.multiple,i.multiple?[]:"",!1))}o[rV]=i}catch(t){l2(e,e.return,t)}}break;case 6:if(a9(t,e),le(e),4&r){if(null===e.stateNode)throw Error(d(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(t){l2(e,e.return,t)}}break;case 3:if(a9(t,e),le(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tY(t.containerInfo)}catch(t){l2(e,e.return,t)}break;case 4:default:a9(t,e),le(e);break;case 13:a9(t,e),le(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,i&&(null===o.alternate||null===o.alternate.memoizedState)&&(lx=tn())),4&r&&a8(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(aY=(u=aY)||c,a9(t,e),aY=u):a9(t,e),le(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(aq=e,c=e.child;null!==c;){for(f=aq=c;null!==aq;){switch(h=(p=aq).child,p.tag){case 0:case 11:case 14:case 15:aJ(4,p,p.return);break;case 1:aK(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){l2(r,n,e)}}break;case 5:aK(p,p.return);break;case 22:if(null!==p.memoizedState){ln(f);continue}}null!==h?(h.return=p,aq=h):ln(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{o=f.stateNode,u?(i=o.style,"function"==typeof i.setProperty?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,a=null!=(s=f.memoizedProps.style)&&s.hasOwnProperty("display")?s.display:null,l.style.display=eO("display",a))}catch(t){l2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){l2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:a9(t,e),le(e),4&r&&a8(e);case 21:}}function le(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(a1(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(e_(o,""),r.flags&=-33);var i=a2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=a2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rN));else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,l,a);break;default:throw Error(d(161))}}catch(t){l2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function lt(e){for(;null!==aq;){var t=aq;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aY||aZ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!aY){if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:oD(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var i=t.updateQueue;null!==i&&o4(t,i,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}o4(t,a,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tY(f)}}}break;default:throw Error(d(163))}aY||512&t.flags&&a0(t)}catch(e){l2(t,t.return,e)}}if(t===e){aq=null;break}if(null!==(n=t.sibling)){n.return=t.return,aq=n;break}aq=t.return}}function ln(e){for(;null!==aq;){var t=aq;if(t===e){aq=null;break}var n=t.sibling;if(null!==n){n.return=t.return,aq=n;break}aq=t.return}}function lr(e){for(;null!==aq;){var t=aq;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aZ(4,t)}catch(e){l2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(e){l2(t,o,e)}}var i=t.return;try{a0(t)}catch(e){l2(t,i,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){l2(t,a,e)}}}catch(e){l2(t,t.return,e)}if(t===e){aq=null;break}var l=t.sibling;if(null!==l){l.return=t.return,aq=l;break}aq=t.return}}var lo=Math.ceil,li=P.ReactCurrentDispatcher,la=P.ReactCurrentOwner,ll=P.ReactCurrentBatchConfig,ls=0,lu=null,lc=null,ld=0,lf=0,lp=r0(0),lh=0,lm=null,lg=0,lv=0,ly=0,lb=null,lw=null,lx=0,lS=1/0,lk=null,lE=!1,lC=null,lT=null,lP=!1,l_=null,lN=0,lR=0,lO=null,lA=-1,lM=0;function lj(){return 0!=(6&ls)?tn():-1!==lA?lA:lA=tn()}function lI(e){return 0==(1&e.mode)?1:0!=(2&ls)&&0!==ld?ld&-ld:null!==oI.transition?(0===lM&&(lM=tb()),lM):0!==(e=tk)?e:e=void 0===(e=window.event)?16:t0(e.type)}function lD(e,t,n,r){if(50<lR)throw lR=0,lO=null,Error(d(185));tx(e,n,r),(0==(2&ls)||e!==lu)&&(e===lu&&(0==(2&ls)&&(lv|=n),4===lh&&l$(e,ld)),lz(e,r),1===n&&0===ls&&0==(1&t.mode)&&(lS=tn()+500,oi&&os()))}function lz(e,t){var n,r,o,i=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-td(i),l=1<<a,s=o[a];-1===s?(0==(l&n)||0!=(l&r))&&(o[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var a=tv(e,e===lu?ld:0);if(0===a)null!==i&&e7(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=i&&e7(i),1===t)0===e.tag?(o=lW.bind(null,e),oi=!0,ol(o)):ol(lW.bind(null,e)),rD(function(){0==(6&ls)&&os()}),i=null;else{switch(tE(a)){case 1:i=to;break;case 4:i=ti;break;case 16:default:i=ta;break;case 536870912:i=ts}i=e9(i,lL.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function lL(e,t){if(lA=-1,lM=0,0!=(6&ls))throw Error(d(327));var n=e.callbackNode;if(l0()&&e.callbackNode!==n)return null;var r=tv(e,e===lu?ld:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=lQ(e,r);else{t=r;var o=ls;ls|=2;var i=lq();for((lu!==e||ld!==t)&&(lk=null,lS=tn()+500,lY(e,t));;)try{(function(){for(;null!==lc&&!te();)lX(lc)})();break}catch(t){lB(e,t)}o$(),li.current=i,ls=o,null!==lc?t=0:(lu=null,ld=0,t=lh)}if(0!==t){if(2===t&&0!==(o=ty(e))&&(r=o,t=lF(e,o)),1===t)throw n=lm,lY(e,0),l$(e,r),lz(e,tn()),n;if(6===t)l$(e,r);else{if(o=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nK(i(),o))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=lQ(e,r))&&0!==(i=ty(e))&&(r=i,t=lF(e,i)),1===t))throw n=lm,lY(e,0),l$(e,r),lz(e,tn()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:case 5:lZ(e,lw,lk);break;case 3:if(l$(e,r),(130023424&r)===r&&10<(t=lx+500-tn())){if(0!==tv(e,0))break;if(((o=e.suspendedLanes)&r)!==r){lj(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=rM(lZ.bind(null,e,lw,lk),t);break}lZ(e,lw,lk);break;case 4:if(l$(e,r),(4194240&r)===r)break;for(o=-1,t=e.eventTimes;0<r;){var a=31-td(r);i=1<<a,(a=t[a])>o&&(o=a),r&=~i}if(r=o,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lo(r/1960))-r)){e.timeoutHandle=rM(lZ.bind(null,e,lw,lk),r);break}lZ(e,lw,lk);break;default:throw Error(d(329))}}}return lz(e,tn()),e.callbackNode===n?lL.bind(null,e):null}function lF(e,t){var n=lb;return e.current.memoizedState.isDehydrated&&(lY(e,t).flags|=256),2!==(e=lQ(e,t))&&(t=lw,lw=n,null!==t&&lU(t)),e}function lU(e){null===lw?lw=e:lw.push.apply(lw,e)}function l$(e,t){for(t&=~ly,t&=~lv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-td(t),r=1<<n;e[n]=-1,t&=~r}}function lW(e){if(0!=(6&ls))throw Error(d(327));l0();var t=tv(e,0);if(0==(1&t))return lz(e,tn()),null;var n=lQ(e,t);if(0!==e.tag&&2===n){var r=ty(e);0!==r&&(t=r,n=lF(e,r))}if(1===n)throw n=lm,lY(e,0),l$(e,t),lz(e,tn()),n;if(6===n)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lZ(e,lw,lk),lz(e,tn()),null}function lV(e,t){var n=ls;ls|=1;try{return e(t)}finally{0===(ls=n)&&(lS=tn()+500,oi&&os())}}function lH(e){null!==l_&&0===l_.tag&&0==(6&ls)&&l0();var t=ls;ls|=1;var n=ll.transition,r=tk;try{if(ll.transition=null,tk=1,e)return e()}finally{tk=r,ll.transition=n,0==(6&(ls=t))&&os()}}function lG(){lf=lp.current,r1(lp)}function lY(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rj(n)),null!==lc)for(n=lc.return;null!==n;){var r=n;switch(ox(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r7();break;case 3:ig(),r1(r5),r1(r4),iS();break;case 5:iy(r);break;case 4:ig();break;case 13:case 19:r1(ib);break;case 10:oW(r.type._context);break;case 22:case 23:lG()}n=n.return}if(lu=e,lc=e=se(e.current,null),ld=lf=t,lh=0,lm=null,ly=lv=lg=0,lw=lb=null,null!==oY){for(t=0;t<oY.length;t++)if(null!==(r=(n=oY[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}oY=null}return e}function lB(e,t){for(;;){var n=lc;try{if(o$(),ik.current=al,iN){for(var r=iT.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}iN=!1}if(iC=0,i_=iP=iT=null,iR=!1,iO=0,la.current=null,null===n||null===n.return){lh=1,lm=t,lc=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=ld,l.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){var u=s,c=l,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ay(a);if(null!==h){h.flags&=-257,ab(h,a,l,i,t),1&h.mode&&av(i,u,t),t=h,s=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}if(0==(1&t)){av(i,u,t),lK();break e}s=Error(d(426))}else if(oE&&1&l.mode){var v=ay(a);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),ab(v,a,l,i,t),oj(ad(s,l));break e}}i=s=ad(s,l),4!==lh&&(lh=2),null===lb?lb=[i]:lb.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=am(i,s,t);o2(i,y);break e;case 1:l=s;var b=i.type,w=i.stateNode;if(0==(128&i.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===lT||!lT.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=ag(i,l,t);o2(i,x);break e}}i=i.return}while(null!==i)}lJ(n)}catch(e){t=e,lc===n&&null!==n&&(lc=n=n.return);continue}break}}function lq(){var e=li.current;return li.current=al,null===e?al:e}function lK(){(0===lh||3===lh||2===lh)&&(lh=4),null===lu||0==(268435455&lg)&&0==(268435455&lv)||l$(lu,ld)}function lQ(e,t){var n=ls;ls|=2;var r=lq();for((lu!==e||ld!==t)&&(lk=null,lY(e,t));;)try{(function(){for(;null!==lc;)lX(lc)})();break}catch(t){lB(e,t)}if(o$(),ls=n,li.current=r,null!==lc)throw Error(d(261));return lu=null,ld=0,lh}function lX(e){var t=s(e.alternate,e,lf);e.memoizedProps=e.pendingProps,null===t?lJ(e):lc=t,la.current=null}function lJ(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(ox(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aH(t),null;case 1:case 17:return r9(t.type)&&r7(),aH(t),null;case 3:return r=t.stateNode,ig(),r1(r5),r1(r4),iS(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(oO(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==oC&&(lU(oC),oC=null))),i(e,t),aH(t),null;case 5:iy(t);var s=ih(ip.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(d(166));return aH(t),null}if(e=ih(ic.current),oO(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[rW]=t,r[rV]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(s=0;s<rd.length;s++)rm(rd[s],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ef(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":ew(r,u),rm("invalid",r)}for(var c in ej(n,u),s=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?r.textContent!==f&&(!0!==u.suppressHydrationWarning&&r_(r.textContent,f,e),s=["children",f]):"number"==typeof f&&r.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&r_(r.textContent,f,e),s=["children",""+f]):p.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":es(r),em(r,u,!0);break;case"textarea":es(r),eS(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rN)}r=s,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===s.nodeType?s:s.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ek(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[rW]=t,e[rV]=r,o(e,t,!1,!1),t.stateNode=e;e:{switch(c=eI(n,r),n){case"dialog":rm("cancel",e),rm("close",e),s=r;break;case"iframe":case"object":case"embed":rm("load",e),s=r;break;case"video":case"audio":for(s=0;s<rd.length;s++)rm(rd[s],e);s=r;break;case"source":rm("error",e),s=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),s=r;break;case"details":rm("toggle",e),s=r;break;case"input":ef(e,r),s=ed(e,r),rm("invalid",e);break;case"option":default:s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ew(e,r),s=eb(e,r),rm("invalid",e)}for(u in ej(n,s),f=s)if(f.hasOwnProperty(u)){var h=f[u];"style"===u?eA(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eP(e,h):"children"===u?"string"==typeof h?("textarea"!==n||""!==h)&&e_(e,h):"number"==typeof h&&e_(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&rm("scroll",e):null!=h&&T(e,u,h,c))}switch(n){case"input":es(e),em(e,r,!1);break;case"textarea":es(e),eS(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ea(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ey(e,!!r.multiple,u,!1):null!=r.defaultValue&&ey(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof s.onClick&&(e.onclick=rN)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aH(t),null;case 6:if(e&&null!=t.stateNode)l(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(d(166));if(n=ih(ip.current),ih(ic.current),oO(t)){if(r=t.stateNode,n=t.memoizedProps,r[rW]=t,(u=r.nodeValue!==n)&&null!==(e=oS))switch(e.tag){case 3:r_(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&r_(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[rW]=t,t.stateNode=r}return aH(t),null;case 13:if(r1(ib),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(oE&&null!==ok&&0!=(1&t.mode)&&0==(128&t.flags))oA(),oM(),t.flags|=98560,u=!1;else if(u=oO(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[rW]=t}else oM(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aH(t),u=!1}else null!==oC&&(lU(oC),oC=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ib.current)?0===lh&&(lh=3):lK())),null!==t.updateQueue&&(t.flags|=4),aH(t),null;case 4:return ig(),i(e,t),null===e&&ry(t.stateNode.containerInfo),aH(t),null;case 10:return oW(t.type._context),aH(t),null;case 19:if(r1(ib),null===(u=t.memoizedState))return aH(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)aV(u,!1);else{if(0!==lh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=iw(e))){for(t.flags|=128,aV(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ib,1&ib.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>lS&&(t.flags|=128,r=!0,aV(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=iw(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),aV(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!oE)return aH(t),null}else 2*tn()-u.renderingStartTime>lS&&1073741824!==n&&(t.flags|=128,r=!0,aV(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=ib.current,r2(ib,r?1&n|2:1&n),t;return aH(t),null;case 22:case 23:return lG(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&lf)&&(aH(t),6&t.subtreeFlags&&(t.flags|=8192)):aH(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(n,t,lf))){lc=n;return}}else{if(null!==(n=function(e,t){switch(ox(t),t.tag){case 1:return r9(t.type)&&r7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ig(),r1(r5),r1(r4),iS(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return iy(t),null;case 13:if(r1(ib),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));oM()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ib),null;case 4:return ig(),null;case 10:return oW(t.type._context),null;case 22:case 23:return lG(),null;default:return null}}(n,t))){n.flags&=32767,lc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lh=6,lc=null;return}}if(null!==(t=t.sibling)){lc=t;return}lc=t=e}while(null!==t)0===lh&&(lh=5)}function lZ(e,t,n){var r=tk,o=ll.transition;try{ll.transition=null,tk=1,function(e,t,n,r){do l0();while(null!==l_)if(0!=(6&ls))throw Error(d(327));n=e.finishedWork;var o=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-td(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,i),e===lu&&(lc=lu=null,ld=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||lP||(lP=!0,a=ta,l=function(){return l0(),null},e9(a,l)),i=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||i){i=ll.transition,ll.transition=null;var a,l,s,u,c,f=tk;tk=1;var p=ls;ls|=4,la.current=null,function(e,t){if(rR=tq,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o,i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var l=0,s=-1,u=-1,c=0,f=0,p=e,h=null;t:for(;;){for(;p!==n||0!==i&&3!==p.nodeType||(s=l+i),p!==a||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(o=p.firstChild);)h=p,p=o;for(;;){if(p===e)break t;if(h===n&&++c===i&&(s=l),h===a&&++f===r&&(u=l),null!==(o=p.nextSibling))break;h=(p=h).parentNode}p=o}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rO={focusedElem:e,selectionRange:n},tq=!1,aq=t;null!==aq;)if(e=(t=aq).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aq=e;else for(;null!==aq;){t=aq;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:oD(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(d(163))}}catch(e){l2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aq=e;break}aq=t.return}m=aX,aX=!1}(e,n),a7(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=nJ(n,i);var a=nJ(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rO),tq=!!rR,rO=rR=null,e.current=n,s=n,u=e,c=o,aq=s,function e(t,n,r){for(var o=0!=(1&t.mode);null!==aq;){var i=aq,a=i.child;if(22===i.tag&&o){var l=null!==i.memoizedState||aG;if(!l){var s=i.alternate,u=null!==s&&null!==s.memoizedState||aY;s=aG;var c=aY;if(aG=l,(aY=u)&&!c)for(aq=i;null!==aq;)u=(l=aq).child,22===l.tag&&null!==l.memoizedState?lr(i):null!==u?(u.return=l,aq=u):lr(i);for(;null!==a;)aq=a,e(a,n,r),a=a.sibling;aq=i,aG=s,aY=c}lt(t,n,r)}else 0!=(8772&i.subtreeFlags)&&null!==a?(a.return=i,aq=a):lt(t,n,r)}}(s,u,c),tt(),ls=p,tk=f,ll.transition=i}else e.current=n;if(lP&&(lP=!1,l_=e,lN=o),0===(i=e.pendingLanes)&&(lT=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),lz(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((o=t[n]).value,{componentStack:o.stack,digest:o.digest});if(lE)throw lE=!1,e=lC,lC=null,e;0!=(1&lN)&&0!==e.tag&&l0(),0!=(1&(i=e.pendingLanes))?e===lO?lR++:(lR=0,lO=e):lR=0,os()}}(e,t,n,r)}finally{ll.transition=o,tk=r}return null}function l0(){if(null!==l_){var e=tE(lN),t=ll.transition,n=tk;try{if(ll.transition=null,tk=16>e?16:e,null===l_)var r=!1;else{if(e=l_,l_=null,lN=0,0!=(6&ls))throw Error(d(331));var o=ls;for(ls|=4,aq=e.current;null!==aq;){var i=aq,a=i.child;if(0!=(16&aq.flags)){var l=i.deletions;if(null!==l){for(var s=0;s<l.length;s++){var u=l[s];for(aq=u;null!==aq;){var c=aq;switch(c.tag){case 0:case 11:case 15:aJ(8,c,i)}var f=c.child;if(null!==f)f.return=c,aq=f;else for(;null!==aq;){var p=(c=aq).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rW],delete n[rV],delete n[rG],delete n[rY],delete n[rB]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){aq=null;break}if(null!==p){p.return=h,aq=p;break}aq=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}aq=i}}if(0!=(2064&i.subtreeFlags)&&null!==a)a.return=i,aq=a;else for(;null!==aq;){if(i=aq,0!=(2048&i.flags))switch(i.tag){case 0:case 11:case 15:aJ(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,aq=y;break}aq=i.return}}var b=e.current;for(aq=b;null!==aq;){var w=(a=aq).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,aq=w;else for(a=b;null!==aq;){if(l=aq,0!=(2048&l.flags))try{switch(l.tag){case 0:case 11:case 15:aZ(9,l)}}catch(e){l2(l,l.return,e)}if(l===a){aq=null;break}var x=l.sibling;if(null!==x){x.return=l.return,aq=x;break}aq=l.return}}if(ls=o,os(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tk=n,ll.transition=t}}return!1}function l1(e,t,n){t=am(e,t=ad(n,t),1),e=o0(e,t,1),t=lj(),null!==e&&(tx(e,1,t),lz(e,t))}function l2(e,t,n){if(3===e.tag)l1(e,e,n);else for(;null!==t;){if(3===t.tag){l1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===lT||!lT.has(r))){e=ag(t,e=ad(n,e),1),t=o0(t,e,1),e=lj(),null!==t&&(tx(t,1,e),lz(t,e));break}}t=t.return}}function l3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lj(),e.pingedLanes|=e.suspendedLanes&n,lu===e&&(ld&n)===n&&(4===lh||3===lh&&(130023424&ld)===ld&&500>tn()-lx?lY(e,0):ly|=n),lz(e,t)}function l4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=lj();null!==(e=oK(e,t))&&(tx(e,t,n),lz(e,n))}function l5(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),l4(e,n)}function l6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}null!==r&&r.delete(t),l4(e,n)}function l8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function l9(e,t,n,r){return new l8(e,t,n,r)}function l7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function se(e,t){var n=e.alternate;return null===n?((n=l9(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function st(e,t,n,r,o,i){var a=2;if(r=e,"function"==typeof e)l7(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case R:return sn(n.children,o,i,t);case O:a=8,o|=8;break;case A:return(e=l9(12,n,t,2|o)).elementType=A,e.lanes=i,e;case D:return(e=l9(13,n,t,o)).elementType=D,e.lanes=i,e;case z:return(e=l9(19,n,t,o)).elementType=z,e.lanes=i,e;case U:return sr(n,o,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case M:a=10;break e;case j:a=9;break e;case I:a=11;break e;case L:a=14;break e;case F:a=16,r=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=l9(a,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return(e=l9(7,e,r,t)).lanes=n,e}function sr(e,t,n,r){return(e=l9(22,e,r,t)).elementType=U,e.lanes=n,e.stateNode={isHidden:!1},e}function so(e,t,n){return(e=l9(6,e,null,t)).lanes=n,e}function si(e,t,n){return(t=l9(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sa(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sl(e,t,n,r,o,i,a,l,s){return e=new sa(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=l9(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oX(i),e}function ss(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r9(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var n=e.type;if(r9(n))return ot(e,n,t)}return t}function su(e,t,n,r,o,i,a,l,s){return(e=sl(n,r,!0,e,o,i,a,l,s)).context=ss(null),n=e.current,(i=oZ(r=lj(),o=lI(n))).callback=null!=t?t:null,o0(n,i,o),e.current.lanes=o,tx(e,o,r),lz(e,r),e}function sc(e,t,n,r){var o=t.current,i=lj(),a=lI(o);return n=ss(n),null===t.context?t.context=n:t.pendingContext=n,(t=oZ(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=o0(o,t,a))&&(lD(e,o,a,i),o1(e,o,a)),a}function sd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function sp(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}s=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r5.current)ax=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return ax=!1,function(e,t,n){switch(t.tag){case 3:aO(t),oM();break;case 5:iv(t);break;case 1:r9(t.type)&&on(t);break;case 4:im(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;r2(oz,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ib,1&ib.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return aI(e,t,n);return r2(ib,1&ib.current),null!==(e=aW(e,t,n))?e.sibling:null}r2(ib,1&ib.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return aU(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),r2(ib,ib.current),!r)return null;break;case 22:case 23:return t.lanes=0,aT(e,t,n)}return aW(e,t,n)}(e,t,n);ax=0!=(131072&e.flags)}}else ax=!1,oE&&0!=(1048576&t.flags)&&ob(t,of,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;a$(e,t),e=t.pendingProps;var o=r8(t,r4.current);oH(t,n),o=iI(null,t,r,e,o,n);var i=iD();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r9(r)?(i=!0,on(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,oX(t),o.updater=o8,t.stateNode=o,o._reactInternals=t,it(t,r,e,n),t=aR(null,t,r,!0,i,n)):(t.tag=0,oE&&i&&ow(t),aS(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(a$(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return l7(e)?1:0;if(null!=e){if((e=e.$$typeof)===I)return 11;if(e===L)return 14}return 2}(r),e=oD(r,e),o){case 0:t=a_(null,t,r,e,n);break e;case 1:t=aN(null,t,r,e,n);break e;case 11:t=ak(null,t,r,e,n);break e;case 14:t=aE(null,t,r,oD(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),a_(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),aN(e,t,r,o,n);case 3:e:{if(aO(t),null===e)throw Error(d(387));r=t.pendingProps,o=(i=t.memoizedState).element,oJ(e,t),o3(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){o=ad(Error(d(423)),t),t=aA(e,t,r,n,o);break e}if(r!==o){o=ad(Error(d(424)),t),t=aA(e,t,r,n,o);break e}for(ok=rF(t.stateNode.containerInfo.firstChild),oS=t,oE=!0,oC=null,n=is(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(oM(),r===o){t=aW(e,t,n);break e}aS(e,t,r,n)}t=t.child}return t;case 5:return iv(t),null===e&&oN(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,a=o.children,rA(r,o)?a=null:null!==i&&rA(r,i)&&(t.flags|=32),aP(e,t),aS(e,t,a,n),t.child;case 6:return null===e&&oN(t),null;case 13:return aI(e,t,n);case 4:return im(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=il(t,null,r,n):aS(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),ak(e,t,r,o,n);case 7:return aS(e,t,t.pendingProps,n),t.child;case 8:case 12:return aS(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,r2(oz,r._currentValue),r._currentValue=a,null!==i){if(nK(i.value,a)){if(i.children===o.children&&!r5.current){t=aW(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var l=i.dependencies;if(null!==l){a=i.child;for(var s=l.firstContext;null!==s;){if(s.context===r){if(1===i.tag){(s=oZ(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),oV(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(10===i.tag)a=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(a=i.return))throw Error(d(341));a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),oV(a,n,t),a=i.sibling}else a=i.child;if(null!==a)a.return=i;else for(a=i;null!==a;){if(a===t){a=null;break}if(null!==(i=a.sibling)){i.return=a.return,a=i;break}a=a.return}i=a}}aS(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oH(t,n),r=r(o=oG(o)),t.flags|=1,aS(e,t,r,n),t.child;case 14:return o=oD(r=t.type,t.pendingProps),o=oD(r.type,o),aE(e,t,r,o,n);case 15:return aC(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),a$(e,t),t.tag=1,r9(r)?(e=!0,on(t)):e=!1,oH(t,n),o7(t,r,o),it(t,r,o,n),aR(null,t,r,!0,e,n);case 19:return aU(e,t,n);case 22:return aT(e,t,n)}throw Error(d(156,t.tag))};var sh="function"==typeof reportError?reportError:function(e){console.error(e)};function sm(e){this._internalRoot=e}function sg(e){this._internalRoot=e}function sv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function sy(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function sb(){}function sw(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"==typeof o){var l=o;o=function(){var e=sd(a);l.call(e)}}sc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"==typeof r){var i=r;r=function(){var e=sd(a);i.call(e)}}var a=su(t,r,e,0,null,!1,!1,"",sb);return e._reactRootContainer=a,e[rH]=a.current,ry(8===e.nodeType?e.parentNode:e),lH(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var l=r;r=function(){var e=sd(s);l.call(e)}}var s=sl(e,0,!1,null,null,!1,!1,"",sb);return e._reactRootContainer=s,e[rH]=s.current,ry(8===e.nodeType?e.parentNode:e),lH(function(){sc(t,s,n,r)}),s}(n,t,e,o,r);return sd(a)}sg.prototype.render=sm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));sc(e,t,null,null)},sg.prototype.unmount=sm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lH(function(){sc(null,e,null,null)}),t[rH]=null}},sg.prototype.unstable_scheduleHydration=function(e){if(e){var t=t_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tz.length&&0!==t&&t<tz[n].priority;n++);tz.splice(n,0,e),0===n&&t$(e)}},tC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tS(t,1|n),lz(t,tn()),0==(6&ls)&&(lS=tn()+500,os()))}break;case 13:lH(function(){var t=oK(e,1);null!==t&&lD(t,e,1,lj())}),sp(e,1)}},tT=function(e){if(13===e.tag){var t=oK(e,134217728);null!==t&&lD(t,e,134217728,lj()),sp(e,134217728)}},tP=function(e){if(13===e.tag){var t=lI(e),n=oK(e,t);null!==n&&lD(n,e,t,lj()),sp(e,t)}},t_=function(){return tk},tN=function(e,t){var n=tk;try{return tk=e,t()}finally{tk=n}},eL=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rX(r);if(!o)throw Error(d(90));eu(r),eh(r,o)}}}break;case"textarea":ex(e,n);break;case"select":null!=(t=n.value)&&ey(e,!!n.multiple,t,!1)}},eH=lV,eG=lH;var sx={findFiberByHostInstance:rq,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sS={bundleType:sx.bundleType,version:sx.version,rendererPackageName:sx.rendererPackageName,rendererConfig:sx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:sx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var sk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sk.isDisabled&&sk.supportsFiber)try{tu=sk.inject(sS),tc=sk}catch(e){}}V={usingClientEntryPoint:!1,Events:[rK,rQ,rX,eW,eV,lV]},H=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!sv(t))throw Error(d(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:N,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},G=function(e,t){if(!sv(e))throw Error(d(299));var n=!1,r="",o=sh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=sl(e,1,!1,null,null,n,!1,r,o),e[rH]=t.current,ry(8===e.nodeType?e.parentNode:e),new sm(t)},Y=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},B=function(e){return lH(e)},q=function(e,t,n){if(!sy(t))throw Error(d(200));return sw(null,e,t,!0,n)},K=function(e,t,n){if(!sv(e))throw Error(d(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",a=sh;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=su(t,null,e,1,null!=n?n:null,o,!1,i,a),e[rH]=t.current,ry(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sg(t)},Q=function(e,t,n){if(!sy(t))throw Error(d(200));return sw(null,e,t,!1,n)},X=function(e){if(!sy(e))throw Error(d(40));return!!e._reactRootContainer&&(lH(function(){sw(null,null,e,!1,function(){e._reactRootContainer=null,e[rH]=null})}),!0)},J=lV,Z=function(e,t,n,r){if(!sy(n))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return sw(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),m.register("ibqfJ",function(e,t){e.exports=m("dnqd8")}),m.register("dnqd8",function(e,t){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n(e.exports,"unstable_now",function(){return l},function(e){return l=e}),n(e.exports,"unstable_IdlePriority",function(){return s},function(e){return s=e}),n(e.exports,"unstable_ImmediatePriority",function(){return u},function(e){return u=e}),n(e.exports,"unstable_LowPriority",function(){return c},function(e){return c=e}),n(e.exports,"unstable_NormalPriority",function(){return d},function(e){return d=e}),n(e.exports,"unstable_Profiling",function(){return f},function(e){return f=e}),n(e.exports,"unstable_UserBlockingPriority",function(){return p},function(e){return p=e}),n(e.exports,"unstable_cancelCallback",function(){return h},function(e){return h=e}),n(e.exports,"unstable_continueExecution",function(){return m},function(e){return m=e}),n(e.exports,"unstable_forceFrameRate",function(){return g},function(e){return g=e}),n(e.exports,"unstable_getCurrentPriorityLevel",function(){return v},function(e){return v=e}),n(e.exports,"unstable_getFirstCallbackNode",function(){return y},function(e){return y=e}),n(e.exports,"unstable_next",function(){return b},function(e){return b=e}),n(e.exports,"unstable_pauseExecution",function(){return w},function(e){return w=e}),n(e.exports,"unstable_requestPaint",function(){return x},function(e){return x=e}),n(e.exports,"unstable_runWithPriority",function(){return S},function(e){return S=e}),n(e.exports,"unstable_scheduleCallback",function(){return k},function(e){return k=e}),n(e.exports,"unstable_shouldYield",function(){return E},function(e){return E=e}),n(e.exports,"unstable_wrapCallback",function(){return C},function(e){return C=e}),"object"==typeof performance&&"function"==typeof performance.now){var l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,S,k,E,C,T,P=performance;l=function(){return P.now()}}else{var _=Date,N=_.now();l=function(){return _.now()-N}}var R=[],O=[],A=1,M=null,j=3,I=!1,D=!1,z=!1,L="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,U="undefined"!=typeof setImmediate?setImmediate:null;function $(e){for(var t=o(O);null!==t;){if(null===t.callback)i(O);else if(t.startTime<=e)i(O),t.sortIndex=t.expirationTime,r(R,t);else break;t=o(O)}}function W(e){if(z=!1,$(e),!D){if(null!==o(R))D=!0,Z(V);else{var t=o(O);null!==t&&ee(W,t.startTime-e)}}}function V(e,t){D=!1,z&&(z=!1,F(Y),Y=-1),I=!0;var n=j;try{for($(t),M=o(R);null!==M&&(!(M.expirationTime>t)||e&&!K());){var r=M.callback;if("function"==typeof r){M.callback=null,j=M.priorityLevel;var a=r(M.expirationTime<=t);t=l(),"function"==typeof a?M.callback=a:M===o(R)&&i(R),$(t)}else i(R);M=o(R)}if(null!==M)var s=!0;else{var u=o(O);null!==u&&ee(W,u.startTime-t),s=!1}return s}finally{M=null,j=n,I=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,Y=-1,B=5,q=-1;function K(){return!(l()-q<B)}function Q(){if(null!==G){var e=l();q=e;var t=!0;try{t=G(!0,e)}finally{t?T():(H=!1,G=null)}}else H=!1}if("function"==typeof U)T=function(){U(Q)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Q,T=function(){J.postMessage(null)}}else T=function(){L(Q,0)};function Z(e){G=e,H||(H=!0,T())}function ee(e,t){Y=L(function(){e(l())},t)}s=5,u=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){D||I||(D=!0,Z(V))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<e?Math.floor(1e3/e):5},v=function(){return j},y=function(){return o(R)},b=function(e){switch(j){case 1:case 2:case 3:var t=3;break;default:t=j}var n=j;j=t;try{return e()}finally{j=n}},w=function(){},x=function(){},S=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=j;j=e;try{return t()}finally{j=n}},k=function(e,t,n){var i=l();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?i+n:i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:A++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,r(O,e),null===o(R)&&e===o(O)&&(z?(F(Y),Y=-1):z=!0,ee(W,n-i))):(e.sortIndex=a,r(R,e),D||I||(D=!0,Z(V))),e},E=K,C=function(e){var t=j;return function(){var n=j;j=t;try{return e.apply(this,arguments)}finally{j=n}}}}),m.register("kSiIs",function(e,t){!/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.36
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js *//////////////////////////////////////////////////////////////////////////////////
function(n,r){//////////////
// Constants
/////////////
var o="function",i="undefined",a="object",l="string",s="major",u="model",c="name",d="type",f="vendor",p="version",h="architecture",m="console",g="mobile",v="tablet",y="smarttv",b="wearable",w="embedded",x="Amazon",S="Apple",k="ASUS",E="BlackBerry",C="Browser",T="Chrome",P="Firefox",_="Google",N="Huawei",R="Microsoft",O="Motorola",A="Opera",M="Samsung",j="Sharp",I="Sony",D="Xiaomi",z="Zebra",L="Facebook",F="Chromium OS",U="Mac OS",$=function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},W=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},V=function(e,t){return typeof e===l&&-1!==H(t).indexOf(H(e))},H=function(e){return e.toLowerCase()},G=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===i?e:e.substring(0,350)},Y=function(e,t){// loop through all regexes maps
for(var n,i,l,s,u,c,d=0;d<t.length&&!u;){var f=t[d],p=t[d+1];// odd sequence (1,3,5,..)
// try matching uastring with regexes
for(n=i=0;n<f.length&&!u&&f[n];)if(u=f[n++].exec(e))for(l=0;l<p.length;l++)c=u[++i],typeof(s=p[l])===a&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):r:this[s[0]]=c?s[1].call(this,c,s[2]):r:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):r):this[s]=c||r;d+=2}},B=function(e,t){for(var n in t)// check if current value is array
if(typeof t[n]===a&&t[n].length>0){for(var o=0;o<t[n].length;o++)if(V(t[n][o],e))return"?"===n?r:n}else if(V(t[n],e))return"?"===n?r:n;return e},q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i// Chrome for Android/iOS
],[p,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i// Microsoft Edge
],[p,[c,"Edge"]],[// Presto based
/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i// Opera
],[c,p],[/opios[\/ ]+([\w\.]+)/i// Opera mini on iphone >= 8.0
],[p,[c,A+" Mini"]],[/\bopr\/([\w\.]+)/i// Opera Webkit
],[p,[c,A]],[// Mixed
/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,// Trident based
/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,// Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,// Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i// Weibo
],[c,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i// UCBrowser
],[p,[c,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[p,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i// WeChat
],[p,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i// Konqueror
],[p,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i// IE11
],[p,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i// Yandex
],[p,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i// Avast/AVG Secure Browser
],[[c,/(.+)/,"$1 Secure "+C],p],[/\bfocus\/([\w\.]+)/i// Firefox Focus
],[p,[c,P+" Focus"]],[/\bopt\/([\w\.]+)/i// Opera Touch
],[p,[c,A+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i// Coc Coc Browser
],[p,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i// Dolphin
],[p,[c,"Dolphin"]],[/coast\/([\w\.]+)/i// Opera Coast
],[p,[c,A+" Coast"]],[/miuibrowser\/([\w\.]+)/i// MIUI Browser
],[p,[c,"MIUI "+C]],[/fxios\/([-\w\.]+)/i// Firefox for iOS
],[p,[c,P]],[/\bqihu|(qi?ho?o?|360)browser/i// 360
],[[c,"360 "+C]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+C],p],[/(comodo_dragon)\/([\w\.]+)/i// Comodo Dragon
],[[c,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i// QQBrowser/Baidu App/2345 Browser
],[c,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i// LinkedIn App for iOS & Android
],[c],[// WebView
/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i// Facebook App for iOS & Android
],[[c,L],p],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i// Chromium/Instagram/Snapchat
],[c,p],[/\bgsa\/([\w\.]+) .*safari\//i// Google Search Appliance on iOS
],[p,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i// TikTok
],[p,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i// Chrome Headless
],[p,[c,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i// Chrome WebView
],[[c,T+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i// Android Browser
],[p,[c,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i// Chrome/OmniWeb/Arora/Tizen/Nokia
],[c,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i// Mobile Safari
],[p,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i// Safari & Safari Mobile
],[p,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i// Safari < 3.0
],[c,[p,B,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,p],[// Gecko based
/(navigator|netscape\d?)\/([-\w\.]+)/i// Netscape
],[[c,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i// Firefox Reality
],[p,[c,P+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,// IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,// Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,// Other
/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,// Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
/(links) \(([\w\.]+)/i,/panasonic;(viera)/i// Panasonic Viera
],[c,p],[/(cobalt)\/([\w\.]+)/i// Cobalt
],[c,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i// AMD64 (x64)
],[[h,"amd64"]],[/(ia32(?=;))/i// IA32 (quicktime)
],[[h,H]],[/((?:i[346]|x)86)[;\)]/i// IA32 (x86)
],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i// ARM64
],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i// ARMHF
],[[h,"armhf"]],[// PocketPC mistakenly identified as PowerPC
/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i// PowerPC
],[[h,/ower/,"",H]],[/(sun4\w)[;\)]/i// SPARC
],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,H]]],device:[[//////////////////////////
// MOBILES & TABLETS
/////////////////////////
// Samsung
/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[f,M],[d,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[f,M],[d,g]],[// Apple
/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i// iPod/iPhone
],[u,[f,S],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[f,S],[d,v]],[/(macintosh);/i],[u,[f,S]],[// Sharp
/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[f,j],[d,g]],[// Huawei
/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[f,N],[d,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[f,N],[d,g]],[// Xiaomi
/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i// Xiaomi Mi
],[[u,/_/g," "],[f,D],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i// Mi Pad tablets
],[[u,/_/g," "],[f,D],[d,v]],[// OPPO
/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[f,"OPPO"],[d,g]],[// Vivo
/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[f,"Vivo"],[d,g]],[// Realme
/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[f,"Realme"],[d,g]],[// Motorola
/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[f,O],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[f,O],[d,v]],[// LG
/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[f,"LG"],[d,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[f,"LG"],[d,g]],[// Lenovo
/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[f,"Lenovo"],[d,v]],[// Nokia
/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[f,"Nokia"],[d,g]],[// Google
/(pixel c)\b/i// Google Pixel C
],[u,[f,_],[d,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i// Google Pixel
],[u,[f,_],[d,g]],[// Sony
/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[f,I],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[f,I],[d,v]],[// OnePlus
/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[f,"OnePlus"],[d,g]],[// Amazon
/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i// Kindle Fire HD
],[u,[f,x],[d,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i// Fire Phone
],[[u,/(.+)/g,"Fire Phone $1"],[f,x],[d,g]],[// BlackBerry
/(playbook);[-\w\),; ]+(rim)/i// BlackBerry PlayBook
],[u,f,[d,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i// BlackBerry 10
],[u,[f,E],[d,g]],[// Asus
/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[f,k],[d,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[f,k],[d,g]],[// HTC
/(nexus 9)/i// HTC Nexus 9
],[u,[f,"HTC"],[d,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,// ZTE
/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i// Alcatel/GeeksPhone/Nexian/Panasonic/Sony
],[f,[u,/_/g," "],[d,g]],[// Acer
/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[f,"Acer"],[d,v]],[// Meizu
/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[f,"Meizu"],[d,g]],[// MIXED
/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,// BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i// OPPO
],[f,u,[d,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i// Vodafone
],[f,u,[d,v]],[/(surface duo)/i// Surface Duo
],[u,[f,R],[d,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i// Fairphone
],[u,[f,"Fairphone"],[d,g]],[/(u304aa)/i// AT&T
],[u,[f,"AT&T"],[d,g]],[/\bsie-(\w*)/i// Siemens
],[u,[f,"Siemens"],[d,g]],[/\b(rct\w+) b/i// RCA Tablets
],[u,[f,"RCA"],[d,v]],[/\b(venue[\d ]{2,7}) b/i// Dell Venue Tablets
],[u,[f,"Dell"],[d,v]],[/\b(q(?:mv|ta)\w+) b/i// Verizon Tablet
],[u,[f,"Verizon"],[d,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i// Barnes & Noble Tablet
],[u,[f,"Barnes & Noble"],[d,v]],[/\b(tm\d{3}\w+) b/i],[u,[f,"NuVision"],[d,v]],[/\b(k88) b/i// ZTE K Series Tablet
],[u,[f,"ZTE"],[d,v]],[/\b(nx\d{3}j) b/i// ZTE Nubia
],[u,[f,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i// Swiss GEN Mobile
],[u,[f,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i// Swiss ZUR Tablet
],[u,[f,"Swiss"],[d,v]],[/\b((zeki)?tb.*\b) b/i// Zeki Tablets
],[u,[f,"Zeki"],[d,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i// Dragon Touch Tablet
],[[f,"Dragon Touch"],u,[d,v]],[/\b(ns-?\w{0,9}) b/i// Insignia Tablets
],[u,[f,"Insignia"],[d,v]],[/\b((nxa|next)-?\w{0,9}) b/i// NextBook Tablets
],[u,[f,"NextBook"],[d,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i// Voice Xtreme Phones
],[[f,"Voice"],u,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i// LvTel Phones
],[[f,"LvTel"],u,[d,g]],[/\b(ph-1) /i// Essential PH-1
],[u,[f,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i// Envizen Tablets
],[u,[f,"Envizen"],[d,v]],[/\b(trio[-\w\. ]+) b/i// MachSpeed Tablets
],[u,[f,"MachSpeed"],[d,v]],[/\btu_(1491) b/i// Rotor Tablets
],[u,[f,"Rotor"],[d,v]],[/(shield[\w ]+) b/i// Nvidia Shield Tablets
],[u,[f,"Nvidia"],[d,v]],[/(sprint) (\w+)/i// Sprint Phones
],[f,u,[d,g]],[/(kin\.[onetw]{3})/i// Microsoft Kin
],[[u,/\./g," "],[f,R],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i// Zebra
],[u,[f,z],[d,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[f,z],[d,g]],[///////////////////
// SMARTTVS
///////////////////
/smart-tv.+(samsung)/i// Samsung
],[f,[d,y]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[f,M],[d,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i// LG SmartTV
],[[f,"LG"],[d,y]],[/(apple) ?tv/i// Apple TV
],[f,[u,S+" TV"],[d,y]],[/crkey/i// Google Chromecast
],[[u,T+"cast"],[f,_],[d,y]],[/droid.+aft(\w+)( bui|\))/i// Fire TV
],[u,[f,x],[d,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i// Sharp
],[u,[f,j],[d,y]],[/(bravia[\w ]+)( bui|\))/i// Sony
],[u,[f,I],[d,y]],[/(mitv-\w{5}) bui/i// Xiaomi
],[u,[f,D],[d,y]],[/Hbbtv.*(technisat) (.*);/i// TechniSAT
],[f,u,[d,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i// HbbTV devices
],[[f,G],[u,G],[d,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i// SmartTV from Unidentified Vendors
],[[d,y]],[///////////////////
// CONSOLES
///////////////////
/(ouya)/i,/(nintendo) ([wids3utch]+)/i// Nintendo
],[f,u,[d,m]],[/droid.+; (shield) bui/i// Nvidia
],[u,[f,"Nvidia"],[d,m]],[/(playstation [345portablevi]+)/i// Playstation
],[u,[f,I],[d,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i// Microsoft Xbox
],[u,[f,R],[d,m]],[///////////////////
// WEARABLES
///////////////////
/((pebble))app/i// Pebble
],[f,u,[d,b]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i// Apple Watch
],[u,[f,S],[d,b]],[/droid.+; (glass) \d/i// Google Glass
],[u,[f,_],[d,b]],[/droid.+; (wt63?0{2,3})\)/i],[u,[f,z],[d,b]],[/(quest( 2| pro)?)/i// Oculus Quest
],[u,[f,L],[d,b]],[///////////////////
// EMBEDDED
///////////////////
/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i// Tesla
],[f,[d,w]],[/(aeobc)\b/i// Echo Dot
],[u,[f,x],[d,w]],[////////////////////
// MIXED (GENERIC)
///////////////////
/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i// Android Phones from Unidentified Vendors
],[u,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i// Android Tablets from Unidentified Vendors
],[u,[d,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i// Unidentifiable Tablet
],[[d,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i// Unidentifiable Mobile
],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i// Generic Android Device
],[u,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i// EdgeHTML
],[p,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i// Blink
],[p,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i// Gecko
],[p,c]],os:[[// Windows
/microsoft (windows) (vista|xp)/i// Windows (iTunes)
],[c,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[p,B,q]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[p,B,q]],[// iOS/macOS
/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i// Mac OS
],[[c,U],[p,/_/g,"."]],[// Mobile OSes
/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i// Android-x86/HarmonyOS
],[p,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i// Series 40
],[c,p],[/\(bb(10);/i// BlackBerry 10
],[p,[c,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i// Symbian
],[p,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i// Firefox OS
],[p,[c,P+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i// WebOS
],[p,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i// watchOS
],[p,[c,"watchOS"]],[// Google Chromecast
/crkey\/([\d\.]+)/i// Google Chromecast
],[p,[c,T+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i// Chromium OS
],[[c,F],p],[// Smart TVs
/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,// Console
/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,// Other
/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,// Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i// Haiku
],[c,p],[/(sunos) ?([\w\.\d]*)/i// Solaris
],[[c,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i// UNIX
],[c,p]]},Q=function(e,t){if(typeof e===a&&(t=e,e=r),!(this instanceof Q))return new Q(e,t).getResult();var m=typeof n!==i&&n.navigator?n.navigator:r,y=e||(m&&m.userAgent?m.userAgent:""),b=m&&m.userAgentData?m.userAgentData:r,w=t?$(K,t):K,x=m&&m.userAgent==y;return this.getBrowser=function(){var e,t={};return t[c]=r,t[p]=r,Y.call(t,y,w.browser),t[s]=typeof(e=t[p])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:r,x&&m&&m.brave&&typeof m.brave.isBrave==o&&(t[c]="Brave"),t},this.getCPU=function(){var e={};return e[h]=r,Y.call(e,y,w.cpu),e},this.getDevice=function(){var e={};return e[f]=r,e[u]=r,e[d]=r,Y.call(e,y,w.device),x&&!e[d]&&b&&b.mobile&&(e[d]=g),x&&"Macintosh"==e[u]&&m&&typeof m.standalone!==i&&m.maxTouchPoints&&m.maxTouchPoints>2&&(e[u]="iPad",e[d]=v),e},this.getEngine=function(){var e={};return e[c]=r,e[p]=r,Y.call(e,y,w.engine),e},this.getOS=function(){var e={};return e[c]=r,e[p]=r,Y.call(e,y,w.os),x&&!e[c]&&b&&"Unknown"!=b.platform&&(e[c]=b.platform.replace(/chrome os/i,F).replace(/macos/i,U)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return y},this.setUA=function(e){return y=typeof e===l&&e.length>350?G(e,350):e,this},this.setUA(y),this};Q.VERSION="1.0.36",Q.BROWSER=W([c,p,s]),Q.CPU=W([h]),Q.DEVICE=W([u,f,d,m,g,y,v,b,w]),Q.ENGINE=Q.OS=W([c,p]),typeof t!==i?(e.exports&&(t=e.exports=Q),t.UAParser=Q):typeof define===o&&define.amd?define(function(){return Q}):typeof n!==i&&(n.UAParser=Q);// jQuery/Zepto specific (optional)
// Note:
//   In AMD env the global scope should be kept clean, but jQuery is an exception.
//   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
//   and we should catch that.
var X=typeof n!==i&&(n.jQuery||n.Zepto);if(X&&!X.ua){var J=new Q;X.ua=J.getResult(),X.ua.get=function(){return J.getUA()},X.ua.set=function(e){J.setUA(e);var t=J.getResult();for(var n in t)X.ua[n]=t[n]}}}("object"==typeof window?window:this)}),m.register("jpdgm",function(e,t){var n=m("L7tyD");function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}}),m.register("L7tyD",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),m.register("beWdq",function(e,t){n(e.exports,"AsyncMode",function(){return r},function(e){return r=e}),n(e.exports,"ConcurrentMode",function(){return o},function(e){return o=e}),n(e.exports,"ContextConsumer",function(){return i},function(e){return i=e}),n(e.exports,"ContextProvider",function(){return a},function(e){return a=e}),n(e.exports,"Element",function(){return l},function(e){return l=e}),n(e.exports,"ForwardRef",function(){return s},function(e){return s=e}),n(e.exports,"Fragment",function(){return u},function(e){return u=e}),n(e.exports,"Lazy",function(){return c},function(e){return c=e}),n(e.exports,"Memo",function(){return d},function(e){return d=e}),n(e.exports,"Portal",function(){return f},function(e){return f=e}),n(e.exports,"Profiler",function(){return p},function(e){return p=e}),n(e.exports,"StrictMode",function(){return h},function(e){return h=e}),n(e.exports,"Suspense",function(){return m},function(e){return m=e}),n(e.exports,"isAsyncMode",function(){return g},function(e){return g=e}),n(e.exports,"isConcurrentMode",function(){return v},function(e){return v=e}),n(e.exports,"isContextConsumer",function(){return y},function(e){return y=e}),n(e.exports,"isContextProvider",function(){return b},function(e){return b=e}),n(e.exports,"isElement",function(){return w},function(e){return w=e}),n(e.exports,"isForwardRef",function(){return x},function(e){return x=e}),n(e.exports,"isFragment",function(){return S},function(e){return S=e}),n(e.exports,"isLazy",function(){return k},function(e){return k=e}),n(e.exports,"isMemo",function(){return E},function(e){return E=e}),n(e.exports,"isPortal",function(){return C},function(e){return C=e}),n(e.exports,"isProfiler",function(){return T},function(e){return T=e}),n(e.exports,"isStrictMode",function(){return P},function(e){return P=e}),n(e.exports,"isSuspense",function(){return _},function(e){return _=e}),n(e.exports,"isValidElementType",function(){return N},function(e){return N=e}),n(e.exports,"typeOf",function(){return R},function(e){return R=e});var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,S,k,E,C,T,P,_,N,R,O="function"==typeof Symbol&&Symbol.for,A=O?Symbol.for("react.element"):60103,M=O?Symbol.for("react.portal"):60106,j=O?Symbol.for("react.fragment"):60107,I=O?Symbol.for("react.strict_mode"):60108,D=O?Symbol.for("react.profiler"):60114,z=O?Symbol.for("react.provider"):60109,L=O?Symbol.for("react.context"):60110,F=O?Symbol.for("react.async_mode"):60111,U=O?Symbol.for("react.concurrent_mode"):60111,$=O?Symbol.for("react.forward_ref"):60112,W=O?Symbol.for("react.suspense"):60113,V=O?Symbol.for("react.suspense_list"):60120,H=O?Symbol.for("react.memo"):60115,G=O?Symbol.for("react.lazy"):60116,Y=O?Symbol.for("react.block"):60121,B=O?Symbol.for("react.fundamental"):60117,q=O?Symbol.for("react.responder"):60118,K=O?Symbol.for("react.scope"):60119;function Q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case A:switch(e=e.type){case F:case U:case j:case D:case I:case W:return e;default:switch(e=e&&e.$$typeof){case L:case $:case G:case H:case z:return e;default:return t}}case M:return t}}}function X(e){return Q(e)===U}r=F,o=U,i=L,a=z,l=A,s=$,u=j,c=G,d=H,f=M,p=D,h=I,m=W,g=function(e){return X(e)||Q(e)===F},v=X,y=function(e){return Q(e)===L},b=function(e){return Q(e)===z},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===A},x=function(e){return Q(e)===$},S=function(e){return Q(e)===j},k=function(e){return Q(e)===G},E=function(e){return Q(e)===H},C=function(e){return Q(e)===M},T=function(e){return Q(e)===D},P=function(e){return Q(e)===I},_=function(e){return Q(e)===W},N=function(e){return"string"==typeof e||"function"==typeof e||e===j||e===U||e===D||e===I||e===W||e===V||"object"==typeof e&&null!==e&&(e.$$typeof===G||e.$$typeof===H||e.$$typeof===z||e.$$typeof===L||e.$$typeof===$||e.$$typeof===B||e.$$typeof===q||e.$$typeof===K||e.$$typeof===Y)},R=Q}),m.register("flL8Q",function(e,t){n(e.exports,"default",function(){return i});/* global window */var r,o=m("cctDJ");r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==d?d:e;var i=(0,o.default)(r)}),m.register("cctDJ",function(e,t){n(e.exports,"default",function(){return r});function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}}),m.register("7HKs8",function(e,t){var n=m("8ThvE"),r=m("jjS2x"),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=a?a.isBuffer:void 0;e.exports=l||r}),m.register("8ThvE",function(e,t){var n=m("lyxRX"),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o}),m.register("lyxRX",function(e,t){/** Detect free variable `global` from Node.js. */var n="object"==typeof d&&d&&d.Object===Object&&d;e.exports=n}),m.register("jjS2x",function(e,t){e.exports=/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1}}),m.register("7vc1R",function(e,t){var n=m("lyxRX"),r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{// Use `util.types` for Node.js 10+.
var e=o&&o.require&&o.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a});var g={};g=m("6ObR8"),m("exYeM");var v={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),cF=(v=m("h8vP0")).createRoot,v.hydrateRoot,m("exYeM"),m("exYeM"),m("exYeM");let y="https://chicosoy.github.io/jester-connections";/**
 * lucide-react v0.288.0 - ISC
 *//**
 * lucide-react v0.288.0 - ISC
 */var b=m("exYeM"),w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=(e,t)=>{let n=(0,b.forwardRef)(({color:n="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:a,...l},s)=>(0,b.createElement)("svg",{ref:s,...w,width:r,height:r,stroke:n,strokeWidth:i?24*Number(o)/Number(r):o,className:`lucide lucide-${x(e)}`,...l},[...t.map(([e,t])=>(0,b.createElement)(e,t)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n},k=S("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/function T(e,t=[]){let n=[],r=()=>{let t=n.map(e=>/*#__PURE__*/(0,b.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,b.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[/* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/function(t,r){let o=/*#__PURE__*/(0,b.createContext)(r),i=n.length;function a(t){let{scope:n,children:r,...a}=t,l=(null==n?void 0:n[e][i])||o,s=(0,b.useMemo)(()=>a,Object.values(a));return/*#__PURE__*/(0,b.createElement)(l.Provider,{value:s},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let l=(null==a?void 0:a[e][i])||o,s=(0,b.useContext)(l);if(s)return s;if(void 0!==r)return r;// if a defaultContext wasn't specified, it's a required context.
throw Error(`\`${n}\` must be used within \`${t}\``)}]},/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{// We are calling a hook inside a callback which React warns against to avoid inconsistent
// renders, however, scoping doesn't have render side effects so we ignore the rule.
// eslint-disable-next-line react-hooks/rules-of-hooks
let o=n(e),i=o[`__scope${r}`];return{...t,...i}},{});return(0,b.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */function P(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */function _(...e){// eslint-disable-next-line react-hooks/exhaustive-deps
return(0,b.useCallback)(P(...e),e)}var b=(m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"));/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/let N=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{children:n,...r}=e,o=(0,b.Children).toArray(n),i=o.find(A);if(i){// the new element to render is the one passed as a child of `Slottable`
let e=i.props.children,n=o.map(t=>t!==i?t:// because the new element will be the one rendered, we are only interested
    // in grabbing its children (`newElement.props.children`)
    (0,b.Children).count(e)>1?(0,b.Children).only(null):/*#__PURE__*/(0,b.isValidElement)(e)?e.props.children:null);return/*#__PURE__*/(0,b.createElement)(R,E({},r,{ref:t}),/*#__PURE__*/(0,b.isValidElement)(e)?/*#__PURE__*/(0,b.cloneElement)(e,void 0,n):null)}return/*#__PURE__*/(0,b.createElement)(R,E({},r,{ref:t}),n)});N.displayName="Slot";/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/let R=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{children:n,...r}=e;return/*#__PURE__*/(0,b.isValidElement)(n)?/*#__PURE__*/(0,b.cloneElement)(n,{...function(e,t){// all child props should override
let n={...t};for(let r in t){let o=e[r],i=t[r],a=/^on[A-Z]/.test(r);a?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?P(t,n.ref):n.ref}):(0,b.Children).count(n)>1?(0,b.Children).only(null):null});R.displayName="SlotClone";/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/let O=({children:e})=>/*#__PURE__*/(0,b.createElement)(b.Fragment,null,e);/* ---------------------------------------------------------------------------------------------- */function A(e){return/*#__PURE__*/(0,b.isValidElement)(e)&&e.type===O}// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function M(e){/* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/let t=e+"CollectionProvider",[n,r]=T(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e+"CollectionSlot",l=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{scope:n,children:r}=e,o=i(a,n),l=_(t,o.collectionRef);return /*@__PURE__*/f(b).createElement(N,{ref:l},r)}),s=e+"CollectionItemSlot",u="data-radix-collection-item",c=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{scope:n,children:r,...o}=e,a=/*@__PURE__*/f(b).useRef(null),l=_(t,a),c=i(s,n);return /*@__PURE__*/f(b).useEffect(()=>(c.itemMap.set(a,{ref:a,...o}),()=>void c.itemMap.delete(a))),/*@__PURE__*/f(b).createElement(N,{[u]:"",ref:l},r)});return[{Provider:e=>{let{scope:t,children:n}=e,r=/*@__PURE__*/f(b).useRef(null),i=/*@__PURE__*/f(b).useRef(new Map).current;return /*@__PURE__*/f(b).createElement(o,{scope:t,itemMap:i,collectionRef:r},n)},Slot:l,ItemSlot:c},/* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/function(t){let n=i(e+"CollectionConsumer",t),r=/*@__PURE__*/f(b).useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${u}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return r},r]}var b=(m("exYeM"),m("exYeM"));/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */let j=(null==globalThis?void 0:globalThis.document)?b.useLayoutEffect:()=>{},I=b["useId".toString()]||(()=>void 0),D=0;function z(e){let[t,n]=b.useState(I());// React versions older than 18 will have client-side ids only.
return j(()=>{e||n(e=>null!=e?e:String(D++))},[e]),e||(t?`radix-${t}`:"")}var b=m("exYeM");// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/let L=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=/*#__PURE__*/(0,b.forwardRef)((e,n)=>{let{asChild:r,...o}=e,i=r?N:t;return(0,b.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),/*#__PURE__*/(0,b.createElement)(i,E({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*//**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */function F(e,t){e&&(0,v.flushSync)(()=>e.dispatchEvent(t))}/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */function U(e){let t=(0,b.useRef)(e);return(0,b.useEffect)(()=>{t.current=e}),(0,b.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}function $({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,b.useState)(e),[r]=n,o=(0,b.useRef)(r),i=U(t);return(0,b.useEffect)(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,a=i?e:r,l=U(n),s=(0,b.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[i,e,o,l]);return[a,s]}var b=(m("exYeM"),m("exYeM"),m("exYeM"));let W=/*#__PURE__*/(0,b.createContext)(void 0);/* -----------------------------------------------------------------------------------------------*/function V(e){let t=(0,b.useContext)(W);return e||t||"ltr"}let H="rovingFocusGroup.onEntryFocus",G={bubbles:!1,cancelable:!0},Y="RovingFocusGroup",[B,q,K]=M(Y),[Q,X]=T(Y,[K]),[J,Z]=Q(Y),ee=/*#__PURE__*/(0,b.forwardRef)((e,t)=>/*#__PURE__*/(0,b.createElement)(B.Provider,{scope:e.__scopeRovingFocusGroup},/*#__PURE__*/(0,b.createElement)(B.Slot,{scope:e.__scopeRovingFocusGroup},/*#__PURE__*/(0,b.createElement)(et,E({},e,{ref:t}))))),et=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:s,onEntryFocus:u,...c}=e,d=(0,b.useRef)(null),f=_(t,d),p=V(i),[h=null,m]=$({prop:a,defaultProp:l,onChange:s}),[g,v]=(0,b.useState)(!1),y=U(u),w=q(n),x=(0,b.useRef)(!1),[S,k]=(0,b.useState)(0);return(0,b.useEffect)(()=>{let e=d.current;if(e)return e.addEventListener(H,y),()=>e.removeEventListener(H,y)},[y]),/*#__PURE__*/(0,b.createElement)(J,{scope:n,orientation:r,dir:p,loop:o,currentTabStopId:h,onItemFocus:(0,b.useCallback)(e=>m(e),[m]),onItemShiftTab:(0,b.useCallback)(()=>v(!0),[]),onFocusableItemAdd:(0,b.useCallback)(()=>k(e=>e+1),[]),onFocusableItemRemove:(0,b.useCallback)(()=>k(e=>e-1),[])},/*#__PURE__*/(0,b.createElement)(L.div,E({tabIndex:g||0===S?-1:0,"data-orientation":r},c,{ref:f,style:{outline:"none",...e.style},onMouseDown:C(e.onMouseDown,()=>{x.current=!0}),onFocus:C(e.onFocus,e=>{// We normally wouldn't need this check, because we already check
// that the focus is on the current target and not bubbling to it.
// We do this because Safari doesn't focus buttons when clicked, and
// instead, the wrapper will get focused and not through a bubbling event.
let t=!x.current;if(e.target===e.currentTarget&&t&&!g){let t=new CustomEvent(H,G);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=w().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===h),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);eo(o)}}x.current=!1}),onBlur:C(e.onBlur,()=>v(!1))})))}),en=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...a}=e,l=z(),s=i||l,u=Z("RovingFocusGroupItem",n),c=u.currentTabStopId===s,d=q(n),{onFocusableItemAdd:f,onFocusableItemRemove:p}=u;return(0,b.useEffect)(()=>{if(r)return f(),()=>p()},[r,f,p]),/*#__PURE__*/(0,b.createElement)(B.ItemSlot,{scope:n,id:s,focusable:r,active:o},/*#__PURE__*/(0,b.createElement)(L.span,E({tabIndex:c?0:-1,"data-orientation":u.orientation},a,{ref:t,onMouseDown:C(e.onMouseDown,e=>{// We prevent focusing non-focusable items on `mousedown`.
// Even though the item has tabIndex={-1}, that only means take it out of the tab order.
r?u.onItemFocus(s):e.preventDefault()}),onFocus:C(e.onFocus,()=>u.onItemFocus(s)),onKeyDown:C(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){u.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return er[o]}(e,u.orientation,u.dir);if(void 0!==t){e.preventDefault();let o=d().filter(e=>e.focusable),i=o.map(e=>e.ref.current);if("last"===t)i.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&i.reverse();let o=i.indexOf(e.currentTarget);i=u.loop?(n=i,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):i.slice(o+1)}/**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */setTimeout(()=>eo(i))}})})))}),er={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function eo(e){let t=document.activeElement;for(let n of e)// if focus is already where we want to go, we don't want to keep going through the candidates
if(n===t||(n.focus(),document.activeElement!==t))return}var b=m("exYeM");let ei=e=>{let{present:t,children:n}=e,r=/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/function(e){var t;let[n,r]=(0,b.useState)(),o=(0,b.useRef)({}),i=(0,b.useRef)(e),a=(0,b.useRef)("none"),l=e?"mounted":"unmounted",[s,u]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,b.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},l));return(0,b.useEffect)(()=>{let e=ea(o.current);a.current="mounted"===s?e:"none"},[s]),j(()=>{let t=o.current,n=i.current,r=n!==e;if(r){let r=a.current,o=ea(t);e?u("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):n&&r!==o?u("ANIMATION_OUT"):u("UNMOUNT"),i.current=e}},[e,u]),j(()=>{if(n){/**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */let e=e=>{let t=ea(o.current),r=t.includes(e.animationName);e.target===n&&r&&// By manually flushing we ensure they sync within a frame, removing the flash.
(0,v.flushSync)(()=>u("ANIMATION_END"))},t=e=>{e.target===n&&(a.current=ea(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,b.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):(0,b.Children).only(n),i=_(r.ref,o.ref),a="function"==typeof n;return a||r.isPresent?/*#__PURE__*/(0,b.cloneElement)(o,{ref:i}):null};/* -----------------------------------------------------------------------------------------------*/function ea(e){return(null==e?void 0:e.animationName)||"none"}ei.displayName="Presence";/* -------------------------------------------------------------------------------------------------
 * Tabs
 * -----------------------------------------------------------------------------------------------*/let el="Tabs",[es,eu]=T(el,[X]),ec=X(),[ed,ef]=es(el),ep=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",dir:l,activationMode:s="automatic",...u}=e,c=V(l),[d,f]=$({prop:r,onChange:o,defaultProp:i});return/*#__PURE__*/(0,b.createElement)(ed,{scope:n,baseId:z(),value:d,onValueChange:f,orientation:a,dir:c,activationMode:s},/*#__PURE__*/(0,b.createElement)(L.div,E({dir:c,"data-orientation":a},u,{ref:t})))}),eh=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:r=!0,...o}=e,i=ef("TabsList",n),a=ec(n);return/*#__PURE__*/(0,b.createElement)(ee,E({asChild:!0},a,{orientation:i.orientation,dir:i.dir,loop:r}),/*#__PURE__*/(0,b.createElement)(L.div,E({role:"tablist","aria-orientation":i.orientation},o,{ref:t})))}),em=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,disabled:o=!1,...i}=e,a=ef("TabsTrigger",n),l=ec(n),s=ev(a.baseId,r),u=ey(a.baseId,r),c=r===a.value;return/*#__PURE__*/(0,b.createElement)(en,E({asChild:!0},l,{focusable:!o,active:c}),/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button",role:"tab","aria-selected":c,"aria-controls":u,"data-state":c?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:s},i,{ref:t,onMouseDown:C(e.onMouseDown,e=>{// only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
// but not when the control key is pressed (avoiding MacOS right click)
o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():a.onValueChange(r)}),onKeyDown:C(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&a.onValueChange(r)}),onFocus:C(e.onFocus,()=>{// handle "automatic" activation if necessary
// ie. activate tab following focus
let e="manual"!==a.activationMode;c||o||!e||a.onValueChange(r)})})))}),eg=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,forceMount:o,children:i,...a}=e,l=ef("TabsContent",n),s=ev(l.baseId,r),u=ey(l.baseId,r),c=r===l.value,d=(0,b.useRef)(c);return(0,b.useEffect)(()=>{let e=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(e)},[]),/*#__PURE__*/(0,b.createElement)(ei,{present:o||c},({present:n})=>/*#__PURE__*/(0,b.createElement)(L.div,E({"data-state":c?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":s,hidden:!n,id:u,tabIndex:0},a,{ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0}}),n&&i))});/* ---------------------------------------------------------------------------------------------- */function ev(e,t){return`${e}-trigger-${t}`}function ey(e,t){return`${e}-content-${t}`}function eb(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}var ew=/^\[(.+)\]$/;function ex(e,t){var n=e;return t.split("-").forEach(function(e){n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n}var eS=/\s+/;/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */function ek(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){if("string"==typeof t)return t;for(var n,r="",o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);return r}(e))&&(r&&(r+=" "),r+=t);return r}function eE(e){var t=function(t){return t[e]||[]};return t.isThemeGetter=!0,t}var eC=/^\[(?:([a-z-]+):)?(.+)\]$/i,eT=/^\d+\/\d+$/,eP=/*#__PURE__*/new Set(["px","full","screen"]),e_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,eN=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,eR=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function eO(e){return ez(e)||eP.has(e)||eT.test(e)||eA(e)}function eA(e){return eH(e,"length",eG)}function eM(e){return eH(e,"size",eY)}function ej(e){return eH(e,"position",eY)}function eI(e){return eH(e,"url",eB)}function eD(e){return eH(e,"number",ez)}function ez(e){return!Number.isNaN(Number(e))}function eL(e){return e.endsWith("%")&&ez(e.slice(0,-1))}function eF(e){return eq(e)||eH(e,"number",eq)}function eU(e){return eC.test(e)}function e$(){return!0}function eW(e){return e_.test(e)}function eV(e){return eH(e,"",eK)}function eH(e,t,n){var r=eC.exec(e);return!!r&&(r[1]?r[1]===t:n(r[2]))}function eG(e){return eN.test(e)}function eY(){return!1}function eB(e){return e.startsWith("url(")}function eq(e){return Number.isInteger(Number(e))}function eK(e){return eR.test(e)}var eQ=function(){for(var e,t,n,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=function(r){var i=o[0];return t=(e=function(e){var t,n,r,o,i,a,l,s,u,c,d;return{cache:// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function o(o,i){n.set(o,i),++t>e&&(t=0,r=n,n=new Map)}return{get:function(e){var t=n.get(e);return void 0!==t?t:void 0!==(t=r.get(e))?(o(e,t),t):void 0},set:function(e,t){n.has(e)?n.set(e,t):o(e,t)}}}(e.cacheSize),splitModifiers:(n=1===(t=e.separator||":").length,r=t[0],o=t.length,function(e){for(var i,a=[],l=0,s=0,u=0;u<e.length;u++){var c=e[u];if(0===l){if(c===r&&(n||e.slice(u,u+o)===t)){a.push(e.slice(s,u)),s=u+o;continue}if("/"===c){i=u;continue}}"["===c?l++:"]"===c&&l--}var d=0===a.length?e:e.substring(s),f=d.startsWith("!"),p=f?d.substring(1):d;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}),...(s=e.theme,u=e.prefix,c={nextPart:new Map,validators:[]},(d=Object.entries(e.classGroups),u?d.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):d).forEach(function(e){var t=e[0];(function e(t,n,r,o){t.forEach(function(t){if("string"==typeof t){(""===t?n:ex(n,t)).classGroupId=r;return}if("function"==typeof t){if(t.isThemeGetter){e(t(o),n,r,o);return}n.validators.push({validator:t,classGroupId:r});return}Object.entries(t).forEach(function(t){var i=t[0];e(t[1],ex(n,i),r,o)})})})(e[1],c,t,s)}),i=e.conflictingClassGroups,l=void 0===(a=e.conflictingClassGroupModifiers)?{}:a,{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(t,n){if(0===t.length)return n.classGroupId;var r=t[0],o=n.nextPart.get(r),i=o?e(t.slice(1),o):void 0;if(i)return i;if(0!==n.validators.length){var a=t.join("-");return n.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(t,c)||function(e){if(ew.test(e)){var t=ew.exec(e)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}(e)},getConflictingClassGroupIds:function(e,t){var n=i[e]||[];return t&&l[e]?[].concat(n,l[e]):n}})}}(o.slice(1).reduce(function(e,t){return t(e)},i()))).cache.get,n=e.cache.set,a=l,l(r)};function l(r){var o,i,a,l,s,u=t(r);if(u)return u;var c=(i=(o=e).splitModifiers,a=o.getClassGroupId,l=o.getConflictingClassGroupIds,s=new Set,r.trim().split(eS).map(function(e){var t=i(e),n=t.modifiers,r=t.hasImportantModifier,o=t.baseClassName,l=t.maybePostfixModifierPosition,s=a(l?o.substring(0,l):o),u=!!l;if(!s){if(!l||!(s=a(o)))return{isTailwindClass:!1,originalClassName:e};u=!1}var c=/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */(function(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,n.sort().concat([e])),n=[]):n.push(e)}),t.push.apply(t,n.sort()),t})(n).join(":");return{isTailwindClass:!0,modifierId:r?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:u}}).reverse()// Last class in conflict wins, so we need to filter conflicting classes in reverse order.
.filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,n=e.classGroupId,r=e.hasPostfixModifier,o=t+n;return!s.has(o)&&(s.add(o),l(n,r).forEach(function(e){return s.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return n(r,c),c}return function(){return a(ek.apply(null,arguments))}}(function(){var e=eE("colors"),t=eE("spacing"),n=eE("blur"),r=eE("brightness"),o=eE("borderColor"),i=eE("borderRadius"),a=eE("borderSpacing"),l=eE("borderWidth"),s=eE("contrast"),u=eE("grayscale"),c=eE("hueRotate"),d=eE("invert"),f=eE("gap"),p=eE("gradientColorStops"),h=eE("gradientColorStopPositions"),m=eE("inset"),g=eE("margin"),v=eE("opacity"),y=eE("padding"),b=eE("saturate"),w=eE("scale"),x=eE("sepia"),S=eE("skew"),k=eE("space"),E=eE("translate"),C=function(){return["auto","contain","none"]},T=function(){return["auto","hidden","clip","visible","scroll"]},P=function(){return["auto",eU,t]},_=function(){return[eU,t]},N=function(){return["",eO]},R=function(){return["auto",ez,eU]},O=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},A=function(){return["solid","dashed","dotted","double","none"]},M=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},j=function(){return["start","end","center","between","around","evenly","stretch"]},I=function(){return["","0",eU]},D=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},z=function(){return[ez,eD]},L=function(){return[ez,eU]};return{cacheSize:500,theme:{colors:[e$],spacing:[eO],blur:["none","",eW,eU],brightness:z(),borderColor:[e],borderRadius:["none","","full",eW,eU],borderSpacing:_(),borderWidth:N(),contrast:z(),grayscale:I(),hueRotate:L(),invert:I(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[eL,eA],inset:P(),margin:P(),opacity:z(),padding:_(),saturate:z(),scale:z(),sepia:I(),skew:L(),space:_(),translate:_()},classGroups:{// Layout
/**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */aspect:[{aspect:["auto","square","video",eU]}],/**
       * Container
       * @see https://tailwindcss.com/docs/container
       */container:["container"],/**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */columns:[{columns:[eW]}],/**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */"break-after":[{"break-after":D()}],/**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */"break-before":[{"break-before":D()}],/**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],/**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */"box-decoration":[{"box-decoration":["slice","clone"]}],/**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */box:[{box:["border","content"]}],/**
       * Display
       * @see https://tailwindcss.com/docs/display
       */display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],/**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */float:[{float:["right","left","none"]}],/**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */clear:[{clear:["left","right","both","none"]}],/**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */isolation:["isolate","isolation-auto"],/**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],/**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */"object-position":[{object:[].concat(O(),[eU])}],/**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */overflow:[{overflow:T()}],/**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */"overflow-x":[{"overflow-x":T()}],/**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */"overflow-y":[{"overflow-y":T()}],/**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */overscroll:[{overscroll:C()}],/**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */"overscroll-x":[{"overscroll-x":C()}],/**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */"overscroll-y":[{"overscroll-y":C()}],/**
       * Position
       * @see https://tailwindcss.com/docs/position
       */position:["static","fixed","absolute","relative","sticky"],/**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */inset:[{inset:[m]}],/**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */"inset-x":[{"inset-x":[m]}],/**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */"inset-y":[{"inset-y":[m]}],/**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */start:[{start:[m]}],/**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */end:[{end:[m]}],/**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */top:[{top:[m]}],/**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */right:[{right:[m]}],/**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */bottom:[{bottom:[m]}],/**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */left:[{left:[m]}],/**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */visibility:["visible","invisible","collapse"],/**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */z:[{z:["auto",eF]}],// Flexbox and Grid
/**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */basis:[{basis:P()}],/**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],/**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],/**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */flex:[{flex:["1","auto","initial","none",eU]}],/**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */grow:[{grow:I()}],/**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */shrink:[{shrink:I()}],/**
       * Order
       * @see https://tailwindcss.com/docs/order
       */order:[{order:["first","last","none",eF]}],/**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */"grid-cols":[{"grid-cols":[e$]}],/**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */"col-start-end":[{col:["auto",{span:["full",eF]},eU]}],/**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */"col-start":[{"col-start":R()}],/**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */"col-end":[{"col-end":R()}],/**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */"grid-rows":[{"grid-rows":[e$]}],/**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */"row-start-end":[{row:["auto",{span:[eF]},eU]}],/**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */"row-start":[{"row-start":R()}],/**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */"row-end":[{"row-end":R()}],/**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],/**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */"auto-cols":[{"auto-cols":["auto","min","max","fr",eU]}],/**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */"auto-rows":[{"auto-rows":["auto","min","max","fr",eU]}],/**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */gap:[{gap:[f]}],/**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */"gap-x":[{"gap-x":[f]}],/**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */"gap-y":[{"gap-y":[f]}],/**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */"justify-content":[{justify:["normal"].concat(j())}],/**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */"justify-items":[{"justify-items":["start","end","center","stretch"]}],/**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],/**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */"align-content":[{content:["normal"].concat(j(),["baseline"])}],/**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */"align-items":[{items:["start","end","center","baseline","stretch"]}],/**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],/**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */"place-content":[{"place-content":[].concat(j(),["baseline"])}],/**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],/**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */"place-self":[{"place-self":["auto","start","end","center","stretch"]}],// Spacing
/**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */p:[{p:[y]}],/**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */px:[{px:[y]}],/**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */py:[{py:[y]}],/**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ps:[{ps:[y]}],/**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */pe:[{pe:[y]}],/**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */pt:[{pt:[y]}],/**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */pr:[{pr:[y]}],/**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */pb:[{pb:[y]}],/**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */pl:[{pl:[y]}],/**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */m:[{m:[g]}],/**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */mx:[{mx:[g]}],/**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */my:[{my:[g]}],/**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ms:[{ms:[g]}],/**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */me:[{me:[g]}],/**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */mt:[{mt:[g]}],/**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */mr:[{mr:[g]}],/**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */mb:[{mb:[g]}],/**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ml:[{ml:[g]}],/**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */"space-x":[{"space-x":[k]}],/**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */"space-x-reverse":["space-x-reverse"],/**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */"space-y":[{"space-y":[k]}],/**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */"space-y-reverse":["space-y-reverse"],// Sizing
/**
       * Width
       * @see https://tailwindcss.com/docs/width
       */w:[{w:["auto","min","max","fit",eU,t]}],/**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */"min-w":[{"min-w":["min","max","fit",eU,eO]}],/**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[eW]},eW,eU]}],/**
       * Height
       * @see https://tailwindcss.com/docs/height
       */h:[{h:[eU,t,"auto","min","max","fit"]}],/**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */"min-h":[{"min-h":["min","max","fit",eU,eO]}],/**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */"max-h":[{"max-h":[eU,t,"min","max","fit"]}],// Typography
/**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */"font-size":[{text:["base",eW,eA]}],/**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */"font-smoothing":["antialiased","subpixel-antialiased"],/**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */"font-style":["italic","not-italic"],/**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",eD]}],/**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */"font-family":[{font:[e$]}],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-normal":["normal-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-ordinal":["ordinal"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-slashed-zero":["slashed-zero"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-figure":["lining-nums","oldstyle-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-spacing":["proportional-nums","tabular-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-fraction":["diagonal-fractions","stacked-fractons"],/**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",eU]}],/**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */"line-clamp":[{"line-clamp":["none",ez,eD]}],/**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */leading:[{leading:["none","tight","snug","normal","relaxed","loose",eU,eO]}],/**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */"list-image":[{"list-image":["none",eU]}],/**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */"list-style-type":[{list:["none","disc","decimal",eU]}],/**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */"list-style-position":[{list:["inside","outside"]}],/**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */"placeholder-color":[{placeholder:[e]}],/**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */"placeholder-opacity":[{"placeholder-opacity":[v]}],/**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */"text-alignment":[{text:["left","center","right","justify","start","end"]}],/**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */"text-color":[{text:[e]}],/**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */"text-opacity":[{"text-opacity":[v]}],/**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */"text-decoration":["underline","overline","line-through","no-underline"],/**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */"text-decoration-style":[{decoration:[].concat(A(),["wavy"])}],/**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */"text-decoration-thickness":[{decoration:["auto","from-font",eO]}],/**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */"underline-offset":[{"underline-offset":["auto",eU,eO]}],/**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */"text-decoration-color":[{decoration:[e]}],/**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */"text-transform":["uppercase","lowercase","capitalize","normal-case"],/**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */"text-overflow":["truncate","text-ellipsis","text-clip"],/**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */indent:[{indent:_()}],/**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",eU]}],/**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],/**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */break:[{break:["normal","words","all","keep"]}],/**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */hyphens:[{hyphens:["none","manual","auto"]}],/**
       * Content
       * @see https://tailwindcss.com/docs/content
       */content:[{content:["none",eU]}],// Backgrounds
/**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */"bg-attachment":[{bg:["fixed","local","scroll"]}],/**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */"bg-clip":[{"bg-clip":["border","padding","content","text"]}],/**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */"bg-opacity":[{"bg-opacity":[v]}],/**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */"bg-origin":[{"bg-origin":["border","padding","content"]}],/**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */"bg-position":[{bg:[].concat(O(),[ej])}],/**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],/**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */"bg-size":[{bg:["auto","cover","contain",eM]}],/**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},eI]}],/**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */"bg-color":[{bg:[e]}],/**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-from-pos":[{from:[h]}],/**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-via-pos":[{via:[h]}],/**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-to-pos":[{to:[h]}],/**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-from":[{from:[p]}],/**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-via":[{via:[p]}],/**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-to":[{to:[p]}],// Borders
/**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */rounded:[{rounded:[i]}],/**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-s":[{"rounded-s":[i]}],/**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-e":[{"rounded-e":[i]}],/**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-t":[{"rounded-t":[i]}],/**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-r":[{"rounded-r":[i]}],/**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-b":[{"rounded-b":[i]}],/**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-l":[{"rounded-l":[i]}],/**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-ss":[{"rounded-ss":[i]}],/**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-se":[{"rounded-se":[i]}],/**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-ee":[{"rounded-ee":[i]}],/**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-es":[{"rounded-es":[i]}],/**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-tl":[{"rounded-tl":[i]}],/**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-tr":[{"rounded-tr":[i]}],/**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-br":[{"rounded-br":[i]}],/**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-bl":[{"rounded-bl":[i]}],/**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */"border-w":[{border:[l]}],/**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-x":[{"border-x":[l]}],/**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-y":[{"border-y":[l]}],/**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-s":[{"border-s":[l]}],/**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-e":[{"border-e":[l]}],/**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-t":[{"border-t":[l]}],/**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-r":[{"border-r":[l]}],/**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-b":[{"border-b":[l]}],/**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-l":[{"border-l":[l]}],/**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */"border-opacity":[{"border-opacity":[v]}],/**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */"border-style":[{border:[].concat(A(),["hidden"])}],/**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-x":[{"divide-x":[l]}],/**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-x-reverse":["divide-x-reverse"],/**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-y":[{"divide-y":[l]}],/**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-y-reverse":["divide-y-reverse"],/**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */"divide-opacity":[{"divide-opacity":[v]}],/**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */"divide-style":[{divide:A()}],/**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */"border-color":[{border:[o]}],/**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-x":[{"border-x":[o]}],/**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-y":[{"border-y":[o]}],/**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-t":[{"border-t":[o]}],/**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-r":[{"border-r":[o]}],/**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-b":[{"border-b":[o]}],/**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-l":[{"border-l":[o]}],/**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */"divide-color":[{divide:[o]}],/**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */"outline-style":[{outline:[""].concat(A())}],/**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */"outline-offset":[{"outline-offset":[eU,eO]}],/**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */"outline-w":[{outline:[eO]}],/**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */"outline-color":[{outline:[e]}],/**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */"ring-w":[{ring:N()}],/**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */"ring-w-inset":["ring-inset"],/**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */"ring-color":[{ring:[e]}],/**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */"ring-opacity":[{"ring-opacity":[v]}],/**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */"ring-offset-w":[{"ring-offset":[eO]}],/**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */"ring-offset-color":[{"ring-offset":[e]}],// Effects
/**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */shadow:[{shadow:["","inner","none",eW,eV]}],/**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */"shadow-color":[{shadow:[e$]}],/**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */opacity:[{opacity:[v]}],/**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */"mix-blend":[{"mix-blend":M()}],/**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */"bg-blend":[{"bg-blend":M()}],// Filters
/**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */filter:[{filter:["","none"]}],/**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */blur:[{blur:[n]}],/**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */brightness:[{brightness:[r]}],/**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */contrast:[{contrast:[s]}],/**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */"drop-shadow":[{"drop-shadow":["","none",eW,eU]}],/**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */grayscale:[{grayscale:[u]}],/**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */"hue-rotate":[{"hue-rotate":[c]}],/**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */invert:[{invert:[d]}],/**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */saturate:[{saturate:[b]}],/**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */sepia:[{sepia:[x]}],/**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */"backdrop-filter":[{"backdrop-filter":["","none"]}],/**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */"backdrop-blur":[{"backdrop-blur":[n]}],/**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */"backdrop-brightness":[{"backdrop-brightness":[r]}],/**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */"backdrop-contrast":[{"backdrop-contrast":[s]}],/**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */"backdrop-grayscale":[{"backdrop-grayscale":[u]}],/**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],/**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */"backdrop-invert":[{"backdrop-invert":[d]}],/**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */"backdrop-opacity":[{"backdrop-opacity":[v]}],/**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */"backdrop-saturate":[{"backdrop-saturate":[b]}],/**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */"backdrop-sepia":[{"backdrop-sepia":[x]}],// Tables
/**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */"border-collapse":[{border:["collapse","separate"]}],/**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing":[{"border-spacing":[a]}],/**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing-x":[{"border-spacing-x":[a]}],/**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing-y":[{"border-spacing-y":[a]}],/**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */"table-layout":[{table:["auto","fixed"]}],/**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */caption:[{caption:["top","bottom"]}],// Transitions and Animation
/**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */transition:[{transition:["none","all","","colors","opacity","shadow","transform",eU]}],/**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */duration:[{duration:L()}],/**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ease:[{ease:["linear","in","out","in-out",eU]}],/**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */delay:[{delay:L()}],/**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */animate:[{animate:["none","spin","ping","pulse","bounce",eU]}],// Transforms
/**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */transform:[{transform:["","gpu","none"]}],/**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */scale:[{scale:[w]}],/**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */"scale-x":[{"scale-x":[w]}],/**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */"scale-y":[{"scale-y":[w]}],/**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */rotate:[{rotate:[eF,eU]}],/**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */"translate-x":[{"translate-x":[E]}],/**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */"translate-y":[{"translate-y":[E]}],/**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */"skew-x":[{"skew-x":[S]}],/**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */"skew-y":[{"skew-y":[S]}],/**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",eU]}],// Interactivity
/**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */accent:[{accent:["auto",e]}],/**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */appearance:["appearance-none"],/**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",eU]}],/**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */"caret-color":[{caret:[e]}],/**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */"pointer-events":[{"pointer-events":["none","auto"]}],/**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */resize:[{resize:["none","y","x",""]}],/**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */"scroll-behavior":[{scroll:["auto","smooth"]}],/**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-m":[{"scroll-m":_()}],/**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mx":[{"scroll-mx":_()}],/**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-my":[{"scroll-my":_()}],/**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-ms":[{"scroll-ms":_()}],/**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-me":[{"scroll-me":_()}],/**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mt":[{"scroll-mt":_()}],/**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mr":[{"scroll-mr":_()}],/**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mb":[{"scroll-mb":_()}],/**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-ml":[{"scroll-ml":_()}],/**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-p":[{"scroll-p":_()}],/**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-px":[{"scroll-px":_()}],/**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-py":[{"scroll-py":_()}],/**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-ps":[{"scroll-ps":_()}],/**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pe":[{"scroll-pe":_()}],/**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pt":[{"scroll-pt":_()}],/**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pr":[{"scroll-pr":_()}],/**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pb":[{"scroll-pb":_()}],/**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pl":[{"scroll-pl":_()}],/**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */"snap-align":[{snap:["start","end","center","align-none"]}],/**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */"snap-stop":[{snap:["normal","always"]}],/**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */"snap-type":[{snap:["none","x","y","both"]}],/**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */"snap-strictness":[{snap:["mandatory","proximity"]}],/**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],/**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */select:[{select:["none","text","all","auto"]}],/**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */"will-change":[{"will-change":["auto","scroll","contents","transform",eU]}],// SVG
/**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */fill:[{fill:[e,"none"]}],/**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */"stroke-w":[{stroke:[eO,eD]}],/**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */stroke:[{stroke:[e,"none"]}],// Accessibility
/**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function eX(...e){return eQ(eb(e))}let eJ=(e,t)=>Math.floor(Math.random()*(t-e))+e,eZ=(e,t,n=1)=>{let r=[];void 0===t&&(t=e,e=0);for(let o=e;o<t;o+=n)r.push(o);return r},e0=e=>{let t=e.length,n;// While there remain elements to shuffle.
for(;t>0;)// Pick a remaining element.
n=Math.floor(Math.random()*t),t--,// And swap it with the current element.
[e[t],e[n]]=[e[n],e[t]];return e},e1=(e,t)=>{let n=[];for(let r=0;r<t.length;r+=e){let o=t.slice(r,r+e);n.push(o)}return n},e2=(e,t)=>[...e].filter(e=>!t.includes(e)),e3=(e,t)=>{// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
let n=e2(e,t);return 0===n.length&&e.length===t.length},e4=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(eh,{ref:n,className:eX("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));e4.displayName=eh.displayName;let e5=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(em,{ref:n,className:eX("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));e5.displayName=em.displayName;let e6=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(eg,{ref:n,className:eX("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));e6.displayName=eg.displayName;var b=(m("exYeM"),m("exYeM"),m("exYeM"));/* -------------------------------------------------------------------------------------------------
 * Collapsible
 * -----------------------------------------------------------------------------------------------*/let e8="Collapsible",[e9,e7]=T(e8),[te,tt]=e9(e8),tn=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:i,onOpenChange:a,...l}=e,[s=!1,u]=$({prop:r,defaultProp:o,onChange:a});return/*#__PURE__*/(0,b.createElement)(te,{scope:n,disabled:i,contentId:z(),open:s,onOpenToggle:(0,b.useCallback)(()=>u(e=>!e),[u])},/*#__PURE__*/(0,b.createElement)(L.div,E({"data-state":tl(s),"data-disabled":i?"":void 0},l,{ref:t})))}),tr=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=tt("CollapsibleTrigger",n);return/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":tl(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},r,{ref:t,onClick:C(e.onClick,o.onOpenToggle)}))}),to="CollapsibleContent",ti=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,o=tt(to,e.__scopeCollapsible);return/*#__PURE__*/(0,b.createElement)(ei,{present:n||o.open},({present:e})=>/*#__PURE__*/(0,b.createElement)(ta,E({},r,{ref:t,present:e})))}),ta=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:r,children:o,...i}=e,a=tt(to,n),[l,s]=(0,b.useState)(r),u=(0,b.useRef)(null),c=_(t,u),d=(0,b.useRef)(0),f=d.current,p=(0,b.useRef)(0),h=p.current,m=a.open||l,g=(0,b.useRef)(m),v=(0,b.useRef)();return(0,b.useEffect)(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),j(()=>{let e=u.current;if(e){v.current=v.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();d.current=t.height,p.current=t.width,g.current||(e.style.transitionDuration=v.current.transitionDuration,e.style.animationName=v.current.animationName),s(r)}/**
     * depends on `context.open` because it will change to `false`
     * when a close is triggered but `present` will be `false` on
     * animation end (so when close finishes). This allows us to
     * retrieve the dimensions *before* closing.
     */},[a.open,r]),/*#__PURE__*/(0,b.createElement)(L.div,E({"data-state":tl(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!m},i,{ref:c,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":h?`${h}px`:void 0,...e.style}}),m&&o)});/* -----------------------------------------------------------------------------------------------*/function tl(e){return e?"open":"closed"}/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/let ts="Accordion",tu=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[tc,td,tf]=M(ts),[tp,th]=T(ts,[tf,e7]),tm=e7(),tg=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{type:n,...r}=e;return /*@__PURE__*/f(b).createElement(tc.Provider,{scope:e.__scopeAccordion},"multiple"===n?/*@__PURE__*/f(b).createElement(tS,E({},r,{ref:t})):/*@__PURE__*/f(b).createElement(tx,E({},r,{ref:t})))});tg.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};/* -----------------------------------------------------------------------------------------------*/let[tv,ty]=tp(ts),[tb,tw]=tp(ts,{collapsible:!1}),tx=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:o=()=>{},collapsible:i=!1,...a}=e,[l,s]=$({prop:n,defaultProp:r,onChange:o});return /*@__PURE__*/f(b).createElement(tv,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:s,onItemClose:/*@__PURE__*/f(b).useCallback(()=>i&&s(""),[i,s])},/*@__PURE__*/f(b).createElement(tb,{scope:e.__scopeAccordion,collapsible:i},/*@__PURE__*/f(b).createElement(tC,E({},a,{ref:t}))))}),tS=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:o=()=>{},...i}=e,[a=[],l]=$({prop:n,defaultProp:r,onChange:o}),s=/*@__PURE__*/f(b).useCallback(e=>l((t=[])=>[...t,e]),[l]),u=/*@__PURE__*/f(b).useCallback(e=>l((t=[])=>t.filter(t=>t!==e)),[l]);return /*@__PURE__*/f(b).createElement(tv,{scope:e.__scopeAccordion,value:a,onItemOpen:s,onItemClose:u},/*@__PURE__*/f(b).createElement(tb,{scope:e.__scopeAccordion,collapsible:!0},/*@__PURE__*/f(b).createElement(tC,E({},i,{ref:t}))))}),[tk,tE]=tp(ts),tC=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:o,orientation:i="vertical",...a}=e,l=/*@__PURE__*/f(b).useRef(null),s=_(l,t),u=td(n),c=V(o),d="ltr"===c,p=C(e.onKeyDown,e=>{var t;if(!tu.includes(e.key))return;let n=e.target,r=u().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=r.findIndex(e=>e.ref.current===n),a=r.length;if(-1===o)return;// Prevents page scroll while user is navigating
e.preventDefault();let l=o,s=a-1,c=()=>{(l=o+1)>s&&(l=0)},f=()=>{(l=o-1)<0&&(l=s)};switch(e.key){case"Home":l=0;break;case"End":l=s;break;case"ArrowRight":"horizontal"===i&&(d?c():f());break;case"ArrowDown":"vertical"===i&&c();break;case"ArrowLeft":"horizontal"===i&&(d?f():c());break;case"ArrowUp":"vertical"===i&&f()}let p=l%a;null===(t=r[p].ref.current)||void 0===t||t.focus()});return /*@__PURE__*/f(b).createElement(tk,{scope:n,disabled:r,direction:o,orientation:i},/*@__PURE__*/f(b).createElement(tc.Slot,{scope:n},/*@__PURE__*/f(b).createElement(L.div,E({},a,{"data-orientation":i,ref:s,onKeyDown:r?void 0:p}))))}),tT="AccordionItem",[tP,t_]=tp(tT),tN=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,i=tE(tT,n),a=ty(tT,n),l=tm(n),s=z(),u=r&&a.value.includes(r)||!1,c=i.disabled||e.disabled;return /*@__PURE__*/f(b).createElement(tP,{scope:n,open:u,disabled:c,triggerId:s},/*@__PURE__*/f(b).createElement(tn,E({"data-orientation":i.orientation,"data-state":tj(u)},l,o,{ref:t,disabled:c,open:u,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})))}),tR=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=tE(ts,n),i=t_("AccordionHeader",n);return /*@__PURE__*/f(b).createElement(L.h3,E({"data-orientation":o.orientation,"data-state":tj(i.open),"data-disabled":i.disabled?"":void 0},r,{ref:t}))}),tO="AccordionTrigger",tA=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=tE(ts,n),i=t_(tO,n),a=tw(tO,n),l=tm(n);return /*@__PURE__*/f(b).createElement(tc.ItemSlot,{scope:n},/*@__PURE__*/f(b).createElement(tr,E({"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId},l,r,{ref:t})))}),tM=/*@__PURE__*/f(b).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=tE(ts,n),i=t_("AccordionContent",n),a=tm(n);return /*@__PURE__*/f(b).createElement(ti,E({role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation},a,r,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});/* -----------------------------------------------------------------------------------------------*/function tj(e){return e?"open":"closed"}/**
 * lucide-react v0.288.0 - ISC
 */let tI=S("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),tD=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(tN,{ref:n,className:eX("border-b",e),...t}));tD.displayName="AccordionItem";let tz=/*#__PURE__*/b.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(tR,{className:"flex",children:/*#__PURE__*/(0,g.jsxs)(tA,{ref:r,className:eX("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,/*#__PURE__*/(0,g.jsx)(tI,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));tz.displayName=tA.displayName;let tL=/*#__PURE__*/b.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(tM,{ref:r,className:eX("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e),...n,children:/*#__PURE__*/(0,g.jsx)("div",{className:"pb-4 pt-0",children:t})}));tL.displayName=tM.displayName;var b=(m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM"));let tF="dismissableLayer.update",tU=/*#__PURE__*/(0,b.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),t$=/*#__PURE__*/(0,b.forwardRef)((t,n)=>{var r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:s,onDismiss:u,...c}=t,d=(0,b.useContext)(tU),[f,p]=(0,b.useState)(null),h=null!==(r=null==f?void 0:f.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,m]=(0,b.useState)({}),g=_(n,e=>p(e)),v=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),w=v.indexOf(y),x=f?v.indexOf(f):-1,S=d.layersWithOutsidePointerEventsDisabled.size>0,k=x>=w,T=/* -----------------------------------------------------------------------------------------------*//**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=U(e),r=(0,b.useRef)(!1),o=(0,b.useRef)(()=>{});return(0,b.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){tH("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}/**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{// ensures we check React component tree (not just DOM tree)
onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));!k||n||(null==a||a(e),null==s||s(e),e.defaultPrevented||null==u||u())},h),P=/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=U(e),r=(0,b.useRef)(!1);return(0,b.useEffect)(()=>{let e=e=>{e.target&&!r.current&&tH("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));n||(null==l||l(e),null==s||s(e),e.defaultPrevented||null==u||u())},h);return!/**
 * Listens for when the escape key is down
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=U(e);(0,b.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=x===d.layers.size-1;t&&(null==i||i(e),!e.defaultPrevented&&u&&(e.preventDefault(),u()))},h),(0,b.useEffect)(()=>{if(f)return o&&(0===d.layersWithOutsidePointerEventsDisabled.size&&(e=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),tV(),()=>{o&&1===d.layersWithOutsidePointerEventsDisabled.size&&(h.body.style.pointerEvents=e)}},[f,h,o,d]),/**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */(0,b.useEffect)(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),tV())},[f,d]),(0,b.useEffect)(()=>{let e=()=>m({});return document.addEventListener(tF,e),()=>document.removeEventListener(tF,e)},[]),/*#__PURE__*/(0,b.createElement)(L.div,E({},c,{ref:g,style:{pointerEvents:S?k?"auto":"none":void 0,...t.style},onFocusCapture:C(t.onFocusCapture,P.onFocusCapture),onBlurCapture:C(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:C(t.onPointerDownCapture,T.onPointerDownCapture)}))}),tW=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=(0,b.useContext)(tU),r=(0,b.useRef)(null),o=_(t,r);return(0,b.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),/*#__PURE__*/(0,b.createElement)(L.div,E({},e,{ref:o}))});function tV(){let e=new CustomEvent(tF);document.dispatchEvent(e)}function tH(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?F(o,i):o.dispatchEvent(i)}var b=m("exYeM");let tG="focusScope.autoFocusOnMount",tY="focusScope.autoFocusOnUnmount",tB={bubbles:!1,cancelable:!0},tq=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[l,s]=(0,b.useState)(null),u=U(o),c=U(i),d=(0,b.useRef)(null),f=_(t,e=>s(e)),p=(0,b.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,b.useEffect)(()=>{if(r){function e(e){if(p.paused||!l)return;let t=e.target;l.contains(t)?d.current=t:tX(d.current,{select:!0})}function t(e){if(p.paused||!l)return;let t=e.relatedTarget;// A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
//
// 1. When the user switches app/tabs/windows/the browser itself loses focus.
// 2. In Google Chrome, when the focused element is removed from the DOM.
//
// We let the browser do its thing here because:
//
// 1. The browser already keeps a memory of what's focused for when the page gets refocused.
// 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
//    throws the CPU to 100%, so we avoid doing anything for this reason here too.
null===t||l.contains(t)||tX(d.current,{select:!0});// If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
}// When the focused element gets removed from the DOM, browsers move focus
document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(// back to the document.body. In this case, we move focus to the container
// to keep focus trapped correctly.
function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&tX(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,p.paused]),(0,b.useEffect)(()=>{if(l){tJ.add(p);let e=document.activeElement,t=l.contains(e);if(!t){let t=new CustomEvent(tG,tB);l.addEventListener(tG,u),l.dispatchEvent(t),t.defaultPrevented||(/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*//**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(tX(r,{select:t}),document.activeElement!==n)return}(tK(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&tX(l))}return()=>{l.removeEventListener(tG,u),// We need to delay the focus a little to get around it for now.
// See: https://github.com/facebook/react/issues/17894
setTimeout(()=>{let t=new CustomEvent(tY,tB);l.addEventListener(tY,c),l.dispatchEvent(t),t.defaultPrevented||tX(null!=e?e:document.body,{select:!0}),// we need to remove the listener after we `dispatchEvent`
l.removeEventListener(tY,c),tJ.remove(p)},0)}}},[l,u,c,p]);let h=(0,b.useCallback)(e=>{if(!n&&!r||p.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=/**
 * Returns the first and last tabbable elements inside a container.
 */function(e){let t=tK(e),n=tQ(t,e),r=tQ(t.reverse(),e);return[n,r]}(t),a=r&&i;a?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&tX(i,{select:!0})):(e.preventDefault(),n&&tX(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,p.paused]);return/*#__PURE__*/(0,b.createElement)(L.div,E({tabIndex:-1},a,{ref:f,onKeyDown:h}))});/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */function tK(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP// `.tabIndex` is not the same as the `tabindex` attribute. It works on the
}});for(;n.nextNode();)t.push(n.currentNode);// we do not take into account the order of nodes with positive `tabIndex` as it
// hinders accessibility to have tab order different from visual order.
return t}/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */function tQ(e,t){for(let n of e)// we stop checking if it's hidden at the `container` level (excluding)
if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;// we stop at `upTo` (excluding it)
e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function tX(e,{select:t=!1}={}){// only focus if that element is focusable
if(e&&e.focus){var n;let r=document.activeElement;// NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/let tJ=(t=[],{add(e){// pause the currently active focus scope (at the top of the stack)
let n=t[0];e!==n&&(null==n||n.pause()),// remove in case it already exists (because we'll re-add it at the top of the stack)
(t=tZ(t,e)).unshift(e)},remove(e){var n;null===(n=(t=tZ(t,e))[0])||void 0===n||n.resume()}});function tZ(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var b=m("exYeM");let t0=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?/*@__PURE__*/f(v).createPortal(/*#__PURE__*/(0,b.createElement)(L.div,E({},o,{ref:t})),r):null});var b=m("exYeM");/** Number of components which have requested interest to have focus guards */let t1=0;/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */function t2(){(0,b.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:t3()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:t3()),t1++,()=>{1===t1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),t1--}},[])}function t3(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var t4=function(){return(t4=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t5(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function t6(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var b=(m("exYeM"),m("exYeM")),t8="right-scroll-bar-position",t9="width-before-scroll-bar",b=m("exYeM"),t7=(void 0===cM&&(cM={}),(void 0===cj&&(cj=function(e){return e}),cI=[],cD=!1,cz={read:function(){if(cD)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return cI.length?cI[cI.length-1]:null},useMedium:function(e){var t=cj(e,cD);return cI.push(t),function(){cI=cI.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(cD=!0;cI.length;){var t=cI;cI=[],t.forEach(e)}cI={push:function(t){return e(t)},filter:function(){return cI}}},assignMedium:function(e){cD=!0;var t=[];if(cI.length){var n=cI;cI=[],n.forEach(e),t=cI}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),cI={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),cI}}}}).options=t4({async:!0,ssr:!1},cM),cz),ne=function(){},nt=b.forwardRef(function(e,t){var n,r,o,i=b.useRef(null),a=b.useState({onScrollCapture:ne,onWheelCapture:ne,onTouchMoveCapture:ne}),l=a[0],s=a[1],u=e.forwardProps,c=e.children,d=e.className,f=e.removeScrollBar,p=e.enabled,h=e.shards,m=e.sideCar,g=e.noIsolation,v=e.inert,y=e.allowPinchZoom,w=e.as,x=void 0===w?"div":w,S=t5(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),k=(n=[i,t],r=function(e){return n.forEach(function(t){return"function"==typeof t?t(e):t&&(t.current=e),t})},// update callback
(o=(0,b.useState)(function(){return{// value
value:null,// last callback
callback:r,// "memoized" public interface
facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),E=t4(t4({},S),l);return b.createElement(b.Fragment,null,p&&b.createElement(m,{sideCar:t7,removeScrollBar:f,shards:h,noIsolation:g,inert:v,setCallbacks:s,allowPinchZoom:!!y,lockRef:i}),u?b.cloneElement(b.Children.only(c),t4(t4({},E),{ref:k})):b.createElement(x,t4({},E,{className:d,ref:k}),c))});nt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},nt.classNames={fullWidth:t9,zeroRight:t8};var b=m("exYeM"),nn=function(e){var t=e.sideCar,n=t5(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return b.createElement(r,t4({},n))};nn.isSideCarExport=!0;var b=(m("exYeM"),m("exYeM"),m("exYeM")),nr=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=cU||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var r,o;(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},no=function(){var e=nr();return function(t,n){b.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ni=function(){var e=no();return function(t){return e(t.styles,t.dynamic),null}},na={left:0,top:0,right:0,gap:0},nl=function(e){return parseInt(e||"",10)||0},ns=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[nl(n),nl(r),nl(o)]},nu=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return na;var t=ns(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},nc=ni(),nd=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(t8," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(t9," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(t8," .").concat(t8," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(t9," .").concat(t9," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},nf=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,i=b.useMemo(function(){return nu(o)},[o]);return b.createElement(nc,{styles:nd(i,!t,o,n?"":"!important")})},np=!1;if("undefined"!=typeof window)try{var nh=Object.defineProperty({},"passive",{get:function(){return np=!0,!0}});// @ts-ignore
window.addEventListener("test",nh,nh),// @ts-ignore
window.removeEventListener("test",nh,nh)}catch(e){np=!1}var nm=!!np&&{passive:!1},ng=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&// contains scroll inside self
!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},nv=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),ny(e,n)){var r=nb(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body)return!1},ny=function(e,t){return"v"===e?ng(t,"overflowY"):ng(t,"overflowX")},nb=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},nw=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=a*r,s=n.target,u=t.contains(s),c=!1,d=l>0,f=0,p=0;do{var h=nb(e,s),m=h[0],g=h[1]-h[2]-a*m;(m||g)&&ny(e,s)&&(f+=g,p+=m),s=s.parentNode}while(!u&&s!==document.body||// self content
u&&(t.contains(s)||t===s))return d&&(o&&0===f||!o&&l>f)?c=!0:!d&&(o&&0===p||!o&&-l>p)&&(c=!0),c},nx=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nS=function(e){return[e.deltaX,e.deltaY]},nk=function(e){return e&&"current"in e?e.current:e},nE=0,nC=[],nT=(t7.useMedium(function(e){var t=b.useRef([]),n=b.useRef([0,0]),r=b.useRef(),o=b.useState(nE++)[0],i=b.useState(function(){return ni()})[0],a=b.useRef(e);b.useEffect(function(){a.current=e},[e]),b.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=t6([e.lockRef.current],(e.shards||[]).map(nk),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=b.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=nx(e),l=n.current,s="deltaX"in e?e.deltaX:l[0]-i[0],u="deltaY"in e?e.deltaY:l[1]-i[1],c=e.target,d=Math.abs(s)>Math.abs(u)?"h":"v";// allow horizontal touch move on Range inputs. They will not cause any scroll
if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=nv(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=nv(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(s||u)&&(r.current=o),!o)return!0;var p=r.current||o;return nw(p,t,e,"h"===p?s:u,!0)},[]),s=b.useCallback(function(e){if(nC.length&&nC[nC.length-1]===i){var n="deltaY"in e?nS(e):nx(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];// self event, and should be canceled
if(r&&r.should){e.cancelable&&e.preventDefault();return}// outside or shard event
if(!r){var o=(a.current.shards||[]).map(nk).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=b.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),c=b.useCallback(function(e){n.current=nx(e),r.current=void 0},[]),d=b.useCallback(function(t){u(t.type,nS(t),t.target,l(t,e.lockRef.current))},[]),f=b.useCallback(function(t){u(t.type,nx(t),t.target,l(t,e.lockRef.current))},[]);b.useEffect(function(){return nC.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",s,nm),document.addEventListener("touchmove",s,nm),document.addEventListener("touchstart",c,nm),function(){nC=nC.filter(function(e){return e!==i}),document.removeEventListener("wheel",s,nm),document.removeEventListener("touchmove",s,nm),document.removeEventListener("touchstart",c,nm)}},[]);var p=e.removeScrollBar,h=e.inert;return b.createElement(b.Fragment,null,h?b.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?b.createElement(nf,{gapMode:"margin"}):null)}),nn),nP=b.forwardRef(function(e,t){return b.createElement(nt,t4({},e,{ref:t,sideCar:nT}))});nP.classNames=nt.classNames;var n_=new WeakMap,nN=new WeakMap,nR={},nO=0,nA=function(e){return e&&(e.host||nA(e.parentNode))},nM=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=nA(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});nR[n]||(nR[n]=new WeakMap);var i=nR[n],a=[],l=new Set,s=new Set(o),u=function(e){!e||l.has(e)||(l.add(e),u(e.parentNode))};o.forEach(u);var c=function(e){!e||s.has(e)||Array.prototype.forEach.call(e.children,function(e){if(l.has(e))c(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,s=(n_.get(e)||0)+1,u=(i.get(e)||0)+1;n_.set(e,s),i.set(e,u),a.push(e),1===s&&o&&nN.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return c(t),l.clear(),nO++,function(){a.forEach(function(e){var t=n_.get(e)-1,o=i.get(e)-1;n_.set(e,t),i.set(e,o),t||(nN.has(e)||e.removeAttribute(r),nN.delete(e)),o||e.removeAttribute(n)}),--nO||(// clear
n_=new WeakMap,n_=new WeakMap,nN=new WeakMap,nR={})}},nj=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(// we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),nM(r,o,n,"aria-hidden")):function(){return null}};/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/let nI="Dialog",[nD,nz]=T(nI),[nL,nF]=nD(nI),nU=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF("DialogTrigger",n),i=_(t,o.triggerRef);return/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":n2(o.open)},r,{ref:i,onClick:C(e.onClick,o.onOpenToggle)}))}),n$="DialogPortal",[nW,nV]=nD(n$,{forceMount:void 0}),nH="DialogOverlay",nG=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=nV(nH,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=nF(nH,e.__scopeDialog);return i.modal?/*#__PURE__*/(0,b.createElement)(ei,{present:r||i.open},/*#__PURE__*/(0,b.createElement)(nY,E({},o,{ref:t}))):null}),nY=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF(nH,n);return/*#__PURE__*/(0,b.createElement)(nP,{as:N,allowPinchZoom:!0,shards:[o.contentRef]},/*#__PURE__*/(0,b.createElement)(L.div,E({"data-state":n2(o.open)},r,{ref:t// We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
,style:{pointerEvents:"auto",...r.style}})))}),nB="DialogContent",nq=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=nV(nB,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=nF(nB,e.__scopeDialog);return/*#__PURE__*/(0,b.createElement)(ei,{present:r||i.open},i.modal?/*#__PURE__*/(0,b.createElement)(nK,E({},o,{ref:t})):/*#__PURE__*/(0,b.createElement)(nQ,E({},o,{ref:t})))}),nK=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=nF(nB,e.__scopeDialog),r=(0,b.useRef)(null),o=_(t,n.contentRef,r);return(0,b.useEffect)(()=>{let e=r.current;if(e)return nj(e)},[]),/*#__PURE__*/(0,b.createElement)(nX,E({},e,{ref:o// we make sure focus isn't trapped once `DialogContent` has been closed
,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:C(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:C(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;// it is effectively as if we right-clicked the `Overlay`.
r&&e.preventDefault()})// When focus is trapped, a `focusout` event may still happen.
,onFocusOutside:C(e.onFocusOutside,e=>e.preventDefault())}))}),nQ=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=nF(nB,e.__scopeDialog),r=(0,b.useRef)(!1),o=(0,b.useRef)(!1);return/*#__PURE__*/(0,b.createElement)(nX,E({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));// As the trigger is already setup to close, without doing so would
// cause it to close and immediately open.
let l=t.target,s=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l);s&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),nX=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...a}=e,l=nF(nB,n),s=(0,b.useRef)(null),u=_(t,s);return t2(),/*#__PURE__*/(0,b.createElement)(b.Fragment,null,/*#__PURE__*/(0,b.createElement)(tq,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},/*#__PURE__*/(0,b.createElement)(t$,E({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":n2(l.open)},a,{ref:u,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),nJ="DialogTitle",nZ=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF(nJ,n);return/*#__PURE__*/(0,b.createElement)(L.h2,E({id:o.titleId},r,{ref:t}))}),n0=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF("DialogDescription",n);return/*#__PURE__*/(0,b.createElement)(L.p,E({id:o.descriptionId},r,{ref:t}))}),n1=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF("DialogClose",n);return/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button"},r,{ref:t,onClick:C(e.onClick,()=>o.onOpenChange(!1))}))});/* -----------------------------------------------------------------------------------------------*/function n2(e){return e?"open":"closed"}let[n3,n4]=function(e,t){let n=/*#__PURE__*/(0,b.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,b.useMemo)(()=>r,Object.values(r));// Only re-memoize when prop values change
return/*#__PURE__*/(0,b.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,b.useContext)(n);if(o)return o;if(void 0!==t)return t;// if a defaultContext wasn't specified, it's a required context.
throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:nB,titleName:nJ,docsSlug:"dialog"}),n5=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!0}=e,l=(0,b.useRef)(null),s=(0,b.useRef)(null),[u=!1,c]=$({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,b.createElement)(nL,{scope:t,triggerRef:l,contentRef:s,contentId:z(),titleId:z(),descriptionId:z(),open:u,onOpenChange:c,onOpenToggle:(0,b.useCallback)(()=>c(e=>!e),[c]),modal:a},n)},n6=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=nF(n$,t);return/*#__PURE__*/(0,b.createElement)(nW,{scope:t,forceMount:n},(0,b.Children).map(r,e=>/*#__PURE__*/(0,b.createElement)(ei,{present:n||i.open},/*#__PURE__*/(0,b.createElement)(t0,{asChild:!0,container:o},e))))},[n8,n9]=T("AlertDialog",[nz]),n7=nz(),re=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n7(n);return/*#__PURE__*/(0,b.createElement)(nU,E({},o,r,{ref:t}))}),rt=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n7(n);return/*#__PURE__*/(0,b.createElement)(nG,E({},o,r,{ref:t}))}),rn="AlertDialogContent",[rr,ro]=n8(rn),ri=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,children:r,...o}=e,i=n7(n),a=(0,b.useRef)(null),l=_(t,a),s=(0,b.useRef)(null);return/*#__PURE__*/(0,b.createElement)(n3,{contentName:rn,titleName:ra,docsSlug:"alert-dialog"},/*#__PURE__*/(0,b.createElement)(rr,{scope:n,cancelRef:s},/*#__PURE__*/(0,b.createElement)(nq,E({role:"alertdialog"},i,o,{ref:l,onOpenAutoFocus:C(o.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=s.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),/*#__PURE__*/(0,b.createElement)(O,null,r),!1)))}),ra="AlertDialogTitle",rl=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n7(n);return/*#__PURE__*/(0,b.createElement)(nZ,E({},o,r,{ref:t}))}),rs=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n7(n);return/*#__PURE__*/(0,b.createElement)(n0,E({},o,r,{ref:t}))}),ru=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n7(n);return/*#__PURE__*/(0,b.createElement)(n1,E({},o,r,{ref:t}))}),rc=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:o}=ro("AlertDialogCancel",n),i=n7(n),a=_(t,o);return/*#__PURE__*/(0,b.createElement)(n1,E({},i,r,{ref:a}))});var b=m("exYeM");let rd=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,rf=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return eb(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:i}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let a=rd(t)||rd(r);return o[e][a]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),s=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...l}[t]):({...i,...l})[t]===n})?[...e,n,r]:e},[]);return eb(e,a,s,null==n?void 0:n.class,null==n?void 0:n.className)},rp=rf("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",submit:"bg-slate-500 text-destructive-foreground hover:bg-slate-500/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",share:"border-solid bg-fuchsia-400	basis-1/2 hover:bg-fuchsia-400/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",deselectallsize:"h-10 py-2",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),rh=/*#__PURE__*/b.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{let a=r?N:"button";return/*#__PURE__*/(0,g.jsx)(a,{className:eX(rp({variant:t,size:n,className:e})),ref:i,...o})});rh.displayName="Button";let rm=e=>{let{__scopeAlertDialog:t,...n}=e,r=n7(t);return/*#__PURE__*/(0,b.createElement)(n5,E({},r,n,{modal:!0}))},rg=e=>{let{__scopeAlertDialog:t,...n}=e,r=n7(t);return/*#__PURE__*/(0,b.createElement)(n6,E({},r,n))},rv=/*#__PURE__*/b.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(rt,{className:eX("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...n,ref:r}));rv.displayName=rt.displayName;let ry=/*#__PURE__*/b.forwardRef(({className:e,handleMouseDownOnOverlay:t,...n},r)=>/*#__PURE__*/(0,g.jsxs)(rg,{children:[/*#__PURE__*/(0,g.jsx)(rv,{onMouseDown:t}),/*#__PURE__*/(0,g.jsx)(ri,{ref:r,className:eX("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e),...n})]}));ry.displayName=ri.displayName;let rb=({className:e,...t})=>/*#__PURE__*/(0,g.jsx)("div",{className:eX("flex flex-col space-y-2 text-center sm:text-left",e),...t});rb.displayName="AlertDialogHeader";let rw=({className:e,...t})=>/*#__PURE__*/(0,g.jsx)("div",{className:eX("flex flex-row gap-x-4 justify-center",e),...t});rw.displayName="AlertDialogFooter";let rx=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(rl,{ref:n,className:eX("text-lg font-semibold",e),...t}));rx.displayName=rl.displayName;let rS=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(rs,{ref:n,className:eX("text-sm text-muted-foreground",e),...t}));rS.displayName=rs.displayName;let rk=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(ru,{ref:n,className:eX(rp(),e),...t}));rk.displayName=ru.displayName;let rE=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(rc,{ref:n,className:eX(rp({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));rE.displayName=rc.displayName;var rC=function({title:e="title",trigger:t,initiallyOpen:n=!0,footerElements:r,children:o,actionButtonText:i="Continue",showActionButton:a=!0}){let[l,s]=/*@__PURE__*/f(b).useState(n);function u(){s(!1)}return /*@__PURE__*/f(b).useEffect(()=>{s(n)},[n]),/*#__PURE__*/(0,g.jsxs)(rm,{open:l,onOpenChange:s,children:[!!t&&/*#__PURE__*/(0,g.jsx)(re,{children:t}),/*#__PURE__*/(0,g.jsxs)(ry,{handleMouseDownOnOverlay:u,onEscapeKeyDown:u,onCloseAutoFocus:e=>{e.preventDefault()},children:[/*#__PURE__*/(0,g.jsxs)(rb,{children:[/*#__PURE__*/(0,g.jsx)(rx,{children:e}),/*#__PURE__*/(0,g.jsx)(rS,{children:o})]}),/*#__PURE__*/(0,g.jsxs)(rw,{children:[r,a&&/*#__PURE__*/(0,g.jsx)(rk,{onClick:()=>s(!1),children:i})]})]})]})},rT=function(){return/*#__PURE__*/(0,g.jsx)(rC,{title:"",trigger:/*#__PURE__*/(0,g.jsx)(k,{className:"mr-4"}),initiallyOpen:!1,actionButtonText:"Got It!",children:/*#__PURE__*/(0,g.jsxs)(ep,{defaultValue:"how-to-play",children:[/*#__PURE__*/(0,g.jsxs)(e4,{className:"grid w-full grid-cols-2",children:[/*#__PURE__*/(0,g.jsx)(e5,{value:"how-to-play",children:"How To Play"}),/*#__PURE__*/(0,g.jsx)(e5,{value:"about-us",children:"About Us"})]}),/*#__PURE__*/(0,g.jsxs)(e6,{value:"how-to-play",children:[" ",/*#__PURE__*/(0,g.jsxs)(tg,{type:"single",collapsible:!0,className:"w-full",children:[/*#__PURE__*/(0,g.jsxs)(tD,{value:"item-1",children:[/*#__PURE__*/(0,g.jsx)(tz,{children:"What's The Goal?"}),/*#__PURE__*/(0,g.jsx)(tL,{children:"Find groups of items or names that share something in common."})]}),/*#__PURE__*/(0,g.jsxs)(tD,{value:"item-2",children:[/*#__PURE__*/(0,g.jsx)(tz,{children:"How Do I Play?"}),/*#__PURE__*/(0,g.jsx)(tL,{children:"Select the items and tap 'Submit' to check if your guess matches one of the answer categories."})]}),/*#__PURE__*/(0,g.jsxs)(tD,{value:"item-3",children:[/*#__PURE__*/(0,g.jsx)(tz,{children:"How Many Tries Do I Get?"}),/*#__PURE__*/(0,g.jsx)(tL,{children:"You can make 8 mistakes before the game ends."})]})]})]}),/*#__PURE__*/(0,g.jsxs)(e6,{value:"about-us",children:[" ",/*#__PURE__*/(0,g.jsxs)(tg,{type:"single",collapsible:!0,className:"w-full",children:[/*#__PURE__*/(0,g.jsxs)(tD,{value:"item-1",children:[/*#__PURE__*/(0,g.jsx)(tz,{children:"Who Are You?"}),/*#__PURE__*/(0,g.jsx)(tL,{children:"Dad."})]}),/*#__PURE__*/(0,g.jsxs)(tD,{value:"item-2",children:[/*#__PURE__*/(0,g.jsx)(tz,{children:"How Can I Support?"}),/*#__PURE__*/(0,g.jsx)(tL,{children:"Don't."})]}),/*#__PURE__*/(0,g.jsxs)(tD,{value:"item-3",children:[/*#__PURE__*/(0,g.jsx)(tz,{children:"Any Other Projects to Check Out?"}),/*#__PURE__*/(0,g.jsx)(tL,{children:"Deez Nuts."})]})]})]})]})})},b=m("exYeM");function rP(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function r_(e){return(r_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rN(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function rR(e){rN(1,arguments);var t=Object.prototype.toString.call(e);return(// Clone the date
e instanceof Date||"object"===r_(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(// eslint-disable-next-line no-console
console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),// eslint-disable-next-line no-console
console.warn(Error().stack)),new Date(NaN)))}function rO(e,t){rN(2,arguments);var n=rR(e),r=rP(t);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function rA(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function rM(e){rN(1,arguments);var t=rR(e);return t.setHours(0,0,0,0),t}// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function rj(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function rI(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return(e<0?"-":"")+n}function rD(e,t){rN(1,arguments);var n,r,o=rR(e);if(isNaN(o.getTime()))throw RangeError("Invalid time value");var i=String(null!==(n=null==t?void 0:t.format)&&void 0!==n?n:"extended"),a=String(null!==(r=null==t?void 0:t.representation)&&void 0!==r?r:"complete");if("extended"!==i&&"basic"!==i)throw RangeError("format must be 'extended' or 'basic'");if("date"!==a&&"time"!==a&&"complete"!==a)throw RangeError("representation must be 'date', 'time', or 'complete'");var l="",s="",u="extended"===i?"-":"";// Representation is either 'date' or 'complete'
if("time"!==a){var c=rI(o.getDate(),2),d=rI(o.getMonth()+1,2),f=rI(o.getFullYear(),4);// yyyyMMdd or yyyy-MM-dd.
l="".concat(f).concat(u).concat(d).concat(u).concat(c)}// Representation is either 'time' or 'complete'
if("date"!==a){// Add the timezone.
var p=o.getTimezoneOffset();if(0!==p){var h=Math.abs(p),m=rI(Math.floor(h/60),2),g=rI(h%60,2);s="".concat(p<0?"+":"-").concat(m,":").concat(g)}else s="Z";var v=rI(o.getHours(),2),y=rI(o.getMinutes(),2),b=rI(o.getSeconds(),2),w=""===l?"":"T",x=[v,y,b].join("extended"===i?":":"");// HHmmss or HH:mm:ss.
l="".concat(l).concat(w).concat(x).concat(s)}return l}function rz(e,t){rN(1,arguments);var n,r,o,i=rP(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==i&&1!==i&&0!==i)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof e||"[object String]"===Object.prototype.toString.call(e)))return new Date(NaN);var a=function(e){var t,n={},r=e.split(rL.dateTimeDelimiter);// The regex match should only return at maximum two array elements.
// [date], [time], or [date, time].
if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],rL.timeZoneDelimiter.test(n.date)&&(n.date=e.split(rL.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=rL.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e);if(a.date){var l=function(e,t){var n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);// Invalid ISO-formatted year
if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;// either year or century is null, not both
return{year:null===i?o:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(a.date,i);r=function(e,t){// Invalid ISO-formatted year
if(null===t)return new Date(NaN);var n,r,o=e.match(rF);// Invalid ISO-formatted string
if(!o)return new Date(NaN);var i=!!o[4],a=rW(o[1]),l=rW(o[2])-1,s=rW(o[3]),u=rW(o[4]),c=rW(o[5])-1;if(i)return u>=1&&u<=53&&c>=0&&c<=6?((n=new Date(0)).setUTCFullYear(t,0,4),r=n.getUTCDay()||7,n.setUTCDate(n.getUTCDate()+((u-1)*7+c+1-r)),n):new Date(NaN);var d=new Date(0);return l>=0&&l<=11&&s>=1&&s<=(rH[l]||(rG(t)?29:28))&&a>=1&&a<=(rG(t)?366:365)?(d.setUTCFullYear(t,l,Math.max(a,s)),d):new Date(NaN)}(l.restDateString,l.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var s=r.getTime(),u=0;if(a.time&&isNaN(u=function(e){var t=e.match(rU);if(!t)return NaN;// Invalid ISO-formatted time
var n=rV(t[1]),r=rV(t[2]),o=rV(t[3]);return(24===n?0===r&&0===o:o>=0&&o<60&&r>=0&&r<60&&n>=0&&n<25)?36e5*n+6e4*r+1e3*o:NaN}(a.time)))return new Date(NaN);if(a.timezone){if(isNaN(o=function(e){if("Z"===e)return 0;var t=e.match(r$);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return o>=0&&o<=59?n*(36e5*r+6e4*o):NaN}(a.timezone)))return new Date(NaN)}else{var c=new Date(s+u),d=new Date(0);return d.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),d.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),d}return new Date(s+u+o)}var rL={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},rF=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,rU=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,r$=/^([+-])(\d{2})(?::?(\d{2}))?$/;function rW(e){return e?parseInt(e):1}function rV(e){return e&&parseFloat(e.replace(",","."))||0}// Validation functions
// February is null to handle the leap year (using ||)
var rH=[31,null,31,30,31,30,31,31,30,31,30,31];function rG(e){return e%400==0||e%4==0&&e%100!=0}m("exYeM");var rY={};n(rY,"extract",function(){return r5}),n(rY,"parse",function(){return r6}),n(rY,"stringify",function(){return r8}),n(rY,"parseUrl",function(){return r9}),n(rY,"stringifyUrl",function(){return r7}),n(rY,"pick",function(){return oe}),n(rY,"exclude",function(){return ot});let rB="%[a-f0-9]{2}",rq=RegExp("("+rB+")|([^%]+?)","gi"),rK=RegExp("("+rB+")+","gi");function rQ(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let n=e.indexOf(t);return -1===n?[]:[e.slice(0,n),e.slice(n+t.length)]}let rX=e=>null==e,rJ=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),rZ=Symbol("encodeFragmentIdentifier");function r0(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function r1(e,t){return t.encode?t.strict?rJ(e):encodeURIComponent(e):e}function r2(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{// Try the built in decoder first
return decodeURIComponent(e)}catch{// Fallback to a more advanced decoder
return function(e){// Keep track of all the replacements and prefill the map with the `BOM`
let t={"%FE%FF":"��","%FF%FE":"��"},n=rK.exec(e);for(;n;){try{// Decode as big chunks as possible
t[n[0]]=decodeURIComponent(n[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(rq)||[];for(let n=1;n<t.length;n++)t=(e=(function e(t,n){try{// Try to decode the entire string first
return[decodeURIComponent(t.join(""))]}catch{// Do nothing
}if(1===t.length)return t;n=n||1;// Split the array in 2 parts
let r=t.slice(0,n),o=t.slice(n);return Array.prototype.concat.call([],e(r),e(o))})(t,n).join("")).match(rq)||[];return e}}(n[0]);e!==n[0]&&(t[n[0]]=e)}n=rK.exec(e)}// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
t["%C2"]="�";let r=Object.keys(t);for(let n of r)e=e.replace(RegExp(n,"g"),t[n]);return e}(e)}}(e):e}function r3(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function r4(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function r5(e){e=r3(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function r6(e,t){r0((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){r[e]=n;return}void 0===r[e]&&(r[e]={}),r[e][t[1]]=n};case"bracket":return(e,n,r)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){r[e]=n;return}if(void 0===r[e]){r[e]=[n];return}r[e]=[...r[e],n]};case"colon-list-separator":return(e,n,r)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){r[e]=n;return}if(void 0===r[e]){r[e]=[n];return}r[e]=[...r[e],n]};case"comma":case"separator":return(t,n,r)=>{let o="string"==typeof n&&n.includes(e.arrayFormatSeparator),i="string"==typeof n&&!o&&r2(n,e).includes(e.arrayFormatSeparator);n=i?r2(n,e):n;let a=o||i?n.split(e.arrayFormatSeparator).map(t=>r2(t,e)):null===n?n:r2(n,e);r[t]=a};case"bracket-separator":return(t,n,r)=>{let o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o){r[t]=n?r2(n,e):n;return}let i=null===n?[]:n.split(e.arrayFormatSeparator).map(t=>r2(t,e));if(void 0===r[t]){r[t]=i;return}r[t]=[...r[t],...i]};default:return(e,t,n)=>{if(void 0===n[e]){n[e]=t;return}n[e]=[...[n[e]].flat(),t]}}}(t),r=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return r;for(let o of e.split("&")){if(""===o)continue;let e=t.decode?o.replace(/\+/g," "):o,[i,a]=rQ(e,"=");void 0===i&&(i=e),// Missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:r2(a,t),n(r2(i,t),a,r)}for(let[e,n]of Object.entries(r))if("object"==typeof n&&null!==n)for(let[e,r]of Object.entries(n))n[e]=r4(r,t);else r[e]=r4(n,t);return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{let n=r[t];return n&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}function r8(e,t){if(!e)return"";r0((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let n=n=>t.skipNull&&rX(e[n])||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{let o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[r1(t,e),"[",o,"]"].join("")]:[...n,[r1(t,e),"[",r1(o,e),"]=",r1(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[r1(t,e),"[]"].join("")]:[...n,[r1(t,e),"[]=",r1(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[r1(t,e),":list="].join("")]:[...n,[r1(t,e),":list=",r1(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(// Translate null to an empty string so that it doesn't serialize as 'null'
        o=null===o?"":o,0===r.length)?[[r1(n,e),t,r1(o,e)].join("")]:[[r,r1(o,e)].join(e.arrayFormatSeparator)]}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,r1(t,e)]:[...n,[r1(t,e),"=",r1(r,e)].join("")]}}(t),o={};for(let[t,r]of Object.entries(e))n(t)||(o[t]=r);let i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map(n=>{let o=e[n];return void 0===o?"":null===o?r1(n,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?r1(n,t)+"[]":o.reduce(r(n),[]).join("&"):r1(n,t)+"="+r1(o,t)}).filter(e=>e.length>0).join("&")}function r9(e,t){t={decode:!0,...t};let[n,r]=rQ(e,"#");return void 0===n&&(n=e),{url:n?.split("?")?.[0]??"",query:r6(r5(e),t),...t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:r2(r,t)}:{}}}function r7(e,t){t={encode:!0,strict:!0,[rZ]:!0,...t};let n=r3(e.url).split("?")[0]||"",r=r5(e.url),o={...r6(r,{sort:!1}),...e.query},i=r8(o,t);i&&(i=`?${i}`);let a=function(e){let t="",n=e.indexOf("#");return -1!==n&&(t=e.slice(n)),t}(e.url);if(e.fragmentIdentifier){let r=new URL(n);r.hash=e.fragmentIdentifier,a=t[rZ]?r.hash:`#${e.fragmentIdentifier}`}return`${n}${i}${a}`}function oe(e,t,n){n={parseFragmentIdentifier:!0,[rZ]:!1,...n};let{url:r,query:o,fragmentIdentifier:i}=r9(e,n);return r7({url:r,query:function(e,t){let n={};if(Array.isArray(t))for(let r of t){let t=Object.getOwnPropertyDescriptor(e,r);t?.enumerable&&Object.defineProperty(n,r,t)}else for(let r of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,r);if(o.enumerable){let i=e[r];t(r,i,e)&&Object.defineProperty(n,r,o)}}return n}(o,t),fragmentIdentifier:i},n)}function ot(e,t,n){let r=Array.isArray(t)?e=>!t.includes(e):(e,n)=>!t(e,n);return oe(e,r,n)}let on=[[{category:"UK BASED",words:["FRIMMY","SASH","JAMPOT","MCGURK"],difficulty:1},{category:"BILINGUAL GIRLS",words:["METHE","OCEANA","ADELA","VIKI"],difficulty:2},{category:"HAVE MET DADDY IN PERSON",words:["CARROT","JIN","SAVAGE","BLASTER"],difficulty:3},{category:"DECEMBER BIRTHDAYS",words:["QUARRIS","GLEB","STRAWBERRY","MUFFIN"],difficulty:4}],[{category:"KIDS (ONE WAY OR ANOTHER)",words:["FAKE","GIA","SMITHI","GARRY"],difficulty:1},{category:"VALORANT PLAYERS",words:["CHICO","FRIMMY","BLASTER","OCEANA"],difficulty:2},{category:"SERVER BOOSTERS",words:["DERK","MCGURK","CAMBO","BANGLED"],difficulty:3},{category:"PURPLE NAMES (LMAOOO)",words:["SOPH","CHOCOPUN","BRAPPSKOG","SLIFER"],difficulty:4}],[{category:"MOD _____",words:["MAIL","ABUSE","DED","TEAM"],difficulty:1},{category:"SERVER BOTS",words:["BIRTHDAY","JOCKIE","UNO","MARRIAGE"],difficulty:2},{category:"THINGS IN POLUS STORAGE ROOM",words:["CANISTER","HOLE","BOXES","SHELF"],difficulty:3},{category:">FISH 'CAUGHT TRASH' EMOJIS",words:["PAPERCLIP","BUCKET","FAX","BROOM"],difficulty:4}],[{category:"THE OTHER ROLES",words:["THIEF","NINJA","WITCH","VULTURE"],difficulty:1},{category:"FIXABLE THINGS IN AMONG US",words:["WIRING","NODE","SHOWER","ANTENNA"],difficulty:2},{category:"TRAITS IN TEAMFIGHT TACTICS SET 9.5",words:["INVOKER","SLAYER","JUGGERNAUT","SORCERER"],difficulty:3},{category:"ALBUMS GIVEN IN THE EXCHANGE",words:["SEVEN","DUMMY","VOICES","MILLENNIUM"],difficulty:4}],[{category:"CARROT CODED",words:["RPG","MANGO","JEGGINGS","WHEEZE"],difficulty:1},{category:"SIMULATORS PLAYED IN THE SERVER",words:["TABLETOP","TRUCK","ESCAPE","POWERWASH"],difficulty:2},{category:"PISSBOT COMMANDS",words:["ADOPT","GIFT","ARREST","HAWRANT1"],difficulty:3},{category:"EMOJIS USED IN PISS CHANNEL NAMES",words:["PEACH","TOILET","LAPTOP","MICROBE"],difficulty:4}],[{category:"ROLES IN TOWN OF US",words:["JESTER","VIGILANTE","MAYOR","MINER"],difficulty:1},{category:"MINECRAFT BIOMES",words:["SNOWY","JUNGLE","SWAMP","END"],difficulty:2},{category:"VALORANT WEAPONS",words:["SHERIFF","PHANTOM","GHOST","KNIFE"],difficulty:3},{category:"WARFRAMES >:)",words:["WISP","FROST","MESA","LOKI"],difficulty:4}],[{category:"FAKE NATIONALITIES",words:["ICELANDISH","BAHRAINIAN","PAKISTANIAN","NEPALIAN"],difficulty:1},{category:"ENDS IN -ISH",words:["SWEDISH","ENGLISH","SPANISH","DANISH"],difficulty:2},{category:"ASIAN NATIONALITIES",words:["INDIAN","AFGHAN","CHINESE","BANGLADESHI"],difficulty:3},{category:"MOD TEAM NATIONALITIES",words:["DOMINICAN","AMERICAN","CANADIAN","AUSTRALIAN"],difficulty:4}],[{category:"PISS-O-WEEN DROP EMOJIS",words:["CHOCOLATE","CUPCAKE","DONUT","HONEY"],difficulty:1},{category:"WE WERE HERE ______",words:["TOO","TOGETHER","FOREVER","EXPEDITIONS"],difficulty:2},{category:"SONGS FROM TAYLOR SWIFT'S 'FOLKLORE'",words:["MIRRORBALL","AUGUST","PEACE","HOAX"],difficulty:3},{category:"LATEST RECIPES IN THE RECIPES THREAD",words:["EGG","SOUP","COOKIES","BORSCHT"],difficulty:4}],[{category:"FORMER MODERATORS",words:["JENN","BRICK","AIDAN","GREENBAY"],difficulty:1},{category:"COMMON LAST NAMES BUT WITH A CHEEKY EXTRA I",words:["SMITHI","MILLERI","BROWNI","CLARKI"],difficulty:2},{category:"ANIMAL CROSSING VILLAGERS",words:["ROALD","RAYMOND","ANKHA","ALFONSO"],difficulty:3},{category:"FORMULA 1 RACERS",words:["VERSTAPPEN","PIASTRI","NORRIS","ALONSO"],difficulty:4}],[{category:"AMONG US MAPS",words:["SKELD","POLUS","AIRSHIP","FUNGLE"],difficulty:1},{category:"TYPES OF AMONG US LOBBIES",words:["VANILLA","BIRTHDAY","DRUNK","MODDED"],difficulty:2},{category:"UNO SPECIAL CARDS",words:["SKIP","WILD","DRAW","REVERSE"],difficulty:3},{category:"'LOOK!' IN SPANISH",words:["MIRA","VE","OBSERVA","BUSCA"],difficulty:4}],[{category:"PUMMEL PARTY ITEMS",words:["SHOTGUN","MAGNET","EGGPLANT","PRESENT"],difficulty:1},{category:"R/HAFULOBBY EMOJIS",words:["CIVIC","MAYO","MAOZEDONG","THONKIN"],difficulty:2},{category:"EVIL ROLES IN GOOSE GOOSE DUCK",words:["SILENCER","HITMAN","STALKER","CANNIBAL"],difficulty:3},{category:"KILLERS IN DEAD BY DAYLIGHT",words:["SHAPE","NIGHTMARE","PLAGUE","EXECUTIONER"],difficulty:4}],[{category:"MOD ACTIONS",words:["WARN","BAN","MUTE","TIMEOUT"],difficulty:1},{category:"LIVE STREAMING PLATFORMS",words:["TWITCH","KICK","MIXER","YOUTUBE"],difficulty:2},{category:"______ TIME",words:["STEVEN","MORBIN","REWIND","SLEEPY"],difficulty:3},{category:"HALLOWEEN 2023 COSTUMES ON PISSTAGRAM",words:["MARIO","WEDNESDAY","MAID","ELF"],difficulty:4}]],or=()=>rM(Date.now()),oo=new Date(2023,9,27),oi=e=>{let t=rM(e),n=function(e,t){rN(2,arguments);var n=rR(e),r=rR(t),o=rj(n,r),i=Math.abs(function(e,t){rN(2,arguments);var n=rM(e),r=rM(t);// Round the number of days to the nearest integer
// because the number of milliseconds in a day is not constant
// (e.g. it's different in the day of the daylight saving time clock shift)
return Math.round((n.getTime()-rA(n)-(r.getTime()-rA(r)))/864e5)}(n,r));n.setDate(n.getDate()-o*i);// Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
// If so, result must be decreased by 1 in absolute value
var a=Number(rj(n,r)===-o),l=o*(i-a);// Prevent negative zero
return 0===l?0:l}(t,oo)%1;return rO(t,-n)},oa=e=>rO(oi(e),1),ol=e=>{let t=oo;console.log("start ",t),console.log("today ",e);let n=-1;console.log(oo);do n++,t=rO(t,1);while(t<=e)return n},os=e=>{if(e<0)throw Error("Invalid index");//return getFirestoreData(index);
return on[e%on.length]},ou=()=>{if(od())return or();let e=rY.parse(window.location.search);try{let t=rM(rz(e.d?.toString()));if(t>=or()||t<oo)return oc(or()),or();return t}catch(e){return console.log(e),or()}},oc=e=>{try{if(e<or()){window.location.href=y+"/?d="+rD(e,{representation:"date"});return}}catch(e){console.log(e)}window.location.href=y},od=()=>{// https://github.com/cwackerfuss/react-wordle/pull/505
let e=rY.parse(window.location.search);return console.log(e),null===e||!("d"in e)},of=()=>{let e=[];for(var t=0;t<=on.length;t++){let n=rO(oo,t),r=rD(rO(oo,t),{representation:"date"}),o=localStorage.getItem("gameState"+r);n<=or()&&e.push({id:t,date:r,result:op(o?JSON.parse(o):null)})}return e},op=e=>e?4==e.solvedGameData.length?"WON":8==e.submittedGuesses.length?"LOST":e.submittedGuesses.length>0?"STARTED":"PENDING":"PENDING",{puzzleAnswers:oh,puzzleGameDate:om,puzzleIndex:og,dateOfNextPuzzle:ov}=(e=>{let t=oa(e),n=ol(e),r=os(n);return console.log("index for today: ",n),console.log("We've got puzzles till ",rO(oo,on.length-1)),{puzzleAnswers:r,puzzleGameDate:e,puzzleIndex:n,dateOfNextPuzzle:t.valueOf()}})(ou()),oy=S("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);var b=(m("exYeM"),m("exYeM"));let ob=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{pressed:n,defaultPressed:r=!1,onPressedChange:o,...i}=e,[a=!1,l]=$({prop:n,onChange:o,defaultProp:r});return/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0},i,{ref:t,onClick:C(e.onClick,()=>{e.disabled||l(!a)})}))}),ow=rf("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors lg:hover:bg-muted lg:hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-300/70 data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border-solid border border-input bg-transparent lg:hover:bg-accent lg:hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),ox=/*#__PURE__*/b.forwardRef(({className:e,variant:t,size:n,...r},o)=>/*#__PURE__*/(0,g.jsx)(ob,{ref:o,className:eX(ow({variant:t,size:n,className:e})),...r}));function oS(e){rN(1,arguments);var t=rR(e),n=t.getUTCDay();return t.setUTCDate(t.getUTCDate()-((n<1?7:0)+n-1)),t.setUTCHours(0,0,0,0),t}function ok(e){rN(1,arguments);var t=rR(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=oS(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var a=oS(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}ox.displayName=ob.displayName;var oE={};function oC(e,t){rN(1,arguments);var n,r,o,i,a,l,s,u,c=rP(null!==(n=null!==(r=null!==(o=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t?void 0:null===(a=t.locale)||void 0===a?void 0:null===(l=a.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:oE.weekStartsOn)&&void 0!==r?r:null===(s=oE.locale)||void 0===s?void 0:null===(u=s.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==n?n:0);// Test if weekStartsOn is between 0 and 6 _and_ is not NaN
if(!(c>=0&&c<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=rR(e),f=d.getUTCDay();return d.setUTCDate(d.getUTCDate()-((f<c?7:0)+f-c)),d.setUTCHours(0,0,0,0),d}function oT(e,t){rN(1,arguments);var n,r,o,i,a,l,s,u,c=rR(e),d=c.getUTCFullYear(),f=rP(null!==(n=null!==(r=null!==(o=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t?void 0:null===(a=t.locale)||void 0===a?void 0:null===(l=a.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:oE.firstWeekContainsDate)&&void 0!==r?r:null===(s=oE.locale)||void 0===s?void 0:null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1);// Test if weekStartsOn is between 1 and 7 _and_ is not NaN
if(!(f>=1&&f<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(d+1,0,f),p.setUTCHours(0,0,0,0);var h=oC(p,t),m=new Date(0);m.setUTCFullYear(d,0,f),m.setUTCHours(0,0,0,0);var g=oC(m,t);return c.getTime()>=h.getTime()?d+1:c.getTime()>=g.getTime()?d:d-1}var oP={// Year
y:function(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
var n=e.getUTCFullYear(),r=n>0?n:1-n;return rI("yy"===t?r%100:r,t.length)},// Month
M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):rI(n+1,2)},// Day of the month
d:function(e,t){return rI(e.getUTCDate(),t.length)},// AM or PM
a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},// Hour [1-12]
h:function(e,t){return rI(e.getUTCHours()%12||12,t.length)},// Hour [0-23]
H:function(e,t){return rI(e.getUTCHours(),t.length)},// Minute
m:function(e,t){return rI(e.getUTCMinutes(),t.length)},// Second
s:function(e,t){return rI(e.getUTCSeconds(),t.length)},// Fraction of second
S:function(e,t){var n=t.length;return rI(Math.floor(e.getUTCMilliseconds()*Math.pow(10,n-3)),t.length)}},o_={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};function oN(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),i=r%60;return 0===i?n+String(o):n+String(o)+(t||"")+rI(i,2)}function oR(e,t){return e%60==0?(e>0?"-":"+")+rI(Math.abs(e)/60,2):oO(e,t)}function oO(e,t){var n=e>0?"-":"+",r=Math.abs(e);return n+rI(Math.floor(r/60),2)+(t||"")+rI(r%60,2)}var oA={// Era
G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});// A, B
case"GGGGG":return n.era(r,{width:"narrow"});// Anno Domini, Before Christ
default:return n.era(r,{width:"wide"})}},// Year
y:function(e,t,n){// Ordinal number
if("yo"===t){var r=e.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return oP.y(e,t)},// Local week-numbering year
Y:function(e,t,n,r){var o=oT(e,r),i=o>0?o:1-o;return(// Two digit year
"YY"===t?rI(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):rI(i,t.length))},// ISO week-numbering year
R:function(e,t){// Padding
return rI(ok(e),t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){return rI(e.getUTCFullYear(),t.length)},// Quarter
Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(r);// 01, 02, 03, 04
case"QQ":return rI(r,2);// 1st, 2nd, 3rd, 4th
case"Qo":return n.ordinalNumber(r,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
default:return n.quarter(r,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(r);// 01, 02, 03, 04
case"qq":return rI(r,2);// 1st, 2nd, 3rd, 4th
case"qo":return n.ordinalNumber(r,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
default:return n.quarter(r,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return oP.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return n.ordinalNumber(r+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});// January, February, ..., December
default:return n.month(r,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,n){var r=e.getUTCMonth();switch(t){// 1, 2, ..., 12
case"L":return String(r+1);// 01, 02, ..., 12
case"LL":return rI(r+1,2);// 1st, 2nd, ..., 12th
case"Lo":return n.ordinalNumber(r+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});// January, February, ..., December
default:return n.month(r,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,n,r){var o=function(e,t){rN(1,arguments);var n=rR(e);// Round the number of days to the nearest integer
// because the number of milliseconds in a week is not constant
// (e.g. it's different in the week of the daylight saving time clock shift)
return Math.round((oC(n,t).getTime()-(function(e,t){rN(1,arguments);var n,r,o,i,a,l,s,u,c=rP(null!==(n=null!==(r=null!==(o=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t?void 0:null===(a=t.locale)||void 0===a?void 0:null===(l=a.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:oE.firstWeekContainsDate)&&void 0!==r?r:null===(s=oE.locale)||void 0===s?void 0:null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1),d=oT(e,t),f=new Date(0);return f.setUTCFullYear(d,0,c),f.setUTCHours(0,0,0,0),oC(f,t)})(n,t).getTime())/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):rI(o,t.length)},// ISO week of year
I:function(e,t,n){var r=function(e){rN(1,arguments);var t=rR(e);// Round the number of days to the nearest integer
// because the number of milliseconds in a week is not constant
// (e.g. it's different in the week of the daylight saving time clock shift)
return Math.round((oS(t).getTime()-(function(e){rN(1,arguments);var t=ok(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),oS(n)})(t).getTime())/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):rI(r,t.length)},// Day of the month
d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):oP.d(e,t)},// Day of year
D:function(e,t,n){var r=function(e){rN(1,arguments);var t=rR(e),n=t.getTime();return t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0),Math.floor((n-t.getTime())/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):rI(r,t.length)},// Day of week
E:function(e,t,n){var r=e.getUTCDay();switch(t){// Tue
case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});// Tuesday
default:return n.day(r,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,n,r){var o=e.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(i);// Padded numerical value
case"ee":return rI(i,2);// 1st, 2nd, ..., 7th
case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return n.day(o,{width:"short",context:"formatting"});// Tuesday
default:return n.day(o,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,n,r){var o=e.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(i);// Padded numerical value
case"cc":return rI(i,t.length);// 1st, 2nd, ..., 7th
case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return n.day(o,{width:"short",context:"standalone"});// Tuesday
default:return n.day(o,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){// 2
case"i":return String(o);// 02
case"ii":return rI(o,t.length);// 2nd
case"io":return n.ordinalNumber(o,{unit:"day"});// Tue
case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return n.day(r,{width:"short",context:"formatting"});// Tuesday
default:return n.day(r,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?o_.noon:0===o?o_.midnight:o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?o_.evening:o>=12?o_.afternoon:o>=4?o_.morning:o_.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return oP.h(e,t)},// Hour [0-23]
H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):oP.H(e,t)},// Hour [0-11]
K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):rI(r,t.length)},// Hour [1-24]
k:function(e,t,n){var r=e.getUTCHours();return(0===r&&(r=24),"ko"===t)?n.ordinalNumber(r,{unit:"hour"}):rI(r,t.length)},// Minute
m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):oP.m(e,t)},// Second
s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):oP.s(e,t)},// Fraction of second
S:function(e,t){return oP.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){// Hours and optional minutes
case"X":return oR(o);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":// Hours and minutes without `:` delimiter
return oO(o);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
default:return oO(o,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return oR(o);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":// Hours and minutes without `:` delimiter
return oO(o);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
default:return oO(o,":")}},// Timezone (GMT)
O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+oN(o,":");// Long
default:return"GMT"+oO(o,":")}},// Timezone (specific non-location)
z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+oN(o,":");// Long
default:return"GMT"+oO(o,":")}},// Seconds timestamp
t:function(e,t,n,r){return rI(Math.floor((r._originalDate||e).getTime()/1e3),t.length)},// Milliseconds timestamp
T:function(e,t,n,r){return rI((r._originalDate||e).getTime(),t.length)}},oM=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},oj=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},oI={p:oj,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],o=r[1],i=r[2];if(!i)return oM(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",oM(o,t)).replace("{{time}}",oj(i,t))}},oD=["D","DD"],oz=["YY","YYYY"];function oL(e,t,n){if("YYYY"===e)throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var oF={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function oU(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var o$={date:oU({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:oU({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:oU({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},oW={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function oV(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var a=e.defaultWidth,l=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[a]}// @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return r[e.argumentCallback?e.argumentCallback(t):t]}}function oH(e){return function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;var l=a[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(s,function(e){return e.test(l)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,function(e){return e.test(l)});return n=e.valueCallback?e.valueCallback(u):u,{value:n=r.valueCallback?r.valueCallback(n):n,rest:t.slice(l.length)}}}var oG={code:"en-US",formatDistance:function(e,t,n){var r,o=oF[e];return(r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:o$,formatRelative:function(e,t,n,r){return oW[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:oV({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:oV({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:oV({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:oV({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:oV({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(cL={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(cL.matchPattern);if(!n)return null;var r=n[0],o=e.match(cL.parsePattern);if(!o)return null;var i=cL.valueCallback?cL.valueCallback(o[0]):o[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(r.length)}}),era:oH({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:oH({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:oH({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:oH({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:oH({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}},oY=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,oB=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oq=/^'([^]*?)'?$/,oK=/''/g,oQ=/[a-zA-Z]/;/**
 * lucide-react v0.288.0 - ISC
 */let oX=S("CheckCircle2",[["path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",key:"14v8dr"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),oJ=S("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),oZ=S("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),o0=S("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var o1=function({item:e}){return/*#__PURE__*/(0,g.jsxs)(rh,{className:"select-none mb-2 w-full flex flex-row text-center",variant:"outline",onClick://console.log(item);
function(){oc(rM(rz(e.date.toString())))},children:[/*#__PURE__*/(0,g.jsxs)("div",{className:"basis-1/3",children:["WON"==e.result&&/*#__PURE__*/(0,g.jsx)(oX,{size:28,color:"#7aa942"}),"LOST"==e.result&&/*#__PURE__*/(0,g.jsx)(o0,{size:28,color:"#da5252"}),"STARTED"==e.result&&/*#__PURE__*/(0,g.jsx)(oZ,{size:28,color:"#d5a553"}),"PENDING"==e.result&&/*#__PURE__*/(0,g.jsx)(oJ,{})]}),/*#__PURE__*/(0,g.jsx)("div",{className:"basis-1/3 text-center",children:/*#__PURE__*/(0,g.jsx)("p",{className:"font-sans uppercase sm:text-lg md:text-lg text-center",children:/*#__PURE__*/(0,g.jsxs)("b",{children:["#",e.id]})})}),/*#__PURE__*/(0,g.jsx)("div",{className:"basis-1/3 text-right",children:/*#__PURE__*/(0,g.jsx)("p",{className:"font-sans uppercase sm:text-xs md:text-xs text-right",children:function(e,t,n){rN(2,arguments);var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x=String(t),S=null!==(r=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:oE.locale)&&void 0!==r?r:oG,k=rP(null!==(i=null!==(a=null!==(l=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n?void 0:null===(u=n.locale)||void 0===u?void 0:null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==l?l:oE.firstWeekContainsDate)&&void 0!==a?a:null===(d=oE.locale)||void 0===d?void 0:null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);// Test if weekStartsOn is between 1 and 7 _and_ is not NaN
if(!(k>=1&&k<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=rP(null!==(p=null!==(h=null!==(m=null!==(g=null==n?void 0:n.weekStartsOn)&&void 0!==g?g:null==n?void 0:null===(v=n.locale)||void 0===v?void 0:null===(y=v.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==m?m:oE.weekStartsOn)&&void 0!==h?h:null===(b=oE.locale)||void 0===b?void 0:null===(w=b.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==p?p:0);// Test if weekStartsOn is between 0 and 6 _and_ is not NaN
if(!(E>=0&&E<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw RangeError("locale must contain localize property");if(!S.formatLong)throw RangeError("locale must contain formatLong property");var C=rR(e);if(!function(e){return rN(1,arguments),(!!function(e){return rN(1,arguments),e instanceof Date||"object"===r_(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)||"number"==typeof e)&&!isNaN(Number(rR(e)))}(C))throw RangeError("Invalid time value");// Convert the date in system timezone to the same date in UTC+00:00 timezone.
// This ensures that when UTC functions will be implemented, locales will be compatible with them.
// See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
var T=rA(C),P=function(e,t){return rN(2,arguments),function(e,t){rN(2,arguments);var n=rR(e).getTime(),r=rP(t);return new Date(n+r)}(e,-rP(t))}(C,T),_={firstWeekContainsDate:k,weekStartsOn:E,locale:S,_originalDate:C};return x.match(oB).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,oI[t])(e,S.formatLong):e}).join("").match(oY).map(function(r){// Replace two single quote characters with one single quote character
if("''"===r)return"'";var o,i=r[0];if("'"===i)return(o=r.match(oq))?o[1].replace(oK,"'"):r;var a=oA[i];if(a)return null!=n&&n.useAdditionalWeekYearTokens||-1===oz.indexOf(r)||oL(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||-1===oD.indexOf(r)||oL(r,t,String(e)),a(P,r,S.localize,_);if(i.match(oQ))throw RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r}).join("")}(rz(e.date),"PP")})})]})},b=(m("exYeM"),m("exYeM"));let o2=/*@__PURE__*/f(b).createContext();var o3=function({children:e}){let[t,n]=/*@__PURE__*/f(b).useState(oh),r=t[0].words.length,o=t.length;return/*#__PURE__*/(0,g.jsx)(o2.Provider,{value:{gameData:t,numCategories:o,categorySize:r},children:e})};let o4="gameState"+rD(ou(),{representation:"date"}),o5=e=>{localStorage.setItem(o4,JSON.stringify(e))},o6=()=>{o8();let e=localStorage.getItem(o4);return e?JSON.parse(e):null},o8=()=>{let e=localStorage.getItem("gameState");e&&(o5(JSON.parse(e)),localStorage.removeItem("gameState"))};function o9({gameData:e}){let t=e.length,n=[];for(let r=0;r<t;r++)e[r]?.words?n.push(e[r].words):n.push(e[r]);return n.flat()}function o7({gameData:e}){let t;t=e[0]?.words?e[0].words.length:e[0].length;let n=o9({gameData:e});return e1(t,e0(n))}let ie=(e,t)=>{let n;let r={},o=((n=[]).push("\uD83D\uDFE8"),n.push("\uD83D\uDFE9"),n.push("\uD83D\uDFE6"),n.push("\uD83D\uDFEA"),n),i=e.length,a=[];for(let t=0;t<i;t++){a.push(e[t].words);let n=e[t].difficulty;e[t].words.map(e=>r[e]=n)}let l=[];for(let e=0;e<t.length;e++){let n=t[e],i=n.map(e=>r[e]),a=i.map(e=>{switch(e){case 1:return o[0];case 2:return o[1];case 3:return o[2];case 4:return o[3]}}).join("");l.push(a)}return`${l.join("\n")}`},it=/*@__PURE__*/f(b).createContext();var ir=function({children:e}){let{gameData:t}=/*@__PURE__*/f(b).useContext(o2),[n,r]=/*@__PURE__*/f(b).useState([]),[o,i]=/*@__PURE__*/f(b).useState(!1),[a,l]=/*@__PURE__*/f(b).useState(()=>{let e=o6();return(// console.log("checking game state!", {
//   loadedState: loadedState,
//   gd1: gameData,
//   gd2: loadedState?.gameData,
// });
!function({gd1:e,gd2:t}){if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.lengthl;n++)if(!e3(e.words[n],t.words[n]))return!1;return!0}({gd1:t,gd2:e?.gameData})||!function({gameData:e,submittedGuesses:t}){let n=o9({gameData:e}),r=o9({gameData:t});if(0===t.length)return!1;let o=r.every(e=>n.includes(e));return o}({gameData:t,submittedGuesses:e?.submittedGuesses})?[]:(Array.isArray(e?.submittedGuesses)&&r(e.submittedGuesses),Array.isArray(e?.solvedGameData))?e.solvedGameData:[])}),[s,u]=/*@__PURE__*/f(b).useState(!1),[c,d]=/*@__PURE__*/f(b).useState(!1),[p,h]=/*@__PURE__*/f(b).useState([]),m=n.length-a.length;return /*@__PURE__*/f(b).useEffect(()=>{a.length===t.length&&(u(!0),d(!0)),o||o5({submittedGuesses:n,solvedGameData:a,gameData:t})},[a]),/*@__PURE__*/f(b).useEffect(()=>{m>=8&&(u(!0),d(!1)),o||o5({submittedGuesses:n,solvedGameData:a,gameData:t})},[n]),/*#__PURE__*/(0,g.jsx)(it.Provider,{value:{isGameOver:s,isGameWon:c,numMistakesUsed:m,solvedGameData:a,setSolvedGameData:l,submittedGuesses:n,setSubmittedGuesses:r,guessCandidate:p,setGuessCandidate:h,isForFunsies:o,setIsForFunsies:i,setIsGameOver:u,setIsGameWon:d},children:e})},io=function(){let[e,t]=/*@__PURE__*/f(b).useState(of()),{submittedGuesses:n}=/*@__PURE__*/f(b).useContext(it);return /*@__PURE__*/f(b).useEffect(()=>{setTimeout(()=>{t(of()),console.log(e)},1e3)},[n]),/*#__PURE__*/(0,g.jsx)(rC,{title:"",trigger:/*#__PURE__*/(0,g.jsx)(oy,{className:"mr-4"}),initiallyOpen:!1,actionButtonText:"Back",children:/*#__PURE__*/(0,g.jsxs)("div",{children:[/*#__PURE__*/(0,g.jsx)("h3",{className:"text-xl text-center mb-4",children:"ARCHIVE"}),/*#__PURE__*/(0,g.jsx)("div",{className:"flex-row max-h-96 scroll-x overflow-auto scroll-smooth",children:e&&e.map(e=>/*#__PURE__*/(0,g.jsx)(o1,{item:e}))})]})})},ii=function(){return/*#__PURE__*/(0,g.jsxs)(g.Fragment,{children:[/*#__PURE__*/(0,g.jsx)("header",{children:/*#__PURE__*/(0,g.jsx)("h1",{className:"font-space-mono",children:"Jester Connections"})}),/*#__PURE__*/(0,g.jsxs)("header",{className:"justify-end p-2",children:[/*#__PURE__*/(0,g.jsx)(io,{}),/*#__PURE__*/(0,g.jsx)(rT,{})]})]})},b=(m("exYeM"),m("exYeM"),m("exYeM")),ia=function({word:e,fullCandidateSize:t}){let{guessCandidate:n,setGuessCandidate:r}=/*@__PURE__*/f(b).useContext(it),[o,i]=/*@__PURE__*/f(b).useState(!!n.includes(e)),a=n.length==t;return /*@__PURE__*/f(b).useEffect(()=>{i(!!n.includes(e))},[n]),/*#__PURE__*/(0,g.jsx)(ox,{className:"_9XSUmq_growShrink select-none",variant:"outline",pressed:o,onClick:function(){if(o){// remove from candidateGuess
let t=n.filter(t=>t!==e);r(t),// set state to *not* selected
i(!1)}else a||(// add to candidateGuess array
r([...n,e]),// set state to *selected*
i(!0))},children:/*#__PURE__*/(0,g.jsx)("p",{style:{fontSize://const fontSizeByWordLength = 9characters works with 0.6rem
function(e){let t=e.length,n=1;return t>7?(n-=.1*(t-7),n=Math.max(.5,n),`${n}em`):null}(e)},className:"font-space-mono uppercase sm:text-xs md:text-xs",children:e})})},b=m("exYeM"),il=Object.defineProperty,is={};((e,t)=>{for(var n in t)il(e,n,{get:t[n],enumerable:!0})})(is,{assign:()=>i$,colors:()=>iL,createStringInterpolator:()=>c$,skipAnimation:()=>iF,to:()=>cW,willAdvance:()=>iU});// ../rafz/dist/react-spring_rafz.modern.mjs
var iu=iT(),ic=e=>iS(e,iu),id=iT();ic.write=e=>iS(e,id);var ip=iT();ic.onStart=e=>iS(e,ip);var ih=iT();ic.onFrame=e=>iS(e,ih);var im=iT();ic.onFinish=e=>iS(e,im);var ig=[];ic.setTimeout=(e,t)=>{let n=ic.now()+t,r=()=>{let e=ig.findIndex(e=>e.cancel==r);~e&&ig.splice(e,1),iw-=~e?1:0},o={time:n,handler:e,cancel:r};return ig.splice(iv(n),0,o),iw+=1,ik(),o};var iv=e=>~(~ig.findIndex(t=>t.time>e)||~ig.length);ic.cancel=e=>{ip.delete(e),ih.delete(e),im.delete(e),iu.delete(e),id.delete(e)},ic.sync=e=>{ix=!0,ic.batchedUpdates(e),ix=!1},ic.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ic.onStart(n)}return r.handler=e,r.cancel=()=>{ip.delete(n),t=null},r};var iy="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ic.use=e=>iy=e,ic.now="undefined"!=typeof performance?()=>performance.now():Date.now,ic.batchedUpdates=e=>e(),ic.catch=console.error,ic.frameLoop="always",ic.advance=()=>{"demand"!==ic.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):iC()};var ib=-1,iw=0,ix=!1;function iS(e,t){ix?(t.delete(e),e(0)):(t.add(e),ik())}function ik(){ib<0&&(ib=0,"demand"!==ic.frameLoop&&iy(iE))}function iE(){~ib&&(iy(iE),ic.batchedUpdates(iC))}function iC(){let e=ib;ib=ic.now();let t=iv(ib);if(t&&(iP(ig.splice(0,t),e=>e.handler()),iw-=t),!iw){ib=-1;return}ip.flush(),iu.flush(e?Math.min(64,ib-e):16.667),ih.flush(),id.flush(),im.flush()}function iT(){let e=/* @__PURE__ */new Set,t=e;return{add(n){iw+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(iw-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=/* @__PURE__ */new Set,iw-=t.size,iP(t,t=>t(n)&&e.add(t)),iw+=e.size,t=e)}}}function iP(e,t){e.forEach(e=>{try{t(e)}catch(e){ic.catch(e)}})}// src/helpers.ts
function i_(){}var iN=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),iR={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function iO(e,t){if(iR.arr(e)){if(!iR.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var iA=(e,t)=>e.forEach(t);function iM(e,t,n){if(iR.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(let r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var ij=e=>iR.und(e)?[]:iR.arr(e)?e:[e];function iI(e,t){if(e.size){let n=Array.from(e);e.clear(),iA(n,t)}}var iD=(e,...t)=>iI(e,e=>e(...t)),iz=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),iL=null,iF=!1,iU=i_,i$=e=>{e.to&&(cW=e.to),e.now&&(ic.now=e.now),void 0!==e.colors&&(iL=e.colors),null!=e.skipAnimation&&(iF=e.skipAnimation),e.createStringInterpolator&&(c$=e.createStringInterpolator),e.requestAnimationFrame&&ic.use(e.requestAnimationFrame),e.batchedUpdates&&(ic.batchedUpdates=e.batchedUpdates),e.willAdvance&&(iU=e.willAdvance),e.frameLoop&&(ic.frameLoop=e.frameLoop)},iW=/* @__PURE__ */new Set,iV=[],iH=[],iG=0,iY={get idle(){return!iW.size&&!iV.length},/** Advance the given animation on every frame until idle. */start(e){iG>e.priority?(iW.add(e),ic.onStart(iB)):(iq(e),ic(iQ))},advance:/** Advance all animations by the given time. */iQ,/** Call this when an animation's priority changes. */sort(e){if(iG)ic.onFrame(()=>iY.sort(e));else{let t=iV.indexOf(e);~t&&(iV.splice(t,1),iK(e))}},/**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */clear(){iV=[],iW.clear()}};function iB(){iW.forEach(iq),iW.clear(),ic(iQ)}function iq(e){iV.includes(e)||iK(e)}function iK(e){iV.splice(function(e,t){let n=e.findIndex(t);return n<0?e.length:n}(iV,t=>t.priority>e.priority),0,e)}function iQ(e){let t=iH;for(let n=0;n<iV.length;n++){let r=iV[n];iG=r.priority,r.idle||(iU(r),r.advance(e),r.idle||t.push(r))}return iG=0,(iH=iV).length=0,(iV=t).length>0}// src/clamp.ts
var iX="[-+]?\\d*\\.?\\d+",iJ=iX+"%";function iZ(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var i0=RegExp("rgb"+iZ(iX,iX,iX)),i1=RegExp("rgba"+iZ(iX,iX,iX,iX)),i2=RegExp("hsl"+iZ(iX,iJ,iJ)),i3=RegExp("hsla"+iZ(iX,iJ,iJ,iX)),i4=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,i5=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,i6=/^#([0-9a-fA-F]{6})$/,i8=/^#([0-9a-fA-F]{8})$/;function i9(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function i7(e,t,n){let r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=i9(o,r,e+1/3),a=i9(o,r,e),l=i9(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*l)<<8}function ae(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function at(e){let t=parseFloat(e);return(t%360+360)%360/360}function an(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ar(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}// src/colorToRgba.ts
function ao(e){let t;let n="number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=i6.exec(e))?parseInt(t[1]+"ff",16)>>>0:iL&&void 0!==iL[e]?iL[e]:(t=i0.exec(e))?(ae(t[1])<<24|// r
ae(t[2])<<16|// g
ae(t[3])<<8|// b
255)>>>// a
0:(t=i1.exec(e))?(ae(t[1])<<24|// r
ae(t[2])<<16|// g
ae(t[3])<<8|// b
an(t[4]))>>>// a
0:(t=i4.exec(e))?parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
"ff",16)>>>0:(t=i8.exec(e))?parseInt(t[1],16)>>>0:(t=i5.exec(e))?parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
t[4]+t[4],16)>>>0:(t=i2.exec(e))?(255|i7(at(t[1]),ar(t[2]),ar(t[3])))>>>// a
0:(t=i3.exec(e))?(i7(at(t[1]),ar(t[2]),ar(t[3]))|an(t[4]))>>>// a
0:null;if(null===n)return e;n=n||0;let r=(4278190080&n)>>>24,o=(16711680&n)>>>16,i=(65280&n)>>>8,a=(255&n)/255;return`rgba(${r}, ${o}, ${i}, ${a})`}// src/createInterpolator.ts
var ai=(e,t,n)=>{if(iR.fun(e))return e;if(iR.arr(e))return ai({range:e,output:t,extrapolate:n});if(iR.str(e.output[0]))return c$(e);let r=e.output,o=e.range||[0,1],i=e.extrapolateLeft||e.extrapolate||"extend",a=e.extrapolateRight||e.extrapolate||"extend",l=e.easing||(e=>e);return t=>{let n=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(t,o);return function(e,t,n,r,o,i,a,l,s){let u=s?s(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===l)return u;"clamp"===l&&(u=n)}return r===o?r:t===n?e<=t?r:o:(t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t),u=i(u),r===-1/0?u=-u:o===1/0?u+=r:u=u*(o-r)+r,u)}(t,o[n],o[n+1],r[n],r[n+1],l,i,a,e.map)}},aa=Symbol.for("FluidValue.get"),al=Symbol.for("FluidValue.observers"),as=e=>!!(e&&e[aa]),au=e=>e&&e[aa]?e[aa]():e,ac=e=>e[al]||null;function ad(e,t){let n=e[al];n&&n.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var af=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ap(this,e)}},ap=(e,t)=>ag(e,aa,t);function ah(e,t){if(e[aa]){let n=e[al];n||ag(e,al,n=/* @__PURE__ */new Set),!n.has(t)&&(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function am(e,t){let n=e[al];if(n&&n.has(t)){let r=n.size-1;r?n.delete(t):e[al]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var ag=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),av=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ay=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ab=RegExp(`(${av.source})(%|[a-z]+)`,"i"),aw=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ax=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,aS=e=>{let[t,n]=ak(e);if(!t||iz())return e;let r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){let e=window.getComputedStyle(document.documentElement).getPropertyValue(n);if(e)return e}else if(n&&ax.test(n))return aS(n);else if(n)return n;return e},ak=e=>{let t=ax.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]},aE=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,aC=e=>{cV||(cV=iL?RegExp(`(${Object.keys(iL).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>au(e).replace(ax,aS).replace(ay,ao).replace(cV,ao)),n=t.map(e=>e.match(av).map(Number)),r=n[0].map((e,t)=>n.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})),o=r.map(t=>ai({...e,output:t}));return e=>{let n=!ab.test(t[0])&&t.find(e=>ab.test(e))?.replace(av,""),r=0;return t[0].replace(av,()=>`${o[r++](e)}${n||""}`).replace(aw,aE)}},aT="react-spring: ",aP=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${aT}once requires a function parameter`);return(...n)=>{t||(e(...n),t=!0)}},a_=aP(console.warn),aN=aP(console.warn);// src/isAnimatedString.ts
function aR(e){return iR.str(e)&&("#"==e[0]||/\d/.test(e)||// Do not identify a CSS variable as an AnimatedString if its SSR
!iz()&&ax.test(e)||e in(iL||{}))}var aO=iz()?b.useEffect:b.useLayoutEffect,aA=()=>{let e=(0,b.useRef)(!1);return aO(()=>(e.current=!0,()=>{e.current=!1}),[]),e};// src/hooks/useForceUpdate.ts
function aM(){let e=(0,b.useState)()[1],t=aA();return()=>{t.current&&e(Math.random())}}var aj=e=>(0,b.useEffect)(e,aI),aI=[];function aD(e){let t=(0,b.useRef)();return(0,b.useEffect)(()=>{t.current=e}),t.current}// src/Animated.ts
var b=(m("exYeM"),m("exYeM")),az=Symbol.for("Animated:node"),aL=e=>!!e&&e[az]===e,aF=e=>e&&e[az],aU=(e,t)=>iN(e,az,t),a$=e=>e&&e[az]&&e[az].getPayload(),aW=class{constructor(){aU(this,this)}/** Get every `AnimatedValue` used by this node. */getPayload(){return this.payload||[]}},aV=class extends aW{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,iR.num(this._value)&&(this.lastPosition=this._value)}/** @internal */static create(e){return new aV(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return iR.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,iR.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},aH=class extends aV{constructor(e){super(0),this._string=null,this._toString=ai({output:[e,e]})}/** @internal */static create(e){return new aH(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(iR.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ai({output:[this.getValue(),e]})),this._value=0,super.reset()}},aG={dependencies:null},aY=class extends aW{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return iM(this.source,(n,r)=>{aL(n)?t[r]=n.getValue(e):as(n)?t[r]=au(n):e||(t[r]=n)}),t}/** Replace the raw object data */setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&iA(this.payload,e=>e.reset())}/** Create a payload set. */_makePayload(e){if(e){let t=/* @__PURE__ */new Set;return iM(e,this._addToPayload,t),Array.from(t)}}/** Add to a payload set. */_addToPayload(e){aG.dependencies&&as(e)&&aG.dependencies.add(e);let t=a$(e);t&&iA(t,e=>this.add(e))}},aB=class extends aY{constructor(e){super(e)}/** @internal */static create(e){return new aB(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,n)=>t.setValue(e[n])).some(Boolean):(super.setValue(e.map(aq)),!0)}};function aq(e){let t=aR(e)?aH:aV;return t.create(e)}function aK(e){let t=aF(e);return t?t.constructor:iR.arr(e)?aB:aR(e)?aH:aV}var aQ=(e,t)=>{let n=// re-rendered on every animation frame.
!iR.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,b.forwardRef)((r,o)=>{let i=(0,b.useRef)(null),a=n&&// eslint-disable-next-line react-hooks/rules-of-hooks
(0,b.useCallback)(e=>{i.current=(o&&(iR.fun(o)?o(e):o.current=e),e)},[o]),[l,s]=function(e,t){let n=/* @__PURE__ */new Set;return aG.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new aY(e),aG.dependencies=null,[e,n]}(r,t),u=aM(),c=()=>{let e=i.current;if(n&&!e)return;let r=!!e&&t.applyAnimatedValues(e,l.getValue(!0));!1===r&&u()},d=new aX(c,s),f=(0,b.useRef)();aO(()=>(f.current=d,iA(s,e=>ah(e,d)),()=>{f.current&&(iA(f.current.deps,e=>am(e,f.current)),ic.cancel(f.current.update))})),(0,b.useEffect)(c,[]),aj(()=>()=>{let e=f.current;iA(e.deps,t=>am(t,e))});let p=t.getComponentProps(l.getValue());return /* @__PURE__ */b.createElement(e,{...p,ref:a})})},aX=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ic.write(this.update)}},aJ=Symbol.for("AnimatedComponent"),aZ=e=>iR.str(e)?e:e&&iR.str(e.displayName)?e.displayName:iR.fun(e)&&e.name||null;function a0(e,...t){return iR.fun(e)?e(...t):e}var a1=(e,t)=>!0===e||!!(t&&e&&(iR.fun(e)?e(t):ij(e).includes(t))),a2=(e,t)=>iR.obj(e)?t&&e[t]:e,a3=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,a4=e=>e,a5=(e,t=a4)=>{let n=a6;e.default&&!0!==e.default&&(n=Object.keys(e=e.default));let r={};for(let o of n){let n=t(e[o],o);iR.und(n)||(r[o]=n)}return r},a6=["config","onProps","onStart","onChange","onPause","onResume","onRest"],a8={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,// Transition props
items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,// Internal props
keys:1,callId:1,parentId:1};function a9(e){let t=function(e){let t={},n=0;if(iM(e,(e,r)=>{!a8[r]&&(t[r]=e,n++)}),n)return t}(e);if(t){let n={to:t};return iM(e,(e,r)=>r in t||(n[r]=e)),n}return{...e}}function a7(e){return e=au(e),iR.arr(e)?e.map(a7):aR(e)?is.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function le(e){return iR.fun(e)||iR.arr(e)&&iR.obj(e[0])}// src/AnimationConfig.ts
var lt={tension:170,friction:26,mass:1,damping:1,easing:e=>e,clamp:!1},ln=class{constructor(){/**
     * The initial velocity of one or more values.
     *
     * @default 0
     */this.velocity=0,Object.assign(this,lt)}};function lr(e,t){if(iR.und(t.decay)){let n=!iR.und(t.tension)||!iR.und(t.friction);!n&&iR.und(t.frequency)&&iR.und(t.damping)&&iR.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}// src/Animation.ts
var lo=[],li=class{constructor(){this.changed=!1,this.values=lo,this.toValues=null,this.fromValues=lo,this.config=new ln,this.immediate=!1}};function la(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise((a,l)=>{let s,u;let c=a1(n.cancel??r?.cancel,t);if(c)p();else{iR.und(n.pause)||(o.paused=a1(n.pause,t));let e=r?.pause;!0!==e&&(e=o.paused||a1(e,t)),s=a0(n.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){o.resumeQueue.add(f),o.timeouts.delete(u),u.cancel(),s=u.time-ic.now()}function f(){s>0&&!is.skipAnimation?(o.delayed=!0,u=ic.setTimeout(p,s),o.pauseQueue.add(d),o.timeouts.add(u)):p()}function p(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(u),e<=(o.cancelId||0)&&(c=!0);try{i.start({...n,callId:e,cancel:c},a)}catch(e){l(e)}}})}// src/AnimationResult.ts
var ll=(e,t)=>1==t.length?t[0]:t.some(e=>e.cancelled)?lc(e.get()):t.every(e=>e.noop)?ls(e.get()):lu(e.get(),t.every(e=>e.finished)),ls=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),lu=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),lc=e=>({value:e,cancelled:!0,finished:!1});// src/runAsync.ts
function ld(e,t,n,r){let{callId:o,parentId:i,onRest:a}=t,{asyncTo:l,promise:s}=n;return i||e!==l||t.reset?n.promise=(async()=>{let u,c,d;n.asyncId=o,n.asyncTo=e;let f=a5(t,(e,t)=>"onRest"===t?void 0:e),p=new Promise((e,t)=>(u=e,c=t)),h=e=>{let t=o<=(n.cancelId||0)&&lc(r)||// The async `to` prop was replaced.
o!==n.asyncId&&lu(r,!1);if(t)throw e.result=t,c(e),e},m=(e,t)=>{let i=new lp,a=new lh;return(async()=>{if(is.skipAnimation)throw lf(n),a.result=lu(r,!1),c(a),a;h(i);let l=iR.obj(e)?{...e}:{...t,to:e};l.parentId=o,iM(f,(e,t)=>{iR.und(l[t])&&(l[t]=e)});let s=await r.start(l);return h(i),n.paused&&await new Promise(e=>{n.resumeQueue.add(e)}),s})()};if(is.skipAnimation)return lf(n),lu(r,!1);try{let t;t=iR.arr(e)?(async e=>{for(let t of e)await m(t)})(e):Promise.resolve(e(m,r.stop.bind(r))),await Promise.all([t.then(u),p]),d=lu(r.get(),!0,!1)}catch(e){if(e instanceof lp)d=e.result;else if(e instanceof lh)d=e.result;else throw e}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?l:void 0,n.promise=i?s:void 0)}return iR.fun(a)&&ic.batchedUpdates(()=>{a(d,r,r.item)}),d})():s}function lf(e,t){iI(e.timeouts,e=>e.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var lp=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},lh=class extends Error{constructor(){super("SkipAnimationSignal")}},lm=e=>e instanceof lv,lg=1,lv=class extends af{constructor(){super(...arguments),this.id=lg++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}/** Get the current value */get(){let e=aF(this);return e&&e.getValue()}/** Create a spring that maps our value to another value */to(...e){return is.to(this,e)}/** @deprecated Use the `to` method instead. */interpolate(...e){return a_(`${aT}The "interpolate" function is deprecated in v9 (use "to" instead)`),is.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}/** Called when the first child is added. */_attach(){}/** Called when the last child is removed. */_detach(){}/** Tell our children about our new value */_onChange(e,t=!1){ad(this,{type:"change",parent:this,value:e,idle:t})}/** Tell our children about our new priority */_onPriorityChange(e){this.idle||iY.sort(this),ad(this,{type:"priority",parent:this,priority:e})}},ly=Symbol.for("SpringPhase"),lb=e=>(1&e[ly])>0,lw=e=>(2&e[ly])>0,lx=e=>(4&e[ly])>0,lS=(e,t)=>t?e[ly]|=3:e[ly]&=-3,lk=(e,t)=>t?e[ly]|=4:e[ly]&=-5,lE=class extends lv{constructor(e,t){if(super(),/** The animation state */this.animation=new li,/** Some props have customizable default values */this.defaultProps={},/** The state for `runAsync` calls */this._state={paused:!1,delayed:!1,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set},/** The promise resolvers of pending `start` calls */this._pendingCalls=/* @__PURE__ */new Set,/** The counter for tracking `scheduleProps` calls */this._lastCallId=0,/** The last `scheduleProps` call that changed the `to` prop */this._lastToId=0,this._memoizedDuration=0,!iR.und(e)||!iR.und(t)){let n=iR.obj(e)?{...e}:{...t,from:e};iR.und(n.default)&&(n.default=!0),this.start(n)}}/** Equals true when not advancing on each frame. */get idle(){return!(lw(this)||this._state.asyncTo)||lx(this)}get goal(){return au(this.animation.to)}get velocity(){let e=aF(this);return e instanceof aV?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}/**
   * When true, this value has been animated at least once.
   */get hasAnimated(){return lb(this)}/**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */get isAnimating(){return lw(this)}/**
   * When true, all current and future animations are paused.
   */get isPaused(){return lx(this)}/**
   *
   *
   */get isDelayed(){return this._state.delayed}/** Advance the current animation by a number of milliseconds */advance(e){let t=!0,n=!1,r=this.animation,{toValues:o}=r,{config:i}=r,a=a$(r.to);!a&&as(r.to)&&(o=ij(au(r.to))),r.values.forEach((l,s)=>{if(l.done)return;let u=l.constructor==aH?1:a?a[s].lastPosition:o[s],c=r.immediate,d=u;if(!c){let t;if(d=l.lastPosition,i.tension<=0){l.done=!0;return}let n=l.elapsedTime+=e,o=r.fromValues[s],a=null!=l.v0?l.v0:l.v0=iR.arr(i.velocity)?i.velocity[s]:i.velocity,f=i.precision||(o==u?.005:Math.min(1,.001*Math.abs(u-o)));if(iR.und(i.duration)){if(i.decay){let e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*n);d=o+a/(1-e)*(1-r),c=Math.abs(l.lastPosition-d)<=f,t=a*r}else{t=null==l.lastVelocity?a:l.lastVelocity;let n=i.restVelocity||f/10,r=i.clamp?0:i.bounce,s=!iR.und(r),p=o==u?l.v0>0:o<u,h=Math.ceil(e/1);for(let e=0;e<h&&!(!(Math.abs(t)>n)&&(c=Math.abs(u-d)<=f));++e){s&&(d==u||d>u==p)&&(t=-t*r,d=u);let e=-(1e-6*i.tension)*(d-u),n=-(.001*i.friction)*t,o=(e+n)/i.mass;t+=1*o,d+=1*t}}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,l.durationProgress>0&&(l.elapsedTime=i.duration*l.durationProgress,n=l.elapsedTime+=e)),r=(r=(i.progress||0)+n/this._memoizedDuration)>1?1:r<0?0:r,l.durationProgress=r),t=((d=o+i.easing(r)*(u-o))-l.lastPosition)/e,c=1==r}l.lastVelocity=t,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[s].done&&(c=!1),c?l.done=!0:t=!1,l.setValue(d,i.round)&&(n=!0)});let l=aF(this),s=l.getValue();if(t){let e=au(r.to);(s!==e||n)&&!i.decay?(l.setValue(e),this._onChange(e)):n&&i.decay&&this._onChange(s),this._stop()}else n&&this._onChange(s)}/** Set the current value, while stopping the current animation */set(e){return ic.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}/**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */pause(){this._update({pause:!0})}/** Resume the animation if paused. */resume(){this._update({pause:!1})}/** Skip to the end of the current animation. */finish(){if(lw(this)){let{to:e,config:t}=this.animation;ic.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}/** Push props into the pending queue. */update(e){let t=this.queue||(this.queue=[]);return t.push(e),this}start(e,t){let n;return iR.und(e)?(n=this.queue||[],this.queue=[]):n=[iR.obj(e)?e:{...t,to:e}],Promise.all(n.map(e=>{let t=this._update(e);return t})).then(e=>ll(this,e))}/**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */stop(e){let{to:t}=this.animation;return this._focus(this.get()),lf(this._state,e&&this._lastCallId),ic.batchedUpdates(()=>this._stop(t,e)),this}/** Restart the animation. */reset(){this._update({reset:!0})}/** @internal */eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}/**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */_prepareNode(e){let t=this.key||"",{to:n,from:r}=e;(null==(n=iR.obj(n)?n[t]:n)||le(n))&&(n=void 0),null==(r=iR.obj(r)?r[t]:r)&&(r=void 0);let o={to:n,from:r};return lb(this)||(e.reverse&&([n,r]=[r,n]),r=au(r),iR.und(r)?aF(this)||this._set(n):this._set(r)),o}/** Every update is processed by this method before merging. */_update({...e},t){let{key:n,defaultProps:r}=this;e.default&&Object.assign(r,a5(e,(e,t)=>/^on/.test(t)?a2(e,n):e)),lR(this,e,"onProps"),lO(this,"onProps",e,this);let o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let i=this._state;return la(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{lx(this)||(lk(this,!0),iD(i.pauseQueue),lO(this,"onPause",lu(this,lC(this,this.animation.to)),this))},resume:()=>{lx(this)&&(lk(this,!1),lw(this)&&this._resume(),iD(i.resumeQueue),lO(this,"onResume",lu(this,lC(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(n=>{if(e.loop&&n.finished&&!(t&&n.noop)){let t=lT(e);if(t)return this._update(t,!0)}return n})}/** Merge props into the current animation */_merge(e,t,n){if(t.cancel)return this.stop(!0),n(lc(this));let r=!iR.und(e.to),o=!iR.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(lc(this));this._lastToId=t.callId}let{key:i,defaultProps:a,animation:l}=this,{to:s,from:u}=l,{to:c=s,from:d=u}=e;o&&!r&&(!t.default||iR.und(c))&&(c=d),t.reverse&&([c,d]=[d,c]);let f=!iO(d,u);f&&(l.from=d),d=au(d);let p=!iO(c,s);p&&this._focus(c);let h=le(t.to),{config:m}=l,{decay:g,velocity:v}=m;(r||o)&&(m.velocity=0),t.config&&!h&&function(e,t,n){for(let r in n&&(lr(n={...n},t),t={...n,...t}),lr(e,t),Object.assign(e,t),lt)null==e[r]&&(e[r]=lt[r]);let{frequency:r,damping:o}=e,{mass:i}=e;iR.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r)}(m,a0(t.config,i),t.config!==a.config?a0(a.config,i):void 0);let y=aF(this);if(!y||iR.und(c))return n(lu(this,!0));let b=iR.und(t.reset)?o&&!t.default:!iR.und(d)&&a1(t.reset,i),w=b?d:this.get(),x=a7(c),S=iR.num(x)||iR.arr(x)||aR(x),k=!h&&(!S||a1(a.immediate||t.immediate,i));if(p){let e=aK(c);if(e!==y.constructor){if(k)y=this._set(x);else throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`)}}let E=y.constructor,C=as(c),T=!1;if(!C){let e=b||!lb(this)&&f;(p||e)&&(C=!(T=iO(a7(w),x))),(iO(l.immediate,k)||k)&&iO(m.decay,g)&&iO(m.velocity,v)||(C=!0)}if(T&&lw(this)&&(l.changed&&!b?C=!0:C||this._stop(s)),!h&&((C||as(s))&&(l.values=y.getPayload(),l.toValues=as(c)?null:E==aH?[1]:ij(x)),l.immediate==k||(l.immediate=k,k||b||this._set(s)),C)){let{onRest:e}=l;iA(lN,e=>lR(this,t,e));let r=lu(this,lC(this,s));iD(this._pendingCalls,r),this._pendingCalls.add(n),l.changed&&ic.batchedUpdates(()=>{l.changed=!b,e?.(r,this),b?a0(a.onRest,r):l.onStart?.(r,this)})}b&&this._set(w),h?n(ld(t.to,t,this._state,this)):C?this._start():lw(this)&&!p?this._pendingCalls.add(n):n(ls(w))}/** Update the `animation.to` value, which might be a `FluidValue` */_focus(e){let t=this.animation;e!==t.to&&(ac(this)&&this._detach(),t.to=e,ac(this)&&this._attach())}_attach(){let e=0,{to:t}=this.animation;as(t)&&(ah(t,this),lm(t)&&(e=t.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;as(e)&&am(e,this)}/**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */_set(e,t=!0){let n=au(e);if(!iR.und(n)){let e=aF(this);if(!e||!iO(n,e.getValue())){let r=aK(n);e&&e.constructor==r?e.setValue(n):aU(this,r.create(n)),e&&ic.batchedUpdates(()=>{this._onChange(n,t)})}}return aF(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,lO(this,"onStart",lu(this,lC(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),a0(this.animation.onChange,e,this)),a0(this.defaultProps.onChange,e,this),super._onChange(e,t)}// This method resets the animation state (even if already animating) to
// ensure the latest from/to range is used, and it also ensures this spring
// is added to the frameloop.
_start(){let e=this.animation;aF(this).reset(au(e.to)),e.immediate||(e.fromValues=e.values.map(e=>e.lastPosition)),lw(this)||(lS(this,!0),lx(this)||this._resume())}_resume(){is.skipAnimation?this.finish():iY.start(this)}/**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */_stop(e,t){if(lw(this)){lS(this,!1);let n=this.animation;iA(n.values,e=>{e.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),ad(this,{type:"idle",parent:this});let r=t?lc(this.get()):lu(this.get(),lC(this,e??n.to));iD(this._pendingCalls,r),n.changed&&(n.changed=!1,lO(this,"onRest",r,this))}}};function lC(e,t){let n=a7(t),r=a7(e.get());return iO(r,n)}function lT(e,t=e.loop,n=e.to){let r=a0(t);if(r){let o=!0!==r&&a9(r),i=(o||e).reverse,a=!o||o.reset;return lP({...e,loop:t,// Avoid updating default props when looping.
default:!1,// Never loop the `pause` prop.
pause:void 0,// For the "reverse" prop to loop as expected, the "to" prop
// must be undefined. The "reverse" prop is ignored when the
// "to" prop is an array or function.
to:!i||le(n)?n:void 0,// Ignore the "from" prop except on reset.
from:a?e.from:void 0,reset:a,// The "loop" prop can return a "useSpring" props object to
// override any of the original props.
...o})}}function lP(e){let{to:t,from:n}=e=a9(e),r=/* @__PURE__ */new Set;return iR.obj(t)&&l_(t,r),iR.obj(n)&&l_(n,r),e.keys=r.size?Array.from(r):null,e}function l_(e,t){iM(e,(e,n)=>null!=e&&t.add(n))}var lN=["onStart","onRest","onChange","onPause","onResume"];function lR(e,t,n){e.animation[n]=t[n]!==a3(t,n)?a2(t[n],e.key):void 0}function lO(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var lA=["onStart","onChange","onRest"],lM=1,lj=class{constructor(e,t){this.id=lM++,/** The animated values */this.springs={},/** The queue of props passed to the `update` method. */this.queue=[],/** The counter for tracking `scheduleProps` calls */this._lastAsyncId=0,/** The values currently being animated */this._active=/* @__PURE__ */new Set,/** The values that changed recently */this._changed=/* @__PURE__ */new Set,/** Equals false when `onStart` listeners can be called */this._started=!1,/** State used by the `runAsync` function */this._state={paused:!1,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set},/** The event queues that are flushed once per frame maximum */this._events={onStart:/* @__PURE__ */new Map,onChange:/* @__PURE__ */new Map,onRest:/* @__PURE__ */new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}/**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}/** Get the current values of our springs */get(){let e={};return this.each((t,n)=>e[n]=t.get()),e}/** Set the current values without animating. */set(e){for(let t in e){let n=e[t];iR.und(n)||this.springs[t].set(n)}}/** Push an update onto the queue of each value. */update(e){return e&&this.queue.push(lP(e)),this}/**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */start(e){let{queue:t}=this;return(e?t=ij(e).map(lP):this.queue=[],this._flush)?this._flush(this,t):(l$(this,t),lI(this,t))}/** @internal */stop(e,t){if(!!e!==e&&(t=e),t){let n=this.springs;iA(ij(t),t=>n[t].stop(!!e))}else lf(this._state,this._lastAsyncId),this.each(t=>t.stop(!!e));return this}/** Freeze the active animation in time */pause(e){if(iR.und(e))this.start({pause:!0});else{let t=this.springs;iA(ij(e),e=>t[e].pause())}return this}/** Resume the animation if paused. */resume(e){if(iR.und(e))this.start({pause:!1});else{let t=this.springs;iA(ij(e),e=>t[e].resume())}return this}/** Call a function once per spring value */each(e){iM(this.springs,e)}/** @internal Called at the end of every animation frame */_onFrame(){let{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,iI(e,([e,t])=>{t.value=this.get(),e(t,this,this._item)}));let i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&iI(t,([e,t])=>{t.value=a,e(t,this,this._item)}),i&&(this._started=!1,iI(n,([e,t])=>{t.value=a,e(t,this,this._item)}))}/** @internal */eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ic.onFrame(this._onFrame)}};function lI(e,t){return Promise.all(t.map(t=>lD(e,t))).then(t=>ll(e,t))}async function lD(e,t,n){let{keys:r,to:o,from:i,loop:a,onRest:l,onResolve:s}=t,u=iR.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);let c=iR.arr(o)||iR.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):iA(lA,n=>{let r=t[n];if(iR.fun(r)){let o=e._events[n];t[n]=({finished:e,cancelled:t})=>{let n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}});let d=e._state;!d.paused===t.pause?(d.paused=t.pause,iD(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);let f=(r||Object.keys(e.springs)).map(n=>e.springs[n].start(t)),p=!0===t.cancel||!0===a3(t,"cancel");(c||p&&d.asyncId)&&f.push(la(++e._lastAsyncId,{props:t,state:d,actions:{pause:i_,resume:i_,start(t,n){p?(lf(d,e._lastAsyncId),n(lc(e))):(t.onRest=l,n(ld(c,t,d,e)))}}})),d.paused&&await new Promise(e=>{d.resumeQueue.add(e)});let h=ll(e,await Promise.all(f));if(a&&h.finished&&!(n&&h.noop)){let n=lT(t,a,o);if(n)return l$(e,[n]),lD(e,n,!0)}return s&&ic.batchedUpdates(()=>s(h,e,e.item)),h}function lz(e,t){let n={...e.springs};return t&&iA(ij(t),e=>{iR.und(e.keys)&&(e=lP(e)),iR.obj(e.to)||(e={...e,to:void 0}),lU(n,e,e=>lF(e))}),lL(e,n),n}function lL(e,t){iM(t,(t,n)=>{e.springs[n]||(e.springs[n]=t,ah(t,e))})}function lF(e,t){let n=new lE;return n.key=e,t&&ah(n,t),n}function lU(e,t,n){t.keys&&iA(t.keys,r=>{let o=e[r]||(e[r]=n(r));o._prepareNode(t)})}function l$(e,t){iA(t,t=>{lU(e.springs,t,t=>lF(t,e))})}var lW=({children:e,...t})=>{let n=(0,b.useContext)(lV),r=t.pause||!!n.pause,o=t.immediate||!!n.immediate;t=function(e,t){let[n]=(0,b.useState)(()=>({inputs:t,result:e()})),r=(0,b.useRef)(),o=r.current,i=o;if(i){let n=!!(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs));n||(i={inputs:t,result:e()})}else i=n;return(0,b.useEffect)(()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)},[i]),i.result}(()=>({pause:r,immediate:o}),[r,o]);let{Provider:i}=lV;return /* @__PURE__ */b.createElement(i,{value:t},e)},lV=(Object.assign(lW,b.createContext({})),lW.Provider._context=lW,lW.Consumer._context=lW,lW);lW.Provider=lV.Provider,lW.Consumer=lV.Consumer;var lH=()=>{let e=[],t=function(t){aN(`${aT}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);let r=[];return iA(e,(e,o)=>{if(iR.und(t))r.push(e.start());else{let i=n(t,e,o);i&&r.push(e.start(i))}}),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){let n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return iA(e,e=>e.pause(...arguments)),this},t.resume=function(){return iA(e,e=>e.resume(...arguments)),this},t.set=function(t){iA(e,(e,n)=>{let r=iR.fun(t)?t(n,e):t;r&&e.set(r)})},t.start=function(t){let n=[];return iA(e,(e,r)=>{if(iR.und(t))n.push(e.start());else{let o=this._getProps(t,e,r);o&&n.push(e.start(o))}}),n},t.stop=function(){return iA(e,e=>e.stop(...arguments)),this},t.update=function(t){return iA(e,(e,n)=>e.update(this._getProps(t,e,n))),this};let n=function(e,t,n){return iR.fun(e)?e(n,t):e};return t._getProps=n,t},lG=class extends lv{constructor(e,t){super(),this.source=e,/** Equals false when in the frameloop */this.idle=!0,/** The inputs which are currently animating */this._active=/* @__PURE__ */new Set,this.calc=ai(...t);let n=this._get(),r=aK(n);aU(this,r.create(n))}advance(e){let t=this._get(),n=this.get();iO(t,n)||(aF(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&lB(this._active)&&lq(this)}_get(){let e=iR.arr(this.source)?this.source.map(au):ij(au(this.source));return this.calc(...e)}_start(){this.idle&&!lB(this._active)&&(this.idle=!1,iA(a$(this),e=>{e.done=!1}),is.skipAnimation?(ic.batchedUpdates(()=>this.advance()),lq(this)):iY.start(this))}// Observe our sources only when we're observed.
_attach(){let e=1;iA(ij(this.source),t=>{as(t)&&ah(t,this),lm(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}// Stop observing our sources once we have no observers.
_detach(){iA(ij(this.source),e=>{as(e)&&am(e,this)}),this._active.clear(),lq(this)}/** @internal */eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ij(this.source).reduce((e,t)=>Math.max(e,(lm(t)?t.priority:0)+1),0))}};function lY(e){return!1!==e.idle}function lB(e){return!e.size||Array.from(e).every(lY)}function lq(e){e.idle||(e.idle=!0,iA(a$(e),e=>{e.done=!0}),ad(e,{type:"idle",parent:e}))}is.assign({createStringInterpolator:aC,to:(e,t)=>new lG(e,t)}),iY.advance;// src/applyAnimatedValues.ts
var lK=/^--/,lQ={},lX={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lJ=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),lZ=["Webkit","Ms","Moz","O"];lX=Object.keys(lX).reduce((e,t)=>(lZ.forEach(n=>e[lJ(n,t)]=e[t]),e),lX);var l0=/^(matrix|translate|scale|rotate|skew)/,l1=/^(translate)/,l2=/^(rotate|skew)/,l3=(e,t)=>iR.num(e)&&0!==e?e+t:e,l4=(e,t)=>iR.arr(e)?e.every(e=>l4(e,t)):iR.num(e)?e===t:parseFloat(e)===t,l5=class extends aY{constructor({x:e,y:t,z:n,...r}){let o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push(e=>[`translate3d(${e.map(e=>l3(e,"px")).join(",")})`,// prettier-ignore
    l4(e,0)])),iM(r,(e,t)=>{if("transform"===t)o.push([e||""]),i.push(e=>[e,""===e]);else if(l0.test(t)){if(delete r[t],iR.und(e))return;let n=l1.test(t)?"px":l2.test(t)?"deg":"";o.push(ij(e)),i.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${l3(o,n)})`,l4(o,0)]:e=>[`${t}(${e.map(e=>l3(e,n)).join(",")})`,l4(e,t.startsWith("scale")?1:0)])}}),o.length&&(r.transform=new l6(o,i)),super(r)}},l6=class extends af{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return iA(this.inputs,(n,r)=>{let o=au(n[0]),[i,a]=this.transforms[r](iR.arr(o)?o:n.map(au));e+=" "+i,t=t&&a}),t?"none":e}// Start observing our inputs once we have an observer.
observerAdded(e){1==e&&iA(this.inputs,e=>iA(e,e=>as(e)&&ah(e,this)))}// Stop observing our inputs once we have no observers.
observerRemoved(e){0==e&&iA(this.inputs,e=>iA(e,e=>as(e)&&am(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),ad(this,e)}};is.assign({batchedUpdates:v.unstable_batchedUpdates,createStringInterpolator:aC,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var l8=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new aY(e),getComponentProps:r=e=>e}={})=>{let o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{let t=aZ(e)||"Anonymous";return(e=iR.str(e)?i[e]||(i[e]=aQ(e,o)):e[aJ]||(e[aJ]=aQ(e,o))).displayName=`Animated(${t})`,e};return iM(e,(t,n)=>{iR.arr(e)&&(n=aZ(t)),i[n]=i(t)}),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr",// SVG
"circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:o,scrollTop:i,scrollLeft:a,viewBox:l,...s}=t,u=Object.values(s),c=Object.keys(s).map(t=>n||e.hasAttribute(t)?t:lQ[t]||(lQ[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let t in void 0!==o&&(e.textContent=o),r)if(r.hasOwnProperty(t)){var d;let n=null==(d=r[t])||"boolean"==typeof d||""===d?"":"number"!=typeof d||0===d||lK.test(t)||lX.hasOwnProperty(t)&&lX[t]?(""+d).trim():d+"px";lK.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach((t,n)=>{e.setAttribute(t,u[n])}),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new l5(e),// eslint-disable-next-line @typescript-eslint/no-unused-vars
getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}).animated,b=(m("exYeM"),m("exYeM"),m("exYeM"));let l9=["top","right","bottom","left"],l7=Math.min,se=Math.max,st=Math.round,sn=Math.floor,sr=e=>({x:e,y:e}),so={left:"right",right:"left",bottom:"top",top:"bottom"},si={start:"end",end:"start"};function sa(e,t){return"function"==typeof e?e(t):e}function sl(e){return e.split("-")[0]}function ss(e){return e.split("-")[1]}function su(e){return"x"===e?"y":"x"}function sc(e){return"y"===e?"height":"width"}function sd(e){return["top","bottom"].includes(sl(e))?"y":"x"}function sf(e){return e.replace(/start|end/g,e=>si[e])}function sp(e){return e.replace(/left|right|bottom|top/g,e=>so[e])}function sh(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function sm(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function sg(e,t,n){let r,{reference:o,floating:i}=e,a=sd(t),l=su(sd(t)),s=sc(l),u=sl(t),c="y"===a,d=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[s]/2-i[s]/2;switch(u){case"top":r={x:d,y:o.y-i.height};break;case"bottom":r={x:d,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:f};break;case"left":r={x:o.x-i.width,y:f};break;default:r={x:o.x,y:o.y}}switch(ss(t)){case"start":r[l]-=p*(n&&c?-1:1);break;case"end":r[l]+=p*(n&&c?-1:1)}return r}/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */let sv=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await (null==a.isRTL?void 0:a.isRTL(t)),u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:d}=sg(u,r,s),f=r,p={},h=0;for(let n=0;n<l.length;n++){let{name:i,fn:m}=l[n],{x:g,y:v,data:y,reset:b}=await m({x:c,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:u,platform:a,elements:{reference:e,floating:t}});if(c=null!=g?g:c,d=null!=v?v:d,p={...p,[i]:{...p[i],...y}},b&&h<=50){h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(u=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),{x:c,y:d}=sg(u,f,s)),n=-1;continue}}return{x:c,y:d,placement:f,strategy:o,middlewareData:p}};/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */async function sy(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=sa(t,e),h=sh(p),m=l[f?"floating"===d?"reference":"floating":d],g=sm(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:s})),v="floating"===d?{...a.floating,x:r,y:o}:a.reference,y=await (null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await (null==i.isElement?void 0:i.isElement(y))&&await (null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=sm(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:s}):v);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */let sb=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:a,elements:l,middlewareData:s}=t,{element:u,padding:c=0}=sa(e,t)||{};if(null==u)return{};let d=sh(c),f={x:n,y:r},p=su(sd(o)),h=sc(p),m=await a.getDimensions(u),g="y"===p,v=g?"clientHeight":"clientWidth",y=i.reference[h]+i.reference[p]-f[p]-i.floating[h],b=f[p]-i.reference[p],w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(u)),x=w?w[v]:0;// DOM platform can return `window` as the `offsetParent`.
    x&&await (null==a.isElement?void 0:a.isElement(w))||(x=l.floating[v]||i.floating[h]);// If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    let S=x/2-m[h]/2-1,k=l7(d[g?"top":"left"],S),E=l7(d[g?"bottom":"right"],S),C=x-m[h]-E,T=x/2-m[h]/2+(y/2-b/2),P=se(k,l7(T,C)),_=!s.arrow&&null!=ss(o)&&T!=P&&i.reference[h]/2-(T<k?k:E)-m[h]/2<0,N=_?T<k?T-k:T-C:0;return{[p]:f[p]+N,data:{[p]:P,centerOffset:T-P-N,..._&&{alignmentOffset:N}},reset:_}}});function sw(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function sx(e){return l9.some(t=>e[t]>=0)}// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function sS(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),a=sl(n),l=ss(n),s="y"===sd(n),u=["left","top"].includes(a)?-1:1,c=i&&s?-1:1,d=sa(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof h&&(p="end"===l?-1*h:h),s?{x:p*c,y:f*u}:{x:f*u,y:p*c}}function sk(e){return sT(e)?(e.nodeName||"").toLowerCase():"#document"}function sE(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function sC(e){var t;return null==(t=(sT(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function sT(e){return e instanceof Node||e instanceof sE(e).Node}function sP(e){return e instanceof Element||e instanceof sE(e).Element}function s_(e){return e instanceof HTMLElement||e instanceof sE(e).HTMLElement}function sN(e){return(// Browsers without `ShadowRoot` support.
"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof sE(e).ShadowRoot))}function sR(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=sj(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function sO(e){let t=sA(),n=sj(e);// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function sA(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function sM(e){return["html","body","#document"].includes(sk(e))}function sj(e){return sE(e).getComputedStyle(e)}function sI(e){return sP(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function sD(e){if("html"===sk(e))return e;let t=e.assignedSlot||// DOM Element detected.
e.parentNode||// ShadowRoot detected.
sN(e)&&e.host||// Fallback.
sC(e);return sN(t)?t.host:t}function sz(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=sD(t);return sM(n)?t.ownerDocument?t.ownerDocument.body:t.body:s_(n)&&sR(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=sE(o);return i?t.concat(a,a.visualViewport||[],sR(o)?o:[],a.frameElement&&n?sz(a.frameElement):[]):t.concat(o,sz(o,[],n))}function sL(e){let t=sj(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=s_(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=st(n)!==i||st(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function sF(e){return sP(e)?e:e.contextElement}function sU(e){let t=sF(e);if(!s_(t))return sr(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=sL(t),a=(i?st(n.width):n.width)/r,l=(i?st(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let s$=sr(0);function sW(e){let t=sE(e);return sA()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:s$}function sV(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),a=sF(e),l=sr(1);t&&(r?sP(r)&&(l=sU(r)):l=sU(e));let s=(void 0===(o=n)&&(o=!1),r&&(!o||r===sE(a))&&o)?sW(a):sr(0),u=(i.left+s.x)/l.x,c=(i.top+s.y)/l.y,d=i.width/l.x,f=i.height/l.y;if(a){let e=sE(a),t=r&&sP(r)?sE(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=sU(n),t=n.getBoundingClientRect(),r=sj(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;u*=e.x,c*=e.y,d*=e.x,f*=e.y,u+=o,c+=i,n=sE(n).frameElement}}return sm({width:d,height:f,x:u,y:c})}function sH(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
return sV(sC(e)).left+sI(e).scrollLeft}function sG(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=sE(e),r=sC(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;let e=sA();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function(e){let t=sC(e),n=sI(e),r=e.ownerDocument.body,o=se(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=se(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+sH(e),l=-n.scrollTop;return"rtl"===sj(r).direction&&(a+=se(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(sC(e));else if(sP(t))r=// Returns the inner client rect, subtracting scrollbars if present.
function(e,t){let n=sV(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=s_(e)?sU(e):sr(1),a=e.clientWidth*i.x,l=e.clientHeight*i.y,s=o*i.x,u=r*i.y;return{width:a,height:l,x:s,y:u}}(t,n);else{let n=sW(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return sm(r)}function sY(e,t){return s_(e)&&"fixed"!==sj(e).position?t?t(e):e.offsetParent:null}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function sB(e,t){let n=sE(e);if(!s_(e))return n;let r=sY(e,t);for(;r&&["table","td","th"].includes(sk(r))&&"static"===sj(r).position;)r=sY(r,t);return r&&("html"===sk(r)||"body"===sk(r)&&"static"===sj(r).position&&!sO(r))?n:r||function(e){let t=sD(e);for(;s_(t)&&!sM(t);){if(sO(t))return t;t=sD(t)}return null}(e)||n}let sq=async function(e){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||sB,i=this.getDimensions;return{reference:function(e,t,n){let r=s_(t),o=sC(t),i="fixed"===n,a=sV(e,!0,i,t),l={scrollLeft:0,scrollTop:0},s=sr(0);if(r||!r&&!i){if(("body"!==sk(t)||sR(o))&&(l=sI(t)),r){let e=sV(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=sH(o))}return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},sK={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=s_(n),i=sC(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},l=sr(1),s=sr(0);if((o||!o&&"fixed"!==r)&&(("body"!==sk(n)||sR(i))&&(a=sI(n)),s_(n))){let e=sV(n);l=sU(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+s.x,y:t.y*l.y-a.scrollTop*l.y+s.y}},getDocumentElement:sC,getClippingRect:// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i="clippingAncestors"===n?// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function(e,t){let n=t.get(e);if(n)return n;let r=sz(e,[],!1).filter(e=>sP(e)&&"body"!==sk(e)),o=null,i="fixed"===sj(e).position,a=i?sD(e):e;// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
for(;sP(a)&&!sM(a);){let t=sj(a),n=sO(a);n||"fixed"!==t.position||(o=null);let l=i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||sR(a)&&!n&&function e(t,n){let r=sD(t);return!(r===n||!sP(r)||sM(r))&&("fixed"===sj(r).position||e(r,n))}(e,a);l?r=r.filter(e=>e!==a):o=t,a=sD(a)}return t.set(e,r),r}(t,this._c):[].concat(n),a=[...i,r],l=a[0],s=a.reduce((e,n)=>{let r=sG(t,n,o);return e.top=se(r.top,e.top),e.right=l7(r.right,e.right),e.bottom=l7(r.bottom,e.bottom),e.left=se(r.left,e.left),e},sG(t,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:sB,getElementRects:sq,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return sL(e)},getScale:sU,isElement:sP,isRTL:function(e){return"rtl"===sj(e).direction}},sQ=(e,t,n)=>{// This caches the expensive `getClippingElementAncestors` function so that
// multiple lifecycle resets re-use the same result. It only lives for a
// single call. If other functions become expensive, we can add them as well.
let r=new Map,o={platform:sK,...n},i={...o.platform,_c:r};return sv(e,t,{...o,platform:i})};var b=m("exYeM");/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */let sX=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;if(n&&({}).hasOwnProperty.call(n,"current")){if(null!=n.current)return sb({element:n.current,padding:r}).fn(t)}else if(n)return sb({element:n,padding:r}).fn(t);return{}}});var sJ="undefined"!=typeof document?b.useLayoutEffect:b.useEffect;// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function sZ(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!sZ(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!sZ(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function s0(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function s1(e,t){let n=s0(e);return Math.round(t*n)/n}function s2(e){let t=b.useRef(e);return sJ(()=>{t.current=e}),t}var b=m("exYeM");let s3=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return/*#__PURE__*/(0,b.createElement)(L.svg,E({},i,{ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:/*#__PURE__*/(0,b.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var b=m("exYeM");/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/let s4="Popper",[s5,s6]=T(s4),[s8,s9]=s5(s4),s7=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...o}=e,i=s9("PopperAnchor",n),a=(0,b.useRef)(null),l=_(t,a);return(0,b.useEffect)(()=>{// Consumer can anchor the popper to something that isn't
// a DOM node e.g. pointer position, so we override the
// `anchorRef` with their virtual ref in this case.
i.onAnchorChange((null==r?void 0:r.current)||a.current)}),r?null:/*#__PURE__*/(0,b.createElement)(L.div,E({},o,{ref:l}))}),ue="PopperContent",[ut,un]=s5(ue),ur=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{var n,r,o,i,a,l,s,u,c,d,f,p,h,m;let{__scopePopper:g,side:y="bottom",sideOffset:w=0,align:x="center",alignOffset:S=0,arrowPadding:k=0,avoidCollisions:C=!0,collisionBoundary:T=[],collisionPadding:P=0,sticky:N="partial",hideWhenDetached:R=!1,updatePositionStrategy:O="optimized",onPlaced:A,...M}=e,I=s9(ue,g),[D,z]=(0,b.useState)(null),F=_(t,e=>z(e)),[$,W]=(0,b.useState)(null),V=function(e){let[t,n]=(0,b.useState)(void 0);return j(()=>{if(e){// provide size as early as possible
n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;// iron out differences between browsers
r=t.inlineSize,o=t.blockSize}else // for browsers that don't support `borderBoxSize`
// we calculate it ourselves to get the correct border box.
r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}($),H=null!==(n=null==V?void 0:V.width)&&void 0!==n?n:0,G=null!==(r=null==V?void 0:V.height)&&void 0!==r?r:0,Y="number"==typeof P?P:{top:0,right:0,bottom:0,left:0,...P},B=Array.isArray(T)?T:[T],q=B.length>0,K={padding:Y,boundary:B.filter(ui),// with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
altBoundary:q},{refs:Q,floatingStyles:X,placement:J,isPositioned:Z,middlewareData:ee}=/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:s,open:u}=e,[c,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=b.useState(r);sZ(f,r)||p(r);let[h,m]=b.useState(null),[g,y]=b.useState(null),w=b.useCallback(e=>{e!=E.current&&(E.current=e,m(e))},[m]),x=b.useCallback(e=>{e!==C.current&&(C.current=e,y(e))},[y]),S=i||h,k=a||g,E=b.useRef(null),C=b.useRef(null),T=b.useRef(c),P=s2(s),_=s2(o),N=b.useCallback(()=>{if(!E.current||!C.current)return;let e={placement:t,strategy:n,middleware:f};_.current&&(e.platform=_.current),sQ(E.current,C.current,e).then(e=>{let t={...e,isPositioned:!0};R.current&&!sZ(T.current,t)&&(T.current=t,v.flushSync(()=>{d(t)}))})},[f,t,n,_]);sJ(()=>{!1===u&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[u]);let R=b.useRef(!1);sJ(()=>(R.current=!0,()=>{R.current=!1}),[]),sJ(()=>{if(S&&(E.current=S),k&&(C.current=k),S&&k){if(P.current)return P.current(S,k,N);N()}},[S,k,N,P]);let O=b.useMemo(()=>({reference:E,floating:C,setReference:w,setFloating:x}),[w,x]),A=b.useMemo(()=>({reference:S,floating:k}),[S,k]),M=b.useMemo(()=>{let e={position:n,left:0,top:0};if(!A.floating)return e;let t=s1(A.floating,c.x),r=s1(A.floating,c.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...s0(A.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,l,A.floating,c.x,c.y]);return b.useMemo(()=>({...c,update:N,refs:O,elements:A,floatingStyles:M}),[c,N,O,A,M])}({// default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
strategy:"fixed",placement:y+("center"!==x?"-"+x:""),whileElementsMounted:(...e)=>{let t=/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,c=sF(e),d=i||a?[...c?sz(c):[],...sz(t)]:[];d.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)});let f=c&&s?// https://samthor.au/2021/observing-dom/
function(e,t){let n,r=null,o=sC(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return!function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();let{left:u,top:c,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;let p=sn(c),h=sn(o.clientWidth-(u+d)),m=sn(o.clientHeight-(c+f)),g=sn(u),v={rootMargin:-p+"px "+-h+"px "+-m+"px "+-g+"px",threshold:se(0,l7(1,s))||1},y=!0;function b(e){let t=e[0].intersectionRatio;if(t!==s){if(!y)return a();t?a(!1,t):n=setTimeout(()=>{a(!1,1e-7)},100)}y=!1}// Older browsers don't support a `document` as the root and will throw an
// error.
try{r=new IntersectionObserver(b,{...v,// Handle <iframe>s
root:o.ownerDocument})}catch(e){r=new IntersectionObserver(b,v)}r.observe(e)}(!0),i}(c,n):null,p=-1,h=null;l&&(h=new ResizeObserver(e=>{let[r]=e;r&&r.target===c&&h&&(// Prevent update loops when using the `size` middleware.
// https://github.com/floating-ui/floating-ui/issues/1740
h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{h&&h.observe(t)})),n()}),c&&!u&&h.observe(c),h.observe(t));let m=u?sV(e):null;return u&&function t(){let r=sV(e);m&&(r.x!==m.x||r.y!==m.y||r.width!==m.width||r.height!==m.height)&&n(),m=r,o=requestAnimationFrame(t)}(),n(),()=>{d.forEach(e=>{i&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)}),f&&f(),h&&h.disconnect(),h=null,u&&cancelAnimationFrame(o)}}(...e,{animationFrame:"always"===O});return t},elements:{reference:I.anchor},middleware:[{name:"offset",options:c={mainAxis:w+G,alignmentAxis:S},async fn(e){let{x:t,y:n}=e,r=await sS(e,c);return{x:t+r.x,y:n+r.y,data:r}}},C&&{name:"shift",options:f={mainAxis:!0,crossAxis:!1,limiter:"partial"===N?(void 0===d&&(d={}),{options:d,fn(e){let{x:t,y:n,placement:r,rects:o,middlewareData:i}=e,{offset:a=0,mainAxis:l=!0,crossAxis:s=!0}=sa(d,e),u={x:t,y:n},c=sd(r),f=su(c),p=u[f],h=u[c],m=sa(a,e),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){let e="y"===f?"height":"width",t=o.reference[f]-o.floating[e]+g.mainAxis,n=o.reference[f]+o.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(s){var v,y;let e="y"===f?"width":"height",t=["top","left"].includes(sl(r)),n=o.reference[c]-o.floating[e]+(t&&(null==(v=i.offset)?void 0:v[c])||0)+(t?0:g.crossAxis),a=o.reference[c]+o.reference[e]+(t?0:(null==(y=i.offset)?void 0:y[c])||0)-(t?g.crossAxis:0);h<n?h=n:h>a&&(h=a)}return{[f]:p,[c]:h}}}):void 0,...K},async fn(e){let{x:t,y:n,placement:r}=e,{mainAxis:o=!0,crossAxis:i=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=sa(f,e),s={x:t,y:n},u=await sy(e,l),c=sd(sl(r)),d=su(c),p=s[d],h=s[c];if(o){let e=p+u["y"===d?"top":"left"],t=p-u["y"===d?"bottom":"right"];p=se(e,l7(p,t))}if(i){let e="y"===c?"top":"left",t="y"===c?"bottom":"right",n=h+u[e],r=h-u[t];h=se(n,l7(h,r))}let m=a.fn({...e,[d]:p,[c]:h});return{...m,data:{x:m.x-t,y:m.y-n}}}},C&&{name:"flip",options:p={...K},async fn(e){var t,n,r,o,i;let{placement:a,middlewareData:l,rects:s,initialPlacement:u,platform:c,elements:d}=e,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...b}=sa(p,e);// If a reset by the arrow was caused due to an alignment offset being
// added, we should skip any logic now since `flip()` has already done its
// work.
// https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let w=sl(a),x=sl(u)===u,S=await (null==c.isRTL?void 0:c.isRTL(d.floating)),k=m||(x||!y?[sp(u)]:function(e){let t=sp(e);return[sf(e),t,sf(t)]}(u));m||"none"===v||k.push(...function(e,t,n,r){let o=ss(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(sl(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(sf)))),i}(u,y,v,S));let E=[u,...k],C=await sy(e,b),T=[],P=(null==(n=l.flip)?void 0:n.overflows)||[];if(f&&T.push(C[w]),h){let e=function(e,t,n){void 0===n&&(n=!1);let r=ss(e),o=su(sd(e)),i=sc(o),a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=sp(a)),[a,sp(a)]}(a,s,S);T.push(C[e[0]],C[e[1]])}// One or more sides is overflowing.
if(P=[...P,{placement:a,overflows:T}],!T.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};// First, find the candidates that fit on the mainAxis side of overflow,
// then find the placement that fits the best on the main crossAxis side.
let n=null==(o=P.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;// Otherwise fallback.
if(!n)switch(g){case"bestFit":{let e=null==(i=P.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(n=e);break}case"initialPlacement":n=u}if(a!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:h={...K,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width",`${n}px`),a.setProperty("--radix-popper-available-height",`${r}px`),a.setProperty("--radix-popper-anchor-width",`${o}px`),a.setProperty("--radix-popper-anchor-height",`${i}px`)}},async fn(e){let t,n;let{placement:r,rects:o,platform:i,elements:a}=e,{apply:l=()=>{},...s}=sa(h,e),u=await sy(e,s),c=sl(r),d=ss(r),f="y"===sd(r),{width:p,height:m}=o.floating;"top"===c||"bottom"===c?(t=c,n=d===(await (null==i.isRTL?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(n=c,t="end"===d?"top":"bottom");let g=m-u[t],v=p-u[n],y=!e.middlewareData.shift,b=g,w=v;if(f){let e=p-u.left-u.right;w=d||y?l7(v,e):e}else{let e=m-u.top-u.bottom;b=d||y?l7(g,e):e}if(y&&!d){let e=se(u.left,0),t=se(u.right,0),n=se(u.top,0),r=se(u.bottom,0);f?w=p-2*(0!==e||0!==t?e+t:se(u.left,u.right)):b=m-2*(0!==n||0!==r?n+r:se(u.top,u.bottom))}await l({...e,availableWidth:w,availableHeight:b});let x=await i.getDimensions(a.floating);return p!==x.width||m!==x.height?{reset:{rects:!0}}:{}}},$&&sX({element:$,padding:k}),ua({arrowWidth:H,arrowHeight:G}),R&&{name:"hide",options:m={strategy:"referenceHidden",...K},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=sa(m,e);switch(n){case"referenceHidden":{let n=await sy(e,{...r,elementContext:"reference"}),o=sw(n,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:sx(o)}}}case"escaped":{let n=await sy(e,{...r,altBoundary:!0}),o=sw(n,t.floating);return{data:{escapedOffsets:o,escaped:sx(o)}}}default:return{}}}}]}),[et,en]=ul(J),er=U(A);j(()=>{Z&&(null==er||er())},[Z,er]);let eo=null===(o=ee.arrow)||void 0===o?void 0:o.x,ei=null===(i=ee.arrow)||void 0===i?void 0:i.y,ea=(null===(a=ee.arrow)||void 0===a?void 0:a.centerOffset)!==0,[el,es]=(0,b.useState)();return j(()=>{D&&es(window.getComputedStyle(D).zIndex)},[D]),/*#__PURE__*/(0,b.createElement)("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:Z?X.transform:"translate(0, -200%)",// keep off the page when measuring
minWidth:"max-content",zIndex:el,"--radix-popper-transform-origin":[null===(l=ee.transformOrigin)||void 0===l?void 0:l.x,null===(s=ee.transformOrigin)||void 0===s?void 0:s.y].join(" ")}// Floating UI interally calculates logical alignment based the `dir` attribute on
,dir:e.dir},/*#__PURE__*/(0,b.createElement)(ut,{scope:g,placedSide:et,onArrowChange:W,arrowX:eo,arrowY:ei,shouldHideArrow:ea},/*#__PURE__*/(0,b.createElement)(L.div,E({"data-side":et,"data-align":en},M,{ref:F,style:{...M.style,// if the PopperContent hasn't been placed yet (not all measurements done)
// we prevent animations so that users's animation don't kick in too early referring wrong sides
animation:Z?void 0:"none",// hide the content if using the hide middleware and should be hidden
opacity:null!==(u=ee.hide)&&void 0!==u&&u.referenceHidden?0:void 0}}))))}),uo={top:"bottom",right:"left",bottom:"top",left:"right"};/* -----------------------------------------------------------------------------------------------*/function ui(e){return null!==e}let ua=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,a;let{placement:l,rects:s,middlewareData:u}=t,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,d=c?0:e.arrowWidth,f=c?0:e.arrowHeight,[p,h]=ul(l),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(o=u.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+d/2,v=(null!==(i=null===(a=u.arrow)||void 0===a?void 0:a.y)&&void 0!==i?i:0)+f/2,y="",b="";return"bottom"===p?(y=c?m:`${g}px`,b=`${-f}px`):"top"===p?(y=c?m:`${g}px`,b=`${s.floating.height+f}px`):"right"===p?(y=`${-f}px`,b=c?m:`${v}px`):"left"===p&&(y=`${s.floating.width+f}px`,b=c?m:`${v}px`),{data:{x:y,y:b}}}});function ul(e){let[t,n="center"]=e.split("-");return[t,n]}let us=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,b.useState)(null);return/*#__PURE__*/(0,b.createElement)(s8,{scope:t,anchor:r,onAnchorChange:o},n)},uu="Popover",[uc,ud]=T(uu,[s6]),uf=s6(),[up,uh]=uc(uu),um=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopePopover:n,...r}=e,o=uh("PopoverTrigger",n),i=uf(n),a=_(t,o.triggerRef),l=/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":uE(o.open)},r,{ref:a,onClick:C(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?l:/*#__PURE__*/(0,b.createElement)(s7,E({asChild:!0},i),l)}),ug="PopoverPortal",[uv,uy]=uc(ug,{forceMount:void 0}),ub="PopoverContent",uw=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=uy(ub,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=uh(ub,e.__scopePopover);return/*#__PURE__*/(0,b.createElement)(ei,{present:r||i.open},i.modal?/*#__PURE__*/(0,b.createElement)(ux,E({},o,{ref:t})):/*#__PURE__*/(0,b.createElement)(uS,E({},o,{ref:t})))}),ux=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=uh(ub,e.__scopePopover),r=(0,b.useRef)(null),o=_(t,r),i=(0,b.useRef)(!1);return(0,b.useEffect)(()=>{let e=r.current;if(e)return nj(e)},[]),/*#__PURE__*/(0,b.createElement)(nP,{as:N,allowPinchZoom:!0},/*#__PURE__*/(0,b.createElement)(uk,E({},e,{ref:o// we make sure we're not trapping once it's been closed
,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:C(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),i.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:C(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;i.current=r},{checkForDefaultPrevented:!1})// When focus is trapped, a `focusout` event may still happen.
,onFocusOutside:C(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})))}),uS=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let n=uh(ub,e.__scopePopover),r=(0,b.useRef)(!1),o=(0,b.useRef)(!1);return/*#__PURE__*/(0,b.createElement)(uk,E({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));// As the trigger is already setup to close, without doing so would
// cause it to close and immediately open.
let l=t.target,s=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l);s&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),uk=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:a,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:c,...d}=e,f=uh(ub,n),p=uf(n);return t2(),/*#__PURE__*/(0,b.createElement)(tq,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},/*#__PURE__*/(0,b.createElement)(t$,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:c,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onDismiss:()=>f.onOpenChange(!1)},/*#__PURE__*/(0,b.createElement)(ur,E({"data-state":uE(f.open),role:"dialog",id:f.contentId},p,d,{ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});/* -----------------------------------------------------------------------------------------------*/function uE(e){return e?"open":"closed"}let uC=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=uh(ug,t);return/*#__PURE__*/(0,b.createElement)(uv,{scope:t,forceMount:n},/*#__PURE__*/(0,b.createElement)(ei,{present:n||i.open},/*#__PURE__*/(0,b.createElement)(t0,{asChild:!0,container:o},r)))},uT=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!1}=e,l=uf(t),s=(0,b.useRef)(null),[u,c]=(0,b.useState)(!1),[d=!1,f]=$({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,b.createElement)(us,l,/*#__PURE__*/(0,b.createElement)(up,{scope:t,contentId:z(),triggerRef:s,open:d,onOpenChange:f,onOpenToggle:(0,b.useCallback)(()=>f(e=>!e),[f]),hasCustomAnchor:u,onCustomAnchorAdd:(0,b.useCallback)(()=>c(!0),[]),onCustomAnchorRemove:(0,b.useCallback)(()=>c(!1),[]),modal:a},n))},uP=/*#__PURE__*/b.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>/*#__PURE__*/(0,g.jsx)(uC,{children:/*#__PURE__*/(0,g.jsx)(uw,{ref:o,align:t,sideOffset:n,className:eX("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));uP.displayName=uw.displayName,m("exYeM");let u_=rf("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function uN({className:e,variant:t,...n}){return/*#__PURE__*/(0,g.jsx)("div",{className:eX(u_({variant:t}),e),...n})}function uR({words:e}){return/*#__PURE__*/(0,g.jsx)("div",{className:"grid grid-cols-4 gap-4",children:e.map(t=>/*#__PURE__*/(0,g.jsx)(ia,{word:t,fullCandidateSize:e.length},t))})}function uO({...e}){let t=`${{2:"rgb(160 195 90)",3:"rgb(176 196 239)",1:"rgb(249 223 109)",4:"rgb(186 129 197)"}[e.difficulty]}`,[n,r]=/*@__PURE__*/f(b).useState(!1),o=// src/hooks/useSpring.ts
function(e,t){let n=iR.fun(e),[[r],o]=// src/hooks/useSprings.ts
function(e,t,n){let r=iR.fun(t)&&t;r&&!n&&(n=[]);let o=(0,b.useMemo)(()=>r||3==arguments.length?lH():void 0,[]),i=(0,b.useRef)(0),a=aM(),l=(0,b.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){let n=lz(e,t),r=i.current>0&&!l.queue.length&&!Object.keys(n).some(t=>!e.springs[t]);return r?lI(e,t):new Promise(r=>{lL(e,n),l.queue.push(()=>{r(lI(e,t))}),a()})}}),[]),s=(0,b.useRef)([...l.ctrls]),u=[],c=aD(e)||0;function d(e,n){for(let o=e;o<n;o++){let e=s.current[o]||(s.current[o]=new lj(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=function(e){let t=lP(e);return iR.und(t.default)&&(t.default=a5(t)),t}(n))}}(0,b.useMemo)(()=>{iA(s.current.slice(e,c),e=>{e.ref?.delete(e),o?.delete(e),e.stop(!0)}),s.current.length=e,d(c,e)},[e]),(0,b.useMemo)(()=>{d(0,Math.min(c,e))},n);let f=s.current.map((e,t)=>lz(e,u[t])),p=(0,b.useContext)(lW),h=aD(p),m=p!==h&&function(e){for(let t in e)return!0;return!1}(p);aO(()=>{i.current++,l.ctrls=s.current;let{queue:e}=l;e.length&&(l.queue=[],iA(e,e=>e())),iA(s.current,(e,t)=>{o?.add(e),m&&e.start({default:p});let n=u[t];if(n){var r;(r=n.ref)&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r),e.ref?e.queue.push(n):e.start(n)}})}),aj(()=>()=>{iA(l.ctrls,e=>e.stop(!0))});let g=f.map(e=>({...e}));return o?[g,o]:g}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}({from:{opacity:0,transform:"translateY(100%)"},to:{opacity:1,transform:"translateY(0%)"},delay:250}),i=null!=e.imageSrc;return/*#__PURE__*/(0,g.jsx)(l8.div,{style:o,children:i?/*#__PURE__*/(0,g.jsxs)(uT,{children:[/*#__PURE__*/(0,g.jsx)(um,{asChild:!0,children:/*#__PURE__*/(0,g.jsxs)("div",{className:"cursor-pointer hover:animate-pulse shadow-md",style:{backgroundColor:t,borderRadius:8},onClick:()=>r(!0),children:[!n&&/*#__PURE__*/(0,g.jsx)(uN,{className:"animate-pulse absolute top-0 right-0 mr-2 mt-2",children:"View More"}),/*#__PURE__*/(0,g.jsx)("p",{className:"font-bold pt-2 pl-4",children:e.category}),/*#__PURE__*/(0,g.jsx)("p",{className:"font-thin pb-2 pl-4",children:e.words.join(", ")})]})}),/*#__PURE__*/(0,g.jsx)(uP,{children:/*#__PURE__*/(0,g.jsx)("div",{children:/*#__PURE__*/(0,g.jsx)("img",{src:e.imageSrc})})})]}):/*#__PURE__*/(0,g.jsxs)("div",{style:{backgroundColor:t,borderRadius:8},children:[/*#__PURE__*/(0,g.jsx)("p",{className:"font-bold pt-2 pl-4",children:e.category}),/*#__PURE__*/(0,g.jsx)("p",{className:"font-thin pb-2 pl-4",children:e.words.join(", ")})]})})}var uA=function({gameRows:e,shouldGridShake:t,setShouldGridShake:n}){let{submittedGuesses:r,isGameOver:o,isGameWon:i,solvedGameData:a}=/*@__PURE__*/f(b).useContext(it),{gameData:l}=/*@__PURE__*/f(b).useContext(o2);/*@__PURE__*/f(b).useEffect(()=>{let e=window.setTimeout(()=>{n(!1);// this timeout should probably be calculated since it depends on animation values for the grid shake
},2e3);// cleanup timeout
return()=>window.clearTimeout(e)},[r]);let s=!o,u=s&&a.length>0;return/*#__PURE__*/(0,g.jsxs)("div",{children:[(o&&i||u)&&/*#__PURE__*/(0,g.jsx)("div",{className:"grid gap-y-2 pb-2",children:a.map(e=>/*#__PURE__*/(0,g.jsx)(uO,{...e},e.category))}),s&&/*#__PURE__*/(0,g.jsx)("div",{className:`grid gap-y-2 ${t?"Lj2Yua_shake":""}`,children:e.map((e,t)=>/*#__PURE__*/(0,g.jsx)(uR,{words:e},t))}),o&&!i&&/*#__PURE__*/(0,g.jsxs)("div",{className:"grid gap-y-2 pb-2",children:[/*#__PURE__*/(0,g.jsx)("p",{children:"The answer categories are below."}),l.map(e=>/*#__PURE__*/(0,g.jsx)(uO,{...e},e.category))]})]})},b=m("exYeM");function uM({isUsed:e}){return/*#__PURE__*/(0,g.jsx)("div",{children:e?/*#__PURE__*/(0,g.jsx)(oZ,{className:"h-4 w-4 mt-1 stroke-neutral-400"}):/*#__PURE__*/(0,g.jsx)(oJ,{className:"h-4 w-4 mt-1 fill-green-300 stroke-cyan-300"})})}var uj=function(){let{numMistakesUsed:e}=/*@__PURE__*/f(b).useContext(it),t=eZ(8);return/*#__PURE__*/(0,g.jsxs)("div",{className:"flex flex-row gap-x-4 justify-center",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-base",children:"Mistakes Remaining: "}),t.map(t=>/*#__PURE__*/(0,g.jsx)(uM,{isUsed:t<e},t))]})},b=(m("exYeM"),m("exYeM"),m("exYeM"),m("exYeM")),uI={};//
uI=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;// Test for A's keys different from B.
for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0};var uD="-ms-",uz="-moz-",uL="-webkit-",uF="comm",uU="rule",u$="decl",uW="@keyframes",uV=Math.abs,uH=String.fromCharCode,uG=Object.assign;function uY(e,t){return(e=t.exec(e))?e[0]:e}function uB(e,t,n){return e.replace(t,n)}function uq(e,t){return e.indexOf(t)}function uK(e,t){return 0|e.charCodeAt(t)}function uQ(e,t,n){return e.slice(t,n)}function uX(e){return e.length}function uJ(e,t){return t.push(e),e}function uZ(e,t){return e.filter(function(e){return!uY(e,t)})}var u0=1,u1=1,u2=0,u3=0,u4=0,u5="";function u6(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:u0,column:u1,length:a,return:"",siblings:l}}function u8(e,t){return uG(u6("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function u9(e){for(;e.root;)e=u8(e.root,{children:[e]});uJ(e,e.siblings)}function u7(){return u4=u3<u2?uK(u5,u3++):0,u1++,10===u4&&(u1=1,u0++),u4}function ce(){return uK(u5,u3)}function ct(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(e){var t,n;return(t=u3-1,n=function e(t){for(;u7();)switch(u4){case t:return u3;case 34:case 39:34!==t&&39!==t&&e(u4);break;case 40:41===t&&e(t);break;case 92:u7()}return u3}(91===e?e+2:40===e?e+1:e),uQ(u5,t,n)).trim()}function cr(e,t,n,r,o,i,a,l,s,u,c,d){for(var f=o-1,p=0===o?i:[""],h=p.length,m=0,g=0,v=0;m<r;++m)for(var y=0,b=uQ(e,f+1,f=uV(g=a[m])),w=e;y<h;++y)(w=(g>0?p[y]+" "+b:uB(b,/&\f/g,p[y])).trim())&&(s[v++]=w);return u6(e,t,n,0===o?uU:l,s,u,c,d)}function co(e,t,n,r,o){return u6(e,t,n,u$,uQ(e,0,r),uQ(e,r+1,-1),r,o)}function ci(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ca(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case u$:return e.return=e.return||e.value;case uF:return"";case uW:return e.return=e.value+"{"+ci(e.children,r)+"}";case uU:if(!uX(e.value=e.props.join(",")))return""}return uX(n=ci(e.children,r))?e.return=e.value+"{"+n+"}":""}function cl(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case u$:e.return=function e(t,n,r){var o;switch(o=n,45^uK(t,0)?(((o<<2^uK(t,0))<<2^uK(t,1))<<2^uK(t,2))<<2^uK(t,3):0){case 5103:return uL+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return uL+t+t;case 4789:return uz+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return uL+t+uz+t+uD+t+t;case 5936:switch(uK(t,n+11)){case 114:return uL+t+uD+uB(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return uL+t+uD+uB(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return uL+t+uD+uB(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return uL+t+uD+t+t;case 6165:return uL+t+uD+"flex-"+t+t;case 5187:return uL+t+uB(t,/(\w+).+(:[^]+)/,uL+"box-$1$2"+uD+"flex-$1$2")+t;case 5443:return uL+t+uD+"flex-item-"+uB(t,/flex-|-self/g,"")+(uY(t,/flex-|baseline/)?"":uD+"grid-row-"+uB(t,/flex-|-self/g,""))+t;case 4675:return uL+t+uD+"flex-line-pack"+uB(t,/align-content|flex-|-self/g,"")+t;case 5548:return uL+t+uD+uB(t,"shrink","negative")+t;case 5292:return uL+t+uD+uB(t,"basis","preferred-size")+t;case 6060:return uL+"box-"+uB(t,"-grow","")+uL+t+uD+uB(t,"grow","positive")+t;case 4554:return uL+uB(t,/([^-])(transform)/g,"$1"+uL+"$2")+t;case 6187:return uB(uB(uB(t,/(zoom-|grab)/,uL+"$1"),/(image-set)/,uL+"$1"),t,"")+t;case 5495:case 3959:return uB(t,/(image-set\([^]*)/,uL+"$1$`$1");case 4968:return uB(uB(t,/(.+:)(flex-)?(.*)/,uL+"box-pack:$3"+uD+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+uL+t+t;case 4200:if(!uY(t,/flex-|baseline/))return uD+"grid-column-align"+uQ(t,n)+t;break;case 2592:case 3360:return uD+uB(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,uY(e.props,/grid-\w+-end/)}))return~uq(t+(r=r[n].value),"span")?t:uD+uB(t,"-start","")+t+uD+"grid-row-span:"+(~uq(r,"span")?uY(r,/\d+/):+uY(r,/\d+/)-+uY(t,/\d+/))+";";return uD+uB(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return uY(e.props,/grid-\w+-start/)})?t:uD+uB(uB(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return uB(t,/(.+)-inline(.+)/,uL+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(uX(t)-1-n>6)switch(uK(t,n+1)){case 109:if(45!==uK(t,n+4))break;case 102:return uB(t,/(.+:)(.+)-([^]+)/,"$1"+uL+"$2-$3$1"+uz+(108==uK(t,n+3)?"$3":"$2-$3"))+t;case 115:return~uq(t,"stretch")?e(uB(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return uB(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,o,i,a,l){return uD+n+":"+r+l+(o?uD+n+"-span:"+(i?a:+a-+r)+l:"")+t});case 4949:if(121===uK(t,n+6))return uB(t,":",":"+uL)+t;break;case 6444:switch(uK(t,45===uK(t,14)?18:11)){case 120:return uB(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+uL+(45===uK(t,14)?"inline-":"")+"box$3$1"+uL+"$2$3$1"+uD+"$2box$3")+t;case 100:return uB(t,":",":"+uD)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return uB(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case uW:return ci([u8(e,{value:uB(e.value,"@","@"+uL)})],r);case uU:if(e.length)return(n=e.props).map(function(t){switch(uY(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":u9(u8(e,{props:[uB(t,/:(read-\w+)/,":"+uz+"$1")]})),u9(u8(e,{props:[t]})),uG(e,{props:uZ(n,r)});break;case"::placeholder":u9(u8(e,{props:[uB(t,/:(plac\w+)/,":"+uL+"input-$1")]})),u9(u8(e,{props:[uB(t,/:(plac\w+)/,":"+uz+"$1")]})),u9(u8(e,{props:[uB(t,/:(plac\w+)/,uD+"input-$1")]})),u9(u8(e,{props:[t]})),uG(e,{props:uZ(n,r)})}return""}).join("")}}var cs={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cu={},cc=cu={};function cd(){throw Error("setTimeout has not been defined")}function cf(){throw Error("clearTimeout has not been defined")}function cp(e){if(cH===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((cH===cd||!cH)&&setTimeout)return cH=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cH(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cH.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cH.call(this,e,0)}}}!function(){try{cH="function"==typeof setTimeout?setTimeout:cd}catch(e){cH=cd}try{cG="function"==typeof clearTimeout?clearTimeout:cf}catch(e){cG=cf}}();var ch=[],cm=!1,cg=-1;function cv(){cm&&cY&&(cm=!1,cY.length?ch=cY.concat(ch):cg=-1,ch.length&&cy())}function cy(){if(!cm){var e=cp(cv);cm=!0;for(var t=ch.length;t;){for(cY=ch,ch=[];++cg<t;)cY&&cY[cg].run();cg=-1,t=ch.length}cY=null,cm=!1,function(e){if(cG===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((cG===cf||!cG)&&clearTimeout)return cG=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
cG(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cG.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cG.call(this,e)}}}(e)}}// v8 likes predictible objects
function cb(e,t){this.fun=e,this.array=t}function cw(){}cc.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ch.push(new cb(e,t)),1!==ch.length||cm||cp(cy)},cb.prototype.run=function(){this.fun.apply(null,this.array)},cc.title="browser",cc.browser=!0,cc.env={},cc.argv=[],cc.version="",cc.versions={},cc.on=cw,cc.addListener=cw,cc.once=cw,cc.off=cw,cc.removeListener=cw,cc.removeAllListeners=cw,cc.emit=cw,cc.prependListener=cw,cc.prependOnceListener=cw,cc.listeners=function(e){return[]},cc.binding=function(e){throw Error("process.binding is not supported")},cc.cwd=function(){return"/"},cc.chdir=function(e){throw Error("process.chdir is not supported")},cc.umask=function(){return 0};var cx=(void 0!==cu&&cu.env,"data-styled"),cS="undefined"!=typeof window&&"HTMLElement"in window,ck=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:(void 0!==cu&&cu.env,void 0!==cu&&cu.env,!1)),cE=Object.freeze([]),cC=Object.freeze({}),cT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,c_=/(^-|-$)/g;function cN(e){return e.replace(cP,"-").replace(c_,"")}var cR=/(a)(d)/gi,cO=function(e){return String.fromCharCode(e+(e>25?39:97))};function cA(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=cO(t%52)+n;return(cO(t%52)+n).replace(cR,"$1-$2")}var cM,cj,cI,cD,cz,cL,cF,cU,c$,cW,cV,cH,cG,cY,cB,cq=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cK=function(e){return cq(5381,e)};function cQ(e){return"string"==typeof e}var cX="function"==typeof Symbol&&Symbol.for,cJ=cX?Symbol.for("react.memo"):60115,cZ=cX?Symbol.for("react.forward_ref"):60112,c0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c3=((cB={})[cZ]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cB[cJ]=c2,cB);function c4(e){return("type"in e&&e.type.$$typeof)===cJ?c2:"$$typeof"in e?c3[e.$$typeof]:c0}var c5=Object.defineProperty,c6=Object.getOwnPropertyNames,c8=Object.getOwnPropertySymbols,c9=Object.getOwnPropertyDescriptor,c7=Object.getPrototypeOf,de=Object.prototype;function dt(e){return"function"==typeof e}function dn(e){return"object"==typeof e&&"styledComponentId"in e}function dr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function di(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function da(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dl(e,t){Object.defineProperty(e,"toString",{value:t})}function ds(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var du=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw ds(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat("/*!sc*/\n");return t},e}(),dc=new Map,dd=new Map,df=1,dp=function(e){if(dc.has(e))return dc.get(e);for(;dd.has(df);)df++;var t=df++;return dc.set(e,t),dd.set(t,e),t},dh=function(e,t){dc.set(e,t),dd.set(t,e)},dm="style[".concat(cx,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),dg=new RegExp("^".concat(cx,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dv=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},dy=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(dg);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(dh(c,u),dv(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function db(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var dw=function(e){var t,n=document.head,r=e||n,o=document.createElement("style"),i=(t=Array.from(r.querySelectorAll("style[".concat(cx,"]"))))[t.length-1],a=void 0!==i?i.nextSibling:null;o.setAttribute(cx,"active"),o.setAttribute("data-styled-version","6.1.0");var l=db();return l&&o.setAttribute("nonce",l),r.insertBefore(o,a),o},dx=function(){function e(e){this.element=dw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw ds(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),dS=function(){function e(e){this.element=dw(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),dk=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),dE=cS,dC={isServer:!cS,useCSSOMInjection:!ck},dT=function(){function e(e,t,n){void 0===e&&(e=cC),void 0===t&&(t={});var r=this;this.options=t4(t4({},dC),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&cS&&dE&&(dE=!1,function(e){for(var t=document.querySelectorAll(dm),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(cx)&&(dy(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),dl(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++)(function(n){var o=dd.get(n);if(void 0!==o){var i=e.names.get(o),a=t.getGroup(n);if(void 0!==i&&0!==a.length){var l="".concat(cx,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat("/*!sc*/\n")}}})(o);return r}(r)})}return e.registerId=function(e){return dp(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(t4(t4({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n,r;return this.tag||(this.tag=(n=(t=this.options).useCSSOMInjection,r=t.target,e=t.isServer?new dk(r):n?new dx(r):new dS(r),new du(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(dp(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(dp(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(dp(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dP=/&/g,d_=/^\s*\/\/.*$/gm;function dN(e){var t,n,r,o=void 0===e?cC:e,i=o.options,a=void 0===i?cC:i,l=o.plugins,s=void 0===l?cE:l,u=function(e,r,o){return o===n||o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===uU&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(dP,n).replace(r,u))}),a.prefix&&c.push(cl),c.push(ca);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=RegExp("\\".concat(n,"\\b"),"g");var s,u,d,f,p,h=e.replace(d_,""),m=(p=function e(t,n,r,o,i,a,l,s,u){for(var c,d=0,f=0,p=l,h=0,m=0,g=0,v=1,y=1,b=1,w=0,x="",S=i,k=a,E=o,C=x;y;)switch(g=w,w=u7()){case 40:if(108!=g&&58==uK(C,p-1)){-1!=uq(C+=uB(cn(w),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:C+=cn(w);break;case 9:case 10:case 13:case 32:C+=function(e){for(;u4=ce();)if(u4<33)u7();else break;return ct(e)>2||ct(u4)>3?"":" "}(g);break;case 92:C+=function(e,t){for(var n;--t&&u7()&&!(u4<48)&&!(u4>102)&&(!(u4>57)||!(u4<65))&&(!(u4>70)||!(u4<97)););return n=u3+(t<6&&32==ce()&&32==u7()),uQ(u5,e,n)}(u3-1,7);continue;case 47:switch(ce()){case 42:case 47:uJ(u6(c=function(e,t){for(;u7();)if(e+u4===57)break;else if(e+u4===84&&47===ce())break;return"/*"+uQ(u5,t,u3-1)+"*"+uH(47===e?e:u7())}(u7(),u3),n,r,uF,uH(u4),uQ(c,2,-2),0,u),u);break;default:C+="/"}break;case 123*v:s[d++]=uX(C)*b;case 125*v:case 59:case 0:switch(w){case 0:case 125:y=0;case 59+f:-1==b&&(C=uB(C,/\f/g,"")),m>0&&uX(C)-p&&uJ(m>32?co(C+";",o,r,p-1,u):co(uB(C," ","")+";",o,r,p-2,u),u);break;case 59:C+=";";default:if(uJ(E=cr(C,n,r,d,f,i,s,x,S=[],k=[],p,a),a),123===w){if(0===f)e(C,n,E,E,S,a,p,s,k);else switch(99===h&&110===uK(C,3)?100:h){case 100:case 108:case 109:case 115:e(t,E,E,o&&uJ(cr(t,E,E,0,0,i,s,x,i,S=[],p,k),k),i,k,p,s,o?S:k);break;default:e(C,E,E,E,[""],k,0,s,k)}}}d=f=m=0,v=b=1,x=C="",p=l;break;case 58:p=1+uX(C),m=g;default:if(v<1){if(123==w)--v;else if(125==w&&0==v++&&125==(u4=u3>0?uK(u5,--u3):0,u1--,10===u4&&(u1=1,u0--),u4))continue}switch(C+=uH(w),w*v){case 38:b=f>0?1:(C+="\f",-1);break;case 44:s[d++]=(uX(C)-1)*b,b=1;break;case 64:45===ce()&&(C+=cn(u7())),h=ce(),f=p=uX(x=C+=function(e){for(;!ct(ce());)u7();return uQ(u5,e,u3)}(u3)),w++;break;case 45:45===g&&2==uX(C)&&(v=0)}}return a}("",null,null,null,[""],(f=d=i||o?"".concat(i," ").concat(o," { ").concat(h," }"):h,u0=u1=1,u2=uX(u5=f),u3=0,d=[]),0,[0],d),u5="",p);a.namespace&&(m=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(m,a.namespace));var g=[];return ci(m,(u=(s=c.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,g.push(t))})).length,function(e,t,n,r){for(var o="",i=0;i<u;i++)o+=s[i](e,t,n,r)||"";return o})),g};return d.hash=s.length?s.reduce(function(e,t){return t.name||ds(15),cq(e,t.name)},5381).toString():"",d}var dR=new dT,dO=dN(),dA=/*@__PURE__*/f(b).createContext({shouldForwardProp:void 0,styleSheet:dR,stylis:dO}),dM=(dA.Consumer,/*@__PURE__*/f(b).createContext(void 0));function dj(){return(0,b.useContext)(dA)}function dI(e){var t=(0,b.useState)(e.stylisPlugins),n=t[0],r=t[1],o=dj().styleSheet,i=(0,b.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,b.useMemo)(function(){return dN({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,b.useEffect)(function(){/*@__PURE__*/f(uI)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,b.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}},[e.shouldForwardProp,i,a]);return /*@__PURE__*/f(b).createElement(dA.Provider,{value:l},/*@__PURE__*/f(b).createElement(dM.Provider,{value:a},e.children))}var dD=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=dO);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,dl(this,function(){throw ds(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=dO),this.name+e.hash},e}();function dz(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dL=function(e){return null==e||!1===e||""===e},dF=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!dL(r)&&(Array.isArray(r)&&r.isCss||dt(r)?t.push("".concat(dz(n),":"),r,";"):da(r)?t.push.apply(t,t6(t6(["".concat(n," {")],dF(r),!1),["}"],!1)):t.push("".concat(dz(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in cs||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function dU(e,t,n,r){return dL(e)?[]:dn(e)?[".".concat(e.styledComponentId)]:dt(e)?!dt(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:dU(e(t),t,n,r):e instanceof dD?n?(e.inject(n,r),[e.getName(r)]):[e]:da(e)?dF(e):Array.isArray(e)?Array.prototype.concat.apply(cE,e.map(function(e){return dU(e,t,n,r)})):[e.toString()]}function d$(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(dt(n)&&!dn(n))return!1}return!0}var dW=cK("6.1.0"),dV=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&d$(e),this.componentId=t,this.baseHash=cq(dW,t),this.baseStyle=n,dT.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=dr(r,this.staticRulesId);else{var o=di(dU(this.rules,e,t,n)),i=cA(cq(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=dr(r,i),this.staticRulesId=i}}else{for(var l=cq(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=di(dU(c,e,t,n));l=cq(l,d+u),s+=d}}if(s){var f=cA(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=dr(r,f)}}return r},e}(),dH=/*@__PURE__*/f(b).createContext(void 0);dH.Consumer;var dG={};function dY(e,t,n){var r,o,i,a,l=dn(e),s=!cQ(e),u=t.attrs,c=void 0===u?cE:u,d=t.componentId,p=void 0===d?(r=t.displayName,o=t.parentComponentId,dG[i="string"!=typeof r?"sc":cN(r)]=(dG[i]||0)+1,a="".concat(i,"-").concat(cA(cK("6.1.0"+i+dG[i])>>>0)),o?"".concat(o,"-").concat(a):a):d,h=(void 0===t.displayName&&(cQ(e)||e.displayName||e.name),t.displayName&&t.componentId?"".concat(cN(t.displayName),"-").concat(t.componentId):t.componentId||p),m=l&&e.attrs?e.attrs.concat(c).filter(Boolean):c,g=t.shouldForwardProp;if(l&&e.shouldForwardProp){var v=e.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var w=new dV(n,h,l?e.componentStyle:void 0),x=/*@__PURE__*/f(b).forwardRef(function(e,t){return function(e,t,n){var r,o,i=e.attrs,a=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,u=e.styledComponentId,c=e.target,d=/*@__PURE__*/f(b).useContext(dH),p=dj(),h=e.shouldForwardProp||p.shouldForwardProp,m=function(e,t,n){for(var r,o=t4(t4({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=dt(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?dr(o[l],a[l]):"style"===l?t4(t4({},o[l]),a[l]):a[l]}return t.className&&(o.className=dr(o.className,t.className)),o}(i,t,(void 0===(r=l)&&(r=cC),t.theme!==r.theme&&t.theme||d||r.theme||cC)),g=m.as||c,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y||("forwardedAs"===y?v.as=m.forwardedAs:h&&!h(y,g)||(v[y]=m[y]));var w=(o=dj(),a.generateAndInjectStyles(m,o.styleSheet,o.stylis)),x=dr(s,u);return w&&(x+=" "+w),m.className&&(x+=" "+m.className),v[cQ(g)&&!cT.has(g)?"class":"className"]=x,v.ref=n,(0,b.createElement)(g,v)}(x,e,t)});return x.attrs=m,x.componentStyle=w,x.shouldForwardProp=g,x.foldedComponentIds=l?dr(e.foldedComponentIds,e.styledComponentId):"",x.styledComponentId=h,x.target=l?e.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=l?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)(function e(t,n,r){if(void 0===r&&(r=!1),!r&&!da(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var o=0;o<n.length;o++)t[o]=e(t[o],n[o]);else if(da(n))for(var o in n)t[o]=e(t[o],n[o]);return t})(e,t[r],!0);return e}({},e.defaultProps,t):t}}),dl(x,function(){return".".concat(x.styledComponentId)}),s&&function e(t,n,r){if("string"!=typeof n){if(de){var o=c7(n);o&&o!==de&&e(t,o,r)}var i=c6(n);c8&&(i=i.concat(c8(n)));for(var a=c4(t),l=c4(n),s=0;s<i.length;++s){var u=i[s];if(!(u in c1||r&&r[u]||l&&u in l||a&&u in a)){var c=c9(n,u);try{c5(t,u,c)}catch(e){}}}}return t}(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function dB(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var dq=function(e){return Object.assign(e,{isCss:!0})};function dK(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return dt(e)||da(e)?dq(dU(dB(cE,t6([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?dU(e):dq(dU(dB(e,t)))}var dQ=function(e){return function e(t,n,r){if(void 0===r&&(r=cC),!n)throw ds(1,n);var o=function(e){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(n,r,dK.apply(void 0,t6([e],o,!1)))};return o.attrs=function(o){return e(t,n,t4(t4({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return e(t,n,t4(t4({},r),o))},o}(dY,e)};function dX(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=di(dK.apply(void 0,t6([e],t,!1))),o=cA(cK(r)>>>0);return new dD(o,r)}cT.forEach(function(e){dQ[e]=dQ(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=d$(e),dT.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(di(dU(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&dT.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=db(),r=di([n&&'nonce="'.concat(n,'"'),"".concat(cx,'="true"'),"".concat("data-styled-version",'="').concat("6.1.0",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ds(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw ds(2);var t,n=((t={})[cx]="",t["data-styled-version"]="6.1.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=db();return r&&(n.nonce=r),[/*@__PURE__*/f(b).createElement("style",t4({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new dT({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ds(2);return /*@__PURE__*/f(b).createElement(dI,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ds(3)}}();// https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
var b=m("exYeM");let dJ="(prefers-reduced-motion: no-preference)",dZ="undefined"==typeof window,d0=()=>!!dZ||!window.matchMedia(dJ).matches;var d1=function(){let[e,t]=/*@__PURE__*/f(b).useState(d0);return /*@__PURE__*/f(b).useEffect(()=>{let e=window.matchMedia(dJ),n=e=>{t(!e.matches)};return e.addEventListener?e.addEventListener("change",n):e.addListener(n),()=>{e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}},[]),e},b=m("exYeM");let d2=(e,t)=>Math.floor(Math.random()*(t-e))+e;var d3=(e,t,n)=>{let r=/*@__PURE__*/f(b).useRef(null),o=/*@__PURE__*/f(b).useRef(e);/*@__PURE__*/f(b).useEffect(()=>{o.current=e},[e]),/*@__PURE__*/f(b).useEffect(()=>{if("number"==typeof t&&"number"==typeof n){let e=()=>{let i=d2(t,n);r.current=window.setTimeout(()=>{o.current(),e()},i)};e()}return()=>window.clearTimeout(r.current)},[t,n]);let i=/*@__PURE__*/f(b).useCallback(function(){window.clearTimeout(r.current)},[]);return i};let d4="#FFC700",d5=e=>{let t={id:String(eJ(1e4,99999)),createdAt:Date.now(),color:e,size:eJ(10,20),style:{top:eJ(0,100)+"%",left:eJ(0,100)+"%",zIndex:3}};return t},d6=({size:e,color:t,style:n})=>/*#__PURE__*/(0,g.jsx)(fe,{style:n,children:/*#__PURE__*/(0,g.jsx)(ft,{width:e,height:e,viewBox:"0 0 68 68",fill:"none",children:/*#__PURE__*/(0,g.jsx)("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t})})}),d8=dX`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,d9=dX`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`,d7=dQ.span`
  display: inline-block;
  position: relative;
`,fe=dQ.span`
  position: absolute;
  display: block;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${d8} 700ms forwards;
  }
`,ft=dQ.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${d9} 1000ms linear;
  }
`,fn=dQ.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;var fr=({color:e=d4,children:t,...n})=>{let[r,o]=/*@__PURE__*/f(b).useState(()=>eZ(3).map(()=>d5(e))),i=d1();return d3(()=>{let t=d5(e),n=Date.now(),i=r.filter(e=>{let t=n-e.createdAt;return t<750});i.push(t),o(i)},i?null:50,i?null:450),/*#__PURE__*/(0,g.jsxs)(d7,{...n,children:[r.map(e=>/*#__PURE__*/(0,g.jsx)(d6,{color:e.color,size:e.size,style:e.style},e.id)),/*#__PURE__*/(0,g.jsx)(fn,{children:t})]})},b=m("exYeM");let fo=0,fi=new Map,fa=e=>{if(fi.has(e))return;let t=setTimeout(()=>{fi.delete(e),fc({type:"REMOVE_TOAST",toastId:e})},1e6);fi.set(e,t)},fl=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?fa(n):e.toasts.forEach(e=>{fa(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},fs=[],fu={toasts:[]};function fc(e){fu=fl(fu,e),fs.forEach(e=>{e(fu)})}function fd({...e}){let t=(fo=(fo+1)%Number.MAX_VALUE).toString(),n=()=>fc({type:"DISMISS_TOAST",toastId:t});return fc({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||n()}}}),{id:t,dismiss:n,update:e=>fc({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function ff(){let[e,t]=b.useState(fu);return b.useEffect(()=>(fs.push(t),()=>{let e=fs.indexOf(t);e>-1&&fs.splice(e,1)}),[e]),{...e,toast:fd,dismiss:e=>fc({type:"DISMISS_TOAST",toastId:e})}}var fp=m("kSiIs");// Share logic from here: https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/share.ts
let fh=["mobile","smarttv","wearable"],fm=new fp.UAParser,fg=fm.getBrowser(),fv=fm.getDevice(),fy=(e,t,n,r,o=!0)=>{let i=window.location.href,a=`Jester Connections #${og}

`+ie(e,t,!0)+`${o?"\n\n"+i:""}`,l={text:a},s=!1;try{fb(l)&&(navigator.share(l),s=!0)}catch(e){s=!1}try{s||(navigator.clipboard?navigator.clipboard.writeText(a).then(n).catch(r):r())}catch(e){r()}},fb=e=>fg.name?.toUpperCase().indexOf("FIREFOX")===-1&&-1!==fh.indexOf(fv.type??"")&&navigator.canShare&&navigator.canShare(e)&&navigator.share;var fw=function({buttonText:e="Share",className:t=""}){let{gameData:n}=/*@__PURE__*/f(b).useContext(o2),{submittedGuesses:r}=/*@__PURE__*/f(b).useContext(it),{toast:o}=ff();function i(){o({label:"Notification",title:"",description:"Copied to clipboard!"})}function a(){o({label:"Notification",title:"",description:"Was unable to copy to clipboard / share."})}return/*#__PURE__*/(0,g.jsx)(fr,{children:/*#__PURE__*/(0,g.jsx)(rh,{className:eX(t,"w-full"),variant:"share",onClick:()=>fy(n,r,i,a,!0),children:e})})};m("exYeM");var b=m("exYeM"),fx={};function fS(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function fk(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fE(e,t,n){return t&&fk(e.prototype,t),n&&fk(e,n),e}function fC(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fP(e,t)}function fT(e){return(fT=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fP(e,t){return(fP=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f_(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r,o=fT(e);if(t){var i=fT(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return(n=r)&&("object"==typeof n||"function"==typeof n)?n:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)}}function fN(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function fR(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=String(e);if(0===n)return r;var o=r.match(/(.*?)([0-9]+)(.*)/),i=o?o[1]:"",a=o?o[3]:"",l=o?o[2]:r,s=l.length>=n?l:(((function(e){if(Array.isArray(e))return fN(e)})(t=Array(n))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return fN(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fN(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+l).slice(-1*n);return"".concat(i).concat(s).concat(a)}// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
fx=m("jpdgm")();var fO={daysInHours:!1,zeroPadTime:2},fA=function(e){fC(n,e);var t=f_(n);function n(){var e;return fS(this,n),e=t.apply(this,arguments),e.state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval(function(){0==e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState(function(e){return{count:e.count-1}})},1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState(function(e){return{count:e.count+t}},e.startCountdown)},e}return fE(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,b.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(b.Component);fA.propTypes={count:fx.number,children:fx.element,onComplete:fx.func};var fM=function(e){fC(n,e);var t=f_(n);function n(e){var r;if(fS(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,b.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},e.date){var o=r.calcTimeDelta();r.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return fE(n,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date===e.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,o=e.controlled,i=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,i=n.precision,a=n.controlled,l=n.offsetTime,s=n.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,a||(t+=void 0===l?0:l);var u=a?t:t-o(),c=Math.round(1e3*parseFloat(((s?u:Math.max(0,u))/1e3).toFixed(Math.min(20,Math.max(0,void 0===i?0:i))))),d=Math.abs(c)/1e3;return{total:c,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:c<=0}}(t,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var o=e.completed&&!this.state.timeDelta.completed,i=e.completed&&"STARTED"===t;return o&&!this.props.overtime&&this.clearTimer(),this.setState(function(n){var o=t||n.status;return e.completed&&!r.props.overtime?o="COMPLETED":t||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:e,status:o}},function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||i)&&r.props.onComplete(e,i)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e,t,n,r,o,i,a,l,s,u,c,d=this.props,f=d.daysInHours,p=d.zeroPadTime,h=d.zeroPadDays,m=this.state.timeDelta;return Object.assign(Object.assign({},m),{api:this.getApi(),props:this.props,formatted:(e=m.days,t=m.hours,n=m.minutes,r=m.seconds,i=(o=Object.assign(Object.assign({},fO),{daysInHours:f,zeroPadTime:p,zeroPadDays:h})).daysInHours,a=o.zeroPadTime,s=void 0===(l=o.zeroPadDays)?a:l,u=Math.min(2,a),c=i?fR(t+24*e,a):fR(t,u),{days:i?"":fR(e,s),hours:c,minutes:fR(n,u),seconds:fR(r,u)})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return(0,b.createElement)(fA,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var o=this.props,i=o.className,a=o.overtime,l=o.children,s=o.renderer,u=this.getRenderProps();if(s)return s(u);if(l&&this.state.timeDelta.completed&&!a)return(0,b.cloneElement)(l,{countdown:u});var c=u.formatted,d=c.days,f=c.hours,p=c.minutes,h=c.seconds;return(0,b.createElement)("span",{className:i},u.total<0?"-":"",d,d?":":"",f,":",p,":",h)}}]),n}(b.Component);fM.defaultProps=Object.assign(Object.assign({},fO),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),fM.propTypes={date:(0,fx.oneOfType)([(0,fx.instanceOf)(Date),fx.string,fx.number]),daysInHours:fx.bool,zeroPadTime:fx.number,zeroPadDays:fx.number,controlled:fx.bool,intervalDelay:fx.number,precision:fx.number,autoStart:fx.bool,overtime:fx.bool,className:fx.string,children:fx.element,renderer:fx.func,now:fx.func,onMount:fx.func,onStart:fx.func,onPause:fx.func,onStop:fx.func,onTick:fx.func,onComplete:fx.func};// Renderer callback with condition
let fj=({days:e,hours:t,minutes:n,seconds:r,completed:o})=>{//ChatGPT Assisted
// Render a countdown
if(o)return/*#__PURE__*/(0,g.jsx)("span",{className:"font-[600]",children:"New Game Available! Refresh Your Browser."});let i=[];e>0&&i.push(`${e} Day${e>1?"s":""}`),t>0&&i.push(`${t} Hour${t>1?"s":""}`),n>0&&i.push(`${n} Minute${n>1?"s":""}`);// Create a sentence based on the time parts
let a="Next Puzzle Released in ";// Create a sentence based on the time parts
return i.length>2?a+=i.slice(0,-1).join(", ")+`, and ${i.slice(-1)}`:2==i.length?a+=`${i[0]} and ${i[1]}`:a+=i[0],/*#__PURE__*/(0,g.jsx)("div",{children:a})};var fI=function(){return/*#__PURE__*/(0,g.jsx)("div",{className:"flex flex-row place-content-center mt-4",children:/*#__PURE__*/(0,g.jsx)(fM,{className:"text-lg text-gray-900",renderer:fj,date:ov,intervalDelay:1e3})})},fD=function({open:e}){let{gameData:t}=/*@__PURE__*/f(b).useContext(o2),{isForFunsies:n}=/*@__PURE__*/f(b).useContext(it);return/*#__PURE__*/(0,g.jsx)(rC,{title:"You lost.",initiallyOpen:e,footerElements:!n&&/*#__PURE__*/(0,g.jsx)(fw,{}),showActionButton:n,children:n?/*#__PURE__*/(0,g.jsx)("p",{children:"Good thing this was just a funsies guess!"}):/*#__PURE__*/(0,g.jsxs)(g.Fragment,{children:[/*#__PURE__*/(0,g.jsxs)("div",{className:"grid gap-y-2",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-lg font-[500] text-center",children:"Better luck next time. The correct answers are below."}),t.map(e=>/*#__PURE__*/(0,g.jsx)(uO,{...e},e.category))]}),/*#__PURE__*/(0,g.jsx)(fI,{})]})})},b=m("exYeM"),fz=function({open:e,submittedGuesses:t}){let{gameData:n}=/*@__PURE__*/f(b).useContext(o2),{isForFunsies:r}=/*@__PURE__*/f(b).useContext(it);return/*#__PURE__*/(0,g.jsxs)(rC,{title:"You won the game!",initiallyOpen:e,footerElements:!r&&/*#__PURE__*/(0,g.jsx)(fw,{}),showActionButton:r,children:[/*#__PURE__*/(0,g.jsx)("p",{children:r?"Unfortunately this was just for funsies!":"Great job, share your results!"}),!r&&/*#__PURE__*/(0,g.jsxs)("div",{className:"justify-center",children:[/*#__PURE__*/(0,g.jsxs)("span",{className:"text-center whitespace-pre",children:["\n",ie(n,t)]}),/*#__PURE__*/(0,g.jsx)(fI,{})]})]})},b=(m("exYeM"),m("exYeM"));let fL="horizontal",fF=["horizontal","vertical"],fU=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{decorative:n,orientation:r=fL,...o}=e,i=f$(r)?r:fL;return/*#__PURE__*/(0,b.createElement)(L.div,E({"data-orientation":i},n?{role:"none"}:{"aria-orientation":"vertical"===i?i:void 0,role:"separator"},o,{ref:t}))});function f$(e){return fF.includes(e)}fU.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!f$(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${fL}\`.`):null}};let fW=/*#__PURE__*/b.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},o)=>/*#__PURE__*/(0,g.jsx)(fU,{ref:o,decorative:n,orientation:t,className:eX("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...r}));fW.displayName=fU.displayName;var b=m("exYeM"),fV={},fH={},fG=Math.ceil,fY=Math.max;fH=/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */function(e,t,n,r){for(var o=-1,i=fY(fG((t-e)/(n||1)),0),a=Array(i);i--;)a[r?i:++o]=e,e+=n;return a};var fB={},fq={};fq=/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function(e,t){return e===t||e!=e&&t!=t};var fK={},fQ={},fX={},fJ={},fZ=m("8ThvE");fJ=fZ.Symbol;var f0={},f1=Object.prototype,f2=f1.hasOwnProperty,f3=f1.toString,f4=fJ?fJ.toStringTag:void 0;f0=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=f2.call(e,f4),n=e[f4];try{e[f4]=void 0;var r=!0}catch(e){}var o=f3.call(e);return r&&(t?e[f4]=n:delete e[f4]),o};var f5={},f6=Object.prototype.toString;f5=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return f6.call(e)};/** Built-in value references. */var f8=fJ?fJ.toStringTag:void 0;fX=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":f8&&f8 in Object(e)?f0(e):f5(e)};var f9={};f9=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fQ=/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function(e){if(!f9(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=fX(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var f7={};f7=/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},fK=/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function(e){return null!=e&&f7(e.length)&&!fQ(e)};var pe={},pt=/^(?:0|[1-9]\d*)$/;pe=/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&pt.test(e))&&e>-1&&e%1==0&&e<t},fB=/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function(e,t,n){if(!f9(n))return!1;var r=typeof t;return("number"==r?!!(fK(n)&&pe(t,n.length)):"string"==r&&t in n)&&fq(n[t],e)};var pn={},pr={},po={},pi={},pa=/\s/;pi=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&pa.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var pl=/^\s+/;po=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,pi(e)+1).replace(pl,""):e};var ps={},pu={};pu=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},ps=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||pu(e)&&"[object Symbol]"==fX(e)};/** Used as references for various `Number` constants. */var pc=0/0,pd=/^[-+]0x[0-9a-f]+$/i,pf=/^0b[01]+$/i,pp=/^0o[0-7]+$/i,ph=parseInt;pr=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(e){if("number"==typeof e)return e;if(ps(e))return pc;if(f9(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f9(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=po(e);var n=pf.test(e);return n||pp.test(e)?ph(e.slice(2),n?2:8):pd.test(e)?pc:+e};/** Used as references for various `Number` constants. */var pm=1/0;function pg(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}pn=/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function(e){return e?(e=pr(e))===pm||e===-pm?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0},fV=function(e,t,n){return n&&"number"!=typeof n&&fB(e,t,n)&&(t=n=void 0),// Ensure the sign of `-0` is preserved.
e=pn(e),void 0===t?(t=e,e=0):t=pn(t),n=void 0===n?e<t?1:-1:pn(n),fH(e,t,n,void 0)};var b=m("exYeM"),pv={},py={};py=m("beWdq");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var pb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},px={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pS={};function pk(e){return(// React v16.11 and below
py.isMemo(e)?px:pS[e.$$typeof]||pb)}pS[py.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pS[py.Memo]=px;var pE=Object.defineProperty,pC=Object.getOwnPropertyNames,pT=Object.getOwnPropertySymbols,pP=Object.getOwnPropertyDescriptor,p_=Object.getPrototypeOf,pN=Object.prototype;pv=function e(t,n,r){if("string"!=typeof n){// don't hoist over string (html) components
if(pN){var o=p_(n);o&&o!==pN&&e(t,o,r)}var i=pC(n);pT&&(i=i.concat(pT(n)));for(var a=pk(t),l=pk(n),s=0;s<i.length;++s){var u=i[s];if(!pw[u]&&!(r&&r[u])&&!(l&&l[u])&&!(a&&a[u])){var c=pP(n,u);try{// Avoid failures from read-only properties
pE(t,u,c)}catch(e){}}}}return t};var b=m("exYeM"),pR={};function pO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pA(){return(pA=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pM(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(pR,"__esModule",{value:!0}),pR.default=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")};var pj=(0,b.createContext)(),pI={context:pj,withTheme:function(e){var t=/*@__PURE__*/f(b).forwardRef(function(t,n){return /*@__PURE__*/f(b).createElement(pj.Consumer,null,function(r){return /*@__PURE__*/f(b).createElement(e,pA({theme:r,ref:n},t))})});return /*@__PURE__*/f(pv)(t,e),t},useTheme:function(){return /*@__PURE__*/f(b).useContext(pj)},ThemeProvider:/*#__PURE__*/function(e){function t(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return pO(pM(pM(t=e.call.apply(e,[this].concat(r))||this)),"cachedTheme",void 0),pO(pM(pM(t)),"lastOuterTheme",void 0),pO(pM(pM(t)),"lastTheme",void 0),pO(pM(pM(t)),"renderProvider",function(e){var n=t.props.children;return /*@__PURE__*/f(b).createElement(pj.Provider,{value:t.getTheme(e)},n)}),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var n=t.prototype;return(// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
n.getTheme=function(e){if(this.props.theme!==this.lastTheme||e!==this.lastOuterTheme||!this.cachedTheme){if(this.lastOuterTheme=e,this.lastTheme=this.props.theme,"function"==typeof this.lastTheme){var t=this.props.theme;this.cachedTheme=t(e)}else{var n=this.props.theme;this.cachedTheme=e?pA({},e,n):n}}return this.cachedTheme},n.render=function(){return this.props.children?/*@__PURE__*/f(b).createElement(pj.Consumer,null,this.renderProvider):null},t)}(/*@__PURE__*/f(b).Component)};pI.withTheme,pI.ThemeProvider,pI.useTheme;var pD="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pz=("undefined"==typeof window?"undefined":pD(window))==="object"&&("undefined"==typeof document?"undefined":pD(document))==="object"&&9===document.nodeType,pL=function(e,t){};function pF(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==r_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==r_(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r_(t)?t:String(t)}(r.key),r)}}function pU(e,t,n){return t&&pF(e.prototype,t),n&&pF(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p$(e,t){return(p$=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function pW(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p$(e,t)}function pV(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var pH={}.constructor;/**
 * Create a rule instance.
 */function pG(e,t,n){void 0===e&&(e="unnamed");var r=n.jss,o=function e(t){if(null==t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);if(t.constructor!==pH)return t;var n={};for(var r in t)n[r]=e(t[r]);return n}(t);return r.plugins.onCreateRule(e,o,n)||(e[0],null)// It is an at-rule and it has no instance.
}var pY=function(e,t){for(var n="",r=0;// Remove !important from the value, it will be readded later.
r<e.length&&"!important"!==e[r];r++)n&&(n+=t),n+=e[r];return n},pB=function(e){if(!Array.isArray(e))return e;var t="";// Support space separated values via `[['5px', '10px']]`.
if(Array.isArray(e[0]))for(var n=0;n<e.length&&"!important"!==e[n];n++)t&&(t+=", "),t+=pY(e[n]," ");else t=pY(e,", ");// Add !important, because it was ignored.
return"!important"===e[e.length-1]&&(t+=" !important"),t};function pq(e){return e&&!1===e.format?{linebreak:"",space:""}:{linebreak:"\n",space:" "}}/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */function pK(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}/**
 * Converts a Rule to CSS string.
 */function pQ(e,t,n){void 0===n&&(n={});var r="";if(!t)return r;var o=n.indent,i=void 0===o?0:o,a=t.fallbacks;!1===n.format&&(i=-1/0);var l=pq(n),s=l.linebreak,u=l.space;if(e&&i++,a){// Array syntax {fallbacks: [{prop: value}]}
if(Array.isArray(a))for(var c=0;c<a.length;c++){var d=a[c];for(var f in d){var p=d[f];null!=p&&(r&&(r+=s),r+=pK(f+":"+u+pB(p)+";",i))}}else for(var h in a){var m=a[h];null!=m&&(r&&(r+=s),r+=pK(h+":"+u+pB(m)+";",i))}}for(var g in t){var v=t[g];null!=v&&"fallbacks"!==g&&(r&&(r+=s),r+=pK(g+":"+u+pB(v)+";",i))}// Allow empty style in this case, because properties will be added dynamically.
return(r||n.allowEmpty)&&e?(i--,r&&(r=""+s+r+s),pK(""+e+u+"{"+r,i)+pK("}",i)):r// When rule is being stringified before selector was defined.
}var pX=/([[\].#*$><+~=|^:(),"'`\s])/g,pJ="undefined"!=typeof CSS&&CSS.escape,pZ=function(e){return pJ?pJ(e):e.replace(pX,"\\$1")},p0=/*#__PURE__*/function(){function e(e,t,n){this.type="style",this.isProcessed=!1;var r=n.sheet,o=n.Renderer;this.key=e,this.options=n,this.style=t,r?this.renderer=r.renderer:o&&(this.renderer=new o)}return e.prototype.prop=function(e,t,n){// It's a getter.
if(void 0===t)return this.style[e];// Don't do anything if the value has not changed.
var r=!!n&&n.force;if(!r&&this.style[e]===t)return this;var o=t;n&&!1===n.process||(o=this.options.jss.plugins.onChangeValue(t,e,this));var i=null==o||!1===o,a=e in this.style;if(i&&!a&&!r)return this;// We are going to remove this value.
var l=i&&a;if(l?delete this.style[e]:this.style[e]=o,this.renderable&&this.renderer)return l?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,o),this;var s=this.options.sheet;return s&&s.attached,this},e}(),p1=/*#__PURE__*/function(e){function t(t,n,r){o=e.call(this,t,n,r)||this;var o,i=r.selector,a=r.scoped,l=r.sheet,s=r.generateId;return i?o.selectorText=i:!1!==a&&(o.id=s(pV(pV(o)),l),o.selectorText="."+pZ(o.id)),o}pW(t,e);/**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */var n=t.prototype;return(/**
   * Apply rule to an element inline.
   */n.applyTo=function(e){var t=this.renderer;if(t){var n=this.toJSON();for(var r in n)t.setProperty(e,r,n[r])}return this}/**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */,n.toJSON=function(){var e={};for(var t in this.style){var n=this.style[t];"object"!=typeof n?e[t]=n:Array.isArray(n)&&(e[t]=pB(n))}return e}/**
   * Generates a CSS string.
   */,n.toString=function(e){var t=this.options.sheet,n=t&&t.options.link?E({},e,{allowEmpty:!0}):e;return pQ(this.selectorText,this.style,n)},pU(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,n=this.renderable;n&&t&&!t.setSelector(n,e)&&t.replaceRule(n,this)}},get:function(){return this.selectorText}}]),t)}(p0),p2={indent:1,children:!0},p3=/@([\w-]+)/,p4=/*#__PURE__*/function(){function e(e,t,n){this.type="conditional",this.isProcessed=!1,this.key=e;var r=e.match(p3);for(var o in this.at=r?r[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new hf(E({},n,{parent:this})),t)this.rules.add(o,t[o]);this.rules.process()}/**
   * Get a rule.
   */var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Create and register rule, run plugins.
   */,t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r?(this.options.jss.plugins.onProcessRule(r),r):null}/**
   * Replace rule, run plugins.
   */,t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Generates a CSS string.
   */,t.toString=function(e){void 0===e&&(e=p2);var t=pq(e).linebreak;if(null==e.indent&&(e.indent=p2.indent),null==e.children&&(e.children=p2.children),!1===e.children)return this.query+" {}";var n=this.rules.toString(e);return n?this.query+" {"+t+n+t+"}":""},e}(),p5=/@container|@media|@supports\s+/,p6={indent:1,children:!0},p8=/@keyframes\s+([\w-]+)/,p9=/*#__PURE__*/function(){function e(e,t,n){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var r=e.match(p8);r&&r[1]?this.name=r[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var o=n.scoped,i=n.sheet,a=n.generateId;for(var l in this.id=!1===o?this.name:pZ(a(this,i)),this.rules=new hf(E({},n,{parent:this})),t)this.rules.add(l,t[l],E({},n,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){void 0===e&&(e=p6);var t=pq(e).linebreak;if(null==e.indent&&(e.indent=p6.indent),null==e.children&&(e.children=p6.children),!1===e.children)return this.at+" "+this.id+" {}";var n=this.rules.toString(e);return n&&(n=""+t+n+t),this.at+" "+this.id+" {"+n+"}"},e}(),p7=/@keyframes\s+/,he=/\$([\w-]+)/g,ht=function(e,t){return"string"==typeof e?e.replace(he,function(e,n){return n in t?t[n]:e}):e},hn=function(e,t,n){var r=e[t],o=ht(r,n);o!==r&&(e[t]=o)},hr=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return pW(t,e),/**
   * Generates a CSS string.
   */t.prototype.toString=function(e){var t=this.options.sheet,n=t&&t.options.link?E({},e,{allowEmpty:!0}):e;return pQ(this.key,this.style,n)},t}(p0),ho=/*#__PURE__*/function(){function e(e,t,n){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){var t=pq(e).linebreak;if(Array.isArray(this.style)){for(var n="",r=0;r<this.style.length;r++)n+=pQ(this.at,this.style[r]),this.style[r+1]&&(n+=t);return n}return pQ(this.at,this.style,e)},e}(),hi=/@font-face/,ha=/*#__PURE__*/function(){function e(e,t,n){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){return pQ(this.key,this.style,e)},e}(),hl=/*#__PURE__*/function(){function e(e,t,n){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=n}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",n=0;n<this.value.length;n++)t+=this.key+" "+this.value[n]+";",this.value[n+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),hs={"@charset":!0,"@import":!0,"@namespace":!0},hu=[{onCreateRule:function(e,t,n){return"@"===e[0]||n.parent&&"keyframes"===n.parent.type?null:new p1(e,t,n)}},{onCreateRule:function(e,t,n){return p5.test(e)?new p4(e,t,n):null}},{onCreateRule:function(e,t,n){return"string"==typeof e&&p7.test(e)?new p9(e,t,n):null},// Animation name ref replacer.
onProcessStyle:function(e,t,n){return"style"===t.type&&n&&("animation-name"in e&&hn(e,"animation-name",n.keyframes),"animation"in e&&hn(e,"animation",n.keyframes)),e},onChangeValue:function(e,t,n){var r=n.options.sheet;if(!r)return e;switch(t){case"animation":case"animation-name":return ht(e,r.keyframes);default:return e}}},{onCreateRule:function(e,t,n){return n.parent&&"keyframes"===n.parent.type?new hr(e,t,n):null}},{onCreateRule:function(e,t,n){return hi.test(e)?new ho(e,t,n):null}},{onCreateRule:function(e,t,n){return"@viewport"===e||"@-ms-viewport"===e?new ha(e,t,n):null}},{onCreateRule:function(e,t,n){return e in hs?new hl(e,t,n):null}}],hc={process:!0},hd={force:!0,process:!0},hf=/*#__PURE__*/function(){// Rules registry for access by .get() method.
// It contains the same rule registered by name and by selector.
// Original styles object.
// Used to ensure correct rules order.
function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}/**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */var t=e.prototype;return t.add=function(e,t,n){var r=this.options,o=r.parent,i=r.sheet,a=r.jss,l=r.Renderer,s=r.generateId,u=r.scoped,c=E({classes:this.classes,parent:o,sheet:i,jss:a,Renderer:l,generateId:s,scoped:u,name:e,keyframes:this.keyframes,selector:void 0},n),d=e;e in this.raw&&(d=e+"-d"+this.counter++),// We need to save the original decl before creating the rule
// because cache plugin needs to use it as a key to return a cached rule.
this.raw[d]=t,d in this.classes&&(c.selector="."+pZ(this.classes[d]));var f=pG(d,t,c);if(!f)return null;this.register(f);var p=void 0===c.index?this.index.length:c.index;return this.index.splice(p,0,f),f}/**
   * Replace rule.
   * Create a new rule and remove old one instead of overwriting
   * because we want to invoke onCreateRule hook to make plugins work.
   */,t.replace=function(e,t,n){var r=this.get(e),o=this.index.indexOf(r);r&&this.remove(r);var i=n;return -1!==o&&(i=E({},n,{index:o})),this.add(e,t,i)}/**
   * Get a rule by name or selector.
   */,t.get=function(e){return this.map[e]}/**
   * Delete a rule.
   */,t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.index.indexOf(e)}/**
   * Run `onProcessRule()` plugins on every rule.
   */,t.process=function(){var e=this.options.jss.plugins;// We need to clone array because if we modify the index somewhere else during a loop
// we end up with very hard-to-track-down side effects.
this.index.slice(0).forEach(e.onProcessRule,e)}/**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */,t.register=function(e){this.map[e.key]=e,e instanceof p1?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof p9&&this.keyframes&&(this.keyframes[e.name]=e.id)}/**
   * Unregister a rule.
   */,t.unregister=function(e){delete this.map[e.key],e instanceof p1?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof p9&&delete this.keyframes[e.name]}/**
   * Update the function values with a new data.
   */,t.update=function(){if("string"==typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,n);else for(var e,t,n,r=0;r<this.index.length;r++)this.updateOne(this.index[r],t,n)}/**
   * Execute plugins, update rule props.
   */,t.updateOne=function(t,n,r){void 0===r&&(r=hc);var o=this.options,i=o.jss.plugins,a=o.sheet;// It is a rules container like for e.g. ConditionalRule.
if(t.rules instanceof e){t.rules.update(n,r);return}var l=t.style;if(i.onUpdate(n,t,a,r),r.process&&l&&l!==t.style){for(var s in // We need to run the plugins in case new `style` relies on syntax plugins.
i.onProcessStyle(t.style,t,a),t.style){var u=t.style[s];// We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.
u!==l[s]&&t.prop(s,u,hd)}// Remove props.
for(var c in l){var d=t.style[c],f=l[c];// We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.
null==d&&d!==f&&t.prop(c,null,hd)}}}/**
   * Convert rules to a CSS string.
   */,t.toString=function(e){for(var t="",n=this.options.sheet,r=!!n&&n.options.link,o=pq(e).linebreak,i=0;i<this.index.length;i++){var a=this.index[i].toString(e);// No need to render an empty rule.
(a||r)&&(t&&(t+=o),t+=a)}return t},e}(),hp=/*#__PURE__*/function(){function e(e,t){for(var n in this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=E({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new hf(this.options),e)this.rules.add(n,e[n]);this.rules.process()}/**
   * Attach renderable to the render tree.
   */var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this}/**
   * Remove renderable from render tree.
   */,t.detach=function(){return this.attached&&(this.renderer&&this.renderer.detach(),this.attached=!1),this}/**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */,t.addRule=function(e,t,n){var r=this.queue;// Plugins can create rules.
this.attached&&!r&&(this.queue=[]);var o=this.rules.add(e,t,n);return o?((this.options.jss.plugins.onProcessRule(o),this.attached)?this.deployed&&(r?r.push(o):(this.insertRule(o),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))):// We will redeploy the sheet once user will attach it.
this.deployed=!1,o):null}/**
   * Replace a rule in the current stylesheet.
   */,t.replaceRule=function(e,t,n){var r=this.rules.get(e);if(!r)return this.addRule(e,t,n);var o=this.rules.replace(e,t,n);return(o&&this.options.jss.plugins.onProcessRule(o),this.attached)?this.deployed&&this.renderer&&(o?r.renderable&&this.renderer.replaceRule(r.renderable,o):this.renderer.deleteRule(r)):// We will redeploy the sheet once user will attach it.
this.deployed=!1,o}/**
   * Insert rule into the StyleSheet
   */,t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)}/**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */,t.addRules=function(e,t){var n=[];for(var r in e){var o=this.addRule(r,e[r],t);o&&n.push(o)}return n}/**
   * Get a rule by name or selector.
   */,t.getRule=function(e){return this.rules.get(e)}/**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */,t.deleteRule=function(e){var t="object"==typeof e?e:this.rules.get(e);return!!t&&// Style sheet was created without link: true and attached, in this case we
// won't be able to remove the CSS rule from the DOM.
(!this.attached||!!t.renderable)&&(this.rules.remove(t),!this.attached||!t.renderable||!this.renderer||this.renderer.deleteRule(t.renderable))}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Deploy pure CSS string to a renderable.
   */,t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this}/**
   * Update the function values with a new data.
   */,t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this}/**
   * Updates a single rule.
   */,t.updateOne=function(e,t,n){return this.rules.updateOne(e,t,n),this}/**
   * Convert rules to a CSS string.
   */,t.toString=function(e){return this.rules.toString(e)},e}(),hh=/*#__PURE__*/function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return(/**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */t.onCreateRule=function(e,t,n){for(var r=0;r<this.registry.onCreateRule.length;r++){var o=this.registry.onCreateRule[r](e,t,n);if(o)return o}return null}/**
   * Call `onProcessRule` hooks.
   */,t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,n=0;n<this.registry.onProcessRule.length;n++)this.registry.onProcessRule[n](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}}/**
   * Call `onProcessStyle` hooks.
   */,t.onProcessStyle=function(e,t,n){for(var r=0;r<this.registry.onProcessStyle.length;r++)t.style=this.registry.onProcessStyle[r](t.style,t,n)}/**
   * Call `onProcessSheet` hooks.
   */,t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)}/**
   * Call `onUpdate` hooks.
   */,t.onUpdate=function(e,t,n,r){for(var o=0;o<this.registry.onUpdate.length;o++)this.registry.onUpdate[o](e,t,n,r)}/**
   * Call `onChangeValue` hooks.
   */,t.onChangeValue=function(e,t,n){for(var r=e,o=0;o<this.registry.onChangeValue.length;o++)r=this.registry.onChangeValue[o](r,t,n);return r}/**
   * Register a plugin.
   */,t.use=function(e,t){void 0===t&&(t={queue:"external"});var n=this.plugins[t.queue];// Avoids applying same plugin twice, at least based on ref.
-1===n.indexOf(e)&&(n.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(e,t){for(var n in t)n in e&&e[n].push(t[n]);return e},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e)}(),hm=new/*#__PURE__*/(function(){function e(){this.registry=[]}var t=e.prototype;return(/**
   * Register a Style Sheet.
   */t.add=function(e){var t=this.registry,n=e.options.index;if(-1===t.indexOf(e)){if(0===t.length||n>=this.index){t.push(e);return}// Find a position.
for(var r=0;r<t.length;r++)if(t[r].options.index>n){t.splice(r,0,e);return}}}/**
   * Reset the registry.
   */,t.reset=function(){this.registry=[]}/**
   * Remove a Style Sheet.
   */,t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)}/**
   * Convert all attached sheets to a CSS string.
   */,t.toString=function(e){for(var t=void 0===e?{}:e,n=t.attached,r=pg(t,["attached"]),o=pq(r).linebreak,i="",a=0;a<this.registry.length;a++){var l=this.registry[a];(null==n||l.attached===n)&&(i&&(i+=o),i+=l.toString(r))}return i},pU(e,[{key:"index",/**
     * Current highest index number.
     */get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e)}()),hg="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),hv="2f1acc6c3a606b082e5eef5e54414ffb";null==hg[hv]&&(hg[hv]=0);// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
var hy=hg[hv]++,hb=function(e){void 0===e&&(e={});var t=0;return function(n,r){t+=1;var o="",i="";return(r&&(r.options.classNamePrefix&&(i=r.options.classNamePrefix),null!=r.options.jss.id&&(o=String(r.options.jss.id))),e.minify)?""+(i||"c")+hy+o+t:i+n.key+"-"+hy+(o?"-"+o:"")+"-"+t}},hw=function(e){var t;return function(){return t||(t=e()),t}},hx=function(e,t){try{// Support CSSTOM.
if(e.attributeStyleMap)return e.attributeStyleMap.get(t);return e.style.getPropertyValue(t)}catch(e){// IE may throw if property is unknown.
return""}},hS=function(e,t,n){try{var r=n;// Support CSSTOM.
if(Array.isArray(n)&&(r=pB(n)),e.attributeStyleMap)e.attributeStyleMap.set(t,r);else{var o=r?r.indexOf("!important"):-1,i=o>-1?r.substr(0,o-1):r;e.style.setProperty(t,i,o>-1?"important":"")}}catch(e){// IE may throw if property is unknown.
return!1}return!0},hk=function(e,t){try{// Support CSSTOM.
e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(e){}},hE=function(e,t){// Currently works in chrome only.
return e.selectorText=t,e.selectorText===t},hC=hw(function(){return document.querySelector("head")}),hT=hw(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),hP=function(e,t,n){try{"insertRule"in e?e.insertRule(t,n):"appendRule"in e&&e.appendRule(t)}catch(e){return!1}return e.cssRules[n]},h_=function(e,t){var n=e.cssRules.length;// In case previous insertion fails, passed index might be wrong
return void 0===t||t>n?n:t},hN=function(){var e=document.createElement("style");// Without it, IE will have a broken source order specificity if we
return(// insert rules after we insert the style tag.
// It seems to kick-off the source order specificity algorithm.
e.textContent="\n",e)},hR=/*#__PURE__*/function(){// Will be empty if link: true option is not set, because
// it is only for use together with insertRule API.
function e(e){this.getPropertyValue=hx,this.setProperty=hS,this.removeProperty=hk,this.setSelector=hE,this.hasInsertedRules=!1,this.cssRules=[],e&&hm.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},n=t.media,r=t.meta,o=t.element;this.element=o||hN(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),r&&this.element.setAttribute("data-meta",r);var i=hT();i&&this.element.setAttribute("nonce",i)}/**
   * Insert style element into render tree.
   */var t=e.prototype;return t.attach=function(){// In the case the element node is external and it is already in the DOM.
if(!this.element.parentNode&&this.sheet){!/**
 * Insert style element into the DOM.
 */function(e,t){var n=t.insertionPoint,r=/**
 * Find a node before which we can insert the sheet.
 */function(e){var t=hm.registry;if(t.length>0){// Try to insert before the next higher sheet.
var n=/**
 * Find attached sheet with an index higher than the passed one.
 */function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(// Otherwise insert after the last attached.
(n=/**
 * Find attached sheet with the highest index.
 */function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e))&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}// Try to find a comment placeholder if registry is empty.
var r=e.insertionPoint;if(r&&"string"==typeof r){var o=/**
 * Find a comment with "jss" inside.
 */function(e){for(var t=hC(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(8===r.nodeType&&r.nodeValue.trim()===e)return r}return null}(r);if(o)return{parent:o.parentNode,node:o.nextSibling};// If user specifies an insertion point and it can't be found in the document -
}return!1}(t);if(!1!==r&&r.parent){r.parent.insertBefore(e,r.node);return}// Works with iframes and any node types.
if(n&&"number"==typeof n.nodeType){var o=n.parentNode;o&&o.insertBefore(e,n.nextSibling);return}hC().appendChild(e)}(this.element,this.sheet.options);// When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
// most browsers create a new CSSStyleSheet, except of all IEs.
var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}}/**
   * Remove style element from render tree.
   */,t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}}/**
   * Inject CSS string into element.
   */,t.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent="\n"+e.toString()+"\n"}}/**
   * Insert RuleList into an element.
   */,t.insertRules=function(e,t){for(var n=0;n<e.index.length;n++)this.insertRule(e.index[n],n,t)}/**
   * Insert a rule into element.
   */,t.insertRule=function(e,t,n){if(void 0===n&&(n=this.element.sheet),e.rules){var r=n;if("conditional"===e.type||"keyframes"===e.type){var o=h_(n,t);// We need to render the container without children first.
if(!1===(r=hP(n,e.toString({children:!1}),o)))return!1;this.refCssRule(e,o,r)}return this.insertRules(e.rules,r),r}var i=e.toString();if(!i)return!1;var a=h_(n,t),l=hP(n,i,a);return!1!==l&&(this.hasInsertedRules=!0,this.refCssRule(e,a,l),l)},t.refCssRule=function(e,t,n){e.renderable=n,e.options.parent instanceof hp&&this.cssRules.splice(t,0,n)}/**
   * Delete a rule.
   */,t.deleteRule=function(e){var t=this.element.sheet,n=this.indexOf(e);return -1!==n&&(t.deleteRule(n),this.cssRules.splice(n,1),!0)}/**
   * Get index of a CSS Rule.
   */,t.indexOf=function(e){return this.cssRules.indexOf(e)}/**
   * Generate a new CSS rule and replace the existing one.
   */,t.replaceRule=function(e,t){var n=this.indexOf(e);return -1!==n&&(this.element.sheet.deleteRule(n),this.cssRules.splice(n,1),this.insertRule(t,n))}/**
   * Get all rules elements.
   */,t.getRules=function(){return this.element.sheet.cssRules},e}(),hO=0,hA=/*#__PURE__*/function(){function e(e){this.id=hO++,this.version="10.10.0",this.plugins=new hh,this.options={id:{minify:!1},createGenerateId:hb,Renderer:pz?hR:null,plugins:[]},this.generateId=hb({minify:!1});for(var t=0;t<hu.length;t++)this.plugins.use(hu[t],{queue:"internal"});this.setup(e)}/**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=E({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this}/**
   * Create a Style Sheet.
   */,t.createStyleSheet=function(e,t){void 0===t&&(t={});var n=t.index;"number"!=typeof n&&(n=0===hm.index?0:hm.index+1);var r=new hp(e,E({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(r),r}/**
   * Detach the Style Sheet and remove it from the registry.
   */,t.removeStyleSheet=function(e){return e.detach(),hm.remove(e),this}/**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */,t.createRule=function(e,t,n){// Enable rule without name for inline styles.
if(void 0===t&&(t={}),void 0===n&&(n={}),"object"==typeof e)return this.createRule(void 0,e,t);var r=E({},n,{name:e,jss:this,Renderer:this.options.Renderer});r.generateId||(r.generateId=this.generateId),r.classes||(r.classes={}),r.keyframes||(r.keyframes={});var o=pG(e,t,r);return o&&this.plugins.onProcessRule(o),o}/**
   * Register plugin. Passed function will be invoked with a rule instance.
   */,t.use=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){e.plugins.use(t)}),this},e}(),hM=function(e){return new hA(e)},hj=/*#__PURE__*/function(){function e(){this.length=0,this.sheets=new WeakMap}var t=e.prototype;return t.get=function(e){var t=this.sheets.get(e);return t&&t.sheet},t.add=function(e,t){this.sheets.has(e)||(this.length++,this.sheets.set(e,{sheet:t,refs:0}))},t.manage=function(e){var t=this.sheets.get(e);if(t)return 0===t.refs&&t.sheet.attach(),t.refs++,t.sheet;pL(!1,"[JSS] SheetsManager: can't find sheet to manage")},t.unmanage=function(e){var t=this.sheets.get(e);t?t.refs>0&&(t.refs--,0===t.refs&&t.sheet.detach()):pL(!1,"SheetsManager: can't find sheet to unmanage")},pU(e,[{key:"size",get:function(){return this.length}}]),e}(),hI="object"==typeof CSS&&null!=CSS&&"number"in CSS;hM();var hD=Date.now(),hz="fnValues"+hD,hL="fnStyle"+ ++hD,hF=m("flL8Q"),hU=function(e){return e&&e[hF.default]&&e===e[0,hF.default]()},h$=/;\n/,hW=function(e){for(var t={},n=e.split(h$),r=0;r<n.length;r++){var o=(n[r]||"").trim();if(o){var i=o.indexOf(":");if(-1!==i){var a=o.substr(0,i).trim(),l=o.substr(i+1).trim();t[a]=l}}}return t},hV=function(e){"string"==typeof e.style&&(e.style=hW(e.style))},hH="@global",hG="@global ",hY=/*#__PURE__*/function(){function e(e,t,n){for(var r in this.type="global",this.at=hH,this.isProcessed=!1,this.key=e,this.options=n,this.rules=new hf(E({},n,{parent:this})),t)this.rules.add(r,t[r]);this.rules.process()}/**
   * Get a rule.
   */var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)}/**
   * Create and register rule, run plugins.
   */,t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Replace rule, run plugins.
   */,t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Generates a CSS string.
   */,t.toString=function(e){return this.rules.toString(e)},e}(),hB=/*#__PURE__*/function(){function e(e,t,n){this.type="global",this.at=hH,this.isProcessed=!1,this.key=e,this.options=n;var r=e.substr(hG.length);this.rule=n.jss.createRule(r,t,E({},n,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),hq=/\s*,\s*/g;function hK(e,t){for(var n=e.split(hq),r="",o=0;o<n.length;o++)r+=t+" "+n[o].trim(),n[o+1]&&(r+=", ");return r}var hQ=function(e){return e&&"object"==typeof e&&!Array.isArray(e)},hX="extendCurrValue"+Date.now(),hJ=/\s*,\s*/g,hZ=/&/g,h0=/\$([\w-]+)/g,h1=/[A-Z]/g,h2=/^ms-/,h3={};function h4(e){return"-"+e.toLowerCase()}var h5=function(e){if(h3.hasOwnProperty(e))return h3[e];var t=e.replace(h1,h4);return h3[e]=h2.test(t)?"-"+t:t};/**
 * Convert camel cased property names to dash separated.
 */function h6(e){var t={};for(var n in e)t[0===n.indexOf("--")?n:h5(n)]=e[n];return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(h6):t.fallbacks=h6(e.fallbacks)),t}var h8=hI&&CSS?CSS.px:"px",h9=hI&&CSS?CSS.ms:"ms",h7=hI&&CSS?CSS.percent:"%";/**
 * Clones the object and adds a camel cased property version.
 */function me(e){var t=/(-[a-z])/g,n=function(e){return e[1].toUpperCase()},r={};for(var o in e)r[o]=e[o],r[o.replace(t,n)]=e[o];return r}var mt=me({// Animation properties
"animation-delay":h9,"animation-duration":h9,// Background properties
"background-position":h8,"background-position-x":h8,"background-position-y":h8,"background-size":h8,// Border Properties
border:h8,"border-bottom":h8,"border-bottom-left-radius":h8,"border-bottom-right-radius":h8,"border-bottom-width":h8,"border-left":h8,"border-left-width":h8,"border-radius":h8,"border-right":h8,"border-right-width":h8,"border-top":h8,"border-top-left-radius":h8,"border-top-right-radius":h8,"border-top-width":h8,"border-width":h8,"border-block":h8,"border-block-end":h8,"border-block-end-width":h8,"border-block-start":h8,"border-block-start-width":h8,"border-block-width":h8,"border-inline":h8,"border-inline-end":h8,"border-inline-end-width":h8,"border-inline-start":h8,"border-inline-start-width":h8,"border-inline-width":h8,"border-start-start-radius":h8,"border-start-end-radius":h8,"border-end-start-radius":h8,"border-end-end-radius":h8,// Margin properties
margin:h8,"margin-bottom":h8,"margin-left":h8,"margin-right":h8,"margin-top":h8,"margin-block":h8,"margin-block-end":h8,"margin-block-start":h8,"margin-inline":h8,"margin-inline-end":h8,"margin-inline-start":h8,// Padding properties
padding:h8,"padding-bottom":h8,"padding-left":h8,"padding-right":h8,"padding-top":h8,"padding-block":h8,"padding-block-end":h8,"padding-block-start":h8,"padding-inline":h8,"padding-inline-end":h8,"padding-inline-start":h8,// Mask properties
"mask-position-x":h8,"mask-position-y":h8,"mask-size":h8,// Width and height properties
height:h8,width:h8,"min-height":h8,"max-height":h8,"min-width":h8,"max-width":h8,// Position properties
bottom:h8,left:h8,top:h8,right:h8,inset:h8,"inset-block":h8,"inset-block-end":h8,"inset-block-start":h8,"inset-inline":h8,"inset-inline-end":h8,"inset-inline-start":h8,// Shadow properties
"box-shadow":h8,"text-shadow":h8,// Column properties
"column-gap":h8,"column-rule":h8,"column-rule-width":h8,"column-width":h8,// Font and text properties
"font-size":h8,"font-size-delta":h8,"letter-spacing":h8,"text-decoration-thickness":h8,"text-indent":h8,"text-stroke":h8,"text-stroke-width":h8,"word-spacing":h8,// Motion properties
motion:h8,"motion-offset":h8,// Outline properties
outline:h8,"outline-offset":h8,"outline-width":h8,// Perspective properties
perspective:h8,"perspective-origin-x":h7,"perspective-origin-y":h7,// Transform properties
"transform-origin":h7,"transform-origin-x":h7,"transform-origin-y":h7,"transform-origin-z":h7,// Transition properties
"transition-delay":h9,"transition-duration":h9,// Alignment properties
"vertical-align":h8,"flex-basis":h8,// Some random properties
"shape-margin":h8,size:h8,gap:h8,// Grid properties
grid:h8,"grid-gap":h8,"row-gap":h8,"grid-row-gap":h8,"grid-column-gap":h8,"grid-template-rows":h8,"grid-template-columns":h8,"grid-auto-rows":h8,"grid-auto-columns":h8,// Not existing properties.
// Used to avoid issues with jss-plugin-expand integration.
"box-shadow-x":h8,"box-shadow-y":h8,"box-shadow-blur":h8,"box-shadow-spread":h8,"font-line-height":h8,"text-shadow-x":h8,"text-shadow-y":h8,"text-shadow-blur":h8});/**
 * Recursive deep style passing function
 */function mn(e,t,n){if(null==t)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=mn(e,t[r],n);else if("object"==typeof t){if("fallbacks"===e)for(var o in t)t[o]=mn(o,t[o],n);else for(var i in t)t[i]=mn(e+"-"+i,t[i],n)}else if("number"==typeof t&&!1===isNaN(t)){var a=n[e]||mt[e];// Add the unit if available, except for the special case of 0px.
return a&&!(0===t&&a===h8)?"function"==typeof a?a(t).toString():""+t+a:t.toString()}return t}var mr=/**
 * Add unit to numeric values.
 */function(e){void 0===e&&(e={});var t=me(e);return{onProcessStyle:function(e,n){if("style"!==n.type)return e;for(var r in e)e[r]=mn(r,e[r],t);return e},onChangeValue:function(e,n){return mn(n,e,t)}}},mo={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},mi={position:!0,// background-position
size:!0// background-size
},ma={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,// Needed for avoiding comilation issues with jss-plugin-camel-case
delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,// Needed to avoid compilation issues with jss-plugin-camel-case
delay:null,"iteration-count":null,iterationCount:null,// Needed to avoid compilation issues with jss-plugin-camel-case
direction:null,"fill-mode":null,fillMode:null,// Needed to avoid compilation issues with jss-plugin-camel-case
"play-state":null,playState:null// Needed to avoid compilation issues with jss-plugin-camel-case
},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},ml={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height",// Needed to avoid compilation issues with jss-plugin-camel-case
"line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};/**
 * Convert object to array.
 */function ms(e,t,n,r,o){if(!(ma[t]||ml[t]))return[];var i=[];// Check if exists any non-standard property
// Pass throught all standart props
if(ml[t]&&(e=/**
 * Convert custom properties values to styles adding them to rule directly
 */function(e,t,n,r){for(var o in n){var i=n[o];// If current property doesn't exist already in rule - add new one
if(void 0!==e[o]&&(r||!t.prop(i))){var a,l=mu(((a={})[i]=e[o],a),t)[i];// Add style directly in rule
r?t.style.fallbacks[i]=l:t.style[i]=l}// Delete converted property to avoid double converting
delete e[o]}return e}(e,n,ml[t],r)),Object.keys(e).length)for(var a in ma[t]){if(e[a]){Array.isArray(e[a])?i.push(null===mi[a]?e[a]:e[a].join(" ")):i.push(e[a]);continue}// Add default value from props config.
null!=ma[t][a]&&i.push(ma[t][a])}return!i.length||o?i:[i]}/**
 * Detect if a style needs to be converted.
 */function mu(e,t,n){for(var r in e){var o=e[r];if(Array.isArray(o)){if(!Array.isArray(o[0])){if("fallbacks"===r){for(var i=0;i<e.fallbacks.length;i++)e.fallbacks[i]=mu(e.fallbacks[i],t,!0);continue}e[r]=/**
 * Convert array to nested array, if needed
 */function e(t,n,r,o){return null==r[n]?t:0===t.length?[]:Array.isArray(t[0])?e(t[0],n,r,o):"object"==typeof t[0]?t.map(function(e){return ms(e,n,o,!1,!0)}):[t]}(o,r,mo,t),e[r].length||delete e[r]}}else if("object"==typeof o){if("fallbacks"===r){e.fallbacks=mu(e.fallbacks,t,!0);continue}e[r]=ms(o,r,t,n),e[r].length||delete e[r]}else""===e[r]&&delete e[r]}return e}function mc(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}// Export javascript style and css style vendor prefixes.
var md="",mf="",mp="",mh="",mm=pz&&"ontouchstart"in document.documentElement;if(pz){// Order matters. We need to check Webkit the last one because
// other vendors use to add Webkit prefixes to some properties
var mg={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},mv=document.createElement("p").style;for(var my in mg)if(my+"Transform" in mv){md=my,mf=mg[my];break}"Webkit"===md&&"msHyphens"in mv&&(md="ms",mf=mg.ms,mh="edge"),"Webkit"===md&&"-apple-trailing-word"in mv&&(mp="apple")}/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */var mb={js:md,css:mf,vendor:mp,browser:mh,isTouch:mm},mw=/[-\s]+(.)?/g;/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */function mx(e,t){return t?t.toUpperCase():""}/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function mS(e){return e.replace(mw,mx)}/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function mk(e){return mS("-"+e)}var mE={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"// 'align-self' is handled by 'align-self' plugin.
},mC={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},mT=Object.keys(mC),mP=function(e){return mb.css+e},m_=[{noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===mb.js?"-webkit-"+e:mb.css+e)}},{noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===mb.js?mb.css+"print-"+e:e)}},{noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===mb.js){var n="mask-image";if(mS(n) in t)return e;if(mb.js+mk(n) in t)return mb.css+e}return e}},{noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==mb.vendor||mb.isTouch?e:mb.css+e)}},{noPrefill:["transform"],supportedProperty:function(e,t,n){return"transform"===e&&(n.transform?e:mb.css+e)}},{noPrefill:["transition"],supportedProperty:function(e,t,n){return"transition"===e&&(n.transition?e:mb.css+e)}},{noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===mb.js||"ms"===mb.js&&"edge"!==mb.browser?mb.css+e:e)}},{noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===mb.js||"ms"===mb.js||"apple"===mb.vendor?mb.css+e:e)}},{supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===mb.js?"WebkitColumn"+mk(e) in t&&mb.css+"column-"+e:"Moz"===mb.js&&"page"+mk(e) in t&&"page-"+e)}},{supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===mb.js)return e;var n=e.replace("-inline","");return mb.js+mk(n) in t&&mb.css+n}},{supportedProperty:function(e,t){return mS(e) in t&&e}},{supportedProperty:function(e,t){var n=mk(e);// Return custom CSS variable without prefixing.
return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:mb.js+n in t?mb.css+e:"Webkit"!==mb.js&&"Webkit"+n in t&&"-webkit-"+e// Return already prefixed value without prefixing.
}},{supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===mb.js?""+mb.css+e:e)}},{supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===mb.js?mb.css+"scroll-chaining":e)}},{supportedProperty:function(e,t){var n=mE[e];return!!n&&mb.js+mk(n) in t&&mb.css+n}},{supportedProperty:function(e,t,n){var r=n.multiple;if(mT.indexOf(e)>-1){var o=mC[e];if(!Array.isArray(o))return mb.js+mk(o) in t&&mb.css+o;if(!r)return!1;for(var i=0;i<o.length;i++)if(!(mb.js+mk(o[0]) in t))return!1;return o.map(mP)}return!1}}],mN=m_.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),mR=m_.filter(function(e){return e.noPrefill}).reduce(function(e,t){var n;return e.push.apply(e,function(e){if(Array.isArray(e))return mc(e)}(n=t.noPrefill)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return mc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mc(e,t)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e},[]),mO={};// Support old flex spec from 2012.
if(pz){u=document.createElement("p");// We test every property on vendor prefix requirement.
// Once tested, result is cached. It gives us up to 70% perf boost.
// http://jsperf.com/element-style-object-access-vs-plain-object
//
// Prefill cache with known css properties to reduce amount of
// properties we need to feature test at runtime.
// http://davidwalsh.name/vendor-prefix
var mA=window.getComputedStyle(document.documentElement,"");for(var mM in mA)isNaN(mM)||(mO[mA[mM]]=mA[mM]);// Properties that cannot be correctly detected using the
// cache prefill method.
mR.forEach(function(e){return delete mO[e]})}/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */function mj(e,t){// For server-side rendering.
if(void 0===t&&(t={}),!u)return e;// Remove cache for benchmark tests or return property from the cache.
if(null!=mO[e])return mO[e];("transition"===e||"transform"===e)&&(t[e]=e in u.style);// Find a plugin for current prefix property.
for(var n=0;n<mN.length&&(mO[e]=mN[n](e,u.style,t),!mO[e]);n++);// Reset styles for current property.
// Firefox can even throw an error for invalid properties, e.g., "0".
try{u.style[e]=""}catch(e){return!1}return mO[e]}var mI={},mD={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},mz=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */function mL(e,t,n){return"var"===t?"var":"all"===t?"all":"all"===n?", all":(t?mj(t):", "+mj(n))||t||n}/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */function mF(e,t){// For server-side rendering.
var n=t;if(!c||"content"===e)return t;// It is a string or a number as a string like '1'.
// We want only prefixable values here.
// eslint-disable-next-line no-restricted-globals
if("string"!=typeof n||!isNaN(parseInt(n,10)))return n;// Create cache key for current value.
var r=e+n;// Remove cache for benchmark tests or return value from cache.
if(null!=mI[r])return mI[r];// IE can even throw an error in some cases, for e.g. style.content = 'bar'.
try{// Test value as it is.
c.style[e]=n}catch(e){return(// Return false if value not supported.
mI[r]=!1,!1)}// If 'transition' or 'transition-property' property.
if(mD[e])n=n.replace(mz,mL);else if(""===c.style[e]&&("-ms-flex"===// Value with a vendor prefix.
(n=mb.css+n)&&(c.style[e]="-ms-flexbox"),c.style[e]=n,""===c.style[e]))return mI[r]=!1,!1;// Reset styles for current property.
return c.style[e]="",mI[r]=n,mI[r]}pz&&(c=document.createElement("p"));var mU=/**
 * Sort props by length.
 */function(){var e=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length};return{onProcessStyle:function(t,n){if("style"!==n.type)return t;for(var r={},o=Object.keys(t).sort(e),i=0;i<o.length;i++)r[o[i]]=t[o[i]];return r}}},m$=function(e){var t;return void 0===e&&(e={}),{plugins:[{onCreateRule:function(e,t,n){if("function"!=typeof t)return null;var r=pG(e,{},n);return r[hL]=t,r},onProcessStyle:function(e,t){// We need to extract function values from the declaration, so that we can keep core unaware of them.
// We need to do that only once.
// We don't need to extract functions on each style update, since this can happen only once.
// We don't support function values inside of function rules.
if(hz in t||hL in t)return e;var n={};for(var r in e){var o=e[r];"function"==typeof o&&(delete e[r],n[r]=o)}return t[hz]=n,e},onUpdate:function(e,t,n,r){var o=t[hL];// If we have a style function, the entire rule is dynamic and style object
// will be returned from that function.
o&&// Empty object will remove all currently defined props
// in case function rule returns a falsy value.
(t.style=o(e)||{});var i=t[hz];// If we have a fn values map, it is a rule with function values.
if(i)for(var a in i)t.prop(a,i[a](e),r)}},(t=e.observable,{onCreateRule:function(e,n,r){if(!hU(n))return null;var o=pG(e,{},r);// TODO
return(// Call `stream.subscribe()` returns a subscription, which should be explicitly
// unsubscribed from when we know this sheet is no longer needed.
n.subscribe(function(e){for(var n in e)o.prop(n,e[n],t)}),o)},onProcessRule:function(e){if(!e||"style"===e.type){var n=e.style,r=function(r){var o=n[r];if(!hU(o))return"continue";delete n[r],o.subscribe({next:function(n){e.prop(r,n,t)}})};for(var o in n)if("continue"===r(o))continue}}}),{onProcessRule:hV},{onCreateRule:function(e,t,n){if(!e)return null;if(e===hH)return new hY(e,t,n);if("@"===e[0]&&e.substr(0,hG.length)===hG)return new hB(e,t,n);var r=n.parent;return r&&("global"===r.type||r.options.parent&&"global"===r.options.parent.type)&&(n.scoped=!1),n.selector||!1!==n.scoped||(n.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(function(e,t){var n=e.options,r=e.style,o=r?r[hH]:null;if(o){for(var i in o)t.addRule(i,o[i],E({},n,{selector:hK(i,e.selector)}));delete r[hH]}}(e,t),function(e,t){var n=e.options,r=e.style;for(var o in r)if("@"===o[0]&&o.substr(0,hH.length)===hH){var i=hK(o.substr(hH.length),e.selector);t.addRule(i,r[o],E({},n,{selector:i})),delete r[o]}}(e,t))}},{onProcessStyle:function(e,t,n){return"extend"in e?/**
 * Recursively extend styles.
 */function e(t,n,r,o){return void 0===o&&(o={}),function(t,n,r,o){if("string"==typeof t.extend){if(!r)return;var i=r.getRule(t.extend);if(!i||i===n)return;var a=i.options.parent;a&&e(a.rules.raw[t.extend],n,r,o);return}// Extend using an array.
if(Array.isArray(t.extend)){for(var l=0;l<t.extend.length;l++){var s=t.extend[l];e("string"==typeof s?E({},t,{extend:s}):t.extend[l],n,r,o)}return}// Extend is a style object.
for(var u in t.extend){if("extend"===u){e(t.extend.extend,n,r,o);continue}if(hQ(t.extend[u])){u in o||(o[u]={}),e(t.extend[u],n,r,o[u]);continue}o[u]=t.extend[u]}}(t,n,r,o),function(t,n,r,o){// Copy base style.
for(var i in t)if("extend"!==i){if(hQ(o[i])&&hQ(t[i])){e(t[i],n,r,o[i]);continue}if(hQ(t[i])){o[i]=e(t[i],n,r);continue}o[i]=t[i]}}(t,n,r,o),o}(e,t,n):e},onChangeValue:function(e,t,n){if("extend"!==t)return e;// Value is empty, remove properties set previously.
if(null==e||!1===e){for(var r in n[hX])n.prop(r,null);return n[hX]=null,null}if("object"==typeof e){for(var o in e)n.prop(o,e[o]);n[hX]=e}// Make sure we don't set the value in the core.
return null}},{onProcessStyle:function(e,t,n){if("style"!==t.type)return e;var r,o,i=t.options.parent;for(var a in e){var l=-1!==a.indexOf("&"),s="@"===a[0];if(l||s){if(r=function(e,t,n){// Options has been already created, now we only increase index.
if(n)return E({},n,{index:n.index+1});var r=e.options.nestingLevel;r=void 0===r?1:r+1;var o=E({},e.options,{nestingLevel:r,index:t.indexOf(e)+1// We don't need the parent name to be set options for chlid.
});return delete o.name,o}(t,i,r),l){var u=function(e,t){for(var n=t.split(hJ),r=e.split(hJ),o="",i=0;i<n.length;i++)for(var a=n[i],l=0;l<r.length;l++){var s=r[l];o&&(o+=", "),o+=-1!==s.indexOf("&")?s.replace(hZ,a):a+" "+s}return o}(a,t.selector);// Lazily create the ref replacer function just once for
o||(o=// Get a function to be used for $ref replacement.
function(e,t){return function(n,r){var o=e.getRule(r)||t&&t.getRule(r);return o?o.selector:r}}(i,n)),u=u.replace(h0,o);var c=t.key+"-"+a;"replaceRule"in i?i.replaceRule(c,e[a],E({},r,{selector:u})):i.addRule(c,e[a],E({},r,{selector:u}))}else s&&i.addRule(a,{},r).addRule(t.key,e[a],{selector:t.selector});delete e[a]}}return e}},{onProcessStyle:function(e,t){return"composes"in e&&(/**
 * Set selector.
 *
 * @param original rule
 * @param className class string
 * @return flag indicating function was successfull or not
 */function e(t,n){// Skip falsy values
if(!n)return!0;// Support array of class names `{composes: ['foo', 'bar']}`
if(Array.isArray(n)){for(var r=0;r<n.length;r++)if(!e(t,n[r]))return!1;return!0}// Support space separated class names `{composes: 'foo bar'}`
if(n.indexOf(" ")>-1)return e(t,n.split(" "));var o=t.options.parent;// It is a ref to a local rule.
if("$"===n[0]){var i=o.getRule(n.substr(1));return!!i&&i!==t&&(o.classes[t.key]+=" "+o.classes[i.key],!0)}return o.classes[t.key]+=" "+n,!0}(t,e.composes),delete e.composes),e}},{onProcessStyle:function(e){if(Array.isArray(e)){// Handle rules like @font-face, which can have multiple styles in an array
for(var t=0;t<e.length;t++)e[t]=h6(e[t]);return e}return h6(e)},onChangeValue:function(e,t,n){if(0===t.indexOf("--"))return e;var r=h5(t);// There was no camel case in place
return t===r?e:(n.prop(r,e),null)}},mr(e.defaultUnit),{onProcessStyle:function(e,t){if(!e||"style"!==t.type)return e;if(Array.isArray(e)){// Pass rules one by one and reformat them
for(var n=0;n<e.length;n++)e[n]=mu(e[n],t);return e}return mu(e,t)}},{onProcessRule:function(e){if("keyframes"===e.type){var t;e.at=// Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
"-"===(t=e.at)[1]||"ms"===mb.js?t:"@"+mb.css+"keyframes"+t.substr(10)// No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
}},onProcessStyle:function(e,t){return"style"!==t.type?e:function e(t){for(var n in t){var r=t[n];if("fallbacks"===n&&Array.isArray(r)){t[n]=r.map(e);continue}var o=!1,i=mj(n);i&&i!==n&&(o=!0);var a=!1,l=mF(i,pB(r));l&&l!==r&&(a=!0),(o||a)&&(o&&delete t[n],t[i||n]=l||r)}return t}(e)},onChangeValue:function(e,t){return mF(t,pB(e))||e}},mU()]}},mW=hM(m$()),mV=function(e){void 0===e&&(e=mW);var t,n=new Map,r=0,o=function(){return(!t||t.rules.index.length>1e4)&&(t=e.createStyleSheet().attach()),t};function i(){// eslint-disable-next-line prefer-rest-params
var e=arguments,t=JSON.stringify(e),i=n.get(t);// We can avoid the need for stringification with a babel plugin,
if(i)return i.className;var a=[];// Flatten arguments which can be
// - style objects
// - array of style objects
// - arrays of style objects
for(var l in e){var s=e[l];if(!Array.isArray(s)){a.push(s);continue}for(var u=0;u<s.length;u++)a.push(s[u])}for(var c={},d=[],f=0;f<a.length;f++){var p=a[f];if(p){var h=p;// It can be a class name that css() has previously generated.
if("string"==typeof p){// eslint-disable-next-line no-shadow
var m=n.get(p);m&&(m.labels.length&&d.push.apply(d,m.labels),h=m.style)}h.label&&-1===d.indexOf(h.label)&&d.push(h.label),Object.assign(c,h)}}delete c.label;var g=(0===d.length?"css":d.join("-"))+"-"+r++;o().addRule(g,c);var v=o().classes[g],y={style:c,labels:d,className:v};return n.set(t,y),n.set(v,y),v}// For testing only.
return i.getSheet=o,i}(),mH=Number.MIN_SAFE_INTEGER||-1e9,mG=(0,b.createContext)({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!pz}),mY=new Map,mB=function(e,t){// If `managers` map is present in the context, we use it in order to
// let JssProvider reset them when new response has to render server-side.
var n=e.managers;if(n)return n[t]||(n[t]=new hj),n[t];var r=mY.get(t);return r||(r=new hj,mY.set(t,r)),r},mq=function(e){var t=e.sheet,n=e.context,r=e.index,o=e.theme;t&&(mB(n,r).manage(o),n.registry&&n.registry.add(t))},mK=function(e){e.sheet&&mB(e.context,e.index).unmanage(e.theme)},mQ=hM(m$()),mX=new WeakMap,mJ=function(e){return mX.get(e)},mZ=function(e,t){mX.set(e,t)},m0=function(e){var t=e.styles;return"function"!=typeof t?t:t(e.theme)},m1=function(e){if(!e.context.disableStylesGeneration){var t,n,r,o,i=mB(e.context,e.index),a=i.get(e.theme);if(a)return a;var l=e.context.jss||mQ,s=m0(e),u=/**
 * Extracts a styles object with only props that contain function values.
 */function e(t){var n=null;for(var r in t){var o=t[r],i=typeof o;if("function"===i)n||(n={}),n[r]=o;else if("object"===i&&null!==o&&!Array.isArray(o)){var a=e(o);a&&(n||(n={}),n[r]=a)}}return n}(s),c=l.createStyleSheet(s,(t=null!==u,e.context.id&&null!=e.context.id.minify&&(n=e.context.id.minify),r=e.context.classNamePrefix||"",e.name&&!n&&(r+=e.name.replace(/\s/g,"-")+"-"),o="",e.name&&(o=e.name+", "),o+="function"==typeof e.styles?"Themed":"Unthemed",E({},e.sheetOptions,{index:e.index,meta:o,classNamePrefix:r,link:t,generateId:e.sheetOptions&&e.sheetOptions.generateId?e.sheetOptions.generateId:e.context.generateId})));return mZ(c,{dynamicStyles:u,styles:s}),i.add(e.theme,c),c}},m2=function(e,t){// Loop over each dynamic rule and remove the dynamic rule
// We can't just remove the whole sheet as this has all of the rules for every component instance
for(var n in t)e.deleteRule(t[n])},m3=function(e,t,n){// Loop over each dynamic rule and update it
// We can't just update the whole sheet as this has all of the rules for every component instance
for(var r in n)t.updateOne(n[r],e)},m4=function(e,t){var n=mJ(e);if(n){var r={};// Loop over each dynamic rule and add it to the stylesheet
for(var o in n.dynamicStyles)for(var i=e.rules.index.length,a=e.addRule(o,n.dynamicStyles[o]),l=i;l<e.rules.index.length;l++){var s=e.rules.index[l];e.updateOne(s,t),// can correctly concat the dynamic class with the static one
r[a===s?o:s.key]=s}return r}},m5=function(e,t){if(!t)return e.classes;var n=mJ(e);if(!n)return e.classes;var r={};for(var o in n.styles)r[o]=e.classes[o],o in t&&(r[o]+=" "+e.classes[t[o].key]);return r};function m6(e){return e?b.useEffect:/*@__PURE__*/f(b).useInsertionEffect||b.useLayoutEffect}var m8={},m9=function(e,t){void 0===t&&(t={});var n=t,r=n.index,o=void 0===r?mH++:r,i=n.theming,a=n.name,l=pg(n,["index","theming","name"]),s=i&&i.context||pj,u={};return function(t){var n,r=(0,b.useRef)(!0),i=(0,b.useContext)(mG),c=(n=t&&t.theme,"function"==typeof e&&(n||(0,b.useContext)(s))||m8),d=(0,b.useMemo)(function(){var n=m1({context:i,styles:e,name:a,theme:c,index:o,sheetOptions:l});return n&&i.isSSR&&mq({index:o,context:i,sheet:n,theme:c}),[n,n?m4(n,t):null]},[i,c]),f=d[0],p=d[1];m6(i.isSSR)(function(){// We only need to update the rules on a subsequent update and not in the first mount
f&&p&&!r.current&&m3(t,f,p)},[t]),m6(i.isSSR)(function(){return f&&mq({index:o,context:i,sheet:f,theme:c}),function(){f&&(mK({index:o,context:i,sheet:f,theme:c}),p&&m2(f,p))}},[f]);var h=(0,b.useMemo)(function(){return f&&p?m5(f,p):u},[f,p]);return(0,b.useDebugValue)(h),(0,b.useDebugValue)(c===m8?"No theme":c),(0,b.useEffect)(function(){r.current=!1}),h}};Symbol("react-jss-styled"),void 0===l&&(l=mV);var m7={},fZ=m("8ThvE"),ge={};ge=/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function(e){var t=pn(e),n=t%1;return t==t?n?t-n:t:0};var gt={},gn={},gr={};gr=/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};var go={};go=Array.isArray;/** Used as references for various `Number` constants. */var gi=1/0,ga=fJ?fJ.prototype:void 0,gl=ga?ga.toString:void 0;gn=/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function e(t){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(go(t))return gr(t,e)+"";if(ps(t))return gl?gl.call(t):"";var n=t+"";return"0"==n&&1/t==-gi?"-0":n},gt=/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function(e){return null==e?"":gn(e)};/* Built-in method references for those with the same name as other `lodash` methods. */var gs=fZ.isFinite,gu=Math.min;o=Math.round,m7=function(e,t){if(e=pr(e),(t=null==t?0:gu(ge(t),292))&&gs(e)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var n=(gt(e)+"e").split("e"),r=o(n[0]+"e"+(+n[1]+t));return+((n=(gt(r)+"e").split("e"))[0]+"e"+(+n[1]-t))}return o(e)};var gc={},gd={},gf={},gp={},gh={},gm={};gm=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0};var gg={},gv={};gv=/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t){for(var n=e.length;n--;)if(fq(e[n][0],t))return n;return -1};/** Built-in value references. */var gy=Array.prototype.splice;gg=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=gv(t,e);return!(n<0)&&(n==t.length-1?t.pop():gy.call(t,n,1),--this.size,!0)};var gb={};gb=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,n=gv(t,e);return n<0?void 0:t[n][1]};var gw={};gw=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return gv(this.__data__,e)>-1};var gx={};/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function gS(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gx=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var n=this.__data__,r=gv(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},// Add methods to `ListCache`.
gS.prototype.clear=gm,gS.prototype.delete=gg,gS.prototype.get=gb,gS.prototype.has=gw,gS.prototype.set=gx,gh=gS;var gk={};gk=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new gh,this.size=0};var gE={};gE=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var gC={};gC=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)};var gT={};gT=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)};var gP={},g_={},gN={},gR={},gO={},gA={},fZ=m("8ThvE");gA=fZ["__core-js_shared__"];/** Used to detect methods masquerading as native. */var gM=(s=/[^.]+$/.exec(gA&&gA.keys&&gA.keys.IE_PROTO||""))?"Symbol(src)_1."+s:"";gO=/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function(e){return!!gM&&gM in e};var gj={},gI=Function.prototype.toString;gj=/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return gI.call(e)}catch(e){}try{return e+""}catch(e){}}return""};/** Used to detect host constructors (Safari). */var gD=/^\[object .+?Constructor\]$/,gz=Object.prototype,gL=Function.prototype.toString,gF=gz.hasOwnProperty,gU=RegExp("^"+gL.call(gF).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");gR=/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function(e){return!(!f9(e)||gO(e))&&(fQ(e)?gU:gD).test(gj(e))};var g$={};g$=/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function(e,t){return null==e?void 0:e[t]},gN=/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function(e,t){var n=g$(e,t);return gR(n)?n:void 0};var fZ=m("8ThvE");g_=gN(fZ,"Map");var gW={},gV={},gH={},gG={},gY={};gY=gN(Object,"create"),gG=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=gY?gY(null):{},this.size=0};var gB={};gB=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};var gq={},gK=Object.prototype.hasOwnProperty;gq=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(gY){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return gK.call(t,e)?t[e]:void 0};var gQ={},gX=Object.prototype.hasOwnProperty;gQ=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return gY?void 0!==t[e]:gX.call(t,e)};var gJ={};/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function gZ(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gJ=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=gY&&void 0===t?"__lodash_hash_undefined__":t,this},// Add methods to `Hash`.
gZ.prototype.clear=gG,gZ.prototype.delete=gB,gZ.prototype.get=gq,gZ.prototype.has=gQ,gZ.prototype.set=gJ,gH=gZ,gV=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new gH,map:new(g_||gh),string:new gH}};var g0={},g1={},g2={};g2=/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},g1=/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function(e,t){var n=e.__data__;return g2(t)?n["string"==typeof t?"string":"hash"]:n.map},g0=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=g1(this,e).delete(e);return this.size-=t?1:0,t};var g3={};g3=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return g1(this,e).get(e)};var g4={};g4=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return g1(this,e).has(e)};var g5={};/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function g6(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function g8(e){var t=this.__data__=new gh(e);this.size=t.size}g5=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var n=g1(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},// Add methods to `MapCache`.
g6.prototype.clear=gV,g6.prototype.delete=g0,g6.prototype.get=g3,g6.prototype.has=g4,g6.prototype.set=g5,gW=g6,gP=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var n=this.__data__;if(n instanceof gh){var r=n.__data__;if(!g_||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new gW(r)}return n.set(e,t),this.size=n.size,this},// Add methods to `Stack`.
g8.prototype.clear=gk,g8.prototype.delete=gE,g8.prototype.get=gC,g8.prototype.has=gT,g8.prototype.set=gP,gp=g8;var g9={},g7={},ve={};ve=/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var vt={};/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function vn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new gW;++t<n;)this.add(e[t])}vt=/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function(e){return this.__data__.has(e)},// Add methods to `SetCache`.
vn.prototype.add=vn.prototype.push=ve,vn.prototype.has=vt,g7=vn;var vr={};vr=/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var vo={};vo=/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e,t){return e.has(t)},g9=/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;// Check that cyclic values are equal.
var u=i.get(e),c=i.get(t);if(u&&c)return u==t&&c==e;var d=-1,f=!0,p=2&n?new g7:void 0;// Ignore non-index properties.
for(i.set(e,t),i.set(t,e);++d<l;){var h=e[d],m=t[d];if(r)var g=a?r(m,h,d,t,e,i):r(h,m,d,e,t,i);if(void 0!==g){if(g)continue;f=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(p){if(!vr(t,function(e,t){if(!vo(p,t)&&(h===e||o(h,e,n,r,i)))return p.push(t)})){f=!1;break}}else if(!(h===m||o(h,m,n,r,i))){f=!1;break}}return i.delete(e),i.delete(t),f};var vi={},va={},fZ=m("8ThvE");va=fZ.Uint8Array;var vl={};vl=/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n};var vs={};vs=/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n};/** Used to convert symbols to primitives and strings. */var vu=fJ?fJ.prototype:void 0,vc=vu?vu.valueOf:void 0;vi=/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!i(new va(e),new va(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return fq(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case"[object Map]":var l=vl;case"[object Set]":var s=1&r;if(l||(l=vs),e.size!=t.size&&!s)break;// Assume cyclic values are equal.
var u=a.get(e);if(u)return u==t;r|=2,// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=g9(l(e),l(t),r,o,i,a);return a.delete(e),c;case"[object Symbol]":if(vc)return vc.call(e)==vc.call(t)}return!1};var vd={},vf={},vp={},vh={};vh=/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},vp=/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e,t,n){var r=t(e);return go(e)?r:vh(r,n(e))};var vm={},vg={};vg=/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var vv={};vv=/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function(){return[]};/** Built-in value references. */var vy=Object.prototype.propertyIsEnumerable,vb=Object.getOwnPropertySymbols;vm=vb?function(e){return null==e?[]:(e=Object(e),vg(vb(e),function(t){return vy.call(e,t)}))}:vv;var vw={},vx={},vS={};vS=/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var vk={},vE={};vE=/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function(e){return pu(e)&&"[object Arguments]"==fX(e)};/** Used for built-in method references. */var vC=Object.prototype,vT=vC.hasOwnProperty,vP=vC.propertyIsEnumerable;vk=vE(function(){return arguments}())?vE:function(e){return pu(e)&&vT.call(e,"callee")&&!vP.call(e,"callee")};var v_=m("7HKs8"),vN={},vR={},vO={};vO["[object Float32Array]"]=vO["[object Float64Array]"]=vO["[object Int8Array]"]=vO["[object Int16Array]"]=vO["[object Int32Array]"]=vO["[object Uint8Array]"]=vO["[object Uint8ClampedArray]"]=vO["[object Uint16Array]"]=vO["[object Uint32Array]"]=!0,vO["[object Arguments]"]=vO["[object Array]"]=vO["[object ArrayBuffer]"]=vO["[object Boolean]"]=vO["[object DataView]"]=vO["[object Date]"]=vO["[object Error]"]=vO["[object Function]"]=vO["[object Map]"]=vO["[object Number]"]=vO["[object Object]"]=vO["[object RegExp]"]=vO["[object Set]"]=vO["[object String]"]=vO["[object WeakMap]"]=!1,vR=/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return pu(e)&&f7(e.length)&&!!vO[fX(e)]};var vA={};vA=/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function(e){return function(t){return e(t)}};var vM=m("7vc1R"),vj=vM&&vM.isTypedArray;vN=vj?vA(vj):vR;/** Used to check objects for own properties. */var vI=Object.prototype.hasOwnProperty;vx=/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var n=go(e),r=!n&&vk(e),o=!n&&!r&&v_(e),i=!n&&!r&&!o&&vN(e),a=n||r||o||i,l=a?vS(e.length,String):[],s=l.length;for(var u in e)(t||vI.call(e,u))&&!(a&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==u||// Node.js 0.10 has enumerable non-index properties on buffers.
o&&("offset"==u||"parent"==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||// Skip index properties.
pe(u,s)))&&l.push(u);return l};var vD={},vz={},vL=Object.prototype;vz=/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||vL)};var vF={};i=Object.keys,a=Object,vF=function(e){return i(a(e))};/** Used to check objects for own properties. */var vU=Object.prototype.hasOwnProperty;vD=/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!vz(e))return vF(e);var t=[];for(var n in Object(e))vU.call(e,n)&&"constructor"!=n&&t.push(n);return t},vw=/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function(e){return fK(e)?vx(e):vD(e)},vf=/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e){return vp(e,vw,vm)};/** Used to check objects for own properties. */var v$=Object.prototype.hasOwnProperty;vd=/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=1&n,l=vf(e),s=l.length;if(s!=vf(t).length&&!a)return!1;for(var u=s;u--;){var c=l[u];if(!(a?c in t:v$.call(t,c)))return!1}// Check that cyclic values are equal.
var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var p=!0;i.set(e,t),i.set(t,e);for(var h=a;++u<s;){var m=e[c=l[u]],g=t[c];if(r)var v=a?r(g,m,c,t,e,i):r(m,g,c,e,t,i);// Recursively compare objects (susceptible to call stack limits).
if(!(void 0===v?m===g||o(m,g,n,r,i):v)){p=!1;break}h||(h="constructor"==c)}if(p&&!h){var y=e.constructor,b=t.constructor;// Non `Object` object instances with different constructors are not equal.
y!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(e),i.delete(t),p};var vW={},vV={},fZ=m("8ThvE");vV=gN(fZ,"DataView");var vH={},fZ=m("8ThvE");vH=gN(fZ,"Promise");var vG={},fZ=m("8ThvE");vG=gN(fZ,"Set");var vY={},fZ=m("8ThvE");vY=gN(fZ,"WeakMap");/** `Object#toString` result references. */var vB="[object Map]",vq="[object Promise]",vK="[object Set]",vQ="[object WeakMap]",vX="[object DataView]",vJ=gj(vV),vZ=gj(g_),v0=gj(vH),v1=gj(vG),v2=gj(vY),v3=fX;(vV&&v3(new vV(new ArrayBuffer(1)))!=vX||g_&&v3(new g_)!=vB||vH&&v3(vH.resolve())!=vq||vG&&v3(new vG)!=vK||vY&&v3(new vY)!=vQ)&&(v3=function(e){var t=fX(e),n="[object Object]"==t?e.constructor:void 0,r=n?gj(n):"";if(r)switch(r){case vJ:return vX;case vZ:return vB;case v0:return vq;case v1:return vK;case v2:return vQ}return t}),vW=v3;var v_=m("7HKs8"),v4="[object Arguments]",v5="[object Array]",v6="[object Object]",v8=Object.prototype.hasOwnProperty;gf=/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=go(e),l=go(t),s=a?v5:vW(e),u=l?v5:vW(t);s=s==v4?v6:s,u=u==v4?v6:u;var c=s==v6,d=u==v6,f=s==u;if(f&&v_(e)){if(!v_(t))return!1;a=!0,c=!1}if(f&&!c)return i||(i=new gp),a||vN(e)?g9(e,t,n,r,o,i):vi(e,t,s,n,r,o,i);if(!(1&n)){var p=c&&v8.call(e,"__wrapped__"),h=d&&v8.call(t,"__wrapped__");if(p||h){var m=p?e.value():e,g=h?t.value():t;return i||(i=new gp),o(m,g,n,r,i)}}return!!f&&(i||(i=new gp),vd(e,t,n,r,o,i))},gd=/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function e(t,n,r,o,i){return t===n||(null!=t&&null!=n&&(pu(t)||pu(n))?gf(t,n,r,o,e,i):t!=t&&n!=n)},gc=/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function(e,t){return gd(e,t)};/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var v9=function(){return(v9=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v7=function(e,t,n,r,o){return(e-t)*(o-r)/(n-t)+r},ye=function(e,t){var n=e+t;return n>360?n-360:n},yt=function(){return Math.random()>.5},yn=[0,0,1],yr=[// dual axis rotations (a bit more realistic)
[1,1,0],[1,0,1],[0,1,1],// single axis rotations (a bit dumber)
[1,0,0],[0,1,0],yn],yo=yr.reduce(function(e,t,n){var r;return v9(v9({},e),((r={})["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(t.map(function(e){return e/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(t.join(),", 360deg)")}},r))},{}),yi=function(e,t,n){var r=e.reduce(function(e,t,r){var o,i=v7(Math.abs(ye(t,90)-180),0,180,-n/2,n/2);return v9(v9({},e),((o={})["@keyframes x-axis-".concat(r)]={to:{transform:"translateX(".concat(i,"px)")}},o))},{});return v9({"@keyframes y-axis":{to:{transform:"translateY(".concat("string"==typeof t?t:"".concat(t,"px"),")")}}},r)},ya=function(e,t,n,r,o){var i,a=Math.round(Math.random()*(yr.length-1)),l=t-Math.round(1e3*Math.random()),s=!/*@__PURE__*/f(gc)(yr[a],yn)&&yt(),u=.1>Math.random()?/*@__PURE__*/f(m7)(.25*Math.random(),2):0,c=-1*u,d=/*@__PURE__*/f(m7)(Math.abs(v7(Math.abs(ye(e.degree,90)-180),0,180,-1,1)),4),p=/*@__PURE__*/f(m7)(.5*Math.random(),4),h=/*@__PURE__*/f(m7)(Math.random()*n*(yt()?1:-1),4),m=/*@__PURE__*/f(m7)(Math.max(v7(Math.abs(e.degree-180),0,180,n,-n),0),4);return(i={})["&#confetti-particle-".concat(o)]={animation:"$x-axis-".concat(o," ").concat(l,"ms forwards cubic-bezier(").concat(u,", ").concat(c,", ").concat(u,", ").concat(d,")"),"& > div":{width:s?r:Math.round(4*Math.random())+r/2,height:s?r:Math.round(2*Math.random())+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(p,", ").concat(h,", ").concat(.5,", ").concat(m,")"),"&:after":v9({backgroundColor:e.color,animation:"$rotation-".concat(a," ").concat(Math.round(600*Math.random()+200),"ms infinite linear")},s?{borderRadius:"50%"}:{})}},i},yl=function(e){var t=e.particles,n=e.duration,r=e.height,o=e.width,i=e.force,a=e.particleSize,l=t.reduce(function(e,t,r){return v9(v9({},e),ya(t,n,i,a,r))},{});return m9(v9(v9(v9({},yo),yi(t.map(function(e){return e.degree}),r,o)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:v9(v9({},l),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},ys=["#FFC700","#FF0000","#2E3191","#41BBC7"],yu=function(e,t){var n=360/e;return /*@__PURE__*/f(fV)(e).map(function(e){return{color:t[e%t.length],degree:n*e}})};function yc(e){var t=e.particleCount,n=e.duration,r=void 0===n?2200:n,o=e.colors,i=e.particleSize,a=e.force,l=e.height,s=e.width,u=e.zIndex,c=e.onComplete,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(e,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),f=b.useState(),p=f[0],h=f[1],m=yu(void 0===t?100:t,void 0===o?ys:o),y=yl({particles:m,duration:r,particleSize:void 0===i?12:i,force:void 0===a?.5:a,width:void 0===s?1e3:s,height:void 0===l?"120vh":l})(),w=b.useCallback(function(e){if(e){var t=e.getBoundingClientRect();h({top:t.top,left:t.left})}},[]);return b.useEffect(function(){if("function"==typeof c){var e=setTimeout(c,r);return function(){return clearTimeout(e)}}},[r,c]),(0,g.jsx)("div",v9({ref:w,className:y.container},d,{children:p&&(0,v.createPortal)((0,g.jsx)("div",v9({className:y.screen},u?{style:{zIndex:u}}:null,{children:(0,g.jsx)("div",v9({style:{position:"absolute",top:p.top,left:p.left}},{children:m.map(function(e,t){return(0,g.jsx)("div",v9({id:"confetti-particle-".concat(t),className:y.particle},{children:(0,g.jsx)("div",{})}),e.degree)})}))})),document.body)}))}var b=m("exYeM");/**
 * lucide-react v0.288.0 - ISC
 */let yd=S("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),yf=S("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]),yp=S("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);var yh=function({shuffledRows:e,setShuffledRows:t,setGridShake:n}){let{isGameOver:r,guessCandidate:o,setGuessCandidate:i,submittedGuesses:a,setSubmittedGuesses:l,solvedGameData:s,setSolvedGameData:u}=/*@__PURE__*/f(b).useContext(it),{gameData:c,categorySize:d}=/*@__PURE__*/f(b).useContext(o2),{toast:p}=ff();return/*#__PURE__*/(0,g.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[/*#__PURE__*/(0,g.jsxs)(rh,{disabled:r,variant:"secondary",onClick:()=>t(o7({gameData:e})),children:[/*#__PURE__*/(0,g.jsx)(yf,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,g.jsx)("p",{className:"select-none",children:"Shuffle"})]}),/*#__PURE__*/(0,g.jsxs)(rh,{size:"deselectallsize",disabled:r,variant:"secondary",onClick:function(){i([])},children:[/*#__PURE__*/(0,g.jsx)(yp,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,g.jsx)("p",{className:"select-none",children:"Deselect All"})]}),/*#__PURE__*/(0,g.jsxs)(rh,{variant:"submit",onClick:function(){// check that its a valid guess by size
if(o.length!==d)return;// check that the guess hasnt already been submitted previously
if(function({submittedGuesses:e,guessCandidate:t}){for(let n=0;n<e.length;n++){let r=e[n];if(e3(t,r))return!0}return!1}({submittedGuesses:a,guessCandidate:o})){p({label:"Notification",title:"Repeated Guess",description:"You previously made this guess you dumb fuck!"});return}// add guess to state
l([...a,o]);// check if the guess is correct
let{isCorrect:e,correctWords:t,correctCategory:r,isGuessOneAway:f,correctDifficulty:h,correctImageSrc:m}=function({gameData:e,guessCandidate:t}){let n=!1,r="",o="",i=null,a=!1,l=null,s=[];for(let u=0;u<e.length;u++){if(r=e[u].words,o=e[u].category,l=e[u].difficulty,i=e[u].imageSrc,e3(t,r))return{isCorrect:n=!0,correctWords:r,correctCategory:o,isGuessOneAway:a,correctDifficulty:l,correctImageSrc:i};{// check size of difference, were doing this twice, but no need to optimize for tiny arrays
let e=e2(t,r).length;// store how far off their guess was from category
s.push(e)}}return{isCorrect:n,correctWords:r,correctCategory:o,isGuessOneAway:a=1===Math.min(...s),correctImageSrc:i}}({guessCandidate:o,gameData:c});// if the guess is correct:
// set it as solved in game data
e?(u([...s,{category:r,words:t,difficulty:h,imageSrc:m}]),i([])):(// Shake the grid to give feedback that they were wrong
n(!0),f&&p({label:"Notification",title:"Close Guess",description:"You were one guess away from correctly guessing a category!"}))},disabled:r||o.length!==d,children:[/*#__PURE__*/(0,g.jsx)(yd,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,g.jsx)("p",{className:"select-none",children:"Submit"})]})]})},b=m("exYeM"),ym=function(){let{submittedGuesses:e,isForFunsies:t}=/*@__PURE__*/f(b).useContext(it),{gameData:n}=/*@__PURE__*/f(b).useContext(o2);return/*#__PURE__*/(0,g.jsx)(rC,{title:"",trigger:/*#__PURE__*/(0,g.jsx)(rh,{variant:"submit",className:"w-full",children:"View Results"}),initiallyOpen:!1,showActionButton:!1,footerElements:t?/*#__PURE__*/(0,g.jsx)(rh,{children:"See how you did fr",onClick:function(){window.location.reload()}}):/*#__PURE__*/(0,g.jsx)(fw,{buttonText:"Share Your Score!"}),children:t?/*#__PURE__*/(0,g.jsx)("div",{className:"flex flex-col place-content-center",children:/*#__PURE__*/(0,g.jsx)("p",{className:"text-center font-[600]",children:"You completed the puzzle for funsies"})}):/*#__PURE__*/(0,g.jsxs)("div",{className:"flex flex-col place-content-center",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-center font-[600]",children:"Your Guesses Are Represented Below"}),/*#__PURE__*/(0,g.jsxs)("span",{className:"text-center whitespace-pre mb-2",children:["\n",ie(n,e)]}),/*#__PURE__*/(0,g.jsx)(fI,{})]})})},b=m("exYeM"),yg=function(){let{isGameOver:e,isGameWon:t,numMistakesUsed:n,solvedGameData:r,setSolvedGameData:o,submittedGuesses:i,setSubmittedGuesses:a,guessCandidate:l,setGuessCandidate:s,isForFunsies:u,setIsForFunsies:c,setIsGameOver:d,setIsGameWon:p}=/*@__PURE__*/f(b).useContext(it);return/*#__PURE__*/(0,g.jsx)(rC,{title:"",trigger:/*#__PURE__*/(0,g.jsx)(rh,{variant:"outline",className:"w-full",children:"Play Again (for funsies)"}),initiallyOpen:!1,showActionButton:!1,footerElements:/*#__PURE__*/(0,g.jsx)(rh,{children:"Play Again!",onClick:function(){c(!0),o([]),a([]),s([]),d(!1),p(!1);//console.log("it is done");
}}),children:/*#__PURE__*/(0,g.jsxs)("div",{className:"flex flex-col place-content-center",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-center font-[600]",children:"FOR FUNSIES"}),/*#__PURE__*/(0,g.jsx)("p",{className:"text-center font-[200] mt-4",children:"Doing this will not affect your results (nice try)"})]})})},yv=function(){let{gameData:e,categorySize:t,numCategories:n}=/*@__PURE__*/f(b).useContext(o2),{submittedGuesses:r,solvedGameData:o,isGameOver:i,isGameWon:a,isForFunsies:l}=/*@__PURE__*/f(b).useContext(it),[s,u]=/*@__PURE__*/f(b).useState(o7({gameData:e})),[c,d]=/*@__PURE__*/f(b).useState(!1),[p,h]=/*@__PURE__*/f(b).useState(!1),[m,v]=/*@__PURE__*/f(b).useState(!1);return /*@__PURE__*/f(b).useEffect(()=>{let t=o.map(e=>e.category),n=e.filter(e=>!t.includes(e.category));n.length>0&&u(o7({gameData:n}))},[o]),/*@__PURE__*/f(b).useEffect(()=>{l&&d(!1)},[l]),/*@__PURE__*/f(b).useEffect(()=>{if(l&&d(!1),!i)return;let e=window.setTimeout(()=>{d(!0),//unmount confetti after modal opens
v(!1)},a?2e3:250);return a&&v(!0),()=>window.clearTimeout(e)},[i]),/*#__PURE__*/(0,g.jsxs)(g.Fragment,{children:[l&&/*#__PURE__*/(0,g.jsx)("div",{className:"w-full justify-center text-center",children:/*#__PURE__*/(0,g.jsx)(fr,{children:/*#__PURE__*/(0,g.jsx)("h2",{className:"text-xl text-center mt-4",children:"FOR FUNSIES MODE"})})}),/*#__PURE__*/(0,g.jsxs)("h3",{className:"text-xl text-center mt-4",children:["Create ",n," groups of ",t]}),/*#__PURE__*/(0,g.jsxs)("div",{className:"game-wrapper",children:[i&&a?/*#__PURE__*/(0,g.jsx)(fz,{open:c,submittedGuesses:r}):/*#__PURE__*/(0,g.jsx)(fD,{open:c,submittedGuesses:r}),/*#__PURE__*/(0,g.jsx)(uA,{gameRows:s,shouldGridShake:p,setShouldGridShake:h}),m&&i&&/*#__PURE__*/(0,g.jsx)("div",{className:"grid place-content-center",children:/*#__PURE__*/(0,g.jsx)(yc,{particleCount:100,force:.8,duration:2500})}),/*#__PURE__*/(0,g.jsx)(fW,{}),i?/*#__PURE__*/(0,g.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[/*#__PURE__*/(0,g.jsx)(ym,{}),/*#__PURE__*/(0,g.jsx)(yg,{})]}):/*#__PURE__*/(0,g.jsxs)(g.Fragment,{children:[/*#__PURE__*/(0,g.jsx)(uj,{}),/*#__PURE__*/(0,g.jsx)(yh,{shuffledRows:s,setShuffledRows:u,setGridShake:h})]})]})]})},b=(m("exYeM"),m("exYeM"),m("exYeM"));let yy=/*#__PURE__*/(0,b.forwardRef)((e,t)=>/*#__PURE__*/(0,b.createElement)(L.span,E({},e,{ref:t,style:{// See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),yb="ToastProvider",[yw,yx,yS]=M("Toast"),[yk,yE]=T("Toast",[yS]),[yC,yT]=yk(yb),yP=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:a}=e,[l,s]=(0,b.useState)(null),[u,c]=(0,b.useState)(0),d=(0,b.useRef)(!1),f=(0,b.useRef)(!1);return/*#__PURE__*/(0,b.createElement)(yw.Provider,{scope:t},/*#__PURE__*/(0,b.createElement)(yC,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:s,onToastAdd:(0,b.useCallback)(()=>c(e=>e+1),[]),onToastRemove:(0,b.useCallback)(()=>c(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:f},a))};yP.propTypes={label(e){if(e.label&&"string"==typeof e.label&&!e.label.trim()){let e=`Invalid prop \`label\` supplied to \`${yb}\`. Expected non-empty \`string\`.`;return Error(e)}return null}};let y_=["F8"],yN="toast.viewportPause",yR="toast.viewportResume",yO=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,hotkey:r=y_,label:o="Notifications ({hotkey})",...i}=e,a=yT("ToastViewport",n),l=yx(n),s=(0,b.useRef)(null),u=(0,b.useRef)(null),c=(0,b.useRef)(null),d=(0,b.useRef)(null),f=_(t,d,a.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),h=a.toastCount>0;(0,b.useEffect)(()=>{let e=e=>{var t;// we use `event.code` as it is consistent regardless of meta keys that were pressed.
// for example, `event.key` for `Control+Alt+t` is `†` and `t !== †`
let n=r.every(t=>e[t]||e.code===t);n&&(null===(t=d.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),(0,b.useEffect)(()=>{let e=s.current,t=d.current;if(h&&e&&t){let n=()=>{if(!a.isClosePausedRef.current){let e=new CustomEvent(yN);t.dispatchEvent(e),a.isClosePausedRef.current=!0}},r=()=>{if(a.isClosePausedRef.current){let e=new CustomEvent(yR);t.dispatchEvent(e),a.isClosePausedRef.current=!1}},o=t=>{let n=!e.contains(t.relatedTarget);n&&r()},i=()=>{let t=e.contains(document.activeElement);t||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[h,a.isClosePausedRef]);let m=(0,b.useCallback)(({tabbingDirection:e})=>{let t=l(),n=t.map(t=>{let n=t.ref.current,r=[n,.../**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP// `.tabIndex` is not the same as the `tabindex` attribute. It works on the
}});for(;n.nextNode();)t.push(n.currentNode);// we do not take into account the order of nodes with positive `tabIndex` as it
// hinders accessibility to have tab order different from visual order.
return t}(n)];return"forwards"===e?r:r.reverse()});return("forwards"===e?n.reverse():n).flat()},[l]);return(0,b.useEffect)(()=>{let e=d.current;// We programmatically manage tabbing as we are unable to influence
// the source order with portals, this allows us to reverse the
// tab order so that it runs from most recent toast to least
if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey,r="Tab"===t.key&&!n;if(r){var o,i,a;let n=document.activeElement,r=t.shiftKey,l=t.target===e;// proxy focus out to the preceding document
if(l&&r){null===(o=u.current)||void 0===o||o.focus();return}let s=m({tabbingDirection:r?"backwards":"forwards"}),d=s.findIndex(e=>e===n);yY(s.slice(d+1))?t.preventDefault():// If we can't focus that means we're at the edges so we
// proxy to the corresponding exit point and let the browser handle
// tab/shift+tab keypress and implicitly pass focus to the next valid element in the document
r?null===(i=u.current)||void 0===i||i.focus():null===(a=c.current)||void 0===a||a.focus()}};// Toasts are not in the viewport React tree so we need to bind DOM events
return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[l,m]),/*#__PURE__*/(0,b.createElement)(tW,{ref:s,role:"region","aria-label":o.replace("{hotkey}",p)// Ensure virtual cursor from landmarks menus triggers focus/blur for pause/resume
,tabIndex:-1// incase list has size when empty (e.g. padding), we remove pointer events so
,style:{pointerEvents:h?void 0:"none"}},h&&/*#__PURE__*/(0,b.createElement)(yA,{ref:u,onFocusFromOutsideViewport:()=>{let e=m({tabbingDirection:"forwards"});yY(e)}}),/*#__PURE__*/(0,b.createElement)(yw.Slot,{scope:n},/*#__PURE__*/(0,b.createElement)(L.ol,E({tabIndex:-1},i,{ref:f}))),h&&/*#__PURE__*/(0,b.createElement)(yA,{ref:c,onFocusFromOutsideViewport:()=>{let e=m({tabbingDirection:"backwards"});yY(e)}}))}),yA=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=yT("ToastFocusProxy",n);return/*#__PURE__*/(0,b.createElement)(yy,E({"aria-hidden":!0,tabIndex:0},o,{ref:t// Avoid page scrolling when focus is on the focus proxy
,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget,o=!(null!==(t=i.viewport)&&void 0!==t&&t.contains(n));o&&r()}}))}),yM="Toast",yj=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...a}=e,[l=!0,s]=$({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,b.createElement)(ei,{present:n||l},/*#__PURE__*/(0,b.createElement)(yz,E({open:l},a,{ref:t,onClose:()=>s(!1),onPause:U(e.onPause),onResume:U(e.onResume),onSwipeStart:C(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:C(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${n}px`)}),onSwipeCancel:C(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:C(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${n}px`),s(!1)})})))}),[yI,yD]=yk(yM,{onClose(){}}),yz=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:o,open:i,onClose:a,onEscapeKeyDown:l,onPause:s,onResume:u,onSwipeStart:c,onSwipeMove:d,onSwipeCancel:f,onSwipeEnd:p,...h}=e,m=yT(yM,n),[g,y]=(0,b.useState)(null),w=_(t,e=>y(e)),x=(0,b.useRef)(null),S=(0,b.useRef)(null),k=o||m.duration,T=(0,b.useRef)(0),P=(0,b.useRef)(k),N=(0,b.useRef)(0),{onToastAdd:R,onToastRemove:O}=m,A=U(()=>{var e;// focus viewport if focus is within toast to read the remaining toast
// count to SR users and ensure focus isn't lost
let t=null==g?void 0:g.contains(document.activeElement);t&&(null===(e=m.viewport)||void 0===e||e.focus()),a()}),M=(0,b.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(N.current),T.current=new Date().getTime(),N.current=window.setTimeout(A,e))},[A]);(0,b.useEffect)(()=>{let e=m.viewport;if(e){let t=()=>{M(P.current),null==u||u()},n=()=>{let e=new Date().getTime()-T.current;P.current=P.current-e,window.clearTimeout(N.current),null==s||s()};return e.addEventListener(yN,n),e.addEventListener(yR,t),()=>{e.removeEventListener(yN,n),e.removeEventListener(yR,t)}}},[m.viewport,k,s,u,M]),// we include `open` in deps because closed !== unmounted when animating
// so it could reopen before being completely unmounted
(0,b.useEffect)(()=>{i&&!m.isClosePausedRef.current&&M(k)},[i,k,m.isClosePausedRef,M]),(0,b.useEffect)(()=>(R(),()=>O()),[R,O]);let j=(0,b.useMemo)(()=>g?function e(t){let n=[],r=Array.from(t.childNodes);// This allows SR VO to naturally pause break between nodes while announcing.
    return r.forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(g):null,[g]);return m.viewport?/*#__PURE__*/(0,b.createElement)(b.Fragment,null,j&&/*#__PURE__*/(0,b.createElement)(yL,{__scopeToast:n// Toasts are always role=status to avoid stuttering issues with role=alert in SRs.
,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0},j),/*#__PURE__*/(0,b.createElement)(yI,{scope:n,onClose:A},/*#__PURE__*/(0,v.createPortal)(/*#__PURE__*/(0,b.createElement)(yw.ItemSlot,{scope:n},/*#__PURE__*/(0,b.createElement)(t$,{asChild:!0,onEscapeKeyDown:C(l,()=>{m.isFocusedToastEscapeKeyDownRef.current||A(),m.isFocusedToastEscapeKeyDownRef.current=!1})},/*#__PURE__*/(0,b.createElement)(L.li,E({// Ensure toasts are announced as status list or status when focused
role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":m.swipeDirection},h,{ref:w,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:C(e.onKeyDown,e=>{"Escape"!==e.key||(null==l||l(e.nativeEvent),e.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,A()))}),onPointerDown:C(e.onPointerDown,e=>{0===e.button&&(x.current={x:e.clientX,y:e.clientY})}),onPointerMove:C(e.onPointerMove,e=>{if(!x.current)return;let t=e.clientX-x.current.x,n=e.clientY-x.current.y,r=!!S.current,o=["left","right"].includes(m.swipeDirection),i=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,l=o?0:i(0,n),s="touch"===e.pointerType?10:2,u={x:a,y:l},f={originalEvent:e,delta:u};r?(S.current=u,yH("toast.swipeMove",d,f,{discrete:!1})):yG(u,m.swipeDirection,s)?(S.current=u,yH("toast.swipeStart",c,f,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>s||Math.abs(n)>s)&&(x.current=null)}),onPointerUp:C(e.onPointerUp,e=>{let t=S.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),S.current=null,x.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};yG(t,m.swipeDirection,m.swipeThreshold)?yH("toast.swipeEnd",p,r,{discrete:!0}):yH("toast.swipeCancel",f,r,{discrete:!0}),// Prevent click event from triggering on items within the toast when
// pointer up is part of a swipe gesture
n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),m.viewport))):null});yz.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){let e=`Invalid prop \`type\` supplied to \`${yM}\`. Expected \`foreground | background\`.`;return Error(e)}return null}};/* -----------------------------------------------------------------------------------------------*/let yL=e=>{let{__scopeToast:t,children:n,...r}=e,o=yT(yM,t),[i,a]=(0,b.useState)(!1),[l,s]=(0,b.useState)(!1);return function(e=()=>{}){let t=U(e);j(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>a(!0)),(0,b.useEffect)(()=>{let e=window.setTimeout(()=>s(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:/*#__PURE__*/(0,b.createElement)(t0,{asChild:!0},/*#__PURE__*/(0,b.createElement)(yy,r,i&&/*#__PURE__*/(0,b.createElement)(b.Fragment,null,o.label," ",n)))},yF=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return/*#__PURE__*/(0,b.createElement)(L.div,E({},r,{ref:t}))}),yU=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return/*#__PURE__*/(0,b.createElement)(L.div,E({},r,{ref:t}))}),y$=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{altText:n,...r}=e;return n?/*#__PURE__*/(0,b.createElement)(yV,{altText:n,asChild:!0},/*#__PURE__*/(0,b.createElement)(yW,E({},r,{ref:t}))):null});y$.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let yW=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e,o=yD("ToastClose",n);return/*#__PURE__*/(0,b.createElement)(yV,{asChild:!0},/*#__PURE__*/(0,b.createElement)(L.button,E({type:"button"},r,{ref:t,onClick:C(e.onClick,o.onClose)})))}),yV=/*#__PURE__*/(0,b.forwardRef)((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return/*#__PURE__*/(0,b.createElement)(L.div,E({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},o,{ref:t}))});/* ---------------------------------------------------------------------------------------------- */function yH(e,t,n,{discrete:r}){let o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?F(o,i):o.dispatchEvent(i)}let yG=(e,t,n=0)=>{let r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function yY(e){let t=document.activeElement;return e.some(e=>// if focus is already where we want to go, we don't want to keep going through the candidates
    e===t||(e.focus(),document.activeElement!==t))}/**
 * lucide-react v0.288.0 - ISC
 */let yB=S("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),yq=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(t0,{className:"fixed z-[200]",children:/*#__PURE__*/(0,g.jsx)(yO,{ref:n,className:eX("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t})}));yq.displayName=yO.displayName;let yK=rf("group pointer-events-auto z-160 relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),yQ=/*#__PURE__*/b.forwardRef(({className:e,variant:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(yj,{ref:r,className:eX(yK({variant:t}),e),...n}));yQ.displayName=yj.displayName;let yX=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(y$,{ref:n,className:eX("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));yX.displayName=y$.displayName;let yJ=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(yW,{ref:n,className:eX("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:/*#__PURE__*/(0,g.jsx)(yB,{className:"h-4 w-4"})}));yJ.displayName=yW.displayName;let yZ=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(yF,{ref:n,className:eX("text-sm font-semibold",e),...t}));yZ.displayName=yF.displayName;let y0=/*#__PURE__*/b.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(yU,{ref:n,className:eX("text-sm opacity-90",e),...t}));function y1(){let{toasts:e}=ff();return/*#__PURE__*/(0,g.jsxs)(yP,{children:[e.map(function({id:e,title:t,description:n,action:r,...o}){return/*#__PURE__*/(0,g.jsxs)(yQ,{...o,children:[/*#__PURE__*/(0,g.jsxs)("div",{className:"grid gap-1",children:[t&&/*#__PURE__*/(0,g.jsx)(yZ,{children:t}),n&&/*#__PURE__*/(0,g.jsx)(y0,{children:n})]}),r,/*#__PURE__*/(0,g.jsx)(yJ,{})]},e)}),/*#__PURE__*/(0,g.jsx)(yq,{})]})}y0.displayName=yU.displayName;let y2=cF(document.querySelector("#root"));y2.render(/*#__PURE__*/(0,g.jsx)(function(){return/*#__PURE__*/(0,g.jsx)(o3,{children:/*#__PURE__*/(0,g.jsx)(ir,{children:/*#__PURE__*/(0,g.jsxs)("div",{className:"wrapper",children:[/*#__PURE__*/(0,g.jsx)(y1,{}),/*#__PURE__*/(0,g.jsx)(ii,{}),/*#__PURE__*/(0,g.jsx)(yv,{})]})})})},{}))}();//# sourceMappingURL=index.926b079b.js.map

//# sourceMappingURL=index.926b079b.js.map
