// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../request","./urlUtils"],function(n,b,f,l,m){function e(a){a=a.toJSON();a.objectIds&&(a.objectIds=a.objectIds.join(","));a.outFields&&(a.outFields=a.outFields.join(","));a.outSpatialReference&&(a.outSR=a.outSR.wkid||JSON.stringify(a.outSR.toJSON()),delete a.outSpatialReference);a.source&&(a.layer=JSON.stringify({source:a.source}),delete a.source);return a}Object.defineProperty(b,"__esModule",{value:!0});b.toQueryStringParameters=
e;b.executeRelationshipQuery=function(a,c,b){c={query:m.mapParameters(f({},a.query,{f:"json"},e(c)))};b&&(c=f({},b,c));return l(a.path+"/queryRelatedRecords",c).then(function(a){for(var b=a.data,c=b.geometryType,f=b.spatialReference,g={},h=0,b=b.relatedRecordGroups;h<b.length;h++){var d=b[h],e={fields:void 0,objectIdFieldName:void 0,geometryType:c,spatialReference:f,features:d.relatedRecords};if(null!=d.objectId)g[d.objectId]=e;else for(var k in d)d.hasOwnProperty(k)&&"relatedRecords"!==k&&(g[d[k]]=
e)}a.data=g;return a})}});