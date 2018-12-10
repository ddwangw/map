// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/promiseUtils","../../layers/support/TilemapCache","../2d/tiling/TileKey"],function(l,m,g,k,h){return function(){function f(a){if(a instanceof k)this._tilemapCache=a;else if(a&&"index"in a)this._tilemap=a.index;else throw Error("Invalid tilemap!");}f.prototype.dataKey=function(a){if(this._tilemapCache){var b=a.level,c=a.row,d=a.col,e=new h(a);return this._tilemapCache.fetchAvailabilityUpsample(b,c,d,e).then(function(){return e}).catch(function(a){if(a&&"cancel"===
a.dojoType)throw a;e.level=b;e.row=c;e.col=d;return e})}return this._getIndexedDataKey(a)};f.prototype.forEach=function(a,b,c,d,e){this._callback=e;this._maxLevel=b+a;this._forEach(this._tilemap,b,c,d)};f.prototype._forEach=function(a,b,c,d){0!==a&&(this._callback(b,c,d),b!==this._maxLevel&&"object"===typeof a&&(this._forEach(a[0],b+1,2*c,2*d),this._forEach(a[1],b+1,2*c,2*d+1),this._forEach(a[2],b+1,2*c+1,2*d),this._forEach(a[3],b+1,2*c+1,2*d+1)))};f.prototype._getIndexedDataKey=function(a){var b=
[a];if(0>a.level||0>a.row||0>a.col||0<a.row>>a.level||0<a.col>>a.level)return g.resolve(null);for(;0!==a.level;)a=new h(a.level-1,a.row>>1,a.col>>1,a.world),b.push(a);a=this._tilemap;var c=b.pop(),d,e;if(1===a)return g.resolve(c);for(;b.length;)if(d=b.pop(),e=(d.col&1)+((d.row&1)<<1),a)if(0===a[e]){c=null;break}else if(1===a[e]){c=d;break}else c=d,a=a[e];return g.resolve(c)};return f}()});