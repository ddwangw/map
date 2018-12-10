// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../layers/support/ExportWMSImageParameters ./DynamicLayerView3D".split(" "),function(n,p,g,h,f,k,l,m){return function(e){function b(){return null!==e&&e.apply(this,arguments)||this}g(b,e);b.prototype.initialize=function(){var a=this;this._exportWMSImageParameters=new l({layer:this.layer});this._handles.add(this._exportWMSImageParameters.watch("version",
function(c){a._imageVersion!==c&&(a._imageVersion=c,a.refetch())}))};b.prototype.destroy=function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null)};b.prototype.beforeFetch=function(){this._imageVersion=this._exportWMSImageParameters.version};b.prototype.getPopupData=function(a){a=a.center;var c=this.findExtentInfoAt(a);if(c){var d=c.extent,d=new k(d[0],d[1],d[2],d[3],c.spatialReference),c=c.imageSize,
b=c.width,e=d.width/b;if(a=this.layer.fetchFeatureInfo(d,b,c.height,Math.round((a.x-d.xmin)/e),Math.round((d.ymax-a.y)/e)))return a.then(function(a){return[a]})}return null};return b=h([f.subclass("esri.views.3d.layers.WMSLayerView3D")],b)}(f.declared(m))});