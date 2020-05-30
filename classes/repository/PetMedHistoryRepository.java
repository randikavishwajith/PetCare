package com.example.demo.classes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classes.PetMedHistory;

public interface PetMedHistoryRepository extends JpaRepository<PetMedHistory, Integer> {

	List<PetMedHistory> findByPetid(int petid);

}
