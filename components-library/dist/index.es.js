import e,{useContext as t}from"react";import r,{css as n,ThemeProvider as o,ThemeContext as a}from"styled-components";import"styled-components/macro";function i(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var l="function"==typeof Symbol&&Symbol.for,c=l?Symbol.for("react.element"):60103,s=l?Symbol.for("react.portal"):60106,u=l?Symbol.for("react.fragment"):60107,p=l?Symbol.for("react.strict_mode"):60108,d=l?Symbol.for("react.profiler"):60114,f=l?Symbol.for("react.provider"):60109,m=l?Symbol.for("react.context"):60110,y=l?Symbol.for("react.async_mode"):60111,h=l?Symbol.for("react.concurrent_mode"):60111,b=l?Symbol.for("react.forward_ref"):60112,g=l?Symbol.for("react.suspense"):60113,v=l?Symbol.for("react.suspense_list"):60120,x=l?Symbol.for("react.memo"):60115,S=l?Symbol.for("react.lazy"):60116,w=l?Symbol.for("react.block"):60121,E=l?Symbol.for("react.fundamental"):60117,k=l?Symbol.for("react.responder"):60118,C=l?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case c:switch(e=e.type){case y:case h:case u:case d:case p:case g:return e;default:switch(e=e&&e.$$typeof){case m:case b:case S:case x:case f:return e;default:return t}}case s:return t}}}function O(e){return $(e)===h}var I={AsyncMode:y,ConcurrentMode:h,ContextConsumer:m,ContextProvider:f,Element:c,ForwardRef:b,Fragment:u,Lazy:S,Memo:x,Portal:s,Profiler:d,StrictMode:p,Suspense:g,isAsyncMode:function(e){return O(e)||$(e)===y},isConcurrentMode:O,isContextConsumer:function(e){return $(e)===m},isContextProvider:function(e){return $(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===c},isForwardRef:function(e){return $(e)===b},isFragment:function(e){return $(e)===u},isLazy:function(e){return $(e)===S},isMemo:function(e){return $(e)===x},isPortal:function(e){return $(e)===s},isProfiler:function(e){return $(e)===d},isStrictMode:function(e){return $(e)===p},isSuspense:function(e){return $(e)===g},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===u||e===h||e===d||e===p||e===g||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===x||e.$$typeof===f||e.$$typeof===m||e.$$typeof===b||e.$$typeof===E||e.$$typeof===k||e.$$typeof===C||e.$$typeof===w)},typeOf:$},N=i((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case s:case u:case o:case i:case a:case d:return f;default:var h=f&&f.$$typeof;switch(h){case c:case p:case y:case m:case l:return h;default:return t}}case n:return t}}}var S=s,w=u,E=c,k=l,C=r,$=p,O=o,I=y,N=m,T=n,P=i,j=a,_=d,F=!1;function A(e){return x(e)===u}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=E,t.ContextProvider=k,t.Element=C,t.ForwardRef=$,t.Fragment=O,t.Lazy=I,t.Memo=N,t.Portal=T,t.Profiler=P,t.StrictMode=j,t.Suspense=_,t.isAsyncMode=function(e){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===s},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===y},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===i||e===a||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v||e.$$typeof===h)},t.typeOf=x}()}));N.AsyncMode,N.ConcurrentMode,N.ContextConsumer,N.ContextProvider,N.Element,N.ForwardRef,N.Fragment,N.Lazy,N.Memo,N.Portal,N.Profiler,N.StrictMode,N.Suspense,N.isAsyncMode,N.isConcurrentMode,N.isContextConsumer,N.isContextProvider,N.isElement,N.isForwardRef,N.isFragment,N.isLazy,N.isMemo,N.isPortal,N.isProfiler,N.isStrictMode,N.isSuspense,N.isValidElementType,N.typeOf;var T=i((function(e){"production"===process.env.NODE_ENV?e.exports=I:e.exports=N})),P=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function F(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var A=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=F(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))j.call(r,i)&&(o[i]=r[i]);if(P){n=P(r);for(var l=0;l<n.length;l++)_.call(r,n[l])&&(o[n[l]]=r[n[l]])}}return o},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",M=function(){};if("production"!==process.env.NODE_ENV){var V=R,z={},D=Function.call.bind(Object.prototype.hasOwnProperty);M=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function L(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(D(e,a)){var i;try{if("function"!=typeof e[a]){var l=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw l.name="Invariant Violation",l}i=e[a](t,a,n,r,null,V)}catch(e){i=e}if(!i||i instanceof Error||M((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in z)){z[i.message]=!0;var c=o?o():"";M("Failed "+r+" type: "+i.message+(null!=c?c:""))}}}L.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(z={})};var q=L,B=Function.call.bind(Object.prototype.hasOwnProperty),H=function(){};function W(){return null}"production"!==process.env.NODE_ENV&&(H=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var U=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator;var n="<<anonymous>>",o={array:c("array"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:l(W),arrayOf:function(e){return l((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new i("Invalid "+o+" `"+a+"` of type `"+u(l)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,n,o,a+"["+c+"]",R);if(s instanceof Error)return s}return null}))},element:l((function(t,r,n,o,a){var l=t[r];return e(l)?null:new i("Invalid "+o+" `"+a+"` of type `"+u(l)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:l((function(e,t,r,n,o){var a=e[t];return T.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+u(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return l((function(t,r,o,a,l){if(!(t[r]instanceof e)){var c=e.name||n;return new i("Invalid "+a+" `"+l+"` of type `"+(((s=t[r]).constructor&&s.constructor.name?s.constructor.name:n)+"` supplied to `")+o+"`, expected instance of `"+c+"`.")}var s;return null}))},node:l((function(e,t,r,n,o){return s(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return l((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=u(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var s in l)if(B(l,s)){var p=e(l,s,n,o,a+"."+s,R);if(p instanceof Error)return p}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&H(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),W;function t(t,r,n,o,l){for(var c=t[r],s=0;s<e.length;s++)if(a(c,e[s]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===p(t)?String(t):t}));return new i("Invalid "+o+" `"+l+"` of value `"+String(c)+"` supplied to `"+n+"`, expected one of "+u+".")}return l(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&H("Invalid argument supplied to oneOfType, expected an instance of array."),W;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return H("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(r)+" at index "+t+"."),W}return l((function(t,r,n,o,a){for(var l=0;l<e.length;l++)if(null==(0,e[l])(t,r,n,o,a,R))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}))},shape:function(e){return l((function(t,r,n,o,a){var l=t[r],c=u(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if(p){var d=p(l,s,n,o,a+"."+s,R);if(d)return d}}return null}))},exact:function(e){return l((function(t,r,n,o,a){var l=t[r],c=u(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var s=A({},t[r],e);for(var p in s){var d=e[p];if(!d)return new i("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=d(l,p,n,o,a+"."+p,R);if(f)return f}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function l(e){if("production"!==process.env.NODE_ENV)var r={},o=0;function a(a,l,c,s,u,p,d){if(s=s||n,p=p||c,d!==R){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=s+":"+c;!r[m]&&o<3&&(H("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==l[c]?a?null===l[c]?new i("The "+u+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`."):new i("The "+u+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(l,c,s,u,p)}var l=a.bind(null,!1);return l.isRequired=a.bind(null,!0),l}function c(e){return l((function(t,r,n,o,a,l){var c=t[r];return u(c)!==e?new i("Invalid "+o+" `"+a+"` of type `"+p(c)+"` supplied to `"+n+"`, expected `"+e+"`."):null}))}function s(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(s);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!s(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!s(i[1]))return!1}return!0;default:return!1}}function u(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function p(e){if(null==e)return""+e;var t=u(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function d(e){var t=p(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=q,o.resetWarningCache=q.resetWarningCache,o.PropTypes=o,o};function Y(){}function J(){}J.resetWarningCache=Y;var X=i((function(e){if("production"!==process.env.NODE_ENV){var t=T;e.exports=U(t.isElement,!0)}else e.exports=function(){function e(e,t,r,n,o,a){if(a!==R){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:Y};return r.PropTypes=r,r}()}));!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('a,a:hover{color:inherit;text-decoration:none}.checkbox,a:hover{cursor:pointer}.checkbox{position:relative;width:1.5em;height:1.5em;border:1px solid grey;border-radius:4px;appearance:none;outline:0;transition:background 175ms cubic-bezier(.1,.1,.25,1);background-color:#fff}.checkbox:before{position:absolute;content:"";display:block;top:0;left:6px;width:4px;height:12px;border-color:#fff;border-style:solid;border-width:0 2px 2px 0;transform:rotate(45deg);opacity:0}.checkbox:checked{color:#fff;border-color:#0c0a3e;background:#0c0a3e}.checkbox:checked:before{opacity:1}.input{background-color:#fafafa;outline:none;border:1px solid #000;border-radius:4px;padding:.5rem}');const G=e=>`${"Primary"===e.color&&e.theme.palette.primary.main||"Secondary"===e.color&&e.theme.palette.secondary.main||"Info"===e.color&&e.theme.palette.info.main||"Warning"===e.color&&e.theme.palette.warning.main||"Danger"===e.color&&e.theme.palette.danger.main}`,K=r.button`
  font-family: ${e=>e.theme.typography.fontFamily};
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;
  font-size: ${e=>"Small"===e.size&&n(["0.75rem"])||"Medium"===e.size&&n(["1rem"])||"Large"===e.size&&n(["1.25rem"])};
  background-color: ${e=>G(e)};
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${e=>(e=>`${"Primary"===e.color&&e.theme.palette.primary.dark||"Secondary"===e.color&&e.theme.palette.secondary.dark||"Info"===e.color&&e.theme.palette.info.dark||"Warning"===e.color&&e.theme.palette.warning.dark||"Danger"===e.color&&e.theme.palette.danger.dark}`)(e)};
    color: ${e=>"Text"===e.buttonStyle&&n(["white"])};
  }

  ${e=>"Raised"===e.buttonStyle&&n(["box-shadow:0 3px 1px -2px rgb(0 0 0 / 20%),0 2px 2px 0 rgb(0 0 0 / 14%),0 1px 5px 0 rgb(0 0 0 / 12%);"])||"Rounded"===e.buttonStyle&&n(["border-radius:2rem;"])||"Text"===e.buttonStyle&&n(["background:none;color:",";border:"," 1px solid;"],G(e),G(e))}
`,Q={palette:{primary:{main:"#2196f3",dark:"#3f91d4"},secondary:{main:"#797c7e",dark:"#656666"},info:{main:"#0288d1",dark:"#01659b"},warning:{main:"#d1a102",dark:"#b48b02"},danger:{main:"#dd0101",dark:"#c00000"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"].join(",")}},Z=({theme:t,children:r})=>e.createElement(o,{theme:t},r);Z.propTypes={children:X.node.isRequired,theme:X.shape({palette:X.shape({primary:X.shape({main:X.string,dark:X.string}),secondary:X.shape({main:X.string,dark:X.string}),info:X.shape({main:X.string,dark:X.string}),warning:X.shape({main:X.string,dark:X.string}),danger:X.shape({main:X.string,dark:X.string})}),typography:X.shape({fontFamily:X.string})})},Z.defaultProps={theme:Q};var ee=function(r){var n=r.color,o=r.placeholder,i=r.size,l=r.style,c=r.disabled,s=r.onClick;return e.createElement(Z,{theme:t(a)},e.createElement(K,{type:"button",color:n,size:i,buttonStyle:l,disabled:c,onClick:function(){return s()}},""===o?"Add custom text":o))};function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||ne(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ne(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){if(e){if("string"==typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oe(e,t):void 0}}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}ee.propTypes={color:X.string,placeholder:X.string,size:X.string,style:X.string,disabled:X.bool,onClick:X.func},ee.defaultProps={color:"Primary",placeholder:"Default button",size:"Small",style:"Standard",disabled:!1,onClick:function(){}};const ae=r.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
  font-family: ${e=>e.theme.typography.fontFamily};
`,ie=r.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  transition: border-color 0.4s;
`,le=r.div`
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.visibility?n(["visible"]):n(["hidden"])};
  opacity: ${e=>e.visibility?1:0};
  max-height: ${e=>e.maxHeight}px;
  display: flex;
  z-index: 1;
  flex-direction: column;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  position: absolute;
  top: 49px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 0.5rem 0;
  overflow: auto;
  font-family: ${e=>e.theme.typography.fontFamily};
`,ce=r.div`
  cursor: pointer;
  width: 95%;
  padding: 0.5rem;
  display: flex;
  row-gap: 2px;
  font-size: 1rem;
  color: #495057;
  font-weight: lighter;
  $:hover {
    background: #c2c1c1;
  }
`,se=({description:t,optionSelected:r})=>e.createElement(ce,{"data-testid":t,onClick:()=>r(t),"aria-hidden":"true"},e.createElement("div",null,e.createElement("span",null,t)));se.propTypes={description:X.string.isRequired,optionSelected:X.func.isRequired};var ue=r("div").withConfig({displayName:"gsAutocomplete___StyledDiv",componentId:"nustq2-0"})(["width:100%;display:flex;"]),pe=r("input").withConfig({displayName:"gsAutocomplete___StyledInput",componentId:"nustq2-1"})(["width:100%;"]),de=function(r){var n=r.noResultsMessage,o=r.placeholder,i=r.disabled,l=r.maxHeight,c=r.options,s=r.value,u=r.onChangeValue,p=te(e.useState(!1),2),d=p[0],f=p[1],m=te(e.useState([]),2),y=m[0],h=m[1],b=function(e){var t=c.filter((function(t){return t.toUpperCase().startsWith(e.toUpperCase())}));h(t)};e.useEffect((function(){b(s)}),[s]);var g=function(e){u(e),b(e),f(!d)},v=function(){return 0===y.length?e.createElement(ce,null,n):y.map((function(t){return e.createElement(se,{key:t,description:t,optionSelected:g})}))},x=function(){return""!==s?e.createElement(v,null):c.map((function(t){return e.createElement(se,{key:t,description:t,optionSelected:g})}))};return e.createElement(Z,{theme:t(a)},e.createElement(ae,null,e.createElement(ie,{"data-testid":"gsAutocompleteField",className:"gsAutocompleteField","aria-hidden":"true",onClick:function(){return!i&&f(!d)}},e.createElement(ue,null,e.createElement(pe,{autoComplete:"off","data-testid":"autocompleteInput",placeholder:o,disabled:i,value:s,type:"text",name:"gsAutocompleteInputField",id:"gsAutocompleteInputField",className:"input",onChange:function(e){return function(e){f(!0),u(e)}(e.target.value)}}))),e.createElement(le,{visibility:d,"data-testid":"gsAutocompleteItemsList",maxHeight:l},e.createElement(x,null))))};de.propTypes={noResultsMessage:X.string,placeholder:X.string,disabled:X.bool,maxHeight:X.string,options:X.arrayOf(X.string),value:X.string,onChangeValue:X.func},de.defaultProps={noResultsMessage:"No results",placeholder:"choose an option",disabled:!1,maxHeight:"200",options:[],value:"",onChangeValue:function(){}};const fe=r.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  width: 100%;
  font-family: ${e=>e.theme.typography.fontFamily};
`,me=r.input`
  width: 100%;
  &:focus {
    border: ${e=>"Outlined"===e.inputStyle&&n([""," 1.5px solid"],e.theme.palette.primary.main)};
    border-bottom: ${e=>("Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle)&&n([""," 1.5px solid"],e.theme.palette.primary.main)};
  }

  ${e=>("Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle)&&n(["border:none;border-bottom:1px solid gray;border-radius:0;"])}

  ${e=>"Filled"===e.inputStyle&&n(["background:#d7d3d3;"])}
`,ye=r.label`
  position: absolute;
  left: 0.5rem;
  top: 0.3rem;
  z-index: 1;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  opacity: ${e=>e.isFocused?1:.5};
  font-weight: lighter;
  &:focus {
    opacity: 1;
    color: ${e=>e.theme.palette.primary.main};
  }

  ${e=>e.isFocused&&n(["color:",";transform:",";font-size:",";"],e.theme.palette.primary.main,"Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle?n(["translateY(-145%)"]):n(["translateY(-90%)"]),"Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle?n(["0.75rem"]):n(["0.7rem"]))}

  ${e=>e.isFocused&&"Outlined"===e.inputStyle&&n(["background:#fafafa;padding:0 0.2rem;"])};
`,he=r.div`
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
  cursor: pointer;
`;var be=r("div").withConfig({displayName:"gsInputText___StyledDiv",componentId:"ytidob-0"})(["width:100%;display:flex;"]),ge=function(r){var n=r.style,o=r.placeholder,i=r.maxLength,l=r.hasResetButton,c=r.fieldName,s=r.disabled,u=r.value,p=r.onChangeValue,d=te(e.useState(!1),2),f=d[0],m=d[1];return e.createElement(Z,{theme:t(a)},e.createElement(fe,{id:"gsInputText",onFocus:function(){return m(!0)},onBlur:function(){""===u&&m(!1)}},e.createElement(be,null,e.createElement(me,{inputStyle:n,disabled:s,placeholder:f?o:"",maxLength:"0"!==i?i:"",value:u,type:"text",name:"gsInput",id:"gsInputText",autoComplete:"off",className:"input",onChange:function(e){p(e.target.value)}}),l&&""!==u&&!s&&e.createElement(he,{"aria-hidden":"true",onClick:function(){p(""),m(!1)}},"X"),e.createElement(ye,{htmlFor:"gsInputText",isFocused:f,inputStyle:n},c))))};ge.propTypes={style:X.string,placeholder:X.string,maxLength:X.string,hasResetButton:X.bool,fieldName:X.string,disabled:X.bool,value:X.string,onChangeValue:X.func},ge.defaultProps={style:"Bottom-Lined",placeholder:"Placeholder",maxLength:"0",hasResetButton:!1,fieldName:"Field",disabled:!1,value:"",onChangeValue:function(){}};var ve=r("div").withConfig({displayName:"gsInputNumber___StyledDiv",componentId:"sc-14z4ok-0"})(["width:100%;display:flex;"]),xe=r("input").withConfig({displayName:"gsInputNumber___StyledInput",componentId:"sc-14z4ok-1"})(["width:100%;"]),Se=function(r){var n=r.format,o=r.disabled,i=r.placeholder,l=r.value,c=r.onChangeValue;e.useEffect((function(){c("")}),[n]);return e.createElement(Z,{theme:t(a)},e.createElement(ve,null,e.createElement(xe,{autoComplete:"off",className:"input",value:l,disabled:o,onChange:function(e){return function(e){c(e.target.value.replace(/\D/,""));var t=/(\d)(?=(\d{3})+$)/g;switch(n){case"grouped-commas":c(e.target.value.replaceAll(",","").replace(t,"$1,"));break;case"grouped-dots":c(e.target.value.replaceAll(".","").replace(t,"$1."))}}(e)},placeholder:i})))};Se.propTypes={format:X.string,disabled:X.bool,placeholder:X.string,value:X.string,onChangeValue:X.func},Se.defaultProps={format:"no-grouped",disabled:!1,placeholder:"Insert a number",value:"",onChangeValue:function(){}};var we=r("div").withConfig({displayName:"gsSelectInputItem___StyledDiv",componentId:"r99hwb-0"})(["margin-right:",";"],(e=>e._css));const Ee=({name:t,isMultiSelect:r,updateCheckStatus:n})=>{const[o,a]=e.useState(!1);return e.useEffect((()=>{r||a(!1)})),e.createElement(ce,{"aria-hidden":"true",onClick:()=>{n({Name:t,Checked:!o}),a(!o)}},e.createElement(we,{_css:r&&"0.5rem"},r&&e.createElement("input",{className:"checkbox",type:"checkbox",checked:o&&r,"data-testid":`checkbox-${t}`})),e.createElement("div",null,e.createElement("span",null,t)))};Ee.propTypes={name:X.string.isRequired,isMultiSelect:X.bool.isRequired,updateCheckStatus:X.func.isRequired};const ke=r.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
  font-family: ${e=>e.theme.typography.fontFamily};
`,Ce=r.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  border-radius: 4px;
  border: 1.3px solid black;
  cursor: pointer;
  transition: border-color 0.4s;
  &:hover {
    border-color: ${e=>e.theme.palette.primary.main};
  }
`,$e=r.div`
  flex: 0 0 85%;
  font-weight: lighter;
  display: flex;
  column-gap: 3px;
  flex-flow: wrap;
`,Oe=r.div`
  display: flex;
  flex: 0 0 15%;
  justify-content: center;
  align-items: center;
`,Ie=r.div`
  padding: 0.2rem 0.5rem;
  background-color: rgb(12, 10, 62);
  border-radius: 4px;
  font-size: 1rem;
  color: white;
`;var Ne=function(r){var n=r.isMultiSelect,o=r.isStyledItem,i=r.placeholder,l=r.options,c=r.value,s=r.maxHeight,u=r.onChangeValue,p=te(e.useState(!1),2),d=p[0],f=p[1];return e.createElement(Z,{theme:t(a)},e.createElement(ke,null,e.createElement(Ce,{id:"gsSelectInputField",onClick:function(){return f(!d)},"aria-hidden":"true"},e.createElement($e,{"data-testid":"gsSelectInputValues"},0!==c.length?o?c.map((function(t){return e.createElement(Ie,null,t)})):c.map((function(e){return e})).toString():"".concat(i)),e.createElement(Oe,null,"+")),e.createElement(le,{maxHeight:s,visibility:d},l.map((function(t){return e.createElement(Ee,{key:t,name:t,isMultiSelect:n,updateCheckStatus:function(e){!function(e){var t=re(c);n?e.Checked?t.push(e.Name):t=t.filter((function(t){return t!==e.Name})):(t=[]).push(e.Name),u(t)}(e)}})})))))};Ne.propTypes={isMultiSelect:X.bool,isStyledItem:X.bool,placeholder:X.string,options:X.arrayOf(X.string),value:X.arrayOf(X.string),maxHeight:X.string,onChangeValue:X.func},Ne.defaultProps={isMultiSelect:!1,isStyledItem:!1,placeholder:"Select an option",options:[],value:[],maxHeight:"200",onChangeValue:function(){}};export{de as GSAutocomplete,ee as GSButton,Se as GSInputNumber,ge as GSInputText,Ne as GSSelectInput};
