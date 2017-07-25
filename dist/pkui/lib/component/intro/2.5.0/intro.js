!function(a,b){"object"==typeof exports?b(exports):"function"==typeof define&&define.cmd?define(function(a,c){b(c)}):"function"==typeof define&&define.amd?define(["exports"],b):b(a)}(this,function(a){function b(a){this._targetElement=a,this._introItems=[],this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:!1,hideNext:!1,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,overlayOpacity:.8,scrollPadding:30,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:!0}}function c(a){var b=[],c=this;if(this._options.steps)for(var e=0,f=this._options.steps.length;e<f;e++){var j=d(this._options.steps[e]);if(j.step=b.length+1,"string"==typeof j.element&&(j.element=document.querySelector(j.element)),"undefined"==typeof j.element||null==j.element){var k=document.querySelector(".introjsFloatingElement");null==k&&(k=document.createElement("div"),k.className="introjsFloatingElement",document.body.appendChild(k)),j.element=k,j.position="floating"}null!=j.element&&b.push(j)}else{var l=a.querySelectorAll("*[data-intro]");if(l.length<1)return!1;for(var e=0,m=l.length;e<m;e++){var n=l[e];if("none"!=n.style.display){var p=parseInt(n.getAttribute("data-step"),10);p>0&&(b[p-1]={element:n,intro:n.getAttribute("data-intro"),step:parseInt(n.getAttribute("data-step"),10),tooltipClass:n.getAttribute("data-tooltipClass"),highlightClass:n.getAttribute("data-highlightClass"),position:n.getAttribute("data-position")||this._options.tooltipPosition})}}for(var q=0,e=0,m=l.length;e<m;e++){var n=l[e];if(null==n.getAttribute("data-step")){for(;;){if("undefined"==typeof b[q])break;q++}b[q]={element:n,intro:n.getAttribute("data-intro"),step:q+1,tooltipClass:n.getAttribute("data-tooltipClass"),highlightClass:n.getAttribute("data-highlightClass"),position:n.getAttribute("data-position")||this._options.tooltipPosition}}}}for(var r=[],s=0;s<b.length;s++)b[s]&&r.push(b[s]);if(b=r,b.sort(function(a,b){return a.step-b.step}),c._introItems=b,A.call(c,a)){g.call(c);a.querySelector(".introjs-skipbutton"),a.querySelector(".introjs-nextbutton");c._onKeyDown=function(b){if(27===b.keyCode&&1==c._options.exitOnEsc)i.call(c,a);else if(37===b.keyCode)h.call(c);else if(39===b.keyCode)g.call(c);else if(13===b.keyCode){var d=b.target||b.srcElement;d&&d.className.indexOf("introjs-prevbutton")>0?h.call(c):d&&d.className.indexOf("introjs-skipbutton")>0?(c._introItems.length-1==c._currentStep&&"function"==typeof c._introCompleteCallback&&c._introCompleteCallback.call(c),i.call(c,a)):g.call(c),b.preventDefault?b.preventDefault():b.returnValue=!1}},c._onResize=function(a){o.call(c,document.querySelector(".introjs-helperLayer")),o.call(c,document.querySelector(".introjs-tooltipReferenceLayer"))},window.addEventListener?(this._options.keyboardNavigation&&window.addEventListener("keydown",c._onKeyDown,!0),window.addEventListener("resize",c._onResize,!0)):document.attachEvent&&(this._options.keyboardNavigation&&document.attachEvent("onkeydown",c._onKeyDown),document.attachEvent("onresize",c._onResize))}return!1}function d(a){if(null==a||"object"!=typeof a||"undefined"!=typeof a.nodeType)return a;var b={};for(var c in a)"undefined"!=typeof jQuery&&a[c]instanceof jQuery?b[c]=a[c]:b[c]=d(a[c]);return b}function e(a){this._currentStep=a-2,"undefined"!=typeof this._introItems&&g.call(this)}function f(a){this._currentStepNumber=a,"undefined"!=typeof this._introItems&&g.call(this)}function g(){if(this._direction="forward","undefined"!=typeof this._currentStepNumber)for(var a=0,b=this._introItems.length;a<b;a++){var c=this._introItems[a];c.step===this._currentStepNumber&&(this._currentStep=a-1,this._currentStepNumber=void 0)}if("undefined"==typeof this._currentStep?this._currentStep=0:++this._currentStep,this._introItems.length<=this._currentStep)return"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void i.call(this,this._targetElement);var d=this._introItems[this._currentStep];"undefined"!=typeof this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,d.element),r.call(this,d)}function h(){if(this._direction="backward",0===this._currentStep)return!1;var a=this._introItems[--this._currentStep];"undefined"!=typeof this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,a.element),r.call(this,a)}function i(a){var b=a.querySelectorAll(".introjs-overlay");if(b&&b.length>0)for(var c=b.length-1;c>=0;c--){var d=b[c];d.style.opacity=0,setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(d),500)}var e=a.querySelector(".introjs-helperLayer");e&&e.parentNode.removeChild(e);var f=a.querySelector(".introjs-tooltipReferenceLayer");f&&f.parentNode.removeChild(f);var g=a.querySelector(".introjs-disableInteraction");g&&g.parentNode.removeChild(g);var h=document.querySelector(".introjsFloatingElement");h&&h.parentNode.removeChild(h),s();var i=document.querySelectorAll(".introjs-fixParent");if(i&&i.length>0)for(var c=i.length-1;c>=0;c--)i[c].className=i[c].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),void 0!=this._introExitCallback&&this._introExitCallback.call(self),this._currentStep=void 0}function j(a,b,c,d,e){var f,g,h,i,j,n="";if(e=e||!1,b.style.top=null,b.style.right=null,b.style.bottom=null,b.style.left=null,b.style.marginLeft=null,b.style.marginTop=null,c.style.display="inherit","undefined"!=typeof d&&null!=d&&(d.style.top=null,d.style.left=null),this._introItems[this._currentStep])switch(f=this._introItems[this._currentStep],n="string"==typeof f.tooltipClass?f.tooltipClass:this._options.tooltipClass,b.className=("introjs-tooltip "+n).replace(/^\s+|\s+$/g,""),j=this._introItems[this._currentStep].position,"auto"!=j&&"auto"!=this._options.tooltipPosition||"floating"!=j&&(j=m.call(this,a,b,j)),h=N(a),g=N(b),i=y(),j){case"top":if(c.className="introjs-arrow bottom",e)var o=0;else var o=15;k(h,o,g,i,b),b.style.bottom=h.height+20+"px";break;case"right":b.style.left=h.width+20+"px",h.top+g.height>i.height?(c.className="introjs-arrow left-bottom",b.style.top="-"+(g.height-h.height-20)+"px"):c.className="introjs-arrow left";break;case"left":e||1!=this._options.showStepNumbers||(b.style.top="15px"),h.top+g.height>i.height?(b.style.top="-"+(g.height-h.height-20)+"px",c.className="introjs-arrow right-bottom"):c.className="introjs-arrow right",b.style.right=h.width+20+"px";break;case"floating":c.style.display="none",b.style.left="50%",b.style.top="50%",b.style.marginLeft="-"+g.width/2+"px",b.style.marginTop="-"+g.height/2+"px","undefined"!=typeof d&&null!=d&&(d.style.left="-"+(g.width/2+18)+"px",d.style.top="-"+(g.height/2+18)+"px");break;case"bottom-right-aligned":c.className="introjs-arrow top-right";var p=0;l(h,p,g,b),b.style.top=h.height+20+"px";break;case"bottom-middle-aligned":c.className="introjs-arrow top-middle";var q=h.width/2-g.width/2;e&&(q+=5),l(h,q,g,b)&&(b.style.right=null,k(h,q,g,i,b)),b.style.top=h.height+20+"px";break;case"bottom-left-aligned":case"bottom":default:c.className="introjs-arrow top";var o=0;k(h,o,g,i,b),b.style.top=h.height+20+"px"}}function k(a,b,c,d,e){return a.left+b+c.width>d.width?(e.style.left=d.width-c.width-a.left+"px",!1):(e.style.left=b+"px",!0)}function l(a,b,c,d){return a.left+a.width-b-c.width<0?(d.style.left=-a.left+"px",!1):(d.style.right=b+"px",!0)}function m(a,b,c){var d=this._options.positionPrecedence.slice(),e=y(),f=N(b).height+10,g=N(b).width+20,h=N(a),i="floating";return h.left+g>e.width||h.left+h.width/2-g<0?(n(d,"bottom"),n(d,"top")):(h.height+h.top+f>e.height&&n(d,"bottom"),h.top-f<0&&n(d,"top")),h.width+h.left+g>e.width&&n(d,"right"),h.left-g<0&&n(d,"left"),d.length>0&&(i=d[0]),c&&"auto"!=c&&d.indexOf(c)>-1&&(i=c),i}function n(a,b){a.indexOf(b)>-1&&a.splice(a.indexOf(b),1)}function o(a){if(a){if(!this._introItems[this._currentStep])return;var b=this._introItems[this._currentStep],c=N(b.element),d=10;x(b.element)?a.className+=" introjs-fixedTooltip":a.className=a.className.replace(" introjs-fixedTooltip",""),"floating"==b.position&&(d=0),a.setAttribute("style","width: "+(c.width+d)+"px; height:"+(c.height+d)+"px; top:"+(c.top-5)+"px;left: "+(c.left-5)+"px;")}}function p(){var a=document.querySelector(".introjs-disableInteraction");null===a&&(a=document.createElement("div"),a.className="introjs-disableInteraction",this._targetElement.appendChild(a)),o.call(this,a)}function q(a){a.setAttribute("role","button"),a.tabIndex=0}function r(a){"undefined"!=typeof this._introChangeCallback&&this._introChangeCallback.call(this,a.element);var b=this,c=document.querySelector(".introjs-helperLayer"),d=document.querySelector(".introjs-tooltipReferenceLayer"),e="introjs-helperLayer";N(a.element);if("string"==typeof a.highlightClass&&(e+=" "+a.highlightClass),"string"==typeof this._options.highlightClass&&(e+=" "+this._options.highlightClass),null!=c){var f=d.querySelector(".introjs-helperNumberLayer"),k=d.querySelector(".introjs-tooltiptext"),l=d.querySelector(".introjs-arrow"),m=d.querySelector(".introjs-tooltip"),n=d.querySelector(".introjs-skipbutton"),r=d.querySelector(".introjs-prevbutton"),u=d.querySelector(".introjs-nextbutton");if(c.className=e,m.style.opacity=0,m.style.display="none",null!=f){var v=this._introItems[a.step-2>=0?a.step-2:0];(null!=v&&"forward"==this._direction&&"floating"==v.position||"backward"==this._direction&&"floating"==a.position)&&(f.style.opacity=0)}o.call(b,c),o.call(b,d);var w=document.querySelectorAll(".introjs-fixParent");if(w&&w.length>0)for(var x=w.length-1;x>=0;x--)w[x].className=w[x].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");s(),b._lastShowElementTimer&&clearTimeout(b._lastShowElementTimer),b._lastShowElementTimer=setTimeout(function(){null!=f&&(f.innerHTML=a.step),k.innerHTML=a.intro,m.style.display="block",j.call(b,a.element,m,l,f),b._options.showBullets&&(d.querySelector(".introjs-bullets li > a.active").className="",d.querySelector('.introjs-bullets li > a[data-stepnumber="'+a.step+'"]').className="active"),d.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style","width:"+O.call(b)+"%;"),m.style.opacity=1,f&&(f.style.opacity=1),u.tabIndex===-1?n.focus():u.focus()},350)}else{var A=document.createElement("div"),B=document.createElement("div"),C=document.createElement("div"),D=document.createElement("div"),E=document.createElement("div"),F=document.createElement("div"),G=document.createElement("div"),H=document.createElement("div");A.className=e,B.className="introjs-tooltipReferenceLayer",o.call(b,A),o.call(b,B),this._targetElement.appendChild(A),this._targetElement.appendChild(B),C.className="introjs-arrow",E.className="introjs-tooltiptext",E.innerHTML=a.intro,F.className="introjs-bullets",this._options.showBullets===!1&&(F.style.display="none");for(var I=document.createElement("ul"),x=0,J=this._introItems.length;x<J;x++){var K=document.createElement("li"),L=document.createElement("a");L.onclick=function(){b.goToStep(this.getAttribute("data-stepnumber"))},x===a.step-1&&(L.className="active"),q(L),L.innerHTML="&nbsp;",L.setAttribute("data-stepnumber",this._introItems[x].step),K.appendChild(L),I.appendChild(K)}F.appendChild(I),G.className="introjs-progress",this._options.showProgress===!1&&(G.style.display="none");var M=document.createElement("div");if(M.className="introjs-progressbar",M.setAttribute("style","width:"+O.call(this)+"%;"),G.appendChild(M),H.className="introjs-tooltipbuttons",this._options.showButtons===!1&&(H.style.display="none"),D.className="introjs-tooltip",D.appendChild(E),D.appendChild(F),D.appendChild(G),1==this._options.showStepNumbers){var P=document.createElement("span");P.className="introjs-helperNumberLayer",P.innerHTML=a.step,B.appendChild(P)}D.appendChild(C),B.appendChild(D);var u=document.createElement("a");u.onclick=function(){b._introItems.length-1!=b._currentStep&&g.call(b)},q(u),u.innerHTML=this._options.nextLabel;var r=document.createElement("a");r.onclick=function(){0!=b._currentStep&&h.call(b)},q(r),r.innerHTML=this._options.prevLabel;var n=document.createElement("a");n.className="introjs-button introjs-skipbutton",q(n),n.innerHTML=this._options.skipLabel,n.onclick=function(){b._introItems.length-1==b._currentStep&&"function"==typeof b._introCompleteCallback&&b._introCompleteCallback.call(b),i.call(b,b._targetElement)},H.appendChild(n),this._introItems.length>1&&(H.appendChild(r),H.appendChild(u)),D.appendChild(H),j.call(b,a.element,D,C,P)}if(this._options.disableInteraction===!0&&p.call(b),r.removeAttribute("tabIndex"),u.removeAttribute("tabIndex"),0==this._currentStep&&this._introItems.length>1?(n.className="introjs-button introjs-skipbutton",u.className="introjs-button introjs-nextbutton",1==this._options.hidePrev?(r.className="introjs-button introjs-prevbutton introjs-hidden",u.className+=" introjs-fullbutton"):r.className="introjs-button introjs-prevbutton introjs-disabled",r.tabIndex="-1",n.innerHTML=this._options.skipLabel):this._introItems.length-1==this._currentStep||1==this._introItems.length?(n.innerHTML=this._options.doneLabel,n.className+=" introjs-donebutton",r.className="introjs-button introjs-prevbutton",1==this._options.hideNext?(u.className="introjs-button introjs-nextbutton introjs-hidden",r.className+=" introjs-fullbutton"):u.className="introjs-button introjs-nextbutton introjs-disabled",u.tabIndex="-1"):(n.className="introjs-button introjs-skipbutton",r.className="introjs-button introjs-prevbutton",u.className="introjs-button introjs-nextbutton",n.innerHTML=this._options.skipLabel),u.focus(),t(a),!z(a.element)&&this._options.scrollToElement===!0){var Q=a.element.getBoundingClientRect(),R=y().height,S=Q.bottom-(Q.bottom-Q.top),T=Q.bottom-R;S<0||a.element.clientHeight>R?window.scrollBy(0,S-this._options.scrollPadding):window.scrollBy(0,T+70+this._options.scrollPadding)}"undefined"!=typeof this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,a.element)}function s(){for(var a=document.querySelectorAll(".introjs-showElement"),b=0,c=a.length;b<c;b++){var d=a[b];v(d,/introjs-[a-zA-Z]+/g)}}function t(a){if(a.element instanceof SVGElement)for(var b=a.element.parentNode;null!=a.element.parentNode&&b.tagName&&"body"!==b.tagName.toLowerCase();)"svg"===b.tagName.toLowerCase()&&u(b,"introjs-showElement introjs-relativePosition"),b=b.parentNode;u(a.element,"introjs-showElement");var c=w(a.element,"position");"absolute"!==c&&"relative"!==c&&"fixed"!==c&&u(a.element,"introjs-relativePosition");for(var b=a.element.parentNode;null!=b&&b.tagName&&"body"!==b.tagName.toLowerCase();){var d=w(b,"z-index"),e=parseFloat(w(b,"opacity")),f=w(b,"transform")||w(b,"-webkit-transform")||w(b,"-moz-transform")||w(b,"-ms-transform")||w(b,"-o-transform");(/[0-9]+/.test(d)||e<1||"none"!==f&&void 0!==f)&&(b.className+=" introjs-fixParent"),b=b.parentNode}}function u(a,b){if(a instanceof SVGElement){var c=a.getAttribute("class")||"";a.setAttribute("class",c+" "+b)}else a.className+=" "+b}function v(a,b){if(a instanceof SVGElement){var c=a.getAttribute("class")||"";a.setAttribute("class",c.replace(b,"").replace(/^\s+|\s+$/g,""))}else a.className=a.className.replace(b,"").replace(/^\s+|\s+$/g,"")}function w(a,b){var c="";return a.currentStyle?c=a.currentStyle[b]:document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b)),c&&c.toLowerCase?c.toLowerCase():c}function x(a){var b=a.parentNode;return!(!b||"HTML"===b.nodeName)&&("fixed"==w(a,"position")||x(b))}function y(){if(void 0!=window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var a=document.documentElement;return{width:a.clientWidth,height:a.clientHeight}}function z(a){var b=a.getBoundingClientRect();return b.top>=0&&b.left>=0&&b.bottom+80<=window.innerHeight&&b.right<=window.innerWidth}function A(a){var b=document.createElement("div"),c="",d=this;if(b.className="introjs-overlay",a.tagName&&"body"!==a.tagName.toLowerCase()){var e=N(a);e&&(c+="width: "+e.width+"px; height:"+e.height+"px; top:"+e.top+"px;left: "+e.left+"px;",b.setAttribute("style",c))}else c+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",b.setAttribute("style",c);return a.appendChild(b),b.onclick=function(){1==d._options.exitOnOverlayClick&&i.call(d,a)},setTimeout(function(){c+="opacity: "+d._options.overlayOpacity.toString()+";",b.setAttribute("style",c)},10),!0}function B(){var a=this._targetElement.querySelector(".introjs-hintReference");if(a){var b=a.getAttribute("data-step");return a.parentNode.removeChild(a),b}}function C(a){if(this._introItems=[],this._options.hints)for(var b=0,c=this._options.hints.length;b<c;b++){var e=d(this._options.hints[b]);"string"==typeof e.element&&(e.element=document.querySelector(e.element)),e.hintPosition=e.hintPosition||this._options.hintPosition,e.hintAnimation=e.hintAnimation||this._options.hintAnimation,null!=e.element&&this._introItems.push(e)}else{var f=a.querySelectorAll("*[data-hint]");if(f.length<1)return!1;for(var b=0,c=f.length;b<c;b++){var g=f[b],h=g.getAttribute("data-hintAnimation");h=h?"true"==h:this._options.hintAnimation,this._introItems.push({element:g,hint:g.getAttribute("data-hint"),hintPosition:g.getAttribute("data-hintPosition")||this._options.hintPosition,hintAnimation:h,tooltipClass:g.getAttribute("data-tooltipClass"),position:g.getAttribute("data-position")||this._options.tooltipPosition})}}K.call(this),document.addEventListener?(document.addEventListener("click",B.bind(this),!1),window.addEventListener("resize",D.bind(this),!0)):document.attachEvent&&(document.attachEvent("onclick",B.bind(this)),document.attachEvent("onresize",D.bind(this)))}function D(){for(var a=0,b=this._introItems.length;a<b;a++){var c=this._introItems[a];"undefined"!=typeof c.targetElement&&L.call(this,c.hintPosition,c.element,c.targetElement)}}function E(a){B.call(this);var b=this._targetElement.querySelector('.introjs-hint[data-step="'+a+'"]');b&&(b.className+=" introjs-hidehint"),"undefined"!=typeof this._hintCloseCallback&&this._hintCloseCallback.call(this,a)}function F(){var a=this._targetElement.querySelectorAll(".introjs-hint");if(a&&a.length>0)for(var b=0;b<a.length;b++)E.call(this,a[b].getAttribute("data-step"))}function G(){var a=this._targetElement.querySelectorAll(".introjs-hint");if(a&&a.length>0)for(var b=0;b<a.length;b++)H.call(this,a[b].getAttribute("data-step"));else C.call(this,this._targetElement)}function H(a){var b=this._targetElement.querySelector('.introjs-hint[data-step="'+a+'"]');b&&(b.className=b.className.replace(/introjs\-hidehint/g,""))}function I(){var a=this._targetElement.querySelectorAll(".introjs-hint");if(a&&a.length>0)for(var b=0;b<a.length;b++)J.call(this,a[b].getAttribute("data-step"))}function J(a){var b=this._targetElement.querySelector('.introjs-hint[data-step="'+a+'"]');b&&b.parentNode.removeChild(b)}function K(){var a=this,b=document.querySelector(".introjs-hints");if(null!=b)c=b;else{var c=document.createElement("div");c.className="introjs-hints"}for(var d=0,e=this._introItems.length;d<e;d++){var f=this._introItems[d];if(!document.querySelector('.introjs-hint[data-step="'+d+'"]')){var g=document.createElement("a");q(g),function(b,c,d){b.onclick=function(e){var f=e?e:window.event;f.stopPropagation&&f.stopPropagation(),null!=f.cancelBubble&&(f.cancelBubble=!0),M.call(a,b,c,d)}}(g,f,d),g.className="introjs-hint",f.hintAnimation||(g.className+=" introjs-hint-no-anim"),x(f.element)&&(g.className+=" introjs-fixedhint");var h=document.createElement("div");h.className="introjs-hint-dot";var i=document.createElement("div");i.className="introjs-hint-pulse",g.appendChild(h),g.appendChild(i),g.setAttribute("data-step",d),f.targetElement=f.element,f.element=g,L.call(this,f.hintPosition,g,f.targetElement),c.appendChild(g)}}document.body.appendChild(c),"undefined"!=typeof this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}function L(a,b,c){var d=N.call(this,c),e=20,f=20;switch(a){default:case"top-left":b.style.left=d.left+"px",b.style.top=d.top+"px";break;case"top-right":b.style.left=d.left+d.width-e+"px",b.style.top=d.top+"px";break;case"bottom-left":b.style.left=d.left+"px",b.style.top=d.top+d.height-f+"px";break;case"bottom-right":b.style.left=d.left+d.width-e+"px",b.style.top=d.top+d.height-f+"px";break;case"middle-left":b.style.left=d.left+"px",b.style.top=d.top+(d.height-f)/2+"px";break;case"middle-right":b.style.left=d.left+d.width-e+"px",b.style.top=d.top+(d.height-f)/2+"px";break;case"middle-middle":b.style.left=d.left+(d.width-e)/2+"px",b.style.top=d.top+(d.height-f)/2+"px";break;case"bottom-middle":b.style.left=d.left+(d.width-e)/2+"px",b.style.top=d.top+d.height-f+"px";break;case"top-middle":b.style.left=d.left+(d.width-e)/2+"px",b.style.top=d.top+"px"}}function M(a,b,c){"undefined"!=typeof this._hintClickCallback&&this._hintClickCallback.call(this,a,b,c);var d=B.call(this);if(parseInt(d,10)!=c){var e=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div");e.className="introjs-tooltip",e.onclick=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},f.className="introjs-tooltiptext";var i=document.createElement("p");i.innerHTML=b.hint;var k=document.createElement("a");k.className="introjs-button",k.innerHTML=this._options.hintButtonLabel,k.onclick=E.bind(this,c),f.appendChild(i),f.appendChild(k),g.className="introjs-arrow",e.appendChild(g),e.appendChild(f),this._currentStep=a.getAttribute("data-step"),h.className="introjs-tooltipReferenceLayer introjs-hintReference",h.setAttribute("data-step",a.getAttribute("data-step")),o.call(this,h),h.appendChild(e),document.body.appendChild(h),j.call(this,a,e,g,null,!0)}}function N(a){var b=jQuery(a).position(),c={},d=document.body,e=document.documentElement,f=window.pageYOffset||e.scrollTop||d.scrollTop,g=window.pageXOffset||e.scrollLeft||d.scrollLeft;if(a instanceof SVGElement){var h=a.getBoundingClientRect();c.top=h.top+f,c.width=h.width,c.height=h.height,c.left=h.left+g}else{c.width=a.offsetWidth,c.height=a.offsetHeight;for(var i=0,j=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)i+=a.offsetLeft,j+=a.offsetTop,a=a.offsetParent;c.top=j,c.left=i}return c.left=b.left,c.top=b.top,c}function O(){var a=parseInt(this._currentStep+1,10);return a/this._introItems.length*100}function P(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}var Q="2.5.0",R=function(a){if("object"==typeof a)return new b(a);if("string"==typeof a){var c=document.querySelector(a);if(c)return new b(c);throw new Error("There is no element with given selector.")}return new b(document.body)};return R.version=Q,R.fn=b.prototype={clone:function(){return new b(this)},setOption:function(a,b){return this._options[a]=b,this},setOptions:function(a){return this._options=P(this._options,a),this},start:function(){return c.call(this,this._targetElement),this},goToStep:function(a){return e.call(this,a),this},addStep:function(a){return this._options.steps||(this._options.steps=[]),this._options.steps.push(a),this},addSteps:function(a){if(a.length){for(var b=0;b<a.length;b++)this.addStep(a[b]);return this}},goToStepNumber:function(a){return f.call(this,a),this},nextStep:function(){return g.call(this),this},previousStep:function(){return h.call(this),this},exit:function(){return i.call(this,this._targetElement),this},refresh:function(){return o.call(this,document.querySelector(".introjs-helperLayer")),o.call(this,document.querySelector(".introjs-tooltipReferenceLayer")),D.call(this),this},onbeforechange:function(a){if("function"!=typeof a)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=a,this},onchange:function(a){if("function"!=typeof a)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=a,this},onafterchange:function(a){if("function"!=typeof a)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=a,this},oncomplete:function(a){if("function"!=typeof a)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=a,this},onhintsadded:function(a){if("function"!=typeof a)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=a,this},onhintclick:function(a){if("function"!=typeof a)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=a,this},onhintclose:function(a){if("function"!=typeof a)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=a,this},onexit:function(a){if("function"!=typeof a)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=a,this},addHints:function(){return C.call(this,this._targetElement),this},hideHint:function(a){return E.call(this,a),this},hideHints:function(){return F.call(this),this},showHint:function(a){return H.call(this,a),this},showHints:function(){return G.call(this),this},removeHints:function(){return I.call(this),this},removeHint:function(a){return J.call(this,a),this}},a.introJs=R,R});