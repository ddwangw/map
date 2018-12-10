package com.vi.util;

import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.hikvision.artemis.sdk.ArtemisHttpUtil;
import com.hikvision.artemis.sdk.config.ArtemisConfig;

public class ArtemisPostTest {
	/**
	 * 请根据自己的appKey和appSecret更换static静态块中的三个参数. [1 host]
	 * 如果你选择的是同open8200对接,也就是说非现场环境,海康总部的演示环境,host不用修改.默认为open8200.hikvision.com
	 * 如果你选择的是同现场环境对接,host要修改为现场环境的ip,网关1.0 时，端口默认为9999.网关2.0 时，端口默认为443.例如:10.33.25.22:9999 或者10.33.25.22:443 [2 appKey和appSecret]
	 * 请按照或得到的appKey和appSecret更改.
	 * 
	 * ps. 如果同海康open8200的演示环境对接成功后,切换到现场环境,请按照现场情况,更换三个参数.
	 *
	 * TODO 调用前看清接口传入的是什么，是传入json就用doPostStringArtemis方法，是表单提交就用doPostFromArtemis方法
	 * 
	 */
	static {
		ArtemisConfig.host = "open8200.hikvision.com"; // artemis网关服务器ip端口
		ArtemisConfig.appKey = "22425132"; // 秘钥appkey
		ArtemisConfig.appSecret = "mcsioUGkT5GRMZTvjwAC";// 秘钥appSecret
	}
	/**
	 * 能力开放平台的网站路径
	 * TODO 路径不用修改，就是/artemis
	 */
	private static final String ARTEMIS_PATH = "/artemis";

	/**
	 * 调用post请求类型的接口,这里以简单的加法接口示例
	 * https://open8200.hikvision.com/artemis/portal/documentCenter/showDocumentCenter?docId=98#api1
	 * 
	 * @return
	 */
	public static String callPostApi() {
		/**
		 * https://open8200.hikvision.com/artemis/portal/documentCenter/showDocumentCenter?docId=98#api1
		 * 根据API文档可以看出来,这是一个POST请求的Rest接口, 而且传入的参数值为是一个form值.
		 * ArtemisHttpUtil工具类提供了doPostFormArtemis这个函数, 一共五个参数在文档里写明其中的意思. 因为接口是https,
		 * 所以第一个参数path是个hashmap类型,请put一个key-value, querys为传入的参数. 
		 * paramMap 为form的参数值.
		 * queryString不存在,所以传入null,accept和contentType不指定按照默认传null.
		 */
		String getCamsApi = ARTEMIS_PATH + "/api/artemis/v1/plus";
		Map<String, String> paramMap = new HashMap<String, String>();// post请求Form表单参数
		paramMap.put("a", "3");
		paramMap.put("b", "2");
		Map<String, String> path = new HashMap<String, String>(2) {
			{
				put("https://", getCamsApi);
			}
		};
		String result = ArtemisHttpUtil.doPostFormArtemis(path, paramMap, null, null, null);
		return result;
	}


	/**
	 * 调用POST请求类型接口，这里以查询过车数据为例
	 * https://open8200.hikvision.com/artemis-portal/document?version=4&docId=290&apiBlock=10
	 *
	 * @return
	 */
	public static String callRealTimeVechicleData(){
		/**
		 * https://open8200.hikvision.com/artemis-portal/document?version=4&docId=290&apiBlock=10
		 * 根据API文档可以看出来，这是一个POST请求的Rest接口，而且传入的参数值为一个json和query
		 * ArtemisHttpUtil工具类提供了doPostStringArtemis这个函数，一共五个参数在文档里写明其中的意思，因为接口是https，
		 * 所以第一个参数path是一个hashmap类型，请put一个key-value，query为传入的参数，body为传入的json数据
		 * 传入的contentType为application/json，accept不指定为null
		 *
		 */
		String VechicleDataApi = ARTEMIS_PATH +"/api/bms/v2/searchMotorVehicles";
		Map<String,String> path = new HashMap<String,String>(2){
			{
				put("https://",VechicleDataApi);
			}
		};
		Map<String,String> querys =new HashMap<>();
		querys.put("apiUserName","admin");
		querys.put("domainCode","100001");


		JSONObject jsonBody = new JSONObject();
		jsonBody.put("pageNo",1);
		jsonBody.put("pageSize",2);
		jsonBody.put("startTime","2017-12-26 00:00:00");
		jsonBody.put("endTime","2017-12-26 23:00:00");
		jsonBody.put("searchKey","浙A*");
		jsonBody.put("crossingType",3);
		jsonBody.put("crossingDetailType","1018,1019,1021");
		jsonBody.put("crossingIds","21,32,43");
		jsonBody.put("vehicleColor","0");
		jsonBody.put("vehicleType","1");
		jsonBody.put("plateColor","2");
		jsonBody.put("plateType","3");

		String body = jsonBody.toJSONString();

		String result =ArtemisHttpUtil.doPostStringArtemis(path,body,querys,null,"application/json");
		return result;
	}
	
	public static void main(String[] args) {
		String result = callPostApi();
		System.out.println(result);

		String VechicleDataResult = callRealTimeVechicleData();
		System.out.println(VechicleDataResult);
	}
}
