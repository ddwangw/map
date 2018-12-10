// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../symbols/support/jsonUtils ../../symbols/support/typeUtils".split(" "),function(b,c,h,e,k,d,f,g){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.description=null;a.label=null;a.minValue=null;a.maxValue=0;a.symbol=null;return a}h(a,b);c=a;a.prototype.clone=function(){return new c({description:this.description,
label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})};var c;e([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);e([d.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0);e([d.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,
"maxValue",void 0);e([d.property({types:g.rendererTypes,json:{origins:{"web-scene":{read:f.read,write:{target:{symbol:{types:g.rendererTypes3D}},writer:f.writeTarget}}},read:f.read,write:f.writeTarget}})],a.prototype,"symbol",void 0);return a=c=e([d.subclass("esri.renderers.support.ClassBreakInfo")],a)}(d.declared(k));c.ClassBreakInfo=b;c.default=b});