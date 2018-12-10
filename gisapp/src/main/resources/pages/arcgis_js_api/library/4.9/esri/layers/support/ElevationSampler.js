// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../geometry ../../core/Logger ../../geometry/support/aaBoundingRect ../../geometry/support/contains ../../geometry/support/scaleUtils ../../geometry/support/webMercatorUtils".split(" "),function(r,g,w,x,k,y,z,t){function p(a,b){var c=m(a,b.spatialReference);if(!c)return null;switch(a.type){case "point":a.z=b.elevationAt(c)||0;break;case "polyline":h.spatialReference=c.spatialReference;for(var e=a.hasM&&!a.hasZ,f=0;f<a.paths.length;f++)for(var d=a.paths[f],l=c.paths[f],g=
0;g<d.length;g++){var k=d[g],n=l[g];h.x=n[0];h.y=n[1];n=b.elevationAt(h)||0;e&&(k[3]=k[2]);k[2]=n}a.hasZ=!0;break;case "multipoint":h.spatialReference=c.spatialReference;e=a.hasM&&!a.hasZ;for(f=0;f<a.points.length;f++)d=a.points[f],l=c.points[f],h.x=l[0],h.y=l[1],l=b.elevationAt(h)||0,e&&(d[3]=d[2]),d[2]=l;a.hasZ=!0}return a}function m(a,b){var c=a.spatialReference;return c.equals(b)?a:t.canProject(c,b)?t.project(a,b):(q.error("Cannot project geometry spatial reference (wkid:"+c.wkid+") to elevation sampler spatial reference (wkid:"+
b.wkid+")"),null)}Object.defineProperty(g,"__esModule",{value:!0});var q=x.getLogger("esri.layers.support.ElevationSampler"),v=function(){function a(b,c,a){this.tile=b;this.noDataValue=a;this.extent=k.toExtent(b.tile.extent,c.spatialReference);a=z.getMetersPerUnitForSR(c.spatialReference);b=c.lodAt(b.tile.level).resolution*a;this.demResolution={min:b,max:b}}Object.defineProperty(a.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0});a.prototype.contains=
function(b){b=m(b,this.spatialReference);return y.extentContainsPoint(this.extent,b)};a.prototype.elevationAt=function(b){var a=m(b,this.spatialReference);if(!a)return null;if(!this.contains(b)){var e=this.extent;q.warn("#elevationAt()","Point used to sample elevation ("+b.x+", "+b.y+") is outside of the sampler extent ("+(e.xmin+", "+e.ymin+", "+e.xmax+", "+e.ymax)+")")}return this.tile.sample(a.x,a.y)};a.prototype.queryElevation=function(b){return p(b.clone(),this)};a.prototype.on=function(b,a){return u};
return a}();g.TileElevationSampler=v;r=function(){function a(b,a,e){var c=this,d;"number"===typeof a?(this.noDataValue=a,d=null):(d=a,this.noDataValue=e);this.samplers=d?b.map(function(a){return new v(a,d,c.noDataValue)}):b;if(b=this.samplers[0])for(this.extent=b.extent.clone(),b=b.demResolution,this.demResolution={min:b.min,max:b.max},b=1;b<this.samplers.length;b++)a=this.samplers[b],this.extent.union(a.extent),this.demResolution.min=Math.min(this.demResolution.min,a.demResolution.min),this.demResolution.max=
Math.max(this.demResolution.max,a.demResolution.max);else this.extent=k.toExtent(k.create(),d.spatialReference),this.demResolution={min:0,max:0}}Object.defineProperty(a.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0});a.prototype.elevationAt=function(a){var b=m(a,this.spatialReference);if(!b)return null;for(var e=0,f=this.samplers;e<f.length;e++){var d=f[e];if(d.contains(b))return d.elevationAt(b)}q.warn("#elevationAt()","Point used to sample elevation ("+
a.x+", "+a.y+") is outside of the sampler");return null};a.prototype.queryElevation=function(a){return p(a.clone(),this)};a.prototype.on=function(a,c){return u};return a}();g.MultiTileElevationSampler=r;g.updateGeometryElevation=p;var h=new w.Point,u={remove:function(){}}});