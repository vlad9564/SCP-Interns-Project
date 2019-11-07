sap.ui.define([], function () {
    "use strict";

    return {
        getPatients: function () {
            return $.ajax('./api/patient/Patients.json', {}).done(function (response) {
                return response;
            });
        }
    };
});