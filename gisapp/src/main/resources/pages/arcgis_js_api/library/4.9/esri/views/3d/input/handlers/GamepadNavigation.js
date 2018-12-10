// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/Handles ../../../../core/watchUtils ../../state/controllers/GamepadController ../../../input/InputHandler".split(" "),function(e,f,h,k,l,g,m){Object.defineProperty(f,"__esModule",{value:!0});e=function(d){function c(b){var a=d.call(this,!0)||this;a.view=b;a.watchHandles=new k;a.handle=a.registerIncoming("gamepad",function(b){return a.handleEvent(b)});a.handle.pause();return a}h(c,d);c.prototype.onInstall=function(b){var a=
this;d.prototype.onInstall.call(this,b);this.watchHandles.add([l.init(this.view.navigation.gamepad,"enabled",function(b){b?a.handle.resume():(a.handle.pause(),a.cameraController&&(a.cameraController.finishController(),a.cameraController=null))}),this.view.navigation.gamepad.watch("device",function(b){a.cameraController&&b&&a.cameraController.device!==b&&(a.cameraController.finishController(),a.cameraController=null)})])};c.prototype.onUninstall=function(){this.watchHandles.removeAll();d.prototype.onUninstall.call(this)};
c.prototype.handleEvent=function(b){var a=this.view.navigation.gamepad.device;if(!a||b.data.device===a)if((a=this.cameraController&&this.cameraController.active)||g.GamepadController.activatesFor(this.view,b.data))a||(a=new g.GamepadController(this.view,b.data.device),this.view.state.switchCameraController(a)&&(this.cameraController=a)),this.cameraController&&this.cameraController.active&&this.cameraController.device===b.data.device&&this.cameraController.handleEvent(b.data)};return c}(m.InputHandler);
f.GamepadNavigation=e});