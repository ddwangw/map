// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,c){Object.defineProperty(c,"__esModule",{value:!0});c.startMeasurement=function(a){return(a=a.capabilities.disjointTimerQuery)?new h(a):null};c.getTimestamp=function(a,e,b){void 0===b&&(b=50);var d=a.capabilities.disjointTimerQuery;if(!d||0>=d.timestampBits())return null;var c=d.createQuery();d.createTimestamp(c);var g=function(){var a=d.resultAvailable(c),f=d.disjoint();a&&!f?(a=d.getResult(c),e(a/1E6)):f?e():setTimeout(g,b)};g()};c.supportsTimestamps=function(a){a=
a.capabilities.disjointTimerQuery;if(!a)return!1;a=a.timestampBits();console.log({bits:a});return 0<a};var h=function(){function a(a){this.timer=a;this.query=a.createQuery();this.timer.beginTimeElapsed(this.query)}a.prototype.stop=function(a,b){void 0===b&&(b=50);this.cb=a;this.checkInterval=b;this.timer.endTimeElapsed();this.checkQueryResult()};a.prototype.checkQueryResult=function(){var a=this.timer.resultAvailable(this.query),b=this.timer.disjoint();a&&!b?(a=this.timer.getResult(this.query),this.cb(a/
1E6)):b?this.cb():setTimeout(this.checkQueryResult.bind(this),this.checkInterval)};return a}()});