// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer".split(" "),function(k,r,n,p,l,g,d,m,q){return function(e){function a(){return null!==e&&e.apply(this,arguments)||this}n(a,e);a.prototype.getImageUrl=function(c,a,d,b){throw new g("dynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");};a.prototype.fetchImage=function(c,a,e,b){c=this.getImageUrl(c,
a,e,b);var h={responseType:"image"};b&&b.timestamp&&(h.query={_ts:b.timestamp});var f;"string"===typeof c?(f=c,b=l(c,h)):b=c.then(function(a){f=a;return l(f,h)});return b.then(function(a){return a.data}).catch(function(a){return a&&"cancel"===a.dojoType?d.reject(a):f?d.reject(new g("dynamiclayer:image-fetch-error","Unable to load image: "+f,{error:a})):d.reject(new g("dynamiclayer:getImageUrl-error","Unable to create image url",{error:a}))})};a.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return d.create(function(a){return k(["../views/2d/layers/MapImageLayerView2D"],
a)});case "3d":return d.create(function(a){return k(["../views/3d/layers/MapImageLayerView3D"],a)})}};return a=p([m.subclass("esri.layers.DynamicLayer")],a)}(m.declared(q))});