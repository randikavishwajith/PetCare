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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.classes.PetRegister;
import com.example.demo.service.PetService;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PetConteroller {
	
	@Autowired
	private PetService service;
		
	@PostMapping("/AddpetToFile")
	public String uplaodImage(@RequestParam("file") MultipartFile file, @RequestParam("pet") String pet) throws IOException {
		PetRegister p = new ObjectMapper().readValue(pet, PetRegister.class);
		File convertfile = new File("D://SpringBoot+Angular Projects//finalProject//Petcare//src//assets//"+file.getOriginalFilename());
		convertfile.createNewFile();
		FileOutputStream fo = new FileOutputStream(convertfile);
		fo.write(file.getBytes());
		fo.close();
		p.setFilename("/"+"assets"+"/"+file.getOriginalFilename());
		return service.savepet(p);	
	}
	
	@GetMapping("/AllPets")
	public List<PetRegister> getAll(){
		return service.getAll();
	}
	
	@GetMapping("/PetByname/{petname}")
	public List<PetRegister> getbyname(@PathVariable String petname){
		return service.getbyname(petname);
	}
	@GetMapping("/PetById/{uuid}")
	public List<PetRegister> findbyuuid(@PathVariable int uuid){
		return service.getpetbyuserid(uuid);
	}
	
	@GetMapping("/PetByIdd/{id}")
	public PetRegister findbyid(@PathVariable int id){
		return service.getpetbyid(id);
	}
	//Delete methods
    @DeleteMapping("/DeletePetRegister/{id}")
	public List<PetRegister> DeletePetRegister(@PathVariable int id) {
		return service.Delete(id);
	}
}
