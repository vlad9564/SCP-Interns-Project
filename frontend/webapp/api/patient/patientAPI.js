sap.ui.define([], function () {
    "use strict";

    return {
        getPatients: function () {
            return $.ajax('./api/patient/patients.json', {})
        }
    };
});