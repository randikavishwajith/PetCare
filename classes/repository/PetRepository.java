package com.example.demo.classes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classes.PetRegister;

public interface PetRepository extends JpaRepository<PetRegister, Integer> {

	List<PetRegister> findBypetname(String petname);

	List<PetRegister> findByuuid(int uuid);

}
