// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","dojo/errors/CancelError"],function(c,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function a(){this._deferreds=[];this._values=[]}a.prototype.push=function(a){var b=new e;this._deferreds.push(b);this._values.push(a);return b.promise};a.prototype.unshift=function(a){var b=new e;this._deferreds.unshift(b);this._values.unshift(a);return b.promise};a.prototype.length=function(){return this._deferreds.length};a.prototype.process=function(){this._deferreds.shift().resolve(this._values.shift())};
a.prototype.cancelAll=function(){for(var a=new f,b=0,c=this._deferreds;b<c.length;b++)c[b].cancel(a);this._deferreds.length=0;this._values.length=0};return a}();d.IdleQueue=c});