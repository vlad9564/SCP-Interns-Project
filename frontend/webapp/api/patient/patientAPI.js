sap.ui.define([], function () {
    "use strict";

    return {
        getPatients: function () {
            return $.ajax({
                "url": "http://localhost:8080/patients",
            }).done(function (response) {
                return response;
            });
        },

        updatePatient: function (oPatient) {
            var settings = {

                "url": `${URL}/patient?patientId=${oPatient.id}`,
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json",
                },
                "data": JSON.stringify(oPatient)
            }
            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    };
});