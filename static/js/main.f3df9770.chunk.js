(this["webpackJsonpquaderno-webapp"]=this["webpackJsonpquaderno-webapp"]||[]).push([[0],{55:function(e,a,t){e.exports=t(84)},60:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=(t(60),t(15)),i=t(86),s=t(87),u=t(48),m=t(89),d=t(88),p=t(92),h=t(45),f=t.n(h),g="https://dariocast.altervista.org/fantazama/api",v=t(46),b=t.n(v),E=Object(n.createContext)();function w(){return Object(n.useContext)(E)}var k=t(5);var S=function(e){var a=Object(n.useState)(localStorage.getItem("u")),t=Object(l.a)(a,2),o=t[0],c=t[1],h=Object(n.useState)(localStorage.getItem("p")),v=Object(l.a)(h,2),E=v[0],S=v[1],j=Object(n.useState)(!1),C=Object(l.a)(j,2),O=C[0],y=C[1],I=Object(n.useState)(!1),x=Object(l.a)(I,2),T=x[0],A=x[1],P=w().setAuthToken,L=Object(n.useState)(!1),W=Object(l.a)(L,2),q=W[0],B=W[1],U=e.location.state.referer||"/";return O?r.a.createElement(k.a,{to:U}):r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Group,{controlId:"formBasicUsername"},r.a.createElement(m.a.Label,null,"Username"),r.a.createElement(m.a.Control,{autoComplete:"username",name:"username",onChange:N,type:"text",placeholder:"Inserisci username",value:o||"",required:!0})),r.a.createElement(m.a.Group,{controlId:"formBasicPassword"},r.a.createElement(m.a.Label,null,"Password"),r.a.createElement(m.a.Control,{autoComplete:"current-password",name:"password",onChange:N,type:"password",placeholder:"Password",value:E||"",required:!0})),r.a.createElement(m.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(m.a.Check,{name:"ricorda",onChange:N,type:"checkbox",label:"Ricordami"})),r.a.createElement(d.a,{type:"submit",value:"Submit",variant:"outline-primary",onClick:function(e){o&&E&&(e.preventDefault(),q&&(localStorage.setItem("u",o),localStorage.setItem("p",E)),b.a.post(g+"/admin/auth.php",{username:o,password:f()(E)},{headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status?(console.log(e.data),P(e.data),y(!0)):(console.log(e.data.message),A(!0))})).catch((function(e){console.log(e),A(!0)})))}},"Login")))),r.a.createElement(s.a,null,T&&r.a.createElement(p.a,{variant:"danger"},"Username e/o password errati")));function N(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value;switch(a.name){case"username":c(t);break;case"password":S(t);break;case"ricorda":B(t)}}};var j=function(){return r.a.createElement(i.a,null,r.a.createElement("h2",null,"ListaPartite"))};var C=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Home"),r.a.createElement(j,null))},O=t(17);var y=function(){return r.a.createElement("h1",null,"Dettaglio")};var I=function(){return r.a.createElement("h1",null,"NuovaPartita")},x=t(54);var T=function(e){var a=e.component,t=Object(x.a)(e,["component"]),n=w().authToken;return r.a.createElement(k.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(k.a,{to:{pathname:"/login",state:{referer:e.location}}})}}))};var A=function(e){var a=w().setAuthToken;return r.a.createElement(i.a,null,r.a.createElement("h3",null,"Pannello di controllo"),r.a.createElement(O.b,{to:"/inserisci"},"Inserisci partita"),r.a.createElement(d.a,{variant:"outline-danger",onClick:function(){a()}},"Esci"))},P=t(91),L=t(90);var W=function(){var e=localStorage.getItem("token"),a=Object(n.useState)(e),t=Object(l.a)(a,2),o=t[0],c=t[1];return r.a.createElement(E.Provider,{value:{authToken:o,setAuthToken:function(e){e?(localStorage.setItem("token",JSON.stringify(e)),c(e)):(localStorage.removeItem("token"),c(!1))}}},r.a.createElement(O.a,{basename:g},r.a.createElement(P.a,{bg:"success",expand:"lg"},r.a.createElement(P.a.Brand,{href:"/"},"Quaderno Torneo"),r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(L.a,{className:"mr-auto"},r.a.createElement(L.a.Link,{href:"/"},"Home"),r.a.createElement(L.a.Link,{href:"/admin"},"Admin")))),r.a.createElement(k.b,{exact:!0,path:"/",component:C}),r.a.createElement(k.b,{path:"/lista",component:j}),r.a.createElement(k.b,{path:"/login",component:S}),r.a.createElement(T,{path:"/admin",component:A}),r.a.createElement(T,{path:"/dettaglio",component:y}),r.a.createElement(T,{path:"/inserisci",component:I})))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(83);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quaderno-webapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/quaderno-webapp","/service-worker.js");q?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(a,e)}))}}()}},[[55,1,2]]]);
//# sourceMappingURL=main.f3df9770.chunk.js.map