!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return a(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||o()}function i(t,e){return a(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,s,a=[],u=!0,l=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(i=r.call(n)).done)&&(a.push(i.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}(t,e)||r(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t){if(Array.isArray(t))return t}t.r(e),t.d(e,{Helpers:function(){return d}});var u=["transitionend","webkitTransitionEnd","oTransitionEnd"],l=["transition","MozTransition","webkitTransition","WebkitTransition","OTransition"];function c(t){throw new Error("Parameter required".concat(t?": `".concat(t,"`"):""))}var d={ROOT_EL:"undefined"!=typeof window?document.documentElement:null,LAYOUT_BREAKPOINT:1200,RESIZE_DELAY:200,menuPsScroll:null,mainMenu:null,_curStyle:null,_styleEl:null,_resizeTimeout:null,_resizeCallback:null,_transitionCallback:null,_transitionCallbackTimeout:null,_listeners:[],_initialized:!1,_autoUpdate:!1,_lastWindowHeight:0,_scrollToActive:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=this.getLayoutMenu();if(n){var i=n.querySelector("li.menu-item.active:not(.open)");if(i){var o=this.getLayoutMenu().querySelector(".menu-inner");if("string"==typeof i&&(i=document.querySelector(i)),"number"!=typeof i&&(i=i.getBoundingClientRect().top+o.scrollTop),i<parseInt(2*o.clientHeight/3,10))return;var r=o.scrollTop,s=i-r-parseInt(o.clientHeight/2,10),a=+new Date;!0===t?function t(){var n,i,u,l=+new Date-a,c=(n=l,i=r,u=s,(n/=e/2)<1?u/2*n*n+i:-u/2*((n-=1)*(n-2)-1)+i);o.scrollTop=c,l<e?requestAnimationFrame(t):o.scrollTop=s}():o.scrollTop=s}}},_addClass:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ROOT_EL;e&&void 0!==e.length?e.forEach((function(e){e&&t.split(" ").forEach((function(t){return e.classList.add(t)}))})):e&&t.split(" ").forEach((function(t){return e.classList.add(t)}))},_removeClass:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ROOT_EL;e&&void 0!==e.length?e.forEach((function(e){e&&t.split(" ").forEach((function(t){return e.classList.remove(t)}))})):e&&t.split(" ").forEach((function(t){return e.classList.remove(t)}))},_toggleClass:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.ROOT_EL,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;t.classList.contains(e)?t.classList.replace(e,n):t.classList.replace(n,e)},_hasClass:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ROOT_EL,n=!1;return t.split(" ").forEach((function(t){e.classList.contains(t)&&(n=!0)})),n},_findParent:function(t,e){if(t&&"BODY"===t.tagName.toUpperCase()||"HTML"===t.tagName.toUpperCase())return null;for(t=t.parentNode;t&&"BODY"!==t.tagName.toUpperCase()&&!t.classList.contains(e);)t=t.parentNode;return t&&"BODY"!==t.tagName.toUpperCase()?t:null},_triggerWindowEvent:function(t){var e;"undefined"!=typeof window&&(document.createEvent?("function"==typeof Event?e=new Event(t):(e=document.createEvent("Event")).initEvent(t,!1,!0),window.dispatchEvent(e)):window.fireEvent("on".concat(t),document.createEventObject()))},_triggerEvent:function(t){this._triggerWindowEvent("layout".concat(t)),this._listeners.filter((function(e){return e.event===t})).forEach((function(t){return t.callback.call(null)}))},_updateInlineStyle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this._styleEl||(this._styleEl=document.createElement("style"),this._styleEl.type="text/css",document.head.appendChild(this._styleEl));var n="\n.layout-menu-fixed .layout-navbar-full .layout-menu,\n.layout-page {\n  padding-top: {navbarHeight}px !important;\n}\n.content-wrapper {\n  padding-bottom: {footerHeight}px !important;\n}".replace(/\{navbarHeight\}/gi,t).replace(/\{footerHeight\}/gi,e);this._curStyle!==n&&(this._curStyle=n,this._styleEl.textContent=n)},_removeInlineStyle:function(){this._styleEl&&document.head.removeChild(this._styleEl),this._styleEl=null,this._curStyle=null},_redrawLayoutMenu:function(){var t=this.getLayoutMenu();if(t&&t.querySelector(".menu")){var e=t.querySelector(".menu-inner"),n=e.scrollTop,i=document.documentElement.scrollTop;return t.style.display="none",t.style.display="",e.scrollTop=n,document.documentElement.scrollTop=i,!0}return!1},_supportsTransitionEnd:function(){if(window.QUnit)return!1;var t=document.body||document.documentElement;if(!t)return!1;var e=!1;return l.forEach((function(n){void 0!==t.style[n]&&(e=!0)})),e},_getNavbarHeight:function(){var t=this,e=this.getLayoutNavbar();if(!e)return 0;if(!this.isSmallScreen())return e.getBoundingClientRect().height;var n=e.cloneNode(!0);n.id=null,n.style.visibility="hidden",n.style.position="absolute",Array.prototype.slice.call(n.querySelectorAll(".collapse.show")).forEach((function(e){return t._removeClass("show",e)})),e.parentNode.insertBefore(n,e);var i=n.getBoundingClientRect().height;return n.parentNode.removeChild(n),i},_getFooterHeight:function(){var t=this.getLayoutFooter();return t?t.getBoundingClientRect().height:0},_getAnimationDuration:function(t){var e=window.getComputedStyle(t).transitionDuration;return parseFloat(e)*(-1!==e.indexOf("ms")?1:1e3)},_setMenuHoverState:function(t){this[t?"_addClass":"_removeClass"]("layout-menu-hover")},_setCollapsed:function(t){var e=this;this.isSmallScreen()&&(t?this._removeClass("layout-menu-expanded"):setTimeout((function(){e._addClass("layout-menu-expanded")}),this._redrawLayoutMenu()?5:0))},_bindLayoutAnimationEndEvent:function(t,e){var n=this,i=this.getMenu(),o=i?this._getAnimationDuration(i)+50:0;if(!o)return t.call(this),void e.call(this);this._transitionCallback=function(t){t.target===i&&(n._unbindLayoutAnimationEndEvent(),e.call(n))},u.forEach((function(t){i.addEventListener(t,n._transitionCallback,!1)})),t.call(this),this._transitionCallbackTimeout=setTimeout((function(){n._transitionCallback.call(n,{target:i})}),o)},_unbindLayoutAnimationEndEvent:function(){var t=this,e=this.getMenu();this._transitionCallbackTimeout&&(clearTimeout(this._transitionCallbackTimeout),this._transitionCallbackTimeout=null),e&&this._transitionCallback&&u.forEach((function(n){e.removeEventListener(n,t._transitionCallback,!1)})),this._transitionCallback&&(this._transitionCallback=null)},_bindWindowResizeEvent:function(){var t=this;this._unbindWindowResizeEvent();var e=function(){t._resizeTimeout&&(clearTimeout(t._resizeTimeout),t._resizeTimeout=null),t._triggerEvent("resize")};this._resizeCallback=function(){t._resizeTimeout&&clearTimeout(t._resizeTimeout),t._resizeTimeout=setTimeout(e,t.RESIZE_DELAY)},window.addEventListener("resize",this._resizeCallback,!1)},_unbindWindowResizeEvent:function(){this._resizeTimeout&&(clearTimeout(this._resizeTimeout),this._resizeTimeout=null),this._resizeCallback&&(window.removeEventListener("resize",this._resizeCallback,!1),this._resizeCallback=null)},_bindMenuMouseEvents:function(){var t=this;if(!(this._menuMouseEnter&&this._menuMouseLeave&&this._windowTouchStart)){var e=this.getLayoutMenu();if(!e)return this._unbindMenuMouseEvents();this._menuMouseEnter||(this._menuMouseEnter=function(){return t.isSmallScreen()||t._hasClass("layout-transitioning"),t._setMenuHoverState(!1)},e.addEventListener("mouseenter",this._menuMouseEnter,!1),e.addEventListener("touchstart",this._menuMouseEnter,!1)),this._menuMouseLeave||(this._menuMouseLeave=function(){t._setMenuHoverState(!1)},e.addEventListener("mouseleave",this._menuMouseLeave,!1)),this._windowTouchStart||(this._windowTouchStart=function(e){e&&e.target&&t._findParent(e.target,".layout-menu")||t._setMenuHoverState(!1)},window.addEventListener("touchstart",this._windowTouchStart,!0))}},_unbindMenuMouseEvents:function(){if(this._menuMouseEnter||this._menuMouseLeave||this._windowTouchStart){var t=this.getLayoutMenu();this._menuMouseEnter&&(t&&(t.removeEventListener("mouseenter",this._menuMouseEnter,!1),t.removeEventListener("touchstart",this._menuMouseEnter,!1)),this._menuMouseEnter=null),this._menuMouseLeave&&(t&&t.removeEventListener("mouseleave",this._menuMouseLeave,!1),this._menuMouseLeave=null),this._windowTouchStart&&(t&&window.addEventListener("touchstart",this._windowTouchStart,!0),this._windowTouchStart=null),this._setMenuHoverState(!1)}},scrollToActive:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._scrollToActive(t)},setCollapsed:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("collapsed"),n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.getLayoutMenu()&&(this._unbindLayoutAnimationEndEvent(),n&&this._supportsTransitionEnd()?(this._addClass("layout-transitioning"),e&&this._setMenuHoverState(!1),this._bindLayoutAnimationEndEvent((function(){t.isSmallScreen&&t._setCollapsed(e)}),(function(){t._removeClass("layout-transitioning"),t._triggerWindowEvent("resize"),t._triggerEvent("toggle"),t._setMenuHoverState(!1)}))):(this._addClass("layout-no-transition"),e&&this._setMenuHoverState(!1),this._setCollapsed(e),setTimeout((function(){t._removeClass("layout-no-transition"),t._triggerWindowEvent("resize"),t._triggerEvent("toggle"),t._setMenuHoverState(!1)}),1)))},toggleCollapsed:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setCollapsed(!this.isCollapsed(),t)},setPosition:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("fixed"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c("offcanvas");this._removeClass("layout-menu-offcanvas layout-menu-fixed layout-menu-fixed-offcanvas"),!t&&e?this._addClass("layout-menu-offcanvas"):t&&!e?(this._addClass("layout-menu-fixed"),this._redrawLayoutMenu()):t&&e&&(this._addClass("layout-menu-fixed-offcanvas"),this._redrawLayoutMenu()),this.update()},getLayoutMenu:function(){return document.querySelector(".layout-menu")},getMenu:function(){var t=this.getLayoutMenu();return t?this._hasClass("menu",t)?t:t.querySelector(".menu"):null},getLayoutNavbar:function(){return document.querySelector(".layout-navbar")},getLayoutFooter:function(){return document.querySelector(".content-footer")},update:function(){(this.getLayoutNavbar()&&(!this.isSmallScreen()&&this.isLayoutNavbarFull()&&this.isFixed()||this.isNavbarFixed())||this.getLayoutFooter()&&this.isFooterFixed())&&this._updateInlineStyle(this._getNavbarHeight(),this._getFooterHeight()),this._bindMenuMouseEvents()},setAutoUpdate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("enable");e&&!this._autoUpdate?(this.on("resize.Helpers:autoUpdate",(function(){return t.update()})),this._autoUpdate=!0):!e&&this._autoUpdate&&(this.off("resize.Helpers:autoUpdate"),this._autoUpdate=!1)},isRtl:function(){return"rtl"===document.querySelector("body").getAttribute("dir")||"rtl"===document.querySelector("html").getAttribute("dir")},isMobileDevice:function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},isSmallScreen:function(){return(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<this.LAYOUT_BREAKPOINT},isLayoutNavbarFull:function(){return!!document.querySelector(".layout-wrapper.layout-navbar-full")},isCollapsed:function(){return this.isSmallScreen()?!this._hasClass("layout-menu-expanded"):this._hasClass("layout-menu-collapsed")},isFixed:function(){return this._hasClass("layout-menu-fixed layout-menu-fixed-offcanvas")},isNavbarFixed:function(){return this._hasClass("layout-navbar-fixed")||!this.isSmallScreen()&&this.isFixed()&&this.isLayoutNavbarFull()},isFooterFixed:function(){return this._hasClass("layout-footer-fixed")},isLightStyle:function(){return document.documentElement.classList.contains("light-style")},on:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("event"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c("callback"),o=i(t.split("."),1)[0],r=n(t.split(".")).slice(1);r=r.join(".")||null,this._listeners.push({event:o,namespace:r,callback:e})},off:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("event"),o=i(e.split("."),1)[0],r=n(e.split(".")).slice(1);r=r.join(".")||null,this._listeners.filter((function(t){return t.event===o&&t.namespace===r})).forEach((function(e){return t._listeners.splice(t._listeners.indexOf(e),1)}))},init:function(){var t=this;this._initialized||(this._initialized=!0,this._updateInlineStyle(0),this._bindWindowResizeEvent(),this.off("init._Helpers"),this.on("init._Helpers",(function(){t.off("resize._Helpers:redrawMenu"),t.on("resize._Helpers:redrawMenu",(function(){t.isSmallScreen()&&!t.isCollapsed()&&t._redrawLayoutMenu()})),"number"==typeof document.documentMode&&document.documentMode<11&&(t.off("resize._Helpers:ie10RepaintBody"),t.on("resize._Helpers:ie10RepaintBody",(function(){if(!t.isFixed()){var e=document.documentElement.scrollTop;document.body.style.display="none",document.body.style.display="block",document.documentElement.scrollTop=e}})))})),this._triggerEvent("init"))},destroy:function(){var t=this;this._initialized&&(this._initialized=!1,this._removeClass("layout-transitioning"),this._removeInlineStyle(),this._unbindLayoutAnimationEndEvent(),this._unbindWindowResizeEvent(),this._unbindMenuMouseEvents(),this.setAutoUpdate(!1),this.off("init._Helpers"),this._listeners.filter((function(t){return"init"!==t.event})).forEach((function(e){return t._listeners.splice(t._listeners.indexOf(e),1)})))},initPasswordToggle:function(){var t=document.querySelectorAll(".form-password-toggle i");null!=t&&t.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=t.closest(".form-password-toggle"),i=n.querySelector("i"),o=n.querySelector("input");"text"===o.getAttribute("type")?(o.setAttribute("type","password"),i.classList.replace("bx-show","bx-hide")):"password"===o.getAttribute("type")&&(o.setAttribute("type","text"),i.classList.replace("bx-hide","bx-show"))}))}))},initSpeechToText:function(){var t=window.SpeechRecognition||window.webkitSpeechRecognition,e=document.querySelectorAll(".speech-to-text");if(null!=t&&null!=e){var n=new t;document.querySelectorAll(".speech-to-text i").forEach((function(t){var e=!1;t.addEventListener("click",(function(){t.closest(".input-group").querySelector(".form-control").focus(),n.onspeechstart=function(){e=!0},!1===e&&n.start(),n.onerror=function(){e=!1},n.onresult=function(e){t.closest(".input-group").querySelector(".form-control").value=e.results[0][0].transcript},n.onspeechend=function(){e=!1,n.stop()}}))}))}},ajaxCall:function(t){return new Promise((function(e,n){var i=new XMLHttpRequest;i.open("GET",t),i.onload=function(){return 200===i.status?e(i.response):n(Error(i.statusText))},i.onerror=function(t){return n(Error("Network Error: ".concat(t)))},i.send()}))},initSidebarToggle:function(){document.querySelectorAll('[data-bs-toggle="sidebar"]').forEach((function(t){t.addEventListener("click",(function(){var e=t.getAttribute("data-target"),n=t.getAttribute("data-overlay"),i=document.querySelectorAll(".app-overlay");document.querySelectorAll(e).forEach((function(t){t.classList.toggle("show"),null!=n&&!1!==n&&void 0!==i&&(t.classList.contains("show")?i[0].classList.add("show"):i[0].classList.remove("show"),i[0].addEventListener("click",(function(e){e.currentTarget.classList.remove("show"),t.classList.remove("show")})))}))}))}))}};return"undefined"!=typeof window&&(d.init(),d.isMobileDevice()&&window.chrome&&document.documentElement.classList.add("layout-menu-100vh"),"complete"===document.readyState?d.update():document.addEventListener("DOMContentLoaded",(function t(){d.update(),document.removeEventListener("DOMContentLoaded",t)}))),e}()}));