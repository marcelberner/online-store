"use strict";(self.webpackChunksklep_internetowy=self.webpackChunksklep_internetowy||[]).push([[890],{1309:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(184),u=function(e){return(0,s.jsx)("input",{onClick:e.action,className:"submit-button ".concat("small"===e.size&&"submit-button--small"," ").concat("large"===e.size&&"submit-button--large"," ").concat("medium"===e.size&&"submit-button--medium"),type:"submit",value:e.text})}},7890:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var s=n(1309),u=n(6030),a=n(2791),i=n(3053),r=n(184),o=function(){var e=(0,u.v9)((function(e){return e.userAuth.token})),t=(0,i.Z)().dataRequest,n=(0,a.useRef)(),o=(0,a.useRef)();return(0,r.jsx)("section",{className:"questions",children:(0,r.jsxs)("form",{className:"questions__form",children:[(0,r.jsx)("input",{type:"text",className:"questions__input",placeholder:"Temat",ref:n}),(0,r.jsx)("textarea",{className:"questions__input questions__input--textarea",placeholder:"Wiadomo\u015b\u0107",ref:o}),(0,r.jsx)(s.Z,{text:"wy\u015blij",size:"medium",action:function(s){s.preventDefault(),t({method:"POST",database:"messages",body:{userId:e,topic:n.current.value,description:o.current.value}}),n.current.value="",o.current.value=""}})]})})}}}]);
//# sourceMappingURL=890.4498c8da.chunk.js.map