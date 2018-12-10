// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/watchUtils ./atmosphereUtils ./resources/SimpleAtmosphereTexture ../lib/gl-matrix ../support/earthUtils ../support/imageUtils ../support/mathUtils ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/RenderPass ../webgl-engine/lib/RenderSlot ../webgl-engine/lib/Util ../webgl-engine/shaders/SimpleAtmospherePrograms ../../webgl/BufferObject ../../webgl/programUtils ../../webgl/Texture ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(t,R,D,u,E,d,l,F,n,G,H,I,J,K,v,p,L,w,M,x,N){function y(h,c,b,a,g){var f=d.vec3d.length(h),k=a*Math.sqrt(f*f-a*a)/f,e=g.silCircleV1,l=g.silCircleV2;d.vec3d.scale(h,Math.sqrt(a*a-k*k)/f,g.silCircleCenter);d.vec3d.cross(h,c,e);1>d.vec3d.length2(e)&&d.vec3d.cross(h,b,e);d.vec3d.scale(e,k/d.vec3d.length(e));d.vec3d.cross(e,h,l);d.vec3d.scale(l,k/d.vec3d.length(l));return k}function z(h,c,b,a){d.vec3d.add(a.silCircleCenter,a.silCircleV2,m);d.vec3d.scale(m,A,q);d.mat4d.lookAt(c,m,b,r);v.project(m,
r,h.projectionMatrix,h.viewport);v.project(q,r,h.projectionMatrix,h.viewport);return d.vec3d.dist(m,q)/h.height}var B=-u.INNER_ATMOSPHERE_DEPTH,O=(l.earthRadius+B)/l.earthRadius,P=(l.earthRadius+0)/l.earthRadius,A=(l.earthRadius+3E5)/l.earthRadius,Q=n.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5E3,.51171875],[5E4,.4140625]]);t=function(){function h(c){this.needsRender=!1;this.didRender=!0;this.slot=K.POSTPROCESSING_ATMOSPHERE_OPAQUE;this._renderData={texV:d.vec2d.create(),silCircleCenter:d.vec3d.create(),
silCircleV1:d.vec3d.create(),silCircleV2:d.vec3d.create(),altitudeFade:0,innerScale:0,undergroundFadeAlpha:0};this._fadeVaoCount=0;this.view=c}h.prototype.when=function(c){return this._readyPromise.then(c)};h.prototype.initializeRenderContext=function(c){var b=this,a=c.rctx;this._cameraChangeHandle=D.init(this.view,"state.camera",function(){return b.needsRender=!0},!0);this._program=w.createProgram(a,p.colorPass);this._fadeProgram=w.createProgram(a,p.fadePass);this._vao=this._createRibbon(a);this._vaoCount=
x.vertexCount(this._vao,"geometry");this._fadeVao=I.createQuadVAO(a);this._fadeVaoCount=x.vertexCount(this._fadeVao,"geometry");this._readyPromise=F.requestImage(E).then(function(c){b._texture=new M(a,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},c);b.needsRender=!0})};h.prototype.uninitializeRenderContext=function(c){this.destroy()};h.prototype.destroy=function(){this._cameraChangeHandle&&(this._cameraChangeHandle.remove(),this._cameraChangeHandle=null);this._texture&&
(this._texture.dispose(),this._texture=null);this._program&&(this._program.dispose(),this._program=null);this._fadeProgram&&(this._fadeProgram.dispose(),this._fadeProgram=null);this._fadeVao&&(this._fadeVao.dispose(),this._fadeVao=null)};h.prototype.render=function(c){if(c.slot!==this.slot||c.pass!==J.MATERIAL||null==this._texture)return!1;this._update(c.camera);var b=c.rctx,a=this._program;b.setDepthTestEnabled(!0);b.setDepthFunction(515);b.setBlendingEnabled(!0);b.setDepthWriteEnabled(!1);b.setBlendFunctionSeparate(770,
771,1,771);1>this._renderData.undergroundFadeAlpha&&(b.bindProgram(a),a.setUniformMatrix4fv("proj",c.camera.projectionMatrix),a.setUniformMatrix4fv("view",c.camera.viewMatrix),a.setUniform3fv("silCircleCenter",this._renderData.silCircleCenter),a.setUniform3fv("silCircleV1",this._renderData.silCircleV1),a.setUniform3fv("silCircleV2",this._renderData.silCircleV2),a.setUniform2fv("texV",this._renderData.texV),b.bindTexture(this._texture,0),a.setUniform1i("tex",0),a.setUniform3fv("lightDirection",c.lightingData.direction),
a.setUniform1f("altitudeFade",this._renderData.altitudeFade),a.setUniform1f("innerScale",this._renderData.innerScale),b.bindVAO(this._vao),b.drawArrays(4,0,this._vaoCount));0<this._renderData.undergroundFadeAlpha&&(b.bindProgram(this._fadeProgram),this._fadeProgram.setUniform1f("undergroundFadeAlpha",this._renderData.undergroundFadeAlpha),this._fadeProgram.setUniform3fv("lightDirection",c.lightingData.direction),this._fadeProgram.setUniform3fv("cameraPosition",c.camera.eye),b.bindVAO(this._fadeVao),
b.drawArrays(5,0,this._fadeVaoCount));b.setBlendingEnabled(!1);b.setDepthWriteEnabled(!0);b.setDepthFunction(513);this.needsRender=!1;return!0};h.prototype._update=function(c){var b=d.vec3d.create(),a=l.earthRadius,g=d.vec3d.length(c.eye),f=g-a;this._renderData.undergroundFadeAlpha=0>f?Math.min(-f/5E3,1):0;var k=a+B,e=a+Math.max(50,f);this._renderData.innerScale=e*e/(Math.sqrt(e*e-a*a)*Math.sqrt(e*e-k*k)+a*k)-1;this._renderData.altitudeFade=u.computeInnerAltitudeFade(f);d.vec3d.scale(c.eye,(a+50)/
g,b);y(b,c.center,c.up,a,this._renderData);b=z(c,b,c.up,this._renderData);g=Q(f);k=.001953125;e=0+b*g*1;50<f&&(y(c.eye,c.center,c.up,a,this._renderData),c=z(c,c.eye,c.up,this._renderData),c=n.clamp((c-1.5)/(b-1.5),0,1),k=0+.001953125*c,e=0+1*n.lerp(1,b*g,c));d.vec2d.set2(k,e,this._renderData.texV)};h.prototype._createRibbon=function(c){var b=new Float32Array(1155),a=new Uint32Array(1920);b[0]=0;b[1]=0;b[2]=-1;for(var g=0;128>g;g++){var f=9*g+3;b[f+0]=g;b[f+1]=O;b[f+2]=-1;b[f+3]=g;b[f+4]=P;b[f+5]=
0;b[f+6]=g;b[f+7]=A;b[f+8]=1;var f=3*g+1,d=127===g?1:f+3,e=15*g;a[e+0]=f;a[e+1]=f+1;a[e+2]=d+1;a[e+3]=d+1;a[e+4]=d;a[e+5]=f;a[e+6]=f+1;a[e+7]=f+2;a[e+8]=d+2;a[e+9]=d+2;a[e+10]=d+1;a[e+11]=f+1;a[e+12]=f;a[e+13]=d;a[e+14]=0}f=C.createBuffer(a.length);d=f.position;for(g=0;g<a.length;++g)e=3*a[g],d.set(g,0,b[e]),d.set(g,1,b[e+1]),d.set(g,2,b[e+2]);return new N(c,p.colorPass.attributes,{geometry:G.glLayout(C)},{geometry:L.createVertex(c,35044,f.buffer)})};return h}();var r=d.mat4d.create(),m=d.vec3d.create(),
q=d.vec3d.create(),C=H.newLayout().vec3f("position");return t});