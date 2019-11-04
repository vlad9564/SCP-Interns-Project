sap.ui.define([], function () {
    "use strict";

    return {

        getDoctors: function () {
            return $.ajax('http://localhost:8080/doctors', {})
        },
    };
});