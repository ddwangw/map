// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./CodedValueDomain ./Domain ./InheritedDomain ./RangeDomain".split(" "),function(k,b,e,f,g,h){function c(a,b){switch(a.type){case "range":var c="range"in a?a.range[1]:a.maxValue;if(+b<("range"in a?a.range[0]:a.minValue)||+b>c)return d.VALUE_OUT_OF_RANGE;break;case "coded-value":case "codedValue":if(null==a.codedValues||a.codedValues.every(function(a){return null==a||a.code!==b}))return d.INVALID_CODED_VALUE}return null}Object.defineProperty(b,"__esModule",{value:!0});b.CodedValueDomain=
e;b.DomainBase=f;b.InheritedDomain=g;b.RangeDomain=h;var d;(function(a){a.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range";a.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"})(d=b.DomainValidationError||(b.DomainValidationError={}));b.isValidDomainValue=function(a,b){return null===c(a,b)};b.validateDomainValue=c;b.types={key:"type",base:b.DomainBase,typeMap:{range:b.RangeDomain,"coded-value":b.CodedValueDomain}};b.getDomainRange=function(a){if(a&&"range"===a.type)return{min:"range"in
a?a.range[0]:a.minValue,max:"range"in a?a.range[1]:a.maxValue}};b.fromJSON=function(a){if(a&&a.type){if("range"===a.type)return b.RangeDomain.fromJSON(a);if("codedValue"===a.type)return b.CodedValueDomain.fromJSON(a)}return null}});