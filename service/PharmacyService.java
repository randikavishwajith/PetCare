package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.classes.Pharmacy;
import com.example.demo.classes.repository.PharmacyRepository;

@Service
public class PharmacyService {

	      @Autowired
	      private PharmacyRepository repository;
	      
	    //post methods	
	  	public String addPharmacy(Pharmacy c) {
	  		repository.save(c);
	  		return "Saved";
	  	}
	  	
	  	//Get methods
	  	public List<Pharmacy> getAll(){
	  		return repository.findAll();
	  	}
	  	
	  	public Pharmacy getByid(int id) {
	  		return repository.findById(id).orElse(null);
	  	}
	  	
	  	public List<Pharmacy> getBypid(int pid){
	  		return repository.findByPid(pid);
	  	} 
	  	
	  	public List<Pharmacy> getByCity(String city){
	  		return repository.findByCityLike(city);
	  	}
	  	
	  	//update methods
	  	public Pharmacy updateDate(Pharmacy p) {
	  		Pharmacy pp = repository.findById(p.getId()).orElse(null);
	  		pp.setDecision(p.getDecision());
	  		pp.setDate(p.getDate());
	  		pp.setStime(p.getStime());
	  		pp.setCtime(p.getCtime());
	  		return repository.save(pp);
	  	}
	  //Delete Methods
		
		public List<Pharmacy> Delete(int id){
			repository.deleteById(id);
			return repository.findAll();
		}
}
