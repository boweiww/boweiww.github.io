(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,o){var content=o(241);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(59).default)("4f8d6f64",content,!0,{sourceMap:!1})},240:function(e,t,o){"use strict";o(202)},241:function(e,t,o){var n=o(58)(!1);n.push([e.i,".video{width:100%}",""]),e.exports=n},245:function(e,t,o){"use strict";o.r(t);var n=o(201),c=o.n(n),l={data:()=>({scannerActive:!1,foundCodes:{type:"",code:""}}),methods:{start(){this.scannerActive=!0;const e={locate:!0,inputStream:{name:"live",type:"LiveStream",target:document.querySelector("#videoWindow")},decoder:{readers:["ean_reader"],multiple:!0},locator:{halfSample:!0,patchSize:"medium"}};c.a.init(e,(e=>{e?console.log(e):(console.log("initialization complete"),c.a.start())}))},stop(){this.scannerActive=!1,c.a.stop()}},mounted(){let e=this;c.a.onDetected((function(data){console.log(e.foundCodes);let t=data[0].codeResult;e.foundCodes.type=t.format,e.foundCodes.code=t.code,e.stop()}))}},d=(o(240),o(28)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.foundCodes?o("div",{staticClass:"level"},[o("div",{staticClass:"level-item has-text-centered"},[o("div",[o("p",{staticClass:"heading"},[e._v(e._s(e.foundCodes.type))]),e._v(" "),o("p",{staticClass:"title"},[e._v(e._s(e.foundCodes.code))])])])]):e._e(),e._v(" "),o("nav",{staticClass:"level",attrs:{role:"navigation","aria-label":"main navigation"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.scannerActive,expression:"!scannerActive"}],staticClass:"level-item"},[o("a",{staticClass:"button",on:{click:e.start}},[e._v("Start Scanner")])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.scannerActive,expression:"scannerActive"}],staticClass:"level-item"},[o("a",{staticClass:"button",on:{click:e.stop}},[e._v("Stop Scanner")])])]),e._v(" "),o("div",{staticClass:"video",attrs:{id:"videoWindow"}})])}),[],!1,null,null,null);t.default=component.exports}}]);