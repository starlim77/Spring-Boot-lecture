package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@Controller
@RestController//responsebody 어노테이션을 쓰지 않아도 된다.
public class HelloController {

	public HelloController() {
		System.out.println("HelloController 기본 생성자");
	}
	
	@GetMapping(value = "hello")//콜백 메소드 - 스프링 컨테이너가 어던 시점이 되면 자동으로 호출하는 메소드
//	@ResponseBody
	public String hello(String name) {
		return "안녕하세요 " + name + " 님";
	}
	
}
