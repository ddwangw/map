// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../TimeExtent ../../core/JSONSupport ../../core/kebabDictionary ../../core/lang ../../core/accessorSupport/decorators ../../geometry/support/jsonUtils ../../geometry/support/typeUtils ../../symbols/support/jsonUtils ../../symbols/support/typeUtils ./QuantizationParameters ./StatisticDefinition".split(" "),function(x,y,k,d,l,m,n,e,p,c,q,r,t,u,v,w){var g=e({esriSpatialRelIntersects:"intersects",
esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});
return function(e){function b(a){a=e.call(this,a)||this;a.datumTransformation=null;a.distance=void 0;a.gdbVersion=null;a.geometry=null;a.geometryPrecision=void 0;a.groupByFieldsForStatistics=null;a.having=null;a.historicMoment=null;a.maxAllowableOffset=void 0;a.maxRecordCountFactor=1;a.multipatchOption=null;a.num=void 0;a.objectIds=null;a.orderByFields=null;a.outFields=null;a.outSpatialReference=null;a.outStatistics=null;a.parameterValues=null;a.pixelSize=null;a.quantizationParameters=null;a.rangeValues=
null;a.relationParameter=null;a.resultType=null;a.returnDistinctValues=!1;a.returnGeometry=!1;a.returnCentroid=!1;a.returnExceededLimitFeatures=!0;a.returnM=void 0;a.returnZ=void 0;a.source=null;a.spatialRelationship="intersects";a.start=void 0;a.sqlFormat=null;a.text=null;a.timeExtent=null;a.units="meters";a.where=null;return a}k(b,e);f=b;b.prototype.castDatumTransformation=function(a){return"number"===typeof a||"object"===typeof a?a:null};b.prototype.writeHistoricMoment=function(a,b,c){b.historicMoment=
a&&a.getTime()};b.prototype.writeParameterValues=function(a,b,c){if(a){c={};for(var d in a){var e=a[d];Array.isArray(e)?c[d]=e.map(function(a){return a instanceof Date?a.getTime():a}):c[d]=e instanceof Date?e.getTime():e}b.parameterValues=c}};b.prototype.writeStart=function(a,b,c){b.resultOffset=this.start;b.resultRecordCount=this.num||10;b.where="1\x3d1"};b.prototype.writeWhere=function(a,b,c){b.where=a||"1\x3d1"};b.prototype.clone=function(){return new f(p.clone({datumTransformation:this.datumTransformation,
distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,
outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,
start:this.start,sqlFormat:this.text,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))};var f;d([c.property({json:{write:!0}})],b.prototype,"datumTransformation",void 0);d([c.cast("datumTransformation")],b.prototype,"castDatumTransformation",null);d([c.property({type:Number,json:{write:!0}})],b.prototype,"distance",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"gdbVersion",void 0);d([c.property({types:r.types,json:{read:q.fromJSON,write:!0}})],b.prototype,
"geometry",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"geometryPrecision",void 0);d([c.property({type:[String],json:{write:!0}})],b.prototype,"groupByFieldsForStatistics",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"having",void 0);d([c.property({type:Date})],b.prototype,"historicMoment",void 0);d([c.writer("historicMoment")],b.prototype,"writeHistoricMoment",null);d([c.property({type:Number,json:{write:!0}})],b.prototype,"maxAllowableOffset",void 0);d([c.property({type:Number,
cast:function(a){return 1>a?1:5<a?5:a},json:{write:{overridePolicy:function(a){return{enabled:1<a}}}}})],b.prototype,"maxRecordCountFactor",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"multipatchOption",void 0);d([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],b.prototype,"num",void 0);d([c.property({type:[Number],json:{write:!0}})],b.prototype,"objectIds",void 0);d([c.property({type:[String],json:{write:!0}})],b.prototype,"orderByFields",void 0);d([c.property({type:[String],
json:{write:!0}})],b.prototype,"outFields",void 0);d([c.property({type:l.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],b.prototype,"outSpatialReference",void 0);d([c.property({type:[w],json:{write:!0}})],b.prototype,"outStatistics",void 0);d([c.property({json:{write:!0}})],b.prototype,"parameterValues",void 0);d([c.writer("parameterValues")],b.prototype,"writeParameterValues",null);d([c.property({types:u.types,json:{read:t.read,write:!0}})],b.prototype,"pixelSize",void 0);
d([c.property({type:v.default,json:{write:!0}})],b.prototype,"quantizationParameters",void 0);d([c.property({type:[Object],json:{write:!0}})],b.prototype,"rangeValues",void 0);d([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(a){return{enabled:"relation"===this.spatialRelationship}}}}})],b.prototype,"relationParameter",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"resultType",void 0);d([c.property({type:Boolean,
json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"returnDistinctValues",void 0);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"returnGeometry",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"returnCentroid",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:!a}}}}})],b.prototype,"returnExceededLimitFeatures",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],
b.prototype,"returnM",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(a){return{enabled:a}}}}})],b.prototype,"returnZ",void 0);d([c.property({json:{write:!0}})],b.prototype,"source",void 0);d([c.property({type:String,json:{read:{source:"spatialRel",reader:g.read},write:{target:"spatialRel",writer:g.write}}})],b.prototype,"spatialRelationship",void 0);d([c.property({type:Number,json:{read:{source:"resultOffset"}}})],b.prototype,"start",void 0);d([c.writer("start"),c.writer("num")],
b.prototype,"writeStart",null);d([c.property({type:String,json:{write:!0}})],b.prototype,"sqlFormat",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"text",void 0);d([c.property({type:m,json:{write:!0}})],b.prototype,"timeExtent",void 0);d([c.property({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy:function(a){return{enabled:0<this.distance}}}}})],b.prototype,"units",void 0);d([c.property({type:String,json:{write:{overridePolicy:function(a){return{enabled:null!=
a||0<this.start}}}}})],b.prototype,"where",void 0);d([c.writer("where")],b.prototype,"writeWhere",null);return b=f=d([c.subclass("esri.tasks.support.Query")],b)}(c.declared(n))});