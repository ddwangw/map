$(function () {
    //延迟初始化
    $(document).ready(function () {
    	if(isIE()){
    		 setTimeout(function () {
    	       initIsOk();
    	     }, 500);
//    	    init();
    	}else{
    		$("body").empty().append("<div style='text-align:center'>请使用IE浏览器</div>");
    	}
    });
});
var count = 5;
function initIsOk(){
	var OCXobj  = document.getElementById("PlayViewOCX");
	var txtInit = $("#config").val();
	try{
		OCXobj.ContainOCX_Init(txtInit);
		init();
	}catch(e){
		if(--count>0){
			setTimeout(function () {
		 	       initIsOk();
		 	     }, 1000);
		}else{
			var aHtml = "<div style='text-align:center'><a href='./VideoClientSetup.exe'>点击下载视频播放控件</a></div>";
	    	$("body").empty().append(aHtml);
		}
	}
}
//初始化
function init() {
	$('#PlayViewOCX').css({
        'width': '100%',
        'height': '100%'
    });
	var OCXobj  = document.getElementById("PlayViewOCX");
    var txtInit = $("#config").val();
    OCXobj.ContainOCX_Init(txtInit);
	var url = "./video/queryAppSecret";
	$.get(url,function(result){
		var appObj = $.parseJSON(result);
		if(appObj.msg=="SUCCESS"){
			var data = appObj.data;
			$("#appSecret").val(data.appSecret);
			$("#time").val(data.time);
			$("#timeSecret").val(data.timeSecret);
			var PalyType = $('.PalyType').val();
	        var SvrIp = $('.SvrIp').val();
	        var SvrPort = $('.SvrPort').val();
	        var appkey = $('.appkey').val();
	        var appSecret = $('.appSecret').val();
	        var time = $('.time').val();
	        var timeSecret = $('.timeSecret').val();
	        var httpsflag = $('.httpsflag').val();
	        var CamList = $('.CamList').val();
	        var param = 'ReqType:' + PalyType + ';' + 'SvrIp:' + SvrIp + ';'+'WndCount: 1'+';' + 'SvrPort:' + SvrPort + ';' + 'Appkey:' + appkey + ';' + 'AppSecret:' + appSecret + ';' + 'time:' + time + ';' + 'timesecret:' + timeSecret + ';' + 'httpsflag:' + httpsflag + ';' + 'CamList:' + CamList + ';';
	        //如果初始化传了WndCont值 这里也需要传 如demo中设置了WndCont:1  这里也要传WndCont:1  如果使用默认四窗口则可以不传
        	play_ocx_do(param);
		}
	});
}

//提交按钮
$('.submit').on('click', function () {
    var PalyType = $('.PalyType').val();
    var SvrIp = $('.SvrIp').val();
    var SvrPort = $('.SvrPort').val();
    var appkey = $('.appkey').val();
    var appSecret = $('.appSecret').val();
    var time = $('.time').val();
    var timeSecret = $('.timeSecret').val();
    var httpsflag = $('.httpsflag').val();
    var CamList = $('.CamList').val();

    var param = 'ReqType:' + PalyType + ';' + 'SvrIp:' + SvrIp + ';'+'WndCount: 1'+';' + 'SvrPort:' + SvrPort + ';' + 'Appkey:' + appkey + ';' + 'AppSecret:' + appSecret + ';' + 'time:' + time + ';' + 'timesecret:' + timeSecret + ';' + 'httpsflag:' + httpsflag + ';' + 'CamList:' + CamList + ';';
    //如果初始化传了WndCont值 这里也需要传 如demo中设置了WndCont:1  这里也要传WndCont:1  如果使用默认四窗口则可以不传

    play_ocx_do(param);

});

//exe弹出
$('.exe').on('click', function () {
    var PalyType = $('.PalyType').val();
    var SvrIp = $('.SvrIp').val();
    var SvrPort = $('.SvrPort').val();
    var appkey = $('.appkey').val();
    var appSecret = $('.appSecret').val();
    var time = $('.time').val();
    var timeSecret = $('.timeSecret').val();
    var httpsflag = $('.httpsflag').val();
    var CamList = $('.CamList').val();
    //主要是添加了'hikvideoclient://' 和 'VersionTag:artemis'2段字符串 
    var param = 'hikvideoclient://ReqType:' + PalyType + ';' + 'VersionTag:artemis' + ';' + 'SvrIp:' + SvrIp + ';' + 'SvrPort:' + SvrPort + ';' + 'Appkey:' + appkey + ';' + 'AppSecret:' + appSecret + ';' + 'time:' + time + ';' + 'timesecret:' + timeSecret + ';' + 'httpsflag:' + httpsflag + ';' + 'CamList:' + CamList + ';';
    document.getElementById("url").src = param;
});



////OCX控件视频处理函数
function play_ocx_do(param) {
    if ("null" == param || "" == param || null == param || "undefined" == typeof param) {
        return;
    } else {
    	var OCXobj  = document.getElementById("PlayViewOCX");
    	console.log("控件视频处理函数触发："+param);
        OCXobj.ContainOCX_Do(param);
    }
}

function isIE() {
   if (!!window.ActiveXObject || "ActiveXObject" in window){
        return true;
   }else{
       return false;
   }
}   