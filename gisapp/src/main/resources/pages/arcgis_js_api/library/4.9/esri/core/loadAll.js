// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/generatorHelper ./tsSupport/awaiterHelper ./asyncUtils ./Collection ./Loadable".split(" "),function(r,d,k,l,m,n,p){function e(d,e){return l(this,void 0,void 0,function(){var g,f,q=this;return k(this,function(h){switch(h.label){case 0:return[4,d.load()];case 1:return h.sent(),g=[],f=function(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];for(a=0;a<b.length;a++){var c=b[a];c&&(Array.isArray(c)?f.apply(void 0,c):n.isCollection(c)?c.forEach(function(a){return f(a)}):
c.isInstanceOf&&c.isInstanceOf(p)&&g.push(c))}},e(f),[4,m.map(g,function(b){return l(q,void 0,void 0,function(){return k(this,function(a){switch(a.label){case 0:return"loadAll"in b&&"function"===typeof b.loadAll?[4,b.loadAll()]:[3,2];case 1:return a.sent(),[3,4];case 2:return[4,b.load()];case 3:a.sent(),a.label=4;case 4:return[2]}})})})];case 2:return h.sent(),[2,d]}})})}Object.defineProperty(d,"__esModule",{value:!0});d.loadAll=e;d.default=e});