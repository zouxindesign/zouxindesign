webpackJsonp([1],{"4qN4":function(e,t){},"7iYQ":function(e,t){},"9A3j":function(e,t){},EEqk:function(e,t){},I9sK:function(e,t){},LZSw:function(e,t){Bmob.initialize("b37e0c33a01c437fb31778732cd53936","c9e486b23da99714f801343baf18ae62")},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("MVMM"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("div",{staticClass:"grid-content bg-purple"},[this._v("电影")])]),this._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"grid-content bg-purple"},[this._v("音乐")])]),this._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"grid-content bg-purple"},[this._v("等待")])]),this._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"grid-content bg-purple"},[this._v("个人")])])],1)],1)},staticRenderFns:[]};var r={name:"App",components:{myfooter:n("Z0/y")({},o,!1,function(e){n("7iYQ")},"data-v-b047eb26",null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("Z0/y")(r,s,!1,function(e){n("goYQ")},null,null).exports,c=n("zO6J"),u=n("3cXf"),l=n.n(u),m={data:function(){return{LoginForm:{username:"",password:""},logining:!1,rule:{username:[{required:!0,max:14,min:7,message:"用户名是必须的，长度为7-14位",trigger:"blur"}],password:[{required:!0,message:"密码是必须的！",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs.LoginForm.validate(function(t){if(t){e.logining=!0;var n={username:e.LoginForm.username,password:e.LoginForm.password};LoginUser(n).then(function(t){e.logining=!1;var n=t.data,i=n.code,o=n.msg,r=n.user;200!==i?e.$message({type:"error",message:o}):(e.$message({type:"success",message:o}),sessionStorage.setItem("user",l()(r)),e.$router.push("/manger/my"))})}else console.log("submit err")})},reset:function(){this.$refs.LoginForm.resetFields()},toregin:function(){this.$router.push("/home_page")}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("el-form",{ref:"LoginForm",staticClass:"login-form",attrs:{model:e.LoginForm,rules:e.rule,"label-width":"0"}},[n("h3",[e._v("用户登录系统")]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text",placeholder:"username"},model:{value:e.LoginForm.username,callback:function(t){e.$set(e.LoginForm,"username",t)},expression:"LoginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"password"},model:{value:e.LoginForm.password,callback:function(t){e.$set(e.LoginForm,"password",t)},expression:"LoginForm.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"submitBtn",attrs:{type:"danger",round:"",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("\n        登录\n      ")]),e._v(" "),n("el-button",{staticClass:"resetBtn",attrs:{type:"primary",round:""},nativeOn:{click:function(t){return t.preventDefault(),e.reset(t)}}},[e._v("\n        重置\n      ")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("还没有账号，马上去"),n("span",{staticClass:"to",on:{click:e.toregin}},[e._v("注册")])])],1)],1)],1)},staticRenderFns:[]};var _=n("Z0/y")(m,d,!1,function(e){n("Xogp")},"data-v-1e5e158f",null).exports,p=n("9rMa"),v={data:function(){return{}},methods:{click1:function(){var e=new(Bmob.Object.extend("GameScore"));e.set("score",1337),e.save(null,{success:function(e){alert("create object success, object id:"+e.id)},error:function(e,t){alert("create object fail")}})}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[this._v("\n      "+this._s(this.$store.state.account.account_username)+"\n      "),t("button",{on:{click:this.click1}},[this._v("click")])])},staticRenderFns:[]};var f=n("Z0/y")(v,h,!1,function(e){n("EEqk")},"data-v-6b0b0021",null).exports,g=n("4YfN"),b=n.n(g),y={created:function(){},data:function(){return{}},computed:b()({},Object(p.b)({movie_menu_img:function(e){return e.movie_store.movie_menu_img}})),mounted:function(){this.$store.dispatch("load_movie_menu_img")},methods:{go_this:function(){var e=event.currentTarget.alt;this.$router.push({path:"/Movie_play",name:"Movie_play",query:{playId:e}})}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movie_menu"},[n("el-row",e._l(e.movie_menu_img.data,function(t){return n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[n("img",{attrs:{src:t.img_url,alt:t.id},on:{click:function(t){e.go_this(t)}}})])])}))],1)},staticRenderFns:[]};var x=n("Z0/y")(y,w,!1,function(e){n("I9sK")},"data-v-c810cc1e",null).exports,$={components:{child1:x,child2:x,child3:x,child4:x,child5:x},data:function(){return{child1:"child1",child2:"child2",child3:"child3",child4:"child4",child5:"child5",currentView:"child1",activeIndex:"1",img_lists:[]}},methods:{tab_change:function(e){this.currentView=e}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index"},[n("div",{staticClass:"movie_slider"},[n("el-carousel",{attrs:{height:"150px"}},e._l(4,function(t){return n("el-carousel-item",{key:t},[n("h3",[e._v(e._s(t))])])}))],1),e._v(" "),n("div",{staticClass:"movie_banner"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(t){e.tab_change(e.child1)}}},[e._v("电影")]),e._v(" "),n("el-menu-item",{attrs:{index:"2"},on:{click:function(t){e.tab_change(e.child2)}}},[e._v("韩剧")]),e._v(" "),n("el-menu-item",{attrs:{index:"3"},on:{click:function(t){e.tab_change(e.child3)}}},[e._v("美剧")]),e._v(" "),n("el-menu-item",{attrs:{index:"4"},on:{click:function(t){e.tab_change(e.child4)}}},[e._v("国产剧")]),e._v(" "),n("el-menu-item",{attrs:{index:"5"},on:{click:function(t){e.tab_change(e.child5)}}},[e._v("综艺")])],1),e._v(" "),n(e.currentView,{tag:"div"})],1)])},staticRenderFns:[]};var F,C=n("Z0/y")($,k,!1,function(e){n("wh//")},"data-v-5ae8e46c",null).exports,L=n("a3Yh"),E=n.n(L),j=(F={components:{},created:function(){console.log(this.$route.params),this.get_current_movie()},mounted:function(){this.get()},data:function(){return{}},computed:b()({},Object(p.b)({movie_menu_img:function(e){return e.movie_store.movie_menu_img}}))},E()(F,"mounted",function(){this.$store.dispatch("load_movie_menu_img")}),E()(F,"methods",{get_current_movie:function(){var e=this;this.movie_menu_img.data.find(function(t){(t.id=e.$route.params.playId)&&(e.playerOptions.src=t.play_url,console.log(t.play_url))})}}),F),M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"movie_menu"},[t("iframe",{attrs:{scrolling:"no",allowtransparency:"true",frameborder:"0",src:"https://api.ipengfu.com/ckplayerx/m3u8.php?url=https://cdn.kuyunbo.club/20180501/1dRjYeUp/index.m3u8",width:"100%",allowfullscreen:"true",height:"100%"}})])}]};var Z=n("Z0/y")(j,M,!1,function(e){n("9A3j")},"data-v-a2334278",null).exports;i.default.use(c.a);var O=new c.a({routes:[{path:"/Account_login",name:"Account_login",component:_},{path:"/Home_page",name:"Home_page",component:f},{path:"/Movie_index",name:"Movie_index",component:C},{path:"/Movie_play",name:"Movie_play",component:Z}]}),R=n("x4un"),q=n.n(R),A=(n("4qN4"),n("LZSw"),n("D0oh"),n("aozt")),I=n.n(A),Y={state:{movie_menu_img:""},getter:{},mutations:{get_movie_menu_img:function(e,t){e.movie_menu_img=t}},actions:{load_movie_menu_img:function(e,t){I.a.get("../../static/movie_menu_imglists/movie_menu_imglists.json").then(function(t){e.commit("get_movie_menu_img",t)}).catch(function(e){console.log(e)})}}};i.default.use(p.a);var z=new p.a.Store({modules:{account_store:{state:{show:!1,account_username:"a",account_info:{age:"12",height:12}},mutations:{change:function(e){e.account_username="b"}}},movie_store:Y}}),N=n("lJzc"),S=n.n(N);i.default.use(q.a),i.default.use(S.a,{preLoad:1.3,error:"static/error.png",loading:"加载失败",attempt:1}),i.default.config.productionTip=!1,new i.default({el:"#app",router:O,store:z,components:{App:a},template:"<App/>"})},Xogp:function(e,t){},goYQ:function(e,t){},"wh//":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0dbfc599fa028a4e3bce.js.map