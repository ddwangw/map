// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tableViewRendering/TableViewRenderer","dojo/_base/declare dojo/_base/lang dijit/Destroyable esri/dijit/geoenrichment/ReportPlayer/config ../../supportClasses/tableJson/TableJsonUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes ../../sections/sectionUtils/SectionJsonUtil ../utils/builder/utils/ChartDataUtil ../utils/ChartTypes ../../grid/coreUtils/GridDataUtil dojo/i18n!esri/nls/jsapi".split(" "),function(u,m,v,w,x,y,
z,A,B,n,g){g=g.geoenrichment.dijit.ReportPlayer.ChartContainer;var C=/_P$/i,G={buildSectionJsonFromSeriesItems:function(a,p,c,e,D,E,F){function k(b,f,q,d){b=c[b-1].data[f-1];f=b.point.fieldInfo&&C.test(b.point.fieldInfo.name);if(b.isUnavailableData)return q?w.tables.showUnavailableData?g.unavailableDataShort:"":0;d=void 0===d?b[b.valueProp]:d;return q?A.formatNumber(d,e,f,a):d}c=c.map(function(b){b=m.mixin({},b);b.data=b.data.slice();b.data.sort(function(b,a){return b.unsortedIndex-a.unsortedIndex});
return b});if(p&&B.isColumnBarLike(a)){var r=[];c[0].data.forEach(function(b,a){r.push({name:b.name,data:c.map(function(b){return m.mixin({},b.data[a],{name:b.name})})})});c=r}var t=c[0].data.length+1,l=x.createTable({numColumns:c.length+1,numRows:t,width:E,height:F,processTableCell:function(b,a,c,d,e){b.style.fields[a].verticalAlign="middle";b.style.fields[a].horizontalPadding=5;b.style.fields[a].fontSize=Math.round(15-4*t/50)}});l.data.data.forEach(function(a,f){l.data.columns.forEach(function(b,
d){if(0===f)a[b.field]=0===d?e.xAxis.title||"":1===d?D&&!p?g.thisArea:1<c.length?c[d-1].name||"":e.yAxis.title||"":c[d-1].name||"";else if(0===d){b=b.field;var h;h=0===f?void 0:c[0].data[f-1].name||"";a[b]=h}else h=k(d,f,!1),d=k(d,f,!0),n.setNumericDataValue(h,a,b.field),a[b.field]=d})});return{sectionJson:z.wrapInDetailsSectionJson(l),numberFormatFunction:function(a,c){return k(c.column.index,c.gridData.index,!0,a)}}}};return u(v,{_tableSection:null,_sorting:null,renderTableForChart:function(a){var g=
this;this._destroyTable();if(a.chartSeries&&a.chartSeries.length){var c={"class":"chartContainer_tableSection"};c.initialWidth=a.width;var e=G.buildSectionJsonFromSeriesItems(a.chartType,a.isMultiFeatureChart,a.chartSeries,a.visualProperties,a.hasComparison,a.width,a.height);c.json=e.sectionJson;a.showAnimation||(e.numberFormatFunction=null);c.viewModel=a.viewModel;c.theme=a.theme;c.tableClass="chartContainerChartTable";c.hasFixedLayout=!1;c.parentWidget=a.parentWidget;c.initialViewMode=this._viewMode||
y.PREVIEW_VALUES;c.tableParams={enableNumberAnimation:a.showAnimation,_postCreateFieldCell:function(a){if(e.numberFormatFunction){var c=e.numberFormatFunction;a.setNumberValue(n.getNumericCellValue(a),function(e){return c(e,a)});setTimeout(function(){e.numberFormatFunction=null})}},onSortingChanged:function(a){g._sorting=a}};this._tableSection=a.viewModel.layoutBuilder.createElement("section",c,a.tableNode);this._tableSection.setResizedHeight(a.height);this._tableSection.getTables()[0].setSorting(this._sorting)}},
_viewMode:null,setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._tableSection&&this._tableSection.setViewMode(a))},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy();this._tableSection=null},destroy:function(){this._destroyTable();this.inherited(arguments)}})});