(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"23b6":function(t,e,r){"use strict";r("d747")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"app-settings"},i=Object(n["f"])("h1",null,"Settings",-1),a=Object(n["f"])("h1",null,"Layers",-1),s=Object(n["f"])("h1",null,"Wood types",-1),c=Object(n["f"])("h1",null,"About / feedback",-1),l=Object(n["f"])("div",{class:"about"},[Object(n["f"])("p",null,[Object(n["e"])(" Created by Mark van Renswoude. Open-source and available under the Unlicense to the public domain on "),Object(n["f"])("a",{href:"https://github.com/MvRens/CuttingBoard",target:"_blank"},"Github"),Object(n["e"])(", where feedback is welcome under Issues. ")]),Object(n["f"])("p",null,[Object(n["e"])(" Heavily inspired by "),Object(n["f"])("a",{href:"http://www.lastalias.com/cbdesigner/"},"CBdesigner"),Object(n["e"])(". ")])],-1),d={class:"app-preview"},u=Object(n["f"])("h1",null,"Edge grain",-1),f=Object(n["f"])("h1",null,"End grain",-1);function h(t,e,r,h,b,p){var O=Object(n["m"])("Settings"),j=Object(n["m"])("Layers"),g=Object(n["m"])("Wood"),v=Object(n["m"])("EndGrainPreview"),w=Object(n["m"])("EdgeGrainPreview");return Object(n["h"])(),Object(n["c"])(n["a"],null,[Object(n["f"])("div",o,[i,Object(n["f"])(O,{class:"block"}),a,Object(n["f"])(j,{class:"block"}),s,Object(n["f"])(g,{class:"block"}),c,l]),Object(n["f"])("div",d,[u,Object(n["f"])(v,{scale:1}),f,Object(n["f"])(w,{scale:1})])],64)}var b=Object(n["s"])("data-v-660f17f9");Object(n["j"])("data-v-660f17f9");var p={class:"settings"},O=Object(n["d"])('<h2 data-v-660f17f9>Designer</h2><label for="units" data-v-660f17f9>Units</label><select id="units" disabled data-v-660f17f9><option value="mm" data-v-660f17f9>Millimeters</option><option value="cm" data-v-660f17f9>Centimeters</option><option value="inch" data-v-660f17f9>Inches (fractional)</option></select><label for="borders" data-v-660f17f9>Show borders</label>',4),j=Object(n["f"])("h2",null,"Material",-1),g=Object(n["f"])("label",{for:"boardThickness"},"Board thickness",-1),v=Object(n["f"])("label",{for:"boardLength"},"Board length",-1),w=Object(n["f"])("label",{for:"bladeKerf"},"Blade kerf",-1),m=Object(n["f"])("h2",null,"End grain",-1),y=Object(n["f"])("label",{for:"crosscutWidth"},"Crosscut width",-1),k=Object(n["f"])("label",{for:"alternateDirection"},"Alternate direction",-1);Object(n["i"])();var x=b((function(t,e,r,o,i,a){return Object(n["h"])(),Object(n["c"])("div",p,[O,Object(n["f"])("input",{id:"borders",type:"checkbox",checked:a.settings.borders,onChange:e[1]||(e[1]=function(e){return t.$store.commit("updateSettings",{borders:e.target.checked})})},null,40,["checked"]),j,g,Object(n["f"])("input",{id:"boardThickness",type:"number",value:a.settings.boardThickness,onChange:e[2]||(e[2]=function(e){return t.$store.commit("updateSettings",{boardThickness:a.parseFloatDef(e.target.value)})})},null,40,["value"]),v,Object(n["f"])("input",{id:"boardLength",type:"number",value:a.settings.boardLength,onChange:e[3]||(e[3]=function(e){return t.$store.commit("updateSettings",{boardLength:a.parseFloatDef(e.target.value)})})},null,40,["value"]),w,Object(n["f"])("input",{id:"bladeKerf",type:"number",value:a.settings.bladeKerf,onChange:e[4]||(e[4]=function(e){return t.$store.commit("updateSettings",{bladeKerf:a.parseFloatDef(e.target.value)})})},null,40,["value"]),m,y,Object(n["f"])("input",{id:"crosscutWidth",type:"number",value:a.settings.crosscutWidth,onChange:e[5]||(e[5]=function(e){return t.$store.commit("updateSettings",{crosscutWidth:a.parseFloatDef(e.target.value)})})},null,40,["value"]),k,Object(n["f"])("input",{id:"alternateDirection",type:"checkbox",checked:a.settings.alternateDirection,onChange:e[6]||(e[6]=function(e){return t.$store.commit("updateSettings",{alternateDirection:e.target.checked})})},null,40,["checked"])])})),W=(r("2b19"),25.4),L=10,P=1,$={toPixels:function(t,e){return this.toMillimeters(t,e)*P},toMillimeters:function(t,e){switch(e){case"mm":return t;case"cm":return t*L;case"inch":return t*W}return console.error("Invalid units type: "+e),0},fromMillimeters:function(t,e){switch(e){case"mm":return t;case"cm":return t/L;case"inch":return t/W}return console.error("Invalid units type: "+e),0}},S={computed:{settings:function(){return this.$store.state.settings}},methods:{parseFloatDef:function(t){var e=parseFloat(t);return Object.is(e,NaN)?0:e}}};r("e334");S.render=x,S.__scopeId="data-v-660f17f9";var C=S,M=(r("b0c0"),Object(n["s"])("data-v-535527d4"));Object(n["j"])("data-v-535527d4");var B={class:"layers"},D={class:"add"},_=Object(n["f"])("span",{class:"header"}," ",-1),H=Object(n["f"])("span",{class:"header"},"Wood type",-1),T=Object(n["f"])("span",{class:"header"},"Width",-1),E=Object(n["f"])("span",{class:"header"}," ",-1),F={class:"index"},I={class:"remove"};Object(n["i"])();var U=M((function(t,e,r,o,i,a){return Object(n["h"])(),Object(n["c"])("div",B,[Object(n["f"])("div",D,[Object(n["f"])("button",{onClick:e[1]||(e[1]=function(t){return a.addLayer()})},"Add layer")]),_,H,T,E,(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(a.layers,(function(t,e){return Object(n["h"])(),Object(n["c"])(n["a"],null,[Object(n["f"])("div",F,Object(n["n"])(e+1),1),Object(n["r"])(Object(n["f"])("select",{"onUpdate:modelValue":function(e){return t.wood=e},class:"wood"},[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(a.wood,(function(t,e){return Object(n["h"])(),Object(n["c"])("option",{value:e},Object(n["n"])(t.name),9,["value"])})),256))],8,["onUpdate:modelValue"]),[[n["o"],t.wood]]),Object(n["f"])("input",{type:"number",class:"width",value:t.width,onInput:function(e){return t.width=a.parseFloatDef(e.target.value)}},null,40,["value","onInput"]),Object(n["f"])("div",I,[Object(n["f"])("button",{onClick:function(t){return a.removeLayer(e)}},"X",8,["onClick"])])],64)})),256))])})),K={computed:{settings:function(){return this.$store.state.settings},wood:function(){return this.$store.state.wood},layers:function(){return this.$store.state.boards[0].layers}},methods:{parseFloatDef:function(t){var e=parseFloat(t);return Object.is(e,NaN)?0:e},addLayer:function(){this.$store.commit("addLayer",0)},removeLayer:function(t){this.$store.commit("removeLayer",{board:0,layer:t})}}};r("23b6");K.render=U,K.__scopeId="data-v-535527d4";var N=K,V=Object(n["s"])("data-v-55181d8c");Object(n["j"])("data-v-55181d8c");var A={class:"wood"},G={class:"add"},J=Object(n["f"])("span",{class:"header"}," ",-1),R=Object(n["f"])("span",{class:"header"},"Name",-1),X=Object(n["f"])("span",{class:"header"},"Colour",-1),Y=Object(n["f"])("span",{class:"header"}," ",-1),q=Object(n["f"])("span",null," ",-1),z={class:"remove"};Object(n["i"])();var Q=V((function(t,e,r,o,i,a){return Object(n["h"])(),Object(n["c"])("div",A,[Object(n["f"])("div",G,[Object(n["f"])("button",{onClick:e[1]||(e[1]=function(t){return a.addWood()})},"Add wood type")]),J,R,X,Y,(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(a.wood,(function(t,e){return Object(n["h"])(),Object(n["c"])(n["a"],null,[q,Object(n["r"])(Object(n["f"])("input",{type:"text",class:"name","onUpdate:modelValue":function(e){return t.name=e}},null,8,["onUpdate:modelValue"]),[[n["p"],t.name]]),Object(n["r"])(Object(n["f"])("input",{type:"color",class:"color","onUpdate:modelValue":function(e){return t.color=e}},null,8,["onUpdate:modelValue"]),[[n["p"],t.color]]),Object(n["f"])("div",z,[Object(n["f"])("button",{onClick:function(t){return a.removeWood(e)}},"X",8,["onClick"])])],64)})),256))])})),Z={computed:{settings:function(){return this.$store.state.settings},wood:function(){return this.$store.state.wood}},methods:{addWood:function(){this.$store.commit("addWood")},removeWood:function(t){this.$store.commit("removeWood",t)}}};r("667a");Z.render=Q,Z.__scopeId="data-v-55181d8c";var tt=Z,et={class:"preview"};function rt(t,e,r,o,i,a){return Object(n["h"])(),Object(n["c"])("div",et,[(Object(n["h"])(),Object(n["c"])("svg",{width:a.viewportWidth,height:a.viewportHeight,viewBox:a.viewBox},[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(a.layers,(function(t,e){return Object(n["h"])(),Object(n["c"])("rect",{width:a.toPixels(a.settings.boardLength),height:a.toPixels(t.width),x:"0",y:a.getLayerOffset(e),style:a.getLayerStyle(e)},null,12,["width","height","y"])})),256))],8,["width","height","viewBox"]))])}r("d81d"),r("13d5"),r("a9e3");var nt={props:{scale:Number},computed:{settings:function(){return this.$store.state.settings},wood:function(){return this.$store.state.wood},layers:function(){return this.$store.state.boards[0].layers},boardWidth:function(){return this.toPixels(this.settings.boardLength)},boardHeight:function(){return this.layers.map((function(t){return t.width})).reduce((function(t,e){return t+e}))},viewportWidth:function(){return Math.floor(this.boardWidth*this.scale)},viewportHeight:function(){return Math.floor(this.boardHeight*this.scale)},viewBox:function(){return"0 0 "+this.boardWidth+" "+this.boardHeight}},methods:{toPixels:function(t){return $.toPixels(t,this.settings.units)},getLayerOffset:function(t){if(t<0||t>=this.layers.length)return 0;for(var e=0,r=0;r<t;r++)e+=this.layers[r].width;return e},getLayerStyle:function(t){if(t<0||t>=this.layers.length)return"fill: fuchsia";var e=this.layers[t].wood;if(null===e)return"";var r=this.settings.borders?"; stroke-width: 1; stroke: black":"";return"fill: "+this.wood[e].color+r}}};nt.render=rt;var ot=nt,it={class:"preview"},at={id:"strip"};function st(t,e,r,o,i,a){return Object(n["h"])(),Object(n["c"])("div",it,[(Object(n["h"])(),Object(n["c"])("svg",{width:a.viewportWidth,height:a.viewportHeight,viewBox:a.viewBox},[Object(n["f"])("defs",null,[Object(n["f"])("g",at,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(a.layers,(function(t,e){return Object(n["h"])(),Object(n["c"])("rect",{width:a.toPixels(a.settings.boardThickness),height:a.toPixels(t.width),x:"0",y:a.getLayerOffset(e),style:a.getLayerStyle(e)},null,12,["width","height","y"])})),256))])]),(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(a.stripsPerBoard,(function(t,e){return Object(n["h"])(),Object(n["c"])("use",{"xlink:href":"#strip",x:e*a.settings.boardThickness,y:"0",transform:a.getLayerTransform(e)},null,8,["x","transform"])})),256))],8,["width","height","viewBox"]))])}var ct={props:{scale:Number},computed:{settings:function(){return this.$store.state.settings},wood:function(){return this.$store.state.wood},layers:function(){return this.$store.state.boards[0].layers},stripsPerBoard:function(){var t=this.settings.crosscutWidth+this.settings.bladeKerf;return 0===t?0:Math.floor((this.settings.boardLength+this.settings.bladeKerf)/t)},boardWidth:function(){var t=this.stripsPerBoard*this.settings.boardThickness;return this.toPixels(t)},boardHeight:function(){return this.layers.map((function(t){return t.width})).reduce((function(t,e){return t+e}))},viewportWidth:function(){return Math.floor(this.boardWidth*this.scale)},viewportHeight:function(){return Math.floor(this.boardHeight*this.scale)},viewBox:function(){return"0 0 "+this.boardWidth+" "+this.boardHeight}},methods:{toPixels:function(t){return $.toPixels(t,this.settings.units)},getLayerOffset:function(t){if(t<0||t>=this.layers.length)return 0;for(var e=0,r=0;r<t;r++)e+=this.layers[r].width;return e},getLayerStyle:function(t){if(t<0||t>=this.layers.length)return"fill: fuchsia";var e=this.layers[t].wood;if(null===e)return"";var r=this.settings.borders?"; stroke-width: 1; stroke: black":"";return"fill: "+this.wood[e].color+r},getLayerTransform:function(t){return this.settings.alternateDirection&&t%2!=0?"scale(1, -1) translate(0, -"+this.boardHeight+")":""}}};ct.render=st;var lt=ct,dt={name:"App",components:{EndGrainPreview:ot,EdgeGrainPreview:lt,Settings:C,Layers:N,Wood:tt}};r("848a");dt.render=h;var ut=dt,ft=(r("4160"),r("a434"),r("159b"),r("5502")),ht=Object(ft["a"])({state:{settings:{units:"mm",borders:!1,boardThickness:20,boardLength:700,bladeKerf:3.5,crosscutWidth:30,alternateDirection:!0},wood:[{name:"Walnut",color:"#58443f"},{name:"Maple",color:"#f2e0aa"},{name:"Cherry",color:"#bb8359"},{name:"Mahogany",color:"#98473f"},{name:"Yellowheart",color:"#ffff84"},{name:"White oak",color:"#fdf4b9"},{name:"Bubinga",color:"#7e3c34"},{name:"Jatoba",color:"#9b281c"},{name:"Padouk",color:"#933350"}],boards:[{layers:[{wood:0,width:20},{wood:1,width:20},{wood:0,width:20},{wood:1,width:20},{wood:0,width:20},{wood:1,width:20},{wood:0,width:20},{wood:1,width:20},{wood:0,width:20},{wood:1,width:20},{wood:0,width:20},{wood:1,width:20},{wood:0,width:20},{wood:1,width:20}]}]},mutations:{addLayer:function(t,e){e<0||e>=t.boards.length||t.boards[e].layers.push({wood:0,width:$.fromMillimeters(20,t.settings.units)})},removeLayer:function(t,e){e.board<0||e.board>=t.boards.length||e.layer<0||e.layer>=t.boards[e.board].length||t.boards[e.board].layers.splice(e.layer,1)},addWood:function(t){t.wood.push({name:"Wood #"+(t.wood.length+1),color:"#f2e0aa"})},removeWood:function(t,e){e<0||e>=t.wood.length||(t.boards.forEach((function(t){t.layers.forEach((function(t){t.wood===e?t.wood=null:t.wood>e&&t.wood--}))})),t.wood.splice(e,1))},updateSettings:function(t,e){for(var r in e)e.hasOwnProperty(r)&&t.settings.hasOwnProperty(r)&&(t.settings[r]=e[r])}},actions:{}});Object(n["b"])(ut).use(ht).mount("#app")},"667a":function(t,e,r){"use strict";r("6ac4")},"6ac4":function(t,e,r){},"848a":function(t,e,r){"use strict";r("db52")},"9e5f":function(t,e,r){},d747:function(t,e,r){},db52:function(t,e,r){},e334:function(t,e,r){"use strict";r("9e5f")}});
//# sourceMappingURL=app.f2508f9a.js.map