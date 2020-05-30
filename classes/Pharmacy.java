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
@Table(name= "Pharmacy_TBL")
public class Pharmacy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  nullable = false)
	private int id;
	@Column(name = "pid",  nullable = false)
	private int pid;
	@Column(name = "pname")
	private String pname;
	@Column(name = "pharmacyname")
	private String pharmacyname;
	@Column(name = "date")
	private Date date;
	@Column(name = "stime")
	private String stime;
	@Column(name = "ctime")
	private String ctime;
	@Column(name = "decision")
	private String decision;
	@Column(name = "city")
	private String city;
	@Column(name = "contact")
	private int contact;
	@Column(name="imagebyte")	
	private byte[] imagebyte;
	
	@Column(name="filename")	
	private String filename;
}
