// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Collection ../../../core/Logger ../../../core/watchUtils ./RenderContext ../lib/gl-matrix ../webgl-engine/lib/RenderPass ../webgl-engine/lib/RenderSlot".split(" "),function(g,r,h,k,l,m,f,n,e){function d(c,a,b){if("function"===typeof c[a])c[a](b)}var p=k.getLogger("esri.views.3d.externalRenderers.ExternalRendererStore");g=function(){function c(){this._renderers=new h}c.prototype.add=function(a,b){this._findOrCreateStageRenderer(a).add(b)};c.prototype.remove=function(a,
b){(a=this._findStageRenderer(a))&&a.remove(b);0===a.renderers.length&&(a.destroy(),this._renderers.remove(a))};c.prototype._findStageRenderer=function(a){return this._renderers.find(function(b){return b.view===a})};c.prototype._findOrCreateStageRenderer=function(a){var b=this._findStageRenderer(a);b||(b=new q(a),this._renderers.add(b));return b};return c}();var q=function(){function c(a){var b=this;this.view=a;this.didRender=!0;this.needsRender=!1;this.renderers=new h;this._readyWatchHandle=l.init(a,
"ready",function(a){a?(b.context=new m(b.view),b.view._stage.addRenderPlugin([e.OPAQUE_EXTERNAL,e.TRANSPARENT_EXTERNAL],b)):(b.renderers.forEach(function(a){return d(a,"dispose",b.context)}),b.context=null)})}c.prototype.destroy=function(){var a=this;this.renderers.drain(function(b){a.context&&d(b,"dispose",a.context)});this.view._stage&&this.view._stage.removeRenderPlugin(this);this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null);this.context=null};c.prototype.add=
function(a){-1!==this.renderers.indexOf(a)?p.warn("add(): Cannot add external renderer: renderer has already been added"):(this.renderers.add(a),this.context&&(this._webglStateReset(),d(a,"setup",this.context),this.view._stage.setNeedsRender()))};c.prototype.remove=function(a){var b=this.renderers.indexOf(a);-1!==b&&(this.renderers.removeAt(b),this.context&&(d(a,"dispose",this.context),this.view._stage.setNeedsRender()))};c.prototype.initializeRenderContext=function(a){var b=this;this.context.gl=
a.rctx.gl;this.context.rctx=a.rctx;0<this.renderers.length&&this._webglStateReset();this.renderers.forEach(function(a){return d(a,"setup",b.context)})};c.prototype.uninitializeRenderContext=function(a){};c.prototype.render=function(a){var b=this;if(a.pass!==n.MATERIAL)return!0;this._updateContext(a);0<this.renderers.length&&this._webglStateReset();this.renderers.forEach(function(c){switch(a.slot){case e.OPAQUE_EXTERNAL:d(c,"render",b.context);break;case e.TRANSPARENT_EXTERNAL:d(c,"renderTransparent",
b.context)}});return!0};c.prototype.resetNeedsRender=function(){};c.prototype._updateContext=function(a){this.context.camera.copyFrom(a.camera);f.vec3d.set(a.lightingData.direction,this.context.sunLight.direction);f.vec3d.set(a.lightingData.diffuse,this.context.sunLight.diffuse.color);f.vec3d.set(a.lightingData.ambient,this.context.sunLight.ambient.color);this.context.sunLight.diffuse.intensity=a.lightingData.diffuse[3];this.context.sunLight.ambient.intensity=a.lightingData.ambient[3];this.context._renderTargetHelper=
a.offscreenRenderingHelper};c.prototype._webglStateReset=function(){this.context.rctx.resetState();this.context._renderTargetHelper&&this.context._renderTargetHelper.bindFramebuffer()};return c}();return g});