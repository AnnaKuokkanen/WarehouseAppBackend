(this.webpackJsonpwarehouse=this.webpackJsonpwarehouse||[]).push([[0],{76:function(e,c,t){},77:function(e,c,t){"use strict";t.r(c);var r=t(1),n=t(0),s=t(16),a=t.n(s),j=t(17),i=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Welcome to the Warehouse!"}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Choose a category of products"}),Object(r.jsx)("br",{})]})},o=t(82),d=function(e){var c=e.product;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:c.name}),Object(r.jsx)("br",{}),Object(r.jsxs)(o.a,{border:"info",style:{width:"50rem"},bg:"light",children:[Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(o.a.Title,{children:["Category: ",c.type]})}),Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(o.a.Title,{children:["Manufacturer: ",c.manufacturer]})}),Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(o.a.Title,{children:["Name: ",c.name]})}),Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(o.a.Title,{children:["Price: ",c.price]})}),Object(r.jsxs)(o.a.Body,{children:[Object(r.jsx)(o.a.Title,{children:"Available in colors:"}),c.color.map((function(e){return Object(r.jsx)(o.a.Title,{children:e},e)}))]})]})]})},l=function(e){var c=e.categoryName,t=e.products,s=Object(n.useState)([]),a=Object(j.a)(s,2),i=a[0],l=a[1];return i.length>0?Object(r.jsx)("div",{children:Object(r.jsx)(d,{product:i[0]})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:c}),t.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(o.a,{as:"a",onClick:function(){return function(e){var c=t.filter((function(c){return c.id===e}));console.log("Product is ",c),l(c.concat(c))}(e.id)},border:"info",style:{width:"25rem",cursor:"pointer"},children:[Object(r.jsxs)(o.a.Header,{children:["Manufacturer: ",e.manufacturer]}),Object(r.jsx)(o.a.Body,{children:Object(r.jsx)(o.a.Title,{children:e.name})})]}),Object(r.jsx)("br",{})]},e.id)}))]})},b=t(18),h=t.n(b),u=t(27),O=t(28),x=t.n(O),f=function(){var e=Object(u.a)(h.a.mark((function e(c){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/products/".concat(c),console.log("Url is ",t),e.next=4,x.a.get(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),p=t(19),m=t(6),v=t(80),k=t(81),g=t(79),y=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)([]),o=Object(j.a)(a,2),d=o[0],b=o[1],h=Object(n.useState)([]),u=Object(j.a)(h,2),O=u[0],x=u[1];return Object(n.useEffect)((function(){f("beanies").then((function(e){return s(e)})),f("gloves").then((function(e){return b(e)})),f("facemasks").then((function(e){return x(e)}))}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(v.a,{expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(r.jsx)(v.a.Brand,{href:"/",children:"Your Warehouse"}),Object(r.jsxs)(k.a,{className:"mr-auto",children:[Object(r.jsx)(k.a.Link,{href:"/",children:"Home"}),Object(r.jsx)(k.a.Link,{href:"beanies",children:"Beanies"}),Object(r.jsx)(k.a.Link,{href:"gloves",children:"Gloves"}),Object(r.jsx)(k.a.Link,{href:"facemasks",children:"Facemasks"})]})]}),Object(r.jsx)(p.a,{children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/beanies",children:Object(r.jsx)(l,{categoryName:"Beanies",products:t})}),Object(r.jsx)(m.a,{path:"/gloves",children:Object(r.jsx)(l,{categoryName:"Gloves",products:d})}),Object(r.jsx)(m.a,{path:"/facemasks",children:Object(r.jsx)(l,{categoryName:"Facemasks",products:O})}),Object(r.jsxs)(m.a,{path:"/",children:[Object(r.jsx)(i,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(p.b,{className:"link",to:"/beanies",children:Object(r.jsx)(g.a,{variant:"info",children:Object(r.jsx)("span",{children:"Beanies"})})}),Object(r.jsx)(p.b,{className:"link",to:"/gloves",children:Object(r.jsx)(g.a,{variant:"secondary",children:Object(r.jsx)("span",{children:"Gloves"})})}),Object(r.jsx)(p.b,{className:"link",to:"/facemasks",children:Object(r.jsx)(g.a,{variant:"dark",children:Object(r.jsx)("span",{children:"Facemasks"})})})]})]})]})})]})};t(76);a.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.8f8d7b19.chunk.js.map