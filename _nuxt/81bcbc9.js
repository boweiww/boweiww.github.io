(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(e,r,t){var content=t(195);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(57).default)("8b32df20",content,!0,{sourceMap:!1})},194:function(e,r,t){"use strict";t(191)},195:function(e,r,t){var n=t(56)(!1);n.push([e.i,"button[data-v-a4aae810]{margin-bottom:20px}.loading-indicator[data-v-a4aae810]{font-weight:700;font-size:2rem;text-align:center}",""]),e.exports=n},198:function(e,r,t){"use strict";t.r(r);t(58),t(33);var n=t(7),o=t(193),c={components:{QrcodeStream:o.QrcodeStream,QrcodeCapture:o.QrcodeCapture},data:function(){return{loading:!1,destroyed:!1}},methods:{onDecode:function(e){this.result=e,console.log(e)},onInit:function(e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.loading=!0,t.prev=1,t.next=4,e;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),"NotAllowedError"===t.t0.name?r.error="ERROR: you need to grant camera access permisson":"NotFoundError"===t.t0.name?r.error="ERROR: no camera on this device":"NotSupportedError"===t.t0.name?r.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===t.t0.name?r.error="ERROR: is the camera already in use?":"OverconstrainedError"===t.t0.name?r.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===t.t0.name&&(r.error="ERROR: Stream API is not supported in this browser");case 9:return t.prev=9,r.loading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[1,6,9,12]])})))()},reload:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.destroyed=!0,r.next=3,e.$nextTick();case 3:e.destroyed=!1;case 4:case"end":return r.stop()}}),r)})))()}}},d=(t(194),t(31)),component=Object(d.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("button",{on:{click:e.reload}},[e._v("Destroy And Re-Create Component")]),e._v(" "),t("qrcode-capture",{on:{decode:e.onDecode}}),e._v(" "),e.destroyed?e._e():t("qrcode-stream",{staticStyle:{width:"60%","margin-left":"20%","margin-top":"15%"},on:{init:e.onInit,decode:e.onDecode}},[e.loading?t("div",{staticClass:"loading-indicator"},[e._v("\n      Loading...\n    ")]):e._e()])],1)}),[],!1,null,"a4aae810",null);r.default=component.exports}}]);