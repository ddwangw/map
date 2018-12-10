package com.vi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vi.core.ServiceImpl;
import com.vi.dao.VideoPointDao;
import com.vi.entity.VideoPoint;
import com.vi.service.VideoPointService;

@Service
public class VedioPointServiceImpl extends ServiceImpl<VideoPointDao,VideoPoint> implements VideoPointService{

	@Autowired
	VideoPointDao videoPointDao;
	@Override
	public List<VideoPoint> queryWithAddress(String address) {
		return videoPointDao.findLikeField("address", address);
	}
	@Override
	public List<VideoPoint> queryWithName(String name) {
		return videoPointDao.findLikeField("videoName", "%"+name+"%");
	}
}