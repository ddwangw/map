package com.vi.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hikvision.artemis.sdk.ArtemisHttpUtil;
import com.hikvision.artemis.sdk.config.ArtemisConfig;


public class ArtemisUtil {
	private static List<Object> appSecretEffectiveTime = new ArrayList<Object>();

	static {
		ArtemisConfig.host ="172.16.99.164"; 
        ArtemisConfig.appKey ="21325930";     
        ArtemisConfig.appSecret ="aQ3LItPftHXaPxVjlErW";
	}

	private static final String ARTEMIS_PATH = "/artemis";
	

	public static String callApiGetCameraInfos() {
	
		String getCamsApi = ARTEMIS_PATH + "/api/common/v1/remoteCameraInfoRestService/findCameraInfoPage";
		Map<String,String> querys = new HashMap<String,String>();
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
	
	
	public static String callApiGetSecurity() {
		
		String getSecurityApi = ARTEMIS_PATH + "/api/artemis/v1/agreementService/securityParam/appKey/21325930";
        Map<String, String> path = new HashMap<String, String>(2){
            {
                 put("https://", getSecurityApi);
            }
        };
        String result = "";
        if(appSecretEffectiveTime.size()>0){
        	Date lastRequestTime = (Date) appSecretEffectiveTime.get(0);
        	Date nowTime = new Date();
        	long diff = nowTime.getTime() - lastRequestTime.getTime();//�����õ��Ĳ�ֵ��΢�뼶��
            long days = diff / (1000 * 60 * 60 * 24);
            long hours = (diff-days*(1000 * 60 * 60 * 24))/(1000* 60 * 60);
            long minutes = (diff-days*(1000 * 60 * 60 * 24)-hours*(1000* 60 * 60))/(1000* 60);
            if(minutes>=0){
            	result = ArtemisHttpUtil.doGetArtemis(path, null,null,null);
            	appSecretEffectiveTime.set(0, nowTime);
            	appSecretEffectiveTime.set(1, result);
            }else{
            	result = (String) appSecretEffectiveTime.get(1);
            }
    	}else{
    		result = ArtemisHttpUtil.doGetArtemis(path, null,null,null);
    		appSecretEffectiveTime.add(new Date());
    		appSecretEffectiveTime.add(result);
    	}
        if("null".equals(result)||null==result) {
        	result = "{\"msg\":\"ERROR\"}";
        }
		return result;
	}
	
	public static void main(String[] args) {
//		String camsResult = callApiGetCameraInfos();
		String securityResult = callApiGetSecurity();
//		System.out.println(camsResult);
		System.out.println(securityResult);
	}
}
