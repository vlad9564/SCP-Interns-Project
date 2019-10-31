package com.cerner.SCPInternsProjectBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.cerner.SCPInternsProjectBackend.model.AboutDto;
import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.cerner.SCPInternsProjectBackend.service.AboutService;

@Controller
public class AboutApiController implements AboutApi {

	@Autowired
	private AboutService aboutService;
	
	@Override
	public ResponseEntity<AboutDto> getAboutInfo() {
		try {
			return ResponseEntity.ok(aboutService.getAboutInfo());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
