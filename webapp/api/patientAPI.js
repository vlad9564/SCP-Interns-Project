sap.ui.define([], function () {
    "use strict";

    return {
        getPatients: function () {
            return $.ajax('./api/patients.json', {})
        }
    };
});