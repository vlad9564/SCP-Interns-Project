package com.cerner.SCPInternsProjectBackend.model;

import java.util.Objects;

import org.springframework.validation.annotation.Validated;

import com.cerner.SCPInternsProjectBackend.Util.JSONTranslatable;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DoctorDto
 */
@Validated

public class DoctorDto implements JSONTranslatable {
	@JsonProperty("id")
	private String id = null;

	@JsonProperty("firstName")
	private String firstName = null;

	@JsonProperty("lastName")
	private String lastName = null;

	@JsonProperty("department")
	private String department = null;

	@JsonProperty("age")
	private Integer age = null;
	
	public DoctorDto() {
		
	}

	public DoctorDto(String id, String firstName, String lastName, String department, Integer age) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
		this.age = age;
	}



	public DoctorDto id(String id) {
		this.id = id;
		return this;
	}

	/**
	 * The objectId of the Doctor
	 * 
	 * @return id
	 **/

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public DoctorDto firstName(String firstName) {
		this.firstName = firstName;
		return this;
	}

	/**
	 * The first name of the Doctor
	 * 
	 * @return firstName
	 **/

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public DoctorDto lastName(String lastName) {
		this.lastName = lastName;
		return this;
	}

	/**
	 * The last name of the Doctor
	 * 
	 * @return lastName
	 **/

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public DoctorDto department(String department) {
		this.department = department;
		return this;
	}

	/**
	 * The department of the Doctor
	 * 
	 * @return department
	 **/

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public DoctorDto age(Integer age) {
		this.age = age;
		return this;
	}

	/**
	 * The age of the Doctor
	 * 
	 * @return age
	 **/

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		DoctorDto doctorDto = (DoctorDto) o;
		return Objects.equals(this.id, doctorDto.id) && Objects.equals(this.firstName, doctorDto.firstName)
				&& Objects.equals(this.lastName, doctorDto.lastName)
				&& Objects.equals(this.department, doctorDto.department) && Objects.equals(this.age, doctorDto.age);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, firstName, lastName, department, age);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class DoctorDto {\n");

		sb.append("    id: ").append(toIndentedString(id)).append("\n");
		sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
		sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
		sb.append("    department: ").append(toIndentedString(department)).append("\n");
		sb.append("    age: ").append(toIndentedString(age)).append("\n");
		sb.append("}");
		return sb.toString();
	}

	/**
	 * Convert the given object to string with each line indented by 4 spaces
	 * (except the first line).
	 */
	private String toIndentedString(java.lang.Object o) {
		if (o == null) {
			return "null";
		}
		return o.toString().replace("\n", "\n    ");
	}
}
