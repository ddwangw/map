// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["./declare","./lang"],function(l,m){var k={declareDefinition:function(b,a){var f=[],h=Object.getPrototypeOf(b.prototype),g;if(h!==Object.prototype){var d=h.constructor;g=d.prototype;f.push(d)}a&&(f=f.concat(a));a={};for(var d=Object.getOwnPropertyNames(b.prototype),e=0;e<d.length;e++){var c=d[e];if("constructor"!==c){var k=c;"dojoConstructor"===c&&(k="constructor");g&&b.prototype[c]===g[c]||(a[k]=b.prototype[c])}}d=Object.getOwnPropertyNames(b);h=Object.getOwnPropertyNames(h.constructor);
g={};for(e=0;e<d.length;e++)c=d[e],-1===h.indexOf(c)&&(g[c]=b[c]);return{bases:f,instanceMembers:a,classMembers:g}},subclass:function(b){return function(a){a=k.declareDefinition(a,b);return m.mixin(l(a.bases,a.instanceMembers),a.classMembers)}},shared:function(b){return function(a,f){a[f]=b}}};return k});