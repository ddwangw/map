// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Error","../../../../core/promiseUtils"],function(k,f,m,e){function g(a){return e.create(function(d,b){a.oncomplete=function(){return d()};a.onerror=function(){return b(a.error)};a.onabort=function(){return b(a.error)}})}function h(a){return e.create(function(d,b){"done"===a.readyState?null!=a.error?b(a.error):d(a.result):(a.onsuccess=function(){return d(a.result)},a.onerror=function(){return b(a.error)})})}Object.defineProperty(f,"__esModule",{value:!0});
k=function(){function a(d,b,c){this._quotaReductionPromise=this._db=null;this._miss=this._hit=this._gcCounter=0;this._destroyed=!1;this.gcFrequency=50;this.maxByteSize=1073741824;this.quotaReductionFactor=.2;this._dbName=d;this._storeName=b;this._version=c}a.prototype.init=function(){var d=this;return e.resolve().then(function(){var b=indexedDB.open(d._dbName,d._version);b.onupgradeneeded=function(c){var a=b.result,l=b.transaction,e=a.objectStoreNames.contains(d._storeName)?l.objectStore(d._storeName):
a.createObjectStore(d._storeName),a=a.objectStoreNames.contains("last_access")?l.objectStore("last_access"):a.createObjectStore("last_access");a.indexNames.contains("date")||a.createIndex("date","date",{unique:!1});a.indexNames.contains("byteSize")||a.createIndex("byteSize","byteSize",{unique:!1});c.oldVersion<d._version&&(e.clear(),a.clear())};return h(b)}).then(function(b){d._destroyed?b.close():d._db=b})};a.prototype.destroy=function(){this._db&&(this._db.close(),this._db=null);this._destroyed=
!0};a.prototype.getHitRate=function(){return this._hit/(this._hit+this._miss)};a.prototype.put=function(a,b){var c=this;return null==this._db?e.reject(m("indexedb:not-initialized","IndexedDB Cache is not initialized")):(null!=this._quotaReductionPromise?this._quotaReductionPromise:e.resolve()).then(function(){return c._put(a,b)}).catch(function(d){if("QuotaExceededError"===d.name)return null==c._quotaReductionPromise&&(c._quotaReductionPromise=c._getCacheSize().then(function(a){return c._removeLeastRecentlyAccessed(b.byteSize+
Math.ceil(a*c.quotaReductionFactor))}),c._quotaReductionPromise.always(function(){c._quotaReductionPromise=null})),c._quotaReductionPromise.then(function(){return c._put(a,b)});throw d;}).then(function(){c._gcCounter--;0>c._gcCounter&&(c._gcCounter=c.gcFrequency,c._getCacheSize().then(function(a){return c._removeLeastRecentlyAccessed(a-c.maxByteSize)}))})};a.prototype.get=function(a){var b=this;return null==this._db?e.resolve(null):e.resolve().then(function(){var c=b._db.transaction(b._storeName,
"readonly").objectStore(b._storeName).get(a);return h(c)}).then(function(c){null==c?++b._miss:(++b._hit,b._db.transaction("last_access","readwrite").objectStore("last_access").put({date:(new Date).getTime(),byteSize:c.byteSize},a));return c}).catch(function(a){++b._miss;return null})};a.prototype.remove=function(a){var b=this;return null==this._db?e.resolve():e.resolve().then(function(){var c=b._db.transaction([b._storeName,"last_access"],"readwrite"),d=c.objectStore(b._storeName),e=c.objectStore("last_access");
d.delete(a);e.delete(a);return g(c)})};a.prototype._put=function(a,b){var c=this._db.transaction([this._storeName,"last_access"],"readwrite");c.objectStore(this._storeName).put(b,a);c.objectStore("last_access").put({date:(new Date).getTime(),byteSize:b.byteSize},a);return g(c)};a.prototype._removeLeastRecentlyAccessed=function(a){if(!(0>=a)){var b=this._db.transaction([this._storeName,"last_access"],"readwrite"),c=b.objectStore(this._storeName),d=b.objectStore("last_access"),e=0,f=d.index("date").openCursor(null,
"next");f.onsuccess=function(b){b=f.result;null!=b&&(null!=b.value.byteSize&&(e+=b.value.byteSize),c.delete(b.primaryKey),d.delete(b.primaryKey),e<a&&b.continue())};return g(b)}};a.prototype._getCacheSize=function(){var a=this._db.transaction("last_access"),b=0,c=a.objectStore("last_access").index("byteSize").openKeyCursor();c.onsuccess=function(a){if(a=c.result){var d=a.key;null!=d&&(b+=d);a.continue()}};return g(a).then(function(){return b})};return a}();f.IDBCache=k;f.whenTransaction=g;f.whenRequest=
h});