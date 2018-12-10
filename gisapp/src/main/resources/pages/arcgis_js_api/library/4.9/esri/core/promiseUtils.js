// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred dojo/when dojo/promise/all ./Error".split(" "),function(p,e,g,h,k,n){function l(a){if(a){if("function"!==typeof a.forEach){var b=Object.keys(a),d=b.map(function(c){return a[c]});return l(d).then(function(a){var c={};b.forEach(function(b,f){return c[b]=a[f]});return c})}var c=new g(function(c){a.forEach(function(a){return a.cancel(c)})}),f=[],e=a.length;0===e&&c.resolve(f);a.forEach(function(a){var b={promise:a};f.push(b);a.then(function(a){b.value=a}).catch(function(a){b.error=
a}).then(function(){--e;0===e&&c.resolve(f)})});return c.promise}}function m(a,b){var d=new g(b);a(function(a){return h(a).then(d.resolve)},d.reject);return d.promise}Object.defineProperty(e,"__esModule",{value:!0});e.all=function(a){return k(a)};e.filter=function(a,b){var d=a.slice();return k(a.map(function(a,f){return b(a,f)})).then(function(a){return d.filter(function(b,c){return a[c]})})};e.eachAlways=l;e.create=m;e.reject=function(a){var b=new g;b.reject(a);return b.promise};e.resolve=function(a){void 0===
a&&(a=null);var b=new g;b.resolve(a);return b.promise};e.after=function(a,b){void 0===b&&(b=null);var d=0,c=new g(function(){d&&(clearTimeout(d),d=0)}),d=setTimeout(function(){c.resolve(b)},a);return c.promise};e.timeout=function(a,b,d){var c=0,f=new g(a.cancel);a.then(function(a){f.isFulfilled()||(f.resolve(a),c&&(clearTimeout(c),c=0))});a.catch(function(a){f.isFulfilled()||(f.reject(a),c&&(clearTimeout(c),c=0))});c=setTimeout(function(){f.reject(d||n("promiseUtils:timeout","The wrapped promise did not resolve within "+
b+" ms"))},b);return f.promise};e.wrapCallback=function(a){var b=!1,d=new g(function(){return b=!0});a(function(a){b||d.resolve(a)});return d.promise};e.isThenable=function(a){return a&&"function"===typeof a.then};e.when=function(a){return h(a)};e.createResolver=function(a){var b,d;a=m(function(a,c){b=a;d=c},a);var c=function(a){b(a)};c.resolve=function(a){return b(a)};c.reject=function(a){return d(a)};c.promise=a;return c}});