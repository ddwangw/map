package com.vi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vi.entity.GisServerInfo;
import com.vi.service.GisServerService;
import com.vi.util.HttpUtils;

@RestController
public class GISServerController {
	@Autowired
    private GisServerService gisServerService;
	
	@RequestMapping(value="/gis/queryAllMapServer")
	public List<GisServerInfo> queryAllMapServer(){
		return gisServerService.queryAllOrderBySequenceNum();
	}
	@RequestMapping(value="/gis/queryUserServer")
	public String queryUserServer(@RequestParam(name = "userId") String userId){
		String url = "http://172.17.6.187:8080/irsp/gisAction/queryGis";
		return HttpUtils.sendGet(url, "userId="+userId);
	}
}
