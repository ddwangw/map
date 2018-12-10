// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/gl-matrix"],function(f,g,b){return function(){function c(a,c,d,e){this.ambient=b.vec4d.create(a);this.diffuse=b.vec4d.create(c);this.specular=b.vec4d.create(d);this.direction=b.vec3d.create(e)}c.prototype.setUniforms=function(a){a.setUniform4fv("lightAmbient",this.ambient);a.setUniform4fv("lightDiffuse",this.diffuse);a.setUniform4fv("lightSpecular",this.specular);a.setUniform3fv("lightDirection",this.direction)};c.prototype.set=function(a){a.ambient&&b.vec4d.set(a.ambient,
this.ambient);a.diffuse&&b.vec4d.set(a.diffuse,this.diffuse);a.specular&&b.vec4d.set(a.specular,this.specular);a.direction&&b.vec3d.set(a.direction,this.direction)};c.prototype.get=function(){return{ambient:this.ambient,diffuse:this.diffuse,specular:this.specular,direction:this.direction}};return c}()});