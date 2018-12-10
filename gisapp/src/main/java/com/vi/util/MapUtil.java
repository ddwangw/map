package com.vi.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class MapUtil {
	 /**
     * 使用 Map按value进行排序
     * @param map
     * @return
     */
    @SuppressWarnings("unchecked")
	public static List<Map.Entry<String, Float>> sortMapByValue(Map<String, Float> oriMap) {
        if (oriMap == null || oriMap.isEmpty()) {
            return null;
        }
        List<Map.Entry<String, Float>> entryList = new ArrayList<Map.Entry<String, Float>>(
                oriMap.entrySet());
        Collections.sort(entryList, new Comparator<Map.Entry<String,Float>>() {
            @Override
            public int compare(Entry<String, Float> o1,
                    Entry<String, Float> o2) {
            	int result = 0;
            	float minus = o1.getValue()-o2.getValue();
            	if(minus == 0) {
            		result = 0;
            	}else if(minus > 0){
            		result = -1;
            	}else if(minus < 0) {
            		result = 1;
            	}
            	return result;
            }
        });
        return entryList;
    }
}
