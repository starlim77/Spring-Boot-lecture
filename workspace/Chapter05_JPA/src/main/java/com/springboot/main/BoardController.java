package com.springboot.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@RequestMapping(value = "write")
	public String write() {
		boardService.write();
		return "게시판 등록 성공";
	}
	
	@RequestMapping(value = "getBoardList")
	public List<BoardDTO> getBoardList(){
		return  boardService.getBoardList();
	}
}
