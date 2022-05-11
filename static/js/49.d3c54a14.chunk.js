"use strict";(self.webpackChunksklep_internetowy=self.webpackChunksklep_internetowy||[]).push([[49],{1309:function(a,t,e){e.d(t,{Z:function(){return n}});var s=e(184),n=function(a){return(0,s.jsx)("input",{onClick:a.action,className:"submit-button ".concat("small"===a.size&&"submit-button--small"," ").concat("large"===a.size&&"submit-button--large"," ").concat("medium"===a.size&&"submit-button--medium"),type:"submit",value:a.text})}},1049:function(a,t,e){e.r(t),e.d(t,{default:function(){return j}});var s=e(5861),n=e(7757),c=e.n(n),o=e(6030),r=e(6871),i=e(7120),d=e(3053),m=e(3495),u=e(3350),l=e(1309),p=e(885),h=e(2791),k=e(184),_=function(){var a=(0,h.useState)(!0),t=(0,p.Z)(a,2),e=t[0],s=t[1];return(0,k.jsxs)("div",{className:"promo-code",children:[(0,k.jsxs)("div",{className:"promo-code__title",onClick:function(){s(!e)},children:[(0,k.jsx)("span",{className:"promo-code__text",children:"Wpisz kod promocyjny"}),e?(0,k.jsx)("i",{className:"fa-solid fa-angle-down"}):(0,k.jsx)("i",{className:"fa-solid fa-angle-up"})]}),!e&&(0,k.jsx)("form",{children:(0,k.jsxs)("div",{className:"promo-code__container",children:[(0,k.jsx)("input",{type:"text",placeholder:"Wpisz kod promocyjny",className:"promo-code__input"}),(0,k.jsx)(l.Z,{size:"small",text:"Aktywuj"})]})})]})},x=function(a){return(0,k.jsx)("div",{className:"price-items ".concat(a.hide?"price-items--hide":""),children:a.cart.map((function(a,t){return(0,k.jsx)("div",{className:"price-items__item",children:(0,k.jsx)("span",{className:"price-items__text",children:"".concat(a.amount," x ").concat(a.price," z\u0142")})},t)}))})},j=function(){for(var a=(0,o.v9)((function(a){return a.orderData.deliveryMethod})),t=(0,o.v9)((function(a){return a.orderData.paymentMethod})),e=(0,o.v9)((function(a){return a.orderData.customerData})),n=(0,o.v9)((function(a){return a.orderData.totalPrice})),p=(0,o.v9)((function(a){return a.userData.userData})),h=(0,o.v9)((function(a){return a.userAuth.token})),j=(0,o.v9)((function(a){return a.userData.cart})),y=(0,r.s0)(),f=(0,o.I0)(),z=(0,d.Z)().dataRequest,v=(0,r.TH)(),w=0,N=0;N<j.length;N++)w+=parseFloat(j[N].price.replace(" ","").replace(",","."))*j[N].amount;var g=function(){var o=(0,s.Z)(c().mark((function s(){var o,r;return c().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=new Date,r="".concat(o.getFullYear(),"-").concat(o.getMonth()+1<10?"0"+(o.getMonth()+1):o.getMonth()+1,"-").concat(o.getDate()<10?"0"+o.getDate():o.getDate()),s.next=4,z({method:"POST",database:"orders",body:{userId:h,customerData:e,deliveryMethod:a,paymentMethod:t,totalPrice:n,status:"pending",date:r,products:j}});case 4:if(s.sent,!h){s.next=11;break}return s.next=8,z({method:"DELETE",database:"users/".concat(p.id,"/cart")});case 8:s.sent,s.next=12;break;case 11:f((0,u.hp)());case 12:f((0,m.W)()),y("/konto/historia-zamowien");case 14:case"end":return s.stop()}}),s)})));return function(){return o.apply(this,arguments)}}();return(0,k.jsx)("section",{className:"cart",children:(0,k.jsxs)("div",{className:"cart__container",children:[(0,k.jsx)("div",{className:"cart__header",children:(0,k.jsx)("h1",{className:"cart__title",children:"".concat("/koszyk"===v.pathname?"Tw\xf3j koszyk":"").concat("/koszyk/dostawa"===v.pathname?"Dostawa":"").concat("/koszyk/podsumowanie"===v.pathname?"Podsumowanie":"")})}),(0,k.jsx)("div",{className:"cart__progress ".concat("/koszyk"===v.pathname?"cart__progress--stage1":"").concat("/koszyk/dostawa"===v.pathname?"cart__progress--stage2":"").concat("/koszyk/podsumowanie"===v.pathname?"cart__progress--stage3":"")}),j.length>0?(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:"cart__content",children:[(0,k.jsx)(r.j3,{}),(0,k.jsxs)("div",{className:"cart__sumarry ".concat("/koszyk"!==v.pathname?"cart__sumarry--compact":""),children:[(0,k.jsx)("div",{className:"cart__button",children:(0,k.jsx)(l.Z,{size:"large",text:"".concat("/koszyk"===v.pathname?"Dostawa i p\u0142atno\u015b\u0107":"").concat("/koszyk/dostawa"===v.pathname?"Podsumowanie":"").concat("/koszyk/podsumowanie"===v.pathname?"P\u0142ac\u0119 i zamawiam":""),action:function(){"/koszyk"===v.pathname?(f((0,i.m1)(w)),y("/koszyk/dostawa")):"/koszyk/dostawa"===v.pathname?y("/koszyk/podsumowanie"):"/koszyk/podsumowanie"===v.pathname&&g()}})}),(0,k.jsxs)("div",{className:"cart__info ".concat("/koszyk"!==v.pathname?"cart__info--hide":""),children:[(0,k.jsx)("span",{className:"cart__text",children:"\u0141\u0105czna kwota:"}),(0,k.jsx)("span",{className:"cart__text",children:"".concat(w.toFixed(2)," z\u0142")})]}),(0,k.jsx)(x,{cart:j,hide:"/koszyk"!==v.pathname}),(0,k.jsx)("div",{className:"cart__promo ".concat("/koszyk"!==v.pathname?"cart__promo--hide":""),children:(0,k.jsx)(_,{})})]})]})}):(0,k.jsx)("h3",{className:"cart__allert",children:"Tw\xf3j koszyk jest pusty"})]})})}}}]);
//# sourceMappingURL=49.d3c54a14.chunk.js.map