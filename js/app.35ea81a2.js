(function(e){function t(t){for(var i,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f86c5a10"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01f7":function(e,t,a){},"08bc":function(e,t,a){},"0bdb":function(e,t,a){e.exports=a.p+"img/slide2.d0ddec5d.jpg"},"0e0b":function(e,t,a){e.exports=a.p+"img/c2.7a920397.jpg"},"20a6":function(e,t,a){},"408b":function(e,t,a){e.exports=a.p+"img/slide1.ea25587a.jpg"},"53d7":function(e,t,a){"use strict";var i=a("01f7"),n=a.n(i);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navegador"),a("router-view"),a("pie")],1)},r=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"nav"}},[i("div",{staticClass:"contenedor"},[i("img",{attrs:{src:a("cf05"),alt:""}}),i("div",{staticClass:"links"},[i("router-link",{attrs:{to:"/"}},[e._v("Inicio")]),i("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])},s=[],c={name:"Navegador"},l=c,u=(a("e7a8"),a("2877")),d=Object(u["a"])(l,o,s,!1,null,null,null),p=d.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"foot"}},[a("div",{staticClass:"middle"}),a("div",{staticClass:"last"},[a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Ayuda")])]),a("li",[a("a",{attrs:{href:""}},[e._v("Términos y condiciones")])]),a("li",[a("a",{attrs:{href:""}},[e._v("Políticas de privacidad")])])]),a("p",[e._v("Steamia 2020 // © Todos los derechos reservados.")])])])}],m={name:"Pie"},h=m,b=(a("53d7"),Object(u["a"])(h,v,f,!1,null,null,null)),_=b.exports,g={name:"app",components:{navegador:p,pie:_}},C=g,w=(a("5c0b"),Object(u["a"])(C,n,r,!1,null,null,null)),y=w.exports,x=(a("d3b7"),a("8c4f")),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("inicio")],1)},O=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"inicio"}},[a("div",{staticClass:"slide"},[a("div",{staticClass:"contenedor"},[a("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},e._l(e.images,(function(t){return a("li",{key:t.id,class:{active:"1"==t.id},attrs:{"data-target":"#carouselExampleFade","data-slide-to":t.id-1}},[e._v(e._s(t.id)+" ")])})),0),a("div",{staticClass:"carousel-inner"},e._l(e.images,(function(t){return a("div",{key:t.id,staticClass:"carousel-item",class:{active:"1"==t.id}},[a("img",{staticClass:"d-block w-100",attrs:{src:t.location,alt:"..."}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",{staticClass:"slide-titulo"},[e._v(e._s(t.title))]),a("div",[a("p",{staticClass:"slide-descrip"},[e._v(e._s(t.description))])])])])})),0),e._m(0),e._m(1)])])]),a("div",{staticClass:"streams"},[a("div",{staticClass:"contenedor"},e._l(e.conciertos,(function(t){return a("div",{key:t.id,staticClass:"concierto"},[a("div",{staticClass:"imagen"},[a("img",{attrs:{src:t.location,alt:""}}),a("h3",{staticClass:"titulo"},[e._v(e._s(t.title))])]),a("div",{staticClass:"container-descrip"},[a("p",{staticClass:"descripcion"},[e._v(e._s(t.description))]),a("div",[a("p",{staticClass:"precio"},[e._v(e._s(t.precio))]),a("button",{staticClass:"btn-comprar"},[e._v("Comprar")])])])])})),0)])])},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("Previous")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleFade",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("Next")])])}],k={name:"Inicio",data:function(){return{images:[{id:"1",title:"Jazz show",description:"Una descripcion para el show que va a venir.",location:a("408b")},{id:"2",title:"Music list",description:"Otra descripcion mas de lo que sera el show.",location:a("0bdb")},{id:"3",title:"Pop and more",description:"No te pierdas el show, entradas exclusivas.",location:a("8593")}],conciertos:[{id:"1",title:"Beatles",description:"Una descripcion para el show que va a venir, mas larga que las demas para testear.",precio:"2500$",location:a("5a78")},{id:"2",title:"Red hot chilli peppers",description:"Una descripcion para el show que va a venir.",precio:"5000$",location:a("0e0b")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("715d")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("715d")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("715d")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("715d")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir pero esta es mas larga que las otras.",precio:"4500$",location:a("715d")},{id:"3",title:"Queen",description:"Una descripcion para el show que va a venir.",precio:"4500$",location:a("715d")}]}}},q=k,P=(a("f1ab"),Object(u["a"])(q,$,E,!1,null,null,null)),U=P.exports,T={name:"Home",components:{inicio:U}},Q=T,S=Object(u["a"])(Q,j,O,!1,null,null,null),M=S.exports;i["a"].use(x["a"]);var A=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],F=new x["a"]({routes:A}),J=F;a("1157"),a("4989"),a("f9e3");i["a"].config.productionTip=!1,new i["a"]({router:J,render:function(e){return e(y)}}).$mount("#app")},"5a78":function(e,t,a){e.exports=a.p+"img/c1.a1e0a3e1.jpg"},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"715d":function(e,t,a){e.exports=a.p+"img/c3.63f5c4a2.jpg"},8593:function(e,t,a){e.exports=a.p+"img/slide3.193e2959.jpg"},"9c0c":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.fb605600.png"},e7a8:function(e,t,a){"use strict";var i=a("20a6"),n=a.n(i);n.a},f1ab:function(e,t,a){"use strict";var i=a("08bc"),n=a.n(i);n.a}});
//# sourceMappingURL=app.35ea81a2.js.map