// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/Error ../../../../../../core/Logger ../../enums ../../Utils ../../visualVariablesUtils".split(" "),function(n,g,p,r,d,k,q){Object.defineProperty(g,"__esModule",{value:!0});var l=r.getLogger("esri.views.2d.engine.webgl.mesh.VVFactory"),m;(function(a){a[a.NONE=0]="NONE";a[a.MISSING_DATA=1]="MISSING_DATA"})(m=g.VVError||(g.VVError={}));var t=function(){function a(){this._vvMap=new Map}a.prototype.set=function(b,c){this._vvMap.set(b,c)};a.prototype.getValue=
function(b,c,a){return this._vvMap.has(b)?this._vvMap.get(b)(c,a):0};return a}();n=function(){function a(b,c,a){this._createVVFunctionMap(b,c,a)}a.prototype.computeVV=function(b,c,a){if(!this._vvMap)return m.NONE;var e=this._vvMap.getValue(d.VVType.SIZE,c,a),h=this._vvMap.getValue(d.VVType.COLOR,c,a),f=this._vvMap.getValue(d.VVType.OPACITY,c,a);c=this._vvMap.getValue(d.VVType.ROTATION,c,a);b[d.VVType.SIZE]=this._isErrorVV(e)?NaN:e;b[d.VVType.COLOR]=this._isErrorVV(h)?NaN:h;b[d.VVType.OPACITY]=this._isErrorVV(f)?
NaN:f;b[d.VVType.ROTATION]=this._isErrorVV(c)?NaN:c;return m.NONE};a.prototype._isErrorVV=function(b){return null===b||isNaN(b)||Infinity===b};a.prototype._createVVFunctionMap=function(b,a,d){if(b&&b.length)for(var c=0;c<b.length;c++){var h=b[c],f=k.getVVType(h.type);if(h=this._createGetValueFunction(h,a,d))this._vvMap||(this._vvMap=new t),this._vvMap.set(f,h)}};a.prototype._createGetValueFunction=function(b,a,g){if(k.getVVType(b.type)===d.VVType.SIZE){var c=q.getTypeOfSizeVisualVariable(b);return c===
d.WGLVVFlag.SIZE_SCALE_STOPS?null:this._createNormalizedFunction(b,a,g,c===d.WGLVVFlag.SIZE_UNIT_VALUE&&function(a){return q.getVisualVariableSizeValueRepresentationRatio(a,b.valueRepresentation)})}return this._createNormalizedFunction(b,a,g)};a.prototype._createNormalizedFunction=function(b,a,d,e){var c=b.field;if(c){if("string"===typeof c){var f=b.normalizationField;return f?function(a){if(a.attributes[c]&&a.attributes[f])return a=a.attributes[c]/a.attributes[f],e?e(a):a}:e?function(a){return e(a.attributes[c])}:
function(a){return a.attributes[c]}}if("function"===typeof c)return l.error(new p("mapview-rendering:unsupported-feature","Function field types are not currently supported. Please use a valueExpression instead")),function(a){};l.error(new p("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof c));return function(a){}}if(b.valueExpression&&"$view.scale"!==b.valueExpression)return k.createArcadeFunction({valueExpression:b.valueExpression,spatialReference:d,
layer:{fields:a}},e);l.error("Unable to create a normalized function for visual variable: "+b);return function(a){}};return a}();g.default=n});