(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about",compra:"compra",home:"home"}[e]||e)+"."+{about:"f86c5a10",compra:"a2e15c2f",home:"db3c30cb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={compra:1,home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",compra:"compra",home:"home"}[e]||e)+"."+{about:"31d6cfe0",compra:"79eca45d",home:"762e9b61"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f7":function(e,t,n){},"20a6":function(e,t,n){},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.f33c32b6.png"},"53d7":function(e,t,n){"use strict";var r=n("01f7"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navegador"),n("transition",{attrs:{name:"fade"}},[n("router-view")],1),n("pie")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"nav"}},[r("div",{staticClass:"contenedor"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:n("4ffd"),alt:""}})]),r("div",{staticClass:"links"},[r("router-link",{attrs:{to:"/"}},[e._v("Inicio")]),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)])},u=[],c={name:"Navegador"},s=c,l=(n("e7a8"),n("2877")),f=Object(l["a"])(s,i,u,!1,null,null,null),d=f.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"foot"}},[n("div",{staticClass:"middle"}),n("div",{staticClass:"last"},[n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("Ayuda")])]),n("li",[n("a",{attrs:{href:""}},[e._v("Términos y condiciones")])]),n("li",[n("a",{attrs:{href:""}},[e._v("Políticas de privacidad")])])]),n("p",[e._v("Steamia 2020 // © Todos los derechos reservados.")])])])}],h={name:"Pie"},v=h,b=(n("53d7"),Object(l["a"])(v,p,m,!1,null,null,null)),g=b.exports,y={name:"app",components:{navegador:d,pie:g}},_=y,w=(n("5c0b"),Object(l["a"])(_,o,a,!1,null,null,null)),O=w.exports,j=(n("d3b7"),n("8c4f"));r["a"].use(j["a"]);var E=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/:tituloShow",name:"Stream",component:function(){return n.e("compra").then(n.bind(null,"7057"))}}],k=new j["a"]({routes:E}),C=k;n("1157"),n("4989"),n("f9e3");r["a"].config.productionTip=!1,new r["a"]({router:C,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},e7a8:function(e,t,n){"use strict";var r=n("20a6"),o=n.n(r);o.a}});
//# sourceMappingURL=app.d6cbda93.js.map