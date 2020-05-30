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

import com.example.demo.classes.Clinic;
import com.example.demo.service.ClinicService;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClinicController {
	
	@Autowired
	private ClinicService service;
	
	@PostMapping("/addClinic")
	public String uplaodImage(@RequestParam("file") MultipartFile file, @RequestParam("clinic") String clinic) throws IOException {
		Clinic c = new ObjectMapper().readValue(clinic, Clinic.class);
		File convertfile = new File("D://SpringBoot+Angular Projects//finalProject//Petcare//src//assets//clinic//"+file.getOriginalFilename());
		convertfile.createNewFile();
		FileOutputStream fo = new FileOutputStream(convertfile);
		fo.write(file.getBytes());
		fo.close();
		c.setFilename("/"+"assets"+"/"+"clinic"+"/"+file.getOriginalFilename());
		return service.addClinic(c);	
	}
	
	//Get methods
	    @GetMapping("/GetAllClinics")
		public List<Clinic> getAll(){
			return service.getAll();
		}
	    @GetMapping("/GetClinicbyid/{id}")
		public Clinic getByid(@PathVariable int id) {
			return service.getByid(id);
		}
	    @GetMapping("/GetAllClinicsByVid/{vid}")
		public List<Clinic> getByvid(@PathVariable int vid){
			return service.getByvid(vid);
		} 
	    @GetMapping("/GetAllClinicsBycity/{city}")
		public List<Clinic> getBycity(@PathVariable String city){
			return service.getByCity(city);
		}
	    @GetMapping("/GetAllClinicsByname/{clinicname}/name/{vname}")
		public List<Clinic> getBynameorvname(@PathVariable String clinicname,@PathVariable String vname){
			return service.getBynameorvname(clinicname,vname);
		}
		
		//update methods
	    @PutMapping("/updateDateTime")
		public Clinic updateDate(@RequestBody Clinic c) {
			return service.updateDate(c);
		}
	    //Delete methods
	    @DeleteMapping("/DeleteClinic/{id}")
		public List<Clinic> DeleteClinic(@PathVariable int id) {
			return service.Delete(id);
		}
		

}
