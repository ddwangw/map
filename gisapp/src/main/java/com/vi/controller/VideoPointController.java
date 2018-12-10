package com.vi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vi.entity.VideoPoint;
import com.vi.service.VideoPointService;
import com.vi.util.ArtemisUtil;

@RestController
public class VideoPointController {
	 @Autowired
    private VideoPointService videoPointService;
	 /*
	  * 查询所有视频点位数据
	  */
	@RequestMapping(value="/video/queryPageWithParams")
	public List<VideoPoint> queryAllVideoInfos(@RequestParam(name = "videoName") String videoName){
		return videoPointService.queryWithName(videoName);
	}
	/*
	 * 
	 */
	@RequestMapping(value="/video/queryAppSecret")
	public String querySecret(){
		String securityResult = ArtemisUtil.callApiGetSecurity();
		return securityResult;
	}
}
