(function(t){function e(e){for(var r,o,l=e[0],s=e[1],i=e[2],b=0,O=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&O.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(O.length)O.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"184c":function(t,e,n){"use strict";n("4440")},4440:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container-fluid"},c={class:"row justify-content-center"},o={class:"col-md-10 col-lg-7"};function l(t,e,n,l,s,i){var u=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(u),Object(r["g"])("div",a,[Object(r["g"])("div",c,[Object(r["g"])("div",o,[Object(r["i"])(b)])])])],64)}var s=function(t){return Object(r["u"])("data-v-4ab2c3af"),t=t(),Object(r["s"])(),t},i={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(r["h"])("Art Reviews"),O=s((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),j={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav ms-auto"},d={class:"nav-item"},g=Object(r["h"])("Art"),f={class:"nav-item"},m=Object(r["h"])("Artist"),v={class:"nav-item"},h=Object(r["h"])("My Account"),y={class:"nav-item"},w=s((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),A={class:"nav-item"},k=s((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Signup ",-1)})),E=s((function(){return Object(r["g"])("li",{class:"nav-item"},[Object(r["g"])("button",{class:"btn btn-warning"},"Logout")],-1)}));function S(t,e){var n=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",i,[Object(r["g"])("div",u,[Object(r["i"])(n,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),O,Object(r["g"])("div",j,[Object(r["g"])("ul",p,[Object(r["g"])("li",d,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/art"},{default:Object(r["E"])((function(){return[g]})),_:1})]),Object(r["g"])("li",f,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/artist"},{default:Object(r["E"])((function(){return[m]})),_:1})]),Object(r["g"])("li",v,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["E"])((function(){return[h]})),_:1})]),Object(r["g"])("li",y,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[w]})),_:1})]),Object(r["g"])("li",A,[Object(r["i"])(n,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[k]})),_:1})]),E])])])])}n("184c");var x=n("6b0d"),F=n.n(x);const _={},P=F()(_,[["render",S],["__scopeId","data-v-4ab2c3af"]]);var U=P,$={name:"App",components:{"my-header":U},created:function(){this.$store.dispatch("getArt")}};const L=F()($,[["render",l]]);var C=L,T=n("bc3a"),R=n.n(T),K=n("6c02"),M=Object(r["g"])("h1",null,"Home",-1),q=[M];function I(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,q)}var N={};const V=F()(N,[["render",I]]);var B=V,z=Object(r["g"])("h1",null,"Login",-1),G={key:0,class:"alert alert-success"},J={class:"mb-3"},D=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),H={class:"mb-3"},Q=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),W=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),X={key:0,class:"form-text text-danger"},Y={key:1,class:"form-text text-danger"};function Z(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[z,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",G," Thanks for signing up, please log in now. ")):Object(r["e"])("",!0),Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",J,[D,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.email=t})},null,512),[[r["C"],c.email]])]),Object(r["g"])("div",H,[Q,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.password=t})},null,512),[[r["C"],c.password]])]),W,c.credentialsError?(Object(r["r"])(),Object(r["f"])("p",X," Invalid credentials ")):Object(r["e"])("",!0),c.loginError?(Object(r["r"])(),Object(r["f"])("p",Y," Could not log you in, please try again later ")):Object(r["e"])("",!0)],32)])}n("ac1f"),n("5319");var tt={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};R.a.post("/contacts/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/account")})).catch((function(e){console.log("error in /contacts/login",e),401==e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const et=F()(tt,[["render",Z]]);var nt=et,rt={class:"card"},at={class:"card-body"},ct={class:"text-primary"},ot=Object(r["g"])("br",null,null,-1),lt=Object(r["h"])(" Style: "),st=Object(r["g"])("br",null,null,-1),it=Object(r["h"])(" Artist: "),ut=Object(r["g"])("br",null,null,-1),bt=Object(r["g"])("br",null,null,-1),Ot=Object(r["g"])("button",{class:"btn btn-success"},"Add a Review",-1),jt=Object(r["g"])("button",{class:"btn btn-outline-success"}," Sign In to Add a Review ",-1);function pt(t,e,n,a,c,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",rt,[Object(r["g"])("div",at,[Object(r["g"])("h2",ct,Object(r["A"])(o.art.Title),1),ot,Object(r["g"])("p",null,[lt,st,Object(r["g"])("strong",null,Object(r["A"])(o.art.ArtStyle),1)]),Object(r["g"])("p",null,[it,ut,Object(r["g"])("strong",null,Object(r["A"])(o.art.ArtistFK),1)])])]),bt,o.auth?(Object(r["r"])(),Object(r["d"])(l,{key:0,to:"/art/".concat(this.$route.params.pk,"/review")},{default:Object(r["E"])((function(){return[Ot]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(l,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[jt]})),_:1}))])}n("7db0"),n("d3b7");var dt={computed:{art:function(){var t=this,e=this.$store.state.art,n=e.find((function(e){return e.ArtPK==t.$route.params.pk}));return n},auth:function(){return this.$store.state.token}}};const gt=F()(dt,[["render",pt]]);var ft=gt,mt=Object(r["g"])("h1",null,"Art",-1),vt=Object(r["g"])("hr",null,null,-1),ht={class:"table"},yt=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Title"),Object(r["g"])("th",null,"Style"),Object(r["g"])("th",null,"Artist"),Object(r["g"])("th")])],-1),wt=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1);function At(t,e,n,a,c,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[mt,vt,Object(r["g"])("table",ht,[yt,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.theArt,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.ArtPK},[Object(r["g"])("th",null,Object(r["A"])(t.Title),1),Object(r["g"])("th",null,Object(r["A"])(t.ArtStyle),1),Object(r["g"])("th",null,Object(r["A"])(t.ArtistFK),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/art/".concat(t.ArtPK)},{default:Object(r["E"])((function(){return[wt]})),_:2},1032,["to"])])])})),128))])])])}var kt={computed:{theArt:function(){return this.$store.state.art}}};const Et=F()(kt,[["render",At]]);var St=Et,xt=Object(r["g"])("h1",null,"Not Found",-1),Ft=Object(r["g"])("h4",null,"Sorry, this page can't be found.",-1),_t=[xt,Ft];function Pt(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,_t)}var Ut={};const $t=F()(Ut,[["render",Pt]]);var Lt=$t,Ct=Object(r["g"])("h1",null,"Create a Review",-1),Tt=[Ct];function Rt(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,Tt)}var Kt={};const Mt=F()(Kt,[["render",Rt]]);var qt=Mt,It=Object(r["g"])("h1",null,"Sign Up",-1),Nt={class:"mb-3"},Vt=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),Bt={class:"mb-3"},zt=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),Gt={class:"mb-3"},Jt=Object(r["g"])("label",{for:"email-input",class:"form-label"},"E-mail",-1),Dt={key:0,class:"text-danger"},Ht={class:"mb-3"},Qt=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),Wt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Xt={id:"error-signup",class:"text-danger"};function Yt(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[It,Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",Nt,[Vt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.nameFirst=t})},null,512),[[r["C"],c.nameFirst]])]),Object(r["g"])("div",Bt,[zt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.nameLast=t})},null,512),[[r["C"],c.nameLast]])]),Object(r["g"])("div",Gt,[Jt,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.email=t})},null,512),[[r["C"],c.email]]),c.dupEmail?(Object(r["r"])(),Object(r["f"])("small",Dt,"Please choose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",Ht,[Qt,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.password=t})},null,512),[[r["C"],c.password]])]),Wt,Object(r["g"])("p",Xt,Object(r["A"])(c.errorMessage),1)],32)])}var Zt={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={nameFirst:this.nameFirst,nameLast:this.nameLast,email:this.email,password:this.password};R.a.post("/contacts",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="Cannot sign you up, please try again later"}))}}};const te=F()(Zt,[["render",Yt]]);var ee=te,ne=Object(r["g"])("h1",null,"Account",-1),re=Object(r["g"])("hr",null,null,-1),ae={key:0,class:"text-danger"},ce={key:1,class:"table"},oe=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Title"),Object(r["g"])("th",null,"Summary"),Object(r["g"])("th",null,"Rating")],-1);function le(t,e,n,a,c,o){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[ne,re,Object(r["g"])("h3",null,Object(r["A"])(o.firstName)+"'s Reviews",1),c.accountError?(Object(r["r"])(),Object(r["f"])("p",ae," Cannot get your account information, please try again later. ")):Object(r["e"])("",!0),c.ratingsByUser?(Object(r["r"])(),Object(r["f"])("table",ce,[oe,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.ratingsByUser,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.RatingPK},[Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/art/".concat(t.ArtFK)},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(t.ArtFK),1)]})),_:2},1032,["to"])]),Object(r["g"])("th",null,Object(r["A"])(t.Review),1),Object(r["g"])("th",null,Object(r["A"])(t.PassFail),1)])})),128))])])):Object(r["e"])("",!0)])}var se={data:function(){return{ratingsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("store so far",this.$store.state),this.$store.state.user.NameFirst}},created:function(){var t=this;R.a.get("/reviews/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("the response",e),t.ratingsByUser=e.data})).catch((function(){t.accountError=!0}))}};const ie=F()(se,[["render",le]]);var ue=ie,be=Object(r["g"])("h1",null,"Artist",-1),Oe=[be];function je(t,e,n,a,c,o){return Object(r["r"])(),Object(r["f"])("div",null,Oe)}var pe={};const de=F()(pe,[["render",je]]);var ge=de,fe=Object(K["a"])({history:Object(K["b"])(),routes:[{path:"/",component:B},{path:"/account",component:ue},{path:"/login",component:nt},{path:"/art",component:St},{path:"/art/:pk",component:ft,children:[{path:"review",component:qt}]},{path:"/artist",component:ge},{path:"/signup",component:ee},{path:"/:invalidroute(.*)",component:Lt}]}),me=fe,ve=n("5502"),he=Object(ve["a"])({state:{token:null,user:null,art:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storeArt:function(t,e){t.art=e}},actions:{getArt:function(t){var e=t.commit;R.a.get("/art").then((function(t){console.log("response in /art",t),e("storeArt",t.data)}))}}});R.a.defaults.baseURL="https://cis410-fa21-montgomery-api.azurewebsites.net/";var ye=Object(r["c"])(C);ye.use(me),ye.use(he),ye.mount("#app")}});
//# sourceMappingURL=app.ff8d2d95.js.map