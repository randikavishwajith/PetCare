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
@Table(name= "Users_TBL")
public class UserRegister {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  nullable = false)
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "role")
	private String role;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "contact")
	private int contact;
	@Column(name = "approve")
	private boolean approve;
}