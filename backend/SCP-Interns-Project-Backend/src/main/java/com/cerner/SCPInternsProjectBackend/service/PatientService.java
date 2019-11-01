package com.cerner.SCPInternsProjectBackend.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.cerner.SCPInternsProjectBackend.model.DoctorDto;
import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.cerner.SCPInternsProjectBackend.model.PatientDto;
import com.cerner.SCPInternsProjectBackend.model.PatientsDto;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PatientService {

	private File getPatientsFile() throws FileNotFoundException {
		return ResourceUtils.getFile("classpath:patients.json");
	}
	
//	public DoctorsDto getAllDoctors() throws JsonParseException, JsonMappingException, IOException {
//		ObjectMapper mapper = new ObjectMapper();
//		return mapper.readValue(getDoctorsFile(), DoctorsDto.class);
//	}
	
	private PatientsDto findPatientById() throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.readValue(getPatientsFile(), PatientsDto.class);
	}
	
	public PatientDto updatePatient(String patientId,DoctorDto body) throws JsonParseException, JsonMappingException, IOException {
//		ObjectMapper mapper = new ObjectMapper();
		System.out.println(this.findPatientById());
//		System.out.println(patientId);
//		System.out.println(body);
//		System.out.println(this.getPatientsFile());
		
		return null;
	}
}
