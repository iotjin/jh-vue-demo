(function(t){function e(e){for(var a,c,l=e[0],i=e[1],s=e[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("66b9");var a,o,r=n("b650"),c=(n("c3a6"),n("ad06")),l=(n("5246"),n("6b41")),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main")],1)},u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BaseNavBar",{attrs:{title:t.title,isBack:t.isBack}}),n("router-view"),n("BaseTabBar",{attrs:{tabBars:t.tabBars}})],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"NavBar"},[n("van-nav-bar",{attrs:{title:t.title,fixed:"",placeholder:"","safe-area-inset-top":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[t.$slots.left?n("div",{attrs:{slot:"left"},slot:"left"},[t._t("left")],2):t.isBack?n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left",size:"18",color:t.backIconColor}})],1):t._e(),n("div",{attrs:{slot:"right"},slot:"right"},[t._t("right")],2)])],1)},v=[],h=n("ade3"),b=(n("b0c0"),{components:(a={},Object(h["a"])(a,l["a"].name,l["a"]),Object(h["a"])(a,c["a"].name,c["a"]),a),props:{isBack:{type:[Boolean,String],default:!0},backIconColor:{type:String,default:"#000"},title:{type:String,default:""}},methods:{onClickLeft:function(){console.log("点击返回按钮")},onClickRight:function(){console.log("点击右侧按钮")}},created:function(){}}),m=b,g=(n("b3dd"),n("2877")),_=Object(g["a"])(m,f,v,!1,null,null,null),y=_.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabbar",{attrs:{"v-model":t.selected,"inactive-color":t.color,"active-color":t.selectedColor,route:"",placeholder:"","safe-area-inset-bottom":""},on:{change:t.onChange}},[t._l(t.tabBars,(function(e){return[n("van-tabbar-item",{key:e.name,attrs:{replace:"",to:e.name,badge:e.badge,dot:e.isShowRedDot},scopedSlots:t._u([{key:"icon",fn:function(t){return[n("img",{attrs:{src:(t.active,"$assets/tab/tab1.png")}})]}}],null,!0)},[n("span",[t._v(t._s(e.text))])])]}))],2)],1)},O=[],j=(n("a52c"),n("2ed4")),x=(n("537a"),n("ac28")),k=(n("a9e3"),{components:(o={},Object(h["a"])(o,x["a"].name,x["a"]),Object(h["a"])(o,j["a"].name,j["a"]),o),props:{selected:{type:Number,default:0},color:{type:String,default:"#7d7e80"},selectedColor:{type:String,default:"#1989fa"},tabBars:{type:Array,default:function(){return[]}}},data:function(){return{active:0,tabBars0:[{name:"/Module1",isShowRedDot:!0,badge:"",text:"模块一",iconPath:"https://img.yzcdn.cn/vant/user-inactive.png",selectedIconPath:"https://img.yzcdn.cn/vant/user-active.png"},{name:"/Module2",isShowRedDot:!1,badge:"",text:"模块二",iconPath:"https://img.yzcdn.cn/vant/user-inactive.png",selectedIconPath:"https://img.yzcdn.cn/vant/user-active.png"},{name:"/Module3",isShowRedDot:!1,badge:"0",text:"模块三",iconPath:"https://img.yzcdn.cn/vant/user-inactive.png",selectedIconPath:"https://img.yzcdn.cn/vant/user-active.png"},{name:"/Module4",isShowRedDot:!1,badge:"哈",text:"模块四",iconPath:"https://img.yzcdn.cn/vant/user-inactive.png",selectedIconPath:"https://img.yzcdn.cn/vant/user-active.png"}]}},methods:{onChange:function(t){console.log("切换到tabbar："+t)}},created:function(){console.log(this.$route),console.log(this.$props.tabBars.length),"/"===this.$route.path&&this.$props.tabBars.length&&this.$router.push("/Module1")}}),w=k,M=Object(g["a"])(w,B,O,!1,null,null,null),$=M.exports,P={components:{BaseNavBar:y,BaseTabBar:$},data:function(){return{title:"标题",isBack:!1,tabBars:[{name:"/Module1",isShowRedDot:!0,badge:"",text:"模块一",iconPath:"$assets/tab/tab1.png",selectedIconPath:"$assets/tab/tab1_select.png"}]}},methods:{}},S=P,C=Object(g["a"])(S,d,p,!1,null,null,null),E=C.exports,z={name:"App",components:{Main:E},data:function(){return{title:"标题",isBack:!1}},methods:{onClick:function(){console.log("外部 - 点击返回按钮")}}},R=z,I=(n("034f"),Object(g["a"])(R,s,u,!1,null,null,null)),D=I.exports,T=n("8c4f"),N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" root "),n("div",[t._v("root")]),n("div",[t._v("root")]),n("div",[t._v("root")]),n("div",[t._v("root")])])}],J={},L=J,q=Object(g["a"])(L,N,A,!1,null,null,null),F=q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("模块1")])},H=[],K={},Q=K,U=Object(g["a"])(Q,G,H,!1,null,null,null),V=U.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("模块2")])},X=[],Y={},Z=Y,tt=Object(g["a"])(Z,W,X,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("模块3")])},at=[],ot={},rt=ot,ct=Object(g["a"])(rt,nt,at,!1,null,null,null),lt=ct.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("模块4")])},st=[],ut={},dt=ut,pt=Object(g["a"])(dt,it,st,!1,null,null,null),ft=pt.exports;i["a"].use(T["a"]);var vt=[{path:"/",name:"Root",component:F},{path:"/Module1",name:"Module1",component:V},{path:"/Module2",name:"Module2",component:et},{path:"/Module3",name:"Module3",component:lt},{path:"/Module4",name:"Module4",component:ft}],ht=new T["a"]({routes:vt}),bt=ht;i["a"].use(l["a"]),i["a"].use(c["a"]),i["a"].use(r["a"]),i["a"].config.productionTip=!1,new i["a"]({router:bt,render:function(t){return t(D)}}).$mount("#app")},"85ec":function(t,e,n){},b3dd:function(t,e,n){"use strict";n("cde3")},cde3:function(t,e,n){}});
//# sourceMappingURL=app.0c70520f.js.map