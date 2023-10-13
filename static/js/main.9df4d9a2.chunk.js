(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(9),r=c.n(s),n=(c(14),c(15),c(6)),i=c(3),o=c(7),l=c(1),d=c.n(l),j=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),u=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=c(0),h=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=u.find((function(t){return t.id===e.categoryId})),c=j.find((function(e){return e.id===t.ownerId}));return{product:Object(o.a)({},e),category:Object(o.a)({},t),user:Object(o.a)({},c),sortUser:c.id,sortCategory:t.id}})),f="id",x="product",m="category",O="user",p=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],p=o[1],y=Object(a.useState)([]),g=Object(i.a)(y,2),N=g[0],w=g[1],k=Object(a.useState)(f),C=Object(i.a)(k,2),I=C[0],v=C[1],S=Object(a.useState)(!1),P=Object(i.a)(S,2),U=P[0],A=P[1],B=Object(n.a)(h),F=Object(n.a)(j),J=Object(n.a)(u);if(c&&c>0&&c<=F.length&&(B=B.filter((function(e){return e.sortUser===c}))),l){var M=l.trim().toLowerCase();B=B.filter((function(e){return e.product.name.toLowerCase().includes(M)}))}N.length&&(B=B.filter((function(e){return N.includes(e.sortCategory)}))),I&&B.sort((function(e,t){var c;switch(I){case f:c=e.product.id-t.product.id;break;case x:c=e.product.name.localeCompare(t.product.name);break;case m:c=e.sortCategory-t.sortCategory;break;case O:c=e.sortUser-t.sortUser;break;default:return 0}return U?-c:c}));return Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{"data-cy":"FilterAllUsers",onClick:function(){return s(0)},href:"#/",className:d()({"is-active":0===c}),children:"All"}),F.map((function(e){return Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){return s(e.id)},className:d()({"is-active":c===e.id}),children:"user ".concat(e.id)},e.id)}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:l,onChange:function(e){return p(e.currentTarget.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),""!==l&&Object(b.jsx)("span",{className:"icon is-right",children:Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return p("")}})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:d()("button is-success mr-6",{"is-outlined":N.length}),onClick:function(){return w([])},children:"All"}),J.map((function(e){return Object(b.jsx)("a",{"data-cy":"Category",className:d()("button mr-2 my-1",{"is-info":N.includes(e.id)}),href:"#/",onClick:function(){N.includes(e.id)?w((function(t){return t.filter((function(t){return t!==e.id}))})):w((function(t){return t.concat(e.id)}))},children:"category ".concat(e.id)})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(0),p(""),w([]),v(f),A(!1)},children:"Reset all filters"})})]})}),Object(b.jsx)("div",{className:"box table-container",children:B.length?Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",onClick:function(){I!==f?v(f):I!==f||U?(v(f),A(!1)):A(!0)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":I!==f},{"fa-sort-up":I===f&&U},{"fa-sort-down":I===f&&!U})})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",onClick:function(){I!==x?v(x):I!==x||U?(v(f),A(!1)):A(!0)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":I!==x},{"fa-sort-up":I===x&&U},{"fa-sort-down":I===x&&!U})})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",onClick:function(){I!==m?v(m):I!==m||U?(v(f),A(!1)):A(!0)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":I!==m},{"fa-sort-up":I===m&&U},{"fa-sort-down":I===m&&!U})})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",onClick:function(){I!==O?v(O):I!==O||U?(v(f),A(!1)):A(!0)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort":I!==O},{"fa-sort-up":I===O&&U},{"fa-sort-down":I===O&&!U})})})})]})})]})}),Object(b.jsx)("tbody",{children:B.map((function(e){var t=e.product,c=e.category,a=e.user;return Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t.id}),Object(b.jsx)("td",{"data-cy":"ProductName",children:t.name}),Object(b.jsxs)("td",{"data-cy":"ProductCategory",children:[c.icon," - ",c.title]}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-danger":"f"===a.sex},{"has-text-link":"m"===a.sex}),children:a.name})]},t.id)}))})]}):Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};r.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9df4d9a2.chunk.js.map