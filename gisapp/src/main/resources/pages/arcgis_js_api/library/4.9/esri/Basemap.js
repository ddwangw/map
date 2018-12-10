// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/asyncUtils ./core/Collection ./core/collectionUtils ./core/Evented ./core/JSONSupport ./core/lang ./core/Loadable ./core/loadAll ./core/Logger ./core/promiseUtils ./core/urlUtils ./core/accessorSupport/decorators ./layers/Layer ./portal/Portal ./portal/PortalItem ./support/basemapDefinitions".split(" "),function(t,H,l,u,e,v,w,h,x,y,z,A,B,C,m,n,d,D,p,E,F){var G=0,g=w.ofType(D),
q=C.getLogger("esri.Basemap");return function(r){function c(a){var b=r.call(this)||this;b.id=null;b.portalItem=null;b.thumbnailUrl=null;b.title="Basemap";b.id=Date.now().toString(16)+"-basemap-"+G++;b.baseLayers=new g;b.referenceLayers=new g;var c=function(a){a.parent&&a.parent!==b&&"remove"in a.parent&&a.parent.remove(a);a.parent=b;"elevation"===a.type&&q.error("Layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"' is not supported as a basemap layer and will therefore be ignored.")};b.baseLayers.on("after-add",
function(a){return c(a.item)});b.referenceLayers.on("after-add",function(a){return c(a.item)});b.baseLayers.on("after-remove",function(a){a.item.parent=null});b.referenceLayers.on("after-remove",function(a){a.item.parent=null});return b}u(c,r);k=c;c.prototype.initialize=function(){var a=this;this.when().catch(function(b){q.error("#load()","Failed to load basemap (title: '"+a.title+"', id: '"+a.id+"')",b)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};c.prototype.normalizeCtorArgs=
function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a=l({},a),delete a.resourceInfo);return a};Object.defineProperty(c.prototype,"baseLayers",{set:function(a){this._set("baseLayers",h.referenceSetter(a,this._get("baseLayers"),g))},enumerable:!0,configurable:!0});c.prototype.writeBaseLayers=function(a,b,c,d){var f=[];a&&(d=l({},d,{layerContainerType:"basemap"}),this.baseLayers.forEach(function(a){if(a.write){var b={};a.write(b,d)&&f.push(b)}}),this.referenceLayers.forEach(function(a){if(a.write){var b=
{isReference:!0};a.write(b,d)&&f.push(b)}}));b[c]=f};Object.defineProperty(c.prototype,"referenceLayers",{set:function(a){this._set("referenceLayers",h.referenceSetter(a,this._get("referenceLayers"),g))},enumerable:!0,configurable:!0});c.prototype.writeTitle=function(a,b){b.title=a||"Basemap"};c.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this.when()};c.prototype.loadAll=function(){var a=this;return v.safeCast(B.loadAll(this,function(b){b(a.baseLayers,a.referenceLayers)}))};
c.prototype.clone=function(){var a={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};this.loaded&&(a.loadStatus="loaded");return(new k({resourceInfo:this.resourceInfo})).set(a)};c.prototype.read=function(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});return this.inherited(arguments)};c.prototype.write=function(a,b){a=a||{};b&&b.origin||(b=l({origin:"web-map"},b));this.inherited(arguments,[a,
b]);!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(a.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(function(a){a=z.clone(a);a.url&&n.isProtocolRelative(a.url)&&(a.url="https:"+a.url);a.templateUrl&&n.isProtocolRelative(a.templateUrl)&&(a.templateUrl="https:"+a.templateUrl);return a}));return a};c.prototype._loadFromSource=function(){var a=this.resourceInfo,b=this.portalItem;return a?this._loadLayersFromJSON(a.data,a.context?a.context.url:null):b?this._loadFromItem(b):
m.resolve(null)};c.prototype._loadLayersFromJSON=function(a,b){var c=this,d=this.resourceInfo&&this.resourceInfo.context,e=this.portalItem&&this.portalItem.portal||d&&d.portal||null,g=d&&"web-scene"===d.origin?"web-scene":"web-map";return m.create(function(a){return t(["./portal/support/layersCreator"],a)}).then(function(d){var f=[];if(a.baseMapLayers&&Array.isArray(a.baseMapLayers)){var h={context:{origin:g,url:b,portal:e,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},k=d.populateOperationalLayers(c.baseLayers,
a.baseMapLayers.filter(function(a){return!a.isReference}),h);f.push.apply(f,k);d=d.populateOperationalLayers(c.referenceLayers,a.baseMapLayers.filter(function(a){return a.isReference}),h);f.push.apply(f,d)}return m.eachAlways(f)}).then(function(){})};c.prototype._loadFromItem=function(a){var b=this;return a.load().then(function(a){return a.fetchData()}).then(function(c){var d=n.urlToObject(a.itemUrl);b._set("resourceInfo",{data:c.baseMap,context:{origin:"web-map",portal:a.portal||p.getDefault(),url:d}});
b.read(b.resourceInfo.data,b.resourceInfo.context);b.read({title:a.title,thumbnailUrl:a.thumbnailUrl},{origin:"portal-item",portal:a.portal||p.getDefault(),url:d});return b._loadLayersFromJSON(b.resourceInfo.data,d)})};c.fromId=function(a){return(a=F[a])?k.fromJSON(a):null};var k;e([d.property({type:g,json:{write:{ignoreOrigin:!0,target:"baseMapLayers"}}}),d.cast(h.castForReferenceSetter)],c.prototype,"baseLayers",null);e([d.writer("baseLayers")],c.prototype,"writeBaseLayers",null);e([d.property({type:String,
json:{origins:{"web-scene":{write:!0}}}})],c.prototype,"id",void 0);e([d.property({type:E})],c.prototype,"portalItem",void 0);e([d.property({type:g}),d.cast(h.castForReferenceSetter)],c.prototype,"referenceLayers",null);e([d.property({readOnly:!0})],c.prototype,"resourceInfo",void 0);e([d.property()],c.prototype,"thumbnailUrl",void 0);e([d.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],c.prototype,"title",void 0);e([d.writer("title")],c.prototype,"writeTitle",null);
return c=k=e([d.subclass("esri.Basemap")],c)}(d.declared(y,x,A))});