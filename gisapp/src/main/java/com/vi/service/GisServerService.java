package com.vi.service;

import java.util.List;

import com.vi.core.IService;
import com.vi.entity.GisServerInfo;

public interface GisServerService extends IService<GisServerInfo>{
	/**
	 * 查询所有配置的专题图服务
	 */
	public List<GisServerInfo> queryAllOrderBySequenceNum();
}