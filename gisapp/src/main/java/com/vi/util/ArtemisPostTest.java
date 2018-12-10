package com.vi.util;

import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.hikvision.artemis.sdk.ArtemisHttpUtil;
import com.hikvision.artemis.sdk.config.ArtemisConfig;

public class ArtemisPostTest {
	/**
	 * ������Լ���appKey��appSecret����static��̬���е���������. [1 host]
	 * �����ѡ�����ͬopen8200�Խ�,Ҳ����˵���ֳ�����,�����ܲ�����ʾ����,host�����޸�.Ĭ��Ϊopen8200.hikvision.com
	 * �����ѡ�����ͬ�ֳ������Խ�,hostҪ�޸�Ϊ�ֳ�������ip,����1.0 ʱ���˿�Ĭ��Ϊ9999.����2.0 ʱ���˿�Ĭ��Ϊ443.����:10.33.25.22:9999 ����10.33.25.22:443 [2 appKey��appSecret]
	 * �밴�ջ�õ���appKey��appSecret����.
	 * 
	 * ps. ���ͬ����open8200����ʾ�����Խӳɹ���,�л����ֳ�����,�밴���ֳ����,������������.
	 *
	 * TODO ����ǰ����ӿڴ������ʲô���Ǵ���json����doPostStringArtemis�������Ǳ��ύ����doPostFromArtemis����
	 * 
	 */
	static {
		ArtemisConfig.host = "open8200.hikvision.com"; // artemis���ط�����ip�˿�
		ArtemisConfig.appKey = "22425132"; // ��Կappkey
		ArtemisConfig.appSecret = "mcsioUGkT5GRMZTvjwAC";// ��ԿappSecret
	}
	/**
	 * ��������ƽ̨����վ·��
	 * TODO ·�������޸ģ�����/artemis
	 */
	private static final String ARTEMIS_PATH = "/artemis";

	/**
	 * ����post�������͵Ľӿ�,�����Լ򵥵ļӷ��ӿ�ʾ��
	 * https://open8200.hikvision.com/artemis/portal/documentCenter/showDocumentCenter?docId=98#api1
	 * 
	 * @return
	 */
	public static String callPostApi() {
		/**
		 * https://open8200.hikvision.com/artemis/portal/documentCenter/showDocumentCenter?docId=98#api1
		 * ����API�ĵ����Կ�����,����һ��POST�����Rest�ӿ�, ���Ҵ���Ĳ���ֵΪ��һ��formֵ.
		 * ArtemisHttpUtil�������ṩ��doPostFormArtemis�������, һ������������ĵ���д�����е���˼. ��Ϊ�ӿ���https,
		 * ���Ե�һ������path�Ǹ�hashmap����,��putһ��key-value, querysΪ����Ĳ���. 
		 * paramMap Ϊform�Ĳ���ֵ.
		 * queryString������,���Դ���null,accept��contentType��ָ������Ĭ�ϴ�null.
		 */
		String getCamsApi = ARTEMIS_PATH + "/api/artemis/v1/plus";
		Map<String, String> paramMap = new HashMap<String, String>();// post����Form������
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
	 * ����POST�������ͽӿڣ������Բ�ѯ��������Ϊ��
	 * https://open8200.hikvision.com/artemis-portal/document?version=4&docId=290&apiBlock=10
	 *
	 * @return
	 */
	public static String callRealTimeVechicleData(){
		/**
		 * https://open8200.hikvision.com/artemis-portal/document?version=4&docId=290&apiBlock=10
		 * ����API�ĵ����Կ�����������һ��POST�����Rest�ӿڣ����Ҵ���Ĳ���ֵΪһ��json��query
		 * ArtemisHttpUtil�������ṩ��doPostStringArtemis���������һ������������ĵ���д�����е���˼����Ϊ�ӿ���https��
		 * ���Ե�һ������path��һ��hashmap���ͣ���putһ��key-value��queryΪ����Ĳ�����bodyΪ�����json����
		 * �����contentTypeΪapplication/json��accept��ָ��Ϊnull
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
		jsonBody.put("searchKey","��A*");
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
