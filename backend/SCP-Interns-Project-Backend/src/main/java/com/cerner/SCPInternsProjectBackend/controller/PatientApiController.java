package com.cerner.SCPInternsProjectBackend.controller;

import com.cerner.SCPInternsProjectBackend.model.DoctorDto;
import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.cerner.SCPInternsProjectBackend.model.PatientDto;
import com.cerner.SCPInternsProjectBackend.service.PatientService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.annotations.ApiParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import java.io.IOException;
import java.util.Optional;

@Controller
public class PatientApiController implements PatientApi {
	
	@Autowired
	private PatientService servicePatient;
	
	@Override
	public ResponseEntity<PatientDto> updatePatient(@NotNull @ApiParam(value = "Patient id that need to be updated", required = true) @Valid @RequestParam(value = "patientId", required = true) String patientId,@ApiParam(value = "Doctor for patient" ,required=true )  @Valid @RequestBody DoctorDto body){
	
		
			try {
				String doctorId = body.getId();
				return ResponseEntity.ok(servicePatient.updatePatient(patientId,doctorId));
			} catch (IOException e) {
				e.printStackTrace();
				return null;
			}
		
	}
}
