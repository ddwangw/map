// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/tsSupport/decorateHelper @dojo/framework/shim/Set ../../../../../core/has ../../../../../core/libs/rbush/rbush ../../../tiling ./Tile ../../../support/Evented ../../../tiling/TileKey".split(" "),function(k,m,p,z,q,r,t,u,v,w,x){Object.defineProperty(m,"__esModule",{value:!0});var g={added:[],removed:[]},n=new q.default,y=new x(0,0,0,0);k=function(k){function e(a){var b=k.call(this)||this;b._tiles=new Map;b._index=
t(9,r("csp-restrictions")?function(a){return{minX:a.bounds[0],minY:a.bounds[1],maxX:a.bounds[2],maxY:a.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]);b.tiles=[];b.tileInfo=a;b._tileInfoView=new u.TileInfoView(a);b.spatialReference=a.spatialReference;return b}p(e,k);e.prototype.destroy=function(){this._tiles.clear()};e.prototype.has=function(a){return this._tiles.has(a)};e.prototype.get=function(a){return this._tiles.get(a)};e.prototype.findByKey=function(a){return this._tiles.get(a.id)};
e.prototype.intersections=function(a,b){var h="string"===typeof a?this.get(a):a;if(!h)return[];var f=b*h.resolution;b=h.bounds[0]-f;a=h.bounds[1]-f;for(var d=h.bounds[2]+f,h=h.bounds[3]+f,f=[],e=0,g=this._index.search({minX:b,minY:a,maxX:d,maxY:h});e<g.length;e++){var l=g[e],c=l.bounds.slice();c[0]=Math.max(c[0],b);c[1]=Math.max(c[1],a);c[2]=Math.min(c[2],d);c[3]=Math.min(c[3],h);0<c[2]-c[0]&&0<c[3]-c[1]&&f.push({bounds:c,tile:l})}return f};e.prototype.setViewState=function(a){var b=this._tileInfoView.getTileCoverage(a,
0);if(b){a=b.spans;var b=b.lodInfo,e=b.level;if(0<a.length)for(var f=0;f<a.length;f++)for(var d=a[f],k=d.row,m=d.colTo,l=d.colFrom;l<=m;l++){var c=y.set(e,k,b.normalizeCol(l),b.getWorldForColumn(l)).id;n.add(c);this.has(c)||(d=new v.default(this._tileInfoView,c),this._tiles.set(c,d),this._index.insert(d),this.tiles.push(d),g.added.push(d))}for(a=this.tiles.length-1;0<=a;a--)d=this.tiles[a],n.has(d.id)||(this._tiles.delete(d.id),this.tiles.splice(a,1),this._index.remove(d),g.removed.push(d));(g.added.length||
g.removed.length)&&this.emit("update",g);n.clear();g.added.length=0;g.removed.length=0}};return e}(w.default);m.default=k});