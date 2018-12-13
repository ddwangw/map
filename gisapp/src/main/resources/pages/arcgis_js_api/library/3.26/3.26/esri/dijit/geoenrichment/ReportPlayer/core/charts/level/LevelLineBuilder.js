// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/level/LevelLineBuilder","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-style ../utils/ChartTypes esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(n,p,g,q,c,d,f){return n(null,{lineContainerNode:null,_levelLineDiv:null,constructor:function(a){p.mixin(this,a)},supportsLevelLine:function(a){return a===d.COLUMN||a===d.BAR||d.isLineLike(a)},showLevelLine:function(a,b,r,h,g){a=a.calculateGeometry();b=f.position(b);
var k=f.position(a.node),l=c.get(a.node,"width"),m=c.get(a.node,"height"),e=f.position(this.lineContainerNode);this._updateLine(h);h?c.set(this._levelLineDiv,{left:k.x-e.x+a.offsets.l+"px",width:l-a.offsets.l-a.offsets.r+"px"}):c.set(this._levelLineDiv,{top:k.y-e.y+a.offsets.t+"px",height:m-a.offsets.t-a.offsets.b+"px"});switch(r){case d.COLUMN:c.set(this._levelLineDiv,{top:(g?b.y+b.h-e.y:b.y-e.y-1)+"px"});break;case d.BAR:c.set(this._levelLineDiv,{left:(g?b.x-e.x:b.x+b.w-e.x)+"px"});break;case d.LINE:h?
c.set(this._levelLineDiv,{top:b.y+b.h/2-e.y-1+"px"}):c.set(this._levelLineDiv,{left:b.x+.5*b.w-e.x+"px"});break;case d.VERTICAL_LINE:c.set(this._levelLineDiv,{left:b.x+.5*b.w-e.x+"px"})}this._checkLineOutOfSight(h,l,m)},hideLevelLine:function(){f.hide(this._levelLineDiv)},_updateLine:function(a,b){this._levelLineDiv||(this._levelLineDiv=q.create("div",null,this.lineContainerNode));g.remove(this._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH esriGEReportPlayer_chartContainerLevelLineV");
a?g.add(this._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH"):g.add(this._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineV");f.show(this._levelLineDiv);c.set(this._levelLineDiv,{left:"",top:"",width:"",height:""})},_checkLineOutOfSight:function(a,b,d){a?(b=c.get(this._levelLineDiv,"top"),f[0>b||b>d?"hide":"show"](this._levelLineDiv)):(d=c.get(this._levelLineDiv,"left"),f[0>d||d>b?"hide":"show"](this._levelLineDiv))}})});