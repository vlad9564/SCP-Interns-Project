package com.cerner.SCPInternsProjectBackend.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.cerner.SCPInternsProjectBackend.model.AboutDto;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class AboutService {
	private File getAboutFile() throws FileNotFoundException {
		return ResourceUtils.getFile("classpath:about.json");
	}

	public AboutDto getAboutInfo() throws JsonParseException, JsonMappingException, IOException {
		return new ObjectMapper().readValue(getAboutFile(), AboutDto.class);
	}
}
