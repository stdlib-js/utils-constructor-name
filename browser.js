// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,n="function"==typeof i?i.toStringTag:"",a=e&&"symbol"==typeof Symbol.toStringTag?function(e){var i,a,o,c,s;if(null==e)return r.call(e);a=e[n],s=n,i=null!=(c=e)&&t.call(c,s);try{e[n]=void 0}catch(t){return r.call(e)}return o=r.call(e),i?e[n]=a:delete e[n],o}:function(e){return r.call(e)},o="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function s(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function p(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+l(n):l(n)+e,i&&(e="-"+e)),e}var u=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function g(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!s(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=p(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=p(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var d=Math.abs,h=String.prototype.toLowerCase,y=String.prototype.toUpperCase,b=String.prototype.replace,w=/e\+(\d)$/,v=/e-(\d)$/,m=/^(\d+)$/,_=/^(\d+)e/,E=/\.0$/,S=/\.0*e/,x=/(\..*[^0])0*e/;function k(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":d(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=b.call(t,x,"$1e"),t=b.call(t,S,"e"),t=b.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=b.call(t,w,"e+0$1"),t=b.call(t,v,"e-0$1"),e.alternate&&(t=b.call(t,m,"$1."),t=b.call(t,_,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):h.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var A=String.fromCharCode,T=isNaN,V=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,i,n,a,o,c,s,l,u,f,d,h;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if("string"==typeof(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=O(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,T(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,T(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=g(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!T(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=T(a)?String(i.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=k(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=p(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,f=i.width,d=i.padRight,h=void 0,(h=f-u.length)<0?u:u=d?u+j(h):j(h)+u)),o+=i.arg||"",c+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function P(e){var r,t;if("string"!=typeof e)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var R=Object.prototype,G=R.toString,Z=R.__defineGetter__,B=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__,N=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&B&&B.call(e,r,t.set),e};function X(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;X(M,"REGEXP",U);var z=Array.isArray?Array.isArray:function(e){return"[object Array]"===a(e)};function q(e){return null!==e&&"object"==typeof e}return X(q,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!z(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(q)),function(e){var r,t,i,n;if(("Object"===(t=a(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=U.exec(i.toString()))return r[1]}return q(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).constructorName=r();
//# sourceMappingURL=browser.js.map
