package com.cerner.SCPInternsProjectBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cerner.SCPInternsProjectBackend.Util.DataGenerator;
import com.cerner.SCPInternsProjectBackend.model.PatientDto;

@SpringBootApplication
public class ScpInternsProjectBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScpInternsProjectBackendApplication.class, args);
		DataGenerator.generateDoctors();
	}

}
