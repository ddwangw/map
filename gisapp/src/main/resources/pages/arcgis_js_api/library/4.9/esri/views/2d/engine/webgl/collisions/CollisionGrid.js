// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../definitions"],function(d,e,f){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(a){this._bucketSize=a;this._rowsLength=f.TILE_SIZE/a;this._colsLength=f.TILE_SIZE/a;this._grid=this._initGrid()}c.prototype.checkOverlap=function(a,b){a=Math.floor(a/this._bucketSize);b=Math.floor(b/this._bucketSize);if(0>a||a>=this._rowsLength||0>b||b>=this._colsLength||this._grid[b][a])return!0;this._grid[b][a]=!0;return!1};c.prototype.reset=function(){this._grid=
this._initGrid()};c.prototype._initGrid=function(){for(var a=[],b=0;b<this._rowsLength;b++)a.push(Array(this._colsLength));return a};return c}();e.default=d});