// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../viewpointUtils ../../libs/gl-matrix/vec2".split(" "),function(l,m,h,d,k,c,f,e){return function(g){function b(a){a=g.call(this)||this;a.animationTime=0;a.viewpoint=f.create();return a}h(b,g);b.prototype.begin=function(a,b){this.navigation.begin();this.previousCenter=b.center};b.prototype.update=function(a,b){var c=
e.create();e.set(c,b.center.x+a.padding.left-a.padding.right,a.height-b.center.y+a.padding.top-a.padding.bottom);var d=e.create();e.set(d,this.previousCenter.x+a.padding.left-a.padding.right,a.height-this.previousCenter.y+a.padding.top-a.padding.bottom);c=f.angleBetween([a.state.paddedScreenCenter[0]+a.padding.left-a.padding.right,a.state.paddedScreenCenter[1]],c,d);a.viewpoint=f.rotateBy(this.viewpoint,a.content.viewpoint,c);this.previousCenter=b.center};b.prototype.end=function(a,b){this.navigation.end()};
d([c.property()],b.prototype,"viewpoint",void 0);d([c.property()],b.prototype,"navigation",void 0);return b=d([c.subclass("esri.views.2d.actions.Rotate")],b)}(c.declared(k))});