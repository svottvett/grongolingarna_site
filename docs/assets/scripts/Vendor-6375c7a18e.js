!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}([,,function(ce,oe,le){var ue,e,t,i,n,r,s,a,c,o;e=window,o=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=i.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)},i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s)),function(e,s,t){"use strict";var i,l,o;s.createElement("picture");var C={},a=!1,n=function(){},r=s.createElement("img"),u=r.getAttribute,d=r.setAttribute,f=r.removeAttribute,c=s.documentElement,p={},x={algorithm:""},m=navigator.userAgent,S=/rident/.test(m)||/ecko/.test(m)&&m.match(/rv\:(\d+)/)&&35<RegExp.$1,M="currentSrc",h=/\s+\+?\d+(e\d+)?w/,A=/(\([^)]+\))?\s*(.+)/,g=e.picturefillCFG,v="font-size:100%!important;",y=!0,z={},b={},w=e.devicePixelRatio,E={px:1,in:96},T=s.createElement("a"),L=!1,R=/^[ \t\n\r\u000c]+/,P=/^[, \t\n\r\u000c]+/,B=/^[^ \t\n\r\u000c]+/,D=/[,]+$/,W=/^\d+$/,_=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,k=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},N=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function $(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var I,F,O,U,H,Q,G,j,q,V,K,J,X,Y,Z,ee,te,ne=(I=/^([\d\.]+)(em|vw|px)$/,F=N(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in z))if(z[e]=!1,t&&(n=e.match(I)))z[e]=n[1]*E[n[2]];else try{z[e]=new Function("e",F(e))(E)}catch(e){}return z[e]}),re=function(e,t){return e.w?(e.cWidth=C.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ie=function(e){if(a){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||C.qsa(i.context||s,i.reevaluate||i.reselect?C.sel:C.selShort)).length){for(C.setupRun(i),L=!0,n=0;n<r;n++)C.fillImg(t[n],i);C.teardownRun(i)}}};function se(e,t){return e.res-t.res}function ae(e,t){var n,r,i;if(e&&t)for(i=C.parseSet(t),e=C.makeUrl(e),n=0;n<i.length;n++)if(e===C.makeUrl(i[n].url)){r=i[n];break}return r}e.console&&console.warn,M in r||(M="src"),p["image/jpeg"]=!0,p["image/gif"]=!0,p["image/png"]=!0,p["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),C.ns=("pf"+(new Date).getTime()).substr(0,9),C.supSrcset="srcset"in r,C.supSizes="sizes"in r,C.supPicture=!!e.HTMLPictureElement,C.supSrcset&&C.supPicture&&!C.supSizes&&(O=s.createElement("img"),r.srcset="data:,a",O.src="data:,a",C.supSrcset=r.complete===O.complete,C.supPicture=C.supSrcset&&C.supPicture),C.supSrcset&&!C.supSizes?(U="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Q=function(){2===H.width&&(C.supSizes=!0),l=C.supSrcset&&!C.supSizes,a=!0,setTimeout(ie)},(H=s.createElement("img")).onload=Q,H.onerror=Q,H.setAttribute("sizes","9px"),H.srcset=U+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",H.src=U):a=!0,C.selShort="picture>img,img[srcset]",C.sel=C.selShort,C.cfg=x,C.DPR=w||1,C.u=E,C.types=p,C.setSize=n,C.makeUrl=N(function(e){return T.href=e,T.href}),C.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},C.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?C.matchesMedia=function(e){return!e||matchMedia(e).matches}:C.matchesMedia=C.mMQ,C.matchesMedia.apply(this,arguments)},C.mMQ=function(e){return!e||ne(e)},C.calcLength=function(e){var t=ne(e,!0)||!1;return t<0&&(t=!1),t},C.supportsType=function(e){return!e||p[e]},C.parseSize=N(function(e){var t=(e||"").match(A);return{media:t&&t[1],length:t&&t[2]}}),C.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var f,p,t,n,i,s=r.length,a=0,m=[];function c(){var e,t,n,r,i,s,a,c,o,l=!1,u={};for(r=0;r<p.length;r++)s=(i=p[r])[i.length-1],a=i.substring(0,i.length-1),c=parseInt(a,10),o=parseFloat(a),W.test(a)&&"w"===s?((e||t)&&(l=!0),0===c?l=!0:e=c):_.test(a)&&"x"===s?((e||t||n)&&(l=!0),o<0?l=!0:t=o):W.test(a)&&"h"===s?((n||t)&&(l=!0),0===c?l=!0:n=c):l=!0;l||(u.url=f,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,m.push(u))}function o(){for(e(R),t="",n="in descriptor";;){if(i=r.charAt(a),"in descriptor"===n)if($(i))t&&(p.push(t),t="",n="after descriptor");else{if(","===i)return a+=1,t&&p.push(t),void c();if("("===i)t+=i,n="in parens";else{if(""===i)return t&&p.push(t),void c();t+=i}}else if("in parens"===n)if(")"===i)t+=i,n="in descriptor";else{if(""===i)return p.push(t),void c();t+=i}else if("after descriptor"===n)if($(i));else{if(""===i)return void c();n="in descriptor",a-=1}a+=1}}for(;;){if(e(P),s<=a)return m;f=e(B),p=[],","===f.slice(-1)?(f=f.replace(D,""),c()):o()}}(e.srcset,e)),e.cands},C.getEmValue=function(){var e;if(!i&&(e=s.body)){var t=s.createElement("div"),n=c.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=v,e.style.cssText=v,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),c.style.cssText=n,e.style.cssText=r}return i||16},C.calcListLength=function(u){if(!(u in b)||x.uT){var e=C.calcLength(function(e){var t,n,r,i,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],i=[],s=0,a=0,c=!1;function o(){n&&(r.push(n),n="")}function l(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),i;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if($(t)){if(e.charAt(a-1)&&$(e.charAt(a-1))||!n){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}n+=t,a+=1}}}(u)).length,t=0;t<r;t++)if(c=s=(i=n[t])[i.length-1],o.test(c)&&0<=parseFloat(c)||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),C.matchesMedia(i))return a}return"100vw"}());b[u]=e||E.width}return b[u]},C.setRes=function(e){var t;if(e)for(var n=0,r=(t=C.parseSet(e)).length;n<r;n++)re(t[n],e.sizes);return t},C.setRes.res=re,C.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,o,l,u,d,f,p,m,h,A,g,v=t[C.ns],y=C.DPR;if(c=v.curSrc||t[M],(o=v.curCan||(z=t,b=c,!(w=e[0].set)&&b&&(w=(w=z[C.ns].sets)&&w[w.length-1]),(E=ae(b,w))&&(b=C.makeUrl(b),z[C.ns].curSrc=b,(z[C.ns].curCan=E).res||re(E,E.set.sizes)),E))&&o.set===e[0].set&&((u=S&&!t.complete&&o.res-.1>y)||(o.cached=!0,o.res>=y&&(a=o))),!a)for(e.sort(se),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=y){a=e[i=r-1]&&(u||c!==C.makeUrl(n.url))&&(d=e[i].res,f=n.res,p=y,m=e[i].cached,g=A=h=void 0,"saveData"===x.algorithm?2.7<d?g=p+1:(A=(f-p)*(h=Math.pow(d-.6,1.5)),m&&(A+=.1*h),g=d+A):g=1<p?Math.sqrt(d*f):d,p<g)?e[i]:n;break}a&&(l=C.makeUrl(a.url),v.curSrc=l,v.curCan=a,l!==c&&C.setSrc(t,a),C.setSize(t))}var z,b,w,E},C.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},C.getSet=function(e){var t,n,r,i=!1,s=e[C.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&C.matchesMedia(n.media)&&(r=C.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},C.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[C.ns];(void 0===o.src||n.src)&&(o.src=u.call(e,"src"),o.src?d.call(e,"data-pfsrc",o.src):f.call(e,"data-pfsrc")),(void 0===o.srcset||n.srcset||!C.supSrcset||e.srcset)&&(r=u.call(e,"srcset"),o.srcset=r,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[C.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:u.call(e,"sizes")},o.sets.push(i),(s=(l||o.src)&&h.test(o.srcset||""))||!o.src||ae(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=void 0,o.supported=!(c||i&&!C.supSrcset||s&&!C.supSizes),a&&C.supSrcset&&!o.supported&&(r?(d.call(e,"data-pfsrcset",r),e.srcset=""):f.call(e,"data-pfsrcset")),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==C.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},C.fillImg=function(e,t){var n,r,i,s,a,c=t.reselect||t.reevaluate;e[C.ns]||(e[C.ns]={}),n=e[C.ns],(c||n.evaled!==o)&&(n.parsed&&!t.reevaluate||C.parseSets(e,e.parentNode,t),n.supported?n.evaled=o:(r=e,a=!1,"pending"!==(s=C.getSet(r))&&(a=o,s&&(i=C.setRes(s),C.applySetCandidate(i,r))),r[C.ns].evaled=a))},C.setupRun=function(){L&&!y&&w===e.devicePixelRatio||(y=!1,w=e.devicePixelRatio,z={},b={},C.DPR=w||1,E.width=Math.max(e.innerWidth||0,c.clientWidth),E.height=Math.max(e.innerHeight||0,c.clientHeight),E.vw=E.width/100,E.vh=E.height/100,o=[E.height,E.width,w].join("-"),E.em=C.getEmValue(),E.rem=E.em)},C.supPicture?(ie=n,C.fillImg=n):(J=e.attachEvent?/d$|^c/:/d$|^c|^i/,X=function(){var e=s.readyState||"";Y=setTimeout(X,"loading"===e?200:999),s.body&&(C.fillImgs(),(G=G||J.test(e))&&clearTimeout(Y))},Y=setTimeout(X,s.body?9:99),Z=c.clientHeight,k(e,"resize",(j=function(){y=Math.max(e.innerWidth||0,c.clientWidth)!==E.width||c.clientHeight!==Z,Z=c.clientHeight,y&&C.fillImgs()},99,K=function(){var e=new Date-V;e<99?q=setTimeout(K,99-e):(q=null,j())},function(){V=new Date,q||(q=setTimeout(K,99))})),k(s,"readystatechange",X)),C.picturefill=ie,C.fillImgs=ie,C.teardownRun=n,ie._=C,e.picturefillCFG={pf:C,push:function(e){var t=e.shift();"function"==typeof C[t]?C[t].apply(C,e):(x[t]=e[0],L&&C.fillImgs({reselect:!0}))}};for(;g&&g.length;)e.picturefillCFG.push(g.shift());e.picturefill=ie,"object"==typeof ce&&"object"==typeof ce.exports?ce.exports=ie:void 0===(ue=function(){return ie}.call(oe,le,oe,ce))||(ce.exports=ue),C.supPicture||(p["image/webp"]=(ee="image/webp",(te=new e.Image).onerror=function(){p[ee]=!1,ie()},te.onload=function(){p[ee]=1===te.width,ie()},te.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"))}(window,document)},function(e,t){var n,r;n=window,r=function(r,u){"use strict";if(u.getElementsByClassName){var d,f,n,i,t,s,a,c,e,p=u.documentElement,o=r.Date,l=r.HTMLPictureElement,m=r.addEventListener,h=r.setTimeout,A=r.requestAnimationFrame||h,g=r.requestIdleCallback,v=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],z={},b=Array.prototype.forEach,w=function(e,t){return z[t]||(z[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),z[t].test(e.getAttribute("class")||"")&&z[t]},E=function(e,t){w(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},C=function(e,t){var n;(n=w(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},x=function(t,n,e){var r=e?"addEventListener":"removeEventListener";e&&x(t,n),y.forEach(function(e){t[r](e,n)})},S=function(e,t,n,r,i){var s=u.createEvent("CustomEvent");return n||(n={}),n.instance=d,s.initCustomEvent(t,!r,!i,n),e.dispatchEvent(s),s},M=function(e,t){var n;!l&&(n=r.picturefill||f.pf)?n({reevaluate:!0,elements:[e]}):t&&t.src&&(e.src=t.src)},T=function(e,t){return(getComputedStyle(e,null)||{})[t]},L=function(e,t,n){for(n=n||e.offsetWidth;n<f.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},R=(s=[],a=t=[],(e=function(e,t){n&&!t?e.apply(this,arguments):(a.push(e),i||(i=!0,(u.hidden?h:A)(c)))})._lsFlush=c=function(){var e=a;for(a=t.length?s:t,i=!(n=!0);e.length;)e.shift()();n=!1},e),P=function(n,e){return e?function(){R(n)}:function(){var e=this,t=arguments;R(function(){n.apply(e,t)})}},B=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=o.now()-n;e<99?h(i,99-e):(g||r)(r)};return function(){n=o.now(),t||(t=h(i,99))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in f=r.lazySizesConfig||r.lazysizesConfig||{},t)e in f||(f[e]=t[e]);r.lazySizesConfig=f,h(function(){f.init&&Ee()})}();var D,W,_,k,N,$,I,F,O,U,H,Q,G,j,q,V,K,J,X,Y,Z,ee,te,ne,re,ie,se,ae,ce,oe,le,ue,de,fe,pe,me,he,Ae,ge,ve,ye,ze,be=(ee=/^img$/i,te=/^iframe$/i,ne="onscroll"in r&&!/glebot/.test(navigator.userAgent),se=-1,ae=function(e){ie--,e&&e.target&&x(e.target,ae),(!e||ie<0||!e.target)&&(ie=0)},ce=function(e,t){var n,r=e,i="hidden"==T(u.body,"visibility")||"hidden"!=T(e,"visibility");for(F-=t,H+=t,O-=t,U+=t;i&&(r=r.offsetParent)&&r!=u.body&&r!=p;)(i=0<(T(r,"opacity")||1))&&"visible"!=T(r,"overflow")&&(n=r.getBoundingClientRect(),i=U>n.left&&O<n.right&&H>n.top-1&&F<n.bottom+1);return i},q=oe=function(){var e,t,n,r,i,s,a,c,o,l=d.elements;if((k=f.loadMode)&&ie<8&&(e=l.length)){t=0,se++,null==G&&("expand"in f||(f.expand=500<p.clientHeight&&500<p.clientWidth?500:370),Q=f.expand,G=Q*f.expFactor),re<G&&ie<1&&2<se&&2<k&&!u.hidden?(re=G,se=0):re=1<k&&1<se&&ie<6?Q:0;for(;t<e;t++)if(l[t]&&!l[t]._lazyRace)if(ne)if((c=l[t].getAttribute("data-expand"))&&(s=1*c)||(s=re),o!==s&&($=innerWidth+s*j,I=innerHeight+s,a=-1*s,o=s),n=l[t].getBoundingClientRect(),(H=n.bottom)>=a&&(F=n.top)<=I&&(U=n.right)>=a*j&&(O=n.left)<=$&&(H||U||O||F)&&(f.loadHidden||"hidden"!=T(l[t],"visibility"))&&(W&&ie<3&&!c&&(k<3||se<4)||ce(l[t],s))){if(he(l[t]),i=!0,9<ie)break}else!i&&W&&!r&&ie<4&&se<4&&2<k&&(D[0]||f.preloadAfterLoad)&&(D[0]||!c&&(H||U||O||F||"auto"!=l[t].getAttribute(f.sizesAttr)))&&(r=D[0]||l[t]);else he(l[t]);r&&!i&&he(r)}},K=ie=re=0,J=f.throttleDelay,X=f.ricTimeout,Y=function(){V=!1,K=o.now(),q()},Z=g&&49<X?function(){g(Y,{timeout:X}),X!==f.ricTimeout&&(X=f.ricTimeout)}:P(function(){h(Y)},!0),le=function(e){var t;(e=!0===e)&&(X=33),V||(V=!0,(t=J-(o.now()-K))<0&&(t=0),e||t<9?Z():h(Z,t))},de=P(ue=function(e){E(e.target,f.loadedClass),C(e.target,f.loadingClass),x(e.target,fe),S(e.target,"lazyloaded")}),fe=function(e){de({target:e.target})},pe=function(e){var t,n=e.getAttribute(f.srcsetAttr);(t=f.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},me=P(function(e,t,n,r,i){var s,a,c,o,l,u;(l=S(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?E(e,f.autosizesClass):e.setAttribute("sizes",r)),a=e.getAttribute(f.srcsetAttr),s=e.getAttribute(f.srcAttr),i&&(o=(c=e.parentNode)&&v.test(c.nodeName||"")),u=t.firesLoad||"src"in e&&(a||s||o),l={target:e},u&&(x(e,ae,!0),clearTimeout(_),_=h(ae,2500),E(e,f.loadingClass),x(e,fe,!0)),o&&b.call(c.getElementsByTagName("source"),pe),a?e.setAttribute("srcset",a):s&&!o&&(te.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,s):e.src=s),i&&(a||o)&&M(e,{src:s})),e._lazyRace&&delete e._lazyRace,C(e,f.lazyClass),R(function(){(!u||e.complete&&1<e.naturalWidth)&&(u?ae(l):ie--,ue(l))},!0)}),Ae=function(){if(!W)if(o.now()-N<999)h(Ae,999);else{var e=B(function(){f.loadMode=3,le()});W=!0,f.loadMode=3,le(),m("scroll",function(){3==f.loadMode&&(f.loadMode=2),e()},!0)}},{_:function(){N=o.now(),d.elements=u.getElementsByClassName(f.lazyClass),D=u.getElementsByClassName(f.lazyClass+" "+f.preloadClass),j=f.hFac,m("scroll",le,!0),m("resize",le,!0),r.MutationObserver?new MutationObserver(le).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p.addEventListener("DOMNodeInserted",le,!0),p.addEventListener("DOMAttrModified",le,!0),setInterval(le,999)),m("hashchange",le,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){u.addEventListener(e,le,!0)}),/d$|^c/.test(u.readyState)?Ae():(m("load",Ae),u.addEventListener("DOMContentLoaded",le),h(Ae,2e4)),d.elements.length?(oe(),R._lsFlush()):le()},checkElems:le,unveil:he=function(e){var t,n=ee.test(e.nodeName),r=n&&(e.getAttribute(f.sizesAttr)||e.getAttribute("sizes")),i="auto"==r;(!i&&W||!n||!e.getAttribute("src")&&!e.srcset||e.complete||w(e,f.errorClass)||!w(e,f.lazyClass))&&(t=S(e,"lazyunveilread").detail,i&&we.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ie++,me(e,t,i,r,n))}}),we=(ve=P(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),v.test(t.nodeName||""))for(s=0,a=(i=t.getElementsByTagName("source")).length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||M(e,n.detail)}),ye=function(e,t,n){var r,i=e.parentNode;i&&(n=L(e,i,n),(r=S(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&ve(e,i,r,n))},{_:function(){ge=u.getElementsByClassName(f.autosizesClass),m("resize",ze)},checkElems:ze=B(function(){var e,t=ge.length;if(t)for(e=0;e<t;e++)ye(ge[e])}),updateElem:ye}),Ee=function(){Ee.i||(Ee.i=!0,we._(),be._())};return d={cfg:f,autoSizer:we,loader:be,init:Ee,uP:M,aC:E,rC:C,hC:w,fire:S,gW:L,rAF:R}}}(n,n.document),n.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)},function(e,t,n){"use strict";n(3),n(2)}]);
