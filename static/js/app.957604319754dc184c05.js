webpackJsonp([12],{"+YC0":function(e,t){},AnJX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return function(){return n("RmSj")("./"+e)}},i=[{path:"*",component:u("404.vue")}],a=[].concat(i,[{path:"/",component:u("home.vue")},{path:"/view-1",component:u("view-1/index.vue")},{path:"/view-2",component:u("view-2/index.vue")},{path:"/view-3",component:u("view-3/index.vue")},{path:"/view-4",component:u("view-4/index.vue")},{path:"/view-5",component:u("view-5/index.vue")},{path:"/view-6",component:u("view-6/index.vue")},{path:"/view-7",component:u("view-7/index.vue")},{path:"/view-8",component:u("view-8/index.vue")},{path:"/view-9",component:u("view-9/index.vue")}]);t.default=a},Hqqj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=o(n("Xxa5")),i=o(n("//Fk")),a=o(n("exGp"));function o(e){return e&&e.__esModule?e:{default:e}}var r={actionA:function(){var e=(0,a.default)(u.default.mark(function e(t){var n,a=t.commit;t.state,t.getters;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new i.default(function(e,t){setTimeout(function(){e()},1e3)}),e.t0=a,e.next=4,n;case 4:e.t1=e.sent,(0,e.t0)("setStatus",e.t1);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),actionB:function(){var e=(0,a.default)(u.default.mark(function e(t){t.commit;var n=t.state,i=(t.getters,t.dispatch);return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("state status--:"+n.status),e.next=3,i("actionA").then(function(e){console.log("state status--:"+n.status)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};t.default=r},IcnI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(n("7+uW")),i=s(n("NYxO")),a=s(n("m9kF")),o=s(n("Hqqj")),r=n("bhS9");function s(e){return e&&e.__esModule?e:{default:e}}u.default.use(i.default);var v=new i.default.Store({modules:{module_user:r.module_user,module_admin:r.module_admin},state:{status:"0"},getters:{userName:function(e,t){return"小明"}},mutations:a.default,actions:o.default});t.default=v},M93x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n("xJD8"),i=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);var o=n("Sg+y");var r=function(e){n("+YC0")},s=n("VU/8")(i.a,o.a,!1,r,null,null);t.default=s.exports},Mt9h:function(e,t){},NHnr:function(e,t,n){"use strict";var u=r(n("7+uW")),i=r(n("M93x")),a=r(n("YaEn")),o=r(n("IcnI"));function r(e){return e&&e.__esModule?e:{default:e}}n("j1ja"),n("Mt9h"),u.default.config.productionTip=!1,new u.default({el:"#app",router:a.default,store:o.default,components:{App:i.default},template:"<App/>"})},RmSj:function(e,t,n){var u={"./404":["HLcy",9],"./404.vue":["HLcy",9],"./home":["lyB/",10],"./home.vue":["lyB/",10],"./view-1":["vNKt",8],"./view-1/":["vNKt",8],"./view-1/index":["vNKt",8],"./view-1/index.vue":["vNKt",8],"./view-2":["o6ju",3],"./view-2/":["o6ju",3],"./view-2/index":["o6ju",3],"./view-2/index.vue":["o6ju",3],"./view-3":["rShL",7],"./view-3/":["rShL",7],"./view-3/index":["rShL",7],"./view-3/index.vue":["rShL",7],"./view-4":["8hOw",6],"./view-4/":["8hOw",6],"./view-4/index":["8hOw",6],"./view-4/index.vue":["8hOw",6],"./view-5":["l87P",5],"./view-5/":["l87P",5],"./view-5/index":["l87P",5],"./view-5/index.vue":["l87P",5],"./view-6":["SJYT",2],"./view-6/":["SJYT",2],"./view-6/index":["SJYT",2],"./view-6/index.vue":["SJYT",2],"./view-7":["T6y6",1],"./view-7/":["T6y6",1],"./view-7/index":["T6y6",1],"./view-7/index.vue":["T6y6",1],"./view-8":["q+Ne",0],"./view-8/":["q+Ne",0],"./view-8/index":["q+Ne",0],"./view-8/index.vue":["q+Ne",0],"./view-9":["hbBb",4],"./view-9/":["hbBb",4],"./view-9/index":["hbBb",4],"./view-9/index.vue":["hbBb",4]};function i(e){var t=u[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(u)},i.id="RmSj",e.exports=i},"Sg+y":function(e,t,n){"use strict";var u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]};t.a=u},YaEn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=o(n("7+uW")),i=o(n("/ocq")),a=o(n("AnJX"));function o(e){return e&&e.__esModule?e:{default:e}}u.default.use(i.default);var r=new i.default({routes:a.default});t.default=r},bhS9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.module_user={state:{user_name:"张三"},getters:{getUserName:function(e,t){return e.user_name}},mutations:{},actions:{}},t.module_admin={state:{manage_name:"李四"},getters:{getManageName:function(e,t){return e.manage_name}},mutations:{},actions:{}}},m9kF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={setStatus:function(e,t){e.status="1"},app:function(e){e.status="1"}}},xJD8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"App"}}},["NHnr"]);
//# sourceMappingURL=app.957604319754dc184c05.js.map