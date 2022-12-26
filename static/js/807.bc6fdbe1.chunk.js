"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[807],{3330:function(n,t,r){r.d(t,{K:function(){return e}});var e={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},1588:function(n,t,r){r.d(t,{b:function(){return e}});var e=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},5807:function(n,t,r){r.r(t);var e=r(9439),o=r(2791),i=r(7689),a=r(8985),c=r.n(a),s=r(7412),u=r(8355),p=r(2558),l=r(3330),f=r(6492),h=r(1588),d=r(2362),x=r(184);t.default=function(){var n=(0,i.bx)(),t=(0,e.Z)(n,1)[0],r=(0,o.useState)(null),a=(0,e.Z)(r,2),g=a[0],b=a[1],m=(0,o.useState)(!0),v=(0,e.Z)(m,2),w=v[0],Z=v[1];if((0,o.useEffect)((function(){(0,s.fP)(t,"credits").then(b)}),[t]),(0,o.useEffect)((function(){Z(!0),setTimeout((function(){window.scrollTo({top:600,left:0,behavior:"smooth"}),Z(!1)}),300)}),[g]),g)return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.Ll,{children:"Cast"}),(0,x.jsxs)(u.x,{as:"ul",display:"flex",justifyContent:"center",flexWrap:"wrap",gridGap:20,bg:"#202021",children:[g.cast.length>0?g.cast.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,o=n.character;return(0,x.jsxs)(f.Hp,{children:[r?(0,x.jsx)(f.vm,{src:s.HS+r,alt:e,width:120,height:200}):(0,x.jsx)(f.vm,{src:p,alt:e}),(0,x.jsx)(f._l,{children:e}),(0,x.jsxs)(f._l,{children:["Character: ",(0,x.jsx)("span",{children:o})]})]},t)})):(0,x.jsx)(d.rb,{children:"We don't have any casts for this movie."}),(0,x.jsx)(f.eu,{type:"button",onClick:h.b,children:(0,x.jsx)(f.Ow,{})})]}),(0,x.jsx)(c(),{color:"red",loading:w,cssOverride:l.K,size:500,"aria-label":"Loading Spinner","data-testid":"loader"})]})}},6492:function(n,t,r){r.d(t,{Hp:function(){return h},Ll:function(){return f},Ow:function(){return g},_l:function(){return x},eu:function(){return b},vm:function(){return d}});var e,o,i,a,c,s,u=r(168),p=r(8789),l=r(2134),f=p.ZP.h2(e||(e=(0,u.Z)(["\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n"]))),h=p.ZP.li(o||(o=(0,u.Z)(["\n  margin: 0;\n  padding: 0;\n  max-width: 120px;\n  color: white;\n\n  list-style: none;\n  width: 150px;\n  background-color: #d4cedf4a;\n  gap: 20px;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n    box-shadow: 23px -36px 55px -17px rgba(255, 107, 8, 0.76);\n  }\n"]))),d=p.ZP.img(i||(i=(0,u.Z)(["\n  margin: 0;\n  object-fit: cover;\n  height: 200px;\n"]))),x=p.ZP.p(a||(a=(0,u.Z)(["\n  padding: 5px 5px;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  span {\n    font-size: 12px;\n    font-weight: 400;\n  }\n"]))),g=(0,p.ZP)(l.IaS)(c||(c=(0,u.Z)(["\n  rotate: 90deg;\n  width: 40px;\n  height: 40px;\n"]))),b=p.ZP.button(s||(s=(0,u.Z)(["\n  position: fixed;\n  bottom: 2%;\n  right: 5%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: red;\n  transition: shadow 250ms linear, color 250ms linear,\n    background-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    color: white;\n  }\n"])))},2362:function(n,t,r){r.d(t,{Mj:function(){return l},QZ:function(){return h},UI:function(){return f},Un:function(){return p},rb:function(){return d}});var e,o,i,a,c,s=r(168),u=r(8789),p=u.ZP.h2(e||(e=(0,s.Z)(["\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  color: white;\n"]))),l=u.ZP.input(o||(o=(0,s.Z)(["\n  min-width: 300px;\n  height: 30px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid white;\n  color: white;\n  transition: border-color 250ms linear;\n\n  &:hover,\n  &:focus {\n    border-color: red;\n  }\n"]))),f=u.ZP.form(i||(i=(0,s.Z)(["\n  position: relative;\n  margin-bottom: 30px;\n"]))),h=u.ZP.button(a||(a=(0,s.Z)(["\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  transform: translateY(-50%);\n\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: white;\n  transition: color 250ms linear;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),d=u.ZP.p(c||(c=(0,s.Z)(["\n  text-align: center;\n  color: white;\n  margin-bottom: 15px;\n  span {\n    font-weight: 700;\n    text-transform: capitalize;\n  }\n"])))},7412:function(n,t,r){r.d(t,{E3:function(){return l},HS:function(){return s},fP:function(){return p},wr:function(){return u}});var e=r(5861),o=r(4687),i=r.n(o),a="62f46feb65c2319fb0db62c2c080ca35",c="https://api.themoviedb.org",s="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(c,"/3/trending/movie/day?api_key=").concat(a));case 3:return t=n.sent,r=t.json(),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e={},n.prev=1,""!==r){n.next=8;break}return n.next=5,fetch("".concat(c,"/3/movie/").concat(t,"?api_key=").concat(a));case 5:e=n.sent,n.next=11;break;case 8:return n.next=10,fetch("".concat(c,"/3/movie/").concat(t,"/").concat(r,"?api_key=").concat(a));case 10:e=n.sent;case 11:return o=e.json(),n.abrupt("return",o);case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(a,"&query=").concat(t));case 3:return r=n.sent,e=r.json(),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},2558:function(n,t,r){n.exports=r.p+"static/media/actor-placeholder.85c62025af96b3223d78.jpg"}}]);
//# sourceMappingURL=807.bc6fdbe1.chunk.js.map