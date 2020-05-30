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
@Table(name= "Pet_TBL")
public class PetRegister {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  nullable = false)
	private int id;
	
	@Column(name = "uuid")
	private int uuid;
	
	@Column(name = "petname")
	private String petname;
	
	@Column(name = "ownername")
	private String ownername;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "breed")
	private String breed;
	
	@Column(name = "contact")
	private int contact;
	
	@Column(name = "description")
	private String description;
	
	@Column(name="imagebyte")	
	private byte[] imagebyte;
	
	@Column(name="filename")	
	private String filename;
	
}
