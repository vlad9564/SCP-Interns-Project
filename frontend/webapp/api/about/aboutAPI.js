sap.ui.define([], function () {
    "use strict";

    let URL = "https://p2001866547trial-trial-dev-backend.cfapps.eu10.hana.ondemand.com";

    return {
        getAbout: function () {
            return $.ajax({ "url": URL + "/about" }).done(function (response) {
                return response;
            });
        }
    };
});