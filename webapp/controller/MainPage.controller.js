sap.ui.define(['sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	"com/cerner/interns/SAPUI5_Demo/model/models",
	'com/cerner/interns/SAPUI5_Demo/api/doctor/DoctorsAPI',
	'com/cerner/interns/SAPUI5_Demo/api/patientApi'
], function (Controller, JSONModel, models, DoctorsAPI, PatientApi) {
	'use strict';
	return Controller.extend('com.cerner.interns.SAPUI5_Demo.controller.MainPage', {
		_data: {
			dtValue: new Date()
		},

		onInit: async function (evt) {
			var oDoctorModel = models.createDoctorModel();
			this.getView().setModel(oDoctorModel, "doctors");
			var oModel = new JSONModel(this._data);
			this.getView().setModel(oModel, 'systemDate');

			let aDoctors;
			await DoctorsAPI.getDoctors().then(function (oResult) {
				if (oResult) {
					aDoctors = oResult;
				}
			});
			console.log(aDoctors);

			let aPatients;
			await PatientApi.getPatients().then(function (oResult) {
				if (oResult) {
					aPatients = oResult;
				}
			});
			console.log(aPatients);



		},
		onSelectedDoctor: function (oEvent) {
			let currentDoctorPath = oEvent.getSource().getBindingContextPath("doctors");
			debugger;
			return this.getView().getModel("doctors").getProperty(currentDoctorPath);
		},


	});
});