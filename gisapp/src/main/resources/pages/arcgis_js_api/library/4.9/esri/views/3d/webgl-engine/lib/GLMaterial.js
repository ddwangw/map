// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(){function a(a,b){this.material=a;this.programRep=b}a.prototype.dispose=function(){};Object.defineProperty(a.prototype,"materialId",{get:function(){return this.material.id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"renderOccluded",{get:function(){return this.material.renderOccluded},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"renderPriority",{get:function(){return this.material.renderPriority},
enumerable:!0,configurable:!0});a.prototype.isVisible=function(){return this.material.isVisible()};a.prototype.getPrograms=function(){return[this.getProgram()]};return a}()});