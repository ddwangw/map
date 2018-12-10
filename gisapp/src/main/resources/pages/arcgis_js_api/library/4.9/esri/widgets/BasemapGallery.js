// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./BasemapGallery/nls/BasemapGallery ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./BasemapGallery/BasemapGalleryViewModel ./support/widget".split(" "),function(l,t,m,d,h,n,k,e,p,q,c){var r=l.toUrl("../themes/base/images/basemap-toggle-64.svg");return function(g){function b(a){a=g.call(this)||this;a._handles=new n;a.activeBasemap=null;a.iconClass="esri-icon-basemap";
a.label=h.widgetLabel;a.source=null;a.view=null;a.viewModel=new q;return a}m(b,g);b.prototype.postInitialize=function(){var a=this,f=this._handles;this.own([k.on(this,"viewModel.items","change",function(c){var b=c.added;c=c.moved;f.remove("basemap-gallery-item-changes");f.add(b.concat(c).map(function(c){return c.watch("state",function(){return a.scheduleRender()})}),"basemap-gallery-item-changes");a.scheduleRender()}),f,k.whenOnce(this,"source",function(){return a.viewModel.load()})])};b.prototype.render=
function(){var a,f="loading"===this.get("source.state"),b="disabled"===this.get("viewModel.state"),d=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),b=(a={},a["esri-basemap-gallery--source-loading"]=f,a["esri-disabled"]=b,a);a=f?c.tsx("div",{class:"esri-basemap-gallery__loader",key:"esri-basemap-gallery__loader"}):null;f=f?null:0<d.length?c.tsx("ul",{class:"esri-basemap-gallery__item-container",key:"esri-basemap-gallery__item-container",role:"menu"},d):c.tsx("div",{class:"esri-widget__content--empty",
key:"esri-basemap-gallery__empty-message"},c.tsx("h2",{class:"esri-widget__heading"},h.noBasemaps));return c.tsx("div",{class:this.classes("esri-basemap-gallery esri-widget esri-widget--panel-height-only",b)},a,f)};b.prototype._handleClick=function(a){a=a.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)};b.prototype._renderBasemapGalleryItem=function(a){var b,d=a.get("basemap.thumbnailUrl")||r,e=a.get("basemap.title"),h=a.get("error.message")||e,k="ready"===a.state?0:-1,
g=this.viewModel.basemapEquals(a.basemap,this.activeBasemap),l=(b={},b["esri-basemap-gallery__item--selected"]=g,b["esri-basemap-gallery__item--loading"]="loading"===a.state,b["esri-basemap-gallery__item--error"]="error"===a.state,b);b="loading"===a.state?c.tsx("div",{class:"esri-basemap-gallery__loader",key:"esri-basemap-gallery__loader"}):null;return c.tsx("li",{"aria-selected":g,bind:this,class:this.classes("esri-basemap-gallery__item",l),"data-item":a,onkeydown:this._handleClick,onclick:this._handleClick,
role:"menuitem",tabIndex:k,title:h},b,c.tsx("img",{alt:"",class:"esri-basemap-gallery__item-thumbnail",src:d}),c.tsx("div",{class:"esri-basemap-gallery__item-title"},e))};d([e.aliasOf("viewModel.activeBasemap"),c.renderable()],b.prototype,"activeBasemap",void 0);d([e.property()],b.prototype,"iconClass",void 0);d([e.property()],b.prototype,"label",void 0);d([e.aliasOf("viewModel.source"),c.renderable("source.state")],b.prototype,"source",void 0);d([e.aliasOf("viewModel.view"),c.renderable()],b.prototype,
"view",void 0);d([e.property(),c.renderable(["viewModel.state"])],b.prototype,"viewModel",void 0);d([c.accessibleHandler()],b.prototype,"_handleClick",null);return b=d([e.subclass("esri.widgets.BasemapGallery")],b)}(e.declared(p))});