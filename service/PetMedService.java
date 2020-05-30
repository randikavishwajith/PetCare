package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.classes.PetMedHistory;
import com.example.demo.classes.repository.PetMedHistoryRepository;

@Service
public class PetMedService {
	
	@Autowired
	private PetMedHistoryRepository repository;
	
	//Post Methods
	public String AddMedicine(PetMedHistory med) {
		repository.save(med);
		return "Saved";
	}
	
	//Get Methods
	public List<PetMedHistory> getMedHistoryByPetid(int petid){
		return repository.findByPetid(petid);
	}

}
