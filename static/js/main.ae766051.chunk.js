(this["webpackJsonpfreedom-board-app"]=this["webpackJsonpfreedom-board-app"]||[]).push([[0],{182:function(e,t,a){e.exports=a(311)},311:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(187),a(33)),u=a(25),i=a(154),m=a(107),d=a(155),h=a.n(d),s=a(320),E=a(329),b=a(23),p=a(325),y=a(319),f=a(326),v=a(327),O=a(321),g=a(328),S=function(e){return{type:"SAVE_USERNAME",payload:e}},j=Object(o.b)((function(e){return{lastMotherID:e.ALL_THREADS.length,username:e.SAVED_USERNAME}}),{postThread:function(e,t,a,n){return{type:"NEW_MOTHER",payload:{id:e,title:t,body:a,author:n,child:[]}}},saveUsername:S})((function(e){var t=r.a.useState(""),a=Object(b.a)(t,2),n=a[0],l=a[1],c=r.a.useState("Anonymous"),o=Object(b.a)(c,2),u=o[0],i=o[1],m=r.a.useState(""),d=Object(b.a)(m,2),h=d[0],s=d[1],E=r.a.useState(!1),S=Object(b.a)(E,2),j=S[0],w=S[1],A=r.a.useState(!e.username),R=Object(b.a)(A,2),T=R[0],N=R[1],C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"author",className:"ui header"},"Author"),r.a.createElement("input",{type:"text",placeholder:"Anonymous",value:u,onChange:function(e){return i(e.target.value)},id:"author"}))};return j&&window.setTimeout((function(){return w(!1)}),4e3),r.a.createElement(v.a,null,r.a.createElement(O.a,{success:!0},r.a.createElement(g.a,{dividing:!0,textAlign:"center"},"New Thread"),r.a.createElement("br",null),j?r.a.createElement(p.a,{success:!0,header:"New Thread Pinned!",content:"NOTE: Your username entered will be permanent for this browser."}):"",r.a.createElement(O.a.Field,null,r.a.createElement("label",{htmlFor:"title",className:"ui header"},"Title"),r.a.createElement("input",{type:"text",placeholder:"Title",id:"title",onChange:function(e){return l(e.target.value)},value:n}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"body",className:"ui header"},"Body"),r.a.createElement("textarea",{id:"body",placeholder:"Body of your thread here",onChange:function(e){return s(e.target.value)},value:h}),r.a.createElement("br",null),r.a.createElement("br",null),e.username?T?C():function(){var t=[{key:"anon",value:"Anonymous",text:"Anonymous"},{key:"saved",value:e.username,text:e.username}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"author",className:"ui header"},"Author"),r.a.createElement(y.a,{options:t,placeholder:"Select your username",onSelect:function(e){return i(e.target.value)},id:"author"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{secondary:!0,size:"tiny",floated:"right",onClick:function(){return N(!0)}},"Change Default Username"))}():C(),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(f.a,{primary:!0,onClick:function(){e.postThread(e.lastMotherID,n,h,u),null!==e.username&&!0!==T||e.saveUsername(u),l(""),s(""),i(""),w(!0)}},"Pin")))})),w=a(324),A=a(49),R=function(){return r.a.createElement(v.a,null,r.a.createElement(w.a,{fluid:!0,centered:!0,header:"John Patrick Valera",meta:"React Developer",description:"John Patrick is a react developer living in Philippines who enjoys listening to Lorde and hanging with his 3 dogs."}),r.a.createElement("a",{href:"https://github.com/withoutwax13"},r.a.createElement(A.a,{name:"github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/john-patrick-valera-6a1493196/"},r.a.createElement(A.a,{name:"linkedin"})))},T=a(323),N=a(108),C=Object(o.b)((function(e){return{mothers:e.ALL_THREADS,username:e.SAVED_USERNAME}}),{postComment:function(e,t,a,n){return{type:"NEW_CHILD",payload:{newChild:{id:t,body:a,author:n,child:[]},HISTORY:e}}},saveUsername:S})((function(e){var t=r.a.useState("Your Comment Here"),a=Object(b.a)(t,2),n=a[0],l=a[1],c=r.a.useState("Anonymous"),o=Object(b.a)(c,2),u=o[0],i=o[1],m=r.a.useState(!1),d=Object(b.a)(m,2),h=d[0],s=d[1],E=r.a.useState(!e.username),p=Object(b.a)(E,2),v=p[0],g=p[1],S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"author",className:"ui header"},"Author"),r.a.createElement("input",{type:"text",placeholder:"Anonymous",value:u,onChange:function(e){return i(e.target.value)},id:"author"}))},j=function(){return e.username?v?S():function(){var t=[{key:"anon",value:"Anonymous",text:"Anonymous"},{key:"saved",value:e.username,text:e.username}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"author",className:"ui header"},"Author"),r.a.createElement(y.a,{options:t,placeholder:"Select your username",onSelect:function(e){return i(e.target.value)},id:"author"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{secondary:!0,size:"tiny",floated:"right",onClick:function(){return g(!0)}},"Change Default Username"))}():S()};return h?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(O.a,{size:"small"},r.a.createElement(O.a.Field,null,j(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"body"},"Body"),r.a.createElement("textarea",{id:"body",rows:"2",placeholder:"Your comment here",onChange:function(e){return l(e.target.value)},value:n})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"ui right floated tiny primary button",onClick:function(){var t=function(){var t=e.mothers[e.history[0]];if(e.history.length>1){for(var a=1;a<e.history.length;a++)t=t.child[e.history[a]];return t.child.length}return t.child.length}();e.postComment(e.history,t,n,u),null!==e.username&&!0!==v||e.saveUsername(u),s(!1)}},"Pin Reply"),r.a.createElement("div",{className:"ui right floated tiny button",onClick:function(){return s(!1)}},"Hide Reply Form")),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement("div",null,r.a.createElement("div",{className:"ui right floated tiny primary button",onClick:function(){return s(!0)}},"Reply"),r.a.createElement("br",null),r.a.createElement("br",null))})),H=function e(t){var a=t.childData,n=t.linkHistory;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null,r.a.createElement("div",{className:"avatar"},r.a.createElement(A.a,{name:"user"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"author"},a.author),r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"text"},a.body)))),r.a.createElement("div",{className:"comment form"},function(){if(n.length<=3)return r.a.createElement(C,{history:[].concat(Object(N.a)(n),[a.id])})}()),r.a.createElement("div",null,function(){if(a.child.length>0)return r.a.createElement(T.a.Group,null,a.child.map((function(t){var l=[].concat(Object(N.a)(n),[a.id]);return r.a.createElement(T.a,null,r.a.createElement(e,{key:t.id,childData:t,linkHistory:l}))})))}()))},k=Object(o.b)((function(e){return{mothers:e.ALL_THREADS}}))((function(e){var t=e.mothers;return r.a.createElement("div",{className:"motherthreads"},r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=[e.id];return r.a.createElement(v.a,{key:e.id},r.a.createElement(g.a,{dividing:!0,as:"h2"},e.title),r.a.createElement(g.a,{as:"h5"},"by: ",r.a.createElement("span",{style:{color:"blue"}},e.author)),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,r.a.createElement(A.a,{name:"quote left"})," ",e.body," ",r.a.createElement(A.a,{name:"quote right"}))),r.a.createElement("div",null,r.a.createElement(C,{history:t})),r.a.createElement(T.a.Group,null,function(e,t){if(e.child.length>0)return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{dividing:!0},"Comments"),e.child.map((function(e){return r.a.createElement(H,{key:e.id,childData:e,linkHistory:t})})))}(e,t)))}))))})),x=function(){return r.a.createElement(s.a,{style:{marginTop:"10px"}},r.a.createElement(E.a,{columns:2},r.a.createElement(E.a.Column,{width:8},r.a.createElement(k,null)),r.a.createElement(E.a.Column,{width:7},r.a.createElement(E.a.Row,null,r.a.createElement(j,null)),r.a.createElement(E.a.Row,{style:{marginTop:"20px"}},r.a.createElement(R,null)))))},I=a(15),D=Object(u.b)({ALL_THREADS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:0,title:"This is a React App",body:"This app was built using React and Redux.",author:"withoutwax13",child:[{id:0,body:"The UI is minimal.",author:"withoutwax13",child:[]},{id:1,body:"The developer used some basic semantic-ui",author:"withoutwax13",child:[{id:0,body:"Cool!",author:"testAuthor",child:[{id:0,body:"Thank you!",author:"withoutwax13",child:[{id:0,body:"You're awesome!",author:"testAuthor",child:[]}]}]}]}]},{id:1,title:"Limitation of this App",body:"Data does not persist on this app",author:"testAuthor",child:[]},{id:2,title:"Portfolio Project",body:"Its simple yet so cool, right?",author:"anonymous",child:[]}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_MOTHER":return e.concat([t.payload]);case"ON_DEVELOPMENT_RECURSION_SOLUTION_FOR_NEW_CHILD":return null;case"NEW_CHILD":switch(t.payload.HISTORY.length){case 1:return e.map((function(e){return e.id===t.payload.HISTORY[0]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.concat([t.payload.newChild])}):e}));case 2:return e.map((function(e){return e.id===t.payload.HISTORY[0]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.map((function(e){return e.id===t.payload.HISTORY[1]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.concat([t.payload.newChild])}):e}))}):e}));case 3:return e.map((function(e){return e.id===t.payload.HISTORY[0]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.map((function(e){return e.id===t.payload.HISTORY[1]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.map((function(e){return e.id===t.payload.HISTORY[2]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.concat([t.payload.newChild])}):e}))}):e}))}):e}));case 4:return e.map((function(e){return e.id===t.payload.HISTORY[0]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.map((function(e){return e.id===t.payload.HISTORY[1]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.map((function(e){return e.id===t.payload.HISTORY[2]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.map((function(e){return e.id===t.payload.HISTORY[3]?Object(I.a)(Object(I.a)({},e),{},{child:e.child.concat([t.payload.newChild])}):e}))}):e}))}):e}))}):e}));default:return null}default:return e}},SAVED_USERNAME:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SAVE_USERNAME"===t.type?t.payload:e}}),_={key:"root",storage:h.a},F=Object(m.a)(_,D),Y=Object(u.c)(F),L=Object(m.b)(Y);c.a.render(r.a.createElement(o.a,{store:Y},r.a.createElement(i.a,{loading:null,persistor:L},r.a.createElement(x,null))),document.querySelector("#root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.ae766051.chunk.js.map