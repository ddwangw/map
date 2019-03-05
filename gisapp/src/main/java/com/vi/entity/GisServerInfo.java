package com.vi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

/**
 * gis server info 
 * 专题地图信息表
 */
@Entity
@Table(name = "t_gis_server_info")
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class GisServerInfo {
	
	@Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(name="id",length = 32)
    private String id;//主键ID
	
	@Column(name="sequence_num")
	private Integer sequenceNum ;//排序
	
	@Column(name="name")
	private String name ;//服务名称
	
	@Column(name="server_url")
	private String serverUrl ;//服务地址
	
	@Column(name="server_type")
	private Integer serverType ;//服务类型

	public Integer getSequenceNum() {
		return sequenceNum;
	}

	public void setSequenceNum(Integer sequenceNum) {
		this.sequenceNum = sequenceNum;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getServerUrl() {
		return serverUrl;
	}

	public void setServerUrl(String serverUrl) {
		this.serverUrl = serverUrl;
	}

	public Integer getServerType() {
		return serverType;
	}

	public void setServerType(Integer serverType) {
		this.serverType = serverType;
	}
}
