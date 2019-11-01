package com.cerner.SCPInternsProjectBackend.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * AboutDto
 */
@Validated

public class AboutDto   {
  @JsonProperty("description")
  private String description = null;

  @JsonProperty("title")
  private String title = null;

  @JsonProperty("hospitalName")
  private String hospitalName = null;

  @JsonProperty("hospitalLocation")
  private String hospitalLocation = null;

  @JsonProperty("version")
  private Integer version = null;

  @JsonProperty("contact")
  private String contact = null;

  public AboutDto description(String description) {
    this.description = description;
    return this;
  }

  /**
   * The description of the hospital
   * @return description
  **/
  @ApiModelProperty(value = "The description of the hospital")


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public AboutDto title(String title) {
    this.title = title;
    return this;
  }

  /**
   * The title of the section
   * @return title
  **/
  @ApiModelProperty(value = "The title of the section")


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public AboutDto hospitalName(String hospitalName) {
    this.hospitalName = hospitalName;
    return this;
  }

  /**
   * The name of the hospital
   * @return hospitalName
  **/
  @ApiModelProperty(value = "The name of the hospital")


  public String getHospitalName() {
    return hospitalName;
  }

  public void setHospitalName(String hospitalName) {
    this.hospitalName = hospitalName;
  }

  public AboutDto hospitalLocation(String hospitalLocation) {
    this.hospitalLocation = hospitalLocation;
    return this;
  }

  /**
   * The location of the hospital
   * @return hospitalLocation
  **/
  @ApiModelProperty(value = "The location of the hospital")


  public String getHospitalLocation() {
    return hospitalLocation;
  }

  public void setHospitalLocation(String hospitalLocation) {
    this.hospitalLocation = hospitalLocation;
  }

  public AboutDto version(Integer version) {
    this.version = version;
    return this;
  }

  /**
   * Application version
   * @return version
  **/
  @ApiModelProperty(value = "Application version")


  public Integer getVersion() {
    return version;
  }

  public void setVersion(Integer version) {
    this.version = version;
  }

  public AboutDto contact(String contact) {
    this.contact = contact;
    return this;
  }

  /**
   * Hospital contact
   * @return contact
  **/
  @ApiModelProperty(value = "Hospital contact")


  public String getContact() {
    return contact;
  }

  public void setContact(String contact) {
    this.contact = contact;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AboutDto aboutDto = (AboutDto) o;
    return Objects.equals(this.description, aboutDto.description) &&
        Objects.equals(this.title, aboutDto.title) &&
        Objects.equals(this.hospitalName, aboutDto.hospitalName) &&
        Objects.equals(this.hospitalLocation, aboutDto.hospitalLocation) &&
        Objects.equals(this.version, aboutDto.version) &&
        Objects.equals(this.contact, aboutDto.contact);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, title, hospitalName, hospitalLocation, version, contact);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AboutDto {\n");
    
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    hospitalName: ").append(toIndentedString(hospitalName)).append("\n");
    sb.append("    hospitalLocation: ").append(toIndentedString(hospitalLocation)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    contact: ").append(toIndentedString(contact)).append("\n");
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

