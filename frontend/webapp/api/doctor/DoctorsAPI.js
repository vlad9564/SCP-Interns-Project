sap.ui.define([], function () {
    "use strict";

    return {

        getDoctors: function () {
            return $.ajax('./api/doctor/Doctors.json', {})
        },
    };
});