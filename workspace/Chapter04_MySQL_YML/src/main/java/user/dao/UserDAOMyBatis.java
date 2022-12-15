package user.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import user.bean.UserDTO;

@Repository
@Transactional
public class UserDAOMyBatis implements UserDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public void write(UserDTO userDTO) {
		sqlSession.insert("userSQL.write", userDTO);
	}

	@Override
	public String getUser(String id) {
		UserDTO userDTO;
		userDTO = sqlSession.selectOne("userSQL.getUser", id);
		String isUser = "NO";

		if(userDTO!=null) {
			isUser = "YES";
		}
		return isUser;
	}

	@Override
	public List<UserDTO> getList() {
		return sqlSession.selectList("userSQL.getList");
	}

	@Override
	public UserDTO getUpdateUser(String id) {
		return sqlSession.selectOne("userSQL.getUser", id);
	}

	@Override
	public void update(UserDTO userDTO) {
		sqlSession.update("userSQL.update", userDTO);
	}

	@Override
	public void delete(String id) {
		sqlSession.delete("userSQL.delete", id);
	}

}
