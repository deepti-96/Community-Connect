(this["webpackJsonpcommunity-connect"]=this["webpackJsonpcommunity-connect"]||[]).push([[0],{76:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var s=c(6),n=c.n(s),a=c(30),r=c.n(a),i=(c(76),c(24)),o=(c(82),c(43)),l=Object(o.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),j=l.actions,d=j.login,u=j.logout,b=function(e){return e.user},p=l.reducer,h=c(13),O=(c(83),c(56)),m=c.n(O),x=c(57),f=c.n(x),v=c(58),g=c.n(v),_=c(59),N=c.n(_),y=c(60),w=c.n(y),I=(c(84),c(7)),C=function(e){var t=e.Icon,c=e.title,s=e.color;return Object(I.jsxs)("div",{className:"inputOption",children:[Object(I.jsx)(t,{style:{color:s}}),Object(I.jsx)("h4",{children:c})]})},k=c(118),S=c(52),U=c.n(S),E=c(54),B=c.n(E),P=c(53),R=c.n(P),W=c(55),A=c.n(W),M=(c(86),Object(s.forwardRef)((function(e,t){var c=e.name,s=e.description,n=e.message,a=e.photoUrl;return Object(I.jsxs)("div",{ref:t,className:"post",children:[Object(I.jsxs)("div",{className:"post__header",children:[Object(I.jsx)(k.a,{src:a,children:c[0].toUpperCase()}),Object(I.jsxs)("div",{className:"post__info",children:[Object(I.jsx)("h2",{children:c}),Object(I.jsx)("p",{children:s})]})]}),Object(I.jsx)("div",{className:"post__body",children:Object(I.jsx)("p",{children:n})}),Object(I.jsxs)("div",{className:"post__buttons",children:[Object(I.jsx)(C,{Icon:U.a,title:"Like",color:"gray"}),Object(I.jsx)(C,{Icon:R.a,title:"Comment",color:"gray"}),Object(I.jsx)(C,{Icon:B.a,title:"Share",color:"gray"}),Object(I.jsx)(C,{Icon:A.a,title:"Send",color:"gray"})]})]})}))),D=c(37),F=(c(89),c(100),c(99),D.a.initializeApp({apiKey:"AIzaSyC-DIG_h-k1F0_7dMsS364I309H_fC4-XI",authDomain:"community-connect-5c95a.firebaseapp.com",projectId:"community-connect-5c95a",storageBucket:"community-connect-5c95a.appspot.com",messagingSenderId:"447353574357",appId:"1:447353574357:web:929cc15350e8c7ccd8a35c"}).firestore()),L=D.a.auth(),J=c(61),T=function(){var e=Object(i.c)(b).user,t=Object(s.useState)(""),c=Object(h.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)([]),o=Object(h.a)(r,2),l=o[0],j=o[1];Object(s.useEffect)((function(){F.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(I.jsxs)("div",{className:"feed",children:[Object(I.jsxs)("div",{className:"feed__inputContainer",children:[Object(I.jsxs)("div",{className:"feed__input",children:[Object(I.jsx)(m.a,{}),Object(I.jsxs)("form",{children:[Object(I.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)}}),Object(I.jsx)("button",{onClick:function(t){t.preventDefault(),F.collection("posts").add({name:e.displayName,description:e.email,message:n,photoUrl:e.photoUrl||"",timestamp:D.a.firestore.FieldValue.serverTimestamp()}),a("")},type:"submit",children:"Send"})]})]}),Object(I.jsxs)("div",{className:"feed__inputOptions",children:[Object(I.jsx)(C,{title:"Photo",Icon:f.a,color:"#70B5F9"}),Object(I.jsx)(C,{title:"Video",Icon:g.a,color:"#E7A33E"}),Object(I.jsx)(C,{title:"Event",Icon:N.a,color:"#C0CBCD"}),Object(I.jsx)(C,{title:"Write article",Icon:w.a,color:"#7FC15E"})]})]}),Object(I.jsx)(J.a,{children:l.map((function(e){var t=e.id,c=e.data,s=c.name,n=c.description,a=c.message,r=c.photoUrl;return Object(I.jsx)(M,{name:s,description:n,message:a,photoUrl:r},t)}))})]})},z=c(0),K=c.n(z),V=c(2),H=(c(92),c(62)),$=c.n(H),q=c(63),G=c.n(q),X=c(64),Q=c.n(X),Y=c(65),Z=c.n(Y),ee=c(66),te=c.n(ee),ce=c(67),se=c.n(ce),ne=(c(93),function(e){var t=e.avatar,c=e.Icon,s=e.title,n=e.onClick,a=Object(i.c)(b).user;return Object(I.jsxs)("div",{className:"headerOption",onClick:n,children:[c&&Object(I.jsx)(c,{className:"headerOption__icon"}),t&&Object(I.jsx)(k.a,{className:"headerOption__icon",src:null===a||void 0===a?void 0:a.photoUrl,style:{fontSize:"10px"},children:null===a||void 0===a?void 0:a.email[0].toUpperCase()}),Object(I.jsx)("h3",{className:"headerOption__title",children:s})]})}),ae=function(){var e=Object(i.b)(),t=function(){var t=Object(V.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.signOut();case 2:e(u());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"header",children:[Object(I.jsxs)("div",{className:"header__left",children:[Object(I.jsx)("img",{src:"/Images/logo.png",alt:""}),Object(I.jsxs)("div",{className:"header__search",children:[Object(I.jsx)($.a,{}),Object(I.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(I.jsxs)("div",{className:"header__right",children:[Object(I.jsx)(ne,{Icon:G.a,title:"Home"}),Object(I.jsx)(ne,{Icon:Q.a,title:"My Network"}),Object(I.jsx)(ne,{Icon:Z.a,title:"Jobs"}),Object(I.jsx)(ne,{Icon:te.a,title:"Messaging"}),Object(I.jsx)(ne,{Icon:se.a,title:"Notifications"}),Object(I.jsx)(ne,{title:"Me",onClick:t,avatar:!0})]})]})},re=(c(94),function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(h.a)(a,2),o=r[0],l=r[1],j=Object(s.useState)(""),u=Object(h.a)(j,2),b=u[0],p=u[1],O=Object(s.useState)(""),m=Object(h.a)(O,2),x=m[0],f=m[1],v=Object(i.b)(),g=function(){var e=Object(V.a)(K.a.mark((function e(t){var s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L.signInWithEmailAndPassword(c,o);case 4:s=e.sent,v(d({email:s.user.email,uid:s.user.uid,displayName:s.user.displayName,photoUrl:s.user.photoURL})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(V.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return",alert("Please enter a full name!"));case 2:return e.prev=2,e.next=5,L.createUserWithEmailAndPassword(c,o);case 5:return t=e.sent,e.next=8,t.user.updateProfile({displayName:b,photoUrl:x});case 8:v(d({email:t.user.email,uid:t.user.uid,displayName:b,photoUrl:x})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"login",children:[Object(I.jsx)("img",{src:"/Images/full_logo.png",alt:""}),Object(I.jsxs)("form",{children:[Object(I.jsx)("input",{placeholder:"Full name (required for register)",type:"text",value:b,onChange:function(e){return p(e.target.value)}}),Object(I.jsx)("input",{placeholder:"Profile pic URL (optional)",type:"text",value:x,onChange:function(e){return f(e.target.value)}}),Object(I.jsx)("input",{placeholder:"Email",type:"email",value:c,onChange:function(e){return n(e.target.value)}}),Object(I.jsx)("input",{placeholder:"Password",type:"password",value:o,onChange:function(e){return l(e.target.value)}}),Object(I.jsx)("button",{type:"submit",onClick:g,children:"Sign In"})]}),Object(I.jsxs)("p",{children:["Not a member?"," ",Object(I.jsx)("span",{className:"login__register",onClick:_,children:"Register Now"})]})]})}),ie=(c(95),function(){var e=Object(i.c)(b).user,t=function(e){return Object(I.jsxs)("div",{className:"sidebar__recentItem",children:[Object(I.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(I.jsx)("p",{children:e})]})};return Object(I.jsxs)("div",{className:"sidebar",children:[Object(I.jsxs)("div",{className:"sidebar__top",children:[Object(I.jsx)("img",{src:"/Images/bg.png",alt:""}),Object(I.jsx)(k.a,{src:e.photoUrl,className:"sidebar__avatar",children:e.email[0].toUpperCase()}),Object(I.jsx)("h2",{children:e.displayName}),Object(I.jsx)("h4",{children:e.email})]}),Object(I.jsxs)("div",{className:"sidebar__stats",children:[Object(I.jsxs)("div",{className:"sidebar__stat",children:[Object(I.jsx)("p",{children:"Who viewed you"}),Object(I.jsx)("p",{className:"sidebar__statNumber",children:"2,300"})]}),Object(I.jsxs)("div",{className:"sidebar__stat",children:[Object(I.jsx)("p",{children:"Views on post"}),Object(I.jsx)("p",{className:"sidebar__statNumber",children:"2,570"})]})]}),Object(I.jsxs)("div",{className:"sidebar__bottom",children:[Object(I.jsx)("p",{children:"Recent"}),t("reactjs"),t("programming"),t("softwareengineering"),t("design"),t("developer")]})]})}),oe=(c(96),c(69)),le=c.n(oe),je=c(68),de=c.n(je),ue=function(){var e=function(e,t){return Object(I.jsxs)("div",{className:"widgets__article",children:[Object(I.jsx)("div",{className:"widgets__articleLeft",children:Object(I.jsx)(de.a,{})}),Object(I.jsxs)("div",{className:"widgets__articleRight",children:[Object(I.jsx)("h4",{children:e}),Object(I.jsx)("p",{children:t})]})]})};return Object(I.jsxs)("div",{className:"widgets",children:[Object(I.jsxs)("div",{className:"widgets__header",children:[Object(I.jsx)("h2",{children:"World News"}),Object(I.jsx)(le.a,{})]}),e("Odisha govt plans development of colleges?","Top news - 9099 reader"),e("Coronavirus: UK updates","Top news - 886 reader"),e("Bitcoin Breaks $22K","Crypto - 8000 reader"),e("JavaScript Mastery","Code - 120000 reader"),e("Tesla hits new highs","Cars & auto - 300 reader")]})};var be=function(){var e=Object(i.c)(b).user,t=Object(i.b)();return Object(s.useEffect)((function(){L.onAuthStateChanged((function(e){t(e?d({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):u())}))}),[]),Object(I.jsxs)("div",{className:"app",children:[Object(I.jsx)(ae,{}),e?Object(I.jsxs)("div",{className:"app__body",children:[Object(I.jsx)(ie,{}),Object(I.jsx)(T,{}),Object(I.jsx)(ue,{})]}):Object(I.jsx)(re,{})]})},pe=Object(o.a)({reducer:{user:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(i.a,{store:pe,children:Object(I.jsx)(be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[98,1,2]]]);
//# sourceMappingURL=main.a2302da1.chunk.js.map