(this["webpackJsonpcoders-camp-hackathon-2021-frontend"]=this["webpackJsonpcoders-camp-hackathon-2021-frontend"]||[]).push([[0],{108:function(e,t,n){},166:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),s=n.n(c),o=(n(166),n(339)),i=n(43),u=(n(108),n(8)),l=n(1),d=Object(r.createContext)(),j=function(e){var t=e.children,n=Object(r.useState)(localStorage.getItem("token")||""),a=Object(u.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(localStorage.getItem("profile")||null),i=Object(u.a)(o,2),j=i[0],h=i[1];return Object(l.jsx)(d.Provider,{value:{token:c,setNewToken:function(e){s(e),localStorage.setItem("token",e)},clearToken:function(){s(""),localStorage.removeItem("token")},profile:j,setNewProfile:function(e){h(e),localStorage.setItem("profile",JSON.stringify(e))},clearProfile:function(){h(null),localStorage.removeItem("profile")}},children:t})},h=n(149),p=Object(h.a)({palette:{primary:{light:"#a269f8",main:"#6e3bc4",dark:"#380992"},secondary:{light:"#c4f76d",main:"#91c43b",dark:"#5f9300"}}}),m=n(318),b=n(321),x=n(322),O=n(86),f=n(323),v=n(135),g=n.n(v),w=n(134),y=n.n(w),C=n(320),k=Object(m.a)((function(e){return{rootNav:{},titleNav:{flexGrow:1,marginLeft:"20px"},welcomeTitle:{marginRight:"20px"}}})),S=function(){var e=Object(r.useContext)(d),t=e.token,n=e.profile,a=e.clearToken,c=e.clearProfile,s=k(),o=Object(C.a)("(min-width:600px)");return Object(l.jsx)("div",{className:s.rootNav,children:Object(l.jsx)(b.a,{position:"static",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)(y.a,{}),Object(l.jsx)(O.a,{className:s.titleNav,variant:"h6",children:"Questio"}),t&&Object(l.jsxs)(l.Fragment,{children:[n&&Object(l.jsx)(O.a,{variant:"h6",noWrap:!0,className:s.welcomeTitle,children:n.name}),Object(l.jsx)(f.a,{variant:"contained",color:"secondary",startIcon:Object(l.jsx)(g.a,{}),onClick:function(){c(),a()},children:o&&"Log out"})]})]})})})},N=n(18),A=n(331),T=n(280),E=n(288),q=n(334),I=n(6),P=n.n(I),B=n(10),R=n(329),U=n(330),F=n(16),_=n(36),Q=n(290),z=n(281),G=n(282),J=function(e){var t=e.id,n=e.name,r=e.errors,a=e.onChange;return Object(l.jsxs)(T.a,{fullWidth:!0,children:[Object(l.jsx)(Q.a,{htmlFor:t,children:"Email"}),Object(l.jsx)(z.a,{type:"email",error:!!r,id:t,name:n,onChange:a,"aria-describedby":"email-input-field"}),Object(l.jsx)(G.a,{id:"FormInputHelperText",children:r||""})]})},H=function(e){var t=e.id,n=e.errors,r=e.name,a=e.onChange;return Object(l.jsxs)(T.a,{fullWidth:!0,children:[Object(l.jsx)(Q.a,{htmlFor:t,children:"Password"}),Object(l.jsx)(z.a,{type:"password",error:!!n,id:t,name:r,onChange:a,"aria-describedby":"password-input-field"}),Object(l.jsx)(G.a,{id:"FormInputHelperText",children:n||""})]})},W=n(283),L=n(324),M=n(340),V=n(326),D=n(327),Y=n(328),Z=n(141),$=n.n(Z),K=n(143),X=n.n(K),ee=n(14),te=n(12),ne=function(){function e(){Object(ee.a)(this,e)}return Object(te.a)(e,null,[{key:"getRooms",value:function(){var t=Object(B.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl,{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getRoomById",value:function(){var t=Object(B.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"GET",mode:"cors"});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"createRoom",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"changeRoomCollection",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});case 3:return c=t.sent,t.next=6,c.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"changeRoomName",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});case 3:return c=t.sent,t.next=6,c.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"pushActiveQuestion",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});case 3:return c=t.sent,t.next=6,c.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"updateGuests",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"getActiveQuestion",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n,"/activequestion?email=").concat(r),{method:"GET",mode:"cors"});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"postAnswer",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r,a,c){var s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n,"/answers"),{method:"POST",mode:"cors",body:JSON.stringify({questionId:r,answer:a,email:c})});case 3:return s=t.sent,t.next=6,s.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r,a){return t.apply(this,arguments)}}()},{key:"getGuestSummary",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n,"/answers?email=").concat(r),{method:"GET",mode:"cors"});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"closeRoom",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n,"/close"),{method:"PATCH",mode:"cors",Authorization:"Bearer ".concat(r)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();ne.apiUrl="https://camp-hackathon-2021-backend.herokuapp.com/api/rooms";var re=function(e){var t=e.question,n=e.roomId,a=Object(r.useContext)(d).token,c=void 0!==t.timeForAnswer?t.timeForAnswer:10,s=Object(r.useState)(c),o=Object(u.a)(s,2),i=o[0],j=o[1],h=Object(r.useState)(c),p=Object(u.a)(h,2),m=p[0],b=p[1],x=Object(r.useState)(!1),O=Object(u.a)(x,2),f=O[0],v=O[1],g=Object(r.useState)(!1),w=Object(u.a)(g,2),y=w[0],C=w[1];Object(r.useEffect)((function(){var e;return f&&(e=setInterval((function(){j(m),b((function(e){return e-1}))}),1e3)),-1===m&&(v(!1),C(!0)),function(){return clearInterval(e)}}),[f,m]);var k=function(){f||ne.pushActiveQuestion(n,{selectedQuestionId:t._id},a),v(!0)};return Object(l.jsxs)(W.a,{disabled:y,button:!0,onClick:k,children:[Object(l.jsx)(L.a,{children:Object(l.jsx)($.a,{})}),Object(l.jsx)(M.a,{title:"Ask this question",children:Object(l.jsx)(V.a,{primary:"".concat(t.text)})}),i,Object(l.jsx)(D.a,{children:Object(l.jsx)(M.a,{title:"Ask this question",children:Object(l.jsx)(Y.a,{disabled:y,edge:"end","aria-label":"delete",onClick:k,children:Object(l.jsx)(X.a,{})})})})]})},ae=function(){function e(){Object(ee.a)(this,e)}return Object(te.a)(e,null,[{key:"login",value:function(){var t=Object(B.a)(P.a.mark((function t(n){var r,a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl+"/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",{token:a.token,profile:a.user});case 10:t.prev=10,t.t0=t.catch(0),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(B.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl+"/register",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();ae.apiUrl="https://camp-hackathon-2021-backend.herokuapp.com/api/users";var ce=Object(m.a)((function(e){return{smallPadding:{padding:"10px 10px 10px 0"}}})),se=function(){var e=ce(),t=Object(N.g)(),n=Object(r.useContext)(d),a=n.setNewToken,c=n.setNewProfile,s=Object(r.useState)(""),o=Object(u.a)(s,2),i=o[0],j=o[1],h=Object(r.useState)(!1),p=Object(u.a)(h,2),m=p[0],b=p[1],x=F.b({email:F.c("Enter email").email("Enter a valid email").required("Email is required"),password:F.c("Enter your password").required("Password is required").min(8,"Password should be of minimum 8 characters length").max(20,"Password can't be longer than 20 characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")}),O=function(){var e=Object(B.a)(P.a.mark((function e(n,r){var s,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.setSubmitting,j(""),m||b((function(){return!0})),e.next=5,ae.login(n);case 5:(o=e.sent).error?(401===o.statusCode?j("Invalid credentials"):j("Something went wrong"),s(!1)):(c(o.profile),a(o.token),s(!1),t.push("/profile")),b((function(){return!1}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=Object(_.a)({initialValues:{email:"",password:""},validationSchema:x,onSubmit:O});return Object(l.jsx)("form",{className:"login",onSubmit:v.handleSubmit,children:Object(l.jsxs)(R.a,{children:[Object(l.jsx)(J,{errors:v.errors.email,id:"email",name:"email",value:v.values.email,onChange:v.handleChange}),Object(l.jsx)(H,{errors:v.errors.password,id:"password",name:"password",value:v.values.password,onChange:v.handleChange}),Object(l.jsx)("div",{id:"formError",children:i}),Object(l.jsxs)("div",{className:e.smallPadding,children:[Object(l.jsx)(f.a,{variant:"outlined",color:"primary",type:"submit",disabled:v.isSubmitting,children:"Login"}),m&&Object(l.jsx)(U.a,{size:24})]})]})})},oe=function(e){var t=e.id,n=e.name,r=e.errors,a=e.onChange;return Object(l.jsxs)(T.a,{fullWidth:!0,children:[Object(l.jsx)(Q.a,{htmlFor:t,children:"Name"}),Object(l.jsx)(z.a,{error:!!r,id:t,name:n,onChange:function(e){return a(e)},"aria-describedby":"email-input-field"}),Object(l.jsx)(G.a,{children:r||""})]})},ie=Object(m.a)((function(e){return{smallPadding:{padding:"10px 10px 10px 0"}}})),ue=function(e){var t=e.setAction,n=ie(),a=Object(r.useState)(""),c=Object(u.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(!1),d=Object(u.a)(i,2),j=d[0],h=d[1],p=F.b({email:F.c("Enter email").email("Enter a valid email").required("Email is required"),password:F.c("Enter your password").required("Password is required").min(8,"Password should be of minimum 8 characters length").max(20,"Password can't be longer than 20 characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),name:F.c("Enter your name").required("Name is required")}),m=function(){var e=Object(B.a)(P.a.mark((function e(n,r){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.setSubmitting,o(""),j||h((function(){return!0})),e.next=5,ae.register(n);case 5:(c=e.sent).error?(401===c.statusCode?o("Invalid credentials"):o("Something went wrong"),a(!1)):(a(!1),o("Account successfully created!"),setTimeout((function(){return t("login")}),2e3)),h((function(){return!1}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=Object(_.a)({initialValues:{email:"",password:""},validationSchema:p,onSubmit:m});return Object(l.jsx)("form",{className:"register",onSubmit:b.handleSubmit,children:Object(l.jsxs)(R.a,{children:[Object(l.jsx)(oe,{errors:b.errors.name,id:"name",name:"name",value:b.values.name,onChange:b.handleChange}),Object(l.jsx)(J,{errors:b.errors.email,id:"email",name:"email",value:b.values.email,onChange:b.handleChange}),Object(l.jsx)(H,{errors:b.errors.password,id:"password",name:"password",value:b.values.password,onChange:b.handleChange}),Object(l.jsx)("div",{id:"formError",children:s}),Object(l.jsxs)("div",{className:n.smallPadding,children:[Object(l.jsx)(f.a,{variant:"outlined",color:"primary",type:"submit",disabled:b.isSubmitting,children:"Register"}),j&&Object(l.jsx)(U.a,{size:24})]})]})})},le=n.p+"static/media/homeImg.05c2a606.jpg",de=Object(m.a)((function(e){return{loginDiv:{width:"80%",margin:"auto"},loginImg:{border:"6px solid #91C43B",borderRadius:"10%",marginTop:"25px"},action:{marginTop:"30px"},paddingBot:{marginTop:"80px",paddingBottom:"30px"},paddingBotBig:{marginTop:"40px",marginBottom:"60px"}}})),je=function(){var e=de(),t=Object(r.useState)("login"),n=Object(u.a)(t,2),a=n[0],c=n[1];Object(N.g)();return Object(l.jsxs)(A.a,{container:!0,spacing:5,alignItems:"center",style:{margin:0,width:"100%"},children:[Object(l.jsx)(A.a,{item:!0,md:6,xs:12,children:Object(l.jsxs)("div",{className:e.loginDiv,children:[Object(l.jsx)(O.a,{className:e.paddingBot,variant:"h3",children:"Engagement Tool"}),Object(l.jsxs)(O.a,{className:e.paddingBotBig,variant:"h5",children:["Build better engagement of your remote teams with ",Object(l.jsx)("b",{children:"Questio"}),"! Check out how simple it is."]}),"login"===a?Object(l.jsx)(se,{}):Object(l.jsx)(ue,{setAction:c}),Object(l.jsx)("div",{className:e.action,children:Object(l.jsx)(T.a,{children:Object(l.jsxs)(E.a,{value:a,onChange:function(e){c(e.target.value)},children:[Object(l.jsx)(q.a,{value:"login",children:"Log in"}),Object(l.jsx)(q.a,{value:"register",children:"Register"})]})})})]})}),Object(l.jsx)(A.a,{item:!0,md:6,xs:12,children:Object(l.jsxs)("div",{className:e.loginDiv,children:[Object(l.jsx)("img",{src:le,alt:"homeImage",width:"95%",className:e.loginImg}),Object(l.jsx)(O.a,{className:e.paddingBotBig,align:"center",variant:"h5",children:'"If a man knows not which port he sails, no wind is favorable" - Seneca'})]})})]})},he=n(151),pe=n(19),me=n(333),be=n(337),xe=function(){function e(){Object(ee.a)(this,e)}return Object(te.a)(e,null,[{key:"getAllCollections",value:function(){var t=Object(B.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl,{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCollectionById",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(r)}});case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,t.abrupt("return",{id:c._id,name:c.name,questions:c.questions});case 10:t.prev=10,t.t0=t.catch(0),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createCollection",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"updateCollectionName",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});case 3:return c=t.sent,t.next=6,c.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"addQuestionToCollection",value:function(){var t=Object(B.a)(P.a.mark((function t(n,r,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n,r,a),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({question:r})});case 4:return c=t.sent,t.next=7,c.json();case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(1),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();xe.apiUrl="https://camp-hackathon-2021-backend.herokuapp.com/api/collections";var Oe=n(145),fe=n.n(Oe),ve=Object(m.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ge=n(289),we=n(335),ye=n(286);function Ce(e){var t=e.children,n=e.open,r=e.toggleOpen,a=ve();return Object(l.jsx)(ge.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:n,onClose:r,closeAfterTransition:!0,BackdropComponent:we.a,BackdropProps:{timeout:500},children:Object(l.jsx)(ye.a,{in:n,children:Object(l.jsx)(he.a,{xs:12,children:t})})})}var ke=n(85),Se=n.n(ke),Ne=n(336),Ae=n(144),Te=n.n(Ae),Ee=Object(m.a)((function(){return{root:{display:"flex",flexWrap:"nowrap","& > *":{margin:"0px 7px"}},numberTextField:{maxWidth:"50px"},answer:{}}})),qe=function(e){var t=e.question,n=e.updateQuestion,r=Ee(),a=F.b({text:F.c().required("Question is required"),answer0:F.c().required("At lest one answer is required"),answer1:F.c(),answer2:F.c(),answer3:F.c(),correctAnswer:F.a().required("You need to pass index of correct answer").min(1,"Index can't be smaller than 1").max(4,"Index can't be bigger than 4"),timeForAnswer:F.a().min(15,"Time can't be shorter than 15 seconds").max(120,"Time can't be longer than 120 seconds")}),c=function(){var e=Object(B.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=Object(_.a)({initialValues:{_id:t._id,text:t.text,answer0:t.answers[0]||"",answer1:t.answers[1]||"",answer2:t.answers[2]||"",answer3:t.answers[3]||"",correctAnswer:t.correctAnswer?t.correctAnswer+1:1,timeForAnswer:t.timeForAnswer},validationSchema:a,onSubmit:c});return Object(l.jsx)(W.a,{children:Object(l.jsxs)("form",{className:r.root,onSubmit:s.handleSubmit,children:[Object(l.jsx)(Ne.a,{onChange:s.handleChange,name:"text",id:"question",label:"Question",value:s.values.text}),Object(l.jsx)(Ne.a,{onChange:s.handleChange,name:"timeForAnswer",id:"timeForAnswer",type:"number",label:"Time",className:r.numberTextField,value:s.values.timeForAnswer}),[0,1,2,3].map((function(e){return Object(l.jsx)(Ne.a,{id:"answer",label:"Answer: ".concat(e+1),name:"answer".concat(e),value:s.values["answer".concat(e)],className:r.answer,onChange:s.handleChange},e)})),Object(l.jsx)(Ne.a,{type:"number",onChange:s.handleChange,name:"correctAnswer",id:"correctAnswer",label:"Correct",className:r.numberTextField,value:s.values.correctAnswer}),Object(l.jsx)(Y.a,{color:"primary",edge:"end","aria-label":"edit",value:t._id,onClick:s.handleSubmit,children:Object(l.jsx)(Te.a,{})}),Object(l.jsx)("div",{id:"formError",children:s.errors[0]})]})},t._id)},Ie=function(e){var t=e.questionsArray,n=e.updateQuestion,r=e.addQuestion;return Object(l.jsx)(A.a,{item:!0,xs:12,children:Object(l.jsxs)(me.a,{children:[Object(l.jsx)(O.a,{variant:"h6",children:"Collection"}),t.length?t.map((function(e){return Object(l.jsx)(qe,{question:e,updateQuestion:n},e._id)})):"This collection is empty",Object(l.jsx)(Y.a,{onClick:r,children:Object(l.jsx)(Se.a,{})})]})})},Pe=function(){var e=Object(r.useContext)(d).token,t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),o=Object(u.a)(s,2),i=o[0],j=o[1],h=Object(r.useState)([]),p=Object(u.a)(h,2),m=p[0],b=p[1],x=Object(r.useState)(""),f=Object(u.a)(x,2),v=f[0],g=f[1],w=function(){i&&g(""),j((function(e){return!e}))};function y(){return(y=Object(B.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:(n=e.sent).error||c(n.reverse());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){var t=e.currentTarget.value,n=a.filter((function(e){return e._id===t}))[0];g(t),b(n.questions),w()}return Object(r.useEffect)((function(){!function(e){y.apply(this,arguments)}(xe.getAllCollections(e))}),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Ce,{toggleOpen:w,open:i,children:Object(l.jsx)(Ie,{updateQuestion:function(t){var n;(n=t._id,a.find((function(e){return e._id===v})).questions.find((function(e){return e._id===n}))).new?xe.addQuestionToCollection(v,function(e){var t=e.id,n=e.text,r=e.correctAnswer,a=e.timeForAnswer,c=e.answer0,s=e.answer1,o=e.answer2,i=e.answer3;return{_id:t,text:n,correctAnswer:--r,timeForAnswer:a,answers:[c,s,o,i]}}(t),e):console.log(t)},questionsArray:m,addQuestion:function(){var e=Object(pe.a)(a);e.find((function(e){return e._id===v})).questions.push({new:!0,_id:Date.now(),text:"",correctAnswer:0,timeForAnswer:60,answers:["","","",""]}),c(e)}})}),Object(l.jsxs)(me.a,{children:[Object(l.jsx)(O.a,{variant:"h6",children:"Collections of Questions"}),Object(l.jsx)(be.a,{}),a?a.map((function(e){return Object(l.jsxs)(W.a,{children:[Object(l.jsx)(V.a,{primary:e.name}),Object(l.jsx)(D.a,{children:Object(l.jsx)(Y.a,{color:"primary",edge:"end","aria-label":"edit",value:e._id,onClick:C,children:Object(l.jsx)(fe.a,{})})})]},e._id)})):Object(l.jsx)(U.a,{})]})]})},Be=n(332),Re=F.b({roomName:F.c("Enter room name").required("Name of room is required")}),Ue=Object(m.a)((function(){return{padding:{padding:"15px"}}})),Fe=function(e){var t=e.handleClosePopup,n=Ue(),a=Object(r.useContext)(d).token,c=Object(r.useState)([]),s=Object(u.a)(c,2),o=s[0],i=s[1],j=Object(r.useState)(""),h=Object(u.a)(j,2),p=h[0],m=h[1],b=function(){var e=Object(B.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(Object(l.jsx)(U.a,{})),e.next=3,ne.createRoom({name:t.roomName,questionsCollectionId:t.collectionsSelect},a);case 3:(n=e.sent).error?m(n.error):(m("Room successfully created!"),O.values.roomName="",O.values.collectionsSelect="");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function x(){return(x=Object(B.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:(n=e.sent).error?m("Something went wrong"):i(n.reverse());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=Object(_.a)({initialValues:{roomName:"",collectionsSelect:""},validationSchema:Re,onSubmit:b});return Object(r.useEffect)((function(){!function(e){x.apply(this,arguments)}(xe.getAllCollections(a))}),[a]),Object(l.jsx)("form",{noValidate:!0,autoComplete:"off",className:"createRoom",onSubmit:O.handleSubmit,children:Object(l.jsxs)(R.a,{className:n.padding,children:[Object(l.jsx)(Ne.a,{placeholder:"Room name",name:"roomName",id:"roomName",label:"Room name",value:O.values.roomName,onChange:O.handleChange,helperText:O.touched.email&&O.errors.email}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(Q.a,{children:"Collections"}),Object(l.jsxs)(E.a,{labelId:"collectionsSelect",id:"collectionsSelect",value:O.values.collectionsSelect,name:"collectionsSelect",onChange:O.handleChange,children:[Object(l.jsx)(q.a,{value:"None",children:Object(l.jsx)("em",{children:"None"})}),o.map((function(e){var t=e.name,n=e._id;return Object(l.jsx)(q.a,{value:n,children:t},n)}))]})]}),Object(l.jsx)(G.a,{error:!0,children:p}),"Room successfully created!"!==p?Object(l.jsx)(f.a,{type:"submit",children:"Submit"}):Object(l.jsx)(f.a,{onClick:t,children:"Back"})]})})},_e=function(e){var t=e.open,n=e.handleClosePopup,r=e.anchorEl;return Object(l.jsx)(Be.a,{open:t,anchorEl:r,onClose:n,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:Object(l.jsx)(Fe,{handleClosePopup:n})})},Qe=n(148),ze=n.n(Qe),Ge=n(147),Je=n.n(Ge),He=n(146),We=n.n(He),Le=Object(m.a)((function(){return{buttonModal:{display:"grid",justifyItems:"center",paddingTop:"20px"}}})),Me=function(){var e=Object(r.useContext)(d).token,t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!0),o=Object(u.a)(s,2),i=o[0],j=o[1],h=Object(r.useState)(null),p=Object(u.a)(h,2),m=p[0],b=p[1],x=Object(C.a)("(min-width:600px)"),v=Object(N.g)(),g=Le();Object(r.useEffect)((function(){(function(){var t=Object(B.a)(P.a.mark((function t(){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,ne.getRooms(e);case 3:(n=t.sent).error||c(n.reverse()),j(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(ne.getRooms(e))}),[e]);var w=Boolean(m),y=a.map((function(e){var t=new Date(e.createdAt).toLocaleString();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(W.a,{children:[Object(l.jsx)(V.a,{primary:e.name,secondary:t}),Object(l.jsxs)(D.a,{children:[Object(l.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(l.jsx)(Je.a,{}),onClick:function(){return t=e._id,void We()("http://localhost:3000".concat("/coders-camp-hackathon-2021-frontend","/guest/").concat(t));var t},children:x&&"Copy link"}),Object(l.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(l.jsx)(ze.a,{}),onClick:function(){return t=e._id,void v.push("/room/".concat(t));var t},children:x&&"Enter"})]})]},e._id)})}));return Object(l.jsxs)(me.a,{children:[Object(l.jsx)(O.a,{variant:"h6",children:"Rooms"}),Object(l.jsx)(be.a,{}),i?Object(l.jsx)(U.a,{}):y,Object(l.jsx)("div",{className:g.buttonModal,children:Object(l.jsx)(f.a,{variant:"contained",color:"secondary",startIcon:Object(l.jsx)(Se.a,{}),onClick:function(e){b(e.currentTarget)},children:"Add a new room"})}),Object(l.jsx)(_e,{anchorEl:m,handleClosePopup:function(){b(null)},open:w})]})},Ve=Object(m.a)((function(e){return{padding:{padding:"15px"}}})),De=function(){var e=Ve();return Object(l.jsxs)(A.a,{container:!0,className:e.padding,spacing:5,children:[Object(l.jsx)(A.a,{className:e.padding,item:!0,xs:12,md:6,children:Object(l.jsx)(he.a,{className:e.padding,children:Object(l.jsx)(Me,{})})}),Object(l.jsx)(A.a,{className:e.padding,item:!0,xs:12,md:6,children:Object(l.jsx)(he.a,{className:e.padding,children:Object(l.jsx)(Pe,{})})})]})},Ye=F.b({email:F.c("Enter your e-mail").required("E-mail is required"),name:F.c("Enter your name").required("Name is required")}),Ze=function(e){var t=e.id,n=e.setGuestEmail,a=e.setGuestName,c=Object(r.useState)(""),s=Object(u.a)(c,2),o=s[0],i=s[1],d=function(){var e=Object(B.a)(P.a.mark((function e(r){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(Object(l.jsx)(U.a,{})),e.next=3,ne.updateGuests(t,{email:r.email,name:r.name});case 3:(c=e.sent).error?i(c.error):(i("You successfully entered the room!"),n(r.email),a(r.name),j.values.email="",j.values.name="");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=Object(_.a)({initialValues:{email:"",name:""},validationSchema:Ye,onSubmit:d});return Object(l.jsx)("form",{noValidate:!0,autoComplete:"off",className:"createRoom",onSubmit:j.handleSubmit,children:Object(l.jsxs)(R.a,{children:[Object(l.jsx)(Ne.a,{placeholder:"Your e-mail",name:"email",id:"email",label:"Your e-mail",value:j.values.email,onChange:j.handleChange,helperText:j.touched.email&&j.errors.email}),Object(l.jsx)(Ne.a,{placeholder:"Your name",name:"name",id:"name",label:"Your name",value:j.values.name,onChange:j.handleChange,helperText:j.touched.email&&j.errors.email}),Object(l.jsx)(G.a,{error:!0,children:o}),Object(l.jsx)(f.a,{type:"submit",children:"Submit"})]})})},$e=function(){var e=Object(N.h)().id,t=Object(r.useState)(null),n=Object(u.a)(t,2),a=(n[0],n[1],Object(r.useState)("")),c=Object(u.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(""),d=Object(u.a)(i,2),j=d[0],h=d[1];return Object(r.useEffect)((function(){})),Object(l.jsx)("div",{children:s||j?Object(l.jsxs)(he.a,{children:[Object(l.jsxs)(O.a,{variant:"h5",children:["Welcome ",s]}),Object(l.jsx)(O.a,{variant:"body1",children:"Please wait for questions"})]}):Object(l.jsx)(Ze,{roomId:e,setGuestEmail:h,setGuestName:o})})},Ke=function(e){var t=e.path,n=e.exact,a=void 0!==n&&n,c=e.component;return Object(r.useContext)(d).token?Object(l.jsx)(N.b,{path:t,exact:a,component:c}):Object(l.jsx)(N.a,{to:"/"})},Xe=n(338),et=Object(m.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)},smallPadding:{padding:"10px"}}})),tt=function(){var e=Object(N.h)().id,t=et(),n=Object(r.useContext)(d).token,a=Object(r.useState)({}),c=Object(u.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)({}),j=Object(u.a)(i,2),h=j[0],p=j[1],m=Object(r.useState)([]),b=Object(u.a)(m,2),x=b[0],v=b[1];Object(r.useEffect)((function(){var t=setInterval(Object(B.a)(P.a.mark((function r(){var a;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("refresh guests with: "+e),r.next=3,ne.getRoomById(e,n);case 3:return a=r.sent,v(a.guests),r.abrupt("return",(function(){console.log("Clear interval: "+t+" , "+e),clearInterval(t)}));case 6:case"end":return r.stop()}}),r)}))),2e3);return function(){clearInterval(t)}}),[e,n]),Object(r.useEffect)((function(){(function(){var t=Object(B.a)(P.a.mark((function t(){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.getRoomById(e,n);case 2:return r=t.sent,o(r),p(r.questionsCollectionId),v(r.guests),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,n]);return Object(l.jsxs)(Xe.a,{maxWidth:"lg",className:t.smallPadding,children:[Object(l.jsxs)(A.a,{container:!0,spacing:2,children:[Object(l.jsx)(A.a,{item:!0,xs:8,children:Object(l.jsxs)(O.a,{variant:"h4",className:t.smallPadding,children:["Room ",s.name]})}),Object(l.jsx)(A.a,{item:!0,xs:4,children:Object(l.jsx)(f.a,{style:{marginTop:"10px",marginLeft:"33%"},variant:"outlined",color:"primary",onClick:function(){ne.closeRoom(e,n)},children:"Close room"})})]}),Object(l.jsxs)(A.a,{container:!0,spacing:2,children:[Object(l.jsx)(A.a,{item:!0,xs:8,children:Object(l.jsxs)(he.a,{children:[Object(l.jsxs)(O.a,{variant:"h6",className:t.smallPadding,children:["Questions of ",h.name]}),Object(l.jsx)(be.a,{}),Object(l.jsx)("div",{className:t.demo,children:Object(l.jsx)(me.a,{children:h.questions&&0!==h.questions.length?h.questions.map((function(t){return Object(l.jsx)(re,{question:t,roomId:e},t._id)})):Object(l.jsx)(W.a,{children:" There are no questions "})})})]})}),Object(l.jsx)(A.a,{item:!0,xs:4,children:Object(l.jsxs)(he.a,{children:[Object(l.jsx)(O.a,{variant:"h6",className:t.smallPadding,children:"Attendants"}),Object(l.jsx)(be.a,{}),Object(l.jsx)("div",{className:t.demo,children:Object(l.jsx)(me.a,{children:x&&0!==x.length?x.map((function(e){return Object(l.jsx)(W.a,{children:Object(l.jsx)(V.a,{secondary:e.email,children:Object(l.jsx)(O.a,{variant:"h6",children:e.name})})},e.email)})):Object(l.jsx)(W.a,{children:" There are no guests"})})})]})})]})]})},nt=Object(m.a)((function(e){return{rootMain:{flexGrow:1}}})),rt=function(){var e=Object(r.useContext)(d).token,t=nt();return Object(l.jsx)("main",{className:t.rootMain,children:Object(l.jsxs)(N.d,{children:[Object(l.jsx)(N.b,{exact:!0,path:"/",render:function(){return e?Object(l.jsx)(De,{}):Object(l.jsx)(je,{})}}),Object(l.jsx)(N.b,{exact:!0,path:"/guest/:id",render:function(){return e?Object(l.jsx)(De,{}):Object(l.jsx)($e,{})}}),Object(l.jsx)(Ke,{exact:!0,path:"/profile",component:De}),Object(l.jsx)(Ke,{path:"/room/:id",component:tt})]})})},at=Object(m.a)((function(e){return{rootApp:{minHeight:"100vh",width:"100vw",display:"flex",flexDirection:"column"}}})),ct=function(){var e=at();return Object(l.jsx)(j,{children:Object(l.jsx)(o.a,{theme:p,children:Object(l.jsx)(i.a,{basename:"coders-camp-hackathon-2021-frontend",children:Object(l.jsxs)("div",{className:e.rootApp,children:[Object(l.jsx)(S,{}),Object(l.jsx)(rt,{})]})})})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ct,{})}),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.10221fbd.chunk.js.map