// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Handles ../../../../core/accessorSupport/decorators ../../../../geometry/Point ../../lib/gl-matrix ../PropertiesPool ./CameraOnSurface ./CenterOnSurface ./ContentGeometryUpdates ./disposeMembers ./Focus ./StableSurfaceCenter ./SurfaceGeometryUpdates ../../webgl-engine/lib/Selector".split(" "),function(e,h,n,d,p,q,c,r,l,t,u,k,v,w,x,y,z,m){Object.defineProperty(h,
"__esModule",{value:!0});var A=Array;e=function(e){function b(a){a=e.call(this,a)||this;a.handles=new q;a.surfaceAltitudeAtCenter=0;a.surfaceAltitudeAtCenterDirty=!0;a.surfaceAltitudeAtCenterWithContent=0;a.surfaceAltitudeAtCenterWithContentDirty=!0;a.propertiesPool=new t.default({pointOfView:r,renderPointOfView:A},a);a.updateSurfaceAltitudeFrequentInterval=B;a.updateSurfaceAltitudeInfrequentInterval=C;a.renderPointOfView=[0,0,0];return a}n(b,e);b.prototype.initialize=function(){var a=this,b=this.view,
c=b.state,d=b.basemapTerrain,f=b.renderCoordsHelper,b=b.map;this.surfaceSelector=new m(c.mode);this.surfaceSelector.enableBackfacesTerrain=c.isGlobal?!1:!0;this.surfaceSelector.enableInvisibleTerrain=!1;this.contentSelector=new m(c.mode);this.contentSelector.enableTerrain=!1;var e=this.estimateSurfaceAltitudeAtCenter.bind(this);this._set("centerOnSurfaceInfrequent",new k.default({state:c,surface:d,renderCoordsHelper:f,estimateSurfaceAltitudeAtCenter:e,altitudeEstimationInterval:this.updateSurfaceAltitudeInfrequentInterval}));
this._set("centerOnSurfaceFrequent",new k.default({state:c,surface:d,renderCoordsHelper:f,estimateSurfaceAltitudeAtCenter:e,altitudeEstimationInterval:this.updateSurfaceAltitudeFrequentInterval}));this._set("centerOnContent",new k.default({state:c,surface:d,renderCoordsHelper:f,estimateSurfaceAltitudeAtCenter:this.estimateSurfaceAltitudeAtCenterWithContent.bind(this),altitudeEstimationInterval:this.updateSurfaceAltitudeFrequentInterval}));this._set("cameraOnSurface",new u.default({state:c,surface:d,
renderCoordsHelper:f,altitudeEstimationInterval:this.updateSurfaceAltitudeInfrequentInterval,map:b}));this._set("surfaceGeometryUpdates",new z.default({state:c,surface:d,renderCoordsHelper:f,centerOnSurfaceInstances:[this.centerOnSurfaceFrequent,this.centerOnContent,this.centerOnSurfaceInfrequent]}));this._set("contentGeometryUpdates",new v.default({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:f}));this._set("surfaceOrigin",new y.default({view:this.view}));this._set("focus",new x.default({state:c,
surface:d,renderCoordsHelper:f,centerOnSurface:this.centerOnSurfaceFrequent}));this.handles.add(c.watch("camera",function(b){return a.cameraChanged(b)},!0));this.handles.add(this.surfaceGeometryUpdates.events.on("request-update",function(){return a.updateCenterPointsOfInterest()}));this.handles.add(d.watch("extent",function(){return a.updateCenterPointsOfInterest()}));this.handles.add(this.contentGeometryUpdates.events.on("request-update",function(){return a.updateCenterOnContent()}));this.cameraChanged(this.view.state.camera);
this.forceUpdate()};b.prototype.destroy=function(){w.default(this,"handles","centerOnSurfaceInfrequent","centerOnSurfaceFrequent","cameraOnSurface","centerOnContent","surfaceOrigin","focus","propertiesPool")};Object.defineProperty(b.prototype,"pointOfView",{get:function(){var a=this.propertiesPool.get("pointOfView");this.view.renderCoordsHelper.fromRenderCoords(this.renderPointOfView,a,this.view.state.spatialReference);return a},enumerable:!0,configurable:!0});b.prototype.forceUpdate=function(){this.surfaceGeometryUpdates.forceUpdate();
this.centerOnSurfaceInfrequent.forceUpdate();this.centerOnSurfaceFrequent.forceUpdate();this.cameraOnSurface.forceUpdate();this.centerOnContent.forceUpdate();this.focus.forceUpdate()};b.prototype.hasPendingUpdates=function(){return this.surfaceGeometryUpdates.hasPendingUpdates()||this.centerOnContent.hasPendingUpdates()||this.centerOnSurfaceInfrequent.hasPendingUpdates()||this.cameraOnSurface.hasPendingUpdates()||this.centerOnSurfaceFrequent.hasPendingUpdates()||this.focus.hasPendingUpdates()};b.prototype.estimateSurfaceAltitudeAtCenterWithContent=
function(){if(!this.surfaceAltitudeAtCenterWithContentDirty)return this.surfaceAltitudeAtCenterWithContent;this.surfaceAltitudeAtCenterWithContentDirty=!1;var a=this.view.state.camera;this.view.sceneIntersectionHelper.pickPointFromSegment(a.eye,a.center,g,this.contentSelector)?this.surfaceAltitudeAtCenterWithContent=this.view.renderCoordsHelper.getAltitude(g):this.surfaceAltitudeAtCenterWithContent=this.estimateSurfaceAltitudeAtCenter();return this.surfaceAltitudeAtCenterWithContent};b.prototype.estimateSurfaceAltitudeAtCenter=
function(){if(!this.view.basemapTerrain)return 0;if(!this.surfaceAltitudeAtCenterDirty)return this.surfaceAltitudeAtCenter;this.surfaceAltitudeAtCenterDirty=!1;var a=this.view.state.camera;this.surfaceSelector.init(null,a.eye,a.center,null,a,null,!1);this.view.basemapTerrain.intersect(this.surfaceSelector,a.eye,a.center);this.surfaceSelector.minResult.getIntersectionPoint(g)&&(this.surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(g));return this.surfaceAltitudeAtCenter};b.prototype.cameraChanged=
function(a){this.updateCenterPointsOfInterest(a);a=a.eye;this.renderPointOfView[0]===a[0]&&this.renderPointOfView[1]===a[1]&&this.renderPointOfView[2]===a[2]||this._set("renderPointOfView",l.vec3d.set(a,this.propertiesPool.get("renderPointOfView")))};b.prototype.updateCenterPointsOfInterest=function(a){void 0===a&&(a=this.view.state.camera);this.surfaceAltitudeAtCenterWithContentDirty=this.surfaceAltitudeAtCenterDirty=!0;this.centerOnSurfaceFrequent.update(a);this.centerOnSurfaceInfrequent.update(a);
this.cameraOnSurface.update(a);this.centerOnContent.update(a);this.focus.update(a)};b.prototype.updateCenterOnContent=function(){this.surfaceAltitudeAtCenterWithContentDirty=!0;this.centerOnContent.update(this.view.state.camera)};d([c.property({constructOnly:!0})],b.prototype,"updateSurfaceAltitudeFrequentInterval",void 0);d([c.property({constructOnly:!0})],b.prototype,"updateSurfaceAltitudeInfrequentInterval",void 0);d([c.property({readOnly:!0})],b.prototype,"centerOnContent",void 0);d([c.property({readOnly:!0})],
b.prototype,"centerOnSurfaceFrequent",void 0);d([c.property({readOnly:!0})],b.prototype,"centerOnSurfaceInfrequent",void 0);d([c.property({readOnly:!0})],b.prototype,"cameraOnSurface",void 0);d([c.property({readOnly:!0})],b.prototype,"focus",void 0);d([c.property({readOnly:!0})],b.prototype,"surfaceOrigin",void 0);d([c.property({readOnly:!0})],b.prototype,"contentGeometryUpdates",void 0);d([c.property({readOnly:!0,dependsOn:["renderPointOfView"]})],b.prototype,"pointOfView",null);d([c.property({readOnly:!0})],
b.prototype,"renderPointOfView",void 0);d([c.property({readOnly:!0})],b.prototype,"surfaceGeometryUpdates",void 0);d([c.property({constructOnly:!0})],b.prototype,"view",void 0);return b=d([c.subclass("esri.views.3d.support.PointsOfInterest")],b)}(c.declared(p));h.PointsOfInterest=e;var g=l.vec3d.create(),B=200,C=3E3;h.default=e});