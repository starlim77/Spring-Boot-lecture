package com.springboot.main;

import java.security.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "board")
public class BoardDTO {
	
	@Id
	@Column(name = "id", nullable = false, unique = true,length = 30)
	private String id;
	
	@Column(name = "name", nullable = false, length = 30)
	private String name;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "content")
	private String content;
	
	@CreationTimestamp //엔티티가 생성되는 시점의 시간 등록
	private Timestamp logtime;
	
}
