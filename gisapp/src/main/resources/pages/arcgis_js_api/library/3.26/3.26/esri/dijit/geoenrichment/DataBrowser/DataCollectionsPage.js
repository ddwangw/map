// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/DataBrowser/templates/DataCollectionsPage.html":'\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 0"\x3e\r\n    \x3cdiv class\x3d"BreadcrumbHeight"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"DataCollectionsPage_Panel DataCollectionsPage_PanelTop"\x3e\r\n        \x3cdiv class\x3d"DataBrowserVarHeader DataCollectionsPage_Header" data-dojo-attach-point\x3d"categoryName"\x3e\x3c/div\x3e\r\n        \x3cinput type\x3d"text"\r\n               data-dojo-type\x3d"esri/dijit/geoenrichment/DataBrowser/SearchTextBox"\r\n               data-dojo-attach-point\x3d"txbSearch"\r\n               data-dojo-props\x3d"prompt:\'${nls.search}\'"\r\n               data-dojo-attach-event\x3d"onSearch: _search"\r\n               class\x3d"DataCollectionsPage_Search" /\x3e\r\n        \x3cdiv class\x3d"DataBrowserVarHeader DataCollectionsPage_Header"\x3e\r\n            ${nls.mapPopVar}\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"divVariables" class\x3d"DataCollectionsPage_PopularVariables"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"DataBrowserVarHeader DataCollectionsPage_Header"\x3e\r\n            ${nls.keepBrowse}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 1" class\x3d"DataCollectionsPage_ContentPane_DataCollectionContainer"\x3e\r\n    \x3cdiv class\x3d"DataCollectionsPage_DataCollectionContainer"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/geoenrichment/Pagination" data-dojo-attach-point\x3d"pagination" data-dojo-attach-event\x3d"onSelect: _onSelectCollection"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"progressDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"row: 2"\x3e\r\n    \x3cdiv class\x3d"DataCollectionsPage_Panel DataCollectionsPage_PanelBottom"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"spnShowAll" class\x3d"Wizard_Link DataCollectionsPage_ShowAll" data-dojo-attach-event\x3d"onClick: _showAll"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/DataBrowser/DataCollectionsPage","dojo/_base/declare dojo/_base/lang dojo/string dojo/dom-construct dojo/dom-geometry dojo/when dojo/i18n!../../../nls/jsapi dojo/text!./templates/DataCollectionsPage.html dijit/layout/ContentPane ../Pagination ./SearchTextBox".split(" "),function(k,f,d,g,l,h,e,m){e=e.geoenrichment.dijit.DataCollectionsPage;return k(null,{templateString:m,nls:e,baseClass:"DataCollectionsPage",lastDataCollectionID:null,manager:null,_grid:null,postCreate:function(){this.inherited(arguments);
this._grid=this.manager.createVariableGrid({groupCategories:!1},this.divVariables);this.own(this._grid);this.manager.allowShoppingCart&&(this._grid.animateSelection=f.hitch(this.manager,this.manager.animateSelection));this.pagination.autoCenter=!0;this.pagination.scrollAnimation="slide";this.pagination.createItemContainer=function(){var a=g.create("div",{"class":"DataCollectionButtonContainer"});g.create("div",{"class":"DataCollectionButton DataBrowser_Clickable TrimWithEllipses"},a);return a};this.pagination.updateItemContainer=
function(a,b){a.children[0].innerHTML=b.title;a.data=b}},_setPageIsActiveAttr:function(a){this._started&&(this._grid.setVariables([]),this.pagination.set("items",[]),this.txbSearch.set("value",""),a&&this._querySelectedCategory())},startup:function(){this._started||(this.inherited(arguments),this._grid.startup(),this._querySelectedCategory())},resize:function(){this.inherited(arguments);this.pagination.resize()},_querySelectedCategory:function(){var a=this;h(this.showProgress(this.manager.getCategory()),
function(b){b&&a._showCategory(b)})},_showCategory:function(a){this._prepareCategoryTitle(a);this.spnShowAll.innerHTML=d.substitute(this.nls.showAll,{categoryName:a.name});a=this.manager.variables.getPopularVariables(a,{sort:[{attribute:"popularity",descending:!0}],start:0,count:3});this._grid.setVariables(a);a=this.manager.composeQuery("categoryID");this.set("items",this._getDataCollections(a,{sort:[{attribute:"title"}]}))},_getDataCollections:function(a,b){return this.manager.variables.dataCollections.query(a,
b)},_prepareCategoryTitle:function(a){this.categoryName.innerHTML=d.substitute(this.nls.categoryName,{categoryName:a.name})},_setItemsAttr:function(a){this.pagination.set("items",a);if(this._started&&(this.resize(),this.lastDataCollectionID)){a=this.pagination.items;for(var b=0;b<a.length;b++)if(a[b].id==this.lastDataCollectionID){this.pagination.selectPageByItemIndex(b,!0);break}this.lastDataCollectionID=null}},_onSelectCollection:function(a){var b=a.data;if(!this.isLeftToRight()){var c=l.position(a);
a.style.right=""+(window.innerWidth-c.x-c.w)+"px"}this._animateButtonClick(a);this.isLeftToRight()||(a.style.right="auto");this.manager.variableQuery.dataCollectionID=b.id;this.onSelect()},_animateButtonClick:function(a){return this.manager.flyAnim.fly(a.children[0],"Breadcrumb_SelectDC")},_showAll:function(){this.manager.variableQuery.searchString="*";this.onSelect()},_search:function(){var a=f.trim(this.txbSearch.get("value"));if(a){this.manager.variableQuery.searchString=a;var b=this;h(this.showProgress(this.manager.queryVariables()),
function(c){c.length?b._onSearch(c):(delete b.manager.variableQuery.searchString,b.txbSearch.showTooltip(d.substitute(b.nls.noResults,{seachKey:a})))})}else this.txbSearch.set("value","")},_onSearch:function(a){this.onSelect(a)},onSelect:function(){}})});