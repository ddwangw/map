// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./geometry ./PopupTemplate ./core/JSONSupport ./core/lang ./core/accessorSupport/decorators ./geometry/support/typeUtils ./symbols/support/jsonUtils ./symbols/support/typeUtils".split(" "),function(e,v,h,k,d,l,m,n,p,c,q,r,t){e=function(e){function a(b,g,a,c){b=e.call(this,b,g,a,c)||this;b.layer=null;b.popupTemplate=null;b.sourceLayer=null;Object.defineProperty(b,"uid",{value:f.generateUID()});
return b}k(a,e);f=a;a.prototype.normalizeCtorArgs=function(b,g,a,c){return b&&!b.declaredClass?b:{geometry:b,symbol:g,attributes:a,popupTemplate:c}};Object.defineProperty(a.prototype,"attributes",{set:function(b){var a=this._get("attributes");a!==b&&(this._set("attributes",b),this._notifyLayer("attributes",a,b))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"geometry",{set:function(b){var a=this._get("geometry");a!==b&&(this._set("geometry",b),this._notifyLayer("geometry",a,b))},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"symbol",{set:function(b){var a=this._get("symbol");a!==b&&(this._set("symbol",b),this._notifyLayer("symbol",a,b))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"visible",{set:function(b){var a=this._get("visible");a!==b&&(this._set("visible",b),this._notifyLayer("visible",a,b))},enumerable:!0,configurable:!0});a.prototype.getEffectivePopupTemplate=function(){return this.popupTemplate||this.sourceLayer&&this.sourceLayer.popupTemplate};
a.prototype.getAttribute=function(b){return this.attributes&&this.attributes[b]};a.prototype.setAttribute=function(b,a){var c;this.attributes?(c=this.getAttribute(b),this.attributes[b]=a,this._notifyLayer("attributes",c,a,b)):(this.attributes=(c={},c[b]=a,c),this._notifyLayer("attributes",void 0,a,b))};a.prototype.toJSON=function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:h({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}};
a.prototype.clone=function(){return new f({attributes:p.clone(this.attributes),geometry:this.geometry&&this.geometry.clone()||null,layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})};a.prototype._notifyLayer=function(a,c,d,e){this.layer&&(c={graphic:this,property:a,oldValue:c,newValue:d},"attributes"===a&&(c.attributeName=e),this.layer.graphicChanged(c))};var f;d([c.property({value:null})],
a.prototype,"attributes",null);d([c.property({value:null,types:q.types,json:{read:l.fromJSON}})],a.prototype,"geometry",null);d([c.property()],a.prototype,"layer",void 0);d([c.property({type:m})],a.prototype,"popupTemplate",void 0);d([c.property()],a.prototype,"sourceLayer",void 0);d([c.property({value:null,types:t.types,json:{read:r.read}})],a.prototype,"symbol",null);d([c.property({type:Boolean,value:!0,set:function(a){}})],a.prototype,"visible",null);return a=f=d([c.subclass("esri.Graphic")],a)}(c.declared(n));
var u=0;(function(c){c.generateUID=function(){return u++}})(e||(e={}));return e});