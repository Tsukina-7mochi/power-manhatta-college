(()=>{var e={539:(e,o,t)=>{"use strict";t.d(o,{Z:()=>s});var n=t(537),r=t.n(n),a=t(645),i=t.n(a)()(r());i.push([e.id,"@import url(https://use.fontawesome.com/releases/v6.1.1/css/all.css);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap);"]),i.push([e.id,'html,body{padding:0;margin:0}main{--bg-color: springgreen;--text-color: white;--shadow-color: black;display:grid;grid-template-rows:1fr auto;width:100vw;height:100vh;background-color:var(--bg-color);color:var(--text-color);text-shadow:.3em .3em var(--shadow-color)}main div#text{overflow:hidden}main div#text textarea{width:100%;height:100%;overflow:visible;box-sizing:border-box;border:3px solid rgba(0,0,0,0);font-family:"Dela Gothic One",cursive;font-size:8vh;line-height:1.25;background-color:inherit;color:inherit;text-shadow:inherit;min-height:1em;outline:none;resize:none;text-align:center}main div#text textarea:focus{border-color:var(--text-color)}main div#controls{display:flex;width:100%;align-items:center;justify-content:center;gap:.2em;padding:.2em 0}main div#controls>*{display:block}main div#controls button#tweet{font-size:24px;padding:5px 20px;background-color:var(--text-color);color:var(--bg-color);text-shadow:.1em .1em var(--shadow-color);border:none;border-radius:1em}',"",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAGA,UACE,SAAA,CACA,QAAA,CAGF,KACE,uBAAA,CACA,mBAAA,CACA,qBAAA,CAEA,YAAA,CACA,2BAAA,CACA,WAAA,CACA,YAAA,CACA,gCAAA,CACA,uBAAA,CACA,yCAAA,CAEA,cACE,eAAA,CAEA,uBACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,qBAAA,CACA,8BAAA,CACA,qCAAA,CACA,aAAA,CACA,gBAAA,CACA,wBAAA,CACA,aAAA,CACA,mBAAA,CACA,cAAA,CACA,YAAA,CACA,WAAA,CACA,iBAAA,CAEA,6BACE,8BAAA,CAKN,kBACE,YAAA,CACA,UAAA,CACA,kBAAA,CACA,sBAAA,CACA,QAAA,CACA,cAAA,CACA,oBACE,aAAA,CAGF,+BACE,cAAA,CACA,gBAAA,CACA,kCAAA,CACA,qBAAA,CACA,yCAAA,CACA,WAAA,CACA,iBAAA",sourcesContent:["@import url('https://use.fontawesome.com/releases/v6.1.1/css/all.css');\n@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n}\n\nmain {\n  --bg-color: springgreen;\n  --text-color: white;\n  --shadow-color: black;\n\n  display: grid;\n  grid-template-rows: 1fr auto;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-color);\n  color: var(--text-color);\n  text-shadow: 0.3em 0.3em var(--shadow-color);\n\n  div#text {\n    overflow: hidden;\n\n    textarea {\n      width: 100%;\n      height: 100%;\n      overflow: visible;\n      box-sizing: border-box;\n      border: 3px solid transparent;\n      font-family: 'Dela Gothic One', cursive;\n      font-size: 8vh;\n      line-height: 1.25;\n      background-color: inherit;\n      color: inherit;\n      text-shadow: inherit;\n      min-height: 1em;\n      outline: none;\n      resize: none;\n      text-align: center;\n\n      &:focus {\n        border-color: var(--text-color);\n      }\n    }\n  }\n\n  div#controls {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2em;\n    padding: 0.2em 0;\n    > * {\n      display: block;\n    }\n\n    button#tweet {\n      font-size: 24px;\n      padding: 5px 20px;\n      background-color: var(--text-color);\n      color: var(--bg-color);\n      text-shadow: 0.1em 0.1em var(--shadow-color);\n      border: none;\n      border-radius: 1em;\n    }\n  }\n}"],sourceRoot:""}]);const s=i},645:e=>{"use strict";e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t="",n=void 0!==o[5];return o[4]&&(t+="@supports (".concat(o[4],") {")),o[2]&&(t+="@media ".concat(o[2]," {")),n&&(t+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),t+=e(o),n&&(t+="}"),o[2]&&(t+="}"),o[4]&&(t+="}"),t})).join("")},o.i=function(e,t,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var A=[].concat(e[l]);n&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),o.push(A))}},o}},537:e=>{"use strict";e.exports=function(e){var o=e[1],t=e[3];if(!t)return o;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),a="/*# ".concat(r," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([a]).join("\n")}return[o].join("\n")}},545:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>f});var n=t(379),r=t.n(n),a=t(795),i=t.n(a),s=t(569),c=t.n(s),l=t(565),A=t.n(l),d=t(216),u=t.n(d),p=t(589),C=t.n(p),h=t(539),v={};v.styleTagTransform=C(),v.setAttributes=A(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(h.Z,v);const f=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{"use strict";var o=[];function t(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],A=a[l]||0,d="".concat(l," ").concat(A);a[l]=A+1;var u=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)o[u].references++,o[u].updater(p);else{var C=r(p,n);n.byIndex=s,o.splice(s,0,{identifier:d,updater:C,references:1})}i.push(d)}return i}function r(e,o){var t=o.domAPI(o);return t.update(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap&&o.supports===e.supports&&o.layer===e.layer)return;t.update(e=o)}else t.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);o[s].references--}for(var c=n(e,r),l=0;l<a.length;l++){var A=t(a[l]);0===o[A].references&&(o[A].updater(),o.splice(A,1))}a=c}}},569:e=>{"use strict";var o={};e.exports=function(e,t){var n=function(e){if(void 0===o[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var o=document.createElement("style");return e.setAttributes(o,e.attributes),e.insert(o,e.options),o}},565:(e,o,t)=>{"use strict";e.exports=function(e){var o=t.nc;o&&e.setAttribute("nonce",o)}},795:e=>{"use strict";e.exports=function(e){var o=e.insertStyleElement(e);return{update:function(t){!function(e,o,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,r&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(n,e,o.options)}(o,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)}}}},589:e=>{"use strict";e.exports=function(e,o){if(o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}},519:(e,o,t)=>{var n,r;n=[t,o,t(545)],void 0===(r=function(e,o){"use strict";const t=["text","bgColor","textColor","shadowColor"],n=function(e){const o=(e=>{let o="";return void 0!==e.text&&(o+=`&text=${window.encodeURIComponent(e.text)}`),void 0!==e.bgColor&&(o+=`&bgColor=${window.encodeURIComponent(e.bgColor)}`),void 0!==e.textColor&&(o+=`&textColor=${window.encodeURIComponent(e.textColor)}`),void 0!==e.shadowColor&&(o+=`&shadowColor=${window.encodeURIComponent(e.shadowColor)}`),o.length>0&&(o="?"+o.slice(1)),o})(e);window.history.replaceState(null,"",`${window.location.pathname}${o}`)};window.addEventListener("load",(()=>{const e=document.querySelector("main"),o=document.querySelector("#text textarea"),r=document.getElementById("color_bg"),a=document.getElementById("color_text"),i=document.getElementById("color_shadow");if(null===e)throw Error("elMain is null");if(null===o)throw Error("elTextarea is null");if(null===r)throw Error("elInputColorBg is null");if(null===a)throw Error("elInputColorText is null");if(null===i)throw Error("elInputColorShadow is null");let s={};const c=function(e){const o=new Map;return e.slice(1).split("&").forEach((e=>{const[t,n]=e.split("=");void 0!==n&&o.set(t,n)})),o}(window.location.search);t.forEach((t=>{if(c.has(t)){const n=decodeURIComponent(c.get(t));switch(s[t]=n,t){case"text":o.value=n;break;case"bgColor":r.value=n,e.style.setProperty("--bg-color",n),s.bgColor=n;break;case"textColor":a.value=n,e.style.setProperty("--text-color",n),s.textColor=n;break;case"shadowColor":i.value=n,e.style.setProperty("--shadow-color",n),s.shadowColor=n}}})),o.addEventListener("input",(()=>{s.text=o.value,n(s)})),r.addEventListener("input",(()=>{e.style.setProperty("--bg-color",r.value),s.bgColor=r.value,n(s)})),a.addEventListener("input",(()=>{e.style.setProperty("--text-color",a.value),s.textColor=a.value,n(s)})),i.addEventListener("input",(()=>{e.style.setProperty("--shadow-color",i.value),s.shadowColor=i.value,n(s)}))}))}.apply(o,n))||(e.exports=r)}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,t(519)})();
//# sourceMappingURL=main.bundle.js.map