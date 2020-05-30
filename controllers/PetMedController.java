package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.classes.PetMedHistory;
import com.example.demo.service.PetMedService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PetMedController {
	
	@Autowired
	private PetMedService service;
	
	@PostMapping("/AddMedicine")
	public String AddMedicine(@RequestBody PetMedHistory med) {
		return service.AddMedicine(med);
	}
	
	@GetMapping("/PetMedHistory/{petid}")
	public List<PetMedHistory> getMedHistoryByPetid(@PathVariable int petid){
		return service.getMedHistoryByPetid(petid);
	}

}
