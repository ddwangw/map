// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Camera ../../../Viewpoint ../../../core/Accessor ../../../core/Error ../../../core/Handles ../../../core/Logger ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../geometry/Point ../../../geometry/ScreenPoint ../../../geometry/support/webMercatorUtils ../camera/constraintUtils ../camera/intersectionUtils ../lib/gl-matrix ./ConstraintsManager ./Frustum ./controllers/PointToPointAnimationController ./controllers/SurfaceCollisionCorrectionController ../support/cameraUtils ../support/PropertiesPool ../support/viewpointUtils ../webgl-engine/lib/Camera ../../animation/easing".split(" "),
function(l,u,F,G,k,p,r,H,n,I,J,A,m,h,B,K,L,M,v,C,w,N,O,x,D,e,P,y,Q,R){Object.defineProperty(u,"__esModule",{value:!0});var f=J.getLogger("esri.views.3d.state.ViewStateManager");l=function(l){function c(a){a=l.call(this)||this;a.propertiesPool=new P.default({frustum:O.default},a);a.handles=new I;a.cameraSetByUser=!1;a.internalSetOrder=[];a.immediateGoToPromise=null;a.animatedGoToPromise=null;a.ready=!1;return a}G(c,l);Object.defineProperty(c.prototype,"camera",{get:function(){return this.ready?e.internalToExternal(this.view,
this.view.state.camera):this._get("camera")},set:function(a){this.updatePropertyBeforeReady("camera",a)||this.setStateCamera(e.externalToInternal(this.view,a),{applyConstraints:!1})||f.error("#camera\x3d","Invalid camera",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"center",{get:function(){return this.ready?this.view.pointsOfInterest.centerOnContent.location:this._get("center")},set:function(a){this.updatePropertyBeforeReady("center",a)||(a?this.isCompatible(a)?this.setStateCamera(this.centerToCamera(a),
{applyConstraints:!0})?this.view.pointsOfInterest.centerOnContent.forceUpdate():f.error("#center\x3d","Invalid center",a):f.error("#center\x3d","Center has an incompatible spatial reference (center: "+(a.spatialReference?a.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a):f.error("#center\x3d","Center may not be null or undefined"))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"extent",{get:function(){return this.ready?e.toExtent(this.view,null,
null,null,E):this._get("extent")},set:function(a){this.updatePropertyBeforeReady("extent",a)||(a?this.isCompatible(a)?this.setStateCamera(this.extentToCamera(a),{applyConstraints:!0})||f.error("#extent\x3d","Invalid extent",a):f.error("#extent\x3d","Extent has an incompatible spatial reference (extent: "+(a.spatialReference?a.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a):f.error("#extent\x3d","Extent may not be null or undefined"))},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"frustum",{get:function(){var a=this.propertiesPool.get("frustum");a.renderCoordsHelper=this.view.renderCoordsHelper;a.update(this.view.state.camera);return a},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"hasInitialView",{get:function(){return!!this.view.get("map.initialViewProperties.viewpoint")},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"scale",{get:function(){if(!this.ready)return this._get("scale");var a=this.view.pointsOfInterest.centerOnContent;
return e.distanceToScale(this.view,a.distance,a.location.latitude)},set:function(a){this.updatePropertyBeforeReady("scale",a)||this.setStateCamera(this.scaleToCamera(a),{applyConstraints:!0})||f.error("#scale\x3d","Invalid scale",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"padding",{get:function(){if(!this.ready)return this._get("padding");var a=this.view.state.camera.padding,b=this._get("padding");return null!==b&&b.top===a[0]&&b.right===a[1]&&b.bottom===a[2]&&b.left===
a[3]?b:{top:a[0],right:a[1],bottom:a[2],left:a[3]}},set:function(a){this.updatePropertyBeforeReady("padding",a)||(a?w.vec4d.set4(a.top||0,a.right||0,a.bottom||0,a.left||0,z):w.vec4d.set4(0,0,0,0,z),this.view.state.updateCamera(function(a){a.padding=z}))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"screenCenter",{get:function(){var a=this.padding;return new L((this.view.width-(a.left+a.right))/2+a.left,(this.view.height-(a.top+a.bottom))/2+a.top)},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"viewpoint",{get:function(){return this.ready?y.fromCamera(this.view,this.camera):this._get("viewpoint")},set:function(a){if(!this.updatePropertyBeforeReady("viewpoint",a))if(a)if(this.isCompatible(a))this.setStateCamera(this.viewpointToCamera(a),{applyConstraints:!a.camera})||f.error("#viewpoint\x3d","Invalid viewpoint",a);else{var b=a.camera?a.camera.position:a.targetGeometry,b=b&&b.spatialReference;f.error("#viewpoint\x3d","Viewpoint has an incompatible spatial reference (viewpoint: "+
(b?b.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a)}else f.error("#viewpoint\x3d","Viewpoint may not be null or undefined")},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"zoom",{get:function(){return this.ready?e.scaleToZoom(this.view,this.scale):this._get("zoom")},set:function(a){this.updatePropertyBeforeReady("zoom",a)||this.setStateCamera(this.zoomToCamera(a),{applyConstraints:!0})||f.error("#zoom\x3d","Invalid zoom",a)},enumerable:!0,configurable:!0});c.prototype.initialize=
function(){var a=this;this.handles.add(this.view.watch("state.camera",function(b){return a.cameraChangedSync(b)},!0),m.on(this.view,"state.events","before-camera-change",function(b){return a.beforeCameraChangeHandle(b.camera)}));m.once(this.view,"state.camera",function(b){return a.updateCameraAboveGround(b)});this.handles.add(this.view.on("resize",function(b){return a.handleResize(b.width,b.height)}));this.handles.add(this.view.watch("state.cameraController",function(){a.cameraSetByUser=!0;a.handles.remove(t);
a.cancelImmediateGoTo()}));this.handles.add(m.on(this.view,"state.events","camera-projection-changed",function(){return a.notifyChange("scale")}))};c.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null);this.propertiesPool&&(this.propertiesPool.destroy(),this.propertiesPool=null)};c.prototype.init=function(){var a=this;this.constraintsManager=new N.default({view:this.view});this.handleResize(this.view.width,this.view.height);var b=this.getInitialProperties();this.cameraSetByUser=
!1;this._set("ready",!0);for(var d=0;d<b.length;d++){var c=b[d];this.set(c.name,c.value)}this.cameraSetByUser||((b=this.view.get("map.initialViewProperties.viewpoint")||this.view.initialExtent)&&this.isCompatible(b)?this.setInitialView(b):"local"===this.view.state.mode&&this.handles.add(m.whenOnce(this.view.basemapTerrain,"ready",function(){a.handles.remove(t);a.setInitialView(a.view.groundExtent)}),t))};c.prototype.deinit=function(){this.ready&&(this._override("padding",this.padding),this.cancelImmediateGoTo(),
this.cancelAnimatedGoTo(),this._set("ready",!1),this._clearOverride("hasInitialView"),this.internalSetOrder.length=0,this.cameraSetByUser=!1,this.handles.remove(t),this.constraintsManager&&(this.constraintsManager.destroy(),this.constraintsManager=null))};c.prototype.goTo=function(a,b){b=F({animate:!0},b);return b.animate?this.goToAnimated(a,b):this.goToImmediate(a,b)};c.prototype.debugSetCameraOnContent=function(){this.setStateCamera(C.cameraOnContentAlongViewDirection(this.view),{applyConstraints:!1})};
c.prototype.step=function(a){var b=this.view.state,d=b&&this.view.state.cameraController;d&&(b.updateCamera(function(b){d.stepController(a,b)}),d.steppingFinished&&d.finishController())};c.prototype.cancelImmediateGoTo=function(){var a=this.immediateGoToPromise;a&&(this.immediateGoToPromise=null,a.cancel())};c.prototype.cancelAnimatedGoTo=function(){var a=this.animatedGoToPromise;a&&(this.animatedGoToPromise=null,a.cancel())};c.prototype.getInitialProperties=function(){for(var a=this,b=new Set,d=
[],c=0,g=S;c<g.length;c++){var e=g[c],f=e.propertyName,e=e.overrides,h=b.has(f),k=this._isOverridden(f);!h&&k&&d.push({name:f,value:this._get(f)});this._clearOverride(f);(h||k)&&e.forEach(function(a){return b.add(a)})}return d.sort(function(b,d){b=a.internalSetOrder.indexOf(b.name);d=a.internalSetOrder.indexOf(d.name);return b<d?-1:b>d?1:0})};c.prototype.setInitialView=function(a){if(a&&!this.cameraSetByUser)if(a instanceof p)this.setStateCamera(e.externalToInternal(this.view,a),{applyConstraints:!1});
else if(a instanceof r)if(a.targetGeometry instanceof B){var b=e.fromExtent(this.view,a.targetGeometry,0,.5,e.OrientationMode.LOCKED);this.setStateCamera(e.externalToInternal(this.view,b),{applyConstraints:!0})}else b={applyConstraints:!a.camera},a=this.viewpointToCamera(a),this.setStateCamera(a,b);else b=e.fromExtent(this.view,a,0,.5,e.OrientationMode.LOCKED),this.setStateCamera(e.externalToInternal(this.view,b),{applyConstraints:!0})};c.prototype.updatePropertyBeforeReady=function(a,b){if(this.ready)return!1;
this._override(a,b);var d=this.internalSetOrder.indexOf(a);-1!==d&&(this.internalSetOrder=this.internalSetOrder.splice(d,1));b&&(this.internalSetOrder.push(a),-1!==T.indexOf(a)&&this._override("hasInitialView",!0));return!0};c.prototype.isCompatible=function(a){return a?a instanceof r?a.camera?this.isCompatible(a.camera):this.isCompatible(a.targetGeometry):a instanceof p?this.isCompatible(a.position):a.spatialReference&&M.canProject(a.spatialReference,this.view.spatialReference):!1};c.prototype.getPreservingHeadingTilt=
function(a){void 0===a&&(a=U);this.cameraSetByUser?(a.heading=this.camera.heading,a.tilt=this.camera.tilt):(a.heading=0,a.tilt=.5);return a};c.prototype.centerPointAtDistanceToCamera=function(a,b,d){void 0===d&&(d=q);var c=this.getPreservingHeadingTilt();return(a=e.getObserverForPointAtDistance(this.view,c.heading,c.tilt,a,b,e.OrientationMode.ADJUST))?(d.copyFrom(this.view.state.camera),d.eye=a.eye,d.center=a.center,d.up=a.up,d):null};c.prototype.centerToCamera=function(a){var b=this.view.pointsOfInterest.centerOnContent;
b.forceUpdate();return this.centerPointAtDistanceToCamera(a,b.distance)};c.prototype.extentToCamera=function(a){var b=this.getPreservingHeadingTilt();a=e.fromExtent(this.view,a,b.heading,b.tilt,e.OrientationMode.ADJUST,E);return e.externalToInternal(this.view,a)};c.prototype.scaleToCamera=function(a){if(null==a)return null;var b=this.view.pointsOfInterest.centerOnContent;b.forceUpdate();var d=b.renderLocation;a=e.scaleToDistance(this.view,a,b.location.latitude);return this.centerPointAtDistanceToCamera(d,
a)};c.prototype.zoomToCamera=function(a){return this.scaleToCamera(e.zoomToScale(this.view,a))};c.prototype.viewpointToCamera=function(a){return(a=y.toCamera(this.view,a))?e.externalToInternal(this.view,a):null};c.prototype.setStateCamera=function(a,b){var d=this;if(!a||!this.view.state.stopActiveCameraController())return!1;this.cameraSetByUser=!0;this.cancelImmediateGoTo();this.view.state.updateCamera(function(c){c.copyFrom(a);b.applyConstraints&&v.applyAll(d.view,c)});b.applyConstraints||(this.view.state.cameraController=
new D.SurfaceCollisionCorrectionController({view:this.view,desiredCamera:a}));return!0};c.prototype.handleResize=function(a,b){var d=this.view.canvas;!d||d.width===a&&d.height===b||(d.width=a,d.height=b);this.view.state&&(d=this.view.state.camera,d.fullWidth!==a||d.fullHeight!==b)&&(q.copyFrom(d),q.fullWidth=a,q.fullHeight=b,this.view.state.camera=q)};c.prototype.beforeCameraChangeHandle=function(a){this.updateCameraAboveGround(a)};c.prototype.cameraChangedSync=function(a){a&&this.view._stage&&this.view._stage.setCamera(a)};
c.prototype.updateCameraAboveGround=function(a){var b=this.view.basemapTerrain,d=this.view.renderCoordsHelper.getAltitude(a.eye),b=b&&b.spatialReference?C.surfaceElevationBelowEye(this.view,a):0;a.relativeElevation=d-b};c.prototype.createGoToCamera=function(a){var b=this;return m.whenOnce(this,"ready",null,!0).then(function(){return y.create(b.view,a)}).then(function(d){var c=!!(a instanceof r&&a.camera||a instanceof p),g=d.camera;if(!b.isCompatible(g))throw d=(d=g.position)&&d.spatialReference,new n("goto:incompatible-spatialreference",
"Resulting camera has an incompatible spatial reference (camera: "+(d?d.wkid:"none")+", view: "+b.view.spatialReference.wkid+")",{camera:g});g=e.externalToInternal(b.view,g);if(!g)throw new n("goto:invalid-camera","Resulting camera is invalid");return{viewpoint:d,camera:g,isFullySpecified:c}})};c.prototype.cancellableGoTo=function(a){var b=this,d;return A.create(function(b,c){d={resolve:b,reject:c};a.asyncResult=d},function(){b.view.state.cameraController===a&&a.active&&a.asyncResult===d&&a.stopController()})};
c.prototype.goToImmediate=function(a,b){var d=this;this.cancelAnimatedGoTo();this.cancelImmediateGoTo();var c=this.createGoToCamera(a).then(function(a){d.immediateGoToPromise===c&&(d.immediateGoToPromise=null);d.setStateCamera(a.camera,{applyConstraints:!a.isFullySpecified})}).catch(function(a){d.immediateGoToPromise===c&&(d.immediateGoToPromise=null);a instanceof n&&a.message&&f.error("#goTo()","Failed to create camera from target, "+a.message[0].toLowerCase()+a.message.slice(1));throw a;});return this.immediateGoToPromise=
c};c.prototype.goToAnimatedBeforeReady=function(a,b){var c=this;this.cancelAnimatedGoTo();var e=m.whenOnce(this.view,"ready").then(function(){if(e===c.animatedGoToPromise)return c.animatedGoToPromise=null,c.goToAnimated(a,b);throw new n("view:goto-cancelled","Cancelled");});return this.animatedGoToPromise=e};c.prototype.goToAnimated=function(a,b){var c=this;this.cancelAnimatedGoTo();if(!this.ready)return this.goToAnimatedBeforeReady(a,b);var e=this.view.state.cameraController,g;e instanceof x.PointToPointAnimationController&&
(e.updateStateFromViewAnimation(),e.active&&(g=e));null==g&&(g=new x.PointToPointAnimationController(this.view.state,this.view.sceneIntersectionHelper));var h=g.viewAnimation;a=this.createGoToCamera(a);var k=a.then(function(a){return a.viewpoint});h.update(k);if(g!==e&&!this.view.state.switchCameraController(g))return h.stop(),f.error("#goTo()","Cannot start an animation while interacting"),A.reject(new n("view:goto-cannot-interrupt","Cannot start an animation while interacting"));var l=h.target,
m=function(){return c.view.state.cameraController===g&&g.viewAnimation.target===l&&g.active};a.then(function(a){var d=a.viewpoint,e=a.camera;a=a.isFullySpecified;if(m()){g.viewAnimation.update(d);l=g.viewAnimation.target;var f;a?(f=new D.SurfaceCollisionCorrectionController({view:c.view,desiredCamera:e}),v.applySurfaceCollision(c.view,e,1)):v.applyAll(c.view,e);g.begin(e,c.internalAnimateOptions(b));return h.when().then(function(){var a=c.view.state.cameraController;f&&(a&&a.active?a instanceof x.PointToPointAnimationController&&
a.viewAnimation.target===l&&(c.view.state.cameraController=f):g.viewAnimation.target===l&&(c.view.state.cameraController=f))})}}).catch(function(a){a instanceof n&&a.message&&f.error("#goTo()","Failed to create camera from target, "+a.message[0].toLowerCase()+a.message.slice(1));if(m())throw c.view.state.cameraController.stopController(),a;});return this.cancellableGoTo(g)};c.prototype.internalAnimateOptions=function(a){var b={};a&&(null!=a.speedFactor&&(b.speedFactor=a.speedFactor),null!=a.duration&&
(b.duration=a.duration/1E3),null!=a.maxDuration&&(b.maxDuration=a.maxDuration/1E3),null!=a.easing&&(b.easing="string"===typeof a.easing?R.named[a.easing]:a.easing));return b};k([h.property({type:p,dependsOn:["view.state.camera","ready"]})],c.prototype,"camera",null);k([h.property({type:K,dependsOn:["view.pointsOfInterest.centerOnContent.location","ready"]})],c.prototype,"center",null);k([h.property({type:B,dependsOn:["view.state.camera","ready"]})],c.prototype,"extent",null);k([h.property({readOnly:!0,
dependsOn:["view.state.camera","ready"]})],c.prototype,"frustum",null);k([h.property({readOnly:!0,dependsOn:["view.map.initialViewProperties?.viewpoint"]})],c.prototype,"hasInitialView",null);k([h.property({readOnly:!0,type:Boolean})],c.prototype,"ready",void 0);k([h.property({dependsOn:["view.pointsOfInterest.centerOnContent.distance","ready"],type:Number})],c.prototype,"scale",null);k([h.property({dependsOn:["view.state.camera","ready"]})],c.prototype,"padding",null);k([h.property({readOnly:!0,
dependsOn:["view.width","view.height","padding"]})],c.prototype,"screenCenter",null);k([h.property({constructOnly:!0})],c.prototype,"view",void 0);k([h.property({type:r,dependsOn:["camera","ready"]})],c.prototype,"viewpoint",null);k([h.property({type:Number,dependsOn:["scale"]})],c.prototype,"zoom",null);return c=k([h.subclass("esri.views.3d.state.ViewStateManager")],c)}(h.declared(H));u.ViewStateManager=l;var T="camera viewpoint extent scale center zoom".split(" "),S=[{propertyName:"camera",overrides:["viewpoint"]},
{propertyName:"viewpoint",overrides:["extent"]},{propertyName:"extent",overrides:["center","scale"]},{propertyName:"scale",overrides:["zoom"]},{propertyName:"center",overrides:[]},{propertyName:"zoom",overrides:[]},{propertyName:"padding",overrides:[]}],U={heading:0,tilt:0},E=new p,q=new Q,z=w.vec4d.create(),t="pending-initial-view";u.default=l});