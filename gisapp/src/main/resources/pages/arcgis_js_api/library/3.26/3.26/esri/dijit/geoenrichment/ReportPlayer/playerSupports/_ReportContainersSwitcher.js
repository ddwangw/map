// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_ReportContainersSwitcher","dojo/_base/declare dojo/when dojo/dom-attr dojo/dom-class dojo/dom-construct ../PlayerResizeModes ../PlayerViewModes esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(g,m,n,d,p,l,k,q){var r={createContainer:function(a,b){function d(){var c={viewModel:f,parentWidget:b,currentFeatureIndex:a,isSourceContainer:!0,onPendingDataApplied:function(){b._emitResizedEvent()}};c.renderOptions=b.resizeMode!==l.AUTO?
{center:!0,minTop:10}:{center:!0,minTop:10,minRight:10,minBottom:10,minLeft:10};return f.layoutBuilder.createElement("classic"===h?"reportContainer":"reportContainerGrid",c,b.reportContainerDiv)}function e(){return f.layoutBuilder.createElement("reportContainerPagination",{viewModel:f,parentWidget:b,currentFeatureIndex:a,scaleSectionsToFit:b.scaleSlidesToFitWindow,onResized:function(a){b.playerToolbar.update();b._emitResizedEvent(a)},onPendingDataApplied:function(){b._emitResizedEvent()}},b.reportContainerDiv)}
function g(){var c;c=b.resizeMode!==l.AUTO?{center:!0}:{center:!0,minRight:10,minBottom:10,minLeft:10};c.minTop=b.showToolbarInPopup?35:10;return f.layoutBuilder.createElement("reportContainerStack",{viewModel:f,parentWidget:b,currentFeatureIndex:a,renderOptions:c,onPendingDataApplied:function(){b._emitResizedEvent()}},b.reportContainerDiv)}var f=b._viewModel,h;switch(b.viewMode){case k.PANELS_IN_SLIDES:h="pagination";break;case k.PANELS_IN_STACK:h="stack";break;default:h=b._reportData.isClassic?
"classic":"graphic"}var c=b._containerDict.getContainer(a);if(!c){switch(h){case "pagination":c=e();break;case "stack":c=g();break;default:c=d()}c.isCurrentContainer=function(){return b.getCurrentReportContainer()===c};b.own(c)}b._containerDict.setContainer(c,a);return c}},t=g(null,{_containerInfos:null,constructor:function(){this._containerInfos=[]},getContainer:function(a){return this._getInfo(a,"container")},getContainers:function(){return this._containerInfos.map(function(a){return a.container})},
getContainerIndex:function(a){return this.getContainers().indexOf(a)},setContainer:function(a,b){n.set(a.domNode,"area-index",b);this._getInfo(b,null,a)},isLoaded:function(a){return this._getInfo(a,"loaded")},setLoaded:function(a){if(a=this._getInfo(a))a.loaded=!0},resetAllLoaded:function(){this._containerInfos.forEach(function(a){a.loaded=!1})},destroyAllContainers:function(){this._containerInfos.forEach(function(a){a.container.destroy()});this._containerInfos.length=0},_getInfo:function(a,b,d){var e=
this._containerInfos[a];!e&&d&&(e=this._containerInfos[a]={container:d,loaded:!1});return b?e&&e[b]:e}}),u=g(null,{_lastVisuals:null,reset:function(){this._lastVisuals=null},rememberCurrentContainerVisuals:function(a){this._lastVisuals=a?{scrollTop:a.getScrollableContainer&&a.getScrollableContainer().scrollTop||0,pageIndex:a.getCurrentPageIndex&&a.getCurrentPageIndex()||0,slideIndex:a.getCurrentSlideIndex&&a.getCurrentSlideIndex()||0,zoomInfo:a.getZoomInfo&&a.getZoomInfo()}:null},applyCurrentContainerVisuals:function(a){this._lastVisuals&&
(a.getScrollableContainer&&(a.getScrollableContainer().scrollTop=this._lastVisuals.scrollTop||0),a.showSlideAt&&a.showSlideAt(this._lastVisuals.slideIndex||0),a.showPageAt&&a.showPageAt(this._lastVisuals.pageIndex||0),a.setZoomInfo&&a.setZoomInfo(this._lastVisuals.zoomInfo))}});return g(null,{_containerDict:null,_visualsHelper:null,_initContainerSwither:function(){this._containerDict=new t;this._visualsHelper=new u},getCurrentReportContainer:function(){return this._currentReportContainer},getAllReportContainers:function(){return this._containerDict.getContainers()},
_destroyAllContainers:function(){this._containerDict.destroyAllContainers();this._currentReportContainer=null},_setReportContainer:function(a){var b=this;a?this._resetLoadedFlags():this._visualsHelper.rememberCurrentContainerVisuals(this._currentReportContainer);this._switchToCurrentReportContainer();return!a&&this._containerDict.isLoaded(this.getCurrentAnalysisAreaIndex())?m(this._resize({isPaginating:!0}),function(){b._visualsHelper.applyCurrentContainerVisuals(b._currentReportContainer);return!1}):
!0},_switchToCurrentReportContainer:function(){this._currentReportContainer&&this._hideContainer(this._currentReportContainer);this._currentReportContainer=r.createContainer(this.getCurrentAnalysisAreaIndex(),this);d.remove(this.domNode,"esriGEReportPlayerFullView esriGEReportPlayerPaginationView esriGEReportPlayerStackView");switch(this.viewMode){case k.PANELS_IN_SLIDES:d.add(this.domNode,"esriGEReportPlayerPaginationView");break;case k.PANELS_IN_STACK:d.add(this.domNode,"esriGEReportPlayerStackView");
break;default:d.add(this.domNode,"esriGEReportPlayerFullView")}this._showContainer(this._currentReportContainer);this._connectZoomToCurrentContainer();this.notifyShown()},_hideContainer:function(a){a.__undoHideContainerHandle=q.hideNodeInBackground(a.domNode,"reportContainer_"+this._containerDict.getContainerIndex(a));a.own(a.__undoHideContainerHandle)},_showContainer:function(a){a.__undoHideContainerHandle&&(a.__undoHideContainerHandle.undo(),delete a.__undoHideContainerHandle)},_showAllContainers:function(){var a=
this;this.getAllReportContainers().forEach(function(b){a._showContainer(b);a.reportContainerDiv.removeChild(b.domNode);p.place(b.domNode,a.reportContainerDiv)});return{undo:function(){a.getAllReportContainers().forEach(function(b){a._hideContainer(b)});a._switchToCurrentReportContainer()}}},_resetLoadedFlags:function(){this._visualsHelper.reset();this._containerDict.resetAllLoaded()},_setCurrentContainerLoaded:function(){this._visualsHelper.applyCurrentContainerVisuals(this._currentReportContainer);
this._containerDict.setLoaded(this.getCurrentAnalysisAreaIndex())}})});