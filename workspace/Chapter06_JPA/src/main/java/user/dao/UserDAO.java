package user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import user.bean.UserDTO;

public interface UserDAO extends JpaRepository<UserDTO, String>{

}
