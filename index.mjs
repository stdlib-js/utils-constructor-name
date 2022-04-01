// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-function-name@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";var s=t,n=r.REGEXP,i=e;var o=function(t){var r,e,o;if(("Object"===(e=s(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(o=t.constructor).name)return o.name;if(r=n.exec(o.toString()))return r[1]}return i(t)?"Buffer":e};export{o as default};
//# sourceMappingURL=index.mjs.map
