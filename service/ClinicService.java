package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.classes.Clinic;
import com.example.demo.classes.repository.ClinicRepository;

@Service
public class ClinicService {
	
	@Autowired
	private ClinicRepository repository;
	
	//post methods	
	public String addClinic(Clinic c) {
		repository.save(c);
		return "Saved";
	}
	
	//Get methods
	public List<Clinic> getAll(){
		return repository.findAll();
	}
	
	public Clinic getByid(int id) {
		return repository.findById(id).orElse(null);
	}
	
	public List<Clinic> getByvid(int vid){
		return repository.findByVid(vid);
	} 
	
	public List<Clinic> getBynameorvname(String clinicname, String vname){
		return repository.findByClinicnameLikeOrVnameLike(clinicname,vname);
	}
	public List<Clinic> getByCity(String city){
  		return repository.findByCityLike(city);
  	}
	
	//update methods
	public Clinic updateDate(Clinic c) {
		Clinic cc = repository.findById(c.getId()).orElse(null);
		cc.setDecision(c.getDecision());
		cc.setDate(c.getDate());
		cc.setStime(c.getStime());
		cc.setCtime(c.getCtime());
		return repository.save(cc);
	}
	
	//Delete method
	public List<Clinic> Delete(int id){
		repository.deleteById(id);
		return repository.findAll();
	}
}
