(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f86c5a10"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"012f":function(e,t,a){},"01f7":function(e,t,a){},"0bdb":function(e,t,a){e.exports=a.p+"img/slide2.d0ddec5d.jpg"},"20a6":function(e,t,a){},"21ab":function(e,t,a){e.exports=a.p+"img/beatles.a1e0a3e1.jpg"},"408b":function(e,t,a){e.exports=a.p+"img/slide1.ea25587a.jpg"},"53d7":function(e,t,a){"use strict";var n=a("01f7"),i=a.n(n);i.a},"54d7":function(e,t,a){},"55f4":function(e,t,a){e.exports=a.p+"media/queen.aa0945e1.mp4"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navegador"),a("router-view"),a("pie")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"contenedor"},[n("img",{attrs:{src:a("cf05"),alt:""}}),n("div",{staticClass:"links"},[n("router-link",{attrs:{to:"/"}},[e._v("Inicio")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])},s=[],c={name:"Navegador"},l=c,u=(a("e7a8"),a("2877")),d=Object(u["a"])(l,o,s,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"foot"}},[a("div",{staticClass:"middle"}),a("div",{staticClass:"last"},[a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Ayuda")])]),a("li",[a("a",{attrs:{href:""}},[e._v("Términos y condiciones")])]),a("li",[a("a",{attrs:{href:""}},[e._v("Políticas de privacidad")])])]),a("p",[e._v("Steamia 2020 // © Todos los derechos reservados.")])])])}],m={name:"Pie"},h=m,b=(a("53d7"),Object(u["a"])(h,f,v,!1,null,null,null)),_=b.exports,g={name:"app",components:{navegador:p,pie:_}},y=g,C=(a("5c0b"),Object(u["a"])(y,i,r,!1,null,null,null)),x=C.exports,j=(a("d3b7"),a("8c4f")),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("inicio")],1)},E=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"inicio"}},[a("slide"),a("tarjetas")],1)},$=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"slide"}},[a("div",{staticClass:"contenedor"},[a("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},e._l(e.images,(function(t){return a("li",{key:t.id,class:{active:"1"==t.id},attrs:{"data-target":"#carouselExampleFade","data-slide-to":t.id-1}},[e._v(e._s(t.id)+" ")])})),0),a("div",{staticClass:"carousel-inner"},e._l(e.images,(function(t){return a("div",{key:t.id,staticClass:"carousel-item",class:{active:"1"==t.id}},[a("img",{staticClass:"d-block w-100",attrs:{src:t.location,alt:"..."}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",{staticClass:"slide-titulo"},[e._v(e._s(t.title))]),a("div",[a("p",{staticClass:"slide-descrip"},[e._v(e._s(t.description))])])])])})),0),e._m(0),e._m(1)])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("Previous")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("Next")])])}],q={name:"Slide",data:function(){return{images:[{id:"1",title:"Jazz show",description:"Una descripcion para el show que va a venir.",location:a("408b")},{id:"2",title:"Music list",description:"Otra descripcion mas de lo que sera el show.",location:a("0bdb")},{id:"3",title:"Pop and more",description:"No te pierdas el show, entradas exclusivas.",location:a("8593")}]}}},S=q,T=(a("a081"),Object(u["a"])(S,P,k,!1,null,null,null)),M=T.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"streams"}},[a("div",{staticClass:"contenedor"},e._l(e.conciertos,(function(t){return a("div",{key:t.id,staticClass:"concierto",on:{mouseover:function(a){return e.playVideo("video"+t.id)},mouseleave:function(a){return e.stopVideo("video"+t.id)}}},[a("div",{staticClass:"imagen"},[a("img",{attrs:{src:t.location,alt:""}}),a("h3",{staticClass:"titulo"},[e._v(e._s(t.title))]),a("video",{attrs:{id:"video"+t.id,muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:t.video,type:"video/mp4"}})])]),a("div",{staticClass:"container-descrip"},[a("p",{staticClass:"descripcion"},[e._v(e._s(t.description))]),a("div",[a("p",{staticClass:"precio"},[e._v(e._s(t.precio))]),a("button",{staticClass:"btn-comprar"},[e._v("Comprar")])])])])})),0)])},A=[],F={name:"tarjetas",data:function(){return{conciertos:[{id:"1",title:"Beatles",description:"Una descripcion para el show que va a venir, mas larga que las demas para testear.",precio:"2500$",location:a("21ab"),video:a("55f4")},{id:"2",title:"Red hot chilli peppers",description:"Una descripcion para el show que va a venir.",precio:"5000$",location:a("eccd"),video:a("55f4")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("ca67"),video:a("55f4")},{id:"4",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("ca67"),video:a("55f4")}]}},methods:{playVideo:function(e){var t=document.getElementById(e);t.play()},stopVideo:function(e){var t=document.getElementById(e);t.pause()}}},I=F,V=(a("ceb6"),Object(u["a"])(I,U,A,!1,null,null,null)),B=V.exports,J={name:"Inicio",components:{slide:M,tarjetas:B}},N=J,z=(a("cfc5"),Object(u["a"])(N,O,$,!1,null,null,null)),H=z.exports,L={name:"Home",components:{inicio:H}},Q=L,R=Object(u["a"])(Q,w,E,!1,null,null,null),D=R.exports;n["a"].use(j["a"]);var G=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new j["a"]({routes:G}),W=K;a("1157"),a("4989"),a("f9e3");n["a"].config.productionTip=!1,new n["a"]({router:W,render:function(e){return e(x)}}).$mount("#app")},"5a12":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},8593:function(e,t,a){e.exports=a.p+"img/slide3.193e2959.jpg"},"9c0c":function(e,t,a){},a081:function(e,t,a){"use strict";var n=a("5a12"),i=a.n(n);i.a},ca67:function(e,t,a){e.exports=a.p+"img/queen.63f5c4a2.jpg"},ceb6:function(e,t,a){"use strict";var n=a("54d7"),i=a.n(n);i.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.fb605600.png"},cfc5:function(e,t,a){"use strict";var n=a("012f"),i=a.n(n);i.a},e7a8:function(e,t,a){"use strict";var n=a("20a6"),i=a.n(n);i.a},eccd:function(e,t,a){e.exports=a.p+"img/rhcp.7a920397.jpg"}});
//# sourceMappingURL=app.cfe74d8d.js.map