//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","tslib","../../shim/Promise","./util"],a)})(function(a,e){function g(c,b){var a=b.match(/^\.+\//),d=c;if(a){b.match(/^\.\//)&&(b=b.replace(/\.\//,""));if(a=b.match(/\.\.\//g)){c=c.split("/");if(a.length>c.length)throw Error("Path cannot go beyond root directory.");c.splice(c.length-a.length);d=c.join("/");
b=b.replace(/\.\.\//g,"")}b=d+"/"+b}return b}function m(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];var e=__webpack_require__,l=__modules__||{},h=("function"===typeof a[0]?a[0]:function(){return""})().split("/").slice(0,-1).join("/"),a=a.filter(function(a){return"string"===typeof a}).map(function(a){return g(h,a)}).map(function(a){var b=n.__read(a.split("!"),2),c=b[0],b=b[1],f=l[a]||l[c];if(!f)return d.default.reject(Error("Missing module: "+a));if(f.lazy)return new d.default(function(a){return e(f.id)(a)});
a=e(f.id);c=a["default"]||a;return k.isPlugin(c)?(b="function"===typeof c.normalize?c.normalize(b,function(a){return g(h,a)}):g(h,b),d.default.resolve(c.load(b,m))):d.default.resolve(a)});return d.default.all(a)}Object.defineProperty(e,"__esModule",{value:!0});var n=a("tslib"),d=a("../../shim/Promise"),k=a("./util");e.isPlugin=k.isPlugin;e.useDefault=k.useDefault;e.default=m});