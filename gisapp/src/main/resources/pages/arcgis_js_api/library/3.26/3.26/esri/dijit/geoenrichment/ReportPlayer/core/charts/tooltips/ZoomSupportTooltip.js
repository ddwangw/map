// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tooltips/ZoomSupportTooltip","dojo/_base/declare dojo/_base/lang dojo/sniff dojo/dom-class dojo/dom-geometry dijit/Tooltip dojox/charting/action2d/Tooltip dojox/lang/functional dojox/gfx/matrix esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(m,p,q,g,r,a,t,k,u,v,w){var l=Math.PI/4,x=Math.PI/2,n={_nodeInLayoutCheckHandle:null,_tooltipClass:null,_tooltipContainerClass:null,show:function(b,
d,k,l,c,f){g.remove(a._masterTT.domNode,a._masterTT.domNode.className);g.add(a._masterTT.domNode,"dijitTooltip");this._setClasses();d&&(this.hide(d),a.show(b,d,k),this._setClasses(c,f),this._setListeners(d,l))},hide:function(b){a.hide(b);this._setClasses();this._setListeners(null,null)},_setClasses:function(b,d){a._masterTT&&a._masterTT.domNode&&(delete a._masterTT._customClasses,this._tooltipClass&&g.remove(a._masterTT.domNode,this._tooltipClass),this._tooltipClass=null,this._tooltipContainerClass&&
g.remove(a._masterTT.containerNode,this._tooltipContainerClass),this._tooltipContainerClass=null,b&&(this._tooltipClass=b,g.add(a._masterTT.domNode,this._tooltipClass),a._masterTT._customClasses=this._tooltipClass),d&&(this._tooltipContainerClass=d,g.add(a._masterTT.containerNode,this._tooltipContainerClass)))},_setListeners:function(b,d){var a=this;clearInterval(this._nodeInLayoutCheckHandle);this._nodeInLayoutCheckHandle=null;d&&(this._nodeInLayoutCheckHandle=setInterval(function(){w.isNodeInLayout(d)||
a.hide(b)},500))}};return m(t,{tooltipClass:null,tooltipContainerClass:null,process:function(b){function a(){p.mixin(c,g())}function g(){var a=b.shape.rawNode.getBoundingClientRect(),c=r.position(m.chart.node,!0);return{x:a.left-c.x,y:a.top-c.y,w:a.width,h:a.height}}var m=this;if("onplotreset"===b.type||"onmouseout"===b.type)n.hide(this.aroundRect),this.aroundRect=null,"onplotreset"===b.type&&delete this.angles;else if(b.shape&&"onmouseover"===b.type){var c={type:"rect"},f=["after-centered","before-centered"];
if(this._needSetRectFromShape())a();else{switch(b.element){case "marker":case "circle":case "spider_circle":case "spider_plot":case "candlestick":a();break;case "column":f=["above-centered","below-centered"];case "bar":a();break;default:if(!this.angles){var e="number"===typeof b.run.data[0]?k.map(b.run.data,"x ? Math.max(x, 0) : 0"):k.map(b.run.data,"x ? Math.max(x.y, 0) : 0");this.angles=k.map(k.scanl(e,"+",0),"* 2 * Math.PI / this",k.foldl(e,"+",0))}var e=u._degToRad(b.plot.opt.startAngle),h=(this.angles[b.index]+
this.angles[b.index+1])/2+e;a();e&&(0>h||h>2*Math.PI)&&(h=Math.abs(2*Math.PI-Math.abs(h)));h<l||(h<x+l?f=["below-centered","above-centered"]:h<Math.PI+l?f=["before-centered","after-centered"]:h<2*Math.PI-l&&(f=["above-centered","below-centered"]))}q("dojo-bidi")&&this._recheckPosition(b,c,f)}v.isMobileDevice()&&(f=["above-centered","below-centered"]);e=this.chart.getCoords();c.x+=e.x;c.y+=e.y;c.x=Math.round(c.x);c.y=Math.round(c.y);c.w=Math.ceil(c.w);c.h=Math.ceil(c.h);this.aroundRect=c;(e=this.text(b,
this.plot))&&n.show(this._format(e),this.aroundRect,f,b.shape.rawNode,this.tooltipClass,this.tooltipContainerClass)}},_needSetRectFromShape:function(){return!1}})});