// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../layers/support/fieldType".split(" "),function(k,l,g,c,h,b,e){return function(f){function a(a){a=f.call(this,a)||this;a.exactMatch=!1;a.name=null;a.type=null;return a}g(a,f);d=a;a.prototype.clone=function(){return new d({exactMatch:this.exactMatch,type:this.type,name:this.name})};var d;c([b.property({type:Boolean,json:{write:!0}})],
a.prototype,"exactMatch",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c([b.property({type:String,json:{read:e.kebabDict.read,write:e.kebabDict.write}})],a.prototype,"type",void 0);return a=d=c([b.subclass("esri.webscene.applicationProperties.SearchLayerField")],a)}(b.declared(h))});