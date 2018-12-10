// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../Color","../../core/screenUtils"],function(n,b,m,f){Object.defineProperty(b,"__esModule",{value:!0});b.applyVisualVariables=function(d,a){var b=a.graphic,e=a.renderer,c=a.symbol;a=c.type;if("text"!==a&&"shield-label-symbol"!==a){var g=e.getVisualVariablesForType("size"),h=e.getVisualVariablesForType("color"),k=e.getVisualVariablesForType("opacity"),l=e.getVisualVariablesForType("rotation"),g=g&&g[0],h=h&&h[0],k=k&&k[0],l=l&&l[0];g&&(c=e.getSize(b,{sizeInfo:g,shape:"simple-marker"===
a?c.style:null}),null!=c&&("simple-marker"===a?d.size=f.px2pt(c):"picture-marker"===a?(d.width=f.px2pt(c),d.height=f.px2pt(c)):"simple-line"===a?d.width=f.px2pt(c):d.outline&&(d.outline.width=f.px2pt(c))));h&&((c=e.getColor(b,{colorInfo:h}))&&"simple-marker"===a||"simple-line"===a||"simple-fill"===a)&&(d.color=m.toJSON(c));k&&(a=e.getOpacity(b,{opacityInfo:k}),null!=a&&d.color&&(d.color[3]=Math.round(255*a)));l&&(b=-e.getRotationAngle(b),d.angle=b)}};b.createMultipointLayer=function(){return{layerDefinition:{name:"multipointLayer",
geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}};b.createPolygonLayer=function(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}};b.createPointLayer=function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",
features:[]}}};b.createPolylineLayer=function(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}});