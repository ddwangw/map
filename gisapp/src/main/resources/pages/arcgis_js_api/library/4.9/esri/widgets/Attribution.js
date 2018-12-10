// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Attribution/nls/Attribution ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Attribution/AttributionViewModel ./support/widget".split(" "),function(n,p,h,c,k,l,d,m,f,e){return function(g){function b(a){a=g.call(this)||this;a._isOpen=!1;a._attributionTextOverflowed=!1;a._prevSourceNodeHeight=0;a.iconClass="esri-icon-description";a.itemDelimiter=" | ";a.label=k.widgetLabel;a.view=
null;a.viewModel=new f;return a}h(b,g);b.prototype.postInitialize=function(){var a=this;this.own(l.on(this,"viewModel.items","change",function(){return a.scheduleRender()}))};Object.defineProperty(b.prototype,"attributionText",{get:function(){return this.viewModel.items.reduce(function(a,b){-1===a.indexOf(b.text)&&a.push(b.text);return a},[]).join(this.itemDelimiter)},enumerable:!0,configurable:!0});b.prototype.render=function(){var a,b=(a={},a["esri-attribution--open"]=this._isOpen,a);return e.tsx("div",
{bind:this,class:this.classes("esri-attribution esri-widget",b),onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),e.tsx("div",{class:"esri-attribution__powered-by"},"Powered by"," ",e.tsx("a",{target:"_blank",href:"http://www.esri.com/",class:this.classes("esri-attribution__link","esri-widget__anchor")},"Esri")))};b.prototype._renderSourcesNode=function(){var a,b=this._isOpen,c=this._isInteractive(),d=c?0:-1,f=this.attributionText,g=c?"button":void 0,b=(a={},a["esri-attribution__sources--open"]=
b,a["esri-interactive"]=c,a);return e.tsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:this.classes("esri-attribution__sources",b),innerHTML:f,role:g,tabIndex:d})};b.prototype._afterSourcesNodeCreate=function(a){this._prevSourceNodeHeight=a.clientWidth};b.prototype._afterSourcesNodeUpdate=function(a){var b=!1,c=a.clientHeight;a=a.scrollWidth>=a.clientWidth;var d=this._attributionTextOverflowed!==a;this._attributionTextOverflowed=a;d&&(b=
!0);this._isOpen&&(a=c<this._prevSourceNodeHeight,this._prevSourceNodeHeight=c,a&&(this._isOpen=!1,b=!0));b&&this.scheduleRender()};b.prototype._toggleState=function(){this._isInteractive()&&(this._isOpen=!this._isOpen)};b.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed};c([d.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0}),e.renderable()],b.prototype,"attributionText",null);c([d.property()],b.prototype,"iconClass",void 0);c([d.property(),
e.renderable()],b.prototype,"itemDelimiter",void 0);c([d.property()],b.prototype,"label",void 0);c([d.aliasOf("viewModel.view")],b.prototype,"view",void 0);c([d.property({type:f}),e.renderable(["state","view.size"])],b.prototype,"viewModel",void 0);c([e.accessibleHandler()],b.prototype,"_toggleState",null);return b=c([d.subclass("esri.widgets.Attribution")],b)}(d.declared(m))});