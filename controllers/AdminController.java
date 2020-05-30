package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.classes.UserRegister;
import com.example.demo.service.AdminService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {
	
	        @Autowired
	        private AdminService adminservice;
	        
	        //Get Methods
	        
	        @GetMapping("/GetUserByName/{name}/Role/{role}")
	    	public List<UserRegister> getbyname(@PathVariable String name, @PathVariable String role){
	    		return adminservice.getByName(name, role);
	    	}
	    	
	    	@GetMapping("/GetDisapproveUsersByName/{name}/Role/{role}")
	    	public List<UserRegister> getbynameD(@PathVariable String name, @PathVariable String role){
	    		return adminservice.getByNameRequests(name,role);
	    	}
	    	
	        @GetMapping("/GetAllUsers")
	    	public List<UserRegister> getUsers(){
	    		return adminservice.getbyTypeUser();
	    	}
	    	
	    	@GetMapping("/GetAllApprovedVeterinariansAndPharmacy/{role}")
	    	public List<UserRegister> getAllApproved(@PathVariable String role){
	    		return adminservice.getbyTypeVeterinarians(role);
	    	}
	    	
	    	@GetMapping("/GetAllVeterinarianRequestsAndPharmacy/{role}")
	    	public List<UserRegister> getAllRequests(@PathVariable String role){
	    		return adminservice.getbyTypeVeterinariansRequests(role);
	    	}
	    	    	
	    	
	    	//Put Methods
	    	
	    	@PutMapping("/updateApprove")
	    	public UserRegister update(@RequestBody UserRegister mem) {
	    		return adminservice.updateapprove(mem);
	    	}
	    	
	    	@PutMapping("/updateDisApprove")
	    	public UserRegister updatedisprove(@RequestBody UserRegister mem) {
	    		return adminservice.updatedisapprove(mem);
	    	}
	    	
	    	//Delete Methods
	    	
	    	@DeleteMapping("/Delete/{id}")
	    	public List<UserRegister> DeleteMember(@PathVariable int id){
	    		return adminservice.Delete(id);
	    	}

}
