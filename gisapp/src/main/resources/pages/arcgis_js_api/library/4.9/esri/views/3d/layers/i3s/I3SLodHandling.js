// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/PooledArray"],function(g,n,m){g=function(){function d(a,b){this.layerView=a;this.lodGlobalDirtyChanged=b}d.prototype.startNodeLoading=function(a,b,c,d,f,e){this._lodGlobalDirty=!1;this._maxLodLevel=e.maxLodLevel;this._nodeIndex=d;this._rootId=f;this._nodeTraversalState=c;this._isNodeVisible=a;this._isGeometryVisible=b;this.lodGlobalDirtyChanged(this._lodGlobalDirty)};d.prototype.shouldLoadNode=function(a){var b=this._nodeTraversalState(a);return b.isChosen?
b.lodLevel===this._maxLodLevel?!0:this.childrenEmpty(a):!1};d.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0;this.lodGlobalDirtyChanged(this._lodGlobalDirty)};d.prototype.lodSwapBundleLoaded=function(a){this.setLodGlobalDirty()};Object.defineProperty(d.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||1.1<this.layerView.view.resourceController.usedMemory)},enumerable:!0,configurable:!0});d.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var a=
this._rootId,b=Math.max(0,Math.floor(10*(this.layerView.view.resourceController.usedMemory-1)));e.clear();this._lodGlobalHandlingRecursion(a,b);this.layerView.removeNodeData(e);e.clear();this._lodGlobalDirty=!1;this.lodGlobalDirtyChanged(this._lodGlobalDirty)}};d.prototype._lodGlobalHandlingRecursion=function(a,b){a=this._nodeIndex[a];if(null==a)return!1;var c=this._nodeTraversalState(a),d=c.isChosen&&(!c.nodeHasLOD||c.lodLevel===this._maxLodLevel);(c=this.layerView.isNodeLoaded(a))&&null!=this.layerView.setPolygonOffset&&
this.layerView.setPolygonOffset(a,!d);if(d&&c)return this._removeChildrenRecursive(a),!0;var f=!1;if(null!=a.children&&0!==a.children.length)for(var f=!0,k=0,g=a.children;k<g.length;k++){var h=g[k],l=this._nodeIndex[h.id];if(l?this._isGeometryVisible(l):this._isNodeVisible(h))h=this._lodGlobalHandlingRecursion(h.id,b),f=f&&h}c&&!d&&(f||e.length<b)&&(e.push(a),c=!1);b=!a.featureData||0===a.featureData.length;return f||c||b};d.prototype._removeChildrenRecursive=function(a){if(null!=a.children){var b=
0;for(a=a.children;b<a.length;b++){var c=this._nodeIndex[a[b].id];null!=c&&(this._removeChildrenRecursive(c),e.push(c))}}};d.prototype._subtreeEmpty=function(a){return this.layerView.isNodeLoaded(a)?!1:this.childrenEmpty(a)};d.prototype.childrenEmpty=function(a){if(null==a.children)return!0;var b=0;for(a=a.children;b<a.length;b++){var c=a[b];if(this._isNodeVisible(c)&&(c=this._nodeIndex[c.id],null!=c&&!this._subtreeEmpty(c)))return!1}return!0};return d}();var e=new m;return g});