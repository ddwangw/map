// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/support/aaBoundingRect ./FeatureTileVisibility3D ../../lib/gl-matrix ../../support/geometryUtils".split(" "),function(p,q,g,u,c,r){Object.defineProperty(q,"__esModule",{value:!0});p=function(){function e(a){this.pointOfInterestInMap=[0,0];this.screenRect=g.create();this.tileSize=a.tileSize;this.maxVerticalScreenSize=a.maxVerticalScreenSize;this.renderCoordsHelper=a.renderCoordsHelper;this.tilingScheme=a.tilingScheme;this.visibility=new u.FeatureTileVisibility3D({renderCoordsHelper:a.renderCoordsHelper})}
e.prototype.begin=function(a,d,b){this.camera=a;this.z=b;this.pointOfInterestInMap[0]=d.x;this.pointOfInterestInMap[1]=d.y;g.fromValues(0,0,a.fullWidth,a.fullHeight,this.screenRect);this.visibility.begin(a,b)};e.prototype.end=function(){this.visibility.end()};e.prototype.updateTile=function(a){a.measures.visibility=this.visibility.calculate(a);0!==a.measures.visibility&&this.updateScreenMeasure(a);this.updateDistanceMeasure(a)};e.prototype.updateDistanceMeasure=function(a){a.measures.distance=g.distance(a.extent,
this.pointOfInterestInMap)};e.prototype.updateScreenMeasure=function(a){var d=v,b=1<<d,c=a.measures.screen.rect;g.empty(c);for(var e=0,w=a.lij[0]+d,k=a.lij[1]<<d,d=a.lij[2]<<d,h=this.tileSizeWithBias(a),h=h*h,f=!1,l=0;l<b;l++){for(var m=0;m<b&&!(f=this.computeScreenArea(a,w,k+l,d+m,c),e+=f.area,f=e>h&&g.height(c)>this.maxVerticalScreenSize);m++);if(f)break}a.measures.shouldSplit=e>h};e.prototype.tileSizeWithBias=function(a){return 1===a.measures.visibility?this.tileSize*x:this.tileSize};e.prototype.computeScreenArea=
function(a,d,b,c,e){var f=n.points;this.projectToScreen(d,b,c,1===a.measures.visibility,f);g.empty(h);for(a=0;4>a;a++)g.expandPointInPlace(h,f[a]);g.expand(e,h);g.intersection(h,this.screenRect,t);n.screenOverlap=g.area(t)/g.area(h);n.area=r.triangle.areaPoints2d(f[0],f[1],f[2])+r.triangle.areaPoints2d(f[0],f[2],f[3]);return n};e.prototype.projectToScreen=function(a,d,b,c,e){this.tilingScheme.ensureMaxLod(a);this.tilingScheme.getExtent(a,d,b,f);this.toRenderCoords(f,0,3,k[0]);this.toRenderCoords(f,
2,3,k[1]);this.toRenderCoords(f,2,1,k[2]);this.toRenderCoords(f,0,1,k[3]);c&&(this.projectToPlane(k,this.camera.frustumPlanes[4]),this.projectToPlane(k,this.camera.frustumPlanes[3]),this.projectToPlane(k,this.camera.frustumPlanes[2]));for(a=0;4>a;a++)this.camera.projectPoint(k[a],e[a])};e.prototype.projectToPlane=function(a,d){for(var b=0;4>b;b++)l[b]=r.plane.distance(d,a[b]);b=Math.max(l[0],l[1],l[2],l[3]);if(0<b)for(d=c.vec3d.scale(d,-b,m),b=0;4>b;b++)c.vec3d.add(a[b],d)};e.prototype.toRenderCoords=
function(a,d,b,c){m[0]=a[d];m[1]=a[b];m[2]=this.z;this.renderCoordsHelper.toRenderCoords(m,this.tilingScheme.spatialReference,c);return c};return e}();q.FeatureTileMeasurements3D=p;var h=g.create(),t=g.create(),v=2,x=5,n={points:[c.vec3d.create(),c.vec3d.create(),c.vec3d.create(),c.vec3d.create()],area:0,screenOverlap:0},f=g.create(),m=c.vec3d.create(),k=[c.vec3d.create(),c.vec3d.create(),c.vec3d.create(),c.vec3d.create()],l=[0,0,0,0];q.default=p});