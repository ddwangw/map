//>>built
(function(b){"object"===typeof module&&"object"===typeof module.exports?(b=b(require,exports),void 0!==b&&(module.exports=b)):"function"===typeof define&&define.amd&&define("require exports ../shim/Promise ./has ./request ./load".split(" "),b)})(function(b,e){Object.defineProperty(e,"__esModule",{value:!0});var l=b("../shim/Promise"),m=b("./has"),q=b("./request"),r=b("./load"),f;if(m.default("host-browser"))f=function(a,b){q.default(a).then(function(a){a.text().then(function(a){b(a)})})};else if(m.default("host-node")){var t=
r.isAmdRequire(b)&&b.nodeRequire?b.nodeRequire("fs"):b("fs");f=function(a,b){t.readFile(a,{encoding:"utf8"},function(a,c){if(a)throw a;b(c)})}}else f=function(){throw Error("dojo/text not supported on this platform");};var c={},g={};e.get=function(a){return new l.default(function(b,c){f(a,function(a){b(a)})})};e.normalize=function(a,b){a=a.split("!");var c=a[0];return(/^\./.test(c)?b(c):c)+(a[1]?"!"+a[1]:"")};e.load=function(a,b,e,m){function n(a){if(l)if(a){a=a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
"");var b=a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);a=b?b[1]:a}else a="";e(a)}a=a.split("!");var l=1<a.length,h=a[0],d=b.toUrl(h),k;h in c?k=c[h]:d in c&&(k=c[d]);if(k)n(k);else if(g[d])g[d].push(n);else{var p=g[d]=[n];f(d,function(a){c[h]=c[d]=a;for(var b=0;b<p.length;)p[b++](a||"");delete g[d]})}}});