sap.ui.define([], function () {
    "use strict";

    let URL = "https://p2001866547trial-trial-dev-backend.cfapps.eu10.hana.ondemand.com";

    return {

        getDoctors: function () {
            return $.ajax({
                "url": URL + "/doctors"
            }).done(function (response, status) {
                // debugger;
                return response;
            });
        }
    };
});