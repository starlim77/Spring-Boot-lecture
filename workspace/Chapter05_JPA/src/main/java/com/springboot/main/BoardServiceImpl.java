package com.springboot.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	private BoardDAO boardDAO;
	
	@Override
	public void write() {
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setId("asd");
		boardDTO.setName("라이언");
		boardDTO.setSubject("감귤 라이언");
		boardDTO.setContent("제주도 면세 한정상품");
		
		boardDAO.save(boardDTO);
	}
	
	@Override
	public List<BoardDTO> getBoardList() {
		return boardDAO.findAll();
	}

}
