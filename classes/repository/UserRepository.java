package com.example.demo.classes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classes.UserRegister;

public interface UserRepository extends JpaRepository<UserRegister, Integer> {

	//Query Methods
	UserRegister findByName(String name);
	UserRegister findByName(boolean approve);
	UserRegister findByNameLike(String name);
	UserRegister findByEmail(String email);
	List<UserRegister> findByNameLikeAndApprove(String name, boolean b);
	List<UserRegister> findByRole(String string);
	List<UserRegister> findByRoleAndApprove(String role, boolean b);
	List<UserRegister> findByNameLikeAndRoleAndApprove(String name, String role, boolean b);
	UserRegister findByEmailLike(String email);


}
