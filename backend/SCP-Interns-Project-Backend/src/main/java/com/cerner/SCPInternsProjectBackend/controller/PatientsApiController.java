package com.cerner.SCPInternsProjectBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.cerner.SCPInternsProjectBackend.model.PatientsDto;
import com.cerner.SCPInternsProjectBackend.service.PatientsService;

@Controller
public class PatientsApiController implements PatientsApi {

	@Autowired
	private PatientsService patientsService;

	@Override
	public ResponseEntity<PatientsDto> getAllPatients() {
		try {
			return ResponseEntity.ok(patientsService.getAllPatients());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
