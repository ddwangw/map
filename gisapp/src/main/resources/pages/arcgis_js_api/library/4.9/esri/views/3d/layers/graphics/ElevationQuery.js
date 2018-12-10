// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/assignHelper dojo/Deferred ../../../../geometry ../../../../core/scheduling".split(" "),function(e,f,h,g,k,q,l,r){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(a,c){this.spatialReference=a;this.view=c;this.point=new l.Point;this.point.spatialReference=a}b.prototype.getElevation=function(a,c,d){this.point.x=a;this.point.y=c;return this.view.elevationProvider.getElevation(this.point,
d)};b.prototype.queryElevation=function(a,c,d,b){return g(this,void 0,void 0,function(){return h(this,function(t){this.point.x=a;this.point.y=c;return[2,this.view.elevationProvider.queryElevation(this.point,d,b)]})})};return b}();f.ViewElevationProvider=e;e=function(){function b(a,c,d){this.spatialReference=a;this._getElevationQueryProvider=c;this._queries=[];this._isScheduled=!1;this._queryOptions=k({},d,{ignoreInvisibleLayers:!0})}b.prototype.queryElevation=function(a,c,d){void 0===d&&(d=0);return g(this,
void 0,void 0,function(){var b;return h(this,function(e){b=new q;this._queries.push({x:a,y:c,minDemResolution:d,result:b});this._scheduleDoQuery();return[2,b.promise]})})};b.prototype._scheduleDoQuery=function(){var a=this;this._isScheduled||(r.schedule(function(){return a._doQuery()}),this._isScheduled=!0)};b.prototype._doQuery=function(){return g(this,void 0,void 0,function(){var a,b,d,e,f,g,m,n,p;return h(this,function(c){switch(c.label){case 0:this._isScheduled=!1;a=this._queries;this._queries=
[];b=a.map(function(a){return[a.x,a.y]});d=a.reduce(function(a,b){return Math.min(a,b.minDemResolution)},Infinity);e=new l.Multipoint({points:b,spatialReference:this.spatialReference});f=this._getElevationQueryProvider();if(!f)return a.forEach(function(a,b){return a.result.reject()}),[2];m=k({},this._queryOptions,{minDemResolution:d});c.label=1;case 1:return c.trys.push([1,3,,4]),[4,f.queryElevation(e,m)];case 2:return g=c.sent(),[3,4];case 3:return n=c.sent(),a.forEach(function(a){return a.result.reject(n)}),
[2];case 4:return p=g.geometry.points,a.forEach(function(a,b){return a.result.resolve(p[b][2])}),[2]}})})};return b}();f.ElevationQuery=e});