(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},QeBL:function(t,e,n){"use strict";n.r(e);var r=n("wx14"),o=n("q1tI"),i=n.n(o),c=n("SEF9"),a=n("qKvR");i.a.createElement;e.default=function(t){var e=Object(r.a)({},t);return Object(a.a)("div",null,Object(a.a)("p",null,"Props from _app.tsx: ".concat(JSON.stringify(e))),Object(a.a)("p",null,"page process env: ".concat("PROD_TEST_PAGE_PROP")),Object(a.a)("br",null),Object(a.a)(c.a,{href:"/index/1"},Object(a.a)("a",null,"index/1")))}},SEF9:function(t,e,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),c=n.n(i),a=n("YFqc"),s=n.n(a),f=n("qKvR");c.a.createElement;e.a=function(t){var e=t.href,n=t.as,i=void 0===n?e:n,c=Object(o.a)(t,["href","as"]);return Object(f.a)(s.a,Object(r.a)({href:e,as:"".concat("/Nextjs_Ts_Eslint").concat(i)},c))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),c=n("Nsbk"),a=n("7W2i");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var l,p=u(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=f(n("nOHt"));function y(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var b=new Map,w=window.IntersectionObserver,O={};function g(){return l||(w?l=new w((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){a(f,t);var e,n=(e=f,function(){var t,n=c(e);if(s()){var r=c(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function f(t){var e;return r(this,f),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var c=t(o,i);return e=o,n=i,r=c,c}}((function(t,e){return{href:y(t),as:e?y(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),c=i.href,a=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(c)){var s=window.location.pathname;c=(0,h.resolve)(s,c),a=a?(0,h.resolve)(s,a):c,t.preventDefault();var f=e.props.scroll;null==f&&(f=a.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](c,a,{shallow:e.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(f,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=g();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),O[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),c={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(c.href=o||r),p.default.cloneElement(i,c)}}]),f}(p.Component);e.default=m}},[["/EDR",0,2,1,3]]]);