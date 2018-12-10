// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./WGLDisplayList ./WGLDisplayObject ./mesh/factories/MaterialStore ./util/serializationUtils".split(" "),function(p,q,k,m,f,n){return function(){function c(){}Object.defineProperty(c.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var a=0,b=this.displayObjects;a<b.length;a++){var e=b[a];this._displayObjectRegistry.set(e.id,e)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"displayList",{get:function(){if(!this._displayList){this._displayList=new k;for(var a=0,b=this.displayObjects;a<b.length;a++)for(var e=0,c=b[a].displayRecords;e<c.length;e++)this._displayList.addToList(c[e])}return this._displayList},set:function(a){this._displayList=a},enumerable:!0,configurable:!0});c.prototype.serialize=function(a){this.materialStore.serialize(a);n.serializeList(a,this.displayObjects);return a};c.prototype._deserializeObjects=function(a){for(var b=a.readInt32(),b=Array(b),c=new k,
l=new Map,f={store:this.materialStore},g=0;g<b.length;++g){var d=m.deserialize(a,f);b[g]=d;l.set(d.id,d);for(var h=0,d=d.displayRecords;h<d.length;h++)c.addToList(d[h])}this.displayObjects=b;this._displayList=c;this._displayObjectRegistry=l};c.deserialize=function(a){var b=new c;b.materialStore=f.default.deserialize(a);b._deserializeObjects(a);return b};return c}()});