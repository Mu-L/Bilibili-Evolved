!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["feeds/fold-comments"]=n():e["feeds/fold-comments"]=n()}(globalThis,(()=>(()=>{var e,n,o={918:(e,n,o)=>{var t=o(218)((function(e){return e[1]}));t.push([e.id,".bb-comment .fold-comment,\n.bili-comment-container .fold-comment {\n  position: sticky;\n  bottom: 0;\n  height: 40px;\n  width: 100%;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: #99a2aa;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  z-index: 110;\n  border-radius: 4px;\n}\n.bb-comment .fold-comment:hover,\n.bili-comment-container .fold-comment:hover {\n  color: black;\n}\nbody.dark .bb-comment .fold-comment,\nbody.dark .bili-comment-container .fold-comment {\n  background-color: #444;\n  color: #eee;\n}\nbody.dark .bb-comment .fold-comment:hover,\nbody.dark .bili-comment-container .fold-comment:hover {\n  color: var(--theme-color);\n}\n\n.bili-comment-container.bili-dyn-comment .reply-list {\n  padding-bottom: 8px !important;\n}\n.bili-comment-container .fold-comment {\n  font-size: 13px;\n}\n.bili-comment-container .at-panel,\n.bili-comment-container .emoji-panel,\n.bili-comment-container .reply-box .box-expand,\n.bili-comment-container .reply-operation .operation-list {\n  z-index: 111 !important;\n}",""]),e.exports=t},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o=e(n);return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,o,t){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(t)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);t&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),n.push(l))}},n}},279:(e,n,o)=>{var t=o(918);t&&t.__esModule&&(t=t.default),e.exports="string"==typeof t?t:t.toString()},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api},391:e=>{"use strict";e.exports=coreApis.observer}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,t){if(1&t&&(o=this(o)),8&t)return o;if("object"==typeof o&&o){if(4&t&&o.__esModule)return o;if(16&t&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var c={};e=e||[null,n({}),n([]),n(n)];for(var a=2&t&&o;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((e=>c[e]=()=>o[e]));return c.default=()=>o,r.d(i,c),i},r.d=(e,n)=>{for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>l});const e=coreApis.componentApis.define,n=coreApis.componentApis.styledComponent,o=coreApis.utils.urls;var t=r(799);const c=coreApis.spinQuery;var a=r(391);const l=(0,e.defineComponentMetadata)({name:"foldComments",displayName:"快速收起评论",description:{"zh-CN":"动态里查看评论区时, 在底部添加一个`收起评论`按钮, 这样就不用再回到上面收起了."},urlInclude:o.feedsUrlsWithoutDetail,tags:[componentsTags.feeds],entry:(0,n.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,279,23))),(async()=>{const{forEachFeedsCard:e}=await Promise.resolve().then(r.t.bind(r,799,23)),{childList:n}=await Promise.resolve().then(r.t.bind(r,391,23)),o=".bb-comment, .bili-comment-container";e({added:e=>(e=>{const r=async(n,t)=>{const r=await(0,c.select)((()=>dq(n,o)));if(null!==r.querySelector(".fold-comment"))return;if(null===r)return void console.error("未找到评论区");const i=document.createElement("div");i.classList.add("fold-comment"),i.innerHTML="收起评论",i.addEventListener("click",(()=>{t(),e.scrollIntoView(),window.scrollBy({top:-75})})),r.insertAdjacentElement("beforeend",i)};if("v2"!==t.feedsCardsManager.managerType)if("v1"!==t.feedsCardsManager.managerType)console.warn("unrecognized card type",e);else{const o=e.querySelector(".panel-area");if(null===o)return void console.warn("panelArea not found",e);const t=()=>{e.querySelector(".button-bar").children[1]?.click()};if(0===o.childElementCount){const[e]=n(o,(n=>{n.length>0&&(r(o,t),e.disconnect())}))}else r(o,t)}else{const n=dq(e,o),t=()=>{dq(e,".bili-dyn-action.comment")?.click()};n?r(n,t):(0,a.childListSubtree)(e,(()=>{dq(e,o)&&r(e,t)}))}})(e.element)})})),commitHash:"f539020624c731a30f1c5b3d77a0b0ed514dfce0",coreVersion:"2.8.12"})})(),i=i.component})()));