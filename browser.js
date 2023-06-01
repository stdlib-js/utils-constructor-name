// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol.toStringTag:"",o=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,i,u,c,f;if(null==t)return e.call(t);i=t[n],f=n,o=null!=(c=t)&&r.call(c,f);try{t[n]=void 0}catch(r){return e.call(t)}return u=e.call(t),o?t[n]=i:delete t[n],u}:function(t){return e.call(t)},i="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty,c=Object.prototype,f=c.toString,l=c.__defineGetter__,a=c.__defineSetter__,y=c.__lookupGetter__,p=c.__lookupSetter__,s=function(){try{return i({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(y.call(t,e)||p.call(t,e)?(n=t.__proto__,t.__proto__=c,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(t,e,r.get),u&&a&&a.call(t,e,r.set),t};function b(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(){return/^\s*function\s*([^(]*)/i}var d=/^\s*function\s*([^(]*)/i;b(_,"REGEXP",d);var m=Array.isArray?Array.isArray:function(t){return"[object Array]"===o(t)};function g(t){return null!==t&&"object"==typeof t}return b(g,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!m(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(g)),function(t){var e,r,n,i;if(("Object"===(r=o(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=d.exec(n.toString()))return e[1]}return g(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).constructorName=e();
//# sourceMappingURL=browser.js.map
