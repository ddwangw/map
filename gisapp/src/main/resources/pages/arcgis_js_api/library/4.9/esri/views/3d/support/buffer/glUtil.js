// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper"],function(l,d,f){Object.defineProperty(d,"__esModule",{value:!0});var g={divisor:0,prefixA:!1};d.glLayout=function(e,c){void 0===c&&(c={});c=f({},g,c);var d=e.stride;return e.fieldNames.filter(function(a){a=e.fields.get(a).optional;return!(a&&a.glPadding)}).map(function(a){var b=e.fields.get(a),f=b.constructor.ElementCount,h;h=k[b.constructor.ElementType];if(!h)throw Error("BufferType not supported in WebGL");var g=b.offset,b=!(!b.optional||
!b.optional.glNormalized);return{name:c.prefixA?"a"+a[0].toUpperCase()+a.substr(1):a,stride:d,count:f,type:h,offset:g,normalized:b,divisor:c.divisor}})};var k={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}});