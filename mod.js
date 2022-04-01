// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,n=e;var o=function(r){return n.call(r)},u=Object.prototype.hasOwnProperty;var a=function(r,t){return null!=r&&u.call(r,t)},i="function"==typeof Symbol?Symbol.toStringTag:"",c=a,l=i,f=e;var y=o,p=function(r){var t,e,n;if(null==r)return f.call(r);e=r[l],t=c(r,l);try{r[l]=void 0}catch(t){return f.call(r)}return n=f.call(r),t?r[l]=e:delete r[l],n},s=t()?p:y,b="function"==typeof Object.defineProperty?Object.defineProperty:null;var v=function(){try{return b({},"x",{}),!0}catch(r){return!1}},_=Object.defineProperty,m=Object.prototype,d=m.toString,g=m.__defineGetter__,j=m.__defineSetter__,S=m.__lookupGetter__,w=m.__lookupSetter__;var h=_,E=function(r,t,e){var n,o,u,a;if("object"!=typeof r||null===r||"[object Array]"===d.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===d.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(S.call(r,t)||w.call(r,t)?(n=r.__proto__,r.__proto__=m,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,a="set"in e,o&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&g&&g.call(r,t,e.get),a&&j&&j.call(r,t,e.set),r},O=v()?h:E;var A=function(r,t,e){O(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var P=function(){return/^\s*function\s*([^(]*)/i},T=P;A(T,"REGEXP",P());var B=T,G=s;var k=Array.isArray?Array.isArray:function(r){return"[object Array]"===G(r)};var x=function(r){return null!==r&&"object"==typeof r};A(x,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!k(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(x));var V=x;var R=s,X=B.REGEXP,C=function(r){return V(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var F=function(r){var t,e,n;if(("Object"===(e=R(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=X.exec(n.toString()))return t[1]}return C(r)?"Buffer":e};export{F as default};
//# sourceMappingURL=mod.js.map
