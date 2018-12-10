// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../util/serializationUtils","../util/Writer"],function(c,h,l,k){Object.defineProperty(h,"__esModule",{value:!0});c=function(){function b(a,e,d){this.displayObjects=a;this.vertexVectorsMap=e;this._materials=d}b.prototype.get=function(a){return this.vertexVectorsMap[a]};b.prototype.pushDisplayObject=function(a){this.displayObjects.push(a)};b.prototype.encode=function(a,e){var d=l.serializeList(new k.default(Uint32Array,this._guessSize()),this.displayObjects).buffer(),b=
this._materials.serialize(new k.default(Uint32Array)).buffer(),f={};e.push(d);e.push(b);for(var g in this.vertexVectorsMap){var c=this.vertexVectorsMap[g];f[g]={};c.transfer(f[g],e)}a.displayObjects=d;a.materialStore=b;a.vertexBuffersMap=f;this.destroy()};b.prototype.destroy=function(){this.displayObjects=this.vertexVectorsMap=null};b.prototype._guessSize=function(){for(var a=this.displayObjects,b=Math.min(a.length,4),d=0,c=0;c<b;c++)d=Math.max(d,a[c].displayRecords.length);return 2*(12*a.length+
a.length*d*40)};return b}();h.default=c});