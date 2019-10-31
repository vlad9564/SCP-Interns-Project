sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        getPatients: function () {
            return $.ajax('./api/patients.json', {})
        }
    };
});