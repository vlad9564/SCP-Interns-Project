package com.cerner.SCPInternsProjectBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.cerner.SCPInternsProjectBackend.service.DoctorsService;

@Controller
public class DoctorsApiController implements DoctorsApi {

	@Autowired
	private DoctorsService doctorsService;
	
	@Override
	public ResponseEntity<DoctorsDto> getAllDoctors() {
		try {
			return ResponseEntity.ok(doctorsService.getAllDoctors());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
