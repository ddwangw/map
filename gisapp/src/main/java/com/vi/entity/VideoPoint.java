package com.vi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import java.io.Serializable;

/**
 * 视频点位数据实体
 */
@Entity
@Table(name = "t_video_point")
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class VideoPoint implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(name="ID",length = 32)
    private String id;//主键ID
	
	@Column(name="VIDEO_ID")
	private String videoId ;//摄像头编号
	
	@Column(name="VIDEO_NAME")
	private String videoName ;//摄像头名称
	
	@Column(name="TYPE")
	private String type ;//摄像头类型

    @Column(name="ADDRESS")
    private String address;//摄像头所在地址
    
    @Column(name="VIDEO_LON")
    private String videoLon;//经度
    
    @Column(name="MANAGE_DEPT_NAME")
    private String manageDeptName;//管理单位名称
    
    @Column(name="RESOLUTION_RATIO")
    private String resolutionRatio;//视频分辨率
    
    @Column(name="VIDEO_CHANAL")
    private String videoChanal;//视频VIDEO_CHANAL
    
    
    @Column(name="VIDEO_LAT")
    private String videoLat;

	public String getVideoId() {
		return videoId;
	}

	public void setVideoId(String videoId) {
		this.videoId = videoId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getVideoName() {
		return videoName;
	}

	public void setVideoName(String videoName) {
		this.videoName = videoName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	public String getVideoLon() {
		return videoLon;
	}

	public void setVideoLon(String videoLon) {
		this.videoLon = videoLon;
	}

	public String getManageDeptName() {
		return manageDeptName;
	}

	public void setManageDeptName(String manageDeptName) {
		this.manageDeptName = manageDeptName;
	}

	public String getResolutionRatio() {
		return resolutionRatio;
	}

	public void setResolutionRatio(String resolutionRatio) {
		this.resolutionRatio = resolutionRatio;
	}

	public String getVideoLat() {
		return videoLat;
	}

	public void setVideoLat(String videoLat) {
		this.videoLat = videoLat;
	}

	public String getVideoChanal() {
		return videoChanal;
	}

	public void setVideoChanal(String videoChanal) {
		this.videoChanal = videoChanal;
	}
}
