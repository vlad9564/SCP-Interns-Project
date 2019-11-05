/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package com.cerner.SCPInternsProjectBackend.controller;

import com.cerner.SCPInternsProjectBackend.model.DoctorDto;
import com.cerner.SCPInternsProjectBackend.model.DoctorsDto;
import com.cerner.SCPInternsProjectBackend.model.PatientDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Api(value = "patient", description = "the patient API")
public interface PatientApi {

    Logger log = LoggerFactory.getLogger(PatientApi.class);

    default Optional<ObjectMapper> getObjectMapper() {
        return Optional.empty();
    }

    default Optional<HttpServletRequest> getRequest() {
        return Optional.empty();
    }

    default Optional<String> getAcceptHeader() {
        return getRequest().map(r -> r.getHeader("Accept"));
    }

    @ApiOperation(value = "Updated patient", nickname = "updatePatient", notes = "Update used to assing a patient to a doctor", response = PatientDto.class, tags={ "patient", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successfull operation", response = PatientDto.class),
        @ApiResponse(code = 400, message = "Invalid user supplied"),
        @ApiResponse(code = 404, message = "Patient not found"),
        @ApiResponse(code = 500, message = "Internal server error") })
    @RequestMapping(value = "/patient",
        produces = { "application/json" }, 
        method = RequestMethod.PUT)
    default ResponseEntity<PatientDto> updatePatient(@NotNull @ApiParam(value = "Patient id that need to be updated", required = true) @Valid @RequestParam(value = "patientId", required = true) String patientId,@ApiParam(value = "Doctor for patient" ,required=true )  @Valid @RequestBody DoctorDto body) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("\"\"", PatientDto.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default PatientApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

}
