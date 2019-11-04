package com.cerner.SCPInternsProjectBackend.Util;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

import com.cerner.SCPInternsProjectBackend.model.DoctorDto;
import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.cerner.SCPInternsProjectBackend.model.PatientDto;
import com.cerner.SCPInternsProjectBackend.model.PatientsDto;

public class DataGenerator {
	
	private static UUID uuid;
	
	private static final ArrayList<String> firstNameList = 
			new ArrayList<String>(Arrays.asList(
					"Mircea", "Marcel", "Cristian", "Andrei", "Dragos", 
					"Corina", "Sandra", "Alexandru", "Florin", "Vlad", 
					"Xenia", "Cezar", "Andra", "Rares", "Razvan", "Dan"));
	
	private static final ArrayList<String> lastNameList = 
			new ArrayList<String>(Arrays.asList(
					"Maximilian", "Popescu", "Marcu", "Stanciu", "Iacob",
					"Aldea", "Carnat", "Colceriu", "Culcear", "Solomon",
					"Boicu", "Ciobanu", "Campean", "Serban", "Bobes",
					"Balan", "Balau", "Cabal", "Irimia", "Tazlaoanu"));
	
	private static final ArrayList<String> departmentList = 
			new ArrayList<String>(Arrays.asList(
					"chirurgie", "ortopedie", "recuperare", "reanimare",
					"cardiologie", "alergologie", "neurologie"));
	
	public static void generatePatients() {
		PatientsDto patients = new PatientsDto();
		for(int counter = 0; counter < 30; counter++) {
			uuid = UUID.randomUUID();
			Collections.shuffle(firstNameList);
			Collections.shuffle(lastNameList);
			PatientDto patient = new PatientDto(
					uuid.toString(),
					firstNameList.get(0),
					lastNameList.get(0),
					null,
					ThreadLocalRandom.current().nextInt(18, 50));
			patients.add(patient);
		}
		try {
			FileWriter out = new FileWriter("patients.json");
			out.write(patients.toJSON());
			out.flush();
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void generateDoctors() {
		DoctorsDto doctors = new DoctorsDto();
		for(int counter = 0; counter < 10; counter++) {
			uuid = UUID.randomUUID();
			Collections.shuffle(firstNameList);
			Collections.shuffle(lastNameList);
			Collections.shuffle(departmentList);
			DoctorDto doctor = new DoctorDto(
					uuid.toString(),
					firstNameList.get(0),
					lastNameList.get(0),
					departmentList.get(0),
					ThreadLocalRandom.current().nextInt(18, 50));
			doctors.add(doctor);
		}
		try {
			FileWriter out = new FileWriter("doctors.json");
			out.write(doctors.toJSON());
			out.flush();
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
