!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/legacy-image-viewer"]=t():e["feeds/legacy-image-viewer"]=t()}(globalThis,(()=>(()=>{var e,t,o={218:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=218,e.exports=t},588:e=>{"use strict";e.exports="将动态中左右切换式的图片改回传统的平铺展示. (在动态详情中可能稍有延迟)\n"}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,n),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,n.d(a,s),a},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";n.d(a,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.componentApis.feeds.api,o=coreApis.utils.urls,r=(0,e.defineComponentMetadata)({name:"legacyFeedsImageViewer",displayName:"动态图片平铺展示",tags:[componentsTags.feeds],urlInclude:o.feedsUrls,entry:()=>{(0,t.forEachFeedsCard)({added:e=>{const o=(0,t.getVueData)(e.element),r=o?.data?.type,n="DYNAMIC_TYPE_FORWARD"===r?"data.orig.modules.module_dynamic.major.opus.style":"data.modules.module_dynamic.major.opus.style";if(1===lodash.get(o,n,null))return void lodash.set(o,n,void 0);const a=o?.data?.modules;if(Array.isArray(a)){const e=a.find((e=>"MODULE_TYPE_TOP"===e.module_type)),t=a.find((e=>"MODULE_TYPE_CONTENT"===e.module_type)),o=e?.module_top?.display?.album,r=t?.module_content?.paragraphs;o&&r&&(a.splice(a.indexOf(e),1),r.push({align:0,para_type:2,pic:{pics:o.pics,style:1}}))}}})},commitHash:"55fb3f2157b163fc7108120ef1c6e614f477c098",coreVersion:"2.9.6",description:(()=>{const e=n(218);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,588,17)).then((e=>e.default))}})()})})(),a=a.component})()));