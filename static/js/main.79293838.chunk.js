(this["webpackJsonpgivin-utm-generator"]=this["webpackJsonpgivin-utm-generator"]||[]).push([[0],{142:function(n,e,t){n.exports=t(355)},147:function(n,e,t){},148:function(n,e,t){},149:function(n,e,t){},229:function(n,e,t){},355:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(26),c=t.n(r),l=(t(147),t(148),t(57)),u=(t(149),t(360)),i=t(359),s="903\n905\n906\n909\n951\n953\n960\n961\n962\n963\n964\n965\n966\n967\n968\n910\n911\n912\n913\n914\n915\n916\n917\n918\n919\n980\n981\n982\n983\n984\n985\n987\n988\n989\n920\n921\n922\n923\n924\n925\n926\n927\n928\n929\n900\n901\n902\n904\n908\n950\n951\n952\n953\n958\n977\n991\n992\n993\n994\n995\n996\n999\n999".split("\n"),m=t(79),f=t(80),h=t(116);function p(){var n=Object(m.a)(["\n  animation: .5s ",";\n\n  padding: 10px;\n  width: 25vw;\n  min-width: 300px;\n  margin-top: 10px;\n  height: 70vh;\n  outline: none;\n  background-color: rgb(250, 250, 250);\n  border: none;\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.004);\n  text-rendering: optimizeLegibility !important;\n  font-size: 21px;\n  box-shadow: 0 0px 2px rgba(0,0,0,0.19), 0 2px 2px rgba(0,0,0,0.23);\n  line-height: 1.618;\n"]);return p=function(){return n},n}function b(){var n=Object(m.a)(["",""]);return b=function(){return n},n}var d=Object(f.b)(b(),h.zoomIn),g=f.a.textarea(p(),d),v=(t(229),t(35)),x=t(32),E=t(33),w=t(121),N=t(122),j=function(){function n(){Object(x.a)(this,n)}return Object(E.a)(n,null,[{key:"ExportExcelAutoPhones",value:function(e,t){var a=e.autocallNumbersRussia,o=e.autocallNumbersAbroad,r=e.smsNumbersRussia,c=e.smsNumbersAbroad,l=new w.Workbook,u=l.addWorksheet("\u041e\u0431\u0437\u0432\u043e\u043d"),i=null,s=function(n,e,t,a){var o=1;n.getCell(o,t).value=a,e.forEach((function(e){n.getCell(o+1,t).value=e,o++}))};s(u,a,1,"\u0420\u043e\u0441\u0441\u0438\u044f"),s(u,o,2,"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0435"),t&&(s(i=l.addWorksheet("SMS"),r,1,"\u0420\u043e\u0441\u0441\u0438\u044f"),s(i,c,2,"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0435")),n.DownloadExcel(l,"Phones")}},{key:"DownloadExcel",value:function(n,e){n.xlsx.writeBuffer().then((function(n){var t=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});Object(N.saveAs)(t,"".concat(e,".xlsx"))}))}}]),n}(),k=o.a.createRef(),O=o.a.createRef(),S=function(n){var e=function(n){n.select(),document.execCommand("copy")};return o.a.createElement("div",{className:"text-copier-component"},o.a.createElement("div",{className:"textarea-controll"},o.a.createElement(g,{ref:k,defaultValue:"".concat(n.phones.autocallNumbersRussia.join("\n"),"\n\n").concat(n.phones.autocallNumbersAbroad.join("\n"))}),o.a.createElement(u.a,{icon:!0,color:"teal",onClick:function(){return e(k.current)}},o.a.createElement(v.a,{name:"copy"}),"\u0410\u0432\u0442\u043e\u043e\u0431\u0437\u0432\u043e\u043d: \u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),n.forSMS&&o.a.createElement("div",{className:"textarea-controll"},o.a.createElement(g,{ref:O,defaultValue:"".concat(n.phones.smsNumbersRussia.join("\n"),"\n\n").concat(n.phones.smsNumbersAbroad.join("\n"))}),o.a.createElement(u.a,{icon:!0,color:"teal",onClick:function(){return e(O.current)}},o.a.createElement(v.a,{name:"copy"}),"\u0421\u041c\u0421: \u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),o.a.createElement(u.a,{icon:!0,color:"green",onClick:function(){j.ExportExcelAutoPhones(n.phones,n.forSMS)}},o.a.createElement(v.a,{name:"file excel"}),"\u0421\u043a\u0430\u0447\u0430\u0442\u044c EXCEL"))},A=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),f=m[0],h=m[1],p=Object(a.useState)(!1),b=Object(l.a)(p,2),d=b[0],v=b[1];return o.a.createElement("div",{className:"phone-formatter-component"},o.a.createElement(u.a,{disabled:!t,onClick:function(){var n=function(n){var e=[],t=[],a=[],o=[],r=[];return n.filter((function(n){return!!n})).forEach((function(n){var e=n.split(" "),t=e.some((function(n){return n.replace(/[^0-9]+/g,"").length<=7})),a=e[e.length-1].replace(/[^0-9]+/g,""),o=t?n.replace(/[^0-9]+/g,""):a;o&&r.push(o)})),r.forEach((function(n){var r=n.substring(0,3);if("7"===n[0]||"8"===n[0]||s.includes(r)){var c=n;"7"===c[0]?c="8".concat(c.substring(1)):"8"!==c[0]&&(c="8".concat(c)),e.push(c);var l=n;"8"===l[0]?l="7".concat(l.substring(1)):"7"!==l[0]&&(l="7".concat(l)),a.push(l)}else{var u=n;u.match("810")&&0!==u.match("810").index?u="810".concat(u):u.match("810")||(u="810".concat(u)),t.push(u),o.push(n)}})),{autocallNumbersRussia:e,autocallNumbersAbroad:t,smsNumbersRussia:a,smsNumbersAbroad:o}}(t.split("\n"));(n.autocallNumbersRussia.length||n.autocallNumbersAbroad.length)&&h(n)},content:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",icon:"right arrow",labelPosition:"right"}),o.a.createElement(i.a,{label:"\u0414\u043b\u044f \u0421\u041c\u0421",onChange:function(n,e){return v(e.checked)}}),o.a.createElement("div",{className:"textareas"},o.a.createElement(g,{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u044e\u0434\u0430 \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432",value:t,onChange:function(n){return r(n.target.value)}}),f&&o.a.createElement(S,{phones:f,forSMS:d})))},C=function(){return o.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(353),t(354);c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.79293838.chunk.js.map