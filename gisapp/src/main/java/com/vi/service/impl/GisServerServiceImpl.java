package com.vi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vi.core.ServiceImpl;
import com.vi.dao.GisServerDao;
import com.vi.entity.GisServerInfo;
import com.vi.service.GisServerService;

@Service
public class GisServerServiceImpl extends ServiceImpl<GisServerDao,GisServerInfo> implements GisServerService{

	@Autowired
	GisServerDao gisServerDao;
	@Override
	public List<GisServerInfo> queryAllOrderBySequenceNum() {
		return gisServerDao.findAllAsc("sequenceNum");
	}
}