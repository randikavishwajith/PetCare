package com.example.demo.classes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classes.PetSell;

public interface PetSellRepository extends JpaRepository<PetSell, Integer> {

	List<PetSell> findByuid(int uid);

}
