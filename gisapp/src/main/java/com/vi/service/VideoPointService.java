package com.vi.service;

import java.util.List;

import com.vi.core.IService;
import com.vi.entity.VideoPoint;

public interface VideoPointService extends IService<VideoPoint>{

	public List<VideoPoint> queryWithAddress(String string);

	public List<VideoPoint> queryWithName(String name);

}