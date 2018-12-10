// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Handles ../../../core/now ../../../core/scheduling ./MemoryController ./StreamDataLoader ./StreamDataSupplier ../webgl-engine/lib/Util".split(" "),function(q,r,g,h,k,l,m,n,f){function p(){var a={},b;for(b in d.ClientType)a[d.ClientType[b]]=0;a[d.ClientType.TERRAIN]=15;a[d.ClientType.SCENE]=20;a[d.ClientType.SYMBOLOGY]=5;return new m(a)}var d=function(){function a(b,e,c){void 0===e&&(e=k);void 0===c&&(c=h);var d=this;this._view=b;this._memoryController=this._budget=
null;this._streamDataLoader=p();this._frameWorkers=[];this._nextFrameWorker=0;this._idleWorkers=[];this._nextIdleWorker=0;this._idleUpdatesStartFired=!1;this._lastTargetChangeTime=0;this._handles=new g;this._frameTask=null;this.idleTimeout=300;this.idleBudget=100;this._budget=new a.Budget(c);this._lastTargetChangeTime=c();this._memoryController=new l(this._view);this._handles.add(this._view.watch("state.camera",function(){return d.cameraChangedHandler()},!0));this._frameTask=e.addFrameTask({update:function(b){return d.frameUpdate(b)}})}
a.prototype.destroy=function(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null);this._handles.remove();this._streamDataLoader&&(this._streamDataLoader.destroy(),this._streamDataLoader=null)};Object.defineProperty(a.prototype,"enableBudget",{set:function(b){this._budget.enabled=b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this._memoryController.updating},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maxGpuMemory",
{set:function(b){this._memoryController.setMaxGpuMemory(b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"additionalCacheMemory",{set:function(b){this._memoryController.setAdditionalCacheMemory(b)},enumerable:!0,configurable:!0});a.prototype.setMemoryDirty=function(){this._memoryController.setDirty()};Object.defineProperty(a.prototype,"memoryFactor",{get:function(){return this._memoryController.getMemoryFactor()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"usedMemory",{get:function(){return this._memoryController.getUsedMemory()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"memoryEvents",{get:function(){return this._memoryController.events},enumerable:!0,configurable:!0});a.prototype.getMemCache=function(b,e){return this._memoryController.getMemCache(b,e)};a.prototype.getStreamDataSupplier=function(b,e){return new n(b,this._streamDataLoader,e)};a.prototype.registerIdleFrameWorker=function(b){var e=this;f.assert(!b.idleFrame||
b.needsUpdate,"needsUpdate has to be specified if idleFrame is specified");var a={callbacks:b};this.addIdleFrameWorker(a);return{remove:function(){e.removeIdleFrameWorker(a)}}};a.prototype.registerFrameWorker=function(b){var e=this,a={callback:b};this.addFrameWorker(a);return{remove:function(){e.removeFrameWorker(a)}}};a.prototype.addIdleFrameWorker=function(b){this._idleWorkers.push(b);this.isIdle()&&this._idleUpdatesStartFired&&b.callbacks.idleBegin&&b.callbacks.idleBegin()};a.prototype.removeIdleFrameWorker=
function(b){var a=this._idleWorkers,c=a.indexOf(b);f.assert(0<=c,"worker not registered");this._idleUpdatesStartFired&&b.callbacks.idleEnd&&b.callbacks.idleEnd();a.splice(c,1);this._nextIdleWorker>=a.length&&(this._nextIdleWorker=0)};a.prototype.addFrameWorker=function(b){this._frameWorkers.push(b)};a.prototype.removeFrameWorker=function(b){var a=this._frameWorkers;b=a.indexOf(b);f.assert(0<=b,"worker not registerted");a.splice(b,1);this._nextFrameWorker>=this._frameWorkers.length&&(this._nextFrameWorker=
0)};a.prototype.cameraChangedHandler=function(){this._lastTargetChangeTime=this._budget.now();this.setMemoryDirty();this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this.callIdleFrameWorkersEnd())};a.prototype.frameUpdate=function(b){var a=this.isIdle()?0:5,c=b.frameDuration-b.elapsedFrameTime-a,d=this.idleBudget-b.elapsedFrameTime;this._view._stage&&!this._view._stage.getIdleSuspend()&&(d=c);c=Math.max(this.isIdle()?d:c,5);this._budget.reset(c);this._view.stateManager&&this._view.stateManager.step(b.deltaTime/
1E3);this._memoryController.update();for(b=0;b<this._frameWorkers.length;++b)if(c=(this._nextFrameWorker+b)%this._frameWorkers.length,this._frameWorkers[c].callback(this._budget),this._budget.remaining()<a){this._nextFrameWorker=(c+1)%this._frameWorkers.length;break}this.isIdle()&&!this._budget.done()&&(this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this.callIdleFrameWorkersBegin()),this.callIdleFrameWorkers())};a.prototype.isIdle=function(){return this._budget.now()-this._lastTargetChangeTime>
this.idleTimeout};a.prototype.callIdleFrameWorkersBegin=function(){this._idleWorkers.forEach(function(b){b.callbacks.idleBegin&&b.callbacks.idleBegin()})};a.prototype.callIdleFrameWorkersEnd=function(){this._idleWorkers.forEach(function(b){b.callbacks.idleEnd&&b.callbacks.idleEnd()})};a.prototype.callIdleFrameWorkers=function(){for(var b=0;b<this._idleWorkers.length;++b){var a=(this._nextIdleWorker+b)%this._idleWorkers.length;if(this._budget.done()){this._nextIdleWorker=a;break}a=this._idleWorkers[a];
a.callbacks.needsUpdate&&a.callbacks.needsUpdate()&&a.callbacks.idleFrame(this._budget)}};return a}();(function(a){(function(a){a.TERRAIN="terrain";a.SCENE="scene";a.SYMBOLOGY="symbology"})(a.ClientType||(a.ClientType={}));var b=function(){function a(a){this._nowFunc=a;this.enabled=!0;this.budget=this.begin=0}a.prototype.now=function(){return this._nowFunc()};a.prototype.reset=function(a){this.begin=this.now();this.budget=this.enabled?a:Number.MAX_VALUE};a.prototype.done=function(){return this.enabled&&
this.elapsed()>=this.budget};a.prototype.remaining=function(){return this.enabled?Math.max(this.budget-this.elapsed(),0):Number.POSITIVE_INFINITY};a.prototype.elapsed=function(){return this.now()-this.begin};return a}();a.Budget=b})(d||(d={}));return d});