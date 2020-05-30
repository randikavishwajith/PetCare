package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.classes.Logging;
import com.example.demo.classes.UserRegister;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/AddUsers")
	public String addUser(@RequestBody UserRegister users) {
		    	return service.saveUser(users);	
	}	
	@GetMapping("/Users")
	public List<UserRegister> findUsers() {
		return service.getUsers();
	}
	
	@GetMapping("/UserById/{id}")
	public UserRegister findUserById(@PathVariable int id) {
		return service.getUserById(id);
	}
	
	@GetMapping("/UserByName/{name}")
	public UserRegister findUserByName(@PathVariable String name){
		return service.getUserByName(name);
	}
	
	@GetMapping("/UserByEmail/{email}")
	public UserRegister findUserByEmail(@PathVariable String email){
		return service.getUserByEmail(email);
	}
	
	
	@DeleteMapping("/DeleteUser/{id}")
	public List<UserRegister> DeleteUser(@PathVariable int id) {
		return service.deleteUser(id);
	}
	
	@PutMapping("/UpdateUser")
    public UserRegister UpdateUser(@RequestBody UserRegister users) {
		return service.updateUser(users);
	}
	
	@PutMapping("/UpdatePassword")
    public UserRegister UpdatePassword(@RequestBody UserRegister users) {
		return service.updatePassword(users);
	}
	
	
	
	
	@PostMapping("/loggin")
	public String login(@RequestBody Logging logging){
         return service.loginbyemail(logging);
    }
	
	
	
	
	@PostMapping("/loggingid")
	public int loginid(@RequestBody Logging logging)throws Exception{
         return service.loginbyEmail(logging);
    }

}
