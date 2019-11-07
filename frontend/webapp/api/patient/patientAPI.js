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