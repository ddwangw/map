// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./CollisionBucketEntry"],function(f,g,e){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function b(a){this.neighbors=null;this._tiles=Array(a);for(var c=0;c<a;c++)this._tiles[c]=new e.default}Object.defineProperty(b.prototype,"isDirty",{get:function(){for(var a=0,c=this._tiles;a<c.length;a++)if(c[a].dirty)return!0;return!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return this._tiles.length},enumerable:!0,configurable:!0});
b.prototype.getTile=function(a){return this._tiles[a]};b.prototype.onRegisterLayer=function(a){this.invalidateRange(a);this._add(a)};b.prototype.onUnregisterLayer=function(a){this.invalidateRange(a);this._remove(a)};b.prototype.onLabelsRendered=function(){};b.prototype.invalidateRange=function(a){for(;a<this._tiles.length;a++)this._tiles[a].dirty=!0};b.prototype.add=function(a){this._add(a)};b.prototype.remove=function(a){this._remove(a)};b.prototype.canDelete=function(){return 0===this._tiles.length};
b.prototype.clean=function(){for(var a=0,c=this._tiles;a<c.length;a++)c[a].dirty=!1};b.prototype._add=function(a){var c=[];if(a>=this._tiles.length)this._tiles.push(new e.default);else{for(var b=0;b<this._tiles.length;b++)b===a&&c.push(new e.default),c.push(this._tiles[b]);this._tiles=c}};b.prototype._remove=function(a){for(var b=[],d=0;d<this._tiles.length;d++)d!==a&&b.push(this._tiles[d]);this._tiles=b};return b}();g.default=f});