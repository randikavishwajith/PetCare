package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.classes.PetSell;
import com.example.demo.classes.repository.PetSellRepository;

@Service
public class PetSellService {
	
	@Autowired
	private PetSellRepository repository;
	
	//Post Methods
	public String savepost(PetSell p) {
		 repository.save(p);
		return "Post Success";
	}
	
	//Get Posts
	public List<PetSell> getPosts() {
		return repository.findAll();	 
	}
	
	//Delete Method
	public List<PetSell> Delete(int id){
		repository.deleteById(id);
		return repository.findAll();
	}

}
