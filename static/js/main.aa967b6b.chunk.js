(this["webpackJsonptodo-list-b"]=this["webpackJsonptodo-list-b"]||[]).push([[0],{60:function(e,t,s){},61:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),o=s.n(a),n=s(34),i=s.n(n),l=(s(60),s(21)),d=s(7),r=(s(61),s(35)),j=s.n(r),b=s(36),u=s.n(b),m=s(26),O=s.n(m);var x=function(e){var t=e.inputText,s=e.setInputText,o=e.todos,n=e.setTodos,i=e.closePopup,r=Object(a.useState)(""),j=Object(d.a)(r,2),b=j[0],u=j[1],m=Object(a.useState)(""),x=Object(d.a)(m,2),f=x[0],p=x[1],h=Object(a.useState)(""),v=Object(d.a)(h,2),N=v[0],_=v[1],T=Object(a.useState)(""),k=Object(d.a)(T,2),g=k[0],S=k[1];return Object(c.jsx)("div",{className:"newTaskForm",children:Object(c.jsxs)("form",{className:"newTask__form todo-form",children:[Object(c.jsx)("div",{className:"form-text",children:Object(c.jsx)("div",{className:"form-title",children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})}),Object(c.jsx)("input",{value:t,onChange:function(e){s(e.target.value)},type:"text",className:"form-input"}),Object(c.jsxs)("div",{className:"form-date",children:[Object(c.jsx)("div",{className:"form-descr",children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0434\u0430\u0442\u0443"}),Object(c.jsx)("input",{className:"form-check",type:"checkbox",onChange:function(e){e.target.checked?u("active"):u("")}}),Object(c.jsxs)("div",{className:"form-date-container ".concat(b),children:[Object(c.jsx)("input",{type:"text",className:"form-date-input",onChange:function(e){p(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"form-date-input",onChange:function(e){_(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"form-date-input",onChange:function(e){S(e.target.value)}})]})]}),Object(c.jsx)("button",{onClick:function(e){if(e.preventDefault(),""!==t)if(s(""),"active"===b){var c=new Date(g,N-1,f,2,0,0,0);n([].concat(Object(l.a)(o),[{text:t,completed:!1,id:1e3*Math.random(),date:c}]))}else n([].concat(Object(l.a)(o),[{text:t,completed:!1,id:1e3*Math.random()}]));i()},className:"form-button",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(c.jsx)(O.a,{onClick:i,className:"close-button"})]})})};var f=function(e){var t=e.inputText,s=e.setInputText,o=e.todos,n=e.setTodos,i=e.closePopup,r=Object(a.useState)(1),j=Object(d.a)(r,2),b=j[0],u=j[1];return Object(c.jsx)("div",{className:"regularTaskForm",children:Object(c.jsxs)("form",{className:"regularTaskForm__form todo-form",children:[Object(c.jsx)("div",{className:"form-t\u0435xt",children:Object(c.jsx)("div",{className:"form-title",children:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})}),Object(c.jsx)("input",{value:t,onChange:function(e){s(e.target.value)},type:"text",className:"form-input"}),Object(c.jsx)("div",{className:"form-t\u0435xt",children:Object(c.jsx)("div",{className:"form-title",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u0434\u0430\u0447\u0443"})}),Object(c.jsxs)("div",{className:"form-radio",children:[Object(c.jsx)("div",{className:1===b?"radio-btn active":"radio-btn",onClick:function(){return u(1)},children:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e"}),Object(c.jsx)("div",{className:2===b?"radio-btn active":"radio-btn",onClick:function(){return u(2)},children:"\u041a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e"}),Object(c.jsx)("div",{className:3===b?"radio-btn active":"radio-btn",onClick:function(){return u(3)},children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446"})]}),Object(c.jsx)("button",{onClick:function(e){if(e.preventDefault(),""!==t){var c=new Date;c.setHours(2),c.setMinutes(0),c.setSeconds(0),c.setMilliseconds(0),n([].concat(Object(l.a)(o),[{text:t,completed:!1,id:1e3*Math.random(),regular:b,date:c}])),s("")}i()},className:"form-button",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(c.jsx)(O.a,{onClick:i,className:"close-button"})]})})};var p=function(e){var t=e.inputText,s=e.setInputText,o=e.todos,n=e.setTodos,i=(e.setFilter,Object(a.useState)(!1)),l=Object(d.a)(i,2),r=l[0],b=l[1],m=Object(a.useState)("popupTaskFormPanel"),O=Object(d.a)(m,2),p=O[0],h=O[1],v=function(){b(!1),h("popupTaskFormPanel")},N=function(){h("popupTaskFormPanel"),b(!r)};return Object(c.jsxs)("div",{className:"addTaskPanel",children:[Object(c.jsxs)("div",{className:"addTaskPanel__container",children:[Object(c.jsx)("h1",{className:"addTask__title",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(c.jsx)("button",{className:"addTask__btn",onClick:N,children:"+"}),r?Object(c.jsx)("div",{className:"addTaskPanel__popup",children:Object(c.jsxs)("li",{className:"popup_menu",children:[Object(c.jsxs)("ul",{className:"popup_element",onClick:function(){N(),h("popupTaskFormPanel"===p?"popupTaskFormPanel active newTaskFormPanel":"popupTaskFormPanel")},children:[" ",Object(c.jsx)(j.a,{className:"popup_icon"}),"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"]}),Object(c.jsxs)("ul",{className:"popup_element",onClick:function(){N(),h("popupTaskFormPanel"===p?"popupTaskFormPanel active regularTaskFormPanel":"popupTaskFormPanel")},children:[Object(c.jsx)(u.a,{className:"popup_icon"}),"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435"]})]})}):""]}),Object(c.jsxs)("div",{className:p,children:[p.indexOf("newTaskForm")>-1?Object(c.jsx)(x,{inputText:t,setInputText:s,todos:o,setTodos:n,closePopup:v}):"",p.indexOf("regularTaskForm")>-1?Object(c.jsx)(f,{inputText:t,setInputText:s,todos:o,setTodos:n,closePopup:v}):""]})]})},h=s(25),v=s(14),N=function(e){var t=e.todo,s=e.todos,o=e.setTodos,n=e.setTimePopUp,i=Object(a.useState)(""),l=Object(d.a)(i,2),r=l[0],j=l[1];return Object(c.jsx)("div",{className:"timePopUp",children:Object(c.jsxs)("div",{className:"timePopUp__container",children:[Object(c.jsx)("label",{className:"deadline__descr",children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e..."}),Object(c.jsx)("input",{type:"datetime-local",className:"deadline__input",value:r,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("div",{className:"deadline__btn",onClick:function(){n();var e=Date.parse(r);o(s.map((function(s){return s.id===t.id?Object(v.a)(Object(v.a)({},s),{},{timer:e}):s})))},children:"\u041e\u043a"}),Object(c.jsx)("div",{className:"deadline__del",onClick:function(){n(),o(s.map((function(e){return e.id===t.id&&t.timer&&delete t.timer,e})))},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]})})};var _=function(e){var t=e.millis,s=Object(a.useState)(t-Date.parse(new Date)),o=Object(d.a)(s,2),n=o[0],i=o[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){setInterval((function(){Math.floor(n/1e3/60%60),Math.floor(n/36e5%24);console.log("\u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),i((function(e){return e-6e4}))}),6e4)};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"deadline-timer",children:[Math.floor(n/36e5%24),"\u0447.\xa0",Math.floor(n/1e3/60%60),"\u043c."]})})},T=(s(66),s(28)),k=s.n(T),g=s(37),S=s.n(g);var y=function(e){var t=e.todo,s=e.todos,o=e.setTodos,n=e.subTodos,i=e.setSubTodos;Object(a.useEffect)((function(){o(s.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{subTodos:n}):e})))}),[n]);var r=Object(a.useState)(""),j=Object(d.a)(r,2),b=j[0],u=j[1];return Object(c.jsx)("div",{className:"subTaskForm",children:Object(c.jsx)("form",{className:"subTaskForm-form",children:Object(c.jsxs)("div",{className:"subTaskForm-row",children:[Object(c.jsx)("span",{className:"subTaskForm-title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(c.jsx)("input",{className:"subTaskForm-input",type:"text",value:b,onChange:function(e){u(e.target.value)}}),Object(c.jsx)(S.a,{className:"subTaskForm-btn",onClick:function(e){""!==b&&(i([].concat(Object(l.a)(n),[{text:b,completed:!1,id:1e3*Math.random()}])),u(""))}})]})})})};var C=function(e){var t=e.text,s=e.subTodo,a=e.subTodos,o=e.setSubTodos;return Object(c.jsxs)("div",{className:"subTodo",children:[Object(c.jsx)("li",{className:"todo__item ".concat(s.completed?"completed":""),children:t}),Object(c.jsxs)("div",{className:"todo-buttons",children:[Object(c.jsx)("button",{onClick:function(){o(a.map((function(e){return e.id===s.id?Object(v.a)(Object(v.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){o(a.filter((function(e){return e.id!==s.id})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})]})};var F=function(e){var t=e.subTodos,s=e.setSubTodos;return Object(c.jsx)("div",{className:"subTodoList",children:Object(c.jsx)("ul",{className:"subTodo__container",children:t.length>0?t.map((function(e){return Object(c.jsx)(C,{text:e.text,subTodo:e,subTodos:t,setSubTodos:s},e.id)})):""})})};var P=function(e){var t=e.todo,s=e.todos,a=e.setTodos,o=e.subTodos,n=e.setSubTodos;return Object(c.jsx)("div",{className:"subPopup",children:Object(c.jsxs)("div",{className:"subPopup__container",children:[Object(c.jsx)("div",{className:"sub-title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0437\u0430\u0434\u0430\u0447\u0443"}),Object(c.jsx)(y,{todo:t,todos:s,setTodos:a,subTodos:o,setSubTodos:n}),Object(c.jsx)("div",{className:"sub-title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0437\u0430\u0434\u0430\u0447"}),o.length>0?Object(c.jsx)(F,{todo:t,todos:s,setTodos:a,subTodos:o,setSubTodos:n}):Object(c.jsx)("div",{className:"sub-title-list",children:"*\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442*"})]})})},D=s(40),M=s.n(D),w=s(39),I=s.n(w),E=s(38),H=s.n(E),J=function(e){var t=e.text,s=e.todo,o=e.todos,n=(e.filteredTodos,e.setTodos),i=(e.disabled,Object(a.useState)(!1)),l=Object(d.a)(i,2),r=l[0],j=l[1],b=Object(a.useState)(!1),u=Object(d.a)(b,2),m=u[0],O=u[1],x=s.subTodos?s.subTodos:[],f=Object(a.useState)(x),p=Object(d.a)(f,2),h=p[0],T=p[1],g=h.length;return Object(c.jsxs)("div",{className:"todo ".concat(s.regular?"reg":""),children:[Object(c.jsxs)("div",{className:"todo__left",children:[Object(c.jsx)("input",{className:"todo__complete",onChange:function(){n(o.map((function(e){if(e.id===s.id){if(e.regular){var t=e.date.getDate();switch(e.regular){case 1:e.date.setDate(t+1);break;case 2:e.date.setDate(t+7);break;case 3:e.date.setMonth(e.date.getMonth()+1)}}return Object(v.a)(Object(v.a)({},e),{},{completed:!e.completed})}return e})))},type:"checkbox",id:"cmp".concat(s.id),checked:s.completed}),Object(c.jsx)("label",{htmlFor:"cmp".concat(s.id)}),Object(c.jsx)("li",{className:"todo__item ".concat(s.completed?"completed":""),children:t}),s.regular>0?Object(c.jsx)(H.a,{className:"replay__icon"}):""]}),Object(c.jsxs)("div",{className:"todo-buttons",children:[Object(c.jsxs)("div",{className:"subList-container",children:[Object(c.jsx)(k.a,{className:"sub-list",onClick:function(){j(!r)}}),h.length>0?Object(c.jsxs)("div",{className:"subList-nums",children:[function(){var e=0;return h.forEach((function(t){t.completed&&e++})),e}(),"/",g]}):""]}),Object(c.jsx)(I.a,{className:"todo__delete",onClick:function(){n(o.filter((function(e){return e.id!==s.id})))}}),Object(c.jsxs)("div",{className:"deadline-container",children:[Object(c.jsx)(M.a,{onClick:function(e){O(!m)},className:"time-btn"}),s.timer?Object(c.jsx)(_,{millis:s.timer}):""]})]}),m?Object(c.jsx)(N,{todo:s,todos:o,setTodos:n,setTimePopUp:O}):"",r?Object(c.jsx)(P,{todo:s,todos:o,setTodos:n,subTodos:h,setSubTodos:T}):""]})},L=function(e){var t=e.todos,s=e.filteredTodos,a=e.setTodos,o=e.disabled;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:s.length>0?s.map((function(e){return Object(c.jsx)(J,{text:e.text,todo:e,todos:t,filteredTodos:s,setTodos:a,disabled:o},e.id)})):Object(c.jsx)("div",{className:"todo-none",children:"*\u041d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447*"})})})};var U=function(e){var t,s=e.title,a=e.todos,o=e.filteredTodos,n=e.setTodos,i=e.disabled,l=void 0!==i&&i;return Object(c.jsxs)("div",(t={className:!0},Object(h.a)(t,"className","todosSection"),Object(h.a)(t,"children",[Object(c.jsx)("h1",{className:"todosSection__title",children:s}),null==a?"":Object(c.jsx)(L,{todos:a,filteredTodos:o,setTodos:n,disabled:l})]),t))},A=s(41),B=s.n(A),q=s(44),z=s.n(q),G=s(42),K=s.n(G),Q=s(43),R=s.n(Q);var V=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"header__contasiner",children:Object(c.jsxs)("div",{className:"header__categories",children:[Object(c.jsxs)("a",{className:"category",href:"/",children:[Object(c.jsx)(B.a,{className:"category__icon"}),"\u0417\u0430\u0434\u0430\u0447\u0438"]}),Object(c.jsxs)("a",{className:"category",href:"/challenges",children:[Object(c.jsx)(K.a,{className:"category__icon"}),"\u0427\u0435\u043b\u043b\u0435\u043d\u0434\u0436\u0438"]}),Object(c.jsxs)("a",{className:"category main",href:"/",children:[Object(c.jsx)("span",{children:"TO"}),Object(c.jsx)(k.a,{className:"main__icon"}),Object(c.jsx)("span",{children:"DO"})]}),Object(c.jsxs)("a",{className:"category",href:"/progress",children:[Object(c.jsx)(R.a,{className:"category__icon"}),"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441"]}),Object(c.jsxs)("a",{className:"category",href:"/statistics",children:[Object(c.jsx)(z.a,{className:"category__icon"}),"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"]})]})})})},W=s(50),X=s(8),Y=s(45),Z=s(51),$=(s(67),s(52));var ee=function(e){var t=e.uncompletedTodos,s=Object(a.useState)(),o=Object(d.a)(s,2),n=o[0],i=o[1],l={noncompl:function(e){var s,c=Object(Y.a)(t);try{for(c.s();!(s=c.n()).done;){var a=s.value;if(e.getDate()===a.getDate()&&e.getMonth()===a.getMonth())return!0}}catch(o){c.e(o)}finally{c.f()}}};return Object(c.jsxs)("div",{className:"my-calendar",children:[Object(c.jsx)("div",{className:"my-calendar__descr",children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"}),Object(c.jsx)("div",{className:"my-calendar__container",children:Object(c.jsx)(Z.a,{className:"date-picker-calendar",date:n,onDateChange:i,locale:$.a,modifiers:l,modifiersClassNames:{noncompl:"noncompl"}})}),Object(c.jsxs)("div",{className:"my-calendar__descr",children:[Object(c.jsx)("div",{className:"descr__circle"}),Object(c.jsx)("span",{className:"descr__text",children:" - \u043d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})]})]})},te=s(46),se=s.n(te),ce=s(47),ae=s.n(ce),oe=s(48),ne=s.n(oe),ie=s(49),le=s.n(ie);var de=function(){return Object(c.jsxs)("div",{className:"my-statistics",children:[Object(c.jsx)("div",{className:"myStatistics__descr",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),Object(c.jsx)("div",{className:"myStatistics__rate",children:"\u0412\u044b \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0430 49%!"}),Object(c.jsxs)("div",{className:"myStatistics__block",children:[Object(c.jsx)(se.a,{className:"block__icon done__icon"}),Object(c.jsx)("div",{className:"block__title",children:"\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u0434\u0430\u0447 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e - "}),Object(c.jsx)("div",{className:"block__stats",children:"1"})]}),Object(c.jsxs)("div",{className:"myStatistics__block",children:[Object(c.jsx)(ae.a,{className:"block__icon  date__icon"}),Object(c.jsx)("div",{className:"block__title",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 7 \u0434\u043d\u0435\u0439 - "}),Object(c.jsx)("div",{className:"block__stats",children:"5"})]}),Object(c.jsxs)("div",{className:"myStatistics__block",children:[Object(c.jsx)(ne.a,{className:"block__icon stat__icon"}),Object(c.jsx)("div",{className:"block__title",children:"\u0412 \u0441\u0440\u0435\u0434\u043d\u0435\u043c \u0437\u0430 \u0434\u0435\u043d\u044c - "}),Object(c.jsx)("div",{className:"block__stats",children:"5"})]}),Object(c.jsxs)("div",{className:"myStatistics__block",children:[Object(c.jsx)(le.a,{className:"block__icon exp__icon"}),Object(c.jsx)("div",{className:"block__title",children:"\u041e\u043f\u044b\u0442 - "}),Object(c.jsx)("div",{className:"block__stats",children:"5"})]})]})};var re=function(e){var t=e.uncompletedTodos;return console.dir(t),Object(c.jsx)("div",{className:"statistics",children:Object(c.jsxs)("div",{className:"statistics__container",children:[Object(c.jsx)(ee,{uncompletedTodos:t}),Object(c.jsx)(de,{})]})})};var je=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),s=t[0],o=t[1],n=Object(a.useState)([]),i=Object(d.a)(n,2),r=i[0],j=i[1],b=Object(a.useState)("all"),u=Object(d.a)(b,2),m=u[0],O=u[1],x=Object(a.useState)([]),f=Object(d.a)(x,2),h=f[0],v=f[1],N=Object(a.useState)([]),_=Object(d.a)(N,2),T=_[0],k=_[1],g=Object(a.useState)([]),S=Object(d.a)(g,2),y=S[0],C=S[1],F=Object(a.useState)([]),P=Object(d.a)(F,2),D=P[0],M=P[1],w=Object(a.useState)(new Array),I=Object(d.a)(w,2),E=I[0],H=I[1];Object(a.useEffect)((function(){L()}),[]),Object(a.useEffect)((function(){J(),v(r.filter((function(e){if(e.date){var t=new Date(e.date),s=new Date;return s.setHours(2),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0),0==(t-s)/864e5}return!0}))),k(r.filter((function(e){if(e.date){var t=new Date(e.date),s=new Date;s.setHours(2),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0);var c=1==(t-s)/864e5;return c&&(e.completed=!1),c}}))),C(r.filter((function(e){if(e.date){var t=new Date(e.date),s=new Date;s.setHours(2),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0);var c=(t-s)/864e5,a=c>1&&c<=7;return a&&(e.completed=!1),a}}))),M(r.filter((function(e){if(e.date){var t=new Date(e.date),s=new Date;s.setHours(2),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0);var c=(t-s)/864e5>7;return c&&(e.completed=!1),c}}))),r.forEach((function(e){e.date&&(e.completed||H((function(t){return[].concat(Object(l.a)(t),[e.date])})))}))}),[r,m]);var J=function(){localStorage.setItem("todos",JSON.stringify(r))},L=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));e.forEach((function(e){e.date&&(e.date=new Date(e.date))})),j(e)}};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(W.a,{children:[Object(c.jsx)(V,{}),Object(c.jsxs)(X.c,{children:[Object(c.jsx)(X.a,{path:"/statistics",children:Object(c.jsx)(re,{uncompletedTodos:E})}),Object(c.jsxs)(X.a,{path:"/",children:[Object(c.jsx)(p,{inputText:s,setInputText:o,todos:r,setTodos:j,setFilter:O}),Object(c.jsx)(U,{title:"\u0421\u0415\u0413\u041e\u0414\u041d\u042f",todos:r,filteredTodos:h,setTodos:j}),Object(c.jsx)(U,{title:"\u0417\u0410\u0412\u0422\u0420\u0410",todos:r,filteredTodos:T,setTodos:j,disabled:!0}),Object(c.jsx)(U,{title:"\u041d\u0410 \u041d\u0415\u0414\u0415\u041b\u0415",todos:r,filteredTodos:y,setTodos:j,disabled:!0}),Object(c.jsx)(U,{title:"\u041f\u041e\u0417\u0416\u0415",todos:r,filteredTodos:D,setTodos:j,disabled:!0})]})]})]})})},be=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,84)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),o(e),n(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(je,{})}),document.getElementById("root")),be()}},[[71,1,2]]]);
//# sourceMappingURL=main.aa967b6b.chunk.js.map