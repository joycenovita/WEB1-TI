function iframe_resizer(){$(".p_iframe_r").iFrameResize()}!function(e){var n,i,t,o,r,a,s,d,c,u,f,l,m;function g(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function h(e,n,i){e.addEventListener(n,i,!1)}function p(e,n,i){e.removeEventListener(n,i,!1)}function w(e){return u[e]?u[e].log:i}function b(e,n){x("log",e,n,w(e))}function y(e,n){x("info",e,n,w(e))}function v(e,n){x("warn",e,n,!0)}function x(e,n,i,t){!0===t&&"object"==typeof window.console&&console[e](function(e){return r+"["+(n="Host page: "+e,(n=window.top!==window.self?window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e:n)+"]");var n}(n),i)}function z(e){function n(){i("Height"),i("Width"),N((function(){T(j),O(H),x("onResized",j)}),j,"init")}function i(e){var n=Number(u[H]["max"+e]),i=Number(u[H]["min"+e]),t=(e=e.toLowerCase(),Number(j[e]));b(H,"Checking "+e+" is in range "+i+"-"+n),t<i&&(t=i,b(H,"Set "+e+" to min value")),n<t&&(t=n,b(H,"Set "+e+" to max value")),j[e]=""+t}function t(e){return S.slice(S.indexOf(":")+o+e)}function d(e,n){var i,t;i=function(){var i,t;W("Send Page Info","pageInfo:"+(i=document.body.getBoundingClientRect(),t=j.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(t.top-i.top,10),offsetLeft:parseInt(t.left-i.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},m[t=n]||(m[t]=setTimeout((function(){m[t]=null,i()}),32))}function c(e){return e=e.getBoundingClientRect(),k(H),{x:Math.floor(Number(e.left)+Number(s.x)),y:Math.floor(Number(e.top)+Number(s.y))}}function f(e){var n=e?c(j.iframe):{x:0,y:0},i={x:Number(j.width)+n.x,y:Number(j.height)+n.y};b(H,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top===window.self?(s=i,l(),b(H,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):v(H,"Unable to scroll to requested position, window.parentIFrame not found")}function l(){!1===x("onScroll",s)?R():O(H)}function g(e){e=e.split("#")[1]||"";var n=decodeURIComponent(e);(n=document.getElementById(n)||document.getElementsByName(n)[0])?(n=c(n),b(H,"Moving to in page link (#"+e+") at x: "+n.x+" y: "+n.y),s={x:n.x,y:n.y},l(),b(H,"--")):window.top===window.self?b(H,"In page link #"+e+" not found"):window.parentIFrame?window.parentIFrame.moveToAnchor(e):b(H,"In page link #"+e+" not found and window.parentIFrame not found")}function w(e){var n,i;i=0===Number(j.width)&&0===Number(j.height)?{x:(n=t(9).split(":"))[1],y:n[0]}:{x:j.width,y:j.height},x(e,{iframe:j.iframe,screenX:Number(i.x),screenY:Number(i.y),type:j.type})}function x(e,n){return I(H,e,n)}var z,M,S=e.data,j={},H=null;if("[iFrameResizerChild]Ready"===S)for(var P in u)W("iFrame requested init",C(P),u[P].iframe,P);else r===(""+S).slice(0,a)&&S.slice(a).split(":")[0]in u?(j=function(){var e=S.slice(a).split(":"),n=e[1]?parseInt(e[1],10):0,i=u[e[0]]&&u[e[0]].iframe,t=getComputedStyle(i);return{iframe:i,id:e[0],height:n+function(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e=e.paddingBottom?parseInt(e.paddingBottom,10):0)}(t)+function(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e=e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}(t),width:e[2],type:e[3]}}(),H=j.id,u[H]&&(u[H].loaded=!0),(M=j.type in{true:1,false:1,undefined:1})&&b(H,"Ignoring init message from meta parent page"),!M&&(M=!0,u[z=H]||(M=!1,v(j.type+" No settings for "+z+". Message was: "+S)),M)&&(b(H,"Received: "+S),z=!0,null===j.iframe&&(v(H,"IFrame ("+j.id+") not found"),z=!1),z&&function(){var n=e.origin,i=u[H]&&u[H].checkOrigin;if(i&&""+n!="null"&&!function(){if(i.constructor!==Array)return e=u[H]&&u[H].remoteHost,b(H,"Checking connection is from: "+e),n===e;var e,t=0,o=!1;for(b(H,"Checking connection is from allowed list of origins: "+i);t<i.length;t++)if(i[t]===n){o=!0;break}return o}())throw new Error("Unexpected message received from: "+n+" for "+j.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return 1}()&&function(){switch(u[H]&&u[H].firstRun&&u[H]&&(u[H].firstRun=!1),j.type){case"close":F(j.iframe);break;case"message":r=t(6),b(H,"onMessage passed: {iframe: "+j.iframe.id+", message: "+r+"}"),x("onMessage",{iframe:j.iframe,message:JSON.parse(r)}),b(H,"--");break;case"mouseenter":w("onMouseEnter");break;case"mouseleave":w("onMouseLeave");break;case"autoResize":u[H].autoResize=JSON.parse(t(9));break;case"scrollTo":f(!1);break;case"scrollToOffset":f(!0);break;case"pageInfo":d(u[H]&&u[H].iframe,H),o=H,e("Add ",h),u[o]&&(u[o].stopPageInfo=i);break;case"pageInfoStop":u[H]&&u[H].stopPageInfo&&(u[H].stopPageInfo(),delete u[H].stopPageInfo);break;case"inPageLink":g(t(9));break;case"reset":E(j);break;case"init":n(),x("onInit",j.iframe);break;default:0===Number(j.width)&&0===Number(j.height)?v("Unsupported message received ("+j.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n()}function e(e,n){function t(){u[o]?d(u[o].iframe,o):i()}["scroll","resize"].forEach((function(i){b(o,e+i+" listener for sendPageInfo"),n(window,i,t)}))}function i(){e("Remove ",p)}var o,r}())):y(H,"Ignored: "+S)}function I(e,n,i){var t=null,o=null;if(u[e]){if("function"!=typeof(t=u[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=t(i)}return o}function M(e){e=e.id,delete u[e]}function F(e){var n=e.id;if(!1===I(n,"onClose",n))b(n,"Close iframe cancelled by onClose event");else{b(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){v(e)}I(n,"onClosed",n),b(n,"--"),M(e)}}function k(n){null===s&&b(n,"Get page position: "+(s={x:window.pageXOffset===e?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===e?document.documentElement.scrollTop:window.pageYOffset}).x+","+s.y)}function O(e){null!==s&&(window.scrollTo(s.x,s.y),b(e,"Set page position: "+s.x+","+s.y),R())}function R(){s=null}function E(e){b(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),k(e.id),N((function(){T(e),W("reset","reset",e.iframe,e.id)}),e,"reset")}function T(e){function n(n){var o;o=n,e.id?(e.iframe.style[o]=e[o]+"px",b(e.id,"IFrame ("+i+") "+o+" set to "+e[o]+"px")):b("undefined","messageData id not set"),function(n){var o;function r(){Object.keys(u).forEach((function(e){function n(e){return"0px"===(u[i]&&u[i].iframe.style[e])}var i;u[i=e]&&null!==u[i].iframe.offsetParent&&(n("height")||n("width"))&&W("Visibility change","resize",u[i].iframe,i)}))}!t&&"0"===e[n]&&(t=!0,b(i,"Hidden iFrame detected, creating visibility listener"),n=g())&&(o=document.querySelector("body"),new n((function(e){b("window","Mutation observed: "+e[0].target+" "+e[0].type),j(r,16)})).observe(o,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}(n)}var i=e.iframe.id;u[i]&&(u[i].sizeHeight&&n("height"),u[i].sizeWidth)&&n("width")}function N(e,n,i){i!==n.type&&d&&!window.jasmine?(b(n.id,"Requesting animation frame"),d(e)):e()}function W(e,n,i,t,o){var a=!1;t=t||i.id,u[t]&&(function(){var o;i&&"contentWindow"in i&&null!==i.contentWindow?(o=u[t]&&u[t].targetOrigin,b(t,"["+e+"] Sending msg to iframe["+t+"] ("+n+") targetOrigin: "+o),i.contentWindow.postMessage(r+n,o)):v(t,"["+e+"] IFrame("+t+") not found")}(),o&&u[t]&&u[t].warningTimeout&&(u[t].msgTimeout=setTimeout((function(){!u[t]||u[t].loaded||a||(a=!0,v(t,"IFrame has not responded within "+u[t].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),u[t].warningTimeout)))}function C(e){return e+":"+u[e].bodyMarginV1+":"+u[e].sizeWidth+":"+u[e].log+":"+u[e].interval+":"+u[e].enablePublicMethods+":"+u[e].autoResize+":"+u[e].bodyMargin+":"+u[e].heightCalculationMethod+":"+u[e].bodyBackground+":"+u[e].bodyPadding+":"+u[e].tolerance+":"+u[e].inPageLinks+":"+u[e].resizeFrom+":"+u[e].widthCalculationMethod+":"+u[e].mouseEvents}function S(t,o){function r(e){var n=e.split("Callback");2===n.length&&(this[n="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1)]=this[e],delete this[e],v(a,"Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version."))}var a=function(e){if("string"!=typeof e)throw new TypeError("Invaild id for iFrame. Expected String");var r;return""===e&&(t.id=(r=o&&o.id||l.id+n++,null!==document.getElementById(r)&&(r+=n++),e=r),i=(o||{}).log,b(e,"Added missing iframe ID: "+e+" ("+t.src+")")),e}(t.id);if(a in u&&"iFrameResizer"in t)v(a,"Ignored iFrame, already setup.");else{switch(function(e){if(e=e||{},u[a]=Object.create(null),u[a].iframe=t,u[a].firstRun=!0,u[a].remoteHost=t.src&&t.src.split("/").slice(0,3).join("/"),"object"!=typeof e)throw new TypeError("Options is not an object");Object.keys(e).forEach(r,e);var n,i=e;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(u[a][n]=(Object.prototype.hasOwnProperty.call(i,n)?i:l)[n]);u[a]&&(u[a].targetOrigin=!0!==u[a].checkOrigin||""===(e=u[a].remoteHost)||null!==e.match(/^(about:blank|javascript:|file:\/\/)/)?"*":e)}(o),b(a,"IFrame scrolling "+(u[a]&&u[a].scrolling?"enabled":"disabled")+" for "+a),t.style.overflow=!1===(u[a]&&u[a].scrolling)?"hidden":"auto",u[a]&&u[a].scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=u[a]?u[a].scrolling:"no"}d("Height"),d("Width"),s("maxHeight"),s("minHeight"),s("maxWidth"),s("minWidth"),"number"!=typeof(u[a]&&u[a].bodyMargin)&&"0"!==(u[a]&&u[a].bodyMargin)||(u[a].bodyMarginV1=u[a].bodyMargin,u[a].bodyMargin=u[a].bodyMargin+"px"),function(n){var i=g();i&&t.parentNode&&new i((function(e){e.forEach((function(e){Array.prototype.slice.call(e.removedNodes).forEach((function(e){e===t&&F(t)}))}))})).observe(t.parentNode,{childList:!0}),h(t,"load",(function(){var i,o;W("iFrame.onload",n,t,e,!0),i=u[a]&&u[a].firstRun,o=u[a]&&u[a].heightCalculationMethod in c,!i&&o&&E({iframe:t,height:0,width:0,type:"init"})})),W("init",n,t,e,!0)}(C(a)),u[a]&&(u[a].iframe.iFrameResizer={close:F.bind(null,u[a].iframe),removeListeners:M.bind(null,u[a].iframe),resize:W.bind(null,"Window resize","resize",u[a].iframe),moveToAnchor:function(e){W("Move to anchor","moveToAnchor:"+e,u[a].iframe,a)},sendMessage:function(e){W("Send Message","message:"+(e=JSON.stringify(e)),u[a].iframe,a)}})}function s(e){var n=u[a][e];1/0!==n&&0!==n&&(t.style[e]="number"==typeof n?n+"px":n,b(a,"Set "+e+" = "+t.style[e]))}function d(e){if(u[a]["min"+e]>u[a]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}}function j(e,n){null===f&&(f=setTimeout((function(){f=null,e()}),n))}function H(){"hidden"!==document.visibilityState&&(b("document","Trigger event: Visibility change"),j((function(){P("Tab Visible","resize")}),16))}function P(e,n){Object.keys(u).forEach((function(i){var t;u[t=i]&&"parent"===u[t].resizeFrom&&u[t].autoResize&&!u[t].firstRun&&W(e,n,u[i].iframe,i)}))}function A(){h(window,"message",z),h(window,"resize",(function(){b("window","Trigger event: "+"resize"),j((function(){P("Window resize","resize")}),16)})),h(document,"visibilitychange",H),h(document,"-webkit-visibilitychange",H)}function L(){function n(e,n){if(n){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">");S(n,e),i.push(n)}}for(var i,t=["moz","webkit","o","ms"],o=0;o<t.length&&!d;o+=1)d=window[t[o]+"RequestAnimationFrame"];return d?d=d.bind(window):b("setup","RequestAnimationFrame not supported"),A(),function(t,o){var r;switch(i=[],(r=t)&&r.enablePublicMethods&&v("enablePublicMethods option has been removed, public methods are now always available in the iFrame"),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),n.bind(e,t));break;case"object":n(t,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return i}}"undefined"!=typeof window&&(n=0,t=i=!1,o=7,a=(r="[iFrameSizer]").length,s=null,d=window.requestAnimationFrame,c=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),u={},f=null,l=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){v("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}}),m={},window.jQuery!==e&&function(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,i){S(i,e)})).end()}):y("","Unable to bind to jQuery, it is not fully loaded.")}(window.jQuery),"function"==typeof define&&define.amd?define([],L):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=L()),window.iFrameResize=window.iFrameResize||L())}(),iframe_resizer();