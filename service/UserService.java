package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Service;

import com.example.demo.classes.Logging;
import com.example.demo.classes.UserRegister;
import com.example.demo.classes.repository.UserRepository;

@Service
public class UserService {

	@Autowired private UserRepository repository;
	//Post Method
		//try after creating new class for registers users
		public String saveUser(UserRegister users) {
			    repository.save(users); 
				return "Registration Complete";
		}
		
		//Get Method
		//Get All Users
		public List<UserRegister> getUsers(){
			return repository.findAll();
		}
		
		//Get Users By Id
		public UserRegister getUserById(int id) {
			return repository.findById(id).orElse(null);
			
		}
		
		//Get User By Name
		@Query(value = "SELECT name from Users_TBL WHERE name = ?1", nativeQuery = true)
		public UserRegister getUserByName(String name) {
			return repository.findByName(name);	
		}
		
		//Get User By Email
		public UserRegister getUserByEmail(String email) {
			return repository.findByEmail(email);	
		}
		
		//Delete Method
		public List<UserRegister> deleteUser(int id){
			repository.deleteById(id);
			return repository.findAll();
		}
		
		//Update Method
		public UserRegister updateUser(UserRegister users) {
			UserRegister existingUsers = repository.findById(users.getId()).orElse(null);
			existingUsers.setName(users.getName());
			existingUsers.setEmail(users.getEmail());
			existingUsers.setContact(users.getContact());
			return repository.save(existingUsers);
		}
		
		public UserRegister updatePassword(UserRegister users) {
			UserRegister existingUsers = repository.findById(users.getId()).orElse(null);
			existingUsers.setPassword(users.getPassword());
			return repository.save(existingUsers);
		}
		
	
		
		
		
		public boolean findapprove(UserRegister users) {
			repository.findByName(users.isApprove());
			if(users.isApprove()==true) {
				return true;
			}
			else {
				return false;
			}
		}
		
		//login Methods
		public int loginbyEmail(Logging logging) {
			UserRegister user = repository.findByEmail(logging.getEmail());
			int id = user.getId();
		        if(!user.getEmail().equals(logging.getEmail()) && !user.getPassword().equals(logging.getPassword())) {
		        	throw new RuntimeException();
				 }
		        else {
		        	return id;
		        }
		}
		
		public String loginbyemail(Logging logging) {
			try {
				
			UserRegister user = repository.findByEmail(logging.getEmail());
			 String rl=user.getRole();
			 boolean approve=user.isApprove();
			 
			    if(user.equals(null)) {
			    	return "User does not exist.";
		        }
			    else if(!user.getEmail().equals(logging.getEmail() )) {
			    	return "Email mismatch.";
		        }
			    else if(rl == null) {
			    	return "Role does not exist.";
		        }
		        else if(!user.getPassword().equals(logging.getPassword())){
		        	return "Password mismatch.";
		        }
		        else if(rl.equals("Veterinarian") || rl.equals("Pharmacy")) {
		           if(approve == false) {
		        	   return "Your are not approved yet please contact *Admin* 0714545450";
			         }
		           else {
		        	return rl;
		             }
		        }
		        
		        else if(!user.getName().equals(logging.getEmail()) && !user.getPassword().equals(logging.getPassword())) {
		        	return "User does not exist.";
				 }
		        else {
		        	return rl;
		        }
			  }
			catch(NullPointerException e) {
				return "Invalid Login Details";
			}
			catch(Exception e) {
				return "e"+e;
			}
			    
		    }	
}
