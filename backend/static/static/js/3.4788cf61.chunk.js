(this.webpackJsonpmcash=this.webpackJsonpmcash||[]).push([[3],{80:function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},81:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},82:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return c}))},85:function(t,e,n){"use strict";function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return s}));var o=n(80);function a(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?Object(o.a)(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return a(this,n)}}},86:function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",(function(){return c}))},87:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n(81),o=n(82),a=n(80),s=n(86),r=n(85),u=n(0),l=n(21),d=n.n(l),f=n(22),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={file:null,uploaded:!1,fileId:null,text:"",id:null,bookRef:"",copied:!1,send:!1,email:""},i.onFormSubmit=i.onFormSubmit.bind(Object(a.a)(i)),i.onChange=i.onChange.bind(Object(a.a)(i)),i.proccess=i.proccess.bind(Object(a.a)(i)),i.refresh=i.refresh.bind(Object(a.a)(i)),i.copyLink=i.copyLink.bind(Object(a.a)(i)),i.changeEmail=i.changeEmail.bind(Object(a.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("token")||(window.location.href="/signin")}},{key:"onFormSubmit",value:function(){var t=this,e=new FormData;e.append("pdf",this.state.file);d.a.post(f.a.BACKEND_URL+"/upload",e,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t.setState({uploaded:!0,fileId:e.data.fileId})})).catch((function(t){}))}},{key:"onChange",value:function(t){this.setState({file:t.target.files[0]})}},{key:"proccess",value:function(){var t=this;this.state.fileId&&d.a.post(f.a.BACKEND_URL+"/processPDF/parse",{fileId:this.state.fileId}).then((function(e){t.setState({text:e.data.savedPdf.content,id:e.data.savedPdf._id,bookRef:e.data.savedPdf.bookRef})})).catch((function(t){}))}},{key:"refresh",value:function(){window.location.href="/"}},{key:"copyLink",value:function(){var t=document.createElement("input");t.setAttribute("value","http://localhost:3000/read/"+this.state.id),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.setState({copied:!0})}},{key:"changeEmail",value:function(t){this.setState({email:t.target.value})}},{key:"sendEmail",value:function(){var t=this;""!=this.state.email&&this.state.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?d.a.post(f.a.BACKEND_URL+"/processPDF/sendEmail",{id:this.state.id,email:this.state.email}).then((function(e){t.setState({send:!0})})).catch((function(t){})):alert("Please input valid email.")}},{key:"render",value:function(){var t=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"home-page",children:[Object(i.jsx)("div",{className:"upload-box",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Please upload the PDF file here."}),Object(i.jsx)("input",{type:"file",className:"custom-file-input",name:"pdf",onChange:this.onChange}),Object(i.jsx)("button",{className:"upload-button",onClick:function(){return t.onFormSubmit()},children:this.state.uploaded?"Uploaded":"Upload"})]})}),this.state.uploaded&&Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"process-button",onClick:function(){return t.proccess()},children:"Process"}),Object(i.jsx)("button",{className:"refresh-button",onClick:function(){return t.refresh()},children:"Refresh"})]}),""!=this.state.text&&Object(i.jsxs)("div",{className:"pdf-container",children:[Object(i.jsx)("div",{className:"pdf-text",dangerouslySetInnerHTML:{__html:this.state.text}}),Object(i.jsxs)("div",{className:"pdf-bottom",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"SC THUG-NET SRL"}),Object(i.jsx)("div",{children:"Reg. com: J40/5598/2005"}),Object(i.jsx)("div",{children:"CIF: RO17401198"}),Object(i.jsx)("div",{children:"office@mayatravel.ro"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"Licenta de turism: 201/27.11.2018"}),Object(i.jsx)("div",{children:"Polita de asigurare: 57285/21.11.2022"}),Object(i.jsx)("div",{children:"Capital social: 25000 RON"})]})]}),Object(i.jsx)("div",{className:"pdf-back"})]}),""!=this.state.text&&Object(i.jsxs)("div",{className:"actions",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{value:this.state.email,onChange:function(e){return t.changeEmail(e)}}),Object(i.jsx)("button",{className:"copy-button",onClick:function(){return t.sendEmail()},children:this.state.send?"Sent":"Send"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"copy-button",onClick:function(){return t.copyLink()},children:this.state.copied?"Copied":"Copy Link"})})]})]}),this.state.loading&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("h1",{children:"Loading..."})})]})}}]),n}(u.Component);e.default=h}}]);
//# sourceMappingURL=3.4788cf61.chunk.js.map