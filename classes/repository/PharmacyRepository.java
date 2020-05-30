package com.example.demo.classes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classes.Pharmacy;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Integer> {

	List<Pharmacy> findByPid(int vid);

	List<Pharmacy> findByCityLike(String city);

}
