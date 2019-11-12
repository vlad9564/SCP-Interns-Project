sap.ui.define(
    [],
    function () {
        'use strict';
        class UpdatePatientLinkModel {
            constructor(patientId = null, doctorId = null) {
                this.patientId = patientId;
                this.doctorId = doctorId;
            }
        }
        return UpdatePatientLinkModel;
    })