package com.cerner.SCPInternsProjectBackend.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
	
	private File getDoctorsFile() throws FileNotFoundException {
		return ResourceUtils.getFile("classpath:doctors.json");
	}
	
	private DoctorDto findDoctorById(String doctorId) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		DoctorsDto doctors = mapper.readValue(getDoctorsFile(), DoctorsDto.class);
		DoctorDto doctor = doctors.stream().filter(value -> value.getId().equals(doctorId)).findFirst().get();
		
		return doctor;
	}
		
	public PatientDto updatePatient(String patientId,String doctorId) throws IOException{
		ObjectMapper mapper = new ObjectMapper();
		PatientsDto patients = mapper.readValue(getPatientsFile(), PatientsDto.class);
		patients.stream().filter(p -> p.getId().equals(patientId)).findFirst().get().setDoctor(this.findDoctorById(doctorId));
		FileWriter fileWriter = new FileWriter(ResourceUtils.getFile("classpath:patients.json"));
		fileWriter.write(patients.toJSON());
		fileWriter.close();
		PatientDto chec =  patients.stream().filter(value -> value.getId().equals(patientId)).findFirst().get(); 
		return chec;
	}
}
