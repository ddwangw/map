package com.vi.util;

import java.util.HashMap;
import java.util.Map;

import com.hikvision.artemis.sdk.ArtemisHttpUtil;
import com.hikvision.artemis.sdk.config.ArtemisConfig;

/**
 * ��ClassΪ������, ��Ҫչʾ���õĽӿڵ���, �����漰�Ľӿ���Ҫ�ǻ�����Ƶ���õĽӿ�.
 * �ֱ���漰���ֽӿ�:
 * 	[1] ��ҳ��ȡȫ����ص�����
 * 	https://open8200.hikvision.com/artemis-portal/document?version=4&docId=306&apiBlock=1
 * 	[2] ����appKey��ȡ����Э��
 *  https://open8200.hikvision.com/artemis-portal/document?version=4&docId=284&apiBlock=2
 * @author zhangtuo
 *
 */
public class ArtemisUtil {

	/**
	 * ������Լ���appKey��appSecret����static��̬���е���������.
	 * [1 host]
	 * 		�����ѡ�����ͬopen8200�Խ�,Ҳ����˵���ֳ�����,�����ܲ�����ʾ����,host�����޸�.Ĭ��Ϊopen8200.hikvision.com
	 * 		�����ѡ�����ͬ�ֳ������Խ�,hostҪ�޸�Ϊ�ֳ�������ip,����1.0 ʱ���˿�Ĭ��Ϊ9999.����2.0 ʱ���˿�Ĭ��Ϊ443.����:10.33.25.22:9999 ����10.33.25.22:443
	 * [2 appKey��appSecret]
	 * 		�밴�ջ�õ���appKey��appSecret����.
	 * 		
	 * ps. ���ͬ����open8200����ʾ�����Խӳɹ���,�л����ֳ�����,�밴���ֳ����,������������.
	 * 
	 */
	static {
		ArtemisConfig.host ="172.16.99.164"; //artemis���ط�����ip�˿�
        ArtemisConfig.appKey ="21325930";     //��Կappkey
        ArtemisConfig.appSecret ="aQ3LItPftHXaPxVjlErW";//��ԿappSecret
	}
	/**
	 * ��������ƽ̨����վ·��
	 * TODO ·�������޸ģ�����/artemis
	 */
	private static final String ARTEMIS_PATH = "/artemis";
	
	/**
	 * [1] ��ҳ��ȡ���м�ص����ݵ��ú���
	 * @return
	 */
	public static String callApiGetCameraInfos() {
		/**
		 * 	https://open8200.hikvision.com/artemis-portal/document?version=4&docId=306&apiBlock=1
		 *  ����API�ĵ����Կ�����,����һ��GET�����Rest�ӿ�, ���Ҵ���Ĳ���ֵΪqueryString, Ҳ����˵�������������:
		 *  	http://ip:port/path?a=1&b=2
		 *  ArtemisHttpUtil�������ṩ��doGetArtemis�������, һ���ĸ��������ĵ���д�����е���˼.
		 *  ��Ϊ�ӿ���https, ���Ե�һ������path�Ǹ�hashmap����,��putһ��key-value, querysΪ����Ĳ���.
		 *  startΪ��ʼҳ, sizeΪÿҳ��.
		 */
		String getCamsApi = ARTEMIS_PATH + "/api/common/v1/remoteCameraInfoRestService/findCameraInfoPage";
		Map<String,String> querys = new HashMap<String,String>();//get����Ĳ�ѯ����
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
	 * [2] ����appKey��ȡ����Э��
	 * @return
	 */
	public static String callApiGetSecurity() {
		/**
		 * 	https://open8200.hikvision.com/artemis-portal/document?version=4&docId=284&apiBlock=2
		 *  ����API�ĵ����Կ�����,����һ��GET�����Rest�ӿ�,
		 *  �ӿ��а�����һ��Parameter Path,û��queryString���������.
		 *  �ӿ�·��: /api/artemis/v1/agreementService/securityParam/appKey/{appKey}
		 *  {appKey}��Parameter Path
		 *  ���, doGetArtemis�ڶ�����������Ϊnull
		 *
		 *  TODO ����·��ĩβ��appKey�����޸�Ϊstatic���������ͬ��appKey
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
		 * ��ҳ��ȡ��ص�����
		 */
//		String camsResult = callApiGetCameraInfos();
		
		/**
		 * ����appKey��ȡ����Э��
		 */
		String securityResult = callApiGetSecurity();
//		System.out.println(camsResult);
		System.out.println(securityResult);
	}
}
