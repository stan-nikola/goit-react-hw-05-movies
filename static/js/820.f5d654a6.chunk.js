"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{6492:function(n,t,e){e.d(t,{Hp:function(){return p},Ll:function(){return s},_l:function(){return h},vm:function(){return f}});var r,c,o,a,i=e(168),u=e(8789),s=u.ZP.h2(r||(r=(0,i.Z)(["\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n"]))),p=u.ZP.li(c||(c=(0,i.Z)(["\n  margin: 0;\n  padding: 0;\n  max-width: 120px;\n  color: white;\n\n  list-style: none;\n  width: 150px;\n  background-color: #d4cedf4a;\n  gap: 20px;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n    box-shadow: 23px -36px 55px -17px rgba(255, 107, 8, 0.76);\n  }\n"]))),f=u.ZP.img(o||(o=(0,i.Z)(["\n  margin: 0;\n  object-fit: cover;\n  height: 200px;\n"]))),h=u.ZP.p(a||(a=(0,i.Z)(["\n  padding: 5px 5px;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  span {\n    font-size: 12px;\n    font-weight: 400;\n  }\n"])))},820:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,c=e(9439),o=e(2791),a=e(7689),i=e(7412),u=e(6492),s=e(8825),p=e(168),f=e(8789).ZP.li(r||(r=(0,p.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),h=e(184),l=function(){var n=(0,a.bx)(),t=(0,c.Z)(n,1)[0],e=(0,o.useState)(null),r=(0,c.Z)(e,2),p=r[0],l=r[1];if((0,o.useEffect)((function(){(0,i.fP)(t,"reviews").then((function(n){return l(n.results)}))}),[t]),p)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Ll,{children:"Reviews"}),(0,h.jsx)(s.Z,{as:"ul",color:"white",children:p.length>0?p.map((function(n){return(0,h.jsxs)(f,{children:[(0,h.jsxs)("h3",{children:["Author:",n.author]}),(0,h.jsx)("p",{children:n.content})]},n.id)})):(0,h.jsx)(u.Ll,{children:"We don't have any reviews for this movie."})})]})}},7412:function(n,t,e){e.d(t,{E3:function(){return f},HS:function(){return u},fP:function(){return p},wr:function(){return s}});var r=e(5861),c=e(4687),o=e.n(c),a="62f46feb65c2319fb0db62c2c080ca35",i="https://api.themoviedb.org",u="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/3/trending/movie/day?api_key=").concat(a));case 3:return t=n.sent,e=t.json(),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r={},n.prev=1,""!==e){n.next=8;break}return n.next=5,fetch("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(a));case 5:r=n.sent,n.next=11;break;case 8:return n.next=10,fetch("".concat(i,"/3/movie/").concat(t,"/").concat(e,"?api_key=").concat(a));case 10:r=n.sent;case 11:return c=r.json(),n.abrupt("return",c);case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(a,"&query=").concat(t));case 3:return e=n.sent,r=e.json(),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=820.f5d654a6.chunk.js.map