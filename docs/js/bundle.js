(()=>{"use strict";function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var e=function(n,e){return Math.floor(Math.random()*(e-n+1)+n)},t=function(){var n=e(0,255),t=e(0,255),r=e(0,255);return"rgb(".concat(n," ").concat(t," ").concat(r,")")},r=function(){var n,e;document.querySelector(".header").insertAdjacentHTML("afterend",'<main> <div class="color-container container"> <h1 class="color-title">Background:<span class="color-text"> RED</span></h1> <a href="#" class="button switch-button">Click me</a> </div> </main> '),n=document.body,e=document.querySelector(".color-text"),document.querySelector(".switch-button").addEventListener("click",(function(){e.textContent=t(),n.style.backgroundColor=t()}))};const a=function(){document.querySelector(".main-container").innerHTML='<hader class="header"> <nav class="nav-bar"> <ul class="menu container"> <div class="titlewrapper"> <li><a class="link titulo" href="#">Color Flipper</a></li> </div> <div class="links-wrapper"> <li><a class="link" href="#">Simple</a></li> <li><a class="link" href="#">Hex</a></li> </div> </ul> </nav> </hader> ',document.querySelector(".main-container").insertAdjacentHTML("beforeend","")};var o=new(function(){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.paths=n}var t,r,a;return t=e,(r=[{key:"initRouter",value:function(){var n=window.location.hash;return!n&&(n="/"),n}},{key:"RenderComponent",value:function(){!function(n,e){var t=e.find((function(e){return e.path==n}));if(null!=t)return t.action();(0,e[e.length-1].action)()}(this.initRouter(),this.paths)}}])&&n(t.prototype,r),a&&n(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}())([{path:"/",action:function(){a(),r()}}]);document.readyState&&(o.initRouter(),o.RenderComponent()),window.onhashchange=function(){o.RenderComponent()}})();
//# sourceMappingURL=bundle.js.map