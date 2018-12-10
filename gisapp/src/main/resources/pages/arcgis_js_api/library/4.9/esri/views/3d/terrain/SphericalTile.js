// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/ObjectPool ../lib/gl-matrix ../support/earthUtils ../support/mathUtils ./Tile ./TileGeometryFactory".split(" "),function(t,u,m,n,f,g,p,q,r){function k(f,d,a,c){a=g.earthRadius+a;var b=Math.cos(f);c[0]=Math.cos(d)*b*a;c[1]=Math.sin(d)*b*a;c[2]=Math.sin(f)*a}return function(l){function d(a,c,b,e){var h=l.call(this,d.NumSubdivisionsAtLevel)||this;h.obb=[];h.isWebMercator=!1;h.tileUp=f.vec3d.create();h.obb=Array(8);for(var g=
0;8>g;g++)h.obb[g]=f.vec3d.create();void 0!==a&&h.init(a,c,b,e);return h}m(d,l);d.prototype.init=function(a,c,b,e){l.prototype.init.call(this,a,c,b,e);this.isWebMercator=e.spatialReference.isWebMercator;c=this.extentWGS84Rad[0];b=this.extentWGS84Rad[1];e=this.extentWGS84Rad[2];var d=this.extentWGS84Rad[3];a=a[0];var m=p.lerp(b,d,.5),n=p.lerp(c,e,.5);this.edgeLen=(e-c)*Math.cos(0===a?0:Math.min(Math.abs(b),Math.abs(d)))*g.earthRadius;this.edgeLen2=this.edgeLen*this.edgeLen;this.curvatureHeight=g.earthRadius-
Math.sqrt(g.earthRadius*g.earthRadius-this.edgeLen2/4);k(m,n,0,this.centerAtSeaLevel);f.vec3d.set(this.centerAtSeaLevel,this.tileUp);f.vec3d.normalize(this.tileUp);this._updateOBB();this.updateRadiusAndCenter()};d.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])f.vec3d.set3(0,0,0,this.center),this.radius=g.earthRadius+this.elevationBounds[1];else{l.prototype.updateRadiusAndCenter.call(this);var a=Math.max(f.vec3d.dist2(this.center,this.obb[0]),f.vec3d.dist2(this.center,this.obb[1]));
this.radius=Math.sqrt(a)}};d.prototype.isVisible=function(a){if(!this.intersectsClippingArea)return!1;if(9<this.lij[0]){for(var c=this.obb,b=0;6>b;b++){for(var e=void 0,e=0;8>e&&!(0>a[b][0]*c[e][0]+a[b][1]*c[e][1]+a[b][2]*c[e][2]+a[b][3]);e++);if(8===e)return!1}return!0}c=this.radius;b=this.center;return a[0][0]*b[0]+a[0][1]*b[1]+a[0][2]*b[2]+a[0][3]>c||a[1][0]*b[0]+a[1][1]*b[1]+a[1][2]*b[2]+a[1][3]>c||a[2][0]*b[0]+a[2][1]*b[1]+a[2][2]*b[2]+a[2][3]>c||a[3][0]*b[0]+a[3][1]*b[1]+a[3][2]*b[2]+a[3][3]>
c||a[4][0]*b[0]+a[4][1]*b[1]+a[4][2]*b[2]+a[4][3]>c||a[5][0]*b[0]+a[5][1]*b[1]+a[5][2]*b[2]+a[5][3]>c?!1:!0};d.prototype.computeElevationBounds=function(){l.prototype.computeElevationBounds.call(this);this._updateOBB()};d.prototype.createGeometry=function(a,c,b){var e=this._isPole(this.lij[1],this.lij[0]);a.needsUpdate=!1;r.createSphericalGlobeTile(a.numVertsPerRow,this.extent,this.extentWGS84Rad,this.isWebMercator,a.samplerData,c,e,b,this.renderData);this.updateMemoryUsed()};d.prototype._updateOBB=
function(){for(var a=this.extentWGS84Rad,c=this.obb,b=0;2>b;b++){var e=this.elevationBounds[b],d=4*b;k(a[1],a[0],e,c[d++]);k(a[3],a[0],e,c[d++]);k(a[3],a[2],e,c[d++]);k(a[1],a[2],e,c[d++])}this.isWebMercator&&(a=this._isPole(this.lij[1],this.lij[0]),2===a?(f.vec3d.set3(0,0,g.earthRadius,c[1]),f.vec3d.set3(0,0,g.earthRadius,c[2]),f.vec3d.set3(0,0,g.earthRadius,c[5]),f.vec3d.set3(0,0,g.earthRadius,c[6])):1===a&&(f.vec3d.set3(0,0,-g.earthRadius,c[0]),f.vec3d.set3(0,0,-g.earthRadius,c[3]),f.vec3d.set3(0,
0,-g.earthRadius,c[4]),f.vec3d.set3(0,0,-g.earthRadius,c[7])))};d.prototype._isPole=function(a,c){var b=0;a===(1<<c)-1&&(b+=1);0===a&&(b+=2);return b};d.NumSubdivisionsAtLevel=[128,64,32,16,16,8,8,4];d.Pool=new n(d);return d}(q)});