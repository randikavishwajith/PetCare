package com.example.demo.classes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "Petsell_TBL")
public class PetSell {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  nullable = false)
	private int id;
	
	@Column(name="uid")
	private int uid;
	
	@Column(name="breed")
	private String breed;
	
	@Column(name="subbreed")
	private String subbreed;
	
	@Column(name="contact")
	private String contact;
	
	@Column(name="description")
	private  String description;
	
	@Column(name="imagebyte")	
	private byte[] imagebyte;
	
	@Column(name="filename")	
	private String filename;

}
