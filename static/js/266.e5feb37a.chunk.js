"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{1317:function(e,n,t){t.d(n,{k:function(){return y}});var r,a,i,o,c=t(7689),s=t(8355),u=t(7412),l=t(168),f=t(8789),p=t(1087),d=f.ZP.h2(r||(r=(0,l.Z)(["\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n"]))),v=f.ZP.li(a||(a=(0,l.Z)(["\n  list-style: none;\n  width: 150px;\n  background-color: #d4cedf4a;\n  gap: 20px;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n    box-shadow: 23px -36px 55px -17px rgba(255, 107, 8, 0.76);\n  }\n"]))),h=(0,f.ZP)(p.rU)(i||(i=(0,l.Z)(["\n  text-decoration: none;\n"]))),m=f.ZP.p(o||(o=(0,l.Z)(["\n  text-align: center;\n  padding: 5px 7px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n"]))),g=t(184),y=function(e){var n=e.moviesArr,t=e.title,r=(0,c.TH)();if(n.results!==[])return(0,g.jsxs)(g.Fragment,{children:[t&&(0,g.jsx)(d,{children:t}),(0,g.jsx)(s.x,{as:"ul",padding:0,display:"flex",flexWrap:"wrap",justifyContent:"center",gridGap:20,children:n.map((function(e){var n=e.id,t=e.original_title,a=e.poster_path;return(0,g.jsx)(v,{children:(0,g.jsxs)(h,{to:"/movies/".concat(n),state:{from:r},children:[(0,g.jsx)("img",{src:u.HS+a,alt:t,width:150,height:220}),(0,g.jsx)(m,{children:t})]})},n)}))})]})}},3330:function(e,n,t){t.d(n,{K:function(){return r}});var r={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},1266:function(e,n,t){t.r(n);var r=t(9439),a=t(2791),i=t(7412),o=t(8985),c=t.n(o),s=t(1317),u=t(3330),l=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],f=(0,a.useState)(!0),p=(0,r.Z)(f,2),d=p[0],v=p[1];return(0,a.useEffect)((function(){(0,i.wr)().then((function(e){return o(e.results)})).finally(v(!0))}),[]),(0,a.useEffect)((function(){v(!1)}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.k,{title:"Trending today",moviesArr:t}),(0,l.jsx)(c(),{color:"red",loading:d,cssOverride:u.K,size:500,"aria-label":"Loading Spinner","data-testid":"loader"})]})}},7412:function(e,n,t){t.d(n,{E3:function(){return f},HS:function(){return s},fP:function(){return l},wr:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o="62f46feb65c2319fb0db62c2c080ca35",c="https://api.themoviedb.org",s="https://image.tmdb.org/t/p/w500",u=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/3/trending/movie/day?api_key=").concat(o));case 3:return n=e.sent,t=n.json(),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},e.prev=1,""!==t){e.next=8;break}return e.next=5,fetch("".concat(c,"/3/movie/").concat(n,"?api_key=").concat(o));case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,fetch("".concat(c,"/3/movie/").concat(n,"/").concat(t,"?api_key=").concat(o));case 10:r=e.sent;case 11:return a=r.json(),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(o,"&query=").concat(n));case 3:return t=e.sent,r=t.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},8985:function(e,n,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var a=Object.getOwnPropertyDescriptor(n,t);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,a)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return i(n,e),n},c=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var s=o(t(2791)),u=t(8945),l=(0,t(7074).createAnimation)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");n.default=function(e){var n=e.loading,t=void 0===n||n,a=e.color,i=void 0===a?"#000000":a,o=e.speedMultiplier,f=void 0===o?1:o,p=e.cssOverride,d=void 0===p?{}:p,v=e.height,h=void 0===v?35:v,m=e.width,g=void 0===m?4:m,y=e.radius,b=void 0===y?2:y,x=e.margin,w=void 0===x?2:x,_=c(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),j=r({display:"inherit"},d),O=function(e){return{backgroundColor:i,width:(0,u.cssValue)(g),height:(0,u.cssValue)(h),margin:(0,u.cssValue)(w),borderRadius:(0,u.cssValue)(b),display:"inline-block",animation:"".concat(l," ").concat(1/f,"s ").concat(.1*e,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return t?s.createElement("span",r({style:j},_),s.createElement("span",{style:O(1)}),s.createElement("span",{style:O(2)}),s.createElement("span",{style:O(3)}),s.createElement("span",{style:O(4)}),s.createElement("span",{style:O(5)})):null}},7074:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=void 0;n.createAnimation=function(e,n,t){var r="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return i&&i.insertRule(o,0),r}},8945:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.cssValue=n.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var n,r=(e.match(/^[0-9.]*/)||"").toString();n=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return t[a]?{value:n,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}n.parseLengthAndUnit=r,n.cssValue=function(e){var n=r(e);return"".concat(n.value).concat(n.unit)}},5861:function(e,n,t){function r(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var o=e.apply(n,t);function c(e){r(o,a,i,c,s,"next",e)}function s(e){r(o,a,i,c,s,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=266.e5feb37a.chunk.js.map