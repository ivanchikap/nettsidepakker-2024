!function(){var e={296:function(e){function t(e,t,n){var o,r,d,c,u;function l(){var i=Date.now()-c;i<t&&i>=0?o=setTimeout(l,t-i):(o=null,n||(u=e.apply(d,r),d=r=null))}null==t&&(t=100);var i=function(){d=this,r=arguments,c=Date.now();var i=n&&!o;return o||(o=setTimeout(l,t)),i&&(u=e.apply(d,r),d=r=null),u};return i.clear=function(){o&&(clearTimeout(o),o=null)},i.flush=function(){o&&(u=e.apply(d,r),d=r=null,clearTimeout(o),o=null)},i}t.debounce=t,e.exports=t}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(296);document.addEventListener("DOMContentLoaded",(t=>{const n=document.querySelector("#to-top"),o=document.querySelector(".header__top");let r=o.clientHeight,d=document.documentElement.scrollTop;document.getElementById("sidebar"),window.addEventListener("scroll",(0,e.debounce)((function(){d=document.documentElement.scrollTop,function(e){e>=r+200&&(n.classList.remove("hidden"),o.classList.add("header__top--fixed")),e<r+200&&(n.classList.add("hidden"),o.classList.remove("header__top--fixed"))}(d)}),300)),n.addEventListener("click",(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})}))}))}(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("burger"),t=(document.getElementById("sidebar"),document.body),n=document.getElementById("pageMask");e.addEventListener("click",(e=>{t.classList.toggle("show-sidebar")})),n.addEventListener("click",(e=>{t.classList.remove("show-sidebar")}))}))}();