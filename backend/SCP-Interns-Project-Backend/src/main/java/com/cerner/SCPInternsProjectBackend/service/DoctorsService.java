package com.cerner.SCPInternsProjectBackend.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class DoctorsService {

	private File getDoctorsFile() throws FileNotFoundException {
		return ResourceUtils.getFile("classpath:doctors.json");
	}

	public DoctorsDto getAllDoctors() throws JsonParseException, JsonMappingException, IOException {
		return new ObjectMapper().readValue(getDoctorsFile(), DoctorsDto.class);
	}
}
