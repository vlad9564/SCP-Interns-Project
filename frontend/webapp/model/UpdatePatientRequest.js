sap.ui.define(
    [],
    function () {
        'use strict';
        class UpdatePatientRequest {
            constructor(doctorId) {
                this.doctorId = doctorId;
            }
        }
        return UpdatePatientRequest;
    })