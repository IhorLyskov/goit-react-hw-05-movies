"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[780],{1780:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,c,a,i,u,o=e(885),s=e(2791),f=e(7689),p=e(9086),h=e(168),l=e(6444),d=l.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  max-width: 1200px;\n  margin: 0 auto;\n  flex-wrap: wrap;\n"]))),m=l.ZP.li(c||(c=(0,h.Z)(["\n  text-align: center;\n  margin: ","px;\n  width: 210px;\n"])),(function(n){return n.theme.space[3]})),g=l.ZP.img(a||(a=(0,h.Z)(["\n  display: block;\n  width: 100%;\n  height: 320px;\n"]))),x=l.ZP.p(i||(i=(0,h.Z)(["\n  margin: ","px;\n"])),(function(n){return n.theme.space[1]})),Z=l.ZP.p(u||(u=(0,h.Z)(["\n  margin: ","px;\n"])),(function(n){return n.theme.space[1]})),w=e(4401),v=e(184),b=function(n){var t=n.casting;return(0,v.jsx)(d,{children:t.map((function(n){var t=n.cast_id,e=n.profile_path,r=n.original_name,c=n.character;return(0,v.jsxs)(m,{children:[(0,v.jsx)(g,{src:e?"https://image.tmdb.org/t/p/w342".concat(e):w,alt:r}),(0,v.jsx)(x,{children:r}),(0,v.jsx)(Z,{children:"Character: ".concat(c)})]},t)}))})},y=e(966),P=e(7734),j=e(4653),_=function(){var n=(0,s.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],c=(0,s.useState)(!1),a=(0,o.Z)(c,2),i=a[0],u=a[1],h=(0,s.useState)(!1),l=(0,o.Z)(h,2),d=l[0],m=l[1],g=(0,f.UO)().id;return(0,s.useEffect)((function(){(0,j.Z)()}),[e]),(0,s.useEffect)((function(){u(!0),(0,p.IQ)(g).then((function(n){r(n),m(!1)})).catch((function(){return m(!0)})).finally((function(){return u(!1)}))}),[g]),(0,v.jsxs)(v.Fragment,{children:[i&&(0,v.jsx)(y.Z,{}),d&&!i&&(0,v.jsx)(P.B,{children:"Net error! Repeat please..."}),!d&&!i&&(!e||0===e.length)&&(0,v.jsx)(P.j,{children:"No cast information"}),!d&&!i&&e&&e.length&&(0,v.jsx)(b,{casting:e})]})}},7734:function(n,t,e){e.d(t,{B:function(){return u},j:function(){return o}});var r,c,a=e(168),i=e(6444),u=i.ZP.p(r||(r=(0,a.Z)(["\n  text-align: center;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.red})),o=i.ZP.p(c||(c=(0,a.Z)(["\n  text-align: center;\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}))},9086:function(n,t,e){e.d(t,{IQ:function(){return p},Jh:function(){return l},TP:function(){return s},z1:function(){return u}});var r=e(5861),c=e(7757),a=e.n(c),i=e(1044);function u(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/search/movie?&query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3/",i.ZP.defaults.params={api_key:"59b490478b7d8f1129f5bb9350f6c53c"}},4653:function(n,t){t.Z=function(){window.scrollTo(0,0),window.scrollBy({top:2*window.screen.availHeight/3,behavior:"smooth"})}},4401:function(n,t,e){n.exports=e.p+"static/media/noImage.b08e898cdbdff3a9ecc0.png"}}]);
//# sourceMappingURL=780.f9e18a32.chunk.js.map