!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/outer-watchlater"]=e():t["video/outer-watchlater"]=e()}(self,(function(){return function(){var t,e,n={586:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".video-toolbar .ops .watchlater {\n  margin-right: 28px !important;\n  position: relative;\n  width: auto !important;\n}\n@media screen and (max-width: 1320px), (max-height: 750px) {\n.video-toolbar .ops .watchlater {\n    margin-right: max(calc(min(11vw, 11vh) - 117.2px), 6px) !important;\n}\n.video-toolbar .ops .watchlater .text {\n    display: none;\n}\n}\n.video-toolbar .ops .watchlater .tip {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  background: rgba(0,0,0,0.86667);\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #eee;\n  transition: all 0.2s ease-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.video-toolbar .ops .watchlater .tip.show {\n  opacity: 1;\n  pointer-events: initial;\n}\n.video-toolbar .ops .watchlater .be-icon {\n  display: inline-flex;\n}\n.more-ops-list > ul > li:nth-child(2) {\n  display: none !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:m(p,e),references:1}),o.push(u)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,v=0;function m(t,e){var n,o,r;if(e.singleton){var i=v++;n=h||(h=l(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(t,e),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},737:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"watchlater",class:{on:t.on},attrs:{title:"稍后再看"},on:{click:function(e){return t.toggle()}}},[n("VIcon",{attrs:{size:28,icon:"mdi-timetable"}}),t._v(" "),n("span",{staticClass:"text"},[t._v("稍后再看")]),t._v(" "),n("div",{staticClass:"tip",class:{show:t.tipShowing}},[t._v(t._s(t.tipText))])],1)};o._withStripped=!0;var r=coreApis.ui,i=coreApis.componentApis.video.watchlater,a=coreApis.utils.log,s=Vue.extend({components:{VIcon:r.VIcon},data:()=>({watchlaterList:i.watchlaterList,aid:unsafeWindow.aid,tipText:"",tipShowing:!1,tipHandle:0,on:!1}),created(){this.on=this.isInWatchlater()},methods:{isInWatchlater(){return this.watchlaterList.includes(parseInt(this.aid))},showTip(t){this.tipText=t,this.tipShowing=!0,this.tipHandle&&clearTimeout(this.tipHandle),this.tipHandle=setTimeout((()=>{this.tipShowing=!1}),2e3)},async toggle(){try{await(0,i.toggleWatchlater)(this.aid),this.on=this.isInWatchlater(),this.showTip(this.on?"已添加至稍后再看":"已从稍后再看移除")}catch(t){(0,a.logError)(t)}}}}),c=n(379),l=n.n(c),u=n(586),d=n.n(u),p={insert:"head",singleton:!1};l()(d(),p),d().locals;var f=function(t,e,n,o,r,i,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}(s,o,[],!1,null,null,null);f.options.__file="registry/lib/components/video/outer-watchlater/OuterWatchlater.vue";var h=f.exports},156:function(t){"use strict";t.exports=coreApis.observer},109:function(t){"use strict";t.exports=coreApis.utils}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});var t=coreApis.utils.urls;const e={name:"outerWatchlater",displayName:"外置稍后再看",entry:async()=>{const{mountVueComponent:t,getUID:e,playerReady:n}=await Promise.resolve().then(r.t.bind(r,109,23));if(!e())return;await n();const o=dq(".video-toolbar .ops .collect");if(!o)return;const i=t(await Promise.resolve().then(r.bind(r,737)));o.insertAdjacentElement("afterend",i.$el);const{videoChange:a}=await Promise.resolve().then(r.t.bind(r,156,23));a((()=>{i.aid=unsafeWindow.aid}))},tags:[componentsTags.video],description:{"zh-CN":"将视频页面菜单里的`稍后再看`移到外面."},urlInclude:t.videoUrls,urlExclude:t.watchlaterUrls,reload:()=>{dqa(".ops .watchlater").forEach((t=>{t.style.display="inline-block"}))},unload:()=>{dqa(".ops .watchlater").forEach((t=>{t.style.display="none"}))},plugin:{displayName:"稍后再看 - 快捷键支持",setup:({addData:t})=>{t("keymap.actions",(t=>{t.watchlater={displayName:"稍后再看",run:t=>{const{clickElement:e}=t;return e(".video-toolbar .ops .watchlater, .more-ops-list .ops-watch-later, .video-toolbar-module .see-later-box",t)}}})),t("keymap.presets",(t=>{t.watchlater="shift w"}))}}}}(),i=i.component}()}));