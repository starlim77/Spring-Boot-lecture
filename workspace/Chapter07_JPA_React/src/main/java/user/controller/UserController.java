package user.controller;

import java.util.List;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import user.bean.UserDTO;
import user.service.UserService;

@CrossOrigin
@Controller
@RequestMapping(value = "user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping(value = "write")
	@ResponseBody
	public void write(@ModelAttribute UserDTO userDTO ) {
		userService.write(userDTO);
	}
	
	@GetMapping(path = "getUser")
	@ResponseBody
	public String checkId(@RequestParam String id) {
//		System.out.println("id = "+id);
		String isUser = userService.getUser(id);
//		System.out.println(isUser);

		return isUser;
	}

	@GetMapping(path = "list")
	public String list() {
		return "user/list";
	}

	@GetMapping(path = "getList")
	@ResponseBody   // List를 json으로 자동으로 바꿔서 jQuery쪽으로 넘겨주게 된다.
	public List<UserDTO> getList() {
		return userService.getList();
	}

	@GetMapping(path = "getUpdateUser")
	@ResponseBody
	public Optional<UserDTO> getUpdateUser(@RequestParam String id) {
		Optional<UserDTO> userDTO = userService.getUpdateUser(id);
		
		System.out.println(userDTO);
		
		return userDTO;
		
	
	}

	@PutMapping(path = "update")
	@ResponseBody
	public void update(@ModelAttribute UserDTO userDTO) {
		userService.update(userDTO);
	}

	@DeleteMapping(path ="delete")
	@ResponseBody
	public void delete(@RequestParam String id) {
		userService.delete(id);
	}
	
	@GetMapping(path = "search")
	@ResponseBody
	public List<UserDTO> search(@RequestParam Map<String, String> map){// searchOption, keyword
		
		return userService.search(map);
	}
	
	
}
