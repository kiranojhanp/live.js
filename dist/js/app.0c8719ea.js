(function(t){function c(c){for(var i,l,o=c[0],a=c[1],A=c[2],u=0,g=[];u<o.length;u++)l=o[u],n[l]&&g.push(n[l][0]),n[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);r&&r(c);while(g.length)g.shift()();return e.push.apply(e,A||[]),s()}function s(){for(var t,c=0;c<e.length;c++){for(var s=e[c],i=!0,o=1;o<s.length;o++){var a=s[o];0!==n[a]&&(i=!1)}i&&(e.splice(c--,1),t=l(l.s=s[0]))}return t}var i={},n={app:0},e=[];function l(c){if(i[c])return i[c].exports;var s=i[c]={i:c,l:!1,exports:{}};return t[c].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,c,s){l.o(t,c)||Object.defineProperty(t,c,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,c){if(1&c&&(t=l(t)),8&c)return t;if(4&c&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&c&&"string"!=typeof t)for(var i in t)l.d(s,i,function(c){return t[c]}.bind(null,i));return s},l.n=function(t){var c=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(c,"a",c),c},l.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=c,o=o.slice();for(var A=0;A<o.length;A++)c(o[A]);var r=a;e.push([0,"chunk-vendors"]),s()})({0:function(t,c,s){t.exports=s("56d7")},"02e6":function(t,c){t.exports="data:image/png;base64,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"},"034f":function(t,c,s){"use strict";var i=s("64a9"),n=s.n(i);n.a},"0994":function(t,c,s){t.exports=s.p+"img/random.7f18e77e.png"},1131:function(t,c,s){t.exports=s.p+"img/play.7e055f65.png"},"56d7":function(t,c,s){"use strict";s.r(c);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var t=this,c=t.$createElement,s=t._self._c||c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},e=[],l=(s("034f"),s("2877")),o={},a=Object(l["a"])(o,n,e,!1,null,null,null),A=a.exports,r=s("8c4f"),u=function(){var t=this,c=t.$createElement,i=t._self._c||c;return i("div",{staticClass:"container"},[i("div",{staticClass:"nav"},[t._m(0),i("div",{staticClass:"transport"},[t.playing?t._e():i("img",{staticClass:"transport-button",attrs:{src:s("1131")},on:{click:t.playStop}}),t.playing?i("img",{staticClass:"transport-button",attrs:{src:s("02e6")},on:{click:t.playStop}}):t._e(),i("img",{staticClass:"transport-button",attrs:{src:s("ed7f")}}),i("knob-control",{staticClass:"vol-knob",attrs:{min:40,max:300,size:40,"stroke-width":12,"primary-color":"#67D0F7"},model:{value:t.bpm,callback:function(c){t.bpm=c},expression:"bpm"}})],1)]),i("div",{staticClass:"step-grid"},[i("div",{staticClass:"drum-title"},[t._v("Kick")]),i("div",{staticClass:"step-button",on:{click:function(c){return t.randomButtonClicked("kick")}}},[i("img",{staticClass:"random-button",attrs:{src:s("0994")}})]),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[0]},on:{click:function(c){return t.toggleKick(0)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[1]},on:{click:function(c){return t.toggleKick(1)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[2]},on:{click:function(c){return t.toggleKick(2)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[3]},on:{click:function(c){return t.toggleKick(3)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[4]},on:{click:function(c){return t.toggleKick(4)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[5]},on:{click:function(c){return t.toggleKick(5)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[6]},on:{click:function(c){return t.toggleKick(6)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[7]},on:{click:function(c){return t.toggleKick(7)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[8]},on:{click:function(c){return t.toggleKick(8)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[9]},on:{click:function(c){return t.toggleKick(9)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[10]},on:{click:function(c){return t.toggleKick(10)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[11]},on:{click:function(c){return t.toggleKick(11)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[12]},on:{click:function(c){return t.toggleKick(12)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[13]},on:{click:function(c){return t.toggleKick(13)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[14]},on:{click:function(c){return t.toggleKick(14)}}}),i("div",{staticClass:"step kick",class:{kickActive:t.kickSeq[15]},on:{click:function(c){return t.toggleKick(15)}}}),i("knob-control",{staticClass:"vol-knob",attrs:{min:0,max:100,size:40,"stroke-width":12,"primary-color":"#67D0F7"},model:{value:t.kickVol,callback:function(c){t.kickVol=c},expression:"kickVol"}})],1),i("div",{staticClass:"step-grid"},[i("div",{staticClass:"drum-title"},[t._v("Clap")]),i("div",{staticClass:"step-button",on:{click:function(c){return t.randomButtonClicked("clap")}}},[i("img",{staticClass:"random-button",attrs:{src:s("0994")}})]),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[0]},on:{click:function(c){return t.toggleClap(0)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[1]},on:{click:function(c){return t.toggleClap(1)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[2]},on:{click:function(c){return t.toggleClap(2)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[3]},on:{click:function(c){return t.toggleClap(3)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[4]},on:{click:function(c){return t.toggleClap(4)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[5]},on:{click:function(c){return t.toggleClap(5)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[6]},on:{click:function(c){return t.toggleClap(6)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[7]},on:{click:function(c){return t.toggleClap(7)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[8]},on:{click:function(c){return t.toggleClap(8)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[9]},on:{click:function(c){return t.toggleClap(9)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[10]},on:{click:function(c){return t.toggleClap(10)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[11]},on:{click:function(c){return t.toggleClap(11)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[12]},on:{click:function(c){return t.toggleClap(12)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[13]},on:{click:function(c){return t.toggleClap(13)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[14]},on:{click:function(c){return t.toggleClap(14)}}}),i("div",{staticClass:"step clap",class:{clapActive:t.clapSeq[15]},on:{click:function(c){return t.toggleClap(15)}}}),i("knob-control",{staticClass:"vol-knob",attrs:{min:0,max:100,size:40,"stroke-width":12,"primary-color":"#67D0F7"},model:{value:t.clapVol,callback:function(c){t.clapVol=c},expression:"clapVol"}})],1),i("div",{staticClass:"step-grid"},[i("div",{staticClass:"drum-title"},[t._v("Closed Hat")]),i("div",{staticClass:"step-button",on:{click:function(c){return t.randomButtonClicked("ch")}}},[i("img",{staticClass:"random-button",attrs:{src:s("0994")}})]),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[0]},on:{click:function(c){return t.toggleCh(0)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[1]},on:{click:function(c){return t.toggleCh(1)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[2]},on:{click:function(c){return t.toggleCh(2)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[3]},on:{click:function(c){return t.toggleCh(3)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[4]},on:{click:function(c){return t.toggleCh(4)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[5]},on:{click:function(c){return t.toggleCh(5)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[6]},on:{click:function(c){return t.toggleCh(6)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[7]},on:{click:function(c){return t.toggleCh(7)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[8]},on:{click:function(c){return t.toggleCh(8)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[9]},on:{click:function(c){return t.toggleCh(9)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[10]},on:{click:function(c){return t.toggleCh(10)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[11]},on:{click:function(c){return t.toggleCh(11)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[12]},on:{click:function(c){return t.toggleCh(12)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[13]},on:{click:function(c){return t.toggleCh(13)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[14]},on:{click:function(c){return t.toggleCh(14)}}}),i("div",{staticClass:"step ch",class:{chActive:t.chSeq[15]},on:{click:function(c){return t.toggleCh(15)}}}),i("knob-control",{staticClass:"vol-knob",attrs:{min:0,max:100,size:40,"stroke-width":12,"primary-color":"#67D0F7"},model:{value:t.chVol,callback:function(c){t.chVol=c},expression:"chVol"}})],1),i("div",{staticClass:"step-grid"},[i("div",{staticClass:"drum-title"},[t._v("Snare 1")]),i("div",{staticClass:"step-button",on:{click:function(c){return t.randomButtonClicked("sn1")}}},[i("img",{staticClass:"random-button",attrs:{src:s("0994")}})]),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[0]},on:{click:function(c){return t.toggleSn1(0)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[1]},on:{click:function(c){return t.toggleSn1(1)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[2]},on:{click:function(c){return t.toggleSn1(2)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[3]},on:{click:function(c){return t.toggleSn1(3)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[4]},on:{click:function(c){return t.toggleSn1(4)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[5]},on:{click:function(c){return t.toggleSn1(5)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[6]},on:{click:function(c){return t.toggleSn1(6)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[7]},on:{click:function(c){return t.toggleSn1(7)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[8]},on:{click:function(c){return t.toggleSn1(8)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[9]},on:{click:function(c){return t.toggleSn1(9)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[10]},on:{click:function(c){return t.toggleSn1(10)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[11]},on:{click:function(c){return t.toggleSn1(11)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[12]},on:{click:function(c){return t.toggleSn1(12)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[13]},on:{click:function(c){return t.toggleSn1(13)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[14]},on:{click:function(c){return t.toggleSn1(14)}}}),i("div",{staticClass:"step sn1",class:{sn1Active:t.sn1Seq[15]},on:{click:function(c){return t.toggleSn1(15)}}}),i("knob-control",{staticClass:"vol-knob",attrs:{min:0,max:100,size:40,"stroke-width":12,"primary-color":"#67D0F7"},model:{value:t.sn1Vol,callback:function(c){t.sn1Vol=c},expression:"sn1Vol"}})],1)])},g=[function(){var t=this,c=t.$createElement,s=t._self._c||c;return s("div",{staticClass:"title"},[s("h1",[t._v("Live.js")])])}],C=s("8cc4"),k=s.n(C),p=s("a8bf"),h=s.n(p),v={name:"home",created:function(){var t=this;h()(k.a.context,"#button").then(function(){console.log("audio context started")}),window.addEventListener("keydown",function(c){"Space"==c.code&&t.playStop()}),this.index=0;new k.a.Loop(function(t){},"16n").start(0)},methods:{randomButtonClicked:function(t){if("kick"==t)for(var c=0;c<15;c++)this.kickSeq[c]=Math.random()<.5;if("clap"==t)for(var s=0;s<15;s++)this.clapSeq[s]=Math.random()<.5;if("ch"==t)for(var i=0;i<15;i++)this.chSeq[i]=Math.random()<.5;if("sn1"==t)for(var n=0;n<15;n++)this.sn1Seq[n]=Math.random()<.5},toggleKick:function(t){console.log(this.kickSeq[t]),0==this.kickSeq[t]?this.kickSeq[t]=!0:1==this.kickSeq[t]&&(this.kickSeq[t]=!1)},toggleClap:function(t){console.log(this.clapSeq[t]),0==this.clapSeq[t]?this.clapSeq[t]=!0:1==this.clapSeq[t]&&(this.clapSeq[t]=!1)},toggleOh:function(t){console.log(this.ohSeq[t]),0==this.ohSeq[t]?this.ohSeq[t]=!0:1==this.ohSeq[t]&&(this.ohSeq[t]=!1)},toggleCh:function(t){console.log(this.chSeq[t]),0==this.chSeq[t]?this.chSeq[t]=!0:1==this.chSeq[t]&&(this.chSeq[t]=!1)},toggleSn1:function(t){console.log(this.sn1Seq[t]),0==this.sn1Seq[t]?this.sn1Seq[t]=!0:1==this.sn1Seq[t]&&(this.sn1Seq[t]=!1)},toggleSn2:function(t){console.log(this.sn1Seq[t]),0==this.sn2Seq[t]?this.sn2Seq[t]=!0:1==this.sn2Seq[t]&&(this.sn2Seq[t]=!1)},playStop:function(){0==this.playing?(this.index=0,k.a.Transport.start("+0.1"),this.playing=!0):(this.index=0,this.playing=!1,k.a.Transport.stop())}},computed:{},data:function(){return{bpm:120,index:0,playing:!1,kickSeq:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},clapSeq:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},chSeq:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},ohSeq:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},sn1Seq:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},sn2Seq:{one:!1,two:!1,three:!1,four:!1,five:!1,six:!1,seven:!1,eight:!1},kickVol:40,clapVol:40,ohVol:40,chVol:40,sn1Vol:40,sn2Vol:40}},watch:{bpm:function(t){k.a.Transport.bpm.value=t,console.log(k.a.Transport.bpm.value)}}},d=v,f=(s("cccb"),Object(l["a"])(d,u,g,!1,null,null,null)),M=f.exports;i["a"].use(r["a"]);var m=new r["a"]({routes:[{path:"/",name:"home",component:M}]}),S=s("2e30"),E=s.n(S);i["a"].config.productionTip=!1,i["a"].use(E.a),i["a"].component("knob-control",E.a),new i["a"]({router:m,render:function(t){return t(A)}}).$mount("#app")},"64a9":function(t,c,s){},cccb:function(t,c,s){"use strict";var i=s("d563"),n=s.n(i);n.a},d563:function(t,c,s){},ed7f:function(t,c,s){t.exports=s.p+"img/circle.33a48f6d.png"}});
//# sourceMappingURL=app.0c8719ea.js.map