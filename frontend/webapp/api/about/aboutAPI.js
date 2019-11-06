sap.ui.define([], function () {
    "use strict";

    return {
        getAbout: function () {
            return $.ajax('./api/about/about.json', {})
        }
    };
});