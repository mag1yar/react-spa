(this["webpackJsonpreact-spa"]=this["webpackJsonpreact-spa"]||[]).push([[0],{186:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(16),s=n.n(i),l=n(27),o=n(18),j=n(10),d=n(104),b=n(243),m=n(21),p={items:[],item:null,isLoaded:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CLIENTS":return Object(m.a)(Object(m.a)({},e),{},{items:t.payload,isLoaded:!0});case"SET_LOADED":return Object(m.a)(Object(m.a)({},e),{},{isLoaded:t.payload});case"SELECT_CLIENT":return Object(m.a)(Object(m.a)({},e),{},{item:t.payload});default:return e}},u=Object(j.c)({clients:h,form:b.a}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,x=Object(j.e)(u,O(Object(j.a)(d.a))),f=(n(186),n(11)),v=n(238),y=n(242);var g,L=function(){return Object(a.jsxs)(v.a,{bg:"light",expand:"lg",className:"mb-5",children:[Object(a.jsx)(v.a.Brand,{as:l.b,to:"/",children:"React SPA"}),Object(a.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(v.a.Collapse,{className:"justify-content-end",children:Object(a.jsx)(y.a,{children:Object(a.jsx)(y.a.Link,{as:l.b,to:"/add",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})})]})},S=n(108),E=n(234),T=n(240),I=function(e){return e?void 0:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435!"},C=(g=18,function(e){return e&&e.length===g?void 0:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e!"}),N=function(e){var t=e.input,n=e.meta,c=n.touched,r=n.error,i=n.warning,s=Object(S.a)(e,["input","meta"]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E.a,{variant:"danger",children:c&&(r&&Object(a.jsx)("span",{children:r})||i&&Object(a.jsx)("span",{children:i}))}),Object(a.jsx)(T.a.Control,Object(m.a)(Object(m.a)({},s),t))]})},_=n(110),D=n(111),G=n(115),k=n(114),w=function(e){Object(G.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).titleElement=document.getElementsByTagName("title")[0],a}return Object(D.a)(n,[{key:"render",value:function(){var e;return e=this.props.pageTitle?this.props.pageTitle+" | "+this.props.siteTitle:this.props.siteTitle,Object(i.createPortal)(e||"",this.titleElement)}}]),n}(r.a.Component);w.defaultProps={pageTitle:null,siteTitle:"React SPA"};var F=n(235),P=n(236),R=n(237),A=n(112),B=n.n(A)()("datebase",localStorage);window.db=B,B.isNew()&&(B.createTable("clients",["name","surname","middlename","phone","experience","specialty"]),B.commit());var M=function(e){var t=e.name,n=e.surname,a=e.middlename,c=e.phone,r=e.experience,i=e.specialty;B.insert("clients",{name:t,surname:n,middlename:a,phone:c,experience:r,specialty:i}),B.commit()},J=function(e){var t=e.ID,n=e.name,a=e.surname,c=e.middlename,r=e.phone,i=e.experience,s=e.specialty;B.update("clients",{ID:t},(function(e){return e.name=n,e.surname=a,e.middlename=c,e.phone=r,e.experience=i,e.specialty=s,e}))},V=function(){return B.queryAll("clients")},X=function(e){return{type:"SET_CLIENTS",payload:e}};var q=function(){var e=Object(o.c)(),t=Object(o.d)((function(e){return e.clients.isLoaded})),n=function(){e((function(e){e({type:"SET_LOADED",payload:!1}),e(X(V()))}))};return r.a.useEffect((function(){n()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(a.jsx)("th",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("th",{children:"\u041a\u0430\u0440\u0442\u0430"}),Object(a.jsxs)("th",{children:["\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",Object(a.jsx)(P.a,{onClick:function(){return n()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0451"})]})]})}),Object(a.jsx)("tbody",{children:t?V().map((function(t){return Object(a.jsxs)("tr",{isLoading:!0,children:[Object(a.jsx)("td",{children:t.ID}),Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.phone}),Object(a.jsx)("td",{children:Object(a.jsx)(P.a,{onClick:function(){return e({type:"SELECT_CLIENT",payload:t})},as:l.b,to:"/card",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})}),Object(a.jsx)("td",{children:Object(a.jsx)(P.a,{onClick:function(){return n()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},t.ID)})):""})]}),t?"":Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)(R.a,{animation:"border",variant:"primary"})})]})},z=n(109),U=n(51),H=n.n(U),K=n(241),Q=n(239);var W=Object(o.b)((function(e,t){return{initialValues:e.clients.item}}))(Object(Q.a)({form:"changeClientForm",enableReinitialize:!0,onSubmitSuccess:function(e,t,n){var a=n.values.name,c=n.values.surname;alert("\u041a\u043b\u0438\u0435\u043d\u0442 \xab".concat(a," ").concat(c,"\xbb \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d!")),n.history.push("/")}})((function(e){var t=e.handleSubmit,n=e.submitting;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{pageTitle:"\u041a\u0430\u0440\u0442\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(a.jsxs)(T.a,{onSubmit:t(J),children:[Object(a.jsxs)(T.a.Row,{children:[Object(a.jsxs)(T.a.Group,{as:z.a,controlId:"formName",children:[Object(a.jsx)(T.a.Label,{children:"\u0418\u043c\u044f"}),Object(a.jsx)(K.a,{name:"name",type:"text",placeholder:"\u0418\u043c\u044f",component:N,validate:[I]})]}),Object(a.jsxs)(T.a.Group,{as:z.a,controlId:"formSurname",children:[Object(a.jsx)(T.a.Label,{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(a.jsx)(K.a,{name:"surname",component:N,type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",validate:[I]})]}),Object(a.jsxs)(T.a.Group,{as:z.a,controlId:"formMiddleName",children:[Object(a.jsx)(T.a.Label,{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(a.jsx)(K.a,{name:"middlename",type:"text",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",component:N})]})]}),Object(a.jsxs)(T.a.Group,{controlId:"formPhone",children:[Object(a.jsx)(T.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)(K.a,{as:H.a,mask:"+7 (999) 999 99 99",maskChar:null,name:"phone",type:"text",validate:[C],placeholder:"",component:N})]}),Object(a.jsxs)(T.a.Group,{controlId:"formExperience",children:[Object(a.jsx)(T.a.Label,{children:"\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(a.jsx)(K.a,{name:"experience",type:"number",component:N})]}),Object(a.jsxs)(T.a.Group,{controlId:"formSpecialty",children:[Object(a.jsx)(T.a.Label,{children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(a.jsx)(K.a,{name:"specialty",type:"text",component:N})]}),Object(a.jsx)(P.a,{disabled:n,variant:"primary",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})));var Y=Object(Q.a)({form:"addClientForm",onSubmitSuccess:function(e,t,n){console.log(n);var a=n.values.name,c=n.values.surname;alert("\u041a\u043b\u0438\u0435\u043d\u0442 \xab".concat(a," ").concat(c,"\xbb \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d!")),n.history.push("/")}})((function(e){var t=e.handleSubmit;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{pageTitle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(a.jsxs)(T.a,{onSubmit:t(M),children:[Object(a.jsxs)(T.a.Row,{children:[Object(a.jsxs)(T.a.Group,{as:z.a,controlId:"formName",children:[Object(a.jsx)(T.a.Label,{children:"\u0418\u043c\u044f"}),Object(a.jsx)(K.a,{name:"name",type:"text",placeholder:"\u0418\u043c\u044f",component:N,validate:[I]})]}),Object(a.jsxs)(T.a.Group,{as:z.a,controlId:"formSurname",children:[Object(a.jsx)(T.a.Label,{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(a.jsx)(K.a,{name:"surname",component:N,type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",validate:[I]})]}),Object(a.jsxs)(T.a.Group,{as:z.a,controlId:"formMiddlename",children:[Object(a.jsx)(T.a.Label,{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(a.jsx)(K.a,{name:"middlename",type:"text",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",component:N})]})]}),Object(a.jsxs)(T.a.Group,{controlId:"formPhone",children:[Object(a.jsx)(T.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)(K.a,{as:H.a,mask:"+7 (999) 999 99 99",maskChar:null,name:"phone",type:"text",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",component:N,validate:[C]})]}),Object(a.jsxs)(T.a.Group,{controlId:"formExperience",children:[Object(a.jsx)(T.a.Label,{children:"\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(a.jsx)(K.a,{name:"experience",type:"number",component:N,placeholder:"\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043e\u0442\u044b"})]}),Object(a.jsxs)(T.a.Group,{controlId:"formSpecialty",children:[Object(a.jsx)(T.a.Label,{children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(a.jsx)(K.a,{name:"specialty",type:"text",component:N,placeholder:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"})]}),Object(a.jsx)(P.a,{variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}));n(230),n(231);var Z=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(L,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(f.a,{exact:!0,path:"/",component:q}),Object(a.jsx)(f.a,{exact:!0,path:"/card",component:W}),Object(a.jsx)(f.a,{exact:!0,path:"/add",component:Y})]})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(o.a,{store:x,children:Object(a.jsx)(Z,{})})})}),document.getElementById("root")),$()}},[[232,1,2]]]);
//# sourceMappingURL=main.b0fcf9c3.chunk.js.map