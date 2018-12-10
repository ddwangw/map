package com.vi.util;

import java.util.HashMap;
import java.util.Map;

import com.hikvision.artemis.sdk.ArtemisHttpUtil;
import com.hikvision.artemis.sdk.config.ArtemisConfig;

/**
 * 该Class为测试类, 主要展示常用的接口调用, 这里涉及的接口主要是基础视频常用的接口.
 * 分别会涉及两种接口:
 * 	[1] 分页获取全部监控点数据
 * 	https://open8200.hikvision.com/artemis-portal/document?version=4&docId=306&apiBlock=1
 * 	[2] 根据appKey获取加密协议
 *  https://open8200.hikvision.com/artemis-portal/document?version=4&docId=284&apiBlock=2
 * @author zhangtuo
 *
 */
public class ArtemisUtil {

	/**
	 * 请根据自己的appKey和appSecret更换static静态块中的三个参数.
	 * [1 host]
	 * 		如果你选择的是同open8200对接,也就是说非现场环境,海康总部的演示环境,host不用修改.默认为open8200.hikvision.com
	 * 		如果你选择的是同现场环境对接,host要修改为现场环境的ip,网关1.0 时，端口默认为9999.网关2.0 时，端口默认为443.例如:10.33.25.22:9999 或者10.33.25.22:443
	 * [2 appKey和appSecret]
	 * 		请按照或得到的appKey和appSecret更改.
	 * 		
	 * ps. 如果同海康open8200的演示环境对接成功后,切换到现场环境,请按照现场情况,更换三个参数.
	 * 
	 */
	static {
		ArtemisConfig.host ="172.16.99.164"; //artemis网关服务器ip端口
        ArtemisConfig.appKey ="21325930";     //秘钥appkey
        ArtemisConfig.appSecret ="aQ3LItPftHXaPxVjlErW";//秘钥appSecret
	}
	/**
	 * 能力开放平台的网站路径
	 * TODO 路径不用修改，就是/artemis
	 */
	private static final String ARTEMIS_PATH = "/artemis";
	
	/**
	 * [1] 分页获取所有监控点数据调用函数
	 * @return
	 */
	public static String callApiGetCameraInfos() {
		/**
		 * 	https://open8200.hikvision.com/artemis-portal/document?version=4&docId=306&apiBlock=1
		 *  根据API文档可以看出来,这是一个GET请求的Rest接口, 而且传入的参数值为queryString, 也就是说明请求参数类似:
		 *  	http://ip:port/path?a=1&b=2
		 *  ArtemisHttpUtil工具类提供了doGetArtemis这个函数, 一共四个参数在文档里写明其中的意思.
		 *  因为接口是https, 所以第一个参数path是个hashmap类型,请put一个key-value, querys为传入的参数.
		 *  start为起始页, size为每页量.
		 */
		String getCamsApi = ARTEMIS_PATH + "/api/common/v1/remoteCameraInfoRestService/findCameraInfoPage";
		Map<String,String> querys = new HashMap<String,String>();//get请求的查询参数
        querys.put("start", "0");
        querys.put("size", "20");
        Map<String, String> path = new HashMap<String, String>(2){
            {
                 put("https://", getCamsApi);
            }
        };
        String result = ArtemisHttpUtil.doGetArtemis(path, querys,null,null);
		return result;
	}
	
	/**
	 * [2] 根据appKey获取加密协议
	 * @return
	 */
	public static String callApiGetSecurity() {
		/**
		 * 	https://open8200.hikvision.com/artemis-portal/document?version=4&docId=284&apiBlock=2
		 *  根据API文档可以看出来,这是一个GET请求的Rest接口,
		 *  接口中包含了一个Parameter Path,没有queryString的请求参数.
		 *  接口路径: /api/artemis/v1/agreementService/securityParam/appKey/{appKey}
		 *  {appKey}是Parameter Path
		 *  因此, doGetArtemis第二个参数可以为null
		 *
		 *  TODO 下面路径末尾的appKey必须修改为static代码块中相同的appKey
		 */
		String getSecurityApi = ARTEMIS_PATH + "/api/artemis/v1/agreementService/securityParam/appKey/21325930";
        Map<String, String> path = new HashMap<String, String>(2){
            {
                 put("https://", getSecurityApi);
            }
        };
        String result =  ArtemisHttpUtil.doGetArtemis(path, null,null,null);
        if("null".equals(result)||null==result) {
        	result = "{\"msg\":\"ERROR\"}";
        }
		return result;
	}
	
	public static void main(String[] args) {
		/**
		 * 分页获取监控点数据
		 */
//		String camsResult = callApiGetCameraInfos();
		
		/**
		 * 根据appKey获取加密协议
		 */
		String securityResult = callApiGetSecurity();
//		System.out.println(camsResult);
		System.out.println(securityResult);
	}
}
