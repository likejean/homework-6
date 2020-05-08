(this["webpackJsonphomework-6"]=this["webpackJsonphomework-6"]||[]).push([[0],{140:function(e,t,a){e.exports=a(274)},168:function(e,t,a){},177:function(e,t){},179:function(e,t){},216:function(e,t){},217:function(e,t){},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(21),i=a.n(o),s=a(23),l=a(4),c=a(72),u=a.n(c),d=a(19),m=a(126),f=a(7),b=a(127),p=a.n(b),k=function(e){var t=e.type,a=e.color,r=e.delay,o=e.height,i=e.width;return n.a.createElement(p.a,{type:t,color:a,delay:r,height:o,width:i})},g=a(3),h=function(e){var t=e.handleDelegateNameChange,a=e.fullname;return n.a.createElement(g.i,{style:{marginBottom:10},prepend:"Delegated to: ",inputs:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.h,{noTag:!0,name:"first",value:a.first,onChange:function(e){return t(e.target.getAttribute("name"),e.target.value)},type:"text"}),n.a.createElement(g.h,{noTag:!0,name:"last",value:a.last,onChange:function(e){return t(e.target.getAttribute("name"),e.target.value)},type:"text"}))})},E=function(e){var t=e.description,a=e.descriptionInputChange;return n.a.createElement(g.f,{className:"task-description"},n.a.createElement(g.h,{value:t,name:"task_description",onChange:a,type:"textarea",label:"Task Description",outline:!0}))},y=function(e){var t=e.error;return n.a.createElement(g.f,null,n.a.createElement(g.b,{color:"danger"},t))},O=function(e){return e.some((function(e){return" "===e||""===e||null==e}))},v=a(133),T=a(134),j=a(48),N=a(137),S=a(138),_=a(135),w=a.n(_),C=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).state={checked:!1},r.handleChange=r.handleChange.bind(Object(j.a)(r)),r}return Object(T.a)(a,[{key:"handleChange",value:function(e){this.setState({checked:e}),this.props.switchPriority(e)}},{key:"render",value:function(){return n.a.createElement("label",null,n.a.createElement(g.p,null,n.a.createElement(g.e,{md:"2"},n.a.createElement(w.a,{onChange:this.handleChange,checked:this.state.checked})),n.a.createElement(g.e,{md:"10"},n.a.createElement("span",{style:{marginLeft:15,fontSize:20}},"Please, select if this task is priority"))))}}]),a}(r.Component),B=function(e){var t=e.createTask,a=e.resetErrors,o=e.validateInput,i=e.errors,c=i.taskTitleError,u=i.taskDescriptionError,d=i.firstNameError,m=i.lastNameError,b=Object(r.useState)(!1),p=Object(f.a)(b,2),k=p[0],v=p[1],T=Object(r.useState)(""),j=Object(f.a)(T,2),N=j[0],S=j[1],_=Object(r.useState)(""),w=Object(f.a)(_,2),B=w[0],I=w[1],x=Object(r.useState)(!1),F=Object(f.a)(x,2),A=F[0],L=F[1],M=Object(r.useState)({first:"",last:""}),P=Object(f.a)(M,2),D=P[0],J=P[1],z=Object(r.useState)({}),K=Object(f.a)(z,2),H=K[0],R=K[1],q=Object(s.d)(),Y=Object(r.useCallback)(t,[]);Object(r.useEffect)((function(){Y(H)}),[Y,H]);var G=function(){S(""),I(""),J({first:"",last:""}),v(!k),a()};return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.c,{className:"start-modal-button",onClick:G},"CREATE TASK"),n.a.createElement(g.j,{style:{zIndex:1},isOpen:k,toggle:G},n.a.createElement(g.m,{toggle:G},"Task Form"),n.a.createElement(g.k,null,n.a.createElement(g.h,{label:"Enter Task Title",name:"task_title",type:"text",value:N,onChange:function(e){var t=e.target,a=t.value,r=t.name;o(a,r),S(a)},size:"md"}),c.errors&&n.a.createElement(y,{error:c.errors}),n.a.createElement(E,{id:"textArea",description:B,descriptionInputChange:function(e){var t=e.target,a=t.value,r=t.name;o(a,r),I(a)}}),u.errors&&n.a.createElement(y,{error:u.errors}),n.a.createElement(C,{switchPriority:function(e){L(e)}}),n.a.createElement(h,{fullname:D,handleDelegateNameChange:function(e,t){"first"===e&&(o(t,e),J(Object(l.a)({},D,{first:t}))),"last"===e&&(o(t,e),J(Object(l.a)({},D,{last:t})))}}),d.errors&&n.a.createElement(y,{error:d.errors}),m.errors&&n.a.createElement(y,{error:m.errors})),n.a.createElement(g.l,null,n.a.createElement(g.c,{className:"row",color:"secondary",onClick:G},"Close"),n.a.createElement(g.c,{disabled:c.inputStatus||u.inputStatus||d.inputStatus||m.inputStatus,className:"row",color:"primary",onClick:function(){O([N,B,D.first,D.last])?q.error(n.a.createElement("div",{style:{color:"red",fontSize:15}},"Please, Fill Blank Fields..."),{timeout:5e3,onOpen:function(){console.log("hey")},onClose:function(){console.log("closed")}}):(R(Object(l.a)({},H,{task_title:N,location:"kanban_board",task_description:B,task_priority:A,first:D.first,last:D.last})),v(!k),L(!1))}},"Create Task"))))},I=(a(168),function(e){var t=e.boardOrderChange,a=e.order;return n.a.createElement(g.h,{label:"Enter Board Order",name:"board_order",type:"text",value:a,onChange:t})}),x=function(e){var t=e.newBoardPlaceOrder,a=e.boardsSchema,r=isNaN(t)||0===t?1:t;return n.a.createElement("div",{className:"schema-container"},n.a.createElement("i",{style:{color:"red",order:r,marginRight:7},className:"fas fa-level-down-alt fa-3x"}),a.map((function(e,t){return t+1<r?n.a.createElement("div",{style:{order:t+1},key:t,className:"block-element"},t+1):n.a.createElement("div",{style:{order:t+2},key:t,className:"block-element"},t+1)})))},F=function(e){var t=e.boardsSchema,a=e.setBoardOrderState,o=e.createBoard,i=e.validateInput,c=e.boards,u=e.errors,d=u.boardOrderError,m=u.boardTitleError,b=Object(r.useState)(!1),p=Object(f.a)(b,2),k=p[0],h=p[1],E=Object(r.useState)(""),v=Object(f.a)(E,2),T=v[0],j=v[1],N=Object(r.useState)(0),S=Object(f.a)(N,2),_=S[0],w=S[1],C=Object(r.useState)({}),B=Object(f.a)(C,2),F=B[0],A=B[1],L=Object(r.useState)(1),M=Object(f.a)(L,2),P=M[0],D=M[1],J=Object(s.d)(),z=Object(r.useCallback)(o,[]);Object(r.useEffect)((function(){z(F)}),[z,F]);var K=function(){j(""),w(1),h(!k),D(1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.c,{className:"start-modal-button",onClick:K},"CREATE BOARD"),n.a.createElement(g.j,{isOpen:k,toggle:K},n.a.createElement(g.m,{toggle:K},"Board Form"),n.a.createElement(g.k,null,n.a.createElement("div",{className:"form-group"},n.a.createElement(g.h,{label:"Enter Board Title",name:"board_title",type:"text",value:T,onChange:function(e){var t=e.target,a=t.value,r=t.name;i(a,r),j(e.target.value)},size:"md"}),m.errors&&n.a.createElement(y,{error:m.errors}),n.a.createElement(x,{newBoardPlaceOrder:+P,boardsSchema:t}),n.a.createElement(I,{order:_,boardOrderChange:function(e){var t=e.target,a=t.value,r=t.name;i(a,r),w(a),D(a)}}),d.errors&&n.a.createElement(y,{error:d.errors}))),n.a.createElement(g.l,null,n.a.createElement(g.c,{className:"row",color:"secondary",onClick:K},"Close"),n.a.createElement(g.c,{disabled:d.inputStatus||m.inputStatus,className:"row",color:"primary",onClick:function(){O([T])?J.error(n.a.createElement("div",{style:{color:"red",fontSize:15}},"Please, Fill Blank Fields..."),{timeout:5e3,onOpen:function(){console.log("hey")},onClose:function(){console.log("closed")}}):(A(Object(l.a)({},F,{title:T,order:_})),h(!k),D(1),a(c.map((function(e){return{id:e.id,order:e.order,name:e.name}}))))}},"Create Board"))))},A=a(31),L=function(e){var t=e.userLoginAuth,a=e.handleToggleModal,o=Object(r.useState)({email:"",password:""}),i=Object(f.a)(o,2),s=i[0],c=i[1],u=function(e){var t=e.target,a=t.name,r=t.value;c(Object(l.a)({},s,Object(A.a)({},a,r)))};return n.a.createElement(g.f,null,n.a.createElement(g.p,{center:!0},n.a.createElement(g.e,{md:"6"},n.a.createElement("div",null,n.a.createElement("h3",{className:"h4 text-center mb-4"},"SIGN IN"),n.a.createElement("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{type:"email",id:"defaultFormLoginEmailEx",name:"email",className:"form-control",value:s.email,onChange:u}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),n.a.createElement("input",{type:"password",id:"defaultFormLoginPasswordEx",name:"password",className:"form-control",value:s.password,onChange:u}),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement(g.c,{onClick:function(){t({email:s.email,password:s.password}),a()},color:"indigo",type:"submit"},"LOGIN"))))))},M=function(e){var t=e.userLoginAuth,a=Object(r.useState)(!1),o=Object(f.a)(a,2),i=o[0],s=o[1],l=function(){return s(!i)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.c,{className:"login-modal-button",onClick:l},"LOGIN"),n.a.createElement(g.j,{isOpen:i,toggle:l},n.a.createElement(g.m,{toggle:l},"Login Form"),n.a.createElement(g.k,null,n.a.createElement(L,{userLoginAuth:t,handleToggleModal:l}))))},P=function(e){var t=e.task,a=t.board,r=t.id,o=t.location,i=t.priority_level,s=t.task_priority,l=e.login,c=e.boardOrder,u=e.handleFindForEditTaskModal,d=e.boardLength,m=e.moveTask,f=e.deleteTask,b=e.hideTask,p=s?"true":"false";return n.a.createElement(g.d,{size:"sm",className:"mb-4"},n.a.createElement(g.c,{disabled:0===c,className:"task-button",color:"white"},n.a.createElement("span",{id:r,onClick:m,direction:"left",location:o,priority_level:i,task_priority:p,order:c,name:"left-".concat(a),className:"fa fa-angle-double-left","aria-hidden":"true"})),n.a.createElement(g.c,{className:"task-button",color:"white"},n.a.createElement("span",{id:r,name:a,location:o,priority_level:i,onClick:b,className:"hide fas fa-eye-slash","aria-hidden":"true"})),"kanban_board"===o?n.a.createElement(n.a.Fragment,null,n.a.createElement(g.c,{disabled:!l,className:"task-button",color:"white"},n.a.createElement("span",{id:r,name:a,onClick:u,className:"edit fas fa-edit","aria-hidden":"true"})),n.a.createElement(g.c,{disabled:!l,className:"task-button",color:"white"},n.a.createElement("span",{id:r,name:a,onClick:f,className:"delete fas fa-trash-alt","aria-hidden":"true"}))):null,n.a.createElement(g.c,{className:"task-button",disabled:c===d-1,color:"white"},n.a.createElement("span",{id:r,onClick:m,direction:"right",location:o,priority_level:i,task_priority:p,order:c,name:"right-".concat(a),className:"fa fa-angle-double-right","aria-hidden":"true"})))},D=function(e){var t=e.task,a=e.index,o=e.listLength,i=e.login,s=e.boardLength,l=e.swapTasks,c=e.handleFindForEditTaskModal,u=e.boardOrder,d=e.id,m=e.moveTask,b=e.editTask,p=e.deleteTask,k=e.hideTask,h=Object(r.useState)(!1),E=Object(f.a)(h,2),y=E[0],O=E[1],v=function(){return n.a.createElement(g.f,null,n.a.createElement(g.j,{isOpen:y,toggle:T,size:"fluid"},n.a.createElement(g.m,{toggle:T},t.task_title),n.a.createElement(g.k,null,t.task_description),n.a.createElement(g.l,null,n.a.createElement(g.c,{color:"secondary",onClick:T},"Close"))))},T=function(){return O(!y)};return n.a.createElement(g.f,{draggable:"true",name:t.board,id:d,onDragStart:function(e){var t=e.target;e.dataTransfer.setData("task",t.id)},onDragOver:function(e){e.stopPropagation()},className:"d-flex flex-column task-card"},n.a.createElement(g.c,{disabled:0===a,name:"up",color:"white",priority_level:t.priority_level,location:t.location,board:t.board,id:d,className:"up-button",onClick:l},"Up"),n.a.createElement(g.p,null,n.a.createElement(g.e,{size:"8",style:{display:"flex",justifyContent:"flex-start"}},n.a.createElement("h6",{className:"task-title"},t.task_title)),t.task_priority&&n.a.createElement(g.e,{style:{display:"flex",justifyContent:"flex-end"},className:"priority"},n.a.createElement("i",{className:"fas fa-exclamation-triangle fa-2x"}))),n.a.createElement("span",{className:"p-2 col-example text-left task-details",id:d,onMouseOver:function(e){var t=e.target.id;t&&null!==document.getElementById(t).querySelector(".task-details")&&(document.getElementById(t).querySelector(".task-details").innerHTML="Click Here...")},onMouseLeave:function(e){var t=e.target.id;t&&null!==document.getElementById(t).querySelector(".task-details")&&(document.getElementById(t).querySelector(".task-details").innerHTML="Details...")},onClick:T},n.a.createElement("i",null,"Details...")),n.a.createElement(v,null),n.a.createElement(P,{boardLength:s,boardOrder:u,moveTask:m,login:i,location:t.location,editTask:b,deleteTask:p,hideTask:k,task:t,handleFindForEditTaskModal:c}),n.a.createElement(g.c,{disabled:a===o-1,name:"down",priority_level:t.priority_level,location:t.location,board:t.board,id:d,color:"white",className:"down-button",onClick:l},"Down"))},J=function(e){var t=e.boards,a=e.moveTask,r=e.deleteTask,o=e.hideTask,i=e.editTask,s=e.swapKanbanTasks,l=e.showTask,c=e.userLogin,u=e.dragTask,d=e.deleteBoard,m=e.boardMessage,f=e.handleFindForEditTaskModal,b=e.setBoardOrderState,p=function(e){e.preventDefault();var a=e.dataTransfer.getData("task"),r=document.getElementById(a);b(t.map((function(e){return{id:e.id,order:e.order,name:e.name,title:e.title,tasks:e.tasks.map((function(e){return{id:e.id,visibility:!0,task_title:e.task_title,location:e.location,task_description:e.task_description,task_priority:e.task_priority,board:e.board,first:e.first,last:e.last}}))}}))),u(e.target.getAttribute("name"),r.getAttribute("name"),a)},k=function(e){e.preventDefault()},h=function(e){b(t.map((function(e){return{id:e.id,order:e.order,name:e.name}}))),d(e)};return n.a.createElement(g.f,{className:"dashboard container-fluid"},n.a.createElement(g.p,{className:"kanban-row"},t.map((function(e){return n.a.createElement(g.e,{key:e.id,onDrop:p,name:e.name,onDragOver:k,className:"kanban-col",md:"3"},n.a.createElement("div",{className:"board-header container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10"},n.a.createElement("div",{className:"row"},n.a.createElement("span",{className:"task-list-title col-9"},e.title),n.a.createElement("span",{className:"task-quantity col-2"},e.tasks.length))),c?n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{id:e.id,onClick:h,className:"far fa-calendar-times fa-2x"})):n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{id:e.id,className:"far fa-calendar-times fa-2x"})))),(u=e.tasks,d=e.order,b=c,E=t.length,u.length?u.map((function(e,t){return e.visibility?n.a.createElement(D,{boardLength:E,boardOrder:d,moveTask:a,deleteTask:r,hideTask:o,editTask:i,listLength:u.length,swapTasks:s,login:b,key:t,index:t,id:e.id,task:e,handleFindForEditTaskModal:f}):n.a.createElement("p",{className:"show",key:e.id},"Hidden Task... ",n.a.createElement("span",{id:e.id,location:e.location,name:e.board,autoFocus:!0,onClick:l,className:"show"},"SHOW"))})):n.a.createElement("p",{style:{color:"white",textAlign:"center"}},n.a.createElement("i",null,m))));var u,d,b,E}))))},z=function(e){var t=e.priorityTasks,a=e.moveTask,r=e.deleteTask,o=e.hideTask,i=e.editTask,s=e.swapPriorityTasks,l=e.showTask,c=e.boardMessage,u=e.handleFindForEditTaskModal;return n.a.createElement(g.f,{className:"dashboard container-fluid"},n.a.createElement(g.p,{className:"kanban-row"},t.map((function(e,d){return n.a.createElement(g.e,{key:d,name:e.priority_level,className:"kanban-col",md:"6"},n.a.createElement("div",{className:"board-header container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"row"},n.a.createElement("span",{className:"task-list-title col-10"},e.priority_level.toUpperCase()," Priority List"),n.a.createElement("span",{className:"task-quantity col-1"},e.tasks.length))))),function(e,t,d){return e.length?e.map((function(c,m){return c.visibility?n.a.createElement(D,{boardLength:d,boardOrder:t,moveTask:a,deleteTask:r,hideTask:o,editTask:i,listLength:e.length,swapTasks:s,key:m,index:m,id:c.id,task:c,handleFindForEditTaskModal:u}):n.a.createElement("p",{className:"show",key:c.id},"Hidden Task... ",n.a.createElement("span",{id:c.id,priority_level:c.priority_level,name:c.board,autoFocus:!0,onClick:l,className:"show"},"SHOW"))})):n.a.createElement("p",{style:{color:"white",textAlign:"center"}},n.a.createElement("i",null,c))}(e.tasks,e.order,t.length))}))))},K=function(e){var t=e.handleToggleEditTaskModal,a=e.errors,o=a.taskTitleError,i=a.taskDescriptionError,s=a.firstNameError,c=a.lastNameError,u=e.modalButtonClick,d=e.validateInput,m=e.submitNewTaskItems,b=e.searchEditTask,p=Object(r.useState)({task_title:"",task_description:"",task_priority:!1,first:"",last:""}),k=Object(f.a)(p,2),h=k[0],E=k[1],O=Object(r.useState)(!0),v=Object(f.a)(O,2),T=v[0],j=v[1],N=Object(r.useState)(!1),S=Object(f.a)(N,2),_=S[0],w=S[1],C=function(e){_||w(!0),"task_priority"===e.target.name?(j(!T),E(Object(l.a)({},h,{id:b.id,board:b.board,task_priority:e.target.checked}))):E(Object(l.a)({},h,Object(A.a)({id:b.id,board:b.board},e.target.name,e.target.value))),d(e.target.value,e.target.name)};return n.a.createElement(g.f,null,n.a.createElement(g.j,{isOpen:u,toggle:t},n.a.createElement(g.m,{toggle:t},"Task Edit Form"),n.a.createElement(g.k,null,n.a.createElement(g.h,{type:"text",name:"task_title",label:"Edit Task Title",value:h.title,onChange:C}),o.errors&&n.a.createElement(y,{error:o.errors}),n.a.createElement(g.f,{className:"task-description"},n.a.createElement(g.h,{value:h.description,name:"task_description",onChange:C,type:"textarea",label:"Task Description",outline:!0})),i.errors&&n.a.createElement(y,{error:i.errors}),n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{name:"task_priority",checked:T,type:"checkbox",onChange:C,className:"custom-control-input",id:"priority_task"}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"priority_task"},"This is Priority Task")),n.a.createElement(g.h,{type:"text",name:"first",label:"Edit Delegate First Name",value:h.first_name,onChange:C}),s.errors&&n.a.createElement(y,{error:s.errors}),n.a.createElement(g.h,{type:"text",name:"last",label:"Edit Delegate Last Name",value:h.last_name,onChange:C}),c.errors&&n.a.createElement(y,{error:c.errors})),n.a.createElement(g.l,null,n.a.createElement(g.c,{color:"secondary",onClick:t},"Close"),n.a.createElement(g.c,{disabled:!_||o.inputStatus||i.inputStatus||s.inputStatus||c.inputStatus,color:"primary",onClick:function(){m(h),t()}},"Save changes"))))},H=function(e){var t={boards:e.boards,loading:e.loading,boardMessage:e.boardMessage,errors:e.errors,userLogin:e.userLogin,boardsSchema:e.boardsSchema,priorityTasks:e.priorityTasks,searchEditTask:e.searchEditTask,modalButtonClick:e.modalButtonClick,panelControlButtons:e.panelControlButtons},a={createBoard:e.createBoard,createTask:e.createTask,swapKanbanTasks:e.swapTasks.swapKanbanTasks,swapPriorityTasks:e.swapTasks.swapPriorityTasks,moveTask:e.moveTask,deleteTask:e.deleteTask,deleteBoard:e.deleteBoard,userLoginAuth:e.userLoginAuth,filterPriorityTasks:e.filterPriorityTasks,hideTask:e.hideTask,showTask:e.showTask,dragTask:e.dragTask,submitNewTaskItems:e.submitNewTaskItems,validateInput:e.validateInput,resetErrors:e.resetErrors,toggleEditModal:e.toggleEditModal,findTaskForEdit:e.findTaskForEdit,resetMainKanbanView:e.resetMainKanbanView,setBoardOrderState:e.setBoardOrderState};return t.loading?n.a.createElement(g.f,null,n.a.createElement(g.p,{className:"kanban-header"},n.a.createElement("h1",null,"Kanban Board")),n.a.createElement(g.p,{center:!0,style:{marginTop:250}},n.a.createElement(k,{type:"spin",color:"#32083a",height:"50%",width:"50%",delay:0}))):n.a.createElement("div",null,n.a.createElement(g.f,null,n.a.createElement(g.p,{className:"kanban-header"},n.a.createElement("h1",null,"Kanban Board"))),n.a.createElement(K,{errors:t.errors,validateInput:a.validateInput,modalButtonClick:t.modalButtonClick,handleToggleEditTaskModal:a.toggleEditModal,boards:t.boards,findTaskForEdit:t.findTaskForEdit,searchEditTask:t.searchEditTask,submitNewTaskItems:a.submitNewTaskItems}),n.a.createElement(g.f,{className:"main-control-panel"},t.userLogin&&n.a.createElement(g.p,null,n.a.createElement(g.e,null,n.a.createElement(B,{errors:t.errors,validateInput:a.validateInput,createTask:a.createTask,resetErrors:a.resetErrors})),n.a.createElement(g.e,null,n.a.createElement(F,{errors:t.errors,boards:t.boards,boardsSchema:t.boardsSchema,validateInput:a.validateInput,createBoard:a.createBoard,deleteBoard:a.deleteBoard,resetErrors:a.resetErrors,setBoardOrderState:a.setBoardOrderState})),n.a.createElement(g.e,null,n.a.createElement(g.c,{href:"https://github.com/likejean/homework-6/issues",className:"report-issues-button"},"Report Issues"))),n.a.createElement(g.p,null,n.a.createElement(g.e,null,n.a.createElement(M,{userLoginAuth:a.userLoginAuth})),n.a.createElement(g.e,null,n.a.createElement(g.c,{disabled:t.panelControlButtons.kanban_board,onClick:a.resetMainKanbanView,className:"task-priority-button"},"Kanban Board")),n.a.createElement(g.e,null,n.a.createElement(g.c,{disabled:t.panelControlButtons.priority_board,onClick:a.filterPriorityTasks,className:"task-priority-button"},"Priority Tasks")))),t.panelControlButtons.kanban_board&&!t.panelControlButtons.priority_board?n.a.createElement(J,Object.assign({boardMessage:t.boardMessage,handleFindForEditTaskModal:a.findTaskForEdit},t,a)):n.a.createElement(z,Object.assign({boardMessage:t.boardMessage,handleFindForEditTaskModal:a.findTaskForEdit},t,a)))},R=(a(169),a(170),a(171),a(75)),q=a.n(R),Y=a(49),G=a.n(Y),V=(a(273),function(e){if(null==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;if("object"!==typeof e)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}),U=function(e,t,a){var r=e[t];return e[t]=e[a],e[a]=r,e},W=function(e,t,a){var r=/^[0-9A-Za-z\s]+$/,n=/^[a-zA-Z]+$/;switch(e){case"board_order":return{errors:isNaN(t)||""===t?"Input must be an INTEGER!":parseInt(t)<=0?"Must be greater than zero!":parseInt(t)>a+1?"Must be less or equal ".concat(a+1,"!"):"",inputStatus:isNaN(t)||""===t||parseInt(t)<=0||parseInt(t)>a+1};case"board_title":return{errors:t.match(r)?t.length>10?"This title is too long":"":"Please, input alphanumeric characters only!",inputStatus:!t.match(r)||t.length>10};case"task_title":return{errors:t.match(r)?t.length>13?"This title is too long":"":"Please, input alphanumeric characters only!",inputStatus:!t.match(r)||t.length>13};case"task_description":return{errors:t.length>=100?"Description must be less than 100 characters":"",inputStatus:t.length>=100};case"first":return{errors:t.match(n)?t.length<3?"First name is too short":"":"Please, input alphabetical characters only!",inputStatus:!t.match(n)||t.length<3};case"last":return{errors:t.match(n)?t.length<3?"Last name is too short":"":"Please, input alphabetical characters only!",inputStatus:!t.match(n)||t.length<3};default:return{errors:"",inputStatus:!1}}},Z=[{priority_level:"high",id:q()(),order:0,tasks:[]},{priority_level:"low",order:1,id:q()(),tasks:[]}],$={boardTitleError:{errors:"",inputStatus:!1},taskTitleError:{errors:"",inputStatus:!1},boardOrderError:{errors:"",inputStatus:!1},taskDescriptionError:{errors:"",inputStatus:!1},firstNameError:{errors:"",inputStatus:!1},lastNameError:{errors:"",inputStatus:!1}},Q="https://rest-api-server-kanban.herokuapp.com";var X=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(!0),s=Object(f.a)(i,2),c=s[0],b=s[1],p=Object(r.useState)([]),k=Object(f.a)(p,2),g=k[0],h=k[1],E=Object(r.useState)(!1),y=Object(f.a)(E,2),O=y[0],v=y[1],T=Object(r.useState)($),j=Object(f.a)(T,2),N=j[0],S=j[1],_=Object(r.useState)([]),w=Object(f.a)(_,2),C=w[0],B=w[1],I=Object(r.useState)(Z),x=Object(f.a)(I,2),F=x[0],A=x[1],L=Object(r.useState)(!1),M=Object(f.a)(L,2),P=M[0],D=M[1],J=Object(r.useState)({}),z=Object(f.a)(J,2),K=z[0],R=z[1],q=Object(r.useState)({kanban_board:!0,priority_board:!1}),Y=Object(f.a)(q,2),X=Y[0],ee=Y[1],te=Object(r.useRef)();Object(r.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Q,"/boards"));case 2:e.sent.json().then((function(e){h(e.boards.map((function(e){return{id:e._id,order:e.order,name:e.name,title:e.title,tasks:e.tasks.map((function(e){return{id:e._id,visibility:!0,task_title:e.title,location:e.location,task_description:e.description,task_priority:e.priority,board:e.board,first:e.first,last:e.last}}))}}))),b(!1),h((function(e){return e.sort((function(e,t){return e.order-t.order}))})),B(Object(d.a)(Array(e.boards.length).keys()))})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(){return console.log("Successfully rendered!")})).catch((function(){return console.log("Rendering failed")}));var t=JSON.parse(localStorage.getItem("login"));t&&t.token&&(!function(e){if(e.token&&G.a.decode(e.token)){var t=new Date;return e.expiryDate<t.getTime()}return!1}(t)?v(!0):(console.log("Your login session expired!"),v(!1),localStorage.clear()))}),[]);var ae=function(e){var t=e.target.id,a=e.target.getAttribute("name"),r=e.target.getAttribute("priority_level");A((function(e){return Object(d.a)(e).map((function(e){if(e.priority_level===r){var n=e.tasks.findIndex((function(e){return e.id===t})),o=U(e.tasks,n,"up"===a?n-1:n+1);return Object(l.a)({},e,{tasks:o})}return e}))}))},re=function(e){var t,a=e.target.getAttribute("id"),r=e.target.getAttribute("name"),n=e.target.getAttribute("class").split(" ")[0],o=e.target.getAttribute("location"),i=e.target.getAttribute("priority_level");t="show"===n,"kanban_board"===o?h((function(e){return e.map((function(e){return e.name===r?Object(l.a)({},e,{tasks:e.tasks.map((function(e){return e.id===a?Object(l.a)({},e,{visibility:t}):e}))}):e}))})):A((function(e){return e.map((function(e){return e.priority_level===i?Object(l.a)({},e,{tasks:e.tasks.map((function(e){return e.id===a?Object(l.a)({},e,{visibility:t}):e}))}):e}))}))},ne={createBoard:function(e){var t=e.order-1;if(!V(e)){var a="Bearer "+JSON.parse(localStorage.getItem("login")).token;fetch("".concat(Q,"/boards"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:a},body:JSON.stringify(Object(l.a)({},e,{order:t,name:e.title.toLowerCase()}))}).then((function(e){return e.json()})).then((function(e,a){var r=e.createdBoard;if(r)return h((function(e){return[].concat(Object(d.a)(e.slice(0,t)),[Object.assign({},Object(l.a)({},r,{order:t}))],Object(d.a)(e.slice(t)))})),h((function(e){return e.map((function(e,t){return e.order<=t?Object(l.a)({},e,{order:t}):Object(l.a)({},e,{order:t+1})}))})),B((function(e){return Object(d.a)(e).concat(e.length)})),[].concat(Object(d.a)(te.current.slice(0,t)),[Object.assign({},{id:r.id,order:r.order,name:r.name})],Object(d.a)(te.current.slice(t))).map((function(e,t){return e.order<=t?Object(l.a)({},e,{order:t}):Object(l.a)({},e,{order:t+1})}));throw new Error("Your login session is expired or you do not have a permission to perform this operation!")})).then((function(e){fetch("".concat(Q,"/boards"),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}},createTask:function(e){!0!==V(e)?fetch("".concat(Q,"/tasks"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(l.a)({},e,{board:"todo"}))}).then((function(e){return e.json()})).then((function(e){var t=e.createdTask;h((function(e){return e.map((function(e){return e.name===t.board?Object(l.a)({},e,{tasks:e.tasks.concat({id:t._id,visibility:!0,task_title:t.title,location:t.location,task_description:t.description,task_priority:t.priority,board:t.board,first:t.first,last:t.last})}):e}))}))})).catch((function(e){console.log(e)})):o("This list is empty")},moveTask:function(e){var t,a=e.target.getAttribute("id"),r=e.target.getAttribute("direction"),n=e.target.getAttribute("order"),o=e.target.getAttribute("location"),i="true"===e.target.getAttribute("task_priority");t="kanban_board"===o?g.find((function(e){return e.order===parseInt(n)})).tasks.find((function(e){return e.id===a})):F.find((function(e){return e.order===parseInt(n)})).tasks.find((function(e){return e.id===a})),"kanban_board"===o?h((function(e){return e.map((function(e){return e.order===parseInt(n)?Object(l.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==a}))}):e}))})):A((function(e){return e.map((function(e){return e.order===parseInt(n)?Object(l.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==a}))}):e}))})),"kanban_board"===o?h("right"===r?function(e){return e.map((function(e){return e.order===parseInt(n)+1?Object(l.a)({},e,{tasks:e.tasks.concat(Object(l.a)({},t,{board:e.name}))}):e}))}:function(e){return e.map((function(e){return e.order===parseInt(n)-1?Object(l.a)({},e,{tasks:e.tasks.concat(Object(l.a)({},t,{board:e.name}))}):e}))}):A("right"===r?function(e){return e.map((function(e){return e.order===parseInt(n)+1?Object(l.a)({},e,{tasks:e.tasks.concat(Object(l.a)({},t,{priority_level:e.priority_level,task_priority:!1}))}):e}))}:function(e){return e.map((function(e){return e.order===parseInt(n)-1?Object(l.a)({},e,{tasks:e.tasks.concat(Object(l.a)({},t,{priority_level:e.priority_level,task_priority:!0}))}):e}))}),"priority_list"===t.location&&h((function(e){return Object(d.a)(e).map((function(e){return e.name===t.board?Object(l.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(l.a)({},e,{task_priority:!i}):e}))}):e}))})),"kanban_board"===o&&fetch("".concat(Q,"/boards/").concat(a),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({moveOutBoard:+n,moveInBoard:"left"===r?+n-1:+n+1})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},dragTask:function(e,t,a){var r=te.current.find((function(e){return e.name===t})).tasks.find((function(e){return e.id===a}));h((function(r){return r.map((function(r){return r.name===t&&null!==e?Object(l.a)({},r,{tasks:r.tasks.filter((function(e){return e.id!==a}))}):r}))})),h((function(t){return t.map((function(t){return t.name===e?Object(l.a)({},t,{tasks:t.tasks.concat(Object(l.a)({},r,{board:t.name}))}):t}))})),fetch("".concat(Q,"/boards/").concat(a),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({moveOutBoard:+te.current.find((function(e){return e.name===t})).order,moveInBoard:+te.current.find((function(t){return t.name===e})).order})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},deleteTask:function(e){fetch("".concat(Q,"/tasks/").concat(e.target.id),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.target.id,board:e.target.getAttribute("name")})}).then((function(e){return e.json()})).then((function(e){var t=e.deletedTask,a=t.id,r=t.board_name;h((function(e){return e.map((function(e){return e.name===r?Object(l.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==a}))}):e}))}))})).catch((function(e){console.log(e)})),F.length>0&&A(F.filter((function(t){return t.id!==e.target.id})))},hideTask:re,showTask:re,submitNewTaskItems:function(e){fetch("".concat(Q,"/tasks/").concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var t=e.updatedTask;h((function(e){return e.map((function(e){return e.name===t.board?Object(l.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(l.a)({},e,{},t):e}))}):e}))}))})).catch((function(e){console.log(e)}))},deleteBoard:function(e){var t="Bearer "+JSON.parse(localStorage.getItem("login")).token,a=te.current.filter((function(t){return t.id!==e.target.id})).map((function(e,t){return Object(l.a)({},e,{order:t})}));fetch("".concat(Q,"/boards/").concat(e.target.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e,t){if(console.log(e),t)throw new Error("Your login session is expired or you do not have a permission to perform this operation!");var a=e.deletedBoard;h((function(e){return e.filter((function(e){return e.id!==a}))}))})).catch((function(e){console.log(e)})),h((function(e){return e.map((function(e,t){return Object(l.a)({},e,{order:t})}))})),B((function(e){return Object(d.a)(e).filter((function(e){return e!==g.length-1}))}))},validateInput:function(e,t){"board_order"===t&&S((function(a){return Object(l.a)({},a,{boardOrderError:W(t,e,g.length)})})),"board_title"===t&&S((function(a){return Object(l.a)({},a,{boardTitleError:W(t,e,g.length)})})),"task_title"===t&&S((function(a){return Object(l.a)({},a,{taskTitleError:W(t,e,g.length)})})),"task_description"===t&&S((function(a){return Object(l.a)({},a,{taskDescriptionError:W(t,e,g.length)})})),"first"===t&&S((function(a){return Object(l.a)({},a,{firstNameError:W(t,e,g.length)})})),"last"===t&&S((function(a){return Object(l.a)({},a,{lastNameError:W(t,e,g.length)})}))},resetErrors:function(){return S($)},setBoardOrderState:function(e){te.current=e},userLoginAuth:function(e){fetch("".concat(Q,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(e){if(console.warn("result",e),e.token){var t=new Date;localStorage.setItem("login",JSON.stringify({login:!0,token:e.token,birthDate:t.getTime(),tokenLife:1e3*G.a.decode(e.token).exp-t.getTime(),expiryDate:1e3*G.a.decode(e.token).exp}))}else localStorage.setItem("login",JSON.stringify({login:!1,error:{message:e.message,description:e.description}}));var a=JSON.parse(localStorage.getItem("login"));a&&a.token&&v(!0)}))})).catch((function(){return console.log("error occurred")}))},swapTasks:{swapKanbanTasks:function(e){var t=e.target.id,a=e.target.getAttribute("name"),r=e.target.getAttribute("board");h((function(e){return Object(d.a)(e).map((function(e){if(e.name===r){var n=e.tasks.findIndex((function(e){return e.id===t})),o=U(e.tasks,n,"up"===a?n-1:n+1);return Object(l.a)({},e,{tasks:o})}return e}))}))},swapPriorityTasks:ae},swapPriorityTasks:ae,filterPriorityTasks:function(){A(Z),g.map((function(e){return e.tasks.forEach((function(e){return e.task_priority?A((function(t){return t.map((function(t){return"high"===t.priority_level?Object(l.a)({},t,{tasks:t.tasks.concat(Object(l.a)({},e,{location:"priority_list",priority_level:"high"}))}):t}))})):A((function(t){return t.map((function(t){return"low"===t.priority_level?Object(l.a)({},t,{tasks:t.tasks.concat(Object(l.a)({},e,{location:"priority_list",priority_level:"low"}))}):t}))}))}))})),ee({kanban_board:!1,priority_board:!0})},toggleEditModal:function(){return D(!P)},findTaskForEdit:function(e){var t=e.target.getAttribute("name"),a=e.target.id;a&&R(g.find((function(e){return e.name===t})).tasks.find((function(e){return e.id===a}))),D(!P)},resetMainKanbanView:function(){return ee({kanban_board:!0,priority_board:!1})}},oe={userLogin:O,boards:g,loading:c,priorityTasks:F,boardMessage:a,errors:N,boardsSchema:C,searchEditTask:K,modalButtonClick:P,panelControlButtons:X};return n.a.createElement(H,Object.assign({},ne,oe))},ee=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(X,null))},te={position:s.b.TOP_CENTER,timeout:5e3,offset:"20px",containerStyle:{zIndex:9999},transition:s.c.SCALE},ae=a(136);i.a.render(n.a.createElement(s.a,Object.assign({template:ae.a},te),n.a.createElement(ee,null)),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.0f893beb.chunk.js.map