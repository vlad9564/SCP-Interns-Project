package com.cerner.SCPInternsProjectBackend.model;

import java.util.Objects;
import com.cerner.SCPInternsProjectBackend.model.DoctorDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * PatientDto
 */
@Validated

public class PatientDto   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("firstName")
  private String firstName = null;

  @JsonProperty("lastName")
  private String lastName = null;

  @JsonProperty("doctor")
  private DoctorDto doctor = null;

  @JsonProperty("age")
  private Integer age = null;

  public PatientDto id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public PatientDto firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * The first name of the Patient
   * @return firstName
  **/
  @ApiModelProperty(value = "The first name of the Patient")


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public PatientDto lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * The last name of the Patient
   * @return lastName
  **/
  @ApiModelProperty(value = "The last name of the Patient")


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public PatientDto doctor(DoctorDto doctor) {
    this.doctor = doctor;
    return this;
  }

  /**
   * Get doctor
   * @return doctor
  **/
  @ApiModelProperty(value = "")

  @Valid

  public DoctorDto getDoctor() {
    return doctor;
  }

  public void setDoctor(DoctorDto doctor) {
    this.doctor = doctor;
  }

  public PatientDto age(Integer age) {
    this.age = age;
    return this;
  }

  /**
   * The age of the Patient
   * @return age
  **/
  @ApiModelProperty(value = "The age of the Patient")


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
    PatientDto patientDto = (PatientDto) o;
    return Objects.equals(this.id, patientDto.id) &&
        Objects.equals(this.firstName, patientDto.firstName) &&
        Objects.equals(this.lastName, patientDto.lastName) &&
        Objects.equals(this.doctor, patientDto.doctor) &&
        Objects.equals(this.age, patientDto.age);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, firstName, lastName, doctor, age);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PatientDto {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    doctor: ").append(toIndentedString(doctor)).append("\n");
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

