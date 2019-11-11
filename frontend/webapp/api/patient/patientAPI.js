sap.ui.define([], function () {
    "use strict";

    const URL = "http://localhost:8080/patients";
    return {
        getPatients: function () {
            return $.ajax({
                "url": URL,
            }).done(function (response) {
                return response;
            });
        },

        updatePatient: function (patientId, oDoctor) {
            var settings = {

                "url": `${URL}/patient?patientId=${patientId}`,
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json",
                },
                "data": JSON.stringify(oDoctor)
            }
            $.ajax(settings).done(function (response) {
            });
        }
    };
});