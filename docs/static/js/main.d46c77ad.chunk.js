(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(9),r=n.n(o),d=n(2),i=n(3),l=n(10),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(l.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));default:return e}},u=n(5),j=n.n(u),b=n(0),h=function(e){var t=e.index,n=e.todo,c=e.handleDelete,a=e.handleToggle;return Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsxs)("p",{className:"".concat(n.done&&"complete"),onClick:function(){a(n.id)},children:[t+1,". ",n.desc]}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){c(n.id)},children:"Borrar"})]})};h.propTyper={index:j.a.number.isRequired,todo:j.a.array.isRequired,handleDelete:j.a.func.isRequired,handleToggle:j.a.func.isRequired};var p=function(e){var t=e.todos,n=e.handleDelete,c=e.handleToggle;return Object(b.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(b.jsx)(h,{index:t,todo:e,handleDelete:n,handleToggle:c},e.id)}))})},O=(n(18),n(7)),g=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],o=n[1];return[a,function(e){var t=e.target;o(Object(i.a)(Object(i.a)({},a),{},Object(O.a)({},t.name,t.value)))},function(){o(e)}]}({description:""}),a=Object(d.a)(n,3),o=a[0].description,r=a[1],l=a[2];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Agregar TODO"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(o.trim().length<=1)){var n={id:(new Date).getTime(),desc:o,done:!1};t(n),l()}},children:[Object(b.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Aprender ...",autoComplete:"off",value:o,onChange:r}),Object(b.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1 btn-block",children:"Agregar"})]})]})},f=function(){return JSON.parse(localStorage.getItem("todos"))||[]},m=function(){var e=Object(c.useReducer)(s,[],f),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Todo App ( ",n.length," )"]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-7",children:Object(b.jsx)(p,{todos:n,handleDelete:function(e){a({type:"delete",payload:e})},handleToggle:function(e){a({type:"toggle",payload:e})}})}),Object(b.jsx)("div",{className:"col-5",children:Object(b.jsx)(g,{handleAddTodo:function(e){a({type:"add",payload:e})}})})]})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d46c77ad.chunk.js.map