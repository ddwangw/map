// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./TiledLayerView3D ./support/tiledLayerUtils ../terrain/terrainUtils ../../layers/RefreshableLayerView".split(" "),function(p,q,g,d,h,k,b,l,f,m,n){return function(e){function a(){return null!==e&&e.apply(this,arguments)||this}g(a,e);Object.defineProperty(a.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===
this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0});a.prototype.initialize=function(){var a=this,c=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);c?this.addResolvingPromise(h.reject(c)):(c=k.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){f.throwIfError(a._getTileInfoCompatibilityError(a.tileInfo,a.view.basemapTerrain.tilingScheme))}),this.addResolvingPromise(c));"version"in this.layer&&this.addResolvingPromise(f.checkArcGISServiceVersionCompatibility(this.layer));
this._updateMinMaxDataLevel();this.maxDataLevel=Math.min(this.maxDataLevel,m.getKnownTiledServiceLevelCap(this.layer.url))};a.prototype.getPopupData=function(a){var c=this.layer;if("tile"!==c.type)return[];var b=this.view.scale;return c.allSublayers.toArray().filter(function(a){var c=0===a.minScale||b<=a.minScale,d=0===a.maxScale||b>=a.maxScale;return a.popupTemplate&&a.popupEnabled&&a.visible&&c&&d}).map(function(b){var c=b.createQuery();c.geometry=a;c.outFields=b.popupTemplate.requiredFields;return b.queryFeatures(c).then(function(a){return a.features})})};
a.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")};d([b.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],a.prototype,"imageFormatIsOpaque",null);d([b.property({aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);d([b.property()],a.prototype,"layer",void 0);d([b.property({aliasOf:"layer.tileInfo"})],a.prototype,"tileInfo",void 0);return a=d([b.subclass("esri.views.3d.layers.TileLayerView3D")],a)}(b.declared(l,n))});