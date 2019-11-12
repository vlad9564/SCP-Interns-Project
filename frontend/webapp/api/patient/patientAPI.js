sap.ui.define([
    '../../model/UpdatePatientRequest'
], function (UpdatePatientRequest) {
    "use strict";

    const URL = "http://localhost:8080/patients";
    return {
        getPatients: function () {
            return $.ajax({
                "url": URL,
            }).done(function (response, status) {
                debugger;
                return response;
            });
        },

        updatePatient: function (patientId, doctorId) {
            debugger;
            var settings = {
                "url": `${URL}/patient?patientId=${patientId}`,
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json",
                },
                "data": JSON.stringify(new UpdatePatientRequest(doctorId))
            }
            $.ajax(settings).done(function (response) {
                return response;
            });
        }
    };
});