sap.ui.define([
    '../../model/UpdatePatientRequest'
], function (UpdatePatientRequest) {
    "use strict";

    let URL = "https://p2001866547trial-trial-dev-backend.cfapps.eu10.hana.ondemand.com";
    return {
        getPatients: function () {
            return $.ajax({
                "url": URL + "/patients"
            }).done(function (response, status) {
                // debugger;
                return response;
            });
        },

        updatePatient: function (patientId, doctorId) {
            // debugger;
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