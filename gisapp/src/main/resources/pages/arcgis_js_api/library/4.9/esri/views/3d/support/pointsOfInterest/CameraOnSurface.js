// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/throttle ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../geometry/Point ../../lib/gl-matrix ../PropertiesPool ./PointOfInterest".split(" "),function(c,g,m,f,n,p,d,k,h,q,r){Object.defineProperty(g,"__esModule",{value:!0});var t=Array;c=function(c){function a(b){b=c.call(this,b)||this;b.propertiesPool=new q.default({location:k,renderLocation:t},
b);b.estimatedSurfaceAltitude=0;b.pendingElevationQuery=null;b.renderLocation=[0,0,0];return b}m(a,c);a.prototype.initialize=function(){var b=this;this.measureSurfaceAltitudeThrottle=n.throttle(this.measureSurfaceAltitude,this.altitudeEstimationInterval,this);this.handles.add(this.measureSurfaceAltitudeThrottle);this.measureSurfaceAltitude();var a=function(){return b.measureSurfaceAltitudeThrottle()};this.map&&this.handles.add([p.on(this.map,"ground.layers","change",a,a,a)])};a.prototype.destroy=
function(){this.cancelPendingRequest()};Object.defineProperty(a.prototype,"location",{get:function(){var b=this.propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,b,this.state.spatialReference);return b},enumerable:!0,configurable:!0});a.prototype.update=function(b){this.measureSurfaceAltitudeThrottle();this.updateCameraOnSurface()};a.prototype.forceUpdate=function(){this.measureSurfaceAltitudeThrottle.forceUpdate();this.updateCameraOnSurface()};a.prototype.hasPendingUpdates=
function(){return this.measureSurfaceAltitudeThrottle.hasPendingUpdates()||!!this.pendingElevationQuery};a.prototype.cancelPendingRequest=function(){var b=this.pendingElevationQuery;b&&(this.pendingElevationQuery=null,b.cancel())};a.prototype.measureSurfaceAltitude=function(){var b=this;this.cancelPendingRequest();if(this.map&&this.map.ground){this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,l,this.state.spatialReference);var a=this.map.ground.queryElevation(l).then(function(a){b.updateSurfaceAltitude(a.geometry.z)}).catch(function(a){a&&
"cancel"===a.dojoType||b.updateSurfaceAltitude(0)}).catch(function(){}).then(function(){b.pendingElevationQuery===a&&(b.pendingElevationQuery=null)});a.isFulfilled()||(this.pendingElevationQuery=a)}else this.updateSurfaceAltitude(0)};a.prototype.updateSurfaceAltitude=function(a){this.estimatedSurfaceAltitude!==a&&(this.estimatedSurfaceAltitude=a,this.updateCameraOnSurface())};a.prototype.updateCameraOnSurface=function(){h.vec3d.set(this.state.camera.eye,e);this.renderCoordsHelper.setAltitude(this.estimatedSurfaceAltitude,
e);var a=this._get("renderLocation");a[0]===e[0]&&a[1]===e[1]&&a[2]===e[2]||this._set("renderLocation",h.vec3d.set(e,this.propertiesPool.get("renderLocation")))};a.RELATIVE_ALTITUDE_CHANGE_THRESHOLD=.05;f([d.property({constructOnly:!0})],a.prototype,"altitudeEstimationInterval",void 0);f([d.property({readOnly:!0,dependsOn:["renderLocation"]})],a.prototype,"location",null);f([d.property({constructOnly:!0})],a.prototype,"map",void 0);f([d.property({readOnly:!0})],a.prototype,"renderLocation",void 0);
return a=f([d.subclass("esri.views.3d.support.CameraOnSurface")],a)}(d.declared(r.PointOfInterest));g.CameraOnSurface=c;var e=h.vec3d.create(),l=new k;g.default=c});