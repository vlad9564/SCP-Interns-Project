package com.cerner.SCPInternsProjectBackend.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.cerner.SCPInternsProjectBackend.model.PatientsDto;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PatientsService {

	private File getPatientsFile() throws FileNotFoundException {
		return ResourceUtils.getFile("classpath:patients.json");
	}

	public PatientsDto getAllPatients() throws JsonParseException, JsonMappingException, IOException {
		return new ObjectMapper().readValue(getPatientsFile(), PatientsDto.class);
	}
}
