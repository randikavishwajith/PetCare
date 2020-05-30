package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.classes.PetRegister;
import com.example.demo.classes.repository.PetRepository;

@Service
public class PetService {
	
	@Autowired
	private PetRepository repository;
	
	//Post Methods
	public String savepet(PetRegister p) {
		 repository.save(p);
		return "Rgistration Success";
	}
	
	//Get Methods
	public List<PetRegister> getAll(){
		return repository.findAll();
	}
	
	public List<PetRegister> getbyname(String petname){
		return repository.findBypetname(petname);
	}
	
	public List<PetRegister> getpetbyuserid(int uuid) {
		return repository.findByuuid(uuid);	 
	}
	
	public PetRegister getpetbyid(int id){
		return repository.findById(id).orElse(null);
	}
	
	//Delete Methods
	public List<PetRegister> Delete(int id){
		repository.deleteById(id);
		return repository.findAll();
	}

}
