package com.example.demo.classes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classes.Clinic;

public interface ClinicRepository extends JpaRepository<Clinic, Integer> {

	List<Clinic> findByVid(int vid);

	List<Clinic> findByClinicnameLikeOrVnameLike(String clinicname, String vname);

	List<Clinic> findByCityLike(String city);

}
