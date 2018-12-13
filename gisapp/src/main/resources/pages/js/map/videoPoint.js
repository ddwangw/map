//nameList与widthList的数组长度要一致
var nameList = ['设备编码（20位）', '设备名称'] ;//table的列名
var fieldList = ['videoId','videoName'];
var widthList = [50, 150]; //table每列的宽度

function initTableList(onClickRow){
	nicePage.setCfg({
		table: 'table',
		bar: 'pageBar',
		limit: 6,
		color: '#1E9FFF',
		onclick:function(obj){
			onClickRow(obj);
		},
		layout: ['count', 'prev', 'page', 'next', 'skip']
	});
}
/**
 * 初始化设置nicepage组件    v1.0
 *-------------------------------------------------------------
 * 进行数据组装,与layui交互进行元素渲染
 *-------------------------------------------------------------
 * @param    {string}  table     table的div id
 * @param    {string}  bar     底部分页的div id
 * @param    {int}  limit     每页默认行数
 * @param    {string}  color     底部分页的颜色
 * @param    {array}  layout     底部分页的布局,具体可参考layui api
 *
 * @date     2018-10-19
 */
function initPointTableList(showVedioPoint){
	var url = "./video/queryPageWithParams?videoName=";
	$.get(url,function(result){
		initVideoPointResultData(result,showVedioPoint);
	});
	//绑定查询按钮点击事件
	$("#query").click(function(){
		var videoNameStr = encodeURI($("#videoName").val());
		$.get(url+videoNameStr,function(result){
			initVideoPointResultData(result,showVedioPoint);
		});
	});
}
function initVideoPointResultData(result,showVedioPoint){
	var rowsObj = null;
	if(typeof result == "string"){
		rowsObj = $.parseJSON(result);
	}else{
		rowsObj = result;
	}
	loadLayuiPageTable(rowsObj);
	showVedioPoint(rowsObj);
}
//加载
function loadLayuiPageTable(result){
	layui.use("laypage",function() {
		var a = layui.laypage;
		a.render({elem : nicePage.bar,
				limit : nicePage.limit,
				theme : nicePage.color,
				count : result.length,
				layout : nicePage.layout,
				jump : function(b) {
					document.getElementById(nicePage.table).innerHTML = function() {
						var c = [ nicePage.returnHtml(nameList, widthList) ];
						var d = nicePage.returnList(result,fieldList).concat().splice(b.curr * b.limit- b.limit,b.limit);
						layui.each(d,function(e, g) {
											var f = nicePage.returnTable(g);
											c.push(f)
										});
						c.push(" </tbody></table></br>");
						return c.join("")
					}()
				}
			});
	});
}