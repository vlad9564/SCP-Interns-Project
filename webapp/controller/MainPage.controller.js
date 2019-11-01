sap.ui.define(['sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	"com/cerner/interns/SAPUI5_Demo/model/models",
	'com/cerner/interns/SAPUI5_Demo/api/doctor/DoctorsAPI',
<<<<<<< HEAD
	'com/cerner/interns/SAPUI5_Demo/api/patientApi'
], function (Controller, JSONModel, models, DoctorsAPI, PatientApi) {
=======
	'com/cerner/interns/SAPUI5_Demo/api/patientApi',
	'com/cerner/interns/SAPUI5_Demo/api/aboutApi'
], function (Controller, JSONModel, models, DoctorsAPI, PatientApi, AboutApi) {
>>>>>>> Added: About API
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

<<<<<<< HEAD
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
=======
			let aDoc;
			await DoctorsAPI.getDoctors().then(function (result) {
				if (result) {
					aDoc = result;
				}
			});
			console.log(aDoc);

			let aPatients;
			await PatientApi.getPatients().then(function (result) {
				if (result) {
					aPatients = result;
>>>>>>> Added: About API
				}
			});
			console.log(aPatients);

<<<<<<< HEAD

=======
			let aAbout;
			await AboutApi.getAbout().then(function (result) {
				if (result) {
					aAbout = result;
				}
			});
			console.log(aAbout);
>>>>>>> Added: About API

		},
		onSelectedDoctor: function (oEvent) {
			let currentDoctorPath = oEvent.getSource().getBindingContextPath("doctors");
			debugger;
			return this.getView().getModel("doctors").getProperty(currentDoctorPath);
		},


	});
});