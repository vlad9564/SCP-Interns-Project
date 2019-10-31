sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        // getDoctors: function () {
        //     var oDoctors = new JSONModel("./api/Doctors.json");
        //     return oDoctors;
        // },

        getDoctors: function () {
            return $.ajax('./api/doctor/Doctors.json', {})
            // .then(
            //     function success(oData) {
            //         console.log(oData);
            //     },

            //     function fail(oResponse) {
            //         alert(`Error: ${oResponse.status}`);
            //     }
            // );
        },

        // getDoctors: function () {
        //     $.getJSON("./api/Doctors.json", function (result) {
        //         $.each(result, function (i, field) {
        //             $("div").append(field + " ");
        //         });
        //     });
        // }


    };
});