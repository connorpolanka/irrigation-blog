webpackJsonp([0x620f737b6699],{549:function(n,t){"use strict";function e(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function r(n){return Array.isArray(n)?n:Array.from(n)}function o(n){var t=new Date(n);if(!Number.isNaN(t.valueOf()))return t;var o=String(n).match(/\d+/g);if(null==o||o.length<=2)return t;var i=o.map(function(n){return parseInt(n)}),a=r(i),l=a[0],u=a[1],f=a.slice(2),c=[l,u-1].concat(e(f)),d=new Date(Date.UTC.apply(Date,e(c)));return d}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},550:function(n,t){"use strict";function e(n,t,e){return 1!==n&&(t+="s"),n+" "+t+" "+e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e},551:function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}function i(n,t){var e={};for(var r in n)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},c=function(){function n(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),p=e(1),s=o(p),m=e(550),h=r(m),g=e(549),y=r(g),v=s.Component,x=60,b=60*x,w=24*b,_=7*w,O=30*w,M=365*w,k=function(n){function t(){var n,e,r,o;a(this,t);for(var i=arguments.length,u=Array(i),f=0;f<i;f++)u[f]=arguments[f];return e=r=l(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(u))),r.isStillMounted=!1,r.tick=function(n){if(r.isStillMounted&&r.props.live){var t=(0,y.default)(r.props.date).valueOf();if(!t)return void console.warn("[react-timeago] Invalid Date provided");var e=r.props.now(),o=Math.round(Math.abs(e-t)/1e3),i=o<x?1e3:o<b?1e3*x:o<w?1e3*b:0,a=Math.min(Math.max(i,1e3*r.props.minPeriod),1e3*r.props.maxPeriod);a&&(r.timeoutId=setTimeout(r.tick,a)),n||r.forceUpdate()}},o=e,l(r,o)}return u(t,n),d(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(n){this.props.live===n.live&&this.props.date===n.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var n=this.props,t=n.date,e=(n.formatter,n.component),r=(n.live,n.minPeriod,n.maxPeriod,n.title),o=n.now,a=i(n,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),l=(0,y.default)(t).valueOf();if(!l)return null;var u=o(),d=Math.round(Math.abs(u-l)/1e3),p=l<u?"ago":"from now",m=d<x?[Math.round(d),"second"]:d<b?[Math.round(d/x),"minute"]:d<w?[Math.round(d/b),"hour"]:d<_?[Math.round(d/w),"day"]:d<O?[Math.round(d/_),"week"]:d<M?[Math.round(d/O),"month"]:[Math.round(d/M),"year"],g=c(m,2),v=g[0],k=g[1],E="undefined"==typeof r?"string"==typeof t?t:(0,y.default)(t).toISOString().substr(0,16).replace("T"," "):r,P="time"===e?Object.assign({},a,{dateTime:(0,y.default)(t).toISOString()}):a,j=h.default.bind(null,v,k,p);return s.createElement(e,f({},P,{title:E}),this.props.formatter(v,k,p,l,j))}}]),t}(v);k.displayName="TimeAgo",k.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:h.default,now:function(){return Date.now()}},t.default=k},53:function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t){return n.raw=t,n}t.__esModule=!0;var i=o(["\n  margin-bottom: 48px;\n  border: none;\n  border-top: 1px solid #555;\n  margin: 0 0 24px;\n  width: 100%;\n  height: 0;\n  box-sizing: content-box;\n"],["\n  margin-bottom: 48px;\n  border: none;\n  border-top: 1px solid #555;\n  margin: 0 0 24px;\n  width: 100%;\n  height: 0;\n  box-sizing: content-box;\n"]),a=e(4),l=r(a),u=l.default.hr(i);t.default=u,n.exports=t.default},54:function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function a(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function l(n,t){return n.raw=t,n}t.__esModule=!0;var u=l(['\n  padding-top: 10px;\n  list-style: none;\n  margin: 0;\n  & li a,\n  & li {\n    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: 700;\n    font-size: 11px;\n    font-weight: 600;\n    text-decoration: none;\n    display: inline-block;\n    color: #fff;\n  }\n  & > li + li:before {\n    padding: 0 8px;\n    color: #ccc;\n    content: "/\0a0";\n  }\n  & > li:last-child > a {\n    color: #777;\n    pointer-events: none;\n    cursor: default;\n  }\n  @media (min-width: 831px) {\n    float: right;\n  }\n  ',"\n"],['\n  padding-top: 10px;\n  list-style: none;\n  margin: 0;\n  & li a,\n  & li {\n    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: 700;\n    font-size: 11px;\n    font-weight: 600;\n    text-decoration: none;\n    display: inline-block;\n    color: #fff;\n  }\n  & > li + li:before {\n    padding: 0 8px;\n    color: #ccc;\n    content: "/\\00a0";\n  }\n  & > li:last-child > a {\n    color: #777;\n    pointer-events: none;\n    cursor: default;\n  }\n  @media (min-width: 831px) {\n    float: right;\n  }\n  ',"\n"]),f=l(["\n    & li a,\n    & li {\n      color: #444;\n    }\n  "],["\n    & li a,\n    & li {\n      color: #444;\n    }\n  "]),c=e(1),d=r(c),p=e(4),s=r(p),m=e(26),h=r(m),g=s.default.ol(u,function(n){return n.dark&&(0,p.css)(f)}),y=function(n){function t(){return o(this,t),i(this,n.apply(this,arguments))}return a(t,n),t.prototype.render=function(){var n=this.props.crumbs.map(function(n){return d.default.createElement("li",{key:n.name},d.default.createElement(h.default,{to:n.link},n.name))});return d.default.createElement(g,this.props,n)},t}(d.default.Component);t.default=y,n.exports=t.default},270:function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t){return n.raw=t,n}t.__esModule=!0,t.query=void 0;var i=o(["\n  height: fit-contents;\n  padding: 0;\n  background: #292929;\n  position: relative;\n  overflow: hidden;\n\n  & > div {\n    padding-top: 120px;\n    margin: auto;\n    max-width: 600px;\n  }\n"],["\n  height: fit-contents;\n  padding: 0;\n  background: #292929;\n  position: relative;\n  overflow: hidden;\n\n  & > div {\n    padding-top: 120px;\n    margin: auto;\n    max-width: 600px;\n  }\n"]),a=o(['\n  float: right;\n  list-style: none;\n  margin: 0;\n  & li a,\n  & li {\n    font-weight: 600;\n    text-transform: uppercase;\n    text-decoration: none;\n    display: inline-block;\n    color: #222;\n  }\n  & > li + li:before {\n    padding: 0 8px;\n    font-weight: 400;\n    color: #444;\n    content: "|";\n  }\n'],['\n  float: right;\n  list-style: none;\n  margin: 0;\n  & li a,\n  & li {\n    font-weight: 600;\n    text-transform: uppercase;\n    text-decoration: none;\n    display: inline-block;\n    color: #222;\n  }\n  & > li + li:before {\n    padding: 0 8px;\n    font-weight: 400;\n    color: #444;\n    content: "|";\n  }\n']),l=o(["\n  margin: 0 auto;\n  max-width: 960px;\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 5vh;\n  hr {\n    margin: 0 0 40px;\n  }\n"],["\n  margin: 0 auto;\n  max-width: 960px;\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 5vh;\n  hr {\n    margin: 0 0 40px;\n  }\n"]),u=o(["\n  margin-top: 0;\n  text-transform: capitalize;\n  color: #fff;\n"],["\n  margin-top: 0;\n  text-transform: capitalize;\n  color: #fff;\n"]),f=o(["\n  float: right;\n"],["\n  float: right;\n"]),c=o(["\n  text-transform: uppercase;\n  margin-top: .5em;\n  display: inline-block;\n"],["\n  text-transform: uppercase;\n  margin-top: .5em;\n  display: inline-block;\n"]),d=e(1),p=r(d),s=e(4),m=r(s),h=e(551),g=r(h),y=e(18),v=e(54),x=r(v),b=e(53),w=r(b),_=m.default.div(i),O=m.default.ol(a),M=m.default.div(l),k=m.default.h1(u),E=m.default.i(f),P=m.default.h5(c);t.default=function(n){var t=n.data,e=n.location,r=t.markdownRemark,o=[{name:"home",link:"/"},{name:"portfolio",link:"/#portfolio"},{name:r.frontmatter.title,link:e.pathname}],i=r.frontmatter.tags.map(function(n){return p.default.createElement("li",{key:n},n)});return p.default.createElement("div",null,p.default.createElement(_,null,p.default.createElement(y.Flex,{wrap:!0},p.default.createElement(y.Box,{px:2,width:[1,2/3,1/3]},p.default.createElement(k,null,r.frontmatter.title)),p.default.createElement(y.Box,{px:2,width:[1,2/3]},p.default.createElement(x.default,{crumbs:o})),p.default.createElement(y.Box,{px:2,width:[1]},p.default.createElement(w.default,null)))),p.default.createElement(M,null,p.default.createElement(P,null,r.timeToRead," min read"),p.default.createElement(O,null,i),p.default.createElement(w.default,null),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}}),p.default.createElement(E,null,"Posted: ",p.default.createElement(g.default,{date:r.frontmatter.date}))))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-81bbd9b4d023ffe7ae82.js.map