package user.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "user")
public class UserController2 {

	@GetMapping(value = "uploadForm")
	public String uploadForm() {
		return "user/uploadForm";
	}

//	@PostMapping(value = "upload")
//	@ResponseBody
//	public void uploda(@RequestParam MultipartFile upload) {
//		//form 안의 name 값과 변수명이 일치해야한다
//
//		//가상폴더
//		String filePath = "/Users/youn/Desktop/Spring/workspace/chapter06_SpringWebMaven/src/main/webapp/storage";
//		String fileName = upload.getOriginalFilename();
//
//		File file = new File(filePath, fileName);
//
//		try {
//			FileCopyUtils.copy(upload.getInputStream(), new FileOutputStream(file)); //복사
//			upload.transferTo(file);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}

//  name = "img" 1개 일 때
//	@PostMapping(value = "upload")
//	@ResponseBody
//	public String uploda(@RequestParam MultipartFile upload, HttpSession session) {
//		//form 안의 name 값과 변수명이 일치해야한다
//
//		//실제폴더
//		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
//		System.out.println("실제 폴더 위치 = " + filePath);
//
//		String fileName = upload.getOriginalFilename();
//
//		File file = new File(filePath, fileName);
//
//		try {
//			//FileCopyUtils.copy(upload.getInputStream(), new FileOutputStream(file)); //복사
//			upload.transferTo(file);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//
//		return "<img src='../storage/" + fileName + "' width='300' height='300'/>";
//
//	}



//	//name = "upload"가 2개 이상일 경우
//	@PostMapping(value = "upload")
//	@ResponseBody
//	public void uploda(@RequestParam MultipartFile[] upload, HttpSession session) {
//		//form 안의 name 값과 변수명이 일치해야한다
//
//		//실제폴더
//		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
//		System.out.println("실제 폴더 위치 = " + filePath);
//		File file;
//
////		나중엔 for 문으로
//		if(upload[0] != null) {
//			String fileName = upload[0].getOriginalFilename();
//			file = new File(filePath, fileName);
//
//			try {
//				upload[0].transferTo(file);
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//		if(upload[1] != null) {
//			String fileName = upload[1].getOriginalFilename();
//			file = new File(filePath, fileName);
//
//			try {
//				upload[1].transferTo(file);
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//	}


	//한번에 여러개의 파일 선택
	@PostMapping(value = "upload")
	@ResponseBody
	public void uploda(@RequestParam("upload[]") List<MultipartFile> list, HttpSession session) {
		//form 안의 name 값과 변수명이 일치해야한다

		//실제폴더
		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
		System.out.println("실제 폴더 위치 = " + filePath);
		File file;

		for(MultipartFile upload : list) {
			String fileName = upload.getOriginalFilename();
			file = new File(filePath, fileName);
			try {
				upload.transferTo(file);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}//for
	}


//  name = "img" 1개 일 때
	   @PostMapping(value = "upload2", produces = "text/html; charset=UTF-8")
	   @ResponseBody
	   public String upload2(@RequestParam MultipartFile upload, HttpSession session) { //MultipartFile 의 이름과 데이터를 주느 input file의 name이 같아야함

	      String filePath = session.getServletContext().getRealPath("/storage");
	      String fileName = upload.getOriginalFilename();
	      System.out.println("실제폴더 = " + filePath);

	      File file = new File(filePath, fileName);

	      try {
	    	  upload.transferTo(file);
	      } catch (IOException e) {

	         e.printStackTrace();
	      }

	      //DB
	      return "<img src='../storage/" + fileName + "' width='300' height='300'/>";
	   }


}
