// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./ClassificationDefinition".split(" "),function(h,k,e,c,f,b,g){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.classificationDefinition=null;a.where=null;return a}e(a,d);c([b.property({type:g,json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}})],a.prototype,"classificationDefinition",
void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=c([b.subclass("esri.tasks.support.GenerateRendererParameters")],a)}(b.declared(f))});