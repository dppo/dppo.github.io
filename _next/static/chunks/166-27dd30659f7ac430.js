(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{227:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=function(t,e,n,r){return!1},("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9749:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(6495).Z,i=n(2648).Z,s=n(1598).Z,o=n(7273).Z,a=s(n(7294)),u=i(n(3121)),l=n(2675),c=n(139),f=n(8730);n(7238);var p=i(n(9824));let d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(t){return void 0!==t.default}function g(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function y(t,e,n,i,s,o,a){if(!t||t["data-loaded-src"]===e)return;t["data-loaded-src"]=e;let u="decode"in t?t.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(t.parentNode){if("blur"===n&&o(!0),null==i?void 0:i.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let a=!1,u=!1;i.current(r({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>a,isPropagationStopped:()=>u,persist:()=>{},preventDefault:()=>{a=!0,e.preventDefault()},stopPropagation:()=>{u=!0,e.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(t)}})}let m=a.forwardRef((t,e)=>{var{imgAttributes:n,heightInt:i,widthInt:s,qualityInt:u,className:l,imgStyle:c,blurStyle:f,isLazy:p,fill:d,placeholder:h,loading:g,srcString:m,config:v,unoptimized:b,loader:w,onLoadRef:C,onLoadingCompleteRef:k,setBlurComplete:E,setShowAltText:S,onLoad:P,onError:O}=t,_=o(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=p?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},_,n,{width:s,height:i,decoding:"async","data-nimg":d?"fill":"1",className:l,loading:g,style:r({},c,f),ref:a.useCallback(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(O&&(t.src=t.src),t.complete&&y(t,m,h,C,k,E,b))},[m,h,C,k,E,O,b,e]),onLoad:t=>{let e=t.currentTarget;y(e,m,h,C,k,E,b)},onError:t=>{S(!0),"blur"===h&&E(!0),O&&O(t)}})))}),v=a.forwardRef((t,e)=>{let n,i;var s,{src:y,sizes:v,unoptimized:b=!1,priority:w=!1,loading:C,className:k,quality:E,width:S,height:P,fill:O,style:_,onLoad:j,onLoadingComplete:T,placeholder:x="empty",blurDataURL:L,layout:M,objectFit:I,objectPosition:B,lazyBoundary:A,lazyRoot:R}=t,z=o(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=a.useContext(f.ImageConfigContext),D=a.useMemo(()=>{let t=d||N||c.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),n=t.deviceSizes.sort((t,e)=>t-e);return r({},t,{allSizes:e,deviceSizes:n})},[N]),q=z,F=q.loader||p.default;delete q.loader;let H="__next_img_default"in F;if(H){if("custom"===D.loader)throw Error('Image with src "'.concat(y,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=F;F=t=>{let{config:e}=t,n=o(t,["config"]);return Z(n)}}if(M){"fill"===M&&(O=!0);let U={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];U&&(_=r({},_,U));let W={responsive:"100vw",fill:"100vw"}[M];W&&!v&&(v=W)}let G="",K=g(S),V=g(P);if("object"==typeof(s=y)&&(h(s)||void 0!==s.src)){let J=h(y)?y.default:y;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,i=J.blurHeight,L=L||J.blurDataURL,G=J.src,!O){if(K||V){if(K&&!V){let Y=K/J.width;V=Math.round(J.height*Y)}else if(!K&&V){let $=V/J.height;K=Math.round(J.width*$)}}else K=J.width,V=J.height}}let Q=!w&&("lazy"===C||void 0===C);((y="string"==typeof y?y:G).startsWith("data:")||y.startsWith("blob:"))&&(b=!0,Q=!1),D.unoptimized&&(b=!0),H&&y.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0);let[X,tt]=a.useState(!1),[te,tn]=a.useState(!1),tr=g(E),ti=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:B}:{},te?{}:{color:"transparent"},_),ts="blur"===x&&L&&!X?{backgroundSize:ti.objectFit||"cover",backgroundPosition:ti.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:K,heightInt:V,blurWidth:n,blurHeight:i,blurDataURL:L}),'")')}:{},to=function(t){let{config:e,src:n,unoptimized:r,width:i,quality:s,sizes:o,loader:a}=t;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(t,e,n){let{deviceSizes:r,allSizes:i}=t;if(n){let s=/(^|\s)(1?\d?\d)vw/g,o=[];for(let a;a=s.exec(n);a)o.push(parseInt(a[2]));if(o.length){let u=.01*Math.min(...o);return{widths:i.filter(t=>t>=r[0]*u),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof e)return{widths:r,kind:"w"};let l=[...new Set([e,2*e].map(t=>i.find(e=>e>=t)||i[i.length-1]))];return{widths:l,kind:"x"}}(e,i,o),c=u.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:u.map((t,r)=>"".concat(a({config:e,src:n,quality:s,width:t})," ").concat("w"===l?t:r+1).concat(l)).join(", "),src:a({config:e,src:n,quality:s,width:u[c]})}}({config:D,src:y,unoptimized:b,width:K,quality:tr,sizes:v,loader:F}),ta=y,tu={imageSrcSet:to.srcSet,imageSizes:to.sizes,crossOrigin:q.crossOrigin},tl=a.useRef(j);a.useEffect(()=>{tl.current=j},[j]);let tc=a.useRef(T);a.useEffect(()=>{tc.current=T},[T]);let tf=r({isLazy:Q,imgAttributes:to,heightInt:V,widthInt:K,qualityInt:tr,className:k,imgStyle:ti,blurStyle:ts,loading:C,config:D,fill:O,unoptimized:b,placeholder:x,loader:F,srcString:ta,onLoadRef:tl,onLoadingCompleteRef:tc,setBlurComplete:tt,setShowAltText:tn},q);return a.default.createElement(a.default.Fragment,null,a.default.createElement(m,Object.assign({},tf,{ref:e})),w?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+to.src+to.srcSet+to.sizes,rel:"preload",as:"image",href:to.srcSet?void 0:to.src},tu))):null)});e.default=v,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1551:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(2648).Z,i=n(7273).Z,s=r(n(7294)),o=n(1003),a=n(7795),u=n(4465),l=n(2692),c=n(8245),f=n(9246),p=n(227),d=n(3468);let h=new Set;function g(t,e,n,r){if(o.isLocalURL(e)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in t?t.locale:void 0,s=e+"%"+n+"%"+i;if(h.has(s))return;h.add(s)}Promise.resolve(t.prefetch(e,n,r)).catch(t=>{})}}function y(t){return"string"==typeof t?t:a.formatUrl(t)}let m=s.default.forwardRef(function(t,e){let n,r;let{href:a,as:h,children:m,prefetch:v,passHref:b,replace:w,shallow:C,scroll:k,locale:E,onClick:S,onMouseEnter:P,onTouchStart:O,legacyBehavior:_=!1}=t,j=i(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,_&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));let T=!1!==v,x=s.default.useContext(l.RouterContext),L=s.default.useContext(c.AppRouterContext),M=null!=x?x:L,I=!x,{href:B,as:A}=s.default.useMemo(()=>{if(!x){let t=y(a);return{href:t,as:h?y(h):t}}let[e,n]=o.resolveHref(x,a,!0);return{href:e,as:h?o.resolveHref(x,h):n||e}},[x,a,h]),R=s.default.useRef(B),z=s.default.useRef(A);_&&(r=s.default.Children.only(n));let N=_?r&&"object"==typeof r&&r.ref:e,[D,q,F]=f.useIntersection({rootMargin:"200px"}),H=s.default.useCallback(t=>{(z.current!==A||R.current!==B)&&(F(),z.current=A,R.current=B),D(t),N&&("function"==typeof N?N(t):"object"==typeof N&&(N.current=t))},[A,N,B,F,D]);s.default.useEffect(()=>{M&&q&&T&&g(M,B,A,{locale:E})},[A,B,q,E,T,null==x?void 0:x.locale,M]);let Z={ref:H,onClick(t){_||"function"!=typeof S||S(t),_&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),M&&!t.defaultPrevented&&function(t,e,n,r,i,a,u,l,c,f){let{nodeName:p}=t.currentTarget,d="A"===p.toUpperCase();if(d&&(function(t){let{target:e}=t.currentTarget;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)||!o.isLocalURL(n)))return;t.preventDefault();let h=()=>{"beforePopState"in e?e[i?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}):e[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?s.default.startTransition(h):h()}(t,M,B,A,w,C,k,E,I,T)},onMouseEnter(t){_||"function"!=typeof P||P(t),_&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),M&&(T||!I)&&g(M,B,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(t){_||"function"!=typeof O||O(t),_&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(t),M&&(T||!I)&&g(M,B,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!_||b||"a"===r.type&&!("href"in r.props)){let U=void 0!==E?E:null==x?void 0:x.locale,W=(null==x?void 0:x.isLocaleDomain)&&p.getDomainLocale(A,U,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);Z.href=W||d.addBasePath(u.addLocale(A,U,null==x?void 0:x.defaultLocale))}return _?s.default.cloneElement(r,Z):s.default.createElement("a",Object.assign({},j,Z),n)});e.default=m,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){let{rootRef:e,rootMargin:n,disabled:u}=t,l=u||!s,[c,f]=r.useState(!1),[p,d]=r.useState(null);r.useEffect(()=>{if(s){if(!l&&!c&&p&&p.tagName){let t=function(t,e,n){let{id:r,observer:i,elements:s}=function(t){let e;let n={root:t.root||null,margin:t.rootMargin||""},r=a.find(t=>t.root===n.root&&t.margin===n.margin);if(r&&(e=o.get(r)))return e;let i=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{let e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)})},t);return e={id:n,observer:s,elements:i},a.push(n),o.set(n,e),e}(n);return s.set(t,e),i.observe(t),function(){if(s.delete(t),i.unobserve(t),0===s.size){i.disconnect(),o.delete(r);let e=a.findIndex(t=>t.root===r.root&&t.margin===r.margin);e>-1&&a.splice(e,1)}}}(p,t=>t&&f(t),{root:null==e?void 0:e.current,rootMargin:n});return t}}else if(!c){let r=i.requestIdleCallback(()=>f(!0));return()=>i.cancelIdleCallback(r)}},[p,l,n,e,c]);let h=r.useCallback(()=>{f(!1)},[]);return[d,c,h]};var r=n(7294),i=n(4686);let s="function"==typeof IntersectionObserver,o=new Map,a=[];("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2675:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){let{widthInt:e,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:s}=t,o=r||e,a=i||n,u=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(t,e){"use strict";function n(t){let{config:e,src:n,width:r,quality:i}=t;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.__next_img_default=!0,e.default=n},9008:function(t,e,n){t.exports=n(3121)},5675:function(t,e,n){t.exports=n(9749)},1664:function(t,e,n){t.exports=n(1551)},8127:function(t,e,n){"use strict";var r=n(7294);e.Z=function(t){(0,r.useEffect)(t,[])}},2871:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(7294),i=n(8127),s=function(t){var e=(0,r.useRef)(t);e.current=t,(0,i.Z)(function(){return function(){return e.current()}})},o=function(t){var e=(0,r.useRef)(0),n=(0,r.useState)(t),i=n[0],o=n[1],a=(0,r.useCallback)(function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){o(t)})},[]);return s(function(){cancelAnimationFrame(e.current)}),[i,a]},a="undefined"!=typeof window,u=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=o({width:a?window.innerWidth:t,height:a?window.innerHeight:e}),i=n[0],s=n[1];return(0,r.useEffect)(function(){if(a){var t=function(){s({width:window.innerWidth,height:window.innerHeight})};return function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)}(window,"resize",t),function(){!function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}(window,"resize",t)}}},[]),i}},3614:function(t){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1),s=n(3),o=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),i.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){!this.typingComplete&&(this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this)))}},{key:"start",value:function(){!this.typingComplete&&this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),i=1;if(!0===this.pause.status){this.setPauseStatus(t,e,!0);return}this.timeout=setTimeout(function(){e=s.htmlParser.typeHtmlChars(t,e,n);var r,o=0,a=t.substr(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(r=1+(a=/\d+/.exec(a)[0]).length,o=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+r),n.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&!(e+ ++i>t.length););var u=t.substring(0,e),l=t.substring(u.length+1,e+i);t=u+l+t.substring(e+i+1),i--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},o)},r)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),(this.arrayPos!==this.strings.length-1||(this.complete(),!1!==this.loop&&this.curLoop!==this.loopCount))&&(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0===this.pause.status){this.setPauseStatus(t,e,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=s.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var i=n.strings[n.arrayPos+1];i&&r===i.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},r)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&!this.pause.status&&this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&!this.cursor&&(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),t}();e.default=o,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=(r=n(2))&&r.__esModule?r:{default:r},a=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"load",value:function(t,e,n){if("string"==typeof n?t.el=document.querySelector(n):t.el=n,t.options=i({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),s=r.length;if(s)for(var a=0;a<s;a+=1){var u=r[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(!(!t.autoInsertCss||!t.showCursor&&!t.fadeOut||document.querySelector("["+e+"]"))){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var r="";t.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=r,document.body.appendChild(n))}}}]),t}();e.default=a;var u=new a;e.initializer=u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var i="";for(i="<"===r?">":";";t.substr(e+1).charAt(0)!==i&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var i="";for(i=">"===r?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e}}]),t}();e.default=r;var i=new r;e.htmlParser=i}])}}]);