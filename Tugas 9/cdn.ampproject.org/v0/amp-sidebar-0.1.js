;
(self.AMP=self.AMP||[]).push({m:0,v:"2310061803000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return o(this,n)}}function h(t){return t?Array.prototype.slice.call(t):[]}var u=Array.isArray;function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function c(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return f(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v,d=Object.prototype;function m(t){return 1==(null==t?void 0:t.nodeType)}function p(t,i,n,r,s,e,o,a,h,u,f){return t}function b(t){return(t.ownerDocument||t).defaultView}function y(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}function w(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}function g(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,o=void 0,"string"==typeof(e=s=r)?o=e:m(e)&&(o=e.tagName),!(o&&o.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,e,o;return n}(t)}function k(t){var i=t.isConnected;if(void 0!==i)return i;for(var n=t;(n=x(n)).host;)n=n.host;return n.nodeType===Node.DOCUMENT_NODE}function x(t){if(Node.prototype.getRootNode)return t.getRootNode();var i,n;for(i=t;i.parentNode&&(!(n=i)||"I-AMPHTML-SHADOW-ROOT"!=n.tagName&&(11!=n.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(n)));i=i.parentNode);return i}function M(t){try{t.focus()}catch(t){}}function A(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var e in t)s[e]=t[e];return s.stack=r,s}function O(t){for(var i,n=null,r="",s=c(arguments,!0);!(i=s()).done;){var e=i.value;e instanceof Error&&!n?n=A(e):(r&&(r+=" "),r+=e)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function E(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function S(t){var i=O.apply(null,arguments);setTimeout((function(){throw E(i),i}))}function j(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){S(t)}}d.hasOwnProperty,d.toString;var D=["Webkit","webkit","Moz","moz","ms","O","o"],X={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var e=function(t,i,n){if(i.startsWith("--"))return i;v||(v=Object.create(null));var r=v[i];if(!r||n){if(r=i,void 0===t[i]){var s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(var n=0;n<D.length;n++){var r=D[n]+i;if(void 0!==t[r])return r}return""}(t,s);void 0!==t[e]&&(r=e)}n||(v[i]=r)}return r}(t.style,i,s);if(e){var o,a=r?n+r:n;t.style.setProperty((o=e.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),D.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),a)}}function R(t,i){for(var n in i)z(t,n,i[n])}function P(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function _(t,i){return t.getComputedStyle(i)||X}var I=/vertical/,T=new WeakMap,C=new WeakMap,W=new WeakMap;function B(t){var i=T.get(t);return i||(i=new t.ResizeObserver(L),T.set(t,i)),i}function L(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var e=C.get(s);if(e){W.set(s,r);for(var o=0;o<e.length;o++){var a=e[o],h=a.callback;N(a.type,h,r)}}}}}function N(t,i,n){if(0==t){var r=n.contentRect,s=r.height;j(i,{width:r.width,height:s})}else if(1==t){var e,o=n.borderBoxSize;if(o)e=o.length>0?o[0]:{inlineSize:0,blockSize:0};else{var a,h,u=n.target,f=b(u),c=I.test(_(f,u).writingMode),l=u,v=l.offsetHeight,d=l.offsetWidth;c?(h=d,a=v):(a=d,h=v),e={inlineSize:a,blockSize:h}}j(i,e)}}var Y=[],V="__AMP_MODAL_SAVED_TAB_INDEX";function q(t){for(var i=[],n=t;n;n=n.parentNode||n.host)i.push(n);return i}function F(t,i,n){null===n||null==n?t.removeAttribute(i):t.setAttribute(i,n)}var H="i-amphtml-element",U=function(t){return t.unmount()};function $(t,i,n,r){for(var s,e=u(s=t)?s:[s],o=0;o<e.length;o++)G(e[o],i,n,r)}function G(t,i,n,r){if(i&&t.classList.contains(H)){var s=t;if(j(r,s),!n){var e=s.getPlaceholder();return void(e&&G(e,!0,!1,r))}}for(var o=t.getElementsByClassName(H),a=null,h=0;h<o.length;h++){var u=o[h];if(n)j(r,u);else{a=a||[];for(var f=!1,c=0;c<a.length;c++)if(a[c].contains(u)){f=!0;break}f||(a.push(u),j(r,u))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z,J=self.__AMP_LOG;function K(t){return J.user||(J.user=Q()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=Q()):J.user}function Q(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function tt(t,i,n,r,s,e,o,a,h,u,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(et(st(t)),i)}function rt(t,i){var n=et(st(t));return at(n,i)?ot(n,i):null}function st(t){return t.nodeType?(i=b(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function et(t){var i=st(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(at(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function at(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var ht,ut=function(t){return nt(t,"owners")},ft=function(t){return ot(t,"timer")};function ct(t){if(void 0!==ht)return ht;ht=!1;try{var i={get passive(){return ht=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return ht}function lt(t,i){var n,r=function(t,i){if(void 0!==l?l:l=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),r=i.createElement("div");return n.appendChild(r),n.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(y(i,":scope"));var n=function(t,i){var n=t.classList,r="i-amphtml-scoped";n.add(r);var s=y(":not([toolbar]) [autoscroll]",".".concat(r)),e=t.querySelectorAll(s);return n.remove(r),e}(t)[0];return void 0===n?null:n}(i,":not([toolbar]) [autoscroll]");if(r){var s=_(t.win,i)["overflow-y"];"scroll"==s||"auto"==s?(n=t,nt(n,"viewport")).animateScrollWithinParent(r,i,"center",0):K().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}}function vt(t,i){var n=ft(t);return n.promise(1).then((function(){return n.promise(i)}))}var dt=function(){function t(){this.$n=null}var i=t.prototype;return i.add=function(t){var i=this;return this.$n||(this.$n=[]),this.$n.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.$n&&(n=t,-1!=(r=(i=this.$n).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.$n&&(this.$n.length=0)},i.fire=function(t){if(this.$n)for(var i,n=c(this.$n.slice(),!0);!(i=n()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.$n)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),mt=function(){function t(t,i,n){var r=this;this.Ye=ft(t),this.Je=i,this.Xe=n||0,this.Qe=-1,this.Ze=0,this.ts=!1,this.ns=function(){r.rs()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Qe},i.schedule=function(t){var i=t||this.Xe;this.ts&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.Ze<-10)&&(this.cancel(),this.Ze=n,this.Qe=this.Ye.delay(this.ns,i),!0)},i.rs=function(){this.Qe=-1,this.Ze=0,this.ts=!0,this.Je(),this.ts=!1},i.cancel=function(){this.isPending()&&(this.Ye.cancel(this.Qe),this.Qe=-1)},t}(),pt="__AMP_Gestures",bt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},yt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.tp=t,this.cM=[],this.Bd=[],this.Ui=[],this.lM=[],this.mM=null;var r=t.ownerDocument.defaultView,s=ct(r);this.pM=i||s,this.fM=n,this.dM=!1,this.rs=new mt(b(t),this.iv.bind(this)),this.vM=new dt,this.yM=Object.create(null),this.gM=this.Wp.bind(this),this.bM=this.tm.bind(this),this.xM=this.Qp.bind(this),this.wM=this.Qm.bind(this),this.tp.addEventListener("touchstart",this.gM,!!s&&{passive:!0}),this.tp.addEventListener("touchend",this.bM),this.tp.addEventListener("touchmove",this.xM,!!s&&{passive:!0}),this.tp.addEventListener("touchcancel",this.wM),this.kM=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[pt];return s||(s=new t(i,n,r),i[pt]=s),s};var i=t.prototype;return i.cleanup=function(){this.tp.removeEventListener("touchstart",this.gM),this.tp.removeEventListener("touchend",this.bM),this.tp.removeEventListener("touchmove",this.xM),this.tp.removeEventListener("touchcancel",this.wM),delete this.tp[pt],this.rs.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.yM[r];return s||(this.cM.push(n),s=new dt,this.yM[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.yM[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.cM);return!(r<0||(this.cM.splice(r,1),this.Ui.splice(r,1),this.lM.splice(r,1),this.Bd.splice(r,1),delete this.yM[i],0))}return!1},i.onPointerDown=function(t){return this.vM.add(t)},i.Wp=function(t){var i=Date.now();this.dM=!1,this.vM.fire(t);for(var n=0;n<this.cM.length;n++)this.Ui[n]||(this.lM[n]&&this.lM[n]<i&&this.tg(n),this.cM[n].onTouchStart(t)&&this.ig(n));this.AM(t)},i.Qp=function(t){for(var i=Date.now(),n=0;n<this.cM.length;n++)this.Bd[n]&&(this.lM[n]&&this.lM[n]<i?this.tg(n):this.cM[n].onTouchMove(t)||this.tg(n));this.AM(t)},i.tm=function(t){for(var i=Date.now(),n=0;n<this.cM.length;n++)if(this.Bd[n])if(this.lM[n]&&this.lM[n]<i)this.tg(n);else{this.cM[n].onTouchEnd(t);var r=!this.lM[n],s=this.lM[n]<i;this.mM==this.cM[n]||!r&&!s||this.tg(n)}this.AM(t)},i.Qm=function(t){for(var i=0;i<this.cM.length;i++)this.TM(i);this.AM(t)},i.Gp=function(t,i){if(this.mM)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.cM.length;r++)this.cM[r]==t&&(this.Ui[r]=n+i,this.lM[r]=0);this.kM=!0}},i.SM=function(t,i){if(this.mM)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.cM.length;r++)this.cM[r]==t&&(this.lM[r]=n+i)},i.EM=function(t){this.mM==t&&(this.mM=null,this.dM=!0)},i.PM=function(t,i,n){p(this.mM==t);var r=this.yM[t.getType()];r&&r.fire(new bt(t.getType(),i,Date.now(),n))},i.AM=function(t){var i=!!this.mM||this.dM;if(this.dM=!1,!i)for(var n=Date.now(),r=0;r<this.cM.length;r++)if(this.Ui[r]||this.lM[r]&&this.lM[r]>=n){i=!0;break}i?(t.stopPropagation(),this.pM||t.preventDefault()):this.fM&&t.stopPropagation(),this.kM&&(this.kM=!1,this.iv())},i.iv=function(){for(var t=Date.now(),i=-1,n=0;n<this.cM.length;n++)this.Ui[n]?(-1==i||this.Ui[n]>this.Ui[i])&&(i=n):this.lM[n]&&this.lM[n]<t&&this.tg(n);if(-1!=i){for(var r=0,s=0;s<this.cM.length;s++)!this.Ui[s]&&this.Bd[s]&&(r=Math.max(r,this.lM[s]-t));r<2?this.OM(i):this.rs.schedule(r)}},i.OM=function(t){for(var i=this.cM[t],n=0;n<this.cM.length;n++)n!=t&&this.TM(n);this.Ui[t]=0,this.lM[t]=0,this.mM=i,i.acceptStart()},i.ig=function(t){this.Bd[t]=!0,this.lM[t]=0},i.tg=function(t){this.Bd[t]=!1,this.lM[t]=0,this.Ui[t]||this.cM[t].acceptCancel()},i.TM=function(t){this.Ui[t]=0,this.tg(t)},t}(),wt=function(){function t(t,i){this._M=t,this.kw=i}var i=t.prototype;return i.getType=function(){return this._M},i.signalReady=function(t){this.kw.Gp(this,t)},i.signalPending=function(t){this.kw.SM(this,t)},i.signalEnd=function(){this.kw.EM(this)},i.signalEmit=function(t,i){this.kw.PM(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function gt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var kt=function(t){r(n,t);var i=a(n);function n(t){return i.call(this,"swipe-x",t,!0,!1)}return n}(function(t){r(n,t);var i=a(n);function n(t,n,r,s){var e;return(e=i.call(this,t,n)).MM=r,e.IM=s,e.mM=!1,e.zM=0,e.NM=0,e.RM=0,e.jM=0,e.CM=0,e.DM=0,e.Ta=0,e.LM=0,e.UM=0,e.HM=0,e.YM=0,e}var s=n.prototype;return s.onTouchStart=function(t){var i=t.touches;return!!(this.mM&&i&&i.length>1)||!(!i||1!=i.length)&&(this.Ta=Date.now(),this.zM=i[0].clientX,this.NM=i[0].clientY,!0)},s.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.RM=r,this.jM=s,this.mM)this.VM(!1,!1,t);else{var e=Math.abs(r-this.zM),o=Math.abs(s-this.NM);if(this.MM&&this.IM)(e>=8||o>=8)&&this.signalReady(-10);else if(this.MM){if(e>=8&&e>o)this.signalReady(-10);else if(o>=8)return!1}else{if(!this.IM)return!1;if(o>=8&&o>e)this.signalReady(-10);else if(e>=8)return!1}}return!0}return!1},s.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.GM(t)},s.acceptStart=function(){this.mM=!0,this.CM=this.zM,this.DM=this.NM,this.UM=this.Ta,this.zM=this.RM,this.NM=this.jM,this.VM(!0,!1,null)},s.acceptCancel=function(){this.mM=!1},s.VM=function(t,i,n){this.LM=Date.now();var r=this.LM-this.UM;if(!i&&r>4||i&&r>16){var s=gt(this.RM-this.CM,r,this.HM),e=gt(this.jM-this.DM,r,this.YM);(!i||r>32||0!=s||0!=e)&&(this.HM=Math.abs(s)>1e-4?s:0,this.YM=Math.abs(e)>1e-4?e:0),this.CM=this.RM,this.DM=this.jM,this.UM=this.LM}this.signalEmit({first:t,last:i,time:this.LM,deltaX:this.RM-this.zM,deltaY:this.jM-this.NM,startX:this.zM,startY:this.NM,lastX:this.RM,lastY:this.jM,velocityX:this.HM,velocityY:this.YM},n)},s.GM=function(t){this.mM&&(this.mM=!1,this.VM(!1,!0,t),this.signalEnd())},n}(wt)),xt="backward",Mt="horizontal",At=function(){function t(t,i,n){this.t=t,this.Xy=i,this.tit=n,this.iit=xt,this.nit=Mt,this.rit=null,this.eit=null}var i=t.prototype;return i.sit=function(){return this.nit==Mt?this.rit.offsetWidth:this.rit.offsetHeight},i.oit=function(t,i){var n=this.nit==Mt?t:i;return this.iit==xt?-Math.min(n,0):Math.max(n,0)},i.ait=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.iit==xt?-t:t,r=this.nit==Mt?"".concat(n).concat(i):0,s=this.nit==Mt?0:"".concat(n).concat(i);return"translate(".concat(r,", ").concat(s,")")},i.startSwipe=function(t){var i=t.direction,n=t.mask,r=t.orientation,s=t.swipeElement;this.rit=s,this.eit=n,this.iit=i,this.nit=r},i.swipeMove=function(t){this.hit(t,!1)},i.endSwipe=function(t){this.hit(t,!0)},i.uit=function(t,i){var n=.75*i;return R(this.rit,{transform:this.ait(t,"px"),transition:"".concat(n,"ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")}),vt(this.t,n)},i.fit=function(t){var i=this,n=.8*t;return this.Xy((function(){R(i.rit,{transform:i.ait(0),transition:"".concat(n,"ms transform ease-in")}),R(i.eit,{opacity:"",transition:"".concat(n,"ms opacity ease-in")})})).then((function(){return vt(i.t,n)}))},i.cit=function(t){var i=this,n=.75*(this.sit()-t);return this.Xy((function(){R(i.rit,{transform:i.ait(100,"%"),transition:"".concat(n,"ms transform ease-out")}),R(i.eit,{opacity:0,transition:"".concat(n,"ms opacity ease-out")})})).then((function(){return vt(i.t,n)})).then((function(){return i.tit()}))},i.lit=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(this.rit,{transform:t,transition:""}),R(this.eit,{opacity:i,transition:""})},i.vit=function(t,i,n,r){var s=this,e=22.5*t+n,o=22.5*i+r,a=this.oit(e,o),h=this.oit(t,i),u=.5*this.sit();return a<u&&h<.65?this.uit(a,h).then((function(){return s.fit(a)})):this.cit(a)},i.hit=function(t,i){var n=this,r=t.deltaX,s=t.deltaY,e=t.velocityX,o=t.velocityY;this.Xy((function(){if(i)n.vit(e,o,r,s).then((function(){n.lit()}));else{var t=n.oit(r,s),a=t/n.sit(),h=Math.max(0,1-a);n.lit(n.ait(t,"px"),h)}}))},t}(),Ot=function(){function t(t,i){this.fO=i,this.dit=t,this.vr=i.getAmpDoc(),this.mit=this.dit.getAttribute("toolbar"),this.pit=null,this.bit=void 0,this.yit=!1,this.dit.classList.add("amp-sidebar-toolbar-target-hidden"),this.wit()}var i=t.prototype;return i.onLayoutChange=function(){this.vr.win.matchMedia(this.mit).matches?this.git():this.kit()},i.wit=function(){this.pit=this.dit.cloneNode(!0);var t,i,n=(t=this.dit.getAttribute("toolbar-target"),'"toolbar-target" is required',i=this.dit,K().assert(t,'"toolbar-target" is required',i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),r=this.vr.getElementById(n);if(!r)throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));this.bit=r,this.pit.classList.add("i-amphtml-toolbar"),P(this.bit,!1)},i.Oit=function(){return this.yit},i.git=function(){var t=this;return this.Oit()?Z||(Z=Promise.resolve(void 0)):this.fO.mutateElement((function(){t.bit&&(P(t.bit,!0),t.bit.contains(t.pit)||t.bit.appendChild(t.pit),t.dit.classList.add("amp-sidebar-toolbar-target-shown"),t.dit.classList.remove("amp-sidebar-toolbar-target-hidden"),t.yit=!0,lt(t.vr,t.pit))}))},i.kit=function(){var t=this;this.Oit()&&this.fO.mutateElement((function(){t.bit&&(P(t.bit,!1),t.dit.classList.add("amp-sidebar-toolbar-target-hidden"),t.dit.classList.remove("amp-sidebar-toolbar-target-shown"),t.yit=!1)}))},t}();function Et(t){var i=t.indexOf("#");return-1==i?t:t.substring(0,i)}var St="amp-sidebar toolbar",jt="left",Dt="right",Xt=function(t){r(s,t);var n=a(s);function s(t){var r;(r=n.call(this,t)).Bo=null,r.fs=null,r.xit=null,r.U$=null,r.vl=r.win.document,r._7=r.vl.documentElement,r.X3=null,r.jit=[];var s=it(r.win,"platform");return r.zY=s.isIos(),r.SR=s.isSafari(),r.mY=-1,r.Mit=!1,r.CY=null,r.SY=null,r.Eit=0,r.Sit=!1,r.Ait=null,r.Dit=new At(r.win,(function(t){return r.mutateElement(t)}),(function(){return r.Xit(!0,3)})),r.Wst=!1,r.Bst=!1,r.mw=r.mw.bind(i(r)),r._it=null,r}var e=s.prototype;return e.buildCallback=function(){var t,i=this,n=this.element;n.classList.add("i-amphtml-overlay"),n.classList.add("i-amphtml-scrollable"),this.X3=n.getAttribute("side"),this.Bst=n.hasAttribute("data-disable-swipe-close"),this.Bo=this.getViewport(),this.fs=function(t){return rt(t,"action")}(n),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(St,"".concat(St," is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),this.X3!=jt&&this.X3!=Dt&&(this.X3=this.Rit("rtl"==((t=this.vl).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")?Dt:jt),n.setAttribute("side",this.X3)),this.Pit(),n.addEventListener("amp:dom-update",(function(){i.Pit()})),this.getAmpDoc().whenReady().then((function(){h(n.querySelectorAll("nav[toolbar]")).forEach((function(t){try{i.jit.push(new Ot(t,i))}catch(t){i.user().error(St,"Failed to instantiate toolbar",t)}})),i.mw()})),this.zY&&this.Tit(),n.hasAttribute("role")||n.setAttribute("role","menu"),n.tabIndex=-1,this._7.addEventListener("keydown",(function(t){"Escape"==t.key&&i.Fx(3)&&t.preventDefault()})),this.CY=this.tX(),this.CY||(this.CY=this.createScreenReaderCloseButton(),n.insertBefore(this.CY,this.element.firstChild)),n.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((function(t){var n=t.caller,r=t.trust;i.TY(r,n)}),"open"),this.registerAction("close",(function(t){i.Fx(t.trust)})),this.registerAction("toggle",(function(t){var n=t.caller,r=t.trust;i.Sit?i.Fx(r):i.TY(r,n)})),this.fs.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),n.addEventListener("click",(function(t){var r=w(t.target,"A");if(r&&r.href){var s=function(t){return rt(t,"url")}(n).parse(r.href),e=i.getAmpDoc().getUrl();if(Et(r.href)!=Et(e))return;s.hash&&i.Fx(3)}}),!0),this.tW(this.element)},e.attachedCallback=function(){this._it=this.Bo.onResize(function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,a=100-(t.Date.now()-s);a>0?r=t.setTimeout(o,a):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e=n,r||(r=t.setTimeout(o,100))}}(this.win,this.mw)),this.mw()},e.detachedCallback=function(){this._it&&(this._it(),this._it=null)},e.Pit=function(){if(!this.Ait){var t=this.element.querySelector("amp-nested-menu");t&&((i=this.win,it(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.Ait=t)}var i},e.tX=function(){for(var t=this.element.querySelectorAll("[on]"),i=0;i<t.length;i++){var n=t[i],r=this.fs.hasResolvableActionForTarget(n,"tap",this.element,tt(n.parentElement)),s=w(n,"[toolbar]");if(r&&!s)return n}return null},e.createScreenReaderCloseButton=function(){var t=this,i=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",n=this.vl.createElement("button");return n.textContent=i,n.classList.add("i-amphtml-screen-reader"),n.tabIndex=-1,n.addEventListener("click",(function(){t.Fx(3)})),n},e.mw=function(){var t=this;this.getAmpDoc().whenReady().then((function(){t.jit.forEach((function(t){t.onLayoutChange()}))}))},e.zit=function(t,i){var n=this;this.xit=t;var r=function(){n.xit===t&&n.mutateElement(t)};i?ft(this.win).delay(r,i):r()},e.Iit=function(t){var i=this;P(this.element,!0),P(this.Cit(),!0),this.Bo.addToFixedLayer(this.element,!0),this.mutateElement((function(){!function(t){p(Y.every((function(i){return i.element!==t}))),p(k(t));var i=function(t){for(var i=[],n=q(t),r=function(t){var r=n[t];if(!r.parentNode)return"continue";h(r.parentNode.children).filter((function(t){return t!=r})).forEach((function(t){return i.push(t)}))},s=0;s<n.length;s++)r(s);return i}(t),n=q(t).filter(m),r=function(t){for(var i=[],n=t;n;){var r=x(n),s=r.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,s),n=r.host}return i}(t),s=r.filter((function(i){return t.contains(i)&&void 0!==i[V]})),e=r.filter((function(i){return!t.contains(i)&&void 0===i[V]})),o=i.concat(n).map((function(t){return{element:t,prevValue:t.getAttribute("aria-hidden")}}));n.forEach((function(t){return t.removeAttribute("aria-hidden")})),i.forEach((function(t){return t.setAttribute("aria-hidden","true")})),e.forEach((function(t){t[V]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),s.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V])})),Y.push({element:t,hiddenElementInfos:o,focusableExternalElements:e,focusableInternalElements:s})}(i.element)})),this.zY&&this.SR&&this.Nit(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.Cit().setAttribute("open",""),this.zit((function(){return i.Lit(t)}),350),lt(this.getAmpDoc(),this.element)},e.Lit=function(t){var i=g(this.element),n=ut(this.element);n.scheduleLayout(this.element,i),n.scheduleResume(this.element,i),this.Wit()||M(tt(this.CY)),this.fD("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.Cit().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()},e.Bit=function(t,i){var n=this;this.Cit().removeAttribute("open"),this.Cit().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((function(){!function(t){var i=Y.pop();p(i);var n=i.element,r=i.focusableExternalElements,s=i.focusableInternalElements,e=i.hiddenElementInfos;p(k(t)),p(n===t),e.forEach((function(t){return F(t.element,"aria-hidden",t.prevValue)})),s.forEach((function(t){return t.setAttribute("tabindex","-1")})),r.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V]),t[V]=void 0}))}(n.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.zit((function(){return n.Yit(i)}),t?0:350)},e.Yit=function(t){P(this.element,!1),P(this.Cit(),!1),ut(this.element).schedulePause(this.element,g(this.element)),this.fD("sidebarClose",t),this.removeAsContainer(),function(t){$(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,U)}(this.element,!1)},e.TY=function(t,i){var n=this;this.Sit||(this.Sit=!0,this.Bo.enterOverlayMode(),this.zit((function(){return n.Iit(t)})),this.VZ().push((function(){n.zY?n.Xit(!0,t):n.Fx(t)})).then((function(t){n.mY=t})),i&&(this.SY=i,this.Eit=this.Bo.getScrollTop()),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=C.get(t);if(s||(s=[],C.set(t,s),B(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var e=W.get(t);e&&setTimeout((function(){return N(0,n,e)}))}}}(this.element,0,this.mw))},e.Fx=function(t){return this.Xit(!1,t)},e.Xit=function(t,i){var n=this;if(!this.Sit)return!1;this.Sit=!1,this.Bo.leaveOverlayMode();var r=this.Eit==this.Bo.getScrollTop(),s=this.element.contains(this.vl.activeElement);return this.zit((function(){return n.Bit(t,i)})),t&&(P(this.element,!1),P(this.Cit(),!1)),-1!=this.mY&&(this.VZ().pop(this.mY),this.mY=-1),this.SY&&s&&r&&(this.Wit()||M(this.SY)),function(t,i,n){var r=C.get(t);if(r&&(function(t,i){for(var r=[],s=0,e=0;e<t.length;e++){var o=t[e];(a=o).callback===n&&0===a.type?r.push(o):(s<e&&(t[s]=o),s++)}var a;s<t.length&&(t.length=s)}(r),0==r.length)){C.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&B(s).unobserve(t)}}(this.element,0,this.mw),!0},e.tW=function(t){var i=this;this.Bst||yt.get(t,!0,!0).onGesture(kt,(function(t){var n=t.data,r=t.event;i.Fit(n,r)}))},e.Fit=function(t,i){var n;if(!t.first)return t.last?(this.Wst&&this.Dit.endSwipe(t),void(this.Wst=!1)):void(i&&i.target&&(n=i.target,"input"!==n.nodeName.toLowerCase()||"range"!==n.getAttribute("type"))&&(this.Wst=!0,this.Dit.swipeMove(t)));this.Dit.startSwipe({swipeElement:this.element,mask:this.U$,direction:this.X3==jt?xt:"forward",orientation:Mt})},e.Rit=function(t){return w(this.element,"amp-story")?t==jt?Dt:jt:t},e.Cit=function(){var t=this;if(!this.U$){var i=this.vl.createElement("div");i.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),i.addEventListener("click",(function(){t.Fx(3)})),this.getAmpDoc().getBody().appendChild(i),i.addEventListener("touchmove",(function(t){t.preventDefault()})),this.tW(i),this.U$=i}return this.U$},e.Tit=function(){var t=this;this.element.addEventListener("scroll",(function(i){t.Sit&&(t.element.scrollTop<1?(t.element.scrollTop=1,i.preventDefault()):t.element.scrollHeight==t.element.scrollTop+t.element.offsetHeight&&(t.element.scrollTop=t.element.scrollTop-1,i.preventDefault()))}))},e.Nit=function(){if(!this.Mit){var t=this.vl.createElement("div");R(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.Mit=!0}},e.VZ=function(){return nt(this.getAmpDoc(),"history")},e.fD=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}(this.win,"".concat(St,".").concat(t),{});this.fs.trigger(this.element,t,n,i)},e.Wit=function(){return this.zY&&(t=this.element,nt(t,"viewer")).isEmbedded();var t},s}(t.BaseElement);t.registerElement("amp-sidebar",Xt,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.js.map