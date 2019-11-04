package com.cerner.SCPInternsProjectBackend.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
	
	private PatientDto findPatientById(String patientId) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		List<PatientDto> patients = mapper.readValue(getPatientsFile(), PatientsDto.class);
		PatientDto patient = patients.stream().filter(value -> value.getId().equals(patientId)).findFirst().get();
		return patient;
	}
	
	public PatientDto updatePatient(String patientId,DoctorDto body) throws JsonParseException, JsonMappingException, IOException {

		PatientDto patient = this.findPatientById(patientId);
		patient.setDoctor(body);
//		System.out.println(patient);
		return patient;
	}
}
