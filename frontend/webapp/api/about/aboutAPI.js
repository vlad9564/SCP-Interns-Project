sap.ui.define([], function () {
    "use strict";

    return {
        getAbout: function () {
            return $.ajax('http://localhost:8080/about', {}).done(function (response) {
                return response;
            });
        }
    };
});