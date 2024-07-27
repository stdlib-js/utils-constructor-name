// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.2.2-esm/index.mjs";import{REGEXP as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-function-name@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@v0.2.1-esm/index.mjs";function s(s){var n,i,o;if(("Object"===(i=t(s).slice(8,-1))||"Error"===i)&&s.constructor){if("string"==typeof(o=s.constructor).name)return o.name;if(n=e.exec(o.toString()))return n[1]}return r(s)?"Buffer":i}export{s as default};
//# sourceMappingURL=index.mjs.map
