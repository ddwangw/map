// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/asyncUtils ../core/loadAll ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/accessorSupport/decorators ../core/accessorSupport/utils ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ../support/LayersMixin".split(" "),function(f,v,k,d,l,m,n,g,c,p,q,r,t,u){return function(h){function b(a){a=h.call(this)||this;a._visibilityHandles={};a.fullExtent=void 0;a.operationalLayerType="GroupLayer";
a.spatialReference=void 0;a.type="group";a._visibilityWatcher=a._visibilityWatcher.bind(a);return a}k(b,h);b.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible);this.watch("visible",this._visibleWatcher.bind(this),!0)};b.prototype._writeLayers=function(a,b,c,d){var e=[];if(!a)return e;a.forEach(function(a){a.write&&(a=a.write(null,d))&&a.layerType&&e.push(a)});b.layers=e};Object.defineProperty(b.prototype,"visibilityMode",{set:function(a){var b=this._get("visibilityMode")!==
a;this._set("visibilityMode",a);b&&this._enforceVisibility(a,this.visible)},enumerable:!0,configurable:!0});b.prototype.load=function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]}));return this.when()};b.prototype.loadAll=function(){var a=this;return l.safeCast(m.loadAll(this,function(b){b(a.layers)}))};b.prototype.layerAdded=function(a){a.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(a):"inherited"===
this.visibilityMode&&(a.visible=this.visible);this._visibilityHandles[a.uid]=a.watch("visible",this._visibilityWatcher,!0)};b.prototype.layerRemoved=function(a){var b=this._visibilityHandles[a.uid];b&&(b.remove(),delete this._visibilityHandles[a.uid]);this._enforceVisibility(this.visibilityMode,this.visible)};b.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return g.create(function(a){f(["../views/layers/GroupLayerView"],a)});case "3d":return g.create(function(a){f(["../views/layers/GroupLayerView"],
a)})}};b.prototype._turnOffOtherLayers=function(a){this.layers.forEach(function(b){b!==a&&(b.visible=!1)})};b.prototype._enforceVisibility=function(a,b){if(p.getProperties(this).initialized){var d=this.layers,c=d.find(function(a){return a.visible});switch(a){case "exclusive":d.length&&!c&&(c=d.getItemAt(0),c.visible=!0);this._turnOffOtherLayers(c);break;case "inherited":d.forEach(function(a){a.visible=b})}}};b.prototype._visibleWatcher=function(a){"inherited"===this.visibilityMode&&this.layers.forEach(function(b){b.visible=
a})};b.prototype._visibilityWatcher=function(a,b,d,c){switch(this.visibilityMode){case "exclusive":a?this._turnOffOtherLayers(c):this._isAnyLayerVisible()||(c.visible=!0);break;case "inherited":c.visible=this.visible}};b.prototype._isAnyLayerVisible=function(){return this.layers.some(function(a){return a.visible})};d([c.property()],b.prototype,"fullExtent",void 0);d([c.property({json:{read:!1,write:{ignoreOrigin:!0}}})],b.prototype,"layers",void 0);d([c.writer("layers")],b.prototype,"_writeLayers",
null);d([c.property()],b.prototype,"operationalLayerType",void 0);d([c.property({json:{write:!1}})],b.prototype,"portalItem",void 0);d([c.property()],b.prototype,"spatialReference",void 0);d([c.property({json:{read:!1},readOnly:!0,value:"group"})],b.prototype,"type",void 0);d([c.property({json:{read:!1,write:!1}})],b.prototype,"url",void 0);d([c.property({type:String,value:"independent",json:{write:!0}})],b.prototype,"visibilityMode",null);return b=d([c.subclass("esri.layers.GroupLayer")],b)}(c.declared(q,
u,n,r,t))});