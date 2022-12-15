package com.springboot.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"main.controller", "user.*"})
@SpringBootApplication
public class Chapter02Application {

	public static void main(String[] args) {
		SpringApplication.run(Chapter02Application.class, args);
	}
	
}

/*
tomcat-embed-jasper
- SpringBoot에서는 JSP를 권장하지 않는다. 
- 따라서 SpringBoot에서 JSP를 사용하기 위해서는 의존성이 필요하다.

Spring Boot에서 css, js, img 경로 추가하는 방법
- Spring에서는 xml에서 따로 리스소 경로를 입력해줘야 한다.
  하지만 Spring Boot는 spring-boot-starter-web에서 이러한 작업이 설정되어 있기 때문에 바로 사용이 가능하다.
- src/main/resources/static 안에 넣으면 된다.
- static 아래로 리소스 경로가 잡혀있기 때문에 css, js, img의 상대 경로를 추가하면 사용이 가능하다.
 */
 