package com.example.demo.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.classes.Pharmacy;
import com.example.demo.service.PharmacyService;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PharmacyController {

	@Autowired
	private PharmacyService service;
	
	@PostMapping("/addPharmacy")
	public String uplaodImage(@RequestParam("file") MultipartFile file, @RequestParam("pharmacy") String pharmacy) throws IOException {
		Pharmacy p = new ObjectMapper().readValue(pharmacy, Pharmacy.class);
		File convertfile = new File("D://SpringBoot+Angular Projects//finalProject//Petcare//src//assets//pharmacy//"+file.getOriginalFilename());
		convertfile.createNewFile();
		FileOutputStream fo = new FileOutputStream(convertfile);
		fo.write(file.getBytes());
		fo.close();
		p.setFilename("/"+"assets"+"/"+"pharmacy"+"/"+file.getOriginalFilename());
		return service.addPharmacy(p);	
	}
	
	//Get methods
	    @GetMapping("/GetAllPharmacies")
		public List<Pharmacy> getAll(){
			return service.getAll();
		}
	    @GetMapping("/GetPharmacybyid/{id}")
		public Pharmacy getByid(@PathVariable int id) {
			return service.getByid(id);
		}
	    @GetMapping("/GetAllPharmaciesByPid/{pid}")
		public List<Pharmacy> getBypid(@PathVariable int pid){
			return service.getBypid(pid);
		} 
	    @GetMapping("/GetAllPharmaciesBycity/{city}")
		public List<Pharmacy> getBycity(@PathVariable String city){
			return service.getByCity(city);
		}
		
		//update methods
	    @PutMapping("/updatePharmacyDateTime")
		public Pharmacy updateDate(@RequestBody Pharmacy p) {
			return service.updateDate(p);
		}
	  //Delete methods
	    @DeleteMapping("/DeletePharmacy/{id}")
		public List<Pharmacy> DeletePharmacy(@PathVariable int id) {
			return service.Delete(id);
		}
}
