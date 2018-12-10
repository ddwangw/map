// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("../core/declare ../core/Accessor ../core/JSONSupport ../core/kebabDictionary ../core/screenUtils ../core/lang ../core/Error ../support/arcadeUtils ../webdoc/support/opacityUtils ../Color ./support/utils ./support/AuthoringInfo".split(" "),function(I,J,K,q,y,k,z,r,A,n,L,M){var t=q({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),F=q({widthAndDepth:"width-and-depth"}),N=q({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",
millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});q=q({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap"},{ignoreUnknown:!0});var B=Math.PI,G=A.opacityToTransparency,H=A.transparencyToOpacity;return I([J,K],{declaredClass:"esri.renderers.Renderer",properties:{authoringInfo:{type:M,value:null,json:{write:!0}},requiredFields:{dependsOn:["visualVariables"],get:function(){var a=
Object.create(null);this.collectRequiredFields(a);return Object.keys(a).sort()}},type:{type:q.apiValues,readOnly:!0,json:{type:q.jsonValues,read:!1,write:{writer:q.write,ignoreOrigin:!0}}},visualVariables:{json:{read:{source:["visualVariables","rotationType","rotationExpression"],reader:function(a,b){return this._readVariables(a,b)}},write:function(a,b,c,d){var e=[];a.forEach(function(a,b){"size"===a.type?e.push(this._writeSizeInfo(a,d,b)):"color"===a.type?e.push(this._writeColorInfo(a,d,b)):"opacity"===
a.type?e.push(this._writeOpacityInfo(a,d,b)):"rotation"===a.type&&e.push(this._writeRotationInfo(a,d,b))},this);b.visualVariables=e}}}},constructor:function(){this._cache={}},_rotationRE:/^\[([^\]]+)\]$/i,_viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,_visualVariablesSetter:function(a){var b=this._cache;this.visualVariables&&this.visualVariables.forEach(function(a,d){b.hasOwnProperty(d)&&(b[d]=null)},this);a&&a.some(function(a){return!!a.target})&&a.sort(function(a,b){return a.target===
b.target?0:a.target?1:-1});a&&a.forEach(function(a,d){"color"===a.type?b[d]=this._processColorInfo(a):"opacity"===a.type?b[d]=this._processOpacityInfo(a):"size"===a.type?b[d]=this._processSizeInfo(a):"rotation"===a.type&&(b[d]=this._processRotationInfo(a))},this);this._set("visualVariables",a)},getSymbol:function(a,b){},getVisualVariableValues:function(a,b){var c=this.visualVariables,d;c&&(d=c.map(function(d){var c,e=d.type,g=e+"Info";b=k.mixin({},b);b[g]=d;switch(e){case "size":c=this.getSize(a,
b);break;case "color":c=this.getColor(a,b);break;case "opacity":c=this.getOpacity(a,b);break;case "rotation":c=this.getRotationAngle(a,b)}return{variable:d,value:c}},this).filter(function(a){return null!=a.value},this));return d},hasVisualVariables:function(a,b){return a?!!this.getVisualVariablesForType(a,b):!!(this.getVisualVariablesForType("size",b)||this.getVisualVariablesForType("color",b)||this.getVisualVariablesForType("opacity",b)||this.getVisualVariablesForType("rotation",b))},getVisualVariablesForType:function(a,
b){var c=this.visualVariables,d;c&&(d=c.filter(function(d){return d.type===a&&("string"===typeof b?d.target===b:!1===b?!d.target:!0)}))&&0===d.length&&(d=void 0);return d},getSize:function(a,b){var c=this._getVarInfo(b&&b.sizeInfo,"size"),d=c.variable,c=this._cache[c.cacheKey],e=null;if(d)var h=d.minSize,e=d.maxSize,h="object"===typeof h&&h?this._getSize(a,h,c&&c.minSize,b):h,e="object"===typeof e&&e?this._getSize(a,e,c&&c.maxSize,b):e,e=this._getSize(a,d,c&&c.root,b,[h,e]);return e},getSizeRangeAtScale:function(a,
b){var c;a=this._getVarInfo(a,"size");var d=this._cache[a.cacheKey],e={scale:b};if((a=a.variable)&&b){b=a.minSize;var h=a.maxSize;a="object"===typeof b&&b?this._getSize({},b,d&&d.minSize,e):b;d="object"===typeof h&&h?this._getSize({},h,d&&d.maxSize,e):h;if(null!=a||null!=d)a>d&&(c=d,d=a,a=c),c={minSize:a,maxSize:d}}return c},getColor:function(a,b){var c=this._getVarInfo(b&&b.colorInfo,"color");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],b,!1)},getOpacity:function(a,b){var c=
this._getVarInfo(b&&b.opacityInfo,"opacity");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],b,!0)},getRotationAngle:function(a,b){var c=this._getVarInfo(b&&b.rotationInfo,"rotation"),d=c.variable,e=this._cache[c.cacheKey],h=d.axis||"heading",c="heading"===h&&"arithmetic"===d.rotationType?90:0,h="heading"===h&&"arithmetic"===d.rotationType?-1:1,d=d.field,e=e&&e.compiledFunc,k=a.attributes,g=0;if(d||e)e?g=r.executeFunction(e,r.createExecContext(a,r.getViewInfo(b))):"function"===
typeof d?g=d.apply(this,arguments):k&&(g=k[d]||0),g="number"!==typeof g||isNaN(g)?null:c+h*g;return g},collectRequiredFields:function(a){var b=[];this.visualVariables&&(b=b.concat(this.visualVariables));b.forEach(function(b){b&&(b.field&&(a[b.field]=!0),b.normalizationField&&(a[b.normalizationField]=!0),b.valueExpression&&r.extractFieldNames(b.valueExpression).forEach(function(b){a[b]=!0}))})},_getVarInfo:function(a,b){var c;a&&a.type===b&&this.visualVariables?(c=this.visualVariables.indexOf(a),a=
this.visualVariables[c]):this.visualVariables&&(a=(a=this.getVisualVariablesForType(b))&&a[0],c=this.visualVariables.indexOf(a));return{variable:a,cacheKey:c}},_readSizeInfo:function(a){a.axis&&(a.axis=F.fromJSON(a.axis));a.valueUnit&&(a.valueUnit=N.fromJSON(a.valueUnit));return a},_readColorInfo:function(a){a&&(a.colors&&a.colors.forEach(function(b,c){Array.isArray(b)?a.colors[c]=n.fromJSON(b):a.colors[c]=new n(b)}),a.stops&&a.stops.forEach(function(b,c){b.color&&Array.isArray(b.color)?a.stops[c].color=
n.fromJSON(b.color):b.color&&(a.stops[c].color=new n(b.color))}));return a},_readOpacityInfo:function(a){var b;a&&(b=k.mixin({},a),b.transparencyValues&&(b.opacityValues=b.transparencyValues.map(H),delete b.transparencyValues),b.stops&&(b.stops=b.stops.map(function(a){a=k.mixin({},a);a.opacity=H(a.transparency);delete a.transparency;return a})));return b},_readVariables:function(a,b){a&&(a=a.map(function(a){a=k.clone(a);a.type=t.fromJSON(a.type);"size"===a.type?a=this._readSizeInfo(a):"color"===a.type?
a=this._readColorInfo(a):"opacity"===a.type&&(a=this._readOpacityInfo(a));return a},this));var c=b.rotationType;if(b=b.rotationExpression)c={type:"rotation",rotationType:c},(b=b.match(this._rotationRE))&&b[1]&&(c.field=b[1],a||(a=[]),a.push(c));return a},_createCache:function(a){var b=a&&a.valueExpression,c=r.createSyntaxTree(b),c=r.createFunction(c),d=!(!a||!a.expression)||this._viewScaleRE.test(b);return{ipData:this._interpolateData(a),hasExpr:!!b,compiledFunc:c,isScaleDriven:d}},_processColorInfo:function(a){a&&
(a.colors&&a.colors.forEach(function(b,c){b instanceof n||(a.colors[c]=new n(b))}),a.stops&&a.stops.forEach(function(b,c){!b.color||b.color instanceof n||(a.stops[c].color=new n(b.color))}),this._sortStops(a.stops));return this._createCache(a)},_processOpacityInfo:function(a){this._sortStops(a&&a.stops);return this._createCache(a)},_processSizeInfo:function(a){a.stops&&Array.isArray(a.stops)?a.stops=this._processSizeInfoStops(a.stops):(a.minSize=a.minSize&&this._processSizeInfoSize(a.minSize),a.maxSize=
a.maxSize&&this._processSizeInfoSize(a.maxSize));return{root:this._createCache(a),minSize:this._createCache(a.minSize),maxSize:this._createCache(a.maxSize)}},_processSizeInfoSize:function(a){"object"===typeof a?a.stops=this._processSizeInfoStops(a.stops):a=y.toPt(a);return a},_processSizeInfoStops:function(a){a&&Array.isArray(a)&&(a.forEach(function(a){a.size=y.toPt(a.size)}),this._sortStops(a));return a},_sortStops:function(a){a&&Array.isArray(a)&&a.sort(function(a,c){return a.value-c.value})},_processRotationInfo:function(a){return this._createCache(a)},
_getSize:function(a,b,c,d,e){var h=a.attributes,k=b.field,g=b.stops,f=0,n=c&&c.hasExpr,q=c&&c.compiledFunc,t=c&&c.ipData,u=c&&c.isScaleDriven,w="number"===typeof a,l=w?a:null;if(k||u||n){var y=d&&d.scale,m=e?e[0]:b.minSize,p=e?e[1]:b.maxSize,v=b.minDataValue,D=b.maxDataValue,z=b.valueUnit||"unknown",E=b.valueRepresentation,f=b.scaleBy,A=b.normalizationField,C=h?parseFloat(h[A]):void 0,x=d&&d.shape;u?l=null==y?this._getAverageValue(b):y:"number"!==typeof l&&(n?l=r.executeFunction(q,r.createExecContext(a,
r.getViewInfo(d))):"function"===typeof k?l=k.apply(this,arguments):h&&(l=h[k]));if(null==l||A&&!w&&(isNaN(C)||0===C))return null;isNaN(C)||w||(l/=C);if(g)p=this._lookupData(l,t),l=p[0],m=p[1],l===m?f=g[l].size:(l=g[l].size,g=g[m].size,f=l+(g-l)*p[2]);else if(null!=m&&null!=p&&null!=v&&null!=D)l<=v?f=m:l>=D?f=p:(g=(l-v)/(D-v),"area"===f&&x?(m=(l="circle"===x)?B*Math.pow(m/2,2):m*m,g=m+g*((l?B*Math.pow(p/2,2):p*p)-m),f=l?2*Math.sqrt(g/B):Math.sqrt(g)):f=m+g*(p-m));else if("unknown"===z)null!=m&&null!=
v?(m&&v?(g=l/v,f="circle"===x?2*Math.sqrt(g*Math.pow(m/2,2)):"square"===x||"diamond"===x||"image"===x?Math.sqrt(g*Math.pow(m,2)):g*m):f=l+(m||v),f=f<m?m:f,null!=p&&f>p&&(f=p)):f=l;else{g=(d&&d.resolution?d.resolution:1)*L.meterIn[z];if("area"===E)f=Math.sqrt(l/B)/g,f*=2;else if(f=l/g,"radius"===E||"distance"===E)f*=2;null!=m&&f<m&&(f=m);null!=p&&f>p&&(f=p)}}else b&&(f=g&&g[0]&&g[0].size,null==f&&(f=b.minSize));return f=isNaN(f)?0:f},_getAverageValue:function(a){var b=a.stops,c;b?(c=b[0].value,a=b[b.length-
1].value):(c=a.minDataValue||0,a=a.maxDataValue||0);return(c+a)/2},_getColorComponent:function(a,b,c,d,e){var h=a.attributes,k=b&&b.field,g="number"===typeof a,f=g?a:null,n=c&&c.hasExpr,q=c&&c.compiledFunc,t=c&&c.ipData,u;if(k||n){var w=b.normalizationField,l=h&&w?parseFloat(h[w]):void 0;"number"!==typeof f&&(n?f=r.executeFunction(q,r.createExecContext(a,r.getViewInfo(d))):"function"===typeof k?f=k.apply(this,arguments):h&&(f=h[k]));null==f||w&&!g&&(isNaN(l)||0===l)||(isNaN(l)||g||(f/=l),u=e?this._getOpacity(f,
b,t):this._getColor(f,b,t,d&&d.color))}else b&&(h=b.stops,e?(u=h&&h[0]&&h[0].opacity,null==u&&(u=b.opacityValues&&b.opacityValues[0])):u=h&&h[0]&&h[0].color||b.colors&&b.colors[0]);return u},_interpolateData:function(a){var b;if(a)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*e}else a.stops&&(b=a.stops.map(function(a){return a.value||0}));return b},_getOpacity:function(a,b,c){a=this._lookupData(a,c);
var d;b=b||this.opacityInfo;a&&(c=a[0],d=a[1],c===d?d=this._getOpacValue(b,c):(c=this._getOpacValue(b,c),b=this._getOpacValue(b,d),d=c+(b-c)*a[2]));return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c,d){a=this._lookupData(a,c);b=b||this.colorInfo;if(a){c=a[0];var e=a[1];d=d||new n;c===e?d.setColor(this._getColorObj(b,c)):n.blendColors(this._getColorObj(b,c),this._getColorObj(b,e),a[2],d);return d}},_getColorObj:function(a,b){return a.colors?
a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,e=b.length-1;b.some(function(b,c){if(a<b)return e=c,!0;d=c;return!1});c=[d,e,(a-b[d])/(b[e]-b[d])]}return c},_processForContext:function(a,b,c){if(b&&"web-scene"===b.origin){var d=null!=a.expression,e=null!=a.valueExpressionTitle&&"rotation"===a.type;b.messages&&(d&&b.messages.push(new z("property:unsupported",a.type+"VisualVariable.expression is not supported in Web Scene. Please remove this property to save the Web Scene.",
{instance:this,propertyName:c+".expression",context:b})),e&&b.messages.push(new z("property:unsupported",a.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:c+".valueExpressionTitle",context:b})));d&&delete a.expression;e&&delete a.valueExpressionTitle}else"size"===a.type&&this._convertExpressionToArcade(a)},_writeRotationInfo:function(a,b,c){a&&(a=k.mixin({},a),this._processForContext(a,b,"visualVariables["+
c+"]"),a.type=t.toJSON(a.type),a=k.fixJson(a,!0));return a},_convertExpressionToArcade:function(a){a&&a.expression&&(a.valueExpression="$view.scale")},_writeSizeInfo:function(a,b,c){if(a){a=k.mixin({},a);this._processForContext(a,b,"string"===typeof c?c:"visualVariables["+c+"]");var d=a.minSize,e=a.maxSize;d&&(a.minSize="number"===typeof d?d:this._writeSizeInfo(d,b,"visualVariables["+c+"].minSize"));e&&(a.maxSize="number"===typeof e?e:this._writeSizeInfo(e,b,"visualVariables["+c+"].maxSize"));b=a.legendOptions;
c=a.axis;a.type=t.toJSON(a.type);c&&(a.axis=F.toJSON(c));b&&(a.legendOptions=k.mixin({},b),b=b.customValues)&&(a.legendOptions.customValues=b.slice(0));a.stops&&(a.stops=a.stops.map(function(a){a=k.mixin({},a);null===a.label&&delete a.label;return a}));a=k.fixJson(a,!0)}return a},_writeColorInfo:function(a,b,c){a&&(a=k.mixin({},a),this._processForContext(a,b,"visualVariables["+c+"]"),a.type=t.toJSON(a.type),a.colors&&(a.colors=a.colors.map(function(a){return n.toJSON(a)})),a.stops&&(a.stops=a.stops.map(function(a){a=
k.mixin({},a);a.color&&(a.color=n.toJSON(a.color));null==a.value&&(a.value=0);null===a.label&&delete a.label;return a})),a.legendOptions&&(a.legendOptions=k.mixin({},a.legendOptions)),a=k.fixJson(a,!0));return a},_writeOpacityInfo:function(a,b,c){var d;a&&(d=k.mixin({},a),this._processForContext(d,b,"visualVariables["+c+"]"),d.type=t.toJSON(d.type),d.opacityValues&&(d.transparencyValues=d.opacityValues.map(G),delete d.opacityValues),d.stops&&(d.stops=d.stops.map(function(a){a=k.mixin({},a);a.transparency=
G(a.opacity);delete a.opacity;null===a.label&&delete a.label;return a})),d.legendOptions&&(d.legendOptions=k.mixin({},d.legendOptions)),d=k.fixJson(d,!0));return d}})});