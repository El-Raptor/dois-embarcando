(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{6170:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(923)}])},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(7528),l=r(5456),a=r(4418);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let o=r(7677),u=r(4848),s=o._(r(6540)),c=r(6847),i=r(7785),f=r(2772),d=r(1278),p=r(6185),h=r(7644),b=r(6334),v=r(5157),_=r(296),j=r(1903),y=new Set;function m(e,t,r,n){if((0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(l))return;y.add(l)}e.prefetch(t,r,n).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let x=s.default.forwardRef(function(e,t){let r,o;let{href:f,as:y,children:x,prefetch:M=null,passHref:C,replace:N,shallow:k,scroll:O,locale:P,onClick:E,onMouseEnter:w,onTouchStart:I,legacyBehavior:R=!1}=e,L=a._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=x,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let S=s.default.useContext(h.RouterContext),T=!1!==M,{href:B,as:D}=s.default.useMemo(()=>{if(!S){let e=g(f);return{href:e,as:y?g(y):e}}let[e,t]=(0,c.resolveHref)(S,f,!0);return{href:e,as:y?(0,c.resolveHref)(S,y):t||e}},[S,f,y]),H=s.default.useRef(B),U=s.default.useRef(D);R&&(o=s.default.Children.only(r));let K=R?o&&"object"==typeof o&&o.ref:t,[A,q,F]=(0,b.useIntersection)({rootMargin:"200px"}),X=s.default.useCallback(e=>{(U.current!==D||H.current!==B)&&(F(),U.current=D,H.current=B),A(e)},[D,B,F,A]),z=(0,j.useMergedRef)(X,K);s.default.useEffect(()=>{S&&q&&T&&m(S,B,D,{locale:P})},[D,B,q,P,T,null==S?void 0:S.locale,S]);let W={ref:z,onClick(e){R||"function"!=typeof E||E(e),R&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,a,o,u){let{nodeName:s}=e.currentTarget;"A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,i.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==o||o;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:u,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})})())}(e,S,B,D,N,k,O,P)},onMouseEnter(e){R||"function"!=typeof w||w(e),R&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&m(S,B,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){R||"function"!=typeof I||I(e),R&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&m(S,B,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(D))W.href=D;else if(!R||C||"a"===o.type&&!("href"in o.props)){let e=void 0!==P?P:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,v.getDomainLocale)(D,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);W.href=t||(0,_.addBasePath)((0,p.addLocale)(D,e,null==S?void 0:S.defaultLocale))}return R?s.default.cloneElement(o,W):(0,u.jsx)("a",l._(n._({},L,W),{children:r}))});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(6540),l=r(4959),a="function"==typeof IntersectionObserver,o=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!a,[i,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(c||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},u.push(r),o.set(r,t),t}(r);return a.set(e,t),l.observe(e),function(){if(a.delete(e),l.unobserve(e),0===a.size){l.disconnect(),o.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!i){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,r,t,i,d.current]),[p,i,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let n=r(6540);function l(e,t){let r=(0,n.useRef)(()=>{}),l=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),l.current()):(r.current=a(e,n),l.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},923:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(7528),l=r(4848);r(3683);var a=r(6540),o=r(1106),u=r.n(o),s=r(6715),c=r(820),i=r.n(c);let f=()=>{let e=(0,s.useRouter)(),[t,r]=(0,a.useState)(e.pathname),n=e=>{r(e)};return(0,l.jsx)("nav",{className:i().navbar,children:(0,l.jsxs)("ul",{className:i().navbarList,children:[(0,l.jsx)("li",{className:i().navbarItem,children:(0,l.jsx)(u(),{href:"/",onClick:()=>n("/"),children:(0,l.jsx)("a",{className:"/"===t?i().active:"",children:"Home"})})}),(0,l.jsx)("li",{className:i().navbarItem,children:(0,l.jsx)(u(),{href:"/destinations",onClick:()=>n("/destinations"),children:(0,l.jsx)("a",{className:"/destinations"===t?i().active:"",children:"Destinos"})})}),(0,l.jsx)("li",{className:i().navbarItem,children:(0,l.jsx)(u(),{href:"/blog",onClick:()=>n("/blog"),children:(0,l.jsx)("a",{className:"/blog"===t?i().active:"",children:"Blog"})})}),(0,l.jsx)("li",{className:i().navbarItem,children:(0,l.jsx)(u(),{href:"/about-us",onClick:()=>n("/about-us"),children:(0,l.jsx)("a",{className:"/about-us"===t?i().active:"",children:"Sobre N\xf3s"})})}),(0,l.jsx)("li",{className:i().navbarItem,children:(0,l.jsx)(u(),{href:"/contact",onClick:()=>n("/contact"),children:(0,l.jsx)("a",{className:"/contact"===t?i().active:"",children:"Contato"})})})]})})},d=()=>(0,l.jsx)("header",{children:(0,l.jsx)(f,{})}),p=e=>{let{Component:t,pageProps:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{})," ",(0,l.jsx)(t,(0,n._)({},r))," "]})}},3683:()=>{},820:e=>{e.exports={navbar:"NavBar_navbar__Dr1qH","navbar-list":"NavBar_navbar-list__NubW4","navbar-item":"NavBar_navbar-item__5EdFY",active:"NavBar_active__ilgTe"}},1106:(e,t,r)=>{e.exports=r(6397)},6715:(e,t,r)=>{e.exports=r(8440)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(6170),t(8440))),_N_E=e.O()}]);