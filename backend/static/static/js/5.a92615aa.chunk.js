(this.webpackJsonpmcash=this.webpackJsonpmcash||[]).push([[5],{83:function(e,t,a){"use strict";var n=a(1);t.a=function(e){return Object(n.jsx)("div",{className:"input-component",children:Object(n.jsx)("input",{type:e.type,name:e.name,placeholder:e.placeholder,onChange:function(t){return e.onChange(t.target.value)}})})}},84:function(e,t,a){"use strict";var n=a(1);t.a=function(e){return Object(n.jsx)("div",{className:"button-component",children:Object(n.jsx)("button",{onClick:function(t){return e.onClick(t)},children:e.field})})}},89:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(25),c=a.n(s),r=a(29),o=a(13),i=a(0),l=a(3),u=a(21),p=a.n(u),d=a(18),j=a(83),m=a(84),b=a(22);t.default=function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),a=t[0],s=t[1],u=Object(i.useState)(),h=Object(o.a)(u,2),f=h[0],O=h[1],g=Object(i.useState)(),v=Object(o.a)(g,2),x=(v[0],v[1]),k=Object(i.useContext)(d.a).setUserData,C=Object(l.f)(),w=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:f},e.next=5,p.a.post(b.a.BACKEND_URL+"/users/login",n);case 5:s=e.sent,k({token:s.data.token,user:s.data.user}),localStorage.setItem("token",s.data.token),localStorage.setItem("role",s.data.user.role),C.push("/"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data.msg&&x(e.t0.response.data.msg),alert(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"signin-page",children:Object(n.jsxs)("div",{className:"signin-form",children:[Object(n.jsx)("div",{className:"page-title",children:"Log In"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)(j.a,{name:"email",type:"email",placeholder:"Email",onChange:s}),Object(n.jsx)(j.a,{name:"password",type:"password",placeholder:"Password",onChange:O}),Object(n.jsx)(m.a,{field:"Sign In",onClick:w})]})]})})}}}]);
//# sourceMappingURL=5.a92615aa.chunk.js.map