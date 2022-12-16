package user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.bean.UserDTO;
import user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;

	@Override
	public void write(UserDTO userDTO) {
		//id 컬럼이 primary key로 설정되어 있기 때문에 똑같은 아이디가 없으면 insert가 수행되고,
		//아이디가 있으면 update로 수행된다.
		userDAO.save(userDTO);
	}

	@Override
	public String getUser(String id) {
		
		Optional<UserDTO> userDTO = userDAO.findById(id);
		System.out.println(userDTO);// 값이 없으면 Optional.empty 출력
		
		String isUser = "NO";

		if(userDTO.isPresent()) {//값이 없으면 false
			isUser = "YES";
		}
		return isUser;
	}

	@Override
	public List<UserDTO> getList() {
		return userDAO.findAll();
	}

	@Override
	public Optional<UserDTO> getUpdateUser(String id) {
		Optional<UserDTO> userDTO = userDAO.findById(id);
		return userDTO;
	}

	@Override
	public void update(UserDTO userDTO) {
		userDAO.save(userDTO);
	}

	@Override
	public void delete(String id) {
		//deleteById()는 내부적으로 findById()를 수행하고 delete를 수행한다.
		//만약 아이디가 없으면 EmptyResultDataAccessException이 발생한다.
		userDAO.deleteById(id);
	}


}
