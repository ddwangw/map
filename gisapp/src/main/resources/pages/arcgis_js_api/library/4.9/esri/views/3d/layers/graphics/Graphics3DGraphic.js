// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/ObjectPool ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures ./featureExpressionInfoUtils ../../support/projectionUtils".split(" "),function(x,y,m,n,q,r,g,h,t,u,v){var p=new r(Array,function(b){return g.set(b,g.ZERO)},null,10,5),w=h.create();return function(){function b(a,
d,c,e){this.addedToSpatialIndex=!1;this._labelGraphics=[];this._auxiliaryGraphics=[];for(var b=Array(2),f=0;f<b.length;f++)b[f]=Array(3);this._visibilityFlags=b;this.extent=this._featureExpressionFeature=null;this.graphics3DSymbol=d;this.graphic=a;this._graphics=c;this._featureExpressionFeature=u.createFeature(a,e)}b.prototype.initialize=function(a,d){var c=this;this._layer=a;this._stage=d;this.forEachSymbolLayerGraphic(function(e){e.initialize(a,d);e.setVisibility(c.isVisible())})};b.prototype.destroy=
function(){this.forEachRenderedGraphic(function(a){return a.destroy()});this._graphics.length=0;this._labelGraphics.length=0;this._auxiliaryGraphics.length=0};b.prototype.clearLabelGraphics=function(){this.forEachLabelGraphic(function(a){return a.destroy()});this._labelGraphics.length=0};b.prototype.addLabelGraphic=function(a,d,c){this._labelGraphics.push(a);a.initialize(d,c);a.setVisibility(this.isVisible(1))};b.prototype.addAuxiliaryGraphic=function(a){this._auxiliaryGraphics.push(a);this._layer&&
(a.initialize(this._layer,this._stage),a.setVisibility(this.isVisible()))};b.prototype.isDraped=function(){var a=!1;this.forEachSymbolLayerGraphic(function(d){"draped"===d.type&&(a=!0)});return a};b.prototype.areVisibilityFlagsSet=function(a,d,c){void 0===c&&(c=0);c=this._visibilityFlags[c];if(null!=a)return c[a];a=!0;for(var e=0;e<c.length;e++)if(e!==d){var b=c[e];a=a&&(null==b||!0===b)}return a};b.prototype.isVisible=function(a){void 0===a&&(a=0);for(var d=0;d<=a;d++)for(var c=this._visibilityFlags[d],
e=0;e<c.length;e++){var b=c[e];if(null!==b&&!1===b)return!1}return!0};b.prototype.setVisibilityFlag=function(a,d,c){void 0===c&&(c=0);var b=this.isVisible(c);this._visibilityFlags[c][a]=d;var g=this.isVisible(c);if(b===g)return!1;if(1===c)this.forEachLabelGraphic(function(a){return a.setVisibility(g)});else{this.forEachSymbolLayerGraphic(function(a){return a.setVisibility(g)});var f=this.isVisible(1);this.forEachLabelGraphic(function(a){return a.setVisibility(f)})}return!0};b.prototype.getBSRadius=
function(){var a=0;this.forEachSymbolLayerGraphic(function(d){a=Math.max(a,d.getBSRadius())});return a};b.prototype.getCenterObjectSpace=function(){return this._graphics[0].getCenterObjectSpace()};b.prototype.computeExtent=function(a){if(!this.extent){this.extent=h.create();var d=this.graphic.geometry,c=d.spatialReference;t.computeAABR(d,this.extent);if(!c.equals(a)&&!v.boundingRectToBoundingRect(this.extent,c,this.extent,a))return this.extent=null,!1}return!0};b.prototype.getProjectedBoundingBox=
function(a,d,c,b){return n(this,void 0,void 0,function(){var e=this;return m(this,function(f){switch(f.label){case 0:return b||(b={boundingBox:null,requiresDrapedElevation:!1,screenSpaceObjects:[]}),b.boundingBox?g.empty(b.boundingBox):b.boundingBox=g.empty(),b.requiresDrapedElevation=!1,[4,q.forEach(this._graphics,function(f){return n(e,void 0,void 0,function(){var e,k,l;return m(this,function(h){switch(h.label){case 0:if(!f)return[2];e="draped"===f.type?d:a;k=p.acquire();return[4,f.getProjectedBoundingBox(e,
c,k,b.screenSpaceObjects)];case 1:return l=h.sent(),isFinite(l[2])&&isFinite(l[5])||(b.requiresDrapedElevation=!0),l&&g.expand(b.boundingBox,k),p.release(k),[2]}})})})];case 1:return f.sent(),g.allFinite(b.boundingBox)||h.allFinite(g.toRect(b.boundingBox,w))?[2,b]:[2,null]}})})};b.prototype.needsElevationUpdates=function(){for(var a=0,b=this._graphics;a<b.length;a++){var c=b[a];if(c&&("object3d"===c.type||"lod-instance"===c.type)&&c.needsElevationUpdates)return!0}a=0;for(b=this._labelGraphics;a<b.length;a++)if((c=
b[a])&&c.needsElevationUpdates)return!0;return!1};b.prototype.alignWithElevation=function(a,b){var c=this;this.forEachRenderedGraphic(function(d){"object3d"!==d.type&&"lod-instance"!==d.type||d.alignWithElevation(a,b,c._featureExpressionFeature)})};b.prototype.addHighlight=function(a,b){this.forEachSymbolLayerGraphic(function(c){return c.addHighlight(a,b)})};b.prototype.removeHighlight=function(a){this.forEachSymbolLayerGraphic(function(b){return b.removeHighlight(a)})};b.prototype.forEachGraphicList=
function(a,b){a.forEach(function(a,d){return a&&b(a,d)})};b.prototype.forEachSymbolLayerGraphic=function(a){this.forEachGraphicList(this._graphics,a);this.forEachGraphicList(this._auxiliaryGraphics,a)};b.prototype.forEachLabelGraphic=function(a){this.forEachGraphicList(this._labelGraphics,a)};b.prototype.forEachRenderedGraphic=function(a){this.forEachSymbolLayerGraphic(a);this.forEachLabelGraphic(a)};return b}()});