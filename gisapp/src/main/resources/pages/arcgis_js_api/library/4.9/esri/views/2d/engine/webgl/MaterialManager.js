// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./enums ./MaterialInfoUtils ./shaders/MaterialPrograms ../../../webgl/programUtils".split(" "),function(k,l,d,g,e,h){return function(){function f(){this._programByKey=new Map;this.isInitialize=!1}f.prototype.dispose=function(){this._programCache&&this._programCache.dispose()};f.prototype.initialize=function(b){this.isInitialize||(this._programCache=new h.ProgramCache(b),this.isInitialize=!0)};f.prototype.getProgram=function(b,a){b|=a===d.WGLDrawPhase.HITTEST?8:0;b|=a===d.WGLDrawPhase.HIGHLIGHT?
16:0;if(this._programByKey[b])return this._programByKey[b];a=g.getMaterialVariations(b);var c=null;switch(a.geometryType){case d.WGLGeometryType.MARKER:c=this._programCache.getProgram(e.icon,a.programOptions);break;case d.WGLGeometryType.TEXT:c=this._programCache.getProgram(e.text,a.programOptions);break;case d.WGLGeometryType.LABEL:c=this._programCache.getProgram(e.label,a.programOptions);break;case d.WGLGeometryType.FILL:c=this._programCache.getProgram(e.fill,a.programOptions);break;case d.WGLGeometryType.LINE:c=
this._programCache.getProgram(e.line,a.programOptions)}c&&(this._programByKey[b]=c);return c};return f}()});