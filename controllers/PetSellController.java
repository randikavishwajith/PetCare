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
import com.example.demo.classes.PetSell;
import com.example.demo.service.PetSellService;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PetSellController {
	
	@Autowired
	private PetSellService service;
	
	@PostMapping("/AddSellPet")
	public String uplaodImage(@RequestParam("file") MultipartFile file, @RequestParam("pet") String pet) throws IOException {
		PetSell p = new ObjectMapper().readValue(pet, PetSell.class);
		File convertfile = new File("D://SpringBoot+Angular Projects//finalProject//Petcare//src//assets//sellpet//"+file.getOriginalFilename());
		convertfile.createNewFile();
		FileOutputStream fo = new FileOutputStream(convertfile);
		fo.write(file.getBytes());
		fo.close();
		p.setFilename("/"+"assets"+"/"+"sellpet"+"/"+file.getOriginalFilename());
		return service.savepost(p);	
	}
	

	@GetMapping("/PetPosts")
	public List<PetSell> findall(){
		return service.getPosts();
	}
	
	//Delete methods
    @DeleteMapping("/DeletePetSell/{id}")
	public List<PetSell> DeletePetSell(@PathVariable int id) {
		return service.Delete(id);
	}

}
