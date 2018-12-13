// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_ZoomSupport",["dojo/_base/declare","dojo/aspect","../PlayerResizeModes","../PlayerViewModes","../PlayerZoomBehaviors"],function(e,f,g,c,d){return e(null,{_initZoomControls:function(){var a=this;this.playerToolbar.onZoomToFitPage=function(){a.getCurrentReportContainer().zoomToFitPage({showAnimation:!0})};this.playerToolbar.onZoomToFitPageWidth=function(){a.getCurrentReportContainer().zoomToFitPageWidth({showAnimation:!0})};this.playerToolbar.onSetZoomPercent=
function(b){a.getCurrentReportContainer().setZoomPercent(b,{showAnimation:!0})};this.playerToolbar.setZoomSupportsInfo(this._getZoomSupportsInfo())},setBestZoom:function(){this._callZoomMethod("setBestZoom")},zoomToFitPage:function(){this._callZoomMethod("zoomToFitPage")},zoomToFitPageWidth:function(){this._callZoomMethod("zoomToFitPageWidth")},resetZoom:function(){this._callZoomMethod("resetZoom")},_callZoomMethod:function(a){if(this._getZoomSupportsInfo().supported){var b=this.getCurrentReportContainer();
b&&b[a]&&b[a]()}},_getZoomSupportsInfo:function(){var a={supported:!1,canFitPage:!1,canFitPageWidth:!1};this.viewMode!==c.PANELS_IN_SLIDES&&(a.supported=!0,this.resizeMode!==g.AUTO&&(a.canFitPage=this.viewMode!==c.PANELS_IN_STACK,a.canFitPageWidth=!0));return a},_updateZoomControls:function(){this._connectZoomToCurrentContainer();this._applyDefaultZoomBehavior()},_reportContainerZoomChangedHandle:null,_connectZoomToCurrentContainer:function(){var a=this.getCurrentReportContainer();this._reportContainerZoomChangedHandle&&
this._reportContainerZoomChangedHandle.remove();this._reportContainerZoomChangedHandle=a&&f.after(a,"onZoomChanged",function(){var a=this.getCurrentReportContainer();a&&a.getZoomInfo&&this.playerToolbar.setZoomInfo(this.getCurrentReportContainer().getZoomInfo());this._updatePageNavigator();this.playerToolbar.update()}.bind(this));a&&a.own(this._reportContainerZoomChangedHandle)},_applyDefaultZoomBehavior:function(){var a=this._getZoomSupportsInfo();a.supported&&a.canFitPage&&this.defaultZoomBehavior===
d.FIT_PAGE?this.zoomToFitPage():a.supported&&a.canFitPageWidth&&this.defaultZoomBehavior===d.FIT_PAGE_WIDTH?this.zoomToFitPageWidth():this.resetZoom()}})});