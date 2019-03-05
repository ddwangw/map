package com.vi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vi.entity.GisServerInfo;
import com.vi.service.GisServerService;

@RestController
public class GISServerController {
	 @Autowired
    private GisServerService gisServerService;
	@RequestMapping(value="/gis/queryAllMapServer")
	public List<GisServerInfo> queryAllMapServer(){
		return gisServerService.queryAllOrderBySequenceNum();
	}
}
