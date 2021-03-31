"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("styled-components/macro");var n=r(e),o=r(t);function a(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var i="function"==typeof Symbol&&Symbol.for,l=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,d=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,m=i?Symbol.for("react.async_mode"):60111,y=i?Symbol.for("react.concurrent_mode"):60111,h=i?Symbol.for("react.forward_ref"):60112,b=i?Symbol.for("react.suspense"):60113,g=i?Symbol.for("react.suspense_list"):60120,v=i?Symbol.for("react.memo"):60115,x=i?Symbol.for("react.lazy"):60116,S=i?Symbol.for("react.block"):60121,w=i?Symbol.for("react.fundamental"):60117,E=i?Symbol.for("react.responder"):60118,k=i?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case m:case y:case c:case d:case s:case b:return e;default:switch(e=e&&e.$$typeof){case p:case h:case x:case v:case f:return e;default:return t}}case u:return t}}}function O(e){return C(e)===y}var $={AsyncMode:m,ConcurrentMode:y,ContextConsumer:p,ContextProvider:f,Element:l,ForwardRef:h,Fragment:c,Lazy:x,Memo:v,Portal:u,Profiler:d,StrictMode:s,Suspense:b,isAsyncMode:function(e){return O(e)||C(e)===m},isConcurrentMode:O,isContextConsumer:function(e){return C(e)===p},isContextProvider:function(e){return C(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===l},isForwardRef:function(e){return C(e)===h},isFragment:function(e){return C(e)===c},isLazy:function(e){return C(e)===x},isMemo:function(e){return C(e)===v},isPortal:function(e){return C(e)===u},isProfiler:function(e){return C(e)===d},isStrictMode:function(e){return C(e)===s},isSuspense:function(e){return C(e)===b},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===d||e===s||e===b||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===v||e.$$typeof===f||e.$$typeof===p||e.$$typeof===h||e.$$typeof===w||e.$$typeof===E||e.$$typeof===k||e.$$typeof===S)},typeOf:C},T=a((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case s:case o:case i:case a:case f:return p;default:var h=p&&p.$$typeof;switch(h){case u:case d:case y:case m:case l:return h;default:return t}}case n:return t}}}var S=c,w=s,E=u,k=l,C=r,O=d,$=o,T=y,I=m,P=n,j=i,N=a,A=f,M=!1;function R(e){return x(e)===s}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=E,t.ContextProvider=k,t.Element=C,t.ForwardRef=O,t.Fragment=$,t.Lazy=T,t.Memo=I,t.Portal=P,t.Profiler=j,t.StrictMode=N,t.Suspense=A,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||x(e)===c},t.isConcurrentMode=R,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===y},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===i||e===a||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v||e.$$typeof===h)},t.typeOf=x}()}));T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf;var I=a((function(e){"production"===process.env.NODE_ENV?e.exports=$:e.exports=T})),P=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function A(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var M=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=A(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))j.call(r,i)&&(o[i]=r[i]);if(P){n=P(r);for(var l=0;l<n.length;l++)N.call(r,n[l])&&(o[n[l]]=r[n[l]])}}return o},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_=function(){};if("production"!==process.env.NODE_ENV){var F=R,V={},z=Function.call.bind(Object.prototype.hasOwnProperty);_=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function D(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(z(e,a)){var i;try{if("function"!=typeof e[a]){var l=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw l.name="Invariant Violation",l}i=e[a](t,a,n,r,null,F)}catch(e){i=e}if(!i||i instanceof Error||_((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in V)){V[i.message]=!0;var u=o?o():"";_("Failed "+r+" type: "+i.message+(null!=u?u:""))}}}D.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(V={})};var L=D,q=Function.call.bind(Object.prototype.hasOwnProperty),B=function(){};function H(){return null}"production"!==process.env.NODE_ENV&&(B=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var W=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator;var n="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:l(H),arrayOf:function(e){return l((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new i("Invalid "+o+" `"+a+"` of type `"+s(l)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<l.length;u++){var c=e(l,u,n,o,a+"["+u+"]",R);if(c instanceof Error)return c}return null}))},element:l((function(t,r,n,o,a){var l=t[r];return e(l)?null:new i("Invalid "+o+" `"+a+"` of type `"+s(l)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:l((function(e,t,r,n,o){var a=e[t];return I.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+s(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return l((function(t,r,o,a,l){if(!(t[r]instanceof e)){var u=e.name||n;return new i("Invalid "+a+" `"+l+"` of type `"+(((c=t[r]).constructor&&c.constructor.name?c.constructor.name:n)+"` supplied to `")+o+"`, expected instance of `"+u+"`.")}var c;return null}))},node:l((function(e,t,r,n,o){return c(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return l((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],u=s(l);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(q(l,c)){var d=e(l,c,n,o,a+"."+c,R);if(d instanceof Error)return d}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&B(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),H;function t(t,r,n,o,l){for(var u=t[r],c=0;c<e.length;c++)if(a(u,e[c]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===d(t)?String(t):t}));return new i("Invalid "+o+" `"+l+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return l(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&B("Invalid argument supplied to oneOfType, expected an instance of array."),H;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return B("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+f(r)+" at index "+t+"."),H}return l((function(t,r,n,o,a){for(var l=0;l<e.length;l++)if(null==(0,e[l])(t,r,n,o,a,R))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}))},shape:function(e){return l((function(t,r,n,o,a){var l=t[r],u=s(l);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if(d){var f=d(l,c,n,o,a+"."+c,R);if(f)return f}}return null}))},exact:function(e){return l((function(t,r,n,o,a){var l=t[r],u=s(l);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var c=M({},t[r],e);for(var d in c){var f=e[d];if(!f)return new i("Invalid "+o+" `"+a+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=f(l,d,n,o,a+"."+d,R);if(p)return p}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function l(e){if("production"!==process.env.NODE_ENV)var r={},o=0;function a(a,l,u,c,s,d,f){if(c=c||n,d=d||u,f!==R){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+u;!r[m]&&o<3&&(B("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==l[u]?a?null===l[u]?new i("The "+s+" `"+d+"` is marked as required in `"+c+"`, but its value is `null`."):new i("The "+s+" `"+d+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(l,u,c,s,d)}var l=a.bind(null,!1);return l.isRequired=a.bind(null,!0),l}function u(e){return l((function(t,r,n,o,a,l){var u=t[r];return s(u)!==e?new i("Invalid "+o+" `"+a+"` of type `"+d(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null}))}function c(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(c);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!c(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!c(i[1]))return!1}return!0;default:return!1}}function s(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function d(e){if(null==e)return""+e;var t=s(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function f(e){var t=d(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=L,o.resetWarningCache=L.resetWarningCache,o.PropTypes=o,o};function U(){}function Y(){}Y.resetWarningCache=U;var G=a((function(e){if("production"!==process.env.NODE_ENV){var t=I;e.exports=W(t.isElement,!0)}else e.exports=function(){function e(e,t,r,n,o,a){if(a!==R){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Y,resetWarningCache:U};return r.PropTypes=r,r}()}));!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('a,a:hover{color:inherit;text-decoration:none}.checkbox,a:hover{cursor:pointer}.checkbox{position:relative;width:1.5em;height:1.5em;border:1px solid grey;border-radius:4px;appearance:none;outline:0;transition:background 175ms cubic-bezier(.1,.1,.25,1);background-color:#fff}.checkbox:before{position:absolute;content:"";display:block;top:0;left:6px;width:4px;height:12px;border-color:#fff;border-style:solid;border-width:0 2px 2px 0;transform:rotate(45deg);opacity:0}.checkbox:checked{color:#fff;border-color:#0c0a3e;background:#0c0a3e}.checkbox:checked:before{opacity:1}.input{background-color:#fafafa;outline:none;border:1px solid #000;border-radius:4px;padding:.5rem}');const J=e=>`${"Primary"===e.color&&e.theme.palette.primary.main||"Secondary"===e.color&&e.theme.palette.secondary.main||"Info"===e.color&&e.theme.palette.info.main||"Warning"===e.color&&e.theme.palette.warning.main||"Danger"===e.color&&e.theme.palette.danger.main}`,X=o.default.button`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border: none;
  font-weight: lighter;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;
  font-size: ${e=>"Small"===e.size&&t.css(["0.75rem"])||"Medium"===e.size&&t.css(["1rem"])||"Large"===e.size&&t.css(["1.25rem"])};
  background-color: ${e=>J(e)};
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${e=>(e=>`${"Primary"===e.color&&e.theme.palette.primary.dark||"Secondary"===e.color&&e.theme.palette.secondary.dark||"Info"===e.color&&e.theme.palette.info.dark||"Warning"===e.color&&e.theme.palette.warning.dark||"Danger"===e.color&&e.theme.palette.danger.dark}`)(e)};
    color: ${e=>"Text"===e.buttonStyle&&t.css(["white"])};
  }

  ${e=>"Raised"===e.buttonStyle&&t.css(["box-shadow:0 3px 1px -2px rgb(0 0 0 / 20%),0 2px 2px 0 rgb(0 0 0 / 14%),0 1px 5px 0 rgb(0 0 0 / 12%);"])||"Rounded"===e.buttonStyle&&t.css(["border-radius:2rem;"])||"Text"===e.buttonStyle&&t.css(["background:none;color:",";border:"," 1px solid;"],J(e),J(e))}
`,K={palette:{primary:{main:"#2196f3",dark:"#3f91d4"},secondary:{main:"#797c7e",dark:"#656666"},info:{main:"#0288d1",dark:"#01659b"},warning:{main:"#d1a102",dark:"#b48b02"},danger:{main:"#dd0101",dark:"#c00000"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"].join(",")}},Q=({theme:e,children:r})=>n.default.createElement(t.ThemeProvider,{theme:e},r);Q.propTypes={children:G.node.isRequired,theme:G.shape({palette:G.shape({primary:G.shape({main:G.string,dark:G.string}),secondary:G.shape({main:G.string,dark:G.string}),info:G.shape({main:G.string,dark:G.string}),warning:G.shape({main:G.string,dark:G.string}),danger:G.shape({main:G.string,dark:G.string})}),typography:G.shape({fontFamily:G.string})})},Q.defaultProps={theme:K};var Z=function(r){var o=r.color,a=r.placeholder,i=r.size,l=r.style,u=r.disabled,c=r.onClick;return n.default.createElement(Q,{theme:e.useContext(t.ThemeContext)},n.default.createElement(X,{type:"button",color:o,size:i,buttonStyle:l,disabled:u,onClick:function(){return c()}},""===a?"Add custom text":a))};function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||re(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){if(e){if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ne(e,t):void 0}}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Z.propTypes={color:G.string,placeholder:G.string,size:G.string,style:G.string,disabled:G.bool,onClick:G.func},Z.defaultProps={color:"Primary",placeholder:"Default button",size:"Small",style:"Standard",disabled:!1,onClick:function(){}};const oe=o.default.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
`,ae=o.default.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  cursor: pointer;
  transition: border-color 0.4s;
`,ie=o.default.div`
  transition: all 0.5s ease-in-out;
  visibility: visible;
  opacity: 1;
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
  margin-left: 0.5rem;
  overflow: auto;
`,le=o.default.div`
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
`,ue=({description:e,optionSelected:t})=>n.default.createElement(le,{"data-testid":e,onClick:()=>t(e),"aria-hidden":"true"},n.default.createElement("div",null,n.default.createElement("span",null,e)));ue.propTypes={description:G.string.isRequired,optionSelected:G.func.isRequired};var ce=function(r){var o=r.noResultsMessage,a=r.placeholder,i=r.disabled,l=r.maxHeight,u=r.options,c=r.value,s=r.onChangeValue,d=ee(n.default.useState(!1),2),f=d[0],p=d[1],m=ee(n.default.useState([]),2),y=m[0],h=m[1],b=function(e){var t=u.filter((function(t){return t.toUpperCase().startsWith(e.toUpperCase())}));h(t)};n.default.useEffect((function(){b(c)}),[c]);var g=function(e){s(e),b(e),p(!f)},v=function(){return 0===y.length?n.default.createElement(le,null,o):y.map((function(e){return n.default.createElement(ue,{key:e,description:e,optionSelected:g})}))},x=function(){return""!==c?n.default.createElement(v,null):u.map((function(e){return n.default.createElement(ue,{key:e,description:e,optionSelected:g})}))};return n.default.createElement(Q,{theme:e.useContext(t.ThemeContext)},n.default.createElement(oe,null,n.default.createElement(ae,{"data-testid":"gsAutocompleteField",className:"gsAutocompleteField","aria-hidden":"true",onClick:function(){return!i&&p(!f)}},n.default.createElement("div",{style:{width:"100%"}},n.default.createElement("input",{style:{width:"100%"},autoComplete:"off","data-testid":"autocompleteInput",placeholder:a,disabled:i,value:c,type:"text",name:"gsAutocompleteInputField",id:"gsAutocompleteInputField",className:"input",onChange:function(e){return function(e){p(!0),s(e)}(e.target.value)}}))),f&&n.default.createElement(ie,{"data-testid":"gsAutocompleteItemsList",maxHeight:l},n.default.createElement(x,null))))};ce.propTypes={noResultsMessage:G.string,placeholder:G.string,disabled:G.bool,maxHeight:G.string,options:G.arrayOf(G.string),value:G.string,onChangeValue:G.func},ce.defaultProps={noResultsMessage:"No results",placeholder:"choose an option",disabled:!1,maxHeight:"200",options:[],value:"",onChangeValue:function(){}};const se=o.default.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  width: 100%;
`,de=o.default.input`
  width: 100%;
  &:focus {
    border: ${e=>"Outlined"===e.inputStyle&&t.css([""," 1.5px solid"],e.theme.palette.primary.main)};
    border-bottom: ${e=>("Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle)&&t.css([""," 1.5px solid"],e.theme.palette.primary.main)};
  }

  ${e=>("Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle)&&t.css(["border:none;border-bottom:1px solid gray;border-radius:0;"])}

  ${e=>"Filled"===e.inputStyle&&t.css(["background:#d7d3d3;"])}
`,fe=o.default.label`
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

  ${e=>e.isFocused&&t.css(["color:",";transform:",";font-size:",";"],e.theme.palette.primary.main,"Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle?t.css(["translateY(-145%)"]):t.css(["translateY(-90%)"]),"Bottom-Lined"===e.inputStyle||"Filled"===e.inputStyle?t.css(["0.75rem"]):t.css(["0.7rem"]))}

  ${e=>e.isFocused&&"Outlined"===e.inputStyle&&t.css(["background:#fafafa;padding:0 0.2rem;"])};
`,pe=o.default.div`
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
  cursor: pointer;
`;var me=function(r){var o=r.style,a=r.placeholder,i=r.maxLength,l=r.hasResetButton,u=r.fieldName,c=r.disabled,s=r.value,d=r.onChangeValue,f=ee(n.default.useState(!1),2),p=f[0],m=f[1];return n.default.createElement(Q,{theme:e.useContext(t.ThemeContext)},n.default.createElement(se,{id:"gsInputText",onFocus:function(){return m(!0)},onBlur:function(){""===s&&m(!1)}},n.default.createElement("div",null,n.default.createElement(de,{inputStyle:o,disabled:c,placeholder:p?a:"",maxLength:"0"!==i?i:"",value:s,type:"text",name:"gsInput",id:"gsInputText",className:"input",onChange:function(e){d(e.target.value)}}),l&&""!==s&&!c&&n.default.createElement(pe,{"aria-hidden":"true",onClick:function(){d(""),m(!1)}},"X"),n.default.createElement(fe,{htmlFor:"gsInputText",isFocused:p,inputStyle:o},u))))};me.propTypes={style:G.string,placeholder:G.string,maxLength:G.string,hasResetButton:G.bool,fieldName:G.string,disabled:G.bool,value:G.string,onChangeValue:G.func},me.defaultProps={style:"Bottom-Lined",placeholder:"Placeholder",maxLength:"0",hasResetButton:!1,fieldName:"Field",disabled:!1,value:"",onChangeValue:function(){}};var ye=function(r){var o=r.format,a=r.disabled,i=r.placeholder,l=r.value,u=r.onChangeValue;n.default.useEffect((function(){u("")}),[o]);return n.default.createElement(Q,{theme:e.useContext(t.ThemeContext)},n.default.createElement("input",{className:"input",value:l,disabled:a,onChange:function(e){return function(e){u(e.target.value.replace(/\D/,""));var t=/(\d)(?=(\d{3})+$)/g;switch(o){case"grouped-commas":u(e.target.value.replaceAll(",","").replace(t,"$1,"));break;case"grouped-dots":u(e.target.value.replaceAll(".","").replace(t,"$1."))}}(e)},placeholder:i}))};ye.propTypes={format:G.string,disabled:G.bool,placeholder:G.string,value:G.string,onChangeValue:G.func},ye.defaultProps={format:"no-grouped",disabled:!1,placeholder:"Insert a number",value:"",onChangeValue:function(){}};var he=o.default("div").withConfig({displayName:"gsSelectInputItem___StyledDiv",componentId:"r99hwb-0"})(["margin-right:",";"],(e=>e._css));const be=({name:e,isMultiSelect:t,updateCheckStatus:r})=>{const[o,a]=n.default.useState(!1);return n.default.useEffect((()=>{t||a(!1)})),n.default.createElement(le,{"aria-hidden":"true",onClick:()=>{r({Name:e,Checked:!o}),a(!o)}},n.default.createElement(he,{_css:t&&"0.5rem"},t&&n.default.createElement("input",{className:"checkbox",type:"checkbox",checked:o&&t,"data-testid":`checkbox-${e}`})),n.default.createElement("div",null,n.default.createElement("span",null,e)))};be.propTypes={name:G.string.isRequired,isMultiSelect:G.bool.isRequired,updateCheckStatus:G.func.isRequired};const ge=o.default.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
`,ve=o.default.div`
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
`,xe=o.default.div`
  flex: 0 0 85%;
  font-weight: lighter;
  display: flex;
  column-gap: 3px;
  flex-flow: wrap;
`,Se=o.default.div`
  display: flex;
  flex: 0 0 15%;
  justify-content: center;
  align-items: center;
`,we=o.default.div`
  padding: 0.2rem 0.5rem;
  background-color: rgb(12, 10, 62);
  border-radius: 4px;
  font-size: 1rem;
  color: white;
`;var Ee=function(r){var o=r.isMultiSelect,a=r.isStyledItem,i=r.placeholder,l=r.options,u=r.value,c=r.maxHeight,s=r.onChangeValue,d=ee(n.default.useState(!1),2),f=d[0],p=d[1];return n.default.createElement(Q,{theme:e.useContext(t.ThemeContext)},n.default.createElement(ge,null,n.default.createElement(ve,{id:"gsSelectInputField",onClick:function(){return p(!f)},"aria-hidden":"true"},n.default.createElement(xe,{"data-testid":"gsSelectInputValues"},0!==u.length?a?u.map((function(e){return n.default.createElement(we,null,e)})):u.map((function(e){return e})).toString():"".concat(i)),n.default.createElement(Se,null,"+")),f&&n.default.createElement(ie,{maxHeight:c},l.map((function(e){return n.default.createElement(be,{key:e,name:e,isMultiSelect:o,updateCheckStatus:function(e){!function(e){var t=te(u);o?e.Checked?t.push(e.Name):t=t.filter((function(t){return t!==e.Name})):(t=[]).push(e.Name),s(t)}(e)}})})))))};Ee.propTypes={isMultiSelect:G.bool,isStyledItem:G.bool,placeholder:G.string,options:G.arrayOf(G.string),value:G.arrayOf(G.string),maxHeight:G.string,onChangeValue:G.func},Ee.defaultProps={isMultiSelect:!1,isStyledItem:!1,placeholder:"Select an option",options:[],value:[],maxHeight:"200",onChangeValue:function(){}},exports.GSAutocomplete=ce,exports.GSButton=Z,exports.GSInputNumber=ye,exports.GSInputText=me,exports.GSSelectInput=Ee;
