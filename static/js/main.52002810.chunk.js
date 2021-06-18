(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{11:function(t,e,n){t.exports={contactItem:"ContactsListItem_contactItem__2qbA7",buttonDel:"ContactsListItem_buttonDel__1eOJv"}},13:function(t,e,n){t.exports={container:"Container_container__39GVS"}},14:function(t,e,n){t.exports={contactList:"ContactsList_contactList__3VhLY"}},20:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(20),n(15)),s=n(4),u=n(5),d=n(6),l=n(8),m=n(7),b=n(2),h=n.n(b),j=n(9),f=n.n(j),p=n(0),C={name:"",number:""},v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=f.a.generate(),t.numberInputId=f.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n={id:f.a.generate(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState(C)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleInputChange,id:this.nameInputId})]}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleInputChange,id:this.numberInputId})]}),Object(p.jsx)("button",{className:O.button,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component);v.PropsType={onSubmit:h.a.func.isRequired};var O=v,x=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},g=n(13),I=n.n(g),y=function(t){var e=t.children;return Object(p.jsx)("div",{className:I.a.container,children:e})},S=n(11),L=n.n(S),D=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(p.jsxs)("li",{className:L.a.contactItem,children:[n,": ",a,Object(p.jsx)("button",{className:L.a.buttonDel,type:"submit",onClick:function(){return c(e)},children:"Delete"})]})};D.prototype={id:h.a.number.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired,onDeleteContact:h.a.func.isRequired};var _=D,k=n(14),q=n.n(k),A=function(t){var e=t.findContact,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:q.a.contactList,children:e().map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)(_,{id:e,name:a,number:c,onDeleteContact:n},e)}))})};A.prototype={findContact:h.a.func.isRequired,onDeleteContact:h.a.func.isRequired};var N=A,w=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Endy Rhoads",number:"454-67-34"},{id:"id-2",name:"Cliff Burton",number:"778-45-34"},{id:"id-3",name:"Eddie Van Halen",number:"787-23-77"},{id:"id-4",name:"Chuck Schuldiner",number:"366-45-20"}],filter:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.addContact=function(e){t.hasContacts(e.name)?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.hasContacts=function(e){return t.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===e.toLocaleLowerCase()}))},t.findContact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLocaleLowerCase();return n.length?a.filter((function(t){return t.name.toLowerCase().includes(c)})):a},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(p.jsxs)(y,{children:[Object(p.jsx)("h1",{children:"PhoneBook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{value:this.state.filter,onChange:this.handleChange}),Object(p.jsx)(N,{findContact:this.findContact,onDeleteContact:this.deleteContact})]})]})}}]),n}(c.a.Component);n(32);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.52002810.chunk.js.map