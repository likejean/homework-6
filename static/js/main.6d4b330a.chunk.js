(this["webpackJsonphomework-6"]=this["webpackJsonphomework-6"]||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10),c=a.n(i),s=a(7),o=a(4),l=a(8),u=a(3),d=function(e){var t=e.handleDelegateNameChange,a=e.fullname;return r.a.createElement(u.h,{prepend:"Delegated to: ",inputs:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.g,{noTag:!0,name:"first",value:a.first_name,onChange:function(e){return t(e.target.getAttribute("name"),e.target.value)},type:"text"}),r.a.createElement(u.g,{noTag:!0,name:"last",value:a.last_name,onChange:function(e){return t(e.target.getAttribute("name"),e.target.value)},type:"text"}))})},m=function(e){var t=e.titleInput,a=e.title;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Task Title"),r.a.createElement("input",{type:"text",onChange:t,value:a,className:"form-control",id:"formGroupExampleInput"}))},f=function(e){var t=e.description,a=e.descriptionInputChange;return r.a.createElement(u.g,{value:t,onChange:a,type:"textarea",label:"Task Description",outline:!0})},b=function(e){var t=e.createList,a=Object(n.useState)(!1),i=Object(l.a)(a,2),c=i[0],o=i[1],b=Object(n.useState)(""),g=Object(l.a)(b,2),k=g[0],O=g[1],p=Object(n.useState)(""),v=Object(l.a)(p,2),j=v[0],h=v[1],E=Object(n.useState)({first_name:"",last_name:""}),T=Object(l.a)(E,2),w=T[0],N=T[1],D=Object(n.useState)({}),y=Object(l.a)(D,2),C=y[0],L=y[1],A=function(e){return O(e.target.value)},x=Object(n.useCallback)(t,[]);Object(n.useEffect)((function(){x(C)}),[x,C]);var S=function(){return o(!c)};return r.a.createElement(u.e,{className:""},r.a.createElement("div",{className:"start-modal-button-wrapper row align-items-center justify-content-center"},r.a.createElement(u.b,{className:"start-modal-button",onClick:S},"CREATE TASK")),r.a.createElement(u.i,{isOpen:c,toggle:S},r.a.createElement(u.l,{toggle:S},"Task Form"),r.a.createElement(u.j,null,r.a.createElement(m,{titleInput:A,title:k,onChange:A}),r.a.createElement(f,{description:j,descriptionInputChange:function(e){return h(e.target.value)}}),r.a.createElement(d,{fullname:w,handleDelegateNameChange:function(e,t){"first"===e&&N(Object(s.a)({},w,{first_name:t})),"last"===e&&N(Object(s.a)({},w,{last_name:t}))}})),r.a.createElement(u.k,null,r.a.createElement(u.b,{className:"row",color:"secondary",onClick:S},"Close"),r.a.createElement(u.b,{className:"row",color:"primary",onClick:function(){L(Object(s.a)({},C,{title:k,description:j,first_name:w.first_name,last_name:w.last_name})),o(!c)}},"Create Task"))))},g=function(e){var t=e.task,a=t.board,n=t.id,i=e.moveTask,c=e.deleteTask,s=e.hideTask;return r.a.createElement(u.c,{size:"sm",className:"mb-4"},r.a.createElement(u.b,{disabled:"left-todo"==="left-".concat(a),className:"task-button",color:"danger"},r.a.createElement("span",{id:n,onClick:i,name:"left-".concat(a),className:"fa fa-angle-double-left","aria-hidden":"true"})),r.a.createElement(u.b,{className:"task-button",color:"pink"},r.a.createElement("span",{id:n,name:a,onClick:s,className:"hide fas fa-eye-slash","aria-hidden":"true"})),r.a.createElement(u.b,{className:"task-button",color:"pink"},r.a.createElement("span",{id:n,name:a,onClick:c,className:"delete fas fa-trash-alt","aria-hidden":"true"})),r.a.createElement(u.b,{className:"task-button",disabled:"right-done"==="right-".concat(a),color:"danger"},r.a.createElement("span",{id:n,onClick:i,name:"right-".concat(a),className:"fa fa-angle-double-right","aria-hidden":"true"})))},k=function(e){var t=e.task,a=e.index,n=e.moveTask,i=e.deleteTask,c=e.hideTask;return r.a.createElement("div",{draggable:"true",name:t.board,id:a,onDragStart:function(e){var t=e.target;e.dataTransfer.setData("task",t.id)},onDragOver:function(e){e.stopPropagation()},className:"d-flex flex-column task-card"},r.a.createElement("h6",{className:"task-title"},t.title),r.a.createElement("div",{className:"p-2 col-example text-left"},t.description),r.a.createElement(g,{moveTask:n,deleteTask:i,hideTask:c,task:t}))},O=function(e){var t=e.taskToDoList,a=e.taskInProgressList,n=e.taskReviewList,i=e.taskDoneList,c=e.moveTask,s=e.deleteTask,o=e.hideTask,l=e.showTask,d=e.dragTask,m=e.boardMessage,f=function(e){e.preventDefault();var t=e.dataTransfer.getData("task"),a=document.getElementById(t);d(e.target.getAttribute("name"),a.getAttribute("name"),t)},b=function(e){e.preventDefault()},g=function(e){return e.length?e.map((function(e,t){return e.visibility?r.a.createElement(k,{moveTask:c,deleteTask:s,hideTask:o,key:t,index:e.id,task:e}):r.a.createElement("p",{className:"show",key:e.id},"Hidden Task... ",r.a.createElement("span",{id:e.id,name:e.board,autoFocus:!0,onClick:l,className:"show"},"SHOW"))})):r.a.createElement("p",{style:{color:"white",textAlign:"center"}},r.a.createElement("i",null,m))};return r.a.createElement(u.e,{className:"dashboard"},r.a.createElement(u.o,{className:"kanban-row"},r.a.createElement(u.d,{onDrop:f,name:"todo",onDragOver:b,className:"kanban-col",md:"3"},r.a.createElement("h3",{className:"task-list-title"},"To-Do: (",t.length,")"),g(t)),r.a.createElement(u.d,{onDrop:f,name:"in-progress",onDragOver:b,className:"kanban-col",md:"3"},r.a.createElement("h3",{className:"task-list-title"},"In-Progress: (",a.length,")"),g(a)),r.a.createElement(u.d,{onDrop:f,name:"review",onDragOver:b,className:"kanban-col",md:"3"},r.a.createElement("h3",{className:"task-list-title"},"To-Review: (",n.length,")"),g(n)),r.a.createElement(u.d,{onDrop:f,name:"done",onDragOver:b,className:"kanban-col",md:"3"},r.a.createElement("h3",{className:"task-list-title"},"Done: (",i.length,")"),g(i))))},p=function(e){var t={taskToDoList:e.taskToDoList,taskInProgressList:e.taskInProgressList,taskReviewList:e.taskReviewList,taskDoneList:e.taskDoneList},a={moveTask:e.moveTask,deleteTask:e.deleteTask,hideTask:e.hideTask,showTask:e.showTask,dragTask:e.dragTask};return r.a.createElement("div",null,r.a.createElement(b,{createList:e.createList}),r.a.createElement(O,Object.assign({boardMessage:e.boardMessage},t,a)))},v=(a(61),a(62),a(63),a(34)),j=a.n(v);a(64);var h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)([]),u=Object(l.a)(c,2),d=u[0],m=u[1],f=Object(n.useState)([]),b=Object(l.a)(f,2),g=b[0],k=b[1],O=Object(n.useState)([]),v=Object(l.a)(O,2),h=v[0],E=v[1],T=Object(n.useState)(""),w=Object(l.a)(T,2),N=w[0],D=w[1],y=function(e){var t,n=e.target.getAttribute("id"),r=e.target.getAttribute("name"),c=e.target.getAttribute("class").split(" ")[0];t="show"===c,"todo"===r&&i(Object(o.a)(a).map((function(e){return e.id===n?Object(s.a)({},e,{visibility:t}):e}))),"in-progress"===r&&m(Object(o.a)(d).map((function(e){return e.id===n?Object(s.a)({},e,{visibility:t}):e}))),"review"===r&&k(Object(o.a)(g).map((function(e){return e.id===n?Object(s.a)({},e,{visibility:t}):e}))),"done"===r&&E(Object(o.a)(h).map((function(e){return e.id===n?Object(s.a)({},e,{visibility:t}):e})))},C={createList:function(e){!0!==function(e){if(null==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;if("object"!==typeof e)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}(e)?i((function(t){return[].concat(Object(o.a)(t),[Object(s.a)({},e,{id:j()(),board:"todo",visibility:!0})])})):D("This list is empty")},moveTask:function(e){var t=e.target.getAttribute("id"),n=e.target.getAttribute("name");"right-todo"===n&&(m((function(e){return e.concat(Object(s.a)({},a.find((function(e){return e.id===t})),{board:"in-progress"}))})),i(Object(o.a)(a).filter((function(e){return e.id!==t})))),"left-in-progress"===n&&(i((function(e){return e.concat(Object(s.a)({},d.find((function(e){return e.id===t})),{board:"todo"}))})),m(Object(o.a)(d).filter((function(e){return e.id!==t})))),"right-in-progress"===n&&(k((function(e){return e.concat(Object(s.a)({},d.find((function(e){return e.id===t})),{board:"review"}))})),m(Object(o.a)(d).filter((function(e){return e.id!==t})))),"left-review"===n&&(m((function(e){return e.concat(Object(s.a)({},g.find((function(e){return e.id===t})),{board:"in-progress"}))})),k(Object(o.a)(g).filter((function(e){return e.id!==t})))),"right-review"===n&&(E((function(e){return e.concat(Object(s.a)({},g.find((function(e){return e.id===t})),{board:"done"}))})),k(Object(o.a)(g).filter((function(e){return e.id!==t})))),"left-done"===n&&(k((function(e){return e.concat(Object(s.a)({},h.find((function(e){return e.id===t})),{board:"review"}))})),E(Object(o.a)(h).filter((function(e){return e.id!==t}))))},deleteTask:function(e){var t=e.target.getAttribute("id"),n=e.target.getAttribute("name");"todo"===n&&i(Object(o.a)(a).filter((function(e){return e.id!==t}))),"in-progress"===n&&m(Object(o.a)(d).filter((function(e){return e.id!==t}))),"review"===n&&k(Object(o.a)(g).filter((function(e){return e.id!==t}))),"done"===n&&E(Object(o.a)(h).filter((function(e){return e.id!==t})))},hideTask:y,showTask:y,dragTask:function(e,t,n){var r={};"todo"===t&&(r=a.find((function(e){return e.id===n})),i(Object(o.a)(a).filter((function(e){return e.id!==n})))),"in-progress"===t&&(r=d.find((function(e){return e.id===n})),m(Object(o.a)(d).filter((function(e){return e.id!==n})))),"review"===t&&(r=g.find((function(e){return e.id===n})),k(Object(o.a)(g).filter((function(e){return e.id!==n})))),"done"===t&&(r=h.find((function(e){return e.id===n})),E(Object(o.a)(h).filter((function(e){return e.id!==n})))),"in-progress"===e&&m((function(e){return e.concat(Object(s.a)({},r,{board:"in-progress"}))})),"todo"===e&&i((function(e){return Object(o.a)(e).concat(Object(s.a)({},r,{board:"todo"}))})),"review"===e&&k((function(e){return Object(o.a)(e).concat(Object(s.a)({},r,{board:"review"}))})),"done"===e&&E((function(e){return Object(o.a)(e).concat(Object(s.a)({},r,{board:"done"}))}))}},L={taskToDoList:a,taskInProgressList:d,taskReviewList:g,taskDoneList:h,boardMessage:N};return r.a.createElement(p,Object.assign({},C,L))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6d4b330a.chunk.js.map