(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{35:function(e,t,a){},50:function(e,t,a){e.exports=a(65)},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(55),a(21)),i=a.n(o),s=a(28),u=a(5),m=a(97),p=a(87),d=a(96),f=a(82),E=(a(35),function(e){var t=e.onMenuClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"primary-bg hide-on-md",style:{flex:1,minWidth:150}},r.a.createElement(d.a,{onClick:t,color:"primary","aria-label":"menu",component:"span"},r.a.createElement(f.a,null)),r.a.createElement("span",{className:"logo"})),r.a.createElement("div",{style:{display:"unset"}},r.a.createElement(d.a,{onClick:t,className:"show-on-md",color:"primary","aria-label":"menu",component:"span"},r.a.createElement(f.a,null)),r.a.createElement("span",{className:"logo show-on-md",style:{width:30,backgroundSize:85,backgroundPositionY:2}})))}),b=a(83),h=a(84),y=a(85),v=function(){return r.a.createElement("div",{className:"primary-bg hide-on-md",style:{flex:1,minWidth:200}},r.a.createElement(d.a,{color:"primary","aria-label":"video",component:"span"},r.a.createElement(b.a,null)),r.a.createElement(d.a,{color:"primary","aria-label":"apps",component:"span"},r.a.createElement(h.a,null)),r.a.createElement(d.a,{color:"primary","aria-label":"notification",component:"span"},r.a.createElement(y.a,null)),r.a.createElement(d.a,{color:"primary","aria-label":"notification",component:"span"},r.a.createElement("img",{style:{width:"30px",borderRadius:"50%"},src:"/youtube/avatar.png",alt:"avatar"})))},g=a(86),x="https://common-apis.herokuapp.com/youtube-clone/",j=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=e.current;return e.current&&(e.current.addEventListener("mouseenter",(function(){return c(!0)})),e.current.addEventListener("mouseleave",(function(){return c(!1)}))),function(){t.removeEventListener("mouseleave",null,!0)}}),[e]),[r]},O=function(e){var t=e.name,a=e.onClick,c=Object(n.useRef)(),l=j(c),o=Object(u.a)(l,1)[0];return r.a.createElement("div",{ref:c,style:{padding:10,backgroundColor:o?"#323232":"#212121",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("span",{className:"item-text"},t))},w=function(e){var t=e.onSearch,a=Object(n.useState)(),c=Object(u.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),f=d[0],E=d[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),y=h[0],v=h[1],j=Object(n.useState)([]),w=Object(u.a)(j,2),k=w[0],S=w[1],N=Object(n.useState)(!1),C=Object(u.a)(N,2),z=C[0],T=C[1],W=Object(n.useRef)(),I=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),T(!0),e.next=4,fetch("".concat(x,"/suggestions?search=").concat(y));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,S(n.result),E(!0),T(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){v(e),t(e),E(!1)},L=W.current?W.current.getBoundingClientRect():{},M=L.left,H=L.top,B=L.width;return r.a.createElement("div",{style:{flex:5}},r.a.createElement("div",{className:"primary-bg search-box"},r.a.createElement("input",{ref:W,onChange:function(e){clearTimeout(l);var t=e.target.value;v(t),o(setTimeout((function(){t&&I(t)}),500))},value:y,className:"search-input",type:"text",placeholder:"Search",list:"suggestions",onFocus:function(){return E(!0)},onKeyPress:function(e){switch(e.which){case 13:t(y),E(!1)}}}),r.a.createElement("span",{className:"search-btn"},z?r.a.createElement(p.a,{size:21,style:{fontSize:20,marginTop:5}}):r.a.createElement(g.a,{color:"secondary",style:{fontSize:20,marginTop:6}}))),f&&r.a.createElement("div",{style:{position:"absolute",maxHeight:400,width:B,left:M,top:H+40,textAlign:"left",overflow:"auto",backgroundColor:"#212121",cursor:"pointer",zIndex:999}},k.map((function(e){return r.a.createElement(O,{key:e,name:e,onClick:R})}))))},k=function(e){var t=e.onMenuClick,a=e.onSearch,n=e.suggestions;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.a.createElement(E,{onMenuClick:t}),r.a.createElement(w,{onSearch:a,suggestions:n}),r.a.createElement(v,null))},S=a(88),N=a(89),C=a(90),z=a(91),T=a(92),W=a(93),I=function(e){var t=e.icon,a=e.name,c=e.selected,l=Object(n.useRef)(),o=j(l),i=Object(u.a)(o,1)[0];return r.a.createElement("div",{ref:l,style:{padding:10,backgroundColor:c||i?"#323232":"#212121",cursor:"pointer"}},t,r.a.createElement("span",{className:"item-text"},a))},R=function(e){var t=e.list;return r.a.createElement("div",{style:{padding:"10px 0"}},t.map((function(e){return r.a.createElement(I,Object.assign({key:e.name},e))})))},L=(a(60),[{name:"Home",icon:r.a.createElement(S.a,{className:"item"}),selected:!0},{name:"Trending",icon:r.a.createElement(N.a,{className:"item"})},{name:"Subscriptions",icon:r.a.createElement(C.a,{className:"item"})}]),M=[{name:"Library",icon:r.a.createElement(z.a,{className:"item"})},{name:"History",icon:r.a.createElement(T.a,{className:"item"})},{name:"Your Videos",icon:r.a.createElement(C.a,{className:"item"})},{name:"Watch Later",icon:r.a.createElement(W.a,{className:"item"})}],H=function(e){return"normal"===e.type?r.a.createElement("div",{style:{width:250}},r.a.createElement(R,{list:L}),r.a.createElement("div",{style:{borderBottom:"1px solid #383838"}}),r.a.createElement(R,{list:M})):null},B=a(4),F=(a(61),function(e){var t=e.thumbnail,a=e.description,n=e.views,c=e.title,l=e.publishedOn,o=e.owner,i=e.time,s=e.videoId,u=Object(B.f)();return r.a.createElement("div",{className:"video",style:{color:"#aaa"}},r.a.createElement("img",{width:"100%",src:t.url,alt:"video",style:{cursor:"pointer"},onClick:function(){return u.push("/youtube/play?videoId=".concat(s))}}),r.a.createElement("div",{style:{position:"relative",top:"-44px",display:"inline-block",padding:"4px 6px",borderRadius:"3px",background:"black",color:"white",float:"right",margin:"10px",fontSize:12}},r.a.createElement("b",null,i)),c&&r.a.createElement("div",{key:"title",style:{color:"white",marginTop:10}},c.runs.map((function(e){return r.a.createElement("span",{key:e.text},e.text)}))),r.a.createElement("div",{style:{fontSize:14}},r.a.createElement("b",null,o),r.a.createElement("br",null),r.a.createElement("span",null,n)," \u2022 ",r.a.createElement("span",null,l)),a&&r.a.createElement("div",{key:"description",style:{fontSize:12,marginTop:5}},a.runs.map((function(e,t){return e.bold?r.a.createElement("span",{key:e.text+t,style:{fontWeight:"bold"}},e.text):r.a.createElement("span",{key:e.text+t},e.text)}))))}),A=(a(64),a(94)),J=Object(A.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),P=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(u.a)(l,2),d=o[0],f=o[1],E=Object(n.useState)(!1),b=Object(u.a)(E,2),h=b[0],y=b[1],v=Object(n.useState)(!0),g=Object(u.a)(v,2),j=g[0],O=g[1],w=J(),S=Object(n.useRef)(),N=Object(B.g)(),C=Object(B.f)();return Object(n.useEffect)((function(){d&&Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,fetch("".concat(x,"/search?search=").concat(d));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.result),y(!1);case 9:case"end":return e.stop()}}),e)})))()}),[d]),Object(n.useEffect)((function(){f(N.search.split("searchText=")[1]||"react.js")}),[N]),Object(n.useEffect)((function(){S.current&&S.current.addEventListener("scroll",(function(){var e=S.current.scrollTop;S.current.scrollHeight-S.current.offsetHeight<=e&&console.log("Scroll End")}),!1)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:w.backdrop,open:h},r.a.createElement(p.a,{color:"inherit"})),r.a.createElement(k,{onMenuClick:function(){return O(!j)},onSearch:function(e){return C.push("/youtube/?searchText=".concat(e))}}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},j&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-bar-normal"},r.a.createElement(H,{type:"normal"})),r.a.createElement("div",{className:"nav-bar-minimal"},r.a.createElement(H,{type:"minimal"}))),r.a.createElement("div",{ref:S,style:{flex:1,display:"flex",flexWrap:"wrap",justifyContent:"flex-start",height:"calc(100vh - 55px)",overflow:"auto",padding:"0 20px",backgroundColor:"#191919"}},a.map((function(e){return r.a.createElement(F,Object.assign({key:e.videoId},e))})))))},Y=a(23),K=a(46),V=a(95),$=a(38),q=a.n($),D=function(){var e=Object(B.f)();console.log("history",e);var t=e.location.search.split("videoId=");return t=t[1]?t[1]:"NA",r.a.createElement("div",{style:{width:"100%",height:"100vh"}},r.a.createElement("iframe",{title:"video",width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(t),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},G=Object(K.a)({palette:{primary:{main:q.a[100]},secondary:{main:q.a[500]}}}),Q=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(V.a,{theme:G},r.a.createElement(Y.a,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/youtube"},r.a.createElement(P,null)),r.a.createElement(B.a,{path:"/youtube/play"},r.a.createElement(D,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.d84bbd42.chunk.js.map