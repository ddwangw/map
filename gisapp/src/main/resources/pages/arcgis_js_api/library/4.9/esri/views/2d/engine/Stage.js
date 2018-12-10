// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/Error ../../../core/promiseUtils ../../../core/scheduling ./DOMContainer ../../support/screenshotUtils".split(" "),function(q,r,k,l,e,m,n,p){function f(d,b){for(var c=0;c<b.length;c++){var a=b[c];"takeScreenshot"in a?d.push(a):"children"in a&&f(d,a.children)}return d}return function(d){function b(c){var a=d.call(this)||this;a.element=c;a._renderParameters={state:a.state,pixelRatio:window.devicePixelRatio,stationary:!1};a._renderRequested=
!1;a._taskHandle=m.addFrameTask({render:function(){return a.renderFrame()}});a._stationary=!0;a.attached=!0;a._taskHandle.pause();return a}k(b,d);b.prototype.destroy=function(){this.removeAllChildren();this.renderFrame();this._taskHandle.remove();this._taskHandle=null};Object.defineProperty(b.prototype,"state",{get:function(){return this._state},set:function(c){this._state=c;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"stationary",{get:function(){return this._stationary},
set:function(c){this._stationary!==c&&(this._stationary=c,this.requestRender())},enumerable:!0,configurable:!0});b.prototype.start=function(){this._taskHandle.resume()};b.prototype.stop=function(){this._taskHandle.pause()};b.prototype.requestRender=function(){this._renderRequested=!0;this._taskHandle&&this._taskHandle.resume()};b.prototype.takeScreenshot=function(c){var a=f([],this.children);if(!a)return e.reject(new l("mapview:take-screenshot-unavailable"));var b=c.region,d=b.width,h=b.height;return e.eachAlways(a.map(function(a){return a.takeScreenshot(c)})).then(function(a){var b=
document.createElement("canvas"),e=b.getContext("2d"),g=document.createElement("canvas"),f=g.getContext("2d");b.width=d;b.height=h;g.width=d;g.height=h;a.forEach(function(a){if(a=a.value)f.putImageData(a.data,0,0),e.drawImage(g,0,0)});return{dataUrl:p.toDataUrl(b,c),data:e.getImageData(0,0,d,h)}})};b.prototype.renderFrame=function(){this._renderRequested&&(this._renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=
window.devicePixelRatio,this.processRender(this._renderParameters));this._renderRequested||this._taskHandle.pause()};return b}(n)});