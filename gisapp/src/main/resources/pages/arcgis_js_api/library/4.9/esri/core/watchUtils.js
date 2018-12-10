// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","dojo/promise/Promise"],function(z,e,x,y){function l(b,a,d,c,e){e=b.watch(a,function(a,e,g,f){c&&!c(a)||d.call(b,a,e,g,f)},e);if(Array.isArray(a))for(var f=0;f<a.length;f++){var g=b.get(a[f]);c&&c(g)&&d.call(b,g,g,a,b)}else g=b.get(a),c&&c(g)&&d.call(b,g,g,a,b);return e}function n(b,a,d,c,e){function f(){m&&(m.remove(),m=null)}var g=!1,m,k=new x(f),h=new y;h.cancel=k.cancel;h.isCanceled=k.isCanceled;h.isFulfilled=k.isFulfilled;h.isRejected=k.isRejected;
h.isResolved=k.isResolved;h.then=k.then;h.remove=f;Object.freeze(h);m=l(b,a,function(a,c,e,m){g=!0;f();d&&d.call(b,a,c,e,m);k.resolve({value:a,oldValue:c,propertyName:e,target:m})},c,e);g&&f();return h}function p(b){return!!b}function q(b){return!b}function r(b){return!0===b}function t(b){return!1===b}function u(b){return void 0!==b}function v(b){return void 0===b}function w(b,a,d,c){var e=Array.isArray(a)?a:-1<a.indexOf(",")?a.split(","):[a];a=b.watch(a,d,c);for(c=0;c<e.length;c++){var f=e[c].trim(),
g=b.get(f);d.call(b,g,g,f,b)}return a}Object.defineProperty(e,"__esModule",{value:!0});e.init=w;e.watch=function(b,a,d,c){return b.watch(a,d,c)};e.once=function(b,a,d,c){return n(b,a,d,null,c)};e.when=function(b,a,d,c){return l(b,a,d,p,c)};e.whenOnce=function(b,a,d,c){return n(b,a,d,p,c)};e.whenNot=function(b,a,d,c){return l(b,a,d,q,c)};e.whenNotOnce=function(b,a,d,c){return n(b,a,d,q,c)};e.whenTrue=function(b,a,d,c){return l(b,a,d,r,c)};e.whenTrueOnce=function(b,a,d,c){return n(b,a,d,r,c)};e.whenFalse=
function(b,a,d,c){return l(b,a,d,t,c)};e.whenFalseOnce=function(b,a,d,c){return n(b,a,d,t,c)};e.whenDefined=function(b,a,d,c){return l(b,a,d,u,c)};e.whenDefinedOnce=function(b,a,d,c){return n(b,a,d,u,c)};e.whenUndefined=function(b,a,d,c){return l(b,a,d,v,c)};e.whenUndefinedOnce=function(b,a,d,c){return n(b,a,d,v,c)};e.pausable=function(b,a,d,c){var e=!1,f=b.watch(a,function(a,c,f,h){e||d.call(b,a,c,f,h)},c);return{remove:function(){f.remove()},pause:function(){e=!0},resume:function(){e=!1}}};e.on=
function(b,a,d,c,e,f,g){function l(a){var c=k[a];c&&(f&&f(c.target,a,b,d),c.handle.remove(),delete k[a])}var k={},h=w(b,a,function(a,f,g){l(g);a&&"function"===typeof a.on&&(k[g]={handle:a.on(d,c),target:a},e&&e(a,g,b,d))},g);return{remove:function(){h.remove();for(var a in k)l(a)}}}});