// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("../core/promiseUtils dojo/on dojo/Deferred ../layers/graphics/dehydratedFeatures ../geometry/support/scaleUtils ../geometry/Extent ../tasks/support/Query ../layers/GroupLayer ../core/Accessor".split(" "),function(v,z,A,B,w,C,D,x,E){return E.createSubclass({declaredClass:"esri.views.PopupManager",properties:{map:{dependsOn:["view.map"],readOnly:!0}},constructor:function(){this._featureLayersCache={}},destroy:function(){this._featureLayersCache={};this.view=null},_clickHandle:null,_featureLayersCache:null,
enabled:!1,_enabledSetter:function(c){this._clickHandle&&(c?this._clickHandle.resume():this._clickHandle.pause());this._set("enabled",c)},_mapGetter:function(){return this.get("view.map")||null},view:null,_viewSetter:function(c){this._clickHandle&&(this._clickHandle.remove(),this._clickHandle=null);c&&(this._clickHandle=z.pausable(c,"click",this._clickHandler.bind(this)),this.enabled||this._clickHandle.pause());this._set("view",c)},_closePopup:function(){var c=this.get("view.popup");c&&(c.clear(),
c.close())},_showPopup:function(c,d,a){function h(b){return f.allLayerViews.find(function(a){return a.layer===b})}function k(b){if(null==b)return!1;var a=h(b);return null==a?!1:b.loaded&&!a.suspended&&(b.popupEnabled&&b.popupTemplate||"graphics"===b.type||"geo-rss"===b.type||"map-notes"===b.type||"kml"===b.type||a.getPopupData)}function q(b){return(b=h(b))&&b.hasDraped}var f=this.view;c=f.popup;var m=this,g=[],r="3d"===f.type;this.map.layers.toArray().forEach(function(b){b.isInstanceOf(x)?b.layers.toArray().forEach(function(b){k(b)&&
(!r||h(b)&&h(b).getPopupData||q(b))&&g.push(b)}):k(b)&&(!r||h(b)&&h(b).getPopupData||q(b))&&g.push(b)});0<f.graphics.length&&g.push(f.graphics);(a&&f.graphics.includes(a)?a.getEffectivePopupTemplate():!a||k(a.layer))||(a=null);if(g.length||a){var n=[],p=!!a,l=m._calculateClickTolerance(g);if(d){var t=1;"2d"===f.type&&(t=f.state.resolution);var e=f.basemapTerrain;e&&e.overlayManager&&(t=e.overlayManager.overlayPixelSizeInMapUnits(d));l*=t;e&&!e.spatialReference.equals(f.spatialReference)&&(l*=w.getMetersPerUnitForSR(e.spatialReference)/
w.getMetersPerUnitForSR(f.spatialReference));var e=d.clone().offset(-l,-l),l=d.clone().offset(l,l),u=new C(Math.min(e.x,l.x),Math.min(e.y,l.y),Math.max(e.x,l.x),Math.max(e.y,l.y),f.spatialReference),e=function(b){var c;if("imagery"===b.type){c=new D;c.geometry=d;var g=h(b),e={rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0};e.layerView=g;c=b.queryVisibleRasters(c,e).then(function(b){p=p||0<b.length;return b})}else if("scene"===b.type||!m._featureLayersCache[b.id]&&"function"!==typeof b.queryFeatures){if("map-image"===
b.type||"tile"===b.type||"wms"===b.type)return g=h(b),g.getPopupData(u);var e=[],f,k=!1;"esri.core.Collection\x3cesri.Graphic\x3e"===b.declaredClass?(g=b,f=!0):"graphics"===b.type?(g=b.graphics,f=!0):(g=(g=h(b))&&g.loadedGraphics,f=!1,k=!0);g&&(e=g.filter(function(b){return b&&(!f||b.getEffectivePopupTemplate())&&b.visible&&u.intersects(b.geometry)}).toArray(),k&&(e=e.map(function(a){return B.hydrateGraphic(a,b)})));0<e.length&&(p=!0,c="scene"===b.type?m._fetchSceneAttributes(b,e):v.resolve(e))}else c=
b.createQuery(),c.geometry=u,c=b.queryFeatures(c).then(function(c){c=c.features;if(a&&a.layer===b&&b.objectIdField){var g=b.objectIdField,m=a.attributes[g];c=c.filter(function(b){return b.attributes[g]!==m})}if(!a&&"graphics3DGraphics"in h(b)){var d=[],e=h(b).graphics3DGraphics,f;for(f in e)d.push(e[f].graphic.attributes[b.objectIdField]);c=c.filter(function(a){return-1!==d.indexOf(a.attributes[b.objectIdField])})}p=p||0<c.length;return c});return c};if(r&&!a||!r)var n=g.map(e).filter(function(b){return!!b}),
y=function(b){return b.reduce(function(b,a){return b.concat(a.items?y(a.items):a)},[])},n=y(n);a&&(a.layer&&"scene"===a.layer.type?n.unshift(this._fetchSceneAttributes(a.layer,[a])):a.getEffectivePopupTemplate()&&(e=new A,n.unshift(e.resolve([a]))));n.some(function(b){return!b.isFulfilled()})||p?n.length&&c.open({promises:n,location:d}):m._closePopup()}else m._closePopup()}else m._closePopup()},_fetchSceneAttributes:function(c,d){return this.view.whenLayerView(c).then(function(a){var h=this._getOutFields(c.popupTemplate),
k=d.map(function(c){return a.whenGraphicAttributes(c,h).catch(function(){return c})});return v.eachAlways(k)}.bind(this)).then(function(a){return a.map(function(a){return a.value})})},_getOutFields:function(c){var d=["*"];if("esri.PopupTemplate"===c.declaredClass){var a=null==c.content||Array.isArray(c.content)&&c.content.every(function(a){return"attachments"===a.type||"fields"===a.type&&null==a.fieldInfos||"text"===a.type&&-1===a.text.indexOf("{")});c.fieldInfos&&!c.expressionInfos&&a&&(d=[],c.fieldInfos.forEach(function(a){var c=
a.fieldName&&a.fieldName.toLowerCase();c&&"shape"!==c&&0!==c.indexOf("relationships/")&&d.push(a.fieldName)}))}return d},_calculateClickTolerance:function(c){var d=6;c.forEach(function(a){if(a=a.renderer)"simple"===a.type?((a=a.symbol)&&a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset))),a&&a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))):"unique-value"!==a.type&&"class-breaks"!==a.type||(a.uniqueValueInfos||a.classBreakInfos).forEach(function(a){(a=a.symbol)&&a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset)));
a&&a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))})});return d},_clickHandler:function(c){function d(c){return a.allLayerViews.find(function(a){return a.layer===c})}var a=this.view,h=c.screenPoint,k=this;if(0===c.button&&a.popup&&a.ready){var q="3d"===a.type,f=a.map.allLayers.some(function(a){if(a.isInstanceOf(x))return!1;var c;null==a?c=!1:(c=d(a),c=null==c?!1:a.loaded&&!c.suspended&&(a.popupEnabled&&a.popupTemplate||"graphics"===a.type||c.getPopupData));c&&!(c=!q)&&(c=(a=d(a))&&a.hasDraped);return c?
!0:!1});null!=h?this.view.hitTest(h.x,h.y).then(function(a){f||0<a.results.length?0<a.results.length?(a=a.results[0],k._showPopup(c,a.mapPoint,a.graphic)):k._showPopup(c,c.mapPoint,null):k._closePopup()}):k._showPopup(c,c.mapPoint)}}})});