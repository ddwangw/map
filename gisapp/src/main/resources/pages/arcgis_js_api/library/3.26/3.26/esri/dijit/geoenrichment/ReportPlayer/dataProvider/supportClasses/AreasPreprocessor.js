// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/AreasPreprocessor","dojo/_base/Color dojo/_base/lang dojo/when dojo/promise/all dojo/string esri/graphic esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/symbols/jsonUtils esri/tasks/FeatureSet ./FeatureNameUtil ./tasks/EnrichAreasTask ./CustomReportsManager esri/dijit/geoenrichment/utils/GeometryUtil esri/dijit/geoenrichment/ReportPlayer/config dojo/i18n!esri/nls/jsapi".split(" "),function(k,l,g,f,u,v,w,m,n,
p,x,q,r,t,h,y){var e={symbolizeFeature:function(b){function d(){var a=new w;a.setOutline(new m(m.STYLE_SOLID,new k([105,134,68,.55]),2));a.setColor(new k([105,134,68,.55]));return a}b.symbol||b.setSymbol(d())},symbolizeAreas:function(b){b.forEach(function(b){b.feature&&e.symbolizeFeature(b.feature)})}},z={generalize:function(b){var d=[],a=[];b.forEach(function(c,b){!c.feature||c.geographies&&c.geographies.length||(d.push(c.feature),a.push(b))});return g(function(a){function b(a){var b=0;a.geometry.rings.forEach(function(a){b+=
a.length});return b}var c,d,e=t.needGeneralizeGeometry(a,h.generalization.factor,h.generalization.maxVerticesInAllFeatures,h.generalization.numVerticesPerFeature),f;e&&(c=!0,d=[],a=a.map(function(a,c){d.push(b(a));return new v(a.geometry,a.symbol,a.attributes)}),f=t.generalizeGeometry(a,e,h.generalization.numVerticesPerFeature,!0));return g(f,function(){c&&(console.log("Generalize features:"),a.forEach(function(a,c){console.log("#"+c+" "+d[c]+" \x3d\x3e "+b(a))}));return a})}(d),function(c){a.forEach(function(a){b[a].feature=
c[a]})})}},A={provideGeographyFeatures:function(b){return g(r.getCustomReportByID(b),function(d){return f(b.analysisAreas.map(function(a){if(!a.feature&&a.geographies&&a.geographies.length)return(new q).createFeatureForGeographies(a.geographies,{countryID:b.countryID,hierarchy:d.hierarchy}).then(function(b){b=new p(b[0]);a.feature=b.features[0];a.name=a.name||a.feature.attributes.StdGeographyName;a.description=a.description||"Geography";a.address=a.address||a.name;a.geographies[0].attributes&&l.mixin(a.feature.attributes,
a.geographies[0].attributes);(b=a.geographies[0].symbol)?(b=b.toJson?b:n.fromJson(b),a.feature.setSymbol(b)):e.symbolizeFeature(a.feature)})}))})}},B={provideBufferFeatures:function(b){return g(r.getCustomReportByID(b),function(d){return f(b.analysisAreas.map(function(a){if(!a.feature&&a.buffer){var c=a.buffer;return(new q).createFeatureForBuffer(c,{countryID:b.countryID,hierarchy:d.hierarchy}).then(function(b){b=new p(b[0]);a.feature=b.features[0];a.name||(b=y.geoenrichment.dijit.bufferTitle.pointRing,
b[c.units]&&(a.name=u.substitute(b[c.units],{radius:c.radius})));a.description=a.description||"Ring";c.attributes&&l.mixin(a.feature.attributes,c.attributes);(b=c.symbol)?(b=b.toJson?b:n.fromJson(b),a.feature.setSymbol(b)):e.symbolizeFeature(a.feature)})}}))})}};return{preprocessAreas:function(b,d){b.analysisAreas=b.analysisAreas.filter(function(a){return a.feature&&a.feature.geometry&&"polygon"===a.feature.geometry.type||a.geographies&&a.geographies.length||a.buffer});-1!==d.analysisAreasLimit&&
(d.analysisAreasLimit=d.analysisAreasLimit||10,b.analysisAreas.length=Math.min(b.analysisAreas.length,d.analysisAreasLimit));b.analysisAreas.forEach(function(a){a.feature&&!a.feature.attributes&&(a.feature.attributes={})});b.analysisAreas.forEach(function(a){a.name=a.name||a.shortName;if(!a.name&&a.feature){var b=x.guessFeatureName(a.feature);b&&(a.name=a.shortName=b)}});d.symbolizeAreas&&e.symbolizeAreas(b.analysisAreas);return g(z.generalize(b.analysisAreas),function(){return f([A.provideGeographyFeatures(b),
B.provideBufferFeatures(b)])})}}});