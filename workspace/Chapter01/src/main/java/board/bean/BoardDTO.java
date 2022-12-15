package board.bean;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BoardDTO {
	private int seq;
	private String name, subject, content;
	private Date logtime;
}
