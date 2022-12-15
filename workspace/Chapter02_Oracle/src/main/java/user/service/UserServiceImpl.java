package user.service;

import java.util.List;

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
		userDAO.write(userDTO);
	}

	@Override
	public String getUser(String id) {
		return userDAO.getUser(id);
	}

	@Override
	public List<UserDTO> getList() {
		return userDAO.getList();
	}

	@Override
	public UserDTO getUpdateUser(String id) {
		return userDAO.getUpdateUser(id);
	}

	@Override
	public void update(UserDTO userDTO) {
		userDAO.update(userDTO);
	}

	@Override
	public void delete(String id) {
		userDAO.delete(id);
	}
	
	
}
