// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../geometry/support/aaBoundingRect"],function(f,g,h){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function e(a,c,d,b){void 0===b&&(b=null);this.lij=[0,0,0];this.extent=h.create();this.loadPriority=this.resolution=0;this.measures={visibility:2,screen:{rect:h.create()},distance:0,shouldSplit:!1};this.used=!1;b&&this.acquire(a,c,d,b)}e.prototype.acquire=function(a,c,d,b){this.tilingScheme=b;this.id=e.id(a,c,d);this.lij[0]=a;this.lij[1]=c;this.lij[2]=
d;b.getExtent(a,c,d,this.extent);this.resolution=b.resolutionAtLevel(a)};e.prototype.release=function(){this.tilingScheme=null};e.prototype.getChildren=function(a){var c=this.lij[0]+1,d=2*this.lij[1],b=2*this.lij[2];return a?(a[0].acquire(c,d,b,this.tilingScheme),a[1].acquire(c,d+1,b,this.tilingScheme),a[2].acquire(c,d,b+1,this.tilingScheme),a[3].acquire(c,d+1,b+1,this.tilingScheme),a):[new e(c,d,b,this.tilingScheme),new e(c,d+1,b,this.tilingScheme),new e(c,d,b+1,this.tilingScheme),new e(c,d+1,b+
1,this.tilingScheme)]};e.prototype.copyMeasurementsFrom=function(a){this.measures.visibility=a.measures.visibility;this.measures.shouldSplit=a.measures.shouldSplit;this.measures.distance=a.measures.distance;h.set(a.measures.screen.rect,this.measures.screen.rect)};e.id=function(a,c,d){return a+"/"+c+"/"+d};return e}();g.FeatureTileDescriptor3D=f;g.default=f});