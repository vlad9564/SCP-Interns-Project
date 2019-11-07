sap.ui.define([], function () {
    "use strict";

    return {
        getAbout: function () {
            return $.ajax('./api/about/About.json', {}).done(function (response) {
                return response;
            });
        }
    };
});