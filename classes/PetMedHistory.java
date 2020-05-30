package com.example.demo.classes;

import java.util.Date;

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
@Table(name= "Petmed_TBL")
public class PetMedHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  nullable = false)
	private int id;
	
	@Column(name = "petid",  nullable = false)
	private int petid;
	
	@Column(name = "petname")
	private String petname;
	
	@Column(name = "dname")
	private String dname;
	
	@Column(name = "date")
	private Date date;
	
	@Column(name = "medicines")
	private String medicines;
	
	@Column(name = "reason")
	private String reason;
}
