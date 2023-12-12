(function(){"use strict";var t={8496:function(t,a,r){var e=r(7195),s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("TextoIWD"),a("Footer")],1)},n=[],i=function(){var t=this,a=t._self._c;return a("div",[a("header",[a("div",{staticClass:"header-wrapper"},[a("h1",[t._v("Asignatura")]),t._m(0),t._m(1),t._m(2),a("div",{staticClass:"listaCursos"},[a("h2",[t._v("Lista de prácticas ")]),a("ul",t._l(t.cursos,(function(r){return a("li",{key:r.id,attrs:{columns:""}},[a("h3",[a("a",{attrs:{href:r.url,title:"Se abre en nueva ventana"}},[a("svg",{staticClass:"bi bi-box-arrow-up-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"}})]),t._v(" "+t._s(r.titulo)+" ")])])])})),0)]),t._m(3)])])])},o=[function(){var t=this,a=t._self._c;return a("h1",[a("strong",[a("a",{attrs:{href:"https://guiadocent.udl.cat/pdf/es/102183"}},[t._v("Web Dinámica")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"references"},[a("ul",[a("li",[a("a",{attrs:{href:"https://www.eps.udl.cat/"}},[t._v("Escola Politécnica Superior (EPS)")])]),a("li",[a("a",{attrs:{href:"https://www.udl.cat/"}},[t._v("Universitat de Lleida (UdL)")])]),a("li",[a("a",{attrs:{href:"https://www.udl.cat/ca/es/"}},[a("img",{staticClass:"d-inline-block align-top",attrs:{src:r(3387),alt:"Logo UdL"}})])])])])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"more-examples"},[a("a",{attrs:{href:"https://graudissenydigitalitec.udl.cat/es/"}},[t._v("Grado en Diseño Digital y Tecnologías Creativas")])])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"follow-links"},[t._v("Sigue la Escuela Politécnica Superior de la UdL en "),a("a",{attrs:{href:"https://www.instagram.com/epsudl/?hl=es"}},[t._v("Instagram")])])}];const l="https://raw.githubusercontent.com/afrikiudl/webdinamicaudl/main/WDListaCursos.json";var u={props:{name:{type:String,default:"ListaCursos"}},data(){return{cursos:[]}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(l),a=await t.json();this.cursos=a,console.log(a)}}},c=u,f=r(1001),d=(0,f.Z)(c,i,o,!1,null,null,null),h=d.exports,p=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,a=t._self._c;return a("div",[a("p",[a("a",{staticClass:"subr",attrs:{href:"https://www.linkedin.com/in/afra-pascual-almenara/"}},[t._v("Afra Pascual Almenara")]),t._v(" || Profesora de "),a("a",{staticClass:"subr",attrs:{href:"https://guiadocent.udl.cat/pdf/es/102183"}},[t._v("Web Dinámica")]),t._v(". || "),a("a",{staticClass:"subr",attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" || "),a("a",{staticClass:"subr",attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida (UdL)")]),t._v(". ")]),a("p",[t._v(" Inspirado en los diseños "),a("a",{staticClass:"subr",attrs:{href:"https://talks.jensimmons.com/15TjNW/"}},[t._v("Intrinsic Web Design")]),t._v(" de "),a("a",{staticClass:"subr",attrs:{href:"https://labs.jensimmons.com/"}},[t._v(" Jen Simmons ")])])])}],_={},w=_,m=(0,f.Z)(w,p,v,!1,null,"0f12eeb5",null),g=m.exports,b={name:"App",components:{TextoIWD:h,Footer:g}},C=b,x=(0,f.Z)(C,s,n,!1,null,null,null),y=x.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(y)}).$mount("#app")},3387:function(t,a,r){t.exports=r.p+"img/logoUdL.0e6715ae.png"}},a={};function r(e){var s=a[e];if(void 0!==s)return s.exports;var n=a[e]={exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(a,e,s,n){if(!e){var i=1/0;for(c=0;c<t.length;c++){e=t[c][0],s=t[c][1],n=t[c][2];for(var o=!0,l=0;l<e.length;l++)(!1&n||i>=n)&&Object.keys(r.O).every((function(t){return r.O[t](e[l])}))?e.splice(l--,1):(o=!1,n<i&&(i=n));if(o){t.splice(c--,1);var u=s();void 0!==u&&(a=u)}}return a}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[e,s,n]}}(),function(){r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,{a:a}),a}}(),function(){r.d=function(t,a){for(var e in a)r.o(a,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(a){return 0===t[a]};var a=function(a,e){var s,n,i=e[0],o=e[1],l=e[2],u=0;if(i.some((function(a){return 0!==t[a]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(l)var c=l(r)}for(a&&a(e);u<i.length;u++)n=i[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(c)},e=self["webpackChunkwebdinamicaudl"]=self["webpackChunkwebdinamicaudl"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(8496)}));e=r.O(e)})();
//# sourceMappingURL=app.1a61365e.js.map