// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoPreviewSampleUtil",["dojo/_base/lang"],function(e){var c={findNonEmptySample:function(a){if(!a)return null;var b;return a.isSiteAttribute?(a.attribute.domain&&a.attribute.domain.codedValues&&a.attribute.domain.codedValues.some(function(a){if(c._isNonEmptySample(a.name))return b=a.name,!0}),b):a.isDataLayerAttribute&&a.attribute.samples&&a.attribute.samples.length?(a.attribute.samples.some(function(a){if(c._isNonEmptySample(a))return b=
a,!0}),b):null},getNonEmptySamples:function(a){if(!a)return null;if(a.isSiteAttribute){if(a.attribute.domain&&a.attribute.domain.codedValues)return a.attribute.domain.codedValues.map(function(a){return a.name}).filter(c._isNonEmptySample)}else if(a.isDataLayerAttribute&&a.attribute.samples&&a.attribute.samples.length)return a.attribute.samples.filter(c._isNonEmptySample);return null},_isNonEmptySample:function(a){return"string"===typeof a?!!a.trim():!!a},provideSamplesFromLocatorSettings:function(a,
b){a&&a.isDataLayerAttribute&&b&&b.searchText&&(a.attribute=e.clone(a.attribute),a.attribute.samples=c.getSamplesFromSearchText(b,20)||a.attribute.samples)},getSamplesFromSearchText:function(a,b){if(!a||!a.searchText)return null;var c=[];a=a.searchText.charAt(0).toUpperCase()+a.searchText.substr(1);for(var d=0;d<b;d++)c.push(a+" "+(d+1));return c}};return c});