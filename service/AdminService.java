package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.classes.UserRegister;
import com.example.demo.classes.repository.UserRepository;

@Service
public class AdminService {
	
	@Autowired private UserRepository userRepository;
	
	//Get Methods
	public List<UserRegister> getByName(String name,String role){
		return userRepository.findByNameLikeAndRoleAndApprove(name,role,true);
	}
	
	public List<UserRegister> getByNameRequests(String name, String role){
		return userRepository.findByNameLikeAndRoleAndApprove(name,role,false);
	}
	
	public List<UserRegister> getbyTypeUser(){
		 return userRepository.findByRole("User");
	}
	
	public List<UserRegister> getbyTypeVeterinarians(String role){
		 return userRepository.findByRoleAndApprove(role,true);
	}
	
	public List<UserRegister> getbyTypeVeterinariansRequests(String role){
		 return userRepository.findByRoleAndApprove(role,false);
	}
		
	
	//Update Methods
	//Approve method
	public UserRegister updateapprove(UserRegister mem) {
		UserRegister approve = userRepository.findById(mem.getId()).orElse(null);
		approve.setApprove(true);
		return userRepository.save(approve);
	}
	
	//Disapprove method
	public UserRegister updatedisapprove(UserRegister mem) {
		UserRegister approve = userRepository.findById(mem.getId()).orElse(null);
		approve.setApprove(false);
		return userRepository.save(approve);
	}
	
	//Delete Method
		public List<UserRegister> Delete(int id){
			userRepository.deleteById(id);
			return userRepository.findAll();
		}

}
